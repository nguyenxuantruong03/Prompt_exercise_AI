export interface AIProvider {
  name: string;
  apiKey: string;
  endpoint: string;
  model: string;
}

export const AI_PROVIDERS = {
  OPENAI: "openai",
  ANTHROPIC: "anthropic",
  GOOGLE: "google",
  HUGGINGFACE: "huggingface",
  GROQ: "groq",
} as const;

export type AIProviderType = (typeof AI_PROVIDERS)[keyof typeof AI_PROVIDERS];

export function getAIConfig(
  provider: AIProviderType = AI_PROVIDERS.OPENAI
): AIProvider {
  switch (provider) {
    case AI_PROVIDERS.OPENAI:
      return {
        name: "OpenAI",
        apiKey: process.env.OPENAI_API_KEY || "",
        endpoint: "https://api.openai.com/v1/chat/completions",
        model: "gpt-3.5-turbo",
      };
    case AI_PROVIDERS.ANTHROPIC:
      return {
        name: "Anthropic",
        apiKey: process.env.ANTHROPIC_API_KEY || "",
        endpoint: "https://api.anthropic.com/v1/messages",
        model: "claude-3-sonnet-20240229",
      };
    case AI_PROVIDERS.GOOGLE:
      return {
        name: "Google AI",
        apiKey: process.env.GOOGLE_AI_API_KEY || "",
        endpoint:
          "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
        model: "gemini-pro",
      };
    case AI_PROVIDERS.HUGGINGFACE:
      return {
        name: "Hugging Face",
        apiKey: process.env.HUGGINGFACE_API_KEY || "", // Remove hardcoded key
        endpoint:
          "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
        model: "microsoft/DialoGPT-large",
      };
    case AI_PROVIDERS.GROQ:
      return {
        name: "Groq",
        apiKey: process.env.GROQ_API_KEY || "",
        endpoint: "https://api.groq.com/openai/v1/chat/completions",
        model: "llama3-8b-8192", // Updated to currently supported model
      };
    default:
      return getAIConfig(AI_PROVIDERS.GROQ); // Default to GROQ instead of Hugging Face
  }
}

export async function callAI(
  prompt: string,
  provider: AIProviderType = AI_PROVIDERS.GROQ // Changed default to GROQ
) {
  const config = getAIConfig(provider);

  console.log(`Using ${config.name} provider for AI generation...`);

  // Check for API key for providers that need it
  if (!config.apiKey && provider !== AI_PROVIDERS.HUGGINGFACE) {
    throw new Error(`${config.name} API key not configured`);
  }

  switch (provider) {
    case AI_PROVIDERS.OPENAI:
      return await callOpenAI(prompt, config);
    case AI_PROVIDERS.ANTHROPIC:
      return await callAnthropic(prompt, config);
    case AI_PROVIDERS.GOOGLE:
      return await callGoogleAI(prompt, config);
    case AI_PROVIDERS.HUGGINGFACE:
      return await callHuggingFace(prompt, config);
    case AI_PROVIDERS.GROQ:
      return await callGroq(prompt, config);
    default:
      return await callGroq(prompt, getAIConfig(AI_PROVIDERS.GROQ)); // Default to GROQ instead
      throw new Error(`Unsupported AI provider: ${provider}`);
  }
}

async function callOpenAI(prompt: string, config: AIProvider) {
  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful English grammar teacher. Always respond with valid JSON format.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content;
}

async function callAnthropic(prompt: string, config: AIProvider) {
  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      "x-api-key": config.apiKey,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `You are a helpful English grammar teacher. Always respond with valid JSON format.\n\n${prompt}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`);
  }

  const data = await response.json();
  return data.content[0]?.text;
}

async function callGoogleAI(prompt: string, config: AIProvider) {
  const response = await fetch(`${config.endpoint}?key=${config.apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `You are a helpful English grammar teacher. Always respond with valid JSON format.\n\n${prompt}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Google AI API error: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates[0]?.content?.parts[0]?.text;
}

// Free Hugging Face API - Using a better model for text generation
async function callHuggingFace(prompt: string, config: AIProvider) {
  try {
    // Use the actual Hugging Face API endpoint
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Only add auth header if we have a valid API key
          ...(config.apiKey && !config.apiKey.startsWith("hf_")
            ? {}
            : config.apiKey && config.apiKey.startsWith("hf_")
            ? { Authorization: `Bearer ${config.apiKey}` }
            : {}),
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 2000,
            temperature: 0.9,
            do_sample: true,
            top_p: 0.95,
            repetition_penalty: 1.2,
            return_full_text: false,
          },
          options: {
            wait_for_model: true,
            use_cache: false,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Hugging Face API error:", response.status, errorText);
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Hugging Face API error: ${data.error}`);
    }

    const generatedText = data[0]?.generated_text || data.generated_text || "";

    if (!generatedText) {
      throw new Error("No text generated from Hugging Face API");
    }

    return generatedText;
  } catch (error) {
    console.error("Hugging Face API failed:", error);
    throw error;
  }
}

// Groq API - Free tier available
async function callGroq(prompt: string, config: AIProvider) {
  try {
    const response = await fetch(config.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          {
            role: "system",
            content:
              "You are a helpful English grammar teacher. Always respond with valid JSON format.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 2000, // Increased for longer responses
        temperature: 0.8, // Higher for more creativity
        top_p: 0.9,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error details:", errorText);

      let errorMessage = `Groq API error: ${response.status}`;
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.error?.message) {
          errorMessage += ` - ${errorData.error.message}`;
        }
      } catch {
        // If we can't parse the error, just use the status
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response format from Groq API");
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Groq API call failed:", error);
    throw error;
  }
}

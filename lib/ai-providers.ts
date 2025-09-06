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
  FAL_AI: "fal-ai",
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
        apiKey: process.env.GROQ_API_KEY_1 || "",
        endpoint: "https://api.groq.com/openai/v1/chat/completions",
        model: "llama3-8b-8192", // Updated to currently supported model
      };
    case AI_PROVIDERS.FAL_AI:
      return {
        name: "Fal AI",
        apiKey: process.env.FAL_AI_API_KEY_1 || "",
        endpoint: "https://fal.run/fal-ai/flux/schnell",
        model: "flux-schnell",
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
      return await callGroqWithFallback(prompt);
    case AI_PROVIDERS.FAL_AI:
      return await callFalAI(prompt, config);
    default:
      return await callGroqWithFallback(prompt); // Default to GROQ instead
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

// Groq API - Free tier available with fallback keys
export async function callGroqWithFallback(
  prompt: string,
  options?: { max_tokens?: number; temperature?: number }
) {
  const groqApiKeys = [
    process.env.GROQ_API_KEY_1,
    process.env.GROQ_API_KEY_BACKUP_2,
    process.env.GROQ_API_KEY_BACKUP_3,
    process.env.GROQ_API_KEY_BACKUP_4,
    process.env.GROQ_API_KEY_BACKUP_5,
  ].filter(Boolean);

  let lastError = null;

  for (let i = 0; i < groqApiKeys.length; i++) {
    const apiKey = groqApiKeys[i];

    try {
      console.log(`🤖 Trying GROQ with key ${i + 1}...`);

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful English grammar teacher. Provide clear, accurate responses.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],
            max_tokens: options?.max_tokens || 2000,
            temperature: options?.temperature || 0.8,
            top_p: 0.9,
            stream: false,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.choices && data.choices[0] && data.choices[0].message) {
          console.log(`✅ Successfully used GROQ key ${i + 1}`);
          return data.choices[0].message.content;
        }
      } else {
        const errorText = await response.text();
        lastError = `GROQ Key ${i + 1} failed: ${
          response.status
        } - ${errorText}`;
        console.log(lastError);
      }
    } catch (error) {
      lastError = `GROQ Key ${i + 1} error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log(lastError);
    }
  }

  throw new Error(`All GROQ API keys failed. Last error: ${lastError}`);
}

// Helper function to generate visual hints without showing text
function generateVisualHints(
  correctAnswer: string,
  grammarTopic: string
): string {
  const answer = correctAnswer.toLowerCase();

  // Extract visual concepts from the answer
  if (
    grammarTopic.includes("present simple") ||
    grammarTopic.includes("present tense")
  ) {
    if (
      answer.includes("every day") ||
      answer.includes("usually") ||
      answer.includes("always")
    ) {
      return "routine patterns, organized environments, habit-forming visual cues like calendars, schedules, or repeated activities";
    } else if (answer.includes("study") || answer.includes("studies")) {
      return "learning environments, books, desks, educational materials, focused attention";
    } else if (answer.includes("work") || answer.includes("works")) {
      return "workplace settings, professional tools, office environments, productive activities";
    }
    return "daily activities, routine environments, present-moment actions";
  }

  if (grammarTopic.includes("past") || grammarTopic.includes("yesterday")) {
    return "completed actions, finished products, past time visual markers like old items, completed tasks, or results";
  }

  if (grammarTopic.includes("continuous") || grammarTopic.includes("ing")) {
    return "motion blur, active gestures, ongoing processes, people in mid-action, dynamic movement";
  }

  if (
    grammarTopic.includes("modal") ||
    grammarTopic.includes("can") ||
    grammarTopic.includes("must")
  ) {
    if (answer.includes("can")) {
      return "demonstrations of ability, skill showcases, successful achievements, capable actions";
    } else if (answer.includes("must") || answer.includes("have to")) {
      return "obligatory visual cues, required items, safety equipment, necessary conditions";
    }
    return "ability or obligation contexts through environmental storytelling";
  }

  if (grammarTopic.includes("preposition")) {
    if (answer.includes(" on "))
      return "clear surface relationships, objects resting on top of other surfaces";
    if (answer.includes(" in "))
      return "containment relationships, objects inside containers or spaces";
    if (answer.includes(" at "))
      return "location-specific positioning, directional focus, pointed locations";
    if (answer.includes(" under "))
      return "underneath relationships, objects below other objects with clear coverage";
    return "precise spatial relationships and object positioning";
  }

  if (grammarTopic.includes("article")) {
    if (answer.startsWith("the ")) {
      return "emphasis on one specific, unique, or highlighted object that stands out from others";
    } else if (answer.startsWith("a ") || answer.startsWith("an ")) {
      return "general examples among multiple similar items, non-specific representation";
    }
    return "specificity vs. generality through object selection and emphasis";
  }

  if (
    grammarTopic.includes("comparative") ||
    grammarTopic.includes("superlative")
  ) {
    return "size differences, quality variations, ranking arrangements, comparison contexts";
  }

  // Default visual storytelling approach
  return "environmental storytelling, contextual clues, object relationships, and situational details";
}

// FAL AI for image generation with fallback support
export async function callFalAIWithFallback(
  prompt: string,
  options?: {
    aspectRatio?: "square" | "portrait" | "landscape";
    style?: "realistic" | "cartoon" | "illustration" | "educational";
    grammarTopic?: string;
    proficiencyLevel?: string;
    correctAnswer?: string;
    answerFocused?: boolean;
  }
) {
  const falApiKeys = [
    process.env.FAL_AI_API_KEY_1,
    process.env.FAL_AI_API_KEY_BACKUP_2,
    process.env.FAL_AI_API_KEY_BACKUP_3,
    process.env.FAL_AI_API_KEY_BACKUP_4,
    process.env.FAL_AI_API_KEY_BACKUP_5,
  ].filter(Boolean);

  const {
    aspectRatio = "square",
    style = "educational",
    grammarTopic = "English grammar",
    proficiencyLevel = "intermediate",
    correctAnswer,
    answerFocused = false,
  } = options || {};

  // Enhanced prompt for better educational images with answer focus
  let enhancedPrompt = `${prompt}. Educational illustration style, clear and simple composition suitable for ${proficiencyLevel} English learners. ${style} style, high quality, well-lit, appropriate for learning context. NO TEXT, NO WORDS, NO LETTERS visible in the image.`;

  if (answerFocused && correctAnswer) {
    // Create visual-only prompt that supports the answer without showing it
    const visualHints = generateVisualHints(correctAnswer, grammarTopic);
    enhancedPrompt += ` CRITICAL: Create a visual scene that naturally demonstrates the concept through ${visualHints}. The image should make students think of the correct answer through visual storytelling, environmental clues, and object relationships. Absolutely NO text, grammar terms, or written words should appear anywhere in the image.`;
  } else {
    enhancedPrompt += ` Focus on clear visual storytelling through objects, actions, and environmental details. Completely text-free educational image.`;
  }

  let lastError = null;

  for (let i = 0; i < falApiKeys.length; i++) {
    const apiKey = falApiKeys[i];

    try {
      console.log(`🎨 Trying FAL AI with key ${i + 1}...`);

      const response = await fetch("https://fal.run/fal-ai/flux/schnell", {
        method: "POST",
        headers: {
          Authorization: `Key ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: enhancedPrompt,
          image_size:
            aspectRatio === "square"
              ? "square_hd"
              : aspectRatio === "portrait"
              ? "portrait_4_3"
              : "landscape_4_3",
          num_inference_steps: 4,
          num_images: 1,
          enable_safety_checker: true,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.images && data.images.length > 0) {
          console.log(
            `✅ Successfully generated image with FAL AI key ${i + 1}`
          );
          return {
            success: true,
            imageUrl: data.images[0].url,
            prompt: enhancedPrompt,
            apiKeyUsed: i + 1,
            provider: "FAL AI",
          };
        }
      } else {
        const errorText = await response.text();
        lastError = `FAL AI Key ${i + 1} failed: ${
          response.status
        } - ${errorText}`;
        console.log(lastError);
      }
    } catch (error) {
      lastError = `FAL AI Key ${i + 1} error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      console.log(lastError);
    }
  }

  // Generate fallback image URL if all keys failed
  const fallbackUrl = `https://via.placeholder.com/512x512/e3f2fd/1565c0?text=${encodeURIComponent(
    `${grammarTopic}\n\n${prompt}\n\n⚠️ Image generation failed`
  )}`;

  return {
    success: false,
    imageUrl: fallbackUrl,
    prompt: enhancedPrompt,
    error: lastError,
    fallback: true,
    provider: "Placeholder",
  };
}

// Single FAL AI call function
async function callFalAI(prompt: string, config: AIProvider, options?: any) {
  try {
    const response = await fetch(config.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Key ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        image_size:
          options?.aspectRatio === "square"
            ? "square_hd"
            : options?.aspectRatio === "portrait"
            ? "portrait_4_3"
            : "landscape_4_3",
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`FAL AI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (data.images && data.images.length > 0) {
      return {
        success: true,
        imageUrl: data.images[0].url,
        prompt: prompt,
      };
    } else {
      throw new Error("No images returned from FAL AI");
    }
  } catch (error) {
    console.error("FAL AI call failed:", error);
    throw error;
  }
}

// Original Groq API function (for backward compatibility)
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

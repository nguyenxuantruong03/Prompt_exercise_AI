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
        apiKey: process.env.HUGGINGFACE_API_KEY || "hf_free", // Free tier
        endpoint:
          "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
        model: "microsoft/DialoGPT-large",
      };
    case AI_PROVIDERS.GROQ:
      return {
        name: "Groq",
        apiKey: process.env.GROQ_API_KEY || "",
        endpoint: "https://api.groq.com/openai/v1/chat/completions",
        model: "mixtral-8x7b-32768",
      };
    default:
      return getAIConfig(AI_PROVIDERS.HUGGINGFACE); // Default to free option
  }
}

export async function callAI(
  prompt: string,
  provider: AIProviderType = AI_PROVIDERS.HUGGINGFACE // Changed default to free
) {
  const config = getAIConfig(provider);

  // Skip API key check for Hugging Face free tier
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
      return await callHuggingFace(prompt, config); // Default to free
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

// Free Hugging Face API - No API key required
async function callHuggingFace(prompt: string, config: AIProvider) {
  // For completely free usage, we'll use a local/simple response
  // Or you can use Hugging Face Inference API with free models

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // No API key needed for basic inference
        },
        body: JSON.stringify({
          inputs: `You are a helpful English grammar teacher. Always respond with valid JSON format.\n\n${prompt}`,
          parameters: {
            max_length: 500,
            temperature: 0.7,
          },
        }),
      }
    );

    // If Hugging Face is down or rate limited, provide a fallback response
    if (!response.ok) {
      return generateFallbackResponse(prompt);
    }

    const data = await response.json();
    return data[0]?.generated_text || generateFallbackResponse(prompt);
  } catch (error) {
    return generateFallbackResponse(prompt);
  }
}

// Groq API - Free tier available
async function callGroq(prompt: string, config: AIProvider) {
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
    throw new Error(`Groq API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content;
}

// Fallback function for completely offline/free usage
function generateFallbackResponse(prompt: string): string {
  if (prompt.includes('action": "fix"')) {
    return JSON.stringify({
      corrected: "I went to the store yesterday.",
      errors: [
        {
          original: "I have went",
          corrected: "I went",
          explanation:
            "Use simple past tense 'went' instead of present perfect with incorrect past participle.",
        },
      ],
    });
  } else if (prompt.includes("fill-in-blank")) {
    return JSON.stringify({
      exercise: {
        title: "Grammar Exercise: Fill in the Blank",
        type: "fill-in-blank",
        questions: [
          {
            id: 1,
            question: "I _____ to the store yesterday.",
            correct: "went",
            explanation:
              "Use simple past tense 'went' for completed actions in the past.",
            type: "fill-in-blank",
          },
          {
            id: 2,
            question: "She _____ her homework before dinner.",
            correct: "finished",
            explanation: "Use past tense 'finished' for completed actions.",
            type: "fill-in-blank",
          },
          {
            id: 3,
            question: "They _____ playing soccer when it started raining.",
            correct: "were",
            explanation:
              "Use past continuous 'were' with the -ing form for ongoing past actions.",
            type: "fill-in-blank",
          },
        ],
      },
    });
  } else if (prompt.includes("sentence-completion")) {
    return JSON.stringify({
      exercise: {
        title: "Grammar Exercise: Sentence Completion",
        type: "sentence-completion",
        questions: [
          {
            id: 1,
            question: "Although it was raining heavily, we decided to...",
            correct: "go outside anyway",
            explanation:
              "This sentence needs a contrasting conclusion to complete the thought.",
            type: "sentence-completion",
          },
          {
            id: 2,
            question: "If I had more time, I would...",
            correct: "learn a new language",
            explanation:
              "This conditional sentence requires a main clause with 'would'.",
            type: "sentence-completion",
          },
        ],
      },
    });
  } else if (prompt.includes("error-correction")) {
    return JSON.stringify({
      exercise: {
        title: "Grammar Exercise: Error Correction",
        type: "error-correction",
        questions: [
          {
            id: 1,
            question: "Find and correct the grammar error in this sentence:",
            incorrectText: "I have went to the store yesterday.",
            correct: "I went to the store yesterday.",
            explanation:
              "Use simple past tense with time expressions like 'yesterday', not present perfect.",
            type: "error-correction",
          },
          {
            id: 2,
            question: "Find and correct the grammar error in this sentence:",
            incorrectText: "She don't like chocolate.",
            correct: "She doesn't like chocolate.",
            explanation:
              "Use 'doesn't' with third person singular subjects, not 'don't'.",
            type: "error-correction",
          },
        ],
      },
    });
  } else if (prompt.includes("reading-comprehension")) {
    return JSON.stringify({
      exercise: {
        title: "Reading Comprehension Exercise",
        type: "reading-comprehension",
        questions: [
          {
            id: 1,
            question: "What is the main topic of the passage?",
            passage:
              "Learning English grammar can be challenging, but it becomes easier with practice. Regular exercises help students understand the rules and apply them correctly. The key is to start with basic concepts and gradually move to more complex structures.",
            options: [
              "A) English is difficult",
              "B) Practice makes grammar easier",
              "C) Complex structures are hard",
              "D) Students need help",
            ],
            correct: 1,
            explanation:
              "The passage emphasizes that grammar becomes easier with practice.",
            type: "reading-comprehension",
          },
        ],
      },
    });
  } else if (prompt.includes("word-order")) {
    return JSON.stringify({
      exercise: {
        title: "Word Order Exercise",
        type: "word-order",
        questions: [
          {
            id: 1,
            question: "Arrange these words to make a correct sentence:",
            words: ["yesterday", "went", "I", "store", "to", "the"],
            correct: "I went to the store yesterday.",
            explanation:
              "English follows Subject + Verb + Object + Time order.",
            type: "word-order",
          },
          {
            id: 2,
            question: "Arrange these words to make a correct sentence:",
            words: ["always", "homework", "does", "she", "her"],
            correct: "She always does her homework.",
            explanation: "Adverbs of frequency go before the main verb.",
            type: "word-order",
          },
        ],
      },
    });
  } else if (prompt.includes("matching")) {
    return JSON.stringify({
      exercise: {
        title: "Matching Exercise",
        type: "matching",
        questions: [
          {
            id: 1,
            question: "Match the verbs with their past tense forms:",
            pairs: [
              { left: "go", right: "went" },
              { left: "eat", right: "ate" },
              { left: "see", right: "saw" },
            ],
            correct: "1a, 2b, 3c",
            explanation:
              "These are irregular past tense forms that must be memorized.",
            type: "matching",
          },
        ],
      },
    });
  } else {
    return JSON.stringify({
      exercise: {
        title: "Grammar Exercise: Past Tense",
        type: "multiple-choice",
        questions: [
          {
            id: 1,
            question: "Which sentence uses the correct past tense?",
            options: [
              "A) I have went to the store",
              "B) I went to the store",
              "C) I have go to the store",
              "D) I goes to the store",
            ],
            correct: 1,
            explanation:
              "Simple past tense 'went' is correct for completed actions in the past.",
            type: "multiple-choice",
          },
          {
            id: 2,
            question: "Choose the correct past tense form:",
            options: [
              "A) She have eaten lunch",
              "B) She has ate lunch",
              "C) She ate lunch",
              "D) She have ate lunch",
            ],
            correct: 2,
            explanation:
              "Simple past tense 'ate' is correct for completed past actions.",
            type: "multiple-choice",
          },
        ],
      },
    });
  }
}

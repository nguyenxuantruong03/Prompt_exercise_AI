import { NextRequest, NextResponse } from "next/server";
import { callAI, AI_PROVIDERS } from "@/lib/ai-providers";

export async function POST(request: NextRequest) {
  try {
    const {
      text,
      action,
      exerciseType = "multiple-choice",
      proficiencyLevel = "A1",
      numExercises = 5,
      provider = AI_PROVIDERS.HUGGINGFACE,
    } = await request.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    let prompt = "";

    // Level descriptions for AI context
    const levelDescriptions = {
      A1: "beginner level (simple present, basic vocabulary, short simple sentences)",
      A2: "elementary level (past tense, future tense, basic questions, everyday vocabulary)",
      B1: "intermediate level (present perfect, conditionals, complex sentences, wider vocabulary)",
      B2: "upper intermediate level (subjunctive, passive voice, advanced tenses, sophisticated vocabulary)",
      C1: "advanced level (complex grammar structures, nuanced vocabulary, advanced discourse)",
      C2: "proficient level (all grammar structures, extensive vocabulary, native-like complexity)",
    };

    const levelContext = `Make sure the exercise is appropriate for ${proficiencyLevel} level students (${
      levelDescriptions[proficiencyLevel as keyof typeof levelDescriptions]
    }). Adjust vocabulary, grammar complexity, and sentence structure accordingly.`;

    if (action === "generate") {
      switch (exerciseType) {
        case "multiple-choice":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} multiple choice questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Grammar Exercise Title",
              "type": "multiple-choice",
              "questions": [
                {
                  "id": 1,
                  "question": "Question text here",
                  "options": ["A) option1", "B) option2", "C) option3", "D) option4"],
                  "correct": 0,
                  "explanation": "Why this answer is correct",
                  "type": "multiple-choice"
                }
              ]
            }
          }`;
          break;

        case "fill-in-blank":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} fill-in-the-blank questions where users need to type the correct word or phrase. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Grammar Exercise Title",
              "type": "fill-in-blank",
              "questions": [
                {
                  "id": 1,
                  "question": "Complete the sentence: I _____ to the store yesterday.",
                  "correct": "went",
                  "explanation": "Use simple past tense 'went' for completed actions in the past",
                  "type": "fill-in-blank"
                }
              ]
            }
          }`;
          break;

        case "sentence-completion":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} sentence completion questions where users finish incomplete sentences. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Grammar Exercise Title",
              "type": "sentence-completion",
              "questions": [
                {
                  "id": 1,
                  "question": "Complete this sentence: Despite the rain, we decided to...",
                  "correct": "go outside anyway",
                  "explanation": "This sentence requires a contrasting continuation",
                  "type": "sentence-completion"
                }
              ]
            }
          }`;
          break;

        case "error-correction":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} error correction questions with sentences containing grammar mistakes. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Grammar Exercise Title",
              "type": "error-correction",
              "questions": [
                {
                  "id": 1,
                  "question": "Find and correct the grammar error in this sentence:",
                  "incorrectText": "I have went to the store yesterday.",
                  "correct": "I went to the store yesterday.",
                  "explanation": "Use simple past tense, not present perfect with time expressions like 'yesterday'",
                  "type": "error-correction"
                }
              ]
            }
          }`;
          break;

        case "reading-comprehension":
          prompt = `Generate a reading comprehension exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create a short passage with exactly ${numExercises} comprehension questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Reading Comprehension Exercise",
              "type": "reading-comprehension",
              "questions": [
                {
                  "id": 1,
                  "question": "What is the main idea of the passage?",
                  "passage": "Write a short passage here about the topic...",
                  "options": ["A) option1", "B) option2", "C) option3", "D) option4"],
                  "correct": 0,
                  "explanation": "Explanation of the answer",
                  "type": "reading-comprehension"
                }
              ]
            }
          }`;
          break;

        case "word-order":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} word order questions where users arrange jumbled words into correct sentences. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Word Order Exercise",
              "type": "word-order",
              "questions": [
                {
                  "id": 1,
                  "question": "Arrange these words to make a correct sentence:",
                  "words": ["yesterday", "went", "I", "store", "to", "the"],
                  "correct": "I went to the store yesterday.",
                  "explanation": "Subject + verb + object + time expression",
                  "type": "word-order"
                }
              ]
            }
          }`;
          break;

        case "matching":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} matching questions where users match items from two columns. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Matching Exercise",
              "type": "matching",
              "questions": [
                {
                  "id": 1,
                  "question": "Match the verbs with their past tense forms:",
                  "pairs": [
                    {"left": "go", "right": "went"},
                    {"left": "eat", "right": "ate"},
                    {"left": "see", "right": "saw"}
                  ],
                  "correct": "1b, 2c, 3a",
                  "explanation": "These are irregular past tense forms",
                  "type": "matching"
                }
              ]
            }
          }`;
          break;

        case "transformation":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} transformation questions where users rewrite sentences using given prompts. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Transformation Exercise",
              "type": "transformation",
              "questions": [
                {
                  "id": 1,
                  "question": "Rewrite this sentence using the passive voice:",
                  "originalText": "The teacher explains the lesson.",
                  "instruction": "Change to passive voice",
                  "correct": "The lesson is explained by the teacher.",
                  "explanation": "In passive voice, the object becomes the subject",
                  "type": "transformation"
                }
              ]
            }
          }`;
          break;

        case "cloze-test":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} cloze test questions with passages that have multiple gaps to fill. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Cloze Test",
              "type": "cloze-test",
              "questions": [
                {
                  "id": 1,
                  "question": "Fill in the gaps in this passage:",
                  "passage": "Yesterday, I ____ (go) to the store and ____ (buy) some groceries. The weather ____ (be) very nice.",
                  "correct": "went, bought, was",
                  "explanation": "Use past tense forms for completed actions",
                  "type": "cloze-test"
                }
              ]
            }
          }`;
          break;

        case "sentence-building":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} sentence building questions where users create sentences from given words and instructions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Sentence Building Exercise",
              "type": "sentence-building",
              "questions": [
                {
                  "id": 1,
                  "question": "Build a sentence using these words and the given instruction:",
                  "words": ["John", "play", "football", "every", "Sunday"],
                  "instruction": "Create a sentence in present simple tense",
                  "correct": "John plays football every Sunday.",
                  "explanation": "Present simple uses base form + s for third person singular",
                  "type": "sentence-building"
                }
              ]
            }
          }`;
          break;

        case "paraphrasing":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} paraphrasing questions where users rewrite sentences with the same meaning. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Paraphrasing Exercise",
              "type": "paraphrasing",
              "questions": [
                {
                  "id": 1,
                  "question": "Rewrite this sentence with the same meaning:",
                  "originalText": "It's possible that it will rain tomorrow.",
                  "instruction": "Use 'might' to express possibility",
                  "correct": "It might rain tomorrow.",
                  "explanation": "Might expresses possibility",
                  "type": "paraphrasing"
                }
              ]
            }
          }`;
          break;

        case "verb-conjugation":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} verb conjugation questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Verb Conjugation Exercise",
              "type": "verb-conjugation",
              "questions": [
                {
                  "id": 1,
                  "question": "Conjugate the verb 'to be' in past tense for the subject 'they':",
                  "verb": "be",
                  "tense": "past",
                  "subject": "they",
                  "correct": "were",
                  "explanation": "'Were' is the past tense of 'be' for plural subjects",
                  "type": "verb-conjugation"
                }
              ]
            }
          }`;
          break;

        case "punctuation":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} punctuation questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Punctuation Exercise",
              "type": "punctuation",
              "questions": [
                {
                  "id": 1,
                  "question": "Add the correct punctuation to this sentence:",
                  "unpunctuatedText": "What time does the store close",
                  "correct": "What time does the store close?",
                  "explanation": "Questions end with a question mark",
                  "type": "punctuation"
                }
              ]
            }
          }`;
          break;

        case "word-formation":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} word formation questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Word Formation Exercise",
              "type": "word-formation",
              "questions": [
                {
                  "id": 1,
                  "question": "Form the correct word to complete the sentence:",
                  "sentence": "The _____ (happy) child played in the garden.",
                  "baseWord": "happy",
                  "instruction": "Use the adjective form",
                  "correct": "happy",
                  "explanation": "Happy is already in its adjective form",
                  "type": "word-formation"
                }
              ]
            }
          }`;
          break;

        case "sentence-combining":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} sentence combining questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Sentence Combining Exercise",
              "type": "sentence-combining",
              "questions": [
                {
                  "id": 1,
                  "question": "Combine these sentences using the given connector:",
                  "sentences": ["It was raining.", "We went for a walk."],
                  "connector": "although",
                  "correct": "Although it was raining, we went for a walk.",
                  "explanation": "Although shows contrast between two clauses",
                  "type": "sentence-combining"
                }
              ]
            }
          }`;
          break;

        case "dialogue-completion":
          prompt = `Generate a grammar exercise based on this topic or text: "${text}". 
          ${levelContext}
          Create exactly ${numExercises} dialogue completion questions. Format the response as JSON with this structure:
          {
            "exercise": {
              "title": "Dialogue Completion Exercise",
              "type": "dialogue-completion",
              "questions": [
                {
                  "id": 1,
                  "question": "Complete this dialogue:",
                  "dialogue": "A: Where did you go yesterday?\\nB: I _____ to the library.",
                  "correct": "went",
                  "explanation": "Use past tense 'went' for completed past actions",
                  "type": "dialogue-completion"
                }
              ]
            }
          }`;
          break;

        default:
          prompt = `Generate a multiple choice grammar exercise based on: "${text}"`;
      }
    } else if (action === "fix") {
      prompt = `Please fix the grammar errors in this text and explain the corrections: "${text}". 
      Format the response as JSON with this structure:
      {
        "corrected": "The corrected text here",
        "errors": [
          {
            "original": "incorrect text",
            "corrected": "correct text",
            "explanation": "explanation of the error"
          }
        ]
      }`;
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const aiResponse = await callAI(prompt, provider);

    if (!aiResponse) {
      throw new Error("No response from AI");
    }

    // Parse the JSON response from AI
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (parseError) {
      // If JSON parsing fails, try to extract JSON from the response
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsedResponse = JSON.parse(jsonMatch[0]);
        } catch {
          parsedResponse = { response: aiResponse };
        }
      } else {
        parsedResponse = { response: aiResponse };
      }
    }

    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error("Grammar API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process request",
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { callAI, AI_PROVIDERS, AIProviderType } from "@/lib/ai-providers";

// Define comprehensive types for better type safety
type ExerciseType =
  | "multiple-choice"
  | "fill-in-blank"
  | "sentence-completion"
  | "error-correction"
  | "transformation"
  | "dialogue-completion"
  | "reading-comprehension"
  | "word-order"
  | "matching"
  | "cloze-test"
  | "sentence-building"
  | "paraphrasing"
  | "verb-conjugation"
  | "punctuation"
  | "word-formation"
  | "sentence-combining";

type ProficiencyLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

type ActionType = "generate" | "analyze_performance";

// Define ScoreData interface
interface IncorrectQuestion {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  tense?: string;
  type?: string;
  explanation: string;
}

interface ScoreData {
  correct: number;
  total: number;
  percentage: number;
  grammarTopic: string;
  exerciseType: string;
  proficiencyLevel: string;
  incorrectQuestions: IncorrectQuestion[];
}

interface RequestBody {
  text?: string;
  action: ActionType;
  exerciseType?: ExerciseType;
  proficiencyLevel?: ProficiencyLevel;
  numExercises?: number;
  provider?: string; // Keep as string since it comes from request body
  scoreData?: ScoreData;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await request.json();
    const {
      text,
      action,
      exerciseType = "multiple-choice" as ExerciseType,
      proficiencyLevel = "A1" as ProficiencyLevel,
      numExercises = 5,
      provider = AI_PROVIDERS.GROQ,
      scoreData,
    } = body;

    // Validate and convert provider string to AIProviderType
    const validProvider: AIProviderType = Object.values(AI_PROVIDERS).includes(
      provider as AIProviderType
    )
      ? (provider as AIProviderType)
      : AI_PROVIDERS.GROQ;

    // Remove the text requirement for analyze_performance action
    if (!text && action !== "analyze_performance") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Ensure text is defined for generate action
    const grammarText = text || "English Grammar";

    let prompt: string = "";

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
      // Add maximum randomization for truly unique content
      const timestamp = Date.now();
      const randomSeed = Math.floor(Math.random() * 1000000);
      const contextSeed = Math.floor(Math.random() * 10000);

      // Create completely dynamic prompts that force AI to be creative
      const baseInstruction = `SEARCH AND CREATE: You are an AI that searches your knowledge base for "${grammarText}" grammar and creates completely original exercises.

ABSOLUTE REQUIREMENTS:
- SEARCH your knowledge for diverse examples of "${grammarText}" grammar usage
- CREATE completely new, never-before-seen questions each time
- RANDOMIZE contexts, vocabulary, situations, and sentence structures
- GENERATE fresh content that tests different aspects of "${grammarText}"
- AVOID any predictable patterns or repetitive examples

GRAMMAR FOCUS: "${grammarText}"
EXERCISE FORMAT: ${exerciseType}
DIFFICULTY: ${proficiencyLevel} (${
        levelDescriptions[proficiencyLevel as keyof typeof levelDescriptions]
      })
QUESTIONS NEEDED: ${numExercises}
RANDOMIZATION ID: ${randomSeed}_${timestamp}_${contextSeed}

CRITICAL LEVEL-APPROPRIATE CONTENT REQUIREMENTS:
${levelContext}

STRICT PROFICIENCY LEVEL ENFORCEMENT FOR ${proficiencyLevel}:
${
  proficiencyLevel === "A1"
    ? `
- Use ONLY simple present, past, and future tenses
- Use basic vocabulary (most common 1000 words)
- Create SHORT, simple sentences (max 10-12 words)
- Focus on basic grammar: be/have, simple questions, basic adjectives
- Avoid complex grammar structures, phrasal verbs, or advanced vocabulary
`
    : proficiencyLevel === "A2"
    ? `
- Use present, past, future, and present continuous tenses
- Use everyday vocabulary (most common 2000 words)
- Create medium-length sentences (8-15 words)
- Include: basic questions, simple conditionals, basic comparatives
- Avoid: complex tenses, advanced vocabulary, sophisticated structures
`
    : proficiencyLevel === "B1"
    ? `
- Use present perfect, conditionals, and past continuous
- Use intermediate vocabulary with some less common words
- Create varied sentence structures (10-18 words)
- Include: complex questions, basic passive voice, relative clauses
- Avoid: advanced literary vocabulary, very complex grammar
`
    : proficiencyLevel === "B2"
    ? `
- Use advanced tenses including subjunctive and complex passives
- Use sophisticated vocabulary and idiomatic expressions
- Create complex sentences with multiple clauses (15-25 words)
- Include: advanced conditionals, reported speech, advanced connectors
- Challenge students with near-native level grammar structures
`
    : proficiencyLevel === "C1"
    ? `
- Use ALL grammar structures including the most complex forms
- Use advanced academic and professional vocabulary
- Create sophisticated, nuanced sentences (20-30 words)
- Include: complex discourse markers, advanced modal usage, stylistic variations
- Test mastery of subtle grammatical distinctions
`
    : `
- Use NATIVE-LEVEL complexity with ALL advanced grammar structures
- Use extensive vocabulary: academic, technical, idiomatic, and archaic terms
- Create complex, sophisticated sentence structures (25-40+ words)
- Include: highly advanced structures (subjunctive mood, inversion, cleft sentences)
- Test: subtle grammatical nuances, stylistic variations, register awareness
- Require: perfect understanding of colloquialisms, formal discourse markers
- Challenge: implicit meanings, contextual appropriateness, cultural references
- Use: complex subordination, embedded clauses, advanced punctuation
- Test complete mastery equivalent to educated native speakers
- Include rare grammatical constructions and sophisticated discourse patterns
`
}

VOCABULARY AND COMPLEXITY CONTROL:
- Every word choice MUST be appropriate for ${proficiencyLevel} level
- Every grammar structure MUST match ${proficiencyLevel} complexity
- Every sentence length MUST suit ${proficiencyLevel} capabilities
- Context examples MUST be relevant to ${proficiencyLevel} learners

CREATIVITY MANDATE:
- Use your full knowledge of English grammar to create realistic examples
- Draw from various contexts: business, casual conversation, academic, travel, family, work, hobbies
- Make each question test a DIFFERENT grammatical aspect of "${grammarText}"
- Use diverse vocabulary and sentence structures appropriate for ${proficiencyLevel} level
- Create questions that could appear in real English exams or textbooks for ${proficiencyLevel} students
- Ensure every generation is completely unique

TIPS AND SUGGESTIONS REQUIREMENTS:
- For each question, provide detailed grammar tips explaining WHY the correct answer is used
- Explain the grammatical reasoning behind tense selection, word choice, or structure
- Include common mistakes students make with this grammar point
- Provide memory aids or rules that help students remember the correct usage
- Make tips educational and informative, not just simple explanations
- Ensure tips are appropriate for ${proficiencyLevel} level understanding

OUTPUT: Valid JSON only, no other text.`;

      switch (exerciseType) {
        case "multiple-choice":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original multiple-choice questions about "${grammarText}".

GENERATION INSTRUCTIONS:
- Each question must test a different aspect of "${grammarText}" grammar
- Use completely different sentences, contexts, and vocabulary
- Create 4 realistic answer choices (A, B, C, D) with only one correct
- Vary question styles: "Choose...", "Select...", "Which is correct?", "Complete..."
- Make incorrect options believable but clearly wrong to someone who knows "${grammarText}"

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Multiple Choice Exercise",
    "type": "multiple-choice",
    "questions": [
      {
        "id": 1,
        "question": "Your complete question text here",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 0,
        "explanation": "Basic explanation of the correct answer",
        "tip": "Detailed grammar tip explaining WHY this tense/structure is used. Include: 1) The grammatical rule, 2) When to use it, 3) Common mistakes to avoid, 4) Memory aids or patterns to remember",
        "tense": "The specific tense this question focuses on (e.g., 'Simple Present', 'Past Perfect', 'Present Continuous')",
        "type": "multiple-choice"
      }
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "fill-in-blank":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original fill-in-the-blank questions about "${grammarText}".

GENERATION INSTRUCTIONS:
- Create completely different sentences with strategic blanks
- Each blank should test a specific aspect of "${grammarText}" grammar
- Use varied contexts, vocabulary, and sentence structures
- Make blanks test the most important rules of "${grammarText}"
- Ensure sentences sound natural and realistic

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Fill in the Blanks",
    "type": "fill-in-blank",
    "questions": [
      {
        "id": 1,
        "question": "Complete sentence with blank: She _____ to school yesterday.",
        "options": ["went", "go", "goes", "going"],
        "correct": 0,
        "explanation": "Basic explanation of the correct answer",
        "tip": "Detailed grammar tip explaining WHY this tense/structure is used. Include: 1) The grammatical rule, 2) When to use it, 3) Common mistakes to avoid, 4) Memory aids or patterns to remember",
        "type": "fill-in-blank"
      }
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "sentence-completion":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original sentence completion exercises about "${grammarText}".

GENERATION INSTRUCTIONS:
- Start with DIFFERENT incomplete sentences each time
- Require "${grammarText}" grammar to complete properly
- Use varied real-life contexts and situations
- Make completions test understanding of "${grammarText}" rules

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Sentence Completion",
    "type": "sentence-completion",
    "questions": [
      {
        "id": 1,
        "question": "Complete the sentence: She _____ to work when it started raining.",
        "options": ["was walking", "walked", "walks", "has walked"],
        "correct": 0,
        "explanation": "Basic explanation of the correct answer",
        "tip": "Detailed grammar tip explaining WHY this tense/structure is used. Include: 1) The grammatical rule, 2) When to use it, 3) Common mistakes to avoid, 4) Memory aids or patterns to remember",
        "type": "sentence-completion"
      }
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "error-correction":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original error correction exercises about "${grammarText}".

GENERATION INSTRUCTIONS:
- Write DIFFERENT sentences with errors related to "${grammarText}"
- Make errors realistic (common student mistakes)
- Use varied contexts and vocabulary
- Provide correct versions with clear explanations

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Error Correction",
    "type": "error-correction",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "transformation":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original sentence transformation exercises using "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Provide original sentences to be transformed
- Require use of "${grammarText}" in the transformation
- Test different aspects of "${grammarText}" usage

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Sentence Transformation",
    "type": "transformation",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "dialogue-completion":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original dialogue completion exercises that test "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Create realistic dialogues with missing parts
- Missing parts should require "${grammarText}" usage
- Use natural conversational contexts

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Dialogue Completion",
    "type": "dialogue-completion",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "reading-comprehension":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original reading comprehension questions that test "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Write a short passage that naturally incorporates "${grammarText}" grammar
- Create questions that test understanding of how "${grammarText}" is used in context
- Make questions focus on grammar usage, not just comprehension

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Reading Comprehension",
    "type": "reading-comprehension",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "word-order":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original word order exercises that test "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Provide scrambled words that need to be arranged
- Focus on word order rules specific to "${grammarText}"
- Use realistic vocabulary and contexts

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Word Order",
    "type": "word-order",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "matching":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original matching exercises that test "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Create items that need to be matched (e.g., sentences with their correct forms)
- Focus on different aspects of "${grammarText}"
- Make matches test understanding of grammar rules

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Matching Exercise",
    "type": "matching",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "cloze-test":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original cloze test exercises focusing on "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Create passages with multiple blanks
- Blanks should test different aspects of "${grammarText}"
- Provide context that helps students understand usage

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Cloze Test",
    "type": "cloze-test",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "sentence-building":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original sentence building exercises using "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Provide prompts that require building sentences with "${grammarText}"
- Use different contexts and situations
- Test ability to construct grammatically correct sentences

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Sentence Building",
    "type": "sentence-building",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "paraphrasing":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original paraphrasing exercises that test "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Provide sentences to be paraphrased using "${grammarText}"
- Test understanding of how "${grammarText}" can express the same meaning differently
- Use varied vocabulary and contexts

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Paraphrasing",
    "type": "paraphrasing",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "verb-conjugation":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original verb conjugation exercises focusing on "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Test different verb forms related to "${grammarText}"
- Use various subjects and contexts
- Focus on conjugation rules specific to "${grammarText}"

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Verb Conjugation",
    "type": "verb-conjugation",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "punctuation":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original punctuation exercises related to "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Create sentences that need punctuation related to "${grammarText}"
- Test punctuation rules that apply to "${grammarText}" structures
- Use realistic contexts

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Punctuation",
    "type": "punctuation",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "word-formation":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original word formation exercises related to "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Test word formation patterns relevant to "${grammarText}"
- Use different word types and contexts
- Focus on how words change with "${grammarText}"

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Word Formation",
    "type": "word-formation",
    "questions": [
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        case "sentence-combining":
          prompt = `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original sentence combining exercises using "${grammarText}" grammar.

GENERATION INSTRUCTIONS:
- Provide 2-3 separate simple sentences that can be combined using "${grammarText}" grammar
- Show how to join the sentences using appropriate "${grammarText}" structures
- Create 4 different ways to combine the sentences (multiple choice options)
- Only ONE option should be grammatically correct using "${grammarText}"
- Use realistic, everyday contexts and varied vocabulary

EXAMPLE FORMAT:
{
  "question": "Combine these sentences using simple past tense: 'She goes to work.' + 'She finished her project.'",
  "options": [
    "She went to work and finished her project.",
    "She goes to work and finished her project.",
    "She went to work and finishes her project.",
    "She go to work and finished her project."
  ],
  "correct": 0,
  "explanation": "We use simple past tense 'went' and 'finished' because both actions happened in the past."
}

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Sentence Combining",
    "type": "sentence-combining",
    "questions": [
      {
        "id": 1,
        "question": "Combine these sentences using ${grammarText}: '[sentence 1]' + '[sentence 2]'",
        "options": ["option1", "option2", "option3", "option4"],
        "correct": 0,
        "explanation": "Detailed explanation of why this combination is correct",
        "type": "sentence-combining"
      }
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
          break;

        default:
          prompt = `${baseInstruction}

TASK: Create ${numExercises} original multiple-choice questions about "${grammarText}" grammar.
Search your knowledge base and generate completely unique content.

CREATE ORIGINAL CONTENT NOW:`;
      }
    } else if (action === "analyze_performance") {
      // Ensure scoreData exists for analyze_performance action
      if (!scoreData) {
        return NextResponse.json(
          { error: "Score data is required for performance analysis" },
          { status: 400 }
        );
      }

      const analysisPrompt = `
TASK: Analyze user's grammar exercise performance and provide detailed feedback.

USER PERFORMANCE DATA:
- Score: ${scoreData.correct}/${scoreData.total} (${scoreData.percentage}%)
- Grammar Topic: "${scoreData.grammarTopic}"
- Exercise Type: ${scoreData.exerciseType}
- Proficiency Level: ${scoreData.proficiencyLevel}

INCORRECT QUESTIONS ANALYSIS:
${scoreData.incorrectQuestions
  .map(
    (item: any, index: number) => `
${index + 1}. Question: ${item.question}
   User Answer: ${item.userAnswer}
   Correct Answer: ${item.correctAnswer}
   Tense/Topic: ${item.tense || item.type}
   Explanation: ${item.explanation}
`
  )
  .join("\n")}

ANALYSIS REQUIREMENTS:
1. WEAK AREAS: Identify 3-5 specific grammar areas that need improvement based on incorrect answers
2. DETAILED FEEDBACK: Provide constructive, encouraging feedback (150-200 words)
3. LEARNING RECOMMENDATIONS: Give 5-7 actionable study recommendations

RESPONSE FORMAT (JSON):
{
  "weakAreas": ["Specific Area 1", "Specific Area 2", "Specific Area 3"],
  "feedback": "Detailed, encouraging analysis of performance with specific insights about what went wrong and what went right. Include patterns in mistakes and strengths demonstrated.",
  "recommendations": [
    "Specific recommendation 1 with actionable steps",
    "Specific recommendation 2 with actionable steps", 
    "Specific recommendation 3 with actionable steps",
    "Specific recommendation 4 with actionable steps",
    "Specific recommendation 5 with actionable steps"
  ]
}

Provide personalized, constructive analysis that helps the user improve their English grammar skills.`;

      try {
        const analysisResult: string = await callAI(
          analysisPrompt,
          validProvider
        );

        // Try to parse as JSON, with fallback
        let parsedAnalysis;
        try {
          parsedAnalysis = JSON.parse(analysisResult);
        } catch (parseError) {
          console.log("Failed to parse AI analysis as JSON, using fallback");
          // Fallback if JSON parsing fails
          parsedAnalysis = {
            weakAreas: scoreData.incorrectQuestions
              .map((item: any) => item.tense || item.type)
              .filter(
                (area: any, index: number, arr: any[]) =>
                  arr.indexOf(area) === index
              )
              .slice(0, 5),
            feedback: `You scored ${scoreData.correct}/${scoreData.total} (${
              scoreData.percentage
            }%). ${
              scoreData.percentage >= 80
                ? "Excellent work! You demonstrate strong understanding of " +
                  scoreData.grammarTopic +
                  "."
                : scoreData.percentage >= 60
                ? "Good job! You show good grasp of " +
                  scoreData.grammarTopic +
                  " but there's room for improvement."
                : "You need more practice with " +
                  scoreData.grammarTopic +
                  ". Focus on understanding the basic rules first."
            }`,
            recommendations: [
              "Review the questions you answered incorrectly",
              "Study the specific grammar rules for your weak areas",
              "Practice more exercises focusing on " + scoreData.grammarTopic,
              "Read example sentences to see correct usage patterns",
              "Take notes on grammar rules and review them regularly",
            ],
          };
        }

        return NextResponse.json(parsedAnalysis);
      } catch (error) {
        console.error("Error in performance analysis:", error);

        // Return fallback analysis
        return NextResponse.json({
          weakAreas: ["Grammar fundamentals", "Sentence structure"],
          feedback: `You completed ${scoreData.correct} out of ${scoreData.total} questions correctly (${scoreData.percentage}%). This performance suggests you have a basic understanding but would benefit from additional practice.`,
          recommendations: [
            "Review incorrect answers carefully",
            "Practice similar exercises daily",
            "Focus on weak grammar areas",
            "Study grammar rules systematically",
            "Seek additional learning resources",
          ],
        });
      }
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const aiResponse: string = await callAI(prompt, validProvider);

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

    // Transform AI response to match frontend expectations
    if (action === "generate" && parsedResponse.exercise) {
      // Helper functions to generate fallback options when AI fails to provide them
      const generateFallbackOptions = (
        exerciseType: string,
        grammarTopic: string,
        questionData: any,
        index: number
      ): string[] => {
        console.log(
          `🔧 Generating level-appropriate fallback options for ${exerciseType} question ${
            index + 1
          } at ${proficiencyLevel} level`
        );

        switch (exerciseType) {
          case "multiple-choice":
            return generateMultipleChoiceOptions(grammarTopic, questionData);
          case "cloze-test":
            return generateClozeOptions(grammarTopic, questionData);
          case "transformation":
            return generateTransformationOptions(grammarTopic, questionData);
          case "paraphrasing":
            return generateParaphrasingOptions(grammarTopic, questionData);
          case "sentence-combining":
            return generateSentenceCombiningOptions(grammarTopic, questionData);
          case "reading-comprehension":
            return generateReadingComprehensionOptions(
              grammarTopic,
              questionData
            );
          case "verb-conjugation":
            return generateVerbConjugationOptions(grammarTopic, questionData);
          case "word-formation":
            return generateWordFormationOptions(grammarTopic, questionData);
          case "dialogue-completion":
            return generateDialogueOptions(grammarTopic, questionData);
          case "punctuation":
            return generatePunctuationOptions(grammarTopic, questionData);
          case "sentence-building":
            return generateSentenceBuildingOptions(grammarTopic, questionData);
          default:
            return generateGenericOptions(grammarTopic, questionData);
        }
      };

      const generateMultipleChoiceOptions = (
        topic: string,
        q: any
      ): string[] => {
        const grammarForms = getGrammarForms(topic, proficiencyLevel);
        if (grammarForms.length >= 4) {
          return grammarForms.slice(0, 4);
        }

        // Generate level-appropriate contextual options based on proficiency level
        const questionText = q.question || q.text || "";

        // Level-specific option generation
        if (proficiencyLevel === "A1") {
          if (questionText.includes("past")) {
            return ["went", "go", "was", "did"];
          } else if (questionText.includes("present")) {
            return ["go", "goes", "is", "am"];
          }
          return ["is", "go", "have", "like"];
        } else if (proficiencyLevel === "A2") {
          if (questionText.includes("past")) {
            return ["went", "was going", "had", "did"];
          } else if (questionText.includes("present")) {
            return ["go", "am going", "have gone", "will go"];
          }
          return ["go", "going", "went", "will go"];
        } else if (proficiencyLevel === "B1") {
          if (questionText.includes("past")) {
            return ["had gone", "was going", "went", "would go"];
          } else if (questionText.includes("present")) {
            return ["have been going", "go", "am going", "will have gone"];
          }
          return ["have done", "am doing", "will do", "would do"];
        } else if (proficiencyLevel === "B2") {
          return [
            "would have done",
            "had been doing",
            "will have been doing",
            "might have done",
          ];
        } else {
          // C1/C2
          if (proficiencyLevel === "C2") {
            // Ultra-advanced C2 options with native-level complexity
            return [
              "would have been being scrutinized",
              "might have been having been done",
              "could have been being undertaken",
              "should have been being contemplated",
            ];
          } else {
            // C1
            return [
              "would have been doing",
              "should have done",
              "might have been done",
              "could have been doing",
            ];
          }
        }
      };

      const generateClozeOptions = (topic: string, q: any): string[] => {
        const grammarForms = getGrammarForms(topic, proficiencyLevel);
        if (grammarForms.length >= 4) {
          return grammarForms.slice(0, 4);
        }

        // Level-appropriate cloze options
        if (proficiencyLevel === "A1") {
          return ["a", "an", "the", ""];
        } else if (proficiencyLevel === "A2") {
          return ["some", "any", "much", "many"];
        } else if (proficiencyLevel === "B1") {
          return ["although", "however", "therefore", "moreover"];
        } else {
          return ["nevertheless", "consequently", "furthermore", "conversely"];
        }
      };

      const generateTransformationOptions = (
        topic: string,
        q: any
      ): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Simple transformation using ${topic}`,
            `Basic incorrect form`,
            `Wrong simple structure`,
            `Another basic error`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Correctly transformed using ${topic}`,
            `Intermediate-level error`,
            `Wrong ${topic} structure`,
            `Complex but incorrect form`,
          ];
        } else {
          return [
            `Sophisticatedly transformed using ${topic}`,
            `Advanced structural error`,
            `Nuanced but wrong ${topic} usage`,
            `Complex incorrect transformation`,
          ];
        }
      };

      const generateParaphrasingOptions = (topic: string, q: any): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Simple paraphrase with ${topic}`,
            `Basic incorrect version`,
            `Wrong simple paraphrase`,
            `Another basic error`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Well-paraphrased using ${topic}`,
            `Intermediate paraphrase error`,
            `Wrong ${topic} paraphrase`,
            `Complex but incorrect version`,
          ];
        } else {
          return [
            `Expertly paraphrased using ${topic}`,
            `Sophisticated but wrong version`,
            `Advanced paraphrase error`,
            `Nuanced but incorrect usage`,
          ];
        }
      };

      const generateSentenceCombiningOptions = (
        topic: string,
        q: any
      ): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Simply combined using ${topic}`,
            `Basic combination error`,
            `Wrong simple joining`,
            `Another basic mistake`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Correctly combined using ${topic}`,
            `Intermediate combination error`,
            `Wrong ${topic} combination`,
            `Complex but incorrect joining`,
          ];
        } else {
          return [
            `Expertly combined using ${topic}`,
            `Advanced combination error`,
            `Sophisticated but wrong joining`,
            `Complex incorrect structure`,
          ];
        }
      };

      const generateReadingComprehensionOptions = (
        topic: string,
        q: any
      ): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Basic understanding of ${topic}`,
            `Simple misunderstanding`,
            `Wrong basic interpretation`,
            `Another basic error`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Good interpretation of ${topic} usage`,
            `Intermediate misunderstanding`,
            `Wrong interpretation`,
            `Complex but incorrect understanding`,
          ];
        } else {
          return [
            `Sophisticated understanding of ${topic}`,
            `Advanced misinterpretation`,
            `Nuanced but wrong analysis`,
            `Complex incorrect interpretation`,
          ];
        }
      };

      const generateVerbConjugationOptions = (
        topic: string,
        q: any
      ): string[] => {
        // Level-appropriate verb forms
        if (proficiencyLevel === "A1") {
          return ["is", "are", "was", "were"];
        } else if (proficiencyLevel === "A2") {
          return ["will be", "going to", "have", "has"];
        } else if (proficiencyLevel === "B1") {
          return ["have been", "had been", "will have", "would have"];
        } else if (proficiencyLevel === "B2") {
          return ["would have been", "might have", "should have", "could have"];
        } else {
          return [
            "would have been being",
            "might have been",
            "should have been being",
            "could have been",
          ];
        }
      };

      const generateWordFormationOptions = (
        topic: string,
        q: any
      ): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            "correctly formed word",
            "wrong ending",
            "incorrect form",
            "basic error",
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            "appropriately formed word",
            "intermediate formation error",
            "wrong word structure",
            "complex but incorrect form",
          ];
        } else {
          return [
            "sophisticatedly formed word",
            "advanced formation error",
            "nuanced but wrong structure",
            "complex morphological error",
          ];
        }
      };

      const generateDialogueOptions = (topic: string, q: any): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Simple ${topic} response`,
            `Basic incorrect choice`,
            `Wrong simple response`,
            `Another basic error`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Appropriate ${topic} response`,
            `Intermediate dialogue error`,
            `Wrong conversational choice`,
            `Complex but inappropriate response`,
          ];
        } else {
          return [
            `Sophisticated ${topic} response`,
            `Advanced dialogue error`,
            `Nuanced but wrong choice`,
            `Complex inappropriate response`,
          ];
        }
      };

      const generatePunctuationOptions = (topic: string, q: any): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            "Correctly punctuated",
            "Missing period",
            "Wrong comma",
            "No punctuation",
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            "Properly punctuated",
            "Missing semicolon",
            "Wrong punctuation placement",
            "Incorrect comma usage",
          ];
        } else {
          return [
            "Expertly punctuated",
            "Missing sophisticated punctuation",
            "Wrong advanced punctuation",
            "Incorrect complex punctuation",
          ];
        }
      };

      const generateSentenceBuildingOptions = (
        topic: string,
        q: any
      ): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Simply built using ${topic}`,
            `Basic construction error`,
            `Wrong simple structure`,
            `Another basic mistake`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Well-constructed using ${topic}`,
            `Intermediate building error`,
            `Wrong sentence structure`,
            `Complex but incorrect construction`,
          ];
        } else {
          return [
            `Expertly constructed using ${topic}`,
            `Advanced construction error`,
            `Sophisticated but wrong structure`,
            `Complex incorrect building`,
          ];
        }
      };

      const generateGenericOptions = (topic: string, q: any): string[] => {
        if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
          return [
            `Basic ${topic} usage`,
            `Simple error`,
            `Wrong basic form`,
            `Another simple mistake`,
          ];
        } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
          return [
            `Correct ${topic} usage`,
            `Intermediate error`,
            `Wrong ${topic} application`,
            `Complex but incorrect option`,
          ];
        } else {
          return [
            `Sophisticated ${topic} usage`,
            `Advanced error`,
            `Nuanced but wrong application`,
            `Complex incorrect usage`,
          ];
        }
      };

      // Enhanced grammar forms helper with level awareness
      const getGrammarForms = (
        text: string,
        level: ProficiencyLevel
      ): string[] => {
        const grammarVariations: {
          [key: string]: { [key in ProficiencyLevel]: string[] };
        } = {
          "present simple": {
            A1: ["do", "does", "don't", "doesn't"],
            A2: ["do", "does", "don't", "doesn't"],
            B1: ["do", "does", "don't", "doesn't"],
            B2: ["do", "does", "don't", "doesn't"],
            C1: ["do", "does", "don't", "doesn't"],
            C2: ["do", "does", "don't", "doesn't"],
          },
          "past simple": {
            A1: ["was", "were", "did", "didn't"],
            A2: ["was", "were", "did", "didn't"],
            B1: ["was", "were", "did", "didn't"],
            B2: ["was", "were", "did", "didn't"],
            C1: ["was", "were", "did", "didn't"],
            C2: ["was", "were", "did", "didn't"],
          },
          "present perfect": {
            A1: ["have", "has", "haven't", "hasn't"],
            A2: ["have", "has", "haven't", "hasn't"],
            B1: ["have", "has", "haven't", "hasn't"],
            B2: ["have been", "has been", "haven't been", "hasn't been"],
            C1: ["have been", "has been", "haven't been", "hasn't been"],
            C2: ["have been", "has been", "haven't been", "hasn't been"],
          },
          future: {
            A1: ["will", "going to", "won't", "not going to"],
            A2: ["will", "going to", "shall", "won't"],
            B1: ["will", "going to", "shall", "won't"],
            B2: ["will have", "going to have", "shall have", "won't have"],
            C1: [
              "will have been",
              "going to have been",
              "shall have been",
              "won't have been",
            ],
            C2: [
              "will have been",
              "going to have been",
              "shall have been",
              "won't have been",
            ],
          },
          conditionals: {
            A1: ["if", "when", "would", "could"],
            A2: ["if", "unless", "would", "could"],
            B1: ["if", "unless", "would", "could"],
            B2: ["provided that", "supposing", "would have", "could have"],
            C1: [
              "were it not for",
              "but for",
              "would have been",
              "could have been",
            ],
            C2: [
              "were it not for",
              "but for",
              "would have been",
              "could have been",
            ],
          },
          articles: {
            A1: ["a", "an", "the", ""],
            A2: ["a", "an", "the", ""],
            B1: ["a", "an", "the", ""],
            B2: ["a", "an", "the", ""],
            C1: ["a", "an", "the", ""],
            C2: ["a", "an", "the", ""],
          },
        };

        const lowerText = text.toLowerCase();
        for (const [key, levelVariations] of Object.entries(
          grammarVariations
        )) {
          if (
            lowerText.includes(key) ||
            lowerText.includes(key.replace(/\s+/g, ""))
          ) {
            return levelVariations[level] || levelVariations.A1;
          }
        }

        // Level-appropriate fallback options
        if (level === "A1") {
          return ["is", "go", "have", "like"];
        } else if (level === "A2") {
          return ["went", "going", "will go", "have gone"];
        } else if (level === "B1") {
          return ["have done", "am doing", "will do", "would do"];
        } else if (level === "B2") {
          return [
            "would have done",
            "had been doing",
            "might have",
            "should have",
          ];
        } else {
          return [
            "would have been doing",
            "might have been done",
            "should have been",
            "could have been",
          ];
        }
      };

      const transformedExercise = {
        ...parsedResponse.exercise,
        questions: parsedResponse.exercise.questions.map(
          (q: any, index: number) => {
            // Convert letter-based correct answers (a, b, c, d) to numbers (0, 1, 2, 3)
            let correctAnswer = q.correct;
            if (typeof correctAnswer === "string") {
              const letterToNumber: { [key: string]: number } = {
                a: 0,
                b: 1,
                c: 2,
                d: 3,
              };
              correctAnswer =
                letterToNumber[correctAnswer.toLowerCase()] ?? correctAnswer;
            }

            // Extract the actual question content - try multiple possible field names
            let fullQuestion = "";

            // Try different possible question field names from AI response
            if (q.question && q.question !== `Question ${index + 1}`) {
              fullQuestion = q.question;
            } else if (q.text && q.text !== `Question ${index + 1}`) {
              fullQuestion = q.text;
            } else if (q.prompt) {
              fullQuestion = q.prompt;
            } else if (q.sentence) {
              fullQuestion = q.sentence;
            } else {
              // Create a meaningful question based on the exercise type and topic
              switch (exerciseType) {
                case "transformation":
                  fullQuestion = `Transform this sentence using ${grammarText}:`;
                  break;
                case "multiple-choice":
                  fullQuestion = `Choose the correct form using ${grammarText}:`;
                  break;
                case "fill-in-blank":
                  fullQuestion = `Fill in the blank with the correct ${grammarText} form:`;
                  break;
                case "sentence-completion":
                  fullQuestion = `Complete the sentence using ${grammarText}:`;
                  break;
                case "paraphrasing":
                  fullQuestion = `Choose the best paraphrase using ${grammarText}:`;
                  break;
                case "cloze-test":
                  fullQuestion = `Choose the correct word for the blank:`;
                  break;
                default:
                  fullQuestion = `Question about ${grammarText}:`;
              }
            }

            // Add additional content if available
            if (q.sentence && fullQuestion !== q.sentence) {
              fullQuestion += `\n\n${q.sentence}`;
            }

            // Add stem or base sentence if available
            if (q.stem) {
              fullQuestion += `\n\n${q.stem}`;
            }

            // Add multiple sentence options if they exist
            if (q.sentence1 && q.sentence2 && q.sentence3 && q.sentence4) {
              fullQuestion += `\n\nChoose the correct sentence:`;
              fullQuestion += `\nA) ${q.sentence1}`;
              fullQuestion += `\nB) ${q.sentence2}`;
              fullQuestion += `\nC) ${q.sentence3}`;
              fullQuestion += `\nD) ${q.sentence4}`;
            }

            // Add passage content if it exists
            if (q.passage) {
              fullQuestion += `\n\nReading Passage:\n${q.passage}`;
            }

            // Add context or instructions if they exist
            if (q.context) {
              fullQuestion += `\n\nContext: ${q.context}`;
            }

            if (q.instructions) {
              fullQuestion += `\n\nInstructions: ${q.instructions}`;
            }

            // Debug log to see what the AI is actually returning
            console.log(
              `Question ${index + 1} raw data:`,
              JSON.stringify(q, null, 2)
            );
            console.log(`Final question text: "${fullQuestion}"`);

            // ROBUST OPTIONS VALIDATION AND FALLBACK GENERATION
            let finalOptions = q.options || [];

            // Define exercise types that absolutely need options
            const exerciseTypesNeedingOptions = [
              "multiple-choice",
              "cloze-test",
              "transformation",
              "paraphrasing",
              "sentence-building",
              "verb-conjugation",
              "word-formation",
              "sentence-combining",
              "dialogue-completion",
              "punctuation",
              "reading-comprehension",
            ];

            // Check if this exercise type needs options but doesn't have valid ones
            const needsOptions =
              exerciseTypesNeedingOptions.includes(exerciseType);
            const hasValidOptions =
              finalOptions &&
              Array.isArray(finalOptions) &&
              finalOptions.length >= 3;

            if (needsOptions && !hasValidOptions) {
              console.warn(
                `⚠️ Missing or insufficient options for ${exerciseType} question ${
                  index + 1
                }. AI returned:`,
                q.options
              );

              // Generate intelligent fallback options
              finalOptions = generateFallbackOptions(
                exerciseType,
                grammarText,
                q,
                index
              );

              // Ensure we have a valid correct answer
              if (
                typeof correctAnswer !== "number" ||
                correctAnswer >= finalOptions.length ||
                correctAnswer < 0
              ) {
                correctAnswer = 0; // Default to first option
                console.warn(
                  `⚠️ Fixed correct answer index for question ${index + 1}`
                );
              }
            }

            // Additional validation: ensure options are meaningful strings
            if (finalOptions && finalOptions.length > 0) {
              finalOptions = finalOptions.map(
                (option: any, optIndex: number) => {
                  if (
                    !option ||
                    typeof option !== "string" ||
                    option.trim().length === 0
                  ) {
                    console.warn(
                      `⚠️ Fixed empty option ${optIndex + 1} for question ${
                        index + 1
                      }`
                    );
                    return `Option ${optIndex + 1}`;
                  }
                  return option.trim();
                }
              );
            }

            // Ensure correct answer is within valid range
            if (
              finalOptions.length > 0 &&
              (correctAnswer >= finalOptions.length || correctAnswer < 0)
            ) {
              console.warn(
                `⚠️ Invalid correct answer index ${correctAnswer} for question ${
                  index + 1
                }. Setting to 0.`
              );
              correctAnswer = 0;
            }

            // Debug logging
            console.log(`Question ${index + 1} processed:`, {
              exerciseType,
              originalOptions: q.options,
              finalOptionsCount: finalOptions?.length || 0,
              correctAnswer,
              needsOptions,
              hasValidOptions: finalOptions && finalOptions.length >= 3,
            });

            return {
              id: index + 1,
              question: fullQuestion,
              options: finalOptions,
              correct: correctAnswer,
              explanation:
                q.explanation || `This tests ${grammarText} grammar rules.`,
              tip:
                q.tip ||
                `Grammar tip: This question tests ${grammarText}. Review the rules for when and how to use ${grammarText} correctly.`,
              tense: q.tense || null, // Include the tense field from AI response
              type: exerciseType,
              // Optional fields for different exercise types
              passage: q.passage,
              incorrectText: q.incorrectText,
              words: q.words,
              pairs: q.pairs,
            };
          }
        ),
      };

      return NextResponse.json({ exercise: transformedExercise });
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

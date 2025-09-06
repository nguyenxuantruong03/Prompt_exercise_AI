import { ExerciseType, ProficiencyLevel, CertificateType } from "./types";

export interface PromptGeneratorOptions {
  grammarText: string;
  exerciseType: ExerciseType;
  proficiencyLevel: ProficiencyLevel;
  certificateType?: CertificateType;
  numExercises: number;
  levelContext: string;
  certificateContext: string;
  levelRequirements: string;
  detailedAnalysis: boolean;
  baseInstruction: string;
  lightningTimeLimit?: number;
}

export const generatePromptForExerciseType = (
  options: PromptGeneratorOptions
): string => {
  const {
    grammarText,
    exerciseType,
    numExercises,
    baseInstruction,
    lightningTimeLimit = 10,
  } = options;
  switch (exerciseType) {
    case "multiple-choice":
      return generateMultipleChoicePrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "fill-in-blank":
      return generateFillInBlankPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "sentence-completion":
      return generateSentenceCompletionPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "error-correction":
      return generateErrorCorrectionPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "transformation":
      return generateTransformationPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "dialogue-completion":
      return generateDialogueCompletionPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "reading-comprehension":
      return generateReadingComprehensionPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "word-order":
      return generateWordOrderPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "matching":
      return generateMatchingPrompt(baseInstruction, grammarText, numExercises);
    case "cloze-test":
      return generateClozeTestPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "sentence-building":
      return generateSentenceBuildingPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "paraphrasing":
      return generateParaphrasingPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "verb-conjugation":
      return generateVerbConjugationPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "punctuation":
      return generatePunctuationPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "word-formation":
      return generateWordFormationPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "sentence-combining":
      return generateSentenceCombiningPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "comparison-exercise":
      return generateComparisonExercisePrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "context-matching":
      return generateContextMatchingPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "passive-active-matching":
      return generatePassiveActiveMatchingPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "clause-combining":
      return generateClauseCombiningPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "multi-topic-integration":
      return generateMultiTopicIntegrationPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "form-conversion":
      return generateFormConversionPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "situational-grammar":
      return generateSituationalGrammarPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "paragraph-tense-conversion":
      return generateParagraphTenseConversionPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "grammar-generator":
      return generateGrammarGeneratorPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "true-false-lightning":
      return generateTrueFalseLightningPrompt(
        baseInstruction,
        grammarText,
        numExercises,
        lightningTimeLimit
      );
    case "speed-challenge":
      return generateSpeedChallengePrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "word-arrangement-race":
      return generateWordArrangementRacePrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "image-grammar-quiz":
      return generateImageGrammarQuizPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "grammar-memory-match":
      return generateGrammarMemoryMatchPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "grammar-puzzle-solver":
      return generateGrammarPuzzleSolverPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "rapid-fire-corrections":
      return generateRapidFireCorrectionsPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "tense-timeline-game":
      return generateTenseTimelineGamePrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    case "grammar-category-sort":
      return generateGrammarCategorySortPrompt(
        baseInstruction,
        grammarText,
        numExercises
      );
    default:
      return generateDefaultPrompt(baseInstruction, grammarText, numExercises);
  }
};

const generateMultipleChoicePrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateFillInBlankPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateSentenceCompletionPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateErrorCorrectionPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateTransformationPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateDialogueCompletionPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateReadingComprehensionPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateWordOrderPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateMatchingPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateClozeTestPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateSentenceBuildingPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateParaphrasingPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateVerbConjugationPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generatePunctuationPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateWordFormationPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateSentenceCombiningPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

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
};

const generateComparisonExercisePrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original comparison exercises that distinguish between similar "${grammarText}" structures.

GENERATION INSTRUCTIONS:
- Create exercises that help students distinguish between similar grammar structures
- Examples: Past Perfect vs Past Simple, Used to vs Would, Present Perfect vs Past Simple
- Each question should clearly show the difference between two similar structures
- Use context that makes the distinction clear and meaningful
- Provide detailed explanations about when to use each structure

COMPARISON EXAMPLES:
- "Past Perfect vs Past Simple": Show when actions happened before other past actions vs simple past events
- "Used to vs Would": Distinguish between past states/habits vs repeated past actions
- "Present Perfect vs Past Simple": Show ongoing relevance vs completed past actions
- "Future Perfect vs Future Simple": Actions completed before future time vs simple future

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Grammar Comparison Exercise", 
    "type": "comparison-exercise",
    "questions": [
      {
        "id": 1,
        "question": "Choose the correct form. Context: [provide clear context that makes the choice obvious]",
        "options": ["Structure 1 option", "Structure 2 option", "Another variation", "Incorrect option"],
        "correct": 0,
        "explanation": "Detailed explanation showing why Structure 1 is correct in this context and when to use it vs Structure 2",
        "tip": "Grammar comparison tip: Explain the key differences between the two structures, when to use each, and common mistakes students make when choosing between them",
        "type": "comparison-exercise",
        "comparisonStructures": {
          "structure1": "Name of first structure (e.g., Past Perfect)",
          "structure2": "Name of second structure (e.g., Past Simple)", 
          "examples": {
            "structure1Example": "Example sentence using Structure 1",
            "structure2Example": "Example sentence using Structure 2"
          }
        }
      }
      // Generate ${numExercises} completely unique questions here
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateContextMatchingPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Search your knowledge and create ${numExercises} original context-matching exercises that test understanding of when to use "${grammarText}" grammar in real-world situations.

CONCEPT: Context Matching exercises focus on choosing the most appropriate grammar structure based on the SITUATION, TIME FRAME, FORMALITY LEVEL, and PURPOSE rather than just memorizing formulas.

GENERATION INSTRUCTIONS:
- Create realistic scenarios where students must choose appropriate "${grammarText}" grammar
- Each scenario should have a clear context: situation, timeframe, formality level, and purpose
- Provide 4 grammar structure options with different levels of appropriateness:
  * 1 PERFECT choice (completely natural and appropriate)
  * 1-2 ACCEPTABLE choices (grammatically correct but less natural/appropriate)
  * 1-2 INAPPROPRIATE choices (wrong for the context or grammatically incorrect)
- Focus on WHY each choice is appropriate or inappropriate in the given context
- Use varied real-life situations: job interviews, casual conversations, academic writing, storytelling, etc.

CONTEXT ELEMENTS TO VARY:
- Situation: job interview, telling a story, academic presentation, casual chat, formal letter, etc.
- Timeframe: past events, ongoing situations, future plans, habitual actions, etc.
- Formality: formal/professional, informal/casual, neutral
- Purpose: describing, narrating, explaining, requesting, complaining, etc.

EXAMPLE STRUCTURE:
{
  "question": "Choose the most appropriate way to express this in the given context:",
  "context": {
    "situation": "You are telling a friend about your childhood memories",
    "timeframe": "Recounting past habits and repeated actions from childhood",
    "formality": "informal",
    "purpose": "sharing nostalgic memories in a casual conversation",
    "grammarChoices": [
      {
        "structure": "Past Simple with 'always'",
        "appropriateness": "acceptable",
        "reason": "Grammatically correct but doesn't emphasize the habitual nature as effectively"
      },
      {
        "structure": "Used to + infinitive",
        "appropriateness": "perfect", 
        "reason": "Perfect for nostalgic reminiscing about past habits that no longer exist"
      },
      {
        "structure": "Present Perfect",
        "appropriateness": "inappropriate",
        "reason": "Wrong tense - implies connection to present, but these are childhood memories"
      },
      {
        "structure": "Would + infinitive",
        "appropriateness": "acceptable",
        "reason": "Can work for repeated past actions but 'used to' is more natural for this nostalgic context"
      }
    ]
  },
  "options": [
    "I always played in the park after school",
    "I used to play in the park after school", 
    "I have played in the park after school",
    "I would play in the park after school"
  ],
  "correct": 1
}

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Context Matching Exercise",
    "type": "context-matching",
    "questions": [
      {
        "id": 1,
        "question": "Choose the most appropriate way to express this in the given context: [clear context description]",
        "context": {
          "situation": "Specific real-world scenario (e.g., 'job interview', 'telling a story to friends')",
          "timeframe": "When this communication happens (e.g., 'describing past experiences', 'talking about future plans')",
          "formality": "formal" | "informal" | "neutral",
          "purpose": "What the speaker wants to achieve (e.g., 'impressing interviewer', 'sharing memories')",
          "grammarChoices": [
            {
              "structure": "Name of grammar structure (e.g., 'Past Simple')",
              "appropriateness": "perfect" | "acceptable" | "inappropriate",
              "reason": "Clear explanation of why this choice fits or doesn't fit the context"
            }
            // Include entry for each of the 4 options
          ]
        },
        "options": ["Option 1 using grammar structure A", "Option 2 using grammar structure B", "Option 3 using grammar structure C", "Option 4 using grammar structure D"],
        "correct": 0,
        "explanation": "Detailed explanation of why the correct option is most appropriate for this specific context, situation, and purpose",
        "tip": "Grammar tip focusing on WHEN and WHY to use this structure in similar contexts, including: 1) Context clues to look for, 2) Situation appropriateness, 3) Formality considerations, 4) Common context mistakes to avoid",
        "tense": "The specific tense/structure this question focuses on",
        "type": "context-matching"
      }
      // Generate ${numExercises} completely unique context-based questions here
    ]
  }
}

FOCUS ON REAL CONTEXTS:
- Job interviews: formal past experience descriptions
- Storytelling: narrative past tenses with time sequences  
- Academic writing: formal explanations and analysis
- Casual conversations: informal expressions and contractions
- Business emails: professional and polite language
- Travel situations: asking for help, describing problems
- Restaurant/shopping: polite requests and complaints

CREATE ORIGINAL CONTENT NOW:`;
};

const generateDefaultPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original multiple-choice questions about "${grammarText}" grammar.
Search your knowledge base and generate completely unique content.

CREATE ORIGINAL CONTENT NOW:`;
};

const generatePassiveActiveMatchingPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original passive-active matching exercises about "${grammarText}".

GENERATION INSTRUCTIONS:
- Each question tests matching active voice sentences with their passive voice counterparts
- Use different tenses (past simple, present perfect, future, etc.)
- Include the tense name for educational purposes
- Provide sentences with clear subjects and objects that work in both voices
- Make sure the meaning remains the same in both voices

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Passive-Active Voice Matching",
    "type": "passive-active-matching",
    "questions": [
      {
        "id": 1,
        "question": "Match the active and passive voice sentences (same meaning, different tenses):",
        "voicePairs": [
          {
            "active": "The chef prepared the meal",
            "passive": "The meal was prepared by the chef",
            "tense": "Simple Past"
          },
          {
            "active": "Scientists have discovered a new species",
            "passive": "A new species has been discovered by scientists", 
            "tense": "Present Perfect"
          }
        ],
        "correct": 2,
        "explanation": "In passive voice, the object becomes the subject and the action is done TO something rather than BY someone",
        "tip": "Passive voice formula: Subject + be + past participle + (by agent). Use when the action is more important than who does it",
        "tense": "Mixed Tenses",
        "type": "passive-active-matching"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateClauseCombiningPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original clause combining exercises about "${grammarText}".

GENERATION INSTRUCTIONS:
- Each exercise provides separated clauses that need to be combined correctly
- Include main clauses, subordinate clauses, and appropriate connectors
- Show the final combined sentence as the correct answer
- Use various connectors: because, although, when, since, if, etc.
- Test understanding of complex sentence structure

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Clause Combining Exercise", 
    "type": "clause-combining",
    "questions": [
      {
        "id": 1,
        "question": "Drag and combine the clauses to form correct complex sentences:",
        "clauses": [
          {
            "mainClause": "She studied hard for the exam",
            "subordinateClause": "she wanted to get a good grade",
            "connector": "because",
            "combinedSentence": "She studied hard for the exam because she wanted to get a good grade"
          },
          {
            "mainClause": "The weather was terrible",
            "subordinateClause": "we decided to go hiking",
            "connector": "although", 
            "combinedSentence": "Although the weather was terrible, we decided to go hiking"
          }
        ],
        "correct": 2,
        "explanation": "Complex sentences combine independent and dependent clauses using subordinating conjunctions",
        "tip": "Main clause = complete thought, Subordinate clause = incomplete thought that depends on the main clause. Connectors show the relationship between ideas",
        "tense": "Complex Sentences",
        "type": "clause-combining"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateMultiTopicIntegrationPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original multi-topic integration exercises combining 2-3 grammar topics with "${grammarText}".

GENERATION INSTRUCTIONS:
- Each question integrates multiple grammar concepts (e.g., "Past Perfect + Relative Clauses")
- Provide grammarTopics array and topicWeights for each question  
- Questions require knowledge of ALL listed topics to answer correctly
- Show how different grammar rules work together in real sentences
- Include detailed explanations covering all integrated topics

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Multi-Topic Integration",
    "type": "multi-topic-integration", 
    "questions": [
      {
        "id": 1,
        "question": "Choose the sentence that correctly combines past perfect tense with a relative clause:",
        "options": [
          "The book which I had read was fascinating",
          "The book that I have read was fascinating", 
          "The book who I had read was fascinating",
          "The book what I had read was fascinating"
        ],
        "correct": 0,
        "explanation": "This sentence correctly uses past perfect ('had read') with the relative pronoun 'which' for things",
        "tip": "Past perfect shows completed action before another past time. Relative clauses use 'which/that' for things, 'who/whom' for people. Both grammar points must be correct",
        "grammarTopics": ["Past Perfect", "Relative Clauses"],
        "topicWeights": {
          "Past Perfect": 0.6,
          "Relative Clauses": 0.4
        },
        "tense": "Past Perfect with Relative Clauses",
        "type": "multi-topic-integration"
      }
    ]
  }
}

COMMON TOPIC COMBINATIONS:
- Tense + Relative Clauses
- Modal Verbs + Passive Voice  
- Conditional + Perfect Tenses
- Gerunds/Infinitives + Reported Speech
- Comparative + Present Perfect
- Articles + Countable/Uncountable Nouns

CREATE ORIGINAL CONTENT NOW:`;
};

const generateFormConversionPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original form conversion exercises that teach students how to convert normal sentences into questions, commands, or exclamations.

CONCEPT: Form Conversion exercises help students understand how the same information can be expressed in different sentence types (declarative → interrogative → imperative → exclamatory) while maintaining grammatical accuracy.

GENERATION INSTRUCTIONS:
- Start with clear, simple declarative sentences (statements)
- Show how to convert them into:
  * Questions (interrogative): What tense to use? How to form questions?
  * Commands (imperative): Give instructions or orders
  * Exclamations (exclamatory): Express strong emotions or surprise
- Include step-by-step conversion explanations
- Focus on grammar changes: word order, auxiliary verbs, punctuation, intonation
- Use realistic, everyday sentences that students would actually need to convert
- Show common mistakes and how to avoid them

CONVERSION EXAMPLES:
Original: "You are studying English."
→ Question: "Are you studying English?" (Subject-auxiliary inversion)
→ Command: "Study English!" (Remove subject, use base verb)
→ Exclamation: "You are studying English so hard!" (Add emphasis words)

Original: "She finished her homework."
→ Question: "Did she finish her homework?" (Add auxiliary 'did', use base verb)
→ Command: "Finish your homework!" (Imperative form)
→ Exclamation: "She finished her homework so quickly!" (Add emphasis)

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Form Conversion Exercise",
    "type": "form-conversion",
    "questions": [
      {
        "id": 1,
        "question": "Convert this sentence into the requested form: 'They are playing football.' → Convert to QUESTION",
        "originalSentence": "They are playing football.",
        "targetForm": "question",
        "options": [
          "Are they playing football?",
          "Do they playing football?", 
          "They are playing football?",
          "Playing they are football?"
        ],
        "correct": 0,
        "explanation": "To form a question from present continuous, move the auxiliary verb 'are' to the beginning: 'Are they playing football?'",
        "tip": "For present continuous questions: Auxiliary verb (am/is/are) + subject + main verb + ing + rest of sentence + ?",
        "conversionSteps": [
          "1. Identify the auxiliary verb ('are')",
          "2. Move auxiliary to the beginning",
          "3. Keep subject and main verb in order", 
          "4. Add question mark",
          "5. Check: Are + they + playing + football + ?"
        ],
        "tense": "Present Continuous Questions",
        "type": "form-conversion"
      }
      // Generate ${numExercises} completely unique questions here covering different conversion types
    ]
  }
}

FOCUS ON DIFFERENT CONVERSIONS:
- Present/Past/Future tenses → Questions (auxiliary verb rules)
- Modal verbs → Commands (removing modals, using imperatives)  
- Adjective sentences → Exclamations (What/How patterns)
- Statements → Yes/No questions vs WH-questions
- Complex sentences → Multiple conversion possibilities

CREATE ORIGINAL CONTENT NOW:`;
};

const generateSituationalGrammarPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original situational grammar exercises that teach students which grammar structures to use in specific real-world situations.

CONCEPT: Situational Grammar focuses on choosing the RIGHT grammar for the RIGHT context. Students learn WHEN and WHY to use specific grammar structures based on the situation, purpose, formality, and social context.

GENERATION INSTRUCTIONS:
- Create realistic, practical scenarios students will encounter
- For each situation, explain:
  * WHAT grammar structures are most appropriate
  * WHY those structures fit the context  
  * WHAT structures to avoid and why
  * HOW formality level affects grammar choices
- Focus on practical decision-making, not just grammar rules
- Include common mistakes students make in these situations
- Provide specific tips for each scenario

SITUATION CATEGORIES TO INCLUDE:
🏢 PROFESSIONAL:
- Job interviews (formal past experience, achievements)
- Business emails (polite requests, formal language)
- Presentations (clear explanations, professional tone)
- Meetings (suggestions, agreements, disagreements)

📚 ACADEMIC:
- Essay writing (formal structures, complex sentences)
- Research presentations (academic vocabulary, passive voice)
- Asking professors questions (polite inquiries)
- Group discussions (expressing opinions, agreeing/disagreeing)

💬 SOCIAL:
- Telling stories (narrative tenses, sequencing)
- Casual conversations (informal contractions, slang)
- Making friends (ice breakers, personal information)
- Social media posts (informal, abbreviated language)

🌍 TRAVEL:
- Asking for directions (polite questions, understanding responses)
- Hotel/restaurant situations (requests, complaints, preferences)
- Shopping (price inquiries, comparisons, negotiations)
- Emergency situations (urgent communication, asking for help)

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Situational Grammar Practice",
    "type": "situational-grammar",
    "questions": [
      {
        "id": 1,
        "question": "You are in a job interview describing your past work experience. Which grammar approach is most appropriate for this situation?",
        "situation": {
          "context": "Job interview",
          "scenario": "The interviewer asks: 'Tell me about your previous work experience and what you accomplished in your last position.'",
          "appropriateGrammar": [
            "Present Perfect: 'I have worked in marketing for 5 years'",
            "Past Simple with specific achievements: 'I increased sales by 20%'", 
            "Past Perfect for sequence: 'I had completed the project before the deadline'",
            "Formal vocabulary and complete sentences"
          ],
          "inappropriateGrammar": [
            "Present Simple for past events: 'I work there for 5 years'",
            "Informal contractions: 'I've kinda been doing marketing'",
            "Vague expressions: 'I did some stuff'",
            "Future tense for past experience: 'I will work there'"
          ],
          "formalityLevel": "formal",
          "tips": [
            "Use Present Perfect to connect past experience to present relevance",
            "Use Past Simple for specific achievements with dates",
            "Avoid contractions and informal language", 
            "Be specific with numbers and results",
            "Use professional vocabulary: 'managed', 'developed', 'implemented'"
          ]
        },
        "options": [
          "Use Present Perfect and Past Simple with specific achievements and formal vocabulary",
          "Use casual language with lots of contractions to seem friendly and approachable",
          "Use Future tense to talk about what you want to do in this company",
          "Use Present Simple throughout to keep it simple and easy to understand"
        ],
        "correct": 0,
        "explanation": "In job interviews, use Present Perfect to connect past experience to current skills, and Past Simple for specific achievements. Formal vocabulary shows professionalism.",
        "tip": "Interview grammar rule: Present Perfect (experience) + Past Simple (specific achievements) + Formal register = Professional credibility",
        "tense": "Mixed Professional Tenses",
        "type": "situational-grammar"
      }
      // Generate ${numExercises} completely unique questions covering different situations
    ]
  }
}

COVER DIVERSE SCENARIOS:
- Professional situations (interviews, meetings, presentations, emails)
- Academic contexts (essays, discussions, questions to teachers) 
- Social interactions (storytelling, making friends, casual chats)
- Travel situations (asking directions, hotel problems, shopping)
- Digital communication (social media, texting, online forums)
- Service situations (restaurants, banks, hospitals, shops)

CREATE ORIGINAL CONTENT NOW:`;
};

const generateParagraphTenseConversionPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} original paragraph tense conversion exercises that teach students how to systematically change an entire paragraph from one tense to another while maintaining meaning and coherence.

CONCEPT: Paragraph Tense Conversion helps students understand how different tenses create different time perspectives and how to maintain consistency throughout a text. This is crucial for academic writing, storytelling, and reporting.

GENERATION INSTRUCTIONS:
- Provide coherent paragraphs (3-5 sentences) in one tense 
- Ask students to convert the ENTIRE paragraph to a different tense
- Include conversion rules and step-by-step explanations
- Show how time expressions, adverbs, and context clues must also change
- Test understanding of tense consistency and narrative flow
- Use realistic, meaningful contexts (not just random sentences)

CONVERSION COMBINATIONS TO INCLUDE:
📖 NARRATIVE CONVERSIONS:
- Present Simple → Past Simple (news report → historical account)
- Past Simple → Present Perfect (completed story → ongoing relevance)
- Present Simple → Future Simple (current routine → planned schedule)

📊 ACADEMIC CONVERSIONS:
- Present Simple → Past Simple (general facts → research findings)
- Past Simple → Past Perfect (simple sequence → complex time relationships)
- Present Perfect → Past Perfect (recent events → earlier background)

📰 REPORTING CONVERSIONS:
- Present Simple → Past Simple (live reporting → news summary)
- Future Simple → Conditional (predictions → hypothetical scenarios)
- Past Continuous → Past Perfect Continuous (interrupted actions → completed background)

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Paragraph Tense Conversion",
    "type": "paragraph-tense-conversion",
    "questions": [
      {
        "id": 1,
        "question": "Convert this entire paragraph from Present Simple to Past Simple. Change ALL verbs and time expressions as needed:",
        "originalParagraph": "Maria works as a software engineer in Silicon Valley. She develops mobile applications and enjoys solving complex problems. Every morning, she drinks coffee while reviewing code from the previous day. Her colleagues respect her technical skills and often ask for her advice on difficult projects.",
        "sourceTense": "Present Simple",
        "targetTense": "Past Simple", 
        "options": [
          "Maria worked as a software engineer in Silicon Valley. She developed mobile applications and enjoyed solving complex problems. Every morning, she drank coffee while reviewing code from the previous day. Her colleagues respected her technical skills and often asked for her advice on difficult projects.",
          "Maria has worked as a software engineer in Silicon Valley. She has developed mobile applications and has enjoyed solving complex problems. Every morning, she has drunk coffee while reviewing code from the previous day. Her colleagues have respected her technical skills and often have asked for her advice on difficult projects.",
          "Maria is working as a software engineer in Silicon Valley. She is developing mobile applications and is enjoying solving complex problems. Every morning, she is drinking coffee while reviewing code from the previous day. Her colleagues are respecting her technical skills and often are asking for her advice on difficult projects.",
          "Maria will work as a software engineer in Silicon Valley. She will develop mobile applications and will enjoy solving complex problems. Every morning, she will drink coffee while reviewing code from the previous day. Her colleagues will respect her technical skills and often will ask for her advice on difficult projects."
        ],
        "correct": 0,
        "convertedParagraph": "Maria worked as a software engineer in Silicon Valley. She developed mobile applications and enjoyed solving complex problems. Every morning, she drank coffee while reviewing code from the previous day. Her colleagues respected her technical skills and often asked for her advice on difficult projects.",
        "explanation": "All present simple verbs change to past simple: works→worked, develops→developed, enjoys→enjoyed, drinks→drank, respect→respected, ask→asked. Time expressions remain the same as they still indicate habitual actions, just in the past.",
        "tip": "Present Simple → Past Simple conversion: Change all main verbs to past form, keep time expressions that show habits (every morning, often), maintain the same paragraph structure and meaning.",
        "conversionRules": [
          "1. Change all present simple verbs to past simple forms",
          "2. Regular verbs: add -ed (work→worked, develop→developed)",
          "3. Irregular verbs: use past form (drink→drank)",
          "4. Keep habitual time expressions (every morning, often)",
          "5. Maintain parallel structure and meaning",
          "6. Check subject-verb agreement in past tense"
        ],
        "tense": "Present Simple to Past Simple",
        "type": "paragraph-tense-conversion"
      }
      // Generate ${numExercises} completely unique paragraph conversion exercises
    ]
  }
}

FOCUS ON DIFFERENT CONVERSION TYPES:
- Simple → Complex tenses (Present Simple → Present Perfect)
- Time perspective shifts (Past → Present → Future)
- Narrative changes (Past Simple → Past Perfect for flashbacks)  
- Academic contexts (research findings, reports, analyses)
- Real-world scenarios (news articles, stories, instructions)
- Maintain meaning while changing time perspective

CREATE ORIGINAL CONTENT NOW:`;
};

const generateGrammarGeneratorPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} grammar generator exercises where learners use vocabulary words to create sentences with "${grammarText}" grammar rules.

GRAMMAR GENERATOR FORMAT:
🎯 Learner inputs vocabulary: go, school, every day → selects grammar: Present Simple
🤖 AI generates sentences using that vocabulary and grammar pattern
📝 Learner evaluates, modifies, or generates more examples

GENERATION INSTRUCTIONS:
- Provide 3-5 vocabulary words for each exercise
- Specify the exact grammar pattern to use
- Generate 2-3 example sentences using the vocabulary and pattern
- Include tasks: generate new sentences, evaluate correctness, or modify existing ones

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Grammar Generator",
    "type": "grammar-generator",
    "questions": [
      {
        "id": 1,
        "question": "Use these vocabulary words with ${grammarText} to create sentences:",
        "generatorData": {
          "vocabulary": ["go", "school", "every day", "student", "learn"],
          "grammarRule": "Present Simple - positive statements",
          "generatedSentences": [
            "I go to school every day",
            "The student learns new things every day", 
            "Students go to school to learn"
          ],
          "task": "generate"
        },
        "correct": "User should create grammatically correct sentences using Present Simple with the given vocabulary",
        "explanation": "Present Simple uses base form of verb (go, learn) for I/you/we/they, and adds -s/-es for he/she/it (goes, learns). Use with frequency adverbs like 'every day'.",
        "tip": "Remember: Subject + base verb (+ -s for 3rd person singular) + object/complement. Use given vocabulary words in different sentence positions.",
        "tense": "${grammarText}",
        "type": "grammar-generator"
      }
      // Generate ${numExercises} completely unique grammar generator exercises
    ]
  }
}

VOCABULARY THEMES TO USE:
- Daily routines (wake up, brush teeth, go to work)
- School activities (study, read books, take exams)
- Family life (parents, siblings, live together)
- Sports and hobbies (play football, watch TV, listen to music)
- Food and dining (eat breakfast, cook dinner, drink water)
- Work and career (job, office, colleague, meeting)

TASKS TO INCLUDE:
- Generate: Create new sentences using vocabulary + grammar
- Evaluate: Judge if AI-generated sentences are correct
- Modify: Fix or improve given sentences

CREATE ORIGINAL CONTENT NOW:`;
};

const generateSpeedChallengePrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} SPEED CHALLENGE questions about "${grammarText}" for rapid-fire answering with time pressure.

SPEED CHALLENGE FORMAT:
⚡ Multiple choice questions with 10-second time limit
🎯 Points awarded based on speed and accuracy  
🔥 Streak bonuses for consecutive correct answers
⏰ Quick thinking grammar practice

GENERATION INSTRUCTIONS:
- Create engaging multiple choice questions (4 options each)
- Focus on rapid recognition of correct "${grammarText}" usage
- Include time bonus points (5-25 points based on speed)
- Add difficulty ratings (easy/medium/hard)
- Make incorrect options tempting but clearly wrong
- Keep questions concise for quick reading

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Speed Challenge ⚡",
    "type": "speed-challenge", 
    "questions": [
      {
        "id": 1,
        "question": "Which sentence uses ${grammarText} correctly?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 1,
        "explanation": "Explanation of correct answer",
        "type": "speed-challenge",
        "speedChallengeData": {
          "timeLimit": 10,
          "points": 10,
          "difficulty": "medium",
          "bonusTime": 5
        }
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateWordArrangementRacePrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} WORD ARRANGEMENT RACE questions about "${grammarText}" where learners drag words to form correct sentences quickly.

WORD ARRANGEMENT FORMAT:
🏃‍♂️ Scrambled words to arrange in 30 seconds
📝 Drag and drop interface for sentence building
💡 Hint system available (3 hints maximum)
🎯 Points based on speed and accuracy

GENERATION INSTRUCTIONS:
- Provide scrambled word arrays for drag-and-drop
- Include correct word order for validation
- Add helpful hints for word ordering
- Focus on "${grammarText}" sentence structures
- Keep sentences 6-12 words for optimal challenge
- Include time bonuses and hint penalties

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Word Arrangement Race 🏃‍♂️",
    "type": "word-arrangement-race", 
    "questions": [
      {
        "id": 1,
        "question": "Arrange these words to form a correct sentence about ${grammarText}:",
        "wordArrangementData": {
          "scrambledWords": ["word1", "word2", "word3", "word4"],
          "correctOrder": ["word1", "word3", "word2", "word4"],
          "timeLimit": 30,
          "hints": ["Hint about word order", "Another helpful hint"]
        },
        "explanation": "Explanation of the correct sentence structure",
        "type": "word-arrangement-race"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateImageGrammarQuizPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} IMAGE GRAMMAR QUIZ questions about "${grammarText}" where AI-generated images help test grammar understanding.

IMAGE QUIZ FORMAT:
🖼️ AI-generated educational images for each question
👁️ Visual context to support grammar learning
🧠 Multi-modal learning (visual + textual)
🎨 Creative image prompts for grammar concepts

GENERATION INSTRUCTIONS:
- Create detailed image prompts for AI image generation
- Design questions that connect visual content to "${grammarText}"
- Include image descriptions for accessibility
- Focus on visual scenarios that demonstrate grammar usage
- Make questions test grammar understanding through visual context
- Add bonus points for visual analysis skills

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Image Grammar Quiz 🖼️",
    "type": "image-grammar-quiz", 
    "questions": [
      {
        "id": 1,
        "question": "Based on the image, which sentence correctly describes the action using ${grammarText}?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 1,
        "explanation": "Explanation connecting image to grammar",
        "type": "image-grammar-quiz",
        "imageGrammarData": {
          "imagePrompt": "Detailed prompt for AI image generation",
          "imageDescription": "Description of what the image shows",
          "grammarFocus": "${grammarText}",
          "alternatives": ["Alternative description 1", "Alternative description 2"]
        }
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateGrammarMemoryMatchPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} GRAMMAR MEMORY MATCH pairs about "${grammarText}" for memory-based learning game.

MEMORY MATCH FORMAT:
🧠 Match grammar rules with examples
🔄 Flip cards to find matching pairs
⏱️ Time-based scoring system
🎮 Memory skill + grammar learning

GENERATION INSTRUCTIONS:
- Create matching pairs: rules ↔ examples, terms ↔ definitions
- Focus on "${grammarText}" concepts and applications
- Include varied pair types for engaging gameplay
- Add time limits for memory challenge
- Make matches educational and memorable

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Memory Match Game 🧠",
    "type": "grammar-memory-match", 
    "questions": [
      {
        "id": 1,
        "question": "Match the ${grammarText} rules with their examples:",
        "memoryMatchData": {
          "pairs": [
            {
              "id": "rule1",
              "type": "rule",
              "content": "Grammar rule description",
              "matchId": "example1"
            },
            {
              "id": "example1", 
              "type": "example",
              "content": "Example sentence",
              "matchId": "rule1"
            }
          ],
          "timeLimit": 60
        },
        "explanation": "Explanation of the grammar concept",
        "type": "grammar-memory-match"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateGrammarPuzzleSolverPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} GRAMMAR PUZZLE questions about "${grammarText}" with crosswords, anagrams, and word puzzles.

PUZZLE FORMAT:
🧩 Crossword clues, anagrams, word searches
🔍 Critical thinking for grammar solutions  
🎯 Multiple puzzle types for variety
🧠 Creative problem-solving with grammar

GENERATION INSTRUCTIONS:
- Mix puzzle types: crosswords, anagrams, riddles
- Create grammar-focused clues and solutions
- Include difficulty ratings
- Focus on "${grammarText}" vocabulary and concepts
- Add time limits for challenge
- Make puzzles educational and fun

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Grammar Puzzles 🧩",
    "type": "grammar-puzzle-solver", 
    "questions": [
      {
        "id": 1,
        "question": "Solve this ${grammarText} puzzle:",
        "puzzleData": {
          "clues": ["Clue 1", "Clue 2", "Clue 3"],
          "puzzleType": "crossword",
          "solution": "SOLUTION",
          "difficulty": "medium",
          "timeLimit": 120
        },
        "explanation": "Explanation of the solution",
        "type": "grammar-puzzle-solver"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateRapidFireCorrectionsPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} RAPID FIRE CORRECTION questions about "${grammarText}" for quick error identification and fixing.

RAPID FIRE FORMAT:
🔥 Quick error spotting and correction
⚡ 15-second time limit per sentence
🎯 Streak system for consecutive correct fixes
✅ Immediate feedback with explanations

GENERATION INSTRUCTIONS:
- Include sentences with subtle "${grammarText}" errors
- Focus on common mistakes learners make
- Add streak bonuses for motivation
- Keep sentences short for quick analysis
- Include error type identification
- Provide quick fix solutions

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Rapid Fire Corrections 🔥",
    "type": "rapid-fire-corrections", 
    "questions": [
      {
        "id": 1,
        "question": "Quickly identify and correct the ${grammarText} error:",
        "rapidFireData": {
          "incorrectSentence": "Sentence with grammar error",
          "errorType": "Type of error",
          "timeLimit": 15,
          "quickFix": "Corrected sentence",
          "streak": 0
        },
        "explanation": "Explanation of the error and correction",
        "type": "rapid-fire-corrections"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateTenseTimelineGamePrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} TENSE TIMELINE GAME questions about "${grammarText}" for chronological event ordering.

TIMELINE FORMAT:
⏰ Arrange events/sentences in time order
📅 Past → Present → Future sequencing
🎯 Tense recognition and ordering
⚡ Time-based scoring system

GENERATION INSTRUCTIONS:
- Create events that need chronological ordering
- Focus on "${grammarText}" tense usage in timeline context
- Include clear time markers and tense clues
- Add mixed tense sentences for ordering challenge
- Include time limits for urgency
- Make events relatable and logical

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Timeline Master ⏰",
    "type": "tense-timeline-game", 
    "questions": [
      {
        "id": 1,
        "question": "Arrange these ${grammarText} events in chronological order:",
        "timelineData": {
          "events": [
            {
              "id": "event1",
              "event": "Event description",
              "correctTense": "Past Simple",
              "timeMarker": "yesterday",
              "position": 1
            }
          ],
          "timeLimit": 45
        },
        "explanation": "Explanation of the correct timeline",
        "type": "tense-timeline-game"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateGrammarCategorySortPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} GRAMMAR CATEGORY SORT questions about "${grammarText}" for classification practice.

CATEGORY SORT FORMAT:
📋 Sort words/phrases into correct categories
🗂️ Drag and drop classification system
🎯 Grammar knowledge organization  
⏱️ Time pressure for quick decisions

GENERATION INSTRUCTIONS:
- Create items that need sorting into categories
- Focus on "${grammarText}" classification concepts
- Include 3-4 categories per question
- Mix obvious and tricky items for challenge
- Add time limits for decision pressure
- Make categories clear and educational

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Category Sort 📋",
    "type": "grammar-category-sort", 
    "questions": [
      {
        "id": 1,
        "question": "Sort these ${grammarText} items into the correct categories:",
        "categorySortData": {
          "items": [
            {
              "id": "item1",
              "content": "Item to be sorted",
              "correctCategory": "Category name"
            }
          ],
          "categories": ["Category 1", "Category 2", "Category 3"],
          "timeLimit": 60
        },
        "explanation": "Explanation of the sorting logic",
        "type": "grammar-category-sort"
      }
    ]
  }
}

CREATE ORIGINAL CONTENT NOW:`;
};

const generateTrueFalseLightningPrompt = (
  baseInstruction: string,
  grammarText: string,
  numExercises: number,
  timeLimit: number = 10
): string => {
  return `${baseInstruction}

TASK: Create ${numExercises} TRUE/FALSE lightning game questions about "${grammarText}" where learners have 5 seconds to decide if sentences are grammatically correct.

LIGHTNING GAME FORMAT:
⚡ Sentence appears for 5 seconds
🚦 Learner clicks "True" (correct) or "False" (incorrect) 
⏰ Quick feedback with brief explanation
🎮 Fast-paced grammar practice game

GENERATION INSTRUCTIONS:
- Mix 50% correct and 50% incorrect sentences
- Make errors subtle but clear for the target level
- Include quick 1-sentence explanations
- Focus on common "${grammarText}" mistakes
- Keep sentences short for quick reading (max 15 words)
- IMPORTANT: Generate actual sentences in the "sentence" field, not question prompts

JSON Structure Required:
{
  "exercise": {
    "title": "${grammarText} - Lightning Game ⚡",
    "type": "true-false-lightning", 
    "questions": [
      {
        "id": 1,
        "question": "Grammar Lightning: TRUE or FALSE?",
        "lightningData": {
          "sentence": "She goes to school every day",
          "timeLimit": ${timeLimit},
          "correctness": true,
          "quickExplanation": "Correct: Present Simple uses 'goes' (3rd person singular) with 'she'"
        },
        "correct": 0,
        "explanation": "Present Simple: he/she/it + verb + s. 'She goes' is correct for regular actions.",
        "tip": "Present Simple tip: Add -s/-es to verbs with he/she/it subjects.",
        "tense": "${grammarText}",
        "type": "true-false-lightning"
      },
      {
        "id": 2, 
        "question": "Grammar Lightning: TRUE or FALSE?",
        "lightningData": {
          "sentence": "They goes to the park yesterday",
          "timeLimit": ${timeLimit},
          "correctness": false,
          "errorType": "Wrong verb form and tense mismatch",
          "quickExplanation": "False: Should be 'They went' (past tense) or 'They go' (present)"
        },
        "correct": 1,
        "explanation": "Two errors: 'goes' should be 'go' (they = plural), and 'yesterday' requires past tense 'went'",
        "tip": "Check subject-verb agreement AND time markers for tense consistency.",
        "tense": "${grammarText}",
        "type": "true-false-lightning"
      },
      {
        "id": 3,
        "question": "Grammar Lightning: TRUE or FALSE?", 
        "lightningData": {
          "sentence": "I am study English every morning",
          "timeLimit": ${timeLimit},
          "correctness": false,
          "errorType": "Wrong verb form - mixing present continuous with simple present",
          "quickExplanation": "False: Should be 'I study' (simple) OR 'I am studying' (continuous)"
        },
        "correct": 1,
        "explanation": "Cannot use 'am + base verb'. Use either 'I study' (habit) or 'I am studying' (now).",
        "tip": "Don't mix Present Simple and Present Continuous forms in one sentence.",
        "tense": "${grammarText}",
        "type": "true-false-lightning"
      }
        "type": "true-false-lightning"
      }
      // Generate ${numExercises} completely unique lightning questions
    ]
  }
}

ERROR TYPES TO INCLUDE:
- Subject-verb agreement (They goes → They go)
- Wrong tense with time markers (yesterday + present)
- Missing auxiliary verbs (He not go → He does not go)
- Incorrect negative forms (He don't go → He doesn't go) 
- Wrong question formation (Where he goes? → Where does he go?)
- Double negatives, wrong word order

SENTENCE TOPICS:
- Daily activities, family, school, work, hobbies
- Keep sentences simple and familiar
- Mix positive, negative, and question forms

CREATE ORIGINAL CONTENT NOW:`;
};

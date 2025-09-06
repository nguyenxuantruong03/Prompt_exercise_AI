import {
  Exercise,
  TypeExcercise,
  CEFRLevel,
  CertificateType,
} from "@/types/grammars/grammars_type";

// Grammar topics that can be tested
export const GRAMMAR_TOPICS = [
  "present simple",
  "present continuous",
  "present perfect",
  "present perfect continuous",
  "past simple",
  "past continuous",
  "past perfect",
  "past perfect continuous",
  "future simple",
  "future continuous",
  "future perfect",
  "future perfect continuous",
  "conditionals",
  "modals",
  "passive voice",
  "reported speech",
  "gerunds and infinitives",
  "articles",
  "prepositions",
  "adjectives and adverbs",
  "comparative and superlative",
  "relative clauses",
  "question forms",
  "quantifiers",
  "phrasal verbs",
  "collocations",
  "subject-verb agreement",
  "conjunctions",
  "determiners",
  "word order",
] as const;

export type GrammarTopic = (typeof GRAMMAR_TOPICS)[number];

// Exercise types that support backup
export const BACKUP_EXERCISE_TYPES: TypeExcercise[] = [
  "multiple-choice",
  "fill-in-blank",
  "sentence-completion",
  "error-correction",
  "reading-comprehension",
  "word-order",
  "matching",
  "cloze-test",
  "transformation",
  "sentence-building",
  "paraphrasing",
  "verb-conjugation",
  "punctuation",
  "word-formation",
  "sentence-combining",
  "dialogue-completion",
  "comparison-exercise",
  "context-matching",
  "passive-active-matching",
  "clause-combining",
  "multi-topic-integration",
  "form-conversion",
  "situational-grammar",
  "paragraph-tense-conversion",
  "grammar-generator",
  "true-false-lightning",
  "word-arrangement-race", // Added word arrangement race game
  "grammar-memory-match", // Added grammar memory match game
];

// Certificate types for targeted exercises
export const CERTIFICATE_TYPES: CertificateType[] = [
  "IELTS",
  "TOEIC",
  "PTE",
  "TOEFL",
  "Cambridge",
  "SAT",
  "VSTEP",
];

// CEFR levels
export const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

// Get backup exercise for specific parameters with modular structure
export function getBackupExercise(
  grammarTopic: string,
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  numQuestions: number = 5,
  certificateType?: CertificateType
): Exercise | null {
  try {
    console.log(
      `🔍 Looking for backup: ${grammarTopic} | ${exerciseType} | ${proficiencyLevel} | ${
        certificateType || "no cert"
      }`
    );

    // Try modular type-specific backups first (new system)
    const typeSpecificBackup = getTypeSpecificBackup(
      grammarTopic,
      exerciseType,
      proficiencyLevel,
      numQuestions,
      certificateType
    );

    if (typeSpecificBackup) {
      console.log("✅ Using type-specific modular backup exercise");
      return typeSpecificBackup;
    }

    // Try comprehensive backups next (existing system)
    const { getComprehensiveBackup } = require("./comprehensive-backups");
    const comprehensiveBackup = getComprehensiveBackup(
      grammarTopic,
      exerciseType,
      proficiencyLevel,
      numQuestions,
      certificateType
    );

    if (comprehensiveBackup) {
      console.log("✅ Using comprehensive backup exercise");
      return comprehensiveBackup;
    }

    // Try specific backups next (includes certificate-specific)
    const { getSpecificBackupExercise } = require("./specific-backups");
    const specificBackup = getSpecificBackupExercise(
      grammarTopic,
      exerciseType,
      proficiencyLevel,
      certificateType,
      numQuestions
    );

    if (specificBackup) {
      console.log("📚 Using specific backup exercise");
      return specificBackup;
    }

    // Fallback to generic backup
    console.log("📝 Using generic backup exercise");
    return getGenericBackupExercise(
      exerciseType,
      proficiencyLevel,
      grammarTopic,
      numQuestions
    );
  } catch (error) {
    console.error("Error getting backup exercise:", error);
    return getGenericBackupExercise(
      exerciseType,
      proficiencyLevel,
      grammarTopic,
      numQuestions
    );
  }
}

// New modular type-specific backup function
function getTypeSpecificBackup(
  grammarTopic: string,
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  numQuestions: number,
  certificateType?: CertificateType
): Exercise | null {
  try {
    const normalizedTopic = normalizeGrammarTopic(grammarTopic);

    // Dynamic imports for each exercise type
    switch (exerciseType) {
      case "multiple-choice": {
        const { getMultipleChoiceBackup } = require("./types/multiple-choice");
        const questions = getMultipleChoiceBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "fill-in-blank": {
        const { getFillInBlankBackup } = require("./types/fill-in-blank");
        const questions = getFillInBlankBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "true-false-lightning": {
        const {
          getTrueFalseLightningBackup,
        } = require("./types/true-false-lightning");
        const questions = getTrueFalseLightningBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "error-correction": {
        const {
          getErrorCorrectionBackup,
        } = require("./types/error-correction");
        const questions = getErrorCorrectionBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "reading-comprehension": {
        const {
          getReadingComprehensionBackup,
        } = require("./types/reading-comprehension");
        const questions = getReadingComprehensionBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "word-order": {
        const { getWordOrderBackup } = require("./types/word-order");
        const questions = getWordOrderBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "matching": {
        const { getMatchingBackup } = require("./types/matching");
        const questions = getMatchingBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "cloze-test": {
        const { getClozeTestBackup } = require("./types/cloze-test");
        const questions = getClozeTestBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "transformation": {
        const { getTransformationBackup } = require("./types/transformation");
        const questions = getTransformationBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "sentence-building": {
        const {
          getSentenceBuildingBackup,
        } = require("./types/sentence-building");
        const questions = getSentenceBuildingBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "paraphrasing": {
        const { getParaphrasingBackup } = require("./types/paraphrasing");
        const questions = getParaphrasingBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "verb-conjugation": {
        const {
          getVerbConjugationBackup,
        } = require("./types/verb-conjugation");
        const questions = getVerbConjugationBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "dialogue-completion": {
        const {
          getDialogueCompletionBackup,
        } = require("./types/dialogue-completion");
        const questions = getDialogueCompletionBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "multi-topic-integration": {
        const {
          getMultiTopicIntegrationBackup,
        } = require("./types/multi-topic-integration");
        const questions = getMultiTopicIntegrationBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "sentence-combining": {
        const {
          getSentenceCombiningBackup,
        } = require("./types/sentence-combining");
        const questions = getSentenceCombiningBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      case "word-formation": {
        const { getWordFormationBackup } = require("./types/word-formation");
        const questions = getWordFormationBackup(
          normalizedTopic,
          proficiencyLevel,
          certificateType,
          numQuestions
        );
        if (questions && questions.length > 0) {
          return createExerciseFromQuestions(
            questions,
            exerciseType,
            normalizedTopic,
            proficiencyLevel,
            certificateType
          );
        }
        break;
      }

      default:
        // Exercise type not yet implemented in modular system
        return null;
    }

    return null;
  } catch (error) {
    console.error("Error in type-specific backup:", error);
    return null;
  }
}

// Helper function to create Exercise from Questions
function createExerciseFromQuestions(
  questions: any[],
  exerciseType: TypeExcercise,
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType
): Exercise {
  return {
    title: `${
      grammarTopic.charAt(0).toUpperCase() + grammarTopic.slice(1)
    } - ${exerciseType
      .replace("-", " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())}`,
    questions,
    type: exerciseType,
  };
}

// Helper function to get instructions based on exercise type
function getInstructionsForType(exerciseType: TypeExcercise): string {
  const instructionMap: Record<TypeExcercise, string> = {
    "multiple-choice": "Choose the correct answer from the options provided.",
    "fill-in-blank": "Fill in the blanks with the correct words or phrases.",
    "sentence-completion":
      "Complete the sentences with appropriate words or phrases.",
    "true-false-lightning":
      "Decide quickly if each sentence is correct (True) or incorrect (False). You have limited time for each question!",
    "error-correction":
      "Find and correct the grammatical errors in the sentences.",
    "reading-comprehension":
      "Read the text carefully and answer the questions based on what you read.",
    "word-order":
      "Put the words in the correct order to make grammatically correct sentences.",
    matching: "Match the items from the two columns correctly.",
    "cloze-test": "Complete the text by filling in the missing words.",
    transformation:
      "Transform the sentences according to the given instructions.",
    "gap-fill-listening": "Listen to the audio and fill in the missing words.",
    "sentence-building":
      "Build correct sentences using the given words or phrases.",
    "grammar-correction":
      "Identify and correct the grammatical mistakes in the sentences.",
    paraphrasing:
      "Rewrite the sentences with the same meaning using different words.",
    "verb-conjugation": "Conjugate the verbs in the correct form.",
    punctuation: "Add the correct punctuation marks to the sentences.",
    "word-formation": "Form the correct words from the given base words.",
    "sentence-combining": "Combine the sentences using appropriate connectors.",
    "dialogue-completion": "Complete the dialogue with appropriate responses.",
    "comparison-exercise": "Complete the comparative and superlative forms.",
    "context-matching":
      "Match the sentences or phrases to their appropriate contexts.",
    "passive-active-matching":
      "Match active sentences with their passive voice equivalents.",
    "clause-combining": "Combine the clauses to form complex sentences.",
    "multi-topic-integration":
      "Complete exercises covering multiple grammar topics.",
    "form-conversion": "Convert between different grammatical forms.",
    "situational-grammar": "Use appropriate grammar for different situations.",
    "paragraph-tense-conversion":
      "Convert the paragraph to the specified tense.",
    "grammar-generator":
      "Generate sentences following the given grammar patterns.",
    "speed-challenge":
      "Answer questions quickly within the time limit for maximum points!",
    "word-arrangement-race":
      "Drag and drop words to arrange them in the correct order to form sentences.",
    "grammar-memory-match":
      "Match grammar rules with their examples by flipping cards and remembering their positions.",
    "image-grammar-quiz":
      "Answer grammar questions based on the images shown. Analyze the visual context carefully.",
    "grammar-puzzle-solver":
      "Solve grammar puzzles including crosswords, anagrams, and word searches.",
    "rapid-fire-corrections":
      "Quickly identify and correct grammar errors in rapid succession.",
    "tense-timeline-game":
      "Arrange events and sentences in chronological order based on their tenses.",
    "grammar-category-sort":
      "Sort words and phrases into their correct grammar categories.",
  };

  return instructionMap[exerciseType];
}

// Normalize grammar topic names
function normalizeGrammarTopic(topic: string): GrammarTopic {
  const normalized = topic.toLowerCase().trim();

  // Map common variations to standard topics
  const topicMappings: { [key: string]: GrammarTopic } = {
    present: "present simple",
    past: "past simple",
    future: "future simple",
    perfect: "present perfect",
    continuous: "present continuous",
    progressive: "present continuous",
    "simple present": "present simple",
    "simple past": "past simple",
    "simple future": "future simple",
    "present perfect progressive": "present perfect continuous",
    "past perfect progressive": "past perfect continuous",
    "future perfect progressive": "future perfect continuous",
    "modal verbs": "modals",
    "modal auxiliaries": "modals",
    "can could": "modals",
    "will would": "modals",
    passive: "passive voice",
    "indirect speech": "reported speech",
    gerund: "gerunds and infinitives",
    infinitive: "gerunds and infinitives",
    "a an the": "articles",
    "definite indefinite": "articles",
    "in on at": "prepositions",
    "adjective adverb": "adjectives and adverbs",
    comparison: "comparative and superlative",
    "relative clause": "relative clauses",
    "who which that": "relative clauses",
    questions: "question forms",
    "wh questions": "question forms",
    "yes no questions": "question forms",
    "some any": "quantifiers",
    "much many": "quantifiers",
    "phrasal verb": "phrasal verbs",
    "verb phrases": "phrasal verbs",
    "word combinations": "collocations",
    "subject verb": "subject-verb agreement",
    "and but or": "conjunctions",
    connectors: "conjunctions",
    "this that these": "determiners",
    "word position": "word order",
    "sentence structure": "word order",
  };

  // Check for exact match first
  if (GRAMMAR_TOPICS.includes(normalized as GrammarTopic)) {
    return normalized as GrammarTopic;
  }

  // Check mappings
  for (const [key, value] of Object.entries(topicMappings)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }

  // Default fallback
  return "present simple";
}

// Get backup function for specific parameters
function getBackupFunction(
  topic: GrammarTopic,
  exerciseType: TypeExcercise,
  level: CEFRLevel
): ((numQuestions: number, certificate?: CertificateType) => Exercise) | null {
  try {
    // Dynamic import would go here in a real implementation
    // For now, we'll return null and fall back to generic
    return null;
  } catch {
    return null;
  }
}

// Generic backup exercise generator
function getGenericBackupExercise(
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  numQuestions: number
): Exercise {
  // Import generic backup exercises
  const { generateGenericExercise } = require("./generic-backup");

  return generateGenericExercise(
    exerciseType,
    proficiencyLevel,
    grammarTopic,
    numQuestions
  );
}

export default getBackupExercise;

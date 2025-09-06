export interface Question {
  id: number;
  question: string;
  options?: string[]; // For multiple choice
  correct: number | string | string[]; // Can be index, string, or array for multiple answers
  explanation: string;
  tip?: string; // Detailed grammar tip explaining WHY this answer is correct
  tense?: string; // The specific tense this question focuses on
  type: TypeExcercise;
  passage?: string; // For reading comprehension
  incorrectText?: string; // For error correction
  words?: string[]; // For word order exercises
  pairs?: { left: string; right: string }[]; // For matching exercises
  // For comparison exercises
  comparisonStructures?: {
    structure1: string;
    structure2: string;
    examples: {
      structure1Example: string;
      structure2Example: string;
    };
  };
  // For context-matching exercises
  context?: {
    situation: string; // The real-world context/scenario
    timeframe: string; // When this situation occurs (past, present, future, etc.)
    formality: "formal" | "informal" | "neutral"; // Level of formality required
    purpose: string; // What the speaker is trying to achieve
    grammarChoices: Array<{
      structure: string;
      appropriateness: "perfect" | "acceptable" | "inappropriate";
      reason: string;
    }>;
  };
  // For passive-active matching exercises
  voicePairs?: Array<{
    active: string;
    passive: string;
    tense: string;
  }>;
  // For clause combining exercises
  clauses?: Array<{
    mainClause: string;
    subordinateClause: string;
    connector: string;
    combinedSentence: string;
  }>;
  // For multi-topic integration exercises
  grammarTopics?: string[]; // Array of grammar topics being tested
  topicWeights?: { [topic: string]: number }; // Relative importance of each topic in the question
  // For form conversion exercises
  originalSentence?: string; // The base sentence to be converted
  targetForm?: "question" | "command" | "exclamation"; // What form to convert to
  conversionSteps?: string[]; // Step-by-step explanation of the conversion
  // For situational grammar exercises
  situation?: {
    context: string; // e.g., "Job interview", "Telling a story", "Writing an email"
    scenario: string; // Detailed description of the situation
    appropriateGrammar: string[]; // Which grammar structures are most appropriate
    inappropriateGrammar: string[]; // Which structures should be avoided
    formalityLevel: "formal" | "informal" | "neutral";
    tips: string[]; // Specific tips for this situation
  };
  // For paragraph tense conversion exercises
  originalParagraph?: string; // The paragraph in original tense
  sourceTense?: string; // Original tense (e.g., "Present Simple")
  targetTense?: string; // Target tense to convert to (e.g., "Past Perfect")
  convertedParagraph?: string; // The correct conversion
  conversionRules?: string[]; // Rules applied during conversion
  // For grammar generator exercises
  generatorData?: {
    vocabulary: string[]; // Input vocabulary words
    grammarRule: string; // Selected grammar rule/tense
    generatedSentences: string[]; // AI-generated sentences using the vocabulary
    task: "generate" | "evaluate" | "modify"; // What the learner needs to do
  };
  // For true-false lightning exercises
  lightningData?: {
    sentence: string; // The sentence to evaluate
    timeLimit: number; // Time limit in seconds (typically 5)
    correctness: boolean; // Whether the sentence is grammatically correct
    errorType?: string; // Type of error if sentence is incorrect
    quickExplanation: string; // Brief explanation for the answer
  };

  // For speed challenge exercises
  speedChallengeData?: {
    timeLimit: number; // Time limit for the question in seconds
    points: number; // Points awarded for correct answer
    difficulty: "easy" | "medium" | "hard";
    bonusTime?: number; // Extra time awarded for quick answers
  };

  // For word arrangement race exercises
  wordArrangementData?: {
    scrambledWords: string[]; // Words in wrong order
    correctOrder: string[]; // Words in correct order
    timeLimit: number; // Time limit to arrange words
    hints?: string[]; // Optional hints for word order
  };

  // For grammar memory match exercises
  memoryMatchData?: {
    pairs: Array<{
      id: string;
      type: "rule" | "example" | "term" | "definition";
      content: string;
      matchId: string; // ID of the matching pair
    }>;
    timeLimit?: number;
  };

  // For image grammar quiz exercises
  imageGrammarData?: {
    imageUrl?: string; // Generated image URL
    imagePrompt: string; // Prompt used to generate the image
    imageDescription: string; // Description of what's in the image
    grammarFocus: string; // What grammar point the image is testing
    alternatives?: string[]; // Alternative descriptions/answers
  };

  // For grammar puzzle exercises
  puzzleData?: {
    clues: string[]; // Clues to solve the puzzle
    puzzleType: "crossword" | "word-search" | "anagram" | "riddle";
    solution: string | string[]; // Solution to the puzzle
    difficulty: "easy" | "medium" | "hard";
    timeLimit?: number;
  };

  // For rapid fire correction exercises
  rapidFireData?: {
    incorrectSentence: string; // Sentence with error
    errorType: string; // Type of grammar error
    timeLimit: number; // Time to identify and correct
    quickFix: string; // The corrected version
    streak?: number; // Current streak count
  };

  // For tense timeline game
  timelineData?: {
    events: Array<{
      id: string;
      event: string;
      correctTense: string;
      timeMarker: string; // "past", "present", "future", etc.
      position: number; // Correct position in timeline
    }>;
    timeLimit?: number;
  };

  // For grammar category sort
  categorySortData?: {
    items: Array<{
      id: string;
      content: string;
      correctCategory: string;
    }>;
    categories: string[]; // Available categories
    timeLimit?: number;
  };
}

export interface Exercise {
  title: string;
  questions: Question[];
  type: TypeExcercise;
}

export type TypeExcercise =
  | "multiple-choice"
  | "fill-in-blank"
  | "sentence-completion"
  | "error-correction"
  | "reading-comprehension"
  | "word-order"
  | "matching"
  | "cloze-test"
  | "transformation"
  | "gap-fill-listening"
  | "sentence-building"
  | "grammar-correction"
  | "paraphrasing"
  | "verb-conjugation"
  | "punctuation"
  | "word-formation"
  | "sentence-combining"
  | "dialogue-completion"
  | "comparison-exercise"
  | "context-matching" // Context-based grammar matching
  | "passive-active-matching" // Drag and match active-passive sentences
  | "clause-combining" // Drag and combine sentence clauses
  | "multi-topic-integration" // Exercises combining 2-3 grammar topics
  | "form-conversion" // Convert normal sentences to questions/commands/exclamations
  | "situational-grammar" // Grammar practice for specific real-world situations
  | "paragraph-tense-conversion" // Change entire paragraph from one tense to another
  | "grammar-generator" // Generate sentences from vocabulary and grammar
  | "true-false-lightning" // True or False lightning game
  | "speed-challenge" // Answer questions quickly in limited time
  | "word-arrangement-race" // Arrange words into correct sentence order quickly
  | "grammar-memory-match" // Memory matching game with grammar rules
  | "image-grammar-quiz" // Grammar questions based on generated images
  | "grammar-puzzle-solver" // Solve grammar puzzles with clues
  | "rapid-fire-corrections" // Quickly identify and correct grammar errors
  | "tense-timeline-game" // Arrange events/sentences in chronological order
  | "grammar-category-sort"; // Sort words/phrases into correct grammar categories

export interface GrammarError {
  original: string;
  corrected: string;
  explanation: string;
}

export interface FixResponse {
  corrected: string;
  errors: GrammarError[];
}

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

// Certificate types for targeted exercise generation
export type CertificateType =
  | "IELTS"
  | "TOEIC"
  | "PTE"
  | "TOEFL"
  | "Cambridge"
  | "SAT"
  | "VSTEP";

// New interfaces for mistake tracking and analytics
export interface MistakeRecord {
  id: string;
  timestamp: Date;
  question: string;
  userAnswer: string | number | string[];
  correctAnswer: string | number | string[]; // Updated to match Question.correct type
  tense?: string;
  exerciseType: TypeExcercise;
  proficiencyLevel: CEFRLevel;
  grammarTopic: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface MistakeAnalytics {
  totalMistakes: number;
  mistakesByTense: { [tense: string]: number };
  mistakesByExerciseType: { [type: string]: number };
  mistakesByLevel: { [level: string]: number };
  mistakesByTopic: { [topic: string]: number };
  mistakesByDifficulty: { [difficulty: string]: number };
  averageAccuracy: number;
  recentMistakes: MistakeRecord[];
  improvementTrends: {
    date: string;
    accuracy: number;
    totalQuestions: number;
  }[];
  weakestAreas: {
    area: string;
    count: number;
    percentage: number;
    lastOccurrence: Date;
  }[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[]; // Allow both single string and array
    borderColor?: string | string[]; // Allow both single string and array
    borderWidth?: number;
  }[];
}

// Type for Simple Past exercises
export interface SimplePastExercise extends Exercise {
  tense: "Simple Past";
  level: CEFRLevel;
  focus: "formation" | "usage" | "recognition" | "contrast" | "advanced";
}

// Type for Simple Past question
export interface SimplePastQuestion extends Question {
  tense: "Simple Past";
  verbType?: "regular" | "irregular";
  pronunciationGuide: {
    auxiliaryStress: {
      examples: string[];
      stressPatterns: string[];
      contractions: {
        positive: string[];
        negative: string[];
      };
    };
    pastParticiple: {
      regularEndings: Array<{
        sound: string;
        after: string[];
        examples: string[];
      }>;
      irregularPatterns: Array<{
        pattern: string;
        examples: string[];
      }>;
    };
    intonationPatterns: string[];
  };
  notes: string[];
  theory: {
    usageOverview: string[];
    structure: {
      affirmative: {
        form: string;
        description: string;
        examples: string[];
        morphology: string;
        syntax: string;
      };
      negative: {
        form: string;
        description: string;
        examples: string[];
        morphology: string;
        syntax: string;
      };
      question: {
        form: string;
        description: string;
        examples: string[];
        morphology: string;
        syntax: string;
      };
    };
    linguisticAnalysis: {
      morphosyntax: string;
      semantics: string;
      pragmatics: string;
      phonology: string;
      discourse: string;
    };
  };
  advancedApplications: {
    academic: string;
    business: string;
    journalism: string;
    legal: string;
    diplomatic: string;
    technical: string;
  };
  assessmentFramework: {
    diagnosticTools: string[];
    rubricCriteria: {
      accuracy: string;
      appropriateness: string;
      complexity: string;
      fluency: string;
    };
    progressionMarkers: string[];
  };
  practiceActivities: {
    [level in CEFRLevel]: string[];
  };
  researchBasedInsights: {
    acquisitionStudies: string[];
    pedagogicalRecommendations: string[];
    neurolinguisticFindings: string[];
  };
}

export interface UserSocerType {
  correct: number;
  total: number;
  percentage: number;
  weakAreas: string[];
  estimatedScores: {
    ielts: number;
    toefl: number;
    toeic: number;
    cambridge: string;
    vstep: number;
  };
  feedback: string;
  recommendations: string[];
}

export interface MiniExerciseSuggestionType {
  shouldSuggest: boolean;
  mistakeCount: number;
  suggestion: {
    title: string;
    description: string;
    exercises: Array<{
      type: string;
      description: string;
      example: string;
    }>;
    tips: string[];
    estimatedTime: string;
  } | null;
}

// Enhanced interface for mini exercise suggestions with more detailed structure
export interface DetailedMiniExerciseSuggestion {
  title: string;
  description: string;
  exercises: Array<{
    type: string;
    description: string;
    example: string;
  }>;
  tips: string[];
  estimatedTime: string;
}

// Interface for practice recommendations
export interface PracticeRecommendations {
  urgentTopics: Array<{
    topic: string;
    mistakeCount: number;
    priority: "high" | "medium" | "low";
    suggestion: DetailedMiniExerciseSuggestion;
  }>;
  summary: string;
}

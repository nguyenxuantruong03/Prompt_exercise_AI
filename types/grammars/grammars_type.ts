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
  | "dialogue-completion"; // Add all supported exercise types

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

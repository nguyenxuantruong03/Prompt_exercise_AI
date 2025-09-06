// Grammar exercise types and interfaces

export type ExerciseType =
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
  | "sentence-combining"
  | "comparison-exercise"
  | "context-matching"
  | "passive-active-matching"
  | "clause-combining"
  | "multi-topic-integration"
  | "form-conversion"
  | "situational-grammar"
  | "paragraph-tense-conversion"
  | "grammar-generator"
  | "true-false-lightning"
  | "speed-challenge"
  | "word-arrangement-race"
  | "grammar-memory-match"
  | "image-grammar-quiz"
  | "grammar-puzzle-solver"
  | "rapid-fire-corrections"
  | "tense-timeline-game"
  | "grammar-category-sort";

export type ProficiencyLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type CertificateType =
  | "IELTS"
  | "TOEIC"
  | "PTE"
  | "TOEFL"
  | "Cambridge"
  | "SAT"
  | "VSTEP";

export type ActionType = "generate" | "analyze_performance";

export interface IncorrectQuestion {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  tense?: string;
  type?: string;
  explanation: string;
}

export interface ScoreData {
  correct: number;
  total: number;
  percentage: number;
  grammarTopic: string;
  exerciseType: string;
  proficiencyLevel: string;
  incorrectQuestions: IncorrectQuestion[];
}

export interface AIQuestionResponse {
  question?: string;
  text?: string;
  prompt?: string;
  sentence?: string;
  sentence1?: string;
  sentence2?: string;
  sentence3?: string;
  sentence4?: string;
  stem?: string;
  passage?: string;
  context?: string;
  instructions?: string;
  options?: string[];
  correct?: number | string;
  explanation?: string;
  tip?: string;
  tense?: string;
  incorrectText?: string;
  words?: string[];
  pairs?: Array<{ left: string; right: string }>;
  // New fields for new exercise types
  voicePairs?: Array<{
    active: string;
    passive: string;
    tense: string;
  }>;
  clauses?: Array<{
    mainClause: string;
    subordinateClause: string;
    connector: string;
    combinedSentence: string;
  }>;
  grammarTopics?: string[];
  topicWeights?: { [topic: string]: number };
  // For grammar generator exercises
  vocabulary?: string[];
  grammarRule?: string;
  generatedSentences?: string[];
  task?: "generate" | "evaluate" | "modify";
  // For true-false lightning exercises
  lightningSentence?: string;
  timeLimit?: number;
  correctness?: boolean;
  errorType?: string;
  quickExplanation?: string;
  // Lightning data as nested object (the way AI returns it)
  lightningData?: {
    sentence: string;
    timeLimit: number;
    correctness: boolean;
    errorType?: string;
    quickExplanation?: string;
  };
  // For word arrangement race exercises
  wordArrangementData?: {
    scrambledWords: string[];
    correctOrder: string[];
    timeLimit: number;
    hints: string[];
  };
  // For grammar memory match exercises
  memoryMatchData?: {
    pairs: Array<{
      id: string;
      type: "rule" | "example";
      content: string;
      matchId: string;
    }>;
    timeLimit: number;
  };
}

export interface RequestBody {
  sentence2?: string;
  sentence3?: string;
  sentence4?: string;
  stem?: string;
  passage?: string;
  context?: string;
  instructions?: string;
  options?: string[];
  correct?: number | string;
  explanation?: string;
  tip?: string;
  tense?: string;
  incorrectText?: string;
  words?: string[];
  pairs?: Array<{ left: string; right: string }>;
  text?: string;
  action: ActionType;
  exerciseType?: ExerciseType;
  proficiencyLevel?: ProficiencyLevel;
  certificateType?: CertificateType;
  numExercises?: number;
  provider?: string;
  scoreData?: ScoreData;
  detailedAnalysis?: boolean;
  lightningTimeLimit?: number;
}

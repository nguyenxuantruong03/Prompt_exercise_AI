export interface IdiomaticLanguageType {
  definition: string;
  purpose: string[];
  levels: {
    A1: IdiomaticLevel;
    A2: IdiomaticLevel;
    B1: IdiomaticLevel;
    B2: IdiomaticLevel;
    C1: IdiomaticLevel;
    C2: IdiomaticLevel;
  };
  types: {
    [key: string]: string[];
  };
  examples: IdiomaticExample[];
  recognitionTips: string[];
  commonErrors: string[];
  ieltsTips: {
    "Band7+": string;
    AvoidCliché: string;
    Practice: string;
  };
  learningResources: LearningResource[];
  culturalContext: CulturalContext;
  difficultyProgression: DifficultyProgression;
}

export interface IdiomaticLevel {
  description: string;
  examples: IdiomaticExample[];
  learningTips: string[];
  vocabularyFocus: string[];
  culturalNotes: string[];
  practiceScenarios: string[];
  commonMistakes: string[];
  assessmentCriteria: string[];
  recommendedStudyTime: string;
  prerequisites: string[];
  nextLevelPreparation: string[];
}

export interface IdiomaticExample {
  idiom: string;
  meaning: string;
  example: string;
  context?: string;
  literal?: string;
  usageNotes?: string;
  formality?: "formal" | "informal" | "neutral";
  region?: string[];
  difficulty?: number;
}

export interface LearningResource {
  type: "book" | "website" | "video" | "app" | "course";
  title: string;
  author?: string;
  url?: string;
  description: string;
  level: string[];
  cost?: string;
  rating?: number;
  keyFeatures: string[];
}

export interface CulturalContext {
  americanIdioms: string[];
  britishIdioms: string[];
  australianIdioms: string[];
  canadianIdioms: string[];
  historicalOrigins: {
    [idiom: string]: string;
  };
  modernUsage: {
    [idiom: string]: string;
  };
}

export interface DifficultyProgression {
  beginner: {
    focus: string[];
    timeToMaster: string;
    practiceMethods: string[];
  };
  intermediate: {
    focus: string[];
    timeToMaster: string;
    practiceMethods: string[];
  };
  advanced: {
    focus: string[];
    timeToMaster: string;
    practiceMethods: string[];
  };
}

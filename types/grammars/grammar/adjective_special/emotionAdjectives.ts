export interface EmotionAdjectivePair {
  feeling: string;
  causing: string;
}

export interface StructurePattern {
  structure: string;
  meaning: string;
  example: string;
  level?: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
  explanation: string;
  level?: string;
}

export interface LevelDefinition {
  level: string;
  description: string;
  keyFeatures: string[];
  adjectives: string[];
  examples: string[];
  focusAreas: string[];
}

export interface Reference {
  title: string;
  author?: string;
  publisher?: string;
  url?: string;
  type: "book" | "website" | "academic" | "dictionary";
  relevantChapters?: string[];
}

export interface EmotionCategory {
  [key: string]: string[];
}

export interface QuizItem {
  question: string;
  options: string[];
  answer: string;
  level?: string;
  explanation?: string;
}

export interface ExtraExample {
  sentence: string;
  type: "causing" | "feeling";
  level?: string;
  context?: string;
}

export interface IdomaticUsage {
  idiom: string;
  meaning: string;
  type: "feeling" | "causing";
  level?: string;
  context?: string;
}

export interface RarePattern {
  structure: string;
  example: string;
  level?: string;
  usage?: string;
}

export interface ComparativeUsage {
  structure: string;
  example: string;
  level?: string;
  context?: string;
}

export interface EmotionChain {
  sentence: string;
  explanation: string;
  level?: string;
}

export interface AcademicAnalysis {
  explanation: string;
  example: string;
  linguisticTerms?: string[];
  references?: string[];
}

export interface SuffixException {
  suffix: string;
  note: string;
  pairs: EmotionAdjectivePair[];
}

export interface ErrorPattern {
  error: string;
  correction: string;
  explanation: string;
  level?: string;
  frequency?: "common" | "occasional" | "rare";
}

export interface Collocation {
  adj: string;
  collocatesWith: string[];
  level?: string;
}

export interface emotionAdjectivesType {
  category: string;
  topic: string;
  levels: string[];
  description: string;
  structurePatterns: StructurePattern[];
  levelDefinitions: LevelDefinition[];
  emotion_Adjectives_vocab: {
    positive: string[];
    negative: string[];
    neutral_or_contextual: string[];
    ce_fr_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
    emotion_categories: EmotionCategory;
  };
  adjectivePairs: EmotionAdjectivePair[];
  advancedPairs: EmotionAdjectivePair[];
  advancedEmotionPairs: EmotionAdjectivePair[];
  notes: {
    ed: string;
    ing: string;
  };
  usageTypes: string[];
  commonMistakes: CommonMistake[];
  grammarTips: string[];
  recognitionPatterns: {
    feeling: string;
    causing: string;
  };
  quizzes: QuizItem[];
  extraExamples: ExtraExample[];
  learningTips: string[];
  references: Reference[];
  idiomaticUsage: IdomaticUsage[];
  rarePatterns: RarePattern[];
  comparativeUsage: ComparativeUsage[];
  emotionChains: EmotionChain[];
  academicAnalysis: AcademicAnalysis;
  suffixExceptions: SuffixException[];
  errorPatterns: ErrorPattern[];
  speakingTips: string[];
  writingTips: string[];
  collocations: Collocation[];
  referencePhrases: string[];
  detailedLevelBreakdown: {
    A1: {
      coreAdjectives: string[];
      basicPatterns: string[];
      essentialConcepts: string[];
      practiceActivities: string[];
    };
    A2: {
      expandedVocabulary: string[];
      introductoryPairs: EmotionAdjectivePair[];
      basicDistinctions: string[];
      commonSituations: string[];
    };
    B1: {
      intermediateAdjectives: string[];
      patternRecognition: string[];
      contextualUsage: string[];
      communicativeActivities: string[];
    };
    B2: {
      advancedVocabulary: string[];
      nuancedDistinctions: string[];
      complexPatterns: string[];
      academicUsage: string[];
    };
    C1: {
      sophisticatedAdjectives: string[];
      subtleDistinctions: string[];
      advancedPatterns: string[];
      professionalUsage: string[];
    };
    C2: {
      masterLevelAdjectives: string[];
      expertUsage: string[];
      linguisticAwareness: string[];
      nativelikeExpressions: string[];
    };
  };
}

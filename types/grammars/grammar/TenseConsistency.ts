export interface TensePatternBlock {
  concept: string;
  patterns: string[];
  examples: string[];
}

export interface TenseConsistencyLevelA1 {
  definition: string;
  basicPresentConsistency: TensePatternBlock;
  basicPastConsistency: Omit<TensePatternBlock, "exercises">;
}

export interface TenseConsistencyLevelA2 {
  definition: string;
  compoundSentenceConsistency: TensePatternBlock;
  basicTenseShifts: TensePatternBlock;
}

export interface TensePatternBlock {
  concept: string;
  patterns: string[];
  examples: string[];
}

export interface TenseConsistencyLevelB1 {
  definition: string;
  perfectTenseConsistency: TensePatternBlock;
  reportedSpeechConsistency: TensePatternBlock;
}

export interface TenseConsistencyLevelB2 {
  definition: string;
  complexSentenceConsistency: TensePatternBlock;
  conditionalConsistency: TensePatternBlock;
}

export interface TenseConsistencyLevelC1 {
  definition: string;
  academicConsistency: TensePatternBlock;
  sophisticatedTenseShifts: TensePatternBlock;
}

export interface TenseConsistencyLevelC2 {
  definition: string;
  literaryConsistency: TensePatternBlock;
  specializedConsistency: TensePatternBlock;
}

export interface TenseConsistencyOverview {
  definition: string;
  importance: string[];
  basicRules: {
    sameTimeActions: string;
    sequenceOfEvents: string;
    shiftingTenses: string;
  };
  examples: {
    correct: string[];
    incorrect: string[];
  };
  commonSituations: {
    reportedSpeech: string;
    conditionalSentences: string;
    narrative: string;
  };
  tips: string[];
  commonErrors: string[];
}

export interface TensePatternGroup {
  pattern: string;
  examples: string[];
}

export interface AdvancedTenseConsistencyPatterns {
  concept: string;
  embeddedClauseConsistency: TensePatternGroup;
  temporalSequenceConsistency: TensePatternGroup;
  conditionalSequenceConsistency: TensePatternGroup;
  narrativeConsistency: TensePatternGroup;
}

export interface TenseCollocationGroup {
  pattern: string;
  examples: string[];
}

export interface TenseConsistencyCollocations {
  concept: string;
  verbCollocations: TenseCollocationGroup;
  conjunctionCollocations: TenseCollocationGroup;
  formalCollocations: TenseCollocationGroup;
}

export interface TenseGenreUsageGroup {
  characteristics: string;
  examples: string[];
}

export interface TenseConsistencyGenreUsage {
  concept: string;
  formalWriting: TenseGenreUsageGroup;
  informalWriting: TenseGenreUsageGroup;
  academicWriting: TenseGenreUsageGroup;
  creativeWriting: TenseGenreUsageGroup;
}

export interface TenseRegisterGroup {
  characteristics: string;
  examples: string[];
}

export interface TensePatternGroup {
  pattern: string;
  examples: string[];
}

export interface TenseConsistencyFrequencyAndRegister {
  concept: string;
  highFrequencyPatterns: TensePatternGroup;
  formalRegister: TenseRegisterGroup;
  informalRegister: TenseRegisterGroup;
  technicalRegister: TenseRegisterGroup;
}

export type TenseConsistencyAssessment = {
  concept: string;
  assessmentCriteria: {
    accuracy: string;
    appropriateness: string;
    register: string;
    fluency: string;
  };
  evaluationMethods: {
    writtenTests: string;
    speakingTests: string;
    authenticTasks: string;
  };
  proficiencyLevels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
};

export type TenseLearningStrategy = {
  strategy: string;
  techniques: string[];
};

export type TenseConsistencyLearningStrategies = {
  concept: string;
  recognitionStrategies: TenseLearningStrategy;
  practiceStrategies: TenseLearningStrategy;
  memoryStrategies: TenseLearningStrategy;
  applicationStrategies: TenseLearningStrategy;
};

export type StandardizedTestType =
  | "TOEFL"
  | "IELTS"
  | "Cambridge"
  | "TOEIC";

export type TestItemType =
  | "multipleChoice"
  | "sentenceCompletion"
  | "errorIdentification"
  | "textEditing";

export type TestStrategyType =
  | "patternRecognition"
  | "contextAnalysis"
  | "registerAwareness";

export type TenseConsistencyInTests = {
  concept: string;
  testTypes: Record<StandardizedTestType, string>;
  commonTestItems: Record<TestItemType, string>;
  testStrategies: Record<TestStrategyType, string>;
};

export type TenseMistakeDetail = {
  error: string;
  example: string;
  correction: string;
  explanation: string;
};

export type CommonTenseConsistencyMistakes = {
  concept: string;
  mistakeTypes: {
    mixedTenses: TenseMistakeDetail;
    wrongBackshift: TenseMistakeDetail;
    inconsistentConditionals: TenseMistakeDetail;
    wrongSequence: TenseMistakeDetail;
    inappropriateShifts: TenseMistakeDetail;
  };
  preventionStrategies: {
    tensePractice: string;
    contextPractice: string;
    registerPractice: string;
    patternPractice: string;
  };
};

// Type for individual reference
interface Reference {
  title: string;
  url: string;
  type: "website" | "book";
}

// Type for each CEFR level
interface TenseConsistencyLevel {
  definition: string;
  details: string;
  whatToLearn: string[];
  references: Reference[];
}

// Main type for all CEFR levels (A1 to C2)
export interface TenseConsistencyLevels {
  A1: TenseConsistencyLevel;
  A2: TenseConsistencyLevel;
  B1: TenseConsistencyLevel;
  B2: TenseConsistencyLevel;
  C1: TenseConsistencyLevel;
  C2: TenseConsistencyLevel;
}


export interface TenseConsistencyType {
  tenseConsistencyDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };
  A1: TenseConsistencyLevelA1;
  A2: TenseConsistencyLevelA2;
  B1: TenseConsistencyLevelB1;
  B2: TenseConsistencyLevelB2;
  C1: TenseConsistencyLevelC1;
  C2: TenseConsistencyLevelC2;
  TenseConsistency: TenseConsistencyOverview;
  advancedTenseConsistencyPatterns: AdvancedTenseConsistencyPatterns
  tenseConsistencyCollocations: TenseConsistencyCollocations
  tenseConsistencyGenreUsage: TenseConsistencyGenreUsage
  tenseConsistencyFrequencyAndRegister: TenseConsistencyFrequencyAndRegister
  tenseConsistencyAssessment: TenseConsistencyAssessment
  tenseConsistencyLearningStrategies: TenseConsistencyLearningStrategies
  tenseConsistencyInTests: TenseConsistencyInTests
  commonTenseConsistencyMistakes:  CommonTenseConsistencyMistakes
  TenseConsistencyLevels: TenseConsistencyLevels
}

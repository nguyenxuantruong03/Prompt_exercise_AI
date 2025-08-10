export interface TimeExpressionsReference {
  title: string;
  url?: string;
  type: "website" | "book";
  author?: string;
  publisher?: string;
  year?: string | number;
}

export interface TimeExpressionsLevelDetail {
  definition: string;
  whatToLearn: string[];
  keyPatterns: string[];
  examples: string[];
  notes?: string[];
  references: TimeExpressionsReference[];
}

export interface TimeExpressionsData {
  definition: string;
  categories: {
    past: string[];
    present: string[];
    future: string[];
    duration: string[];
    frequency: string[];
    sequence: string[];
  };
  usageExamples: {
    past: string[];
    present: string[];
    future: string[];
    duration: string[];
    frequency: string[];
    sequence: string[];
  };
  notes: string[];
  commonErrors: string[];
}

export interface AdvancedTimeExpressionPatterns {
  concept: string;
  embeddedTimeExpressions: TimeExpressionPattern;
  conditionalTimeExpressions: TimeExpressionPattern;
  comparativeTimeExpressions: TimeExpressionPattern;
  temporalClauses: TimeExpressionPattern;
}

export interface TimeExpressionPattern {
  pattern: string;
  examples: string[];
}

export interface TimeExpressionCollocations {
  concept: string;
  verbCollocations: TimeCollocationGroup;
  adjectiveCollocations: TimeCollocationGroup;
  formalCollocations: TimeCollocationGroup;
}

export interface TimeCollocationGroup {
  pattern: string;
  examples: string[];
}

export interface TimeExpressionGenreUsage {
  concept: string;
  formalWriting: TimeGenreUsageGroup;
  informalWriting: TimeGenreUsageGroup;
  academicWriting: TimeGenreUsageGroup;
  creativeWriting: TimeGenreUsageGroup;
}

export interface TimeGenreUsageGroup {
  characteristics: string;
  examples: string[];
}

export interface TimeExpressionFrequencyAndRegister {
  concept: string;
  highFrequencyPatterns: {
    pattern: string;
    examples: string[];
  };
  formalRegister: TimeRegisterUsage;
  informalRegister: TimeRegisterUsage;
  technicalRegister: TimeRegisterUsage;
}

export interface TimeRegisterUsage {
  characteristics: string;
  examples: string[];
}

export interface TimeExpressionAssessment {
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
}

export interface TimeExpressionLearningStrategies {
  concept: string;
  recognitionStrategies: {
    strategy: string;
    techniques: string[];
  };
  practiceStrategies: {
    strategy: string;
    techniques: string[];
  };
  memoryStrategies: {
    strategy: string;
    techniques: string[];
  };
  applicationStrategies: {
    strategy: string;
    techniques: string[];
  };
}

export interface TimeExpressionsInTests {
  concept: string;
  testTypes: {
    TOEFL: string;
    IELTS: string;
    Cambridge: string;
    TOEIC: string;
    [key: string]: string; // Mở rộng cho các bài thi khác nếu cần
  };
  commonTestItems: {
    multipleChoice: string;
    sentenceCompletion: string;
    errorIdentification: string;
    textEditing: string;
  };
  testStrategies: {
    patternRecognition: string;
    contextAnalysis: string;
    registerAwareness: string;
  };
}

export interface TimeExpressionMistakeDetail {
  error: string;
  example: string;
  correction: string;
  explanation: string;
}

export interface PreventionStrategies {
  tensePractice: string;
  prepositionPractice: string;
  contextPractice: string;
  patternPractice: string;
}

export interface CommonTimeExpressionMistakes {
  concept: string;
  mistakeTypes: {
    wrongTense: TimeExpressionMistakeDetail;
    wrongPreposition: TimeExpressionMistakeDetail;
    wrongWordOrder: TimeExpressionMistakeDetail;
    mixedTenses: TimeExpressionMistakeDetail;
    wrongExpression: TimeExpressionMistakeDetail;
    [key: string]: TimeExpressionMistakeDetail; // Cho phép mở rộng thêm
  };
  preventionStrategies: PreventionStrategies;
}

export interface TimeExpressionsType {
  id: number;
  timeExpressionsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };
  A1: TimeExpressionsLevelDetail;
  A2: TimeExpressionsLevelDetail;
  B1: TimeExpressionsLevelDetail;
  B2: TimeExpressionsLevelDetail;
  C1: TimeExpressionsLevelDetail;
  C2: TimeExpressionsLevelDetail;
  TimeExpressions: TimeExpressionsData;
  advancedTimeExpressionPatterns: AdvancedTimeExpressionPatterns;
  timeExpressionCollocations: TimeExpressionCollocations;
  timeExpressionGenreUsage: TimeExpressionGenreUsage;
  timeExpressionFrequencyAndRegister: TimeExpressionFrequencyAndRegister;
  timeExpressionAssessment: TimeExpressionAssessment;
  timeExpressionLearningStrategies: TimeExpressionLearningStrategies;
  timeExpressionsInTests: TimeExpressionsInTests;
  commonTimeExpressionMistakes: CommonTimeExpressionMistakes;
}

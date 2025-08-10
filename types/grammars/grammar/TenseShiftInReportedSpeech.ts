// Example structure for a tense shift
interface TenseShiftExample {
  direct: string;
  reported: string;
}

// Mapping structure for each present/past tense shift rule
interface TenseShiftRule {
  shiftTo: string;
  example: TenseShiftExample;
}

// Modal verbs backshift mapping
interface ModalVerbShifts {
  will: string;
  can: string;
  shall: string;
  may: string;
}

// Main type for the rules property
interface TenseShiftRules {
  presentSimple: TenseShiftRule;
  presentContinuous: TenseShiftRule;
  presentPerfect: TenseShiftRule;
  pastSimple: TenseShiftRule;
  pastContinuous: TenseShiftRule;
  modalVerbs: ModalVerbShifts;
  noShiftNeeded: string[];
}

// Interface cho một nhóm mẫu và ví dụ
interface CollocationPattern {
  pattern: string;
  examples: string[];
}

// Interface chính cho collocations trong câu tường thuật
export interface TenseShiftCollocations {
  concept: string;
  reportingVerbs: CollocationPattern;
  timeExpressions: CollocationPattern;
  modalVerbs: CollocationPattern;
}

// Full structure of the TenseShiftInReportedSpeech object
export interface TenseShiftInReportedSpeech {
  definition: string;
  rules: TenseShiftRules;
  notes: string[];
  commonErrors: string[];
}

// Interface for examples grouped under a pattern
interface TenseShiftPattern {
  pattern: string;
  examples: string[];
}

// Advanced tense shift patterns object
export interface AdvancedTenseShiftPatterns {
  concept: string;
  conditionalShifts: TenseShiftPattern;
  mixedTenseReporting: TenseShiftPattern;
  complexTimeExpressions: TenseShiftPattern;
  academicReporting: TenseShiftPattern;
}

// Interface cho từng thể loại sử dụng chuyển thì
interface GenreTenseShift {
  characteristics: string;
  examples: string[];
}

// Giao diện chính cho cách dùng tense shift theo thể loại
export interface TenseShiftGenreUsage {
  concept: string;
  formalWriting: GenreTenseShift;
  informalWriting: GenreTenseShift;
  academicWriting: GenreTenseShift;
  creativeWriting: GenreTenseShift;
}

interface TenseShiftPattern {
  pattern: string;
  examples: string[];
}

interface RegisterTenseShiftUsage {
  characteristics: string;
  examples: string[];
}

export interface TenseShiftFrequencyAndRegister {
  concept: string;
  highFrequencyPatterns: TenseShiftPattern;
  formalRegister: RegisterTenseShiftUsage;
  informalRegister: RegisterTenseShiftUsage;
  technicalRegister: RegisterTenseShiftUsage;
}

export interface TenseShiftAssessment {
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

export interface CommonTenseShiftMistakes {
  concept: string;
  mistakeTypes: {
    noTenseShift: TenseShiftMistakeDetail;
    missingSubject: TenseShiftMistakeDetail;
    wrongModalShift: TenseShiftMistakeDetail;
    unnecessaryShift: TenseShiftMistakeDetail;
  };
  preventionStrategies: {
    tenseShiftPractice: string;
    subjectPractice: string;
    modalPractice: string;
    exceptionPractice: string;
  };
}

export interface TenseShiftMistakeDetail {
  error: string;
  example: string;
  correction: string;
  explanation: string;
}

export interface TenseShiftLearningStrategies {
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

export interface TenseShiftsInTests {
  concept: string;
  testTypes: {
    TOEFL: string;
    IELTS: string;
    Cambridge: string;
    TOEIC: string;
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

export interface TenseShiftInReportedSpeechType {
  id: number;
  // General definition and scope
  tenseShiftInReportedSpeechDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic
  A1: {
    definition: string;
    presentSimpleShift: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicReportingVerbs: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    references: string[];
  };

  // A2 Level - Elementary
  A2: {
    definition: string;
    presentContinuousShift: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    futureWillShift: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicExceptions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    references: string[];
  };

  // B1 Level - Intermediate
  B1: {
    definition: string;
    presentPerfectShift: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    modalVerbShifts: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    pastSimpleShift: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    references: string[];
  };

  // B2 Level - Upper Intermediate
  B2: {
    definition: string;
    pastContinuousShift: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    conditionalSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    advancedReportingVerbs: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    references: string[];
  };

  // C1 Level - Advanced
  C1: {
    definition: string;
    academicReporting: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexTimeExpressions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    mixedTenseReporting: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    references: string[];
  };

  // C2 Level - Mastery
  C2: {
    definition: string;
    literaryReporting: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    philosophicalReporting: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    references: string[];
  };
  TenseShiftInReportedSpeech: TenseShiftInReportedSpeech;
  advancedTenseShiftPatterns: AdvancedTenseShiftPatterns;
  tenseShiftCollocations: TenseShiftCollocations;
  tenseShiftGenreUsage: TenseShiftGenreUsage;
  tenseShiftFrequencyAndRegister: TenseShiftFrequencyAndRegister;
  tenseShiftAssessment: TenseShiftAssessment;
  tenseShiftLearningStrategies: TenseShiftLearningStrategies;
  tenseShiftsInTests: TenseShiftsInTests;
  commonTenseShiftMistakes: CommonTenseShiftMistakes;
}

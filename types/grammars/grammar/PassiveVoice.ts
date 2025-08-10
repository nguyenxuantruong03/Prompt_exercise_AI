export interface PassiveVoiceType {
  id: number;
  // Core definition and importance
  passiveVoiceDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Definitions
  A1: {
    definition: string;
    basicPresentPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicPastPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    resources: {
      websites: string[];
      books: string[];
      videos: string[];
    };
  };

  A2: {
    definition: string;
    expandedTenses: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    agentUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    resources: {
      websites: string[];
      books: string[];
      videos: string[];
    };
  };

  B1: {
    definition: string;
    continuousPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    resources: {
      websites: string[];
      books: string[];
      videos: string[];
    };
  };

  B2: {
    definition: string;
    perfectPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    formalPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    resources: {
      websites: string[];
      books: string[];
      videos: string[];
    };
  };

  C1: {
    definition: string;
    academicPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    resources: {
      websites: string[];
      books: string[];
      videos: string[];
    };
  };

  C2: {
    definition: string;
    literaryPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedPassive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    resources: {
      websites: string[];
      books: string[];
      videos: string[];
    };
  };

  // Original comprehensive section
  PassiveVoice: {
    definition: string;
    structure: {
      general: string;
      example: string;
    };
    tenseForms: {
      [key: string]: string;
    };
    whenToUse: string[];
    examples: Array<{
      active: string;
      passive: string;
    }>;
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced patterns
  advancedPassivePatterns: {
    concept: string;
    impersonalPassive: {
      pattern: string;
      examples: string[];
    };
    passiveWithPrepositions: {
      pattern: string;
      examples: string[];
    };
    passiveWithInfinitives: {
      pattern: string;
      examples: string[];
    };
    passiveWithGerunds: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations and expressions
  passiveVoiceCollocations: {
    concept: string;
    academicCollocations: {
      pattern: string;
      examples: string[];
    };
    businessCollocations: {
      pattern: string;
      examples: string[];
    };
    everydayCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre usage
  passiveVoiceGenreUsage: {
    concept: string;
    formalWriting: {
      characteristics: string;
      examples: string[];
    };
    informalWriting: {
      characteristics: string;
      examples: string[];
    };
    academicWriting: {
      characteristics: string;
      examples: string[];
    };
    creativeWriting: {
      characteristics: string;
      examples: string[];
    };
  };

  // Frequency and register
  passiveVoiceFrequencyAndRegister: {
    concept: string;
    highFrequencyPatterns: {
      pattern: string;
      examples: string[];
    };
    formalRegister: {
      characteristics: string;
      examples: string[];
    };
    informalRegister: {
      characteristics: string;
      examples: string[];
    };
    technicalRegister: {
      characteristics: string;
      examples: string[];
    };
  };

  // Assessment and evaluation
  passiveVoiceAssessment: {
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

  // Learning strategies
  passiveVoiceLearningStrategies: {
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
  };

  // Test preparation
  passiveVoiceInTests: {
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
      formRecognition: string;
      contextAnalysis: string;
      registerAwareness: string;
    };
  };

  // Common mistakes
  commonPassiveVoiceMistakes: {
    concept: string;
    mistakeTypes: {
      wrongVerbForm: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingBe: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongTense: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      unnecessaryPassive: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingAgent: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      formPractice: string;
      contextAwareness: string;
      agentConsideration: string;
      tenseAccuracy: string;
    };
  };
}

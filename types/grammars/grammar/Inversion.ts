export interface InversionType {
  // Comprehensive Inversion Reference
  inversionDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    references: string[];
  };

  // A1 Level - Basic Inversion (Beginner)
  A1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      basicQuestionInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      basicBeInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonContexts: string[];
    difficultyIndicators: {
      complexity: string;
      frequency: string;
      importance: string;
    };
  };

  // A2 Level - Elementary Inversion
  A2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      expandedQuestionInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      basicNegativeInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonContexts: string[];
    difficultyIndicators: {
      complexity: string;
      frequency: string;
      importance: string;
    };
  };

  // B1 Level - Intermediate Inversion
  B1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      perfectTenseInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      negativeAdverbialInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonContexts: string[];
    difficultyIndicators: {
      complexity: string;
      frequency: string;
      importance: string;
    };
  };

  // B2 Level - Upper Intermediate Inversion
  B2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      conditionalInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      formalInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonContexts: string[];
    difficultyIndicators: {
      complexity: string;
      frequency: string;
      importance: string;
    };
  };

  // C1 Level - Advanced Inversion
  C1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      academicInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      sophisticatedInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonContexts: string[];
    difficultyIndicators: {
      complexity: string;
      frequency: string;
      importance: string;
    };
  };

  // C2 Level - Mastery Inversion
  C2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      literaryInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      specializedInversion: {
        concept: string;
        explanation: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonContexts: string[];
    difficultyIndicators: {
      complexity: string;
      frequency: string;
      importance: string;
    };
  };

  // Original Inversion Section
  Inversion: {
    definition: string;
    types: {
      questionInversion: {
        rule: string;
        example: string;
      };
      negativeAdverbialInversion: {
        rule: string;
        examples: string[];
      };
      conditionalInversion: {
        rule: string;
        examples: string[];
      };
      "so/suchInversion": {
        rule: string;
        example: string;
      };
      hereThereInversion: {
        rule: string;
        example: string;
      };
    };
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Inversion Patterns and Constructions
  advancedInversionPatterns: {
    concept: string;
    embeddedInversion: {
      pattern: string;
      examples: string[];
    };
    rhetoricalInversion: {
      pattern: string;
      examples: string[];
    };
    comparativeInversion: {
      pattern: string;
      examples: string[];
    };
    temporalInversion: {
      pattern: string;
      examples: string[];
    };
  };

  // Inversion Collocations and Fixed Expressions
  inversionCollocations: {
    concept: string;
    negativeCollocations: {
      pattern: string;
      examples: string[];
    };
    conditionalCollocations: {
      pattern: string;
      examples: string[];
    };
    formalCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Inversion Usage in Different Genres
  inversionGenreUsage: {
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

  // Inversion Frequency and Register
  inversionFrequencyAndRegister: {
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

  // Inversion Assessment and Evaluation
  inversionAssessment: {
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

  // Inversion Learning Strategies
  inversionLearningStrategies: {
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

  // Inversion in Language Tests
  inversionInTests: {
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
  };

  // Common Inversion Mistakes
  commonInversionMistakes: {
    concept: string;
    mistakeTypes: {
      wrongWordOrder: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongVerbForm: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingAuxiliary: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongConditional: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      overInversion: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      patternPractice: string;
      contextPractice: string;
      verbFormPractice: string;
      triggerPractice: string;
    };
  };
}

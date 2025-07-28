export interface NegationType {
  // Comprehensive Negation Reference
  negationDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Levels A1-C2
  A1: {
    definition: string;
    basicVerbNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
    };
    basicDoNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    assessmentCriteria: string[];
  };

  A2: {
    definition: string;
    expandedVerbNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicNegativeWords: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    assessmentCriteria: string[];
  };

  B1: {
    definition: string;
    perfectTenseNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    continuousNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    assessmentCriteria: string[];
  };

  B2: {
    definition: string;
    modalNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    formalNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    assessmentCriteria: string[];
  };

  C1: {
    definition: string;
    academicNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    sophisticatedNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    assessmentCriteria: string[];
  };

  C2: {
    definition: string;
    literaryNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedNegation: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    commonMistakes: string[];
    practiceActivities: string[];
    assessmentCriteria: string[];
  };

  // Original Negation Section
  Negation: {
    definition: string;
    commonStructures: {
      verbBe: {
        structure: string;
        example: string;
      };
      simpleTenses: {
        structure: string;
        examples: string[];
      };
      perfectTenses: {
        structure: string;
        examples: string[];
      };
      modalVerbs: {
        structure: string;
        examples: string[];
      };
      continuousTenses: {
        structure: string;
        examples: string[];
      };
      futureTense: {
        structure: string;
        example: string;
      };
    };
    negativeWords: string[];
    doubleNegatives: {
      definition: string;
      incorrect: string;
      correct: string;
    };
    negationWithPrefixes: {
      commonPrefixes: string[];
      note: string;
    };
    recognitionTips: string[];
    commonErrors: string[];
  };

  // Advanced Patterns
  advancedNegationPatterns: {
    concept: string;
    inversionNegation: {
      pattern: string;
      examples: string[];
    };
    cleftNegation: {
      pattern: string;
      examples: string[];
    };
    partialNegation: {
      pattern: string;
      examples: string[];
    };
    emphaticNegation: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations and Fixed Expressions
  negationCollocations: {
    concept: string;
    verbCollocations: {
      pattern: string;
      examples: string[];
    };
    adjectiveCollocations: {
      pattern: string;
      examples: string[];
    };
    formalCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  negationGenreUsage: {
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

  // Frequency and Register
  negationFrequencyAndRegister: {
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

  // Exercises and Practice
  negationExercises: {
    concept: string;
    basicExercises: {
      type: string;
      exercises: string[];
    };
    intermediateExercises: {
      type: string;
      exercises: string[];
    };
    advancedExercises: {
      type: string;
      exercises: string[];
    };
    errorCorrection: {
      type: string;
      exercises: string[];
    };
  };

  // Assessment and Evaluation
  negationAssessment: {
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

  // Learning Strategies
  negationLearningStrategies: {
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

  // Language Tests
  negationInTests: {
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
      structureRecognition: string;
      contextAnalysis: string;
      registerAwareness: string;
    };
  };

  // Common Mistakes
  commonNegationMistakes: {
    concept: string;
    mistakeTypes: {
      wrongAuxiliary: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      doubleNegative: {
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
      wrongPlacement: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      redundantNegation: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      auxiliaryPractice: string;
      negativeWordPractice: string;
      structurePractice: string;
      contextPractice: string;
    };
  };

  // Learning Resources and References
  learningResources: {
    books: {
      title: string;
      author: string;
      description: string;
      level: string;
      link?: string;
    }[];
    websites: {
      name: string;
      url: string;
      description: string;
      focus: string;
    }[];
    academicPapers: {
      title: string;
      author: string;
      year: string;
      description: string;
      link?: string;
    }[];
    onlineCourses: {
      name: string;
      platform: string;
      description: string;
      level: string;
      link?: string;
    }[];
  };
}

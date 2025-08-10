export interface InfinitivesType {
  id: number;
  // Comprehensive Infinitives Reference
  infinitivesDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic Infinitives
  A1: {
    definition: string;
    basicInfinitiveForms: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
    };
    simplePurposeExpressions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningResources: {
      websites: string[];
      books: string[];
      practiceMaterials: string[];
    };
  };

  // A2 Level - Elementary Infinitives
  A2: {
    definition: string;
    expandedVerbList: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveAsObject: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveAfterAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningResources: {
      websites: string[];
      books: string[];
      practiceMaterials: string[];
    };
  };

  // B1 Level - Intermediate Infinitives
  B1: {
    definition: string;
    bareInfinitive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    perfectInfinitive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    passiveInfinitive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningResources: {
      websites: string[];
      books: string[];
      practiceMaterials: string[];
    };
  };

  // B2 Level - Upper Intermediate Infinitives
  B2: {
    definition: string;
    continuousInfinitive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveOfPurpose: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveAfterNouns: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningResources: {
      websites: string[];
      books: string[];
      practiceMaterials: string[];
    };
  };

  // C1 Level - Advanced Infinitives
  C1: {
    definition: string;
    splitInfinitive: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveClauses: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveInAcademicWriting: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningResources: {
      websites: string[];
      books: string[];
      practiceMaterials: string[];
    };
  };

  // C2 Level - Mastery Infinitives
  C2: {
    definition: string;
    literaryInfinitives: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    infinitiveVariations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedInfinitiveUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningResources: {
      websites: string[];
      books: string[];
      practiceMaterials: string[];
    };
  };

  // Original Infinitives Section
  Infinitives: {
    definition: string;
    form: string;
    types: {
      [key: string]: {
        description: string;
        example: string;
      };
    };
    functions: {
      [key: string]:
        | string
        | {
            verbs?: string[];
            example: string;
          };
    };
    commonVerbsFollowedByInfinitives: string[];
    examples: string[];
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Patterns
  advancedInfinitivePatterns: {
    concept: string;
    infinitivePhrases: {
      pattern: string;
      examples: string[];
    };
    infinitiveWithFor: {
      pattern: string;
      examples: string[];
    };
    infinitiveWithTooAndEnough: {
      pattern: string;
      examples: string[];
    };
    infinitiveInConditionals: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations and Fixed Expressions
  infinitiveCollocations: {
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

  // Genre Usage
  infinitiveGenreUsage: {
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
  infinitiveFrequencyAndRegister: {
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
  infinitiveExercises: {
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
  infinitiveAssessment: {
    concept: string;
    assessmentCriteria: {
      accuracy: string;
      complexity: string;
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
  infinitiveLearningStrategies: {
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
  infinitivesInTests: {
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
      verbPatterns: string;
      contextClues: string;
    };
  };

  // Common Mistakes
  commonInfinitiveMistakes: {
    concept: string;
    mistakeTypes: {
      missingTo: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      gerundInstead: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      bareInfinitiveError: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      infinitiveAfterPreposition: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      splitInfinitiveConfusion: {
        error: string;
        example: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      verbLists: string;
      patternRecognition: string;
      contextPractice: string;
      errorAnalysis: string;
    };
  };
}

export interface PossessivesType {
  // Definition and References
  possessivesDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    learningObjectives: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
  };

  // A1 Level
  A1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    possessiveAdjectives: {
      concept: string;
      grammaticalRules: string[];
      list: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    possessiveFormOfNouns: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    exercises: string[];
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // A2 Level
  A2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    possessivePronouns: {
      concept: string;
      grammaticalRules: string[];
      list: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    pluralPossessiveNouns: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    exercises: string[];
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // B1 Level
  B1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    doublePossessive: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    possessiveWithObjects: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    exercises: string[];
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // B2 Level
  B2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    compoundPossessives: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    possessiveDeterminers: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    exercises: string[];
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // C1 Level
  C1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    academicPossessives: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    possessiveWithGerunds: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    exercises: string[];
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // C2 Level
  C2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    literaryPossessives: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    abstractPossessives: {
      concept: string;
      grammaticalRules: string[];
      patterns: string[];
      examples: string[];
      exercises: string[];
      commonErrors: string[];
    };
    exercises: string[];
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // Original Possessives Section
  Possessives: {
    definition: string;
    types: {
      possessiveAdjectives: {
        description: string;
        list: Record<string, string>;
        usage: string[];
        examples: string[];
      };
      possessivePronouns: {
        description: string;
        list: Record<string, string>;
        usage: string[];
        examples: string[];
      };
      possessiveFormOfNouns: {
        description: string;
        rules: string[];
        examples: string[];
      };
    };
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Patterns
  advancedPossessivePatterns: {
    concept: string;
    doublePossessive: {
      pattern: string;
      examples: string[];
    };
    compoundPossessives: {
      pattern: string;
      examples: string[];
    };
    possessiveWithGerunds: {
      pattern: string;
      examples: string[];
    };
    possessiveWithObjects: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations
  possessiveCollocations: {
    concept: string;
    adjectiveCollocations: {
      pattern: string;
      examples: string[];
    };
    nounCollocations: {
      pattern: string;
      examples: string[];
    };
    prepositionCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  possessiveGenreUsage: {
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
  possessiveFrequencyAndRegister: {
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

  // Exercises
  possessiveExercises: {
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

  // Assessment
  possessiveAssessment: {
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
  possessiveLearningStrategies: {
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
  possessivesInTests: {
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

  // Common Mistakes
  commonPossessiveMistakes: {
    concept: string;
    mistakeTypes: {
      wrongAdjective: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongPronoun: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongPlural: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongApostrophe: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      adjectivePractice: string;
      nounPractice: string;
      contextPractice: string;
      patternPractice: string;
    };
  };
}

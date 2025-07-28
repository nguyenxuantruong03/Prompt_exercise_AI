export interface WordFormationSentencesType {
  // Core definition and concept
  wordFormationSentencesDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Structures (A1-C2)
  A1: {
    definition: string;
    basicSuffixes: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
    };
    simpleWordFamilies: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
  };

  A2: {
    definition: string;
    expandedSuffixes: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicPrefixes: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
  };

  B1: {
    definition: string;
    complexSuffixes: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    multipleTransformations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
  };

  B2: {
    definition: string;
    academicSuffixes: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    compoundFormations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
  };

  C1: {
    definition: string;
    sophisticatedSuffixes: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    academicPrefixes: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
  };

  C2: {
    definition: string;
    literaryFormations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedFormations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
  };

  // Original Word Formation Section
  WordFormationSentences: {
    definition: string;
    wordForms: {
      Noun: string[];
      Verb: string[];
      Adjective: string[];
      Adverb: string[];
    };
    examples: Array<{
      base: string;
      forms: {
        verb?: string;
        noun?: string;
        adjective?: string;
        adverb?: string;
      };
      sentences: {
        verb?: string;
        noun?: string;
        adjective?: string;
        adverb?: string;
      };
    }>;
    usageNotes: string[];
    recognitionTips: string[];
    commonErrors: string[];
  };

  // Advanced Patterns and Constructions
  advancedWordFormationPatterns: {
    concept: string;
    multipleAffixation: {
      pattern: string;
      examples: string[];
    };
    conversion: {
      pattern: string;
      examples: string[];
    };
    blending: {
      pattern: string;
      examples: string[];
    };
    acronyms: {
      pattern: string;
      examples: string[];
    };
  };

  // Word Formation Collocations
  wordFormationCollocations: {
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
  wordFormationGenreUsage: {
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
  wordFormationFrequencyAndRegister: {
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
  wordFormationExercises: {
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
  wordFormationAssessment: {
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
  wordFormationLearningStrategies: {
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
  wordFormationInTests: {
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
      contextClues: string;
      wordFamilyKnowledge: string;
    };
  };

  // Common Mistakes
  commonWordFormationMistakes: {
    concept: string;
    mistakeTypes: {
      wrongSuffix: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingSuffix: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongWordClass: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      incorrectPrefix: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      overFormation: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      wordFamilyStudy: string;
      patternPractice: string;
      contextPractice: string;
      dictionaryUse: string;
    };
  };

  // References and Resources
  references?: {
    books: Array<{
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      description: string;
    }>;
    websites: Array<{
      title: string;
      url: string;
      description: string;
      lastAccessed: string;
    }>;
    academicPapers: Array<{
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi?: string;
      description: string;
    }>;
  };
}

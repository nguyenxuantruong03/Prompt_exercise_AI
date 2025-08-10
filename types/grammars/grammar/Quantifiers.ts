export interface QuantifiersType {
  id: number;
  // Definition and Core Concepts
  quantifiersDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic Quantifiers
  A1: {
    definition: string;
    basicCountableQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
    };
    basicUncountableQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    referenceMaterials: {
      websites: string[];
      books: string[];
      onlineResources: string[];
    };
  };

  // A2 Level - Elementary Quantifiers
  A2: {
    definition: string;
    expandedCountableQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    expandedUncountableQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    referenceMaterials: {
      websites: string[];
      books: string[];
      onlineResources: string[];
    };
  };

  // B1 Level - Intermediate Quantifiers
  B1: {
    definition: string;
    nuancedQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    formalQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    referenceMaterials: {
      websites: string[];
      books: string[];
      onlineResources: string[];
    };
  };

  // B2 Level - Upper Intermediate Quantifiers
  B2: {
    definition: string;
    academicQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    referenceMaterials: {
      websites: string[];
      books: string[];
      onlineResources: string[];
    };
  };

  // C1 Level - Advanced Quantifiers
  C1: {
    definition: string;
    sophisticatedQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    preciseQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    referenceMaterials: {
      websites: string[];
      books: string[];
      onlineResources: string[];
    };
  };

  // C2 Level - Mastery Quantifiers
  C2: {
    definition: string;
    literaryQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    referenceMaterials: {
      websites: string[];
      books: string[];
      onlineResources: string[];
    };
  };

  // Original Quantifiers Section
  Quantifiers: {
    definition: string;
    categories: {
      usedWithCountableNouns: string[];
      usedWithUncountableNouns: string[];
      usedWithBoth: string[];
    };
    examples: {
      countable: string[];
      uncountable: string[];
      both: string[];
    };
    specialUsage: {
      fewVsALittle: {
        few: string;
        aFew: string;
      };
      littleVsALittle: {
        little: string;
        aLittle: string;
      };
    };
    position: string;
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Patterns and Constructions
  advancedQuantifierPatterns: {
    concept: string;
    quantifierWithOf: {
      pattern: string;
      examples: string[];
    };
    quantifierWithPartitives: {
      pattern: string;
      examples: string[];
    };
    quantifierWithCollectives: {
      pattern: string;
      examples: string[];
    };
    quantifierWithFractions: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations and Fixed Expressions
  quantifierCollocations: {
    concept: string;
    countableCollocations: {
      pattern: string;
      examples: string[];
    };
    uncountableCollocations: {
      pattern: string;
      examples: string[];
    };
    formalCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  quantifierGenreUsage: {
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
  quantifierFrequencyAndRegister: {
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
  quantifierExercises: {
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
  quantifierAssessment: {
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
  quantifierLearningStrategies: {
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
  quantifiersInTests: {
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
      nounTypeRecognition: string;
      contextAnalysis: string;
      registerAwareness: string;
    };
  };

  // Common Mistakes
  commonQuantifierMistakes: {
    concept: string;
    mistakeTypes: {
      wrongNounType: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongMeaning: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongRegister: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingOf: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongArticle: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      nounTypePractice: string;
      meaningPractice: string;
      registerPractice: string;
      contextPractice: string;
    };
  };
}

export interface parallelStructuresDataType {
  topic: string;
  level: string;
  definition: string;
  importance: string[];
  basicRules: {
    explanation: string;
    structure: string;
    example: string;
  };
  commonParallelForms: {
    nouns: {
      example: string;
      explanation: string;
    };
    verbs: {
      example: string;
      explanation: string;
    };
    infinitives: {
      example: string;
      explanation: string;
    };
    gerunds: {
      example: string;
      explanation: string;
    };
    adjectives: {
      example: string;
      explanation: string;
    };
    adverbs: {
      example: string;
      explanation: string;
    };
    clauses: {
      example: string;
      explanation: string;
    };
    prepositionalPhrases: {
      example: string;
      explanation: string;
    };
    correlativeConjunctions: {
      both_and: string;
      not_only_but_also: string;
      either_or: string;
      neither_nor: string;
      whether_or: string;
      not_but: string;
      rather_than: string;
      as_as: string;
    };
  };
  A1_A2: {
    focus: string;
    detailedExplanation: string;
    keyLearningPoints: string[];
    examples: string[];
    errors: string[];
    practiceTypes: string[];
    vocabularyLevel: string;
    sentenceComplexity: string;
  };
  B1_B2: {
    focus: string;
    detailedExplanation: string;
    keyLearningPoints: string[];
    examples: string[];
    structures: string[];
    commonMistakes: string[];
    advancedPatterns: {
      pattern: string;
      explanation: string;
      example: string;
    }[];
    contextualUsage: string[];
  };
  C1_C2: {
    focus: string;
    detailedExplanation: string;
    keyLearningPoints: string[];
    advancedStructures: {
      structure: string;
      example: string;
      explanation: string;
      context: string;
    }[];
    stylisticEffects: string[];
    rhetoricalDevices: {
      device: string;
      explanation: string;
      example: string;
    }[];
    academicWriting: {
      usage: string;
      examples: string[];
    };
    literaryAnalysis: {
      purpose: string;
      examples: string[];
    };
    famousQuotes: string[];
  };
  diagnostic: {
    identify: string;
    test: string;
    example: {
      faulty: string;
      corrected: string;
    };
    checklistSteps: string[];
  };
  exceptionsAndNotes: {
    exceptions: string[];
    warning: string;
    note: string;
    specialCases: {
      case: string;
      explanation: string;
      example: string;
    }[];
  };
  practice: {
    rewrite: {
      faulty: string;
      correct: string;
      explanation: string;
    }[];
    complete: string[];
  };
  teachingTips: {
    visualAids: string;
    colorCoding: string;
    realLifeUse: string;
    collaborative: string;
    progressionStrategy: string[];
  };
  references: {
    books: string[];
    websites: string[];
    academicSources: string[];
  };
}

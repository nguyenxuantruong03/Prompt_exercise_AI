export interface WordOrderType {
  // Core definition and concept
  wordOrderDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Structures (A1-C2)
  A1: {
    definition: string;
    basicSVO: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicNegatives: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    simpleAdverbs: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  A2: {
    definition: string;
    adverbPlacement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    timePlaceOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    prepositionOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    basicModifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  B1: {
    definition: string;
    complexAdverbPlacement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    indirectObjects: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    multipleElements: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    conditionalOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  B2: {
    definition: string;
    emphasisWordOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexModifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    reportedSpeechOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    passiveOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C1: {
    definition: string;
    academicWordOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexInversions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    cleftSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    formalStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C2: {
    definition: string;
    literaryWordOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedWordOrder: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    rhetoricalStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    stylisticVariations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // Advanced Patterns and Constructions
  advancedWordOrderPatterns: {
    concept: string;
    cleftSentences: {
      pattern: string;
      examples: string[];
    };
    pseudoCleftSentences: {
      pattern: string;
      examples: string[];
    };
    fronting: {
      pattern: string;
      examples: string[];
    };
    extraposition: {
      pattern: string;
      examples: string[];
    };
    topicalization: {
      pattern: string;
      examples: string[];
    };
    leftDislocation: {
      pattern: string;
      examples: string[];
    };
  };

  // Word Order Collocations
  wordOrderCollocations: {
    concept: string;
    adverbCollocations: {
      pattern: string;
      examples: string[];
    };
    emphasisCollocations: {
      pattern: string;
      examples: string[];
    };
    formalCollocations: {
      pattern: string;
      examples: string[];
    };
    academicCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  wordOrderGenreUsage: {
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
    technicalWriting: {
      characteristics: string;
      examples: string[];
    };
    journalisticWriting: {
      characteristics: string;
      examples: string[];
    };
  };

  // Frequency and Register
  wordOrderFrequencyAndRegister: {
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
    academicRegister: {
      characteristics: string;
      examples: string[];
    };
    literaryRegister: {
      characteristics: string;
      examples: string[];
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
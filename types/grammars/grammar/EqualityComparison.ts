export interface EqualityComparisonType {
  // Core definition and characteristics
  equalityComparisonDefinition: {
    basicDefinition: string;
    grammaticalFunction: string;
    keyCharacteristics: string[];
    morphologicalFeatures: {
      positive: string;
      negative: string;
      nounBased: string;
    };
    positionInSentence: {
      attributive: string;
      predicative: string;
      adverbial: string;
    };
  };

  // Level-specific data (A1-C2)
  A1: {
    basicPositiveEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    basicNegativeEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    basicNounEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    basicQuantityEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
  };

  A2: {
    expandedPositiveEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    expandedNegativeEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityWithAdverbs: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityWithNouns: {
      definition: string;
      examples: string[];
      usage: string;
    };
  };

  B1: {
    sophisticatedEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityPhrases: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityClauses: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityIntensifiers: {
      definition: string;
      examples: string[];
      usage: string;
    };
  };

  B2: {
    complexEqualityStructures: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityIdioms: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
    };
    equalityConjunctions: {
      definition: string;
      examples: string[];
      usage: string;
    };
  };

  C1: {
    sophisticatedEqualityStructures: {
      definition: string;
      examples: string[];
      usage: string;
    };
    academicEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    literaryEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
    technicalEquality: {
      definition: string;
      examples: string[];
      usage: string;
    };
  };

  C2: {
    rareAndObscure: {
      definition: string;
      examples: string[];
      usage: string;
    };
    domainSpecific: {
      definition: string;
      legal: string[];
      medical: string[];
      scientific: string[];
      business: string[];
    };
    stylisticEquality: {
      definition: string;
      formal: string[];
      poetic: string[];
      academic: string[];
    };
    contextualMastery: {
      definition: string;
      formalWriting: string;
      creativeWriting: string;
      casualSpeech: string;
      technicalWriting: string;
    };
  };

  // Learning resources and references
  learningResources: {
    books: {
      title: string;
      author: string;
      isbn: string;
      description: string;
      level: string;
    }[];
    websites: {
      name: string;
      url: string;
      description: string;
      focus: string;
    }[];
    academicPapers: {
      title: string;
      authors: string[];
      journal: string;
      year: string;
      doi: string;
      abstract: string;
    }[];
    onlineCourses: {
      platform: string;
      courseName: string;
      instructor: string;
      url: string;
      level: string;
      duration: string;
    }[];
    practiceMaterials: {
      type: string;
      description: string;
      difficulty: string;
      source: string;
    }[];
  };

  // Advanced patterns and structures
  advancedEqualityComparisonPatterns: {
    equalityComparisonFormation: {
      definition: string;
      positive: {
        definition: string;
        basic: string;
        intensified: string;
        approximated: string;
      };
      negative: {
        definition: string;
        basic: string;
        formal: string;
        intensified: string;
      };
      nounBased: {
        definition: string;
        basic: string;
        formal: string;
      };
    };
    equalityComparisonStructures: {
      definition: string;
      basicStructure: {
        pattern: string;
        examples: string[];
      };
      complexStructure: {
        pattern: string;
        examples: string[];
      };
      adverbialStructure: {
        pattern: string;
        examples: string[];
      };
      nounStructure: {
        pattern: string;
        examples: string[];
      };
    };
    equalityComparisonModifiers: {
      definition: string;
      intensifiers: {
        examples: string[];
        usage: string;
      };
      approximators: {
        examples: string[];
        usage: string;
      };
      qualifiers: {
        examples: string[];
        usage: string;
      };
    };
    equalityComparisonClauses: {
      definition: string;
      thatClauses: {
        examples: string[];
        usage: string;
      };
      relativeClauses: {
        examples: string[];
        usage: string;
      };
      infinitiveClauses: {
        examples: string[];
        usage: string;
      };
    };
  };

  // Collocations and genre usage
  equalityComparisonCollocations: {
    commonPairs: string[];
    academicCollocations: string[];
    businessCollocations: string[];
    literaryCollocations: string[];
  };

  equalityComparisonGenreUsage: {
    academic: {
      description: string;
      examples: string[];
      characteristics: string[];
    };
    journalistic: {
      description: string;
      examples: string[];
      principles: string[];
    };
    literary: {
      description: string;
      examples: string[];
      techniques: string[];
    };
    technical: {
      description: string;
      examples: string[];
      strategies: string[];
    };
  };

  // Frequency and register
  equalityComparisonFrequencyAndRegister: {
    highFrequency: {
      definition: string;
      examples: string[];
      usage: string;
    };
    mediumFrequency: {
      definition: string;
      examples: string[];
      usage: string;
    };
    lowFrequency: {
      definition: string;
      examples: string[];
      usage: string;
    };
    registerSpecific: {
      formal: string[];
      informal: string[];
      technical: string[];
      literary: string[];
    };
  };

  equalityComparisonExercises: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
    interactive: string[];
  };

  // Assessment and learning strategies
  equalityComparisonAssessment: {
    criteria: string[];
    rubrics: {
      beginner: string;
      intermediate: string;
      advanced: string;
      mastery: string;
    };
    commonErrors: string[];
  };

  equalityComparisonLearningStrategies: string[];

  // Test preparation
  equalityComparisonInTests: string[];

  // Common mistakes
  commonEqualityComparisonMistakes: {
    formErrors: string[];
    structureErrors: string[];
    usageErrors: string[];
  };

  // Original structure (preserved)
  EqualityComparison: {
    structure: {
      positive: string;
      negative: string;
    };
    usage: string[];
    recognition: string[];
    examples: string[];
    variations: {
      so_as_form: string;
      noun_comparison: string;
      quantity_comparison: string;
    };
    notes: string[];
  };
}

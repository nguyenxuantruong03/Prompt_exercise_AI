export interface PrepositionType {
  // Definition and basic structure
  prepositionDefinition: {
    basicDefinition: string;
    grammaticalFunction: string;
    keyCharacteristics: string[];
    morphologicalFeatures: {
      simple: string;
      compound: string;
      complex: string;
    };
    positionInSentence: {
      beforeNouns: string;
      afterVerbs: string;
      atEnd: string;
    };
  };

  // Level-based learning structure
  A1: {
    basicPlacePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicTimePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicDirectionPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicPossessionPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };

  A2: {
    expandedPlacePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    expandedTimePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    expandedDirectionPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicPrepositionalPhrases: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };

  B1: {
    sophisticatedPlacePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    sophisticatedTimePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    causeAndPurposePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    mannerAndMeansPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };

  B2: {
    abstractPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    comparisonPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    exceptionPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    conditionPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };

  C1: {
    academicPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    literaryPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    legalPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    technicalPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };

  C2: {
    rareAndObscure: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    domainSpecific: {
      definition: string;
      legal: string[];
      medical: string[];
      scientific: string[];
      business: string[];
    };
    stylisticPrepositions: {
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
      isbn?: string;
      description: string;
      level: string;
    }[];
    websites: {
      name: string;
      url: string;
      description: string;
      level: string;
    }[];
    academicPapers: {
      title: string;
      authors: string[];
      journal?: string;
      year: number;
      description: string;
    }[];
    onlineCourses: {
      name: string;
      platform: string;
      url: string;
      description: string;
      level: string;
    }[];
  };

  // Advanced patterns and constructions
  advancedPrepositionPatterns: {
    prepositionFormation: {
      definition: string;
      simple: {
        definition: string;
        examples: string[];
      };
      compound: {
        definition: string;
        examples: string[];
      };
      complex: {
        definition: string;
        examples: string[];
      };
    };
    prepositionalPhrases: {
      definition: string;
      structure: string;
      examples: string[];
      functions: {
        adjective: string;
        adverb: string;
        noun: string;
      };
    };
    prepositionalVerbs: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    phrasalPrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };

  // Collocations and fixed expressions
  prepositionCollocations: {
    commonPairs: string[];
    businessCollocations: string[];
    academicCollocations: string[];
    emotionalCollocations: string[];
  };

  // Genre-specific usage
  prepositionGenreUsage: {
    fiction: {
      description: string;
      examples: string[];
      techniques: string[];
    };
    journalism: {
      description: string;
      examples: string[];
      principles: string[];
    };
    academic: {
      description: string;
      examples: string[];
      characteristics: string[];
    };
    legal: {
      description: string;
      examples: string[];
      strategies: string[];
    };
  };

  // Frequency and register
  prepositionFrequencyAndRegister: {
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

  // Assessment and evaluation
  prepositionAssessment: {
    criteria: string[];
    rubrics: {
      beginner: string;
      intermediate: string;
      advanced: string;
      mastery: string;
    };
    commonErrors: string[];
  };

  // Learning strategies
  prepositionLearningStrategies: string[];

  // Test preparation
  prepositionInTests: string[];

  // Common mistakes
  commonPrepositionMistakes: {
    choiceErrors: string[];
    positionErrors: string[];
    usageErrors: string[];
  };

  // Original structure (preserved)
  Prepositions: {
    types: {
      place: {
        description: string;
        examples: string[];
      };
      time: {
        description: string;
        examples: string[];
      };
      direction: {
        description: string;
        examples: string[];
      };
      "cause/purpose": {
        description: string;
        examples: string[];
      };
      manner: {
        description: string;
        examples: string[];
      };
      "agent/instrument": {
        description: string;
        examples: string[];
      };
      comparison: {
        description: string;
        examples: string[];
      };
      prepositionalPhrases: {
        description: string;
        examples: string[];
      };
    };
    usage: {
      type: string;
      example: string;
    }[];
    recognition: string[];
    examples: {
      place: string[];
      time: string[];
      direction: string[];
      cause: string[];
      manner: string[];
      agent: string[];
      comparison: string[];
      prepositionalPhrases: string[];
    };
    notes: string[];
  };
}

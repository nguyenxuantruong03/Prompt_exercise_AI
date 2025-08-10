export interface adjectivesNoComparisonType {
  id: number;
  // Core definition and concept
  adjectivesNoComparisonDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Structures (A1-C2)
  A1: {
    definition: string;
    basicAbsoluteAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    binaryStates: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    simpleIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  A2: {
    definition: string;
    expandedAbsoluteStates: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    basicExtremeAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    intensifierUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    commonMistakes: {
      concept: string;
      incorrectExamples: string[];
      correctExamples: string[];
    };
  };

  B1: {
    definition: string;
    complexAbsoluteAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    classifyingAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    extremeEmotions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    advancedIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  B2: {
    definition: string;
    academicAbsoluteAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    legalAndTechnicalAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    sophisticatedIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    contextualUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C1: {
    definition: string;
    specializedAbsoluteAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    philosophicalAndSpiritual: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    scientificAndMedical: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    professionalIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C2: {
    definition: string;
    literaryAbsoluteAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    metaphoricalAndRhetorical: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedFields: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    stylisticConsiderations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // Original structure preserved
  topic: string;
  vietnameseTitle: string;
  description: string;
  levels: string[];
  nonGradable_Adjectives_vocab: {
    absolute_states: string[];
    unique_states_or_roles: string[];
    extreme_adjectives: string[];
    binary_opposites: string[];
    legal_status_or_logical_states: string[];
    academic_or_logical_definitives: string[];
    extreme_emotions: string[];
    CEFR_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
    usage_notes: {
      rule: string;
      incorrect_examples: string[];
      correct_usage: string[];
    };
  };

  categories: {
    absoluteAdjectives: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
      notes: string;
    };
    extremeAdjectives: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
      notes: string;
    };
    binaryAdjectives: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
      notes: string;
    };
    classifyingAdjectives: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
      notes: string;
    };
    nonGradableQuantifiers: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
    };
    academicAndFormal: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
    };
  };

  commonMistakes: {
    description: string;
    mistakes: string[];
    corrections: string[];
  };

  intensifiersInsteadOfComparison: {
    description: string;
    examples: {
      absolutely: string[];
      completely: string[];
      totally: string[];
      utterly: string[];
      really: string[];
    };
  };

  exceptionsAndAcceptableInformalUse: {
    description: string;
    examples: string[];
    note: string;
  };

  advancedNotes: {
    metaphoricalUses: {
      description: string;
      examples: string[];
    };
    contextualDependency: {
      description: string;
      examples: string[];
    };
  };

  references: string[];

  addedCategories: {
    spiritualAndPhilosophical: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
      notes: string;
    };
    legalAndScientific: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
      notes: string;
    };
    logicalAndBoolean: {
      description: string;
      examples: string[];
      incorrectUsageExamples: string[];
      correctUsageExamples: string[];
    };
  };

  moreCommonMistakesAdvanced: {
    B2toC2CommonMistakes: string[];
    corrections: string[];
  };

  extendedIntensifiers: {
    contextSpecific: {
      religious: {
        suggestedIntensifiers: string[];
        example: string;
      };
      scientific: {
        suggestedIntensifiers: string[];
        example: string;
      };
      philosophical: {
        suggestedIntensifiers: string[];
        example: string;
      };
    };
  };

  metaphoricalCautions: {
    description: string;
    cautions: string[];
  };

  advancedLearnerTips: {
    C1C2Tips: string[];
  };

  furtherExamplesByTopic: {
    academic: string[];
    legal: string[];
    spiritual: string[];
    scientific: string[];
  };

  // Advanced Features
  crossLinguisticComparisons: {
    concept: string;
    languageDifferences: {
      romanticLanguages: {
        differences: string[];
        challenges: string[];
      };
      germanicLanguages: {
        differences: string[];
        challenges: string[];
      };
      asianLanguages: {
        differences: string[];
        challenges: string[];
      };
    };
  };

  pragmaticConsiderations: {
    concept: string;
    registerAwareness: {
      formal: {
        characteristics: string;
        examples: string[];
      };
      academic: {
        characteristics: string;
        examples: string[];
      };
      literary: {
        characteristics: string;
        examples: string[];
      };
    };
  };

  pedagogicalStrategies: {
    concept: string;
    teachingApproaches: {
      conceptualApproach: {
        strategy: string;
        techniques: string[];
      };
      contrastiveApproach: {
        strategy: string;
        techniques: string[];
      };
      contextualApproach: {
        strategy: string;
        techniques: string[];
      };
    };
  };

  assessmentCriteria: {
    concept: string;
    evaluationAspects: {
      accuracy: string;
      appropriateness: string;
      sophistication: string;
      registerAwareness: string;
    };
    proficiencyIndicators: {
      A1: string;
      A2: string;
      B1: string;
      B2: string;
      C1: string;
      C2: string;
    };
  };

  // References and Resources
  enhancedReferences?: {
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

export interface adverbsOfFrequencyType {
  topic: string;
  level: string;
  definition: string;
  vietnameseDefinition: string;

  types: {
    definiteFrequency: {
      definition: string;
      vietnameseDefinition: string;
      examples: string[];
    };
    indefiniteFrequency: {
      definition: string;
      vietnameseDefinition: string;
      examplesOrdered: Array<{
        adverb: string;
        meaning: string;
        frequency: string;
      }>;
    };
  };

  positionRules: {
    presentSimple: string;
    presentSimpleExamples: string[];
    modalVerbs: string;
    modalVerbExamples: string[];
    auxiliaryVerbs: string;
    auxiliaryExamples: string[];
    negativeSentences: string;
    negativeExamples: string[];
    questions: string;
    questionExamples: string[];
  };

  adverbs_Of_Frequency_vocab: {
    definition: string;
    frequency_scale: Record<string, number>;
    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };
    position_rules: {
      mid_position: {
        description: string;
        examples: string[];
      };
      after_to_be: {
        description: string;
        examples: string[];
      };
      front_position: {
        description: string;
        examples: string[];
      };
      end_position: {
        description: string;
        examples: string[];
      };
    };
    examples_by_level: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };
    error_patterns: Array<{
      mistake: string;
      correction: string;
      explanation: string;
    }>;
    usage_tips: string[];
    frequency_phrases: {
      daily: string[];
      weekly: string[];
      monthly: string[];
      yearly: string[];
    };
    academic_usage_examples: string[];
  };

  formalityLevels: {
    formal: string[];
    informal: string[];
  };

  specialPatterns: {
    emphaticPlacement: {
      rule: string;
      examples: string[];
    };
    inversion: {
      rule: string;
      examples: string[];
    };
  };

  comparisons: {
    similarMeanings: Array<{
      word1: string;
      word2: string;
      note: string;
    }>;
    contrastExamples: string[];
  };

  collocations: {
    verbPhrases: string[];
    nounPhrases: string[];
  };

  grammarNotes: {
    adverbVsAdjective: string;
    continuousTense: string;
    verbBeException: string;
  };

  spokenVsWritten: {
    spoken: string[];
    written: string[];
  };

  commonMistakes: string[];

  advancedUsage: {
    literaryStyle: string[];
    statisticalReports: string[];
  };

  learningTips: string[];
  visualAidSuggestions: string[];
  relatedTopics: string[];

  cefrLevelMapping: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  references: string[];

  gradableFrequencyAdverbs: {
    definition: string;
    examples: string[];
  };

  stanceAndFrequencyOverlap: {
    definition: string;
    examples: string[];
  };

  placementInComplexStructures: {
    notes: string;
    examples: string[];
  };

  rhetoricalEffect: {
    definition: string;
    examples: string[];
  };

  collocationsAndAcademicUsage: {
    academicCollocations: string[];
    examples: string[];
  };

  variationAcrossRegisters: {
    spokenVsAcademic: {
      spoken: string[];
      academic: string[];
    };
    literaryVsJournalistic: {
      literary: string[];
      journalistic: string[];
    };
  };

  languageFunctions: {
    expressingHabit: string[];
    expressingIrritation: string[];
    expressingPraise: string[];
  };

  culturalNotes: {
    formalityAwareness: string;
    businessContext: string[];
  };

  idiomaticAndFixedExpressions: {
    expressions: string[];
    examples: string[];
  };

  testingTips: {
    ielts: string[];
    toefl: string[];
  };

  commonErrorExpansion: {
    redundancy: string[];
    formConfusion: string[];
    adverbPlacementMistake: string[];
  };

  cognitiveNotes: {
    acquisitionOrder: string;
    interferenceExample: string;
  };

  // Enhanced A1-C2 comprehensive sections
  levelSpecificGuide: {
    A1: {
      description: string;
      keyAdverbs: string[];
      basicUsage: {
        definition: string;
        examples: string[];
      };
      simplePatterns: string[];
      commonMistakes: string[];
      practiceActivities: string[];
    };
    A2: {
      description: string;
      keyAdverbs: string[];
      expandedUsage: {
        definition: string;
        examples: string[];
      };
      questionForms: string[];
      negativePatterns: string[];
      practiceActivities: string[];
    };
    B1: {
      description: string;
      keyAdverbs: string[];
      intermediateUsage: {
        definition: string;
        examples: string[];
      };
      adverbPhrases: string[];
      timeExpressions: string[];
      practiceActivities: string[];
    };
    B2: {
      description: string;
      keyAdverbs: string[];
      advancedPatterns: {
        definition: string;
        examples: string[];
      };
      formalWriting: string[];
      academicUsage: string[];
      practiceActivities: string[];
    };
    C1: {
      description: string;
      keyAdverbs: string[];
      sophisticatedUsage: {
        definition: string;
        examples: string[];
      };
      literaryStyle: string[];
      rhetoricalDevices: string[];
      practiceActivities: string[];
    };
    C2: {
      description: string;
      keyAdverbs: string[];
      masterLevel: {
        definition: string;
        examples: string[];
      };
      nuancedMeanings: string[];
      professionalUsage: string[];
      practiceActivities: string[];
    };
  };

  frequencySemantics: {
    definition: string;
    percentageMapping: Record<string, string>;
    contextualVariations: Array<{
      context: string;
      interpretation: string;
      examples: string[];
    }>;
  };

  syntacticProperties: {
    movementRules: {
      definition: string;
      constraints: string[];
      examples: string[];
    };
    scopeInteraction: {
      definition: string;
      examples: string[];
    };
    negativePolarity: {
      definition: string;
      examples: string[];
    };
  };

  pragmaticAspects: {
    implicature: {
      definition: string;
      examples: string[];
    };
    hedging: {
      definition: string;
      examples: string[];
    };
    emphasis: {
      definition: string;
      examples: string[];
    };
  };

  crossLinguisticComparison: {
    vietnamese: {
      similarities: string[];
      differences: string[];
      interferencePatterns: string[];
    };
    other_languages: Array<{
      language: string;
      notes: string;
    }>;
  };

  corpusFindings: {
    mostFrequentAdverbs: Array<{
      adverb: string;
      frequency_rank: number;
      typical_contexts: string[];
    }>;
    registerDistribution: Record<string, string[]>;
    collocationalPatterns: Array<{
      pattern: string;
      frequency: string;
      examples: string[];
    }>;
  };

  pedagogicalProgression: {
    teachingSequence: string[];
    assessmentCriteria: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
    commonTeachingMistakes: string[];
  };

  comprehensiveReferences: {
    academicBooks: Array<{
      title: string;
      author: string;
      year: string;
      isbn?: string;
      relevantChapters: string[];
    }>;
    researchPapers: Array<{
      title: string;
      authors: string[];
      journal: string;
      year: string;
      doi?: string;
    }>;
    onlineResources: Array<{
      name: string;
      url: string;
      description: string;
      cefr_level: string;
    }>;
    dictionaries: Array<{
      name: string;
      publisher: string;
      type: string;
      url?: string;
    }>;
    corpora: Array<{
      name: string;
      description: string;
      access: string;
    }>;
  };
}

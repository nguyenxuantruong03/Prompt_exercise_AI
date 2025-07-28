export interface degreeAdverbsType {
  topic: string;
  level: string;
  definition: string;
  mainPurpose: string[];

  usageTypes: Array<{
    type: string;
    example: string;
    description: string;
  }>;

  classification: {
    strengthLevels: {
      extreme: string[];
      high: string[];
      medium: string[];
      low: string[];
    };
    limitation: {
      onlyCertainAdverbsForCertainAdjectives: {
        example: string;
        correct: string;
        incorrect: string;
      };
    };
    gradability: {
      gradable: string;
      nonGradable: string;
    };
  };

  commonDegreeAdverbs: {
    positiveIntensifiers: string[];
    downtoners: string[];
    maximizers: string[];
    minimizers: string[];
  };

  degree_Adverbs_vocab: {
    categories: {
      low_degree: string[];
      medium_degree: string[];
      high_degree: string[];
      intensifiers_with_extreme_adjectives: string[];
      mitigating_adverbs: string[];
    };

    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };

    position_rules: {
      before_adjectives: {
        rule: string;
        examples: string[];
      };
      before_adverbs: {
        rule: string;
        examples: string[];
      };
      before_verbs_less_common: {
        rule: string;
        examples: string[];
      };
    };

    usage_examples: string[];

    collocations: Record<string, string[]>;

    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
    }>;

    comparison_table: Array<{
      degree: string;
      adverbs: string[];
    }>;

    stylistic_notes: {
      informal: string[];
      formal: string[];
      spoken: string[];
      academic: string[];
    };

    learning_tips: string[];
  };

  structure: {
    patterns: Array<{
      pattern: string;
      example: string;
    }>;
  };

  timeMarkers: string[];
  recognitionPatterns: string[];
  examples: string[];

  collocations: Record<string, string[]>;

  commonMistakes: Array<{
    mistake: string;
    incorrect: string;
    correct: string;
  }>;

  spellingNotes: string[];

  formalVsInformal: {
    formal: string[];
    informal: string[];
  };

  advancedStructures: Array<{
    structure: string;
    example: string;
  }>;

  learningTips: string[];
  relatedTopics: string[];

  CEFRLevels: {
    A1: {
      examples: string[];
      description: string;
      detailedContent: {
        basicIntensifiers: string[];
        commonAdjectives: string[];
        simplePatterns: string[];
        practicalExamples: string[];
        frequency: string[];
      };
    };
    A2: {
      examples: string[];
      description: string;
      detailedContent: {
        expandedVocabulary: string[];
        basicGradation: string[];
        commonExpressions: string[];
        practicalUsage: string[];
        frequency: string[];
      };
    };
    B1: {
      examples: string[];
      description: string;
      detailedContent: {
        intermediateIntensifiers: string[];
        gradableNonGradable: string[];
        comparativeUsage: string[];
        stylisticVariation: string[];
        frequency: string[];
      };
    };
    B2: {
      examples: string[];
      description: string;
      detailedContent: {
        advancedIntensifiers: string[];
        formalInformalRegister: string[];
        complexStructures: string[];
        nuancedMeaning: string[];
        frequency: string[];
      };
    };
    C1: {
      examples: string[];
      description: string;
      detailedContent: {
        sophisticatedVocabulary: string[];
        academicUsage: string[];
        subtleDistinctions: string[];
        rhetoricalEffects: string[];
        frequency: string[];
      };
    };
    C2: {
      examples: string[];
      description: string;
      detailedContent: {
        masterLevel: string[];
        literaryUsage: string[];
        preciseNuances: string[];
        professionalContext: string[];
        frequency: string[];
      };
    };
  };

  references: string[];
  extendedTypes: Array<{
    type: string;
    description: string;
    examples: string[];
  }>;

  degreeAdverbsWithComparatives: {
    description: string;
    patterns: string[];
    examples: string[];
  };

  collocationIntensityMatrix: {
    description: string;
    table: Array<{
      adjective: string;
      weak: string;
      strong: string;
      extreme: string;
    }>;
  };

  advancedAdverbPhrases: {
    description: string;
    examples: string[];
    usage: string[];
  };

  corpusBasedFrequency: {
    top5MostCommon: string[];
    top5InFormalWriting: string[];
    top5InSpokenEnglish: string[];
  };

  pedagogicalActivities: Array<{
    activity: string;
    description: string;
    example: string[];
  }>;

  nuanceTips: string[];

  culturalNotes: Array<{
    language: string;
    note: string;
    example: string;
  }>;

  crossTopicIntegration: string[];

  comprehensiveA1ToC2Guide: {
    progressionMap: {
      A1ToA2: {
        focus: string[];
        keyTransitions: string[];
        commonErrors: string[];
      };
      A2ToB1: {
        focus: string[];
        keyTransitions: string[];
        commonErrors: string[];
      };
      B1ToB2: {
        focus: string[];
        keyTransitions: string[];
        commonErrors: string[];
      };
      B2ToC1: {
        focus: string[];
        keyTransitions: string[];
        commonErrors: string[];
      };
      C1ToC2: {
        focus: string[];
        keyTransitions: string[];
        commonErrors: string[];
      };
    };
  };

  etymologyAndLinguistics: {
    historicalDevelopment: string[];
    crossLinguisticComparison: string[];
    morphologicalPatterns: string[];
  };

  pragmaticsAndDiscourse: {
    conversationalStrategies: string[];
    politenessMarkers: string[];
    emphasisTechniques: string[];
  };
}

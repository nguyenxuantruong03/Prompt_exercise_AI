export interface emphasizingAdverbsType {
  topic: string;
  vietnameseTopic: string;
  level: string;
  definition: string;
  vietnameseDefinition: string;

  // Academic References
  references: {
    books: Array<{
      title: string;
      author: string;
      year: number;
      pages?: string;
      isbn?: string;
    }>;
    websites: Array<{
      title: string;
      url: string;
      description: string;
    }>;
    academicSources: Array<{
      title: string;
      author: string;
      journal?: string;
      year: number;
    }>;
  };

  // Level-based Learning Structure
  levelBasedLearning: {
    A1: {
      coreAdverbs: string[];
      basicStructures: Array<{
        pattern: string;
        example: string;
        vietnamese: string;
      }>;
      commonUsage: Array<{
        adverb: string;
        usage: string;
        example: string;
        vietnamese: string;
      }>;
      fundamentalRules: string[];
    };
    A2: {
      expandedAdverbs: string[];
      newStructures: Array<{
        pattern: string;
        example: string;
        vietnamese: string;
      }>;
      intensity: Array<{
        weak: string[];
        moderate: string[];
        strong: string[];
      }>;
      commonCollocations: Array<{
        adverb: string;
        collocates: string[];
        examples: string[];
      }>;
    };
    B1: {
      intermediateAdverbs: string[];
      complexStructures: Array<{
        pattern: string;
        example: string;
        vietnamese: string;
        usage: string;
      }>;
      positionVariations: Array<{
        position: string;
        rule: string;
        examples: string[];
      }>;
      contrastiveUsage: Array<{
        adverb1: string;
        adverb2: string;
        difference: string;
        examples: string[];
      }>;
    };
    B2: {
      advancedAdverbs: string[];
      formalStructures: Array<{
        pattern: string;
        example: string;
        vietnamese: string;
        register: string;
      }>;
      emphasisTechniques: Array<{
        technique: string;
        description: string;
        examples: string[];
      }>;
      academicUsage: Array<{
        context: string;
        adverbs: string[];
        examples: string[];
      }>;
    };
    C1: {
      sophisticatedAdverbs: string[];
      inversionStructures: Array<{
        pattern: string;
        example: string;
        vietnamese: string;
        condition: string;
      }>;
      literaryDevices: Array<{
        device: string;
        description: string;
        examples: string[];
      }>;
      registerVariation: Array<{
        register: string;
        adverbs: string[];
        characteristics: string[];
      }>;
    };
    C2: {
      expertAdverbs: string[];
      rhetoricalDevices: Array<{
        device: string;
        description: string;
        examples: string[];
        effect: string;
      }>;
      nuancedUsage: Array<{
        context: string;
        subtleties: string[];
        examples: string[];
      }>;
      masteryCriteria: string[];
    };
  };

  // Comprehensive Usage Patterns
  usage: {
    basicUsage: Array<{
      structure: string;
      example: string;
      meaning: string;
    }>;
    positions: string[];
    functions: string[];
  };

  // Vocabulary Organization
  emphasizing_Adverbs_vocab: {
    categories: {
      emphasis_on_verbs: string[];
      emphasis_on_adjectives: string[];
      emphasis_on_sentences: string[];
      literary_or_formal: string[];
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
      [key: string]: {
        rule: string;
        example: string;
      };
    };
    usage_examples: string[];
    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
    }>;
    comparison: {
      ordinary_adverbs: string[];
      emphasizing_adverbs: string[];
      note: string;
    };
    stylistic_notes: {
      informal_common: string[];
      formal_written: string[];
      spoken_emphasis: string[];
      literary_usage: string[];
    };
    learning_tips: string[];
  };

  // Detailed Categories
  categories: {
    [key: number]: {
      name: string;
      description?: string;
      examples: string[];
      structureNote?: string;
      adverbs?: string[];
      sentences: string[];
      compatibleAdjectives?: {
        [adverb: string]: string[];
      };
      sampleVerbs?: {
        [adverb: string]: string[];
      };
      structures?: string[];
    };
  };

  // Common Mistakes and Corrections
  commonMistakes: Array<{
    mistake: string;
    correction: string;
    example: string;
  }>;

  // Advanced Notes
  advancedNotes: {
    emphasisByRepetition: {
      description: string;
      example: string;
    };
    useInLiteraryEnglish: {
      note: string;
      example: string;
    };
  };

  // Additional Types for Comprehensive Coverage
  additionalTypes: {
    [key: number]: {
      name: string;
      description: string;
      examples: string[];
      sentences: string[];
      notes?: string[];
      patterns?: string[];
      structureNote?: string;
      collocations?: {
        [adverb: string]: string[];
      };
      usageNote?: string;
    };
  };

  // Learning Tips
  emphasisTips: {
    [key: number]: string;
  };

  // Related Topics
  relatedTopics: string[];

  // Comprehensive Error Analysis
  errorAnalysis: {
    byLevel: {
      [level: string]: Array<{
        errorType: string;
        commonMistakes: string[];
        corrections: string[];
        preventionTips: string[];
      }>;
    };
    fossilizedErrors: Array<{
      error: string;
      why: string;
      correction: string;
      drillSuggestion: string;
    }>;
  };

  // Cultural and Contextual Usage
  culturalContext: {
    britishVsAmerican: Array<{
      context: string;
      british: string[];
      american: string[];
      examples: string[];
    }>;
    formalVsInformal: Array<{
      situation: string;
      formal: string[];
      informal: string[];
      examples: string[];
    }>;
    generationalDifferences: Array<{
      generation: string;
      preferredAdverbs: string[];
      examples: string[];
    }>;
  };

  // Assessment Criteria
  assessmentCriteria: {
    [level: string]: {
      canDo: string[];
      keyIndicators: string[];
      commonGaps: string[];
    };
  };
}

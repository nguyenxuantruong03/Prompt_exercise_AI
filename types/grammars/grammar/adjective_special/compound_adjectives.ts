export interface compoundAdjectivesType {
  // Core Definition and Concept
  compoundAdjectivesDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Structures
  A1: {
    definition: string;
    basicPatterns: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    physicalDescriptions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    fundamentalRules: {
      concept: string;
      rules: string[];
      examples: string[];
    };
  };

  A2: {
    definition: string;
    expandedPatterns: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    measurementCompounds: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    temporalDescriptions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    hyphenationRules: {
      concept: string;
      rules: string[];
      examples: string[];
    };
  };

  B1: {
    definition: string;
    participialCompounds: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    personalityTraits: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    idiomaticExpressions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    contextualUsage: {
      concept: string;
      contexts: string[];
      examples: string[];
    };
  };

  B2: {
    definition: string;
    professionalCompounds: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    technicalDescriptions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    intensityModifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    registerConsiderations: {
      concept: string;
      registers: string[];
      examples: string[];
    };
  };

  C1: {
    definition: string;
    sophisticatedCompounds: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    metaphoricalUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    academicWriting: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    stylisticEffects: {
      concept: string;
      techniques: string[];
      examples: string[];
    };
  };

  C2: {
    definition: string;
    literaryCompounds: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    poeticDevices: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    neologisms: {
      concept: string;
      patterns: string[];
      examples: string[];
      techniques: string[];
    };
    rhetoricalApplications: {
      concept: string;
      applications: string[];
      examples: string[];
    };
  };

  // Keep all existing structure
  topic: string;
  definition: string;
  levels: {
    A1: {
      description: string;
      usageTypes: string[];
      examples: string[];
      notes: string[];
      recognitionPatterns: string[];
      commonMistakes: string[];
      timeMarkers: string[];
    };
    A2: {
      description: string;
      usageTypes: string[];
      examples: string[];
      notes: string[];
      recognitionPatterns: string[];
      commonMistakes: string[];
      timeMarkers: string[];
    };
    B1: {
      description: string;
      usageTypes: string[];
      examples: string[];
      notes: string[];
      recognitionPatterns: string[];
      commonMistakes: string[];
      timeMarkers: string[];
    };
    B2: {
      description: string;
      usageTypes: string[];
      examples: string[];
      notes: string[];
      recognitionPatterns: string[];
      commonMistakes: string[];
      timeMarkers: string[];
    };
    C1: {
      description: string;
      usageTypes: string[];
      examples: string[];
      notes: string[];
      recognitionPatterns: string[];
      commonMistakes: string[];
      timeMarkers: string[];
    };
    C2: {
      description: string;
      usageTypes: string[];
      examples: string[];
      notes: string[];
      recognitionPatterns: string[];
      commonMistakes: string[];
      timeMarkers: string[];
    };
  };
  compound_Adjectives_vocab: {
    number_based: string[];
    personality_description: string[];
    appearance_description: string[];
    compound_colors: string[];
    time_related: string[];
    adverb_adjective: string[];
    adjective_noun_ed: string[];
    noun_verb_ed: string[];
    participle_based: string[];
    negative_prefixes: string[];
    idiomatic_or_metaphoric: string[];
    CEFR_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
  };
  structurePatterns: string[];
  spellingRules: string[];
  commonMistakesGlobal: string[];
  learningTips: string[];
  advancedUsageExamples: string[];
  relatedGrammarTopics: string[];
  references: string[];
}

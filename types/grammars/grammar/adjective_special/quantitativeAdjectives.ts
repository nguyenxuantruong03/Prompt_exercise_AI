export interface quantitativeAdjectivesType {
  id: number;
  topic: string;
  definition: string;
  vietnameseDefinition: string;
  level: string;
  usageNote: string;

  quantitative_Adjectives_vocab: {
    definite_quantity: string[];
    indefinite_quantity: string[];
    large_quantity: string[];
    small_quantity: string[];
    fractional_quantity: string[];
    universal_quantity: string[];
    distributive_quantity: string[];
    approximate_quantity: string[];
    numeric_modifiers: string[];

    CEFR_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };

    usage_notes: {
      definitions: {
        quantitative_adjective: string;
      };
      rule: string;
      examples: {
        good: string[];
        wrong: string[];
      };
    };
  };

  examples: string[];

  types: {
    countable: {
      description: string;
      adjectives: string[];
      examples: string[];
    };
    uncountable: {
      description: string;
      adjectives: string[];
      examples: string[];
    };
    both: {
      description: string;
      adjectives: string[];
      examples: string[];
    };
  };

  classificationByDetail: {
    determiners: {
      description: string;
      list: string[];
    };
    intensifiers: {
      description: string;
      list: string[];
    };
    modifiers: {
      description: string;
      list: string[];
    };
  };

  advancedUsage: {
    comparative: string[];
    superlative: string[];
    formalAlternatives: Array<{
      informal: string;
      formal: string;
    }>;
    inversionStructures: string[];
    collocations: string[];
  };

  commonMistakes: Array<{
    mistake: string;
    correction: string;
    explanation: string;
  }>;

  tips: string[];

  proficiencyLevels: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  references: string[];

  advancedQuantifiers: {
    academic: string[];
    scientific: string[];
    philosophical: string[];
  };

  literaryUsage: {
    poeticQuantifiers: string[];
    exampleSentences: string[];
  };

  idiomaticExpressions: {
    list: string[];
    examples: string[];
  };

  legalTechnicalQuantifiers: {
    formalAdjectives: string[];
    examplePhrases: string[];
  };

  collocationExpansions: {
    combinations: string[];
  };

  contrastiveStructures: {
    examples: string[];
  };

  toneAndStyleImpact: {
    notes: string[];
  };

  CEFRVocabularyExtension: {
    C1: string[];
    C2: string[];
  };

  translationNuances: {
    note: string;
    examples: {
      [key: string]: string;
    };
  };

  // New comprehensive sections for complete A1-C2 coverage
  detailedCEFRBreakdown: {
    A1: {
      essentialQuantifiers: string[];
      basicDefinitions: { [key: string]: string };
      simpleExamples: string[];
      commonErrors: Array<{
        error: string;
        correction: string;
        explanation: string;
      }>;
      practicePatterns: string[];
    };
    A2: {
      expandedQuantifiers: string[];
      comparativeStructures: string[];
      negativeQuantifiers: string[];
      contextualUsage: string[];
      typicalMistakes: Array<{
        error: string;
        correction: string;
        explanation: string;
      }>;
    };
    B1: {
      intermediateQuantifiers: string[];
      complexStructures: string[];
      formalInformalDistinctions: Array<{
        formal: string;
        informal: string;
        context: string;
      }>;
      advancedExamples: string[];
      nuancedMeanings: { [key: string]: string };
    };
    B2: {
      sophisticatedQuantifiers: string[];
      academicUsage: string[];
      preciseMeanings: { [key: string]: string };
      stylisiticChoices: Array<{
        quantifier: string;
        tone: string;
        usage: string;
      }>;
      complexSentenceStructures: string[];
    };
    C1: {
      advancedQuantifiers: string[];
      academicWritingQuantifiers: string[];
      technicalUsage: string[];
      subtleDistinctions: { [key: string]: string };
      professionalContexts: string[];
      literaryExpressions: string[];
    };
    C2: {
      expertLevelQuantifiers: string[];
      specialized_terminology: string[];
      philosophical_mathematical: string[];
      literary_rhetorical: string[];
      archaic_historical: string[];
      native_level_nuances: { [key: string]: string };
      masterful_usage_examples: string[];
    };
  };

  comprehensiveGrammarRules: {
    positionRules: {
      beforeNoun: string[];
      afterNoun: string[];
      predicatePosition: string[];
      rules: string[];
    };
    agreementRules: {
      singular: string[];
      plural: string[];
      uncountable: string[];
      exceptions: string[];
    };
    combinationRules: {
      allowedCombinations: Array<{
        quantifiers: string[];
        example: string;
        explanation: string;
      }>;
      forbidden_combinations: Array<{
        incorrect: string;
        correct: string;
        reason: string;
      }>;
    };
  };

  semanticCategories: {
    exactness: {
      precise: string[];
      approximate: string[];
      vague: string[];
    };
    scale: {
      minimal: string[];
      small: string[];
      moderate: string[];
      large: string[];
      maximal: string[];
    };
    subjectivity: {
      objective: string[];
      subjective: string[];
      emotional: string[];
    };
  };

  crossLinguisticComparisons: {
    englishSpecific: string[];
    universalConcepts: string[];
    vietnameseEquivalents: { [key: string]: string };
    translationChallenges: Array<{
      english: string;
      vietnamese: string;
      difficulty: string;
      notes: string;
    }>;
  };

  contextualApplications: {
    academic_writing: {
      recommended: string[];
      avoid: string[];
      examples: string[];
    };
    business_communication: {
      formal: string[];
      informal: string[];
      examples: string[];
    };
    everyday_conversation: {
      common: string[];
      regional: string[];
      examples: string[];
    };
    literary_artistic: {
      poetic: string[];
      prose: string[];
      examples: string[];
    };
  };

  pedagogicalNotes: {
    teachingSequence: string[];
    commonLearnerDifficulties: string[];
    effectiveExplanations: { [key: string]: string };
    memorization_techniques: string[];
    assessment_criteria: string[];
  };

  historicalDevelopment: {
    etymology: { [key: string]: string };
    evolution: string[];
    modern_changes: string[];
  };

  dialectalVariations: {
    british_american: Array<{
      british: string;
      american: string;
      notes: string;
    }>;
    regional_differences: Array<{
      region: string;
      variations: string[];
      examples: string[];
    }>;
  };

  advancedApplications: {
    research_writing: string[];
    technical_documentation: string[];
    legal_language: string[];
    medical_terminology: string[];
    scientific_discourse: string[];
  };

  comprehensiveReferences: {
    authoritative_grammars: Array<{
      title: string;
      author: string;
      year: string;
      pages: string;
      isbn: string;
      relevance: string;
    }>;
    academic_papers: Array<{
      title: string;
      authors: string[];
      journal: string;
      year: string;
      doi: string;
      summary: string;
    }>;
    online_resources: Array<{
      title: string;
      url: string;
      description: string;
      credibility: string;
    }>;
    dictionaries: Array<{
      name: string;
      type: string;
      specific_relevance: string;
    }>;
    language_corpora: Array<{
      name: string;
      description: string;
      access: string;
    }>;
  };
}

export interface adjectivesUsedAsNounsType {
  // Core definition and concept
  adjectivesUsedAsNounsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Structures (A1-C2)
  A1: {
    definition: string;
    basicGroupReferences: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    simpleNationalities: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    basicGrammarRules: {
      concept: string;
      rules: string[];
      examples: string[];
    };
  };

  A2: {
    definition: string;
    expandedGroupReferences: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    physicalConditions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    moreNationalities: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    verbAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
  };

  B1: {
    definition: string;
    socialGroups: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    employmentStatus: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    basicAbstractConcepts: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    comparativeSuperlative: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  B2: {
    definition: string;
    abstractConcepts: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    moralCategories: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    legalAndFormalTerms: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    registerConsiderations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C1: {
    definition: string;
    philosophicalConcepts: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    literaryUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    academicDiscourse: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    sophisticatedAbstractions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C2: {
    definition: string;
    literaryAndPoetic: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    philosophicalAbstractions: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    aestheticConcepts: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    rhetoricAndPersonification: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // Original structure preserved
  topic: string;
  level: string;
  definition: string;
  usageNote: string;
  coreForms: {
    structure: string[];
    examples: string[];
  };

  mainCategories: {
    [key: string]: {
      type: string;
      level: string;
      explanation: string;
      examples: string[];
      grammarRules?: string[];
      notes?: string[];
      advancedStructures?: string[];
      usageContext?: string;
    };
  };

  advancedNotes: {
    formality: {
      formalUse: string[];
      informalUse: string[];
    };
    grammarAndVerbAgreement: {
      rule: string;
      example: string;
      exception: string;
    };
    countability: {
      rule: string;
      wrongExample: string;
      correction: string;
    };
    determiners: {
      allowed: string;
      notAllowed: string;
      workaround: string[];
    };
  };

  adjectives_Used_As_Nouns_vocab: {
    definition: string;
    core_structure: string[];
    used_for: {
      groups_of_people: string[];
      nationalities_plural_form: string[];
      abstract_concepts: string[];
      social_or_moral_groups: string[];
    };
    comparative_and_superlative: {
      structure: string;
      examples: string[];
    };
    CEFR_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
    grammar_rules: {
      agreement: string;
      no_article: string;
      abstract_use: string;
    };
    examples: {
      people_group: string[];
      nationality_group: string[];
      abstract_noun_use: string[];
      moral_group: string[];
    };
  };

  usageLevels: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  comparison: {
    similarStructure: Array<{
      type: string;
      examples: string[];
      note: string;
    }>;
  };

  commonMistakes: Array<{
    mistake: string;
    correction: string;
  }>;

  learningTips: string[];

  references: string[];

  advancedExtensions: {
    [key: string]: {
      type: string;
      level?: string;
      explanation?: string;
      examples?: string[];
      usageContext?: string;
      comparison?: Array<{
        adjective: string;
        adjectiveAsNoun: string;
        suffixNoun: string;
        note: string;
      }>;
      note?: string;
      usage?: string;
      commonErrors?: string[];
      advancedNote?: string;
      grammarNote?: string;
    };
  };

  // Enhanced Features
  semanticCategories: {
    concept: string;
    peopleGroups: {
      socialClass: {
        concept: string;
        examples: string[];
      };
      physicalCondition: {
        concept: string;
        examples: string[];
      };
      ageGroups: {
        concept: string;
        examples: string[];
      };
      employmentStatus: {
        concept: string;
        examples: string[];
      };
    };
    abstractConcepts: {
      philosophical: {
        concept: string;
        examples: string[];
      };
      aesthetic: {
        concept: string;
        examples: string[];
      };
      moral: {
        concept: string;
        examples: string[];
      };
      temporal: {
        concept: string;
        examples: string[];
      };
    };
  };

  crossLinguisticComparisons: {
    concept: string;
    languageDifferences: {
      romanticLanguages: {
        similarities: string[];
        differences: string[];
        challenges: string[];
      };
      germanicLanguages: {
        similarities: string[];
        differences: string[];
        challenges: string[];
      };
      asianLanguages: {
        similarities: string[];
        differences: string[];
        challenges: string[];
      };
    };
  };

  registerAndStyle: {
    concept: string;
    formalRegister: {
      characteristics: string;
      examples: string[];
      contexts: string[];
    };
    literaryRegister: {
      characteristics: string;
      examples: string[];
      contexts: string[];
    };
    journalisticRegister: {
      characteristics: string;
      examples: string[];
      contexts: string[];
    };
    academicRegister: {
      characteristics: string;
      examples: string[];
      contexts: string[];
    };
  };

  pragmaticConsiderations: {
    concept: string;
    politicalCorrectness: {
      guidelines: string[];
      preferredTerms: string[];
      avoidedTerms: string[];
    };
    culturalSensitivity: {
      considerations: string[];
      examples: string[];
    };
    contextualAppropriateness: {
      formal: string[];
      informal: string[];
      academic: string[];
    };
  };

  pedagogicalStrategies: {
    concept: string;
    teachingApproaches: {
      categoryApproach: {
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
      communicativeApproach: {
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
      range: string;
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

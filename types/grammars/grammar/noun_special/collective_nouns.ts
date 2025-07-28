export interface CollectiveNounsType {
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    examples: string[];
    detailed_explanation: string;
    etymology: string;
    cross_linguistic_perspective: string;
  };

  collective_nouns_vocab: {
    Animals: string[];
    People: string[];
    "Things & Objects": string[];
    "Abstract Ideas": string[];
    "Academic & Literary": string[];
    "Business & Professional": string[];
    "Nature & Environment": string[];
    "Food & Drinks": string[];
    "Technology & Science": string[];
    "Sports & Games": string[];
    "Musical & Arts": string[];
    Transportation: string[];
    "Specialized & Rare": string[];
  };

  cefrLevels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  levelSpecificDetails: {
    A1: {
      focus: string;
      key_concepts: string[];
      vocabulary: string[];
      examples: string[];
      common_usage: string[];
    };
    A2: {
      focus: string;
      key_concepts: string[];
      vocabulary: string[];
      examples: string[];
      common_usage: string[];
    };
    B1: {
      focus: string;
      key_concepts: string[];
      vocabulary: string[];
      examples: string[];
      common_usage: string[];
    };
    B2: {
      focus: string;
      key_concepts: string[];
      vocabulary: string[];
      examples: string[];
      common_usage: string[];
    };
    C1: {
      focus: string;
      key_concepts: string[];
      vocabulary: string[];
      examples: string[];
      common_usage: string[];
    };
    C2: {
      focus: string;
      key_concepts: string[];
      vocabulary: string[];
      examples: string[];
      common_usage: string[];
    };
  };

  forms: {
    basic: string;
    with_of: string;
    with_quantifier: string;
    with_article: string;
    possessive: string;
    compound: string;
    metaphorical: string;
  };

  usage: Array<{
    type: string;
    description: string;
    examples: string[];
    level: string;
    frequency: string;
    register: string;
  }>;

  examples: {
    basic: {
      singular: string;
      plural: string;
      context: string;
    };
    with_of: {
      singular: string;
      plural: string;
      context: string;
    };
    with_quantifier: {
      singular: string;
      plural: string;
      context: string;
    };
    idiomatic: {
      singular: string;
      plural: string;
      context: string;
    };
    technical: {
      singular: string;
      plural: string;
      context: string;
    };
    formal: {
      singular: string;
      plural: string;
      context: string;
    };
    literary: {
      singular: string;
      plural: string;
      context: string;
    };
  };

  practiceTypes: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  commonMistakes: {
    beginners: string[];
    intermediate: string[];
    advanced: string[];
    expert: string[];
  };

  recognition: string[];

  timeMarkers: string[];

  pronounChanges: {
    basic: Record<string, string>;
    advanced: Record<string, string>;
    demonstrative: Record<string, string>;
    relative: Record<string, string>;
  };

  reportingVerbs: string[];

  exercises: {
    recognition: {
      description: string;
      difficulty: string;
      examples: string[];
    };
    correction: {
      description: string;
      difficulty: string;
      examples: string[];
    };
    production: {
      description: string;
      difficulty: string;
      examples: string[];
    };
    transformation: {
      description: string;
      difficulty: string;
      examples: string[];
    };
  };

  notes: string[];

  culturalContexts: {
    daily_life: {
      description: string;
      examples: string[];
    };
    academic: {
      description: string;
      examples: string[];
    };
    idiomatic: {
      description: string;
      examples: string[];
    };
    professional: {
      description: string;
      examples: string[];
    };
    literary: {
      description: string;
      examples: string[];
    };
  };

  specialCases: {
    animal_groups: {
      description: string;
      examples: string[];
    };
    dialectal: {
      description: string;
      examples: Array<{
        context: string;
        singular: string;
        plural: string;
      }>;
    };
    metaphorical: {
      description: string;
      examples: string[];
    };
    dual_use: {
      description: string;
      examples: Array<{
        word: string;
        collective: string;
        countable: string;
      }>;
    };
    technical: {
      description: string;
      examples: string[];
    };
    historical: {
      description: string;
      examples: string[];
    };
  };

  etymology: {
    origin: string;
    development: string;
    modernUsage: string;
    historical_evolution: string;
    linguistic_patterns: string[];
  };

  crossLinguistic: {
    similarities: string;
    differences: string;
    learnerChallenges: string;
    comparison_languages: Array<{
      language: string;
      similarities: string[];
      differences: string[];
    }>;
  };

  vocabulary: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  grammaticalPatterns: {
    article_usage: {
      correct: string[];
      incorrect: string[];
    };
    verb_agreement: {
      correct: string[];
      incorrect: string[];
    };
    quantifiers: {
      correct: string[];
      incorrect: string[];
    };
    of_phrases: {
      correct: string[];
      incorrect: string[];
    };
    possessive_forms: {
      correct: string[];
      incorrect: string[];
    };
    compound_forms: {
      correct: string[];
      incorrect: string[];
    };
  };

  usageContexts: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  errorPatterns: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  learningStrategies: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  verbAgreementRules: {
    british_english: {
      general_rule: string;
      exceptions: string[];
      examples: string[];
    };
    american_english: {
      general_rule: string;
      exceptions: string[];
      examples: string[];
    };
    contextual_factors: Array<{
      factor: string;
      explanation: string;
      examples: string[];
    }>;
  };

  pragmaticUsage: {
    formal_register: {
      description: string;
      examples: string[];
      contexts: string[];
    };
    informal_register: {
      description: string;
      examples: string[];
      contexts: string[];
    };
    academic_register: {
      description: string;
      examples: string[];
      contexts: string[];
    };
    literary_register: {
      description: string;
      examples: string[];
      contexts: string[];
    };
  };

  references: {
    academic_sources: Array<{
      title: string;
      author: string;
      publisher: string;
      year: number;
      description: string;
      relevant_chapters?: string[];
    }>;
    online_resources: Array<{
      title: string;
      url: string;
      description: string;
      reliability: string;
    }>;
    dictionaries: Array<{
      name: string;
      publisher: string;
      description: string;
      online_access?: string;
    }>;
    grammar_books: Array<{
      title: string;
      author: string;
      publisher: string;
      year: number;
      level: string;
      description: string;
    }>;
    research_papers: Array<{
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi?: string;
      summary: string;
    }>;
  };

  assessmentCriteria: {
    A1: {
      recognition: string[];
      production: string[];
      accuracy_threshold: string;
    };
    A2: {
      recognition: string[];
      production: string[];
      accuracy_threshold: string;
    };
    B1: {
      recognition: string[];
      production: string[];
      accuracy_threshold: string;
    };
    B2: {
      recognition: string[];
      production: string[];
      accuracy_threshold: string;
    };
    C1: {
      recognition: string[];
      production: string[];
      accuracy_threshold: string;
    };
    C2: {
      recognition: string[];
      production: string[];
      accuracy_threshold: string;
    };
  };

  pedagogicalApproaches: {
    visual_learning: {
      techniques: string[];
      materials: string[];
      effectiveness: string;
    };
    contextual_learning: {
      techniques: string[];
      materials: string[];
      effectiveness: string;
    };
    pattern_recognition: {
      techniques: string[];
      materials: string[];
      effectiveness: string;
    };
    communicative_approach: {
      techniques: string[];
      materials: string[];
      effectiveness: string;
    };
  };
}

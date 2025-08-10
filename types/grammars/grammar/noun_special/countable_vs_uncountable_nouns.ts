export interface CountableVsUncountableNounsType {
  id: number;
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    examples_countable: string[];
    examples_uncountable: string[];
  };
  countable_nouns: string[];
  uncountable_nouns: string[];
  dual_usage_nouns: {
    word: string;
    countable: string;
    uncountable: string;
  }[];
  cefrLevels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
  levelBasedLearning: {
    A1: {
      description: string;
      essential_countable: string[];
      essential_uncountable: string[];
      key_concepts: string[];
      basic_rules: string[];
      common_expressions: string[];
      learning_objectives: string[];
    };
    A2: {
      description: string;
      expanded_countable: string[];
      expanded_uncountable: string[];
      quantifier_usage: string[];
      partitive_expressions: string[];
      daily_contexts: string[];
      learning_objectives: string[];
    };
    B1: {
      description: string;
      academic_countable: string[];
      academic_uncountable: string[];
      abstract_concepts: string[];
      dual_usage_introduction: string[];
      complex_quantifiers: string[];
      learning_objectives: string[];
    };
    B2: {
      description: string;
      professional_countable: string[];
      professional_uncountable: string[];
      technical_vocabulary: string[];
      advanced_dual_usage: string[];
      register_awareness: string[];
      learning_objectives: string[];
    };
    C1: {
      description: string;
      sophisticated_countable: string[];
      sophisticated_uncountable: string[];
      nuanced_distinctions: string[];
      idiomatic_expressions: string[];
      academic_writing: string[];
      learning_objectives: string[];
    };
    C2: {
      description: string;
      mastery_countable: string[];
      mastery_uncountable: string[];
      subtle_variations: string[];
      creative_usage: string[];
      native_like_competence: string[];
      learning_objectives: string[];
    };
  };
  forms: {
    countable: string;
    uncountable: string;
    mixed: string;
  };
  usage: {
    type: string;
    description: string;
    level: string;
  }[];
  examples: {
    countable: {
      singular: string;
      plural: string;
      with_many: string;
      with_few: string;
    };
    uncountable: {
      no_article: string;
      with_some: string;
      with_much: string;
      with_little: string;
    };
    dual_use: {
      countable: string;
      uncountable: string;
      countable2: string;
      uncountable2: string;
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
  };
  recognition: string[];
  timeMarkers: string[];
  pronounChanges: {
    countable: {
      singular: string;
      plural: string;
    };
    uncountable: {
      singular: string;
    };
    dual_use: {
      countable: string;
      uncountable: string;
    };
  };
  reportingVerbs: string[];
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
  };
  specialCases: {
    dual_use: {
      description: string;
      examples: {
        word: string;
        countable: string;
        uncountable: string;
      }[];
    };
  };
  etymology: {
    origin: string;
    development: string;
    modernUsage: string;
  };
  crossLinguistic: {
    similarities: string;
    differences: string;
    learnerChallenges: string;
  };
  vocabulary: {
    countable: string[];
    uncountable: string[];
  };
  grammaticalPatterns: {
    article_usage: {
      countable: string[];
      uncountable: string[];
    };
    verb_agreement: {
      countable: string[];
      uncountable: string[];
    };
    quantifiers: {
      countable: string[];
      uncountable: string[];
    };
    partitives: {
      uncountable: string[];
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
  references: {
    books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn: string;
      relevance: string;
    }[];
    websites: {
      title: string;
      url: string;
      description: string;
      credibility: string;
    }[];
    academic_papers: {
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi: string;
      summary: string;
    }[];
  };
  pedagogicalApproaches: {
    traditional: string[];
    communicative: string[];
    task_based: string[];
    content_based: string[];
    corpus_based: string[];
  };
  assessmentCriteria: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };
  advancedConcepts: {
    register_variation: {
      formal: string[];
      informal: string[];
      academic: string[];
      technical: string[];
    };
    semantic_fields: {
      abstract_concepts: string[];
      concrete_objects: string[];
      substances: string[];
      activities: string[];
      emotions: string[];
    };
    collocational_patterns: {
      strong_collocations: string[];
      weak_collocations: string[];
      fixed_expressions: string[];
    };
  };
}

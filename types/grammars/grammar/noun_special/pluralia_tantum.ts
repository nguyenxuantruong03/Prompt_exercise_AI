export interface pluraliaTantumType {
  id: number;
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    technical_definition: string;
    historical_development: string;
    syntactic_behavior: string;
    morphological_properties: string;
    semantic_properties: string;
    examples: string[];
  };

  pluralia_tantum_vocab: {
    clothing: string[];
    tools_in_pairs: string[];
    personal_items: string[];
    academic_terms: string[];
    customs_and_culture: string[];
    games_and_activities: string[];
    geography_and_places: string[];
    legal_terms: string[];
    family_and_relationships: string[];
    ceremonies_and_rituals: string[];
    constructions_and_structures: string[];
    financial_terms: string[];
    abstract_collectives: string[];
    slang_and_informal: string[];
    medical_terms: string[];
    scientific_terms: string[];
    technology_and_modern: string[];
    food_and_nutrition: string[];
    military_and_defense: string[];
    literature_and_arts: string[];
  };

  cefrLevels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  learningProgression: {
    A1: {
      focus: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      learning_outcomes: string[];
      recognition_strategies: string[];
    };
    A2: {
      focus: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      learning_outcomes: string[];
      recognition_strategies: string[];
    };
    B1: {
      focus: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      learning_outcomes: string[];
      recognition_strategies: string[];
    };
    B2: {
      focus: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      learning_outcomes: string[];
      recognition_strategies: string[];
    };
    C1: {
      focus: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      learning_outcomes: string[];
      recognition_strategies: string[];
    };
    C2: {
      focus: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      learning_outcomes: string[];
      recognition_strategies: string[];
    };
  };

  forms: {
    basic: string;
    with_quantifier: string;
    with_article: string;
    no_singular: string;
    specialized_forms: string;
    archaic_forms: string;
  };

  usage: string[];

  examples: {
    basic: string[];
    with_quantifier: string[];
    idiomatic: string[];
    academic: string[];
    technical: string[];
    literary: string[];
    formal_writing: string[];
    business_context: string[];
  };

  practiceTypes: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  commonMistakes: {
    beginners: string[];
    intermediate: string[];
    advanced: string[];
    native_speaker_errors: string[];
  };

  recognition: string[];
  timeMarkers: string[];
  pronounVerbAgreement: {
    basic: string;
    advanced: string;
    complex_structures: string;
  };

  notes: string[];

  culturalContexts: {
    daily_life: string;
    academic: string;
    idiomatic: string;
    professional: string;
    literary: string;
  };

  specialCases: {
    false_singular: string;
    regional: string;
    archaic: string;
    borrowed_words: string;
    compound_forms: string;
  };

  etymology: {
    origin: string;
    development: string;
    modernUsage: string;
    linguistic_evolution: string;
  };

  crossLinguistic: {
    similarities: string;
    differences: string;
    learnerChallenges: string;
    interference_patterns: string;
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
    article_usage: string;
    verb_agreement: string;
    quantifiers: string;
    determiners: string;
    pronoun_reference: string;
  };

  usageContexts: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  errorPatterns: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  learningStrategies: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  references: {
    academic_sources: {
      title: string;
      author: string;
      publication: string;
      year: number;
      pages?: string;
      description: string;
    }[];
    grammar_books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      chapters: string[];
      description: string;
    }[];
    linguistic_studies: {
      title: string;
      author: string;
      journal: string;
      year: number;
      doi?: string;
      description: string;
    }[];
    online_resources: {
      title: string;
      url: string;
      organization: string;
      last_accessed: string;
      description: string;
    }[];
    dictionaries: {
      title: string;
      publisher: string;
      edition: string;
      year: number;
      description: string;
    }[];
  };

  pedagogicalApproaches: {
    cognitive_linguistics: string;
    corpus_based_learning: string;
    contrastive_analysis: string;
    error_analysis: string;
    usage_based_learning: string;
  };

  assessmentCriteria: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  advancedTopics: {
    semantic_fields: string;
    collocational_patterns: string;
    register_variation: string;
    diachronic_changes: string;
    corpus_findings: string;
  };
}

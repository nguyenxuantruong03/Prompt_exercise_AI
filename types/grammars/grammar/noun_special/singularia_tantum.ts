export interface singulariaTantumType {
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    etymology_background: string;
    cross_linguistic_perspective: string;
    academic_definition: string;
    examples: string[];
  };

  detailed_references: {
    academic_sources: Array<{
      title: string;
      author: string;
      year: number;
      publisher?: string;
      url?: string;
      description: string;
    }>;
    linguistic_studies: Array<{
      researcher: string;
      study_title: string;
      year: number;
      key_findings: string;
    }>;
    grammar_books: Array<{
      title: string;
      author: string;
      edition?: string;
      publisher: string;
      isbn?: string;
      relevant_chapters: string[];
    }>;
  };

  comprehensive_learning_levels: {
    A1: {
      learning_objectives: string[];
      core_vocabulary: string[];
      basic_rules: string[];
      common_contexts: string[];
      fundamental_patterns: string[];
      error_prevention: string[];
    };
    A2: {
      learning_objectives: string[];
      expanded_vocabulary: string[];
      sentence_patterns: string[];
      practical_usage: string[];
      quantifier_introduction: string[];
      common_mistakes_awareness: string[];
    };
    B1: {
      learning_objectives: string[];
      intermediate_vocabulary: string[];
      contextual_usage: string[];
      comparison_with_countables: string[];
      idiomatic_expressions: string[];
      discourse_markers: string[];
    };
    B2: {
      learning_objectives: string[];
      advanced_vocabulary: string[];
      academic_contexts: string[];
      technical_usage: string[];
      formal_writing_applications: string[];
      nuanced_distinctions: string[];
    };
    C1: {
      learning_objectives: string[];
      sophisticated_vocabulary: string[];
      professional_contexts: string[];
      literary_usage: string[];
      specialized_fields: string[];
      stylistic_considerations: string[];
    };
    C2: {
      learning_objectives: string[];
      mastery_vocabulary: string[];
      expert_usage: string[];
      research_contexts: string[];
      cross_disciplinary_applications: string[];
      linguistic_analysis: string[];
    };
  };

  singularia_tantum_vocab: {
    abstract_concepts: string[];
    academic_fields: string[];
    material_substances: string[];
    phenomena_and_nature: string[];
    mass_and_measurement: string[];
    disciplines_and_theories: string[];
    activities_and_events: string[];
    states_and_conditions: string[];
    emotions_and_feelings: string[];
    legal_and_philosophical: string[];
    scientific_and_technical: string[];
    business_and_finance: string[];
    food_and_drink: string[];
    culture_and_language: string[];
    other_concepts: string[];
  };

  detailed_categorization: {
    by_semantic_field: {
      [key: string]: {
        description: string;
        examples: string[];
        level_distribution: {
          A1?: string[];
          A2?: string[];
          B1?: string[];
          B2?: string[];
          C1?: string[];
          C2?: string[];
        };
      };
    };
    by_frequency: {
      high_frequency: string[];
      medium_frequency: string[];
      low_frequency: string[];
      academic_specialized: string[];
    };
    by_origin: {
      latin_origin: string[];
      greek_origin: string[];
      germanic_origin: string[];
      french_origin: string[];
      modern_formations: string[];
    };
  };

  grammatical_properties: {
    verb_agreement: {
      present_tense: string[];
      past_tense: string[];
      perfect_aspects: string[];
      modal_constructions: string[];
    };
    determiner_usage: {
      articles: string[];
      quantifiers: string[];
      possessives: string[];
      demonstratives: string[];
    };
    modification_patterns: {
      adjective_placement: string[];
      prepositional_phrases: string[];
      relative_clauses: string[];
      participial_constructions: string[];
    };
  };

  cefrLevels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  forms: {
    basic: string;
    with_quantifier: string;
    with_article: string;
    no_plural: string;
  };

  usage: string[];

  examples: {
    basic: string[];
    with_quantifier: string[];
    idiomatic: string[];
    academic: string[];
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
  };

  recognition: string[];
  timeMarkers: string[];

  pronounVerbAgreement: {
    basic: string;
    advanced: string;
  };

  exercises: {
    recognition: string;
    correction: string;
    production: string;
  };

  notes: string[];

  culturalContexts: {
    daily_life: string;
    academic: string;
    idiomatic: string;
  };

  specialCases: {
    false_plural: string;
    regional: string;
    archaic: string;
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

  advanced_applications: {
    discourse_analysis: string[];
    stylistic_variation: string[];
    register_awareness: string[];
    pragmatic_considerations: string[];
  };

  assessment_criteria: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };
}

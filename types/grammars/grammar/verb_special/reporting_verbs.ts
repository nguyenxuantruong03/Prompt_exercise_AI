export interface ReportingVerbsType {
  definition: {
    general: string;
    grammatical_function: string;
    academic_use: string;
    linguistic_features: string;
    pragmatic_function: string;
  };

  core_categories: {
    speech: string[];
    mental_state: string[];
    suggestion: string[];
    command: string[];
    agreement: string[];
    accusation: string[];
    encouragement: string[];
    emotional: string[];
    opinion: string[];
    perception: string[];
    communication: string[];
  };

  reporting_verbs_vocab: {
    basic_reporting: string[];
    indirect_speech_verbs: string[];
    academic_reporting: string[];
    persuasive_reporting: string[];
    journalistic_reporting: string[];
    legal_and_official: string[];
    emotional_reporting: string[];
    negative_or_conflict: string[];
    structure_patterns: {
      "verb + that + clause": string[];
      "verb + to + infinitive": string[];
      "verb + object + to + infinitive": string[];
      "verb + gerund (-ing)": string[];
      "verb + object + preposition + -ing": string[];
      "verb + wh-clause": string[];
      "verb + if/whether + clause": string[];
    };
  };

  structures: {
    [key: string]: {
      verbs: string[];
      example: string;
      notes?: string;
      common_mistakes?: string[];
    };
  };

  formality_levels: {
    informal: string[];
    neutral: string[];
    formal: string[];
    academic: string[];
    legal: string[];
  };

  usage_by_level: {
    A1: {
      verbs: string[];
      example: string;
      focus: string;
      key_concepts: string[];
      grammar_patterns: string[];
      vocabulary_size: number;
      learning_objectives: string[];
    };
    A2: {
      verbs: string[];
      example: string;
      focus: string;
      key_concepts: string[];
      grammar_patterns: string[];
      vocabulary_size: number;
      learning_objectives: string[];
    };
    B1: {
      verbs: string[];
      example: string;
      focus: string;
      key_concepts: string[];
      grammar_patterns: string[];
      vocabulary_size: number;
      learning_objectives: string[];
    };
    B2: {
      verbs: string[];
      example: string;
      focus: string;
      key_concepts: string[];
      grammar_patterns: string[];
      vocabulary_size: number;
      learning_objectives: string[];
    };
    C1: {
      verbs: string[];
      example: string;
      focus: string;
      key_concepts: string[];
      grammar_patterns: string[];
      vocabulary_size: number;
      learning_objectives: string[];
    };
    C2: {
      verbs: string[];
      example: string;
      focus: string;
      key_concepts: string[];
      grammar_patterns: string[];
      vocabulary_size: number;
      learning_objectives: string[];
    };
  };

  transformation_rules: {
    tense_backshift: string;
    pronoun_shift: string;
    time_place_shift: string;
    reporting_verb_selection: string;
    modal_changes: string;
    conditionals_in_reported_speech: string;
    questions_to_statements: string;
  };

  academic_reporting_verbs: {
    neutral: string[];
    strong_agreement: string[];
    cautious_agreement: string[];
    disagreement: string[];
    neutrality_hedging: string[];
    critical_analysis: string[];
    presentation_verbs: string[];
  };

  collocations_and_phrases: {
    with_adverbs: string[];
    fixed_expressions: string[];
    prepositional_phrases: string[];
    academic_phrases: string[];
  };

  common_errors: {
    [key: string]: string;
  };

  comparison_chart: {
    [key: string]: {
      object_required: boolean;
      structure: string;
      example: string;
      formality?: string;
      frequency?: string;
    };
  };

  advanced_usage_examples: {
    academic: string;
    legal: string;
    journalistic: string;
    scientific: string;
    literary: string;
    business: string;
  };

  learning_tips: {
    [key: string]: string;
  };

  references: {
    CEFR: string[];
    grammar_books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      relevant_chapters: string[];
    }[];
    dictionaries: {
      name: string;
      url: string;
      description: string;
    }[];
    academic_sources: {
      title: string;
      author: string;
      journal?: string;
      year: number;
      doi?: string;
    }[];
    online_resources: {
      name: string;
      url: string;
      description: string;
    }[];
  };

  advanced_semantics: {
    modal_implications: {
      description: string;
      examples: {
        [key: string]: string;
      };
    };
    interpersonal_attitudes: {
      description: string;
      examples: {
        [key: string]: string;
      };
    };
    evidentiality: {
      description: string;
      examples: {
        [key: string]: string;
      };
    };
    discourse_functions: {
      description: string;
      examples: {
        [key: string]: string;
      };
    };
  };

  semantic_grouping: {
    doubt_and_certainty: string[];
    emotional_response: string[];
    cognitive_processes: string[];
    confrontation_and_defense: string[];
    rhetorical_use: string[];
    evaluation: string[];
    description: string[];
  };

  special_usages_and_exceptions: {
    passive_reporting_verbs: {
      note: string;
      structure: string;
      example: string;
      variations: string[];
    };
    reporting_with_question_forms: {
      indirect_question: string;
      reported_wh_questions: string;
      tag_like_forms: string;
      embedded_questions: string;
    };
    ellipsis_and_reductions: {
      omission: string;
      compressed: string;
      informal_reductions: string[];
    };
    subjunctive_reporting: {
      usage: string;
      structure: string;
      example: string;
      verbs_requiring_subjunctive: string[];
    };
  };

  corpus_insights: {
    frequency_rankings: {
      general_speech: string[];
      academic_writing: string[];
      journalism: string[];
      legal_documents: string[];
      literature: string[];
    };
    collocation_patterns: {
      [key: string]: string[];
    };
    register_distribution: {
      [key: string]: {
        spoken: number;
        written: number;
        formal: number;
        informal: number;
      };
    };
  };

  educational_extensions: {
    compare_tone_and_intent: {
      example: {
        neutral: string;
        formal_assertive: string;
        doubtful: string;
        indirect_hedged: string;
        emphatic: string;
      };
    };
    voice_conversion_practice: {
      exercise: string;
      example: {
        active: string;
        passive: string;
        impersonal: string;
      };
    };
    quotation_integration: {
      direct_quote: string;
      indirect_quote: string;
      partial_quote: string;
      paraphrase: string;
    };
  };

  metacognitive_notes: {
    learning_strategies: string[];
    common_confusions: {
      [key: string]: string;
    };
    memory_techniques: string[];
    self_assessment_criteria: string[];
  };

  contextual_expression: {
    literary_use: {
      description: string;
      examples: string[];
      functions: string[];
      famous_authors_techniques: {
        [key: string]: string;
      };
    };
    journalistic_use: {
      description: string;
      degrees_of_certainty: {
        neutral: string[];
        doubtful_speculative: string[];
        confirmed: string[];
        official: string[];
      };
      examples: string[];
    };
    legal_use: {
      description: string;
      examples: string[];
      precision_requirements: string[];
    };
    scientific_use: {
      description: string;
      examples: string[];
      objectivity_markers: string[];
    };
  };

  exam_focus: {
    ielts_writing_task_2: {
      purpose: string;
      examples: string[];
      scoring_criteria: string[];
    };
    ielts_speaking: {
      purpose: string;
      examples: string[];
      natural_usage_tips: string[];
    };
    cae_cpe_writing: {
      purpose: string;
      examples: string[];
      advanced_structures: string[];
    };
    toeic_toefl: {
      focus: string;
      tip: string;
      common_test_patterns: string[];
    };
  };

  stylistic_variation: {
    tone_management: {
      formal: string[];
      informal: string[];
      cautious: string[];
      emotional: string[];
      authoritative: string[];
    };
    rewriting_practice: {
      original: string;
      variations: {
        formal: string;
        assertive: string;
        cautious: string;
        critical: string;
      };
    };
    tone_alignment: {
      academic: string;
      critical: string;
      neutral: string;
      supportive: string;
    };
  };

  cognitive_processing_and_translation: {
    l1_interference: {
      note: string;
      common_issues: string[];
      example: {
        incorrect: string;
        correct: string;
      };
      language_specific_challenges: {
        [key: string]: string[];
      };
    };
    translation_equivalence: {
      Vietnamese_examples: string[];
      tip: string;
      cultural_considerations: string[];
    };
  };

  intelligent_system_applications: {
    nlp_integration: {
      usage: string;
      applications: string[];
      computational_challenges: string[];
    };
    chatbot_and_ai: {
      implementation: string;
      example: string;
      best_practices: string[];
    };
  };

  assessment_criteria: {
    beginner_competency: string[];
    intermediate_competency: string[];
    advanced_competency: string[];
    mastery_indicators: string[];
  };

  cross_linguistic_comparison: {
    universal_patterns: string[];
    language_specific_features: {
      [key: string]: string[];
    };
    acquisition_order: string[];
  };
}

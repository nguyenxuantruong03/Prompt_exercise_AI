export interface DualUsageNounsType {
  id: number;
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    cross_linguistic_notes: string;
  };

  dual_usage_nouns_vocab: {
    dual_usage_nouns: Array<{
      noun: string;
      countable: string;
      uncountable: string;
    }>;
    pattern_categories: {
      container_substance: string[];
      animal_meat: string[];
      object_material: string[];
      abstract_concrete: string[];
      general_specific: string[];
    };
  };

  foundational_levels: {
    A1: {
      concept_intro: string;
      examples: Array<{
        countable?: string;
        uncountable?: string;
        meaning: string;
      }>;
      usage_tips: string[];
      essential_vocabulary_focus: string[];
      basic_practice_activities: string[];
    };
    A2: {
      expanded_list: string[];
      examples: Array<{
        countable?: string;
        uncountable?: string;
        explanation: string;
      }>;
      learning_strategies: string[];
      extended_pattern_recognition: string[];
      common_contexts: string[];
    };
  };

  intermediate_levels: {
    B1: {
      common_confusion: string[];
      grammatical_effects: string[];
      classroom_focus: string[];
      advanced_examples: Array<{
        context: string;
        countable: string;
        uncountable: string;
      }>;
    };
    B2: {
      list_with_contrasts: Array<{
        noun: string;
        countable: string;
        uncountable: string;
      }>;
      functional_usage: string[];
      sophisticated_applications: string[];
      discourse_patterns: string[];
    };
  };

  advanced_levels: {
    C1: {
      subtle_differences: Array<{
        noun: string;
        uncountable: string;
        countable: string;
      }>;
      collocational_patterns: string[];
      advanced_examples: string[];
      lexical_precision: string;
      register_sensitivity: string[];
      error_avoidance: string[];
    };
    C2: {
      idiomatic_usage: string[];
      discourse_awareness: string[];
      style_and_register: string[];
      transformation_tasks: string[];
      philosophical_discourse: string[];
      creative_applications: string[];
      metalinguistic_awareness: string[];
    };
  };

  recognition_and_clues: {
    countable_clues: string[];
    uncountable_clues: string[];
    context_signals: string[];
    diagnostic_questions: string[];
  };

  typical_errors: {
    errors: string[];
    fixes: string[];
  };

  full_list_common_dual_usage_nouns: string[];

  learning_notes: {
    memorization_tip: string;
    test_yourself: string[];
    classroom_activities: string[];
    learner_reminder: string;
    study_strategies: string[];
    common_learning_stages: string[];
    progress_indicators: string[];
  };

  references: {
    cambridge: string;
    oxford: string;
    longman: string;
    grammar_books: string[];
    academic_sources: string[];
    research_papers: string[];
    online_resources: string[];
    dictionaries: string[];
  };

  linguistic_theory: {
    historical_development: string;
    cognitive_linguistics: string;
    metaphorical_mapping: string;
  };

  conceptual_layering: {
    level_1: string;
    level_2: string;
    level_3: string;
    level_4: string;
  };

  advanced_diagnostic_toolkit: {
    transformation_strategy: string;
    interrogative_testing: string[];
    charting_examples: Array<{
      noun: string;
      countable: string;
      uncountable: string;
    }>;
  };

  grammatical_interactions: {
    tense_variation: string[];
    syntactic_shifts: string[];
    conjunction_effects: string[];
  };

  grammar_traps: {
    trap_1: string;
    trap_2: string;
    trap_3: string;
    trap_4: string;
    advanced_fix: string;
  };

  comparison_with_other_languages: {
    vietnamese: {
      note: string;
      example: string;
    };
    japanese: {
      note: string;
      learner_challenges: string[];
    };
  };

  dual_usage_mastery_tasks: {
    rewrite_tasks: Array<{
      instruction: string;
      original: string;
      rewritten: string;
    }>;
    transformation_chain: string[];
  };

  extended_vocabulary_set: {
    academic_terms: string[];
    colloquial_forms: string[];
    false_friends: Array<{
      noun: string;
      trap: string;
    }>;
  };

  philosophical_dimensions: {
    ontological_insight: string;
    SapirWhorf_effect: string;
    epistemological_relation: string;
  };

  stylistic_variation: {
    literary_usage: {
      metaphorical_switching: string;
      poetic_density: string;
    };
    journalistic_choice: {
      objectification: string;
      abstraction: string;
    };
    academic_precision: {
      disambiguation_required: string;
    };
  };

  dialectal_shifts: {
    British_vs_American: {
      example: string;
      observation: string;
    };
    World_Englishes: {
      Indian_English: string;
      African_English: string;
    };
  };

  corpus_analysis: {
    COCA_insights: {
      top_dual_nouns_by_frequency: string[];
      shift_patterns: string[];
    };
    learner_errors_from_corpus: string[];
  };

  semantic_precision: {
    polysemy_handling: {
      glass: {
        meanings: {
          countable: string;
          uncountable: string;
        };
        semantic_field: string;
        NLP_tagging: string;
      };
      light: {
        meanings: {
          countable: string;
          uncountable: string;
        };
        gradability: string;
      };
    };
  };

  register_analysis: {
    formality_mapping: {
      informal: string[];
      formal: string[];
      ultra_formal: string[];
    };
    tone_control: string;
    rhetoric_usage: string;
  };

  NLP_AI_application: {
    POS_tagging_challenge: string[];
    deep_learning_note: string;
    grammar_checking_models: string[];
  };

  cultural_connotations: {
    food_metaphors: {
      example: string[];
    };
    gendered_usage: string[];
    societal_registers: string[];
  };

  // Enhanced sections for comprehensive A1-C2 coverage
  comprehensive_level_breakdown: {
    A1_beginner: {
      core_vocabulary: string[];
      basic_rules: string[];
      essential_examples: Array<{
        noun: string;
        countable_example: string;
        uncountable_example: string;
        simple_explanation: string;
      }>;
      common_mistakes: string[];
      practice_focus: string[];
    };
    A2_elementary: {
      expanded_vocabulary: string[];
      pattern_recognition: string[];
      context_clues: string[];
      functional_phrases: string[];
      error_correction: string[];
    };
    B1_intermediate: {
      nuanced_understanding: string[];
      register_awareness: string[];
      collocation_patterns: string[];
      discourse_markers: string[];
      academic_introduction: string[];
    };
    B2_upper_intermediate: {
      sophisticated_usage: string[];
      stylistic_choices: string[];
      metaphorical_extensions: string[];
      formal_writing: string[];
      critical_analysis: string[];
    };
    C1_advanced: {
      native_like_competence: string[];
      idiomatic_mastery: string[];
      register_flexibility: string[];
      discourse_competence: string[];
      metalinguistic_awareness: string[];
    };
    C2_proficiency: {
      expert_level_usage: string[];
      creative_applications: string[];
      theoretical_understanding: string[];
      cross_linguistic_analysis: string[];
      pedagogical_insights: string[];
    };
  };

  detailed_learning_progression: {
    skill_development: {
      recognition_skills: Array<{
        level: string;
        description: string;
        examples: string[];
      }>;
      production_skills: Array<{
        level: string;
        description: string;
        examples: string[];
      }>;
      error_correction_skills: Array<{
        level: string;
        description: string;
        examples: string[];
      }>;
    };
  };

  assessment_criteria: {
    by_level: {
      [key: string]: {
        can_do_statements: string[];
        assessment_tasks: string[];
        error_tolerance: string;
        expected_competencies: string[];
      };
    };
  };

  pedagogical_approaches: {
    teaching_strategies: {
      [key: string]: {
        methodology: string;
        activities: string[];
        materials: string[];
        assessment: string[];
      };
    };
  };

  extended_references: {
    authoritative_grammar_books: Array<{
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      relevance: string;
    }>;
    academic_journals: Array<{
      title: string;
      journal: string;
      authors: string[];
      year: number;
      doi?: string;
      relevance: string;
    }>;
    online_databases: Array<{
      name: string;
      url: string;
      description: string;
      access_type: string;
    }>;
    corpus_resources: Array<{
      name: string;
      url: string;
      description: string;
      data_type: string;
    }>;
    educational_websites: Array<{
      name: string;
      url: string;
      description: string;
      target_level: string;
    }>;
  };
}

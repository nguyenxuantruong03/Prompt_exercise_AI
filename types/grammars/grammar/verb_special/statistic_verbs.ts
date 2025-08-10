export interface StatisticVerbsType {
  id: number;
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    comparison_to_other_verbs: string;
    etymology: string;
    cross_linguistic_perspective: string;
  };

  statistic_verbs_vocab: {
    general_description: string[];
    change_verbs_increase: string[];
    change_verbs_decrease: string[];
    change_verbs_stability: string[];
    change_verbs_fluctuation: string[];
    comparison_verbs: string[];
    proportion_verbs: string[];
    prediction_and_trend_verbs: string[];
    distribution_verbs: string[];
    data_process_verbs: string[];
    statistical_result_verbs: string[];
    mathematical_operation_verbs: string[];
    validation_and_verification_verbs: string[];
    approximation_and_estimation_verbs: string[];
    correlation_and_causation_verbs: string[];
  };

  foundational_characteristics: {
    verb_types: string[];
    typical_contexts: string[];
    formality_level: string;
    semantic_features: string[];
    syntactic_properties: string[];
  };

  theoretical_principles: {
    aspectual_compatibility: string;
    grammatical_roles: string[];
    voice_usage: string[];
    nominalization: boolean;
    clause_types: string[];
    argument_structure: string[];
  };

  usage: Array<{
    type: string;
    example: string;
    advanced_examples: string[];
    level: string;
    context: string;
    formality: string;
  }>;

  common_statistic_verbs: {
    high_frequency: string[];
    academic_preference: string[];
    spoken_preference: string[];
    business_context: string[];
    scientific_context: string[];
    journalistic_context: string[];
  };

  levels: {
    A1: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      essential_patterns: string[];
      basic_collocations: string[];
      simple_structures: string[];
      learning_objectives: string[];
      prerequisite_knowledge: string[];
    };
    A2: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      expanding_patterns: string[];
      basic_academic_verbs: string[];
      simple_comparisons: string[];
      learning_objectives: string[];
      prerequisite_knowledge: string[];
    };
    B1: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      intermediate_patterns: string[];
      academic_introduction: string[];
      trend_descriptions: string[];
      learning_objectives: string[];
      prerequisite_knowledge: string[];
    };
    B2: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      advanced_patterns: string[];
      formal_academic_verbs: string[];
      complex_descriptions: string[];
      learning_objectives: string[];
      prerequisite_knowledge: string[];
    };
    C1: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      sophisticated_patterns: string[];
      research_verbs: string[];
      critical_analysis: string[];
      learning_objectives: string[];
      prerequisite_knowledge: string[];
    };
    C2: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      expert_patterns: string[];
      specialized_verbs: string[];
      nuanced_analysis: string[];
      learning_objectives: string[];
      prerequisite_knowledge: string[];
    };
  };

  advanced_usage: {
    passive_forms: string[];
    nominalizations: string[];
    hedging: string[];
    synthesis_verbs: string[];
    critical_verbs: string[];
    impersonal_constructions: string[];
    modal_combinations: string[];
  };

  form_and_tense_compatibility: {
    simple_present: string;
    present_perfect: string;
    past_simple: string;
    passive_voice: string;
    future_forms: string;
    present_continuous: string;
    past_perfect: string;
    conditional_forms: string;
  };

  recognition_patterns: string[];

  common_mistakes: Array<{
    mistake: string;
    correction: string;
    level: string;
    explanation: string;
  }>;

  related_grammar_topics: {
    verb_patterns: string[];
    noun_phrases: string[];
    quantifiers: string[];
    adverbials_of_frequency_and_quantity: string[];
    reporting_structures: string[];
    academic_writing_features: string[];
  };

  references_and_sources: {
    academic: string[];
    corpora_usage: string[];
    ESL_focus: string[];
    dictionaries: string[];
    research_papers: string[];
    online_resources: string[];
    textbooks_by_level: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
  };

  learning_tips: {
    tip_1: string;
    tip_2: string;
    tip_3: string;
    tip_4: string;
    tip_5: string;
    level_specific_tips: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
  };

  notes: {
    academic_note: string;
    formality_note: string;
    linguistic_note: string;
    pedagogical_note: string;
    cultural_note: string;
  };

  vocabulary_extension: {
    high_precision_verbs: string[];
    evaluative_verbs: string[];
    uncertain_statements: string[];
    technical_statistical_verbs: string[];
    research_methodology_verbs: string[];
  };

  ielts_applications: {
    listening: {
      usage: string;
      example: string;
      strategies: string[];
    };
    reading: {
      usage: string;
      example: string;
      strategies: string[];
    };
    writing: {
      usage: string;
      example: string;
      strategies: string[];
    };
    speaking: {
      usage: string;
      example: string;
      strategies: string[];
    };
  };

  contrastive_usage: {
    difference_between: Array<{
      verb1: string;
      verb2: string;
      note: string;
    }>;
  };

  sentence_building_by_level: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  collocations_and_phrases: {
    collocations: string[];
    academic_chunks: string[];
    idiomatic_expressions: string[];
    technical_collocations: string[];
    formal_expressions: string[];
  };

  transformation_patterns: {
    verb_to_noun: Array<{ base: string; noun: string; level: string }>;
    verb_to_adjective: Array<{ base: string; adj: string; level: string }>;
    noun_to_verb: Array<{ noun: string; verb: string; level: string }>;
  };

  statistical_concepts_explained: {
    [key: string]: string;
  };

  subject_verb_data_pairing_examples: Array<{
    subject: string;
    verb: string;
    object: string;
    level: string;
  }>;

  integrated_practice_tasks: {
    task_1: string;
    task_2: string;
    task_3: string;
    task_4: string;
  };

  visual_structures: {
    graph_descriptions: string[];
    table_descriptions: string[];
    chart_descriptions: string[];
    diagram_descriptions: string[];
  };

  cross_curricular_connections: {
    mathematics: string[];
    science: string[];
    social_studies: string[];
    business: string[];
    economics: string[];
  };

  assessment_criteria: {
    accuracy: string[];
    range: string[];
    appropriateness: string[];
    fluency: string[];
  };

  digital_age_applications: {
    data_visualization: string[];
    infographics: string[];
    online_research: string[];
    social_media_analytics: string[];
  };
}

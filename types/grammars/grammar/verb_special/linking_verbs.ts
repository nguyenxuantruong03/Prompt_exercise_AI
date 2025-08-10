export interface LinkingVerbsType {
  id: number;
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    historical_development: string;
    semantic_function: string;
    syntactic_properties: string;
  };

  linking_verbs_vocab: {
    be_verbs: string[];
    sensory_linking_verbs: string[];
    change_of_state_verbs: string[];
    verbs_of_appearance: string[];
    emotional_state_verbs: string[];
    judgement_or_value_verbs: string[];
    linking_phrasal_verbs: string[];
    rare_or_formal_linking_verbs: string[];
    academic_linking_verbs: string[];
    literary_linking_verbs: string[];
  };

  foundational_characteristics: {
    non_action_nature: string;
    subject_complement_requirement: string;
    syntactic_position: string;
    verb_forms: string;
    grammatical_constraints: string;
    copular_function: string;
    semantic_restrictions: string;
  };

  theoretical_principles: {
    subject_link_complement: string;
    copular_verb_typology: string;
    semantic_roles: string;
    transformational_grammar_notes: string;
    predicate_logic: string;
    thematic_roles: string;
  };

  categories: {
    primary_linking_verbs: string[];
    verbs_of_change_or_transformation: string[];
    verbs_of_perception: string[];
    verbs_of_state_or_continuity: string[];
    borderline_verbs: {
      dual_use_verbs: string[];
      explanation: string;
      contextual_differences: string[];
    };
    specialized_categories: {
      epistemic_verbs: string[];
      evaluative_verbs: string[];
      resultative_verbs: string[];
    };
  };

  usage: Array<{
    type: string;
    example: string;
    advanced_examples: string[];
    level: string;
    function: string;
    common_patterns: string[];
  }>;

  levels: {
    A1: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      basic_patterns: string[];
      essential_knowledge: string[];
      common_mistakes: string[];
      practice_areas: string[];
    };
    A2: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      new_patterns: string[];
      expanded_knowledge: string[];
      common_mistakes: string[];
      practice_areas: string[];
    };
    B1: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      complex_patterns: string[];
      intermediate_knowledge: string[];
      common_mistakes: string[];
      practice_areas: string[];
    };
    B2: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      advanced_patterns: string[];
      sophisticated_knowledge: string[];
      common_mistakes: string[];
      practice_areas: string[];
    };
    C1: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      expert_patterns: string[];
      advanced_knowledge: string[];
      subtle_mistakes: string[];
      practice_areas: string[];
    };
    C2: {
      focus: string;
      skills: string[];
      core_verbs: string[];
      mastery_patterns: string[];
      expert_knowledge: string[];
      rare_mistakes: string[];
      practice_areas: string[];
    };
  };

  recognition_patterns: {
    form_clues: string[];
    collocational_clues: string[];
    semantic_clues: string[];
    contextual_markers: string[];
    discourse_markers: string[];
  };

  exceptions_and_irregularities: {
    action_verb_overlap: {
      description: string;
      examples: string[];
      disambiguation_strategies: string[];
    };
    tense_shift_behavior: {
      description: string;
      examples: string[];
      learning_difficulties: string[];
    };
    idiomatic_usages: {
      description: string;
      examples: string[];
      cultural_significance: string[];
    };
    register_variations: {
      formal_alternatives: string[];
      informal_alternatives: string[];
      academic_preferences: string[];
    };
  };

  advanced_usage_notes: {
    stylistic_guidance: string[];
    metaphorical_extension: string[];
    discourse_functions: string[];
    nominalization_use: string[];
    rhetorical_effects: string[];
    literary_applications: string[];
  };

  spelling_rules_and_notes: {
    verb_agreement: string;
    adjective_form: string;
    noun_complement: string;
    phonological_variations: string;
    morphological_patterns: string;
  };

  common_mistakes: Array<{
    mistake: string;
    corrected: string;
    explanation: string;
    level: string;
    frequency: string;
  }>;

  learning_tips: string[];

  specialized_domains: {
    academic_writing: string[];
    literature_and_narration: string[];
    psychology_and_emotion: string[];
    legal_and_formal_language: string[];
    scientific_description: string[];
    business_communication: string[];
    medical_terminology: string[];
    philosophical_discourse: string[];
  };

  professional_terminology: {
    linguistic_label: string;
    description: string;
    corpus_usage_trend: string;
    academic_notes: string;
    cross_linguistic_comparison: string;
    historical_linguistics: string;
  };

  citations: Array<{
    title: string;
    url: string;
    description: string;
    source: string;
    type: string;
    relevance_level: string;
    access_level: string;
  }>;

  ielts_usage: {
    writing_task_1: string;
    writing_task_2: string;
    speaking_part_1: string;
    speaking_part_2: string;
    speaking_part_3: string;
    listening_recognition: string;
    reading_comprehension: string;
  };

  cefr_mastery_guide: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  functional_transformation: {
    adjective_to_noun: {
      example: string;
      usage: string;
      advanced_applications: string[];
    };
    adjective_to_verb: {
      example: string;
      usage: string;
      stylistic_considerations: string[];
    };
    inversion_structures: {
      example: string;
      usage: string;
      literary_effects: string[];
    };
    passive_like_construction: {
      example: string;
      usage: string;
      formal_registers: string[];
    };
  };

  semantic_gradient: {
    low_certainty: string[];
    neutral_state: string[];
    transformation: string[];
    emotional_perceptual_shade: string[];
    application: string;
    nuanced_distinctions: string[];
  };

  stylistic_effects: {
    poetic_extension: {
      example: string;
      usage: string;
      literary_tradition: string[];
    };
    minimalistic_expression: {
      example: string;
      usage: string;
      philosophical_implications: string[];
    };
    echo_repetition: {
      example: string;
      usage: string;
      rhetorical_power: string[];
    };
  };

  pragmatic_functions: {
    hedging: string;
    clarification: string;
    evaluation: string;
    indirectness: string;
    politeness_strategies: string[];
    social_functions: string[];
  };

  comparative_insight: {
    linking_vs_action: {
      look: string[];
      feel: string[];
      sound: string[];
      taste: string[];
      smell: string[];
      appear: string[];
    };
    linking_vs_auxiliary_be: {
      be_linking: string;
      be_auxiliary: string;
      usage_tip: string;
      advanced_distinctions: string[];
    };
  };

  mnemonic_strategies: {
    acronym_method: string;
    transformation_diagrams: string;
    role_play: string;
    timeline_exercises: string;
    visual_associations: string[];
    memory_techniques: string[];
  };

  idiomatic_structures: string[];

  syntactic_patterns: {
    basic_pattern: string;
    subject_complement_types: {
      adjective: string;
      noun_phrase: string;
      prepositional_phrase: string;
      infinitive_phrase: string;
      clause: string;
      participial_phrase: string;
      gerund_phrase: string;
      absolute_construction: string;
    };
    pattern_variations: {
      fronting: string;
      cleft: string;
      existential: string;
      extraposition: string;
      tough_movement: string;
    };
    extended_examples: string[];
  };

  complex_usage: {
    conditional_clauses: string;
    relative_clauses: string;
    noun_clauses: string;
    contrast_clauses: string;
    temporal_clauses: string;
    causal_clauses: string;
    concessive_clauses: string;
  };

  paraphrase_comparisons: Array<{
    original: string;
    alternative: string;
    register_difference: string;
    semantic_nuance: string;
  }>;

  creative_usage: {
    metaphorical_identity: string;
    thematic_symbol: string;
    symbolic_role: string;
    literary_description: string;
    personification: string;
    abstract_concepts: string[];
  };

  acquisition_notes: {
    learner_difficulty: string;
    acquisition_order: string;
    processing_speed: string;
    cross_linguistic_interference: string;
    developmental_stages: string[];
  };

  curriculum_references: {
    cambridge_english: {
      A1: string;
      A2: string;
      B1: string;
      B2: string;
      C1: string;
      C2: string;
    };
    CEFR_descriptors: {
      A1: string;
      A2: string;
      B1: string;
      B2: string;
      C1: string;
      C2: string;
    };
    oxford_criteria: {
      elementary: string;
      intermediate: string;
      upper_intermediate: string;
      advanced: string;
      proficiency: string;
    };
  };

  assessment_criteria: {
    accuracy_indicators: string[];
    fluency_markers: string[];
    complexity_measures: string[];
    appropriateness_factors: string[];
  };

  research_findings: {
    corpus_analysis: string;
    frequency_data: string;
    acquisition_studies: string;
    cross_linguistic_research: string;
    pedagogical_implications: string[];
  };

  technological_applications: {
    nlp_processing: string;
    machine_translation: string;
    grammar_checkers: string;
    language_learning_apps: string;
  };

  cultural_considerations: {
    register_sensitivity: string;
    cross_cultural_variations: string;
    social_implications: string;
    educational_contexts: string[];
  };
}

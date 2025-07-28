export interface PhrasalVerbExample {
  verb: string;
  meaning: string;
  example: string;
  level?: string;
  register?: "formal" | "informal" | "neutral";
  separable?: boolean;
  transitive?: boolean;
}

export interface LevelDetails {
  focus: string;
  examples: PhrasalVerbExample[];
  strategies: string[];
  core_verbs: string[];
  key_particles: string[];
  grammar_focus: string[];
  common_mistakes: string[];
  learning_objectives: string[];
  assessment_criteria: string[];
}

export interface ThematicGroup {
  verb: string;
  meaning: string;
  example: string;
  level?: string;
  register?: string;
  notes?: string;
}

export interface ParticlePattern {
  meaning: string;
  examples: PhrasalVerbExample[];
  usage_notes: string[];
}

export interface Classification {
  definition: string;
  example: string;
  characteristics: string[];
  common_verbs: string[];
}

export interface AdvancedUsage {
  example: string;
  explanation: string;
  level: string;
}

export interface Reference {
  title: string;
  author?: string;
  url?: string;
  isbn?: string;
  description: string;
  level: string;
}

export interface phrasalVerbsType {
  definition: {
    core_concept: string;
    grammatical_status: string;
    significance: string;
    categories: string[];
    linguistic_features: string[];
    frequency_ranking: string;
  };

  foundational_structure: {
    verb_particle: string;
    verb_particle_object: string;
    verb_object_particle: string;
    note: string;
    structural_variations: string[];
    syntactic_properties: string[];
  };

  phrasal_verbs_vocab: {
    basic_actions: string[];
    daily_routines: string[];
    travel_and_transport: string[];
    communication: string[];
    thinking_and_decision: string[];
    relationships_and_emotions: string[];
    work_and_study: string[];
    business_and_money: string[];
    technology: string[];
    health_and_fitness: string[];
    social_interactions: string[];
    time_and_scheduling: string[];
    idiomatic_expressions: string[];
    academic_phrasal_verbs: string[];
  };

  classifications: {
    by_transitivity: {
      transitive: Classification;
      intransitive: Classification;
    };
    by_separability: {
      separable: Classification;
      inseparable: Classification;
    };
    by_formality: {
      informal: Classification;
      neutral: Classification;
      formal: Classification;
    };
    by_frequency: {
      high_frequency: Classification;
      medium_frequency: Classification;
      low_frequency: Classification;
    };
  };

  usage_types: Array<{
    context: string;
    level: string;
    example: string;
    frequency: string;
    register: string;
  }>;

  learning_levels: {
    A1: LevelDetails;
    A2: LevelDetails;
    B1: LevelDetails;
    B2: LevelDetails;
    C1: LevelDetails;
    C2: LevelDetails;
  };

  formation_patterns: {
    types: Array<{
      pattern: string;
      example: string;
      frequency: string;
      difficulty: string;
    }>;
    particle_meanings: Record<string, ParticlePattern>;
  };

  common_errors: {
    misunderstanding_meaning: {
      description: string;
      example: string;
      correction_strategy: string[];
    };
    misplacing_object: {
      description: string;
      wrong: string;
      correct: string;
      rule: string;
    };
    literal_interpretation: {
      description: string;
      examples: Array<{
        phrasal_verb: string;
        wrong_interpretation: string;
        correct_meaning: string;
      }>;
    };
    register_confusion: {
      description: string;
      examples: Array<{
        informal: string;
        formal_equivalent: string;
        context: string;
      }>;
    };
  };

  teaching_notes: {
    advice: string[];
    progression_tips: string[];
    assessment_methods: string[];
    common_challenges: string[];
  };

  advanced_usage: {
    passive_form: AdvancedUsage;
    nominalisation: AdvancedUsage;
    phrasal_verbs_in_reporting: AdvancedUsage;
    metaphorical_extensions: AdvancedUsage;
    collocational_patterns: AdvancedUsage;
  };

  learning_tips: {
    visual_memory: string;
    spaced_repetition: string;
    collocation_learning: string;
    notebook_strategy: string;
    contextual_learning: string;
    error_analysis: string;
  };

  references: Reference[];

  thematic_groups: {
    travel: ThematicGroup[];
    relationships: ThematicGroup[];
    work: ThematicGroup[];
    emotions: ThematicGroup[];
    communication: ThematicGroup[];
    technology: ThematicGroup[];
    health: ThematicGroup[];
    education: ThematicGroup[];
    business: ThematicGroup[];
    social_situations: ThematicGroup[];
  };

  phrasal_verb_particles: Record<string, ParticlePattern>;

  phrasal_verb_families: Record<string, PhrasalVerbExample[]>;

  idiomatic_difficulty_index: {
    A1: {
      characteristics: string;
      examples: string[];
      learning_focus: string[];
    };
    A2: {
      characteristics: string;
      examples: string[];
      learning_focus: string[];
    };
    B1: {
      characteristics: string;
      examples: string[];
      learning_focus: string[];
    };
    B2: {
      characteristics: string;
      examples: string[];
      learning_focus: string[];
    };
    C1: {
      characteristics: string;
      examples: string[];
      learning_focus: string[];
    };
    C2: {
      characteristics: string;
      examples: string[];
      learning_focus: string[];
    };
  };

  phrasal_verbs_vs_multiword_verbs: {
    difference: string;
    comparison: Array<{
      type: string;
      example: string;
      formality: string;
      usage_context: string;
    }>;
    distinction_criteria: string[];
  };

  academic_equivalents: {
    examples: Array<{
      phrasal: string;
      academic: string;
      example: string;
      register_shift: string;
    }>;
    transformation_patterns: string[];
  };

  semantic_categories: {
    motion_and_direction: ThematicGroup[];
    change_of_state: ThematicGroup[];
    creation_and_destruction: ThematicGroup[];
    social_interaction: ThematicGroup[];
    mental_processes: ThematicGroup[];
    physical_actions: ThematicGroup[];
  };

  collocations_and_patterns: {
    phrasal_verb_noun: Array<{
      pattern: string;
      explanation: string;
      frequency: string;
    }>;
    adverb_intensifiers: Array<{
      pattern: string;
      example: string;
      effect: string;
    }>;
    passive_patterns: Array<{
      pattern: string;
      example: string;
      usage_note: string;
    }>;
  };

  phrasalVerb_register: {
    informal: ThematicGroup[];
    formal_equivalent: Array<{
      phrasal: string;
      equivalent: string;
      example: string;
      context: string;
    }>;
    neutral: ThematicGroup[];
  };

  C2_advanced_idioms: Array<{
    idiom: string;
    meaning: string;
    example: string;
    etymology?: string;
    usage_notes: string[];
  }>;

  multi_meaning_verbs: Record<
    string,
    Array<{
      verb: string;
      meaning: string;
      example: string;
      context: string;
    }>
  >;

  cultural_notes: {
    british_vs_american: Array<{
      UK: string;
      US: string;
      meaning: string;
      example: string;
      cultural_context: string;
    }>;
    idiomatic_only: Array<{
      verb: string;
      meaning: string;
      note: string;
      cultural_significance: string;
    }>;
    regional_variations: Array<{
      region: string;
      phrasal_verb: string;
      alternative: string;
      usage_context: string;
    }>;
  };

  teaching_strategies: {
    A1_A2: string[];
    B1_B2: string[];
    C1_C2: string[];
    general_principles: string[];
    technology_integration: string[];
  };

  frequency_analysis: {
    most_common_100: string[];
    academic_top_50: string[];
    business_top_50: string[];
    everyday_conversation_top_50: string[];
  };

  corpus_insights: {
    statistical_data: {
      total_phrasal_verbs: number;
      frequency_distribution: string;
      register_distribution: string;
    };
    usage_trends: string[];
    emerging_phrasal_verbs: string[];
  };
}

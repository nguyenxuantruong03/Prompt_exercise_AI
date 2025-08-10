export interface adverbFrontingInversionType {
  id: number;
  topic: string;
  description: string;

  adverb_Fronting_Inversion_vocab: {
    definition: string;
    comprehensive_definition: string;
    linguistic_background: string;

    core_rules: {
      types_of_inversion: string[];
      trigger_adverbs_or_expressions: string[];
      inversion_conditions: string[];
      word_order_patterns: string[];
    };

    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };

    detailed_level_breakdown: {
      A1: {
        focus: string;
        concepts: string[];
        examples: string[];
        learning_objectives: string[];
      };
      A2: {
        focus: string;
        concepts: string[];
        examples: string[];
        learning_objectives: string[];
      };
      B1: {
        focus: string;
        concepts: string[];
        examples: string[];
        learning_objectives: string[];
      };
      B2: {
        focus: string;
        concepts: string[];
        examples: string[];
        learning_objectives: string[];
      };
      C1: {
        focus: string;
        concepts: string[];
        examples: string[];
        learning_objectives: string[];
      };
      C2: {
        focus: string;
        concepts: string[];
        examples: string[];
        learning_objectives: string[];
      };
    };

    inversion_structures: {
      negative_adverbs: string[];
      restrictive_time_conditions: string[];
      place_expression_inversion: string[];
      emphatic_so_such: string[];
      neither_nor: string[];
      formal_literary: string[];
      conditional_inversion: string[];
      frequency_emphasis: string[];
      manner_inversion: string[];
    };

    advanced_patterns: {
      correlative_conjunctions: string[];
      emphatic_structures: string[];
      literary_inversions: string[];
      academic_inversions: string[];
      rhetorical_inversions: string[];
    };

    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
      level: string;
    }>;

    stylistic_usage: {
      formality_level: string;
      tone_effect: string;
      academic_usage: string[];
      journalistic_usage: string[];
      literary_usage: string[];
      spoken_vs_written: string;
    };

    inversion_vs_emphasis: {
      distinction: string;
      example_1: string;
      example_2: string;
      when_to_use: string[];
    };

    learning_tips: string[];

    pronunciation_stress: {
      emphasis_patterns: string[];
      intonation_rules: string[];
    };
  };

  levels: {
    A1_A2: {
      overview: string;
      examples: string[];
      note: string;
      key_concepts: string[];
      progression_goals: string[];
    };
    B1_B2: {
      overview: string;
      rules: string[];
      commonAdverbs: string[];
      examples: string[];
      note: string;
      advanced_concepts: string[];
      mastery_indicators: string[];
    };
    C1_C2: {
      overview: string;
      extendedStructures: Array<{
        type: string;
        example: string;
        usage_context: string;
      }>;
      additionalPatterns: Array<{
        pattern: string;
        example: string;
        formality_level: string;
      }>;
      stylisticUsage: string[];
      expert_level_features: string[];
      native_like_usage: string[];
    };
  };

  commonMistakes: Array<{
    mistake: string;
    correction: string;
    level: string;
    frequency: string;
  }>;

  learningTips: string[];

  progressive_learning_path: {
    A1_foundation: string[];
    A2_building: string[];
    B1_development: string[];
    B2_consolidation: string[];
    C1_refinement: string[];
    C2_mastery: string[];
  };

  advancedExamples: string[];

  cross_linguistic_comparison: {
    similar_languages: string[];
    unique_features: string[];
    translation_challenges: string[];
  };

  references: Array<{
    title: string;
    author: string;
    type: "book" | "website" | "academic_paper" | "journal";
    url?: string;
    description: string;
    level: string;
  }>;

  inversionTriggers: Array<{
    type: string;
    structure: string;
    example: string;
    examples?: string[];
    level: string;
    frequency: string;
  }>;

  literaryAndRhetoricalUsage: string[];

  discourse_functions: {
    emphasis: string[];
    contrast: string[];
    dramatic_effect: string[];
    formal_register: string[];
  };

  advancedErrorWarning: Array<{
    warning: string;
    incorrect: string;
    correct: string;
    explanation: string;
  }>;

  advancedWritingTasks: Array<{
    task: string;
    instruction: string;
    level: string;
    skills_targeted: string[];
  }>;

  idiomaticInversionPhrases: string[];

  assessment_criteria: {
    recognition: string[];
    production: string[];
    appropriateness: string[];
  };

  extraReferences: Array<{
    title: string;
    description: string;
    target_level: string;
  }>;

  pedagogical_notes: {
    teaching_sequence: string[];
    common_learner_difficulties: string[];
    effective_practice_methods: string[];
  };
}

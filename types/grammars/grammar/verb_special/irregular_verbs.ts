export interface IrregularVerbsType {
  definition: {
    simple: string;
    detailed: string;
    historical_context: string;
    linguistic_perspective: string;
    etymology: string;
  };
  vocab_irregular_verbs: string[][];
  classification: {
    same_all_three: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
    same_past_and_pp: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
    all_different: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
    vowel_change: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
    consonant_change: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
    zero_change: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
    suppletive: {
      description: string;
      examples: string[];
      pattern_explanation: string;
    };
  };
  structure: {
    verb_forms: string[];
    example: {
      base: string;
      past: string;
      pastParticiple: string;
      sentence: string;
    };
    grammatical_functions: {
      simple_past: string;
      present_perfect: string;
      past_perfect: string;
      passive_voice: string;
    };
  };
  usage: {
    everyday_communication: string[];
    formal_academic: string[];
    literary: string[];
    business: string[];
    scientific: string[];
    idiomatic_phrases: {
      description: string;
      examples: string[];
    };
    modal_association: {
      description: string;
      examples: string[];
    };
    collocations: {
      description: string;
      examples: string[];
    };
  };
  pronunciation: {
    notes: string;
    common_patterns: {
      vowel_shift: string[];
      silent_letters: string[];
      stress_changes: string[];
      phonetic_changes: string[];
    };
    ipa_examples: {
      verb: string;
      base_ipa: string;
      past_ipa: string;
      past_participle_ipa: string;
    }[];
  };
  spelling_notes: {
    double_consonant: string[];
    vowel_insertion: string[];
    no_change: string[];
    complete_change: string[];
    y_to_i: string[];
  };
  common_errors: {
    regularization: {
      description: string;
      examples: string[];
      correction_strategy: string;
    };
    confusion: {
      description: string;
      examples: string[];
      correction_strategy: string;
    };
    wrong_tense: {
      description: string;
      examples: string[];
      correction_strategy: string;
    };
    overgeneralization: {
      description: string;
      examples: string[];
      correction_strategy: string;
    };
  };
  learning_tips: {
    visual_grouping: string;
    rhymes_and_songs: string;
    flashcards: string;
    spaced_repetition: string;
    daily_use: string;
    mnemonics: string;
    contextual_learning: string;
    error_correction: string;
  };
  advanced_usage: {
    literary: {
      description: string;
      examples: string[];
      authors_reference: string[];
    };
    subjunctive_and_conditionals: {
      description: string;
      examples: string[];
    };
    inversions: {
      description: string;
      examples: string[];
    };
    formal_registers: {
      description: string;
      examples: string[];
    };
    archaic_forms: {
      description: string;
      examples: string[];
    };
  };
  academic_relevance: {
    exams: string[];
    grammar_books: string[];
    test_formats: string[];
    scoring_criteria: string[];
  };
  language_levels: {
    A1: {
      focus: string;
      verbs: string[];
      learning_objectives: string[];
      key_functions: string[];
      assessment_criteria: string[];
    };
    A2: {
      focus: string;
      verbs: string[];
      learning_objectives: string[];
      key_functions: string[];
      assessment_criteria: string[];
    };
    B1: {
      focus: string;
      verbs: string[];
      learning_objectives: string[];
      key_functions: string[];
      assessment_criteria: string[];
    };
    B2: {
      focus: string;
      verbs: string[];
      learning_objectives: string[];
      key_functions: string[];
      assessment_criteria: string[];
    };
    C1: {
      focus: string;
      verbs: string[];
      learning_objectives: string[];
      key_functions: string[];
      assessment_criteria: string[];
    };
    C2: {
      focus: string;
      verbs: string[];
      learning_objectives: string[];
      key_functions: string[];
      assessment_criteria: string[];
    };
  };
  verbs_by_frequency: {
    top_20: string[];
    top_50: string[];
    academic_frequency: string[];
    spoken_frequency: string[];
    written_frequency: string[];
  };
  cultural_and_regional_variants: {
    British_vs_American: {
      examples: { UK: string; US: string; context: string }[];
    };
    archaic_forms: {
      description: string;
      examples: string[];
    };
    dialectal_variations: {
      description: string;
      examples: string[];
    };
  };
  teaching_strategies: {
    color_coding: string;
    games: string[];
    context_practice: string;
    translation_comparison: string;
    error_analysis: string;
    peer_correction: string;
    technology_integration: string[];
  };
  references: {
    dictionaries: string[];
    grammar_sources: string[];
    corpora: string[];
    research_papers: string[];
    online_resources: string[];
  };
  related_grammar_topics: string[];
  morphological_analysis: {
    ablaut: {
      description: string;
      examples: string[];
    };
    suppletion: {
      description: string;
      examples: string[];
    };
    consonant_gradation: {
      description: string;
      examples: string[];
    };
  };
  cognitive_aspects: {
    memory_strategies: string[];
    processing_difficulties: string[];
    acquisition_order: string[];
    transfer_effects: string[];
  };
  notes: {
    importance: string;
    fun_fact: string;
    statistical_data: string;
    future_trends: string;
  };
}

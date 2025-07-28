export interface adverbsNotEndingLyType {
  title: string;
  definition: string;

  levels: {
    A1: {
      description: string;
      examples: Array<{
        word: string;
        meaning: string;
        usage: string;
        pronunciation?: string;
      }>;
      notes: string[];
      learning_objectives: string[];
      basic_rules: string[];
    };
    A2: {
      description: string;
      examples: Array<{
        phrase: string;
        meaning: string;
        example: string;
        context?: string;
      }>;
      grammar_points: string[];
      comparison_with_ly_adverbs: Array<{
        word: string;
        without_ly: string;
        with_ly: string;
        meaning_difference: string;
      }>;
      position_rules: string[];
    };
    B1: {
      description: string;
      examples: Array<{
        word: string;
        contrast: string;
        usage_adv: string;
        usage_adj: string;
        explanation?: string;
      }>;
      notes: string[];
      detailed_grammar: {
        adjective_vs_adverb: Array<{
          word: string;
          as_adjective: string;
          as_adverb: string;
          usage_tips: string;
        }>;
        position_emphasis: string[];
        formal_vs_informal: string[];
      };
      common_confusions: Array<{
        confused_pair: string;
        correct_usage: string;
        explanation: string;
      }>;
    };
    B2: {
      description: string;
      examples: Array<{
        phrase: string;
        example: string;
        context?: string;
        register?: string;
      }>;
      grammar_points: string[];
      advanced_patterns: {
        collocations: Array<{
          pattern: string;
          meaning: string;
          examples: string[];
        }>;
        idiomatic_expressions: Array<{
          expression: string;
          meaning: string;
          usage: string;
        }>;
        sentence_positions: string[];
      };
      style_variations: {
        formal_writing: string[];
        informal_speech: string[];
        academic_usage: string[];
      };
    };
    C1: {
      description: string;
      examples: Array<{
        phrase: string;
        example: string;
        register?: string;
        stylistic_effect?: string;
      }>;
      notes: string[];
      sophisticated_usage: {
        literary_devices: Array<{
          device: string;
          example: string;
          effect: string;
        }>;
        register_variation: Array<{
          context: string;
          appropriate_adverbs: string[];
          examples: string[];
        }>;
        discourse_markers: string[];
      };
      professional_contexts: Array<{
        field: string;
        specific_adverbs: string[];
        examples: string[];
      }>;
    };
    C2: {
      description: string;
      examples: Array<{
        word: string;
        etymology: string;
        usage_detail: string;
        semantic_nuances?: string;
      }>;
      advanced_usage: string[];
      linguistic_analysis: {
        historical_development: Array<{
          word: string;
          old_english: string;
          middle_english: string;
          modern_usage: string;
        }>;
        semantic_fields: Array<{
          field: string;
          adverbs: string[];
          characteristics: string;
        }>;
        cross_linguistic_comparison: Array<{
          language: string;
          similar_patterns: string;
          differences: string;
        }>;
      };
      academic_discourse: {
        theoretical_frameworks: string[];
        research_applications: string[];
        pedagogical_implications: string[];
      };
    };
  };

  adverbsNotEndingLy_vocab: {
    categories: {
      time_adverbs: string[];
      place_adverbs: string[];
      degree_adverbs: string[];
      manner_adverbs: string[];
      frequency_adverbs: string[];
      affirmation_and_negation: string[];
      intensifiers: string[];
      direction_adverbs: string[];
    };

    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };

    detailed_vocabulary: {
      [key: string]: {
        word: string;
        part_of_speech: string[];
        meanings: string[];
        usage_examples: string[];
        collocations: string[];
        register: string;
        frequency: string;
        etymology?: string;
      };
    };

    usage_examples: string[];

    phonetic_patterns: {
      stress_patterns: Array<{
        pattern: string;
        examples: string[];
        rule: string;
      }>;
      pronunciation_notes: string[];
    };

    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
      level: string;
    }>;

    stylistic_notes: {
      informal_common: string[];
      formal_written: string[];
      spoken_emphasis: string[];
      literary_usage: string[];
      technical_contexts: string[];
    };

    learning_tips: string[];
  };

  comprehensive_grammar_rules: {
    formation_rules: string[];
    position_rules: {
      with_verbs: string[];
      with_adjectives: string[];
      with_other_adverbs: string[];
      sentence_positions: string[];
    };
    semantic_categories: Array<{
      category: string;
      description: string;
      examples: string[];
      usage_notes: string[];
    }>;
    syntactic_behavior: string[];
  };

  common_mistakes: string[];
  related_words: Array<{
    word: string;
    meaning: string;
    note: string;
    relationship?: string;
  }>;

  usage_tips: string[];

  references_and_sources: {
    grammar_books: Array<{
      title: string;
      authors: string[];
      publisher: string;
      year: number;
      pages?: string;
      isbn?: string;
    }>;
    academic_papers: Array<{
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi?: string;
    }>;
    online_resources: Array<{
      title: string;
      url: string;
      organization: string;
      access_date: string;
    }>;
    dictionaries: Array<{
      title: string;
      publisher: string;
      edition?: string;
      url?: string;
    }>;
    linguistic_databases: Array<{
      name: string;
      url: string;
      description: string;
    }>;
  };

  assessment_criteria: {
    A1_A2: string[];
    B1_B2: string[];
    C1_C2: string[];
  };

  teaching_methodology: {
    progressive_introduction: string[];
    common_errors_to_address: string[];
    effective_practice_activities: string[];
  };
}

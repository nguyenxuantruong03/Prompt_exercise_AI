export interface AdverbExample {
  word: string;
  meaning: string;
  examples: string[];
  usage: string;
  notes: string;
  pronunciation?: string;
  frequency?: string;
  register?:
    | "very formal"
    | "formal"
    | "neutral"
    | "informal"
    | "very informal";
  collocations?: string[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface GrammarPoint {
  rule: string;
  explanation: string;
  examples: string[];
  exceptions?: string[];
  notes?: string[];
}

export interface LevelContent {
  adverbs: AdverbExample[];
  grammarPoints: GrammarPoint[];
  keyFeatures: string[];
  commonMistakes: Array<{
    mistake: string;
    correction: string;
    explanation: string;
  }>;
  practiceAreas: string[];
}

export interface PositionRule {
  description: string;
  examples: string[];
  notes?: string[];
}

export interface CertaintyCategory {
  level: string;
  description: string;
  adverbs: string[];
  examples: string[];
  usage_context: string[];
}

export interface AdvancedUsage {
  academic_writing: {
    formal_adverbs: string[];
    examples: string[];
    guidelines: string[];
  };
  spoken_english: {
    common_adverbs: string[];
    examples: string[];
    intonation_notes: string[];
  };
  comparative_structures: Array<{
    structure: string;
    examples: string[];
    usage: string;
  }>;
}

export interface Reference {
  title: string;
  author?: string;
  type: "book" | "website" | "article" | "research";
  url?: string;
  isbn?: string;
  publisher?: string;
  year?: number;
  description: string;
  relevance: string;
}

export interface adverbsOfCertaintyType {
  id: number;
  name: string;
  definition: string;
  comprehensive_overview: {
    description: string;
    importance: string;
    scope: string;
    linguistic_background: string;
  };

  levels: {
    A1: LevelContent;
    A2: LevelContent;
    B1: LevelContent;
    B2: LevelContent;
    C1: LevelContent;
    C2: LevelContent;
  };

  detailed_grammar_rules: {
    position_in_sentence: {
      mid_position: PositionRule;
      initial_position: PositionRule;
      final_position: PositionRule;
      with_auxiliaries: PositionRule;
      with_modals: PositionRule;
    };

    certainty_scale: {
      absolute_certainty: CertaintyCategory;
      high_certainty: CertaintyCategory;
      moderate_certainty: CertaintyCategory;
      low_certainty: CertaintyCategory;
      uncertainty: CertaintyCategory;
    };

    syntactic_patterns: Array<{
      pattern: string;
      description: string;
      examples: string[];
      constraints: string[];
    }>;
  };

  advanced_usage: AdvancedUsage;

  cross_linguistic_comparison: {
    similarities_with_other_languages: string[];
    unique_english_features: string[];
    common_l1_interference: Array<{
      l1_language: string;
      interference_type: string;
      examples: string[];
      remediation: string[];
    }>;
  };

  adverbsOfCertainty_vocab: {
    categories: {
      absolute_certainty: string[];
      high_certainty: string[];
      medium_certainty: string[];
      low_certainty: string[];
      epistemic_modality: string[];
    };

    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };

    detailed_analysis: Array<{
      adverb: string;
      certainty_level: number; // 1-10 scale
      formality:
        | "very formal"
        | "formal"
        | "neutral"
        | "informal"
        | "very informal";
      frequency: "very common" | "common" | "moderate" | "uncommon" | "rare";
      semantic_field: string[];
      pragmatic_functions: string[];
    }>;

    position_rules: {
      mid_position: PositionRule;
      sentence_initial: PositionRule;
      sentence_final: PositionRule;
      with_negation: PositionRule;
      in_questions: PositionRule;
    };

    usage_examples: string[];
    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
      level: string;
    }>;

    comparison_with_other_adverbs: {
      note: string;
      example: {
        certainty: string;
        possibility: string;
        probability: string;
        necessity: string;
      };
      detailed_comparisons: Array<{
        adverb_pair: string[];
        difference: string;
        examples: string[];
      }>;
    };

    learning_tips: string[];
  };

  pedagogical_progression: {
    A1_A2_foundation: {
      focus_areas: string[];
      teaching_strategies: string[];
      common_challenges: string[];
    };
    B1_B2_development: {
      focus_areas: string[];
      teaching_strategies: string[];
      common_challenges: string[];
    };
    C1_C2_mastery: {
      focus_areas: string[];
      teaching_strategies: string[];
      common_challenges: string[];
    };
  };

  assessment_criteria: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  references: Reference[];

  generalNotes: string[];
  commonMistakes: string[];

  cultural_context: {
    regional_variations: Array<{
      region: string;
      variations: string[];
      examples: string[];
    }>;
    register_awareness: {
      formal_contexts: string[];
      informal_contexts: string[];
      academic_contexts: string[];
    };
  };

  corpus_insights: {
    frequency_data: Array<{
      adverb: string;
      frequency_per_million: number;
      common_contexts: string[];
    }>;
    collocation_patterns: Array<{
      adverb: string;
      common_collocations: string[];
      examples: string[];
    }>;
  };
}

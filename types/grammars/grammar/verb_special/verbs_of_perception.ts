export interface VerbsOfPerceptionType {
  definition: {
    core_concept: string;
    grammatical_role: string;
    examples: string[];
    etymology: string;
    linguistic_classification: string;
    semantic_fields: string[];
  };

  verbs_of_perception_vocab: {
    visual: string[];
    auditory: string[];
    tactile: string[];
    olfactory: string[];
    gustatory: string[];
    cognitive_perception: string[];
    idiomatic_expressions: string[];
    stative_perception_verbs: string[];
    dynamic_perception_verbs: string[];
    phrasal_linked_perception_verbs: string[];
    metaphorical_and_extended_use: string[];
    modal_perception_verbs: string[];
    causative_perception_verbs: string[];
    resultative_perception_verbs: string[];
  };

  key_characteristics: {
    can_be_followed_by: string[];
    aspect_behavior: string;
    stative_dynamic: {
      stative: string[];
      dynamic: string[];
    };
    syntactic_properties: string[];
    semantic_roles: {
      experiencer: string;
      theme: string;
      stimulus: string;
    };
    complementation_patterns: string[];
  };

  perception_types: {
    sight: string[];
    hearing: string[];
    smell: string[];
    taste: string[];
    touch: string[];
  };

  low_precision: {
    sight: string[];
    hearing: string[];
    smell: string[];
    taste: string[];
    touch: string[];
  };

  usage: Array<{
    type: string;
    form: string;
    example: string;
    advanced_examples: string[];
    register: string;
    frequency: string;
    pragmatic_function: string;
  }>;

  levels: {
    A1: {
      focus: string;
      skills: string[];
      vocabulary: string[];
      structures: string[];
      communicative_functions: string[];
      assessment_criteria: string[];
    };
    A2: {
      focus: string;
      skills: string[];
      vocabulary: string[];
      structures: string[];
      communicative_functions: string[];
      assessment_criteria: string[];
    };
    B1: {
      focus: string;
      skills: string[];
      vocabulary: string[];
      structures: string[];
      communicative_functions: string[];
      assessment_criteria: string[];
    };
    B2: {
      focus: string;
      skills: string[];
      vocabulary: string[];
      structures: string[];
      communicative_functions: string[];
      assessment_criteria: string[];
    };
    C1: {
      focus: string;
      skills: string[];
      vocabulary: string[];
      structures: string[];
      communicative_functions: string[];
      assessment_criteria: string[];
    };
    C2: {
      focus: string;
      skills: string[];
      vocabulary: string[];
      structures: string[];
      communicative_functions: string[];
      assessment_criteria: string[];
    };
  };

  advanced_usage: {
    idioms_and_expressions: Array<{
      phrase: string;
      meaning: string;
      register: string;
      frequency: string;
      example_in_context: string;
    }>;
    metaphoric_usages: string[];
    contrast_usage: Array<{
      correct: string;
      incorrect: string;
      explanation: string;
    }>;
    stylistic_variations: string[];
    discourse_functions: string[];
  };

  recognition_patterns: {
    cues: string[];
    collocations: {
      [key: string]: string[];
    };
  };

  common_mistakes: Array<{
    mistake: string;
    correction: string;
    note: string;
  }>;

  learning_tips: string[];

  related_grammar_topics: string[];

  references: Array<{
    title: string;
    section?: string;
    link?: string;
    author?: string;
    year?: number;
    type: "book" | "website" | "journal" | "corpus" | "database";
    reliability: "high" | "medium" | "low";
    description: string;
  }>;

  extended_verbs: string[];

  categorized_verbs_by_precision: {
    high_precision: {
      sight: string[];
      hearing: string[];
      smell: string[];
      taste: string[];
      touch: string[];
    };
    general_perception: {
      sight: string[];
      hearing: string[];
      smell: string[];
      taste: string[];
      touch: string[];
    };
  };

  advanced_structures: Array<{
    form: string;
    example: string;
    usage_note: string;
  }>;

  cross_topic_usage: {
    with_modal_verbs: string[];
    in_conditional: string[];
    with_causative_verbs: string[];
  };

  perception_in_literary_contexts: string[];

  C2_extensions: {
    syntactic_mastery: string[];
    stylistic_range: string[];
    academic_proficiency: string[];
  };

  pronunciation_and_phonetics_notes: {
    minimal_pairs: Array<{
      word1: string;
      word2: string;
    }>;
    common_mispronunciations: Array<{
      word: string;
      issue: string;
    }>;
    tips: string[];
  };

  multisensory_phrases_for_IELTS: string[];

  cognitive_perception_contrast: {
    description: string;
    contrast_pairs: Array<{
      perception: string;
      cognitive: string;
    }>;
    examples: string[];
  };

  sensory_simulation_phrases: {
    purpose: string;
    examples: string[];
    level: string;
  };

  scientific_and_technical_use: {
    description: string;
    examples: string[];
    field_usage: {
      [key: string]: string[];
    };
  };

  advanced_errors_and_misinterpretation: Array<{
    mistake: string;
    correction: string;
    explanation: string;
  }>;

  learning_frameworks_and_ai_apps: {
    CEFR_alignment: boolean;
    Bloom_taxonomy: {
      remember: string[];
      understand: string[];
      apply: string[];
      analyze: string[];
      evaluate: string[];
      create: string[];
    };
    AI_suggestions: {
      language_learning_apps: string[];
      chatbot_conversation: string[];
    };
  };
}

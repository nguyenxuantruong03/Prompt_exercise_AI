export interface PerceptionVerbsType {
  definition: {
    core_concept: string;
    grammatical_status: string;
    common_patterns: string[];
    etymology_origin?: string;
    linguistic_classification?: string;
    cross_cultural_differences?: string;
  };

  perception_verbs_vocab: {
    visual_perception: string[];
    auditory_perception: string[];
    tactile_perception: string[];
    olfactory_perception: string[];
    gustatory_perception: string[];
    cognitive_perception: string[];
    idiomatic_phrasal_verbs: string[];
    stative_perception_verbs: string[];
    dynamic_perception_verbs: string[];
    archaic_perception_verbs?: string[];
    technical_perception_verbs?: string[];
  };

  foundational_levels: {
    A1: {
      focus: string;
      verbs: string[];
      usage_examples: string[];
      notes: string[];
      common_collocations?: string[];
      basic_patterns?: string[];
      frequency_order?: string[];
      learning_objectives?: string[];
      typical_mistakes?: string[];
    };
    A2: {
      focus: string;
      verbs: string[];
      usage_examples: string[];
      notes: string[];
      comparison_structures?: string[];
      extended_vocabulary?: string[];
      context_awareness?: string[];
      learning_objectives?: string[];
      cultural_contexts?: string[];
    };
  };

  intermediate_levels: {
    B1: {
      focus: string;
      verbs: string[];
      usage_examples: string[];
      structures: {
        bare_infinitive: string;
        participle: string;
        linking_comparison: string;
        that_clauses?: string;
        reflexive_usage?: string;
      };
      notes: string[];
      discourse_functions?: string[];
      register_awareness?: string[];
      pragmatic_implications?: string[];
      learning_objectives?: string[];
    };
    B2: {
      focus: string;
      usage_examples: string[];
      notes: string[];
      advanced_structures?: string[];
      stylistic_variations?: string[];
      academic_usage?: string[];
      nuanced_meanings?: string[];
      learning_objectives?: string[];
      critical_thinking_aspects?: string[];
    };
  };

  advanced_levels: {
    C1: {
      focus: string;
      verbs: string[];
      usage_examples: string[];
      advanced_features: string[];
      nominalization_patterns?: string[];
      metaphorical_extensions?: string[];
      philosophical_implications?: string[];
      discourse_analysis?: string[];
      learning_objectives?: string[];
    };
    C2: {
      focus: string;
      usage_examples: string[];
      notes: string[];
      literary_techniques?: string[];
      theoretical_frameworks?: string[];
      interdisciplinary_connections?: string[];
      mastery_indicators?: string[];
      learning_objectives?: string[];
    };
  };

  perception_structures: {
    action_verb: {
      description: string;
      example: string;
      notes: string[];
    };
    stative_verb: {
      description: string;
      example: string;
      notes: string[];
    };
    linking_verb: {
      description: string;
      example: string;
      notes: string[];
    };
    causative_like: {
      description: string;
      example: string;
      notes: string[];
    };
  };

  common_mistakes: Array<{
    error: string;
    correction: string;
    reason: string;
    level?: string;
    frequency?: string;
  }>;

  advanced_usage_notes: {
    passives: string[];
    nominalization: string[];
    literary_or_poetic: string[];
    academic_discourse?: string[];
    legal_language?: string[];
    scientific_terminology?: string[];
  };

  summary: {
    beginner_focus: string;
    intermediate_focus: string;
    advanced_focus: string;
    tips: string[];
    mastery_progression?: string[];
    assessment_criteria?: string[];
  };

  sense_groups: {
    visual: string[];
    auditory: string[];
    tactile: string[];
    olfactory: string[];
    gustatory: string[];
    synesthetic?: string[];
    metaphorical?: string[];
  };

  comparisons_with_other_verbs: {
    perception_vs_action: {
      explanation: string;
      example: {
        perception: string;
        action: string;
      };
    };
    perception_vs_linking: {
      explanation: string;
      example: {
        perception: string;
        linking_equivalent: string;
      };
    };
    perception_vs_cognitive?: {
      explanation: string;
      example: {
        perception: string;
        cognitive: string;
      };
    };
  };

  adjective_collocations: {
    look: string[];
    sound: string[];
    smell: string[];
    taste: string[];
    feel: string[];
    seem?: string[];
    appear?: string[];
  };

  adverb_combinations: {
    see: string[];
    hear: string[];
    feel: string[];
    watch?: string[];
    listen?: string[];
  };

  idioms_and_phrases: Array<{
    expression: string;
    meaning: string;
    level?: string;
    register?: string;
    cultural_context?: string;
  }>;

  tense_aspect_and_voice: {
    simple_present: string;
    present_continuous: string;
    past_simple: string;
    past_continuous: string;
    present_perfect: string;
    passive_form: string;
    causative_structure: string;
    future_forms?: string;
    perfect_continuous?: string;
    subjunctive?: string;
  };

  advanced_errors: Array<{
    error: string;
    correction: string;
    reason: string;
    level: string;
    linguistic_explanation?: string;
  }>;

  domain_usage: {
    literature: string[];
    law: string[];
    science: string[];
    medicine?: string[];
    psychology?: string[];
    technology?: string[];
    media?: string[];
  };

  semantic_contrasts: {
    perception_vs_emotion: {
      perception: string;
      emotion: string;
      note: string;
    };
    perception_vs_thinking: {
      perception: string;
      cognition: string;
      note: string;
    };
    perception_vs_volition: {
      perception: string;
      volition: string;
      note: string;
    };
    direct_vs_indirect?: {
      direct: string;
      indirect: string;
      note: string;
    };
  };

  stylistic_variations: {
    spoken_english: {
      typical_usage: string[];
      notes: string[];
    };
    academic_writing: {
      typical_usage: string[];
      notes: string[];
    };
    creative_writing?: {
      typical_usage: string[];
      notes: string[];
    };
    business_english?: {
      typical_usage: string[];
      notes: string[];
    };
  };

  hypothetical_and_conditional_usage: {
    examples: string[];
    notes: string[];
    modal_combinations?: string[];
    counterfactual_scenarios?: string[];
  };

  clausal_constructions: {
    noun_clause: {
      example: string;
      note: string;
    };
    infinitive_clause: {
      example: string;
      note: string;
    };
    relative_clause: {
      example: string;
      note: string;
    };
    participle_clause?: {
      example: string;
      note: string;
    };
  };

  impersonal_structures: {
    format: string;
    examples: string[];
    note: string;
    formal_variants?: string[];
  };

  exam_focus: {
    ielts: {
      part_speaking: string;
      writing: string;
      tip: string;
      band_descriptors?: Record<string, string>;
    };
    toefl: {
      listening: string;
      writing: string;
      speaking?: string;
      reading?: string;
    };
    cambridge: {
      B2: string;
      C1: string;
      C2: string;
      specific_tasks?: Record<string, string>;
    };
  };

  verb_confusion: Array<{
    confusing_pair: [string, string];
    example_wrong: string;
    example_right: string;
    tip: string;
    level?: string;
  }>;

  pedagogical_suggestions: {
    visual_aids: string;
    roleplay: string;
    tense_awareness: string;
    dictation: string;
    advanced_practice: string;
    technology_integration?: string;
    assessment_methods?: string;
  };

  modal_combinations: Array<{
    structure: string;
    example: string;
    usage: string;
    level?: string;
  }>;

  advanced_passive_usage: Array<{
    active: string;
    passive: string;
    note: string;
    register?: string;
  }>;

  semantic_distinction: {
    direct_perception: {
      definition: string;
      example: string;
    };
    indirect_perception: {
      definition: string;
      example: string;
      note: string;
    };
    inferred_perception?: {
      definition: string;
      example: string;
      note: string;
    };
  };

  authentic_usage_examples: string[];

  ai_and_data_applications: {
    computer_vision: string[];
    speech_recognition: string[];
    sentiment_analysis: string[];
    robotics: string[];
    machine_learning?: string[];
    natural_language_processing?: string[];
  };

  tense_shift_and_aspect: Array<{
    structure: string;
    example: {
      simple?: string;
      progressive?: string;
      perfect?: string;
      [key: string]: string | undefined;
    };
    note?: string;
    usage?: string;
  }>;

  cross_linguistic_comparison: {
    vietnamese: {
      see: string;
      watch: string;
      hear: string;
      feel: string;
      smell: string;
      note: string;
    };
    french: {
      see: string;
      look: string;
      hear: string;
      listen: string;
      feel: string;
      note: string;
    };
    spanish?: Record<string, string>;
    mandarin?: Record<string, string>;
  };

  pragmatics_and_politeness: Array<{
    form: string;
    function: string;
    level: string;
    cultural_considerations?: string;
  }>;

  artistic_usages: {
    music: string[];
    visual_art: string[];
    literature: string[];
    theater?: string[];
    film?: string[];
  };

  grammar_links: {
    linking_verbs: string[];
    causative_structures: string[];
    passive_voice: string[];
    reported_speech: string[];
    subjunctive_mood: string[];
    conditional_sentences?: string[];
  };

  references?: {
    academic_sources: Array<{
      title: string;
      author: string;
      year: number;
      publisher?: string;
      url?: string;
      type: "book" | "article" | "website" | "research";
    }>;
    online_resources: Array<{
      title: string;
      url: string;
      description: string;
      level?: string;
    }>;
    recommended_books: Array<{
      title: string;
      author: string;
      isbn?: string;
      level: string;
      focus: string;
    }>;
  };

  progressive_learning_path?: {
    A1_to_A2: string[];
    A2_to_B1: string[];
    B1_to_B2: string[];
    B2_to_C1: string[];
    C1_to_C2: string[];
  };

  assessment_rubrics?: {
    [level: string]: {
      criteria: string[];
      indicators: string[];
      common_errors: string[];
    };
  };
}

export interface CausativeVerbsType {
  id: number;
  definition: {
    simple: string;
    extended: string;
    academic: string;
    linguistic: string;
    comprehensive: string;
  };

  causativeVerbs: {
    core_causative_verbs: string[];
    passive_structures: string[];
    academic_and_formal: string[];
    informal_and_spoken: string[];
    causative_with_objects: string[];
    causative_idioms: string[];
    specialized_registers: string[];
    archaic_and_literary: string[];
  };

  core_verbs: string[];

  foundational_structures: {
    [key: string]: string;
  };

  usage_levels: {
    A1: {
      verbs: string[];
      examples: string[];
      focus: string;
      learning_objectives: string[];
      key_patterns: string[];
      common_contexts: string[];
    };
    A2: {
      verbs: string[];
      examples: string[];
      focus: string;
      learning_objectives: string[];
      key_patterns: string[];
      common_contexts: string[];
      frequency_notes: string[];
    };
    B1: {
      verbs: string[];
      examples: string[];
      focus: string;
      learning_objectives: string[];
      key_patterns: string[];
      semantic_distinctions: string[];
      discourse_functions: string[];
    };
    B2: {
      verbs: string[];
      examples: string[];
      focus: string;
      learning_objectives: string[];
      complex_structures: string[];
      register_awareness: string[];
      pragmatic_functions: string[];
    };
    C1: {
      features: string[];
      examples: string[];
      focus: string;
      learning_objectives: string[];
      advanced_constructions: string[];
      stylistic_variations: string[];
      discourse_markers: string[];
      academic_applications: string[];
    };
    C2: {
      features: string[];
      examples: string[];
      focus: string;
      learning_objectives: string[];
      mastery_indicators: string[];
      nuanced_usage: string[];
      cross_linguistic_awareness: string[];
      professional_applications: string[];
    };
  };

  passive_structures: {
    explanation: string;
    structure: string[];
    examples: string[];
    advanced_patterns: string[];
    formal_registers: string[];
  };

  comparative_analysis: {
    [key: string]: string;
  };

  common_mistakes: Array<{
    mistake: string;
    correction: string;
    explanation: string;
    level: string;
    frequency: string;
  }>;

  academic_usage: {
    semantics: string;
    syntactic_roles: string;
    discourse_functions: string[];
    theoretical_frameworks: string[];
    research_applications: string[];
  };

  diagnostic_patterns: {
    recognition: string[];
    signal_words: string[];
    question_forms: string[];
    transformation_rules: string[];
  };

  advanced_applications: {
    transformations: {
      from_active: string;
      from_passive: string;
      complex_embeddings: string[];
    };
    conditional: string[];
    reported_speech: string[];
    causative_with_modal_verbs: string[];
    hypothetical_constructions: string[];
  };

  spelling_and_form: {
    verb_forms: Array<{
      verb: string;
      base: string;
      past: string;
      participle: string;
      gerund?: string;
    }>;
    contractions: string[];
    pronunciation_notes: string[];
  };

  teaching_notes: {
    tips: string[];
    visual_techniques: string[];
    error_correction_drills: string[];
    progressive_introduction: string[];
    assessment_criteria: string[];
  };

  references: Array<{
    title: string;
    author?: string;
    publisher?: string;
    year?: string;
    isbn?: string;
    url?: string;
    type: "book" | "website" | "journal" | "research";
    description: string;
  }>;

  semantic_types: {
    [key: string]: {
      definition: string;
      example: string;
      subcategories?: string[];
    };
  };

  discourse_pragmatics: {
    politeness_strategies: string[];
    indirectness: string;
    negotiation: string;
    cultural_variations: string[];
    power_dynamics: string[];
  };

  collocations_and_chunks: {
    [key: string]: string[];
  };

  field_applications: {
    [key: string]: {
      example: string;
      note: string;
      typical_patterns: string[];
    };
  };

  comparison_with_similar_structures: {
    [key: string]: {
      difference: string;
      example: {
        [key: string]: string;
      };
    };
  };

  syntactic_variations: {
    passive_formality_scale: {
      [key: string]: string;
    };
    embedded_causatives: string[];
    negation_forms: string[];
    interrogative_forms: string[];
  };

  diagnostic_checklist: {
    questions_to_ask: string[];
    diagramming: {
      labels: string[];
      example: {
        sentence: string;
        diagram: string;
      };
    };
  };

  extended_examples: {
    [key: string]: string[];
  };

  student_tips: string[];

  citations: Array<{
    source: string;
    link?: string;
    edition?: string;
    publisher?: string;
    author?: string;
    year?: string;
  }>;

  metaphorical_usage: {
    description: string;
    examples: string[];
    notes: string;
    cognitive_linguistics: string[];
  };

  register_and_style: {
    [key: string]: {
      typical_verbs: string[];
      example: string;
      characteristics?: string[];
    };
  };

  language_change_and_etymology: {
    historical_roots: {
      [key: string]: string;
    };
    grammaticalization: {
      explanation: string;
      significance: string;
      examples: string[];
    };
  };

  psychological_and_cognitive_functions: {
    perspective_shift: {
      explanation: string;
      example: string;
    };
    theory_of_mind: {
      insight: string;
    };
    cognitive_load: string[];
  };

  error_diagnostics_with_feedback: {
    student_errors: Array<{
      error: string;
      correction: string;
      reason: string;
      level: string;
    }>;
    reflective_questions: string[];
  };

  contrastive_examples_chart: Array<{
    meaning: string;
    sentence: string;
    structure: string;
  }>;

  learner_tips_by_CEFR: {
    [key: string]: string;
  };

  memory_hooks_and_mnemonics: {
    [key: string]: string;
  };

  cross_linguistic_comparisons: {
    [language: string]: {
      similarities: string[];
      differences: string[];
      transfer_issues: string[];
    };
  };

  corpus_insights: {
    frequency_data: string[];
    collocation_strength: string[];
    register_distribution: string[];
  };

  assessment_and_evaluation: {
    diagnostic_tests: string[];
    proficiency_indicators: string[];
    error_analysis_framework: string[];
  };
}

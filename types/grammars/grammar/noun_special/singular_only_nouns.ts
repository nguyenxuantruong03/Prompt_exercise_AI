export interface singularOnlyNounsType {
  id: number;
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    examples: string[];
    detailed_explanation: string;
    etymology: string;
    cross_linguistic_comparison: string;
  };

  classification: {
    uncountable_substances: {
      definition: string;
      examples: string[];
      level: string;
      usage_notes: string[];
    };
    abstract_concepts: {
      definition: string;
      examples: string[];
      level: string;
      usage_notes: string[];
    };
    collective_categories: {
      definition: string;
      examples: string[];
      level: string;
      usage_notes: string[];
    };
    academic_technical: {
      definition: string;
      examples: string[];
      level: string;
      usage_notes: string[];
    };
    mass_nouns: {
      definition: string;
      examples: string[];
      level: string;
      usage_notes: string[];
    };
  };

  singular_only_nouns_vocab: {
    [category: string]: string[];
  };

  cefrLevels: {
    A1: {
      description: string;
      vocabulary: string[];
      key_concepts: string[];
      grammar_focus: string[];
      communicative_functions: string[];
    };
    A2: {
      description: string;
      vocabulary: string[];
      key_concepts: string[];
      grammar_focus: string[];
      communicative_functions: string[];
    };
    B1: {
      description: string;
      vocabulary: string[];
      key_concepts: string[];
      grammar_focus: string[];
      communicative_functions: string[];
    };
    B2: {
      description: string;
      vocabulary: string[];
      key_concepts: string[];
      grammar_focus: string[];
      communicative_functions: string[];
    };
    C1: {
      description: string;
      vocabulary: string[];
      key_concepts: string[];
      grammar_focus: string[];
      communicative_functions: string[];
    };
    C2: {
      description: string;
      vocabulary: string[];
      key_concepts: string[];
      grammar_focus: string[];
      communicative_functions: string[];
    };
  };

  forms: {
    basic: string;
    with_article: string;
    with_quantifier: string;
    with_no_article: string;
    partitive_expressions: string[];
    formal_register: string[];
  };

  usage: Array<{
    type: string;
    description: string;
    examples: string[];
    level: string;
    context: string;
    register: string;
  }>;

  examples: {
    [level: string]: {
      direct: string;
      correct: string;
      incorrect: string;
      context: string;
      explanation: string;
    };
  };

  practiceTypes: {
    [level: string]: string[];
  };

  commonMistakes: {
    [level: string]: string[];
  };

  recognition: string[];
  timeMarkers: string[];

  pronounChanges: {
    basic: {
      [pronoun: string]: string;
    };
    advanced: {
      [pronoun: string]: string;
    };
  };

  reportingVerbs: string[];

  notes: string[];

  culturalContexts: {
    [context: string]: {
      description: string;
      examples: string[];
    };
  };

  specialCases: {
    [caseType: string]: {
      description: string;
      examples: string[];
    };
  };

  etymology: {
    origin: string;
    development: string;
    modernUsage: string;
  };

  crossLinguistic: {
    similarities: string;
    differences: string;
    learnerChallenges: string;
  };

  vocabulary: {
    [level: string]: string[];
  };

  grammaticalPatterns: {
    [pattern: string]: {
      correct: string[];
      incorrect: string[];
    };
  };

  usageContexts: {
    [level: string]: string[];
  };

  errorPatterns: {
    [level: string]: string[];
  };

  learningStrategies: {
    [level: string]: string[];
  };

  references: {
    academic_sources: Array<{
      title: string;
      author: string;
      year: number;
      publisher: string;
      pages?: string;
      url?: string;
    }>;
    grammar_books: Array<{
      title: string;
      author: string;
      publisher: string;
      edition?: string;
      isbn?: string;
    }>;
    online_resources: Array<{
      title: string;
      website: string;
      url: string;
      access_date?: string;
    }>;
    linguistic_studies: Array<{
      title: string;
      author: string;
      journal: string;
      year: number;
      volume?: string;
      pages?: string;
    }>;
    pedagogical_materials: Array<{
      title: string;
      author: string;
      publisher: string;
      level: string;
      type: string;
    }>;
  };

  detailed_analysis: {
    morphological_properties: string[];
    syntactic_behavior: string[];
    semantic_characteristics: string[];
    pragmatic_considerations: string[];
  };

  cognitive_aspects: {
    mental_representation: string;
    processing_difficulties: string[];
    acquisition_stages: string[];
  };

  teaching_methodology: {
    presentation_techniques: string[];
    practice_activities: string[];
    assessment_methods: string[];
    error_correction: string[];
  };
}

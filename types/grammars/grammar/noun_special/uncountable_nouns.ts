export interface uncountableNounsType {
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    historical_development: string;
    cross_linguistic_perspective: string;
    semantic_classification: string;
    examples: string[];
  };

  references: {
    academic_sources: Array<{
      title: string;
      author: string;
      year: number;
      publisher: string;
      isbn?: string;
      url?: string;
      pages?: string;
      description: string;
    }>;
    grammar_books: Array<{
      title: string;
      author: string;
      level: string;
      publisher: string;
      edition: string;
      isbn: string;
      relevance: string;
    }>;
    online_resources: Array<{
      title: string;
      url: string;
      institution: string;
      description: string;
      access_date: string;
    }>;
    linguistic_journals: Array<{
      title: string;
      journal: string;
      volume: string;
      issue: string;
      year: number;
      pages: string;
      doi?: string;
    }>;
    dictionaries: Array<{
      title: string;
      publisher: string;
      edition: string;
      url?: string;
      isbn?: string;
    }>;
  };

  levelBasedLearning: {
    A1: {
      learning_objectives: string[];
      essential_vocabulary: string[];
      key_concepts: string[];
      practical_applications: string[];
      common_contexts: string[];
      basic_rules: string[];
    };
    A2: {
      learning_objectives: string[];
      essential_vocabulary: string[];
      key_concepts: string[];
      practical_applications: string[];
      common_contexts: string[];
      basic_rules: string[];
    };
    B1: {
      learning_objectives: string[];
      essential_vocabulary: string[];
      key_concepts: string[];
      practical_applications: string[];
      common_contexts: string[];
      intermediate_rules: string[];
    };
    B2: {
      learning_objectives: string[];
      essential_vocabulary: string[];
      key_concepts: string[];
      practical_applications: string[];
      common_contexts: string[];
      advanced_rules: string[];
    };
    C1: {
      learning_objectives: string[];
      essential_vocabulary: string[];
      key_concepts: string[];
      practical_applications: string[];
      common_contexts: string[];
      sophisticated_rules: string[];
    };
    C2: {
      learning_objectives: string[];
      essential_vocabulary: string[];
      key_concepts: string[];
      practical_applications: string[];
      common_contexts: string[];
      mastery_rules: string[];
    };
  };

  uncountable_nouns_vocabs: {
    [category: string]: string[];
  };

  semanticCategories: {
    substances_materials: {
      definition: string;
      subcategories: {
        [key: string]: {
          description: string;
          examples: string[];
          level: string;
        };
      };
    };
    abstract_concepts: {
      definition: string;
      subcategories: {
        [key: string]: {
          description: string;
          examples: string[];
          level: string;
        };
      };
    };
    collective_mass: {
      definition: string;
      subcategories: {
        [key: string]: {
          description: string;
          examples: string[];
          level: string;
        };
      };
    };
    activities_processes: {
      definition: string;
      subcategories: {
        [key: string]: {
          description: string;
          examples: string[];
          level: string;
        };
      };
    };
    fields_disciplines: {
      definition: string;
      subcategories: {
        [key: string]: {
          description: string;
          examples: string[];
          level: string;
        };
      };
    };
  };

  cefrLevels: {
    [level: string]: string;
  };

  forms: {
    [formType: string]: string;
  };

  usage: Array<{
    type: string;
    description: string;
    examples: string[];
    level: string;
  }>;

  examples: {
    [exampleType: string]: {
      direct: string;
      correct: string;
      incorrect: string;
      context: string;
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
    [type: string]: {
      [pronoun: string]: string;
    };
  };

  reportingVerbs: string[];

  exercises: {
    [exerciseType: string]: {
      description: string;
      difficulty: string;
      examples: string[];
    };
  };

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
      examples: Array<any>;
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

  advancedConcepts: {
    countable_uncountable_pairs: Array<{
      word: string;
      countable_meaning: string;
      uncountable_meaning: string;
      examples: {
        countable: string[];
        uncountable: string[];
      };
      level: string;
    }>;
    register_variation: {
      formal: string[];
      informal: string[];
      academic: string[];
      technical: string[];
    };
    collocations: Array<{
      noun: string;
      common_collocations: string[];
      level: string;
    }>;
    idiomatic_expressions: Array<{
      expression: string;
      meaning: string;
      example: string;
      level: string;
    }>;
  };

  pedagogicalSequencing: {
    teaching_order: string[];
    prerequisite_knowledge: string[];
    assessment_criteria: {
      [level: string]: string[];
    };
  };
}

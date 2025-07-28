export interface abstractNounsType {
  definition: {
    core_concept: string;
    grammatical_status: string;
    linguistic_significance: string;
    examples: string[];
    detailed_explanation: string;
    formation_patterns: string[];
    usage_contexts: string[];
  };

  abstract_nouns_vocab: {
    [category: string]: string[];
  };

  cefrLevels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  detailed_cefr_breakdown: {
    A1: {
      level_description: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      common_patterns: string[];
      learning_objectives: string[];
    };
    A2: {
      level_description: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      common_patterns: string[];
      learning_objectives: string[];
    };
    B1: {
      level_description: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      common_patterns: string[];
      learning_objectives: string[];
    };
    B2: {
      level_description: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      common_patterns: string[];
      learning_objectives: string[];
    };
    C1: {
      level_description: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      common_patterns: string[];
      learning_objectives: string[];
    };
    C2: {
      level_description: string;
      key_concepts: string[];
      essential_vocabulary: string[];
      common_patterns: string[];
      learning_objectives: string[];
    };
  };

  grammatical_properties: {
    countability: {
      countable_abstract_nouns: string[];
      uncountable_abstract_nouns: string[];
      both_countable_uncountable: string[];
    };

    determiners: {
      definite_article_usage: string[];
      indefinite_article_usage: string[];
      zero_article_usage: string[];
    };

    plural_forms: {
      regular_plurals: string[];
      irregular_plurals: string[];
      no_plural_form: string[];
    };

    collocations: {
      verb_abstract_noun: string[];
      adjective_abstract_noun: string[];
      preposition_abstract_noun: string[];
    };
  };

  semantic_categories: {
    emotions_feelings: {
      subcategories: {
        [key: string]: string[];
      };
    };
    mental_processes: {
      subcategories: {
        [key: string]: string[];
      };
    };
    social_concepts: {
      subcategories: {
        [key: string]: string[];
      };
    };
    philosophical_concepts: {
      subcategories: {
        [key: string]: string[];
      };
    };
    scientific_concepts: {
      subcategories: {
        [key: string]: string[];
      };
    };
  };

  common_mistakes: {
    article_errors: string[];
    countability_errors: string[];
    collocation_errors: string[];
    meaning_confusion: string[];
  };

  advanced_usage: {
    academic_writing: string[];
    formal_discourse: string[];
    literary_usage: string[];
    technical_terminology: string[];
  };

  references: {
    grammar_books: {
      title: string;
      author: string;
      isbn?: string;
      pages?: string;
      description: string;
    }[];
    online_resources: {
      title: string;
      url: string;
      description: string;
    }[];
    academic_papers: {
      title: string;
      authors: string[];
      journal?: string;
      year: number;
      description: string;
    }[];
  };
}

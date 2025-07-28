export interface PluralOnlyNounsType {
  plural_only_comprehensive: {
    definition: {
      core_concept: string;
      grammatical_status: string;
      linguistic_significance: string;
      historical_development: string;
    };
    plural_only_vocab: {
      [category: string]: string[];
    };
    foundational_characteristics: {
      morphological_features: {
        form_constraints: {
          plural_marking: string;
          agreement_patterns: string;
          exceptions: string;
        };
        structural_types: {
          regular_plurals: string[];
          irregular_forms: string[];
          compound_forms: string[];
        };
      };
      semantic_categories: {
        inherent_plurality: {
          paired_objects: {
            description: string;
            examples: string[];
            rationale: string;
          };
          collective_entities: {
            description: string;
            examples: string[];
            rationale: string;
          };
        };
        abstract_concepts: {
          academic_fields: {
            description: string;
            examples: string[];
            rationale: string;
          };
          measurement_concepts: {
            description: string;
            examples: string[];
            rationale: string;
          };
        };
      };
    };
    theoretical_principles: {
      cognitive_basis: {
        conceptual_mapping: {
          physical_duality: string;
          collective_unity: string;
          abstract_wholeness: string;
        };
        processing_patterns: {
          form_access: string;
          agreement_computation: string;
          semantic_integration: string;
        };
      };
      linguistic_universals: {
        cross_linguistic_patterns: {
          typological_features: string;
          semantic_domains: string;
          grammatical_behavior: string;
        };
        functional_motivations: {
          conceptual_necessity: string;
          historical_development: string;
          communicative_efficiency: string;
        };
      };
    };
  };
  grammatical_patterns: {
    verb_agreement: {
      basic_rules: {
        always_plural: {
          examples: string[];
        };
        apparent_plural_but_singular: {
          examples: string[];
        };
      };
      special_cases: {
        collective_terms: {
          plural_agreement: string[];
          context_dependent: string[];
        };
      };
    };
    determiners: {
      correct_usage: {
        these_those: string[];
        pair_of: string[];
        wrong_forms: string[];
      };
      quantifiers: {
        specific: string[];
        general: string[];
      };
    };
  };
  semantic_categories: {
    clothing_items: {
      everyday_wear: {
        lower_body: string[];
        sleepwear: string[];
        formal: string[];
        specialized: string[];
      };
      accessories: {
        eyewear: string[];
        other: string[];
      };
    };
    tools_and_instruments: {
      cutting_tools: {
        common: string[];
        specialized: string[];
      };
      gripping_tools: {
        basic: string[];
        specialized: string[];
      };
      optical: {
        viewing: string[];
        measuring: string[];
      };
    };
    grouped_concepts: {
      time_periods: {
        celebrations: string[];
        general: string[];
      };
      collective_items: {
        personal: string[];
        commercial: string[];
      };
    };
  };
  academic_professional_categories: {
    scientific_fields: {
      natural_sciences: {
        terms: string[];
        usage_notes: string;
      };
      social_sciences: {
        terms: string[];
        contextual_use: string;
      };
    };
    business_finance: {
      monetary: string[];
      documentation: string[];
    };
    legal_administrative: {
      proceedings: string[];
      documentation: string[];
    };
  };
  special_usage_patterns: {
    measurement_distance: {
      expressions: {
        distance: string[];
        examples: string[];
      };
      time_periods: {
        duration: string[];
        examples: string[];
      };
    };
    games_sports: {
      traditional: string[];
      modern: string[];
    };
    medical_conditions: {
      common: string[];
      symptoms: string[];
    };
  };
  regional_variations: {
    british_english: {
      preferred_terms: {
        clothing: string[];
        examples: string[];
      };
      collective_nouns: {
        plural_agreement: string[];
        examples: string[];
      };
    };
    american_english: {
      preferred_terms: {
        clothing: string[];
        examples: string[];
      };
      collective_nouns: {
        singular_agreement: string[];
        examples: string[];
      };
    };
  };
  common_errors_solutions: {
    basic_mistakes: {
      articles: {
        incorrect: string[];
        correct: string[];
      };
      number_agreement: {
        incorrect: string[];
        correct: string[];
      };
    };
    advanced_issues: {
      academic_terms: {
        incorrect: string[];
        correct: string[];
      };
      collective_nouns: {
        context_dependent: string[];
        explanation: string;
      };
    };
  };
  historical_etymology: {
    latin_origin: {
      academic: string[];
      legal: string[];
    };
    old_english: {
      tools: string[];
      clothing: string[];
    };
    french_origin: {
      clothing: string[];
      accessories: string[];
    };
  };
  extended_categories: {
    [category: string]: any;
  };
  linguistic_patterns: {
    compound_plurals: {
      hyphenated: {
        person_relation: string[];
        position_title: string[];
        descriptive: string[];
      };
      space_separated: {
        official_titles: string[];
        military_ranks: string[];
        descriptive_phrases: string[];
      };
    };
    foreign_plurals: {
      latin_origin: {
        a_ae: string[];
        um_a: string[];
        us_i: string[];
        is_es: string[];
      };
      greek_origin: {
        on_a: string[];
        ma_mata: string[];
      };
      french_origin: {
        eau_eaux: string[];
        special_cases: string[];
      };
    };
  };
  professional_terminology: {
    [field: string]: any;
  };
  references_and_sources: {
    academic_books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      relevance: string;
    }[];
    linguistic_resources: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      relevance: string;
    }[];
    online_databases: {
      name: string;
      url: string;
      description: string;
      access_date: string;
    }[];
    grammar_references: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      chapters: string[];
    }[];
    research_papers: {
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi?: string;
      relevance: string;
    }[];
  };
  cefr_level_progression: {
    A1: {
      basic_items: {
        category: string;
        items: string[];
        examples: string[];
        usage_notes: string;
        common_mistakes: string[];
      }[];
      learning_objectives: string[];
      key_patterns: string[];
    };
    A2: {
      expanded_vocabulary: {
        category: string;
        items: string[];
        examples: string[];
        usage_notes: string;
        common_mistakes: string[];
      }[];
      learning_objectives: string[];
      key_patterns: string[];
      grammar_focus: string[];
    };
    B1: {
      intermediate_concepts: {
        category: string;
        items: string[];
        examples: string[];
        usage_notes: string;
        register_awareness: string;
      }[];
      learning_objectives: string[];
      key_patterns: string[];
      grammar_focus: string[];
      error_analysis: string[];
    };
    B2: {
      advanced_vocabulary: {
        category: string;
        items: string[];
        examples: string[];
        usage_notes: string;
        register_variation: string;
        stylistic_considerations: string;
      }[];
      learning_objectives: string[];
      key_patterns: string[];
      grammar_focus: string[];
      discourse_features: string[];
    };
    C1: {
      sophisticated_usage: {
        category: string;
        items: string[];
        examples: string[];
        usage_notes: string;
        register_mastery: string;
        nuanced_meanings: string;
      }[];
      learning_objectives: string[];
      key_patterns: string[];
      advanced_grammar: string[];
      academic_applications: string[];
    };
    C2: {
      mastery_level: {
        category: string;
        items: string[];
        examples: string[];
        usage_notes: string;
        expert_usage: string;
        subtle_distinctions: string;
      }[];
      learning_objectives: string[];
      key_patterns: string[];
      expert_grammar: string[];
      professional_applications: string[];
    };
  };
}

export interface NounsType {
  definition: string;

  usage?: {
    type: string;
    example: string;
    advanced_examples: string[];
  }[];

  levels?: {
    A1: { focus: string; skills: string[] };
    A2: { focus: string; skills: string[] };
    B1: { focus: string; skills: string[] };
    B2: { focus: string; skills: string[] };
    C1: { focus: string; skills: string[] };
    C2: { focus: string; skills: string[] };
  };

  learning_methods?: {
    visual: string[];
    auditory: string[];
    kinesthetic: string[];
    reading_writing: string[];
  };

  common_mistakes?: {
    countable_uncountable: string[];
    plural_forms: string[];
    articles: string[];
    possessive: string[];
  };

  practice_tips?: string[];
  cross_references?: string[];

  specialized_domains?: {
    definition: string;
    academic_writing: {
      characteristics: string[];
      examples: string[];
    };
    business: {
      characteristics: string[];
      examples: string[];
    };
    legal: {
      characteristics: string[];
      examples: string[];
    };
    medical: {
      characteristics: string[];
      examples: string[];
    };
    scientific: {
      characteristics: string[];
      examples: string[];
    };
  };

  types: {
    common: {
      definition: string;
      examples: string[];
      rules: string[];
    };
    proper: {
      definition: string;
      examples: string[];
      subcategories: {
        people: string[];
        places: string[];
        organizations: string[];
        events: string[];
        brands: string[];
        titles: string[];
      };
      rules: string[];
    };
    countable: {
      definition: string;
      examples: string[];
      characteristics: string[];
      irregular_plurals: {
        child: string;
        man: string;
        woman: string;
        foot: string;
        tooth: string;
        mouse: string;
        goose: string;
        ox: string;
        person: string;
      };
    };
    uncountable: {
      definition: string;
      examples: string[];
      categories: {
        liquids: string[];
        materials: string[];
        abstract_concepts: string[];
        activities: string[];
        food_substances: string[];
        information: string[];
      };
      characteristics: string[];
      measurement_units: string[];
    };
    concrete: {
      definition: string;
      examples: string[];
      characteristics: string[];
    };
    abstract: {
      definition: string;
      examples: string[];
      categories: {
        emotions: string[];
        qualities: string[];
        concepts: string[];
        states: string[];
      };
      advanced_usage: string[];
    };
    collective: {
      definition: string;
      examples: string[];
      agreement_patterns: {
        british_english: string;
        american_english: string;
      };
      common_collectives: string[];
    };
    compound: {
      definition: string;
      examples: string[];
      formation_patterns: {
        noun_noun: string[];
        adjective_noun: string[];
        verb_noun: string[];
        noun_verb: string[];
        preposition_noun: string[];
      };
      writing_styles: {
        one_word: string[];
        hyphenated: string[];
        two_words: string[];
      };
    };
  };

  advanced_structures: {
    nominalization: {
      definition: string;
      examples: {
        verb_to_noun: {
          organize: string;
          decide: string;
          apply: string;
          investigate: string;
          conclude: string;
        };
        adjective_to_noun: {
          deep: string;
          wide: string;
          long: string;
          strong: string;
          happy: string;
        };
      };
      academic_usage: string[];
    };

    noun_phrases: {
      definition: string;
      structure: string;
      examples: {
        simple: string;
        complex: string;
        academic: string;
      };
      components: {
        determiners: string[];
        pre_modifiers: string[];
        head_noun: string;
        post_modifiers: string[];
      };
    };
  };

  recognition: string[];

  examples: {
    common: string[];
    proper: string[];
    countable: string[];
    uncountable: string[];
    collective: string[];
    abstract: string[];
    compound: string[];
  };

  advanced_topics: {
    zero_article: {
      definition: string;
      cases: string[];
    };

    partitive_constructions: {
      definition: string;
      examples: string[];
    };

    semantic_roles: {
      agent: string;
      patient: string;
      instrument: string;
      location: string;
      time: string;
    };
  };

  notes: string[];

  exercises_by_level: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  morphology: {
    definition: string;
    suffixes: {
      agent_nouns: {
        definition: string;
        suffixes: { suffix: string; examples: string[] }[];
      };
      abstract_nouns: {
        definition: string;
        suffixes: { suffix: string; examples: string[] }[];
      };
      diminutive_nouns: {
        definition: string;
        suffixes: { suffix: string; examples: string[] }[];
      };
    };
    prefixes: {
      definition: string;
      examples: { prefix: string; meaning: string; examples: string[] }[];
    };
    word_formation_processes: {
      conversion: {
        definition: string;
        examples: string[];
      };
      blending: {
        definition: string;
        examples: string[];
      };
      clipping: {
        definition: string;
        examples: string[];
      };
      acronyms: {
        definition: string;
        examples: string[];
      };
    };
  };

  syntactic_functions: {
    definition: string;
    functions: {
      subject: {
        definition: string;
        examples: string[];
      };
      direct_object: {
        definition: string;
        examples: string[];
      };
      indirect_object: {
        definition: string;
        examples: string[];
      };
      subject_complement: {
        definition: string;
        examples: string[];
      };
      object_complement: {
        definition: string;
        examples: string[];
      };
      prepositional_object: {
        definition: string;
        examples: string[];
      };
    };
  };

  semantic_properties: {
    definition: string;
    animacy: {
      animate: {
        definition: string;
        subcategories: {
          human: string[];
          animal: string[];
          personified: string[];
        };
      };
      inanimate: {
        definition: string;
        subcategories: {
          concrete: string[];
          abstract: string[];
          natural_phenomena: string[];
        };
      };
    };
    definiteness: {
      definite: {
        definition: string;
        examples: string[];
        determiners: string[];
      };
      indefinite: {
        definition: string;
        examples: string[];
        determiners: string[];
      };
    };
    specificity: {
      specific: {
        definition: string;
        examples: string[];
      };
      generic: {
        definition: string;
        examples: string[];
      };
    };
  };

  cross_linguistic_aspects: {
    definition: string;
    cultural_concepts: {
      definition: string;
      examples: { concept: string; language: string; meaning: string }[]; // ✅ array bình thường
    };
    borrowed_nouns: {
      definition: string;
      categories: {
        food: string[];
        technology: string[];
        arts: string[];
        clothing: string[];
        philosophy: string[];
      };
    };
    false_friends: {
      definition: string;
      examples: string[];
    };
  };

  register_and_style: {
    definition: string;
    formal_vs_informal: {
      formal: {
        characteristics: string[];
        examples: string[];
      };
      informal: {
        characteristics: string[];
        examples: string[];
      };
      pairs: { formal: string; informal: string }[]; // ✅ Không yêu cầu số lượng phần tử cố định
    };
    academic_vs_conversational: {
      academic: {
        characteristics: string[];
        examples: string[];
      };
      conversational: {
        characteristics: string[];
        examples: string[];
      };
    };
    regional_variations: {
      british_vs_american: { british: string; american: string }[];
    };
  };

  discourse_functions: {
    definition: string;
    cohesion: {
      reference: {
        anaphoric: string;
        cataphoric: string;
        exophoric: string;
      };
      lexical_cohesion: {
        repetition: string;
        synonymy: string;
        hyponymy: string;
        meronymy: string;
      };
    };
    information_structure: {
      given_new: {
        given: string;
        new: string;
        example: string;
      };
      topic_comment: {
        topic: string;
        comment: string;
        example: string;
      };
    };
  };

  pragmatic_aspects: {
    definition: string;
    speech_acts: {
      requests: string;
      complaints: string;
      compliments: string;
    };
    politeness: {
      direct: string;
      indirect: string;
      formal: string;
    };
    implicature: {
      definition: string;
      examples: string[];
    };
  };

  learning_difficulties: {
    definition: string;
    l1_interference: {
      definition: string;
      examples: string[];
    };
    developmental_stages: {
      beginner: string[];
      intermediate: string[];
      advanced: string[];
    };
  };

  assessment_criteria: {
    definition: string;
    accuracy: {
      morphological: string;
      syntactic: string;
      semantic: string;
      pragmatic: string;
    };
    complexity: {
      lexical: string;
      structural: string;
      discoursal: string;
    };
    fluency: {
      automaticity: string;
      speed: string;
      flexibility: string;
    };
  };

  digital_age_nouns: {
    definition: string;
    technology: string[];
    social_media: string[];
    remote_work: string[];
    gaming: string[];
  };
}

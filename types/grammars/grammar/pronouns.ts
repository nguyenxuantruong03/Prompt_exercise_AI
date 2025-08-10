export interface PronounsType {
  id: number;
  definition: string;
  types: {
    personal: {
      subject: string[];
      object: string[];
    };
    possessive: {
      adjective: string[];
      pronoun: string[];
    };
    reflexive: string[];
    demonstrative: string[];
    interrogative: string[];
    relative: string[];
    indefinite: string[];
    reciprocal: string[];
    emphatic: string[];
  };
  usage: Array<{
    type: string;
    example: string;
  }>;
  recognition: string[];
  examples: {
    personal: {
      subject: string;
      object: string;
    };
    possessive: {
      adjective: string;
      pronoun: string;
    };
    reflexive: string;
    demonstrative: string;
    interrogative: string;
    relative: string;
    indefinite: string;
    reciprocal: string;
    emphatic: string;
  };
  notes: string[];
  levels: {
    [key: string]: {
      focus: string;
      skills: string[];
    };
  };
  advanced_topics: {
    gender_neutral: {
      definition: string;
      examples: string[];
      notes: string[];
    };
    pronoun_agreement: {
      definition: string;
      examples: string[];
      notes: string[];
    };
    pronoun_reference: {
      definition: string;
      types: string[];
      notes: string[];
    };
    register_and_style: {
      definition: string;
      formal: string[];
      informal: string[];
      notes: string[];
    };
    common_mistakes: {
      definition: string;
      mistakes: string[];
    };
    discourse_functions: {
      definition: string;
      cohesion: string[];
      information_structure: string[];
    };
    pragmatic_aspects: {
      definition: string;
      politeness: string[];
      implicature: string[];
    };
    cross_linguistic_aspects: {
      definition: string;
      examples: string[];
      notes: string[];
    };
    learning_difficulties: {
      definition: string;
      issues: string[];
    };
    assessment_criteria: {
      definition: string;
      criteria: string[];
    };
    digital_age_pronouns: {
      definition: string;
      examples: string[];
      notes: string[];
    };
    specialized_domains: {
      definition: string;
      academic: string[];
      business: string[];
      legal: string[];
      medical: string[];
      scientific: string[];
    };
  };
  subtypes: {
    personal: {
      definition: string;
      subject: string[];
      object: string[];
      notes: string[];
      examples: string[];
    };
    possessive: {
      definition: string;
      adjective: string[];
      pronoun: string[];
      notes: string[];
      examples: string[];
    };
    reflexive: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
    demonstrative: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
    interrogative: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
    relative: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
    indefinite: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
    reciprocal: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
    emphatic: {
      definition: string;
      forms: string[];
      notes: string[];
      examples: string[];
    };
  };
  error_patterns: {
    definition: string;
    categories: {
      agreement_errors: {
        definition: string;
        examples: string[];
        reasons: string[];
      };
      case_errors: {
        definition: string;
        examples: string[];
        reasons: string[];
      };
      reference_errors: {
        definition: string;
        examples: string[];
        reasons: string[];
      };
    };
  };
  pedagogical_approaches: {
    definition: string;
    methodologies: {
      communicative: {
        definition: string;
        activities: {
          role_play: string[];
          task_based: string[];
          project_work: string[];
        };
      };
      cognitive: {
        definition: string;
        strategies: {
          pattern_recognition: string[];
          error_analysis: string[];
          metalinguistic_awareness: string[];
        };
      };
    };
    assessment_frameworks: {
      formative: {
        definition: string;
        tools: string[];
      };
      summative: {
        definition: string;
        components: string[];
      };
      diagnostic: {
        definition: string;
        areas: string[];
      };
    };
  };
  discourse_functions: {
    definition: string;
    textual_cohesion: {
      definition: string;
      mechanisms: {
        reference_chains: string[];
        discourse_markers: string[];
      };
    };
    pragmatic_functions: {
      definition: string;
      aspects: {
        politeness: string[];
        stance: string[];
        inclusion: string[];
      };
    };
    genre_specific: {
      definition: string;
      academic: {
        characteristics: string[];
        examples: string[];
      };
      narrative: {
        characteristics: string[];
        examples: string[];
      };
      professional: {
        characteristics: string[];
        examples: string[];
      };
    };
  };
  acquisition_sequence: {
    definition: string;
    stages: {
      early: {
        features: string[];
        challenges: string[];
      };
      intermediate: {
        features: string[];
        challenges: string[];
      };
      advanced: {
        features: string[];
        challenges: string[];
      };
    };
    influencing_factors: {
      linguistic: string[];
      cognitive: string[];
      social: string[];
    };
  };
  teaching_methodology: {
    definition: string;
    classroom_techniques: {
      scaffolding: {
        definition: string;
        stages: string[];
      };
      integrated_skills: {
        listening: string[];
        speaking: string[];
        reading: string[];
        writing: string[];
      };
      error_treatment: {
        immediate: string[];
        delayed: string[];
      };
    };
    authentic_materials: {
      types: string[];
      adaptation_techniques: string[];
    };
  };
  contextual_patterns: {
    definition: string;
    formal_contexts: {
      academic_writing: {
        preferences: string[];
        examples: string[];
      };
      business_communication: {
        preferences: string[];
        examples: string[];
      };
    };
    informal_contexts: {
      conversation: {
        features: string[];
        examples: string[];
      };
      social_media: {
        features: string[];
        examples: string[];
      };
    };
  };
  integrated_skills_development: {
    definition: string;
    receptive_skills: {
      listening_comprehension: {
        tasks: string[];
        strategies: string[];
      };
      reading_comprehension: {
        tasks: string[];
        strategies: string[];
      };
    };
    productive_skills: {
      speaking: {
        tasks: string[];
        strategies: string[];
      };
      writing: {
        tasks: string[];
        strategies: string[];
      };
    };
  };
  performance_criteria: {
    definition: string;
    accuracy: {
      form: {
        basic: string;
        intermediate: string;
        advanced: string;
      };
      agreement: {
        basic: string;
        intermediate: string;
        advanced: string;
      };
      reference: {
        basic: string;
        intermediate: string;
        advanced: string;
      };
    };
    appropriacy: {
      register: {
        basic: string;
        intermediate: string;
        advanced: string;
      };
      cultural: {
        basic: string;
        intermediate: string;
        advanced: string;
      };
      pragmatic: {
        basic: string;
        intermediate: string;
        advanced: string;
      };
    };
  };
  practical_applications: {
    definition: string;
    professional_contexts: {
      writing: {
        emails: string[];
        reports: string[];
        presentations: string[];
      };
      speaking: {
        meetings: string[];
        negotiations: string[];
        customer_service: string[];
      };
    };
    academic_contexts: {
      research: string[];
      teaching: string[];
      assessment: string[];
    };
    social_contexts: {
      casual: string[];
      online: string[];
      intercultural: string[];
    };
  };
}

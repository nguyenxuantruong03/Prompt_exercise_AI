// Interfaces for Irregular Plurals Type System
interface IrregularPluralPair {
  singular: string;
  plural: string;
  pronunciation?: string;
  etymology?: string;
  difficulty?: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  examples?: string[];
  notes?: string;
}

interface CEFRLevelContent {
  focus: string;
  vocabulary: IrregularPluralPair[];
  patterns: string[];
  learningObjectives: string[];
  commonMistakes: string[];
  practiceTypes: string[];
  keyRules: string[];
}

interface DefinitionStructure {
  core_concept: string;
  grammatical_status: string;
  linguistic_significance: string;
  historical_development: string;
  morphological_patterns: string[];
  examples: string[];
  frequency_analysis: string;
  cross_linguistic_comparison: string;
}

interface References {
  academic_sources: {
    title: string;
    author: string;
    year: number;
    publisher?: string;
    url?: string;
    type: "book" | "article" | "website" | "journal";
    description: string;
  }[];
  online_resources: {
    title: string;
    url: string;
    description: string;
    reliability: "high" | "medium" | "low";
  }[];
  dictionaries: {
    name: string;
    url?: string;
    description: string;
  }[];
}

interface LinguisticAnalysis {
  phonological_changes: string[];
  morphological_processes: string[];
  historical_etymology: {
    old_english: string[];
    middle_english: string[];
    latin_influence: string[];
    greek_influence: string[];
    germanic_roots: string[];
  };
  semantic_evolution: string[];
}

interface PedagogicalApproach {
  teaching_strategies: {
    level: string;
    methods: string[];
    activities: string[];
    assessment: string[];
  }[];
  learning_progression: string[];
  memory_techniques: string[];
  error_prediction: string[];
}

export interface irregularPluralsType {
  id: number;
  definition: DefinitionStructure;

  // CEFR Level-based Learning Structure
  cefrLevels: {
    A1: CEFRLevelContent;
    A2: CEFRLevelContent;
    B1: CEFRLevelContent;
    B2: CEFRLevelContent;
    C1: CEFRLevelContent;
    C2: CEFRLevelContent;
  };

  // Comprehensive categorization
  irregular_plurals_categories: {
    vowel_change: IrregularPluralPair[];
    consonant_change: IrregularPluralPair[];
    latin_origin: IrregularPluralPair[];
    greek_origin: IrregularPluralPair[];
    germanic_origin: IrregularPluralPair[];
    french_origin: IrregularPluralPair[];
    no_change: IrregularPluralPair[];
    en_suffix: IrregularPluralPair[];
    foreign_exceptions: IrregularPluralPair[];
    archaic_forms: IrregularPluralPair[];
    special_cases: IrregularPluralPair[];
    compound_words: IrregularPluralPair[];
  };

  // Academic and Reference Materials
  references: References;

  // Linguistic Analysis
  linguistic_analysis: LinguisticAnalysis;

  // Pedagogical Information
  pedagogical_approach: PedagogicalApproach;

  // Usage contexts and applications
  forms: {
    basic: string;
    vowel_change: string;
    en_ending: string;
    no_change: string;
    latin_greek: string;
    es_ending: string;
    irregular_patterns: string[];
  };

  usage: string[];

  // Comprehensive examples by category and level
  examples: {
    by_category: {
      [key: string]: IrregularPluralPair[];
    };
    by_level: {
      A1: IrregularPluralPair[];
      A2: IrregularPluralPair[];
      B1: IrregularPluralPair[];
      B2: IrregularPluralPair[];
      C1: IrregularPluralPair[];
      C2: IrregularPluralPair[];
    };
    high_frequency: IrregularPluralPair[];
    academic_scientific: IrregularPluralPair[];
    everyday_usage: IrregularPluralPair[];
  };

  // Error analysis and common mistakes
  commonMistakes: {
    by_level: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };
    by_pattern: {
      [pattern: string]: string[];
    };
    fossilized_errors: string[];
  };

  // Recognition and learning strategies
  recognition: string[];
  timeMarkers: string[];
  pronounChanges: {
    basic: string;
    advanced: string;
    agreement_rules: string[];
  };

  // Cultural and contextual information
  culturalContexts: {
    daily_life: string;
    academic: string;
    professional: string;
    literary: string;
    scientific: string;
    medical: string;
    legal: string;
    idiomatic: string;
  };

  // Special cases and variations
  specialCases: {
    dual_forms: IrregularPluralPair[];
    archaic: IrregularPluralPair[];
    regional: IrregularPluralPair[];
    technical: IrregularPluralPair[];
    medical: IrregularPluralPair[];
    scientific: IrregularPluralPair[];
  };

  // Etymology and historical development
  etymology: {
    origin: string;
    development: string;
    modernUsage: string;
    historical_periods: {
      old_english: string[];
      middle_english: string[];
      early_modern: string[];
      modern: string[];
    };
  };

  // Cross-linguistic comparisons
  crossLinguistic: {
    similarities: string[];
    differences: string[];
    learnerChallenges: {
      by_l1: {
        [language: string]: string[];
      };
      universal_challenges: string[];
    };
  };

  // Comprehensive vocabulary lists
  vocabulary: {
    A1: IrregularPluralPair[];
    A2: IrregularPluralPair[];
    B1: IrregularPluralPair[];
    B2: IrregularPluralPair[];
    C1: IrregularPluralPair[];
    C2: IrregularPluralPair[];
    essential: IrregularPluralPair[];
    academic: IrregularPluralPair[];
    specialized: IrregularPluralPair[];
  };

  // Grammatical patterns and usage
  grammaticalPatterns: {
    article_usage: string[];
    verb_agreement: string[];
    quantifiers: string[];
    determiners: string[];
    possessive_forms: string[];
  };

  // Usage contexts by proficiency level
  usageContexts: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  // Error patterns and remediation
  errorPatterns: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
    intervention_strategies: string[];
  };

  // Learning strategies and techniques
  learningStrategies: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
    mnemonic_devices: string[];
    pattern_recognition: string[];
    contextual_learning: string[];
  };

  // Assessment and evaluation
  assessment: {
    recognition_tasks: string[];
    production_tasks: string[];
    correction_tasks: string[];
    contextual_tasks: string[];
    by_level: {
      [level: string]: string[];
    };
  };

  // Frequency and corpus data
  frequency_data: {
    high_frequency: IrregularPluralPair[];
    medium_frequency: IrregularPluralPair[];
    low_frequency: IrregularPluralPair[];
    academic_frequency: IrregularPluralPair[];
    spoken_frequency: IrregularPluralPair[];
    written_frequency: IrregularPluralPair[];
  };

  // Additional pedagogical notes
  notes: string[];
  teachingTips: string[];
  learnerDifficulties: string[];
  cognitiveLoad: {
    by_level: {
      [level: string]: string;
    };
    processing_strategies: string[];
  };
}

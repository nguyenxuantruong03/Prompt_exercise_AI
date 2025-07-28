export interface linkingAdverbsType {
  topic: string;
  definition: string;
  vietnameseDefinition: string;
  levels: string[];

  // Comprehensive vocabulary section
  linkingAdverbs_vocab: {
    definition: string;
    categories: {
      addition: string[];
      contrast: string[];
      cause_and_effect: string[];
      sequence: string[];
      comparison: string[];
      emphasis: string[];
      concession: string[];
      summary: string[];
      clarification: string[];
      condition: string[];
      exemplification: string[];
      reformulation: string[];
    };

    CEFR_levels: {
      A1: {
        adverbs: string[];
        definitions: { [key: string]: string };
        vietnameseTranslations: { [key: string]: string };
        basicUsage: string[];
        commonErrors: string[];
      };
      A2: {
        adverbs: string[];
        definitions: { [key: string]: string };
        vietnameseTranslations: { [key: string]: string };
        basicUsage: string[];
        commonErrors: string[];
      };
      B1: {
        adverbs: string[];
        definitions: { [key: string]: string };
        vietnameseTranslations: { [key: string]: string };
        intermediateUsage: string[];
        formalVsInformal: { [key: string]: string };
        commonErrors: string[];
      };
      B2: {
        adverbs: string[];
        definitions: { [key: string]: string };
        vietnameseTranslations: { [key: string]: string };
        advancedUsage: string[];
        academicWriting: string[];
        stylistic_variations: { [key: string]: string[] };
        commonErrors: string[];
      };
      C1: {
        adverbs: string[];
        definitions: { [key: string]: string };
        vietnameseTranslations: { [key: string]: string };
        sophisticatedUsage: string[];
        academicAndProfessional: string[];
        nuancedMeanings: { [key: string]: string };
        collocations: { [key: string]: string[] };
        commonErrors: string[];
      };
      C2: {
        adverbs: string[];
        definitions: { [key: string]: string };
        vietnameseTranslations: { [key: string]: string };
        expertUsage: string[];
        literaryAndRhetorical: string[];
        subtleDistinctions: { [key: string]: string };
        advancedCollocations: { [key: string]: string[] };
        masterLevelErrors: string[];
      };
    };

    position_rules: {
      sentence_initial: {
        description: string;
        examples: string[];
        punctuation_rules: string[];
      };
      mid_sentence: {
        description: string;
        examples: string[];
        punctuation_rules: string[];
      };
      sentence_end: {
        description: string;
        examples: string[];
        punctuation_rules: string[];
      };
      between_clauses: {
        description: string;
        examples: string[];
        punctuation_rules: string[];
      };
    };

    usage_examples: string[];
    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
      level: string;
    }>;

    comparison_with_conjunctions: {
      note: string;
      examples: Array<{
        conjunction: string;
        linking_adverb: string;
        explanation: string;
      }>;
    };

    learning_tips: string[];
  };

  // Detailed categories with comprehensive information
  types: Array<{
    category: string;
    vietnamese: string;
    subcategories?: Array<{
      name: string;
      vietnamese: string;
      adverbs: string[];
      usage_notes: string;
    }>;
    examples: string[];
    sampleSentences: string[];
    formalityLevel: "formal" | "neutral" | "informal";
    frequency: "high" | "medium" | "low";
    cefrLevel: string[];
    detailedExplanation: string;
    vietnameseExplanation: string;
  }>;

  // Position and punctuation rules
  positionRules: {
    explanation: string;
    examples: string[];
    detailedRules: Array<{
      position: string;
      rule: string;
      examples: string[];
      exceptions?: string[];
    }>;
  };

  punctuationRules: {
    beginning: string;
    midPosition: string;
    endPosition: string;
    betweenClauses: string;
    detailedRules: Array<{
      context: string;
      rule: string;
      examples: string[];
      commonMistakes: string[];
    }>;
  };

  // Formality and register
  formalityLevels: {
    formal: string[];
    neutral: string[];
    informal: string[];
    academic: string[];
    literary: string[];
    conversational: string[];
  };

  // Register and context usage
  registerUsage: {
    academic: {
      preferred_adverbs: string[];
      usage_patterns: string[];
      examples: string[];
    };
    business: {
      preferred_adverbs: string[];
      usage_patterns: string[];
      examples: string[];
    };
    casual: {
      preferred_adverbs: string[];
      usage_patterns: string[];
      examples: string[];
    };
    literary: {
      preferred_adverbs: string[];
      usage_patterns: string[];
      examples: string[];
    };
  };

  // Common mistakes expanded
  commonMistakes: Array<{
    error: string;
    correction: string;
    note: string;
    level: string;
    frequency: "very_common" | "common" | "occasional";
  }>;

  // Advanced usage patterns
  advancedUsage: {
    linkingTwoIndependentClauses: string;
    example: string;
    linkingParagraphs: {
      description: string;
      examples: string[];
    };
    emphatic_positioning: {
      description: string;
      examples: string[];
    };
    discourse_markers: {
      description: string;
      examples: string[];
    };
  };

  // Learning progression tips
  tips: string[];

  // Comprehensive references
  references: Array<{
    title: string;
    author?: string;
    publisher?: string;
    year?: number;
    type: "book" | "website" | "academic_paper" | "dictionary";
    url?: string;
    isbn?: string;
    description: string;
  }>;

  // Advanced examples by level
  advancedExamples: {
    addition: string[];
    contrast: string[];
    result: string[];
    timeSequence: string[];
    emphasis: string[];
    summary: string[];
    clarification: string[];
    comparison: string[];
  };

  // Usage notes with cultural context
  usageNotes: {
    formalVsInformal: string;
    punctuation: string;
    nuance: string;
    culturalContext: string;
    regionalVariations: string;
  };

  // Expanded common mistakes with solutions
  commonMistakesExpanded: Array<{
    error: string;
    correction: string;
    note: string;
    vietnamese_explanation: string;
    prevention_tip: string;
  }>;

  // Related grammar concepts
  relatedGrammar: {
    conjunctiveAdverbsVsCoordinatingConjunctions: string;
    transitionalPhrases: string;
    coherenceAndCohesion: string;
    discourseMarkers: string;
    textualMetafunctions: string;
  };

  // Collocations and fixed expressions
  collocations: {
    frequentPhrases: string[];
    academicCollocations: string[];
    businessCollocations: string[];
    literaryCollocations: string[];
  };

  // Synonyms and semantic relationships
  synonymsAndAntonyms: {
    [key: string]: {
      synonyms: string[];
      antonyms: string[];
      near_synonyms: string[];
      semantic_field: string;
    };
  };

  // Style and writing tips
  styleTips: {
    academicWriting: string;
    spokenEnglish: string;
    creativeWriting: string;
    businessCommunication: string;
    examWriting: string;
  };

  // Cross-linguistic analysis
  crossLinguisticAnalysis: {
    vietnamese_equivalents: { [key: string]: string };
    translation_challenges: string[];
    false_friends: Array<{
      english: string;
      vietnamese_mistake: string;
      correct_vietnamese: string;
      explanation: string;
    }>;
  };

  // Assessment criteria
  assessmentCriteria: {
    A1_A2: string[];
    B1_B2: string[];
    C1_C2: string[];
  };

  // Pedagogical notes
  pedagogicalNotes: {
    teaching_sequence: string[];
    common_teaching_mistakes: string[];
    effective_practice_activities: string[];
    assessment_methods: string[];
  };
}

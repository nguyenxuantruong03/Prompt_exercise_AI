export interface postpositiveAdjectivesType {
  topic: string;
  level: string;
  definition: string;

  // Comprehensive theoretical foundation
  linguisticFoundation: {
    historicalOrigin: string;
    syntacticFunction: string;
    semanticRole: string;
    pragmaticPurpose: string;
  };

  // Level-specific progression
  levelProgression: {
    A1: {
      focus: string;
      keyStructures: string[];
      examples: string[];
      learningObjectives: string[];
    };
    A2: {
      focus: string;
      keyStructures: string[];
      examples: string[];
      learningObjectives: string[];
    };
    B1: {
      focus: string;
      keyStructures: string[];
      examples: string[];
      learningObjectives: string[];
    };
    B2: {
      focus: string;
      keyStructures: string[];
      examples: string[];
      learningObjectives: string[];
    };
    C1: {
      focus: string;
      keyStructures: string[];
      examples: string[];
      learningObjectives: string[];
    };
    C2: {
      focus: string;
      keyStructures: string[];
      examples: string[];
      learningObjectives: string[];
    };
  };

  // Usage types with detailed explanations
  usageTypes: {
    type: string;
    explanation: string;
    examples: string[];
    frequency?: string;
    register?: string;
    cefrLevel?: string;
  }[];

  // Comprehensive vocabulary section
  postpositive_Adjectives_vocab: {
    definition: string;
    core_characteristics: {
      position: string;
      use_case: string[];
      syntactic_properties: string[];
      semantic_properties: string[];
    };

    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };

    common_structures: {
      pronouns_with_postpositives: string[];
      legal_titles_and_ranks: string[];
      fixed_expressions: string[];
      poetic_literary: string[];
      double_adjectives: string[];
      academic_formal: string[];
      archaic_historical: string[];
    };

    examples: string[];

    grammar_notes: {
      agreement: string;
      pluralization: string;
      emphasis: string;
      formal_register: string;
      word_order_constraints: string;
      modification_scope: string;
    };

    plural_forms: {
      correct: string[];
      incorrect: string[];
      explanation: string;
    };
  };

  // Detailed patterns and structures
  syntacticPatterns: {
    pattern: string;
    structure: string;
    explanation: string;
    examples: string[];
    restrictions?: string[];
    cefrLevel: string;
  }[];

  // Comprehensive stylistic analysis
  stylisticAnalysis: {
    register: {
      formal: string[];
      legal: string[];
      academic: string[];
      literary: string[];
      archaic: string[];
    };
    rhetoricalEffects: {
      emphasis: string[];
      formality: string[];
      rhythm: string[];
      clarity: string[];
    };
    contextualUse: {
      written: string[];
      spoken: string[];
      professional: string[];
      creative: string[];
    };
  };

  // Cross-linguistic comparisons
  crossLinguisticComparison: {
    frenchInfluence: {
      explanation: string;
      examples: string[];
    };
    latinInfluence: {
      explanation: string;
      examples: string[];
    };
    germanicPatterns: {
      explanation: string;
      examples: string[];
    };
  };

  // Frequency and usage statistics
  usageStatistics: {
    frequency: {
      overallFrequency: string;
      byRegister: {
        academic: string;
        legal: string;
        literary: string;
        journalistic: string;
        conversational: string;
      };
    };
    distribution: {
      byStructureType: {
        fixedExpressions: string;
        indefinitePronouns: string;
        titles: string;
        reducedClauses: string;
      };
    };
  };

  // Comprehensive learning progression
  pedagogicalProgression: {
    teachingSequence: {
      stage: string;
      focus: string;
      activities: string[];
      assessment: string[];
    }[];
    skillIntegration: {
      reading: string[];
      writing: string[];
      listening: string[];
      speaking: string[];
    };
  };

  // Advanced patterns
  advancedPatterns: {
    pattern: string;
    explanation: string;
    examples: string[];
    cefrLevel: string;
    complexity: string;
  }[];

  // Common issues and solutions
  commonMistakes: {
    mistake: string;
    correction: string;
    exampleWrong: string;
    exampleRight: string;
    explanation?: string;
    cefrLevel?: string;
  }[];

  // Learning strategies
  learningTips: string[];

  // Additional advanced usage
  additionalUsage: {
    type: string;
    explanation: string;
    examples: string[];
    cefrLevel?: string;
    frequency?: string;
  }[];

  // Stylistic notes
  stylisticNotes: string[];

  // Practice suggestions
  practiceSuggestions: string[];

  // Cautions and warnings
  cautions: string[];

  // General notes
  notes: string[];

  // Academic references
  references: string[];

  // Additional academic sources
  additionalReferences: {
    books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      pages?: string;
    }[];
    academicPapers: {
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi?: string;
    }[];
    onlineResources: {
      title: string;
      url: string;
      description: string;
      lastAccessed: string;
    }[];
  };

  // Assessment and evaluation
  assessmentCriteria: {
    level: string;
    criteria: {
      recognition: string[];
      production: string[];
      appropriateUse: string[];
    };
  }[];
}

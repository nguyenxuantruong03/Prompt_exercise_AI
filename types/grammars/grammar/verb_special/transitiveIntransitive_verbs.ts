export interface transitiveIntransitiveVerbsType {
  topic: string;
  levels: string[];

  definitions: {
    transitive: string;
    intransitive: string;
    ditransitive?: string;
    complexTransitive?: string;
    linking?: string;
  };

  keyCharacteristics: {
    transitive: string[];
    intransitive: string[];
    dualUsage?: string[];
  };

  structurePatterns: {
    transitive: string;
    intransitive: string;
    ditransitive?: string;
    complexTransitive?: string;
  };

  levelProgression: {
    A1: {
      learningObjectives: string[];
      coreVerbs: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
      };
      basicPatterns: string[];
      commonMistakes: string[];
      keyPoints: string[];
    };
    A2: {
      learningObjectives: string[];
      coreVerbs: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
      };
      patterns: string[];
      commonMistakes: string[];
      keyPoints: string[];
    };
    B1: {
      learningObjectives: string[];
      coreVerbs: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
        ergative: string[];
      };
      patterns: string[];
      commonMistakes: string[];
      keyPoints: string[];
    };
    B2: {
      learningObjectives: string[];
      coreVerbs: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
        ergative: string[];
        ditransitive: string[];
      };
      patterns: string[];
      commonMistakes: string[];
      keyPoints: string[];
    };
    C1: {
      learningObjectives: string[];
      coreVerbs: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
        ergative: string[];
        ditransitive: string[];
        complexTransitive: string[];
      };
      patterns: string[];
      commonMistakes: string[];
      keyPoints: string[];
    };
    C2: {
      learningObjectives: string[];
      coreVerbs: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
        ergative: string[];
        ditransitive: string[];
        complexTransitive: string[];
        pseudo: string[];
      };
      patterns: string[];
      commonMistakes: string[];
      keyPoints: string[];
    };
  };

  transitive_intransitive_verbs_vocab: {
    transitive_verbs: string[];
    intransitive_verbs: string[];
    dual_usage_verbs: string[];
    structure_patterns: {
      transitive: string;
      intransitive: string;
      dual: string[];
    };
    ce_fr_levels: {
      A1_A2: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
      };
      B1_B2: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
      };
      C1_C2: {
        transitive: string[];
        intransitive: string[];
        dual: string[];
      };
    };
    common_mistakes: string[];
  };

  examples: {
    transitive: string[];
    intransitive: string[];
    dual?: {
      verb: string;
      transitive: string;
      intransitive: string;
    }[];
  };

  dualUsageVerbs: {
    description: string;
    examples: {
      verb: string;
      transitive: string;
      intransitive: string;
    }[];
  };

  advancedUsage: {
    causative: {
      explanation: string;
      example: string;
    };
    ergativeVerbs: {
      description: string;
      examples: {
        verb: string;
        transitive: string;
        intransitive: string;
      }[];
    };
    passiveVoice: {
      applicable: string;
      example: string;
    };
    ditransitiveVerbs?: {
      description: string;
      examples: string[];
    };
    complexTransitiveVerbs?: {
      description: string;
      examples: string[];
    };
  };

  timeMarkers: {
    transitive: string[];
    intransitive: string[];
  };

  recognitionTips: {
    transitive: string[];
    intransitive: string[];
  };

  commonMistakes: {
    mistake: string;
    wrong: string;
    correct: string;
  }[];

  verbLists: {
    transitiveVerbs: string[];
    intransitiveVerbs: string[];
    dualVerbs: string[];
  };

  learningTips: string[];

  references: string[];

  CEFRNotes: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };

  syntacticStructure: {
    description: string;
    patternComparisons: {
      label: string;
      pattern: string;
      example: string;
    }[];
  };

  semanticTypes: {
    actionVerbs: {
      transitiveOnly: string[];
      intransitiveOnly: string[];
    };
    mentalVerbs: {
      transitive: string[];
      intransitive: string[];
    };
    speechVerbs: {
      mixed: {
        verb: string;
        transitiveUse: string;
        intransitiveUse: string;
      }[];
    };
  };

  idiomaticUsage: {
    notes: string;
    examples: {
      expression: string;
      verbType: string;
      structure: string;
    }[];
  };

  diagnosticTests: {
    objectTest: {
      description: string;
      example: {
        sentence: string;
        test: string;
        transformation: string;
      };
    };
    passiveTest: {
      description: string;
      example: {
        active: string;
        passive: string;
      };
    };
  };

  relatedGrammarConcepts: {
    ditransitiveVerbs: {
      description: string;
      examples: string[];
    };
    complexTransitiveVerbs: {
      description: string;
      examples: string[];
    };
    linkingVerbsOverlap: {
      note: string;
      example: string;
    };
  };

  academicUseCases: {
    stylisticFunction: {
      transitive: string;
      intransitive: string;
    };
    genreApplication: {
      scientific: string;
      literary: string;
    };
  };

  contrastTable: {
    feature: string;
    transitive: string;
    intransitive: string;
  }[];

  rareCases: {
    pseudoTransitiveVerbs: {
      description: string;
      example: {
        sentence: string;
        explanation: string;
      };
    };
    verbsOfMotion: {
      dualUse: {
        verb: string;
        transitive: string;
        intransitive: string;
      }[];
    };
  };

  pragmaticNotes: {
    spokenLanguage: string;
    writtenLanguage: string;
    culturalPatterns: string;
  };

  reflectionQuestions: string[];
}

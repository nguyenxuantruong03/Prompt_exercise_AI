interface intensifierGuide {
  so: string;
  really: string;
  quite: string;
  very: string;
  fairly: string;
  pretty: string;
  rather: string;
}

interface emphasisTypes {
  subject: string;
  object: string;
  time: string;
  place: string;
  manner: string;
}

interface frontingTypes {
  object: string;
  adverbial: string;
  complement: string;
  prepositional: string;
}

interface inversionTriggers {
  never: string;
  rarely: string;
  hardly: string;
  seldom: string;
  only: string;
  scarcely: string;
  not_only: string;
  no_sooner: string;
}

interface emphaticForms {
  myself: string;
  yourself: string;
  himself: string;
  herself: string;
  itself: string;
  ourselves: string;
  yourselves: string;
  themselves: string;
}

interface intensifierGuideIntensifiers {
  absolutely: string;
  completely: string;
  totally: string;
  utterly: string;
  entirely: string;
  perfectly: string;
}

interface combiningAdvancedTechniques {
  concept: string;
  examples: string[];
}

interface academicIntensifiers {
  precisely: string;
  demonstrates: string;
  remarkable: string;
  unprecedented: string;
  significantly: string;
  clearly: string;
}

interface literaryTechniques {
  fronting: string;
  inversion: string;
  repetition: string;
  metaphor: string;
  alliteration: string;
}

interface complexPatterns {
  not_once: string;
  only_after: string;
  seldom_if_ever: string;
  no_sooner_than: string;
  rarely_if_ever: string;
  only_when: string;
}

interface philosophicalConcepts {
  essence: string;
  consciousness: string;
  existence: string;
  wisdom: string;
  truth: string;
  meaning: string;
}

interface creativeTechniques {
  metaphor: string;
  personification: string;
  alliteration: string;
  assonance: string;
  repetition: string;
  contrast: string;
}

export interface EmphasisType {
  id: number;
  // Core emphasis definition and importance
  emphasisDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic Emphasis
  A1: {
    definition: string;
    learningObjectives: string[];
    basicIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    wordStress: {
      concept: string;
      patterns: string[];
      examples: string[];
      pronunciationTips: string[];
    };
    commonExpressions: {
      concept: string;
      examples: string[];
    };
  };

  // A2 Level - Elementary Emphasis
  A2: {
    definition: string;
    learningObjectives: string[];
    emphaticDo: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageNotes?: string[];
    };
    moreIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      intensifierGuide: intensifierGuide;
    };
    basicRepetition: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageTips: string[];
    };
    combiningTechniques: {
      concept: string;
      examples: string[];
    };
  };

  // B1 Level - Intermediate Emphasis
  B1: {
    definition: string;
    learningObjectives: string[];
    itCleft: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
      emphasisTypes: emphasisTypes;
    };
    fronting: {
      concept: string;
      patterns: string[];
      examples: string[];
      frontingTypes: frontingTypes;
      usageTips: string[];
    };
    whCleft: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    combiningStructures: {
      concept: string;
      examples: string[];
    };
  };

  // B2 Level - Upper Intermediate Emphasis
  B2: {
    definition: string;
    learningObjectives: string[];
    inversion: {
      concept: string;
      patterns: string[];
      examples: string[];
      inversionTriggers: inversionTriggers;
      usageNotes: string[];
    };
    emphaticPronouns: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
      emphaticForms: emphaticForms;
    };
    advancedIntensifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      intensifierGuide: intensifierGuideIntensifiers;
      usageTips: string[];
    };
    combiningAdvancedTechniques: combiningAdvancedTechniques;
  };

  // C1 Level - Advanced Emphasis
  C1: {
    definition: string;
    learningObjectives: string[];
    academicEmphasis: {
      concept: string;
      patterns: string[];
      examples: string[];
      academicIntensifiers: academicIntensifiers;
      usageNotes: string[];
    };
    literaryEmphasis: {
      concept: string;
      patterns: string[];
      examples: string[];
      literaryTechniques: literaryTechniques;
      usageNotes: string[];
    };
    complexInversion: {
      concept: string;
      patterns: string[];
      examples: string[];
      complexPatterns: complexPatterns;
      usageNotes: string[];
    };
    combiningC1Techniques: {
      concept: string;
      examples: string[];
    };
  };

  // C2 Level - Mastery Emphasis
  C2: {
    definition: string;
    learningObjectives: string[];
    philosophicalEmphasis: {
      concept: string;
      patterns: string[];
      examples: string[];
      philosophicalConcepts: philosophicalConcepts;
      usageNotes: string[];
    };
    creativeManipulation: {
      concept: string;
      patterns: string[];
      examples: string[];
      creativeTechniques: creativeTechniques;
      usageNotes: string[];
    };
    masteryTechniques: {
      concept: string;
      examples: string[];
      masteryCharacteristics: string[];
    };
    specializedContexts: {
      concept: string;
      contexts: {
        academic: string;
        literary: string;
        philosophical: string;
        professional: string;
        creative: string;
      };
    };
  };

  // Original Emphasis Section
  Emphasis: {
    definition: string;
    types: {
      cleftSentences: {
        "It-cleft": {
          structure: string;
          example: string;
        };
        whCleft: {
          structure: string;
          example: string;
        };
      };
      inversion: {
        structure: string;
        example: string;
      };
      emphaticDo: {
        structure: string;
        example: string;
      };
      fronting: {
        structure: string;
        example: string;
      };
      repetition: {
        example: string;
      };
      intensifiers: {
        words: string[];
        example: string;
      };
      emphaticPronouns: {
        definition: string;
        example: string;
      };
    };
    recognitionTips: string[];
    commonErrors: string[];
  };

  // Advanced patterns and additional sections
  advancedEmphasisPatterns: {
    concept: string;
    complexCleftSentences: {
      pattern: string;
      examples: string[];
    };
    multipleEmphasis: {
      pattern: string;
      examples: string[];
    };
    rhetoricalEmphasis: {
      pattern: string;
      examples: string[];
    };
    poeticEmphasis: {
      pattern: string;
      examples: string[];
    };
  };

  emphasisCollocations: {
    concept: string;
    intensifierCollocations: {
      pattern: string;
      examples: string[];
    };
    cleftCollocations: {
      pattern: string;
      examples: string[];
    };
    inversionCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  emphasisGenreUsage: {
    concept: string;
    formalWriting: {
      characteristics: string;
      examples: string[];
    };
    informalWriting: {
      characteristics: string;
      examples: string[];
    };
    academicWriting: {
      characteristics: string;
      examples: string[];
    };
    creativeWriting: {
      characteristics: string;
      examples: string[];
    };
  };

  emphasisFrequencyAndRegister: {
    concept: string;
    highFrequencyPatterns: {
      pattern: string;
      examples: string[];
    };
    formalRegister: {
      characteristics: string;
      examples: string[];
    };
    informalRegister: {
      characteristics: string;
      examples: string[];
    };
    technicalRegister: {
      characteristics: string;
      examples: string[];
    };
  };

  emphasisLearningStrategies: {
    concept: string;
    recognitionStrategies: {
      strategy: string;
      techniques: string[];
    };
    practiceStrategies: {
      strategy: string;
      techniques: string[];
    };
    memoryStrategies: {
      strategy: string;
      techniques: string[];
    };
    applicationStrategies: {
      strategy: string;
      techniques: string[];
    };
  };

  emphasisInTests: {
    concept: string;
    testTypes: {
      TOEFL: string;
      IELTS: string;
      Cambridge: string;
      TOEIC: string;
    };
    commonTestItems: {
      multipleChoice: string;
      sentenceCompletion: string;
      errorIdentification: string;
      textEditing: string;
    };
    testStrategies: {
      patternRecognition: string;
      contextAnalysis: string;
      registerAwareness: string;
    };
  };
  // Learning resources and references
  learningResources: {
    books: {
      title: string;
      author: string;
      description: string;
      level: string;
      link?: string;
    }[];
    websites: {
      name: string;
      description: string;
      url: string;
      focus: string;
    }[];
    academicPapers: {
      title: string;
      author: string;
      journal: string;
      year: string;
      focus: string;
    }[];
  };

  // Assessment and evaluation
  assessmentCriteria: {
    A1: {
      skills: string[];
      canDo: string[];
      assessment: string[];
    };
    A2: {
      skills: string[];
      canDo: string[];
      assessment: string[];
    };
    B1: {
      skills: string[];
      canDo: string[];
      assessment: string[];
    };
    B2: {
      skills: string[];
      canDo: string[];
      assessment: string[];
    };
    C1: {
      skills: string[];
      canDo: string[];
      assessment: string[];
    };
    C2: {
      skills: string[];
      canDo: string[];
      assessment: string[];
    };
  };

  // Common mistakes and error prevention
  commonMistakes: {
    A1: {
      mistakes: string[];
      corrections: string[];
      explanations: string[];
    };
    A2: {
      mistakes: string[];
      corrections: string[];
      explanations: string[];
    };
    B1: {
      mistakes: string[];
      corrections: string[];
      explanations: string[];
    };
    B2: {
      mistakes: string[];
      corrections: string[];
      explanations: string[];
    };
    C1: {
      mistakes: string[];
      corrections: string[];
      explanations: string[];
    };
    C2: {
      mistakes: string[];
      corrections: string[];
      explanations: string[];
    };
  };
}

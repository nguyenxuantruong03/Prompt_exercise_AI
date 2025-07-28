export interface ReflexivePronounsType {
  // Core definition and importance
  reflexivePronounsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic Reflexive Pronouns
  A1: {
    definition: string;
    basicForms: {
      concept: string;
      list: string[];
      examples: string[];
    };
  };

  // A2 Level - Elementary Reflexive Pronouns
  A2: {
    definition: string;
    emphasis: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    withPrepositions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // B1 Level - Intermediate Reflexive Pronouns
  B1: {
    definition: string;
    idioms: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    withVerbs: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // B2 Level - Upper Intermediate Reflexive Pronouns
  B2: {
    definition: string;
    reciprocalActions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    errorAvoidance: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // C1 Level - Advanced Reflexive Pronouns
  C1: {
    definition: string;
    academicUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    creativeUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // C2 Level - Mastery Reflexive Pronouns
  C2: {
    definition: string;
    literaryUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    abstractUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  // Original section (preserved)
  ReflexivePronouns: {
    definition: string;
    list: {
      myself: string;
      yourself: string;
      himself: string;
      herself: string;
      itself: string;
      ourselves: string;
      yourselves: string;
      themselves: string;
    };
    usage: string[];
    examples: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced patterns
  advancedReflexivePronounPatterns: {
    concept: string;
    idiomaticExpressions: {
      pattern: string;
      examples: string[];
    };
    emphasisPatterns: {
      pattern: string;
      examples: string[];
    };
    errorPatterns: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations
  reflexivePronounCollocations: {
    concept: string;
    verbCollocations: {
      pattern: string;
      examples: string[];
    };
    prepositionCollocations: {
      pattern: string;
      examples: string[];
    };
    idiomCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre usage
  reflexivePronounGenreUsage: {
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

  // Frequency and register
  reflexivePronounFrequencyAndRegister: {
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

  // Learning strategies
  reflexivePronounLearningStrategies: {
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

  // Test preparation
  reflexivePronounsInTests: {
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

  // Common mistakes
  commonReflexivePronounMistakes: {
    concept: string;
    mistakeTypes: {
      wrongForm: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingReflexive: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      unnecessaryReflexive: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongSubject: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      formPractice: string;
      contextPractice: string;
      errorPractice: string;
      patternPractice: string;
    };
  };

  // Learning resources and references
  learningResources: {
    books: {
      title: string;
      author: string;
      description: string;
      level: string;
      isbn?: string;
    }[];
    websites: {
      name: string;
      url: string;
      description: string;
      focus: string;
    }[];
    academicPapers: {
      title: string;
      authors: string;
      journal: string;
      year: string;
      focus: string;
    }[];
  };
}

interface ModalVerbsType {
  id: number;
  // Definition section
  modalVerbsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    references: string[];
  };

  // A1 Level
  A1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      basicAbility: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      basicPermission: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonSituations: string[];
    references: string[];
  };

  // A2 Level
  A2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      expandedFunctions: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      basicRequests: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonSituations: string[];
    references: string[];
  };

  // B1 Level
  B1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      multipleMeanings: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      pastModals: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonSituations: string[];
    references: string[];
  };

  // B2 Level
  B2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      subtleDistinctions: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      formalUsage: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonSituations: string[];
    references: string[];
  };

  // C1 Level
  C1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      academicModals: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      nuancedExpressions: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonSituations: string[];
    references: string[];
  };

  // C2 Level
  C2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      literaryModals: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
      philosophicalModals: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageNotes: string[];
      };
    };
    commonSituations: string[];
    references: string[];
  };

  // Original Modal Verbs Section
  ModalVerbs: {
    definition: string;
    commonModals: string[];
    functions: {
      Ability: {
        modals: string[];
        examples: string[];
      };
      Permission: {
        modals: string[];
        examples: string[];
      };
      Possibility: {
        modals: string[];
        examples: string[];
      };
      "Obligation/Necessity": {
        modals: string[];
        examples: string[];
      };
      Advice: {
        modals: string[];
        examples: string[];
      };
      Prediction: {
        modals: string[];
        examples: string[];
      };
      Deduction: {
        modals: string[];
        examples: string[];
      };
      "Habit in the Past": {
        modals: string[];
        examples: string[];
      };
    };
    structure: {
      form: string;
      examples: string[];
    };
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Modal Verb Patterns
  advancedModalPatterns: {
    concept: string;
    modalPerfect: {
      pattern: string;
      examples: string[];
    };
    modalContinuous: {
      pattern: string;
      examples: string[];
    };
    modalPassive: {
      pattern: string;
      examples: string[];
    };
    doubleModals: {
      pattern: string;
      examples: string[];
    };
  };

  // Modal Verb Collocations
  modalVerbCollocations: {
    concept: string;
    academicCollocations: {
      pattern: string;
      examples: string[];
    };
    businessCollocations: {
      pattern: string;
      examples: string[];
    };
    everydayCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Modal Verb Usage in Different Genres
  modalVerbGenreUsage: {
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

  // Modal Verb Frequency and Register
  modalVerbFrequencyAndRegister: {
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

  // Modal Verb Assessment
  modalVerbAssessment: {
    concept: string;
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      register: string;
      fluency: string;
    };
    evaluationMethods: {
      writtenTests: string;
      speakingTests: string;
      authenticTasks: string;
    };
    proficiencyLevels: {
      A1: string;
      A2: string;
      B1: string;
      B2: string;
      C1: string;
      C2: string;
    };
  };

  // Modal Verb Learning Strategies
  modalVerbLearningStrategies: {
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

  // Modal Verbs in Language Tests
  modalVerbsInTests: {
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
      functionRecognition: string;
      contextAnalysis: string;
      registerAwareness: string;
    };
  };

  // Common Modal Verb Mistakes
  commonModalVerbMistakes: {
    concept: string;
    mistakeTypes: {
      toInfinitive: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      thirdPersonS: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      doSupport: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongModal: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingModal: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      functionMemorization: string;
      patternPractice: string;
      contextAwareness: string;
      formPractice: string;
    };
  };
}

export type { ModalVerbsType };

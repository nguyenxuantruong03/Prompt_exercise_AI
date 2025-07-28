export interface QuestionFormsType {
  // Definition section
  questionFormsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level
  A1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    detailedContent: {
      basicYesNoQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        exercises: string[];
        commonMistakes: string[];
        learningTips: string[];
      };
      basicWHQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        questionWords: {
          what: string;
          where: string;
          who: string;
        };
        commonMistakes: string[];
      };
    };
    exercises: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
    onlineResources: string[];
  };

  // A2 Level
  A2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    detailedContent: {
      pastTenseQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        commonMistakes: string[];
        learningTips: string[];
      };
      expandedWHQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        questionWords: {
          when: string;
          why: string;
          how: string;
          what: string;
        };
        commonMistakes: string[];
      };
    };
    exercises: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
    onlineResources: string[];
  };

  // B1 Level
  B1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    detailedContent: {
      perfectTenseQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        commonMistakes: string[];
        learningTips: string[];
      };
      tagQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        formationRules: string[];
        commonMistakes: string[];
      };
    };
    exercises: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
    onlineResources: string[];
  };

  // B2 Level
  B2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    detailedContent: {
      indirectQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageContexts: string[];
        commonMistakes: string[];
      };
      subjectQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        keyRule: string;
        commonMistakes: string[];
      };
    };
    exercises: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
    onlineResources: string[];
  };

  // C1 Level
  C1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    detailedContent: {
      rhetoricalQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        usageContexts: string[];
        effects: string[];
      };
      complexQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        structuralFeatures: string[];
        commonMistakes: string[];
      };
    };
    exercises: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
    onlineResources: string[];
  };

  // C2 Level
  C2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescription: string;
    detailedContent: {
      philosophicalQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        characteristics: string[];
        usageContexts: string[];
      };
      specializedQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        professionalDomains: string[];
        characteristics: string[];
      };
    };
    exercises: string[];
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      relevance: string;
    }>;
    onlineResources: string[];
  };

  // Original Question Forms Section
  QuestionForms: {
    definition: string;
    types: {
      YesNoQuestions: {
        structure: string;
        examples: string[];
      };
      WHQuestions: {
        structure: string;
        commonWH: string[];
        examples: string[];
      };
      TagQuestions: {
        structure: string;
        rule: string;
        examples: string[];
      };
      ChoiceQuestions: {
        structure: string;
        examples: string[];
      };
      SubjectQuestions: {
        structure: string;
        note: string;
        examples: string[];
      };
      NegativeQuestions: {
        structure: string;
        usage: string;
        examples: string[];
      };
      IndirectQuestions: {
        structure: string;
        usage: string;
        examples: string[];
      };
    };
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Question Patterns
  advancedQuestionPatterns: {
    concept: string;
    embeddedQuestions: {
      pattern: string;
      examples: string[];
    };
    questionWithPrepositions: {
      pattern: string;
      examples: string[];
    };
    questionWithGerunds: {
      pattern: string;
      examples: string[];
    };
    questionWithConditionals: {
      pattern: string;
      examples: string[];
    };
  };

  // Question Form Collocations
  questionFormCollocations: {
    concept: string;
    politeCollocations: {
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

  // Question Form Usage in Different Genres
  questionFormGenreUsage: {
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

  // Question Form Frequency and Register
  questionFormFrequencyAndRegister: {
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

  // Question Form Exercises
  questionFormExercises: {
    concept: string;
    basicExercises: {
      type: string;
      exercises: string[];
    };
    intermediateExercises: {
      type: string;
      exercises: string[];
    };
    advancedExercises: {
      type: string;
      exercises: string[];
    };
    errorCorrection: {
      type: string;
      exercises: string[];
    };
  };

  // Question Form Assessment
  questionFormAssessment: {
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

  // Question Form Learning Strategies
  questionFormLearningStrategies: {
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

  // Question Forms in Language Tests
  questionFormsInTests: {
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
      structureRecognition: string;
      contextAnalysis: string;
      registerAwareness: string;
    };
  };

  // Common Question Form Mistakes
  commonQuestionFormMistakes: {
    concept: string;
    mistakeTypes: {
      missingAuxiliary: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongTag: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      doubleAuxiliary: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongWordOrder: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      unnecessaryInversion: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      auxiliaryPractice: string;
      tagPractice: string;
      contextAwareness: string;
      wordOrderPractice: string;
    };
  };
}

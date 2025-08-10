export interface ReportedQuestionsType {
  id: number;
  // Comprehensive Reported Questions Reference
  reportedQuestionsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic Reported Questions (Beginner)
  A1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      yesNoQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
    };
    vocabulary: {
      reportingVerbs: string[];
      questionWords: string[];
      timeExpressions: string[];
    };
    references: {
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
      websites: Array<{
        name: string;
        url: string;
        description: string;
      }>;
    };
  };

  // A2 Level - Elementary Reported Questions
  A2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      whQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
      basicTenseChanges: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
    };
    vocabulary: {
      reportingVerbs: string[];
      questionWords: string[];
      timeExpressions: string[];
      modalVerbs: string[];
    };
    references: {
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
      websites: Array<{
        name: string;
        url: string;
        description: string;
      }>;
    };
  };

  // B1 Level - Intermediate Reported Questions
  B1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      perfectTenseQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
      indirectObjects: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
    };
    vocabulary: {
      reportingVerbs: string[];
      questionWords: string[];
      timeExpressions: string[];
      modalVerbs: string[];
      complexStructures: string[];
    };
    references: {
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
      websites: Array<{
        name: string;
        url: string;
        description: string;
      }>;
    };
  };

  // B2 Level - Upper Intermediate Reported Questions
  B2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      embeddedClauses: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
      reportedRequests: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
      negativeQuestions: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
    };
    vocabulary: {
      reportingVerbs: string[];
      questionWords: string[];
      timeExpressions: string[];
      modalVerbs: string[];
      complexStructures: string[];
      formalExpressions: string[];
    };
    references: {
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
      websites: Array<{
        name: string;
        url: string;
        description: string;
      }>;
    };
  };

  // C1 Level - Advanced Reported Questions
  C1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      academicUsage: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
      formalInquiries: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
    };
    vocabulary: {
      reportingVerbs: string[];
      questionWords: string[];
      timeExpressions: string[];
      modalVerbs: string[];
      complexStructures: string[];
      formalExpressions: string[];
      academicExpressions: string[];
    };
    references: {
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
      websites: Array<{
        name: string;
        url: string;
        description: string;
      }>;
    };
  };

  // C2 Level - Mastery Reported Questions
  C2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      literaryUsage: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
      philosophicalUsage: {
        concept: string;
        patterns: string[];
        examples: string[];
        grammarRules: string[];
        commonMistakes: string[];
        practiceTips: string[];
      };
    };
    vocabulary: {
      reportingVerbs: string[];
      questionWords: string[];
      timeExpressions: string[];
      modalVerbs: string[];
      complexStructures: string[];
      formalExpressions: string[];
      academicExpressions: string[];
      literaryExpressions: string[];
      philosophicalExpressions: string[];
    };
    references: {
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
      websites: Array<{
        name: string;
        url: string;
        description: string;
      }>;
    };
  };

  // Original ReportedQuestions Section (Preserved)
  ReportedQuestions: {
    definition: string;
    types: {
      yesNoQuestions: {
        structure: string;
        example: {
          direct: string;
          reported: string;
        };
      };
      whQuestions: {
        structure: string;
        example: {
          direct: string;
          reported: string;
        };
      };
    };
    tenseChanges: {
      rule: string;
      examples: Array<{
        direct: string;
        reported: string;
      }>;
    };
    pronounAndTimeChanges: {
      rule: string;
      examples: Array<{
        direct: string;
        reported: string;
      }>;
    };
    commonReportingVerbs: string[];
    recognitionTips: string[];
    commonErrors: string[];
  };

  // Advanced Reported Question Patterns and Constructions
  advancedReportedQuestionPatterns: {
    concept: string;
    embeddedQuestions: {
      pattern: string;
      examples: string[];
    };
    politeRequests: {
      pattern: string;
      examples: string[];
    };
    negativeQuestions: {
      pattern: string;
      examples: string[];
    };
    formalInquiries: {
      pattern: string;
      examples: string[];
    };
  };

  // Reported Question Collocations and Fixed Expressions
  reportedQuestionCollocations: {
    concept: string;
    reportingVerbs: {
      pattern: string;
      examples: string[];
    };
    timeExpressions: {
      pattern: string;
      examples: string[];
    };
    modalVerbs: {
      pattern: string;
      examples: string[];
    };
  };

  // Reported Question Usage in Different Genres
  reportedQuestionGenreUsage: {
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

  // Reported Question Frequency and Register
  reportedQuestionFrequencyAndRegister: {
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

  // Reported Question Assessment and Evaluation
  reportedQuestionAssessment: {
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

  // Reported Question Learning Strategies
  reportedQuestionLearningStrategies: {
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

  // Reported Questions in Language Tests
  reportedQuestionsInTests: {
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

  // Common Reported Question Mistakes
  commonReportedQuestionMistakes: {
    concept: string;
    mistakeTypes: {
      wrongWordOrder: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingIfWhether: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongTense: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongPronoun: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      wordOrderPractice: string;
      ifWhetherPractice: string;
      tensePractice: string;
      pronounPractice: string;
    };
  };
}

export interface SubjectVerbAgreementType {
  id: number;
  // Definition and Core Concepts
  subjectVerbAgreementDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // A1 Level - Basic Subject-Verb Agreement
  A1: {
    definition: string;
    basicSingularPluralAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
    };
    simplePresentAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    references: {
      websites: Array<{
        title: string;
        url: string;
        description: string;
      }>;
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
    };
  };

  // A2 Level - Elementary Subject-Verb Agreement
  A2: {
    definition: string;
    compoundSubjectAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    indefinitePronounAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    references: {
      websites: Array<{
        title: string;
        url: string;
        description: string;
      }>;
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
    };
  };

  // B1 Level - Intermediate Subject-Verb Agreement
  B1: {
    definition: string;
    collectiveNounAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    uncountableNounAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
    invertedSentenceAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    references: {
      websites: Array<{
        title: string;
        url: string;
        description: string;
      }>;
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
    };
  };

  // B2 Level - Upper Intermediate Subject-Verb Agreement
  B2: {
    definition: string;
    amountExpressionAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
    titleAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
    relativeClauseAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    references: {
      websites: Array<{
        title: string;
        url: string;
        description: string;
      }>;
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
    };
  };

  // C1 Level - Advanced Subject-Verb Agreement
  C1: {
    definition: string;
    academicWritingAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    complexSubjectAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    subjunctiveAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    references: {
      websites: Array<{
        title: string;
        url: string;
        description: string;
      }>;
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
    };
  };

  // C2 Level - Mastery Subject-Verb Agreement
  C2: {
    definition: string;
    literaryAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedFieldAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    dialectalVariationAgreement: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    exercises: string[];
    learningObjectives: string[];
    keyConcepts: string[];
    commonMistakes: string[];
    practiceTips: string[];
    references: {
      websites: Array<{
        title: string;
        url: string;
        description: string;
      }>;
      books: Array<{
        title: string;
        author: string;
        isbn?: string;
        description: string;
      }>;
    };
  };

  // Original Section (Preserved)
  SubjectVerbAgreement: {
    definition: string;
    rules: Array<{
      rule: string;
      example: string;
    }>;
    recognition: string[];
    examples: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Patterns and Constructions
  advancedSubjectVerbAgreementPatterns: {
    concept: string;
    existentialConstructions: {
      pattern: string;
      examples: string[];
    };
    cleftSentences: {
      pattern: string;
      examples: string[];
    };
    pseudoCleftSentences: {
      pattern: string;
      examples: string[];
    };
    tagQuestions: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations and Fixed Expressions
  subjectVerbAgreementCollocations: {
    concept: string;
    academicCollocations: {
      pattern: string;
      examples: string[];
    };
    businessCollocations: {
      pattern: string;
      examples: string[];
    };
    mediaCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  subjectVerbAgreementGenreUsage: {
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

  // Frequency and Register
  subjectVerbAgreementFrequencyAndRegister: {
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

  // Assessment and Evaluation
  subjectVerbAgreementAssessment: {
    concept: string;
    assessmentCriteria: {
      accuracy: string;
      consistency: string;
      complexity: string;
      register: string;
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

  // Learning Strategies
  subjectVerbAgreementLearningStrategies: {
    concept: string;
    identificationStrategies: {
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
    errorAnalysis: {
      strategy: string;
      techniques: string[];
    };
  };

  // Language Tests
  subjectVerbAgreementInTests: {
    concept: string;
    testTypes: {
      TOEFL: string;
      IELTS: string;
      Cambridge: string;
      TOEIC: string;
    };
    commonTestItems: {
      multipleChoice: string;
      errorIdentification: string;
      sentenceCompletion: string;
      textEditing: string;
    };
    testStrategies: {
      timeManagement: string;
      elimination: string;
      contextClues: string;
    };
  };

  // Common Mistakes
  commonSubjectVerbAgreementMistakes: {
    concept: string;
    mistakeTypes: {
      interveningPhrases: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      compoundSubjects: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      indefinitePronouns: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      collectiveNouns: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      uncountableNouns: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      subjectIdentification: string;
      ruleMemorization: string;
      practice: string;
      proofreading: string;
    };
  };
}

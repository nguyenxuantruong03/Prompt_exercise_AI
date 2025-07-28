export interface TagQuestionsType {
  // Definition of Tag Questions
  tagQuestionsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    references: string[];
  };

  // A1 Level - Basic Tag Questions (Beginner)
  A1: {
    definition: string;
    learningObjectives: string[];
    coreConcepts: {
      positiveStatementNegativeTag: string;
      negativeStatementPositiveTag: string;
      auxiliaryAgreement: string;
      pronounMatching: string;
    };
    basicBeTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      specialCases: {
        "I am": string;
        explanation: string;
      };
    };
    basicDoTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      verbAgreement: {
        singularSubjects: string;
        pluralSubjects: string;
      };
    };
    commonMistakes: string[];
    references: string[];
  };

  // A2 Level - Elementary Tag Questions
  A2: {
    definition: string;
    learningObjectives: string[];
    coreConcepts: {
      modalVerbTags: string;
      possessionTags: string;
      futureTags: string;
      contextAwareness: string;
    };
    expandedVerbTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageNotes: {
        can: string;
        will: string;
        have: string;
      };
    };
    modalTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      modalMeanings: {
        can: string;
        will: string;
        should: string;
      };
    };
    commonMistakes: string[];
    references: string[];
  };

  // B1 Level - Intermediate Tag Questions
  B1: {
    definition: string;
    learningObjectives: string[];
    coreConcepts: {
      perfectTenseTags: string;
      continuousTenseTags: string;
      pastTenseTags: string;
      complexStructures: string;
    };
    perfectTenseTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      tenseUsage: {
        presentPerfect: string;
        pastPerfect: string;
        presentPerfectContinuous: string;
      };
    };
    continuousTenseTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      aspectUsage: {
        presentContinuous: string;
        pastContinuous: string;
      };
    };
    complexStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    commonMistakes: string[];
    references: string[];
  };

  // B2 Level - Upper Intermediate Tag Questions
  B2: {
    definition: string;
    learningObjectives: string[];
    coreConcepts: {
      complexModalTags: string;
      formalExpressions: string;
      passiveVoiceTags: string;
      registerAwareness: string;
    };
    complexModalTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      modalMeanings: {
        would: string;
        could: string;
        might: string;
        must: string;
      };
    };
    formalTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageContexts: {
        academic: string;
        professional: string;
      };
    };
    passiveVoiceTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    intonationAndMeaning: {
      concept: string;
      risingIntonation: string;
      fallingIntonation: string;
      examples: string[];
    };
    commonMistakes: string[];
    references: string[];
  };

  // C1 Level - Advanced Tag Questions
  C1: {
    definition: string;
    learningObjectives: string[];
    coreConcepts: {
      academicLanguage: string;
      sophisticatedExpressions: string;
      argumentativeContexts: string;
      specializedUsage: string;
    };
    academicTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      academicVerbs: {
        indicate: string;
        demonstrate: string;
        suggest: string;
        reveal: string;
        establish: string;
      };
    };
    sophisticatedTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      sophisticatedVocabulary: {
        fail: string;
        lack: string;
        devoid: string;
        deficient: string;
        inadequate: string;
      };
    };
    argumentativeTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    specializedProfessionalTags: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    commonMistakes: string[];
    references: string[];
  };

  // C2 Level - Mastery Tag Questions
  C2: {
    definition: string;
    learningObjectives: string[];
    coreConcepts: {
      completeMastery: string;
      literaryUsage: string;
      specializedFields: string;
      pragmaticUnderstanding: string;
    };
    literaryTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      literaryDevices: {
        dramaticEffect: string;
        rhetoricalDevice: string;
        stylisticVariation: string;
        emotionalAppeal: string;
      };
    };
    specializedTagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      specializedFields: {
        legal: string;
        technical: string;
        scientific: string;
        philosophical: string;
      };
    };
    pragmaticMastery: {
      concept: string;
      functions: {
        confirmation: string;
        clarification: string;
        emphasis: string;
        engagement: string;
        politeness: string;
      };
      contextualFactors: {
        relationship: string;
        formality: string;
        purpose: string;
        culture: string;
      };
    };
    advancedPatterns: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
    commonMistakes: string[];
    references: string[];
  };

  // Original Tag Questions Section
  TagQuestions: {
    definition: string;
    structure: {
      positiveStatement: {
        rule: string;
        example: string;
      };
      negativeStatement: {
        rule: string;
        example: string;
      };
    };
    auxiliaryVerbs: string[];
    examples: string[];
    specialCases: {
      imperative: {
        rule: string;
        example: string;
      };
      "let's": {
        rule: string;
        example: string;
      };
      "I am": {
        rule: string;
        example: string;
      };
    };
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Tag Question Patterns and Constructions
  advancedTagQuestionPatterns: {
    concept: string;
    embeddedTagQuestions: {
      pattern: string;
      examples: string[];
    };
    rhetoricalTagQuestions: {
      pattern: string;
      examples: string[];
    };
    conditionalTagQuestions: {
      pattern: string;
      examples: string[];
    };
    passiveTagQuestions: {
      pattern: string;
      examples: string[];
    };
  };

  // Tag Question Collocations and Fixed Expressions
  tagQuestionCollocations: {
    concept: string;
    verbCollocations: {
      pattern: string;
      examples: string[];
    };
    adjectiveCollocations: {
      pattern: string;
      examples: string[];
    };
    formalCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Tag Question Usage in Different Genres
  tagQuestionGenreUsage: {
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

  // Tag Question Frequency and Register
  tagQuestionFrequencyAndRegister: {
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

  // Tag Question Assessment and Evaluation
  tagQuestionAssessment: {
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

  // Tag Question Learning Strategies
  tagQuestionLearningStrategies: {
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

  // Tag Questions in Language Tests
  tagQuestionsInTests: {
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

  // Common Tag Question Mistakes
  commonTagQuestionMistakes: {
    concept: string;
    mistakeTypes: {
      wrongAuxiliary: {
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
      wrongPolarity: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      specialCaseError: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingAuxiliary: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      auxiliaryPractice: string;
      pronounPractice: string;
      polarityPractice: string;
      specialCasePractice: string;
    };
  };
}

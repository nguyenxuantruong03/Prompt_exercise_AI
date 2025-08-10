export interface SentenceTypesType {
  id: number;
  // Main definition and references
  sentenceTypesDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    references: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      url: string;
    }>;
  };

  // A1 Level - Basic Sentence Types
  A1: {
    definition: string;
    learningObjectives: string[];
    declarative: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    interrogative: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // A2 Level - Elementary Sentence Types
  A2: {
    definition: string;
    learningObjectives: string[];
    imperative: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    exclamatory: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    whQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      learningNotes: string;
    };
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // B1 Level - Intermediate Sentence Types
  B1: {
    definition: string;
    learningObjectives: string[];
    negativeSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    tagQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    indirectQuestions: {
      concept: string;
      patterns: string[];
      examples: string[];
      learningNotes: string;
    };
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // B2 Level - Upper Intermediate Sentence Types
  B2: {
    definition: string;
    learningObjectives: string[];
    compoundSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    complexSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    compoundComplexSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // C1 Level - Advanced Sentence Types
  C1: {
    definition: string;
    learningObjectives: string[];
    inversion: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    ellipsis: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    cleftSentences: {
      concept: string;
      patterns: string[];
      examples: string[];
      learningNotes: string;
    };
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // C2 Level - Mastery Sentence Types
  C2: {
    definition: string;
    learningObjectives: string[];
    stylisticVariation: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    creativeUsage: {
      concept: string;
      patterns: string[];
      examples: string[];
      exercises: string[];
      learningNotes: string;
      commonMistakes: string[];
    };
    specializedStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
      learningNotes: string;
    };
    assessmentCriteria: {
      accuracy: string;
      fluency: string;
      comprehension: string;
    };
  };

  // Original SentenceTypes Section
  SentenceTypes: {
    definition: string;
    types: {
      declarative: {
        definition: string;
        structure: string;
        examples: string[];
        purpose: string;
      };
      interrogative: {
        definition: string;
        structure: string;
        examples: string[];
        purpose: string;
      };
      imperative: {
        definition: string;
        structure: string;
        examples: string[];
        purpose: string;
      };
      exclamatory: {
        definition: string;
        structure: string;
        examples: string[];
        purpose: string;
      };
    };
    recognitionTips: string[];
    commonErrors: string[];
  };

  // Advanced Sentence Type Patterns and Constructions
  advancedSentenceTypePatterns: {
    concept: string;
    inversion: {
      pattern: string;
      examples: string[];
    };
    ellipsis: {
      pattern: string;
      examples: string[];
    };
    stylisticVariation: {
      pattern: string;
      examples: string[];
    };
    creativeUsage: {
      pattern: string;
      examples: string[];
    };
  };

  // Sentence Type Collocations and Fixed Expressions
  sentenceTypeCollocations: {
    concept: string;
    declarativeCollocations: {
      pattern: string;
      examples: string[];
    };
    interrogativeCollocations: {
      pattern: string;
      examples: string[];
    };
    imperativeCollocations: {
      pattern: string;
      examples: string[];
    };
    exclamatoryCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Sentence Type Usage in Different Genres
  sentenceTypeGenreUsage: {
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

  // Sentence Type Frequency and Register
  sentenceTypeFrequencyAndRegister: {
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

  // Sentence Type Exercises and Practice Activities
  sentenceTypeExercises: {
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

  // Sentence Type Assessment and Evaluation
  sentenceTypeAssessment: {
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

  // Sentence Type Learning Strategies
  sentenceTypeLearningStrategies: {
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

  // Sentence Types in Language Tests
  sentenceTypesInTests: {
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

  // Common Sentence Type Mistakes
  commonSentenceTypeMistakes: {
    concept: string;
    mistakeTypes: {
      missingPunctuation: {
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
      missingExclamation: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      punctuationPractice: string;
      wordOrderPractice: string;
      varietyPractice: string;
    };
  };
}

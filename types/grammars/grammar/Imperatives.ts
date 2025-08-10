export interface ImperativesType {
  id: number;
  // Definition and Learning Resources
  imperativesDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    learningResources: {
      books: string[];
      websites: string[];
      academicPapers: string[];
    };
  };

  // A1 Level - Basic Imperatives
  A1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      baseForm: string;
      noSubject: string;
      directCommands: string;
      basicStructure: string;
    };
    basicAffirmativeImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageContexts: string[];
      commonVerbs: string[];
    };
    basicNegativeImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      usageContexts: string[];
      commonNegativePatterns: string[];
    };
    learningStrategies: {
      recognition: string;
      formation: string;
      context: string;
      practice: string;
    };
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
    };
  };

  // A2 Level - Elementary Imperatives
  A2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      politeness: string;
      sequencing: string;
      contextAwareness: string;
      instructionGiving: string;
    };
    politeImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      politenessLevels: {
        veryPolite: string;
        polite: string;
        neutral: string;
        direct: string;
      };
      usageContexts: string[];
    };
    instructionImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      timeMarkers: string[];
      instructionTypes: string[];
    };
    learningStrategies: {
      politeness: string;
      sequencing: string;
      context: string;
      practice: string;
    };
    assessmentCriteria: {
      politeness: string;
      sequencing: string;
      context: string;
    };
  };

  // B1 Level - Intermediate Imperatives
  B1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      adviceGiving: string;
      warningExpressions: string;
      suggestionPatterns: string;
      complexContexts: string;
    };
    adviceImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      adviceTypes: {
        generalAdvice: string;
        specificAdvice: string;
        conditionalAdvice: string;
        preventiveAdvice: string;
      };
      usageContexts: string[];
    };
    warningImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      warningIntensities: {
        mild: string;
        moderate: string;
        strong: string;
        urgent: string;
      };
      safetyContexts: string[];
    };
    learningStrategies: {
      advice: string;
      warnings: string;
      context: string;
      practice: string;
    };
    assessmentCriteria: {
      appropriateness: string;
      intensity: string;
      clarity: string;
    };
  };

  // B2 Level - Upper Intermediate Imperatives
  B2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      formality: string;
      passiveVoice: string;
      businessContext: string;
      sophisticatedPatterns: string;
    };
    formalImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      formalityLevels: {
        veryFormal: string;
        formal: string;
        polite: string;
        semiFormal: string;
      };
      professionalContexts: string[];
    };
    passiveImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      passivePatterns: {
        information: string;
        advice: string;
        warning: string;
        preparation: string;
      };
      usageContexts: string[];
    };
    learningStrategies: {
      formality: string;
      passive: string;
      context: string;
      practice: string;
    };
    assessmentCriteria: {
      formality: string;
      accuracy: string;
      context: string;
    };
  };

  // C1 Level - Advanced Imperatives
  C1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      academicWriting: string;
      complexStructures: string;
      sophisticatedUsage: string;
      nuancedMeaning: string;
    };
    academicImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      academicFunctions: {
        analysis: string;
        evaluation: string;
        synthesis: string;
        critique: string;
      };
      researchContexts: string[];
    };
    complexImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      complexPatterns: {
        coordination: string;
        condition: string;
        purpose: string;
        concession: string;
      };
      sophisticatedUsage: string[];
    };
    learningStrategies: {
      academic: string;
      complex: string;
      sophisticated: string;
      practice: string;
    };
    assessmentCriteria: {
      sophistication: string;
      complexity: string;
      appropriateness: string;
    };
  };

  // C2 Level - Mastery Imperatives
  C2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      literaryExpression: string;
      specializedContexts: string;
      culturalVariations: string;
      nativeProficiency: string;
    };
    literaryImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      literaryFunctions: {
        dramatic: string;
        emphatic: string;
        stylistic: string;
        poetic: string;
      };
      creativeContexts: string[];
    };
    specializedImperatives: {
      concept: string;
      patterns: string[];
      examples: string[];
      specializedFields: {
        legal: string;
        technical: string;
        scientific: string;
        philosophical: string;
      };
      professionalContexts: string[];
    };
    learningStrategies: {
      literary: string;
      specialized: string;
      cultural: string;
      practice: string;
    };
    assessmentCriteria: {
      mastery: string;
      sophistication: string;
      specialization: string;
    };
  };

  // Original Imperatives Section
  Imperatives: {
    definition: string;
    structure: {
      affirmative: string;
      negative: string;
    };
    uses: string[];
    examples: {
      affirmative: string[];
      negative: string[];
      withPlease: string[];
      strongForm: string[];
      passiveImperative: string[];
    };
    recognitionTips: string[];
    commonErrors: string[];
    notes: string[];
  };

  // Advanced Imperative Patterns
  advancedImperativePatterns: {
    concept: string;
    imperativeWithModals: {
      pattern: string;
      examples: string[];
    };
    imperativeWithInfinitives: {
      pattern: string;
      examples: string[];
    };
    imperativeWithGerunds: {
      pattern: string;
      examples: string[];
    };
    doubleImperatives: {
      pattern: string;
      examples: string[];
    };
  };

  // Imperative Collocations
  imperativeCollocations: {
    concept: string;
    instructionCollocations: {
      pattern: string;
      examples: string[];
    };
    warningCollocations: {
      pattern: string;
      examples: string[];
    };
    adviceCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Imperative Genre Usage
  imperativeGenreUsage: {
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

  // Imperative Frequency and Register
  imperativeFrequencyAndRegister: {
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

  // Imperative Assessment
  imperativeAssessment: {
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

  // Imperative Learning Strategies
  imperativeLearningStrategies: {
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

  // Imperatives in Language Tests
  imperativesInTests: {
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

  // Common Imperative Mistakes
  commonImperativeMistakes: {
    concept: string;
    mistakeTypes: {
      unnecessarySubject: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongVerbForm: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongNegative: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingBaseVerb: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongStructure: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      baseVerbPractice: string;
      subjectAwareness: string;
      negativePractice: string;
      contextPractice: string;
    };
  };
}

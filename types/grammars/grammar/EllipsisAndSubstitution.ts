export interface EllipsisAndSubstitutionType {
  id: number;
  // Definition and Core Concepts
  ellipsisAndSubstitutionDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    linguisticTheory: string;
    cognitiveBenefits: string;
    communicativeFunction: string;
  };

  // A1 Level - Basic Ellipsis and Substitution
  A1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescriptors: {
      canDo: string[];
      cannotDo: string[];
    };
    basicEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    basicSubstitution: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    commonContexts: string[];
    learningResources: string[];
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
      frequency: string;
    };
  };

  // A2 Level - Elementary Ellipsis and Substitution
  A2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescriptors: {
      canDo: string[];
      cannotDo: string[];
    };
    expandedEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    expandedSubstitution: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    commonContexts: string[];
    learningResources: string[];
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
      fluency: string;
    };
  };

  // B1 Level - Intermediate Ellipsis and Substitution
  B1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescriptors: {
      canDo: string[];
      cannotDo: string[];
    };
    complexEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    complexSubstitution: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    commonContexts: string[];
    learningResources: string[];
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
      sophistication: string;
    };
  };

  // B2 Level - Upper Intermediate Ellipsis and Substitution
  B2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescriptors: {
      canDo: string[];
      cannotDo: string[];
    };
    formalEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    formalSubstitution: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    commonContexts: string[];
    learningResources: string[];
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
      professionalism: string;
    };
  };

  // C1 Level - Advanced Ellipsis and Substitution
  C1: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescriptors: {
      canDo: string[];
      cannotDo: string[];
    };
    academicEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    sophisticatedSubstitution: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    commonContexts: string[];
    learningResources: string[];
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
      sophistication: string;
    };
  };

  // C2 Level - Mastery Ellipsis and Substitution
  C2: {
    definition: string;
    learningObjectives: string[];
    proficiencyDescriptors: {
      canDo: string[];
      cannotDo: string[];
    };
    literaryEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    specializedEllipsis: {
      concept: string;
      linguisticExplanation: string;
      patterns: string[];
      examples: string[];
      usageNotes: string[];
    };
    commonContexts: string[];
    learningResources: string[];
    assessmentCriteria: {
      accuracy: string;
      appropriateness: string;
      clarity: string;
      mastery: string;
    };
  };

  // Original Ellipsis and Substitution Section
  EllipsisAndSubstitution: {
    definition: string;
    ellipsis: {
      types: {
        subjectEllipsis: {
          example: string;
          note: string;
        };
        auxiliaryVerbEllipsis: {
          example: string;
          note: string;
        };
        toInfinitiveEllipsis: {
          example: string;
          note: string;
        };
        objectEllipsis: {
          example: string;
          note: string;
        };
      };
      usage: string[];
    };
    substitution: {
      commonWords: {
        doSo: string;
        "one/ones": string;
        "so/not": string;
        that: string;
      };
      examples: Array<{
        sentence: string;
        substitution: string;
      }>;
      usage: string[];
    };
    recognitionTips: string[];
    commonErrors: string[];
  };

  // Advanced Patterns and Constructions
  advancedEllipsisAndSubstitutionPatterns: {
    concept: string;
    gapping: {
      pattern: string;
      examples: string[];
    };
    sluicing: {
      pattern: string;
      examples: string[];
    };
    stripping: {
      pattern: string;
      examples: string[];
    };
    verbPhraseEllipsis: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations and Fixed Expressions
  ellipsisAndSubstitutionCollocations: {
    concept: string;
    ellipsisCollocations: {
      pattern: string;
      examples: string[];
    };
    substitutionCollocations: {
      pattern: string;
      examples: string[];
    };
    formalCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  ellipsisAndSubstitutionGenreUsage: {
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
  ellipsisAndSubstitutionFrequencyAndRegister: {
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

  ellipsisAndSubstitutionExercises: {
    concept: string;
    basicExercises: {
      type: string;
    };
    intermediateExercises: {
      type: string;
    };
    advancedExercises: {
      type: string;
    };
    errorCorrection: {
      type: string;
    };
  };

  // Assessment and Evaluation
  ellipsisAndSubstitutionAssessment: {
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

  // Learning Strategies
  ellipsisAndSubstitutionLearningStrategies: {
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

  // Language Tests
  ellipsisAndSubstitutionInTests: {
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

  // Common Mistakes
  commonEllipsisAndSubstitutionMistakes: {
    concept: string;
    mistakeTypes: {
      unnecessaryRepetition: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      incorrectSubstitution: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      overEllipsis: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongRegister: {
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
      patternPractice: string;
      contextPractice: string;
      clarityPractice: string;
      substitutionPractice: string;
    };
  };
}

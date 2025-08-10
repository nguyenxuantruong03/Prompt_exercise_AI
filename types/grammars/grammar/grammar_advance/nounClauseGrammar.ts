export interface nounClauseGrammarType {
  id: number;
  topic: string;
  level: string;
  definition: string;
  detailedDefinition: {
    comprehensive: string;
    linguistic: string;
    functional: string;
  };
  functions: string[];
  structure: {
    general: string;
    notes: string[];
    syntacticRoles: {
      role: string;
      description: string;
      example: string;
    }[];
  };
  connectors: {
    thatClause: string[];
    whClause: string[];
    ifClause: string[];
    zeroConnector: string[];
    detailedConnectors: {
      type: string;
      connectors: string[];
      usage: string;
      examples: string[];
    }[];
  };
  usageTypes: {
    type: string;
    example: string;
    form: string;
    note: string;
    levelAppropriate: string;
    additionalExamples?: string[];
  }[];
  verbPatterns: {
    reportingVerbs: string[];
    mentalVerbs: string[];
    emotionalVerbs: string[];
    causativeVerbs: string[];
    perceptionVerbs: string[];
    verbCategorization: {
      category: string;
      verbs: string[];
      structure: string;
      examples: string[];
      level: string;
    }[];
  };
  tenseAndVoice: {
    tenseShiftInIndirectSpeech: boolean;
    voiceSupport: boolean;
    passiveExample: string;
    sequenceOfTenses: {
      rule: string;
      examples: {
        direct: string;
        indirect: string;
      }[];
    };
    modalShifts: {
      modal: string;
      shifts: {
        from: string;
        to: string;
        example: string;
      }[];
    }[];
  };
  recognitionPatterns: string[];
  examples: {
    subject: string;
    object: string;
    objectOfPrep: string;
    subjectComplement: string;
    appositive: string;
    levelSpecific: {
      level: string;
      examples: {
        type: string;
        sentence: string;
        explanation: string;
      }[];
    }[];
  };
  advancedStructures: {
    name: string;
    structure: string;
    example: string;
    note: string;
    level?: string;
    additionalExamples?: string[];
  }[];
  academicUsage: {
    recommendationVerbs: string[];
    academicExample: string;
    note: string;
    formalStructures: {
      structure: string;
      purpose: string;
      examples: string[];
    }[];
    academicWritingPatterns: {
      pattern: string;
      usage: string;
      examples: string[];
    }[];
  };
  commonMistakes: {
    mistake: string;
    correction: string;
    note: string;
    level?: string;
    explanation?: string;
  }[];
  relatedTopics: string[];
  timeMarkers: string[];
  learningTips: string[];
  spellingNotes: string[];
  advancedExamples: string[];
  formCheck: {
    nounClauseActsAs: string[];
    beginsWith: string[];
    testMethods: string[];
  };
  CEFRLevels: {
    A1_A2: {
      structures: string[];
      vocabulary: string[];
      learningObjectives: string[];
      keyPoints: string[];
      practiceAreas: string[];
    };
    B1_B2: {
      structures: string[];
      vocabulary: string[];
      learningObjectives: string[];
      keyPoints: string[];
      practiceAreas: string[];
    };
    C1_C2: {
      structures: string[];
      vocabulary: string[];
      learningObjectives: string[];
      keyPoints: string[];
      practiceAreas: string[];
    };
  };
  levelProgression: {
    level: string;
    prerequisites: string[];
    coreContent: string[];
    skillDevelopment: string[];
    assessmentCriteria: string[];
  }[];
  culturalUsage: {
    formalVsInformal: {
      context: string;
      structures: string[];
      examples: string[];
    }[];
    regionalVariations: {
      region: string;
      preferences: string[];
      examples: string[];
    }[];
  };
  practicalApplications: {
    context: string;
    structures: string[];
    examples: string[];
    level: string;
  }[];
  cognitiveLinguistics: {
    mentalModels: string[];
    conceptualFrameworks: string[];
    processingStrategies: string[];
  };
  crossLinguisticComparison: {
    language: string;
    similarities: string[];
    differences: string[];
    learningChallenges: string[];
  }[];
  teachingStrategies: {
    level: string;
    approaches: string[];
    activities: string[];
    assessmentMethods: string[];
  }[];
  citations: string[];
  recommendedReading: {
    books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      relevantChapters?: string[];
    }[];
    websites: {
      title: string;
      url: string;
      description: string;
      accessDate?: string;
    }[];
    academicPapers: {
      title: string;
      author: string;
      journal: string;
      year: number;
      doi?: string;
    }[];
  };
}
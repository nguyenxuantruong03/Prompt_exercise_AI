export interface ReflexiveVerbsType {
  id: number;
  topic: string;
  level: string;
  definition: string;
  structure: string;

  reflexivePronouns: {
    singular: {
      first: string;
      second: string;
      thirdMale: string;
      thirdFemale: string;
      thirdNeutral: string;
    };
    plural: {
      first: string;
      second: string;
      third: string;
    };
  };

  reflexive_verbs_vocab: {
    basic_daily_actions: string[];
    emotions_and_mind: string[];
    actions_with_focus: string[];
    professional_academic: string[];
    idiomatic_and_fixed_expressions: string[];
    rare_or_old_fashioned: string[];
    reflexive_pronouns: string[];
  };

  usageTypes: Array<{
    type: string;
    description: string;
    examples: string[];
    note?: string;
  }>;

  recognitionPatterns: string[];
  examples: string[];
  commonReflexiveVerbs: string[];

  nonReflexiveVerbsOftenUsedWith_Reflexives: Array<{
    verb: string;
    reflexive: string;
    nonReflexive: string;
  }>;

  formsByTense: {
    presentSimple: string;
    pastSimple: string;
    future: string;
    presentPerfect: string;
    conditional: string;
    passive: string;
  };

  passiveNote: string;

  position: {
    normal: string;
    emphasis: string;
    after_prepositions: string;
    in_commands: string;
  };

  mistakes: Array<{
    mistake: string;
    correction: string;
    note: string;
  }>;

  advancedUsage: {
    literary: string[];
    with_infinitives: string[];
    abstract_context: string[];
  };

  idioms: Array<{
    phrase: string;
    meaning: string;
    example: string;
  }>;

  teachingTips: string[];
  learningNotes: string[];

  cefrBreakdown: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  relatedTopics: string[];
  spellingRules: string;
  citations: string[];

  metaphoricalAndAbstractUse: Array<{
    phrase: string;
    meaning: string;
    example: string;
  }>;

  academicAndPhilosophicalUsage: Array<{
    context: string;
    example: string;
    note: string;
  }>;

  literaryAndStylisticDevices: Array<{
    device: string;
    example: string;
    note: string;
  }>;

  functionalSemanticShift: Array<{
    verb: string;
    standard: string;
    reflexive: string;
    note: string;
  }>;

  compoundVerbUsage: Array<{
    type: string;
    example: string;
    note: string;
  }>;

  culturalReflexivity: Array<{
    culture: string;
    usage: string;
    example: string;
  }>;

  roleInLanguageAcquisition: {
    earlyStages: string[];
    intermediate: string[];
    advanced: string[];
  };

  linguisticNotes: {
    voiceInteraction: string;
    transitivity: string;
    ergativity: string;
    ellipsis: string;
    reflexiveVsIntensive: {
      example: string;
      note: string;
    };
  };

  testYourselfQuestions: Array<{
    question: string;
    options: string[];
    answer: string;
  }>;

  extendedVerbListAdvanced: string[];

  // New comprehensive additions for A1-C2 complete knowledge
  detailedLevelBreakdown: {
    A1: {
      coreVerbs: string[];
      basicStructures: string[];
      simpleExamples: string[];
      commonMistakes: Array<{
        mistake: string;
        correction: string;
        explanation: string;
      }>;
      keyLearningPoints: string[];
    };
    A2: {
      expandedVocabulary: string[];
      pastAndFutureForms: string[];
      questionForms: string[];
      negativeFormPatterns: string[];
      practicalUsageScenarios: string[];
    };
    B1: {
      intermediateReflexives: string[];
      contrastiveUsage: Array<{
        reflexive: string;
        nonReflexive: string;
        explanation: string;
      }>;
      conditionalForms: string[];
      perfectTenseForms: string[];
      formalVsInformalUsage: Array<{
        formal: string;
        informal: string;
        context: string;
      }>;
    };
    B2: {
      advancedSemantics: Array<{
        verb: string;
        meaning: string;
        usage: string;
        examples: string[];
      }>;
      stylisticVariations: string[];
      registerDifferences: Array<{
        academic: string;
        conversational: string;
        literary: string;
      }>;
      complexSentenceStructures: string[];
    };
    C1: {
      sophisticatedUsage: Array<{
        context: string;
        examples: string[];
        nuances: string;
      }>;
      philosophicalAndAbstractApplications: string[];
      literaryDevices: Array<{
        device: string;
        reflexiveUsage: string;
        effect: string;
      }>;
      crossLinguisticComparisons: Array<{
        language: string;
        comparison: string;
        note: string;
      }>;
    };
    C2: {
      masterLevelUsage: Array<{
        domain: string;
        examples: string[];
        subtleties: string;
      }>;
      poeticAndArtisticApplications: string[];
      historicalEvolution: Array<{
        period: string;
        usage: string;
        modernEquivalent: string;
      }>;
      interdisciplinaryApplications: Array<{
        field: string;
        usage: string;
        significance: string;
      }>;
    };
  };

  comprehensiveVerbCategories: {
    physicalActions: {
      bodyMovements: string[];
      selfCare: string[];
      protection: string[];
      positioning: string[];
    };
    mentalAndEmotional: {
      cognition: string[];
      emotions: string[];
      selfPerception: string[];
      communication: string[];
    };
    socialAndInterpersonal: {
      introduction: string[];
      assertion: string[];
      withdrawal: string[];
      adaptation: string[];
    };
    professionalAndAcademic: {
      development: string[];
      commitment: string[];
      performance: string[];
      research: string[];
    };
    existentialAndPhilosophical: {
      identity: string[];
      existence: string[];
      consciousness: string[];
      transcendence: string[];
    };
  };

  syntacticPatterns: {
    wordOrder: Array<{
      pattern: string;
      examples: string[];
      level: string;
    }>;
    embedding: Array<{
      structure: string;
      examples: string[];
      complexity: string;
    }>;
    coordination: Array<{
      type: string;
      examples: string[];
      usage: string;
    }>;
  };

  pragmaticAspects: {
    politeness: Array<{
      level: string;
      examples: string[];
      context: string;
    }>;
    emphasis: Array<{
      method: string;
      examples: string[];
      effect: string;
    }>;
    indirectness: Array<{
      direct: string;
      indirect: string;
      purpose: string;
    }>;
  };

  semanticFields: {
    agentivity: Array<{
      verb: string;
      agentive: string;
      nonAgentive: string;
      note: string;
    }>;
    intentionality: Array<{
      intentional: string;
      unintentional: string;
      ambiguous: string;
    }>;
    aspectuality: Array<{
      punctual: string;
      durative: string;
      iterative: string;
    }>;
  };

  pedagogicalProgression: {
    introductoryActivities: string[];
    reinforcementExercises: string[];
    applicationTasks: string[];
    assessmentCriteria: string[];
  };

  errorAnalysis: {
    l1Interference: Array<{
      language: string;
      error: string;
      correction: string;
      explanation: string;
    }>;
    developmentalErrors: Array<{
      stage: string;
      error: string;
      remedy: string;
    }>;
    fossilizedErrors: Array<{
      error: string;
      intervention: string;
      prevention: string;
    }>;
  };

  extendedReferences: {
    academicBooks: Array<{
      title: string;
      author: string;
      year: number;
      publisher: string;
      relevantChapters: string[];
      isbn?: string;
    }>;
    researchArticles: Array<{
      title: string;
      authors: string[];
      journal: string;
      year: number;
      doi?: string;
      keyFindings: string;
    }>;
    onlineResources: Array<{
      name: string;
      url: string;
      description: string;
      accessDate: string;
    }>;
    corpora: Array<{
      name: string;
      description: string;
      relevance: string;
    }>;
    grammarGuides: Array<{
      title: string;
      author: string;
      focus: string;
      level: string;
    }>;
  };

  historicalDevelopment: {
    oldEnglish: string;
    middleEnglish: string;
    earlyModernEnglish: string;
    modernEnglish: string;
    evolutionTrends: string[];
  };

  varietiesOfEnglish: {
    americanEnglish: Array<{
      usage: string;
      example: string;
      note: string;
    }>;
    britishEnglish: Array<{
      usage: string;
      example: string;
      note: string;
    }>;
    globalVarieties: Array<{
      variety: string;
      characteristic: string;
      example: string;
    }>;
  };

  psycholinguisticAspects: {
    processing: string;
    acquisition: string;
    storage: string;
    retrieval: string;
  };

  computationalLinguistics: {
    parsing: string;
    generation: string;
    machineTranslation: string;
    nlpChallenges: string[];
  };
}

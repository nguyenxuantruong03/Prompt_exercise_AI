export interface NominalisationType {
  // Definition and Core Concepts
  nominalisationDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    linguisticTheory: string;
    cognitiveBenefits: string;
  };

  // Learning Resources
  learningResources: {
    books: Array<{
      title: string;
      author: string;
      publisher: string;
      year: string;
      relevance: string;
      isbn: string;
    }>;
    websites: Array<{
      name: string;
      url: string;
      description: string;
      features: string[];
    }>;
    academicJournals: Array<{
      name: string;
      focus: string;
      publisher: string;
    }>;
  };

  // A1 Level
  A1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      nominalisationProcess: string;
      basicPatterns: string;
      simpleStructures: string;
    };
    simpleVerbToNoun: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonSuffixes: {
        [key: string]: string;
      };
      learningTips: string[];
    };
    basicStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
      structuralAnalysis: {
        existentialPattern: string;
        possessivePattern: string;
        passivePattern: string;
      };
      usageContexts: string[];
    };
    assessmentCriteria: {
      recognition: string;
      production: string;
      understanding: string;
    };
    commonErrors: string[];
  };

  // A2 Level
  A2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      expandedPatterns: string;
      adjectiveNominalisation: string;
      clauseReduction: string;
    };
    expandedVerbToNoun: {
      concept: string;
      patterns: string[];
      examples: string[];
      suffixPatterns: {
        [key: string]: string;
      };
      learningStrategies: string[];
    };
    adjectiveToNoun: {
      concept: string;
      patterns: string[];
      examples: string[];
      suffixPatterns: {
        [key: string]: string;
      };
      semanticChanges: {
        qualityToConcept: string;
        personalToGeneral: string;
      };
    };
    simpleClauseToNoun: {
      concept: string;
      patterns: string[];
      examples: string[];
      transformationProcess: {
        step1: string;
        step2: string;
        step3: string;
        step4: string;
      };
      structuralAnalysis: {
        subjectVerbPattern: string;
        timeExpression: string;
        agentFocus: string;
      };
    };
    assessmentCriteria: {
      accuracy: string;
      variety: string;
      context: string;
    };
    commonErrors: string[];
  };

  // B1 Level
  B1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      academicStyle: string;
      abstractThinking: string;
      formalRegister: string;
    };
    complexVerbToNoun: {
      concept: string;
      patterns: string[];
      examples: string[];
      suffixPatterns: {
        [key: string]: string;
      };
      semanticComplexity: {
        processFocus: string;
        resultFocus: string;
        conceptFocus: string;
      };
    };
    academicStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
      structuralFeatures: {
        passiveVoice: string;
        agentByPhrase: string;
        abstractSubject: string;
      };
      academicFunctions: {
        objectivity: string;
        formality: string;
        conciseness: string;
      };
    };
    abstractNouns: {
      concept: string;
      patterns: string[];
      examples: string[];
      semanticCategories: {
        processNouns: string;
        resultNouns: string;
        conceptNouns: string;
      };
      usageContexts: string[];
    };
    assessmentCriteria: {
      complexity: string;
      appropriateness: string;
      accuracy: string;
    };
    commonErrors: string[];
  };

  // B2 Level
  B2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      sophisticatedPatterns: string;
      professionalUsage: string;
      complexTransformations: string;
    };
    sophisticatedTransformations: {
      concept: string;
      patterns: string[];
      examples: string[];
      suffixPatterns: {
        [key: string]: string;
      };
      semanticFeatures: {
        processEmphasis: string;
        resultFocus: string;
        abstraction: string;
      };
    };
    formalStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
      structuralAnalysis: {
        agentInclusion: string;
        passiveConstruction: string;
        complexPrepositional: string;
      };
      professionalFunctions: {
        accountability: string;
        precision: string;
        authority: string;
      };
    };
    complexClauseToNoun: {
      concept: string;
      patterns: string[];
      examples: string[];
      transformationProcess: {
        step1: string;
        step2: string;
        step3: string;
        step4: string;
      };
      structuralFeatures: {
        possessiveConstruction: string;
        compoundNouns: string;
        abstractFocus: string;
      };
    };
    assessmentCriteria: {
      sophistication: string;
      formality: string;
      complexity: string;
    };
    commonErrors: string[];
  };

  // C1 Level
  C1: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      academicMastery: string;
      professionalExpertise: string;
      abstractComplexity: string;
    };
    academicNominalisation: {
      concept: string;
      patterns: string[];
      examples: string[];
      academicFeatures: {
        objectivity: string;
        precision: string;
        complexity: string;
      };
      researchFunctions: {
        methodology: string;
        findings: string;
        implications: string;
      };
    };
    professionalNominalisation: {
      concept: string;
      patterns: string[];
      examples: string[];
      professionalFeatures: {
        strategicFocus: string;
        efficiency: string;
        results: string;
      };
      businessFunctions: {
        planning: string;
        management: string;
        evaluation: string;
      };
    };
    complexAbstractNouns: {
      concept: string;
      patterns: string[];
      examples: string[];
      semanticComplexity: {
        multiLayered: string;
        specialized: string;
        sophisticated: string;
      };
      usageContexts: string[];
    };
    assessmentCriteria: {
      mastery: string;
      appropriateness: string;
      sophistication: string;
    };
    commonErrors: string[];
  };

  // C2 Level
  C2: {
    definition: string;
    learningObjectives: string[];
    keyConcepts: {
      completeMastery: string;
      creativeApplication: string;
      philosophicalDepth: string;
    };
    philosophicalNominalisation: {
      concept: string;
      patterns: string[];
      examples: string[];
      philosophicalFeatures: {
        abstraction: string;
        depth: string;
        innovation: string;
      };
      conceptualFunctions: {
        metaphysics: string;
        epistemology: string;
        ontology: string;
      };
    };
    creativeNominalisation: {
      concept: string;
      patterns: string[];
      examples: string[];
      creativeFeatures: {
        metaphor: string;
        innovation: string;
        artistry: string;
      };
      artisticFunctions: {
        expression: string;
        innovation: string;
        beauty: string;
      };
    };
    specializedNominalisation: {
      concept: string;
      patterns: string[];
      examples: string[];
      specializedFeatures: {
        technical: string;
        innovative: string;
        precise: string;
      };
    };
    assessmentCriteria: {
      mastery: string;
      creativity: string;
      sophistication: string;
    };
    commonErrors: string[];
  };

  // Original Nominalisation Section
  Nominalisation: {
    definition: string;
    purpose: string[];
    examples: Array<{
      original: string;
      nominalised: string;
    }>;
    commonTransformations: {
      verbToNoun: {
        [key: string]: string;
      };
      adjectiveToNoun: {
        [key: string]: string;
      };
      clauseToNounPhrase: {
        [key: string]: string;
      };
    };
    recognitionTips: string[];
    commonStructures: string[];
    commonErrors: string[];
  };

  // Advanced Patterns
  advancedNominalisationPatterns: {
    concept: string;
    complexVerbTransformations: {
      pattern: string;
      examples: string[];
    };
    academicPatterns: {
      pattern: string;
      examples: string[];
    };
    professionalPatterns: {
      pattern: string;
      examples: string[];
    };
    philosophicalPatterns: {
      pattern: string;
      examples: string[];
    };
  };

  // Collocations
  nominalisationCollocations: {
    concept: string;
    academicCollocations: {
      pattern: string;
      examples: string[];
    };
    businessCollocations: {
      pattern: string;
      examples: string[];
    };
    researchCollocations: {
      pattern: string;
      examples: string[];
    };
  };

  // Genre Usage
  nominalisationGenreUsage: {
    concept: string;
    academicWriting: {
      characteristics: string;
      examples: string[];
    };
    businessWriting: {
      characteristics: string;
      examples: string[];
    };
    formalWriting: {
      characteristics: string;
      examples: string[];
    };
    technicalWriting: {
      characteristics: string;
      examples: string[];
    };
  };

  // Frequency and Register
  nominalisationFrequencyAndRegister: {
    concept: string;
    highFrequencyPatterns: {
      pattern: string;
      examples: string[];
    };
    formalRegister: {
      characteristics: string;
      examples: string[];
    };
    academicRegister: {
      characteristics: string;
      examples: string[];
    };
    technicalRegister: {
      characteristics: string;
      examples: string[];
    };
  };

  // Assessment
  nominalisationAssessment: {
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
  nominalisationLearningStrategies: {
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
  nominalisationInTests: {
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
  commonNominalisationMistakes: {
    concept: string;
    mistakeTypes: {
      wrongNounForm: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      overuse: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      missingAgent: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
      wrongSuffix: {
        error: string;
        example: string;
        correction: string;
        explanation: string;
      };
    };
    preventionStrategies: {
      formPractice: string;
      clarityPractice: string;
      agentPractice: string;
      suffixPractice: string;
    };
  };
}

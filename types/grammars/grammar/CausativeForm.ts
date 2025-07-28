export interface CausativeFormType {
  causativeFormDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    references: string[];
  };

  A1: {
    definition: string;
    learningObjectives: string[];
    keyGrammarPoints: {
      basicStructure: {
        pattern: string;
        explanation: string;
        formulation: string;
        examples: string[];
      };
      commonServices: {
        concept: string;
        vocabulary: string[];
        realLifeApplications: string[];
      };
    };
    commonMistakes: string[];
    culturalContext: string;
    references: string[];
  };

  A2: {
    definition: string;
    learningObjectives: string[];
    keyGrammarPoints: {
      getStructure: {
        pattern: string;
        explanation: string;
        comparison: {
          have: string;
          get: string;
        };
        examples: string[];
      };
      pastTenseUsage: {
        patterns: string[];
        timeExpressions: string[];
        examples: string[];
      };
      questionForms: {
        yesNoQuestions: string[];
        whQuestions: string[];
      };
    };
    vocabulary: {
      personalCare: string[];
      homeServices: string[];
      vehicleServices: string[];
    };
    references: string[];
  };

  B1: {
    definition: string;
    learningObjectives: string[];
    keyGrammarPoints: {
      activeCausative: {
        haveStructure: {
          pattern: string;
          usage: string;
          examples: string[];
        };
        getStructure: {
          pattern: string;
          usage: string;
          examples: string[];
        };
      };
      modalVerbs: {
        patterns: string[];
        examples: string[];
      };
      futureUsage: {
        patterns: string[];
        examples: string[];
      };
    };
    contextualUsage: {
      professional: string[];
      personal: string[];
      business: string[];
    };
    references: string[];
  };

  B2: {
    definition: string;
    learningObjectives: string[];
    keyGrammarPoints: {
      perfectTenses: {
        presentPerfect: {
          pattern: string;
          examples: string[];
        };
        pastPerfect: {
          pattern: string;
          examples: string[];
        };
        futurePerfect: {
          pattern: string;
          examples: string[];
        };
      };
      complexStructures: {
        causativeWithPassive: string[];
        multipleCausatives: string[];
      };
      formalRegister: {
        academicContexts: string[];
        businessContexts: string[];
      };
    };
    stylistic: {
      emphasis: string;
      register: string;
      tone: string;
    };
    references: string[];
  };

  C1: {
    definition: string;
    learningObjectives: string[];
    keyGrammarPoints: {
      academicCausative: {
        researchContexts: string[];
        scholarlyWriting: string[];
      };
      sophisticatedStructures: {
        causativeInComplexSentences: string[];
        causativeWithGerunds: string[];
      };
      rhetoricalFunctions: {
        emphasis: string;
        precision: string;
        formality: string;
      };
    };
    professionalApplications: {
      consulting: string[];
      legal: string[];
      medical: string[];
    };
    references: string[];
  };

  C2: {
    definition: string;
    learningObjectives: string[];
    keyGrammarPoints: {
      literaryUsage: {
        narrativeEffects: string[];
        poeticExpressions: string[];
      };
      philosophicalUsage: {
        abstractConcepts: string[];
        intellectualDiscourse: string[];
      };
      specializedRegisters: {
        technical: string[];
        scientific: string[];
      };
    };
    stylisticMastery: {
      registerVariation: string;
      rhetoricalSophistication: string;
      creativeApplication: string;
    };
    culturalMastery: {
      idiomaticUsage: string;
      crossCulturalCommunication: string;
      historicalAwareness: string;
    };
    references: string[];
  };
}

export interface politeVsDirectLanguageType {
  topic: string;
  levels: string[];
  description: string;

  definitions: {
    politeLanguage: {
      definition: string;
      characteristics: string[];
      purposes: string[];
    };
    directLanguage: {
      definition: string;
      characteristics: string[];
      purposes: string[];
    };
  };

  usage: {
    polite: {
      functions: string[];
      typicalStructures: string[];
      modalVerbsUsed: string[];
      hedgingWords: string[];
      softeners: string[];
      politenessPhrases: string[];
      indirectSpeechActs: string[];
    };
    direct: {
      functions: string[];
      typicalStructures: string[];
      modalVerbsUsed: string[];
      intensifiers: string[];
      commandForms: string[];
      directSpeechActs: string[];
    };
  };

  comparison: {
    keyDifferences: Array<{
      point: string;
      polite: string;
      direct: string;
    }>;
    appropriatenessFactors: string[];
    culturalConsiderations: string[];
  };

  levelsByCEFR: {
    A1: {
      description: string;
      keyLearningObjectives: string[];
      examples: {
        polite: string[];
        direct: string[];
      };
      vocabulary: {
        polite: string[];
        direct: string[];
      };
      commonPatterns: {
        polite: string[];
        direct: string[];
      };
      culturalNotes: string[];
    };
    A2: {
      description: string;
      keyLearningObjectives: string[];
      examples: {
        polite: string[];
        direct: string[];
      };
      vocabulary: {
        polite: string[];
        direct: string[];
      };
      commonPatterns: {
        polite: string[];
        direct: string[];
      };
      culturalNotes: string[];
    };
    B1: {
      description: string;
      keyLearningObjectives: string[];
      examples: {
        polite: string[];
        direct: string[];
      };
      vocabulary: {
        polite: string[];
        direct: string[];
      };
      commonPatterns: {
        polite: string[];
        direct: string[];
      };
      culturalNotes: string[];
      advancedStructures: {
        polite: string[];
        direct: string[];
      };
    };
    B2: {
      description: string;
      keyLearningObjectives: string[];
      examples: {
        polite: string[];
        direct: string[];
      };
      vocabulary: {
        polite: string[];
        direct: string[];
      };
      commonPatterns: {
        polite: string[];
        direct: string[];
      };
      culturalNotes: string[];
      advancedStructures: {
        polite: string[];
        direct: string[];
      };
      professionalContext: {
        polite: string[];
        direct: string[];
      };
    };
    C1: {
      description: string;
      keyLearningObjectives: string[];
      examples: {
        polite: string[];
        direct: string[];
      };
      vocabulary: {
        polite: string[];
        direct: string[];
      };
      commonPatterns: {
        polite: string[];
        direct: string[];
      };
      culturalNotes: string[];
      advancedStructures: {
        polite: string[];
        direct: string[];
      };
      professionalContext: {
        polite: string[];
        direct: string[];
      };
      nuancedExpressions: {
        polite: string[];
        direct: string[];
      };
    };
    C2: {
      description: string;
      keyLearningObjectives: string[];
      examples: {
        polite: string[];
        direct: string[];
      };
      vocabulary: {
        polite: string[];
        direct: string[];
      };
      commonPatterns: {
        polite: string[];
        direct: string[];
      };
      culturalNotes: string[];
      advancedStructures: {
        polite: string[];
        direct: string[];
      };
      professionalContext: {
        polite: string[];
        direct: string[];
      };
      nuancedExpressions: {
        polite: string[];
        direct: string[];
      };
      sophisticatedRegister: {
        polite: string[];
        direct: string[];
      };
    };
  };

  registerAwareness: {
    formalVsInformal: {
      formalPoliteExamples: string[];
      informalPoliteExamples: string[];
      informalDirectExamples: string[];
      formalDirectExamples: string[];
    };
    contextualFactors: string[];
    appropriatenessGuidelines: string[];
  };

  strategies: {
    softenDirectness: string[];
    beMoreDirect: string[];
    registerSwitching: string[];
    contextualAdaptation: string[];
  };

  commonMistakes: string[];

  learningTips: string[];

  practiceActivities: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  assessmentCriteria: {
    appropriateness: string[];
    clarity: string[];
    effectiveness: string[];
  };

  references: Array<{
    title: string;
    author?: string;
    publisher?: string;
    year?: number;
    url?: string;
    type: "book" | "website" | "article" | "research";
    description: string;
  }>;
}

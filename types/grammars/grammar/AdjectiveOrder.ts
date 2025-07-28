export interface AdjectiveOrderType {
  // Core Definition and Theoretical Foundation
  adjectiveOrderDefinition: {
    concept: string;
    linguisticBasis: string;
    importance: string;
    corePrinciple: string;
    scope: string;
    references: string[];
  };

  // Standard Adjective Order Framework
  standardOrder: {
    definition: string;
    categories: string[];
    mnemonicDevice: string;
    structureFormula: string;
    masterExample: string;
    cognitiveRationale: string;
  };

  // CEFR Level Interfaces
  A1: {
    levelDescription: string;
    learningObjectives: string[];
    corePatterns: {
      primaryPatterns: string[];
      basicCategories: {
        opinion: {
          definition: string;
          examples: string[];
          position: string;
        };
        size: {
          definition: string;
          examples: string[];
          position: string;
        };
        color: {
          definition: string;
          examples: string[];
          position: string;
        };
        age: {
          definition: string;
          examples: string[];
          position: string;
        };
      };
      commonCombinations: string[];
      frequencyNote: string;
    };
    practicalApplications: {
      contexts: string[];
      realWorldExamples: string[];
    };
    commonMistakes: Array<{
      error: string;
      correction: string;
      explanation: string;
    }>;
    references: string[];
  };

  A2: {
    levelDescription: string;
    learningObjectives: string[];
    expandedPatterns: {
      threeAdjectiveCombinations: string[];
      shapeIntegration: {
        definition: string;
        shapeAdjectives: string[];
        position: string;
        examples: string[];
      };
      patternVariations: {
        concept: string;
        variations: string[];
        naturalness: string;
      };
    };
    contextualUsage: {
      descriptiveContexts: string[];
      registerAwareness: string;
    };
    cognitiveProcessing: {
      concept: string;
      explanation: string;
      practicalTip: string;
    };
    references: string[];
  };

  B1: {
    levelDescription: string;
    learningObjectives: string[];
    complexSequences: {
      fullSequencePatterns: string[];
      originAdjectives: {
        definition: string;
        categories: {
          nationality: string[];
          regional: string[];
          cultural: string[];
        };
        position: string;
        examples: string[];
      };
      materialAdjectives: {
        definition: string;
        categories: {
          natural: string[];
          synthetic: string[];
          composite: string[];
        };
        position: string;
        examples: string[];
      };
      purposeQualifiers: {
        definition: string;
        categories: {
          functional: string[];
          typological: string[];
          specialized: string[];
        };
        position: string;
        examples: string[];
      };
    };
    advancedApplications: {
      professionalContexts: string[];
      academicWriting: string;
    };
    strategicLearning: {
      buildingComplexity: string;
      categoryRecognition: string;
      naturalnessTesting: string;
    };
    references: string[];
  };

  B2: {
    levelDescription: string;
    learningObjectives: string[];
    sophisticatedPatterns: {
      compoundAdjectives: {
        definition: string;
        types: {
          descriptive: string[];
          qualitative: string[];
          temporal: string[];
          dimensional: string[];
        };
        positioning: string;
        examples: string[];
      };
      quantifierIntegration: {
        definition: string;
        patterns: string[];
        examples: string[];
        complexQuantifiers: string[];
      };
      stylisticVariations: {
        emphasis: {
          concept: string;
          techniques: string[];
          examples: string[];
        };
        register_variation: {
          formal: string;
          informal: string;
          literary: string;
        };
      };
    };
    professionalApplications: {
      businessWriting: string[];
      technicalDocumentation: string[];
      marketingCommunication: string[];
    };
    culturalConsiderations: {
      dialectalVariations: {
        americanEnglish: string;
        britishEnglish: string;
        globalEnglish: string;
      };
      registerSensitivity: string;
    };
    references: string[];
  };

  C1: {
    levelDescription: string;
    learningObjectives: string[];
    academicMastery: {
      academicWriting: {
        characteristics: string;
        patterns: string[];
        examples: string[];
        disciplinaryVariations: {
          sciences: string;
          humanities: string;
          socialSciences: string;
        };
      };
      technicalPrecision: {
        concept: string;
        engineeringApplications: string[];
        medicalApplications: string[];
        businessApplications: string[];
      };
    };
    stylisticSophistication: {
      literaryApplications: {
        concept: string;
        techniques: string[];
        examples: string[];
      };
      rhetoricaStrategies: {
        persuasiveWriting: string;
        descriptiveWriting: string;
        argumentativeWriting: string;
      };
    };
    crossLinguisticAwareness: {
      concept: string;
      interferencePatterns: {
        romance_languages: string;
        germanic_languages: string;
        asian_languages: string;
      };
      teachingImplications: string;
    };
    references: string[];
  };

  C2: {
    levelDescription: string;
    learningObjectives: string[];
    creativeMastery: {
      artisticApplications: {
        concept: string;
        experimentalPatterns: string[];
        examples: string[];
        poeticDevices: {
          alliteration: string;
          assonance: string;
          semantic_clustering: string;
        };
      };
      innovativeUsage: {
        concept: string;
        techniques: string[];
        examples: string[];
      };
    };
    dialectalVariations: {
      regionalDifferences: {
        american_english: {
          characteristics: string;
          examples: string[];
        };
        british_english: {
          characteristics: string;
          examples: string[];
        };
        international_varieties: {
          characteristics: string;
          examples: string[];
        };
      };
      sociolinguisticFactors: {
        class_markers: string;
        generational_differences: string;
        professional_registers: string;
      };
    };
    specializedApplications: {
      legalWriting: {
        characteristics: string;
        examples: string[];
      };
      scientificWriting: {
        characteristics: string;
        examples: string[];
      };
      diplomaticLanguage: {
        characteristics: string;
        examples: string[];
      };
    };
    metaLinguisticAwareness: {
      concept: string;
      theoreticalFrameworks: string[];
      teachingApplications: string;
    };
    references: string[];
  };

  // Common Mistakes and Correction Strategies
  commonMistakesAndCorrections: {
    concept: string;
    errorTypes: {
      categoryMisplacement: {
        error: string;
        examples: string[];
        correctionStrategy: string;
      };
      L1Interference: {
        error: string;
        examples: string[];
        correctionStrategy: string;
      };
      overcomplication: {
        error: string;
        examples: string[];
        correctionStrategy: string;
      };
    };
    preventionTechniques: string[];
  };
}

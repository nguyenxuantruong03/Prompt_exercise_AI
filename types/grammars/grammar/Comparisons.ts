export interface ComparisonsType {
  id: number;
  comparisonsDefinition: {
    basicDefinition: string;
    linguisticDefinition: string;
    grammaticalFunction: string;
    keyCharacteristics: string[];
    morphologicalFeatures: {
      comparative: string;
      superlative: string;
      equality: string;
      inequality: string;
      doubleComparative: string;
      progressiveComparative: string;
    };
    positionInSentence: {
      attributive: string;
      predicative: string;
      adverbial: string;
      nominal: string;
    };
    academicReferences: string[];
  };

  A1: {
    definition: string;
    cognitiveLoad: string;
    basicComparatives: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      usage: string;
      commonAdjectives: string[];
    };
    basicSuperlatives: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      usage: string;
      scopeMarkers: string[];
    };
    basicEqualityComparisons: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      usage: string;
    };
    irregularComparisons: {
      definition: string;
      patterns: {
        [key: string]: {
          comparative: string;
          superlative: string;
        };
      };
      examples: string[];
    };
  };

  A2: {
    definition: string;
    cognitiveLoad: string;
    expandedComparatives: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      adjectiveCategories: {
        [categoryName: string]: string[];
      };
    };
    comparisonWithQuantifiers: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      quantifierRules: {
        countable: string;
        uncountable: string;
        superlative: string;
      };
    };
    adverbComparisons: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      commonAdverbs: string[];
    };
    basicIntensifiers: {
      definition: string;
      examples: string[];
      usage: string;
    };
  };

  B1: {
    definition: string;
    cognitiveLoad: string;
    doubleComparatives: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      patterns: string[];
    };
    progressiveComparatives: {
      definition: string;
      examples: string[];
      patterns: string[];
    };
    intensifierVariety: {
      definition: string;
      categories: {
        [intensityLevel: string]: string[];
      };
      examples: string[];
    };
    comparisonClauses: {
      definition: string;
      types: {
        [clauseType: string]: string;
      };
      examples: string[];
    };
  };

  B2: {
    definition: string;
    cognitiveLoad: string;
    idiomaticComparisons: {
      definition: string;
      linguisticFeatures: string[];
      expressions: {
        [expressionType: string]: string[];
      };
      examples: string[];
    };
    academicComparisons: {
      definition: string;
      linguisticFeatures: string[];
      examples: string[];
      academicIntensifiers: string[];
    };
    comparisonPrepositions: {
      definition: string;
      patterns: {
        [prepositionType: string]: string;
      };
      examples: string[];
    };
    contrastiveConjunctions: {
      definition: string;
      types: {
        [conjunctionType: string]: string[];
      };
      examples: string[];
    };
  };

  C1: {
    definition: string;
    cognitiveLoad: string;
    sophisticatedIntensifiers: {
      definition: string;
      categories: {
        [registerType: string]: string[];
      };
      examples: string[];
    };
    domainSpecificComparisons: {
      definition: string;
      domains: {
        [domainName: string]: {
          examples: string[];
          terminology: string[];
        };
      };
    };
    complexSyntacticPatterns: {
      definition: string;
      patterns: {
        [patternType: string]: string;
      };
      examples: string[];
    };
    registerSensitivity: {
      definition: string;
      registers: {
        [registerName: string]: string;
      };
    };
  };

  C2: {
    definition: string;
    cognitiveLoad: string;
    rareComparativeExpressions: {
      definition: string;
      expressions: {
        [expressionType: string]: string[];
      };
      examples: string[];
    };
    stylisticSophistication: {
      definition: string;
      techniques: {
        [techniqueName: string]: string;
      };
      examples: string[];
    };
    pragmaticMastery: {
      definition: string;
      aspects: {
        [aspectName: string]: string;
      };
      examples: string[];
    };
    crossLinguisticAwareness: {
      definition: string;
      features: string[];
    };
  };

  linguisticAnalysis: {
    morphology: {
      definition: string;
      processes: string[];
      constraints: string[];
    };
    syntax: {
      definition: string;
      patterns: string[];
      phenomena: string[];
    };
    semantics: {
      definition: string;
      concepts: string[];
      logicalProperties: string[];
    };
    pragmatics: {
      definition: string;
      aspects: string[];
    };
  };

  historicalDevelopment: {
    [period: string]: {
      period: string;
      features: string[];
    };
  };

  crossLinguisticComparison: {
    typology: {
      definition: string;
      universals: string[];
      variations: string[];
    };
    contactInfluences: {
      definition: string;
      sources: string[];
    };
  };

  pedagogicalApproach: {
    acquisitionOrder: string[];
    commonDifficulties: string[];
    teachingStrategies: string[];
  };

  assessmentFramework: {
    competencyLevels: {
      [levelName: string]: string;
    };
    evaluationCriteria: string[];
  };
}

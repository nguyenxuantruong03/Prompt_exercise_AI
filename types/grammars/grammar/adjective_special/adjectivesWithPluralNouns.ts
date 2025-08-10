interface crossLinguisticComparisonsDetail {
  description: string;
  patterns: string[];
  implications: string[];
  examples: string[];
}

interface agreementPatternsDetail {
  rules: string[];
  examples: string[];
  commonErrors: string[];
}

interface quantifierTypes {
  definition: string;
  examples: string[];
  properties: string[];
  syntacticBehavior: string[];
}

export interface GrammarReference {
  title: string;
  authors: string;
  publication: string;
  relevance: string;
  keyContributions: string[];
  specificSections: string;
  citationExample: string;
}

export interface LinguisticResearchEntry {
  title: string;
  authors: string;
  publication: string;
  relevance: string;
  keyContributions: string[];
  methodology: string;
  citationExample: string;
}

export interface PsycholinguisticStudyEntry {
  title: string;
  authors: string;
  publication: string;
  relevance: string;
  keyContributions: string[];
  methodology: string;
  citationExample: string;
}

export interface PedagogicalResourceEntry {
  title: string;
  authors: string;
  publication: string;
  relevance: string;
  keyContributions: string[];
  specificChapters?: string;
  practicalApplications?: string[];
  citationExample?: string;
}

export interface PDResourceOnline {
  title: string;
  url: string;
  description: string;
  resources?: string[];
  benefits?: string[];
}

export interface PDResourcePublication {
  title: string;
  authors: string;
  publication: string;
  relevance: string;
  keyContributions: string[];
  practicalImplications?: string[];
}

export interface DigitalResourceEntry {
  title: string;
  url: string;
  description: string;
  relevantSections?: string[];
  features?: string[];
  accessDate?: string;
  citationExample?: string;
  researchBasis?: string[];
  relevantSearches?: string[];
  applications?: string[];
}

export interface SupplementaryMaterial {
  title: string;
  publication: string;
  relevance: string;
  features: string[];
  digitalFeatures?: string[];
  pedagogicalValue?: string[];
}

export interface RegisterGenreCategory {
  description: string;
  characteristics: string[];
  examples: string[];
  avoidances?: string[]; // Optional (chỉ có trong academic)
  preferences?: string[]; // Optional (chỉ có trong professional)
  features?: string[]; // Optional (dùng trong conversational và literary)
}

export interface RegisterGenreConsiderations {
  concept: string;
  academicRegister: RegisterGenreCategory;
  professionalRegister: RegisterGenreCategory;
  conversationalRegister: RegisterGenreCategory;
  literaryRegister: RegisterGenreCategory;
}

export interface adjectivesWithPluralNounsType {
  id: number;
  // Core definition and concept
  adjectivesWithPluralNounsDefinition: {
    concept: string;
    importance: string;
    corePrinciple: string;
    scope: string;
  };

  // CEFR Level Structures (A1-C2)
  A1: {
    definition: string;
    basicQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    simpleDescriptive: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    fundamentalGrammar: {
      concept: string;
      rules: string[];
      examples: string[];
    };
  };

  A2: {
    definition: string;
    expandedQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    qualityCondition: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    basicComparisons: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    subjectVerbAgreement: {
      concept: string;
      rules: string[];
      examples: string[];
    };
  };

  B1: {
    definition: string;
    diversityVariety: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    temporalPositional: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    participialAdjectives: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    collectiveMeaning: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  B2: {
    definition: string;
    complexQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    emotionalPsychological: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    academicCollocations: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    registerConsiderations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C1: {
    definition: string;
    sophisticatedQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    academicDiscourse: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    formalStructures: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    idiomaticExpressions: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  C2: {
    definition: string;
    literaryQuantifiers: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    specializedAcademic: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    rhetoricalDevices: {
      concept: string;
      patterns: string[];
      examples: string[];
      commonAdjectives: string[];
    };
    stylisticVariations: {
      concept: string;
      patterns: string[];
      examples: string[];
    };
  };

  adjectives_With_Plural_Nouns_vocab: {
    general_descriptive: string[];
    quantity_based: string[];
    quality_or_condition: string[];
    identical_and_varied: string[];
    collective_meaning: string[];
    physical_attributes: string[];
    temporal_or_positional: string[];
    emotional_or_psychological: string[];
    participial_adjectives_plural: string[];
    CEFR_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
    usage_notes: {
      rule: string;
      examples: {
        good: string[];
        incorrect: string[];
      };
    };
  };

  coreAdjectives: string[];

  types: {
    quantity: string[];
    variety: string[];
    emphasis: string[];
    specific_groupings: string[];
  };

  structurePatterns: string[];
  pluralNounExamples: string[];
  correctExamples: string[];
  incorrectExamples: string[];
  correctedForms: string[];
  commonMistakes: string[];
  notes: string[];

  comparisonWithUncountableAdjectives: {
    pluralOnly: string[];
    uncountableOnly: string[];
  };

  specialUsage: {
    [key: string]: {
      usage: string;
      example: string;
    };
  };

  advancedC2Usage: Array<{
    pattern: string;
    example: string;
    note?: string;
  }>;

  learningTips: string[];

  CEFRMapping: {
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };

  references: string[];

  advancedAdjectivePhrases: Array<{
    phrase: string;
    level: string;
    usage: string;
    example: string;
  }>;

  commonAcademicCollocations: string[];

  idiomaticExpressions: Array<{
    idiom: string;
    meaning: string;
    example: string;
  }>;

  falseFriendsAndConfusions: Array<{
    confusion: string;
    correction: string;
    note: string;
  }>;

  pluralNounCategoriesMatched: {
    people: string[];
    things: string[];
    ideas: string[];
    academicTerms: string[];
  };

  advancedUsageNotes: string[];
  advancedExamples: string[];

  examUsageTips: {
    IELTS: string[];
    TOEFL: string[];
    Academic_IELTS_Sample: string;
  };

  referencesExtended: string[];

  crossLinguisticComparisons: {
    concept: string;
    romanceLanguages: crossLinguisticComparisonsDetail;
    germanicLanguages: crossLinguisticComparisonsDetail;
    slavicLanguages: crossLinguisticComparisonsDetail;
    asianLanguages: crossLinguisticComparisonsDetail;
    arabicHebrew: crossLinguisticComparisonsDetail;
  };

  registerGenreConsiderations: RegisterGenreConsiderations;

  morphosyntacticFeatures: {
    concept: string;
    quantifierTypes: {
      description: string;
      numericalQuantifiers: quantifierTypes;
      proportionalQuantifiers: quantifierTypes;
      universalQuantifiers: quantifierTypes;
    };
    agreementPatterns: {
      description: string;
      subjectVerbAgreement: agreementPatternsDetail;
      demonstrativeAgreement: agreementPatternsDetail;
    };
    syntacticDistribution: {
      description: string;
      prenominalPosition: {
        description: string;
        requirements: string[];
        examples: string[];
        orderingRules: string[];
      };
      predicativePosition: {
        description: string;
        constraints: string[];
        examples: string[];
      };
    };
  };

  pragmaticConsiderations: {
    concept: string;
    contextualFactors: {
      description: string;
      quantityExpectations: {
        description: string;
        principles: string[];
        examples: string[];
        implications: string[];
      };
      informationStructure: {
        description: string;
        focusPositions: string[];
        examples: string[];
        strategicConsiderations: string[];
      };
    };
    discourseFunctions: {
      description: string;
      cohesiveDevices: {
        description: string;
        mechanisms: string[];
        examples: string[];
        strategicUse: string[];
      };
      rhetoricalEffects: {
        description: string;
        strategies: string[];
        examples: string[];
        considerations: string[];
      };
    };
    interculturalConsiderations: {
      description: string;
      culturalVariations: {
        description: string;
        patterns: string[];
        examples: string[];
        implications: string[];
      };
    };
  };

  pedagogicalStrategies: {
    concept: string;
    presentationTechniques: {
      description: string;
      visualSupports: {
        description: string;
        techniques: string[];
        examples: string[];
        implementation: string[];
      };
      contextualIntroduction: {
        description: string;
        approaches: string[];
        examples: string[];
        benefits: string[];
      };
    };
    practiceActivities: {
      description: string;
      controlledPractice: {
        description: string;
        activities: string[];
        examples: string[];
        progression: string[];
      };
      guidedPractice: {
        description: string;
        activities: string[];
        examples: string[];
        supportStrategies: string[];
      };
      freeProduction: {
        description: string;
        activities: string[];
        examples: string[];
        assessmentFocus: string[];
      };
    };
    errorPrevention: {
      description: string;
      commonErrorPatterns: {
        description: string;
        errorTypes: string[];
        examples: string[];
        preventionStrategies: string[];
      };
      feedbackTechniques: {
        description: string;
        approaches: string[];
        implementation: string[];
        timing: string[];
      };
    };
    levelSpecificApproaches: {
      description: string;
      beginnerStrategies: {
        description: string;
        priorities: string[];
        techniques: string[];
        materials: string[];
      };
      intermediateStrategies: {
        description: string;
        priorities: string[];
        techniques: string[];
        materials: string[];
      };
      advancedStrategies: {
        description: string;
        priorities: string[];
        techniques: string[];
        materials: string[];
      };
    };
  };

  assessmentCriteria: {
    concept: string;
    accuracyMeasures: {
      description: string;
      formAccuracy: {
        description: string;
        criteria: string[];
        assessmentScales: string[];
        commonAssessmentTasks: string[];
      };
      morphosyntacticAccuracy: {
        description: string;
        evaluationPoints: string[];
        progressionMarkers: string[];
      };
    };
    appropriatenessEvaluation: {
      description: string;
      registerAwareness: {
        description: string;
        assessmentDimensions: string[];
        evaluationCriteria: string[];
        assessmentMethods: string[];
      };
      pragmaticCompetence: {
        description: string;
        competencyAreas: string[];
        assessmentTasks: string[];
      };
    };
    complexityMeasures: {
      description: string;
      syntacticComplexity: {
        description: string;
        complexityMarkers: string[];
        progressionIndicators: string[];
        evaluationMethods: string[];
      };
      lexicalSophistication: {
        description: string;
        sophisticationMarkers: string[];
        assessmentCriteria: string[];
      };
    };
    fluencyEvaluation: {
      description: string;
      productiveFluency: {
        description: string;
        measurementAspects: string[];
        assessmentTechniques: string[];
      };
      receptiveFluency: {
        description: string;
        measurementAreas: string[];
        assessmentMethods: string[];
      };
    };
    diagnosticAssessment: {
      description: string;
      errorAnalysis: {
        description: string;
        errorCategories: string[];
        diagnosticProcedures: string[];
        interventionPlanning: string[];
      };
      progressTracking: {
        description: string;
        trackingMethods: string[];
        progressIndicators: string[];
      };
    };
  };

  // References and Resources
  enhancedReferences?: {
    concept: string;
    primarySources: {
      description: string;
      grammaticalTheory: GrammarReference[];
      linguisticResearch: LinguisticResearchEntry[];
      psycholinguisticStudies: PsycholinguisticStudyEntry[];
    };
    pedagogicalResources: PedagogicalResourceEntry[];
    digitalResources: DigitalResourceEntry[];
    professionalDevelopment: (PDResourceOnline | PDResourcePublication)[];
    supplementaryMaterials: SupplementaryMaterial[];
  };
}

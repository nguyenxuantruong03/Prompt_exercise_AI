export interface binomialsType {
  topic: string;
  level: string;
  definition: string;
  importance: string;
  structurePatterns: string[];
  conjunctions: string[];
  types: {
    fixedPairs: {
      description: string;
      examples: string[];
    };
    reversiblePairs: {
      description: string;
      examples: string[];
    };
    rhymingBinomials: {
      description: string;
      examples: string[];
    };
    alliterativeBinomials: {
      description: string;
      examples: string[];
    };
    contrastiveBinomials: {
      description: string;
      examples: string[];
    };
    synonymousBinomials: {
      description: string;
      examples: string[];
    };
    idiomaticBinomials: {
      description: string;
      examples: string[];
    };
    reduplicative: {
      description: string;
      examples: string[];
    };
  };
  usageByLevel: {
    A1_A2: {
      focus: string;
      examples: string[];
      detailedDefinition: string;
      keyLearningPoints: string[];
      commonContexts: string[];
      practicalUsage: string[];
    };
    B1_B2: {
      focus: string;
      examples: string[];
      detailedDefinition: string;
      keyLearningPoints: string[];
      commonContexts: string[];
      practicalUsage: string[];
    };
    C1_C2: {
      focus: string;
      examples: string[];
      detailedDefinition: string;
      keyLearningPoints: string[];
      commonContexts: string[];
      practicalUsage: string[];
    };
  };
  functionsAndUses: string[];
  commonPatterns: Array<{
    pattern: string;
    example: string;
  }>;
  collocations: string[];
  formalBinomials: string[];
  informalBinomials: string[];
  phonologicalFeatures: {
    rhythm: string;
    stress: string;
    rhyme: string;
    alliteration: string;
  };
  teachingTips: string[];
  commonErrors: Array<{
    error: string;
    incorrect: string;
    correct: string;
  }>;
  learningStrategies: string[];
  extendedExamples: string[];
  variationsAcrossDialects: Array<{
    expression: string;
    US_alternative?: string;
    note?: string;
  }>;
  academicOrLegalUsage: string[];
  crossLanguageInfluence: string;
  culturalNotes: string;
  practiceQuestions: Array<{
    type: string;
    question: string;
    options?: string[];
    answer: string;
  }>;
  references: string[];
  levelProgression: {
    A1: {
      coreObjectives: string[];
      essentialBinomials: string[];
      learningFocus: string;
      expectedOutcomes: string[];
    };
    A2: {
      coreObjectives: string[];
      essentialBinomials: string[];
      learningFocus: string;
      expectedOutcomes: string[];
    };
    B1: {
      coreObjectives: string[];
      essentialBinomials: string[];
      learningFocus: string;
      expectedOutcomes: string[];
    };
    B2: {
      coreObjectives: string[];
      essentialBinomials: string[];
      learningFocus: string;
      expectedOutcomes: string[];
    };
    C1: {
      coreObjectives: string[];
      essentialBinomials: string[];
      learningFocus: string;
      expectedOutcomes: string[];
    };
    C2: {
      coreObjectives: string[];
      essentialBinomials: string[];
      learningFocus: string;
      expectedOutcomes: string[];
    };
  };
  comprehensiveExamples: {
    byContext: {
      dailyLife: string[];
      business: string[];
      academic: string[];
      legal: string[];
      informal: string[];
    };
    byFunction: {
      emphasis: string[];
      contrast: string[];
      sequence: string[];
      description: string[];
    };
  };
  etymologyAndHistory: {
    origins: string;
    development: string;
    modernUsage: string;
  };
  globalVariations: {
    britishEnglish: string[];
    americanEnglish: string[];
    australianEnglish: string[];
    otherVariants: string[];
  };
}

export interface ConjunctionLevel {
  definition: string;
  examples: string[];
  usage: string;
  keyPoints: string[];
  commonMistakes?: string[];
}

export interface ConjunctionCategory {
  definition: string;
  types: string[];
  examples: string[];
  usage: string[];
  structureRules: string[];
}

export interface ConjunctionDefinition {
  basicDefinition: string;
  grammaticalFunction: string;
  keyCharacteristics: string[];
  morphologicalFeatures: {
    simple: string;
    compound: string;
    correlative: string;
  };
  positionInSentence: {
    coordinating: string;
    subordinating: string;
    correlative: string;
    conjunctiveAdverbs: string;
  };
}

export interface ConjunctionType {
  description: string;
  examples?: string[];
  list?: string[];
  acronym?: string;
  sentences?: string[];
}

export interface ConjunctionUsage {
  type: string;
  example: string;
}

export interface AdvancedConjunctionPatterns {
  conjunctionFormation: {
    definition: string;
    simple: {
      definition: string;
      examples: string[];
    };
    compound: {
      definition: string;
      examples: string[];
    };
    correlative: {
      definition: string;
      examples: string[];
    };
  };
  conjunctionClauses: {
    definition: string;
    independentClauses: {
      definition: string;
      examples: string[];
    };
    dependentClauses: {
      definition: string;
      examples: string[];
    };
    complexSentences: {
      definition: string;
      examples: string[];
    };
  };
  conjunctionPunctuation: {
    definition: string;
    coordinatingConjunctions: {
      rule: string;
      examples: string[];
    };
    subordinatingConjunctions: {
      rule: string;
      examples: string[];
    };
    conjunctiveAdverbs: {
      rule: string;
      examples: string[];
    };
  };
  conjunctionReduction: {
    definition: string;
    timeClauses: {
      examples: string[];
    };
    reasonClauses: {
      examples: string[];
    };
    conditionClauses: {
      examples: string[];
    };
  };
}

export interface ConjunctionCollocations {
  commonPairs: string[];
  businessCollocations: string[];
  academicCollocations: string[];
  logicalCollocations: string[];
}

export interface ConjunctionGenreUsage {
  [genre: string]: {
    description: string;
    examples: string[];
    techniques?: string[];
    principles?: string[];
    characteristics?: string[];
    strategies?: string[];
  };
}

export interface ConjunctionFrequencyAndRegister {
  highFrequency: {
    definition: string;
    examples: string[];
    usage: string;
  };
  mediumFrequency: {
    definition: string;
    examples: string[];
    usage: string;
  };
  lowFrequency: {
    definition: string;
    examples: string[];
    usage: string;
  };
  registerSpecific: {
    formal: string[];
    informal: string[];
    technical: string[];
    literary: string[];
  };
}

export interface ConjunctionAssessment {
  criteria: string[];
  rubrics: {
    beginner: string;
    intermediate: string;
    advanced: string;
    mastery: string;
  };
  commonErrors: string[];
}

export interface ConjunctionMistakes {
  choiceErrors: string[];
  positionErrors: string[];
  punctuationErrors: string[];
}

export interface LeveledConjunctionData {
  [category: string]: ConjunctionLevel;
}

export interface References {
  books: string[];
  websites: string[];
  academicSources: string[];
}

export interface ConjunctionsType {
  id: number;
  conjunctionDefinition: ConjunctionDefinition;
  A1: LeveledConjunctionData;
  A2: LeveledConjunctionData;
  B1: LeveledConjunctionData;
  B2: LeveledConjunctionData;
  C1: LeveledConjunctionData;
  C2: LeveledConjunctionData;
  Conjunctions: {
    types: {
      [key: string]: ConjunctionType;
    };
    usage: ConjunctionUsage[];
    recognition: string[];
    examples: {
      [key: string]: string[];
    };
    notes: string[];
  };
  advancedConjunctionPatterns: AdvancedConjunctionPatterns;
  conjunctionCollocations: ConjunctionCollocations;
  conjunctionGenreUsage: ConjunctionGenreUsage;
  conjunctionFrequencyAndRegister: ConjunctionFrequencyAndRegister;
  conjunctionExercises: {
    [level: string]: string[];
  };
  conjunctionAssessment: ConjunctionAssessment;
  conjunctionLearningStrategies: string[];
  conjunctionInTests: string[];
  commonConjunctionMistakes: ConjunctionMistakes;
  references: References;
}

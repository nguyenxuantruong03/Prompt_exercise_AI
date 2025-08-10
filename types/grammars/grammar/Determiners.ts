// Comprehensive TypeScript type definitions for DeterminersData
interface ExpandedArticleRules {
  definition: string;
  advancedRules: {
    zeroArticle: {
      definition: string;
      contexts: string[];
      examples: string[];
    };
    definiteness: {
      specificReference: string;
      uniqueItems: string;
      secondMention: string;
    };
  };
  commonMistakes: string[];
}

export interface BasicQuantifiers {
  definition: string;
  countabilityDistinction: {
    countable: {
      examples: string[];
      usage: string;
      note: string;
    };
    uncountable: {
      examples: string[];
      usage: string;
      note: string;
    };
    both: {
      examples: string[];
      usage: string;
    };
  };
  detailedUsage: {
    [quantifier: string]: {
      usage: string;
      examples: string[];
      frequency: "Very high" | "High" | "Medium" | "Low";
    };
  };
  commonMistakes: string[];
}

// Base interfaces for common structures
export interface LearningObjectives {
  level: string;
  cefrDescription: string;
  learningObjectives: string[];
  expandedArticles?: ExpandedArticleRules;
  basicQuantifiers?: BasicQuantifiers;
}

export interface DetailedUsage {
  [key: string]: {
    meaning?: string;
    usage: string;
    examples: string[];
    frequency?: string;
    register?: string;
    position?: string;
    note?: string;
    form?: string;
    emphasis?: string;
  };
}

export interface CommonMistakes {
  commonMistakes?: string[];
}

export interface PracticePatterns {
  practicePatterns?: string[];
  exercises?: string[];
}

type DeterminerCategory =
  | string
  | string[]
  | {
      [key: string]: DeterminerCategory;
    };

type CEFRLevel = {
  level: string;
  cefrDescription: string;
  learningObjectives: string[];
} & {
  [key: string]: DeterminerCategory | string[] | string;
};

// Academic and reference interfaces
export interface AcademicReference {
  title: string;
  authors?: string;
  author?: string;
  year: string;
  publisher: string;
  description: string;
}

export interface OnlineResource {
  title: string;
  url: string;
  description: string;
}

export interface DeterminerDefinition {
  basicDefinition: string;
  grammaticalFunction: string;
  keyCharacteristics: string[];
  morphologicalFeatures: {
    simple: string;
    compound: string;
    phrasal: string;
  };
  positionInNounPhrase: {
    primary: string;
    secondary: string;
    postDeterminer: string;
  };
  academicReferences: AcademicReference[];
  onlineResources: OnlineResource[];
}

// Advanced pattern interfaces
export interface DeterminerFormation {
  definition: string;
  simple: {
    definition: string;
    examples: string[];
  };
  compound: {
    definition: string;
    examples: string[];
  };
  phrasal: {
    definition: string;
    examples: string[];
  };
}

export interface DeterminerOrder {
  definition: string;
  primaryDeterminers: {
    definition: string;
    examples: string[];
  };
  secondaryDeterminers: {
    definition: string;
    examples: string[];
  };
  orderRules: {
    rule: string;
    examples: string[];
  };
}

export interface DeterminerCombinations {
  definition: string;
  allowedCombinations: {
    examples: string[];
  };
  forbiddenCombinations: {
    examples: string[];
  };
  specialCases: {
    examples: string[];
  };
}

export interface DeterminerAgreement {
  definition: string;
  countableSingular: {
    examples: string[];
  };
  countablePlural: {
    examples: string[];
  };
  uncountable: {
    examples: string[];
  };
  agreementRules: {
    countable: string;
    uncountable: string;
  };
}

export interface AdvancedDeterminerPatterns {
  determinerFormation: DeterminerFormation;
  determinerOrder: DeterminerOrder;
  determinerCombinations: DeterminerCombinations;
  determinerAgreement: DeterminerAgreement;
}

// Genre and collocation interfaces
export interface GenreUsage {
  description: string;
  examples: string[];
  characteristics?: string[];
  principles?: string[];
  techniques?: string[];
  strategies?: string[];
}

export interface DeterminerGenreUsage {
  academic: GenreUsage;
  journalistic: GenreUsage;
  literary: GenreUsage;
  technical: GenreUsage;
}

export interface DeterminerCollocations {
  commonPairs: string[];
  academicCollocations: string[];
  businessCollocations: string[];
  formalCollocations: string[];
}

// Frequency and register interfaces
export interface FrequencyGroup {
  definition: string;
  examples: string[];
  usage: string;
}

export interface RegisterSpecific {
  formal: string[];
  informal: string[];
  technical: string[];
  literary: string[];
}

export interface DeterminerFrequencyAndRegister {
  highFrequency: FrequencyGroup;
  mediumFrequency: FrequencyGroup;
  lowFrequency: FrequencyGroup;
  registerSpecific: RegisterSpecific;
}

// Exercise and assessment interfaces
export interface DeterminerExercises {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
  interactive: string[];
}

export interface AssessmentRubrics {
  beginner: string;
  intermediate: string;
  advanced: string;
  mastery: string;
}

export interface DeterminerAssessment {
  criteria: string[];
  rubrics: AssessmentRubrics;
  commonErrors: string[];
}

// Mistake categories
export interface MistakeCategories {
  choiceErrors: string[];
  positionErrors: string[];
  agreementErrors: string[];
}

// Legacy determiner types (preserved from original)
export interface LegacyDeterminerTypes {
  articles: {
    description: string;
    examples: {
      definite: string[];
      indefinite: string[];
    };
    sentences: string[];
  };
  demonstratives: {
    description: string;
    examples: string[];
    sentences: string[];
  };
  possessives: {
    description: string;
    examples: string[];
    sentences: string[];
  };
  quantifiers: {
    description: string;
    examples: string[];
    sentences: string[];
  };
  distributives: {
    description: string;
    examples: string[];
    sentences: string[];
  };
  interrogative: {
    description: string;
    examples: string[];
    sentences: string[];
  };
  numerals: {
    description: string;
    examples: string[];
    sentences: string[];
  };
}

export interface LegacyUsage {
  type: string;
  example: string;
}

export interface LegacyExamples {
  [key: string]: string[];
}

export interface LegacyDeterminers {
  types: LegacyDeterminerTypes;
  usage: LegacyUsage[];
  recognition: string[];
  examples: LegacyExamples;
  notes: string[];
}

// Domain-specific determiners for C2 level
export interface DomainSpecificDeterminers {
  definition: string;
  legal: {
    examples: string[];
    usage: string;
  };
  medical: {
    examples: string[];
    usage: string;
  };
  scientific: {
    examples: string[];
    usage: string;
  };
  business: {
    examples: string[];
    usage: string;
  };
}

export interface StylisticDeterminers {
  definition: string;
  emphatic: {
    examples: string[];
    usage: string;
  };
  euphemistic: {
    examples: string[];
    usage: string;
  };
  dramatic: {
    examples: string[];
    usage: string;
  };
}

export interface ContextualMastery {
  definition: string;
  formalWriting: string;
  creativeWriting: string;
  casualSpeech: string;
  technicalWriting: string;
}

// Main DeterminersType interface
export interface DeterminersType {
  id: number;
  // Core definition and references
  determinerDefinition: DeterminerDefinition;

  // CEFR Levels A1-C2
  A1: CEFRLevel;
  A2: CEFRLevel;
  B1: CEFRLevel;
  B2: CEFRLevel;
  C1: CEFRLevel;
  C2: {
    level: string;
    cefrDescription: string;
    learningObjectives: string[];
    rareAndArchaicDeterminers: DeterminerCategory;
    domainSpecificDeterminers: DomainSpecificDeterminers;
    stylisticDeterminers: StylisticDeterminers;
    contextualMastery: ContextualMastery;
  };

  // Legacy preserved section
  Determiners: LegacyDeterminers;

  // Advanced patterns and constructions
  advancedDeterminerPatterns: AdvancedDeterminerPatterns;

  // Collocations and genre usage
  determinerCollocations: DeterminerCollocations;
  determinerGenreUsage: DeterminerGenreUsage;

  // Frequency and register analysis
  determinerFrequencyAndRegister: DeterminerFrequencyAndRegister;

  // Educational components
  determinerExercises: DeterminerExercises;
  determinerAssessment: DeterminerAssessment;

  // Learning resources
  determinerLearningStrategies: string[];
  determinerInTests: string[];
  commonDeterminerMistakes: MistakeCategories;
}

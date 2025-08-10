// TypeScript type definitions for AdverbData
export interface AdverbCategory {
  definition: string;
  examples?: string[];
  usage?: string;
  learningObjectives?: string[];
  legal?: string[];
  formal?: string[];
  formalWriting?: string;
  creativeWriting?: string;
  casualSpeech?: string;
  technicalWriting?: string;
  poetic?: string[];
  ironic?: string[];
  medical?: string[];
  scientific?: string[];
  artistic?: string[];
  commonMistakes?: string[];
  references?: string[];
  cefrLevel?: string;
  frequency?: "high" | "medium" | "low" | "variable";
  register?:
    | "formal"
    | "informal"
    | "neutral"
    | "academic"
    | "literary"
    | "technical"
    | "all";
}

export interface AdverbLevel {
  [key: string]: AdverbCategory;
}

export interface AdverbDefinition {
  basicDefinition: string;
  grammaticalFunction: string;
  keyCharacteristics: string[];
  morphologicalFeatures: {
    suffix: string;
    irregular: string;
    formation: string;
  };
  positionInSentence: {
    verbModification: string;
    adjectiveModification: string;
    adverbModification: string;
    sentenceModification: string;
  };
  linguisticReferences: string[];
  etymologyAndHistory: string;
}

export interface AdverbExercises {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
  interactive: string[];
}

export interface AdverbAssessment {
  criteria: string[];
  rubrics: {
    beginner: string;
    intermediate: string;
    advanced: string;
    mastery: string;
  };
  commonErrors: string[];
}

export interface AdverbFormationRule {
  rule: string;
  examples: string[];
  exceptions?: string[];
}

export interface IrregularAdverbGroup {
  definition: string;
  examples: string[];
}

export interface PhraseGroup {
  examples: string[];
  usage: string;
}

export interface ClauseGroup {
  examples: string[];
  usage: string;
}

export interface AdverbFormation {
  definition: string;
  fromAdjectives: AdverbFormationRule;
  fromNouns: AdverbFormationRule;
  irregular: IrregularAdverbGroup;
}

export interface AdverbPhrases {
  definition: string;
  prepositionalPhrases: PhraseGroup;
  infinitivePhrases: PhraseGroup;
  participlePhrases: PhraseGroup;
}

export interface AdverbClauses {
  definition: string;
  time: ClauseGroup;
  manner: ClauseGroup;
  reason: ClauseGroup;
  condition: ClauseGroup;
}

export interface AdvancedAdverbPatterns {
  adverbFormation: AdverbFormation;
  adverbPhrases: AdverbPhrases;
  adverbClauses: AdverbClauses;
}

export interface AdverbCollocations {
  commonPairs: string[];
  businessCollocations: string[];
  academicCollocations: string[];
  emotionalCollocations: string[];
}

export interface GenreUsageDetail {
  description: string;
  examples: string[];
  techniques?: string[]; // for fiction
  principles?: string[]; // for journalism
  characteristics?: string[]; // for academic
  strategies?: string[]; // for advertising
}

export interface FrequencyCategory {
  definition: string;
  examples: string[];
  usage: string;
}

export interface RegisterSpecificAdverbs {
  formal: string[];
  informal: string[];
  technical: string[];
  literary: string[];
}

export interface AdverbFrequencyAndRegister {
  highFrequency: FrequencyCategory;
  mediumFrequency: FrequencyCategory;
  lowFrequency: FrequencyCategory;
  registerSpecific: RegisterSpecificAdverbs;
}

export interface AdverbGenreUsage {
  fiction: GenreUsageDetail;
  journalism: GenreUsageDetail;
  academic: GenreUsageDetail;
  advertising: GenreUsageDetail;
}

export interface AdverbType {
  id: number;
  adverbDefinition: AdverbDefinition;
  A1: AdverbLevel;
  A2: AdverbLevel;
  B1: AdverbLevel;
  B2: AdverbLevel;
  C1: AdverbLevel;
  C2: AdverbLevel;
  Adverbs: {
    types: {
      [key: string]: {
        description: string;
        examples: string[];
      };
    };
    usage: Array<{
      type: string;
      example: string;
    }>;
    recognition: string[];
    examples: {
      [key: string]: string[];
    };
    notes: string[];
  };
  advancedAdverbPatterns: AdvancedAdverbPatterns;
  adverbCollocations: AdverbCollocations;
  adverbGenreUsage: AdverbGenreUsage;
  adverbFrequencyAndRegister: AdverbFrequencyAndRegister;
  adverbLearningStrategies: string[];
  adverbInTests: string[];
  adverbExercises: AdverbExercises;
  adverbAssessment: AdverbAssessment;
}

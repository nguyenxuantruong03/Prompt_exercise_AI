export interface SuperlativeReference {
  title: string;
  url?: string;
  book?: string;
  author?: string;
  description?: string;
}

export interface SuperlativeLevelDetail {
  definition: string;
  keyPoints: string[];
  examples: string[];
  usage: string;
  notes?: string;
}

export interface SuperlativeItem {
  definition: string;
  examples?: string[];
  usage?: string;
  legal?: string[];
  medical?: string[];
  scientific?: string[];
  business?: string[];
  formal?: string[];
  poetic?: string[];
  academic?: string[];
  formalWriting?: string;
  creativeWriting?: string;
  casualSpeech?: string;
  technicalWriting?: string;
}

export interface A1Superlatives {
  basicShortAdjectiveSuperlatives: SuperlativeItem;
  basicLongAdjectiveSuperlatives: SuperlativeItem;
  basicIrregularSuperlatives: SuperlativeItem;
  basicTheUsage: SuperlativeItem;
}

export interface A2Superlatives {
  expandedShortAdjectiveSuperlatives: SuperlativeItem;
  expandedLongAdjectiveSuperlatives: SuperlativeItem;
  superlativeAdverbs: SuperlativeItem;
  superlativeNouns: SuperlativeItem;
}

export interface B1Superlatives {
  sophisticatedAdjectiveSuperlatives: SuperlativeItem;
  superlativePhrases: SuperlativeItem;
  superlativeClauses: SuperlativeItem;
  superlativeIntensifiers: SuperlativeItem;
}

export interface B2Superlatives {
  complexSuperlativeStructures: SuperlativeItem;
  superlativeIdioms: SuperlativeItem;
  superlativePrepositions: SuperlativeItem;
  superlativeConjunctions: SuperlativeItem;
}

export interface C1Superlatives {
  sophisticatedSuperlativeStructures: SuperlativeItem;
  academicSuperlatives: SuperlativeItem;
  literarySuperlatives: SuperlativeItem;
  technicalSuperlatives: SuperlativeItem;
}

export interface C2Superlatives {
  rareAndObscure: SuperlativeItem;
  domainSpecific: SuperlativeItem;
  stylisticSuperlatives: SuperlativeItem;
  contextualMastery: SuperlativeItem;
}

export interface SuperlativeStructure {
  structure: string[];
  examples: string[];
  recognition: string;
}

export interface SuperlativeRegularFormation {
  definition: string;
  shortAdjectives: string;
  longAdjectives: string;
  spellingRules: string;
}

export interface SuperlativeIrregularFormation {
  definition: string;
  examples: string[];
}

export interface SuperlativeCompoundFormation {
  definition: string;
  examples: string[];
}

export interface SuperlativeFormation {
  definition: string;
  regular: SuperlativeRegularFormation;
  irregular: SuperlativeIrregularFormation;
  compound: SuperlativeCompoundFormation;
}

export interface SuperlativeStructurePattern {
  pattern: string;
  examples: string[];
}

export interface SuperlativeStructures {
  definition: string;
  basicStructure: SuperlativeStructurePattern;
  complexStructure: SuperlativeStructurePattern;
  phraseStructure: SuperlativeStructurePattern;
}

export interface SuperlativeModifierCategory {
  examples: string[];
  usage: string;
}

export interface SuperlativeModifiers {
  definition: string;
  intensifiers: SuperlativeModifierCategory;
  qualifiers: SuperlativeModifierCategory;
  approximators: SuperlativeModifierCategory;
}

export interface SuperlativeClauseType {
  examples: string[];
  usage: string;
}

export interface SuperlativeClauses {
  definition: string;
  thatClauses: SuperlativeClauseType;
  relativeClauses: SuperlativeClauseType;
  infinitiveClauses: SuperlativeClauseType;
}

export interface AdvancedSuperlativePatterns {
  superlativeFormation: SuperlativeFormation;
  superlativeStructures: SuperlativeStructures;
  superlativeModifiers: SuperlativeModifiers;
  superlativeClauses: SuperlativeClauses;
}

export interface SuperlativeCollocations {
  commonPairs: string[];
  academicCollocations: string[];
  businessCollocations: string[];
  literaryCollocations: string[];
}

export interface SuperlativeGenreItem {
  description: string;
  examples: string[];
  characteristics?: string[];
  principles?: string[];
  techniques?: string[];
  strategies?: string[];
}

export interface SuperlativeGenreUsage {
  academic: SuperlativeGenreItem;
  journalistic: SuperlativeGenreItem;
  literary: SuperlativeGenreItem;
  technical: SuperlativeGenreItem;
}

export interface SuperlativeFrequencyLevel {
  definition: string;
  examples: string[];
  usage: string;
}

export interface SuperlativeRegisterSpecific {
  formal: string[];
  informal: string[];
  technical: string[];
  literary: string[];
}

export interface SuperlativeFrequencyAndRegister {
  highFrequency: SuperlativeFrequencyLevel;
  mediumFrequency: SuperlativeFrequencyLevel;
  lowFrequency: SuperlativeFrequencyLevel;
  registerSpecific: SuperlativeRegisterSpecific;
}

export interface SuperlativeExercises {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
  interactive: string[];
}

export interface SuperlativeRubrics {
  beginner: string;
  intermediate: string;
  advanced: string;
  mastery: string;
}

export interface SuperlativeAssessment {
  criteria: string[];
  rubrics: SuperlativeRubrics;
  commonErrors: string[];
}

export type SuperlativeLearningStrategies = string[];
export type SuperlativeInTests = string[];

export interface CommonSuperlativeMistakes {
  formErrors: string[];
  structureErrors: string[];
  usageErrors: string[];
}

export interface SuperlativeLevelDetail {
  definition: string;
  keyPoints: string[];
  examples: string[];
  usage: string;
  notes?: string;
}

export interface SuperlativeFullLevelDetails {
  A1: SuperlativeLevelDetail;
  A2: SuperlativeLevelDetail;
  B1: SuperlativeLevelDetail;
  B2: SuperlativeLevelDetail;
  C1: SuperlativeLevelDetail;
  C2: SuperlativeLevelDetail;
}


export interface SuperlativeType {
  superlativeDefinition: {
    basicDefinition: string;
    grammaticalFunction: string;
    keyCharacteristics: string[];
    morphologicalFeatures: {
      regular: string;
      irregular: string;
      compound: string;
    };
    positionInSentence: {
      attributive: string;
      predicative: string;
      adverbial: string;
    };
  };
  A1: A1Superlatives;
  A2: A2Superlatives;
  B1: B1Superlatives;
  B2: B2Superlatives;
  C1: C1Superlatives;
  C2: C2Superlatives;
  Superlative: SuperlativeStructure;
  advancedSuperlativePatterns: AdvancedSuperlativePatterns;
  superlativeCollocations: SuperlativeCollocations;
  superlativeGenreUsage: SuperlativeGenreUsage;
  superlativeFrequencyAndRegister: SuperlativeFrequencyAndRegister;
  superlativeExercises: SuperlativeExercises
  superlativeAssessment: SuperlativeAssessment
  superlativeLearningStrategies: SuperlativeLearningStrategies
  superlativeInTests: SuperlativeInTests
  commonSuperlativeMistakes: CommonSuperlativeMistakes
  fullLevelDetails: SuperlativeFullLevelDetails
  references: SuperlativeReference[];
}

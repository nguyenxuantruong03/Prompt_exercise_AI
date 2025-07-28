interface Reference {
  title: string;
  url: string;
  description?: string;
}

interface LearningObjectives {
  cognitiveGoals: string[];
  functionalGoals: string[];
  linguisticCompetencies: string[];
}

interface VocabularyCategory {
  [key: string]: string[] | { [subkey: string]: string[] };
}

interface AdjectiveSection {
  definition: string;
  examples?: string[];
  usage?: string;
  [key: string]: any; // Allow for additional properties specific to each section
}

interface AssessmentCriteria {
  accuracy: string;
  appropriateness: string;
  range: string;
  fluency: string;
}

interface BasicAdjectiveLevel {
  definition: string;
  detailedLearningObjectives: LearningObjectives;
  whatToLearn: string[];
  coreVocabulary?: VocabularyCategory;
  basicDescriptive: AdjectiveSection & {
    commonPatterns: string[];
    practiceActivities: string[];
  };
  colors: AdjectiveSection & {
    colorCombinations: string[];
    culturalNotes: string;
    practiceContexts: string[];
  };
  numbers: AdjectiveSection & {
    cardinalNumbers: string[];
    ordinalNumbers: string[];
    patterns: string[];
    functionalUses: string[];
  };
  demonstrative: AdjectiveSection & {
    distanceRules: {
      near: string;
      far: string;
    };
    commonMistakes: string[];
  };
  possessive: AdjectiveSection & {
    agreementRules: string[];
    commonContexts: string[];
  };
  basicComparatives: AdjectiveSection & {
    formationRules: string[];
    comparisonStructures: string[];
  };
  references: Reference[];
  assessmentCriteria: AssessmentCriteria;
}

interface ElementaryAdjectiveLevel {
  definition: string;
  detailedLearningObjectives: LearningObjectives;
  whatToLearn: string[];
  expandedDescriptive: AdjectiveSection & {
    emotionAdjectives: {
      positive: string[];
      negative: string[];
      neutral: string[];
    };
    intensityLevels: {
      mild: string[];
      moderate: string[];
      strong: string[];
    };
  };
  sizeAndShape: AdjectiveSection & {
    sizeComparisons: string[];
    shapeCategories: {
      geometric: string[];
      irregular: string[];
      threedimensional: string[];
    };
  };
  weather: AdjectiveSection & {
    weatherPatterns: string[];
    seasonalAdjectives: {
      spring: string[];
      summer: string[];
      autumn: string[];
      winter: string[];
    };
  };
  indefinite: AdjectiveSection & {
    quantityRules: {
      countable: string[];
      uncountable: string[];
      both: string[];
    };
    distributive: string[];
  };
  superlatives: AdjectiveSection & {
    formationRules: string[];
    irregularForms: string[];
  };
  compoundAdjectives: AdjectiveSection & {
    formationPatterns: string[];
  };
  references: Reference[];
}

interface IntermediateAdjectiveLevel {
  definition: string;
  detailedLearningObjectives: LearningObjectives;
  whatToLearn: string[];
  advancedDescriptive: AdjectiveSection & {
    nuance: {
      similarAdjectives: string[];
      registerDifferences: {
        formal: string[];
        informal: string[];
      };
    };
  };
  emotions: AdjectiveSection & {
    intensity: {
      mild: string[];
      moderate: string[];
      strong: string[];
    };
  };
  personality: AdjectiveSection & {
    categorization: {
      positive: string[];
      negative: string[];
      neutral: string[];
    };
  };
  material: AdjectiveSection & {
    textureContrast: {
      roughSmooth: string[];
      hardSoft: string[];
      flexibleRigid: string[];
    };
  };
  origin: AdjectiveSection & {
    culturalNuances: {
      regionalVariations: string[];
      falseFriends: string[];
    };
  };
  intensifiers: AdjectiveSection & {
    placementRules: string[];
  };
  adjectiveOrder: AdjectiveSection & {
    order: string[];
    commonErrors: string[];
  };
}

interface AdvancedAdjectiveLevel {
  sophisticatedDescriptive: AdjectiveSection;
  academic: AdjectiveSection;
  business: AdjectiveSection;
  abstract: AdjectiveSection;
  gradableVsNonGradable: {
    definition: string;
    gradable: {
      examples: string[];
      modifiers: string[];
    };
    nonGradable: {
      examples: string[];
      modifiers: string[];
    };
  };
  adjectiveClauses: {
    definition: string;
    relativePronouns: {
      [key: string]: string;
    };
    examples: string[];
    restrictiveVsNonRestrictive: {
      restrictive: string;
      nonRestrictive: string;
    };
  };
  adjectivePhrases: {
    definition: string;
    types: {
      [key: string]: string;
    };
    examples: string[];
  };
}

interface MasteryAdjectiveLevel {
  literary: AdjectiveSection;
  technical: AdjectiveSection;
  nuanced: AdjectiveSection;
  collocations: {
    definition: string;
    business: string[];
    academic: string[];
    creative: string[];
  };
  adjectiveReduction: {
    definition: string;
    rules: string[];
    examples: string[];
  };
  complexOrder: {
    definition: string;
    completeOrder: string[];
    examples: string[];
  };
}

interface ProficiencyAdjectiveLevel {
  rareAndObscure: AdjectiveSection;
  domainSpecific: {
    definition: string;
    legal: string[];
    medical: string[];
    scientific: string[];
    artistic: string[];
  };
  stylistic: {
    definition: string;
    formal: string[];
    poetic: string[];
    academic: string[];
  };
  contextualMastery: {
    definition: string;
    formalWriting: string;
    creativeWriting: string;
    academicWriting: string;
    casualSpeech: string;
  };
  advancedPatterns: {
    definition: string;
    accumulation: string;
    juxtaposition: string;
    gradation: string;
    alliteration: string;
  };
  crossLinguistic: {
    definition: string;
    comparativeAnalysis: string;
    translationChallenges: string;
    culturalNuances: string;
  };
}

export interface AdjectiveType {
  adjectiveDefinition: {
    basicDefinition: string;
    detailedDefinition: string;
    linguisticProperties: {
      morphological: string;
      syntactic: string;
      semantic: string;
    };
    grammaticalFunction: string;
    keyCharacteristics: string[];
    positionInSentence: {
      attributive: string;
      predicative: string;
      postpositive: string;
    };
    morphologicalFeatures: {
      inflection: string;
      comparison: string;
      derivation: string;
    };
    semanticCategories: string[];
    syntacticBehavior: {
      gradability: string;
      comparison: string;
      complementation: string;
    };
    examples: {
      basic: string;
      comparative: string;
      superlative: string;
      withIntensifiers: string;
    };
  };
  A1: BasicAdjectiveLevel;
  A2: ElementaryAdjectiveLevel;
  B1: IntermediateAdjectiveLevel;
  B2: AdvancedAdjectiveLevel;
  C1: MasteryAdjectiveLevel;
  C2: ProficiencyAdjectiveLevel;
  historicalDevelopment: {
    oldEnglish: string;
    middleEnglish: string;
    modernEnglish: string;
  };
  adjectiveTests: string[];
  commonMistakes: {
    orderErrors: string[];
    comparisonErrors: string[];
    usageErrors: string[];
  };
  learningStrategies: string[];
  adjectiveInTests: string[];
  advancedPatterns: {
    participialAdjectives: {
      definition: string;
      presentParticiple: {
        examples: string[];
        usage: string;
      };
      pastParticiple: {
        examples: string[];
        usage: string;
      };
    };
    compoundAdjectives: {
      definition: string;
      hyphenated: string[];
      open: string[];
      closed: string[];
    };
    derivedAdjectives: {
      definition: string;
      suffixes: {
        [key: string]: string[];
      };
    };
  };
  collocations: {
    commonPairs: string[];
    businessCollocations: string[];
    academicCollocations: string[];
    emotionalCollocations: string[];
  };
  genreUsage: {
    fiction: {
      description: string;
      examples: string[];
      techniques: string[];
    };
    journalism: {
      description: string;
      examples: string[];
      principles: string[];
    };
    academic: {
      description: string;
      examples: string[];
      characteristics: string[];
    };
    advertising: {
      description: string;
      examples: string[];
      strategies: string[];
    };
  };
  frequencyAndRegister: {
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
  };
  exercises: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
    interactive: string[];
  };
  assessment: {
    criteria: string[];
    rubrics: {
      beginner: string;
      intermediate: string;
      advanced: string;
      mastery: string;
    };
    commonErrors: string[];
  };
}

export interface specialPositionAdjectivesType {
  topic: string;
  levels: string[];
  definition: string;
  detailedDefinition: {
    overview: string;
    academicDefinition: string;
    linguisticPerspective: string;
    functionalDescription: string;
  };
  references: {
    books: string[];
    websites: string[];
    academicSources: string[];
  };
  levelProgression: {
    A1: LevelDetails;
    A2: LevelDetails;
    B1: LevelDetails;
    B2: LevelDetails;
    C1: LevelDetails;
    C2: LevelDetails;
  };
  special_Position_Adjectives_vocab: {
    postpositive_only: string[];
    with_indefinite_pronouns: string[];
    legal_or_fixed_expressions: string[];
    royal_titles_and_ranks: string[];
    participle_used_postpositively: string[];
    adjective_phrases_after_noun: string[];
    adjective_followed_by_infinitive_or_clause: string[];
    CEFR_levels: {
      A1_A2: string[];
      B1_B2: string[];
      C1_C2: string[];
    };
    grammatical_notes: {
      always_postpositive: string[];
      optional_postpositive: string[];
      set_phrases: string[];
      meaning_change_adjectives: string[];
      rule: string;
    };
  };
  mainCategories: MainCategory[];
  specialCases: SpecialCase[];
  commonMistakes: CommonMistake[];
  learningTips: string[];
  advancedUsage: AdvancedUsage[];
  tags: string[];
  additionalCategories: AdditionalCategory[];
  advancedStructures: AdvancedStructure[];
  idiomaticAndSetPhrases: IdiomaticPhrase[];
  exceptionsAndIrregularities: Exception[];
  culturalAndStylisticNotes: CulturalNote[];
  comprehensiveExamples: {
    byLevel: {
      [key: string]: ExampleSet;
    };
    byCategory: {
      [key: string]: ExampleSet;
    };
  };
  pedagogicalApproach: {
    teachingStrategies: string[];
    commonDifficulties: string[];
    practiceActivities: string[];
  };
  crossLinguisticComparison: {
    similarities: string[];
    differences: string[];
    transferIssues: string[];
  };
}

interface LevelDetails {
  focus: string[];
  keyAdjectives: string[];
  essentialStructures: string[];
  typicalErrors: string[];
  learningObjectives: string[];
  practicalApplications: string[];
}

interface MainCategory {
  category: string;
  level: string;
  explanation: string;
  examples: string[];
  usageContexts?: string[];
  commonLinkingVerbs?: string[];
  adjectives?: string[];
  commonAdjectives?: string[];
  incorrectUsage?: string[];
  notes: string;
}

interface SpecialCase {
  rule: string;
  description?: string;
  examples: any[];
  notes?: string;
  level?: string;
  explanation?: string;
}

interface CommonMistake {
  error: string;
  wrong: string;
  correct: string;
  explanation?: string;
}

interface AdvancedUsage {
  note: string;
  explanation?: string;
  examples?: string[];
}

interface AdditionalCategory {
  category: string;
  level: string;
  explanation: string;
  examples: string[];
  notes: string;
}

interface AdvancedStructure {
  structure: string;
  explanation: string;
  examples: string[];
  level: string;
}

interface IdiomaticPhrase {
  phrase: string;
  plural?: string;
  explanation: string;
  level: string;
}

interface Exception {
  description: string;
  examples: any[];
  notes?: string;
  level?: string;
}

interface CulturalNote {
  note: string;
  example?: string;
  comparison?: {
    UK: string;
    US: string;
  };
  level?: string;
}

interface ExampleSet {
  basic: string[];
  intermediate: string[];
  advanced: string[];
  contextual: string[];
}

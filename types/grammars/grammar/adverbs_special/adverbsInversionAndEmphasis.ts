export interface AdverbExample {
  adverb: string;
  usage: string;
  example: string;
  note: string;
  pronunciation?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface AdverbPhrase {
  phrase?: string;
  adverbPhrase?: string;
  usage: string;
  example: string;
  note: string;
  pronunciation?: string;
  relatedStructures?: string[];
}

export interface CommonStructure {
  structure: string;
  usage: string;
  example: string;
  note: string;
  formality?: "formal" | "informal" | "neutral";
  frequency?: "common" | "uncommon" | "rare";
}

export interface ExpandedContent {
  additionalAdverbs?: AdverbExample[];
  additionalAdverbsAndPhrases?: AdverbPhrase[];
  additionalStructures?: CommonStructure[];
  additionalPhrases?: AdverbPhrase[];
  advancedStructures?: CommonStructure[];
  advancedAdverbs?: AdverbExample[];
  notes?: string;
  culturalContext?: string;
  practicalTips?: string[];
}

export interface LevelContent {
  description: string;
  examples: AdverbExample[];
  commonStructures?: string[];
  commonPatterns?: string[];
  additionalNotes?: string;
  notes?: string;
  additionalInfo?: string;
  keyFeatures?: string[];
  learningFocus?: string[];
  expanded: ExpandedContent;
}

export interface VocabularyTypes {
  negative_adverb_inversion: string[];
  restrictive_condition_inversion: string[];
  place_adverb_inversion: string[];
  time_adverb_inversion: string[];
  emphasis_adverbs: string[];
  conditional_inversion?: string[];
  frequency_adverbs?: string[];
  degree_adverbs?: string[];
}

export interface CEFRExamples {
  A1?: string[];
  A2: string[];
  B1: string[];
  B2: string[];
  C1: string[];
  C2: string[];
}

export interface CommonMistake {
  mistake: string;
  correction: string;
  explanation: string;
  level?: string;
  frequency?: "very common" | "common" | "occasional";
}

export interface StylisticNotes {
  formal_use: string;
  informal_use: string;
  spoken_use: string;
  written_use?: string;
  literary_use?: string;
  academic_use?: string;
}

export interface DifferenceExample {
  sentence: string;
  note: string;
  context?: string;
  register?: string;
}

export interface VocabularySection {
  definition: string;
  types: VocabularyTypes;
  CEFR_levels: CEFRExamples;
  common_structures: {
    negative_adverb_inversion: string[];
    only_inversion: string[];
    place_inversion: string[];
    so_such_inversion: string[];
    neither_nor_inversion: string[];
    conditional_inversion?: string[];
    emphatic_structures?: string[];
  };
  examples: {
    negative_adverb: string[];
    only_condition: string[];
    place_adverb: string[];
    so_such_emphasis: string[];
    neither_nor: string[];
    conditional?: string[];
    emphatic?: string[];
  };
  common_mistakes: CommonMistake[];
  difference_from_other_structures: {
    fronting_without_inversion: DifferenceExample[];
    normal_vs_inverted?: DifferenceExample[];
  };
  stylistic_notes: StylisticNotes;
  learning_tips: string[];
  etymology?: string[];
  historical_development?: string;
}

export interface Reference {
  title: string;
  author?: string;
  publisher?: string;
  year?: number;
  url?: string;
  type:
    | "book"
    | "website"
    | "academic_paper"
    | "grammar_guide"
    | "online_resource";
  description: string;
  relevantPages?: string;
  isbn?: string;
}

export interface adverbsInversionAndEmphasisType {
  id: number;
  title: string;
  description: string;
  definition: {
    overview: string;
    purpose: string[];
    mainTypes: string[];
    linguisticBackground: string;
    crossLinguisticComparison?: string;
  };
  references: Reference[];
  levels: {
    A1: LevelContent;
    A2: LevelContent;
    B1: LevelContent;
    B2: LevelContent;
    C1: LevelContent;
    C2: LevelContent;
  };
  adverbsInversionAndEmphasis_vocab: VocabularySection;
  commonNotes: string[];
  examplesSummary: string[];
  pedagogicalNotes?: {
    teachingSequence: string[];
    commonDifficulties: string[];
    assessmentCriteria: string[];
  };
  crossReference?: {
    relatedGrammarPoints: string[];
    prerequisiteKnowledge: string[];
    followUpTopics: string[];
  };
}

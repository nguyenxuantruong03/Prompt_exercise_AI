export interface adverbsEndingLyVsIdenticalAdjectivesType {
  topic: string;
  level: string;
  description: string;

  // Core grammar categories
  categories: {
    type1_sameForm: CategoryType;
    type2_trueAdverbsEndingLy: CategoryType;
    type3_exceptionAdverbs: CategoryType;
    type4_wordsEndingLyButNotAdverbs: CategoryType;
    type5_wordsWithDifferentForms: CategoryType;
    type6_specialLyAdverbsWithDifferentMeaning: CategoryType;
    type7_fossilizedPhrases: CategoryType;
    type8_ambiguousUsage: CategoryType;
    type9_adverbsEndingInLyFunctioningAsAdjective: CategoryType;
    commonMistakes: CommonMistakesType;
    advancedUsage: AdvancedUsageType;
    learningTips: LearningTipsType;
  };

  // CEFR Level breakdown
  cefrLevels: {
    A1: CEFRLevelDetail;
    A2: CEFRLevelDetail;
    B1: CEFRLevelDetail;
    B2: CEFRLevelDetail;
    C1: CEFRLevelDetail;
    C2: CEFRLevelDetail;
  };

  // Vocabulary section
  adverbs_EndingLy_Vs_Identical_Adjectives_vocab: VocabularySection;

  // Additional sections
  relatedTopics: string[];
  references: ReferenceType[];
  notes: NotesType;

  // New comprehensive sections
  comprehensiveDefinitions: ComprehensiveDefinitionsType;
  detailedExplanations: DetailedExplanationsType;
  practicalApplications: PracticalApplicationsType;
  commonPitfalls: CommonPitfallsType;
  crossLinguisticComparisons: CrossLinguisticComparisonsType;
}

interface CategoryType {
  title: string;
  description: string;
  examples: ExampleType[];
}

interface ExampleType {
  word?: string;
  phrase?: string;
  adjective?: string;
  adverb?: string;
  adjectiveUse?: string;
  adverbUse?: string;
  usage?: string;
  function?: string;
  meaning?: string;
  example?: string;
  note?: string;
  equivalent?: string;
}

interface CommonMistakesType {
  title: string;
  list: string[];
}

interface AdvancedUsageType {
  title: string;
  points: string[];
}

interface LearningTipsType {
  title: string;
  tips: string[];
}

interface CEFRLevelDetail {
  level: string;
  description: string;
  keyWords: string[];
  grammarPoints: string[];
  commonUsages: string[];
  examples: {
    word: string;
    adjective: string;
    adverb: string;
    difficulty: string;
  }[];
  learningObjectives: string[];
}

interface VocabularySection {
  definition: string;
  categories: {
    adverbs_with_ly: string[];
    identical_adjective_adverb: string[];
    adverbs_not_formed_with_ly: string[];
    adjectives_that_look_like_adverbs: string[];
  };
  comparison_table: ComparisonTableEntry[];
  CEFR_levels: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };
  common_errors: ErrorExample[];
  adverb_vs_adjective_reminders: ReminderNotes;
  exceptions_and_traps: ExceptionsType;
  learning_tips: string[];
}

interface ComparisonTableEntry {
  word: string;
  adjective: string;
  adverb: string;
}

interface ErrorExample {
  mistake: string;
  correction: string;
  explanation: string;
}

interface ReminderNotes {
  note_1: string;
  note_2: string;
  note_3: string;
  note_4: string;
}

interface ExceptionsType {
  hard_vs_hardly: {
    hard: string;
    hardly: string;
  };
  late_vs_lately: {
    late: string;
    lately: string;
  };
  good_vs_well: {
    good: string;
    well: string;
  };
}

interface ReferenceType {
  title: string;
  author?: string;
  url?: string;
  publisher?: string;
  year?: string;
  isbn?: string;
  description: string;
}

interface NotesType {
  title: string;
  points: string[];
}

interface ComprehensiveDefinitionsType {
  mainDefinition: string;
  linguisticPerspective: string;
  syntacticAnalysis: string;
  semanticConsiderations: string;
  morphologicalAspects: string;
}

interface DetailedExplanationsType {
  historicalDevelopment: string;
  cognitiveLinguistics: string;
  psycholinguisticFactors: string;
  sociolinguisticVariation: string;
}

interface PracticalApplicationsType {
  academicWriting: string[];
  businessCommunication: string[];
  casualConversation: string[];
  literaryUsage: string[];
}

interface CommonPitfallsType {
  nativeSpeakerErrors: string[];
  l2LearnerChallenges: string[];
  dialectalVariations: string[];
  registerMismatches: string[];
}

interface CrossLinguisticComparisonsType {
  germanicLanguages: string;
  romanceLanguages: string;
  asianLanguages: string;
  universalTendencies: string;
}

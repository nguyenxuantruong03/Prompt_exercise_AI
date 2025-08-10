import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";

// Define types for grammar topics
interface GrammarTopic {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  englishDescription: string;
  tenses: string[];
}

// Define grammar topics with their respective tenses/topics (119 tenses total)
export const grammarTopics: GrammarTopic[] = [
  {
    id: 1,
    icon: "📚",
    title: "12 Thì Cơ Bản",
    subtitle: "12 Basic Tenses",
    description: "Tất cả 12 thì cơ bản trong tiếng Anh",
    englishDescription: "All 12 basic tenses in English",
    tenses: [
      "Simple_Present",
      "Present_Continuous",
      "Simple_Past",
      "Past_Continuous",
      "Present_Perfect",
      "Present_Perfect_Continuous",
      "Past_Perfect",
      "Past_Perfect_Continuous",
      "Simple_Future",
      "Future_Continuous",
      "Future_Perfect",
      "Future_Perfect_Continuous",
    ],
  },
  {
    id: 2,
    icon: "🎯",
    title: "Danh Từ & Đại Từ",
    subtitle: "Nouns & Pronouns (22 chủ đề)",
    description: "Các loại danh từ, đại từ và các quy tắc đặc biệt",
    englishDescription: "Types of nouns, pronouns and special rules",
    tenses: [
      "Nouns",
      "Pronouns",
      "Articles",
      "Determiners",
      "Quantifiers",
      "Possessives",
      "abstractNouns",
      "CollectiveNouns",
      "CountableVsUncountableNouns",
      "DualUsageNouns",
      "irregularPlurals",
      "PluralOnlyNouns",
      "pluraliaTantum",
      "singularOnlyNouns",
      "singulariaTantum",
      "uncountableNouns",
      "ReflexivePronouns",
      "possessiveAndEmphaticAdjectives",
      "quantitativeAdjectives",
      "Interjections",
      "SubjectVerbAgreement",
      "WordOrder",
    ],
  },
  {
    id: 3,
    icon: "⚡",
    title: "Tính Từ & Trạng Từ",
    subtitle: "Adjectives & Adverbs (21 chủ đề)",
    description: "So sánh, vị trí, trạng từ và các dạng đặc biệt",
    englishDescription: "Comparison, position, adverbs and special forms",
    tenses: [
      "Adjective",
      "AdjectiveOrder",
      "Adverb",
      "Comparative",
      "Comparisons",
      "EqualityComparison",
      "DoubleComparative",
      "RepeatedComparative",
      "Superlative",
      "adjectivesNoComparison",
      "adjectivesUsedAsNouns",
      "adjectivesWithPluralNouns",
      "compoundAdjectives",
      "emotionAdjectives",
      "postpositiveAdjectives",
      "specialPositionAdjectives",
      "adverbFrontingInversion",
      "adverbPositionMeaningChange",
      "adverbsEndingLyVsIdenticalAdjectives",
      "adverbsInversionAndEmphasis",
      "adverbsNotEndingLy",
      "adverbsOfCertainty",
      "adverbsOfFrequency",
      "degreeAdverbs",
      "emphasizingAdverbs",
      "linkingAdverbs",
    ],
  },
  {
    id: 4,
    icon: "🔥",
    title: "Động Từ & Cấu Trúc",
    subtitle: "Verbs & Structures (19 chủ đề)",
    description: "Động từ, thể bị động, modal verbs và cấu trúc đặc biệt",
    englishDescription:
      "Verbs, passive voice, modal verbs and special structures",
    tenses: [
      "Verbs",
      "ModalVerbs",
      "PassiveVoice",
      "CausativeForm",
      "CausativeVerbs",
      "infinitivePatterns",
      "IrregularVerbs",
      "LinkingVerbs",
      "PerceptionVerbs",
      "phrasalVerbs",
      "ReflexiveVerbs",
      "ReportingVerbs",
      "StatisticVerbs",
      "transitiveIntransitiveVerbs",
      "VerbsOfPerception",
      "GerundsAndInfinitives",
      "Infinitives",
      "PhrasalVerbs",
      "Imperatives",
    ],
  },
  {
    id: 5,
    icon: "💬",
    title: "Giao Tiếp & Báo Cáo",
    subtitle: "Communication & Reporting (21 chủ đề)",
    description: "Lời nói gián tiếp, câu hỏi và giao tiếp",
    englishDescription: "Reported speech, questions and communication",
    tenses: [
      "Reported_Speech",
      "DirectAndIndirectSpeech",
      "ReportedQuestions",
      "TenseShiftInReportedSpeech",
      "QuestionForms",
      "TagQuestions",
      "Conditionals",
      "advancedConditionals",
      "Relative_Clauses",
      "reducedRelativeClauses",
      "SentenceTypes",
      "DiscourseMarkers",
      "expressingAgreementDisagreementSuggestionsRequestsResponses",
      "politeVsDirectLanguage",
      "transitionPhrasesAcademicWriting",
      "Conjunctions",
      "Preposition",
      "TimeExpressions",
      "TenseConsistency",
      "FutureInThePast",
      "Negation",
    ],
  },
  {
    id: 6,
    icon: "🚀",
    title: "Ngữ Pháp Nâng Cao",
    subtitle: "Advanced Grammar (19 chủ đề)",
    description: "Cấu trúc phức tạp, đảo ngữ và ngữ pháp chuyên sâu",
    englishDescription: "Complex structures, inversion and advanced grammar",
    tenses: [
      "Inversion",
      "SubjunctiveMood",
      "FocusStructures",
      "Emphasis",
      "cleftSentences",
      "emphaticCleftSentences",
      "EllipsisAndSubstitution",
      "adverbialClauseAdvanced",
      "binomials",
      "collocations",
      "fixedExpressions",
      "nounClauseGrammar",
      "parallelStructuresData",
      "purposeResultConditionClauses",
      "verbToVOrVingAdvanced",
      "Hedging",
      "IdiomaticLanguage",
      "Nominalisation",
      "WordFormationSentences",
    ],
  },
];

// Function to get tense display name
export const getTenseDisplayName = (tenseKey: string): string => {
  const displayNames: { [key: string]: string } = {
    Simple_Present: "Simple Present",
    Present_Continuous: "Present Continuous",
    Simple_Past: "Simple Past",
    Past_Continuous: "Past Continuous",
    Present_Perfect: "Present Perfect",
    Present_Perfect_Continuous: "Present Perfect Continuous",
    Past_Perfect: "Past Perfect",
    Past_Perfect_Continuous: "Past Perfect Continuous",
    Simple_Future: "Simple Future",
    Future_Continuous: "Future Continuous",
    Future_Perfect: "Future Perfect",
    Future_Perfect_Continuous: "Future Perfect Continuous",
    Conditionals: "Conditionals",
    Reported_Speech: "Reported Speech",
    Relative_Clauses: "Relative Clauses",
    Nouns: "Nouns",
    Pronouns: "Pronouns",
    Verbs: "Verbs",
    Adjective: "Adjectives",
    AdjectiveOrder: "Adjective Order",
    Adverb: "Adverbs",
    Articles: "Articles",
    CausativeForm: "Causative Form",
    Comparative: "Comparative",
    Comparisons: "Comparisons",
    Conjunctions: "Conjunctions",
    Determiners: "Determiners",
    DirectAndIndirectSpeech: "Direct and Indirect Speech",
    DiscourseMarkers: "Discourse Markers",
    DoubleComparative: "Double Comparative",
    EllipsisAndSubstitution: "Ellipsis and Substitution",
    Emphasis: "Emphasis",
    EqualityComparison: "Equality Comparison",
    FocusStructures: "Focus Structures",
    FutureInThePast: "Future in the Past",
    GerundsAndInfinitives: "Gerunds and Infinitives",
    Hedging: "Hedging",
    IdiomaticLanguage: "Idiomatic Language",
    Imperatives: "Imperatives",
    Infinitives: "Infinitives",
    Interjections: "Interjections",
    Inversion: "Inversion",
    ModalVerbs: "Modal Verbs",
    Negation: "Negation",
    Nominalisation: "Nominalisation",
    PassiveVoice: "Passive Voice",
    PhrasalVerbs: "Phrasal Verbs",
    Possessives: "Possessives",
    Preposition: "Prepositions",
    Quantifiers: "Quantifiers",
    QuestionForms: "Question Forms",
    ReflexivePronouns: "Reflexive Pronouns",
    RepeatedComparative: "Repeated Comparative",
    ReportedQuestions: "Reported Questions",
    SentenceTypes: "Sentence Types",
    SubjectVerbAgreement: "Subject-Verb Agreement",
    SubjunctiveMood: "Subjunctive Mood",
    Superlative: "Superlative",
    TagQuestions: "Tag Questions",
    TenseConsistency: "Tense Consistency",
    TenseShiftInReportedSpeech: "Tense Shift in Reported Speech",
    TimeExpressions: "Time Expressions",
    WordFormationSentences: "Word Formation Sentences",
    WordOrder: "Word Order",
    adjectivesNoComparison: "Adjectives No Comparison",
    adjectivesUsedAsNouns: "Adjectives Used as Nouns",
    adjectivesWithPluralNouns: "Adjectives with Plural Nouns",
    compoundAdjectives: "Compound Adjectives",
    emotionAdjectives: "Emotion Adjectives",
    possessiveAndEmphaticAdjectives: "Possessive and Emphatic Adjectives",
    postpositiveAdjectives: "Postpositive Adjectives",
    quantitativeAdjectives: "Quantitative Adjectives",
    specialPositionAdjectives: "Special Position Adjectives",
    adverbFrontingInversion: "Adverb Fronting Inversion",
    adverbPositionMeaningChange: "Adverb Position Meaning Change",
    adverbsEndingLyVsIdenticalAdjectives:
      "Adverbs Ending Ly vs Identical Adjectives",
    adverbsInversionAndEmphasis: "Adverbs Inversion and Emphasis",
    adverbsNotEndingLy: "Adverbs Not Ending Ly",
    adverbsOfCertainty: "Adverbs of Certainty",
    adverbsOfFrequency: "Adverbs of Frequency",
    degreeAdverbs: "Degree Adverbs",
    emphasizingAdverbs: "Emphasizing Adverbs",
    linkingAdverbs: "Linking Adverbs",
    expressingAgreementDisagreementSuggestionsRequestsResponses:
      "Expressing Agreement/Disagreement",
    politeVsDirectLanguage: "Polite vs Direct Language",
    transitionPhrasesAcademicWriting: "Transition Phrases Academic Writing",
    advancedConditionals: "Advanced Conditionals",
    adverbialClauseAdvanced: "Adverbial Clause Advanced",
    binomials: "Binomials",
    cleftSentences: "Cleft Sentences",
    collocations: "Collocations",
    emphaticCleftSentences: "Emphatic Cleft Sentences",
    fixedExpressions: "Fixed Expressions",
    nounClauseGrammar: "Noun Clause Grammar",
    parallelStructuresData: "Parallel Structures",
    purposeResultConditionClauses: "Purpose Result Condition Clauses",
    reducedRelativeClauses: "Reduced Relative Clauses",
    verbToVOrVingAdvanced: "Verb To V or Ving Advanced",
  };

  return displayNames[tenseKey] || tenseKey.replace(/_/g, " ");
};

// Function to get brief description for a tense
export const getTenseDescription = (tenseKey: string): string => {
  const tenseData = tenseDatabase[tenseKey as keyof typeof tenseDatabase];
  if (!tenseData) return "";

  // Try to get a brief description from theory.usageOverview
  const theory = (tenseData as unknown as Record<string, unknown>).theory as
    | Record<string, unknown>
    | undefined;
  if (theory?.usageOverview && Array.isArray(theory.usageOverview)) {
    return (theory.usageOverview[0] as string) || "";
  }

  // Try to get from other properties
  if (theory?.description && typeof theory.description === "string") {
    return theory.description;
  }

  const description = (tenseData as unknown as Record<string, unknown>)
    .description;
  if (typeof description === "string") {
    return description;
  }

  return "";
};

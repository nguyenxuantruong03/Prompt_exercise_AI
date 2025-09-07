import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";

/**
 * Comprehensive mapping between URL patterns and database keys
 * Covers all 119 grammar topics with multiple URL pattern variations
 */
export const grammarKeyMapping: Record<string, string> = {
  // Tense mappings (Snake_Case format)
  "simple-present": "Simple_Present",
  simplepresent: "Simple_Present",
  Simple_Present: "Simple_Present",

  "present-continuous": "Present_Continuous",
  presentcontinuous: "Present_Continuous",
  Present_Continuous: "Present_Continuous",

  "present-perfect": "Present_Perfect",
  presentperfect: "Present_Perfect",
  Present_Perfect: "Present_Perfect",

  "present-perfect-continuous": "Present_Perfect_Continuous",
  presentperfectcontinuous: "Present_Perfect_Continuous",
  Present_Perfect_Continuous: "Present_Perfect_Continuous",

  "simple-past": "Simple_Past",
  simplepast: "Simple_Past",
  Simple_Past: "Simple_Past",

  "past-continuous": "Past_Continuous",
  pastcontinuous: "Past_Continuous",
  Past_Continuous: "Past_Continuous",

  "past-perfect": "Past_Perfect",
  pastperfect: "Past_Perfect",
  Past_Perfect: "Past_Perfect",

  "past-perfect-continuous": "Past_Perfect_Continuous",
  pastperfectcontinuous: "Past_Perfect_Continuous",
  Past_Perfect_Continuous: "Past_Perfect_Continuous",

  "simple-future": "Simple_Future",
  simplefuture: "Simple_Future",
  Simple_Future: "Simple_Future",

  "future-continuous": "Future_Continuous",
  futurecontinuous: "Future_Continuous",
  Future_Continuous: "Future_Continuous",

  "future-perfect": "Future_Perfect",
  futureperfect: "Future_Perfect",
  Future_Perfect: "Future_Perfect",

  "future-perfect-continuous": "Future_Perfect_Continuous",
  futureperfectcontinuous: "Future_Perfect_Continuous",
  Future_Perfect_Continuous: "Future_Perfect_Continuous",

  // Nouns (PascalCase, camelCase, Snake_Case)
  nouns: "Nouns",
  Nouns: "Nouns",

  "abstract-nouns": "abstractNouns",
  abstractnouns: "abstractNouns",
  abstractNouns: "abstractNouns",

  "collective-nouns": "CollectiveNouns",
  collectivenouns: "CollectiveNouns",
  CollectiveNouns: "CollectiveNouns",

  "countable-vs-uncountable-nouns": "CountableVsUncountableNouns",
  countablevsuncountablenouns: "CountableVsUncountableNouns",
  CountableVsUncountableNouns: "CountableVsUncountableNouns",

  "dual-usage-nouns": "DualUsageNouns",
  dualusagenouns: "DualUsageNouns",
  DualUsageNouns: "DualUsageNouns",

  "irregular-plurals": "irregularPlurals",
  irregularplurals: "irregularPlurals",
  irregularPlurals: "irregularPlurals",

  "plural-only-nouns": "PluralOnlyNouns",
  pluralonlynouns: "PluralOnlyNouns",
  PluralOnlyNouns: "PluralOnlyNouns",

  "pluralia-tantum": "pluraliaTantum",
  pluraliatantum: "pluraliaTantum",
  pluraliaTantum: "pluraliaTantum",

  "singular-only-nouns": "singularOnlyNouns",
  singularonlynouns: "singularOnlyNouns",
  singularOnlyNouns: "singularOnlyNouns",

  "singularia-tantum": "singulariaTantum",
  singulariatantum: "singulariaTantum",
  singulariaTantum: "singulariaTantum",

  "uncountable-nouns": "uncountableNouns",
  uncountablenouns: "uncountableNouns",
  uncountableNouns: "uncountableNouns",

  // Verbs
  verbs: "Verbs",
  Verbs: "Verbs",

  "causative-verbs": "CausativeVerbs",
  causativeverbs: "CausativeVerbs",
  CausativeVerbs: "CausativeVerbs",

  "infinitive-patterns": "infinitivePatterns",
  infinitivepatterns: "infinitivePatterns",
  infinitivePatterns: "infinitivePatterns",

  "irregular-verbs": "IrregularVerbs",
  irregularverbs: "IrregularVerbs",
  IrregularVerbs: "IrregularVerbs",

  "linking-verbs": "LinkingVerbs",
  linkingverbs: "LinkingVerbs",
  LinkingVerbs: "LinkingVerbs",

  "modal-verbs": "ModalVerbs",
  modalverbs: "ModalVerbs",
  ModalVerbs: "ModalVerbs",

  "perception-verbs": "PerceptionVerbs",
  perceptionverbs: "PerceptionVerbs",
  PerceptionVerbs: "PerceptionVerbs",

  "phrasal-verbs": "PhrasalVerbs",
  phrasalverbs: "PhrasalVerbs",
  PhrasalVerbs: "PhrasalVerbs",
  "phrasalverbs-extended": "phrasalVerbs",
  phrasalVerbs: "phrasalVerbs",

  "reflexive-verbs": "ReflexiveVerbs",
  reflexiveverbs: "ReflexiveVerbs",
  ReflexiveVerbs: "ReflexiveVerbs",

  "reporting-verbs": "ReportingVerbs",
  reportingverbs: "ReportingVerbs",
  ReportingVerbs: "ReportingVerbs",

  "statistic-verbs": "StatisticVerbs",
  statisticverbs: "StatisticVerbs",
  StatisticVerbs: "StatisticVerbs",

  "transitive-intransitive-verbs": "transitiveIntransitiveVerbs",
  transitiveintransitiveverbs: "transitiveIntransitiveVerbs",
  transitiveIntransitiveVerbs: "transitiveIntransitiveVerbs",

  "verbs-of-perception": "VerbsOfPerception",
  verbsofperception: "VerbsOfPerception",
  VerbsOfPerception: "VerbsOfPerception",

  // Adjectives
  adjective: "Adjective",
  Adjective: "Adjective",

  "adjective-order": "AdjectiveOrder",
  adjectiveorder: "AdjectiveOrder",
  AdjectiveOrder: "AdjectiveOrder",

  "adjectives-no-comparison": "adjectivesNoComparison",
  adjectivesnocomparison: "adjectivesNoComparison",
  adjectivesNoComparison: "adjectivesNoComparison",

  "adjectives-used-as-nouns": "adjectivesUsedAsNouns",
  adjectivesusedAsnouns: "adjectivesUsedAsNouns",
  adjectivesUsedAsNouns: "adjectivesUsedAsNouns",

  "adjectives-with-plural-nouns": "adjectivesWithPluralNouns",
  adjectiveswithpluralnouns: "adjectivesWithPluralNouns",
  adjectivesWithPluralNouns: "adjectivesWithPluralNouns",

  "compound-adjectives": "compoundAdjectives",
  compoundadjectives: "compoundAdjectives",
  compoundAdjectives: "compoundAdjectives",

  "emotion-adjectives": "emotionAdjectives",
  emotionadjectives: "emotionAdjectives",
  emotionAdjectives: "emotionAdjectives",

  "possessive-and-emphatic-adjectives": "possessiveAndEmphaticAdjectives",
  possessiveandemphatikadjectives: "possessiveAndEmphaticAdjectives",
  possessiveAndEmphaticAdjectives: "possessiveAndEmphaticAdjectives",

  "postpositive-adjectives": "postpositiveAdjectives",
  postpositiveadjectives: "postpositiveAdjectives",
  postpositiveAdjectives: "postpositiveAdjectives",

  "quantitative-adjectives": "quantitativeAdjectives",
  quantitativeadjectives: "quantitativeAdjectives",
  quantitativeAdjectives: "quantitativeAdjectives",

  "special-position-adjectives": "specialPositionAdjectives",
  specialpositionadjectives: "specialPositionAdjectives",
  specialPositionAdjectives: "specialPositionAdjectives",

  // Adverbs
  adverb: "Adverb",
  Adverb: "Adverb",

  "adverb-fronting-inversion": "adverbFrontingInversion",
  adverbfrontinginversion: "adverbFrontingInversion",
  adverbFrontingInversion: "adverbFrontingInversion",

  "adverb-position-meaning-change": "adverbPositionMeaningChange",
  adverbpositionmeaningchange: "adverbPositionMeaningChange",
  adverbPositionMeaningChange: "adverbPositionMeaningChange",

  "adverbs-ending-ly-vs-identical-adjectives":
    "adverbsEndingLyVsIdenticalAdjectives",
  adverbsendinglyvsidentkaladjectives: "adverbsEndingLyVsIdenticalAdjectives",
  adverbsEndingLyVsIdenticalAdjectives: "adverbsEndingLyVsIdenticalAdjectives",

  "adverbs-inversion-and-emphasis": "adverbsInversionAndEmphasis",
  adverbsinversionandemphasis: "adverbsInversionAndEmphasis",
  adverbsInversionAndEmphasis: "adverbsInversionAndEmphasis",

  "adverbs-not-ending-ly": "adverbsNotEndingLy",
  adverbsnotendingiy: "adverbsNotEndingLy",
  adverbsNotEndingLy: "adverbsNotEndingLy",

  "adverbs-of-certainty": "adverbsOfCertainty",
  adverbsofcertainty: "adverbsOfCertainty",
  adverbsOfCertainty: "adverbsOfCertainty",

  "adverbs-of-frequency": "adverbsOfFrequency",
  adverbsoffrequency: "adverbsOfFrequency",
  adverbsOfFrequency: "adverbsOfFrequency",

  "degree-adverbs": "degreeAdverbs",
  degreeadverbs: "degreeAdverbs",
  degreeAdverbs: "degreeAdverbs",

  "emphasizing-adverbs": "emphasizingAdverbs",
  emphasizingadverbs: "emphasizingAdverbs",
  emphasizingAdverbs: "emphasizingAdverbs",

  "linking-adverbs": "linkingAdverbs",
  linkingadverbs: "linkingAdverbs",
  linkingAdverbs: "linkingAdverbs",

  // Comparisons
  comparative: "Comparative",
  Comparative: "Comparative",

  superlative: "Superlative",
  Superlative: "Superlative",

  comparisons: "Comparisons",
  Comparisons: "Comparisons",

  "double-comparative": "DoubleComparative",
  doublecomparative: "DoubleComparative",
  DoubleComparative: "DoubleComparative",

  "equality-comparison": "EqualityComparison",
  equalitycomparison: "EqualityComparison",
  EqualityComparison: "EqualityComparison",

  "repeated-comparative": "RepeatedComparative",
  repeatedcomparative: "RepeatedComparative",
  RepeatedComparative: "RepeatedComparative",

  // Conditionals
  conditionals: "Conditionals",
  conditional: "Conditionals", // Fix for missing 's'
  Conditionals: "Conditionals",

  "advanced-conditionals": "advancedConditionals",
  advancedconditionals: "advancedConditionals",
  advancedConditionals: "advancedConditionals",

  "purpose-result-condition-clauses": "purposeResultConditionClauses",
  purposeresultconditionclauses: "purposeResultConditionClauses",
  purposeResultConditionClauses: "purposeResultConditionClauses",

  // Speech & Reporting (Snake_Case format)
  "reported-speech": "Reported_Speech",
  reportedspeech: "Reported_Speech",
  Reported_Speech: "Reported_Speech",

  "direct-and-indirect-speech": "DirectAndIndirectSpeech",
  directandindirectspeech: "DirectAndIndirectSpeech",
  DirectAndIndirectSpeech: "DirectAndIndirectSpeech",

  "reported-questions": "ReportedQuestions",
  reportedquestions: "ReportedQuestions",
  ReportedQuestions: "ReportedQuestions",

  "tense-shift-in-reported-speech": "TenseShiftInReportedSpeech",
  tenseshiftinreportedspeech: "TenseShiftInReportedSpeech",
  TenseShiftInReportedSpeech: "TenseShiftInReportedSpeech",

  // Clauses & Sentences (Snake_Case format)
  "relative-clauses": "Relative_Clauses",
  relativeclauses: "Relative_Clauses",
  Relative_Clauses: "Relative_Clauses",

  "reduced-relative-clauses": "reducedRelativeClauses",
  reducedrelativeclauses: "reducedRelativeClauses",
  reducedRelativeClauses: "reducedRelativeClauses",

  "noun-clause-grammar": "nounClauseGrammar",
  nounclausegrammar: "nounClauseGrammar",
  nounClauseGrammar: "nounClauseGrammar",

  "adverbial-clause-advanced": "adverbialClauseAdvanced",
  adverbialclauseadvanced: "adverbialClauseAdvanced",
  adverbialClauseAdvanced: "adverbialClauseAdvanced",

  "cleft-sentences": "cleftSentences",
  cleftsentences: "cleftSentences",
  cleftSentences: "cleftSentences",

  "emphatic-cleft-sentences": "emphaticCleftSentences",
  emphaticcleftsentences: "emphaticCleftSentences",
  emphaticCleftSentences: "emphaticCleftSentences",

  "sentence-types": "SentenceTypes",
  sentencetypes: "SentenceTypes",
  SentenceTypes: "SentenceTypes",

  "parallel-structures": "parallelStructuresData",
  parallelstructures: "parallelStructuresData",
  parallelStructuresData: "parallelStructuresData",

  // Pronouns
  pronouns: "Pronouns",
  Pronouns: "Pronouns",

  "reflexive-pronouns": "ReflexivePronouns",
  reflexivepronouns: "ReflexivePronouns",
  ReflexivePronouns: "ReflexivePronouns",

  // Determiners & Articles
  articles: "Articles",
  Articles: "Articles",

  determiners: "Determiners",
  Determiners: "Determiners",

  quantifiers: "Quantifiers",
  Quantifiers: "Quantifiers",

  possessives: "Possessives",
  Possessives: "Possessives",

  // Prepositions
  preposition: "Preposition",
  prepositions: "Preposition",
  Preposition: "Preposition",

  // Conjunctions
  conjunctions: "Conjunctions",
  Conjunctions: "Conjunctions",

  // Questions
  "question-forms": "QuestionForms",
  questionforms: "QuestionForms",
  QuestionForms: "QuestionForms",

  "tag-questions": "TagQuestions",
  tagquestions: "TagQuestions",
  TagQuestions: "TagQuestions",

  // Special Forms
  "passive-voice": "PassiveVoice",
  passivevoice: "PassiveVoice",
  PassiveVoice: "PassiveVoice",

  "causative-form": "CausativeForm",
  causativeform: "CausativeForm",
  CausativeForm: "CausativeForm",

  "gerunds-and-infinitives": "GerundsAndInfinitives",
  gerundsandinfinitives: "GerundsAndInfinitives",
  GerundsAndInfinitives: "GerundsAndInfinitives",

  infinitives: "Infinitives",
  Infinitives: "Infinitives",

  "verb-to-v-or-ving-advanced": "verbToVOrVingAdvanced",
  verbtovOrVingAdvanced: "verbToVOrVingAdvanced",
  verbToVOrVingAdvanced: "verbToVOrVingAdvanced",

  imperatives: "Imperatives",
  Imperatives: "Imperatives",

  "subjunctive-mood": "SubjunctiveMood",
  subjunctivemood: "SubjunctiveMood",
  SubjunctiveMood: "SubjunctiveMood",

  negation: "Negation",
  Negation: "Negation",

  inversion: "Inversion",
  Inversion: "Inversion",

  // Advanced Structures
  emphasis: "Emphasis",
  Emphasis: "Emphasis",

  "focus-structures": "FocusStructures",
  focusstructures: "FocusStructures",
  FocusStructures: "FocusStructures",

  "ellipsis-and-substitution": "EllipsisAndSubstitution",
  ellipsisandsubstitution: "EllipsisAndSubstitution",
  EllipsisAndSubstitution: "EllipsisAndSubstitution",

  nominalisation: "Nominalisation",
  Nominalisation: "Nominalisation",

  "subject-verb-agreement": "SubjectVerbAgreement",
  "subjectverbage agreement": "SubjectVerbAgreement",
  SubjectVerbAgreement: "SubjectVerbAgreement",

  "word-order": "WordOrder",
  wordorder: "WordOrder",
  WordOrder: "WordOrder",

  "word-formation-sentences": "WordFormationSentences",
  wordformationsentences: "WordFormationSentences",
  WordFormationSentences: "WordFormationSentences",

  "time-expressions": "TimeExpressions",
  timeexpressions: "TimeExpressions",
  TimeExpressions: "TimeExpressions",

  // Discourse & Communication
  "discourse-markers": "DiscourseMarkers",
  discoursemarkers: "DiscourseMarkers",
  DiscourseMarkers: "DiscourseMarkers",

  hedging: "Hedging",
  Hedging: "Hedging",

  "expressing-agreement-disagreement-suggestions-requests-responses":
    "expressingAgreementDisagreementSuggestionsRequestsResponses",
  expressingagreementdisagreementsuggestionsrequestsresponses:
    "expressingAgreementDisagreementSuggestionsRequestsResponses",
  expressingAgreementDisagreementSuggestionsRequestsResponses:
    "expressingAgreementDisagreementSuggestionsRequestsResponses",

  "polite-vs-direct-language": "politeVsDirectLanguage",
  politevsdirectlanguage: "politeVsDirectLanguage",
  politeVsDirectLanguage: "politeVsDirectLanguage",

  "transition-phrases-academic-writing": "transitionPhrasesAcademicWriting",
  transitionphrasesacademicwriting: "transitionPhrasesAcademicWriting",
  transitionPhrasesAcademicWriting: "transitionPhrasesAcademicWriting",

  interjections: "Interjections",
  Interjections: "Interjections",

  // Idiomatic Language
  "idiomatic-language": "IdiomaticLanguage",
  idiomaticlanguage: "IdiomaticLanguage",
  IdiomaticLanguage: "IdiomaticLanguage",

  "fixed-expressions": "fixedExpressions",
  fixedexpressions: "fixedExpressions",
  fixedExpressions: "fixedExpressions",

  collocations: "collocations",

  binomials: "binomials",

  // Additional missing ones
  "future-in-the-past": "FutureInThePast",
  futureinthepast: "FutureInThePast",
  FutureInThePast: "FutureInThePast",

  "tense-consistency": "TenseConsistency",
  tenseconsistency: "TenseConsistency",
  TenseConsistency: "TenseConsistency",
};

/**
 * Get the actual database key for a grammar category key
 */
export function getDatabaseKey(categoryKey: string): string | null {
  // First try direct mapping
  if (grammarKeyMapping[categoryKey]) {
    return grammarKeyMapping[categoryKey];
  }

  // Check if key exists directly in database
  if (tenseDatabase[categoryKey as keyof typeof tenseDatabase]) {
    return categoryKey;
  }

  // Try different formats
  const availableKeys = Object.keys(tenseDatabase).filter(
    (key) => key !== "createdAt" && key !== "updatedAt"
  );

  // Try case variations
  const variations = [
    categoryKey.toLowerCase(),
    categoryKey.charAt(0).toLowerCase() + categoryKey.slice(1),
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1),
    // Convert kebab-case to camelCase
    categoryKey.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()),
    // Convert kebab-case to PascalCase
    categoryKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(""),
    // Convert kebab-case to Snake_Case
    categoryKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("_"),
  ];

  for (const variation of variations) {
    if (availableKeys.includes(variation)) {
      return variation;
    }
  }

  // If still not found, log for debugging
  console.warn(
    `Grammar key not found: ${categoryKey}. Available keys:`,
    availableKeys.slice(0, 10)
  );

  return null;
}

/**
 * Get all database keys that are actually available
 */
export function getAllAvailableDatabaseKeys(): string[] {
  return Object.keys(tenseDatabase).filter(
    (key) => key !== "createdAt" && key !== "updatedAt"
  );
}

/**
 * Check if a topic exists in database by any naming convention
 */
export function topicExistsInDatabase(categoryKey: string): boolean {
  return getDatabaseKey(categoryKey) !== null;
}

/**
 * Get the category key from database key (reverse mapping)
 */
export function getCategoryKeyFromDatabaseKey(
  databaseKey: string
): string | null {
  // Check direct mappings (reverse lookup)
  for (const [categoryKey, dbKey] of Object.entries(grammarKeyMapping)) {
    if (dbKey === databaseKey) {
      return categoryKey;
    }
  }

  // If not found in mapping, it might be a direct match
  return databaseKey;
}

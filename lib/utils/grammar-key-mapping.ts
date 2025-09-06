import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";

/**
 * Mapping between grammar category keys and actual database keys
 * This handles the inconsistency between camelCase and Snake_Case naming
 */
export const grammarKeyMapping: Record<string, string> = {
  // Direct matches that exist in database
  Simple_Present: "Simple_Present",
  Present_Continuous: "Present_Continuous",
  Present_Perfect: "Present_Perfect",
  Present_Perfect_Continuous: "Present_Perfect_Continuous",
  Simple_Past: "Simple_Past",
  Past_Continuous: "Past_Continuous",
  Past_Perfect: "Past_Perfect",
  Past_Perfect_Continuous: "Past_Perfect_Continuous",
  Simple_Future: "Simple_Future",
  Future_Continuous: "Future_Continuous",
  Future_Perfect: "Future_Perfect",
  Future_Perfect_Continuous: "Future_Perfect_Continuous",

  // URL to Database key mappings (kebab-case to camelCase/database keys)
  abstractnouns: "abstractNouns",
  collectivenouns: "CollectiveNouns",
  "countablevs​uncountablenouns": "CountableVsUncountableNouns",
  dualusagenouns: "DualUsageNouns",
  irregularplurals: "irregularPlurals",
  pluralonlynouns: "PluralOnlyNouns",
  pluraliatantum: "pluraliaTantum",
  singularonlynouns: "singularOnlyNouns",
  singulariatantum: "singulariaTantum",
  uncountablenouns: "uncountableNouns",

  // Tense mappings from URL format to database keys
  presentperfect: "Present_Perfect",
  "present-perfect": "Present_Perfect",
  pasttense: "Simple_Past",
  "past-tense": "Simple_Past",
  simplepast: "Simple_Past",
  "simple-past": "Simple_Past",
  futuretense: "Simple_Future",
  "future-tense": "Simple_Future",
  simplefuture: "Simple_Future",
  "simple-future": "Simple_Future",
  presenttense: "Simple_Present",
  "present-tense": "Simple_Present",
  simplepresent: "Simple_Present",
  "simple-present": "Simple_Present",
  presentcontinuous: "Present_Continuous",
  "present-continuous": "Present_Continuous",
  pastcontinuous: "Past_Continuous",
  "past-continuous": "Past_Continuous",
  futurecontinuous: "Future_Continuous",
  "future-continuous": "Future_Continuous",
  presentperfectcontinuous: "Present_Perfect_Continuous",
  "present-perfect-continuous": "Present_Perfect_Continuous",
  pastperfect: "Past_Perfect",
  "past-perfect": "Past_Perfect",
  pastperfectcontinuous: "Past_Perfect_Continuous",
  "past-perfect-continuous": "Past_Perfect_Continuous",
  futureperfect: "Future_Perfect",
  "future-perfect": "Future_Perfect",
  futureperfectcontinuous: "FuturePerfectContinuous",
  "future-perfect-continuous": "FuturePerfectContinuous",

  // Causative Form mappings
  causativeform: "CausativeForm",
  "causative-form": "CausativeForm",
  causative: "CausativeForm",

  // Noun mappings
  Nouns: "Nouns",
  abstractNouns: "abstractNouns",
  CollectiveNouns: "CollectiveNouns",
  CountableVsUncountableNouns: "CountableVsUncountableNouns",
  DualUsageNouns: "DualUsageNouns",
  irregularPlurals: "irregularPlurals",
  PluralOnlyNouns: "PluralOnlyNouns",
  pluraliaTantum: "pluraliaTantum",
  singularOnlyNouns: "singularOnlyNouns",
  singulariaTantum: "singulariaTantum",
  uncountableNouns: "uncountableNouns",

  // Verb mappings
  Verbs: "Verbs",
  causativeverbs: "CausativeVerbs",
  CausativeVerbs: "CausativeVerbs",
  infinitivePatterns: "infinitivePatterns",
  irregularverbs: "IrregularVerbs",
  IrregularVerbs: "IrregularVerbs",
  linkingverbs: "LinkingVerbs",
  LinkingVerbs: "LinkingVerbs",
  modalverbs: "ModalVerbs",
  ModalVerbs: "ModalVerbs",
  perceptionverbs: "PerceptionVerbs",
  PerceptionVerbs: "PerceptionVerbs",
  phrasalverbs: "phrasalVerbs",
  PhrasalVerbs: "phrasalVerbs",
  phrasalVerbs: "phrasalVerbs",
  reflexiveverbs: "ReflexiveVerbs",
  ReflexiveVerbs: "ReflexiveVerbs",
  reportingverbs: "ReportingVerbs",
  ReportingVerbs: "ReportingVerbs",
  statisticverbs: "StatisticVerbs",
  StatisticVerbs: "StatisticVerbs",
  transitiveintransitiveverbs: "transitiveIntransitiveVerbs",
  transitiveIntransitiveVerbs: "transitiveIntransitiveVerbs",
  verbsofperception: "VerbsOfPerception",
  VerbsOfPerception: "VerbsOfPerception",

  // Adjective mappings
  adjective: "Adjective",
  Adjective: "Adjective",
  adjectiveorder: "AdjectiveOrder",
  AdjectiveOrder: "AdjectiveOrder",

  // Adverb mappings
  adverb: "Adverb",
  Adverb: "Adverb",

  // Others
  articles: "Articles",
  Articles: "Articles",
  pronouns: "Pronouns",
  Pronouns: "Pronouns",
  conditionals: "Conditionals",
  Conditionals: "Conditionals",
  reportedspeech: "Reported_Speech",
  Reported_Speech: "Reported_Speech",
  relativeclauses: "Relative_Clauses",
  Relative_Clauses: "Relative_Clauses",
  passivevoice: "PassiveVoice",
  PassiveVoice: "PassiveVoice",
};

/**
 * Get the actual database key for a grammar category key
 */
export function getDatabaseKey(categoryKey: string): string | null {
  // Direct mapping
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

  // Try camelCase conversion from kebab-case (abstractnouns -> abstractNouns)
  const camelCase = categoryKey.replace(/-([a-z])/g, (match, letter) =>
    letter.toUpperCase()
  );
  if (availableKeys.includes(camelCase)) {
    return camelCase;
  }

  // Try exact match with case variations
  const variations = [
    categoryKey,
    categoryKey.toLowerCase(),
    categoryKey.charAt(0).toLowerCase() + categoryKey.slice(1), // First letter lowercase
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1), // First letter uppercase
  ];

  for (const variation of variations) {
    if (availableKeys.includes(variation)) {
      return variation;
    }
  }

  // Try Snake_Case conversion
  const snakeCase = categoryKey
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("_");
  if (availableKeys.includes(snakeCase)) {
    return snakeCase;
  }

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

import { Button } from "@/components/ui/button";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import {
  TensesStructure,
} from "@/types/grammars/grammar/grammar_type";
import React from "react";

// Types for component props and data structures
export type TenseData = Exclude<TensesStructure[keyof TensesStructure], string>;

export interface TenseResult {
  found: boolean;
  data: TenseData | null;
  exactName: string;
}

export interface ColorConfig {
  bg: string;
  text: string;
  dot: string;
  header: string;
  headerText: string;
  highlightPulse: string;
}

export interface SectionItem {
  [key: string]: unknown;
}

export interface ExpandedSections {
  [key: string]: boolean;
}

export interface HighlightedKeys {
  [key: string]: boolean;
}

// Important grammar keys that should be highlighted
export const importantKeys = [
  "definition",
  "usage",
  "uses",
  "forms",
  "form",
  "examples",
  "structure",
  "timeMarkers",
  "commonMistakes",
  "commonErrors",
  "formationRules",
  "recognition",
  "recognitionTips",
];

// Helper function to format display names
export const formatDisplayName = (name: string): string => {
  return name
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim() // Remove leading/trailing spaces
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .replace(/\s+([a-z])/g, (match, letter) => " " + letter.toUpperCase()); // Capitalize each word
};

// Function to check if a key is important
export const isImportantKey = (key: string): boolean => {
  return importantKeys.some((importantKey) =>
    key.toLowerCase().includes(importantKey.toLowerCase())
  );
};

// Helper function to find tense data with comprehensive mapping
export const findTenseData = (tenseName: string): TenseResult => {
  // Mapping table to convert detection names to database keys - COMPREHENSIVE 119 tense mapping
  const tenseMapping: Record<string, keyof TensesStructure> = {
    // 12 Basic Tenses
    "Simple Present": "Simple_Present",
    "Present Continuous": "Present_Continuous",
    "Simple Past": "Simple_Past",
    "Past Continuous": "Past_Continuous",
    "Present Perfect": "Present_Perfect",
    "Present Perfect Continuous": "Present_Perfect_Continuous",
    "Past Perfect": "Past_Perfect",
    "Past Perfect Continuous": "Past_Perfect_Continuous",
    "Simple Future": "Simple_Future",
    "Future Continuous": "Future_Continuous",
    "Future Perfect": "Future_Perfect",
    "Future Perfect Continuous": "Future_Perfect_Continuous",

    // Core Grammar Topics
    Conditionals: "Conditionals",
    "Reported Speech": "Reported_Speech",
    "Relative Clauses": "Relative_Clauses",
    Nouns: "Nouns",
    Pronouns: "Pronouns",
    Verbs: "Verbs",
    Adjective: "Adjective",
    "Adjective Order": "AdjectiveOrder",
    Adverb: "Adverb",
    Articles: "Articles",
    "Causative Form": "CausativeForm",
    Comparative: "Comparative",
    Comparisons: "Comparisons",
    Conjunctions: "Conjunctions",
    Determiners: "Determiners",
    "Direct And Indirect Speech": "DirectAndIndirectSpeech",
    "Discourse Markers": "DiscourseMarkers",
    "Double Comparative": "DoubleComparative",
    "Ellipsis And Substitution": "EllipsisAndSubstitution",
    Emphasis: "Emphasis",
    "Equality Comparison": "EqualityComparison",
    "Focus Structures": "FocusStructures",
    "Future In The Past": "FutureInThePast",
    "Gerunds And Infinitives": "GerundsAndInfinitives",
    Hedging: "Hedging",
    "Idiomatic Language": "IdiomaticLanguage",
    Imperatives: "Imperatives",
    Infinitives: "Infinitives",
    Interjections: "Interjections",
    Inversion: "Inversion",
    "Modal Verbs": "ModalVerbs",
    Negation: "Negation",
    Nominalisation: "Nominalisation",
    "Passive Voice": "PassiveVoice",
    "Phrasal Verbs": "PhrasalVerbs",
    Possessives: "Possessives",
    Preposition: "Preposition",
    Quantifiers: "Quantifiers",
    "Question Forms": "QuestionForms",
    "Reflexive Pronouns": "ReflexivePronouns",
    "Repeated Comparative": "RepeatedComparative",
    "Reported Questions": "ReportedQuestions",
    "Sentence Types": "SentenceTypes",
    "Subject Verb Agreement": "SubjectVerbAgreement",
    "Subjunctive Mood": "SubjunctiveMood",
    Superlative: "Superlative",
    "Tag Questions": "TagQuestions",
    "Tense Consistency": "TenseConsistency",
    "Tense Shift In Reported Speech": "TenseShiftInReportedSpeech",
    "Time Expressions": "TimeExpressions",
    "Word Formation Sentences": "WordFormationSentences",
    "Word Order": "WordOrder",

    // Special Adjectives
    "Adjectives No Comparison": "adjectivesNoComparison",
    "Adjectives Used As Nouns": "adjectivesUsedAsNouns",
    "Adjectives With Plural Nouns": "adjectivesWithPluralNouns",
    "Compound Adjectives": "compoundAdjectives",
    "Emotion Adjectives": "emotionAdjectives",
    "Possessive And Emphatic Adjectives": "possessiveAndEmphaticAdjectives",
    "Postpositive Adjectives": "postpositiveAdjectives",
    "Quantitative Adjectives": "quantitativeAdjectives",
    "Special Position Adjectives": "specialPositionAdjectives",

    // Special Adverbs
    "Adverb Fronting Inversion": "adverbFrontingInversion",
    "Adverb Position Meaning Change": "adverbPositionMeaningChange",
    "Adverbs Ending Ly Vs Identical Adjectives":
      "adverbsEndingLyVsIdenticalAdjectives",
    "Adverbs Inversion And Emphasis": "adverbsInversionAndEmphasis",
    "Adverbs Not Ending Ly": "adverbsNotEndingLy",
    "Adverbs Of Certainty": "adverbsOfCertainty",
    "Adverbs Of Frequency": "adverbsOfFrequency",
    "Degree Adverbs": "degreeAdverbs",
    "Emphasizing Adverbs": "emphasizingAdverbs",
    "Linking Adverbs": "linkingAdverbs",

    // Communication Advanced
    "Expressing Agreement Disagreement Suggestions Requests Responses":
      "expressingAgreementDisagreementSuggestionsRequestsResponses",
    "Polite Vs Direct Language": "politeVsDirectLanguage",
    "Transition Phrases Academic Writing": "transitionPhrasesAcademicWriting",

    // Grammar Advanced
    "Advanced Conditionals": "advancedConditionals",
    "Adverbial Clause Advanced": "adverbialClauseAdvanced",
    Binomials: "binomials",
    "Cleft Sentences": "cleftSentences", // 🎯 KEY FIX: Map "Cleft Sentences" to "cleftSentences"
    Collocations: "collocations",
    "Emphatic Cleft Sentences": "emphaticCleftSentences",
    "Fixed Expressions": "fixedExpressions",
    "Noun Clause Grammar": "nounClauseGrammar",
    "Parallel Structures": "parallelStructuresData",
    "Parallel Structures Data": "parallelStructuresData",
    "Purpose Result Condition Clauses": "purposeResultConditionClauses",
    "Reduced Relative Clauses": "reducedRelativeClauses",
    "Verb To V Or Ving Advanced": "verbToVOrVingAdvanced",

    // Special Nouns
    "Abstract Nouns": "abstractNouns",
    "Collective Nouns": "CollectiveNouns",
    "Countable Vs Uncountable Nouns": "CountableVsUncountableNouns",
    "Dual Usage Nouns": "DualUsageNouns",
    "Irregular Plurals": "irregularPlurals",
    "Plural Only Nouns": "PluralOnlyNouns",
    "Pluralia Tantum": "pluraliaTantum",
    "Singular Only Nouns": "singularOnlyNouns",
    "Singularia Tantum": "singulariaTantum",
    "Uncountable Nouns": "uncountableNouns",

    // Special Verbs
    "Causative Verbs": "CausativeVerbs",
    "Infinitive Patterns": "infinitivePatterns",
    "Irregular Verbs": "IrregularVerbs",
    "Linking Verbs": "LinkingVerbs",
    "Perception Verbs": "PerceptionVerbs",
    "Phrasal Verbs Special": "phrasalVerbs",
    "Reflexive Verbs": "ReflexiveVerbs",
    "Reporting Verbs": "ReportingVerbs",
    "Statistic Verbs": "StatisticVerbs",
    "Transitive Intransitive Verbs": "transitiveIntransitiveVerbs",
    "Verbs Of Perception": "VerbsOfPerception",
  };

  // First try mapped name
  const mappedName = tenseMapping[tenseName];
  if (mappedName && tenseDatabase[mappedName]) {
    return {
      found: true,
      data: tenseDatabase[mappedName] as TenseData,
      exactName: mappedName,
    };
  }

  // Then try exact match with original name
  if (tenseDatabase[tenseName as keyof typeof tenseDatabase]) {
    return {
      found: true,
      data: tenseDatabase[tenseName as keyof typeof tenseDatabase] as TenseData,
      exactName: tenseName,
    };
  }

  // Try to find exact match in database keys (case insensitive)
  const exactMatch = Object.keys(tenseDatabase)
    .filter((key) => key !== "createdAt" && key !== "updatedAt")
    .find((key) => key.toLowerCase() === tenseName.toLowerCase());
  if (exactMatch) {
    return {
      found: true,
      data: tenseDatabase[
        exactMatch as keyof typeof tenseDatabase
      ] as TenseData,
      exactName: exactMatch,
    };
  }

  // Try with spaces replaced by underscores
  const underscoreName = tenseName.replace(/\s+/g, "_");
  if (tenseDatabase[underscoreName as keyof typeof tenseDatabase]) {
    return {
      found: true,
      data: tenseDatabase[
        underscoreName as keyof typeof tenseDatabase
      ] as TenseData,
      exactName: underscoreName,
    };
  }

  // Try partial matching
  const partialMatch = Object.keys(tenseDatabase)
    .filter((key) => key !== "createdAt" && key !== "updatedAt")
    .find((key) =>
      key.toLowerCase().includes(tenseName.toLowerCase().replace(/\s+/g, "_"))
    );
  if (partialMatch) {
    return {
      found: true,
      data: tenseDatabase[
        partialMatch as keyof typeof tenseDatabase
      ] as TenseData,
      exactName: partialMatch,
    };
  }

  return {
    found: false,
    data: null,
    exactName: tenseName,
  };
};

// Color classes configuration
export const getColorClasses = (
  colorClass: string,
  isHighlighted: boolean
): ColorConfig => {
  const colorClasses: Record<string, ColorConfig> = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/30",
      text: "text-blue-800 dark:text-blue-200",
      dot: "bg-blue-500",
      header: isHighlighted
        ? "bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 border-2 border-blue-400 shadow-lg"
        : "bg-blue-100 dark:bg-blue-800",
      headerText: isHighlighted
        ? "text-blue-900 dark:text-blue-100 font-bold"
        : "text-blue-800 dark:text-blue-200",
      highlightPulse: isHighlighted ? "animate-pulse" : "",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/30",
      text: "text-green-800 dark:text-green-200",
      dot: "bg-green-500",
      header: isHighlighted
        ? "bg-gradient-to-r from-green-200 to-green-300 dark:from-green-700 dark:to-green-600 border-2 border-green-400 shadow-lg"
        : "bg-green-100 dark:bg-green-800",
      headerText: isHighlighted
        ? "text-green-900 dark:text-green-100 font-bold"
        : "text-green-800 dark:text-green-200",
      highlightPulse: isHighlighted ? "animate-pulse" : "",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/30",
      text: "text-purple-800 dark:text-purple-200",
      dot: "bg-purple-500",
      header: isHighlighted
        ? "bg-gradient-to-r from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-600 border-2 border-purple-400 shadow-lg"
        : "bg-purple-100 dark:bg-purple-800",
      headerText: isHighlighted
        ? "text-purple-900 dark:text-purple-100 font-bold"
        : "text-purple-800 dark:text-purple-200",
      highlightPulse: isHighlighted ? "animate-pulse" : "",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/30",
      text: "text-orange-800 dark:text-orange-200",
      dot: "bg-orange-500",
      header: isHighlighted
        ? "bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-600 border-2 border-orange-400 shadow-lg"
        : "bg-orange-100 dark:bg-orange-800",
      headerText: isHighlighted
        ? "text-orange-900 dark:text-orange-100 font-bold"
        : "text-orange-800 dark:text-orange-200",
      highlightPulse: isHighlighted ? "animate-pulse" : "",
    },
    red: {
      bg: "bg-red-50 dark:bg-red-900/30",
      text: "text-red-800 dark:text-red-200",
      dot: "bg-red-500",
      header: isHighlighted
        ? "bg-gradient-to-r from-red-200 to-red-300 dark:from-red-700 dark:to-red-600 border-2 border-red-400 shadow-lg"
        : "bg-red-100 dark:bg-red-800",
      headerText: isHighlighted
        ? "text-red-900 dark:text-red-100 font-bold"
        : "text-red-800 dark:text-red-200",
      highlightPulse: isHighlighted ? "animate-pulse" : "",
    },
    yellow: {
      bg: "bg-yellow-50 dark:bg-yellow-900/30",
      text: "text-yellow-800 dark:text-yellow-200",
      dot: "bg-yellow-500",
      header: isHighlighted
        ? "bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-700 dark:to-yellow-600 border-2 border-yellow-400 shadow-lg"
        : "bg-yellow-100 dark:bg-yellow-800",
      headerText: isHighlighted
        ? "text-yellow-900 dark:text-yellow-100 font-bold"
        : "text-yellow-800 dark:text-yellow-200",
      highlightPulse: isHighlighted ? "animate-pulse" : "",
    },
  };

  return colorClasses[colorClass] || colorClasses.blue;
};

// Generic types for the shared functions
export interface RenderProps {
  expandedSections: ExpandedSections;
  highlightedKeys: HighlightedKeys;
  toggleSection: (sectionKey: string) => void;
  isModal?: boolean;
  onSectionNavigation?: () => void; // New callback for section navigation
}

// Helper function to render different types of data content with beautiful formatting
export const renderDataContent = (
  data: unknown,
  colors: ColorConfig,
  props: RenderProps
) => {
  const { expandedSections, toggleSection } = props;
  const isModal = props.isModal || false;

  if (Array.isArray(data)) {
    return (
      <div className={isModal ? "space-y-4" : "space-y-3"}>
        {data.map((item: unknown, index: number) => (
          <div
            key={index}
            className={`${
              colors.bg
            } border border-gray-200 dark:border-gray-600 rounded-lg ${
              isModal ? "p-5" : "p-4"
            } shadow-sm hover:shadow-md transition-shadow`}
          >
            {typeof item === "object" && item !== null ? (
              <div className="space-y-4">
                {Object.entries(item).map(
                  ([itemKey, itemValue]: [string, unknown]) => (
                    <div key={itemKey} className="flex flex-col space-y-3">
                      <span
                        className={`font-semibold ${
                          isModal ? "text-base" : "text-sm"
                        } uppercase tracking-wide ${
                          colors.text
                        } opacity-90 border-l-4 ${colors.dot.replace(
                          "bg-",
                          "border-"
                        )} ${isModal ? "pl-4" : "pl-3"}`}
                      >
                        {formatDisplayName(itemKey)}:
                      </span>
                      <div
                        className={`${colors.text} ${
                          isModal ? "text-lg" : "text-base"
                        } leading-relaxed ${isModal ? "pl-8" : "pl-6"}`}
                      >
                        {Array.isArray(itemValue) ? (
                          <div
                            className={`flex flex-wrap ${
                              isModal ? "gap-2" : "gap-1"
                            }`}
                          >
                            {itemValue.map(
                              (subItem: unknown, subIdx: number) => (
                                <span
                                  key={subIdx}
                                  className="inline-flex items-center"
                                >
                                  {typeof subItem === "object" &&
                                  subItem !== null ? (
                                    <div
                                      className={`${
                                        isModal ? "text-sm" : "text-xs"
                                      } bg-white dark:bg-gray-700 ${
                                        isModal ? "px-3 py-2" : "px-2 py-1"
                                      } rounded border shadow-sm`}
                                    >
                                      {Object.entries(subItem).map(
                                        ([k, v]: [string, unknown]) => (
                                          <div
                                            key={k}
                                            className={
                                              isModal ? "mb-2" : "mb-1"
                                            }
                                          >
                                            <strong className="text-gray-700 dark:text-gray-300">
                                              {k}:
                                            </strong>
                                            <span
                                              className={`${
                                                isModal ? "ml-2" : "ml-1"
                                              } text-gray-600 dark:text-gray-400`}
                                            >
                                              {String(v)}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  ) : (
                                    <span
                                      className={`bg-gray-100 dark:bg-gray-600 ${
                                        isModal
                                          ? "px-3 py-2 text-sm"
                                          : "px-2 py-1 text-xs"
                                      } rounded font-medium`}
                                    >
                                      {String(subItem)}
                                    </span>
                                  )}
                                  {subIdx < itemValue.length - 1 && (
                                    <span
                                      className={`text-gray-400 ${
                                        isModal ? "mx-2" : "mx-1"
                                      }`}
                                    >
                                      •
                                    </span>
                                  )}
                                </span>
                              )
                            )}
                          </div>
                        ) : typeof itemValue === "object" &&
                          itemValue !== null ? (
                          <div
                            className={`bg-white dark:bg-gray-700 ${
                              isModal ? "p-4" : "p-3"
                            } rounded-lg border shadow-sm`}
                          >
                            {Object.entries(itemValue).map(
                              ([k, v]: [string, unknown]) => (
                                <div
                                  key={k}
                                  className={`${
                                    isModal ? "mb-3 pb-3" : "mb-2 pb-2"
                                  } last:mb-0 last:pb-0 border-b border-gray-200 dark:border-gray-600 last:border-b-0`}
                                >
                                  <span
                                    className={`font-medium text-gray-700 dark:text-gray-300 ${
                                      isModal ? "text-sm" : "text-xs"
                                    } uppercase tracking-wide`}
                                  >
                                    {k.replace(/([A-Z])/g, " $1").trim()}:
                                  </span>
                                  <div
                                    className={`${
                                      isModal
                                        ? "mt-2 text-base"
                                        : "mt-1 text-sm"
                                    } text-gray-600 dark:text-gray-400`}
                                  >
                                    {String(v)}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <span
                            className={`break-words ${
                              isModal ? "text-lg" : ""
                            }`}
                          >
                            {String(itemValue)}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <span
                className={`${colors.text} ${
                  isModal ? "text-lg" : "text-base"
                } leading-relaxed break-words`}
              >
                {String(item)}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  } else if (typeof data === "object" && data !== null) {
    return (
      <div className={isModal ? "space-y-4" : "space-y-3"}>
        {Object.entries(data).map(([key, value]: [string, unknown]) => (
          <div
            key={key}
            className="border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="sticky top-0 z-[5] bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div
                className={`font-semibold ${
                  isModal ? "text-base p-4" : "text-sm p-3"
                } text-gray-700 dark:text-gray-300`}
              >
                <div
                  className={`flex items-center ${isModal ? "gap-3" : "gap-2"}`}
                >
                  <span
                    className={`${
                      isModal ? "w-3 h-3" : "w-2 h-2"
                    } bg-gray-400 rounded-full`}
                  ></span>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </div>
              </div>
            </div>
            <div className={isModal ? "p-4" : "p-3"}>
              <div
                className={`text-gray-700 dark:text-gray-300 ${
                  isModal ? "text-base" : "text-sm"
                } leading-relaxed`}
              >
                {Array.isArray(value) ? (
                  <div className={isModal ? "space-y-3" : "space-y-2"}>
                    {value.map((item: unknown, idx: number) => (
                      <div
                        key={idx}
                        className={`flex items-start ${
                          isModal ? "space-x-4 p-3" : "space-x-3 p-2"
                        } bg-gray-50 dark:bg-gray-700 rounded-lg`}
                      >
                        <span
                          className={`flex-shrink-0 ${
                            isModal ? "w-8 h-8" : "w-6 h-6"
                          } bg-white dark:bg-gray-600 rounded-full flex items-center justify-center ${
                            isModal ? "text-sm" : "text-xs"
                          } font-bold text-gray-600 dark:text-gray-300 shadow-sm`}
                        >
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          {typeof item === "object" && item !== null ? (
                            <div
                              className={`bg-white dark:bg-gray-600 ${
                                isModal ? "p-4 space-y-3" : "p-3 space-y-2"
                              } rounded-lg border`}
                            >
                              {Object.entries(item).map(
                                ([k, v]: [string, unknown]) => (
                                  <div
                                    key={k}
                                    className={isModal ? "text-sm" : "text-xs"}
                                  >
                                    <span
                                      className={`font-medium text-gray-700 dark:text-gray-300 block ${
                                        isModal ? "mb-2" : "mb-1"
                                      }`}
                                    >
                                      {k.replace(/([A-Z])/g, " $1").trim()}:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 break-words">
                                      {Array.isArray(v)
                                        ? v.join(", ")
                                        : String(v)}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <span
                              className={`${
                                isModal ? "text-base" : "text-sm"
                              } break-words leading-relaxed`}
                            >
                              {String(item)}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : typeof value === "object" && value !== null ? (
                  <div className={isModal ? "space-y-4" : "space-y-3"}>
                    {Object.entries(value).map(([k, v]: [string, unknown]) => {
                      const levelKey = `${key}-${k}`;
                      const isLevelExpanded = expandedSections[levelKey];

                      return (
                        <div
                          key={k}
                          className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden"
                        >
                          <div className="sticky top-0 z-0 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                            <Button
                              variant="ghost"
                              onClick={() => toggleSection(levelKey)}
                              className={`w-full ${
                                isModal ? "p-4" : "p-3"
                              } hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-between text-left`}
                            >
                              <div
                                className={`flex items-center ${
                                  isModal ? "gap-3" : "gap-2"
                                }`}
                              >
                                <span
                                  className={`${
                                    isModal ? "w-4 h-4" : "w-3 h-3"
                                  } bg-gray-400 rounded-full`}
                                ></span>
                                <span
                                  className={`font-medium ${
                                    isModal ? "text-base" : "text-sm"
                                  } text-gray-700 dark:text-gray-300`}
                                >
                                  {k
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                                </span>
                              </div>
                              <svg
                                className={`${
                                  isModal ? "w-5 h-5" : "w-4 h-4"
                                } transition-transform text-gray-500 ${
                                  isLevelExpanded ? "rotate-180" : ""
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Button>
                          </div>

                          {isLevelExpanded && (
                            <div
                              className={`${
                                isModal ? "p-4" : "p-3"
                              } bg-white dark:bg-gray-800 animate-in slide-in-from-top-2 duration-200`}
                            >
                              <div
                                className={`${
                                  isModal ? "text-base" : "text-sm"
                                } text-gray-600 dark:text-gray-400`}
                              >
                                {Array.isArray(v) ? (
                                  <div
                                    className={`flex flex-wrap ${
                                      isModal ? "gap-2" : "gap-1"
                                    }`}
                                  >
                                    {v.map(
                                      (subItem: unknown, subIdx: number) => (
                                        <span
                                          key={subIdx}
                                          className="inline-block"
                                        >
                                          <span
                                            className={`bg-gray-100 dark:bg-gray-600 ${
                                              isModal
                                                ? "px-3 py-2 text-sm"
                                                : "px-2 py-1 text-xs"
                                            } rounded font-medium`}
                                          >
                                            {typeof subItem === "object" &&
                                            subItem !== null
                                              ? Object.entries(subItem)
                                                  .map(
                                                    ([sk, sv]: [
                                                      string,
                                                      unknown
                                                    ]) => `${sk}: ${String(sv)}`
                                                  )
                                                  .join(", ")
                                              : String(subItem)}
                                          </span>
                                          {subIdx < v.length - 1 && (
                                            <span
                                              className={`text-gray-400 ${
                                                isModal ? "mx-2" : "mx-1"
                                              }`}
                                            >
                                              •
                                            </span>
                                          )}
                                        </span>
                                      )
                                    )}
                                  </div>
                                ) : typeof v === "object" && v !== null ? (
                                  <div
                                    className={
                                      isModal ? "space-y-3" : "space-y-2"
                                    }
                                  >
                                    {Object.entries(v).map(
                                      ([subK, subV]: [string, unknown]) => (
                                        <div
                                          key={subK}
                                          className={`${
                                            isModal ? "p-3" : "p-2"
                                          } bg-gray-50 dark:bg-gray-700 rounded`}
                                        >
                                          <div
                                            className={`font-medium ${
                                              isModal ? "text-sm" : "text-xs"
                                            } uppercase tracking-wide text-gray-700 dark:text-gray-300 ${
                                              isModal ? "mb-2" : "mb-1"
                                            }`}
                                          >
                                            {subK
                                              .replace(/([A-Z])/g, " $1")
                                              .trim()}
                                            :
                                          </div>
                                          <div
                                            className={`${
                                              isModal ? "text-base" : "text-sm"
                                            } break-words`}
                                          >
                                            {Array.isArray(subV) ? (
                                              <div
                                                className={`flex flex-wrap ${
                                                  isModal ? "gap-2" : "gap-1"
                                                }`}
                                              >
                                                {subV.map(
                                                  (
                                                    item: unknown,
                                                    itemIdx: number
                                                  ) => (
                                                    <span
                                                      key={itemIdx}
                                                      className="inline-block"
                                                    >
                                                      <span
                                                        className={`bg-white dark:bg-gray-600 ${
                                                          isModal
                                                            ? "px-3 py-2 text-sm"
                                                            : "px-2 py-1 text-xs"
                                                        } rounded`}
                                                      >
                                                        {String(item)}
                                                      </span>
                                                      {itemIdx <
                                                        subV.length - 1 && (
                                                        <span
                                                          className={`text-gray-400 ${
                                                            isModal
                                                              ? "mx-2"
                                                              : "mx-1"
                                                          }`}
                                                        >
                                                          •
                                                        </span>
                                                      )}
                                                    </span>
                                                  )
                                                )}
                                              </div>
                                            ) : (
                                              <span className="break-words">
                                                {String(subV)}
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                ) : (
                                  <span className="break-words">
                                    {String(v)}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div
                    className={`${
                      isModal ? "text-base p-3" : "text-sm p-2"
                    } leading-relaxed break-words bg-gray-50 dark:bg-gray-700 rounded`}
                  >
                    {String(value)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div
        className={`bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg ${
          isModal ? "p-5" : "p-4"
        } shadow-sm`}
      >
        <p
          className={`text-gray-700 dark:text-gray-300 ${
            isModal ? "text-base" : "text-sm"
          } leading-relaxed break-words`}
        >
          {String(data)}
        </p>
      </div>
    );
  }
};

// Helper function to render unknown data structure safely
export const renderDataSection = (
  data: unknown,
  title: string,
  sectionKey: string,
  colorClass: string = "blue",
  tenseName: string | undefined,
  props: RenderProps
) => {
  if (!data) return null;

  const { expandedSections, highlightedKeys, toggleSection } = props;
  const isExpanded = expandedSections[sectionKey];
  const isHighlighted =
    tenseName && highlightedKeys[tenseName] && isImportantKey(sectionKey);

  const colors = getColorClasses(colorClass, isHighlighted || false);

  return (
    <>
      {/* Sticky Header */}
      <div
        id={`section-${sectionKey}`}
        className="sticky top-0 z-10 mb-4 last:mb-0 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm backdrop-blur-sm bg-white/30 dark:bg-black/20"
      >
        <div
          className={`border-b border-gray-200 dark:border-gray-600 ${colors.highlightPulse} transition-all duration-300 hover:bg-opacity-80`}
        >
          <Button
            variant="ghost"
            onClick={() => toggleSection(sectionKey)}
            className="w-full h-12 flex items-center justify-between text-left p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <h5
              className={`font-semibold text-base ${colors.headerText} flex items-center gap-3`}
            >
              <span
                className={`w-3 h-3 ${colors.dot} rounded-full ${
                  isHighlighted
                    ? "shadow-lg ring-2 ring-white dark:ring-gray-800 animate-bounce"
                    : ""
                }`}
              ></span>
              {isHighlighted && (
                <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-2 py-1 rounded-full font-bold shadow-md animate-pulse">
                  ⭐ KEY
                </span>
              )}
              <span className="text-lg font-bold">
                {formatDisplayName(title)}
              </span>
            </h5>
            <svg
              className={`w-5 h-5 transition-transform ${colors.headerText} ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Expanded content OUTSIDE sticky */}
      {isExpanded && (
        <div
          className={`p-4 ${colors.bg} space-y-3 animate-in slide-in-from-top-2 duration-200 mb-4`}
        >
          {renderDataContent(data, colors, props)}
        </div>
      )}
    </>
  );
};

// Shared function to render tense sections
export const renderTenseSections = (
  tenseResult: TenseResult,
  tenseName: string,
  props: RenderProps
) => {
  const isModal = props.isModal || false;
  const { expandedSections, toggleSection } = props;

  // Helper function to handle section navigation
  const handleSectionClick = (key: string) => {
    const sectionKey = `${tenseName}-${key}`;

    // Trigger modal height adjustment callback if provided
    if (props.onSectionNavigation) {
      props.onSectionNavigation();
    }

    // First ensure the section is expanded
    if (!expandedSections[sectionKey]) {
      toggleSection(sectionKey);
    }

    // Then scroll to the section with proper offset for modal
    setTimeout(() => {
      const element = document.getElementById(`section-${sectionKey}`);
      if (element) {
        // For modal context, use scroll with offset to account for sticky headers
        if (isModal) {
          element.style.scrollMarginTop = "100px";
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Clean up after animation
          setTimeout(() => {
            element.style.scrollMarginTop = "";
          }, 1000);
        } else {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }

        // Add a temporary highlight effect
        element.classList.add(
          "animate-pulse",
          "ring-2",
          "ring-blue-400",
          "ring-opacity-75"
        );
        setTimeout(() => {
          element.classList.remove(
            "animate-pulse",
            "ring-2",
            "ring-blue-400",
            "ring-opacity-75"
          );
        }, 2000);
      }
    }, 100);
  };

  if (!tenseResult.found || !tenseResult.data) {
    return (
      <div className="space-y-3">
        {/* Not Found Warning */}
        <div
          className={`${
            isModal ? "p-4" : "p-3"
          } bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800`}
        >
          <p
            className={`${
              isModal ? "text-base mb-3" : "text-sm mb-2"
            } text-yellow-800 dark:text-yellow-200`}
          >
            <strong>📝 Detected Tense:</strong> {tenseName}
          </p>
          <p
            className={`${
              isModal ? "text-sm" : "text-xs"
            } text-yellow-700 dark:text-yellow-300`}
          >
            Detailed information for this specific tense is not available in our
            database, but this exercise focuses on <strong>{tenseName}</strong>{" "}
            grammar patterns.
          </p>
        </div>

        {/* General Tips */}
        <div
          className={`${
            isModal ? "p-4" : "p-3"
          } bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800`}
        >
          <p
            className={`${
              isModal
                ? "text-base font-medium mb-3"
                : "text-sm font-medium mb-2"
            } text-blue-800 dark:text-blue-200`}
          >
            💡 General Tips for {tenseName}:
          </p>
          <ul
            className={`${
              isModal ? "text-sm space-y-2" : "text-xs space-y-1"
            } text-blue-700 dark:text-blue-300`}
          >
            <li>• Pay attention to the verb forms used in the questions</li>
            <li>• Look for time markers that indicate when actions occur</li>
            <li>• Notice the sentence structure and word order</li>
            <li>• Focus on the context clues in each question</li>
          </ul>
        </div>
      </div>
    );
  }

  const data = tenseResult.data;

  // 🧩 Predefined sections
  const sectionConfigs: Array<[string, string, string]> = [
    ["definition", "📖 Definition", "blue"],
    ["theory", "🎓 Theory & Overview", "purple"],
    ["cefrBreakdown", "📊 CEFR Level Breakdown", "green"],
    ["cefrLevelBreakdown", "📊 CEFR Level Breakdown", "green"],
    ["formationRules", "⚙️ Formation Rules", "orange"],
    ["spellingRules", "✍️ Spelling Rules", "orange"],
    ["forms", "📝 Forms", "green"],
    ["form", "📝 Form Structure", "green"],
    ["usage", "🎯 Usage", "purple"],
    ["uses", "🎯 Uses", "purple"],
    ["examples", "📚 Examples", "orange"],
    ["commonMistakes", "⚠️ Common Mistakes", "red"],
    ["commonErrors", "⚠️ Common Errors", "red"],
    ["structure", "🏗️ Structure", "red"],
    ["timeMarkers", "⏰ Time Markers", "yellow"],
    ["recognition", "🔍 How to Recognize", "blue"],
    ["recognitionTips", "💡 Recognition Tips", "blue"],
  ];

  // 📊 Modal-specific metadata view
  const renderMetaPanel = isModal && (
    <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-600">
      <div className="text-base font-bold text-green-700 dark:text-green-300 mb-3 flex items-center gap-3">
        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        📊 Property Coverage:{" "}
        {data && typeof data === "object"
          ? Object.keys(data as unknown as Record<string, unknown>).filter(
              (key) => !["created", "updated", "id", "Id", "ID"].includes(key)
            ).length
          : 0}{" "}
        properties detected
      </div>
      <div className="text-sm text-green-600 dark:text-green-400 mb-2">
        <p className="text-xs text-green-500 dark:text-green-400 mb-3 italic">
          💡 Click on any property below to jump to that section
        </p>
      </div>
      <div className="text-sm text-green-600 dark:text-green-400 grid grid-cols-3 md:grid-cols-4 gap-2">
        {data && typeof data === "object"
          ? Object.keys(data as unknown as Record<string, unknown>)
              .filter(
                (key) => !["created", "updated", "id", "Id", "ID"].includes(key)
              )
              .map((key) => (
                <Button
                  variant="ghost"
                  key={key}
                  onClick={() => handleSectionClick(key)}
                  className="bg-white dark:bg-gray-700 px-2 py-1 rounded border text-center truncate text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-gray-600 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 group"
                  title={`Click to navigate to ${formatDisplayName(
                    key
                  )} section`}
                >
                  <span className="group-hover:font-medium transition-all duration-200">
                    {key.replaceAll("_", " ")}
                  </span>
                </Button>
              ))
          : null}
      </div>
    </div>
  );

  // 🧠 Main rendering block
  return (
    <>
      {renderMetaPanel}

      {/* Render predefined sections */}
      {sectionConfigs.map(([key, title, color]) => {
        const hasData = data && typeof data === "object" && key in data;
        const sectionData = hasData
          ? (data as unknown as Record<string, unknown>)[key]
          : null;

        return sectionData ? (
          <React.Fragment key={key}>
            {renderDataSection(
              sectionData,
              title,
              `${tenseName}-${key}`,
              color,
              tenseName,
              props
            )}
          </React.Fragment>
        ) : null;
      })}

      {/* Render unknown/custom sections */}
      {data &&
        typeof data === "object" &&
        Object.entries(data as unknown as Record<string, unknown>)
          .filter(([key]) => !sectionConfigs.some(([k]) => k === key))
          .filter(
            ([key]) => !["created", "updated", "id", "Id", "ID"].includes(key)
          ) // Filter out metadata fields
          .map(([key, value]) => {
            if (!value) return null;

            // Auto-detect color
            let color: string = "blue";
            if (key.includes("error") || key.includes("mistake")) color = "red";
            else if (key.includes("example") || key.includes("practice"))
              color = "orange";
            else if (key.includes("level") || key.includes("cefr"))
              color = "green";
            else if (key.includes("usage") || key.includes("function"))
              color = "purple";
            else if (key.includes("pronunciation") || key.includes("sound"))
              color = "yellow";

            // Auto-format title from camelCase
            const title = key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase());

            return (
              <React.Fragment key={key}>
                {renderDataSection(
                  value,
                  title,
                  `${tenseName}-${key}`,
                  color,
                  tenseName,
                  props
                )}
              </React.Fragment>
            );
          })}
    </>
  );
};

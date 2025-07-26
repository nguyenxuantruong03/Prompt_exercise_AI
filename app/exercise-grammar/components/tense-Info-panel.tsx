import { tenseDatabase } from "@/lib/grammars/data_grammar";
import { tensePatterns } from "@/lib/grammars/grammar";
import { Exercise } from "@/types/grammars/grammars_type";
import { useState } from "react";

interface TenseInfoPanelProps {
  showTenseInfo: boolean;
  setShowTenseInfo: (show: boolean) => void;
  exercise: Exercise;
}

const TenseInfoPanel: React.FC<TenseInfoPanelProps> = ({
  showTenseInfo,
  setShowTenseInfo,
  exercise,
}) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  // Function to detect tenses in exercise content
  const detectTensesInExercise = (exercise: Exercise): string[] => {
    if (
      !exercise ||
      !exercise.questions ||
      !Array.isArray(exercise.questions)
    ) {
      return [];
    }

    const detectedTenses = new Set<string>();

    // Helper function to check if words match flexibly
    const checkWordsMatch = (text: string, keywords: string[]): boolean => {
      const normalizedText = text.toLowerCase().trim();
      const words = normalizedText.split(/\s+/);

      // Check if all keywords are present in the text (order doesn't matter)
      return keywords.every((keyword) =>
        words.some((word) => word.includes(keyword) || keyword.includes(word))
      );
    };

    // Helper function to find tense from text
    const findTenseInText = (text: string): string | null => {
      if (!text) return null;

      const normalizedText = text.toLowerCase().trim();

      // First, try exact pattern matching
      for (const tenseInfo of tensePatterns) {
        for (const pattern of tenseInfo.patterns) {
          if (normalizedText.includes(pattern)) {
            return tenseInfo.canonical;
          }
        }
      }

      // Then, try flexible keyword matching
      for (const tenseInfo of tensePatterns) {
        if (checkWordsMatch(normalizedText, tenseInfo.keywords)) {
          return tenseInfo.canonical;
        }
      }

      return null;
    };

    // Check all questions for tense information
    for (const question of exercise.questions) {
      // Check explicit tense property
      if (question.tense && typeof question.tense === "string") {
        const normalizedTense = question.tense.trim().replace(/\s+/g, " ");
        const foundTense = findTenseInText(normalizedTense);
        if (foundTense) {
          detectedTenses.add(foundTense);
        } else {
          // If no pattern match, add the original normalized tense
          detectedTenses.add(normalizedTense);
        }
      }

      // Check question text for tense indicators
      if (question.question) {
        const foundTense = findTenseInText(question.question);
        if (foundTense) {
          detectedTenses.add(foundTense);
        }
      }

      // Check explanation for tense information
      if (question.explanation) {
        const foundTense = findTenseInText(question.explanation);
        if (foundTense) {
          detectedTenses.add(foundTense);
        }
      }

      // Check tip for tense information
      if (question.tip) {
        const foundTense = findTenseInText(question.tip);
        if (foundTense) {
          detectedTenses.add(foundTense);
        }
      }

      // Check options for tense clues (for multiple choice)
      if (question.options && Array.isArray(question.options)) {
        for (const option of question.options) {
          if (typeof option === "string") {
            const foundTense = findTenseInText(option);
            if (foundTense) {
              detectedTenses.add(foundTense);
            }
          }
        }
      }
    }

    // Also check exercise title for tense information
    if (exercise.title) {
      const foundTense = findTenseInText(exercise.title);
      if (foundTense) {
        detectedTenses.add(foundTense);
      }
    }

    return Array.from(detectedTenses).sort();
  };

  // Helper function to find tense data with flexible matching
  const findTenseData = (tenseName: string) => {
    // First try exact match
    if (tenseDatabase[tenseName]) {
      return {
        found: true,
        data: tenseDatabase[tenseName],
        exactName: tenseName,
      };
    }

    // Try case-insensitive match
    const lowerTenseName = tenseName.toLowerCase();
    const exactMatch = Object.keys(tenseDatabase).find(
      (key) => key.toLowerCase() === lowerTenseName
    );
    if (exactMatch) {
      return {
        found: true,
        data: tenseDatabase[exactMatch],
        exactName: exactMatch,
      };
    }

    // Try partial matching (contains)
    const partialMatch = Object.keys(tenseDatabase).find(
      (key) =>
        key.toLowerCase().includes(lowerTenseName) ||
        lowerTenseName.includes(key.toLowerCase())
    );
    if (partialMatch) {
      return {
        found: true,
        data: tenseDatabase[partialMatch],
        exactName: partialMatch,
      };
    }

    return { found: false, data: null, exactName: tenseName };
  };

  // Function to toggle section expansion
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // Helper function to render citations section
  const renderCitationsSection = (citations: any[], sectionKey: string) => {
    if (!citations || !Array.isArray(citations) || citations.length === 0)
      return null;

    const isExpanded = expandedSections[sectionKey];

    return (
      <div className="mb-3">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between text-left"
        >
          <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            External References ({citations.length})
          </h5>
          <svg
            className={`w-4 h-4 transition-transform ${
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
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {citations.map((citation, index) => (
              <div
                key={index}
                className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h6 className="font-medium text-sm text-indigo-800 dark:text-indigo-200 line-clamp-2">
                    {citation.title}
                  </h6>
                  <span
                    className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                      citation.type === "reference"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : citation.type === "practice"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : citation.type === "examples"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                    }`}
                  >
                    {citation.type}
                  </span>
                </div>

                <p className="text-xs text-indigo-700 dark:text-indigo-300 mb-2 line-clamp-2">
                  {citation.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {citation.source}
                  </span>
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded transition-colors flex items-center gap-1"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Visit
                  </a>
                </div>
              </div>
            ))}

            <div className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2 border-t border-indigo-200 dark:border-indigo-800">
              💡 Click "Visit" to open external resources in a new tab
            </div>
          </div>
        )}
      </div>
    );
  };

  // Helper function to render any data structure safely
  const renderDataSection = (
    data: any,
    title: string,
    sectionKey: string,
    colorClass: string = "blue"
  ) => {
    if (!data) return null;

    const isExpanded = expandedSections[sectionKey];
    const colorClasses = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-700 dark:text-blue-300",
        dot: "bg-blue-500",
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-700 dark:text-green-300",
        dot: "bg-green-500",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-700 dark:text-purple-300",
        dot: "bg-purple-500",
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        text: "text-orange-700 dark:text-orange-300",
        dot: "bg-orange-500",
      },
      red: {
        bg: "bg-red-100 dark:bg-red-900/30",
        text: "text-red-700 dark:text-red-300",
        dot: "bg-red-500",
      },
      yellow: {
        bg: "bg-yellow-100 dark:bg-yellow-900/30",
        text: "text-yellow-700 dark:text-yellow-300",
        dot: "bg-yellow-500",
      },
    };

    const colors =
      colorClasses[colorClass as keyof typeof colorClasses] ||
      colorClasses.blue;

    return (
      <div className="mb-3">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between text-left"
        >
          <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
            <span className={`w-2 h-2 ${colors.dot} rounded-full`}></span>
            {title}
          </h5>
          <svg
            className={`w-4 h-4 transition-transform ${
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
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {renderDataContent(data, colors)}
          </div>
        )}
      </div>
    );
  };

  // Helper function to render different types of data content
  const renderDataContent = (data: any, colors: any) => {
    if (Array.isArray(data)) {
      return (
        <div className="flex flex-wrap gap-1">
          {data.map((item: any, index: number) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 ${colors.bg} ${colors.text} rounded-full`}
            >
              {typeof item === "object" ? JSON.stringify(item) : item}
            </span>
          ))}
        </div>
      );
    } else if (typeof data === "object" && data !== null) {
      return (
        <div className="space-y-2">
          {Object.entries(data).map(([key, value]: [string, any]) => (
            <div key={key} className={`text-xs p-2 ${colors.bg} rounded`}>
              <div className="font-medium capitalize mb-1">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
              </div>
              <div className={colors.text}>
                {Array.isArray(value) ? (
                  <div className="flex flex-wrap gap-1">
                    {value.map((item: any, idx: number) => (
                      <span key={idx} className="inline-block mr-1">
                        {typeof item === "object" ? JSON.stringify(item) : item}
                        {idx < value.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                ) : typeof value === "object" && value !== null ? (
                  <pre className="text-xs whitespace-pre-wrap">
                    {JSON.stringify(value, null, 2)}
                  </pre>
                ) : (
                  value?.toString()
                )}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <p className={`text-xs ${colors.text} ${colors.bg} p-2 rounded`}>
          {data?.toString()}
        </p>
      );
    }
  };

  return (
    <div className="fixed left-4 top-1/5  xl:top-1/3 transform -translate-y-1/2 z-40">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setShowTenseInfo(!showTenseInfo)}
          className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
            showTenseInfo
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400"
          }`}
          title={
            showTenseInfo ? "Hide tense information" : "Show tense information"
          }
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Tense Information Panel */}
        {showTenseInfo && (
          <div className="absolute left-16 top-0 w-96 max-h-[650px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in slide-in-from-left-2 duration-300">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Grammar Reference Guide
              </h3>
              <p className="text-sm opacity-90">
                {detectTensesInExercise(exercise).length > 0
                  ? `${detectTensesInExercise(exercise).length} tense${
                      detectTensesInExercise(exercise).length > 1 ? "s" : ""
                    } detected in this exercise`
                  : "General grammar information"}
              </p>
            </div>

            <div className="max-h-[500px] overflow-y-auto">
              {detectTensesInExercise(exercise).length > 0 ? (
                detectTensesInExercise(exercise).map((tenseName, index) => {
                  const tenseResult = findTenseData(tenseName);

                  return (
                    <div
                      key={index}
                      className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    >
                      <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                        {tenseResult.exactName}
                        {!tenseResult.found && (
                          <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded">
                            General Info
                          </span>
                        )}
                      </h4>

                      {tenseResult.found && tenseResult.data ? (
                        <>
                          {/* Citations Section - NEW */}
                          {tenseResult.data.citations &&
                            renderCitationsSection(
                              tenseResult.data.citations,
                              `${tenseName}-citations`
                            )}

                          {/* Definition */}
                          {tenseResult.data.definition &&
                            renderDataSection(
                              tenseResult.data.definition,
                              "Definition",
                              `${tenseName}-definition`,
                              "blue"
                            )}

                          {/* Forms Section */}
                          {tenseResult.data.forms &&
                            renderDataSection(
                              tenseResult.data.forms,
                              "Forms",
                              `${tenseName}-forms`,
                              "green"
                            )}
                          {tenseResult.data.form &&
                            renderDataSection(
                              tenseResult.data.form,
                              "Form Structure",
                              `${tenseName}-form`,
                              "green"
                            )}

                          {/* Usage Section */}
                          {tenseResult.data.usage &&
                            renderDataSection(
                              tenseResult.data.usage,
                              "Usage",
                              `${tenseName}-usage`,
                              "purple"
                            )}
                          {tenseResult.data.uses &&
                            renderDataSection(
                              tenseResult.data.uses,
                              "Uses",
                              `${tenseName}-uses`,
                              "purple"
                            )}

                          {/* Examples */}
                          {tenseResult.data.examples &&
                            renderDataSection(
                              tenseResult.data.examples,
                              "Examples",
                              `${tenseName}-examples`,
                              "orange"
                            )}

                          {/* Time Markers Section */}
                          {tenseResult.data.timeMarkers &&
                            renderDataSection(
                              tenseResult.data.timeMarkers,
                              "Time Markers",
                              `${tenseName}-timeMarkers`,
                              "yellow"
                            )}

                          {/* Recognition Pattern */}
                          {tenseResult.data.recognition &&
                            renderDataSection(
                              tenseResult.data.recognition,
                              "How to Recognize",
                              `${tenseName}-recognition`,
                              "blue"
                            )}
                          {tenseResult.data.recognitionTips &&
                            renderDataSection(
                              tenseResult.data.recognitionTips,
                              "Recognition Tips",
                              `${tenseName}-recognitionTips`,
                              "blue"
                            )}

                          {/* Structure */}
                          {tenseResult.data.structure &&
                            renderDataSection(
                              tenseResult.data.structure,
                              "Structure",
                              `${tenseName}-structure`,
                              "red"
                            )}

                          {/* All other existing properties */}
                          {tenseResult.data.types &&
                            renderDataSection(
                              tenseResult.data.types,
                              "Types",
                              `${tenseName}-types`,
                              "purple"
                            )}
                          {tenseResult.data.notes &&
                            renderDataSection(
                              tenseResult.data.notes,
                              "Notes",
                              `${tenseName}-notes`,
                              "yellow"
                            )}
                          {tenseResult.data.usageNotes &&
                            renderDataSection(
                              tenseResult.data.usageNotes,
                              "Usage Notes",
                              `${tenseName}-usageNotes`,
                              "yellow"
                            )}
                          {tenseResult.data.commonErrors &&
                            renderDataSection(
                              tenseResult.data.commonErrors,
                              "Common Errors",
                              `${tenseName}-commonErrors`,
                              "red"
                            )}
                          {tenseResult.data.basicStructure &&
                            renderDataSection(
                              tenseResult.data.basicStructure,
                              "Basic Structure",
                              `${tenseName}-basicStructure`,
                              "green"
                            )}
                          {tenseResult.data.specialUsage &&
                            renderDataSection(
                              tenseResult.data.specialUsage,
                              "Special Usage",
                              `${tenseName}-specialUsage`,
                              "purple"
                            )}
                          {tenseResult.data.commonStructures &&
                            renderDataSection(
                              tenseResult.data.commonStructures,
                              "Common Structures",
                              `${tenseName}-commonStructures`,
                              "blue"
                            )}
                          {tenseResult.data.modalFunctions &&
                            renderDataSection(
                              tenseResult.data.modalFunctions,
                              "Modal Functions",
                              `${tenseName}-modalFunctions`,
                              "purple"
                            )}
                          {tenseResult.data.passiveStructure &&
                            renderDataSection(
                              tenseResult.data.passiveStructure,
                              "Passive Structure",
                              `${tenseName}-passiveStructure`,
                              "red"
                            )}
                          {tenseResult.data.causativeStructures &&
                            renderDataSection(
                              tenseResult.data.causativeStructures,
                              "Causative Structures",
                              `${tenseName}-causativeStructures`,
                              "orange"
                            )}
                          {tenseResult.data.questionFormTypes &&
                            renderDataSection(
                              tenseResult.data.questionFormTypes,
                              "Question Types",
                              `${tenseName}-questionFormTypes`,
                              "blue"
                            )}
                          {tenseResult.data.imperativeDetails &&
                            renderDataSection(
                              tenseResult.data.imperativeDetails,
                              "Imperative Details",
                              `${tenseName}-imperativeDetails`,
                              "red"
                            )}
                          {tenseResult.data.wordOrderDetails &&
                            renderDataSection(
                              tenseResult.data.wordOrderDetails,
                              "Word Order",
                              `${tenseName}-wordOrderDetails`,
                              "green"
                            )}
                          {tenseResult.data.comparisonDetails &&
                            renderDataSection(
                              tenseResult.data.comparisonDetails,
                              "Comparison",
                              `${tenseName}-comparisonDetails`,
                              "purple"
                            )}
                          {tenseResult.data.quantifierDetails &&
                            renderDataSection(
                              tenseResult.data.quantifierDetails,
                              "Quantifiers",
                              `${tenseName}-quantifierDetails`,
                              "orange"
                            )}
                          {tenseResult.data.negationDetails &&
                            renderDataSection(
                              tenseResult.data.negationDetails,
                              "Negation",
                              `${tenseName}-negationDetails`,
                              "red"
                            )}
                          {tenseResult.data.ellipsisAndSubstitutionDetails &&
                            renderDataSection(
                              tenseResult.data.ellipsisAndSubstitutionDetails,
                              "Ellipsis & Substitution",
                              `${tenseName}-ellipsis`,
                              "yellow"
                            )}
                          {tenseResult.data.tagQuestionsDetails &&
                            renderDataSection(
                              tenseResult.data.tagQuestionsDetails,
                              "Tag Questions",
                              `${tenseName}-tagQuestions`,
                              "blue"
                            )}
                          {tenseResult.data.inversionDetails &&
                            renderDataSection(
                              tenseResult.data.inversionDetails,
                              "Inversion",
                              `${tenseName}-inversion`,
                              "purple"
                            )}
                          {tenseResult.data.directAndIndirectSpeechDetails &&
                            renderDataSection(
                              tenseResult.data.directAndIndirectSpeechDetails,
                              "Direct & Indirect Speech",
                              `${tenseName}-speech`,
                              "green"
                            )}
                          {tenseResult.data.timeExpressionsDetails &&
                            renderDataSection(
                              tenseResult.data.timeExpressionsDetails,
                              "Time Expressions",
                              `${tenseName}-timeExpressions`,
                              "orange"
                            )}
                          {tenseResult.data.tenseConsistencyDetails &&
                            renderDataSection(
                              tenseResult.data.tenseConsistencyDetails,
                              "Tense Consistency",
                              `${tenseName}-consistency`,
                              "red"
                            )}
                          {tenseResult.data
                            .countableAndUncountableNounsDetails &&
                            renderDataSection(
                              tenseResult.data
                                .countableAndUncountableNounsDetails,
                              "Countable/Uncountable Nouns",
                              `${tenseName}-nouns`,
                              "blue"
                            )}
                          {tenseResult.data.possessivesDetails &&
                            renderDataSection(
                              tenseResult.data.possessivesDetails,
                              "Possessives",
                              `${tenseName}-possessives`,
                              "purple"
                            )}
                          {tenseResult.data.reflexivePronounsDetails &&
                            renderDataSection(
                              tenseResult.data.reflexivePronounsDetails,
                              "Reflexive Pronouns",
                              `${tenseName}-reflexive`,
                              "yellow"
                            )}
                          {tenseResult.data.reportedQuestionsDetails &&
                            renderDataSection(
                              tenseResult.data.reportedQuestionsDetails,
                              "Reported Questions",
                              `${tenseName}-reportedQuestions`,
                              "green"
                            )}
                          {tenseResult.data.sentenceTypes &&
                            renderDataSection(
                              tenseResult.data.sentenceTypes,
                              "Sentence Types",
                              `${tenseName}-sentenceTypes`,
                              "orange"
                            )}
                          {tenseResult.data.tenseShiftinReportedSpeech &&
                            renderDataSection(
                              tenseResult.data.tenseShiftinReportedSpeech,
                              "Tense Shift in Reported Speech",
                              `${tenseName}-tenseShift`,
                              "red"
                            )}
                          {tenseResult.data.futureinthepast &&
                            renderDataSection(
                              tenseResult.data.futureinthepast,
                              "Future in the Past",
                              `${tenseName}-futureInPast`,
                              "blue"
                            )}

                          {/* Render any other properties that might exist */}
                          {Object.entries(tenseResult.data).map(
                            ([key, value]) => {
                              // Comprehensive renderedProps array that covers ALL possible properties in tenseDatabase
                              const renderedProps = [
                                // Core grammar structure properties
                                "definition",
                                "title",
                                "name",
                                "forms",
                                "form",
                                "usage",
                                "uses",
                                "examples",
                                "timeMarkers",
                                "recognition",
                                "recognitionTips",
                                "structure",
                                "types",
                                "notes",
                                "usageNotes",
                                "commonErrors",
                                "basicStructure",
                                "specialUsage",
                                "commonStructures",

                                // Advanced grammar properties
                                "modalFunctions",
                                "passiveStructure",
                                "causativeStructures",
                                "questionFormTypes",
                                "imperativeDetails",
                                "wordOrderDetails",
                                "comparisonDetails",
                                "quantifierDetails",
                                "negationDetails",
                                "ellipsisAndSubstitutionDetails",
                                "tagQuestionsDetails",
                                "inversionDetails",
                                "directAndIndirectSpeechDetails",
                                "timeExpressionsDetails",
                                "tenseConsistencyDetails",
                                "countableAndUncountableNounsDetails",
                                "possessivesDetails",
                                "reflexivePronounsDetails",
                                "reportedQuestionsDetails",
                                "sentenceTypes",
                                "tenseShiftinReportedSpeech",
                                "futureinthepast",

                                // Specialized grammar topics
                                "emphasis",
                                "nominalisation",
                                "hedging",
                                "discoursemarkers",
                                "focusStructures",
                                "idiomaticLanguage",
                                "phrasalVerbs",
                                "purpose",
                                "cleftSentences",
                                "inversion",
                                "emphaticDo",
                                "fronting",
                                "repetition",
                                "intensifiers",
                                "emphaticPronouns",

                                // Transformation and word formation
                                "commonTransformations",
                                "verbToNoun",
                                "adjectiveToNoun",
                                "clauseToNounPhrase",
                                "wordForms",
                                "wordFamilies",

                                // Modal and subjunctive properties
                                "mainUses",
                                "triggerVerbs",
                                "expressionsOfWish",
                                "fixedExpressions",
                                "advancedExamples",
                                "commonModals",
                                "modalStructure",

                                // Passive voice properties
                                "passiveTenseForms",
                                "activePassiveExamples",
                                "passiveRecognitionTips",
                                "passiveCommonErrors",
                                "passiveNotes",

                                // Causative properties
                                "causativeTenseExamples",
                                "causativeWhenToUse",
                                "causativeExamples",
                                "causativeRecognitionTips",
                                "causativeCommonErrors",
                                "causativeNotes",

                                // Question form properties
                                "questionRecognitionTips",
                                "questionCommonErrors",
                                "questionNotes",

                                // Comparison properties
                                "standardOrder",
                                "structureExample",
                                "exampleSentence",
                                "orderExamples",
                                "commonMistakes",
                                "irregulars",
                                "rules",

                                // Relative clauses and pronouns
                                "relativePronouns",

                                // Categories and functions
                                "categories",
                                "functions",
                                "variations",

                                // Infinitives and gerunds
                                "commonVerbsFollowedByInfinitives",

                                // Hedging and discourse
                                "commonHedgingWords",
                                "addition",
                                "contrast",
                                "causeAndEffect",
                                "timeSequence",
                                "summary",
                                "example",
                                "clarification",
                                "condition",

                                // Idiomatic language
                                "everydayIdioms",
                                "proverbs",
                                "collocations",
                                "expressions",
                                "ieltsTips",

                                // Phrasal verbs
                                "transitive",
                                "intransitive",
                                "separable",
                                "inseparable",
                                "phrasalVerb",
                                "meaning",

                                // Grammar patterns
                                "ellipsis",
                                "substitution",
                                "quantifiersForCountable",
                                "quantifiersForUncountable",
                                "usedWithCountableNouns",
                                "usedWithUncountableNouns",
                                "usedWithBoth",
                                "countableNouns",
                                "uncountableNouns",

                                // Clause types
                                "verbalPhrase",
                                "nonFiniteClause",
                                "finiteClauses",
                                "adverbialClauses",
                                "nounClauses",
                                "relativeClauses",

                                // Question types
                                "shortAnswers",
                                "tagQuestions",
                                "questionWords",
                                "yesNoQuestions",
                                "whQuestions",
                                "negative",
                                "interrogative",

                                // Mood types
                                "conditionalMood",
                                "subjunctiveMood",
                                "imperativeMood",
                                "declarative",
                                "exclamatory",

                                // Learning tips
                                "band7Plus",
                                "avoidCliche",
                                "practice",
                                "doNotOveruse",
                                "learnInChunks",
                              ];

                              if (renderedProps.includes(key) || !value)
                                return null;

                              return renderDataSection(
                                value,
                                key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase()),
                                `${tenseName}-${key}`,
                                "blue"
                              );
                            }
                          )}
                        </>
                      ) : (
                        // Show general information when tense data is not found
                        <div className="space-y-3">
                          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                              <strong>📝 Detected Tense:</strong> {tenseName}
                            </p>
                            <p className="text-xs text-yellow-700 dark:text-yellow-300">
                              Detailed information for this specific tense is
                              not available in our database, but this exercise
                              focuses on <strong>{tenseName}</strong> grammar
                              patterns.
                            </p>
                          </div>

                          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                              💡 General Tips for {tenseName}:
                            </p>
                            <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                              <li>
                                • Pay attention to the verb forms used in the
                                questions
                              </li>
                              <li>
                                • Look for time markers that indicate when
                                actions occur
                              </li>
                              <li>
                                • Notice the sentence structure and word order
                              </li>
                              <li>
                                • Focus on the context clues in each question
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                // Show general tense info if none detected
                <div className="p-4">
                  <div className="text-center text-gray-500 dark:text-gray-400 mb-4">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm">No specific tenses detected</p>
                    <p className="text-xs">
                      This exercise may cover general grammar topics
                    </p>
                  </div>

                  <div className="text-xs space-y-2">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <p className="font-medium text-blue-700 dark:text-blue-300">
                        💡 Quick Tip
                      </p>
                      <p className="text-blue-600 dark:text-blue-400">
                        Generate exercises with specific tense keywords (like
                        "present perfect" or "past continuous") to see detailed
                        tense information here!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>
                  {detectTensesInExercise(exercise).length > 0 ? (
                    <>
                      Showing {detectTensesInExercise(exercise).length} tense
                      {detectTensesInExercise(exercise).length > 1 ? "s" : ""}:
                      <span className="font-medium text-blue-600 dark:text-blue-400 ml-1">
                        {detectTensesInExercise(exercise).join(", ")}
                      </span>
                    </>
                  ) : (
                    "Comprehensive Grammar Reference"
                  )}
                </span>
                <button
                  onClick={() => setShowTenseInfo(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenseInfoPanel;

import { tensePatterns } from "@/lib/static/grammars/grammar";
import { Exercise } from "@/types/grammars/grammars_type";
import { useEffect, useState } from "react";
import {
  formatDisplayName,
  findTenseData,
  renderTenseSections,
  type RenderProps,
  type TenseData,
} from "../../../../../components/shared/format/json_to_html/toggle-tenses";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { TenseItem } from "../hint-tenses/hint-tenses";

interface TenseInfoPanelProps {
  showTenseInfo: boolean;
  setShowTenseInfo: (show: boolean) => void;
  exercise: Exercise;
  setTenseModalData: (data: {
    isOpen: boolean;
    tenseName: string;
    tenseData: TenseItem;
  }) => void;
}

const TenseInfoPanel: React.FC<TenseInfoPanelProps> = ({
  showTenseInfo,
  setShowTenseInfo,
  exercise,
  setTenseModalData,
}) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const [highlightedKeys, setHighlightedKeys] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    if (showTenseInfo) {
      document.body.style.overflow = "hidden"; // ✅ Chặn scroll nền
    } else {
      document.body.style.overflow = ""; // ✅ Cho phép scroll lại
    }

    return () => {
      document.body.style.overflow = ""; // ✅ Dọn dẹp khi unmount
    };
  }, [showTenseInfo]);

  // Function to toggle highlighting for a tense
  const toggleHighlighting = (tenseName: string) => {
    setHighlightedKeys((prev) => ({
      ...prev,
      [tenseName]: !prev[tenseName],
    }));
  };

  // Function to open modal with tense details
  const openModal = (tenseName: string, tenseData: TenseData | null) => {
    if (tenseData) {
      // Create a TenseItem object from the tense data and name
      const tenseItem: TenseItem = {
        key: tenseName.replace(/\s+/g, "_"),
        name: tenseName,
        displayName: tenseName,
        category: "tenses", // Default category, could be determined from tenseName if needed
        order: 0,
        cefrLevels: ["B1"], // Default CEFR level
      };

      setTenseModalData({
        isOpen: true,
        tenseName,
        tenseData: tenseItem,
      });
      setShowTenseInfo(false); // Close the panel
    }
  };

  // Function to toggle section expansion
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const renderProps: RenderProps = {
    expandedSections,
    highlightedKeys,
    toggleSection,
    isModal: false,
  };

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

    // Helper function to find tense from text with strict filtering
    const findTenseInText = (text: string): string | null => {
      if (!text) return null;

      const normalizedText = text.toLowerCase().trim();

      // Skip if text contains irrelevant content
      const irrelevantPatterns = [
        /time\s+expressions?\s+(?:like|such\s+as|including)/i,
        /comparative\s+(?:adjectives?|forms?)/i,
        /adjective\s+(?:order|placement)/i,
        /adverbs?\s+of\s+(?:frequency|manner|time)/i,
        /word\s+(?:order|formation)/i,
        /sentence\s+(?:structure|types?)/i,
        /grammar\s+(?:rules?|patterns?)/i,
        /vocabulary\s+(?:exercises?|practice)/i,
      ];

      for (const pattern of irrelevantPatterns) {
        if (pattern.test(normalizedText)) {
          return null;
        }
      }

      // First, try exact pattern matching with word boundaries
      for (const tenseInfo of tensePatterns) {
        for (const pattern of tenseInfo.patterns) {
          // Use word boundaries to ensure exact matches
          const regex = new RegExp(
            `\\b${pattern.replace(/\s+/g, "\\s+")}\\b`,
            "i"
          );
          if (regex.test(normalizedText)) {
            // Additional validation: ensure it's not part of a larger context
            if (!isPartOfIrrelevantContext(normalizedText, pattern)) {
              return tenseInfo.canonical;
            }
          }
        }
      }

      return null;
    };

    // Helper function to check if a tense mention is part of irrelevant context
    const isPartOfIrrelevantContext = (
      text: string,
      pattern: string
    ): boolean => {
      const contextPatterns = [
        `time expressions ${pattern}`,
        `${pattern} time expressions`,
        `comparative ${pattern}`,
        `${pattern} comparative`,
        `adjective ${pattern}`,
        `${pattern} adjective`,
        `along with ${pattern}`,
        `${pattern} along with`,
        `including ${pattern}`,
        `${pattern} including`,
        `such as ${pattern}`,
        `${pattern} such as`,
        `like ${pattern}`,
        `${pattern} like`,
      ];

      return contextPatterns.some((contextPattern) =>
        text.toLowerCase().includes(contextPattern.toLowerCase())
      );
    };

    // Check all questions for tense information
    for (const question of exercise.questions) {
      // Check explicit tense property with highest priority
      if (question.tense && typeof question.tense === "string") {
        const normalizedTense = question.tense.trim().replace(/\s+/g, " ");

        // Direct mapping for explicit tense values
        const directMappings: { [key: string]: string } = {
          "simple past": "Simple Past",
          "past simple": "Simple Past",
          "simple present": "Simple Present",
          "present simple": "Simple Present",
          "present continuous": "Present Continuous",
          "continuous present": "Present Continuous",
          "simple future": "Simple Future",
          "future simple": "Simple Future",
          "past continuous": "Past Continuous",
          "continuous past": "Past Continuous",
          "present perfect": "Present Perfect",
          "perfect present": "Present Perfect",
          "past perfect": "Past Perfect",
          "perfect past": "Past Perfect",
        };

        const directMapping = directMappings[normalizedTense.toLowerCase()];
        if (directMapping) {
          detectedTenses.add(directMapping);
          continue; // Skip other detection methods for this question
        }

        const foundTense = findTenseInText(normalizedTense);
        if (foundTense) {
          detectedTenses.add(foundTense);
          continue; // Skip other detection methods for this question
        }
      }

      // Only check other fields if no explicit tense was found
      if (!question.tense) {
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
      }
    }

    // Also check exercise title for tense information
    if (exercise.title) {
      const foundTense = findTenseInText(exercise.title);
      if (foundTense) {
        detectedTenses.add(foundTense);
      }
    }

    const result = Array.from(detectedTenses).sort();
    console.log(
      "🎯 Detection Result:",
      result,
      "from exercise:",
      exercise.title
    );
    return result;
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed right-7 bottom-20 transform -translate-y-1/2 z-40">
        <Button
          onClick={() => setShowTenseInfo(!showTenseInfo)}
          className="h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
          title={
            showTenseInfo ? "Hide tense information" : "Show tense information"
          }
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
              Hint
            </span>
          </div>
        </Button>
      </div>

      {/* Sheet Component */}
      <Sheet open={showTenseInfo} onOpenChange={setShowTenseInfo}>
        <SheetContent 
          side="right" 
          className="w-[100vw] sm:w-[400px] md:w-[500px] lg:w-[600px]"
        >
          {/* Header Section */}
          <SheetHeader className="p-4 bg-blue-600 dark:bg-blue-700 text-white">
            <SheetTitle className="font-bold text-lg flex items-center gap-2 mb-1 text-white">
              <div className="p-1.5 bg-white/20 rounded-lg">
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
              </div>
              <span>Grammar Reference</span>
            </SheetTitle>

            <p className="text-sm text-blue-100">
              {detectTensesInExercise(exercise).length > 0
                ? `${detectTensesInExercise(exercise).length} grammar topic${
                    detectTensesInExercise(exercise).length > 1 ? "s" : ""
                  } detected`
                : "Comprehensive grammar information"}
            </p>
          </SheetHeader>

          {/* Content Section */}
          <div
            className="overflow-y-auto relative"
            style={{ scrollBehavior: "smooth" }}
          >
            {detectTensesInExercise(exercise).length > 0 ? (
              detectTensesInExercise(exercise).map((tenseName, index) => {
                const tenseResult = findTenseData(tenseName);

                return (
                  <div
                    key={index}
                    className="px-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400 flex items-center gap-3">
                        <span className="text-2xl">
                          {formatDisplayName(tenseResult.exactName)}
                        </span>
                        {!tenseResult.found && (
                          <span className="text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1.5 rounded-full">
                            General Info
                          </span>
                        )}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          onClick={() => toggleHighlighting(tenseName)}
                          className={`flex items-center gap-2 px-4 py-3 md:p-0 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            highlightedKeys[tenseName]
                              ? "bg-gradient-to-r from-orange-700 to-orange-400 text-yellow-900 shadow-lg transform scale-105"
                              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:shadow-md"
                          }`}
                        >
                          {highlightedKeys[tenseName] ? "🌟" : "⭐"}
                          <span className="hidden xl:inline">
                            {highlightedKeys[tenseName]
                              ? " Key Topics Active"
                              : " Highlight Key Topics"}
                          </span>
                        </Button>

                        {/* Expand Icon Button */}
                        <Button
                         variant="ghost"
                          onClick={() => openModal(tenseName, tenseResult.data)}
                          className="flex items-center gap-1 p-3 rounded-full text-sm font-medium transition-all duration-200 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-700 dark:text-blue-300 hover:shadow-md hover:scale-105"
                          title="View detailed information in full screen"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>

                    {renderTenseSections(tenseResult, tenseName, renderProps)}
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
                      &quot;present perfect&quot; or &quot;past
                      continuous&quot;) to see detailed tense information here!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Footer */}
          <div className="p-4 bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-purple-900/30 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>
                  {detectTensesInExercise(exercise).length > 0 ? (
                    <>
                      📊 Displaying {detectTensesInExercise(exercise).length}{" "}
                      grammar topic
                      {detectTensesInExercise(exercise).length > 1 ? "s" : ""}:
                      <span className="font-semibold text-blue-600 dark:text-blue-400 ml-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        {detectTensesInExercise(exercise).join(", ")}
                      </span>
                    </>
                  ) : (
                    "🔍 Comprehensive Grammar Reference Available"
                  )}
                </span>
              </div>
              <Button
               variant="ghost"
                onClick={() => setShowTenseInfo(false)}
                className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 px-3 py-1 rounded-full transition-all duration-200"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Close</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default TenseInfoPanel;

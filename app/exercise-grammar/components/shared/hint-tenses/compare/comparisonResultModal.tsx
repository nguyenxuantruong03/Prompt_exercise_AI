import React, { useState } from "react";
import { generateMultiTensePDF } from "@/components/shared/format/PDF/multi-tenses/multi-tense-generator";
import Modal from "@/components/shared/modals/Modal";
import { formatFieldDataToHtml } from "@/components/shared/format/PDF/json-html/show-data-json-html";
import { ChevronLeft, FilePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import TensesStructure type
import { TensesStructure } from "@/types/grammars/grammar/grammar_type";
import { FormattableValue } from "@/types/formats/show-data-json-html";

// Use TensesStructure directly as the database type
export type TenseDatabase = TensesStructure;

interface FieldMetadata {
  paths: string[];
  label: string;
  icon: string;
  category: string;
}

interface GroupedField extends FieldMetadata {
  key: string;
}

interface TenseItem {
  key: string;
  name: string;
  displayName: string;
  category: "tenses" | "grammar" | "conditionals" | "special";
  cefrLevels: string[];
}

export interface ComparisonAspects {
  // Core grammar content
  definition: boolean;
  usage: boolean;
  structure: boolean;
  examples: boolean;
  mistakes: boolean;
  timeMarkers: boolean;
  tips: boolean;

  // Advanced grammar content
  advancedPatterns: boolean;
  spellingRules: boolean;
  grammarRules: boolean;

  // Cultural and contextual usage
  culturalUsage: boolean;
  practiceExercises: boolean;

  // Learning progression and assessment
  learningProgression: boolean;
  assessment: boolean;

  // Research and corpus data
  research: boolean;
  citations: boolean;

  // Technology and digital learning
  digitalLearning: boolean;

  // System fields
  level: boolean;
  includeAnalysis: boolean;
}

interface ComparisonData {
  name: string;
  category: string;
  cefrLevels: string[];
  data: unknown; // Use unknown to accommodate all possible types from TensesStructure
  key: string;
}

interface ComparisonResultModalProps {
  isOpen: boolean;
  onBack: () => void; // Add back callback
  topics: TenseItem[];
  aspects: ComparisonAspects;
  tenseDatabase: TenseDatabase;
}

const ComparisonResultModal: React.FC<ComparisonResultModalProps> = ({
  isOpen,
  onBack,
  topics,
  aspects,
  tenseDatabase,
}) => {
  const exportByCEFRAsPDF = async () => {
    // Get the tense keys for the specific CEFR level
    generateMultiTensePDF(topics.map((item) => item.key));
  };

  // Helper function to get the actual data from nested structures - now uses dynamic detection
  const getDataField = (topicData: unknown, fieldName: string): unknown => {
    if (!topicData || typeof topicData !== "object") return null;

    // Get the field metadata to find all possible paths
    const fieldMetadata = getFieldMetadata(fieldName);

    // Try each possible path for this field
    for (const path of fieldMetadata.paths) {
      const value = getNestedValue(topicData, path);
      if (value && hasContentValue(value)) {
        return value;
      }
    }

    // Fallback: check direct field access
    const topicObj = topicData as Record<string, unknown>;
    if (topicObj[fieldName] && hasContentValue(topicObj[fieldName])) {
      return topicObj[fieldName];
    }

    return null;
  };

  // Dynamic field detection - analyzes all available fields in the data
  const detectAvailableFields = (
    comparisonData: ComparisonData[]
  ): Set<string> => {
    const availableFields = new Set<string>();

    // Define all possible field mappings with their display names and icons
    const allFieldMappings: Record<
      string,
      { paths: string[]; label: string; icon: string; category: string }
    > = {
      // Core grammar content
      definition: {
        paths: [
          "definition",
          "description",
          "concept",
          "generalTheory",
          "articlesDefinition.concept",
        ],
        label: "Definition & Description",
        icon: "📝",
        category: "core",
      },
      usage: {
        paths: [
          "usage",
          "uses",
          "use",
          "usageOverview",
          "theory.usageOverview",
        ],
        label: "Usage & Application",
        icon: "🎯",
        category: "core",
      },
      structure: {
        paths: [
          "structure",
          "form",
          "structures",
          "rules",
          "forms",
          "theory.structure",
        ],
        label: "Grammar Structure",
        icon: "🏗️",
        category: "core",
      },
      examples: {
        paths: ["examples", "example", "extendedExamples"],
        label: "Examples",
        icon: "💡",
        category: "core",
      },
      mistakes: {
        paths: [
          "commonMistakes",
          "commonErrors",
          "mistakes",
          "comprehensiveErrorAnalysis",
        ],
        label: "Common Mistakes",
        icon: "⚠️",
        category: "core",
      },
      timeMarkers: {
        paths: ["timeMarkers", "timeExpressions"],
        label: "Time Markers",
        icon: "⏰",
        category: "core",
      },
      tips: {
        paths: ["tips", "grammarTips", "notes", "learningTips"],
        label: "Learning Tips",
        icon: "💭",
        category: "core",
      },

      // Advanced grammar content
      advancedPatterns: {
        paths: ["advancedUsagePatterns", "advancedGrammar"],
        label: "Advanced Usage Patterns",
        icon: "🎓",
        category: "advanced",
      },
      spellingRules: {
        paths: ["spellingRules", "pronunciationGuide"],
        label: "Spelling & Pronunciation Rules",
        icon: "🔤",
        category: "advanced",
      },
      grammarRules: {
        paths: ["detailedGrammarRules", "theory.detailedGrammarRules"],
        label: "Detailed Grammar Rules",
        icon: "📐",
        category: "advanced",
      },
      metaInfo: {
        paths: ["metaInformation", "metadata"],
        label: "Meta Information",
        icon: "ℹ️",
        category: "advanced",
      },
      difficulty: {
        paths: ["difficulty", "level", "complexity"],
        label: "Difficulty Level",
        icon: "📊",
        category: "advanced",
      },

      // Cultural and contextual usage
      culturalUsage: {
        paths: [
          "culturalAndContextualUsage",
          "crossCulturalDifferences",
          "registerVariations",
        ],
        label: "Cultural & Contextual Usage",
        icon: "🌍",
        category: "cultural",
      },
      practiceExercises: {
        paths: ["practiceExerciseTypes", "exerciseTypes"],
        label: "Practice Exercise Types",
        icon: "📚",
        category: "cultural",
      },

      // Learning progression and assessment
      learningProgression: {
        paths: [
          "learningProgression",
          "progressiveDifficulty",
          "cefrLevelBreakdown",
        ],
        label: "Learning Progression",
        icon: "📈",
        category: "learning",
      },
      assessment: {
        paths: ["assessmentFramework", "pedagogicalSequencing"],
        label: "Assessment Framework",
        icon: "🎯",
        category: "learning",
      },

      // Research and corpus data
      research: {
        paths: [
          "researchBasedInsights",
          "corpusBasedUsage",
          "crossLinguisticAnalysis",
        ],
        label: "Research-Based Insights",
        icon: "🔬",
        category: "research",
      },
      citations: {
        paths: ["citations", "references"],
        label: "Academic Citations",
        icon: "📰",
        category: "research",
      },

      // Technology and digital learning
      digitalLearning: {
        paths: ["digitalLearningIntegration", "futureDirections"],
        label: "Digital Learning Integration",
        icon: "💻",
        category: "digital",
      },

      // Additional fields that might exist
      etymology: {
        paths: ["etymology", "metaInformation.etymology"],
        label: "Etymology",
        icon: "📜",
        category: "research",
      },
      frequency: {
        paths: ["frequency", "metaInformation.frequency"],
        label: "Usage Frequency",
        icon: "📊",
        category: "advanced",
      },
      register: {
        paths: ["register", "metaInformation.register"],
        label: "Register & Style",
        icon: "🎭",
        category: "cultural",
      },
      dialects: {
        paths: ["dialects", "metaInformation.dialects"],
        label: "Dialect Variations",
        icon: "🗺️",
        category: "cultural",
      },
      cognitiveDifficulty: {
        paths: ["cognitiveDifficulty", "metaInformation.cognitiveDifficulty"],
        label: "Cognitive Difficulty",
        icon: "🧠",
        category: "learning",
      },
      historicalDevelopment: {
        paths: [
          "historicalDevelopment",
          "metaInformation.historicalDevelopment",
        ],
        label: "Historical Development",
        icon: "🏛️",
        category: "research",
      },
    };

    // Check each topic's data for available fields
    // A field is considered "available" if at least one topic has data for it
    for (const [fieldKey, fieldConfig] of Object.entries(allFieldMappings)) {
      const hasDataInAnyTopic = comparisonData.some((topic) =>
        fieldConfig.paths.some((path) => {
          const value = getNestedValue(topic.data, path);
          return value && hasContentValue(value);
        })
      );

      if (hasDataInAnyTopic) {
        availableFields.add(fieldKey);
      }
    }

    return availableFields;
  };

  // Helper function to get nested values using dot notation
  const getNestedValue = (obj: unknown, path: string): unknown => {
    if (!obj || typeof obj !== "object") return null;

    const keys = path.split(".");
    let current: unknown = obj;

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return null;
      }
    }

    return current;
  };

  // Helper function to check if a value has meaningful content
  const hasContentValue = (value: unknown): boolean => {
    if (!value) return false;
    if (typeof value === "string") return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.keys(value).length > 0;
    return true;
  };

  // Get field metadata for dynamic rendering
  const getFieldMetadata = (fieldKey: string): FieldMetadata => {
    const fieldMappings: Record<string, FieldMetadata> = {
      definition: {
        paths: [
          "definition",
          "description",
          "concept",
          "generalTheory",
          "articlesDefinition.concept",
        ],
        label: "Definition & Description",
        icon: "📝",
        category: "core",
      },
      usage: {
        paths: [
          "usage",
          "uses",
          "use",
          "usageOverview",
          "theory.usageOverview",
        ],
        label: "Usage & Application",
        icon: "🎯",
        category: "core",
      },
      structure: {
        paths: [
          "structure",
          "form",
          "structures",
          "rules",
          "forms",
          "theory.structure",
        ],
        label: "Grammar Structure",
        icon: "🏗️",
        category: "core",
      },
      examples: {
        paths: ["examples", "example", "extendedExamples"],
        label: "Examples",
        icon: "💡",
        category: "core",
      },
      mistakes: {
        paths: [
          "commonMistakes",
          "commonErrors",
          "mistakes",
          "comprehensiveErrorAnalysis",
        ],
        label: "Common Mistakes",
        icon: "⚠️",
        category: "core",
      },
      timeMarkers: {
        paths: ["timeMarkers", "timeExpressions"],
        label: "Time Markers",
        icon: "⏰",
        category: "core",
      },
      tips: {
        paths: ["tips", "grammarTips", "notes", "learningTips"],
        label: "Learning Tips",
        icon: "💭",
        category: "core",
      },
      advancedPatterns: {
        paths: ["advancedUsagePatterns", "advancedGrammar"],
        label: "Advanced Usage Patterns",
        icon: "🎓",
        category: "advanced",
      },
      spellingRules: {
        paths: ["spellingRules", "pronunciationGuide"],
        label: "Spelling & Pronunciation Rules",
        icon: "🔤",
        category: "advanced",
      },
      grammarRules: {
        paths: ["detailedGrammarRules", "theory.detailedGrammarRules"],
        label: "Detailed Grammar Rules",
        icon: "📐",
        category: "advanced",
      },
      metaInfo: {
        paths: ["metaInformation", "metadata"],
        label: "Meta Information",
        icon: "ℹ️",
        category: "advanced",
      },
      difficulty: {
        paths: ["difficulty", "level", "complexity"],
        label: "Difficulty Level",
        icon: "📊",
        category: "advanced",
      },
      culturalUsage: {
        paths: [
          "culturalAndContextualUsage",
          "crossCulturalDifferences",
          "registerVariations",
        ],
        label: "Cultural & Contextual Usage",
        icon: "🌍",
        category: "cultural",
      },
      practiceExercises: {
        paths: ["practiceExerciseTypes", "exerciseTypes"],
        label: "Practice Exercise Types",
        icon: "📚",
        category: "cultural",
      },
      learningProgression: {
        paths: [
          "learningProgression",
          "progressiveDifficulty",
          "cefrLevelBreakdown",
        ],
        label: "Learning Progression",
        icon: "📈",
        category: "learning",
      },
      assessment: {
        paths: ["assessmentFramework", "pedagogicalSequencing"],
        label: "Assessment Framework",
        icon: "🎯",
        category: "learning",
      },
      research: {
        paths: [
          "researchBasedInsights",
          "corpusBasedUsage",
          "crossLinguisticAnalysis",
        ],
        label: "Research-Based Insights",
        icon: "🔬",
        category: "research",
      },
      citations: {
        paths: ["citations", "references"],
        label: "Academic Citations",
        icon: "📰",
        category: "research",
      },
      digitalLearning: {
        paths: ["digitalLearningIntegration", "futureDirections"],
        label: "Digital Learning Integration",
        icon: "💻",
        category: "digital",
      },
      etymology: {
        paths: ["etymology", "metaInformation.etymology"],
        label: "Etymology",
        icon: "📜",
        category: "research",
      },
      frequency: {
        paths: ["frequency", "metaInformation.frequency"],
        label: "Usage Frequency",
        icon: "📊",
        category: "advanced",
      },
      register: {
        paths: ["register", "metaInformation.register"],
        label: "Register & Style",
        icon: "🎭",
        category: "cultural",
      },
      dialects: {
        paths: ["dialects", "metaInformation.dialects"],
        label: "Dialect Variations",
        icon: "🗺️",
        category: "cultural",
      },
      cognitiveDifficulty: {
        paths: ["cognitiveDifficulty", "metaInformation.cognitiveDifficulty"],
        label: "Cognitive Difficulty",
        icon: "🧠",
        category: "learning",
      },
      historicalDevelopment: {
        paths: [
          "historicalDevelopment",
          "metaInformation.historicalDevelopment",
        ],
        label: "Historical Development",
        icon: "🏛️",
        category: "research",
      },
    };

    return (
      fieldMappings[fieldKey] || {
        paths: [fieldKey],
        label: fieldKey,
        icon: "📄",
        category: "other",
      }
    );
  };

  const comparisonData: ComparisonData[] = topics.map((item) => {
    const tenseData = tenseDatabase[item.key as keyof typeof tenseDatabase];
    return {
      name: item.displayName,
      category: item.category,
      cefrLevels: item.cefrLevels,
      data: tenseData,
      key: item.key,
    };
  });

  // Detect which fields are actually available in the data
  const availableFields = detectAvailableFields(comparisonData);

  // Group available fields by category for organized display
  const groupedFields = Array.from(availableFields).reduce(
    (groups, fieldKey) => {
      const metadata = getFieldMetadata(fieldKey);
      if (!groups[metadata.category]) {
        groups[metadata.category] = [];
      }
      groups[metadata.category].push({ key: fieldKey, ...metadata });
      return groups;
    },
    {} as Record<string, GroupedField[]>
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tenses":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "grammar":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "conditionals":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "special":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  // Dynamic field rendering function
  const renderDynamicField = (
    fieldKey: string,
    fieldMetadata: FieldMetadata
  ) => {
    // Check if this field should be displayed according to aspects
    if (fieldKey in aspects && !aspects[fieldKey as keyof ComparisonAspects]) {
      return null;
    }

    // Determine grid columns based on number of topics
    const getGridCols = () => {
      const topicCount = comparisonData.length;
      switch (topicCount) {
        case 1:
          return "grid-cols-1";
        case 2:
          return "grid-cols-1 md:grid-cols-2";
        case 3:
          return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
        default:
          // For 4 or more topics, use responsive grid
          return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      }
    };

    return (
      <div key={fieldKey}>
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
          {fieldMetadata.icon} {fieldMetadata.label}
        </h5>
        <div className={`grid gap-4 ${getGridCols()}`}>
          {comparisonData.map((topic, index) => {
            const fieldData = getDataField(topic.data, fieldKey);

            return (
              <div
                key={`${topic.key}-${fieldKey}`}
                className={`md:sticky  md:top-4 h-fit max-h-[80vh] flex flex-col rounded-lg border transition-all duration-200 hover:shadow-md ${getCardBackground(
                  index
                )}`}
              >
                <div className="flex items-center gap-2 mb-2 p-4 pb-2 flex-shrink-0">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      topic.category
                    )}`}
                  >
                    {topic.category}
                  </span>
                  <h6 className="font-medium text-gray-800 dark:text-gray-200">
                    {topic.name}
                  </h6>
                </div>
                <div
                  className="text-sm text-gray-600 dark:text-gray-300 overflow-y-auto flex-grow px-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500"
                  style={{
                    scrollBehavior: "smooth",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {fieldData ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formatFieldDataToHtml(
                          fieldData as FormattableValue
                        ),
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-24 text-center">
                      <div className="text-gray-400 dark:text-gray-500">
                        <div className="text-2xl mb-2">📝</div>
                        <div className="text-xs font-medium">
                          Data not available
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-600 mt-1">
                          This topic doesn&apos;t have{" "}
                          {fieldMetadata.label.toLowerCase()} information
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  };

  // Define getCardBackground function at component level
  const getCardBackground = (idx: number) => {
    const colors = [
      "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800",
      "bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800",
      "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800",
      "bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800",
      "bg-pink-50 dark:bg-pink-900/10 border-pink-200 dark:border-pink-800",
      "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800",
    ];
    return colors[idx % colors.length];
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onBack}
      title="📊 Grammar Topics Detailed Comparison"
      subtitle={`Comprehensive analysis of ${topics.length} selected topic${
        topics.length > 1 ? "s" : ""
      } • ${
        topics.length === 1
          ? `${comparisonData.map((topic) => topic.name).join(", ")}`
          : topics.length === 2
          ? `${comparisonData.map((topic) => topic.name).join(", ")}`
          : topics.length === 3
          ? `${comparisonData.map((topic) => topic.name).join(", ")}`
          : "Responsive multi-column layout"
      }`}
      maxWidth="max-w-7xl"
      headerLayoutMode="classic"
      maxHeightNonFooter="max-h-[calc(95vh-220px)]"
      classCustomHeader="flex items-center justify-between"
      footer={
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            {onBack && (
              <Button
                onClick={onBack}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />{" "}
                <span className="hidden md:inline">New Comparison</span>
              </Button>
            )}
            <Button
              onClick={exportByCEFRAsPDF}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <FilePlus className="w-5 h-5" />{" "}
              <span className="hidden md:inline">Export PDF</span>
            </Button>
          </div>
          <Button
            onClick={onBack}
            className="px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Quick Comparison Matrix */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            📋 Quick Comparison Matrix
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left py-2 px-3 font-medium text-gray-700 dark:text-gray-300">
                    Topic
                  </th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700 dark:text-gray-300">
                    CEFR Levels
                  </th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700 dark:text-gray-300">
                    Complexity
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((topic, index) => (
                  <tr
                    key={topic.key}
                    className={
                      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""
                    }
                  >
                    <td className="py-2 px-3 font-medium">{topic.name}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(
                          topic.category
                        )}`}
                      >
                        {topic.category}
                      </span>
                    </td>
                    <td className="py-2 px-3">{topic.cefrLevels.join(", ")}</td>
                    <td className="py-2 px-3">
                      <div className="flex space-x-1">
                        {Array.from({
                          length: Math.max(
                            ...topic.cefrLevels.map(
                              (level) =>
                                ["A1", "A2", "B1", "B2", "C1", "C2"].indexOf(
                                  level
                                ) + 1
                            )
                          ),
                        }).map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                          ></div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Comparison Sections - Only shows fields that contain data */}
        <div className="space-y-8">
          {/* Display available fields grouped by category */}
          {Object.entries(groupedFields)
            .sort(([categoryA], [categoryB]) => {
              // Order categories for better UX
              const categoryOrder = [
                "core",
                "advanced",
                "cultural",
                "learning",
                "research",
                "digital",
                "other",
              ];
              return (
                categoryOrder.indexOf(categoryA) -
                categoryOrder.indexOf(categoryB)
              );
            })
            .map(([category, fields]) => (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 flex-1"></div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full capitalize">
                    {category === "core"
                      ? "📚 Core Content"
                      : category === "advanced"
                      ? "🎓 Advanced Grammar"
                      : category === "cultural"
                      ? "� Cultural Context"
                      : category === "learning"
                      ? "📈 Learning & Assessment"
                      : category === "research"
                      ? "� Research & Citations"
                      : category === "digital"
                      ? "💻 Digital Learning"
                      : "📄 Additional Information"}
                  </span>
                  <div className="h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 flex-1"></div>
                </div>

                {/* Render fields in this category */}
                {fields.map((field) => renderDynamicField(field.key, field))}
              </div>
            ))}

          {/* Show data availability summary */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              📊 Data Extraction Summary
            </h6>
            <p className="text-sm text-blue-600 dark:text-blue-300 mb-3">
              Successfully extracted <strong>{availableFields.size}</strong>{" "}
              data fields from the selected topics. Sections show available data
              with &quot;Data not available&quot; for missing information.
            </p>

            {/* Data coverage for each topic */}
            <div className="space-y-2 mb-3">
              <h6 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Data Coverage by Topic:
              </h6>
              {comparisonData.map((topic) => {
                const topicFieldCount = Array.from(availableFields).filter(
                  (fieldKey) => {
                    const fieldMetadata = getFieldMetadata(fieldKey);
                    return fieldMetadata.paths.some((path) => {
                      const value = getNestedValue(topic.data, path)
                      return value && hasContentValue(value);
                    })
                  }
                ).length;
                const coveragePercentage = Math.round(
                  (topicFieldCount / availableFields.size) * 100
                );

                return (
                  <div
                    key={topic.key}
                    className="flex items-center justify-between bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded"
                  >
                    <span className="text-sm text-blue-700 dark:text-blue-300">
                      {topic.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-blue-600 dark:text-blue-400">
                        {topicFieldCount}/{availableFields.size} fields (
                        {coveragePercentage}%)
                      </span>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 transition-all duration-300"
                          style={{ width: `${coveragePercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {Array.from(availableFields).map((field) => (
                <span
                  key={field}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs rounded"
                >
                  {getFieldMetadata(field).label}
                </span>
              ))}
            </div>
          </div>

          {aspects.level && (
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                📈 CEFR Level Comparison
              </h5>
              <div
                className={`grid gap-4 ${
                  comparisonData.length === 1
                    ? "grid-cols-1"
                    : comparisonData.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : comparisonData.length === 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {comparisonData.map((topic, index) => {
                  const getCardBackground = (idx: number) => {
                    const colors = [
                      "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800",
                      "bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800",
                      "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800",
                      "bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800",
                      "bg-pink-50 dark:bg-pink-900/10 border-pink-200 dark:border-pink-800",
                      "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800",
                    ];
                    return colors[idx % colors.length];
                  };

                  return (
                    <div
                      key={topic.key}
                      className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${getCardBackground(
                        index
                      )}`}
                    >
                      <div className="flex items-center justify-between">
                        <h6 className="font-medium text-gray-800 dark:text-gray-200">
                          {topic.name}
                        </h6>
                        <div className="flex gap-1 flex-wrap">
                          {topic.cefrLevels.map((level) => (
                            <span
                              key={level}
                              className="px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded text-xs font-medium"
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Analysis Section */}
        {aspects.includeAnalysis && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              🔍 Comparison Analysis
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Similarities:
                </h5>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {comparisonData.length > 1 &&
                    comparisonData[0].category ===
                      comparisonData[1].category && (
                      <li>
                        • Both belong to the same category:{" "}
                        {comparisonData[0].category}
                      </li>
                    )}
                  {comparisonData.some((topic) =>
                    comparisonData.some(
                      (otherTopic) =>
                        topic.key !== otherTopic.key &&
                        topic.cefrLevels.some((level) =>
                          otherTopic.cefrLevels.includes(level)
                        )
                    )
                  ) && <li>• Share common CEFR levels</li>}
                  <li>• All are essential grammar concepts</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Key Differences:
                </h5>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {new Set(comparisonData.map((topic) => topic.category)).size >
                    1 && (
                    <li>
                      • Different categories:{" "}
                      {Array.from(
                        new Set(comparisonData.map((topic) => topic.category))
                      ).join(", ")}
                    </li>
                  )}
                  <li>• Varying complexity levels</li>
                  <li>• Different usage contexts</li>
                  <li>• Distinct structural patterns</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ComparisonResultModal;

import { JSX } from "react";
import { ComparisonAspects, TenseItemCompare } from "../compareTensesModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ManualTabProps {
  comparisonAspects: ComparisonAspects;
  handleAspectChange: (aspect: keyof ComparisonAspects) => void;
  selectAllAspects: () => void;
  clearAllAspects: () => void;
  selectedTopics: {
    topic1: string;
    topic2: string;
    topic3: string;
  };
  handleTopicChange: (
    topicKey: "topic1" | "topic2" | "topic3",
    value: string
  ) => void;
  renderCategoryOptions: (filteredTenses: TenseItemCompare[]) => JSX.Element[];
  getFilteredOptions: (
    currentTopic: "topic1" | "topic2" | "topic3"
  ) => TenseItemCompare[];
  showThirdTopic: boolean | undefined;
  setShowThirdTopic: (value: boolean) => void;
  compareSelectedTopics: () => void;
  setSelectedTopics: React.Dispatch<
    React.SetStateAction<{
      topic1: string;
      topic2: string;
      topic3: string;
    }>
  >;
}

const ManualTab: React.FC<ManualTabProps> = ({
  comparisonAspects,
  handleAspectChange,
  selectAllAspects,
  clearAllAspects,
  selectedTopics,
  handleTopicChange,
  renderCategoryOptions,
  getFilteredOptions,
  showThirdTopic,
  setShowThirdTopic,
  compareSelectedTopics,
  setSelectedTopics,
}) => {
  // Helper function to get category statistics
  const getCategoryStats = () => {
    const allTopics = getFilteredOptions("topic1");
    const stats: Record<string, number> = {};

    allTopics.forEach((topic) => {
      stats[topic.category] = (stats[topic.category] || 0) + 1;
    });

    return stats;
  };

  // Helper function to get aspect display info
  const getAspectInfo = (aspect: string) => {
    const aspectMap: Record<
      string,
      { label: string; icon: string; description?: string }
    > = {
      definition: {
        label: "Definition",
        icon: "📝",
        description: "Core definition and concept",
      },
      usage: { label: "Usage", icon: "🎯", description: "How and when to use" },
      structure: {
        label: "Structure",
        icon: "🏗️",
        description: "Grammar structure and formation",
      },
      examples: {
        label: "Examples",
        icon: "💡",
        description: "Practical examples and sentences",
      },
      mistakes: {
        label: "Common Mistakes",
        icon: "⚠️",
        description: "Typical errors to avoid",
      },
      timeMarkers: {
        label: "Time Markers",
        icon: "⏰",
        description: "Time expressions and signals",
      },
      tips: {
        label: "Learning Tips",
        icon: "💭",
        description: "Study suggestions and mnemonics",
      },
      level: {
        label: "CEFR Level",
        icon: "📈",
        description: "Difficulty level classification",
      },
      includeAnalysis: {
        label: "Include Analysis",
        icon: "📊",
        description: "Detailed analysis and breakdown",
      },
      advancedPatterns: {
        label: "Advanced Patterns",
        icon: "🔬",
        description: "Complex usage patterns",
      },
      spellingRules: {
        label: "Spelling Rules",
        icon: "📚",
        description: "Spelling conventions and rules",
      },
      grammarRules: {
        label: "Grammar Rules",
        icon: "📐",
        description: "Formal grammar rules",
      },
      culturalUsage: {
        label: "Cultural Usage",
        icon: "🌍",
        description: "Cultural context and usage",
      },
      practiceExercises: {
        label: "Practice Exercises",
        icon: "✏️",
        description: "Learning activities",
      },
      learningProgression: {
        label: "Learning Progression",
        icon: "📈",
        description: "Step-by-step learning path",
      },
      assessment: {
        label: "Assessment",
        icon: "🎓",
        description: "Testing and evaluation",
      },
      research: {
        label: "Research",
        icon: "🔍",
        description: "Academic research and studies",
      },
      citations: {
        label: "Citations",
        icon: "📖",
        description: "References and sources",
      },
      digitalLearning: {
        label: "Digital Learning",
        icon: "💻",
        description: "Technology-enhanced learning",
      },
    };

    return aspectMap[aspect] || { label: aspect, icon: "📄" };
  };

  // Get category stats
  const categoryStats = getCategoryStats();

  // Filter aspects to only show those that are available in the comparison
  const availableAspects = Object.entries(comparisonAspects).filter(
    ([aspect]) => {
      // Always show core aspects
      const coreAspects = [
        "definition",
        "usage",
        "structure",
        "examples",
        "level",
        "includeAnalysis",
      ];
      if (coreAspects.includes(aspect)) return true;

      // For other aspects, we'll show them but they might not have data in all topics
      return true;
    }
  );

  return (
    <div className="space-y-6">
      {/* Statistics and Info Banner */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
              📚 Grammar Topics Available
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {getFilteredOptions("topic1").length} topics available from
              data_grammar database
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {getFilteredOptions("topic1").length}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Total Topics
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div
              key={category}
              className="flex items-center justify-between bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded"
            >
              <span className="capitalize text-gray-600 dark:text-gray-400">
                {category === "tenses" && "⏰"}
                {category === "grammar" && "📝"}
                {category === "conditionals" && "🔀"}
                {category === "special" && "⭐"}
                {category}
              </span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Aspects Section */}
      <div className="mb-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600">
        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
          📊 Comparison Aspects
          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            Select aspects to compare
          </span>
        </h5>

        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
            💡 <strong>About Comparison Aspects:</strong>
          </p>
          <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>
              • <strong>Core aspects</strong> (Definition, Usage, Structure,
              Examples) are available for most topics
            </li>
            <li>
              • <strong>Specialized aspects</strong> (Time Markers, Advanced
              Patterns) may not be available for all topics
            </li>
            <li>
              • The comparison will show &quot;Data not available&quot; for
              missing aspects
            </li>
            <li>
              • Use <strong>&quot;Smart Select&quot;</strong> to choose commonly
              available aspects
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {availableAspects.map(([aspect, checked]) => {
            const aspectInfo = getAspectInfo(aspect);
            return (
              <label
                key={aspect}
                className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors cursor-pointer group"
              >
                <Input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    handleAspectChange(aspect as keyof ComparisonAspects)
                  }
                  className="rounded text-blue-600 w-4 h-4 mt-0.5 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{aspectInfo.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      {aspectInfo.label}
                    </span>
                  </div>
                  {aspectInfo.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                      {aspectInfo.description}
                    </p>
                  )}
                </div>
              </label>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            onClick={selectAllAspects}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            ✅ Select All
          </Button>
          <Button
            onClick={clearAllAspects}
            className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            ❌ Clear All
          </Button>
          <Button
            onClick={() => {
              // Smart selection - enable common aspects
              const smartSelection = {
                definition: true,
                usage: true,
                structure: true,
                examples: true,
                mistakes: true,
                tips: true,
                grammarRules: true,
                level: true,
                includeAnalysis: true,
                // Disable less common aspects
                timeMarkers: false,
                advancedPatterns: false,
                spellingRules: false,
                culturalUsage: false,
                practiceExercises: false,
                learningProgression: false,
                assessment: false,
                research: false,
                citations: false,
                digitalLearning: false,
              };

              Object.entries(smartSelection).forEach(([aspect, value]) => {
                if (
                  comparisonAspects[aspect as keyof ComparisonAspects] !== value
                ) {
                  handleAspectChange(aspect as keyof ComparisonAspects);
                }
              });
            }}
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            🎯 Smart Select
          </Button>
        </div>
      </div>

      {/* Topic Selection Section */}
      <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-lg">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center gap-2">
          🎛️ Manual Topic Selection
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </span>
              Select First Topic:
            </label>
            <select
              value={selectedTopics.topic1}
              onChange={(e) => handleTopicChange("topic1", e.target.value)}
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
            >
              <option value="">Choose a topic...</option>
              {renderCategoryOptions(getFilteredOptions("topic1"))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </span>
              Select Second Topic:
            </label>
            <select
              value={selectedTopics.topic2}
              onChange={(e) => handleTopicChange("topic2", e.target.value)}
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-green-400"
            >
              <option value="">Choose a topic...</option>
              {renderCategoryOptions(getFilteredOptions("topic2"))}
            </select>
          </div>

          {showThirdTopic && (
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                Select Third Topic (Optional):
              </label>
              <select
                value={selectedTopics.topic3}
                onChange={(e) => handleTopicChange("topic3", e.target.value)}
                className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-400"
              >
                <option value="">Choose a topic...</option>
                {renderCategoryOptions(getFilteredOptions("topic3"))}
              </select>
            </div>
          )}
        </div>

        {/* Options Section */}
        <div className="flex flex-wrap items-center gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <label className="flex items-center gap-3 text-sm cursor-pointer group">
            <Input
              type="checkbox"
              checked={showThirdTopic}
              onChange={(e) => {
                setShowThirdTopic(e.target.checked);
                if (!e.target.checked) {
                  setSelectedTopics((prev) => ({ ...prev, topic3: "" }));
                }
              }}
              className="rounded text-blue-600 w-4 h-4 transition-colors"
            />
            <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              ➕ Add third topic for comparison
            </span>
          </label>
        </div>

        {/* Manual Selection Actions */}
        <div className="flex justify-end">
          <Button
            onClick={compareSelectedTopics}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
          >
            🔍 Compare Selected Topics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManualTab;

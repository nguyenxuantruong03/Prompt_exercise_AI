import { CategoryType, TenseItemCompare } from "./compareTensesModal";
import { ComparisonAspects } from "./comparisonResultModal";
import { CEFRLevel } from "@/types/grammars/grammars_type";
import QuickTab from "./tabs/quick";
import ManualTab from "./tabs/manual";
import AdvanceTab from "./tabs/advanced";
import { Button } from "@/components/ui/button";

type TabKey = "quick" | "manual" | "advanced";

interface ContentModalProps {
  setActiveTab: (tab: TabKey) => void;
  activeTab: TabKey;
  onClose: () => void;
  onShowComparisonResult: (
    topics: TenseItemCompare[],
    aspects: ComparisonAspects
  ) => void;
  comparisonAspects: ComparisonAspects;
  availableTenses: TenseItemCompare[];
  bookmarkedTenses: string[];
  setSelectedTopics: React.Dispatch<
    React.SetStateAction<{
      topic1: string;
      topic2: string;
      topic3: string;
    }>
  >;
  selectedTopics: {
    topic1: string;
    topic2: string;
    topic3: string;
  };
  setComparisonAspects: React.Dispatch<React.SetStateAction<ComparisonAspects>>;
  showThirdTopic?: boolean;
  hintsPerPage: number;
  currentHintPage: number;
  setShowThirdTopic: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentHintPage: React.Dispatch<React.SetStateAction<number>>;
  setHintsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const ContentModal: React.FC<ContentModalProps> = ({
  setActiveTab,
  activeTab,
  onClose,
  onShowComparisonResult,
  comparisonAspects,
  availableTenses,
  bookmarkedTenses,
  setSelectedTopics,
  selectedTopics,
  setComparisonAspects,
  showThirdTopic,
  hintsPerPage,
  currentHintPage,
  setShowThirdTopic,
  setCurrentHintPage,
  setHintsPerPage,
}) => {
  // CEFR level data for advanced hints
  const cefrLevels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const cefrLevelData = cefrLevels.map((level) => ({
    level,
    count: availableTenses.filter((item) => item.cefrLevels.includes(level))
      .length,
    topics: availableTenses.filter((item) => item.cefrLevels.includes(level)),
  }));

  const handleTopicChange = (
    topicKey: "topic1" | "topic2" | "topic3",
    value: string
  ) => {
    setSelectedTopics((prev) => ({ ...prev, [topicKey]: value }));
  };

  // Category counts for quick options
  const categoryData = ["tenses", "grammar", "conditionals", "special"].map(
    (category) => ({
      category,
      count: availableTenses.filter((item) => item.category === category)
        .length,
      icon:
        category === "tenses"
          ? "⏰"
          : category === "grammar"
          ? "📝"
          : category === "conditionals"
          ? "🔀"
          : "⭐",
    })
  );

  const compareByCategoryType = (category: string) => {
    const categoryTopics = availableTenses.filter(
      (item) => item.category === category
    );
    if (categoryTopics.length < 2) {
      alert(`Need at least 2 ${category} topics to compare`);
      return;
    }

    const selected = categoryTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    onClose();
    onShowComparisonResult(selected, comparisonAspects);
  };

  const compareRandomSelection = () => {
    if (availableTenses.length < 2) {
      alert("Need at least 2 tenses to compare");
      return;
    }

    const selected = availableTenses
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    onClose();
    onShowComparisonResult(selected, comparisonAspects);
  };

  const compareBySameLevel = () => {
    // Get all CEFR levels that have at least 2 topics
    const levelCounts = cefrLevels
      .map((level) => ({
        level,
        topics: availableTenses.filter((item) =>
          item.cefrLevels.includes(level)
        ),
        primaryTopics: availableTenses.filter(
          (item) => item.cefrLevels[0] === level
        ),
      }))
      .filter((levelData) => levelData.topics.length >= 2);

    if (levelCounts.length === 0) {
      alert("Need at least 2 topics at the same CEFR level to compare");
      return;
    }

    // Randomly select a CEFR level that has enough topics
    const randomLevelData =
      levelCounts[Math.floor(Math.random() * levelCounts.length)];

    // Prioritize topics where this level is their primary level
    const topicsToUse =
      randomLevelData.primaryTopics.length >= 2
        ? randomLevelData.primaryTopics
        : randomLevelData.topics;

    // Select 2-3 random topics for comparison
    const selected = topicsToUse
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(3, topicsToUse.length));

    onClose();
    onShowComparisonResult(selected, comparisonAspects);
  };

  const compareSelectedTopics = () => {
    const { topic1, topic2, topic3 } = selectedTopics;

    if (!topic1 || !topic2) {
      alert("Please select at least two topics to compare");
      return;
    }

    const selectedKeys = [topic1, topic2];
    if (topic3) selectedKeys.push(topic3);

    const selectedTopicItems = availableTenses.filter((item) =>
      selectedKeys.includes(item.key)
    );

    // Check if no aspects are selected, then select all by default
    const aspectsSelected = Object.values(comparisonAspects).some(
      (value) => value === true
    );
    if (!aspectsSelected) {
      selectAllAspects();
    }

    onClose();
    onShowComparisonResult(selectedTopicItems, comparisonAspects);
  };

  const executeAdvancedHint = (hint: {
    title: string;
    description: string;
    topics: TenseItemCompare[];
    reason: string;
    difficulty: string;
  }) => {
    onClose();
    onShowComparisonResult(hint.topics, comparisonAspects);
  };

  const compareByLevelRange = (minLevel: string, maxLevel: string) => {
    const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const minIndex = levelOrder.indexOf(minLevel);
    const maxIndex = levelOrder.indexOf(maxLevel);

    const levelRangeTopics = availableTenses.filter((item) =>
      item.cefrLevels.some((level) => {
        const levelIndex = levelOrder.indexOf(level);
        return levelIndex >= minIndex && levelIndex <= maxIndex;
      })
    );

    if (levelRangeTopics.length < 2) {
      alert(
        `Need at least 2 topics in ${minLevel}-${maxLevel} range to compare`
      );
      return;
    }

    const selected = levelRangeTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    onClose();
    onShowComparisonResult(selected, comparisonAspects);
  };

  // Filter out already selected options
  const getFilteredOptions = (currentTopic: "topic1" | "topic2" | "topic3") => {
    const selectedValues = Object.values(selectedTopics).filter(
      (val) => val !== ""
    );
    return availableTenses.filter(
      (item) =>
        item.key === selectedTopics[currentTopic] ||
        !selectedValues.includes(item.key)
    );
  };

  const renderCategoryOptions = (filteredTenses: TenseItemCompare[]) => {
    const grouped = filteredTenses.reduce((groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
      return groups;
    }, {} as Record<CategoryType, TenseItemCompare[]>);

    return (Object.keys(grouped) as CategoryType[]).map((category) => (
      <optgroup
        key={category}
        label={`${category.charAt(0).toUpperCase() + category.slice(1)} (${
          grouped[category].length
        })`}
      >
        {grouped[category].map((item) => (
          <option key={item.key} value={item.key}>
            {item.displayName} ({item.cefrLevels.join(", ")})
          </option>
        ))}
      </optgroup>
    ));
  };

  const handleAspectChange = (aspect: keyof ComparisonAspects) => {
    setComparisonAspects((prev) => ({ ...prev, [aspect]: !prev[aspect] }));
  };

  const selectAllAspects = () => {
    // Select all available aspects
    setComparisonAspects({
      definition: true,
      usage: true,
      structure: true,
      examples: true,
      mistakes: true,
      timeMarkers: true,
      tips: true,
      advancedPatterns: true,
      spellingRules: true,
      grammarRules: true,
      culturalUsage: true,
      practiceExercises: true,
      learningProgression: true,
      assessment: true,
      research: true,
      citations: true,
      digitalLearning: true,
      level: true,
      includeAnalysis: true,
    });
  };

  const clearAllAspects = () => {
    // Clear all aspects but keep essential ones
    setComparisonAspects({
      definition: false,
      usage: false,
      structure: false,
      examples: false,
      mistakes: false,
      timeMarkers: false,
      tips: false,
      advancedPatterns: false,
      spellingRules: false,
      grammarRules: false,
      culturalUsage: false,
      practiceExercises: false,
      learningProgression: false,
      assessment: false,
      research: false,
      citations: false,
      digitalLearning: false,
      level: true, // Keep level as it's essential
      includeAnalysis: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 gap-2">
        {[
          { key: "quick", label: "Quick Compare", icon: "🚀" },
          { key: "manual", label: "Manual Selection", icon: "⚙️" },
          { key: "advanced", label: "Advanced Hints", icon: "💡" },
        ].map((tab) => (
          <Button
            variant="outline"
            key={tab.key}
            onClick={() => setActiveTab(tab.key as TabKey)}
            className={`flex-1 h-full px-4 py-3 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2  ${
              activeTab === tab.key
                ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </Button>
        ))}
      </div>

      {/* Quick Compare Tab */}
      {activeTab === "quick" && (
        <QuickTab
          categoryData={categoryData}
          compareByCategoryType={compareByCategoryType}
          cefrLevelData={cefrLevelData}
          onClose={onClose}
          onShowComparisonResult={onShowComparisonResult}
          comparisonAspects={comparisonAspects}
          compareByLevelRange={compareByLevelRange}
          compareRandomSelection={compareRandomSelection}
          compareBySameLevel={compareBySameLevel}
          availableTenses={availableTenses}
          bookmarkedTenses={bookmarkedTenses}
        />
      )}

      {/* Manual Selection Tab */}
      {activeTab === "manual" && (
        <ManualTab
          comparisonAspects={comparisonAspects}
          handleAspectChange={handleAspectChange}
          selectAllAspects={selectAllAspects}
          clearAllAspects={clearAllAspects}
          selectedTopics={selectedTopics}
          handleTopicChange={handleTopicChange}
          renderCategoryOptions={renderCategoryOptions}
          getFilteredOptions={getFilteredOptions}
          showThirdTopic={showThirdTopic}
          setShowThirdTopic={setShowThirdTopic}
          compareSelectedTopics={compareSelectedTopics}
          setSelectedTopics={setSelectedTopics}
        />
      )}

      {/* Advanced Hints Tab */}
      {activeTab === "advanced" && (
        <AdvanceTab
          availableTenses={availableTenses}
          bookmarkedTenses={bookmarkedTenses}
          currentHintPage={currentHintPage}
          hintsPerPage={hintsPerPage}
          executeAdvancedHint={executeAdvancedHint}
          setCurrentHintPage={setCurrentHintPage}
          setHintsPerPage={setHintsPerPage}
        />
      )}

      {/* Bottom Actions */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {availableTenses.length} topics available •{" "}
          </div>
          <Button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-gray-600 dark:text-gray-400 transition-colors"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;

    import { Button } from "@/components/ui/button";
import { ComparisonAspects, TenseItemCompare } from "../compareTensesModal";

interface QuickTabProps {
  categoryData: { category: string; icon: string; count: number }[];
  compareByCategoryType: (category: string) => void;
  cefrLevelData: { level: string; count: number; topics: TenseItemCompare[] }[];
  onClose: () => void;
  onShowComparisonResult: (
    topics: TenseItemCompare[],
    aspects: ComparisonAspects
  ) => void;
  comparisonAspects: ComparisonAspects;
  compareByLevelRange: (start: string, end: string) => void;
  compareRandomSelection: () => void;
  compareBySameLevel: () => void;
  availableTenses: TenseItemCompare[];
  bookmarkedTenses: string[];
}

// Configuration types
interface ButtonConfig {
  key: string;
  icon: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  hoverFrom: string;
  hoverTo: string;
  borderColor: string;
  iconColor: string;
  onClick: () => void;
}

interface SectionConfig {
  title: string;
  gridCols: string;
  buttons: ButtonConfig[];
}

const QuickTab: React.FC<QuickTabProps> = ({
  categoryData,
  compareByCategoryType,
  cefrLevelData,
  onClose,
  onShowComparisonResult,
  comparisonAspects,
  compareByLevelRange,
  compareRandomSelection,
  compareBySameLevel,
  availableTenses,
  bookmarkedTenses
}) => {
  
  // Helper function to execute comparison
  const executeComparison = (
    filter: (topics: TenseItemCompare[]) => TenseItemCompare[], 
    fallback?: () => void
  ) => {
    const filtered = filter(availableTenses);
    if (filtered.length >= 2) {
      const selected = filtered
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(3, filtered.length));
      onClose();
      onShowComparisonResult(selected, comparisonAspects);
    } else if (fallback) {
      fallback();
    } else {
      compareRandomSelection();
    }
  };

  // Level Range configuration
  const levelRangeButtons = [
    {
      levels: ["A1", "A2"],
      icon: "🌱",
      title: "Beginner Range",
      description: "A1 - A2 levels",
      gradientFrom: "from-green-200",
      gradientTo: "to-green-300",
      hoverFrom: "hover:from-green-300",
      hoverTo: "hover:to-green-400",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-green-700",
      textColor: "text-green-800",
      darkTextColor: "dark:text-green-200",
      descriptionColor: "text-green-600",
      darkDescriptionColor: "dark:text-green-300"
    },
    {
      levels: ["B1", "B2"],
      icon: "🚀",
      title: "Intermediate Range", 
      description: "B1 - B2 levels",
      gradientFrom: "from-yellow-200",
      gradientTo: "to-yellow-300",
      hoverFrom: "hover:from-yellow-300",
      hoverTo: "hover:to-yellow-400",
      darkFrom: "dark:from-yellow-800",
      darkTo: "dark:to-yellow-700",
      textColor: "text-yellow-800",
      darkTextColor: "dark:text-yellow-200",
      descriptionColor: "text-yellow-600",
      darkDescriptionColor: "dark:text-yellow-300"
    },
    {
      levels: ["C1", "C2"],
      icon: "👑",
      title: "Advanced Range",
      description: "C1 - C2 levels",
      gradientFrom: "from-red-200",
      gradientTo: "to-red-300",
      hoverFrom: "hover:from-red-300", 
      hoverTo: "hover:to-red-400",
      darkFrom: "dark:from-red-800",
      darkTo: "dark:to-red-700",
      textColor: "text-red-800",
      darkTextColor: "dark:text-red-200",
      descriptionColor: "text-red-600",
      darkDescriptionColor: "dark:text-red-300"
    }
  ];

  // Smart suggestions configuration
  const smartSuggestions = [
    {
      key: "random",
      icon: "🎲",
      title: "Random Selection",
      description: "Let AI pick for you",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
      hoverFrom: "hover:from-blue-600",
      hoverTo: "hover:to-blue-700",
      onClick: compareRandomSelection
    },
    {
      key: "sameLevel",
      icon: "📊", 
      title: "Same CEFR Level",
      description: "Compare similar difficulty",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600",
      hoverFrom: "hover:from-green-600",
      hoverTo: "hover:to-green-700",
      onClick: compareBySameLevel
    },
    {
      key: "popular",
      icon: "⭐",
      title: "Popular Basics",
      description: "Essential tenses",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600",
      hoverFrom: "hover:from-purple-600",
      hoverTo: "hover:to-purple-700", 
      onClick: () => executeComparison(
        (topics) => topics.filter((item) =>
          ["present-simple", "past-simple", "future-simple", "present-continuous", "present-perfect"].includes(item.key)
        )
      )
    },
    {
      key: "mixed",
      icon: "🌈",
      title: "Mixed Categories",
      description: "One from each type",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      hoverFrom: "hover:from-orange-600",
      hoverTo: "hover:to-red-600",
      onClick: () => {
        const uniqueCategories = [...new Set(availableTenses.map((item) => item.category))];
        const mixedSelection: TenseItemCompare[] = [];
        uniqueCategories.forEach((category) => {
          const categoryItems = availableTenses.filter((item) => item.category === category);
          if (categoryItems.length > 0) {
            mixedSelection.push(categoryItems[Math.floor(Math.random() * categoryItems.length)]);
          }
        });
        if (mixedSelection.length >= 2) {
          const selected = mixedSelection.slice(0, 3);
          onClose();
          onShowComparisonResult(selected, comparisonAspects);
        } else {
          compareRandomSelection();
        }
      }
    }
  ];

  // Main comparison sections configuration
  const comparisonSections: SectionConfig[] = [
    {
      title: "🎯 Specialized Grammar Challenges",
      gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      buttons: [
        {
          key: "error-prone",
          icon: "⚠️",
          title: "Error-Prone Topics",
          description: "Common mistake areas",
          gradientFrom: "from-red-200",
          gradientTo: "to-pink-200",
          hoverFrom: "hover:from-red-300",
          hoverTo: "hover:to-pink-300",
          borderColor: "border-red-200 dark:border-red-700",
          iconColor: "text-red-600 dark:text-red-400",
          onClick: () => executeComparison(
            (topics) => topics.filter(item =>
              item.key.toLowerCase().includes("irregular") ||
              item.key.toLowerCase().includes("exception") ||
              item.key.toLowerCase().includes("confusion") ||
              ["present-perfect", "past-simple", "article", "preposition"].some(
                (difficult) => item.key.toLowerCase().includes(difficult.replace("-", "_")) || 
                item.key.toLowerCase().includes(difficult)
              )
            )
          )
        },
        {
          key: "grammar-rules",
          icon: "📏",
          title: "Grammar Rules Focus",
          description: "Structure & formation",
          gradientFrom: "from-blue-200",
          gradientTo: "to-indigo-200",
          hoverFrom: "hover:from-blue-300",
          hoverTo: "hover:to-indigo-300",
          borderColor: "border-blue-200 dark:border-blue-700",
          iconColor: "text-blue-600 dark:text-blue-400",
          onClick: () => executeComparison(
            (topics) => topics.filter(item =>
              item.key.toLowerCase().includes("agreement") ||
              item.key.toLowerCase().includes("order") ||
              item.key.toLowerCase().includes("formation") ||
              item.key.toLowerCase().includes("structure")
            )
          )
        },
        {
          key: "natural-flow",
          icon: "🌊",
          title: "Natural Flow",
          description: "Fluency & naturalness",
          gradientFrom: "from-emerald-200",
          gradientTo: "to-green-200", 
          hoverFrom: "hover:from-emerald-300",
          hoverTo: "hover:to-green-300",
          borderColor: "border-emerald-200 dark:border-emerald-700",
          iconColor: "text-emerald-600 dark:text-emerald-400",
          onClick: () => executeComparison(
            (topics) => topics.filter(item =>
              item.key.toLowerCase().includes("natural") ||
              item.key.toLowerCase().includes("fluency") ||
              item.key.toLowerCase().includes("idiom") ||
              item.key.toLowerCase().includes("collocation")
            ),
            () => executeComparison(
              (topics) => topics.filter(item =>
                item.cefrLevels.some(level => ["B1", "B2"].includes(level)) &&
                (item.category === "tenses" || item.category === "grammar")
              )
            )
          )
        }
      ]
    },
    {
      title: "📚 Learning Path Suggestions",
      gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      buttons: [
        {
          key: "beginner-intermediate",
          icon: "📈",
          title: "Beginner to Intermediate",
          description: "A1 → B1 progression",
          gradientFrom: "from-cyan-200",
          gradientTo: "to-blue-200",
          hoverFrom: "hover:from-cyan-300",
          hoverTo: "hover:to-blue-300",
          borderColor: "border-cyan-200 dark:border-cyan-700",
          iconColor: "text-cyan-600 dark:text-cyan-400",
          onClick: () => compareByLevelRange("A1", "B1")
        },
        {
          key: "advanced-journey",
          icon: "🚀",
          title: "Advanced Journey",
          description: "B2 → C2 mastery",
          gradientFrom: "from-orange-200",
          gradientTo: "to-red-200",
          hoverFrom: "hover:from-orange-300",
          hoverTo: "hover:to-red-300",
          borderColor: "border-orange-200 dark:border-orange-700",
          iconColor: "text-orange-600 dark:text-orange-400",
          onClick: () => compareByLevelRange("B2", "C2")
        },
        {
          key: "core-foundation",
          icon: "🌿",
          title: "Core Foundation",
          description: "A2 → B2 essentials", 
          gradientFrom: "from-green-200",
          gradientTo: "to-emerald-200",
          hoverFrom: "hover:from-green-300",
          hoverTo: "hover:to-emerald-300",
          borderColor: "border-green-200 dark:border-green-700",
          iconColor: "text-green-600 dark:text-green-400",
          onClick: () => compareByLevelRange("A2", "B2")
        },
        {
          key: "fluency-bridge",
          icon: "🎯",
          title: "Fluency Bridge",
          description: "B1 → C1 mastery",
          gradientFrom: "from-purple-200",
          gradientTo: "to-indigo-200",
          hoverFrom: "hover:from-purple-300",
          hoverTo: "hover:to-indigo-300",
          borderColor: "border-purple-200 dark:border-purple-700",
          iconColor: "text-purple-600 dark:text-purple-400",
          onClick: () => compareByLevelRange("B1", "C1")
        }
      ]
    },
    {
      title: "🎭 Thematic Comparisons",
      gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      buttons: [
        {
          key: "time-perspectives",
          icon: "⏰",
          title: "Time Perspectives",
          description: "Past, Present, Future",
          gradientFrom: "from-amber-200",
          gradientTo: "to-yellow-200",
          hoverFrom: "hover:from-amber-300", 
          hoverTo: "hover:to-yellow-300",
          borderColor: "border-amber-200 dark:border-amber-700",
          iconColor: "text-amber-600 dark:text-amber-400",
          onClick: () => executeComparison(
            (topics) => topics.filter((item) =>
              ["present-simple", "past-simple", "future-simple"].some(
                (tense) => item.key.includes(tense.split("-")[0]) && item.key.includes(tense.split("-")[1])
              )
            ),
            () => executeComparison((topics) => topics.slice(0, 3))
          )
        },
        {
          key: "verbal-aspects", 
          icon: "🔄",
          title: "Verbal Aspects",
          description: "Simple vs Continuous vs Perfect",
          gradientFrom: "from-emerald-200",
          gradientTo: "to-teal-200",
          hoverFrom: "hover:from-emerald-300",
          hoverTo: "hover:to-teal-300",
          borderColor: "border-emerald-200 dark:border-emerald-700",
          iconColor: "text-emerald-600 dark:text-emerald-400",
          onClick: () => executeComparison(
            (topics) => topics.filter((item) =>
              ["simple", "continuous", "perfect"].some((aspect) => item.key.includes(aspect))
            )
          )
        },
        {
          key: "modal-functions",
          icon: "🔧",
          title: "Modal Functions",
          description: "Can, Should, Must, etc.",
          gradientFrom: "from-rose-200",
          gradientTo: "to-pink-200",
          hoverFrom: "hover:from-rose-300",
          hoverTo: "hover:to-pink-300",
          borderColor: "border-rose-200 dark:border-rose-700",
          iconColor: "text-rose-600 dark:text-rose-400",
          onClick: () => executeComparison(
            (topics) => topics.filter((item) =>
              item.key.toLowerCase().includes("modal") ||
              item.key.toLowerCase().includes("auxiliary") ||
              item.key.toLowerCase().includes("helping")
            )
          )
        }
      ]
    },
    {
      title: "⚡ Common Confusion Pairs",
      gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
      buttons: [
        {
          key: "present-perfect-past-simple",
          icon: "🤔",
          title: "Present Perfect vs Past Simple",
          description: "Classic confusion resolved",
          gradientFrom: "from-blue-200",
          gradientTo: "to-indigo-200",
          hoverFrom: "hover:from-blue-300",
          hoverTo: "hover:to-indigo-300",
          borderColor: "border-blue-200 dark:border-blue-700",
          iconColor: "text-blue-600 dark:text-blue-400",
          onClick: () => {
            const presentPerfectTopics = availableTenses.filter(item =>
              item.key.includes("present-perfect") || item.key.includes("present_perfect")
            );
            const pastSimpleTopics = availableTenses.filter(item =>
              item.key.includes("past-simple") || item.key.includes("past_simple")
            );
            if (presentPerfectTopics.length >= 1 && pastSimpleTopics.length >= 1) {
              onClose();
              onShowComparisonResult([presentPerfectTopics[0], pastSimpleTopics[0]], comparisonAspects);
            } else {
              compareRandomSelection();
            }
          }
        },
        {
          key: "articles",
          icon: "📰",
          title: "A vs An vs The",
          description: "Article usage mastery",
          gradientFrom: "from-violet-200",
          gradientTo: "to-purple-200",
          hoverFrom: "hover:from-violet-300",
          hoverTo: "hover:to-purple-300",
          borderColor: "border-violet-200 dark:border-violet-700",
          iconColor: "text-violet-600 dark:text-violet-400",
          onClick: () => executeComparison(
            (topics) => topics.filter(item => item.key.toLowerCase().includes("article"))
          )
        },
        {
          key: "active-passive",
          icon: "🔄", 
          title: "Active vs Passive Voice",
          description: "Voice transformation",
          gradientFrom: "from-teal-200",
          gradientTo: "to-cyan-200",
          hoverFrom: "hover:from-teal-300",
          hoverTo: "hover:to-cyan-300",
          borderColor: "border-teal-200 dark:border-teal-700",
          iconColor: "text-teal-600 dark:text-teal-400",
          onClick: () => executeComparison(
            (topics) => topics.filter(item =>
              item.key.toLowerCase().includes("passive") || item.key.toLowerCase().includes("active")
            )
          )
        }
      ]
    },
    {
      title: "⚡ Quick Challenge Options",
      gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      buttons: [
        {
          key: "bookmarks",
          icon: "⭐",
          title: "My Bookmarks",
          description: `Compare saved topics (${bookmarkedTenses.length})`,
          gradientFrom: "from-yellow-200",
          gradientTo: "to-amber-200",
          hoverFrom: "hover:from-yellow-300",
          hoverTo: "hover:to-amber-300",
          borderColor: "border-yellow-200 dark:border-yellow-700",
          iconColor: "text-yellow-600 dark:text-yellow-400",
          onClick: () => {
            const bookmarked = availableTenses.filter(item => bookmarkedTenses.includes(item.key));
            if (bookmarked.length >= 2) {
              executeComparison(() => bookmarked);
            } else {
              alert("Please bookmark at least 2 topics first");
            }
          }
        },
        {
          key: "triple-challenge",
          icon: "🎲",
          title: "Triple Challenge", 
          description: "Compare 3 random topics",
          gradientFrom: "from-indigo-200",
          gradientTo: "to-blue-200",
          hoverFrom: "hover:from-indigo-300",
          hoverTo: "hover:to-blue-300",
          borderColor: "border-indigo-200 dark:border-indigo-700",
          iconColor: "text-indigo-600 dark:text-indigo-400",
          onClick: () => executeComparison(
            (topics) => topics.sort(() => 0.5 - Math.random()).slice(0, 3)
          )
        },
        {
          key: "opposite-extremes",
          icon: "⚖️",
          title: "Opposite Extremes",
          description: "Beginner vs Advanced",
          gradientFrom: "from-pink-200",
          gradientTo: "to-rose-200",
          hoverFrom: "hover:from-pink-300",
          hoverTo: "hover:to-rose-300",
          borderColor: "border-pink-200 dark:border-pink-700",
          iconColor: "text-pink-600 dark:text-pink-400",
          onClick: () => {
            const beginnerTopics = availableTenses.filter(item =>
              item.cefrLevels.some(level => ["A1", "A2"].includes(level))
            );
            const advancedTopics = availableTenses.filter(item =>
              item.cefrLevels.some(level => ["C1", "C2"].includes(level))
            );
            const opposites = [];
            if (beginnerTopics.length >= 1) opposites.push(beginnerTopics[0]);
            if (advancedTopics.length >= 1) opposites.push(advancedTopics[0]);
            
            if (opposites.length >= 2) {
              onClose();
              onShowComparisonResult(opposites, comparisonAspects);
            } else {
              compareRandomSelection();
            }
          }
        },
        {
          key: "smart-balance",
          icon: "🎯",
          title: "Smart Balance",
          description: "Easy + Hard mix",
          gradientFrom: "from-emerald-200",
          gradientTo: "to-teal-200",
          hoverFrom: "hover:from-emerald-300",
          hoverTo: "hover:to-teal-300", 
          borderColor: "border-emerald-200 dark:border-emerald-700",
          iconColor: "text-emerald-600 dark:text-emerald-400",
          onClick: () => {
            const easyTopics = availableTenses.filter(item =>
              item.cefrLevels.some(level => ["A1", "A2", "B1"].includes(level))
            );
            const hardTopics = availableTenses.filter(item =>
              item.cefrLevels.some(level => ["B2", "C1", "C2"].includes(level))
            );
            const smartMix = [];
            if (easyTopics.length >= 1) smartMix.push(easyTopics[Math.floor(Math.random() * easyTopics.length)]);
            if (hardTopics.length >= 1) smartMix.push(hardTopics[Math.floor(Math.random() * hardTopics.length)]);

            if (smartMix.length >= 2) {
              onClose();
              onShowComparisonResult(smartMix, comparisonAspects);
            } else {
              compareRandomSelection();
            }
          }
        }
      ]
    }
  ];

  // Render comparison button component
  const renderComparisonButton = (button: ButtonConfig) => (
    <Button
      key={button.key}
      onClick={button.onClick}
      className={`group p-3 h-full break-words whitespace-normal text-left bg-gradient-to-r ${button.gradientFrom} ${button.gradientTo} ${button.hoverFrom} ${button.hoverTo} rounded-lg transition-all duration-200 border ${button.borderColor} shadow-sm hover:shadow-md`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={`${button.iconColor} transition-colors duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-300`}>
          {button.icon}
        </span>
        <span className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-300">
          {button.title}
        </span>
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-300">
        {button.description}
      </div>
    </Button>
  );

  // Render comparison section component
  const renderComparisonSection = (section: SectionConfig) => (
    <div key={section.title} className="bg-white dark:bg-gray-700 rounded-lg p-4 mb-4">
      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
        {section.title}
      </h5>
      <div className={`grid ${section.gridCols} gap-3`}>
        {section.buttons.map(renderComparisonButton)}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Category-based comparisons */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-6 text-lg">
          🎯 Category-Based Comparisons
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryData.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm"
            >
              <Button
                onClick={() => compareByCategoryType(cat.category)}
                className="w-full h-full group px-4 py-3 bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 dark:from-blue-800 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-600 text-blue-800 dark:text-blue-200 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-blue-200 dark:border-blue-600"
              >
                <div className="text-2xl mb-2 transition-transform duration-200 group-hover:scale-110">{cat.icon}</div>
                <div className="text-sm font-medium mb-1 transition-colors duration-200 group-hover:text-blue-900 dark:group-hover:text-blue-100">
                  Compare {cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}
                </div>
                <div className="text-xs opacity-75 transition-opacity duration-200 group-hover:opacity-90">{cat.count} available</div>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CEFR Level-based comparisons */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-6 text-lg">
          📊 CEFR Level Comparisons
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {cefrLevelData.map((level) => (
            <div
              key={level.level}
              className="bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm"
            >
              <div className="text-center mb-2">
                <div
                  className={`inline-flex w-8 h-8 rounded-full items-center justify-center text-white text-sm font-bold ${
                    level.level.startsWith("A")
                      ? "bg-green-500"
                      : level.level.startsWith("B")
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {level.level}
                </div>
              </div>
              <div className="text-xs text-center text-gray-600 dark:text-gray-400 mb-2">
                {level.count} topics
              </div>
              <Button
                onClick={() => {
                  if (level.count < 2) {
                    alert(`Need at least 2 topics at ${level.level} level to compare`);
                    return;
                  }
                  const selected = level.topics
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 2);
                  onClose();
                  onShowComparisonResult(selected, comparisonAspects);
                }}
                disabled={level.count < 2}
                className={`w-full px-2 py-1 rounded text-xs transition-all duration-200 group ${
                  level.count >= 2
                    ? `bg-gradient-to-r ${
                        level.level.startsWith("A")
                          ? "from-green-200 to-green-300 hover:from-green-300 hover:to-green-400 text-green-800 border-green-200 dark:from-green-800/30 dark:to-green-700/30 dark:hover:from-green-700/40 dark:hover:to-green-600/40 dark:text-green-200 dark:border-green-600"
                          : level.level.startsWith("B")
                          ? "from-yellow-200 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-yellow-800 border-yellow-200 dark:from-yellow-800/30 dark:to-yellow-700/30 dark:hover:from-yellow-700/40 dark:hover:to-yellow-600/40 dark:text-yellow-200 dark:border-yellow-600"
                          : "from-red-200 to-red-300 hover:from-red-300 hover:to-red-400 text-red-800 border-red-200 dark:from-red-800/30 dark:to-red-700/30 dark:hover:from-red-700/40 dark:hover:to-red-600/40 dark:text-red-200 dark:border-red-600"
                      } shadow-sm hover:shadow-md border`
                    : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-400 cursor-not-allowed border border-gray-200 dark:from-gray-600 dark:to-gray-700 dark:border-gray-500"
                }`}
              >
                Compare
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Level Range Comparisons */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg">
          🎚️ Level Range Comparisons
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levelRangeButtons.map((range) => (
            <Button
              key={range.levels.join("-")}
              onClick={() => compareByLevelRange(range.levels[0], range.levels[1])}
              className={`h-full group p-4 text-left break-words whitespace-normal bg-gradient-to-r ${range.gradientFrom} ${range.gradientTo} ${range.hoverFrom} ${range.hoverTo} ${range.darkFrom} ${range.darkTo} rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-opacity-20 ${
                range.levels.join("-") === "A1-A2" 
                  ? "border-green-300 dark:border-green-600"
                  : range.levels.join("-") === "B1-B2"
                  ? "border-yellow-300 dark:border-yellow-600" 
                  : "border-red-300 dark:border-red-600"
              }`}
            >
              <div className="text-lg mb-2 transition-transform duration-200 group-hover:scale-110">{range.icon}</div>
              <div className={`font-medium ${range.textColor} ${range.darkTextColor} transition-colors duration-200 group-hover:text-black dark:group-hover:text-white`}>
                {range.title}
              </div>
              <div className={`text-sm ${range.descriptionColor} ${range.darkDescriptionColor} transition-colors duration-200 group-hover:text-black dark:group-hover:text-gray-200`}>
                {range.description}
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg">
          🎯 Smart Suggestions
        </h4>
        
        {/* Smart Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {smartSuggestions.map((suggestion) => (
            <Button
              key={suggestion.key}
              onClick={suggestion.onClick}
              className={`group p-4 h-full break-words whitespace-normal text-left bg-gradient-to-r ${suggestion.gradientFrom} ${suggestion.gradientTo} ${suggestion.hoverFrom} ${suggestion.hoverTo} text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md`}
            >
              <div className="text-2xl mb-2 transition-transform duration-200 group-hover:scale-110">{suggestion.icon}</div>
              <div className="font-medium mb-1 transition-colors duration-200">{suggestion.title}</div>
              <div className="text-xs opacity-90 transition-opacity duration-200 group-hover:opacity-100">{suggestion.description}</div>
            </Button>
          ))}
        </div>

        {/* Render all comparison sections */}
        {comparisonSections.map(renderComparisonSection)}
      </div>
    </div>
  );
};

export default QuickTab;

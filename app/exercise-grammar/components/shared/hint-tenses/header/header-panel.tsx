import { CEFRLevel } from "@/types/grammars/grammars_type";
import { TenseItem, VALID_SORT_MODES } from "..//hint-tenses";
import {
  Bookmark,
  BookOpenText,
  ChartNoAxesColumn,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  FileDown,
  GitCompareArrows,
  LibraryBig,
  RotateCcw,
  Search,
  Shuffle,
} from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderPanelProps {
  selectedCategory: "all" | "tenses" | "grammar" | "conditionals" | "special";
  selectedCEFRLevel: CEFRLevel | "ALL";
  sortMode: string;
  handleCategoryChange: (
    category: "all" | "tenses" | "grammar" | "conditionals" | "special"
  ) => void;
  tenseItems: TenseItem[]; // Assuming this is an array of tense items
  setSelectedCEFRLevel: (level: CEFRLevel | "ALL") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showModalExtensions: boolean;
  allTenseKeys: string[]; // Assuming this is an array of all tense keys
  setShowOnlyBookmarked: (value: boolean) => void;
  showOnlyBookmarked: boolean;
  bookmarkedTenses: string[]; // Assuming this is an array of bookmarked tense items
  clearAllBookmarks: () => void;
  handleDownloadStudyPlan: () => void;
  exportByCEFRAsPDF: (level: CEFRLevel | "ALL") => void;
  getRandomTense: () => void;
  quickCompareRandomTenses: () => void;
  downloadBookmarkedAsPDF: () => void;
  resetToDefaults: () => void;
  toggleModalExtensions: () => void;
  showStats: boolean;
  setShowStats: (value: boolean) => void;
  showCertificateOptions: boolean;
  setShowCertificateOptions: (value: boolean) => void;
  setSortMode: React.Dispatch<
    React.SetStateAction<
      | "low_to_high"
      | "high_to_low"
      | "level_a1_c2"
      | "level_c2_a1"
      | "name_a_z"
      | "name_z_a"
    >
  >;
}

const HeaderPanel: React.FC<HeaderPanelProps> = ({
  selectedCategory,
  selectedCEFRLevel,
  sortMode,
  handleCategoryChange,
  tenseItems,
  setSelectedCEFRLevel,
  searchQuery,
  setSearchQuery,
  allTenseKeys,
  showModalExtensions,
  setShowOnlyBookmarked,
  showOnlyBookmarked,
  bookmarkedTenses,
  clearAllBookmarks,
  handleDownloadStudyPlan,
  exportByCEFRAsPDF,
  getRandomTense,
  quickCompareRandomTenses,
  downloadBookmarkedAsPDF,
  resetToDefaults,
  toggleModalExtensions,
  showStats,
  setShowStats,
  showCertificateOptions,
  setShowCertificateOptions,
  setSortMode,
}) => {
  // Enhanced sort mode selection with robust localStorage persistence
  const handleSortModeChange = (
    mode:
      | "low_to_high"
      | "high_to_low"
      | "level_a1_c2"
      | "level_c2_a1"
      | "name_a_z"
      | "name_z_a"
  ) => {
    if (!VALID_SORT_MODES.includes(mode)) {
      toast.error(`⚠️ Invalid sort mode attempted: "${mode}"`);
      return;
    }
    // Update state immediately
    setSortMode(mode);
  };
  return (
    <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 mb-0">
      {/* Control Row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {/* Category Filter */}
        <div>
          <label className="block text-xs font-medium text-white mb-1">
            Category:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) =>
              handleCategoryChange(
                e.target.value as
                  | "all"
                  | "tenses"
                  | "grammar"
                  | "conditionals"
                  | "special"
              )
            }
            className="w-full px-2 py-1 text-xs rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          >
            <option value="all">All Categories</option>
            <option value="tenses">
              ⏰ Tenses (
              {tenseItems.filter((item) => item.category === "tenses").length})
            </option>
            <option value="grammar">
              📚 Grammar (
              {tenseItems.filter((item) => item.category === "grammar").length})
            </option>
            <option value="conditionals">
              🔀 Conditionals (
              {
                tenseItems.filter((item) => item.category === "conditionals")
                  .length
              }
              )
            </option>
            <option value="special">
              ⭐ Special (
              {tenseItems.filter((item) => item.category === "special").length})
            </option>
          </select>
        </div>

        {/* CEFR Level Filter */}
        <div>
          <label className="block text-xs font-medium text-white mb-1">
            CEFR Level:
          </label>
          <select
            value={selectedCEFRLevel}
            onChange={(e) =>
              setSelectedCEFRLevel(e.target.value as CEFRLevel | "ALL")
            }
            className="w-full px-2 py-1 text-xs rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          >
            <option value="ALL">All Levels</option>
            <option value="A1">A1 - Beginner</option>
            <option value="A2">A2 - Elementary</option>
            <option value="B1">B1 - Intermediate</option>
            <option value="B2">B2 - Upper Intermediate</option>
            <option value="C1">C1 - Certificate</option>
            <option value="C2">C2 - Proficiency</option>
          </select>
        </div>

        {/* Sort Mode */}
        <div>
          <label className="block text-xs font-medium text-white mb-1">
            Sort by:
          </label>
          <select
            value={sortMode}
            onChange={(e) =>
              handleSortModeChange(
                e.target.value as
                  | "low_to_high"
                  | "high_to_low"
                  | "level_a1_c2"
                  | "level_c2_a1"
                  | "name_a_z"
                  | "name_z_a"
              )
            }
            className="w-full px-2 py-1 text-xs rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          >
            <option value="low_to_high">
              Low to High (1→{allTenseKeys.length})
            </option>
            <option value="high_to_low">
              High to Low ({allTenseKeys.length}→1)
            </option>
            <option value="level_a1_c2">
              Level A1→C2 (Beginner to Certificate)
            </option>
            <option value="level_c2_a1">
              Level C2→A1 (Certificate to Beginner)
            </option>
            <option value="name_a_z">Name A→Z (Alphabetical)</option>
            <option value="name_z_a">Name Z→A (Reverse Alphabetical)</option>
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-3">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search grammar topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Quick Actions */}
      {showModalExtensions && (
        <div className="flex flex-wrap items-center justify-between text-sm gap-2">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto ">
            <Button
              onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
              className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1 ${
                showOnlyBookmarked
                  ? "bg-yellow-400/50 hover:bg-yellow-400/20"
                  : "bg-black/30 hover:bg-white/20 text-white"
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${
                  showOnlyBookmarked ? "text-yellow-200" : "text-white"
                }`}
                fill={showOnlyBookmarked ? "yellow" : "white"}
              />
              <span
                className={` ${
                  showOnlyBookmarked ? "text-yellow-200" : "text-white"
                }`}
              >
                {bookmarkedTenses.length}
              </span>
            </Button>

            {/* Quick Export Categories - Complete Details with Recognition Patterns */}
            <div className="flex gap-1">
              {selectedCEFRLevel && (
                <Button
                  onClick={() => {
                    if (selectedCEFRLevel === "ALL") {
                      exportByCEFRAsPDF("ALL");
                    } else {
                      exportByCEFRAsPDF(selectedCEFRLevel as CEFRLevel);
                    }
                  }}
                  className="px-2 py-1 text-xs rounded transition-colors bg-orange-500/20 hover:bg-orange-500/30 text-orange-200"
                  title={`Download ${
                    selectedCEFRLevel === "ALL"
                      ? "all levels"
                      : selectedCEFRLevel + " level"
                  } as PDF`}
                >
                  {selectedCEFRLevel === "ALL" ? (
                    <div className="flex items-center">
                      <LibraryBig /> <span>All</span>
                    </div>
                  ) : (
                    selectedCEFRLevel
                  )}
                </Button>
              )}
            </div>

            {bookmarkedTenses.length > 0 && showOnlyBookmarked && (
              <>
                <Button
                  onClick={clearAllBookmarks}
                  className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-red-500/20 hover:bg-red-500/30 text-red-200"
                  title="Clear all bookmarks"
                >
                  <Bookmark
                    className="w-5 h-5 text-yellow-200 "
                    fill="yellow"
                  />
                  Remove All
                </Button>
              </>
            )}

            <Button
              onClick={handleDownloadStudyPlan}
              className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200"
              title="Generate study plan with weekly structure (A1-C2)"
            >
              <BookOpenText className="w-5 h-5" />
              Study Plan PDF
            </Button>

            <Button
              onClick={getRandomTense}
              className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200"
              title="Random topic"
            >
              <Shuffle className="w-5 h-5" />
              Random
            </Button>

            {/* New Important Feature Buttons */}
            <Button
              onClick={quickCompareRandomTenses}
              className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200"
              title="Compare tenses with different options"
            >
              <GitCompareArrows className="w-5 h-5" />
              Compare Options
            </Button>

            {/* Download Bookmarked as PDF */}
            {bookmarkedTenses.length > 0 && showOnlyBookmarked && (
              <Button
                onClick={downloadBookmarkedAsPDF}
                className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-200"
                title="Download all bookmarked tenses as PDF"
              >
                <FileDown className="h-5 w-5" />
                Download PDF
              </Button>
            )}
          </div>

          <div className="text-white/70 text-xs flex flex-wrap items-center gap-3">
            <Button
              onClick={() => setShowCertificateOptions(!showCertificateOptions)}
              className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-rose-500/20 hover:bg-green-500/30 text-rose-200"
              title="Certificate options"
            >
              <ClipboardList className="w-5 h-5" />
              Certificate
            </Button>

            <Button
              onClick={() => setShowStats(!showStats)}
              className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-teal-500/20 hover:bg-green-500/30 text-teal-200"
              title="Show statistics"
            >
              <ChartNoAxesColumn className="w-5 h-5" />
              Statistics
            </Button>

            <Button
              onClick={resetToDefaults}
              className="px-3 py-1 rounded-lg transition-colors flex items-center gap-1 bg-green-500/20 hover:bg-green-500/30 text-green-200"
              title="Reset all settings"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Settings
            </Button>
          </div>
        </div>
      )}

      <Button
      variant="outline"
        onClick={toggleModalExtensions}
        className={`flex items-center justify-center gap-2 w-full text-white/80 hover:text-white
                  ${showModalExtensions ? "mt-2" : ""}
                  `}
        title={showModalExtensions ? "Hide extensions" : "Show extensions"}
      >
        {showModalExtensions ? (
          <>
            <ChevronUp className="w-4 h-4" />
            <span className="text-sm">Hide</span>
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            <span className="text-sm">Show</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default HeaderPanel;

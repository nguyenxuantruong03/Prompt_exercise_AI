import { CEFRLevel } from "@/types/grammars/grammars_type";
import { Bookmark, File } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { TenseItem } from "../hint-tenses";

interface TensesListProps {
  selectedCategory: "all" | "tenses" | "grammar" | "conditionals" | "special";
  selectedCEFRLevel: CEFRLevel | "ALL";
  searchQuery: string;
  filteredTenses: TenseItem[];
  handleTenseClick: (tenseItem: TenseItem, index: number) => void;
  toggleBookmark: (tenseName: string) => void;
  bookmarkedTenses: string[];
  generateMultiTensePDF: (tenseKeys: string[]) => void;
  tenseItems: TenseItem[];
  isHighlightedLevel: (tenseItem: TenseItem) => boolean;
  getTenseIcon: (
    displayName: string
  ) => "⏰" | "⌚" | "🔮" | "✨" | "🔄" | "🔀" | "📝";
}

const TensesList: React.FC<TensesListProps> = ({
  selectedCategory,
  selectedCEFRLevel,
  searchQuery,
  filteredTenses,
  handleTenseClick,
  toggleBookmark,
  bookmarkedTenses,
  generateMultiTensePDF,
  tenseItems,
  isHighlightedLevel,
  getTenseIcon,
}) => {
  const getCEFRLevelColor = (level: CEFRLevel) => {
    switch (level) {
      case "A1":
        return "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200";
      case "A2":
        return "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200";
      case "B1":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200";
      case "B2":
        return "bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200";
      case "C1":
        return "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200";
      case "C2":
        return "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tenses":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700";
      case "conditionals":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700";
      case "grammar":
        return "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700";
      case "special":
        return "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700";
      default:
        return "bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-700";
    }
  };
  return (
    <div className="overflow-y-auto px-4 space-y-2">
      {/* Results summary */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {selectedCEFRLevel !== "ALL" ? (
          <span className="font-medium">
            {filteredTenses.length}{" "}
            {selectedCategory !== "all" ? selectedCategory : "topics"} for{" "}
            {selectedCEFRLevel} level
          </span>
        ) : (
          <span>
            {filteredTenses.length} of {tenseItems.length}{" "}
            {selectedCategory !== "all" ? selectedCategory : "topics"}
            {selectedCategory !== "all" &&
              ` (${
                selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)
              })`}
          </span>
        )}
      </div>

      {filteredTenses.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          {searchQuery
            ? `No ${
                selectedCategory !== "all" ? selectedCategory : "topics"
              } found matching "${searchQuery}"`
            : selectedCEFRLevel !== "ALL"
            ? `No ${
                selectedCategory !== "all" ? selectedCategory : "topics"
              } found for ${selectedCEFRLevel} level`
            : selectedCategory !== "all"
            ? `No ${selectedCategory} topics found`
            : "No topics found"}
        </p>
      ) : (
        filteredTenses.map((tenseItem, index) => {
          const isHighlighted = isHighlightedLevel(tenseItem);
          const serialNumber = tenseItem.order; // Use fixed ID (1-119) - never changes with sorting/filtering
          return (
            <div
              key={tenseItem.order}
              className={`w-full rounded-lg border transition-all duration-200 hover:shadow-md ${getCategoryColor(
                tenseItem.category
              )} ${
                isHighlighted
                  ? "ring-2 ring-yellow-400 dark:ring-yellow-500 shadow-lg transform scale-105 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30"
                  : ""
              }`}
            >
              <Button
                variant="ghost"
                onClick={() => handleTenseClick(tenseItem, index)}
                className="w-full text-left p-3 hover:bg-opacity-80 transition-all duration-200 h-full block"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {/* Serial Number - Now shows fixed ID (1-119) */}
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                        {serialNumber}
                      </span>
                    </div>
                    <span className="text-lg ">
                      {getTenseIcon(tenseItem.displayName)}
                    </span>
                    <span
                      className={`font-medium text-gray-800 dark:text-gray-200 break-words whitespace-normal ${
                        isHighlighted
                          ? "text-yellow-900 dark:text-yellow-100 font-bold"
                          : ""
                      }`}
                    >
                      {tenseItem.displayName}
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      tenseItem.category === "tenses"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200"
                        : tenseItem.category === "conditionals"
                        ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                        : tenseItem.category === "grammar"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200"
                        : "bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200"
                    }`}
                  >
                    {tenseItem.category}
                  </span>
                </div>

                {/* CEFR Level badges */}
                <div className="flex flex-wrap gap-1">
                  {tenseItem.cefrLevels.map((level) => (
                    <span
                      key={level}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${getCEFRLevelColor(
                        level
                      )} ${
                        selectedCEFRLevel === level ? "ring-2 ring-current" : ""
                      }`}
                    >
                      {level}
                    </span>
                  ))}
                </div>

                {isHighlighted && (
                  <div className="mt-2 text-xs text-yellow-700 dark:text-yellow-300 font-medium">
                    ✨ Recommended for {selectedCEFRLevel} level
                  </div>
                )}
              </Button>

              {/* Individual Action Buttons */}
              <div className="px-3 pb-3 pt-0 ">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(tenseItem.name);
                      }}
                      className={`p-1 rounded transition-colors cursor-pointer ${
                        bookmarkedTenses.includes(tenseItem.name)
                          ? "text-yellow-200 "
                          : "text-white "
                      }`}
                      title={
                        bookmarkedTenses.includes(tenseItem.name)
                          ? "Remove bookmark"
                          : "Add bookmark"
                      }
                    >
                      <Bookmark
                        className="h-5 w-5"
                        fill={
                          bookmarkedTenses.includes(tenseItem.name)
                            ? "yellow"
                            : "white"
                        }
                      />
                    </Button>
                  </div>

                  {/* Direct PDF Export */}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        generateMultiTensePDF([tenseItem.key]);
                        toast.success(
                          `📄 ${tenseItem.displayName} PDF generated successfully!`
                        );
                      } catch (error) {
                        console.error("PDF generation error:", error);
                        toast.error(
                          "Failed to generate PDF. Please try again."
                        );
                      }
                    }}
                    className="px-2 py-1 text-xs rounded bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-800 dark:hover:bg-red-700 dark:text-red-200 transition-colors flex items-center gap-1"
                    title="Export as PDF"
                  >
                    <File className="w-5 h-5" />
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TensesList;

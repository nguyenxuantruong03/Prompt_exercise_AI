import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { difficultyClassMap, getAdvancedHints } from "../compare-item";
import { TenseItemCompare } from "../compareTensesModal";
import { Button } from "@/components/ui/button";

interface AdvanceTabProps {
  availableTenses: TenseItemCompare[];
  bookmarkedTenses: string[];
  currentHintPage: number;
  hintsPerPage: number;
  executeAdvancedHint: (hint: {
    title: string;
    description: string;
    topics: TenseItemCompare[];
    reason: string;
    difficulty: string;
  }) => void; // Adjust type as needed
  setCurrentHintPage: (page: number) => void;
  setHintsPerPage: (count: number) => void;
}

const AdvanceTab: React.FC<AdvanceTabProps> = ({
  availableTenses,
  bookmarkedTenses,
  currentHintPage,
  hintsPerPage,
  executeAdvancedHint,
  setCurrentHintPage,
  setHintsPerPage,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center gap-2">
          🧠 Advanced Learning Hints
          <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">
            AI-Generated Suggestions
          </span>
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Smart comparison suggestions based on learning patterns and difficulty
          progression.
        </p>

        {(() => {
          const allAdvancedHints = getAdvancedHints(
            availableTenses,
            bookmarkedTenses
          );
          const totalPages = Math.ceil(allAdvancedHints.length / hintsPerPage);
          const startIndex = currentHintPage * hintsPerPage;
          const endIndex = startIndex + hintsPerPage;
          const currentPageHints = allAdvancedHints.slice(startIndex, endIndex);

          return (
            <>
              {/* Pagination Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">
                    {allAdvancedHints.length}
                  </span>{" "}
                  total hints available
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Page{" "}
                  <span className="font-semibold">{currentHintPage + 1}</span>{" "}
                  of <span className="font-semibold">{totalPages}</span> •
                  Showing {startIndex + 1}-
                  {Math.min(endIndex, allAdvancedHints.length)} of{" "}
                  {allAdvancedHints.length}
                </div>
              </div>

              {/* Hints Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPageHints.map((hint, index) => (
                  <div
                    key={`${currentHintPage}-${index}`}
                    className="bg-white dark:bg-gray-700 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                          {hint.title}
                        </h5>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            difficultyClassMap[hint.difficulty]
                          }`}
                        >
                          {hint.difficulty || "Intermediate"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {hint.description}
                      </p>
                      <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded mb-3">
                        💡 {hint.reason}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Topics to Compare ({hint.topics.length}):
                      </div>
                      {hint.topics.map(
                        (topic: TenseItemCompare, topicIndex: number) => (
                          <div
                            key={topicIndex}
                            className="flex items-center gap-2 text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded"
                          >
                            <div
                              className={`w-3 h-3 rounded-full ${
                                topicIndex === 0
                                  ? "bg-blue-500"
                                  : topicIndex === 1
                                  ? "bg-green-500"
                                  : "bg-purple-500"
                              }`}
                            ></div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {topic.displayName}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                              {topic.cefrLevels.join(", ")}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <Button
                      onClick={() => executeAdvancedHint(hint)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                      <span>🚀</span>
                      Execute Hint
                    </Button>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentHintPage(Math.max(0, currentHintPage - 1))}
                        className={currentHintPage === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {/* First page */}
                    {currentHintPage > 2 && (
                      <>
                        <PaginationItem>
                          <PaginationLink 
                            onClick={() => setCurrentHintPage(0)}
                            className="cursor-pointer"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentHintPage > 3 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                      </>
                    )}

                    {/* Current page range */}
                    {Array.from({ length: totalPages }, (_, i) => {
                      const pageNum = i;
                      const isVisible = Math.abs(pageNum - currentHintPage) <= 2;
                      
                      if (!isVisible) return null;
                      
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            onClick={() => setCurrentHintPage(pageNum)}
                            isActive={pageNum === currentHintPage}
                            className="cursor-pointer"
                          >
                            {pageNum + 1}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    {/* Last page */}
                    {currentHintPage < totalPages - 3 && (
                      <>
                        {currentHintPage < totalPages - 4 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink 
                            onClick={() => setCurrentHintPage(totalPages - 1)}
                            className="cursor-pointer"
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}

                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentHintPage(Math.min(totalPages - 1, currentHintPage + 1))}
                        className={currentHintPage === totalPages - 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>

                {/* Items per page selector */}
                <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>Show:</span>
                  {[6, 12, 24, 48].map((count) => (
                    <button
                      key={count}
                      onClick={() => {
                        setHintsPerPage(count);
                        setCurrentHintPage(0); // Reset to first page when changing items per page
                      }}
                      className={`px-2 py-1 rounded ${
                        hintsPerPage === count
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                  <span>per page</span>
                </div>
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
};

export default AdvanceTab;

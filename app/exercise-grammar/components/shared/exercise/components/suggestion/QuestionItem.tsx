import { Question, Exercise } from "@/types/grammars/grammars_type";
import {
  AnalyzedSentence,
  GrammarElement,
} from "../../../analyze-grammar/grammar-analysis-modal";
import { renderQuestionWithInlineAnalysis } from "../../../analyze-grammar/analyze";
import {
  createDetailedSuggestion,
  extractGrammarFocus,
} from "./suggestionsDetail";
import QuestionRenderer from "../QuestionRenderer";
import ComparisonQuestion from "../comparison-question";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface QuestionItemProps {
  question: Question;
  showResults: boolean;
  showHints: { [key: number]: boolean };
  selectedAnswers: { [key: number]: number | string };
  autoAnalyzedQuestions: { [key: number]: AnalyzedSentence };
  autoAnalyzeEnabled: boolean;
  loading?: boolean;
  // Functions
  toggleHint: (questionId: number) => void;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
  handleInputAnswer: (questionId: number, answer: string) => void;
  handleGrammarAnalysis: (question: Question) => void;
  setSelectedElement: Dispatch<SetStateAction<GrammarElement | null>>;
  setShowElementModal: Dispatch<SetStateAction<boolean>>;
  // Auto-generate functions
  generateExercise?: () => Promise<void>;
  setExercise?: Dispatch<SetStateAction<Exercise | null>>;
  setShowResults?: Dispatch<SetStateAction<boolean>>;
  setInputText?: Dispatch<SetStateAction<string>>;
  setSelectedAnswers: Dispatch<
    SetStateAction<{ [key: number]: number | string }>
  >;
  handleSuggestionClick: (suggestionText: string) => void;
  onLightningQuestionComplete?: () => void; // For lightning game
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  showResults,
  showHints,
  selectedAnswers,
  autoAnalyzedQuestions,
  autoAnalyzeEnabled,
  loading,
  toggleHint,
  handleAnswerSelect,
  handleInputAnswer,
  handleGrammarAnalysis,
  setSelectedElement,
  setShowElementModal,
  generateExercise,
  setExercise,
  setShowResults,
  setInputText,
  setSelectedAnswers,
  handleSuggestionClick,
  onLightningQuestionComplete,
}) => {
  return (
    <div
      key={question.id}
      className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      {/* Question Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {renderQuestionWithInlineAnalysis(
            question,
            autoAnalyzedQuestions,
            autoAnalyzeEnabled,
            setSelectedElement,
            setShowElementModal
          )}
        </h3>

        <div className="flex items-center gap-2">
          {/* Grammar Analysis Button - Only for A1-B2 users */}
          <>
            {!autoAnalyzeEnabled ? (
              // Show manual analysis Button when auto-analysis is disabled
              <Button
                onClick={() => handleGrammarAnalysis(question)}
                className="flex-shrink-0 p-2 rounded-full transition-all duration-200 hover:scale-110 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-600 dark:text-purple-400 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-900/50 dark:hover:to-indigo-900/50 border border-purple-200 dark:border-purple-800"
                title="Analyze sentence grammar (A1-B2 feature)"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H16a1 1 0 110 2h-3.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H4a1 1 0 110-2h3.47l.56-2.243a1 1 0 011.213-.727zM8.53 8l-1 4h2.94l1-4H8.53z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            ) : null}
          </>

          {/* Light Bulb Icon - Only show before checking answers */}
          {!showResults && question.tip && (
            <Button
              onClick={() => toggleHint(question.id)}
              className={`flex-shrink-0 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                showHints[question.id]
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50"
              }`}
              title={
                showHints[question.id] ? "Hide grammar tip" : "Show grammar tip"
              }
            >
              <svg
                className={`w-5 h-5 transition-transform ${
                  showHints[question.id] ? "rotate-12" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>

      {/* Collapsible Hint Content - Only show before checking answers */}
      {!showResults && showHints[question.id] && question.tip && (
        <div className="mb-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-800 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
                <span>💡 Grammar Tip</span>
                <span className="px-2 py-1 text-xs bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full">
                  Think about this...
                </span>
              </h4>
              <div className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                {question.tip.split("\n").map((line: string, index: number) => (
                  <p key={index} className="mb-2 last:mb-0">
                    {line.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Question Content */}
      {question.type === "comparison-exercise" ? (
        <ComparisonQuestion
          question={question}
          showResults={showResults}
          selectedAnswer={selectedAnswers[question.id]}
          onAnswerSelect={(answer) => handleAnswerSelect(question.id, answer)}
          showHint={showHints[question.id] || false}
          onToggleHint={() => toggleHint(question.id)}
        />
      ) : (
        <QuestionRenderer
          question={question}
          selectedAnswers={selectedAnswers}
          showResults={showResults}
          handleAnswerSelect={handleAnswerSelect}
          handleInputAnswer={handleInputAnswer}
          onQuestionComplete={onLightningQuestionComplete}
        />
      )}

      {/* Results Section */}
      {showResults && (
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>

          {/* Enhanced Grammar Tip Section */}
          {question.tip && (
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                    <span>💡 Grammar Tip & Analysis</span>
                    <span className="px-2 py-1 text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-full">
                      Why this answer?
                    </span>
                  </h4>
                  <div className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                    {question.tip
                      .split("\n")
                      .map((line: string, index: number) => (
                        <p key={index} className="mb-2 last:mb-0">
                          {line.trim()}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Suggestion Button for Each Question */}
          <div className="flex justify-center">
            <Button
              onClick={async () => {
                // Create a more detailed suggestion based on the specific question
                const suggestionText = createDetailedSuggestion(question);

                // Extract grammar focus for feedback messages
                const grammarFocus = extractGrammarFocus(question);

                // Set the suggestion text first
                if (setInputText) {
                  setInputText(suggestionText);
                }

                // Reset the exercise state
                if (setExercise && setShowResults) {
                  setExercise(null);
                  setShowResults(false);
                  setSelectedAnswers({});
                }

                // Show loading state and auto-generate new exercise
                if (generateExercise && !loading) {
                  // Show immediate feedback
                  const { toast } = await import("react-hot-toast");
                  toast.success(
                    `🎯 Generating similar ${grammarFocus} exercises...`
                  );

                  // Small delay for better UX
                  setTimeout(async () => {
                    try {
                      await generateExercise();
                      toast.success(`✅ New ${grammarFocus} exercises ready!`);
                    } catch (error) {
                      toast.error(
                        "Failed to generate new exercises. Please try again."
                      );
                    }
                  }, 500);
                } else {
                  // Fallback to just setting the suggestion
                  handleSuggestionClick(suggestionText);
                }
              }}
              disabled={loading}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 border ${
                loading
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600 cursor-not-allowed"
                  : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-900/50 hover:scale-105 shadow-sm hover:shadow-md"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Generate similar questions
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;

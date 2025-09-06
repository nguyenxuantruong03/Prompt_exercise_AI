import { Question } from "@/types/grammars/grammars_type";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ComparisonQuestionProps {
  question: Question;
  showResults: boolean;
  selectedAnswer: number | string | undefined;
  onAnswerSelect: (answer: number) => void;
  showHint: boolean;
  onToggleHint: () => void;
}

const ComparisonQuestion: React.FC<ComparisonQuestionProps> = ({
  question,
  showResults,
  selectedAnswer,
  onAnswerSelect,
  showHint,
  onToggleHint,
}) => {
  const [showComparison, setShowComparison] = useState(false);

  const getAnswerClass = (optionIndex: number) => {
    if (!showResults) {
      return selectedAnswer === optionIndex
        ? "bg-blue-100 dark:bg-blue-900/30 border-blue-500 text-blue-800 dark:text-blue-200"
        : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600";
    }

    const isCorrect = optionIndex === question.correct;
    const isSelected = selectedAnswer === optionIndex;

    if (isCorrect) {
      return "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200";
    }
    if (isSelected && !isCorrect) {
      return "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200";
    }
    return "bg-gray-50 dark:bg-gray-700";
  };

  const getResultIcon = (optionIndex: number) => {
    if (!showResults) return null;

    const isCorrect = optionIndex === question.correct;
    const isSelected = selectedAnswer === optionIndex;

    if (isCorrect) {
      return <span className="text-green-600 font-bold ml-2">✓</span>;
    }
    if (isSelected && !isCorrect) {
      return <span className="text-red-600 font-bold ml-2">✗</span>;
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {/* Question Header */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            VS
          </div>
          <h3 className="font-semibold text-purple-800 dark:text-purple-200">
            Grammar Comparison Exercise
          </h3>
        </div>
        <p className="text-sm text-purple-700 dark:text-purple-300">
          Choose the correct option by comparing similar grammar structures
        </p>
      </div>

      {/* Comparison Structures Display */}
      {question.comparisonStructures && (
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
              Structure 1: {question.comparisonStructures.structure1}
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 italic">
              "{question.comparisonStructures.examples.structure1Example}"
            </p>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
              Structure 2: {question.comparisonStructures.structure2}
            </h4>
            <p className="text-sm text-green-700 dark:text-green-300 italic">
              "{question.comparisonStructures.examples.structure2Example}"
            </p>
          </div>
        </div>
      )}

      {/* Question Text */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <p className="text-gray-800 dark:text-gray-200 font-medium mb-4">
          {question.question}
        </p>

        {/* Answer Options */}
        <div className="space-y-3">
          {question.options?.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => !showResults && onAnswerSelect(optionIndex)}
              disabled={showResults}
              className={`w-full p-3 text-left border rounded-lg transition-all duration-200 ${getAnswerClass(
                optionIndex
              )} ${!showResults ? "hover:shadow-md cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex items-center justify-between">
                <span>
                  <strong>{String.fromCharCode(65 + optionIndex)})</strong> {option}
                </span>
                {getResultIcon(optionIndex)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          onClick={onToggleHint}
          variant="outline"
          size="sm"
          className="text-orange-600 hover:text-orange-700 dark:text-orange-400"
        >
          {showHint ? "Hide" : "Show"} Grammar Tip
        </Button>
        
        {question.comparisonStructures && (
          <Button
            onClick={() => setShowComparison(!showComparison)}
            variant="outline"
            size="sm"
            className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
          >
            {showComparison ? "Hide" : "Show"} Detailed Comparison
          </Button>
        )}
      </div>

      {/* Grammar Tip */}
      {showHint && (
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
          <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
            Grammar Tip:
          </h4>
          <p className="text-sm text-orange-700 dark:text-orange-300">
            {question.tip || "This question tests your ability to distinguish between similar grammar structures."}
          </p>
        </div>
      )}

      {/* Detailed Comparison */}
      {showComparison && question.comparisonStructures && (
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Structure Comparison:
          </h4>
          <div className="grid gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                {question.comparisonStructures.structure1}
              </h5>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Example: "{question.comparisonStructures.examples.structure1Example}"
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-1">
                {question.comparisonStructures.structure2}
              </h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                Example: "{question.comparisonStructures.examples.structure2Example}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results and Explanation */}
      {showResults && (
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Explanation:
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonQuestion;

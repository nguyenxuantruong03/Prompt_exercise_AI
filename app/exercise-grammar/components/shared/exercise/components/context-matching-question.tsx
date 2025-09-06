import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Question } from "@/types/grammars/grammars_type";
import { useState } from "react";

interface ContextMatchingQuestionProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
}

const ContextMatchingQuestion: React.FC<ContextMatchingQuestionProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
}) => {
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);

  if (!question.context || !question.options) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Context Information Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
              Context & Situation
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    🎭 Situation:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {question.context.situation}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    ⏰ Timeframe:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {question.context.timeframe}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    💼 Formality:
                  </span>
                  <span className={`text-sm px-2 py-1 rounded text-xs font-medium ${
                    question.context.formality === 'formal' 
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
                      : question.context.formality === 'informal'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                  }`}>
                    {question.context.formality}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    🎯 Purpose:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {question.context.purpose}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Options */}
      <div className="space-y-3">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <span className="text-lg">🎯</span>
          Choose the most appropriate grammar structure:
        </h4>
        
        {question.options.map((option: string, index: number) => {
          const isSelected = selectedAnswers[question.id] === index;
          const isCorrect = index === question.correct;
          
          return (
            <label
              key={index}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                showResults
                  ? isCorrect
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : isSelected && !isCorrect
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  : isSelected
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-blue-25 dark:hover:bg-blue-900/10"
              }`}
            >
              <Input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                checked={isSelected}
                onChange={() => handleAnswerSelect(question.id, index)}
                className="w-5 h-5 text-blue-600 mt-1"
                disabled={showResults}
              />
              <div className="flex-1">
                <span className={`text-base ${
                  showResults
                    ? isCorrect
                      ? "text-green-700 dark:text-green-300 font-semibold"
                      : isSelected && !isCorrect
                      ? "text-red-700 dark:text-red-300"
                      : "text-gray-600 dark:text-gray-400"
                    : "text-gray-800 dark:text-gray-200"
                }`}>
                  {option}
                </span>
                
                {/* Show appropriateness level after answering */}
                {showResults && question.context?.grammarChoices?.[index] && (
                  <div className="mt-2 p-2 rounded bg-gray-50 dark:bg-gray-700">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-1 rounded font-medium ${
                        question.context.grammarChoices[index].appropriateness === 'perfect'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                          : question.context.grammarChoices[index].appropriateness === 'acceptable'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                      }`}>
                        {question.context.grammarChoices[index].appropriateness}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {question.context.grammarChoices[index].reason}
                    </p>
                  </div>
                )}
              </div>
              
              {showResults && (
                <div className="flex-shrink-0">
                  {isCorrect ? (
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : isSelected ? (
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : null}
                </div>
              )}
            </label>
          );
        })}
      </div>

      {/* Detailed Analysis Button */}
      {showResults && question.context?.grammarChoices && (
        <div className="mt-4">
          <Button
            onClick={() => setShowDetailedAnalysis(!showDetailedAnalysis)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            {showDetailedAnalysis ? "Hide" : "Show"} Detailed Analysis
            <svg
              className={`w-4 h-4 transition-transform ${
                showDetailedAnalysis ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          {/* Detailed Analysis Panel */}
          {showDetailedAnalysis && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                📊 Complete Grammar Analysis
              </h5>
              <div className="space-y-3">
                {question.context.grammarChoices.map((choice, index) => (
                  <div key={index} className="p-3 rounded border-l-4 border-gray-300 bg-white dark:bg-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        Option {index + 1}: {question.options?.[index]}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded font-medium ${
                        choice.appropriateness === 'perfect'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                          : choice.appropriateness === 'acceptable'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                      }`}>
                        {choice.appropriateness.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Structure:</strong> {choice.structure}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Reasoning:</strong> {choice.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContextMatchingQuestion;

"use client";

import { useState, useEffect } from "react";
import { Question } from "@/types/grammars/grammars_type";
import { Input } from "@/components/ui/input";

interface MultiTopicIntegrationProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
  handleInputAnswer: (questionId: number, answer: string) => void;
}

const MultiTopicIntegration: React.FC<MultiTopicIntegrationProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
  handleInputAnswer,
}) => {
  const [topicAnalysis, setTopicAnalysis] = useState<{
    [topic: string]: {
      weight: number;
      color: string;
      description: string;
    };
  }>({});

  useEffect(() => {
    if (question.grammarTopics && question.topicWeights) {
      const colors = [
        'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300',
        'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-300',
        'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300',
        'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-300',
        'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300',
      ];

      const analysis: typeof topicAnalysis = {};
      question.grammarTopics.forEach((topic, index) => {
        analysis[topic] = {
          weight: question.topicWeights![topic] || 1,
          color: colors[index % colors.length],
          description: getTopicDescription(topic),
        };
      });
      setTopicAnalysis(analysis);
    }
  }, [question]);

  const getTopicDescription = (topic: string): string => {
    const descriptions: { [key: string]: string } = {
      'Present Perfect': 'Actions that started in the past and continue to the present',
      'Relative Clauses': 'Clauses that provide additional information about a noun',
      'Passive Voice': 'Focus on the action rather than who performs it',
      'Conditional Sentences': 'Sentences expressing hypothetical situations',
      'Modal Verbs': 'Verbs expressing possibility, necessity, or ability',
      'Gerunds and Infinitives': 'Verb forms used as nouns or after certain verbs',
      'Past Perfect': 'Actions completed before another past action',
      'Future Tense': 'Actions that will happen in the future',
      'Subjunctive Mood': 'Expressing wishes, hypotheticals, or contrary-to-fact situations',
      'Reported Speech': 'Reporting what someone else said',
      'Comparatives and Superlatives': 'Comparing things or showing extremes',
      'Articles': 'The definite and indefinite articles (a, an, the)',
    };
    return descriptions[topic] || 'Important grammar concept';
  };

  const getTopicDifficulty = (topic: string): 'Beginner' | 'Intermediate' | 'Advanced' => {
    const difficulties: { [key: string]: 'Beginner' | 'Intermediate' | 'Advanced' } = {
      'Present Perfect': 'Intermediate',
      'Relative Clauses': 'Intermediate',
      'Passive Voice': 'Intermediate',
      'Conditional Sentences': 'Advanced',
      'Modal Verbs': 'Intermediate',
      'Gerunds and Infinitives': 'Advanced',
      'Past Perfect': 'Advanced',
      'Future Tense': 'Beginner',
      'Subjunctive Mood': 'Advanced',
      'Reported Speech': 'Intermediate',
      'Comparatives and Superlatives': 'Beginner',
      'Articles': 'Beginner',
    };
    return difficulties[topic] || 'Intermediate';
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-3">
        {question.options.map((option: string, index: number) => (
          <label
            key={index}
            className="flex items-start space-x-3 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Input
              type="radio"
              name={`question-${question.id}`}
              value={index}
              checked={selectedAnswers[question.id] === index}
              onChange={() => handleAnswerSelect(question.id, index)}
              className="w-4 h-4 text-blue-600 mt-1"
            />
            <span
              className={`flex-1 ${
                showResults
                  ? index === question.correct
                    ? "text-green-600 font-semibold"
                    : selectedAnswers[question.id] === index &&
                      index !== question.correct
                    ? "text-red-600"
                    : "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {option}
            </span>
          </label>
        ))}
      </div>
    );
  };

  const renderInputField = () => {
    return (
      <div className="space-y-2">
        <Input
          type="text"
          value={(selectedAnswers[question.id] as string) || ""}
          onChange={(e) => handleInputAnswer(question.id, e.target.value)}
          placeholder="Type your answer here..."
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
            showResults
              ? selectedAnswers[question.id] === question.correct
                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                : "border-red-500 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          disabled={showResults}
        />
        {showResults && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your answer:{" "}
              <span
                className={
                  selectedAnswers[question.id] === question.correct
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedAnswers[question.id] || "(no answer)"}
              </span>
            </p>
            <p className="text-sm text-green-600">
              Correct answer:{" "}
              <span className="font-semibold">{question.correct}</span>
            </p>
          </div>
        )}
      </div>
    );
  };

  const totalWeight = question.grammarTopics?.reduce((sum, topic) => {
    return sum + (question.topicWeights?.[topic] || 1);
  }, 0) || 1;

  return (
    <div className="space-y-6">
      {/* Topic Analysis Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
          🎯 Multi-Topic Integration Exercise
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          This question tests your understanding of multiple grammar topics working together.
        </p>
        
        {question.grammarTopics && (
          <div className="space-y-2">
            <div className="font-medium text-gray-700 dark:text-gray-300 text-sm">
              Grammar Topics in this Question:
            </div>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {question.grammarTopics.map((topic) => {
                const analysis = topicAnalysis[topic];
                if (!analysis) return null;
                
                const weightPercentage = ((question.topicWeights?.[topic] || 1) / totalWeight) * 100;
                
                return (
                  <div
                    key={topic}
                    className={`p-3 rounded-lg border-2 ${analysis.color}`}
                  >
                    <div className="font-semibold text-sm">{topic}</div>
                    <div className="text-xs mt-1">{analysis.description}</div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs font-medium">
                        {getTopicDifficulty(topic)}
                      </span>
                      <span className="text-xs font-bold">
                        {Math.round(weightPercentage)}% weight
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Question Content */}
      <div className="bg-white dark:bg-gray-800 border rounded-lg p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Question:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Render appropriate input type */}
        {question.options && question.options.length > 0 
          ? renderMultipleChoice() 
          : renderInputField()
        }
      </div>

      {/* Learning Hints */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
          💡 Learning Hints
        </h4>
        <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
          {question.grammarTopics?.map((topic) => (
            <div key={topic} className="flex items-start gap-2">
              <span className="text-yellow-600 dark:text-yellow-400">•</span>
              <div>
                <span className="font-medium">{topic}:</span> {getTopicDescription(topic)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Analysis */}
      {showResults && (
        <div className="bg-gray-50 dark:bg-gray-800 border rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            📊 Answer Analysis
          </h4>
          
          <div className="space-y-3">
            <div className={`p-3 rounded-lg ${
              selectedAnswers[question.id] === question.correct
                ? "bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700"
                : "bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700"
            }`}>
              <div className={`font-semibold ${
                selectedAnswers[question.id] === question.correct
                  ? "text-green-800 dark:text-green-200"
                  : "text-red-800 dark:text-red-200"
              }`}>
                {selectedAnswers[question.id] === question.correct
                  ? "✅ Correct!"
                  : "❌ Incorrect"}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3">
              <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Grammar Explanation:
              </div>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                {question.explanation}
              </p>
            </div>

            {question.tip && (
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-3">
                <div className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  💡 Expert Tip:
                </div>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  {question.tip}
                </p>
              </div>
            )}

            {question.grammarTopics && (
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  🎯 Topics Mastery Assessment:
                </div>
                <div className="space-y-2">
                  {question.grammarTopics.map((topic) => {
                    const weight = question.topicWeights?.[topic] || 1;
                    const isCorrect = selectedAnswers[question.id] === question.correct;
                    const masteryLevel = isCorrect 
                      ? weight > 0.7 ? "Strong" : "Good" 
                      : "Needs Practice";
                    const masteryColor = isCorrect
                      ? weight > 0.7 ? "text-green-600" : "text-blue-600"
                      : "text-red-600";
                    
                    return (
                      <div key={topic} className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{topic}:</span>
                        <span className={`font-semibold ${masteryColor}`}>
                          {masteryLevel}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiTopicIntegration;

"use client";

import { useState } from "react";
import {
  X,
  BookOpen,
  Clock,
  Lightbulb,
  ArrowRight,
  Target,
} from "lucide-react";
import {
  MiniExerciseSuggestionType,
  Exercise,
} from "@/types/grammars/grammars_type";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

interface MiniExerciseSuggestionProps {
  isOpen: boolean;
  onClose: () => void;
  suggestion: MiniExerciseSuggestionType;
  grammarTopic: string;
  setInputText: (text: string) => void;
  setShowMiniExerciseSuggestion: (show: boolean) => void;
  setExercise: (exercise: Exercise | null) => void;
  setSelectedAnswers: (answers: Record<string, string>) => void;
  setShowResults: (show: boolean) => void;
  setLoading: (loading: boolean) => void;
  exerciseType: string;
  proficiencyLevel: string;
  numExercises: number;
}

const MiniExerciseSuggestion = ({
  isOpen,
  onClose,
  suggestion,
  grammarTopic,
  setInputText,
  setShowMiniExerciseSuggestion,
  setExercise,
  setSelectedAnswers,
  setShowResults,
  setLoading,
  exerciseType,
  proficiencyLevel,
  numExercises,
}: MiniExerciseSuggestionProps) => {
  const [showDetails, setShowDetails] = useState(false);

  // NEW: Handle starting mini practice session
  const handleStartMiniPractice = async (topic: string) => {
    // Set the topic for practice
    setInputText(topic);
    // Close the mini exercise suggestion modal
    setShowMiniExerciseSuggestion(false);
    // Reset any existing exercise data
    setExercise(null);
    setSelectedAnswers({});
    setShowResults(false);
    // Show success message to user
    toast.success(`🎯 Starting focused practice on: ${topic}`);

    // Scroll to input section first
    setTimeout(() => {
      const inputElement = document.querySelector(
        'input[type="text"]'
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.scrollIntoView({ behavior: "smooth", block: "center" });
        inputElement.focus();
      }
    }, 100);

    // AUTO-GENERATE EXERCISES after a brief delay
    setTimeout(async () => {
      if (!topic.trim()) return;

      setLoading(true);

      try {
        toast.success("🤖 Auto-generating practice exercises...");

        const response = await fetch("/api/grammar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: topic,
            action: "generate",
            exerciseType: exerciseType,
            proficiencyLevel: proficiencyLevel,
            numExercises: numExercises,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          return toast.error(`❌ Failed to generate exercises: ${errorText}`);
        }

        const data = await response.json();

        if (
          data.exercise &&
          data.exercise.questions &&
          data.exercise.questions.length > 0
        ) {
          setExercise(data.exercise);
          setSelectedAnswers({});
          setShowResults(false);

          // Show success message
          const successMsg = `✅ Generated ${data.exercise.questions.length} focused practice questions for ${topic}!`;
          toast.success(successMsg);

          // Scroll to exercise after generation
          setTimeout(() => {
            const exerciseElement = document.querySelector(
              "[data-exercise-display]"
            );
            if (exerciseElement) {
              exerciseElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 500);
        } else if (data.error) {
          return toast.error("API returned error:", data.error);
        } else {
          return toast.error(`Invalid response`);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to generate exercise";

        // Show user-friendly error
        toast.error(
          `⚠️ ${errorMessage}\n\nPlease try:\n- Using a different grammar topic\n- Selecting fewer questions\n- Checking your internet connection`
        );
      } finally {
        setLoading(false);
      }
    }, 1000); // 1 second delay to allow smooth transition
  };

  if (!isOpen || !suggestion.shouldSuggest || !suggestion.suggestion) {
    return null;
  }

  const { title, description, exercises, tips, estimatedTime } =
    suggestion.suggestion;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Practice Recommendation</h2>
                <p className="text-orange-100 text-sm">
                  {suggestion.mistakeCount} recent mistakes detected in{" "}
                  {grammarTopic}
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Main Message */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="bg-orange-500 text-white p-2 rounded-lg mt-1">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                  Let&apos;s strengthen your {grammarTopic} skills!
                </h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  You&apos;ve made several mistakes in this area recently. A
                  quick mini practice session can help you master this grammar
                  point and boost your confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Practice Overview */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{estimatedTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>{exercises.length} exercise types</span>
              </div>
            </div>
          </div>

          {/* Exercise Types Preview */}
          <div className="mb-6">
            <h5 className="font-medium text-gray-800 dark:text-white mb-3">
              What you&apos;ll practice:
            </h5>
            <div className="grid md:grid-cols-2 gap-3">
              {exercises.slice(0, 2).map((exercise, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3"
                >
                  <h6 className="font-medium text-blue-800 dark:text-blue-200 text-sm mb-1">
                    {exercise.type}
                  </h6>
                  <p className="text-blue-700 dark:text-blue-300 text-xs mb-2">
                    {exercise.description}
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded px-2 py-1">
                    Example: {exercise.example}
                  </div>
                </div>
              ))}
            </div>

            {exercises.length > 2 && (
              <Button
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 dark:text-blue-400 text-sm mt-2 hover:underline"
              >
                {showDetails
                  ? "Show less"
                  : `+${exercises.length - 2} more exercise types`}
              </Button>
            )}

            {/* Additional Exercise Types */}
            {showDetails && exercises.length > 2 && (
              <div className="grid md:grid-cols-2 gap-3 mt-3">
                {exercises.slice(2).map((exercise, index) => (
                  <div
                    key={index + 2}
                    className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3"
                  >
                    <h6 className="font-medium text-blue-800 dark:text-blue-200 text-sm mb-1">
                      {exercise.type}
                    </h6>
                    <p className="text-blue-700 dark:text-blue-300 text-xs mb-2">
                      {exercise.description}
                    </p>
                    <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded px-2 py-1">
                      Example: {exercise.example}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Tips */}
          <div className="mb-6">
            <h5 className="font-medium text-gray-800 dark:text-white mb-3">
              Quick tips to remember:
            </h5>
            <div className="space-y-2">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2 text-sm">
                  <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => {
                handleStartMiniPractice(grammarTopic);
                onClose();
              }}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>Start Practice Session</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              onClick={onClose}
              className="flex-1 sm:flex-none bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Maybe Later
            </Button>
          </div>

          {/* Motivational Note */}
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-sm text-purple-700 dark:text-purple-300 text-center">
              🌟 <strong>Remember:</strong> Even native speakers had to practice
              these rules! Each mistake is a step closer to mastery. You&apos;ve
              got this! 💪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniExerciseSuggestion;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  getRelevantSuggestions,
  levelEquivalencies,
} from "@/lib/static/grammars/grammar";
import { CEFRLevel, TypeExcercise } from "@/types/grammars/grammars_type";
import { Dispatch, SetStateAction } from "react";

interface InputSectionProps {
  activeTab: "generate" | "fix";
  proficiencyLevel: string;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  exerciseType: string;
  setExerciseType: Dispatch<SetStateAction<TypeExcercise>>; // Adjust type as needed
  numExercises: number;
  setNumExercises: Dispatch<SetStateAction<number>>;
  generateExercise: () => void;
  fixGrammar: () => void;
  resetExercise: () => void;
  loading: boolean;
  showSuggestions: boolean;
  setShowSuggestions: Dispatch<SetStateAction<boolean>>;
  handleSuggestionClick: (suggestion: string) => void;
  autoAnalyzeEnabled: boolean;
  setAutoAnalyzeEnabled: Dispatch<SetStateAction<boolean>>;
  lightningTimeLimit?: number;
  setLightningTimeLimit?: Dispatch<SetStateAction<number>>;
  gameTimeLimit?: number;
  setGameTimeLimit?: Dispatch<SetStateAction<number>>;
  questionPauseTime?: number;
  setQuestionPauseTime?: Dispatch<SetStateAction<number>>;
}

const InputSection: React.FC<InputSectionProps> = ({
  activeTab,
  proficiencyLevel,
  inputText,
  setInputText,
  exerciseType,
  setExerciseType,
  numExercises,
  setNumExercises,
  generateExercise,
  fixGrammar,
  resetExercise,
  loading,
  showSuggestions,
  setShowSuggestions,
  handleSuggestionClick,
  autoAnalyzeEnabled,
  setAutoAnalyzeEnabled,
  lightningTimeLimit = 10,
  setLightningTimeLimit,
  gameTimeLimit = 15,
  setGameTimeLimit,
  questionPauseTime = 3,
  setQuestionPauseTime,
}) => {
  // Helper function to get mini game display names
  const getGameDisplayName = (gameType: string): string => {
    const gameNames: { [key: string]: string } = {
      "speed-challenge": "Speed Challenge ⚡",
      "word-arrangement-race": "Word Arrangement Race 🏃‍♂️",
      "grammar-memory-match": "Grammar Memory Match 🧠",
      "image-grammar-quiz": "Image Grammar Quiz 🖼️",
      "grammar-puzzle-solver": "Grammar Puzzle Solver 🧩",
      "rapid-fire-corrections": "Rapid Fire Corrections 🔥",
      "tense-timeline-game": "Tense Timeline Master ⏰",
      "grammar-category-sort": "Grammar Category Sort 📋",
      "grammar-generator": "Grammar Generator 🎯",
    };
    return gameNames[gameType] || gameType;
  };

  // Helper function to get mini game descriptions
  const getGameDescription = (gameType: string): string => {
    const descriptions: { [key: string]: string } = {
      "speed-challenge":
        "Answer grammar questions as quickly as possible with time pressure and instant feedback!",
      "word-arrangement-race":
        "Drag and drop scrambled words to form correct sentences in record time!",
      "grammar-memory-match":
        "Match grammar rules with their examples in an engaging memory card game!",
      "image-grammar-quiz":
        "Answer grammar questions based on AI-generated images for visual learning!",
      "grammar-puzzle-solver":
        "Solve crosswords, anagrams, and grammar riddles to master language skills!",
      "rapid-fire-corrections":
        "Quickly identify correct and incorrect sentences with streak-based scoring!",
      "tense-timeline-game":
        "Arrange events and sentences in chronological order to master tense usage!",
      "grammar-category-sort":
        "Sort words and phrases into correct grammar categories using drag-and-drop!",
      "grammar-generator":
        "Create your own sentences using vocabulary words and specific grammar rules!",
    };
    return descriptions[gameType] || "An interactive grammar learning game!";
  };

  // Helper function to handle exercise type changes with auto-analysis management
  const handleExerciseTypeChange = (newExerciseType: TypeExcercise) => {
    setExerciseType(newExerciseType);

    // Automatically disable Auto Grammar Analysis for lightning games and mini-games
    const miniGameTypes = [
      "speed-challenge",
      "word-arrangement-race",
      "grammar-memory-match",
      "image-grammar-quiz",
      "grammar-puzzle-solver",
      "rapid-fire-corrections",
      "tense-timeline-game",
      "grammar-category-sort",
      "grammar-generator",
    ];

    if (
      (newExerciseType === "true-false-lightning" ||
        miniGameTypes.includes(newExerciseType)) &&
      autoAnalyzeEnabled
    ) {
      setAutoAnalyzeEnabled(false);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {activeTab === "generate"
          ? "Enter a topic or text to generate grammar exercises:"
          : "Enter text to fix grammar errors:"}
      </label>

      {/* Grammar Suggestions - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="mb-3">
          <Button
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Grammar Topic Suggestions
            <svg
              className={`w-4 h-4 transition-transform ${
                showSuggestions ? "rotate-180" : ""
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

          {showSuggestions && (
            <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Suggestions for {proficiencyLevel} Level
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">
                    {
                      levelEquivalencies[proficiencyLevel as CEFRLevel]
                        .description
                    }
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(getRelevantSuggestions(proficiencyLevel)).map(
                  ([category, suggestions]) => (
                    <div key={category} className="space-y-2">
                      <h4
                        className={`font-semibold text-sm border-b pb-1 ${
                          category.includes("Recommended")
                            ? "text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-600"
                            : "text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        {category.includes("Recommended") && (
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                        )}
                        {category}
                      </h4>
                      <div className="space-y-1">
                        {suggestions.map(
                          (suggestion: string, index: number) => (
                            <Button
                              variant="ghost"
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className={`block w-full text-left text-xs px-2 py-1 rounded transition-colors whitespace-normal h-full ${
                                category.includes("Recommended")
                                  ? "text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-200"
                                  : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                              }`}
                            >
                              {suggestion}
                            </Button>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  💡 <strong>Blue topics</strong> are recommended for your
                  current level ({proficiencyLevel}). Click any suggestion to
                  use it, or type your own custom topic.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Special Grammar Generator Input */}
      {activeTab === "generate" && exerciseType === "grammar-generator" && (
        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-3">
            🎯 Grammar Generator Setup
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Enter vocabulary words (separated by commas):
              </label>
              <Input
                type="text"
                placeholder="go, school, every day, student, learn"
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                Example: go, school, every day, student, learn
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Grammar Rule/Tense:
              </label>
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Present Simple, Past Continuous, Present Perfect..."
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                This will be used to generate sentences with your vocabulary
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mini Games Information */}
      {activeTab === "generate" &&
        [
          "speed-challenge",
          "word-arrangement-race",
          "grammar-memory-match",
          "image-grammar-quiz",
          "grammar-puzzle-solver",
          "rapid-fire-corrections",
          "tense-timeline-game",
          "grammar-category-sort",
        ].includes(exerciseType) && (
          <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-3">
              🎮 Mini Game: {getGameDisplayName(exerciseType)}
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-purple-700 dark:text-purple-300">
                <strong>Fun Learning Mode:</strong> Instead of traditional
                exercises, you'll play an interactive game that makes grammar
                learning enjoyable!
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {getGameDescription(exerciseType)}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                <span>🎯 Interactive</span>
                <span>•</span>
                <span>⚡ Engaging</span>
                <span>•</span>
                <span>🏆 Score-based</span>
                <span>•</span>
                <span>📊 Progress tracking</span>
              </div>
            </div>

            {/* Mini Games Timing Controls */}
            <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-700">
              <h4 className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-3">
                ⏱️ Game Timing Settings
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
                    Time per Question:
                  </label>
                  <select
                    value={gameTimeLimit || 15}
                    onChange={(e) => setGameTimeLimit?.(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-purple-300 dark:border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value={10}>10 seconds - Fast</option>
                    <option value={15}>15 seconds - Normal</option>
                    <option value={20}>20 seconds - Relaxed</option>
                    <option value={25}>25 seconds - Easy</option>
                    <option value={30}>30 seconds - No pressure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
                    Pause Between Questions:
                  </label>
                  <select
                    value={questionPauseTime || 3}
                    onChange={(e) =>
                      setQuestionPauseTime?.(Number(e.target.value))
                    }
                    className="w-full px-3 py-2 border border-purple-300 dark:border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value={3}>3 seconds - Quick</option>
                    <option value={10}>10 seconds - Normal</option>
                    <option value={20}>20 seconds - Comfortable</option>
                    <option value={30}>30 seconds - Relaxed</option>
                    <option value={60}>60 seconds - Long break</option>
                  </select>
                </div>
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                💡 Adjust timing to match your learning pace. You can always
                skip the pause by clicking "Continue"!
              </p>
            </div>
          </div>
        )}

      {/* Special True-False Lightning Game Info */}
      {activeTab === "generate" && exerciseType === "true-false-lightning" && (
        <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
          <h3 className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-3">
            ⚡ Lightning Game Setup
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                <strong>How it works:</strong>
              </p>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 ml-4">
                <li>• Each sentence appears for your chosen time limit</li>
                <li>
                  • Click TRUE if grammatically correct, FALSE if incorrect
                </li>
                <li>• Use keyboard: T for True, F for False</li>
                <li>• Fast-paced grammar practice game</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Grammar Topic:
                </label>
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Present Simple, Past Tense..."
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time per Question:
                </label>
                <select
                  value={lightningTimeLimit || 10}
                  onChange={(e) =>
                    setLightningTimeLimit?.(Number(e.target.value))
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value={5}>5 seconds</option>
                  <option value={8}>8 seconds</option>
                  <option value={10}>10 seconds (default)</option>
                  <option value={15}>15 seconds</option>
                  <option value={20}>20 seconds</option>
                  <option value={30}>30 seconds</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Only show textarea if NOT lightning game */}
      {!(
        activeTab === "generate" && exerciseType === "true-false-lightning"
      ) && (
        <Textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            activeTab === "generate"
              ? 'e.g., "past tense verbs" or "conditional sentences" (or use suggestions above)'
              : 'e.g., "I have went to the store yesterday"'
          }
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      )}

      {/* Grammar Analysis Toggle - only show for generate tab and disabled for Lightning Game and Mini Games */}
      {activeTab === "generate" && (
        <div
          className={`mt-3 ${
            exerciseType === "true-false-lightning" ||
            [
              "speed-challenge",
              "word-arrangement-race",
              "grammar-memory-match",
              "image-grammar-quiz",
              "grammar-puzzle-solver",
              "rapid-fire-corrections",
              "tense-timeline-game",
              "grammar-category-sort",
            ].includes(exerciseType)
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() => {
            // Prevent toggling if Lightning Game or Mini Games are selected
            if (
              exerciseType !== "true-false-lightning" &&
              ![
                "speed-challenge",
                "word-arrangement-race",
                "grammar-memory-match",
                "image-grammar-quiz",
                "grammar-puzzle-solver",
                "rapid-fire-corrections",
                "tense-timeline-game",
                "grammar-category-sort",
              ].includes(exerciseType)
            ) {
              setAutoAnalyzeEnabled(!autoAnalyzeEnabled);
            }
          }}
        >
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H16a1 1 0 110 2h-3.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H4a1 1 0 110-2h3.47l.56-2.243a1 1 0 011.213-.727zM8.53 8l-1 4h2.94l1-4H8.53z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-purple-800 dark:text-purple-200">
                  Auto Grammar Analysis
                  {(exerciseType === "true-false-lightning" ||
                    [
                      "speed-challenge",
                      "word-arrangement-race",
                      "grammar-memory-match",
                      "image-grammar-quiz",
                      "grammar-puzzle-solver",
                      "rapid-fire-corrections",
                      "tense-timeline-game",
                      "grammar-category-sort",
                    ].includes(exerciseType)) && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal ml-2">
                      (Disabled for{" "}
                      {exerciseType === "true-false-lightning"
                        ? "Lightning Game"
                        : "Mini Games"}
                      )
                    </span>
                  )}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {exerciseType === "true-false-lightning"
                    ? "Auto-disabled for optimal Lightning Game experience"
                    : [
                        "speed-challenge",
                        "word-arrangement-race",
                        "grammar-memory-match",
                        "image-grammar-quiz",
                        "grammar-puzzle-solver",
                        "rapid-fire-corrections",
                        "tense-timeline-game",
                        "grammar-category-sort",
                      ].includes(exerciseType)
                    ? "Auto-disabled for optimal Mini Game experience"
                    : "Automatically highlight grammar elements in questions"}
                </p>
              </div>
            </div>

            <Switch
              className={`focus:outline-none ${
                exerciseType === "true-false-lightning" ||
                [
                  "speed-challenge",
                  "word-arrangement-race",
                  "grammar-memory-match",
                  "image-grammar-quiz",
                  "grammar-puzzle-solver",
                  "rapid-fire-corrections",
                  "tense-timeline-game",
                  "grammar-category-sort",
                ].includes(exerciseType)
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                  : autoAnalyzeEnabled
                  ? "bg-purple-600"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              checked={
                exerciseType === "true-false-lightning" ||
                [
                  "speed-challenge",
                  "word-arrangement-race",
                  "grammar-memory-match",
                  "image-grammar-quiz",
                  "grammar-puzzle-solver",
                  "rapid-fire-corrections",
                  "tense-timeline-game",
                  "grammar-category-sort",
                ].includes(exerciseType)
                  ? false
                  : autoAnalyzeEnabled
              }
              disabled={
                exerciseType === "true-false-lightning" ||
                [
                  "speed-challenge",
                  "word-arrangement-race",
                  "grammar-memory-match",
                  "image-grammar-quiz",
                  "grammar-puzzle-solver",
                  "rapid-fire-corrections",
                  "tense-timeline-game",
                  "grammar-category-sort",
                ].includes(exerciseType)
              }
              onCheckedChange={(checked) => {
                // Prevent changes if Lightning Game or Mini Games are selected
                if (
                  exerciseType !== "true-false-lightning" &&
                  ![
                    "speed-challenge",
                    "word-arrangement-race",
                    "grammar-memory-match",
                    "image-grammar-quiz",
                    "grammar-puzzle-solver",
                    "rapid-fire-corrections",
                    "tense-timeline-game",
                    "grammar-category-sort",
                  ].includes(exerciseType)
                ) {
                  setAutoAnalyzeEnabled(checked);
                }
              }}
            />
          </div>
          {autoAnalyzeEnabled &&
            exerciseType !== "true-false-lightning" &&
            ![
              "speed-challenge",
              "word-arrangement-race",
              "grammar-memory-match",
              "image-grammar-quiz",
              "grammar-puzzle-solver",
              "rapid-fire-corrections",
              "tense-timeline-game",
              "grammar-category-sort",
            ].includes(exerciseType) && (
              <div className="mt-2 p-2 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                <p className="text-xs text-purple-700 dark:text-purple-300 flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  When enabled, all questions will automatically show grammar
                  highlighting without needing to click analyze buttons.
                </p>
              </div>
            )}
          {(exerciseType === "true-false-lightning" ||
            [
              "speed-challenge",
              "word-arrangement-race",
              "grammar-memory-match",
              "image-grammar-quiz",
              "grammar-puzzle-solver",
              "rapid-fire-corrections",
              "tense-timeline-game",
              "grammar-category-sort",
            ].includes(exerciseType)) && (
            <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-xs text-yellow-700 dark:text-yellow-300 flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Grammar Analysis is automatically disabled for{" "}
                {exerciseType === "true-false-lightning"
                  ? "Lightning Game"
                  : "Mini Games"}{" "}
                to ensure optimal performance and focus.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Exercise Type Selection - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Exercise Type:
          </label>

          {/* Basic Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Basic Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="multiple-choice"
                  checked={exerciseType === "multiple-choice"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Multiple Choice
                  </div>
                  <div className="text-xs text-gray-500">
                    Choose from options
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="fill-in-blank"
                  checked={exerciseType === "fill-in-blank"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Fill in Blanks
                  </div>
                  <div className="text-xs text-gray-500">
                    Type missing words
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="sentence-completion"
                  checked={exerciseType === "sentence-completion"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Complete Sentences
                  </div>
                  <div className="text-xs text-gray-500">
                    Finish the sentence
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="cloze-test"
                  checked={exerciseType === "cloze-test"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Cloze Test
                  </div>
                  <div className="text-xs text-gray-500">Fill text gaps</div>
                </div>
              </label>
            </div>
          </div>

          {/* Advanced Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Advanced Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="transformation"
                  checked={exerciseType === "transformation"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Transformation
                  </div>
                  <div className="text-xs text-gray-500">Rewrite sentences</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="paraphrasing"
                  checked={exerciseType === "paraphrasing"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Paraphrasing
                  </div>
                  <div className="text-xs text-gray-500">Rephrase meaning</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="sentence-combining"
                  checked={exerciseType === "sentence-combining"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sentence Combining
                  </div>
                  <div className="text-xs text-gray-500">Join sentences</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="sentence-building"
                  checked={exerciseType === "sentence-building"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sentence Building
                  </div>
                  <div className="text-xs text-gray-500">Build from words</div>
                </div>
              </label>
            </div>
          </div>

          {/* Specialized Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Specialized Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="verb-conjugation"
                  checked={exerciseType === "verb-conjugation"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Verb Conjugation
                  </div>
                  <div className="text-xs text-gray-500">Conjugate verbs</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="word-formation"
                  checked={exerciseType === "word-formation"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Word Formation
                  </div>
                  <div className="text-xs text-gray-500">Form new words</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="punctuation"
                  checked={exerciseType === "punctuation"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Punctuation
                  </div>
                  <div className="text-xs text-gray-500">Add punctuation</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="dialogue-completion"
                  checked={exerciseType === "dialogue-completion"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dialogue Completion
                  </div>
                  <div className="text-xs text-gray-500">
                    Complete dialogues
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="form-conversion"
                  checked={exerciseType === "form-conversion"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Form Conversion
                  </div>
                  <div className="text-xs text-gray-500">
                    Statement → Question/Command
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="situational-grammar"
                  checked={exerciseType === "situational-grammar"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Situational Grammar
                  </div>
                  <div className="text-xs text-gray-500">
                    Grammar for real situations
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="paragraph-tense-conversion"
                  checked={exerciseType === "paragraph-tense-conversion"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Paragraph Tense Conversion
                  </div>
                  <div className="text-xs text-gray-500">
                    Change paragraph tenses
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* New Interactive Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              🎮 Mini Games (Interactive Fun!)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="speed-challenge"
                  checked={exerciseType === "speed-challenge"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Speed Challenge ⚡
                  </div>
                  <div className="text-xs text-gray-500">
                    Quick grammar race
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="word-arrangement-race"
                  checked={exerciseType === "word-arrangement-race"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Word Race 🏃‍♂️
                  </div>
                  <div className="text-xs text-gray-500">
                    Arrange words fast
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="grammar-memory-match"
                  checked={exerciseType === "grammar-memory-match"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Memory Match 🧠
                  </div>
                  <div className="text-xs text-gray-500">
                    Match rules & examples
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="image-grammar-quiz"
                  checked={exerciseType === "image-grammar-quiz"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Image Quiz 🖼️
                  </div>
                  <div className="text-xs text-gray-500">AI image grammar</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="grammar-puzzle-solver"
                  checked={exerciseType === "grammar-puzzle-solver"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Puzzle Solver 🧩
                  </div>
                  <div className="text-xs text-gray-500">
                    Crosswords & riddles
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="rapid-fire-corrections"
                  checked={exerciseType === "rapid-fire-corrections"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Rapid Fire 🔥
                  </div>
                  <div className="text-xs text-gray-500">Fast corrections</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="tense-timeline-game"
                  checked={exerciseType === "tense-timeline-game"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Timeline Master ⏰
                  </div>
                  <div className="text-xs text-gray-500">
                    Chronological order
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="grammar-category-sort"
                  checked={exerciseType === "grammar-category-sort"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category Sort 📋
                  </div>
                  <div className="text-xs text-gray-500">Drag & categorize</div>
                </div>
              </label>
            </div>
          </div>

          {/* Traditional Interactive Exercise Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Interactive Types (Traditional)
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="grammar-generator"
                  checked={exerciseType === "grammar-generator"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Grammar Generator
                  </div>
                  <div className="text-xs text-gray-500">
                    Generate sentences from vocabulary
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="true-false-lightning"
                  checked={exerciseType === "true-false-lightning"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Lightning Game ⚡
                  </div>
                  <div className="text-xs text-gray-500">
                    True/False in 5 seconds
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Original Exercise Types */}
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Other Types
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="error-correction"
                  checked={exerciseType === "error-correction"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Error Correction
                  </div>
                  <div className="text-xs text-gray-500">
                    Find and fix errors
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="reading-comprehension"
                  checked={exerciseType === "reading-comprehension"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Reading Comprehension
                  </div>
                  <div className="text-xs text-gray-500">Read and answer</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="word-order"
                  checked={exerciseType === "word-order"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Word Order
                  </div>
                  <div className="text-xs text-gray-500">
                    Arrange words correctly
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="matching"
                  checked={exerciseType === "matching"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Matching
                  </div>
                  <div className="text-xs text-gray-500">
                    Match items together
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="grammar-comparison"
                  checked={exerciseType === "comparison-exercise"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Grammar Comparison
                  </div>
                  <div className="text-xs text-gray-500">
                    Compare similar structures
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="context-matching"
                  checked={exerciseType === "context-matching"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Context Matching
                  </div>
                  <div className="text-xs text-gray-500">
                    Choose grammar for situations
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="passive-active-matching"
                  checked={exerciseType === "passive-active-matching"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Passive-Active Matching
                  </div>
                  <div className="text-xs text-gray-500">
                    Drag and match voice forms
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="clause-combining"
                  checked={exerciseType === "clause-combining"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Clause Combining
                  </div>
                  <div className="text-xs text-gray-500">
                    Drag and combine clauses
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <Input
                  type="radio"
                  name="exerciseType"
                  value="multi-topic-integration"
                  checked={exerciseType === "multi-topic-integration"}
                  onChange={(e) =>
                    handleExerciseTypeChange(e.target.value as TypeExcercise)
                  }
                  className="mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Multi-Topic Integration
                  </div>
                  <div className="text-xs text-gray-500">
                    2-3 grammar topics combined
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Number of Exercises Selection - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Exercises:
          </label>
          <div className="flex items-center gap-4">
            <select
              value={numExercises}
              onChange={(e) => setNumExercises(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              {/* Generate options: 5, 10, 15, 20, 25, 30 */}
              {[5, 10, 15, 20, 25, 30].map((num) => (
                <option key={num} value={num}>
                  {num} exercises
                </option>
              ))}
            </select>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              (5-30 exercises, default: 5)
            </span>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        {activeTab === "generate" ? (
          <Button
            onClick={generateExercise}
            disabled={loading || !inputText.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Generating...
              </>
            ) : (
              "Generate Exercise"
            )}
          </Button>
        ) : (
          <Button
            onClick={fixGrammar}
            disabled={loading || !inputText.trim()}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Fixing...
              </>
            ) : (
              "Fix Grammar"
            )}
          </Button>
        )}
        <Button
          onClick={resetExercise}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default InputSection;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypeExcercise } from "@/types/grammars/grammars_type";
import {
  Clock,
  Zap,
  Puzzle,
  Image,
  Target,
  Shuffle,
  Brain,
  ArrowRight,
  Timer,
  Grid,
} from "lucide-react";

interface MiniGamesSelectionProps {
  onGameSelect: (gameType: TypeExcercise) => void;
  currentGame?: TypeExcercise;
  disabled?: boolean;
}

interface GameOption {
  type: TypeExcercise;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
  features: string[];
  color: string;
}

const MINI_GAMES: GameOption[] = [
  {
    type: "speed-challenge",
    name: "Speed Challenge ⚡",
    description: "Answer grammar questions as quickly as possible!",
    icon: <Zap className="w-6 h-6" />,
    difficulty: "Medium",
    timeEstimate: "2-5 min",
    features: ["Time pressure", "Quick thinking", "Instant feedback"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    type: "word-arrangement-race",
    name: "Word Race 🏃‍♂️",
    description: "Arrange scrambled words into correct sentences quickly!",
    icon: <Shuffle className="w-6 h-6" />,
    difficulty: "Easy",
    timeEstimate: "3-7 min",
    features: ["Drag & drop", "Sentence building", "Order matters"],
    color: "from-blue-400 to-cyan-500",
  },
  {
    type: "grammar-memory-match",
    name: "Memory Match 🧠",
    description: "Match grammar rules with examples in a memory game!",
    icon: <Brain className="w-6 h-6" />,
    difficulty: "Medium",
    timeEstimate: "5-10 min",
    features: ["Memory skills", "Pattern matching", "Rule learning"],
    color: "from-purple-400 to-pink-500",
  },
  {
    type: "image-grammar-quiz",
    name: "Image Quiz 🖼️",
    description: "Answer grammar questions based on AI-generated images!",
    icon: <Image className="w-6 h-6" />,
    difficulty: "Hard",
    timeEstimate: "7-12 min",
    features: ["Visual learning", "AI images", "Context clues"],
    color: "from-green-400 to-emerald-500",
  },
  {
    type: "grammar-puzzle-solver",
    name: "Grammar Puzzles 🧩",
    description: "Solve crosswords, anagrams, and grammar riddles!",
    icon: <Puzzle className="w-6 h-6" />,
    difficulty: "Hard",
    timeEstimate: "10-15 min",
    features: ["Critical thinking", "Word play", "Multiple formats"],
    color: "from-indigo-400 to-purple-600",
  },
  {
    type: "rapid-fire-corrections",
    name: "Rapid Fire 🔥",
    description: "Quickly spot and correct grammar mistakes!",
    icon: <Target className="w-6 h-6" />,
    difficulty: "Medium",
    timeEstimate: "3-8 min",
    features: ["Error detection", "Quick corrections", "Streak system"],
    color: "from-red-400 to-rose-500",
  },
  {
    type: "tense-timeline-game",
    name: "Timeline Master ⏰",
    description: "Arrange events and sentences in chronological order!",
    icon: <Clock className="w-6 h-6" />,
    difficulty: "Medium",
    timeEstimate: "5-10 min",
    features: ["Time concepts", "Sequence order", "Tense mastery"],
    color: "from-teal-400 to-cyan-600",
  },
  {
    type: "grammar-category-sort",
    name: "Category Sort 📋",
    description: "Sort words and phrases into correct grammar categories!",
    icon: <Grid className="w-6 h-6" />,
    difficulty: "Easy",
    timeEstimate: "4-8 min",
    features: ["Classification", "Grammar categories", "Organizational skills"],
    color: "from-amber-400 to-orange-600",
  },
  {
    type: "grammar-generator",
    name: "Grammar Generator 🎯",
    description: "Create sentences using vocabulary and grammar rules!",
    icon: <Target className="w-6 h-6" />,
    difficulty: "Medium",
    timeEstimate: "5-12 min",
    features: ["Sentence creation", "Vocabulary practice", "Grammar rules"],
    color: "from-indigo-400 to-blue-600",
  },
];

const MiniGamesSelection: React.FC<MiniGamesSelectionProps> = ({
  onGameSelect,
  currentGame,
  disabled = false,
}) => {
  const [selectedGame, setSelectedGame] = useState<GameOption | null>(
    currentGame
      ? MINI_GAMES.find((game) => game.type === currentGame) || null
      : null
  );

  const handleGameSelect = (game: GameOption) => {
    setSelectedGame(game);
    onGameSelect(game.type);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "Hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          🎮 Choose Your Mini Game
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select a fun way to practice grammar!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MINI_GAMES.map((game) => (
          <div
            key={game.type}
            className={`
              relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer
              ${
                selectedGame?.type === game.type
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md"
                  : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}
            `}
            onClick={() => !disabled && handleGameSelect(game)}
          >
            {/* Gradient background accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${game.color} rounded-t-xl`}
            />

            <div className="flex items-start space-x-3 mt-2">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${game.color} text-white`}
              >
                {game.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 dark:text-white text-sm">
                    {game.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      game.difficulty
                    )}`}
                  >
                    {game.difficulty}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2">
                  {game.description}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {game.timeEstimate}
                  </span>

                  {selectedGame?.type === game.type && (
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <span className="font-medium">Selected</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {game.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {game.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                      +{game.features.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <div className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${selectedGame.color} text-white`}
            >
              {selectedGame.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                {selectedGame.name} - Game Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Difficulty:
                  </span>
                  <span
                    className={`ml-2 px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(
                      selectedGame.difficulty
                    )}`}
                  >
                    {selectedGame.difficulty}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Duration:
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {selectedGame.timeEstimate}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Features:
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {selectedGame.features.length} unique
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                  All Features:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedGame.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniGamesSelection;

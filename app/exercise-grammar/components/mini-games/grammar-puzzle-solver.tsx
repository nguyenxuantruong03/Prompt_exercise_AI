"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Exercise } from "@/types/grammars/grammars_type";

interface GrammarPuzzleSolverGameProps {
  exercise: Exercise;
  onComplete: (results: any) => void;
  onQuestionAnswer: (id: number, answer: string) => void;
  selectedAnswers: { [key: number]: string };
}

interface Puzzle {
  id: number;
  type: "crossword" | "anagram" | "riddle";
  question: string;
  answer: string;
  hint?: string;
  solved: boolean;
  attempts: number;
}

const GrammarPuzzleSolverGame: React.FC<GrammarPuzzleSolverGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
}) => {
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (exercise && exercise.questions) {
      initializePuzzles();
    }
  }, [exercise]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearTimeout(interval);
  }, [gameStarted, gameCompleted]);

  const initializePuzzles = () => {
    const gamePuzzles: Puzzle[] = exercise.questions.map((question, index) => {
      const puzzleTypes: ("crossword" | "anagram" | "riddle")[] = [
        "crossword",
        "anagram",
        "riddle",
      ];
      const randomType =
        puzzleTypes[Math.floor(Math.random() * puzzleTypes.length)];

      let puzzleQuestion = question.question;
      let answer = "";
      let hint = "";

      // Get the correct answer
      if (question.options && typeof question.correct === "number") {
        answer = question.options[question.correct];
      }

      // Create puzzle based on type
      switch (randomType) {
        case "crossword":
          puzzleQuestion = `Fill in the blank with the correct grammar term: "${question.question}"`;
          hint =
            question.explanation || "Think about the grammar rule being tested";
          break;
        case "anagram":
          puzzleQuestion = `Unscramble these letters to form the correct answer: "${scrambleWord(
            answer
          )}"`;
          hint = `Original question: ${question.question}`;
          break;
        case "riddle":
          puzzleQuestion = `Grammar Riddle: ${createRiddle(
            question.question,
            answer
          )}`;
          hint = question.explanation || "Consider the grammar context";
          break;
      }

      return {
        id: index,
        type: randomType,
        question: puzzleQuestion,
        answer: answer.toLowerCase().trim(),
        hint,
        solved: false,
        attempts: 0,
      };
    });

    setPuzzles(gamePuzzles);
  };

  const scrambleWord = (word: string): string => {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("")
      .toUpperCase();
  };

  const createRiddle = (question: string, answer: string): string => {
    const riddles = [
      `I am a grammar element that ${question.toLowerCase()} and I am "${answer}". What am I?`,
      `In the sentence "${question}", what word fits best? I am ${answer.length} letters long.`,
      `Grammar seekers know me well, I complete "${question}" and start with "${answer[0]}".`,
    ];
    return riddles[Math.floor(Math.random() * riddles.length)];
  };

  const handleAnswerSubmit = (puzzleId: number, answer: string) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    const puzzle = puzzles[puzzleId];
    if (!puzzle) return;

    setPuzzles((prev) =>
      prev.map((p) =>
        p.id === puzzleId ? { ...p, attempts: p.attempts + 1 } : p
      )
    );

    const isCorrect = answer.toLowerCase().trim() === puzzle.answer;

    if (isCorrect) {
      setPuzzles((prev) =>
        prev.map((p) => (p.id === puzzleId ? { ...p, solved: true } : p))
      );

      onQuestionAnswer(puzzleId, answer);

      // Move to next puzzle or complete game
      if (currentPuzzleIndex < puzzles.length - 1) {
        setTimeout(() => {
          setCurrentPuzzleIndex((prev) => prev + 1);
          setShowHint(false);
        }, 1500);
      } else {
        // Game completed
        setGameCompleted(true);
        const results = calculateResults();
        setTimeout(() => onComplete(results), 2000);
      }
    } else {
      // Wrong answer feedback
      setTimeout(() => {
        setShowHint(true);
      }, 500);
    }
  };

  const calculateResults = () => {
    const solvedCount = puzzles.filter((p) => p.solved).length;
    const totalAttempts = puzzles.reduce((sum, p) => sum + p.attempts, 0);
    const averageAttempts = totalAttempts / puzzles.length;

    return {
      solved: solvedCount,
      totalPuzzles: puzzles.length,
      attempts: totalAttempts,
      averageAttempts: Math.round(averageAttempts * 10) / 10,
      timeSeconds: timer,
      score: Math.max(0, 1000 - totalAttempts * 20 - timer + solvedCount * 100),
    };
  };

  const currentPuzzle = puzzles[currentPuzzleIndex];
  const progress =
    puzzles.length > 0 ? ((currentPuzzleIndex + 1) / puzzles.length) * 100 : 0;

  const getPuzzleIcon = (type: string) => {
    switch (type) {
      case "crossword":
        return "📝";
      case "anagram":
        return "🔤";
      case "riddle":
        return "🤔";
      default:
        return "🧩";
    }
  };

  const getPuzzleColor = (type: string) => {
    switch (type) {
      case "crossword":
        return "from-blue-400 to-blue-600";
      case "anagram":
        return "from-green-400 to-green-600";
      case "riddle":
        return "from-purple-400 to-purple-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          🧩 Grammar Puzzle Solver
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Solve crosswords, anagrams, and grammar riddles!
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Game Stats */}
        <div className="flex justify-center space-x-6 text-sm">
          <div className="text-center">
            <div className="font-bold text-lg text-blue-600">
              {formatTime(timer)}
            </div>
            <div className="text-gray-500">Time</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">
              {currentPuzzleIndex + 1}/{puzzles.length}
            </div>
            <div className="text-gray-500">Progress</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">
              {puzzles.filter((p) => p.solved).length}
            </div>
            <div className="text-gray-500">Solved</div>
          </div>
        </div>
      </div>

      {currentPuzzle && !gameCompleted && (
        <div
          className={`bg-gradient-to-r ${getPuzzleColor(
            currentPuzzle.type
          )} rounded-xl p-1 mb-6`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">
                {getPuzzleIcon(currentPuzzle.type)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white capitalize mb-2">
                {currentPuzzle.type} Puzzle
              </h3>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <p className="text-gray-800 dark:text-white font-medium text-center">
                {currentPuzzle.question}
              </p>
            </div>

            {showHint && currentPuzzle.hint && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 mb-4 border border-yellow-200 dark:border-yellow-700">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  💡 <strong>Hint:</strong> {currentPuzzle.hint}
                </p>
              </div>
            )}

            <div className="flex space-x-3">
              <Input
                type="text"
                placeholder="Enter your answer..."
                value={userAnswers[currentPuzzle.id] || ""}
                onChange={(e) =>
                  setUserAnswers((prev) => ({
                    ...prev,
                    [currentPuzzle.id]: e.target.value,
                  }))
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAnswerSubmit(
                      currentPuzzle.id,
                      userAnswers[currentPuzzle.id] || ""
                    );
                  }
                }}
                className="flex-1"
                disabled={currentPuzzle.solved}
              />
              <Button
                onClick={() =>
                  handleAnswerSubmit(
                    currentPuzzle.id,
                    userAnswers[currentPuzzle.id] || ""
                  )
                }
                disabled={
                  !userAnswers[currentPuzzle.id] || currentPuzzle.solved
                }
                className="px-6"
              >
                {currentPuzzle.solved ? "Solved! ✓" : "Submit"}
              </Button>
            </div>

            <div className="mt-3 flex justify-between text-sm text-gray-500">
              <span>Attempts: {currentPuzzle.attempts}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="text-xs"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </div>

            {currentPuzzle.solved && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                <p className="text-green-800 dark:text-green-200 text-center font-medium">
                  🎉 Correct! Moving to next puzzle...
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {gameCompleted && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
            All Puzzles Solved!
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className="font-bold text-lg text-green-600">
                {puzzles.filter((p) => p.solved).length}
              </div>
              <div className="text-sm text-gray-500">Puzzles Solved</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-blue-600">
                {formatTime(timer)}
              </div>
              <div className="text-sm text-gray-500">Total Time</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-orange-600">
                {puzzles.reduce((sum, p) => sum + p.attempts, 0)}
              </div>
              <div className="text-sm text-gray-500">Total Attempts</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-purple-600">
                {Math.max(
                  0,
                  1000 -
                    puzzles.reduce((sum, p) => sum + p.attempts, 0) * 20 -
                    timer +
                    puzzles.filter((p) => p.solved).length * 100
                )}
              </div>
              <div className="text-sm text-gray-500">Final Score</div>
            </div>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="px-6 py-2"
        >
          New Game
        </Button>
        <Button
          onClick={() => onComplete(calculateResults())}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700"
        >
          Finish Game
        </Button>
      </div>
    </div>
  );
};

export default GrammarPuzzleSolverGame;

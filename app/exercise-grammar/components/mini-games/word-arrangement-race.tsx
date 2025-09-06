"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Exercise, Question } from "@/types/grammars/grammars_type";
import {
  Shuffle,
  Clock,
  Trophy,
  CheckCircle,
  XCircle,
  RotateCcw,
  Lightbulb,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

interface WordArrangementRaceProps {
  exercise: Exercise;
  onComplete: (results: WordArrangementResults) => void;
  onQuestionAnswer: (questionId: number, answer: string[]) => void;
  selectedAnswers: { [key: number]: number | string };
  timeLimit?: number;
  pauseBetweenQuestions?: number;
}

interface WordArrangementResults {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  perfectMatches: number;
  hintsUsed: number;
  finalScore: number;
}

interface WordItem {
  id: string;
  word: string;
  originalIndex: number;
}

const WordArrangementRaceGame: React.FC<WordArrangementRaceProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
  timeLimit: userTimeLimit = 30,
  pauseBetweenQuestions = 3,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStartTime, setGameStartTime] = useState<number>(0);
  const [availableWords, setAvailableWords] = useState<WordItem[]>([]);
  const [arrangedWords, setArrangedWords] = useState<WordItem[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [perfectMatches, setPerfectMatches] = useState(0);
  const [timeLeft, setTimeLeft] = useState(userTimeLimit);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseTimeLeft, setPauseTimeLeft] = useState(0);

  const currentQuestion = exercise.questions[currentQuestionIndex];

  // Add safety check for current question
  if (!currentQuestion) {
    console.error("No current question found at index:", currentQuestionIndex);
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center border border-red-200 dark:border-red-700">
        <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">
          Error: No Question Found
        </h3>
        <p className="text-red-700 dark:text-red-300">
          Question at index {currentQuestionIndex} not found in exercise.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          <p>Total questions: {exercise.questions.length}</p>
          <p>Current index: {currentQuestionIndex}</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    console.log("WordArrangementRace Debug:", {
      currentQuestionIndex,
      currentQuestion,
      wordArrangementData: currentQuestion?.wordArrangementData,
      hasScrambledWords: !!currentQuestion?.wordArrangementData?.scrambledWords,
      scrambledWords: currentQuestion?.wordArrangementData?.scrambledWords,
    });

    if (
      currentQuestion?.wordArrangementData?.scrambledWords &&
      Array.isArray(currentQuestion.wordArrangementData.scrambledWords)
    ) {
      const scrambled = currentQuestion.wordArrangementData.scrambledWords.map(
        (word, index) => ({
          id: `word-${index}`,
          word,
          originalIndex: index,
        })
      );
      console.log("Setting up words:", { scrambled });
      setAvailableWords(scrambled);
      setArrangedWords([]);
      setTimeLeft(userTimeLimit);
      setHintsUsed(0);
    } else {
      console.warn(
        "No wordArrangementData or scrambledWords found in question:",
        currentQuestion
      );
      // Create emergency fallback if no data available
      const emergencyWords = ["I", "like", "to", "learn"];
      const scrambled = emergencyWords.map((word, index) => ({
        id: `emergency-word-${index}`,
        word,
        originalIndex: index,
      }));
      console.log("Using emergency fallback words:", { scrambled });
      setAvailableWords(scrambled);
      setArrangedWords([]);
      setTimeLeft(userTimeLimit);
      setHintsUsed(0);
    }
  }, [currentQuestionIndex, currentQuestion, userTimeLimit]);

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameFinished || showResult || timeLeft <= 0 || isPaused)
      return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          console.log("⏰ TIME UP! Auto-checking answer...");
          // When time is up, automatically check the answer
          setTimeout(() => checkAnswer(true), 100); // Small delay to ensure state updates
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameFinished, showResult, timeLeft, isPaused]);

  // Button handler for manual check
  const handleCheckAnswer = () => {
    checkAnswer(false);
  };

  // Pause countdown
  useEffect(() => {
    if (!isPaused || pauseTimeLeft <= 0) return;

    const interval = setInterval(() => {
      setPauseTimeLeft((prev) => {
        if (prev <= 1) {
          proceedToNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, pauseTimeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setGameStartTime(Date.now());
  };

  // Click to move word from available to arranged
  const handleWordClick = (word: WordItem, fromAvailable: boolean) => {
    if (fromAvailable) {
      setAvailableWords((prev) => prev.filter((w) => w.id !== word.id));
      setArrangedWords((prev) => [...prev, word]);
    } else {
      setArrangedWords((prev) => prev.filter((w) => w.id !== word.id));
      setAvailableWords((prev) =>
        [...prev, word].sort((a, b) => a.originalIndex - b.originalIndex)
      );
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (
    e: React.DragEvent,
    word: WordItem,
    fromAvailable: boolean
  ) => {
    console.log("Drag start:", word, fromAvailable);
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        word,
        fromAvailable,
        sourceType: fromAvailable ? "available" : "arranged",
      })
    );
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    // Add visual feedback
    const target = e.currentTarget as HTMLElement;
    target.classList.add("bg-blue-100", "dark:bg-blue-800/50");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Remove visual feedback
    const target = e.currentTarget as HTMLElement;
    target.classList.remove("bg-blue-100", "dark:bg-blue-800/50");
  };

  const handleDropOnAvailable = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    target.classList.remove("bg-blue-100", "dark:bg-blue-800/50");

    try {
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));
      const { word, fromAvailable } = data;

      console.log("🎯 Drop on available area:", word, fromAvailable);

      // Only allow drops from arranged area to available area
      if (!fromAvailable) {
        handleWordClick(word, false); // Move from arranged to available
        console.log("✅ Moved word back to available:", word.word);
      } else {
        console.log("⚠️ Word already in available area, ignoring");
      }
    } catch (error) {
      console.error("❌ Error handling drop on available:", error);
    }
  };

  const handleDropOnArranged = (e: React.DragEvent, targetIndex?: number) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    target.classList.remove("bg-blue-100", "dark:bg-blue-800/50");

    try {
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));
      const { word, fromAvailable } = data;

      console.log("🎯 Drop on arranged area:", {
        word: word.word,
        fromAvailable,
        targetIndex,
      });

      if (fromAvailable) {
        // Move from available to arranged
        setAvailableWords((prev) => prev.filter((w) => w.id !== word.id));

        if (typeof targetIndex === "number") {
          // Insert at specific position
          setArrangedWords((prev) => {
            const newArranged = [...prev];
            newArranged.splice(targetIndex, 0, word);
            console.log("📍 Inserted at position", targetIndex, ":", word.word);
            return newArranged;
          });
        } else {
          // Add to end
          setArrangedWords((prev) => {
            console.log("➕ Added to end:", word.word);
            return [...prev, word];
          });
        }
      } else {
        // Reorder within arranged words
        if (typeof targetIndex === "number") {
          setArrangedWords((prev) => {
            const newArranged = prev.filter((w) => w.id !== word.id);
            newArranged.splice(targetIndex, 0, word);
            console.log(
              "🔄 Reordered to position",
              targetIndex,
              ":",
              word.word
            );
            return newArranged;
          });
        }
      }
    } catch (error) {
      console.error("❌ Error handling drop on arranged:", error);
    }
  };

  const handleDropBetween = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    handleDropOnArranged(e, targetIndex);
  };

  // Move word up in arranged sequence
  const moveWordUp = (index: number) => {
    if (index > 0) {
      setArrangedWords((prev) => {
        const newArranged = [...prev];
        [newArranged[index], newArranged[index - 1]] = [
          newArranged[index - 1],
          newArranged[index],
        ];
        return newArranged;
      });
    }
  };

  // Move word down in arranged sequence
  const moveWordDown = (index: number) => {
    setArrangedWords((prev) => {
      if (index < prev.length - 1) {
        const newArranged = [...prev];
        [newArranged[index], newArranged[index + 1]] = [
          newArranged[index + 1],
          newArranged[index],
        ];
        return newArranged;
      }
      return prev;
    });
  };

  const resetWords = () => {
    const allWords = [...availableWords, ...arrangedWords];
    setAvailableWords(
      allWords.sort((a, b) => a.originalIndex - b.originalIndex)
    );
    setArrangedWords([]);
  };

  const useHint = () => {
    if (!currentQuestion?.wordArrangementData?.correctOrder || hintsUsed >= 2)
      return;

    const correctOrder = currentQuestion.wordArrangementData.correctOrder;
    const hintWord = correctOrder[hintsUsed];

    console.log("Using hint:", {
      hintsUsed,
      hintWord,
      correctOrder,
      availableWords: availableWords.map((w) => w.word),
    });

    // Find the word in available words (case-insensitive search)
    const wordToMove = availableWords.find(
      (w) => w.word.toLowerCase().trim() === hintWord.toLowerCase().trim()
    );

    if (wordToMove) {
      setAvailableWords((prev) => prev.filter((w) => w.id !== wordToMove.id));
      setArrangedWords((prev) => [...prev, wordToMove]);
      setHintsUsed((prev) => prev + 1);
      console.log("Hint applied successfully:", wordToMove);
    } else {
      console.warn("Hint word not found in available words:", hintWord);
    }
  };

  const checkAnswer = (isTimeUp = false) => {
    const userOrder = arrangedWords.map((w) => w.word);
    const correctOrder =
      currentQuestion.wordArrangementData?.correctOrder || [];

    console.log("🔍 ANSWER CHECK DEBUG:", {
      userOrder,
      correctOrder,
      userLength: userOrder.length,
      correctLength: correctOrder.length,
      isTimeUp,
      rawComparison: userOrder.join(" ") === correctOrder.join(" "),
    });

    // Enhanced normalization function
    const normalizeWord = (word: any): string => {
      if (word === null || word === undefined) return "";
      return String(word)
        .trim()
        .toLowerCase()
        .replace(/[^\w\s]/g, "") // Remove punctuation but keep spaces
        .replace(/\s+/g, " "); // Normalize multiple spaces to single space
    };

    // Normalize both arrays
    const normalizedUserOrder = userOrder
      .map(normalizeWord)
      .filter((word) => word.length > 0);
    const normalizedCorrectOrder = correctOrder
      .map(normalizeWord)
      .filter((word) => word.length > 0);

    console.log("🔧 NORMALIZED COMPARISON:", {
      normalizedUserOrder,
      normalizedCorrectOrder,
      userString: normalizedUserOrder.join(" "),
      correctString: normalizedCorrectOrder.join(" "),
      lengthMatch: normalizedUserOrder.length === normalizedCorrectOrder.length,
    });

    // Multiple comparison methods for robustness
    const exactMatch =
      JSON.stringify(normalizedUserOrder) ===
      JSON.stringify(normalizedCorrectOrder);
    const stringMatch =
      normalizedUserOrder.join(" ") === normalizedCorrectOrder.join(" ");
    const elementMatch =
      normalizedUserOrder.length === normalizedCorrectOrder.length &&
      normalizedUserOrder.every(
        (word, index) => word === normalizedCorrectOrder[index]
      );

    console.log("✅ COMPARISON RESULTS:", {
      exactMatch,
      stringMatch,
      elementMatch,
      finalResult: exactMatch || stringMatch || elementMatch,
    });

    const correct = exactMatch || stringMatch || elementMatch;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      const timeBonus = Math.max(0, timeLeft * 2);
      const hintPenalty = hintsUsed * 10;
      const questionScore = Math.max(10, 50 + timeBonus - hintPenalty);
      setScore((prev) => prev + questionScore);

      if (hintsUsed === 0 && !isTimeUp) {
        setPerfectMatches((prev) => prev + 1);
      }

      console.log("🎉 CORRECT ANSWER! Score added:", questionScore);
    } else {
      console.log("❌ INCORRECT ANSWER" + (isTimeUp ? " (Time Up)" : ""));
    }

    onQuestionAnswer(currentQuestion.id, userOrder);
  };

  const moveToNextQuestion = () => {
    setShowResult(false);
    setIsCorrect(null);

    if (currentQuestionIndex + 1 >= exercise.questions.length) {
      finishGame();
    } else {
      if (pauseBetweenQuestions > 0) {
        setIsPaused(true);
        setPauseTimeLeft(pauseBetweenQuestions);
      } else {
        proceedToNextQuestion();
      }
    }
  };

  const proceedToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setIsPaused(false);
    setPauseTimeLeft(0);
  };

  const finishGame = () => {
    setGameFinished(true);

    const totalTime = Date.now() - gameStartTime;
    const correctCount = Object.entries(selectedAnswers).length;

    const results: WordArrangementResults = {
      totalQuestions: exercise.questions.length,
      correctAnswers: correctCount,
      totalTime,
      perfectMatches,
      hintsUsed,
      finalScore: score,
    };

    onComplete(results);
  };

  if (!gameStarted) {
    console.log("WordArrangement: Game not started, showing start screen");
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-8 text-center border border-blue-200 dark:border-blue-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-green-500 rounded-full mb-4">
            <Shuffle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Word Arrangement Race 🏃‍♂️
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Arrange words in the correct order as fast as you can! Click or drag
            & drop words to build sentences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Time Limit
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {userTimeLimit} seconds per question
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <Lightbulb className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Hints
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              2 hints available per question
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <Trophy className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Scoring
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Speed + accuracy bonus
            </div>
          </div>
        </div>

        <Button
          onClick={startGame}
          size="lg"
          className="bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-white font-bold px-8 py-4 text-xl"
        >
          Start Race! 🚀
        </Button>
      </div>
    );
  }

  // Pause screen
  if (isPaused && pauseTimeLeft > 0) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center border border-purple-200 dark:border-purple-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mb-4">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Get Ready for Question {currentQuestionIndex + 2}
          </h3>
          <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {pauseTimeLeft}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Next question starting in...
          </p>
        </div>

        <Button
          onClick={proceedToNextQuestion}
          className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold px-6 py-3"
        >
          Skip Wait & Continue →
        </Button>
      </div>
    );
  }

  if (gameFinished) {
    console.log("WordArrangement: Game finished, showing results");
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center border border-green-200 dark:border-green-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Race Complete! 🎉
          </h2>
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
            {score} Points
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-green-600">
              {Object.keys(selectedAnswers).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">
              {perfectMatches}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Perfect
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-yellow-600">
              {hintsUsed}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Hints Used
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">{score}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Final Score
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log("WordArrangement: Main game state", {
    gameStarted,
    gameFinished,
    isPaused,
    pauseTimeLeft,
    currentQuestionIndex,
    availableWords: availableWords.length,
    arrangedWords: arrangedWords.length,
    timeLeft,
    currentQuestion: !!currentQuestion,
    hasWordData: !!currentQuestion?.wordArrangementData,
    scrambledWords: currentQuestion?.wordArrangementData?.scrambledWords,
  });

  // Ensure we have words available before rendering the main game
  if (
    gameStarted &&
    !gameFinished &&
    !isPaused &&
    availableWords.length === 0 &&
    arrangedWords.length === 0
  ) {
    console.warn(
      "Game started but no words available. This might be the issue!"
    );
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 text-center border border-yellow-200 dark:border-yellow-700">
        <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
          Loading Words...
        </h3>
        <p className="text-yellow-700 dark:text-yellow-300 mb-4">
          Preparing word arrangement data for the game.
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>Debug Info:</p>
          <p>Question Index: {currentQuestionIndex}</p>
          <p>Has Current Question: {currentQuestion ? "Yes" : "No"}</p>
          <p>
            Has Word Data: {currentQuestion?.wordArrangementData ? "Yes" : "No"}
          </p>
          <p>Available Words: {availableWords.length}</p>
          <p>Arranged Words: {arrangedWords.length}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      {/* Enhanced Debug info */}
      <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg text-xs">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>🎮 Game State:</strong> Available: {availableWords.length},
            Arranged: {arrangedWords.length}, GameStarted:{" "}
            {gameStarted ? "Yes" : "No"}
          </div>
          <div>
            <strong>📊 Data:</strong> HasData:{" "}
            {currentQuestion?.wordArrangementData ? "Yes" : "No"}, Question:{" "}
            {currentQuestionIndex + 1}/{exercise.questions.length}
          </div>
        </div>
        {arrangedWords.length > 0 && (
          <div className="mt-2">
            <strong>🔤 Current Sentence:</strong> "
            {arrangedWords.map((w) => w.word).join(" ")}"
          </div>
        )}
      </div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            Question {currentQuestionIndex + 1} of {exercise.questions.length}
          </h3>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-lg">{timeLeft}s</span>
          </div>
        </div>
        <div className="text-lg font-semibold text-green-600 dark:text-green-400">
          Score: {score}
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
          {currentQuestion.question}
        </p>
        {currentQuestion.wordArrangementData?.hints && hintsUsed < 2 && (
          <Button
            onClick={useHint}
            variant="outline"
            size="sm"
            className="text-yellow-600 border-yellow-300 hover:bg-yellow-50"
          >
            <Lightbulb className="w-4 h-4 mr-1" />
            Use Hint ({2 - hintsUsed} left)
          </Button>
        )}
      </div>

      {/* Available Words */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
          Available Words (click or drag to use):
        </h4>
        <div
          className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg min-h-[60px] border-2 border-dashed border-gray-300 dark:border-gray-600 transition-colors"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDropOnAvailable}
        >
          {availableWords.length > 0 ? (
            availableWords.map((word) => (
              <Button
                key={word.id}
                draggable
                onDragStart={(e) => handleDragStart(e, word, true)}
                onClick={() => handleWordClick(word, true)}
                variant="outline"
                className="bg-white dark:bg-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-grab active:cursor-grabbing hover:shadow-md transform hover:scale-105 active:scale-95"
                onMouseDown={(e) => {
                  e.currentTarget.style.cursor = "grabbing";
                  e.currentTarget.classList.add("scale-95");
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.cursor = "grab";
                  e.currentTarget.classList.remove("scale-95");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.cursor = "grab";
                  e.currentTarget.classList.remove("scale-95");
                }}
              >
                {word.word}
              </Button>
            ))
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-center w-full py-4">
              {currentQuestion?.wordArrangementData?.scrambledWords
                ? "All words have been used"
                : "No words available - Check console for debugging info"}
            </div>
          )}
        </div>
      </div>

      {/* Arranged Words */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
          Your Sentence (drag to reorder):
        </h4>
        <div
          className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-700 min-h-[60px] transition-colors"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDropOnArranged}
        >
          {arrangedWords.length > 0 ? (
            <div className="flex flex-wrap gap-2 items-center">
              {/* Drop zone at the beginning */}
              <div
                className="w-3 h-12 bg-transparent border-2 border-dashed border-transparent hover:border-blue-400 hover:bg-blue-100/50 dark:hover:bg-blue-800/30 transition-all duration-200 rounded"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDropBetween(e, 0)}
                title="Drop here to place at beginning"
              />

              {arrangedWords.map((word, index) => (
                <div key={word.id} className="flex items-center">
                  <div className="flex items-center gap-1">
                    <Button
                      draggable
                      onDragStart={(e) => handleDragStart(e, word, false)}
                      onClick={() => handleWordClick(word, false)}
                      className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 cursor-grab active:cursor-grabbing hover:shadow-lg transform hover:scale-105 active:scale-95"
                      onMouseDown={(e) => {
                        e.currentTarget.style.cursor = "grabbing";
                        e.currentTarget.classList.add("scale-95");
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.cursor = "grab";
                        e.currentTarget.classList.remove("scale-95");
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.cursor = "grab";
                        e.currentTarget.classList.remove("scale-95");
                      }}
                    >
                      {word.word}
                    </Button>
                    <div className="flex flex-col gap-1">
                      <Button
                        onClick={() => moveWordUp(index)}
                        size="sm"
                        variant="ghost"
                        className="p-1 h-6 w-6"
                        disabled={index === 0}
                      >
                        <ArrowUp className="w-3 h-3" />
                      </Button>
                      <Button
                        onClick={() => moveWordDown(index)}
                        size="sm"
                        variant="ghost"
                        className="p-1 h-6 w-6"
                        disabled={index === arrangedWords.length - 1}
                      >
                        <ArrowDown className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Drop zone after each word */}
                  <div
                    className="w-3 h-12 bg-transparent border-2 border-dashed border-transparent hover:border-blue-400 hover:bg-blue-100/50 dark:hover:bg-blue-800/30 transition-all duration-200 rounded mx-1"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDropBetween(e, index + 1)}
                    title={`Drop here to place after "${word.word}"`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-center py-4">
              Click or drag words here to build your sentence
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Button
          onClick={handleCheckAnswer}
          disabled={arrangedWords.length === 0}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check Answer
        </Button>
        <Button onClick={resetWords} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Result */}
      {showResult && (
        <div
          className={`mt-6 p-4 rounded-lg ${
            isCorrect
              ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
            <span
              className={`font-semibold ${
                isCorrect
                  ? "text-green-800 dark:text-green-200"
                  : "text-red-800 dark:text-red-200"
              }`}
            >
              {isCorrect
                ? "Correct!"
                : timeLeft === 0
                ? "Time Up!"
                : "Incorrect"}
            </span>
            {timeLeft === 0 && (
              <span className="text-orange-600 dark:text-orange-400 text-sm">
                ⏰ Time expired
              </span>
            )}
          </div>

          {/* Show result explanation */}
          {(!isCorrect || timeLeft === 0) && (
            <div className="mb-3">
              <div className="text-sm text-green-700 dark:text-green-300 mb-2 p-3 bg-green-50 dark:bg-green-900/20 rounded border">
                <strong>✅ Correct sentence:</strong> "
                {currentQuestion.wordArrangementData?.correctOrder?.join(" ") ||
                  "Unable to load correct answer"}
                "
              </div>
              {!isCorrect && (
                <div className="text-sm text-blue-600 dark:text-blue-400 italic">
                  💡 Study this sentence structure for future reference
                </div>
              )}
              {timeLeft === 0 && (
                <div className="text-sm text-orange-600 dark:text-orange-400 italic">
                  ⏰ Practice more to improve your speed!
                </div>
              )}
            </div>
          )}

          <div className="mt-3">
            <Button
              onClick={moveToNextQuestion}
              className={
                isCorrect
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }
              size="sm"
            >
              {currentQuestionIndex + 1 >= exercise.questions.length
                ? "Finish Game"
                : "Next Question"}{" "}
              →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordArrangementRaceGame;

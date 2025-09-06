"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/grammars/grammars_type";

interface RapidFireCorrectionsGameProps {
  exercise: Exercise;
  onComplete: (results: any) => void;
  onQuestionAnswer: (id: number, answer: string) => void;
  selectedAnswers: { [key: number]: string };
}

interface ErrorSentence {
  id: number;
  sentence: string;
  error: string;
  correction: string;
  isCorrect: boolean;
  userChoice: "correct" | "incorrect" | null;
  timeLimit: number;
}

const RapidFireCorrectionsGame: React.FC<RapidFireCorrectionsGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
}) => {
  const [sentences, setSentences] = useState<ErrorSentence[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [sentenceTimer, setSentenceTimer] = useState(10);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    correct: boolean;
    explanation: string;
  } | null>(null);

  useEffect(() => {
    if (exercise && exercise.questions) {
      initializeGame();
    }
  }, [exercise]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameCompleted && !showFeedback) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
        setSentenceTimer((prev) => {
          if (prev <= 1) {
            handleTimeout();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted, showFeedback]);

  const initializeGame = () => {
    const errorSentences: ErrorSentence[] = [];

    exercise.questions.forEach((question, index) => {
      // Create correct sentence
      if (question.options && typeof question.correct === "number") {
        errorSentences.push({
          id: index * 2,
          sentence: question.options[question.correct],
          error: "",
          correction: "",
          isCorrect: true,
          userChoice: null,
          timeLimit: 10,
        });
      }

      // Create incorrect sentence from other options
      if (question.options && question.options.length > 1) {
        const wrongOptions = question.options.filter(
          (_, i) => i !== question.correct
        );
        const wrongSentence =
          wrongOptions[Math.floor(Math.random() * wrongOptions.length)];

        errorSentences.push({
          id: index * 2 + 1,
          sentence: wrongSentence,
          error: wrongSentence,
          correction: question.options[Number(question.correct)],
          isCorrect: false,
          userChoice: null,
          timeLimit: 10,
        });
      }
    });

    // Shuffle sentences
    const shuffledSentences = [...errorSentences].sort(
      () => Math.random() - 0.5
    );
    setSentences(shuffledSentences);
    setSentenceTimer(10);
  };

  const handleAnswer = (choice: "correct" | "incorrect") => {
    if (showFeedback) return;

    const currentSentence = sentences[currentIndex];
    if (!currentSentence) return;

    if (!gameStarted) {
      setGameStarted(true);
    }

    const isCorrectChoice =
      (choice === "correct" && currentSentence.isCorrect) ||
      (choice === "incorrect" && !currentSentence.isCorrect);

    // Update sentence with user choice
    setSentences((prev) =>
      prev.map((s, i) =>
        i === currentIndex ? { ...s, userChoice: choice } : s
      )
    );

    if (isCorrectChoice) {
      setScore((prev) => prev + 10 + streak * 2);
      setStreak((prev) => prev + 1);
      setLastAnswer({
        correct: true,
        explanation: currentSentence.isCorrect
          ? "Correct! This sentence has no errors."
          : `Correct! Error: "${currentSentence.error}" → "${currentSentence.correction}"`,
      });
    } else {
      setStreak(0);
      setLastAnswer({
        correct: false,
        explanation: currentSentence.isCorrect
          ? "Wrong! This sentence is actually correct."
          : `Wrong! This sentence has an error: "${currentSentence.error}" → "${currentSentence.correction}"`,
      });
    }

    onQuestionAnswer(currentSentence.id, choice);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      nextSentence();
    }, 2000);
  };

  const handleTimeout = () => {
    if (showFeedback) return;

    const currentSentence = sentences[currentIndex];
    if (!currentSentence) return;

    setStreak(0);
    setLastAnswer({
      correct: false,
      explanation: `Time's up! This sentence was ${
        currentSentence.isCorrect ? "correct" : "incorrect"
      }.`,
    });

    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      nextSentence();
    }, 2000);
  };

  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSentenceTimer(10);
    } else {
      // Game completed
      setGameCompleted(true);
      const results = calculateResults();
      setTimeout(() => onComplete(results), 1000);
    }
  };

  const calculateResults = () => {
    const correctAnswers = sentences.filter((s) => {
      if (s.userChoice === null) return false;
      return (
        (s.userChoice === "correct" && s.isCorrect) ||
        (s.userChoice === "incorrect" && !s.isCorrect)
      );
    }).length;

    const accuracy =
      sentences.length > 0 ? (correctAnswers / sentences.length) * 100 : 0;

    return {
      score,
      accuracy: Math.round(accuracy),
      correctAnswers,
      totalSentences: sentences.length,
      timeSeconds: timer,
      maxStreak: Math.max(...sentences.map(() => streak), 0),
    };
  };

  const currentSentence = sentences[currentIndex];
  const progress =
    sentences.length > 0 ? ((currentIndex + 1) / sentences.length) * 100 : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          🔥 Rapid Fire Corrections
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Quickly spot correct and incorrect sentences!
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-red-400 to-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div className="text-center">
            <div className="font-bold text-lg text-blue-600">
              {formatTime(timer)}
            </div>
            <div className="text-gray-500">Time</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">{score}</div>
            <div className="text-gray-500">Score</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">{streak}</div>
            <div className="text-gray-500">Streak</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-orange-600">
              {currentIndex + 1}/{sentences.length}
            </div>
            <div className="text-gray-500">Progress</div>
          </div>
          <div className="text-center">
            <div
              className={`font-bold text-lg ${
                sentenceTimer <= 3
                  ? "text-red-600 animate-pulse"
                  : "text-gray-600"
              }`}
            >
              {sentenceTimer}s
            </div>
            <div className="text-gray-500">Left</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      {!gameStarted && (
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6 border border-red-200 dark:border-red-700">
          <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
            How to Play:
          </h3>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Each sentence appears for 10 seconds</li>
            <li>• Click "CORRECT" if the grammar is perfect</li>
            <li>• Click "INCORRECT" if there's a grammar error</li>
            <li>• Build streaks for bonus points!</li>
            <li>• Use keyboard: C for Correct, I for Incorrect</li>
          </ul>
        </div>
      )}

      {currentSentence && !gameCompleted && (
        <div className="relative">
          {/* Time Progress Bar for Current Sentence */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-4">
            <div
              className={`h-1 rounded-full transition-all duration-1000 ${
                sentenceTimer <= 3 ? "bg-red-500" : "bg-blue-500"
              }`}
              style={{ width: `${(sentenceTimer / 10) * 100}%` }}
            ></div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 mb-6 border border-orange-200 dark:border-orange-700">
            <div className="text-center mb-6">
              <p className="text-xl font-medium text-gray-800 dark:text-white leading-relaxed">
                "{currentSentence.sentence}"
              </p>
            </div>

            {!showFeedback && (
              <div className="flex justify-center space-x-6">
                <Button
                  onClick={() => handleAnswer("correct")}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg font-semibold"
                  onKeyDown={(e) => {
                    if (e.key === "c" || e.key === "C") handleAnswer("correct");
                  }}
                >
                  ✓ CORRECT
                </Button>
                <Button
                  onClick={() => handleAnswer("incorrect")}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-semibold"
                  onKeyDown={(e) => {
                    if (e.key === "i" || e.key === "I")
                      handleAnswer("incorrect");
                  }}
                >
                  ✗ INCORRECT
                </Button>
              </div>
            )}

            {showFeedback && lastAnswer && (
              <div
                className={`text-center p-4 rounded-lg ${
                  lastAnswer.correct
                    ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                }`}
              >
                <div className="text-2xl mb-2">
                  {lastAnswer.correct ? "🎉" : "❌"}
                </div>
                <p className="font-medium">{lastAnswer.explanation}</p>
                {lastAnswer.correct && streak > 1 && (
                  <p className="text-sm mt-2">
                    🔥 Streak: {streak} (+{streak * 2} bonus points!)
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {gameCompleted && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
            Rapid Fire Complete!
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="font-bold text-2xl text-green-600">{score}</div>
              <div className="text-sm text-gray-500">Final Score</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-blue-600">
                {Math.round(
                  (sentences.filter((s) => {
                    if (s.userChoice === null) return false;
                    return (
                      (s.userChoice === "correct" && s.isCorrect) ||
                      (s.userChoice === "incorrect" && !s.isCorrect)
                    );
                  }).length /
                    sentences.length) *
                    100
                )}
                %
              </div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-purple-600">
                {formatTime(timer)}
              </div>
              <div className="text-sm text-gray-500">Time</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-orange-600">
                {Math.max(streak, 0)}
              </div>
              <div className="text-sm text-gray-500">Best Streak</div>
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
          className="px-6 py-2 bg-red-600 hover:bg-red-700"
        >
          Finish Game
        </Button>
      </div>

      {/* Keyboard Shortcuts Helper */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Keyboard shortcuts:{" "}
        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">C</kbd>{" "}
        for Correct,
        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded ml-1">
          I
        </kbd>{" "}
        for Incorrect
      </div>
    </div>
  );
};

export default RapidFireCorrectionsGame;

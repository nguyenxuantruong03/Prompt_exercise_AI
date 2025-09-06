import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Question } from "@/types/grammars/grammars_type";

interface TrueFalseLightningQuestionProps {
  question: Question;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
  handleAnswerSelect: (questionId: number, answerIndex: number) => void;
  onQuestionComplete?: () => void;
}

const TrueFalseLightningQuestion: React.FC<TrueFalseLightningQuestionProps> = ({
  question,
  selectedAnswers,
  showResults,
  handleAnswerSelect,
  onQuestionComplete,
}) => {
  // Get time limit from lightningData or use default 10
  const defaultTimeLimit = question.lightningData?.timeLimit || 10;

  const [timeLeft, setTimeLeft] = useState(defaultTimeLimit);
  const [gameStarted, setGameStarted] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showSentence, setShowSentence] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  let lightningData = question.lightningData;

  // Fallback if lightningData is missing - create it from question data
  if (!lightningData) {
    console.log(
      "Lightning data missing, creating fallback for question:",
      question
    );
    lightningData = {
      sentence:
        question.question
          ?.replace("Grammar Lightning: TRUE or FALSE?", "")
          .trim() ||
        question.explanation?.split(".")[0] ||
        "This is a grammar sentence to evaluate",
      timeLimit: defaultTimeLimit,
      correctness: question.correct === 0, // 0 = true, 1 = false
      quickExplanation: question.explanation || "Check the grammar structure.",
    };
  }

  console.log("Lightning game data:", {
    questionId: question.id,
    lightningData,
    hasLightningData: !!question.lightningData,
    originalQuestion: {
      question: question.question,
      correct: question.correct,
      explanation: question.explanation,
    },
  });

  // Timer countdown
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !answered) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (timeLeft === 0 && !answered) {
      // Auto-submit as "no answer" when time runs out
      handleAnswerSelect(question.id, -1); // -1 for timeout
      setAnswered(true);
      setTimeout(() => {
        setShowNextButton(true); // Show Next button instead of auto-advancing
      }, 1000);
    }
  }, [
    timeLeft,
    gameStarted,
    answered,
    question.id,
    handleAnswerSelect,
    onQuestionComplete,
  ]);

  // Start game
  const startGame = () => {
    setGameStarted(true);
    setShowSentence(true);
    setTimeLeft(lightningData.timeLimit);
    setAnswered(false);
  };

  // Handle answer
  const handleAnswer = useCallback(
    (answer: boolean) => {
      if (!answered && gameStarted) {
        setAnswered(true);
        const answerIndex = answer ? 0 : 1; // 0 for true, 1 for false

        // Debug logging
        console.log("🔵 TrueFalseLightningQuestion handleAnswer:", {
          userClickedButton: answer ? "TRUE" : "FALSE",
          answerIndex,
          questionId: question.id,
          lightningDataCorrectness: lightningData.correctness,
          expectedCorrectAnswer: lightningData.correctness
            ? "TRUE (0)"
            : "FALSE (1)",
          isCorrectAnswer: (answerIndex === 0) === lightningData.correctness,
        });

        handleAnswerSelect(question.id, answerIndex);

        // Show Next button instead of auto-advancing
        setTimeout(() => {
          setShowNextButton(true);
        }, 1000); // Show "Next" button after 1 second to let user see the result
      }
    },
    [
      answered,
      gameStarted,
      question.id,
      handleAnswerSelect,
      lightningData.correctness,
    ]
  );

  // Handle next question
  const handleNextQuestion = useCallback(() => {
    setShowNextButton(false);
    setAnswered(false);
    setGameStarted(false);
    setShowSentence(false);
    setTimeLeft(lightningData.timeLimit);
    onQuestionComplete?.();
  }, [lightningData.timeLimit, onQuestionComplete]);

  // Keyboard handlers
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!gameStarted || answered) return;

      if (event.key === "t" || event.key === "T") {
        handleAnswer(true);
      } else if (event.key === "f" || event.key === "F") {
        handleAnswer(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted, answered, handleAnswer]);

  // Reset for new game
  useEffect(() => {
    if (!showResults) {
      setTimeLeft(defaultTimeLimit);
      setGameStarted(false);
      setAnswered(false);
      setShowSentence(false);
    }
  }, [showResults, defaultTimeLimit]);

  const getTimerColor = () => {
    if (timeLeft <= 1) return "text-red-600";
    if (timeLeft <= 2) return "text-orange-600";
    return "text-green-600";
  };

  const getResultColor = () => {
    if (selectedAnswers[question.id] === -1) return "text-gray-600"; // timeout
    const userAnswer = selectedAnswers[question.id] === 0; // true if 0, false if 1
    const isCorrect = userAnswer === lightningData.correctness;
    return isCorrect ? "text-green-600" : "text-red-600";
  };

  const getUserAnswerText = () => {
    if (selectedAnswers[question.id] === -1) return "TIME UP!";
    return selectedAnswers[question.id] === 0 ? "TRUE" : "FALSE";
  };

  return (
    <div className="space-y-4">
      {/* Game Header */}
      <div className="text-center bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg">
        <h3 className="text-xl font-bold flex items-center justify-center gap-2">
          ⚡ Grammar Lightning Game ⚡
        </h3>
        <p className="text-sm mt-1 opacity-90">
          Quick! Is this sentence grammatically correct?
        </p>
      </div>

      {!gameStarted && !showResults && (
        <div className="text-center space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              🎮 How to Play:
            </h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1 text-left">
              <li>• You have {lightningData.timeLimit} seconds to decide</li>
              <li>• Click "TRUE" if the sentence is grammatically correct</li>
              <li>• Click "FALSE" if the sentence has grammar errors</li>
              <li>• Or use keyboard: T for True, F for False</li>
            </ul>
          </div>

          <Button
            onClick={startGame}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold"
          >
            🚀 Start Lightning Round!
          </Button>
        </div>
      )}

      {gameStarted && !answered && (
        <div className="space-y-6">
          {/* Timer */}
          <div className="text-center">
            <div
              className={`text-6xl font-bold ${getTimerColor()} animate-pulse`}
            >
              {timeLeft}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              seconds left
            </div>
          </div>

          {/* Sentence Display */}
          {showSentence && (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-6 text-center shadow-lg">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                📝 Is this sentence grammatically correct?
              </div>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                "{lightningData.sentence}"
              </p>
            </div>
          )}

          {/* Answer Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => handleAnswer(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
            >
              ✅ TRUE
            </Button>
            <Button
              onClick={() => handleAnswer(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
            >
              ❌ FALSE
            </Button>
          </div>

          {/* Keyboard Hint */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Press T for True or F for False
          </div>
        </div>
      )}

      {/* Results Display */}
      {(answered || showResults) && (
        <div className="space-y-4">
          {/* User's Answer */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 mb-4">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                "{lightningData.sentence}"
              </p>
            </div>

            <div className={`text-xl font-bold ${getResultColor()}`}>
              Your Answer: {getUserAnswerText()}
            </div>

            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
              Correct Answer: {lightningData.correctness ? "TRUE" : "FALSE"}
            </div>
          </div>

          {/* Quick Explanation */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              ⚡ Quick Explanation:
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              {lightningData.quickExplanation}
            </p>
            {lightningData.errorType && !lightningData.correctness && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                <strong>Error Type:</strong> {lightningData.errorType}
              </p>
            )}
          </div>

          {/* Score Indicator */}
          {selectedAnswers[question.id] !== -1 && (
            <div className="text-center">
              {(selectedAnswers[question.id] === 0) ===
              lightningData.correctness ? (
                <div className="text-green-600 font-bold text-lg">
                  🎉 CORRECT! +1 Point
                </div>
              ) : (
                <div className="text-red-600 font-bold text-lg">
                  💥 INCORRECT! Better luck next time
                </div>
              )}
            </div>
          )}

          {selectedAnswers[question.id] === -1 && (
            <div className="text-center">
              <div className="text-gray-600 font-bold text-lg">
                ⏰ TIME UP! No points
              </div>
            </div>
          )}

          {/* Next Button */}
          {showNextButton && !showResults && (
            <div className="text-center mt-6">
              <Button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all"
              >
                ➡️ Next Question
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrueFalseLightningQuestion;

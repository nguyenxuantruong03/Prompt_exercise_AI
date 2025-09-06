"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Exercise, Question } from "@/types/grammars/grammars_type";
import { Clock, Zap, Trophy, Target, Flame } from "lucide-react";

interface SpeedChallengeGameProps {
  exercise: Exercise;
  onComplete: (results: SpeedChallengeResults) => void;
  onQuestionAnswer: (questionId: number, answer: number | string) => void;
  selectedAnswers: { [key: number]: number | string };
  timeLimit?: number; // User-configurable time limit
  pauseBetweenQuestions?: number; // Pause time between questions
}

interface SpeedChallengeResults {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  averageTimePerQuestion: number;
  streak: number;
  bonusPoints: number;
  finalScore: number;
}

interface QuestionTimer {
  timeLeft: number;
  totalTime: number;
}

const SpeedChallengeGame: React.FC<SpeedChallengeGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
  timeLimit: userTimeLimit = 15,
  pauseBetweenQuestions = 3,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timer, setTimer] = useState<QuestionTimer>({
    timeLeft: userTimeLimit,
    totalTime: userTimeLimit,
  });
  const [streak, setStreak] = useState(0);
  const [results, setResults] = useState<SpeedChallengeResults | null>(null);
  const [gameStartTime, setGameStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [showQuestionResult, setShowQuestionResult] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(
    null
  );
  const [isPaused, setIsPaused] = useState(false);
  const [pauseTimeLeft, setPauseTimeLeft] = useState(0);

  const currentQuestion = exercise.questions[currentQuestionIndex];
  const timeLimit = userTimeLimit; // Use user-provided time limit

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameFinished || showQuestionResult || isPaused) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.timeLeft <= 1) {
          // Time up - auto submit with no answer
          handleTimeUp();
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [
    gameStarted,
    gameFinished,
    currentQuestionIndex,
    showQuestionResult,
    isPaused,
  ]);

  // Pause countdown between questions
  useEffect(() => {
    if (!isPaused || pauseTimeLeft <= 0) return;

    const interval = setInterval(() => {
      setPauseTimeLeft((prev) => {
        if (prev <= 1) {
          // Pause finished, proceed to next question
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
    setQuestionStartTime(Date.now());
    setTimer({ timeLeft: timeLimit, totalTime: timeLimit });
  };

  const handleTimeUp = useCallback(() => {
    // Handle timeout - no answer given
    const questionTime = Date.now() - questionStartTime;
    setQuestionTimes((prev) => [...prev, questionTime]);
    setLastAnswerCorrect(false);
    setShowQuestionResult(true);

    // Reset streak on timeout
    setStreak(0);

    setTimeout(() => {
      moveToNextQuestion();
    }, 1500);
  }, [questionStartTime]);

  const handleAnswerSelect = (answer: number | string) => {
    if (showQuestionResult || gameFinished) return;

    const questionTime = Date.now() - questionStartTime;
    setQuestionTimes((prev) => [...prev, questionTime]);

    onQuestionAnswer(currentQuestion.id, answer);

    // Check if answer is correct
    const isCorrect = answer === currentQuestion.correct;
    setLastAnswerCorrect(isCorrect);
    setShowQuestionResult(true);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);

      // Calculate points with bonuses
      let points = currentQuestion.speedChallengeData?.points || 10;

      // Time bonus - extra points for answering quickly
      const timeBonus = timer.timeLeft > 5 ? 5 : timer.timeLeft > 2 ? 2 : 0;

      // Streak bonus
      const streakBonus = newStreak >= 5 ? 10 : newStreak >= 3 ? 5 : 0;

      const totalPoints = points + timeBonus + streakBonus;
      setScore((prev) => prev + totalPoints);
    } else {
      setStreak(0); // Reset streak on wrong answer
    }

    setTimeout(() => {
      moveToNextQuestion();
    }, 1500);
  };

  const moveToNextQuestion = () => {
    setShowQuestionResult(false);
    setLastAnswerCorrect(null);

    if (currentQuestionIndex + 1 >= exercise.questions.length) {
      // Game finished
      finishGame();
    } else {
      // Start pause between questions
      if (pauseBetweenQuestions > 0) {
        setIsPaused(true);
        setPauseTimeLeft(pauseBetweenQuestions);
      } else {
        // Move directly to next question
        proceedToNextQuestion();
      }
    }
  };

  const proceedToNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setQuestionStartTime(Date.now());
    setTimer({ timeLeft: timeLimit, totalTime: timeLimit });
    setIsPaused(false);
    setPauseTimeLeft(0);
  };

  const finishGame = () => {
    setGameFinished(true);

    const totalTime = Date.now() - gameStartTime;
    const correctCount = Object.entries(selectedAnswers).filter(
      ([questionId, answer]) => {
        const question = exercise.questions.find(
          (q) => q.id === parseInt(questionId)
        );
        return question && answer === question.correct;
      }
    ).length;

    const gameResults: SpeedChallengeResults = {
      totalQuestions: exercise.questions.length,
      correctAnswers: correctCount,
      totalTime: totalTime,
      averageTimePerQuestion:
        questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length,
      streak: streak,
      bonusPoints: Math.max(0, score - correctCount * 10),
      finalScore: score,
    };

    setResults(gameResults);
    onComplete(gameResults);
  };

  const getTimerColor = () => {
    const percentage = (timer.timeLeft / timer.totalTime) * 100;
    if (percentage > 60) return "text-green-500";
    if (percentage > 30) return "text-yellow-500";
    return "text-red-500";
  };

  const getProgressPercentage = () => {
    return (
      ((currentQuestionIndex + (showQuestionResult ? 1 : 0)) /
        exercise.questions.length) *
      100
    );
  };

  if (!gameStarted) {
    return (
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 text-center border border-yellow-200 dark:border-yellow-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Speed Challenge ⚡
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Answer {exercise.questions.length} questions as quickly as possible!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Time Limit
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {timeLimit} seconds per question
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <Target className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Scoring
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Points + time & streak bonuses
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <Flame className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Streak
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Bonus points for streaks
            </div>
          </div>
        </div>

        <Button
          onClick={startGame}
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-8 py-4 text-xl"
        >
          Start Speed Challenge! 🚀
        </Button>
      </div>
    );
  }

  // Pause screen between questions
  if (isPaused && pauseTimeLeft > 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 text-center border border-blue-200 dark:border-blue-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Get Ready for Question {currentQuestionIndex + 2}
          </h3>
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {pauseTimeLeft}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Next question starting in...
          </p>
        </div>

        <div className="mb-4">
          <Button
            onClick={proceedToNextQuestion}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-6 py-3"
          >
            Skip Wait & Continue →
          </Button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Question {currentQuestionIndex + 1} of {exercise.questions.length}{" "}
          completed
        </div>
      </div>
    );
  }

  if (gameFinished && results) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center border border-green-200 dark:border-green-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Challenge Complete! 🎉
          </h2>
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
            {results.finalScore} Points
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-green-600">
              {results.correctAnswers}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Correct
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">
              {(results.totalTime / 1000).toFixed(1)}s
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Time
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">
              {results.streak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Best Streak
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">
              {results.bonusPoints}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Bonus Points
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Accuracy:{" "}
            {((results.correctAnswers / results.totalQuestions) * 100).toFixed(
              1
            )}
            %
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Average time per question:{" "}
            {(results.averageTimePerQuestion / 1000).toFixed(1)} seconds
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      {/* Game Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white">
              Speed Challenge
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {exercise.questions.length}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className={`text-3xl font-bold ${getTimerColor()}`}>
            {timer.timeLeft}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            seconds
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Progress</span>
          <span>{Math.round(getProgressPercentage())}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>

      {/* Score & Streak */}
      <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {score}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Score</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500 dark:text-red-400 flex items-center justify-center">
            <Flame className="w-5 h-5 mr-1" />
            {streak}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Streak</div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {currentQuestion.question}
        </h3>

        {/* Answer Options */}
        <div className="space-y-3">
          {currentQuestion.options?.map((option, index) => (
            <Button
              key={index}
              variant={
                showQuestionResult
                  ? index === currentQuestion.correct
                    ? "default"
                    : selectedAnswers[currentQuestion.id] === index
                    ? "destructive"
                    : "outline"
                  : "outline"
              }
              className={`w-full text-left justify-start p-4 h-auto transition-all duration-200 ${
                showQuestionResult
                  ? index === currentQuestion.correct
                    ? "bg-green-500 hover:bg-green-500 text-white border-green-500"
                    : selectedAnswers[currentQuestion.id] === index
                    ? "bg-red-500 hover:bg-red-500 text-white border-red-500"
                    : "opacity-50"
                  : "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300"
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={showQuestionResult}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Question Result Feedback */}
      {showQuestionResult && (
        <div
          className={`p-4 rounded-lg mb-4 ${
            lastAnswerCorrect
              ? "bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-700"
              : "bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-700"
          }`}
        >
          <div
            className={`font-bold mb-2 ${
              lastAnswerCorrect
                ? "text-green-800 dark:text-green-400"
                : "text-red-800 dark:text-red-400"
            }`}
          >
            {lastAnswerCorrect ? "✅ Correct!" : "❌ Incorrect"}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {currentQuestion.explanation}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedChallengeGame;

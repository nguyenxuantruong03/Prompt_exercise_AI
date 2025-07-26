import { downloadAsPDF, downloadAsWord } from "@/lib/grammars/grammar";
import { mistakeTracker } from "@/lib/grammars/mistake-tracker";
import {
  CEFRLevel,
  Exercise,
  MiniExerciseSuggestionType,
  TypeExcercise,
  UserSocerType,
  Question,
} from "@/types/grammars/grammars_type";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

interface ExerciseGrammarProps {
  exercise: Exercise;
  showResults: boolean;
  setShowHints: Dispatch<SetStateAction<{ [key: number]: boolean }>>;
  showHints: { [key: number]: boolean };
  setSelectedAnswers: Dispatch<
    SetStateAction<{ [key: number]: number | string }>
  >;
  selectedAnswers: { [key: number]: number | string };
  handleSuggestionClick: (suggestionText: string) => void;
  checkAnswers: () => void;
  setShowDownloadOptions: Dispatch<SetStateAction<boolean>>;
  showDownloadOptions: boolean;
  // NEW: Add props for auto-generating exercises
  generateExercise?: () => Promise<void>;
  setExercise?: Dispatch<SetStateAction<Exercise | null>>;
  setShowResults?: Dispatch<SetStateAction<boolean>>;
  setInputText?: Dispatch<SetStateAction<string>>;
  loading?: boolean;
  setAnalyzingScore: Dispatch<SetStateAction<boolean>>;
  setUserScore: Dispatch<SetStateAction<UserSocerType | null>>;
  setShowScoreAnalysis: Dispatch<SetStateAction<boolean>>;
  proficiencyLevel: CEFRLevel;
  exerciseType: TypeExcercise;
  inputText: string;
  setMiniExerciseSuggestion: Dispatch<
    SetStateAction<MiniExerciseSuggestionType | null>
  >;
}

const ExerciseGrammar: React.FC<ExerciseGrammarProps> = ({
  exercise,
  showResults,
  setShowHints,
  showHints,
  setSelectedAnswers,
  selectedAnswers,
  handleSuggestionClick,
  checkAnswers,
  setShowDownloadOptions,
  showDownloadOptions,
  generateExercise,
  setExercise,
  setShowResults,
  setInputText,
  loading,
  setAnalyzingScore,
  setUserScore,
  setShowScoreAnalysis,
  proficiencyLevel,
  exerciseType,
  inputText,
  setMiniExerciseSuggestion,
}) => {
  // Toggle hint visibility for a specific question
  const toggleHint = (questionId: number) => {
    setShowHints((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  // Calculate user score and analyze performance
  const calculateUserScore = (
    exercise: Exercise,
    selectedAnswers: { [key: number]: number | string }
  ) => {
    let correct = 0;
    const total = exercise.questions.length;
    const incorrectQuestions: Array<{
      question: Question;
      userAnswer: string | number;
      correctAnswer: string | number;
    }> = [];

    exercise.questions.forEach((question) => {
      const userAnswer = selectedAnswers[question.id];
      const isCorrect = userAnswer === question.correct;

      if (isCorrect) {
        correct++;
      } else {
        incorrectQuestions.push({
          question,
          userAnswer,
          correctAnswer: Array.isArray(question.correct)
            ? question.correct.join(", ")
            : question.correct,
        });
      }
    });

    const percentage = Math.round((correct / total) * 100);

    return {
      correct,
      total,
      percentage,
      incorrectQuestions,
    };
  };

  const handleInputAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Estimate test scores based on performance
  const estimateTestScores = (
    percentage: number,
    proficiencyLevel?: CEFRLevel
  ) => {
    // Base IELTS Band Score (0-9) with proficiency level adjustment
    let ielts = 0;
    if (percentage >= 95) ielts = 9.0;
    else if (percentage >= 90) ielts = 8.5;
    else if (percentage >= 85) ielts = 8.0;
    else if (percentage >= 80) ielts = 7.5;
    else if (percentage >= 75) ielts = 7.0;
    else if (percentage >= 70) ielts = 6.5;
    else if (percentage >= 65) ielts = 6.0;
    else if (percentage >= 60) ielts = 5.5;
    else if (percentage >= 55) ielts = 5.0;
    else if (percentage >= 50) ielts = 4.5;
    else if (percentage >= 40) ielts = 4.0;
    else if (percentage >= 30) ielts = 3.5;
    else ielts = 3.0;

    // Adjust based on proficiency level if provided
    if (proficiencyLevel) {
      switch (proficiencyLevel) {
        case "A1":
          ielts = Math.min(ielts, 4.5);
          break;
        case "A2":
          ielts = Math.min(ielts, 5.5);
          break;
        case "B1":
          ielts = Math.min(ielts, 6.5);
          break;
        case "B2":
          ielts = Math.min(ielts, 7.5);
          break;
        case "C1":
          ielts = Math.min(ielts, 8.5);
          break;
        case "C2":
          // No upper limit for C2
          break;
      }
    }

    // TOEFL iBT Score (0-120)
    let toefl = Math.round((percentage / 100) * 120);
    if (toefl > 120) toefl = 120;

    // TOEIC Score (10-990)
    let toeic = Math.round(10 + (percentage / 100) * 980);
    if (toeic > 990) toeic = 990;

    // Cambridge Level
    let cambridge = "";
    if (percentage >= 80) cambridge = "C2 (Proficiency)";
    else if (percentage >= 75) cambridge = "C1 (Advanced)";
    else if (percentage >= 70) cambridge = "B2 (First)";
    else if (percentage >= 60) cambridge = "B1 (Preliminary)";
    else if (percentage >= 45) cambridge = "A2 (Key)";
    else cambridge = "A1 (Basic)";

    // VSTEP Score (0-10)
    let vstep = Math.round((percentage / 100) * 10);
    if (vstep > 10) vstep = 10;

    return {
      ielts,
      toefl,
      toeic,
      cambridge,
      vstep,
    };
  };

  // AI-powered analysis of user performance
  const analyzeUserPerformance = async (scoreData: {
    correct: number;
    total: number;
    percentage: number;
    incorrectQuestions: Array<{
      question: Question;
      userAnswer: string | number;
      correctAnswer: string | number;
    }>;
  }) => {
    setAnalyzingScore(true);

    try {
      console.log("🚀 Starting performance analysis with data:", scoreData);

      const requestBody = {
        action: "analyze_performance",
        scoreData: {
          correct: scoreData.correct,
          total: scoreData.total,
          percentage: scoreData.percentage,
          proficiencyLevel,
          exerciseType,
          grammarTopic: inputText,
          incorrectQuestions: scoreData.incorrectQuestions.map(
            (item: {
              question: Question;
              userAnswer: string | number;
              correctAnswer: string | number;
            }) => ({
              question: item.question.question,
              userAnswer: item.userAnswer,
              correctAnswer: item.correctAnswer,
              explanation: item.question.explanation,
              tense: item.question.tense,
              type: item.question.type,
            })
          ),
        },
      };

      console.log("📦 Request body:", JSON.stringify(requestBody, null, 2));

      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("📡 Response status:", response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ API Error Response:", errorText);
        throw new Error(`API returned ${response.status}: ${errorText}`);
      }

      const analysis = await response.json();
      console.log("✅ Analysis received:", analysis);

      const estimatedScores = estimateTestScores(
        scoreData.percentage,
        proficiencyLevel
      );

      setUserScore({
        correct: scoreData.correct,
        total: scoreData.total,
        percentage: scoreData.percentage,
        weakAreas: analysis.weakAreas || [],
        estimatedScores,
        feedback: analysis.feedback || "Performance analysis completed.",
        recommendations: analysis.recommendations || [],
      });

      setShowScoreAnalysis(true);
      console.log("🎉 Performance analysis completed successfully");
    } catch (error) {
      console.error("💥 Error analyzing performance:", error);

      // Show user-friendly error message
      toast.error(
        `Failed to analyze performance: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );

      // Fallback analysis if AI fails
      const estimatedScores = estimateTestScores(
        scoreData.percentage,
        proficiencyLevel
      );
      const weakAreas = scoreData.incorrectQuestions
        .map(
          (item: {
            question: Question;
            userAnswer: string | number;
            correctAnswer: string | number;
          }) => item.question.tense || item.question.type
        )
        .filter(
          (area: string, index: number, arr: string[]) =>
            arr.indexOf(area) === index
        );

      setUserScore({
        correct: scoreData.correct,
        total: scoreData.total,
        percentage: scoreData.percentage,
        weakAreas,
        estimatedScores,
        feedback: `You scored ${scoreData.correct}/${scoreData.total} (${
          scoreData.percentage
        }%). ${
          scoreData.percentage >= 80
            ? "Excellent work!"
            : scoreData.percentage >= 60
            ? "Good job! Keep practicing."
            : "You need more practice with this topic."
        }`,
        recommendations: [
          "Review the questions you got wrong",
          "Practice more exercises on weak areas",
          "Study the grammar rules for incorrect answers",
        ],
      });

      setShowScoreAnalysis(true);
      console.log("🔄 Using fallback analysis due to API error");
    } finally {
      setAnalyzingScore(false);
    }
  };

  // Enhanced function that calculates score and prepares for analysis
  const calculateAndShowScore = () => {
    if (exercise) {
      const scoreData = calculateUserScore(exercise, selectedAnswers);

      // Track mistakes in localStorage
      scoreData.incorrectQuestions.forEach(
        (item: {
          question: Question;
          userAnswer: string | number;
          correctAnswer: string | number;
        }) => {
          mistakeTracker.saveMistake(
            item.question,
            item.userAnswer,
            exerciseType,
            proficiencyLevel,
            inputText // grammar topic
          );
        }
      );

      // Prepare mini exercise suggestion data (but don't show it yet)
      const suggestion = mistakeTracker.getMiniExerciseSuggestion(inputText);
      if (suggestion.shouldSuggest) {
        setMiniExerciseSuggestion(suggestion);
      }

      // Show score analysis with a delay to allow results to render
      setTimeout(() => {
        analyzeUserPerformance(scoreData);
      }, 500);
    }
  };

  return (
    <>
      <div
        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
        data-exercise-display
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {exercise.title}
        </h2>
        {exercise.questions.map((question) => (
          <div
            key={question.id}
            className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {question.id}. {question.question}
              </h3>

              {/* Light Bulb Icon - Only show before checking answers */}
              {!showResults && question.tip && (
                <button
                  onClick={() => toggleHint(question.id)}
                  className={`flex-shrink-0 ml-3 p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                    showHints[question.id]
                      ? "bg-amber-500 text-white shadow-lg"
                      : "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50"
                  }`}
                  title={
                    showHints[question.id]
                      ? "Hide grammar tip"
                      : "Show grammar tip"
                  }
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      showHints[question.id] ? "rotate-12" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Collapsible Hint Content - Only show before checking answers */}
            {!showResults && showHints[question.id] && question.tip && (
              <div className="mb-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-800 animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
                      <span>💡 Grammar Tip</span>
                      <span className="px-2 py-1 text-xs bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-full">
                        Think about this...
                      </span>
                    </h4>
                    <div className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                      {question.tip
                        .split("\n")
                        .map((line: string, index: number) => (
                          <p key={index} className="mb-2 last:mb-0">
                            {line.trim()}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Render based on question type */}
            {(question.type === "multiple-choice" ||
              question.type === "cloze-test" ||
              question.type === "transformation" ||
              question.type === "paraphrasing" ||
              question.type === "sentence-building" ||
              question.type === "verb-conjugation" ||
              question.type === "word-formation" ||
              question.type === "sentence-combining" ||
              question.type === "dialogue-completion" ||
              question.type === "punctuation") &&
            question.options &&
            question.options.length > 0 ? (
              <div className="space-y-2">
                {question.options.map((option: string, index: number) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={index}
                      checked={selectedAnswers[question.id] === index}
                      onChange={() => handleAnswerSelect(question.id, index)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span
                      className={`${
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
            ) : question.type === "fill-in-blank" ||
              question.type === "sentence-completion" ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={(selectedAnswers[question.id] as string) || ""}
                  onChange={(e) =>
                    handleInputAnswer(question.id, e.target.value)
                  }
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
            ) : question.type === "reading-comprehension" ? (
              <div className="space-y-4">
                {question.passage && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold mb-2">Reading Passage:</h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      {question.passage}
                    </p>
                  </div>
                )}
                {question.options ? (
                  <div className="space-y-2">
                    {question.options.map((option: string, index: number) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={index}
                          checked={selectedAnswers[question.id] === index}
                          onChange={() =>
                            handleAnswerSelect(question.id, index)
                          }
                          className="w-4 h-4 text-blue-600"
                        />
                        <span
                          className={`${
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
                ) : (
                  <input
                    type="text"
                    value={(selectedAnswers[question.id] as string) || ""}
                    onChange={(e) =>
                      handleInputAnswer(question.id, e.target.value)
                    }
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
                )}
              </div>
            ) : question.type === "error-correction" ? (
              <div className="space-y-4">
                {question.incorrectText && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">
                      Find and correct the error(s):
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      {question.incorrectText}
                    </p>
                  </div>
                )}
                <textarea
                  value={(selectedAnswers[question.id] as string) || ""}
                  onChange={(e) =>
                    handleInputAnswer(question.id, e.target.value)
                  }
                  placeholder="Write the corrected version here..."
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                    showResults
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  rows={3}
                  disabled={showResults}
                />
                {showResults && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your correction:{" "}
                      <span className="text-blue-600">
                        {selectedAnswers[question.id] || "(no answer)"}
                      </span>
                    </p>
                    <p className="text-sm text-green-600">
                      Correct version:{" "}
                      <span className="font-semibold">{question.correct}</span>
                    </p>
                  </div>
                )}
              </div>
            ) : question.type === "word-order" ? (
              <div className="space-y-4">
                {question.words && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                      Arrange these words in the correct order:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {question.words.map((word: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-gray-700 border rounded-lg text-sm"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <input
                  type="text"
                  value={(selectedAnswers[question.id] as string) || ""}
                  onChange={(e) =>
                    handleInputAnswer(question.id, e.target.value)
                  }
                  placeholder="Write the sentence in correct order..."
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
                      Correct order:{" "}
                      <span className="font-semibold">{question.correct}</span>
                    </p>
                  </div>
                )}
              </div>
            ) : question.type === "matching" ? (
              <div className="space-y-4">
                {question.pairs && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Column A:</h4>
                      <div className="space-y-2">
                        {question.pairs.map((pair, index) => (
                          <div
                            key={index}
                            className="p-2 bg-gray-50 dark:bg-gray-700 rounded"
                          >
                            {index + 1}. {pair.left}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Column B:</h4>
                      <div className="space-y-2">
                        {question.pairs.map((pair, index) => (
                          <div
                            key={index}
                            className="p-2 bg-gray-50 dark:bg-gray-700 rounded"
                          >
                            {String.fromCharCode(97 + index)}. {pair.right}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <input
                  type="text"
                  value={(selectedAnswers[question.id] as string) || ""}
                  onChange={(e) =>
                    handleInputAnswer(question.id, e.target.value)
                  }
                  placeholder="Enter matches (e.g., 1a, 2c, 3b)..."
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                    showResults
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  disabled={showResults}
                />
                {showResults && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your matches:{" "}
                      <span className="text-blue-600">
                        {selectedAnswers[question.id] || "(no answer)"}
                      </span>
                    </p>
                    <p className="text-sm text-green-600">
                      Correct matches:{" "}
                      <span className="font-semibold">{question.correct}</span>
                    </p>
                  </div>
                )}
              </div>
            ) : (question.type === "sentence-combining" ||
                question.type === "sentence-building" ||
                question.type === "word-formation" ||
                question.type === "verb-conjugation") &&
              (!question.options || question.options.length === 0) ? (
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                    {question.type === "sentence-combining"
                      ? "Combine the sentence parts:"
                      : question.type === "sentence-building"
                      ? "Build a complete sentence:"
                      : question.type === "word-formation"
                      ? "Form the correct word:"
                      : "Complete the exercise:"}
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                    {question.type === "sentence-combining"
                      ? "Arrange the fragments into a grammatically correct sentence."
                      : question.type === "sentence-building"
                      ? "Use the given elements to build a complete sentence."
                      : question.type === "word-formation"
                      ? "Form the correct word using the root provided."
                      : "Complete this grammar exercise."}
                  </p>
                </div>
                <textarea
                  value={(selectedAnswers[question.id] as string) || ""}
                  onChange={(e) =>
                    handleInputAnswer(question.id, e.target.value)
                  }
                  placeholder={
                    question.type === "sentence-combining"
                      ? "Write the complete sentence here..."
                      : question.type === "sentence-building"
                      ? "Build your sentence here..."
                      : question.type === "word-formation"
                      ? "Write the formed word here..."
                      : "Write your answer here..."
                  }
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                    showResults
                      ? selectedAnswers[question.id] === question.correct
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  rows={3}
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
            ) : null}
            {showResults && (
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>

                {/* Enhanced Grammar Tip Section */}
                {question.tip && (
                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                          <span>💡 Grammar Tip & Analysis</span>
                          <span className="px-2 py-1 text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded-full">
                            Why this answer?
                          </span>
                        </h4>
                        <div className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                          {question.tip
                            .split("\n")
                            .map((line: string, index: number) => (
                              <p key={index} className="mb-2 last:mb-0">
                                {line.trim()}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Interactive Suggestion Button for Each Question */}
                <div className="flex justify-center">
                  <button
                    onClick={async () => {
                      // Create a more detailed suggestion based on the specific question
                      const suggestionText = createDetailedSuggestion(question);

                      // Extract grammar focus for feedback messages
                      const grammarFocus = extractGrammarFocus(question);

                      // Set the suggestion text first
                      if (setInputText) {
                        setInputText(suggestionText);
                      }

                      // Reset the exercise state
                      if (setExercise && setShowResults) {
                        setExercise(null);
                        setShowResults(false);
                        setSelectedAnswers({});
                      }

                      // Show loading state and auto-generate new exercise
                      if (generateExercise && !loading) {
                        // Show immediate feedback
                        const toast = (await import("react-hot-toast")).toast;
                        toast.success(
                          `🎯 Generating similar ${grammarFocus} exercises...`
                        );

                        // Small delay for better UX
                        setTimeout(async () => {
                          try {
                            await generateExercise();
                            toast.success(
                              `✅ New ${grammarFocus} exercises ready!`
                            );
                          } catch (error) {
                            toast.error(
                              "Failed to generate new exercises. Please try again."
                            );
                          }
                        }, 500);
                      } else {
                        // Fallback to just setting the suggestion
                        handleSuggestionClick(suggestionText);
                      }
                    }}
                    disabled={loading}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 border ${
                      loading
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600 cursor-not-allowed"
                        : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-900/50 hover:scale-105 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Generate similar questions
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {!showResults && (
          <div className="flex gap-3 items-center">
            <button
              onClick={checkAnswers}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Check Answers
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                or
              </span>
              <button
                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
              >
                Download Options
              </button>
            </div>
          </div>
        )}

        {/* Show download options after results as well */}
        {showResults && (
          <div className="mt-4 space-y-4">
            {/* NEW: Show Score and Analysis Button */}
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Want to see your detailed performance analysis?
              </div>
              {calculateAndShowScore && (
                <button
                  onClick={calculateAndShowScore}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 font-medium flex items-center gap-2 shadow-lg transition-all duration-200"
                >
                  <span>📊</span>
                  Show Score & Analysis
                  <span>🚀</span>
                </button>
              )}
            </div>

            {/* Download options */}
            <div className="flex gap-3 items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                You can also:
              </div>
              <button
                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
              >
                Download Exercise
              </button>
            </div>
          </div>
        )}

        {/* Download Options */}
        {showDownloadOptions && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
              Download Exercise
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Download the exercise to work offline or print it out.{" "}
              {showResults
                ? "Your answers and results are included."
                : "Answer key and explanations are included."}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  downloadAsPDF(exercise, selectedAnswers, showResults)
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                Download as PDF/Text
              </button>
              <button
                onClick={() =>
                  downloadAsWord(exercise, selectedAnswers, showResults)
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm6 10a1 1 0 01-1-1V8a1 1 0 112 0v5a1 1 0 01-1 1h-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Download as Word
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Downloads include answer key and explanations
            </div>
          </div>
        )}
      </div>
    </>
  );
};

/* Helper function to extract grammar focus from question */
const extractGrammarFocus = (question: Question): string => {
  const questionType = question.type || "grammar";
  const questionText = question.question || "";
  const tense = question.tense;
  const explanation = question.explanation || "";

  // Analyze question content for specific grammar patterns
  if (
    questionText.toLowerCase().includes("has") ||
    questionText.toLowerCase().includes("have")
  ) {
    return "Present Perfect";
  } else if (
    questionText.toLowerCase().includes("will") ||
    questionText.toLowerCase().includes("going to")
  ) {
    return "Future Tense";
  } else if (
    questionText.toLowerCase().includes("would") ||
    questionText.toLowerCase().includes("could")
  ) {
    return "Modal Verbs and Conditionals";
  } else if (
    questionText.toLowerCase().includes("was") ||
    questionText.toLowerCase().includes("were") ||
    questionText.toLowerCase().includes("did")
  ) {
    return "Past Tense";
  } else if (
    questionText.includes("ing") ||
    questionText.toLowerCase().includes("am") ||
    questionText.toLowerCase().includes("is") ||
    questionText.toLowerCase().includes("are")
  ) {
    return "Present Continuous and Present Simple";
  } else if (
    questionText.toLowerCase().includes("must") ||
    questionText.toLowerCase().includes("should") ||
    questionText.toLowerCase().includes("might")
  ) {
    return "Modal Verbs";
  } else if (
    questionText.toLowerCase().includes("which") ||
    questionText.toLowerCase().includes("who") ||
    questionText.toLowerCase().includes("that")
  ) {
    return "Relative Clauses";
  } else if (
    questionText.toLowerCase().includes("if") ||
    questionText.toLowerCase().includes("unless")
  ) {
    return "Conditional Sentences";
  } else if (
    questionText.toLowerCase().includes("passive") ||
    questionText.includes("by")
  ) {
    return "Passive Voice";
  } else if (
    explanation.toLowerCase().includes("article") ||
    questionText.includes(" a ") ||
    questionText.includes(" an ") ||
    questionText.includes(" the ")
  ) {
    return "Articles (a, an, the)";
  } else if (
    explanation.toLowerCase().includes("preposition") ||
    questionText.includes(" in ") ||
    questionText.includes(" on ") ||
    questionText.includes(" at ")
  ) {
    return "Prepositions";
  } else if (tense) {
    return tense;
  } else {
    // Use question type as fallback
    return questionType.replace(/-/g, " ");
  }
};

/* Helper function to create detailed suggestions */
const createDetailedSuggestion = (question: Question): string => {
  const questionType = question.type || "grammar";
  const questionText = question.question || "";
  const tense = question.tense;
  const explanation = question.explanation || "";

  // Extract key grammar concepts from the question
  let grammarFocus = "";

  // Analyze question content for specific grammar patterns
  if (
    questionText.toLowerCase().includes("has") ||
    questionText.toLowerCase().includes("have")
  ) {
    grammarFocus = "Present Perfect";
  } else if (
    questionText.toLowerCase().includes("will") ||
    questionText.toLowerCase().includes("going to")
  ) {
    grammarFocus = "Future Tense";
  } else if (
    questionText.toLowerCase().includes("would") ||
    questionText.toLowerCase().includes("could")
  ) {
    grammarFocus = "Modal Verbs and Conditionals";
  } else if (
    questionText.toLowerCase().includes("was") ||
    questionText.toLowerCase().includes("were") ||
    questionText.toLowerCase().includes("did")
  ) {
    grammarFocus = "Past Tense";
  } else if (
    questionText.includes("ing") ||
    questionText.toLowerCase().includes("am") ||
    questionText.toLowerCase().includes("is") ||
    questionText.toLowerCase().includes("are")
  ) {
    grammarFocus = "Present Continuous and Present Simple";
  } else if (
    questionText.toLowerCase().includes("must") ||
    questionText.toLowerCase().includes("should") ||
    questionText.toLowerCase().includes("might")
  ) {
    grammarFocus = "Modal Verbs";
  } else if (
    questionText.toLowerCase().includes("which") ||
    questionText.toLowerCase().includes("who") ||
    questionText.toLowerCase().includes("that")
  ) {
    grammarFocus = "Relative Clauses";
  } else if (
    questionText.toLowerCase().includes("if") ||
    questionText.toLowerCase().includes("unless")
  ) {
    grammarFocus = "Conditional Sentences";
  } else if (
    questionText.toLowerCase().includes("passive") ||
    questionText.includes("by")
  ) {
    grammarFocus = "Passive Voice";
  } else if (
    explanation.toLowerCase().includes("article") ||
    questionText.includes(" a ") ||
    questionText.includes(" an ") ||
    questionText.includes(" the ")
  ) {
    grammarFocus = "Articles (a, an, the)";
  } else if (
    explanation.toLowerCase().includes("preposition") ||
    questionText.includes(" in ") ||
    questionText.includes(" on ") ||
    questionText.includes(" at ")
  ) {
    grammarFocus = "Prepositions";
  } else if (tense) {
    grammarFocus = tense;
  } else {
    // Use question type as fallback
    grammarFocus = questionType.replace(/-/g, " ");
  }

  // Create specific suggestions based on question type
  const typeSpecificSuggestions: Record<string, string[]> = {
    "multiple-choice": [
      `${grammarFocus} multiple choice exercises`,
      `${grammarFocus} practice with options`,
      `Choose the correct ${grammarFocus.toLowerCase()} form`,
    ],
    "fill-in-blank": [
      `${grammarFocus} gap filling exercises`,
      `Complete sentences with ${grammarFocus.toLowerCase()}`,
      `${grammarFocus} blank completion practice`,
    ],
    "error-correction": [
      `${grammarFocus} error identification`,
      `Fix mistakes in ${grammarFocus.toLowerCase()}`,
      `${grammarFocus} correction exercises`,
    ],
    "sentence-completion": [
      `${grammarFocus} sentence building`,
      `Complete ${grammarFocus.toLowerCase()} sentences`,
      `${grammarFocus} sentence formation`,
    ],
    "word-order": [
      `${grammarFocus} word arrangement`,
      `${grammarFocus} sentence structure`,
      `Organize words in ${grammarFocus.toLowerCase()}`,
    ],
    transformation: [
      `${grammarFocus} sentence transformation`,
      `Rewrite sentences using ${grammarFocus.toLowerCase()}`,
      `${grammarFocus} rephrasing exercises`,
    ],
    "reading-comprehension": [
      `${grammarFocus} in context reading`,
      `Reading passages with ${grammarFocus.toLowerCase()}`,
      `${grammarFocus} comprehension practice`,
    ],
    "cloze-test": [
      `${grammarFocus} cloze exercises`,
      `Text completion with ${grammarFocus.toLowerCase()}`,
      `${grammarFocus} passage filling`,
    ],
  };

  // Get type-specific suggestions or fallback to general ones
  const suggestions = typeSpecificSuggestions[questionType] || [
    `${grammarFocus} practice exercises`,
    `More ${grammarFocus.toLowerCase()} questions`,
    `${grammarFocus} grammar drills`,
  ];

  // Return a random suggestion from the appropriate list
  const randomSuggestion =
    suggestions[Math.floor(Math.random() * suggestions.length)];

  return randomSuggestion;
};

export default ExerciseGrammar;

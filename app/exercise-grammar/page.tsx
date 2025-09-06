"use client";

import { useState, useEffect } from "react";
import TabNavigation from "./components/tab-navigation";
import InputSection from "./components/shared/type-exercise-level/input-secttion";
import ExerciseGrammarComponents from "./components/shared/exercise/exercise";
import FixReuslt from "./components/fix-result";
import LevelEquivalencyModal from "./components/shared/type-exercise-level/level-equivalency_modal";
import ShowExerciseModal from "./components/shared/exercise/components/show-exercise-modal";
import TenseInfoPanel from "./components/shared/tenses-auto-search/tenses-Info-panel";
import TenseInfoModal from "./components/shared/tenses-auto-search/tenses-info-modal";
import { Button } from "@/components/ui/button";
import {
  CEFRLevel,
  Exercise,
  FixResponse,
  MiniExerciseSuggestionType,
  TypeExcercise,
  UserSocerType,
  CertificateType,
} from "@/types/grammars/grammars_type";
import { toast } from "react-hot-toast";
import ChartComponent from "./components/shared/chart-analytics/chart-analytics";
import MiniExerciseSuggestion from "./components/shared/exercise/components/mini-exercise-suggestion";
import LevelSelection from "./components/shared/type-exercise-level/level-selection";
import CertificateSelection from "./components/shared/type-exercise-level/certificate-selection";
import ScoreAnalysisModal from "./components/score-analysis-modal";
import LoadingAIGenerate from "@/components/loading-AI-Generate";
import HintTenses, {
  TenseItem,
} from "./components/shared/hint-tenses/hint-tenses";
import MiniGamesManager from "./components/mini-games/mini-games-manager";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ExerciseGrammar = () => {
  const { setTheme } = useTheme();
  const [inputText, setInputText] = useState("");
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [fixResult, setFixResult] = useState<FixResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | string;
  }>({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"generate" | "fix">("generate");
  const [exerciseType, setExerciseType] =
    useState<TypeExcercise>("multiple-choice");
  const [proficiencyLevel, setProficiencyLevel] = useState<CEFRLevel>("A1");
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [selectedLevelInfo, setSelectedLevelInfo] = useState<string | null>(
    null
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});
  const [showTenseInfo, setShowTenseInfo] = useState(false);
  const [numExercises, setNumExercises] = useState(5);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);

  // Add new state for scoring system
  const [userScore, setUserScore] = useState<UserSocerType | null>(null);
  const [showScoreAnalysis, setShowScoreAnalysis] = useState(false);
  const [analyzingScore, setAnalyzingScore] = useState(false);

  // Add new state for chart analytics
  const [showChartAnalytics, setShowChartAnalytics] = useState(false);

  // Add new state for mini-games timing controls
  const [gameTimeLimit, setGameTimeLimit] = useState(15); // Default 15 seconds
  const [questionPauseTime, setQuestionPauseTime] = useState(3); // Default 3 seconds pause

  // NEW: Add state for mini exercise suggestions
  const [showMiniExerciseSuggestion, setShowMiniExerciseSuggestion] =
    useState(false);
  const [miniExerciseSuggestion, setMiniExerciseSuggestion] =
    useState<MiniExerciseSuggestionType | null>(null);

  // NEW: Add state for auto grammar analysis
  const [autoAnalyzeEnabled, setAutoAnalyzeEnabled] = useState(false);

  // Add state for certificate selection
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType | null>(null);

  // Add state for lightning game
  const [lightningScore, setLightningScore] = useState({
    correct: 0,
    total: 0,
  });
  const [currentLightningQuestion, setCurrentLightningQuestion] = useState(0);
  const [lightningGameActive, setLightningGameActive] = useState(false);
  const [lightningTimeLimit, setLightningTimeLimit] = useState(10);

  // Add state for tense information modal
  const [tenseModalData, setTenseModalData] = useState<{
    isOpen: boolean;
    tenseName: string;
    tenseData: TenseItem | null;
  }>({
    isOpen: false,
    tenseName: "",
    tenseData: null,
  });

  // Add state for mini games
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [miniGameResults, setMiniGameResults] = useState<any>(null);

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    setShowSuggestions(false);
  };

  const generateExercise = async (): Promise<void> => {
    if (!inputText.trim()) return;

    setLoading(true);
    setExercise(null);
    setFixResult(null);

    // Check if the selected exercise type is a mini game
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

    if (miniGameTypes.includes(exerciseType)) {
      // Handle mini game launch
      setShowMiniGames(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          action: "generate",
          exerciseType: exerciseType,
          proficiencyLevel: proficiencyLevel,
          numExercises: numExercises,
          certificateType: selectedCertificate,
          lightningTimeLimit: lightningTimeLimit,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        toast.error(`❌ API Error: ${errorText}`);
        return;
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
        const successMsg = `Generated ${data.exercise.questions.length} ${exerciseType} questions for ${proficiencyLevel} level!`;
        toast.success(successMsg);

        // Scroll to exercise after a brief delay
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
        }, 100);
      } else if (data.error) {
        toast.error("API returned error:", data.error);
        return;
      } else {
        toast.error(`Invalid response`);
        return;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to generate exercise";

      // Show user-friendly error
      toast.error(
        `⚠️ ${errorMessage}\n\nPlease try:\n- Using a different grammar topic\n- Selecting fewer questions\n- Checking your internet connection`
      );
    } finally {
      setLoading(false);
    }
  };

  const fixGrammar = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setFixResult(null);
    setExercise(null);

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          action: "fix",
        }),
      });

      if (!response.ok) {
        return toast.error("Failed to fix grammar");
      }

      const data = await response.json();
      if (data.corrected) {
        setFixResult(data);
      }
    } catch (error) {
      return toast.error("Failed to fix grammar. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Simple check answers function - just shows results without analysis
  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setExercise(null);
    setFixResult(null);
    setSelectedAnswers({});
    setShowResults(false);
    setInputText("");
    setShowDownloadOptions(false);
    setShowSuggestions(false);
    setNumExercises(5);
    setSelectedCertificate(null);
    // Reset auto-analysis when resetting the exercise
    setAutoAnalyzeEnabled(false);
    // Reset lightning game state
    setLightningScore({ correct: 0, total: 0 });
    setCurrentLightningQuestion(0);
    setLightningGameActive(false);
    // Reset mini games
    setShowMiniGames(false);
    setMiniGameResults(null);
  };

  // Handle lightning game completion
  const handleLightningQuestionComplete = () => {
    if (exercise && exercise.type === "true-false-lightning") {
      // Update score based on current question answer
      const currentQuestion = exercise.questions[currentLightningQuestion];
      if (currentQuestion && currentQuestion.lightningData) {
        // Enhanced validation with type safety and detailed logging
        const userAnswer = selectedAnswers[currentQuestion.id];
        const userAnswerNumber = Number(userAnswer); // Convert to number explicitly
        const correctnessBoolean = Boolean(
          currentQuestion.lightningData.correctness
        ); // Ensure boolean

        const userClickedTrue = userAnswerNumber === 0;
        const userClickedFalse = userAnswerNumber === 1;
        const sentenceIsCorrect = correctnessBoolean === true;
        const sentenceIsIncorrect = correctnessBoolean === false;

        // The correct answer logic:
        // If sentence IS correct (true) → user should click TRUE (0) to be right
        // If sentence IS NOT correct (false) → user should click FALSE (1) to be right
        const isCorrect =
          userAnswer !== undefined &&
          userAnswer !== -1 &&
          ((userClickedTrue && sentenceIsCorrect) || // User said TRUE and sentence IS correct
            (userClickedFalse && sentenceIsIncorrect)); // User said FALSE and sentence IS NOT correct

        // Debug logging
        console.log("🐛 Lightning Debug:", {
          questionId: currentQuestion.id,
          userAnswer,
          userAnswerNumber,
          userAnswerType: typeof userAnswer,
          correctness: currentQuestion.lightningData.correctness,
          correctnessBoolean,
          correctnessType: typeof currentQuestion.lightningData.correctness,
          sentence: currentQuestion.lightningData.sentence,
          userClickedTrue,
          userClickedFalse,
          sentenceIsCorrect,
          sentenceIsIncorrect,
          validationResult: isCorrect,
        });

        console.log("🎯 Enhanced validation:", {
          scenario: sentenceIsCorrect
            ? "Sentence IS correct"
            : "Sentence IS NOT correct",
          expectedUserAction: sentenceIsCorrect
            ? "Should click TRUE (0)"
            : "Should click FALSE (1)",
          userAction: userClickedTrue
            ? "Clicked TRUE (0)"
            : userClickedFalse
            ? "Clicked FALSE (1)"
            : "Other/Timeout",
          finalResult: isCorrect ? "✅ CORRECT" : "❌ WRONG",
        });

        setLightningScore((prev) => ({
          correct: prev.correct + (isCorrect ? 1 : 0),
          total: prev.total + 1,
        }));
      }

      const nextQuestion = currentLightningQuestion + 1;
      if (nextQuestion < exercise.questions.length) {
        setCurrentLightningQuestion(nextQuestion);
      } else {
        // Game finished
        setLightningGameActive(false);
        setShowResults(true);
      }
    }
  };

  // Check if exercise is lightning game and set active state
  useEffect(() => {
    if (exercise && exercise.type === "true-false-lightning") {
      setLightningGameActive(true);
      setCurrentLightningQuestion(0);
    } else {
      setLightningGameActive(false);
    }
  }, [exercise]);

  // Handle mini game completion
  const handleMiniGameComplete = (gameType: TypeExcercise, results: any) => {
    setMiniGameResults({ gameType, results });
    setShowMiniGames(false);
    const score = results.finalScore || results.score || 0;
    const gameName = gameType
      .replace("-", " ")
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
    toast.success(`🎉 ${gameName} completed! Score: ${score}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        AI Grammar Exercise Generator
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Tense Information Panel - Fixed position in left corner */}
      {exercise && (
        <TenseInfoPanel
          showTenseInfo={showTenseInfo}
          setShowTenseInfo={setShowTenseInfo}
          exercise={exercise}
          setTenseModalData={setTenseModalData}
        />
      )}

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Show Mini Games or Regular Content */}
      {showMiniGames &&
      [
        "speed-challenge",
        "word-arrangement-race",
        "grammar-memory-match",
        "image-grammar-quiz",
        "grammar-puzzle-solver",
        "rapid-fire-corrections",
        "tense-timeline-game",
        "grammar-category-sort",
        "grammar-generator",
      ].includes(exerciseType) ? (
        <div className="mb-6">
          <div className="mb-4 text-center">
            <Button
              onClick={() => setShowMiniGames(false)}
              variant="outline"
              className="mb-2"
            >
              ← Back to Exercise Setup
            </Button>
          </div>
          <MiniGamesManager
            inputText={inputText}
            proficiencyLevel={proficiencyLevel}
            numExercises={numExercises}
            onGameComplete={handleMiniGameComplete}
            selectedGameType={exerciseType as any}
            gameTimeLimit={gameTimeLimit}
            questionPauseTime={questionPauseTime}
          />
        </div>
      ) : (
        <>
          {/* Proficiency Level Selection - only show for generate tab */}
          {activeTab === "generate" && (
            <LevelSelection
              proficiencyLevel={proficiencyLevel}
              setProficiencyLevel={setProficiencyLevel}
              setSelectedLevelInfo={setSelectedLevelInfo}
              setShowLevelModal={setShowLevelModal}
            />
          )}
          {/* Certificate Selection - only show for generate tab */}
          {activeTab === "generate" && (
            <CertificateSelection
              selectedCertificate={selectedCertificate}
              setSelectedCertificate={setSelectedCertificate}
            />
          )}
          {/* Input Section */}
          <InputSection
            activeTab={activeTab}
            proficiencyLevel={proficiencyLevel}
            inputText={inputText}
            setInputText={setInputText}
            loading={loading}
            generateExercise={generateExercise}
            fixGrammar={fixGrammar}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            handleSuggestionClick={handleSuggestionClick}
            exerciseType={exerciseType}
            setExerciseType={setExerciseType}
            numExercises={numExercises}
            setNumExercises={setNumExercises}
            resetExercise={resetExercise}
            autoAnalyzeEnabled={autoAnalyzeEnabled}
            setAutoAnalyzeEnabled={setAutoAnalyzeEnabled}
            lightningTimeLimit={lightningTimeLimit}
            setLightningTimeLimit={setLightningTimeLimit}
            gameTimeLimit={gameTimeLimit}
            setGameTimeLimit={setGameTimeLimit}
            questionPauseTime={questionPauseTime}
            setQuestionPauseTime={setQuestionPauseTime}
          />
          {/* Mini Game Results Display */}
          {miniGameResults && !showMiniGames && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-lg">
              <div className="text-center">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  🏆 Last Mini Game Result
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {miniGameResults.gameType
                    .replace("-", " ")
                    .replace(/\b\w/g, (l: string) => l.toUpperCase())}{" "}
                  - Score:{" "}
                  {miniGameResults.results.finalScore ||
                    miniGameResults.results.score ||
                    0}
                </p>
                <Button
                  onClick={() => setMiniGameResults(null)}
                  variant="ghost"
                  size="sm"
                  className="mt-2 text-green-600 hover:text-green-700"
                >
                  Clear Result
                </Button>
              </div>
            </div>
          )}{" "}
          {/* Exercise Display */}
          {exercise && (
            <ExerciseGrammarComponents
              exercise={exercise}
              showResults={showResults}
              setShowHints={setShowHints}
              showHints={showHints}
              setSelectedAnswers={setSelectedAnswers}
              selectedAnswers={selectedAnswers}
              handleSuggestionClick={handleSuggestionClick}
              checkAnswers={checkAnswers}
              setShowDownloadOptions={setShowDownloadOptions}
              showDownloadOptions={showDownloadOptions}
              generateExercise={generateExercise}
              setExercise={setExercise}
              setShowResults={setShowResults}
              setInputText={setInputText}
              loading={loading}
              proficiencyLevel={proficiencyLevel}
              exerciseType={exerciseType}
              setShowScoreAnalysis={setShowScoreAnalysis}
              setAnalyzingScore={setAnalyzingScore}
              setUserScore={setUserScore}
              setMiniExerciseSuggestion={setMiniExerciseSuggestion}
              inputText={inputText}
              autoAnalyzeEnabled={autoAnalyzeEnabled}
              lightningGameActive={lightningGameActive}
              currentLightningQuestion={currentLightningQuestion}
              onLightningQuestionComplete={handleLightningQuestionComplete}
              lightningScore={lightningScore}
              setLightningScore={setLightningScore}
            />
          )}
          {/* Grammar Fix Results */}
          {fixResult && <FixReuslt fixResult={fixResult} />}
        </>
      )}

      {/* Level Equivalency Modal */}
      {showLevelModal && selectedLevelInfo && (
        <LevelEquivalencyModal
          selectedLevelInfo={selectedLevelInfo}
          setShowLevelModal={setShowLevelModal}
          setShowExerciseModal={setShowExerciseModal}
        />
      )}

      {/* Exercise Recommendations Modal */}
      {showExerciseModal && selectedLevelInfo && (
        <ShowExerciseModal
          selectedLevelInfo={selectedLevelInfo}
          setShowExerciseModal={setShowExerciseModal}
          setShowLevelModal={setShowLevelModal}
        />
      )}

      {/* Score Analysis Modal */}
      {showScoreAnalysis && userScore && (
        <ScoreAnalysisModal
          setShowScoreAnalysis={setShowScoreAnalysis}
          userScore={userScore}
          proficiencyLevel={proficiencyLevel}
          miniExerciseSuggestion={miniExerciseSuggestion}
          setShowMiniExerciseSuggestion={setShowMiniExerciseSuggestion}
          setInputText={setInputText}
          resetExercise={resetExercise}
        />
      )}

      {/* Loading overlay for analysis */}
      {analyzingScore && <LoadingAIGenerate />}

      {/* Chart Analytics Modal */}
      <ChartComponent
        isOpen={showChartAnalytics}
        onClose={() => setShowChartAnalytics(false)}
      />

      {/* Floating Chart Analytics Button */}
      <Button
        onClick={() => setShowChartAnalytics(true)}
        className="h-14 fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
        title="View Grammar Mistake Analytics"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            Analytics
          </span>
        </div>
      </Button>

      {/* Mini Exercise Suggestion Modal */}
      {showMiniExerciseSuggestion && miniExerciseSuggestion && (
        <MiniExerciseSuggestion
          isOpen={showMiniExerciseSuggestion}
          suggestion={miniExerciseSuggestion}
          grammarTopic={inputText}
          onClose={() => setShowMiniExerciseSuggestion(false)}
          setInputText={setInputText}
          setShowMiniExerciseSuggestion={setShowMiniExerciseSuggestion}
          setExercise={setExercise}
          setSelectedAnswers={setSelectedAnswers}
          setShowResults={setShowResults}
          setLoading={setLoading}
          proficiencyLevel={proficiencyLevel}
          exerciseType={exerciseType}
          numExercises={numExercises}
        />
      )}

      {/* Tense Information Modal */}
      {tenseModalData.isOpen && (
        <TenseInfoModal
          isOpen={tenseModalData.isOpen}
          tenseName={tenseModalData.tenseName}
          onClose={() =>
            setTenseModalData({ isOpen: false, tenseName: "", tenseData: null })
          }
          onBackToPanel={() => {
            setTenseModalData({
              isOpen: false,
              tenseName: "",
              tenseData: null,
            });
            setShowTenseInfo(true);
          }}
        />
      )}

      <HintTenses />

      {/* Hint Tenses Component */}
    </div>
  );
};

export default ExerciseGrammar;

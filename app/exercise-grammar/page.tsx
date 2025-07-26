"use client";

import { useState } from "react";
import TabNavigation from "./components/tab-navigation";
import InputSection from "./components/input-secttion";
import ExerciseGrammarComponents from "./components/exercise";
import FixReuslt from "./components/fix-result";
import LevelEquivalencyModal from "./components/level-equivalency_modal";
import ShowExerciseModal from "./components/show-exercise-modal";
import TenseInfoPanel from "./components/tense-Info-panel";
import {
  CEFRLevel,
  Exercise,
  FixResponse,
  MiniExerciseSuggestionType,
  TypeExcercise,
  UserSocerType,
} from "@/types/grammars/grammars_type";
import { toast } from "react-hot-toast";
import ChartComponent from "./components/chart-analytics";
import MiniExerciseSuggestion from "./components/mini-exercise-suggestion";
import LevelSelection from "./components/level-selection";
import ScoreAnalysisModal from "./components/score-analysis-modal";
import LoadingAIGenerate from "@/components/loading-AI-Generate";

const ExerciseGrammar = () => {
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

  // NEW: Add state for mini exercise suggestions
  const [showMiniExerciseSuggestion, setShowMiniExerciseSuggestion] =
    useState(false);
  const [miniExerciseSuggestion, setMiniExerciseSuggestion] =
    useState<MiniExerciseSuggestionType | null>(null);

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    setShowSuggestions(false);
  };

  const generateExercise = async (): Promise<void> => {
    if (!inputText.trim()) return;

    setLoading(true);
    setExercise(null);
    setFixResult(null);

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
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        AI Grammar Exercise Generator
      </h1>

      {/* Tense Information Panel - Fixed position in left corner */}
      {exercise && (
        <TenseInfoPanel
          showTenseInfo={showTenseInfo}
          setShowTenseInfo={setShowTenseInfo}
          exercise={exercise}
        />
      )}

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Proficiency Level Selection - only show for generate tab */}
      {activeTab === "generate" && (
        <LevelSelection
          proficiencyLevel={proficiencyLevel}
          setProficiencyLevel={setProficiencyLevel}
          setSelectedLevelInfo={setSelectedLevelInfo}
          setShowLevelModal={setShowLevelModal}
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
      />

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
        />
      )}

      {/* Grammar Fix Results */}
      {fixResult && <FixReuslt fixResult={fixResult} />}

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
      <button
        onClick={() => setShowChartAnalytics(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
        title="View Grammar Mistake Analytics"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">📊</span>
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            Analytics
          </span>
        </div>
      </button>

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
    </div>
  );
};

export default ExerciseGrammar;

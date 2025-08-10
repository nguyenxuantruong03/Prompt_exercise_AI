import {
  CEFRLevel,
  Exercise,
  MiniExerciseSuggestionType,
  TypeExcercise,
  UserSocerType,
  Question,
} from "@/types/grammars/grammars_type";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import toast from "react-hot-toast";
import GrammarAnalysisModal, {
  AnalyzedSentence,
  GrammarElement,
  ElementModal,
} from "../analyze-grammar/grammar-analysis-modal";
import { grammarAnalysis } from "../analyze-grammar/sentence-analyzer";

// Import all components
import {
  ExerciseHeader,
  DownloadOptions,
  ExerciseActions,
  QuestionItem,
  useScoreCalculator,
} from "./components";

// Define global window extension type
declare global {
  interface Window {
    showGrammarElementDetails?: (
      elementType: string,
      elementText: string,
      elementIndex: number
    ) => void;
  }
}

interface ExerciseGrammarProps {
  exercise: Exercise;
  showResults: boolean;
  setShowHints: Dispatch<SetStateAction<Record<number, boolean>>>;
  showHints: Record<number, boolean>;
  setSelectedAnswers: Dispatch<SetStateAction<Record<number, number | string>>>;
  selectedAnswers: Record<number, number | string>;
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
  autoAnalyzeEnabled: boolean;
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
  autoAnalyzeEnabled,
}) => {
  // Use the score calculator hook
  const { createCalculateAndShowScore } = useScoreCalculator();

  // Grammar Analysis Modal State
  const [showGrammarAnalysis, setShowGrammarAnalysis] = useState(false);
  const [analyzedSentence, setAnalyzedSentence] =
    useState<AnalyzedSentence | null>(null);
  const [selectedQuestionForAnalysis, setSelectedQuestionForAnalysis] =
    useState<Question | null>(null);

  // Element Modal State (for direct element analysis)
  const [showElementModal, setShowElementModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState<GrammarElement | null>(
    null
  );

  // Auto-analysis state - store analyzed questions for auto-highlight
  const [autoAnalyzedQuestions, setAutoAnalyzedQuestions] = useState<
    Record<number, AnalyzedSentence>
  >({});

  // Create the calculate and show score function
  const calculateAndShowScore = createCalculateAndShowScore(
    exercise,
    selectedAnswers,
    setAnalyzingScore,
    setUserScore,
    setShowScoreAnalysis,
    setMiniExerciseSuggestion,
    proficiencyLevel,
    exerciseType,
    inputText
  );

  // Auto-analyze all questions when autoAnalyzeEnabled is true
  useEffect(() => {
    if (autoAnalyzeEnabled && exercise?.questions) {
      const analyzed: Record<number, AnalyzedSentence> = {};

      exercise.questions.forEach((question) => {
        try {
          const analyzedResult = grammarAnalysis(question.question);
          analyzed[question.id] = analyzedResult;
        } catch (error) {
          console.error(`Failed to analyze question ${question.id}:`, error);
        }
      });

      setAutoAnalyzedQuestions(analyzed);
    } else if (!autoAnalyzeEnabled) {
      // Clear auto-analyzed questions when disabled
      setAutoAnalyzedQuestions({});
    }
  }, [autoAnalyzeEnabled, exercise]);

  // Set up global function for clicking highlighted elements
  useEffect(() => {
    // Define global function for handling highlighted element clicks
    window.showGrammarElementDetails = (
      elementType: string,
      elementText: string,
      elementIndex: number
    ) => {
      // Find the current question that contains this element
      let targetQuestion: Question | null = null;
      let targetAnalyzed: AnalyzedSentence | null = null;

      for (const question of exercise?.questions || []) {
        const analyzed = autoAnalyzedQuestions[question.id];
        if (analyzed && analyzed.elements) {
          const hasElement = analyzed.elements.some(
            (el, index) =>
              el.type === elementType &&
              el.text === elementText &&
              index === elementIndex
          );
          if (hasElement) {
            targetQuestion = question;
            targetAnalyzed = analyzed;
            break;
          }
        }
      }

      if (targetQuestion && targetAnalyzed) {
        setAnalyzedSentence(targetAnalyzed);
        setSelectedQuestionForAnalysis(targetQuestion);
        setShowGrammarAnalysis(true);

        toast.success(
          `🔍 Opening detailed analysis for "${elementText}" (${elementType}). Click on elements in the modal to learn more!`
        );
      } else {
        toast.error(
          "Unable to find grammar element details. Please try the analysis button instead."
        );
      }
    };

    // Cleanup function
    return () => {
      delete window.showGrammarElementDetails;
    };
  }, [exercise, autoAnalyzedQuestions]);

  // Handle grammar analysis for a specific question
  const handleGrammarAnalysis = (question: Question) => {
    try {
      // Analyze the question text for grammatical elements
      const analyzed = grammarAnalysis(question.question);
      setAnalyzedSentence(analyzed);
      setSelectedQuestionForAnalysis(question);
      setShowGrammarAnalysis(true);
    } catch (error) {
      toast.error("Failed to analyze sentence grammar. Please try again.");
      console.error("Grammar analysis error:", error);
    }
  };

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

  const handleInputAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <>
      <div
        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
        data-exercise-display
      >
        <ExerciseHeader
          title={exercise.title}
          proficiencyLevel={proficiencyLevel}
        />

        {exercise.questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            showResults={showResults}
            showHints={showHints}
            selectedAnswers={selectedAnswers}
            autoAnalyzedQuestions={autoAnalyzedQuestions}
            autoAnalyzeEnabled={autoAnalyzeEnabled}
            loading={loading}
            toggleHint={toggleHint}
            handleAnswerSelect={handleAnswerSelect}
            handleInputAnswer={handleInputAnswer}
            handleGrammarAnalysis={handleGrammarAnalysis}
            setSelectedElement={setSelectedElement}
            setShowElementModal={setShowElementModal}
            generateExercise={generateExercise}
            setExercise={setExercise}
            setShowResults={setShowResults}
            setInputText={setInputText}
            setSelectedAnswers={setSelectedAnswers}
            handleSuggestionClick={handleSuggestionClick}
          />
        ))}

        <ExerciseActions
          showResults={showResults}
          checkAnswers={checkAnswers}
          showDownloadOptions={showDownloadOptions}
          setShowDownloadOptions={setShowDownloadOptions}
          calculateAndShowScore={calculateAndShowScore}
        />

        <DownloadOptions
          showDownloadOptions={showDownloadOptions}
          exercise={exercise}
          selectedAnswers={selectedAnswers}
          showResults={showResults}
        />
      </div>

      {/* Grammar Analysis Modal */}
      {analyzedSentence && (
        <GrammarAnalysisModal
          isOpen={showGrammarAnalysis}
          onClose={() => {
            setShowGrammarAnalysis(false);
            setAnalyzedSentence(null);
            setSelectedQuestionForAnalysis(null);
          }}
          sentence={analyzedSentence}
          proficiencyLevel={proficiencyLevel}
        />
      )}

      {/* Element Modal (for direct grammar element analysis) */}
      {selectedElement && (
        <ElementModal
          isOpen={showElementModal}
          onClose={() => {
            setShowElementModal(false);
            setSelectedElement(null);
          }}
          element={selectedElement}
          proficiencyLevel={proficiencyLevel}
        />
      )}
    </>
  );
};

export default ExerciseGrammar;

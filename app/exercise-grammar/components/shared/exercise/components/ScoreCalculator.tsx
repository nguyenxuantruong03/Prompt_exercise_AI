import { mistakeTracker } from "@/lib/static/grammars/mistake-tracker";
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

export const useScoreCalculator = () => {
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
  const analyzeUserPerformance = async (
    scoreData: {
      correct: number;
      total: number;
      percentage: number;
      incorrectQuestions: Array<{
        question: Question;
        userAnswer: string | number;
        correctAnswer: string | number;
      }>;
    },
    setAnalyzingScore: Dispatch<SetStateAction<boolean>>,
    setUserScore: Dispatch<SetStateAction<UserSocerType | null>>,
    setShowScoreAnalysis: Dispatch<SetStateAction<boolean>>,
    proficiencyLevel: CEFRLevel,
    exerciseType: TypeExcercise,
    inputText: string
  ) => {
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
        feedback: `You got ${scoreData.correct} right / ${
          scoreData.total - scoreData.correct
        } wrong (${scoreData.percentage}%). ${
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
  const createCalculateAndShowScore = (
    exercise: Exercise | null,
    selectedAnswers: { [key: number]: number | string },
    setAnalyzingScore: Dispatch<SetStateAction<boolean>>,
    setUserScore: Dispatch<SetStateAction<UserSocerType | null>>,
    setShowScoreAnalysis: Dispatch<SetStateAction<boolean>>,
    setMiniExerciseSuggestion: Dispatch<
      SetStateAction<MiniExerciseSuggestionType | null>
    >,
    proficiencyLevel: CEFRLevel,
    exerciseType: TypeExcercise,
    inputText: string
  ) => {
    return () => {
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
          analyzeUserPerformance(
            scoreData,
            setAnalyzingScore,
            setUserScore,
            setShowScoreAnalysis,
            proficiencyLevel,
            exerciseType,
            inputText
          );
        }, 500);
      }
    };
  };

  return {
    calculateUserScore,
    estimateTestScores,
    analyzeUserPerformance,
    createCalculateAndShowScore,
  };
};

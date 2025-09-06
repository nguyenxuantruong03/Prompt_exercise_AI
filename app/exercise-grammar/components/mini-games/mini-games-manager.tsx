"use client";

import { useState, useEffect } from "react";
import { Exercise, TypeExcercise } from "@/types/grammars/grammars_type";
import MiniGamesSelection from "./mini-games-selection";
import SpeedChallengeGame from "./speed-challenge-game";
import WordArrangementRaceGame from "./word-arrangement-race";
import ImageGrammarQuizGame from "./image-grammar-quiz";
import GrammarMemoryMatchGame from "./grammar-memory-match";
import GrammarPuzzleSolverGame from "./grammar-puzzle-solver";
import RapidFireCorrectionsGame from "./rapid-fire-corrections";
import TenseTimelineGame from "./tense-timeline-master";
import GrammarCategorySortGame from "./grammar-category-sort";
import GrammarGeneratorGame from "./grammar-generator-game";

interface MiniGamesManagerProps {
  inputText: string;
  proficiencyLevel: string;
  numExercises: number;
  onGameComplete: (gameType: TypeExcercise, results: any) => void;
  selectedGameType?: TypeExcercise;
  gameTimeLimit?: number; // User-configurable time limit in seconds
  questionPauseTime?: number; // Pause time between questions in seconds
}

interface GameState {
  selectedGame: TypeExcercise | null;
  exercise: Exercise | null;
  selectedAnswers: { [key: number]: number | string | string[] };
  gameInProgress: boolean;
  loading: boolean;
}

const MiniGamesManager: React.FC<MiniGamesManagerProps> = ({
  inputText,
  proficiencyLevel,
  numExercises,
  onGameComplete,
  selectedGameType,
  gameTimeLimit = 15, // Default 15 seconds instead of 10
  questionPauseTime = 3, // Default 3 seconds pause between questions
}) => {
  const [gameState, setGameState] = useState<GameState>({
    selectedGame: selectedGameType || null,
    exercise: null,
    selectedAnswers: {},
    gameInProgress: false,
    loading: false,
  });

  // Auto-start the game if selectedGameType is provided
  useEffect(() => {
    if (selectedGameType && !gameState.exercise && !gameState.loading) {
      handleGameSelect(selectedGameType);
    }
  }, [selectedGameType]);

  const handleGameSelect = async (gameType: TypeExcercise) => {
    setGameState((prev) => ({
      ...prev,
      selectedGame: gameType,
      loading: true,
    }));

    try {
      // Generate exercise for the selected game type
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          action: "generate",
          exerciseType: gameType,
          proficiencyLevel: proficiencyLevel,
          numExercises: numExercises,
          lightningTimeLimit: gameTimeLimit, // Use configurable time limit
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();

      if (
        data.exercise &&
        data.exercise.questions &&
        data.exercise.questions.length > 0
      ) {
        setGameState((prev) => ({
          ...prev,
          exercise: data.exercise,
          gameInProgress: true,
          loading: false,
        }));
      } else {
        throw new Error("Invalid exercise data received");
      }
    } catch (error) {
      console.error("Error generating exercise:", error);

      // Create fallback exercise for demonstration
      const fallbackExercise = createFallbackExercise(
        gameType,
        inputText,
        proficiencyLevel
      );
      console.log("Using fallback exercise:", fallbackExercise);

      setGameState((prev) => ({
        ...prev,
        exercise: fallbackExercise,
        gameInProgress: true,
        loading: false,
      }));
    }
  };

  const handleQuestionAnswer = (
    questionId: number,
    answer: number | string | string[]
  ) => {
    setGameState((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: answer,
      },
    }));
  };

  const handleGameComplete = (results: any) => {
    if (gameState.selectedGame) {
      onGameComplete(gameState.selectedGame, results);
    }

    // Reset game state
    setGameState({
      selectedGame: null,
      exercise: null,
      selectedAnswers: {},
      gameInProgress: false,
      loading: false,
    });
  };

  const renderGameComponent = () => {
    if (!gameState.exercise || !gameState.selectedGame) return null;

    switch (gameState.selectedGame) {
      case "speed-challenge":
        return (
          <SpeedChallengeGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: number | string }
            }
            timeLimit={gameTimeLimit}
            pauseBetweenQuestions={questionPauseTime}
          />
        );

      case "word-arrangement-race":
        console.log(
          "Rendering WordArrangementRaceGame with exercise:",
          gameState.exercise
        );
        return (
          <WordArrangementRaceGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: number | string }
            }
            timeLimit={gameTimeLimit}
            pauseBetweenQuestions={questionPauseTime}
          />
        );

      case "image-grammar-quiz":
        return (
          <ImageGrammarQuizGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: number | string }
            }
            timeLimit={gameTimeLimit}
            pauseBetweenQuestions={questionPauseTime}
          />
        );

      case "grammar-memory-match":
        return (
          <GrammarMemoryMatchGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: string }
            }
            timeLimit={gameTimeLimit}
            pauseBetweenQuestions={questionPauseTime}
          />
        );

      case "grammar-puzzle-solver":
        return (
          <GrammarPuzzleSolverGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: string }
            }
          />
        );

      case "rapid-fire-corrections":
        return (
          <RapidFireCorrectionsGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: string }
            }
          />
        );

      case "tense-timeline-game":
        return (
          <TenseTimelineGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: string }
            }
          />
        );

      case "grammar-category-sort":
        return (
          <GrammarCategorySortGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: string }
            }
          />
        );

      case "grammar-generator":
        return (
          <GrammarGeneratorGame
            exercise={gameState.exercise}
            onComplete={handleGameComplete}
            onQuestionAnswer={(id, answer) => handleQuestionAnswer(id, answer)}
            selectedAnswers={
              gameState.selectedAnswers as { [key: number]: string }
            }
          />
        );

      // Lightning game is handled separately as it's not a mini-game
      case "true-false-lightning":
        return (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 text-center border border-yellow-200 dark:border-yellow-700">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Lightning Game Available!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The Lightning Game is a separate exercise type, not a mini-game.
            </p>
            <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              Please select it from the exercise types instead.
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (gameState.loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
        <div className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-blue-500 rounded-full mb-4" />
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Preparing Your Game...
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Generating {getGameName(gameState.selectedGame)} questions for you!
        </p>
      </div>
    );
  }

  if (gameState.gameInProgress && gameState.exercise) {
    return renderGameComponent();
  }

  return (
    <MiniGamesSelection
      onGameSelect={handleGameSelect}
      currentGame={gameState.selectedGame || undefined}
      disabled={gameState.loading}
    />
  );
};

// Helper function to create fallback exercises for demonstration
const createFallbackExercise = (
  gameType: TypeExcercise,
  topic: string,
  level: string
): Exercise => {
  console.log("Creating fallback exercise for:", { gameType, topic, level });

  // Create diverse word arrangement questions based on topic and level
  const createDiverseWordArrangementQuestions = (numQuestions: number = 3) => {
    const sentenceTemplates = [
      // Basic sentences (A1-A2)
      {
        words: ["I", "like", "to", "read", "books"],
        correct: ["I", "like", "to", "read", "books"],
        level: "A1",
      },
      {
        words: ["She", "goes", "to", "work", "every", "day"],
        correct: ["She", "goes", "to", "work", "every", "day"],
        level: "A1",
      },
      {
        words: ["We", "are", "learning", "English", "now"],
        correct: ["We", "are", "learning", "English", "now"],
        level: "A2",
      },
      {
        words: ["The", "cat", "is", "sleeping", "on", "the", "sofa"],
        correct: ["The", "cat", "is", "sleeping", "on", "the", "sofa"],
        level: "A2",
      },
      {
        words: ["My", "friend", "has", "bought", "a", "new", "car"],
        correct: ["My", "friend", "has", "bought", "a", "new", "car"],
        level: "A2",
      },
      {
        words: ["They", "play", "football", "every", "weekend"],
        correct: ["They", "play", "football", "every", "weekend"],
        level: "A1",
      },
      {
        words: ["The", "children", "are", "playing", "in", "the", "garden"],
        correct: ["The", "children", "are", "playing", "in", "the", "garden"],
        level: "A2",
      },
      {
        words: ["I", "have", "been", "studying", "for", "two", "hours"],
        correct: ["I", "have", "been", "studying", "for", "two", "hours"],
        level: "A2",
      },

      // Intermediate sentences (B1-B2)
      {
        words: ["If", "it", "rains", "tomorrow", "we", "will", "stay", "home"],
        correct: [
          "If",
          "it",
          "rains",
          "tomorrow",
          "we",
          "will",
          "stay",
          "home",
        ],
        level: "B1",
      },
      {
        words: [
          "The",
          "book",
          "that",
          "I",
          "bought",
          "yesterday",
          "is",
          "very",
          "interesting",
        ],
        correct: [
          "The",
          "book",
          "that",
          "I",
          "bought",
          "yesterday",
          "is",
          "very",
          "interesting",
        ],
        level: "B2",
      },
      {
        words: ["Although", "he", "was", "tired", "he", "continued", "working"],
        correct: [
          "Although",
          "he",
          "was",
          "tired",
          "he",
          "continued",
          "working",
        ],
        level: "B1",
      },
      {
        words: [
          "The",
          "students",
          "have",
          "been",
          "studying",
          "for",
          "three",
          "hours",
        ],
        correct: [
          "The",
          "students",
          "have",
          "been",
          "studying",
          "for",
          "three",
          "hours",
        ],
        level: "B2",
      },
      {
        words: [
          "She",
          "would",
          "have",
          "come",
          "if",
          "you",
          "had",
          "invited",
          "her",
        ],
        correct: [
          "She",
          "would",
          "have",
          "come",
          "if",
          "you",
          "had",
          "invited",
          "her",
        ],
        level: "B2",
      },
      {
        words: [
          "While",
          "I",
          "was",
          "cooking",
          "dinner",
          "the",
          "phone",
          "rang",
        ],
        correct: [
          "While",
          "I",
          "was",
          "cooking",
          "dinner",
          "the",
          "phone",
          "rang",
        ],
        level: "B1",
      },
      {
        words: [
          "The",
          "movie",
          "which",
          "we",
          "watched",
          "last",
          "night",
          "was",
          "excellent",
        ],
        correct: [
          "The",
          "movie",
          "which",
          "we",
          "watched",
          "last",
          "night",
          "was",
          "excellent",
        ],
        level: "B2",
      },
      {
        words: ["I", "wish", "I", "could", "speak", "Spanish", "fluently"],
        correct: ["I", "wish", "I", "could", "speak", "Spanish", "fluently"],
        level: "B1",
      },

      // Advanced sentences (C1-C2)
      {
        words: [
          "Having",
          "finished",
          "his",
          "homework",
          "he",
          "decided",
          "to",
          "watch",
          "TV",
        ],
        correct: [
          "Having",
          "finished",
          "his",
          "homework",
          "he",
          "decided",
          "to",
          "watch",
          "TV",
        ],
        level: "C1",
      },
      {
        words: [
          "Not",
          "only",
          "did",
          "she",
          "pass",
          "the",
          "exam",
          "but",
          "she",
          "also",
          "got",
          "the",
          "highest",
          "score",
        ],
        correct: [
          "Not",
          "only",
          "did",
          "she",
          "pass",
          "the",
          "exam",
          "but",
          "she",
          "also",
          "got",
          "the",
          "highest",
          "score",
        ],
        level: "C2",
      },
      {
        words: [
          "Were",
          "it",
          "not",
          "for",
          "your",
          "help",
          "I",
          "would",
          "not",
          "have",
          "succeeded",
        ],
        correct: [
          "Were",
          "it",
          "not",
          "for",
          "your",
          "help",
          "I",
          "would",
          "not",
          "have",
          "succeeded",
        ],
        level: "C2",
      },
      {
        words: [
          "Despite",
          "having",
          "little",
          "experience",
          "she",
          "managed",
          "to",
          "complete",
          "the",
          "project",
        ],
        correct: [
          "Despite",
          "having",
          "little",
          "experience",
          "she",
          "managed",
          "to",
          "complete",
          "the",
          "project",
        ],
        level: "C1",
      },
      {
        words: [
          "The",
          "more",
          "I",
          "study",
          "the",
          "more",
          "I",
          "realize",
          "how",
          "much",
          "I",
          "don't",
          "know",
        ],
        correct: [
          "The",
          "more",
          "I",
          "study",
          "the",
          "more",
          "I",
          "realize",
          "how",
          "much",
          "I",
          "don't",
          "know",
        ],
        level: "C1",
      },
    ]; // Filter sentences based on level
    let availableTemplates = sentenceTemplates;
    if (level === "A1" || level === "A2") {
      availableTemplates = sentenceTemplates.filter(
        (t) => t.level === "A1" || t.level === "A2"
      );
    } else if (level === "B1" || level === "B2") {
      availableTemplates = sentenceTemplates.filter(
        (t) => t.level === "B1" || t.level === "B2" || t.level === "A2"
      );
    } else if (level === "C1" || level === "C2") {
      availableTemplates = sentenceTemplates; // All levels for advanced
    }

    // Shuffle and select questions
    const shuffled = [...availableTemplates].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, numQuestions);

    return selected.map((template, index) => {
      // Scramble the words randomly
      const scrambledWords = [...template.words].sort(
        () => Math.random() - 0.5
      );

      return {
        id: index + 1,
        question: `Arrange these words to make a correct sentence:`,
        options: [],
        correct: template.correct.join(" "),
        explanation: `"${template.correct.join(
          " "
        )}" is the correct sentence structure.`,
        type: gameType,
        wordArrangementData: {
          scrambledWords: scrambledWords,
          correctOrder: template.correct,
          timeLimit: 30,
          hints: getHintsForSentence(template.correct, template.level),
        },
      };
    });
  };

  // Generate questions based on game type
  let questions: any[] = [];

  if (gameType === "word-arrangement-race") {
    questions = createDiverseWordArrangementQuestions(3);
  } else if (gameType === "grammar-memory-match") {
    // Create diverse memory match pairs
    const memoryPairs = [
      {
        rule: "Present Simple is used for daily routines and habits",
        example: "I brush my teeth every morning",
        topic: "Daily Routines",
      },
      {
        rule: "Present Simple is used for general facts and truths",
        example: "The sun rises in the east",
        topic: "Facts",
      },
      {
        rule: "Present Simple uses 's/es' with he/she/it",
        example: "She works at a hospital",
        topic: "Third Person",
      },
    ];

    questions = memoryPairs.map((pair, index) => ({
      id: index + 1,
      question: `Match the ${topic} rule with its example:`,
      options: [],
      correct: pair.example,
      explanation: `${pair.rule} - Example: ${pair.example}`,
      type: gameType,
      memoryMatchData: {
        pairs: [
          {
            id: `rule${index + 1}`,
            type: "rule",
            content: pair.rule,
            matchId: `example${index + 1}`,
          },
          {
            id: `example${index + 1}`,
            type: "example",
            content: pair.example,
            matchId: `rule${index + 1}`,
          },
        ],
        timeLimit: 60,
      },
    }));
  } else {
    // Fallback for other game types
    const baseQuestions = [
      {
        id: 1,
        question: `Practice ${topic} with this exercise:`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: "Option A",
        explanation: `This is a practice question for ${topic}.`,
        type: gameType,
      },
      {
        id: 2,
        question: `Another ${topic} question:`,
        options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1",
        explanation: `This helps you practice ${topic}.`,
        type: gameType,
      },
    ];
    questions = baseQuestions;
  }

  const exercise = {
    title: `${topic} - ${getGameName(gameType)} (${level}) - Diverse Practice`,
    questions,
    type: gameType,
  };

  console.log(
    "Created diverse fallback exercise with",
    questions.length,
    "questions"
  );
  return exercise;
};

// Helper function to generate hints based on sentence structure
const getHintsForSentence = (
  correctOrder: string[],
  level: string
): string[] => {
  const hints: string[] = [];

  // Basic hints for all levels
  if (correctOrder.length > 0) {
    const firstWord = correctOrder[0].toLowerCase();
    if (["i", "you", "he", "she", "it", "we", "they"].includes(firstWord)) {
      hints.push("Start with the subject");
    } else if (
      ["the", "a", "an", "this", "that", "these", "those"].includes(firstWord)
    ) {
      hints.push("Start with the article/determiner");
    } else if (
      firstWord === "if" ||
      firstWord === "although" ||
      firstWord === "because"
    ) {
      hints.push("Start with the conjunction");
    }
  }

  // Look for verb patterns
  const hasModal = correctOrder.some((word) =>
    [
      "can",
      "could",
      "will",
      "would",
      "should",
      "must",
      "may",
      "might",
    ].includes(word.toLowerCase())
  );
  if (hasModal) {
    hints.push("Modal verb comes before main verb");
  }

  const hasBe = correctOrder.some((word) =>
    ["am", "is", "are", "was", "were", "be", "been", "being"].includes(
      word.toLowerCase()
    )
  );
  if (hasBe && correctOrder.some((word) => word.endsWith("ing"))) {
    hints.push("Use continuous tense (be + -ing)");
  }

  // Advanced hints for higher levels
  if (level === "B1" || level === "B2" || level === "C1" || level === "C2") {
    if (
      correctOrder.includes("that") ||
      correctOrder.includes("which") ||
      correctOrder.includes("who")
    ) {
      hints.push("Relative clause follows the noun it describes");
    }

    if (correctOrder.includes("not") && correctOrder.includes("only")) {
      hints.push("Inverted word order after 'not only'");
    }
  }

  // Return up to 2 hints
  return hints.slice(0, 2);
};

// Helper function to get game display name
const getGameName = (gameType: TypeExcercise | null): string => {
  if (!gameType) return "";

  const gameNames: { [key in TypeExcercise]?: string } = {
    "speed-challenge": "Speed Challenge ⚡",
    "word-arrangement-race": "Word Arrangement Race 🏃‍♂️",
    "grammar-memory-match": "Grammar Memory Match 🧠",
    "image-grammar-quiz": "Image Grammar Quiz 🖼️",
    "grammar-puzzle-solver": "Grammar Puzzle Solver 🧩",
    "rapid-fire-corrections": "Rapid Fire Corrections 🔥",
    "tense-timeline-game": "Tense Timeline Game ⏰",
    "grammar-category-sort": "Grammar Category Sort 📋",
    "true-false-lightning": "Lightning Round ⚡",
  };

  return (
    gameNames[gameType] ||
    gameType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
};

export default MiniGamesManager;

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/grammars/grammars_type";

interface GrammarMemoryMatchGameProps {
  exercise: Exercise;
  onComplete: (results: any) => void;
  onQuestionAnswer: (id: number, answer: string) => void;
  selectedAnswers: { [key: number]: string };
  timeLimit?: number;
  pauseBetweenQuestions?: number;
  maxConnections?: number; // New prop to configure how many cards can be connected
}

interface MemoryCard {
  id: string;
  content: string;
  type: "rule" | "example" | "explanation" | "usage" | "variation"; // Extended card types
  pairId: string;
  questionId: number;
  isSelected: boolean; // Changed from isFlipped to isSelected
  isMatched: boolean;
  isAnswered: boolean;
  cardIndex?: number; // Optional index within the group
}

interface MatchedPair {
  pairId: string;
  questionId: number;
  rule: string;
  example: string;
  isAnswered: boolean;
  showExplanation: boolean;
  isCompleted: boolean;
}

const GrammarMemoryMatchGame: React.FC<GrammarMemoryMatchGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
  timeLimit: userTimeLimit = 60,
  pauseBetweenQuestions = 3,
  maxConnections = 2, // Default to 2 cards, but configurable
}) => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]); // Changed from flippedCards
  const [matches, setMatches] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<MatchedPair[]>([]);
  const [moves, setMoves] = useState(0);
  const [wrongConnections, setWrongConnections] = useState(0); // New counter for wrong connections
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [currentQuestionMode, setCurrentQuestionMode] = useState<number | null>(
    null
  );
  const [showResults, setShowResults] = useState(false);
  const [showQuestionDisplay, setShowQuestionDisplay] = useState(false); // Control question display

  useEffect(() => {
    if (exercise && exercise.questions) {
      initializeGame();
    }
  }, [exercise]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted]);

  useEffect(() => {
    if (selectedCards.length === maxConnections) {
      const timeout = setTimeout(() => {
        checkForMatch();
      }, 500); // Shorter delay for connection-based gameplay
      return () => clearTimeout(timeout);
    }
  }, [selectedCards, maxConnections]);

  const initializeGame = () => {
    const gameCards: MemoryCard[] = [];

    exercise.questions.forEach((question, index) => {
      // Try to get diverse content from memoryMatchData first
      let rulePairs: Array<{ content: string; matchId: string }> = [];
      let examplePairs: Array<{ content: string; matchId: string }> = [];

      // If memoryMatchData exists, use it for diverse AI-generated content
      const memoryData = (question as any).memoryMatchData;
      if (memoryData && memoryData.pairs && memoryData.pairs.length >= 2) {
        // Extract rule and example pairs from AI data
        rulePairs = memoryData.pairs.filter((p: any) => p.type === "rule");
        examplePairs = memoryData.pairs.filter(
          (p: any) => p.type === "example"
        );

        // Create cards for each pair
        rulePairs.forEach((rulePair: any, pairIndex: number) => {
          const matchingExample = examplePairs.find(
            (e: any) => e.matchId === rulePair.id
          );
          if (matchingExample) {
            const uniquePairId = `pair-${index}-${pairIndex}`;

            // Create rule card
            gameCards.push({
              id: `rule-${index}-${pairIndex}`,
              content: rulePair.content,
              type: "rule",
              pairId: uniquePairId,
              questionId: question.id,
              isSelected: false,
              isMatched: false,
              isAnswered: false,
            });

            // Create example card
            gameCards.push({
              id: `example-${index}-${pairIndex}`,
              content: matchingExample.content,
              type: "example",
              pairId: uniquePairId,
              questionId: question.id,
              isSelected: false,
              isMatched: false,
              isAnswered: false,
            });
          }
        });
      } else {
        // Fallback to basic content if no memoryMatchData
        const ruleContent = question.question || `Grammar rule ${index + 1}`;
        const exampleContent = question.options
          ? question.options[Number(question.correct)]
          : question.explanation || `Example ${index + 1}`;

        // Create rule card
        gameCards.push({
          id: `rule-${index}`,
          content: ruleContent,
          type: "rule",
          pairId: `pair-${index}`,
          questionId: question.id,
          isSelected: false,
          isMatched: false,
          isAnswered: false,
        });

        // Create example card
        gameCards.push({
          id: `example-${index}`,
          content: exampleContent,
          type: "example",
          pairId: `pair-${index}`,
          questionId: question.id,
          isSelected: false,
          isMatched: false,
          isAnswered: false,
        });
      }
    });

    // Shuffle cards for random layout
    const shuffledCards = [...gameCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);

    console.log(
      `🧠 Memory Match: Generated ${gameCards.length} cards from ${exercise.questions.length} questions`
    );
  };

  const handleCardClick = (cardId: string) => {
    if (selectedCards.length >= maxConnections) return; // Use configurable max connections
    if (selectedCards.includes(cardId)) {
      // Deselect if already selected
      setSelectedCards((prev) => prev.filter((id) => id !== cardId));
      setCards((prev) =>
        prev.map((c) => (c.id === cardId ? { ...c, isSelected: false } : c))
      );
      return;
    }

    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isMatched) return;

    if (!gameStarted) {
      setGameStarted(true);
    }

    // Select the card
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isSelected: true } : c))
    );

    setSelectedCards((prev) => [...prev, cardId]);
  };

  const checkForMatch = () => {
    if (selectedCards.length !== maxConnections) return;

    // For 2-card matching (pairs)
    if (maxConnections === 2) {
      const [card1Id, card2Id] = selectedCards;
      const card1 = cards.find((c) => c.id === card1Id);
      const card2 = cards.find((c) => c.id === card2Id);

      setMoves((prev) => prev + 1);

      if (card1 && card2 && card1.pairId === card2.pairId) {
        // Correct match found!
        setCards((prev) =>
          prev.map((c) =>
            c.pairId === card1.pairId
              ? { ...c, isMatched: true, isSelected: false }
              : selectedCards.includes(c.id)
              ? { ...c, isSelected: false }
              : c
          )
        );
        setMatches((prev) => [...prev, card1.pairId]);

        // Create matched pair for tracking (no question display)
        const matchedPair: MatchedPair = {
          pairId: card1.pairId,
          questionId: card1.questionId,
          rule: card1.type === "rule" ? card1.content : card2.content,
          example: card1.type === "example" ? card1.content : card2.content,
          isAnswered: true, // Auto-mark as answered since no question display
          showExplanation: false,
          isCompleted: true, // Auto-mark as completed
        };

        setMatchedPairs((prev) => [...prev, matchedPair]);

        // Auto-answer without showing question display
        handleAutoQuestionAnswer(card1.questionId);
      } else {
        // Wrong connection - increment counter and deselect
        setWrongConnections((prev) => prev + 1);
        setCards((prev) =>
          prev.map((c) =>
            selectedCards.includes(c.id) ? { ...c, isSelected: false } : c
          )
        );
      }
    } else {
      // For multi-card matching (3 or more cards)
      const selectedCardObjects = selectedCards
        .map((id) => cards.find((c) => c.id === id))
        .filter(Boolean) as MemoryCard[];
      const allSamePairId = selectedCardObjects.every(
        (card) => card.pairId === selectedCardObjects[0].pairId
      );

      setMoves((prev) => prev + 1);

      if (allSamePairId) {
        // Correct multi-match found!
        const firstCard = selectedCardObjects[0];
        setCards((prev) =>
          prev.map((c) =>
            c.pairId === firstCard.pairId
              ? { ...c, isMatched: true, isSelected: false }
              : selectedCards.includes(c.id)
              ? { ...c, isSelected: false }
              : c
          )
        );
        setMatches((prev) => [...prev, firstCard.pairId]);

        // Create matched pair for tracking
        const matchedPair: MatchedPair = {
          pairId: firstCard.pairId,
          questionId: firstCard.questionId,
          rule:
            selectedCardObjects.find((c) => c.type === "rule")?.content ||
            "Multi-card rule",
          example:
            selectedCardObjects.find((c) => c.type === "example")?.content ||
            "Multi-card example",
          isAnswered: true,
          showExplanation: false,
          isCompleted: true,
        };

        setMatchedPairs((prev) => [...prev, matchedPair]);
        handleAutoQuestionAnswer(firstCard.questionId);
      } else {
        // Wrong connection
        setWrongConnections((prev) => prev + 1);
        setCards((prev) =>
          prev.map((c) =>
            selectedCards.includes(c.id) ? { ...c, isSelected: false } : c
          )
        );
      }
    }

    setSelectedCards([]);

    // Check if game should complete (simplified logic)
    setTimeout(() => {
      const completedMatches =
        matchedPairs.filter((p) => p.isCompleted).length + 1; // +1 for current match
      if (completedMatches >= exercise.questions.length) {
        setGameCompleted(true);
        const results = {
          matches: matches.length + 1,
          totalPairs: exercise.questions.length,
          moves,
          wrongConnections,
          timeSeconds: timer,
          score: Math.max(0, 1000 - moves * 10 - wrongConnections * 20 - timer),
        };
        onComplete(results);
      }
    }, 500);
  };

  const handleQuestionAnswer = (questionId: number, answer: string) => {
    const question = exercise.questions.find((q) => q.id === questionId);
    if (!question) return;

    onQuestionAnswer(questionId, answer);

    // Mark cards as answered and keep them visible
    setCards((prev) =>
      prev.map((card) =>
        card.questionId === questionId ? { ...card, isAnswered: true } : card
      )
    );

    // Update matched pair as answered and completed
    setMatchedPairs((prev) =>
      prev.map((pair) =>
        pair.questionId === questionId
          ? {
              ...pair,
              isAnswered: true,
              showExplanation: true,
              isCompleted: true,
            }
          : pair
      )
    );

    // Clear current question mode after a brief delay to show explanation
    setTimeout(() => {
      setCurrentQuestionMode(null);
    }, 1500);
  };

  const handleAutoQuestionAnswer = (questionId: number) => {
    const question = exercise.questions.find((q) => q.id === questionId);
    if (!question) return;

    // Auto-answer as correct since they successfully matched the pair
    onQuestionAnswer(questionId, "auto-correct");

    // Mark cards as answered and keep them visible
    setCards((prev) =>
      prev.map((card) =>
        card.questionId === questionId ? { ...card, isAnswered: true } : card
      )
    );

    // No question display, so no need to set currentQuestionMode
  };

  const handleNextQuestion = () => {
    setCurrentQuestionMode(null);
    // Check if game should complete
    if (
      matchedPairs.length >= exercise.questions.length &&
      matchedPairs.every((pair) => pair.isAnswered)
    ) {
      setGameCompleted(true);
      const results = {
        matches: matches.length,
        totalPairs: exercise.questions.length,
        moves,
        wrongConnections,
        timeSeconds: timer,
        score: Math.max(0, 1000 - moves * 10 - wrongConnections * 20 - timer),
      };
      onComplete(results);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameCompleted(false);
    setTimer(0);
    setMoves(0);
    setMatches([]);
    setMatchedPairs([]);
    setSelectedCards([]);
    setWrongConnections(0);
    setCurrentQuestionMode(null);
    setShowResults(false);
    setShowQuestionDisplay(false);
    initializeGame();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getCardColor = (card: MemoryCard) => {
    if (card.isMatched && card.isAnswered) {
      // Completed pairs - different color to show they're done
      return card.type === "rule"
        ? "bg-green-200 border-green-400 text-green-900"
        : "bg-emerald-200 border-emerald-400 text-emerald-900";
    }
    if (card.isMatched) {
      // Matched but not answered yet - brighter colors
      return card.type === "rule"
        ? "bg-blue-200 border-blue-400 text-blue-900"
        : "bg-purple-200 border-purple-400 text-purple-900";
    }
    if (card.isSelected) {
      // Currently selected cards
      return card.type === "rule"
        ? "bg-blue-100 border-blue-300 text-blue-800"
        : "bg-purple-100 border-purple-300 text-purple-800";
    }
    // Unselected cards
    return "bg-gray-200 hover:bg-gray-300 border-gray-300 cursor-pointer";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          🧠 Grammar Memory Match
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Match grammar rules with their examples!
        </p>

        {/* Game Stats */}
        <div className="flex justify-center space-x-6 text-sm">
          <div className="text-center">
            <div className="font-bold text-lg text-blue-600">
              {formatTime(timer)}
            </div>
            <div className="text-gray-500">Time</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-green-600">
              {matches.length}
            </div>
            <div className="text-gray-500">Matches</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-orange-600">{moves}</div>
            <div className="text-gray-500">Moves</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-red-600">
              {wrongConnections}
            </div>
            <div className="text-gray-500">Wrong</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">
              {selectedCards.length}/{maxConnections}
            </div>
            <div className="text-gray-500">Selected</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">
              {exercise.questions.length}
            </div>
            <div className="text-gray-500">Total Pairs</div>
          </div>
        </div>
      </div>

      {/* Game Instructions */}
      {!gameStarted && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-200 dark:border-blue-700">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            How to Play:
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>
              • Click on cards to select and connect related grammar content
            </li>
            <li>• All cards are visible - no flipping required!</li>
            <li>
              • Select {maxConnections} cards that belong together to make a
              connection
            </li>
            <li>• Wrong connections are counted and affect your score</li>
            <li>• Completed matches are marked automatically</li>
            <li>• Connect all related cards to finish the game!</li>
          </ul>
        </div>
      )}

      {/* Memory Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`
              aspect-square p-2 rounded-lg border-2 transition-all duration-300
              flex items-center justify-center text-center text-xs font-medium cursor-pointer
              ${getCardColor(card)}
              ${
                selectedCards.includes(card.id)
                  ? "transform scale-105 ring-2 ring-blue-400"
                  : ""
              }
            `}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="w-full h-full flex items-center justify-center p-1">
              <span className="text-center text-slate-900">
                {card.content}
                {card.isAnswered && (
                  <div className="mt-1 text-xs opacity-75">✓ Completed</div>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Question Mode - REMOVED: No question display needed */}

      {/* Completed Matches Summary */}
      {matchedPairs.length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
            📚 Completed Matches (
            {matchedPairs.filter((p) => p.isCompleted).length}/
            {matchedPairs.length}):
          </h3>
          <div className="space-y-2">
            {matchedPairs
              .filter((p) => p.isCompleted)
              .map((pair, index) => (
                <div
                  key={pair.pairId}
                  className="p-2 bg-white dark:bg-gray-800 rounded border text-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <strong>Rule:</strong> {pair.rule}
                    </div>
                    <div>
                      <strong>Example:</strong> {pair.example}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Game Completion */}
      {gameCompleted && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
            Congratulations!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            You matched all pairs in {formatTime(timer)} with {moves} moves and{" "}
            {wrongConnections} wrong connections!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="font-bold text-2xl text-green-600">
                {Math.max(0, 1000 - moves * 10 - wrongConnections * 20 - timer)}
              </div>
              <div className="text-sm text-gray-500">Final Score</div>
            </div>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4">
        <Button onClick={resetGame} variant="outline" className="px-6 py-2">
          Reset Game
        </Button>
        <Button
          onClick={() =>
            onComplete({
              matches: matches.length,
              totalPairs: exercise.questions.length,
              moves,
              timeSeconds: timer,
              score: Math.max(0, 1000 - moves * 10 - timer),
              completed: gameCompleted,
            })
          }
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Finish Game
        </Button>
      </div>
    </div>
  );
};

export default GrammarMemoryMatchGame;

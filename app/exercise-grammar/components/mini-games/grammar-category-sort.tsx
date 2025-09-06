"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/grammars/grammars_type";

interface CategoryItem {
  id: string;
  text: string;
  category: string;
  currentCategory: string | null;
}

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  items: CategoryItem[];
}

interface GrammarCategorySortGameProps {
  exercise: Exercise;
  onComplete: (results: any) => void;
  onQuestionAnswer: (id: number, answer: string) => void;
  selectedAnswers: { [key: number]: string };
}

const GrammarCategorySortGame: React.FC<GrammarCategorySortGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [unsortedItems, setUnsortedItems] = useState<CategoryItem[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctPlacements, setCorrectPlacements] = useState(0);

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

  const initializeGame = () => {
    const grammarCategories: Category[] = [
      {
        id: "nouns",
        name: "Nouns",
        description: "People, places, things, ideas",
        color: "bg-blue-100 border-blue-300 text-blue-800",
        items: [],
      },
      {
        id: "verbs",
        name: "Verbs",
        description: "Action words, state of being",
        color: "bg-green-100 border-green-300 text-green-800",
        items: [],
      },
      {
        id: "adjectives",
        name: "Adjectives",
        description: "Describing words",
        color: "bg-purple-100 border-purple-300 text-purple-800",
        items: [],
      },
      {
        id: "adverbs",
        name: "Adverbs",
        description: "Modify verbs, adjectives",
        color: "bg-orange-100 border-orange-300 text-orange-800",
        items: [],
      },
      {
        id: "prepositions",
        name: "Prepositions",
        description: "Show relationships",
        color: "bg-pink-100 border-pink-300 text-pink-800",
        items: [],
      },
    ];

    const items: CategoryItem[] = [];

    // Create items from exercise questions
    exercise.questions.forEach((question, index) => {
      if (question.options) {
        question.options.forEach((option, optionIndex) => {
          const words = option.split(" ").filter((word) => word.length > 2);

          words.forEach((word, wordIndex) => {
            const category = categorizeWord(word);
            items.push({
              id: `item-${index}-${optionIndex}-${wordIndex}`,
              text: word,
              category,
              currentCategory: null,
            });
          });
        });
      }
    });

    // Add some predefined examples to ensure good variety
    const predefinedItems = [
      { text: "beautiful", category: "adjectives" },
      { text: "quickly", category: "adverbs" },
      { text: "school", category: "nouns" },
      { text: "running", category: "verbs" },
      { text: "under", category: "prepositions" },
      { text: "happy", category: "adjectives" },
      { text: "slowly", category: "adverbs" },
      { text: "teacher", category: "nouns" },
      { text: "jump", category: "verbs" },
      { text: "between", category: "prepositions" },
    ];

    predefinedItems.forEach((item, index) => {
      items.push({
        id: `predefined-${index}`,
        text: item.text,
        category: item.category,
        currentCategory: null,
      });
    });

    // Remove duplicates and shuffle
    const uniqueItems = Array.from(
      new Map(items.map((item) => [item.text, item])).values()
    );
    const shuffledItems = uniqueItems
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);

    setCategories(grammarCategories);
    setUnsortedItems(shuffledItems);
  };

  const categorizeWord = (word: string): string => {
    const lowerWord = word.toLowerCase();

    // Simple categorization rules
    if (lowerWord.endsWith("ly")) return "adverbs";
    if (lowerWord.endsWith("ing") || lowerWord.endsWith("ed")) return "verbs";
    if (
      [
        "on",
        "in",
        "at",
        "by",
        "for",
        "with",
        "under",
        "over",
        "between",
        "through",
      ].includes(lowerWord)
    ) {
      return "prepositions";
    }
    if (
      [
        "big",
        "small",
        "good",
        "bad",
        "beautiful",
        "ugly",
        "fast",
        "slow",
        "happy",
        "sad",
      ].includes(lowerWord)
    ) {
      return "adjectives";
    }
    if (
      [
        "run",
        "walk",
        "eat",
        "sleep",
        "think",
        "go",
        "come",
        "see",
        "hear",
        "feel",
      ].includes(lowerWord)
    ) {
      return "verbs";
    }

    // Default to nouns
    return "nouns";
  };

  const handleDragStart = (itemId: string) => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    setDraggedItem(itemId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (categoryId: string) => {
    if (!draggedItem) return;

    const item =
      unsortedItems.find((i) => i.id === draggedItem) ||
      categories.flatMap((c) => c.items).find((i) => i.id === draggedItem);

    if (!item) return;

    // Remove item from its current location
    setUnsortedItems((prev) => prev.filter((i) => i.id !== draggedItem));
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        items: cat.items.filter((i) => i.id !== draggedItem),
      }))
    );

    // Add item to new category
    const updatedItem = { ...item, currentCategory: categoryId };
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: [...cat.items, updatedItem] }
          : cat
      )
    );

    setDraggedItem(null);
  };

  const handleDropUnsorted = () => {
    if (!draggedItem) return;

    const item = categories
      .flatMap((c) => c.items)
      .find((i) => i.id === draggedItem);
    if (!item) return;

    // Remove from category
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        items: cat.items.filter((i) => i.id !== draggedItem),
      }))
    );

    // Add back to unsorted
    const updatedItem = { ...item, currentCategory: null };
    setUnsortedItems((prev) => [...prev, updatedItem]);

    setDraggedItem(null);
  };

  const checkAnswers = () => {
    let correct = 0;
    let total = 0;

    categories.forEach((category) => {
      category.items.forEach((item) => {
        total++;
        if (item.category === category.id) {
          correct++;
        }
      });
    });

    setCorrectPlacements(correct);
    const accuracy = total > 0 ? (correct / total) * 100 : 0;
    const finalScore = Math.round(accuracy * 10) + Math.max(0, 500 - timer);
    setScore(finalScore);

    if (accuracy >= 80) {
      setGameCompleted(true);
      setTimeout(() => {
        onComplete({
          score: finalScore,
          accuracy: Math.round(accuracy),
          correctPlacements: correct,
          totalItems: total,
          timeSeconds: timer,
        });
      }, 2000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          📋 Grammar Category Sort
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Drag words into their correct grammar categories!
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
              {correctPlacements}
            </div>
            <div className="text-gray-500">Correct</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-orange-600">
              {unsortedItems.length}
            </div>
            <div className="text-gray-500">Unsorted</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">{score}</div>
            <div className="text-gray-500">Score</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      {!gameStarted && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-200 dark:border-blue-700">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
            How to Play:
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>
              • Drag words from the unsorted area into the correct grammar
              categories
            </li>
            <li>
              • Each category has different types of words - read the
              descriptions
            </li>
            <li>
              • You can move words between categories if you change your mind
            </li>
            <li>• Aim for 80% accuracy to complete the game!</li>
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Unsorted Items */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            📦 Words to Sort ({unsortedItems.length})
          </h3>
          <div
            className="min-h-32 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"
            onDragOver={handleDragOver}
            onDrop={handleDropUnsorted}
          >
            <div className="flex flex-wrap gap-2">
              {unsortedItems.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item.id)}
                  className={`
                    px-3 py-2 bg-white dark:bg-gray-600 rounded-lg border cursor-move
                    shadow-sm hover:shadow-md transition-all duration-200
                    ${
                      draggedItem === item.id
                        ? "opacity-50 transform scale-95"
                        : ""
                    }
                  `}
                >
                  {item.text}
                </div>
              ))}
              {unsortedItems.length === 0 && (
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  All words have been sorted! 🎉
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            🗂️ Grammar Categories
          </h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-4 rounded-lg border-2 border-dashed min-h-24 ${category.color}`}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(category.id)}
              >
                <div className="font-semibold mb-1">{category.name}</div>
                <div className="text-xs mb-3 opacity-75">
                  {category.description}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={() => handleDragStart(item.id)}
                      className={`
                        px-2 py-1 bg-white dark:bg-gray-600 rounded text-sm cursor-move
                        shadow-sm hover:shadow-md transition-all duration-200
                        ${
                          item.category === category.id
                            ? "ring-2 ring-green-400"
                            : "ring-2 ring-red-400"
                        }
                        ${
                          draggedItem === item.id
                            ? "opacity-50 transform scale-95"
                            : ""
                        }
                      `}
                    >
                      {item.text}
                      {item.category === category.id ? " ✓" : " ✗"}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Game Completion */}
      {gameCompleted && (
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
            Excellent Categorization!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            You've successfully sorted the grammar categories!
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="font-bold text-2xl text-green-600">{score}</div>
              <div className="text-sm text-gray-500">Final Score</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-blue-600">
                {Math.round(
                  (correctPlacements /
                    categories.reduce(
                      (sum, cat) => sum + cat.items.length,
                      0
                    )) *
                    100
                )}
                %
              </div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-purple-600">
                {correctPlacements}
              </div>
              <div className="text-sm text-gray-500">Correct Items</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-orange-600">
                {formatTime(timer)}
              </div>
              <div className="text-sm text-gray-500">Time</div>
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
          onClick={checkAnswers}
          disabled={gameCompleted || unsortedItems.length > 0}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700"
        >
          {unsortedItems.length > 0 ? "Sort All Words First" : "Check Answers"}
        </Button>
        <Button
          onClick={() =>
            onComplete({
              score,
              accuracy: Math.round(
                (correctPlacements /
                  categories.reduce((sum, cat) => sum + cat.items.length, 0)) *
                  100
              ),
              correctPlacements,
              totalItems: categories.reduce(
                (sum, cat) => sum + cat.items.length,
                0
              ),
              timeSeconds: timer,
            })
          }
          className="px-6 py-2 bg-green-600 hover:bg-green-700"
        >
          Finish Game
        </Button>
      </div>

      {/* Legend */}
      <div className="mt-4 text-center text-xs text-gray-500">
        💡 Green checkmark = correct category, Red X = wrong category
      </div>
    </div>
  );
};

export default GrammarCategorySortGame;

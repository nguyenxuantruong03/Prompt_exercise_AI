"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Exercise } from "@/types/grammars/grammars_type";

interface GrammarGeneratorGameProps {
  exercise: Exercise;
  onComplete: (results: any) => void;
  onQuestionAnswer: (id: number, answer: string) => void;
  selectedAnswers: { [key: number]: string };
}

interface GeneratedSentence {
  id: number;
  sentence: string;
  vocabulary: string[];
  grammarRule: string;
  isCorrect: boolean;
  userGenerated: boolean;
}

const GrammarGeneratorGame: React.FC<GrammarGeneratorGameProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
}) => {
  const [vocabularyWords, setVocabularyWords] = useState<string[]>([]);
  const [grammarRule, setGrammarRule] = useState("");
  const [currentVocabInput, setCurrentVocabInput] = useState("");
  const [generatedSentences, setGeneratedSentences] = useState<
    GeneratedSentence[]
  >([]);
  const [userSentence, setUserSentence] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [feedback, setFeedback] = useState<{
    sentence: string;
    isCorrect: boolean;
    explanation: string;
  } | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted]);

  useEffect(() => {
    // Pre-populate with exercise data if available
    if (exercise && exercise.questions.length > 0) {
      const firstQuestion = exercise.questions[0];
      if (firstQuestion.question) {
        setGrammarRule(firstQuestion.question);
      }

      // Extract vocabulary from options if available
      if (firstQuestion.options) {
        const words = firstQuestion.options.flatMap((option) =>
          option.split(" ").filter((word) => word.length > 2)
        );
        const uniqueWords = Array.from(new Set(words)).slice(0, 8);
        setVocabularyWords(uniqueWords);
      }
    }
  }, [exercise]);

  const addVocabularyWord = () => {
    if (
      currentVocabInput.trim() &&
      !vocabularyWords.includes(currentVocabInput.trim())
    ) {
      setVocabularyWords((prev) => [...prev, currentVocabInput.trim()]);
      setCurrentVocabInput("");
    }
  };

  const removeVocabularyWord = (word: string) => {
    setVocabularyWords((prev) => prev.filter((w) => w !== word));
  };

  const generateAISentences = async () => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    try {
      const response = await fetch("/api/grammar/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vocabulary: vocabularyWords,
          grammarRule: grammarRule,
          count: 3,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const sentences = data.sentences || [];

        const aiSentences: GeneratedSentence[] = sentences.map(
          (sentence: string, index: number) => ({
            id: generatedSentences.length + index,
            sentence,
            vocabulary: vocabularyWords,
            grammarRule,
            isCorrect: true, // AI generated sentences are assumed correct
            userGenerated: false,
          })
        );

        setGeneratedSentences((prev) => [...prev, ...aiSentences]);
      }
    } catch (error) {
      console.error("Error generating AI sentences:", error);
      // Fallback: Generate simple sentences
      generateFallbackSentences();
    }
  };

  const generateFallbackSentences = () => {
    const templates = [
      "The {noun} {verb} {adverb}.",
      "I {verb} {noun} every day.",
      "{noun} is {adjective} and {adjective}.",
      "We {verb} to {noun} {timeExpression}.",
    ];

    const fallbackSentences: GeneratedSentence[] = [];

    for (let i = 0; i < 3; i++) {
      const template = templates[i % templates.length];
      let sentence = template;

      // Simple word replacement
      vocabularyWords.forEach((word) => {
        if (sentence.includes("{noun}")) {
          sentence = sentence.replace("{noun}", word);
        } else if (sentence.includes("{verb}")) {
          sentence = sentence.replace("{verb}", word);
        } else if (sentence.includes("{adjective}")) {
          sentence = sentence.replace("{adjective}", word);
        } else if (sentence.includes("{adverb}")) {
          sentence = sentence.replace("{adverb}", word);
        }
      });

      // Replace remaining placeholders
      sentence = sentence.replace(
        /{[^}]+}/g,
        vocabularyWords[i % vocabularyWords.length] || "something"
      );
      sentence = sentence.replace("{timeExpression}", "today");

      fallbackSentences.push({
        id: generatedSentences.length + i,
        sentence,
        vocabulary: vocabularyWords,
        grammarRule,
        isCorrect: true,
        userGenerated: false,
      });
    }

    setGeneratedSentences((prev) => [...prev, ...fallbackSentences]);
  };

  const submitUserSentence = async () => {
    if (!userSentence.trim()) return;

    const newSentence: GeneratedSentence = {
      id: generatedSentences.length,
      sentence: userSentence,
      vocabulary: vocabularyWords,
      grammarRule,
      isCorrect: false, // Will be checked
      userGenerated: true,
    };

    // Check if user sentence follows grammar rule and uses vocabulary
    const isValid = await checkSentenceValidity(userSentence);
    newSentence.isCorrect = isValid;

    setGeneratedSentences((prev) => [...prev, newSentence]);

    if (isValid) {
      setScore((prev) => prev + 50); // Bonus points for user-generated sentences
      setFeedback({
        sentence: userSentence,
        isCorrect: true,
        explanation:
          "Great! Your sentence follows the grammar rule and uses the vocabulary correctly.",
      });
    } else {
      setFeedback({
        sentence: userSentence,
        isCorrect: false,
        explanation:
          "This sentence could be improved. Make sure it follows the grammar rule and uses the provided vocabulary.",
      });
    }

    setUserSentence("");
    setTimeout(() => setFeedback(null), 5000);
  };

  const checkSentenceValidity = async (sentence: string): Promise<boolean> => {
    // Simple validation: check if sentence uses vocabulary words and is not empty
    const usedVocab = vocabularyWords.filter((word) =>
      sentence.toLowerCase().includes(word.toLowerCase())
    );

    return sentence.length > 10 && usedVocab.length >= 1;
  };

  const calculateScore = () => {
    const aiSentencePoints =
      generatedSentences.filter((s) => !s.userGenerated).length * 20;
    const userSentencePoints =
      generatedSentences.filter((s) => s.userGenerated && s.isCorrect).length *
      50;
    const timeBonus = Math.max(0, 300 - timer);

    return aiSentencePoints + userSentencePoints + timeBonus;
  };

  const finishGame = () => {
    const finalScore = calculateScore();
    setScore(finalScore);

    const results = {
      score: finalScore,
      aiSentences: generatedSentences.filter((s) => !s.userGenerated).length,
      userSentences: generatedSentences.filter((s) => s.userGenerated).length,
      correctUserSentences: generatedSentences.filter(
        (s) => s.userGenerated && s.isCorrect
      ).length,
      vocabularyUsed: vocabularyWords.length,
      grammarRule,
      timeSeconds: timer,
    };

    onComplete(results);
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
          🎯 Grammar Generator
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create sentences using vocabulary words and grammar rules!
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
              {vocabularyWords.length}
            </div>
            <div className="text-gray-500">Vocabulary</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-purple-600">
              {generatedSentences.length}
            </div>
            <div className="text-gray-500">Sentences</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-orange-600">
              {score || calculateScore()}
            </div>
            <div className="text-gray-500">Score</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Setup Panel */}
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
              Setup Your Grammar Game
            </h3>

            {/* Grammar Rule Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Grammar Rule/Tense:
              </label>
              <Input
                value={grammarRule}
                onChange={(e) => setGrammarRule(e.target.value)}
                placeholder="e.g., Present Simple, Past Continuous..."
                className="w-full"
              />
            </div>

            {/* Vocabulary Words */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Add Vocabulary Words:
              </label>
              <div className="flex space-x-2 mb-2">
                <Input
                  value={currentVocabInput}
                  onChange={(e) => setCurrentVocabInput(e.target.value)}
                  placeholder="Enter a word..."
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addVocabularyWord();
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={addVocabularyWord} className="px-4">
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {vocabularyWords.map((word, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                  >
                    {word}
                    <button
                      onClick={() => removeVocabularyWord(word)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Generate AI Sentences */}
            <Button
              onClick={generateAISentences}
              disabled={vocabularyWords.length === 0 || !grammarRule.trim()}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              🤖 Generate AI Sentences
            </Button>
          </div>

          {/* User Sentence Creation */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
              Create Your Own Sentence
            </h3>

            <div className="space-y-3">
              <textarea
                value={userSentence}
                onChange={(e) => setUserSentence(e.target.value)}
                placeholder={`Create a sentence using "${grammarRule}" and vocabulary: ${vocabularyWords.join(
                  ", "
                )}`}
                className="w-full h-20 p-3 border border-purple-200 dark:border-purple-600 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />

              <Button
                onClick={submitUserSentence}
                disabled={!userSentence.trim()}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                ✍️ Submit My Sentence
              </Button>
            </div>
          </div>
        </div>

        {/* Generated Sentences Display */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 dark:text-white">
            📝 Generated Sentences ({generatedSentences.length})
          </h3>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {generatedSentences.map((sentence) => (
              <div
                key={sentence.id}
                className={`p-4 rounded-lg border ${
                  sentence.userGenerated
                    ? sentence.isCorrect
                      ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 dark:text-white mb-1">
                      "{sentence.sentence}"
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                      <span>{sentence.userGenerated ? "👤 You" : "🤖 AI"}</span>
                      {sentence.isCorrect && (
                        <span className="text-green-600">✓ Correct</span>
                      )}
                      {sentence.userGenerated && !sentence.isCorrect && (
                        <span className="text-red-600">
                          ✗ Needs improvement
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 ml-2">
                    {sentence.userGenerated && sentence.isCorrect
                      ? "+50"
                      : "+20"}
                  </div>
                </div>
              </div>
            ))}

            {generatedSentences.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <div className="text-4xl mb-2">📝</div>
                <p>No sentences generated yet.</p>
                <p className="text-sm">
                  Add vocabulary words and click "Generate AI Sentences"!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`mt-4 p-4 rounded-lg border ${
            feedback.isCorrect
              ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
              : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
          }`}
        >
          <div className="flex items-start space-x-2">
            <div className="text-2xl">{feedback.isCorrect ? "🎉" : "💡"}</div>
            <div>
              <p
                className={`font-medium ${
                  feedback.isCorrect
                    ? "text-green-800 dark:text-green-200"
                    : "text-yellow-800 dark:text-yellow-200"
                }`}
              >
                Your sentence: "{feedback.sentence}"
              </p>
              <p
                className={`text-sm ${
                  feedback.isCorrect
                    ? "text-green-700 dark:text-green-300"
                    : "text-yellow-700 dark:text-yellow-300"
                }`}
              >
                {feedback.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Game Instructions */}
      {!gameStarted && (
        <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            How to Play:
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              • Set up your grammar rule (e.g., "Present Simple", "Past Tense")
            </li>
            <li>• Add vocabulary words you want to practice with</li>
            <li>• Generate AI sentences to see examples</li>
            <li>
              • Create your own sentences using the vocabulary and grammar rule
            </li>
            <li>
              • Earn points: AI sentences (+20), Your correct sentences (+50)
            </li>
          </ul>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <Button
          onClick={() => {
            setGeneratedSentences([]);
            setScore(0);
            setTimer(0);
            setGameStarted(false);
          }}
          variant="outline"
          className="px-6 py-2"
        >
          Reset Game
        </Button>
        <Button
          onClick={finishGame}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700"
        >
          Finish Game
        </Button>
      </div>
    </div>
  );
};

export default GrammarGeneratorGame;

"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function TestMiniGamesPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testImageGeneration = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt:
            "A student studying grammar at a desk with books, educational illustration style",
          grammarTopic: "Present Simple Tense",
          proficiencyLevel: "B1",
          aspectRatio: "square",
          style: "educational",
        }),
      });

      const data = await response.json();
      setResult(data);

      if (data.success) {
        toast.success("✅ Image generated successfully!");
      } else {
        toast.error("❌ Image generation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error occurred");
      setResult({ error: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  const testSpeedChallenge = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: "Present Simple Tense",
          action: "generate",
          exerciseType: "speed-challenge",
          proficiencyLevel: "B1",
          numExercises: 3,
        }),
      });

      const data = await response.json();
      setResult(data);

      if (data.exercise) {
        toast.success("✅ Speed Challenge generated!");
      } else {
        toast.error("❌ Generation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error occurred");
      setResult({ error: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  const testWordArrangement = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: "Present Simple Tense",
          action: "generate",
          exerciseType: "word-arrangement-race",
          proficiencyLevel: "B1",
          numExercises: 3,
        }),
      });

      const data = await response.json();
      setResult(data);

      if (data.exercise) {
        toast.success("✅ Word Arrangement generated!");
      } else {
        toast.error("❌ Generation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error occurred");
      setResult({ error: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        🧪 Mini Games Test Page
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Button
          onClick={testImageGeneration}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white p-6 h-auto flex flex-col items-center space-y-2"
        >
          <span className="text-2xl">🖼️</span>
          <span>Test Image Generation</span>
          <span className="text-sm opacity-80">FAL AI API</span>
        </Button>

        <Button
          onClick={testSpeedChallenge}
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-600 text-white p-6 h-auto flex flex-col items-center space-y-2"
        >
          <span className="text-2xl">⚡</span>
          <span>Test Speed Challenge</span>
          <span className="text-sm opacity-80">GROQ API</span>
        </Button>

        <Button
          onClick={testWordArrangement}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white p-6 h-auto flex flex-col items-center space-y-2"
        >
          <span className="text-2xl">🏃‍♂️</span>
          <span>Test Word Race</span>
          <span className="text-sm opacity-80">GROQ API</span>
        </Button>
      </div>

      {loading && (
        <div className="text-center mb-6">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-blue-500 rounded-full mb-2"></div>
          <div className="text-gray-600 dark:text-gray-400">Testing API...</div>
        </div>
      )}

      {result && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Test Result:
          </h3>

          {result.error ? (
            <div className="text-red-600 dark:text-red-400">
              ❌ Error: {result.error}
              {result.details && (
                <div className="text-sm mt-2">Details: {result.details}</div>
              )}
              {result.fallbackImage && (
                <div className="mt-4">
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    Fallback Image:
                  </div>
                  <img
                    src={result.fallbackImage}
                    alt="Fallback"
                    className="max-w-sm rounded"
                  />
                </div>
              )}
            </div>
          ) : result.success && result.imageUrl ? (
            <div>
              <div className="text-green-600 dark:text-green-400 mb-4">
                ✅ Image generated successfully! (Key {result.apiKeyUsed})
              </div>
              <img
                src={result.imageUrl}
                alt="Generated"
                className="max-w-md rounded-lg shadow-lg mb-4"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Prompt:</strong> {result.prompt}
              </div>
            </div>
          ) : result.exercise ? (
            <div>
              <div className="text-green-600 dark:text-green-400 mb-4">
                ✅ Exercise generated successfully!
              </div>
              <div className="text-lg font-semibold mb-2">
                {result.exercise.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Type: {result.exercise.type} | Questions:{" "}
                {result.exercise.questions?.length || 0}
              </div>

              {result.exercise.questions &&
                result.exercise.questions.length > 0 && (
                  <div className="space-y-4">
                    {result.exercise.questions
                      .slice(0, 2)
                      .map((q: any, index: number) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-800 p-4 rounded-lg border"
                        >
                          <div className="font-medium mb-2">
                            Question {index + 1}:
                          </div>
                          <div className="text-gray-700 dark:text-gray-300 mb-2">
                            {q.question}
                          </div>

                          {q.options && (
                            <div className="space-y-1 mb-2">
                              {q.options.map((opt: string, i: number) => (
                                <div
                                  key={i}
                                  className={`text-sm ${
                                    i === q.correct
                                      ? "text-green-600 font-medium"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {String.fromCharCode(65 + i)}. {opt}{" "}
                                  {i === q.correct ? "✓" : ""}
                                </div>
                              ))}
                            </div>
                          )}

                          {q.speedChallengeData && (
                            <div className="text-xs bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded">
                              ⚡ Speed: {q.speedChallengeData.timeLimit}s |
                              Points: {q.speedChallengeData.points} |
                              Difficulty: {q.speedChallengeData.difficulty}
                            </div>
                          )}

                          {q.wordArrangementData && (
                            <div className="text-xs bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                              🏃‍♂️ Words:{" "}
                              {q.wordArrangementData.scrambledWords?.join(", ")}{" "}
                              → {q.wordArrangementData.correctOrder?.join(" ")}
                            </div>
                          )}
                        </div>
                      ))}

                    {result.exercise.questions.length > 2 && (
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        ... and {result.exercise.questions.length - 2} more
                        questions
                      </div>
                    )}
                  </div>
                )}
            </div>
          ) : (
            <pre className="text-xs overflow-auto max-h-96 bg-gray-100 dark:bg-gray-800 p-4 rounded">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      )}

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-400">
          🎮 Available Mini Games
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="font-medium">⚡ Speed Challenge</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Quick Q&A with time pressure
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="font-medium">🏃‍♂️ Word Race</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Drag words to build sentences
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="font-medium">🖼️ Image Quiz</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI images + grammar questions
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="font-medium">🧠 Memory Match</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 opacity-50">
              Coming soon...
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="font-medium">🧩 Grammar Puzzles</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 opacity-50">
              Coming soon...
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-3 rounded border">
            <div className="font-medium">🔥 Rapid Fire</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 opacity-50">
              Coming soon...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

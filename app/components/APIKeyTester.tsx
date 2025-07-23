"use client";

import { useState } from "react";

export default function APIKeyTester() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState("");

  const testAPIKey = async () => {
    setTesting(true);
    setResult("");

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: "I have went to the store",
          action: "fix",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(
          "✅ Free AI is working! Your grammar exercise app is ready to use with Hugging Face."
        );
      } else {
        // Handle specific error codes
        if (response.status === 429) {
          setResult(`❌ Rate limit exceeded (Error 429). This means:
          
• You've hit your API usage quota
• Try again in a few minutes
• Check your OpenAI billing settings at platform.openai.com
• Consider upgrading your plan if you're on free tier`);
        } else if (response.status === 401) {
          setResult(`❌ Invalid API Key (Error 401). Please check:
          
• Your API key is correctly set in .env.local
• The key hasn't been revoked
• There are no extra spaces in the key`);
        } else if (response.status === 403) {
          setResult(`❌ Access forbidden (Error 403). This might mean:
          
• Your API key doesn't have the required permissions
• Your account needs billing setup`);
        } else {
          setResult(
            `❌ Error ${response.status}: ${data.error || "Unknown error"}`
          );
        }
      }
    } catch (error) {
      setResult(`❌ Network error: ${error}`);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Test Free AI
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Testing with <strong>Hugging Face</strong> - completely free, no API key
        required!
      </p>

      <button
        onClick={testAPIKey}
        disabled={testing}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {testing ? (
          <>
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            Testing Free AI...
          </>
        ) : (
          "Test Free AI Grammar"
        )}
      </button>

      {result && (
        <div className="mt-4 p-4 rounded-lg text-sm">
          <div
            className={
              result.includes("✅")
                ? "text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-300"
                : "text-red-700 bg-red-50 dark:bg-red-900/20 dark:text-red-300"
            }
          >
            <pre className="whitespace-pre-wrap font-sans">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

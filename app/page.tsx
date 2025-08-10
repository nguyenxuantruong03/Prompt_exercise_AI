import Image from "next/image";
import APIKeyTester from "./components/APIKeyTester";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          AI Grammar Exercise Generator
        </h1>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Welcome to your AI-powered grammar learning tool!
          </p>
          <p className="text-sm text-green-600 dark:text-green-400 mb-4">
            ✅ Now using <strong>FREE AI</strong> - No billing required!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="/exercise-grammar"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Grammar Exercises
            </a>
            <a
              href="/exercise-vocab"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Vocabulary Exercises
            </a>
          </div>
        </div>

        <APIKeyTester />

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            🆓 Free AI Setup (No Billing Required!)
          </h2>

          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
              ✅ Ready to Use!
            </h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              Your app is now configured to use <strong>Hugging Face</strong>{" "}
              for completely free AI grammar assistance. No API keys or billing
              required!
            </p>
          </div>

          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <p className="font-semibold">Test the Free AI</p>
                <p>
                  Click Test OpenAI API Key above to test the free grammar
                  functionality
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <p className="font-semibold">Start Using Grammar Exercises</p>
                <p>
                  Go to the Grammar Exercises page and start generating
                  exercises with free AI
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <p className="font-semibold">
                  Optional: Get Better Results (Still Free)
                </p>
                <p>
                  For better AI responses, get a free Groq API key at{" "}
                  <a
                    href="https://console.groq.com/keys"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    console.groq.com/keys
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              🚀 Free AI Options Available:
            </h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>
                <strong>Hugging Face:</strong> Completely free, no registration
                needed (current default)
              </li>
              <li>
                <strong>Groq:</strong> Free tier with faster responses - get
                free API key
              </li>
              <li>
                <strong>Google AI Studio:</strong> Free tier with Gemini - get
                free API key
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { FixResponse } from "@/types/grammars/grammars_type";

interface FixResult {
  fixResult: FixResponse;
}

const FixReuslt: React.FC<FixResult> = ({ fixResult }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Grammar Correction Results
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
          Corrected Text:
        </h3>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200">
            {fixResult.corrected}
          </p>
        </div>
      </div>

      {fixResult.errors && fixResult.errors.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
            Errors Found:
          </h3>
          <div className="space-y-3">
            {fixResult.errors.map((error, index) => (
              <div
                key={index}
                className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <div className="mb-2">
                  <span className="text-red-600 dark:text-red-400 line-through">
                    {error.original}
                  </span>
                  <span className="mx-2">→</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    {error.corrected}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Explanation:</strong> {error.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FixReuslt;

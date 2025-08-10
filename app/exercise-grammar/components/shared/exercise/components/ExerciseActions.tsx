import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface ExerciseActionsProps {
  showResults: boolean;
  checkAnswers: () => void;
  showDownloadOptions: boolean;
  setShowDownloadOptions: Dispatch<SetStateAction<boolean>>;
  calculateAndShowScore?: () => void;
}

const ExerciseActions: React.FC<ExerciseActionsProps> = ({
  showResults,
  checkAnswers,
  showDownloadOptions,
  setShowDownloadOptions,
  calculateAndShowScore,
}) => {
  return (
    <>
      {!showResults && (
        <div className="flex gap-3 items-center">
          <Button
            onClick={checkAnswers}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Check Answers
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">or</span>
            <Button
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
            >
              Download Options
            </Button>
          </div>
        </div>
      )}

      {/* Show download options after results as well */}
      {showResults && (
        <div className="mt-4 space-y-4">
          {/* NEW: Show Score and Analysis Button */}
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Want to see your detailed performance analysis?
            </div>
            {calculateAndShowScore && (
              <Button
                onClick={calculateAndShowScore}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 font-medium flex items-center gap-2 shadow-lg transition-all duration-200"
              >
                <span>📊</span>
                Show Score & Analysis
                <span>🚀</span>
              </Button>
            )}
          </div>

          {/* Download options */}
          <div className="flex gap-3 items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              You can also:
            </div>
            <Button
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
            >
              Download Exercise
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExerciseActions;

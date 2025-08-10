import { Button } from "@/components/ui/button";
import { downloadAsPDF, downloadAsWord } from "@/lib/static/grammars/grammar";
import { Exercise } from "@/types/grammars/grammars_type";

interface DownloadOptionsProps {
  showDownloadOptions: boolean;
  exercise: Exercise;
  selectedAnswers: { [key: number]: number | string };
  showResults: boolean;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  showDownloadOptions,
  exercise,
  selectedAnswers,
  showResults,
}) => {
  if (!showDownloadOptions) return null;

  return (
    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
        Download Exercise
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        Download the exercise to work offline or print it out.{" "}
        {showResults
          ? "Your answers and results are included."
          : "Answer key and explanations are included."}
      </p>
      <div className="flex gap-3">
        <Button
          onClick={() => downloadAsPDF(exercise, selectedAnswers, showResults)}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          Download as PDF/Text
        </Button>
        <Button
          onClick={() => downloadAsWord(exercise, selectedAnswers, showResults)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm6 10a1 1 0 01-1-1V8a1 1 0 112 0v5a1 1 0 01-1 1h-1z"
              clipRule="evenodd"
            />
          </svg>
          Download as Word
        </Button>
      </div>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Downloads include answer key and explanations
      </div>
    </div>
  );
};

export default DownloadOptions;

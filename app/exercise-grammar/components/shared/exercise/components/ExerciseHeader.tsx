import { CEFRLevel } from "@/types/grammars/grammars_type";

interface ExerciseHeaderProps {
  title: string;
  proficiencyLevel: CEFRLevel;
}

const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({
  title,
  proficiencyLevel,
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        {title}
      </h2>

      {/* Grammar Analysis Feature Notice for A1-B2 Users */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H16a1 1 0 110 2h-3.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H4a1 1 0 110-2h3.47l.56-2.243a1 1 0 011.213-.727zM8.53 8l-1 4h2.94l1-4H8.53z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
              🎯 New Feature: Interactive Grammar Analysis
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              <strong>Perfect for {proficiencyLevel} level!</strong> Click the{" "}
              <span className="inline-flex items-center px-2 py-1 text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded mx-1">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H16a1 1 0 110 2h-3.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H4a1 1 0 110-2h3.47l.56-2.243a1 1 0 011.213-.727zM8.53 8l-1 4h2.94l1-4H8.53z"
                    clipRule="evenodd"
                  />
                </svg>
                Analysis
              </span>{" "}
              button next to any question to see detailed sentence breakdown
              with clickable grammar elements. Learn about subjects, verbs,
              objects, articles, and more!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseHeader;

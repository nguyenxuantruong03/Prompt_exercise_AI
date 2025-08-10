import { Button } from "@/components/ui/button";
import { testExercises } from "@/lib/static/grammars/grammar";
import { Dispatch, SetStateAction } from "react";

interface ShowExerciseModalProps {
  selectedLevelInfo: string;
  setShowExerciseModal: Dispatch<SetStateAction<boolean>>;
  setShowLevelModal: Dispatch<SetStateAction<boolean>>;
}

const ShowExerciseModal = ({
  selectedLevelInfo,
  setShowExerciseModal,
  setShowLevelModal,
}: ShowExerciseModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Exercise Recommendations for {selectedLevelInfo} Level
            </h2>
            <Button
              onClick={() => setShowExerciseModal(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </Button>
          </div>

          <div className="space-y-6">
            {/* Test-specific exercises */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* IELTS Exercises */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm mr-2">
                    IELTS
                  </span>
                  Level {selectedLevelInfo} Preparation
                </h3>
                <ul className="space-y-2">
                  {testExercises.ielts[
                    selectedLevelInfo as keyof typeof testExercises.ielts
                  ].map((exercise, index) => (
                    <li
                      key={index}
                      className="text-sm text-blue-700 dark:text-blue-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TOEFL Exercises */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm mr-2">
                    TOEFL
                  </span>
                  Level {selectedLevelInfo} Preparation
                </h3>
                <ul className="space-y-2">
                  {testExercises.toefl[
                    selectedLevelInfo as keyof typeof testExercises.toefl
                  ].map((exercise, index) => (
                    <li
                      key={index}
                      className="text-sm text-green-700 dark:text-green-300 flex items-start"
                    >
                      <span className="text-green-500 mr-2">•</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TOEIC Exercises */}
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm mr-2">
                    TOEIC
                  </span>
                  Level {selectedLevelInfo} Preparation
                </h3>
                <ul className="space-y-2">
                  {testExercises.toeic[
                    selectedLevelInfo as keyof typeof testExercises.toeic
                  ].map((exercise, index) => (
                    <li
                      key={index}
                      className="text-sm text-purple-700 dark:text-purple-300 flex items-start"
                    >
                      <span className="text-purple-500 mr-2">•</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cambridge Exercises */}
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm mr-2">
                    Cambridge
                  </span>
                  Level {selectedLevelInfo} Preparation
                </h3>
                <ul className="space-y-2">
                  {testExercises.cambridge[
                    selectedLevelInfo as keyof typeof testExercises.cambridge
                  ].map((exercise, index) => (
                    <li
                      key={index}
                      className="text-sm text-orange-700 dark:text-orange-300 flex items-start"
                    >
                      <span className="text-orange-500 mr-2">•</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VSTEP Exercises */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm mr-2">
                    VSTEP
                  </span>
                  Level {selectedLevelInfo} Preparation
                </h3>
                <ul className="space-y-2">
                  {testExercises.vstep[
                    selectedLevelInfo as keyof typeof testExercises.vstep
                  ].map((exercise, index) => (
                    <li
                      key={index}
                      className="text-sm text-red-700 dark:text-red-300 flex items-start"
                    >
                      <span className="text-red-500 mr-2">•</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* APTIS Exercises */}
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center">
                  <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm mr-2">
                    APTIS
                  </span>
                  Level {selectedLevelInfo} Preparation
                </h3>
                <ul className="space-y-2">
                  {testExercises.aptis[
                    selectedLevelInfo as keyof typeof testExercises.aptis
                  ].map((exercise, index) => (
                    <li
                      key={index}
                      className="text-sm text-indigo-700 dark:text-indigo-300 flex items-start"
                    >
                      <span className="text-indigo-500 mr-2">•</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* General Tips */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                General Study Tips for {selectedLevelInfo} Level
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  <strong>Study Schedule:</strong> Dedicate at least{" "}
                  {selectedLevelInfo === "A1" || selectedLevelInfo === "A2"
                    ? "1-2 hours daily"
                    : selectedLevelInfo === "B1" || selectedLevelInfo === "B2"
                    ? "2-3 hours daily"
                    : "3-4 hours daily"}{" "}
                  to reach this level effectively.
                </p>
                <p className="mb-2">
                  <strong>Focus Areas:</strong> Balance all four skills
                  (Reading, Writing, Listening, Speaking) with equal attention.
                </p>
                <p>
                  <strong>Time Frame:</strong> Expect{" "}
                  {selectedLevelInfo === "A1"
                    ? "3-6 months"
                    : selectedLevelInfo === "A2"
                    ? "4-8 months"
                    : selectedLevelInfo === "B1"
                    ? "6-12 months"
                    : selectedLevelInfo === "B2"
                    ? "8-15 months"
                    : selectedLevelInfo === "C1"
                    ? "12-24 months"
                    : "18-36 months"}{" "}
                  of consistent study to achieve this level from the previous
                  one.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setShowExerciseModal(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowExerciseModal(false);
                  setShowLevelModal(false);
                  // Level is already set
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Start Practicing with {selectedLevelInfo}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowExerciseModal;

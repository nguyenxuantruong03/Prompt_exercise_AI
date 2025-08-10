import { Button } from "@/components/ui/button";
import { levelEquivalencies } from "@/lib/static/grammars/grammar";
import { Dispatch, SetStateAction } from "react";

interface LevelEquivalencyModalProps {
  selectedLevelInfo: string;
  setShowLevelModal: Dispatch<SetStateAction<boolean>>;
  setShowExerciseModal: Dispatch<SetStateAction<boolean>>;
}

const LevelEquivalencyModal: React.FC<LevelEquivalencyModalProps> = ({
  selectedLevelInfo,
  setShowLevelModal,
  setShowExerciseModal,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              CEFR Level {selectedLevelInfo} -{" "}
              {
                levelEquivalencies[
                  selectedLevelInfo as keyof typeof levelEquivalencies
                ].description
              }
            </h2>
            <Button
              onClick={() => setShowLevelModal(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </Button>
          </div>

          <div className="space-y-6">
            {/* Equivalency Information */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  IELTS Score
                </h3>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-300">
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].ielts
                  }
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  TOEFL Score
                </h3>
                <p className="text-xl font-bold text-green-600 dark:text-green-300">
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].toefl
                  }
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  TOEIC Score
                </h3>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-300">
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].toeic
                  }
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Cambridge
                </h3>
                <p className="text-sm font-bold text-orange-600 dark:text-orange-300">
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].cambridge
                  }
                </p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  VSTEP Score
                </h3>
                <p className="text-xl font-bold text-red-600 dark:text-red-300">
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].vstep
                  }
                </p>
              </div>

              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                  APTIS Level
                </h3>
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].aptis
                  }
                </p>
              </div>
            </div>

            {/* Level Description */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Level Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {
                  levelEquivalencies[
                    selectedLevelInfo as keyof typeof levelEquivalencies
                  ].details
                }
              </p>
            </div>

            {/* Additional Information */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                About CEFR Levels
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                The Common European Framework of Reference for Languages (CEFR)
                is an international standard for describing language ability. It
                describes language ability on a six-point scale, from A1 for
                beginners, up to C2 for those who have mastered the language.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setShowExerciseModal(true)}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
              >
                Learn More
              </Button>
              <Button
                variant="default"
                onClick={() => setShowLevelModal(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowLevelModal(false);
                  // Level is already set by handleLevelClick
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Use {selectedLevelInfo} Level
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelEquivalencyModal;

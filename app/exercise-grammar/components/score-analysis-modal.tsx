import {
  MiniExerciseSuggestionType,
  UserSocerType,
} from "@/types/grammars/grammars_type";

interface ScoreAnalysisModalProps {
  setShowScoreAnalysis: (show: boolean) => void;
  userScore: UserSocerType;
  proficiencyLevel: string;
  miniExerciseSuggestion: MiniExerciseSuggestionType | null;
  setShowMiniExerciseSuggestion: (show: boolean) => void;
  setInputText: (text: string) => void;
  resetExercise: () => void;
}

const ScoreAnalysisModal: React.FC<ScoreAnalysisModalProps> = ({
  setShowScoreAnalysis,
  userScore,
  proficiencyLevel,
  miniExerciseSuggestion,
  setShowMiniExerciseSuggestion,
  setInputText,
  resetExercise,
}) => {
  // NEW: Handle improvement button click from score modal
  const handleShowImprovement = () => {
    if (miniExerciseSuggestion) {
      setShowScoreAnalysis(false); // Close score modal first
      setTimeout(() => {
        setShowMiniExerciseSuggestion(true); // Then show improvement modal
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                📊 Performance Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Your detailed score report and improvement recommendations
              </p>
            </div>
            <button
              onClick={() => setShowScoreAnalysis(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Score Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {userScore.correct}/{userScore.total}
              </div>
              <div className="text-lg text-blue-800 dark:text-blue-200">
                Questions Correct
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg border border-green-200 dark:border-green-700">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                {userScore.percentage}%
              </div>
              <div className="text-lg text-green-800 dark:text-green-200">
                Accuracy Rate
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg border border-purple-200 dark:border-purple-700">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {proficiencyLevel}
              </div>
              <div className="text-lg text-purple-800 dark:text-purple-200">
                Your Level
              </div>
            </div>
          </div>

          {/* Estimated Test Scores */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              🎯 Estimated Test Scores
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                (Based on {userScore.total} questions)
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-center">
                  <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
                    IELTS
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {userScore.estimatedScores.ielts}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Band Score
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">
                    TOEFL
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {userScore.estimatedScores.toefl}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    / 120
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="text-center">
                  <div className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">
                    TOEIC
                  </div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {userScore.estimatedScores.toeic}
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-400">
                    / 990
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="text-center">
                  <div className="text-sm font-semibold text-orange-800 dark:text-orange-200 mb-1">
                    Cambridge
                  </div>
                  <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                    {userScore.estimatedScores.cambridge}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="text-center">
                  <div className="text-sm font-semibold text-red-800 dark:text-red-200 mb-1">
                    VSTEP
                  </div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {userScore.estimatedScores.vstep}
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400">
                    / 10
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Feedback */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              🤖 AI Performance Analysis
            </h3>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {userScore.feedback}
              </p>
            </div>
          </div>

          {/* Weak Areas */}
          {userScore.weakAreas.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                ⚠️ Areas for Improvement
              </h3>
              <div className="flex flex-wrap gap-2">
                {userScore.weakAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm border border-red-200 dark:border-red-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              💡 Learning Recommendations
            </h3>
            <div className="space-y-3">
              {userScore.recommendations.map((recommendation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Score Interpretation */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              📈 Score Interpretation for IELTS (40 questions total):
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>
                <strong>
                  Your performance ({userScore.correct}/{userScore.total}):
                </strong>{" "}
                If this were an IELTS test with 40 questions, you would get
                approximately{" "}
                <strong>
                  {Math.round((userScore.correct / userScore.total) * 40)}{" "}
                  correct answers
                </strong>
                .
              </p>
              <p>
                <strong>Estimated IELTS Band:</strong>{" "}
                {userScore.estimatedScores.ielts} -{" "}
                {userScore.estimatedScores.ielts >= 8.5
                  ? "Excellent! Near-native proficiency"
                  : userScore.estimatedScores.ielts >= 7.0
                  ? "Very good command of English"
                  : userScore.estimatedScores.ielts >= 6.0
                  ? "Competent user with some inaccuracies"
                  : userScore.estimatedScores.ielts >= 5.0
                  ? "Modest user with limited ability"
                  : "Limited user - needs significant improvement"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            {/* NEW: Improvement button - only show if there are mini exercise suggestions */}
            {miniExerciseSuggestion && miniExerciseSuggestion.shouldSuggest && (
              <button
                onClick={handleShowImprovement}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
              >
                <span>🚀</span>
                Get Improvement Plan
              </button>
            )}
            <button
              onClick={() => {
                // Generate practice exercises for weak areas
                if (userScore.weakAreas.length > 0) {
                  setInputText(userScore.weakAreas[0]);
                  setShowScoreAnalysis(false);
                }
              }}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Practice Weak Areas
            </button>
            <button
              onClick={() => setShowScoreAnalysis(false)}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Close
            </button>
            <button
              onClick={() => {
                // Reset for new exercise
                setShowScoreAnalysis(false);
                resetExercise();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Try New Exercise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreAnalysisModal;

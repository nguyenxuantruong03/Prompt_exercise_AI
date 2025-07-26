import { levelEquivalencies } from "@/lib/grammars/grammar";
import { CEFRLevel } from "@/types/grammars/grammars_type";

interface LevelSelectionProps {
  setProficiencyLevel: (level: CEFRLevel) => void;
  setSelectedLevelInfo: (level: CEFRLevel) => void;
  setShowLevelModal: (show: boolean) => void;
  proficiencyLevel: CEFRLevel;
}

const LevelSelection: React.FC<LevelSelectionProps> = ({
  setProficiencyLevel,
  setSelectedLevelInfo,
  setShowLevelModal,
  proficiencyLevel,
}) => {
  const handleLevelClick = (level: CEFRLevel) => {
    setProficiencyLevel(level);
    setSelectedLevelInfo(level);
    setShowLevelModal(true);
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        English Proficiency Level (CEFR):
      </label>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {Object.entries(levelEquivalencies).map(([level, info]) => (
          <button
            key={level}
            onClick={() => handleLevelClick(level as CEFRLevel)}
            className={`p-3 border rounded-lg text-center transition-all hover:shadow-md ${
              proficiencyLevel === level
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
            }`}
          >
            <div className="font-bold text-lg">{level}</div>
            <div className="text-xs opacity-75">{info.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelection;

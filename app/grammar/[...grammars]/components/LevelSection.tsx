import React from "react";
import { GraduationCap } from "lucide-react";

interface LevelSectionProps {
  level: string;
  grammarData: any;
  getProperty: (obj: any, prop: string) => any;
}

const LevelSection: React.FC<LevelSectionProps> = ({
  level,
  grammarData,
  getProperty,
}) => {
  const levelData = getProperty(grammarData, level);

  if (!levelData) return null;

  const getLevelDescription = (level: string) => {
    switch (level) {
      case "A1":
        return "Beginner";
      case "A2":
        return "Elementary";
      case "B1":
        return "Intermediate";
      case "B2":
        return "Upper Intermediate";
      case "C1":
        return "Advanced";
      case "C2":
        return "Proficiency";
      default:
        return "";
    }
  };

  return (
    <section
      id={`level-${level.toLowerCase()}`}
      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <GraduationCap className="h-6 w-6" />
        {level} Level ({getLevelDescription(level)})
      </h2>
      <div className="space-y-4">
        {getProperty(levelData, "definition") && (
          <div className="p-4 bg-white rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold text-gray-800 mb-2">Definition</h3>
            <p className="text-gray-700">
              {getProperty(levelData, "definition")}
            </p>
          </div>
        )}

        {getProperty(levelData, "learningObjectives") &&
          Array.isArray(getProperty(levelData, "learningObjectives")) && (
            <div className="p-4 bg-white rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-gray-800 mb-2">
                Learning Objectives
              </h3>
              <ul className="space-y-2">
                {(getProperty(levelData, "learningObjectives") as string[]).map(
                  (objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

        {getProperty(levelData, "keyConcepts") &&
          typeof getProperty(levelData, "keyConcepts") === "object" && (
            <div className="p-4 bg-white rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-gray-800 mb-2">Key Concepts</h3>
              <div className="space-y-3">
                {Object.entries(
                  getProperty(levelData, "keyConcepts") as Record<string, any>
                ).map(([conceptKey, conceptData]) => (
                  <div key={conceptKey} className="bg-gray-50 rounded p-3">
                    <h4 className="font-medium text-gray-700 capitalize mb-2">
                      {conceptKey.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </h4>
                    {getProperty(conceptData, "concept") && (
                      <p className="text-gray-600 mb-2">
                        {getProperty(conceptData, "concept")}
                      </p>
                    )}
                    {getProperty(conceptData, "patterns") &&
                      Array.isArray(getProperty(conceptData, "patterns")) && (
                        <div className="mb-2">
                          <span className="font-medium text-gray-600">
                            Patterns:{" "}
                          </span>
                          <ul className="mt-1 space-y-1">
                            {(
                              getProperty(conceptData, "patterns") as string[]
                            ).map((pattern, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 ml-4"
                              >
                                • {pattern}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {getProperty(conceptData, "examples") &&
                      Array.isArray(getProperty(conceptData, "examples")) && (
                        <div className="mb-2">
                          <span className="font-medium text-gray-600">
                            Examples:{" "}
                          </span>
                          <ul className="mt-1 space-y-1">
                            {(
                              getProperty(conceptData, "examples") as string[]
                            ).map((example, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 ml-4 italic"
                              >
                                • {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {getProperty(conceptData, "usageNotes") &&
                      Array.isArray(getProperty(conceptData, "usageNotes")) && (
                        <div>
                          <span className="font-medium text-gray-600">
                            Usage Notes:{" "}
                          </span>
                          <ul className="mt-1 space-y-1">
                            {(
                              getProperty(conceptData, "usageNotes") as string[]
                            ).map((note, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-600 ml-4"
                              >
                                • {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          )}

        {getProperty(levelData, "practiceExercises") &&
          Array.isArray(getProperty(levelData, "practiceExercises")) && (
            <div className="p-4 bg-white rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-gray-800 mb-2">
                Practice Exercises
              </h3>
              <div className="grid gap-3">
                {(getProperty(levelData, "practiceExercises") as any[]).map(
                  (exercise, index) => (
                    <div key={index} className="bg-orange-50 rounded p-3">
                      {getProperty(exercise, "type") && (
                        <h4 className="font-medium text-orange-800 mb-1">
                          {getProperty(exercise, "type")}
                        </h4>
                      )}
                      {getProperty(exercise, "instructions") && (
                        <p className="text-gray-700 text-sm mb-2">
                          {getProperty(exercise, "instructions")}
                        </p>
                      )}
                      {getProperty(exercise, "examples") &&
                        Array.isArray(getProperty(exercise, "examples")) && (
                          <ul className="space-y-1">
                            {(
                              getProperty(exercise, "examples") as string[]
                            ).map((example, idx) => (
                              <li key={idx} className="text-sm text-gray-600">
                                • {example}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default LevelSection;

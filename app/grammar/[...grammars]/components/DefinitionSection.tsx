import React from "react";
import { BookOpen } from "lucide-react";

interface DefinitionSectionProps {
  grammarData: any;
  getProperty: (obj: any, prop: string) => any;
}

const DefinitionSection: React.FC<DefinitionSectionProps> = ({
  grammarData,
  getProperty,
}) => {
  // Get the definition data
  const definition =
    getProperty(grammarData, "definition") ||
    getProperty(grammarData, "modalVerbsDefinition") ||
    getProperty(grammarData, "articlesDefinition") ||
    getProperty(grammarData, "causativeFormDefinition") ||
    getProperty(grammarData, "infinitivesDefinition") ||
    getProperty(grammarData, "passiveVoiceDefinition") ||
    getProperty(grammarData, "inversionDefinition") ||
    getProperty(grammarData, "tenseShiftInReportedSpeechDefinition") ||
    getProperty(grammarData, "subjectVerbAgreementDefinition") ||
    getProperty(grammarData, "possessivesDefinition") ||
    getProperty(grammarData, "conjunctionDefinition") ||
    getProperty(grammarData, "comparisonsDefinition") ||
    getProperty(grammarData, "futureInThePastDefinition") ||
    getProperty(grammarData, "equalityComparisonDefinition") ||
    getProperty(grammarData, "quantifiersDefinition") ||
    getProperty(grammarData, "prepositionDefinition") ||
    getProperty(grammarData, "repeatedComparativeDefinition") ||
    getProperty(grammarData, "reflexivePronounsDefinition") ||
    getProperty(grammarData, "reportedQuestionsDefinition") ||
    getProperty(grammarData, "extendedDefinition") ||
    getProperty(grammarData, "academicDefinition");

  if (!definition) return null;

  console.log("Definition data:", definition);

  return (
    <section id="definition" className="bg-blue-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen className="h-6 w-6" />
        Definition
      </h2>
      <div className="space-y-4">
        {/* Check if definition is a string or object */}
        {typeof definition === "string" ? (
          <p className="text-gray-700 leading-relaxed">{definition}</p>
        ) : (
          <>
            {/* Handle concept-based definition structure (modalVerbsDefinition, articlesDefinition, etc.) */}
            {getProperty(definition, "concept") && (
              <div className="p-4 bg-white rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-gray-800 mb-2">Concept</h3>
                <p className="text-gray-700">
                  {getProperty(definition, "concept")}
                </p>
              </div>
            )}

            {getProperty(definition, "importance") && (
              <div className="p-4 bg-white rounded-lg border-l-4 border-green-400">
                <h3 className="font-semibold text-gray-800 mb-2">Importance</h3>
                <p className="text-gray-700">
                  {getProperty(definition, "importance")}
                </p>
              </div>
            )}

            {getProperty(definition, "corePrinciple") && (
              <div className="p-4 bg-white rounded-lg border-l-4 border-purple-400">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Core Principle
                </h3>
                <p className="text-gray-700">
                  {getProperty(definition, "corePrinciple")}
                </p>
              </div>
            )}

            {getProperty(definition, "scope") && (
              <div className="p-4 bg-white rounded-lg border-l-4 border-orange-400">
                <h3 className="font-semibold text-gray-800 mb-2">Scope</h3>
                <p className="text-gray-700">
                  {getProperty(definition, "scope")}
                </p>
              </div>
            )}

            {getProperty(definition, "linguisticBackground") && (
              <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-400">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Linguistic Background
                </h3>
                <p className="text-gray-700">
                  {getProperty(definition, "linguisticBackground")}
                </p>
              </div>
            )}

            {/* Handle standardized definition structure (simple, extended, academic, linguistic, comprehensive) */}
            {getProperty(definition, "simple") && (
              <>
                {/* Simple Definition */}
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Simple Definition
                  </h3>
                  <p className="text-gray-700">
                    {getProperty(definition, "simple")}
                  </p>
                </div>

                {/* Extended Definition */}
                {getProperty(definition, "extended") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-green-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Extended Definition
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "extended")}
                    </p>
                  </div>
                )}

                {/* Academic Definition */}
                {getProperty(definition, "academic") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-purple-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Academic Definition
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "academic")}
                    </p>
                  </div>
                )}

                {/* Linguistic Definition */}
                {getProperty(definition, "linguistic") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-orange-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Linguistic Definition
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "linguistic")}
                    </p>
                  </div>
                )}

                {/* Comprehensive Definition */}
                {getProperty(definition, "comprehensive") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-red-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Comprehensive Definition
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "comprehensive")}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Handle custom definition structure (core_concept, grammatical_status, etc.) */}
            {getProperty(definition, "core_concept") && (
              <>
                {/* Core Concept */}
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Core Concept
                  </h3>
                  <p className="text-gray-700">
                    {getProperty(definition, "core_concept")}
                  </p>
                </div>

                {/* Grammatical Status */}
                {getProperty(definition, "grammatical_status") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-green-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Grammatical Status
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "grammatical_status")}
                    </p>
                  </div>
                )}

                {/* Linguistic Significance */}
                {getProperty(definition, "linguistic_significance") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-purple-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Linguistic Significance
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "linguistic_significance")}
                    </p>
                  </div>
                )}

                {/* Detailed Explanation */}
                {getProperty(definition, "detailed_explanation") && (
                  <div className="p-4 bg-white rounded-lg border-l-4 border-orange-400">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Detailed Explanation
                    </h3>
                    <p className="text-gray-700">
                      {getProperty(definition, "detailed_explanation")}
                    </p>
                  </div>
                )}

                {/* Formation Patterns */}
                {getProperty(definition, "formation_patterns") &&
                  Array.isArray(
                    getProperty(definition, "formation_patterns")
                  ) && (
                    <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-400">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Formation Patterns
                      </h3>
                      <ul className="text-gray-700 space-y-1">
                        {(
                          getProperty(
                            definition,
                            "formation_patterns"
                          ) as string[]
                        ).map((pattern, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span>{pattern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Usage Contexts */}
                {getProperty(definition, "usage_contexts") &&
                  Array.isArray(getProperty(definition, "usage_contexts")) && (
                    <div className="p-4 bg-white rounded-lg border-l-4 border-teal-400">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Usage Contexts
                      </h3>
                      <ul className="text-gray-700 space-y-1">
                        {(
                          getProperty(definition, "usage_contexts") as string[]
                        ).map((context, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-teal-600 font-bold">•</span>
                            <span>{context}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DefinitionSection;

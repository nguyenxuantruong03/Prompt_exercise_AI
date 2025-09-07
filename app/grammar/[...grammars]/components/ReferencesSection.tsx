import React from "react";
import { BookOpen } from "lucide-react";

interface ReferencesSectionProps {
  grammarData: any;
  getProperty: (obj: any, prop: string) => any;
  renderUniversalData: (data: any) => React.ReactNode;
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  grammarData,
  getProperty,
  renderUniversalData,
}) => {
  // Get all reference-related data
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

  // Combine all possible reference sources
  const references =
    getProperty(definition, "references") ||
    getProperty(grammarData, "citations") ||
    getProperty(grammarData, "references");

  if (!references) return null;

  // Determine title based on available data
  const sectionTitle = getProperty(grammarData, "citations")
    ? "Citations"
    : "References";

  return (
    <section
      id="references"
      className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BookOpen className="h-6 w-6" />
        {sectionTitle}
      </h2>
      <div className="space-y-6">
        {/* Handle array of references */}
        {Array.isArray(references) && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📚 Academic {sectionTitle}
            </h3>
            <ol className="space-y-3">
              {references.map((ref, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1 text-gray-700">
                    {typeof ref === "string" ? (
                      ref.includes("http") ? (
                        <a
                          href={ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          {ref}
                        </a>
                      ) : (
                        <span className="italic">{ref}</span>
                      )
                    ) : (
                      <div>{renderUniversalData(ref)}</div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Handle object with categorized references */}
        {typeof references === "object" && !Array.isArray(references) && (
          <div className="space-y-6">
            {Object.entries(references).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  {category === "books" && "📚"}
                  {category === "websites" && "🌐"}
                  {category === "researchPapers" && "📄"}
                  {category === "articles" && "📰"}
                  {category === "journals" && "📖"}
                  {category === "onlineResources" && "💻"}
                  <span className="capitalize">
                    {category.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </span>
                </h3>
                {Array.isArray(items) ? (
                  <ol className="space-y-2 ml-6">
                    {items.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-5 h-5 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <div className="flex-1 text-gray-700">
                          {typeof item === "string" ? (
                            item.includes("http") ? (
                              <a
                                href={item}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline break-all"
                              >
                                {item}
                              </a>
                            ) : (
                              <span className="italic">{item}</span>
                            )
                          ) : (
                            <div>{renderUniversalData(item)}</div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="text-gray-700 ml-6 italic">
                    {renderUniversalData(items)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Handle string reference */}
        {typeof references === "string" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📚 {sectionTitle}
            </h3>
            <p className="text-gray-700 italic">{references}</p>
          </div>
        )}

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            All {sectionTitle.toLowerCase()} are cited for educational purposes.
            Please refer to original sources for complete information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;

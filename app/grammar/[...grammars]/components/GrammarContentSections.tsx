"use client";

import React from "react";
import { BookOpen, Target, FileText } from "lucide-react";
import UniversalDataRenderer from "./UniversalDataRenderer";
import VerbCategoriesRenderer from "./VerbCategoriesRenderer";
import WordListRenderer from "./WordListRenderer";
import CategoricalListRenderer from "./CategoricalListRenderer";

interface GrammarContentSectionsProps {
  grammarData: any;
  grammarKey: string;
  grammarInfo: any;
  getProperty: (obj: any, prop: string) => any;
}

const GrammarContentSections: React.FC<GrammarContentSectionsProps> = ({
  grammarData,
  grammarKey,
  grammarInfo,
  getProperty,
}) => {
  return (
    <div className="space-y-8">
      {/* Definition Section */}
      {(getProperty(grammarData, "definition") ||
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
        getProperty(grammarData, "academicDefinition")) && (
        <section id="definition" className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Definition
          </h2>
          <div className="space-y-4">
            {(() => {
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

              if (typeof definition === "string") {
                // Try special renderers first
                const verbRenderer = (
                  <VerbCategoriesRenderer content={definition} />
                );
                if (verbRenderer) return verbRenderer;

                const wordRenderer = <WordListRenderer content={definition} />;
                if (wordRenderer) return wordRenderer;

                const categoricalRenderer = (
                  <CategoricalListRenderer content={definition} />
                );
                if (categoricalRenderer) return categoricalRenderer;

                return <p className="text-gray-700 leading-relaxed">{definition}</p>;
              }

              return <UniversalDataRenderer data={definition} />;
            })()}
          </div>
        </section>
      )}

      {/* CEFR Levels Section */}
      {getProperty(grammarData, "cefrLevels") && (
        <section id="levels" className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6" />
            CEFR Levels
          </h2>
          <div className="space-y-4">
            <UniversalDataRenderer data={getProperty(grammarData, "cefrLevels")} />
          </div>
        </section>
      )}

      {/* Vocabulary Section */}
      {(getProperty(grammarData, "abstract_nouns_vocab") ||
        getProperty(grammarData, "vocabulary") ||
        getProperty(grammarData, "vocab")) && (
        <section id="vocabulary" className="bg-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Vocabulary
          </h2>
          <div className="space-y-4">
            {getProperty(grammarData, "abstract_nouns_vocab") && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Abstract Nouns Vocabulary
                </h3>
                <UniversalDataRenderer data={getProperty(grammarData, "abstract_nouns_vocab")} />
              </div>
            )}

            {getProperty(grammarData, "vocabulary") && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Vocabulary
                </h3>
                <UniversalDataRenderer data={getProperty(grammarData, "vocabulary")} />
              </div>
            )}

            {getProperty(grammarData, "vocab") && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Terms
                </h3>
                <UniversalDataRenderer data={getProperty(grammarData, "vocab")} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Individual CEFR Level Sections */}
      {["A1", "A2", "B1", "B2", "C1", "C2"].map(
        (level) =>
          getProperty(grammarData, level) && (
            <section
              key={level}
              id={`level-${level.toLowerCase()}`}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="h-6 w-6" />
                {level} Level
              </h2>
              <div className="space-y-4">
                <UniversalDataRenderer data={getProperty(grammarData, level)} />
              </div>
            </section>
          )
      )}

      {/* Theory Section */}
      {getProperty(grammarData, "theory") && (
        <section
          id="theory"
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Theory & Overview
          </h2>
          <div className="space-y-6">
            <UniversalDataRenderer data={getProperty(grammarData, "theory")} />

            {getProperty(getProperty(grammarData, "theory"), "generalTheory") && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  General Theory
                </h3>
                <UniversalDataRenderer
                  data={getProperty(
                    getProperty(grammarData, "theory"),
                    "generalTheory"
                  )}
                />
              </div>
            )}

            {getProperty(getProperty(grammarData, "theory"), "usageOverview") && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Usage Overview
                </h3>
                <UniversalDataRenderer
                  data={getProperty(
                    getProperty(grammarData, "theory"),
                    "usageOverview"
                  )}
                />
              </div>
            )}

            {getProperty(getProperty(grammarData, "theory"), "structure") && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Structure
                </h3>
                <UniversalDataRenderer
                  data={getProperty(
                    getProperty(grammarData, "theory"),
                    "structure"
                  )}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Formation Section */}
      {getProperty(grammarData, "formation") && (
        <section
          id="formation"
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Formation
          </h2>
          <div className="space-y-4">
            <UniversalDataRenderer data={getProperty(grammarData, "formation")} />
          </div>
        </section>
      )}

      {/* Add more sections as needed... */}
      {/* This is a simplified version showing the pattern for the first few sections */}
    </div>
  );
};

export default GrammarContentSections;

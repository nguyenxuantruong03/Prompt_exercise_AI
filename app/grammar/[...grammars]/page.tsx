"use client";

import React from "react";
import { notFound } from "next/navigation";
import GrammarLayout from "@/components/navigation/GrammarLayout";
import TableOfContents from "@/components/navigation/TableOfContents";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import { getGrammarItemByDatabaseKey } from "@/lib/static/grammars/grammar-categories";
import { getDatabaseKey } from "@/lib/utils/grammar-key-mapping";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Target,
  Users,
  Lightbulb,
  FileText,
  CheckSquare,
  Volume2,
  AlertTriangle,
  TrendingUp,
  Globe,
  Database,
  GraduationCap,
  Settings,
  BarChart3,
  Rocket,
} from "lucide-react";

// Import các components đã tách
import GrammarHomepage from "./components/GrammarHomepage";
import GrammarPageHeader from "./components/GrammarPageHeader";
import DataOverview from "./components/DataOverview";
import DefinitionSection from "./components/DefinitionSection";
import LevelSection from "./components/LevelSection";
import GenericDataSection from "./components/GenericDataSection";
import ReferencesSection from "./components/ReferencesSection";
import RelatedTopics from "./components/RelatedTopics";
import { renderUniversalData } from "./components/UniversalDataRenderer";
import { getProperty } from "./components/RenderingUtils";
import {
  safeRender,
  renderVerbCategories,
  renderWordList,
  renderCategoricalList,
} from "./components/RenderingUtils";

interface GrammarPageProps {
  params: Promise<{
    grammars: string[];
  }>;
}

const GrammarPage: React.FC<GrammarPageProps> = ({ params }) => {
  // Convert URL path back to database key format
  // URL: simple-present -> Simple_Present
  const resolvedParams = React.use(params);
  const urlParam = resolvedParams.grammars?.[0];

  // Function to convert URL format to database key format with enhanced fallback
  const convertUrlToKey = (url: string): string | null => {
    // First try the main mapping function
    const mappedKey = getDatabaseKey(url);
    if (mappedKey) return mappedKey;

    // Try additional fallback patterns if mapping fails
    const availableKeys = Object.keys(tenseDatabase).filter(
      (key) => key !== "createdAt" && key !== "updatedAt"
    );

    // Try different format conversions
    const variations = [
      url,
      url.replace(/-/g, ""),
      url.replace(/-/g, "_"),
      url
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("_"),
      url
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),
      url.charAt(0).toUpperCase() +
        url
          .slice(1)
          .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()),
      // Handle special cases
      url === "conditional" ? "Conditionals" : null,
      url === "phrasal-verb" ? "phrasalVerbs" : null,
      url === "modal-verb" ? "ModalVerbs" : null,
    ].filter(Boolean);

    for (const variation of variations) {
      if (variation && availableKeys.includes(variation)) {
        return variation;
      }
    }

    return null;
  };

  const grammarKey = urlParam ? convertUrlToKey(urlParam) : null;

  console.log("🔍 Debug Grammar Page:");
  console.log("  URL Param:", urlParam);
  console.log("  Grammar Key:", grammarKey);
  console.log(
    "  Available Keys Sample:",
    Object.keys(tenseDatabase)
      .filter((k) => !["createdAt", "updatedAt"].includes(k))
      .slice(0, 10)
  );

  // Only redirect to 404 if we have a URL param but absolutely cannot find any match
  if (urlParam && !grammarKey) {
    console.log("❌ Grammar key not found for URL:", urlParam);
    console.log(
      "Available database keys:",
      Object.keys(tenseDatabase).filter(
        (k) => !["createdAt", "updatedAt"].includes(k)
      )
    );
    notFound();
  }

  if (!grammarKey) {
    return (
      <GrammarLayout>
        <GrammarHomepage />
      </GrammarLayout>
    );
  }

  // Find the grammar topic in the database
  const grammarData = grammarKey
    ? tenseDatabase[grammarKey as keyof typeof tenseDatabase]
    : null;

  // Get the grammar info using the more flexible function
  const grammarInfo = grammarKey
    ? getGrammarItemByDatabaseKey(grammarKey)
    : null;

  console.log("  Grammar Data exists:", !!grammarData);
  console.log(
    "  Grammar Data keys:",
    grammarData ? Object.keys(grammarData).slice(0, 5) : "None"
  );
  console.log("  Grammar Info exists:", !!grammarInfo);

  if (!grammarData || !grammarInfo) {
    console.log("❌ Data or info not found, redirecting to 404");
    notFound();
  }

  // Type guard to safely access properties
  // Now build page content
  const formatTitle = (key: string) => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const [day, month, year] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Create sections for Table of Contents based on available data
  const sections = [
    ...(getProperty(grammarData, "definition") ||
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
    getProperty(grammarData, "academicDefinition")
      ? [
          {
            id: "definition",
            title: "Definition",
            icon: <BookOpen className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "cefrLevels")
      ? [
          {
            id: "levels",
            title: "CEFR Levels",
            icon: <GraduationCap className="h-4 w-4" />,
          },
        ]
      : []),
    ...["A1", "A2", "B1", "B2", "C1", "C2"]
      .filter((level) => getProperty(grammarData, level))
      .map((level) => ({
        id: level.toLowerCase(),
        title: `${level} Level`,
        icon: <BarChart3 className="h-4 w-4" />,
      })),
    // Add all known sections
    ...Object.keys(grammarData)
      .filter(
        (key) =>
          ![
            "id",
            "created",
            "updated",
            "definition",
            "cefrLevels",
            "A1",
            "A2",
            "B1",
            "B2",
            "C1",
            "C2",
            "citations",
            "references",
            "modalVerbsDefinition",
            "articlesDefinition",
            "causativeFormDefinition",
            "infinitivesDefinition",
            "passiveVoiceDefinition",
            "inversionDefinition",
            "tenseShiftInReportedSpeechDefinition",
            "subjectVerbAgreementDefinition",
            "possessivesDefinition",
            "conjunctionDefinition",
            "comparisonsDefinition",
            "futureInThePastDefinition",
            "equalityComparisonDefinition",
            "quantifiersDefinition",
            "prepositionDefinition",
            "repeatedComparativeDefinition",
            "reflexivePronounsDefinition",
            "reportedQuestionsDefinition",
            "extendedDefinition",
            "academicDefinition",
          ].includes(key) && getProperty(grammarData, key)
      )
      .map((key) => {
        const icon = (() => {
          switch (key) {
            case "theory":
              return <BookOpen className="h-4 w-4" />;
            case "formation":
              return <FileText className="h-4 w-4" />;
            case "forms":
              return <CheckSquare className="h-4 w-4" />;
            case "spellingRules":
              return <FileText className="h-4 w-4" />;
            case "usage":
              return <Users className="h-4 w-4" />;
            case "advancedUsagePatterns":
              return <TrendingUp className="h-4 w-4" />;
            case "culturalAndContextualUsage":
              return <Globe className="h-4 w-4" />;
            case "examples":
            case "extendedExamples":
              return <Lightbulb className="h-4 w-4" />;
            case "commonMistakes":
            case "comprehensiveErrorAnalysis":
              return <AlertTriangle className="h-4 w-4" />;
            case "pronunciationGuide":
              return <Volume2 className="h-4 w-4" />;
            case "keyPoints":
              return <Target className="h-4 w-4" />;
            case "practiceExerciseTypes":
            case "learningProgression":
              return <GraduationCap className="h-4 w-4" />;
            case "learningTips":
              return <Lightbulb className="h-4 w-4" />;
            case "cefrLevelBreakdown":
            case "assessmentFramework":
              return <BarChart3 className="h-4 w-4" />;
            case "progressiveDifficulty":
            case "pedagogicalSequencing":
              return <TrendingUp className="h-4 w-4" />;
            case "crossLinguisticAnalysis":
              return <Globe className="h-4 w-4" />;
            case "corpusBasedUsage":
            case "researchBasedInsights":
              return <Database className="h-4 w-4" />;
            case "digitalLearningIntegration":
              return <Settings className="h-4 w-4" />;
            case "futureDirections":
              return <Rocket className="h-4 w-4" />;
            case "abstract_nouns_vocab":
            case "vocabulary":
            case "vocab":
              return <BookOpen className="h-4 w-4" />;
            default:
              return <FileText className="h-4 w-4" />;
          }
        })();

        return {
          id: key
            .toLowerCase()
            .replace(/([A-Z])/g, "-$1")
            .replace(/^-/, ""),
          title: key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase()),
          icon,
        };
      }),
    ...(getProperty(grammarData, "citations") ||
    getProperty(grammarData, "references") ||
    (getProperty(grammarData, "definition") &&
      getProperty(getProperty(grammarData, "definition"), "references"))
      ? [
          {
            id: "references",
            title: "References & Citations",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
  ];

  return (
    <GrammarLayout>
      <style jsx global>{`
        section[id] {
          scroll-margin-top: 120px;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Table of Contents - Mobile Top */}
        <div className="lg:hidden">
          <TableOfContents sections={sections} className="mb-6" />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <GrammarPageHeader
            grammarInfo={grammarInfo}
            grammarKey={grammarKey}
            grammarData={grammarData}
            formatTitle={formatTitle}
            formatDate={formatDate}
            getProperty={getProperty}
          />

          {/* Data Completeness Overview */}
          <DataOverview grammarData={grammarData} getProperty={getProperty} />

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Definition */}
            {(getProperty(grammarData, "definition") ||
              getProperty(grammarData, "modalVerbsDefinition") ||
              getProperty(grammarData, "articlesDefinition") ||
              getProperty(grammarData, "causativeFormDefinition") ||
              getProperty(grammarData, "infinitivesDefinition") ||
              getProperty(grammarData, "passiveVoiceDefinition") ||
              getProperty(grammarData, "inversionDefinition") ||
              getProperty(
                grammarData,
                "tenseShiftInReportedSpeechDefinition"
              ) ||
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
              <DefinitionSection
                grammarData={grammarData}
                getProperty={getProperty}
              />
            )}

            {/* CEFR Levels */}
            {getProperty(grammarData, "cefrLevels") && (
              <section id="levels" className="bg-green-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  CEFR Levels
                </h2>
                <div className="grid gap-4">
                  {Object.entries(
                    getProperty(grammarData, "cefrLevels") as Record<
                      string,
                      any
                    >
                  ).map(([level, data]) => (
                    <div
                      key={level}
                      className="bg-white rounded-lg border-l-4 border-green-400 p-4"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2 text-lg uppercase">
                        {level}
                      </h3>
                      {typeof data === "object" && data !== null ? (
                        <div className="space-y-2">
                          {getProperty(data, "definition") && (
                            <p className="text-gray-700">
                              {getProperty(data, "definition")}
                            </p>
                          )}
                          {getProperty(data, "learningObjectives") &&
                            Array.isArray(
                              getProperty(data, "learningObjectives")
                            ) && (
                              <div>
                                <h4 className="font-medium text-gray-800 mb-1">
                                  Learning Objectives:
                                </h4>
                                <ul className="text-gray-700 space-y-1 ml-4">
                                  {(
                                    getProperty(
                                      data,
                                      "learningObjectives"
                                    ) as string[]
                                  ).map((objective, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="text-green-600 font-bold">
                                        •
                                      </span>
                                      <span>{objective}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      ) : (
                        <p className="text-gray-700">{String(data)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* A1, A2, B1, B2, C1, C2 Levels Individual Display */}
            {["A1", "A2", "B1", "B2", "C1", "C2"].map(
              (level) =>
                getProperty(grammarData, level) && (
                  <LevelSection
                    key={level}
                    level={level}
                    grammarData={grammarData}
                    getProperty={getProperty}
                  />
                )
            )}

            {/* Generic Data Sections - Render all other sections dynamically */}
            {[
              "theory",
              "formation",
              "forms",
              "spellingRules",
              "usage",
              "examples",
              "extendedExamples",
              "commonMistakes",
              "pronunciationGuide",
              "keyPoints",
              "learningTips",
              "learningProgression",
              "cefrLevelBreakdown",
              "comprehensiveErrorAnalysis",
              "practiceExerciseTypes",
              "advancedUsagePatterns",
              "culturalAndContextualUsage",
              "notes",
              "progressiveDifficulty",
              "pedagogicalSequencing",
              "crossLinguisticAnalysis",
              "corpusBasedUsage",
              "digitalLearningIntegration",
              "researchBasedInsights",
              "assessmentFramework",
              "futureDirections",
              "rules",
              "patterns",
              "concepts",
              "functions",
              "mistakes",
              "errors",
              "pitfalls",
              "tips",
              "hints",
              "reminders",
              "applications",
              "exercises",
              "memoryAids",
            ]
              .filter(
                (key) => getProperty(grammarData, key) && key !== "definition" // Skip definition as it's handled separately
              )
              .map((key) => (
                <GenericDataSection
                  key={key}
                  sectionKey={key}
                  data={getProperty(grammarData, key)}
                  renderUniversalData={renderUniversalData}
                />
              ))}

            {/* All Additional Data Fields - Comprehensive Display */}
            {Object.keys(grammarData)
              .filter(
                (key) =>
                  ![
                    "id",
                    "created",
                    "updated",
                    "definition",
                    "cefrLevels",
                    "abstract_nouns_vocab",
                    "vocabulary",
                    "vocab",
                    "theory",
                    "formation",
                    "forms",
                    "spellingRules",
                    "usage",
                    "advancedUsagePatterns",
                    "culturalAndContextualUsage",
                    "examples",
                    "extendedExamples",
                    "commonMistakes",
                    "pronunciationGuide",
                    "keyPoints",
                    "practiceExerciseTypes",
                    "learningTips",
                    "learningProgression",
                    "cefrLevelBreakdown",
                    "comprehensiveErrorAnalysis",
                    "notes",
                    "citations",
                    "references",
                    "progressiveDifficulty",
                    "pedagogicalSequencing",
                    "crossLinguisticAnalysis",
                    "corpusBasedUsage",
                    "digitalLearningIntegration",
                    "researchBasedInsights",
                    "assessmentFramework",
                    "futureDirections",
                    "rules",
                    "patterns",
                    "concepts",
                    "functions",
                    "mistakes",
                    "errors",
                    "pitfalls",
                    "tips",
                    "hints",
                    "reminders",
                    "applications",
                    "exercises",
                    "memoryAids",
                    "A1",
                    "A2",
                    "B1",
                    "B2",
                    "C1",
                    "C2",
                    "modalVerbsDefinition",
                    "articlesDefinition",
                    "causativeFormDefinition",
                    "infinitivesDefinition",
                    "passiveVoiceDefinition",
                    "inversionDefinition",
                    "tenseShiftInReportedSpeechDefinition",
                    "subjectVerbAgreementDefinition",
                    "possessivesDefinition",
                    "conjunctionDefinition",
                    "comparisonsDefinition",
                    "futureInThePastDefinition",
                    "equalityComparisonDefinition",
                    "quantifiersDefinition",
                    "prepositionDefinition",
                    "repeatedComparativeDefinition",
                    "reflexivePronounsDefinition",
                    "reportedQuestionsDefinition",
                    "extendedDefinition",
                    "academicDefinition",
                  ].includes(key)
              )
              .map((key) => {
                const data = getProperty(grammarData, key);
                if (!data) return null;

                return (
                  <GenericDataSection
                    key={key}
                    sectionKey={key}
                    data={data}
                    renderUniversalData={renderUniversalData}
                  />
                );
              })}

            {/* Vocabulary Sections */}
            {(getProperty(grammarData, "abstract_nouns_vocab") ||
              getProperty(grammarData, "vocabulary") ||
              getProperty(grammarData, "vocab")) && (
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Vocabulary
                </h2>
                <div className="space-y-4">
                  {getProperty(grammarData, "abstract_nouns_vocab") && (
                    <div>
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Abstract Nouns Vocabulary
                      </h3>
                      <div>
                        {renderUniversalData(
                          getProperty(grammarData, "abstract_nouns_vocab")
                        )}
                      </div>
                    </div>
                  )}
                  {getProperty(grammarData, "vocabulary") && (
                    <div>
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Vocabulary
                      </h3>
                      <div>
                        {renderUniversalData(
                          getProperty(grammarData, "vocabulary")
                        )}
                      </div>
                    </div>
                  )}
                  {getProperty(grammarData, "vocab") && (
                    <div>
                      <h3 className="font-semibold text-blue-700 mb-2">
                        Vocab
                      </h3>
                      <div>
                        {renderUniversalData(getProperty(grammarData, "vocab"))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* References & Citations Section - At the End */}
            <ReferencesSection
              grammarData={grammarData}
              getProperty={getProperty}
              renderUniversalData={renderUniversalData}
            />
          </div>

          {/* Navigation to related topics */}
          <RelatedTopics
            currentGrammarKey={grammarKey}
            grammarInfo={grammarInfo}
          />
        </div>

        {/* Table of Contents Sidebar - Desktop Only */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <TableOfContents sections={sections} />
        </div>
      </div>
    </GrammarLayout>
  );
};

export default GrammarPage;

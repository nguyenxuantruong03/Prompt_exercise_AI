"use client";

import React from "react";

interface DataCompletenessOverviewProps {
  grammarData: any;
  getProperty: (obj: any, prop: string) => any;
}

const DataCompletenessOverview: React.FC<DataCompletenessOverviewProps> = ({
  grammarData,
  getProperty,
}) => {
  const dataKeys = [
    {
      key: "theory",
      label: "📚 Theory",
      color: "bg-blue-100 text-blue-800",
    },
    {
      key: "forms",
      label: "📝 Forms",
      color: "bg-green-100 text-green-800",
    },
    {
      key: "usage",
      label: "🎯 Usage",
      color: "bg-purple-100 text-purple-800",
    },
    {
      key: "examples",
      label: "💡 Examples",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      key: "commonMistakes",
      label: "❌ Mistakes",
      color: "bg-red-100 text-red-800",
    },
    {
      key: "spellingRules",
      label: "✏️ Spelling",
      color: "bg-orange-100 text-orange-800",
    },
    {
      key: "pronunciationGuide",
      label: "🗣️ Pronunciation",
      color: "bg-pink-100 text-pink-800",
    },
    {
      key: "learningTips",
      label: "💡 Tips",
      color: "bg-cyan-100 text-cyan-800",
    },
    {
      key: "cefrLevelBreakdown",
      label: "📊 CEFR Levels",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      key: "extendedExamples",
      label: "📖 Extended Examples",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      key: "advancedUsagePatterns",
      label: "🎓 Advanced Usage",
      color: "bg-violet-100 text-violet-800",
    },
    {
      key: "culturalAndContextualUsage",
      label: "🌍 Cultural Context",
      color: "bg-teal-100 text-teal-800",
    },
    {
      key: "comprehensiveErrorAnalysis",
      label: "🔍 Error Analysis",
      color: "bg-rose-100 text-rose-800",
    },
    {
      key: "practiceExerciseTypes",
      label: "📋 Exercise Types",
      color: "bg-lime-100 text-lime-800",
    },
    {
      key: "learningProgression",
      label: "📈 Learning Path",
      color: "bg-amber-100 text-amber-800",
    },
    {
      key: "researchBasedInsights",
      label: "🔬 Research",
      color: "bg-sky-100 text-sky-800",
    },
    {
      key: "assessmentFramework",
      label: "📊 Assessment",
      color: "bg-slate-100 text-slate-800",
    },
    {
      key: "digitalLearningIntegration",
      label: "💻 Digital Tools",
      color: "bg-purple-100 text-purple-800",
    },
    {
      key: "crossLinguisticAnalysis",
      label: "🌐 Cross-Linguistic",
      color: "bg-green-100 text-green-800",
    },
    {
      key: "corpusBasedUsage",
      label: "📚 Corpus Data",
      color: "bg-blue-100 text-blue-800",
    },
    {
      key: "pedagogicalSequencing",
      label: "👨‍🏫 Teaching Order",
      color: "bg-red-100 text-red-800",
    },
    {
      key: "progressiveDifficulty",
      label: "⬆️ Difficulty Levels",
      color: "bg-orange-100 text-orange-800",
    },
    {
      key: "futureDirections",
      label: "🚀 Future Trends",
      color: "bg-pink-100 text-pink-800",
    },
    {
      key: "citations",
      label: "📑 References",
      color: "bg-cyan-100 text-cyan-800",
    },
  ];

  const availableCount = dataKeys.filter((item) =>
    getProperty(grammarData, item.key)
  ).length;

  return (
    <div
      id="overview"
      className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
    >
      <h3 className="font-semibold text-blue-800 mb-3">
        📊 Comprehensive Data Overview
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
        {dataKeys.map(({ key, label, color }) => (
          <div
            key={key}
            className={`px-2 py-1 rounded text-xs font-medium ${
              getProperty(grammarData, key)
                ? color
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {getProperty(grammarData, key) ? "✅" : "❌"} {label}
          </div>
        ))}
      </div>
      <div className="mt-3 text-sm text-blue-700">
        <strong>Data Completeness:</strong> {availableCount} out of{" "}
        {dataKeys.length} comprehensive sections available
      </div>
    </div>
  );
};

export default DataCompletenessOverview;

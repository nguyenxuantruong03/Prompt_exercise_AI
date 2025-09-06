"use client";

import React from "react";
import {
  BookOpen,
  FileText,
  CheckSquare,
  Users,
  Lightbulb,
  Volume2,
  AlertTriangle,
  TrendingUp,
  Globe,
  Database,
  GraduationCap,
  Settings,
  BarChart3,
  Rocket,
  Target,
} from "lucide-react";

export const generateTableOfContentsSections = (
  grammarData: any,
  getProperty: (obj: any, prop: string) => any
) => {
  // Create sections for Table of Contents based on available data
  const sections = [
    ...(getProperty(grammarData, "definition")
      ? [
          {
            id: "definition",
            title: "Definition",
            icon: <BookOpen className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "theory")
      ? [
          {
            id: "theory",
            title: "Theory & Overview",
            icon: <BookOpen className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "formation")
      ? [
          {
            id: "formation",
            title: "Formation",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "forms")
      ? [
          {
            id: "forms",
            title: "Forms",
            icon: <CheckSquare className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "spellingRules")
      ? [
          {
            id: "spelling-rules",
            title: "Spelling Rules",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "usage")
      ? [
          {
            id: "usage",
            title: "Usage",
            icon: <Users className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "advancedUsagePatterns")
      ? [
          {
            id: "advanced-usage",
            title: "Advanced Usage Patterns",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "culturalAndContextualUsage")
      ? [
          {
            id: "cultural-usage",
            title: "Cultural & Contextual Usage",
            icon: <Globe className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "examples")
      ? [
          {
            id: "examples",
            title: "Examples",
            icon: <Lightbulb className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "extendedExamples")
      ? [
          {
            id: "extended-examples",
            title: "Extended Examples",
            icon: <Lightbulb className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "commonMistakes")
      ? [
          {
            id: "common-mistakes",
            title: "Common Mistakes",
            icon: <AlertTriangle className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "pronunciationGuide")
      ? [
          {
            id: "pronunciation",
            title: "Pronunciation Guide",
            icon: <Volume2 className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "keyPoints")
      ? [
          {
            id: "key-points",
            title: "Key Points",
            icon: <Target className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "practiceExerciseTypes")
      ? [
          {
            id: "practice-exercises",
            title: "Practice Exercise Types",
            icon: <GraduationCap className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "learningTips")
      ? [
          {
            id: "learning-tips",
            title: "Learning Tips",
            icon: <Lightbulb className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "learningProgression")
      ? [
          {
            id: "learning-progression",
            title: "Learning Progression",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "cefrLevelBreakdown")
      ? [
          {
            id: "cefr-levels",
            title: "CEFR Level Breakdown",
            icon: <BarChart3 className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "comprehensiveErrorAnalysis")
      ? [
          {
            id: "error-analysis",
            title: "Comprehensive Error Analysis",
            icon: <AlertTriangle className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "notes")
      ? [
          {
            id: "notes",
            title: "Important Notes",
            icon: <FileText className="h-4 w-4" />,
          },
        ]
      : []),
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
    ...(getProperty(grammarData, "progressiveDifficulty")
      ? [
          {
            id: "progressive-difficulty",
            title: "Progressive Difficulty Exercises",
            icon: <TrendingUp className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "pedagogicalSequencing")
      ? [
          {
            id: "pedagogical-sequencing",
            title: "Pedagogical Sequencing",
            icon: <GraduationCap className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "crossLinguisticAnalysis")
      ? [
          {
            id: "cross-linguistic",
            title: "Cross-Linguistic Analysis",
            icon: <Globe className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "corpusBasedUsage")
      ? [
          {
            id: "corpus-usage",
            title: "Corpus-Based Usage Data",
            icon: <Database className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "digitalLearningIntegration")
      ? [
          {
            id: "digital-learning",
            title: "Digital Learning Integration",
            icon: <Settings className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "researchBasedInsights")
      ? [
          {
            id: "research-insights",
            title: "Research-Based Insights",
            icon: <Database className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "assessmentFramework")
      ? [
          {
            id: "assessment-framework",
            title: "Assessment Framework",
            icon: <BarChart3 className="h-4 w-4" />,
          },
        ]
      : []),
    ...(getProperty(grammarData, "futureDirections")
      ? [
          {
            id: "future-directions",
            title: "Future Directions",
            icon: <Rocket className="h-4 w-4" />,
          },
        ]
      : []),
  ];

  return sections;
};

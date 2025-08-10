// Types for tips-learn.ts

export interface ExtendedExamples {
  [key: string]: string[];
}

export interface ErrorAnalysis {
  [key: string]: string[];
}

export interface TheoryStructure {
  affirmative?: {
    examples?: string[];
  };
  negative?: {
    examples?: string[];
  };
  question?: {
    examples?: string[];
  };
  interrogative?: {
    examples?: string[];
  };
}

export interface DetailedGrammarRules {
  [key: string]: {
    rules?: string[];
    usageRules?: string[];
  };
}

export interface Theory {
  generalTheory?: string[];
  basicTheory?: string[];
  advancedTheory?: string[];
  usageOverview?: string[];
  detailedGrammarRules?: DetailedGrammarRules;
  structure?: TheoryStructure;
  rules?: string[];
}

export interface Types {
  [key: string]: {
    examples?: string[];
  };
}

export interface TopicData {
  usage?: string[];
  theory?: Theory;
  extendedExamples?: ExtendedExamples;
  commonMistakes?: string[];
  comprehensiveErrorAnalysis?: ErrorAnalysis;
  spellingRules?: string[];
  learningTips?: string[];
  notes?: string[];
  advancedUsagePatterns?: string[];
  culturalAndContextualUsage?: string[];
  practiceExerciseTypes?: string[];
  crossLinguisticAnalysis?: string[];
  corpusBasedUsage?: string[];
  progressiveDifficulty?: string[];
  learningProgression?: string[];
  cefrLevelBreakdown?: string[];
  definition?: string;
  concept?: string;
  overview?: string;
  forms?: string[];
  structure?: string[];
  formation?: string[];
  patterns?: string[];
  constructions?: string[];
  examples?: string[];
  demonstrativeExamples?: string[];
  practicalExamples?: string[];
  types?: Types;
  uses?: string[];
  applications?: string[];
  realWorldApplications?: string[];
  functionalUsage?: string[];
  rules?: string[];
  formationRules?: string[];
  grammarRules?: string[];
  usageRules?: string[];
  mistakes?: string[];
  errors?: string[];
  pitfalls?: string[];
  avoidableErrors?: string[];
  background?: string[];
  concepts?: string[];
  principles?: string[];
  explanations?: string[];
  references?: string[];
  sources?: string[];
  citations?: string[];
  researchFindings?: string[];
  linguisticEvidence?: string[];
  academicReferences?: string[];
  practiceExercises?: string[];
  exercises?: string[];
  drills?: string[];
  activitiesAndExercises?: string[];
  learningActivities?: string[];
  assessmentCriteria?: string[];
}

export interface StatisticsResult {
  concepts: number;
  examples: number;
  mistakes: number;
  rules: number;
  theory: number;
  usage: number;
  patterns: number;
  applications: number;
  totalElements: number;
}

export interface ComponentCounts {
  definition: number;
  forms: number;
  examples: number;
  usage: number;
  rules: number;
  mistakes: number;
  theory: number;
  citations: number;
  practice: number;
}

export interface ComponentPercentages {
  [key: string]: number;
}

export interface ComponentImportanceResult {
  counts: ComponentCounts;
  percentages: ComponentPercentages;
  total: number;
  topFocus: [string, number][];
}

// Types for PDF style components
import { Content } from "pdfmake/interfaces";

// PDFSection type definition
export interface PDFSection {
  title: string;
  content: GrammarContent;
  category: string;
}

// Grammar content structure based on actual data patterns
export interface GrammarContent {
  // Core definitions
  definition?: string;
  concept?: string;
  overview?: string;

  // Structure and forms
  forms?: string[] | Record<string, FormStructure>;
  structure?: string[] | Record<string, FormStructure>;
  formation?: string[] | Record<string, FormStructure>;
  patterns?: string[];
  constructions?: string[];

  // Examples
  examples?: string[] | Record<string, string[]>;
  demonstrativeExamples?: string[];
  practicalExamples?: string[];

  // Usage patterns
  usage?: string[];
  uses?: string[];
  applications?: string[];
  realWorldApplications?: string[];
  functionalUsage?: string[];

  // Rules and guidelines
  rules?: string[] | RuleStructure[];
  formationRules?: string[];
  grammarRules?: string[] | Record<string, string[]>;
  usageRules?: string[];
  spellingRules?: string[] | SpellingRuleStructure[];

  // Types and categories
  types?: Record<string, TypeStructure>;

  // Common mistakes
  mistakes?: string[] | MistakeStructure[];
  errors?: string[];
  pitfalls?: string[];
  avoidableErrors?: string[];
  commonMistakes?: string[] | MistakeStructure[];

  // Theory and background
  theory?: TheoryStructure;
  background?: string[];
  concepts?: string[];
  principles?: string[];
  explanations?: string[];

  // References and citations
  references?: string[];
  sources?: string[];
  citations?: string[];
  researchFindings?: string[];
  linguisticEvidence?: string[];
  academicReferences?: string[];

  // Practice and exercises
  practiceExercises?: string[];
  exercises?: string[];
  drills?: string[];
  activitiesAndExercises?: string[];
  learningActivities?: string[];
  assessmentCriteria?: string[];

  // Extended content
  extendedExamples?: Record<string, string[]>;
  comprehensiveErrorAnalysis?: Record<string, string[]>;
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

  // Level-specific content (A1, A2, B1, B2, C1, C2)
  A1?: LevelContent;
  A2?: LevelContent;
  B1?: LevelContent;
  B2?: LevelContent;
  C1?: LevelContent;
  C2?: LevelContent;

  // Vocabulary related
  vocab?: Record<string, string[]>;
  vocabulary?: Record<string, string[]>;

  // Meta fields (should be excluded from display)
  id?: string;
  created?: string;
  updated?: string;
  createdAt?: string;
  updatedAt?: string;

  // Allow for any additional properties that may exist in the data
  [key: string]: unknown;
}

// Form structure for grammar patterns
export interface FormStructure {
  form?: string;
  description?: string;
  examples?: string[];
  note?: string;
}

// Rule structure for grammar rules
export interface RuleStructure {
  rule?: string;
  explanation?: string;
  examples?: string[];
  exception?: string;
  note?: string;
}

// Spelling rule structure
export interface SpellingRuleStructure {
  rule?: string;
  explanation?: string;
  examples?: string[];
  exceptions?: string[];
  note?: string;
}

// Type structure for grammar types
export interface TypeStructure {
  examples?: string[];
  description?: string;
  usage?: string[];
  [key: string]: unknown;
}

// Mistake structure for common errors
export interface MistakeStructure {
  mistake?: string;
  wrong?: string;
  correct?: string;
  explanation?: string;
  note?: string;
}

// Theory structure for theoretical content
export interface TheoryStructure {
  generalTheory?: string[];
  basicTheory?: string[];
  advancedTheory?: string[];
  usageOverview?: string[];
  detailedGrammarRules?: Record<string, DetailedGrammarRule>;
  structure?: TheorySubStructure;
  rules?: string[];
}

export interface DetailedGrammarRule {
  rules?: string[];
  usageRules?: string[];
}

export interface TheorySubStructure {
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

// Level content structure for CEFR levels
export interface LevelContent {
  examples?: string[];
  usage?: string[];
  rules?: string[];
  vocabulary?: string[];
  structures?: string[];
  [key: string]: unknown;
}

// Analysis result structures
export interface ComponentAnalysisResult {
  counts: ComponentCounts;
  percentages: ComponentPercentages;
  total: number;
  topFocus: [string, number][];
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
  [key: string]: number;
}

export interface ComponentPercentages {
  [key: string]: number;
}

// Statistics result structure
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

// Quick reference extraction result
export interface QuickReferencesResult {
  formulas: string[];
  structures: string[];
  patterns: string[];
  examples: string[];
  realExamples: string[];
  practicalExamples: string[];
  levelInfo: string[];
  cefrLevels: string[];
  difficultyLevels: string[];
  rules: string[];
  usage: string[];
  usagePatterns: string[];
  commonErrors: string[];
  mistakes: string[];
  corrections: string[];
  definitions: string[];
  concepts: string[];
  keyPoints: string[];
  functions: string[];
  meanings: string[];
  purposes: string[];
  types: string[];
  categories: string[];
  classifications: string[];
  recognitionTips: string[];
  tips: string[];
  notes: string[];
  advancedPatterns: string[];
  complexStructures: string[];
  sophisticatedUsage: string[];
}

// Study guidance structure
export interface StudyGuidanceResult {
  mainSteps: StudyStep[];
  specializedPractice: string[];
  masteryCheck: string[];
  contexts: string[];
  advancedExamples: string[];
  relatedTopics: string[];
}

export interface StudyStep {
  title: string;
  details: string[];
}

// Quick reference idea structure
export interface QuickReferenceIdea {
  title: string;
  suggestions: string[];
}

// Category structure
export interface CategoryStructure {
  categories: Record<string, PDFSection[]>;
  categoryColors: Record<string, string>;
}

// Database entry type (for tenseDatabase)
export interface TenseDatabaseEntry {
  [key: string]: GrammarContent | string | undefined;
  createdAt?: string;
  updatedAt?: string;
}

// Function parameter types
export type DataExtractionObject = Record<string, unknown>;
export type ProcessObjectFunction = (
  obj: DataExtractionObject,
  quickRefs: QuickReferencesResult,
  path?: string
) => void;

// Color scheme interface
export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  warning: string;
  error: string;
  info: string;
  success: string;
  neutral: string;
  background: string;
  headerBg: string;
  categoryBg: string;
  exampleBg: string;
  formulaBg: string;
  noteBg: string;
  gradientStart: string;
  gradientEnd: string;
  goldAccent: string;
  roseAccent: string;
  tealAccent: string;
  lightBg: string;
  cardBg: string;
  borderColor: string;
  shadowColor: string;
  basicTensesBg: string;
  perfectTensesBg: string;
  continuousTensesBg: string;
  nounsArticlesBg: string;
  pronounsBg: string;
  adjectivesBg: string;
  adverbsBg: string;
  verbsVoiceBg: string;
  conditionalsBg: string;
  advancedBg: string;
  communicationBg: string;
  specialBg: string;
}

// Learning tip type (from external file)
export interface LearningTip {
  topic: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  studyTime: string;
  priority: "High" | "Medium" | "Low";
  attention: "More" | "Moderate" | "Less";
  category: string;
  tips: string[];
  commonPitfalls: string[];
  practiceActivities: string[];
  masteryCriteria: string[];
}

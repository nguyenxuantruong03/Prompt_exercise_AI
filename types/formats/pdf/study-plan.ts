// Study Plan Type Definitions

export interface StudyPlanOverview {
  totalDuration: string;
  dailyStudyTime: string;
  weeklyProgress: string;
  methodology: string;
  assessmentSchedule: string;
  expectedOutcomes: {
    A1_completion: string;
    A2_completion: string;
    B1_completion: string;
    B2_completion: string;
    C1_completion: string;
    C2_completion: string;
  };
  learningStyles: {
    visual: string;
    auditory: string;
    kinesthetic: string;
    reading: string;
  };
  difficultyProgression: {
    gradual: string;
    spiraling: string;
    contextual: string;
    integrated: string;
  };
  successFactors: string[];
}

export interface DailySchedule {
  warmUp: string;
  newContent: string;
  practice: string;
  application: string;
  review: string;
}

export interface WeeklyStructure {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface StudyStructure {
  dailySchedule: DailySchedule;
  weeklyStructure: WeeklyStructure;
  monthlyMilestones: {
    week1: string;
    week2: string;
    week3: string;
    week4: string;
  };
  learningCycleMethods: {
    presentation: string;
    practice: string;
    production: string;
    reflection: string;
  };
  skillIntegration: {
    speaking: string;
    writing: string;
    listening: string;
    reading: string;
  };
  adaptiveElements: {
    selfPaced: string;
    remediation: string;
    acceleration: string;
    personalization: string;
  };
  motivationalComponents: {
    goalSetting: string;
    progressTracking: string;
    socialLearning: string;
  };
}

export interface TopicDetail {
  day: string;
  topic: string;
  content: string;
  practice: string;
  detailedExplanation?: Record<string, unknown>;
  assessmentCriteria?: string | Record<string, unknown>;
  culturalNotes?: string | string[];
  commonErrors?: string | string[];
  commonMistakes?: string | string[];
  extensionActivities?: Record<string, unknown>;
  troubleshootingGuide?: Record<string, unknown>;
  culturalIntegration?: Record<string, unknown>;
}

export interface WeekData {
  title: string;
  goals: string[];
  topics: TopicDetail[];
  assessment: string;
  prerequisiteKnowledge?: string[];
  prerequisiteCheck?: string[];
  learningObjectives?: Record<string, string>;
  weeklyReview?: Record<string, unknown>;
  extensionActivities?: string[] | Record<string, unknown>;
  troubleshootingGuide?: Record<string, unknown>;
  culturalIntegration?: string[] | Record<string, unknown>;
}

export interface LevelData {
  level: string;
  duration: string;
  description: string;
  weeks: Record<string, WeekData>;
}

export interface LearningMethodologies {
  [key: string]: unknown;
}

export interface ComprehensiveAssessment {
  [key: string]: unknown;
}

export interface TeacherDevelopment {
  [key: string]: unknown;
}

export interface CulturalIntegration {
  [key: string]: unknown;
}

export interface TechnologyIntegration {
  [key: string]: unknown;
}

export interface StudyPlan {
  createdAt?: string;
  updatedAt?: string;
  title: string;
  subtitle: string;
  version: string;
  author: string;
  targetAudience: string;
  overview: StudyPlanOverview;
  studyStructure: StudyStructure;
  A1: LevelData;
  A2: LevelData;
  B1: LevelData;
  B2: LevelData;
  C1: LevelData;
  C2: LevelData;
  learningMethodologies: LearningMethodologies;
  comprehensiveAssessment: ComprehensiveAssessment;
  teacherDevelopment: TeacherDevelopment;
  culturalIntegration: CulturalIntegration;
  technologyIntegration: TechnologyIntegration;
  [key: string]: unknown; // For additional properties
}

// Union type for values that can be various types
export type StudyPlanValue = string | number | boolean | string[] | Record<string, unknown> | unknown;

// For safe stringify function
export type SafeStringifyInput = StudyPlanValue | null | undefined;

// For PDF table node type
export interface PDFTableNode {
  table: {
    body: unknown[][];
  };
}

// Certificate data type
export interface CertificateData {
  [key: string]: unknown;
}

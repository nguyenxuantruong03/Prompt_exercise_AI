export interface FocusStructuresType {
  id: number;
  definition: string;
  purpose: string[];
  levels: {
    A1: LevelData;
    A2: LevelData;
    B1: LevelData;
    B2: LevelData;
    C1: LevelData;
    C2: LevelData;
  };
  types: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | {
          example: string;
          note: string;
        };
  };
  examples: {
    structure: string;
    example: string;
  }[];
  recognitionTips: string[];
  commonErrors: string[];
  references: Reference[];
  learningPath: LearningPath;
}

interface LevelData {
  description: string;
  examples: Example[];
  learningTips: string[];
  keyConcepts: string[];
  practiceAreas: string[];
  commonMistakes: string[];
  progressionToNextLevel: string[];
}

interface Example {
  structure: string;
  example: string;
  explanation: string;
  context: string;
  pattern: string;
  usageNotes?: string;
  variations?: string[];
}

interface Reference {
  title: string;
  author?: string;
  url?: string;
  type: "book" | "website" | "academic" | "course";
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "all";
}

interface LearningPath {
  overview: string;
  prerequisites: string[];
  milestones: {
    [key: string]: string[];
  };
  assessmentCriteria: {
    [key: string]: string[];
  };
}

export interface DiscourseMarkersType {
  definition: string;
  extendedDefinition: string;
  academicDefinition: string;
  linguisticClassification: {
    category: string;
    subcategories: string[];
    pragmaticFunction: string;
    syntacticBehavior: string[];
  };
  functions: {
    Addition: string[];
    Contrast: string[];
    "Cause and Effect": string[];
    "Time/Sequence": string[];
    "Giving Examples": string[];
    "Reformulation/Clarification": string[];
    Emphasis: string[];
    "Summarizing/Concluding": string[];
    Condition: string[];
    Concession: string[];
    Purpose: string[];
    Comparison: string[];
    "Topic Shift": string[];
    Digression: string[];
    "Return to Topic": string[];
  };
  levels: {
    [key in "A1" | "A2" | "B1" | "B2" | "C1" | "C2"]: {
      description: string;
      cognitiveLoad: string;
      frequencyInSpeech: string;
      frequencyInWriting: string;
      registerAppropriate: string[];
      examples: Array<{
        marker: string;
        function: string;
        example: string;
        explanation: string;
        context: string;
        pattern: string;
        formalityLevel: "informal" | "neutral" | "formal" | "academic";
        frequency: "very common" | "common" | "less common" | "rare";
        difficulty: "easy" | "moderate" | "challenging" | "complex";
        alternativeExpressions?: string[];
        commonCollocations?: string[];
        pragmaticNotes?: string;
      }>;
      masteryIndicators: string[];
      commonChallenges: string[];
      learningTips: string[];
      assessmentCriteria: string[];
    };
  };
  examples: string[];
  recognitionTips: string[];
  commonErrors: Array<{
    error: string;
    explanation: string;
    correctForm: string;
    level: string;
  }>;
  pedagogicalProgression: {
    teachingOrder: string[];
    skillBuilding: Array<{
      skill: string;
      level: string;
      prerequisite: string[];
    }>;
  };
  culturalVariations: Array<{
    variety: string;
    preferences: string[];
    avoidances: string[];
  }>;
  corpusData: {
    mostFrequent: string[];
    academicWriting: string[];
    spokenLanguage: string[];
    formalWriting: string[];
  };
  references: Array<{
    title: string;
    author: string;
    year: number;
    publisher?: string;
    url?: string;
    type: "book" | "article" | "website" | "research";
    relevance: string;
  }>;
}

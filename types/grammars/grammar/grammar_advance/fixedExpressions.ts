export interface fixedExpressionsType {
  id: number;
  topic: string;
  definition: string;
  level: string;
  detailedDescription: string;
  linguisticFeatures: string[];
  categories: {
    name: string;
    level: string;
      description: string;
      examples: {
        expression: string;
        meaning: string;
        register: string;
        example: string;
        pronunciation?: string;
        frequency: string;
        alternativeExpressions?: string[];
        culturalContext?: string;
        etymologyNotes?: string;
      }[];
    
  }[];
  levelProgression: {
    level: string;
    keyFeatures: string[];
    typicalExpressions: string[];
    learningObjectives: string[];
  }[];
  grammarNotes: string[];
  usageTips: string[];
  commonMistakes: {
    mistake: string;
    correction: string;
    explanation?: string;
  }[];
  learningStrategies: string[];
  assessmentCriteria: {
    level: string;
    criteria: string[];
  }[];
  crossCulturalComparisons: {
    expression: string;
    englishMeaning: string;
    culturalEquivalents: {
      language: string;
      equivalent: string;
      notes: string;
    }[];
  }[];
  references: {
    type: string;
    title: string;
    author?: string;
    publisher?: string;
    year?: number;
    url?: string;
    description: string;
  }[];
}
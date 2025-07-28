export interface cleftSentencesType {
  definition: string;
  etymology?: string;
  purpose: string[];
  levels: {
    A1: {
      description: string;
      examples: string[];
      structure: string;
      keyVocabulary?: string[];
      learningObjectives?: string[];
      notes: string[];
      commonPatterns?: string[];
      practiceActivities?: string[];
    };
    A2: {
      description: string;
      examples: string[];
      additionalStructures: string[];
      keyVocabulary?: string[];
      learningObjectives?: string[];
      notes: string[];
      commonPatterns?: string[];
      practiceActivities?: string[];
    };
    B1: {
      description: string;
      types: Array<{
        name: string;
        structure: string;
        example: string;
        additionalExamples?: string[];
        usage?: string[];
      }>;
      usage: string[];
      keyVocabulary?: string[];
      learningObjectives?: string[];
      notes: string[];
      commonPatterns?: string[];
      practiceActivities?: string[];
    };
    B2: {
      description: string;
      examples: string[];
      advancedStructures: string[];
      usage: string[];
      keyVocabulary?: string[];
      learningObjectives?: string[];
      notes: string[];
      commonPatterns?: string[];
      practiceActivities?: string[];
      rhetoricalFunctions?: string[];
    };
    C1: {
      description: string;
      examples: string[];
      usage: string[];
      keyVocabulary?: string[];
      learningObjectives?: string[];
      notes: string[];
      commonPatterns?: string[];
      practiceActivities?: string[];
      rhetoricalFunctions?: string[];
      stylistics?: string[];
    };
    C2: {
      description: string;
      examples: string[];
      advancedFeatures: string[];
      keyVocabulary?: string[];
      learningObjectives?: string[];
      notes: string[];
      commonPatterns?: string[];
      practiceActivities?: string[];
      rhetoricalFunctions?: string[];
      stylistics?: string[];
      discourse?: string[];
    };
  };
  types: {
    [key: string]: {
      definition: string;
      structure: string;
      examples: string[];
      variations?: string[];
      formalityLevel?: string;
      frequency?: string;
    };
  };
  functions: string[];
  communicativePurposes?: string[];
  syntacticFeatures?: string[];
  semanticAspects?: string[];
  pragmaticUses?: string[];
  commonMistakes: string[];
  teachingStrategies?: string[];
  assessmentCriteria?: string[];
  practicalApplications?: string[];
  practiceTips: string[];
  crossLinguisticNotes?: string[];
  relatedGrammarPoints?: string[];
  references: string[];
  additionalResources?: string[];
}

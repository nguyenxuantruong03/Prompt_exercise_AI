export interface advancedConditionalsType {
  id: number;
  title: string;
  overview: string;

  levels: {
    "A1-A2": {
      description: string;
      content: string[];
      prerequisites?: string[];
      keyPoints?: string[];
      commonDifficulties?: string[];
    };
    "B1-B2": {
      description: string;
      content: Array<{
        [key: string]: {
          definition: string;
          types?: Array<{
            type: string;
            structure: string;
            meaning: string;
            example: string;
            usage?: string[];
            notes?: string[];
          }>;
          "basic forms"?: Array<{
            type: string;
            example: string;
            explanation?: string;
            usage?: string[];
          }>;
          note?: string;
          keyPoints?: string[];
          practiceAreas?: string[];
        };
      }>;
    };
    "C1-C2": {
      description: string;
      content: Array<{
        [key: string]: {
          advanced_usages?: Array<{
            type: string;
            details: string[];
            example: string;
            context?: string[];
            nuances?: string[];
          }>;
          advanced_forms?: Array<{
            type: string;
            structure: string;
            meaning: string;
            example: string;
            context?: string[];
            register?: string;
          }>;
          style_notes?: string[];
          common_mistakes?: string[];
          common_errors?: string[];
          subtleties?: string[];
          academicUsage?: string[];
        };
      }>;
    };
  };

  theory: {
    definition: string;
    purpose: string[];
    linguisticBackground?: string[];
    cognitiveAspects?: string[];
    pragmaticFunctions?: string[];
  };

  structures: Array<{
    name: string;
    structure: string;
    example: string;
    level?: string;
    frequency?: string;
    register?: string;
    variations?: string[];
  }>;

  examples: Array<{
    type: string;
    examples: string[];
    level?: string;
    context?: string;
    explanation?: string[];
  }>;

  common_mistakes: string[];

  usage_notes: string[];

  related_topics: string[];

  references: string[];

  // Additional comprehensive sections
  etymology?: {
    historicalDevelopment: string;
    languageEvolution: string[];
  };

  crossLinguisticComparison?: {
    similarities: string[];
    differences: string[];
    learnerL1Influence: string[];
  };

  pedagogicalApproach?: {
    teachingSequence: string[];
    commonLearnerErrors: string[];
    effectiveExplanations: string[];
  };

  advancedApplications?: {
    literaryUsage: string[];
    academicWriting: string[];
    professionalCommunication: string[];
    creativeWriting: string[];
  };

  assessmentCriteria?: {
    A1_A2: string[];
    B1_B2: string[];
    C1_C2: string[];
  };
}

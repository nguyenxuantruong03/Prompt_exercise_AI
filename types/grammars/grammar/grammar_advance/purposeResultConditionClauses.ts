export interface purposeResultConditionClausesType {
  id: number;
  title: string;
  definition: string;
  overview: {
    description: string;
    importance: string;
    usage: string;
  };
  categories: {
    type: string;
    definition: string;
    description: string;
    keyFeatures: string[];
    commonMistakes: string[];
    levels: {
      level: string;
      description: string;
      keyLearningPoints: string[];
      structures: string[];
      examples: string[];
      notes?: string;
      formalVsInformal?: {
        formal: string[];
        informal: string[];
      };
      academicUsage?: string[];
      commonErrors?: string[];
      tips?: string[];
    }[];
  }[];
  levelProgression: {
    level: string;
    description: string;
    focuses: string[];
    expectedOutcomes: string[];
  }[];
  detailedGrammarRules: {
    purposeClauses: {
      definition: string;
      functions: string[];
      types: {
        type: string;
        explanation: string;
        structures: string[];
        examples: string[];
        usageNotes: string[];
      }[];
    };
    resultClauses: {
      definition: string;
      functions: string[];
      types: {
        type: string;
        explanation: string;
        structures: string[];
        examples: string[];
        usageNotes: string[];
      }[];
    };
    conditionalClauses: {
      definition: string;
      functions: string[];
      types: {
        type: string;
        explanation: string;
        structures: string[];
        examples: string[];
        usageNotes: string[];
      }[];
    };
  };
  practicalApplications: {
    academicWriting: string[];
    businessCommunication: string[];
    dailyConversation: string[];
    examPreparation: string[];
  };
  crossReferences: {
    relatedGrammarTopics: string[];
    prerequisites: string[];
    nextSteps: string[];
  };
  notes: string[];
  references: {
    books: {
      title: string;
      author: string;
      year: number;
      pages?: string;
      description: string;
    }[];
    websites: {
      title: string;
      url: string;
      description: string;
    }[];
    academicSources: {
      title: string;
      author: string;
      journal: string;
      year: number;
      description: string;
    }[];
  };
}

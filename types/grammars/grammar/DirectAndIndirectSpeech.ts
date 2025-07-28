// DirectAndIndirectSpeech TypeScript Interface
interface LevelContent {
    definition: string;
    keyFeatures: string[];
    grammarRules: {
      rule: string;
      explanation: string;
      examples: string[];
    }[];
    commonPatterns: {
      pattern: string;
      structure: string;
      examples: string[];
      usage: string;
    }[];
    reportingVerbs: {
      verb: string;
      usage: string;
      examples: string[];
    }[];
    transformationRules: {
      directForm: string;
      indirectForm: string;
      explanation: string;
    }[];
    practicalApplications: string[];
    commonMistakes: {
      mistake: string;
      correction: string;
      explanation: string;
    }[];
  }
  
  interface References {
    books: {
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      relevantChapters: string[];
    }[];
    websites: {
      title: string;
      url: string;
      description: string;
      reliability: string;
    }[];
    academicSources: {
      title: string;
      author: string;
      journal: string;
      year: number;
      doi?: string;
    }[];
  }
  
  export interface DirectAndIndirectSpeechType {
    directAndIndirectSpeechDefinition: {
      concept: string;
      importance: string;
      corePrinciple: string;
      scope: string;
      technicalDefinition: string;
      linguisticBackground: string;
      crossLinguisticComparison: string;
    };
    
    references: References;
    
    A1: LevelContent;
    A2: LevelContent;
    B1: LevelContent;
    B2: LevelContent;
    C1: LevelContent;
    C2: LevelContent;
  }
  
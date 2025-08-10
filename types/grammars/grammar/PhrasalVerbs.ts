export interface PhrasalVerbsType {
  id: number;
  definition: string;
  purpose: string[];
  levels: {
    A1: {
      description: string;
      learningObjectives: string[];
      detailedExplanation: {
        concept: string;
        patterns: string;
        usage: string;
        importance: string;
      };
      examples: Array<{
        phrasalVerb: string;
        meaning: string;
        example: string;
        context: string;
        type: string;
        additionalExamples?: string[];
        commonMistakes?: string;
      }>;
      learningTips: string[];
      practiceActivities: string[];
      assessmentCriteria: string[];
    };
    A2: {
      description: string;
      learningObjectives: string[];
      detailedExplanation: {
        concept: string;
        patterns: string;
        usage: string;
        importance: string;
      };
      examples: Array<{
        phrasalVerb: string;
        meaning: string;
        example: string;
        context: string;
        type: string;
        additionalExamples?: string[];
        commonMistakes?: string;
      }>;
      learningTips: string[];
      practiceActivities: string[];
      assessmentCriteria: string[];
    };
    B1: {
      description: string;
      learningObjectives: string[];
      detailedExplanation: {
        concept: string;
        patterns: string;
        usage: string;
        importance: string;
      };
      examples: Array<{
        phrasalVerb: string;
        meaning: string;
        example: string;
        context: string;
        type: string;
        additionalExamples?: string[];
        commonMistakes?: string;
      }>;
      learningTips: string[];
      practiceActivities: string[];
      assessmentCriteria: string[];
    };
    B2: {
      description: string;
      learningObjectives: string[];
      detailedExplanation: {
        concept: string;
        patterns: string;
        usage: string;
        importance: string;
      };
      examples: Array<{
        phrasalVerb: string;
        meaning: string;
        example: string;
        context: string;
        type: string;
        additionalExamples?: string[];
        commonMistakes?: string;
      }>;
      learningTips: string[];
      practiceActivities: string[];
      assessmentCriteria: string[];
    };
    C1: {
      description: string;
      learningObjectives: string[];
      detailedExplanation: {
        concept: string;
        patterns: string;
        usage: string;
        importance: string;
      };
      examples: Array<{
        phrasalVerb: string;
        meaning: string;
        example: string;
        context: string;
        type: string;
        additionalExamples?: string[];
        commonMistakes?: string;
      }>;
      learningTips: string[];
      practiceActivities: string[];
      assessmentCriteria: string[];
    };
    C2: {
      description: string;
      learningObjectives: string[];
      detailedExplanation: {
        concept: string;
        patterns: string;
        usage: string;
        importance: string;
      };
      examples: Array<{
        phrasalVerb: string;
        meaning: string;
        example: string;
        context: string;
        type: string;
        additionalExamples?: string[];
        commonMistakes?: string;
      }>;
      learningTips: string[];
      practiceActivities: string[];
      assessmentCriteria: string[];
    };
  };
  learningResources: {
    books: Array<{
      title: string;
      author: string;
      publisher: string;
      level: string;
      description: string;
      link: string;
    }>;
    websites: Array<{
      name: string;
      url: string;
      description: string;
      features: string[];
    }>;
    apps: Array<{
      name: string;
      platform: string;
      description: string;
      features: string[];
    }>;
  };
  types: {
    Transitive: {
      definition: string;
      example: string;
    };
    Intransitive: {
      definition: string;
      example: string;
    };
    Separable: {
      definition: string;
      example: string;
    };
    Inseparable: {
      definition: string;
      example: string;
    };
    ThreePart: {
      definition: string;
      example: string;
    };
  };
  advancedPatterns: {
    separable: string[];
    inseparable: string[];
    threePart: string[];
  };
  context: {
    academic: string[];
    business: string[];
    everyday: string[];
  };
  collocations: {
    common: string[];
    business: string[];
    academic: string[];
  };
  learningStrategies: string[];
  ieltsTips: {
    "Band7+": string;
    DoNotOveruse: string;
    LearnInChunks: string;
  };
  examples: Array<{
    phrasalVerb: string;
    meaning: string;
    example: string;
  }>;
  recognitionTips: string[];
  commonErrors: string[];
}

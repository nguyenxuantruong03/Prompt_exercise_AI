export interface HedgingType {
  definition: string;
  purpose: string[];
  levels: {
    A1: {
      description: string;
      learningObjectives: string[];
      coreConcepts: string[];
      examples: {
        strongStatement: string;
        hedgedVersion: string;
        explanation: string;
        context: string;
        pattern: string;
      }[];
      learningTips: string[];
      practiceActivities: string[];
      commonMistakes: string[];
    };
    A2: {
      description: string;
      learningObjectives: string[];
      coreConcepts: string[];
      examples: {
        strongStatement: string;
        hedgedVersion: string;
        explanation: string;
        context: string;
        pattern: string;
      }[];
      learningTips: string[];
      practiceActivities: string[];
      commonMistakes: string[];
    };
    B1: {
      description: string;
      learningObjectives: string[];
      coreConcepts: string[];
      examples: {
        strongStatement: string;
        hedgedVersion: string;
        explanation: string;
        context: string;
        pattern: string;
      }[];
      learningTips: string[];
      practiceActivities: string[];
      commonMistakes: string[];
    };
    B2: {
      description: string;
      learningObjectives: string[];
      coreConcepts: string[];
      examples: {
        strongStatement: string;
        hedgedVersion: string;
        explanation: string;
        context: string;
        pattern: string;
      }[];
      learningTips: string[];
      practiceActivities: string[];
      commonMistakes: string[];
    };
    C1: {
      description: string;
      learningObjectives: string[];
      coreConcepts: string[];
      examples: {
        strongStatement: string;
        hedgedVersion: string;
        explanation: string;
        context: string;
        pattern: string;
      }[];
      learningTips: string[];
      practiceActivities: string[];
      commonMistakes: string[];
    };
    C2: {
      description: string;
      learningObjectives: string[];
      coreConcepts: string[];
      examples: {
        strongStatement: string;
        hedgedVersion: string;
        explanation: string;
        context: string;
        pattern: string;
      }[];
      learningTips: string[];
      practiceActivities: string[];
      commonMistakes: string[];
    };
  };
  learningPath: {
    A1: {
      week1: string;
      week2: string;
      week3: string;
      week4: string;
      week5: string;
      week6: string;
    };
    A2: {
      week1: string;
      week2: string;
      week3: string;
      week4: string;
      week5: string;
      week6: string;
    };
    B1: {
      week1: string;
      week2: string;
      week3: string;
      week4: string;
      week5: string;
      week6: string;
    };
    B2: {
      week1: string;
      week2: string;
      week3: string;
      week4: string;
      week5: string;
      week6: string;
    };
    C1: {
      week1: string;
      week2: string;
      week3: string;
      week4: string;
      week5: string;
      week6: string;
    };
    C2: {
      week1: string;
      week2: string;
      week3: string;
      week4: string;
      week5: string;
      week6: string;
    };
  };
  references: {
    books: {
      title: string;
      author: string;
      publisher: string;
      year: string;
      isbn: string;
      description: string;
    }[];
    websites: {
      name: string;
      url: string;
      description: string;
    }[];
    academicPapers: {
      title: string;
      author: string;
      journal: string;
      year: string;
      description: string;
    }[];
  };
  commonHedgingWords: string[];
  advancedPatterns: {
    modalHedging: string[];
    adverbialHedging: string[];
    quantifierHedging: string[];
    verbHedging: string[];
  };
  context: {
    academic: string[];
    business: string[];
    everyday: string[];
  };
  collocations: {
    modalCollocations: string[];
    adverbCollocations: string[];
    quantifierCollocations: string[];
    verbCollocations: string[];
  };
  learningStrategies: string[];
  ieltsTips: {
    Band7: string;
    Band8: string;
    Band9: string;
    speaking: string[];
    writing: string[];
    listening: string[];
  };
  examples: {
    strongStatement: string;
    hedgedVersion: string;
  }[];
  commonStructures: string[];
  recognitionTips: string[];
  commonErrors: string[];
}

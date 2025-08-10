export interface FuturePerfectContinuousType {
  id: number;
  level: string;
  difficulty: string;
  cefrLevel: {
    primary: string;
    secondary: string;
    description: string;
  };
  forms: {
    affirmative: string;
    negative: string;
    question: string;
    questionNegative: string;
    whQuestion: string;
    tagQuestion: string;
    conditionalForm: string;
    passiveEquivalent: string;
  };
  pronunciation: {
    stressed: string[];
    unstressed: string[];
    contractions: {
      positive: Record<string, string>;
      negative: Record<string, string>;
    };
    commonReductions: string[];
  };
  usage: Array<{
    type: string;
    description: string;
    example: string;
    level: string;
    vietnamese: string;
    frequency: string;
    formality: string;
  }>;
  timeMarkers: string[];
  adverbialExpressions: {
    duration: string[];
    intensity: string[];
    frequency: string[];
    manner: string[];
  };
  recognition: string[];
  examples: {
    affirmative: string[];
    negative: string[];
    question: string[];
    usageExamples: Record<string, string>;
  };
  detailedExamples: {
    levelC1: {
      business: string[];
      academic: string[];
      daily: string[];
      social: string[];
    };
    levelC2: {
      sophisticated: string[];
      literary: string[];
      technical: string[];
      scientific: string[];
    };
  };
  contextualUsage: {
    formal: {
      business: string;
      academic: string;
      legal: string;
      medical: string;
    };
    informal: {
      conversation: string;
      family: string;
      friends: string;
      casual: string;
    };
    specialized: {
      journalism: string;
      technology: string;
      sports: string;
      entertainment: string;
    };
  };
  commonMistakes: Array<{
    mistake: string;
    wrong: string;
    correct: string;
    explanation: string;
    level: string;
  }>;
  notes: string[];
  grammarRules: {
    formation: {
      structure: string;
      components: {
        auxiliary: string;
        perfect: string;
        continuous: string;
        timeReference: string;
      };
      verbEndings: {
        regular: string;
        irregularDoubling: string;
        yEnding: string;
        ieEnding: string;
        eEnding: string;
      };
    };
    contractions: {
      positive: string[];
      negative: string[];
    };
    questionFormation: {
      yesNo: string;
      wh: string;
      negative: string;
      tagQuestions: {
        positive: string;
        negative: string;
      };
    };
    subjectVerbAgreement: {
      rule: string;
      examples: {
        singular: string;
        plural: string;
        firstPerson: string;
      };
    };
  };
  compareWithOtherTenses: {
    vsFuturePerfect: {
      futurePerfect: string;
      futurePerfectContinuous: string;
      usage: string;
    };
    vsFutureContinuous: {
      futureContinuous: string;
      futurePerfectContinuous: string;
      usage: string;
    };
    vsPresentPerfectContinuous: {
      presentPerfectContinuous: string;
      futurePerfectContinuous: string;
      usage: string;
    };
    vsSimpleFuture: {
      simpleFuture: string;
      futurePerfectContinuous: string;
      usage: string;
    };
  };
  practiceTypes: {
    gapFill: {
      description: string;
      example: string;
      answer: string;
    };
    transformation: {
      description: string;
      example: string;
      answer: string;
    };
    errorCorrection: {
      description: string;
      example: string;
      answer: string;
    };
    contextual: {
      description: string;
      scenarios: string[];
    };
    timeline: {
      description: string;
      example: string;
    };
    rolePlay: {
      description: string;
      scenarios: string[];
    };
  };
  culturalNotes: string[];
  pedagogicalNotes: {
    teachingTips: string[];
    commonDifficulties: string[];
    progressionSuggestions: string[];
  };
  relatedGrammarPoints: {
    prerequisites: string[];
    extensions: string[];
  };
  assessmentCriteria: {
    accuracy: {
      structure: string;
      timeReference: string;
      verbForm: string;
    };
    appropriateness: {
      context: string;
      purpose: string;
      alternatives: string;
    };
    fluency: {
      pronunciation: string;
      contractions: string;
      integration: string;
    };
  };
}

import { CEFRLevel } from "../../grammars_type";
import { Citation } from "../grammar_type";

// Simple Present interface - completely separate
export interface SimplePresentType {
  id: number;
  citations?: Citation[];
  theory?: {
    usageOverview?: string[];
    structure?: {
      affirmative?: {
        form?: string;
        description?: string;
        examples?: string[];
      };
      negative?: {
        form?: string;
        description?: string;
        examples?: string[];
      };
      question?: {
        form?: string;
        description?: string;
        examples?: string[];
      };
    };
    detailedGrammarRules?: {
      [ruleName: string]: {
        explanation?: string;
        rules?: string[];
        categories?: {
          [category: string]: string[];
        };
        usageRules?: string[];
      };
    };
    generalTheory?: string;
  };
  spellingRules?: {
    [ruleName: string]: {
      rule?: string;
      examples?: string[];
      exception?: string;
      note?: string;
    };
  };
  commonMistakes?: Array<{
    mistake?: string;
    wrong?: string;
    correct?: string;
    explanation?: string;
  }>;
  forms?: {
    affirmative?: string;
    negative?: string;
    question?: string;
  };
  usage?: Array<{
    type?: string;
    description?: string;
    example?: string;
  }>;
  advancedUsagePatterns?: {
    [patternName: string]: {
      [subPattern: string]: {
        structure?: string;
        usage?: string;
        examples?: string[];
      };
    };
  };
  culturalAndContextualUsage?: {
    crossCulturalDifferences?: string[];
    registerVariations?: {
      [register: string]: string[];
    };
  };
  pronunciationGuide?: {
    [soundType: string]: {
      after?: string[];
      examples?: string[];
    };
  } & {
    commonPronunciationMistakes?: string[];
  };
  practiceExerciseTypes?: {
    [exerciseType: string]: {
      description?: string;
      example?: string;
    };
  };
  extendedExamples?: {
    [context: string]: string[];
  };
  learningTips?: string[];
  learningProgression?: {
    [level: string]: string[];
  };
  cefrLevelBreakdown?: {
    [level in CEFRLevel]?: {
      grammarPoints?: string[];
      vocabulary?: string[];
      functionalUse?: string[];
      commonSentencePatterns?: string[];
      exercises?: string[];
      errorPrevention?: string[];
      mastery?: string[];
    };
  };
  comprehensiveErrorAnalysis?: {
    [errorLevel: string]: Array<{
      error?: string;
      wrong?: string;
      correct?: string;
      frequency?: string;
      level?: string;
      explanation?: string;
    }>;
  };
  progressiveDifficulty?: {
    [levelKey: string]: string[];
  };
  pedagogicalSequencing?: {
    teachingOrder?: string[];
    assessmentCriteria?: {
      [level in CEFRLevel]?: string[];
    };
  };
  crossLinguisticAnalysis?: {
    commonL1Interferences?: {
      [language: string]: string[];
    };
    contrastiveAnalysis?: string[];
  };
  corpusBasedUsage?: {
    frequencyData?: {
      mostCommonVerbs?: string[];
      registerDistribution?: {
        [register: string]: string;
      };
      functionalDistribution?: {
        [functionName: string]: string;
      };
    };
    authenticExamples?: {
      [corpusType: string]: string[];
    };
  };
  digitalLearningIntegration?: {
    technologySupport?: string[];
    onlineResources?: string[];
  };
  researchBasedInsights?: {
    acquisitionStudies?: string[];
    errorAnalysisFindings?: string[];
    pedagogicalRecommendations?: string[];
  };
  assessmentFramework?: {
    diagnosticTools?: string[];
    rubricCriteria?: {
      [criterion: string]: string;
    };
    progressionMarkers?: string[];
  };
  futureDirections?: {
    emergingTrends?: string[];
    researchNeeds?: string[];
  };
  notes?: string[];
}

import { Citation } from "../grammar_type";

// Present Continuous interface - completely separate
export interface PresentContinuousType {
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
  notes?: string[];
}

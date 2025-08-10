import { Citation } from "../grammar_type";

// Future Perfect interface - completely separate
export interface FuturePerfectType {
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
    generalTheory?: string;
  };
  forms: {
    affirmative: {
      structure: string;
      contractions: string;
      formalVsInformal: { formal: string; informal: string };
    };
    negative: {
      structure: string;
      contractions: string;
      examples: string[];
    };
    question: {
      structure: string;
      whQuestions: string[];
      tagQuestions: string[];
    };
  };
  usage?: Array<{
    type?: string;
    description?: string;
    example?: string;
  }>;
  notes?: string[];
}

import { Citation } from "../grammar_type";

// Past Perfect interface - completely separate
export interface PastPerfectType {
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

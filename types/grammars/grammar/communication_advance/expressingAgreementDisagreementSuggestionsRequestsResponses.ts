export interface LevelContent {
  level: string;
  description: string;
  examples: string[];
  grammar_points?: string[];
  common_mistakes?: string[];
  usage_context?: string[];
}

export interface CommunicationFunction {
  level: string;
  description: string;
  definition: string;
  levelBreakdown: {
    A1?: LevelContent;
    A2?: LevelContent;
    B1?: LevelContent;
    B2?: LevelContent;
    C1?: LevelContent;
    C2?: LevelContent;
  };
  categories: {
    informal?: string[];
    formal?: string[];
    polite?: string[];
    strong?: string[];
    academic?: string[];
    business?: string[];
    basic?: string[];
    acceptingInformal?: string[];
    acceptingFormal?: string[];
    decliningInformal?: string[];
    decliningFormal?: string[];
  };
  grammar_structures: string[];
  cultural_notes: string[];
  common_mistakes: string[];
  practice_tips: string[];
  notes: string[];
}

export interface expressingAgreementDisagreementSuggestionsRequestsResponsesType {
  id: number;
  overview: {
    title: string;
    description: string;
    importance: string;
    references: {
      books: string[];
      websites: string[];
      academic_sources: string[];
    };
  };
  agreement: CommunicationFunction;
  disagreement: CommunicationFunction;
  suggestions: CommunicationFunction;
  requests: CommunicationFunction;
  responses: CommunicationFunction;
  cross_cultural_considerations: {
    description: string;
    examples: string[];
    tips: string[];
  };
  advanced_techniques: {
    diplomatic_language: string[];
    hedging_strategies: string[];
    face_saving_techniques: string[];
  };
}

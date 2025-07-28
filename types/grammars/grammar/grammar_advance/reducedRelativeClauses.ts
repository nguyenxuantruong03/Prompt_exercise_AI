export interface reducedRelativeClausesType {
  title: string;
  definition: string;
  overview: string;
  levels: {
    A1: LevelContent;
    A2: LevelContent;
    B1: LevelContent;
    B2: LevelContent;
    C1: LevelContent;
    C2: LevelContent;
  };
  structurePatterns: {
    activeVoice: string;
    passiveVoice: string;
    perfectParticiple: string;
    presentParticiple: string;
    pastParticiple: string;
    withPrepositions: string;
    withInfinitives: string;
  };
  reductionRules: {
    definingClauses: string[];
    nonDefiningClauses: string[];
    activeReduction: string[];
    passiveReduction: string[];
    prohibitedReductions: string[];
  };
  commonMistakes: string[];
  learningTips: string[];
  practiceStrategies: string[];
  linguisticNotes: string[];
  references: Reference[];
}

interface LevelContent {
  concept: string;
  detailedExplanation: string;
  examples: Example[];
  notes?: string[];
  usage: string;
  keyPoints: string[];
  difficulties?: string[];
  recommendations?: string[];
}

interface Example {
  fullRelativeClause: string;
  reducedRelativeClause: string;
  notes?: string;
  context?: string;
  register?:
    | "formal"
    | "informal"
    | "academic"
    | "literary"
    | "spoken"
    | "written";
}

interface Reference {
  title: string;
  author?: string;
  type: "book" | "website" | "article" | "journal" | "online_resource";
  url?: string;
  description: string;
}

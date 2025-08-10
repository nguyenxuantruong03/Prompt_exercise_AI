export interface VerbMeaningChange {
  verb: string;
  toV: string;
  ving: string;
  examples?: string[];
}

export interface CommonMistake {
  error: string;
  correct: string;
  note: string;
  level?: string;
}

export interface AdvancedTip {
  tip: string;
  example?: string;
  level?: string;
  formalUsage?: boolean;
}

export interface LevelBreakdown {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  focus: string[];
  keyVerbs: string[];
  structures: string[];
  learningObjectives: string[];
}

export interface Pattern {
  name: string;
  usage: string;
  examples: string[];
  verbs?: string[] | VerbMeaningChange[];
  notes?: string[];
  level: string;
  definition?: string;
  formalUsage?: string[];
  informalUsage?: string[];
  commonErrors?: CommonMistake[];
  advancedNotes?: string[];
  items?: CommonMistake[] | AdvancedTip[];
  books?: string[];
  exams?: string[];
  websites?: string[];
  onlineResources?: string[];
}

export interface Reference {
  books: string[];
  websites: string[];
  onlineResources: string[];
  academicSources: string[];
  examPreparation: string[];
}

export interface verbToVOrVingAdvancedType {
  id: number;
  topic: string;
  level: string;
  description: string;
  definition: string;
  importance: string;
  levelBreakdown: LevelBreakdown[];
  patterns: Pattern[];
  comprehensiveRules: {
    basicRules: string[];
    intermediateRules: string[];
    advancedRules: string[];
    exceptionsAndSpecialCases: string[];
  };
  commonMistakesByLevel: {
    [key: string]: CommonMistake[];
  };
  advancedTips: AdvancedTip[];
  practicalApplications: {
    academicWriting: string[];
    businessCommunication: string[];
    everydayConversation: string[];
    formalSpeaking: string[];
  };
  crossReferences: {
    relatedTopics: string[];
    prerequisiteKnowledge: string[];
    nextSteps: string[];
  };
  references: Reference;
}

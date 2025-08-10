export interface possessiveAndEmphaticAdjectivesType {
  id: number; 
  topic: string;
  levels: string[];
  overview: string;
  definition: Definition;

  // CEFR Level-based Learning Structure
  levelBasedLearning: {
    A1: LevelContent;
    A2: LevelContent;
    B1: LevelContent;
    B2: LevelContent;
    C1: LevelContent;
    C2: LevelContent;
  };

  // Complete Grammar Analysis
  grammarAnalysis: GrammarAnalysis;

  // Linguistic Theory
  linguisticTheory: LinguisticTheory;

  // Cross-linguistic Perspective
  crossLinguisticPerspective: CrossLinguisticPerspective;

  // References and Sources
  references: Reference[];
  onlineResources: OnlineResource[];
  recommendedBooks: RecommendedBook[];
  academicJournals: AcademicJournal[];
  researchPapers: ResearchPaper[];
}

interface LevelContent {
  focus: string[];
  keyPoints: string[];
  structures: string[];
  vocabulary: string[];
  commonUses: string[];
  typicalMistakes: string[];
  practiceAreas: string[];
  masteryGoals: string[];
  detailedExplanation: string;
  cognitiveLoad: string;
  prerequisiteKnowledge: string[];
  learningObjectives: string[];
  assessmentCriteria: string[];
  culturalNotes?: string[];
  registerVariation?: string[];
}

interface Definition {
  primary: string;
  detailed: string;
  linguisticClassification: string[];
  functionalDescription: string;
  semanticProperties: string[];
  syntacticProperties: string[];
  morphologicalProperties: string[];
  pragmaticFunction: string[];
}

interface GrammarAnalysis {
  morphology: {
    wordFormation: string[];
    paradigms: string[];
    variations: string[];
  };
  syntax: {
    position: string[];
    distribution: string[];
    constraints: string[];
    transformations: string[];
  };
  semantics: {
    meaningTypes: string[];
    conceptualStructure: string[];
    logicalRelations: string[];
  };
  pragmatics: {
    functionalUses: string[];
    discourseRoles: string[];
    contextualFactors: string[];
  };
}

interface LinguisticTheory {
  generativeGrammar: {
    principles: string[];
    parameters: string[];
    universalGrammar: string[];
  };
  functionalGrammar: {
    discourse_functions: string[];
    information_structure: string[];
    communicative_purposes: string[];
  };
  cognitiveGrammar: {
    conceptual_structures: string[];
    mental_representations: string[];
    cognitive_processes: string[];
  };
  usage_based_grammar: {
    frequency_effects: string[];
    exemplar_models: string[];
    construction_grammar: string[];
  };
}

interface CrossLinguisticPerspective {
  universalTendencies: string[];
  parametricVariation: string[];
  typologicalPatterns: string[];
  languageSpecificFeatures: {
    [language: string]: string[];
  };
  acquisitionPatterns: string[];
  contactPhenomena: string[];
}

interface AcademicJournal {
  name: string;
  issn: string;
  publisher: string;
  impact_factor?: number;
  relevant_articles: string[];
  url: string;
  description: string;
  level: string[];
}

interface ResearchPaper {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
  key_findings: string[];
  methodology: string;
  relevance: string;
  url?: string;
}

interface Reference {
  title: string;
  author?: string;
  publisher?: string;
  year?: number;
  type: "book" | "website" | "article" | "journal";
  description: string;
  isbn?: string;
  url?: string;
}

interface AdditionalResource {
  title: string;
  type: string;
  description: string;
  level: string;
  access: string;
}

interface OnlineResource {
  name: string;
  url: string;
  description: string;
  level: string[];
  free: boolean;
}

interface RecommendedBook {
  title: string;
  author: string;
  isbn?: string;
  level: string[];
  description: string;
  focus_areas: string[];
}

interface AssessmentCriterion {
  criterion: string;
  description: string;
  level: string;
  indicators: string[];
}

interface ProgressMarker {
  level: string;
  milestone: string;
  indicators: string[];
  assessment_method: string;
}

interface MasteryIndicator {
  level: string;
  skill: string;
  criteria: string[];
  evidence: string[];
}

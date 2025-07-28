export interface TransitionPhrase {
  phrase: string;
  definition: string;
  usage: string;
  example: string;
  formality_level: "informal" | "neutral" | "formal" | "academic";
  position: ("beginning" | "middle" | "end")[];
  punctuation_rules: string;
}

export interface TransitionCategory {
  [key: string]: TransitionPhrase[];
}

export interface LevelContent {
  description: string;
  learning_objectives: string[];
  key_concepts: string[];
  transitions: TransitionCategory;
  detailed_explanations: {
    [category: string]: {
      definition: string;
      when_to_use: string;
      structure_rules: string[];
      examples_in_context: string[];
    };
  };
  common_patterns: string[];
  practice_guidelines: string[];
}

export interface FunctionGroup {
  definition: string;
  purpose: string;
  academic_importance: string;
  phrases: TransitionPhrase[];
  usage_contexts: string[];
  combination_rules: string[];
}

export interface Reference {
  title: string;
  author: string;
  type: "book" | "website" | "academic_paper" | "style_guide";
  url?: string;
  isbn?: string;
  description: string;
  relevance: string;
}

export interface transitionPhrasesAcademicWritingType {
  topic: string;
  description: string;
  academic_definition: string;
  linguistic_background: string;
  purposes: string[];
  importance_in_academic_writing: string[];
  theoretical_framework: {
    cohesion_theory: string;
    coherence_principles: string;
    discourse_analysis: string;
  };
  levels: {
    A1: LevelContent;
    A2: LevelContent;
    B1: LevelContent;
    B2: LevelContent;
    C1: LevelContent;
    C2: LevelContent;
  };
  functions: string[];
  groupsByFunction: {
    [key: string]: FunctionGroup;
  };
  learningTips: string[];
  commonMistakes: string[];
  advanced_techniques: {
    paragraph_transitions: string[];
    section_transitions: string[];
    argument_flow: string[];
    academic_register: string[];
  };
  assessment_criteria: {
    coherence: string[];
    cohesion: string[];
    register: string[];
    sophistication: string[];
  };
  references: Reference[];
  additional_resources: {
    style_guides: string[];
    online_tools: string[];
    practice_platforms: string[];
  };
}

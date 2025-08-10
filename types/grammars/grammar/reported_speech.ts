// Comprehensive TypeScript interface for Reported Speech grammar structure
export interface ReportedSpeechType{
  id: number;
  level: string;
  complexity: string;
  cefrLevels: {
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
  forms: {
    statement: string;
    question: {
      yesNo: string;
      wh: string;
    };
    commandRequest: string;
    suggestions: string;
    advice: string;
    promises: string;
    threats: string;
    offers: string;
    refusals: string;
    accusations: string;
    compliments: string;
    warnings: string;
    reminders: string;
    invitations: string;
    apologies: string;
    congratulations: string;
    exclamations: string;
    denials: string;
    confirmations: string;
    clarifications: string;
    emphasizing: string;
    implications: string;
    specifications: string;
  };
  reportingVerbs: {
    basic: string[];
    intermediate: string[];
    advanced: string[];
    emotional: string[];
    manner: string[];
    academic: string[];
    withPrepositions: Record<string, string>;
  };
  tenseBackshifting: {
    basic: Record<string, string>;
    intermediate: Record<string, string>;
    advanced: {
      [key: string]: string | Record<string, string>;
    };
    noBackshifting: string[];
    complexCases: Record<string, string>;
  };
  usage: Array<{
    type: string;
    description: string;
    example: string;
    level: string;
    contexts: string[];
  }>;
  timeMarkers: string[];
  pronounChanges: {
    basic: Record<string, string>;
    intermediate: Record<string, string>;
    complex: Record<string, string>;
    contextualChanges: Record<string, string>;
  };
  stylistic_variations: {
    formal: {
      reportingPhrases: string[];
      academicStructures: string[];
    };
    informal: {
      conversationalReporting: string[];
    };
    literary: {
      narrativeReporting: string[];
    };
  };
  recognition: string[];
  examples: {
    statements: ExampleStructure;
    yesNoQuestions: ExampleStructure;
    whQuestions: ExampleStructure;
    commands: ExampleStructure;
    requests: ExampleStructure;
    negativeCommands: ExampleStructure;
    suggestions: ExampleStructure;
    advice: ExampleStructure;
    promises: ExampleStructure;
    threats: ExampleStructure;
    offers: ExampleStructure;
    accusations: ExampleStructure;
    apologies: ExampleStructure;
    compliments: ExampleStructure;
    warnings: ExampleStructure;
    exclamations: ExampleStructure;
    mixedTenses: ExampleStructure;
    conditionals: ExampleStructure;
    academicCitation: ExampleStructure;
    journalisticReporting: ExampleStructure;
    legalTestimony: ExampleStructure;
  };
  specialCases: {
    exclamations: SpecialCaseStructure & { patterns: string[] };
    greetings: SpecialCaseStructure;
    interjections: SpecialCaseStructure;
    questions_within_questions: SpecialCaseStructure;
    imperatives_with_conditions: SpecialCaseStructure;
    reported_thoughts: SpecialCaseStructure;
  };
  commonMistakes: {
    beginners: string[];
    intermediate: string[];
    advanced: string[];
    stylistic: string[];
  };
  practiceTypes: {
    A2_B1: string[];
    B1_B2: string[];
    B2_C1: string[];
    C1_C2: string[];
  };
  culturalContexts: {
    academic: CulturalContextStructure;
    journalism: CulturalContextStructure;
    legal: CulturalContextStructure;
    business: CulturalContextStructure;
  };
  exercises: {
    transformationDrills: ExerciseStructure;
    verbSelection: ExerciseStructure;
    contextualReporting: {
      description: string;
      difficulty: string;
      scenarios: string[];
    };
  };
  notes: string[];
  etymology: {
    origin: string;
    development: string;
    modernUsage: string;
  };
  crossLinguistic: {
    similarities: string;
    differences: string;
    learnerChallenges: string;
  };
}

// Supporting interfaces for better type organization
interface ExampleStructure {
  direct: string;
  reported: string;
  context: string;
}

interface SpecialCaseStructure {
  description: string;
  examples: string[];
}

interface CulturalContextStructure {
  description: string;
  examples: string[];
}

interface ExerciseStructure {
  description: string;
  difficulty: string;
  examples: string[];
}

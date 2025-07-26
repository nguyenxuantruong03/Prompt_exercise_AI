export interface ConditionalsType {
  "Zero Conditional": ZeroConditionalType;
  "First Conditional": FirstConditionalType;
  "Second Conditional": SecondConditionalType;
  "Third Conditional": ThirdConditionalType;
  "Mixed Conditional": MixedConditionalType;
  "Fourth Conditional (Unless)": FourthConditionalType;
  "Advanced Conditional Structures": AdvancedConditionalType;
  "Conditional Perfect and Future in the Past": ConditionalPerfectType;
  "Cultural and Contextual Conditionals": CulturalConditionalType;
  "Conditional Exercises and Practice": ConditionalExercisesType;
}

// Base interfaces for conditional structures
export interface ConditionalUsage {
  type: string;
  description: string;
  example: string;
  level: string;
  frequency: string;
  probability?: string;
  reality?: string;
  timeRelation?: string;
  emphasis?: string;
  register?: string;
  complexity?: string;
  situations: string[];
}

export interface ConditionalForms {
  [key: string]: string;
}

export interface ConditionalMistake {
  mistake: string;
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface ConditionalExercise {
  type: string;
  instruction: string;
  examples: string[];
}

export interface ModalVariation {
  certainty?: string;
  usage?: string;
  example: string;
}

export interface SpecialStructure {
  structure?: string;
  usage: string;
  examples: string[];
  description?: string;
  register?: string;
}

export interface ComplexStructure {
  description: string;
  structure?: string;
  examples?: string[];
}

export interface StrengthLevel {
  description: string;
  example: string;
  situations: string[];
}

export interface CulturalUsage {
  preferences: string[];
  examples: string[];
}

export interface ExerciseType {
  [key: string]:
    | string[]
    | Array<{
        question: string;
        options: string[];
        correct: string;
      }>;
}

// Individual conditional interfaces
export interface ZeroConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  commonMistakes: ConditionalMistake[];
  practiceExercises: ConditionalExercise[];
  notes: string[];
}

export interface FirstConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  modalVariations: { [key: string]: ModalVariation };
  commonMistakes: ConditionalMistake[];
  usageExamples: { [key: string]: string };
  notes: string[];
}

export interface SecondConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  modalVariations: { [key: string]: ModalVariation };
  specialStructures: { [key: string]: SpecialStructure };
  commonMistakes: ConditionalMistake[];
  usageExamples: { [key: string]: string };
  notes: string[];
}

export interface ThirdConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  modalVariations: { [key: string]: ModalVariation };
  specialStructures: { [key: string]: SpecialStructure };
  commonMistakes: ConditionalMistake[];
  usageExamples: { [key: string]: string };
  notes: string[];
}

export interface MixedConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  complexStructures: { [key: string]: ComplexStructure };
  modalVariations: { [key: string]: ModalVariation };
  commonMistakes: ConditionalMistake[];
  usageExamples: { [key: string]: string };
  notes: string[];
}

export interface FourthConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  equivalentStructures: {
    [key: string]: { description: string; examples: string[] };
  };
  strengthLevels: { [key: string]: StrengthLevel };
  commonMistakes: ConditionalMistake[];
  usageExamples: { [key: string]: string };
  notes: string[];
}

export interface AdvancedConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
  inversionTypes: { [key: string]: SpecialStructure & { register: string } };
  alternativeIntroducers: { [key: string]: SpecialStructure };
  conditionalProvisions: {
    [key: string]: { meaning: string; usage: string; examples: string[] };
  };
  commonMistakes: ConditionalMistake[];
}

export interface ConditionalPerfectType {
  level: string;
  difficulty: string;
  frequency: string;
  forms: ConditionalForms;
  usage: ConditionalUsage[];
  timeMarkers: string[];
}

export interface CulturalConditionalType {
  level: string;
  difficulty: string;
  frequency: string;
  culturalUsage: {
    britishEnglish: CulturalUsage;
    americanEnglish: CulturalUsage;
    businessEnglish: CulturalUsage;
    academicEnglish: CulturalUsage;
  };
}

export interface ConditionalExercisesType {
  level: string;
  exerciseTypes: {
    beginnerA1A2: ExerciseType;
    intermediateB1B2: ExerciseType;
    advancedC1C2: ExerciseType;
  };
  commonTestFormats: { [key: string]: string[] };
  practiceProgression: { [key: string]: string };
}

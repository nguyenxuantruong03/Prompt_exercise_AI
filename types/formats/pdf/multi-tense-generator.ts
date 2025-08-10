import { TensesStructure } from "@/types/grammars/grammar/grammar_type";

// Base types for values that can be safely stringified
export type PrimitiveValue = string | number | boolean | null | undefined;

// Flexible object type for data structures
export interface FlexibleObject {
  [key: string]: unknown;
}

// Union type for all stringifiable data
export type StringifiableData = PrimitiveValue | PrimitiveValue[] | FlexibleObject | FlexibleObject[];

// Type for usage data items
export interface UsageItem extends FlexibleObject {
  type?: string;
  description?: string;
  example?: string;
}

// Type for common mistakes items
export interface MistakeItem extends FlexibleObject {
  mistake?: string;
  wrong?: string;
  correct?: string;
  explanation?: string;
}

// Union types for validation functions
export type UsageData = 
  | string
  | UsageItem
  | Array<string | UsageItem>
  | FlexibleObject;

export type MistakesData = 
  | string
  | MistakeItem
  | Array<string | MistakeItem>
  | FlexibleObject;

// Type for individual tense data structure
export type TenseDataStructure = 
  | TensesStructure[keyof TensesStructure]
  | FlexibleObject;

// Type for comprehensive tense data
export interface ComprehensiveTenseData extends FlexibleObject {
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
    [key: string]: unknown;
  };
  usage?: UsageData;
  commonMistakes?: MistakesData;
}

// Type for multi-tense PDF data
export interface MultiTensePDFData {
  [tenseName: string]: ComprehensiveTenseData;
}

// Type for PDF table node structure (used in pdfmake)
export interface PDFTableNode {
  table: {
    body: unknown[][];
  };
}

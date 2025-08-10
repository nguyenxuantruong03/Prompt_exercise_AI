import type { GrammarElement } from "../grammar-analysis-modal";

export type { GrammarElement };

export interface IdentifyFunction {
  (sentence: string, elements: GrammarElement[], elementId: number):
    | GrammarElement[]
    | void;
}

export interface TenseInfo {
  tense?: string;
  aspect?: string;
  voice?: string;
  mood?: string;
  confidence?: number;
}

export interface ContextualInfo {
  position?: string;
  precedingWords?: string;
  followingWords?: string;
  grammaticalFunction?: string;
  semanticRole?: string;
}

export interface adverbPositionMeaningChangeType {
  id: number;
  A1: {
    description: string;
    examples: Array<{
      adverb: string;
      positions: {
        [position: string]: {
          sentence: string;
          meaning: string;
        };
      };
      notes?: string;
    }>;
  };
  A2: {
    description: string;
    examples: Array<{
      adverb: string;
      positions: {
        [position: string]: {
          sentence: string;
          meaning: string;
        };
      };
      notes?: string;
    }>;
  };
  B1: {
    description: string;
    examples: Array<{
      adverb: string;
      positions: {
        [position: string]: {
          sentence: string;
          meaning: string;
        };
      };
      notes?: string;
    }>;
  };
  B2: {
    description: string;
    examples: Array<{
      adverb: string;
      positions: {
        [position: string]: {
          sentence: string;
          meaning: string;
        };
      };
      notes?: string;
    }>;
  };
  C1: {
    description: string;
    examples: Array<{
      adverb: string;
      positions: {
        [position: string]: {
          sentence: string;
          meaning: string;
        };
      };
      notes?: string;
    }>;
  };
  C2: {
    description: string;
    examples: Array<{
      adverb: string;
      positions: {
        [position: string]: {
          sentence: string;
          meaning: string;
        };
      };
      notes?: string;
    }>;
  };
  adverbPositionMeaningChange_vocab: {
    definition: string;
    academicReferences: Array<{
      title: string;
      author: string;
      publisher: string;
      year: number;
      isbn?: string;
      url?: string;
      description: string;
    }>;
    categories: {
      [adverb: string]: {
        positions: {
          [position: string]: {
            meaning: string;
            example: string;
            frequency: "common" | "uncommon" | "rare";
            formality: "formal" | "informal" | "neutral";
          };
        };
        semanticField: string;
        pragmaticFunction: string;
      };
    };
    CEFR_levels: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
    };
    common_patterns: Array<{
      adverb: string;
      positions: string[];
      meaning_changes: string[];
      syntacticRules: string[];
      examples: string[];
    }>;
    usage_examples: string[];
    common_mistakes: Array<{
      mistake: string;
      correction: string;
      explanation: string;
      level: string;
    }>;
    learning_tips: string[];
    advancedConcepts: {
      scopeAmbiguity: {
        definition: string;
        examples: Array<{
          sentence: string;
          interpretations: string[];
        }>;
      };
      focusParticles: {
        definition: string;
        examples: Array<{
          adverb: string;
          sentences: Array<{
            sentence: string;
            focus: string;
            meaning: string;
          }>;
        }>;
      };
      prosody: {
        definition: string;
        stressPatterns: Array<{
          sentence: string;
          stressedWord: string;
          meaning: string;
        }>;
      };
    };
  };
  generalNotes: {
    importance: string;
    tips: string[];
    linguisticPrinciples: Array<{
      principle: string;
      explanation: string;
      examples: string[];
    }>;
    crossLinguisticComparisons: Array<{
      language: string;
      comparison: string;
      example: string;
    }>;
  };
}

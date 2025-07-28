export interface adverbialClauseAdvancedType {
  topic: string;
  level: string;
  definition: string;
  structure: string;
  levelProgressions: {
    [level: string]: {
      focus: string;
      concepts: string[];
      keyStructures: string[];
      examples: string[];
      commonErrors: string[];
      teachingTips: string[];
    };
  };
  clauseTypes: {
    name: string;
    definition: string;
    level: string;
    examples: string[];
    connectors: string[];
    notes: string[];
    formalityLevel?: "formal" | "informal" | "neutral";
    frequency?: "common" | "frequent" | "rare";
    register?: "academic" | "conversational" | "literary";
    detailedExplanation: string;
    contextualUsage: string[];
    crossLinguisticNotes?: string[];
  }[];
  reductions: {
    description: string;
    prerequisiteLevel: string;
    forms: {
      form: string;
      structure: string;
      example: string;
      usage?: string;
      level: string;
      restrictions: string[];
      commonErrors: string[];
    }[];
    advancedReductions: {
      type: string;
      structure: string;
      examples: string[];
      conditions: string[];
      level: string;
    }[];
  };
  inversion: {
    description: string;
    level: string;
    types: {
      type: string;
      condition: string;
      structure: string;
      examples: {
        original: string;
        inverted: string;
        level: string;
        register: string;
      }[];
    }[];
  };
  punctuationRules: {
    commaUsage: {
      rule: string;
      examples: string[];
      exceptions: string[];
    }[];
    advancedPunctuation: {
      rule: string;
      examples: string[];
      level: string;
    }[];
  };
  stylisticVariations: {
    formal: {
      connectors: string[];
      examples: string[];
      contexts: string[];
    };
    informal: {
      connectors: string[];
      examples: string[];
      contexts: string[];
    };
    academic: {
      connectors: string[];
      examples: string[];
      contexts: string[];
    };
  };
  commonMistakes: {
    error: string;
    correction: string;
    level: string;
    explanation: string;
  }[];
  usageTips: {
    tip: string;
    level: string;
    examples: string[];
  }[];
  advancedExamples: {
    sentence: string;
    level: string;
    analysis: string;
    clauseType: string;
  }[];
  crossReferences: {
    relatedTopics: string[];
    prerequisites: string[];
    nextSteps: string[];
  };
  culturalNotes: {
    note: string;
    examples: string[];
    context: string;
  }[];
  assessmentCriteria: {
    level: string;
    criteria: string[];
    canDoStatements: string[];
  }[];
  references: {
    title: string;
    author?: string;
    type: "book" | "website" | "journal" | "grammar" | "corpus";
    url?: string;
    description: string;
    relevance: string;
  }[];
}

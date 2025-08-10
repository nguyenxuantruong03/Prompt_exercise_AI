export interface RelativeClausesType{
  id: number;
  level: string;
  difficulty: {
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
  forms: {
    defining: string;
    nonDefining: string;
    reduced: string;
    prepositionRelative: string;
    quantifierRelative: string;
    doubleRelative: string;
    contactClause: string;
    cleftSentence: string;
    pseudoCleft: string;
    conditionalRelative: string;
    nominalRelative: string;
  };
  usage: Array<{
    type: string;
    level: string;
    description: string;
    example: string;
    function: string;
    subcategories?: {
      restrictive?: string;
      identifying?: string;
      distinguishing?: string;
      descriptive?: string;
      explanatory?: string;
      parenthetical?: string;
    };
    reductionRules?: {
      activeReduction: string;
      passiveReduction: string;
      adjectiveReduction: string;
      infinitiveReduction: string;
    };
    variations?: {
      consequence: string;
      evaluation: string;
      elaboration: string;
    };
    types?: {
      nominal: string;
      adverbial: string;
      universal: string;
    };
    conditions?: string;
    patterns?: {
      itCleft: string;
      whatCleft: string;
      pseudoCleft: string;
    };
  }>;
  relativePronouns: {
    who: RelativePronounDetails;
    whom: RelativePronounDetails;
    whose: RelativePronounDetails;
    which: RelativePronounDetails;
    that: RelativePronounDetails;
    where: RelativePronounDetails;
    when: RelativePronounDetails;
    why: RelativePronounDetails;
    what: RelativePronounDetails;
    whoever: RelativePronounDetails;
    whatever: RelativePronounDetails;
    whichever: RelativePronounDetails;
    however: RelativePronounDetails;
    whenever: RelativePronounDetails;
    wherever: RelativePronounDetails;
  };
  advancedStructures: {
    prepositionRelative: {
      formal: string;
      informal: string;
      level: string;
      notes: string;
      commonPrepositions: {
        "in which": string;
        "on which": string;
        "at which": string;
        "by which": string;
        "for which": string;
        "with which": string;
        "from which": string;
        "to which": string;
      };
      avoidance: string;
    };
    quantifierRelative: {
      examples: string[];
      level: string;
      structure: string;
      quantifiers: {
        all: string;
        most: string;
        many: string;
        some: string;
        few: string;
        none: string;
        several: string;
        both: string;
        either: string;
        neither: string;
        half: string;
        one: string;
        two: string;
      };
    };
    sententialRelative: {
      examples: string[];
      level: string;
      notes: string;
      functions: {
        consequence: string;
        evaluation: string;
        elaboration: string;
        contrast: string;
        explanation: string;
      };
    };
    embeddedRelative: {
      examples: string[];
      level: string;
      notes: string;
      complexity: string;
      alternatives: string;
    };
    nominalRelative: {
      examples: string[];
      level: string;
      notes: string;
      positions: string;
    };
    conditionalRelative: {
      examples: string[];
      level: string;
      notes: string;
      meaning: string;
    };
    temporalRelative: {
      examples: string[];
      level: string;
      notes: string;
      alternatives: string;
    };
  };
  recognition: string[];
  examples: {
    defining: string[];
    nonDefining: string[];
    reduced: string[];
    advanced: string[];
    contact: string[];
    cleft: string[];
    pseudoCleft: string[];
  };
  commonMistakes: Array<{
    mistake: string;
    wrong: string;
    correct: string;
    level: string;
    explanation: string;
  }>;
  practiceTypes: {
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  };
  stylistics: {
    register: {
      formal: {
        characteristics: string;
        examples: string[];
      };
      informal: {
        characteristics: string;
        examples: string[];
      };
      academic: {
        characteristics: string;
        examples: string[];
      };
    };
    emphasis: {
      cleftSentences: string;
      pseudoClefts: string;
      fronting: string;
    };
    cohesion: {
      textBinding: string;
      informationFlow: string;
      topicContinuity: string;
    };
  };
  notes: string[];
  communicativeFunctions: {
    description: string;
    identification: string;
    classification: string;
    evaluation: string;
    elaboration: string;
    emphasis: string;
    cohesion: string;
    precision: string;
  };
  pedagogicalProgression: {
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
}

interface RelativePronounDetails {
  usage: string;
  level: string;
  examples: string[];
  notes: string;
  formality?: string;
  alternatives?: string;
  structure?: string;
  metaphorical?: string;
  omission?: string;
  emphasis?: string;
  function?: string;
  attitude?: string;
  limitation?: string;
  frequency?: string;
  restrictions?: string;
}

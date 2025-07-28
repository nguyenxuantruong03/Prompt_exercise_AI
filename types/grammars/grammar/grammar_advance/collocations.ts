export interface collocationsType {
  topic: string;
  level: string;
  definition: string;
  importance: string[];
  categories: {
    basedOnWordType: {
      verbNoun: {
        definition: string;
        examples: string[];
      };
      adjectiveNoun: {
        definition: string;
        examples: string[];
      };
      nounNoun: {
        definition: string;
        examples: string[];
      };
      adverbVerb: {
        definition: string;
        examples: string[];
      };
      verbAdverb: {
        definition: string;
        examples: string[];
      };
      adjectiveAdverb: {
        definition: string;
        examples: string[];
      };
      prepositionNoun: {
        definition: string;
        examples: string[];
      };
      nounPreposition: {
        definition: string;
        examples: string[];
      };
      verbPreposition: {
        definition: string;
        examples: string[];
      };
    };
    basedOnStrength: {
      strongCollocations: {
        definition: string;
        examples: string[];
      };
      weakCollocations: {
        definition: string;
        examples: string[];
      };
    };
    basedOnRegister: {
      informal: {
        examples: string[];
      };
      neutral: {
        examples: string[];
      };
      formal: {
        examples: string[];
      };
      academic: {
        examples: string[];
      };
    };
  };
  collocationChunksByCEFR: {
    A1: {
      definition: string;
      keyFocus: string[];
      examples: string[];
      structures: string[];
      commonPatterns: {
        verbNoun: string[];
        adjectiveNoun: string[];
        basicPhrases: string[];
      };
      mustKnowCollocations: string[];
    };
    A2: {
      definition: string;
      keyFocus: string[];
      examples: string[];
      structures: string[];
      commonPatterns: {
        verbNoun: string[];
        adjectiveNoun: string[];
        prepositionPhrases: string[];
        timeExpressions: string[];
      };
      mustKnowCollocations: string[];
    };
    B1: {
      definition: string;
      keyFocus: string[];
      examples: string[];
      structures: string[];
      commonPatterns: {
        verbNoun: string[];
        adjectiveNoun: string[];
        nounPreposition: string[];
        verbPreposition: string[];
        expressionsWithMakeDoTakeGive: string[];
      };
      mustKnowCollocations: string[];
    };
    B2: {
      definition: string;
      keyFocus: string[];
      examples: string[];
      structures: string[];
      commonPatterns: {
        verbNoun: string[];
        adjectiveNoun: string[];
        nounPreposition: string[];
        verbPreposition: string[];
        adverbAdjective: string[];
        businessCollocations: string[];
        academicCollocations: string[];
      };
      mustKnowCollocations: string[];
    };
    C1: {
      definition: string;
      keyFocus: string[];
      examples: string[];
      structures: string[];
      commonPatterns: {
        verbNoun: string[];
        adjectiveNoun: string[];
        nounPreposition: string[];
        verbPreposition: string[];
        adverbAdjective: string[];
        formalRegister: string[];
        academicWriting: string[];
        businessCommunication: string[];
        literaryExpressions: string[];
      };
      mustKnowCollocations: string[];
    };
    C2: {
      definition: string;
      keyFocus: string[];
      examples: string[];
      structures: string[];
      commonPatterns: {
        verbNoun: string[];
        adjectiveNoun: string[];
        nounPreposition: string[];
        verbPreposition: string[];
        adverbAdjective: string[];
        idiomaticCollocations: string[];
        technicalCollocations: string[];
        literaryCollocations: string[];
        legalBusinessCollocations: string[];
        advancedAcademicCollocations: string[];
      };
      mustKnowCollocations: string[];
    };
  };
  specialTopics: {
    collocationsWithMakeVsDo: {
      make: string[];
      do: string[];
    };
    collocationsWithTakeVsGet: {
      take: string[];
      get: string[];
    };
    collocationsWithHaveVsGet: {
      have: string[];
      get: string[];
    };
  };
  commonErrors: string[];
  learningTips: string[];
  activities: string[];
  references: {
    books: string[];
    dictionaries: string[];
    websites: string[];
    academicSources: string[];
  };
}

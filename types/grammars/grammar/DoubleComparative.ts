export interface DoubleComparativeType {
  id: number;
  doubleComparativeDefinition: {
    basicDefinition: string;
    grammaticalFunction: string;
    keyCharacteristics: string[];
    morphologicalFeatures: {
      standard: string;
      nounBased: string;
      verbBased: string;
    };
    positionInSentence: {
      initial: string;
      parallel: string;
      proportional: string;
    };
  };
  A1: {
    basicDoubleComparatives: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicMoreMore: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicLessLess: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    basicMoreLess: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };
  A2: {
    expandedDoubleComparatives: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeWithNouns: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeWithAdverbs: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeWithVerbs: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };
  B1: {
    sophisticatedDoubleComparatives: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativePhrases: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeClauses: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeIntensifiers: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };
  B2: {
    complexDoubleComparativeStructures: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeIdioms: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativePrepositions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    doubleComparativeConjunctions: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };
  C1: {
    sophisticatedDoubleComparativeStructures: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    academicDoubleComparatives: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    literaryDoubleComparatives: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    technicalDoubleComparatives: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
  };
  C2: {
    rareAndObscure: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
    };
    domainSpecific: {
      definition: string;
      legal: string[];
      medical: string[];
      scientific: string[];
      business: string[];
    };
    stylisticDoubleComparatives: {
      definition: string;
      formal: string[];
      poetic: string[];
      academic: string[];
    };
    contextualMastery: {
      definition: string;
      formalWriting: string;
      creativeWriting: string;
      casualSpeech: string;
      technicalWriting: string;
    };
  };
  DoubleComparative: {
    structure: {
      standard: string;
      examples: string[];
    };
    usage: string[];
    recognition: string[];
    examples: string[];
    variations: {
      with_nouns: string;
      with_verbs_only: string;
    };
    notes: string[];
    commonErrors: string[];
  };
  advancedDoubleComparativePatterns: {
    doubleComparativeFormation: {
      definition: string;
      standard: {
        definition: string;
        pattern: string;
        examples: string[];
      };
      nounBased: {
        definition: string;
        pattern: string;
        examples: string[];
      };
      verbBased: {
        definition: string;
        pattern: string;
        examples: string[];
      };
    };
    doubleComparativeStructures: {
      definition: string;
      basicStructure: {
        pattern: string;
        examples: string[];
      };
      complexStructure: {
        pattern: string;
        examples: string[];
      };
      clauseStructure: {
        pattern: string;
        examples: string[];
      };
      phraseStructure: {
        pattern: string;
        examples: string[];
      };
    };
    doubleComparativeModifiers: {
      definition: string;
      intensifiers: {
        examples: string[];
        usage: string;
      };
      approximators: {
        examples: string[];
        usage: string;
      };
      qualifiers: {
        examples: string[];
        usage: string;
      };
    };
    doubleComparativeClauses: {
      definition: string;
      thatClauses: {
        examples: string[];
        usage: string;
      };
      relativeClauses: {
        examples: string[];
        usage: string;
      };
      infinitiveClauses: {
        examples: string[];
        usage: string;
      };
    };
  };
  doubleComparativeCollocations: {
    commonPairs: string[];
    academicCollocations: string[];
    businessCollocations: string[];
    literaryCollocations: string[];
  };
  doubleComparativeGenreUsage: {
    academic: {
      description: string;
      examples: string[];
      characteristics: string[];
    };
    journalistic: {
      description: string;
      examples: string[];
      principles: string[];
    };
    literary: {
      description: string;
      examples: string[];
      techniques: string[];
    };
    technical: {
      description: string;
      examples: string[];
      strategies: string[];
    };
  };
  doubleComparativeFrequencyAndRegister: {
    highFrequency: {
      definition: string;
      examples: string[];
      usage: string;
    };
    mediumFrequency: {
      definition: string;
      examples: string[];
      usage: string;
    };
    lowFrequency: {
      definition: string;
      examples: string[];
      usage: string;
    };
    registerSpecific: {
      formal: string[];
      informal: string[];
      technical: string[];
      literary: string[];
    };
  };
  doubleComparativeExercises: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
    interactive: string[];
  };
  doubleComparativeAssessment: {
    criteria: string[];
    rubrics: {
      beginner: string;
      intermediate: string;
      advanced: string;
      mastery: string;
    };
    commonErrors: string[];
  };
  doubleComparativeLearningStrategies: string[];
  doubleComparativeInTests: string[];
  commonDoubleComparativeMistakes: {
    structureErrors: string[];
    parallelStructureErrors: string[];
    usageErrors: string[];
  };
}

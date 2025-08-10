export interface VerbsType {
  id: number;
  definition: string;
  types: {
    actionVerbs: {
      description: string;
      examples: string[];
    };
    stativeVerbs: {
      description: string;
      examples: string[];
    };
    transitiveVerbs: {
      description: string;
      examples: string[];
    };
    intransitiveVerbs: {
      description: string;
      examples: string[];
    };
    linkingVerbs: {
      description: string;
      examples: string[];
    };
    auxiliaryVerbs: {
      description: string;
      examples: string[];
    };
    modalVerbs: {
      description: string;
      examples: string[];
    };
    phrasalVerbs: {
      description: string;
      examples: string[];
      types?: {
        transitive: string;
        intransitive: string;
        separable: string;
        inseparable: string;
        threePart: string;
      };
      levels?: {
        A1: string[];
        A2: string[];
        B1: string[];
        B2: string[];
        C1: string[];
        C2: string[];
      };
      academic?: string[];
      business?: string[];
      pronunciation?: {
        stress: string;
        intonation: string;
        linking: string;
      };
      commonErrors?: string[];
      learningTips?: string[];
    };
    regularVerbs: {
      description: string;
      examples: string[];
    };
    irregularVerbs: {
      description: string;
      examples: string[];
    };
  };
  usage: Array<{
    type: string;
    example: string;
  }>;
  verbFormations: {
    regular: {
      presentSimple: {
        base: string;
        thirdPerson: string;
        rules: string[];
      };
      pastSimple: {
        formation: string;
        pronunciation: {
          [key: string]: string[];
        };
      };
      presentParticiple: {
        formation: string;
        spellingRules: string[];
      };
    };
    irregular: {
      commonPatterns: {
        vowelChange: {
          [key: string]: string[];
        };
        noChange: string[];
        unique: string[];
      };
      frequencyGroups: {
        highFrequency: string[];
        mediumFrequency: string[];
        lowFrequency: string[];
      };
    };
  };
  verbFunctions: {
    mainVerbs: {
      definition: string;
      types: {
        action: string[];
        state: string[];
        process: string[];
      };
    };
    auxiliaries: {
      primary: {
        be: {
          uses: string[];
          examples: string[];
        };
        have: {
          uses: string[];
          examples: string[];
        };
        do: {
          uses: string[];
          examples: string[];
        };
      };
      modal: {
        core: {
          [key: string]: string[];
        };
        semiModal: {
          [key: string]: string[];
        };
      };
    };
  };
  verbAspects: {
    simple: {
      definition: string;
      uses: string[];
      examples: string[];
    };
    progressive: {
      definition: string;
      uses: string[];
      examples: string[];
    };
    perfect: {
      definition: string;
      uses: string[];
      examples: string[];
    };
    perfectProgressive: {
      definition: string;
      uses: string[];
      examples: string[];
    };
  };
  advancedPatterns: {
    conditionals: {
      zero: {
        structure: string;
        usage: string;
        example: string;
      };
      first: {
        structure: string;
        usage: string;
        example: string;
      };
      second: {
        structure: string;
        usage: string;
        example: string;
      };
      third: {
        structure: string;
        usage: string;
        example: string;
      };
      mixed: {
        structure: string;
        usage: string;
        example: string;
      };
    };
    passiveVoice: {
      basic: string;
      tenseFormations: {
        [key: string]: string;
      };
      uses: string[];
    };
  };
  verbCollocations: {
    verb_noun: {
      common: string[];
      business: string[];
      academic: string[];
    };
    verb_preposition: {
      movement: string[];
      abstract: string[];
      emotional: string[];
    };
    verb_verb: {
      infinitive: string[];
      gerund: string[];
    };
  };
  verbRegister: {
    formal: {
      characteristics: string[];
      examples: string[];
      contexts: string[];
    };
    informal: {
      characteristics: string[];
      examples: string[];
      contexts: string[];
    };
  };
  teachingSequence: {
    beginner: {
      focus: string[];
      activities: string[];
    };
    intermediate: {
      focus: string[];
      activities: string[];
    };
    advanced: {
      focus: string[];
      activities: string[];
    };
  };
  verbCategories: {
    mainCategories: {
      lexicalVerbs: {
        definition: string;
        types: string[];
        examples: {
          [key: string]: string[];
        };
      };
      auxiliaryVerbs: {
        primary: {
          be: {
            forms: string[];
            uses: string[];
          };
          have: {
            forms: string[];
            uses: string[];
          };
          do: {
            forms: string[];
            uses: string[];
          };
        };
        modal: {
          core: {
            present: {
              [key: string]: {
                meanings: string[];
                examples: string[];
              };
            };
            past: {
              [key: string]: {
                meanings: string[];
                examples: string[];
              };
            };
          };
          semiModal: {
            [key: string]: {
              meanings: string[];
              examples: string[];
            };
          };
        };
      };
    };
    verbPatterns: {
      basic: {
        intransitive: {
          definition: string;
          examples: string[];
          commonVerbs: string[];
        };
        transitive: {
          definition: string;
          examples: string[];
          commonVerbs: string[];
        };
        ditransitive: {
          definition: string;
          examples: string[];
          commonVerbs: string[];
        };
      };
      advanced: {
        ergative: {
          definition: string;
          examples: string[];
          commonVerbs: string[];
        };
        reciprocal: {
          definition: string;
          examples: string[];
          commonVerbs: string[];
        };
        copular: {
          definition: string;
          examples: string[];
          commonVerbs: string[];
        };
      };
    };
    aspectualFeatures: {
      telic: {
        definition: string;
        examples: string[];
        characteristics: string[];
      };
      atelic: {
        definition: string;
        examples: string[];
        characteristics: string[];
      };
      stative: {
        definition: string;
        examples: string[];
        characteristics: string[];
      };
      dynamic: {
        definition: string;
        examples: string[];
        characteristics: string[];
      };
    };
  };
  tenseFormations: {
    present: {
      simple: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      continuous: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      perfect: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      perfectContinuous: {
        formation: string;
        uses: string[];
        examples: string[];
      };
    };
    past: {
      simple: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      continuous: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      perfect: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      perfectContinuous: {
        formation: string;
        uses: string[];
        examples: string[];
      };
    };
    future: {
      simple: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      continuous: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      perfect: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      perfectContinuous: {
        formation: string;
        uses: string[];
        examples: string[];
      };
    };
  };
  advancedConcepts: {
    subjunctive: {
      definition: string;
      types: {
        present: {
          formation: string;
          examples: string[];
        };
        past: {
          formation: string;
          examples: string[];
        };
      };
    };
    gerunds: {
      definition: string;
      uses: string[];
      examples: string[];
    };
    infinitives: {
      definition: string;
      types: {
        bare: {
          examples: string[];
        };
        full: {
          examples: string[];
        };
      };
    };
    participles: {
      present: {
        formation: string;
        uses: string[];
        examples: string[];
      };
      past: {
        formation: string;
        uses: string[];
        examples: string[];
      };
    };
  };
  whatToLearn: {
    A1: {
      focus: string;
      keyPoints: string[];
      commonVerbs: string[];
      structures: string[];
      expectedOutcomes: string[];
    };
    A2: {
      focus: string;
      keyPoints: string[];
      newStructures: string[];
      phrasalVerbs: string[];
      expectedOutcomes: string[];
    };
    B1: {
      focus: string;
      keyPoints: string[];
      complexStructures: string[];
      expectedOutcomes: string[];
    };
    B2: {
      focus: string;
      keyPoints: string[];
      advancedPatterns: string[];
      expectedOutcomes: string[];
    };
    C1: {
      focus: string;
      keyPoints: string[];
      academicPatterns: string[];
      expectedOutcomes: string[];
    };
    C2: {
      focus: string;
      keyPoints: string[];
      specializedAreas: {
        literary: string[];
        academic: string[];
        professional: string[];
      };
      expectedOutcomes: string[];
    };
  };
}

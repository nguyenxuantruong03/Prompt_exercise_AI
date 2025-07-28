export interface infinitivePatternsType {
  topic: string;
  level: string;
  definition: string;
  form: {
    baseInfinitive: string;
    fullInfinitive: string;
  };
  infinitive_Patterns_vocab: {
    basic_to_infinitive: string[];
    verb_object_to_infinitive: string[];
    verb_wh_to_infinitive: string[];
    adjectives_to_infinitive: string[];
    noun_phrase_to_infinitive: string[];
    it_as_subject_with_infinitive: string[];
    infinitive_as_subject: string[];
    infinitive_as_object: string[];
    infinitive_as_complement: string[];
  };
  categories: {
    A1_A2: {
      basicUse: {
        explanation: string;
        examples: string[];
        commonVerbs: string[];
        purpose: {
          pattern: string;
          examples: string[];
        };
      };
      infinitiveOfPurpose: {
        explanation: string;
        pattern: string;
        examples: string[];
        commonExpressions: string[];
      };
      basicAdjectives: {
        explanation: string;
        pattern: string;
        examples: string[];
        commonAdjectives: string[];
      };
      timeExpressions: {
        explanation: string;
        pattern: string;
        examples: string[];
        commonTimeWords: string[];
      };
    };
    B1_B2: {
      verbsFollowedByToInfinitive: {
        pattern: string;
        explanation: string;
        commonVerbs: string[];
        examples: string[];
      };
      verbObjectToInfinitive: {
        pattern: string;
        explanation: string;
        commonVerbs: string[];
        examples: string[];
      };
      adjectivesFollowedByInfinitives: {
        pattern: string;
        explanation: string;
        examples: string[];
      };
      infinitiveAfterWh: {
        explanation: string;
        pattern: string;
        examples: string[];
        commonWhWords: string[];
      };
      tooAndEnough: {
        explanation: string;
        patterns: string[];
        examples: string[];
        commonMistakes: string[];
      };
      inOrderTo: {
        explanation: string;
        pattern: string;
        examples: string[];
        alternatives: string[];
      };
    };
    C1_C2: {
      causativeStructures: {
        explanation: string;
        bareInfinitiveVerbs: string[];
        patterns: string[];
        examples: string[];
      };
      perceptionVerbs: {
        explanation: string;
        examples: string[];
      };
      infinitiveAfterQuestionWords: {
        explanation: string;
        pattern: string;
        examples: string[];
      };
      passiveInfinitive: {
        explanation: string;
        pattern: string;
        examples: string[];
      };
      perfectInfinitive: {
        explanation: string;
        pattern: string;
        examples: string[];
      };
      modalPerfectInfinitive: {
        explanation: string;
        examples: string[];
      };
      advancedReportingStructures: {
        explanation: string;
        patterns: string[];
        examples: string[];
      };
      continuousInfinitive: {
        explanation: string;
        pattern: string;
        examples: string[];
      };
      perfectContinuousInfinitive: {
        explanation: string;
        pattern: string;
        examples: string[];
      };
      splitInfinitives: {
        explanation: string;
        examples: string[];
        modernUsage: string[];
      };
    };
  };
  specialNotes: {
    differenceToGerunds: string;
    verbListOverlap: {
      dualUsageVerbs: {
        verbs: string[];
        examples: {
          [key: string]: string[];
        };
      };
    };
    infinitiveVsBareInfinitive: {
      explanation: string;
      toInfinitive: string[];
      bareInfinitive: string[];
    };
    registerAndStyle: {
      formal: string[];
      informal: string[];
      academic: string[];
    };
    crossLinguisticInfluence: {
      explanation: string;
      commonL1Interferences: string[];
    };
  };
  commonMistakes: {
    incorrectUse: string[];
    confusionWithGerunds: string[];
    bareVsToInfinitive: string[];
    wordOrder: string[];
    prepositionErrors: string[];
  };
  tips: {
    mnemonic: string;
    learnWithExamples: string;
    dictionaryHelp: string;
    practiceStrategies: string[];
    memoryTechniques: string[];
  };
  references: string[];
  reducedInfinitiveStructures: {
    explanation: string;
    patterns: string[];
    examples: string[];
    notes: string;
  };
  infinitiveWithPrepositions: {
    explanation: string;
    patterns: string[];
    examples: string[];
  };
  infinitiveInFormalDefinitions: {
    explanation: string;
    examples: string[];
    usageNote: string;
  };
  infinitivesWithTooAndEnough: {
    explanation: string;
    patterns: string[];
    examples: string[];
    commonMistakes: string[];
  };
  subjectInfinitives: {
    explanation: string;
    patterns: string[];
    examples: string[];
    formalRegisterNote: string;
  };
  extraposedInfinitiveSubjects: {
    explanation: string;
    pattern: string;
    examples: string[];
    grammarNote: string;
  };
  infinitiveInFixedPhrases: {
    explanation: string;
    phrases: string[];
    examples: string[];
    usageContext: string;
  };
  pseudoInfinitiveWithWhyNot: {
    explanation: string;
    pattern: string;
    examples: string[];
    levelNote: string;
  };
  advancedStructures: {
    forSbToDoStructure: {
      explanation: string;
      pattern: string;
      examples: string[];
      formalUsage: string[];
    };
    subjectRaisingVerbs: {
      explanation: string;
      verbs: string[];
      examples: string[];
      comparison: string;
    };
    objectRaisingVerbs: {
      explanation: string;
      verbs: string[];
      examples: string[];
      comparison: string;
    };
    infinitiveInConditionals: {
      explanation: string;
      patterns: string[];
      examples: string[];
      advancedUsage: string[];
    };
  };
  culturalAndContextualUsage: {
    businessEnglish: string[];
    academicWriting: string[];
    legalLanguage: string[];
    technicalWriting: string[];
  };
  dialectalVariations: {
    britishVsAmerican: {
      differences: string[];
      examples: string[];
    };
    regionalVariations: string[];
  };
}

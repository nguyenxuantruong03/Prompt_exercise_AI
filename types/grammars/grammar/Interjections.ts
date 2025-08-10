export interface InterjectionsType {
  id: number;
  // Definition and Overview
  interjectionDefinition: {
    basicDefinition: string;
    grammaticalFunction: string;
    keyCharacteristics: string[];
    morphologicalFeatures: {
      simple: string;
      compound: string;
      onomatopoeic: string;
    };
    positionInSentence: {
      beginning: string;
      middle: string;
      end: string;
      standalone: string;
    };
  };

  // A1 Level - Basic Interjections
  A1: {
    basicEmotionalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
    };
    basicGreetingInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
    };
    basicReactionInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
    };
    basicPainInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
    };
    learningResources: {
      textbooks: string[];
      websites: string[];
      videos: string[];
      practiceActivities: string[];
    };
  };

  // A2 Level - Elementary Interjections
  A2: {
    expandedEmotionalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
    };
    approvalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
    };
    hesitationInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
    };
    surpriseInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
    };
    learningResources: {
      textbooks: string[];
      websites: string[];
      videos: string[];
      practiceActivities: string[];
    };
  };

  // B1 Level - Intermediate Interjections
  B1: {
    sophisticatedEmotionalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
    };
    commandInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
    };
    sarcasticInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
    };
    reliefInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
    };
    learningResources: {
      textbooks: string[];
      websites: string[];
      videos: string[];
      practiceActivities: string[];
      academicPapers: string[];
    };
  };

  // B2 Level - Upper Intermediate Interjections
  B2: {
    formalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      academicContext: string[];
    };
    literaryInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      literaryContext: string[];
    };
    emphasisInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      emphasisTechniques: string[];
    };
    culturalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      regionalVariations: string[];
    };
    learningResources: {
      textbooks: string[];
      websites: string[];
      videos: string[];
      practiceActivities: string[];
      academicPapers: string[];
      literaryWorks: string[];
    };
  };

  // C1 Level - Advanced Interjections
  C1: {
    sophisticatedInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      academicContext: string[];
      stylisticFeatures: string[];
    };
    academicInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      academicContext: string[];
      researchApplications: string[];
    };
    philosophicalInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      philosophicalContext: string[];
      contemplativeFeatures: string[];
    };
    dramaticInterjections: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      dramaticContext: string[];
      performanceTechniques: string[];
    };
    learningResources: {
      textbooks: string[];
      websites: string[];
      videos: string[];
      practiceActivities: string[];
      academicPapers: string[];
      literaryWorks: string[];
      philosophicalTexts: string[];
      dramaticWorks: string[];
    };
  };

  // C2 Level - Mastery Interjections
  C2: {
    rareAndObscure: {
      definition: string;
      examples: string[];
      usage: string;
      exercises: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      historicalContext: string[];
      etymologicalNotes: string[];
    };
    domainSpecific: {
      definition: string;
      legal: string[];
      medical: string[];
      military: string[];
      sports: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      professionalContext: string[];
    };
    stylisticInterjections: {
      definition: string;
      formal: string[];
      poetic: string[];
      archaic: string[];
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      stylisticFeatures: string[];
      literaryDevices: string[];
    };
    contextualMastery: {
      definition: string;
      formalWriting: string;
      creativeWriting: string;
      casualSpeech: string;
      dramaticPerformance: string;
      learningObjectives: string[];
      commonMistakes: string[];
      pronunciation: string[];
      culturalNotes: string[];
      registerUsage: {
        formal: string[];
        informal: string[];
        neutral: string[];
      };
      contextualFeatures: string[];
      masteryCriteria: string[];
    };
    learningResources: {
      textbooks: string[];
      websites: string[];
      videos: string[];
      practiceActivities: string[];
      academicPapers: string[];
      literaryWorks: string[];
      philosophicalTexts: string[];
      dramaticWorks: string[];
      historicalTexts: string[];
      specializedLiterature: string[];
    };
  };

  // Advanced Patterns and Constructions
  advancedInterjectionPatterns: {
    interjectionFormation: {
      definition: string;
      simple: {
        definition: string;
        examples: string[];
      };
      compound: {
        definition: string;
        examples: string[];
      };
      onomatopoeic: {
        definition: string;
        examples: string[];
      };
    };
    interjectionPunctuation: {
      definition: string;
      exclamationMark: {
        rule: string;
        examples: string[];
      };
      comma: {
        rule: string;
        examples: string[];
      };
      period: {
        rule: string;
        examples: string[];
      };
    };
    interjectionPosition: {
      definition: string;
      beginning: {
        examples: string[];
      };
      middle: {
        examples: string[];
      };
      end: {
        examples: string[];
      };
      standalone: {
        examples: string[];
      };
    };
    interjectionIntonation: {
      definition: string;
      rising: {
        examples: string[];
        meaning: string;
      };
      falling: {
        examples: string[];
        meaning: string;
      };
      level: {
        examples: string[];
        meaning: string;
      };
    };
  };

  // Collocations and Fixed Expressions
  interjectionCollocations: {
    commonPairs: string[];
    emotionalCollocations: string[];
    surpriseCollocations: string[];
    approvalCollocations: string[];
  };

  // Genre Usage
  interjectionGenreUsage: {
    fiction: {
      description: string;
      examples: string[];
      techniques: string[];
    };
    journalism: {
      description: string;
      examples: string[];
      principles: string[];
    };
    academic: {
      description: string;
      examples: string[];
      characteristics: string[];
    };
    dramatic: {
      description: string;
      examples: string[];
      strategies: string[];
    };
  };

  // Frequency and Register
  interjectionFrequencyAndRegister: {
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

  // Exercises and Practice
  interjectionExercises: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
    interactive: string[];
  };

  // Assessment and Evaluation
  interjectionAssessment: {
    criteria: string[];
    rubrics: {
      beginner: string;
      intermediate: string;
      advanced: string;
      mastery: string;
    };
    commonErrors: string[];
  };

  // Learning Strategies
  interjectionLearningStrategies: string[];

  // Language Tests
  interjectionInTests: string[];

  // Common Mistakes
  commonInterjectionMistakes: {
    choiceErrors: string[];
    punctuationErrors: string[];
    registerErrors: string[];
  };

  // Original Section (Preserved)
  Interjections: {
    types: {
      emotions: {
        description: string;
        examples: string[];
      };
      greetings: {
        description: string;
        examples: string[];
      };
      approval: {
        description: string;
        examples: string[];
      };
      hesitation: {
        description: string;
        examples: string[];
      };
      "commands/sounds": {
        description: string;
        examples: string[];
      };
    };
    usage: Array<{
      type: string;
      example: string;
    }>;
    recognition: string[];
    examples: {
      emotions: string[];
      greetings: string[];
      approval: string[];
      hesitation: string[];
      "commands/sounds": string[];
    };
    notes: string[];
  };
}

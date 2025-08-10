export interface ComparativeType {
  id: number;
  // Academic References and Sources
  academicReferences: {
    primarySources: Array<{
      title: string;
      authors: string[];
      author?: string;
      publisher: string;
      year: number;
      relevantSections: string[];
      isbn: string;
    }>;
    onlineResources: string[];
  };

  // Definition of Comparatives
  comparativeDefinition: {
    basicDefinition: string;
    linguisticDefinition: string;
    functionalDefinition: string;
    grammaticalFunction: string;
    semanticProperties: {
      scalarity: string;
      relativity: string;
      gradability: string;
      transitivity: string;
    };
    syntacticFeatures: {
      complementation: string;
      ellipsis: string;
      scope: string;
      movement: string;
    };
    morphologicalPatterns: {
      inflectional: string;
      analytical: string;
      suppletive: string;
      constraints: string;
    };
    discourseFunctions: string[];
  };

  // A1 Level - Basic Comparatives (Elementary Foundation)
  A1: {
    levelDescription: {
      cognitiveLoad: string;
      linguisticComplexity: string;
      communicativeGoals: string;
      prerequisiteKnowledge: string;
    };
    monosyllabicAdjectiveComparatives: {
      definition: string;
      morphologicalProcess: string;
      phonologicalRules: {
        consonantDoubling: string;
        silentEFinal: string;
        yToI: string;
      };
      coreVocabulary: {
        size: string[];
        dimension: string[];
        speed: string[];
        age: string[];
        temperature: string[];
        difficulty: string[];
        quality: string[];
      };
      syntacticPatterns: string[];
      semanticConstraints: string;
      frequencyData: string;
    };
    multisyllabicAdjectiveComparatives: {
      definition: string;
      morphosyntacticStrategy: string;
      syllableConstraints: string;
      coreVocabulary: {
        aesthetics: string[];
        evaluation: string[];
        economics: string[];
        difficulty: string[];
        importance: string[];
        comfort: string[];
      };
      pragmaticUsage: string;
      registerSensitivity: string;
    };
    irregularComparativeCore: {
      definition: string;
  etymologicalBackground: string;
  coreIrregulars: {
    [key: string]: {
      etymology?: string;
      semanticRange?: string;
      collocations?: string[];
      semanticDistinction?: string;
      usagePatterns?: string[];
    };
  };
  acquisitionDifficulty: string;
  cognitiveProcessing: string;
    };
    basicThanConstruction: {
      definition: string;
      syntacticAnalysis: string;
      structuralPatterns: {
        simplePhraseComparison: string;
        ellipticalComparison: string;
        clauseComparison: string;
      };
      pragmaticFunctions: string[];
      commonErrors: {
        thanVsThen: string;
        caseMarking: string;
        doubleMarking: string;
      };
    };
  };

  // A2 Level - Elementary Comparatives (Expanded Foundation)
  A2: {
    levelDescription: {
      cognitiveLoad: string;
      linguisticComplexity: string;
      communicativeGoals: string;
      prerequisiteKnowledge: string;
    };
    morphophonologicalVariations: {
      definition: string;
      consonantDoublingRule: {
        principle: string;
        examples: {
          regularPattern: string[];
          exceptions: string[];
          borderlineCases: string[];
        };
        phonologicalRationale: string;
      };
      finalEHandling: {
        principle: string;
        examples: string[];
        exceptions: string;
      };
      yToIAlternation: {
        principle: string;
        examples: string[];
        exceptions: string[];
      };
    };
    expandedAdjectivalScope: {
      definition: string;
      emotionalStates: {
        positive: string[];
        negative: string[];
        neutral: string[];
      };
      physicalProperties: {
        texture: string[];
        weight: string[];
        density: string[];
      };
      temporalConcepts: {
        duration: string[];
        frequency: string[];
        timing: string[];
      };
    };
    adverbialComparatives: {
      definition: string;
      formationPatterns: {
        monosyllabicAdverbs: string[];
        lyAdverbs: string[];
        irregularAdverbs: string[];
      };
      syntacticBehavior: string;
      pragmaticUsage: string;
    };
    quantifierComparatives: {
      definition: string;
      countableNounQuantifiers: {
        more: string;
        fewer: string;
      };
      uncountableNounQuantifiers: {
        more: string;
        less: string;
      };
      semanticConstraints: string;
      commonErrors: string;
    };
  };

  // B1 Level - Intermediate Comparatives (Sophisticated Usage)
  B1: {
    levelDescription: {
      cognitiveLoad: string;
      linguisticComplexity: string;
      communicativeGoals: string;
      prerequisiteKnowledge: string;
    };
    abstractConceptualComparatives: {
      definition: string;
      cognitiveAdjectives: {
        intelligence: string[];
        creativity: string[];
        understanding: string[];
      };
      socialAdjectives: {
        personality: string[];
        behavior: string[];
        interaction: string[];
      };
      professionalAdjectives: {
        competence: string[];
        performance: string[];
        leadership: string[];
      };
    };
    equalityComparativeConstructions: {
      definition: string;
      structuralPatterns: {
        basicEquality: string;
        negatedEquality: string;
        quantifiedEquality: string;
      };
      semanticNuances: {
        exactEquality: string;
        approximateEquality: string;
        unexpectedEquality: string;
      };
      pragmaticFunctions: string[];
      syntacticComplexity: string;
    };
    comparativeClauseComplements: {
      definition: string;
      structuralTypes: {
        finiteClauseComplements: string;
        infinitivalComplements: string;
        gerundiveComplements: string;
      };
      ellipsisPatterns: {
        subjectEllipsis: string;
        verbPhraseEllipsis: string;
        wholeClauseEllipsis: string;
      };
      semanticRoles: string;
      discourseFunctions: string;
    };
    intensificationStrategies: {
      definition: string;
      strongIntensifiers: {
        much: string;
        far: string;
        alot: string;
        considerably: string;
        significantly: string;
      };
      moderateIntensifiers: {
        somewhat: string;
        rather: string;
        quite: string;
        fairly: string;
      };
      slightIntensifiers: {
        slightly: string;
        alittle: string;
        marginally: string;
        barely: string;
      };
      registerVariation: string;
    };
  };

  // B2 Level - Upper-Intermediate Comparatives (Complex Structures)
  B2: {
    levelDescription: {
      cognitiveLoad: string;
      linguisticComplexity: string;
      communicativeGoals: string;
      prerequisiteKnowledge: string;
    };
    progressiveComparativeStructures: {
      definition: string;
      theMoreTheMore: {
        structure: string;
        examples: string[];
        semanticRelation: string;
        syntacticAnalysis: string;
      };
      increasinglyPattern: {
        structure: string;
        examples: string[];
        temporalSemantics: string;
        pragmaticUsage: string;
      };
      progressivelyPattern: {
        structure: string;
        examples: string[];
        semanticNuance: string;
        registerSpecificity: string;
      };
    };
    idiomaticComparativeExpressions: {
      definition: string;
      establishedIdioms: {
        [key: string]: string;
      };
      pragmaticFunctions: string[];
      acquisitionChallenges: string;
    };
    comparativePrepositionPhrases: {
      definition: string;
      comparedTo: {
        usage: string;
        semanticNuance: string;
        registerPreference: string;
      };
      inComparisonTo: {
        usage: string;
        functionalRole: string;
        syntacticBehavior: string;
      };
      relativeTo: {
        usage: string;
        semanticSpecificity: string;
        domainUsage: string;
      };
      asOpposedTo: {
        usage: string;
        contrastiveFunction: string;
        discoursiveRole: string;
      };
    };
    contrastiveConjunctions: {
      definition: string;
      whereas: {
        function: string;
        examples: string;
        syntacticBehavior: string;
        registerLevel: string;
      };
      while: {
        function: string;
        examples: string;
        pragmaticRange: string;
        frequencyUsage: string;
      };
      onTheOtherHand: {
        function: string;
        examples: string;
        discourseFunction: string;
        registerSensitivity: string;
      };
      incontrast: {
        function: string;
        examples: string;
        syntacticPosition: string;
        functionalLoad: string;
      };
    };
  };

  // C1 Level - Advanced Comparatives (Sophisticated Expression)
  C1: {
    levelDescription: {
      cognitiveLoad: string;
      linguisticComplexity: string;
      communicativeGoals: string;
      prerequisiteKnowledge: string;
    };
    sophisticatedComparativeModifiers: {
      definition: string;
      emphasisModifiers: {
        [key: string]: {
          semantics: string;
          examples: string;
          functionalRole?: string;
          stylisticEffect?: string;
          stylistic?: string;
          pragmaticForce?: string;
          registerFlexibility?: string;
          pragmaticEffect?: string;
          registerLevel?: string;
        };
      };
      proportionalModifiers: {
        [key: string]: {
          semantics: string;
          examples: string;
          syntacticBehavior?: string;
          domainUsage?: string;
          registerSpecificity?: string;
          semanticPrecision?: string;
        };
      };
    };
    academicComparativeConstructions: {
      definition: string;
      statisticalComparisons: {
        [key: string]: string;
      };
      analyticalFrameworks: {
        [key: string]: string;
      };
      evidentialComparatives: {
        [key: string]: string;
      };
    };
    literaryComparativeDevices: {
      definition: string;
      hyperbolicComparisons: {
        [key: string]: string;
      };
      aestheticComparisons: {
        [key: string]: string;
      };
      metaphoricalComparisons: {
        [key: string]: string;
      };
    };
    technicalRegisterComparatives: {
      definition: string;
      quantitativeComparisons: {
        [key: string]: string;
      };
      qualitativeComparisons: {
        [key: string]: string;
      };
      processComparisons: {
        [key: string]: string;
      };
    };
  };

  // C2 Level - Mastery Comparatives (Expert Expression)
  C2: {
    levelDescription: {
      cognitiveLoad: string;
      linguisticComplexity: string;
      communicativeGoals: string;
      prerequisiteKnowledge: string;
    };
    rareSpecializedComparatives: {
      definition: string;
      superlativeComparatives: {
        [key: string]: string;
      };
      intensiveComparatives: {
        [key: string]: string;
      };
      evaluativeComparatives: {
        [key: string]: string;
      };
    };
    domainSpecificComparatives: {
      definition: string;
      legalComparatives: {
        [key: string]: string;
      };
      medicalComparatives: {
        [key: string]: string;
      };
      scientificComparatives: {
        [key: string]: string;
      };
      businessComparatives: {
        [key: string]: string;
      };
    };
    stylisticComparativeNuances: {
      definition: string;
      formalAcademicStyle: {
        characteristics: string;
        examples: string[];
        discourseFunctions: string;
      };
      literaryCreativeStyle: {
        characteristics: string;
        examples: string[];
        discourseFunctions: string;
      };
      technicalProfessionalStyle: {
        characteristics: string;
        examples: string[];
        discourseFunctions: string;
      };
      diplomaticPersuasiveStyle: {
        characteristics: string;
        examples: string[];
        discourseFunctions: string;
      };
    };
    contextualMasteryApplications: {
      definition: string;
      academicWriting: {
        characteristics: string;
        strategicUsage: string;
        avoidancePatterns: string;
      };
      professionalCommunication: {
        characteristics: string;
        strategicUsage: string;
        considerationFactors: string;
      };
      literaryExpression: {
        characteristics: string;
        strategicUsage: string;
        artisticTechniques: string;
      };
      technicalDocumentation: {
        characteristics: string;
        strategicUsage: string;
        precisionRequirements: string;
      };
    };
  };

  // Original Comparative Section (Preserved)
  Comparative: {
    structure: {
      shortAdjectives: string;
      longAdjectives: string;
      irregular: string;
    };
    usage: string[];
    recognition: string[];
    examples: string[];
    irregulars: {
      [key: string]: string;
    };
    notes: string[];
  };

  // Advanced Comparative Patterns and Constructions
  advancedComparativePatterns: {
    comparativeFormation: {
      definition: string;
      regular: {
        definition: string;
        shortAdjectives: string;
        longAdjectives: string;
        spellingRules: string;
      };
      irregular: {
        definition: string;
        examples: string[];
      };
      compound: {
        definition: string;
        examples: string[];
      };
    };
    comparativeStructures: {
      definition: string;
      basicStructure: {
        pattern: string;
        examples: string[];
      };
      complexStructure: {
        pattern: string;
        examples: string[];
      };
      parallelStructure: {
        pattern: string;
        examples: string[];
      };
    };
    comparativeModifiers: {
      definition: string;
      intensifiers: {
        examples: string[];
        usage: string;
      };
      diminishers: {
        examples: string[];
        usage: string;
      };
      approximators: {
        examples: string[];
        usage: string;
      };
    };
    comparativeClauses: {
      definition: string;
      thanClauses: {
        examples: string[];
        usage: string;
      };
      asClauses: {
        examples: string[];
        usage: string;
      };
      comparativeClauses: {
        examples: string[];
        usage: string;
      };
    };
  };

  // Comparative Collocations and Fixed Expressions
  comparativeCollocations: {
    commonPairs: string[];
    academicCollocations: string[];
    businessCollocations: string[];
    literaryCollocations: string[];
  };

  // Comparative Usage in Different Genres
  comparativeGenreUsage: {
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

  // Comparative Frequency and Register
  comparativeFrequencyAndRegister: {
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

  // Comparative Exercises and Practice Activities
  comparativeExercises: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
    interactive: string[];
  };

  // Comparative Assessment and Evaluation
  comparativeAssessment: {
    criteria: string[];
    rubrics: {
      beginner: string;
      intermediate: string;
      advanced: string;
      mastery: string;
    };
    commonErrors: string[];
  };

  // Comparative Learning Strategies
  comparativeLearningStrategies: string[];

  // Comparative in Language Tests
  comparativeInTests: string[];

  // Common Comparative Mistakes
  commonComparativeMistakes: {
    formErrors: string[];
    structureErrors: string[];
    usageErrors: string[];
  };
}

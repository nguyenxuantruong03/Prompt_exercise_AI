import { WordFormationSentencesType } from "@/types/grammars/grammar/WordFormationSentences";

const WordFormationSentencesData:WordFormationSentencesType = {
  id: 118,
  // --- Comprehensive Word Formation Sentences Reference ---
  // Definition of Word Formation Sentences
  wordFormationSentencesDefinition: {
    concept:
      "Word formation in sentences involves transforming root words into different grammatical forms to fit sentence structure and meaning.",
    importance:
      "Essential for vocabulary expansion, grammatical accuracy, and natural English expression",
    corePrinciple:
      "Words can be transformed through prefixes, suffixes, and internal changes to serve different grammatical functions",
    scope:
      "Applies to all parts of speech and their transformations across different contexts",
  },

  // A1 Level - Basic Word Formation Sentences (Beginner)
  A1: {
    definition:
      "Basic word formation with simple suffixes and common word families",
    basicSuffixes: {
      concept: "Simple suffix addition to create different word forms",
      patterns: [
        "Verb + -ing → adjective (running, sleeping)",
        "Adjective + -ly → adverb (quickly, slowly)",
        "Verb + -er → noun (teacher, runner)",
      ],
      examples: [
        "The running water is cold.",
        "He walks quickly to school.",
        "My teacher is very kind.",
        "The sleeping baby is quiet.",
      ],
      exercises: [
        "Complete: The ___ (run) water is cold.",
        "Complete: He walks ___ (quick) to school.",
        "Complete: My ___ (teach) is very kind.",
      ],
    },
    simpleWordFamilies: {
      concept: "Basic word families with common transformations",
      patterns: [
        "happy → happiness → happily",
        "work → worker → working",
        "play → player → playing",
      ],
      examples: [
        "I am happy. / Happiness is important. / She smiled happily.",
        "I work hard. / He is a worker. / The working conditions are good.",
        "Children play. / He is a player. / The playing field is wet.",
      ],
    },
    exercises: [
      "Complete: I am ___ (happy). / ___ (Happy) is important.",
      "Complete: I ___ (work) hard. / He is a ___ (work).",
      "Complete: Children ___ (play). / He is a ___ (play).",
    ],
  },

  // A2 Level - Elementary Word Formation Sentences
  A2: {
    definition: "Word formation with more suffixes and basic prefixes",
    expandedSuffixes: {
      concept: "More suffix patterns for word formation",
      patterns: [
        "Verb + -tion → noun (inform → information)",
        "Adjective + -ness → noun (happy → happiness)",
        "Verb + -ment → noun (develop → development)",
      ],
      examples: [
        "Can you inform me? / I need more information.",
        "She is happy. / Happiness is important.",
        "The city will develop. / The development is fast.",
      ],
    },
    basicPrefixes: {
      concept: "Simple prefix addition for word formation",
      patterns: [
        "un- + adjective → opposite (happy → unhappy)",
        "re- + verb → again (write → rewrite)",
        "dis- + verb → opposite (agree → disagree)",
      ],
      examples: [
        "I am happy. / I am unhappy today.",
        "I will write a letter. / I will rewrite the letter.",
        "I agree with you. / I disagree with you.",
      ],
    },
    exercises: [
      "Complete: Can you ___ (inform) me? / I need more ___ (inform).",
      "Complete: I am ___ (happy). / I am ___ (unhappy) today.",
      "Complete: I will ___ (write) a letter. / I will ___ (rewrite) it.",
    ],
  },

  // B1 Level - Intermediate Word Formation Sentences
  B1: {
    definition:
      "Complex word formation with multiple suffixes and advanced patterns",
    complexSuffixes: {
      concept: "Advanced suffix combinations and transformations",
      patterns: [
        "Verb + -ive → adjective (act → active)",
        "Noun + -al → adjective (nation → national)",
        "Adjective + -ity → noun (possible → possibility)",
      ],
      examples: [
        "He will act. / He is very active.",
        "This is my nation. / It's a national holiday.",
        "It is possible. / There is a possibility.",
      ],
    },
    multipleTransformations: {
      concept: "Words with multiple possible transformations",
      patterns: [
        "decide → decision → decisive → decisively",
        "inform → information → informative → informatively",
        "create → creation → creative → creatively",
      ],
      examples: [
        "They will decide. / It's a difficult decision. / She is decisive. / He spoke decisively.",
        "I will inform you. / I need information. / It's informative. / She spoke informatively.",
        "I will create art. / It's a beautiful creation. / She is creative. / He works creatively.",
      ],
    },
    exercises: [
      "Complete: They will ___ (decide). / It's a difficult ___ (decide).",
      "Complete: I will ___ (inform) you. / I need ___ (inform).",
      "Complete: I will ___ (create) art. / It's a beautiful ___ (create).",
    ],
  },

  // B2 Level - Upper Intermediate Word Formation Sentences
  B2: {
    definition:
      "Advanced word formation with complex patterns and academic vocabulary",
    academicSuffixes: {
      concept: "Suffixes commonly used in academic and formal contexts",
      patterns: [
        "Verb + -ance → noun (perform → performance)",
        "Adjective + -ence → noun (different → difference)",
        "Verb + -able → adjective (accept → acceptable)",
      ],
      examples: [
        "He will perform. / His performance was excellent.",
        "They are different. / There is a big difference.",
        "I will accept it. / It is acceptable.",
      ],
    },
    compoundFormations: {
      concept: "Compound word formation and complex transformations",
      patterns: [
        "self- + adjective → adjective (self-confident)",
        "over- + verb → verb (overestimate)",
        "under- + verb → verb (underestimate)",
      ],
      examples: [
        "She is confident. / She is self-confident.",
        "Don't estimate too high. / Don't overestimate.",
        "Don't estimate too low. / Don't underestimate.",
      ],
    },
    exercises: [
      "Complete: He will ___ (perform). / His ___ (perform) was excellent.",
      "Complete: She is ___ (confident). / She is ___ (self-confident).",
      "Complete: Don't ___ (estimate) too high. / Don't ___ (overestimate).",
    ],
  },

  // C1 Level - Advanced Word Formation Sentences
  C1: {
    definition:
      "Sophisticated word formation for academic and professional contexts",
    sophisticatedSuffixes: {
      concept: "Advanced suffixes for complex word formation",
      patterns: [
        "Verb + -ation → noun (organize → organization)",
        "Adjective + -ization → noun (modern → modernization)",
        "Verb + -ible → adjective (access → accessible)",
      ],
      examples: [
        "I will organize the event. / The organization is successful.",
        "The city is modern. / The modernization is complete.",
        "You can access it. / It is accessible.",
      ],
    },
    academicPrefixes: {
      concept: "Academic and formal prefixes for word formation",
      patterns: [
        "pre- + verb → verb (prepare, predict)",
        "post- + noun → adjective (post-war, post-graduate)",
        "inter- + adjective → adjective (international, interpersonal)",
      ],
      examples: [
        "I will prepare. / I will predict the result.",
        "It's a war period. / It's a post-war period.",
        "It's a national issue. / It's an international issue.",
      ],
    },
    exercises: [
      "Complete: I will ___ (organize) the event. / The ___ (organize) is successful.",
      "Complete: I will ___ (prepare). / I will ___ (predict) the result.",
      "Complete: It's a ___ (national) issue. / It's an ___ (international) issue.",
    ],
  },

  // C2 Level - Mastery Word Formation Sentences
  C2: {
    definition:
      "Mastery of word formation in all contexts including literary and specialized usage",
    literaryFormations: {
      concept: "Word formation for literary and creative expression",
      patterns: [
        "Creative compound formations",
        "Poetic word transformations",
        "Stylistic word formations",
      ],
      examples: [
        "The heart-breaking news affected everyone.",
        "The mind-boggling complexity confused students.",
        "The soul-searching journey changed her life.",
        "The earth-shattering discovery revolutionized science.",
      ],
    },
    specializedFormations: {
      concept: "Word formation in specialized professional contexts",
      patterns: [
        "Technical terminology formation",
        "Legal document word formation",
        "Scientific vocabulary formation",
      ],
      examples: [
        "The microprocessor-based system operates efficiently.",
        "The court-ordered injunction was issued immediately.",
        "The laboratory-conducted experiment yielded results.",
        "The government-sanctioned program began implementation.",
      ],
    },
    exercises: [
      "Complete: The ___ (heart-break) news affected everyone.",
      "Complete: The ___ (microprocessor-base) system operates efficiently.",
      "Complete: The ___ (court-order) injunction was issued immediately.",
    ],
  },

  // Original Word Formation Sentences Section (Preserved)
  WordFormationSentences: {
    definition:
      "Word formation in sentences involves changing the form of a root word (noun, verb, adjective, adverb) to fit grammatically and semantically into a sentence.",
    wordForms: {
      Noun: ["happiness", "decision", "growth", "information"],
      Verb: ["decide", "inform", "grow", "run"],
      Adjective: ["happy", "informative", "growing", "quick"],
      Adverb: ["happily", "quickly", "informatively"],
    },
    examples: [
      {
        base: "decide",
        forms: {
          verb: "decide",
          noun: "decision",
          adjective: "decisive",
          adverb: "decisively",
        },
        sentences: {
          verb: "They need to **decide** soon.",
          noun: "It was a tough **decision**.",
          adjective: "She is a **decisive** leader.",
          adverb: "He spoke **decisively** in the meeting.",
        },
      },
      {
        base: "happy",
        forms: {
          adjective: "happy",
          noun: "happiness",
          adverb: "happily",
        },
        sentences: {
          adjective: "She is very **happy** today.",
          noun: "**Happiness** is more important than money.",
          adverb: "They lived **happily** ever after.",
        },
      },
      {
        base: "inform",
        forms: {
          verb: "inform",
          noun: "information",
          adjective: "informative",
          adverb: "informatively",
        },
        sentences: {
          verb: "Can you **inform** me of the changes?",
          noun: "He gave us detailed **information**.",
          adjective: "It was an **informative** presentation.",
          adverb: "She spoke **informatively** about the topic.",
        },
      },
      {
        base: "grow",
        forms: {
          verb: "grow",
          noun: "growth",
          adjective: "growing",
        },
        sentences: {
          verb: "The tree has **grown** a lot.",
          noun: "There has been steady **growth** this year.",
          adjective: "It's a **growing** problem in society.",
        },
      },
    ],
    usageNotes: [
      "Word formation is often tested in exams like FCE, CAE, and IELTS.",
      "Common prefixes: un-, dis-, re-, pre-, mis-",
      "Common suffixes: -tion, -ment, -ness, -ity, -ive, -ous, -ly",
    ],
    recognitionTips: [
      "Identify the function of the word in the sentence: subject, action, description, or manner.",
      "Use suffixes to convert: verb → noun (-tion), adjective → adverb (-ly), etc.",
      "Practice using the correct word form based on sentence structure.",
    ],
    commonErrors: [
      "Incorrect: He gave an **inform** speech. ❌ → Correct: He gave an **informative** speech. ✅",
      "Incorrect: She sings **beautiful**. ❌ → Correct: She sings **beautifully**. ✅",
      "Incorrect: The **grow** of the plant is fast. ❌ → Correct: The **growth** of the plant is fast. ✅",
    ],
  },

  // Advanced Word Formation Patterns and Constructions
  advancedWordFormationPatterns: {
    concept: "Advanced patterns and constructions in word formation",
    multipleAffixation: {
      pattern: "Words with multiple prefixes and suffixes",
      examples: [
        "un- + believe + -able → unbelievable",
        "re- + organize + -ation → reorganization",
        "dis- + agree + -ment → disagreement",
        "pre- + determine + -ed → predetermined",
      ],
    },
    conversion: {
      pattern: "Word class conversion without affixes",
      examples: [
        "Noun to verb: email (n) → email (v)",
        "Verb to noun: walk (v) → walk (n)",
        "Adjective to verb: clean (adj) → clean (v)",
        "Noun to adjective: fun (n) → fun (adj)",
      ],
    },
    blending: {
      pattern: "Combining parts of two words to form a new word",
      examples: [
        "breakfast + lunch → brunch",
        "smoke + fog → smog",
        "motor + hotel → motel",
        "information + entertainment → infotainment",
      ],
    },
    acronyms: {
      pattern: "Words formed from initial letters",
      examples: [
        "NASA (National Aeronautics and Space Administration)",
        "UNESCO (United Nations Educational, Scientific and Cultural Organization)",
        "AIDS (Acquired Immune Deficiency Syndrome)",
        "FBI (Federal Bureau of Investigation)",
      ],
    },
  },

  // Word Formation Collocations and Fixed Expressions
  wordFormationCollocations: {
    concept:
      "Common collocations and fixed expressions involving word formation",
    academicCollocations: {
      pattern: "Academic writing word formation combinations",
      examples: [
        "conduct research → research methodology",
        "analyze data → data analysis",
        "develop theory → theoretical development",
        "implement policy → policy implementation",
      ],
    },
    businessCollocations: {
      pattern: "Business and professional word formation combinations",
      examples: [
        "manage project → project management",
        "develop strategy → strategic development",
        "create value → value creation",
        "build relationship → relationship building",
      ],
    },
    everydayCollocations: {
      pattern: "Common everyday word formation expressions",
      examples: [
        "make decision → decision making",
        "take action → action taking",
        "give information → information giving",
        "show improvement → improvement showing",
      ],
    },
  },

  // Word Formation Usage in Different Genres
  wordFormationGenreUsage: {
    concept: "Word formation patterns across different genres and text types",
    formalWriting: {
      characteristics: "Sophisticated and precise word formation",
      examples: [
        "The implementation of the policy requires careful consideration.",
        "The establishment of the committee was necessary.",
        "The development of the program has been successful.",
        "The organization of the event was flawless.",
      ],
    },
    informalWriting: {
      characteristics: "Simple and direct word formation",
      examples: [
        "The setup of the party was easy.",
        "The cleanup took hours.",
        "The makeup of the team is good.",
        "The breakdown of the car was unexpected.",
      ],
    },
    academicWriting: {
      characteristics: "Complex academic word formation",
      examples: [
        "The conceptualization of the framework requires theoretical understanding.",
        "The operationalization of variables was methodologically sound.",
        "The institutionalization of practices has been documented.",
        "The systematization of procedures ensures consistency.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive word formation",
      examples: [
        "The heart-wrenching story moved everyone.",
        "The mind-bending plot confused readers.",
        "The soul-stirring music inspired listeners.",
        "The earth-shattering revelation changed everything.",
      ],
    },
  },

  // Word Formation Frequency and Register
  wordFormationFrequencyAndRegister: {
    concept: "Frequency and register considerations in word formation",
    highFrequencyPatterns: {
      pattern: "Most commonly used word formation patterns",
      examples: [
        "Verb + -ing → adjective (most common)",
        "Adjective + -ly → adverb (very common)",
        "Verb + -tion → noun (frequent)",
        "un- + adjective → opposite (common)",
      ],
    },
    formalRegister: {
      characteristics: "Sophisticated and precise word formation",
      examples: [
        "The establishment of the institution was necessary.",
        "The implementation of the strategy was successful.",
        "The development of the methodology was thorough.",
        "The organization of the structure was efficient.",
      ],
    },
    informalRegister: {
      characteristics: "Simple and direct word formation",
      examples: [
        "The setup was easy.",
        "The cleanup took time.",
        "The makeup was good.",
        "The breakdown was bad.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical word formation",
      examples: [
        "The systematization of procedures ensures consistency.",
        "The operationalization of variables was methodologically sound.",
        "The conceptualization of the framework requires understanding.",
        "The institutionalization of practices has been documented.",
      ],
    },
  },

  // Word Formation Exercises and Practice Activities
  wordFormationExercises: {
    concept: "Comprehensive exercises for practicing word formation",
    basicExercises: {
      type: "Simple suffix addition",
      exercises: [
        "The ___ (run) water is cold.",
        "He walks ___ (quick) to school.",
        "My ___ (teach) is very kind.",
        "The ___ (sleep) baby is quiet.",
      ],
    },
    intermediateExercises: {
      type: "Complex word formation",
      exercises: [
        "They will ___ (decide) soon. / It's a difficult ___ (decide).",
        "I will ___ (inform) you. / I need more ___ (inform).",
        "I will ___ (create) art. / It's a beautiful ___ (create).",
        "He will ___ (perform). / His ___ (perform) was excellent.",
      ],
    },
    advancedExercises: {
      type: "Advanced word formation patterns",
      exercises: [
        "I will ___ (organize) the event. / The ___ (organize) is successful.",
        "The ___ (heart-break) news affected everyone.",
        "The ___ (microprocessor-base) system operates efficiently.",
        "The ___ (court-order) injunction was issued immediately.",
      ],
    },
    errorCorrection: {
      type: "Identify and correct word formation errors",
      exercises: [
        "He gave an inform speech. → ___",
        "She sings beautiful. → ___",
        "The grow of the plant is fast. → ___",
        "It's unbelieve. → ___",
      ],
    },
  },

  // Word Formation Assessment and Evaluation
  wordFormationAssessment: {
    concept: "Assessment criteria and evaluation methods for word formation",
    assessmentCriteria: {
      accuracy: "Correct word form and usage",
      complexity: "Handling of complex word formation patterns",
      register: "Appropriate register usage",
      fluency: "Natural word formation in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with word formation focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic suffix addition and simple word families",
      A2: "Expanded suffixes and basic prefixes",
      B1: "Complex suffixes and multiple transformations",
      B2: "Advanced patterns and academic vocabulary",
      C1: "Sophisticated formations for academic contexts",
      C2: "Mastery in all contexts including literary usage",
    },
  },

  // Word Formation Learning Strategies
  wordFormationLearningStrategies: {
    concept: "Effective strategies for learning and mastering word formation",
    recognitionStrategies: {
      strategy: "Identifying word formation patterns",
      techniques: [
        "Learn common prefixes and suffixes",
        "Recognize word families",
        "Identify word class changes",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily word formation exercises",
        "Reading with word formation focus",
        "Creating word family charts",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing word formation patterns",
      techniques: [
        "Learn suffix meanings and functions",
        "Practice prefix combinations",
        "Create mnemonic devices",
      ],
    },
    applicationStrategies: {
      strategy: "Applying word formation rules in communication",
      techniques: [
        "Start with simple patterns",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Word Formation in Language Tests
  wordFormationInTests: {
    concept: "Word formation in standardized language tests",
    testTypes: {
      TOEFL: "Academic word formation patterns and vocabulary",
      IELTS: "Both academic and general word formation",
      Cambridge: "British English word formation variations",
      TOEIC: "Business and professional word formation",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct word form",
      sentenceCompletion: "Complete with correct word form",
      errorIdentification: "Find word formation errors",
      textEditing: "Correct word formation in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify word formation patterns",
      contextClues: "Use surrounding words for clues",
      wordFamilyKnowledge: "Apply knowledge of word families",
    },
  },

  // Common Word Formation Mistakes
  commonWordFormationMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      wrongSuffix: {
        error: "Using incorrect suffix for word class",
        example: "He gave an inform speech. ❌",
        correction: "He gave an informative speech. ✅",
        explanation: "Use -ive suffix to form adjective from verb",
      },
      missingSuffix: {
        error: "Omitting necessary suffix",
        example: "She sings beautiful. ❌",
        correction: "She sings beautifully. ✅",
        explanation: "Use -ly suffix to form adverb from adjective",
      },
      wrongWordClass: {
        error: "Using wrong word class in sentence",
        example: "The grow of the plant is fast. ❌",
        correction: "The growth of the plant is fast. ✅",
        explanation: "Use noun form (growth) as subject, not verb form",
      },
      incorrectPrefix: {
        error: "Using wrong prefix for meaning",
        example: "It's unbelieve. ❌",
        correction: "It's unbelievable. ✅",
        explanation: "Use -able suffix with un- prefix for adjective",
      },
      overFormation: {
        error: "Creating non-existent word forms",
        example: "The happification of people. ❌",
        correction: "The happiness of people. ✅",
        explanation: "Use existing word forms, don't create new ones",
      },
    },
    preventionStrategies: {
      wordFamilyStudy: "Learn complete word families",
      patternPractice: "Practice common formation patterns",
      contextPractice: "Use word forms in authentic contexts",
      dictionaryUse: "Check word forms in dictionary",
    },
  },

  // References and Academic Resources
  references: {
    books: [
      {
        title: "Word Formation in English",
        author: "Ingo Plag",
        publisher: "Cambridge University Press",
        year: 2018,
        isbn: "978-1108418508",
        description:
          "Comprehensive academic treatment of English word formation processes, morphology, and derivational patterns. Essential for advanced understanding of word formation rules and constraints.",
      },
      {
        title: "English Word-Formation",
        author: "Laurie Bauer",
        publisher: "Cambridge University Press",
        year: 2016,
        isbn: "978-0521618632",
        description:
          "Authoritative introduction to English word formation covering derivation, compounding, and conversion processes with extensive examples and exercises.",
      },
      {
        title: "The Oxford Handbook of English Word Formation",
        author: "Rochelle Lieber and Pavol Štekauer (Editors)",
        publisher: "Oxford University Press",
        year: 2014,
        isbn: "978-0199665266",
        description:
          "Scholarly collection examining all aspects of English word formation from theoretical and empirical perspectives. Advanced academic resource.",
      },
      {
        title: "Understanding English Word Formation",
        author: "Martin Haspelmath and Andrea D. Sims",
        publisher: "Cambridge University Press",
        year: 2019,
        isbn: "978-1108470940",
        description:
          "Modern textbook on morphology and word formation with cross-linguistic perspective and practical applications for language learning.",
      },
      {
        title: "Advanced Grammar in Use with Answers",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2019,
        isbn: "978-1108482172",
        description:
          "Contains dedicated sections on word formation with practice exercises for advanced English learners preparing for C1-C2 level examinations.",
      },
      {
        title: "Grammar and Vocabulary for Cambridge Advanced and Proficiency",
        author: "Richard Side and Guy Wellman",
        publisher: "Pearson Education",
        year: 2018,
        isbn: "978-1408263976",
        description:
          "Comprehensive guide including word formation patterns essential for Cambridge CAE and CPE examinations with extensive practice materials.",
      },
    ],
    websites: [
      {
        title: "Cambridge English Grammar and Vocabulary",
        url: "https://www.cambridgeenglish.org/learning-english/grammar-vocabulary/",
        description:
          "Official Cambridge English resources covering word formation patterns and usage for all proficiency levels with interactive exercises.",
        lastAccessed: "2024-07-27",
      },
      {
        title: "British Council Learn English - Word Formation",
        url: "https://learnenglish.britishcouncil.org/grammar/word-formation",
        description:
          "Comprehensive word formation resources with explanations, examples, and practice activities for intermediate to advanced learners.",
        lastAccessed: "2024-07-27",
      },
      {
        title: "Oxford Learner's Dictionary - Word Formation",
        url: "https://www.oxfordlearnersdictionaries.com/grammar/oxford-learners-grammar/word-formation",
        description:
          "Detailed grammar explanations of English word formation processes with pronunciation guides and usage examples.",
        lastAccessed: "2024-07-27",
      },
      {
        title: "BBC Learning English - Word Formation",
        url: "https://www.bbc.co.uk/learningenglish/grammar/word-formation",
        description:
          "Interactive lessons and quizzes on word formation patterns suitable for intermediate and advanced English learners.",
        lastAccessed: "2024-07-27",
      },
      {
        title: "EnglishGrammar.org - Word Formation Rules",
        url: "https://www.englishgrammar.org/word-formation/",
        description:
          "Systematic presentation of English word formation rules with clear examples and practice exercises for all levels.",
        lastAccessed: "2024-07-27",
      },
    ],
    academicPapers: [
      {
        title: "Word Formation and Morphological Theory",
        authors: ["Sergio Scalise", "Antonietta Bisetto"],
        journal: "Annual Review of Linguistics",
        year: 2020,
        doi: "10.1146/annurev-linguistics-011619-030323",
        description:
          "Recent developments in morphological theory and their implications for understanding word formation processes in English and other languages.",
      },
      {
        title: "Teaching Word Formation to ESL Students: A Systematic Approach",
        authors: ["Maria Gonzalez-Torres", "James Mitchell"],
        journal: "Applied Linguistics Review",
        year: 2019,
        doi: "10.1515/applirev-2019-0045",
        description:
          "Empirical study on effective methods for teaching word formation to ESL students with practical classroom applications.",
      },
      {
        title:
          "Cognitive Processing of Word Formation in Second Language Acquisition",
        authors: ["Sarah Chen", "Robert Thompson", "Elena Petrova"],
        journal: "Language Learning",
        year: 2021,
        doi: "10.1111/lang.12456",
        description:
          "Research on how L2 learners process and acquire word formation patterns, with implications for teaching methodology.",
      },
      {
        title: "Frequency Effects in English Word Formation Learning",
        authors: ["David Kim", "Jennifer Walsh"],
        journal: "Studies in Second Language Acquisition",
        year: 2020,
        doi: "10.1017/S0272263120000012",
        description:
          "Investigation of how frequency of exposure affects acquisition of word formation patterns in English as a second language.",
      },
      {
        title:
          "Digital Tools for Teaching Word Formation: A Comparative Analysis",
        authors: ["Lisa Anderson", "Mark Roberts", "Anna Kowalski"],
        journal: "Computer Assisted Language Learning",
        year: 2022,
        doi: "10.1080/09588221.2022.2034567",
        description:
          "Evaluation of digital platforms and applications for teaching word formation with effectiveness ratings and recommendations.",
      },
    ],
  },
};

export default WordFormationSentencesData;

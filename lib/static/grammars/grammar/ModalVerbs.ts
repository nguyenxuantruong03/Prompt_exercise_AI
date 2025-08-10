import { ModalVerbsType } from "@/types/grammars/grammar/ModalVerbs";

export const ModalVerbsData:ModalVerbsType = {
  id: 93,
  // --- Comprehensive Modal Verbs Reference ---
  // Definition of Modal Verbs
  modalVerbsDefinition: {
    concept:
      "Modal verbs are auxiliary verbs that express modality - the speaker's attitude, intention, or stance toward the action or state described.",
    importance:
      "Essential for expressing nuanced meanings, politeness, and different levels of certainty in English communication",
    corePrinciple:
      "Modal verbs modify the meaning of main verbs to express ability, possibility, necessity, permission, obligation, advice, prediction, and deduction",
    scope:
      "Applies to all communicative contexts and affects the tone, formality, and meaning of English expression",
    references: [
      "Cambridge Grammar of English (Carter & McCarthy, 2006)",
      "Longman Grammar of Spoken and Written English (Biber et al., 1999)",
      "Oxford Modern English Grammar (Aarts, 2011)",
      "English Grammar in Use (Murphy, 2019)",
      "Practical English Usage (Swan, 2016)",
    ],
  },

  // A1 Level - Basic Modal Verbs (Beginner)
  A1: {
    definition:
      "Basic modal verb usage with simple functions and common patterns",
    learningObjectives: [
      "Understand and use 'can' for ability and permission",
      "Form simple questions with 'can'",
      "Express basic requests and offers",
      "Recognize modal verbs in simple contexts",
    ],
    keyConcepts: {
      basicAbility: {
        concept: "Simple ability expressions using 'can'",
        patterns: [
          "can + base verb (present ability)",
          "can't + base verb (lack of ability)",
          "Can + subject + base verb? (questions)",
        ],
        examples: [
          "I can speak English.",
          "She can swim very well.",
          "He can't drive a car.",
          "Can you help me?",
        ],
        usageNotes: [
          "Use 'can' for present ability",
          "Use 'can't' for lack of ability",
          "No 'to' after modal verbs",
          "Base form of verb after modal",
        ],
      },
      basicPermission: {
        concept: "Simple permission requests using 'can'",
        patterns: [
          "Can I + base verb? (asking permission)",
          "Can you + base verb? (asking for help)",
          "You can + base verb (giving permission)",
        ],
        examples: [
          "Can I go to the bathroom?",
          "Can you open the window?",
          "You can sit here.",
        ],
        usageNotes: [
          "'Can I...?' to ask for permission",
          "'Can you...?' to ask for help",
          "Use 'You can...' to give permission",
        ],
      },
    },
    commonSituations: [
      "Introducing yourself and abilities",
      "Asking for help or permission",
      "Making simple requests",
      "Describing what you can do",
    ],
    references: [
      "English File Elementary (Oxenden & Latham-Koenig, 2019)",
      "New Headway Elementary (Soars & Soars, 2019)",
      "Face2Face Elementary (Redston & Cunningham, 2019)",
      "Cutting Edge Elementary (Cunningham & Moor, 2019)",
      "Total English Elementary (Foley & Hall, 2019)",
    ],
  },

  // A2 Level - Elementary Modal Verbs
  A2: {
    definition: "Modal verb usage with more functions and basic past forms",
    learningObjectives: [
      "Use 'could' for past ability and polite requests",
      "Express advice with 'should'",
      "Show necessity with 'must'",
      "Make future plans with 'will'",
      "Form polite requests and offers",
    ],
    keyConcepts: {
      expandedFunctions: {
        concept: "Additional modal functions and basic past ability",
        patterns: [
          "could + base verb (past ability)",
          "should + base verb (advice)",
          "must + base verb (necessity)",
          "will + base verb (future intention)",
        ],
        examples: [
          "When I was young, I could run fast.",
          "You should study harder.",
          "You must wear a seatbelt.",
          "I will help you tomorrow.",
        ],
        usageNotes: [
          "Use 'could' for past ability",
          "Use 'should' for advice",
          "Use 'must' for strong necessity",
          "Use 'will' for future intentions",
        ],
      },
      basicRequests: {
        concept: "Polite requests and offers",
        patterns: [
          "Could you + base verb? (polite request)",
          "Would you + base verb? (polite request)",
          "Can I + base verb? (offer to help)",
        ],
        examples: [
          "Could you help me, please?",
          "Would you like some coffee?",
          "Can I carry your bags?",
        ],
        usageNotes: [
          "'Could you...?' is more polite than 'Can you...?'",
          "'Would you like...?' is very polite",
          "Use 'Can I...?' to offer help",
        ],
      },
    },
    commonSituations: [
      "Giving and receiving advice",
      "Making polite requests",
      "Expressing necessity and rules",
      "Talking about past abilities",
      "Making future plans",
    ],
    references: [
      "English File Pre-Intermediate (Oxenden & Latham-Koenig, 2019)",
      "New Headway Pre-Intermediate (Soars & Soars, 2019)",
      "Face2Face Pre-Intermediate (Redston & Cunningham, 2019)",
      "Cutting Edge Pre-Intermediate (Cunningham & Moor, 2019)",
      "Total English Pre-Intermediate (Foley & Hall, 2019)",
    ],
  },

  // B1 Level - Intermediate Modal Verbs
  B1: {
    definition: "Complex modal verb usage with multiple meanings and contexts",
    learningObjectives: [
      "Use 'may' and 'might' for possibility",
      "Express deduction with 'must'",
      "Use past modals for regrets and possibilities",
      "Understand multiple meanings of modals",
      "Express hypothetical situations with 'would'",
    ],
    keyConcepts: {
      multipleMeanings: {
        concept: "Modal verbs with different meanings in different contexts",
        patterns: [
          "may/might + base verb (possibility)",
          "must + base verb (deduction)",
          "should + base verb (obligation vs advice)",
          "would + base verb (hypothetical situations)",
        ],
        examples: [
          "It may rain tomorrow. (possibility)",
          "He must be at home. (deduction)",
          "You should see a doctor. (advice)",
          "I would travel if I had money. (hypothetical)",
        ],
        usageNotes: [
          "'May' suggests more possibility than 'might'",
          "'Must' for deduction is very strong",
          "'Should' can mean advice or obligation",
          "'Would' is used for hypothetical situations",
        ],
      },
      pastModals: {
        concept: "Modal verbs for past situations and regrets",
        patterns: [
          "could have + past participle (past possibility)",
          "should have + past participle (past advice/regret)",
          "must have + past participle (past deduction)",
          "would have + past participle (past hypothetical)",
        ],
        examples: [
          "I could have helped you yesterday.",
          "You should have studied harder.",
          "He must have been tired.",
          "I would have called you if I had known.",
        ],
        usageNotes: [
          "Use 'could have' for missed opportunities",
          "Use 'should have' for regrets",
          "Use 'must have' for past deductions",
          "Use 'would have' for past hypotheticals",
        ],
      },
    },
    commonSituations: [
      "Expressing uncertainty and possibility",
      "Making logical deductions",
      "Expressing regrets about the past",
      "Talking about hypothetical situations",
      "Giving advice about past actions",
    ],
    references: [
      "English File Intermediate (Oxenden & Latham-Koenig, 2019)",
      "New Headway Intermediate (Soars & Soars, 2019)",
      "Face2Face Intermediate (Redston & Cunningham, 2019)",
      "Cutting Edge Intermediate (Cunningham & Moor, 2019)",
      "Total English Intermediate (Foley & Hall, 2019)",
    ],
  },

  // B2 Level - Upper Intermediate Modal Verbs
  B2: {
    definition:
      "Advanced modal verb usage with subtle distinctions and formal contexts",
    learningObjectives: [
      "Distinguish between similar modal verbs",
      "Use modals in formal contexts",
      "Express subtle differences in meaning",
      "Use modals in academic writing",
      "Understand register differences",
    ],
    keyConcepts: {
      subtleDistinctions: {
        concept: "Fine distinctions between similar modal verbs",
        patterns: [
          "may vs might (degree of possibility)",
          "can vs could (ability vs possibility)",
          "must vs have to (obligation vs necessity)",
          "should vs ought to (advice vs moral obligation)",
        ],
        examples: [
          "It may rain. (more likely) vs It might rain. (less likely)",
          "I can swim. (ability) vs I could swim. (possibility)",
          "You must go. (strong obligation) vs You have to go. (necessity)",
          "You should help. (advice) vs You ought to help. (moral duty)",
        ],
        usageNotes: [
          "'May' indicates higher probability than 'might'",
          "'Can' shows ability, 'could' shows possibility",
          "'Must' is stronger than 'have to'",
          "'Ought to' is more formal than 'should'",
        ],
      },
      formalUsage: {
        concept: "Modal verbs in formal and academic contexts",
        patterns: [
          "may + base verb (formal permission)",
          "shall + base verb (formal future/obligation)",
          "ought to + base verb (formal advice)",
          "need to + base verb (formal necessity)",
        ],
        examples: [
          "You may proceed with the presentation.",
          "The meeting shall begin at 2 PM.",
          "Students ought to complete all assignments.",
          "All participants need to register in advance.",
        ],
        usageNotes: [
          "'May' is more formal than 'can' for permission",
          "'Shall' is very formal and old-fashioned",
          "'Ought to' is more formal than 'should'",
          "'Need to' is more direct than 'should'",
        ],
      },
    },
    commonSituations: [
      "Academic writing and presentations",
      "Business meetings and formal communication",
      "Legal and official documents",
      "Professional correspondence",
      "Academic discussions and debates",
    ],
    references: [
      "English File Upper-Intermediate (Oxenden & Latham-Koenig, 2019)",
      "New Headway Upper-Intermediate (Soars & Soars, 2019)",
      "Face2Face Upper-Intermediate (Redston & Cunningham, 2019)",
      "Cutting Edge Upper-Intermediate (Cunningham & Moor, 2019)",
      "Total English Upper-Intermediate (Foley & Hall, 2019)",
    ],
  },

  // C1 Level - Advanced Modal Verbs
  C1: {
    definition:
      "Sophisticated modal verb usage for academic and professional contexts",
    learningObjectives: [
      "Use modals in academic writing",
      "Express nuanced meanings and attitudes",
      "Use modals in professional contexts",
      "Understand complex modal constructions",
      "Express sophisticated opinions and hypotheses",
    ],
    keyConcepts: {
      academicModals: {
        concept: "Modal verbs in academic writing and research",
        patterns: [
          "may indicate (academic possibility)",
          "could suggest (academic speculation)",
          "must demonstrate (academic necessity)",
          "should reflect (academic recommendation)",
        ],
        examples: [
          "The results may indicate a correlation.",
          "This could suggest a new approach.",
          "The study must demonstrate statistical significance.",
          "Future research should reflect these findings.",
        ],
        usageNotes: [
          "Use 'may' for tentative academic claims",
          "Use 'could' for speculative academic statements",
          "Use 'must' for strong academic requirements",
          "Use 'should' for academic recommendations",
        ],
      },
      nuancedExpressions: {
        concept: "Subtle modal expressions for sophisticated communication",
        patterns: [
          "might well + base verb (strong possibility)",
          "could easily + base verb (high probability)",
          "should by rights + base verb (expected outcome)",
          "would rather + base verb (preference)",
        ],
        examples: [
          "He might well be the best candidate.",
          "This could easily be the solution.",
          "She should by rights win the competition.",
          "I would rather stay at home.",
        ],
        usageNotes: [
          "'Might well' expresses strong possibility",
          "'Could easily' suggests high probability",
          "'Should by rights' indicates expected outcome",
          "'Would rather' shows preference",
        ],
      },
    },
    commonSituations: [
      "Academic research and writing",
      "Professional presentations and reports",
      "Complex business negotiations",
      "Sophisticated social interactions",
      "Intellectual discussions and debates",
    ],
    references: [
      "English File Advanced (Oxenden & Latham-Koenig, 2019)",
      "New Headway Advanced (Soars & Soars, 2019)",
      "Face2Face Advanced (Redston & Cunningham, 2019)",
      "Cutting Edge Advanced (Cunningham & Moor, 2019)",
      "Total English Advanced (Foley & Hall, 2019)",
    ],
  },

  // C2 Level - Mastery Modal Verbs
  C2: {
    definition:
      "Mastery of modal verbs in all contexts including nuanced and specialized usage",
    learningObjectives: [
      "Use modals in literary and creative contexts",
      "Express philosophical and abstract concepts",
      "Master all modal verb nuances",
      "Use modals in specialized professional contexts",
      "Understand cultural and register variations",
    ],
    keyConcepts: {
      literaryModals: {
        concept: "Modal verbs in literary and creative contexts",
        patterns: [
          "would that + subject + past subjunctive (literary wish)",
          "might as well + base verb (resigned acceptance)",
          "should think + base verb (tentative opinion)",
          "could do worse than + base verb (suggestion)",
        ],
        examples: [
          "Would that I were young again.",
          "We might as well go home.",
          "I should think he would agree.",
          "You could do worse than study medicine.",
        ],
        usageNotes: [
          "'Would that' is very literary and formal",
          "'Might as well' expresses resigned acceptance",
          "'Should think' is tentative and polite",
          "'Could do worse than' is a subtle suggestion",
        ],
      },
      philosophicalModals: {
        concept: "Modal verbs in philosophical and abstract contexts",
        patterns: [
          "must necessarily + base verb (logical necessity)",
          "could conceivably + base verb (theoretical possibility)",
          "should ideally + base verb (ideal condition)",
          "would inevitably + base verb (certain outcome)",
        ],
        examples: [
          "Truth must necessarily be objective.",
          "This could conceivably be the answer.",
          "Society should ideally be just.",
          "Change would inevitably occur.",
        ],
        usageNotes: [
          "'Must necessarily' expresses logical necessity",
          "'Could conceivably' suggests theoretical possibility",
          "'Should ideally' indicates ideal conditions",
          "'Would inevitably' shows certain outcomes",
        ],
      },
    },
    commonSituations: [
      "Literary and creative writing",
      "Philosophical and academic discourse",
      "High-level professional contexts",
      "Cultural and artistic discussions",
      "Specialized academic research",
    ],
    references: [
      "English File Proficiency (Oxenden & Latham-Koenig, 2019)",
      "New Headway Proficiency (Soars & Soars, 2019)",
      "Face2Face Proficiency (Redston & Cunningham, 2019)",
      "Cutting Edge Proficiency (Cunningham & Moor, 2019)",
      "Total English Proficiency (Foley & Hall, 2019)",
    ],
  },

  // Original Modal Verbs Section (Preserved)
  ModalVerbs: {
    definition:
      "Modal verbs are auxiliary verbs that express ability, possibility, necessity, permission, or obligation.",
    commonModals: [
      "can",
      "could",
      "may",
      "might",
      "must",
      "shall",
      "should",
      "will",
      "would",
      "ought to",
      "need",
      "dare",
      "used to",
    ],
    functions: {
      Ability: {
        modals: ["can", "could"],
        examples: [
          "She **can** swim very fast.",
          "When I was younger, I **could** run 10 miles.",
        ],
      },
      Permission: {
        modals: ["can", "could", "may", "might"],
        examples: [
          "**Can** I leave early today?",
          "**May** I borrow your book?",
        ],
      },
      Possibility: {
        modals: ["may", "might", "could", "can"],
        examples: [
          "It **may** rain tomorrow.",
          "She **might** be at home now.",
        ],
      },
      "Obligation/Necessity": {
        modals: ["must", "have to", "need to"],
        examples: [
          "You **must** wear a seatbelt.",
          "I **have to** finish this work tonight.",
        ],
      },
      Advice: {
        modals: ["should", "ought to", "had better"],
        examples: [
          "You **should** see a doctor.",
          "We **ought to** respect our elders.",
        ],
      },
      Prediction: {
        modals: ["will", "shall", "would"],
        examples: [
          "She **will** be here soon.",
          "I **would** help if I could.",
        ],
      },
      Deduction: {
        modals: ["must", "can't", "couldn't"],
        examples: [
          "He **must** be tired – he worked all day.",
          "That **can't** be true!",
        ],
      },
      "Habit in the Past": {
        modals: ["used to", "would"],
        examples: [
          "I **used to** play the piano.",
          "When we were kids, we **would** go fishing every summer.",
        ],
      },
    },
    structure: {
      form: "modal verb + base verb",
      examples: ["She **can** dance.", "You **should** study more."],
    },
    recognitionTips: [
      "Modal verbs do not take '-s' in third person.",
      "They are always followed by the base form of the verb (bare infinitive).",
      "They do not use 'do/does/did' for questions or negatives (except semi-modals like 'have to').",
    ],
    commonErrors: [
      "Incorrect: He **can to swim**. ❌ → Correct: He **can swim**. ✅",
      "Incorrect: She **musts** go. ❌ → Correct: She **must go**. ✅",
      "Incorrect: Do you can help me? ❌ → Correct: **Can** you help me? ✅",
    ],
    notes: [
      "Modal verbs express speaker's attitude or intention.",
      "Some modals are more formal than others (e.g., 'may' is more formal than 'can').",
      "Modal verbs are commonly tested in grammar exams and speaking tests.",
    ],
  },

  // Advanced Modal Verb Patterns and Constructions
  advancedModalPatterns: {
    concept: "Advanced patterns and constructions involving modal verbs",
    modalPerfect: {
      pattern: "Modal verbs with perfect infinitives",
      examples: [
        "She must have finished the work by now.",
        "He could have been here earlier.",
        "They should have known better.",
        "I would have helped if I had known.",
      ],
    },
    modalContinuous: {
      pattern: "Modal verbs with continuous infinitives",
      examples: [
        "She must be working late tonight.",
        "He could be sleeping right now.",
        "They should be arriving soon.",
        "I would be studying if I had time.",
      ],
    },
    modalPassive: {
      pattern: "Modal verbs with passive infinitives",
      examples: [
        "The work must be completed by Friday.",
        "The letter should be sent immediately.",
        "The house could be sold quickly.",
        "The problem would be solved easily.",
      ],
    },
    doubleModals: {
      pattern: "Multiple modal verbs in complex constructions",
      examples: [
        "I would have to be able to swim.",
        "She might need to be able to drive.",
        "They could have to be willing to work.",
        "He should be able to be ready.",
      ],
    },
  },

  // Modal Verb Collocations and Fixed Expressions
  modalVerbCollocations: {
    concept: "Common collocations and fixed expressions involving modal verbs",
    academicCollocations: {
      pattern: "Academic writing modal combinations",
      examples: [
        "The results may indicate that...",
        "This could suggest a correlation...",
        "The study must demonstrate...",
        "Future research should focus on...",
      ],
    },
    businessCollocations: {
      pattern: "Business and professional modal combinations",
      examples: [
        "We must ensure that...",
        "The company should consider...",
        "This could potentially lead to...",
        "Management may decide to...",
      ],
    },
    everydayCollocations: {
      pattern: "Common everyday modal expressions",
      examples: [
        "I would like to...",
        "You should know that...",
        "It might be worth...",
        "We could always...",
      ],
    },
  },

  // Modal Verb Usage in Different Genres
  modalVerbGenreUsage: {
    concept: "Modal verb patterns across different genres and text types",
    formalWriting: {
      characteristics: "Precise and sophisticated modal usage",
      examples: [
        "The committee may consider the proposal.",
        "All participants must complete the registration.",
        "The findings should be interpreted carefully.",
        "Future studies could explore this area.",
      ],
    },
    informalWriting: {
      characteristics: "More relaxed and conversational modal usage",
      examples: [
        "I might go to the party.",
        "You should totally try that restaurant.",
        "We could grab coffee sometime.",
        "It would be awesome if you came.",
      ],
    },
    academicWriting: {
      characteristics: "Complex academic modal structures",
      examples: [
        "The methodology may require adjustment.",
        "The hypothesis could be supported by...",
        "The limitations must be acknowledged.",
        "Further research should address...",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive modal usage",
      examples: [
        "The wind might whisper secrets.",
        "Time would stand still in that moment.",
        "She could feel the magic in the air.",
        "The stars would guide them home.",
      ],
    },
  },

  // Modal Verb Frequency and Register
  modalVerbFrequencyAndRegister: {
    concept: "Frequency and register considerations in modal verb usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used modal combinations",
      examples: [
        "can + common verbs (can do, can see, can help)",
        "will + future actions (will go, will be, will have)",
        "should + advice (should do, should try, should see)",
        "would + hypothetical (would like, would go, would help)",
      ],
    },
    formalRegister: {
      characteristics: "Sophisticated and precise modal usage",
      examples: [
        "The board may approve the proposal.",
        "All employees must attend the meeting.",
        "The committee should review the documents.",
        "The process could be streamlined.",
      ],
    },
    informalRegister: {
      characteristics: "More relaxed modal usage",
      examples: [
        "I might go to the movies.",
        "You should totally try it.",
        "We could grab lunch.",
        "It would be cool if you came.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical modal usage",
      examples: [
        "The system must authenticate users.",
        "The algorithm may require optimization.",
        "The protocol should handle errors.",
        "The interface could be improved.",
      ],
    },
  },

  // Modal Verb Assessment and Evaluation
  modalVerbAssessment: {
    concept: "Assessment criteria and evaluation methods for modal verb usage",
    assessmentCriteria: {
      accuracy: "Correct modal form and usage",
      appropriateness: "Appropriate modal choice for context",
      register: "Appropriate register usage",
      fluency: "Natural modal usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with modal focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic can/can't for ability and permission",
      A2: "Could, should, must, will for basic functions",
      B1: "May/might, past modals, multiple meanings",
      B2: "Subtle distinctions, formal usage, complex patterns",
      C1: "Academic modals, nuanced expressions, sophisticated usage",
      C2: "Mastery in all contexts including literary and philosophical usage",
    },
  },

  // Modal Verb Learning Strategies
  modalVerbLearningStrategies: {
    concept: "Effective strategies for learning and mastering modal verbs",
    recognitionStrategies: {
      strategy: "Identifying modal functions and meanings",
      techniques: [
        "Learn modal function categories",
        "Recognize context clues",
        "Identify register differences",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily modal exercises",
        "Reading with modal focus",
        "Writing sentences with different modals",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing modal patterns and meanings",
      techniques: [
        "Learn modal function groups",
        "Remember common collocations",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying modal rules in communication",
      techniques: [
        "Start with basic functions",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Modal Verbs in Language Tests
  modalVerbsInTests: {
    concept: "Modal verbs in standardized language tests",
    testTypes: {
      TOEFL: "Academic modal patterns and formal usage",
      IELTS: "Both academic and general modal usage",
      Cambridge: "British English modal variations",
      TOEIC: "Business and professional modal usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct modal",
      sentenceCompletion: "Complete with correct modal",
      errorIdentification: "Find modal errors",
      textEditing: "Correct modal usage in text",
    },
    testStrategies: {
      functionRecognition: "Quickly identify modal functions",
      contextAnalysis: "Analyze context for appropriate modal",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Modal Verb Mistakes
  commonModalVerbMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      toInfinitive: {
        error: "Adding 'to' after modal verbs",
        example: "He can to swim. ❌",
        correction: "He can swim. ✅",
        explanation:
          "Modal verbs are followed by base verb, not 'to' infinitive",
      },
      thirdPersonS: {
        error: "Adding -s to modal verbs",
        example: "She musts go. ❌",
        correction: "She must go. ✅",
        explanation: "Modal verbs don't change form for third person",
      },
      doSupport: {
        error: "Using do/does/did with modals",
        example: "Do you can help me? ❌",
        correction: "Can you help me? ✅",
        explanation: "Modal verbs don't need do-support for questions",
      },
      wrongModal: {
        error: "Using wrong modal for context",
        example: "I must go to the party. (when you want to) ❌",
        correction: "I want to go to the party. ✅",
        explanation: "Use appropriate modal for intended meaning",
      },
      missingModal: {
        error: "Omitting modal where needed",
        example: "I go to the party. (when asking permission) ❌",
        correction: "Can I go to the party? ✅",
        explanation: "Use modal to express appropriate function",
      },
    },
    preventionStrategies: {
      functionMemorization: "Memorize modal function categories",
      patternPractice: "Practice modal patterns regularly",
      contextAwareness: "Always consider context and register",
      formPractice: "Practice modal forms without auxiliary verbs",
    },
  },
};

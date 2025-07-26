const WordOrderData = {
  // --- Comprehensive Word Order Reference ---
  // Definition of Word Order
  wordOrderDefinition: {
    concept:
      "Word order refers to the systematic arrangement of words in sentences to convey meaning, establish relationships between elements, and create grammatical structures.",
    importance:
      "Essential for clear communication, grammatical accuracy, and natural-sounding English in all contexts",
    corePrinciple:
      "Uses specific patterns and arrangements of sentence elements to create meaning and maintain grammatical relationships",
    scope:
      "Applies to all communicative contexts where sentence structure, emphasis, and clarity are important",
  },

  // A1 Level - Basic Word Order (Beginner)
  A1: {
    definition: "Basic word order patterns with simple sentence structures",
    basicSVO: {
      concept: "Simple Subject + Verb + Object structure",
      patterns: [
        "Subject + Verb + Object",
        "Subject + be + Adjective/Noun",
        "Subject + be + Place",
      ],
      examples: [
        "I like coffee.",
        "She is happy.",
        "They are students.",
        "He is at home.",
      ],
      exercises: [
        "Complete: I ___ (like) coffee.",
        "Complete: She ___ (is) happy.",
        "Complete: They ___ (are) students.",
      ],
    },
    basicQuestions: {
      concept: "Simple question word order",
      patterns: [
        "Auxiliary + Subject + Verb?",
        "Be + Subject + Adjective/Noun?",
        "WH-word + Auxiliary + Subject + Verb?",
      ],
      examples: [
        "Do you like coffee?",
        "Are you happy?",
        "Where do you live?",
        "What is your name?",
      ],
    },
    exercises: [
      "Complete: I ___ (like) coffee.",
      "Complete: ___ (Do) you like coffee?",
      "Complete: ___ (Are) you happy?",
    ],
  },

  // A2 Level - Elementary Word Order
  A2: {
    definition: "Word order with adverbs and basic modifiers",
    adverbPlacement: {
      concept: "Basic adverb placement in sentences",
      patterns: [
        "Subject + Adverb + Verb",
        "Subject + be + Adverb",
        "Subject + Verb + Adverb",
      ],
      examples: [
        "I always go to school.",
        "She is usually happy.",
        "He works hard.",
        "They speak slowly.",
      ],
    },
    timePlaceOrder: {
      concept: "Basic time and place word order",
      patterns: [
        "Subject + Verb + Place + Time",
        "Subject + Verb + Object + Place",
        "Subject + Verb + Object + Time",
      ],
      examples: [
        "I go to school every day.",
        "She reads books at home.",
        "They eat dinner at 7 PM.",
        "He works in the office.",
      ],
    },
    exercises: [
      "Complete: I ___ (always) go to school.",
      "Complete: She is ___ (usually) happy.",
      "Complete: I go to school ___ (every day).",
    ],
  },

  // B1 Level - Intermediate Word Order
  B1: {
    definition: "Complex word order patterns with multiple elements",
    complexAdverbPlacement: {
      concept: "Advanced adverb placement and frequency",
      patterns: [
        "Subject + Adverb + Verb + Object",
        "Subject + be + Adverb + Adjective",
        "Subject + Verb + Object + Adverb",
      ],
      examples: [
        "I usually drink coffee in the morning.",
        "She is always very helpful.",
        "He speaks English fluently.",
        "They work hard every day.",
      ],
    },
    indirectObjects: {
      concept: "Word order with indirect and direct objects",
      patterns: [
        "Subject + Verb + Indirect Object + Direct Object",
        "Subject + Verb + Direct Object + to/for + Indirect Object",
      ],
      examples: [
        "I gave him a book.",
        "She sent me an email.",
        "I bought a gift for her.",
        "He wrote a letter to his friend.",
      ],
    },
    exercises: [
      "Complete: I ___ (usually) drink coffee in the morning.",
      "Complete: I gave ___ (him) a book.",
      "Complete: I bought a gift ___ (for) her.",
    ],
  },

  // B2 Level - Upper Intermediate Word Order
  B2: {
    definition: "Advanced word order with complex structures and emphasis",
    emphasisWordOrder: {
      concept: "Word order for emphasis and focus",
      patterns: [
        "Adverb + Subject + Verb",
        "Object + Subject + Verb",
        "Time + Subject + Verb",
      ],
      examples: [
        "Usually, I wake up early.",
        "This book, I really enjoyed.",
        "Yesterday, she arrived late.",
        "Never have I seen such beauty.",
      ],
    },
    complexModifiers: {
      concept: "Word order with complex adjectives and modifiers",
      patterns: [
        "Subject + be + Adjective + to + Verb",
        "Subject + Verb + Object + Adjective",
        "Subject + be + too + Adjective + to + Verb",
      ],
      examples: [
        "This problem is difficult to solve.",
        "I found the movie interesting.",
        "The task is too complex to complete.",
        "She made the situation clear.",
      ],
    },
    exercises: [
      "Complete: ___ (Usually), I wake up early.",
      "Complete: This problem is ___ (difficult) to solve.",
      "Complete: The task is ___ (too) complex to complete.",
    ],
  },

  // C1 Level - Advanced Word Order
  C1: {
    definition:
      "Sophisticated word order for academic and professional contexts",
    academicWordOrder: {
      concept: "Word order in academic and formal writing",
      patterns: [
        "It + be + Adjective + to + Verb",
        "There + be + Subject + Place/Time",
        "Subject + Verb + that + Clause",
      ],
      examples: [
        "It is important to consider all factors.",
        "There are many students in the library.",
        "The study shows that exercise improves health.",
        "It appears that the theory is correct.",
      ],
    },
    complexInversions: {
      concept: "Complex word order inversions for emphasis",
      patterns: [
        "Not only + Auxiliary + Subject + Verb",
        "Rarely + Auxiliary + Subject + Verb",
        "Only + Time + Auxiliary + Subject + Verb",
      ],
      examples: [
        "Not only did she pass the test, but she also got the highest score.",
        "Rarely do we see such dedication.",
        "Only then did I understand the problem.",
        "Never before had I experienced such joy.",
      ],
    },
    exercises: [
      "Complete: ___ (It) is important to consider all factors.",
      "Complete: ___ (Not only) did she pass the test, but she also got the highest score.",
      "Complete: ___ (Rarely) do we see such dedication.",
    ],
  },

  // C2 Level - Mastery Word Order
  C2: {
    definition:
      "Mastery of word order in all contexts including nuanced and specialized usage",
    literaryWordOrder: {
      concept: "Word order in literary and creative contexts",
      patterns: [
        "Poetic inversions for dramatic effect",
        "Stylistic word order variations",
        "Emphasis through word order manipulation",
        "Rhetorical word order patterns",
      ],
      examples: [
        "Into the valley of death rode the six hundred. (poetic inversion)",
        "Beautiful beyond words was the sunset. (stylistic emphasis)",
        "What we need is not more time, but better planning. (rhetorical)",
        "Never in the field of human conflict was so much owed by so many to so few. (Churchill)",
      ],
    },
    specializedWordOrder: {
      concept: "Word order in specialized professional contexts",
      patterns: [
        "Legal word order constructions",
        "Technical word order patterns",
        "Scientific word order structures",
        "Philosophical word order expressions",
      ],
      examples: [
        "Hereby is it declared that the contract is null and void. (legal)",
        "Configured properly must the system be before operation. (technical)",
        "Demonstrated conclusively has been the relationship between variables. (scientific)",
        "Questioned must be the very foundations of our assumptions. (philosophical)",
      ],
    },
    exercises: [
      "Complete: ___ (Into) the valley of death rode the six hundred.",
      "Complete: ___ (Beautiful) beyond words was the sunset.",
      "Complete: ___ (Hereby) is it declared that the contract is null and void.",
    ],
  },

  // Original Word Order Section (Preserved)
  WordOrder: {
    definition:
      "Word order refers to the arrangement of words in a sentence. In English, the standard word order is Subject + Verb + Object (SVO).",
    basicStructure: {
      statement: "Subject + Verb + Object (SVO)",
      example: "She (S) eats (V) an apple (O).",
    },
    otherStructures: {
      placeAndTime: {
        rule: "Manner – Place – Time",
        example:
          "He spoke politely (manner) in the meeting (place) yesterday (time).",
      },
      adverbs: {
        midPosition: {
          rule: "Adverbs of frequency go before the main verb, but after 'be'.",
          examples: [
            "She always goes to work early.",
            "He is usually at home.",
          ],
        },
        endPosition: {
          rule: "Adverbs of manner/place/time can go at the end of a sentence.",
          examples: [
            "She sings beautifully.",
            "They arrived at the station late.",
          ],
        },
        frontPosition: {
          rule: "Some adverbs can appear at the beginning for emphasis.",
          examples: [
            "Usually, I wake up at 6 AM.",
            "Suddenly, the lights went out.",
          ],
        },
      },
      questions: {
        yesNo: "Auxiliary + Subject + Verb (Do you like it?)",
        wh: "WH-word + Auxiliary + Subject + Verb (Where do you live?)",
      },
      negatives: {
        rule: "Subject + Auxiliary + not + Main Verb",
        example: "She does not like coffee.",
      },
      modifiers: {
        rule: "Adjectives come before nouns. Adverbs modify verbs, adjectives, or other adverbs.",
        examples: ["A beautiful house.", "He ran very quickly."],
      },
      objectOrder: {
        rule: "Indirect Object + Direct Object (or) Direct + to/for + Indirect",
        examples: ["She gave him a gift.", "She gave a gift to him."],
      },
    },
    commonPatterns: [
      "S + V + O",
      "S + V + IO + DO",
      "S + V + Place + Time",
      "S + Adv + V",
      "S + be + Adj/Noun/Place",
    ],
    recognitionTips: [
      "Subject usually comes before the verb in statements.",
      "Be careful with adverb placement – especially frequency adverbs.",
      "Indirect object often comes before direct object if no preposition is used.",
    ],
    commonErrors: [
      "Incorrect: Always she goes to school. ❌ → Correct: She always goes to school. ✅",
      "Incorrect: She drinks in the morning coffee. ❌ → Correct: She drinks coffee in the morning. ✅",
      "Incorrect: Gave she me a book. ❌ → Correct: She gave me a book. ✅",
    ],
    notes: [
      "Word order is more fixed in English than in many other languages.",
      "Changing word order can affect meaning or make a sentence ungrammatical.",
      "In questions and negatives, auxiliaries help form correct word order.",
    ],
  },

  // Advanced Word Order Patterns and Constructions
  advancedWordOrderPatterns: {
    concept: "Advanced patterns and constructions involving word order",
    cleftSentences: {
      pattern: "Cleft sentences for emphasis and focus",
      examples: [
        "It was John who won the prize.",
        "What I need is more time.",
        "It's the effort that counts.",
        "What matters most is honesty.",
      ],
    },
    pseudoCleftSentences: {
      pattern: "Pseudo-cleft sentences with 'what' and 'all'",
      examples: [
        "What I want is a vacation.",
        "All I need is some rest.",
        "What she said was true.",
        "All he does is complain.",
      ],
    },
    fronting: {
      pattern: "Moving elements to the front for emphasis",
      examples: [
        "This book, I really enjoyed.",
        "Never have I seen such beauty.",
        "Only then did I understand.",
        "Rarely do we get such opportunities.",
      ],
    },
    extraposition: {
      pattern: "Moving heavy elements to the end of sentences",
      examples: [
        "It is important to consider all factors.",
        "It seems that the weather will improve.",
        "It appears that the theory is correct.",
        "It is clear that action is needed.",
      ],
    },
  },

  // Word Order Collocations and Fixed Expressions
  wordOrderCollocations: {
    concept: "Common collocations and fixed expressions involving word order",
    adverbCollocations: {
      pattern: "Common adverb placement combinations",
      examples: [
        "always + verb + object",
        "usually + be + adjective",
        "never + auxiliary + subject + verb",
        "often + subject + verb + adverb",
      ],
    },
    emphasisCollocations: {
      pattern: "Word order patterns for emphasis",
      examples: [
        "not only + auxiliary + subject + verb",
        "rarely + auxiliary + subject + verb",
        "only + time + auxiliary + subject + verb",
        "never + auxiliary + subject + verb",
      ],
    },
    formalCollocations: {
      pattern: "Formal word order expressions",
      examples: [
        "it + be + adjective + to + verb",
        "there + be + subject + place",
        "subject + verb + that + clause",
        "it + appear + that + clause",
      ],
    },
  },

  // Word Order Usage in Different Genres
  wordOrderGenreUsage: {
    concept: "Word order patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and sophisticated word order usage",
      examples: [
        "It is imperative that all factors be considered.",
        "There exists a significant correlation between variables.",
        "The study demonstrates that exercise improves health.",
        "It appears that the hypothesis is supported by the data.",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational word order usage",
      examples: [
        "I really like this book.",
        "She always goes to the gym.",
        "They never eat fast food.",
        "He usually works from home.",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic word order structures",
      examples: [
        "It is crucial to consider methodological limitations.",
        "There are several factors that influence outcomes.",
        "The research indicates that the theory is valid.",
        "It appears that the findings support the hypothesis.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive word order usage",
      examples: [
        "Into the darkness crept the shadow.",
        "Beautiful beyond words was the sunset.",
        "Never had she felt such joy.",
        "What we need is not more time, but better planning.",
      ],
    },
  },

  // Word Order Frequency and Register
  wordOrderFrequencyAndRegister: {
    concept: "Frequency and register considerations in word order usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used word order combinations",
      examples: [
        "S + V + O (very common)",
        "S + be + adjective (frequent)",
        "S + adverb + V (common)",
        "S + V + place + time (common)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise word order usage",
      examples: [
        "It is essential to consider all implications.",
        "There exists a significant relationship.",
        "The evidence suggests that the theory is correct.",
        "It appears that the results are conclusive.",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed word order usage",
      examples: [
        "I really like this movie.",
        "She always goes to the park.",
        "They never eat vegetables.",
        "He usually works late.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical word order usage",
      examples: [
        "It is necessary to configure the parameters.",
        "There exists a direct correlation between variables.",
        "The system requires that all components be initialized.",
        "It appears that the configuration is optimal.",
      ],
    },
  },

  // Word Order Exercises and Practice Activities
  wordOrderExercises: {
    concept: "Comprehensive exercises for practicing word order",
    basicExercises: {
      type: "Simple word order formation",
      exercises: [
        "I ___ (like) coffee.",
        "She ___ (is) happy.",
        "They ___ (are) students.",
        "He ___ (works) hard.",
      ],
    },
    intermediateExercises: {
      type: "Complex word order usage",
      exercises: [
        "I ___ (usually) drink coffee in the morning.",
        "I gave ___ (him) a book.",
        "I bought a gift ___ (for) her.",
        "___ (Usually), I wake up early.",
      ],
    },
    advancedExercises: {
      type: "Advanced word order patterns",
      exercises: [
        "___ (It) is important to consider all factors.",
        "___ (Not only) did she pass the test, but she also got the highest score.",
        "___ (Rarely) do we see such dedication.",
        "___ (Into) the valley of death rode the six hundred.",
      ],
    },
    errorCorrection: {
      type: "Identify and correct word order errors",
      exercises: [
        "Always she goes to school. → ___",
        "She drinks in the morning coffee. → ___",
        "Gave she me a book. → ___",
        "I like very much this movie. → ___",
      ],
    },
  },

  // Word Order Assessment and Evaluation
  wordOrderAssessment: {
    concept: "Assessment criteria and evaluation methods for word order usage",
    assessmentCriteria: {
      accuracy: "Correct word order and sentence structure",
      appropriateness: "Appropriate word order choice for context",
      register: "Appropriate register usage",
      fluency: "Natural word order usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with word order focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic SVO structure, simple questions and statements",
      A2: "Adverb placement, time and place order, basic modifiers",
      B1: "Complex adverb placement, indirect objects, multiple elements",
      B2: "Emphasis word order, complex modifiers, advanced structures",
      C1: "Academic word order, complex inversions, sophisticated patterns",
      C2: "Mastery in all contexts including literary and specialized usage",
    },
  },

  // Word Order Learning Strategies
  wordOrderLearningStrategies: {
    concept: "Effective strategies for learning and mastering word order",
    recognitionStrategies: {
      strategy: "Identifying word order patterns and structures",
      techniques: [
        "Learn basic SVO pattern",
        "Recognize adverb placement rules",
        "Identify emphasis patterns",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily word order exercises",
        "Reading with word order focus",
        "Writing sentences with different patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing word order patterns and rules",
      techniques: [
        "Learn common word order formulas",
        "Remember adverb placement rules",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying word order rules in communication",
      techniques: [
        "Start with simple patterns",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Word Order in Language Tests
  wordOrderInTests: {
    concept: "Word order in standardized language tests",
    testTypes: {
      TOEFL: "Academic word order patterns and formal usage",
      IELTS: "Both academic and general word order usage",
      Cambridge: "British English word order variations",
      TOEIC: "Business and professional word order usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct word order",
      sentenceCompletion: "Complete with correct word order",
      errorIdentification: "Find word order errors",
      textEditing: "Correct word order usage in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify basic SVO and adverb patterns",
      contextAnalysis: "Analyze context for appropriate word order",
      emphasisAwareness: "Consider emphasis and focus in word order",
    },
  },

  // Common Word Order Mistakes
  commonWordOrderMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      adverbPlacement: {
        error: "Incorrect adverb placement",
        example: "Always she goes to school. ❌",
        correction: "She always goes to school. ✅",
        explanation: "Frequency adverbs go before main verb, after 'be'",
      },
      timePlaceOrder: {
        error: "Incorrect time and place order",
        example: "She drinks in the morning coffee. ❌",
        correction: "She drinks coffee in the morning. ✅",
        explanation: "Follow Manner-Place-Time order",
      },
      subjectVerbOrder: {
        error: "Incorrect subject-verb order in statements",
        example: "Gave she me a book. ❌",
        correction: "She gave me a book. ✅",
        explanation: "Use Subject + Verb + Object order in statements",
      },
      adjectivePlacement: {
        error: "Incorrect adjective placement",
        example: "I like very much this movie. ❌",
        correction: "I like this movie very much. ✅",
        explanation: "Adjectives go before nouns, adverbs after verbs",
      },
      objectOrder: {
        error: "Incorrect object order",
        example: "I gave a book him. ❌",
        correction: "I gave him a book. ✅",
        explanation: "Use Indirect Object + Direct Object order",
      },
    },
    preventionStrategies: {
      patternPractice: "Practice basic SVO pattern regularly",
      adverbPractice: "Learn adverb placement rules",
      contextPractice: "Practice word order in different contexts",
      emphasisPractice: "Practice emphasis patterns",
    },
  },
};

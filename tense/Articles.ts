const ArticlesData = {
  // --- Comprehensive Articles Reference ---
  // Definition of Articles
  articlesDefinition: {
    concept:
      "Articles are determiners that specify the definiteness of nouns, indicating whether something is specific, general, or unique.",
    importance:
      "Essential for natural English expression and grammatical accuracy",
    corePrinciple:
      "Articles help distinguish between specific and general references, and between countable and uncountable nouns",
    scope:
      "Applies to all noun phrases and affects meaning and clarity in English communication",
  },

  // A1 Level - Basic Articles (Beginner)
  A1: {
    definition: "Basic article usage with simple nouns and common patterns",
    basicIndefiniteArticles: {
      concept: "Simple 'a' and 'an' usage with basic nouns",
      patterns: [
        "a + consonant sound (a dog, a book, a house)",
        "an + vowel sound (an apple, an elephant, an orange)",
        "a/an + singular countable noun (first mention)",
      ],
      examples: [
        "I have a dog.",
        "She bought an apple.",
        "There is a book on the table.",
        "I saw an elephant at the zoo.",
      ],
      exercises: [
        "Complete: I have ___ (dog).",
        "Complete: She bought ___ (apple).",
        "Complete: There is ___ (book) on the table.",
      ],
    },
    basicDefiniteArticle: {
      concept: "Simple 'the' usage with specific nouns",
      patterns: [
        "the + noun (when both speaker and listener know)",
        "the + unique objects (the sun, the moon, the earth)",
        "the + noun (second mention)",
      ],
      examples: [
        "The sun is bright.",
        "I saw a cat. The cat was black.",
        "The moon is beautiful tonight.",
        "Close the door, please.",
      ],
    },
    exercises: [
      "Complete: I have ___ (dog). ___ (dog) is brown.",
      "Complete: ___ (sun) is bright today.",
      "Complete: I bought ___ (apple). ___ (apple) is red.",
    ],
  },

  // A2 Level - Elementary Articles
  A2: {
    definition: "Article usage with more complex nouns and basic exceptions",
    expandedArticleUsage: {
      concept: "Articles with different types of nouns and contexts",
      patterns: [
        "a/an + profession (I am a teacher)",
        "a/an + nationality (She is an American)",
        "the + superlatives (the best, the most beautiful)",
        "the + ordinal numbers (the first, the second)",
      ],
      examples: [
        "I am a teacher.",
        "She is an American.",
        "This is the best movie I've seen.",
        "He lives on the second floor.",
      ],
    },
    basicZeroArticle: {
      concept: "When not to use articles",
      patterns: [
        "No article + plural countable nouns (general)",
        "No article + uncountable nouns (general)",
        "No article + names of people and places",
      ],
      examples: [
        "I like dogs. (general)",
        "I drink water. (general)",
        "John lives in London.",
        "I study English.",
      ],
    },
    exercises: [
      "Complete: I am ___ (teacher).",
      "Complete: This is ___ (best) movie.",
      "Complete: I like ___ (dogs).",
      "Complete: John lives in ___ (London).",
    ],
  },

  // B1 Level - Intermediate Articles
  B1: {
    definition:
      "Complex article usage with abstract nouns and specific contexts",
    abstractNouns: {
      concept: "Articles with abstract and uncountable nouns",
      patterns: [
        "the + abstract noun (specific concept)",
        "no article + abstract noun (general concept)",
        "a/an + abstract noun (specific instance)",
      ],
      examples: [
        "The love I feel for you is strong. (specific)",
        "Love is beautiful. (general)",
        "She has a love for music. (specific instance)",
        "The happiness of children is important.",
      ],
    },
    geographicalArticles: {
      concept: "Articles with geographical names and places",
      patterns: [
        "the + countries with 'Republic', 'Kingdom', 'States'",
        "the + mountain ranges, oceans, rivers",
        "no article + most countries, cities, continents",
      ],
      examples: [
        "I live in the United States.",
        "The Nile is a long river.",
        "I visited France last year.",
        "The Alps are beautiful mountains.",
      ],
    },
    exercises: [
      "Complete: ___ (love) I feel for you is strong.",
      "Complete: I live in ___ (United States).",
      "Complete: ___ (Nile) is a long river.",
      "Complete: I visited ___ (France) last year.",
    ],
  },

  // B2 Level - Upper Intermediate Articles
  B2: {
    definition:
      "Advanced article usage with complex noun phrases and academic contexts",
    complexNounPhrases: {
      concept: "Articles with complex noun phrases and modifiers",
      patterns: [
        "the + adjective + noun (the red car)",
        "a/an + adjective + noun (a beautiful house)",
        "the + superlative + noun (the most interesting book)",
        "a/an + comparative + noun (a more difficult problem)",
      ],
      examples: [
        "The red car is mine.",
        "I live in a beautiful house.",
        "This is the most interesting book I've read.",
        "It's a more difficult problem than I expected.",
      ],
    },
    academicArticles: {
      concept: "Article usage in academic and formal contexts",
      patterns: [
        "the + specific academic concepts",
        "a/an + general academic concepts",
        "no article + academic subjects and languages",
      ],
      examples: [
        "The theory of relativity was developed by Einstein.",
        "A theory must be testable.",
        "I study mathematics and physics.",
        "The research shows interesting results.",
      ],
    },
    exercises: [
      "Complete: ___ (red car) is mine.",
      "Complete: This is ___ (most interesting) book.",
      "Complete: ___ (theory of relativity) was developed by Einstein.",
      "Complete: I study ___ (mathematics) and ___ (physics).",
    ],
  },

  // C1 Level - Advanced Articles
  C1: {
    definition:
      "Sophisticated article usage for academic and professional contexts",
    specializedContexts: {
      concept: "Articles in specialized and professional contexts",
      patterns: [
        "the + specific technical terms",
        "a/an + general technical concepts",
        "the + institutional names",
        "no article + company names (usually)",
      ],
      examples: [
        "The Internet has revolutionized communication.",
        "A computer is essential for modern work.",
        "The University of Oxford is prestigious.",
        "Microsoft is a technology company.",
      ],
    },
    literaryArticles: {
      concept: "Articles in literary and creative contexts",
      patterns: [
        "the + metaphorical concepts",
        "a/an + symbolic references",
        "the + personification",
        "no article + poetic expressions",
      ],
      examples: [
        "The road less traveled leads to success.",
        "She has a heart of gold.",
        "The wind whispered through the trees.",
        "Time waits for no one.",
      ],
    },
    exercises: [
      "Complete: ___ (Internet) has revolutionized communication.",
      "Complete: ___ (University of Oxford) is prestigious.",
      "Complete: ___ (road less traveled) leads to success.",
      "Complete: ___ (time) waits for no one.",
    ],
  },

  // C2 Level - Mastery Articles
  C2: {
    definition:
      "Mastery of articles in all contexts including nuanced and specialized usage",
    philosophicalArticles: {
      concept: "Articles in philosophical and abstract contexts",
      patterns: [
        "the + abstract philosophical concepts",
        "a/an + specific philosophical instances",
        "no article + universal concepts",
        "the + metaphysical references",
      ],
      examples: [
        "The meaning of life is subjective.",
        "A meaning can be found in every experience.",
        "Truth is relative to perspective.",
        "The nature of reality is complex.",
      ],
    },
    technicalArticles: {
      concept: "Articles in highly specialized technical contexts",
      patterns: [
        "the + specific technical specifications",
        "a/an + general technical principles",
        "the + scientific phenomena",
        "no article + mathematical concepts",
      ],
      examples: [
        "The quantum theory explains particle behavior.",
        "A theory must be falsifiable.",
        "The Big Bang occurred 13.8 billion years ago.",
        "Infinity is a mathematical concept.",
      ],
    },
    exercises: [
      "Complete: ___ (meaning of life) is subjective.",
      "Complete: ___ (truth) is relative to perspective.",
      "Complete: ___ (quantum theory) explains particle behavior.",
      "Complete: ___ (infinity) is a mathematical concept.",
    ],
  },

  // Original Articles Section (Preserved)
  Articles: {
    definition:
      "Articles are words that define a noun as specific or unspecific. In English, the main articles are 'a', 'an', and 'the'.",
    types: {
      "Indefinite Articles": {
        words: ["a", "an"],
        usage: [
          "Used before singular, countable nouns when referring to something not specific or mentioned for the first time.",
          "Use 'a' before words that begin with a consonant sound.",
          "Use 'an' before words that begin with a vowel sound.",
        ],
        examples: [
          "I saw **a** dog in the park.",
          "She wants to buy **an** umbrella.",
        ],
      },
      "Definite Article": {
        word: "the",
        usage: [
          "Used before singular or plural nouns when referring to something specific or already mentioned.",
          "Used when both the speaker and listener know what is being referred to.",
          "Used with unique objects or concepts.",
        ],
        examples: [
          "I saw **a** cat. **The** cat was black.",
          "**The** sun is bright today.",
          "She went to **the** doctor.",
        ],
      },
      "Zero Article": {
        description:
          "When no article is used, often before plural or uncountable nouns when speaking generally.",
        usage: [
          "Used with names of languages, subjects, meals, most countries, and general statements.",
          "Used with uncountable nouns and plural countable nouns in a general sense.",
        ],
        examples: [
          "Children love **music**.",
          "He studies **biology**.",
          "**Breakfast** is ready.",
          "I love **dogs**.",
        ],
      },
    },
    recognitionTips: [
      "Check if the noun is countable or uncountable.",
      "Look for vowel/consonant sounds (not spelling!) to choose between 'a' or 'an'.",
      "Use 'the' when the noun is already known or mentioned earlier.",
    ],
    commonErrors: [
      "Incorrect: She is **an** university student. ❌ → Correct: She is **a** university student. ✅",
      "Incorrect: I like **the** pizza. (when speaking generally) ❌ → Correct: I like **pizza**. ✅",
      "Incorrect: He is **a** honest man. ❌ → Correct: He is **an** honest man. ✅",
    ],
    notes: [
      "'A' and 'an' are never used with plural nouns or uncountable nouns.",
      "'The' can be used with any kind of noun (singular, plural, countable, or uncountable).",
      "Certain place names follow special rules (e.g., 'the Netherlands', 'the USA').",
    ],
  },

  // Advanced Article Patterns and Constructions
  advancedArticlePatterns: {
    concept: "Advanced patterns and constructions involving articles",
    articleWithPrepositions: {
      pattern: "Articles in prepositional phrases",
      examples: [
        "I went to the store. / I went to school.",
        "She is in the hospital. / She is in hospital.",
        "He works at the university. / He works at university.",
        "They live in the country. / They live in the countryside.",
      ],
    },
    articleWithQuantifiers: {
      pattern: "Articles with quantifiers and expressions of quantity",
      examples: [
        "A lot of people came to the party.",
        "The majority of students passed the exam.",
        "A few books are missing from the library.",
        "The rest of the money was spent on food.",
      ],
    },
    articleWithPartitives: {
      pattern: "Articles with partitive expressions",
      examples: [
        "A piece of cake was left on the table.",
        "The majority of the population lives in cities.",
        "A bit of advice would be helpful.",
        "The rest of the story was interesting.",
      ],
    },
    articleWithTimeExpressions: {
      pattern: "Articles with time expressions and periods",
      examples: [
        "I'll see you in the morning. / I'll see you in the afternoon.",
        "The 1960s were a time of change.",
        "A century ago, things were different.",
        "The future looks bright for technology.",
      ],
    },
  },

  // Article Collocations and Fixed Expressions
  articleCollocations: {
    concept: "Common collocations and fixed expressions involving articles",
    academicCollocations: {
      pattern: "Academic writing article combinations",
      examples: [
        "The research shows that...",
        "A study conducted by...",
        "The findings indicate...",
        "An analysis of the data reveals...",
      ],
    },
    businessCollocations: {
      pattern: "Business and professional article combinations",
      examples: [
        "The company announced that...",
        "A meeting was held to discuss...",
        "The board approved the proposal.",
        "An agreement was reached between...",
      ],
    },
    everydayCollocations: {
      pattern: "Common everyday article expressions",
      examples: [
        "The other day, I saw...",
        "A friend of mine told me...",
        "The thing is that...",
        "An idea came to me...",
      ],
    },
  },

  // Article Usage in Different Genres
  articleGenreUsage: {
    concept: "Article patterns across different genres and text types",
    formalWriting: {
      characteristics: "Precise and consistent article usage",
      examples: [
        "The committee reviewed the proposal.",
        "A comprehensive analysis was conducted.",
        "The findings support the hypothesis.",
        "An investigation revealed the cause.",
      ],
    },
    informalWriting: {
      characteristics: "More flexible and conversational article usage",
      examples: [
        "The thing is, I don't really know.",
        "A friend of mine said...",
        "The problem with that is...",
        "An idea just popped into my head.",
      ],
    },
    academicWriting: {
      characteristics: "Complex academic article usage",
      examples: [
        "The methodology employed in this study...",
        "A significant correlation was found...",
        "The literature review revealed...",
        "An examination of the data suggests...",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive article usage",
      examples: [
        "The wind whispered through the ancient trees.",
        "A shadow moved across the moonlit floor.",
        "The darkness held secrets of its own.",
        "An echo of laughter filled the empty halls.",
      ],
    },
  },

  // Article Frequency and Register
  articleFrequencyAndRegister: {
    concept: "Frequency and register considerations in article usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used article combinations",
      examples: [
        "the + most common nouns (the book, the car, the house)",
        "a/an + common countable nouns (a book, an apple)",
        "no article + common uncountable nouns (water, air, love)",
      ],
    },
    formalRegister: {
      characteristics: "Precise and consistent article usage",
      examples: [
        "The committee has reached a decision.",
        "A comprehensive review was conducted.",
        "The findings indicate a significant trend.",
        "An analysis of the data reveals...",
      ],
    },
    informalRegister: {
      characteristics: "More relaxed article usage",
      examples: [
        "The thing is, I don't really care.",
        "A friend of mine told me...",
        "The problem with that is...",
        "An idea just came to me.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical article usage",
      examples: [
        "The algorithm processes the data efficiently.",
        "A parameter controls the system behavior.",
        "The interface provides access to the database.",
        "An error occurred during the execution.",
      ],
    },
  },

  // Article Exercises and Practice Activities
  articleExercises: {
    concept: "Comprehensive exercises for practicing article usage",
    basicExercises: {
      type: "Simple article completion",
      exercises: [
        "I have ___ (dog).",
        "She bought ___ (apple).",
        "___ (sun) is bright today.",
        "I like ___ (music).",
      ],
    },
    intermediateExercises: {
      type: "Complex article usage",
      exercises: [
        "I am ___ (teacher).",
        "This is ___ (best) movie.",
        "I live in ___ (United States).",
        "___ (love) I feel for you is strong.",
      ],
    },
    advancedExercises: {
      type: "Advanced article patterns",
      exercises: [
        "___ (Internet) has revolutionized communication.",
        "___ (meaning of life) is subjective.",
        "___ (quantum theory) explains particle behavior.",
        "___ (truth) is relative to perspective.",
      ],
    },
    errorCorrection: {
      type: "Identify and correct article errors",
      exercises: [
        "She is an university student. → ___",
        "I like the pizza. (general) → ___",
        "He is a honest man. → ___",
        "I visited the France. → ___",
      ],
    },
  },

  // Article Assessment and Evaluation
  articleAssessment: {
    concept: "Assessment criteria and evaluation methods for article usage",
    assessmentCriteria: {
      accuracy: "Correct article form and usage",
      consistency: "Consistent article usage throughout text",
      register: "Appropriate register usage",
      fluency: "Natural article usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with article focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic a/an/the with simple nouns",
      A2: "Articles with different noun types and basic exceptions",
      B1: "Complex articles with abstract nouns and geographical names",
      B2: "Advanced articles with complex noun phrases and academic contexts",
      C1: "Sophisticated articles for academic and professional contexts",
      C2: "Mastery in all contexts including nuanced and specialized usage",
    },
  },

  // Article Learning Strategies
  articleLearningStrategies: {
    concept: "Effective strategies for learning and mastering article usage",
    recognitionStrategies: {
      strategy: "Identifying article patterns and rules",
      techniques: [
        "Learn countable vs uncountable nouns",
        "Recognize specific vs general references",
        "Identify vowel vs consonant sounds",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily article exercises",
        "Reading with article focus",
        "Writing sentences with different article patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing article rules and exceptions",
      techniques: [
        "Learn common article patterns",
        "Remember geographical exceptions",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying article rules in communication",
      techniques: [
        "Start with simple patterns",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Articles in Language Tests
  articlesInTests: {
    concept: "Articles in standardized language tests",
    testTypes: {
      TOEFL: "Academic article patterns and formal usage",
      IELTS: "Both academic and general article usage",
      Cambridge: "British English article variations",
      TOEIC: "Business and professional article usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct article",
      sentenceCompletion: "Complete with correct article",
      errorIdentification: "Find article errors",
      textEditing: "Correct article usage in text",
    },
    testStrategies: {
      contextAnalysis: "Analyze the context for specific vs general reference",
      soundRecognition: "Focus on sound, not spelling for a/an",
      patternRecognition: "Recognize common article patterns",
    },
  },

  // Common Article Mistakes
  commonArticleMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      soundVsSpelling: {
        error: "Using spelling instead of sound for a/an",
        example: "She is an university student. ❌",
        correction: "She is a university student. ✅",
        explanation:
          "Use 'a' before consonant sounds, 'an' before vowel sounds",
      },
      unnecessaryArticle: {
        error: "Using articles where not needed",
        example: "I like the pizza. (general) ❌",
        correction: "I like pizza. ✅",
        explanation: "Don't use articles with general uncountable nouns",
      },
      missingArticle: {
        error: "Omitting articles where needed",
        example: "He is honest man. ❌",
        correction: "He is an honest man. ✅",
        explanation: "Use 'an' before vowel sounds",
      },
      wrongArticle: {
        error: "Using wrong article for context",
        example: "I visited the France. ❌",
        correction: "I visited France. ✅",
        explanation: "Most country names don't take articles",
      },
      inconsistentArticles: {
        error: "Inconsistent article usage in text",
        example: "I saw a cat. A cat was black. ❌",
        correction: "I saw a cat. The cat was black. ✅",
        explanation: "Use 'the' for second mention of same noun",
      },
    },
    preventionStrategies: {
      soundPractice: "Practice listening for vowel/consonant sounds",
      contextAwareness: "Always consider specific vs general reference",
      patternMemorization: "Learn common article patterns and exceptions",
      consistentPractice: "Practice articles regularly in authentic contexts",
    },
  },
};

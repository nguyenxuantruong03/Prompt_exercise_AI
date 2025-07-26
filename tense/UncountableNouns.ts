// Comprehensive Uncountable Nouns Data (A1-C2)
const uncountable_nouns = {
  definition: {
    core_concept:
      "Uncountable nouns (mass nouns) refer to substances, concepts, or collective categories that cannot be counted as individual elements and do not have a plural form.",
    grammatical_status:
      "Uncountable nouns always take singular verb agreement and are not used with 'a/an' or plural '-s'.",
    linguistic_significance:
      "They express mass, abstractness, or indivisibility in language, and require special quantifiers or partitive structures for measurement.",
    examples: [
      "water",
      "rice",
      "advice",
      "information",
      "music",
      "furniture",
      "bread",
      "happiness",
      "news",
      "progress",
      "equipment",
      "homework",
      "knowledge",
      "research",
      "traffic",
      "weather",
      "work",
      "money",
      "sand",
      "air",
      "sugar",
      "salt",
      "love",
      "anger",
      "luggage",
      "machinery",
      "literature",
      "poetry",
      "evidence",
      "scenery",
      "software",
      "hardware",
      "data",
      "content",
      "criteria",
      "imagery",
      "syntax",
      "semantics",
      "lexicon",
      "foliage",
      "prose",
    ],
  },
  cefrLevels: {
    A1: "Recognize and use common uncountable nouns in daily life (e.g., water, bread, music, money)",
    A2: "Use uncountable nouns in simple requests, descriptions, and needs (e.g., advice, homework, furniture, weather)",
    B1: "Use uncountable nouns in explanations, opinions, and more abstract contexts (e.g., information, knowledge, research)",
    B2: "Use uncountable nouns in academic, professional, and technical contexts (e.g., equipment, progress, traffic, evidence)",
    C1: "Nuanced use in formal, academic, and idiomatic expressions (e.g., literature, poetry, software, data, criteria)",
    C2: "Mastery of rare, idiomatic, and highly abstract uncountable nouns (e.g., iconography, semantics, lexicon, paraphernalia, prose)",
  },
  forms: {
    basic:
      "S + uncountable noun + singular verb • e.g., The information is useful.",
    with_article:
      "S + a piece of/some + uncountable noun • e.g., I need a piece of advice.",
    with_quantifier:
      "S + much/little/a lot of + uncountable noun • e.g., There is much traffic.",
    with_no_article:
      "S + uncountable noun (no article) • e.g., Music helps me relax.",
    partitive:
      "S + a glass of/slice of/loaf of + uncountable noun • e.g., a glass of water, a loaf of bread",
  },
  usage: [
    {
      type: "Substances and materials",
      description:
        "Nouns that refer to substances or materials that cannot be counted individually.",
      examples: [
        "water",
        "bread",
        "rice",
        "sand",
        "air",
        "gold",
        "milk",
        "sugar",
        "salt",
      ],
      level: "A1-A2",
    },
    {
      type: "Abstract concepts",
      description:
        "Nouns that refer to ideas, qualities, or states that are not concrete objects.",
      examples: [
        "happiness",
        "advice",
        "progress",
        "knowledge",
        "love",
        "anger",
        "information",
        "research",
        "evidence",
      ],
      level: "A2-B1",
    },
    {
      type: "Collective/General categories",
      description:
        "Nouns that refer to a category or group as a whole, not individual items.",
      examples: [
        "furniture",
        "luggage",
        "equipment",
        "machinery",
        "clothing",
        "software",
        "hardware",
        "literature",
        "poetry",
      ],
      level: "B1-B2",
    },
    {
      type: "Academic/Professional/Technical",
      description:
        "Nouns used in academic, scientific, or professional contexts.",
      examples: [
        "research",
        "evidence",
        "terminology",
        "criteria",
        "data",
        "content",
        "progress",
      ],
      level: "B2-C2",
    },
    {
      type: "News and media",
      description:
        "Nouns that refer to information or communication as a whole.",
      examples: ["news", "media", "information", "content"],
      level: "B1-C1",
    },
  ],
  examples: {
    basic: {
      direct: "I need information.",
      correct: "I need some information.",
      incorrect: "I need informations.",
      context: "Requesting help (A1)",
    },
    with_article: {
      direct: "Can you give me advice?",
      correct: "Can you give me a piece of advice?",
      incorrect: "Can you give me an advice?",
      context: "Seeking suggestions (A2)",
    },
    with_quantifier: {
      direct: "There is much traffic today.",
      correct: "There is a lot of traffic today.",
      incorrect: "There are many traffics today.",
      context: "Describing conditions (B1)",
    },
    partitive: {
      direct: "I want bread.",
      correct: "I want a slice of bread.",
      incorrect: "I want a bread.",
      context: "Ordering food (A1)",
    },
    academic: {
      direct: "The research shows new results.",
      correct: "Research shows new results.",
      incorrect: "The researches show new results.",
      context: "Academic writing (B2)",
    },
    idiomatic: {
      direct: "The news is good.",
      correct: "This is good news.",
      incorrect: "These are good news.",
      context: "Reacting to information (B1)",
    },
  },
  practiceTypes: {
    A1: [
      "Identify uncountable nouns in simple sentences",
      "Choose correct verb agreement with uncountable nouns",
      "Match nouns to pictures (e.g., bread, water, music)",
      "Fill in the blank with an uncountable noun",
    ],
    A2: [
      "Use a piece of/some with uncountable nouns",
      "Distinguish between countable and uncountable nouns",
      "Correct sentences with article errors",
      "Simple gap-filling with uncountable nouns",
    ],
    B1: [
      "Use quantifiers (much/little/a lot of) with uncountable nouns",
      "Rewrite incorrect plural forms to correct uncountable forms",
      "Use uncountable nouns in short paragraphs",
      "Identify abstract uncountable nouns in context",
    ],
    B2: [
      "Use uncountable nouns in academic and professional writing",
      "Paraphrase sentences to use uncountable nouns idiomatically",
      "Correct advanced errors with uncountable nouns",
      "Explain the meaning of abstract uncountable nouns",
    ],
    C1: [
      "Use uncountable nouns in formal and academic registers",
      "Analyze idiomatic and metaphorical uses of uncountable nouns",
      "Identify subtle errors in advanced writing",
      "Produce essays using a range of uncountable nouns",
    ],
    C2: [
      "Master rare and highly abstract uncountable nouns",
      "Critique and edit advanced texts for uncountable noun accuracy",
      "Use uncountable nouns in creative and literary writing",
      "Demonstrate register flexibility with uncountable nouns",
    ],
  },
  commonMistakes: {
    beginners: [
      "Adding -s to uncountable nouns: ❌ informations ✅ information",
      "Using 'a/an' with uncountable nouns: ❌ an advice ✅ a piece of advice",
      "Plural verb agreement: ❌ The news are good ✅ The news is good",
      "Using 'many' with uncountable nouns: ❌ many furniture ✅ much furniture",
    ],
    intermediate: [
      "Confusing countable and uncountable nouns: ❌ a bread ✅ a loaf of bread",
      "Incorrect quantifiers: ❌ few equipment ✅ little equipment",
      "Wrong article: ❌ a research ✅ research",
      "Using 'these/those' with uncountable nouns: ❌ these information ✅ this information",
    ],
    advanced: [
      "Overusing 'the' with abstract nouns: ❌ the happiness is important ✅ happiness is important",
      "Incorrect idiomatic use: ❌ a good news ✅ good news",
      "Mixing countable and uncountable forms: ❌ advices ✅ advice",
      "Using plural forms in academic writing: ❌ researches show ✅ research shows",
    ],
  },
  recognition: [
    "Uncountable nouns never take -s for plural",
    "They always use singular verb agreement",
    "Often refer to substances, materials, abstract ideas, or collective categories",
    "Require quantifiers or partitive expressions for measurement (e.g., a piece of, a bit of, some)",
    "Cannot be used with 'many', 'few', 'these', 'those'",
    "Often used without an article, or with 'the' for specificity",
  ],
  timeMarkers: [
    "now",
    "today",
    "yesterday",
    "tomorrow",
    "this week",
    "last year",
    "at the moment",
    "recently",
    "soon",
  ],
  pronounChanges: {
    basic: {
      it: "It is important.",
      this: "This is useful information.",
      that: "That is good advice.",
    },
    advanced: {
      what: "What I need is evidence.",
      all: "All that matters is progress.",
    },
  },
  reportingVerbs: [
    "have",
    "need",
    "give",
    "receive",
    "show",
    "find",
    "provide",
    "offer",
    "bring",
    "contain",
    "include",
    "require",
    "lack",
    "represent",
    "express",
  ],
  exercises: {
    recognition: {
      description: "Identify uncountable nouns in context",
      difficulty: "A1-B1",
      examples: [
        "Find the uncountable noun: I need some information.",
        "Choose the correct form: There is much (traffic/traffics).",
      ],
    },
    correction: {
      description: "Correct common mistakes with uncountable nouns",
      difficulty: "A2-B2",
      examples: [
        "❌ I have many luggages. ✅ I have a lot of luggage.",
        "❌ These are good advices. ✅ This is good advice.",
      ],
    },
    production: {
      description: "Use uncountable nouns in your own sentences",
      difficulty: "B1-C2",
      examples: [
        "Write a paragraph about your homework using uncountable nouns.",
        "Describe a problem and use 'information', 'advice', and 'progress' correctly.",
      ],
    },
  },
  notes: [
    "Uncountable nouns are often mass nouns, but not all mass nouns are uncountable in every context.",
    "Some nouns can be both countable and uncountable with different meanings (e.g., 'paper' as material vs. 'a paper' as an article).",
    "Use partitive structures (a piece of, a bit of, an item of) to measure uncountable nouns.",
    "In academic writing, avoid using plural forms for research, evidence, advice, etc.",
    "Some uncountable nouns are used idiomatically (e.g., 'good news', 'bad weather').",
    "Be careful with false friends in other languages that may be countable.",
    "Uncountable nouns are common in both spoken and written English, especially in academic and professional contexts.",
  ],
  culturalContexts: {
    daily_life: {
      description: "Common in daily requests, shopping, and conversation",
      examples: [
        "Can I have some bread?",
        "I need information.",
        "The weather is nice today.",
      ],
    },
    academic: {
      description: "Essential in academic and professional writing",
      examples: ["Research shows...", "There is evidence that..."],
    },
    idiomatic: {
      description: "Used in idiomatic expressions and news/media",
      examples: ["That's good news!", "Bad weather delayed the flight."],
    },
  },
  specialCases: {
    idiomatic: {
      description: "Fixed expressions and idioms with uncountable nouns",
      examples: [
        "a piece of cake",
        "bread and butter",
        "make progress",
        "give advice",
        "do homework",
        "make an effort",
      ],
    },
    academic: {
      description: "Academic and technical terms that are always uncountable",
      examples: [
        "evidence",
        "research",
        "literature",
        "terminology",
        "machinery",
      ],
    },
    false_friends: {
      description:
        "Words that are countable in other languages but uncountable in English",
      examples: ["advice", "information", "furniture", "luggage", "news"],
    },
    dual_use: {
      description:
        "Nouns that can be both countable and uncountable with different meanings",
      examples: [
        {
          word: "paper",
          countable: "a paper (an article)",
          uncountable: "paper (material)",
        },
        {
          word: "chicken",
          countable: "a chicken (an animal)",
          uncountable: "chicken (meat)",
        },
        {
          word: "glass",
          countable: "a glass (a cup)",
          uncountable: "glass (material)",
        },
        {
          word: "experience",
          countable: "an experience (an event)",
          uncountable: "experience (knowledge)",
        },
      ],
    },
  },
  etymology: {
    origin:
      "Many uncountable nouns derive from Old English, Latin, or French, often reflecting abstract or mass concepts.",
    development:
      "The distinction between countable and uncountable nouns developed over centuries as English absorbed vocabulary from other languages.",
    modernUsage:
      "Uncountable nouns are now common in both spoken and written English, especially in academic and professional contexts.",
  },
  crossLinguistic: {
    similarities:
      "Many languages have uncountable or mass nouns, but the specific list and usage rules vary.",
    differences:
      "Some nouns that are uncountable in English are countable in other languages (e.g., 'advice' in French: 'un conseil').",
    learnerChallenges:
      "Learners often overgeneralize plural forms or use incorrect articles due to interference from their native language.",
  },
  vocabulary: {
    A1: [
      "bread",
      "water",
      "music",
      "air",
      "rice",
      "milk",
      "sand",
      "sugar",
      "salt",
      "money",
    ],
    A2: [
      "advice",
      "homework",
      "furniture",
      "luggage",
      "traffic",
      "weather",
      "news",
      "progress",
      "equipment",
    ],
    B1: [
      "information",
      "knowledge",
      "research",
      "evidence",
      "machinery",
      "clothing",
      "literature",
      "media",
    ],
    B2: [
      "terminology",
      "poetry",
      "scenery",
      "software",
      "hardware",
      "data",
      "content",
      "work",
    ],
    C1: [
      "criteria",
      "evidence",
      "machinery",
      "literature",
      "poetry",
      "terminology",
      "progress",
    ],
    C2: [
      "iconography",
      "imagery",
      "syntax",
      "semantics",
      "lexicon",
      "paraphernalia",
      "foliage",
      "prose",
    ],
  },
  grammaticalPatterns: {
    article_usage: {
      correct: ["some information", "a piece of advice", "the furniture"],
      incorrect: ["an information", "an advice", "the advices"],
    },
    verb_agreement: {
      correct: ["The news is good.", "The equipment works well."],
      incorrect: ["The news are good.", "The equipment work well."],
    },
    quantifiers: {
      correct: ["much information", "little progress", "a lot of bread"],
      incorrect: ["many informations", "few progresses", "many breads"],
    },
  },
  usageContexts: {
    A1: ["shopping", "food and drink", "music", "weather", "basic needs"],
    A2: [
      "schoolwork",
      "giving/receiving advice",
      "home and furniture",
      "travel (luggage)",
    ],
    B1: [
      "news and media",
      "traffic reports",
      "progress updates",
      "information requests",
    ],
    B2: [
      "academic writing",
      "technical descriptions",
      "professional communication",
    ],
    C1: [
      "formal essays",
      "research papers",
      "literary analysis",
      "advanced presentations",
    ],
    C2: [
      "creative writing",
      "critical reviews",
      "specialized academic discourse",
    ],
  },
  errorPatterns: {
    A1: ["❌ musics ✅ music", "❌ a bread ✅ bread", "❌ a water ✅ water"],
    A2: ["❌ an advice ✅ a piece of advice", "❌ homeworks ✅ homework"],
    B1: ["❌ informations ✅ information", "❌ traffics ✅ traffic"],
    B2: ["❌ researches ✅ research", "❌ softwares ✅ software"],
    C1: ["❌ evidences ✅ evidence", "❌ terminologies ✅ terminology"],
    C2: ["❌ iconographies ✅ iconography", "❌ foliages ✅ foliage"],
  },
  learningStrategies: {
    A1: [
      "Memorize common uncountable nouns with pictures and examples.",
      "Practice using correct verb agreement.",
      "Listen for uncountable nouns in simple conversations.",
    ],
    A2: [
      "Use partitive structures (a piece of, some) in speaking and writing.",
      "Compare countable and uncountable nouns in context.",
      "Correct common mistakes in exercises.",
    ],
    B1: [
      "Practice using quantifiers (much, little, a lot of) with uncountable nouns.",
      "Write short texts using a variety of uncountable nouns.",
      "Edit sentences for correct uncountable noun usage.",
    ],
    B2: [
      "Use uncountable nouns in academic and technical writing.",
      "Paraphrase sentences to use uncountable nouns idiomatically.",
      "Analyze authentic texts for advanced usage.",
    ],
    C1: [
      "Produce essays and presentations using advanced uncountable nouns.",
      "Identify and correct subtle errors in peer writing.",
      "Experiment with idiomatic and metaphorical uses.",
    ],
    C2: [
      "Master rare and highly abstract uncountable nouns.",
      "Critique and edit advanced texts for accuracy.",
      "Use uncountable nouns creatively in literary and academic contexts.",
    ],
  },
};

const tense = {
  uncountable_nouns,
};

export default tense;

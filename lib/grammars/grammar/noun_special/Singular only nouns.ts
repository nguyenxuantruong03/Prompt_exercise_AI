// Comprehensive Singular Only Nouns Data (A1-C2)
const singular_only_nouns = {
  definition: {
    core_concept:
      "Singular-only nouns are nouns that are used exclusively in the singular form and do not have a standard plural counterpart in English.",
    grammatical_status:
      "These nouns always take singular verb agreement and are treated as individual, unique, or uncountable entities.",
    linguistic_significance:
      "They highlight the concept of uniqueness, indivisibility, or abstractness in language.",
    examples: [
      "information",
      "advice",
      "furniture",
      "luggage",
      "bread",
      "happiness",
      "music",
      "news",
      "progress",
      "equipment",
      "homework",
      "knowledge",
      "research",
      "traffic",
      "weather",
      "work",
    ],
  },
  cefrLevels: {
    A1: "Basic recognition and use of common singular-only nouns in daily life (e.g., bread, water, music)",
    A2: "Expanded vocabulary and use in simple descriptions and requests (e.g., homework, advice, furniture)",
    B1: "Use in explanations, opinions, and more abstract contexts (e.g., information, knowledge, research)",
    B2: "Use in academic, professional, and technical contexts (e.g., equipment, progress, traffic)",
    C1: "Nuanced use in formal, academic, and idiomatic expressions (e.g., evidence, luggage, news)",
    C2: "Mastery of rare, idiomatic, and highly abstract singular-only nouns (e.g., poetry, machinery, scenery, terminology)",
  },
  forms: {
    basic:
      "S + singular-only noun + singular verb • e.g., The information is useful.",
    with_article:
      "S + a piece of/some + singular-only noun • e.g., I need a piece of advice.",
    with_quantifier:
      "S + much/little + singular-only noun • e.g., There is much traffic.",
    with_no_article:
      "S + singular-only noun (no article) • e.g., Music helps me relax.",
  },
  usage: [
    {
      type: "Uncountable substances and materials",
      description:
        "Nouns that refer to substances or materials that cannot be counted individually.",
      examples: ["water", "bread", "rice", "sand", "air", "gold", "milk"],
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
      ],
      level: "A2-B1",
    },
    {
      type: "Collective/General categories",
      description:
        "Nouns that refer to a category or group as a whole, not individual items.",
      examples: ["furniture", "luggage", "equipment", "machinery", "clothing"],
      level: "B1-B2",
    },
    {
      type: "Academic/Professional/Technical",
      description:
        "Nouns used in academic, scientific, or professional contexts.",
      examples: ["research", "evidence", "terminology", "literature", "poetry"],
      level: "B2-C2",
    },
    {
      type: "News and media",
      description:
        "Nouns that refer to information or communication as a whole.",
      examples: ["news", "media", "information"],
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
      "Identify singular-only nouns in simple sentences",
      "Choose correct verb agreement with singular-only nouns",
      "Match nouns to pictures (e.g., bread, water, music)",
      "Fill in the blank with a singular-only noun",
    ],
    A2: [
      "Use a piece of/some with singular-only nouns",
      "Distinguish between countable and singular-only nouns",
      "Correct sentences with article errors",
      "Simple gap-filling with singular-only nouns",
    ],
    B1: [
      "Use quantifiers (much/little/a lot of) with singular-only nouns",
      "Rewrite incorrect plural forms to correct singular-only forms",
      "Use singular-only nouns in short paragraphs",
      "Identify abstract singular-only nouns in context",
    ],
    B2: [
      "Use singular-only nouns in academic and professional writing",
      "Paraphrase sentences to use singular-only nouns idiomatically",
      "Correct advanced errors with singular-only nouns",
      "Explain the meaning of abstract singular-only nouns",
    ],
    C1: [
      "Use singular-only nouns in formal and academic registers",
      "Analyze idiomatic and metaphorical uses of singular-only nouns",
      "Identify subtle errors in advanced writing",
      "Produce essays using a range of singular-only nouns",
    ],
    C2: [
      "Master rare and highly abstract singular-only nouns",
      "Critique and edit advanced texts for singular-only noun accuracy",
      "Use singular-only nouns in creative and literary writing",
      "Demonstrate register flexibility with singular-only nouns",
    ],
  },
  commonMistakes: {
    beginners: [
      "Adding -s to singular-only nouns: ❌ informations ✅ information",
      "Using 'a/an' with uncountable nouns: ❌ an advice ✅ a piece of advice",
      "Plural verb agreement: ❌ The news are good ✅ The news is good",
      "Using 'many' with singular-only nouns: ❌ many furniture ✅ much furniture",
    ],
    intermediate: [
      "Confusing countable and singular-only nouns: ❌ a bread ✅ a loaf of bread",
      "Incorrect quantifiers: ❌ few equipment ✅ little equipment",
      "Wrong article: ❌ a research ✅ research",
      "Using 'these/those' with singular-only nouns: ❌ these information ✅ this information",
    ],
    advanced: [
      "Overusing 'the' with abstract nouns: ❌ the happiness is important ✅ happiness is important",
      "Incorrect idiomatic use: ❌ a good news ✅ good news",
      "Mixing countable and uncountable forms: ❌ advices ✅ advice",
      "Using plural forms in academic writing: ❌ researches show ✅ research shows",
    ],
  },
  recognition: [
    "Singular-only nouns never take -s for plural",
    "They always use singular verb agreement",
    "Often refer to substances, materials, abstract ideas, or collective categories",
    "Require quantifiers or partitive expressions for counting (e.g., a piece of, a bit of, some)",
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
  ],
  exercises: {
    recognition: {
      description: "Identify singular-only nouns in context",
      difficulty: "A1-B1",
      examples: [
        "Find the singular-only noun: I need some information.",
        "Choose the correct form: There is much (traffic/traffics).",
      ],
    },
    correction: {
      description: "Correct common mistakes with singular-only nouns",
      difficulty: "A2-B2",
      examples: [
        "❌ I have many luggages. ✅ I have a lot of luggage.",
        "❌ These are good advices. ✅ This is good advice.",
      ],
    },
    production: {
      description: "Use singular-only nouns in your own sentences",
      difficulty: "B1-C2",
      examples: [
        "Write a paragraph about your homework using singular-only nouns.",
        "Describe a problem and use 'information', 'advice', and 'progress' correctly.",
      ],
    },
  },
  notes: [
    "Singular-only nouns are often uncountable, but not all uncountable nouns are singular-only.",
    "Some nouns can be both countable and uncountable with different meanings (e.g., 'paper' as material vs. 'a paper' as an article).",
    "Use partitive structures (a piece of, a bit of, an item of) to count singular-only nouns.",
    "In academic writing, avoid using plural forms for research, evidence, advice, etc.",
    "Some singular-only nouns are used idiomatically (e.g., 'good news', 'bad weather').",
    "Be careful with false friends in other languages that may be countable.",
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
      description: "Fixed expressions and idioms with singular-only nouns",
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
      description: "Academic and technical terms that are always singular",
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
        "Words that are countable in other languages but singular-only in English",
      examples: ["advice", "information", "furniture", "luggage", "news"],
    },
  },
  etymology: {
    origin:
      "Many singular-only nouns derive from Old English, Latin, or French, often reflecting abstract or mass concepts.",
    development:
      "The distinction between countable and uncountable nouns developed over centuries as English absorbed vocabulary from other languages.",
    modernUsage:
      "Singular-only nouns are now common in both spoken and written English, especially in academic and professional contexts.",
  },
  crossLinguistic: {
    similarities:
      "Many languages have uncountable or mass nouns, but the specific list and usage rules vary.",
    differences:
      "Some nouns that are singular-only in English are countable in other languages (e.g., 'advice' in French: 'un conseil').",
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
      "Memorize common singular-only nouns with pictures and examples.",
      "Practice using correct verb agreement.",
      "Listen for singular-only nouns in simple conversations.",
    ],
    A2: [
      "Use partitive structures (a piece of, some) in speaking and writing.",
      "Compare countable and singular-only nouns in context.",
      "Correct common mistakes in exercises.",
    ],
    B1: [
      "Practice using quantifiers (much, little, a lot of) with singular-only nouns.",
      "Write short texts using a variety of singular-only nouns.",
      "Edit sentences for correct singular-only noun usage.",
    ],
    B2: [
      "Use singular-only nouns in academic and technical writing.",
      "Paraphrase sentences to use singular-only nouns idiomatically.",
      "Analyze authentic texts for advanced usage.",
    ],
    C1: [
      "Produce essays and presentations using advanced singular-only nouns.",
      "Identify and correct subtle errors in peer writing.",
      "Experiment with idiomatic and metaphorical uses.",
    ],
    C2: [
      "Master rare and highly abstract singular-only nouns.",
      "Critique and edit advanced texts for accuracy.",
      "Use singular-only nouns creatively in literary and academic contexts.",
    ],
  },
};

const tense = {
  singular_only_nouns,
};

export default tense;

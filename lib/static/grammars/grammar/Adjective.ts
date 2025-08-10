import { AdjectiveType } from "@/types/grammars/grammar/Adjective";

export const AdjectiveData:AdjectiveType = {
  id: 68,
  // --- Comprehensive Adjective Knowledge (A1-C2) with Full Details ---

  // Fundamental Adjective Definition and Theory
  adjectiveDefinition: {
    basicDefinition:
      "Adjectives are words that describe, modify, or give more information about nouns or pronouns.",
    detailedDefinition:
      "Adjectives are a major word class that functions primarily as modifiers of nouns and noun phrases. They provide descriptive, qualifying, or limiting information about the entities they modify. Adjectives can express qualities (beautiful, intelligent), states (alive, asleep), origins (American, wooden), or relationships (main, former).",
    linguisticProperties: {
      morphological:
        "Most English adjectives are morphologically invariable (no inflection for gender, number, or case), though they can form comparative and superlative degrees",
      syntactic:
        "Adjectives can function attributively (before nouns), predicatively (after linking verbs), or as noun phrase heads when used substantively",
      semantic:
        "Adjectives denote properties, qualities, or characteristics that can be attributed to entities",
    },
    grammaticalFunction:
      "Adjectives function as modifiers that provide additional details about the qualities, characteristics, states, or properties of the nouns they describe.",
    keyCharacteristics: [
      "Describe qualities (beautiful, intelligent, tall)",
      "Indicate quantity (many, few, several)",
      "Show possession (my, your, their)",
      "Point out specific items (this, that, these)",
      "Ask questions (which, what, whose)",
    ],
    positionInSentence: {
      attributive: "Before the noun they modify (a red car, the tall building)",
      predicative: "After linking verbs (The car is red, She seems happy)",
      postpositive:
        "After the noun in certain expressions (attorney general, time immemorial)",
    },
    morphologicalFeatures: {
      inflection:
        "Most English adjectives don't change form for number or gender",
      comparison:
        "Many adjectives have comparative (-er) and superlative (-est) forms",
      derivation: "Adjectives can be formed by adding suffixes to other words",
    },
    semanticCategories: [
      "Descriptive adjectives (beautiful, tall, intelligent)",
      "Quantitative adjectives (many, few, several)",
      "Demonstrative adjectives (this, that, these, those)",
      "Possessive adjectives (my, your, his, her, its, our, their)",
      "Interrogative adjectives (which, what, whose)",
      "Indefinite adjectives (any, each, every, some, other)",
      "Proper adjectives (American, Shakespearean, Victorian)",
    ],
    syntacticBehavior: {
      gradability:
        "Most adjectives can be modified by degree adverbs (very, quite, extremely)",
      comparison:
        "Adjectives can be used in comparative and superlative constructions",
      complementation:
        "Some adjectives require specific prepositions or structures",
    },
    examples: {
      basic: "The red car is fast. She is intelligent. The weather is cold.",
      comparative:
        "This car is faster than that one. She is more intelligent than her brother.",
      superlative:
        "This is the fastest car. She is the most intelligent student.",
      withIntensifiers:
        "The car is very fast. She is extremely intelligent. The weather is quite cold.",
    },
  },

  // A1 Level - Basic Adjective Knowledge
  A1: {
    definition:
      "At the A1 level, learners understand and use basic adjectives to describe people, objects, and simple qualities in everyday situations. This foundational level focuses on high-frequency, concrete adjectives that are essential for basic communication.",

    detailedLearningObjectives: {
      cognitiveGoals: [
        "Recognize and understand basic adjective forms in context",
        "Distinguish between adjectives and other word classes",
        "Comprehend simple adjective-noun combinations",
        "Understand basic comparative concepts (bigger/smaller)",
      ],
      functionalGoals: [
        "Describe basic physical characteristics of people and objects",
        "Express simple opinions and preferences",
        "Make basic comparisons between two items",
        "Use adjectives to answer 'What kind?' questions",
      ],
      linguisticCompetencies: [
        "Master basic adjective positioning (before nouns and after 'be')",
        "Use simple demonstrative and possessive adjectives",
        "Form basic questions with adjectives",
        "Apply elementary comparative forms with -er",
      ],
    },

    whatToLearn: [
      "Basic descriptive adjectives for essential daily communication (big, small, good, bad, hot, cold, new, old)",
      "Color adjectives for identification and description (red, blue, green, yellow, black, white, brown, pink)",
      "Simple demonstrative adjectives for pointing and identifying (this, that, these, those)",
      "Basic possessive adjectives for showing ownership (my, your, his, her, its, our, their)",
      "Cardinal and ordinal numbers as adjectives (one, two, three / first, second, third)",
      "Simple comparative forms with -er for basic comparisons (bigger, smaller, older, younger)",
      "Basic adjective positioning: adjective + noun (big house) and subject + be + adjective (The house is big)",
      "Simple question formation with adjectives (How big is it? What color is it?)",
      "Basic adjective-noun agreement in simple sentences",
    ],

    coreVocabulary: {
      physicalDescription: {
        size: ["big", "small", "large", "little", "huge", "tiny"],
        appearance: ["beautiful", "ugly", "nice", "pretty", "handsome"],
        age: ["new", "old", "young"],
        condition: ["good", "bad", "clean", "dirty", "broken", "fixed"],
      },
      colors: {
        basic: ["red", "blue", "green", "yellow", "black", "white"],
        extended: [
          "brown",
          "pink",
          "orange",
          "purple",
          "gray",
          "silver",
          "gold",
        ],
      },
      qualities: {
        temperature: ["hot", "cold", "warm", "cool"],
        speed: ["fast", "slow", "quick"],
        difficulty: ["easy", "hard", "difficult", "simple"],
        evaluation: ["good", "bad", "nice", "great", "terrible"],
      },
    },

    basicDescriptive: {
      definition:
        "Basic adjectives for describing people, objects, and places in everyday situations.",
      examples: [
        "big",
        "small",
        "good",
        "bad",
        "hot",
        "cold",
        "new",
        "old",
        "beautiful",
        "ugly",
        "nice",
        "easy",
        "hard",
        "fast",
        "slow",
        "clean",
        "dirty",
        "open",
        "closed",
        "right",
        "wrong",
      ],
      usage: "This is a big house. The water is cold. The book is good.",
      commonPatterns: [
        "Subject + be + adjective: The car is big",
        "Adjective + noun: a big car",
        "How + adjective: How big is it?",
      ],
      practiceActivities: [
        "Describe classroom objects using basic adjectives",
        "Compare two similar objects (This book is big, that book is small)",
        "Answer questions about personal preferences (Is your car new or old?)",
      ],
    },

    colors: {
      definition:
        "Basic color adjectives for describing objects and things in daily life.",
      examples: [
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "white",
        "brown",
        "pink",
        "orange",
        "purple",
        "gray",
        "gold",
        "silver",
      ],
      usage: "The car is red. I have a blue shirt. The sky is blue.",
      colorCombinations: [
        "light blue",
        "dark green",
        "bright yellow",
        "deep red",
      ],
      culturalNotes: "Colors can have different meanings in different cultures",
      practiceContexts: [
        "Describing clothing and accessories",
        "Talking about favorite colors",
        "Identifying objects by color",
        "Describing natural phenomena (blue sky, green grass)",
      ],
    },

    numbers: {
      definition:
        "Basic numerical adjectives and ordinal numbers for counting and ordering.",
      cardinalNumbers: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
      ],
      ordinalNumbers: [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth",
        "tenth",
      ],
      usage:
        "I have two books. This is the first lesson. She is the third person.",
      patterns: [
        "Cardinal numbers: one, two, three (quantity)",
        "Ordinal numbers: first, second, third (order)",
        "Number + noun: three books, first lesson",
      ],
      functionalUses: [
        "Counting objects and people",
        "Expressing age (I am twenty years old)",
        "Giving addresses and phone numbers",
        "Ordering items in a sequence",
      ],
    },

    demonstrative: {
      definition:
        "Basic demonstrative adjectives for pointing out and identifying specific items.",
      examples: ["this", "that", "these", "those"],
      usage: "This book is interesting. Those cars are expensive.",
      distanceRules: {
        near: "this (singular), these (plural) - for objects close to the speaker",
        far: "that (singular), those (plural) - for objects away from the speaker",
      },
      commonMistakes: [
        "Using 'this' with plural nouns (*this books → these books)",
        "Confusion between 'that' and 'those' with distance",
      ],
    },

    possessive: {
      definition:
        "Basic possessive adjectives for showing ownership and relationships.",
      examples: ["my", "your", "his", "her", "its", "our", "their"],
      usage: "My car is red. Their house is big.",
      agreementRules: [
        "Possessive adjectives agree with the possessor, not the possessed",
        "Use 'its' for things/animals (not it's which is 'it is')",
        "Use 'their' for plural possessors regardless of gender",
      ],
      commonContexts: [
        "Family relationships (my mother, his father)",
        "Personal belongings (your book, her bag)",
        "Body parts (my hand, his eyes)",
      ],
    },

    basicComparatives: {
      definition:
        "Simple comparative forms with -er for making basic comparisons between two items.",
      examples: [
        "bigger",
        "smaller",
        "hotter",
        "colder",
        "older",
        "younger",
        "faster",
        "slower",
      ],
      usage: "This house is bigger. The water is colder.",
      formationRules: [
        "One syllable adjectives: add -er (big → bigger)",
        "Adjectives ending in -e: add -r (nice → nicer)",
        "Adjectives ending in consonant + y: change y to i + er (happy → happier)",
      ],
      comparisonStructures: [
        "A is bigger than B",
        "A is more expensive than B (for longer adjectives)",
        "Which is bigger, A or B?",
      ],
    },

    references: [
      {
        title:
          "Cambridge English: Key (KET) Grammar Guide - Official preparation materials for A1 level",
        url: "https://www.cambridgeenglish.org/exams-and-tests/key/preparation/",
        description:
          "Comprehensive grammar guide with adjective usage at beginner level",
      },
      {
        title:
          "British Council: Basic Adjectives - Interactive lessons and practice",
        url: "https://learnenglish.britishcouncil.org/grammar/beginner-to-pre-intermediate/adjectives",
        description: "Free online resources with explanations and exercises",
      },
      {
        title:
          "English Grammar in Use (Elementary) 5th Edition - Raymond Murphy",
        url: "https://www.cambridge.org/us/cambridgeenglish/catalog/grammar-vocabulary-and-pronunciation/english-grammar-use-5th-edition",
        description:
          "The world's best-selling grammar book for elementary learners",
      },
      {
        title:
          "Oxford English Grammar Course: Basic - Michael Swan & Catherine Walter",
        url: "https://elt.oup.com/catalogue/items/global/grammar_vocabulary/oxford_english_grammar_course/",
        description:
          "Systematic approach to basic English grammar with clear explanations",
      },
    ],

    assessmentCriteria: {
      accuracy: "Correct use of basic adjective forms and positions",
      appropriateness: "Suitable adjective choice for the context",
      range: "Variety of basic adjectives within the A1 vocabulary list",
      fluency: "Natural use of adjectives in simple sentences",
    },
  },

  // A2 Level - Elementary Adjective Knowledge
  A2: {
    definition:
      "At the A2 level, learners expand their adjective vocabulary to include emotions, physical descriptions, and weather, while beginning to use comparative and superlative forms systematically. This level builds on A1 foundations with more varied and nuanced adjective usage.",

    detailedLearningObjectives: {
      cognitiveGoals: [
        "Understand and distinguish between gradable and non-gradable adjectives",
        "Recognize adjective order patterns in noun phrases",
        "Comprehend emotional and psychological adjectives",
        "Understand comparative and superlative concepts fully",
      ],
      functionalGoals: [
        "Describe people's personalities and emotions accurately",
        "Express weather conditions and physical sensations",
        "Make detailed comparisons using both -er/-est and more/most forms",
        "Describe objects using multiple adjectives in correct order",
      ],
      linguisticCompetencies: [
        "Master regular and irregular comparative and superlative forms",
        "Use adjectives with appropriate intensifiers (very, quite, really)",
        "Apply basic adjective order rules consistently",
        "Form and use simple compound adjectives",
      ],
    },

    whatToLearn: [
      "Emotion adjectives for expressing feelings and states (happy, sad, tired, excited, worried, surprised, angry, nervous)",
      "Physical description adjectives for detailed appearance (tall, short, thin, fat, beautiful, ugly, strong, weak)",
      "Weather adjectives for environmental description (sunny, rainy, cloudy, windy, hot, cold, warm, cool)",
      "Size and shape adjectives for precise description (huge, tiny, round, square, long, wide, narrow, thick, thin)",
      "Basic personality adjectives for character description (nice, kind, friendly, funny, smart, quiet, loud)",
      "Complete comparative and superlative forms (bigger/biggest, more beautiful/most beautiful, better/best, worse/worst)",
      "Indefinite adjectives for quantity and scope (some, any, many, few, much, little, all, every, each)",
      "Basic adjective order principles (opinion + size + color: beautiful big red car)",
      "Simple compound adjectives with hyphens (well-known, good-looking, hard-working, easy-going)",
    ],

    expandedDescriptive: {
      definition:
        "More descriptive adjectives for everyday use and emotions, allowing for richer communication.",
      examples: [
        "happy",
        "sad",
        "tired",
        "hungry",
        "thirsty",
        "clean",
        "dirty",
        "easy",
        "difficult",
        "cheap",
        "expensive",
        "busy",
        "free",
        "full",
        "empty",
        "loud",
        "quiet",
        "strong",
        "weak",
        "rich",
        "poor",
      ],
      usage: "I am happy. The work is difficult. The food is expensive.",
      emotionAdjectives: {
        positive: [
          "happy",
          "excited",
          "proud",
          "confident",
          "relaxed",
          "cheerful",
          "pleased",
        ],
        negative: [
          "sad",
          "angry",
          "worried",
          "nervous",
          "disappointed",
          "upset",
          "frustrated",
        ],
        neutral: [
          "tired",
          "hungry",
          "thirsty",
          "busy",
          "free",
          "surprised",
          "calm",
        ],
      },
      intensityLevels: {
        mild: ["a bit tired", "quite happy", "rather worried"],
        moderate: ["tired", "happy", "worried"],
        strong: ["very tired", "really happy", "extremely worried"],
      },
    },

    sizeAndShape: {
      definition:
        "Adjectives describing size, shape, and physical dimensions for precise description.",
      examples: [
        "tall",
        "short",
        "long",
        "wide",
        "narrow",
        "round",
        "square",
        "thin",
        "fat",
        "thick",
        "flat",
        "curved",
        "straight",
        "huge",
        "tiny",
        "medium",
        "large",
        "small",
      ],
      usage: "The building is tall. The table is round. The road is wide.",
      sizeComparisons: [
        "tall vs short (height)",
        "long vs short (length)",
        "wide vs narrow (width)",
        "thick vs thin (depth)",
      ],
      shapeCategories: {
        geometric: ["round", "square", "triangular", "rectangular", "oval"],
        irregular: ["curved", "straight", "flat", "bent", "twisted"],
        threedimensional: ["thick", "thin", "deep", "shallow", "hollow"],
      },
    },

    weather: {
      definition:
        "Adjectives for describing weather conditions and atmospheric phenomena.",
      examples: [
        "sunny",
        "rainy",
        "cloudy",
        "windy",
        "snowy",
        "foggy",
        "stormy",
        "humid",
        "dry",
      ],
      usage: "Today is sunny. It's very windy. The weather is humid.",
      weatherPatterns: [
        "It's + adjective (It's sunny today)",
        "The weather is + adjective (The weather is terrible)",
        "It's a + adjective + day (It's a beautiful day)",
      ],
      seasonalAdjectives: {
        spring: ["mild", "fresh", "blooming", "green"],
        summer: ["hot", "sunny", "bright", "warm"],
        autumn: ["cool", "colorful", "crisp", "windy"],
        winter: ["cold", "snowy", "icy", "freezing"],
      },
    },

    indefinite: {
      definition:
        "Basic indefinite adjectives for expressing quantity, scope, and distribution.",
      examples: [
        "some",
        "any",
        "many",
        "few",
        "much",
        "little",
        "all",
        "every",
        "each",
        "several",
      ],
      usage: "I have some books. There are many people. Every student passed.",
      quantityRules: {
        countable: ["many", "few", "several", "some", "any"],
        uncountable: ["much", "little", "some", "any"],
        both: ["all", "no", "enough", "plenty of"],
      },
      distributive: ["each", "every", "either", "neither", "both"],
    },

    superlatives: {
      definition:
        "Basic superlative forms for expressing the highest or lowest degree.",
      examples: [
        "biggest",
        "smallest",
        "happiest",
        "best",
        "worst",
        "most",
        "least",
      ],
      usage: "This is the biggest house. She is the happiest person.",
      formationRules: [
        "One syllable: add -est (big → biggest)",
        "Two syllables ending in -y: change y to i + est (happy → happiest)",
        "Longer adjectives: use most/least (most beautiful, least expensive)",
      ],
      irregularForms: [
        "good → better → best",
        "bad → worse → worst",
        "far → farther/further → farthest/furthest",
      ],
    },

    compoundAdjectives: {
      definition:
        "Simple compound adjectives formed by combining two or more words.",
      examples: [
        "good-looking",
        "well-known",
        "hard-working",
        "easy-going",
        "up-to-date",
        "old-fashioned",
      ],
      usage:
        "He is good-looking. She is hard-working. The information is up-to-date.",
      formationPatterns: [
        "Adverb + past participle (well-known, well-dressed)",
        "Adjective + present participle (good-looking, hard-working)",
        "Noun + adjective (ice-cold, snow-white)",
        "Number + noun (three-year-old, two-story)",
      ],
    },

    references: [
      {
        title:
          "Cambridge English: Preliminary (PET) Vocabulary List - Official A2 level vocabulary",
        url: "https://www.cambridgeenglish.org/exams-and-tests/preliminary/preparation/",
        description:
          "Complete vocabulary list for A2 level including adjectives",
      },
      {
        title:
          "Oxford Learner's Dictionaries: Oxford 3000 & 5000 - Core vocabulary for learners",
        url: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000",
        description: "Essential adjectives marked by CEFR level with examples",
      },
      {
        title:
          "English File Elementary (4th Edition) - Oxford University Press",
        url: "https://elt.oup.com/catalogue/items/global/adult_courses/english_file/english_file_elementary/",
        description:
          "Comprehensive course with systematic adjective introduction",
      },
      {
        title:
          "Face2Face Elementary Student's Book - Cambridge University Press",
        url: "https://www.cambridge.org/us/cambridgeenglish/catalog/adult-courses/face2face-2nd-edition",
        description:
          "Practical approach to adjective usage in real-life contexts",
      },
    ],
  },

  // B1 Level - Intermediate Adjective Knowledge
  B1: {
    definition:
      "At the B1 level, learners use a wider range of adjectives to express opinions, describe personality traits, and make comparisons with greater precision and complexity. This level introduces more sophisticated vocabulary and complex grammatical structures.",

    detailedLearningObjectives: {
      cognitiveGoals: [
        "Understand nuanced differences between similar adjectives",
        "Recognize register differences in adjective usage",
        "Comprehend adjective-preposition combinations",
        "Understand participial adjectives and their meanings",
      ],
      functionalGoals: [
        "Express detailed opinions and evaluations",
        "Describe complex personality traits and character",
        "Discuss materials, origins, and technical properties",
        "Make sophisticated comparisons and contrasts",
      ],
      linguisticCompetencies: [
        "Master complete adjective order rules with multiple adjectives",
        "Use intensifiers and modifiers appropriately",
        "Apply adjective-preposition patterns correctly",
        "Distinguish between -ing and -ed participial adjectives",
      ],
    },

    whatToLearn: [
      "Advanced personality adjectives for detailed character description (ambitious, reliable, patient, creative, honest, stubborn, generous)",
      "Opinion and evaluation adjectives for expressing judgments (excellent, terrible, amazing, awful, brilliant, outstanding, dreadful)",
      "Material and texture adjectives for technical description (wooden, plastic, metal, cotton, silk, leather, rough, smooth, soft)",
      "Nationality and origin adjectives for cultural reference (American, Italian, Chinese, European, Mediterranean, Asian, African)",
      "Intensifiers and modifiers for degree expression (very, quite, rather, extremely, slightly, fairly, pretty, really)",
      "Complete adjective order rules (opinion-size-age-shape-color-origin-material-purpose)",
      "Adjective + preposition combinations (interested in, good at, afraid of, proud of, worried about)",
      "Participial adjectives with meaning differences (interesting/interested, exciting/excited, boring/bored)",
      "Abstract concept adjectives for complex ideas (important, necessary, possible, difficult, obvious, serious)",
    ],

    advancedDescriptive: {
      definition:
        "More sophisticated descriptive adjectives for expressing precise qualities and characteristics.",
      examples: [
        "intelligent",
        "creative",
        "confident",
        "friendly",
        "polite",
        "honest",
        "reliable",
        "patient",
        "careful",
        "brave",
        "ambitious",
        "generous",
        "stubborn",
        "modest",
        "arrogant",
        "sincere",
        "cynical",
        "optimistic",
        "pessimistic",
        "realistic",
      ],
      usage: "She is very intelligent. He is a reliable worker.",
      nuance: {
        similarAdjectives: [
          "friendly vs. amicable",
          "brave vs. courageous",
          "careful vs. meticulous",
          "confident vs. arrogant",
          "generous vs. lavish",
        ],
        registerDifferences: {
          formal: [
            "amiable",
            "courageous",
            "meticulous",
            "self-assured",
            "lavish",
          ],
          informal: ["friendly", "brave", "careful", "confident", "generous"],
        },
      },
    },

    emotions: {
      definition:
        "Adjectives for expressing emotions and feelings, both physical and psychological.",
      examples: [
        "excited",
        "worried",
        "surprised",
        "disappointed",
        "proud",
        "jealous",
        "grateful",
        "angry",
        "nervous",
        "relaxed",
        "bored",
        "interested",
        "fascinated",
        "terrified",
        "delighted",
      ],
      usage:
        "I am excited about the trip. She was disappointed with the result.",
      intensity: {
        mild: ["a bit worried", "quite excited", "rather bored"],
        moderate: ["worried", "excited", "bored"],
        strong: ["very worried", "really excited", "extremely bored"],
      },
    },

    personality: {
      definition:
        "Adjectives describing personality traits, behaviors, and typical characteristics.",
      examples: [
        "outgoing",
        "shy",
        "generous",
        "selfish",
        "optimistic",
        "pessimistic",
        "ambitious",
        "lazy",
        "organized",
        "messy",
        "polite",
        "rude",
        "friendly",
        "hostile",
        "trustworthy",
        "deceitful",
        "tolerant",
        "impatient",
        "humble",
        "proud",
      ],
      usage: "He is very outgoing. She is quite shy.",
      categorization: {
        positive: ["generous", "friendly", "optimistic", "ambitious", "humble"],
        negative: ["selfish", "rude", "pessimistic", "lazy", "deceitful"],
        neutral: ["shy", "outgoing", "organized", "messy", "trustworthy"],
      },
    },

    material: {
      definition:
        "Adjectives describing materials and textures, often used in technical or detailed descriptions.",
      examples: [
        "wooden",
        "plastic",
        "metal",
        "cotton",
        "silk",
        "leather",
        "glass",
        "paper",
        "stone",
        "ceramic",
        "rough",
        "smooth",
        "soft",
        "hard",
        "brittle",
        "flexible",
        "rigid",
        "dense",
        "lightweight",
        "waterproof",
      ],
      usage: "The table is wooden. She has a silk dress.",
      textureContrast: {
        roughSmooth: ["rough", "smooth"],
        hardSoft: ["hard", "soft"],
        flexibleRigid: ["flexible", "rigid"],
      },
    },

    origin: {
      definition:
        "Adjectives indicating origin or nationality, often used to describe cultural or geographical attributes.",
      examples: [
        "American",
        "British",
        "French",
        "Chinese",
        "Japanese",
        "Italian",
        "Spanish",
        "German",
        "Russian",
        "Australian",
        "Middle Eastern",
        "African",
        "Asian",
        "European",
        "Latin American",
      ],
      usage: "She is American. I love Italian food.",
      culturalNuances: {
        regionalVariations: [
          "British vs. American (colour/color, favourite/favorite)",
          "Australian vs. British (arvo vs. afternoon)",
          "American vs. Canadian (zed/zee for 'z')",
        ],
        falseFriends: [
          "Sympathetic (English) vs. Simpático (Spanish: nice)",
          "Actual (English) vs. Actuel (French: current)",
          "Library (English) vs. Librarie (French: bookstore)",
        ],
      },
    },

    intensifiers: {
      definition:
        "Basic intensifiers for adjectives, used to modify the degree or intensity of the adjective.",
      examples: [
        "very",
        "really",
        "quite",
        "rather",
        "pretty",
        "extremely",
        "slightly",
        "somewhat",
        "fairly",
        "totally",
      ],
      usage: "The movie was very good. It's quite expensive.",
      placementRules: [
        "Before the adjective: She is very tall.",
        "Before the adverb: He runs really quickly.",
        "In negative sentences: It's not very difficult.",
      ],
    },

    adjectiveOrder: {
      definition:
        "Basic adjective order rules for using multiple adjectives in a sentence.",
      order: [
        "1. Opinion (beautiful, nice)",
        "2. Size (big, small)",
        "3. Age (old, new)",
        "4. Color (red, blue)",
        "5. Origin (Italian, Chinese)",
        "6. Material (wooden, plastic)",
      ],
      examples: [
        "a beautiful big old red Italian wooden table",
        "a nice small new blue plastic chair",
      ],
      commonErrors: [
        "Incorrect: a red big car (should be: a big red car)",
        "Incorrect: an Italian beautiful woman (should be: a beautiful Italian woman)",
        "Incorrect: wooden old table (should be: old wooden table)",
      ],
    },
  },

  // B2 Level - Upper Intermediate Adjective Knowledge
  B2: {
    sophisticatedDescriptive: {
      definition: "Advanced descriptive adjectives for precise communication.",
      examples: [
        "meticulous",
        "eloquent",
        "resilient",
        "tenacious",
        "diligent",
        "astute",
        "prudent",
        "arduous",
        "ubiquitous",
        "ephemeral",
      ],
      usage: "She is a meticulous worker. The task was arduous.",
    },
    academic: {
      definition: "Adjectives commonly used in academic contexts.",
      examples: [
        "comprehensive",
        "systematic",
        "empirical",
        "theoretical",
        "methodological",
        "analytical",
        "conceptual",
        "critical",
        "significant",
        "relevant",
      ],
      usage: "The analysis was comprehensive. The findings are significant.",
    },
    business: {
      definition: "Adjectives used in business and professional contexts.",
      examples: [
        "competitive",
        "strategic",
        "financial",
        "operational",
        "innovative",
        "efficient",
        "productive",
        "profitable",
        "sustainable",
        "flexible",
      ],
      usage: "The market is competitive. The approach is innovative.",
    },
    abstract: {
      definition: "Abstract adjectives for complex concepts.",
      examples: [
        "philosophical",
        "psychological",
        "sociological",
        "economic",
        "political",
        "cultural",
        "historical",
        "scientific",
        "artistic",
        "spiritual",
      ],
      usage: "The question is philosophical. The impact is cultural.",
    },
    gradableVsNonGradable: {
      definition: "Understanding gradable and non-gradable adjectives.",
      gradable: {
        examples: ["big", "happy", "intelligent", "beautiful", "fast"],
        modifiers: ["very", "quite", "rather", "extremely", "slightly"],
      },
      nonGradable: {
        examples: ["perfect", "unique", "dead", "alive", "pregnant", "married"],
        modifiers: ["absolutely", "completely", "totally", "utterly"],
      },
    },
    adjectiveClauses: {
      definition: "Complex adjective clauses with various relative pronouns.",
      relativePronouns: {
        who: "Refers to people (subject or object)",
        whom: "Refers to people (object only, formal)",
        which: "Refers to things, animals, or groups",
        that: "Refers to people, things, or animals (restrictive only)",
        whose: "Shows possession",
        where: "Refers to places",
        when: "Refers to time",
      },
      examples: [
        "The students who study hard will succeed.",
        "The book which I bought yesterday is interesting.",
        "The man whose car was stolen called the police.",
        "The time when we met was perfect.",
      ],
      restrictiveVsNonRestrictive: {
        restrictive: "Essential information (no commas)",
        nonRestrictive: "Additional information (uses commas)",
      },
    },
    adjectivePhrases: {
      definition: "Complex adjective phrases for varied expression.",
      types: {
        prepositional: "Phrases beginning with prepositions",
        participial: "Phrases containing participles",
        infinitive: "Phrases containing infinitives",
      },
      examples: [
        "The man talking to John is my uncle.",
        "The books written by Shakespeare are classics.",
        "The best time to visit is spring.",
      ],
    },
  },

  // C1 Level - Advanced Adjective Knowledge
  C1: {
    literary: {
      definition:
        "Sophisticated adjectives used in literature and formal writing.",
      examples: [
        "ethereal",
        "mellifluous",
        "lugubrious",
        "effervescent",
        "obstreperous",
        "pulchritudinous",
        "antediluvian",
        "sesquipedalian",
        "surreptitious",
        "voracious",
      ],
      usage:
        "The ethereal moonlight danced on the water. Her mellifluous voice captivated the audience.",
    },
    technical: {
      definition:
        "Specialized adjectives for technical and professional fields.",
      examples: [
        "algorithmic",
        "biochemical",
        "cybernetic",
        "demographic",
        "epidemiological",
        "geophysical",
        "hydrodynamic",
        "immunological",
        "kinematic",
        "logarithmic",
      ],
      usage:
        "The algorithmic approach was successful. The biochemical process is complex.",
    },
    nuanced: {
      definition: "Adjectives with subtle differences in meaning.",
      examples: [
        "economic vs economical",
        "historic vs historical",
        "classic vs classical",
        "electric vs electrical",
        "comic vs comical",
      ],
      usage:
        "The economic situation is improving. This is an economical solution.",
    },
    collocations: {
      definition: "Advanced adjective-noun collocations.",
      business: [
        "competitive market",
        "strategic planning",
        "financial stability",
        "operational efficiency",
        "customer satisfaction",
        "market analysis",
      ],
      academic: [
        "critical thinking",
        "comprehensive analysis",
        "systematic approach",
        "empirical evidence",
        "theoretical framework",
        "methodological rigor",
      ],
      creative: [
        "vivid imagination",
        "profound insight",
        "subtle nuance",
        "striking contrast",
        "delicate balance",
        "dynamic interaction",
      ],
    },
    adjectiveReduction: {
      definition:
        "Advanced techniques for reducing adjective clauses to phrases.",
      rules: [
        "Remove relative pronoun and auxiliary verb",
        "Keep main verb in participle form",
        "Maintain meaning and clarity",
      ],
      examples: [
        "The students who were studying hard passed → The students studying hard passed",
        "The house that was built in 1900 is historic → The house built in 1900 is historic",
      ],
    },
    complexOrder: {
      definition:
        "Mastery of complex adjective order with multiple adjectives.",
      completeOrder: [
        "1. Opinion (beautiful, horrible)",
        "2. Size (tiny, huge)",
        "3. Physical quality (soft, rough)",
        "4. Shape (round, rectangular)",
        "5. Age (ancient, brand-new)",
        "6. Color (crimson, azure)",
        "7. Origin (Victorian, Renaissance)",
        "8. Material (mahogany, silk)",
        "9. Type (electric, manual)",
        "10. Purpose (sleeping, dining)",
      ],
      examples: [
        "a magnificent enormous ancient crimson Victorian mahogany dining table",
        "an exquisite tiny delicate round antique azure Chinese silk sleeping bag",
      ],
    },
  },

  // C2 Level - Mastery Adjective Knowledge
  C2: {
    rareAndObscure: {
      definition:
        "Extremely rare and sophisticated adjectives for mastery level.",
      examples: [
        "serendipitous",
        "lugubrious",
        "effervescent",
        "obstreperous",
        "pulchritudinous",
        "antediluvian",
        "sesquipedalian",
        "ubiquitous",
        "ephemeral",
        "mellifluous",
        "surreptitious",
        "voracious",
        "adamant",
        "eloquent",
        "resilient",
      ],
      usage:
        "The serendipitous discovery changed everything. His lugubrious demeanor reflected his mood.",
    },
    domainSpecific: {
      definition:
        "Highly specialized adjectives for specific professional domains.",
      legal: [
        "jurisprudential",
        "constitutional",
        "legislative",
        "judicial",
        "statutory",
      ],
      medical: [
        "pathological",
        "physiological",
        "neurological",
        "cardiological",
        "dermatological",
      ],
      scientific: ["molecular", "atomic", "cellular", "organic", "inorganic"],
      artistic: [
        "aesthetic",
        "artistic",
        "creative",
        "expressive",
        "innovative",
      ],
    },
    stylistic: {
      definition: "Adjectives for sophisticated stylistic expression.",
      formal: [
        "distinguished",
        "esteemed",
        "renowned",
        "prestigious",
        "illustrious",
      ],
      poetic: ["ethereal", "transcendent", "sublime", "mystical", "enigmatic"],
      academic: [
        "scholarly",
        "intellectual",
        "analytical",
        "methodological",
        "conceptual",
      ],
    },
    contextualMastery: {
      definition:
        "Mastery of adjective usage across all contexts and registers.",
      formalWriting: "Precise, objective, sophisticated adjectives",
      creativeWriting: "Imaginative, sensory, emotional adjectives",
      academicWriting: "Technical, analytical, research-oriented adjectives",
      casualSpeech: "Simple, direct, conversational adjectives",
    },
    advancedPatterns: {
      definition: "Complex patterns and combinations of adjectives.",
      accumulation: "Using multiple adjectives for emphasis and detail",
      juxtaposition: "Placing contrasting adjectives together",
      gradation:
        "Using adjectives in ascending or descending order of intensity",
      alliteration: "Using adjectives that start with the same sound",
    },
    crossLinguistic: {
      definition:
        "Understanding adjective usage across different languages and cultures.",
      comparativeAnalysis:
        "How adjectives function differently across languages",
      translationChallenges:
        "Difficulties in translating adjectives between languages",
      culturalNuances:
        "How adjective usage reflects cultural values and perspectives",
    },
  },

  // Historical Development (Background Information)
  historicalDevelopment: {
    oldEnglish:
      "Adjectives in Old English had inflections for case, gender, and number, which have mostly disappeared in Modern English.",
    middleEnglish:
      "During Middle English, adjective endings were simplified and the modern fixed order began to develop.",
    modernEnglish:
      "Modern English adjectives are invariable and follow a strict order before nouns.",
  },

  // Adjective Tests and Identification
  adjectiveTests: [
    "Can it be used before a noun? (a happy child)",
    "Can it be used after a linking verb? (The child is happy)",
    "Can it be graded? (very happy, quite happy)",
    "Can it form a comparative/superlative? (happier, happiest)",
    "Can it be modified by intensifiers? (extremely happy)",
    "Does it answer questions like 'What kind?' or 'Which one?'",
  ],

  // Common Adjective Mistakes
  commonMistakes: {
    orderErrors: [
      "Incorrect: a red big car (should be: a big red car)",
      "Incorrect: an Italian beautiful woman (should be: a beautiful Italian woman)",
      "Incorrect: wooden old table (should be: old wooden table)",
    ],
    comparisonErrors: [
      "Incorrect: more better (should be: better)",
      "Incorrect: most fastest (should be: fastest)",
      "Incorrect: more unique (should be: unique)",
    ],
    usageErrors: [
      "Using non-gradable adjectives with degree modifiers (very perfect)",
      "Confusing similar adjectives (economic vs economical)",
      "Overusing intensifiers (very, really, so)",
    ],
  },

  // Adjective Learning Strategies
  learningStrategies: [
    "Practice adjective order with real objects and descriptions",
    "Create adjective lists for different categories (emotions, sizes, colors)",
    "Use adjective flashcards with pictures and examples",
    "Practice comparative and superlative forms regularly",
    "Read extensively to encounter adjectives in context",
    "Write descriptive paragraphs using various adjective types",
    "Play adjective games (describing objects, people, places)",
    "Study adjective collocations and common combinations",
  ],

  // Adjective in Language Tests
  adjectiveInTests: [
    "TOEFL/IELTS: Identify and correct adjective order errors in reading and writing sections",
    "Cambridge: Use advanced adjectives in writing tasks and speaking assessments",
    "SAT: Recognize subtle differences in adjective meaning and usage",
    "GRE: Understand complex adjective relationships and connotations",
    "GMAT: Apply adjective logic in sentence correction questions",
  ],

  // Advanced Adjective Patterns and Constructions
  advancedPatterns: {
    participialAdjectives: {
      definition: "Adjectives formed from present and past participles.",
      presentParticiple: {
        examples: [
          "interesting",
          "boring",
          "exciting",
          "amazing",
          "surprising",
          "confusing",
          "frightening",
          "disappointing",
        ],
        usage: "The movie is interesting. The book is boring.",
      },
      pastParticiple: {
        examples: [
          "interested",
          "bored",
          "excited",
          "amazed",
          "surprised",
          "confused",
          "frightened",
          "disappointed",
        ],
        usage: "I am interested in the movie. She is bored with the book.",
      },
    },
    compoundAdjectives: {
      definition: "Adjectives formed by combining multiple words.",
      hyphenated: [
        "well-known",
        "up-to-date",
        "self-centered",
        "ice-cold",
        "world-famous",
        "time-consuming",
        "user-friendly",
      ],
      open: ["high school", "real estate", "full time", "part time"],
      closed: ["everyday", "downstairs", "upstairs", "outdoor", "indoor"],
    },
    derivedAdjectives: {
      definition: "Adjectives formed by adding suffixes to other words.",
      suffixes: {
        "-ful": ["beautiful", "careful", "helpful", "powerful", "wonderful"],
        "-less": ["careless", "helpless", "powerless", "useless", "fearless"],
        "-able": [
          "comfortable",
          "enjoyable",
          "reliable",
          "suitable",
          "valuable",
        ],
        "-ous": ["famous", "dangerous", "generous", "mysterious", "curious"],
        "-al": ["personal", "national", "cultural", "natural", "traditional"],
        "-ic": ["basic", "economic", "scientific", "artistic", "historic"],
      },
    },
  },

  // Adjective Collocations and Fixed Expressions
  collocations: {
    commonPairs: [
      "deep sleep",
      "heavy rain",
      "strong coffee",
      "bright future",
      "sharp mind",
      "soft voice",
      "hard work",
      "easy life",
      "long journey",
      "short time",
      "high quality",
      "low price",
      "big decision",
      "small change",
      "good idea",
      "bad habit",
      "fresh air",
      "clean water",
      "hot weather",
      "cold winter",
      "sweet dreams",
      "bitter taste",
      "sour grapes",
      "salty food",
    ],
    businessCollocations: [
      "competitive market",
      "strategic planning",
      "financial stability",
      "operational efficiency",
      "customer satisfaction",
      "market analysis",
      "product development",
      "quality assurance",
      "cost effective",
      "time management",
      "risk assessment",
      "performance evaluation",
    ],
    academicCollocations: [
      "critical thinking",
      "comprehensive analysis",
      "systematic approach",
      "empirical evidence",
      "theoretical framework",
      "methodological rigor",
      "conceptual clarity",
      "analytical skills",
      "research findings",
      "academic writing",
      "scholarly work",
      "intellectual property",
    ],
    emotionalCollocations: [
      "deep love",
      "strong feelings",
      "mixed emotions",
      "pure joy",
      "genuine happiness",
      "real sadness",
      "true friendship",
      "close relationship",
      "warm welcome",
      "cold shoulder",
      "hot temper",
      "cool attitude",
    ],
  },

  // Adjective Usage in Different Genres
  genreUsage: {
    fiction: {
      description: "Adjectives used in creative writing and storytelling.",
      examples: [
        "mysterious",
        "enchanting",
        "haunting",
        "whimsical",
        "melancholic",
        "ethereal",
        "sinister",
        "magical",
      ],
      techniques: [
        "sensory adjectives",
        "emotional adjectives",
        "atmospheric adjectives",
      ],
    },
    journalism: {
      description: "Adjectives used in news reporting and articles.",
      examples: [
        "breaking",
        "exclusive",
        "controversial",
        "alleged",
        "confirmed",
        "official",
        "reliable",
        "credible",
      ],
      principles: ["objectivity", "accuracy", "clarity", "neutrality"],
    },
    academic: {
      description: "Adjectives used in scholarly writing and research.",
      examples: [
        "empirical",
        "theoretical",
        "methodological",
        "analytical",
        "systematic",
        "comprehensive",
        "significant",
        "relevant",
      ],
      characteristics: ["precise", "objective", "technical", "formal"],
    },
    advertising: {
      description: "Adjectives used in marketing and promotional content.",
      examples: [
        "amazing",
        "incredible",
        "fantastic",
        "wonderful",
        "perfect",
        "excellent",
        "superior",
        "premium",
      ],
      strategies: [
        "positive adjectives",
        "comparative adjectives",
        "superlative adjectives",
      ],
    },
  },

  // Adjective Frequency and Register
  frequencyAndRegister: {
    highFrequency: {
      definition: "Most commonly used adjectives in everyday English.",
      examples: [
        "good",
        "big",
        "new",
        "old",
        "great",
        "small",
        "high",
        "long",
        "different",
        "large",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition: "Moderately common adjectives for specific contexts.",
      examples: [
        "beautiful",
        "important",
        "difficult",
        "interesting",
        "necessary",
        "possible",
        "available",
        "popular",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition: "Rare or specialized adjectives for specific purposes.",
      examples: [
        "serendipitous",
        "lugubrious",
        "effervescent",
        "obstreperous",
        "pulchritudinous",
      ],
      usage: "Used in academic, literary, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "distinguished",
        "esteemed",
        "renowned",
        "prestigious",
        "illustrious",
      ],
      informal: ["cool", "awesome", "amazing", "fantastic", "terrific"],
      technical: [
        "algorithmic",
        "biochemical",
        "cybernetic",
        "demographic",
        "epidemiological",
      ],
      literary: [
        "ethereal",
        "transcendent",
        "sublime",
        "mystical",
        "enigmatic",
      ],
    },
  },

  // Adjective Exercises and Practice Activities
  exercises: {
    beginner: [
      "Complete the sentence: The car is ___ (color)",
      "Choose the correct adjective: This is a ___ day (good/bad)",
      "Match adjectives to pictures",
      "Describe objects in the classroom",
    ],
    intermediate: [
      "Order multiple adjectives correctly",
      "Use comparative and superlative forms",
      "Create adjective clauses",
      "Practice adjective-noun collocations",
    ],
    advanced: [
      "Analyze adjective usage in texts",
      "Create sophisticated descriptions",
      "Practice adjective reduction",
      "Study register-appropriate adjectives",
    ],
    interactive: [
      "Adjective guessing games",
      "Description challenges",
      "Adjective order competitions",
      "Collocation matching exercises",
    ],
  },

  // Adjective Assessment and Evaluation
  assessment: {
    criteria: [
      "Accuracy of adjective choice",
      "Correct adjective order",
      "Appropriate register usage",
      "Variety and sophistication",
      "Collocation accuracy",
    ],
    rubrics: {
      beginner: "Basic adjectives, simple order, limited variety",
      intermediate: "Good variety, correct order, appropriate usage",
      advanced: "Sophisticated choices, complex order, register awareness",
      mastery: "Exceptional variety, perfect order, nuanced usage",
    },
    commonErrors: [
      "Incorrect adjective order",
      "Overuse of common adjectives",
      "Inappropriate register",
      "Poor collocation choices",
      "Missing intensifiers or modifiers",
    ],
  },
};

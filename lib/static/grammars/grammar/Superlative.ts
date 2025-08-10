import { SuperlativeType } from "@/types/grammars/grammar/Superlative";

export const SuperlativeData:SuperlativeType = {
  id: 112,
  // --- Comprehensive Superlative Reference ---

  // Definition of Superlatives
  superlativeDefinition: {
    basicDefinition:
      "Superlatives are used to compare one person, animal, thing, or situation to all others in a group. They show the highest or lowest degree of a quality among three or more items.",
    grammaticalFunction:
      "Superlatives function as modifiers that express the extreme degree of a quality, indicating the highest or lowest level among a group of entities.",
    keyCharacteristics: [
      "Compare one entity to all others in a group",
      "Show the highest or lowest degree of a quality",
      "Use specific morphological patterns",
      "Often preceded by 'the'",
      "Can be formed from adjectives, adverbs, and some nouns",
    ],
    morphologicalFeatures: {
      regular: "Add -est to short adjectives, use 'most' with long adjectives",
      irregular:
        "Special forms for common adjectives (good → best, bad → worst)",
      compound: "Multi-word superlatives (most interesting, least expensive)",
    },
    positionInSentence: {
      attributive: "Before nouns (the biggest house)",
      predicative: "After linking verbs (The house is the biggest)",
      adverbial: "Modifying verbs (She runs the fastest)",
    },
  },

  // A1 Level - Basic Superlatives (Beginner)
  A1: {
    basicShortAdjectiveSuperlatives: {
      definition: "Essential superlatives for simple one-syllable adjectives.",
      examples: [
        "big → biggest",
        "small → smallest",
        "tall → tallest",
        "short → shortest",
        "fast → fastest",
        "slow → slowest",
      ],
      usage:
        "This house is the biggest in the neighborhood. My car is the fastest in the race. She is the tallest in her family.",
    },
    basicLongAdjectiveSuperlatives: {
      definition:
        "Basic superlatives for multi-syllable adjectives using 'most'.",
      examples: [
        "beautiful → most beautiful",
        "expensive → most expensive",
        "difficult → most difficult",
        "interesting → most interesting",
      ],
      usage:
        "This flower is the most beautiful in the garden. This car is the most expensive in the showroom. This book is the most interesting I've read.",
    },
    basicIrregularSuperlatives: {
      definition:
        "Essential irregular superlative forms for common adjectives.",
      examples: ["good → best", "bad → worst", "far → farthest/furthest"],
      usage:
        "This book is the best I've ever read. This weather is the worst I've seen. I live the farthest from school.",
    },
    basicTheUsage: {
      definition: "Basic usage of 'the' with superlatives.",
      examples: [
        "the biggest",
        "the most expensive",
        "the best",
        "the fastest",
      ],
      usage:
        "My house is the biggest. This car is the most expensive. This food is the best.",
    },
  },

  // A2 Level - Elementary Superlatives
  A2: {
    expandedShortAdjectiveSuperlatives: {
      definition: "More short adjective superlatives with spelling rules.",
      examples: [
        "hot → hottest",
        "big → biggest",
        "thin → thinnest",
        "fat → fattest",
        "sad → saddest",
        "happy → happiest",
      ],
      usage:
        "Today is the hottest day of the year. This box is the biggest in the room. She is the happiest person I know.",
    },
    expandedLongAdjectiveSuperlatives: {
      definition: "More long adjective superlatives with 'most' and 'least'.",
      examples: [
        "comfortable → most comfortable",
        "dangerous → most dangerous",
        "important → most important",
        "necessary → most necessary",
      ],
      usage:
        "This chair is the most comfortable in the room. This road is the most dangerous in the city. This task is the most important of all.",
    },
    superlativeAdverbs: {
      definition: "Basic superlative forms of adverbs.",
      examples: [
        "quickly → most quickly",
        "slowly → most slowly",
        "carefully → most carefully",
        "well → best",
      ],
      usage:
        "She runs the most quickly of all. He works the most carefully in the office. She sings the best in the choir.",
    },
    superlativeNouns: {
      definition: "Basic superlative expressions with nouns.",
      examples: [
        "the most money",
        "the least time",
        "the fewest people",
        "the most books",
        "the least water",
      ],
      usage:
        "I have the most money in the family. I have the least time today. There are the fewest people here.",
    },
  },

  // B1 Level - Intermediate Superlatives
  B1: {
    sophisticatedAdjectiveSuperlatives: {
      definition:
        "More sophisticated superlative forms for complex adjectives.",
      examples: [
        "intelligent → most intelligent",
        "successful → most successful",
        "responsible → most responsible",
        "creative → most creative",
      ],
      usage:
        "She is the most intelligent student in the school. He is the most successful businessman in the city. She is the most responsible person in the team.",
    },
    superlativePhrases: {
      definition: "Superlative phrases and expressions.",
      examples: [
        "one of the most",
        "among the most",
        "by far the most",
        "easily the most",
        "undoubtedly the most",
      ],
      usage:
        "This is one of the most interesting books I've read. She is among the most talented artists. He is by far the most qualified candidate.",
    },
    superlativeClauses: {
      definition: "Superlative clauses and complex structures.",
      examples: [
        "the most...that",
        "the best...I've ever",
        "the worst...in history",
        "the fastest...in the world",
      ],
      usage:
        "This is the most interesting movie that I've ever seen. She is the best singer I've ever heard. This is the worst storm in history.",
    },
    superlativeIntensifiers: {
      definition: "Intensifiers used with superlatives.",
      examples: [
        "absolutely the best",
        "definitely the most",
        "certainly the worst",
        "undoubtedly the fastest",
        "easily the most",
      ],
      usage:
        "This is absolutely the best restaurant in town. She is definitely the most talented artist. This is certainly the worst decision.",
    },
  },

  // B2 Level - Upper Intermediate Superlatives
  B2: {
    complexSuperlativeStructures: {
      definition: "Complex superlative structures and patterns.",
      examples: [
        "the most...of all",
        "the best...ever",
        "the worst...in living memory",
        "the fastest...on record",
        "the most...in recent history",
      ],
      usage:
        "This is the most challenging project of all. She is the best singer ever. This is the worst disaster in living memory.",
    },
    superlativeIdioms: {
      definition: "Superlative idioms and expressions.",
      examples: [
        "the best of the best",
        "the cream of the crop",
        "the pick of the litter",
        "the top of the heap",
        "the best thing since sliced bread",
      ],
      usage:
        "These students are the best of the best. This product is the cream of the crop. This invention is the best thing since sliced bread.",
    },
    superlativePrepositions: {
      definition: "Prepositions used in superlative expressions.",
      examples: [
        "among the most",
        "of all the",
        "in the entire",
        "within the group",
        "out of all",
      ],
      usage:
        "She is among the most talented musicians. This is the best of all the options. He is the fastest in the entire team.",
    },
    superlativeConjunctions: {
      definition: "Conjunctions used in superlative contexts.",
      examples: [
        "not only...but also",
        "both...and",
        "either...or",
        "neither...nor",
        "as well as",
      ],
      usage:
        "She is not only the most talented but also the most dedicated. This is both the fastest and the most efficient. He is either the best or the worst.",
    },
  },

  // C1 Level - Advanced Superlatives
  C1: {
    sophisticatedSuperlativeStructures: {
      definition:
        "Highly sophisticated superlative structures for advanced expression.",
      examples: [
        "the most...by far",
        "the best...without question",
        "the worst...without doubt",
        "the fastest...by a considerable margin",
        "the most...by a wide margin",
      ],
      usage:
        "This is the most innovative solution by far. She is the best candidate without question. This is the worst mistake without doubt.",
    },
    academicSuperlatives: {
      definition:
        "Superlatives commonly used in academic and scholarly writing.",
      examples: [
        "the most significant",
        "the most comprehensive",
        "the most influential",
        "the most groundbreaking",
        "the most authoritative",
      ],
      usage:
        "This is the most significant study in the field. The research is the most comprehensive to date. This theory is the most influential in modern science.",
     
    },
    literarySuperlatives: {
      definition: "Superlatives used in literature and creative writing.",
      examples: [
        "the most magnificent",
        "the most extraordinary",
        "the most breathtaking",
        "the most awe-inspiring",
        "the most sublime",
      ],
      usage:
        "The view was the most magnificent I had ever seen. Her performance was the most extraordinary. The sunset was the most breathtaking spectacle.",
    },
    technicalSuperlatives: {
      definition: "Superlatives used in technical and specialized contexts.",
      examples: [
        "the most efficient",
        "the most accurate",
        "the most reliable",
        "the most cost-effective",
        "the most user-friendly",
      ],
      usage:
        "This system is the most efficient available. The method is the most accurate for this purpose. The solution is the most cost-effective option.",
    },
  },

  // C2 Level - Mastery Superlatives
  C2: {
    rareAndObscure: {
      definition:
        "Extremely rare and sophisticated superlatives for mastery level expression.",
      examples: [
        "the most unparalleled",
        "the most unprecedented",
        "the most unrivaled",
        "the most peerless",
        "the most matchless",
        "the most incomparable",
      ],
      usage:
        "Her achievement was the most unparalleled in the field. The discovery was the most unprecedented in scientific history. His talent was the most unrivaled.",
    },
    domainSpecific: {
      definition:
        "Highly specialized superlatives for specific professional domains.",
      legal: [
        "the most compelling",
        "the most convincing",
        "the most persuasive",
        "the most credible",
        "the most admissible",
      ],
      medical: [
        "the most severe",
        "the most acute",
        "the most chronic",
        "the most progressive",
        "the most responsive",
      ],
      scientific: [
        "the most accurate",
        "the most precise",
        "the most reliable",
        "the most consistent",
        "the most reproducible",
      ],
      business: [
        "the most profitable",
        "the most efficient",
        "the most competitive",
        "the most sustainable",
        "the most scalable",
      ],
    },
    stylisticSuperlatives: {
      definition:
        "Superlatives for sophisticated stylistic expression and nuance.",
      formal: [
        "the most significant",
        "the most comprehensive",
        "the most influential",
        "the most authoritative",
        "the most definitive",
      ],
      poetic: [
        "the most magnificent",
        "the most extraordinary",
        "the most breathtaking",
        "the most awe-inspiring",
        "the most sublime",
      ],
      academic: [
        "the most groundbreaking",
        "the most innovative",
        "the most revolutionary",
        "the most pioneering",
        "the most seminal",
      ],
    },
    contextualMastery: {
      definition:
        "Mastery of superlative usage across all contexts and registers.",
      formalWriting:
        "Precise, sophisticated superlatives for academic and professional contexts",
      creativeWriting:
        "Expressive, nuanced superlatives for literary and artistic expression",
      casualSpeech:
        "Natural, conversational superlatives for everyday communication",
      technicalWriting:
        "Specific, accurate superlatives for specialized documentation",
    },
  },

  // Original Superlative Section (Preserved)
  Superlative: {
    structure: [
      "S + be + the + adj-est + (in/of...)",
      "S + V + the most + adj + (in/of...)",
    ],
    examples: [
      "He is the smartest student in the class.",
      "This is the most interesting movie I’ve seen.",
    ],
    recognition: "Dấu hiệu nhận biết: 'the + adj-est', 'the most'",
  },

  // Advanced Superlative Patterns and Constructions
  advancedSuperlativePatterns: {
    superlativeFormation: {
      definition: "How superlatives are formed and categorized.",
      regular: {
        definition: "Regular superlative formation rules",
        shortAdjectives: "Add -est (big → biggest, tall → tallest)",
        longAdjectives:
          "Use 'most' (beautiful → most beautiful, expensive → most expensive)",
        spellingRules:
          "Double consonant (big → biggest), change y to i (happy → happiest)",
      },
      irregular: {
        definition: "Irregular superlative forms",
        examples: [
          "good → best",
          "bad → worst",
          "far → farthest/furthest",
          "little → least",
          "many/much → most",
        ],
      },
      compound: {
        definition: "Multi-word superlative expressions",
        examples: [
          "most interesting",
          "least expensive",
          "best possible",
          "worst imaginable",
        ],
      },
    },
    superlativeStructures: {
      definition: "Different structural patterns for superlatives.",
      basicStructure: {
        pattern: "Subject + be + the + superlative + (in/of...)",
        examples: [
          "She is the tallest in the class",
          "This car is the most expensive in the showroom",
        ],
      },
      complexStructure: {
        pattern: "Subject + be + the + superlative + that + clause",
        examples: [
          "This is the most interesting movie that I've ever seen",
          "She is the best singer that I've ever heard",
        ],
      },
      phraseStructure: {
        pattern: "one of the + superlative + plural noun",
        examples: [
          "This is one of the most interesting books",
          "She is one of the most talented artists",
        ],
      },
    },
    superlativeModifiers: {
      definition: "Words that modify superlatives to show degree or emphasis.",
      intensifiers: {
        examples: [
          "absolutely the best",
          "definitely the most",
          "certainly the worst",
          "undoubtedly the fastest",
          "easily the most",
        ],
        usage:
          "This is absolutely the best restaurant in town. She is definitely the most talented artist.",
      },
      qualifiers: {
        examples: [
          "one of the most",
          "among the most",
          "by far the most",
          "easily the most",
          "undoubtedly the most",
        ],
        usage:
          "This is one of the most interesting books. She is among the most talented artists.",
      },
      approximators: {
        examples: [
          "arguably the best",
          "possibly the most",
          "potentially the worst",
          "perhaps the fastest",
        ],
        usage:
          "This is arguably the best solution. She is possibly the most qualified candidate.",
      },
    },
    superlativeClauses: {
      definition: "Clause structures used in superlative contexts.",
      thatClauses: {
        examples: [
          "the best that I've ever seen",
          "the most interesting that I've read",
          "the worst that could happen",
        ],
        usage:
          "This is the best movie that I've ever seen. This is the most interesting book that I've read.",
      },
      relativeClauses: {
        examples: [
          "the fastest who ever lived",
          "the most talented whom I know",
          "the best which is available",
        ],
        usage:
          "He is the fastest runner who ever lived. She is the most talented artist whom I know.",
      },
      infinitiveClauses: {
        examples: [
          "the best to choose",
          "the most difficult to understand",
          "the worst to experience",
        ],
        usage:
          "This is the best option to choose. This is the most difficult concept to understand.",
      },
    },
  },

  // Superlative Collocations and Fixed Expressions
  superlativeCollocations: {
    commonPairs: [
      "absolutely the best",
      "definitely the most",
      "certainly the worst",
      "undoubtedly the fastest",
      "easily the most",
      "by far the best",
      "without question the most",
      "without doubt the worst",
      "one of the most",
      "among the most",
      "arguably the best",
      "possibly the most",
      "potentially the worst",
      "perhaps the fastest",
      "clearly the most",
      "obviously the best",
    ],
    academicCollocations: [
      "the most significant",
      "the most comprehensive",
      "the most influential",
      "the most groundbreaking",
      "the most authoritative",
      "the most definitive",
      "the most innovative",
      "the most revolutionary",
      "the most pioneering",
      "the most seminal",
      "the most substantial",
      "the most profound",
    ],
    businessCollocations: [
      "the most profitable",
      "the most efficient",
      "the most competitive",
      "the most sustainable",
      "the most scalable",
      "the most cost-effective",
      "the most user-friendly",
      "the most reliable",
      "the most innovative",
      "the most successful",
      "the most valuable",
      "the most strategic",
    ],
    literaryCollocations: [
      "the most magnificent",
      "the most extraordinary",
      "the most breathtaking",
      "the most awe-inspiring",
      "the most sublime",
      "the most beautiful",
      "the most elegant",
      "the most graceful",
      "the most poetic",
      "the most lyrical",
      "the most enchanting",
      "the most mesmerizing",
    ],
  },

  // Superlative Usage in Different Genres
  superlativeGenreUsage: {
    academic: {
      description: "Superlatives used in scholarly writing and research.",
      examples: [
        "the most significant",
        "the most comprehensive",
        "the most influential",
        "the most groundbreaking",
        "the most authoritative",
      ],
      characteristics: ["precise", "quantitative", "objective", "analytical"],
    },
    journalistic: {
      description: "Superlatives used in news reporting and articles.",
      examples: [
        "the most important",
        "the most significant",
        "the most dramatic",
        "the most surprising",
        "the most controversial",
      ],
      principles: ["clarity", "accuracy", "objectivity", "impact"],
    },
    literary: {
      description: "Superlatives used in creative writing and fiction.",
      examples: [
        "the most magnificent",
        "the most extraordinary",
        "the most breathtaking",
        "the most awe-inspiring",
        "the most sublime",
      ],
      techniques: [
        "descriptive superlatives",
        "emotional emphasis",
        "atmospheric intensity",
      ],
    },
    technical: {
      description:
        "Superlatives used in technical and specialized documentation.",
      examples: [
        "the most efficient",
        "the most accurate",
        "the most reliable",
        "the most cost-effective",
        "the most user-friendly",
      ],
      strategies: [
        "precise superlatives",
        "technical accuracy",
        "specialized terminology",
      ],
    },
  },

  // Superlative Frequency and Register
  superlativeFrequencyAndRegister: {
    highFrequency: {
      definition: "Most commonly used superlatives in everyday English.",
      examples: [
        "best",
        "worst",
        "most",
        "least",
        "biggest",
        "smallest",
        "fastest",
        "slowest",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition: "Moderately common superlatives for specific contexts.",
      examples: [
        "most interesting",
        "least expensive",
        "most difficult",
        "least important",
        "most comfortable",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition: "Rare or specialized superlatives for specific purposes.",
      examples: [
        "most unparalleled",
        "most unprecedented",
        "most unrivaled",
        "most peerless",
        "most matchless",
      ],
      usage: "Used in literary, academic, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "the most significant",
        "the most comprehensive",
        "the most influential",
        "the most authoritative",
      ],
      informal: [
        "the best ever",
        "the worst possible",
        "the most awesome",
        "the coolest",
        "the most amazing",
      ],
      technical: [
        "the most efficient",
        "the most accurate",
        "the most reliable",
        "the most cost-effective",
      ],
      literary: [
        "the most magnificent",
        "the most extraordinary",
        "the most breathtaking",
        "the most sublime",
      ],
    },
  },

  // Superlative Exercises and Practice Activities
  superlativeExercises: {
    beginner: [
      "Complete the sentence: This house is the ___ in the neighborhood (big/bigger/biggest)",
      "Choose the correct superlative: My car is the ___ in the race (fast/faster/fastest)",
      "Match adjectives to their superlative forms",
      "Practice basic 'the' usage with superlatives",
    ],
    intermediate: [
      "Place superlatives in correct positions",
      "Use different types of superlatives appropriately",
      "Practice superlative intensifiers",
      "Create superlative sentences",
    ],
    advanced: [
      "Analyze superlative usage in texts",
      "Create sophisticated superlative structures",
      "Practice register-appropriate superlatives",
      "Study superlative clause patterns",
    ],
    interactive: [
      "Superlative guessing games",
      "Best/worst ranking challenges",
      "Superlative structure competitions",
      "Register matching exercises",
    ],
  },

  // Superlative Assessment and Evaluation
  superlativeAssessment: {
    criteria: [
      "Accuracy of superlative form",
      "Correct use of 'the'",
      "Appropriate register usage",
      "Proper intensifier choice",
      "Correct clause structure",
    ],
    rubrics: {
      beginner: "Basic superlatives, simple structure, limited variety",
      intermediate: "Good variety, correct structure, appropriate usage",
      advanced: "Sophisticated choices, complex structure, register awareness",
      mastery: "Exceptional variety, perfect structure, nuanced usage",
    },
    commonErrors: [
      "Incorrect superlative form",
      "Missing 'the'",
      "Inappropriate register",
      "Wrong intensifier choice",
      "Poor clause structure",
    ],
  },

  // Superlative Learning Strategies
  superlativeLearningStrategies: [
    "Practice superlative usage with real objects and situations",
    "Create superlative lists for different adjective categories",
    "Use superlative flashcards with examples and contexts",
    "Practice superlative structures regularly",
    "Read extensively to encounter superlatives in context",
    "Write superlative sentences using various patterns",
    "Play superlative games (ranking, comparing, identifying)",
    "Study superlative clause patterns and intensifiers",
  ],

  // Superlative in Language Tests
  superlativeInTests: [
    "TOEFL/IELTS: Identify and correct superlative errors in reading and writing sections",
    "Cambridge: Use appropriate superlatives in writing tasks and speaking assessments",
    "SAT: Recognize superlative meaning and usage in reading comprehension",
    "GRE: Understand superlative relationships and clause patterns",
    "GMAT: Apply superlative logic in sentence correction questions",
  ],

  // Common Superlative Mistakes
  commonSuperlativeMistakes: {
    formErrors: [
      "Incorrect: most biggest (should be: biggest)",
      "Incorrect: most good (should be: best)",
      "Incorrect: most bad (should be: worst)",
    ],
    structureErrors: [
      "Incorrect: biggest as (should be: the biggest)",
      "Incorrect: most expensive as (should be: the most expensive)",
      "Incorrect: best from (should be: the best)",
    ],
    usageErrors: [
      "Incorrect: I am most tall (should be: I am the tallest)",
      "Incorrect: This is most big (should be: This is the biggest)",
      "Incorrect: She is most good (should be: She is the best)",
    ],
  },

  fullLevelDetails: {
    A1: {
      definition:
        "A1 learners focus on the most basic superlative forms, typically for one-syllable adjectives (add -est) and simple 'the most' structures for longer adjectives. The superlative is used to show the highest or lowest degree among three or more items.",
      keyPoints: [
        "Add -est to short adjectives (big → biggest)",
        "Use 'the most' for longer adjectives (the most beautiful)",
        "Always use 'the' before the superlative",
        "Superlatives compare one thing to all others in a group",
        "Irregular forms: good → best, bad → worst, far → farthest/furthest",
      ],
      examples: [
        "He is the tallest in the class.",
        "This is the biggest apple.",
        "She is the best student.",
        "This is the most interesting book.",
      ],
      usage:
        "Superlatives at A1 are used in simple sentences to describe people, objects, or places as having the highest or lowest degree of a quality.",
      notes:
        "See: https://www.allthingsgrammar.com/superlatives.html for beginner worksheets and explanations.",
    },
    A2: {
      definition:
        "A2 learners expand to more adjectives, spelling rules (double consonant, y→i), and begin using superlative adverbs and nouns. They also learn about 'least' and more complex sentence structures.",
      keyPoints: [
        "Spelling rules: double consonant (big → biggest), y→i (happy → happiest)",
        "Use 'the least' for the lowest degree",
        "Superlative adverbs: most quickly, best",
        "Superlative nouns: the most money, the fewest people",
      ],
      examples: [
        "She is the happiest person I know.",
        "He works the most carefully.",
        "I have the least time today.",
      ],
      usage:
        "A2 superlatives are used in a wider range of contexts, including adverbs and quantifying nouns.",
      notes:
        "See: https://eslkidsworld.com/grammar/superlatives.html for A1-A2 level games and worksheets.",
    },
    B1: {
      definition:
        "B1 learners use superlatives with more complex adjectives, phrases, and clauses. They learn intensifiers, qualifiers, and more sophisticated structures.",
      keyPoints: [
        "Use of intensifiers: absolutely the best, by far the most",
        "Superlative phrases: one of the most, among the most",
        "Superlative clauses: the best that I've ever seen",
        "Complex adjectives: most intelligent, most responsible",
      ],
      examples: [
        "She is one of the most talented artists.",
        "This is the most interesting movie that I've ever seen.",
        "He is by far the most qualified candidate.",
      ],
      usage:
        "B1 superlatives are used in more descriptive and comparative contexts, often with intensifiers and in complex sentences.",
      notes:
        "See: https://preply.com/en/blog/superlative-adjectives/ for a comprehensive B1-B2 guide.",
    },
    B2: {
      definition:
        "B2 learners master idiomatic expressions, advanced structures, and register-appropriate superlatives. They use superlatives in idioms, with prepositions, and in formal/informal contexts.",
      keyPoints: [
        "Superlative idioms: the cream of the crop, the best of the best",
        "Prepositions: among the most, in the entire",
        "Register: formal (the most significant), informal (the coolest)",
        "Complex structures: the most...of all, the best...ever",
      ],
      examples: [
        "This product is the cream of the crop.",
        "He is the fastest in the entire team.",
        "These students are the best of the best.",
      ],
      usage:
        "B2 superlatives are used flexibly in idioms, formal writing, and nuanced comparisons.",
      notes:
        "See: https://botanicallinguist.com/100-english-superlatives/ for a list of advanced superlatives and idioms.",
    },
    C1: {
      definition:
        "C1 learners use highly sophisticated superlative structures, including academic, literary, and technical contexts. They understand subtle register differences and advanced intensifiers.",
      keyPoints: [
        "Academic superlatives: the most significant, the most comprehensive",
        "Literary superlatives: the most magnificent, the most sublime",
        "Technical superlatives: the most efficient, the most reliable",
        "Advanced intensifiers: by far, without question, by a wide margin",
      ],
      examples: [
        "This is the most innovative solution by far.",
        "The research is the most comprehensive to date.",
        "Her performance was the most extraordinary.",
      ],
      usage:
        "C1 superlatives are used in academic writing, technical documentation, and creative literature for precision and emphasis.",
      notes:
        "See: https://open.books4languages.com/english-a1-grammar/chapter/superlatives-with-adjectives-and-adverbs for academic explanations.",
    },
    C2: {
      definition:
        "C2 learners demonstrate mastery of superlatives, including rare, domain-specific, and stylistic forms. They use superlatives with nuance across all registers and contexts.",
      keyPoints: [
        "Rare forms: the most unparalleled, the most peerless",
        "Domain-specific: legal, medical, scientific, business superlatives",
        "Stylistic: formal, poetic, academic nuances",
        "Contextual mastery: precise, creative, technical, and casual usage",
      ],
      examples: [
        "Her achievement was the most unparalleled in the field.",
        "This theory is the most groundbreaking in modern science.",
        "He is the most scalable leader in the industry.",
      ],
      usage:
        "C2 superlatives are used with full control of register, style, and context, including rare and creative forms.",
      notes:
        "See: https://preply.com/en/blog/superlative-adjectives/ and advanced grammar books for C2 mastery.",
    },
  },
  references: [
    {
      title: "All Things Grammar: Superlatives",
      url: "https://www.allthingsgrammar.com/superlatives.html",
      description:
        "Comprehensive worksheets and explanations for A1-B1 learners.",
    },
    {
      title: "ESL Kids World: Superlatives Examples",
      url: "https://eslkidsworld.com/grammar/superlatives.html",
      description: "Superlative rules, examples, and games for A1-A2.",
    },
    {
      title: "Preply: Mastering Superlative Adjectives",
      url: "https://preply.com/en/blog/superlative-adjectives/",
      description: "A complete guide to superlative adjectives for B1-C2.",
    },
    {
      title: "Botanical Linguist: 100 English Superlatives",
      url: "https://botanicallinguist.com/100-english-superlatives/",
      description: "A curated list of common and advanced superlatives.",
    },
    {
      title: "Books4Languages: Superlative of Adjectives and Adverbs",
      url: "https://open.books4languages.com/english-a1-grammar/chapter/superlatives-with-adjectives-and-adverbs",
      description: "Academic explanations and examples for all levels.",
    },
  ],
};

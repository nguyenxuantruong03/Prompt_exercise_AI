import { quantitativeAdjectivesType } from "@/types/grammars/grammar/adjective_special/quantitativeAdjectives";

export const quantitativeAdjectivesData: quantitativeAdjectivesType = {
  id: 8,
  topic: "Quantitative Adjectives (Tính từ chỉ định lượng)",
  definition:
    "Quantitative adjectives are used to indicate the quantity of something without specifying the exact number. They express 'how much' or 'how many' and can be definite or indefinite in nature.",
  vietnameseDefinition:
    "Tính từ chỉ định lượng được dùng để biểu thị số lượng của một vật hoặc người nhưng không nói rõ con số cụ thể. Chúng thể hiện 'bao nhiêu' và có thể xác định hoặc không xác định về bản chất.",
  level: "A1–C2",
  usageNote:
    "Quantitative adjectives are essential for expressing quantities and amounts in English. They modify nouns to show whether something is countable or uncountable, and they follow specific grammatical rules depending on the type of noun they modify.",

  quantitative_Adjectives_vocab: {
    definite_quantity: [
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
      "eleven",
      "twelve",
      "twenty",
      "thirty",
      "hundred",
      "thousand",
      "million",
      "billion",
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "tenth",
      "twentieth",
      "single",
      "double",
      "triple",
      "quadruple",
      "multiple",
    ],

    indefinite_quantity: [
      "some",
      "any",
      "many",
      "much",
      "several",
      "few",
      "little",
      "a lot of",
      "lots of",
      "plenty of",
      "enough",
      "all",
      "most",
      "more",
      "less",
      "least",
      "fewer",
      "none",
      "various",
      "numerous",
      "certain",
      "certain amount of",
      "a number of",
    ],

    large_quantity: [
      "numerous",
      "countless",
      "abundant",
      "plentiful",
      "infinite",
      "innumerable",
      "ample",
      "vast",
      "enormous",
      "immense",
      "massive",
      "tremendous",
      "overwhelming",
      "copious",
      "profuse",
      "lavish",
      "extensive",
      "substantial",
      "considerable",
      "sizeable",
    ],

    small_quantity: [
      "a few",
      "a little",
      "few",
      "little",
      "scant",
      "limited",
      "insufficient",
      "meager",
      "minimal",
      "negligible",
      "tiny",
      "minuscule",
      "sparse",
      "scarce",
      "rare",
      "modest",
      "slight",
      "marginal",
      "token",
      "nominal",
    ],

    fractional_quantity: [
      "half",
      "quarter",
      "third",
      "two-thirds",
      "three-quarters",
      "one-fourth",
      "three-fourths",
      "fractional",
      "part",
      "portion",
      "percentage",
      "proportion",
      "ratio",
      "fraction",
    ],

    universal_quantity: [
      "all",
      "every",
      "each",
      "entire",
      "whole",
      "total",
      "complete",
      "full",
      "overall",
    ],

    distributive_quantity: [
      "each",
      "every",
      "either",
      "neither",
      "both",
      "apiece",
      "per",
      "respectively",
    ],

    approximate_quantity: [
      "around",
      "about",
      "nearly",
      "roughly",
      "almost",
      "approximately",
      "close to",
      "more or less",
      "in the region of",
      "in the vicinity of",
      "somewhere around",
      "upwards of",
      "or so",
      "give or take",
    ],

    numeric_modifiers: [
      "few dozen",
      "scores of",
      "hundreds of",
      "thousands of",
      "millions of",
      "billions of",
      "a handful of",
      "a couple of",
      "a pair of",
      "dozens of",
      "tens of",
    ],

    CEFR_levels: {
      A1_A2: [
        "one",
        "two",
        "three",
        "some",
        "any",
        "many",
        "much",
        "a lot of",
        "few",
        "little",
        "all",
        "every",
        "no",
        "more",
        "less",
      ],
      B1_B2: [
        "several",
        "most",
        "enough",
        "each",
        "none",
        "double",
        "half",
        "whole",
        "various",
        "numerous",
        "plenty of",
        "lots of",
        "both",
        "either",
        "neither",
      ],
      C1_C2: [
        "abundant",
        "countless",
        "innumerable",
        "ample",
        "meager",
        "scant",
        "portion",
        "approximately",
        "billions of",
        "copious",
        "negligible",
        "substantial",
        "considerable",
      ],
    },

    usage_notes: {
      definitions: {
        quantitative_adjective:
          "A quantitative adjective describes the amount or quantity of something, either definite (specific numbers) or indefinite (general amounts), and must agree with whether the noun is countable or uncountable.",
      },
      rule: "Quantitative adjectives usually appear before a noun and answer 'How much?' or 'How many?'. They must be chosen based on whether the noun is countable or uncountable.",
      examples: {
        good: [
          "She has **many** friends. (countable)",
          "I ate **some** rice. (uncountable)",
          "There are **few** cookies left. (countable)",
          "He read **half** the book. (specific portion)",
          "We have **enough** time. (sufficient amount)",
        ],
        wrong: [
          "*She has much friends.* ❌ (should be: many - friends are countable)",
          "*I ate few rice.* ❌ (should be: little - rice is uncountable)",
          "*There are less students.* ❌ (should be: fewer - students are countable)",
        ],
      },
    },
  },

  examples: [
    "I have some friends in the city.",
    "She has little money left.",
    "There are many books on the shelf.",
    "They bought a few apples.",
    "He drank much water after the run.",
    "Several people attended the meeting.",
    "We need more information about this topic.",
    "All students must complete the assignment.",
    "Each participant received a certificate.",
    "There's plenty of food for everyone.",
  ],

  types: {
    countable: {
      description:
        "Used with countable nouns (things you can count individually).",
      adjectives: [
        "many",
        "few",
        "a few",
        "several",
        "numerous",
        "countless",
        "various",
        "both",
        "either",
        "neither",
        "fewer",
      ],
      examples: [
        "Many students attended the class.",
        "A few guests have arrived.",
        "There are several options available.",
        "Countless stars lit up the sky.",
        "Various methods were discussed.",
        "Both solutions are viable.",
        "Fewer people came than expected.",
      ],
    },
    uncountable: {
      description:
        "Used with uncountable nouns (things you cannot count individually).",
      adjectives: [
        "much",
        "little",
        "a little",
        "sufficient",
        "plenty of",
        "adequate",
        "less",
      ],
      examples: [
        "There is little hope left.",
        "She added a little salt to the soup.",
        "We have plenty of time.",
        "He has sufficient knowledge for the task.",
        "Much effort was required.",
        "Less sugar is better for health.",
        "Adequate preparation is essential.",
      ],
    },
    both: {
      description: "Can be used with both countable and uncountable nouns.",
      adjectives: [
        "some",
        "any",
        "enough",
        "no",
        "all",
        "most",
        "a lot of",
        "lots of",
        "more",
        "each",
        "every",
        "none",
        "half",
      ],
      examples: [
        "We need some help. (uncountable)",
        "There are some books on the table. (countable)",
        "Do you have any milk? (uncountable)",
        "Are there any students here? (countable)",
        "We have enough chairs. (countable)",
        "There's enough time. (uncountable)",
        "No children were present. (countable)",
        "No water was available. (uncountable)",
        "Most people agree. (countable)",
        "Most information is accurate. (uncountable)",
      ],
    },
  },

  classificationByDetail: {
    determiners: {
      description:
        "Used directly before nouns as determiners to specify quantity.",
      list: [
        "some",
        "any",
        "many",
        "much",
        "few",
        "little",
        "several",
        "each",
        "every",
        "either",
        "neither",
        "all",
        "most",
        "no",
      ],
    },
    intensifiers: {
      description: "Can strengthen or soften the quantity meaning.",
      list: [
        "very many",
        "so much",
        "too few",
        "far more",
        "only a little",
        "almost no",
        "quite a few",
        "rather many",
        "fairly little",
      ],
    },
    modifiers: {
      description: "Modify or specify the quantitative meaning more precisely.",
      list: [
        "a great deal of",
        "a large number of",
        "a good amount of",
        "a small quantity of",
        "a vast amount of",
        "an enormous number of",
      ],
    },
  },

  advancedUsage: {
    comparative: [
      "There are **fewer** apples than yesterday.",
      "She has **less** experience than he does.",
      "More students enrolled this year.",
      "Most people prefer the new system.",
    ],
    superlative: [
      "He has the **least** money.",
      "This method gives the **most** results.",
      "The fewest errors occurred in group A.",
      "She showed the greatest enthusiasm.",
    ],
    formalAlternatives: [
      { informal: "a lot of", formal: "a large number of / a great deal of" },
      { informal: "lots of", formal: "numerous / considerable" },
      { informal: "tons of", formal: "substantial amounts of" },
      { informal: "loads of", formal: "significant quantities of" },
    ],
    inversionStructures: [
      "Little did she know about the consequences.",
      "Not many people realize the truth.",
      "Seldom have we seen such dedication.",
      "Never has there been more interest.",
    ],
    collocations: [
      "considerable evidence",
      "ample opportunity",
      "sheer quantity",
      "substantial support",
      "minimal effort",
      "maximum capacity",
      "optimal amount",
      "sufficient resources",
    ],
  },

  commonMistakes: [
    {
      mistake: "He has much friends.",
      correction: "He has many friends.",
      explanation:
        "'Much' is for uncountable nouns; 'friends' is countable, so use 'many'.",
    },
    {
      mistake: "There are a little problems.",
      correction: "There are a few problems.",
      explanation:
        "'A little' is for uncountable nouns; 'problems' is countable, so use 'a few'.",
    },
    {
      mistake: "Less students came today.",
      correction: "Fewer students came today.",
      explanation:
        "'Less' is for uncountable nouns; 'students' is countable, so use 'fewer'.",
    },
    {
      mistake: "I have many money.",
      correction: "I have much money.",
      explanation: "'Money' is uncountable, so use 'much' instead of 'many'.",
    },
  ],

  tips: [
    "Use 'many' and 'few' with countable nouns (e.g., books, people, cars).",
    "Use 'much' and 'little' with uncountable nouns (e.g., money, water, information).",
    "Use 'some' in positive statements and offers; 'any' in questions and negatives.",
    "Use 'enough' before a noun or after an adjective (e.g., enough time / smart enough).",
    "Remember: 'fewer' for countable, 'less' for uncountable in comparisons.",
    "'A few' means some (positive); 'few' means not many (negative).",
    "'A little' means some (positive); 'little' means not much (negative).",
  ],

  proficiencyLevels: {
    A1: ["some", "any", "many", "much", "a few", "a little", "all", "no"],
    A2: ["few", "little", "enough", "more", "less", "most", "every"],
    B1: [
      "several",
      "each",
      "both",
      "either",
      "neither",
      "a lot of",
      "lots of",
      "plenty of",
    ],
    B2: [
      "none",
      "various",
      "numerous",
      "considerable",
      "substantial",
      "adequate",
      "sufficient",
    ],
    C1: [
      "a great deal of",
      "a large number of",
      "far too many",
      "ample",
      "scant",
      "minimal",
      "negligible",
    ],
    C2: [
      "sheer quantity",
      "meager amount",
      "copious",
      "innumerable",
      "myriad",
      "modicum",
      "infinitesimal",
    ],
  },

  references: [
    "Cambridge English Grammar in Use (Intermediate & Advanced) - Raymond Murphy",
    "Oxford English Grammar Course (Advanced) - Michael Swan & Catherine Walter",
    "Longman Grammar of Spoken and Written English - Douglas Biber et al.",
    "English Profile Project CEFR Wordlist - Cambridge University Press",
    "A Comprehensive Grammar of the English Language - Randolph Quirk et al.",
  ],

  advancedQuantifiers: {
    academic: [
      "significant",
      "minimal",
      "moderate",
      "predominant",
      "widespread",
      "limited",
      "substantial",
      "considerable",
      "negligible",
      "marginal",
      "optimal",
      "adequate",
    ],
    scientific: [
      "microscopic",
      "macroscopic",
      "abundant",
      "scarce",
      "voluminous",
      "quantifiable",
      "negligible",
      "trace amounts",
      "concentrated",
      "dilute",
      "saturated",
    ],
    philosophical: [
      "innumerable",
      "finite",
      "infinite",
      "boundless",
      "immeasurable",
      "limitless",
      "eternal",
      "temporal",
      "absolute",
      "relative",
    ],
  },

  literaryUsage: {
    poeticQuantifiers: [
      "a trickle of",
      "a torrent of",
      "a flood of",
      "a swarm of",
      "a heap of",
      "a whisper of",
      "an ocean of",
      "a speck of",
      "a shadow of",
      "a breath of",
    ],
    exampleSentences: [
      "A **torrent of** emotions overwhelmed her.",
      "He gave me **a whisper of** a smile.",
      "They vanished into **a sea of** darkness.",
      "**A flood of** memories returned to him.",
    ],
  },

  idiomaticExpressions: {
    list: [
      "loads of work",
      "tons of fun",
      "no end of trouble",
      "a great many people",
      "next to nothing",
      "not a shred of evidence",
      "oodles of money",
      "heaps of time",
    ],
    examples: [
      "She has **loads of** homework tonight.",
      "There's **not a shred of** proof.",
      "We had **tons of** fun at the party.",
      "He has **oodles of** money to spend.",
    ],
  },

  legalTechnicalQuantifiers: {
    formalAdjectives: [
      "minimal",
      "maximum",
      "full",
      "partial",
      "gross",
      "net",
      "residual",
      "aggregate",
      "cumulative",
      "proportional",
      "fractional",
    ],
    examplePhrases: [
      "The **gross** amount payable is $1000.",
      "He was found with **a minimal** amount of contraband.",
      "Only **partial** data was available during the audit.",
      "The **aggregate** total exceeded expectations.",
    ],
  },

  collocationExpansions: {
    combinations: [
      "a substantial amount of evidence",
      "a vast quantity of knowledge",
      "a minimal level of risk",
      "a moderate degree of variation",
      "a high concentration of pollutants",
      "an enormous number of participants",
      "a significant proportion of students",
      "a considerable body of research",
    ],
  },

  contrastiveStructures: {
    examples: [
      "While there was **some** interest, **very few** actually attended.",
      "We expected **plenty**, but **hardly any** showed up.",
      "**Many** applied; **only a handful** were selected.",
      "Despite **numerous** attempts, **little** progress was made.",
    ],
  },

  toneAndStyleImpact: {
    notes: [
      "Using 'a handful of' implies scarcity and casual tone.",
      "Using 'a large number of' is more formal than 'lots of'.",
      "'Virtually no' adds emphasis in academic writing.",
      "'Countless' suggests overwhelming abundance.",
      "'Scant' implies criticism or disappointment.",
    ],
  },

  CEFRVocabularyExtension: {
    C1: [
      "abundant",
      "scarce",
      "ample",
      "modest",
      "marginal",
      "considerable",
      "substantial",
      "negligible",
      "adequate",
      "insufficient",
      "optimal",
    ],
    C2: [
      "infinitesimal",
      "copious",
      "innumerable",
      "myriad",
      "measurable",
      "inestimable",
      "inappreciable",
      "imperceptible",
      "minuscule",
      "astronomical",
      "phenomenal",
    ],
  },

  translationNuances: {
    note: "Một số tính từ định lượng không có bản dịch trực tiếp trong tiếng Việt, cần tùy ngữ cảnh để dịch đúng mức độ định lượng.",
    examples: {
      "a trace of":
        "một chút xíu, rất ít (ví dụ: 'a trace of poison' → 'một chút chất độc')",
      "oodles of": "rất nhiều, vô số (thân mật)",
      "a sliver of": "một lát mỏng, một lượng cực nhỏ",
      scant: "ít ỏi, không đủ",
      ample: "dư thừa, phong phú",
    },
  },

  // Comprehensive A1-C2 breakdown for complete learning progression
  detailedCEFRBreakdown: {
    A1: {
      essentialQuantifiers: [
        "one",
        "two",
        "three",
        "some",
        "any",
        "many",
        "much",
        "a few",
        "a little",
        "all",
        "no",
      ],
      basicDefinitions: {
        some: "một vài, một số (dùng trong câu khẳng định)",
        any: "bất kỳ, nào (dùng trong câu phủ định và nghi vấn)",
        many: "nhiều (với danh từ đếm được)",
        much: "nhiều (với danh từ không đếm được)",
        "a few": "một vài (ít nhưng có)",
        "a little": "một chút (ít nhưng có)",
      },
      simpleExamples: [
        "I have some books.",
        "Do you have any water?",
        "There are many cats.",
        "She drinks much coffee.",
        "He has a few friends.",
        "We need a little time.",
      ],
      commonErrors: [
        {
          error: "I have much books.",
          correction: "I have many books.",
          explanation: "Books are countable, use 'many' not 'much'",
        },
        {
          error: "She drinks many water.",
          correction: "She drinks much water.",
          explanation: "Water is uncountable, use 'much' not 'many'",
        },
      ],
      practicePatterns: [
        "I have + many/much + noun",
        "There are + some/a few + countable nouns",
        "There is + some/a little + uncountable noun",
        "Do you have + any + noun?",
      ],
    },
    A2: {
      expandedQuantifiers: [
        "few",
        "little",
        "enough",
        "more",
        "less",
        "most",
        "every",
        "each",
        "both",
        "all",
      ],
      comparativeStructures: [
        "more than",
        "less than",
        "fewer than",
        "as many as",
        "as much as",
      ],
      negativeQuantifiers: ["no", "none", "nothing", "nobody", "few", "little"],
      contextualUsage: [
        "Few people came to the party. (not many - negative meaning)",
        "A few people came to the party. (some - positive meaning)",
        "Little progress was made. (not much - negative)",
        "A little progress was made. (some - positive)",
      ],
      typicalMistakes: [
        {
          error: "Less students attended.",
          correction: "Fewer students attended.",
          explanation:
            "Students are countable, use 'fewer' with countable nouns",
        },
        {
          error: "I have few time.",
          correction: "I have little time.",
          explanation: "Time is uncountable, use 'little' not 'few'",
        },
      ],
    },
    B1: {
      intermediateQuantifiers: [
        "several",
        "various",
        "numerous",
        "plenty of",
        "lots of",
        "a lot of",
        "a great deal of",
        "a number of",
      ],
      complexStructures: [
        "a great many",
        "a good deal of",
        "quite a few",
        "rather a lot",
        "far too many",
        "way too much",
      ],
      formalInformalDistinctions: [
        {
          formal: "a large number of students",
          informal: "lots of students",
          context: "Academic or professional writing vs. casual conversation",
        },
        {
          formal: "considerable effort",
          informal: "loads of effort",
          context: "Formal reports vs. everyday speech",
        },
      ],
      advancedExamples: [
        "Several participants withdrew from the study.",
        "Various methods were employed in the research.",
        "Numerous complaints have been received.",
        "We have plenty of evidence to support our claim.",
      ],
      nuancedMeanings: {
        several: "more than two but not very many (usually 3-7)",
        various: "different types or kinds",
        numerous: "many, used in more formal contexts",
        "plenty of": "more than enough, abundant",
      },
    },
    B2: {
      sophisticatedQuantifiers: [
        "substantial",
        "considerable",
        "significant",
        "minimal",
        "adequate",
        "sufficient",
        "insufficient",
        "overwhelming",
      ],
      academicUsage: [
        "substantial evidence",
        "considerable research",
        "significant findings",
        "minimal impact",
        "adequate resources",
        "insufficient data",
        "overwhelming support",
      ],
      preciseMeanings: {
        substantial: "large in amount, considerable",
        significant: "important in amount or effect",
        minimal: "very small, least possible",
        overwhelming: "very great in amount",
      },
      stylisiticChoices: [
        {
          quantifier: "considerable",
          tone: "formal, academic",
          usage: "research papers, reports",
        },
        {
          quantifier: "tons of",
          tone: "informal, enthusiastic",
          usage: "casual conversation",
        },
      ],
      complexSentenceStructures: [
        "Despite considerable effort, minimal progress was achieved.",
        "Substantial evidence suggests significant changes are needed.",
        "Although adequate resources were provided, insufficient time remained.",
      ],
    },
    C1: {
      advancedQuantifiers: [
        "abundant",
        "scarce",
        "ample",
        "meager",
        "negligible",
        "marginal",
        "optimal",
        "copious",
        "profuse",
      ],
      academicWritingQuantifiers: [
        "a wealth of information",
        "a dearth of evidence",
        "a paucity of research",
        "an abundance of data",
        "a plethora of options",
        "a multitude of factors",
      ],
      technicalUsage: [
        "negligible amounts",
        "optimal levels",
        "marginal differences",
        "abundant resources",
        "scarce commodities",
        "ample justification",
      ],
      subtleDistinctions: {
        "abundant vs. ample":
          "abundant = naturally plentiful; ample = more than sufficient",
        "scarce vs. rare":
          "scarce = insufficient supply; rare = uncommon occurrence",
        "meager vs. minimal":
          "meager = disappointingly small; minimal = smallest acceptable",
      },
      professionalContexts: [
        "Business: ample opportunities, scarce resources, optimal solutions",
        "Research: negligible correlation, abundant literature, marginal significance",
        "Legal: sufficient evidence, inadequate proof, overwhelming testimony",
      ],
      literaryExpressions: [
        "a torrent of emotions",
        "a deluge of complaints",
        "a trickle of information",
        "a flood of memories",
        "a drought of creativity",
      ],
    },
    C2: {
      expertLevelQuantifiers: [
        "infinitesimal",
        "astronomical",
        "phenomenal",
        "monumental",
        "minuscule",
        "colossal",
        "immeasurable",
      ],
      specialized_terminology: [
        "proportional",
        "exponential",
        "logarithmic",
        "incremental",
        "cumulative",
        "aggregate",
      ],
      philosophical_mathematical: [
        "infinite",
        "finite",
        "boundless",
        "immeasurable",
        "incalculable",
        "indeterminate",
      ],
      literary_rhetorical: [
        "myriad",
        "multitudinous",
        "innumerable",
        "legion",
        "manifold",
        "sundry",
      ],
      archaic_historical: [
        "manifold",
        "sundry",
        "divers",
        "multifarious",
        "numberless",
      ],
      native_level_nuances: {
        myriad: "countless (literary, emphasizes variety)",
        legion: "very many (biblical/classical reference)",
        manifold: "many and varied (formal, academic)",
        sundry: "various miscellaneous (somewhat archaic)",
      },
      masterful_usage_examples: [
        "The myriad complexities of human behavior continue to perplex researchers.",
        "Manifold opportunities await those with the requisite skills.",
        "The infinitesimal differences in measurement proved crucial to the outcome.",
      ],
    },
  },

  // Comprehensive grammar rules for proper usage
  comprehensiveGrammarRules: {
    positionRules: {
      beforeNoun: [
        "many students",
        "much water",
        "several books",
        "few problems",
        "little time",
      ],
      afterNoun: ["students enough", "water enough"],
      predicatePosition: ["The students are many.", "The problems are few."],
      rules: [
        "Most quantitative adjectives come before the noun they modify",
        "'Enough' can come before or after the noun",
        "In predicative position, only some quantifiers are natural",
      ],
    },
    agreementRules: {
      singular: ["much", "little", "a little", "each", "every"],
      plural: ["many", "few", "a few", "several", "both"],
      uncountable: ["much", "little", "a little", "less"],
      exceptions: [
        "'All' can be singular or plural depending on the noun",
        "'None' can take singular or plural verb forms",
        "'Most' agrees with the noun it modifies",
      ],
    },
    combinationRules: {
      allowedCombinations: [
        {
          quantifiers: ["very", "many"],
          example: "very many people",
          explanation: "Intensifier + quantifier combination",
        },
        {
          quantifiers: ["quite", "a few"],
          example: "quite a few students",
          explanation: "Intensifier strengthening the quantifier",
        },
      ],
      forbidden_combinations: [
        {
          incorrect: "much many people",
          correct: "many people",
          reason: "Cannot combine quantifiers for the same noun",
        },
        {
          incorrect: "very much books",
          correct: "very many books",
          reason: "'Much' is for uncountable; books are countable",
        },
      ],
    },
  },

  // Semantic organization for deeper understanding
  semanticCategories: {
    exactness: {
      precise: ["exactly", "precisely", "just", "only", "specifically"],
      approximate: ["about", "around", "roughly", "approximately", "nearly"],
      vague: ["some", "certain", "various", "several"],
    },
    scale: {
      minimal: ["little", "few", "scant", "minimal", "negligible"],
      small: ["a little", "a few", "limited", "modest", "slight"],
      moderate: ["some", "several", "reasonable", "adequate", "sufficient"],
      large: ["many", "much", "numerous", "substantial", "considerable"],
      maximal: ["all", "every", "total", "complete", "entire"],
    },
    subjectivity: {
      objective: ["50%", "half", "quarter", "double", "triple"],
      subjective: ["many", "few", "lots", "tons", "loads"],
      emotional: ["overwhelming", "devastating", "magnificent", "pathetic"],
    },
  },

  // Cross-linguistic insights for Vietnamese learners
  crossLinguisticComparisons: {
    englishSpecific: [
      "much/many distinction (Vietnamese doesn't differentiate)",
      "few/a few meaning difference (Vietnamese uses context)",
      "less/fewer rule (Vietnamese uses same word 'ít hơn')",
    ],
    universalConcepts: [
      "Basic quantity concepts exist in all languages",
      "Approximation vs. precision distinction",
      "Abundance vs. scarcity concepts",
    ],
    vietnameseEquivalents: {
      "many/much": "nhiều",
      "few/little": "ít",
      some: "một số, một vài",
      all: "tất cả",
      none: "không có gì",
    },
    translationChallenges: [
      {
        english: "a few",
        vietnamese: "một vài (mang ý nghĩa tích cực)",
        difficulty: "high",
        notes:
          "Vietnamese learners often confuse with 'few' (negative meaning)",
      },
      {
        english: "much vs many",
        vietnamese: "nhiều (same word for both)",
        difficulty: "high",
        notes:
          "Vietnamese doesn't distinguish countable/uncountable in quantifiers",
      },
    ],
  },

  // Practical application in different contexts
  contextualApplications: {
    academic_writing: {
      recommended: [
        "substantial",
        "considerable",
        "significant",
        "minimal",
        "adequate",
        "a large number of",
        "a great deal of",
        "numerous",
      ],
      avoid: ["lots of", "tons of", "loads of", "heaps of"],
      examples: [
        "Substantial evidence supports this hypothesis.",
        "A considerable number of participants withdrew.",
        "Minimal changes were observed in the control group.",
      ],
    },
    business_communication: {
      formal: [
        "sufficient",
        "adequate",
        "substantial",
        "considerable",
        "optimal",
      ],
      informal: ["plenty of", "lots of", "quite a bit", "a good amount"],
      examples: [
        "We have sufficient resources for this project.",
        "There's plenty of room for improvement.",
      ],
    },
    everyday_conversation: {
      common: ["lots of", "tons of", "loads of", "plenty of", "heaps of"],
      regional: ["oodles of", "lashings of"],
      examples: [
        "I've got tons of work to do.",
        "There are loads of people here.",
      ],
    },
    literary_artistic: {
      poetic: ["myriad", "countless", "infinite", "boundless", "immeasurable"],
      prose: [
        "a wealth of",
        "a multitude of",
        "an abundance of",
        "a paucity of",
      ],
      examples: [
        "Myriad stars illuminated the night sky.",
        "A wealth of knowledge lay before them.",
      ],
    },
  },

  // Teaching and learning guidance
  pedagogicalNotes: {
    teachingSequence: [
      "1. Start with basic countable/uncountable distinction",
      "2. Introduce common quantifiers (some, any, many, much)",
      "3. Add positive/negative meanings (few vs a few)",
      "4. Teach comparative forms (more, less, fewer)",
      "5. Introduce formal alternatives",
      "6. Advanced: idiomatic and literary usage",
    ],
    commonLearnerDifficulties: [
      "Countable vs uncountable noun identification",
      "Less vs fewer distinction",
      "Few vs a few meaning difference",
      "Formal vs informal register appropriate choice",
    ],
    effectiveExplanations: {
      "much vs many":
        "Can you count it? If yes, use 'many'. If no, use 'much'.",
      "few vs a few":
        "'Few' = negative (not enough), 'A few' = positive (some)",
      "less vs fewer":
        "Less for things you measure, fewer for things you count",
    },
    memorization_techniques: [
      "Count/No count → Many/Much",
      "FANBOYS for 'fewer': For And Numbers, Bullets, Objects, You use... Fewer!",
      "A little POSITIVE energy, little NEGATIVE energy",
    ],
    assessment_criteria: [
      "Correct choice based on countable/uncountable",
      "Appropriate register for context",
      "Accurate meaning (positive/negative nuances)",
      "Natural collocation usage",
    ],
  },

  // Historical and etymological information
  historicalDevelopment: {
    etymology: {
      many: "Old English 'manig' - Germanic origin",
      much: "Old English 'micel' - means 'great, large'",
      few: "Old English 'feawe' - Germanic origin",
      several: "Anglo-French 'several' - means 'separate, distinct'",
    },
    evolution: [
      "Old English had more complex quantifier system",
      "Modern English simplified many archaic forms",
      "Influence of French created formal/informal distinctions",
    ],
    modern_changes: [
      "Increasing use of 'loads of', 'tons of' in informal speech",
      "Academic English developing more precise quantifiers",
      "Digital age creating new expressions ('viral amounts')",
    ],
  },

  // Regional and dialectal variations
  dialectalVariations: {
    british_american: [
      {
        british: "quite a few",
        american: "a bunch of",
        notes: "Both mean 'several' but different register",
      },
      {
        british: "lashings of",
        american: "oodles of",
        notes: "Both informal, meaning 'lots of'",
      },
    ],
    regional_differences: [
      {
        region: "American South",
        variations: ["a mess of", "right many", "a whole heap of"],
        examples: ["a mess of fish", "right many people"],
      },
      {
        region: "Irish English",
        variations: ["a power of", "a mort of"],
        examples: ["a power of work", "a mort of trouble"],
      },
    ],
  },

  // Specialized applications
  advancedApplications: {
    research_writing: [
      "statistically significant",
      "negligible correlation",
      "substantial evidence",
      "considerable variation",
      "minimal impact",
      "optimal conditions",
    ],
    technical_documentation: [
      "sufficient memory",
      "adequate bandwidth",
      "minimal requirements",
      "maximum capacity",
      "optimal performance",
      "negligible latency",
    ],
    legal_language: [
      "preponderance of evidence",
      "clear and convincing",
      "beyond reasonable doubt",
      "substantial likelihood",
      "minimal nexus",
      "sufficient basis",
    ],
    medical_terminology: [
      "therapeutic levels",
      "toxic amounts",
      "minimal effective dose",
      "substantial improvement",
      "negligible side effects",
      "optimal dosage",
    ],
    scientific_discourse: [
      "significant correlation",
      "negligible variance",
      "substantial dataset",
      "minimal contamination",
      "optimal conditions",
      "considerable uncertainty",
    ],
  },

  // Comprehensive reference section
  comprehensiveReferences: {
    authoritative_grammars: [
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        year: "1985",
        pages: "253-289, 375-402",
        isbn: "978-0582517349",
        relevance: "Definitive treatment of quantifiers and determiners",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston, Geoffrey K. Pullum",
        year: "2002",
        pages: "373-427",
        isbn: "978-0521431460",
        relevance: "Modern linguistic analysis of quantification",
      },
      {
        title: "Oxford English Grammar",
        author: "Sidney Greenbaum",
        year: "1996",
        pages: "145-178",
        isbn: "978-0198612292",
        relevance: "Clear explanations with extensive examples",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author:
          "Douglas Biber, Stig Johansson, Geoffrey Leech, Susan Conrad, Edward Finegan",
        year: "1999",
        pages: "258-295",
        isbn: "978-0582237254",
        relevance: "Corpus-based analysis of quantifier usage patterns",
      },
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        year: "2019",
        pages: "Units 85-92",
        isbn: "978-1108457651",
        relevance: "Practical exercises and clear explanations for learners",
      },
    ],
    academic_papers: [
      {
        title: "The Semantics and Pragmatics of English Quantifiers",
        authors: ["Edward Keenan", "Dag Westerståhl"],
        journal: "Linguistics and Philosophy",
        year: "1997",
        doi: "10.1023/A:1005373628841",
        summary: "Comprehensive analysis of quantifier semantics in English",
      },
      {
        title: "Quantifier Float and Wh-Movement in English",
        authors: ["Lisa Travis"],
        journal: "Linguistic Inquiry",
        year: "1988",
        doi: "10.1162/ling.1988.19.1.65",
        summary: "Syntactic analysis of quantifier positioning and movement",
      },
    ],
    online_resources: [
      {
        title: "English Profile Project - CEFR Wordlists",
        url: "https://www.englishprofile.org/wordlists",
        description:
          "Official CEFR level classifications for English vocabulary",
        credibility: "Cambridge University Press - highly authoritative",
      },
      {
        title: "Corpus of Contemporary American English (COCA)",
        url: "https://www.english-corpora.org/coca/",
        description: "Large corpus showing real usage patterns of quantifiers",
        credibility: "Academic corpus - very reliable for usage patterns",
      },
      {
        title: "Cambridge Dictionary Online",
        url: "https://dictionary.cambridge.org/",
        description: "Comprehensive definitions and usage examples",
        credibility: "Cambridge University Press - highly reliable",
      },
      {
        title: "Oxford Learner's Dictionaries",
        url: "https://www.oxfordlearnersdictionaries.com/",
        description: "Learner-focused definitions with CEFR levels",
        credibility: "Oxford University Press - very reliable",
      },
      {
        title: "Grammarly Blog - Quantifiers Guide",
        url: "https://www.grammarly.com/blog/quantifiers/",
        description: "Practical guide to quantifier usage",
        credibility:
          "Professional editing service - good for practical application",
      },
    ],
    dictionaries: [
      {
        name: "Oxford English Dictionary",
        type: "Historical dictionary",
        specific_relevance:
          "Etymology and historical development of quantifiers",
      },
      {
        name: "Merriam-Webster Dictionary",
        type: "American English",
        specific_relevance: "American usage patterns and pronunciations",
      },
      {
        name: "Collins COBUILD Dictionary",
        type: "Learner's dictionary",
        specific_relevance: "Real usage examples from corpus data",
      },
    ],
    language_corpora: [
      {
        name: "British National Corpus (BNC)",
        description: "100-million word corpus of British English",
        access: "Free online access at https://www.english-corpora.org/bnc/",
      },
      {
        name: "Google Books Ngram Viewer",
        description: "Historical usage trends in published books",
        access: "Free at https://books.google.com/ngrams",
      },
    ],
  },
};

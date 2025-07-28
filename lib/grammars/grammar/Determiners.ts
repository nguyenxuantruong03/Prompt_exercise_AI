import { DeterminersType } from "@/types/grammars/grammar/Determiners";

export const DeterminersData:DeterminersType = {
  // --- Comprehensive Determiners Reference ---

  // Definition of Determiners
  determinerDefinition: {
    basicDefinition:
      "Determiners are words placed in front of nouns to indicate quantity, ownership, specificity, or to introduce the noun. They help specify which or how many people or things we are talking about.",
    grammaticalFunction:
      "Determiners function as modifiers that specify or identify nouns, indicating definiteness, quantity, possession, or other characteristics.",
    keyCharacteristics: [
      "Come before nouns in noun phrases",
      "Specify or identify the noun",
      "Indicate quantity, possession, or definiteness",
      "Cannot be used together (with some exceptions)",
      "Essential for proper noun phrase structure",
    ],
    morphologicalFeatures: {
      simple: "Single word determiners (the, a, my, this, some)",
      compound: "Multi-word determiners (a lot of, plenty of, a number of)",
      phrasal:
        "Phrase-based determiners (all of the, some of these, most of those)",
    },
    positionInNounPhrase: {
      primary: "First position in noun phrase (before adjectives)",
      secondary: "Can combine with other determiners in specific patterns",
      postDeterminer: "Some determiners can follow primary determiners",
    },
    academicReferences: [
      {
        title: "Cambridge Grammar of the English Language",
        authors: "Huddleston, R. & Pullum, G. K.",
        year: "2002",
        publisher: "Cambridge University Press",
        description: "Comprehensive analysis of determiners in English grammar",
      },
      {
        title: "Oxford Modern English Grammar",
        author: "Aarts, B.",
        year: "2011",
        publisher: "Oxford University Press",
        description:
          "Modern perspective on determiner usage and classification",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        authors: "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J.",
        year: "1985",
        publisher: "Longman",
        description:
          "Classic reference for determiner categories and functions",
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        authors: "Celce-Murcia, M. & Larsen-Freeman, D.",
        year: "2015",
        publisher: "National Geographic Learning",
        description: "Pedagogical approach to teaching determiners",
      },
      {
        title: "English Grammar: A University Course",
        authors: "Downing, A. & Locke, P.",
        year: "2006",
        publisher: "Routledge",
        description: "University-level treatment of determiner systems",
      },
    ],
    onlineResources: [
      {
        title: "Cambridge Dictionary - Determiners",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/determiners",
        description: "Comprehensive guide to determiner usage with examples",
      },
      {
        title: "Oxford Learner's Dictionaries - Determiners",
        url: "https://www.oxfordlearnersdictionaries.com/definition/english/determiner",
        description: "Clear explanations for English language learners",
      },
      {
        title: "BBC Learning English - Determiners",
        url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-15/session-1",
        description: "Interactive lessons on determiner usage",
      },
      {
        title: "Grammarly - What Are Determiners?",
        url: "https://www.grammarly.com/blog/determiners/",
        description: "Modern guide to determiners with practical examples",
      },
      {
        title: "English Grammar Revolution - Determiners",
        url: "https://www.english-grammar-revolution.com/determiners.html",
        description: "Visual diagrams and interactive exercises",
      },
    ],
  },

  // A1 Level - Basic Determiners (Beginner)
  A1: {
    level: "Beginner",
    cefrDescription: "Can use basic determiners in simple contexts",
    learningObjectives: [
      "Identify and use basic articles (a, an, the)",
      "Use demonstratives for basic pointing (this, that)",
      "Express possession with basic possessive determiners",
      "Count with basic numbers",
    ],
    basicArticles: {
      definition:
        "Essential articles for basic noun identification and introduction",
      grammaticalRule:
        "Articles specify whether a noun is definite (specific) or indefinite (general)",
      examples: ["a", "an", "the"],
      detailedUsage: {
        indefiniteA: {
          usage: "Before consonant sounds",
          examples: ["a cat", "a house", "a university (consonant sound /ju/)"],
          frequency: "Very high",
        },
        indefiniteAn: {
          usage: "Before vowel sounds",
          examples: ["an apple", "an hour (silent h)", "an honest person"],
          frequency: "Very high",
        },
        definiteThe: {
          usage: "Before specific or previously mentioned nouns",
          examples: [
            "the sun",
            "the book (specific)",
            "the cat (mentioned before)",
          ],
          frequency: "Extremely high",
        },
      },
      commonMistakes: [
        "Using 'a' before vowel sounds (*a apple → an apple)",
        "Using 'an' before consonant sounds (*an cat → a cat)",
        "Omitting 'the' with specific nouns (*Sun is bright → The sun is bright)",
      ],
      practicePatterns: [
        "I have ___ cat (a)",
        "I ate ___ apple (an)",
        "___ sun is bright (the)",
      ],
    },
    basicDemonstratives: {
      definition:
        "Words that point to specific objects in relation to speaker distance",
      spatialRelationship:
        "Indicate proximity (near/far) and number (singular/plural)",
      examples: ["this", "that", "these", "those"],
      detailedUsage: {
        thisSingularNear: {
          form: "this",
          usage: "Singular noun close to speaker",
          examples: ["this book", "this chair", "this moment"],
          frequency: "Very high",
        },
        thatSingularFar: {
          form: "that",
          usage: "Singular noun far from speaker",
          examples: ["that car", "that building", "that time"],
          frequency: "Very high",
        },
        thesePluralNear: {
          form: "these",
          usage: "Plural nouns close to speaker",
          examples: ["these books", "these chairs", "these days"],
          frequency: "High",
        },
        thosePluralFar: {
          form: "those",
          usage: "Plural nouns far from speaker",
          examples: ["those cars", "those buildings", "those times"],
          frequency: "High",
        },
      },
      commonMistakes: [
        "Using 'this' with plural nouns (*this books → these books)",
        "Using 'these' with singular nouns (*these book → this book)",
      ],
    },
    basicPossessives: {
      definition: "Determiners showing ownership or relationship",
      grammaticalFunction: "Indicate who or what something belongs to",
      examples: ["my", "your", "his", "her", "its", "our", "their"],
      detailedUsage: {
        firstPersonSingular: {
          form: "my",
          usage: "Speaker's possession",
          examples: ["my house", "my family", "my idea"],
          frequency: "Extremely high",
        },
        secondPerson: {
          form: "your",
          usage: "Listener's possession",
          examples: ["your car", "your opinion", "your time"],
          frequency: "Extremely high",
        },
        thirdPersonSingularMasculine: {
          form: "his",
          usage: "Male person's possession",
          examples: ["his book", "his job", "his family"],
          frequency: "Very high",
        },
        thirdPersonSingularFeminine: {
          form: "her",
          usage: "Female person's possession",
          examples: ["her phone", "her work", "her children"],
          frequency: "Very high",
        },
        thirdPersonSingularNeuter: {
          form: "its",
          usage: "Non-human possession",
          examples: ["its color", "its purpose", "its meaning"],
          frequency: "Medium",
        },
        firstPersonPlural: {
          form: "our",
          usage: "Speaker and others' possession",
          examples: ["our school", "our country", "our project"],
          frequency: "Very high",
        },
        thirdPersonPlural: {
          form: "their",
          usage: "Multiple people's possession",
          examples: ["their house", "their ideas", "their culture"],
          frequency: "Very high",
        },
      },
      commonMistakes: [
        "Confusing 'its' and 'it's' (possessive vs. contraction)",
        "Using 'his' for inanimate objects (*the car and his engine → the car and its engine)",
      ],
    },
    basicNumbers: {
      definition: "Cardinal numbers used as determiners for counting",
      grammaticalFunction: "Specify exact quantity",
      examples: [
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
      detailedUsage: {
        cardinalNumbers: {
          usage: "Express exact quantity",
          examples: [
            "one sister",
            "two brothers",
            "three books",
            "four friends",
          ],
          frequency: "Very high",
        },
        zeroArticle: {
          usage: "No determiner with specific numbers",
          examples: ["Five people came", "Three cats are sleeping"],
          note: "Numbers replace articles",
        },
      },
      commonMistakes: [
        "Using articles with numbers (*a three books → three books)",
        "Incorrect number-noun agreement (*two book → two books)",
      ],
    },
  },

  // A2 Level - Elementary Determiners
  A2: {
    level: "Elementary",
    cefrDescription: "Can use a wider range of determiners with some accuracy",
    learningObjectives: [
      "Use articles with different types of nouns (countable/uncountable)",
      "Use basic quantifiers for amounts",
      "Use ordinal numbers for sequencing",
      "Ask questions with interrogative determiners",
    ],
    expandedArticles: {
      definition:
        "Extended article usage including zero article and special cases",
      advancedRules: {
        zeroArticle: {
          definition: "No article used in specific contexts",
          contexts: [
            "General plural nouns: 'Books are important'",
            "Uncountable nouns: 'Water is essential'",
            "Proper nouns: 'London is beautiful'",
            "Abstract concepts: 'Love is powerful'",
            "Languages: 'I speak English'",
            "Sports: 'I play football'",
            "Meals: 'I have breakfast'",
          ],
          examples: [
            "I go to school",
            "I work in hospital",
            "I study at university",
          ],
        },
        definiteness: {
          specificReference:
            "Use 'the' when both speaker and listener know which specific item",
          uniqueItems:
            "Use 'the' with unique items: the sun, the moon, the earth",
          secondMention: "Use 'the' when mentioning something again",
        },
      },
      commonMistakes: [
        "Using 'the' with general statements (*The life is hard → Life is hard)",
        "Omitting 'the' with specific references (*I saw movie → I saw the movie)",
      ],
    },
    basicQuantifiers: {
      definition:
        "Words that express amount, quantity, or degree without specifying exact numbers",
      countabilityDistinction: {
        countable: {
          examples: ["many", "few", "a few", "several", "a number of"],
          usage: "Used with nouns you can count",
          note: "Take plural verbs",
        },
        uncountable: {
          examples: ["much", "little", "a little", "a great deal of"],
          usage: "Used with nouns you cannot count",
          note: "Take singular verbs",
        },
        both: {
          examples: ["some", "any", "a lot of", "lots of", "plenty of"],
          usage: "Used with both countable and uncountable nouns",
        },
      },
      detailedUsage: {
        some: {
          usage: "Affirmative sentences, offers, requests",
          examples: ["I have some money", "Would you like some tea?"],
          frequency: "Very high",
        },
        any: {
          usage: "Negative sentences and questions",
          examples: ["I don't have any money", "Do you have any questions?"],
          frequency: "Very high",
        },
        many: {
          usage: "Questions and negatives with countable nouns",
          examples: ["How many books?", "Not many people came"],
          frequency: "High",
        },
        much: {
          usage: "Questions and negatives with uncountable nouns",
          examples: ["How much time?", "Not much water left"],
          frequency: "High",
        },
      },
      commonMistakes: [
        "Using 'much' with countable nouns (*much books → many books)",
        "Using 'many' with uncountable nouns (*many water → much water)",
      ],
    },
    ordinalNumbers: {
      definition: "Numbers indicating position, order, or sequence",
      formation: {
        regular:
          "Most add -th: fourth, fifth, sixth, seventh, eighth, ninth, tenth",
        irregular: "Special forms: first, second, third",
        spelling: "Special spelling: fifth (not fiveth), ninth (not nineth)",
      },
      examples: [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "tenth",
        "twentieth",
      ],
      usage: {
        withThe:
          "Usually preceded by 'the': the first time, the second chapter",
        sequencing:
          "Express order: First, I wake up. Second, I have breakfast.",
        dates: "In dates: March 3rd (third), May 21st (twenty-first)",
      },
      commonMistakes: [
        "Omitting 'the' with ordinals (*first time → the first time)",
        "Incorrect formation (*threeth → third)",
      ],
    },
    interrogativeDeterminers: {
      definition: "Determiners used in questions to ask about specific aspects",
      examples: ["what", "which", "whose"],
      detailedUsage: {
        what: {
          usage: "General questions about identity or type",
          examples: [
            "What time is it?",
            "What color do you like?",
            "What kind of music?",
          ],
          frequency: "Very high",
        },
        which: {
          usage: "Choice between limited options",
          examples: ["Which book do you prefer?", "Which way should we go?"],
          frequency: "High",
          note: "Implies a specific set of choices",
        },
        whose: {
          usage: "Questions about possession",
          examples: ["Whose book is this?", "Whose car are we taking?"],
          frequency: "Medium",
        },
      },
      commonMistakes: [
        "Confusing 'what' and 'which' (*What book do you want? → Which book do you want? [when there are specific options])",
        "Confusing 'whose' and 'who's' (possessive vs. contraction)",
      ],
    },
  },

  // B1 Level - Intermediate Determiners
  B1: {
    level: "Intermediate",
    cefrDescription:
      "Can use various determiners accurately in most situations",
    learningObjectives: [
      "Use complex quantifiers for precise expression",
      "Use distributive determiners correctly",
      "Use partitive determiners for portions",
      "Use comparative determiners for comparisons",
    ],
    advancedQuantifiers: {
      definition:
        "Sophisticated quantifiers for precise and nuanced expression of quantity",
      examples: [
        "several",
        "enough",
        "plenty of",
        "a number of",
        "a couple of",
        "a few",
        "a little",
      ],
      detailedUsage: {
        several: {
          meaning: "More than two but not many",
          usage: "With countable plural nouns",
          examples: ["several books", "several people", "several times"],
          register: "Neutral to formal",
          frequency: "High",
        },
        enough: {
          meaning: "Sufficient quantity",
          usage: "With both countable and uncountable nouns",
          examples: ["enough time", "enough books", "enough money"],
          position: "Can come after noun: time enough",
          frequency: "Very high",
        },
        plentyOf: {
          meaning: "More than enough, abundant",
          usage: "With both countable and uncountable nouns",
          examples: ["plenty of time", "plenty of opportunities"],
          register: "Informal to neutral",
          frequency: "High",
        },
        aNumberOf: {
          meaning: "Some, several (formal)",
          usage: "With countable plural nouns",
          examples: ["a number of issues", "a number of participants"],
          register: "Formal",
          frequency: "Medium",
        },
        aCoupleOf: {
          meaning: "Two or a few",
          usage: "With countable plural nouns",
          examples: ["a couple of minutes", "a couple of friends"],
          register: "Informal",
          frequency: "High",
        },
      },
    },
    distributiveDeterminers: {
      definition:
        "Determiners that refer to individual members of a group or distribution",
      examples: ["each", "every", "either", "neither"],
      detailedUsage: {
        each: {
          meaning: "Individual members considered separately",
          usage: "With singular countable nouns",
          examples: ["each student", "each day", "each of the books"],
          emphasis: "Individual focus",
          frequency: "High",
        },
        every: {
          meaning: "All members of a group without exception",
          usage: "With singular countable nouns",
          examples: ["every student", "every day", "every single one"],
          emphasis: "Collective focus",
          frequency: "Very high",
        },
        either: {
          meaning: "One or the other of two",
          usage: "With singular nouns in choice contexts",
          examples: ["either option", "either way", "either book"],
          frequency: "Medium",
        },
        neither: {
          meaning: "Not one and not the other of two",
          usage: "With singular nouns in negative contexts",
          examples: ["neither option", "neither answer", "neither book"],
          frequency: "Medium",
        },
      },
      commonMistakes: [
        "Using plural verbs with 'each' (*each of them are → each of them is)",
        "Using plural verbs with 'every' (*every student were → every student was)",
      ],
    },
    partitiveDeterminers: {
      definition:
        "Determiners that indicate parts, portions, or fractions of a whole",
      examples: [
        "some of",
        "most of",
        "all of",
        "none of",
        "half of",
        "part of",
      ],
      detailedUsage: {
        someOf: {
          usage: "Partial quantity from a specific group",
          examples: [
            "some of the students",
            "some of these books",
            "some of my friends",
          ],
          frequency: "Very high",
        },
        mostOf: {
          usage: "Majority portion from a specific group",
          examples: ["most of the people", "most of the work", "most of these"],
          frequency: "High",
        },
        allOf: {
          usage: "Complete quantity from a specific group",
          examples: ["all of the money", "all of these books", "all of them"],
          frequency: "High",
        },
        noneOf: {
          usage: "Zero quantity from a specific group",
          examples: [
            "none of the students",
            "none of this work",
            "none of them",
          ],
          frequency: "Medium",
        },
      },
      grammaticalNote:
        "Require 'of' when followed by specific references (the, these, my, etc.)",
    },
    comparativeDeterminers: {
      definition: "Determiners used in comparative and superlative contexts",
      examples: ["more", "less", "fewer", "most", "least", "fewest"],
      detailedUsage: {
        more: {
          usage: "Increased quantity (comparative)",
          examples: ["more time", "more books", "more money"],
          frequency: "Very high",
        },
        less: {
          usage: "Decreased quantity with uncountable nouns",
          examples: ["less time", "less money", "less water"],
          frequency: "High",
        },
        fewer: {
          usage: "Decreased quantity with countable nouns",
          examples: ["fewer books", "fewer people", "fewer problems"],
          frequency: "Medium",
        },
        most: {
          usage: "Maximum quantity (superlative)",
          examples: ["most people", "most of the time", "most books"],
          frequency: "Very high",
        },
      },
      commonMistakes: [
        "Using 'less' with countable nouns (*less books → fewer books)",
        "Using 'fewer' with uncountable nouns (*fewer water → less water)",
      ],
    },
  },

  // B2 Level - Upper Intermediate Determiners
  B2: {
    level: "Upper Intermediate",
    cefrDescription: "Can use sophisticated determiners for nuanced expression",
    learningObjectives: [
      "Use complex quantifiers for academic contexts",
      "Use post-determiners correctly",
      "Express fractions and proportions",
      "Use indefinite determiners appropriately",
    ],
    complexQuantifiers: {
      definition:
        "Sophisticated quantifiers for formal and academic expression",
      examples: [
        "a great deal of",
        "a considerable amount of",
        "a substantial number of",
        "a significant proportion of",
        "a vast majority of",
        "a minority of",
      ],
      detailedUsage: {
        aGreatDealOf: {
          meaning: "Large amount",
          usage: "With uncountable nouns (formal)",
          examples: ["a great deal of effort", "a great deal of research"],
          register: "Formal",
          frequency: "Medium",
        },
        aConsiderableAmountOf: {
          meaning: "Notable, significant amount",
          usage: "With uncountable nouns (academic)",
          examples: [
            "a considerable amount of time",
            "a considerable amount of data",
          ],
          register: "Academic/Formal",
          frequency: "Low",
        },
        aSubstantialNumberOf: {
          meaning: "Large number",
          usage: "With countable plural nouns (formal)",
          examples: [
            "a substantial number of participants",
            "a substantial number of cases",
          ],
          register: "Academic/Formal",
          frequency: "Low",
        },
        aSignificantProportionOf: {
          meaning: "Important fraction of a whole",
          usage: "In academic and statistical contexts",
          examples: [
            "a significant proportion of students",
            "a significant proportion of data",
          ],
          register: "Academic",
          frequency: "Low",
        },
      },
    },
    postDeterminers: {
      definition: "Determiners that follow primary determiners in noun phrases",
      examples: ["first", "second", "next", "last", "other", "same", "only"],
      detailedUsage: {
        ordinalPostDeterminers: {
          examples: [
            "the first time",
            "my second attempt",
            "our third meeting",
          ],
          position: "After primary determiner, before adjectives",
        },
        sequentialPostDeterminers: {
          examples: ["the next day", "the last chance", "the same problem"],
          usage: "Indicate sequence or repetition",
        },
        exclusivePostDeterminers: {
          examples: ["the only way", "my only choice", "their only option"],
          usage: "Indicate exclusivity or uniqueness",
        },
      },
      orderRule: "Primary determiner + Post-determiner + Adjective + Noun",
    },
    fractionalDeterminers: {
      definition:
        "Determiners expressing mathematical fractions and proportions",
      examples: [
        "half",
        "quarter",
        "third",
        "two-thirds",
        "three-quarters",
        "one-fifth",
      ],
      detailedUsage: {
        simplefractions: {
          examples: [
            "half the students",
            "a quarter of the money",
            "a third of the time",
          ],
          usage: "Express simple mathematical relationships",
        },
        complexFractions: {
          examples: [
            "two-thirds of the work",
            "three-quarters of the population",
          ],
          usage: "Express more precise proportions",
        },
        withOfStructure: {
          examples: ["half of the cake", "a quarter of the budget"],
          rule: "Use 'of' when followed by specific reference",
        },
      },
    },
    indefiniteDeterminers: {
      definition: "Determiners referring to unspecified or unknown quantities",
      examples: [
        "certain",
        "various",
        "different",
        "several",
        "numerous",
        "multiple",
      ],
      detailedUsage: {
        certain: {
          meaning: "Some specific but unidentified",
          examples: [
            "certain people",
            "certain aspects",
            "certain circumstances",
          ],
          register: "Formal",
        },
        various: {
          meaning: "Different kinds of",
          examples: [
            "various options",
            "various approaches",
            "various reasons",
          ],
          register: "Neutral to formal",
        },
        numerous: {
          meaning: "Many (formal)",
          examples: [
            "numerous studies",
            "numerous examples",
            "numerous occasions",
          ],
          register: "Formal/Academic",
        },
      },
    },
  },

  // C1 Level - Advanced Determiners
  C1: {
    level: "Advanced",
    cefrDescription:
      "Can use highly sophisticated determiners for academic and professional contexts",
    learningObjectives: [
      "Master sophisticated quantifiers for academic writing",
      "Use formal determiners in professional contexts",
      "Use specialized determiners for technical writing",
      "Demonstrate nuanced understanding of determiner register",
    ],
    sophisticatedQuantifiers: {
      definition:
        "Highly sophisticated quantifiers for academic and formal contexts",
      examples: [
        "a plethora of",
        "a myriad of",
        "an abundance of",
        "a scarcity of",
        "a dearth of",
        "a surplus of",
        "a multitude of",
        "a paucity of",
      ],
      detailedUsage: {
        aPlethoraOf: {
          meaning: "Excessive amount, overabundance",
          usage: "Often with slight negative connotation",
          examples: ["a plethora of options", "a plethora of regulations"],
          register: "Formal/Literary",
          frequency: "Very low",
        },
        aMyriadOf: {
          meaning: "Countless number, vast variety",
          usage: "Emphasizes variety and complexity",
          examples: ["a myriad of possibilities", "a myriad of factors"],
          register: "Formal/Academic",
          frequency: "Low",
        },
        anAbundanceOf: {
          meaning: "Large quantity, plenty",
          usage: "Positive connotation of plenty",
          examples: ["an abundance of evidence", "an abundance of resources"],
          register: "Formal",
          frequency: "Low",
        },
        aScarcityOf: {
          meaning: "Shortage, insufficient amount",
          usage: "Emphasizes lack or shortage",
          examples: [
            "a scarcity of resources",
            "a scarcity of qualified candidates",
          ],
          register: "Formal/Academic",
          frequency: "Low",
        },
        aDearthOf: {
          meaning: "Severe shortage, lack",
          usage: "Stronger than scarcity",
          examples: ["a dearth of creativity", "a dearth of leadership"],
          register: "Formal/Literary",
          frequency: "Very low",
        },
      },
    },
    academicDeterminers: {
      definition: "Determiners commonly used in academic and scholarly writing",
      examples: [
        "the majority of",
        "a significant proportion of",
        "a substantial number of",
        "the remainder of",
        "the bulk of",
        "the entirety of",
        "the totality of",
      ],
      detailedUsage: {
        theMajorityOf: {
          meaning: "More than half, most",
          usage: "Statistical and research contexts",
          examples: ["the majority of participants", "the majority of studies"],
          register: "Academic/Formal",
          frequency: "Medium",
        },
        theRemainderOf: {
          meaning: "What is left, the rest",
          usage: "Academic and technical writing",
          examples: [
            "the remainder of the data",
            "the remainder of the sample",
          ],
          register: "Formal/Academic",
          frequency: "Low",
        },
        theBulkOf: {
          meaning: "The largest part, most",
          usage: "Emphasizes the main portion",
          examples: ["the bulk of the evidence", "the bulk of the work"],
          register: "Formal",
          frequency: "Medium",
        },
      },
    },
    formalDeterminers: {
      definition:
        "Formal determiners used in professional and official contexts",
      examples: [
        "the aforementioned",
        "the aforesaid",
        "the latter",
        "the former",
        "the subsequent",
        "the preceding",
        "the foregoing",
      ],
      detailedUsage: {
        theAforementioned: {
          meaning: "Previously mentioned",
          usage: "Legal and formal documents",
          examples: [
            "the aforementioned study",
            "the aforementioned agreement",
          ],
          register: "Very formal/Legal",
          frequency: "Very low",
        },
        theLatter: {
          meaning: "The second of two mentioned items",
          usage: "Academic and formal writing",
          examples: ["the latter approach", "the latter option"],
          register: "Formal/Academic",
          frequency: "Medium",
        },
        theFormer: {
          meaning: "The first of two mentioned items",
          usage: "Academic and formal writing",
          examples: ["the former method", "the former president"],
          register: "Formal/Academic",
          frequency: "Medium",
        },
      },
    },
    specializedDeterminers: {
      definition:
        "Determiners used in specific professional or technical contexts",
      examples: [
        "the respective",
        "the corresponding",
        "the equivalent",
        "the comparable",
        "the analogous",
        "the parallel",
        "the concomitant",
      ],
      detailedUsage: {
        theRespective: {
          meaning: "Belonging to each separately",
          usage: "Technical and academic contexts",
          examples: ["the respective departments", "the respective authors"],
          register: "Formal/Technical",
          frequency: "Low",
        },
        theCorresponding: {
          meaning: "Matching, related",
          usage: "Technical and academic writing",
          examples: ["the corresponding data", "the corresponding values"],
          register: "Technical/Academic",
          frequency: "Medium",
        },
      },
    },
  },

  // C2 Level - Mastery Determiners
  C2: {
    level: "Mastery",
    cefrDescription:
      "Can use the full range of determiners with native-like precision and stylistic awareness",
    learningObjectives: [
      "Master rare and archaic determiners",
      "Use domain-specific determiners appropriately",
      "Demonstrate stylistic sophistication",
      "Show complete contextual mastery",
    ],
    rareAndArchaicDeterminers: {
      definition: "Extremely rare, archaic, or highly specialized determiners",
      examples: [
        "the erstwhile",
        "the onetime",
        "the quondam",
        "the whilom",
        "divers",
        "sundry",
        "manifold",
      ],
      detailedUsage: {
        theErstwhile: {
          meaning: "Former, previous",
          usage: "Literary and historical contexts",
          examples: ["the erstwhile champion", "the erstwhile empire"],
          register: "Literary/Archaic",
          frequency: "Extremely low",
        },
        divers: {
          meaning: "Several, various (archaic)",
          usage: "Historical and literary texts",
          examples: ["divers reasons", "divers opinions"],
          register: "Archaic/Literary",
          frequency: "Extremely low",
        },
        sundry: {
          meaning: "Various, miscellaneous",
          usage: "Formal and literary contexts",
          examples: ["sundry items", "sundry matters"],
          register: "Formal/Literary",
          frequency: "Very low",
        },
      },
    },
    domainSpecificDeterminers: {
      definition:
        "Highly specialized determiners for specific professional domains",
      legal: {
        examples: [
          "the aforesaid",
          "the aforementioned",
          "the heretofore",
          "the hereinafter",
        ],
        usage: "Legal documents and contracts",
      },
      medical: {
        examples: ["the ipsilateral", "the contralateral", "the homolateral"],
        usage: "Medical and anatomical contexts",
      },
      scientific: {
        examples: ["the concomitant", "the concurrent", "the coeval"],
        usage: "Scientific research and publications",
      },
      business: {
        examples: ["the prospective", "the putative", "the purported"],
        usage: "Business and financial contexts",
      },
    },
    stylisticDeterminers: {
      definition:
        "Determiners chosen for specific stylistic and rhetorical effects",
      emphatic: {
        examples: ["the very", "the sheer", "the utter", "the absolute"],
        usage: "For emphasis and intensification",
      },
      euphemistic: {
        examples: ["certain", "particular", "specific"],
        usage: "For diplomatic or tactful expression",
      },
      dramatic: {
        examples: ["this very", "that selfsame", "the aforementioned"],
        usage: "For dramatic or literary effect",
      },
    },
    contextualMastery: {
      definition:
        "Complete mastery of determiner usage across all contexts and registers",
      formalWriting:
        "Precise, sophisticated determiners for academic and professional contexts",
      creativeWriting:
        "Expressive, nuanced determiners for literary and artistic expression",
      casualSpeech:
        "Natural, conversational determiners for everyday communication",
      technicalWriting:
        "Specific, accurate determiners for specialized documentation",
    },
  },

  // Original Determiners Section (Preserved)
  Determiners: {
    types: {
      articles: {
        description: "Xác định danh từ là xác định hay không xác định",
        examples: {
          definite: ["the"],
          indefinite: ["a", "an"],
        },
        sentences: [
          "I saw **a** cat.",
          "She opened **the** window.",
          "He ate **an** apple.",
        ],
      },
      demonstratives: {
        description: "Chỉ ra đối tượng cụ thể gần/xa",
        examples: ["this", "that", "these", "those"],
        sentences: [
          "**This** book is interesting.",
          "**Those** people are my friends.",
        ],
      },
      possessives: {
        description: "Chỉ sự sở hữu",
        examples: ["my", "your", "his", "her", "its", "our", "their"],
        sentences: [
          "**My** house is near the park.",
          "Is this **your** phone?",
        ],
      },
      quantifiers: {
        description: "Chỉ số lượng hoặc mức độ",
        examples: [
          "some",
          "any",
          "many",
          "much",
          "a lot of",
          "few",
          "little",
          "several",
          "enough",
          "each",
          "every",
          "all",
          "both",
          "neither",
          "either",
        ],
        sentences: [
          "There are **many** books on the shelf.",
          "I don’t have **any** money.",
          "**Each** student received a gift.",
        ],
      },
      distributives: {
        description: "Chỉ phân phối – từng người, từng vật",
        examples: ["each", "every", "either", "neither"],
        sentences: [
          "**Each** child got a balloon.",
          "**Neither** answer is correct.",
        ],
      },
      interrogative: {
        description: "Dùng trong câu hỏi",
        examples: ["which", "what", "whose"],
        sentences: [
          "**Which** color do you prefer?",
          "**Whose** jacket is this?",
        ],
      },
      numerals: {
        description: "Chỉ số lượng cụ thể",
        examples: ["one", "two", "three", "first", "second", "third"],
        sentences: [
          "I have **two** sisters.",
          "She lives on the **third** floor.",
        ],
      },
    },
    usage: [
      {
        type: "Đặt trước danh từ để làm rõ nghĩa",
        example: "**This** car is fast.",
      },
      {
        type: "Có thể đi trước tính từ: determiner + adjective + noun",
        example: "**My old** friend came to visit.",
      },
      {
        type: "Không dùng 2 từ hạn định chính cùng nhau (trừ một số trường hợp đặc biệt)",
        example: "✅ **My book** ❌ **The my book**",
      },
    ],
    recognition: [
      "Thường đứng đầu cụm danh từ.",
      "Có thể xác định được người/vật cụ thể hay không (the vs a/an).",
      "Thường đi cùng danh từ số ít/số nhiều/phổ biến hoặc không đếm được.",
      "Một số determiner có thể dùng như đại từ (this, that, some...)",
    ],
    examples: {
      articles: ["**A** dog is barking.", "**The** sun is bright today."],
      demonstratives: ["**These** shoes are expensive."],
      possessives: ["**Our** school is modern."],
      quantifiers: [
        "There are **few** people here.",
        "He drank **a lot of** water.",
      ],
      distributives: [
        "**Each** member must sign.",
        "**Neither** option is good.",
      ],
      interrogative: ["**What** time is it?", "**Whose** car is parked there?"],
      numerals: [
        "She read **three** books.",
        "He finished **first** in the race.",
      ],
    },
    notes: [
      "‘A’ dùng trước danh từ bắt đầu bằng phụ âm, ‘an’ dùng trước nguyên âm: **a cat**, **an apple**.",
      "‘The’ dùng khi danh từ đã được xác định hoặc đã nhắc đến.",
      "Không dùng ‘some’ hoặc ‘any’ với danh từ số ít đếm được: ❌ some book → ✅ a book.",
      "Không dùng nhiều hơn một từ hạn định chính trong cùng một cụm danh từ: ❌ the my friend.",
      "Một số từ có thể là quantifiers lẫn determiners: **all**, **some**, **most**.",
    ],
  },

  // Advanced Determiner Patterns and Constructions
  advancedDeterminerPatterns: {
    determinerFormation: {
      definition: "How determiners are formed and categorized.",
      simple: {
        definition: "Single word determiners",
        examples: [
          "the",
          "a",
          "an",
          "my",
          "this",
          "that",
          "some",
          "any",
          "many",
          "much",
        ],
      },
      compound: {
        definition: "Multi-word determiners",
        examples: [
          "a lot of",
          "plenty of",
          "a number of",
          "a couple of",
          "a great deal of",
        ],
      },
      phrasal: {
        definition: "Phrase-based determiners",
        examples: [
          "all of the",
          "some of these",
          "most of those",
          "half of the",
          "part of the",
        ],
      },
    },
    determinerOrder: {
      definition: "The order of determiners in noun phrases.",
      primaryDeterminers: {
        definition: "First position determiners",
        examples: [
          "the",
          "a",
          "an",
          "my",
          "this",
          "that",
          "some",
          "any",
          "many",
          "much",
        ],
      },
      secondaryDeterminers: {
        definition: "Second position determiners",
        examples: ["first", "second", "next", "last", "other", "same", "only"],
      },
      orderRules: {
        rule: "Primary determiner + Secondary determiner + Adjective + Noun",
        examples: [
          "the first time",
          "my other friend",
          "this same problem",
          "some more money",
        ],
      },
    },
    determinerCombinations: {
      definition: "How determiners can be combined in specific patterns.",
      allowedCombinations: {
        examples: [
          "all the students",
          "both my friends",
          "half the money",
          "some of these books",
          "most of the people",
        ],
      },
      forbiddenCombinations: {
        examples: [
          "the my book (incorrect)",
          "a the car (incorrect)",
          "this the house (incorrect)",
          "some the people (incorrect)",
        ],
      },
      specialCases: {
        examples: [
          "all of the students",
          "both of my friends",
          "half of the money",
          "some of these books",
        ],
      },
    },
    determinerAgreement: {
      definition:
        "How determiners agree with nouns in number and countability.",
      countableSingular: {
        examples: [
          "a book",
          "the student",
          "this car",
          "my friend",
          "each person",
        ],
      },
      countablePlural: {
        examples: [
          "the books",
          "these students",
          "my friends",
          "many people",
          "several cars",
        ],
      },
      uncountable: {
        examples: [
          "the water",
          "some money",
          "much time",
          "little patience",
          "enough food",
        ],
      },
      agreementRules: {
        countable:
          "Use 'a/an' with singular countable nouns, 'some/many' with plural",
        uncountable:
          "Use 'some/much/little' with uncountable nouns, never 'a/an'",
      },
    },
  },

  // Determiner Collocations and Fixed Expressions
  determinerCollocations: {
    commonPairs: [
      "a lot of",
      "plenty of",
      "a number of",
      "a couple of",
      "a great deal of",
      "a considerable amount of",
      "a substantial number of",
      "a significant proportion of",
      "the majority of",
      "the remainder of",
      "the bulk of",
      "the entirety of",
      "all of the",
      "some of these",
      "most of those",
      "half of the",
      "part of the",
    ],
    academicCollocations: [
      "the majority of studies",
      "a significant proportion of participants",
      "the remainder of the data",
      "the bulk of the evidence",
      "a substantial number of cases",
      "a considerable amount of research",
    ],
    businessCollocations: [
      "the majority of customers",
      "a significant proportion of sales",
      "the remainder of the budget",
      "the bulk of the work",
      "a substantial number of employees",
      "a considerable amount of investment",
    ],
    formalCollocations: [
      "the aforementioned study",
      "the latter approach",
      "the former method",
      "the subsequent analysis",
      "the preceding discussion",
      "the respective departments",
      "the corresponding data",
    ],
  },

  // Determiner Usage in Different Genres
  determinerGenreUsage: {
    academic: {
      description: "Determiners used in scholarly writing and research.",
      examples: [
        "the majority of",
        "a significant proportion of",
        "the remainder of",
        "the bulk of",
        "a substantial number of",
      ],
      characteristics: ["precise", "formal", "quantitative", "objective"],
    },
    journalistic: {
      description: "Determiners used in news reporting and articles.",
      examples: [
        "many",
        "most",
        "some",
        "several",
        "a number of",
        "the majority of",
      ],
      principles: ["clarity", "accuracy", "objectivity", "accessibility"],
    },
    literary: {
      description: "Determiners used in creative writing and fiction.",
      examples: ["this", "that", "these", "those", "my", "your", "his", "her"],
      techniques: [
        "descriptive determiners",
        "character voice",
        "emotional emphasis",
      ],
    },
    technical: {
      description:
        "Determiners used in technical and specialized documentation.",
      examples: [
        "the respective",
        "the corresponding",
        "the equivalent",
        "the comparable",
        "the analogous",
      ],
      strategies: [
        "precise determiners",
        "technical determiners",
        "specialized determiners",
      ],
    },
  },

  // Determiner Frequency and Register
  determinerFrequencyAndRegister: {
    highFrequency: {
      definition: "Most commonly used determiners in everyday English.",
      examples: [
        "the",
        "a",
        "an",
        "my",
        "this",
        "that",
        "some",
        "any",
        "many",
        "much",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition: "Moderately common determiners for specific contexts.",
      examples: [
        "several",
        "enough",
        "plenty of",
        "a number of",
        "a couple of",
        "a few",
        "a little",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition: "Rare or specialized determiners for specific purposes.",
      examples: [
        "a plethora of",
        "a myriad of",
        "an abundance of",
        "a scarcity of",
        "a dearth of",
      ],
      usage: "Used in academic, literary, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "the aforementioned",
        "the aforesaid",
        "the latter",
        "the former",
        "the subsequent",
      ],
      informal: ["a lot of", "plenty of", "a bunch of", "a ton of", "loads of"],
      technical: [
        "the respective",
        "the corresponding",
        "the equivalent",
        "the comparable",
        "the analogous",
      ],
      literary: ["this", "that", "these", "those", "my", "your", "his", "her"],
    },
  },

  // Determiner Exercises and Practice Activities
  determinerExercises: {
    beginner: [
      "Complete the sentence: I have ___ cat (a/an/the)",
      "Choose the correct determiner: ___ book is mine (This/That)",
      "Match determiners to nouns",
      "Practice basic article usage",
    ],
    intermediate: [
      "Place determiners in correct positions",
      "Use different types of determiners appropriately",
      "Practice determiner combinations",
      "Create noun phrases with determiners",
    ],
    advanced: [
      "Analyze determiner usage in texts",
      "Create sophisticated noun phrases",
      "Practice register-appropriate determiners",
      "Study determiner agreement patterns",
    ],
    interactive: [
      "Determiner guessing games",
      "Noun phrase building challenges",
      "Determiner combination competitions",
      "Register matching exercises",
    ],
  },

  // Determiner Assessment and Evaluation
  determinerAssessment: {
    criteria: [
      "Accuracy of determiner choice",
      "Correct determiner position",
      "Appropriate register usage",
      "Proper agreement with nouns",
      "Correct combinations",
    ],
    rubrics: {
      beginner: "Basic determiners, simple position, limited variety",
      intermediate: "Good variety, correct position, appropriate usage",
      advanced: "Sophisticated choices, complex position, register awareness",
      mastery: "Exceptional variety, perfect agreement, nuanced usage",
    },
    commonErrors: [
      "Incorrect determiner choice",
      "Wrong determiner position",
      "Inappropriate register",
      "Poor agreement with nouns",
      "Forbidden combinations",
    ],
  },

  // Determiner Learning Strategies
  determinerLearningStrategies: [
    "Practice determiner usage with real nouns and contexts",
    "Create determiner lists for different categories (articles, quantifiers, possessives)",
    "Use determiner flashcards with nouns and examples",
    "Practice determiner combinations regularly",
    "Read extensively to encounter determiners in context",
    "Write noun phrases using various determiner types",
    "Play determiner games (matching, building, combining)",
    "Study determiner agreement patterns and rules",
  ],

  // Determiner in Language Tests
  determinerInTests: [
    "TOEFL/IELTS: Identify and correct determiner errors in reading and writing sections",
    "Cambridge: Use appropriate determiners in writing tasks and speaking assessments",
    "SAT: Recognize determiner meaning and usage in reading comprehension",
    "GRE: Understand determiner relationships and agreement patterns",
    "GMAT: Apply determiner logic in sentence correction questions",
  ],

  // Common Determiner Mistakes
  commonDeterminerMistakes: {
    choiceErrors: [
      "Incorrect: I have the cat (should be: I have a cat)",
      "Incorrect: I like a sun (should be: I like the sun)",
      "Incorrect: I have many money (should be: I have much money)",
    ],
    positionErrors: [
      "Incorrect: the my book (should be: my book)",
      "Incorrect: a the car (should be: the car)",
      "Incorrect: this the house (should be: this house)",
    ],
    agreementErrors: [
      "Incorrect: a books (should be: some books)",
      "Incorrect: many water (should be: much water)",
      "Incorrect: a information (should be: some information)",
    ],
  },
};

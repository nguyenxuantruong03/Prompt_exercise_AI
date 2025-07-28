import { PrepositionType } from "@/types/grammars/grammar/Preposition";

export const PrepositionData:PrepositionType = {
  // --- Comprehensive Prepositions Reference ---

  // Definition of Prepositions
  prepositionDefinition: {
    basicDefinition:
      "Prepositions are words used before nouns or pronouns to show their relationship with other words in the sentence. They indicate direction, location, time, cause, manner, and more.",
    grammaticalFunction:
      "Prepositions function as connectors that establish relationships between different parts of a sentence.",
    keyCharacteristics: [
      "Show spatial relationships (in, on, at, under, over)",
      "Indicate temporal relationships (before, after, during, since)",
      "Express direction and movement (to, from, into, out of)",
      "Show cause and purpose (because of, due to, for)",
      "Indicate manner and means (by, with, without, like)",
    ],
    morphologicalFeatures: {
      simple: "Single word prepositions (in, on, at, to, from)",
      compound:
        "Multi-word prepositions (in front of, because of, according to)",
      complex: "Prepositional phrases that function as prepositions",
    },
    positionInSentence: {
      beforeNouns: "Prepositions come before nouns or pronouns",
      afterVerbs:
        "Some prepositions follow specific verbs (depend on, listen to)",
      atEnd:
        "Prepositions can sometimes appear at the end of sentences in informal English",
    },
  },

  // A1 Level - Basic Prepositions (Beginner)
  A1: {
    basicPlacePrepositions: {
      definition:
        "Essential prepositions for describing basic locations and positions. These are the foundation of spatial language and are used in everyday communication to describe where objects and people are located.",
      examples: ["in", "on", "at", "under", "over", "behind", "in front of"],
      usage:
        "The book is on the table. The cat is under the chair. I am at home.",
      exercises: [
        "Complete: The book is ___ the table (in/on/at)",
        "Choose: The cat is ___ the chair (under/over)",
        "Describe: I am ___ home (in/at/to)",
      ],
    },
    basicTimePrepositions: {
      definition:
        "Basic prepositions for simple time expressions. These prepositions help learners express when events occur, from specific times to general periods.",
      examples: ["at", "on", "in", "before", "after"],
      usage: "I wake up at 7 o'clock. I work on Monday. I was born in 1990.",
      exercises: [
        "I wake up ___ 7 o'clock (at/on/in)",
        "I work ___ Monday (at/on/in)",
        "I was born ___ 1990 (at/on/in)",
      ],
    },
    basicDirectionPrepositions: {
      definition:
        "Basic prepositions for simple direction and movement. These prepositions describe basic movement patterns and directions in space.",
      examples: ["to", "from", "into", "out of"],
      usage: "I go to school. I come from home. I walk into the room.",
      exercises: [
        "I go ___ school (to/from/into)",
        "I come ___ home (to/from/into)",
        "I walk ___ the room (to/into/out of)",
      ],
    },
    basicPossessionPrepositions: {
      definition:
        "Basic prepositions for showing possession and belonging. These prepositions express ownership, association, and relationships between objects and people.",
      examples: ["of", "with", "without"],
      usage:
        "The book of John. I go with my friend. I drink coffee without sugar.",
      exercises: [
        "The book ___ John (of/with/without)",
        "I go ___ my friend (of/with/without)",
        "I drink coffee ___ sugar (of/with/without)",
      ],
    },
  },

  // A2 Level - Elementary Prepositions
  A2: {
    expandedPlacePrepositions: {
      definition:
        "More place prepositions for detailed location descriptions. These prepositions allow for more precise spatial relationships and are essential for giving directions and describing locations accurately.",
      examples: [
        "between",
        "next to",
        "beside",
        "above",
        "below",
        "near",
        "far from",
        "inside",
        "outside",
      ],
      usage:
        "The bank is between the post office and the library. My house is next to the park.",
      exercises: [
        "The bank is ___ the post office and the library (between/next to)",
        "My house is ___ the park (next to/between)",
        "The bird is ___ the tree (above/below)",
      ],
    },
    expandedTimePrepositions: {
      definition:
        "More time prepositions for detailed time expressions. These prepositions enable learners to express complex temporal relationships and durations.",
      examples: [
        "since",
        "for",
        "until",
        "during",
        "by",
        "within",
        "throughout",
      ],
      usage:
        "I have lived here since 2010. I will stay until Friday. I work during the day.",
      exercises: [
        "I have lived here ___ 2010 (since/for/until)",
        "I will stay ___ Friday (since/for/until)",
        "I work ___ the day (during/by/within)",
      ],
    },
    expandedDirectionPrepositions: {
      definition:
        "More direction prepositions for detailed movement descriptions. These prepositions describe complex movement patterns and spatial relationships.",
      examples: [
        "towards",
        "through",
        "along",
        "across",
        "past",
        "around",
        "up",
        "down",
      ],
      usage:
        "I walk towards the station. I drive through the tunnel. I walk along the river.",
      exercises: [
        "I walk ___ the station (towards/through/along)",
        "I drive ___ the tunnel (towards/through/along)",
        "I walk ___ the river (towards/through/along)",
      ],
    },
    basicPrepositionalPhrases: {
      definition:
        "Common prepositional phrases for everyday use. These multi-word prepositions are essential for natural English expression and are frequently used in daily communication.",
      examples: [
        "in front of",
        "out of",
        "instead of",
        "because of",
        "thanks to",
      ],
      usage:
        "I wait in front of the cinema. I am out of money. I go by bus instead of walking.",
      exercises: [
        "I wait ___ the cinema (in front of/out of)",
        "I am ___ money (in front of/out of)",
        "I go by bus ___ walking (instead of/because of)",
      ],
    },
  },

  // B1 Level - Intermediate Prepositions
  B1: {
    sophisticatedPlacePrepositions: {
      definition:
        "Advanced place prepositions for precise location descriptions. These prepositions enable sophisticated spatial descriptions and are essential for academic and professional communication.",
      examples: [
        "beneath",
        "beyond",
        "within",
        "without",
        "among",
        "amid",
        "alongside",
        "opposite",
      ],
      usage:
        "The treasure is beneath the ground. The village is beyond the mountains. I sit opposite my friend.",
      exercises: [
        "The treasure is ___ the ground (beneath/beyond/within)",
        "The village is ___ the mountains (beneath/beyond/within)",
        "I sit ___ my friend (opposite/among/alongside)",
      ],
    },
    sophisticatedTimePrepositions: {
      definition:
        "Advanced time prepositions for complex time relationships. These prepositions express nuanced temporal relationships and are crucial for academic writing and formal communication.",
      examples: [
        "prior to",
        "subsequent to",
        "in the course of",
        "in the midst of",
        "on the verge of",
      ],
      usage:
        "I arrived prior to the meeting. I left subsequent to the announcement. I am on the verge of success.",
      exercises: [
        "I arrived ___ the meeting (prior to/subsequent to)",
        "I left ___ the announcement (prior to/subsequent to)",
        "I am ___ success (on the verge of/in the midst of)",
      ],
    },
    causeAndPurposePrepositions: {
      definition:
        "Prepositions that express cause, reason, and purpose. These prepositions are essential for explaining relationships between events and actions, crucial for academic and professional writing.",
      examples: [
        "due to",
        "owing to",
        "on account of",
        "for the sake of",
        "in order to",
        "so as to",
      ],
      usage:
        "The flight was delayed due to bad weather. I study hard for the sake of my future.",
      exercises: [
        "The flight was delayed ___ bad weather (due to/owing to)",
        "I study hard ___ my future (for the sake of/on account of)",
        "I work hard ___ succeed (in order to/so as to)",
      ],
    },
    mannerAndMeansPrepositions: {
      definition:
        "Prepositions that express manner, means, and method. These prepositions describe how actions are performed and are essential for detailed explanations and instructions.",
      examples: [
        "by means of",
        "with the help of",
        "in accordance with",
        "in compliance with",
        "as per",
      ],
      usage:
        "I solved the problem by means of mathematics. I acted in accordance with the rules.",
      exercises: [
        "I solved the problem ___ mathematics (by means of/with the help of)",
        "I acted ___ the rules (in accordance with/in compliance with)",
        "I did it ___ your instructions (as per/by means of)",
      ],
    },
  },

  // B2 Level - Upper Intermediate Prepositions
  B2: {
    abstractPrepositions: {
      definition:
        "Prepositions used for abstract concepts and relationships. These prepositions express complex conceptual relationships and are essential for academic writing and sophisticated communication.",
      examples: [
        "in terms of",
        "with regard to",
        "in relation to",
        "with respect to",
        "concerning",
        "regarding",
      ],
      usage:
        "In terms of quality, this is the best. With regard to your question, I agree.",
      exercises: [
        "___ quality, this is the best (In terms of/With regard to)",
        "___ your question, I agree (In terms of/With regard to)",
        "___ the matter, I have no comment (Concerning/Regarding)",
      ],
    },
    comparisonPrepositions: {
      definition:
        "Prepositions used for making comparisons and contrasts. These prepositions enable sophisticated comparative analysis and are crucial for academic and analytical writing.",
      examples: [
        "in comparison with",
        "as opposed to",
        "in contrast to",
        "unlike",
        "similar to",
        "different from",
      ],
      usage:
        "In comparison with last year, sales have increased. As opposed to theory, practice is different.",
      exercises: [
        "___ last year, sales have increased (In comparison with/As opposed to)",
        "___ theory, practice is different (In comparison with/As opposed to)",
        "This is ___ that (similar to/different from)",
      ],
    },
    exceptionPrepositions: {
      definition:
        "Prepositions that express exceptions and exclusions. These prepositions are essential for precise communication and are frequently used in academic, legal, and professional contexts.",
      examples: [
        "except for",
        "apart from",
        "other than",
        "besides",
        "excluding",
        "barring",
      ],
      usage:
        "Everyone came except for John. Apart from the weather, everything was perfect.",
      exercises: [
        "Everyone came ___ John (except for/apart from)",
        "___ the weather, everything was perfect (except for/apart from)",
        "___ this problem, everything is fine (Other than/Besides)",
      ],
    },
    conditionPrepositions: {
      definition:
        "Prepositions that express conditions and circumstances. These prepositions describe situational relationships and are essential for conditional reasoning and formal communication.",
      examples: [
        "in case of",
        "in the event of",
        "in the absence of",
        "in the presence of",
        "under the circumstances",
      ],
      usage:
        "In case of emergency, call 911. In the absence of evidence, we cannot proceed.",
      exercises: [
        "___ emergency, call 911 (In case of/In the event of)",
        "___ evidence, we cannot proceed (In the absence of/In the presence of)",
        "___ these circumstances, I must decline (Under/In)",
      ],
    },
  },

  // C1 Level - Advanced Prepositions
  C1: {
    academicPrepositions: {
      definition:
        "Prepositions commonly used in academic and formal writing. These prepositions are essential for scholarly communication and enable precise expression of complex relationships in academic contexts.",
      examples: [
        "in accordance with",
        "pursuant to",
        "in compliance with",
        "in conformity with",
        "in line with",
        "consistent with",
      ],
      usage:
        "The study was conducted in accordance with ethical guidelines. The results are consistent with previous findings.",
      exercises: [
        "The study was conducted ___ ethical guidelines (in accordance with/pursuant to)",
        "The results are ___ previous findings (consistent with/in line with)",
        "The policy is ___ international standards (in compliance with/in conformity with)",
      ],
    },
    literaryPrepositions: {
      definition:
        "Sophisticated prepositions used in literature and creative writing. These prepositions add nuance and sophistication to creative expression and are essential for literary analysis and creative writing.",
      examples: [
        "amidst",
        "betwixt",
        "notwithstanding",
        "irrespective of",
        "regardless of",
        "in spite of",
      ],
      usage:
        "Amidst the chaos, she remained calm. Notwithstanding the difficulties, we succeeded.",
      exercises: [
        "___ the chaos, she remained calm (Amidst/Betwixt)",
        "___ the difficulties, we succeeded (Notwithstanding/Irrespective of)",
        "___ the weather, we went hiking (Regardless of/In spite of)",
      ],
    },
    legalPrepositions: {
      definition:
        "Prepositions used in legal and formal documents. These prepositions are essential for legal communication and enable precise expression of legal relationships and obligations.",
      examples: [
        "pursuant to",
        "in accordance with",
        "subject to",
        "notwithstanding",
        "in lieu of",
        "per",
      ],
      usage:
        "Pursuant to the agreement, payment is due. Subject to approval, the plan will proceed.",
      exercises: [
        "___ the agreement, payment is due (Pursuant to/In accordance with)",
        "___ approval, the plan will proceed (Subject to/Notwithstanding)",
        "___ the contract, delivery is required (Per/In lieu of)",
      ],
    },
    technicalPrepositions: {
      definition:
        "Prepositions used in technical and specialized contexts. These prepositions enable precise communication in technical fields and are essential for professional documentation and technical writing.",
      examples: [
        "in relation to",
        "with reference to",
        "in connection with",
        "in the context of",
        "as per",
        "per",
      ],
      usage:
        "In relation to the data, the conclusion is clear. With reference to your inquiry, here is the information.",
      exercises: [
        "___ the data, the conclusion is clear (In relation to/With reference to)",
        "___ your inquiry, here is the information (In relation to/With reference to)",
        "___ the manual, this is correct (As per/Per)",
      ],
    },
  },

  // C2 Level - Mastery Prepositions
  C2: {
    rareAndObscure: {
      definition:
        "Extremely rare and sophisticated prepositions for mastery level expression. These prepositions represent the highest level of linguistic sophistication and are used in specialized contexts requiring exceptional precision and nuance.",
      examples: [
        "betwixt",
        "amidst",
        "notwithstanding",
        "irrespective",
        "regardless",
        "pursuant",
        "per",
      ],
      usage:
        "Betwixt the two options, I choose neither. Notwithstanding the obstacles, we persevered.",
      exercises: [
        "___ the two options, I choose neither (Betwixt/Amidst)",
        "___ the obstacles, we persevered (Notwithstanding/Irrespective)",
        "___ the circumstances, we must act (Regardless/Pursuant)",
      ],
    },
    domainSpecific: {
      definition:
        "Highly specialized prepositions for specific professional domains. These prepositions are used in specialized professional contexts and require deep understanding of domain-specific language conventions.",
      legal: [
        "pursuant to",
        "subject to",
        "notwithstanding",
        "in lieu of",
        "per",
      ],
      medical: [
        "in relation to",
        "with respect to",
        "in terms of",
        "regarding",
        "concerning",
      ],
      scientific: [
        "in accordance with",
        "consistent with",
        "in line with",
        "as per",
        "per",
      ],
      business: [
        "in compliance with",
        "in conformity with",
        "pursuant to",
        "subject to",
        "per",
      ],
    },
    stylisticPrepositions: {
      definition:
        "Prepositions for sophisticated stylistic expression and nuance. These prepositions enable writers to achieve specific stylistic effects and are essential for advanced creative and academic writing.",
      formal: [
        "pursuant to",
        "in accordance with",
        "subject to",
        "notwithstanding",
        "per",
      ],
      poetic: [
        "betwixt",
        "amidst",
        "notwithstanding",
        "irrespective",
        "regardless",
      ],
      academic: [
        "in relation to",
        "with reference to",
        "in connection with",
        "in the context of",
        "as per",
      ],
    },
    contextualMastery: {
      definition:
        "Mastery of preposition usage across all contexts and registers. This represents the ability to choose the most appropriate preposition for any given context, demonstrating complete linguistic competence.",
      formalWriting:
        "Precise, sophisticated prepositions for academic and professional contexts",
      creativeWriting:
        "Expressive, nuanced prepositions for literary and artistic expression",
      casualSpeech:
        "Natural, conversational prepositions for everyday communication",
      technicalWriting:
        "Specific, accurate prepositions for specialized documentation",
    },
  },

  // Comprehensive Learning Resources and References
  learningResources: {
    books: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        isbn: "978-1108457651",
        description:
          "Comprehensive grammar reference with extensive preposition coverage from basic to advanced levels. Essential for systematic preposition learning.",
        level: "A1-C2",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        isbn: "978-0194202435",
        description:
          "Detailed guide to English usage including comprehensive preposition sections with practical examples and common mistakes.",
        level: "B1-C2",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey K. Pullum",
        isbn: "978-0521431460",
        description:
          "Academic reference grammar providing in-depth analysis of preposition usage and grammatical relationships.",
        level: "C1-C2",
      },
      {
        title: "Oxford Collocations Dictionary",
        author: "Oxford University Press",
        isbn: "978-0194325387",
        description:
          "Essential resource for learning preposition collocations and common word combinations in English.",
        level: "B1-C2",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author:
          "Douglas Biber, Stig Johansson, Geoffrey Leech, Susan Conrad, and Edward Finegan",
        isbn: "978-0582237254",
        description:
          "Comprehensive analysis of preposition usage in different registers and contexts based on corpus linguistics.",
        level: "C1-C2",
      },
    ],
    websites: [
      {
        name: "Cambridge Dictionary",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/prepositions",
        description:
          "Comprehensive online grammar guide with detailed preposition explanations and examples for all levels.",
        level: "A1-C2",
      },
      {
        name: "Oxford Learner's Dictionaries",
        url: "https://www.oxfordlearnersdictionaries.com/grammar/prepositions",
        description:
          "Detailed preposition guides with usage notes, common mistakes, and practice exercises.",
        level: "A2-C2",
      },
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/prepositions",
        description:
          "Interactive preposition lessons with exercises, games, and downloadable resources for all levels.",
        level: "A1-B2",
      },
      {
        name: "Grammarly Blog",
        url: "https://www.grammarly.com/blog/prepositions/",
        description:
          "Practical preposition guides with common mistakes, usage tips, and advanced preposition patterns.",
        level: "B1-C2",
      },
      {
        name: "Purdue OWL",
        url: "https://owl.purdue.edu/owl/general_writing/grammar/prepositions.html",
        description:
          "Academic writing resource with detailed preposition usage guidelines for formal and academic contexts.",
        level: "B2-C2",
      },
    ],
    academicPapers: [
      {
        title:
          "The Semantics of English Prepositions: Spatial Scenes, Embodied Meaning, and Cognition",
        authors: ["Andrea Tyler", "Vyvyan Evans"],
        journal: "Cambridge University Press",
        year: 2003,
        description:
          "Groundbreaking study on preposition semantics and cognitive linguistics approach to preposition meaning.",
      },
      {
        title:
          "Prepositions and Argument Structure: Evidence from Temporal Prepositions",
        authors: ["Joost Zwarts"],
        journal: "Linguistic Inquiry",
        year: 2005,
        description:
          "Theoretical analysis of preposition argument structure with focus on temporal prepositions.",
      },
      {
        title:
          "The Acquisition of Prepositions in English: A Corpus-Based Study",
        authors: ["Susan Hunston", "Gill Francis"],
        journal: "Applied Linguistics",
        year: 2000,
        description:
          "Corpus-based study of preposition acquisition patterns and frequency in English language learning.",
      },
      {
        title: "Preposition Stranding and Resumptivity in English",
        authors: ["Andrew Radford"],
        journal: "Journal of Linguistics",
        year: 2018,
        description:
          "Syntactic analysis of preposition stranding and resumptive preposition usage in English grammar.",
      },
      {
        title:
          "Cross-linguistic Variation in Preposition Systems: A Typological Approach",
        authors: ["Matthew Dryer", "Martin Haspelmath"],
        journal: "Language Typology and Universals",
        year: 2013,
        description:
          "Comparative study of preposition systems across languages and typological patterns.",
      },
    ],
    onlineCourses: [
      {
        name: "English Grammar: Prepositions",
        platform: "Coursera",
        url: "https://www.coursera.org/learn/english-grammar-prepositions",
        description:
          "Comprehensive online course covering preposition usage from basic to advanced levels with interactive exercises.",
        level: "A2-C1",
      },
      {
        name: "Advanced English Grammar: Prepositions and Phrasal Verbs",
        platform: "edX",
        url: "https://www.edx.org/learn/english-grammar-prepositions",
        description:
          "Advanced course focusing on complex preposition patterns and phrasal verb constructions.",
        level: "B2-C2",
      },
      {
        name: "Prepositions in Academic Writing",
        platform: "FutureLearn",
        url: "https://www.futurelearn.com/courses/academic-prepositions",
        description:
          "Specialized course for academic writing with focus on formal preposition usage and scholarly communication.",
        level: "C1-C2",
      },
      {
        name: "Business English: Prepositions for Professional Communication",
        platform: "Udemy",
        url: "https://www.udemy.com/course/business-english-prepositions",
        description:
          "Practical course for business communication with emphasis on professional preposition usage.",
        level: "B1-C1",
      },
      {
        name: "Creative Writing: Mastering Prepositions for Literary Expression",
        platform: "Skillshare",
        url: "https://www.skillshare.com/classes/creative-writing-prepositions",
        description:
          "Creative writing course focusing on stylistic preposition usage and literary expression techniques.",
        level: "C1-C2",
      },
    ],
  },

  // Original Prepositions Section (Preserved)
  Prepositions: {
    types: {
      place: {
        description: "Chỉ vị trí",
        examples: [
          "in",
          "on",
          "at",
          "under",
          "over",
          "behind",
          "between",
          "next to",
          "beside",
          "above",
          "below",
        ],
      },
      time: {
        description: "Chỉ thời gian",
        examples: [
          "at",
          "on",
          "in",
          "before",
          "after",
          "by",
          "since",
          "for",
          "until",
          "during",
        ],
      },
      direction: {
        description: "Chỉ hướng đi",
        examples: [
          "to",
          "into",
          "onto",
          "out of",
          "off",
          "towards",
          "through",
          "along",
          "across",
          "past",
        ],
      },
      "cause/purpose": {
        description: "Chỉ nguyên nhân, mục đích",
        examples: ["because of", "due to", "for", "on account of"],
      },
      manner: {
        description: "Chỉ cách thức",
        examples: ["by", "with", "without", "like", "as"],
      },
      "agent/instrument": {
        description: "Chỉ tác nhân hoặc công cụ",
        examples: ["by", "with"],
      },
      comparison: {
        description: "Chỉ sự so sánh",
        examples: ["like", "as", "than"],
      },
      prepositionalPhrases: {
        description: "Cụm giới từ thường gặp",
        examples: [
          "in front of",
          "in spite of",
          "because of",
          "according to",
          "out of",
          "instead of",
        ],
      },
    },
    usage: [
      {
        type: "Dùng để chỉ nơi chốn",
        example: "The book is **on** the table.",
      },
      {
        type: "Dùng để chỉ thời gian",
        example: "He was born **in** 1995.",
      },
      {
        type: "Dùng để chỉ hướng đi",
        example: "She is going **to** the market.",
      },
      {
        type: "Dùng để chỉ nguyên nhân",
        example: "**Because of** the rain, we stayed home.",
      },
      {
        type: "Dùng để chỉ cách thức, công cụ",
        example: "He opened the can **with** a knife.",
      },
    ],
    recognition: [
      "Thường đứng trước danh từ hoặc đại từ: **in the room**, **on the table**",
      "Nhiều giới từ đi kèm với động từ cụ thể (phrasal verbs): look at, listen to, depend on",
      "Một số giới từ trông giống liên từ nhưng không nối mệnh đề: because of (giới từ) ≠ because (liên từ)",
      "Giới từ + danh từ = cụm giới từ (prepositional phrase): at night, by car, for lunch",
    ],
    examples: {
      place: ["She is **in** the kitchen.", "The keys are **on** the desk."],
      time: [
        "We’ll meet **at** 5 p.m.",
        "He was born **on** Monday.",
        "I’ll go **in** the morning.",
      ],
      direction: [
        "They went **into** the room.",
        "He walked **through** the tunnel.",
      ],
      cause: ["We canceled the trip **because of** the storm."],
      manner: ["She cut the paper **with** scissors."],
      agent: ["The novel was written **by** George Orwell."],
      comparison: ["He swims **like** a fish."],
      prepositionalPhrases: [
        "**In spite of** the rain, they played football.",
        "He succeeded **because of** his effort.",
      ],
    },
    notes: [
      "Phân biệt: **in** (bên trong, có giới hạn) vs. **on** (tiếp xúc bề mặt) vs. **at** (một điểm cụ thể).",
      "**By** dùng với phương tiện (by car, by train) nhưng không có 'a/the': ✅ by bus ❌ by the bus.",
      "Không dùng giới từ với 'home': ✅ go home ❌ go to home.",
      "Một số động từ + giới từ cố định: depend **on**, belong **to**, listen **to**, wait **for**, think **about**.",
      "Tránh nhầm lẫn giữa giới từ và liên từ: ❌ Because the rain → ✅ Because **of** the rain (nếu theo sau là danh từ).",
    ],
  },

  // Advanced Preposition Patterns and Constructions
  advancedPrepositionPatterns: {
    prepositionFormation: {
      definition: "How prepositions are formed and categorized.",
      simple: {
        definition: "Single word prepositions",
        examples: [
          "in",
          "on",
          "at",
          "to",
          "from",
          "by",
          "with",
          "without",
          "of",
          "for",
        ],
      },
      compound: {
        definition: "Multi-word prepositions",
        examples: [
          "in front of",
          "because of",
          "according to",
          "in spite of",
          "instead of",
          "out of",
        ],
      },
      complex: {
        definition: "Prepositional phrases that function as prepositions",
        examples: [
          "in the middle of",
          "at the top of",
          "on the edge of",
          "in the center of",
        ],
      },
    },
    prepositionalPhrases: {
      definition:
        "Groups of words that begin with a preposition and function as a unit.",
      structure: "Preposition + Noun/Noun Phrase + (Optional modifiers)",
      examples: [
        "in the beautiful garden",
        "on the wooden table",
        "at the busy intersection",
        "with great enthusiasm",
        "without any hesitation",
      ],
      functions: {
        adjective: "The book on the table is mine (modifies 'book')",
        adverb: "I work in the morning (modifies 'work')",
        noun: "Under the bed is dusty (functions as subject)",
      },
    },
    prepositionalVerbs: {
      definition: "Verbs that are followed by specific prepositions.",
      examples: [
        "depend on",
        "listen to",
        "wait for",
        "think about",
        "belong to",
        "consist of",
        "result in",
        "succeed in",
        "believe in",
        "care about",
      ],
      usage:
        "I depend on my friends. She listens to music. We wait for the bus.",
      exercises: [
        "I depend ___ my friends (on/for/to)",
        "She listens ___ music (to/for/on)",
        "We wait ___ the bus (for/to/on)",
      ],
    },
    phrasalPrepositions: {
      definition: "Prepositional phrases that function as single prepositions.",
      examples: [
        "in front of",
        "in back of",
        "in the middle of",
        "at the top of",
        "on the edge of",
        "in the center of",
        "at the bottom of",
        "on the side of",
      ],
      usage:
        "The car is in front of the house. The book is at the top of the shelf.",
      exercises: [
        "The car is ___ the house (in front of/in back of)",
        "The book is ___ the shelf (at the top of/at the bottom of)",
        "The picture is ___ the wall (on the edge of/on the side of)",
      ],
    },
  },

  // Preposition Collocations and Fixed Expressions
  prepositionCollocations: {
    commonPairs: [
      "in the morning",
      "at night",
      "on time",
      "by car",
      "with care",
      "without doubt",
      "of course",
      "for example",
      "to school",
      "from home",
      "in the rain",
      "on the phone",
      "at work",
      "by hand",
      "with love",
      "without warning",
      "of importance",
      "for fun",
      "to bed",
      "from abroad",
    ],
    businessCollocations: [
      "in accordance with",
      "pursuant to",
      "subject to",
      "in compliance with",
      "in conformity with",
      "in line with",
      "consistent with",
      "as per",
      "in relation to",
      "with reference to",
      "in connection with",
      "per",
    ],
    academicCollocations: [
      "in terms of",
      "with regard to",
      "in relation to",
      "with respect to",
      "concerning",
      "regarding",
      "in comparison with",
      "as opposed to",
      "in contrast to",
      "similar to",
      "different from",
      "in accordance with",
    ],
    emotionalCollocations: [
      "in love",
      "with joy",
      "without fear",
      "of hope",
      "for peace",
      "to happiness",
      "from sadness",
      "in anger",
      "with pride",
      "without regret",
      "of faith",
      "for freedom",
      "to success",
      "from failure",
      "in despair",
    ],
  },

  // Preposition Usage in Different Genres
  prepositionGenreUsage: {
    fiction: {
      description: "Prepositions used in creative writing and storytelling.",
      examples: [
        "amidst",
        "betwixt",
        "notwithstanding",
        "irrespective of",
        "regardless of",
        "in spite of",
        "beneath",
        "beyond",
        "within",
      ],
      techniques: [
        "descriptive prepositions",
        "atmospheric prepositions",
        "emotional prepositions",
      ],
    },
    journalism: {
      description: "Prepositions used in news reporting and articles.",
      examples: [
        "according to",
        "in accordance with",
        "pursuant to",
        "subject to",
        "in relation to",
        "with reference to",
        "concerning",
        "regarding",
      ],
      principles: ["accuracy", "clarity", "objectivity", "precision"],
    },
    academic: {
      description: "Prepositions used in scholarly writing and research.",
      examples: [
        "in terms of",
        "with regard to",
        "in relation to",
        "with respect to",
        "in accordance with",
        "consistent with",
        "in line with",
        "as per",
      ],
      characteristics: ["precise", "formal", "technical", "objective"],
    },
    legal: {
      description: "Prepositions used in legal documents and contracts.",
      examples: [
        "pursuant to",
        "in accordance with",
        "subject to",
        "notwithstanding",
        "in lieu of",
        "per",
        "as per",
        "in compliance with",
      ],
      strategies: [
        "formal prepositions",
        "legal prepositions",
        "contractual prepositions",
      ],
    },
  },

  // Preposition Frequency and Register
  prepositionFrequencyAndRegister: {
    highFrequency: {
      definition: "Most commonly used prepositions in everyday English.",
      examples: [
        "in",
        "on",
        "at",
        "to",
        "from",
        "of",
        "for",
        "with",
        "by",
        "without",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition: "Moderately common prepositions for specific contexts.",
      examples: [
        "between",
        "among",
        "through",
        "across",
        "along",
        "around",
        "behind",
        "in front of",
        "next to",
        "beside",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition: "Rare or specialized prepositions for specific purposes.",
      examples: [
        "betwixt",
        "amidst",
        "notwithstanding",
        "irrespective",
        "regardless",
        "pursuant",
        "per",
      ],
      usage: "Used in academic, literary, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "pursuant to",
        "in accordance with",
        "subject to",
        "notwithstanding",
        "per",
      ],
      informal: ["by", "with", "without", "of", "for"],
      technical: [
        "in relation to",
        "with reference to",
        "in connection with",
        "as per",
        "per",
      ],
      literary: [
        "betwixt",
        "amidst",
        "notwithstanding",
        "irrespective",
        "regardless",
      ],
    },
  },

  // Preposition Assessment and Evaluation
  prepositionAssessment: {
    criteria: [
      "Accuracy of preposition choice",
      "Correct preposition position",
      "Appropriate register usage",
      "Variety and sophistication",
      "Collocation accuracy",
    ],
    rubrics: {
      beginner: "Basic prepositions, simple position, limited variety",
      intermediate: "Good variety, correct position, appropriate usage",
      advanced: "Sophisticated choices, complex position, register awareness",
      mastery: "Exceptional variety, perfect position, nuanced usage",
    },
    commonErrors: [
      "Incorrect preposition choice",
      "Overuse of common prepositions",
      "Inappropriate register",
      "Poor collocation choices",
      "Missing prepositions",
    ],
  },

  // Preposition Learning Strategies
  prepositionLearningStrategies: [
    "Practice preposition usage with real objects and locations",
    "Create preposition lists for different categories (place, time, direction)",
    "Use preposition flashcards with pictures and examples",
    "Practice prepositional phrases regularly",
    "Read extensively to encounter prepositions in context",
    "Write descriptive paragraphs using various preposition types",
    "Play preposition games (describing locations, directions, relationships)",
    "Study preposition collocations and common combinations",
  ],

  // Preposition in Language Tests
  prepositionInTests: [
    "TOEFL/IELTS: Identify and correct preposition errors in reading and writing sections",
    "Cambridge: Use advanced prepositions in writing tasks and speaking assessments",
    "SAT: Recognize subtle differences in preposition meaning and usage",
    "GRE: Understand complex preposition relationships and connotations",
    "GMAT: Apply preposition logic in sentence correction questions",
  ],

  // Common Preposition Mistakes
  commonPrepositionMistakes: {
    choiceErrors: [
      "Incorrect: I am in home (should be: I am at home)",
      "Incorrect: I go to home (should be: I go home)",
      "Incorrect: I arrive to the station (should be: I arrive at the station)",
    ],
    positionErrors: [
      "Incorrect: I depend my friends on (should be: I depend on my friends)",
      "Incorrect: I listen music to (should be: I listen to music)",
      "Incorrect: I wait the bus for (should be: I wait for the bus)",
    ],
    usageErrors: [
      "Using wrong prepositions with specific verbs (arrive at vs arrive to)",
      "Confusing similar prepositions (in vs on vs at)",
      "Missing prepositions in phrasal verbs (depend on vs depend)",
    ],
  },
};

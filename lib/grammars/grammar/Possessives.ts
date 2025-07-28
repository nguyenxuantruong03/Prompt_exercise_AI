import { PossessivesType } from "@/types/grammars/grammar/Possessives";

export const PossessivesData:PossessivesType = {
  // --- Comprehensive Possessives Reference ---
  // Definition of Possessives
  possessivesDefinition: {
    concept:
      "Possessives are grammatical forms and structures used to indicate ownership, relationships, or association between people, animals, things, or concepts.",
    importance:
      "Essential for expressing relationships, ownership, and belonging in both spoken and written English, and for avoiding ambiguity in communication.",
    corePrinciple:
      "Uses possessive adjectives, possessive pronouns, and possessive forms of nouns to clearly indicate who owns or is related to what.",
    scope:
      "Applies to all communicative contexts where relationships, ownership, or association need to be expressed.",
    learningObjectives: [
      "Master basic possessive forms for everyday communication",
      "Understand possessive patterns across different contexts",
      "Apply possessives correctly in formal and informal situations",
      "Recognize and use advanced possessive structures",
      "Develop fluency in possessive usage across all registers",
    ],
    references: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457651",
        relevance:
          "Comprehensive grammar reference with extensive possessive coverage",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: "2016",
        isbn: "978-0194202411",
        relevance:
          "Detailed explanations of possessive forms and common errors",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: "2013",
        isbn: "978-1107697386",
        relevance: "Advanced possessive structures and academic usage",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston & Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: "2002",
        isbn: "978-0521431460",
        relevance: "Comprehensive linguistic analysis of possessive forms",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author: "Douglas Biber et al.",
        publisher: "Pearson Education",
        year: "1999",
        isbn: "978-0582237254",
        relevance: "Corpus-based analysis of possessive usage patterns",
      },
    ],
  },

  // A1 Level - Basic Possessives (Beginner)
  A1: {
    definition:
      "Basic possessive adjectives and simple possessive forms for fundamental communication.",
    learningObjectives: [
      "Recognize and use basic possessive adjectives (my, your, his, her, its, our, their)",
      "Understand simple possessive noun forms with 's",
      "Apply possessives in basic personal and family contexts",
      "Distinguish between subject pronouns and possessive adjectives",
    ],
    proficiencyDescription:
      "Can use basic possessive forms to indicate simple ownership and relationships in familiar contexts.",
    possessiveAdjectives: {
      concept:
        "Possessive adjectives show who owns something and are used before nouns. They agree with the possessor, not the possessed object.",
      grammaticalRules: [
        "Always used before a noun",
        "Do not change form based on the noun's number or gender",
        "Must agree with the possessor (person who owns)",
        "Cannot stand alone without a noun",
      ],
      list: ["my, your, his, her, its, our, their"],
      examples: [
        "This is my book.",
        "Is that your car?",
        "Their house is big.",
        "Our school is new.",
        "His dog is friendly.",
        "Her bag is red.",
        "Its tail is long.",
      ],
      exercises: [
        "Complete: This is ___ (my) pen.",
        "Complete: Is that ___ (your) bike?",
        "Complete: ___ (Their) house is big.",
      ],
      commonErrors: [
        "Using subject pronouns instead of possessive adjectives",
        "Forgetting to use possessive adjectives before nouns",
      ],
    },
    possessiveFormOfNouns: {
      concept:
        "Add 's to a singular noun to show possession. This is the most basic form of noun possession.",
      grammaticalRules: [
        "Add 's to singular nouns",
        "Used for people, animals, and sometimes places",
        "Shows direct ownership or relationship",
      ],
      patterns: ["John's car", "the girl's book", "the dog's tail"],
      examples: [
        "This is John's car.",
        "The girl's book is on the table.",
        "The dog's tail is wagging.",
        "My mother's name is Sarah.",
        "The teacher's desk is clean.",
      ],
      exercises: [
        "Complete: This is ___ (John's) car.",
        "Complete: The ___ (girl's) book is on the table.",
      ],
      commonErrors: [
        "Confusing 's (possessive) with 's (contraction)",
        "Using 's with plural nouns incorrectly",
      ],
    },
    exercises: [
      "Complete: This is ___ (my) pen.",
      "Complete: Is that ___ (your) bike?",
      "Complete: The ___ (girl's) book is on the table.",
    ],
    assessmentCriteria: {
      accuracy: "Can use basic possessive adjectives and 's forms correctly",
      fluency: "Can express simple ownership naturally",
      comprehension: "Understands basic possessive meaning in context",
    },
  },

  // A2 Level - Elementary Possessives
  A2: {
    definition:
      "Possessive pronouns and plural possessive forms for expanded communication.",
    learningObjectives: [
      "Use possessive pronouns to replace nouns and avoid repetition",
      "Apply plural possessive forms correctly",
      "Combine possessive adjectives and pronouns in conversations",
      "Understand possessive forms in different contexts",
    ],
    proficiencyDescription:
      "Can use possessive pronouns and plural possessive forms to express ownership more flexibly and avoid repetition.",
    possessivePronouns: {
      concept:
        "Possessive pronouns replace nouns to avoid repetition and show ownership without repeating the noun.",
      grammaticalRules: [
        "Stand alone without nouns",
        "Replace noun phrases to avoid repetition",
        "Agree with the possessor, not the possessed object",
        "Used in responses and comparisons",
      ],
      list: ["mine, yours, his, hers, its, ours, theirs"],
      examples: [
        "This book is mine.",
        "Is this car yours?",
        "The house is theirs.",
        "The school is ours.",
        "The bag is hers.",
        "The pen is his.",
        "Whose is this? It's mine.",
      ],
      exercises: [
        "Complete: That pen is ___ (mine).",
        "Complete: Is this bike ___ (yours)?",
        "Complete: The house is ___ (theirs).",
      ],
      commonErrors: [
        "Adding apostrophe to possessive pronouns",
        "Using possessive adjectives instead of pronouns",
      ],
    },
    pluralPossessiveNouns: {
      concept:
        "Add ' to plural nouns ending in s to show possession. For irregular plurals, add 's.",
      grammaticalRules: [
        "Regular plurals ending in s: add ' only",
        "Irregular plurals: add 's",
        "Used for groups and collections",
      ],
      patterns: ["the girls' room", "the dogs' park", "the children's toys"],
      examples: [
        "The girls' room is clean.",
        "The dogs' park is big.",
        "The children's toys are everywhere.",
        "The teachers' lounge is on the second floor.",
        "The men's bathroom is on the left.",
      ],
      exercises: [
        "Complete: The ___ (girls') room is clean.",
        "Complete: The ___ (dogs') park is big.",
      ],
      commonErrors: [
        "Using 's for regular plural nouns",
        "Confusing regular and irregular plural forms",
      ],
    },
    exercises: [
      "Complete: The ___ (girls') room is clean.",
      "Complete: The ___ (dogs') park is big.",
    ],
    assessmentCriteria: {
      accuracy:
        "Can use possessive pronouns and plural possessive forms correctly",
      fluency: "Can avoid repetition using possessive pronouns",
      comprehension: "Understands possessive forms in various contexts",
    },
  },

  // B1 Level - Intermediate Possessives
  B1: {
    definition:
      "Complex possessive structures and double possessives for intermediate communication.",
    learningObjectives: [
      "Master double possessive constructions",
      "Use possessive forms with inanimate objects",
      "Apply possessives in complex sentences",
      "Understand possessive nuances and emphasis",
    ],
    proficiencyDescription:
      "Can use complex possessive structures including double possessives and possessives with inanimate objects in various contexts.",
    doublePossessive: {
      concept:
        "Double possessive uses both 'of' and a possessive form for emphasis, clarity, or to express a particular type of relationship.",
      grammaticalRules: [
        "Uses 'of' + possessive pronoun",
        "Emphasizes the relationship or connection",
        "Often used for personal relationships",
        "Cannot be used with proper nouns",
      ],
      patterns: [
        "a friend of mine",
        "a colleague of hers",
        "a neighbor of ours",
      ],
      examples: [
        "He is a friend of mine.",
        "She is a colleague of hers.",
        "That is a neighbor of ours.",
        "He is a student of theirs.",
        "This is a book of hers.",
        "That's an idea of mine.",
      ],
      exercises: [
        "Complete: He is a ___ (friend of mine).",
        "Complete: The ___ (leg of the table) is broken.",
        "Complete: The ___ (color of the car) is blue.",
      ],
      commonErrors: [
        "Using double possessive with proper nouns",
        "Confusing with simple 'of' constructions",
      ],
    },
    possessiveWithObjects: {
      concept:
        "Possessive forms with inanimate objects typically use 'of' construction rather than 's, especially in formal contexts.",
      grammaticalRules: [
        "Use 'of' for inanimate objects",
        "'s can be used for personified objects",
        "Formal writing prefers 'of' construction",
        "Informal speech may use 's for familiar objects",
      ],
      patterns: [
        "the leg of the table",
        "the color of the car",
        "the end of the movie",
      ],
      examples: [
        "The leg of the table is broken.",
        "The color of the car is blue.",
        "The end of the movie was surprising.",
        "The roof of the house is red.",
        "The handle of the door is loose.",
      ],
      exercises: [
        "Complete: He is a ___ (friend of mine).",
        "Complete: The ___ (leg of the table) is broken.",
        "Complete: The ___ (color of the car) is blue.",
      ],
      commonErrors: [
        "Using 's for all inanimate objects",
        "Overusing 'of' construction in informal contexts",
      ],
    },
    exercises: [
      "Complete: He is a ___ (friend of mine).",
      "Complete: The ___ (leg of the table) is broken.",
      "Complete: The ___ (color of the car) is blue.",
    ],
    assessmentCriteria: {
      accuracy: "Can use double possessives and object possessives correctly",
      fluency: "Can express complex relationships naturally",
      comprehension: "Understands nuanced possessive meanings",
    },
  },

  // B2 Level - Upper Intermediate Possessives
  B2: {
    definition:
      "Advanced possessive forms, compound possessives, and possessive determiners for sophisticated communication.",
    learningObjectives: [
      "Master compound possessive structures",
      "Use possessive determiners effectively",
      "Apply possessives in academic and professional contexts",
      "Understand shared vs. separate ownership",
    ],
    proficiencyDescription:
      "Can use advanced possessive structures including compound possessives and possessive determiners in academic and professional contexts.",
    compoundPossessives: {
      concept:
        "Compound possessives show shared or separate ownership between multiple possessors.",
      grammaticalRules: [
        "Shared ownership: 's after the last person",
        "Separate ownership: 's after each person",
        "Used for groups and partnerships",
        "Important for clarity in complex relationships",
      ],
      patterns: [
        "John and Mary's house (shared)",
        "John's and Mary's houses (separate)",
        "Tom and Jerry's adventure (shared)",
        "Tom's and Jerry's adventures (separate)",
      ],
      examples: [
        "John and Mary's house is big. (shared)",
        "John's and Mary's houses are far apart. (separate)",
        "Tom and Jerry's adventure was exciting. (shared)",
        "Tom's and Jerry's adventures were different. (separate)",
        "The company's and the union's demands were met. (separate)",
      ],
      exercises: [
        "Complete: John and ___ (Mary's) house is big.",
        "Complete: ___ (My) new car is fast.",
        "Complete: Their old ___ (house) was beautiful.",
      ],
      commonErrors: [
        "Confusing shared and separate ownership",
        "Incorrect placement of 's in compound possessives",
      ],
    },
    possessiveDeterminers: {
      concept:
        "Possessive determiners function as part of noun phrases and can be modified by adjectives.",
      grammaticalRules: [
        "Can be modified by adjectives",
        "Part of larger noun phrases",
        "Used in formal and informal contexts",
        "Important for precise expression",
      ],
      patterns: ["my, your, his, her, its, our, their + noun"],
      examples: [
        "My new car is fast.",
        "Their old house was beautiful.",
        "Our teacher is kind.",
        "His expensive watch was stolen.",
        "Her favorite book is on the shelf.",
        "Your first impression was wrong.",
      ],
      exercises: [
        "Complete: John and ___ (Mary's) house is big.",
        "Complete: ___ (My) new car is fast.",
        "Complete: Their old ___ (house) was beautiful.",
      ],
      commonErrors: [
        "Confusing possessive determiners with other determiners",
        "Incorrect adjective placement",
      ],
    },
    exercises: [
      "Complete: John and ___ (Mary's) house is big.",
      "Complete: ___ (My) new car is fast.",
      "Complete: Their old ___ (house) was beautiful.",
    ],
    assessmentCriteria: {
      accuracy:
        "Can use compound possessives and possessive determiners correctly",
      fluency: "Can express complex ownership relationships naturally",
      comprehension: "Understands sophisticated possessive structures",
    },
  },

  // C1 Level - Advanced Possessives
  C1: {
    definition:
      "Sophisticated possessive structures for academic and professional contexts with nuanced usage.",
    learningObjectives: [
      "Master academic possessive structures",
      "Use possessive forms with gerunds",
      "Apply possessives in formal writing",
      "Understand abstract possessive concepts",
    ],
    proficiencyDescription:
      "Can use sophisticated possessive structures including academic possessives and possessive forms with gerunds in formal and professional contexts.",
    academicPossessives: {
      concept:
        "Possessive forms in academic and formal writing require precision and often involve abstract concepts.",
      grammaticalRules: [
        "Used for academic concepts and theories",
        "Often involve abstract nouns",
        "Require precise expression",
        "Common in research and scholarly writing",
      ],
      patterns: [
        "the theory's implications",
        "the company's revenue",
        "the participants' responses",
        "the study's methodology",
      ],
      examples: [
        "The study's results were significant.",
        "The company's revenue increased.",
        "The participants' responses were analyzed.",
        "The theory's implications are far-reaching.",
        "The research's findings support the hypothesis.",
        "The experiment's outcome was unexpected.",
      ],
      exercises: [
        "Complete: The study's ___ (results) were significant.",
        "Complete: I appreciate your ___ (coming) early.",
        "Complete: Their ___ (leaving) surprised us.",
      ],
      commonErrors: [
        "Overusing possessive forms in academic writing",
        "Confusing possessive with other constructions",
      ],
    },
    possessiveWithGerunds: {
      concept:
        "Possessive forms before gerunds show who performs the action, creating more formal and precise expressions.",
      grammaticalRules: [
        "Possessive form + gerund",
        "Shows who performs the action",
        "More formal than object pronoun + gerund",
        "Used in formal writing and speech",
      ],
      patterns: ["my/his/her/their + gerund", "your/our + gerund"],
      examples: [
        "I appreciate your coming early.",
        "His singing is beautiful.",
        "Their leaving surprised us.",
        "We appreciate your helping us.",
        "Her writing style is distinctive.",
        "Our working together was productive.",
      ],
      exercises: [
        "Complete: The study's ___ (results) were significant.",
        "Complete: I appreciate your ___ (coming) early.",
        "Complete: Their ___ (leaving) surprised us.",
      ],
      commonErrors: [
        "Using object pronouns instead of possessive forms",
        "Confusing with other gerund constructions",
      ],
    },
    exercises: [
      "Complete: The study's ___ (results) were significant.",
      "Complete: I appreciate your ___ (coming) early.",
      "Complete: Their ___ (leaving) surprised us.",
    ],
    assessmentCriteria: {
      accuracy: "Can use academic possessives and gerund possessives correctly",
      fluency: "Can express complex concepts naturally",
      comprehension: "Understands sophisticated possessive nuances",
    },
  },

  // C2 Level - Mastery Possessives
  C2: {
    definition:
      "Mastery of possessive forms in all contexts including nuanced, creative, and literary usage.",
    learningObjectives: [
      "Master literary and creative possessive usage",
      "Use abstract possessive concepts",
      "Apply possessives in all registers and contexts",
      "Create nuanced possessive expressions",
    ],
    proficiencyDescription:
      "Can use possessive forms creatively and masterfully in all contexts, including literary, philosophical, and abstract expressions.",
    literaryPossessives: {
      concept:
        "Possessive forms in literary and creative contexts often involve personification, metaphor, and artistic expression.",
      grammaticalRules: [
        "Often involves personification",
        "Used for poetic and artistic effect",
        "Can create metaphorical relationships",
        "Requires creative interpretation",
      ],
      patterns: [
        "poetic and metaphorical possessives",
        "creative manipulation of possessive forms",
        "personification through possessives",
      ],
      examples: [
        "The night's silence was deep and mysterious.",
        "The heart's desire led him onward.",
        "The world's wonders never cease.",
        "The mind's eye sees all.",
        "The river's song lulled her to sleep.",
        "The wind's whisper carried secrets.",
        "The mountain's majesty inspired awe.",
      ],
      exercises: [
        "Complete: The night's ___ (silence) was deep and mysterious.",
        "Complete: Freedom's ___ (price) is eternal vigilance.",
        "Complete: The mind's ___ (eye) sees all.",
      ],
      commonErrors: [
        "Overusing literary possessives in inappropriate contexts",
        "Confusing metaphorical with literal possessives",
      ],
    },
    abstractPossessives: {
      concept:
        "Possessive forms with abstract and philosophical concepts express complex relationships and ideas.",
      grammaticalRules: [
        "Used for abstract concepts",
        "Expresses philosophical relationships",
        "Often involves personification",
        "Requires sophisticated understanding",
      ],
      patterns: [
        "freedom's price",
        "time's passage",
        "life's meaning",
        "love's power",
      ],
      examples: [
        "Freedom's price is eternal vigilance.",
        "Time's passage is inevitable.",
        "Life's meaning is often questioned.",
        "Love's power transcends all boundaries.",
        "Justice's scales must be balanced.",
        "Wisdom's voice speaks softly.",
        "Beauty's truth lies in simplicity.",
      ],
      exercises: [
        "Complete: The night's ___ (silence) was deep and mysterious.",
        "Complete: Freedom's ___ (price) is eternal vigilance.",
        "Complete: The mind's ___ (eye) sees all.",
      ],
      commonErrors: [
        "Using abstract possessives in inappropriate contexts",
        "Confusing abstract with concrete possessive relationships",
      ],
    },
    exercises: [
      "Complete: The night's ___ (silence) was deep and mysterious.",
      "Complete: Freedom's ___ (price) is eternal vigilance.",
      "Complete: The mind's ___ (eye) sees all.",
    ],
    assessmentCriteria: {
      accuracy: "Can use all possessive forms correctly in any context",
      fluency: "Can express complex ideas naturally through possessives",
      comprehension:
        "Understands and can create nuanced possessive expressions",
    },
  },

  // Original Possessives Section (Preserved)
  Possessives: {
    definition:
      "Possessives show ownership or a relationship between things or people.",
    types: {
      possessiveAdjectives: {
        description: "Dùng trước danh từ để chỉ sự sở hữu.",
        list: {
          my: "my book",
          your: "your car",
          his: "his house",
          her: "her bag",
          its: "its tail",
          our: "our school",
          their: "their friends",
        },
        usage: [
          "Không đứng một mình, luôn đi kèm danh từ.",
          "Thể hiện ai là chủ sở hữu của vật gì.",
        ],
        examples: [
          "This is **my** pen.",
          "Is that **your** bike?",
          "They sold **their** house.",
        ],
      },
      possessivePronouns: {
        description:
          "Thay thế cho danh từ để tránh lặp lại, thể hiện sự sở hữu.",
        list: {
          mine: "This book is mine.",
          yours: "Is this car yours?",
          his: "The bag is his.",
          hers: "The house is hers.",
          its: "(hiếm dùng riêng biệt)",
          ours: "The school is ours.",
          theirs: "The friends are theirs.",
        },
        usage: [
          "Đứng một mình, không kèm theo danh từ.",
          "Thể hiện sự sở hữu thay cho danh từ.",
        ],
        examples: [
          "That pen is **mine**.",
          "Is this bike **yours**?",
          "The house is **theirs**.",
        ],
      },
      possessiveFormOfNouns: {
        description: "Thêm 's hoặc ' để thể hiện sở hữu cho danh từ.",
        rules: [
          "Đối với danh từ số ít và danh từ số nhiều không kết thúc bằng s: thêm 's (e.g. the girl's book).",
          "Đối với danh từ số nhiều kết thúc bằng s: chỉ thêm ' (e.g. the girls' room).",
        ],
        examples: ["This is **John's** car.", "The **dogs'** park is big."],
      },
    },
    commonErrors: [
      "Incorrect: Her is my friend. ❌ → Correct: She is my friend. ✅",
      "Incorrect: This is mines. ❌ → Correct: This is mine. ✅",
      "Incorrect: The cat's tails are long. ❌ → Correct: The cats' tails are long. ✅",
    ],
    notes: [
      "Possessive adjectives không đứng một mình, luôn đi cùng danh từ.",
      "Possessive pronouns đứng một mình thay thế cho danh từ.",
      "'s thể hiện sở hữu cá nhân hoặc vật.",
      "' thể hiện sở hữu của danh từ số nhiều đã có s cuối.",
    ],
  },

  // Advanced Possessive Patterns and Constructions
  advancedPossessivePatterns: {
    concept: "Advanced patterns and constructions involving possessives",
    doublePossessive: {
      pattern: "Double possessive with 'of' and possessive pronoun",
      examples: [
        "a friend of mine",
        "a colleague of hers",
        "a neighbor of ours",
        "a student of theirs",
      ],
    },
    compoundPossessives: {
      pattern: "Compound possessives for shared or separate ownership",
      examples: [
        "John and Mary's house (shared)",
        "John's and Mary's houses (separate)",
        "Tom and Jerry's adventure (shared)",
        "Tom's and Jerry's adventures (separate)",
      ],
    },
    possessiveWithGerunds: {
      pattern: "Possessive forms before gerunds",
      examples: [
        "I appreciate your coming early.",
        "His singing is beautiful.",
        "Their leaving surprised us.",
      ],
    },
    possessiveWithObjects: {
      pattern: "Possessive forms with inanimate objects (of construction)",
      examples: [
        "the leg of the table",
        "the color of the car",
        "the end of the movie",
        "the roof of the house",
      ],
    },
  },

  // Possessive Collocations and Fixed Expressions
  possessiveCollocations: {
    concept: "Common collocations and fixed expressions involving possessives",
    adjectiveCollocations: {
      pattern: "Adjective + possessive noun combinations",
      examples: [
        "old John's house",
        "young Mary's idea",
        "famous Shakespeare's plays",
        "brave soldier's story",
      ],
    },
    nounCollocations: {
      pattern: "Noun + possessive combinations",
      examples: [
        "teacher's desk",
        "doctor's office",
        "child's toy",
        "artist's painting",
      ],
    },
    prepositionCollocations: {
      pattern: "Preposition + possessive combinations",
      examples: [
        "in my opinion",
        "on his behalf",
        "for her sake",
        "with their permission",
      ],
    },
  },

  // Possessive Usage in Different Genres
  possessiveGenreUsage: {
    concept: "Possessive patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and precise possessive usage",
      examples: [
        "The company's revenue increased significantly.",
        "The study's results were published in a journal.",
        "The participants' responses were analyzed statistically.",
        "The project's objectives were clearly defined.",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational possessive usage",
      examples: [
        "That's my favorite movie!",
        "Is this your bag?",
        "Their house is really nice.",
        "Our teacher is great!",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic possessive structures",
      examples: [
        "The experiment's outcome supported the hypothesis.",
        "The theory's implications are far-reaching.",
        "The author's argument was convincing.",
        "The data's accuracy was verified.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive possessive usage",
      examples: [
        "The night's silence was deep and mysterious.",
        "The heart's desire led him onward.",
        "The world's wonders never cease.",
        "The river's song lulled her to sleep.",
      ],
    },
  },

  // Possessive Frequency and Register
  possessiveFrequencyAndRegister: {
    concept: "Frequency and register considerations in possessive usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used possessive combinations",
      examples: [
        "my/your/his/her/its/our/their + noun (very common)",
        "noun + 's (very common)",
        "noun + s' (common for plural)",
        "possessive pronoun alone (mine, yours, etc.)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise possessive usage",
      examples: [
        "the company's policy",
        "the project's timeline",
        "the participants' feedback",
        "the organization's mission",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed possessive usage",
      examples: ["my friend", "your idea", "his car", "her bag"],
    },
    technicalRegister: {
      characteristics: "Precise technical possessive usage",
      examples: [
        "the system's performance",
        "the device's battery life",
        "the application's features",
        "the network's security",
      ],
    },
  },

  // Possessive Exercises and Practice Activities
  possessiveExercises: {
    concept: "Comprehensive exercises for practicing possessives",
    basicExercises: {
      type: "Simple possessive usage",
      exercises: [
        "This is ___ (my) book.",
        "Is that ___ (your) car?",
        "Their house is ___ (big).",
        "Our school is ___ (new).",
      ],
    },
    intermediateExercises: {
      type: "Complex possessive usage",
      exercises: [
        "This book is ___ (mine).",
        "The girls' room is ___ (clean).",
        "He is a ___ (friend of mine).",
        "The leg of the table is ___ (broken).",
      ],
    },
    advancedExercises: {
      type: "Advanced possessive patterns",
      exercises: [
        "John and Mary's house is ___ (big).",
        "The study's results were ___ (significant).",
        "The night's silence was ___ (deep and mysterious).",
        "Freedom's price is ___ (eternal vigilance).",
      ],
    },
    errorCorrection: {
      type: "Identify and correct possessive errors",
      exercises: [
        "Her is my friend. → ___",
        "This is mines. → ___",
        "The cat's tails are long. → ___",
        "The bag is her's. → ___",
      ],
    },
  },

  // Possessive Assessment and Evaluation
  possessiveAssessment: {
    concept: "Assessment criteria and evaluation methods for possessive usage",
    assessmentCriteria: {
      accuracy: "Correct possessive structure and form",
      appropriateness: "Appropriate possessive choice for context",
      register: "Appropriate register usage",
      fluency: "Natural possessive usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with possessive focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic possessive adjectives and forms",
      A2: "Possessive pronouns, plural possessive forms",
      B1: "Double possessives, possessive with objects",
      B2: "Compound possessives, possessive determiners",
      C1: "Academic possessives, possessive with gerunds",
      C2: "Mastery in all contexts including literary and abstract usage",
    },
  },

  // Possessive Learning Strategies
  possessiveLearningStrategies: {
    concept: "Effective strategies for learning and mastering possessives",
    recognitionStrategies: {
      strategy: "Identifying possessive patterns and structures",
      techniques: [
        "Learn basic possessive adjective and pronoun forms",
        "Recognize possessive noun patterns",
        "Identify double and compound possessives",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily possessive exercises",
        "Reading with possessive focus",
        "Writing sentences with different patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing possessive patterns and rules",
      techniques: [
        "Learn possessive forms by category",
        "Remember possessive rules for nouns and pronouns",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying possessive rules in communication",
      techniques: [
        "Start with basic possessive adjectives and forms",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Possessives in Language Tests
  possessivesInTests: {
    concept: "Possessives in standardized language tests",
    testTypes: {
      TOEFL: "Academic possessives and formal usage",
      IELTS: "Both academic and general possessive usage",
      Cambridge: "British English possessive variations",
      TOEIC: "Business and professional possessive usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct possessive form",
      sentenceCompletion: "Complete with correct possessive",
      errorIdentification: "Find possessive errors",
      textEditing: "Correct possessive usage in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify possessive patterns",
      contextAnalysis: "Analyze context for appropriate usage",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Possessive Mistakes
  commonPossessiveMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      wrongAdjective: {
        error: "Using subject/object pronoun instead of possessive adjective",
        example: "Her is my friend. ❌",
        correction: "She is my friend. ✅",
        explanation:
          "Use 'her' as a possessive adjective before a noun, not as a subject",
      },
      wrongPronoun: {
        error: "Using incorrect possessive pronoun form",
        example: "This is mines. ❌",
        correction: "This is mine. ✅",
        explanation: "'Mine' is the correct possessive pronoun, not 'mines'",
      },
      wrongPlural: {
        error: "Incorrect plural possessive form",
        example: "The cat's tails are long. ❌",
        correction: "The cats' tails are long. ✅",
        explanation: "Use 's for singular, s' for plural nouns ending in s",
      },
      wrongApostrophe: {
        error: "Incorrect use of apostrophe in possessives",
        example: "The bag is her's. ❌",
        correction: "The bag is hers. ✅",
        explanation: "Possessive pronouns do not use an apostrophe",
      },
    },
    preventionStrategies: {
      adjectivePractice: "Practice possessive adjective and pronoun forms",
      nounPractice: "Learn correct possessive forms for nouns",
      contextPractice: "Practice in different contexts and registers",
      patternPractice: "Learn possessive patterns systematically",
    },
  },
};

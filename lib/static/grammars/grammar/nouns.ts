import { NounsType } from "@/types/grammars/grammar/nouns";

export const NounsData:NounsType = {
  id: 96,
  definition:
    "Nouns are words that name people, places, things, ideas, or concepts.",

  levels: {
    A1: {
      focus: "Basic noun identification and simple plural forms",
      skills: [
        "Recognize common nouns (cat, house, book)",
        "Use simple plural forms (cat → cats, box → boxes)",
        "Basic articles usage (a/an/the with simple nouns)",
        "Personal nouns (mother, father, teacher, student)",
      ],
    },
    A2: {
      focus: "Expanding vocabulary and understanding countable vs uncountable",
      skills: [
        "Distinguish countable and uncountable nouns",
        "Use quantifiers with different noun types (some, many, much)",
        "Irregular plurals (child → children, man → men)",
        "Basic compound nouns (bedroom, classroom)",
      ],
    },
    B1: {
      focus: "Abstract nouns and more complex structures",
      skills: [
        "Use abstract nouns effectively (happiness, freedom, knowledge)",
        "Understand collective nouns and their agreement patterns",
        "Gerunds as nouns (Swimming is fun)",
        "Noun phrases with multiple modifiers",
      ],
    },
    B2: {
      focus: "Advanced noun usage and complex structures",
      skills: [
        "Master noun-noun combinations and compound structures",
        "Use nominalization effectively (organize → organization)",
        "Complex possessive forms and structures",
        "Advanced quantifiers and determiners",
      ],
    },
    C1: {
      focus: "Sophisticated noun usage and style",
      skills: [
        "Advanced abstract and technical nouns",
        "Complex nominalization for academic writing",
        "Sophisticated compound and complex noun phrases",
        "Stylistic choices in noun usage",
      ],
    },
    C2: {
      focus: "Native-like precision and nuanced usage",
      skills: [
        "Nuanced differences between similar nouns",
        "Highly sophisticated academic and technical vocabulary",
        "Complex headword structures in noun phrases",
        "Masterful use of nominalization for concise expression",
      ],
    },
  },

  types: {
    common: {
      definition: "General names for people/things (e.g., teacher, city, book)",
      examples: [
        "teacher",
        "city",
        "book",
        "car",
        "animal",
        "food",
        "computer",
      ],
      rules: [
        "Usually lowercase unless at sentence beginning",
        "Can be preceded by articles (a, an, the)",
        "Can be made plural in most cases",
      ],
    },
    proper: {
      definition:
        "Specific names and are capitalized (e.g., John, London, Facebook)",
      examples: [
        "John",
        "London",
        "Facebook",
        "Christmas",
        "Monday",
        "Amazon River",
      ],
      subcategories: {
        people: ["Shakespeare", "Einstein", "Maria", "Dr. Smith"],
        places: ["Tokyo", "Mount Everest", "Pacific Ocean", "Central Park"],
        organizations: ["UNESCO", "Microsoft", "Harvard University"],
        events: ["World War II", "Olympics", "Renaissance"],
        brands: ["Nike", "Coca-Cola", "iPhone", "Mercedes-Benz"],
        titles: ["Professor Johnson", "Queen Elizabeth", "President Biden"],
      },
      rules: [
        "Always capitalized regardless of position in sentence",
        "Usually no article unless part of the name (the United States)",
        "Cannot be made plural in most cases",
      ],
    },
    countable: {
      definition: "Can be counted (e.g., apple, car, dog)",
      examples: ["apple", "car", "dog", "idea", "mistake", "opportunity"],
      characteristics: [
        "Have singular and plural forms",
        "Can use a/an with singular forms",
        "Can use numbers (one apple, three cars)",
        "Use many/few for quantity",
      ],
      irregular_plurals: {
        child: "children",
        man: "men",
        woman: "women",
        foot: "feet",
        tooth: "teeth",
        mouse: "mice",
        goose: "geese",
        ox: "oxen",
        person: "people",
      },
    },
    uncountable: {
      definition:
        "Cannot be counted individually (e.g., water, information, rice)",
      examples: [
        "water",
        "information",
        "rice",
        "happiness",
        "furniture",
        "advice",
      ],
      categories: {
        liquids: ["water", "milk", "oil", "coffee", "tea"],
        materials: ["wood", "plastic", "gold", "silver", "cotton"],
        abstract_concepts: [
          "love",
          "happiness",
          "freedom",
          "knowledge",
          "wisdom",
        ],
        activities: ["swimming", "reading", "homework", "research"],
        food_substances: ["rice", "bread", "meat", "sugar", "flour"],
        information: ["news", "information", "data", "evidence", "research"],
      },
      characteristics: [
        "No plural form",
        "Cannot use a/an directly",
        "Use much/little for quantity",
        "Can use some/any in questions and negatives",
      ],
      measurement_units: [
        "a piece of advice",
        "a loaf of bread",
        "a glass of water",
        "a piece of furniture",
        "a sheet of paper",
      ],
    },
    concrete: {
      definition: "Can be seen, touched, or measured (e.g., table, cat, pen)",
      examples: ["table", "cat", "pen", "building", "flower", "smartphone"],
      characteristics: [
        "Perceived through physical senses",
        "Have physical existence",
        "Can be measured or quantified",
      ],
    },
    abstract: {
      definition:
        "Ideas, qualities, or states (e.g., love, freedom, happiness)",
      examples: [
        "love",
        "freedom",
        "happiness",
        "courage",
        "intelligence",
        "democracy",
      ],
      categories: {
        emotions: ["anger", "joy", "sadness", "excitement", "anxiety"],
        qualities: [
          "beauty",
          "honesty",
          "intelligence",
          "creativity",
          "patience",
        ],
        concepts: ["democracy", "justice", "equality", "progress", "tradition"],
        states: ["childhood", "adulthood", "poverty", "wealth", "health"],
      },
      advanced_usage: [
        "Often derived from adjectives (beautiful → beauty)",
        "Common in academic and formal writing",
        "Can be nominalized from verbs (decide → decision)",
      ],
    },
    collective: {
      definition: "Refer to groups (e.g., team, family, class, audience)",
      examples: [
        "team",
        "family",
        "class",
        "audience",
        "committee",
        "government",
      ],
      agreement_patterns: {
        british_english: "The team are playing well (plural verb)",
        american_english: "The team is playing well (singular verb)",
      },
      common_collectives: [
        "a flock of birds",
        "a herd of cattle",
        "a pack of wolves",
        "a school of fish",
        "a swarm of bees",
        "a pride of lions",
      ],
    },
    compound: {
      definition:
        "Made up of two or more words (e.g., toothpaste, mother-in-law, bus stop)",
      examples: [
        "toothpaste",
        "mother-in-law",
        "bus stop",
        "greenhouse",
        "bookstore",
      ],
      formation_patterns: {
        noun_noun: ["bedroom", "football", "sunlight", "keyboard"],
        adjective_noun: ["greenhouse", "blackboard", "software", "hardware"],
        verb_noun: ["breakfast", "watchdog", "swimming pool"],
        noun_verb: ["haircut", "snowfall", "sunset", "earthquake"],
        preposition_noun: ["underground", "overcoat", "upstairs", "inside"],
      },
      writing_styles: {
        one_word: ["toothbrush", "classroom", "homework", "somewhere"],
        hyphenated: [
          "mother-in-law",
          "editor-in-chief",
          "twenty-one",
          "well-being",
        ],
        two_words: ["bus stop", "ice cream", "post office", "high school"],
      },
    },
  },

  advanced_structures: {
    nominalization: {
      definition: "Converting verbs or adjectives into nouns",
      examples: {
        verb_to_noun: {
          organize: "organization",
          decide: "decision",
          apply: "application",
          investigate: "investigation",
          conclude: "conclusion",
        },
        adjective_to_noun: {
          deep: "depth",
          wide: "width",
          long: "length",
          strong: "strength",
          happy: "happiness",
        },
      },
      academic_usage: [
        "The investigation of climate change (instead of: investigating climate change)",
        "The application of new technology (instead of: applying new technology)",
        "The conclusion of the study (instead of: concluding the study)",
      ],
    },

    noun_phrases: {
      definition: "Groups of words with a noun as the main word",
      structure: "Determiner + Pre-modifier + Head noun + Post-modifier",
      examples: {
        simple: "the book",
        complex: "the extremely interesting book about ancient civilizations",
        academic:
          "the comprehensive analysis of economic data from developing countries",
      },
      components: {
        determiners: ["the", "a", "an", "this", "that", "some", "many"],
        pre_modifiers: ["beautiful", "very large", "recently published"],
        head_noun: "book",
        post_modifiers: [
          "in the library",
          "that I bought",
          "written by experts",
        ],
      },
    },
  },

  usage: [
    {
      type: "Subject of a sentence",
      example: "Dogs bark loudly.",
      advanced_examples: [
        "The rapid development of technology has changed our lives.",
        "Children playing in the park were laughing joyfully.",
        "What surprised me was his honesty.",
      ],
    },
    {
      type: "Object of a verb",
      example: "I read a book.",
      advanced_examples: [
        "She demonstrated remarkable patience.",
        "The company announced significant changes.",
        "We discussed the implications of the decision.",
      ],
    },
    {
      type: "Object of a preposition",
      example: "She is in the room.",
      advanced_examples: [
        "Despite the difficulties, they succeeded.",
        "In accordance with regulations, we must report.",
        "By means of careful planning, they achieved their goal.",
      ],
    },
    {
      type: "Possessive form",
      example: "That is John's bag.",
      advanced_examples: [
        "The company's success depends on innovation.",
        "Students' achievements reflect their dedication.",
        "The children's enthusiasm was contagious.",
      ],
    },
    {
      type: "Complement",
      example: "She became a doctor.",
      advanced_examples: [
        "The solution seems reasonable.",
        "His appointment as director was unexpected.",
        "The problem remains a challenge.",
      ],
    },
    {
      type: "Apposition",
      example: "My friend, a talented musician, performed yesterday.",
      advanced_examples: [
        "The CEO, a visionary leader, announced new policies.",
        "Tokyo, the capital of Japan, is very crowded.",
        "The concept of sustainability, a growing concern, influences policy.",
      ],
    },
  ],

  recognition: [
    "Thường đứng sau mạo từ (a, an, the), tính từ (beautiful city), số từ (two books)",
    "Danh từ đếm được có hình thức số nhiều: book → books",
    "Danh từ không đếm được không dùng 'a/an', không có số nhiều: ~an information~ ❌",
    "Danh từ riêng luôn viết hoa: Vietnam, Microsoft",
    "Can be modified by adjectives: beautiful house, important decision",
    "Can be replaced by pronouns: The book is interesting → It is interesting",
    "Often follow prepositions: in the house, on the table, about freedom",
    "Can be subjects or objects in sentences",
    "May have suffixes like -tion, -ness, -ment, -ity, -ism",
  ],

  examples: {
    common: [
      "table",
      "city",
      "dog",
      "student",
      "computer",
      "problem",
      "solution",
      "method",
    ],
    proper: [
      "Alice",
      "Vietnam",
      "Amazon",
      "Christmas",
      "Harvard",
      "Microsoft",
      "Shakespeare",
      "Einstein",
    ],
    countable: [
      "apple",
      "chair",
      "pen",
      "idea",
      "mistake",
      "opportunity",
      "challenge",
      "achievement",
    ],
    uncountable: [
      "milk",
      "money",
      "advice",
      "music",
      "research",
      "equipment",
      "furniture",
      "progress",
    ],
    collective: [
      "team",
      "family",
      "government",
      "crew",
      "staff",
      "committee",
      "audience",
      "jury",
    ],
    abstract: [
      "love",
      "justice",
      "anger",
      "peace",
      "wisdom",
      "courage",
      "democracy",
      "creativity",
    ],
    compound: [
      "toothbrush",
      "police officer",
      "swimming pool",
      "mother-in-law",
      "greenhouse",
      "breakthrough",
      "headquarters",
      "self-confidence",
    ],
  },

  common_mistakes: {
    countable_uncountable: [
      "❌ I need an information → ✅ I need some information",
      "❌ He gave me advices → ✅ He gave me advice/some advice",
      "❌ We bought furnitures → ✅ We bought furniture/some furniture",
      "❌ I have many homeworks → ✅ I have much homework/a lot of homework",
    ],
    plural_forms: [
      "❌ childs → ✅ children",
      "❌ mans → ✅ men",
      "❌ foots → ✅ feet",
      "❌ sheeps → ✅ sheep (same form)",
    ],
    articles: [
      "❌ I am student → ✅ I am a student",
      "❌ The love is important → ✅ Love is important",
      "❌ I like the music → ✅ I like music (in general)",
    ],
    possessive: [
      "❌ The car of John → ✅ John's car",
      "❌ The books of the students → ✅ The students' books",
      "❌ A friend of me → ✅ A friend of mine",
    ],
  },

  advanced_topics: {
    zero_article: {
      definition: "When no article is used before nouns",
      cases: [
        "General abstract nouns: Love conquers all",
        "Plural countable nouns in general: Dogs are loyal",
        "Uncountable nouns in general: Water is essential",
        "Proper nouns: London is beautiful",
        "Some expressions: by car, at school, in hospital",
      ],
    },

    partitive_constructions: {
      definition: "Expressions that indicate part of a whole",
      examples: [
        "a piece of cake/advice/information",
        "a slice of bread/pizza/life",
        "a drop of water/rain",
        "a grain of sand/rice",
        "a strand of hair",
        "a speck of dust",
      ],
    },

    semantic_roles: {
      agent:
        "The person/thing doing the action: The teacher explained the lesson",
      patient:
        "The person/thing affected: The lesson was explained by the teacher",
      instrument: "The tool used: She wrote with a pen",
      location: "Where something happens: The meeting took place in the office",
      time: "When something happens: The event occurred yesterday",
    },
  },

  notes: [
    "Một số danh từ có thể là đếm được **và** không đếm được tùy ngữ cảnh (e.g., **chicken** → a chicken vs. some chicken).",
    "Không dùng mạo từ với danh từ riêng trừ khi có tính từ bổ nghĩa: The great Shakespeare.",
    "Danh từ tập hợp có thể đi với động từ số ít hoặc số nhiều tùy theo ý nghĩa (e.g., The team **is/are** winning).",
    "Có danh từ chỉ dùng ở dạng số nhiều: scissors, trousers, binoculars.",
    "Một số danh từ không đếm được trong tiếng Anh nhưng lại đếm được trong tiếng Việt (e.g., **advice**, **furniture**, **homework**).",
    "Compound nouns may have stress on the first element: 'greenhouse (building) vs. green 'house (color)",
    "Some nouns change meaning in plural: glass (material) vs. glasses (eyewear)",
    "Collective nouns in American English usually take singular verbs, in British English can take plural",
    "Abstract nouns often don't take articles when used in general sense: Knowledge is power",
    "Proper nouns can become common when used generically: He's a real Einstein (genius)",
    "Some uncountable nouns can be countable in specific contexts: two coffees (cups of coffee)",
    "Nominalization is common in academic writing but can make text dense",
    "Gerunds function as nouns but retain some verbal properties: Swimming fast requires practice",
  ],

  exercises_by_level: {
    A1: [
      "Identify singular and plural nouns",
      "Choose correct article (a/an/the)",
      "Make simple nouns plural",
      "Recognize common vs proper nouns",
    ],
    A2: [
      "Distinguish countable vs uncountable nouns",
      "Use correct quantifiers (much/many/some)",
      "Form irregular plurals",
      "Basic compound noun recognition",
    ],
    B1: [
      "Use abstract nouns appropriately",
      "Work with collective nouns and verb agreement",
      "Identify gerunds functioning as nouns",
      "Build complex noun phrases",
    ],
    B2: [
      "Master advanced compound structures",
      "Practice nominalization techniques",
      "Complex possessive constructions",
      "Advanced determiners and quantifiers",
    ],
    C1: [
      "Sophisticated academic vocabulary",
      "Complex nominalization for concise writing",
      "Advanced noun phrase structures",
      "Stylistic noun choices",
    ],
    C2: [
      "Nuanced vocabulary distinctions",
      "Masterful nominalization",
      "Complex headword structures",
      "Native-like precision in usage",
    ],
  },

  morphology: {
    definition:
      "The study of the internal structure of nouns and how they are formed",
    suffixes: {
      agent_nouns: {
        definition: "Nouns that refer to a person who performs an action",
        suffixes: [
          {
            suffix: "-er",
            examples: ["teacher", "writer", "player", "worker", "driver"],
          },
          {
            suffix: "-or",
            examples: [
              "actor",
              "doctor",
              "director",
              "instructor",
              "supervisor",
            ],
          },
          {
            suffix: "-ist",
            examples: [
              "scientist",
              "artist",
              "pianist",
              "therapist",
              "journalist",
            ],
          },
          {
            suffix: "-ian",
            examples: [
              "musician",
              "politician",
              "magician",
              "electrician",
              "pediatrician",
            ],
          },
          {
            suffix: "-ant",
            examples: [
              "assistant",
              "participant",
              "consultant",
              "inhabitant",
              "applicant",
            ],
          },
          {
            suffix: "-ent",
            examples: [
              "student",
              "resident",
              "president",
              "correspondent",
              "dependent",
            ],
          },
        ],
      },
      abstract_nouns: {
        definition:
          "Suffixes that create nouns representing ideas, qualities, or states",
        suffixes: [
          {
            suffix: "-ness",
            examples: [
              "happiness",
              "darkness",
              "kindness",
              "weakness",
              "awareness",
            ],
          },
          {
            suffix: "-ity",
            examples: [
              "quality",
              "reality",
              "possibility",
              "personality",
              "creativity",
            ],
          },
          {
            suffix: "-tion",
            examples: [
              "education",
              "information",
              "organization",
              "communication",
              "investigation",
            ],
          },
          {
            suffix: "-sion",
            examples: [
              "decision",
              "confusion",
              "discussion",
              "expression",
              "impression",
            ],
          },
          {
            suffix: "-ment",
            examples: [
              "development",
              "improvement",
              "achievement",
              "entertainment",
              "arrangement",
            ],
          },
          {
            suffix: "-ism",
            examples: [
              "capitalism",
              "idealism",
              "nationalism",
              "terrorism",
              "journalism",
            ],
          },
          {
            suffix: "-dom",
            examples: ["freedom", "kingdom", "wisdom", "boredom", "stardom"],
          },
          {
            suffix: "-hood",
            examples: [
              "childhood",
              "motherhood",
              "neighborhood",
              "brotherhood",
              "likelihood",
            ],
          },
          {
            suffix: "-ship",
            examples: [
              "friendship",
              "leadership",
              "scholarship",
              "membership",
              "partnership",
            ],
          },
        ],
      },
      diminutive_nouns: {
        definition: "Suffixes that indicate small size or endearment",
        suffixes: [
          {
            suffix: "-let",
            examples: ["booklet", "piglet", "tablet", "bracelet", "leaflet"],
          },
          {
            suffix: "-ling",
            examples: [
              "duckling",
              "darling",
              "seedling",
              "yearling",
              "foundling",
            ],
          },
          {
            suffix: "-ette",
            examples: [
              "cigarette",
              "kitchenette",
              "brunette",
              "marionette",
              "statuette",
            ],
          },
          {
            suffix: "-ie/-y",
            examples: ["doggie", "birdie", "sweetie", "cutie", "rookie"],
          },
        ],
      },
    },
    prefixes: {
      definition: "Prefixes that modify noun meanings",
      examples: [
        {
          prefix: "anti-",
          meaning: "against",
          examples: ["antibody", "antibiotic", "antithesis", "antipathy"],
        },
        {
          prefix: "co-",
          meaning: "together",
          examples: ["coworker", "cooperation", "coexistence", "coordinator"],
        },
        {
          prefix: "counter-",
          meaning: "opposite",
          examples: ["counterpart", "counterargument", "counterattack"],
        },
        {
          prefix: "ex-",
          meaning: "former",
          examples: ["ex-president", "ex-wife", "ex-employee", "ex-student"],
        },
        {
          prefix: "inter-",
          meaning: "between",
          examples: ["interaction", "interview", "international", "internet"],
        },
        {
          prefix: "mis-",
          meaning: "wrong",
          examples: ["mistake", "misunderstanding", "misconduct", "misfortune"],
        },
        {
          prefix: "over-",
          meaning: "excessive",
          examples: ["overwork", "overflow", "overload", "overdose"],
        },
        {
          prefix: "pre-",
          meaning: "before",
          examples: ["preview", "preparation", "prehistoric", "prejudice"],
        },
        {
          prefix: "re-",
          meaning: "again",
          examples: [
            "research",
            "revolution",
            "reconstruction",
            "relationship",
          ],
        },
        {
          prefix: "sub-",
          meaning: "under",
          examples: ["subway", "submarine", "subdivision", "subcommittee"],
        },
        {
          prefix: "super-",
          meaning: "above",
          examples: ["supermarket", "superhero", "supervisor", "superiority"],
        },
        {
          prefix: "ultra-",
          meaning: "beyond",
          examples: ["ultraviolet", "ultrasound", "ultramodern"],
        },
      ],
    },
    word_formation_processes: {
      conversion: {
        definition: "Using words from other parts of speech as nouns",
        examples: [
          "verb to noun: run → a run, walk → a walk, talk → a talk",
          "adjective to noun: poor → the poor, rich → the rich, young → the young",
          "compound conversion: breakdown, makeup, workout, takeoff",
        ],
      },
      blending: {
        definition: "Combining parts of two words",
        examples: [
          "brunch (breakfast + lunch)",
          "smog (smoke + fog)",
          "motel (motor + hotel)",
          "email (electronic + mail)",
        ],
      },
      clipping: {
        definition: "Shortening longer words",
        examples: [
          "ad (advertisement)",
          "lab (laboratory)",
          "gym (gymnasium)",
          "phone (telephone)",
          "photo (photograph)",
        ],
      },
      acronyms: {
        definition: "Words formed from initial letters",
        examples: [
          "NASA",
          "radar",
          "scuba",
          "AIDS",
          "laser",
          "CEO",
          "FBI",
          "DNA",
        ],
      },
    },
  },

  syntactic_functions: {
    definition: "How nouns function grammatically in sentences",
    functions: {
      subject: {
        definition: "The doer of the action or topic of the sentence",
        examples: [
          "Simple: The cat sleeps.",
          "Complex: The extremely intelligent student solved the problem.",
          "Compound: John and Mary are coming.",
          "Clause as subject: What he said surprised everyone.",
          "Gerund as subject: Swimming is excellent exercise.",
          "Infinitive as subject: To succeed requires dedication.",
        ],
      },
      direct_object: {
        definition: "Receives the action of a transitive verb",
        examples: [
          "Simple: She bought a car.",
          "Complex: They discussed the environmental implications of the new policy.",
          "Multiple objects: He gave me a book and a pen.",
          "Clause as object: I know what you mean.",
          "Gerund as object: I enjoy reading novels.",
        ],
      },
      indirect_object: {
        definition: "The recipient of the direct object",
        examples: [
          "Standard: She gave him a present.",
          "Complex: The teacher explained the students the difficult concept.",
          "With preposition: She gave a present to him.",
          "Academic: The research provided scientists valuable insights.",
        ],
      },
      subject_complement: {
        definition: "Renames or describes the subject after linking verbs",
        examples: [
          "Identity: She is a doctor.",
          "Description: The solution seems reasonable.",
          "Complex: His greatest achievement was becoming a published author.",
          "Predicate nominative: The winner is Sarah.",
        ],
      },
      object_complement: {
        definition: "Describes or renames the direct object",
        examples: [
          "They elected him president.",
          "We consider her a genius.",
          "The board appointed Sarah director.",
          "I found the book interesting.",
        ],
      },
      prepositional_object: {
        definition: "Object of a preposition",
        examples: [
          "Location: in the house, on the table, under the bridge",
          "Time: during the meeting, after the ceremony, before breakfast",
          "Manner: with enthusiasm, by accident, through hard work",
          "Complex: in accordance with international regulations",
        ],
      },
    },
  },

  semantic_properties: {
    definition: "Meaning-related characteristics of nouns",
    animacy: {
      animate: {
        definition: "Living beings capable of movement",
        subcategories: {
          human: ["person", "child", "doctor", "teacher", "politician"],
          animal: ["dog", "cat", "elephant", "bird", "fish"],
          personified: ["Mother Nature", "Father Time", "Lady Luck"],
        },
      },
      inanimate: {
        definition: "Non-living things",
        subcategories: {
          concrete: ["table", "car", "building", "computer", "book"],
          abstract: ["love", "freedom", "democracy", "justice", "happiness"],
          natural_phenomena: ["earthquake", "storm", "sunrise", "wind"],
        },
      },
    },
    definiteness: {
      definite: {
        definition: "Specific, identifiable referents",
        examples: [
          "the book I bought",
          "the President of the United States",
          "the sun",
        ],
        determiners: ["the", "this", "that", "these", "those"],
      },
      indefinite: {
        definition: "Non-specific referents",
        examples: ["a book", "some students", "any problem", "several ideas"],
        determiners: ["a", "an", "some", "any", "several", "many", "few"],
      },
    },
    specificity: {
      specific: {
        definition: "Particular, identifiable instances",
        examples: [
          "I met a doctor yesterday (specific doctor)",
          "The book on the table",
        ],
      },
      generic: {
        definition: "General categories or types",
        examples: [
          "A doctor should be compassionate",
          "Books are important",
          "The whale is a mammal",
        ],
      },
    },
  },

  cross_linguistic_aspects: {
    definition: "How nouns vary across languages and cultures",
    cultural_concepts: {
      definition: "Nouns that express culture-specific ideas",
      examples: [
        { concept: "hygge", language: "Danish", meaning: "cozy contentment" },
        {
          concept: "ubuntu",
          language: "Zulu",
          meaning: "humanity, interconnectedness",
        },
        {
          concept: "saudade",
          language: "Portuguese",
          meaning: "deep longing",
        },
        {
          concept: "schadenfreude",
          language: "German",
          meaning: "pleasure from others' misfortune",
        },
        {
          concept: "wabi-sabi",
          language: "Japanese",
          meaning: "beauty in imperfection",
        },
      ],
    },
    borrowed_nouns: {
      definition: "Nouns adopted from other languages",
      categories: {
        food: ["pasta", "sushi", "croissant", "taco", "kebab", "dim sum"],
        technology: ["robot", "karaoke", "tsunami", "origami"],
        arts: ["ballet", "opera", "piano", "guitar", "cinema"],
        clothing: ["kimono", "sari", "poncho", "beret", "sarong"],
        philosophy: ["karma", "nirvana", "zen", "feng shui", "yoga"],
      },
    },
    false_friends: {
      definition:
        "Nouns that look similar but have different meanings in different languages",
      examples: [
        "actual (current) vs Spanish actual (current/present)",
        "fabric (cloth) vs French fabrique (factory)",
        "library (book collection) vs Spanish librería (bookstore)",
      ],
    },
  },

  register_and_style: {
    definition: "How noun choice varies by formality and context",
    formal_vs_informal: {
      formal: {
        characteristics: [
          "Latinate origins",
          "longer words",
          "technical terminology",
        ],
        examples: [
          "assistance",
          "residence",
          "correspondence",
          "expenditure",
          "legislation",
        ],
      },
      informal: {
        characteristics: [
          "Germanic origins",
          "shorter words",
          "everyday vocabulary",
        ],
        examples: ["help", "home", "letter", "cost", "law"],
      },
      pairs: [
        { formal: "accommodation", informal: "place to stay" },
        { formal: "remuneration", informal: "pay" },
        { formal: "precipitation", informal: "rain" },
        { formal: "transportation", informal: "ride" },
        { formal: "illumination", informal: "light" },
      ],
    },
    academic_vs_conversational: {
      academic: {
        characteristics: [
          "nominalization",
          "technical terms",
          "abstract concepts",
        ],
        examples: [
          "methodology",
          "paradigm",
          "hypothesis",
          "correlation",
          "synthesis",
        ],
      },
      conversational: {
        characteristics: [
          "concrete terms",
          "simple vocabulary",
          "personal references",
        ],
        examples: ["way", "idea", "guess", "connection", "combination"],
      },
    },
    regional_variations: {
      british_vs_american: [
        { british: "lift", american: "elevator" },
        { british: "lorry", american: "truck" },
        { british: "biscuit", american: "cookie" },
        { british: "jumper", american: "sweater" },
        { british: "rubber", american: "eraser" },
      ],
    },
  },

  discourse_functions: {
    definition: "How nouns function in connected speech and writing",
    cohesion: {
      reference: {
        anaphoric: "Referring back: John arrived. The man was tired.",
        cataphoric:
          "Referring forward: Here's the news: the meeting is cancelled.",
        exophoric: "Referring to context: Pass me that book (pointing)",
      },
      lexical_cohesion: {
        repetition: "Using the same noun: The book... the book... the book",
        synonymy: "Using synonyms: car... vehicle... automobile",
        hyponymy: "General to specific: animal... dog... poodle",
        meronymy: "Part-whole: house... room... window",
      },
    },
    information_structure: {
      given_new: {
        given: "Previously mentioned information",
        new: "First-time introduction of information",
        example:
          "I bought a car yesterday. The car is red. (car = given, red = new)",
      },
      topic_comment: {
        topic: "What the sentence is about",
        comment: "What is said about the topic",
        example: "Education is extremely important. (Education = topic)",
      },
    },
  },

  pragmatic_aspects: {
    definition: "How context affects noun meaning and usage",
    speech_acts: {
      requests:
        "Could you pass the salt? (using definite article for shared knowledge)",
      complaints: "The noise is unbearable! (emphasizing specific instance)",
      compliments: "What a beautiful house! (exclamatory structure)",
    },
    politeness: {
      direct: "Give me the book.",
      indirect: "Could I borrow that interesting book you mentioned?",
      formal: "I would appreciate access to the aforementioned document.",
    },
    implicature: {
      definition: "Implied meanings beyond literal sense",
      examples: [
        "He's a real Einstein (implying genius, not the actual person)",
        "She's no Mother Teresa (implying lack of saintliness)",
        "This place is a zoo (implying chaos, not actual zoo)",
      ],
    },
  },

  learning_difficulties: {
    definition: "Common challenges for language learners",
    l1_interference: {
      definition: "Native language influencing English noun usage",
      examples: [
        "Chinese speakers: difficulty with articles (no articles in Chinese)",
        "Spanish speakers: gender attribution where English has none",
        "Arabic speakers: different plural formation patterns",
        "Japanese speakers: count/non-count distinction challenges",
      ],
    },
    developmental_stages: {
      beginner: [
        "Confusing countable/uncountable",
        "Article omission or overuse",
        "Literal translation of compound nouns",
        "Plural formation errors",
      ],
      intermediate: [
        "Abstract noun usage difficulties",
        "Complex noun phrase construction",
        "Collocation errors",
        "Register inappropriate choices",
      ],
      advanced: [
        "Subtle meaning distinctions",
        "Academic nominalization overuse",
        "Cultural concept understanding",
        "Stylistic variation mastery",
      ],
    },
  },

  assessment_criteria: {
    definition: "How to evaluate noun usage proficiency",
    accuracy: {
      morphological: "Correct plural formation, proper derivation",
      syntactic: "Appropriate grammatical positioning",
      semantic: "Correct meaning and reference",
      pragmatic: "Context-appropriate usage",
    },
    complexity: {
      lexical: "Vocabulary range and sophistication",
      structural: "Complex noun phrase construction",
      discoursal: "Effective text cohesion through noun use",
    },
    fluency: {
      automaticity: "Natural, unconscious noun selection",
      speed: "Rapid access to appropriate nouns",
      flexibility: "Ability to reformulate using different nouns",
    },
  },

  digital_age_nouns: {
    definition: "New nouns emerging from technology and digital culture",
    technology: [
      "smartphone",
      "selfie",
      "hashtag",
      "emoji",
      "meme",
      "blog",
      "podcast",
      "livestream",
      "screenshot",
      "download",
      "upload",
      "wifi",
      "bluetooth",
      "cybersecurity",
      "cryptocurrency",
      "blockchain",
      "algorithm",
      "metadata",
    ],
    social_media: [
      "follower",
      "influencer",
      "content creator",
      "viral video",
      "trending topic",
      "newsfeed",
      "timeline",
      "notification",
      "profile",
      "avatar",
      "handle",
    ],
    remote_work: [
      "telecommuting",
      "video conference",
      "webinar",
      "screen sharing",
      "virtual meeting",
      "digital nomad",
      "coworking space",
      "cloud storage",
    ],
    gaming: [
      "gameplay",
      "avatar",
      "leaderboard",
      "achievement",
      "downloadable content",
      "multiplayer",
      "virtual reality",
      "augmented reality",
      "esports",
    ],
  },

  specialized_domains: {
    definition: "Field-specific noun usage patterns",
    academic_writing: {
      characteristics: [
        "heavy nominalization",
        "technical terminology",
        "abstract concepts",
      ],
      examples: [
        "methodology",
        "analysis",
        "interpretation",
        "synthesis",
        "correlation",
      ],
    },
    business: {
      characteristics: [
        "corporate terminology",
        "process nouns",
        "strategic vocabulary",
      ],
      examples: [
        "stakeholder",
        "deliverable",
        "synergy",
        "optimization",
        "ROI",
      ],
    },
    legal: {
      characteristics: [
        "precise definitions",
        "formal language",
        "procedural terms",
      ],
      examples: [
        "plaintiff",
        "jurisdiction",
        "litigation",
        "precedent",
        "testimony",
      ],
    },
    medical: {
      characteristics: [
        "Latin/Greek origins",
        "anatomical terms",
        "diagnostic vocabulary",
      ],
      examples: [
        "diagnosis",
        "prognosis",
        "symptoms",
        "pathology",
        "therapeutics",
      ],
    },
    scientific: {
      characteristics: [
        "precise terminology",
        "process descriptions",
        "measurement units",
      ],
      examples: [
        "hypothesis",
        "methodology",
        "correlation",
        "variable",
        "specimen",
      ],
    },
  },
};

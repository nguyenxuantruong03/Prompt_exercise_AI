import { ArticlesType } from "@/types/grammars/grammar/Articles";

export const ArticlesData: ArticlesType = {
  // --- Comprehensive Articles Reference with Linguistic Foundation ---
  articlesDefinition: {
    concept:
      "Articles are determiners that specify the definiteness of nouns, indicating whether something is specific, general, or unique within a discourse context.",
    importance:
      "Essential for natural English expression, grammatical accuracy, and effective communication in academic, professional, and social contexts",
    corePrinciple:
      "Articles function as grammatical markers that help distinguish between specific and general references, establish discourse coherence, and signal shared knowledge between speaker and listener",
    scope:
      "Applies to all noun phrases in English, affecting meaning, clarity, register, and stylistic appropriateness across all communicative contexts",
    linguisticBackground:
      "Articles belong to the determiner system in English grammar, functioning as closed-class words that modify noun phrases by specifying their reference properties within discourse context",
    references: {
      books: [
        "Huddleston, R. & Pullum, G. K. (2002). The Cambridge Grammar of the English Language",
        "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language",
        "Swan, M. (2016). Practical English Usage (4th Edition)",
      ],
      websites: [
        "Cambridge Dictionary Grammar: https://dictionary.cambridge.org/grammar/",
        "Oxford English Grammar: https://www.oxfordlearnersdictionaries.com/grammar/",
        "British Council Grammar: https://learnenglish.britishcouncil.org/grammar/",
      ],
      researchPapers: [
        "Ionin, T. (2006). This is definitely specific: specificity and definiteness in article systems",
        "Lyons, C. (1999). Definiteness. Cambridge University Press",
      ],
    },
  },

  // A1 Level - Foundational Article Knowledge
  A1: {
    definition:
      "Fundamental article usage with basic noun types, focusing on core patterns for everyday communication",
    keyLearningPoints: [
      "Distinguish between 'a' and 'an' based on sound, not spelling",
      "Use 'the' when referring to something specific or previously mentioned",
      "Understand when not to use articles with basic noun types",
      "Apply articles correctly in simple present tense sentences",
    ],
    detailedConcepts: {
      indefiniteArticleBasics: {
        explanation:
          "The indefinite articles 'a' and 'an' introduce new, non-specific singular countable nouns into discourse. The choice depends on the initial sound of the following word, not its spelling.",
        patterns: {
          concept: "Sound-based article selection for singular countable nouns",
          patterns: [
            "a + consonant sound: a dog, a book, a university (sounds like 'yu'), a European",
            "an + vowel sound: an apple, an hour (silent 'h'), an honest person, an MBA",
          ],
          examples: [
            "I need a pen to write.",
            "She bought an umbrella yesterday.",
            "He wants to be a teacher.",
            "They live in an old house.",
          ],
          notes: [
            "Focus on pronunciation, not spelling",
            "Silent letters affect article choice",
            "Acronyms follow sound rules",
          ],
        },
        commonMistakes: [
          "Using 'an' before consonant sounds: *an university → a university",
          "Using 'a' before vowel sounds: *a hour → an hour",
        ],
        practicePoints: [
          "Practice with words starting with silent letters",
          "Listen to pronunciation rather than reading spelling",
          "Learn common exceptions like 'university', 'European'",
        ],
        references: [
          "Swan, M. (2016). Practical English Usage, Section 69-71",
          "Murphy, R. (2019). English Grammar in Use, Unit 69-70",
        ],
      },
      definiteArticleBasics: {
        explanation:
          "The definite article 'the' refers to specific nouns that are identifiable to both speaker and listener, either through previous mention, shared knowledge, or unique reference.",
        patterns: {
          concept: "Specific reference and shared knowledge marking",
          patterns: [
            "the + previously mentioned noun: I saw a cat. The cat was sleeping.",
            "the + unique objects: the sun, the moon, the earth, the sky",
            "the + specific known objects: the door, the kitchen, the car (when context is clear)",
          ],
          examples: [
            "Please close the door.",
            "The sun is very bright today.",
            "I left my keys in the car.",
            "The teacher explained the lesson.",
          ],
        },
        commonMistakes: [
          "Omitting 'the' with unique objects: *Sun is bright → The sun is bright",
          "Using 'the' with general statements: *The cats are animals → Cats are animals",
        ],
        practicePoints: [
          "Identify what makes a noun specific in context",
          "Practice with unique objects in nature",
          "Use with second mentions in simple stories",
        ],
        references: [
          "Thomson, A.J. & Martinet, A.V. (2020). A Practical English Grammar, Chapter 6",
          "Cambridge English Grammar: Articles for beginners",
        ],
      },
      zeroArticleBasics: {
        explanation:
          "Zero article (no article) is used with plural countable nouns and uncountable nouns when making general statements, and with proper nouns.",
        patterns: {
          concept: "General statements and proper noun usage",
          patterns: [
            "∅ + plural countable nouns (general): Dogs are loyal animals",
            "∅ + uncountable nouns (general): Water is essential for life",
            "∅ + proper nouns: John, London, Christmas",
          ],
          examples: [
            "Children love toys.",
            "Music makes me happy.",
            "I study English.",
            "Mary lives in Paris.",
          ],
        },
        commonMistakes: [
          "Adding articles to proper nouns: *the John → John",
          "Using articles with general uncountable nouns: *the music → music",
        ],
        practicePoints: [
          "Distinguish between specific and general meanings",
          "Learn common uncountable nouns",
          "Practice with names and places",
        ],
        references: [
          "Eastwood, J. (2022). Oxford Practice Grammar Basic, Unit 23-24",
        ],
      },
    },
    mastery: {
      canDo: [
        "Use 'a' and 'an' correctly with simple nouns",
        "Apply 'the' with previously mentioned nouns",
        "Omit articles with basic proper nouns and general statements",
        "Form simple sentences with correct article usage",
      ],
      shouldAvoid: [
        "Confusing sound and spelling for 'a/an' choice",
        "Overusing 'the' with general statements",
        "Adding articles to proper nouns",
      ],
    },
    references: {
      books: [
        "Murphy, R. (2019). Essential Grammar in Use (4th Edition), Units 69-72",
        "Eastwood, J. (2022). Oxford Practice Grammar Basic, Units 23-25",
      ],
      websites: [
        "BBC Learning English Grammar: https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1",
        "EnglishClub Grammar: https://www.englishclub.com/grammar/determiners-articles.htm",
      ],
      academicSources: [
        "Council of Europe (2020). Common European Framework of Reference for Languages: A1 Level Descriptors",
      ],
    },
  },

  // A2 Level - Expanding Article Knowledge
  A2: {
    definition:
      "Extended article usage covering professions, nationalities, superlatives, and ordinal numbers, with introduction to geographical names",
    keyLearningPoints: [
      "Use articles with professions and nationalities",
      "Apply articles with superlatives and ordinal numbers",
      "Understand basic geographical article patterns",
      "Recognize article usage with time expressions",
    ],
    detailedConcepts: {
      articlesWithProfessions: {
        explanation:
          "Indefinite articles are used when stating someone's profession, while definite articles specify particular individuals in professional contexts.",
        patterns: {
          concept: "Professional and occupational article usage",
          patterns: [
            "a/an + profession: I am a teacher, She is an engineer",
            "the + specific professional: The doctor who treated me, The teacher in our school",
          ],
          examples: [
            "My father is a lawyer.",
            "She wants to become an artist.",
            "The pilot announced our arrival.",
            "I need to see the dentist.",
          ],
        },
        commonMistakes: [
          "Omitting articles with professions: *I am teacher → I am a teacher",
        ],
        practicePoints: [
          "Practice job vocabulary with appropriate articles",
          "Distinguish between general and specific professional references",
        ],
        references: ["Vince, M. (2019). English Grammar in Context, Chapter 4"],
      },
      articlesWithNationalities: {
        explanation:
          "Indefinite articles are used with singular nationality adjectives functioning as nouns, while zero article is used with nationality adjectives modifying nouns.",
        patterns: {
          concept: "Nationality and ethnic identity article patterns",
          patterns: [
            "a/an + nationality as noun: She is an American, He is a German",
            "∅ + nationality adjective: She is American, He is German",
            "the + nationality group: The British, The Japanese",
          ],
          examples: [
            "I met a Canadian yesterday.",
            "She speaks French fluently.",
            "The Chinese have a rich culture.",
            "He is Italian by birth.",
          ],
        },
        commonMistakes: [
          "Adding articles to nationality adjectives: *He is a British → He is British",
        ],
        practicePoints: [
          "Learn nationality words and their article patterns",
          "Practice distinguishing noun and adjective functions",
        ],
        references: ["Swan, M. (2016). Practical English Usage, Section 426"],
      },
      superlativesAndOrdinals: {
        explanation:
          "The definite article 'the' is obligatory with superlative adjectives and ordinal numbers, as they inherently specify unique or ranked positions.",
        patterns: {
          concept: "Ranking and uniqueness marking with articles",
          patterns: [
            "the + superlative: the best, the most beautiful, the fastest",
            "the + ordinal number: the first, the second, the twenty-first",
          ],
          examples: [
            "This is the best movie I've ever seen.",
            "She lives on the third floor.",
            "He won the most important prize.",
            "January is the first month.",
          ],
        },
        commonMistakes: [
          "Omitting 'the' with superlatives: *This is best movie → This is the best movie",
        ],
        practicePoints: [
          "Always use 'the' with superlative forms",
          "Practice ordinal numbers with 'the'",
        ],
        references: [
          "Alexander, L.G. (2019). Longman English Grammar Practice, Chapter 8",
        ],
      },
      basicGeographicalNames: {
        explanation:
          "Most geographical names follow specific article patterns based on their type and linguistic properties.",
        patterns: {
          concept: "Basic geographical reference patterns",
          patterns: [
            "∅ + most countries: France, Japan, Brazil",
            "∅ + continents: Europe, Asia, Africa",
            "∅ + cities: London, Tokyo, New York",
            "the + countries with descriptive names: the United States, the United Kingdom",
          ],
          examples: [
            "I visited France last summer.",
            "Tokyo is in Japan.",
            "She lives in the United States.",
            "Africa is a large continent.",
          ],
        },
        commonMistakes: [
          "Adding 'the' to simple country names: *the France → France",
        ],
        practicePoints: [
          "Learn major countries and their article usage",
          "Remember exceptions like 'the USA', 'the UK'",
        ],
        references: ["Murphy, R. (2019). English Grammar in Use, Unit 71"],
      },
    },
    mastery: {
      canDo: [
        "Use articles correctly with professions and nationalities",
        "Apply 'the' consistently with superlatives and ordinals",
        "Use basic geographical names with appropriate articles",
        "Form comparative statements with correct article usage",
      ],
      shouldAvoid: [
        "Omitting articles with professions",
        "Forgetting 'the' with superlatives",
        "Incorrectly adding 'the' to simple country names",
      ],
    },
    references: {
      books: [
        "Murphy, R. (2019). English Grammar in Use (4th Edition), Units 71-74",
        "Vince, M. (2019). English Grammar in Context, Chapters 4-5",
      ],
      websites: [
        "Cambridge English Grammar: A2 Level Articles",
        "British Council LearnEnglish: Elementary Grammar",
      ],
      academicSources: [
        "Council of Europe (2020). CEFR A2 Level Descriptors for Grammar",
      ],
    },
  },

  // B1 Level - Intermediate Article Mastery
  B1: {
    definition:
      "Complex article usage with abstract nouns, geographical names, institutions, and academic contexts, developing discourse-level article competence",
    keyLearningPoints: [
      "Master article usage with abstract and uncountable nouns in specific contexts",
      "Apply comprehensive geographical article rules",
      "Use articles correctly with institutions and organizations",
      "Understand article patterns in academic and formal writing",
    ],
    detailedConcepts: {
      abstractNounArticles: {
        explanation:
          "Abstract nouns can take different articles depending on whether they refer to general concepts or specific instances, requiring careful attention to context and intended meaning.",
        patterns: {
          concept: "Context-dependent article usage with abstract concepts",
          patterns: [
            "∅ + abstract noun (general concept): Love is important, Knowledge is power",
            "the + abstract noun (specific instance): The love I feel for you, The knowledge gained from this course",
            "a/an + abstract noun (particular type): A love for music, An understanding of science",
          ],
          examples: [
            "Happiness cannot be bought.",
            "The happiness we shared was special.",
            "She has a deep understanding of psychology.",
            "Understanding requires patience.",
          ],
          notes: [
            "Context determines article choice",
            "Prepositional phrases often make abstract nouns specific",
            "Relative clauses typically require 'the'",
          ],
        },
        commonMistakes: [
          "Using 'the' with general abstract nouns: *The love is beautiful → Love is beautiful",
          "Omitting 'the' with specific abstract nouns: *Love I have → The love I have",
        ],
        practicePoints: [
          "Analyze context to determine specific vs. general reference",
          "Practice with common abstract nouns: love, happiness, knowledge, freedom",
          "Study how prepositional phrases affect article choice",
        ],
        references: [
          "Biber, D. et al. (1999). Longman Grammar of Spoken and Written English, Chapter 4",
          "Huddleston, R. & Pullum, G. K. (2002). Cambridge Grammar, Chapter 5",
        ],
      },
      comprehensiveGeographical: {
        explanation:
          "Geographical names follow complex but systematic article patterns based on their linguistic structure, historical development, and semantic properties.",
        patterns: {
          concept: "Systematic geographical article patterns",
          patterns: [
            "the + countries with plural/descriptive names: the Netherlands, the Philippines, the Czech Republic",
            "the + geographical features: the Alps, the Sahara, the Pacific Ocean, the River Thames",
            "∅ + individual mountains/lakes: Mount Everest, Lake Superior, Ben Nevis",
            "the + groups of islands: the Canary Islands, the Maldives",
          ],
          examples: [
            "The Netherlands is famous for tulips.",
            "Mount Fuji is in Japan.",
            "She sailed across the Atlantic Ocean.",
            "We visited the Scottish Highlands.",
          ],
          notes: [
            "Historical and linguistic factors determine patterns",
            "Consistency within geographical categories",
            "Regional variations exist",
          ],
        },
        commonMistakes: [
          "Omitting 'the' with required geographical names: *Alps are beautiful → The Alps are beautiful",
          "Adding 'the' where not needed: *the Mount Everest → Mount Everest",
        ],
        practicePoints: [
          "Memorize major geographical features and their articles",
          "Understand the logic behind geographical article patterns",
          "Practice with world geography vocabulary",
        ],
        references: [
          "Swan, M. (2016). Practical English Usage, Sections 69.10-69.15",
          "Close, R.A. (1981). English as a Foreign Language, Chapter 7",
        ],
      },
      institutionalArticles: {
        explanation:
          "Institutions, organizations, and establishments follow specific article patterns based on their naming conventions and social functions.",
        patterns: {
          concept: "Institutional and organizational reference patterns",
          patterns: [
            "the + institutions with descriptive names: the University of Oxford, the Bank of England",
            "∅ + institutions used functionally: go to university, in hospital, at school",
            "the + specific institutions: the school where I teach, the hospital on Main Street",
          ],
          examples: [
            "She studies at the University of Cambridge.",
            "He's in hospital with pneumonia.",
            "The school needs new equipment.",
            "I work at university.",
          ],
          notes: [
            "British vs. American usage differences exist",
            "Functional vs. specific reference distinction",
            "Prepositional usage affects article choice",
          ],
        },
        commonMistakes: [
          "Using articles with functional references: *in the hospital (when general) → in hospital (British)",
          "Omitting articles with specific institutions: *University of Oxford → The University of Oxford",
        ],
        practicePoints: [
          "Learn British vs. American institutional article patterns",
          "Distinguish functional from specific institutional references",
          "Practice with common institutions: school, hospital, university, church",
        ],
        references: [
          "Leech, G. & Svartvik, J. (2019). A Communicative Grammar of English, Chapter 6",
        ],
      },
    },
    mastery: {
      canDo: [
        "Use articles appropriately with abstract nouns in context",
        "Apply geographical article rules consistently",
        "Navigate institutional article patterns",
        "Distinguish between general and specific references in complex contexts",
      ],
      shouldAvoid: [
        "Overgeneralizing article rules across different noun categories",
        "Ignoring context when choosing articles with abstract nouns",
        "Confusing British and American institutional article patterns",
      ],
    },
    references: {
      books: [
        "Murphy, R. (2019). English Grammar in Use (4th Edition), Units 72-76",
        "Vince, M. (2019). English Grammar in Context, Chapters 6-8",
        "Swan, M. (2016). Practical English Usage, Sections 69-71",
      ],
      websites: [
        "Cambridge Advanced Learner's Dictionary Grammar Guide",
        "Oxford Learner's Dictionaries Grammar Section",
      ],
      academicSources: [
        "Council of Europe (2020). CEFR B1 Level Descriptors",
        "Hawkins, J.A. (1978). Definiteness and Indefiniteness. Croom Helm",
      ],
    },
  },

  // B2 Level - Upper Intermediate Article Mastery
  B2: {
    definition:
      "Advanced article usage with complex noun phrases, academic discourse, and nuanced contextual distinctions requiring sophisticated understanding of definiteness",
    keyLearningPoints: [
      "Navigate complex noun phrase structures with appropriate articles",
      "Master article usage in academic and professional discourse",
      "Understand subtle differences in meaning through article choice",
      "Apply articles correctly in formal and semi-formal registers",
    ],
    detailedConcepts: {
      complexNounPhrases: {
        explanation:
          "Complex noun phrases involving multiple modifiers, relative clauses, and prepositional phrases require careful attention to article choice based on the head noun's definiteness and the function of modifiers.",
        patterns: {
          concept: "Multi-layered noun phrase article selection",
          patterns: [
            "the + adjective + noun + prepositional phrase: the beautiful house on the hill",
            "a/an + adjective + noun + relative clause: a student who studies hard",
            "the + superlative + noun + of-phrase: the most important decision of my life",
            "∅ + abstract noun + prepositional phrase (general): research in linguistics",
          ],
          examples: [
            "The comprehensive study of language acquisition was published.",
            "A researcher working on this project contacted me.",
            "The most significant finding of the investigation surprised everyone.",
            "Research in cognitive science has advanced rapidly.",
          ],
          notes: [
            "Relative clauses often make nouns definite",
            "Prepositional phrases can specify or generalize",
            "Superlatives always require 'the'",
          ],
        },
        commonMistakes: [
          "Omitting 'the' with post-modified nouns: *Student who called → The student who called",
          "Using 'the' with general research: *The research shows → Research shows (when general)",
        ],
        practicePoints: [
          "Analyze whether modifiers make nouns specific or remain general",
          "Practice with academic noun phrases",
          "Distinguish between restrictive and non-restrictive modification",
        ],
        references: [
          "Greenbaum, S. & Quirk, R. (1990). A Student's Grammar of the English Language",
          "Huddleston, R. & Pullum, G. K. (2002). Cambridge Grammar, Chapter 5",
        ],
      },
      academicRegisterArticles: {
        explanation:
          "Academic writing requires precise article usage that reflects the writer's stance toward knowledge claims, research findings, and theoretical concepts.",
        patterns: {
          concept: "Academic discourse article conventions",
          patterns: [
            "the + specific research/studies: the study conducted by Smith (2020)",
            "∅ + general research areas: research shows, studies indicate",
            "a/an + hypothetical examples: a society where inequality exists",
            "the + established theories: the theory of evolution, the Big Bang theory",
          ],
          examples: [
            "The research conducted at Harvard reveals significant trends.",
            "Research indicates that climate change is accelerating.",
            "A hypothesis must be testable to be scientifically valid.",
            "The theory of relativity revolutionized physics.",
          ],
          notes: [
            "Specific studies and established theories take 'the'",
            "General research concepts usually take zero article",
            "Hypothetical examples often use 'a/an'",
          ],
        },
        commonMistakes: [
          "Using 'the' with general research: *The research shows → Research shows",
          "Omitting 'the' with specific studies: *Study by Smith → The study by Smith",
        ],
        practicePoints: [
          "Distinguish between general and specific research references",
          "Learn academic collocations with articles",
          "Practice citing and referencing with appropriate articles",
        ],
        references: [
          "Swales, J.M. & Feak, C.B. (2012). Academic Writing for Graduate Students",
          "Hinkel, E. (2004). Teaching Academic ESL Writing, Chapter 8",
        ],
      },
      meaningDistinctionArticles: {
        explanation:
          "Article choice can significantly alter meaning, requiring speakers to understand subtle semantic differences conveyed through definiteness marking.",
        patterns: {
          concept: "Semantic nuances through article selection",
          patterns: [
            "the + specific instance vs. ∅ + general concept: the music I heard vs. music in general",
            "a + one of many vs. the + specific one: a solution vs. the solution",
            "the + shared knowledge vs. a + new information: the problem vs. a problem",
            "∅ + professional activity vs. the + specific instance: go to church vs. go to the church",
          ],
          examples: [
            "The education system needs reform. vs. Education is important.",
            "A solution must be found. vs. The solution is obvious.",
            "She went to hospital. vs. She went to the hospital to visit.",
            "The life of a teacher is challenging. vs. Life is what you make it.",
          ],
          notes: [
            "Context determines which meaning is intended",
            "Definiteness reflects shared vs. new information",
            "Cultural and regional variations exist",
          ],
        },
        commonMistakes: [
          "Confusing general and specific meanings in context",
          "Ignoring pragmatic implications of article choice",
          "Not considering cultural differences in article usage",
        ],
        practicePoints: [
          "Analyze meaning changes with different articles",
          "Practice with ambiguous contexts",
          "Study British vs. American article preferences",
        ],
        references: [
          "Lyons, C. (1999). Definiteness. Cambridge University Press, Chapters 7-8",
          "Abbott, B. (2006). Definiteness and indefiniteness in linguistics",
        ],
      },
    },
    mastery: {
      canDo: [
        "Handle complex noun phrases with appropriate articles",
        "Use articles effectively in academic and professional writing",
        "Recognize and produce subtle meaning distinctions through article choice",
        "Navigate register-appropriate article usage consistently",
      ],
      shouldAvoid: [
        "Overgeneralizing simple article rules to complex contexts",
        "Ignoring the semantic implications of article choice",
        "Confusing formal and informal article conventions",
      ],
    },
    references: {
      books: [
        "Murphy, R. (2019). English Grammar in Use (4th Edition), Units 74-78",
        "Hewings, M. (2013). Advanced Grammar in Use (3rd Edition), Units 66-70",
        "Swan, M. (2016). Practical English Usage, Sections 69-72",
      ],
      websites: [
        "Cambridge Academic English Grammar Guide",
        "Oxford Academic Writing Guide: Article Usage",
      ],
      academicSources: [
        "Council of Europe (2020). CEFR B2 Level Descriptors",
        "Master, P. (1997). The English article system: Acquisition, function, and pedagogy",
      ],
    },
  },

  // C1 Level - Advanced Article Proficiency
  C1: {
    definition:
      "Sophisticated article usage demonstrating near-native competence in complex discourse, specialized domains, and nuanced stylistic choices",
    keyLearningPoints: [
      "Master article usage in specialized professional and academic domains",
      "Understand stylistic and rhetorical effects of article choice",
      "Navigate cultural and regional variations in article usage",
      "Apply articles effectively in creative and persuasive writing",
    ],
    detailedConcepts: {
      specializedDomainArticles: {
        explanation:
          "Different professional and academic domains have specific article conventions that reflect disciplinary knowledge, methodological approaches, and communicative purposes.",
        patterns: {
          concept: "Domain-specific article conventions and practices",
          patterns: [
            "Scientific: the + specific phenomena, ∅ + general principles",
            "Legal: the + specific laws/cases, ∅ + legal concepts",
            "Medical: the + specific conditions/treatments, ∅ + general health concepts",
            "Business: the + specific companies/markets, ∅ + business principles",
          ],
          examples: [
            "The greenhouse effect contributes to climate change. / Physics governs natural phenomena.",
            "The Constitution guarantees rights. / Justice requires impartiality.",
            "The treatment showed promising results. / Medicine advances through research.",
            "The market responded positively. / Business requires strategic planning.",
          ],
          notes: [
            "Each domain has preferred article patterns",
            "Specific vs. general distinctions vary by field",
            "Professional register affects article choice",
          ],
        },
        commonMistakes: [
          "Applying general rules to specialized contexts without considering domain conventions",
          "Inconsistent article usage within specialized discourse",
          "Overlooking field-specific exceptions and preferences",
        ],
        practicePoints: [
          "Study article patterns in target professional domains",
          "Analyze authentic texts from specialized fields",
          "Practice domain-specific vocabulary with appropriate articles",
        ],
        references: [
          "Hyland, K. (2009). Academic Discourse: English in a Global Context",
          "Flowerdew, J. & Peacock, M. (2001). Research Perspectives on English for Academic Purposes",
        ],
      },
      stylisticArticleEffects: {
        explanation:
          "Article choice contributes to stylistic effects, creating emphasis, establishing tone, and achieving rhetorical purposes in sophisticated discourse.",
        patterns: {
          concept: "Rhetorical and stylistic functions of article variation",
          patterns: [
            "Emphasis through definiteness: THE answer vs. an answer",
            "Formal register: the + abstract nouns for gravity",
            "Informal register: ∅ + abstract nouns for accessibility",
            "Literary effects: unusual article usage for creative impact",
          ],
          examples: [
            "This is THE solution we've been seeking. (emphatic)",
            "The significance of this discovery cannot be overstated. (formal)",
            "Love conquers all difficulties. (accessible/universal)",
            "A darkness fell upon the land. (literary/poetic)",
          ],
          notes: [
            "Articles contribute to overall text style",
            "Emphasis and focus can be created through article choice",
            "Literary and creative texts may use unconventional patterns",
          ],
        },
        commonMistakes: [
          "Not recognizing the stylistic implications of article choice",
          "Inconsistent register through inappropriate article usage",
          "Missing opportunities for emphasis through article variation",
        ],
        practicePoints: [
          "Analyze how article choice affects tone and emphasis",
          "Practice varying articles for different rhetorical effects",
          "Study literary and persuasive texts for creative article usage",
        ],
        references: [
          "Biber, D. et al. (1999). Longman Grammar of Spoken and Written English, Chapter 4",
          "Carter, R. & McCarthy, M. (2006). Cambridge Grammar of English, Section 9",
        ],
      },
      culturalArticleVariations: {
        explanation:
          "Article usage varies across English-speaking cultures and regions, reflecting different communicative norms, historical developments, and pragmatic conventions.",
        patterns: {
          concept: "Cross-cultural and regional article usage patterns",
          patterns: [
            "British: in hospital, at university (institutional function)",
            "American: in the hospital, at the university (specific place)",
            "Australian: variations in geographical names and institutions",
            "Global English: emerging patterns in international contexts",
          ],
          examples: [
            "British: He's in hospital with flu. / American: He's in the hospital with flu.",
            "British: She's at university. / American: She's at the university.",
            "British: go to cinema / American: go to the movies",
            "Global: use of 'the' with internet, social media platforms",
          ],
          notes: [
            "Cultural context affects article preferences",
            "Register and formality interact with cultural norms",
            "Global English is developing new conventions",
          ],
        },
        commonMistakes: [
          "Not adapting article usage to target cultural context",
          "Assuming universal application of learned patterns",
          "Inconsistency when mixing cultural conventions",
        ],
        practicePoints: [
          "Learn major British/American article differences",
          "Consider target audience when choosing article patterns",
          "Study how global English affects traditional patterns",
        ],
        references: [
          "Hundt, M. & Gut, U. (2012). Mapping unity and diversity world-wide: Corpus-based studies of New Englishes",
          "Schneider, E.W. (2007). Postcolonial English: Varieties around the world",
        ],
      },
    },
    mastery: {
      canDo: [
        "Apply specialized article conventions across professional domains",
        "Use articles for sophisticated stylistic and rhetorical effects",
        "Adapt article usage to different cultural and regional contexts",
        "Demonstrate near-native intuition in complex discourse situations",
      ],
      shouldAvoid: [
        "Rigid application of rules without considering context and purpose",
        "Ignoring cultural and regional conventions in target contexts",
        "Missing opportunities for stylistic sophistication through article choice",
      ],
    },
    references: {
      books: [
        "Murphy, R. (2019). English Grammar in Use (4th Edition), Units 72-76",
        "Vince, M. (2019). English Grammar in Context, Chapters 6-8",
        "Swan, M. (2016). Practical English Usage, Sections 69-71",
      ],
      websites: [
        "Cambridge Advanced Learner's Dictionary Grammar Guide",
        "Oxford Learner's Dictionaries Grammar Section",
      ],
      academicSources: [
        "Council of Europe (2020). CEFR C1 Level Descriptors",
        "Hawkins, J.A. (1978). Definiteness and Indefiniteness. Croom Helm",
      ],
    },
  },

  // C2 Level - Native-like Article Mastery
  C2: {
    definition:
      "Complete mastery of English article system with native-like intuition, creative usage, and sophisticated understanding of all contextual, stylistic, and pragmatic dimensions",
    keyLearningPoints: [
      "Demonstrate native-like intuition in all article usage contexts",
      "Create sophisticated stylistic effects through strategic article choice",
      "Understand and apply the deepest levels of article semantics and pragmatics",
      "Navigate the most complex and ambiguous article usage situations",
    ],
    detailedConcepts: {
      nativeLikeIntuition: {
        explanation:
          "Native-like article usage involves unconscious application of complex semantic, pragmatic, and contextual factors that go beyond explicit rules, requiring deep internalization of the English article system.",
        patterns: {
          concept: "Intuitive article selection in complex discourse contexts",
          patterns: [
            "Pragmatic inference: article choice based on assumed shared knowledge",
            "Discourse-level coherence: articles maintaining textual unity",
            "Semantic nuancing: subtle meaning distinctions through definiteness",
            "Cognitive salience: articles reflecting mental prominence of referents",
          ],
          examples: [
            "The problem with that approach... (assumes shared understanding of 'that approach')",
            "A solution emerged from the discussion... The solution required... (discourse progression)",
            "The music of that era... vs. Music of that era... (specificity nuancing)",
            "The heart wants what the heart wants. (cognitive/emotional prominence)",
          ],
          notes: [
            "Native speakers rarely consciously apply article rules",
            "Intuition develops through massive exposure and practice",
            "Context and pragmatics override formal rules",
          ],
        },
        commonMistakes: [
          "Over-relying on explicit rules rather than developing intuition",
          "Not considering pragmatic implications of article choice",
          "Missing subtle contextual cues that influence article selection",
        ],
        practicePoints: [
          "Extensive reading and listening for pattern internalization",
          "Focus on meaning and context rather than rules",
          "Practice with authentic, complex discourse situations",
        ],
        references: [
          "Huebner, T. (1983). A longitudinal analysis of the acquisition of English",
          "Thomas, M. (1989). The acquisition of English articles by first and second language learners",
        ],
      },
      creativeArticleUsage: {
        explanation:
          "Advanced users can manipulate article conventions for creative, literary, and rhetorical effects, demonstrating complete mastery through innovative and purposeful usage.",
        patterns: {
          concept: "Creative and innovative article usage for special effects",
          patterns: [
            "Literary defamiliarization: unusual articles for artistic effect",
            "Rhetorical emphasis: strategic article placement for persuasion",
            "Poetic condensation: article omission for rhythmic/semantic effect",
            "Philosophical abstraction: articles with abstract concepts for precision",
          ],
          examples: [
            "The child in us never truly dies. (philosophical/universal)",
            "A Einstein would have understood this complexity. (hypothetical genius)",
            "Love, loss, redemption—these shape human experience. (poetic compression)",
            "The very essence of existence puzzles philosophers. (abstract precision)",
          ],
          notes: [
            "Creative usage requires mastery of standard patterns first",
            "Purpose and audience determine appropriateness",
            "Literary and philosophical texts often push boundaries",
          ],
        },
        commonMistakes: [
          "Attempting creative usage without mastering standard patterns",
          "Using unconventional articles without clear purpose or effect",
          "Ignoring audience expectations and contextual appropriateness",
        ],
        practicePoints: [
          "Study how master writers use articles creatively",
          "Experiment with article variation for different effects",
          "Develop sensitivity to appropriateness and purpose",
        ],
        references: [
          "Leech, G. & Short, M. (2007). Style in Fiction: A Linguistic Introduction",
          "Wales, K. (2011). A Dictionary of Stylistics (3rd Edition)",
        ],
      },
      metaLinguisticAwareness: {
        explanation:
          "C2 users possess explicit knowledge about the article system itself, understanding its theoretical foundations, cross-linguistic variations, and pedagogical implications.",
        patterns: {
          concept: "Theoretical understanding and meta-linguistic reflection",
          patterns: [
            "Definiteness theory: understanding semantic and pragmatic foundations",
            "Cross-linguistic comparison: articles in different language systems",
            "Historical development: how English articles evolved",
            "Pedagogical insight: understanding learning challenges and strategies",
          ],
          examples: [
            "The definiteness effect varies across languages and contexts.",
            "Article acquisition patterns differ between L1 and L2 learners.",
            "Historical grammar shows article development from demonstratives.",
            "Teaching articles requires understanding cognitive processing.",
          ],
          notes: [
            "Theoretical knowledge complements practical mastery",
            "Understanding variation helps with flexibility",
            "Meta-linguistic awareness aids teaching and explanation",
          ],
        },
        commonMistakes: [
          "Prioritizing theoretical knowledge over practical usage",
          "Not recognizing the limits of theoretical explanations",
          "Applying academic analysis inappropriately in practical contexts",
        ],
        practicePoints: [
          "Study theoretical literature on definiteness and articles",
          "Compare article systems across different languages",
          "Reflect on your own article learning and usage patterns",
        ],
        references: [
          "Lyons, C. (1999). Definiteness. Cambridge University Press",
          "Hawkins, J.A. (1978). Definiteness and Indefiniteness: A Study in Reference and Grammaticality Prediction",
          "Abbott, B. (2006). Definiteness and indefiniteness in linguistics",
        ],
      },
    },
    mastery: {
      canDo: [
        "Use articles with complete native-like naturalness in all contexts",
        "Create sophisticated stylistic and rhetorical effects through article manipulation",
        "Understand and explain the theoretical foundations of article usage",
        "Adapt article usage creatively while maintaining communicative effectiveness",
      ],
      shouldAvoid: [
        "Over-analyzing article choice in natural communication",
        "Using theoretical knowledge inappropriately in practical contexts",
        "Losing sight of communicative purpose in pursuit of technical correctness",
      ],
    },
    references: {
      books: [
        "Huddleston, R. & Pullum, G. K. (2002). The Cambridge Grammar of the English Language",
        "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language",
        "Lyons, C. (1999). Definiteness. Cambridge University Press",
      ],
      websites: [
        "Cambridge Grammar: Advanced Research Articles",
        "Oxford English Dictionary: Historical Development of Articles",
        "Linguistic Society Publications: Article System Research",
      ],
      academicSources: [
        "Council of Europe (2020). CEFR C2 Level Descriptors",
        "Hawkins, J.A. (1978). Definiteness and Indefiniteness",
        "Abbott, B. (2006). Definiteness and indefiniteness in linguistics",
        "Ionin, T. (2006). This is definitely specific: specificity and definiteness in article systems",
      ],
    },
  },

  articleTypes: {
    indefiniteArticles: {
      name: "Indefinite Articles",
      symbol: "a/an",
      definition:
        "Indefinite articles introduce singular countable nouns that are not specifically identified or are mentioned for the first time in discourse",
      usage: [
        {
          rule: "Use 'a' before consonant sounds",
          examples: ["a book", "a university", "a European"],
          exceptions: ["Silent 'h' words take 'an': an hour, an honest person"],
        },
        {
          rule: "Use 'an' before vowel sounds",
          examples: ["an apple", "an umbrella", "an MBA"],
          exceptions: [
            "Words starting with 'u' pronounced as 'yu' take 'a': a uniform",
          ],
        },
      ],
      examples: [
        "I need a pen.",
        "She's an engineer.",
        "He bought a used car.",
        "An hour ago, I saw an eagle.",
      ],
      commonErrors: [
        "*an university → a university (consonant sound)",
        "*a hour → an hour (vowel sound)",
        "*a honest person → an honest person (silent h)",
      ],
      advancedUsage: [
        "Generic reference: A tiger is a dangerous animal",
        "Exclamatory expressions: What a beautiful day!",
        "Frequency expressions: twice a week, three times a day",
      ],
    },
    definiteArticle: {
      name: "Definite Article",
      symbol: "the",
      definition:
        "The definite article specifies particular nouns that are identifiable to both speaker and listener through previous mention, shared knowledge, or unique reference",
      usage: [
        {
          rule: "Use with previously mentioned nouns",
          examples: ["I saw a cat. The cat was sleeping."],
          references: ["Hawkins, J.A. (1978). Definiteness and Indefiniteness"],
        },
        {
          rule: "Use with unique objects or concepts",
          examples: ["the sun", "the government", "the internet"],
          references: [
            "Lyons, C. (1999). Definiteness. Cambridge University Press",
          ],
        },
      ],
      examples: [
        "The book on the table is mine.",
        "The President announced new policies.",
        "The elderly deserve respect.",
      ],
      commonErrors: [
        "Omitting 'the' with unique objects: *Sun is bright → The sun is bright",
        "Using 'the' with general plurals: *The cats are animals → Cats are animals",
      ],
      advancedUsage: [
        "Generic reference: The computer has changed our lives",
        "Superlative constructions: the best, the most important",
        "Ordinal numbers: the first, the second",
      ],
    },
    zeroArticle: {
      name: "Zero Article",
      symbol: "∅",
      definition:
        "Zero article (no article) is used with plural countable nouns and uncountable nouns in general statements, and with most proper nouns",
      usage: [
        {
          rule: "Use with plural countable nouns (general)",
          examples: ["Dogs are loyal", "Students need books"],
          references: [
            "Quirk, R. et al. (1985). Comprehensive Grammar, Section 5.39",
          ],
        },
        {
          rule: "Use with uncountable nouns (general)",
          examples: ["Water is essential", "Music relaxes me"],
          exceptions: [
            "Specific uncountable nouns take 'the': The water in this glass",
          ],
        },
      ],
      examples: [
        "Children love games.",
        "Time flies quickly.",
        "John lives in London.",
        "I study mathematics.",
      ],
      commonErrors: [
        "Adding articles to proper nouns: *the John → John",
        "Using articles with general uncountable nouns: *the water is wet → Water is wet",
      ],
      advancedUsage: [
        "Academic subjects: study physics, learn history",
        "Languages: speak English, understand Chinese",
        "Meals: have breakfast, eat lunch, prepare dinner",
      ],
    },
  },

  specialUsages: {
    geographical: {
      context:
        "Geographical names and features requiring specialized article knowledge",
      rules: [
        {
          rule: "Use 'the' with countries containing descriptive/plural elements",
          examples: [
            "the United States",
            "the Netherlands",
            "the Philippines",
            "the Czech Republic",
          ],
          exceptions: ["The Gambia, The Bahamas (always capitalized 'The')"],
          references: [
            "Swan, M. (2016). Practical English Usage, Section 69.12",
          ],
        },
        {
          rule: "Use 'the' with geographical features and regions",
          examples: [
            "the Alps",
            "the Sahara",
            "the Pacific Ocean",
            "the Middle East",
          ],
          exceptions: ["Individual mountains: Mount Everest, Ben Nevis"],
          references: [
            "Huddleston, R. & Pullum, G. K. (2002). Cambridge Grammar, Chapter 5",
          ],
        },
      ],
      examples: [
        "She traveled through the Balkans last summer.",
        "The Amazon rainforest is crucial for global climate.",
        "Mount Kilimanjaro is located in Tanzania.",
        "The River Thames flows through London.",
      ],
      academicReferences: [
        "Close, R.A. (1981). English as a Foreign Language, Chapter 7",
        "Quirk, R. et al. (1985). Comprehensive Grammar, Section 5.60",
      ],
    },
    institutional: {
      context:
        "Institutions, organizations, and establishments with cultural variations",
      rules: [
        {
          rule: "British English: Functional institutional reference without articles",
          examples: ["in hospital", "at university", "to church", "at school"],
          exceptions: [
            "When referring to specific buildings: go to the hospital to visit",
          ],
          references: [
            "Swan, M. (2016). Practical English Usage, Section 69.8",
          ],
        },
        {
          rule: "American English: Tends to use articles with institutions",
          examples: ["in the hospital", "at the university", "to the church"],
          exceptions: ["Some exceptions remain: at school, to college"],
          references: ["Biber, D. et al. (1999). Longman Grammar, Chapter 4"],
        },
      ],
      examples: [
        "British: He's in hospital with pneumonia.",
        "American: He's in the hospital with pneumonia.",
        "She graduated from the University of Oxford.",
        "The Church of England has historical significance.",
      ],
      academicReferences: [
        "Peters, P. (2004). The Cambridge Guide to English Usage",
        "Hundt, M. (2009). Colonial lag, colonial innovation or simply language change?",
      ],
    },
    academic: {
      context: "Academic discourse requiring precise definiteness marking",
      rules: [
        {
          rule: "Use 'the' with specific research studies and established theories",
          examples: [
            "the study conducted by Smith (2020)",
            "the theory of relativity",
          ],
          exceptions: [
            "General research areas: research shows, studies indicate",
          ],
          references: [
            "Swales, J.M. & Feak, C.B. (2012). Academic Writing for Graduate Students",
          ],
        },
        {
          rule: "Use zero article with general academic concepts",
          examples: [
            "research indicates",
            "literature suggests",
            "data analysis reveals",
          ],
          exceptions: ["Specific data sets: the data collected in this study"],
          references: [
            "Hinkel, E. (2004). Teaching Academic ESL Writing, Chapter 8",
          ],
        },
      ],
      examples: [
        "The methodology employed in this research follows established protocols.",
        "Literature review reveals significant gaps in current understanding.",
        "The findings of Johnson et al. (2019) contradict previous assumptions.",
        "Statistical analysis demonstrates clear correlations between variables.",
      ],
      academicReferences: [
        "Hyland, K. (2009). Academic Discourse: English in a Global Context",
        "Flowerdew, J. & Peacock, M. (2001). Research Perspectives on English for Academic Purposes",
      ],
    },
    scientific: {
      context: "Scientific nomenclature and technical terminology",
      rules: [
        {
          rule: "Use 'the' with specific scientific phenomena and established laws",
          examples: [
            "the greenhouse effect",
            "the theory of evolution",
            "the periodic table",
          ],
          exceptions: [
            "General scientific principles: gravity affects all objects",
          ],
          references: [
            "Halliday, M.A.K. & Martin, J.R. (1993). Writing Science",
          ],
        },
        {
          rule: "Use zero article with general scientific concepts and processes",
          examples: [
            "photosynthesis occurs in plants",
            "osmosis regulates cell function",
          ],
          exceptions: [
            "Specific instances: the photosynthesis observed in this experiment",
          ],
          references: [
            "Veel, R. (1997). Learning how to mean—scientifically speaking",
          ],
        },
      ],
      examples: [
        "The Big Bang theory explains the universe's origin.",
        "DNA replication follows precise biochemical pathways.",
        "The electron microscope revealed cellular structures.",
        "Quantum mechanics governs subatomic particle behavior.",
      ],
      academicReferences: [
        "Halliday, M.A.K. & Martin, J.R. (1993). Writing Science: Literacy and Discursive Power",
        "Myers, G. (1990). Writing Biology: Texts in the Social Construction of Scientific Knowledge",
      ],
    },
    literary: {
      context:
        "Creative and literary contexts allowing artistic article manipulation",
      rules: [
        {
          rule: "Creative omission for poetic effect and rhythm",
          examples: [
            "Love, loss, redemption—life's eternal themes",
            "Time waits for no one",
          ],
          exceptions: ["Maintain clarity and comprehensibility"],
          references: ["Leech, G. & Short, M. (2007). Style in Fiction"],
        },
        {
          rule: "Unusual article usage for defamiliarization and emphasis",
          examples: [
            "A darkness fell upon the land",
            "The very essence of being",
          ],
          exceptions: ["Must serve clear artistic purpose"],
          references: ["Wales, K. (2011). A Dictionary of Stylistics"],
        },
      ],
      examples: [
        "The child in us never truly dies, carrying wonder through years.",
        "A Einstein would have marveled at these quantum discoveries.",
        "Memory, that faithful companion, preserves our past.",
        "The heart wants what the heart wants, defying logic.",
      ],
      academicReferences: [
        "Leech, G. & Short, M. (2007). Style in Fiction: A Linguistic Introduction",
        "Wales, K. (2011). A Dictionary of Stylistics (3rd Edition)",
        "Carter, R. (2004). Language and Creativity: The Art of Common Talk",
      ],
    },
    idiomatic: {
      context:
        "Fixed expressions and idiomatic phrases with non-standard article usage",
      rules: [
        {
          rule: "Fixed article patterns in established idioms",
          examples: [
            "the other day",
            "a friend of mine",
            "the thing is",
            "an idea came to me",
          ],
          exceptions: ["Cannot be altered without losing idiomatic meaning"],
          references: [
            "Moon, R. (1998). Fixed Expressions and Idioms in English",
          ],
        },
        {
          rule: "Cultural and regional idiomatic variations",
          examples: [
            "play the piano vs. play piano",
            "go to the movies vs. go to cinema",
          ],
          exceptions: ["Context and audience determine appropriate choice"],
          references: [
            "Cowie, A.P. (1998). Phraseology: Theory, Analysis, and Applications",
          ],
        },
      ],
      examples: [
        "The long and short of it is that we need more time.",
        "A bird in the hand is worth two in the bush.",
        "The truth of the matter is more complex than it appears.",
        "An apple a day keeps the doctor away.",
      ],
      academicReferences: [
        "Moon, R. (1998). Fixed Expressions and Idioms in English: A Corpus-based Approach",
        "Cowie, A.P. (1998). Phraseology: Theory, Analysis, and Applications",
      ],
    },
  },

  // Advanced Patterns and Constructions
  advancedPatterns: {
    genericReference: {
      description:
        "Using articles to express generic or universal statements about classes of things",
      patterns: {
        concept: "Generic reference across different article types",
        patterns: [
          "the + singular countable (formal): The computer has revolutionized communication",
          "∅ + plural countable (common): Computers have revolutionized communication",
          "a/an + singular countable (informal): A computer can help with many tasks",
        ],
        examples: [
          "The tiger is an endangered species.",
          "Tigers are endangered animals.",
          "A tiger can run very fast.",
        ],
      },
      levelRequired: "B2-C1",
      academicReferences: [
        "Lyons, C. (1999). Definiteness. Cambridge University Press, Chapter 10",
        "Hawkins, J.A. (1978). Definiteness and Indefiniteness, Section 4.3",
      ],
    },
    discourseFunctions: {
      description:
        "Articles serving discourse-level functions beyond simple definiteness",
      patterns: {
        concept:
          "Discourse coherence and information management through articles",
        patterns: [
          "Topic introduction: A problem arose during the meeting",
          "Topic continuation: The problem required immediate attention",
          "Information packaging: The solution that emerged was innovative",
        ],
        examples: [
          "A new theory has emerged. The theory challenges existing paradigms.",
          "The research revealed unexpected findings. These findings suggest...",
          "An important question arises: How do we proceed?",
        ],
      },
      levelRequired: "C1-C2",
      academicReferences: [
        "Gundel, J.K., Hedberg, N. & Zacharski, R. (1993). Cognitive status and the form of referring expressions",
        "Prince, E.F. (1981). Toward a taxonomy of given-new information",
      ],
    },
    pragmaticEffects: {
      description:
        "Articles conveying pragmatic meanings beyond basic reference",
      patterns: {
        concept: "Pragmatic implications of article choice in context",
        patterns: [
          "Emphasis: THE solution (not just any solution)",
          "Assumption: The problem we discussed (assumes shared knowledge)",
          "Evaluation: A disaster waiting to happen (judgmental stance)",
        ],
        examples: [
          "This is THE answer we've been looking for!",
          "The situation you mentioned is concerning.",
          "A catastrophe of this magnitude requires immediate response.",
        ],
      },
      levelRequired: "C1-C2",
      academicReferences: [
        "Abbott, B. (2006). Definiteness and indefiniteness in linguistics",
        "Roberts, C. (2003). Uniqueness in definite noun phrases",
      ],
    },
  },

  commonMistakes: {
    soundSpellingConfusion: {
      description: "Confusing spelling with pronunciation for a/an selection",
      incorrectExamples: [
        "*She is an university student",
        "*He bought a umbrella",
        "*An European country",
        "*A hour ago",
      ],
      correctExamples: [
        "She is a university student (consonant sound 'yu')",
        "He bought an umbrella (vowel sound)",
        "A European country (consonant sound 'yu')",
        "An hour ago (silent h, vowel sound)",
      ],
      explanation:
        "Article choice depends on the initial sound of the following word, not its spelling. Focus on pronunciation.",
      preventionTips: [
        "Practice listening to pronunciation rather than reading spelling",
        "Learn common words with silent letters (hour, honest, honor)",
        "Remember that 'u' can sound like 'yu' (university, European, uniform)",
      ],
    },
    unnecessaryDefiniteness: {
      description:
        "Using 'the' when zero article is appropriate for general statements",
      incorrectExamples: [
        "*The love is the most powerful emotion",
        "*The children need the education",
        "*The music makes me happy",
        "*The technology changes the world",
      ],
      correctExamples: [
        "Love is the most powerful emotion",
        "Children need education",
        "Music makes me happy",
        "Technology changes the world",
      ],
      explanation:
        "General statements about concepts, groups, or categories typically use zero article, not 'the'.",
      preventionTips: [
        "Ask: Am I talking about something specific or in general?",
        "Practice distinguishing specific vs. general reference",
        "Learn common uncountable and mass nouns that take zero article",
      ],
    },
    overgeneralization: {
      description:
        "Applying simple rules to complex contexts without considering exceptions",
      incorrectExamples: [
        "*I went to the church (when meaning the institution/service)",
        "*She is in the hospital (British English functional use)",
        "*The United Kingdom is in the Europe",
        "*He studies the mathematics at the university",
      ],
      correctExamples: [
        "I went to church (British: institutional function)",
        "She is in hospital (British: functional use)",
        "The United Kingdom is in Europe",
        "He studies mathematics at university (British)",
      ],
      explanation:
        "Advanced article usage involves many exceptions and cultural variations that override basic rules.",
      preventionTips: [
        "Learn British vs. American article differences",
        "Study geographical name patterns systematically",
        "Practice with authentic texts from target variety of English",
      ],
    },
  },

  assessmentGuidelines: {
    A1: {
      criteria: [
        "Correct use of a/an based on sound",
        "Basic use of 'the' with previously mentioned nouns",
        "Appropriate omission of articles with proper nouns",
        "Simple present tense contexts",
      ],
      expectedMastery: [
        "90% accuracy with a/an distinction",
        "80% accuracy with basic 'the' usage",
        "Recognition of when not to use articles with names",
      ],
      commonErrors: [
        "Sound/spelling confusion for a/an",
        "Overuse of 'the' with general statements",
        "Adding articles to proper nouns",
      ],
    },
    A2: {
      criteria: [
        "Articles with professions and nationalities",
        "Consistent use with superlatives and ordinals",
        "Basic geographical names",
        "Time expressions and basic collocations",
      ],
      expectedMastery: [
        "85% accuracy with professional contexts",
        "90% accuracy with superlatives and ordinals",
        "Recognition of major geographical patterns",
      ],
      commonErrors: [
        "Omitting articles with professions",
        "Forgetting 'the' with superlatives",
        "Incorrect geographical article usage",
      ],
    },
    B1: {
      criteria: [
        "Context-dependent usage with abstract nouns",
        "Comprehensive geographical patterns",
        "Institutional article variations",
        "Academic writing contexts",
      ],
      expectedMastery: [
        "80% accuracy with abstract noun contexts",
        "85% accuracy with geographical names",
        "Understanding of British vs. American differences",
      ],
      commonErrors: [
        "Confusion with specific vs. general abstract nouns",
        "Overgeneralization of geographical rules",
        "Mixing British and American conventions",
      ],
    },
    B2: {
      criteria: [
        "Complex noun phrase structures",
        "Academic discourse conventions",
        "Meaning distinctions through article choice",
        "Register-appropriate usage",
      ],
      expectedMastery: [
        "85% accuracy in academic contexts",
        "Recognition of semantic nuances",
        "Consistent register usage",
      ],
      commonErrors: [
        "Inappropriate articles in complex noun phrases",
        "Missing semantic implications of article choice",
        "Register inconsistency",
      ],
    },
    C1: {
      criteria: [
        "Specialized domain conventions",
        "Stylistic and rhetorical effects",
        "Cultural and regional variations",
        "Creative and persuasive contexts",
      ],
      expectedMastery: [
        "90% accuracy in specialized contexts",
        "Effective use for stylistic purposes",
        "Adaptation to target cultural context",
      ],
      commonErrors: [
        "Ignoring domain-specific conventions",
        "Missing stylistic opportunities",
        "Inappropriate cultural mixing",
      ],
    },
    C2: {
      criteria: [
        "Native-like intuition in all contexts",
        "Creative and innovative usage",
        "Meta-linguistic awareness",
        "Teaching and explanation ability",
      ],
      expectedMastery: [
        "95% accuracy across all contexts",
        "Creative manipulation for effect",
        "Theoretical understanding and application",
      ],
      commonErrors: [
        "Over-analysis in natural communication",
        "Inappropriate theoretical application",
        "Loss of communicative focus",
      ],
    },
  },

  references: {
    authoritative: {
      books: [
        "Huddleston, R. & Pullum, G. K. (2002). The Cambridge Grammar of the English Language. Cambridge University Press",
        "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language. Longman",
        "Swan, M. (2016). Practical English Usage (4th Edition). Oxford University Press",
        "Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). Longman Grammar of Spoken and Written English. Pearson",
        "Carter, R. & McCarthy, M. (2006). Cambridge Grammar of English. Cambridge University Press",
      ],
      websites: [
        "Cambridge Dictionary Grammar: https://dictionary.cambridge.org/grammar/british-grammar/",
        "Oxford English Grammar: https://www.oxfordlearnersdictionaries.com/grammar/",
        "British Council Grammar: https://learnenglish.britishcouncil.org/grammar/",
        "BBC Learning English Grammar: https://www.bbc.co.uk/learningenglish/english/features/6-minute-grammar",
        "Merriam-Webster Grammar Guide: https://www.merriam-webster.com/grammar",
      ],
      dictionaries: [
        "Oxford English Dictionary (OED): https://www.oed.com/",
        "Cambridge Advanced Learner's Dictionary: https://dictionary.cambridge.org/",
        "Merriam-Webster Dictionary: https://www.merriam-webster.com/",
        "Longman Dictionary of Contemporary English: https://www.ldoceonline.com/",
        "Collins English Dictionary: https://www.collinsdictionary.com/",
      ],
    },
    academic: {
      journals: [
        "Applied Linguistics (Oxford University Press)",
        "Language Learning (Wiley)",
        "TESOL Quarterly (Wiley)",
        "English for Specific Purposes (Elsevier)",
        "Journal of Second Language Writing (Elsevier)",
      ],
      researchPapers: [
        "Ionin, T. (2006). This is definitely specific: specificity and definiteness in article systems. Natural Language Semantics, 14(2), 175-234",
        "Lyons, C. (1999). Definiteness. Cambridge University Press",
        "Hawkins, J.A. (1978). Definiteness and Indefiniteness: A Study in Reference and Grammaticality Prediction. Croom Helm",
        "Abbott, B. (2006). Definiteness and indefiniteness in linguistics. In Encyclopedia of Language and Linguistics (2nd ed.)",
        "Master, P. (1997). The English article system: Acquisition, function, and pedagogy. System, 25(2), 215-232",
      ],
      theses: [
        "Thomas, M. (1989). The acquisition of English articles by first and second language learners. Applied Psycholinguistics, 10(3), 335-355",
        "Huebner, T. (1983). A longitudinal analysis of the acquisition of English. University of Michigan Press",
        "Butler, Y. G. (2002). Second language learners' theories on the use of English articles: An analysis of the metalinguistic knowledge used by Japanese students in acquiring the English article system. Studies in Second Language Acquisition, 24(3), 451-480",
      ],
    },
    pedagogical: {
      textbooks: [
        "Murphy, R. (2019). English Grammar in Use (4th Edition). Cambridge University Press",
        "Hewings, M. (2013). Advanced Grammar in Use (3rd Edition). Cambridge University Press",
        "Eastwood, J. (2022). Oxford Practice Grammar Basic. Oxford University Press",
        "Vince, M. (2019). English Grammar in Context. Macmillan Education",
        "Alexander, L.G. (2019). Longman English Grammar Practice. Pearson",
      ],
      teachingGuides: [
        "Swales, J.M. & Feak, C.B. (2012). Academic Writing for Graduate Students (3rd Edition). University of Michigan Press",
        "Hinkel, E. (2004). Teaching Academic ESL Writing: Practical Techniques in Vocabulary and Grammar. Lawrence Erlbaum",
        "Celce-Murcia, M. & Larsen-Freeman, D. (1999). The Grammar Book: An ESL/EFL Teacher's Course (2nd Edition). Heinle & Heinle",
        "Thornbury, S. (2005). Beyond the Sentence: Introducing Discourse Analysis. Macmillan Education",
      ],
      onlineResources: [
        "English Grammar Guide (EF Education): https://www.ef.com/wwen/english-resources/english-grammar/",
        "Grammar Exercises (Perfect English Grammar): https://www.perfect-english-grammar.com/",
        "EnglishClub Grammar Section: https://www.englishclub.com/grammar/",
        "Grammarly Grammar Guide: https://www.grammarly.com/blog/grammar/",
        "English Page Grammar Tutorials: https://www.englishpage.com/grammar/",
      ],
    },
  },
};

export default ArticlesData;

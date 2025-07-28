import { adverbsEndingLyVsIdenticalAdjectivesType } from "@/types/grammars/grammar/adverbs_special/adverbsEndingLyVsIdenticalAdjectives";

export const adverbsEndingLyVsIdenticalAdjectivesData: adverbsEndingLyVsIdenticalAdjectivesType =
  {
    topic: "Adverbs ending in -ly vs. identical adjectives",
    level: "A1–C2",
    description:
      "This comprehensive topic explores the complex relationship between adverbs ending in -ly and adjectives that share identical forms. Understanding this distinction is fundamental for accurate English grammar, as it affects sentence structure, meaning, and stylistic register. This analysis covers morphological patterns, syntactic functions, semantic nuances, and pragmatic considerations across all CEFR levels.",

    categories: {
      type1_sameForm: {
        title: "1. Adjective and adverb have the same -ly form",
        description:
          "Some words ending in -ly are both adjectives and adverbs. Their function depends on their position and use in the sentence.",
        examples: [
          {
            word: "friendly",
            adjective: "She is a friendly person.",
            adverb:
              "✘ Incorrect: *He greeted me friendly.* (Correct: He greeted me *in a friendly manner*.)",
            note: "Despite ending in -ly, 'friendly' is an adjective, not an adverb.",
          },
          {
            word: "likely",
            adjective: "It is likely to rain.",
            adverb:
              "✘ Incorrect: *He likely goes to the gym every day.* (Correct: He *probably* goes to the gym.)",
            note: "'Likely' is used as an adjective. Its adverb counterpart is 'probably'.",
          },
          {
            word: "lively",
            adjective: "It's a lively discussion.",
            adverb:
              "✘ Incorrect: *They argued lively.* (Correct: They argued *in a lively way*.)",
            note: "'Lively' is an adjective. Not used directly as an adverb.",
          },
          {
            word: "silly",
            adjective: "That's a silly mistake.",
            adverb:
              "✘ Incorrect: *He acted silly.* (Correct: He acted *sillily*, though 'in a silly way' is more natural.)",
            note: "'Sillily' is rare; prefer paraphrasing.",
          },
        ],
      },
      type2_trueAdverbsEndingLy: {
        title: "2. True adverbs ending in -ly (with clear adverb function)",
        description:
          "Many adverbs ending in -ly describe how something is done (manner), when, where, how often, or to what degree.",
        examples: [
          {
            word: "quickly",
            usage: "He ran quickly to catch the bus.",
            function: "Manner",
          },
          {
            word: "happily",
            usage: "She smiled happily.",
            function: "Manner",
          },
          {
            word: "slowly",
            usage: "The turtle moved slowly.",
            function: "Manner",
          },
          {
            word: "badly",
            usage: "He performed badly in the exam.",
            function: "Degree/Quality",
          },
        ],
      },
      type3_exceptionAdverbs: {
        title: "3. Exceptions – Adverbs that do NOT end in -ly",
        description:
          "Some common adverbs do not follow the -ly pattern and are often confused with adjectives.",
        examples: [
          {
            word: "fast",
            adjective: "This is a fast car.",
            adverb: "He runs fast.",
            note: "Same form for both adjective and adverb.",
          },
          {
            word: "hard",
            adjective: "This is a hard problem.",
            adverb: "She works hard.",
            note: "Different meanings in adjective and adverb.",
          },
          {
            word: "late",
            adjective: "He is always late.",
            adverb: "She arrived late.",
            note: "Identical in form, both used correctly.",
          },
          {
            word: "early",
            adjective: "We took an early flight.",
            adverb: "He came early.",
            note: "Same form; context determines usage.",
          },
        ],
      },
      type4_wordsEndingLyButNotAdverbs: {
        title: "4. Words ending in -ly that are not adverbs",
        description:
          "Some words end in -ly but function only as adjectives or nouns, not as adverbs.",
        examples: [
          {
            word: "elderly",
            function: "Adjective/Noun",
            example: "The elderly need support.",
            note: "Not used as an adverb.",
          },
          {
            word: "costly",
            function: "Adjective",
            example: "That was a costly mistake.",
            note: "Not an adverb.",
          },
          {
            word: "holy",
            function: "Adjective",
            example: "A holy place.",
            note: "Not an adverb.",
          },
          {
            word: "deadly",
            function: "Adjective",
            example: "A deadly virus.",
            note: "Not an adverb, though sometimes appears in phrases like 'deadly serious'.",
          },
        ],
      },
      type5_wordsWithDifferentForms: {
        title: "5. Adjective and adverb have different forms",
        description:
          "Some adjectives have an -ly adverb form that is not identical to the adjective.",
        examples: [
          {
            word: "happy",
            adjective: "She looks happy.",
            adverb: "She sings happily.",
            note: "Standard transformation: adjective + -ly.",
          },
          {
            word: "angry",
            adjective: "He is angry.",
            adverb: "He shouted angrily.",
            note: "Typical pattern.",
          },
          {
            word: "easy",
            adjective: "This task is easy.",
            adverb: "He solved it easily.",
            note: "-y changes to -ily in the adverb.",
          },
          {
            word: "gentle",
            adjective: "He has a gentle manner.",
            adverb: "He speaks gently.",
            note: "Regular adverb formation.",
          },
        ],
      },
      type6_specialLyAdverbsWithDifferentMeaning: {
        title:
          "6. Special -ly adverbs with different meanings from base adjectives",
        description:
          "Some -ly adverbs carry meanings that cannot be directly predicted from their adjective base, causing confusion.",
        examples: [
          {
            adjective: "hard",
            adverb: "hardly",
            meaning:
              "'hardly' does not mean 'in a hard way' but rather 'scarcely' or 'barely'",
            example: "He hardly knew her. (= He barely knew her)",
            note: "'Hard' is the correct adverb for 'diligently': He works hard.",
          },
          {
            adjective: "near",
            adverb: "nearly",
            meaning: "'nearly' means 'almost', not 'in a near way'",
            example: "She nearly missed the bus. (= She almost missed it)",
            note: "Use 'near' as adverb for distance: He stood near the door.",
          },
          {
            adjective: "late",
            adverb: "lately",
            meaning:
              "'lately' = recently (time), completely different from 'late'",
            example: "Have you seen him lately?",
            note: "'Late' = tardy: She arrived late.",
          },
          {
            adjective: "high",
            adverb: "highly",
            meaning:
              "'highly' is often used metaphorically for evaluation, degree",
            example: "She is highly respected.",
            note: "'High' for position: The bird flew high.",
          },
        ],
      },
      type7_fossilizedPhrases: {
        title:
          "7. Fixed phrases containing -ly adjectives with adverbial meaning",
        description:
          "Some -ly adjectives are only used adverbially within fixed expressions.",
        examples: [
          {
            phrase: "in a friendly manner",
            equivalent: "friendly",
            function: "More formal way to express manner.",
            example: "He greeted me in a friendly manner.",
          },
          {
            phrase: "in a timely fashion",
            equivalent: "timely",
            example: "Please submit the report in a timely fashion.",
            note: "'Timely' is an adjective but in this phrase carries adverbial meaning.",
          },
          {
            phrase: "in a scholarly way",
            equivalent: "scholarly",
            example: "He responded in a scholarly way.",
            note: "Avoid using 'scholarly' as a standalone adverb.",
          },
        ],
      },
      type8_ambiguousUsage: {
        title: "8. Ambiguous cases – context-dependent usage",
        description:
          "Some words can function as both adjectives and adverbs, requiring careful contextual analysis.",
        examples: [
          {
            word: "monthly",
            adjectiveUse: "She receives a monthly payment.",
            adverbUse: "She is paid monthly.",
            note: "Both adjective and adverb – depends on position and function.",
          },
          {
            word: "yearly",
            adjectiveUse: "They do a yearly checkup.",
            adverbUse: "They meet yearly to discuss results.",
            note: "Common pattern with time-related words.",
          },
          {
            word: "daily",
            adjectiveUse: "He reads the daily newspaper.",
            adverbUse: "He exercises daily.",
            note: "Practice distinguishing by identifying function in sentence.",
          },
        ],
      },
      type9_adverbsEndingInLyFunctioningAsAdjective: {
        title:
          "9. Some -ly adverbs occasionally functioning as adjectives in modern English",
        description:
          "Though uncommon, some -ly adverbs can be used adjectivally, especially in informal American English or literary contexts.",
        examples: [
          {
            word: "kindly",
            adjectiveUse: "The kindly old man gave me advice.",
            adverbUse: "He spoke kindly.",
            note: "In literature or archaic style, 'kindly' can be an adjective.",
          },
          {
            word: "sickly",
            adjectiveUse: "He has a sickly appearance.",
            note: "'Sickly' is an adjective describing condition, often mistaken for adverb.",
          },
          {
            word: "fatherly",
            adjectiveUse: "He gave me a fatherly hug.",
            note: "Adjective showing characteristics related to fathers, not an adverb.",
          },
        ],
      },
      commonMistakes: {
        title: "6. Common mistakes & confusion",
        list: [
          "❌ Using 'friendly' as an adverb: *He spoke friendly* → ✅ *He spoke in a friendly way*",
          "❌ Using 'likely' as an adverb: *He likely comes late* → ✅ *He probably comes late*",
          "❌ Using 'lively' as an adverb: *They danced lively* → ✅ *They danced in a lively manner*",
          "❌ Using 'silly' as an adverb: *He acted silly* → ✅ *He acted in a silly way*",
          "✅ Correct usage: *He runs fast* — no -ly needed here.",
        ],
      },
      advancedUsage: {
        title: "7. Advanced usage & notes (B2–C2)",
        points: [
          "Adverbs like 'surprisingly', 'interestingly', and 'sadly' can function as sentence adverbs: e.g., *Interestingly, he refused the offer.*",
          "'Deadly' can act as an intensifier in informal speech: *She is deadly serious.*",
          "Be cautious with formal writing: prefer full phrases like 'in a friendly manner' over misusing adjectives.",
          "Avoid redundancy: *He shouted loudly* is sometimes unnecessary if the verb already implies loudness.",
        ],
      },
      learningTips: {
        title: "8. Learning tips",
        tips: [
          "Always check the dictionary to confirm if a word is an adverb or adjective.",
          "Remember that not all -ly words are adverbs, and not all adverbs end in -ly.",
          "Practice rewriting sentences to transform adjectives into correct adverbial phrases.",
          "Use substitution technique: replace a confusing adverb with a synonym like 'in a ... way' to test correctness.",
        ],
      },
    },

    // CEFR Level breakdown with comprehensive learning objectives
    cefrLevels: {
      A1: {
        level: "A1 - Beginner",
        description:
          "Introduction to basic adverb vs adjective distinction with high-frequency words",
        keyWords: [
          "fast",
          "good/well",
          "hard",
          "late",
          "early",
          "quick/quickly",
          "slow/slowly",
        ],
        grammarPoints: [
          "Basic understanding that adjectives describe nouns",
          "Recognition that adverbs often end in -ly",
          "Simple patterns: good → well, quick → quickly",
          "Position awareness: adjectives before nouns, adverbs after verbs",
        ],
        commonUsages: [
          "He is fast (adjective) / He runs fast (adverb)",
          "She is good (adjective) / She sings well (adverb)",
          "It's an early train (adjective) / Come early (adverb)",
        ],
        examples: [
          {
            word: "fast",
            adjective: "This is a fast car.",
            adverb: "The car goes fast.",
            difficulty: "basic pattern - same form",
          },
          {
            word: "good/well",
            adjective: "She is a good singer.",
            adverb: "She sings well.",
            difficulty: "irregular transformation",
          },
          {
            word: "quick/quickly",
            adjective: "He gave a quick answer.",
            adverb: "He answered quickly.",
            difficulty: "regular -ly formation",
          },
        ],
        learningObjectives: [
          "Identify basic adjectives and adverbs in simple sentences",
          "Use high-frequency adjective-adverb pairs correctly",
          "Understand that 'good' becomes 'well' as an adverb",
          "Recognize that some words have the same form (fast, hard, late)",
        ],
      },
      A2: {
        level: "A2 - Elementary",
        description:
          "Expansion of vocabulary and introduction to -ly exceptions",
        keyWords: [
          "hard/hardly",
          "late/lately",
          "near/nearly",
          "sure/surely",
          "real/really",
        ],
        grammarPoints: [
          "Introduction to confusing pairs: hard/hardly, late/lately",
          "Regular -ly adverb formation from adjectives",
          "Understanding that some -ly words are adjectives (friendly, lovely)",
          "Basic sentence adverbs (really, surely, certainly)",
        ],
        commonUsages: [
          "He works hard (not hardly)",
          "She arrived late (not lately)",
          "They are really nice (sentence adverb)",
          "She's a friendly person (adjective ending in -ly)",
        ],
        examples: [
          {
            word: "hard/hardly",
            adjective: "This is hard work.",
            adverb: "She works hard. (≠ She hardly works.)",
            difficulty: "different meanings when -ly added",
          },
          {
            word: "friendly",
            adjective: "He's a friendly man.",
            adverb: "✗ He spoke friendly → He spoke in a friendly way",
            difficulty: "-ly adjective, not adverb",
          },
        ],
        learningObjectives: [
          "Distinguish between hard/hardly and late/lately",
          "Recognize that friendly, lovely are adjectives",
          "Use sentence adverbs like really, certainly",
          "Form regular -ly adverbs from adjectives",
        ],
      },
      B1: {
        level: "B1 - Intermediate",
        description: "Complex patterns and contextual usage",
        keyWords: [
          "high/highly",
          "deep/deeply",
          "wide/widely",
          "free/freely",
          "easy/easily",
        ],
        grammarPoints: [
          "Adverbs with different meanings: high/highly, deep/deeply",
          "Adjectives ending in -ly that cannot be adverbs",
          "Adverbial phrases as alternatives: 'in a friendly manner'",
          "Position and emphasis in sentence structure",
        ],
        commonUsages: [
          "The bird flies high / She is highly respected",
          "He dug deep / She cares deeply",
          "It's widely known / The door opened wide",
          "Express adverbially: 'in a timely fashion'",
        ],
        examples: [
          {
            word: "high/highly",
            adjective: "It's a high building.",
            adverb:
              "Physical: The bird flies high. / Abstract: He's highly regarded.",
            difficulty: "context-dependent meaning",
          },
          {
            word: "deep/deeply",
            adjective: "The water is deep.",
            adverb: "Physical: Dig deep. / Emotional: deeply moved.",
            difficulty: "literal vs. figurative usage",
          },
        ],
        learningObjectives: [
          "Use adverbs with different literal/figurative meanings",
          "Master adverbial phrases for -ly adjectives",
          "Understand positional flexibility of adverbs",
          "Recognize register differences in usage",
        ],
      },
      B2: {
        level: "B2 - Upper-Intermediate",
        description: "Nuanced usage and stylistic considerations",
        keyWords: [
          "deadly",
          "lively",
          "scholarly",
          "timely",
          "orderly",
          "monthly",
          "yearly",
        ],
        grammarPoints: [
          "Adjectives ending in -ly with no adverbial form",
          "Time-related adjectives/adverbs: monthly, yearly, daily",
          "Formal vs. informal register differences",
          "Sentence adverbs and their discourse functions",
        ],
        commonUsages: [
          "Deadly serious (intensifier usage)",
          "A scholarly approach / in a scholarly manner",
          "Monthly payments / paid monthly",
          "Discourse markers: 'Interestingly', 'Surprisingly'",
        ],
        examples: [
          {
            word: "deadly",
            adjective: "A deadly disease.",
            adverb: "Informal intensifier: deadly serious",
            difficulty: "limited adverbial usage",
          },
          {
            word: "scholarly",
            adjective: "A scholarly article.",
            adverb: "✗ He wrote scholarly → He wrote in a scholarly manner",
            difficulty: "no direct adverbial form",
          },
        ],
        learningObjectives: [
          "Navigate formal/informal register appropriately",
          "Use time-related dual-function words correctly",
          "Employ sentence adverbs for discourse coherence",
          "Avoid overuse of -ly intensifiers",
        ],
      },
      C1: {
        level: "C1 - Advanced",
        description: "Sophisticated usage and stylistic precision",
        keyWords: [
          "subtly",
          "intellectually",
          "aesthetically",
          "pragmatically",
          "analytically",
        ],
        grammarPoints: [
          "Sentence adverbs for academic and professional discourse",
          "Stylistic choices between adjective and adverbial phrases",
          "Morphological productivity and limitations",
          "Semantic bleaching and grammaticalization processes",
        ],
        commonUsages: [
          "Sentence adverbs: 'Pragmatically speaking', 'Aesthetically pleasing'",
          "Academic hedging: 'arguably', 'presumably', 'conceivably'",
          "Professional register: 'systematically', 'comprehensively'",
          "Avoiding redundancy: 'whisper quietly' → 'whisper'",
        ],
        examples: [
          {
            word: "pragmatic/pragmatically",
            adjective: "A pragmatic approach.",
            adverb: "Pragmatically speaking, this won't work.",
            difficulty: "discourse-level function",
          },
        ],
        learningObjectives: [
          "Master sentence adverbs for sophisticated discourse",
          "Make appropriate stylistic choices",
          "Understand semantic and pragmatic nuances",
          "Avoid redundancy and overuse",
        ],
      },
      C2: {
        level: "C2 - Proficiency",
        description: "Native-like intuition and metalinguistic awareness",
        keyWords: ["erstwhile", "manifestly", "purportedly", "ostensibly"],
        grammarPoints: [
          "Archaic and literary usage patterns",
          "Metalinguistic awareness of morphological processes",
          "Dialectal and register variations",
          "Historical development and etymology",
        ],
        commonUsages: [
          "Literary: 'The kindly old professor'",
          "Formal hedging: 'ostensibly', 'purportedly'",
          "Academic precision: 'manifestly obvious', 'patently false'",
          "Historical awareness: 'erstwhile ally'",
        ],
        examples: [
          {
            word: "manifest/manifestly",
            adjective: "A manifest error.",
            adverb: "It's manifestly clear.",
            difficulty: "formal register precision",
          },
        ],
        learningObjectives: [
          "Demonstrate native-like intuition",
          "Use archaic/literary forms appropriately",
          "Show metalinguistic awareness",
          "Navigate all registers with precision",
        ],
      },
    },

    relatedTopics: [
      "Adverbs of manner",
      "Adjectives vs. Adverbs",
      "Sentence adverbs",
      "Nominalization of adjectives",
      "Non-ly adverbs",
    ],

    references: [
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: "1985",
        isbn: "978-0582517349",
        description:
          "The definitive reference for English grammar, covering adverb formation, syntactic functions, and morphological patterns with extensive corpus-based analysis.",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston, Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: "2002",
        isbn: "978-0521431460",
        description:
          "Modern theoretical approach to English grammar with detailed analysis of adjective-adverb relationships and morphological productivity.",
      },
      {
        title: "Practical English Usage, 4th Edition",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: "2016",
        isbn: "978-0194202435",
        description:
          "Essential reference for common usage problems, including detailed coverage of adverb vs. adjective confusion and practical learning strategies.",
      },
      {
        title: "Oxford English Grammar",
        author: "Sidney Greenbaum",
        publisher: "Oxford University Press",
        year: "1996",
        isbn: "978-0198612810",
        description:
          "Comprehensive coverage of English grammar rules with extensive treatment of adverbial functions and word class distinctions.",
      },
      {
        title: "English Grammar in Use, 5th Edition",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457682",
        description:
          "Practical grammar reference with clear explanations and examples of adverb-adjective distinctions for intermediate to advanced learners.",
      },
      {
        title: "The Longman Student Grammar of Spoken and Written English",
        author: "Douglas Biber, Susan Conrad, Geoffrey Leech",
        publisher: "Longman",
        year: "2002",
        isbn: "978-0582237261",
        description:
          "Corpus-based analysis of grammar patterns in real usage, including frequency data for adverb-adjective patterns.",
      },
      {
        title: "Collins COBUILD English Grammar, 4th Edition",
        author: "HarperCollins Publishers",
        publisher: "Collins",
        year: "2017",
        isbn: "978-0008158446",
        description:
          "Usage-based grammar with authentic examples from the Collins Corpus, covering contemporary patterns of adverb and adjective usage.",
      },
    ],

    adverbs_EndingLy_Vs_Identical_Adjectives_vocab: {
      definition:
        "This comprehensive vocabulary section explores the intricate relationships between adverbs ending in -ly and adjectives that may appear identical or similar. Understanding these patterns is crucial for accurate grammatical usage and avoiding common errors in both spoken and written English.",

      categories: {
        adverbs_with_ly: [
          "quickly",
          "happily",
          "sadly",
          "loudly",
          "clearly",
          "easily",
          "strongly",
          "suddenly",
          "gracefully",
          "frequently",
          "carefully",
          "properly",
          "seriously",
          "completely",
          "immediately",
          "obviously",
          "particularly",
          "especially",
          "generally",
          "specifically",
          "definitely",
          "probably",
          "certainly",
          "absolutely",
          "relatively",
          "approximately",
          "exactly",
          "directly",
        ],

        identical_adjective_adverb: [
          "fast",
          "hard",
          "late",
          "early",
          "straight",
          "right",
          "wrong",
          "high",
          "low",
          "daily",
          "weekly",
          "monthly",
          "yearly",
          "deep",
          "wide",
          "close",
          "far",
          "near",
          "direct",
          "fine",
          "free",
          "pretty",
          "fair",
          "clean",
          "clear",
          "cool",
          "warm",
          "light",
        ],

        adverbs_not_formed_with_ly: [
          "well",
          "fast",
          "hard",
          "straight",
          "late",
          "early",
          "far",
          "soon",
          "often",
          "always",
          "never",
          "here",
          "there",
          "everywhere",
          "somewhere",
          "anywhere",
          "today",
          "tomorrow",
          "yesterday",
          "now",
          "then",
          "still",
          "yet",
          "already",
          "again",
          "once",
          "twice",
        ],

        adjectives_that_look_like_adverbs: [
          "friendly",
          "lonely",
          "lovely",
          "silly",
          "ugly",
          "cowardly",
          "lively",
          "elderly",
          "costly",
          "holy",
          "deadly",
          "timely",
          "orderly",
          "scholarly",
          "motherly",
          "fatherly",
          "brotherly",
          "sisterly",
          "manly",
          "womanly",
          "godly",
          "worldly",
          "heavenly",
          "earthly",
          "ghastly",
          "beastly",
        ],
      },

      comparison_table: [
        {
          word: "fast",
          adjective: "He drives a **fast** car.",
          adverb: "He drives **fast**.",
        },
        {
          word: "hard",
          adjective: "It was a **hard** test.",
          adverb: "She works **hard** every day.",
        },
        {
          word: "late",
          adjective: "The **late** guest arrived.",
          adverb: "He came **late**.",
        },
        {
          word: "early",
          adjective: "The **early** train is cancelled.",
          adverb: "Please come **early**.",
        },
        {
          word: "right",
          adjective: "You gave the **right** answer.",
          adverb: "Turn **right** at the corner.",
        },
        {
          word: "wrong",
          adjective: "That's the **wrong** choice.",
          adverb: "You guessed **wrong**.",
        },
        {
          word: "straight",
          adjective: "Draw a **straight** line.",
          adverb: "Go **straight** ahead.",
        },
        {
          word: "high",
          adjective: "It's a **high** building.",
          adverb: "The bird flies **high**.",
        },
        {
          word: "deep",
          adjective: "The water is **deep**.",
          adverb: "Dig **deep** for answers.",
        },
        {
          word: "wide",
          adjective: "It's a **wide** road.",
          adverb: "Open your eyes **wide**.",
        },
      ],

      CEFR_levels: {
        A1: ["fast", "early", "late", "well", "good", "hard", "quick", "slow"],
        A2: ["right", "wrong", "high", "low", "near", "far", "sure", "real"],
        B1: ["straight", "deep", "wide", "close", "direct", "free", "fine"],
        B2: [
          "daily",
          "weekly",
          "monthly",
          "yearly",
          "pretty",
          "clean",
          "clear",
        ],
        C1: [
          "particularly",
          "especially",
          "generally",
          "specifically",
          "relatively",
        ],
        C2: [
          "manifestly",
          "ostensibly",
          "purportedly",
          "conceivably",
          "arguably",
        ],
      },

      common_errors: [
        {
          mistake: "She works hardly.",
          correction: "She works **hard**.",
          explanation:
            "**Hard** is the correct adverb here. 'Hardly' means 'almost not'.",
        },
        {
          mistake: "He did it good.",
          correction: "He did it **well**.",
          explanation: "**Well** is the adverb form of 'good'.",
        },
        {
          mistake: "He arrived lately.",
          correction: "He arrived **late**.",
          explanation:
            "**Late** is the correct adverb; 'lately' means 'recently'.",
        },
        {
          mistake: "She spoke friendly to me.",
          correction: "She spoke **in a friendly way** to me.",
          explanation:
            "'Friendly' is an adjective; use an adverbial phrase instead.",
        },
        {
          mistake: "He likely will come.",
          correction: "He **probably** will come.",
          explanation:
            "'Likely' is an adjective; 'probably' is the correct adverb.",
        },
        {
          mistake: "They danced lively.",
          correction: "They danced **in a lively manner**.",
          explanation:
            "'Lively' is an adjective; express adverbially with a phrase.",
        },
      ],

      adverb_vs_adjective_reminders: {
        note_1: "Adverbs usually modify verbs, adjectives, or other adverbs.",
        note_2: "Adjectives usually modify nouns or pronouns.",
        note_3:
          "Not all words ending in -ly are adverbs (e.g., friendly = adjective).",
        note_4:
          "Some adverbs have two forms with different meanings: hard/hardly, late/lately.",
      },

      exceptions_and_traps: {
        hard_vs_hardly: {
          hard: "She works **hard** (diligently).",
          hardly: "She **hardly** works (almost not at all).",
        },
        late_vs_lately: {
          late: "He arrived **late** (not on time).",
          lately: "He hasn't been around **lately** (recently).",
        },
        good_vs_well: {
          good: "adjective: She is a **good** singer.",
          well: "adverb: She sings **well**.",
        },
      },

      learning_tips: [
        "If you can ask 'how?', the answer is usually an **adverb**.",
        "Words ending in **-ly** are **often** adverbs — but not always.",
        "**Check dictionary** usage: many words can be both adjective & adverb.",
        "Use **substitution tests**: Replace with 'in a ... way' to check correctness.",
        "**Context matters**: Same word can be adjective or adverb depending on function.",
        "**Practice with pairs**: hard/hardly, late/lately, good/well require special attention.",
      ],
    },

    notes: {
      title: "Advanced linguistic notes and considerations",
      points: [
        "Morphological productivity: The -ly suffix is highly productive for adverb formation, but not all -ly words are adverbs.",
        "Historical development: Many -ly adjectives (friendly, lovely) derive from Old English -lic, originally meaning 'having the characteristics of'.",
        "Semantic bleaching: Some adverbs have lost their original meaning (hardly ≠ 'in a hard way').",
        "Register variation: Formal writing often prefers adverbial phrases ('in a scholarly manner') over direct adverb use.",
        "Cross-linguistic influence: L1 interference can cause errors in adverb-adjective distinction for non-native speakers.",
        "Frequency effects: High-frequency words (good/well, fast) are learned earlier and more accurately.",
        "Cognitive processing: Adverb-adjective ambiguity can cause processing delays in real-time comprehension.",
      ],
    },

    // New comprehensive sections for complete coverage
    comprehensiveDefinitions: {
      mainDefinition:
        "The distinction between adverbs ending in -ly and morphologically identical or similar adjectives represents one of the most complex areas of English morphosyntax, involving intricate interactions between word formation processes, syntactic distribution, semantic interpretation, and pragmatic usage across different registers and dialects.",

      linguisticPerspective:
        "From a linguistic standpoint, this phenomenon involves multiple grammatical categories: morphology (word formation rules and exceptions), syntax (positional distribution and modification patterns), semantics (meaning relationships and scope), and pragmatics (register-appropriate usage and communicative effectiveness).",

      syntacticAnalysis:
        "Syntactically, adjectives typically occupy prenominal positions (attributive) or predicate positions (predicative), while adverbs function as verb modifiers, sentence modifiers, or degree modifiers. The identical surface forms create parsing ambiguities that must be resolved through contextual analysis.",

      semanticConsiderations:
        "Semantically, the relationship between -ly adjectives and adverbs ranges from transparent (happy → happily) to opaque (hard → hardly), with some pairs representing completely different lexical items despite morphological similarity.",

      morphologicalAspects:
        "Morphologically, the -ly suffix exhibits varying productivity: highly productive for manner adverbs (quick → quickly), but fossilized in certain adjectives (friendly, lovely) where it no longer functions as an active derivational morpheme.",
    },

    detailedExplanations: {
      historicalDevelopment:
        "The -ly suffix derives from Old English -līce (meaning 'body' or 'form'), which evolved into Middle English -liche and eventually Modern English -ly. This historical development explains why some -ly words function as adjectives (retaining the original 'having the form of' meaning) while others became productive adverb-forming suffixes.",

      cognitiveLinguistics:
        "Cognitive linguistic research suggests that speakers process adverb-adjective distinctions through prototype effects and frequency-based learning. High-frequency irregular pairs (good/well) are stored as separate lexical entries, while regular formations (quick/quickly) are processed through morphological decomposition.",

      psycholinguisticFactors:
        "Psycholinguistic studies indicate that adverb-adjective processing involves complex interactions between lexical access, morphological parsing, and syntactic integration. Error patterns in L2 acquisition often reflect interference from L1 morphological systems and overgeneralization of productive rules.",

      sociolinguisticVariation:
        "Sociolinguistic variation in adverb usage reflects register, dialectal, and social class differences. Formal academic writing favors explicit adverbial phrases, while informal speech allows more flexibility in adjective-adverb boundaries.",
    },

    practicalApplications: {
      academicWriting: [
        "Use precise adverbial forms in scholarly discourse: 'significantly different' rather than 'significant different'",
        "Employ sentence adverbs for hedging: 'arguably', 'presumably', 'conceivably'",
        "Avoid redundant adverb-verb combinations: 'whisper quietly' → 'whisper'",
        "Use adverbial phrases for -ly adjectives: 'in a scholarly manner' rather than incorrect 'scholarly'",
      ],
      businessCommunication: [
        "Choose appropriate register: 'promptly' vs. 'quickly' vs. 'in a timely manner'",
        "Use sentence adverbs for diplomatic hedging: 'Apparently', 'Presumably'",
        "Avoid informal intensifiers in formal contexts: 'deadly serious' → 'extremely serious'",
        "Master frequency adverbs for describing business processes: 'regularly', 'systematically'",
      ],
      casualConversation: [
        "Use high-frequency irregular forms naturally: good/well, fast, hard",
        "Employ sentence adverbs for emphasis: 'obviously', 'clearly', 'definitely'",
        "Understand intensifier usage: 'really good', 'pretty fast', 'fairly easy'",
        "Navigate informal adjective-adverb flexibility: 'That sounds good' (informal) vs. 'That sounds well' (formal)",
      ],
      literaryUsage: [
        "Recognize archaic adjectival uses of -ly words: 'kindly old man'",
        "Understand poetic flexibility: 'The bird flies swift' (archaic/poetic)",
        "Appreciate stylistic effects of adverb placement: 'Slowly, the door opened'",
        "Use sentence adverbs for narrative perspective: 'Surprisingly', 'Interestingly'",
      ],
    },

    commonPitfalls: {
      nativeSpeakerErrors: [
        "Hypercorrection: 'I feel badly' instead of 'I feel bad' (linking verb requires adjective)",
        "Register confusion: Using 'real good' in formal contexts instead of 'really well'",
        "Redundancy: 'advance forward', 'whisper quietly', 'shout loudly'",
        "Colloquial adverb omission: 'She did good' instead of 'She did well'",
      ],
      l2LearnerChallenges: [
        "Overgeneralization: 'friendlily' instead of 'in a friendly way'",
        "L1 interference: Translating adverb-adjective patterns from native language",
        "Confusion with false friends: 'lately' ≠ 'late', 'hardly' ≠ 'hard'",
        "Irregular forms: 'good' → 'well', not 'goodly'",
      ],
      dialectalVariations: [
        "American vs. British preferences: 'real good' (informal American) vs. 'really good'",
        "Regional intensifier usage: 'right good' (Southern American), 'proper good' (British)",
        "Frequency differences: Some -ly adverbs more common in certain dialects",
        "Historical preservation: Archaic forms preserved in certain regional varieties",
      ],
      registerMismatches: [
        "Informal intensifiers in formal writing: 'pretty important' → 'quite important'",
        "Overly formal structures in casual speech: 'in a rapid manner' → 'quickly'",
        "Academic jargon in everyday conversation: 'purportedly' → 'apparently'",
        "Inconsistent register within same text or conversation",
      ],
    },

    crossLinguisticComparisons: {
      germanicLanguages:
        "Germanic languages (German, Dutch, Scandinavian) share similar -ly/-lich/-ligt suffixes for adverb formation, but with different productivity patterns and adjective-adverb distinctions that can cause interference in English learning.",

      romanceLanguages:
        "Romance languages (French, Spanish, Italian) form adverbs with -ment/-mente suffixes and have different adjective-adverb positioning rules, leading to common errors in English adverb placement and formation among Romance L1 speakers.",

      asianLanguages:
        "Asian languages often lack explicit adverb-adjective morphological distinctions, relying instead on syntactic position and context, which can result in difficulty distinguishing English adverb-adjective functions and appropriate form selection.",

      universalTendencies:
        "Cross-linguistic research reveals universal tendencies toward adverb-adjective conflation in certain semantic domains (manner, degree, frequency), suggesting cognitive constraints on morphological category distinctions that affect second language acquisition patterns.",
    },
  };

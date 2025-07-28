import { VerbsType } from "@/types/grammars/grammar/verbs";

export const VerbsData: VerbsType = {
  definition:
    "Verbs are words that describe actions, states, or occurrences. They are essential elements in English grammar that express what subjects do, feel, or experience.",
  types: {
    actionVerbs: {
      description: "Diễn tả hành động thể chất hoặc tinh thần",
      examples: ["run", "eat", "think", "study", "write"],
    },
    stativeVerbs: {
      description:
        "Diễn tả trạng thái, cảm giác, nhận thức – không thường dùng ở thì tiếp diễn",
      examples: ["know", "believe", "like", "own", "seem"],
    },
    transitiveVerbs: {
      description: "Cần một tân ngữ theo sau",
      examples: ["make a cake", "read a book", "need help"],
    },
    intransitiveVerbs: {
      description: "Không cần tân ngữ theo sau",
      examples: ["sleep", "arrive", "cry", "go"],
    },
    linkingVerbs: {
      description: "Nối chủ ngữ với một tính từ hoặc danh từ bổ nghĩa",
      examples: ["be", "seem", "become", "look", "feel"],
    },
    auxiliaryVerbs: {
      description:
        "Trợ động từ – dùng để hình thành các thì, câu phủ định, câu hỏi",
      examples: ["be", "do", "have"],
    },
    modalVerbs: {
      description: "Diễn tả khả năng, sự cho phép, nghĩa vụ, dự đoán...",
      examples: [
        "can",
        "could",
        "may",
        "might",
        "must",
        "shall",
        "should",
        "will",
        "would",
      ],
    },
    phrasalVerbs: {
      description: "Cụm động từ gồm động từ chính + giới từ/trạng từ",
      examples: ["give up", "look after", "run into", "turn on", "come across"],
      types: {
        transitive: "Cần có tân ngữ",
        intransitive: "Không cần tân ngữ",
        separable: "Có thể tách động từ và giới từ",
        inseparable: "Không thể tách động từ và giới từ",
        threePart: "Động từ + giới từ + trạng từ",
      },
      levels: {
        A1: ["get up", "sit down", "come in", "go out", "stand up"],
        A2: [
          "look for",
          "put on",
          "take off",
          "turn on",
          "turn off",
          "clean up",
          "wake up",
        ],
        B1: [
          "give up",
          "look after",
          "run out of",
          "set up",
          "call off",
          "find out",
          "get along",
          "break down",
        ],
        B2: [
          "come across",
          "get over",
          "put up with",
          "look down on",
          "run into",
          "bring up",
          "take after",
          "get away with",
        ],
        C1: [
          "come up with",
          "get through to",
          "look up to",
          "put forward",
          "run out on",
          "take up on",
          "get round to",
          "come down to",
        ],
        C2: [
          "come down with",
          "get away with murder",
          "look down one's nose at",
          "put one's foot down",
          "run rings around",
          "take the edge off",
          "get one's act together",
          "come to terms with",
        ],
      },
      academic: [
        "carry out",
        "come up with",
        "look into",
        "set up",
        "draw up",
        "break down",
        "figure out",
        "work out",
        "point out",
        "bring up",
      ],
      business: [
        "call off",
        "put off",
        "bring up",
        "get through",
        "wrap up",
        "take on",
        "carry out",
        "set up",
        "draw up",
        "phase out",
        "get back to",
        "follow up",
        "reach out to",
        "touch base",
        "catch up",
      ],
      pronunciation: {
        stress: "Nhấn mạnh vào giới từ/trạng từ",
        intonation: "Ngữ điệu lên khi dùng trong câu hỏi",
        linking: "Liên kết mượt mà giữa động từ và giới từ",
      },
      commonErrors: [
        "Dùng nghĩa đen thay vì nghĩa bóng",
        "Đặt sai vị trí tân ngữ trong phrasal verbs có thể tách",
        "Nhầm lẫn giữa transitive và intransitive",
        "Lạm dụng trong văn viết trang trọng",
      ],
      learningTips: [
        "Học trong ngữ cảnh, không học riêng lẻ",
        "Nhóm theo động từ chính (get, put, take, etc.)",
        "Phân loại theo giới từ (up, down, out, in, etc.)",
        "Thực hành với các thì khác nhau",
      ],
    },
    regularVerbs: {
      description: "Động từ có quy tắc, thêm -ed ở quá khứ và phân từ",
      examples: ["walk – walked", "play – played", "clean – cleaned"],
    },
    irregularVerbs: {
      description: "Động từ bất quy tắc – dạng quá khứ không theo quy luật",
      examples: [
        "go – went – gone",
        "eat – ate – eaten",
        "buy – bought – bought",
      ],
    },
  },
  usage: [
    {
      type: "Diễn tả hành động",
      example: "She **plays** the piano every day.",
    },
    {
      type: "Diễn tả trạng thái",
      example: "I **know** the answer.",
    },
    {
      type: "Kết nối chủ ngữ và bổ ngữ",
      example: "He **is** a teacher.",
    },
    {
      type: "Dùng trợ động từ để hỏi/phủ định",
      example: "**Do** you like coffee? She **doesn't** eat meat.",
    },
    {
      type: "Dùng modal để diễn tả khả năng",
      example: "He **can** swim. You **must** stop.",
    },
  ],
  verbFormations: {
    regular: {
      presentSimple: {
        base: "play",
        thirdPerson: "plays",
        rules: [
          "Add -s for third person singular",
          "Add -es after s, sh, ch, x, z",
          "Change y to i and add -es for words ending in consonant + y",
        ],
      },
      pastSimple: {
        formation: "Add -ed to base form",
        pronunciation: {
          "t sound": ["walked", "stopped", "missed"],
          "d sound": ["played", "stayed", "opened"],
          "id sound": ["wanted", "needed", "decided"],
        },
      },
      presentParticiple: {
        formation: "Add -ing to base form",
        spellingRules: [
          "Double final consonant in stressed syllables (run → running)",
          "Drop final -e (write → writing)",
          "Keep -ee (see → seeing)",
        ],
      },
    },
    irregular: {
      commonPatterns: {
        vowelChange: {
          "i → a → u": ["drink → drank → drunk", "sing → sang → sung"],
          "i → o → i": ["give → gave → given", "drive → drove → driven"],
          "ea → o → o": ["speak → spoke → spoken", "break → broke → broken"],
        },
        noChange: ["cut → cut → cut", "put → put → put", "set → set → set"],
        unique: ["go → went → gone", "be → was/were → been", "do → did → done"],
      },
      frequencyGroups: {
        highFrequency: ["be", "have", "do", "say", "go", "know", "get", "make"],
        mediumFrequency: [
          "take",
          "see",
          "come",
          "think",
          "look",
          "want",
          "give",
        ],
        lowFrequency: ["arise", "strive", "slay", "smite", "beseech"],
      },
    },
  },
  verbFunctions: {
    mainVerbs: {
      definition: "Express the main action or state in a clause",
      types: {
        action: ["run", "write", "speak"],
        state: ["exist", "remain", "belong"],
        process: ["grow", "change", "develop"],
      },
    },
    auxiliaries: {
      primary: {
        be: {
          uses: ["Progressive forms", "Passive voice"],
          examples: ["is working", "was built"],
        },
        have: {
          uses: ["Perfect tenses", "Causative structures"],
          examples: ["has finished", "had done"],
        },
        do: {
          uses: ["Questions", "Negatives", "Emphasis"],
          examples: ["Do you know?", "She doesn't like", "I do understand"],
        },
      },
      modal: {
        core: {
          can: ["ability", "permission", "possibility"],
          could: ["past ability", "polite request", "suggestion"],
          may: ["formal permission", "possibility", "wish"],
          might: ["possibility", "suggestion", "criticism"],
          shall: ["future (formal)", "suggestion", "obligation"],
          should: ["advice", "expectation", "obligation"],
          will: ["future", "promise", "decision"],
          would: ["past habit", "conditional", "polite request"],
          must: ["obligation", "logical necessity", "prohibition (negative)"],
        },
        semiModal: {
          "be able to": ["ability", "future possibility"],
          "have to": ["obligation", "necessity"],
          "be going to": ["future plans", "predictions"],
          "used to": ["past habits", "past states"],
          "ought to": ["moral obligation", "expectation"],
        },
      },
    },
  },
  verbAspects: {
    simple: {
      definition: "Shows habits, facts, or completed actions",
      uses: ["General truths", "Habits", "Scheduled events"],
      examples: [
        "The sun rises in the east",
        "I play tennis on Sundays",
        "She reads every night",
        "We usually go to the beach in summer",
        "He works from home on Fridays",
      ],
    },
    progressive: {
      definition: "Shows actions in progress or temporary situations",
      uses: ["Current actions", "Temporary states", "Future arrangements"],
      examples: [
        "She is studying now",
        "They are living in Paris this year",
        "I am working on a project at the moment",
        "He is always losing his keys",
        "The children are playing outside",
      ],
    },
    perfect: {
      definition: "Shows connection between two time periods",
      uses: ["Past experiences", "Completed actions", "Continuing situations"],
      examples: [
        "I have visited Paris",
        "She has lived here since 2010",
        "They have finished their homework",
        "We have known each other for years",
        "He has just eaten lunch",
      ],
    },
    perfectProgressive: {
      definition: "Shows duration of action with relevance to another time",
      uses: [
        "Ongoing actions",
        "Duration emphasis",
        "Recent past with present result",
      ],
      examples: [
        "I have been working here for 5 years",
        "It has been raining all day",
        "They have been studying English since 2018",
        "She has been waiting for an hour",
        "We have been living in this city for too long",
      ],
    },
  },
  advancedPatterns: {
    conditionals: {
      zero: {
        structure: "If + present simple, present simple",
        usage: "General truths",
        example: "If you heat water to 100°C, it boils",
      },
      first: {
        structure: "If + present simple, will + infinitive",
        usage: "Likely future conditions",
        example: "If it rains, I will stay home",
      },
      second: {
        structure: "If + past simple, would + infinitive",
        usage: "Hypothetical present/future",
        example: "If I had money, I would travel",
      },
      third: {
        structure: "If + past perfect, would have + past participle",
        usage: "Past hypothetical",
        example: "If I had studied, I would have passed",
      },
      mixed: {
        structure: "Various combinations",
        usage: "Mixed time references",
        example: "If I had studied harder, I would be in a better position now",
      },
    },
    passiveVoice: {
      basic: "be + past participle",
      tenseFormations: {
        presentSimple: "is/are + past participle",
        pastSimple: "was/were + past participle",
        presentPerfect: "has/have been + past participle",
        pastPerfect: "had been + past participle",
        future: "will be + past participle",
      },
      uses: [
        "When the doer is unknown",
        "When the doer is obvious",
        "When the action is more important than the doer",
        "In formal or scientific writing",
      ],
    },
  },
  verbCollocations: {
    verb_noun: {
      common: ["make a mistake", "take action", "give advice"],
      business: ["conduct business", "launch product", "close deal"],
      academic: ["conduct research", "present findings", "draw conclusions"],
    },
    verb_preposition: {
      movement: ["run into", "walk through", "climb up"],
      abstract: ["depend on", "consist of", "refer to"],
      emotional: ["care about", "worry about", "think of"],
    },
    verb_verb: {
      infinitive: ["want to go", "need to work", "plan to study"],
      gerund: ["enjoy swimming", "avoid talking", "consider moving"],
    },
  },
  verbRegister: {
    formal: {
      characteristics: [
        "More passive voice usage",
        "Complex modal expressions",
        "Formal phrasal verbs",
        "Subjunctive mood",
      ],
      examples: [
        "The matter will be given due consideration",
        "It is recommended that the proposal be accepted",
        "We would be grateful if you could...",
      ],
      contexts: [
        "Academic writing",
        "Business correspondence",
        "Legal documents",
      ],
    },
    informal: {
      characteristics: [
        "Contractions",
        "Common phrasal verbs",
        "Simple tense forms",
        "Colloquial expressions",
      ],
      examples: ["I'm gonna do it", "Let's hang out", "What's up?"],
      contexts: ["Casual conversation", "Text messages", "Social media"],
    },
  },
  teachingSequence: {
    beginner: {
      focus: ["Basic forms", "Simple present/past", "Common irregulars"],
      activities: ["Gap fills", "Simple dialogues", "Picture description"],
    },
    intermediate: {
      focus: ["Perfect tenses", "Modals", "Phrasal verbs"],
      activities: ["Role plays", "Narrative tasks", "Error correction"],
    },
    advanced: {
      focus: ["Subtle distinctions", "Register awareness", "Idiomatic usage"],
      activities: ["Debates", "Academic writing", "Style analysis"],
    },
  },
  verbCategories: {
    mainCategories: {
      lexicalVerbs: {
        definition: "Verbs that carry the main meaning in a sentence",
        types: ["action", "state", "process", "event", "achievement"],
        examples: {
          action: ["run", "write", "build", "create", "destroy"],
          state: ["know", "believe", "exist", "belong", "deserve"],
          process: ["grow", "change", "develop", "evolve", "deteriorate"],
          event: ["happen", "occur", "take place", "arise", "emerge"],
          achievement: ["reach", "win", "achieve", "accomplish", "attain"],
        },
      },
      auxiliaryVerbs: {
        primary: {
          be: {
            forms: ["am", "is", "are", "was", "were", "been", "being"],
            uses: [
              "Progressive aspects",
              "Passive voice",
              "Questions and negatives with be",
              "Main verb (copular) usage",
            ],
          },
          have: {
            forms: ["have", "has", "had", "having"],
            uses: [
              "Perfect aspects",
              "Causative structures",
              "Obligation (British English)",
              "Possession as main verb",
            ],
          },
          do: {
            forms: ["do", "does", "did", "doing", "done"],
            uses: [
              "Questions in simple tenses",
              "Negatives in simple tenses",
              "Emphasis",
              "Main verb usage",
            ],
          },
        },
        modal: {
          core: {
            present: {
              can: {
                meanings: ["ability", "permission", "possibility"],
                examples: [
                  "I can swim",
                  "You can go now",
                  "It can be cold in winter",
                ],
              },
              may: {
                meanings: ["formal permission", "possibility", "wish/hope"],
                examples: [
                  "May I come in?",
                  "It may rain later",
                  "May you live long",
                ],
              },
              must: {
                meanings: [
                  "obligation",
                  "logical necessity",
                  "prohibition(negative)",
                ],
                examples: [
                  "You must finish this",
                  "He must be tired",
                  "You must not enter",
                ],
              },
            },
            past: {
              could: {
                meanings: ["past ability", "polite request", "suggestion"],
                examples: [
                  "I could swim when I was young",
                  "Could you help me?",
                  "We could try again",
                ],
              },
              might: {
                meanings: ["possibility", "polite suggestion", "criticism"],
                examples: [
                  "It might rain",
                  "You might want to try this",
                  "You might have told me",
                ],
              },
              would: {
                meanings: ["past habits", "conditional", "polite requests"],
                examples: [
                  "He would always bring flowers",
                  "I would help if I could",
                  "Would you mind moving?",
                ],
              },
            },
          },
          semiModal: {
            "be able to": {
              meanings: ["ability", "future possibility"],
              examples: [
                "I'll be able to help tomorrow",
                "She has been able to swim since childhood",
              ],
            },
            "have to": {
              meanings: ["obligation", "necessity"],
              examples: ["I have to go now", "Do you have to work tomorrow?"],
            },
            "used to": {
              meanings: ["past habits", "past states"],
              examples: [
                "I used to play tennis",
                "This building used to be a factory",
              ],
            },
          },
        },
      },
    },
    verbPatterns: {
      basic: {
        intransitive: {
          definition: "Verbs that don't need an object",
          examples: ["The baby sleeps", "The sun rises", "Time flies"],
          commonVerbs: ["arrive", "die", "exist", "happen", "live"],
        },
        transitive: {
          definition: "Verbs that need an object",
          examples: ["She loves cats", "They built a house", "I need help"],
          commonVerbs: ["build", "create", "find", "make", "want"],
        },
        ditransitive: {
          definition: "Verbs that take both direct and indirect objects",
          examples: ["She gave me a book", "They told us the truth"],
          commonVerbs: ["give", "tell", "send", "show", "offer"],
        },
      },
      advanced: {
        ergative: {
          definition:
            "Verbs that can be both transitive and intransitive with the object becoming the subject",
          examples: [
            "The sun melted the ice (transitive)",
            "The ice melted (intransitive)",
          ],
          commonVerbs: ["break", "change", "melt", "move", "stop"],
        },
        reciprocal: {
          definition: "Verbs describing mutual actions between participants",
          examples: ["They met in Paris", "The teams competed fiercely"],
          commonVerbs: ["meet", "agree", "fight", "argue", "kiss"],
        },
        copular: {
          definition: "Verbs that link the subject to subject complement",
          examples: ["She became a doctor", "The milk turned sour"],
          commonVerbs: ["be", "become", "grow", "turn", "remain"],
        },
      },
    },
    aspectualFeatures: {
      telic: {
        definition: "Verbs with a natural endpoint",
        examples: ["arrive", "finish", "die", "win", "achieve"],
        characteristics: ["Completion point", "Result state", "Achievement"],
      },
      atelic: {
        definition: "Verbs without a natural endpoint",
        examples: ["run", "sleep", "work", "live", "study"],
        characteristics: [
          "Ongoing process",
          "No inherent endpoint",
          "Activity",
        ],
      },
      stative: {
        definition: "Verbs describing states rather than actions",
        examples: ["know", "believe", "own", "love", "understand"],
        characteristics: [
          "No progression",
          "Continuous state",
          "Mental/emotional state",
        ],
      },
      dynamic: {
        definition: "Verbs describing actions or changes",
        examples: ["run", "build", "change", "grow", "learn"],
        characteristics: ["Action", "Change", "Movement"],
      },
    },
  },
  tenseFormations: {
    present: {
      simple: {
        formation: "Base form (+ -s/es for third person singular)",
        uses: ["Habits", "Facts", "Scheduled events"],
        examples: [
          "I work here",
          "She works here",
          "The Earth revolves around the sun",
        ],
      },
      continuous: {
        formation: "am/is/are + present participle",
        uses: [
          "Current actions",
          "Temporary situations",
          "Future arrangements",
        ],
        examples: [
          "I am working",
          "They are studying",
          "We are meeting tomorrow",
        ],
      },
      perfect: {
        formation: "have/has + past participle",
        uses: [
          "Past with present relevance",
          "Experiences",
          "Unfinished time periods",
        ],
        examples: [
          "I have finished",
          "She has lived here for years",
          "They have never seen snow",
        ],
      },
      perfectContinuous: {
        formation: "have/has been + present participle",
        uses: ["Ongoing situations", "Recent continuous activities"],
        examples: [
          "I have been working all day",
          "It has been raining since morning",
        ],
      },
    },
    past: {
      simple: {
        formation: "Past form (regular: + -ed)",
        uses: [
          "Completed past actions",
          "Series of events",
          "States in the past",
        ],
        examples: [
          "I worked yesterday",
          "She visited Paris last year",
          "They lived here in 1990",
        ],
      },
      continuous: {
        formation: "was/were + present participle",
        uses: [
          "Actions in progress",
          "Background events",
          "Temporary situations",
        ],
        examples: [
          "I was working at 8 PM",
          "While they were sleeping, the phone rang",
        ],
      },
      perfect: {
        formation: "had + past participle",
        uses: [
          "Earlier past actions",
          "Reported speech backshift",
          "Third conditional",
        ],
        examples: [
          "I had finished before they arrived",
          "She said she had seen him",
        ],
      },
      perfectContinuous: {
        formation: "had been + present participle",
        uses: ["Duration before past", "Cause of past result"],
        examples: [
          "I had been working for hours before they came",
          "She was tired because she had been running",
        ],
      },
    },
    future: {
      simple: {
        formation: "will + base form",
        uses: ["Predictions", "Promises", "Spontaneous decisions"],
        examples: [
          "It will rain tomorrow",
          "I will help you",
          "I'll answer that",
        ],
      },
      continuous: {
        formation: "will be + present participle",
        uses: ["Future actions in progress", "Fixed plans"],
        examples: [
          "This time tomorrow, I will be flying to Paris",
          "They will be working all day",
        ],
      },
      perfect: {
        formation: "will have + past participle",
        uses: ["Completed future actions", "Future before another future"],
        examples: [
          "By next year, I will have graduated",
          "They will have finished by then",
        ],
      },
      perfectContinuous: {
        formation: "will have been + present participle",
        uses: ["Duration up to future point"],
        examples: [
          "By next month, I will have been working here for 10 years",
          "She will have been studying for 6 hours",
        ],
      },
    },
  },
  advancedConcepts: {
    subjunctive: {
      definition: "Verb form used for hypothetical or non-factual situations",
      types: {
        present: {
          formation: "Base form for all persons",
          examples: [
            "I suggest that he be careful",
            "It is essential that she attend",
          ],
        },
        past: {
          formation: "Were for all persons / had + past participle",
          examples: ["If I were you...", "I wish I had studied harder"],
        },
      },
    },
    gerunds: {
      definition: "Verb forms that function as nouns (-ing form)",
      uses: ["Subject of sentence", "Object of verb", "Object of preposition"],
      examples: [
        "Swimming is good exercise",
        "She enjoys reading",
        "They talked about traveling",
      ],
    },
    infinitives: {
      definition: "Base form of verb, often with 'to'",
      types: {
        bare: {
          examples: ["Let me go", "Make it work", "Help me carry this"],
        },
        full: {
          examples: [
            "To err is human",
            "I want to study",
            "She hopes to succeed",
          ],
        },
      },
    },
    participles: {
      present: {
        formation: "Base + -ing",
        uses: [
          "Progressive aspects",
          "Adjective function",
          "Reduced relative clauses",
        ],
        examples: [
          "The running water",
          "Seeing the problem, she acted quickly",
        ],
      },
      past: {
        formation: "Past participle form",
        uses: ["Perfect aspects", "Passive voice", "Adjective function"],
        examples: [
          "The written word",
          "Broken promises",
          "Given the circumstances",
        ],
      },
    },
  },
  whatToLearn: {
    A1: {
      focus: "Basic verb forms and tenses",
      keyPoints: [
        "Present Simple with common verbs (be, have, do, go)",
        "Regular past simple (-ed ending)",
        "Basic irregular verbs in past simple",
        "Simple future with 'going to'",
        "Modal verb 'can' for ability",
        "Basic negative and question forms",
      ],
      commonVerbs: [
        "be, have, do, go, come",
        "like, want, need",
        "live, work, study",
        "eat, drink, sleep",
        "walk, talk, listen",
      ],
      structures: [
        "Subject + verb (I work)",
        "Subject + be + adjective (She is happy)",
        "Can + verb (I can swim)",
        "Don't/doesn't + verb (I don't like)",
      ],
      expectedOutcomes: [
        "Can use basic present tense for habits and facts",
        "Can form simple past tense of common verbs",
        "Can express basic abilities with 'can'",
        "Can make simple statements and questions",
      ],
    },
    A2: {
      focus: "Extended verb forms and basic continuous tenses",
      keyPoints: [
        "Present Continuous for current actions",
        "Past Continuous for past actions in progress",
        "Future with 'will' and 'going to'",
        "Common modal verbs (should, must, have to)",
        "Basic phrasal verbs",
        "Regular vs irregular verbs",
      ],
      newStructures: [
        "am/is/are + verb-ing",
        "was/were + verb-ing",
        "will + verb",
        "have to + verb",
        "should + verb",
      ],
      phrasalVerbs: [
        "get up, wake up",
        "turn on/off",
        "put on/take off",
        "look for/at",
      ],
      expectedOutcomes: [
        "Can describe ongoing actions",
        "Can talk about past events in detail",
        "Can express future plans and predictions",
        "Can give basic advice and obligations",
      ],
    },
    B1: {
      focus: "Intermediate tenses and verb patterns",
      keyPoints: [
        "Present Perfect for experiences and recent events",
        "Past Perfect for earlier past actions",
        "First Conditional with if/when",
        "Passive Voice in simple forms",
        "Verb patterns (verb + to-inf/gerund)",
        "More modal verbs and their uses",
      ],
      complexStructures: [
        "have/has + past participle",
        "had + past participle",
        "if + present simple, will + verb",
        "be + past participle",
        "verb + to + verb / verb + -ing",
      ],
      expectedOutcomes: [
        "Can link past with present using perfect tenses",
        "Can express conditions and consequences",
        "Can use passive voice for formal contexts",
        "Can use correct verb patterns with confidence",
      ],
    },
    B2: {
      focus: "Advanced tenses and sophisticated verb usage",
      keyPoints: [
        "Perfect Continuous tenses",
        "Mixed Conditionals",
        "Advanced Passive constructions",
        "Complex modal perfect forms",
        "Advanced phrasal verbs",
        "Causative forms (have/get something done)",
      ],
      advancedPatterns: [
        "have/has been + verb-ing",
        "would have + past participle",
        "modal + have + past participle",
        "get/have something done",
      ],
      expectedOutcomes: [
        "Can express complex temporal relationships",
        "Can use hypothetical past situations",
        "Can use sophisticated passive structures",
        "Can express subtle meanings with modals",
      ],
    },
    C1: {
      focus: "Sophisticated verb usage and nuanced meanings",
      keyPoints: [
        "All perfect and continuous combinations",
        "Advanced modal perfect forms",
        "Subtle distinctions in phrasal verbs",
        "Complex passive constructions",
        "Advanced subjunctive forms",
        "Sophisticated causative structures",
      ],
      academicPatterns: [
        "Complex perfect continuous forms",
        "Advanced modal perfect progressives",
        "Formal subjunctive structures",
        "Complex passive perfect forms",
      ],
      expectedOutcomes: [
        "Can express precise temporal and aspectual meanings",
        "Can use sophisticated hypothetical structures",
        "Can handle all passive voice combinations",
        "Can use verbs with native-like accuracy",
      ],
    },
    C2: {
      focus: "Native-like mastery and stylistic sophistication",
      keyPoints: [
        "Mastery of all verb forms and aspects",
        "Literary and archaic verb forms",
        "Sophisticated rhetorical structures",
        "Idiomatic and metaphorical usage",
        "Stylistic variations",
        "Genre-specific verb usage",
      ],
      specializedAreas: {
        literary: [
          "Poetic and archaic forms",
          "Stylistic devices",
          "Metaphorical usage",
        ],
        academic: [
          "Research methodology verbs",
          "Scholarly discourse patterns",
          "Formal argumentation",
        ],
        professional: [
          "Legal verb constructions",
          "Technical documentation",
          "Business communication",
        ],
      },
      expectedOutcomes: [
        "Can manipulate verb forms for stylistic effect",
        "Can use verbs appropriate to any genre or register",
        "Can handle the most sophisticated verbal constructions",
        "Can express the most subtle nuances of meaning",
      ],
    },
  },
};

import { adverbFrontingInversionType } from "@/types/grammars/grammar/adverbs_special/adverbFrontingInversion";

export const adverbFrontingInversionData: adverbFrontingInversionType = {
  topic: "Trạng từ đứng đầu câu – đảo ngữ",
  description:
    "Khi một số trạng từ hoặc cụm trạng từ được đưa lên đầu câu để nhấn mạnh, câu có thể đảo ngữ (đổi vị trí chủ ngữ và động từ). Điều này thường dùng trong văn viết trang trọng hoặc để nhấn mạnh ý nghĩa.",

  adverb_Fronting_Inversion_vocab: {
    definition:
      "Adverb fronting and inversion refer to placing an adverb or adverbial phrase at the beginning of a sentence, often followed by subject-verb inversion for emphasis, style, or formality.",

    comprehensive_definition:
      "Adverb fronting is a syntactic phenomenon where an adverbial element is moved from its canonical position to sentence-initial position. When this fronting triggers subject-auxiliary inversion, it creates a marked structure that serves various discourse functions including emphasis, contrast, and stylistic variation. This construction is particularly prevalent in formal registers and is governed by specific lexical and semantic constraints.",

    linguistic_background:
      "Inversion in English has historical roots in Old English word order patterns. Modern English inversion with fronted adverbials represents a residual feature of earlier Germanic syntax, preserved in specific contexts for pragmatic and stylistic purposes. The phenomenon demonstrates the interface between syntax, semantics, and discourse pragmatics.",

    core_rules: {
      types_of_inversion: [
        "Negative Adverb Inversion",
        "Place Adverb Inversion",
        "Time/Sequence Inversion",
        "Frequency Emphasis",
        "Literary/Formal Inversion",
        "Conditional Inversion",
        "Comparative Inversion",
        "Correlative Inversion",
      ],
      trigger_adverbs_or_expressions: [
        "never",
        "rarely",
        "seldom",
        "hardly",
        "barely",
        "scarcely",
        "no sooner",
        "not only",
        "little",
        "only then",
        "nowhere",
        "under no circumstances",
        "on no account",
        "in no way",
        "at no time",
        "so",
        "such",
        "neither",
        "nor",
        "not until",
        "only after",
        "only when",
        "only if",
        "only by",
      ],
      inversion_conditions: [
        "Negative or restrictive adverbs at sentence beginning",
        "Only + adverbial phrase requiring emphasis",
        "Conditional inversion without 'if'",
        "Fronted place adverbials with motion verbs",
        "Emphatic 'so' and 'such' constructions",
      ],
      word_order_patterns: [
        "Adverb + Auxiliary + Subject + Main Verb",
        "Adverbial Phrase + Auxiliary + Subject + Main Verb",
        "Only + Adverbial + Auxiliary + Subject + Main Verb",
        "Negative Adverb + Auxiliary + Subject + Main Verb",
      ],
    },

    CEFR_levels: {
      A1: ["Here is my book.", "There are three cats."],
      A2: [
        "Here comes the bus.",
        "There goes the bell.",
        "Yesterday, I went to school.",
      ],
      B1: [
        "Never have I seen such a thing.",
        "Hardly had I spoken when he arrived.",
        "Rarely do we go to the cinema.",
      ],
      B2: [
        "No sooner had she left than the phone rang.",
        "Not only did he lie, but he also cheated.",
        "Only when I arrived did I realize the problem.",
      ],
      C1: [
        "Only when the sun set did they relax.",
        "Under no circumstances should you go there.",
        "Not until midnight did the party end.",
      ],
      C2: [
        "Seldom does one encounter such brilliance.",
        "So powerful was the storm that trees were uprooted.",
        "Little did they know what was coming.",
        "Were I to reconsider, I might choose differently.",
      ],
    },

    detailed_level_breakdown: {
      A1: {
        focus:
          "Basic existential 'there' constructions and simple locative inversions",
        concepts: [
          "There + be constructions",
          "Simple location expressions",
          "Basic word order awareness",
        ],
        examples: [
          "There is a cat on the table.",
          "Here is your book.",
          "There are many students in the classroom.",
        ],
        learning_objectives: [
          "Recognize basic existential constructions",
          "Use 'there is/are' correctly",
          "Understand simple location expressions",
        ],
      },
      A2: {
        focus:
          "Expanded locative inversion and time adverbial fronting without inversion",
        concepts: [
          "Place adverbs at sentence beginning",
          "Time expressions fronting",
          "Simple motion verb constructions",
        ],
        examples: [
          "Here comes the teacher.",
          "Tomorrow, we will visit the museum.",
          "In the garden, there are beautiful flowers.",
        ],
        learning_objectives: [
          "Use basic adverb fronting for emphasis",
          "Understand motion verb + place inversion",
          "Apply time expressions at sentence beginning",
        ],
      },
      B1: {
        focus:
          "Introduction to negative adverb inversion and basic emphatic structures",
        concepts: [
          "Never, rarely, seldom + inversion",
          "Hardly + past perfect inversion",
          "Basic auxiliary verb patterns",
        ],
        examples: [
          "Never have I been so tired.",
          "Rarely does she complain about anything.",
          "Hardly had I finished when the bell rang.",
        ],
        learning_objectives: [
          "Master basic negative adverb inversions",
          "Understand auxiliary verb placement",
          "Use inversion for emphasis appropriately",
        ],
      },
      B2: {
        focus: "Complex negative inversions and correlative structures",
        concepts: [
          "No sooner...than constructions",
          "Not only...but also patterns",
          "Only + time/condition inversions",
        ],
        examples: [
          "No sooner had I arrived than it started raining.",
          "Not only did she pass the exam, but she also got the highest score.",
          "Only after the meeting did we understand the situation.",
        ],
        learning_objectives: [
          "Use complex correlative inversions",
          "Master time sequence inversions",
          "Apply formal register appropriately",
        ],
      },
      C1: {
        focus: "Advanced formal inversions and conditional structures",
        concepts: [
          "Under no circumstances constructions",
          "Conditional inversion without 'if'",
          "Academic and formal register inversions",
        ],
        examples: [
          "Under no circumstances should this be attempted.",
          "Were you to reconsider, I would support you.",
          "Should the weather improve, we will proceed with the plan.",
        ],
        learning_objectives: [
          "Master formal and academic inversions",
          "Use conditional inversions effectively",
          "Apply register-appropriate structures",
        ],
      },
      C2: {
        focus:
          "Literary, rhetorical, and stylistically sophisticated inversions",
        concepts: [
          "Literary and poetic inversions",
          "Rhetorical emphasis structures",
          "Native-like stylistic variation",
        ],
        examples: [
          "So magnificent was the sunset that all conversation ceased.",
          "Little did the ancient builders know their work would endure millennia.",
          "Nowhere in the annals of history do we find such courage.",
        ],
        learning_objectives: [
          "Master literary and rhetorical inversions",
          "Use inversion for sophisticated stylistic effects",
          "Demonstrate native-like command of register variation",
        ],
      },
    },

    inversion_structures: {
      negative_adverbs: [
        "Never have I felt so happy.",
        "Rarely do we see such kindness.",
        "Seldom does she speak in public.",
        "Hardly had I arrived when the rain started.",
        "No sooner had we left than it started to snow.",
        "Scarcely had he sat down when the bell rang.",
        "Barely had she finished speaking when applause erupted.",
      ],

      restrictive_time_conditions: [
        "Only when he apologized did she forgive him.",
        "Not until I saw the evidence did I believe it.",
        "Only after the movie ended did we realize the message.",
        "Only once the results were announced did the tension ease.",
        "Not until dawn did the storm finally subside.",
      ],

      place_expression_inversion: [
        "Here comes the train.",
        "There goes our chance.",
        "Out of the cave came a bear.",
        "Down the hill rolled the ball.",
        "Into the room walked the professor.",
        "Away flew the frightened birds.",
      ],

      emphatic_so_such: [
        "So beautiful was the view that we stayed for hours.",
        "Such was his anger that he couldn't speak.",
        "So intense was the heat that work became impossible.",
        "Such was the confusion that nobody knew what to do.",
      ],

      neither_nor: [
        "Neither do I agree.",
        "Nor did she say anything.",
        "I can't swim. Neither can my brother.",
        "Nor would I recommend such a course of action.",
      ],

      formal_literary: [
        "At no time did she mention the incident.",
        "In no way is this acceptable.",
        "Under no circumstances should he be allowed in.",
        "On no account must this information be disclosed.",
        "By no means should this be considered final.",
      ],

      conditional_inversion: [
        "Should you need assistance, please call.",
        "Were I in your position, I would reconsider.",
        "Had they arrived earlier, they would have seen the performance.",
        "Should the situation deteriorate, we will evacuate.",
      ],

      frequency_emphasis: [
        "Seldom have I witnessed such dedication.",
        "Rarely does nature display such power.",
        "Never again will I make that mistake.",
        "Not once did he complain about the conditions.",
      ],

      manner_inversion: [
        "Thus began the greatest adventure of his life.",
        "Hence arose the need for new legislation.",
        "Thereby hangs a tale of courage and determination.",
      ],
    },

    advanced_patterns: {
      correlative_conjunctions: [
        "Not only did the company survive the crisis, but it also thrived.",
        "No sooner had the announcement been made than protests began.",
        "Hardly had the doors opened when crowds rushed in.",
      ],
      emphatic_structures: [
        "So remarkable was her achievement that it made international news.",
        "Such was the force of the explosion that windows shattered miles away.",
        "Little did we realize the magnitude of the discovery.",
      ],
      literary_inversions: [
        "Gone are the days of simple solutions.",
        "Long may this tradition continue.",
        "Blessed are those who seek knowledge.",
      ],
      academic_inversions: [
        "Rarely do we encounter such clear evidence of the phenomenon.",
        "Under no circumstances can these results be generalized.",
        "Only through rigorous methodology can reliable conclusions be drawn.",
      ],
      rhetorical_inversions: [
        "What matter the obstacles when the cause is just?",
        "Where lies the fault in such noble intentions?",
        "How great the gap between aspiration and achievement!",
      ],
    },

    common_mistakes: [
      {
        mistake: "Never I have seen such a mess.",
        correction: "Never **have I** seen such a mess.",
        explanation: "Inversion is required after fronted negative adverbials.",
        level: "B1",
      },
      {
        mistake: "No sooner she arrived than it started.",
        correction: "No sooner **had she arrived** than it started.",
        explanation: "Use auxiliary 'had' with 'no sooner'.",
        level: "B2",
      },
      {
        mistake: "Only when I finished my homework I went out.",
        correction: "Only when I finished my homework **did I go out**.",
        explanation: "Subject-verb inversion after 'Only when'.",
        level: "B2",
      },
      {
        mistake: "Seldom he speaks in public.",
        correction: "Seldom **does he speak** in public.",
        explanation:
          "Auxiliary verb required in inversion with simple present.",
        level: "B1",
      },
      {
        mistake: "Not only he passed but also got distinction.",
        correction: "Not only **did he pass** but he also got distinction.",
        explanation:
          "Inversion required in first clause of 'not only...but also'.",
        level: "B2",
      },
    ],

    stylistic_usage: {
      formality_level:
        "Common in formal writing, speeches, literature, and expressive emphasis.",
      tone_effect:
        "Adds drama, elegance, emphasis, or formality to statements.",
      academic_usage: [
        "Rarely does the data contradict the hypothesis.",
        "Under no circumstances should these protocols be bypassed.",
        "Only through careful analysis can we understand the phenomenon.",
      ],
      journalistic_usage: [
        "No sooner had the law passed than protests erupted.",
        "So tense was the atmosphere that silence fell.",
        "Little did the public know about the secret negotiations.",
      ],
      literary_usage: [
        "Down came the rain in torrents.",
        "So ended the greatest love story ever told.",
        "Never again would she trust so completely.",
      ],
      spoken_vs_written:
        "Primarily written; limited use in formal speeches or dramatic contexts in speech.",
    },

    inversion_vs_emphasis: {
      distinction:
        "Adverb fronting can occur without inversion, especially for place and time.",
      example_1: "Tomorrow, we'll visit the museum. (fronting, no inversion)",
      example_2: "Seldom have I seen such skill. (fronting with inversion)",
      when_to_use: [
        "Use inversion with negative/restrictive adverbs for emphasis",
        "Use simple fronting with time/place for organization",
        "Consider register and context appropriateness",
      ],
    },

    learning_tips: [
      "If a sentence starts with a **negative**, **limiting**, or **emphatic** adverb → expect inversion.",
      "Use auxiliary verbs for inversion: do/does/did, have/had, can/could, etc.",
      "Use fronting for variety in writing and exams like IELTS/TOEFL (C1-C2).",
      "Practice rewriting: Turn normal sentences into inverted versions.",
      "Study literary texts to see sophisticated inversion patterns.",
      "Focus on register appropriateness - avoid informal contexts.",
    ],

    pronunciation_stress: {
      emphasis_patterns: [
        "Strong stress on fronted adverb",
        "Secondary stress on auxiliary verb",
        "Rising intonation for emphasis",
      ],
      intonation_rules: [
        "Falling tone on fronted negative adverbs",
        "Rising-falling pattern for emphasis",
        "Pause after fronted element in speech",
      ],
    },
  },

  levels: {
    A1_A2: {
      overview:
        "Hầu như không sử dụng đảo ngữ, nhưng học sinh có thể gặp các trạng từ đứng đầu câu không gây đảo ngữ như: 'Usually, I wake up at 7am.'",
      examples: [
        "Today, I go to school.",
        "Usually, we eat at 6pm.",
        "Sometimes, she watches TV at night.",
        "Here is your book.",
        "There are three cats.",
      ],
      note: "Không dùng đảo ngữ với các trạng từ thời gian, tần suất thông thường ở A1–A2.",
      key_concepts: [
        "Basic existential 'there' constructions",
        "Simple locative expressions",
        "Time adverbials without inversion",
      ],
      progression_goals: [
        "Master basic word order",
        "Understand existential constructions",
        "Prepare for simple inversion patterns",
      ],
    },
    B1_B2: {
      overview:
        "Bắt đầu sử dụng một số đảo ngữ với trạng từ phủ định như 'never', 'rarely', 'seldom', 'hardly', v.v.",
      rules: [
        "Đảo ngữ xảy ra khi các trạng từ phủ định, hạn định hoặc mang tính tiêu cực đứng đầu câu.",
        "Cấu trúc đảo ngữ: [Trạng từ phủ định] + trợ động từ + chủ ngữ + động từ chính",
        "Correlative constructions with inversion in first clause only",
      ],
      commonAdverbs: [
        "Never",
        "Rarely",
        "Seldom",
        "Hardly ever",
        "Only then",
        "Not only ... but also",
        "No sooner ... than",
        "Scarcely ... when",
        "Little",
        "In no way",
        "On no account",
      ],
      examples: [
        "Never have I seen such a beautiful sunset.",
        "Rarely do we go out on weekdays.",
        "Seldom does she visit her hometown.",
        "Hardly had I left the room when the phone rang.",
        "No sooner had I arrived than it started to rain.",
        "Only then did he understand the truth.",
        "Not only did she win the race, but she also broke the record.",
        "In no way can you justify your behavior.",
        "Little did he know about the surprise waiting for him.",
      ],
      note: "Đảo ngữ tạo hiệu ứng nhấn mạnh mạnh mẽ. Cần chú ý thì của câu để dùng đúng trợ động từ (do/does/did/have/had/can/will...)",
      advanced_concepts: [
        "Correlative conjunction patterns",
        "Time sequence inversions",
        "Basic conditional inversions",
      ],
      mastery_indicators: [
        "Consistent use of auxiliary verbs",
        "Appropriate register selection",
        "Accurate tense coordination",
      ],
    },
    C1_C2: {
      overview:
        "Sử dụng đa dạng các loại trạng từ, cụm giới từ, hoặc cấu trúc với ý nghĩa đặc biệt, bao gồm văn phong trang trọng, văn viết học thuật, và cấu trúc điều kiện đảo.",
      extendedStructures: [
        {
          type: "Only after, Only when, Only by",
          example:
            "Only after the meeting did we realize the seriousness of the issue.",
          usage_context: "Formal and academic contexts for temporal emphasis",
        },
        {
          type: "Under no circumstances",
          example: "Under no circumstances should you open the door.",
          usage_context: "Strong prohibition in formal contexts",
        },
        {
          type: "Not until",
          example: "Not until he apologized did she forgive him.",
          usage_context: "Temporal conditions with emphasis",
        },
        {
          type: "On no account",
          example: "On no account must this door be left unlocked.",
          usage_context: "Formal prohibition and security contexts",
        },
        {
          type: "Nowhere",
          example: "Nowhere have I found such dedication.",
          usage_context: "Literary and formal descriptive contexts",
        },
        {
          type: "At no time",
          example: "At no time did he admit his guilt.",
          usage_context: "Legal and formal denial contexts",
        },
        {
          type: "In no way",
          example: "In no way is this acceptable.",
          usage_context: "Strong rejection in formal situations",
        },
        {
          type: "So + adj + that",
          example: "So difficult was the exam that many students gave up.",
          usage_context: "Emphatic result clauses in formal writing",
        },
        {
          type: "Such + be + noun + that",
          example:
            "Such was her confidence that she walked in without knocking.",
          usage_context: "Literary and formal descriptive emphasis",
        },
      ],
      additionalPatterns: [
        {
          pattern: "Not only + auxiliary + subject + verb, but also + clause",
          example:
            "Not only does he speak French, but he also speaks Japanese.",
          formality_level: "Formal",
        },
        {
          pattern:
            "No sooner + auxiliary + subject + past participle + than + clause",
          example: "No sooner had we left than it began to snow.",
          formality_level: "Formal/Literary",
        },
        {
          pattern:
            "Scarcely + auxiliary + subject + past participle + when + clause",
          example: "Scarcely had I finished speaking when she interrupted me.",
          formality_level: "Formal/Literary",
        },
      ],
      stylisticUsage: [
        "Used in formal essays, speeches, and academic writing.",
        "Adds dramatic effect and emphasis.",
        "Requires precision with verb tenses and auxiliary placement.",
        "Common in literary and journalistic writing.",
      ],
      expert_level_features: [
        "Conditional inversion without 'if'",
        "Complex literary inversions",
        "Rhetorical question inversions",
        "Academic register precision",
      ],
      native_like_usage: [
        "Sophisticated stylistic variation",
        "Register-appropriate selection",
        "Intuitive emphasis placement",
        "Cultural context awareness",
      ],
    },
  },

  commonMistakes: [
    {
      mistake: "Incorrect: Never I have seen such beauty.",
      correction: "Correct: Never have I seen such beauty.",
      level: "B1",
      frequency: "Very common",
    },
    {
      mistake:
        "Incorrect: Not only she passed the test, but also got the scholarship.",
      correction:
        "Correct: Not only did she pass the test, but she also got the scholarship.",
      level: "B2",
      frequency: "Common",
    },
    {
      mistake: "Incorrect: Hardly I had arrived when it started raining.",
      correction: "Correct: Hardly had I arrived when it started raining.",
      level: "B2",
      frequency: "Common",
    },
    {
      mistake: "Incorrect: Only when the sun rises the birds sing.",
      correction: "Correct: Only when the sun rises do the birds sing.",
      level: "B2",
      frequency: "Frequent",
    },
  ],

  learningTips: [
    "Học thuộc các trạng từ đảo ngữ tiêu biểu: never, rarely, only, hardly, little...",
    "Luyện viết các câu đảo ngữ theo mẫu cố định.",
    "So sánh câu thường và câu đảo để hiểu sự khác biệt về nhấn mạnh.",
    "Lưu ý thì và trợ động từ tương ứng để đảo ngữ đúng ngữ pháp.",
    "Thực hành với các bài viết học thuật hoặc bài nói trang trọng để quen với văn phong.",
    "Study authentic examples from literature and formal texts.",
    "Practice transforming normal sentences into inverted forms.",
    "Focus on auxiliary verb accuracy in different tenses.",
  ],

  progressive_learning_path: {
    A1_foundation: [
      "Master basic existential constructions",
      "Understand simple word order patterns",
      "Recognize place expressions",
    ],
    A2_building: [
      "Practice basic fronting without inversion",
      "Understand motion verb + place patterns",
      "Build awareness of emphasis through word order",
    ],
    B1_development: [
      "Master negative adverb inversions",
      "Practice auxiliary verb placement",
      "Develop formal register awareness",
    ],
    B2_consolidation: [
      "Complex correlative structures",
      "Time sequence inversions",
      "Academic writing applications",
    ],
    C1_refinement: [
      "Conditional inversions",
      "Advanced formal structures",
      "Register-appropriate usage",
    ],
    C2_mastery: [
      "Literary and rhetorical inversions",
      "Native-like stylistic variation",
      "Creative and sophisticated usage",
    ],
  },

  advancedExamples: [
    "Only if you work hard will you succeed.",
    "At no point did he show any remorse.",
    "Not once did she forget to call her parents.",
    "Rarely had the team played so poorly.",
    "Such was the storm that even the ships in the harbor were damaged.",
    "Were the situation different, I might agree.",
    "Should anyone question this decision, refer them to me.",
    "So compelling was the evidence that the jury reached a unanimous verdict.",
  ],

  cross_linguistic_comparison: {
    similar_languages: [
      "German and Dutch have similar inversion patterns",
      "Romance languages use different emphasis strategies",
      "Some Scandinavian languages show parallel structures",
    ],
    unique_features: [
      "English inversion is highly restricted compared to Germanic ancestors",
      "Auxiliary verb requirement is uniquely English",
      "Register sensitivity is particularly marked in English",
    ],
    translation_challenges: [
      "Many languages lack equivalent inversion patterns",
      "Emphasis may be expressed through different means",
      "Formal register markers vary across languages",
    ],
  },

  references: [
    {
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      type: "book",
      description:
        "Comprehensive coverage of inversion patterns with practical exercises",
      level: "B1-B2",
    },
    {
      title: "Advanced Grammar in Use",
      author: "Martin Hewings",
      type: "book",
      description:
        "Detailed analysis of complex inversion structures for advanced learners",
      level: "C1-C2",
    },
    {
      title: "Practical English Usage",
      author: "Michael Swan",
      type: "book",
      description:
        "Authoritative reference on English usage including inversion rules",
      level: "B2-C2",
    },
    {
      title: "Cambridge Grammar of English",
      author: "Ronald Carter & Michael McCarthy",
      type: "book",
      description:
        "Comprehensive academic grammar with extensive inversion coverage",
      level: "C1-C2",
    },
    {
      title: "The Grammar Book",
      author: "Marianne Celce-Murcia & Diane Larsen-Freeman",
      type: "book",
      description:
        "ESL/EFL teacher reference with detailed inversion explanations",
      level: "B2-C2",
    },
    {
      title: "British Council Grammar Guide",
      author: "British Council",
      type: "website",
      url: "https://learnenglish.britishcouncil.org/grammar",
      description: "Online resource with interactive inversion exercises",
      level: "A1-C2",
    },
    {
      title: "Cambridge English Grammar Reference",
      author: "Cambridge University Press",
      type: "website",
      url: "https://dictionary.cambridge.org/grammar/",
      description: "Comprehensive online grammar reference including inversion",
      level: "B1-C2",
    },
  ],

  inversionTriggers: [
    {
      type: "So + adj + auxiliary inversion",
      structure: "So + adjective + auxiliary verb + subject + verb",
      example: "So intense was the heat that we could hardly breathe.",
      level: "C1",
      frequency: "Formal contexts",
    },
    {
      type: "Such + be + noun + that",
      structure: "Such + be + noun + that + result clause",
      example: "Such was his anger that no one dared speak.",
      level: "C1",
      frequency: "Literary/formal",
    },
    {
      type: "Only later / only much later",
      structure: "Only later + auxiliary + subject + verb",
      example: "Only much later did they understand the consequences.",
      level: "B2",
      frequency: "Common in narratives",
    },
    {
      type: "Nowhere + inversion",
      structure: "Nowhere + auxiliary + subject + verb",
      example: "Nowhere is the problem more evident than in education.",
      level: "C1",
      frequency: "Academic/formal",
    },
    {
      type: "Conditional Inversion (Type 1–3 without 'if')",
      structure: "Should/Were/Had + subject + verb",
      example: "Should you need assistance, call me.",
      examples: [
        "Should you need assistance, call me.",
        "Were I to know the truth, I wouldn't stay silent.",
        "Had they informed us earlier, we could have prepared.",
      ],
      level: "C1",
      frequency: "Formal/academic",
    },
  ],

  literaryAndRhetoricalUsage: [
    "Thường dùng trong văn học để tạo cảm xúc mạnh.",
    "Có thể thấy trong diễn văn chính trị hoặc diễn văn truyền cảm hứng.",
    "Mang tính chất nhấn mạnh mạnh mẽ – cả nghĩa lẫn ngữ điệu.",
    "Dùng trong bài thi C2 Writing hoặc Speaking để gây ấn tượng ngôn ngữ.",
    "Creates dramatic effect in storytelling and descriptive writing.",
    "Essential for sophisticated academic and professional communication.",
  ],

  discourse_functions: {
    emphasis: [
      "Highlighting unexpected or remarkable information",
      "Creating contrast with previous statements",
      "Drawing attention to specific elements",
    ],
    contrast: [
      "Setting up opposing ideas",
      "Emphasizing differences",
      "Creating dramatic juxtaposition",
    ],
    dramatic_effect: [
      "Building suspense in narratives",
      "Creating memorable statements",
      "Enhancing rhetorical impact",
    ],
    formal_register: [
      "Academic writing sophistication",
      "Professional communication enhancement",
      "Literary and artistic expression",
    ],
  },

  advancedErrorWarning: [
    {
      warning:
        "Tránh đảo ngữ khi trạng từ không phủ định hoặc không nhấn mạnh.",
      incorrect: "Always have I liked tea.",
      correct: "I have always liked tea.",
      explanation: "Positive frequency adverbs don't trigger inversion",
    },
    {
      warning: "Sai trợ động từ gây lỗi ngữ pháp.",
      incorrect: "No sooner I arrived than it rained.",
      correct: "No sooner had I arrived than it rained.",
      explanation: "Auxiliary verb 'had' is required with 'no sooner'",
    },
    {
      warning: "Avoid inversion in informal contexts.",
      incorrect: "Never have I been to McDonald's. (in casual conversation)",
      correct: "I've never been to McDonald's.",
      explanation: "Inversion sounds overly formal in casual speech",
    },
  ],

  advancedWritingTasks: [
    {
      task: "Viết một đoạn văn mô tả trải nghiệm đáng nhớ, sử dụng ít nhất 3 cấu trúc đảo ngữ.",
      instruction:
        "Sử dụng các cụm: 'Never have I...', 'Little did I know...', 'Only after...'",
      level: "C1",
      skills_targeted: [
        "Narrative writing",
        "Emphasis techniques",
        "Register control",
      ],
    },
    {
      task: "Write an academic argument using formal inversion structures.",
      instruction:
        "Include: 'Rarely do we find...', 'Under no circumstances...', 'Only through...'",
      level: "C2",
      skills_targeted: [
        "Academic writing",
        "Formal register",
        "Persuasive techniques",
      ],
    },
    {
      task: "Create a dramatic narrative opening with literary inversions.",
      instruction:
        "Use structures like 'So began...', 'Thus ended...', 'Gone were...'",
      level: "C2",
      skills_targeted: [
        "Creative writing",
        "Literary style",
        "Dramatic effect",
      ],
    },
  ],

  idiomaticInversionPhrases: [
    "Not for all the world would I do that.",
    "Little by little did he realize the truth.",
    "Only in this way can we succeed.",
    "On no condition will I accept the offer.",
    "Not even once did he hesitate.",
    "So be it.",
    "Long live the king!",
    "Come what may.",
    "Be that as it may.",
  ],

  assessment_criteria: {
    recognition: [
      "Identify inversion triggers accurately",
      "Understand emphasis and register implications",
      "Recognize formal vs. informal contexts",
    ],
    production: [
      "Use auxiliary verbs correctly",
      "Apply appropriate inversion patterns",
      "Maintain accurate tense relationships",
    ],
    appropriateness: [
      "Select register-appropriate structures",
      "Use inversion for intended effect",
      "Avoid over-use in inappropriate contexts",
    ],
  },

  extraReferences: [
    {
      title: "Cambridge English Proficiency Masterclass",
      description:
        "Advanced preparation materials with sophisticated inversion exercises",
      target_level: "C2",
    },
    {
      title: "Grammar and Vocabulary for Advanced",
      description: "Cambridge materials focusing on C1-C2 grammar structures",
      target_level: "C1-C2",
    },
    {
      title: "Collins COBUILD Advanced English Grammar",
      description: "Corpus-based grammar with authentic examples of inversion",
      target_level: "C1-C2",
    },
    {
      title: "Oxford English Grammar Course: Advanced",
      description:
        "Comprehensive advanced grammar with extensive inversion coverage",
      target_level: "C1-C2",
    },
    {
      title: "Academic Writing: A Handbook for International Students",
      description:
        "Practical guide including formal inversion in academic contexts",
      target_level: "B2-C2",
    },
  ],

  pedagogical_notes: {
    teaching_sequence: [
      "Start with existential 'there' constructions",
      "Introduce place inversion with motion verbs",
      "Move to negative adverb inversions gradually",
      "Practice auxiliary verb selection systematically",
      "Develop register awareness through context",
      "Apply to academic and creative writing",
    ],
    common_learner_difficulties: [
      "Forgetting auxiliary verbs in inversion",
      "Over-using inversion in informal contexts",
      "Confusion with different tense forms",
      "Difficulty with conditional inversion",
      "Register appropriateness challenges",
    ],
    effective_practice_methods: [
      "Transformation exercises from normal to inverted forms",
      "Context-based register selection activities",
      "Literary text analysis for sophisticated patterns",
      "Academic writing integration exercises",
      "Error correction with explanation focus",
    ],
  },
};

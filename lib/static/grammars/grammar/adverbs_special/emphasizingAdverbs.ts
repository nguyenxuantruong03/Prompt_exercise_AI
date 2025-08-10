import { emphasizingAdverbsType } from "@/types/grammars/grammar/adverbs_special/emphasizingAdverbs";

export const emphasizingAdverbsData: emphasizingAdverbsType = {
  id: 18,
  topic: "Emphasizing Adverbs",
  vietnameseTopic: "Trạng từ nhấn mạnh",
  level: "A1-C2",
  definition:
    "Emphasizing adverbs are used to add intensity, focus, or emphasis to a statement, verb, adjective, or clause.",
  vietnameseDefinition:
    "Trạng từ nhấn mạnh được dùng để tăng cường, làm nổi bật hoặc nhấn mạnh một câu, động từ, tính từ hoặc mệnh đề.",

  // Academic References
  references: {
    books: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        year: 2019,
        pages: "Units 103-105",
        isbn: "978-1108457682",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        year: 2019,
        pages: "Units 43-45, 67-69",
        isbn: "978-1108482172",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        year: 1985,
        pages: "Chapters 8.77-8.98",
        isbn: "978-0582517349",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        year: 2016,
        pages: "Sections 14-17, 271-275",
        isbn: "978-0194202411",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston, Geoffrey K. Pullum",
        year: 2002,
        pages: "Chapters 7-8",
        isbn: "978-0521431460",
      },
    ],
    websites: [
      {
        title: "British Council - Adverbs of Emphasis",
        url: "https://learnenglish.britishcouncil.org/grammar/intermediate-to-upper-intermediate/adverbs-emphasis",
        description:
          "Comprehensive guide to emphasizing adverbs with interactive exercises",
      },
      {
        title: "Cambridge Dictionary - Adverbs",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/adverbs",
        description: "Detailed grammar explanations with authentic examples",
      },
      {
        title: "Oxford Learner's Dictionary - Grammar",
        url: "https://www.oxfordlearnersdictionaries.com/definition/english/emphasize",
        description: "Academic reference with pronunciation and usage patterns",
      },
      {
        title: "Grammarly Blog - Intensifiers and Emphasizers",
        url: "https://www.grammarly.com/blog/intensifiers/",
        description: "Modern usage patterns and style guidelines",
      },
      {
        title: "English Grammar Revolution",
        url: "https://www.english-grammar-revolution.com/adverbs.html",
        description: "Visual learning approach to adverb usage and placement",
      },
    ],
    academicSources: [
      {
        title: "The Pragmatics of Emphasis in English",
        author: "Yueguo Gu",
        journal: "Journal of Pragmatics",
        year: 1993,
      },
      {
        title: "Adverbial Emphasis in English: A Corpus-Based Study",
        author: "Susan Hunston",
        journal: "Applied Linguistics",
        year: 2007,
      },
      {
        title: "Intensification in English: A Functional Approach",
        author: "Terttu Nevalainen",
        journal: "Language Variation and Change",
        year: 1991,
      },
    ],
  },

  // Level-based Learning Structure
  levelBasedLearning: {
    A1: {
      coreAdverbs: ["very", "really", "so", "too"],
      basicStructures: [
        {
          pattern: "Subject + be + very + adjective",
          example: "I am very happy.",
          vietnamese: "Tôi rất hạnh phúc.",
        },
        {
          pattern: "Subject + really + verb",
          example: "I really like pizza.",
          vietnamese: "Tôi thực sự thích pizza.",
        },
        {
          pattern: "It's so + adjective",
          example: "It's so cold today!",
          vietnamese: "Hôm nay lạnh quá!",
        },
      ],
      commonUsage: [
        {
          adverb: "very",
          usage: "Before adjectives and adverbs",
          example: "She is very kind.",
          vietnamese: "Cô ấy rất tốt bụng.",
        },
        {
          adverb: "really",
          usage: "Before verbs to show strong feeling",
          example: "I really need help.",
          vietnamese: "Tôi thực sự cần giúp đỡ.",
        },
        {
          adverb: "so",
          usage: "In exclamations",
          example: "You're so funny!",
          vietnamese: "Bạn hài hước quá!",
        },
        {
          adverb: "too",
          usage: "To show excess",
          example: "It's too hot.",
          vietnamese: "Nó quá nóng.",
        },
      ],
      fundamentalRules: [
        "'Very' comes before adjectives and adverbs",
        "'Really' comes before main verbs",
        "'So' is used in exclamations",
        "'Too' shows something is more than necessary",
      ],
    },
    A2: {
      expandedAdverbs: [
        "quite",
        "pretty",
        "absolutely",
        "completely",
        "totally",
      ],
      newStructures: [
        {
          pattern: "Subject + absolutely + verb",
          example: "I absolutely love chocolate.",
          vietnamese: "Tôi cực kỳ yêu thích sô cô la.",
        },
        {
          pattern: "It's quite + adjective",
          example: "It's quite interesting.",
          vietnamese: "Nó khá thú vị.",
        },
      ],
      intensity: [
        {
          weak: ["a bit", "slightly", "rather"],
          moderate: ["quite", "pretty", "fairly"],
          strong: ["very", "really", "extremely"],
        },
      ],
      commonCollocations: [
        {
          adverb: "absolutely",
          collocates: ["love", "hate", "agree", "fantastic"],
          examples: ["I absolutely agree.", "That's absolutely fantastic!"],
        },
        {
          adverb: "completely",
          collocates: ["different", "wrong", "right", "understand"],
          examples: ["You're completely wrong.", "I completely understand."],
        },
      ],
    },
    B1: {
      intermediateAdverbs: [
        "definitely",
        "certainly",
        "surely",
        "clearly",
        "obviously",
      ],
      complexStructures: [
        {
          pattern: "Subject + definitely + will/can + verb",
          example: "I will definitely come to your party.",
          vietnamese: "Tôi chắc chắn sẽ đến bữa tiệc của bạn.",
          usage: "Shows certainty about future actions",
        },
        {
          pattern: "Clearly/Obviously, + sentence",
          example: "Obviously, we need more time.",
          vietnamese: "Rõ ràng là chúng ta cần thêm thời gian.",
          usage: "Shows something is evident",
        },
      ],
      positionVariations: [
        {
          position: "Mid-position",
          rule: "After auxiliary verbs, before main verbs",
          examples: [
            "She has definitely improved.",
            "They will certainly help.",
          ],
        },
        {
          position: "Initial position",
          rule: "At the beginning for emphasis",
          examples: ["Clearly, this is wrong.", "Obviously, he's lying."],
        },
      ],
      contrastiveUsage: [
        {
          adverb1: "definitely",
          adverb2: "probably",
          difference:
            "Definitely shows 100% certainty, probably shows high possibility",
          examples: ["I will definitely go.", "I will probably go."],
        },
        {
          adverb1: "clearly",
          adverb2: "obviously",
          difference:
            "Clearly focuses on clarity, obviously assumes shared knowledge",
          examples: ["This is clearly wrong.", "This is obviously wrong."],
        },
      ],
    },
    B2: {
      advancedAdverbs: [
        "utterly",
        "thoroughly",
        "genuinely",
        "sincerely",
        "particularly",
      ],
      formalStructures: [
        {
          pattern: "Subject + be + utterly + past participle",
          example: "She was utterly exhausted.",
          vietnamese: "Cô ấy hoàn toàn kiệt sức.",
          register: "Formal/Literary",
        },
        {
          pattern: "I sincerely + verb",
          example: "I sincerely apologize.",
          vietnamese: "Tôi chân thành xin lỗi.",
          register: "Formal",
        },
      ],
      emphasisTechniques: [
        {
          technique: "Fronting",
          description: "Moving adverbs to the beginning for dramatic effect",
          examples: [
            "Never have I seen such beauty.",
            "Rarely do we witness such events.",
          ],
        },
        {
          technique: "Repetition",
          description: "Using multiple emphasizers for strong effect",
          examples: [
            "I really, really need this.",
            "It's absolutely, utterly impossible.",
          ],
        },
      ],
      academicUsage: [
        {
          context: "Research papers",
          adverbs: ["significantly", "notably", "particularly", "remarkably"],
          examples: [
            "The results were significantly different.",
            "This is particularly important.",
          ],
        },
        {
          context: "Formal presentations",
          adverbs: ["clearly", "obviously", "undoubtedly", "certainly"],
          examples: [
            "This clearly demonstrates...",
            "We can undoubtedly conclude...",
          ],
        },
      ],
    },
    C1: {
      sophisticatedAdverbs: [
        "unquestionably",
        "invariably",
        "categorically",
        "decidedly",
      ],
      inversionStructures: [
        {
          pattern: "Never + auxiliary + subject + main verb",
          example: "Never have I encountered such rudeness.",
          vietnamese: "Tôi chưa bao giờ gặp phải sự thô lỗ như vậy.",
          condition: "Used for dramatic emphasis in formal contexts",
        },
        {
          pattern: "Rarely + auxiliary + subject + main verb",
          example: "Rarely do we see such dedication.",
          vietnamese: "Hiếm khi chúng ta thấy sự tận tụy như vậy.",
          condition: "Shows infrequency with emphasis",
        },
      ],
      literaryDevices: [
        {
          device: "Hyperbole with adverbs",
          description: "Exaggeration for dramatic effect",
          examples: [
            "I'm absolutely dying of thirst.",
            "She's utterly devastated.",
          ],
        },
        {
          device: "Understatement with negative adverbs",
          description: "Downplaying for ironic effect",
          examples: ["It's not entirely unpleasant.", "He's hardly a fool."],
        },
      ],
      registerVariation: [
        {
          register: "Legal/Official",
          adverbs: ["categorically", "unequivocally", "explicitly"],
          characteristics: [
            "Absolute certainty",
            "No ambiguity",
            "Formal tone",
          ],
        },
        {
          register: "Academic/Scientific",
          adverbs: ["notably", "significantly", "markedly", "considerably"],
          characteristics: [
            "Measured emphasis",
            "Objective tone",
            "Precise meaning",
          ],
        },
      ],
    },
    C2: {
      expertAdverbs: [
        "emphatically",
        "vehemently",
        "unequivocally",
        "inexorably",
      ],
      rhetoricalDevices: [
        {
          device: "Climactic emphasis",
          description: "Building intensity through adverb choice",
          examples: [
            "It was wrong, clearly wrong, absolutely and utterly wrong.",
          ],
          effect: "Creates powerful emotional impact",
        },
        {
          device: "Ironic emphasis",
          description: "Using strong adverbs for understatement",
          examples: ["How absolutely thrilling to wait in line for hours."],
          effect: "Creates sarcastic or ironic tone",
        },
      ],
      nuancedUsage: [
        {
          context: "Diplomatic language",
          subtleties: [
            "Softening disagreement",
            "Maintaining face",
            "Showing respect",
          ],
          examples: [
            "We respectfully disagree.",
            "This is somewhat problematic.",
          ],
        },
        {
          context: "Literary criticism",
          subtleties: [
            "Evaluative emphasis",
            "Aesthetic judgment",
            "Cultural sensitivity",
          ],
          examples: [
            "The work is profoundly moving.",
            "This is exquisitely crafted.",
          ],
        },
      ],
      masteryCriteria: [
        "Appropriate register selection in all contexts",
        "Nuanced understanding of connotative differences",
        "Effective use of inversion for stylistic effect",
        "Cultural sensitivity in emphasis choices",
        "Creative and original usage while maintaining correctness",
      ],
    },
  },

  usage: {
    basicUsage: [
      {
        structure: "Subject + emphasizing adverb + main verb/adjective/object",
        example: "She really likes chocolate.",
        meaning: "Cô ấy thực sự thích sô cô la.",
      },
      {
        structure:
          "Emphasizing adverb + auxiliary/modal verb + subject + main verb",
        example: "Never have I seen such a beautiful sight.",
        meaning: "Tôi chưa bao giờ thấy cảnh tượng đẹp như vậy.",
      },
    ],
    positions: [
      "Before the main verb (except 'be')",
      "After the verb 'to be'",
      "At the beginning of the sentence (in inversion or dramatic tone)",
      "Before adjectives/adverbs to intensify them",
    ],
    functions: [
      "To express certainty, surprise, intensity, or contrast",
      "To strengthen an opinion or description",
      "To deny or negate with emphasis",
    ],
  },

  emphasizing_Adverbs_vocab: {
    categories: {
      emphasis_on_verbs: [
        "really",
        "definitely",
        "certainly",
        "clearly",
        "surely",
        "undoubtedly",
        "positively",
        "seriously",
      ],
      emphasis_on_adjectives: [
        "absolutely",
        "utterly",
        "completely",
        "totally",
        "entirely",
        "highly",
        "terribly",
        "incredibly",
        "extremely",
      ],
      emphasis_on_sentences: [
        "actually",
        "indeed",
        "literally",
        "frankly",
        "honestly",
        "simply",
        "just",
        "really",
      ],
      literary_or_formal: [
        "unquestionably",
        "decidedly",
        "categorically",
        "assuredly",
        "truly",
      ],
    },

    CEFR_levels: {
      A1: ["really", "very", "just"],
      A2: ["absolutely", "completely", "totally"],
      B1: ["definitely", "clearly", "actually", "honestly"],
      B2: ["utterly", "incredibly", "undoubtedly", "literally"],
      C1: ["assuredly", "categorically", "frankly", "surely"],
      C2: ["unquestionably", "decidedly", "truly", "entirely"],
    },

    position_rules: {
      before_verb: {
        rule: "Place the adverb before the main verb.",
        example: "I **really** appreciate your help.",
      },
      before_adjective: {
        rule: "Place the adverb before the adjective it modifies.",
        example: "The movie was **utterly** boring.",
      },
      beginning_of_sentence: {
        rule: "Some adverbs can appear at the start of the sentence.",
        example: "**Honestly**, I didn't expect that.",
      },
      after_auxiliary: {
        rule: "Place the adverb after the first auxiliary verb.",
        example: "She has **definitely** improved.",
      },
    },

    usage_examples: [
      "I **really** love this song.",
      "That's **absolutely** ridiculous!",
      "He **surely** knows what happened.",
      "**Frankly**, I think it's a mistake.",
      "She was **utterly** exhausted after the race.",
      "You're **totally** wrong.",
      "They have **undoubtedly** made progress.",
      "The food was **incredibly** spicy.",
      "He is **positively** furious.",
      "**Literally**, everyone was shocked.",
    ],

    common_mistakes: [
      {
        mistake: "She is very absolutely tired.",
        correction: "She is **absolutely** tired.",
        explanation:
          "`Absolutely` doesn't combine with `very`; it's already strong.",
      },
      {
        mistake: "I surely can go.",
        correction: "I **can surely** go.",
        explanation: "Adverb goes after the auxiliary verb `can`.",
      },
      {
        mistake: "Honestly I don't know.",
        correction: "**Honestly,** I don't know.",
        explanation:
          "Use a comma when fronting sentence adverbs like `honestly`.",
      },
    ],

    comparison: {
      ordinary_adverbs: ["very", "quite", "rather", "somewhat"],
      emphasizing_adverbs: [
        "absolutely",
        "completely",
        "entirely",
        "truly",
        "utterly",
      ],
      note: "Emphasizing adverbs express **extreme** or **emotional intensity**, stronger than ordinary degree adverbs.",
    },

    stylistic_notes: {
      informal_common: ["really", "just", "totally", "actually"],
      formal_written: ["unquestionably", "assuredly", "categorically"],
      spoken_emphasis: ["literally", "definitely", "seriously"],
      literary_usage: ["decidedly", "truly", "undoubtedly"],
    },

    learning_tips: [
      "Don't mix weak + strong words: e.g., say 'utterly useless', not 'very utterly useless'.",
      "Pair certain adverbs with adjectives: e.g., 'absolutely sure', 'completely wrong'.",
      "Use them for persuasive speaking and writing (IELTS, essays, debates).",
    ],
  },

  categories: {
    1: {
      name: "Basic Emphasis (A1–B1)",
      examples: [
        "really",
        "very",
        "so",
        "quite",
        "just",
        "absolutely",
        "definitely",
        "surely",
        "certainly",
        "totally",
        "completely",
        "extremely",
        "especially",
        "particularly",
      ],
      sentences: [
        "I really enjoyed the party.",
        "This is very important.",
        "She's just amazing!",
        "It's totally wrong!",
      ],
    },
    2: {
      name: "Negative Emphasis (B1–C1)",
      examples: [
        "never",
        "hardly",
        "scarcely",
        "barely",
        "no way",
        "not at all",
        "not even",
      ],
      structureNote: "Often triggers inversion in formal/advanced English.",
      sentences: [
        "Never have I been so shocked.",
        "He scarcely spoke a word.",
        "Not even a whisper was heard.",
      ],
    },
    3: {
      name: "Focus Adverbs (B1–C1)",
      description:
        "Used to focus attention on specific elements of a sentence.",
      examples: [
        "only",
        "just",
        "even",
        "also",
        "mainly",
        "particularly",
        "primarily",
        "especially",
      ],
      sentences: [
        "She only speaks Spanish.",
        "He just wants to help.",
        "Even John agreed with the decision.",
        "They mainly export electronics.",
      ],
    },
    4: {
      name: "Inversion with Emphasis (C1–C2)",
      structureNote:
        "When used at the beginning of a sentence, these adverbs cause subject-auxiliary inversion.",
      adverbs: [
        "Never",
        "Rarely",
        "Seldom",
        "Hardly ever",
        "Scarcely",
        "Not until",
        "Little",
        "Only then",
        "No sooner",
      ],
      examples: [
        "Never have I heard such nonsense.",
        "Rarely do we see such dedication.",
        "Little did he know what was coming.",
        "Only then did she realize her mistake.",
        "No sooner had I arrived than the meeting began.",
      ],
      sentences: [
        "Never have I heard such nonsense.",
        "Rarely do we see such dedication.",
        "Little did he know what was coming.",
        "Only then did she realize her mistake.",
        "No sooner had I arrived than the meeting began.",
      ],
    },
    5: {
      name: "Emphatic Degree Adverbs (B2–C2)",
      description: "Intensify adjectives or adverbs beyond their base meaning.",
      examples: [
        "utterly",
        "completely",
        "absolutely",
        "totally",
        "entirely",
        "thoroughly",
        "highly",
        "deeply",
      ],
      compatibleAdjectives: {
        utterly: ["ridiculous", "useless", "unacceptable"],
        absolutely: ["certain", "amazing", "fantastic"],
        totally: ["wrong", "different", "impossible"],
        deeply: ["moved", "concerned", "troubled"],
      },
      sentences: [
        "She was absolutely delighted.",
        "The results were totally unexpected.",
        "He's utterly incapable of lying.",
      ],
    },
    6: {
      name: "Intensifiers with Emotional Verbs/Expressions (B2–C2)",
      description: "Used with verbs expressing feelings or reactions.",
      examples: ["deeply", "strongly", "truly", "sincerely"],
      sampleVerbs: {
        deeply: ["regret", "respect", "love"],
        strongly: ["recommend", "oppose", "support"],
        sincerely: ["hope", "apologize", "thank"],
      },
      sentences: [
        "I deeply regret what happened.",
        "We strongly oppose this decision.",
        "I sincerely hope you're well.",
      ],
    },
    7: {
      name: "Cleft Sentences for Emphasis (C1–C2)",
      description: "Grammar structures used to emphasize parts of a sentence.",
      structures: [
        "It is/was + emphasized element + that/who + clause",
        "What + clause + be + emphasized element",
      ],
      examples: [
        "It was John who broke the window.",
        "What I need is a break.",
        "It's grammar that confuses me the most.",
      ],
      sentences: [
        "It was John who broke the window.",
        "What I need is a break.",
        "It's grammar that confuses me the most.",
      ],
    },
  },

  commonMistakes: [
    {
      mistake: "Using 'very' with extreme adjectives",
      correction: "Use 'absolutely' or 'completely'",
      example: "❌ very fantastic → ✅ absolutely fantastic",
    },
    {
      mistake: "Wrong placement of adverb",
      correction: "Put adverb before main verb or after 'be'",
      example: "❌ She likes really pizza. → ✅ She really likes pizza.",
    },
  ],

  advancedNotes: {
    emphasisByRepetition: {
      description: "Repetition of adverbs for dramatic effect.",
      example: "He is very, very talented.",
    },
    useInLiteraryEnglish: {
      note: "Writers use adverbial inversion and cleft structures to dramatize events or create tone.",
      example: "Barely had the sun risen when the army attacked.",
    },
  },

  relatedTopics: [
    "Inversion structures",
    "Cleft sentences",
    "Adverbs of frequency",
    "Intensifiers",
    "Focusing adverbs",
    "Discourse markers for emphasis",
  ],

  additionalTypes: {
    8: {
      name: "Emphasizing Adverbs in Spoken English (B2–C1)",
      description:
        "Trạng từ nhấn mạnh phổ biến trong văn nói, thường dùng để bày tỏ cảm xúc mạnh, bất ngờ hoặc ý kiến cá nhân.",
      examples: [
        "literally",
        "really",
        "so",
        "totally",
        "seriously",
        "honestly",
        "frankly",
      ],
      sentences: [
        "I literally died laughing.",
        "This is so good!",
        "Honestly, I didn't expect that.",
        "Frankly, I think he's wrong.",
      ],
      notes: [
        "'Literally' thường bị dùng sai để nhấn mạnh cảm xúc chứ không theo nghĩa đen.",
        "'Honestly' và 'frankly' thường đứng đầu câu để nhấn mạnh ý kiến.",
      ],
    },
    9: {
      name: "Formal & Academic Emphasis (C1–C2)",
      description:
        "Trạng từ nhấn mạnh thường xuất hiện trong văn viết trang trọng và học thuật.",
      examples: [
        "undoubtedly",
        "unquestionably",
        "invariably",
        "inevitably",
        "remarkably",
        "notably",
        "explicitly",
        "categorically",
      ],
      sentences: [
        "This result is undoubtedly significant.",
        "The experiment was remarkably successful.",
        "These findings are notably consistent with previous studies.",
      ],
      usageNote:
        "Thường dùng đầu hoặc giữa câu để làm nổi bật luận điểm trong văn học thuật, nghiên cứu.",
    },
    10: {
      name: "Negative Emphasis via Phrasal Expressions (B2–C2)",
      description:
        "Các cụm từ phủ định mang tính nhấn mạnh mạnh mẽ, thường thấy trong ngôn ngữ trang trọng hoặc đảo ngữ.",
      examples: [
        "under no circumstances",
        "by no means",
        "on no account",
        "in no way",
      ],
      sentences: [
        "Under no circumstances should you reveal the password.",
        "By no means is this an easy task.",
        "In no way was she responsible for the error.",
      ],
      structureNote: "Luôn đi kèm với đảo ngữ trong cấu trúc chính thức.",
    },
    11: {
      name: "Collocational Emphasis with Emotive Adjectives (C1–C2)",
      description:
        "Một số trạng từ nhấn mạnh thường đi với tính từ thể hiện cảm xúc, hành vi hoặc trạng thái mạnh.",
      collocations: {
        deeply: ["ashamed", "moved", "concerned"],
        strongly: ["opposed", "influenced", "affected"],
        utterly: ["defeated", "powerless", "confused"],
      },
      examples: [
        "She felt deeply ashamed of her actions.",
        "They were strongly opposed to the plan.",
        "He was utterly powerless to resist.",
      ],
      sentences: [
        "She felt deeply ashamed of her actions.",
        "They were strongly opposed to the plan.",
        "He was utterly powerless to resist.",
      ],
    },
    12: {
      name: "Double Emphasis Patterns (C2)",
      description:
        "Cấu trúc nhấn mạnh kép dùng cả trạng từ và cấu trúc đặc biệt để tăng cường sắc thái.",
      patterns: [
        "It is absolutely essential that...",
        "What I truly believe is...",
        "I do so strongly believe that...",
        "It was only then that...",
      ],
      sentences: [
        "It is absolutely essential that we act now.",
        "What I truly believe is that justice must be done.",
        "I do so strongly believe that education changes lives.",
      ],
      examples: [
        "It is absolutely essential that we act now.",
        "What I truly believe is that justice must be done.",
        "I do so strongly believe that education changes lives.",
      ],
    },
    13: {
      name: "Exclamatory Emphasis (A2–B2)",
      description: "Dùng trong câu cảm thán để nhấn mạnh cảm xúc.",
      patterns: [
        "How + adjective/adverb + subject + verb!",
        "So + adjective + that + clause",
        "Such + noun + that + clause",
      ],
      examples: [
        "How beautifully she sings!",
        "He was so tired that he fell asleep immediately.",
        "It was such a boring movie that I left early.",
      ],
      sentences: [
        "How beautifully she sings!",
        "He was so tired that he fell asleep immediately.",
        "It was such a boring movie that I left early.",
      ],
    },
    14: {
      name: "Contrast Emphasis (C1–C2)",
      description:
        "Trạng từ dùng để nhấn mạnh sự đối lập giữa hai phần thông tin.",
      examples: [
        "yet",
        "still",
        "nevertheless",
        "nonetheless",
        "even so",
        "regardless",
        "ironically",
      ],
      sentences: [
        "The data was incomplete; still, the conclusion was valid.",
        "He failed the test. Even so, he didn't give up.",
        "She was late. Nevertheless, she was accepted.",
      ],
    },
  },

  emphasisTips: {
    1: "Không nên lạm dụng trạng từ nhấn mạnh trong viết học thuật.",
    2: "Trong văn nói, trạng từ như 'literally', 'seriously' mang tính biểu cảm nhiều hơn.",
    3: "Trong cấu trúc đảo ngữ, trạng từ nhấn mạnh đi đầu luôn gây đảo trợ động từ.",
    4: "Hãy chú ý đến tính từ đi kèm — không phải trạng từ nào cũng phù hợp với mọi tính từ.",
    5: "Trong văn phong trang trọng, ưu tiên dùng các trạng từ như 'notably', 'significantly', 'explicitly'.",
  },

  // Comprehensive Error Analysis
  errorAnalysis: {
    byLevel: {
      A1: [
        {
          errorType: "Overuse of 'very'",
          commonMistakes: ["very good", "very bad", "very nice"],
          corrections: ["really good", "absolutely terrible", "really nice"],
          preventionTips: [
            "Learn stronger alternatives to 'very'",
            "Practice with emotion-based adverbs",
          ],
        },
      ],
      A2: [
        {
          errorType: "Mixing intensity levels",
          commonMistakes: ["very absolutely", "quite totally"],
          corrections: ["absolutely", "totally"],
          preventionTips: [
            "Understand that some adverbs are already strong",
            "Don't combine intensifiers",
          ],
        },
      ],
      B1: [
        {
          errorType: "Wrong position with auxiliary verbs",
          commonMistakes: ["I definitely will go", "She certainly can help"],
          corrections: ["I will definitely go", "She can certainly help"],
          preventionTips: [
            "Remember: auxiliary + adverb + main verb",
            "Practice with modal verbs",
          ],
        },
      ],
      B2: [
        {
          errorType: "Inappropriate register",
          commonMistakes: [
            "Using 'totally' in formal writing",
            "Using 'unquestionably' in casual speech",
          ],
          corrections: [
            "Use 'completely' in formal contexts",
            "Use 'definitely' in casual speech",
          ],
          preventionTips: [
            "Learn register differences",
            "Practice formal vs informal alternatives",
          ],
        },
      ],
      C1: [
        {
          errorType: "Incorrect inversion",
          commonMistakes: ["Never I have seen", "Rarely we do"],
          corrections: ["Never have I seen", "Rarely do we"],
          preventionTips: [
            "Master auxiliary placement in inversion",
            "Practice with negative adverbs",
          ],
        },
      ],
      C2: [
        {
          errorType: "Overuse in academic writing",
          commonMistakes: ["Excessive emphasis", "Wrong collocations"],
          corrections: ["Balanced emphasis", "Natural collocations"],
          preventionTips: ["Study academic corpus", "Focus on subtle emphasis"],
        },
      ],
    },
    fossilizedErrors: [
      {
        error: "very unique",
        why: "'Unique' is already absolute",
        correction: "quite unique or absolutely unique",
        drillSuggestion: "Practice with absolute adjectives",
      },
      {
        error: "more extremely",
        why: "'Extremely' cannot be graduated",
        correction: "even more + adjective",
        drillSuggestion: "Learn non-gradable adverbs",
      },
    ],
  },

  // Cultural and Contextual Usage
  culturalContext: {
    britishVsAmerican: [
      {
        context: "Intensity expression",
        british: ["rather", "quite", "terribly"],
        american: ["really", "super", "totally"],
        examples: ["British: It's rather good", "American: It's really good"],
      },
    ],
    formalVsInformal: [
      {
        situation: "Academic writing",
        formal: ["notably", "significantly", "considerably"],
        informal: ["really", "totally", "super"],
        examples: [
          "Formal: The results were significantly different",
          "Informal: The results were totally different",
        ],
      },
    ],
    generationalDifferences: [
      {
        generation: "Younger speakers",
        preferredAdverbs: ["literally", "totally", "super"],
        examples: ["That's literally amazing!", "I'm totally exhausted"],
      },
      {
        generation: "Older speakers",
        preferredAdverbs: ["quite", "rather", "decidedly"],
        examples: ["That's quite remarkable", "I'm rather tired"],
      },
    ],
  },

  // Assessment Criteria
  assessmentCriteria: {
    A1: {
      canDo: [
        "Use 'very' with common adjectives",
        "Use 'really' with basic verbs",
        "Express simple emphasis with 'so' and 'too'",
      ],
      keyIndicators: [
        "Correct placement with 'very'",
        "Basic emotional expression",
        "Simple exclamations",
      ],
      commonGaps: [
        "Overuse of 'very'",
        "Limited vocabulary range",
        "Confusion with 'too' (excess) vs 'very'",
      ],
    },
    A2: {
      canDo: [
        "Use stronger adverbs like 'absolutely' and 'completely'",
        "Express different levels of intensity",
        "Use emphasis in simple conversations",
      ],
      keyIndicators: [
        "Varied adverb choice",
        "Appropriate intensity matching",
        "Natural conversational use",
      ],
      commonGaps: [
        "Mixing intensity levels incorrectly",
        "Uncertainty about when to use strong vs. weak adverbs",
        "Limited collocation knowledge",
      ],
    },
    B1: {
      canDo: [
        "Use adverbs for certainty and opinion",
        "Position adverbs correctly with auxiliary verbs",
        "Express emphasis in various contexts",
      ],
      keyIndicators: [
        "Correct placement patterns",
        "Appropriate certainty expression",
        "Opinion marking with adverbs",
      ],
      commonGaps: [
        "Wrong position with modals and auxiliaries",
        "Confusion between similar adverbs (clearly vs obviously)",
        "Overuse of common adverbs",
      ],
    },
    B2: {
      canDo: [
        "Use sophisticated emphasis techniques",
        "Vary register appropriately",
        "Employ emphasis for persuasion and argumentation",
      ],
      keyIndicators: [
        "Register awareness",
        "Persuasive use of emphasis",
        "Complex structure handling",
      ],
      commonGaps: [
        "Inappropriate register choices",
        "Limited academic/formal vocabulary",
        "Overemphasis in writing",
      ],
    },
    C1: {
      canDo: [
        "Use inversion structures for dramatic effect",
        "Employ literary and formal emphasis techniques",
        "Demonstrate nuanced understanding of connotations",
      ],
      keyIndicators: [
        "Successful inversion use",
        "Stylistic variety",
        "Contextual appropriateness",
      ],
      commonGaps: [
        "Incorrect inversion patterns",
        "Overuse of dramatic structures",
        "Misunderstanding of subtle differences",
      ],
    },
    C2: {
      canDo: [
        "Use emphasis creatively and originally",
        "Employ sophisticated rhetorical devices",
        "Adapt emphasis to any context with cultural sensitivity",
      ],
      keyIndicators: [
        "Creative and original usage",
        "Rhetorical sophistication",
        "Cultural and contextual sensitivity",
      ],
      commonGaps: [
        "Overcomplication",
        "Inappropriate creative attempts",
        "Lack of audience awareness",
      ],
    },
  },
};

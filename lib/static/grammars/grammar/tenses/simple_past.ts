export const Simple_PastData = {
  id: 55,
  citations: [
    {
      title: "Simple Past Tense - Cambridge Grammar",
      url: "https://dictionary.cambridge.org/grammar/british-grammar/past-simple-worked",
      description:
        "Complete guide to Simple Past tense with rules and examples",
      source: "Cambridge Dictionary",
      type: "reference",
    },
    {
      title: "Past Simple - EnglishPage",
      url: "https://www.englishpage.com/verbpage/simplepage.html",
      description:
        "Comprehensive tutorial on Simple Past tense usage and formation",
      source: "EnglishPage",
      type: "explanation",
    },
    {
      title: "Simple Past Exercises - ESL Gold",
      url: "https://www.eslgold.com/grammar/simple_past.html",
      description:
        "Multiple exercises and quizzes for practicing Simple Past tense",
      source: "ESL Gold",
      type: "practice",
    },
    {
      title: "Irregular Verbs List - Oxford Learner's Dictionary",
      url: "https://www.oxfordlearnersdictionaries.com/definition/english/irregular-verb",
      description: "Comprehensive list of irregular verbs with past forms",
      source: "Oxford University Press",
      type: "reference",
    },
    {
      title: "Simple Past vs Present Perfect - BBC Learning English",
      url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-12/session-2",
      description:
        "Detailed comparison between Simple Past and Present Perfect",
      source: "BBC Learning English",
      type: "comparison",
    },
    {
      title: "Advanced Simple Past Usage - British Council",
      url: "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-simple-and-past-continuous",
      description: "Advanced usage patterns and context-specific applications",
      source: "British Council",
      type: "advanced",
    },
  ],
  level: "A1-C2",
  cefrBreakdown: {
    A1: {
      focus: "Basic past actions with simple verbs",
      keyPoints: [
        "Regular verbs with -ed",
        "Common irregular verbs (go-went, see-saw)",
        "Simple time expressions",
      ],
      examples: [
        "I walked to school.",
        "She ate an apple.",
        "Did you go home?",
      ],
    },
    A2: {
      focus: "Past habits and sequences of events",
      keyPoints: [
        "More irregular verbs",
        "Past time expressions",
        "Negative forms",
      ],
      examples: [
        "I didn't see the movie.",
        "He always played football on Sundays.",
        "What did you do yesterday?",
      ],
    },
    B1: {
      focus: "Complex past narratives and duration",
      keyPoints: [
        "Duration with for/during",
        "Past habits vs used to",
        "Complex time clauses",
      ],
      examples: [
        "I lived there for ten years.",
        "When I was young, I collected stamps.",
        "After she finished, she left.",
      ],
    },
    B2: {
      focus: "Past in reported speech and complex contexts",
      keyPoints: [
        "Reported speech changes",
        "Past in conditional sentences",
        "Emphasis and inversion",
      ],
      examples: [
        "She said she had seen him.",
        "If I had known, I would have come.",
        "Never had I seen such beauty.",
      ],
    },
    C1: {
      focus: "Stylistic and narrative uses",
      keyPoints: [
        "Historical present vs past",
        "Literary devices",
        "Formal register",
      ],
      examples: [
        "The report concluded that the experiment succeeded.",
        "Hardly had he arrived when it started raining.",
      ],
    },
    C2: {
      focus: "Nuanced and sophisticated usage",
      keyPoints: [
        "Subtle temporal relationships",
        "Academic and professional contexts",
        "Idiomatic expressions",
      ],
      examples: [
        "The data suggested a correlation.",
        "Scarcely had the meeting begun when protests erupted.",
      ],
    },
  },
  forms: {
    affirmative: "Subject + verb (past form) • e.g., I walked, She went",
    negative:
      "Subject + did not (didn't) + base verb • e.g., I didn't go, He didn't eat",
    question: "Did + subject + base verb? • e.g., Did you see it?",
    negativeQuestion:
      "Didn't + subject + base verb? • e.g., Didn't you see it?",
    whQuestion:
      "Wh-word + did + subject + base verb? • e.g., Where did you go?",
    subjectQuestion: "Who/What + past form? • e.g., Who came to the party?",
    passiveForm:
      "Subject + was/were + past participle • e.g., The book was written in 1990.",
  },
  formationRules: {
    regular: {
      baseRule: "Add -ed to the base form",
      spellingRules: [
        {
          rule: "Most verbs: add -ed",
          examples: ["walk → walked", "play → played", "listen → listened"],
        },
        {
          rule: "Verbs ending in -e: add -d only",
          examples: ["love → loved", "dance → danced", "arrive → arrived"],
        },
        {
          rule: "Verbs ending in consonant + y: change y to i and add -ed",
          examples: ["study → studied", "cry → cried", "try → tried"],
        },
        {
          rule: "Verbs ending in vowel + y: just add -ed",
          examples: ["play → played", "stay → stayed", "enjoy → enjoyed"],
        },
        {
          rule: "One-syllable verbs ending in consonant-vowel-consonant: double the final consonant and add -ed",
          examples: ["stop → stopped", "plan → planned", "rob → robbed"],
        },
        {
          rule: "Two-syllable verbs with stress on second syllable: double final consonant",
          examples: [
            "prefer → preferred",
            "admit → admitted",
            "occur → occurred",
          ],
        },
        {
          rule: "Verbs ending in -l: double the l (British English)",
          examples: [
            "travel → travelled",
            "cancel → cancelled",
            "model → modelled",
          ],
        },
      ],
    },
    irregular: {
      common: {
        A1Level: [
          "be → was/were",
          "go → went",
          "have → had",
          "do → did",
          "get → got",
          "make → made",
          "come → came",
          "see → saw",
          "take → took",
          "give → gave",
        ],
        A2Level: [
          "eat → ate",
          "drink → drank",
          "buy → bought",
          "think → thought",
          "know → knew",
          "say → said",
          "tell → told",
          "find → found",
          "leave → left",
          "feel → felt",
        ],
        B1Level: [
          "teach → taught",
          "catch → caught",
          "bring → brought",
          "fight → fought",
          "seek → sought",
          "build → built",
          "spend → spent",
          "send → sent",
          "lend → lent",
        ],
        B2Level: [
          "arise → arose",
          "bear → bore",
          "bind → bound",
          "breed → bred",
          "cast → cast",
          "cling → clung",
          "creep → crept",
          "flee → fled",
        ],
        advancedLevel: [
          "behold → beheld",
          "beseech → besought",
          "cleave → cleft/clove",
          "forbear → forbore",
          "forsake → forsook",
          "smite → smote",
          "strive → strove",
        ],
      },
      patterns: [
        {
          pattern: "No change (same form)",
          examples: [
            "cut → cut",
            "put → put",
            "hit → hit",
            "shut → shut",
            "cost → cost",
          ],
        },
        {
          pattern: "Change vowel sound",
          examples: [
            "sing → sang",
            "ring → rang",
            "drink → drank",
            "swim → swam",
          ],
        },
        {
          pattern: "Add -t ending",
          examples: [
            "burn → burnt",
            "learn → learnt",
            "smell → smelt",
            "spoil → spoilt",
          ],
        },
        {
          pattern: "Completely different form",
          examples: [
            "go → went",
            "be → was/were",
            "buy → bought",
            "catch → caught",
          ],
        },
      ],
    },
  },
  usage: [
    {
      type: "Completed actions in the past",
      description:
        "Diễn tả hành động đã hoàn tất tại một thời điểm xác định trong quá khứ",
      example: "I visited Paris last year.",
      level: "A1-C2",
      additionalExamples: [
        "Shakespeare wrote Hamlet in 1601.",
        "The meeting ended at 5 PM yesterday.",
        "She graduated from university in 2020.",
      ],
    },
    {
      type: "Series of past events",
      description: "Diễn tả các hành động xảy ra liên tiếp trong quá khứ",
      example: "She got up, brushed her teeth, and went to school.",
      level: "A2-C2",
      additionalExamples: [
        "He opened the door, walked in, and sat down.",
        "First, we visited the museum, then we had lunch, and finally we went shopping.",
        "The CEO announced the merger, explained the benefits, and answered questions.",
      ],
    },
    {
      type: "Duration in the past",
      description:
        "Diễn tả hành động kéo dài trong một khoảng thời gian trong quá khứ và đã kết thúc",
      example: "We lived in Japan for five years.",
      level: "B1-C2",
      additionalExamples: [
        "I worked at that company for a decade.",
        "They studied French throughout high school.",
        "The project lasted from 2018 to 2022.",
      ],
    },
    {
      type: "Habits in the past",
      description:
        "Thói quen trong quá khứ (thường dùng với trạng từ chỉ tần suất hoặc 'used to')",
      example: "He always carried an umbrella.",
      level: "A2-C2",
      additionalExamples: [
        "My grandmother often told us stories.",
        "In those days, people rarely traveled abroad.",
        "Every summer, we vacationed at the beach.",
      ],
    },
    {
      type: "Past states and conditions",
      description: "Diễn tả trạng thái hoặc tình huống trong quá khứ",
      example: "She was happy when she lived in the countryside.",
      level: "A2-C2",
      additionalExamples: [
        "The weather was terrible last week.",
        "He felt confident about the exam.",
        "The old building stood on that corner for decades.",
      ],
    },
    {
      type: "Reported speech",
      description: "Chuyển đổi thì trong lời nói gián tiếp",
      example: "He said he saw her at the party.",
      level: "B2-C2",
      additionalExamples: [
        "She mentioned that she knew the answer.",
        "They claimed they finished the project.",
        "The witness testified that he recognized the suspect.",
      ],
    },
    {
      type: "Conditional sentences (Type 2 & 3)",
      description:
        "Sử dụng trong câu điều kiện không có thật ở hiện tại hoặc quá khứ",
      example: "If I won the lottery, I would travel the world.",
      level: "B2-C2",
      additionalExamples: [
        "If she studied harder, she would pass the exam.",
        "If they had left earlier, they wouldn't have missed the train.",
        "Were I in your position, I would accept the offer.",
      ],
    },
    {
      type: "Polite requests and suggestions",
      description: "Diễn tả yêu cầu lịch sự hoặc đề xuất",
      example: "I wondered if you could help me.",
      level: "B2-C2",
      additionalExamples: [
        "I was hoping you might consider my proposal.",
        "Did you want to join us for dinner?",
        "I thought perhaps we could meet tomorrow.",
      ],
    },
  ],
  timeMarkers: [
    "yesterday",
    "last night",
    "last week",
    "last year",
    "in 1990",
    "when I was a child",
    "two days ago",
    "just now",
    "this morning (if it's now afternoon)",
    "the other day",
    "once upon a time",
    "long ago",
    "in the past",
    "formerly",
    "previously",
    "at that time",
    "during the war",
    "in those days",
    "back then",
    "in my youth",
    "years ago",
    "months ago",
    "decades ago",
    "centuries ago",
    "recently (finished time period)",
    "just (completed action)",
    "already (in past context)",
    "never (up to a past point)",
    "ever (up to a past point)",
    "before (specific past time)",
    "after (specific past time)",
    "when + past clause",
    "while + past continuous",
    "as soon as + past",
    "until + past point",
    "since + starting point (when used with past context)",
  ],
  recognition: [
    "Động từ ở dạng quá khứ (regular: verb + ed; irregular: dạng bất quy tắc)",
    "Trợ động từ 'did' trong câu phủ định và nghi vấn",
    "Không chia động từ chính trong câu phủ định và nghi vấn (sử dụng dạng nguyên mẫu)",
    "Thường đi kèm với các mốc thời gian cụ thể trong quá khứ",
    "Câu hỏi với 'did' ở đầu câu (yes/no questions)",
    "Câu hỏi với từ để hỏi + 'did' (wh-questions)",
    "Dạng phủ định với 'didn't' + động từ nguyên mẫu",
    "Sử dụng 'was/were' cho động từ 'to be' trong quá khứ",
    "Không sử dụng 'did' với động từ 'to be' trong câu hỏi và phủ định",
    "Modal verbs trong quá khứ: could, would, might, should have",
    "Passive voice với 'was/were' + past participle",
    "Past time clauses với 'when', 'after', 'before', 'while'",
  ],
  examples: {
    affirmative: [
      "I watched a movie last night.",
      "She visited her grandmother yesterday.",
      "They went to London in 2015.",
      "The concert started at 8 PM.",
      "We enjoyed the vacation immensely.",
      "He completed his PhD in 2019.",
      "The company launched its new product successfully.",
      "She taught English for fifteen years.",
      "The ancient civilization flourished for centuries.",
      "Mozart composed his first symphony at age eight.",
    ],
    negative: [
      "I didn't see him at the party.",
      "He didn't finish his homework.",
      "We didn't go out last weekend.",
      "She didn't receive the invitation.",
      "They didn't understand the instructions.",
      "The train didn't arrive on time.",
      "I didn't realize how late it was.",
      "He didn't mention the problem.",
      "We didn't expect such a warm welcome.",
      "The experiment didn't yield the anticipated results.",
    ],
    question: [
      "Did you enjoy the concert?",
      "Did she call you?",
      "Did they arrive on time?",
      "Where did you go on vacation?",
      "When did the meeting end?",
      "Why did he leave early?",
      "How did you solve the problem?",
      "What did she say about it?",
      "Who did you meet at the conference?",
      "Which route did they take?",
    ],
    usageExamples: {
      "Completed actions": "I met him at the conference last year.",
      "Series of events": "He entered the room, sat down, and started talking.",
      "Duration in the past": "They stayed in Vietnam for three months.",
      "Past habits": "My father always read the newspaper after dinner.",
      "Past states": "The old castle was magnificent in its prime.",
      "Reported speech": "She said she understood the assignment perfectly.",
      "Polite requests": "I was wondering if you could spare a moment.",
      "Conditional contexts":
        "If I had more time, I would learn another language.",
    },
    levelSpecific: {
      A1: [
        "I walked to school.",
        "She ate breakfast.",
        "We played football.",
        "He was happy.",
        "They went home.",
      ],
      A2: [
        "I didn't see the movie yesterday.",
        "Did you visit your friends?",
        "She always helped her mother.",
        "We lived there for two years.",
        "What did you do last weekend?",
      ],
      B1: [
        "After I finished my work, I went for a walk.",
        "She had been studying French for years before she moved to Paris.",
        "I used to collect stamps when I was a child.",
        "The presentation lasted for over an hour.",
        "While he was explaining, I took notes.",
      ],
      B2: [
        "He mentioned that he had seen her before.",
        "If I had known about the traffic, I would have left earlier.",
        "The research indicated significant improvements.",
        "She wished she had studied medicine instead.",
        "Had I been there, I would have intervened.",
      ],
      C1: [
        "The analysis revealed that the hypothesis was incorrect.",
        "Scarcely had he finished speaking when applause erupted.",
        "The committee determined that further investigation was warranted.",
        "Never before had such a phenomenon been observed.",
        "Little did we know that this decision would change everything.",
      ],
      C2: [
        "The data substantiated claims that had been disputed for decades.",
        "No sooner had the announcement been made than speculation began.",
        "The findings corroborated what researchers had long suspected.",
        "Rarely had such unanimity been achieved among the stakeholders.",
        "The precedent established then continues to influence policy today.",
      ],
    },
  },
  commonMistakes: [
    {
      mistake: "Using present form instead of past",
      incorrect: "I go to the store yesterday.",
      correct: "I went to the store yesterday.",
      explanation: "Must use past tense form with past time markers",
      level: "A1-A2",
    },
    {
      mistake: "Adding -ed to irregular verbs",
      incorrect: "I goed to school.",
      correct: "I went to school.",
      explanation:
        "Irregular verbs have special past forms that must be memorized",
      level: "A1-B1",
    },
    {
      mistake: "Using 'did' with past form in questions",
      incorrect: "Did you went home?",
      correct: "Did you go home?",
      explanation: "Use base form after 'did' in questions and negatives",
      level: "A2-B1",
    },
    {
      mistake: "Double past marking",
      incorrect: "I didn't went there.",
      correct: "I didn't go there.",
      explanation: "Don't use past form after 'didn't'",
      level: "A2-B1",
    },
    {
      mistake: "Incorrect 'to be' past forms",
      incorrect: "I were happy.",
      correct: "I was happy.",
      explanation: "Use 'was' with I/he/she/it, 'were' with you/we/they",
      level: "A1-A2",
    },
    {
      mistake: "Using 'did' with 'to be'",
      incorrect: "Did you was there?",
      correct: "Were you there?",
      explanation: "'To be' doesn't use 'did' in questions",
      level: "A2-B1",
    },
    {
      mistake: "Confusing simple past with present perfect",
      incorrect: "I have seen him yesterday.",
      correct: "I saw him yesterday.",
      explanation: "Use simple past with specific past time references",
      level: "B1-B2",
    },
    {
      mistake: "Wrong spelling of regular past forms",
      incorrect: "I stoped the car.",
      correct: "I stopped the car.",
      explanation:
        "Double the consonant when verb ends in consonant-vowel-consonant",
      level: "A1-A2",
    },
    {
      mistake: "Incorrect reported speech changes",
      incorrect: "He said he will come tomorrow.",
      correct: "He said he would come the next day.",
      explanation: "Must change tense and time references in reported speech",
      level: "B2-C1",
    },
    {
      mistake: "Using past tense in time clauses with future meaning",
      incorrect: "When I will finish, I will call you.",
      correct: "When I finish, I will call you.",
      explanation: "Use present tense in time clauses referring to future",
      level: "B1-B2",
    },
  ],
  contrastWithOtherTenses: {
    "Simple Past vs Present Perfect": {
      simplePast: "Finished actions at specific past times",
      presentPerfect: "Actions with present relevance or unspecified time",
      examples: {
        simplePast: "I saw that movie last week.",
        presentPerfect: "I have seen that movie (but don't specify when).",
      },
    },
    "Simple Past vs Past Continuous": {
      simplePast: "Completed actions or states",
      pastContinuous: "Ongoing actions at a specific past time",
      examples: {
        simplePast: "I read a book last night.",
        pastContinuous: "I was reading a book when you called.",
      },
    },
    "Simple Past vs Past Perfect": {
      simplePast: "Actions in chronological order",
      pastPerfect: "Actions completed before another past action",
      examples: {
        simplePast: "I finished my homework and went to bed.",
        pastPerfect: "I had finished my homework before I went to bed.",
      },
    },
    "Simple Past vs 'Used to'": {
      simplePast: "General past actions and states",
      usedTo: "Emphasizes past habits that no longer exist",
      examples: {
        simplePast: "I lived in Paris for five years.",
        usedTo: "I used to live in Paris (but I don't anymore).",
      },
    },
  },
  notes: [
    "Với động từ có quy tắc, thêm -ed (walk → walked, play → played).",
    "Với động từ bất quy tắc (go → went, eat → ate, see → saw), cần học thuộc danh sách Irregular Verbs.",
    "Trong câu phủ định và câu hỏi, dùng 'did' và giữ động từ chính ở dạng nguyên mẫu.",
    "Không dùng thì quá khứ đơn để mô tả hành động chưa hoàn tất hoặc không xác định thời gian (khi đó dùng Past Perfect hoặc Present Perfect).",
    "Simple Past thường đi kèm với mốc thời gian cụ thể trong quá khứ (yesterday, last week, in 2020).",
    "Động từ 'to be' có dạng đặc biệt: was (I/he/she/it) và were (you/we/they).",
    "Trong văn viết trang trọng, tránh dùng dạng rút gọn (didn't → did not, wasn't → was not).",
    "Simple Past thường được dùng để kể chuyện và mô tả sự kiện theo trình tự thời gian.",
    "Trong reported speech, thì hiện tại thường chuyển thành Simple Past.",
    "Modal verbs trong quá khứ có dạng đặc biệt: can → could, will → would, may → might.",
    "Cẩn thận với động từ có hai dạng quá khứ (learnt/learned, burnt/burned).",
    "Simple Past có thể diễn tả tính lịch sự trong một số ngữ cảnh (I wondered if...).",
    "Trong câu điều kiện loại 2, mệnh đề if dùng Simple Past để diễn tả tình huống không có thật ở hiện tại.",
    "Với một số động từ cảm xúc và tri giác, Simple Past có thể diễn tả trạng thái tạm thời trong quá khứ.",
    "Trong academic writing, Simple Past thường dùng để mô tả phương pháp nghiên cứu và kết quả đã thực hiện.",
  ],
  culturalContext: {
    storytelling:
      "Simple Past is the backbone of narrative English, used in literature, news reports, and everyday storytelling",
    historicalNarrative:
      "Essential for describing historical events and biographical information",
    academicWriting:
      "Used to report completed research, describe methodology, and present findings",
    businessCommunication:
      "Important for describing past achievements, experiences, and completed projects",
  },
  practiceActivities: {
    A1A2: [
      "Fill in the blanks with correct past tense forms",
      "Transform present tense sentences to past tense",
      "Match irregular verbs with their past forms",
      "Complete dialogues using Simple Past",
    ],
    B1B2: [
      "Identify correct tense usage in mixed contexts",
      "Rewrite reported speech using appropriate tense changes",
      "Complete narrative texts with appropriate past tenses",
      "Error correction exercises focusing on common mistakes",
    ],
    C1C2: [
      "Analyze complex texts for sophisticated past tense usage",
      "Practice formal register and academic writing contexts",
      "Master subtle distinctions between past tenses",
      "Create complex narratives using varied past tense forms",
    ],
  },
  pronunciation: {
    regularVerbs: {
      edEndings: [
        {
          sound: "/t/",
          rule: "After voiceless consonants (p, k, f, s, sh, ch, th)",
          examples: [
            "walked /wɔːkt/",
            "stopped /stɒpt/",
            "laughed /læft/",
            "watched /wɒtʃt/",
            "finished /ˈfɪnɪʃt/",
          ],
        },
        {
          sound: "/d/",
          rule: "After voiced consonants and vowels (b, g, l, m, n, r, v, w, y, z)",
          examples: [
            "played /pleɪd/",
            "loved /lʌvd/",
            "called /kɔːld/",
            "seemed /siːmd/",
            "lived /lɪvd/",
          ],
        },
        {
          sound: "/ɪd/",
          rule: "After /t/ and /d/ sounds",
          examples: [
            "wanted /ˈwɒntɪd/",
            "needed /ˈniːdɪd/",
            "decided /dɪˈsaɪdɪd/",
            "visited /ˈvɪzɪtɪd/",
            "created /kriˈeɪtɪd/",
          ],
        },
      ],
      commonMispronunciations: [
        {
          incorrect: "walked /wɔːkəd/",
          correct: "walked /wɔːkt/",
          note: "Don't add extra syllable to /t/ endings",
        },
        {
          incorrect: "played /pleɪtɪd/",
          correct: "played /pleɪd/",
          note: "Use /d/ sound, not /t/ after voiced sounds",
        },
      ],
    },
    irregularVerbs: {
      patterns: [
        {
          pattern: "Vowel change",
          examples: [
            "sing → sang /sæŋ/",
            "drink → drank /dræŋk/",
            "begin → began /bɪˈɡæn/",
          ],
        },
        {
          pattern: "Complete change",
          examples: [
            "go → went /went/",
            "buy → bought /bɔːt/",
            "catch → caught /kɔːt/",
          ],
        },
      ],
    },
  },

  etymology: {
    development:
      "The Simple Past in English evolved from Old English past tense forms, influenced by Germanic language patterns",
    historicalChanges: [
      "Old English had more complex past tense inflections",
      "Middle English simplified many irregular forms",
      "Modern English standardized the -ed ending for regular verbs",
      "Some irregular verbs retained ancient Germanic strong verb patterns",
    ],
    influences: [
      "Germanic languages (Old English foundation)",
      "Norman French (some vocabulary)",
      "Latin (academic and formal registers)",
      "Norse (some irregular verb forms)",
    ],
  },

  regionalVariations: {
    americanEnglish: {
      preferences: [
        "Prefer -ed endings: learned, burned, spelled",
        "Simple past in some contexts where British uses present perfect",
        "Different irregular verb preferences",
      ],
      examples: [
        "I just ate lunch (American) vs I've just had lunch (British)",
        "Did you finish yet? (American) vs Have you finished yet? (British)",
      ],
    },
    britishEnglish: {
      preferences: [
        "Some -t endings: learnt, burnt, spelt",
        "More present perfect usage",
        "Different time expression preferences",
      ],
      examples: [
        "I've already done it (British) vs I already did it (American)",
        "travelling vs traveling",
        "cancelled vs canceled",
      ],
    },
    otherVariants: {
      australian:
        "Generally follows British patterns with some unique expressions",
      canadian: "Mix of American and British usage",
      indian: "Unique expressions and some different time reference patterns",
    },
  },

  semanticFeatures: {
    aspectualProperties: {
      perfective: "Views actions as complete wholes",
      bounded: "Actions have clear beginning and end",
      punctual: "Can express momentary actions",
      telic: "Actions with natural endpoints",
    },
    temporalSemantics: {
      pastTimeReference: "Locates events before speech time",
      definiteness: "Requires definite time reference (explicit or implicit)",
      sequence: "Can express ordered sequences of events",
      simultaneity: "Can express concurrent past events with other tenses",
    },
  },

  discourseFunctions: {
    narrative: {
      mainSequence: "Advances the main storyline",
      backgrounding: "Sets scene with past states",
      characterization: "Describes past actions revealing character",
    },
    argumentative: {
      evidence: "Cites past events as evidence",
      precedent: "References past cases or examples",
      experience: "Appeals to past experience",
    },
    descriptive: {
      pastStates: "Describes how things were",
      pastConditions: "Explains past circumstances",
      pastCharacteristics: "Details past qualities or features",
    },
  },

  pedagogicalApproaches: {
    inductiveMethod: {
      description: "Students discover patterns from examples",
      steps: [
        "Present multiple examples of simple past",
        "Students identify patterns",
        "Guide students to formulate rules",
        "Practice with guided exercises",
      ],
    },
    deductiveMethod: {
      description: "Explicit rule presentation followed by practice",
      steps: [
        "Present rules clearly",
        "Show examples of each rule",
        "Provide controlled practice",
        "Move to freer practice",
      ],
    },
    taskBasedLearning: {
      description: "Learn through meaningful tasks",
      activities: [
        "Timeline creation exercises",
        "Story reconstruction tasks",
        "Interview projects about past experiences",
        "Historical research presentations",
      ],
    },
    communicativeApproach: {
      description: "Focus on meaningful communication",
      activities: [
        "Role-plays of past events",
        "Sharing personal experiences",
        "Collaborative storytelling",
        "Real-world task completion",
      ],
    },
  },

  assessmentCriteria: {
    accuracy: {
      formAccuracy: "Correct formation of regular and irregular past forms",
      usageAccuracy: "Appropriate use in context",
      spellingAccuracy: "Correct spelling of past tense forms",
    },
    fluency: {
      automaticity: "Quick retrieval of past forms",
      naturalness: "Natural use in speech",
      hesitation: "Minimal pausing for form retrieval",
    },
    appropriateness: {
      registerMatch: "Appropriate for formal/informal contexts",
      contextualFit: "Suitable for specific situations",
      culturalSensitivity: "Awareness of cultural implications",
    },
  },

  multimodalLearning: {
    visual: [
      "Timeline diagrams",
      "Picture sequences for story telling",
      "Verb conjugation charts",
      "Mind maps of irregular verbs",
    ],
    auditory: [
      "Pronunciation drills",
      "Story listening exercises",
      "Rhythm and stress practice",
      "Audio grammar explanations",
    ],
    kinesthetic: [
      "Acting out past events",
      "Timeline walking exercises",
      "Verb card sorting activities",
      "Physical response games",
    ],
  },

  cognitiveAspects: {
    memoryLoad: {
      regularVerbs: "Lower cognitive load due to predictable pattern",
      irregularVerbs: "Higher cognitive load requiring memorization",
      strategies: [
        "Chunking similar irregular patterns",
        "Mnemonic devices for difficult forms",
        "Spaced repetition for retention",
      ],
    },
    processingDifficulty: {
      production: "Retrieving correct form from memory",
      comprehension: "Recognizing past time reference",
      monitoring: "Self-correction during use",
    },
  },

  psycholinguistics: {
    acquisitionOrder: {
      early: "Common irregular verbs (go-went, see-saw)",
      intermediate: "Regular -ed pattern generalization",
      late: "Less common irregulars and exceptions",
    },
    errorPatterns: {
      overgeneralization: "Applying -ed to irregular verbs (goed, eated)",
      undergeneralization: "Not applying -ed to regular verbs",
      confusion: "Mixing up similar irregular forms",
    },
    L1Transfer: {
      positive: "Languages with similar past tense concepts",
      negative: "Languages without tense marking",
      interference: "Different aspectual systems",
    },
  },

  advancedSyntacticFeatures: {
    embedding: {
      thatClauses: "She said that she understood the problem",
      whClauses: "I remember where we went last summer",
      relativeClauses: "The book that I read was fascinating",
    },
    coordination: {
      sequencing: "He entered, sat down, and began to speak",
      contrast: "She wanted to go, but he preferred to stay",
      causeEffect: "It rained, so we stayed inside",
    },
    subordination: {
      temporal: "After she finished her work, she went home",
      conditional: "If I had time, I would visit you",
      concessive: "Although he studied hard, he failed the test",
    },
  },

  pragmaticFeatures: {
    politeness: {
      indirect: "I was wondering if you might help me",
      distancing: "I thought perhaps we could meet",
      hedging: "I was hoping you would consider my request",
    },
    implicature: {
      relevance: "I was young then (implies different now)",
      quantity: "I tried to call (implies unsuccessful)",
      manner: "It was interesting (potentially critical)",
    },
  },

  crossLinguisticPerspectives: {
    universals: "Most languages have some form of past time marking",
    typology: {
      tenseBased: "Languages primarily using tense (English, Spanish)",
      aspectBased: "Languages primarily using aspect (Mandarin, Russian)",
      evidentialBased:
        "Languages marking information source (Turkish, Quechua)",
    },
    transferIssues: [
      "Tense vs aspect prominence in L1",
      "Perfective vs imperfective distinctions",
      "Evidentiality requirements",
      "Time reference systems",
    ],
  },

  technologyIntegration: {
    digitalTools: [
      "Conjugation apps with voice recognition",
      "Interactive timeline software",
      "Gamified verb learning platforms",
      "AI-powered error correction systems",
    ],
    onlineResources: [
      "Video grammar explanations",
      "Interactive exercises with feedback",
      "Virtual reality storytelling experiences",
      "Collaborative online writing platforms",
    ],
  },

  sociolinguisticAspects: {
    variation: {
      age: "Older speakers may use different irregular forms",
      education: "Academic vs colloquial usage patterns",
      region: "Dialectal differences in verb forms",
      social: "Formal vs informal register variations",
    },
    changeInProgress: [
      "Regularization of some irregular verbs",
      "Influence of technology on usage",
      "Global English standardization effects",
      "Social media impact on forms",
    ],
  },

  neuroscienceInsights: {
    brainProcessing: {
      regularVerbs: "Processed by rule-based systems (left hemisphere)",
      irregularVerbs: "Stored in memory systems (distributed processing)",
      development: "Different neural pathways for different verb types",
    },
    implications: [
      "Separate teaching strategies for regular vs irregular",
      "Importance of both explicit and implicit learning",
      "Need for extensive exposure and practice",
    ],
  },

  researchFindings: {
    acquisitionStudies: [
      "Regular pattern acquired before all irregulars mastered",
      "High-frequency irregulars learned early",
      "Overgeneralization is natural developmental stage",
    ],
    effectivenessMeasures: [
      "Communicative tasks more effective than drilling",
      "Meaningful context enhances retention",
      "Error correction timing affects learning",
    ],
  },

  futureDirections: {
    emergingTrends: [
      "AI-assisted personalized learning",
      "Corpus-based teaching materials",
      "Multimodal assessment approaches",
      "Global English considerations",
    ],
    researchNeeds: [
      "Long-term retention studies",
      "Individual difference factors",
      "Technology effectiveness evaluation",
      "Cross-linguistic transfer research",
    ],
  },
};

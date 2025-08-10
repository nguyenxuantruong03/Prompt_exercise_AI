export const Simple_PresentData = {
  id: 56,
  citations: [
    {
      title: "Simple Present Tense - Cambridge Grammar",
      url: "https://dictionary.cambridge.org/grammar/british-grammar/present-simple-i-work",
      description:
        "Comprehensive explanation of Simple Present tense usage, forms, and examples from Cambridge Dictionary",
      source: "Cambridge Dictionary",
      type: "reference",
    },
    {
      title: "Present Simple - BBC Learning English",
      url: "https://www.bbc.co.uk/learningenglish/english/course/lower-intermediate/unit-1/session-1",
      description:
        "Interactive lessons and exercises for Simple Present tense with clear explanations",
      source: "BBC Learning English",
      type: "practice",
    },
    {
      title: "Simple Present Tense - Grammarly",
      url: "https://www.grammarly.com/blog/simple-present/",
      description:
        "Detailed guide on Simple Present tense with common mistakes and usage tips",
      source: "Grammarly",
      type: "explanation",
    },
    {
      title: "Present Simple Exercises - Perfect English Grammar",
      url: "https://www.perfect-english-grammar.com/present-simple-exercise-1.html",
      description:
        "Interactive exercises and practice tests for Simple Present tense",
      source: "Perfect English Grammar",
      type: "practice",
    },
    {
      title: "Simple Present Tense Examples - EnglishClub",
      url: "https://www.englishclub.com/grammar/verb-tenses_present-simple.htm",
      description:
        "Extensive examples and usage patterns for Simple Present tense",
      source: "EnglishClub",
      type: "examples",
    },
  ],
  theory: {
    usageOverview: [
      "Expresses habitual actions and routines (daily/weekly activities)",
      "States general truths, facts, and universal principles",
      "Describes permanent situations and characteristics",
      "Indicates scheduled future events (timetables, programs)",
      "Used in conditional sentences (zero and first conditional)",
      "Expresses feelings, opinions, and mental states (stative verbs)",
      "Describes ongoing states and unchanging situations",
      "Used in newspaper headlines and sports commentaries",
      "Expresses laws of nature and scientific facts",
      "Indicates professional duties and job descriptions",
      "Used in storytelling and plot summaries",
      "Expresses cultural customs and traditions",
      "Describes geographical and historical facts",
      "Used in giving instructions and procedures",
      "Expresses personal preferences and beliefs",
    ],
    structure: {
      affirmative: {
        form: "Subject + base verb (+ s/es for 3rd person singular)",
        description:
          "Main verb remains in base form except for he/she/it which requires -s/-es ending",
        examples: [
          "I work every day",
          "She works at a bank",
          "They play football",
        ],
      },
      negative: {
        form: "Subject + do not/does not + base verb",
        description:
          "Use auxiliary 'do/does' + 'not' before main verb. Main verb stays in base form",
        examples: [
          "I don't work on Sundays",
          "He doesn't like coffee",
          "We don't go there often",
        ],
      },
      question: {
        form: "Do/Does + subject + base verb?",
        description:
          "Auxiliary 'do/does' comes before subject. Main verb in base form",
        examples: [
          "Do you work here?",
          "Does she speak English?",
          "Do they live nearby?",
        ],
      },
    },
    detailedGrammarRules: {
      thirdPersonSingular: {
        explanation:
          "The most distinctive feature of Simple Present is the -s/-es ending for third person singular subjects",
        rules: [
          "Regular verbs: add -s (work → works, play → plays)",
          "Verbs ending in -s, -ss, -sh, -ch, -x, -z: add -es (kiss → kisses, watch → watches)",
          "Verbs ending in consonant + y: change y to ies (study → studies, try → tries)",
          "Verbs ending in vowel + y: just add -s (play → plays, enjoy → enjoys)",
          "Verbs ending in -o: usually add -es (go → goes, do → does)",
          "Irregular forms: have → has, be → is",
        ],
      },
      auxiliaryVerbs: {
        explanation:
          "Simple Present uses do/does as auxiliary verbs only in negatives and questions",
        usageRules: [
          "Use 'do' with I, you, we, they",
          "Use 'does' with he, she, it",
          "Main verb always returns to base form after do/does",
          "Never use do/does in affirmative statements",
          "Exception: verb 'be' doesn't use do/does (Is she...? She isn't...)",
        ],
      },
      stativeVerbs: {
        explanation: "Certain verbs rarely appear in continuous forms",
        categories: {
          "Emotion/Opinion": [
            "love",
            "hate",
            "like",
            "dislike",
            "prefer",
            "want",
            "wish",
          ],
          "Mental states": [
            "know",
            "understand",
            "believe",
            "think",
            "remember",
            "forget",
          ],
          Possession: ["have", "own", "belong", "possess", "contain"],
          Senses: ["see", "hear", "smell", "taste", "feel"],
          Appearance: ["seem", "appear", "look", "sound"],
        },
      },
    },
    generalTheory:
      "Simple Present tense is used to express actions that are regular, repeated, or generally true. It's the most basic tense in English and serves as the foundation for understanding other tenses. Unlike many languages, English Simple Present focuses more on habit and general truth rather than current actions happening right now.",
  },
  spellingRules: {
    regularVerbs: {
      rule: "Add -s to the base verb for 3rd person singular (he/she/it)",
      examples: [
        "work → works",
        "play → plays",
        "eat → eats",
        "drive → drives",
      ],
    },
    verbsEndingInS_X_Z_CH_SH: {
      rule: "Add -es for verbs ending in -s, -x, -z, -ch, -sh",
      examples: [
        "watch → watches",
        "fix → fixes",
        "buzz → buzzes",
        "wash → washes",
        "kiss → kisses",
      ],
    },
    verbsEndingInY: {
      rule: "Change -y to -ies when preceded by a consonant",
      examples: [
        "study → studies",
        "try → tries",
        "fly → flies",
        "cry → cries",
      ],
      exception: "Keep -y when preceded by a vowel: play → plays, buy → buys",
    },
    verbsEndingInO: {
      rule: "Add -es for some verbs ending in -o",
      examples: ["go → goes", "do → does"],
      note: "Most other -o verbs just add -s: radio → radios",
    },
    irregularVerbs: {
      rule: "Some verbs have completely irregular 3rd person forms",
      examples: ["have → has", "be → is"],
    },
  },
  commonMistakes: [
    {
      mistake: "Forgetting -s/-es for 3rd person singular",
      wrong: "She work at the hospital",
      correct: "She works at the hospital",
      explanation: "Always add -s/-es for he/she/it in affirmative sentences",
    },
    {
      mistake: "Adding -s to verbs after does/doesn't",
      wrong: "Does she works here?",
      correct: "Does she work here?",
      explanation: "Use base form after auxiliary verbs do/does",
    },
    {
      mistake: "Using Simple Present for actions happening now",
      wrong: "I eat lunch now",
      correct: "I am eating lunch now",
      explanation:
        "Use Present Continuous for actions happening at the moment of speaking",
    },
    {
      mistake: "Incorrect negative formation",
      wrong: "She no likes pizza",
      correct: "She doesn't like pizza",
      explanation: "Use doesn't/don't + base verb for negatives",
    },
    {
      mistake: "Mixing up do/does",
      wrong: "Does we need tickets?",
      correct: "Do we need tickets?",
      explanation: "Use 'does' only with he/she/it, 'do' with I/you/we/they",
    },
  ],
  forms: {
    affirmative:
      "I/You/We/They + base verb (work) • He/She/It + base verb + s/es (works)",
    negative:
      "I/You/We/They + do not (don't) + base verb (work) • He/She/It + does not (doesn't) + base verb (work)",
    question:
      "Do + I/you/we/they + base verb (work)? • Does + he/she/it + base verb (work)?",
  },
  usage: [
    {
      type: "Habitual or repeated actions",
      description:
        "Diễn tả những hành động lặp đi lặp lại, thói quen hàng ngày",
      example: "I brush my teeth twice a day.",
    },
    {
      type: "General truths or facts",
      description: "Sự thật hiển nhiên, chân lý, điều luôn đúng",
      example: "Water boils at 100 degrees Celsius.",
    },
    {
      type: "Scheduled events in the near future",
      description:
        "Lịch trình đã được lên kế hoạch sẵn (thường dùng cho tàu xe, chương trình)",
      example: "The bus leaves at 7:30 a.m.",
    },
    {
      type: "Instructions or directions",
      description: "Hướng dẫn hoặc chỉ dẫn làm việc gì",
      example: "You turn right at the traffic lights.",
    },
    {
      type: "Feelings, opinions, states (stative verbs)",
      description: "Diễn tả cảm xúc, quan điểm, trạng thái không thay đổi",
      example: "I love chocolate.",
    },
    {
      type: "Narration or commentary",
      description: "Dùng trong việc kể chuyện, bình luận thể thao",
      example: "He passes the ball, shoots, and scores!",
    },
  ],
  advancedUsagePatterns: {
    conditionalSentences: {
      zeroConditional: {
        structure: "If + Simple Present, Simple Present",
        usage: "Universal truths and general facts",
        examples: [
          "If you heat water to 100°C, it boils.",
          "If plants don't get water, they die.",
          "When the sun sets, it gets dark.",
        ],
      },
      firstConditional: {
        structure: "If + Simple Present, will + base verb",
        usage: "Real possibilities in the future",
        examples: [
          "If it rains tomorrow, we will stay home.",
          "If you study hard, you will pass the exam.",
          "When she arrives, we will start the meeting.",
        ],
      },
    },
    narrativeUse: {
      dramaticPresent: {
        usage: "Makes stories more vivid and immediate",
        examples: [
          "So yesterday I walk into the store and this guy approaches me...",
          "In the movie, the hero fights the villain and saves the day.",
          "The book tells the story of a young woman who discovers her true identity.",
        ],
      },
      sportsCommentary: {
        usage: "Describing live action as it happens",
        examples: [
          "Johnson passes to Smith, Smith shoots, and he scores!",
          "The runner approaches the finish line and breaks the tape!",
          "The chef adds the final garnish and presents the dish.",
        ],
      },
    },
    formalContexts: {
      academicWriting: {
        usage: "Stating facts, theories, and research findings",
        examples: [
          "Research shows that exercise improves mental health.",
          "The data indicates a strong correlation between variables.",
          "Studies demonstrate the effectiveness of this method.",
        ],
      },
      legalDocuments: {
        usage: "Expressing laws, rights, and obligations",
        examples: [
          "The contract states the terms and conditions clearly.",
          "The law requires all citizens to pay taxes.",
          "This agreement binds both parties to their obligations.",
        ],
      },
    },
  },
  culturalAndContextualUsage: {
    crossCulturalDifferences: [
      "In business contexts, Simple Present expresses policies: 'We offer a 30-day guarantee'",
      "In recipe writing, imperatives often mix with Simple Present: 'You add salt, then you mix'",
      "In news reporting, Simple Present creates immediacy: 'President announces new policy'",
      "In academic contexts, Simple Present states established facts: 'Einstein's theory explains...'",
      "In technical writing, Simple Present describes processes: 'The system monitors temperature'",
    ],
    registerVariations: {
      formal: [
        "The organization maintains strict quality standards.",
        "Research indicates significant improvements in performance.",
        "The policy ensures compliance with international regulations.",
      ],
      informal: [
        "I usually grab coffee on my way to work.",
        "She totally rocks at playing guitar.",
        "We hang out at the mall on weekends.",
      ],
      academic: [
        "The theory posits that language acquisition occurs naturally.",
        "Data analysis reveals patterns in consumer behavior.",
        "The methodology ensures reliable and valid results.",
      ],
    },
  },
  pronunciationGuide: {
    thirdPersonEndings: {
      s_sound: {
        after: ["voiceless consonants: p, t, k, f"],
        examples: [
          "stops /stɒps/",
          "hits /hɪts/",
          "works /wɜːks/",
          "laughs /læfs/",
        ],
      },
      z_sound: {
        after: ["voiced consonants and vowels: b, d, g, v, l, m, n, r"],
        examples: [
          "runs /rʌnz/",
          "plays /pleɪz/",
          "comes /kʌmz/",
          "lives /lɪvz/",
        ],
      },
      iz_sound: {
        after: ["s, z, sh, ch, j sounds"],
        examples: [
          "teaches /ˈtiːtʃɪz/",
          "washes /ˈwɒʃɪz/",
          "judges /ˈdʒʌdʒɪz/",
        ],
      },
    },
    commonPronunciationMistakes: [
      "Silent 's' in third person: Don't forget to pronounce the -s ending",
      "Vowel reduction in auxiliary verbs: 'does' becomes /dəz/ not /duːz/",
      "Weak form of 'do': Often pronounced as /də/ in questions",
    ],
  },
  practiceExerciseTypes: {
    fillInTheBlanks: {
      description: "Complete sentences with correct verb forms",
      example: "She _____ (work) at the hospital every day.",
    },
    errorCorrection: {
      description: "Identify and fix mistakes in Simple Present usage",
      example: "Find the error: 'Does she works here?'",
    },
    transformationDrills: {
      description: "Convert between affirmative, negative, and question forms",
      example: "Change to negative: 'He speaks French fluently.'",
    },
    contextualApplication: {
      description: "Use Simple Present in specific scenarios",
      example: "Describe your daily routine using Simple Present tense.",
    },
    contrastivePractice: {
      description: "Distinguish between Simple Present and other tenses",
      example: "Choose Simple Present or Present Continuous for each sentence.",
    },
  },
  extendedExamples: {
    professionalContexts: [
      "Our company provides comprehensive insurance coverage to all employees.",
      "The software automatically backs up data every hour.",
      "Customer service representatives handle inquiries from 9 AM to 6 PM.",
      "The quarterly report shows significant growth in all sectors.",
    ],
    academicWriting: [
      "Recent studies suggest that climate change affects global weather patterns.",
      "The hypothesis predicts that increased temperature leads to faster chemical reactions.",
      "Historical evidence supports the theory of continental drift.",
      "This methodology ensures accurate measurement of variables.",
    ],
    dailyLifeDescriptions: [
      "My neighbor always waters her garden early in the morning.",
      "Public transportation runs every fifteen minutes during peak hours.",
      "The local bakery opens at 6 AM and closes at 8 PM daily.",
      "Children in this neighborhood attend the elementary school nearby.",
    ],
    culturalDescriptions: [
      "In Japan, people bow when they meet each other.",
      "Traditional festivals celebrate the changing of seasons.",
      "Many cultures have specific customs around food preparation.",
      "Religious ceremonies often follow ancient traditions and rituals.",
    ],
  },
  notes: [
    "Động từ thêm -s hoặc -es với chủ ngữ ngôi thứ 3 số ít (He/She/It). Ví dụ: He watches, She goes.",
    "Với động từ kết thúc bằng -ch, -sh, -ss, -x, -o, thường thêm -es (watches, goes).",
    "Dùng do/does trong câu hỏi và phủ định, chú ý does + base verb không thêm s.",
    "Một số động từ trạng thái (like, love, know, want, believe, prefer, hate, ...) thường không dùng ở dạng tiếp diễn.",
    "Không dùng thì hiện tại đơn để diễn tả hành động đang xảy ra ngay lúc nói (dùng Present Continuous cho việc đó).",
    "Simple Present thường đi với các trạng từ tần suất: always, usually, often, sometimes, seldom, rarely, never.",
    "Trong câu điều kiện loại 0 và loại 1, mệnh đề điều kiện thường dùng Simple Present.",
    "Khi nói về lịch trình, thời gian biểu cố định, có thể dùng Simple Present cho tương lai.",
  ],
  learningTips: [
    "Practice daily routines: Describe your typical day using Simple Present to build habit recognition.",
    "Create frequency charts: List activities with their frequency adverbs (always, usually, sometimes, never).",
    "Use fact-checking exercises: Write true statements about science, geography, or general knowledge.",
    "Record yourself: Read news headlines or fact sheets aloud to practice pronunciation and rhythm.",
    "Make timeline comparisons: Compare Simple Present with Present Continuous to understand the difference.",
    "Focus on 3rd person singular: Practice conjugating different verbs for he/she/it until it becomes automatic.",
    "Use real-life contexts: Describe people's jobs, hobbies, and characteristics using Simple Present.",
    "Watch TV schedules: Practice reading and talking about program times and timetables.",
  ],
  learningProgression: {
    beginner: [
      "Master basic verb conjugation (I work, he works)",
      "Learn common time expressions (every day, usually, never)",
      "Practice simple affirmative sentences about daily routines",
      "Understand the difference between do and does",
    ],
    intermediate: [
      "Use Simple Present in conditional sentences",
      "Distinguish between Simple Present and Present Continuous",
      "Apply Simple Present in formal and informal contexts",
      "Master irregular verb forms and spelling rules",
    ],
    advanced: [
      "Use Simple Present for dramatic effect in storytelling",
      "Apply in academic and professional writing contexts",
      "Understand subtle differences in register and formality",
      "Master complex sentence structures with multiple clauses",
    ],
  },
  cefrLevelBreakdown: {
    A1: {
      grammarPoints: [
        "Basic verb 'be' in present tense (I am, you are, he/she/it is, we/they are)",
        "Third person singular -s ending (he works, she plays, it runs)",
        "Simple affirmative sentences (I like coffee, She speaks English)",
        "Basic negative with don't/doesn't (I don't like, He doesn't work)",
        "Simple yes/no questions (Do you like? Does she work?)",
        "Basic Wh-questions (What do you do? Where does he live?)",
        "Present tense of 'have' (I have, he has)",
        "Basic frequency adverbs position (I always eat breakfast)",
      ],
      vocabulary: [
        "Daily routines: wake up, get up, brush teeth, have breakfast, go to work/school",
        "Basic time expressions: every day, in the morning, at night, on Monday",
        "Simple frequency adverbs: always, usually, sometimes, never",
        "Basic verbs: eat, drink, sleep, work, study, live, like, want",
        "Family members: mother, father, sister, brother, children",
        "Basic emotions: happy, sad, angry, tired, hungry",
      ],
      functionalUse: [
        "Introduce yourself and family (I am John, I live in London)",
        "Talk about daily routines (I get up at 7 o'clock)",
        "Express basic likes/dislikes (I like pizza, I don't like fish)",
        "Give basic personal information (I work in a bank, I study English)",
        "Ask simple questions about others (Do you have children? Where do you work?)",
      ],
      commonSentencePatterns: [
        "I am + adjective/noun (I am happy, I am a teacher)",
        "Subject + verb + object (I eat breakfast, She reads books)",
        "Subject + don't/doesn't + verb (I don't smoke, He doesn't drive)",
        "Do/Does + subject + verb? (Do you speak English? Does she work here?)",
        "Subject + verb + every + time (I work every day, She calls every week)",
      ],
      exercises: [
        "Fill in 'am/is/are': I ___ a student, She ___ happy",
        "Add -s where needed: He work___ , She play___ tennis",
        "Make negative: I like coffee → I don't like coffee",
        "Make questions: You live here → Do you live here?",
        "Complete daily routine: I ___ up at 7, I ___ breakfast at 8",
      ],
      errorPrevention: [
        "Don't forget 'be' verb: Wrong: 'I happy' → Right: 'I am happy'",
        "Remember -s for he/she/it: Wrong: 'He work' → Right: 'He works'",
        "Use don't/doesn't for negatives: Wrong: 'I no like' → Right: 'I don't like'",
        "Question word order: Wrong: 'You are happy?' → Right: 'Are you happy?'",
      ],
    },
    A2: {
      grammarPoints: [
        "Extended use of frequency adverbs (often, rarely, seldom, hardly ever)",
        "Time expressions with Simple Present (twice a week, once a month)",
        "Simple Present with future meaning (The train leaves at 6 PM)",
        "Basic stative verbs (know, understand, believe, think, remember)",
        "Question words + Simple Present (Who lives here? What time do you start?)",
        "Simple Present in basic conditionals (If it rains, I stay home)",
        "Expressing routines and habits in more detail",
        "Using Simple Present to describe jobs and professions",
      ],
      vocabulary: [
        "Extended time expressions: twice a day, three times a week, once a month",
        "Job-related vocabulary: teacher, doctor, engineer, manager, secretary",
        "Hobbies and interests: play guitar, collect stamps, go swimming, watch movies",
        "Extended family: aunt, uncle, cousin, grandparents, nephew, niece",
        "Basic emotions and states: excited, worried, surprised, confused, interested",
        "Weather descriptions: sunny, rainy, cloudy, windy, hot, cold",
      ],
      functionalUse: [
        "Describe work and study routines in detail",
        "Talk about hobbies and free time activities",
        "Express opinions and preferences (I think, I believe, I prefer)",
        "Give more complex personal information",
        "Describe other people's habits and characteristics",
        "Talk about schedules and timetables",
      ],
      commonSentencePatterns: [
        "I usually/often/sometimes + verb (I usually go to bed at 10)",
        "How often do you + verb? (How often do you exercise?)",
        "Subject + verb + time expression (I visit my parents every weekend)",
        "If + Simple Present, Simple Present (If I'm tired, I go to bed early)",
        "Wh-word + do/does + subject + verb? (When does the class start?)",
      ],
      exercises: [
        "Choose correct frequency adverb: I (always/never) eat meat - I'm vegetarian",
        "Complete with time expressions: I go shopping ___ a week",
        "Form questions: (How often) ___ you ___ to the gym?",
        "Stative verb practice: I ___ (know/knowing) the answer",
        "Future schedules: The meeting ___ (start) at 3 PM tomorrow",
      ],
      errorPrevention: [
        "Frequency adverb position: Wrong: 'I go always' → Right: 'I always go'",
        "Stative verbs: Wrong: 'I'm knowing' → Right: 'I know'",
        "Question formation: Wrong: 'How often you go?' → Right: 'How often do you go?'",
        "Future schedules: Use Simple Present, not 'will' for timetables",
      ],
    },
    B1: {
      grammarPoints: [
        "Complex sentence structures with Simple Present",
        "Simple Present in time and conditional clauses (When I finish, If you call)",
        "Contrast between Simple Present and Present Continuous",
        "Extended stative verbs (seem, appear, belong, consist, contain)",
        "Simple Present in reported speech patterns",
        "Using Simple Present for instructions and procedures",
        "Simple Present in formal contexts (business, academic)",
        "Understanding register differences (formal vs informal)",
      ],
      vocabulary: [
        "Academic subjects: mathematics, literature, chemistry, history, geography",
        "Professional vocabulary: manager, employee, colleague, client, customer",
        "Abstract concepts: responsibility, opportunity, experience, knowledge",
        "Complex time expressions: from time to time, now and then, every so often",
        "Opinion expressions: in my opinion, I suppose, I assume, I reckon",
        "Workplace terminology: meeting, deadline, project, presentation, report",
      ],
      functionalUse: [
        "Give detailed descriptions of processes and procedures",
        "Express complex opinions and viewpoints",
        "Describe professional responsibilities and duties",
        "Discuss cultural differences and similarities",
        "Explain rules, regulations, and policies",
        "Compare different situations and contexts",
      ],
      commonSentencePatterns: [
        "When/If + Simple Present, Simple Present/Future (When I see him, I'll tell him)",
        "Complex sentences with multiple clauses",
        "Passive constructions with Simple Present (The report is written monthly)",
        "Comparative structures (I work harder than most people)",
        "Formal expressions (The policy states that..., The law requires...)",
      ],
      exercises: [
        "Conditional practice: Complete 'If you heat water to 100°C, it ___'",
        "Time clauses: 'When I ___ (finish) work, I'll call you'",
        "Stative vs dynamic: Choose 'think' or 'thinking' in different contexts",
        "Register awareness: Rewrite informal sentences in formal style",
        "Process description: Use Simple Present to describe how something works",
      ],
      errorPrevention: [
        "Time clauses: Wrong: 'When I will finish' → Right: 'When I finish'",
        "Stative verbs: Wrong: 'I'm belonging to' → Right: 'I belong to'",
        "Register mixing: Avoid informal expressions in formal contexts",
        "Sentence complexity: Don't overuse Simple Present in narrative past contexts",
      ],
    },
    B2: {
      grammarPoints: [
        "Subtle differences in stative verb usage (think/think about, see/look at)",
        "Simple Present in complex conditional structures",
        "Academic and formal register usage",
        "Simple Present in reported speech and indirect questions",
        "Understanding contextual appropriateness",
        "Complex time relationships and simultaneity",
        "Simple Present in hypothetical and theoretical contexts",
        "Advanced question formation techniques",
      ],
      vocabulary: [
        "Academic discourse markers: furthermore, moreover, nevertheless, consequently",
        "Professional jargon: implementation, assessment, evaluation, methodology",
        "Abstract thinking: assumption, hypothesis, theory, concept, principle",
        "Complex emotional states: frustrated, overwhelmed, apprehensive, content",
        "Formal expressions: according to, with regard to, in terms of, concerning",
        "Technical terminology specific to various fields",
      ],
      functionalUse: [
        "Present complex arguments and reasoning",
        "Discuss theoretical concepts and abstract ideas",
        "Analyze and evaluate information critically",
        "Express nuanced opinions and qualified statements",
        "Participate in formal discussions and debates",
        "Write academic and professional texts",
      ],
      commonSentencePatterns: [
        "Complex conditional structures with nuanced meanings",
        "Formal passive constructions",
        "Abstract subject constructions (The theory suggests that...)",
        "Hedge expressions (It appears that..., Research indicates...)",
        "Complex comparative and superlative structures",
      ],
      exercises: [
        "Nuanced stative verbs: 'I think' vs 'I'm thinking' in different contexts",
        "Formal register: Transform colloquial expressions to academic language",
        "Complex conditionals: Create sentences with subtle conditional meanings",
        "Abstract concepts: Use Simple Present to discuss theories and principles",
        "Critical analysis: Express evaluation using appropriate Simple Present structures",
      ],
      errorPrevention: [
        "Overuse of continuous forms with stative verbs in formal contexts",
        "Inappropriate register mixing in academic writing",
        "Confusion between Simple Present and Present Perfect in research contexts",
        "Incorrect use of Simple Present in narrative sequences",
      ],
    },
    C1: {
      grammarPoints: [
        "Sophisticated use of Simple Present in academic discourse",
        "Subtle aspectual differences and their implications",
        "Complex interaction with other tenses in discourse",
        "Advanced understanding of register and style",
        "Simple Present in legal and technical language",
        "Idiomatic expressions and fixed phrases",
        "Complex sentence structures with embedded clauses",
        "Understanding of dialectal and regional variations",
      ],
      vocabulary: [
        "Sophisticated academic vocabulary: paradigm, criterion, phenomenon, synthesis",
        "Legal terminology: stipulate, constitute, warrant, entail, preclude",
        "Technical precision: specifications, parameters, variables, constants",
        "Philosophical concepts: existence, reality, consciousness, perception",
        "Literary terminology: narrative, metaphor, symbolism, allegory",
        "Advanced professional vocabulary across multiple domains",
      ],
      functionalUse: [
        "Engage in sophisticated academic and professional discourse",
        "Present complex research findings and methodologies",
        "Analyze literature and cultural phenomena",
        "Discuss philosophical and theoretical concepts",
        "Write technical documentation and specifications",
        "Participate in high-level negotiations and discussions",
      ],
      commonSentencePatterns: [
        "Complex subordinate clause structures",
        "Sophisticated passive and active voice alternation",
        "Advanced conditional and hypothetical expressions",
        "Nuanced hedging and qualification expressions",
        "Complex coordinate and subordinate structures",
      ],
      exercises: [
        "Academic precision: Use Simple Present to state research findings accurately",
        "Style variation: Adapt register for different professional contexts",
        "Complex argumentation: Build sophisticated arguments using Simple Present",
        "Technical description: Describe complex processes with precision",
        "Literary analysis: Discuss literary works using appropriate Simple Present structures",
      ],
      errorPrevention: [
        "Overcomplication of simple concepts",
        "Inappropriate formality in conversational contexts",
        "Confusion between stating facts and expressing personal opinions",
        "Misuse of technical terminology",
      ],
    },
    C2: {
      grammarPoints: [
        "Native-like intuitive use of Simple Present across all contexts",
        "Subtle stylistic effects and rhetorical purposes",
        "Complex interaction with pragmatic meaning",
        "Advanced understanding of implicature and inference",
        "Sophisticated use in creative and literary contexts",
        "Master-level understanding of exceptions and edge cases",
        "Integration with complex discourse patterns",
        "Understanding of historical and evolutionary aspects",
      ],
      vocabulary: [
        "Highly specialized terminology across multiple fields",
        "Archaic and literary expressions",
        "Regional and dialectal variations",
        "Cutting-edge professional vocabulary",
        "Complex idiomatic expressions and collocations",
        "Sophisticated metaphorical and figurative language",
      ],
      functionalUse: [
        "Engage in expert-level professional communication",
        "Create sophisticated written and spoken discourse",
        "Analyze and critique complex texts and ideas",
        "Teach and explain grammatical concepts to others",
        "Adapt communication style to any context or audience",
        "Create original content with stylistic sophistication",
      ],
      commonSentencePatterns: [
        "Master-level complex sentence structures",
        "Sophisticated stylistic variations",
        "Creative and innovative language use",
        "Complex pragmatic and discourse functions",
        "Advanced rhetorical and persuasive structures",
      ],
      exercises: [
        "Stylistic analysis: Analyze the effect of Simple Present in different literary works",
        "Creative writing: Use Simple Present for specific stylistic effects",
        "Teaching practice: Explain Simple Present rules to learners at different levels",
        "Critical evaluation: Assess the appropriateness of Simple Present use in various texts",
        "Innovation: Create new examples and applications of Simple Present usage",
      ],
      mastery: [
        "Intuitive understanding of all Simple Present applications",
        "Ability to explain subtle nuances to other learners",
        "Creative and innovative use in various contexts",
        "Complete awareness of stylistic and pragmatic effects",
        "Native-like fluency and naturalness",
      ],
    },
  },
  comprehensiveErrorAnalysis: {
    beginnerErrors: [
      {
        error: "Omitting 'be' verb",
        wrong: "I happy today",
        correct: "I am happy today",
        frequency: "Very common",
        level: "A1",
        explanation: "Many languages don't require a copula verb",
      },
      {
        error: "Forgetting third person -s",
        wrong: "He work every day",
        correct: "He works every day",
        frequency: "Extremely common",
        level: "A1-A2",
        explanation:
          "L1 interference from languages without subject-verb agreement",
      },
      {
        error: "Incorrect negative formation",
        wrong: "I no like coffee",
        correct: "I don't like coffee",
        frequency: "Very common",
        level: "A1",
        explanation: "Direct translation from some Romance languages",
      },
    ],
    intermediateErrors: [
      {
        error: "Stative verbs in continuous form",
        wrong: "I am knowing the answer",
        correct: "I know the answer",
        frequency: "Common",
        level: "A2-B1",
        explanation: "Overgeneralization of continuous form rules",
      },
      {
        error: "Wrong auxiliary in questions",
        wrong: "Does we need to go?",
        correct: "Do we need to go?",
        frequency: "Common",
        level: "A2",
        explanation: "Confusion about do/does distribution",
      },
      {
        error: "Future meaning confusion",
        wrong: "I will go tomorrow at 6 PM (for scheduled events)",
        correct: "I go tomorrow at 6 PM",
        frequency: "Moderate",
        level: "B1",
        explanation: "Over-reliance on 'will' for all future references",
      },
    ],
    advancedErrors: [
      {
        error: "Register inappropriateness",
        wrong: "The research totally proves that... (in academic writing)",
        correct: "The research demonstrates that...",
        frequency: "Moderate",
        level: "B2-C1",
        explanation: "Difficulty distinguishing formal and informal registers",
      },
      {
        error: "Aspectual confusion",
        wrong: "I live here for five years (when still living there)",
        correct: "I have lived here for five years",
        frequency: "Common",
        level: "B1-B2",
        explanation: "Simple Present vs Present Perfect distinction",
      },
    ],
  },
  progressiveDifficulty: {
    A1_exercises: [
      "Fill in am/is/are: I ___ a student, You ___ my friend, She ___ happy",
      "Add -s where needed: He work___ here, She play___ tennis, It rain___",
      "Make negative: I like pizza → I _____ like pizza",
      "Simple questions: You speak English → _____ you speak English?",
    ],
    A2_exercises: [
      "Frequency adverbs: I (always/never) eat breakfast",
      "Time expressions: I go shopping ___ (twice/two) a week",
      "Stative verbs: I _____ (know/am knowing) your brother",
      "Future schedules: The train _____ (leaves/will leave) at 8 PM",
    ],
    B1_exercises: [
      "Conditionals: If water _____ (reach) 100°C, it _____ (boil)",
      "Time clauses: When I _____ (finish) work, I _____ (call) you",
      "Register: Rewrite informally: 'The policy stipulates that employees must...'",
      "Process description: Describe how photosynthesis works using Simple Present",
    ],
    B2_exercises: [
      "Nuanced stative verbs: Explain the difference between 'I think' and 'I'm thinking'",
      "Academic register: Write a paragraph about research using appropriate Simple Present structures",
      "Complex conditionals: Create sentences showing cause-effect relationships",
      "Critical analysis: Use Simple Present to evaluate a theory or concept",
    ],
    C1_exercises: [
      "Sophisticated discourse: Write an academic abstract using varied Simple Present structures",
      "Style analysis: Analyze the use of Simple Present in a literary text",
      "Professional communication: Draft a policy document using appropriate Simple Present forms",
      "Teaching explanation: Explain Simple Present rules to a B1 learner",
    ],
    C2_exercises: [
      "Creative application: Use Simple Present for specific stylistic effects in creative writing",
      "Expert analysis: Critique the grammar usage in a published academic paper",
      "Innovation: Create new example sentences that push the boundaries of Simple Present usage",
      "Mastery demonstration: Teach Simple Present to teachers",
    ],
  },
  pedagogicalSequencing: {
    teachingOrder: [
      "A1: Start with 'be' verb forms and basic third person -s",
      "A1: Introduce simple affirmative sentences with common verbs",
      "A1: Add basic negatives with don't/doesn't",
      "A1: Practice simple yes/no questions",
      "A2: Expand with frequency adverbs and time expressions",
      "A2: Introduce basic stative verbs and their restrictions",
      "A2: Add Wh-questions and more complex sentence patterns",
      "B1: Develop conditional and time clause usage",
      "B1: Contrast with Present Continuous systematically",
      "B1: Introduce formal vs informal register awareness",
      "B2: Focus on nuanced stative verb distinctions",
      "B2: Develop academic and professional usage",
      "C1: Master sophisticated discourse applications",
      "C2: Achieve native-like intuitive usage",
    ],
    assessmentCriteria: {
      A1: [
        "Correct 'be' verb forms",
        "Basic third person -s",
        "Simple negatives and questions",
      ],
      A2: [
        "Frequency adverb placement",
        "Stative verb recognition",
        "Time expressions",
      ],
      B1: [
        "Conditional structures",
        "Register appropriateness",
        "Complex sentence formation",
      ],
      B2: [
        "Nuanced usage",
        "Academic register",
        "Critical thinking expression",
      ],
      C1: [
        "Sophisticated discourse",
        "Style variation",
        "Professional communication",
      ],
      C2: ["Native-like fluency", "Creative usage", "Teaching ability"],
    },
  },
  crossLinguisticAnalysis: {
    commonL1Interferences: {
      Spanish: [
        "Omitting 'do/does' in questions: '¿Hablas inglés?' → 'You speak English?'",
        "Using continuous forms with stative verbs: 'Estoy sabiendo' → 'I am knowing'",
        "Different frequency adverb placement patterns",
      ],
      French: [
        "Negative formation confusion: 'Je ne parle pas' → 'I no speak'",
        "Present tense for ongoing actions: 'Je mange' → 'I eat' (when currently eating)",
      ],
      German: [
        "Verb-second word order in questions",
        "Confusion with separable prefix verbs",
        "Different auxiliary verb usage patterns",
      ],
      Mandarin: [
        "No subject-verb agreement concept",
        "Aspect markers vs tense confusion",
        "Question particle interference",
      ],
      Arabic: [
        "Root-based verb system interference",
        "Different pronoun dropping patterns",
        "Verb-subject order preferences",
      ],
      Japanese: [
        "SOV word order interference",
        "Different politeness level expressions",
        "Topic-comment structure confusion",
      ],
    },
    contrastiveAnalysis: [
      "Simple Present in English vs present tense in other languages",
      "Habitual aspect expression across languages",
      "Stative verb restrictions comparison",
      "Question formation patterns",
      "Negative construction differences",
    ],
  },
  corpusBasedUsage: {
    frequencyData: {
      mostCommonVerbs: [
        "be (am/is/are) - 15.7% of Simple Present usage",
        "have/has - 8.3%",
        "do/does - 6.2%",
        "go/goes - 4.1%",
        "get/gets - 3.8%",
        "know - 3.5%",
        "think - 3.2%",
        "see - 2.9%",
        "come/comes - 2.7%",
        "want - 2.4%",
      ],
      registerDistribution: {
        spoken: "45% of Simple Present usage in conversation",
        written_academic: "25% in academic texts",
        written_news: "15% in news reporting",
        written_fiction: "10% in narrative fiction",
        technical: "5% in technical documentation",
      },
      functionalDistribution: {
        habitualActions: "35%",
        generalTruths: "25%",
        stativeDescriptions: "20%",
        scheduledFuture: "10%",
        instructions: "6%",
        narrative: "4%",
      },
    },
    authenticExamples: {
      spokenCorpus: [
        "I usually get up around seven thirty",
        "Do you know what time it is?",
        "She works in the city center",
        "We don't go there very often",
      ],
      academicCorpus: [
        "The data suggests a significant correlation",
        "Research indicates that students benefit from",
        "This methodology ensures reliable results",
        "Studies show that exercise improves cognitive function",
      ],
      newsCorpus: [
        "The president announces new economic policies",
        "Stock markets open higher this morning",
        "Scientists discover new species in the Amazon",
        "The company reports record quarterly profits",
      ],
    },
  },
  digitalLearningIntegration: {
    technologySupport: [
      "Speech recognition for pronunciation practice",
      "AI-powered error correction and feedback",
      "Adaptive learning algorithms for personalized practice",
      "Gamification elements for engagement",
      "Virtual reality contexts for authentic usage practice",
      "Mobile apps for on-the-go learning",
      "Interactive online exercises with immediate feedback",
      "Video analysis tools for authentic input",
    ],
    onlineResources: [
      "Interactive conjugation tools",
      "Corpus-based example generators",
      "Real-time error tracking systems",
      "Progress monitoring dashboards",
      "Collaborative learning platforms",
      "Multimedia content libraries",
      "Assessment and testing platforms",
      "Teacher resource centers",
    ],
  },
  researchBasedInsights: {
    acquisitionStudies: [
      "Third person -s is typically acquired late (Krashen & Terrell, 1983)",
      "Frequency effects influence acquisition order (Ellis, 2002)",
      "Input flood techniques improve accuracy (White, 1998)",
      "Form-focused instruction enhances acquisition (Spada & Lightbown, 2008)",
    ],
    errorAnalysisFindings: [
      "Omission of third person -s remains persistent even at advanced levels",
      "Stative verb restrictions are challenging for most L2 learners",
      "Register awareness develops gradually through explicit instruction",
      "Transfer errors vary significantly based on L1 background",
    ],
    pedagogicalRecommendations: [
      "Use processing instruction for third person -s acquisition",
      "Provide extensive input before demanding accurate production",
      "Focus on form within meaningful communication contexts",
      "Develop metalinguistic awareness for register distinctions",
      "Use contrastive analysis for L1-specific error patterns",
    ],
  },
  assessmentFramework: {
    diagnosticTools: [
      "Cloze tests for form accuracy",
      "Error correction tasks for rule awareness",
      "Register matching exercises for appropriateness",
      "Oral production tasks for fluency",
      "Written composition for integrated usage",
    ],
    rubricCriteria: {
      accuracy:
        "Correct formation of affirmative, negative, and question forms",
      appropriateness: "Suitable usage for context and register",
      complexity: "Sophisticated sentence structures and vocabulary",
      fluency: "Natural, automatic production",
      awareness: "Ability to explain rules and correct errors",
    },
    progressionMarkers: [
      "A1: Basic forms with high-frequency verbs",
      "A2: Consistent third person -s and frequency expressions",
      "B1: Conditional structures and register awareness",
      "B2: Nuanced stative verb usage and academic register",
      "C1: Sophisticated discourse and style variation",
      "C2: Native-like intuition and creative application",
    ],
  },
  futureDirections: {
    emergingTrends: [
      "AI-powered personalized learning paths",
      "Virtual reality immersive practice environments",
      "Corpus-informed authentic material development",
      "Neuroscience-based learning optimization",
      "Cross-linguistic transfer prediction models",
    ],
    researchNeeds: [
      "Long-term retention studies",
      "Individual difference factors in acquisition",
      "Optimal input-output balance research",
      "Technology integration effectiveness",
      "Cross-cultural pedagogical adaptation",
    ],
  },
};

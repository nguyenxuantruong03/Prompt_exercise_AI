import { adverbsOfFrequencyType } from "@/types/grammars/grammar/adverbs_special/adverbsOfFrequency";

export const adverbsOfFrequencyData: adverbsOfFrequencyType = {
  topic: "Adverbs of Frequency (Trạng từ tần suất)",
  level: "A1–C2",
  definition:
    "Adverbs of frequency describe how often an action happens. They are used to indicate the regularity or repetition of an action.",
  vietnameseDefinition:
    "Trạng từ tần suất mô tả mức độ thường xuyên của một hành động. Chúng được dùng để chỉ mức độ lặp lại của hành động đó.",
  types: {
    definiteFrequency: {
      definition: "Adverbs that specify exact frequency or intervals of time.",
      vietnameseDefinition:
        "Trạng từ chỉ tần suất xác định – diễn tả chính xác tần suất hoặc khoảng thời gian.",
      examples: [
        "daily – hàng ngày",
        "weekly – hàng tuần",
        "monthly – hàng tháng",
        "yearly – hàng năm",
        "every day – mỗi ngày",
        "every Monday – mỗi thứ Hai",
        "twice a week – hai lần một tuần",
        "three times a year – ba lần một năm",
      ],
    },
    indefiniteFrequency: {
      definition:
        "Adverbs that indicate general frequency, not tied to specific time frames.",
      vietnameseDefinition:
        "Trạng từ chỉ tần suất không xác định – không gắn với thời gian cụ thể.",
      examplesOrdered: [
        { adverb: "always", meaning: "luôn luôn", frequency: "100%" },
        { adverb: "usually", meaning: "thường xuyên", frequency: "80–90%" },
        { adverb: "frequently", meaning: "thường xuyên", frequency: "70–80%" },
        { adverb: "often", meaning: "thường", frequency: "60–70%" },
        { adverb: "regularly", meaning: "đều đặn", frequency: "60–70%" },
        { adverb: "sometimes", meaning: "thỉnh thoảng", frequency: "30–50%" },
        { adverb: "occasionally", meaning: "thi thoảng", frequency: "20–30%" },
        { adverb: "seldom", meaning: "hiếm khi", frequency: "10–20%" },
        { adverb: "rarely", meaning: "hiếm khi", frequency: "5–10%" },
        {
          adverb: "hardly ever",
          meaning: "hầu như không bao giờ",
          frequency: "1–5%",
        },
        { adverb: "never", meaning: "không bao giờ", frequency: "0%" },
      ],
    },
  },
  positionRules: {
    presentSimple: "Placed before the main verb but after the verb 'to be'.",
    presentSimpleExamples: [
      "She *always* goes to the gym.",
      "They *usually* play tennis on Sundays.",
      "He *is often* late for work.",
    ],
    modalVerbs: "Placed between the modal verb and the main verb.",
    modalVerbExamples: [
      "You should *never* lie.",
      "He can *sometimes* be rude.",
    ],
    auxiliaryVerbs: "Placed after the auxiliary verb.",
    auxiliaryExamples: [
      "I have *often* seen her in the park.",
      "They had *rarely* traveled abroad before the pandemic.",
    ],
    negativeSentences: "Usually placed after 'not'.",
    negativeExamples: [
      "She does *not always* agree with me.",
      "He can't *ever* be on time.",
    ],
    questions: "Usually placed before the main verb.",
    questionExamples: [
      "Do you *usually* eat breakfast?",
      "Have you *ever* tried sushi?",
    ],
  },
  adverbs_Of_Frequency_vocab: {
    definition:
      "Adverbs of frequency describe how often something happens. They answer the question 'How often?' and are commonly used with the present simple tense.",

    frequency_scale: {
      always: 100,
      usually: 90,
      normally: 80,
      generally: 80,
      often: 70,
      frequently: 70,
      sometimes: 50,
      occasionally: 30,
      seldom: 20,
      rarely: 10,
      hardly_ever: 5,
      never: 0,
    },

    CEFR_levels: {
      A1: ["always", "usually", "sometimes", "never"],
      A2: ["often", "normally", "rarely"],
      B1: ["frequently", "occasionally", "hardly ever"],
      B2: ["seldom", "regularly"],
      C1: ["infrequently", "sporadically", "periodically"],
      C2: ["intermittently", "scarcely ever", "almost never", "consistently"],
    },

    position_rules: {
      mid_position: {
        description: "Placed before the main verb (except 'to be')",
        examples: [
          "She **always** drinks coffee.",
          "They **often** visit us.",
          "I **rarely** go out on weekdays.",
        ],
      },
      after_to_be: {
        description: "Placed after the verb 'to be'",
        examples: [
          "He **is usually** late.",
          "We **are never** bored in class.",
        ],
      },
      front_position: {
        description: "Less common, used for emphasis",
        examples: [
          "**Sometimes**, I skip breakfast.",
          "**Often**, we forget the little things.",
        ],
      },
      end_position: {
        description: "Common with adverbial phrases like 'once a week'",
        examples: [
          "They go swimming **twice a week**.",
          "We meet **every Monday**.",
        ],
      },
    },

    examples_by_level: {
      A1: ["I **always** eat breakfast.", "He **never** plays soccer."],
      A2: [
        "They **usually** watch TV at night.",
        "We **rarely** go to the cinema.",
      ],
      B1: ["She **frequently** travels abroad.", "We **hardly ever** argue."],
      B2: ["The trains run **regularly**.", "He is **seldom** angry."],
      C1: [
        "The machine breaks down **sporadically**.",
        "She exercises **periodically** to stay fit.",
      ],
      C2: [
        "He checks the stock market **intermittently**.",
        "The data is updated **consistently** for accuracy.",
      ],
    },

    error_patterns: [
      {
        mistake: "She drinks always coffee.",
        correction: "She **always drinks** coffee.",
        explanation: "Place adverb before the main verb.",
      },
      {
        mistake: "He is never late usually.",
        correction: "He is **usually** never late.",
        explanation: "Avoid placing multiple adverbs without clarity.",
      },
      {
        mistake: "We go to gym every day usually.",
        correction: "We **usually** go to the gym every day.",
        explanation: "Use one frequency marker or separate them clearly.",
      },
    ],

    usage_tips: [
      "Use Present Simple with frequency adverbs.",
      "‘Always’, ‘never’, and ‘usually’ go **before** main verbs.",
      "With ‘to be’, adverbs go **after** the verb.",
      "Use adverbial phrases like ‘every day’, ‘once a month’ at the **end** of the sentence.",
      "In formal writing, use advanced frequency adverbs like **periodically**, **consistently**, **intermittently**.",
    ],

    frequency_phrases: {
      daily: ["every day", "once a day", "twice a day"],
      weekly: ["once a week", "twice a week", "every weekend"],
      monthly: ["once a month", "every month"],
      yearly: ["once a year", "every year", "annually"],
    },

    academic_usage_examples: [
      "The system is updated **regularly** to ensure security.",
      "**Frequently**, research participants are asked to complete surveys.",
      "Data was collected **periodically** during the experiment.",
    ],
  },
  formalityLevels: {
    formal: ["seldom", "rarely", "infrequently", "hardly ever"],
    informal: ["always", "usually", "often", "never"],
  },
  specialPatterns: {
    emphaticPlacement: {
      rule: "Sometimes, adverbs of frequency are placed at the beginning or end of a sentence for emphasis.",
      examples: [
        "*Sometimes*, I just want to quit.",
        "I go swimming *every day*.",
      ],
    },
    inversion: {
      rule: "Some adverbs trigger inversion for emphasis or formal writing.",
      examples: [
        "Never have I seen such a beautiful sunset.",
        "Rarely do we get such good weather.",
      ],
    },
  },
  comparisons: {
    similarMeanings: [
      {
        word1: "frequently",
        word2: "often",
        note: "Similar in meaning, but 'frequently' is slightly more formal.",
      },
      {
        word1: "seldom",
        word2: "rarely",
        note: "'Seldom' is slightly more formal or literary.",
      },
    ],
    contrastExamples: [
      "She *always* smiles vs. She *never* smiles.",
      "He *sometimes* forgets his homework vs. He *usually* completes it on time.",
    ],
  },
  collocations: {
    verbPhrases: [
      "always remember",
      "never forget",
      "usually work",
      "often say",
      "hardly ever eat",
      "sometimes go",
    ],
    nounPhrases: [
      "a *daily* routine",
      "a *weekly* meeting",
      "*frequent* flyer",
      "*regular* customer",
    ],
  },
  grammarNotes: {
    adverbVsAdjective:
      "Don't confuse adverbs of frequency (e.g., 'frequently') with adjectives (e.g., 'frequent').",
    continuousTense:
      "Adverbs of frequency are less common with continuous tenses but possible: 'She is always complaining.' (emphasizing irritation)",
    verbBeException:
      "'Always' and others go after 'to be': 'He is always kind.'",
  },
  spokenVsWritten: {
    spoken: ["I *always* wake up early.", "He *never* listens."],
    written: [
      "Rarely have we encountered such resistance.",
      "The process is *usually* completed within two days.",
    ],
  },

  commonMistakes: [
    "Using adverbs of frequency in the wrong position (e.g., 'He goes always to school').",
    "Using 'never' with a negative verb: 'I don't never go there' → should be 'I never go there'.",
    "Confusing 'every day' (adverbial phrase) with 'everyday' (adjective): 'I wear everyday clothes every day.'",
  ],
  advancedUsage: {
    literaryStyle: [
      "Scarcely had he arrived when the rain began to pour.",
      "Never before had she experienced such joy.",
    ],
    statisticalReports: [
      "'The survey indicates that 78% of respondents usually check their emails before 9 AM.'",
      "'Approximately 15% rarely attend team meetings.'",
    ],
  },
  learningTips: [
    "Memorize the common adverbs in frequency order to understand their usage more clearly.",
    "Practice placing them correctly in different tenses.",
    "Use frequency adverbs in personal daily routines to reinforce learning.",
    "Use a frequency ladder diagram to visualize how often each adverb indicates.",
  ],
  visualAidSuggestions: [
    "Frequency ladder chart (from 'always' to 'never')",
    "Timeline with adverb placement",
    "Sentence building puzzles using frequency adverbs",
  ],
  relatedTopics: [
    "Present Simple Tense",
    "Time expressions",
    "Adverbs of manner",
    "Inversion in formal English",
  ],
  cefrLevelMapping: {
    A1: ["always", "never", "sometimes"],
    A2: ["usually", "often", "rarely"],
    B1: ["seldom", "occasionally", "every week"],
    B2: ["frequently", "hardly ever", "infrequently"],
    C1: ["scarcely", "periodically", "routinely"],
    C2: ["invariably", "habitually", "perpetually"],
  },
  references: [
    "Cambridge Grammar in Use",
    "Oxford English Grammar Course",
    "British Council LearnEnglish",
    "CEFR Guidelines",
  ],
  gradableFrequencyAdverbs: {
    definition:
      "Một số trạng từ tần suất có thể kết hợp với trạng từ mức độ (degree adverbs) để nhấn mạnh mức độ tần suất.",
    examples: [
      "He *very often* skips lunch.",
      "They *quite frequently* travel abroad.",
      "She *occasionally* visits, but *very rarely* stays overnight.",
    ],
  },
  stanceAndFrequencyOverlap: {
    definition:
      "Một số trạng từ mang ý nghĩa tần suất đồng thời cũng biểu thị thái độ của người nói đối với hành động.",
    examples: [
      "He *invariably* forgets our anniversary. (ngụ ý trách móc)",
      "She *habitually* undermines others. (mang sắc thái phê phán)",
    ],
  },
  placementInComplexStructures: {
    notes:
      "Trong câu có mệnh đề phụ hoặc cấu trúc đảo ngữ, trạng từ tần suất có thể đứng ở vị trí linh hoạt nhưng vẫn giữ ý nghĩa.",
    examples: [
      "Only after he left *did I realize* he had *never* meant to stay.",
      "*Seldom* do we see such dedication.",
      "She said that he *often* goes running in the evening.",
    ],
  },
  rhetoricalEffect: {
    definition:
      "Trong văn viết nâng cao hoặc văn phong học thuật/literary, trạng từ tần suất có thể dùng để tạo hiệu ứng tu từ.",
    examples: [
      "He had *always* known it would end this way. (gợi cảm xúc, định mệnh)",
      "*Never* before had the nation witnessed such unity. (nhấn mạnh lịch sử, hiếm có)",
    ],
  },
  collocationsAndAcademicUsage: {
    academicCollocations: [
      "frequently cited",
      "regularly updated",
      "consistently observed",
      "periodically reviewed",
      "rarely acknowledged",
      "commonly misunderstood",
    ],
    examples: [
      "This method is *frequently cited* in recent studies.",
      "Data should be *regularly updated* to ensure accuracy.",
      "These anomalies are *rarely acknowledged* in official reports.",
    ],
  },
  variationAcrossRegisters: {
    spokenVsAcademic: {
      spoken: ["I always forget my keys!", "He never calls back."],
      academic: [
        "Participants *frequently reported* feelings of anxiety.",
        "Such behavior is *rarely documented* in controlled environments.",
      ],
    },
    literaryVsJournalistic: {
      literary: [
        "*Never again* would he set foot in that cursed land.",
        "She had *always believed* in fate.",
      ],
      journalistic: [
        "The team has *consistently performed* well under pressure.",
        "Such accidents are *increasingly common* in rural areas.",
      ],
    },
  },
  languageFunctions: {
    expressingHabit: [
      "She *usually* walks to work.",
      "They *habitually* arrive late.",
    ],
    expressingIrritation: [
      "He's *always* leaving the lights on!",
      "You're *constantly* on your phone!",
    ],
    expressingPraise: [
      "She *consistently* delivers excellent results.",
      "He *regularly* volunteers for extra duties.",
    ],
  },
  culturalNotes: {
    formalityAwareness:
      "Trong một số nền văn hóa, dùng 'never' hoặc 'always' trong phê phán bị xem là quá cực đoan. Dùng 'rarely' hoặc 'usually not' được xem là lịch sự hơn.",
    businessContext: [
      "*Rarely* does the company issue public statements.",
      "*Frequently* updated policies ensure compliance.",
    ],
  },
  idiomaticAndFixedExpressions: {
    expressions: [
      "every now and then – thỉnh thoảng",
      "once in a blue moon – rất hiếm khi",
      "as often as not – khá thường xuyên",
      "more often than not – hầu như luôn",
      "every so often – cách quãng một thời gian",
    ],
    examples: [
      "We go hiking *every now and then*.",
      "He visits *once in a blue moon*.",
      "*More often than not*, she gets what she wants.",
    ],
  },
  testingTips: {
    ielts: [
      "Trong IELTS Writing, hãy sử dụng trạng từ tần suất để mô tả xu hướng: 'This behavior is *frequently observed* among teenagers.'",
      "Trong IELTS Speaking Part 1, các câu hỏi như: 'How often do you...?' cần trả lời bằng trạng từ tần suất thích hợp.",
    ],
    toefl: [
      "TOEFL Listening và Reading có thể kiểm tra nghĩa của cụm: '*Every now and then*, he checks his progress.'",
      "TOEFL Speaking nên dùng trạng từ tần suất để mô tả thói quen: 'I usually study at night.'",
    ],
  },
  commonErrorExpansion: {
    redundancy: ["She never doesn't study. ❌ → 'She never studies.' ✅"],
    formConfusion: [
      "He is a frequently visitor. ❌ → 'He is a frequent visitor.' ✅",
    ],
    adverbPlacementMistake: [
      "She eats breakfast usually. ❌ → 'She usually eats breakfast.' ✅",
    ],
  },
  cognitiveNotes: {
    acquisitionOrder:
      "Người học A1–A2 thường tiếp cận với 'always, usually, sometimes, never' trước khi hiểu 'seldom, rarely, scarcely' ở B1–C1.",
    interferenceExample:
      "Người học Việt dễ đặt 'never' sai chỗ do ảnh hưởng từ cấu trúc tiếng Việt: 'Tôi không bao giờ ăn sáng' → 'I never eat breakfast.' (không cần 'not')",
  },

  // Enhanced A1-C2 comprehensive sections
  levelSpecificGuide: {
    A1: {
      description:
        "Basic frequency adverbs for everyday situations and simple present tense",
      keyAdverbs: ["always", "usually", "sometimes", "never"],
      basicUsage: {
        definition:
          "Simple frequency adverbs placed before main verbs or after 'to be' to describe regular habits and routines",
        examples: [
          "I always eat breakfast. (Tôi luôn ăn sáng)",
          "She is usually happy. (Cô ấy thường vui vẻ)",
          "We sometimes watch TV. (Chúng tôi thỉnh thoảng xem TV)",
          "He never plays football. (Anh ấy không bao giờ chơi bóng đá)",
        ],
      },
      simplePatterns: [
        "Subject + frequency adverb + main verb",
        "Subject + to be + frequency adverb + adjective/noun",
        "Frequency adverb goes before main verb but after 'to be'",
      ],
      commonMistakes: [
        "❌ I go always to school → ✅ I always go to school",
        "❌ She is always not happy → ✅ She is never happy",
        "❌ He doesn't never come → ✅ He never comes",
      ],
      practiceActivities: [
        "Fill in blanks with correct frequency adverbs",
        "Match frequency adverbs with percentage scales",
        "Describe daily routines using frequency adverbs",
        "True/false statements about personal habits",
      ],
    },
    A2: {
      description:
        "Extended range of frequency adverbs with question forms and negative patterns",
      keyAdverbs: ["often", "rarely", "normally", "generally"],
      expandedUsage: {
        definition:
          "More varied frequency expressions including questions and negative forms, introducing time expressions",
        examples: [
          "Do you often visit your grandparents? (Bạn có thường xuyên thăm ông bà không?)",
          "I don't usually drink coffee. (Tôi thường không uống cà phê)",
          "They rarely go to the cinema. (Họ hiếm khi đi xem phim)",
          "We normally have dinner at 7 PM. (Chúng tôi thường ăn tối lúc 7 giờ)",
        ],
      },
      questionForms: [
        "How often do you...?",
        "Do you ever...?",
        "Do you usually...?",
        "Are you always...?",
      ],
      negativePatterns: [
        "I don't usually... (instead of I usually don't...)",
        "She doesn't often... (more natural than She often doesn't...)",
        "We don't normally... (common pattern)",
      ],
      practiceActivities: [
        "Interview classmates about habits using 'How often...?'",
        "Complete dialogues with appropriate frequency adverbs",
        "Transform positive sentences to negative using frequency adverbs",
        "Role-play conversations about weekly routines",
      ],
    },
    B1: {
      description:
        "Complex frequency expressions, adverbial phrases, and varied sentence positions",
      keyAdverbs: ["frequently", "occasionally", "hardly ever", "regularly"],
      intermediateUsage: {
        definition:
          "Sophisticated frequency expressions including emphatic positions and complex time phrases",
        examples: [
          "Frequently, students struggle with this concept. (Thường xuyên, học sinh gặp khó khăn với khái niệm này)",
          "I occasionally work from home. (Tôi thỉnh thoảng làm việc tại nhà)",
          "She hardly ever complains about anything. (Cô ấy hầu như không bao giờ phàn nàn về điều gì)",
          "We meet regularly for coffee. (Chúng tôi gặp nhau đều đặn để uống cà phê)",
        ],
      },
      adverbPhrases: [
        "every now and then",
        "from time to time",
        "on a regular basis",
        "once in a while",
        "every so often",
      ],
      timeExpressions: [
        "twice a week",
        "three times a month",
        "every other day",
        "on weekdays",
        "during the summer",
      ],
      practiceActivities: [
        "Rewrite sentences moving frequency adverbs to different positions",
        "Combine simple sentences using frequency adverbs",
        "Write paragraphs describing changing habits over time",
        "Analyze frequency patterns in authentic texts",
      ],
    },
    B2: {
      description:
        "Formal and academic frequency expressions with nuanced meanings",
      keyAdverbs: ["seldom", "invariably", "consistently", "sporadically"],
      advancedPatterns: {
        definition:
          "Sophisticated frequency adverbs used in formal writing, academic contexts, and complex sentence structures",
        examples: [
          "The results consistently show improvement. (Kết quả liên tục cho thấy sự cải thiện)",
          "He seldom attends social events. (Anh ấy hiếm khi tham dự các sự kiện xã hội)",
          "Data is updated sporadically throughout the year. (Dữ liệu được cập nhật không đều đặn trong năm)",
          "She invariably arrives early for meetings. (Cô ấy luôn luôn đến sớm cho các cuộc họp)",
        ],
      },
      formalWriting: [
        "Research consistently demonstrates...",
        "Participants rarely reported...",
        "The system regularly updates...",
        "Results seldom contradict...",
      ],
      academicUsage: [
        "Data collection occurred periodically over six months",
        "Participants were occasionally contacted for follow-up",
        "The methodology consistently produced reliable results",
        "Errors rarely exceeded the acceptable threshold",
      ],
      practiceActivities: [
        "Transform informal frequency expressions to formal academic style",
        "Write research summaries using appropriate frequency adverbs",
        "Analyze frequency adverb usage in academic papers",
        "Practice formal presentation language with frequency expressions",
      ],
    },
    C1: {
      description:
        "Literary and sophisticated frequency expressions with stylistic awareness",
      keyAdverbs: ["perpetually", "habitually", "infrequently", "periodically"],
      sophisticatedUsage: {
        definition:
          "Highly nuanced frequency expressions used in literature, formal discourse, and professional communication",
        examples: [
          "He perpetually questioned the status quo. (Anh ấy liên tục đặt câu hỏi về hiện trạng)",
          "She habitually underestimated her own abilities. (Cô ấy thường xuyên đánh giá thấp khả năng của mình)",
          "Such incidents occur infrequently in well-managed organizations. (Những sự cố như vậy hiếm khi xảy ra trong các tổ chức được quản lý tốt)",
          "The committee meets periodically to review progress. (Ủy ban họp định kỳ để xem xét tiến độ)",
        ],
      },
      literaryStyle: [
        "Never had she witnessed such beauty",
        "Rarely does one encounter such dedication",
        "Seldom have we seen such courage",
        "Scarcely had he arrived when...",
      ],
      rhetoricalDevices: [
        "Emphasis through fronted frequency adverbs",
        "Inversion for dramatic effect",
        "Parallel structures with frequency expressions",
        "Graduation of frequency for rhetorical impact",
      ],
      practiceActivities: [
        "Analyze frequency adverb usage in literary texts",
        "Write formal essays using sophisticated frequency expressions",
        "Practice rhetorical inversion with frequency adverbs",
        "Create professional reports with varied frequency vocabulary",
      ],
    },
    C2: {
      description:
        "Mastery level with complete understanding of register, style, and pragmatic effects",
      keyAdverbs: [
        "intermittently",
        "unfailingly",
        "ceaselessly",
        "sporadically",
      ],
      masterLevel: {
        definition:
          "Native-like command of frequency expressions across all registers, with subtle pragmatic and stylistic awareness",
        examples: [
          "The signal transmitted intermittently, causing communication failures. (Tín hiệu truyền không đều, gây ra lỗi liên lạc)",
          "She unfailingly remembered everyone's birthday. (Cô ấy không bao giờ quên sinh nhật của ai)",
          "The machine operated ceaselessly for decades. (Máy móc hoạt động không ngừng trong nhiều thập kỷ)",
          "Funding arrived sporadically, hampering research progress. (Kinh phí đến không đều đặn, cản trở tiến độ nghiên cứu)",
        ],
      },
      nuancedMeanings: [
        "Distinguishing subtle differences between synonymous frequency adverbs",
        "Understanding pragmatic implications of frequency choices",
        "Recognizing register-specific frequency expressions",
        "Appreciating stylistic effects of frequency adverb placement",
      ],
      professionalUsage: [
        "The algorithm consistently outperforms existing models",
        "Stakeholders periodically reassess strategic objectives",
        "Market conditions fluctuate intermittently throughout the quarter",
        "Quality assurance protocols unfailingly detect anomalies",
      ],
      practiceActivities: [
        "Edit texts for optimal frequency adverb usage across registers",
        "Write style guides for frequency expression usage",
        "Conduct discourse analysis of frequency patterns",
        "Mentor others in sophisticated frequency expression usage",
      ],
    },
  },

  frequencySemantics: {
    definition:
      "The study of how frequency adverbs encode quantitative and qualitative aspects of temporal occurrence",
    percentageMapping: {
      always: "100% - absolute frequency, no exceptions",
      "almost always": "95-99% - very high frequency with rare exceptions",
      "usually/normally": "80-90% - high frequency, expected norm",
      "often/frequently": "60-75% - moderately high frequency",
      "sometimes/occasionally": "25-50% - moderate frequency",
      "rarely/seldom": "5-15% - low frequency",
      "hardly ever": "1-5% - very low frequency",
      never: "0% - absolute negative frequency",
    },
    contextualVariations: [
      {
        context: "Personal habits",
        interpretation:
          "Frequency adverbs describe individual behavioral patterns",
        examples: [
          "I always brush my teeth before bed",
          "She usually takes the bus to work",
          "He rarely eats meat",
        ],
      },
      {
        context: "Scientific observations",
        interpretation:
          "Frequency adverbs quantify observed phenomena with precision",
        examples: [
          "The reaction consistently produces the same results",
          "Errors rarely exceed 2% in controlled conditions",
          "The pattern frequently appears in similar datasets",
        ],
      },
      {
        context: "Social commentary",
        interpretation:
          "Frequency adverbs express generalizations about groups or behaviors",
        examples: [
          "Politicians often make promises they cannot keep",
          "Young people rarely appreciate classical music",
          "Customers usually expect quick service",
        ],
      },
    ],
  },

  syntacticProperties: {
    movementRules: {
      definition:
        "Rules governing the syntactic placement and movement of frequency adverbs in different sentence structures",
      constraints: [
        "Frequency adverbs cannot separate verb and direct object",
        "Negative frequency adverbs (never, rarely) trigger negative polarity items",
        "Frequency adverbs scope over the entire predicate unless modified",
        "Fronted frequency adverbs may trigger subject-auxiliary inversion",
      ],
      examples: [
        "✅ She always reads books / ❌ She reads always books",
        "✅ Never have I seen... / ❌ Never I have seen...",
        "✅ I have never been there / ❌ I never have been there",
      ],
    },
    scopeInteraction: {
      definition:
        "How frequency adverbs interact with other scope-bearing elements like quantifiers and negation",
      examples: [
        "Everyone always comes (∀x always come(x))",
        "Someone rarely visits (∃x rarely visit(x))",
        "Never does anyone complain (¬∃x complain(x))",
      ],
    },
    negativePolarity: {
      definition:
        "Frequency adverbs like 'rarely', 'seldom', 'hardly ever' license negative polarity items",
      examples: [
        "She rarely eats anything spicy",
        "He seldom talks to anyone about it",
        "They hardly ever go anywhere interesting",
      ],
    },
  },

  pragmaticAspects: {
    implicature: {
      definition:
        "Implied meanings conveyed by frequency adverb choice beyond literal frequency",
      examples: [
        "'He's always complaining' → implicates speaker's annoyance",
        "'She rarely calls' → may implicate relationship distance",
        "'They usually arrive on time' → sets expectation for punctuality",
      ],
    },
    hedging: {
      definition:
        "Using frequency adverbs to soften statements and avoid absolute claims",
      examples: [
        "'This usually works' → hedges against potential failure",
        "'People often misunderstand' → softens criticism",
        "'It's generally true that...' → allows for exceptions",
      ],
    },
    emphasis: {
      definition:
        "Strategic use of frequency adverbs for rhetorical emphasis and persuasion",
      examples: [
        "'Never before has this been attempted' → emphasizes novelty",
        "'Always remember that...' → emphasizes importance",
        "'Rarely do we see such dedication' → emphasizes exceptionality",
      ],
    },
  },

  crossLinguisticComparison: {
    vietnamese: {
      similarities: [
        "Both languages have frequency markers",
        "Both allow frequency expressions at sentence level",
        "Both distinguish definite and indefinite frequency",
      ],
      differences: [
        "Vietnamese places frequency markers more flexibly",
        "English requires specific auxiliary verb constructions",
        "Vietnamese doesn't have equivalent inversion patterns",
      ],
      interferencePatterns: [
        "Vietnamese speakers may overuse 'very' with frequency adverbs",
        "Word order transfer from Vietnamese can cause placement errors",
        "Double negation patterns from Vietnamese (không bao giờ không)",
      ],
    },
    other_languages: [
      {
        language: "Spanish",
        notes:
          "Similar post-verbal placement options; 'siempre', 'nunca' patterns",
      },
      {
        language: "French",
        notes:
          "Complex placement rules with compound tenses; 'toujours', 'jamais'",
      },
      {
        language: "German",
        notes: "Different positioning due to V2 constraint; 'immer', 'nie'",
      },
    ],
  },

  corpusFindings: {
    mostFrequentAdverbs: [
      {
        adverb: "always",
        frequency_rank: 1,
        typical_contexts: [
          "personal habits",
          "emotional expressions",
          "instructions",
        ],
      },
      {
        adverb: "never",
        frequency_rank: 2,
        typical_contexts: ["absolute statements", "promises", "rules"],
      },
      {
        adverb: "usually",
        frequency_rank: 3,
        typical_contexts: [
          "routine descriptions",
          "generalizations",
          "expectations",
        ],
      },
      {
        adverb: "often",
        frequency_rank: 4,
        typical_contexts: ["observations", "patterns", "recommendations"],
      },
      {
        adverb: "sometimes",
        frequency_rank: 5,
        typical_contexts: ["possibilities", "variations", "casual statements"],
      },
    ],
    registerDistribution: {
      spoken: ["always", "never", "usually", "sometimes", "often"],
      academic: [
        "frequently",
        "consistently",
        "regularly",
        "periodically",
        "rarely",
      ],
      literary: ["perpetually", "ceaselessly", "scarcely", "invariably"],
      business: [
        "regularly",
        "consistently",
        "typically",
        "generally",
        "systematically",
      ],
    },
    collocationalPatterns: [
      {
        pattern: "always + present tense verb",
        frequency: "very high",
        examples: ["always goes", "always says", "always remembers"],
      },
      {
        pattern: "never + bare infinitive",
        frequency: "high",
        examples: ["never forget", "never give up", "never mind"],
      },
      {
        pattern: "frequently + past participle",
        frequency: "moderate",
        examples: ["frequently asked", "frequently cited", "frequently used"],
      },
    ],
  },

  pedagogicalProgression: {
    teachingSequence: [
      "1. Introduce core four adverbs (always, usually, sometimes, never) with simple present",
      "2. Practice positioning rules with 'to be' vs. main verbs",
      "3. Expand to include often, rarely with question forms",
      "4. Introduce adverbial phrases and time expressions",
      "5. Add formal/academic frequency expressions",
      "6. Teach stylistic and pragmatic uses",
      "7. Master complex syntactic patterns and inversion",
    ],
    assessmentCriteria: {
      A1_A2: [
        "Correct positioning of basic frequency adverbs",
        "Appropriate choice for personal habit descriptions",
        "Accurate use in simple present tense",
      ],
      B1_B2: [
        "Varied frequency vocabulary in different contexts",
        "Correct usage in complex sentence structures",
        "Understanding of formal vs. informal frequency expressions",
      ],
      C1_C2: [
        "Sophisticated frequency vocabulary across registers",
        "Stylistic awareness and rhetorical effectiveness",
        "Pragmatic appropriateness in professional contexts",
      ],
    },
    commonTeachingMistakes: [
      "Teaching all frequency adverbs simultaneously without progression",
      "Insufficient practice with positioning rules",
      "Neglecting register differences in frequency vocabulary",
      "Overemphasis on percentage meanings without contextual usage",
    ],
  },

  comprehensiveReferences: {
    academicBooks: [
      {
        title: "A Comprehensive Grammar of the English Language",
        author: "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J.",
        year: "1985",
        isbn: "978-0582517349",
        relevantChapters: [
          "Chapter 8: Adverbials",
          "Section 8.64-8.77: Frequency adverbials",
        ],
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Huddleston, R., & Pullum, G. K.",
        year: "2002",
        isbn: "978-0521431460",
        relevantChapters: [
          "Chapter 8: Adverbs and adverb phrases",
          "Section 8.3: Frequency modification",
        ],
      },
      {
        title: "Oxford English Grammar: The Use of Grammar",
        author: "Swan, M. & Walter, C.",
        year: "2019",
        isbn: "978-0194420822",
        relevantChapters: [
          "Unit 5: Adverbs of frequency",
          "Unit 12: Word order with adverbs",
        ],
      },
      {
        title: "English Grammar in Use (5th Edition)",
        author: "Murphy, R.",
        year: "2019",
        isbn: "978-1108457682",
        relevantChapters: [
          "Unit 109: Word order",
          "Unit 110: Still, yet, already, anymore",
        ],
      },
      {
        title: "Practical English Usage (4th Edition)",
        author: "Swan, M.",
        year: "2016",
        isbn: "978-0194202411",
        relevantChapters: [
          "Section 21: Adverbs",
          "Section 22: Position of adverbials",
        ],
      },
      {
        title: "Advanced Grammar in Use (3rd Edition)",
        author: "Hewings, M.",
        year: "2013",
        isbn: "978-1107539303",
        relevantChapters: [
          "Unit 44: Adverbs of frequency",
          "Unit 45: Focusing adverbs",
        ],
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        author: "Celce-Murcia, M. & Larsen-Freeman, D.",
        year: "2015",
        isbn: "978-1111351861",
        relevantChapters: ["Chapter 16: Adverbials"],
      },
    ],
    researchPapers: [
      {
        title: "The Acquisition of English Frequency Adverbs by L2 Learners",
        authors: ["Chen, L.", "Wong, S."],
        journal: "Applied Linguistics",
        year: "2018",
        doi: "10.1093/applin/amy024",
      },
      {
        title:
          "Corpus-based Analysis of Frequency Adverb Usage in Academic Writing",
        authors: ["Smith, J.", "Brown, A.", "Davis, M."],
        journal: "English for Specific Purposes",
        year: "2020",
        doi: "10.1016/j.esp.2020.03.002",
      },
      {
        title:
          "Pragmatic Functions of Frequency Adverbs in Native and Non-native Speaker Discourse",
        authors: ["Johnson, K.", "Lee, H."],
        journal: "Journal of Pragmatics",
        year: "2019",
        doi: "10.1016/j.pragma.2019.05.018",
      },
    ],
    onlineResources: [
      {
        name: "Cambridge English Grammar",
        url: "https://dictionary.cambridge.org/grammar/",
        description:
          "Comprehensive grammar explanations with frequency adverb sections",
        cefr_level: "A1-C2",
      },
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org/grammar",
        description:
          "Interactive exercises and explanations for frequency adverbs",
        cefr_level: "A1-B2",
      },
      {
        name: "Oxford Learner's Dictionaries",
        url: "https://www.oxfordlearnersdictionaries.com/",
        description:
          "Detailed definitions and usage examples for frequency adverbs",
        cefr_level: "A1-C2",
      },
      {
        name: "Grammarly Blog",
        url: "https://www.grammarly.com/blog/adverbs-of-frequency/",
        description: "Practical usage guides for frequency adverbs in writing",
        cefr_level: "B1-C1",
      },
      {
        name: "Perfect English Grammar",
        url: "https://www.perfect-english-grammar.com/adverbs-of-frequency.html",
        description: "Clear explanations with downloadable exercises",
        cefr_level: "A2-B2",
      },
    ],
    dictionaries: [
      {
        name: "Oxford English Dictionary",
        publisher: "Oxford University Press",
        type: "Comprehensive historical dictionary",
        url: "https://www.oed.com/",
      },
      {
        name: "Merriam-Webster Dictionary",
        publisher: "Merriam-Webster Inc.",
        type: "Contemporary American English",
        url: "https://www.merriam-webster.com/",
      },
      {
        name: "Cambridge Advanced Learner's Dictionary",
        publisher: "Cambridge University Press",
        type: "Learner's dictionary with CEFR levels",
        url: "https://dictionary.cambridge.org/",
      },
      {
        name: "Longman Dictionary of Contemporary English",
        publisher: "Pearson Education",
        type: "Comprehensive learner's dictionary",
      },
    ],
    corpora: [
      {
        name: "Corpus of Contemporary American English (COCA)",
        description:
          "Large corpus for studying frequency adverb usage patterns",
        access: "https://www.english-corpora.org/coca/",
      },
      {
        name: "British National Corpus (BNC)",
        description: "Balanced corpus of British English with frequency data",
        access: "https://www.english-corpora.org/bnc/",
      },
      {
        name: "Cambridge Learner Corpus",
        description:
          "Collection of learner writing showing frequency adverb errors",
        access: "Restricted academic access",
      },
    ],
  },
};

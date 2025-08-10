import { degreeAdverbsType } from "@/types/grammars/grammar/adverbs_special/degreeAdverbs";

export const degreeAdverbsData: degreeAdverbsType = {
  id: 17,
  topic: "Degree Adverbs",
  level: "A1–C2",
  definition:
    "Degree adverbs (also called intensifiers or adverbs of degree) modify adjectives, adverbs, or verbs to show **intensity**, **extent**, or **degree** of an action, quality, or another adverb.",
  mainPurpose: [
    "To express the **intensity** of an adjective, verb, or another adverb.",
    "To indicate **how much**, **how little**, or **to what extent** something is done or is the case.",
  ],
  usageTypes: [
    {
      type: "Modifying adjectives",
      example: "She is *very* tired.",
      description:
        "The degree adverb 'very' intensifies the adjective 'tired'.",
    },
    {
      type: "Modifying adverbs",
      example: "He runs *incredibly* fast.",
      description: "The adverb 'incredibly' intensifies the adverb 'fast'.",
    },
    {
      type: "Modifying verbs",
      example: "I *completely* understand.",
      description: "The adverb 'completely' modifies the verb 'understand'.",
    },
    {
      type: "Modifying past participles",
      example: "She is *deeply* hurt.",
      description:
        "Degree adverbs often modify past participles used as adjectives.",
    },
  ],
  classification: {
    strengthLevels: {
      extreme: [
        "absolutely",
        "completely",
        "totally",
        "entirely",
        "utterly",
        "perfectly",
        "thoroughly",
        "deeply",
      ],
      high: [
        "very",
        "really",
        "so",
        "extremely",
        "incredibly",
        "highly",
        "awfully",
        "terribly",
      ],
      medium: ["quite", "fairly", "pretty", "rather", "moderately"],
      low: [
        "slightly",
        "a bit",
        "a little",
        "barely",
        "hardly",
        "just",
        "somewhat",
        "mildly",
        "partially",
      ],
    },
    limitation: {
      onlyCertainAdverbsForCertainAdjectives: {
        example: "'Absolutely' is only used with non-gradable adjectives.",
        correct: "absolutely sure",
        incorrect: "absolutely hungry",
      },
    },
    gradability: {
      gradable:
        "Adjectives like 'cold', 'tired', 'happy' can be modified by a wide range of degree adverbs.",
      nonGradable:
        "Adjectives like 'perfect', 'dead', 'impossible' take only extreme degree adverbs like 'absolutely'.",
    },
  },
  commonDegreeAdverbs: {
    positiveIntensifiers: [
      "very",
      "really",
      "so",
      "extremely",
      "terribly",
      "incredibly",
      "highly",
    ],
    downtoners: [
      "fairly",
      "quite",
      "somewhat",
      "slightly",
      "a bit",
      "a little",
      "barely",
      "just",
    ],
    maximizers: [
      "absolutely",
      "completely",
      "totally",
      "entirely",
      "perfectly",
      "utterly",
      "thoroughly",
    ],
    minimizers: ["hardly", "scarcely", "barely", "only just", "not at all"],
  },
  degree_Adverbs_vocab: {
    categories: {
      low_degree: [
        "slightly",
        "barely",
        "just",
        "somewhat",
        "a little",
        "a bit",
      ],
      medium_degree: ["fairly", "rather", "moderately", "pretty", "quite"],
      high_degree: [
        "very",
        "extremely",
        "incredibly",
        "so",
        "terribly",
        "really",
        "highly",
        "deeply",
        "absolutely",
        "totally",
        "completely",
        "utterly",
      ],
      intensifiers_with_extreme_adjectives: [
        "absolutely",
        "totally",
        "utterly",
        "entirely",
        "completely",
      ],
      mitigating_adverbs: ["fairly", "somewhat", "moderately", "relatively"],
    },

    CEFR_levels: {
      A1: ["very", "really", "too", "so"],
      A2: ["quite", "a bit", "a little"],
      B1: ["rather", "pretty", "slightly", "just"],
      B2: ["fairly", "totally", "completely", "extremely"],
      C1: ["utterly", "highly", "entirely", "moderately"],
      C2: ["deeply", "incredibly", "relatively", "profoundly"],
    },

    position_rules: {
      before_adjectives: {
        rule: "Degree adverbs are usually placed before adjectives.",
        examples: [
          "It's **very** cold today.",
          "She's **extremely** talented.",
        ],
      },
      before_adverbs: {
        rule: "They can also modify other adverbs.",
        examples: [
          "He runs **incredibly** fast.",
          "They worked **quite** hard.",
        ],
      },
      before_verbs_less_common: {
        rule: "Some can modify verbs directly.",
        examples: [
          "I **really** like this book.",
          "They **barely** noticed it.",
        ],
      },
    },

    usage_examples: [
      "The exam was **quite** difficult.",
      "She is **absolutely** certain.",
      "I'm **a bit** tired.",
      "This is **completely** wrong.",
      "They are **highly** respected.",
      "He's **moderately** successful.",
      "She's **utterly** confused.",
      "We were **deeply** moved by the story.",
      "You're **just** in time.",
    ],

    collocations: {
      absolutely: ["right", "sure", "essential", "necessary"],
      totally: ["wrong", "convinced", "clear", "destroyed"],
      utterly: ["useless", "ridiculous", "alone", "devastated"],
      completely: ["different", "safe", "forgotten", "empty"],
      highly: ["unlikely", "successful", "recommended", "qualified"],
      fairly: ["easy", "simple", "quiet", "common"],
    },

    common_mistakes: [
      {
        mistake: "It's very absolutely wrong.",
        correction: "It's **absolutely** wrong.",
        explanation: "Avoid combining two high-degree adverbs.",
      },
      {
        mistake: "He extremely likes music.",
        correction: "He **really** likes music.",
        explanation: "Use 'really' or 'truly' to modify verbs like 'like'.",
      },
      {
        mistake: "This book is very excellent.",
        correction: "This book is **absolutely** excellent.",
        explanation: "Use absolute intensifiers with extreme adjectives.",
      },
    ],

    comparison_table: [
      { degree: "Low", adverbs: ["slightly", "barely", "a little"] },
      { degree: "Medium", adverbs: ["fairly", "pretty", "quite"] },
      { degree: "High", adverbs: ["very", "really", "extremely"] },
      { degree: "Extreme", adverbs: ["absolutely", "utterly", "totally"] },
    ],

    stylistic_notes: {
      informal: ["really", "pretty", "so", "a bit"],
      formal: ["utterly", "completely", "entirely", "profoundly"],
      spoken: ["really", "so", "just", "a little"],
      academic: ["relatively", "moderately", "highly", "profoundly"],
    },

    learning_tips: [
      "Do not use 'very' with extreme adjectives like 'fantastic' or 'terrible'.",
      "Use adverbs like 'absolutely' or 'utterly' with extreme adjectives.",
      "Know the strength of each adverb to avoid overuse in writing.",
      "Use stronger adverbs for essays and formal speech for clarity.",
    ],
  },
  structure: {
    patterns: [
      {
        pattern: "Adverb of degree + adjective",
        example: "very hot, absolutely necessary",
      },
      {
        pattern: "Adverb of degree + adverb",
        example: "really quickly, incredibly slowly",
      },
      {
        pattern: "Adverb of degree + verb",
        example: "completely agree, thoroughly enjoy",
      },
    ],
  },
  timeMarkers: ["not applicable (degree adverbs do not mark time)"],
  recognitionPatterns: [
    "Often placed before adjectives or adverbs",
    "Used to answer the question: 'To what extent?'",
    "Can precede or sometimes follow verbs, depending on the verb type",
  ],
  examples: [
    "She was **very** happy with the results.",
    "It's **completely** wrong to do that.",
    "I'm **slightly** tired today.",
    "He was **utterly** defeated.",
    "They're **just** arriving now.",
    "This movie is **rather** boring.",
    "The child is **barely** awake.",
  ],
  collocations: {
    absolutely: ["sure", "necessary", "amazing", "delighted"],
    completely: ["wrong", "empty", "lost", "satisfied"],
    very: ["happy", "sad", "tired", "hungry"],
    rather: ["difficult", "strange", "long"],
    slightly: ["different", "annoying", "nervous"],
  },
  commonMistakes: [
    {
      mistake: "Using 'absolutely' with gradable adjectives",
      incorrect: "He is absolutely tired.",
      correct: "He is very tired.",
    },
    {
      mistake: "Using 'very' with non-gradable adjectives",
      incorrect: "It is very perfect.",
      correct: "It is absolutely perfect.",
    },
    {
      mistake: "Misplacing the adverb",
      incorrect: "He completely has failed.",
      correct: "He has completely failed.",
    },
  ],
  spellingNotes: [
    "Most degree adverbs do not change form based on tense or subject.",
    "Some adverbs (e.g. 'pretty') can have informal usage.",
  ],
  formalVsInformal: {
    formal: ["entirely", "highly", "moderately"],
    informal: ["really", "so", "pretty", "a bit"],
  },
  advancedStructures: [
    {
      structure: "Too + adjective + to + verb",
      example: "He is too tired to walk.",
    },
    {
      structure: "Enough + noun / adjective + to + verb",
      example: "She is strong enough to lift it.",
    },
    {
      structure: "So + adjective + that + clause",
      example: "He was so angry that he shouted.",
    },
    {
      structure: "Such + noun + that + clause",
      example: "It was such a hot day that we stayed inside.",
    },
  ],
  learningTips: [
    "Group adverbs by strength to use them correctly with gradable and non-gradable adjectives.",
    "Practice collocations with specific adjectives.",
    "Memorize common pairings to avoid unnatural combinations.",
  ],
  relatedTopics: [
    "Gradable and Non-gradable Adjectives",
    "Intensifiers and Mitigators",
    "Sentence Adverbs",
    "Comparatives with Degree Adverbs",
    "Adverbs vs Adjectives",
  ],
  CEFRLevels: {
    A1: {
      examples: ["very", "so", "too", "a bit", "really"],
      description: "Basic intensifiers for emotions, size, and quantity.",
      detailedContent: {
        basicIntensifiers: [
          "very - most common intensifier (very good, very bad)",
          "really - informal intensifier (really nice, really difficult)",
          "so - strong emphasis (so beautiful, so tired)",
          "too - excessive degree (too hot, too expensive)",
          "a bit - slight degree (a bit cold, a bit hungry)",
        ],
        commonAdjectives: [
          "big/small with very: very big house, very small car",
          "good/bad with really: really good food, really bad weather",
          "hot/cold with too: too hot outside, too cold inside",
          "happy/sad with so: so happy today, so sad about it",
          "tired/hungry with a bit: a bit tired, a bit hungry",
        ],
        simplePatterns: [
          "Subject + be + very + adjective (I am very happy)",
          "Subject + be + so + adjective (She is so kind)",
          "Subject + be + too + adjective (It is too difficult)",
          "Subject + be + a bit + adjective (He is a bit late)",
          "Subject + really + verb (I really like it)",
        ],
        practicalExamples: [
          "The coffee is very hot.",
          "This book is really interesting.",
          "I am so excited about the trip.",
          "The test was too hard for me.",
          "She is a bit nervous before the exam.",
        ],
        frequency: [
          "very - used 50+ times daily in basic conversation",
          "really - used 30+ times daily in informal speech",
          "so - used 20+ times daily for emphasis",
          "too - used 15+ times daily to express excess",
          "a bit - used 10+ times daily for mild degree",
        ],
      },
    },
    A2: {
      examples: ["quite", "just", "enough", "fairly", "pretty"],
      description: "Simple degree adverbs and common expressions.",
      detailedContent: {
        expandedVocabulary: [
          "quite - moderate degree (quite good, quite difficult)",
          "just - exact degree or recent action (just right, just arrived)",
          "enough - sufficient degree (good enough, fast enough)",
          "fairly - reasonably, moderately (fairly easy, fairly common)",
          "pretty - informal moderately (pretty nice, pretty sure)",
        ],
        basicGradation: [
          "Low: a bit < quite < fairly",
          "Medium: quite < very < really",
          "High: very < so < really strong",
          "Comparison: not very vs quite vs fairly vs very",
          "Enough patterns: adjective + enough (old enough, big enough)",
        ],
        commonExpressions: [
          "quite right - exactly correct",
          "just fine - perfectly adequate",
          "good enough - satisfactory level",
          "fairly certain - reasonably sure",
          "pretty sure - quite confident (informal)",
        ],
        practicalUsage: [
          "The movie was quite entertaining.",
          "I just finished my homework.",
          "This room is big enough for all of us.",
          "The test was fairly easy.",
          "I'm pretty sure he's coming tomorrow.",
        ],
        frequency: [
          "quite - used 25+ times daily in standard conversation",
          "just - used 40+ times daily (temporal and degree uses)",
          "enough - used 20+ times daily in practical contexts",
          "fairly - used 15+ times daily in neutral descriptions",
          "pretty - used 25+ times daily in informal speech",
        ],
      },
    },
    B1: {
      examples: ["extremely", "completely", "hardly", "slightly", "rather"],
      description: "More variety in expression and comparative usage.",
      detailedContent: {
        intermediateIntensifiers: [
          "extremely - very high degree (extremely difficult, extremely pleased)",
          "completely - total degree (completely different, completely wrong)",
          "hardly - almost not (hardly visible, hardly enough)",
          "slightly - small degree (slightly better, slightly worried)",
          "rather - preference or moderate degree (rather nice, rather disappointed)",
        ],
        gradableNonGradable: [
          "Gradable adjectives: tired → very/extremely/completely tired",
          "Non-gradable adjectives: perfect → absolutely/completely perfect (not 'very perfect')",
          "Extreme adjectives: exhausted → absolutely/completely exhausted",
          "Opinion adjectives: beautiful → rather/quite/extremely beautiful",
          "Size adjectives: huge → absolutely/completely huge",
        ],
        comparativeUsage: [
          "much/far + comparative: much better, far worse",
          "slightly/a bit + comparative: slightly bigger, a bit faster",
          "way/a lot + comparative: way better, a lot easier",
          "considerably/significantly + comparative: considerably larger",
          "marginally/barely + comparative: marginally better",
        ],
        stylisticVariation: [
          "Formal contexts: considerably, significantly, substantially",
          "Informal contexts: way, loads, tons, heaps",
          "Written language: particularly, notably, remarkably",
          "Spoken language: really, totally, absolutely",
          "Academic writing: considerably, substantially, markedly",
        ],
        frequency: [
          "extremely - used 10+ times daily in expressive speech",
          "completely - used 15+ times daily for emphasis",
          "hardly - used 12+ times daily for minimal degree",
          "slightly - used 18+ times daily for small differences",
          "rather - used 20+ times daily in polite/formal contexts",
        ],
      },
    },
    B2: {
      examples: [
        "utterly",
        "absolutely",
        "entirely",
        "moderately",
        "considerably",
      ],
      description: "Subtler control of tone and formality.",
      detailedContent: {
        advancedIntensifiers: [
          "utterly - complete degree with strong emotion (utterly ridiculous, utterly devastated)",
          "absolutely - total agreement or extreme degree (absolutely right, absolutely gorgeous)",
          "entirely - completely, with no exceptions (entirely different, entirely possible)",
          "moderately - reasonable degree (moderately successful, moderately difficult)",
          "considerably - noticeably, significantly (considerably better, considerably more)",
        ],
        formalInformalRegister: [
          "Academic: considerably, substantially, markedly, notably",
          "Business: significantly, appreciably, materially, substantially",
          "Conversational: totally, completely, absolutely, really",
          "Literary: utterly, profoundly, intensely, extraordinarily",
          "Scientific: considerably, significantly, substantially, markedly",
        ],
        complexStructures: [
          "So...that constructions: so tired that I fell asleep",
          "Such...that constructions: such a beautiful day that we walked",
          "Too...to constructions: too expensive to buy",
          "Enough...to constructions: smart enough to understand",
          "As...as constructions: not as difficult as expected",
        ],
        nuancedMeaning: [
          "Rather vs quite: rather implies preference, quite states degree",
          "Fairly vs pretty: fairly is neutral, pretty is more positive",
          "Completely vs totally: completely is factual, totally is emphatic",
          "Absolutely vs utterly: absolutely agrees, utterly emphasizes extreme",
          "Considerably vs significantly: considerably is quantity, significantly is importance",
        ],
        frequency: [
          "utterly - used 5+ times daily in expressive contexts",
          "absolutely - used 20+ times daily for agreement/emphasis",
          "entirely - used 8+ times daily in formal speech",
          "moderately - used 6+ times daily in measured statements",
          "considerably - used 10+ times daily in comparative contexts",
        ],
      },
    },
    C1: {
      examples: [
        "profoundly",
        "intensely",
        "marginally",
        "substantially",
        "remarkably",
      ],
      description:
        "Advanced use with non-gradable adjectives and abstract contexts.",
      detailedContent: {
        sophisticatedVocabulary: [
          "profoundly - deeply, with serious implications (profoundly affected, profoundly important)",
          "intensely - with great strength or concentration (intensely personal, intensely focused)",
          "marginally - by a small amount (marginally better, marginally significant)",
          "substantially - considerably, to a large degree (substantially different, substantially improved)",
          "remarkably - surprisingly, noticeably (remarkably similar, remarkably talented)",
        ],
        academicUsage: [
          "Research contexts: significantly, substantially, markedly, notably, considerably",
          "Analysis: fundamentally, essentially, primarily, predominantly, increasingly",
          "Evaluation: remarkably, exceptionally, particularly, especially, uniquely",
          "Comparison: comparatively, relatively, proportionally, correspondingly",
          "Emphasis: decidedly, distinctly, notably, markedly, unmistakably",
        ],
        subtleDistinctions: [
          "Marginally vs slightly: marginally suggests measurement, slightly suggests perception",
          "Substantially vs considerably: substantially implies importance, considerably implies amount",
          "Profoundly vs deeply: profoundly is intellectual/emotional, deeply is emotional/physical",
          "Remarkably vs notably: remarkably expresses surprise, notably draws attention",
          "Intensely vs extremely: intensely suggests focus/concentration, extremely suggests degree",
        ],
        rhetoricalEffects: [
          "Emphasis through gradation: good → very good → exceptionally good → remarkably good",
          "Hedging through mitigation: wrong → possibly wrong → arguably wrong → potentially problematic",
          "Precision through specificity: better → marginally better → substantially better → dramatically better",
          "Authority through formality: really important → very important → considerably important → profoundly significant",
        ],
        frequency: [
          "profoundly - used 3+ times daily in intellectual discourse",
          "intensely - used 4+ times daily in descriptive contexts",
          "marginally - used 5+ times daily in analytical speech",
          "substantially - used 8+ times daily in formal comparison",
          "remarkably - used 6+ times daily in evaluative statements",
        ],
      },
    },
    C2: {
      examples: [
        "infinitely",
        "inordinately",
        "immeasurably",
        "exponentially",
        "phenomenally",
      ],
      description:
        "Precise nuances in literary, academic, and rhetorical usage.",
      detailedContent: {
        masterLevel: [
          "infinitely - without limit (infinitely better, infinitely complex)",
          "inordinately - excessively, beyond normal limits (inordinately proud, inordinately difficult)",
          "immeasurably - to an extent that cannot be measured (immeasurably better, immeasurably important)",
          "exponentially - increasing rapidly (exponentially more difficult, exponentially greater)",
          "phenomenally - remarkably, extraordinarily (phenomenally successful, phenomenally fast)",
        ],
        literaryUsage: [
          "Poetic intensification: unutterably beautiful, ineffably moving, transcendently perfect",
          "Dramatic emphasis: overwhelmingly powerful, devastatingly effective, breathtakingly gorgeous",
          "Philosophical precision: fundamentally different, categorically wrong, axiomatically true",
          "Emotional depth: profoundly moving, deeply transformative, intensely personal",
          "Intellectual sophistication: conceptually challenging, theoretically sound, methodologically rigorous",
        ],
        preciseNuances: [
          "Exponentially vs dramatically: exponential implies mathematical progression, dramatic implies sudden change",
          "Phenomenally vs extraordinarily: phenomenal suggests observable wonder, extraordinary suggests rare quality",
          "Immeasurably vs infinitely: immeasurable suggests beyond measurement, infinite suggests without end",
          "Inordinately vs excessively: inordinate suggests improper degree, excessive suggests too much",
          "Unutterably vs indescribably: unutterable suggests speech limitation, indescribable suggests description limitation",
        ],
        professionalContext: [
          "Legal precision: categorically false, unequivocally clear, indisputably correct",
          "Medical accuracy: critically important, vitally necessary, fundamentally sound",
          "Academic rigor: methodologically sound, theoretically robust, empirically validated",
          "Business sophistication: strategically important, operationally efficient, commercially viable",
          "Technical expertise: architecturally sound, systematically organized, comprehensively tested",
        ],
        frequency: [
          "infinitely - used 1-2 times daily in specialized contexts",
          "inordinately - used 1-2 times daily in critical evaluation",
          "immeasurably - used 1-2 times daily in emphatic statements",
          "exponentially - used 2-3 times daily in analytical contexts",
          "phenomenally - used 2-3 times daily in evaluative discourse",
        ],
      },
    },
  },
  references: [
    "Cambridge English Grammar in Use - Raymond Murphy (Cambridge University Press, 2019) - Comprehensive coverage of degree adverbs across all levels",
    "Oxford Learner's Grammar - John Eastwood (Oxford University Press, 2020) - Detailed explanations with extensive examples",
    "Longman Student Grammar of Spoken and Written English - Douglas Biber et al. (Pearson, 2010) - Corpus-based analysis of degree adverb usage",
    "A Comprehensive Grammar of the English Language - Randolph Quirk et al. (Longman, 1985) - Authoritative reference for advanced usage",
    "English Grammar Today - Cambridge University Press (2011) - Modern usage patterns and contemporary examples",
    "The Grammar Book: Form, Meaning, and Use for English Language Teachers - Marianne Celce-Murcia & Diane Larsen-Freeman (Heinle, 2015)",
    "Practical English Usage - Michael Swan (Oxford University Press, 2016) - Clear explanations of problematic areas",
    "Collins COBUILD English Grammar - HarperCollins (2017) - Based on real language usage from Collins Corpus",
  ],
  extendedTypes: [
    {
      type: "Boosters (Booster Adverbs)",
      description:
        "Cường điệu hóa mức độ, thường đi với cảm xúc hoặc nhấn mạnh",
      examples: [
        "He was **so** angry.",
        "It's **really** beautiful.",
        "That was **totally** unfair.",
      ],
    },
    {
      type: "Compromisers",
      description:
        "Giảm bớt mức độ, làm cho câu nhẹ nhàng hơn hoặc mang tính lịch sự.",
      examples: [
        "It's **rather** difficult.",
        "He's **fairly** good at math.",
        "The soup is **quite** nice.",
      ],
    },
    {
      type: "Approximators",
      description: "Diễn đạt gần đúng hoặc gần như một điều gì đó.",
      examples: [
        "The room was **almost** full.",
        "She **nearly** cried.",
        "I **virtually** finished it.",
      ],
    },
    {
      type: "Emphatic Limitation",
      description: "Nhấn mạnh mức độ rất thấp hoặc không có.",
      examples: [
        "He **hardly** knew her.",
        "I **barely** slept last night.",
        "We **scarcely** saw them.",
      ],
    },
  ],
  degreeAdverbsWithComparatives: {
    description:
      "Một số trạng từ chỉ mức độ thường đi kèm với so sánh hơn để nhấn mạnh sự khác biệt.",
    patterns: [
      "much + comparative (much better)",
      "far + comparative (far worse)",
      "a little + comparative (a little faster)",
      "slightly + comparative (slightly taller)",
    ],
    examples: [
      "She is **much** more talented than her sister.",
      "This one is **slightly** bigger.",
      "He arrived **a little** later than expected.",
    ],
  },
  collocationIntensityMatrix: {
    description:
      "Bảng kết hợp cường độ phổ biến giữa degree adverbs và adjectives.",
    table: [
      {
        adjective: "important",
        weak: "quite important",
        strong: "very important",
        extreme: "absolutely essential",
      },
      {
        adjective: "tired",
        weak: "a bit tired",
        strong: "really tired",
        extreme: "completely exhausted",
      },
      {
        adjective: "hungry",
        weak: "slightly hungry",
        strong: "very hungry",
        extreme: "absolutely starving",
      },
      {
        adjective: "wrong",
        weak: "somewhat wrong",
        strong: "totally wrong",
        extreme: "completely absurd",
      },
    ],
  },
  advancedAdverbPhrases: {
    description:
      "Các cụm trạng từ chỉ mức độ phức tạp hơn dùng trong học thuật hoặc văn viết.",
    examples: [
      "to a large extent",
      "in no small measure",
      "by a great margin",
      "to an extraordinary degree",
    ],
    usage: [
      "This decision was influenced **to a large extent** by financial concerns.",
      "He was successful **by a great margin**.",
    ],
  },
  corpusBasedFrequency: {
    top5MostCommon: ["very", "too", "quite", "really", "just"],
    top5InFormalWriting: [
      "entirely",
      "largely",
      "significantly",
      "highly",
      "considerably",
    ],
    top5InSpokenEnglish: ["really", "so", "pretty", "totally", "kind of"],
  },
  pedagogicalActivities: [
    {
      activity: "Degree Adverb Ladder",
      description: "Học sinh sắp xếp các trạng từ theo cấp độ từ yếu đến mạnh.",
      example: ["a bit", "quite", "very", "extremely", "absolutely"],
    },
    {
      activity: "Matching Adverbs to Adjectives",
      description: "Nối trạng từ với tính từ phù hợp để tạo câu tự nhiên.",
      example: [
        "absolutely – essential",
        "fairly – good",
        "utterly – ridiculous",
      ],
    },
    {
      activity: "Rewrite with Varying Intensity",
      description:
        "Viết lại câu cùng ý nghĩa nhưng thay đổi trạng từ để điều chỉnh mức độ cảm xúc.",
      example: [
        "She is happy",
        "She is fairly happy",
        "She is extremely happy",
      ],
    },
  ],
  nuanceTips: [
    "'Quite' ở Anh-Anh thường mang nghĩa mạnh ('quite good' = very good), nhưng trong Anh-Mỹ thì ngược lại (mang tính nhẹ).",
    "'Really' có thể thay thế 'very' trong văn nói để tạo sự tự nhiên.",
    "'Too' thường có nghĩa tiêu cực (quá mức), nhưng cũng có thể dùng tích cực trong văn nói: 'That's too cool!'",
  ],
  culturalNotes: [
    {
      language: "British English",
      note: "'Quite' có thể mang nghĩa rất tích cực.",
      example: "'That was quite brilliant!' (nghĩa: rất tuyệt vời)",
    },
    {
      language: "American English",
      note: "'Quite' thường dùng với nghĩa trung tính hoặc yếu.",
      example: "'That was quite nice.' (nghĩa: bình thường)",
    },
  ],
  crossTopicIntegration: [
    "Degree adverbs appear in formal writing (academic tone).",
    "Can modify modal verbs: 'She might very well be right.'",
    "Used in conditionals: 'If it gets too cold, we'll leave.'",
    "Connect with attitude adverbs: 'Frankly, it's entirely your fault.'",
    "Integration with comparative structures: 'much more carefully', 'far less effectively'",
    "Coordination with temporal adverbs: 'always very punctual', 'never completely satisfied'",
    "Interaction with negative structures: 'not very interested', 'hardly ever available'",
    "Combination with question formation: 'How extremely difficult was it?'",
    "Role in reported speech: 'She said it was absolutely wonderful'",
    "Function in passive constructions: 'The project was thoroughly completed'",
  ],

  comprehensiveA1ToC2Guide: {
    progressionMap: {
      A1ToA2: {
        focus: [
          "Expand from 'very' and 'really' to include 'quite', 'fairly', 'pretty'",
          "Learn 'enough' constructions (old enough, big enough)",
          "Master 'too' for excessive degree (too hot, too expensive)",
          "Introduce basic comparison (not very vs quite)",
          "Practice common collocations (really good, very nice)",
        ],
        keyTransitions: [
          "From overusing 'very' to using varied intensifiers",
          "From simple statements to qualified opinions using 'quite', 'fairly'",
          "From basic descriptions to more nuanced expressions",
          "From single adverb use to understanding gradation",
          "From informal 'really' to more neutral 'quite' in appropriate contexts",
        ],
        commonErrors: [
          "Overusing 'very' instead of exploring alternatives",
          "Confusing 'too' (excessive) with 'very' (intensifying)",
          "Misplacing 'enough' (big enough vs enough big)",
          "Using informal adverbs in formal contexts",
          "Not understanding gradation differences",
        ],
      },
      A2ToB1: {
        focus: [
          "Introduce 'extremely', 'completely', 'absolutely' for stronger emphasis",
          "Learn 'hardly', 'barely', 'slightly' for minimal degree",
          "Understand gradable vs non-gradable adjective distinctions",
          "Master comparative constructions with degree adverbs",
          "Develop awareness of formal vs informal register",
        ],
        keyTransitions: [
          "From basic intensifiers to sophisticated degree expression",
          "From simple adjective modification to complex structures",
          "From intuitive usage to rule-based understanding",
          "From conversation-only use to written language application",
          "From single-word adverbs to adverbial phrases",
        ],
        commonErrors: [
          "Using 'very' with non-gradable adjectives (very perfect)",
          "Confusing 'absolutely' and 'completely' usage contexts",
          "Misunderstanding 'rather' as always positive",
          "Incorrect positioning with different verb types",
          "Mixing formal and informal registers inappropriately",
        ],
      },
      B1ToB2: {
        focus: [
          "Master sophisticated intensifiers: 'utterly', 'entirely', 'considerably'",
          "Develop nuanced understanding of register differences",
          "Learn complex structures: so...that, such...that, too...to",
          "Understand subtle semantic differences between similar adverbs",
          "Practice academic and professional usage patterns",
        ],
        keyTransitions: [
          "From basic communication to sophisticated expression",
          "From single-function usage to multi-contextual application",
          "From informal dominance to formal/informal balance",
          "From simple modification to complex structural integration",
          "From intuitive choice to strategic selection",
        ],
        commonErrors: [
          "Inappropriate register mixing in formal contexts",
          "Overusing colloquial intensifiers in academic writing",
          "Misunderstanding subtle differences between synonymous adverbs",
          "Incorrect complex structure formation",
          "Poor adverb choice for specific contexts",
        ],
      },
      B2ToC1: {
        focus: [
          "Master advanced vocabulary: 'profoundly', 'substantially', 'marginally'",
          "Develop expertise in academic and professional registers",
          "Understand rhetorical effects and strategic usage",
          "Learn specialized field-specific intensification patterns",
          "Master subtle distinctions in meaning and connotation",
        ],
        keyTransitions: [
          "From general usage to specialized application",
          "From communicative function to rhetorical strategy",
          "From standard patterns to creative and flexible usage",
          "From learner accuracy to native-like fluency",
          "From rule-following to principle-based generation",
        ],
        commonErrors: [
          "Overusing advanced vocabulary inappropriately",
          "Missing subtle connotative differences",
          "Inappropriate register for specific professional contexts",
          "Overcomplicating when simplicity is more effective",
          "Cultural insensitivity in intensity expression",
        ],
      },
      C1ToC2: {
        focus: [
          "Master literary and highly specialized intensifiers",
          "Develop intuitive feel for subtle stylistic effects",
          "Understand cultural and historical connotations",
          "Master creative and innovative usage patterns",
          "Achieve native-like precision in all contexts",
        ],
        keyTransitions: [
          "From learned patterns to intuitive creativity",
          "From standard usage to innovative expression",
          "From accuracy focus to stylistic sophistication",
          "From general competence to specialized expertise",
          "From rule-based knowledge to principled intuition",
        ],
        commonErrors: [
          "Overusing sophisticated vocabulary for show rather than effect",
          "Missing cultural or literary allusions in usage",
          "Inappropriate innovation that violates linguistic principles",
          "Lack of sensitivity to very subtle contextual requirements",
          "Insufficient appreciation of historical or regional variations",
        ],
      },
    },
  },

  etymologyAndLinguistics: {
    historicalDevelopment: [
      "Old English intensifiers developed from spatial and temporal concepts",
      "Germanic roots: 'very' from Old French 'verai' (true), originally meaning 'actual'",
      "Latin influences: 'absolutely' from Latin 'absolutus' (freed, complete)",
      "Greek contributions: 'extremely' from Latin 'extremus' (outermost)",
      "Grammaticalization process: content words → function words → intensifiers",
      "Semantic bleaching: loss of original meaning in favor of intensifying function",
      "Cyclic nature: constant renewal as intensifiers lose force over time",
    ],
    crossLinguisticComparison: [
      "German: 'sehr' (very), 'ziemlich' (quite), 'völlig' (completely)",
      "French: 'très' (very), 'assez' (quite), 'complètement' (completely)",
      "Spanish: 'muy' (very), 'bastante' (quite), 'completamente' (completely)",
      "Mandarin: '很' (hěn - very), '非常' (fēicháng - extremely), '完全' (wánquán - completely)",
      "Japanese: 'とても' (totemo - very), '非常に' (hijō ni - extremely), '完全に' (kanzen ni - completely)",
      "Arabic: 'جداً' (jiddan - very), 'تماماً' (tamāman - completely)",
      "Universal tendency toward intensification across languages",
    ],
    morphologicalPatterns: [
      "Suffix patterns: -ly formation (complete → completely, absolute → absolutely)",
      "Prefix patterns: intensifying prefixes (ultra-, super-, hyper-)",
      "Compound formations: degree + adjective combinations",
      "Phonological stress patterns affecting intensification perception",
      "Reduplication in informal intensification (really, really good)",
      "Clipping and blending processes in colloquial usage",
      "Borrowing patterns from prestige languages or specialized domains",
    ],
  },

  pragmaticsAndDiscourse: {
    conversationalStrategies: [
      "Hedging politeness: 'fairly good' vs 'excellent' to avoid overcommitment",
      "Face-saving: 'quite difficult' instead of 'impossible' to maintain options",
      "Emphasis management: strategic intensification for persuasive effect",
      "Turn-taking signals: intensifiers as conversation continuation markers",
      "Rapport building: shared intensity levels creating social bonding",
      "Disagreement mitigation: 'rather different' vs 'completely wrong'",
      "Compliment enhancement: appropriate intensification for social harmony",
    ],
    politenessMarkers: [
      "Understatement through downtoners: 'a bit disappointed' vs 'furious'",
      "Overstatement avoidance: choosing moderate intensifiers in formal contexts",
      "Cultural sensitivity: intensity levels varying across cultural groups",
      "Power distance marking: formal intensifiers in hierarchical relationships",
      "Solidarity building: informal intensifiers creating in-group membership",
      "Face-threatening act mitigation: softening criticism through careful degree marking",
      "Positive politeness: enthusiastic intensification showing engagement",
    ],
    emphasisTechniques: [
      "Phonological emphasis: stress patterns enhancing intensifier effect",
      "Syntactic emphasis: position variation for rhetorical impact",
      "Semantic layering: multiple intensifiers for cumulative effect (where appropriate)",
      "Contrastive emphasis: degree marking for comparison highlighting",
      "Emotional emphasis: intensifier choice reflecting speaker attitude",
      "Persuasive emphasis: strategic intensification in argumentation",
      "Narrative emphasis: degree marking for story climax and tension",
    ],
  },
};

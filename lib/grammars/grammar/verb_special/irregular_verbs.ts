import { IrregularVerbsType } from "@/types/grammars/grammar/verb_special/irregular_verbs";

export const IrregularVerbsData: IrregularVerbsType = {
  definition: {
    simple:
      "Irregular verbs are verbs that do not follow the regular -ed ending in the past tense and past participle forms.",
    detailed:
      "Irregular verbs form their past tense and past participle in unpredictable ways, deviating from the standard 'base + -ed' rule. These forms must be memorized as they often come from historical or phonetic developments in English. They represent approximately 3% of all English verbs but account for about 70% of verb usage in everyday speech.",
    historical_context:
      "Most irregular verbs in modern English are remnants of older inflectional systems from Old English and Germanic languages. They have retained their irregular forms due to frequency and fossilization. The strong verb system of Germanic languages used vowel changes (ablaut) to indicate tense, which explains patterns like sing-sang-sung.",
    linguistic_perspective:
      "From a linguistic standpoint, irregular verbs demonstrate morphophonemic alternation, where phonological changes accompany morphological processes. They exhibit various patterns including ablaut (vowel gradation), consonant changes, suppletion (complete stem change), and zero morphology.",
    etymology:
      "The irregularity stems from Proto-Germanic strong verbs that used internal vowel changes rather than suffixes. These verbs survived due to their high frequency of use, while less common verbs regularized over time through analogical leveling.",
  },
  vocab_irregular_verbs: [
    ["V1", "V2", "V3"],
    ["arise", "arose", "arisen"],
    ["awake", "awoke", "awoken"],
    ["be", "was/were", "been"],
    ["bear", "bore", "born/borne"],
    ["beat", "beat", "beaten"],
    ["become", "became", "become"],
    ["begin", "began", "begun"],
    ["bend", "bent", "bent"],
    ["bet", "bet", "bet"],
    ["bind", "bound", "bound"],
    ["bite", "bit", "bitten"],
    ["bleed", "bled", "bled"],
    ["blow", "blew", "blown"],
    ["break", "broke", "broken"],
    ["bring", "brought", "brought"],
    ["broadcast", "broadcast", "broadcast"],
    ["build", "built", "built"],
    ["burn", "burnt/burned", "burnt/burned"],
    ["burst", "burst", "burst"],
    ["buy", "bought", "bought"],
    ["catch", "caught", "caught"],
    ["choose", "chose", "chosen"],
    ["come", "came", "come"],
    ["cost", "cost", "cost"],
    ["creep", "crept", "crept"],
    ["cut", "cut", "cut"],
    ["deal", "dealt", "dealt"],
    ["dig", "dug", "dug"],
    ["do", "did", "done"],
    ["draw", "drew", "drawn"],
    ["dream", "dreamt/dreamed", "dreamt/dreamed"],
    ["drink", "drank", "drunk"],
    ["drive", "drove", "driven"],
    ["eat", "ate", "eaten"],
    ["fall", "fell", "fallen"],
    ["feed", "fed", "fed"],
    ["feel", "felt", "felt"],
    ["fight", "fought", "fought"],
    ["find", "found", "found"],
    ["fly", "flew", "flown"],
    ["forget", "forgot", "forgotten"],
    ["forgive", "forgave", "forgiven"],
    ["freeze", "froze", "frozen"],
    ["get", "got", "got/gotten"],
    ["give", "gave", "given"],
    ["go", "went", "gone"],
    ["grow", "grew", "grown"],
    ["hang", "hung", "hung"],
    ["have", "had", "had"],
    ["hear", "heard", "heard"],
    ["hide", "hid", "hidden"],
    ["hit", "hit", "hit"],
    ["hold", "held", "held"],
    ["hurt", "hurt", "hurt"],
    ["keep", "kept", "kept"],
    ["know", "knew", "known"],
    ["lay", "laid", "laid"],
    ["lead", "led", "led"],
    ["learn", "learnt/learned", "learnt/learned"],
    ["leave", "left", "left"],
    ["lend", "lent", "lent"],
    ["let", "let", "let"],
    ["lie (recline)", "lay", "lain"],
    ["light", "lit", "lit"],
    ["lose", "lost", "lost"],
    ["make", "made", "made"],
    ["mean", "meant", "meant"],
    ["meet", "met", "met"],
    ["pay", "paid", "paid"],
    ["put", "put", "put"],
    ["read", "read /rɛd/", "read /rɛd/"],
    ["ride", "rode", "ridden"],
    ["ring", "rang", "rung"],
    ["rise", "rose", "risen"],
    ["run", "ran", "run"],
    ["say", "said", "said"],
    ["see", "saw", "seen"],
    ["sell", "sold", "sold"],
    ["send", "sent", "sent"],
    ["set", "set", "set"],
    ["shake", "shook", "shaken"],
    ["shine", "shone", "shone"],
    ["shoot", "shot", "shot"],
    ["show", "showed", "shown"],
    ["shut", "shut", "shut"],
    ["sing", "sang", "sung"],
    ["sink", "sank", "sunk"],
    ["sit", "sat", "sat"],
    ["sleep", "slept", "slept"],
    ["speak", "spoke", "spoken"],
    ["spend", "spent", "spent"],
    ["spill", "spilt/spilled", "spilt/spilled"],
    ["spin", "spun", "spun"],
    ["spread", "spread", "spread"],
    ["stand", "stood", "stood"],
    ["steal", "stole", "stolen"],
    ["stick", "stuck", "stuck"],
    ["sting", "stung", "stung"],
    ["strike", "struck", "struck/stricken"],
    ["swear", "swore", "sworn"],
    ["sweep", "swept", "swept"],
    ["swim", "swam", "swum"],
    ["take", "took", "taken"],
    ["teach", "taught", "taught"],
    ["tear", "tore", "torn"],
    ["tell", "told", "told"],
    ["think", "thought", "thought"],
    ["throw", "threw", "thrown"],
    ["understand", "understood", "understood"],
    ["wake", "woke", "woken"],
    ["wear", "wore", "worn"],
    ["weep", "wept", "wept"],
    ["win", "won", "won"],
    ["write", "wrote", "written"],
  ],
  classification: {
    same_all_three: {
      description: "Base, past, and past participle forms are the same.",
      examples: ["put - put - put", "cut - cut - cut", "shut - shut - shut"],
      pattern_explanation:
        "These verbs show zero morphology, indicating that the base form serves all three functions. This pattern is relatively rare and often results from phonological constraints that prevented historical sound changes.",
    },
    same_past_and_pp: {
      description:
        "Past and past participle forms are the same but differ from base form.",
      examples: [
        "buy - bought - bought",
        "feel - felt - felt",
        "teach - taught - taught",
      ],
      pattern_explanation:
        "This is the most common irregular pattern, representing the historical weak verb paradigm with vowel changes. The identical past and past participle forms suggest analogical leveling between tenses.",
    },
    all_different: {
      description: "Base, past, and past participle forms are all different.",
      examples: [
        "go - went - gone",
        "see - saw - seen",
        "drink - drank - drunk",
      ],
      pattern_explanation:
        "These verbs preserve the ancient Germanic strong verb system with ablaut patterns. Each form represents a different vowel grade, maintaining morphological complexity from Proto-Germanic.",
    },
    vowel_change: {
      description: "Only the vowel in the verb changes.",
      examples: [
        "begin - began - begun",
        "sing - sang - sung",
        "swim - swam - swum",
      ],
      pattern_explanation:
        "This demonstrates ablaut, a systematic vowel alternation inherited from Indo-European. The vowel changes follow predictable patterns based on ancient vowel gradation rules.",
    },
    consonant_change: {
      description: "Minor or irregular consonant shifts in different forms.",
      examples: ["make - made - made", "say - said - said"],
      pattern_explanation:
        "These changes often result from historical phonological processes like voicing assimilation or consonant cluster simplification that occurred during Middle English.",
    },
    zero_change: {
      description: "No morphological change across all forms.",
      examples: ["hit - hit - hit", "let - let - let", "set - set - set"],
      pattern_explanation:
        "These verbs resist inflection due to phonological constraints or because they entered English relatively late, after the irregular verb system was established.",
    },
    suppletive: {
      description:
        "Complete stem replacement from different etymological sources.",
      examples: ["go - went - gone", "be - was/were - been"],
      pattern_explanation:
        "Suppletion occurs when different verb forms derive from entirely different roots, often due to historical merger of separate verbs that filled gaps in defective paradigms.",
    },
  },
  structure: {
    verb_forms: ["Base Form", "Simple Past", "Past Participle"],
    example: {
      base: "break",
      past: "broke",
      pastParticiple: "broken",
      sentence: "She has broken the vase.",
    },
    grammatical_functions: {
      simple_past:
        "Used to express completed actions in the past: 'I broke the window yesterday.'",
      present_perfect:
        "Used with auxiliary 'have/has' to show completed actions with present relevance: 'She has broken three cups this week.'",
      past_perfect:
        "Used with auxiliary 'had' to show actions completed before another past action: 'He had broken his promise before she found out.'",
      passive_voice:
        "Past participle used in passive constructions: 'The window was broken by the storm.'",
    },
  },
  usage: {
    everyday_communication: ["eat", "go", "come", "have", "do"],
    formal_academic: ["arise", "undertake", "behold", "withdraw"],
    literary: ["smite", "slay", "stride", "cleave", "forsake"],
    business: ["cost", "cut", "spend", "pay", "buy", "sell", "meet", "lead"],
    scientific: ["grow", "spread", "split", "bind", "freeze", "burn"],
    idiomatic_phrases: {
      description: "Many irregular verbs appear in idioms.",
      examples: ["come to terms", "go missing", "run short of"],
    },
    modal_association: {
      description: "Often used with modal verbs or perfect tenses.",
      examples: ["must have gone", "should have seen", "could have eaten"],
    },
    collocations: {
      description: "Common word partnerships with irregular verbs.",
      examples: [
        "make a decision",
        "take responsibility",
        "give advice",
        "break news",
        "catch attention",
      ],
    },
  },
  pronunciation: {
    notes: "Some irregular verbs have unique pronunciation shifts.",
    common_patterns: {
      vowel_shift: ["sing-sang-sung", "ring-rang-rung"],
      silent_letters: ["write-wrote-written", "know-knew-known"],
      stress_changes: ["'record - re'corded", "'conduct - con'ducted"],
      phonetic_changes: [
        "live /lɪv/ - lived /lɪvd/",
        "use /juːz/ - used /juːzd/",
      ],
    },
    ipa_examples: [
      {
        verb: "read",
        base_ipa: "/riːd/",
        past_ipa: "/red/",
        past_participle_ipa: "/red/",
      },
      {
        verb: "lead",
        base_ipa: "/liːd/",
        past_ipa: "/led/",
        past_participle_ipa: "/led/",
      },
      {
        verb: "wind",
        base_ipa: "/waɪnd/",
        past_ipa: "/waʊnd/",
        past_participle_ipa: "/waʊnd/",
      },
    ],
  },
  spelling_notes: {
    double_consonant: ["run - ran - run"],
    vowel_insertion: ["begin - began - begun"],
    no_change: ["cost - cost - cost"],
    complete_change: ["go - went - gone", "be - was/were - been"],
    y_to_i: ["fly - flew - flown", "cry - cried - cried"],
  },
  common_errors: {
    regularization: {
      description: "Using -ed with irregular verbs.",
      examples: ["goed", "went", "eated", "ate"],
      correction_strategy:
        "Create pattern recognition through grouping similar irregular verbs and use visual memory aids with color coding.",
    },
    confusion: {
      description: "Mixing past and past participle.",
      examples: ["He has went", "He has gone"],
      correction_strategy:
        "Practice auxiliary verb combinations systematically and emphasize perfect tense structures in context.",
    },
    wrong_tense: {
      description: "Using base form in past tense accidentally.",
      examples: ["Yesterday I go to school", "I went to school"],
      correction_strategy:
        "Focus on time expressions and temporal context through timeline activities and narrative practice.",
    },
    overgeneralization: {
      description: "Applying irregular patterns to regular verbs.",
      examples: ["I thinked", "I thought", "I brang", "I brought"],
      correction_strategy:
        "Explicitly contrast regular and irregular verbs, creating clear categorical distinctions through comparative exercises.",
    },
  },
  learning_tips: {
    visual_grouping:
      "Group irregular verbs by pattern (e.g., drink-sang-sung group).",
    rhymes_and_songs: "Use rhythmic patterns or songs to memorize tricky sets.",
    flashcards: "Use three-part flashcards: base, past, past participle.",
    spaced_repetition:
      "Utilize spaced repetition tools for long-term memorization.",
    daily_use: "Incorporate them into speaking and writing daily.",
    mnemonics:
      "Create memorable associations like 'I broke my broken bicycle' or 'The mouse ran and ran until it was run over'.",
    contextual_learning:
      "Learn verbs within meaningful sentences and stories rather than isolated lists.",
    error_correction:
      "Analyze and categorize your mistakes to identify patterns and focus practice on problem areas.",
  },
  advanced_usage: {
    literary: {
      description:
        "Irregular verbs are often used in poetry for meter or archaic tone.",
      examples: ["He smote his enemy", "She bid him farewell"],
      authors_reference: [
        "Shakespeare",
        "Milton",
        "Chaucer",
        "Wordsworth",
        "Tennyson",
      ],
    },
    subjunctive_and_conditionals: {
      description:
        "Irregular verbs in hypothetical and conditional structures.",
      examples: ["If I were you, I'd go", "Had he known, he would have acted"],
    },
    inversions: {
      description: "Irregular verbs used in inverted structures for emphasis.",
      examples: ["Never had she seen such beauty", "Rarely has he gone abroad"],
    },
    formal_registers: {
      description:
        "Academic and formal contexts requiring precise irregular verb usage.",
      examples: [
        "The study arose from previous research",
        "Data were drawn from multiple sources",
      ],
    },
    archaic_forms: {
      description:
        "Historical forms still found in literature and legal documents.",
      examples: ["Thou hast", "He hath", "It behooves"],
    },
  },
  academic_relevance: {
    exams: ["IELTS", "TOEFL", "Cambridge Exams"],
    grammar_books: [
      "English Grammar in Use - Murphy",
      "Practical English Usage - Swan",
      "Oxford English Grammar Course",
    ],
    test_formats: [
      "Multiple choice",
      "Gap-fill",
      "Transformation",
      "Error correction",
      "Cloze passage",
    ],
    scoring_criteria: [
      "Accuracy",
      "Appropriateness",
      "Range",
      "Consistency",
      "Fluency in usage",
    ],
  },
  language_levels: {
    A1: {
      focus: "Basic common verbs with high frequency",
      verbs: ["go", "come", "have", "be", "do", "get"],
      learning_objectives: [
        "Recognize basic irregular forms in past tense",
        "Use most common irregular verbs in simple sentences",
        "Distinguish between regular and irregular verbs",
      ],
      key_functions: [
        "Express basic past actions",
        "Describe personal experiences",
        "Ask simple questions about past events",
      ],
      assessment_criteria: [
        "Accuracy in most frequent 10 verbs",
        "Recognition in listening tasks",
        "Basic production in speaking tasks",
      ],
    },
    A2: {
      focus: "Daily verbs and their past forms",
      verbs: ["make", "eat", "drink", "read", "write"],
      learning_objectives: [
        "Master past forms of 20-30 common irregular verbs",
        "Use irregular verbs in simple narratives",
        "Understand irregular verbs in present perfect introductory level",
      ],
      key_functions: [
        "Tell simple stories about past experiences",
        "Describe daily routines in the past",
        "Express completed actions",
      ],
      assessment_criteria: [
        "Correct usage of top 30 irregular verbs",
        "Comprehension of simple past narratives",
        "Basic accuracy in written descriptions",
      ],
    },
    B1: {
      focus: "Expanding range for storytelling and experience",
      verbs: ["ride", "drive", "buy", "choose", "give"],
      learning_objectives: [
        "Use 50+ irregular verbs accurately",
        "Apply irregular verbs in perfect tenses",
        "Recognize patterns in irregular verb formation",
      ],
      key_functions: [
        "Narrate complex past experiences",
        "Express cause and effect relationships",
        "Discuss hypothetical situations",
      ],
      assessment_criteria: [
        "Consistent accuracy in extended speaking",
        "Correct usage in various tense combinations",
        "Error self-correction ability",
      ],
    },
    B2: {
      focus: "Narration, reporting, expressing conditions",
      verbs: ["begin", "forget", "lend", "throw", "wear"],
      learning_objectives: [
        "Master irregular verbs in complex structures",
        "Use irregular verbs in passive voice",
        "Apply irregular verbs in reported speech",
      ],
      key_functions: [
        "Report what others have said",
        "Express complex temporal relationships",
        "Use irregular verbs in formal contexts",
      ],
      assessment_criteria: [
        "Accuracy in formal and informal registers",
        "Sophisticated narrative construction",
        "Minimal hesitation in spontaneous speech",
      ],
    },
    C1: {
      focus: "Literary verbs, academic use, idioms",
      verbs: ["undertake", "withhold", "forsake", "behold"],
      learning_objectives: [
        "Use rare and literary irregular verbs",
        "Master irregular verbs in academic writing",
        "Understand idiomatic expressions with irregular verbs",
      ],
      key_functions: [
        "Produce academic and professional texts",
        "Understand literary works",
        "Use sophisticated vocabulary in discussions",
      ],
      assessment_criteria: [
        "Near-native accuracy across all contexts",
        "Stylistic appropriateness",
        "Nuanced meaning expression",
      ],
    },
    C2: {
      focus: "Rare, poetic, and stylized uses",
      verbs: ["slay", "smite", "cleave", "stride"],
      learning_objectives: [
        "Master archaic and literary forms",
        "Understand historical texts",
        "Use irregular verbs for stylistic effect",
      ],
      key_functions: [
        "Analyze and discuss literature",
        "Appreciate historical linguistic forms",
        "Create sophisticated written works",
      ],
      assessment_criteria: [
        "Complete mastery equivalent to native speakers",
        "Stylistic creativity",
        "Historical and literary awareness",
      ],
    },
  },
  verbs_by_frequency: {
    top_20: [
      "be",
      "have",
      "do",
      "say",
      "make",
      "go",
      "take",
      "come",
      "see",
      "know",
      "get",
      "give",
      "find",
      "think",
      "tell",
      "become",
      "show",
      "leave",
      "feel",
      "put",
    ],
    top_50: [
      "bring",
      "build",
      "buy",
      "catch",
      "choose",
      "cut",
      "draw",
      "drive",
      "eat",
      "fall",
      "fly",
      "forget",
      "grow",
      "hear",
      "hold",
      "keep",
      "lead",
      "learn",
      "lose",
      "mean",
      "meet",
      "pay",
      "read",
      "run",
      "sell",
      "send",
      "sit",
      "speak",
      "spend",
      "stand",
    ],
    academic_frequency: [
      "arise",
      "bear",
      "bind",
      "break",
      "build",
      "draw",
      "grow",
      "hold",
      "lead",
      "lie",
      "prove",
      "rise",
      "seek",
      "show",
      "speak",
      "strike",
      "tear",
      "throw",
      "understand",
      "write",
    ],
    spoken_frequency: [
      "be",
      "have",
      "do",
      "go",
      "say",
      "get",
      "make",
      "know",
      "take",
      "see",
      "come",
      "think",
      "look",
      "want",
      "give",
      "use",
      "find",
      "tell",
      "ask",
      "work",
    ],
    written_frequency: [
      "be",
      "have",
      "do",
      "say",
      "make",
      "get",
      "go",
      "know",
      "take",
      "see",
      "come",
      "think",
      "look",
      "want",
      "give",
      "use",
      "find",
      "tell",
      "ask",
      "work",
    ],
  },
  cultural_and_regional_variants: {
    British_vs_American: {
      examples: [
        {
          UK: "learnt",
          US: "learned",
          context: "Past tense and past participle of 'learn'",
        },
        {
          UK: "dreamt",
          US: "dreamed",
          context: "Past tense and past participle of 'dream'",
        },
        {
          UK: "spoilt",
          US: "spoiled",
          context: "Past tense and past participle of 'spoil'",
        },
      ],
    },
    archaic_forms: {
      description: "Some irregular verbs are obsolete but used in literature.",
      examples: ["quoth", "slain", "wrought", "gat"],
    },
    dialectal_variations: {
      description: "Regional variations in irregular verb usage.",
      examples: [
        "holp (archaic help)",
        "digged (dialectal dug)",
        "catched (non-standard caught)",
      ],
    },
  },
  teaching_strategies: {
    color_coding: "Use color highlights to indicate form changes.",
    games: ["Memory match", "Verb Bingo", "Verb Transformation Relay"],
    context_practice:
      "Insert irregular verbs into realistic sentences and dialogues.",
    translation_comparison:
      "Compare how irregularity is expressed in the learner's L1.",
    error_analysis:
      "Systematically analyze student errors to identify patterns and provide targeted feedback.",
    peer_correction:
      "Encourage students to correct each other's irregular verb mistakes in collaborative activities.",
    technology_integration: [
      "Anki flashcards",
      "Quizlet",
      "Irregular verb apps",
      "Online conjugation tools",
      "Voice recognition software",
    ],
  },
  references: {
    dictionaries: [
      "Oxford Learner's Dictionary",
      "Cambridge Dictionary",
      "Merriam-Webster",
    ],
    grammar_sources: [
      "Longman Student Grammar of Spoken and Written English",
      "COBUILD English Grammar",
      "Swan's Practical English Usage",
    ],
    corpora: ["COCA", "BNC", "Cambridge English Corpus"],
    research_papers: [
      "Bybee, J. (1995). Regular morphology and the lexicon. Language and Cognitive Processes",
      "Pinker, S. (1999). Words and Rules: The Ingredients of Language",
      "Ullman, M. T. (2001). The neural basis of lexicon and grammar in first and second language",
      "Clahsen, H. (1999). Lexical entries and rules of language: A multidisciplinary study of German inflection",
      "Marcus, G. F. (1995). Children's overregularization of English plurals: A quantitative analysis",
    ],
    online_resources: [
      "https://www.englishclub.com/grammar/verbs-irregular.htm",
      "https://www.grammarly.com/blog/irregular-verbs/",
      "https://www.perfect-english-grammar.com/irregular-verbs.html",
      "https://www.ef.com/wwen/english-resources/english-grammar/irregular-verbs/",
      "https://learnenglish.britishcouncil.org/grammar/intermediate-to-upper-intermediate/irregular-verbs",
    ],
  },
  related_grammar_topics: [
    "Tenses",
    "Perfect aspect",
    "Passive voice",
    "Modal verbs",
    "Conditionals",
    "Subject-verb agreement",
  ],
  morphological_analysis: {
    ablaut: {
      description:
        "Vowel gradation patterns inherited from Germanic strong verbs.",
      examples: ["sing-sang-sung", "ring-rang-rung", "drink-drank-drunk"],
    },
    suppletion: {
      description:
        "Complete replacement of verb stems from different etymological sources.",
      examples: ["go-went-gone", "be-was/were-been", "good-better-best"],
    },
    consonant_gradation: {
      description: "Consonant alternations that accompany tense marking.",
      examples: ["make-made", "have-had", "lose-lost"],
    },
  },
  cognitive_aspects: {
    memory_strategies: [
      "Chunking by pattern",
      "Visual imagery",
      "Associative networks",
      "Phonological rehearsal",
    ],
    processing_difficulties: [
      "Form-meaning mapping",
      "Retrieval competition",
      "Interference from L1",
      "Working memory load",
    ],
    acquisition_order: [
      "High frequency first",
      "Regular patterns before exceptions",
      "Receptive before productive",
      "Simple before complex forms",
    ],
    transfer_effects: [
      "Positive transfer from L1 patterns",
      "Negative interference",
      "Overgeneralization",
      "Avoidance strategies",
    ],
  },
  notes: {
    importance:
      "Mastery of irregular verbs is critical for fluency in English.",
    fun_fact:
      "Only around 200 verbs in English are irregular, but they are among the most commonly used verbs.",
    statistical_data:
      "Irregular verbs account for approximately 70% of all verb usage in spoken English despite representing only 3% of total English verbs.",
    future_trends:
      "Many irregular verbs are becoming regular over time through analogical change, though the most frequent ones remain stable.",
  },
};

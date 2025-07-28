import { ReportingVerbsType } from "@/types/grammars/grammar/verb_special/reporting_verbs";

export const ReportingVerbsData: ReportingVerbsType = {
  definition: {
    general:
      "Reporting verbs are used to report what someone said, thought, or felt. They replace or support the verb 'say' in reported speech and enable speakers to convey information with varying degrees of certainty, formality, and attitude.",
    grammatical_function:
      "Reporting verbs introduce reported speech and determine whether the following clause requires infinitives, gerunds, or noun clauses. They control the syntactic structure of complement clauses and affect tense sequencing.",
    academic_use:
      "In academic writing, reporting verbs are crucial for presenting ideas, citing sources, maintaining objectivity, and establishing the writer's stance toward reported information. They enable nuanced attribution and critical analysis.",
    linguistic_features:
      "Reporting verbs exhibit complex subcategorization frames, selecting for different complement types (finite clauses, infinitival clauses, gerundival clauses) and showing semantic restrictions on their subjects and objects.",
    pragmatic_function:
      "These verbs serve to encode speaker attitudes, degrees of certainty, source reliability, and interpersonal relationships. They function as evidentiality markers and stance indicators in discourse.",
  },

  core_categories: {
    speech: ["say", "tell", "ask", "explain", "mention", "repeat", "inform"],
    mental_state: ["think", "believe", "suppose", "assume", "doubt", "expect"],
    suggestion: ["suggest", "recommend", "advise", "propose", "urge"],
    command: ["order", "command", "tell", "instruct", "warn", "forbid"],
    agreement: ["agree", "promise", "offer", "refuse", "consent"],
    accusation: ["accuse", "blame", "deny", "admit", "confess"],
    encouragement: ["encourage", "persuade", "convince", "motivate"],
    emotional: ["complain", "apologize", "regret", "congratulate", "thank"],
    opinion: ["claim", "argue", "maintain", "assert", "contend", "hold"],
    perception: ["notice", "observe", "see", "hear", "feel", "sense"],
    communication: ["communicate", "convey", "express", "articulate", "voice"],
  },

  reporting_verbs_vocab: {
    basic_reporting: [
      "say",
      "tell",
      "ask",
      "reply",
      "answer",
      "add",
      "mention",
      "state",
    ],

    indirect_speech_verbs: [
      "explain",
      "report",
      "suggest",
      "advise",
      "warn",
      "recommend",
      "claim",
      "complain",
      "admit",
      "deny",
    ],

    academic_reporting: [
      "argue",
      "assert",
      "contend",
      "propose",
      "point out",
      "highlight",
      "emphasize",
      "note",
      "observe",
      "indicate",
      "mention",
      "outline",
    ],

    persuasive_reporting: [
      "urge",
      "encourage",
      "persuade",
      "insist",
      "remind",
      "recommend",
      "advocate",
      "motivate",
      "promote",
    ],

    journalistic_reporting: [
      "report",
      "announce",
      "reveal",
      "disclose",
      "declare",
      "confirm",
      "inform",
      "reiterate",
      "claim",
    ],

    legal_and_official: [
      "allege",
      "testify",
      "assert",
      "swear",
      "depose",
      "declare",
      "affirm",
      "confess",
      "plead",
      "admit",
    ],

    emotional_reporting: [
      "complain",
      "lament",
      "boast",
      "brag",
      "apologize",
      "sympathize",
      "rejoice",
      "mourn",
    ],

    negative_or_conflict: [
      "accuse",
      "blame",
      "criticize",
      "condemn",
      "deny",
      "refuse",
      "reject",
      "dispute",
      "contradict",
    ],

    structure_patterns: {
      "verb + that + clause": [
        "say",
        "argue",
        "state",
        "claim",
        "report",
        "explain",
        "declare",
        "mention",
        "note",
      ],
      "verb + to + infinitive": [
        "agree",
        "refuse",
        "offer",
        "promise",
        "threaten",
        "decide",
        "claim",
        "fail",
        "pretend",
      ],
      "verb + object + to + infinitive": [
        "tell",
        "advise",
        "ask",
        "warn",
        "invite",
        "remind",
        "encourage",
        "persuade",
        "forbid",
      ],
      "verb + gerund (-ing)": [
        "admit",
        "deny",
        "recommend",
        "suggest",
        "consider",
        "mention",
        "report",
        "imagine",
        "recall",
      ],
      "verb + object + preposition + -ing": [
        "accuse (of)",
        "blame (for)",
        "congratulate (on)",
        "warn (against)",
        "thank (for)",
      ],
      "verb + wh-clause": [
        "explain",
        "describe",
        "ask",
        "wonder",
        "know",
        "determine",
        "discover",
        "reveal",
      ],
      "verb + if/whether + clause": [
        "ask",
        "wonder",
        "doubt",
        "question",
        "inquire",
        "investigate",
        "check",
        "confirm",
      ],
    },
  },

  structures: {
    "verb + that clause": {
      verbs: [
        "say",
        "think",
        "believe",
        "admit",
        "agree",
        "mention",
        "promise",
      ],
      example: "She admitted that she was wrong.",
      notes: "The most common structure for reporting statements",
      common_mistakes: [
        "Omitting 'that' in formal writing",
        "Wrong tense sequence",
      ],
    },
    "verb + to-infinitive": {
      verbs: ["promise", "agree", "refuse", "offer", "threaten"],
      example: "He promised to call me back.",
      notes: "Used for reporting commitments and decisions",
      common_mistakes: ["Using gerund instead of infinitive"],
    },
    "verb + object + to-infinitive": {
      verbs: ["tell", "advise", "remind", "warn", "instruct"],
      example: "They advised him to take a break.",
      notes: "Requires an object before the infinitive",
      common_mistakes: ["Omitting the object", "Wrong infinitive form"],
    },
    "verb + gerund": {
      verbs: ["admit", "deny", "recommend", "suggest"],
      example: "She denied breaking the vase.",
      notes: "Common with verbs of admission and suggestion",
      common_mistakes: ["Using infinitive instead of gerund"],
    },
    "verb + object + preposition + gerund": {
      verbs: ["accuse", "blame", "congratulate", "thank", "criticize"],
      example: "They accused him of stealing.",
      notes: "Specific prepositions required for each verb",
      common_mistakes: ["Wrong preposition choice", "Using infinitive"],
    },
    "verb + wh-clause": {
      verbs: ["explain", "describe", "ask", "wonder", "know"],
      example: "She explained what had happened.",
      notes: "Used for reporting questions and explanations",
      common_mistakes: ["Wrong word order in embedded clause"],
    },
  },

  formality_levels: {
    informal: ["say", "tell", "ask", "think"],
    neutral: ["mention", "suggest", "admit", "deny"],
    formal: ["claim", "state", "assert", "recommend", "propose", "allege"],
    academic: [
      "argue",
      "contend",
      "maintain",
      "posit",
      "hypothesize",
      "postulate",
    ],
    legal: ["allege", "testify", "depose", "swear", "affirm", "attest"],
  },

  usage_by_level: {
    A1: {
      verbs: ["say", "tell", "ask"],
      example: "He said he was tired.",
      focus: "Basic indirect speech and commands",
      key_concepts: [
        "Simple reported speech",
        "Basic verb patterns",
        "Present to past tense changes",
      ],
      grammar_patterns: ["verb + that clause", "verb + to infinitive"],
      vocabulary_size: 10,
      learning_objectives: [
        "Use 'say', 'tell', and 'ask' in reported speech",
        "Understand basic tense changes in reported speech",
        "Form simple indirect questions",
      ],
    },
    A2: {
      verbs: ["promise", "advise", "refuse"],
      example: "She promised to help.",
      focus: "Simple reporting with modals and infinitives",
      key_concepts: [
        "Modal verbs in reported speech",
        "Infinitive patterns",
        "Time expressions",
      ],
      grammar_patterns: [
        "verb + to infinitive",
        "verb + object + to infinitive",
      ],
      vocabulary_size: 20,
      learning_objectives: [
        "Use reporting verbs with infinitives",
        "Report promises and advice",
        "Handle time and place changes in reported speech",
      ],
    },
    B1: {
      verbs: ["recommend", "suggest", "warn", "admit", "agree"],
      example: "He warned me not to go there.",
      focus: "Modal verbs and verb patterns",
      key_concepts: [
        "Gerund patterns",
        "Negative infinitives",
        "Complex sentence structures",
      ],
      grammar_patterns: ["verb + gerund", "verb + object + not to infinitive"],
      vocabulary_size: 40,
      learning_objectives: [
        "Use reporting verbs with gerunds",
        "Report suggestions and warnings",
        "Form complex reported speech structures",
      ],
    },
    B2: {
      verbs: ["encourage", "persuade", "accuse", "complain"],
      example: "They accused her of cheating.",
      focus: "Reported speech with emotion or influence",
      key_concepts: [
        "Prepositional patterns",
        "Emotional reporting",
        "Persuasive language",
      ],
      grammar_patterns: [
        "verb + object + preposition + gerund",
        "verb + wh-clause",
      ],
      vocabulary_size: 60,
      learning_objectives: [
        "Use reporting verbs with prepositions",
        "Report emotional statements",
        "Express persuasion and influence",
      ],
    },
    C1: {
      verbs: ["allege", "assert", "propose", "argue"],
      example: "He asserted that the data was incorrect.",
      focus: "Academic tone and precision",
      key_concepts: [
        "Academic discourse",
        "Critical analysis",
        "Formal register",
      ],
      grammar_patterns: ["subjunctive patterns", "complex clause structures"],
      vocabulary_size: 80,
      learning_objectives: [
        "Use formal academic reporting verbs",
        "Express varying degrees of certainty",
        "Maintain academic objectivity",
      ],
    },
    C2: {
      verbs: ["contend", "maintain", "hypothesize", "emphasize"],
      example: "The author contends that the results are inconclusive.",
      focus:
        "Sophisticated reporting in academic, legal, or analytical contexts",
      key_concepts: [
        "Nuanced stance-taking",
        "Epistemic modality",
        "Discourse markers",
      ],
      grammar_patterns: ["complex embedding", "evidentiality markers"],
      vocabulary_size: 100,
      learning_objectives: [
        "Master sophisticated reporting verbs",
        "Express complex academic arguments",
        "Use reporting verbs for critical discourse analysis",
      ],
    },
  },

  transformation_rules: {
    tense_backshift:
      "In indirect speech, present tenses often shift back (e.g., 'is' → 'was') unless reporting something still true.",
    pronoun_shift:
      "Pronouns must be changed based on the speaker and listener context.",
    time_place_shift:
      "Time/place expressions like 'now' → 'then', 'here' → 'there'.",
    reporting_verb_selection:
      "The verb choice determines whether you use infinitives, gerunds, or clauses.",
    modal_changes:
      "Modal verbs change in reported speech: 'can' → 'could', 'will' → 'would', 'may' → 'might'.",
    conditionals_in_reported_speech:
      "Conditional structures undergo specific changes: 'If I were you' → 'He said if he were me'.",
    questions_to_statements:
      "Questions become statements with changed word order: 'Where are you?' → 'He asked where I was'.",
  },

  academic_reporting_verbs: {
    neutral: ["state", "report", "describe", "note"],
    strong_agreement: ["confirm", "validate", "support", "endorse"],
    cautious_agreement: ["suggest", "propose", "indicate", "imply"],
    disagreement: ["challenge", "dispute", "reject", "criticize"],
    neutrality_hedging: ["appear", "seem", "tend", "may suggest"],
    critical_analysis: ["critique", "analyze", "evaluate", "assess"],
    presentation_verbs: ["present", "demonstrate", "illustrate", "show"],
  },

  collocations_and_phrases: {
    with_adverbs: [
      "strongly recommend",
      "firmly believe",
      "clearly state",
      "openly admit",
      "strongly deny",
    ],
    fixed_expressions: [
      "It is reported that...",
      "According to the author...",
      "The study claims that...",
      "Experts argue that...",
      "The writer asserts that...",
    ],
    prepositional_phrases: [
      "in accordance with",
      "with regard to",
      "in reference to",
      "according to",
      "in relation to",
    ],
    academic_phrases: [
      "The research demonstrates that...",
      "Studies have shown that...",
      "Evidence suggests that...",
      "The findings indicate that...",
      "Research confirms that...",
    ],
  },

  common_errors: {
    missing_infinitives:
      "Incorrect: He told me go home. → Correct: He told me **to** go home.",
    wrong_structure:
      "Incorrect: She suggested to take a break. → Correct: She suggested **taking** a break.",
    tense_inconsistency:
      "Incorrect: He said he is tired. → Correct: He said he **was** tired.",
    confusion_of_verb_choice:
      "Incorrect: He promised me go. → Correct: He promised **to go**.",
    wrong_preposition:
      "Incorrect: She accused him for lying. → Correct: She accused him **of** lying.",
    object_omission:
      "Incorrect: She told to come. → Correct: She told **him** to come.",
  },

  comparison_chart: {
    say: {
      object_required: false,
      structure: "say (that) + clause",
      example: "She said that she was tired.",
      formality: "neutral",
      frequency: "very high",
    },
    tell: {
      object_required: true,
      structure: "tell + object + (that) + clause",
      example: "She told me that she was tired.",
      formality: "neutral",
      frequency: "very high",
    },
    suggest: {
      object_required: false,
      structure: "suggest + gerund / (that) + clause",
      example: "She suggested going out.",
      formality: "neutral",
      frequency: "high",
    },
    advise: {
      object_required: true,
      structure: "advise + object + to-infinitive",
      example: "She advised him to study.",
      formality: "formal",
      frequency: "medium",
    },
  },

  advanced_usage_examples: {
    academic:
      "Smith (2020) argues that globalization impacts local economies differently.",
    legal: "The witness alleged that the suspect fled the scene.",
    journalistic: "Officials claim that no evidence has been found.",
    scientific: "The research suggests that early exposure improves retention.",
    literary: "She whispered that the night held secrets beyond imagination.",
    business: "The CEO announced that quarterly profits exceeded expectations.",
  },

  learning_tips: {
    "Group verbs by structure":
      "e.g., group all 'verb + to-infinitive' types for easier memorization.",
    "Use reporting verbs in summaries":
      "Practice using them when summarizing news, stories, or research.",
    "Pay attention to nuance":
      "'Say' is neutral; 'claim' can imply doubt; 'assert' shows confidence.",
    "Practice transformations":
      "Convert direct speech to reported speech using varied verbs.",
    "Study academic texts":
      "Analyze how authors use reporting verbs to present arguments.",
    "Create semantic maps":
      "Group verbs by meaning and formality level for better retention.",
  },

  references: {
    CEFR: ["B1-C2 for advanced verbs; A1-A2 for basic verbs"],
    grammar_books: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: 2019,
        isbn: "978-1316631171",
        relevant_chapters: [
          "Unit 47: Reported Speech",
          "Unit 48: Questions and Auxiliary Verbs",
        ],
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2013,
        isbn: "978-1107539303",
        relevant_chapters: [
          "Unit 26: Reporting",
          "Unit 27: Reporting people's words and thoughts",
        ],
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: 1985,
        isbn: "978-0582517349",
        relevant_chapters: [
          "Chapter 14: The complex sentence",
          "Chapter 15: Coordination and subordination",
        ],
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston, Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        isbn: "978-0521431460",
        relevant_chapters: ["Chapter 11: Content clauses and reported speech"],
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: 2016,
        isbn: "978-0194202411",
        relevant_chapters: ["Section 464-474: Reported Speech"],
      },
    ],
    dictionaries: [
      {
        name: "Oxford Learner's Dictionary",
        url: "https://www.oxfordlearnersdictionaries.com/",
        description:
          "Comprehensive coverage of reporting verbs with patterns and examples",
      },
      {
        name: "Cambridge Academic Content Dictionary",
        url: "https://dictionary.cambridge.org/",
        description:
          "Academic vocabulary with detailed usage patterns for reporting verbs",
      },
      {
        name: "Macmillan Dictionary",
        url: "https://www.macmillandictionary.com/",
        description:
          "Clear explanations with frequency information and collocations",
      },
    ],
    academic_sources: [
      {
        title: "Reporting verbs in academic writing: A corpus-based study",
        author: "Hyland, K.",
        journal: "Journal of English for Academic Purposes",
        year: 1999,
        doi: "10.1016/S1475-1585(99)00007-X",
      },
      {
        title:
          "Stance and engagement: A model of interaction in academic discourse",
        author: "Hyland, K.",
        journal: "Discourse Studies",
        year: 2005,
        doi: "10.1177/1461445605054407",
      },
    ],
    online_resources: [
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org/",
        description:
          "Interactive exercises and explanations for reporting verbs",
      },
      {
        name: "Purdue OWL Writing Lab",
        url: "https://owl.purdue.edu/",
        description: "Academic writing resources with reporting verb usage",
      },
    ],
  },

  advanced_semantics: {
    modal_implications: {
      description:
        "Some reporting verbs carry modal nuances about truth, possibility, or speaker attitude toward the reported content.",
      examples: {
        claim: "Implies information that may not be verified.",
        assert: "Expresses speaker's strong confidence.",
        allege: "Implies doubt or lack of evidence.",
      },
    },
    interpersonal_attitudes: {
      description:
        "Some verbs express the speaker's attitude toward the information or the original speaker.",
      examples: {
        suggest: "Expresses politeness, gentle recommendation.",
        insist: "Carries forceful, personal emphasis.",
        recommend: "Expresses goodwill, guidance.",
      },
    },
    evidentiality: {
      description:
        "The ability to express the source of information for the speaker.",
      examples: {
        report:
          "Information comes from other sources (often journalistic, objective).",
        observe: "Information comes from the speaker's own observation.",
        point_out: "Emphasizes something that was noticed.",
      },
    },
    discourse_functions: {
      description:
        "Reporting verbs serve various discourse functions beyond simple information transfer.",
      examples: {
        summarize: "Condenses complex information into key points.",
        elaborate: "Expands on previously mentioned ideas.",
        contrast:
          "Introduces opposing viewpoints or contradictory information.",
        emphasize:
          "Highlights the importance or significance of reported content.",
      },
    },
  },

  semantic_grouping: {
    doubt_and_certainty: [
      "believe",
      "doubt",
      "assume",
      "guess",
      "suspect",
      "presume",
      "know",
    ],
    emotional_response: [
      "regret",
      "apologize",
      "thank",
      "complain",
      "congratulate",
    ],
    cognitive_processes: [
      "realize",
      "understand",
      "imagine",
      "remember",
      "forget",
    ],
    confrontation_and_defense: [
      "deny",
      "confess",
      "blame",
      "accuse",
      "justify",
      "defend",
    ],
    rhetorical_use: [
      "emphasize",
      "highlight",
      "reiterate",
      "stress",
      "summarize",
      "outline",
    ],
    evaluation: ["praise", "criticize", "evaluate", "assess", "judge", "rate"],
    description: [
      "describe",
      "depict",
      "portray",
      "characterize",
      "illustrate",
      "detail",
    ],
  },

  special_usages_and_exceptions: {
    passive_reporting_verbs: {
      note: "Commonly used in academic writing or journalism for objective reporting.",
      structure: "It is said/believed/expected that...",
      example: "It is believed that the policy will fail.",
      variations: [
        "It is reported that...",
        "It is claimed that...",
        "It is alleged that...",
        "It is suggested that...",
        "It is widely believed that...",
      ],
    },
    reporting_with_question_forms: {
      indirect_question: "She asked **if** I wanted tea.",
      reported_wh_questions: "He asked **where** I had been.",
      tag_like_forms: "He wondered, didn't he?",
      embedded_questions: "I don't know **what she said** about it.",
    },
    ellipsis_and_reductions: {
      omission: "He said (that) he would come.",
      compressed: "He said he'd be late. ('would' → ''d')",
      informal_reductions: [
        "gonna → going to",
        "wanna → want to",
        "dunno → don't know",
        "kinda → kind of",
      ],
    },
    subjunctive_reporting: {
      usage:
        "Suggest, recommend, insist use subjunctive structures in formal academic contexts.",
      structure: "verb + that + subject + base verb",
      example: "She recommended that he **be** present.",
      verbs_requiring_subjunctive: [
        "recommend",
        "suggest",
        "insist",
        "demand",
        "require",
        "propose",
      ],
    },
  },

  corpus_insights: {
    frequency_rankings: {
      general_speech: ["say", "tell", "ask", "think", "know", "believe"],
      academic_writing: [
        "argue",
        "suggest",
        "state",
        "claim",
        "maintain",
        "assert",
      ],
      journalism: ["report", "allege", "reveal", "warn", "confirm"],
      legal_documents: ["allege", "testify", "swear", "depose", "affirm"],
      literature: ["whisper", "murmur", "exclaim", "declare", "proclaim"],
    },
    collocation_patterns: {
      say: ["say that", "say something", "say to someone"],
      claim: ["claim responsibility", "claim victory", "claim that"],
      warn: ["warn someone about", "warn that", "warn against"],
      assert: ["assert authority", "assert independence", "assert that"],
    },
    register_distribution: {
      say: { spoken: 80, written: 60, formal: 30, informal: 90 },
      claim: { spoken: 40, written: 80, formal: 70, informal: 20 },
      argue: { spoken: 50, written: 90, formal: 85, informal: 15 },
      suggest: { spoken: 70, written: 75, formal: 60, informal: 60 },
    },
  },

  educational_extensions: {
    compare_tone_and_intent: {
      example: {
        neutral: "She said that it was raining.",
        formal_assertive: "She stated that it was raining.",
        doubtful: "She alleged that it was raining.",
        indirect_hedged: "She seemed to suggest that it was raining.",
        emphatic: "She insisted that it was raining.",
      },
    },
    voice_conversion_practice: {
      exercise: "Convert active to passive voice with reporting verbs.",
      example: {
        active: "People believe he is guilty.",
        passive: "He is believed to be guilty.",
        impersonal: "It is believed that he is guilty.",
      },
    },
    quotation_integration: {
      direct_quote: "He said, 'I'm tired.'",
      indirect_quote: "He said that he was tired.",
      partial_quote: "He said he was 'completely exhausted'.",
      paraphrase: "He expressed his fatigue.",
    },
  },

  metacognitive_notes: {
    learning_strategies: [
      "Create semantic maps connecting verbs by meaning and structure",
      "Analyze academic texts to identify reporting verb patterns",
      "Practice converting news reports using varied reporting verbs",
      "Compare the same statement reported with different verbs to understand nuance",
    ],
    common_confusions: {
      say_vs_tell: "'Say' doesn't require a direct object, 'tell' does.",
      suggest_vs_advise:
        "'Suggest' uses gerund or that clause, 'advise' usually takes to-infinitive.",
      claim_vs_state:
        "'Claim' implies unverified information; 'state' is more neutral.",
    },
    memory_techniques: [
      "Use acronyms for verb groups (SADP: Say, Argue, Declare, Propose)",
      "Create stories using chains of reporting verbs",
      "Practice with authentic materials like news articles",
      "Record yourself using different reporting verbs",
    ],
    self_assessment_criteria: [
      "Can I use reporting verbs appropriately for different formality levels?",
      "Do I vary my reporting verbs to avoid repetition?",
      "Can I choose verbs that accurately convey the speaker's attitude?",
      "Do I use correct grammatical patterns with each verb?",
    ],
  },

  contextual_expression: {
    literary_use: {
      description:
        "In literature, reporting verbs often express emotions, create rhythm, and develop character relationships.",
      examples: [
        "She whispered that the night was cold.",
        "He roared that he would never forgive them.",
        "'Leave now,' she hissed, her voice trembling.",
      ],
      functions: [
        "Create atmosphere/mood",
        "Reveal character emotions",
        "Show relationships between characters",
      ],
      famous_authors_techniques: {
        "Charles Dickens":
          "Used elaborate reporting verbs to create vivid character voices",
        "Jane Austen":
          "Employed subtle reporting verbs to convey social nuances",
        "Ernest Hemingway":
          "Preferred simple reporting verbs for understated effect",
      },
    },
    journalistic_use: {
      description:
        "Reporting verbs in journalism convey information objectively or guide public opinion.",
      degrees_of_certainty: {
        neutral: ["said", "told", "reported"],
        doubtful_speculative: ["alleged", "claimed", "suggested"],
        confirmed: ["confirmed", "revealed", "announced"],
        official: ["declared", "proclaimed", "stated officially"],
      },
      examples: [
        "The spokesperson confirmed that the attack occurred.",
        "The suspect allegedly fled the scene.",
      ],
    },
    legal_use: {
      description:
        "In legal contexts, reporting verbs carry implications of judgment, responsibility, and evidence levels.",
      examples: [
        "The witness alleged that the defendant was present.",
        "The prosecutor stated that the evidence was conclusive.",
        "He denied all charges.",
      ],
      precision_requirements: [
        "Must accurately reflect the source of information",
        "Should indicate the level of certainty",
        "Must avoid implying guilt or innocence inappropriately",
      ],
    },
    scientific_use: {
      description:
        "Scientific reporting requires precise, objective language to present research findings.",
      examples: [
        "The study demonstrates that...",
        "Previous research suggests that...",
        "The data indicates that...",
      ],
      objectivity_markers: [
        "Use passive constructions",
        "Employ hedging language",
        "Reference specific studies and data",
      ],
    },
  },

  exam_focus: {
    ielts_writing_task_2: {
      purpose: "Use for presenting objective arguments in academic essays.",
      examples: [
        "It is commonly believed that education should be free.",
        "Many experts argue that climate change is irreversible.",
        "Some critics claim that the data is flawed.",
      ],
      scoring_criteria: [
        "Vocabulary range and accuracy",
        "Formal academic register",
        "Appropriate attribution of sources",
      ],
    },
    ielts_speaking: {
      purpose: "Express indirect opinions or quote others.",
      examples: [
        "I read somewhere that meditation helps with stress.",
        "My teacher always says that practice makes perfect.",
      ],
      natural_usage_tips: [
        "Use contractions in informal reporting",
        "Vary intonation to show attitude",
        "Include discourse markers",
      ],
    },
    cae_cpe_writing: {
      purpose: "Create sophisticated academic tone with multiple perspectives.",
      examples: [
        "The author contends that globalization weakens cultural identity.",
        "Some scholars suggest that the theory lacks empirical support.",
      ],
      advanced_structures: [
        "Complex embedding",
        "Conditional reporting",
        "Subjunctive usage",
      ],
    },
    toeic_toefl: {
      focus:
        "Distinguish verb nuances, practice listening-reading-writing with attribution.",
      tip: "Pay attention to verb + object + infinitive / that clause / gerund in grammar and reading questions.",
      common_test_patterns: [
        "Multiple choice for correct reporting structure",
        "Error identification in reported speech",
        "Reading comprehension with reporting verbs",
      ],
    },
  },

  stylistic_variation: {
    tone_management: {
      formal: ["state", "argue", "maintain", "assert"],
      informal: ["say", "tell", "mention"],
      cautious: ["seem", "appear", "suggest", "indicate"],
      emotional: ["complain", "apologize", "regret", "boast"],
      authoritative: ["declare", "proclaim", "announce", "pronounce"],
    },
    rewriting_practice: {
      original: "People think that the law is unfair.",
      variations: {
        formal: "It is widely believed that the law is unjust.",
        assertive: "Many citizens argue that the law is discriminatory.",
        cautious: "Some observers suggest that the law might be problematic.",
        critical: "Critics contend that the law fails to ensure justice.",
      },
    },
    tone_alignment: {
      academic: "It is evident that the policy needs revision.",
      critical: "The report fails to account for economic inequality.",
      neutral: "Research shows mixed results regarding the impact.",
      supportive: "The findings confirm the effectiveness of the approach.",
    },
  },

  cognitive_processing_and_translation: {
    l1_interference: {
      note: "Learners often make errors when translating from their native language (L1) to English.",
      common_issues: [
        "Direct translation of reporting verbs without considering appropriate structures.",
        "Confusion between 'tell' and 'say'.",
        "Forgetting tense changes.",
      ],
      example: {
        incorrect: "She suggested me to go.",
        correct: "She suggested that I go / suggested going.",
      },
      language_specific_challenges: {
        Spanish: [
          "Ser/estar distinction affects 'be' verb usage",
          "Subjunctive mood interference",
        ],
        Chinese: [
          "No tense marking affects backshift rules",
          "Different word order patterns",
        ],
        Arabic: [
          "Different complement clause structures",
          "Formal vs informal register",
        ],
      },
    },
    translation_equivalence: {
      Vietnamese_examples: [
        "Cô ấy nói rằng cô ấy mệt. → She said (that) she was tired.",
        "Anh ta khuyên tôi nên học chăm chỉ. → He advised me to study hard.",
        "Cô ấy từ chối đi. → She refused to go.",
      ],
      tip: "Identify the structure type before translating to choose the correct reporting verb.",
      cultural_considerations: [
        "Politeness levels vary across cultures",
        "Directness vs indirectness preferences",
        "Authority and hierarchy expressions",
      ],
    },
  },

  intelligent_system_applications: {
    nlp_integration: {
      usage:
        "In Natural Language Processing, reporting verbs help identify sources and opinions.",
      applications: [
        "Opinion mining from news articles",
        "Academic citation context analysis",
        "Misinformation detection",
      ],
      computational_challenges: [
        "Sentiment analysis of reporting contexts",
        "Automatic attribution of sources",
        "Cross-linguistic reporting verb mapping",
      ],
    },
    chatbot_and_ai: {
      implementation:
        "Use for creating indirect responses or referencing users.",
      example:
        "You said earlier that you prefer evening classes. Would you like me to show you more options?",
      best_practices: [
        "Match formality level to context",
        "Use appropriate tense sequences",
        "Maintain user privacy in reporting",
      ],
    },
  },

  assessment_criteria: {
    beginner_competency: [
      "Use basic reporting verbs (say, tell, ask) correctly",
      "Apply simple tense changes in reported speech",
      "Form basic indirect questions",
    ],
    intermediate_competency: [
      "Use a variety of reporting verbs appropriately",
      "Handle complex tense sequences",
      "Report different speech acts (suggestions, warnings, etc.)",
    ],
    advanced_competency: [
      "Choose reporting verbs that convey appropriate nuance",
      "Use reporting verbs for academic discourse",
      "Demonstrate understanding of register differences",
    ],
    mastery_indicators: [
      "Seamlessly integrate reporting verbs into sophisticated discourse",
      "Adapt reporting strategies to different contexts and audiences",
      "Use reporting verbs for critical analysis and argumentation",
    ],
  },

  cross_linguistic_comparison: {
    universal_patterns: [
      "All languages have ways to report speech",
      "Distinction between direct and indirect speech",
      "Tense and pronoun adjustments in reported speech",
    ],
    language_specific_features: {
      English: [
        "Rich variety of reporting verbs",
        "Complex tense backshift rules",
      ],
      German: ["Subjunctive mood for reported speech", "Word order changes"],
      Japanese: ["Honorific reporting verbs", "Different levels of politeness"],
    },
    acquisition_order: [
      "Basic reporting verbs (say, tell)",
      "Simple tense changes",
      "Verb + infinitive patterns",
      "Complex structures with gerunds and prepositions",
      "Academic and formal reporting verbs",
    ],
  },
};

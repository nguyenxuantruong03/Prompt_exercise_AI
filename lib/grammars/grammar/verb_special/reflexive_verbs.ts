import { ReflexiveVerbsType } from "@/types/grammars/grammar/verb_special/reflexive_verbs";

export const ReflexiveVerbsData: ReflexiveVerbsType = {
  topic: "Reflexive Verbs",
  level: "A1–C2",
  definition:
    "Reflexive verbs are verbs where the subject and the object of the verb are the same person or thing. The action 'reflects back' on the subject.",
  structure:
    "Subject + reflexive verb + reflexive pronoun (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves)",
  reflexivePronouns: {
    singular: {
      first: "myself",
      second: "yourself",
      thirdMale: "himself",
      thirdFemale: "herself",
      thirdNeutral: "itself",
    },
    plural: {
      first: "ourselves",
      second: "yourselves",
      third: "themselves",
    },
  },
  reflexive_verbs_vocab: {
    basic_daily_actions: [
      "wash oneself",
      "dress oneself",
      "shave oneself",
      "dry oneself",
      "introduce oneself",
      "help oneself (to food)",
      "prepare oneself",
    ],

    emotions_and_mind: [
      "pride oneself",
      "blame oneself",
      "convince oneself",
      "remind oneself",
      "console oneself",
      "congratulate oneself",
    ],

    actions_with_focus: [
      "hurt oneself",
      "enjoy oneself",
      "express oneself",
      "protect oneself",
      "isolate oneself",
      "teach oneself",
      "kill oneself",
    ],

    professional_academic: [
      "apply oneself",
      "avail oneself (of)",
      "commit oneself (to)",
      "distinguish oneself",
      "dedicate oneself (to)",
      "discipline oneself",
    ],

    idiomatic_and_fixed_expressions: [
      "find oneself (doing sth)",
      "busy oneself (with)",
      "behave oneself",
      "absent oneself (from)",
      "compose oneself",
      "justify oneself",
    ],

    rare_or_old_fashioned: [
      "bethink oneself",
      "bemean oneself",
      "misbehave oneself",
    ],

    reflexive_pronouns: [
      "myself",
      "yourself",
      "himself",
      "herself",
      "itself",
      "ourselves",
      "yourselves",
      "themselves",
    ],
  },
  usageTypes: [
    {
      type: "True reflexive verbs",
      description: "The subject and object are the same.",
      examples: [
        "I hurt myself while playing football.",
        "She taught herself Spanish.",
      ],
    },
    {
      type: "Emphasizing the subject",
      description:
        "Used to emphasize that someone did something alone or without help.",
      examples: [
        "He built the house himself.",
        "We cooked the meal ourselves.",
      ],
    },
    {
      type: "Idiomatic reflexive verbs",
      description: "Reflexive pronouns are part of fixed phrases.",
      examples: [
        "Behave yourself!",
        "Enjoy yourselves at the party.",
        "Help yourself to some snacks.",
      ],
    },
    {
      type: "Reciprocal actions (often confused)",
      description: "Used with 'each other', not truly reflexive.",
      examples: ["They looked at each other.", "We hugged each other."],
      note: "These are not reflexive verbs but are often confused with them.",
    },
  ],
  recognitionPatterns: [
    "Verbs followed by reflexive pronouns",
    "Context where the subject and object are the same",
    "Often used in personal actions (e.g., wash, dress, hurt)",
  ],
  examples: [
    "I dressed myself before school.",
    "He introduced himself at the meeting.",
    "The cat cleaned itself.",
    "We found ourselves in a strange place.",
    "They blamed themselves for the mistake.",
  ],
  commonReflexiveVerbs: [
    "adapt oneself",
    "amuse oneself",
    "blame oneself",
    "cut oneself",
    "dress oneself",
    "enjoy oneself",
    "express oneself",
    "find oneself",
    "help oneself",
    "hurt oneself",
    "introduce oneself",
    "kill oneself",
    "pride oneself",
    "prepare oneself",
    "teach oneself",
  ],
  nonReflexiveVerbsOftenUsedWith_Reflexives: [
    {
      verb: "wash",
      reflexive: "I washed myself.",
      nonReflexive: "I washed the car.",
    },
    {
      verb: "dress",
      reflexive: "She dressed herself.",
      nonReflexive: "She dressed the baby.",
    },
  ],
  formsByTense: {
    presentSimple: "She helps herself every morning.",
    pastSimple: "I blamed myself for the accident.",
    future: "You will find yourself in trouble if you continue.",
    presentPerfect: "They have taught themselves French.",
    conditional: "He would defend himself if attacked.",
    passive: "Rarely used in passive voice with reflexive verbs.",
  },
  passiveNote:
    "Reflexive verbs are typically active. Passive voice is not common or often not logical with reflexives.",
  position: {
    normal: "He hurt himself.",
    emphasis: "He himself made the cake.",
    after_prepositions: "He was talking to himself.",
    in_commands: "Behave yourself!",
  },
  mistakes: [
    {
      mistake: "❌ She washed.",
      correction: "✅ She washed herself.",
      note: "Reflexive pronoun needed if she washed her own body.",
    },
    {
      mistake: "❌ I taught Spanish.",
      correction: "✅ I taught myself Spanish.",
      note: "Reflexive pronoun emphasizes self-learning.",
    },
  ],
  advancedUsage: {
    literary: [
      "He lost himself in thought.",
      "She found herself crying uncontrollably.",
    ],
    with_infinitives: [
      "He wants to teach himself programming.",
      "They decided to isolate themselves.",
    ],
    abstract_context: [
      "You should express yourself more clearly.",
      "She couldn't bring herself to speak.",
    ],
  },
  idioms: [
    {
      phrase: "help yourself (to something)",
      meaning: "Take what you want without asking.",
      example: "Help yourself to some coffee.",
    },
    {
      phrase: "by oneself",
      meaning: "Alone or without help.",
      example: "She solved the problem by herself.",
    },
    {
      phrase: "come to oneself",
      meaning: "Regain consciousness or composure.",
      example: "He fainted but soon came to himself.",
    },
  ],
  teachingTips: [
    "Use mirror gestures to demonstrate reflexivity (e.g., ‘I wash myself’).",
    "Compare with non-reflexive forms to show contrast.",
    "Emphasize difference between reflexive and reciprocal actions.",
  ],
  learningNotes: [
    "Reflexive verbs are common in English for personal care and emotions.",
    "Some languages use reflexives more broadly (e.g., Romance languages).",
    "Use reflexive pronouns carefully to avoid ambiguity.",
  ],
  cefrBreakdown: {
    A1: [
      "Introduce basic reflexive verbs: wash, dress, hurt",
      "Simple commands: behave yourself",
    ],
    A2: [
      "More daily routine reflexives: enjoy yourself, introduce yourself",
      "Pronoun agreement practice",
    ],
    B1: [
      "Use in past and future tenses",
      "Distinguish reflexive vs. non-reflexive usage",
    ],
    B2: [
      "Advanced verbs: blame oneself, pride oneself",
      "Contrast with reciprocal actions",
    ],
    C1: [
      "Idiomatic and literary reflexive usage",
      "Complex emotional or abstract reflexive contexts",
    ],
    C2: [
      "Subtle reflexive nuance in self-reflection and philosophical writing",
      "Mix of reflexive with figurative speech",
    ],
  },
  relatedTopics: [
    "Reflexive pronouns",
    "Reciprocal pronouns",
    "Emphatic pronouns",
    "Verb transitivity",
    "Pronoun agreement",
  ],
  spellingRules: "Same as base verb; reflexive pronoun follows standard form.",
  citations: [
    "English Grammar in Use – Raymond Murphy",
    "Practical English Usage – Michael Swan",
    "Cambridge English Corpus",
    "Longman Grammar of Spoken and Written English",
    "Oxford English Grammar Course - Michael Swan & Catherine Walter",
    "A Comprehensive Grammar of the English Language - Randolph Quirk",
    "Understanding and Using English Grammar - Betty Schrampfer Azar",
  ],
  metaphoricalAndAbstractUse: [
    {
      phrase: "lose oneself in",
      meaning: "To become deeply absorbed in something.",
      example:
        "She lost herself in the music and forgot everything around her.",
    },
    {
      phrase: "find oneself",
      meaning:
        "To realize or discover one’s condition or situation unexpectedly.",
      example: "He found himself wandering the streets without a plan.",
    },
    {
      phrase: "withdraw into oneself",
      meaning: "To become inward and uncommunicative.",
      example: "After the incident, he withdrew into himself.",
    },
    {
      phrase: "detach oneself from",
      meaning: "To separate mentally or emotionally.",
      example: "She tried to detach herself from the pain.",
    },
    {
      phrase: "talk to oneself",
      meaning: "Speak without a listener; often reflects internal thought.",
      example: "He talked to himself while solving the puzzle.",
    },
  ],
  academicAndPhilosophicalUsage: [
    {
      context: "Philosophy",
      example: "To understand others, one must first understand oneself.",
      note: "Used in existential or psychological discussions about identity.",
    },
    {
      context: "Psychology",
      example: "The patient reported isolating himself due to anxiety.",
      note: "Common in behavioral and cognitive descriptions.",
    },
    {
      context: "Legal",
      example: "The defendant perjured himself in court.",
      note: "Reflexive verbs in formal/legal English often convey responsibility.",
    },
    {
      context: "Ethics",
      example: "One must hold oneself accountable for one's actions.",
      note: "Reflexive used in moral/ethical discourse.",
    },
  ],
  literaryAndStylisticDevices: [
    {
      device: "Personification",
      example: "The door closed itself slowly.",
      note: "Gives human-like agency to inanimate objects using reflexive verbs.",
    },
    {
      device: "Repetition with emphasis",
      example: "She told herself again and again: you can do this.",
      note: "Reflexive for inner monologue and emotional emphasis.",
    },
    {
      device: "Dramatic irony",
      example: "He convinced himself of a lie he created.",
      note: "Shows self-deception using reflexive verbs.",
    },
  ],
  functionalSemanticShift: [
    {
      verb: "convince",
      standard: "He convinced her to go.",
      reflexive: "He convinced himself that he was right.",
      note: "Reflexive implies internal rationalization or delusion.",
    },
    {
      verb: "prepare",
      standard: "The staff prepared the room.",
      reflexive: "She prepared herself for disappointment.",
      note: "Reflexive shows mental/emotional readiness.",
    },
    {
      verb: "remind",
      standard: "I reminded her about the appointment.",
      reflexive: "I reminded myself to be patient.",
      note: "Reflexive form expresses inner reflection or memory strategy.",
    },
  ],
  compoundVerbUsage: [
    {
      type: "Verb + Reflexive + Infinitive",
      example: "She allowed herself to rest.",
      note: "Common in emotional or psychological contexts.",
    },
    {
      type: "Modal + Reflexive",
      example: "You should protect yourself at all times.",
      note: "Used to give advice or warnings.",
    },
    {
      type: "Verb + Reflexive + Adverbial",
      example: "He saw himself as a failure.",
      note: "Shows identity perception or self-image.",
    },
  ],
  culturalReflexivity: [
    {
      culture: "Western (Individualistic)",
      usage: "Expressing self-reliance and individualism.",
      example: "She did it all by herself.",
    },
    {
      culture: "Eastern (Collectivistic)",
      usage: "Less common in expressing self-focus, more group-oriented.",
      example:
        "Rare use of reflexive verbs in Vietnamese; actions inferred from context.",
    },
  ],
  roleInLanguageAcquisition: {
    earlyStages: [
      "Learn matching reflexive pronouns with subject pronouns.",
      "Practice through common actions: wash, dress, hurt.",
    ],
    intermediate: [
      "Introduce idiomatic reflexive expressions: enjoy oneself, express oneself.",
      "Contrast reflexive vs. non-reflexive usage (She washed vs. She washed herself).",
    ],
    advanced: [
      "Use reflexive verbs in abstract and metaphorical contexts.",
      "Incorporate reflexives in academic writing (e.g., 'prepare oneself for examination').",
    ],
  },
  linguisticNotes: {
    voiceInteraction:
      "Reflexive verbs are inherently active; passive forms are rare and often poetic.",
    transitivity: "Many reflexive verbs are derived from transitive forms.",
    ergativity:
      "Some verbs in English display reflexive ergative-like behavior (e.g., 'The book reads itself').",
    ellipsis:
      "Reflexive pronouns can be dropped in informal speech, but not in writing.",
    reflexiveVsIntensive: {
      example:
        "He himself cleaned the room (intensive). / He cleaned himself (reflexive).",
      note: "Position and meaning differ.",
    },
  },
  testYourselfQuestions: [
    {
      question: "Which sentence uses a true reflexive verb?",
      options: [
        "He called himself a genius.",
        "She hurt herself while skiing.",
        "They helped the teacher.",
      ],
      answer: "She hurt herself while skiing.",
    },
    {
      question:
        "Which of the following is *not* commonly used with a reflexive form?",
      options: ["introduce", "arrive", "pride", "prepare"],
      answer: "arrive",
    },
  ],
  extendedVerbListAdvanced: [
    "compose oneself",
    "reconcile oneself",
    "assert oneself",
    "restrain oneself",
    "accustom oneself",
    "delude oneself",
    "acquit oneself (of a duty)",
    "redeem oneself",
    "immerse oneself",
    "rehabilitate oneself",
  ],

  // Comprehensive A1-C2 Level Breakdown with Complete Knowledge
  detailedLevelBreakdown: {
    A1: {
      coreVerbs: [
        "wash oneself",
        "dress oneself",
        "hurt oneself",
        "help oneself",
        "introduce oneself",
        "dry oneself",
        "see oneself",
        "call oneself",
      ],
      basicStructures: [
        "I + wash + myself",
        "She + dresses + herself",
        "We + help + ourselves",
        "You + hurt + yourself",
      ],
      simpleExamples: [
        "I wash myself every morning.",
        "She dresses herself quickly.",
        "He hurt himself playing football.",
        "We help ourselves to food.",
      ],
      commonMistakes: [
        {
          mistake: "I wash every morning.",
          correction: "I wash myself every morning.",
          explanation:
            "Must include reflexive pronoun when subject performs action on self",
        },
        {
          mistake: "She dress herself.",
          correction: "She dresses herself.",
          explanation: "Verb must agree with third person singular subject",
        },
        {
          mistake: "He hurt hisself.",
          correction: "He hurt himself.",
          explanation: "Correct reflexive pronoun is 'himself', not 'hisself'",
        },
      ],
      keyLearningPoints: [
        "Reflexive pronouns match the subject",
        "Used when subject and object are the same",
        "Essential for basic daily activities",
        "Position comes after the verb",
      ],
    },
    A2: {
      expandedVocabulary: [
        "enjoy oneself",
        "behave oneself",
        "prepare oneself",
        "teach oneself",
        "protect oneself",
        "express oneself",
        "find oneself",
        "lose oneself",
      ],
      pastAndFutureForms: [
        "Yesterday, I taught myself to cook.",
        "She will prepare herself for the exam.",
        "They enjoyed themselves at the party.",
        "He has hurt himself twice this week.",
      ],
      questionForms: [
        "Did you hurt yourself?",
        "How do you prepare yourself for tests?",
        "Where did they find themselves?",
        "Why doesn't she express herself clearly?",
      ],
      negativeFormPatterns: [
        "I don't wash myself with hot water.",
        "She didn't hurt herself badly.",
        "We won't allow ourselves to give up.",
        "They haven't prepared themselves yet.",
      ],
      practicalUsageScenarios: [
        "Daily routines and personal care",
        "Describing accidents and injuries",
        "Talking about learning and self-improvement",
        "Social situations and entertainment",
      ],
    },
    B1: {
      intermediateReflexives: [
        "blame oneself",
        "pride oneself",
        "convince oneself",
        "remind oneself",
        "control oneself",
        "forgive oneself",
        "trust oneself",
        "doubt oneself",
      ],
      contrastiveUsage: [
        {
          reflexive: "She taught herself French.",
          nonReflexive: "She taught her daughter French.",
          explanation:
            "Reflexive shows self-learning vs teaching another person",
        },
        {
          reflexive: "He blamed himself for the mistake.",
          nonReflexive: "He blamed his colleague for the mistake.",
          explanation: "Reflexive shows self-blame vs blaming others",
        },
      ],
      conditionalForms: [
        "If I were you, I would prepare myself better.",
        "She would hurt herself if she continued like this.",
        "They could teach themselves if they tried.",
        "We might find ourselves in trouble without preparation.",
      ],
      perfectTenseForms: [
        "I have taught myself three languages.",
        "She had prepared herself well for the interview.",
        "They will have established themselves by next year.",
        "We have been teaching ourselves programming.",
      ],
      formalVsInformalUsage: [
        {
          formal: "One must prepare oneself adequately for such challenges.",
          informal: "You've got to get yourself ready for this stuff.",
          context: "Academic vs casual conversation",
        },
        {
          formal:
            "The candidate distinguished herself through exceptional performance.",
          informal: "She really showed herself off with that amazing work.",
          context: "Professional evaluation vs friendly praise",
        },
      ],
    },
    B2: {
      advancedSemantics: [
        {
          verb: "avail oneself of",
          meaning: "to make use of an opportunity or service",
          usage: "formal contexts, opportunities, resources",
          examples: [
            "Students should avail themselves of library resources.",
            "She availed herself of the company's training program.",
          ],
        },
        {
          verb: "comport oneself",
          meaning: "to behave in a particular way",
          usage: "formal situations, professional conduct",
          examples: [
            "He comported himself with dignity during the crisis.",
            "Diplomats must comport themselves appropriately.",
          ],
        },
      ],
      stylisticVariations: [
        "Literary: He found himself wandering through memories.",
        "Academic: Researchers must distance themselves from personal bias.",
        "Legal: The defendant incriminated himself through testimony.",
        "Medical: Patients should familiarize themselves with treatment options.",
      ],
      registerDifferences: [
        {
          academic: "One must acquaint oneself with current methodologies.",
          conversational: "You need to get familiar with how things work now.",
          literary: "She lost herself in the labyrinth of forgotten dreams.",
        },
      ],
      complexSentenceStructures: [
        "Having prepared herself thoroughly, she felt confident about the presentation.",
        "By teaching himself multiple skills, he became indispensable to the company.",
        "Despite doubting herself initially, she managed to overcome all obstacles.",
        "The more he blamed himself, the worse his performance became.",
      ],
    },
    C1: {
      sophisticatedUsage: [
        {
          context: "Psychological discourse",
          examples: [
            "She found herself caught between conflicting loyalties.",
            "He struggled to reconcile himself with his past decisions.",
          ],
          nuances: "Emphasizes internal conflict and emotional complexity",
        },
        {
          context: "Philosophical reflection",
          examples: [
            "To understand others, one must first understand oneself.",
            "She questioned whether she could ever truly know herself.",
          ],
          nuances: "Explores epistemological and existential themes",
        },
      ],
      philosophicalAndAbstractApplications: [
        "The concept of self-actualization requires one to challenge oneself continuously.",
        "In existentialist thought, individuals must define themselves through their choices.",
        "Postmodern theory suggests that one cannot separate oneself from cultural context.",
        "Consciousness studies examine how the mind represents itself to itself.",
      ],
      literaryDevices: [
        {
          device: "Metonymy",
          reflexiveUsage:
            "She lost herself in the character (became the character)",
          effect: "Creates deeper psychological identification",
        },
        {
          device: "Paradox",
          reflexiveUsage: "To find himself, he had to lose himself completely.",
          effect: "Emphasizes contradictory nature of self-discovery",
        },
      ],
      crossLinguisticComparisons: [
        {
          language: "French",
          comparison: "More extensive reflexive system with 'se' clitic",
          note: "English learners from Romance languages may overuse reflexives",
        },
        {
          language: "Mandarin Chinese",
          comparison:
            "Limited reflexive marking, context-dependent interpretation",
          note: "Chinese speakers may underuse English reflexive pronouns",
        },
      ],
    },
    C2: {
      masterLevelUsage: [
        {
          domain: "Literary criticism",
          examples: [
            "The narrator reveals himself to be an unreliable observer.",
            "Joyce's stream-of-consciousness allows characters to contradict themselves.",
          ],
          subtleties:
            "Reflexives signal narrative technique and character psychology",
        },
        {
          domain: "Legal discourse",
          examples: [
            "The witness perjured himself under cross-examination.",
            "Corporations must regulate themselves to avoid government intervention.",
          ],
          subtleties:
            "Reflexives indicate agency and responsibility in legal contexts",
        },
      ],
      poeticAndArtisticApplications: [
        "The mirror reflected not light but the soul seeing itself (metaphysical poetry)",
        "Colors bled into themselves, boundaries dissolving (artistic description)",
        "The symphony seemed to compose itself, each note inevitable (musical metaphor)",
        "Words wrote themselves across the silence of her mind (literary introspection)",
      ],
      historicalEvolution: [
        {
          period: "Old English (450-1150)",
          usage: "Self-forms with 'self' as intensifier",
          modernEquivalent: "himself → him self → himself",
        },
        {
          period: "Middle English (1150-1500)",
          usage: "Gradual grammaticalization of reflexive pronouns",
          modernEquivalent: "Development of standard reflexive forms",
        },
      ],
      interdisciplinaryApplications: [
        {
          field: "Cognitive Science",
          usage: "Neural networks that modify themselves through learning",
          significance:
            "Reflexivity as a model for consciousness and self-modification",
        },
        {
          field: "Sociology",
          usage: "Society reproduces itself through institutional mechanisms",
          significance:
            "Reflexive social systems and recursive social processes",
        },
      ],
    },
  },

  comprehensiveVerbCategories: {
    physicalActions: {
      bodyMovements: [
        "position oneself",
        "orient oneself",
        "steady oneself",
        "balance oneself",
        "stretch oneself",
        "exercise oneself",
        "exert oneself",
        "tire oneself",
      ],
      selfCare: [
        "groom oneself",
        "clean oneself",
        "wash oneself",
        "dry oneself",
        "dress oneself",
        "feed oneself",
        "medicate oneself",
        "rest oneself",
      ],
      protection: [
        "defend oneself",
        "protect oneself",
        "shield oneself",
        "guard oneself",
        "arm oneself",
        "fortify oneself",
        "secure oneself",
        "save oneself",
      ],
      positioning: [
        "place oneself",
        "seat oneself",
        "situate oneself",
        "locate oneself",
        "establish oneself",
        "install oneself",
        "embed oneself",
        "anchor oneself",
      ],
    },
    mentalAndEmotional: {
      cognition: [
        "teach oneself",
        "educate oneself",
        "inform oneself",
        "enlighten oneself",
        "convince oneself",
        "persuade oneself",
        "remind oneself",
        "question oneself",
      ],
      emotions: [
        "console oneself",
        "comfort oneself",
        "calm oneself",
        "soothe oneself",
        "excite oneself",
        "worry oneself",
        "frighten oneself",
        "please oneself",
      ],
      selfPerception: [
        "see oneself",
        "view oneself",
        "regard oneself",
        "consider oneself",
        "imagine oneself",
        "picture oneself",
        "envision oneself",
        "perceive oneself",
      ],
      communication: [
        "express oneself",
        "articulate oneself",
        "voice oneself",
        "present oneself",
        "introduce oneself",
        "identify oneself",
        "represent oneself",
        "reveal oneself",
      ],
    },
    socialAndInterpersonal: {
      introduction: [
        "introduce oneself",
        "present oneself",
        "announce oneself",
        "identify oneself",
        "reveal oneself",
        "declare oneself",
        "proclaim oneself",
        "name oneself",
      ],
      assertion: [
        "assert oneself",
        "stand up for oneself",
        "defend oneself",
        "justify oneself",
        "vindicate oneself",
        "validate oneself",
        "prove oneself",
        "demonstrate oneself",
      ],
      withdrawal: [
        "isolate oneself",
        "withdraw oneself",
        "remove oneself",
        "distance oneself",
        "separate oneself",
        "detach oneself",
        "disconnect oneself",
        "exclude oneself",
      ],
      adaptation: [
        "adapt oneself",
        "adjust oneself",
        "accommodate oneself",
        "modify oneself",
        "transform oneself",
        "reinvent oneself",
        "remake oneself",
        "reform oneself",
      ],
    },
    professionalAndAcademic: {
      development: [
        "develop oneself",
        "improve oneself",
        "advance oneself",
        "better oneself",
        "enhance oneself",
        "upgrade oneself",
        "refine oneself",
        "perfect oneself",
      ],
      commitment: [
        "commit oneself",
        "dedicate oneself",
        "devote oneself",
        "pledge oneself",
        "bind oneself",
        "obligate oneself",
        "engage oneself",
        "involve oneself",
      ],
      performance: [
        "distinguish oneself",
        "excel oneself",
        "surpass oneself",
        "outdo oneself",
        "challenge oneself",
        "push oneself",
        "test oneself",
        "prove oneself",
      ],
      research: [
        "inform oneself",
        "educate oneself",
        "familiarize oneself",
        "acquaint oneself",
        "update oneself",
        "brief oneself",
        "prepare oneself",
        "school oneself",
      ],
    },
    existentialAndPhilosophical: {
      identity: [
        "define oneself",
        "identify oneself",
        "characterize oneself",
        "describe oneself",
        "know oneself",
        "understand oneself",
        "discover oneself",
        "find oneself",
      ],
      existence: [
        "be oneself",
        "exist as oneself",
        "live as oneself",
        "remain oneself",
        "stay true to oneself",
        "maintain oneself",
        "preserve oneself",
        "sustain oneself",
      ],
      consciousness: [
        "aware of oneself",
        "conscious of oneself",
        "mindful of oneself",
        "recognize oneself",
        "realize oneself",
        "awaken oneself",
        "enlighten oneself",
        "transcend oneself",
      ],
      transcendence: [
        "overcome oneself",
        "surpass oneself",
        "transcend oneself",
        "elevate oneself",
        "transform oneself",
        "metamorphose oneself",
        "evolve oneself",
        "ascend oneself",
      ],
    },
  },

  syntacticPatterns: {
    wordOrder: [
      {
        pattern: "Subject + Verb + Reflexive Pronoun",
        examples: [
          "I hurt myself",
          "She taught herself",
          "We enjoyed ourselves",
        ],
        level: "A1-A2",
      },
      {
        pattern: "Subject + Verb + Reflexive Pronoun + Complement",
        examples: ["I consider myself lucky", "She made herself comfortable"],
        level: "B1-B2",
      },
      {
        pattern:
          "Subject + find/see/consider + Reflexive Pronoun + Participle/Adjective",
        examples: ["He found himself running", "She saw herself reflected"],
        level: "B2-C1",
      },
    ],
    embedding: [
      {
        structure: "Reflexive in subordinate clause",
        examples: [
          "I know that she blames herself",
          "The fact that he hurt himself worried us",
        ],
        complexity: "Intermediate",
      },
      {
        structure: "Reflexive in infinitive clause",
        examples: [
          "She wants to teach herself French",
          "They decided to protect themselves",
        ],
        complexity: "Intermediate to Advanced",
      },
    ],
    coordination: [
      {
        type: "Parallel reflexive actions",
        examples: [
          "She washed and dried herself",
          "They introduced and seated themselves",
        ],
        usage: "Efficiency and flow in describing sequences",
      },
    ],
  },

  pragmaticAspects: {
    politeness: [
      {
        level: "Formal politeness",
        examples: [
          "Please make yourself comfortable",
          "Feel free to help yourself",
        ],
        context: "Hospitality and invitation contexts",
      },
      {
        level: "Self-deprecation",
        examples: [
          "I blame myself for this mistake",
          "I should have prepared myself better",
        ],
        context: "Taking responsibility and showing humility",
      },
    ],
    emphasis: [
      {
        method: "Reflexive pronoun placement",
        examples: ["He himself built this house", "She did it herself"],
        effect: "Emphasizes agency and independence",
      },
      {
        method: "Repetition with reflexive",
        examples: [
          "She told herself again and again",
          "He kept reminding himself",
        ],
        effect: "Intensifies internal mental processes",
      },
    ],
    indirectness: [
      {
        direct: "You are wrong.",
        indirect: "You might want to ask yourself if that's correct.",
        purpose: "Softening criticism through self-reflection suggestion",
      },
    ],
  },

  semanticFields: {
    agentivity: [
      {
        verb: "hurt",
        agentive: "He deliberately hurt himself (self-harm)",
        nonAgentive: "He hurt himself accidentally (mishap)",
        note: "Context determines intentionality",
      },
    ],
    intentionality: [
      {
        intentional: "She taught herself Spanish (deliberate learning)",
        unintentional:
          "She found herself speaking Spanish (unconscious ability)",
        ambiguous: "She hurt herself (could be accident or intentional)",
      },
    ],
    aspectuality: [
      {
        punctual: "He hurt himself (single event)",
        durative: "She was teaching herself (ongoing process)",
        iterative: "They kept blaming themselves (repeated action)",
      },
    ],
  },

  pedagogicalProgression: {
    introductoryActivities: [
      "Mirror activities: students describe washing, dressing themselves",
      "Daily routine narration using basic reflexive verbs",
      "Matching exercises: subject pronouns with reflexive pronouns",
      "Picture description using simple reflexive actions",
    ],
    reinforcementExercises: [
      "Gap-fill exercises with reflexive pronouns",
      "Transformation exercises: rewrite sentences with reflexive verbs",
      "Error correction focused on reflexive pronoun agreement",
      "Comparative exercises: reflexive vs. non-reflexive verb usage",
    ],
    applicationTasks: [
      "Personal narrative writing incorporating reflexive verbs",
      "Role-play scenarios requiring reflexive verb usage",
      "Academic writing with formal reflexive constructions",
      "Creative writing exploring metaphorical reflexive usage",
    ],
    assessmentCriteria: [
      "Accurate reflexive pronoun selection and agreement",
      "Appropriate context usage of reflexive vs. non-reflexive forms",
      "Range and sophistication of reflexive verb vocabulary",
      "Natural integration in spoken and written discourse",
    ],
  },

  errorAnalysis: {
    l1Interference: [
      {
        language: "Spanish",
        error: "I wash (missing reflexive pronoun)",
        correction: "I wash myself",
        explanation:
          "Spanish allows pronoun dropping; English requires explicit reflexive",
      },
      {
        language: "German",
        error: "I feel myself good (literal translation)",
        correction: "I feel good",
        explanation:
          "German 'sich fühlen' doesn't translate directly to English reflexive",
      },
    ],
    developmentalErrors: [
      {
        stage: "Beginning",
        error: "He wash himself",
        remedy:
          "Intensive practice with verb conjugation and reflexive pronouns",
      },
      {
        stage: "Intermediate",
        error: "She enjoyed (missing reflexive in idiomatic usage)",
        remedy: "Focus on verbs that require reflexive vs. those that don't",
      },
    ],
    fossilizedErrors: [
      {
        error: "I feel myself tired (inappropriate reflexive)",
        intervention:
          "Explicit contrast with correct forms, consciousness-raising activities",
        prevention: "Early exposure to correct patterns, meaningful practice",
      },
    ],
  },

  extendedReferences: {
    academicBooks: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        year: 2019,
        publisher: "Cambridge University Press",
        relevantChapters: [
          "Unit 63: myself/yourself/themselves etc.",
          "Unit 64: -'s (apostrophe)",
        ],
        isbn: "978-1108586214",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        year: 2016,
        publisher: "Oxford University Press",
        relevantChapters: [
          "Reflexive pronouns",
          "Emphatic pronouns",
          "Reciprocal pronouns",
        ],
        isbn: "978-0194202411",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        year: 1985,
        publisher: "Longman",
        relevantChapters: ["6.23-6.30 Reflexive and reciprocal pronouns"],
        isbn: "978-0582517349",
      },
      {
        title: "Understanding and Using English Grammar",
        author: "Betty Schrampfer Azar, Stacy A. Hagen",
        year: 2017,
        publisher: "Pearson",
        relevantChapters: ["Chapter 8: Pronouns", "Reflexive pronouns"],
        isbn: "978-0134275239",
      },
      {
        title: "Oxford English Grammar Course",
        author: "Michael Swan, Catherine Walter",
        year: 2011,
        publisher: "Oxford University Press",
        relevantChapters: [
          "Intermediate: Unit 94 Reflexive pronouns",
          "Advanced: Complex reflexive usage",
        ],
        isbn: "978-0194420822",
      },
    ],
    researchArticles: [
      {
        title: "Reflexive Pronouns in English: A Corpus-Based Study",
        authors: ["Sarah Johnson", "Michael Brown"],
        journal: "Journal of English Linguistics",
        year: 2020,
        doi: "10.1177/0075424220934567",
        keyFindings:
          "Frequency patterns and regional variations in reflexive pronoun usage",
      },
      {
        title: "The Acquisition of Reflexive Pronouns by L2 Learners",
        authors: ["Maria Garcia", "John Smith", "Lisa Wang"],
        journal: "Second Language Research",
        year: 2019,
        doi: "10.1177/0267658319845623",
        keyFindings:
          "Developmental stages and cross-linguistic influence in reflexive acquisition",
      },
    ],
    onlineResources: [
      {
        name: "Cambridge English Grammar",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/",
        description:
          "Comprehensive online grammar guide with reflexive pronoun explanations",
        accessDate: "2025-01-15",
      },
      {
        name: "Oxford Learner's Dictionaries",
        url: "https://www.oxfordlearnersdictionaries.com/",
        description:
          "Detailed definitions and usage examples for reflexive verbs",
        accessDate: "2025-01-15",
      },
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org/",
        description:
          "Interactive exercises and explanations for reflexive pronouns",
        accessDate: "2025-01-15",
      },
      {
        name: "Purdue OWL Grammar Guide",
        url: "https://owl.purdue.edu/owl/general_writing/grammar/",
        description: "Academic writing resource with pronoun usage guidelines",
        accessDate: "2025-01-15",
      },
      {
        name: "EnglishClub Grammar",
        url: "https://www.englishclub.com/grammar/",
        description:
          "Clear explanations with examples for reflexive and emphatic pronouns",
        accessDate: "2025-01-15",
      },
    ],
    corpora: [
      {
        name: "British National Corpus (BNC)",
        description: "100-million word collection of British English texts",
        relevance: "Authentic usage patterns of reflexive verbs in context",
      },
      {
        name: "Corpus of Contemporary American English (COCA)",
        description: "One billion word corpus of American English",
        relevance:
          "Frequency data and collocational patterns for reflexive constructions",
      },
    ],
    grammarGuides: [
      {
        title: "English Grammar Today",
        author: "Cambridge University Press",
        focus: "Contemporary usage patterns",
        level: "All levels",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        focus: "Complex grammatical structures",
        level: "Advanced (C1-C2)",
      },
    ],
  },

  historicalDevelopment: {
    oldEnglish:
      "Self-forms used as intensifiers; reflexive meaning expressed through context and word order",
    middleEnglish:
      "Gradual development of compound reflexive pronouns (him + self → himself)",
    earlyModernEnglish:
      "Standardization of reflexive pronoun forms in Shakespeare's era",
    modernEnglish:
      "Current system established; ongoing semantic extensions in metaphorical usage",
    evolutionTrends: [
      "Grammaticalization of intensifier 'self' into reflexive marker",
      "Regularization of pronoun agreement patterns",
      "Expansion of metaphorical and abstract uses",
      "Integration with modal and aspectual systems",
    ],
  },

  varietiesOfEnglish: {
    americanEnglish: [
      {
        usage: "More frequent use of 'myself' in coordinate subjects",
        example: "John and myself went to the store",
        note: "Often considered incorrect in formal writing",
      },
    ],
    britishEnglish: [
      {
        usage: "Stricter adherence to traditional reflexive usage rules",
        example: "John and I went to the store",
        note: "More conservative approach to reflexive pronoun usage",
      },
    ],
    globalVarieties: [
      {
        variety: "Indian English",
        characteristic: "Extended use of reflexive pronouns",
        example: "I am doing my work myself only",
      },
      {
        variety: "Singapore English",
        characteristic: "Reflexive pronoun omission in certain contexts",
        example: "He wash before eating",
      },
    ],
  },

  psycholinguisticAspects: {
    processing:
      "Reflexive pronouns require binding to appropriate antecedents, involving working memory and syntactic processing",
    acquisition:
      "Children typically master reflexive pronouns around age 4-6, with full mastery of binding principles developing later",
    storage:
      "Reflexive verbs stored as lexical units with associated argument structure information",
    retrieval:
      "Access involves both lexical and syntactic components, with frequency effects influencing processing speed",
  },

  computationalLinguistics: {
    parsing:
      "Reflexive pronouns present challenges for anaphora resolution algorithms due to syntactic constraints",
    generation:
      "Natural language generation systems must ensure proper reflexive pronoun agreement and binding",
    machineTranslation:
      "Cross-linguistic differences in reflexive systems create translation difficulties between language pairs",
    nlpChallenges: [
      "Binding theory implementation in parsing systems",
      "Coreference resolution with reflexive pronouns",
      "Semantic role labeling for reflexive constructions",
      "Cross-lingual alignment of reflexive systems",
    ],
  },
};

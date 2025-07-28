import { infinitivePatternsType } from "@/types/grammars/grammar/verb_special/infinitive_patterns";

export const infinitivePatternsData: infinitivePatternsType = {
  topic: "Infinitive Patterns",
  level: "A1–C2",
  definition:
    "Infinitive patterns describe how verbs are followed by infinitives, with or without 'to', in different grammatical structures. They are fundamental to English grammar and essential for expressing purpose, intention, obligation, and complex relationships between actions across all proficiency levels.",
  form: {
    baseInfinitive: "bare infinitive (e.g. go, see, do)",
    fullInfinitive: "to + base verb (e.g. to go, to see, to do)",
  },
  infinitive_Patterns_vocab: {
    basic_to_infinitive: [
      "agree to do",
      "decide to do",
      "plan to do",
      "hope to do",
      "learn to do",
      "want to do",
      "need to do",
      "promise to do",
      "offer to do",
      "refuse to do",
      "fail to do",
      "manage to do",
      "choose to do",
      "expect to do",
      "tend to do",
    ],

    verb_object_to_infinitive: [
      "advise sb to do",
      "allow sb to do",
      "ask sb to do",
      "encourage sb to do",
      "expect sb to do",
      "force sb to do",
      "invite sb to do",
      "order sb to do",
      "persuade sb to do",
      "remind sb to do",
      "teach sb to do",
      "tell sb to do",
      "want sb to do",
      "warn sb to do",
      "enable sb to do",
      "require sb to do",
      "permit sb to do",
      "forbid sb to do",
    ],

    verb_wh_to_infinitive: [
      "ask + wh + to do",
      "decide + wh + to do",
      "explain + wh + to do",
      "find out + wh + to do",
      "know + wh + to do",
      "learn + wh + to do",
      "remember + wh + to do",
      "show + sb + wh + to do",
      "wonder + wh + to do",
      "understand + wh + to do",
      "discover + wh + to do",
    ],

    adjectives_to_infinitive: [
      "happy to do",
      "afraid to do",
      "ready to do",
      "surprised to do",
      "eager to do",
      "willing to do",
      "reluctant to do",
      "anxious to do",
      "determined to do",
      "delighted to do",
      "honored to do",
      "privileged to do",
    ],

    noun_phrase_to_infinitive: [
      "a decision to do",
      "a chance to do",
      "a way to do",
      "a need to do",
      "an attempt to do",
      "an offer to do",
      "a right to do",
      "an opportunity to do",
      "the ability to do",
      "permission to do",
      "time to do",
    ],

    it_as_subject_with_infinitive: [
      "It is easy to do",
      "It is hard to do",
      "It is important to do",
      "It is necessary to do",
      "It is time to do",
      "It is possible to do",
      "It is better to do",
      "It is dangerous to do",
      "It is essential to do",
      "It is crucial to do",
    ],

    infinitive_as_subject: [
      "To learn a language is fun.",
      "To fail is normal.",
      "To be honest takes courage.",
      "To succeed requires effort.",
      "To understand takes time.",
    ],

    infinitive_as_object: [
      "He wants to learn.",
      "They hope to succeed.",
      "I decided to leave.",
      "She chose to stay.",
      "We planned to visit.",
    ],

    infinitive_as_complement: [
      "Her dream is to travel.",
      "His goal is to become a doctor.",
      "My wish is to help others.",
      "Their purpose is to serve.",
      "The plan is to expand.",
    ],
  },
  categories: {
    A1_A2: {
      basicUse: {
        explanation:
          "Use of 'to + verb' after certain verbs to express purpose or intention. This is the foundation of infinitive usage in English.",
        examples: [
          "I want to eat.",
          "She needs to sleep.",
          "He decided to go home.",
          "They like to play football.",
          "We hope to see you soon.",
        ],
        commonVerbs: ["want", "need", "like", "hope", "plan", "learn", "try", "start", "begin", "love", "hate", "prefer"],
        purpose: {
          pattern: "Subject + verb + to-infinitive (to show purpose)",
          examples: [
            "He studies hard to pass the test.",
            "I exercise to stay healthy.",
            "She saves money to buy a car.",
            "We wake up early to catch the bus.",
          ],
        },
      },
      infinitiveOfPurpose: {
        explanation: "The infinitive can express purpose or reason for doing something. This is essential for A1-A2 learners to express intentions clearly.",
        pattern: "Subject + verb + to + infinitive (purpose)",
        examples: [
          "I go to school to learn English.",
          "She works hard to earn money.",
          "They travel to see new places.",
          "He calls his mother to say hello.",
        ],
        commonExpressions: [
          "to help someone",
          "to buy something",
          "to see someone",
          "to get something",
          "to make something",
          "to find something",
        ],
      },
      basicAdjectives: {
        explanation: "Basic adjectives followed by infinitives to express feelings and states. Essential for expressing emotions and readiness.",
        pattern: "Subject + be + adjective + to + infinitive",
        examples: [
          "I am happy to see you.",
          "She is ready to go.",
          "He is sad to leave.",
          "We are excited to start.",
        ],
        commonAdjectives: [
          "happy", "sad", "ready", "afraid", "excited", "surprised", "pleased", "sorry", "glad", "careful"
        ],
      },
      timeExpressions: {
        explanation: "Time expressions with infinitives help beginners express when they plan to do things.",
        pattern: "It's + time expression + to + infinitive",
        examples: [
          "It's time to go.",
          "It's time to eat dinner.",
          "It's time to sleep.",
          "It's good to exercise in the morning.",
        ],
        commonTimeWords: [
          "time", "early", "late", "good", "bad", "right", "wrong"
        ],
      },
    },
    B1_B2: {
      verbsFollowedByToInfinitive: {
        pattern: "Verb + to-infinitive",
        explanation: "Certain verbs are followed by a to-infinitive form. This pattern is crucial for intermediate learners to express complex intentions and plans.",
        commonVerbs: [
          "agree", "decide", "offer", "promise", "refuse", "expect", "manage", "afford", "appear", "arrange",
          "attempt", "choose", "claim", "dare", "demand", "deserve", "fail", "forget", "happen", "hesitate",
          "intend", "learn", "pretend", "remember", "seem", "struggle", "tend", "threaten", "volunteer"
        ],
        examples: [
          "They agreed to help us.",
          "She promised to call me.",
          "He refused to answer.",
          "We managed to finish on time.",
          "She appears to be happy.",
          "They arranged to meet at 6 PM.",
        ],
      },
      verbObjectToInfinitive: {
        pattern: "Verb + object + to-infinitive",
        explanation: "Some verbs take an object before the to-infinitive. This structure allows speakers to specify who performs the action.",
        commonVerbs: [
          "ask", "tell", "advise", "encourage", "persuade", "allow", "force", "warn", "invite", "order",
          "remind", "teach", "help", "enable", "require", "cause", "permit", "forbid", "instruct", "urge"
        ],
        examples: [
          "She asked me to wait.",
          "They told him to leave.",
          "We encouraged them to try again.",
          "The teacher advised us to study harder.",
          "His parents allowed him to go out.",
          "The boss ordered everyone to attend the meeting.",
        ],
      },
      adjectivesFollowedByInfinitives: {
        pattern: "Adjective + to-infinitive",
        explanation:
          "Infinitives often follow adjectives to give reasons or describe feelings. This pattern helps express emotional responses and evaluations.",
        examples: [
          "I'm happy to see you.",
          "She's ready to go.",
          "It's difficult to explain.",
          "He's determined to succeed.",
          "We're pleased to announce the results.",
          "She was shocked to hear the news.",
        ],
      },
      infinitiveAfterWh: {
        explanation: "Question words (wh-words) can be followed by infinitives to express uncertainty or indirect questions.",
        pattern: "Verb + wh-word + to-infinitive",
        examples: [
          "I don't know what to do.",
          "She explained how to fix the problem.",
          "We decided when to leave.",
          "He showed me where to find it.",
          "They discussed which route to take.",
        ],
        commonWhWords: ["what", "how", "when", "where", "which", "who", "whom", "whether"],
      },
      tooAndEnough: {
        explanation: "The structures 'too...to' and 'enough...to' express degree and ability to perform actions.",
        patterns: [
          "too + adjective/adverb + to + infinitive",
          "adjective/adverb + enough + to + infinitive",
          "enough + noun + to + infinitive"
        ],
        examples: [
          "The coffee is too hot to drink.",
          "She's old enough to drive.",
          "We have enough time to finish.",
          "He spoke too quietly to hear.",
          "The room is big enough to hold everyone.",
        ],
        commonMistakes: [
          "❌ He is enough tall → ✅ He is tall enough",
          "❌ Too much expensive → ✅ Too expensive",
        ],
      },
      inOrderTo: {
        explanation: "This formal structure explicitly shows purpose and is preferred in academic and professional contexts.",
        pattern: "Subject + verb + in order to + infinitive",
        examples: [
          "She left early in order to avoid traffic.",
          "We saved money in order to buy a house.",
          "He studied abroad in order to improve his English.",
          "They invested in technology in order to increase efficiency.",
        ],
        alternatives: ["so as to", "with the aim of", "with a view to", "for the purpose of"],
      },
    },
    C1_C2: {
      causativeStructures: {
        explanation:
          "Verbs like 'make', 'let', and 'have' can use the base infinitive in causative constructions. These structures show that someone causes another person to do something.",
        bareInfinitiveVerbs: [
          "make",
          "let",
          "have",
          "help (AmE can use both forms)",
        ],
        patterns: [
          "Subject + make + object + base infinitive",
          "Subject + let + object + base infinitive",
          "Subject + have + object + base infinitive",
        ],
        examples: [
          "They made me leave.",
          "She let him borrow the car.",
          "I had the assistant send the email.",
          "The teacher made us rewrite the essay.",
          "Please let me know the result.",
        ],
      },
      perceptionVerbs: {
        explanation:
          "Verbs of perception (see, hear, watch, etc.) can be followed by object + base infinitive or -ing. The infinitive shows the complete action.",
        examples: [
          "I saw him cross the street.",
          "We heard her sing.",
          "They watched the children play.",
          "I felt the building shake.",
        ],
      },
      infinitiveAfterQuestionWords: {
        explanation:
          "Infinitives can follow question words (what, how, when, etc.) in sophisticated constructions.",
        pattern: "Verb + question word + to-infinitive",
        examples: [
          "I don't know what to do.",
          "He explained how to fix the car.",
          "She asked when to leave.",
          "We discussed where to meet.",
          "They decided which path to take.",
        ],
      },
      passiveInfinitive: {
        explanation:
          "The passive form of the infinitive is 'to be + past participle'. Used when the focus is on the action being done to someone/something.",
        pattern: "to be + V3",
        examples: [
          "She wants to be promoted.",
          "The work needs to be done.",
          "He expects to be chosen.",
          "The document appears to be completed.",
        ],
      },
      perfectInfinitive: {
        explanation: "Used to refer to an earlier time than the main verb. Shows that the infinitive action happened before the main action.",
        pattern: "to have + past participle",
        examples: [
          "He seems to have forgotten.",
          "She claimed to have seen it before.",
          "They appear to have left already.",
          "I'm glad to have met you.",
        ],
      },
      modalPerfectInfinitive: {
        explanation:
          "Modal + have + past participle expresses regret, possibility, or deduction about past events.",
        examples: [
          "You should have called me.",
          "They might have left.",
          "She could have been hurt.",
          "We would have helped.",
        ],
      },
      advancedReportingStructures: {
        explanation:
          "Reporting verbs may take different infinitive structures depending on the meaning and formality level.",
        patterns: ["verb + to-infinitive", "verb + object + to-infinitive"],
        examples: [
          "They claimed to know the answer.",
          "He advised her to wait.",
          "She reported to have seen the incident.",
          "The witnesses alleged him to be present.",
        ],
      },
      continuousInfinitive: {
        explanation: "Shows that an action is in progress at the time referenced by the main verb.",
        pattern: "to be + V-ing",
        examples: [
          "He seems to be working hard.",
          "She appears to be sleeping.",
          "They claim to be studying.",
          "I happened to be walking by.",
        ],
      },
      perfectContinuousInfinitive: {
        explanation: "Combines perfect and continuous aspects, showing duration leading up to a point in time.",
        pattern: "to have been + V-ing",
        examples: [
          "She seems to have been working all night.",
          "He claims to have been waiting for hours.",
          "They appear to have been planning this for months.",
        ],
      },
      splitInfinitives: {
        explanation: "Placing an adverb between 'to' and the verb. Once considered incorrect, now widely accepted in modern English.",
        examples: [
          "To boldly go where no one has gone before.",
          "We decided to carefully consider the options.",
          "She promised to never forget.",
        ],
        modernUsage: [
          "Accepted in most style guides",
          "Common in everyday speech",
          "Used for emphasis or natural rhythm",
        ],
      },
    },
  },
  specialNotes: {
    differenceToGerunds:
      "Some verbs can take both infinitives and gerunds with different meanings (e.g. 'remember to do' vs. 'remember doing'). The infinitive usually refers to future or potential actions, while gerunds refer to past or completed actions.",
    verbListOverlap: {
      dualUsageVerbs: {
        verbs: ["remember", "stop", "forget", "try", "go on", "regret", "mean", "like", "hate", "prefer"],
        examples: {
          remember: [
            "Remember to lock the door. (future action)",
            "I remember locking the door. (past memory)",
          ],
          stop: [
            "He stopped to smoke. (purpose)",
            "He stopped smoking. (quit habit)",
          ],
          forget: [
            "Don't forget to call. (future action)",
            "I forgot calling him. (past action)",
          ],
          try: [
            "Try to open it. (attempt)",
            "Try opening it. (experiment)",
          ],
        },
      },
    },
    infinitiveVsBareInfinitive: {
      explanation:
        "Some verbs use 'to-infinitive', others use 'bare infinitive'. The choice depends on the main verb and the intended meaning.",
      toInfinitive: ["want to go", "plan to study", "need to eat", "hope to succeed"],
      bareInfinitive: [
        "make me cry",
        "let him go",
        "help me do (AmE: help me do / to do)",
        "watch them play",
      ],
    },
    registerAndStyle: {
      formal: ["in order to", "so as to", "with a view to", "for the purpose of"],
      informal: ["to", "gonna", "wanna"],
      academic: ["aimed to", "intended to", "designed to", "purported to"],
    },
    crossLinguisticInfluence: {
      explanation: "Learners from different language backgrounds may have specific difficulties with infinitive patterns.",
      commonL1Interferences: [
        "Romance language speakers: overuse of infinitives where gerunds are needed",
        "Germanic language speakers: confusion with word order in infinitive clauses",
        "Asian language speakers: difficulty with the concept of infinitive vs. bare infinitive",
      ],
    },
  },
  commonMistakes: {
    incorrectUse: [
      "❌ I want go home. → ✅ I want to go home.",
      "❌ She made me to cry. → ✅ She made me cry.",
      "❌ He is enough old. → ✅ He is old enough.",
      "❌ For to understand this. → ✅ To understand this.",
    ],
    confusionWithGerunds: [
      "❌ I stopped to smoke. (if you mean quitting smoking) → ✅ I stopped smoking.",
      "❌ I remember to meet him. (if talking about past) → ✅ I remember meeting him.",
    ],
    bareVsToInfinitive: [
      "❌ Let me to help you. → ✅ Let me help you.",
      "❌ I want you help me. → ✅ I want you to help me.",
    ],
    wordOrder: [
      "❌ I don't know to do what. → ✅ I don't know what to do.",
      "❌ She told to me leave. → ✅ She told me to leave.",
    ],
    prepositionErrors: [
      "❌ I'm looking forward to meet you. → ✅ I'm looking forward to meeting you.",
      "❌ In order for to succeed. → ✅ In order to succeed.",
    ],
  },
  tips: {
    mnemonic:
      "Remember: 'to' is like an arrow pointing toward the goal/action (to go, to eat).",
    learnWithExamples:
      "Always learn verbs with the structure they take (e.g., 'ask someone to do', not just 'ask').",
    dictionaryHelp:
      "Use learner dictionaries (e.g., Cambridge, Oxford) to check the pattern with verbs.",
    practiceStrategies: [
      "Create verb pattern lists and practice daily",
      "Use gap-fill exercises with infinitive patterns",
      "Practice with authentic materials like news articles",
      "Record yourself using different patterns",
    ],
    memoryTechniques: [
      "Group verbs by similar patterns",
      "Use visual associations for verb + infinitive combinations",
      "Create story chains using multiple infinitive patterns",
      "Practice with sentence transformations",
    ],
  },
  references: [
    "Cambridge Grammar in Use (Intermediate and Advanced) by Raymond Murphy",
    "Oxford Learner's Grammar Builder by John Eastwood",
    "Longman English Grammar Practice by L.G. Alexander",
    "Practical English Usage by Michael Swan (4th Edition)",
    "A Comprehensive Grammar of the English Language by Quirk, Greenbaum, Leech & Svartvik",
    "The Cambridge Grammar of the English Language by Huddleston & Pullum",
    "English Grammar: A University Course by Angela Downing & Philip Locke",
    "Understanding and Using English Grammar by Betty Schrampfer Azar",
  ],
  reducedInfinitiveStructures: {
    explanation:
      "In formal writing or academic contexts, infinitive clauses can be reduced to save space and create more sophisticated structures.",
    patterns: [
      "The first/second/next/only person + to + verb",
      "Noun + to + verb (explains purpose or function)",
      "Something/Someone + to + verb (reduced relative clause)",
    ],
    examples: [
      "She was the only person to survive the crash.",
      "He has a lot of work to do.",
      "The first runner to cross the line wins.",
      "This is the book to read for the exam.",
    ],
    notes: "This structure replaces longer relative clauses or descriptive phrases, making writing more concise.",
  },
  infinitiveWithPrepositions: {
    explanation: "Some structures use prepositions combined with to-infinitives for specific meanings.",
    patterns: [
      "in order to + V",
      "so as to + V",
      "be about to + V",
      "be ready to + V",
      "with a view to + V-ing (exception: uses V-ing)",
      "be due to + V",
    ],
    examples: [
      "He left early in order to catch the train.",
      "They studied hard so as to pass the exam.",
      "She is about to leave.",
      "He left with a view to starting a new life.",
      "The plane is due to arrive at 6 PM.",
    ],
  },
  infinitiveInFormalDefinitions: {
    explanation:
      "In academic writing, to-infinitives are used to describe function or purpose in definitions.",
    examples: [
      "A thermometer is a device used to measure temperature.",
      "The purpose of education is to develop critical thinking.",
      "A catalyst is something used to speed up a chemical reaction.",
      "Democracy is a system designed to represent the people.",
    ],
    usageNote:
      "Very common in IELTS Writing Task 2, Academic Writing, and Definitions in Science/Technology fields.",
  },
  infinitivesWithTooAndEnough: {
    explanation: "Structures using 'too' and 'enough' before to-infinitive to express degree and possibility.",
    patterns: ["too + adj/adv + to + verb", "adj/adv + enough + to + verb", "enough + noun + to + verb"],
    examples: [
      "The box is too heavy to carry.",
      "She's smart enough to understand it quickly.",
      "We have enough money to buy the house.",
      "He ran too slowly to win the race.",
    ],
    commonMistakes: [
      "❌ He is enough tall to play basketball. → ✅ He is tall enough to play basketball.",
      "❌ It's too much difficult. → ✅ It's too difficult.",
    ],
  },
  subjectInfinitives: {
    explanation:
      "To-infinitive can function as the subject of a sentence, especially in formal writing.",
    patterns: ["To + verb + (rest of sentence)"],
    examples: [
      "To err is human.",
      "To succeed in life requires hard work and perseverance.",
      "To travel the world has always been my dream.",
      "To master a language takes years of practice.",
    ],
    formalRegisterNote:
      "Very formal register – commonly used in literature, essays, speeches, and academic writing.",
  },
  extraposedInfinitiveSubjects: {
    explanation:
      "To-infinitive as subject can be moved to the end of the sentence, with 'it' as a placeholder subject for better sentence flow.",
    pattern: "It + be + adj/noun + to + verb",
    examples: [
      "It is important to stay focused.",
      "It was a mistake to ignore the signs.",
      "It's a pleasure to meet you.",
      "It's essential to practice regularly.",
    ],
    grammarNote:
      "This structure avoids starting sentences with long infinitive phrases, making them easier to read.",
  },
  infinitiveInFixedPhrases: {
    explanation: "Certain fixed phrases and expressions use infinitives as discourse markers.",
    phrases: [
      "to tell (you) the truth",
      "to be honest",
      "to begin with",
      "to put it mildly",
      "to sum up",
      "to be fair",
      "to make matters worse",
      "so to speak",
    ],
    examples: [
      "To be honest, I didn't enjoy the film.",
      "To tell you the truth, I forgot the meeting.",
      "To put it mildly, she was not happy.",
      "To sum up, we need more time.",
    ],
    usageContext:
      "Commonly used in formal speech, essay writing, presentations, and discussions.",
  },
  pseudoInfinitiveWithWhyNot: {
    explanation: "Bare infinitive after 'Why not...?' functions as a gentle suggestion or proposal.",
    pattern: "Why not + bare infinitive",
    examples: [
      "Why not go now?",
      "Why not try something new?",
      "Why not take a break?",
      "Why not ask for help?",
    ],
    levelNote:
      "Simple structure but carries nuanced meaning of gentle encouragement – common in spoken English.",
  },
  advancedStructures: {
    forSbToDoStructure: {
      explanation: "The 'for + object + to-infinitive' structure shows who performs the action in formal contexts.",
      pattern: "for + object + to + infinitive",
      examples: [
        "It's important for students to practice daily.",
        "For him to succeed would be amazing.",
        "We arranged for them to meet us there.",
        "It's time for us to leave.",
      ],
      formalUsage: [
        "Common in academic writing",
        "Used in formal instructions",
        "Preferred in business communication",
      ],
    },
    subjectRaisingVerbs: {
      explanation: "Verbs that appear to take an infinitive complement but actually raise the subject from the embedded clause.",
      verbs: ["seem", "appear", "happen", "tend", "prove", "turn out"],
      examples: [
        "She seems to be happy. (It seems that she is happy)",
        "He appears to have left. (It appears that he has left)",
        "They happened to be there. (It happened that they were there)",
      ],
      comparison: "Different from object-control verbs like 'want', 'ask', 'tell'",
    },
    objectRaisingVerbs: {
      explanation: "Verbs that take an object which becomes the subject of the infinitive clause.",
      verbs: ["believe", "consider", "expect", "find", "know", "prove", "think"],
      examples: [
        "I believe him to be honest.",
        "We consider this to be important.",
        "They proved the theory to be correct.",
      ],
      comparison: "The object of the main verb is the subject of the infinitive",
    },
    infinitiveInConditionals: {
      explanation: "Infinitives can appear in conditional structures, especially in formal or literary contexts.",
      patterns: [
        "If + subject + were + to + infinitive",
        "Should + subject + infinitive (inversion)",
        "Were + subject + to + infinitive (formal inversion)",
      ],
      examples: [
        "If you were to ask me, I'd say no.",
        "Should you need help, please call.",
        "Were we to leave now, we'd arrive on time.",
      ],
      advancedUsage: [
        "Common in legal and formal documents",
        "Used for hypothetical situations",
        "Creates formal, sophisticated tone",
      ],
    },
  },
  culturalAndContextualUsage: {
    businessEnglish: [
      "We aim to increase profits.",
      "The company plans to expand internationally.",
      "I'd like to schedule a meeting.",
      "We need to discuss the proposal.",
    ],
    academicWriting: [
      "This study aims to investigate...",
      "The research seeks to understand...",
      "The author attempts to explain...",
      "The purpose is to analyze...",
    ],
    legalLanguage: [
      "The defendant is alleged to have committed...",
      "The contract requires the parties to...",
      "The court ordered him to pay...",
      "She is entitled to receive...",
    ],
    technicalWriting: [
      "The system is designed to process...",
      "This function serves to calculate...",
      "The device is programmed to respond...",
      "The software allows users to...",
    ],
  },
  dialectalVariations: {
    britishVsAmerican: {
      differences: [
        "BrE: different from/to vs AmE: different from/than",
        "Help + infinitive: AmE prefers bare infinitive, BrE accepts both",
        "Prevent + object + from + -ing vs prevent + object + infinitive (rare)",
      ],
      examples: [
        "BrE: Help me (to) carry this. / AmE: Help me carry this.",
        "BrE: different to/from you / AmE: different from/than you",
      ],
    },
    regionalVariations: [
      "Some dialects use 'for to' instead of 'to' in certain contexts",
      "Scots English may use 'till' where Standard English uses 'to'",
      "Irish English sometimes uses infinitive where Standard English uses gerund",
    ],
  },
};

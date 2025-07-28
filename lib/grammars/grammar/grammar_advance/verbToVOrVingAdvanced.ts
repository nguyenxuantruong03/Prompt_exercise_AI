import { verbToVOrVingAdvancedType } from "@/types/grammars/grammar/grammar_advance/verbToVOrVingAdvanced";

export const verbToVOrVingAdvancedData: verbToVOrVingAdvancedType = {
  topic: "Verb + to V / V-ing (Advanced Usage)",
  level: "A1-C2",
  description:
    "This comprehensive topic explores how verbs are followed by either the to-infinitive or the -ing form, including distinctions in meaning, fixed patterns, exceptions, and advanced cases across all proficiency levels.",
  definition:
    "Verb patterns with infinitives (to + base verb) and gerunds (-ing forms) are fundamental grammatical structures that determine how verbs combine with other verbs. These patterns affect meaning, formality, and grammatical correctness in English communication.",
  importance:
    "Mastering verb + infinitive/gerund patterns is crucial for: expressing intentions and plans, describing experiences and preferences, academic and professional writing, achieving native-like fluency, and passing standardized English exams (IELTS, TOEFL, Cambridge).",

  levelBreakdown: [
    {
      level: "A1",
      focus: [
        "Basic want/like patterns",
        "Simple infinitive structures",
        "Basic modal verbs",
      ],
      keyVerbs: ["want", "like", "need", "can", "must", "will"],
      structures: ["want to + verb", "like + -ing", "need to + verb"],
      learningObjectives: [
        "Use 'want to' for expressing desires",
        "Use 'like + -ing' for preferences",
        "Form basic infinitive sentences",
        "Understand modal + base verb patterns",
      ],
    },
    {
      level: "A2",
      focus: [
        "Extended verb patterns",
        "Future plans",
        "Preferences and dislikes",
      ],
      keyVerbs: ["hope", "plan", "decide", "enjoy", "hate", "love", "prefer"],
      structures: [
        "hope to + verb",
        "plan to + verb",
        "enjoy + -ing",
        "hate + -ing",
      ],
      learningObjectives: [
        "Express future intentions with 'plan to'",
        "Show preferences with 'prefer + -ing'",
        "Use 'hope to' for wishes",
        "Form negative patterns correctly",
      ],
    },
    {
      level: "B1",
      focus: ["Meaning changes", "Object + infinitive", "Common mistakes"],
      keyVerbs: ["remember", "forget", "stop", "try", "ask", "tell", "advise"],
      structures: ["verb + object + to-infinitive", "remember/forget + to/ing"],
      learningObjectives: [
        "Understand meaning differences (remember to do vs doing)",
        "Use object + infinitive patterns",
        "Avoid common mistakes with suggest/recommend",
        "Master stop/try meaning changes",
      ],
    },
    {
      level: "B2",
      focus: ["Advanced patterns", "Perception verbs", "Formal structures"],
      keyVerbs: ["manage", "avoid", "consider", "imagine", "allow", "permit"],
      structures: [
        "perception verb + object + -ing/infinitive",
        "formal recommendations",
      ],
      learningObjectives: [
        "Use perception verbs correctly",
        "Handle allow/permit patterns",
        "Master advanced gerund patterns",
        "Understand causative structures",
      ],
    },
    {
      level: "C1",
      focus: [
        "Complex structures",
        "Academic writing",
        "Subtle meaning differences",
      ],
      keyVerbs: [
        "undertake",
        "endeavor",
        "refrain",
        "contemplate",
        "acknowledge",
      ],
      structures: [
        "complex infinitive phrases",
        "passive infinitives",
        "perfect infinitives",
      ],
      learningObjectives: [
        "Use passive and perfect infinitives",
        "Master academic verb patterns",
        "Handle complex sentence structures",
        "Use formal alternatives appropriately",
      ],
    },
    {
      level: "C2",
      focus: [
        "Native-like usage",
        "Idiomatic expressions",
        "Style and register",
      ],
      keyVerbs: ["sophisticated academic and literary verbs"],
      structures: ["advanced literary patterns", "complex embedded structures"],
      learningObjectives: [
        "Achieve native-like fluency",
        "Master literary and academic styles",
        "Use sophisticated vocabulary patterns",
        "Handle complex embedded structures",
      ],
    },
  ],

  patterns: [
    {
      name: "A1-A2: Basic Verb + to V (infinitive)",
      definition:
        "The infinitive form (to + base verb) is used after certain verbs to express purpose, intention, future plans, or desires.",
      usage:
        "Used after basic verbs to express wants, needs, plans, and future actions. This is the foundation of English verb patterns.",
      examples: [
        "I want **to learn** English. (desire)",
        "She needs **to study** harder. (necessity)",
        "They plan **to visit** London. (future intention)",
        "He hopes **to pass** the exam. (wish)",
        "We decided **to leave** early. (decision)",
      ],
      verbs: [
        "want",
        "need",
        "like",
        "hope",
        "plan",
        "decide",
        "try",
        "learn",
        "begin",
        "start",
        "continue",
        "prefer",
        "choose",
        "agree",
        "refuse",
        "promise",
        "seem",
        "appear",
        "happen",
        "manage",
        "afford",
        "offer",
      ],
      notes: [
        "Often refers to **future, unreal, or intended actions**.",
        "These are the most common and essential patterns for beginners.",
        "Always use 'to' before the base form of the verb.",
        "Cannot be used in continuous forms: *I am wanting to go* (incorrect)",
      ],
      level: "A1-A2",
      formalUsage: [
        "I intend to complete the project by Friday.",
        "We aim to achieve better results this quarter.",
      ],
      informalUsage: [
        "I wanna go home. (want to → wanna in spoken English)",
        "Gonna see you later. (going to → gonna)",
      ],
    },
    {
      name: "A1-A2: Basic Verb + V-ing (gerund)",
      definition:
        "The gerund (-ing form) is used after certain verbs to express ongoing actions, habits, experiences, or general activities.",
      usage:
        "Used after specific verbs to express activities, experiences, preferences, and completed or ongoing actions.",
      examples: [
        "I enjoy **reading** books. (general activity)",
        "She likes **swimming** in the ocean. (preference)",
        "He finished **writing** the report. (completed action)",
        "They avoid **eating** fast food. (habitual avoidance)",
        "We keep **trying** different methods. (continuous action)",
      ],
      verbs: [
        "like",
        "love",
        "hate",
        "enjoy",
        "finish",
        "stop",
        "keep",
        "start",
        "avoid",
        "miss",
        "mind",
        "practice",
        "suggest",
        "recommend",
      ],
      notes: [
        "Used when the action is **real, completed, habitual, or general**.",
        "Gerunds can act as nouns in sentences.",
        "After prepositions, always use -ing: 'good at dancing', 'interested in learning'",
        "Some verbs only take -ing forms, never infinitives.",
      ],
      level: "A1-A2",
      formalUsage: [
        "I appreciate your taking the time to meet with me.",
        "The company prohibits smoking on the premises.",
      ],
      informalUsage: [
        "Love dancing to this music!",
        "Hate waiting in long lines.",
      ],
    },
    {
      name: "B1: Verb + object + to V",
      definition:
        "This pattern includes an object (person/thing) between the main verb and the infinitive, often indicating that someone is being asked, told, or caused to do something.",
      usage:
        "Used when the verb takes an object (noun/pronoun) before the to-infinitive, typically in causative or request structures.",
      examples: [
        "She asked **me to help** her with homework. (request)",
        "They told **him to wait** outside. (instruction)",
        "I want **you to understand** this concept. (desire about someone else)",
        "The teacher encouraged **us to participate** more. (motivation)",
        "His parents forced **him to study** medicine. (compulsion)",
      ],
      verbs: [
        "ask",
        "tell",
        "want",
        "need",
        "expect",
        "advise",
        "allow",
        "permit",
        "encourage",
        "force",
        "help",
        "teach",
        "remind",
        "warn",
        "invite",
        "order",
        "persuade",
        "convince",
        "cause",
        "enable",
        "require",
      ],
      notes: [
        "The object is essential - you cannot remove it without changing meaning.",
        "`allow` and `permit` require object + to V. Without object, use V-ing.",
        "Common in instructions, requests, and causative structures.",
        "Very frequent in reported speech: 'He told me to call you.'",
      ],
      level: "B1",
      commonErrors: [
        {
          error: "She said me to come.",
          correct: "She told me to come.",
          note: "'Say' cannot be followed by object + infinitive. Use 'tell' instead.",
        },
        {
          error: "I want that you understand.",
          correct: "I want you to understand.",
          note: "Don't use 'that' in this pattern.",
        },
      ],
    },
    {
      name: "B1-C1: Verbs with Meaning Changes (Critical Patterns)",
      definition:
        "Specific verbs that can be followed by either to-infinitive or gerund, but with distinct meanings depending on the choice.",
      usage:
        "These verbs create completely different meanings based on whether they're followed by to V or V-ing. Critical for intermediate to advanced levels.",
      examples: [
        "I stopped **to smoke** a cigarette. (paused to do something)",
        "I stopped **smoking** last year. (quit the habit)",
        "Remember **to lock** the door tonight. (don't forget to do it)",
        "I remember **locking** the door yesterday. (recall doing it)",
        "Try **to be** on time. (make an effort)",
        "Try **calling** him instead of texting. (experiment with a different method)",
      ],
      verbs: [
        {
          verb: "remember",
          toV: "Remember **to do** = remember before doing (don't forget)",
          ving: "Remember **doing** = recall after doing (have a memory)",
          examples: [
            "Remember to call mom.",
            "I remember calling her yesterday.",
          ],
        },
        {
          verb: "forget",
          toV: "Forget **to do** = you don't do it because you forgot",
          ving: "Forget **doing** = you don't remember that you did it",
          examples: ["I forgot to buy milk.", "I'll never forget meeting you."],
        },
        {
          verb: "stop",
          toV: "Stop **to do** = pause in order to do something else",
          ving: "Stop **doing** = cease the activity completely",
          examples: ["I stopped to rest.", "I stopped running."],
        },
        {
          verb: "try",
          toV: "Try **to do** = make an effort, attempt",
          ving: "Try **doing** = experiment, test a different approach",
          examples: ["Try to understand.", "Try using a different method."],
        },
        {
          verb: "go on",
          toV: "Go on **to do** = do something different next",
          ving: "Go on **doing** = continue the same activity",
          examples: [
            "After lunch, we went on to discuss the budget.",
            "He went on talking for hours.",
          ],
        },
        {
          verb: "mean",
          toV: "Mean **to do** = intend, plan",
          ving: "Mean **doing** = involve, require",
          examples: [
            "I meant to call you.",
            "This job means working weekends.",
          ],
        },
        {
          verb: "regret",
          toV: "Regret **to do** = be sorry to (formal announcements)",
          ving: "Regret **doing** = be sorry about something you did",
          examples: [
            "I regret to inform you...",
            "I regret saying those words.",
          ],
        },
      ],
      level: "B1-C1",
      notes: [
        "These distinctions are **critical for Cambridge exams, IELTS, and TOEFL**.",
        "Memorize these patterns as they're frequently tested.",
        "Practice with context to understand the meaning differences clearly.",
      ],
    },
  ],

  comprehensiveRules: {
    basicRules: [
      "Verbs like 'want', 'need', 'hope' are followed by to-infinitive",
      "Verbs like 'enjoy', 'finish', 'avoid' are followed by -ing form",
      "After prepositions, always use -ing form: 'interested in learning'",
      "Modal verbs (can, must, will) are followed by bare infinitive (no 'to')",
    ],
    intermediateRules: [
      "Some verbs change meaning with to V vs -ing: remember, forget, stop, try",
      "Perception verbs can take object + bare infinitive or object + -ing",
      "Causative verbs: make/let + object + bare infinitive, get + object + to V",
      "After 'allow' and 'permit': with object use to V, without object use -ing",
    ],
    advancedRules: [
      "Perfect infinitives express completed actions: 'to have done'",
      "Passive infinitives: 'to be done' for passive relationships",
      "Negative infinitives: 'not to do' (not comes before 'to')",
      "In reported speech, infinitives often replace direct commands",
    ],
    exceptionsAndSpecialCases: [
      "'Help' can be followed by to V or bare infinitive: 'help (to) do'",
      "After 'why' questions, use bare infinitive: 'Why not go?'",
      "In passive constructions, bare infinitives become to-infinitives",
      "Some verbs have different patterns in British vs American English",
    ],
  },

  commonMistakesByLevel: {
    "A1-A2": [
      {
        error: "I like to swimming.",
        correct: "I like swimming.",
        note: "'Like' for general preferences takes -ing, not to-infinitive.",
      },
      {
        error: "I want going.",
        correct: "I want to go.",
        note: "'Want' always requires to-infinitive.",
      },
    ],
    "B1-B2": [
      {
        error: "I stopped to smoke.",
        correct: "I stopped smoking.",
        note: "If you quit smoking, use 'stopped smoking'. 'Stopped to smoke' means you paused to have a cigarette.",
      },
      {
        error: "She suggested to meet.",
        correct: "She suggested meeting.",
        note: "'Suggest' never takes to-infinitive; always use -ing form.",
      },
    ],
    "C1-C2": [
      {
        error: "The work seems to complete.",
        correct: "The work seems to have been completed.",
        note: "Use perfect passive infinitive for completed passive actions.",
      },
      {
        error: "I appreciate to have this opportunity.",
        correct: "I appreciate having this opportunity.",
        note: "'Appreciate' takes -ing form, not infinitive.",
      },
    ],
  },

  advancedTips: [
    {
      tip: "In formal writing, use 'recommend that + subject + base verb' instead of 'recommend + -ing'",
      example:
        "I recommend that he study more. (vs. I recommend studying more.)",
      level: "C1",
      formalUsage: true,
    },
    {
      tip: "Avoid split infinitives in formal writing",
      example: "to boldly go → better: to go boldly",
      level: "C1",
      formalUsage: true,
    },
    {
      tip: "After prepositions, always use V-ing",
      example: "I'm good at drawing. (not: good at to draw)",
      level: "B1",
    },
    {
      tip: "Use perfect infinitives to show time relationships",
      example:
        "She claims to have finished yesterday. (finished before claiming)",
      level: "C2",
    },
    {
      tip: "In academic writing, prefer infinitive constructions for formality",
      example: "The aim of this study is to investigate... (formal)",
      level: "C1",
      formalUsage: true,
    },
  ],

  practicalApplications: {
    academicWriting: [
      "Use infinitives for aims and objectives: 'This study aims to investigate...'",
      "Employ gerunds for discussing methodology: 'Data was collected by interviewing participants'",
      "Use perfect infinitives for expressing completed actions: 'The results appear to have confirmed our hypothesis'",
      "Utilize passive infinitives in formal statements: 'The paper is expected to be published next year'",
    ],
    businessCommunication: [
      "Professional requests: 'I would like to request a meeting'",
      "Proposals and suggestions: 'I suggest implementing new procedures'",
      "Reporting and updates: 'We managed to complete the project on time'",
      "Formal announcements: 'The company regrets to announce restructuring plans'",
    ],
    everydayConversation: [
      "Expressing preferences: 'I prefer walking to driving'",
      "Making plans: 'We decided to go to the beach'",
      "Describing experiences: 'I remember visiting that place before'",
      "Giving advice: 'You should try talking to him directly'",
    ],
    formalSpeaking: [
      "Presentations: 'I intend to demonstrate the effectiveness of this approach'",
      "Speeches: 'We endeavor to create a better future for all'",
      "Interviews: 'I am seeking to develop my skills in this field'",
      "Academic discourse: 'The evidence suggests having significant implications'",
    ],
  },

  crossReferences: {
    relatedTopics: [
      "Modal Verbs and Semi-modals",
      "Reported Speech Patterns",
      "Conditional Sentences",
      "Passive Voice Structures",
      "Subjunctive Mood",
      "Phrasal Verbs with Particles",
      "Causative Constructions",
      "Perfect Tenses and Aspects",
    ],
    prerequisiteKnowledge: [
      "Basic verb tenses (present, past, future)",
      "Understanding of subjects and objects",
      "Basic sentence structure",
      "Present and past participles",
      "Modal verbs (can, must, should, etc.)",
    ],
    nextSteps: [
      "Advanced conditional structures",
      "Subjunctive mood in formal writing",
      "Complex sentence patterns",
      "Advanced reported speech",
      "Literary and academic writing styles",
      "Idiomatic expressions with infinitives and gerunds",
    ],
  },

  references: {
    books: [
      "English Grammar in Use (Intermediate) – Raymond Murphy (Cambridge University Press) - Essential for B1-B2 levels with clear explanations and practice",
      "Advanced Grammar in Use – Martin Hewings (Cambridge University Press) - Comprehensive C1-C2 level grammar with detailed verb patterns",
      "Practical English Usage – Michael Swan (Oxford University Press) - Authoritative reference covering all aspects including verb patterns",
      "A Comprehensive Grammar of the English Language – Quirk, Greenbaum, Leech & Svartvik (Longman) - Academic reference for advanced study",
      "The Grammar Book: Form, Meaning, and Use for English Language Teachers – Celce-Murcia & Larsen-Freeman - Teaching methodology and detailed analysis",
      "Oxford Modern English Grammar – Bas Aarts (Oxford University Press) - Contemporary approach to English grammar patterns",
      "Cambridge Grammar of English – Carter & McCarthy (Cambridge University Press) - Corpus-based grammar covering spoken and written patterns",
    ],
    websites: [
      "https://learnenglish.britishcouncil.org/grammar - British Council comprehensive grammar guides with verb patterns",
      "https://www.perfect-english-grammar.com/gerunds-and-infinitives.html - Detailed explanations with examples and exercises",
      "https://www.englishpage.com/gerunds/gerunds_infinitives_intro.html - Interactive lessons on gerunds and infinitives",
      "https://www.grammarly.com/blog/infinitive-gerund/ - Modern usage examples and explanations",
      "https://dictionary.cambridge.org/grammar/british-grammar/verb-patterns - Cambridge Dictionary grammar section",
      "https://www.bbc.co.uk/learningenglish/english/features/6-minute-grammar - BBC Learning English grammar features",
    ],
    onlineResources: [
      "EnglishClub.com Gerunds and Infinitives section - Free comprehensive lessons",
      "EF Education First Grammar Guide - Structured lessons by level",
      "FluentU Grammar Blog - Real-world examples from authentic content",
      "Purdue OWL (Online Writing Lab) - Academic writing applications",
      "Lingoda Grammar Courses - Structured online learning with certified teachers",
      "Coursera 'English Grammar and Style' courses - University-level instruction",
    ],
    academicSources: [
      "Huddleston, R. & Pullum, G. K. (2002). The Cambridge Grammar of the English Language - Authoritative academic reference",
      "Biber, D., et al. (1999). Longman Grammar of Spoken and Written English - Corpus-based analysis of verb patterns",
      "Carter, R. & McCarthy, M. (2006). Cambridge Grammar of English - Comprehensive academic grammar",
      "Greenbaum, S. (1996). Oxford English Grammar - Detailed linguistic analysis",
      "Palmer, F. R. (1988). The English Verb - Specialized study of English verb systems",
    ],
    examPreparation: [
      "Cambridge English Grammar for CAE and CPE - Official preparation materials",
      "IELTS Grammar Masterclass - Focus on advanced structures for bands 7-9",
      "TOEFL Grammar Flash - Essential patterns for TOEFL success",
      "Barron's TOEIC Grammar and Vocabulary - Business English patterns",
      "Oxford Preparation Course for TOEFL - Academic writing applications",
      "Complete CAE Student's Book - Advanced level exam preparation",
    ],
  },
};

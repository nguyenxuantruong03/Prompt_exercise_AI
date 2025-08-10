import { CausativeVerbsType } from "@/types/grammars/grammar/verb_special/causative_verbs";

export const CausativeVerbsData: CausativeVerbsType = {
  id: 57,
  definition: {
    simple:
      "Causative verbs are used when one person causes another person to do something.",
    extended:
      "Causative verbs express an action that someone causes to happen, rather than doing it themselves. These verbs often reflect influence, permission, persuasion, or obligation.",
    academic:
      "Causative constructions are grammatical structures that encode the semantics of causation, where an agent causes another agent to perform an action, typically using a causative verb or phrase.",
    linguistic:
      "Causative constructions represent a morphosyntactic phenomenon where the grammatical subject (the causer) initiates an event that is carried out by another participant (the causee), involving complex argument structure realizations and semantic role assignments.",
    comprehensive:
      "Causative verbs constitute a fundamental grammatical category that expresses the relationship between an initiator of action and the actual performer, encompassing various degrees of control, volition, and directness. These constructions serve essential communicative functions in delegation, permission-granting, coercion, and service arrangements across all registers of English.",
  },

  causativeVerbs: {
    core_causative_verbs: [
      "make",
      "let",
      "have",
      "get",
      "help",
      "cause",
      "force",
      "allow",
      "permit",
      "compel",
      "encourage",
      "persuade",
      "enable",
      "motivate",
      "require",
      "oblige",
      "urge",
    ],

    passive_structures: [
      "be made to",
      "be allowed to",
      "be helped to",
      "be required to",
      "be encouraged to",
      "be caused to",
      "be compelled to",
    ],

    academic_and_formal: [
      "trigger",
      "generate",
      "induce",
      "initiate",
      "facilitate",
      "provoke",
      "contribute to",
      "lead to",
      "result in",
    ],

    informal_and_spoken: [
      "get someone to",
      "have someone do",
      "let someone do",
      "make someone do",
      "help someone do",
      "talk someone into",
      "talk someone out of",
    ],

    causative_with_objects: [
      "get something done",
      "have something done",
      "make someone do something",
      "let someone do something",
      "help someone do something",
    ],

    causative_idioms: [
      "bring about change",
      "set in motion",
      "bring to light",
      "push someone over the edge",
      "light a fire under someone",
    ],

    specialized_registers: [
      "authorize",
      "commission",
      "delegate",
      "mandate",
      "empower",
      "entitle",
      "sanction",
      "warrant",
      "necessitate",
      "precipitate",
    ],

    archaic_and_literary: [
      "bid",
      "beseech",
      "enjoin",
      "impel",
      "prevail upon",
      "vouchsafe",
      "ordain",
      "decree",
    ],
  },

  core_verbs: [
    "make",
    "have",
    "get",
    "let",
    "help",
    "allow",
    "force",
    "cause",
    "compel",
    "permit",
    "enable",
    "require",
    "urge",
    "convince",
    "encourage",
  ],

  foundational_structures: {
    make: "Subject + make + object + bare infinitive",
    have: "Subject + have + object + bare infinitive (active) / past participle (passive)",
    get: "Subject + get + object + to-infinitive (active) / past participle (passive)",
    let: "Subject + let + object + bare infinitive",
    help: "Subject + help + object + bare infinitive / to-infinitive (both accepted)",
  },

  usage_levels: {
    A1: {
      verbs: ["make", "let", "help"],
      examples: [
        "My mom makes me clean my room.",
        "He let me borrow his bike.",
        "She helps her brother do homework.",
        "My teacher makes us sit quietly.",
        "Dad lets me watch TV after dinner.",
        "Can you help me carry this bag?",
      ],
      focus:
        "Basic causative structures with common verbs in everyday contexts.",
      learning_objectives: [
        "Recognize simple causative patterns with make/let/help",
        "Use bare infinitives after make and let",
        "Understand basic cause-effect relationships",
        "Apply in family and school contexts",
      ],
      key_patterns: [
        "Subject + make + object + bare infinitive",
        "Subject + let + object + bare infinitive",
        "Subject + help + object + bare infinitive",
      ],
      common_contexts: [
        "Family rules and chores",
        "School activities",
        "Simple permissions",
        "Basic helping situations",
        "Daily routines",
      ],
    },
    A2: {
      verbs: ["get", "have"],
      examples: [
        "I got my friend to help me.",
        "I had the plumber fix the sink.",
        "She got her parents to buy her a phone.",
        "We had our teacher explain it again.",
        "He got me to change my mind.",
        "They had the mechanic check the car.",
      ],
      focus: "Introduction to 'get' and 'have' as causatives in active forms.",
      learning_objectives: [
        "Distinguish between get + to-infinitive and have + bare infinitive",
        "Use causatives in service/repair contexts",
        "Express persuasion and arrangement",
        "Understand frequency and common usage",
      ],
      key_patterns: [
        "Subject + get + object + to-infinitive",
        "Subject + have + object + bare infinitive",
        "Focus on active causation",
      ],
      common_contexts: [
        "Services and repairs",
        "Persuasion situations",
        "Professional arrangements",
        "Social interactions",
        "Problem-solving scenarios",
      ],
      frequency_notes: [
        "'Get' is more common in spoken English",
        "'Have' is used for services and arrangements",
        "Both are frequent in everyday situations",
      ],
    },
    B1: {
      verbs: ["cause", "force", "allow", "permit"],
      examples: [
        "The storm caused the trees to fall.",
        "His parents forced him to apologize.",
        "The teacher allowed us to leave early.",
        "The company permits employees to work from home.",
        "Bad weather caused the flight to be delayed.",
        "The new law forces drivers to wear seatbelts.",
      ],
      focus:
        "Greater variety of causative verbs with explanations of nuance (permission, obligation, influence).",
      learning_objectives: [
        "Distinguish between different degrees of causation",
        "Use formal and informal causative verbs appropriately",
        "Understand semantic differences (force vs. allow)",
        "Apply in academic and professional contexts",
      ],
      key_patterns: [
        "Subject + cause + object + to-infinitive",
        "Subject + force + object + to-infinitive",
        "Subject + allow/permit + object + to-infinitive",
      ],
      semantic_distinctions: [
        "Force implies strong compulsion",
        "Allow/permit grant permission",
        "Cause indicates natural consequence",
        "Enable suggests providing means/ability",
      ],
      discourse_functions: [
        "Explaining reasons and consequences",
        "Describing rules and regulations",
        "Expressing degrees of obligation",
        "Formal and informal registers",
      ],
    },
    B2: {
      verbs: ["require", "compel", "encourage", "urge"],
      examples: [
        "The rules require students to wear uniforms.",
        "They encouraged her to apply for the job.",
        "The army compelled the citizens to evacuate.",
        "I urge you to reconsider your decision.",
        "The situation requires us to act quickly.",
        "His success encouraged others to try harder.",
      ],
      focus: "Causative verbs in formal, academic, or policy-related language.",
      learning_objectives: [
        "Master formal register causative verbs",
        "Use passive causative constructions",
        "Understand nuanced semantic distinctions",
        "Apply in academic and professional writing",
      ],
      complex_structures: [
        "Embedded causative clauses",
        "Causatives with modal verbs",
        "Passive causative constructions",
        "Causatives in conditional sentences",
      ],
      register_awareness: [
        "Formal vs. informal causative choices",
        "Academic writing preferences",
        "Professional communication standards",
        "Legal and official language",
      ],
      pragmatic_functions: [
        "Diplomatic language and politeness",
        "Authority and power relations",
        "Persuasion and influence strategies",
        "Professional obligation expression",
      ],
    },
    C1: {
      features: [
        "Passive causatives",
        "Complex noun and infinitive combinations",
        "Causative verbs in conditional and reported speech",
        "Advanced semantic distinctions",
        "Stylistic variations",
      ],
      examples: [
        "I had my hair cut yesterday.",
        "She got her car repaired.",
        "The manager made it clear that deadlines must be met.",
        "They let him go, even though he was late.",
        "He was made to feel guilty about the incident.",
        "The evidence compelled them to reach a different conclusion.",
      ],
      focus: "Advanced passive and complex causative constructions.",
      learning_objectives: [
        "Master passive causative constructions",
        "Use causatives in complex sentence structures",
        "Understand metaphorical and abstract causation",
        "Apply in sophisticated academic discourse",
      ],
      advanced_constructions: [
        "Causatives with complex objects",
        "Embedded causative clauses",
        "Causatives in relative clauses",
        "Multiple causative chains",
      ],
      stylistic_variations: [
        "Formal vs. informal variants",
        "Register-specific choices",
        "Rhetorical effect considerations",
        "Genre-appropriate usage",
      ],
      discourse_markers: [
        "Causatives as coherence devices",
        "Transition and connection functions",
        "Emphasis and focus strategies",
        "Argumentative discourse patterns",
      ],
      academic_applications: [
        "Research methodology descriptions",
        "Cause-effect analysis",
        "Policy and recommendation language",
        "Critical analysis and evaluation",
      ],
    },
    C2: {
      features: [
        "Causative constructions in legal, technical, or literary language",
        "Using causatives metaphorically or abstractly",
        "Mixed causatives in indirect or diplomatic speech",
        "Cross-linguistic causative awareness",
        "Idiomatic and creative usage",
      ],
      examples: [
        "The government was compelled to act by public pressure.",
        "He was made to feel guilty for what happened.",
        "They had the contract revised for clarity and compliance.",
        "The circumstances conspired to make her reconsider.",
        "His eloquence enabled him to sway the entire assembly.",
        "The revelation forced a complete paradigm shift.",
      ],
      focus: "Mastery of causative voice in nuanced, high-level registers.",
      learning_objectives: [
        "Demonstrate native-like intuition with causatives",
        "Use causatives creatively and idiomatically",
        "Understand cross-linguistic causative phenomena",
        "Master all registers and styles",
      ],
      mastery_indicators: [
        "Automatic register-appropriate selection",
        "Creative and metaphorical usage",
        "Understanding of subtle semantic distinctions",
        "Effective use in professional contexts",
      ],
      nuanced_usage: [
        "Subtle power dynamics expression",
        "Diplomatic and tactful language",
        "Literary and artistic applications",
        "Philosophical and abstract concepts",
      ],
      cross_linguistic_awareness: [
        "Comparison with other languages",
        "Translation considerations",
        "Cultural specificity understanding",
        "Universal vs. language-specific patterns",
      ],
      professional_applications: [
        "Legal document drafting",
        "Technical specification writing",
        "High-level negotiation language",
        "Academic research presentation",
      ],
    },
  },

  passive_structures: {
    explanation:
      "Passive causatives express when the subject causes something to be done by someone else.",
    structure: [
      "Subject + have + object + past participle",
      "Subject + get + object + past participle",
    ],
    examples: [
      "I had my house painted.",
      "She got her nails done.",
      "We had the documents translated into Spanish.",
    ],
    advanced_patterns: [
      "Subject + have + object + past participle + adverbial",
      "Subject + get + object + past participle + by-phrase",
      "Complex objects with relative clauses",
      "Embedded passive causatives in reported speech",
    ],
    formal_registers: [
      "The committee had the proposal reviewed by experts.",
      "The organization got the report audited professionally.",
      "The institution had its policies revised thoroughly.",
      "The government got the legislation drafted carefully.",
    ],
  },

  comparative_analysis: {
    "make vs. have": "'Make' implies stronger force or coercion than 'have'.",
    "get vs. have":
      "'Get' is more informal and emphasizes the effort or persuasion needed.",
    "let vs. allow":
      "'Let' is casual and conversational, 'allow' is formal and often written.",
    "force vs. compel":
      "'Compel' is more formal, used in legal or academic settings.",
  },

  common_mistakes: [
    {
      mistake: "She made me to cry.",
      correction: "She made me cry.",
      explanation: "'Make' is followed by a bare infinitive (without 'to').",
      level: "A1-A2",
      frequency: "Very Common",
    },
    {
      mistake: "He got me clean the room.",
      correction: "He got me to clean the room.",
      explanation: "'Get' is followed by 'to-infinitive'.",
      level: "A2-B1",
      frequency: "Common",
    },
    {
      mistake: "I had my car to be washed.",
      correction: "I had my car washed.",
      explanation: "'Have' + object + past participle does not require 'to'.",
      level: "B1-B2",
      frequency: "Common",
    },
    {
      mistake: "She let me to go home.",
      correction: "She let me go home.",
      explanation: "'Let' is followed by a bare infinitive.",
      level: "A1-A2",
      frequency: "Very Common",
    },
    {
      mistake: "I helped him to fixing his car.",
      correction: "I helped him fix his car. / I helped him to fix his car.",
      explanation:
        "'Help' can be followed by either bare infinitive or to-infinitive.",
      level: "A2-B1",
      frequency: "Occasional",
    },
    {
      mistake: "The teacher forced the students studying harder.",
      correction: "The teacher forced the students to study harder.",
      explanation: "'Force' requires 'to-infinitive'.",
      level: "B1-B2",
      frequency: "Common",
    },
    {
      mistake: "I had cut my hair yesterday.",
      correction: "I had my hair cut yesterday.",
      explanation:
        "In passive causatives, the object comes before the past participle.",
      level: "B2-C1",
      frequency: "Common",
    },
  ],

  academic_usage: {
    semantics:
      "Causation in language reflects the initiator of an event versus the performer of the event.",
    syntactic_roles:
      "The subject is the causer, the object is the causee, and the action is performed by the causee.",
    discourse_functions: [
      "Emphasizing authority or control",
      "Delegating responsibility",
      "Politeness or softening in directives (e.g., 'Could you have this finished by tomorrow?')",
    ],
    theoretical_frameworks: [
      "Generative Grammar analysis of causative constructions",
      "Functional Grammar approach to causative semantics",
      "Cognitive Linguistics perspective on causation",
      "Construction Grammar treatment of causative patterns",
      "Role and Reference Grammar causative analysis",
    ],
    research_applications: [
      "Second language acquisition studies",
      "Cross-linguistic causative comparison",
      "Corpus analysis of causative frequency",
      "Psycholinguistic processing research",
      "Historical linguistic change studies",
    ],
  },

  diagnostic_patterns: {
    recognition: [
      "Subject + causative verb + person + base verb (or to-infinitive)",
      "Subject + causative verb + thing + past participle",
    ],
    signal_words: [
      "make",
      "get",
      "have",
      "let",
      "help",
      "force",
      "cause",
      "compel",
      "permit",
      "require",
    ],
    question_forms: [
      "Did she make you cry?",
      "Who had the room cleaned?",
      "What got you to change your mind?",
    ],
    transformation_rules: [
      "Active to passive causative: I painted the house → I had the house painted",
      "Direct action to causative: He cleaned the car → He got the car cleaned",
      "Causative to question: She made him leave → Did she make him leave?",
      "Reported causative: He said, 'Make them wait' → He told them to make them wait",
    ],
  },

  advanced_applications: {
    transformations: {
      from_active: "They cleaned the house → They had the house cleaned.",
      from_passive:
        "The boss made the team complete the task → The team was made to complete the task.",
      complex_embeddings: [
        "I want to have my car serviced before the trip.",
        "She managed to get her proposal approved by the committee.",
        "They decided to make the students redo the assignment.",
        "He tried to let his emotions show through his performance.",
      ],
    },
    conditional: [
      "If I had more money, I would have my room redecorated.",
      "She would let you drive if you asked.",
    ],
    reported_speech: [
      "He said he had made her cry.",
      "They claimed the manager got them to change the schedule.",
    ],
    causative_with_modal_verbs: [
      "You must have your essay checked before submission.",
      "We should get the locks replaced.",
    ],
    hypothetical_constructions: [
      "Had she made him understand earlier, the problem wouldn't have occurred.",
      "Were they to let us proceed, we could finish by tomorrow.",
      "Should you have it done professionally, the results would be better.",
    ],
  },

  spelling_and_form: {
    verb_forms: [
      {
        verb: "make",
        base: "make",
        past: "made",
        participle: "made",
        gerund: "making",
      },
      {
        verb: "have",
        base: "have",
        past: "had",
        participle: "had",
        gerund: "having",
      },
      {
        verb: "get",
        base: "get",
        past: "got",
        participle: "got/gotten",
        gerund: "getting",
      },
      {
        verb: "let",
        base: "let",
        past: "let",
        participle: "let",
        gerund: "letting",
      },
      {
        verb: "help",
        base: "help",
        past: "helped",
        participle: "helped",
        gerund: "helping",
      },
      {
        verb: "force",
        base: "force",
        past: "forced",
        participle: "forced",
        gerund: "forcing",
      },
      {
        verb: "allow",
        base: "allow",
        past: "allowed",
        participle: "allowed",
        gerund: "allowing",
      },
      {
        verb: "cause",
        base: "cause",
        past: "caused",
        participle: "caused",
        gerund: "causing",
      },
      {
        verb: "compel",
        base: "compel",
        past: "compelled",
        participle: "compelled",
        gerund: "compelling",
      },
      {
        verb: "require",
        base: "require",
        past: "required",
        participle: "required",
        gerund: "requiring",
      },
    ],
    contractions: [
      "I've had my hair cut.",
      "She'd get it done tomorrow.",
      "We'll have it finished.",
      "They've made us wait.",
    ],
    pronunciation_notes: [
      "/meɪk/ - make (strong stress on causation)",
      "/let/ - let (short vowel, quick pronunciation)",
      "/hæv/ - have (weak form /həv/ in causatives)",
      "/ɡet/ - get (stress on effort/achievement)",
      "/help/ - help (can be /hɛlp/ or /hɛəlp/)",
    ],
  },

  teaching_notes: {
    tips: [
      "Teach 'make' and 'let' first as they are most common in speech.",
      "Use real-life examples like haircuts, car repairs, services.",
      "Distinguish clearly between causative and normal verb forms.",
      "Introduce passive causatives at intermediate level (B1+).",
    ],
    visual_techniques: [
      "Use flowcharts to show who does what (causer vs. doer).",
      "Role-play scenarios (e.g., asking someone to fix something).",
    ],
    error_correction_drills: [
      "Fix the sentence: 'She made me to leave early.' → 'She made me leave early.'",
    ],
    progressive_introduction: [
      "A1: Start with make/let in family contexts",
      "A2: Add get/have for services and arrangements",
      "B1: Introduce formal causatives (force, allow, cause)",
      "B2: Practice passive causatives and complex structures",
      "C1: Master advanced embeddings and stylistic variation",
      "C2: Develop native-like intuition and creative usage",
    ],
    assessment_criteria: [
      "Correct infinitive form selection (bare vs. to-infinitive)",
      "Appropriate register and formality level",
      "Understanding of semantic distinctions",
      "Accurate passive causative formation",
      "Natural integration into discourse",
    ],
  },

  references: [
    {
      title: "Practical English Usage",
      author: "Michael Swan",
      publisher: "Oxford University Press",
      year: "2016",
      isbn: "978-0194202435",
      type: "book",
      description:
        "Comprehensive guide to English grammar problems and usage, with detailed sections on causative constructions and their common errors.",
    },
    {
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      publisher: "Cambridge University Press",
      year: "2019",
      isbn: "978-1108457651",
      type: "book",
      description:
        "Intermediate-level grammar reference and practice book with clear explanations of causative verb patterns.",
    },
    {
      title: "The Cambridge Grammar of the English Language",
      author: "Rodney Huddleston & Geoffrey K. Pullum",
      publisher: "Cambridge University Press",
      year: "2002",
      isbn: "978-0521431460",
      type: "book",
      description:
        "Authoritative academic reference covering the syntactic and semantic analysis of causative constructions in English.",
    },
    {
      title: "Longman Student Grammar of Spoken and Written English",
      author: "Douglas Biber, Susan Conrad, Geoffrey Leech",
      publisher: "Pearson Education",
      year: "2002",
      isbn: "978-0582237261",
      type: "book",
      description:
        "Corpus-based grammar reference showing frequency and usage patterns of causative verbs in real discourse.",
    },
    {
      title: "A Comprehensive Grammar of the English Language",
      author: "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
      publisher: "Longman",
      year: "1985",
      isbn: "978-0582517349",
      type: "book",
      description:
        "Comprehensive academic grammar reference with detailed coverage of causative verb constructions and transformations.",
    },
    {
      title: "Oxford Learner's Dictionary",
      url: "https://www.oxfordlearnersdictionaries.com/",
      type: "website",
      description:
        "Online dictionary with usage examples and patterns for causative verbs, updated with contemporary usage.",
    },
    {
      title: "Cambridge Dictionary",
      url: "https://dictionary.cambridge.org/",
      type: "website",
      description:
        "Comprehensive online dictionary with grammar guides and usage examples for causative constructions.",
    },
    {
      title: "British Council LearnEnglish",
      url: "https://learnenglish.britishcouncil.org/",
      type: "website",
      description:
        "Educational resource with explanations and exercises on causative verbs for different proficiency levels.",
    },
    {
      title: "Causative Constructions in Cross-Linguistic Perspective",
      author: "Martin Haspelmath",
      type: "journal",
      year: "2016",
      description:
        "Academic research on causative constructions across different languages, providing theoretical framework.",
    },
    {
      title: "The Grammar of Causation and Interpersonal Manipulation",
      author: "Masayoshi Shibatani",
      publisher: "John Benjamins",
      year: "2002",
      type: "research",
      description:
        "Comprehensive linguistic analysis of causative constructions from typological and functional perspectives.",
    },
  ],

  semantic_types: {
    direct_causation: {
      definition: "The subject directly causes someone to do something.",
      example: "The teacher made the students clean the board.",
    },
    indirect_causation: {
      definition:
        "The subject arranges or influences the action without direct control.",
      example: "He got the plumber to fix the sink.",
    },
    permissive_causation: {
      definition: "The subject allows the action to happen.",
      example: "They let him leave early.",
    },
    assistive_causation: {
      definition: "The subject helps someone to do something.",
      example: "She helped me carry the boxes.",
    },
  },

  discourse_pragmatics: {
    politeness_strategies: [
      "Would you have this finished by tomorrow?",
      "Could you get someone to look at this?",
      "Let's have it reviewed before submission.",
    ],
    indirectness:
      "Causative verbs often soften commands or requests, making them more polite or formal.",
    negotiation:
      "Causatives are used in business/legal language to delegate tasks diplomatically.",
    cultural_variations: [
      "British English prefers 'have something done' over 'get something done'",
      "American English more commonly uses 'get' in casual contexts",
      "Formal registers across cultures favor 'require', 'compel', 'authorize'",
      "Asian English varieties may use more indirect causative forms",
    ],
    power_dynamics: [
      "Higher authority uses 'make' and 'require' more frequently",
      "Peer relationships favor 'get' and 'help' constructions",
      "Service relationships commonly use 'have' and 'get' passives",
      "Professional contexts prefer formal causatives",
    ],
  },

  collocations_and_chunks: {
    services: [
      "have your hair cut",
      "get your car fixed",
      "have your eyes tested",
    ],
    formal_legal: [
      "be compelled to resign",
      "get the document notarized",
      "have it examined by a lawyer",
    ],
    education: [
      "make students complete tasks",
      "get children to read",
      "let them explore freely",
    ],
    business: [
      "have the report submitted",
      "get the team working",
      "make the meeting productive",
    ],
  },

  field_applications: {
    legal: {
      example: "The defendant was compelled to provide evidence.",
      note: "Often uses passive causatives with formal verbs: 'compel', 'require', 'authorize'.",
      typical_patterns: [
        "be compelled to + infinitive",
        "be required to + infinitive",
        "be authorized to + infinitive",
        "be mandated to + infinitive",
      ],
    },
    education: {
      example: "Teachers often have students work in groups.",
      note: "'Have', 'let', and 'make' are common in classroom management.",
      typical_patterns: [
        "have students + base verb",
        "let students + base verb",
        "make students + base verb",
        "get students to + infinitive",
      ],
    },
    medicine: {
      example: "You should get your blood tested.",
      note: "Frequently uses passive causatives for procedures.",
      typical_patterns: [
        "have/get + body part + past participle",
        "have/get + medical test + done/taken",
        "be advised to have + procedure + performed",
      ],
    },
    IT_Tech: {
      example: "The system automatically lets users reset passwords.",
      note: "'Let', 'allow', and 'enable' describe permissions in software.",
      typical_patterns: [
        "let/allow users to + infinitive",
        "enable users to + infinitive",
        "cause the system to + infinitive",
        "make the program + base verb",
      ],
    },
    everyday_life: {
      example: "I got my phone repaired at the store.",
      note: "Common collocations used in services and casual conversation.",
      typical_patterns: [
        "get/have + object + past participle",
        "make someone + base verb",
        "let someone + base verb",
        "help someone + base verb",
      ],
    },
  },

  comparison_with_similar_structures: {
    causatives_vs_command: {
      difference:
        "Command is direct (Do this!). Causatives use verbs to influence (She made me do it).",
      example: {
        command: "Clean the board!",
        causative: "The teacher made me clean the board.",
      },
    },
    causatives_vs_request: {
      difference:
        "Requests ask politely (Can you...?). Causatives imply control or arrangement.",
      example: {
        request: "Can you help me?",
        causative: "I had him help me.",
      },
    },
    causatives_vs_passive_voice: {
      difference:
        "Passive focuses on the action done to the subject; causative focuses on who caused it.",
      example: {
        passive: "The house was painted.",
        causative: "She had the house painted.",
      },
    },
  },

  syntactic_variations: {
    passive_formality_scale: {
      casual: "She got her hair cut.",
      neutral: "He had his car repaired.",
      formal: "The executive was compelled to resign.",
      academic: "The data necessitated a revision of the hypothesis.",
    },
    embedded_causatives: [
      "I want to get her to help us move.",
      "He needs to have them call back tomorrow.",
    ],
    negation_forms: [
      "She didn't make me go.",
      "We didn't get it repaired yet.",
      "They won't let us in.",
    ],
    interrogative_forms: [
      "Did you have your car serviced?",
      "What made you change your mind?",
      "Who got you to apply for this job?",
      "Where did you get your hair cut?",
    ],
  },

  diagnostic_checklist: {
    questions_to_ask: [
      "Who is doing the action?",
      "Who is causing the action?",
      "Is the verb followed by a bare infinitive or 'to'?",
      "Is it active or passive causative?",
      "Does it involve permission, obligation, or assistance?",
    ],
    diagramming: {
      labels: [
        "Causer (Subject)",
        "Causee (Object)",
        "Action (Verb)",
        "Receiver of Action (Optional)",
      ],
      example: {
        sentence: "She made him wash the dishes.",
        diagram:
          "She (Causer) → made → him (Causee) → wash (Action) → the dishes (Receiver)",
      },
    },
  },

  extended_examples: {
    real_life: [
      "I had the kids do their homework before dinner.",
      "The director made the actor rehearse the scene ten times.",
      "We let them stay at our house for the weekend.",
    ],
    formal: [
      "The institution requires all applicants to submit a portfolio.",
      "Employees were compelled to sign the new policy agreement.",
    ],
    idiomatic_or_unusual: [
      "He made me laugh until I cried.",
      "Let me get this straight—you had them fly in just for lunch?",
    ],
  },

  student_tips: [
    "Use 'make' to express force or strong action.",
    "Use 'have' or 'get' for arrangements or services.",
    "Use 'let' for giving permission.",
    "In formal writing, passive causatives sound more natural than direct commands.",
    "Don't confuse 'make' (bare verb) with 'get' (to-infinitive).",
  ],

  citations: [
    {
      source: "Oxford Learner's Dictionary",
      link: "https://www.oxfordlearnersdictionaries.com/",
    },
    {
      source: "Cambridge Grammar of English",
      link: "https://dictionary.cambridge.org/",
    },
    {
      source: "British Council Grammar",
      link: "https://learnenglish.britishcouncil.org/",
    },
    {
      source: "M. Swan, Practical English Usage",
      edition: "4th Edition",
      publisher: "Oxford University Press",
    },
  ],

  metaphorical_usage: {
    description:
      "Causative verbs được dùng không chỉ để diễn tả hành động thực tế, mà còn trong các cách nói ẩn dụ hoặc cảm xúc.",
    examples: [
      "His words made me feel alive again.",
      "She let hope enter her heart for the first time.",
      "He got me thinking about the future.",
    ],
    notes:
      "Ở trình độ C1–C2, người học nên phân biệt giữa hành động vật lý (e.g. 'make someone run') và hành động trừu tượng (e.g. 'make someone believe').",
    cognitive_linguistics: [
      "Causative verbs reflect conceptual metaphors of force and control",
      "Physical causation extends to abstract causation through metaphor",
      "Cultural concepts of agency vary across languages",
      "Embodied cognition influences causative usage patterns",
    ],
  },

  register_and_style: {
    formal: {
      typical_verbs: ["compel", "require", "permit", "authorize", "oblige"],
      example: "The policy requires all visitors to sign in upon entry.",
      characteristics: [
        "Latinate vocabulary preferred",
        "Passive constructions common",
        "Explicit and precise language",
        "Legal and academic contexts",
      ],
    },
    informal: {
      typical_verbs: ["make", "let", "get", "help"],
      example: "He got me to join the party.",
      characteristics: [
        "Anglo-Saxon vocabulary",
        "Active constructions",
        "Conversational and casual",
        "Personal and social contexts",
      ],
    },
    slang_or_idiomatic: {
      typical_verbs: ["make", "get", "have"],
      example: "She made me go nuts.",
      characteristics: [
        "Idiomatic expressions",
        "Emotional emphasis",
        "Youth and pop culture",
        "Regional variations",
      ],
    },
  },

  language_change_and_etymology: {
    historical_roots: {
      make: "Old English 'macian' meaning to create or build.",
      let: "Old English 'lætan' meaning to allow or permit.",
      get: "From Old Norse 'geta', meaning to obtain or cause.",
      have: "From Old English 'habban', meaning to possess or hold.",
    },
    grammaticalization: {
      explanation:
        "Over time, verbs like 'get' and 'have' shifted from ownership meanings to causation in modern English.",
      significance:
        "This shows how function can override original meaning in grammatical evolution.",
      examples: [
        "Have: possession → causation (I have a book → I have it done)",
        "Get: acquisition → causation (Get money → Get someone to work)",
        "Make: creation → causation (Make bread → Make someone work)",
      ],
    },
  },

  psychological_and_cognitive_functions: {
    perspective_shift: {
      explanation:
        "Causative constructions allow speakers to focus on the *causer* rather than the doer of the action.",
      example:
        "'I had the car fixed' focuses on the speaker's role, not the mechanic's action.",
    },
    theory_of_mind: {
      insight:
        "Using causatives implies an understanding of agency and intent, important for complex communication.",
    },
    cognitive_load: [
      "Processing causatives requires understanding multiple participants",
      "Passive causatives add complexity through syntactic transformation",
      "L2 learners must master both form and pragmatic appropriateness",
      "Cultural differences in causation concepts affect acquisition",
    ],
  },

  error_diagnostics_with_feedback: {
    student_errors: [
      {
        error: "They made me to laugh.",
        correction: "They made me laugh.",
        reason: "'Make' is followed by a bare infinitive (no 'to').",
        level: "A1-A2",
      },
      {
        error: "He had his car to wash.",
        correction: "He had his car washed.",
        reason: "'Have' in passive causative uses the past participle.",
        level: "B1-B2",
      },
      {
        error: "She let him to go home.",
        correction: "She let him go home.",
        reason: "'Let' is followed by a bare infinitive.",
        level: "A1-A2",
      },
    ],
    reflective_questions: [
      "Is the verb followed by the correct infinitive form?",
      "Is this an active or passive causative?",
      "Who is doing the action?",
    ],
  },

  contrastive_examples_chart: [
    {
      meaning: "Direct action",
      sentence: "I painted the room.",
      structure: "Subject + verb + object",
    },
    {
      meaning: "Causative (active)",
      sentence: "I had my brother paint the room.",
      structure: "Subject + have + object + base verb",
    },
    {
      meaning: "Causative (passive)",
      sentence: "I had the room painted.",
      structure: "Subject + have + object + past participle",
    },
  ],

  learner_tips_by_CEFR: {
    A1: "Start with 'make' and 'let' using clear subjects and simple verbs.",
    A2: "Practice using 'get' and 'have' in everyday service scenarios.",
    B1: "Understand the difference between direct and indirect causation.",
    B2: "Use causatives in formal writing with varied vocabulary.",
    C1: "Experiment with embedded clauses and reported causatives.",
    C2: "Analyze how causatives create nuance in tone, formality, and persuasion.",
  },

  memory_hooks_and_mnemonics: {
    MAKE: "MAKE = Must Act, Keep Engaged → Forces action",
    LET: "LET = Lightly Encourages Trust → Permission",
    HAVE: "HAVE = Hire And Verify Execution → Delegation",
    GET: "GET = Guide, Encourage, Trigger → Persuasion",
    HELP: "HELP = Help Everyone Learn Progress → Assistance",
  },

  cross_linguistic_comparisons: {
    Spanish: {
      similarities: [
        "Similar causative verb patterns",
        "Use of infinitive constructions",
      ],
      differences: [
        "Spanish uses 'hacer' for both 'make' and 'do'",
        "Different auxiliary patterns",
      ],
      transfer_issues: [
        "Overuse of 'hacer que' pattern",
        "Confusion with subjunctive forms",
      ],
    },
    French: {
      similarities: [
        "Causative constructions exist",
        "Formal vs informal distinctions",
      ],
      differences: [
        "French 'faire + infinitive' pattern",
        "Reflexive causative forms",
      ],
      transfer_issues: [
        "Direct translation of 'faire' constructions",
        "Pronoun placement errors",
      ],
    },
    German: {
      similarities: [
        "Modal-like auxiliary behavior",
        "Passive construction parallels",
      ],
      differences: [
        "German 'lassen' covers multiple English causatives",
        "Word order variations",
      ],
      transfer_issues: [
        "Verb-final placement habits",
        "Overuse of 'lassen' equivalents",
      ],
    },
    Chinese: {
      similarities: ["Causative meaning expression", "Service context usage"],
      differences: [
        "Chinese uses different markers for causation",
        "No infinitive forms",
      ],
      transfer_issues: [
        "Missing infinitive markers",
        "Direct translation patterns",
      ],
    },
    Japanese: {
      similarities: [
        "Causative morphology exists",
        "Honorific/formal distinctions",
      ],
      differences: [
        "Japanese has causative suffixes",
        "Different agent marking",
      ],
      transfer_issues: [
        "Morphological vs analytical confusion",
        "Politeness level matching",
      ],
    },
  },

  corpus_insights: {
    frequency_data: [
      "'Make' is the most frequent causative in spoken English",
      "'Have' dominates in service-related passive causatives",
      "'Get' increasing in frequency in contemporary usage",
      "'Let' most common in permission contexts",
      "Formal causatives rare in conversation, common in academic writing",
    ],
    collocation_strength: [
      "Strong: have + body part + past participle",
      "Strong: make + someone + base verb",
      "Medium: get + someone + to infinitive",
      "Weak: cause + someone + to infinitive",
      "Variable: help + someone + (to) infinitive",
    ],
    register_distribution: [
      "Conversation: make, let, get, have",
      "Academic writing: cause, require, enable, compel",
      "Fiction: make, let, help, force",
      "News: force, require, allow, cause",
      "Legal: compel, require, authorize, mandate",
    ],
  },

  assessment_and_evaluation: {
    diagnostic_tests: [
      "Fill-in-the-blank with appropriate causative verb",
      "Transform sentences from active to passive causative",
      "Choose appropriate register for given context",
      "Error correction in causative constructions",
      "Discourse completion with causative expressions",
    ],
    proficiency_indicators: [
      "A1: Uses make/let in simple contexts",
      "A2: Correctly forms basic causative patterns",
      "B1: Distinguishes semantic differences between causatives",
      "B2: Uses passive causatives appropriately",
      "C1: Manipulates complex causative structures",
      "C2: Shows native-like intuition and creativity",
    ],
    error_analysis_framework: [
      "Form errors: incorrect infinitive type",
      "Meaning errors: wrong causative verb choice",
      "Register errors: inappropriate formality level",
      "Usage errors: pragmatically incorrect application",
      "Transfer errors: L1 interference patterns",
    ],
  },
};

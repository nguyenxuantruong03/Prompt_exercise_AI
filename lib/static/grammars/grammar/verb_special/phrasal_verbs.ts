import { phrasalVerbsType } from "@/types/grammars/grammar/verb_special/phrasal_verbs";

export const phrasalVerbsData: phrasalVerbsType = {
  id: 62,
  definition: {
    core_concept:
      "A phrasal verb is a verb combined with one or two particles (prepositions or adverbs) that create a meaning different from the original verb.",
    grammatical_status: "Multi-word verb construction",
    significance:
      "Essential for natural spoken and written English, especially in informal contexts.",
    categories: ["transitive", "intransitive", "separable", "inseparable"],
    linguistic_features: [
      "Semantic non-compositionality",
      "Syntactic flexibility",
      "Register variation",
      "High frequency in spoken English",
      "Idiomatic nature",
    ],
    frequency_ranking:
      "Among the top 1000 most frequent constructions in English",
  },

  foundational_structure: {
    verb_particle: "e.g., give up, turn on",
    verb_particle_object: "e.g., turn off the light",
    verb_object_particle:
      "e.g., turn the light off (for separable phrasal verbs)",
    note: "Some phrasal verbs are idiomatic and their meanings cannot be deduced from individual words.",
    structural_variations: [
      "Verb + Particle (intransitive): wake up",
      "Verb + Particle + Object (transitive): turn on the light",
      "Verb + Object + Particle (separable): turn the light on",
      "Verb + Particle + Preposition + Object: catch up with friends",
    ],
    syntactic_properties: [
      "Particle can be separated from verb in some cases",
      "Object placement affects meaning interpretation",
      "Some particles can function as prepositions or adverbs",
      "Stress pattern affects meaning disambiguation",
    ],
  },

  phrasal_verbs_vocab: {
    basic_actions: [
      "get up",
      "sit down",
      "stand up",
      "lie down",
      "wake up",
      "go out",
      "come in",
      "run out",
      "turn around",
    ],
    daily_routines: [
      "brush up on",
      "wash up",
      "dress up",
      "take off",
      "put on",
      "turn off",
      "turn on",
      "get ready",
    ],
    travel_and_transport: [
      "set off",
      "get on",
      "get off",
      "take off",
      "check in",
      "check out",
      "see off",
      "pick up",
      "drop off",
    ],
    communication: [
      "speak up",
      "shut up",
      "get across",
      "bring up",
      "talk over",
      "cut off",
      "hang up",
      "call back",
    ],
    thinking_and_decision: [
      "figure out",
      "think over",
      "make up",
      "come up with",
      "decide on",
      "work out",
      "sort out",
    ],
    relationships_and_emotions: [
      "get along",
      "fall out",
      "break up",
      "make up",
      "cheer up",
      "calm down",
      "look after",
      "fall for",
    ],
    work_and_study: [
      "hand in",
      "hand out",
      "fill out",
      "fill in",
      "drop out",
      "keep up",
      "catch up",
      "read over",
      "write down",
    ],
    business_and_money: [
      "take over",
      "set up",
      "pay off",
      "run out of",
      "go up",
      "go down",
      "lay off",
      "break even",
    ],
    technology: [
      "log in",
      "log out",
      "plug in",
      "turn off",
      "shut down",
      "boot up",
      "scroll down",
      "zoom in",
      "zoom out",
    ],
    health_and_fitness: [
      "work out",
      "warm up",
      "cool down",
      "pass out",
      "throw up",
      "come down with",
      "get over",
    ],
    social_interactions: [
      "show up",
      "hang out",
      "come over",
      "go out with",
      "run into",
      "drop by",
      "catch up",
    ],
    time_and_scheduling: [
      "put off",
      "push back",
      "bring forward",
      "run out of",
      "stick to",
      "carry on",
      "hold off",
    ],
    idiomatic_expressions: [
      "come up",
      "give in",
      "look up to",
      "look down on",
      "take after",
      "put up with",
      "back down",
      "pull through",
    ],
    academic_phrasal_verbs: [
      "carry out",
      "point out",
      "look into",
      "bring about",
      "set out",
      "take into account",
      "turn out",
    ],
  },

  classifications: {
    by_transitivity: {
      transitive: {
        definition: "Requires an object",
        example: "She turned off the radio.",
        characteristics: [
          "Must have a direct object",
          "Can often be passivized",
          "Object placement varies with separability",
        ],
        common_verbs: [
          "turn off",
          "pick up",
          "look after",
          "give up",
          "bring up",
        ],
      },
      intransitive: {
        definition: "Does not take an object",
        example: "He woke up late.",
        characteristics: [
          "No direct object required",
          "Cannot be passivized",
          "Often describe states or actions",
        ],
        common_verbs: [
          "wake up",
          "break down",
          "show up",
          "grow up",
          "calm down",
        ],
      },
    },
    by_separability: {
      separable: {
        definition: "Object can come between verb and particle",
        example: "They turned the TV off.",
        characteristics: [
          "Particle can be separated from verb",
          "Pronoun objects must separate verb and particle",
          "Often transitive phrasal verbs",
        ],
        common_verbs: ["turn off", "pick up", "put on", "take off", "hand in"],
      },
      inseparable: {
        definition: "Object must follow the phrasal verb",
        example: "They ran into an old friend.",
        characteristics: [
          "Verb and particle cannot be separated",
          "Object always follows the complete phrasal verb",
          "Often with prepositions",
        ],
        common_verbs: [
          "run into",
          "look after",
          "get over",
          "come across",
          "deal with",
        ],
      },
    },
    by_formality: {
      informal: {
        definition: "Primarily used in casual conversation",
        example: "Let's hang out tonight.",
        characteristics: [
          "Common in spoken English",
          "Less appropriate in formal writing",
          "Often have formal equivalents",
        ],
        common_verbs: [
          "hang out",
          "chill out",
          "mess up",
          "freak out",
          "show off",
        ],
      },
      neutral: {
        definition: "Appropriate in most contexts",
        example: "The meeting was called off.",
        characteristics: [
          "Suitable for both formal and informal contexts",
          "Widely accepted in writing",
          "Standard usage",
        ],
        common_verbs: [
          "call off",
          "find out",
          "work out",
          "point out",
          "carry out",
        ],
      },
      formal: {
        definition: "Acceptable in academic and professional contexts",
        example: "The study brought about significant changes.",
        characteristics: [
          "Appropriate in academic writing",
          "Professional communication",
          "Often preferred over informal alternatives",
        ],
        common_verbs: [
          "bring about",
          "set forth",
          "put forward",
          "carry out",
          "look into",
        ],
      },
    },
    by_frequency: {
      high_frequency: {
        definition: "Among the most commonly used phrasal verbs",
        example: "Get up, go out, come back",
        characteristics: [
          "Essential for basic communication",
          "Taught at beginner levels",
          "High corpus frequency",
        ],
        common_verbs: ["get up", "go out", "come back", "sit down", "wake up"],
      },
      medium_frequency: {
        definition: "Moderately common in everyday usage",
        example: "Look into, set up, break down",
        characteristics: [
          "Important for intermediate learners",
          "Context-specific usage",
          "Medium corpus frequency",
        ],
        common_verbs: [
          "look into",
          "set up",
          "break down",
          "give up",
          "pick up",
        ],
      },
      low_frequency: {
        definition: "Less common, specialized usage",
        example: "Fall back on, bring about, put forth",
        characteristics: [
          "Advanced level vocabulary",
          "Specialized contexts",
          "Low corpus frequency",
        ],
        common_verbs: [
          "fall back on",
          "bring about",
          "put forth",
          "come up against",
          "factor in",
        ],
      },
    },
  },

  usage_types: [
    {
      context: "Informal conversation",
      level: "A1–C1",
      example: "Let's hang out this weekend.",
      frequency: "Very high",
      register: "Informal",
    },
    {
      context: "Business English",
      level: "B2–C2",
      example: "We need to draw up a new contract.",
      frequency: "High",
      register: "Formal",
    },
    {
      context: "Academic writing",
      level: "C1–C2",
      example: "The study puts forward a new hypothesis.",
      frequency: "Medium",
      register: "Formal",
    },
    {
      context: "Daily routines",
      level: "A1–B1",
      example: "I wake up at 7 AM every day.",
      frequency: "Very high",
      register: "Neutral",
    },
    {
      context: "Technology and media",
      level: "A2–B2",
      example: "Please log in to your account.",
      frequency: "High",
      register: "Neutral",
    },
  ],

  learning_levels: {
    A1: {
      focus: "Basic physical actions and daily routines with literal meanings",
      examples: [
        {
          verb: "wake up",
          meaning: "stop sleeping",
          example: "I wake up at 7 a.m.",
          level: "A1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "sit down",
          meaning: "take a seat",
          example: "Please sit down.",
          level: "A1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "stand up",
          meaning: "rise to feet",
          example: "He stood up quickly.",
          level: "A1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "come in",
          meaning: "enter",
          example: "Come in, please.",
          level: "A1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "go out",
          meaning: "leave/exit",
          example: "Let's go out for dinner.",
          level: "A1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
      ],
      strategies: [
        "Use Total Physical Response (TPR)",
        "Visual demonstrations and gestures",
        "Classroom commands and instructions",
        "Picture matching activities",
        "Simple substitution drills",
      ],
      core_verbs: ["get", "go", "come", "sit", "stand", "wake", "turn"],
      key_particles: ["up", "down", "in", "out", "on", "off"],
      grammar_focus: [
        "Recognition of verb + particle structure",
        "Basic word order patterns",
        "Literal vs. figurative meaning introduction",
      ],
      common_mistakes: [
        "Confusing particle with preposition",
        "Omitting particles in speech",
        "Literal translation from native language",
      ],
      learning_objectives: [
        "Recognize common phrasal verbs in context",
        "Use 20-30 high-frequency phrasal verbs correctly",
        "Understand basic separable vs inseparable patterns",
      ],
      assessment_criteria: [
        "Correct usage in controlled exercises",
        "Recognition in listening tasks",
        "Appropriate use in guided speaking",
      ],
    },

    A2: {
      focus:
        "Expanding vocabulary with semi-idiomatic meanings in familiar contexts",
      examples: [
        {
          verb: "turn on",
          meaning: "start/activate",
          example: "Turn on the light, please.",
          level: "A2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "turn off",
          meaning: "stop/deactivate",
          example: "Turn off the TV.",
          level: "A2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "put on",
          meaning: "wear/dress",
          example: "Put on your coat.",
          level: "A2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "take off",
          meaning: "remove clothing",
          example: "Take off your shoes.",
          level: "A2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "give up",
          meaning: "stop trying",
          example: "Don't give up!",
          level: "A2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
      ],
      strategies: [
        "Thematic grouping (home, clothing, technology)",
        "Picture-story sequences",
        "Gap-fill exercises with visual cues",
        "Role-play scenarios",
        "Opposites and synonym matching",
      ],
      core_verbs: ["turn", "put", "take", "give", "pick", "look", "get"],
      key_particles: ["on", "off", "up", "down", "in", "out", "away"],
      grammar_focus: [
        "Separable vs inseparable patterns",
        "Object placement rules",
        "Stress and pronunciation patterns",
      ],
      common_mistakes: [
        "Wrong object placement with separable verbs",
        "Confusion between similar particles",
        "Overuse of literal interpretations",
      ],
      learning_objectives: [
        "Use 40-60 phrasal verbs in appropriate contexts",
        "Distinguish between separable and inseparable types",
        "Understand basic idiomatic meanings",
      ],
      assessment_criteria: [
        "Correct object placement",
        "Appropriate contextual usage",
        "Recognition of meaning changes",
      ],
    },

    B1: {
      focus: "Idiomatic usage in social situations and common topics",
      examples: [
        {
          verb: "run out of",
          meaning: "have no more",
          example: "We ran out of milk.",
          level: "B1",
          register: "neutral",
          separable: false,
          transitive: true,
        },
        {
          verb: "look after",
          meaning: "take care of",
          example: "She looks after her brother.",
          level: "B1",
          register: "neutral",
          separable: false,
          transitive: true,
        },
        {
          verb: "get along",
          meaning: "have good relationship",
          example: "They get along well.",
          level: "B1",
          register: "informal",
          separable: false,
          transitive: false,
        },
        {
          verb: "find out",
          meaning: "discover",
          example: "I found out the truth.",
          level: "B1",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "come across",
          meaning: "discover by chance",
          example: "I came across an old photo.",
          level: "B1",
          register: "neutral",
          separable: false,
          transitive: true,
        },
      ],
      strategies: [
        "Contextual learning through stories",
        "Discussion topics and debates",
        "Collocation exercises",
        "Register awareness activities",
        "Synonym and antonym exploration",
      ],
      core_verbs: ["get", "come", "go", "look", "run", "break", "work", "set"],
      key_particles: [
        "out",
        "up",
        "into",
        "after",
        "along",
        "across",
        "through",
      ],
      grammar_focus: [
        "Three-word phrasal verbs",
        "Passive constructions",
        "Register and formality levels",
      ],
      common_mistakes: [
        "Mixing formal and informal registers",
        "Incorrect preposition choice",
        "Overuse in formal writing",
      ],
      learning_objectives: [
        "Use 80-120 phrasal verbs fluently",
        "Recognize register differences",
        "Form passive constructions correctly",
      ],
      assessment_criteria: [
        "Natural usage in conversation",
        "Appropriate register selection",
        "Correct passive formations",
      ],
    },

    B2: {
      focus: "Complex meanings, multiple senses, and formal equivalents",
      examples: [
        {
          verb: "carry on",
          meaning: "continue",
          example: "Let's carry on with the meeting.",
          level: "B2",
          register: "formal",
          separable: false,
          transitive: true,
        },
        {
          verb: "set up",
          meaning: "establish",
          example: "They set up a new business.",
          level: "B2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "break down",
          meaning: "analyze/fail",
          example: "Let's break down the problem.",
          level: "B2",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "come up with",
          meaning: "think of/propose",
          example: "She came up with a great idea.",
          level: "B2",
          register: "neutral",
          separable: false,
          transitive: true,
        },
        {
          verb: "deal with",
          meaning: "handle",
          example: "How do you deal with stress?",
          level: "B2",
          register: "neutral",
          separable: false,
          transitive: true,
        },
      ],
      strategies: [
        "Text analysis and corpus work",
        "Formal-informal transformation exercises",
        "Academic writing integration",
        "Presentation and discussion skills",
        "Error analysis and correction",
      ],
      core_verbs: ["carry", "set", "break", "deal", "work", "bring", "take"],
      key_particles: ["on", "up", "down", "with", "out", "about", "over"],
      grammar_focus: [
        "Nominalization patterns",
        "Multiple meaning disambiguation",
        "Academic vs. conversational usage",
      ],
      common_mistakes: [
        "Inappropriate formality level",
        "Confusion between similar meanings",
        "Overuse in academic writing",
      ],
      learning_objectives: [
        "Master 150-200 phrasal verbs",
        "Distinguish multiple meanings",
        "Use appropriate alternatives in formal contexts",
      ],
      assessment_criteria: [
        "Precision in meaning selection",
        "Appropriate formality level",
        "Effective paraphrasing ability",
      ],
    },

    C1: {
      focus:
        "Nuanced meanings, metaphorical extensions, and sophisticated usage",
      examples: [
        {
          verb: "come across",
          meaning: "appear/seem",
          example: "He comes across as confident.",
          level: "C1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "break down",
          meaning: "lose emotional control",
          example: "She broke down during the interview.",
          level: "C1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "fall through",
          meaning: "fail to happen",
          example: "The deal fell through.",
          level: "C1",
          register: "neutral",
          separable: false,
          transitive: false,
        },
        {
          verb: "see through",
          meaning: "recognize deception",
          example: "I can see through his lies.",
          level: "C1",
          register: "neutral",
          separable: true,
          transitive: true,
        },
        {
          verb: "live up to",
          meaning: "meet expectations",
          example: "The film lived up to expectations.",
          level: "C1",
          register: "neutral",
          separable: false,
          transitive: true,
        },
      ],
      strategies: [
        "Literary text analysis",
        "Metaphorical meaning exploration",
        "Advanced collocation study",
        "Stylistic variation practice",
        "Critical thinking discussions",
      ],
      core_verbs: ["live", "see", "fall", "come", "break", "work", "stand"],
      key_particles: ["through", "up to", "down to", "across", "over"],
      grammar_focus: [
        "Metaphorical and figurative usage",
        "Complex collocation patterns",
        "Stylistic effects and nuance",
      ],
      common_mistakes: [
        "Misunderstanding metaphorical meanings",
        "Inappropriate stylistic choices",
        "Overuse of complex forms",
      ],
      learning_objectives: [
        "Use 250+ phrasal verbs with precision",
        "Understand metaphorical extensions",
        "Recognize stylistic effects",
      ],
      assessment_criteria: [
        "Sophisticated meaning comprehension",
        "Effective stylistic variation",
        "Appropriate metaphorical usage",
      ],
    },

    C2: {
      focus: "Mastery of rare forms, literary usage, and productive competence",
      examples: [
        {
          verb: "fall back on",
          meaning: "resort to",
          example: "He had to fall back on his savings.",
          level: "C2",
          register: "formal",
          separable: false,
          transitive: true,
        },
        {
          verb: "bring about",
          meaning: "cause to happen",
          example: "The reforms brought about change.",
          level: "C2",
          register: "formal",
          separable: true,
          transitive: true,
        },
        {
          verb: "come up against",
          meaning: "encounter difficulty",
          example: "We came up against strong opposition.",
          level: "C2",
          register: "neutral",
          separable: false,
          transitive: true,
        },
        {
          verb: "see through to",
          meaning: "complete despite difficulties",
          example: "She saw the project through to completion.",
          level: "C2",
          register: "formal",
          separable: true,
          transitive: true,
        },
        {
          verb: "fall in with",
          meaning: "agree with/join",
          example: "He fell in with their plans.",
          level: "C2",
          register: "formal",
          separable: false,
          transitive: true,
        },
      ],
      strategies: [
        "Literary and academic text analysis",
        "Creative writing applications",
        "Advanced discourse analysis",
        "Productive pattern recognition",
        "Independent research projects",
      ],
      core_verbs: ["fall", "bring", "see", "come", "stand", "live", "work"],
      key_particles: ["about", "against", "through to", "back on", "in with"],
      grammar_focus: [
        "Rare and archaic forms",
        "Productive morphological patterns",
        "Complex discourse functions",
      ],
      common_mistakes: [
        "Overuse of rare forms",
        "Inappropriate register mixing",
        "Misunderstanding subtle distinctions",
      ],
      learning_objectives: [
        "Master 400+ phrasal verbs",
        "Use creatively and productively",
        "Understand historical development",
      ],
      assessment_criteria: [
        "Native-like competence",
        "Creative and effective usage",
        "Sophisticated stylistic control",
      ],
    },
  },

  formation_patterns: {
    types: [
      {
        pattern: "verb + adverb",
        example: "get up",
        frequency: "Very high",
        difficulty: "Beginner",
      },
      {
        pattern: "verb + preposition",
        example: "look after",
        frequency: "High",
        difficulty: "Intermediate",
      },
      {
        pattern: "verb + adverb + preposition",
        example: "get away with",
        frequency: "Medium",
        difficulty: "Advanced",
      },
    ],
    particle_meanings: {
      up: {
        meaning: "completion, increase, or improvement",
        examples: [
          {
            verb: "clean up",
            meaning: "tidy completely",
            example: "Please clean up your room.",
          },
          {
            verb: "speed up",
            meaning: "go faster",
            example: "We need to speed up production.",
          },
        ],
        usage_notes: [
          "Often indicates completion of action",
          "Can suggest upward movement or improvement",
          "Common in separable phrasal verbs",
        ],
      },
      down: {
        meaning: "decrease, completion, or recording",
        examples: [
          {
            verb: "calm down",
            meaning: "become less agitated",
            example: "Please calm down.",
          },
          {
            verb: "write down",
            meaning: "record in writing",
            example: "Write down your name.",
          },
        ],
        usage_notes: [
          "Often indicates downward movement or reduction",
          "Can suggest completion or finality",
          "Common in both separable and inseparable forms",
        ],
      },
    },
  },

  common_errors: {
    misunderstanding_meaning: {
      description: "Assuming literal meaning when phrasal verb is idiomatic",
      example: "'Give up' does not mean 'hand something upwards'",
      correction_strategy: [
        "Learn phrasal verbs as complete units",
        "Focus on context rather than individual parts",
        "Use visual associations for idiomatic meanings",
        "Practice with authentic examples",
      ],
    },
    misplacing_object: {
      description: "Putting object in wrong place in separable phrasal verbs",
      wrong: "Turn off it.",
      correct: "Turn it off.",
      rule: "Pronoun objects must separate the verb and particle in separable phrasal verbs",
    },
    literal_interpretation: {
      description: "Interpreting idiomatic phrasal verbs literally",
      examples: [
        {
          phrasal_verb: "break down",
          wrong_interpretation: "physically destroying something by breaking",
          correct_meaning: "stop functioning or lose emotional control",
        },
        {
          phrasal_verb: "look up to",
          wrong_interpretation: "physically looking upward at someone",
          correct_meaning: "admire and respect someone",
        },
      ],
    },
    register_confusion: {
      description: "Using inappropriate formality level",
      examples: [
        {
          informal: "hang out",
          formal_equivalent: "socialize",
          context: "Don't use 'hang out' in academic writing",
        },
        {
          informal: "mess up",
          formal_equivalent: "make an error",
          context: "Use formal alternatives in professional settings",
        },
      ],
    },
  },

  teaching_notes: {
    advice: [
      "Introduce them early and recycle often",
      "Group phrasal verbs by theme or particle",
      "Highlight idiomatic vs literal use",
      "Practice object placement rules extensively",
      "Use authentic contexts and materials",
    ],
    progression_tips: [
      "Start with high-frequency, literal meanings",
      "Gradually introduce idiomatic uses",
      "Focus on productive patterns",
      "Emphasize register awareness",
      "Encourage extensive reading",
    ],
    assessment_methods: [
      "Gap-fill exercises",
      "Meaning matching activities",
      "Production in context",
      "Register appropriateness tasks",
      "Error correction exercises",
    ],
    common_challenges: [
      "Overwhelming number of phrasal verbs",
      "Multiple meanings per phrasal verb",
      "Separability rules complexity",
      "Register and formality decisions",
      "Retention and active use",
    ],
  },

  advanced_usage: {
    passive_form: {
      example: "The meeting was called off.",
      explanation: "Many transitive phrasal verbs can be passivized",
      level: "B2+",
    },
    nominalisation: {
      example: "The break-up was hard for him.",
      explanation: "Some phrasal verbs can become compound nouns",
      level: "B2+",
    },
    phrasal_verbs_in_reporting: {
      example: "He pointed out the mistake.",
      explanation: "Common in academic and professional discourse",
      level: "C1+",
    },
    metaphorical_extensions: {
      example: "The economy picked up (improved).",
      explanation: "Phrasal verbs often extend metaphorically",
      level: "C1+",
    },
    collocational_patterns: {
      example: "carry out research/an experiment",
      explanation: "Strong collocational preferences in academic contexts",
      level: "C1+",
    },
  },

  learning_tips: {
    visual_memory: "Use icons or diagrams for literal meanings",
    spaced_repetition: "Review old phrasal verbs periodically",
    collocation_learning: "Learn which nouns go with each phrasal verb",
    notebook_strategy: "Create a categorized phrasal verb journal",
    contextual_learning: "Always learn phrasal verbs in context, not isolation",
    error_analysis: "Keep track of mistakes and practice correction",
  },

  references: [
    {
      title: "English Phrasal Verbs in Use Advanced",
      author: "Michael McCarthy and Felicity O'Dell",
      url: "https://www.cambridge.org/us/education/subject/english-language-learning-and-teaching",
      description:
        "Comprehensive coverage of advanced phrasal verbs with practice exercises",
      level: "B2-C2",
    },
    {
      title: "The Cambridge Grammar of the English Language",
      author: "Rodney Huddleston and Geoffrey K. Pullum",
      isbn: "978-0521431460",
      description:
        "Authoritative reference on English grammar including phrasal verbs",
      level: "C1-C2",
    },
    {
      title: "Oxford Phrasal Verbs Dictionary",
      author: "Oxford University Press",
      url: "https://www.oxfordlearnersdictionaries.com/",
      description:
        "Comprehensive dictionary with 12,000 phrasal verbs and meanings",
      level: "A2-C2",
    },
    {
      title: "Phrasal Verbs and the Lexicon",
      author: "Fraser, Bruce",
      url: "https://www.sciencedirect.com/science/article/pii/0024384176900213",
      description: "Academic research on phrasal verb structure and meaning",
      level: "C2",
    },
    {
      title: "Macmillan Phrasal Verbs Plus",
      author: "Macmillan Education",
      url: "https://www.macmillandictionary.com/",
      description:
        "Online resource with phrasal verbs categorized by frequency and level",
      level: "A1-C2",
    },
  ],

  thematic_groups: {
    travel: [
      {
        verb: "check in",
        meaning: "register at a hotel or airport",
        example: "We checked in at the airport.",
        level: "A2",
      },
      {
        verb: "take off",
        meaning: "leave the ground (plane)",
        example: "The plane took off on time.",
        level: "A2",
      },
      {
        verb: "get on",
        meaning: "enter a vehicle",
        example: "He got on the bus.",
        level: "A1",
      },
    ],
    relationships: [
      {
        verb: "get along with",
        meaning: "have a good relationship",
        example: "She gets along with her coworkers.",
        level: "B1",
      },
      {
        verb: "fall out",
        meaning: "have an argument",
        example: "They fell out over money.",
        level: "B1",
      },
      {
        verb: "make up",
        meaning: "become friends again",
        example: "They made up after the fight.",
        level: "B1",
      },
    ],
    work: [
      {
        verb: "carry out",
        meaning: "perform or conduct",
        example: "They carried out the survey efficiently.",
        level: "B2",
      },
      {
        verb: "follow up",
        meaning: "take further action",
        example: "I'll follow up with an email.",
        level: "B2",
      },
      {
        verb: "lay off",
        meaning: "dismiss from job",
        example: "Several workers were laid off.",
        level: "B2",
      },
    ],
    emotions: [
      {
        verb: "calm down",
        meaning: "become less angry",
        example: "She calmed down quickly.",
        level: "A2",
      },
      {
        verb: "cheer up",
        meaning: "become happier",
        example: "He cheered up after getting good news.",
        level: "A2",
      },
      {
        verb: "freak out",
        meaning: "react emotionally",
        example: "He freaked out when he saw the snake.",
        level: "B1",
        register: "informal",
      },
    ],
    communication: [
      {
        verb: "speak up",
        meaning: "talk louder",
        example: "Can you speak up, please?",
        level: "A2",
      },
      {
        verb: "bring up",
        meaning: "mention a topic",
        example: "She brought up the issue in the meeting.",
        level: "B1",
      },
      {
        verb: "cut off",
        meaning: "interrupt someone speaking",
        example: "He was cut off mid-sentence.",
        level: "B1",
      },
    ],
    technology: [
      {
        verb: "log in",
        meaning: "access a computer system",
        example: "Please log in to your account.",
        level: "A2",
      },
      {
        verb: "boot up",
        meaning: "start a computer",
        example: "The computer takes time to boot up.",
        level: "B1",
      },
      {
        verb: "back up",
        meaning: "make a copy of data",
        example: "Don't forget to back up your files.",
        level: "B1",
      },
    ],
    health: [
      {
        verb: "work out",
        meaning: "exercise",
        example: "I work out three times a week.",
        level: "A2",
      },
      {
        verb: "come down with",
        meaning: "become ill",
        example: "She came down with the flu.",
        level: "B1",
      },
      {
        verb: "get over",
        meaning: "recover from illness",
        example: "It took weeks to get over the cold.",
        level: "B1",
      },
    ],
    education: [
      {
        verb: "hand in",
        meaning: "submit work",
        example: "Please hand in your essays.",
        level: "A2",
      },
      {
        verb: "drop out",
        meaning: "leave school/course",
        example: "He dropped out of university.",
        level: "B1",
      },
      {
        verb: "catch up",
        meaning: "reach the same level",
        example: "I need to catch up on my reading.",
        level: "B1",
      },
    ],
    business: [
      {
        verb: "set up",
        meaning: "establish a business",
        example: "They set up a consultancy firm.",
        level: "B2",
      },
      {
        verb: "take over",
        meaning: "assume control",
        example: "The company was taken over.",
        level: "B2",
      },
      {
        verb: "break even",
        meaning: "neither profit nor lose",
        example: "We hope to break even this year.",
        level: "B2",
      },
    ],
    social_situations: [
      {
        verb: "show up",
        meaning: "arrive/appear",
        example: "He didn't show up to the party.",
        level: "B1",
      },
      {
        verb: "hang out",
        meaning: "spend time together casually",
        example: "Let's hang out this weekend.",
        level: "B1",
        register: "informal",
      },
      {
        verb: "run into",
        meaning: "meet by chance",
        example: "I ran into my old teacher.",
        level: "B1",
      },
    ],
  },

  phrasal_verb_particles: {
    up: {
      meaning: "completion, increase, or improvement",
      examples: [
        {
          verb: "clean up",
          meaning: "tidy",
          example: "Please clean up your room.",
        },
        {
          verb: "speed up",
          meaning: "accelerate",
          example: "We need to speed up production.",
        },
      ],
      usage_notes: [
        "Often indicates completion",
        "Suggests upward movement or improvement",
        "Very common in separable phrasal verbs",
      ],
    },
    out: {
      meaning: "disappearance, distribution, or completion",
      examples: [
        {
          verb: "run out",
          meaning: "be depleted",
          example: "We ran out of milk.",
        },
        {
          verb: "hand out",
          meaning: "distribute",
          example: "The teacher handed out worksheets.",
        },
      ],
      usage_notes: [
        "Indicates movement away or outward",
        "Can suggest distribution or completion",
        "Common in both separable and inseparable forms",
      ],
    },
    off: {
      meaning: "separation, departure, or deactivation",
      examples: [
        {
          verb: "turn off",
          meaning: "deactivate",
          example: "He turned off the TV.",
        },
        {
          verb: "set off",
          meaning: "begin a journey",
          example: "They set off early.",
        },
      ],
      usage_notes: [
        "Often indicates separation or removal",
        "Can suggest deactivation",
        "Common in technology-related phrasal verbs",
      ],
    },
    in: {
      meaning: "entry, inclusion, or inward movement",
      examples: [
        {
          verb: "check in",
          meaning: "register",
          example: "We checked in at the hotel.",
        },
        {
          verb: "give in",
          meaning: "surrender",
          example: "She finally gave in.",
        },
      ],
      usage_notes: [
        "Indicates inward movement or entry",
        "Can suggest inclusion or submission",
        "Often used with accommodation and submission",
      ],
    },
  },

  phrasal_verb_families: {
    take: [
      {
        verb: "take off",
        meaning: "depart/remove",
        example: "The plane took off.",
      },
      {
        verb: "take over",
        meaning: "assume control",
        example: "She took over the company.",
      },
      {
        verb: "take up",
        meaning: "start a hobby",
        example: "He took up photography.",
      },
      {
        verb: "take after",
        meaning: "resemble",
        example: "She takes after her mother.",
      },
      {
        verb: "take back",
        meaning: "return/retract",
        example: "I take back what I said.",
      },
    ],
    get: [
      { verb: "get up", meaning: "wake up", example: "I got up at 6 a.m." },
      {
        verb: "get over",
        meaning: "recover from",
        example: "She got over the flu.",
      },
      {
        verb: "get back",
        meaning: "return",
        example: "He got back last night.",
      },
      {
        verb: "get along",
        meaning: "have good relationship",
        example: "They get along well.",
      },
      { verb: "get away", meaning: "escape", example: "The thief got away." },
    ],
    break: [
      {
        verb: "break down",
        meaning: "stop functioning",
        example: "The car broke down.",
      },
      {
        verb: "break up",
        meaning: "end relationship",
        example: "They broke up last year.",
      },
      {
        verb: "break in",
        meaning: "enter illegally",
        example: "Someone broke in last night.",
      },
      {
        verb: "break out",
        meaning: "escape/start suddenly",
        example: "War broke out.",
      },
      {
        verb: "break through",
        meaning: "make progress",
        example: "Scientists broke through.",
      },
    ],
  },

  idiomatic_difficulty_index: {
    A1: {
      characteristics: "Literal or physical meanings",
      examples: ["stand up", "sit down", "wake up"],
      learning_focus: [
        "Physical actions and movements",
        "Basic daily routines",
        "Classroom commands",
      ],
    },
    A2: {
      characteristics: "Semi-literal with some fixed expressions",
      examples: ["turn off", "get in", "go out"],
      learning_focus: [
        "Technology and appliances",
        "Basic social activities",
        "Simple idiomatic uses",
      ],
    },
    B1: {
      characteristics: "Everyday idiomatic use",
      examples: ["run out of", "look after", "put on"],
      learning_focus: [
        "Social relationships",
        "Daily problems and solutions",
        "Common idiomatic expressions",
      ],
    },
    B2: {
      characteristics: "Context-sensitive and mixed literal-idiomatic",
      examples: ["set up", "carry on", "give up"],
      learning_focus: [
        "Business and work contexts",
        "Complex social situations",
        "Multiple meaning awareness",
      ],
    },
    C1: {
      characteristics: "Abstract or layered meanings",
      examples: ["bring up", "break down", "take over"],
      learning_focus: [
        "Metaphorical extensions",
        "Sophisticated discourse",
        "Nuanced meaning differences",
      ],
    },
    C2: {
      characteristics: "Formal/informal shifts, passive forms, noun phrases",
      examples: ["be taken aback", "follow through", "bring about"],
      learning_focus: [
        "Literary and academic usage",
        "Stylistic variation",
        "Productive competence",
      ],
    },
  },

  phrasal_verbs_vs_multiword_verbs: {
    difference:
      "Phrasal verbs involve a verb and a particle; multi-word verbs can also include auxiliary or modal components.",
    comparison: [
      {
        type: "Phrasal Verb",
        example: "give up = stop doing",
        formality: "informal → neutral",
        usage_context: "everyday conversation and writing",
      },
      {
        type: "Multi-word Verb",
        example: "be supposed to = expected to",
        formality: "neutral → formal",
        usage_context: "formal and academic contexts",
      },
    ],
    distinction_criteria: [
      "Semantic unity and idiomaticity",
      "Syntactic behavior and flexibility",
      "Stress patterns and pronunciation",
      "Historical development and etymology",
    ],
  },

  academic_equivalents: {
    examples: [
      {
        phrasal: "bring about",
        academic: "cause/effect",
        example: "The changes brought about social reform.",
        register_shift: "neutral to formal",
      },
      {
        phrasal: "look into",
        academic: "investigate",
        example: "They are looking into the causes.",
        register_shift: "informal to formal",
      },
      {
        phrasal: "put forward",
        academic: "propose",
        example: "He put forward an interesting idea.",
        register_shift: "neutral to formal",
      },
      {
        phrasal: "go against",
        academic: "contradict",
        example: "It goes against the data.",
        register_shift: "informal to formal",
      },
    ],
    transformation_patterns: [
      "Phrasal verb → Single Latin-derived verb",
      "Informal construction → Formal academic language",
      "Conversational style → Written academic style",
    ],
  },

  semantic_categories: {
    motion_and_direction: [
      { verb: "come in", meaning: "enter", example: "Please come in." },
      {
        verb: "go out",
        meaning: "leave a place",
        example: "He went out for lunch.",
      },
      {
        verb: "get off",
        meaning: "leave a vehicle",
        example: "She got off the bus.",
      },
    ],
    change_of_state: [
      {
        verb: "burn out",
        meaning: "stop functioning",
        example: "He burned out from stress.",
      },
      {
        verb: "fade away",
        meaning: "gradually disappear",
        example: "The sound faded away.",
      },
      {
        verb: "dry up",
        meaning: "come to an end",
        example: "The funds dried up quickly.",
      },
    ],
    creation_and_destruction: [
      {
        verb: "set up",
        meaning: "establish",
        example: "They set up a new branch.",
      },
      {
        verb: "tear down",
        meaning: "demolish",
        example: "They tore down the old building.",
      },
      {
        verb: "build up",
        meaning: "accumulate",
        example: "She built up her confidence.",
      },
    ],
    social_interaction: [
      {
        verb: "show off",
        meaning: "display boastfully",
        example: "He always shows off his car.",
      },
      {
        verb: "back down",
        meaning: "withdraw",
        example: "She backed down from the argument.",
      },
      {
        verb: "stick up for",
        meaning: "defend",
        example: "He stuck up for his sister.",
      },
    ],
    mental_processes: [
      {
        verb: "figure out",
        meaning: "understand",
        example: "I can't figure out this problem.",
      },
      {
        verb: "think over",
        meaning: "consider carefully",
        example: "Let me think it over.",
      },
      {
        verb: "work out",
        meaning: "solve",
        example: "We need to work out a solution.",
      },
    ],
    physical_actions: [
      { verb: "pick up", meaning: "lift", example: "Pick up that book." },
      {
        verb: "put down",
        meaning: "place on surface",
        example: "Put down your bags.",
      },
      {
        verb: "turn around",
        meaning: "rotate",
        example: "Turn around and face me.",
      },
    ],
  },

  collocations_and_patterns: {
    phrasal_verb_noun: [
      {
        pattern: "give up smoking",
        explanation: "stop a habit",
        frequency: "very high",
      },
      {
        pattern: "take up painting",
        explanation: "start a hobby",
        frequency: "high",
      },
      {
        pattern: "bring up a topic",
        explanation: "mention a subject",
        frequency: "high",
      },
    ],
    adverb_intensifiers: [
      {
        pattern: "completely give up",
        example: "He completely gave up sugar.",
        effect: "emphasizes totality",
      },
      {
        pattern: "suddenly break down",
        example: "She suddenly broke down in tears.",
        effect: "emphasizes unexpectedness",
      },
    ],
    passive_patterns: [
      {
        pattern: "be brought up",
        example: "He was brought up in the countryside.",
        usage_note: "common in biographical contexts",
      },
      {
        pattern: "be taken in",
        example: "I was taken in by the scam.",
        usage_note: "indicates deception",
      },
    ],
  },

  phrasalVerb_register: {
    informal: [
      {
        verb: "chill out",
        meaning: "relax",
        example: "Let's chill out tonight.",
        register: "very informal",
      },
      {
        verb: "hang out",
        meaning: "spend time socially",
        example: "They're hanging out at the mall.",
        register: "informal",
      },
    ],
    formal_equivalent: [
      {
        phrasal: "go on",
        equivalent: "continue",
        example: "The meeting went on for hours.",
        context: "academic and business writing",
      },
      {
        phrasal: "bring about",
        equivalent: "cause",
        example: "It brought about major change.",
        context: "formal reports and essays",
      },
    ],
    neutral: [
      {
        verb: "find out",
        meaning: "discover",
        example: "I found out the truth.",
        register: "neutral",
      },
      {
        verb: "work out",
        meaning: "solve",
        example: "We worked out the problem.",
        register: "neutral",
      },
    ],
  },

  C2_advanced_idioms: [
    {
      idiom: "to be snowed under",
      meaning: "very busy",
      example: "I'm snowed under with work.",
      usage_notes: [
        "Metaphorical use of weather imagery",
        "Common in British English",
      ],
    },
    {
      idiom: "to brush up on",
      meaning: "refresh knowledge",
      example: "I need to brush up on my French.",
      usage_notes: [
        "Often used with skills or languages",
        "Implies previous knowledge",
      ],
    },
    {
      idiom: "to crack down on",
      meaning: "enforce laws strictly",
      example: "Police are cracking down on speeding.",
      usage_notes: [
        "Often used in law enforcement contexts",
        "Implies increased severity",
      ],
    },
  ],

  multi_meaning_verbs: {
    break: [
      {
        verb: "break down",
        meaning: "stop functioning (machine)",
        example: "The car broke down.",
        context: "mechanical failure",
      },
      {
        verb: "break down",
        meaning: "lose emotional control",
        example: "She broke down in tears.",
        context: "emotional state",
      },
      {
        verb: "break down",
        meaning: "analyze into parts",
        example: "Let's break down the problem.",
        context: "analytical thinking",
      },
    ],
    bring: [
      {
        verb: "bring up",
        meaning: "raise a child",
        example: "She was brought up in London.",
        context: "child rearing",
      },
      {
        verb: "bring up",
        meaning: "mention a topic",
        example: "He brought up an interesting point.",
        context: "conversation",
      },
      {
        verb: "bring up",
        meaning: "vomit",
        example: "The patient brought up blood.",
        context: "medical",
      },
    ],
  },

  cultural_notes: {
    british_vs_american: [
      {
        UK: "chat up",
        US: "hit on",
        meaning: "flirt",
        example: "He chatted her up at the pub.",
        cultural_context: "British English more indirect",
      },
      {
        UK: "call round",
        US: "drop by",
        meaning: "visit",
        example: "She called round last night.",
        cultural_context: "Regional vocabulary differences",
      },
    ],
    idiomatic_only: [
      {
        verb: "let down",
        meaning: "disappoint",
        note: "Cannot be interpreted literally",
        cultural_significance: "Common in expressing disappointment",
      },
      {
        verb: "pull through",
        meaning: "survive illness",
        note: "Strictly idiomatic",
        cultural_significance: "Often used in medical contexts",
      },
    ],
    regional_variations: [
      {
        region: "Northern England",
        phrasal_verb: "gan on",
        alternative: "go on",
        usage_context: "Regional dialect variation",
      },
      {
        region: "Scottish English",
        phrasal_verb: "ken on",
        alternative: "know about",
        usage_context: "Scots influence on English",
      },
    ],
  },

  teaching_strategies: {
    A1_A2: [
      "Use physical actions (TPR) for literal phrasal verbs",
      "Match pictures with meaning",
      "Simple gap-fill exercises",
      "Repetition and drilling",
    ],
    B1_B2: [
      "Sort phrasal verbs by topic or particle",
      "Do gap-fill and sentence completion tasks",
      "Practice with authentic materials",
      "Focus on collocation patterns",
    ],
    C1_C2: [
      "Contextualize with idioms in reading",
      "Translate between phrasal and formal equivalents",
      "Create stories using multiple phrasal verbs",
      "Analyze literary and academic texts",
    ],
    general_principles: [
      "Always teach in context",
      "Focus on high-frequency items first",
      "Practice both recognition and production",
      "Regular recycling and review",
    ],
    technology_integration: [
      "Use corpus tools for authentic examples",
      "Online exercises for self-study",
      "Video materials for contextual learning",
      "Apps for spaced repetition",
    ],
  },

  frequency_analysis: {
    most_common_100: [
      "get up",
      "go out",
      "come back",
      "sit down",
      "stand up",
      "turn on",
      "turn off",
      "pick up",
      "put down",
      "give up",
      "take off",
      "put on",
      "come in",
      "go away",
      "look at",
      "look for",
      "find out",
      "work out",
      "come on",
      "go on",
    ],
    academic_top_50: [
      "carry out",
      "point out",
      "bring about",
      "look into",
      "set out",
      "put forward",
      "take into account",
      "turn out",
      "come up with",
      "deal with",
      "result in",
      "lead to",
      "focus on",
      "based on",
    ],
    business_top_50: [
      "set up",
      "take over",
      "break down",
      "carry out",
      "follow up",
      "work out",
      "bring up",
      "point out",
      "deal with",
      "come up with",
      "cut down",
      "speed up",
      "slow down",
      "phase out",
      "scale up",
    ],
    everyday_conversation_top_50: [
      "hang out",
      "show up",
      "run into",
      "catch up",
      "calm down",
      "cheer up",
      "freak out",
      "mess up",
      "hook up",
      "break up",
      "make up",
      "get along",
      "fall out",
      "drop by",
      "come over",
    ],
  },

  corpus_insights: {
    statistical_data: {
      total_phrasal_verbs: 5000,
      frequency_distribution: "Top 100 phrasal verbs account for 50% of usage",
      register_distribution: "60% informal, 30% neutral, 10% formal",
    },
    usage_trends: [
      "Increasing use in digital communication",
      "Decline in formal written contexts",
      "Growing acceptance in academic writing",
      "Regional variations becoming standardized",
    ],
    emerging_phrasal_verbs: [
      "log off",
      "sign up",
      "scroll down",
      "zoom in",
      "power up",
      "sync up",
      "load up",
      "boot up",
    ],
  },
};

import { VerbsOfPerceptionType } from "@/types/grammars/grammar/verb_special/verbs_of_perception";

export const VerbsOfPerceptionData: VerbsOfPerceptionType = {
  definition: {
    core_concept:
      "Verbs of perception describe how we perceive the world through the senses—sight, hearing, smell, taste, and touch. They form a crucial grammatical category that bridges physical sensation and cognitive processing.",
    grammatical_role:
      "They function as linking verbs, action verbs, or auxiliary-like constructions, connecting subjects with sensory experiences and enabling complex complementation patterns including bare infinitives, gerunds, and that-clauses.",
    examples: [
      "see",
      "hear",
      "smell",
      "taste",
      "feel",
      "notice",
      "observe",
      "watch",
      "listen",
      "look",
      "sound",
      "appear",
      "seem",
      "glimpse",
      "perceive",
      "detect",
      "sense",
      "recognize",
      "discern",
      "witness",
      "behold",
    ],
    etymology:
      "Most perception verbs derive from Old English and Proto-Germanic roots, with 'see' from Proto-Germanic *sehwaną, 'hear' from *hauzijaną, reflecting the fundamental human experience of sensation.",
    linguistic_classification:
      "Perception verbs belong to the semantic field of experiential verbs, characterized by their ability to take both finite and non-finite complements, and their aspectual sensitivity to stative vs. dynamic interpretations.",
    semantic_fields: [
      "Sensory experience",
      "Cognitive awareness",
      "Evidentiality",
      "Epistemic modality",
      "Aspectual specification",
      "Experiencer-theme relations",
    ],
  },
  verbs_of_perception_vocab: {
    visual: [
      "see",
      "look",
      "watch",
      "observe",
      "notice",
      "glimpse",
      "glance",
      "stare",
      "peek",
      "scan",
      "spot",
      "view",
      "behold",
      "gaze",
      "eye",
      "perceive visually",
    ],

    auditory: [
      "hear",
      "listen",
      "overhear",
      "eavesdrop",
      "tune in",
      "detect sound",
      "catch (a word)",
      "monitor",
      "perceive aurally",
    ],

    tactile: [
      "feel",
      "touch",
      "press",
      "tap",
      "grab",
      "grasp",
      "pat",
      "rub",
      "stroke",
      "squeeze",
      "caress",
      "poke",
      "handle",
      "brush",
      "press against",
    ],

    olfactory: [
      "smell",
      "sniff",
      "inhale",
      "reek",
      "whiff",
      "detect a scent",
      "breathe in",
    ],

    gustatory: [
      "taste",
      "savor",
      "lick",
      "sip",
      "nibble",
      "sample",
      "detect flavor",
      "chew",
    ],

    cognitive_perception: [
      "notice",
      "realize",
      "recognize",
      "sense",
      "discern",
      "detect",
      "observe",
      "identify",
      "comprehend",
      "perceive",
      "make out",
      "interpret",
      "be aware of",
    ],

    idiomatic_expressions: [
      "pick up on",
      "zone in on",
      "zero in on",
      "come across as",
      "make out",
      "get the sense",
      "catch sight of",
      "lose sight of",
    ],

    stative_perception_verbs: [
      "see",
      "hear",
      "feel",
      "smell",
      "taste",
      "notice",
      "recognize",
      "seem",
      "appear",
    ],

    dynamic_perception_verbs: [
      "look",
      "watch",
      "listen",
      "sniff",
      "touch",
      "taste",
      "observe",
      "scan",
      "glance",
    ],

    phrasal_linked_perception_verbs: [
      "look at",
      "listen to",
      "stare at",
      "peek at",
      "glance at",
      "smell of",
      "taste like",
    ],

    metaphorical_and_extended_use: [
      "see through (someone)",
      "hear out (someone)",
      "feel for (someone)",
      "taste success",
      "smell trouble",
      "sense danger",
      "touch a nerve",
      "see eye to eye",
      "turn a blind eye",
      "music to my ears",
      "feast your eyes",
      "gut feeling",
    ],

    modal_perception_verbs: [
      "might see",
      "could hear",
      "should feel",
      "would smell",
      "must taste",
      "can't see",
      "won't hear",
      "shouldn't touch",
    ],

    causative_perception_verbs: [
      "make someone see",
      "let someone hear",
      "have someone feel",
      "get someone to look",
      "cause someone to notice",
    ],

    resultative_perception_verbs: [
      "see clearly",
      "hear distinctly",
      "feel completely",
      "smell strongly",
      "taste perfectly",
    ],
  },

  key_characteristics: {
    can_be_followed_by: [
      "bare infinitive (e.g., I saw him leave)",
      "present participle (e.g., I saw him leaving)",
      "object + verb structure",
      "that-clauses (less common for sensory verbs)",
      "adjective complements (e.g., It sounds good)",
      "noun phrases (e.g., I hear music)",
      "wh-clauses (e.g., I see what you mean)",
    ],
    aspect_behavior:
      "Some perception verbs are not used in continuous tenses when they refer to passive experience (e.g., 'I hear music' not 'I am hearing music'). Dynamic perception verbs can take progressive forms.",
    stative_dynamic: {
      stative: [
        "hear",
        "see",
        "feel (mental state)",
        "smell (passive)",
        "taste (passive)",
        "seem",
        "appear",
      ],
      dynamic: [
        "watch",
        "listen",
        "look",
        "smell (actively)",
        "taste (actively)",
        "observe",
        "examine",
        "scan",
      ],
    },
    syntactic_properties: [
      "Can function as main verbs or auxiliary-like constructions",
      "Allow exceptional case marking in complement clauses",
      "Permit both finite and non-finite complementation",
      "Show aspectual restrictions with progressive forms",
      "Allow subject-auxiliary inversion in questions",
    ],
    semantic_roles: {
      experiencer: "The entity that perceives (subject of perception verb)",
      theme: "The entity or event being perceived (direct object)",
      stimulus: "The source or cause of the perceptual experience",
    },
    complementation_patterns: [
      "Intransitive: She looks beautiful",
      "Transitive: I see the car",
      "Complex transitive: I saw him running",
      "Ditransitive: rare, but possible in some contexts",
      "Prepositional: listen to, look at",
    ],
  },

  perception_types: {
    sight: [
      "see",
      "look",
      "watch",
      "notice",
      "observe",
      "glimpse",
      "spot",
      "peer",
      "gaze",
      "stare",
    ],
    hearing: [
      "hear",
      "listen",
      "overhear",
      "eavesdrop",
      "detect sound",
      "catch",
    ],
    smell: ["smell", "sniff", "scent", "inhale", "detect odor"],
    taste: ["taste", "savor", "sample", "lick", "sip"],
    touch: ["feel", "press", "grab", "poke", "stroke", "caress"],
  },
  low_precision: {
    sight: ["look around", "glance", "peer vaguely"],
    hearing: ["hear something", "listen generally"],
    smell: ["smell around", "sniff about"],
    taste: ["taste something", "sample generally"],
    touch: ["feel around", "touch generally"],
  },

  usage: [
    {
      type: "Bare infinitive (active, complete action)",
      form: "subject + verb of perception + object + base verb",
      example: "I heard him close the door.",
      advanced_examples: [
        "She saw the dog jump over the fence.",
        "We watched them perform live on stage.",
        "Did you hear her sing that song?",
        "I felt the ground shake during the earthquake.",
      ],
      register: "neutral",
      frequency: "high",
      pragmatic_function: "reporting completed events witnessed directly",
    },
    {
      type: "Present participle (active, ongoing action)",
      form: "subject + verb of perception + object + -ing verb",
      example: "I heard him singing in the shower.",
      advanced_examples: [
        "I saw her walking down the street.",
        "They caught me stealing cookies.",
        "We observed the birds migrating south.",
        "Can you smell something burning?",
      ],
      register: "neutral",
      frequency: "high",
      pragmatic_function: "reporting ongoing or interrupted events",
    },
    {
      type: "Passive participle",
      form: "subject + verb of perception + object + past participle (rare)",
      example: "She heard the window broken by the wind.",
      advanced_examples: [
        "He saw the documents stolen by the intruder.",
        "We felt the building shaken by the earthquake.",
        "They watched the castle destroyed by the storm.",
      ],
      register: "formal",
      frequency: "low",
      pragmatic_function:
        "emphasizing the result or state of a completed action",
    },
    {
      type: "Linking verb usage",
      form: "subject + verb of perception + adjective or complement",
      example: "That sounds interesting.",
      advanced_examples: [
        "The soup tastes delicious.",
        "She looks exhausted after work.",
        "This fabric feels smooth and soft.",
        "The proposal seems reasonable to me.",
      ],
      register: "neutral",
      frequency: "very high",
      pragmatic_function:
        "describing qualities or states perceived through senses",
    },
  ],

  levels: {
    A1: {
      focus:
        "Basic verbs of perception (see, hear, feel, smell, taste) in simple present tense",
      skills: [
        "Use basic perception verbs in simple present tense",
        "Recognize sensory descriptions (e.g., The cake smells good)",
        "Understand basic sensory vocabulary",
        "Form simple questions with perception verbs",
      ],
      vocabulary: [
        "see",
        "look",
        "hear",
        "smell",
        "taste",
        "feel",
        "good",
        "bad",
        "nice",
        "big",
        "small",
        "hot",
        "cold",
      ],
      structures: [
        "Subject + perception verb + adjective (It looks nice)",
        "Subject + perception verb + noun (I see a cat)",
        "Simple present tense only",
        "Basic question formation (Do you see?)",
      ],
      communicative_functions: [
        "Describing things you can see/hear/smell/taste/feel",
        "Expressing simple sensory experiences",
        "Asking basic questions about perception",
      ],
      assessment_criteria: [
        "Can use 5 basic perception verbs correctly",
        "Can form simple sentences with perception + adjective",
        "Can ask and answer basic sensory questions",
      ],
    },
    A2: {
      focus:
        "Using verbs of perception with adjectives, noun complements, and basic contrast between look/see/watch, hear/listen",
      skills: [
        "Describe sensory experiences using simple structures (e.g., It looks nice)",
        "Differentiate between look/see/watch, hear/listen",
        "Use perception verbs in past tense",
        "Express preferences using sensory language",
      ],
      vocabulary: [
        "watch",
        "listen",
        "sound",
        "appear",
        "seem",
        "beautiful",
        "ugly",
        "loud",
        "quiet",
        "soft",
        "hard",
        "sweet",
        "sour",
        "delicious",
      ],
      structures: [
        "It sounds/looks/feels/smells/tastes + adjective",
        "I can see/hear + noun",
        "Simple past tense with perception verbs",
        "Comparative forms (looks better, sounds louder)",
      ],
      communicative_functions: [
        "Describing past sensory experiences",
        "Comparing sensory impressions",
        "Expressing opinions about what you perceive",
      ],
      assessment_criteria: [
        "Can distinguish between similar perception verbs",
        "Can use perception verbs in past tense accurately",
        "Can make simple comparisons using sensory language",
      ],
    },
    B1: {
      focus:
        "Introducing infinitive and participle complements, basic verb + object + verb patterns",
      skills: [
        "Use 'see/hear + object + verb-ing' vs. 'see/hear + object + bare verb'",
        "Report sensory events accurately",
        "Use perception verbs in various tenses including present perfect",
        "Understand the difference between active and passive perception",
      ],
      vocabulary: [
        "notice",
        "observe",
        "detect",
        "recognize",
        "distinguish",
        "perceive",
        "glimpse",
        "overhear",
        "witness",
        "spot",
      ],
      structures: [
        "I saw him running/run",
        "I heard her singing/sing",
        "Present perfect with perception verbs",
        "Passive voice with perception verbs (was seen, was heard)",
      ],
      communicative_functions: [
        "Reporting what you witnessed",
        "Distinguishing between ongoing and completed actions",
        "Giving detailed descriptions of events",
      ],
      assessment_criteria: [
        "Can use object + -ing/bare infinitive patterns correctly",
        "Can report past experiences using appropriate tense",
        "Can distinguish between different types of perceived actions",
      ],
    },
    B2: {
      focus:
        "Contrast passive and active perception structures, complex complementation patterns",
      skills: [
        "Use verbs of perception in narratives and storytelling",
        "Recognize stative vs dynamic meanings in context",
        "Master complex sentence structures with perception verbs",
        "Use perception verbs metaphorically",
      ],
      vocabulary: [
        "discern",
        "scrutinize",
        "monitor",
        "surveillance",
        "perception",
        "sensory",
        "cognitive",
        "intuitive",
        "subconscious",
        "awareness",
      ],
      structures: [
        "Complex sentences with multiple clauses",
        "Reported speech with perception verbs",
        "Conditional sentences with perception verbs",
        "Metaphorical usage (see the point, hear between the lines)",
      ],
      communicative_functions: [
        "Creating detailed narratives with sensory details",
        "Expressing abstract concepts through sensory metaphors",
        "Analyzing and interpreting sensory information",
      ],
      assessment_criteria: [
        "Can use perception verbs in complex grammatical structures",
        "Can employ metaphorical uses appropriately",
        "Can create coherent narratives with rich sensory details",
      ],
    },
    C1: {
      focus:
        "Advanced sensory metaphor, subtle distinctions, academic and literary usage",
      skills: [
        "Interpret figurative uses (e.g., That smells fishy)",
        "Use in idioms and extended expressions",
        "Master register variations and stylistic choices",
        "Analyze semantic nuances between similar perception verbs",
      ],
      vocabulary: [
        "nuanced perception verbs",
        "synesthetic expressions",
        "idiomatic phrases",
        "academic terminology",
        "literary devices",
        "semantic fields",
      ],
      structures: [
        "Complex idiomatic expressions",
        "Academic writing with perception verbs",
        "Literary devices and figurative language",
        "Cleft sentences and emphasis structures",
      ],
      communicative_functions: [
        "Academic discourse and analysis",
        "Literary appreciation and criticism",
        "Sophisticated argumentation using sensory evidence",
        "Cross-cultural communication about perception",
      ],
      assessment_criteria: [
        "Can interpret and use idiomatic expressions fluently",
        "Can analyze literary and academic texts with perception themes",
        "Can make subtle semantic distinctions between perception verbs",
      ],
    },
    C2: {
      focus: "Mastery and stylistic nuance, creative and academic applications",
      skills: [
        "Employ in literary, poetic, or persuasive writing",
        "Combine with other grammar devices like cleft sentences or inversion",
        "Master all register variations from colloquial to academic",
        "Create original expressions and metaphors",
      ],
      vocabulary: [
        "Complete mastery of perception verb register variations",
        "Ability to coin new metaphorical expressions",
        "Understanding of diachronic semantic change",
        "Cross-linguistic perception concepts",
      ],
      structures: [
        "All complex syntactic structures with perception verbs",
        "Stylistic manipulation for rhetorical effect",
        "Integration with advanced grammatical devices",
        "Creative and innovative usage patterns",
      ],
      communicative_functions: [
        "Professional and academic writing at native-speaker level",
        "Creative writing and literary production",
        "Intercultural communication and translation",
        "Teaching and explaining perception concepts to others",
      ],
      assessment_criteria: [
        "Demonstrates native-like intuition for perception verb usage",
        "Can manipulate language creatively and effectively",
        "Shows awareness of sociolinguistic and pragmatic factors",
        "Can adapt usage to any context or audience",
      ],
    },
  },

  advanced_usage: {
    idioms_and_expressions: [
      {
        phrase: "smell fishy",
        meaning: "seems suspicious or not right",
        register: "informal",
        frequency: "common",
        example_in_context: "His excuse for being late smells fishy to me.",
      },
      {
        phrase: "see the light",
        meaning: "understand or realize something clearly",
        register: "neutral",
        frequency: "common",
        example_in_context: "After the explanation, she finally saw the light.",
      },
      {
        phrase: "turn a deaf ear",
        meaning: "refuse to listen",
        register: "formal",
        frequency: "moderate",
        example_in_context: "The manager turned a deaf ear to our complaints.",
      },
      {
        phrase: "watch like a hawk",
        meaning: "watch closely and carefully",
        register: "neutral",
        frequency: "common",
        example_in_context:
          "The teacher watched the students like a hawk during the exam.",
      },
      {
        phrase: "look down on",
        meaning: "consider someone inferior",
        register: "neutral",
        frequency: "common",
        example_in_context:
          "She looks down on people who didn't go to university.",
      },
      {
        phrase: "keep your eyes peeled",
        meaning: "watch carefully for something",
        register: "informal",
        frequency: "common",
        example_in_context: "Keep your eyes peeled for the exit sign.",
      },
      {
        phrase: "music to my ears",
        meaning: "exactly what someone wants to hear",
        register: "neutral",
        frequency: "common",
        example_in_context:
          "When he said I got the job, it was music to my ears.",
      },
    ],
    metaphoric_usages: [
      "She *saw* the truth in his words.",
      "He *felt* the tension in the room.",
      "It *tasted* like success.",
    ],
    contrast_usage: [
      {
        correct: "I saw her leave the room.",
        incorrect: "I saw her to leave the room.",
        explanation:
          "Perception verbs take bare infinitive, not to-infinitive, when followed by object + verb.",
      },
      {
        correct: "They heard the engine start.",
        incorrect: "They heard the engine to start.",
        explanation:
          "Use bare infinitive (without 'to') after perception verbs with object complements.",
      },
      {
        correct: "I watched him working.",
        incorrect: "I watched him to work.",
        explanation:
          "Use -ing form to show ongoing action, or bare infinitive for complete action, but never to-infinitive.",
      },
      {
        correct: "She feels comfortable.",
        incorrect: "She is feeling comfortable now.",
        explanation:
          "When 'feel' means 'seem' or describes a state, it's usually not used in progressive form.",
      },
    ],
    stylistic_variations: [
      "Formal: I observed that the situation had deteriorated",
      "Informal: I saw things were getting worse",
      "Literary: He beheld the magnificent sunset",
      "Technical: The sensor detected an anomaly",
      "Academic: Participants reported perceiving subtle changes",
    ],
    discourse_functions: [
      "Establishing evidentiality in arguments",
      "Creating vivid descriptions in narratives",
      "Reporting observations in academic writing",
      "Building suspense through sensory details",
      "Expressing certainty levels in testimonies",
    ],
  },

  recognition_patterns: {
    cues: [
      "Sensory nouns (sound, smell, taste, appearance)",
      "Verbs followed by adjectives (It sounds good)",
      "Object + verb-ing or bare verb (I saw him running / run)",
    ],
    collocations: {
      see: ["a movie", "clearly", "someone do something"],
      hear: ["a noise", "music", "someone singing"],
      feel: ["cold", "the breeze", "someone touch me"],
      smell: ["something burning", "flowers"],
      taste: ["delicious", "sweet", "bitter"],
    },
  },

  common_mistakes: [
    {
      mistake: "I saw him to leave.",
      correction: "I saw him leave.",
      note: "Do not use 'to' with bare infinitive after verbs of perception.",
    },
    {
      mistake: "She is hearing music now.",
      correction: "She hears music now.",
      note: "'Hear' is not used in the present continuous when referring to passive perception.",
    },
    {
      mistake: "He listened a song.",
      correction: "He listened to a song.",
      note: "'Listen' requires the preposition 'to'.",
    },
  ],

  learning_tips: [
    "Practice identifying the difference between 'bare infinitive' and '-ing' after perception verbs.",
    "Use real-life observation activities to describe what you see/hear/smell in English.",
    "Record yourself describing events using both forms: 'I saw him open the door' vs 'I saw him opening the door'.",
    "Create mini-dialogues using idiomatic expressions with perception verbs.",
  ],

  related_grammar_topics: [
    "Linking verbs",
    "Stative vs dynamic verbs",
    "Participle clauses",
    "Infinitives vs gerunds",
    "Object + complement structures",
  ],

  references: [
    {
      title: "English Grammar in Use (Raymond Murphy)",
      section: "Units 51, 52 - Verb patterns with see/hear/feel",
      author: "Raymond Murphy",
      year: 2019,
      type: "book",
      reliability: "high",
      description:
        "Comprehensive guide to English grammar with clear explanations and practice exercises for intermediate learners, covering perception verb patterns extensively.",
    },
    {
      title: "Practical English Usage (Michael Swan)",
      section: "Perception verbs and verb patterns",
      author: "Michael Swan",
      year: 2016,
      type: "book",
      reliability: "high",
      description:
        "Authoritative reference work addressing common problems in English usage, including detailed coverage of perception verb complementation patterns.",
    },
    {
      title: "Cambridge English Grammar Profile",
      link: "https://www.englishprofile.org/grammar",
      type: "website",
      reliability: "high",
      description:
        "Research-based grammar profile providing detailed information about grammar structures at different CEFR levels, including perception verbs.",
    },
    {
      title: "The Oxford English Grammar (Sidney Greenbaum)",
      author: "Sidney Greenbaum",
      year: 1996,
      type: "book",
      reliability: "high",
      description:
        "Comprehensive academic grammar of English covering syntactic and semantic aspects of perception verbs in detail.",
    },
    {
      title: "A Comprehensive Grammar of the English Language (Quirk et al.)",
      author: "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
      year: 1985,
      type: "book",
      reliability: "high",
      description:
        "The most comprehensive academic grammar of English, providing detailed analysis of perception verb syntax and semantics.",
    },
    {
      title: "Cambridge Grammar of English (Huddleston & Pullum)",
      author: "Rodney Huddleston, Geoffrey K. Pullum",
      year: 2002,
      type: "book",
      reliability: "high",
      description:
        "Modern descriptive grammar providing detailed syntactic analysis of perception verb constructions and their complementation patterns.",
    },
    {
      title: "British National Corpus (BNC)",
      link: "https://www.english-corpora.org/bnc/",
      type: "corpus",
      reliability: "high",
      description:
        "Large corpus of British English providing authentic usage data for perception verbs across different registers and text types.",
    },
    {
      title: "Corpus of Contemporary American English (COCA)",
      link: "https://www.english-corpora.org/coca/",
      type: "corpus",
      reliability: "high",
      description:
        "Comprehensive corpus of American English offering frequency and collocational data for perception verbs in contemporary usage.",
    },
  ],
  extended_verbs: [
    "glimpse",
    "peek",
    "peer",
    "eavesdrop",
    "overhear",
    "sniff",
    "savor",
    "grasp",
    "stroke",
  ],

  categorized_verbs_by_precision: {
    high_precision: {
      sight: ["glimpse", "notice", "observe"],
      hearing: ["overhear", "eavesdrop", "catch a sound"],
      smell: ["detect", "sniff", "inhale"],
      taste: ["savor", "sample"],
      touch: ["stroke", "caress", "tap"],
    },
    general_perception: {
      sight: ["see", "look", "watch"],
      hearing: ["hear", "listen"],
      smell: ["smell"],
      taste: ["taste"],
      touch: ["feel"],
    },
  },

  advanced_structures: [
    {
      form: "It + verb of perception (impersonal structure)",
      example: "It seems he has left already.",
      usage_note: "Used for indirect perception or reporting assumption.",
    },
    {
      form: "Subject + verb of perception + that-clause",
      example: "I heard that she won the contest.",
      usage_note: "Common in reported speech and formal writing.",
    },
    {
      form: "Subject + get + past participle + by sensory trigger",
      example: "He got caught stealing by the guard.",
      usage_note: "Passive structure involving perception.",
    },
  ],

  cross_topic_usage: {
    with_modal_verbs: [
      "You must have heard that noise.",
      "She might have seen the thief.",
    ],
    in_conditional: [
      "If you hear anything unusual, let me know.",
      "Had I seen the warning, I would have stopped.",
    ],
    with_causative_verbs: [
      "I made him listen carefully.",
      "We let them watch the experiment closely.",
    ],
  },

  perception_in_literary_contexts: [
    "The silence *screamed* louder than words.",
    "She could *feel* the weight of his gaze.",
    "The aroma *whispered* memories of childhood.",
    "Darkness *wrapped* itself around them like a blanket.",
  ],

  C2_extensions: {
    syntactic_mastery: [
      "Employing cleft structures for focus: 'What I saw was shocking.'",
      "Inversion for emphasis: 'Rarely had he heard such silence.'",
    ],
    stylistic_range: [
      "Using perception verbs metaphorically for effect in narrative",
      "Switching between literal and figurative senses fluently",
    ],
    academic_proficiency: [
      "Distinguishing between sensory perception and cognitive judgment",
      "Analyzing semantic roles of experiencer/theme with these verbs",
    ],
  },

  pronunciation_and_phonetics_notes: {
    minimal_pairs: [
      { word1: "hear", word2: "here" },
      { word1: "feel", word2: "fill" },
      { word1: "seen", word2: "sin" },
    ],
    common_mispronunciations: [
      { word: "listen", issue: "silent 't' not dropped" },
      { word: "heard", issue: "confused with 'hard'" },
    ],
    tips: [
      "Link perception verbs to expressive intonation (e.g., 'I *heard* that!')",
      "Practice stress with compound verbs: 'over*hear*', 'eaves*drop*'",
    ],
  },

  multisensory_phrases_for_IELTS: [
    "The aroma of fresh coffee filled the air, awakening my senses.",
    "I could feel the tension rise with every word spoken.",
    "From the top of the hill, I watched the city breathe under the stars.",
    "The silence was deafening after the explosion.",
    "She looked like she had seen a ghost.",
  ],
  cognitive_perception_contrast: {
    description:
      "Một số động từ perception có thể giao thoa với nhận thức (cognitive perception), nhưng không hoàn toàn giống.",
    contrast_pairs: [
      { perception: "see", cognitive: "realize" },
      { perception: "hear", cognitive: "understand" },
      { perception: "feel", cognitive: "believe" },
      { perception: "look", cognitive: "analyze" },
    ],
    examples: [
      "I saw him cry. (physical sight)",
      "I realized he was sad. (mental recognition)",
      "She felt the breeze. (physical)",
      "She felt he was lying. (emotional intuition)",
    ],
  },

  sensory_simulation_phrases: {
    purpose:
      "Câu dùng để mô phỏng cảm giác giúp nâng cao từ vựng và kỹ năng diễn đạt",
    examples: [
      "It tasted like sunshine in a glass.",
      "He sounded like thunder in a bottle.",
      "The room smelled like forgotten memories.",
      "Her touch felt like static electricity dancing on skin.",
    ],
    level: "C1-C2 creative writing and IELTS high-band speaking",
  },

  scientific_and_technical_use: {
    description:
      "Cách dùng động từ tri giác trong báo cáo nghiên cứu hoặc văn bản kỹ thuật.",
    examples: [
      "Participants reported feeling a tingling sensation after exposure.",
      "Subjects were observed reacting to auditory stimuli.",
      "The device can detect subtle changes in skin temperature (tactile perception).",
    ],
    field_usage: {
      psychology: ["perceive", "sense", "notice"],
      AI_NLP: ["recognize", "detect", "classify"],
      medicine: ["observe", "report", "experience"],
    },
  },

  advanced_errors_and_misinterpretation: [
    {
      mistake: "I watched him to leave.",
      correction: "I watched him leave.",
      explanation:
        "Dùng sai cấu trúc: không có 'to' sau perception verb + object + verb.",
    },
    {
      mistake: "He is seeing the movie now.",
      correction: "He is watching the movie now.",
      explanation:
        "'See' là trải nghiệm không chủ ý; 'watch' là chủ động theo dõi.",
    },
    {
      mistake: "I feel myself tired.",
      correction: "I feel tired.",
      explanation:
        "'Feel' không đi với 'myself' trong cấu trúc này, vì 'tired' là complement.",
    },
    {
      mistake: "It smells well.",
      correction: "It smells good.",
      explanation:
        "Sau linking verb dùng adjective (good), không dùng adverb (well).",
    },
  ],

  learning_frameworks_and_ai_apps: {
    CEFR_alignment: true,
    Bloom_taxonomy: {
      remember: ["List five senses", "Identify basic perception verbs"],
      understand: ["Explain difference between 'hear' and 'listen'"],
      apply: ["Use perception verbs in a short story"],
      analyze: ["Compare sensory vs cognitive perception"],
      evaluate: ["Judge the most vivid sensory description"],
      create: ["Write a descriptive paragraph using 5 senses"],
    },
    AI_suggestions: {
      language_learning_apps: [
        "Use voice input to describe what you hear/see – AI gives correction",
        "Image + caption exercises with perception verbs (e.g., 'What do you see?')",
        "AI pronunciation feedback on phrases like 'It smells delicious'",
      ],
      chatbot_conversation: [
        "Bot: 'You hear a strange sound at night. What do you do?'",
        "User: 'I listen carefully and try to locate the source.'",
      ],
    },
  },
};

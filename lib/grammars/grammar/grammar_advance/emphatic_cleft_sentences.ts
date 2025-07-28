import { emphaticCleftSentencesType } from "@/types/grammars/grammar/grammar_advance/emphatic_cleft_sentences";

export const emphaticCleftSentencesData: emphaticCleftSentencesType = {
  topic: "Emphatic / Cleft Sentences",
  levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  description:
    "Cleft sentences are syntactic constructions that divide a single clause into two parts to emphasize a particular element. They are fundamental structures in English for information packaging, focus management, and discourse organization. These constructions appear across all proficiency levels with increasing complexity and sophistication.",
  goals: [
    "To master information focus and emphasis in English communication",
    "To enhance sentence variety and expressiveness across proficiency levels",
    "To develop sophisticated rhetorical and stylistic competence",
    "To understand the pragmatic functions of emphasis in discourse",
    "To achieve native-like fluency in focus management",
  ],
  recognition_patterns: [
    "It + be + emphasized part + (that/who/which) + rest of clause",
    "What + clause + be + emphasized part",
    "All + clause + be + emphasized part",
    "Where/When/Why + clause",
    "The thing (that) ... is ...",
    "The reason why ... is ...",
    "The way (that) ... is ...",
    "The place where ... is ...",
    "The time when ... is ...",
  ],

  level_specific_content: {
    A1: {
      level: "A1",
      focus_areas: [
        "Basic emphasis with stress and intonation",
        "Simple word order for emphasis",
        "Recognition of emphatic patterns in listening",
      ],
      detailed_explanation:
        "At A1 level, emphasis is primarily achieved through stress, intonation, and basic word order changes. Students learn to recognize when speakers emphasize certain words and begin to understand that English uses various methods to highlight important information.",
      key_structures: [
        "THAT book! (stress emphasis)",
        "I like chocolate. (stress on 'chocolate')",
        "She is very tall. (stress on 'very')",
      ],
      examples: [
        "I LOVE pizza! (stress emphasis)",
        "This is MY book. (possessive emphasis)",
        "She is SO beautiful. (intensifier emphasis)",
      ],
      learning_objectives: [
        "Recognize emphatic stress in spoken English",
        "Understand basic word stress patterns",
        "Use simple intensifiers for emphasis",
      ],
      common_mistakes: [
        "Not recognizing stressed words in listening",
        "Placing stress on wrong syllables",
        "Monotone speaking without emphasis",
      ],
      practice_points: [
        "Listen for stressed words in teacher speech",
        "Practice saying words with correct stress",
        "Use gestures to show emphasis",
      ],
    },
    A2: {
      level: "A2",
      focus_areas: [
        "Basic auxiliary verb emphasis",
        "Simple cleft-like structures",
        "Comparative emphasis",
      ],
      detailed_explanation:
        "A2 learners begin to use auxiliary verbs for emphasis and start recognizing simple cleft structures. They learn that 'do/does/did' can emphasize actions and begin to understand that sentence structure can change for emphasis.",
      key_structures: [
        "I DO like it!",
        "She DOES work hard.",
        "They DID arrive on time.",
      ],
      examples: [
        "I do understand! (emphasizing understanding)",
        "She does speak English well. (confirming ability)",
        "We did finish the homework. (confirming completion)",
      ],
      learning_objectives: [
        "Use auxiliary verbs for emphasis",
        "Recognize basic emphatic patterns",
        "Distinguish between normal and emphatic sentences",
      ],
      common_mistakes: [
        "Forgetting to use auxiliary verbs for emphasis",
        "Using wrong auxiliary verb forms",
        "Confusing emphatic do with question formation",
      ],
      practice_points: [
        "Practice auxiliary verb emphasis in conversations",
        "Listen for emphatic patterns in media",
        "Use emphatic forms to correct misunderstandings",
      ],
    },
    B1: {
      level: "B1",
      focus_areas: [
        "Introduction to It-cleft sentences",
        "Basic Wh-cleft recognition",
        "Emphasis in storytelling",
      ],
      detailed_explanation:
        "B1 learners are introduced to formal cleft structures, particularly It-cleft sentences. They learn to use these structures to highlight specific information and begin to understand how clefts can improve their storytelling and explanations.",
      key_structures: [
        "It was + noun/pronoun + who/that + clause",
        "It is + adverbial + that/when/where + clause",
        "What + clause + is + noun phrase",
      ],
      examples: [
        "It was Mary who called yesterday.",
        "It's at school that I feel happy.",
        "What I need is more time.",
      ],
      learning_objectives: [
        "Form basic It-cleft sentences correctly",
        "Use clefts to emphasize different sentence elements",
        "Recognize when to use 'who' vs 'that' in clefts",
      ],
      common_mistakes: [
        "Using 'that' instead of 'who' for people",
        "Incorrect verb tense in cleft sentences",
        "Overusing cleft structures inappropriately",
      ],
      practice_points: [
        "Transform simple sentences into It-clefts",
        "Practice emphasizing different sentence parts",
        "Use clefts in storytelling activities",
      ],
    },
    B2: {
      level: "B2",
      focus_areas: [
        "Mastery of Wh-cleft sentences",
        "Pseudo-cleft variations",
        "Emphatic contrast techniques",
      ],
      detailed_explanation:
        "B2 learners master Wh-cleft sentences and learn various pseudo-cleft structures. They understand how to use clefts for contrast and begin to appreciate the stylistic effects of different cleft types in both spoken and written English.",
      key_structures: [
        "What + clause + be + emphasized element",
        "Where/When/Why + clause + be + emphasized element",
        "The thing that + clause + be + emphasized element",
      ],
      examples: [
        "What surprises me is his dedication.",
        "Where I want to live is by the ocean.",
        "The thing that bothers me is the noise.",
      ],
      learning_objectives: [
        "Use Wh-clefts fluently in speech and writing",
        "Create contrast using cleft structures",
        "Choose appropriate cleft types for different contexts",
      ],
      common_mistakes: [
        "Subject-verb disagreement in Wh-clefts",
        "Using clefts inappropriately in informal contexts",
        "Mixing cleft types incorrectly",
      ],
      practice_points: [
        "Practice Wh-cleft transformations",
        "Use clefts in argumentative writing",
        "Analyze cleft usage in authentic texts",
      ],
    },
    C1: {
      level: "C1",
      focus_areas: [
        "Advanced cleft variations",
        "All-cleft and minimizing structures",
        "Sophisticated emphasis techniques",
      ],
      detailed_explanation:
        "C1 learners explore advanced cleft variations including All-clefts, minimizing clefts, and complex emphatic structures. They learn to use clefts for sophisticated rhetorical effects and understand the pragmatic nuances of different emphatic choices.",
      key_structures: [
        "All + clause + be + emphasized element",
        "The only thing + clause + be + emphasized element",
        "It's not that + clause, it's that + clause",
      ],
      examples: [
        "All I want is some peace and quiet.",
        "The only thing I regret is not trying harder.",
        "It's not that I don't like him, it's that I don't trust him.",
      ],
      learning_objectives: [
        "Use advanced cleft structures appropriately",
        "Create complex emphatic contrasts",
        "Understand pragmatic effects of cleft choices",
      ],
      common_mistakes: [
        "Overcomplicating simple emphatic needs",
        "Using advanced clefts in inappropriate registers",
        "Failing to maintain coherence with complex clefts",
      ],
      practice_points: [
        "Practice advanced cleft transformations",
        "Analyze cleft usage in academic writing",
        "Create sophisticated arguments using clefts",
      ],
    },
    C2: {
      level: "C2",
      focus_areas: [
        "Mastery of all cleft types",
        "Stylistic and rhetorical cleft usage",
        "Creative and artistic emphasis",
      ],
      detailed_explanation:
        "C2 learners achieve mastery of all cleft types and learn to use them for sophisticated stylistic and rhetorical effects. They understand the subtle pragmatic differences between cleft variations and can employ them creatively in both formal and artistic contexts.",
      key_structures: [
        "Reversed/Inverted clefts",
        "Inferential clefts with complex noun phrases",
        "Nested and recursive cleft structures",
      ],
      examples: [
        "A genius is what he is, not what people think.",
        "The very fact that you're here shows your commitment.",
        "What bothers me is not what he said, but how he said it.",
      ],
      learning_objectives: [
        "Employ clefts for sophisticated rhetorical effects",
        "Create original emphatic constructions",
        "Understand subtle pragmatic distinctions between cleft types",
      ],
      common_mistakes: [
        "Over-elaborating cleft structures unnecessarily",
        "Losing clarity in pursuit of sophistication",
        "Inappropriate register choices with complex clefts",
      ],
      practice_points: [
        "Create original emphatic constructions",
        "Analyze cleft usage in literature and rhetoric",
        "Develop personal style using varied emphasis techniques",
      ],
    },
  },

  main_types: [
    {
      type: "It-Cleft Sentences",
      structure: "It + be + emphasized part + that/who/which + clause",
      level: "B1",
      purpose:
        "To highlight a specific part of the sentence and create focus on new or important information",
      examples: [
        "It was John who broke the window.",
        "It is the cake that she baked yesterday.",
        "It was at the party that I met her.",
        "It's because of the rain that we stayed home.",
        "It was in 1969 that humans first landed on the moon.",
      ],
      variations: [
        "It was not John who broke the window, but Mike.",
        "It was in the evening that she arrived.",
        "It wasn't until midnight that he returned.",
        "It was only yesterday that I understood.",
      ],
      detailed_rules: [
        "Use 'who' for people, 'that' for things and people (informal)",
        "Use 'which' for things in formal contexts",
        "Verb tense in cleft must match the original sentence",
        "Can emphasize subject, object, adverbial phrases",
        "Cannot emphasize the main verb directly",
      ],
      formal_vs_informal: {
        formal: [
          "It was Professor Smith who conducted the research.",
          "It is in this context that we must consider the implications.",
        ],
        informal: [
          "It's Tom that called you.",
          "It was yesterday that we met.",
        ],
      },
    },
    {
      type: "Wh-Cleft / Pseudo-Cleft Sentences",
      structure: "What/Where/When/Why + clause + be + emphasized part",
      level: "B2",
      purpose:
        "To shift focus to the complement and provide definitional or explanatory emphasis",
      examples: [
        "What I need is a good sleep.",
        "What surprised me was his honesty.",
        "What she likes is classical music.",
        "Where I grew up is a small village.",
        "When I feel happiest is during summer.",
        "Why he left is still unclear to me.",
      ],
      variations: [
        "Where I want to go is the beach.",
        "When I feel best is in the morning.",
        "Why he left is unclear.",
        "How she solved it was brilliant.",
        "Who I admire most is my grandmother.",
      ],
      detailed_rules: [
        "Subject-verb agreement follows the complement",
        "Can use various wh-words: what, where, when, why, how, who",
        "The clause after the wh-word contains the background information",
        "The complement after 'be' contains the new/focused information",
        "More common in spoken English than It-clefts",
      ],
      formal_vs_informal: {
        formal: [
          "What concerns us most is the environmental impact.",
          "Where the research falls short is in methodology.",
        ],
        informal: ["What I want is pizza.", "Where I'm going is home."],
      },
    },
    {
      type: "All-Cleft Sentences",
      structure: "All + clause + be + emphasized part",
      level: "C1",
      purpose:
        "To emphasize the totality or exclusivity of the subject or action, often with minimizing effect",
      examples: [
        "All I want is some peace.",
        "All he did was lie.",
        "All they need is help.",
        "All that matters is your happiness.",
        "All we can do is wait.",
      ],
      detailed_rules: [
        "Implies exclusivity or minimization",
        "Often used to downplay actions or desires",
        "Can express frustration or simplification",
        "Common in spoken English for emphasis",
        "Usually followed by singular 'is' regardless of clause subject",
      ],
      formal_vs_informal: {
        formal: [
          "All that remains is to implement the decision.",
          "All the evidence suggests is a correlation.",
        ],
        informal: ["All I'm saying is be careful.", "All you gotta do is try."],
      },
    },
    {
      type: "Inferential Cleft Sentences",
      structure:
        "The reason/thing/fact/way/place + (that) + clause + be + emphasized part",
      level: "C2",
      purpose:
        "To infer, clarify, or elaborate on information with sophisticated nuance",
      examples: [
        "The reason I called was to apologize.",
        "The fact is that we're late.",
        "The thing that annoys me is his attitude.",
        "The way she solved it was ingenious.",
        "The place where we met was the library.",
      ],
      detailed_rules: [
        "Uses specific head nouns (reason, thing, fact, way, place, time)",
        "More formal and academic in tone",
        "Provides explanatory or clarifying emphasis",
        "Can introduce complex logical relationships",
        "Often used in argumentative or analytical discourse",
      ],
      formal_vs_informal: {
        formal: [
          "The factor that determines success is persistence.",
          "The manner in which this was achieved demonstrates innovation.",
        ],
        informal: ["The thing is, I forgot.", "The problem is I'm broke."],
      },
    },
    {
      type: "Reversed Cleft (Inverted Wh-Cleft)",
      structure: "Emphasized part + be + what/where/when/why + clause",
      level: "C2",
      purpose:
        "To add stylistic variety, create rhetorical emphasis, or achieve poetic effect",
      examples: [
        "A good sleep is what I need.",
        "His honesty is what surprised me.",
        "Peace is all I want.",
        "Excellence is what we strive for.",
        "Home is where the heart is.",
      ],
      detailed_rules: [
        "Less common than regular Wh-clefts",
        "Often used for stylistic or rhetorical effect",
        "Can create memorable or quotable statements",
        "More formal than regular Wh-clefts",
        "Subject-verb agreement follows the initial element",
      ],
      formal_vs_informal: {
        formal: [
          "Innovation is what drives our industry forward.",
          "Excellence is what distinguishes our institution.",
        ],
        informal: [
          "Pizza is what I'm craving.",
          "Sleep is what I need right now.",
        ],
      },
    },
    {
      type: "Existential Clefts",
      structure: "There + be + emphasized element + relative clause",
      level: "C1",
      purpose: "To introduce new entities into discourse with emphasis",
      examples: [
        "There's someone who wants to see you.",
        "There was nothing that could stop her.",
        "There are people who disagree.",
        "There's something that bothers me.",
      ],
      detailed_rules: [
        "Combines existential 'there' with cleft structure",
        "Introduces new referents emphatically",
        "Common in storytelling and descriptions",
        "Can emphasize existence and properties simultaneously",
      ],
    },
  ],

  emphatic_contrast: {
    level: "A2–C1",
    techniques: [
      {
        method: "Auxiliary verb + base form",
        description: "Used to strongly affirm a statement or correct someone.",
        examples: [
          "I *did* see him!",
          "She *does* like pizza!",
          "He *did* finish the work on time.",
        ],
        level_appropriateness: "A2-B2",
      },
      {
        method: "It-cleft + contrast",
        description: "To show contrast or contradiction",
        examples: [
          "It wasn't Mike who broke it – it was John.",
          "It's not money that motivates her – it's passion.",
        ],
        level_appropriateness: "B1-C2",
      },
      {
        method: "Double negative emphasis",
        description: "Using negative constructions for emphatic effect",
        examples: [
          "It's not that I don't like him – I just don't trust him.",
          "I'm not saying it's impossible – I'm saying it's unlikely.",
        ],
        level_appropriateness: "C1-C2",
      },
    ],
  },

  usage_notes: [
    "Cleft sentences are common in both spoken and formal written English.",
    "They are often used for contrast, clarification, or focus.",
    "Some cleft forms are considered more formal (e.g., inferential clefts).",
    "Frequency varies by register: It-clefts are more common in formal writing, Wh-clefts in speech.",
    "Overuse can make language sound artificial or overly dramatic.",
    "Cultural preferences exist: Some varieties of English use clefts more frequently.",
  ],

  advanced_usage: {
    level: "C2",
    strategies: [
      {
        name: "Multiple clefts in a single paragraph",
        example:
          "It was her courage that saved the team. What amazed us was her calm. The thing that stood out was her leadership.",
        explanation:
          "Creating cohesive emphasis through varied cleft structures",
        difficulty_level: "C2",
      },
      {
        name: "Clefts with modal verbs",
        example: "What you should have done is tell the truth.",
        explanation: "Combines modality with emphasis",
        difficulty_level: "C1",
      },
      {
        name: "Contrastive cleft structures",
        example:
          "It wasn't that he didn't try – it's that he gave up too soon.",
        explanation: "Used to present opposing ideas.",
        difficulty_level: "C2",
      },
      {
        name: "Nested cleft constructions",
        example:
          "What I don't understand is why what he said was so offensive.",
        explanation: "Complex recursive structures for sophisticated emphasis",
        difficulty_level: "C2",
      },
    ],
  },

  functions: [
    "Emphasizing subject, object, time, reason, or place.",
    "Contrasting one idea with another.",
    "Clarifying misunderstood information.",
    "Highlighting new or important information.",
    "Creating cohesive emphasis in discourse.",
    "Establishing focus for subsequent discussion.",
    "Correcting false assumptions or misinformation.",
  ],

  transformation_exercises: {
    description: "Practice converting regular sentences into cleft sentences.",
    examples: [
      {
        original: "She won the race.",
        cleft: "It was she who won the race.",
        level: "B1",
        explanation: "Basic It-cleft emphasizing the subject",
      },
      {
        original: "We need a break.",
        cleft: "What we need is a break.",
        level: "B2",
        explanation: "Wh-cleft emphasizing the object",
      },
      {
        original: "They arrived at noon.",
        cleft: "It was at noon that they arrived.",
        level: "B1",
        explanation: "It-cleft emphasizing time adverbial",
      },
      {
        original: "I want peace.",
        cleft: "All I want is peace.",
        level: "C1",
        explanation: "All-cleft with minimizing effect",
      },
    ],
  },

  common_errors: [
    {
      mistake: "It is John that broke the window. (used in informal speech)",
      correction: "It was John who broke the window.",
      level: "B1",
      explanation: "Use 'who' for people, maintain correct tense",
    },
    {
      mistake: "What I like are movies.",
      correction: "What I like is movies.",
      level: "B2",
      explanation: "Subject-verb agreement error in Wh-clefts",
    },
    {
      mistake: "It was quickly that he ran.",
      correction:
        "It was quickly that he ran. / He ran quickly. (cleft inappropriate)",
      level: "B1",
      explanation: "Cannot cleft manner adverbs directly",
    },
    {
      mistake: "All what I want is peace.",
      correction: "All I want is peace. / What I want is peace.",
      level: "C1",
      explanation: "Cannot combine 'all' with 'what' in clefts",
    },
  ],

  learning_tips: [
    "Practice transforming normal sentences into cleft forms.",
    "Use cleft structures in IELTS or writing tasks to emphasize ideas.",
    "Listen for clefts in formal speeches and interviews.",
    "Start with It-clefts as they're the most straightforward.",
    "Pay attention to subject-verb agreement in Wh-clefts.",
    "Notice when native speakers use clefts for emphasis.",
    "Practice varying cleft types to avoid repetition.",
    "Use clefts sparingly to maintain naturalness.",
  ],

  references: [
    {
      title: "Cambridge Grammar of English",
      author: "Ronald Carter and Michael McCarthy",
      type: "book",
      isbn: "978-0521674393",
      description:
        "Comprehensive coverage of cleft sentences in contemporary English with corpus-based examples",
      relevance_level: ["B2", "C1", "C2"],
    },
    {
      title: "Oxford Learner's Grammar",
      author: "John Eastwood",
      type: "book",
      isbn: "978-0194420822",
      description:
        "Clear explanations of cleft structures suitable for intermediate to advanced learners",
      relevance_level: ["B1", "B2", "C1"],
    },
    {
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      type: "book",
      isbn: "978-1108457682",
      description:
        "Practical exercises and clear explanations for It-cleft and Wh-cleft sentences",
      relevance_level: ["B1", "B2"],
    },
    {
      title:
        "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
      author: "Marianne Celce-Murcia and Diane Larsen-Freeman",
      type: "book",
      isbn: "978-0838447253",
      description:
        "Detailed linguistic analysis of cleft constructions for teachers and advanced learners",
      relevance_level: ["C1", "C2"],
    },
    {
      title: "Corpus of Contemporary American English (COCA)",
      type: "website",
      url: "https://www.english-corpora.org/coca/",
      description:
        "Extensive corpus for studying authentic usage patterns of cleft sentences",
      relevance_level: ["B2", "C1", "C2"],
    },
    {
      title: "British National Corpus (BNC)",
      type: "website",
      url: "https://www.english-corpora.org/bnc/",
      description:
        "Large corpus showing real usage of cleft structures in British English",
      relevance_level: ["B2", "C1", "C2"],
    },
    {
      title:
        "Cleft Sentences in English: Syntax, Information Structure and Intonation",
      author: "Nancy Hedberg",
      type: "academic_paper",
      description:
        "Advanced linguistic analysis of cleft sentence properties and discourse functions",
      relevance_level: ["C2"],
    },
    {
      title: "BBC Learning English - Grammar Reference",
      type: "website",
      url: "https://www.bbc.co.uk/learningenglish/english/grammar/",
      description: "Clear explanations and audio examples of cleft sentences",
      relevance_level: ["A2", "B1", "B2"],
    },
  ],

  linguistic_analysis: {
    syntactic_structure:
      "Cleft sentences involve biclausal structures with a matrix clause containing a copula ('be') and a subordinate clause containing the background information. The focused element appears in the matrix clause.",
    semantic_function:
      "Clefts create a presupposition-assertion structure where the subordinate clause content is presupposed and the focused element represents new information or correction.",
    pragmatic_use:
      "Clefts serve multiple discourse functions including contrast, correction, emphasis, and information packaging. They help manage the flow of given vs. new information.",
    discourse_markers: [
      "It + be (identificational clefts)",
      "What/Where/When/Why/How (specificational clefts)",
      "All (exclusiveness marking)",
      "The reason/thing/fact (inferential marking)",
    ],
  },

  corpus_examples: {
    spoken_english: [
      "It's you that I was looking for.",
      "What I'm saying is we need to be careful.",
      "All I know is what she told me.",
      "The thing is, I can't afford it.",
    ],
    written_english: [
      "It was during this period that the theory developed.",
      "What remains unclear is the exact mechanism.",
      "The factor that contributed most was the economic crisis.",
      "Innovation is what distinguishes successful companies.",
    ],
    academic_writing: [
      "It is precisely this aspect that warrants further investigation.",
      "What the data reveals is a significant correlation.",
      "The methodology that was employed involves statistical analysis.",
      "Critical thinking is what students must develop.",
    ],
    news_media: [
      "It was the president who announced the new policy.",
      "What experts are predicting is continued growth.",
      "The issue that concerns voters most is the economy.",
      "Transparency is what the public demands.",
    ],
  },

  cross_linguistic_comparison: {
    similar_structures: [
      "French: C'est... qui/que (similar to It-clefts)",
      "Spanish: Es... quien/que (parallel to English It-clefts)",
      "German: Es ist... der/die/das (less frequent than English)",
      "Italian: È... che (commonly used like English clefts)",
    ],
    language_specific_notes: [
      "English clefts are more frequent than in many other languages",
      "Some languages prefer word order changes over cleft structures",
      "Prosodic emphasis varies significantly across languages",
      "L1 transfer may cause overuse or underuse of clefts",
    ],
  },
};

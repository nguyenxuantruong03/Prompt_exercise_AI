import { ConjunctionsType } from "@/types/grammars/grammar/Conjunctions";

export const ConjunctionsData: ConjunctionsType = {
  // --- Comprehensive Conjunctions Reference ---

  // Definition of Conjunctions
  conjunctionDefinition: {
    basicDefinition:
      "Conjunctions are words or phrases that connect words, phrases, clauses, or sentences. They establish logical relationships between ideas and create cohesive discourse. According to Huddleston & Pullum (2002), conjunctions are 'function words that serve to connect elements of equal or unequal syntactic status.'",
    grammaticalFunction:
      "Conjunctions function as connectors that join different grammatical units while indicating semantic relationships such as addition, contrast, cause-effect, time, condition, and purpose. They are essential for creating complex sentence structures and maintaining textual coherence.",
    keyCharacteristics: [
      "Connect words, phrases, clauses, or sentences",
      "Establish semantic relationships between connected elements",
      "Create compound and complex sentence structures",
      "Maintain discourse coherence and logical flow",
      "Indicate temporal, causal, conditional, and contrastive relationships",
      "Function as discourse markers in extended texts",
      "Vary in formality and register appropriateness",
    ],
    morphologicalFeatures: {
      simple:
        "Single morpheme conjunctions: and, but, or, because, if, when, while, since",
      compound:
        "Multi-morpheme conjunctions: as long as, in order that, so that, provided that, even though",
      correlative:
        "Paired conjunctions requiring both elements: both...and, either...or, neither...nor, not only...but also",
    },
    positionInSentence: {
      coordinating:
        "Between coordinate elements of equal syntactic status: X and Y, X but Y",
      subordinating:
        "At the beginning of subordinate clauses: When X, Y / Y when X",
      correlative:
        "Before each coordinated element in the correlative structure",
      conjunctiveAdverbs:
        "At clause boundaries with appropriate punctuation: X; however, Y",
    },
  },

  // A1 Level - Basic Conjunctions (Beginner)
  A1: {
    basicCoordinatingConjunctions: {
      definition:
        "Fundamental coordinating conjunctions for connecting simple elements. These are the most frequently used conjunctions in everyday English, essential for basic communication and sentence construction.",
      examples: ["and", "but", "or"],
      usage:
        "Connect words, phrases, or simple clauses of equal grammatical importance. 'And' shows addition, 'but' shows contrast, 'or' shows alternatives.",
      keyPoints: [
        "Use 'and' to add information or list items",
        "Use 'but' to show contrast or unexpected information",
        "Use 'or' to present choices or alternatives",
        "No comma needed before conjunction in simple phrases",
        "Comma required before conjunction in compound sentences",
      ],
      commonMistakes: [
        "Overusing 'and' in lists without proper punctuation",
        "Confusing 'but' and 'or' in choice contexts",
        "Missing comma in compound sentences",
      ],
    },
    basicTimeConjunctions: {
      definition:
        "Essential temporal conjunctions for expressing simple time relationships in basic communication contexts.",
      examples: ["when", "before", "after"],
      usage:
        "Indicate temporal sequences and simultaneous actions in simple sentence structures.",
      keyPoints: [
        "'When' indicates simultaneous or immediately sequential actions",
        "'Before' shows earlier time relationship",
        "'After' shows later time relationship",
        "Can introduce both dependent and independent clauses",
        "Comma usage depends on clause order",
      ],
      commonMistakes: [
        "Incorrect tense combinations with time conjunctions",
        "Confusion between 'when' and 'if' in conditional contexts",
      ],
    },
    basicReasonConjunctions: {
      definition:
        "Fundamental causal conjunctions for expressing simple cause-effect relationships in basic discourse.",
      examples: ["because", "so"],
      usage:
        "'Because' introduces reasons/causes, 'so' introduces results/consequences.",
      keyPoints: [
        "'Because' answers 'why' questions",
        "'So' shows logical consequence",
        "'Because' creates dependent clauses",
        "'So' connects independent clauses",
        "Avoid 'because...so' combinations (redundant)",
      ],
      commonMistakes: [
        "Using 'because' and 'so' together redundantly",
        "Starting sentences with 'so' in formal writing",
        "Incorrect comma placement with 'because' clauses",
      ],
    },
    basicChoiceConjunctions: {
      definition:
        "Simple conjunctions for presenting alternatives and choices in basic communication.",
      examples: ["or", "either...or"],
      usage:
        "Present alternatives, choices, or possibilities in simple sentence structures.",
      keyPoints: [
        "'Or' presents simple alternatives",
        "'Either...or' emphasizes exclusive choice",
        "Subject-verb agreement with 'either...or' follows nearest subject",
        "Can connect words, phrases, or clauses",
      ],
      commonMistakes: [
        "Subject-verb agreement errors with 'either...or'",
        "Overuse of 'either...or' in simple contexts",
      ],
    },
  },

  // A2 Level - Elementary Conjunctions
  A2: {
    expandedCoordinatingConjunctions: {
      definition:
        "Extended range of coordinating conjunctions for more varied and sophisticated sentence connections in elementary discourse.",
      examples: ["and", "but", "or", "so", "for", "yet", "nor"],
      usage:
        "Create more complex relationships between ideas while maintaining clarity in elementary-level communication.",
      keyPoints: [
        "FANBOYS acronym for remembering coordinating conjunctions",
        "'So' shows result or consequence",
        "'For' provides reason or explanation (formal)",
        "'Yet' shows contrast or surprise",
        "'Nor' used in negative constructions",
        "All require comma before conjunction in compound sentences",
      ],
      commonMistakes: [
        "Confusing 'for' (conjunction) with 'for' (preposition)",
        "Incorrect use of 'nor' without negative context",
        "Missing commas in compound sentences",
      ],
    },
    expandedTimeConjunctions: {
      definition:
        "Broader range of temporal conjunctions for expressing detailed time relationships and sequences.",
      examples: ["when", "while", "since", "until", "as soon as", "whenever"],
      usage:
        "Express complex temporal relationships including duration, starting points, and conditional timing.",
      keyPoints: [
        "'While' indicates simultaneous duration",
        "'Since' shows starting point in time",
        "'Until' indicates endpoint",
        "'As soon as' emphasizes immediate sequence",
        "'Whenever' shows repeated or conditional timing",
        "Tense consistency crucial with time conjunctions",
      ],
      commonMistakes: [
        "Tense inconsistency with time conjunctions",
        "Confusion between 'since' (time) and 'since' (reason)",
        "Incorrect use of future tense after time conjunctions",
      ],
    },
    conditionConjunctions: {
      definition:
        "Basic conditional conjunctions for expressing simple hypothetical situations and requirements.",
      examples: ["if", "unless", "when (conditional)"],
      usage:
        "Express conditions, requirements, and hypothetical situations in clear, straightforward language.",
      keyPoints: [
        "'If' introduces positive conditions",
        "'Unless' means 'if not' (negative condition)",
        "Conditional 'when' assumes certainty",
        "First conditional uses present tense in if-clause",
        "Comma after if-clause when it comes first",
      ],
      commonMistakes: [
        "Using future tense in if-clauses",
        "Confusing 'unless' with 'if not'",
        "Incorrect comma placement in conditionals",
      ],
    },
    purposeConjunctions: {
      definition:
        "Conjunctions expressing purpose, intention, and desired outcomes in elementary communication.",
      examples: ["so that", "in order to", "to"],
      usage:
        "Express intentions, goals, and desired results in clear, purposeful communication.",
      keyPoints: [
        "'So that' + clause (with modal verbs)",
        "'In order to' + infinitive (formal)",
        "'To' + infinitive (simple purpose)",
        "Purpose conjunctions answer 'why' questions",
        "Modal verbs common in purpose clauses",
      ],
      commonMistakes: [
        "Confusing 'so that' with 'so'",
        "Incorrect verb forms after purpose conjunctions",
      ],
    },
  },

  // B1 Level - Intermediate Conjunctions
  B1: {
    contrastConjunctions: {
      definition:
        "Advanced conjunctions for expressing contrast, concession, and unexpected relationships in intermediate discourse.",
      examples: [
        "although",
        "though",
        "even though",
        "however",
        "nevertheless",
        "whereas",
      ],
      usage:
        "Express complex contrastive relationships, concessions, and unexpected outcomes in sophisticated communication.",
      keyPoints: [
        "'Although/Though' introduce concessive clauses",
        "'Even though' adds emphasis to concession",
        "'However' is conjunctive adverb (needs semicolon)",
        "'Nevertheless' shows stronger contrast",
        "'Whereas' compares contrasting situations",
        "Concessive conjunctions require careful comma placement",
      ],
      commonMistakes: [
        "Punctuation errors with 'however'",
        "Using 'although' with 'but' (double contrast)",
        "Incorrect comma placement with concessive clauses",
      ],
    },
    causeEffectConjunctions: {
      definition:
        "Sophisticated conjunctions for expressing complex causal relationships and logical consequences.",
      examples: [
        "because",
        "since",
        "as",
        "therefore",
        "consequently",
        "thus",
        "hence",
      ],
      usage:
        "Express nuanced causal relationships, logical deductions, and sophisticated reasoning.",
      keyPoints: [
        "'Since/As' can indicate both time and reason",
        "'Therefore/Thus/Hence' are conjunctive adverbs",
        "'Consequently' emphasizes logical result",
        "Formal register requires sophisticated causal conjunctions",
        "Punctuation varies with conjunction type",
      ],
      commonMistakes: [
        "Ambiguity between temporal and causal 'since'",
        "Incorrect punctuation with conjunctive adverbs",
        "Overuse of 'because' in formal writing",
      ],
    },
    comparisonConjunctions: {
      definition:
        "Conjunctions for expressing comparisons, similarities, and hypothetical situations in intermediate communication.",
      examples: ["as", "like", "as if", "as though", "than", "just as"],
      usage:
        "Express comparisons, similarities, and hypothetical scenarios with precision and clarity.",
      keyPoints: [
        "'As' formal manner comparison",
        "'Like' informal similarity (not for clauses)",
        "'As if/As though' express hypothetical situations",
        "'Than' used in comparative structures",
        "'Just as' emphasizes exact similarity",
        "Subjunctive mood possible with 'as if/as though'",
      ],
      commonMistakes: [
        "Confusing 'like' and 'as' in formal contexts",
        "Incorrect mood with 'as if/as though'",
        "Missing elements in comparative structures",
      ],
    },
    additionalConjunctions: {
      definition:
        "Conjunctions for adding information, emphasis, and elaboration in intermediate discourse.",
      examples: [
        "furthermore",
        "moreover",
        "in addition",
        "besides",
        "also",
        "as well as",
      ],
      usage:
        "Add layers of information and create sophisticated discourse structure.",
      keyPoints: [
        "'Furthermore/Moreover' add formal emphasis",
        "'In addition' adds extra information",
        "'Besides' introduces additional points",
        "'As well as' connects parallel elements",
        "Conjunctive adverbs require proper punctuation",
        "Register awareness crucial for selection",
      ],
      commonMistakes: [
        "Overuse of additive conjunctions",
        "Inappropriate register mixing",
        "Punctuation errors with conjunctive adverbs",
      ],
    },
  },

  // B2 Level - Upper Intermediate Conjunctions
  B2: {
    advancedCorrelativeConjunctions: {
      definition:
        "Sophisticated paired conjunctions for expressing complex parallel relationships and balanced structures in upper-intermediate discourse.",
      examples: [
        "not only...but also",
        "either...or",
        "neither...nor",
        "both...and",
        "whether...or not",
      ],
      usage:
        "Create balanced, parallel structures that demonstrate sophisticated grammatical control and stylistic awareness.",
      keyPoints: [
        "Require parallel grammatical structures",
        "Subject-verb agreement follows proximity rule",
        "'Not only...but also' requires inversion in formal style",
        "'Whether...or not' expresses regardless-conditions",
        "Emphasis patterns vary with different correlatives",
        "Punctuation depends on elements connected",
      ],
      commonMistakes: [
        "Parallelism errors in correlative structures",
        "Subject-verb agreement confusion",
        "Missing inversion with 'not only' fronting",
      ],
    },
    conditionalConjunctions: {
      definition:
        "Advanced conditional conjunctions for expressing complex hypothetical situations, requirements, and stipulations.",
      examples: [
        "provided that",
        "as long as",
        "on condition that",
        "supposing",
        "assuming",
        "unless",
      ],
      usage:
        "Express sophisticated conditional relationships with precise meaning and appropriate formality.",
      keyPoints: [
        "'Provided that' sets formal conditions",
        "'As long as' emphasizes duration or continuity",
        "'On condition that' creates formal stipulations",
        "'Supposing/Assuming' introduce hypotheticals",
        "Mixed conditionals possible with advanced conjunctions",
        "Register affects conjunction choice",
      ],
      commonMistakes: [
        "Incorrect tense sequences in complex conditionals",
        "Inappropriate formality level",
        "Confusion between different conditional meanings",
      ],
    },
    mannerConjunctions: {
      definition:
        "Conjunctions expressing manner, method, and way of performing actions in sophisticated discourse.",
      examples: [
        "as",
        "like",
        "the way",
        "in the way that",
        "how",
        "as if",
        "as though",
      ],
      usage:
        "Express sophisticated comparisons and manner descriptions with precision and style.",
      keyPoints: [
        "'As' formal manner comparison",
        "'Like' informal similarity (not for clauses)",
        "'The way' introduces manner clauses",
        "'How' questions and relative manner",
        "Subjunctive mood with hypothetical manner",
        "Register affects choice between options",
      ],
      commonMistakes: [
        "Using 'like' with clauses in formal writing",
        "Mood errors with hypothetical comparisons",
        "Inappropriate register mixing",
      ],
    },
    emphasizingConjunctions: {
      definition:
        "Conjunctions that add emphasis, specification, and clarification to discourse relationships.",
      examples: [
        "indeed",
        "in fact",
        "actually",
        "certainly",
        "particularly",
        "especially",
      ],
      usage:
        "Add emphasis and clarification while maintaining sophisticated discourse flow.",
      keyPoints: [
        "'Indeed' confirms or emphasizes truth",
        "'In fact' introduces clarifying information",
        "'Actually' corrects or specifies",
        "'Particularly/Especially' highlight specific examples",
        "Position affects emphasis strength",
        "Comma usage varies with position and function",
      ],
      commonMistakes: [
        "Overuse of emphasizing conjunctions",
        "Inappropriate emphasis in formal contexts",
        "Incorrect comma placement",
      ],
    },
  },

  // C1 Level - Advanced Conjunctions
  C1: {
    academicConjunctions: {
      definition:
        "Sophisticated conjunctions essential for academic writing, formal discourse, and professional communication at advanced levels.",
      examples: [
        "furthermore",
        "moreover",
        "nevertheless",
        "nonetheless",
        "consequently",
        "accordingly",
        "subsequently",
      ],
      usage:
        "Create sophisticated logical relationships in academic and professional discourse with precise meaning and appropriate formality.",
      keyPoints: [
        "Essential for academic writing coherence",
        "Create complex logical progressions",
        "Require sophisticated punctuation control",
        "Signal specific logical relationships",
        "Demonstrate advanced discourse competence",
        "Position flexibility affects emphasis and flow",
      ],
      commonMistakes: [
        "Overuse leading to unnecessarily complex prose",
        "Incorrect logical relationships",
        "Punctuation errors affecting clarity",
      ],
    },
    literaryConjunctions: {
      definition:
        "Sophisticated conjunctions used in literary, creative, and highly formal registers for stylistic effect and precise expression.",
      examples: [
        "albeit",
        "notwithstanding",
        "whereas",
        "whilst",
        "lest",
        "albeit",
      ],
      usage:
        "Create literary effects, formal precision, and sophisticated stylistic variation in advanced discourse.",
      keyPoints: [
        "'Albeit' means 'although' (formal/literary)",
        "'Notwithstanding' means 'despite' (legal/formal)",
        "'Whilst' is formal/British variant of 'while'",
        "'Lest' means 'for fear that' (archaic/formal)",
        "Register awareness crucial for appropriate use",
        "Often appear in subordinate positions",
      ],
      commonMistakes: [
        "Using archaic forms inappropriately",
        "Mixing registers inappropriately",
        "Overuse for artificial formality",
      ],
    },
    logicalConjunctions: {
      definition:
        "Precise conjunctions for expressing complex logical relationships, deductions, and sophisticated reasoning patterns.",
      examples: [
        "hence",
        "thus",
        "therefore",
        "consequently",
        "accordingly",
        "as a result",
        "for this reason",
      ],
      usage:
        "Signal precise logical relationships and sophisticated reasoning in academic and professional contexts.",
      keyPoints: [
        "Signal different types of logical relationships",
        "Create clear argumentative structure",
        "Require precise understanding of logical connections",
        "Essential for persuasive and analytical writing",
        "Punctuation affects logical clarity",
        "Position can emphasize different aspects",
      ],
      commonMistakes: [
        "Imprecise logical relationships",
        "Overuse creating mechanical prose",
        "Incorrect punctuation affecting logic",
      ],
    },
    discourseConjunctions: {
      definition:
        "Advanced conjunctions for organizing complex discourse, managing information flow, and creating sophisticated textual relationships.",
      examples: [
        "in addition",
        "furthermore",
        "moreover",
        "besides",
        "what is more",
        "on top of that",
      ],
      usage:
        "Organize complex information and create sophisticated discourse structure in extended texts.",
      keyPoints: [
        "Organize complex multi-paragraph discourse",
        "Signal information hierarchy",
        "Create smooth transitions between sections",
        "Demonstrate advanced organizational skills",
        "Vary to avoid repetition",
        "Position affects information prominence",
      ],
      commonMistakes: [
        "Overuse creating list-like prose",
        "Inappropriate information hierarchy",
        "Mechanical rather than natural usage",
      ],
    },
  },

  // C2 Level - Mastery Conjunctions
  C2: {
    rareAndSophisticated: {
      definition:
        "Extremely sophisticated and rare conjunctions demonstrating native-like competence and stylistic mastery in the most demanding contexts.",
      examples: [
        "inasmuch as",
        "insofar as",
        "notwithstanding that",
        "save that",
        "except that",
        "but for the fact that",
      ],
      usage:
        "Demonstrate exceptional linguistic sophistication and native-like control in the most challenging discourse contexts.",
      keyPoints: [
        "Signal native-like sophistication",
        "Used in highly specialized contexts",
        "Require perfect understanding of nuanced meanings",
        "Demonstrate exceptional stylistic control",
        "Often domain-specific (legal, academic, literary)",
        "Risk of overuse or inappropriate usage",
      ],
      commonMistakes: [
        "Using for artificial sophistication",
        "Incorrect contextual application",
        "Overcomplicating simple relationships",
      ],
    },
    domainSpecificConjunctions: {
      definition:
        "Highly specialized conjunctions for specific professional and academic domains requiring mastery-level competence.",
      examples: [
        "whereas (legal)",
        "provided that (legal)",
        "pursuant to",
        "subject to",
        "contingent upon",
      ],
      usage:
        "Function effectively in specialized professional domains with precise meaning and appropriate register.",
      keyPoints: [
        "Domain-specific meanings and usage patterns",
        "Essential for professional competence",
        "Require deep cultural and contextual knowledge",
        "Demonstrate insider linguistic competence",
        "Often carry legal or technical implications",
        "Precision crucial for professional credibility",
      ],
      commonMistakes: [
        "Misunderstanding domain-specific meanings",
        "Inappropriate cross-domain usage",
        "Lack of precision in professional contexts",
      ],
    },
    stylisticMastery: {
      definition:
        "Conjunctions used for sophisticated stylistic effects, demonstrating complete mastery of register, tone, and discourse management.",
      examples: [
        "be that as it may",
        "that said",
        "that being said",
        "all things considered",
        "by the same token",
      ],
      usage:
        "Create sophisticated stylistic effects and demonstrate complete command of discourse management techniques.",
      keyPoints: [
        "Create specific stylistic effects",
        "Demonstrate discourse management mastery",
        "Signal sophisticated register control",
        "Used for transition and perspective management",
        "Require perfect timing and placement",
        "Demonstrate cultural and linguistic sensitivity",
      ],
      commonMistakes: [
        "Overuse destroying natural flow",
        "Inappropriate stylistic register",
        "Poor timing or placement",
      ],
    },
    contextualMastery: {
      definition:
        "Demonstration of complete contextual mastery across all registers, domains, and stylistic requirements.",
      examples: [
        "Context-appropriate selection",
        "Register-sensitive usage",
        "Cultural competence",
        "Stylistic variation",
      ],
      usage:
        "Demonstrate native-like ability to select and use conjunctions appropriately across all contexts and requirements.",
      keyPoints: [
        "Perfect contextual appropriateness",
        "Native-like register sensitivity",
        "Cultural and stylistic competence",
        "Effortless variation and selection",
        "Intuitive usage patterns",
        "Sophisticated discourse management",
      ],
      commonMistakes: [
        "Rare at this level - usually involve subtle register mismatches",
        "Overcomplexity when simplicity is more effective",
        "Cultural insensitivity in specific contexts",
      ],
    },
  },

  // Original Conjunctions Section (Preserved)
  Conjunctions: {
    types: {
      coordinating: {
        description:
          "Connect elements of equal grammatical status (words, phrases, clauses). Follow the FANBOYS acronym for easy memorization.",
        acronym: "FANBOYS",
        list: ["for", "and", "nor", "but", "or", "yet", "so"],
        examples: [
          "She is smart **and** hardworking.",
          "I want coffee, **but** I don't have time.",
          "You can come **or** stay home.",
        ],
      },
      subordinating: {
        description:
          "Connect dependent clauses to independent clauses, indicating relationships of time, cause, condition, purpose, concession, etc.",
        examples: [
          "after",
          "although",
          "as",
          "because",
          "before",
          "even though",
          "if",
          "since",
          "so that",
          "though",
          "unless",
          "until",
          "when",
          "while",
          "wherever",
          "whereas",
          "whilst",
        ],
        sentences: [
          "I'll call you **when** I arrive.",
          "**Although** it rained, we still played.",
          "He stayed home **because** he was sick.",
          "**If** it rains, we'll cancel the picnic.",
        ],
      },
      correlative: {
        description:
          "Paired conjunctions that work together to connect equivalent elements in parallel structures.",
        examples: [
          "both ... and",
          "either ... or",
          "neither ... nor",
          "not only ... but also",
          "whether ... or",
        ],
        sentences: [
          "**Both** she **and** her brother are doctors.",
          "**Either** you apologize **or** you leave.",
          "He is **not only** tall **but also** strong.",
        ],
      },
      conjunctiveAdverbs: {
        description:
          "Adverbs that function as conjunctions, connecting independent clauses or sentences. Require semicolon or period before and comma after.",
        examples: [
          "however",
          "therefore",
          "moreover",
          "nevertheless",
          "consequently",
          "furthermore",
          "otherwise",
          "meanwhile",
          "instead",
          "thus",
        ],
        sentences: [
          "She was tired; **however**, she kept working.",
          "It rained; **therefore**, we stayed inside.",
          "He didn't study; **consequently**, he failed the test.",
        ],
      },
    },
    usage: [
      {
        type: "Connecting words/phrases of equal function",
        example: "I want **tea and cake**.",
      },
      {
        type: "Connecting two independent clauses",
        example: "She was late, **but** she still joined the meeting.",
      },
      {
        type: "Connecting dependent clause to independent clause",
        example: "**Because** I was hungry, I ate early.",
      },
    ],
    recognition: [
      "Coordinating conjunctions maintain equal status between connected elements (FANBOYS).",
      "Subordinating conjunctions typically begin dependent clauses: **Although** it was cold, he went out.",
      "Correlative conjunctions work in pairs and require parallel structure: **Neither** the teacher **nor** the students were late.",
      "Conjunctive adverbs typically follow semicolons or periods: It was raining; **however**, we went hiking.",
    ],
    examples: {
      coordinating: ["I was tired, **so** I went to bed early."],
      subordinating: ["He left **before** I arrived."],
      correlative: [
        "**Not only** did he win, **but also** he broke the record.",
      ],
      conjunctiveAdverb: ["She is kind; **moreover**, she is very helpful."],
    },
    notes: [
      "Avoid comma before conjunctions connecting simple words/phrases: I like apples and bananas. ❌ I like apples, and bananas.",
      "Conjunctive adverbs require clear clause separation with semicolons or periods.",
      "Maintain parallel structure: ❌ She likes singing and to dance → ✅ She likes singing and dancing.",
      "Some conjunctions vary in emphasis: 'Even though' is typically stronger than 'although'.",
      "Group conjunctions by meaning: time (when, before...), cause (because, since...), condition (if, unless...), concession (although, though...).",
    ],
  },

  // Advanced Conjunction Patterns and Constructions
  advancedConjunctionPatterns: {
    conjunctionFormation: {
      definition:
        "How conjunctions are formed and categorized structurally and functionally.",
      simple: {
        definition:
          "Single word conjunctions that cannot be broken down into smaller meaningful parts",
        examples: [
          "and",
          "but",
          "or",
          "because",
          "if",
          "when",
          "where",
          "how",
          "why",
        ],
      },
      compound: {
        definition:
          "Multi-word conjunctions formed by combining words or phrases",
        examples: [
          "as long as",
          "in order that",
          "so that",
          "provided that",
          "on condition that",
        ],
      },
      correlative: {
        definition:
          "Paired conjunctions that work together to create balanced structures",
        examples: [
          "both...and",
          "either...or",
          "neither...nor",
          "not only...but also",
          "whether...or",
        ],
      },
    },
    conjunctionClauses: {
      definition:
        "Types of clauses that conjunctions create and connect in complex sentence structures.",
      independentClauses: {
        definition:
          "Clauses that can function as complete sentences on their own",
        examples: [
          "I like coffee, and I like tea",
          "She was tired, but she continued working",
        ],
      },
      dependentClauses: {
        definition:
          "Clauses that cannot stand alone and must be connected to independent clauses",
        examples: ["because I was hungry", "when I arrived", "if it rains"],
      },
      complexSentences: {
        definition:
          "Sentences containing both independent and dependent clauses connected by conjunctions",
        examples: [
          "I will call you when I arrive (independent + dependent)",
          "Although it rained, we went out (dependent + independent)",
          "I study hard so that I can pass (independent + dependent)",
        ],
      },
    },
    conjunctionPunctuation: {
      definition:
        "Punctuation rules that govern conjunction usage in different syntactic environments.",
      coordinatingConjunctions: {
        rule: "Use comma before coordinating conjunction when connecting two independent clauses",
        examples: [
          "I was tired, so I went to bed",
          "She likes coffee, but she doesn't like tea",
          "I can come today, or I can come tomorrow",
        ],
      },
      subordinatingConjunctions: {
        rule: "Use comma when subordinate clause precedes main clause; no comma when it follows",
        examples: [
          "I will call you when I arrive (no comma)",
          "When I arrive, I will call you (comma)",
          "I left because I was tired (no comma)",
          "Because I was tired, I left (comma)",
        ],
      },
      conjunctiveAdverbs: {
        rule: "Use semicolon before and comma after conjunctive adverbs connecting independent clauses",
        examples: [
          "I was tired; however, I continued working",
          "It rained; therefore, we stayed inside",
          "He didn't study; consequently, he failed",
        ],
      },
    },
    conjunctionReduction: {
      definition:
        "Techniques for reducing wordy conjunction clauses to more concise phrases while maintaining meaning.",
      timeClauses: {
        examples: [
          "When I was walking home, I saw a cat → Walking home, I saw a cat",
          "While I was studying, I fell asleep → While studying, I fell asleep",
        ],
      },
      reasonClauses: {
        examples: [
          "Because I was tired, I went to bed → Being tired, I went to bed",
          "Since you're here, let's start → You being here, let's start",
        ],
      },
      conditionClauses: {
        examples: [
          "If you work hard, you will succeed → Working hard, you will succeed",
          "Unless you study, you will fail → Not studying, you will fail",
        ],
      },
    },
  },

  // Conjunction Collocations and Fixed Expressions
  conjunctionCollocations: {
    commonPairs: [
      "both...and",
      "either...or",
      "neither...nor",
      "not only...but also",
      "whether...or",
      "as long as",
      "so that",
      "in order that",
      "provided that",
      "on condition that",
      "as soon as",
      "as if",
      "as though",
      "even though",
      "in spite of",
      "despite the fact that",
    ],
    businessCollocations: [
      "in accordance with",
      "pursuant to",
      "subject to",
      "provided that",
      "on condition that",
      "insofar as",
      "inasmuch as",
      "whereas",
      "notwithstanding",
      "furthermore",
      "moreover",
      "consequently",
    ],
    academicCollocations: [
      "furthermore",
      "moreover",
      "nevertheless",
      "consequently",
      "accordingly",
      "subsequently",
      "in addition",
      "besides",
      "in fact",
      "indeed",
      "hence",
      "thus",
      "therefore",
    ],
    logicalCollocations: [
      "as a result",
      "for this reason",
      "because of this",
      "due to this",
      "on account of this",
      "in consequence",
      "in effect",
      "in practice",
      "in theory",
      "in principle",
      "in reality",
      "in truth",
    ],
  },

  // Conjunction Usage in Different Genres
  conjunctionGenreUsage: {
    fiction: {
      description:
        "Conjunctions used in creative writing and storytelling for narrative flow and character development.",
      examples: [
        "albeit",
        "lest",
        "whilst",
        "whereas",
        "notwithstanding",
        "as if",
        "as though",
        "even though",
      ],
      techniques: [
        "descriptive conjunctions",
        "atmospheric conjunctions",
        "emotional conjunctions",
      ],
    },
    journalism: {
      description:
        "Conjunctions used in news reporting and articles for clear, objective communication.",
      examples: [
        "furthermore",
        "moreover",
        "nevertheless",
        "consequently",
        "accordingly",
        "subsequently",
        "in addition",
      ],
      principles: ["clarity", "objectivity", "logical flow", "precision"],
    },
    academic: {
      description:
        "Conjunctions used in scholarly writing and research for logical argumentation and analysis.",
      examples: [
        "furthermore",
        "moreover",
        "nevertheless",
        "consequently",
        "accordingly",
        "subsequently",
        "in addition",
        "besides",
      ],
      characteristics: ["formal", "precise", "logical", "objective"],
    },
    legal: {
      description:
        "Conjunctions used in legal documents and contracts for precise, unambiguous meaning.",
      examples: [
        "whereas",
        "provided that",
        "notwithstanding",
        "inasmuch as",
        "insofar as",
        "subject to",
        "on condition that",
      ],
      strategies: [
        "formal conjunctions",
        "legal conjunctions",
        "contractual conjunctions",
      ],
    },
  },

  // Conjunction Frequency and Register
  conjunctionFrequencyAndRegister: {
    highFrequency: {
      definition:
        "Most commonly used conjunctions in everyday English across all contexts and registers.",
      examples: ["and", "but", "or", "because", "if", "when", "so", "then"],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition:
        "Moderately common conjunctions for specific contexts and intermediate complexity.",
      examples: [
        "although",
        "though",
        "since",
        "while",
        "until",
        "unless",
        "where",
        "how",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition:
        "Rare or specialized conjunctions for specific purposes and advanced discourse.",
      examples: [
        "albeit",
        "lest",
        "whilst",
        "whereas",
        "notwithstanding",
        "inasmuch as",
        "insofar as",
      ],
      usage: "Used in academic, literary, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "furthermore",
        "moreover",
        "nevertheless",
        "consequently",
        "accordingly",
      ],
      informal: ["and", "but", "or", "so", "then", "because"],
      technical: [
        "provided that",
        "on condition that",
        "insofar as",
        "inasmuch as",
        "whereas",
      ],
      literary: ["albeit", "lest", "whilst", "whereas", "notwithstanding"],
    },
  },

  // Conjunction Exercises and Practice Activities
  conjunctionExercises: {
    beginner: [
      "Complete sentences with basic coordinating conjunctions",
      "Choose correct time conjunctions for simple sentences",
      "Match conjunctions to their functions",
      "Connect simple sentences with appropriate conjunctions",
    ],
    intermediate: [
      "Use various conjunction types in complex sentences",
      "Practice conjunction punctuation rules",
      "Create compound-complex sentences",
      "Identify and correct conjunction errors",
    ],
    advanced: [
      "Analyze conjunction usage in authentic texts",
      "Practice register-appropriate conjunction selection",
      "Master conjunction reduction techniques",
      "Create sophisticated discourse with varied conjunctions",
    ],
    interactive: [
      "Conjunction guessing games",
      "Sentence connection challenges",
      "Conjunction position competitions",
      "Collocation matching exercises",
    ],
  },

  // Conjunction Assessment and Evaluation
  conjunctionAssessment: {
    criteria: [
      "Accuracy of conjunction choice",
      "Correct conjunction position",
      "Appropriate register usage",
      "Variety and sophistication",
      "Punctuation accuracy",
    ],
    rubrics: {
      beginner: "Basic conjunctions, simple position, limited variety",
      intermediate: "Good variety, correct position, appropriate usage",
      advanced: "Sophisticated choices, complex position, register awareness",
      mastery: "Exceptional variety, perfect position, nuanced usage",
    },
    commonErrors: [
      "Incorrect conjunction choice",
      "Overuse of common conjunctions",
      "Inappropriate register",
      "Poor punctuation with conjunctions",
      "Missing conjunctions",
    ],
  },

  // Conjunction Learning Strategies
  conjunctionLearningStrategies: [
    "Practice conjunction usage with authentic texts and varied contexts",
    "Create organized conjunction lists by function (time, cause, condition, contrast)",
    "Use conjunction flashcards with examples and grammatical patterns",
    "Practice different sentence structures and complexity levels regularly",
    "Read extensively across genres to encounter conjunctions in natural contexts",
    "Write complex sentences using various conjunction types and patterns",
    "Play conjunction games to reinforce learning (connecting ideas, building sentences)",
    "Study conjunction collocations and fixed expressions in context",
    "Analyze conjunction usage in academic and professional texts",
    "Practice conjunction reduction and expansion techniques",
  ],

  // Conjunction in Language Tests
  conjunctionInTests: [
    "TOEFL/IELTS: Identify and correct conjunction errors in reading and writing sections",
    "Cambridge: Use advanced conjunctions appropriately in writing tasks and speaking assessments",
    "SAT: Recognize subtle differences in conjunction meaning and logical relationships",
    "GRE: Understand complex conjunction relationships and sophisticated reasoning patterns",
    "GMAT: Apply conjunction logic in sentence correction and critical reasoning questions",
  ],

  // Common Conjunction Mistakes
  commonConjunctionMistakes: {
    choiceErrors: [
      "Incorrect: I was tired, because I went to bed (should be: I was tired, so I went to bed)",
      "Incorrect: I like both tea or coffee (should be: I like both tea and coffee)",
      "Incorrect: I will go if you will come (should be: I will go if you come)",
    ],
    positionErrors: [
      "Incorrect: I was tired, I went to bed (should be: I was tired, so I went to bed)",
      "Incorrect: I like tea, I like coffee (should be: I like tea, and I like coffee)",
      "Incorrect: I will go, you come (should be: I will go if you come)",
    ],
    punctuationErrors: [
      "Incorrect: I was tired so I went to bed (should be: I was tired, so I went to bed)",
      "Incorrect: When I arrived I called you (should be: When I arrived, I called you)",
      "Incorrect: I was tired however I continued (should be: I was tired; however, I continued)",
    ],
  },

  references: {
    books: [
      "Huddleston, R. & Pullum, G. K. (2002). The Cambridge Grammar of the English Language. Cambridge University Press.",
      "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language. Longman.",
      "Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). Longman Grammar of Spoken and Written English. Longman.",
      "Carter, R. & McCarthy, M. (2006). Cambridge Grammar of English. Cambridge University Press.",
      "Swan, M. (2016). Practical English Usage (4th ed.). Oxford University Press.",
    ],
    websites: [
      "Cambridge English Grammar: https://dictionary.cambridge.org/grammar/british-grammar/",
      "Oxford English Grammar: https://www.oxfordlearnersdictionaries.com/grammar/",
      "Purdue OWL Writing Lab: https://owl.purdue.edu/owl/general_writing/grammar/",
      "Grammarly Grammar Guide: https://www.grammarly.com/blog/grammar/",
      "British Council LearnEnglish: https://learnenglish.britishcouncil.org/grammar",
    ],
    academicSources: [
      "Halliday, M.A.K. & Matthiessen, C. (2014). An Introduction to Functional Grammar (4th ed.). Routledge.",
      "Thompson, G. (2014). Introducing Functional Grammar (3rd ed.). Routledge.",
      "Downing, A. & Locke, P. (2006). English Grammar: A University Course (2nd ed.). Routledge.",
      "Alexander, L.G. (1988). Longman English Grammar. Longman.",
      "Murphy, R. (2019). English Grammar in Use (5th ed.). Cambridge University Press.",
    ],
  },
};

import { DiscourseMarkersType } from "@/types/grammars/grammar/DiscourseMarkers";

export const DiscourseMarkersData:DiscourseMarkersType = {
  definition:
    "Discourse markers are words or phrases used to connect ideas, show relationships between sentences, and organize spoken or written language. They help create coherence, guide the reader/listener through the text, and signal the speaker's or writer's intentions.",

  extendedDefinition:
    "Discourse markers, also known as discourse connectives, pragmatic markers, or linking words, are linguistic elements that function at the discourse level to signal relationships between propositions, manage the flow of conversation, and help speakers/writers organize their thoughts coherently. They operate on both local (sentence-to-sentence) and global (text-wide) levels of discourse organization.",

  academicDefinition:
    "From a pragmatic perspective, discourse markers are procedural expressions that encode instructions for the interpretation of discourse, constraining the inferential processes that hearers/readers use to recover the speaker's/writer's intended meaning. They contribute to discourse coherence by signaling semantic and pragmatic relationships between discourse segments (Fraser, 1999; Schiffrin, 1987).",

  linguisticClassification: {
    category: "Pragmatic particles and connective expressions",
    subcategories: [
      "Coordinating conjunctions",
      "Subordinating conjunctions",
      "Conjunctive adverbs",
      "Prepositional phrases",
      "Formulaic expressions",
      "Interjections with discourse function",
    ],
    pragmaticFunction:
      "Procedural meaning encoding for discourse interpretation",
    syntacticBehavior: [
      "Sentence-initial position (most common)",
      "Sentence-medial position",
      "Sentence-final position (rare)",
      "Independent clause status",
      "Parenthetical insertion",
    ],
  },

  functions: {
    Addition: [
      "and",
      "also",
      "in addition",
      "moreover",
      "furthermore",
      "what's more",
      "besides",
      "as well as",
      "not only...but also",
      "along with",
      "together with",
      "plus",
      "on top of that",
      "additionally",
      "equally important",
    ],
    Contrast: [
      "but",
      "however",
      "on the other hand",
      "nevertheless",
      "whereas",
      "although",
      "even though",
      "yet",
      "still",
      "though",
      "despite",
      "in spite of",
      "conversely",
      "by contrast",
      "alternatively",
      "instead",
      "rather",
      "on the contrary",
      "nonetheless",
      "notwithstanding",
    ],
    "Cause and Effect": [
      "because",
      "so",
      "therefore",
      "thus",
      "as a result",
      "consequently",
      "hence",
      "accordingly",
      "for this reason",
      "due to",
      "owing to",
      "since",
      "as",
      "given that",
      "in view of",
      "resulting in",
      "leading to",
    ],
    "Time/Sequence": [
      "first",
      "then",
      "next",
      "after that",
      "finally",
      "meanwhile",
      "at the same time",
      "eventually",
      "previously",
      "subsequently",
      "beforehand",
      "afterwards",
      "simultaneously",
      "in the meantime",
      "prior to",
      "following",
      "during",
      "while",
      "when",
      "until",
    ],
    "Giving Examples": [
      "for example",
      "for instance",
      "such as",
      "namely",
      "to illustrate",
      "specifically",
      "in particular",
      "especially",
      "including",
      "like",
      "as in",
      "take for example",
      "consider",
      "case in point",
    ],
    "Reformulation/Clarification": [
      "in other words",
      "that is to say",
      "to put it another way",
      "namely",
      "i.e.",
      "that is",
      "or rather",
      "more precisely",
      "to be more specific",
      "to clarify",
      "what I mean is",
    ],
    Emphasis: [
      "indeed",
      "in fact",
      "certainly",
      "above all",
      "what is more",
      "most importantly",
      "particularly",
      "especially",
      "notably",
      "significantly",
      "remarkably",
      "without doubt",
      "undoubtedly",
    ],
    "Summarizing/Concluding": [
      "in conclusion",
      "to sum up",
      "overall",
      "in summary",
      "all in all",
      "to conclude",
      "in short",
      "briefly",
      "on the whole",
      "ultimately",
      "finally",
      "in the end",
      "to wrap up",
      "in a nutshell",
    ],
    Condition: [
      "if",
      "unless",
      "provided that",
      "as long as",
      "even if",
      "supposing",
      "assuming",
      "in case",
      "on condition that",
      "whether or not",
      "only if",
      "should",
    ],
    Concession: [
      "although",
      "even though",
      "though",
      "despite",
      "in spite of",
      "regardless of",
      "notwithstanding",
      "while",
      "whereas",
      "admittedly",
      "granted that",
      "even if",
      "however much",
      "no matter",
    ],
    Purpose: [
      "in order to",
      "so as to",
      "so that",
      "for the purpose of",
      "with the aim of",
      "to",
      "for",
      "with a view to",
      "in the hope of",
    ],
    Comparison: [
      "similarly",
      "likewise",
      "in the same way",
      "equally",
      "just as",
      "by the same token",
      "in comparison",
      "compared to",
      "relative to",
    ],
    "Topic Shift": [
      "by the way",
      "incidentally",
      "speaking of",
      "that reminds me",
      "on another note",
      "changing the subject",
      "moving on",
    ],
    Digression: [
      "as an aside",
      "parenthetically",
      "by the way",
      "incidentally",
      "off the record",
      "just to mention",
    ],
    "Return to Topic": [
      "anyway",
      "anyhow",
      "getting back to",
      "as I was saying",
      "to return to",
      "where was I",
      "back to",
    ],
  },

  levels: {
    A1: {
      description:
        "Basic discourse markers for fundamental communication needs",
      cognitiveLoad: "Low - simple one-to-one form-function mapping",
      frequencyInSpeech: "Very high for core markers (and, but, because, so)",
      frequencyInWriting: "High in simple texts and personal writing",
      registerAppropriate: [
        "informal conversation",
        "basic writing",
        "simple narratives",
      ],

      examples: [
        {
          marker: "and",
          function: "Addition",
          example: "I like coffee and tea.",
          explanation: "Connects two similar ideas or items in a list",
          context: "Basic coordination of similar elements",
          pattern: "X + and + Y",
          formalityLevel: "neutral",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["plus", "also"],
          commonCollocations: ["and then", "and also", "and too"],
          pragmaticNotes:
            "Can connect words, phrases, or clauses of equal grammatical status",
        },
        {
          marker: "but",
          function: "Contrast",
          example: "I like coffee, but I don't like tea.",
          explanation: "Shows difference or opposition between two ideas",
          context: "Basic contrast in preferences or situations",
          pattern: "X, + but + Y",
          formalityLevel: "neutral",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["however", "though"],
          commonCollocations: ["but not", "but still", "but then"],
          pragmaticNotes:
            "Creates expectation of contrast; Y often contradicts expectation from X",
        },
        {
          marker: "because",
          function: "Cause and Effect",
          example: "I'm tired because I didn't sleep well.",
          explanation: "Introduces the reason or cause for something",
          context: "Explaining reasons for states or actions",
          pattern: "Result + because + cause",
          formalityLevel: "neutral",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["since", "as"],
          commonCollocations: ["because of", "just because"],
          pragmaticNotes:
            "Subordinate clause must follow main clause in this pattern",
        },
        {
          marker: "so",
          function: "Cause and Effect",
          example: "I'm tired, so I'll go to bed early.",
          explanation: "Shows the result or consequence of something",
          context: "Expressing logical conclusions or decisions",
          pattern: "Cause + so + result",
          formalityLevel: "informal",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["therefore", "thus"],
          commonCollocations: ["so that", "so then"],
          pragmaticNotes:
            "More common in spoken language; coordinates two independent clauses",
        },
        {
          marker: "then",
          function: "Time/Sequence",
          example: "First, I'll study. Then, I'll watch TV.",
          explanation: "Shows the next step in a sequence of events",
          context: "Organizing events in chronological order",
          pattern: "First + action, then + action",
          formalityLevel: "neutral",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["next", "after that"],
          commonCollocations: ["and then", "then again"],
          pragmaticNotes:
            "Can be used for temporal sequence or logical consequence",
        },
      ],

      masteryIndicators: [
        "Uses 'and', 'but', 'because', 'so' correctly in simple sentences",
        "Understands basic cause-effect relationships",
        "Can sequence events with 'first', 'then', 'finally'",
        "Recognizes contrast markers in listening",
      ],

      commonChallenges: [
        "Confusing 'because' and 'so' (cause vs. effect)",
        "Overusing 'and' for all connections",
        "Comma placement with coordinating conjunctions",
        "Understanding that 'but' signals contrast",
      ],

      learningTips: [
        "Start with simple connectors (and, but, because, so)",
        "Learn one function at a time",
        "Practice with everyday situations",
        "Use visual aids to show relationships",
        "Practice speaking before writing",
      ],

      assessmentCriteria: [
        "Correct usage in 80% of basic coordination contexts",
        "Appropriate cause-effect marker selection",
        "Basic sequencing with time markers",
        "Recognition in listening comprehension",
      ],
    },

    A2: {
      description: "Common discourse markers for expanded basic communication",
      cognitiveLoad:
        "Low-moderate - learning register differences and expanded functions",
      frequencyInSpeech: "High for everyday conversation markers",
      frequencyInWriting: "Moderate in personal and informal writing",
      registerAppropriate: [
        "casual conversation",
        "personal emails",
        "simple descriptions",
        "basic narratives",
      ],

      examples: [
        {
          marker: "also",
          function: "Addition",
          example: "I like pizza. I also like pasta.",
          explanation: "Adds similar information to previous statement",
          context: "Expanding on preferences or adding information",
          pattern: "Statement. Subject + also + verb + object",
          formalityLevel: "neutral",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["too", "as well"],
          commonCollocations: ["also have", "also think", "also like"],
          pragmaticNotes: "Mid-position adverb; more formal than 'too'",
        },
        {
          marker: "however",
          function: "Contrast",
          example: "I like the movie. However, it was too long.",
          explanation: "Introduces a contrasting idea more formally than 'but'",
          context: "Expressing reservations or contrasting opinions",
          pattern: "Sentence. However, + contrasting sentence",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: ["but", "though", "yet"],
          commonCollocations: ["however much", "however small"],
          pragmaticNotes:
            "Conjunctive adverb; requires semicolon or period before it",
        },
        {
          marker: "for example",
          function: "Giving Examples",
          example: "I like sports. For example, I play football.",
          explanation: "Introduces a specific instance of a general statement",
          context: "Providing concrete examples to illustrate points",
          pattern: "General statement. For example, + specific example",
          formalityLevel: "neutral",
          frequency: "very common",
          difficulty: "easy",
          alternativeExpressions: ["for instance", "such as"],
          commonCollocations: ["for example when", "for example if"],
          pragmaticNotes: "Can be abbreviated as 'e.g.' in written English",
        },
        {
          marker: "finally",
          function: "Time/Sequence",
          example:
            "First, I woke up. Then, I had breakfast. Finally, I went to work.",
          explanation: "Marks the last step in a sequence or the conclusion",
          context: "Completing sequences or reaching conclusions",
          pattern: "First... Then... Finally...",
          formalityLevel: "neutral",
          frequency: "common",
          difficulty: "easy",
          alternativeExpressions: ["lastly", "in the end"],
          commonCollocations: ["finally decided", "finally arrived"],
          pragmaticNotes:
            "Can indicate both temporal sequence and emphatic conclusion",
        },
        {
          marker: "therefore",
          function: "Cause and Effect",
          example: "It's raining. Therefore, I'll take an umbrella.",
          explanation: "Shows a logical conclusion drawn from evidence",
          context: "Formal reasoning and logical deductions",
          pattern: "Evidence/reason. Therefore, + conclusion",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: ["so", "thus", "consequently"],
          commonCollocations: ["therefore be", "therefore have"],
          pragmaticNotes: "More formal than 'so'; emphasizes logical reasoning",
        },
      ],

      masteryIndicators: [
        "Uses formal alternatives to basic connectors (however for but)",
        "Provides examples appropriately with 'for example'",
        "Sequences longer narratives with varied markers",
        "Understands register differences between markers",
      ],

      commonChallenges: [
        "Choosing between 'but' and 'however'",
        "Punctuation with conjunctive adverbs",
        "Overusing 'for example'",
        "Position of 'also' in sentences",
      ],

      learningTips: [
        "Learn common discourse markers for everyday use",
        "Practice with simple conversations and personal stories",
        "Understand basic sentence patterns and punctuation",
        "Compare formal vs. informal alternatives",
        "Use in context-rich activities",
      ],

      assessmentCriteria: [
        "Appropriate register selection for context",
        "Correct punctuation with conjunctive adverbs",
        "Effective use of exemplification markers",
        "Varied marker usage in extended discourse",
      ],
    },

    B1: {
      description:
        "Intermediate discourse markers for more sophisticated communication",
      cognitiveLoad:
        "Moderate - managing multiple functions and subtle meaning differences",
      frequencyInSpeech: "Moderate to high in educated speech",
      frequencyInWriting: "High in formal and academic writing",
      registerAppropriate: [
        "formal conversation",
        "business communication",
        "academic writing",
        "reports",
      ],

      examples: [
        {
          marker: "in addition",
          function: "Addition",
          example:
            "The food was delicious. In addition, the service was excellent.",
          explanation: "Adds substantial supporting information formally",
          context: "Formal addition of significant details",
          pattern: "Main point. In addition, + supporting detail",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: ["furthermore", "moreover", "additionally"],
          commonCollocations: ["in addition to", "in addition there"],
          pragmaticNotes:
            "More formal than 'also'; suggests planned discourse structure",
        },
        {
          marker: "on the other hand",
          function: "Contrast",
          example: "The job pays well. On the other hand, it's very stressful.",
          explanation: "Presents a balanced alternative viewpoint",
          context: "Balanced discussion of pros and cons",
          pattern: "One viewpoint. On the other hand, + alternative viewpoint",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: [
            "conversely",
            "by contrast",
            "alternatively",
          ],
          commonCollocations: [
            "on the other hand though",
            "but on the other hand",
          ],
          pragmaticNotes: "Implies balanced consideration of both sides",
        },
        {
          marker: "as a result",
          function: "Cause and Effect",
          example: "He studied hard. As a result, he passed the exam.",
          explanation:
            "Shows direct consequence of previous action or situation",
          context: "Formal expression of cause-effect relationships",
          pattern: "Cause/action. As a result, + effect/outcome",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: ["consequently", "therefore", "thus"],
          commonCollocations: ["as a result of", "as a direct result"],
          pragmaticNotes:
            "Emphasizes causal relationship more than simple 'so'",
        },
        {
          marker: "meanwhile",
          function: "Time/Sequence",
          example:
            "I was cooking dinner. Meanwhile, my husband was setting the table.",
          explanation: "Shows simultaneous actions or parallel developments",
          context: "Describing concurrent events or parallel processes",
          pattern: "Action 1. Meanwhile, + simultaneous action 2",
          formalityLevel: "neutral",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: [
            "at the same time",
            "simultaneously",
            "concurrently",
          ],
          commonCollocations: ["meanwhile back", "meanwhile elsewhere"],
          pragmaticNotes: "Indicates temporal overlap rather than sequence",
        },
        {
          marker: "in other words",
          function: "Reformulation/Clarification",
          example:
            "The weather is terrible. In other words, it's raining heavily.",
          explanation:
            "Restates previous information in clearer or simpler terms",
          context: "Clarifying or simplifying complex information",
          pattern:
            "Original statement. In other words, + clarification/restatement",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: [
            "that is to say",
            "to put it differently",
            "namely",
          ],
          commonCollocations: ["or in other words", "in other words exactly"],
          pragmaticNotes: "Signals reformulation for better understanding",
        },
      ],

      masteryIndicators: [
        "Uses formal discourse markers appropriately in academic contexts",
        "Manages complex cause-effect relationships",
        "Provides effective reformulations and clarifications",
        "Handles simultaneous events with appropriate markers",
      ],

      commonChallenges: [
        "Distinguishing between similar formal markers",
        "Appropriate register matching for context",
        "Complex punctuation patterns",
        "Overuse of formal markers in informal contexts",
      ],

      learningTips: [
        "Master intermediate discourse markers through extensive reading",
        "Practice with different text types and registers",
        "Focus on meaning relationships rather than just forms",
        "Analyze authentic academic and professional texts",
        "Practice reformulation exercises",
      ],

      assessmentCriteria: [
        "Effective use in formal writing tasks",
        "Appropriate register selection across contexts",
        "Clear expression of complex relationships",
        "Varied and sophisticated marker usage",
      ],
    },

    B2: {
      description:
        "Upper-intermediate discourse markers for complex and nuanced communication",
      cognitiveLoad:
        "Moderate-high - subtle distinctions and sophisticated pragmatic functions",
      frequencyInSpeech: "Moderate in formal/academic speech",
      frequencyInWriting: "Very high in academic and professional writing",
      registerAppropriate: [
        "academic presentations",
        "formal reports",
        "analytical writing",
        "professional communication",
      ],

      examples: [
        {
          marker: "moreover",
          function: "Addition",
          example:
            "The project was completed on time. Moreover, it was under budget.",
          explanation:
            "Adds significant information that strengthens the argument",
          context: "Academic and professional argumentation",
          pattern: "Main point. Moreover, + significant additional support",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "challenging",
          alternativeExpressions: ["furthermore", "in addition", "what's more"],
          commonCollocations: ["moreover it", "moreover there"],
          pragmaticNotes:
            "Stronger than 'in addition'; suggests cumulative evidence",
        },
        {
          marker: "nevertheless",
          function: "Contrast",
          example:
            "The weather was bad. Nevertheless, we decided to go hiking.",
          explanation: "Acknowledges obstacle but shows action despite it",
          context: "Formal concession and persistence",
          pattern: "Obstacle/problem. Nevertheless, + action despite obstacle",
          formalityLevel: "formal",
          frequency: "less common",
          difficulty: "challenging",
          alternativeExpressions: ["nonetheless", "however", "even so"],
          commonCollocations: ["nevertheless important", "nevertheless true"],
          pragmaticNotes: "Implies determination or unexpected persistence",
        },
        {
          marker: "consequently",
          function: "Cause and Effect",
          example:
            "The company lost money. Consequently, they had to lay off workers.",
          explanation: "Shows direct and often serious consequences",
          context: "Formal cause-effect in serious or official contexts",
          pattern: "Serious cause. Consequently, + serious effect",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "challenging",
          alternativeExpressions: ["as a result", "therefore", "thus"],
          commonCollocations: ["consequently be", "consequently have"],
          pragmaticNotes:
            "Often used for significant or inevitable consequences",
        },
        {
          marker: "to illustrate",
          function: "Giving Examples",
          example:
            "Many people prefer online shopping. To illustrate, Amazon's sales increased by 30%.",
          explanation: "Provides concrete evidence or specific examples",
          context: "Academic and professional exemplification",
          pattern:
            "General statement. To illustrate, + specific example/evidence",
          formalityLevel: "academic",
          frequency: "less common",
          difficulty: "challenging",
          alternativeExpressions: [
            "for example",
            "for instance",
            "as an illustration",
          ],
          commonCollocations: ["to illustrate this", "to illustrate further"],
          pragmaticNotes: "More formal and deliberate than 'for example'",
        },
        {
          marker: "that is to say",
          function: "Reformulation/Clarification",
          example:
            "The situation is complex. That is to say, there are many factors involved.",
          explanation: "Provides more detailed or precise explanation",
          context: "Academic clarification and precision",
          pattern: "General statement. That is to say, + detailed explanation",
          formalityLevel: "academic",
          frequency: "less common",
          difficulty: "challenging",
          alternativeExpressions: ["in other words", "namely", "i.e."],
          commonCollocations: ["or that is to say", "that is to say exactly"],
          pragmaticNotes: "Signals precision and careful definition",
        },
      ],

      masteryIndicators: [
        "Uses sophisticated formal markers in academic writing",
        "Understands subtle differences between similar markers",
        "Manages complex argumentative structures",
        "Provides precise exemplification and clarification",
      ],

      commonChallenges: [
        "Distinguishing between 'moreover' and 'furthermore'",
        "Appropriate usage of 'nevertheless' vs. 'however'",
        "Academic register requirements",
        "Avoiding overuse of formal markers",
      ],

      learningTips: [
        "Study academic texts and formal discourse extensively",
        "Practice with sophisticated argumentative writing",
        "Understand subtle differences between similar markers",
        "Focus on pragmatic effects and reader expectations",
        "Analyze professional and academic models",
      ],

      assessmentCriteria: [
        "Sophisticated marker usage in academic writing",
        "Clear understanding of pragmatic distinctions",
        "Effective argumentation with appropriate connectors",
        "Professional-level discourse organization",
      ],
    },

    C1: {
      description:
        "Advanced discourse markers for sophisticated and native-like communication",
      cognitiveLoad: "High - complex pragmatic functions and cultural nuances",
      frequencyInSpeech: "Low to moderate in highly educated formal speech",
      frequencyInWriting:
        "High in academic, literary, and professional writing",
      registerAppropriate: [
        "academic research",
        "literary analysis",
        "professional reports",
        "formal presentations",
      ],

      examples: [
        {
          marker: "furthermore",
          function: "Addition",
          example:
            "The research shows clear benefits. Furthermore, the methodology was robust.",
          explanation:
            "Adds substantial supporting evidence in formal argumentation",
          context: "Academic research and formal evidence presentation",
          pattern:
            "Evidence/claim. Furthermore, + additional substantial support",
          formalityLevel: "academic",
          frequency: "common",
          difficulty: "complex",
          alternativeExpressions: ["moreover", "in addition", "what is more"],
          commonCollocations: ["furthermore it", "furthermore we"],
          pragmaticNotes:
            "Strongest additive marker; builds cumulative argument",
        },
        {
          marker: "whereas",
          function: "Contrast",
          example:
            "Some people prefer cities, whereas others enjoy rural life.",
          explanation:
            "Shows systematic contrast between two parallel situations",
          context: "Academic comparison and formal analysis",
          pattern: "One situation, whereas + contrasting parallel situation",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "complex",
          alternativeExpressions: ["while", "whilst", "in contrast"],
          commonCollocations: ["whereas in", "whereas others"],
          pragmaticNotes:
            "Subordinating conjunction; creates balanced comparison",
        },
        {
          marker: "thus",
          function: "Cause and Effect",
          example:
            "The data was incomplete. Thus, we cannot draw definitive conclusions.",
          explanation: "Draws logical conclusion from evidence or reasoning",
          context: "Academic reasoning and logical argumentation",
          pattern: "Evidence/reasoning. Thus, + logical conclusion",
          formalityLevel: "academic",
          frequency: "common",
          difficulty: "complex",
          alternativeExpressions: ["therefore", "consequently", "hence"],
          commonCollocations: ["thus be", "thus have", "thus far"],
          pragmaticNotes:
            "More formal than 'therefore'; emphasizes logical deduction",
        },
        {
          marker: "to put it another way",
          function: "Reformulation/Clarification",
          example:
            "The economy is struggling. To put it another way, we're facing a recession.",
          explanation:
            "Restates information from different perspective or framework",
          context: "Academic explanation and conceptual clarification",
          pattern:
            "Original formulation. To put it another way, + alternative formulation",
          formalityLevel: "academic",
          frequency: "less common",
          difficulty: "complex",
          alternativeExpressions: [
            "in other words",
            "alternatively expressed",
            "put differently",
          ],
          commonCollocations: ["or to put it another way"],
          pragmaticNotes: "Suggests alternative conceptual framework",
        },
        {
          marker: "indeed",
          function: "Emphasis",
          example:
            "The results were impressive. Indeed, they exceeded all expectations.",
          explanation: "Emphasizes and confirms truth of previous statement",
          context: "Academic emphasis and strong confirmation",
          pattern: "Statement. Indeed, + emphatic confirmation/extension",
          formalityLevel: "formal",
          frequency: "common",
          difficulty: "complex",
          alternativeExpressions: ["in fact", "certainly", "undoubtedly"],
          commonCollocations: ["indeed it", "indeed they", "very indeed"],
          pragmaticNotes: "Can express both confirmation and surprise",
        },
      ],

      masteryIndicators: [
        "Uses native-like sophisticated discourse markers",
        "Understands subtle pragmatic and cultural nuances",
        "Manages complex academic argumentation effectively",
        "Demonstrates flexibility in register and style",
      ],

      commonChallenges: [
        "Cultural appropriateness of emphasis markers",
        "Subtle distinctions in academic writing",
        "Avoiding overuse in spoken language",
        "Balancing formality with naturalness",
      ],

      learningTips: [
        "Immerse in academic and professional discourse",
        "Study native speaker usage patterns",
        "Practice with sophisticated texts and contexts",
        "Understand cultural and pragmatic dimensions",
        "Develop sensitivity to register variation",
      ],

      assessmentCriteria: [
        "Native-like sophistication in formal contexts",
        "Cultural and pragmatic appropriateness",
        "Effective academic and professional communication",
        "Flexible adaptation to various registers",
      ],
    },

    C2: {
      description:
        "Mastery-level discourse markers for native-like proficiency and stylistic sophistication",
      cognitiveLoad: "Very high - native-like intuition and stylistic control",
      frequencyInSpeech: "Variable - depends on individual style and context",
      frequencyInWriting: "High in sophisticated literary and academic writing",
      registerAppropriate: [
        "literary writing",
        "advanced academic research",
        "sophisticated journalism",
        "expert presentations",
      ],

      examples: [
        {
          marker: "what's more",
          function: "Addition",
          example:
            "The proposal is cost-effective. What's more, it's environmentally sustainable.",
          explanation:
            "Adds information that significantly strengthens the case",
          context: "Persuasive and emphatic argumentation",
          pattern:
            "Strong point. What's more, + even stronger supporting point",
          formalityLevel: "formal",
          frequency: "less common",
          difficulty: "complex",
          alternativeExpressions: ["moreover", "furthermore", "on top of that"],
          commonCollocations: ["and what's more", "but what's more"],
          pragmaticNotes:
            "Suggests escalating strength of argument; slightly informal tone",
        },
        {
          marker: "even though",
          function: "Concession",
          example:
            "Even though the weather was terrible, we had a wonderful time.",
          explanation:
            "Acknowledges significant obstacle while emphasizing unexpected positive outcome",
          context: "Sophisticated concessive relationships",
          pattern:
            "Even though + significant obstacle, + unexpected positive result",
          formalityLevel: "neutral",
          frequency: "common",
          difficulty: "complex",
          alternativeExpressions: [
            "although",
            "despite the fact that",
            "notwithstanding",
          ],
          commonCollocations: ["even though it", "even though they"],
          pragmaticNotes: "Stronger concessive force than 'although'",
        },
        {
          marker: "provided that",
          function: "Condition",
          example:
            "We can proceed with the project, provided that we have sufficient funding.",
          explanation: "Sets specific and often formal conditions for action",
          context: "Formal conditional statements and agreements",
          pattern: "Action/outcome, provided that + specific condition",
          formalityLevel: "formal",
          frequency: "less common",
          difficulty: "complex",
          alternativeExpressions: [
            "as long as",
            "on condition that",
            "assuming that",
          ],
          commonCollocations: ["provided that we", "provided that they"],
          pragmaticNotes:
            "More formal than 'if'; often used in legal/official contexts",
        },
        {
          marker: "above all",
          function: "Emphasis",
          example:
            "The candidate has many qualifications. Above all, she has extensive experience.",
          explanation: "Highlights the most important or decisive factor",
          context: "Academic and professional priority setting",
          pattern: "Multiple factors. Above all, + most crucial factor",
          formalityLevel: "formal",
          frequency: "less common",
          difficulty: "complex",
          alternativeExpressions: ["most importantly", "primarily", "chiefly"],
          commonCollocations: ["but above all", "and above all"],
          pragmaticNotes: "Creates hierarchical ranking of importance",
        },
        {
          marker: "in conclusion",
          function: "Summarizing/Concluding",
          example:
            "In conclusion, the evidence strongly supports our hypothesis.",
          explanation:
            "Formally signals final summary and definitive conclusion",
          context: "Academic papers, formal presentations, official statements",
          pattern: "In conclusion, + definitive summary statement",
          formalityLevel: "academic",
          frequency: "common",
          difficulty: "moderate",
          alternativeExpressions: ["to conclude", "finally", "to sum up"],
          commonCollocations: ["in conclusion it", "in conclusion we"],
          pragmaticNotes:
            "Standard academic conclusion marker; signals end of argument",
        },
      ],

      masteryIndicators: [
        "Demonstrates complete native-like control of discourse markers",
        "Uses markers creatively and stylistically",
        "Shows sophisticated understanding of pragmatic effects",
        "Adapts usage to highly specialized contexts",
      ],

      commonChallenges: [
        "Developing personal style while maintaining appropriateness",
        "Understanding very subtle contextual constraints",
        "Avoiding overuse of sophisticated markers",
        "Achieving natural flow in highly formal contexts",
      ],

      learningTips: [
        "Develop individual style through extensive reading",
        "Study literary and sophisticated academic models",
        "Practice creative and flexible usage",
        "Understand cultural and contextual nuances deeply",
        "Focus on pragmatic effects and reader response",
      ],

      assessmentCriteria: [
        "Complete mastery across all registers and contexts",
        "Creative and stylistically appropriate usage",
        "Native-like intuition for pragmatic effects",
        "Sophisticated control of discourse organization",
      ],
    },
  },

  examples: [
    "I like tea. **However**, I don't drink it often.",
    "**In addition**, we need to consider the environmental impact.",
    "He was tired. **Therefore**, he went to bed early.",
    "**For example**, many countries have banned plastic bags.",
    "**To sum up**, we need more action on climate change.",
    "**Moreover**, the research methodology was rigorous.",
    "**Nevertheless**, the project was completed successfully.",
    "**Whereas** some prefer coffee, others choose tea.",
    "**Indeed**, the results exceeded expectations.",
    "**Provided that** funding is available, we can proceed.",
  ],

  recognitionTips: [
    "Usually placed at the beginning or middle of a sentence",
    "Can often be removed without changing the core meaning, but clarity and flow will decrease",
    "Often followed by a comma when in writing",
    "May be preceded by semicolon or period when joining independent clauses",
    "Often have prosodic prominence (stress) in spoken language",
    "Can appear in parenthetical positions for emphasis or clarification",
  ],

  commonErrors: [
    {
      error:
        "Using informal discourse markers in academic writing (e.g., 'like' instead of 'such as')",
      explanation: "Register mismatch reduces credibility in formal contexts",
      correctForm:
        "Use 'such as', 'for instance', or 'for example' in academic writing",
      level: "B1-B2",
    },
    {
      error:
        "Misusing the marker's function (e.g., using 'however' when giving an example)",
      explanation:
        "Each marker has specific pragmatic functions that must be matched to context",
      correctForm: "Match marker function to intended meaning relationship",
      level: "A2-B1",
    },
    {
      error:
        "Overusing the same marker (e.g., starting every sentence with 'also')",
      explanation:
        "Repetitive use reduces effectiveness and shows limited vocabulary",
      correctForm:
        "Vary discourse markers while maintaining appropriate register",
      level: "B1-B2",
    },
    {
      error:
        "Incorrect punctuation with conjunctive adverbs (e.g., 'I like coffee, however, I prefer tea')",
      explanation:
        "Conjunctive adverbs require semicolon or period before them",
      correctForm:
        "I like coffee; however, I prefer tea. OR I like coffee. However, I prefer tea.",
      level: "A2-B1",
    },
    {
      error:
        "Using 'because' at the beginning of independent sentences ('Because I was tired.')",
      explanation: "'Because' creates dependent clauses that need main clauses",
      correctForm:
        "I went to bed early because I was tired. OR Since I was tired, I went to bed early.",
      level: "A1-A2",
    },
  ],

  pedagogicalProgression: {
    teachingOrder: [
      "Basic coordinators (and, but, or)",
      "Simple causality (because, so)",
      "Basic sequencing (first, then, finally)",
      "Simple addition (also, too)",
      "Basic contrast (however, though)",
      "Exemplification (for example, such as)",
      "Formal addition (in addition, moreover)",
      "Complex causality (therefore, consequently)",
      "Reformulation (in other words, that is)",
      "Emphasis markers (indeed, in fact)",
      "Advanced conditional (provided that, unless)",
      "Sophisticated concession (nevertheless, notwithstanding)",
    ],
    skillBuilding: [
      {
        skill: "Recognition and comprehension",
        level: "A1",
        prerequisite: ["Basic sentence structure", "Simple vocabulary"],
      },
      {
        skill: "Production in controlled contexts",
        level: "A2",
        prerequisite: ["Recognition mastery", "Extended vocabulary"],
      },
      {
        skill: "Flexible usage across registers",
        level: "B1",
        prerequisite: ["Controlled production", "Register awareness"],
      },
      {
        skill: "Sophisticated academic usage",
        level: "B2-C1",
        prerequisite: ["Register flexibility", "Academic writing skills"],
      },
      {
        skill: "Creative and stylistic control",
        level: "C2",
        prerequisite: [
          "Academic mastery",
          "Extensive exposure to authentic texts",
        ],
      },
    ],
  },

  culturalVariations: [
    {
      variety: "American English",
      preferences: ["so", "also", "like", "basically", "anyway"],
      avoidances: ["whilst", "rather", "(meaning 'quite')", "mind you"],
    },
    {
      variety: "British English",
      preferences: ["whilst", "rather", "quite", "mind you", "I mean"],
      avoidances: ["like as discourse marker", "basically", "overuse"],
    },
    {
      variety: "Academic English",
      preferences: ["moreover", "furthermore", "nevertheless", "thus", "hence"],
      avoidances: ["so", "like", "anyway", "well", "you know"],
    },
    {
      variety: "Business English",
      preferences: [
        "therefore",
        "however",
        "in addition",
        "consequently",
        "furthermore",
      ],
      avoidances: ["like", "so", "anyway", "well", "you know"],
    },
  ],

  corpusData: {
    mostFrequent: [
      "and",
      "but",
      "so",
      "because",
      "also",
      "however",
      "then",
      "therefore",
      "for example",
      "finally",
    ],
    academicWriting: [
      "however",
      "therefore",
      "moreover",
      "furthermore",
      "nevertheless",
      "thus",
      "consequently",
      "in addition",
    ],
    spokenLanguage: [
      "and",
      "but",
      "so",
      "like",
      "also",
      "anyway",
      "well",
      "you know",
      "I mean",
      "basically",
    ],
    formalWriting: [
      "moreover",
      "furthermore",
      "nevertheless",
      "consequently",
      "thus",
      "hence",
      "whereas",
      "notwithstanding",
    ],
  },

  references: [
    {
      title: "Discourse Markers in English Writing",
      author: "Ken Hyland",
      year: 2005,
      publisher: "Journal of English for Academic Purposes",
      type: "article",
      relevance:
        "Comprehensive analysis of discourse markers in academic writing with corpus-based evidence",
    },
    {
      title: "Discourse Markers: Descriptions and Theory",
      author: "Laurel J. Brinton",
      year: 1996,
      publisher: "John Benjamins Publishing",
      type: "book",
      relevance:
        "Foundational theoretical work on discourse markers from linguistic perspective",
    },
    {
      title: "Coherence in Spoken and Written Discourse",
      author: "Tannen, Deborah",
      year: 1984,
      publisher: "Ablex Publishing",
      type: "book",
      relevance:
        "Essential reference for understanding discourse coherence and marker functions",
    },
    {
      title: "Practical English Usage",
      author: "Michael Swan",
      year: 2016,
      publisher: "Oxford University Press",
      type: "book",
      relevance:
        "Practical guide with clear explanations of discourse marker usage for learners",
    },
    {
      title: "Academic Writing for Graduate Students",
      author: "John M. Swales & Christine B. Feak",
      year: 2012,
      publisher: "University of Michigan Press",
      type: "book",
      relevance:
        "Essential resource for academic discourse marker usage and writing development",
    },
    {
      title: "The Cambridge Grammar of the English Language",
      author: "Rodney Huddleston & Geoffrey K. Pullum",
      year: 2002,
      publisher: "Cambridge University Press",
      type: "book",
      relevance:
        "Authoritative grammatical analysis of conjunctions and discourse markers",
    },
    {
      title: "Longman Dictionary of Contemporary English",
      author: "Longman",
      year: 2021,
      url: "https://www.ldoceonline.com/",
      type: "website",
      relevance:
        "Comprehensive corpus-based dictionary with discourse marker usage patterns",
    },
    {
      title: "Oxford English Dictionary",
      author: "Oxford University Press",
      year: 2023,
      url: "https://www.oed.com/",
      type: "website",
      relevance:
        "Historical and contemporary usage evidence for discourse markers",
    },
    {
      title: "Corpus of Contemporary American English (COCA)",
      author: "Mark Davies",
      year: 2020,
      url: "https://www.english-corpora.org/coca/",
      type: "website",
      relevance:
        "Large corpus for analyzing authentic discourse marker usage patterns",
    },
    {
      title: "British National Corpus (BNC)",
      author: "Oxford University Computing Services",
      year: 2007,
      url: "https://www.english-corpora.org/bnc/",
      type: "website",
      relevance:
        "Comprehensive corpus for British English discourse marker analysis",
    },
  ],
};

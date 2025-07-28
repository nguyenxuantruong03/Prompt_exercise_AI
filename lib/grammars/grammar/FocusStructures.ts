import { FocusStructuresType } from "@/types/grammars/grammar/FocusStructures";

export const FocusStructuresData:FocusStructuresType = {
  definition:
    "Focus structures are grammatical constructions used to highlight or emphasize a particular part of a sentence. They help draw attention to important information, clarify meaning, and add variety to both spoken and written English. These structures manipulate word order, use specific grammatical patterns, and employ emphasis markers to create different levels of focus and emphasis in communication.",
  purpose: [
    "To emphasize the most important information.",
    "To draw attention to a specific element (subject, object, adverbial, etc.).",
    "To add variety and sophistication to sentence structure.",
    "To improve coherence and clarity in writing or speaking.",
    "To create dramatic or persuasive effect.",
    "To clarify who or what is responsible for an action.",
    "To highlight contrast, reason, or time.",
    "To create rhetorical impact in formal and informal contexts.",
    "To enhance narrative flow and reader engagement.",
    "To distinguish between given and new information in discourse.",
  ],
  levels: {
    A1: {
      description:
        "Basic focus structures for beginners - Introduction to simple emphasis techniques",
      examples: [
        {
          structure: "Emphatic 'do'",
          example: "I do like apples!",
          explanation: "Using 'do' to emphasize a positive statement.",
          context: "Expressing strong likes/dislikes",
          pattern: "Subject + do/does + base verb + object",
          usageNotes:
            "Used in positive statements to contradict negative assumptions",
          variations: [
            "I do want to go",
            "She does work hard",
            "They do understand",
          ],
        },
        {
          structure: "Simple fronting",
          example: "This book, I like.",
          explanation: "Moving the object to the front for emphasis.",
          context: "Highlighting preferences",
          pattern: "Object + comma + subject + verb",
          usageNotes: "Informal structure, common in spoken English",
          variations: [
            "That movie, I love",
            "This food, I hate",
            "Her voice, I remember",
          ],
        },
        {
          structure: "Repetition for emphasis",
          example: "Very, very good!",
          explanation: "Repeating an adjective for emotional emphasis.",
          context: "Expressing strong feelings",
          pattern: "Adjective, adjective + noun",
          usageNotes: "Creates emotional intensity",
          variations: [
            "Big, big problem",
            "Small, small mistake",
            "Hot, hot weather",
          ],
        },
      ],
      learningTips: [
        "Practice using 'do' for emphasis in positive sentences.",
        "Try fronting objects in simple sentences.",
        "Use repetition to show strong feelings.",
        "Start with basic emphasis before moving to complex structures.",
        "Focus on spoken English patterns first.",
      ],
      keyConcepts: [
        "Basic emphasis using auxiliary verbs",
        "Simple word order changes",
        "Repetition for emotional effect",
        "Informal vs formal emphasis",
      ],
      practiceAreas: [
        "Daily conversation emphasis",
        "Expressing likes and dislikes",
        "Simple object fronting",
        "Emotional expression through repetition",
      ],
      commonMistakes: [
        "Using 'do' in negative sentences incorrectly",
        "Forgetting comma in fronted structures",
        "Overusing repetition",
        "Mixing formal and informal structures",
      ],
      progressionToNextLevel: [
        "Master basic 'do' emphasis patterns",
        "Practice object fronting in various contexts",
        "Understand when to use repetition",
        "Begin recognizing it-cleft structures",
      ],
    },
    A2: {
      description:
        "Common focus structures for basic communication - Building foundation for complex emphasis",
      examples: [
        {
          structure: "It-cleft (basic)",
          example: "It was my friend who called.",
          explanation: "Highlighting the person who performed the action.",
          context: "Identifying the subject",
          pattern: "It was + subject + who + verb",
          usageNotes: "Used to clarify who did something",
          variations: [
            "It was John who left",
            "It was the dog that barked",
            "It was she who won",
          ],
        },
        {
          structure: "Wh-cleft (basic)",
          example: "What I need is a break.",
          explanation: "Highlighting what is needed.",
          context: "Expressing needs",
          pattern: "What + subject + verb + is + focus",
          usageNotes: "Emphasizes the object or complement",
          variations: [
            "What I want is peace",
            "What she likes is music",
            "What they need is help",
          ],
        },
        {
          structure: "Fronting adverbials",
          example: "Yesterday, I saw her.",
          explanation: "Moving time expressions to the front for focus.",
          context: "Emphasizing time",
          pattern: "Adverbial + comma + subject + verb",
          usageNotes: "Common in both spoken and written English",
          variations: [
            "Today, I feel better",
            "Here, we can rest",
            "Now, I understand",
          ],
        },
      ],
      learningTips: [
        "Use 'It was...' to focus on people or things.",
        "Start sentences with time or place for emphasis.",
        "Practice wh-cleft patterns for needs and wants.",
        "Learn to recognize cleft sentence patterns.",
        "Practice with simple, everyday contexts.",
      ],
      keyConcepts: [
        "Cleft sentence structure",
        "Adverbial fronting",
        "Subject and object emphasis",
        "Basic wh-cleft patterns",
      ],
      practiceAreas: [
        "Identifying people and things",
        "Expressing needs and wants",
        "Time and place emphasis",
        "Basic information highlighting",
      ],
      commonMistakes: [
        "Incorrect use of 'who' vs 'that'",
        "Missing commas in fronted structures",
        "Confusing it-cleft and wh-cleft",
        "Overusing cleft structures",
      ],
      progressionToNextLevel: [
        "Master basic cleft sentence patterns",
        "Understand adverbial fronting",
        "Practice with different contexts",
        "Begin learning object cleft structures",
      ],
    },
    B1: {
      description:
        "Intermediate focus structures for everyday communication - Expanding emphasis techniques",
      examples: [
        {
          structure: "It-cleft (object)",
          example: "It was the book that I lost.",
          explanation: "Highlighting the object of the action.",
          context: "Clarifying what was affected",
          pattern: "It was + object + that + subject + verb",
          usageNotes: "Emphasizes the object rather than the subject",
          variations: [
            "It was the key that I found",
            "It was the money that she spent",
            "It was the car that they sold",
          ],
        },
        {
          structure: "Wh-cleft (reason)",
          example: "What I like is the atmosphere.",
          explanation: "Highlighting the reason for a preference.",
          context: "Explaining preferences",
          pattern: "What + subject + verb + is + focus",
          usageNotes: "Used to explain reasons and preferences",
          variations: [
            "What I enjoy is the challenge",
            "What she loves is the freedom",
            "What they appreciate is the honesty",
          ],
        },
        {
          structure: "Inversion (negative adverb)",
          example: "Never have I seen such beauty.",
          explanation:
            "Placing a negative adverb at the front for dramatic effect.",
          context: "Expressing surprise or rarity",
          pattern: "Negative adverb + auxiliary + subject + verb",
          usageNotes: "Creates dramatic or formal effect",
          variations: [
            "Rarely do I eat meat",
            "Seldom have they visited",
            "Hardly ever does she complain",
          ],
        },
      ],
      learningTips: [
        "Practice it-cleft and wh-cleft for objects and reasons.",
        "Use inversion with negative adverbs for drama.",
        "Experiment with fronting for different sentence elements.",
        "Learn to choose appropriate focus structures.",
        "Practice in both formal and informal contexts.",
      ],
      keyConcepts: [
        "Object emphasis in cleft sentences",
        "Reason and preference highlighting",
        "Negative adverb inversion",
        "Context-appropriate focus structures",
      ],
      practiceAreas: [
        "Object identification and emphasis",
        "Explaining preferences and reasons",
        "Dramatic expression",
        "Formal vs informal emphasis",
      ],
      commonMistakes: [
        "Confusing subject and object cleft structures",
        "Incorrect auxiliary verb placement in inversion",
        "Overusing dramatic structures",
        "Mixing formal and informal registers",
      ],
      progressionToNextLevel: [
        "Master object cleft structures",
        "Understand inversion patterns",
        "Develop context awareness",
        "Begin learning complex cleft structures",
      ],
    },
    B2: {
      description:
        "Upper-intermediate focus structures for complex communication - Advanced emphasis techniques",
      examples: [
        {
          structure: "It-cleft (place/time)",
          example: "It was in Paris that they met.",
          explanation: "Highlighting the place of an event.",
          context: "Emphasizing location or time",
          pattern: "It was + place/time + that + subject + verb",
          usageNotes: "Emphasizes when or where something happened",
          variations: [
            "It was last year that she graduated",
            "It was at the party that they argued",
            "It was during the storm that the tree fell",
          ],
        },
        {
          structure: "Wh-cleft (action)",
          example: "What she did was bake a cake.",
          explanation: "Highlighting the action performed.",
          context: "Describing actions",
          pattern: "What + subject + did + was + action",
          usageNotes: "Emphasizes the action rather than the result",
          variations: [
            "What he did was call the police",
            "What they did was wait patiently",
            "What I did was explain clearly",
          ],
        },
        {
          structure: "Fronting (adjective/phrase)",
          example: "Happy as he was, he didn't show it.",
          explanation: "Moving an adjective phrase to the front for focus.",
          context: "Emphasizing a state or quality",
          pattern: "Adjective/phrase + as + subject + verb",
          usageNotes: "Creates contrast or concession",
          variations: [
            "Tired as she was, she continued",
            "Young as he is, he's wise",
            "Simple as it seems, it's complex",
          ],
        },
      ],
      learningTips: [
        "Use it-cleft for time and place emphasis.",
        "Try wh-cleft for actions and results.",
        "Practice fronting with adjective phrases.",
        "Learn to create contrast and concession.",
        "Develop sophisticated emphasis techniques.",
      ],
      keyConcepts: [
        "Time and place emphasis",
        "Action highlighting",
        "Adjective phrase fronting",
        "Contrast and concession structures",
      ],
      practiceAreas: [
        "Narrative emphasis",
        "Action description",
        "Contrast creation",
        "Sophisticated expression",
      ],
      commonMistakes: [
        "Incorrect preposition usage in place/time cleft",
        "Confusing action and result emphasis",
        "Overusing concessive structures",
        "Inappropriate formality levels",
      ],
      progressionToNextLevel: [
        "Master complex cleft structures",
        "Understand concessive patterns",
        "Develop narrative emphasis skills",
        "Begin learning advanced inversion",
      ],
    },
    C1: {
      description:
        "Advanced focus structures for sophisticated communication - Mastery of complex emphasis",
      examples: [
        {
          structure: "Complex it-cleft",
          example:
            "It was only after the meeting that the problem became clear.",
          explanation: "Highlighting a specific time or condition.",
          context: "Emphasizing timing or conditions",
          pattern: "It was only after + event + that + result",
          usageNotes: "Emphasizes the timing or condition of realization",
          variations: [
            "It was not until later that I understood",
            "It was only when she spoke that I recognized her",
            "It was only after the accident that they realized the danger",
          ],
        },
        {
          structure: "Complex wh-cleft",
          example: "What surprised me most was her reaction.",
          explanation: "Highlighting the most surprising element.",
          context: "Expressing surprise or focus",
          pattern: "What + clause + was + focus",
          usageNotes: "Emphasizes the most significant aspect",
          variations: [
            "What impressed me most was his dedication",
            "What concerned me most was the timing",
            "What interested me most was the methodology",
          ],
        },
        {
          structure: "Inversion (limiting/only)",
          example: "Only then did I understand the truth.",
          explanation: "Using 'only' at the front for focus.",
          context: "Highlighting a moment of realization",
          pattern: "Only + adverbial + auxiliary + subject + verb",
          usageNotes: "Creates dramatic emphasis on timing or conditions",
          variations: [
            "Only later did I realize",
            "Only when she left did I miss her",
            "Only after the storm did we see the rainbow",
          ],
        },
      ],
      learningTips: [
        "Master complex cleft and inversion structures.",
        "Use focus structures to clarify and dramatize information.",
        "Practice with advanced texts and speeches.",
        "Develop nuanced emphasis techniques.",
        "Understand subtle differences in emphasis.",
      ],
      keyConcepts: [
        "Complex timing emphasis",
        "Sophisticated surprise expression",
        "Advanced inversion patterns",
        "Nuanced emphasis techniques",
      ],
      practiceAreas: [
        "Academic writing emphasis",
        "Sophisticated narrative",
        "Complex argumentation",
        "Professional communication",
      ],
      commonMistakes: [
        "Over-complicating simple emphasis",
        "Inappropriate use of complex structures",
        "Losing clarity in pursuit of sophistication",
        "Mixing incompatible emphasis patterns",
      ],
      progressionToNextLevel: [
        "Achieve native-like mastery",
        "Develop personal emphasis style",
        "Create original emphasis patterns",
        "Teach others focus structures",
      ],
    },
    C2: {
      description:
        "Mastery-level focus structures for native-like proficiency - Complete command of emphasis",
      examples: [
        {
          structure: "Multiple focus structures",
          example:
            "It was not until the end of the play that the audience understood the message.",
          explanation: "Combining cleft and time focus for dramatic effect.",
          context: "Advanced narrative or analysis",
          pattern: "It was not until + event + that + result",
          usageNotes: "Creates layered emphasis for maximum impact",
          variations: [
            "It was only after years of study that the truth emerged",
            "It was not until the final chapter that the mystery was solved",
            "It was only when all hope was lost that the miracle occurred",
          ],
        },
        {
          structure: "Advanced inversion",
          example: "Rarely had the city seen such excitement.",
          explanation: "Using rare adverbs for dramatic inversion.",
          context: "Describing rare events",
          pattern: "Rarely + auxiliary + subject + verb",
          usageNotes: "Creates sophisticated dramatic effect",
          variations: [
            "Seldom had they witnessed such beauty",
            "Never before had the world experienced such change",
            "Hardly ever had the team performed so well",
          ],
        },
        {
          structure: "Layered fronting",
          example: "Happy though she was, she remained silent.",
          explanation: "Combining fronting and concessive clauses.",
          context: "Expressing contrast and focus",
          pattern: "Adjective/phrase + though/as + subject + verb",
          usageNotes: "Creates complex emotional emphasis",
          variations: [
            "Wise though he was, he made mistakes",
            "Beautiful as it was, the painting failed to sell",
            "Simple though it seemed, the solution was brilliant",
          ],
        },
      ],
      learningTips: [
        "Achieve native-like mastery of focus structures.",
        "Analyze advanced literature and speeches for focus techniques.",
        "Use layered and combined focus structures for effect.",
        "Develop personal emphasis style.",
        "Create original emphasis patterns.",
      ],
      keyConcepts: [
        "Layered emphasis techniques",
        "Sophisticated dramatic effect",
        "Complex emotional expression",
        "Personal emphasis style",
      ],
      practiceAreas: [
        "Literary analysis and creation",
        "Advanced public speaking",
        "Sophisticated academic writing",
        "Creative emphasis expression",
      ],
      commonMistakes: [
        "Over-elaboration leading to confusion",
        "Losing natural flow in pursuit of complexity",
        "Inappropriate use of dramatic structures",
        "Forgetting the purpose of emphasis",
      ],
      progressionToNextLevel: [
        "Achieve complete mastery",
        "Develop teaching abilities",
        "Create innovative emphasis patterns",
        "Contribute to language development",
      ],
    },
  },
  types: {
    "Cleft Sentences": {
      "It-cleft": "It was John who broke the window.",
      "Wh-cleft": "What he needs is a break.",
      "Pseudo-cleft": "The one who called was John.",
    },
    Fronting: {
      example: "This book, I really enjoyed.",
      note: "An element is moved to the beginning of the sentence for emphasis.",
    },
    Inversion: {
      example: "Never have I seen such chaos.",
      note: "Normal word order is reversed, often for emphasis or style.",
    },
    "Repetition for Emphasis": {
      example: "He is very, very smart.",
      note: "Repetition of words to create emotional emphasis.",
    },
    "Emphatic Do": {
      example: "I do like your new haircut.",
      note: "Using 'do/does/did' to emphasize the main verb.",
    },
    "Only-Structures": {
      example: "Only then did I understand the truth.",
      note: "Focuses on a time, reason, or subject using 'only'.",
    },
    "Negative Inversion": {
      example: "Rarely do we see such beauty.",
      note: "Using negative adverbs at the beginning for dramatic effect.",
    },
  },
  examples: [
    {
      structure: "It-cleft",
      example: "It was the teacher who made the final decision.",
    },
    {
      structure: "Wh-cleft",
      example: "What I need is a holiday.",
    },
    {
      structure: "Fronting",
      example: "Under no circumstances should you open the door.",
    },
    {
      structure: "Emphatic 'do'",
      example: "She does want to go with us.",
    },
    {
      structure: "Only-structure",
      example: "Only after the meeting did they realize the problem.",
    },
    {
      structure: "Negative inversion",
      example: "Never have I experienced such joy.",
    },
    {
      structure: "Complex cleft",
      example:
        "It was not until the final chapter that the mystery was solved.",
    },
  ],
  recognitionTips: [
    "Look for sentences starting with 'It is/was...' or 'What... is/was...'.",
    "Unusual word order often signals a focus structure.",
    "Presence of emphasis words like 'do', 'only', 'never', or repetition.",
    "Sentences that seem to emphasize one element over others.",
    "Structures that create dramatic or formal effect.",
    "Patterns that highlight specific information.",
  ],
  commonErrors: [
    "Misplacing the subject or verb in cleft sentences.",
    "Overusing cleft or fronted structures, making writing too heavy.",
    "Using informal focus structures in formal contexts inappropriately.",
    "Incorrect auxiliary verb placement in inversion.",
    "Confusing different types of cleft structures.",
    "Forgetting commas in fronted structures.",
    "Overusing dramatic structures in inappropriate contexts.",
  ],
  references: [
    {
      title: "Advanced Grammar in Use",
      author: "Martin Hewings",
      type: "book",
      description:
        "Comprehensive guide to advanced English grammar including focus structures",
      level: "C1",
      url: "https://www.cambridge.org/grammarandbeyond/advanced-grammar-in-use",
    },
    {
      title: "Practical English Usage",
      author: "Michael Swan",
      type: "book",
      description: "Essential reference for English grammar and usage patterns",
      level: "all",
      url: "https://www.oxfordlearnersdictionaries.com/about/practical-english-usage",
    },
    {
      title: "English Grammar: A University Course",
      author: "Angela Downing",
      type: "book",
      description:
        "Academic approach to English grammar with focus on discourse analysis",
      level: "C2",
      url: "https://www.routledge.com/English-Grammar-A-University-Course/Downing/p/book/9780415732680",
    },
    {
      title: "BBC Learning English - Grammar",
      type: "website",
      description: "Free online grammar lessons including focus structures",
      level: "all",
      url: "https://www.bbc.co.uk/learningenglish/english/grammar",
    },
    {
      title: "Cambridge English: Advanced (CAE)",
      type: "course",
      description:
        "Official Cambridge preparation course covering advanced grammar structures",
      level: "C1",
      url: "https://www.cambridgeenglish.org/exams-and-tests/advanced/",
    },
    {
      title: "The Grammar Book: An ESL/EFL Teacher's Course",
      author: "Marianne Celce-Murcia, Diane Larsen-Freeman",
      type: "book",
      description:
        "Comprehensive grammar reference for teachers and advanced learners",
      level: "C2",
      url: "https://www.cengage.com/c/the-grammar-book-9781111351861",
    },
    {
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      type: "book",
      description:
        "Classic grammar reference with clear explanations and exercises",
      level: "B1",
      url: "https://www.cambridge.org/grammarandbeyond/english-grammar-in-use",
    },
  ],
  learningPath: {
    overview:
      "A systematic approach to mastering focus structures from basic emphasis to sophisticated rhetorical techniques",
    prerequisites: [
      "Basic understanding of English sentence structure",
      "Familiarity with auxiliary verbs",
      "Knowledge of basic word order",
      "Understanding of formal vs informal registers",
    ],
    milestones: {
      A1: [
        "Master basic 'do' emphasis",
        "Understand simple fronting",
        "Use repetition for emotional effect",
        "Recognize basic emphasis patterns",
      ],
      A2: [
        "Master basic it-cleft structures",
        "Understand wh-cleft patterns",
        "Practice adverbial fronting",
        "Recognize cleft sentence patterns",
      ],
      B1: [
        "Master object cleft structures",
        "Understand negative adverb inversion",
        "Practice reason and preference emphasis",
        "Develop context awareness",
      ],
      B2: [
        "Master time and place emphasis",
        "Understand action highlighting",
        "Practice concessive structures",
        "Develop sophisticated emphasis techniques",
      ],
      C1: [
        "Master complex cleft structures",
        "Understand advanced inversion",
        "Develop nuanced emphasis techniques",
        "Create sophisticated emphasis patterns",
      ],
      C2: [
        "Achieve native-like mastery",
        "Create layered emphasis structures",
        "Develop personal emphasis style",
        "Teach others focus structures",
      ],
    },
    assessmentCriteria: {
      A1: [
        "Can use 'do' for emphasis correctly",
        "Can front simple objects",
        "Can use repetition for emotional effect",
        "Recognizes basic emphasis patterns",
      ],
      A2: [
        "Can form basic it-cleft sentences",
        "Can use wh-cleft for needs and wants",
        "Can front time and place expressions",
        "Understands basic cleft patterns",
      ],
      B1: [
        "Can emphasize objects in cleft structures",
        "Can use negative adverb inversion",
        "Can explain reasons and preferences",
        "Chooses appropriate focus structures",
      ],
      B2: [
        "Can emphasize time and place",
        "Can highlight actions and results",
        "Can create contrast and concession",
        "Uses sophisticated emphasis techniques",
      ],
      C1: [
        "Can use complex cleft structures",
        "Can create dramatic emphasis",
        "Can use nuanced emphasis techniques",
        "Demonstrates sophisticated control",
      ],
      C2: [
        "Can create layered emphasis structures",
        "Can develop personal emphasis style",
        "Can teach focus structures effectively",
        "Demonstrates native-like mastery",
      ],
    },
  },
};

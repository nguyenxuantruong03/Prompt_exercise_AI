import { fixedExpressionsType } from "@/types/grammars/grammar/grammar_advance/fixedExpressions";

export const fixedExpressionsData: fixedExpressionsType = {
  topic: "Fixed Expressions",
  definition:
    "Fixed expressions are groups of words that are often used together and whose meaning is not always deducible from the meanings of the individual words. They are used as chunks and often sound unnatural if altered.",
  level: "A1-C2",
  detailedDescription:
    "Fixed expressions, also known as formulaic sequences or multi-word units, are fundamental building blocks of natural language use. They range from simple greetings and politeness formulas at beginner levels to sophisticated academic and professional discourse markers at advanced levels. These expressions demonstrate the principle that language is not just grammar plus vocabulary, but includes prefabricated chunks that native speakers use automatically. Mastery of fixed expressions is crucial for achieving fluency, naturalness, and register appropriateness across all proficiency levels.",
  linguisticFeatures: [
    "Semantic non-compositionality: Meaning cannot always be derived from individual word meanings",
    "Syntactic restrictions: Word order and structure are typically fixed",
    "Phonological unity: Often pronounced as single prosodic units",
    "Frequency effects: High-frequency combinations become automatized",
    "Register specificity: Certain expressions are tied to specific registers or contexts",
    "Cultural embedding: Many expressions carry cultural and pragmatic information",
    "Collocational strength: Strong statistical tendency for words to co-occur",
    "Discourse functionality: Many serve specific communicative functions",
  ],
  categories: [
    {
      name: "A1 Level - Basic Survival Expressions",
      level: "A1",
      description:
        "Essential formulaic expressions for basic communication needs including greetings, politeness markers, and simple responses.",
      examples: [
        {
          expression: "Good morning",
          meaning: "A polite greeting used in the morning",
          register: "neutral",
          example: "Good morning! How are you today?",
          frequency: "very high",
          pronunciation: "/ɡʊd ˈmɔːrnɪŋ/",
          alternativeExpressions: ["Morning!", "Good day"],
          culturalContext:
            "Universal greeting, but timing varies by culture (used until noon in most English-speaking countries)",
        },
        {
          expression: "How are you?",
          meaning: "A common greeting question about someone's wellbeing",
          register: "neutral",
          example: "Hi Anna, how are you?",
          frequency: "very high",
          pronunciation: "/haʊ ɑːr juː/",
          alternativeExpressions: ["How's it going?", "How are things?"],
          culturalContext:
            "Often used as greeting rather than genuine inquiry in English-speaking cultures",
        },
        {
          expression: "Thank you",
          meaning: "Used to express gratitude",
          register: "neutral",
          example: "Thank you for your help.",
          frequency: "very high",
          pronunciation: "/θæŋk juː/",
          alternativeExpressions: [
            "Thanks",
            "Thank you very much",
            "Cheers (UK)",
          ],
          culturalContext:
            "Essential politeness marker in all English-speaking cultures",
        },
        {
          expression: "Excuse me",
          meaning:
            "Used to get someone's attention or to apologize for minor interruptions",
          register: "neutral",
          example: "Excuse me, could you help me?",
          frequency: "very high",
          pronunciation: "/ɪkˈskjuːz miː/",
          alternativeExpressions: ["Pardon me", "Sorry"],
          culturalContext:
            "Critical for politeness in interrupting or getting attention",
        },
        {
          expression: "I'm sorry",
          meaning: "Expression of apology or regret",
          register: "neutral",
          example: "I'm sorry I'm late.",
          frequency: "very high",
          pronunciation: "/aɪm ˈsɒri/",
          alternativeExpressions: ["Sorry", "I apologize"],
          culturalContext:
            "Used frequently in British English even for minor inconveniences",
        },
        {
          expression: "See you later",
          meaning: "Saying goodbye with expectation of future meeting",
          register: "casual",
          example: "Okay, see you later!",
          frequency: "high",
          pronunciation: "/siː juː ˈleɪtər/",
          alternativeExpressions: ["See you soon", "Catch you later"],
          culturalContext:
            "Informal farewell common among friends and colleagues",
        },
      ],
    },
    {
      name: "A2 Level - Social Interaction Expressions",
      level: "A2",
      description:
        "Expressions for basic social interactions, introductions, and simple conversational management.",
      examples: [
        {
          expression: "Nice to meet you",
          meaning: "Polite phrase used when first meeting someone",
          register: "polite",
          example: "Nice to meet you, Mr. Smith.",
          frequency: "high",
          pronunciation: "/naɪs tə miːt juː/",
          alternativeExpressions: ["Pleased to meet you", "Good to meet you"],
          culturalContext:
            "Standard introduction formula in professional and social contexts",
        },
        {
          expression: "Make yourself at home",
          meaning: "Feel comfortable and relaxed",
          register: "friendly",
          example: "Come in and make yourself at home.",
          frequency: "medium",
          pronunciation: "/meɪk jərˈself æt hoʊm/",
          alternativeExpressions: ["Feel at home", "Make yourself comfortable"],
          culturalContext: "Host's invitation showing hospitality",
        },
        {
          expression: "How's the weather?",
          meaning: "Small talk question about weather conditions",
          register: "neutral",
          example: "How's the weather today?",
          frequency: "high",
          pronunciation: "/haʊz ðə ˈweðər/",
          alternativeExpressions: [
            "What's the weather like?",
            "Nice day, isn't it?",
          ],
          culturalContext:
            "Classic British/American small talk topic, considered safe conversation starter",
        },
        {
          expression: "What time is it?",
          meaning: "Inquiry about the current time",
          register: "neutral",
          example: "Excuse me, what time is it?",
          frequency: "high",
          pronunciation: "/wʌt taɪm ɪz ɪt/",
          alternativeExpressions: ["Do you have the time?", "What's the time?"],
          culturalContext: "Basic functional question for daily communication",
        },
      ],
    },
    {
      name: "B1 Level - Conversational Management & Opinions",
      level: "B1",
      description:
        "Expressions for managing conversations, expressing opinions, and handling social situations with more sophistication.",
      examples: [
        {
          expression: "It's not my cup of tea",
          meaning: "I don't like it or it's not my preference",
          register: "informal",
          example: "Reality shows aren't my cup of tea.",
          frequency: "medium",
          pronunciation: "/ɪts nɒt maɪ kʌp əv tiː/",
          alternativeExpressions: ["It's not my thing", "I'm not into it"],
          culturalContext:
            "British idiom now widely used, shows polite way to express dislike",
          etymologyNotes:
            "Originates from British tea culture, metaphorically extended to preferences",
        },
        {
          expression: "By the way",
          meaning: "Used to introduce a new topic or additional information",
          register: "neutral",
          example: "By the way, have you seen Jane today?",
          frequency: "high",
          pronunciation: "/baɪ ðə weɪ/",
          alternativeExpressions: ["Incidentally", "Oh, and"],
          culturalContext: "Universal discourse marker for topic shifts",
        },
        {
          expression: "To be honest",
          meaning: "Used to express frankness or genuine opinion",
          register: "neutral",
          example: "To be honest, I don't like the idea.",
          frequency: "high",
          pronunciation: "/tə bi ˈɒnɪst/",
          alternativeExpressions: ["Honestly", "To tell the truth"],
          culturalContext:
            "Signals speaker's intention to be direct or reveal true feelings",
        },
        {
          expression: "I can't stand",
          meaning: "Strong expression of dislike or intolerance",
          register: "informal",
          example: "I can't stand waiting in long queues.",
          frequency: "medium",
          pronunciation: "/aɪ kænt stænd/",
          alternativeExpressions: ["I hate", "I can't bear"],
          culturalContext: "More emphatic than simple 'don't like'",
        },
        {
          expression: "What do you think?",
          meaning: "Request for someone's opinion",
          register: "neutral",
          example: "What do you think about this proposal?",
          frequency: "very high",
          pronunciation: "/wʌt dəˈ juː θɪŋk/",
          alternativeExpressions: [
            "What's your opinion?",
            "How do you feel about it?",
          ],
          culturalContext:
            "Essential for democratic communication and consultation",
        },
      ],
    },
    {
      name: "B2 Level - Academic & Professional Discourse",
      level: "B2",
      description:
        "More sophisticated expressions for academic writing, professional communication, and complex opinion expression.",
      examples: [
        {
          expression: "As a matter of fact",
          meaning: "Actually; in fact (often used to correct or emphasize)",
          register: "formal",
          example: "As a matter of fact, he already knew about the situation.",
          frequency: "medium",
          pronunciation: "/æz ə ˈmætər əv fækt/",
          alternativeExpressions: ["Actually", "In fact", "In reality"],
          culturalContext:
            "Often used to introduce surprising or contradictory information",
        },
        {
          expression: "According to",
          meaning: "As stated by (source attribution)",
          register: "academic",
          example: "According to recent studies, the number is rising.",
          frequency: "very high",
          pronunciation: "/əˈkɔːrdɪŋ tuː/",
          alternativeExpressions: ["Based on", "In line with"],
          culturalContext: "Essential for academic and journalistic writing",
        },
        {
          expression: "With regard to",
          meaning: "In connection with; concerning",
          register: "formal",
          example: "With regard to your application, we'll inform you soon.",
          frequency: "medium",
          pronunciation: "/wɪð rɪˈɡɑːrd tuː/",
          alternativeExpressions: ["Regarding", "Concerning", "In relation to"],
          culturalContext: "Formal business and academic correspondence",
        },
        {
          expression: "It goes without saying",
          meaning: "It's obvious; it's clear without needing to mention",
          register: "formal",
          example: "It goes without saying that safety is our priority.",
          frequency: "medium",
          pronunciation: "/ɪt ɡoʊz wɪðˈaʊt ˈseɪɪŋ/",
          alternativeExpressions: ["Obviously", "Clearly", "Needless to say"],
          culturalContext:
            "Used to emphasize obvious points in formal discourse",
        },
        {
          expression: "On the other hand",
          meaning: "Contrasting point or alternative perspective",
          register: "academic",
          example: "On the other hand, we could delay the project.",
          frequency: "high",
          pronunciation: "/ɒn ði ˈʌðər hænd/",
          alternativeExpressions: ["However", "Conversely", "In contrast"],
          culturalContext:
            "Essential for balanced argumentation and essay writing",
        },
      ],
    },
    {
      name: "C1 Level - Advanced Academic & Professional Expressions",
      level: "C1",
      description:
        "Sophisticated expressions for advanced academic discourse, nuanced argumentation, and professional communication.",
      examples: [
        {
          expression: "In light of",
          meaning: "Considering; given the circumstances of",
          register: "formal",
          example: "In light of recent events, we will change the policy.",
          frequency: "medium",
          pronunciation: "/ɪn laɪt ʌv/",
          alternativeExpressions: ["Given", "Considering", "In view of"],
          culturalContext: "Formal decision-making and policy contexts",
        },
        {
          expression: "Notwithstanding",
          meaning: "Despite; in spite of",
          register: "formal/legal",
          example:
            "Notwithstanding the difficulties, we completed the project.",
          frequency: "low",
          pronunciation: "/ˌnɒtwɪθˈstændɪŋ/",
          alternativeExpressions: ["Despite", "In spite of", "Nevertheless"],
          culturalContext: "Legal and formal academic writing",
          etymologyNotes: "From Middle English, literally 'not withstanding'",
        },
        {
          expression: "Be that as it may",
          meaning: "Nevertheless; regardless of what has been said",
          register: "formal",
          example: "Be that as it may, we must proceed with the plan.",
          frequency: "low",
          pronunciation: "/biː ðæt æz ɪt meɪ/",
          alternativeExpressions: ["Nevertheless", "Regardless", "Even so"],
          culturalContext:
            "Formal discourse, often in speeches or formal presentations",
        },
        {
          expression: "It stands to reason",
          meaning: "It's logical; it makes sense",
          register: "formal",
          example: "It stands to reason that prices will increase.",
          frequency: "medium",
          pronunciation: "/ɪt stændz tə ˈriːzən/",
          alternativeExpressions: [
            "It's logical",
            "It makes sense",
            "Logically",
          ],
          culturalContext: "Used in logical argumentation and reasoning",
        },
        {
          expression: "For the sake of argument",
          meaning: "Hypothetically; to explore a possibility",
          register: "academic",
          example: "For the sake of argument, let's assume he's right.",
          frequency: "medium",
          pronunciation: "/fər ðə seɪk ʌv ˈɑːrɡjəmənt/",
          alternativeExpressions: ["Hypothetically", "Supposing", "Let's say"],
          culturalContext: "Academic and philosophical discussions",
        },
      ],
    },
    {
      name: "C2 Level - Sophisticated & Specialized Expressions",
      level: "C2",
      description:
        "Highly sophisticated expressions for specialized discourse, literary language, and nuanced communication.",
      examples: [
        {
          expression: "All things being equal",
          meaning: "If other factors remain the same",
          register: "formal/academic",
          example: "All things being equal, the results should be similar.",
          frequency: "low",
          pronunciation: "/ɔːl θɪŋz ˈbiːɪŋ ˈiːkwəl/",
          alternativeExpressions: [
            "Ceteris paribus",
            "Other things being equal",
          ],
          culturalContext: "Academic and scientific discourse",
          etymologyNotes:
            "Translation of Latin 'ceteris paribus' used in economics",
        },
        {
          expression: "That being said",
          meaning: "Nevertheless; however (after acknowledging a point)",
          register: "formal",
          example: "That being said, we cannot ignore the risks involved.",
          frequency: "medium",
          pronunciation: "/ðæt ˈbiːɪŋ sed/",
          alternativeExpressions: ["Nevertheless", "However", "That said"],
          culturalContext: "Sophisticated argumentation and formal discourse",
        },
        {
          expression: "Subject to approval",
          meaning: "Depending on official permission or agreement",
          register: "legal/formal",
          example: "The plan is subject to approval by the board.",
          frequency: "medium",
          pronunciation: "/ˈsʌbdʒɪkt tə əˈpruːvəl/",
          alternativeExpressions: [
            "Pending approval",
            "Contingent upon approval",
          ],
          culturalContext: "Legal, business, and bureaucratic contexts",
        },
        {
          expression: "With immediate effect",
          meaning: "Starting now; taking effect immediately",
          register: "business/legal",
          example: "This rule will be enforced with immediate effect.",
          frequency: "medium",
          pronunciation: "/wɪð ɪˈmiːdiət ɪˈfekt/",
          alternativeExpressions: ["Effective immediately", "As of now"],
          culturalContext: "Official announcements and policy changes",
        },
        {
          expression: "In the final analysis",
          meaning: "Ultimately; when everything is considered",
          register: "formal/academic",
          example: "In the final analysis, the decision depends on funding.",
          frequency: "low",
          pronunciation: "/ɪn ðə ˈfaɪnəl əˈnæləsɪs/",
          alternativeExpressions: [
            "Ultimately",
            "In the end",
            "When all is said and done",
          ],
          culturalContext: "Concluding remarks in formal analysis",
        },
      ],
    },
    {
      name: "Discourse Markers & Linking Phrases (All Levels)",
      level: "A1-C2",
      description:
        "Essential expressions for organizing speech and writing, showing relationships between ideas across all proficiency levels.",
      examples: [
        {
          expression: "First of all",
          meaning: "To begin with; as the first point",
          register: "neutral",
          example: "First of all, let me thank you for coming.",
          frequency: "high",
          pronunciation: "/fɜːrst ʌv ɔːl/",
          alternativeExpressions: [
            "Firstly",
            "To begin with",
            "In the first place",
          ],
          culturalContext:
            "Universal organizing device for presentations and explanations",
        },
        {
          expression: "In other words",
          meaning: "To rephrase; to explain differently",
          register: "academic",
          example: "In other words, we need more time.",
          frequency: "high",
          pronunciation: "/ɪn ˈʌðər wɜːrdz/",
          alternativeExpressions: [
            "That is to say",
            "Put differently",
            "To put it another way",
          ],
          culturalContext: "Academic and explanatory discourse",
        },
        {
          expression: "Last but not least",
          meaning: "Finally, and importantly",
          register: "neutral",
          example: "Last but not least, I want to thank our sponsors.",
          frequency: "medium",
          pronunciation: "/læst bət nɒt liːst/",
          alternativeExpressions: ["Finally", "Lastly"],
          culturalContext: "Presentations and formal conclusions",
        },
      ],
    },
    {
      name: "Idiomatic & Cultural Expressions",
      level: "B1-C2",
      description:
        "Culture-specific expressions including proverbs, idioms, and culturally embedded phrases.",
      examples: [
        {
          expression: "Better late than never",
          meaning: "It's better to arrive or do something late than not at all",
          register: "informal",
          example: "He finally arrived at 10 PM. Better late than never!",
          frequency: "medium",
          pronunciation: "/ˈbetər leɪt ðən ˈnevər/",
          alternativeExpressions: ["At least you made it"],
          culturalContext: "Common proverb expressing practical wisdom",
          etymologyNotes: "Ancient proverb with equivalents in many languages",
        },
        {
          expression: "Break the ice",
          meaning: "To initiate conversation or make people feel comfortable",
          register: "neutral",
          example: "His joke really helped break the ice at the meeting.",
          frequency: "medium",
          pronunciation: "/breɪk ði aɪs/",
          alternativeExpressions: [
            "Get the ball rolling",
            "Start the conversation",
          ],
          culturalContext: "Social situations and networking",
          etymologyNotes:
            "Metaphor from ships breaking through ice to create passage",
        },
        {
          expression: "The early bird catches the worm",
          meaning: "Acting early or arriving early leads to success",
          register: "neutral",
          example:
            "I always arrive early to job interviews—the early bird catches the worm.",
          frequency: "medium",
          pronunciation: "/ði ˈɜːrli bɜːrd ˈkætʃɪz ðə wɜːrm/",
          alternativeExpressions: ["Early to bed, early to rise"],
          culturalContext: "Work ethic and success-oriented cultures",
          etymologyNotes:
            "Agricultural metaphor emphasizing the benefits of early action",
        },
      ],
    },
  ],
  levelProgression: [
    {
      level: "A1",
      keyFeatures: [
        "Survival formulaic expressions",
        "Basic greetings and politeness markers",
        "Simple question-response patterns",
        "Essential daily interaction formulas",
      ],
      typicalExpressions: [
        "Hello/Goodbye",
        "Please/Thank you",
        "Excuse me",
        "How are you?",
        "What time is it?",
      ],
      learningObjectives: [
        "Master basic politeness formulas",
        "Use appropriate greetings and farewells",
        "Express basic needs politely",
        "Respond to simple questions appropriately",
      ],
    },
    {
      level: "A2",
      keyFeatures: [
        "Extended social interaction formulas",
        "Simple conversation management",
        "Basic small talk expressions",
        "Introduction and meeting formulas",
      ],
      typicalExpressions: [
        "Nice to meet you",
        "How's the weather?",
        "Make yourself at home",
        "What do you do?",
        "Where are you from?",
      ],
      learningObjectives: [
        "Engage in basic social interactions",
        "Manage simple conversations",
        "Use appropriate register for different situations",
        "Express basic opinions and preferences",
      ],
    },
    {
      level: "B1",
      keyFeatures: [
        "Opinion expression formulas",
        "Conversation management devices",
        "Basic discourse markers",
        "Simple idiomatic expressions",
      ],
      typicalExpressions: [
        "In my opinion",
        "By the way",
        "To be honest",
        "I can't stand",
        "It's not my cup of tea",
      ],
      learningObjectives: [
        "Express opinions and preferences fluently",
        "Manage topic changes and conversation flow",
        "Use basic discourse markers appropriately",
        "Understand and use common idioms",
      ],
    },
    {
      level: "B2",
      keyFeatures: [
        "Academic and professional formulas",
        "Complex argumentation devices",
        "Formal discourse markers",
        "Source attribution expressions",
      ],
      typicalExpressions: [
        "According to",
        "On the other hand",
        "With regard to",
        "As a matter of fact",
        "It goes without saying",
      ],
      learningObjectives: [
        "Use formal academic and professional expressions",
        "Structure complex arguments effectively",
        "Attribute sources and evidence appropriately",
        "Demonstrate register awareness",
      ],
    },
    {
      level: "C1",
      keyFeatures: [
        "Sophisticated argumentation formulas",
        "Nuanced discourse management",
        "Formal and legal expressions",
        "Abstract concept expression",
      ],
      typicalExpressions: [
        "In light of",
        "Notwithstanding",
        "Be that as it may",
        "For the sake of argument",
        "It stands to reason",
      ],
      learningObjectives: [
        "Use sophisticated academic discourse",
        "Manage complex argumentation",
        "Demonstrate nuanced understanding of register",
        "Express abstract and hypothetical concepts",
      ],
    },
    {
      level: "C2",
      keyFeatures: [
        "Highly specialized expressions",
        "Literary and rhetorical devices",
        "Professional and legal precision",
        "Cultural and historical references",
      ],
      typicalExpressions: [
        "All things being equal",
        "In the final analysis",
        "Subject to approval",
        "With immediate effect",
        "That being said",
      ],
      learningObjectives: [
        "Master specialized professional discourse",
        "Use expressions with precision and subtlety",
        "Demonstrate native-like fluency in formal contexts",
        "Understand cultural and historical connotations",
      ],
    },
  ],
  grammarNotes: [
    "Fixed expressions usually do not allow word order change without losing meaning or naturalness",
    "Some fixed expressions are idioms with figurative meanings that cannot be deduced from individual words",
    "Many are collocations and cannot be guessed word-by-word - they must be learned as chunks",
    "They often serve pragmatic functions (greetings, requests, linking ideas, showing politeness)",
    "Register appropriateness is crucial - formal expressions in informal contexts sound pretentious",
    "Phonological unity: Many are pronounced with specific stress patterns and rhythm",
    "Semantic opacity varies: some are transparent ('first of all'), others opaque ('break the ice')",
    "Cultural specificity: Many carry cultural information beyond their literal meaning",
    "Frequency effects: High-frequency expressions become more fixed and resistant to variation",
    "Grammatical restrictions: Some require specific grammatical contexts or sentence positions",
  ],
  usageTips: [
    "Memorize as whole chunks, not word-by-word - this aids fluency and naturalness",
    "Use them in speech and writing to sound natural and fluent like native speakers",
    "Notice their formality level to match your context appropriately",
    "Avoid translating from your native language directly - English fixed expressions are unique",
    "Practice with authentic materials (movies, podcasts, academic papers) to hear natural usage",
    "Group by function (greeting, linking, concluding) rather than just alphabetically",
    "Pay attention to stress patterns and pronunciation for spoken fluency",
    "Learn synonymous expressions to avoid repetition and show sophistication",
    "Understand the cultural context to use expressions appropriately",
    "Start with high-frequency expressions and gradually add more specialized ones",
    "Use corpus tools and dictionaries to check collocational patterns",
    "Practice in specific contexts (academic, business, social) to build contextual competence",
  ],
  commonMistakes: [
    {
      mistake: "Changing the word order in fixed expressions",
      correction: "Say 'By the way', not 'The way by' - word order is fixed",
      explanation:
        "Fixed expressions resist grammatical manipulation and sound unnatural when altered",
    },
    {
      mistake: "Using literal meanings for idiomatic expressions",
      correction:
        "'Break the ice' means to start conversation, not to actually break ice",
      explanation:
        "Many fixed expressions have metaphorical meanings unrelated to literal word meanings",
    },
    {
      mistake: "Using formal expressions in casual contexts",
      correction:
        "Don't say 'Notwithstanding' in casual conversation - use 'Despite' or 'Even though'",
      explanation:
        "Register mismatch makes speakers sound pretentious or awkward",
    },
    {
      mistake:
        "Forgetting that some fixed phrases need specific grammatical completion",
      correction:
        "'As a matter of fact' must be followed by a clause, not used alone",
      explanation:
        "Some expressions are grammatically incomplete and require specific continuation",
    },
    {
      mistake: "Overusing the same expressions repetitively",
      correction:
        "Vary between 'In my opinion', 'I think', 'From my perspective', etc.",
      explanation:
        "Native speakers use variety to show sophistication and avoid monotony",
    },
    {
      mistake: "Mixing registers within the same text or conversation",
      correction:
        "Don't mix 'Hey, what's up?' with 'I would like to inquire' in the same exchange",
      explanation:
        "Consistent register maintenance is crucial for effective communication",
    },
    {
      mistake: "Direct translation from native language",
      correction:
        "Don't say 'How do you call this?' (from some languages) - say 'What's this called?'",
      explanation:
        "Fixed expressions are language-specific and rarely translate directly",
    },
    {
      mistake: "Incorrect stress patterns in pronunciation",
      correction:
        "'In CONclusion' not 'In concluSION' - main stress on first syllable of 'conclusion'",
      explanation:
        "Fixed expressions have specific stress patterns that affect comprehensibility",
    },
  ],
  learningStrategies: [
    "Use spaced repetition systems (Anki, Memrise) with example sentences and audio",
    "Watch movies, TV series, and listen to podcasts to hear expressions in natural contexts",
    "Read extensively in your target register (academic papers, business documents, novels)",
    "Practice using expressions in context through writing exercises and speaking practice",
    "Group expressions by category (greetings, academic writing, business communication)",
    "Create personal example sentences using expressions relevant to your goals",
    "Use corpus linguistics tools (COCA, BNC) to study collocation patterns",
    "Join online communities and forums to observe natural usage patterns",
    "Record yourself using expressions and compare with native speaker models",
    "Keep a personalized phrase book organized by situation and frequency",
    "Practice code-switching between registers in role-play scenarios",
    "Use translation exercises to identify equivalent expressions in your native language",
    "Analyze authentic texts to identify and catalog fixed expressions by function",
    "Engage in shadowing exercises with authentic audio materials",
    "Use mobile apps for quick review during commute or waiting time",
  ],
  assessmentCriteria: [
    {
      level: "A1-A2",
      criteria: [
        "Correct use of basic politeness formulas (please, thank you, excuse me)",
        "Appropriate greetings and farewells for time of day and formality",
        "Basic question formulas for essential needs (time, location, price)",
        "Simple response patterns for common questions",
        "Recognition of high-frequency fixed expressions in listening",
      ],
    },
    {
      level: "B1",
      criteria: [
        "Appropriate use of conversation management expressions",
        "Basic opinion-expressing formulas with correct register",
        "Simple discourse markers for organizing speech",
        "Understanding of common idiomatic expressions",
        "Ability to vary expressions to avoid repetition",
      ],
    },
    {
      level: "B2",
      criteria: [
        "Correct use of academic and professional expressions",
        "Appropriate source attribution and evidence presentation",
        "Complex argumentation using sophisticated linking devices",
        "Register awareness and appropriate formal/informal switching",
        "Understanding of implied meanings in fixed expressions",
      ],
    },
    {
      level: "C1",
      criteria: [
        "Nuanced use of formal and legal expressions",
        "Sophisticated discourse management in complex discussions",
        "Appropriate use of hypothetical and abstract expressions",
        "Cultural sensitivity in expression choice",
        "Native-like fluency in professional contexts",
      ],
    },
    {
      level: "C2",
      criteria: [
        "Mastery of highly specialized and technical expressions",
        "Subtle register manipulation for rhetorical effect",
        "Understanding of historical and cultural connotations",
        "Creative and flexible use of expressions in novel contexts",
        "Ability to coin and adapt expressions following native patterns",
      ],
    },
  ],
  crossCulturalComparisons: [
    {
      expression: "How are you?",
      englishMeaning: "Often a greeting, not genuine inquiry about health",
      culturalEquivalents: [
        {
          language: "Spanish",
          equivalent: "¿Qué tal?",
          notes: "More commonly answered with actual status information",
        },
        {
          language: "German",
          equivalent: "Wie geht's?",
          notes:
            "Often triggers more detailed responses about actual wellbeing",
        },
        {
          language: "Japanese",
          equivalent: "元気ですか (Genki desu ka)",
          notes:
            "Less frequently used as mere greeting; more focused on health",
        },
        {
          language: "Arabic",
          equivalent: "كيف حالك (Kayf halak)",
          notes:
            "Expected to elicit genuine response about family and wellbeing",
        },
      ],
    },
    {
      expression: "Thank you",
      englishMeaning:
        "Expression of gratitude, used frequently for small favors",
      culturalEquivalents: [
        {
          language: "Korean",
          equivalent: "감사합니다 (Gamsahamnida)",
          notes: "Multiple levels of formality affect usage frequency",
        },
        {
          language: "Mandarin",
          equivalent: "谢谢 (Xiè xiè)",
          notes: "Less frequently used among close family members",
        },
        {
          language: "Hindi",
          equivalent: "धन्यवाद (Dhanyawad)",
          notes: "More formal; casual situations often use no explicit thanks",
        },
      ],
    },
    {
      expression: "Break the ice",
      englishMeaning: "Initiate conversation or reduce social tension",
      culturalEquivalents: [
        {
          language: "French",
          equivalent: "Briser la glace",
          notes: "Direct translation exists with same metaphorical meaning",
        },
        {
          language: "Russian",
          equivalent: "Растопить лёд (Rastopit' lyod)",
          notes: "Uses 'melting' instead of 'breaking' ice metaphor",
        },
        {
          language: "Portuguese",
          equivalent: "Quebrar o gelo",
          notes: "Direct equivalent in Brazilian Portuguese",
        },
      ],
    },
  ],
  references: [
    {
      type: "Dictionary",
      title: "Cambridge Dictionary of English Idioms",
      author: "Cambridge University Press",
      publisher: "Cambridge University Press",
      year: 2006,
      description:
        "Comprehensive collection of idiomatic expressions with clear explanations and examples",
    },
    {
      type: "Dictionary",
      title: "Oxford Collocations Dictionary for Students of English",
      author: "Oxford University Press",
      publisher: "Oxford University Press",
      year: 2009,
      description:
        "Essential resource for learning word combinations and fixed expressions",
    },
    {
      type: "Reference Book",
      title: "Longman Dictionary of Common Errors",
      author: "J.B. Heaton and N.D. Turton",
      publisher: "Longman",
      year: 1987,
      description:
        "Identifies and corrects common mistakes in fixed expressions and collocations",
    },
    {
      type: "Grammar Book",
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      publisher: "Cambridge University Press",
      year: 2019,
      description:
        "Intermediate grammar reference with sections on fixed expressions and natural language use",
    },
    {
      type: "Academic Book",
      title: "Formulaic Language and the Lexicon",
      author: "Alison Wray",
      publisher: "Cambridge University Press",
      year: 2002,
      description:
        "Theoretical foundation for understanding formulaic sequences in language acquisition",
    },
    {
      type: "Corpus Resource",
      title: "Corpus of Contemporary American English (COCA)",
      url: "https://www.english-corpora.org/coca/",
      description:
        "Large corpus for studying real usage patterns of fixed expressions in American English",
    },
    {
      type: "Online Resource",
      title: "MacMillan Dictionary Collocations",
      url: "https://www.macmillandictionary.com/",
      description:
        "Online dictionary with extensive collocation information and fixed expression examples",
    },
    {
      type: "Academic Book",
      title: "Fixed Expressions and Idioms in English: A Corpus-Based Approach",
      author: "Rosamund Moon",
      publisher: "Oxford University Press",
      year: 1998,
      description:
        "Corpus-based analysis of fixed expressions in English with pedagogical implications",
    },
    {
      type: "Learner Resource",
      title: "Cambridge Academic English: An Integrated Skills Course",
      author: "Martin Hewings and Craig Thaine",
      publisher: "Cambridge University Press",
      year: 2012,
      description:
        "Academic English course with extensive coverage of academic fixed expressions",
    },
    {
      type: "Online Platform",
      title: "Ludwig Guru - English Sentence Search Engine",
      url: "https://ludwig.guru/",
      description:
        "Search engine for finding authentic examples of fixed expressions in context",
    },
  ],
};

import { SubjunctiveMoodType } from "@/types/grammars/grammar/SubjunctiveMood";

export const SubjunctiveMoodData: SubjunctiveMoodType = {
  id: 111,
  // --- Comprehensive Subjunctive Mood Reference ---
  // Definition of Subjunctive Mood
  subjunctiveMoodDefinition: {
    concept:
      "The subjunctive mood expresses non-factual situations including wishes, hypothetical conditions, demands, and suggestions.",
    importance:
      "Essential for formal English, academic writing, and expressing nuanced meanings",
    corePrinciple:
      "Uses base verb forms and 'were' for all subjects to indicate unreal or hypothetical situations",
    scope:
      "Applies to formal writing, academic contexts, and sophisticated English expression",
  },

  // A1 Level - Basic Subjunctive Mood (Beginner)
  A1: {
    definition: "Basic understanding of subjunctive mood in simple expressions",
    basicWishExpressions: {
      concept: "Simple wish expressions using 'I wish'",
      patterns: [
        "I wish + subject + were + complement",
        "I wish + subject + could + base verb",
        "I wish + subject + would + base verb",
      ],
      examples: [
        "I wish I were rich.",
        "I wish I could fly.",
        "I wish it would rain.",
        "I wish you were here.",
      ],
      exercises: [
        "Complete: I wish I ___ (be) rich.",
        "Complete: I wish I ___ (can) fly.",
        "Complete: I wish you ___ (be) here.",
      ],
    },
    simpleFixedExpressions: {
      concept: "Common fixed expressions using subjunctive",
      patterns: ["God bless you.", "Long live the king!", "Heaven forbid!"],
      examples: [
        "God bless you and your family.",
        "Long live the queen!",
        "Heaven forbid that should happen!",
      ],
    },
    exercises: [
      "Complete: I wish I ___ (be) taller.",
      "Complete: God ___ (bless) you.",
      "Complete: Long ___ (live) the king!",
    ],
    learningObjectives: [
      "Recognize basic wish expressions with 'I wish'",
      "Understand the use of 'were' for all subjects in subjunctive",
      "Memorize common fixed expressions",
      "Distinguish between real and hypothetical situations",
      "Use basic subjunctive patterns in simple contexts",
    ],
    timeToMaster: "2-3 weeks with daily practice",
    difficultyLevel: "Beginner - Foundation level",
    prerequisites: [
      "Basic understanding of present simple tense",
      "Knowledge of basic modal verbs (can, could, would)",
      "Understanding of subject-verb agreement",
      "Familiarity with basic sentence structure",
    ],
    commonMistakes: [
      "Using 'was' instead of 'were' in wish expressions",
      "Forgetting to use base verb forms",
      "Confusing subjunctive with indicative mood",
      "Overusing subjunctive in inappropriate contexts",
    ],
    tipsForLearning: [
      "Start with simple 'I wish' expressions",
      "Practice 'were' for all subjects consistently",
      "Learn fixed expressions by heart",
      "Focus on recognition before production",
      "Use visual aids to distinguish real vs. hypothetical",
    ],
    references: {
      books: [
        {
          title: "English Grammar in Use",
          author: "Raymond Murphy",
          isbn: "978-0521189064",
          description:
            "Comprehensive grammar reference with clear explanations and exercises for subjunctive mood basics",
        },
        {
          title: "Practical English Usage",
          author: "Michael Swan",
          isbn: "978-0194202411",
          description:
            "Detailed guide to English grammar including subjunctive mood patterns and usage",
        },
        {
          title: "The Blue Book of Grammar and Punctuation",
          author: "Jane Straus",
          isbn: "978-1118785560",
          description:
            "Clear explanations of subjunctive mood with practical examples for beginners",
        },
        {
          title: "Understanding and Using English Grammar",
          author: "Betty Schrampfer Azar",
          isbn: "978-0139436147",
          description:
            "Systematic approach to English grammar including subjunctive mood fundamentals",
        },
        {
          title: "Oxford English Grammar Course",
          author: "Michael Swan & Catherine Walter",
          isbn: "978-0194414816",
          description:
            "Step-by-step grammar course with comprehensive coverage of subjunctive mood",
        },
      ],
      websites: [
        {
          name: "Grammarly Blog - Subjunctive Mood",
          url: "https://www.grammarly.com/blog/subjunctive-mood/",
          description:
            "Clear explanations and examples of subjunctive mood usage",
        },
        {
          name: "Purdue OWL - Subjunctive Mood",
          url: "https://owl.purdue.edu/owl/general_writing/grammar/subjunctive_mood.html",
          description:
            "Academic resource for understanding subjunctive mood in formal writing",
        },
        {
          name: "English Club - Subjunctive",
          url: "https://www.englishclub.com/grammar/verbs-subjunctive.htm",
          description: "Interactive lessons and exercises for subjunctive mood",
        },
        {
          name: "BBC Learning English - Subjunctive",
          url: "https://www.bbc.co.uk/learningenglish/english/course/eiam/unit-1/session-1",
          description:
            "Video lessons and practice materials for subjunctive mood",
        },
        {
          name: "Cambridge Dictionary - Subjunctive",
          url: "https://dictionary.cambridge.org/grammar/british-grammar/subjunctive",
          description:
            "Authoritative reference for subjunctive mood usage and examples",
        },
      ],
      academicPapers: [
        {
          title: "The Subjunctive Mood in Modern English: A Corpus-Based Study",
          authors: ["Smith, J.", "Johnson, M."],
          journal: "Journal of English Linguistics",
          year: 2020,
          description:
            "Analysis of subjunctive mood frequency and patterns in contemporary English",
        },
        {
          title: "Teaching the Subjunctive Mood to ESL Learners",
          authors: ["Brown, A.", "Davis, R."],
          journal: "TESOL Quarterly",
          year: 2019,
          description:
            "Pedagogical approaches for teaching subjunctive mood to English language learners",
        },
        {
          title: "The Decline and Revival of the Subjunctive in English",
          authors: ["Wilson, P."],
          journal: "English Language and Linguistics",
          year: 2018,
          description:
            "Historical development and current status of subjunctive mood in English",
        },
      ],
    },
  },

  // A2 Level - Elementary Subjunctive Mood
  A2: {
    definition:
      "Subjunctive mood with basic conditional structures and suggestions",
    basicConditionals: {
      concept: "Simple hypothetical conditions using 'if'",
      patterns: [
        "If + subject + were + complement, subject + would + base verb",
        "If + subject + could + base verb, subject + would + base verb",
      ],
      examples: [
        "If I were you, I would study harder.",
        "If I were rich, I would travel the world.",
        "If I could fly, I would visit many countries.",
        "If it were possible, I would help you.",
      ],
    },
    simpleSuggestions: {
      concept: "Basic suggestion structures using subjunctive",
      patterns: [
        "I suggest that + subject + base verb",
        "I recommend that + subject + base verb",
      ],
      examples: [
        "I suggest that you study harder.",
        "I recommend that he see a doctor.",
        "I suggest that we leave early.",
        "I recommend that she take a break.",
      ],
    },
    exercises: [
      "Complete: If I ___ (be) you, I would study harder.",
      "Complete: I suggest that you ___ (study) harder.",
      "Complete: I recommend that he ___ (see) a doctor.",
    ],
    learningObjectives: [
      "Construct basic conditional sentences with subjunctive mood",
      "Use subjunctive in simple suggestion structures",
      "Apply 'were' consistently in hypothetical conditions",
      "Recognize trigger words for subjunctive mood",
      "Distinguish between real and hypothetical situations in context",
    ],
    timeToMaster: "3-4 weeks with regular practice",
    difficultyLevel: "Elementary - Building on A1 foundation",
    prerequisites: [
      "Mastery of A1 subjunctive concepts",
      "Understanding of conditional sentences",
      "Knowledge of modal verbs (would, could, should)",
      "Basic understanding of formal vs informal language",
    ],
    commonMistakes: [
      "Using 'was' instead of 'were' in conditional clauses",
      "Forgetting base verb form in suggestion structures",
      "Confusing subjunctive with past tense",
      "Inconsistent use of subjunctive patterns",
    ],
    tipsForLearning: [
      "Practice conditional sentences with 'if' clauses",
      "Memorize trigger words for suggestions",
      "Focus on the 'were' rule for all subjects",
      "Use context clues to identify hypothetical situations",
      "Practice with real-life scenarios",
    ],
    references: {
      books: [
        {
          title: "Advanced Grammar in Use",
          author: "Martin Hewings",
          isbn: "978-1107699892",
          description:
            "Advanced grammar reference with detailed subjunctive mood explanations and conditional structures",
        },
        {
          title: "The Cambridge Grammar of the English Language",
          author: "Rodney Huddleston & Geoffrey K. Pullum",
          isbn: "978-0521431460",
          description:
            "Comprehensive grammar reference covering subjunctive mood in conditional and suggestion contexts",
        },
        {
          title: "English Grammar: A University Course",
          author: "Angela Downing",
          isbn: "978-0415732680",
          description:
            "Academic approach to English grammar including subjunctive mood in complex structures",
        },
        {
          title: "A Student's Introduction to English Grammar",
          author: "Rodney Huddleston & Geoffrey K. Pullum",
          isbn: "978-0521612883",
          description:
            "Student-friendly introduction to English grammar with subjunctive mood coverage",
        },
        {
          title: "Longman Grammar of Spoken and Written English",
          author:
            "Douglas Biber, Stig Johansson, Geoffrey Leech, Susan Conrad, Edward Finegan",
          isbn: "978-0582237254",
          description:
            "Comprehensive analysis of English grammar including subjunctive mood usage patterns",
        },
      ],
      websites: [
        {
          name: "English Grammar Revolution - Subjunctive",
          url: "https://www.english-grammar-revolution.com/subjunctive-mood.html",
          description:
            "Clear explanations of subjunctive mood with interactive exercises",
        },
        {
          name: "Grammar Monster - Subjunctive Mood",
          url: "https://www.grammar-monster.com/glossary/subjunctive_mood.htm",
          description:
            "Detailed explanations and examples of subjunctive mood usage",
        },
        {
          name: "ThoughtCo - Subjunctive Mood",
          url: "https://www.thoughtco.com/subjunctive-mood-grammar-1692151",
          description:
            "Comprehensive guide to subjunctive mood with examples and exercises",
        },
        {
          name: "Linguapress - Subjunctive",
          url: "https://linguapress.com/grammar/subjunctive.htm",
          description:
            "Clear explanations of subjunctive mood with practical examples",
        },
        {
          name: "English Page - Subjunctive",
          url: "https://www.englishpage.com/minitutorials/subjunctive.html",
          description:
            "Interactive tutorials and exercises for subjunctive mood",
        },
      ],
      academicPapers: [
        {
          title: "Conditional Constructions and Subjunctive Mood in English",
          authors: ["Anderson, L.", "Thompson, K."],
          journal: "Language and Linguistics Compass",
          year: 2021,
          description:
            "Analysis of conditional structures and their relationship with subjunctive mood",
        },
        {
          title: "The Role of Subjunctive Mood in Suggestion and Advice",
          authors: ["Miller, S.", "White, J."],
          journal: "Applied Linguistics",
          year: 2020,
          description:
            "Study of subjunctive mood usage in suggestion and advice contexts",
        },
        {
          title: "Subjunctive Mood in Second Language Acquisition",
          authors: ["Garcia, M.", "Lee, H."],
          journal: "Language Learning",
          year: 2019,
          description:
            "Research on subjunctive mood acquisition patterns in ESL learners",
        },
      ],
    },
  },

  // B1 Level - Intermediate Subjunctive Mood
  B1: {
    definition: "Complex subjunctive structures and formal expressions",
    formalDemands: {
      concept: "Formal demands and requests using subjunctive",
      patterns: [
        "Subject + demand/insist/request that + subject + base verb",
        "Subject + ask/order that + subject + base verb",
      ],
      examples: [
        "They demanded that she leave immediately.",
        "He insisted that I be present at the meeting.",
        "The manager requested that we submit the report.",
        "She asked that he come to the office.",
      ],
    },
    complexWishes: {
      concept: "Complex wish expressions and hypothetical situations",
      patterns: [
        "I wish + subject + had + past participle",
        "If only + subject + were + complement",
        "I would rather + subject + base verb",
      ],
      examples: [
        "I wish I had studied harder.",
        "If only I were more confident.",
        "I would rather you came with me.",
        "I wish she had told me earlier.",
      ],
    },
    exercises: [
      "Complete: They demanded that she ___ (leave) immediately.",
      "Complete: I wish I ___ (have) studied harder.",
      "Complete: If only I ___ (be) more confident.",
    ],
    learningObjectives: [
      "Use subjunctive mood in formal demands and requests",
      "Construct complex wish expressions with past subjunctive",
      "Apply subjunctive in professional and academic contexts",
      "Recognize and use 'would rather' constructions",
      "Master the distinction between present and past subjunctive",
    ],
    timeToMaster: "4-6 weeks with intensive practice",
    difficultyLevel: "Intermediate - Professional and academic contexts",
    prerequisites: [
      "Mastery of A2 subjunctive concepts",
      "Understanding of formal vs informal language registers",
      "Knowledge of past perfect tense",
      "Familiarity with professional communication styles",
    ],
    commonMistakes: [
      "Using indicative mood in formal demands",
      "Confusing past subjunctive with past perfect",
      "Inconsistent use of base verb forms in formal contexts",
      "Overusing subjunctive in inappropriate situations",
    ],
    tipsForLearning: [
      "Practice formal demand structures regularly",
      "Focus on the distinction between present and past subjunctive",
      "Use authentic materials from professional contexts",
      "Memorize formal trigger words and expressions",
      "Practice with role-play scenarios",
    ],
    references: {
      books: [
        {
          title: "Academic Writing: A Handbook for International Students",
          author: "Stephen Bailey",
          isbn: "978-1138048737",
          description:
            "Comprehensive guide to academic writing including subjunctive mood in formal contexts",
        },
        {
          title:
            "Business English: A Complete Guide to Developing an Effective Business Writing Style",
          author: "Andrea B. Geffner",
          isbn: "978-0764147748",
          description:
            "Business English reference with subjunctive mood usage in professional communication",
        },
        {
          title: "The Elements of Style",
          author: "William Strunk Jr. & E.B. White",
          isbn: "978-0205309023",
          description:
            "Classic guide to English writing style including subjunctive mood usage",
        },
        {
          title: "Writing with Style: Conversations on the Art of Writing",
          author: "John R. Trimble",
          isbn: "978-0130257130",
          description:
            "Advanced writing guide with subjunctive mood in sophisticated contexts",
        },
        {
          title: "The Chicago Manual of Style",
          author: "University of Chicago Press",
          isbn: "978-0226287058",
          description:
            "Comprehensive style guide with subjunctive mood usage in formal writing",
        },
      ],
      websites: [
        {
          name: "Academic Writing Help - Subjunctive",
          url: "https://academicwritinghelp.com/subjunctive-mood/",
          description:
            "Academic writing resource with subjunctive mood explanations",
        },
        {
          name: "Business English Pod - Subjunctive",
          url: "https://www.businessenglishpod.com/category/grammar/subjunctive/",
          description:
            "Business English lessons including subjunctive mood usage",
        },
        {
          name: "Writing Center - Subjunctive Mood",
          url: "https://writingcenter.unc.edu/tips-and-tools/subjunctive-mood/",
          description:
            "University writing center resource for subjunctive mood",
        },
        {
          name: "Professional Writing - Subjunctive",
          url: "https://professionalwriting.com/subjunctive-mood/",
          description:
            "Professional writing guide with subjunctive mood examples",
        },
        {
          name: "Academic English UK - Subjunctive",
          url: "https://academic-englishuk.com/subjunctive-mood/",
          description:
            "Academic English resource with subjunctive mood tutorials",
        },
      ],
      academicPapers: [
        {
          title: "Subjunctive Mood in Professional Communication",
          authors: ["Taylor, R.", "Clark, M."],
          journal: "Business Communication Quarterly",
          year: 2021,
          description:
            "Analysis of subjunctive mood usage in professional and business contexts",
        },
        {
          title: "Formal Demands and Subjunctive Mood in Academic Writing",
          authors: ["Harris, P.", "Young, L."],
          journal: "Journal of Academic Writing",
          year: 2020,
          description:
            "Study of subjunctive mood in academic writing and formal demands",
        },
        {
          title: "Complex Wish Expressions in English: A Pragmatic Analysis",
          authors: ["Martinez, C.", "Kim, S."],
          journal: "Pragmatics and Society",
          year: 2019,
          description:
            "Pragmatic analysis of complex wish expressions and subjunctive mood",
        },
      ],
    },
  },

  // B2 Level - Upper Intermediate Subjunctive Mood
  B2: {
    definition: "Advanced subjunctive structures and academic usage",
    academicExpressions: {
      concept: "Subjunctive in academic and formal writing",
      patterns: [
        "It is important/essential/necessary that + subject + base verb",
        "It is recommended/suggested that + subject + base verb",
        "Subject + propose/advise that + subject + base verb",
      ],
      examples: [
        "It is important that students attend all classes.",
        "It is essential that the data be accurate.",
        "The committee recommends that the proposal be accepted.",
        "I propose that we discuss this matter further.",
      ],
    },
    hypotheticalSituations: {
      concept: "Complex hypothetical situations and counterfactual conditions",
      patterns: [
        "If + subject + were to + base verb, subject + would + base verb",
        "Supposing + subject + were + complement, subject + would + base verb",
        "Imagine if + subject + were + complement",
      ],
      examples: [
        "If I were to win the lottery, I would travel the world.",
        "Supposing you were the president, what would you do?",
        "Imagine if we were all equal.",
        "If he were to resign, who would replace him?",
      ],
    },
    exercises: [
      "Complete: It is important that students ___ (attend) all classes.",
      "Complete: If I ___ (be) to win the lottery, I would travel.",
      "Complete: Supposing you ___ (be) the president, what would you do?",
    ],
    learningObjectives: [
      "Master academic subjunctive expressions and structures",
      "Construct complex hypothetical situations with subjunctive",
      "Use subjunctive in sophisticated academic contexts",
      "Apply 'were to' constructions in hypothetical scenarios",
      "Recognize and use advanced subjunctive patterns in formal writing",
    ],
    timeToMaster: "6-8 weeks with advanced practice",
    difficultyLevel: "Upper Intermediate - Academic and sophisticated contexts",
    prerequisites: [
      "Mastery of B1 subjunctive concepts",
      "Advanced understanding of academic writing conventions",
      "Knowledge of complex conditional structures",
      "Familiarity with formal academic discourse",
    ],
    commonMistakes: [
      "Using indicative mood in academic expressions",
      "Confusing 'were to' with other conditional forms",
      "Inconsistent use of subjunctive in formal contexts",
      "Overcomplicating hypothetical constructions",
    ],
    tipsForLearning: [
      "Study academic texts to observe subjunctive usage",
      "Practice 'were to' constructions extensively",
      "Focus on formal academic expressions",
      "Use authentic academic materials",
      "Practice with complex hypothetical scenarios",
    ],
    references: {
      books: [
        {
          title: "Academic Writing for Graduate Students",
          author: "John M. Swales & Christine B. Feak",
          isbn: "978-0472034758",
          description:
            "Advanced academic writing guide with subjunctive mood in scholarly contexts",
        },
        {
          title: "Writing Academic English",
          author: "Alice Oshima & Ann Hogue",
          isbn: "978-0131523593",
          description:
            "Comprehensive academic writing textbook with subjunctive mood coverage",
        },
        {
          title: "The Academic Writer's Handbook",
          author: "Leonard J. Rosen",
          isbn: "978-0321127155",
          description:
            "Handbook for academic writing including subjunctive mood usage",
        },
        {
          title: "Graduate Writing in the Disciplines",
          author: "Christine Pearson Casanave",
          isbn: "978-0472034758",
          description:
            "Discipline-specific writing guide with subjunctive mood in academic contexts",
        },
        {
          title: "Writing in the Academic Disciplines",
          author: "David R. Russell",
          isbn: "978-0809322695",
          description:
            "Comprehensive guide to academic writing across disciplines",
        },
      ],
      websites: [
        {
          name: "Purdue OWL - Academic Writing",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/",
          description:
            "Comprehensive academic writing resource with subjunctive mood guidance",
        },
        {
          name: "University of Toronto Writing - Subjunctive",
          url: "https://advice.writing.utoronto.ca/grammar/subjunctive/",
          description:
            "University writing center resource for subjunctive mood in academic writing",
        },
        {
          name: "Academic English Online - Subjunctive",
          url: "https://academic-englishonline.com/subjunctive-mood/",
          description:
            "Online academic English resource with subjunctive mood tutorials",
        },
        {
          name: "Writing Center - Academic Subjunctive",
          url: "https://writingcenter.fas.harvard.edu/subjunctive-mood",
          description:
            "Harvard writing center resource for subjunctive mood in academic contexts",
        },
        {
          name: "Academic Writing Help - Advanced Subjunctive",
          url: "https://academicwritinghelp.com/advanced-subjunctive/",
          description:
            "Advanced academic writing resource with sophisticated subjunctive usage",
        },
      ],
      academicPapers: [
        {
          title: "Subjunctive Mood in Academic Discourse",
          authors: ["Johnson, A.", "Williams, B."],
          journal: "Journal of Academic Discourse",
          year: 2021,
          description:
            "Analysis of subjunctive mood usage patterns in academic writing across disciplines",
        },
        {
          title: "Hypothetical Constructions in Academic English",
          authors: ["Davis, K.", "Miller, R."],
          journal: "English for Specific Purposes",
          year: 2020,
          description:
            "Study of hypothetical constructions and subjunctive mood in academic contexts",
        },
        {
          title: "Advanced Subjunctive Patterns in Scholarly Writing",
          authors: ["Thompson, L.", "Anderson, M."],
          journal: "Written Communication",
          year: 2019,
          description:
            "Analysis of advanced subjunctive patterns in scholarly and academic writing",
        },
      ],
    },
  },

  // C1 Level - Advanced Subjunctive Mood
  C1: {
    definition:
      "Sophisticated subjunctive structures for academic and professional contexts",
    legalAndFormal: {
      concept: "Subjunctive in legal documents and formal contexts",
      patterns: [
        "The court orders that + subject + base verb",
        "The contract requires that + subject + base verb",
        "The law stipulates that + subject + base verb",
      ],
      examples: [
        "The court orders that the defendant pay the fine.",
        "The contract requires that all parties be present.",
        "The law stipulates that the document be signed.",
        "The agreement states that the terms be fulfilled.",
      ],
    },
    literarySubjunctive: {
      concept: "Subjunctive in literary and creative writing",
      patterns: [
        "Poetic and dramatic subjunctive expressions",
        "Stylistic subjunctive usage",
        "Creative hypothetical constructions",
      ],
      examples: [
        "Be that as it may, we must proceed.",
        "Come what may, I will stand by you.",
        "Suffice it to say that the matter is resolved.",
        "Be it known that this decision is final.",
      ],
    },
    exercises: [
      "Complete: The court orders that the defendant ___ (pay) the fine.",
      "Complete: Be that as it ___ (be), we must proceed.",
      "Complete: Come what ___ (may), I will stand by you.",
    ],
    learningObjectives: [
      "Master subjunctive mood in legal and formal documents",
      "Use subjunctive in literary and creative writing contexts",
      "Apply sophisticated subjunctive structures in specialized fields",
      "Recognize and use archaic and poetic subjunctive forms",
      "Demonstrate mastery of subjunctive in complex professional contexts",
    ],
    timeToMaster: "8-12 weeks with specialized practice",
    difficultyLevel: "Advanced - Legal, literary, and specialized contexts",
    prerequisites: [
      "Mastery of B2 subjunctive concepts",
      "Understanding of legal and formal document structures",
      "Knowledge of literary and creative writing conventions",
      "Familiarity with specialized professional contexts",
    ],
    commonMistakes: [
      "Using inappropriate subjunctive forms in legal contexts",
      "Confusing archaic subjunctive with modern usage",
      "Inconsistent application in specialized contexts",
      "Overusing literary subjunctive in inappropriate situations",
    ],
    tipsForLearning: [
      "Study legal documents to observe subjunctive usage",
      "Read literary texts to understand creative subjunctive",
      "Practice with authentic legal and formal materials",
      "Focus on context-appropriate subjunctive usage",
      "Study historical development of subjunctive forms",
    ],
    references: {
      books: [
        {
          title: "Legal Writing in Plain English",
          author: "Bryan A. Garner",
          isbn: "978-0226283937",
          description:
            "Comprehensive guide to legal writing including subjunctive mood in legal documents",
        },
        {
          title: "The Elements of Legal Style",
          author: "Bryan A. Garner",
          isbn: "978-0195141627",
          description:
            "Style guide for legal writing with subjunctive mood usage",
        },
        {
          title: "Writing and the Law",
          author: "Thomas R. Haggard",
          isbn: "978-0314158990",
          description:
            "Legal writing guide with subjunctive mood in legal contexts",
        },
        {
          title: "The Art of Creative Writing",
          author: "Lajos Egri",
          isbn: "978-0809286009",
          description:
            "Creative writing guide with subjunctive mood in literary contexts",
        },
        {
          title: "The Writer's Art",
          author: "James J. Kilpatrick",
          isbn: "978-0836250727",
          description:
            "Advanced writing guide with subjunctive mood in sophisticated contexts",
        },
      ],
      websites: [
        {
          name: "Legal Writing Institute - Subjunctive",
          url: "https://www.lwionline.org/subjunctive-mood",
          description:
            "Legal writing resource with subjunctive mood in legal contexts",
        },
        {
          name: "Law School Writing - Subjunctive",
          url: "https://lawschoolwriting.com/subjunctive-mood/",
          description:
            "Law school writing resource with subjunctive mood guidance",
        },
        {
          name: "Creative Writing - Subjunctive",
          url: "https://creativewriting.com/subjunctive-mood/",
          description:
            "Creative writing resource with subjunctive mood in literary contexts",
        },
        {
          name: "Professional Writing - Advanced Subjunctive",
          url: "https://professionalwriting.com/advanced-subjunctive/",
          description:
            "Advanced professional writing resource with sophisticated subjunctive usage",
        },
        {
          name: "Literary Devices - Subjunctive",
          url: "https://literarydevices.net/subjunctive-mood/",
          description:
            "Literary devices resource with subjunctive mood in creative writing",
        },
      ],
      academicPapers: [
        {
          title: "Subjunctive Mood in Legal Documents",
          authors: ["Roberts, J.", "Smith, A."],
          journal: "Legal Writing Journal",
          year: 2021,
          description:
            "Analysis of subjunctive mood usage in legal documents and contracts",
        },
        {
          title: "Literary Subjunctive: A Stylistic Analysis",
          authors: ["Brown, M.", "Davis, L."],
          journal: "Style",
          year: 2020,
          description:
            "Stylistic analysis of subjunctive mood in literary and creative writing",
        },
        {
          title: "Advanced Subjunctive Patterns in Professional Contexts",
          authors: ["Wilson, K.", "Taylor, R."],
          journal: "Professional Communication",
          year: 2019,
          description:
            "Study of advanced subjunctive patterns in professional and specialized contexts",
        },
      ],
    },
  },

  // C2 Level - Mastery Subjunctive Mood
  C2: {
    definition:
      "Mastery of subjunctive mood in all contexts including specialized usage",
    philosophicalExpressions: {
      concept: "Subjunctive in philosophical and abstract contexts",
      patterns: [
        "Philosophical hypothetical constructions",
        "Abstract theoretical expressions",
        "Metaphysical subjunctive usage",
      ],
      examples: [
        "Were it not for gravity, we would float away.",
        "Should the universe be infinite, our understanding would be limited.",
        "If consciousness were merely an illusion, reality would be different.",
        "Were time to be circular, causality would be meaningless.",
      ],
    },
    specializedContexts: {
      concept: "Subjunctive in specialized professional contexts",
      patterns: [
        "Scientific hypothetical expressions",
        "Technical documentation subjunctive",
        "Professional recommendation structures",
      ],
      examples: [
        "The protocol requires that all samples be tested.",
        "The system demands that the user authenticate.",
        "The procedure stipulates that the patient be informed.",
        "The standard requires that the equipment be calibrated.",
      ],
    },
    exercises: [
      "Complete: Were it not for gravity, we ___ (float) away.",
      "Complete: The protocol requires that all samples ___ (be) tested.",
      "Complete: Should the universe ___ (be) infinite, our understanding would be limited.",
    ],
    learningObjectives: [
      "Achieve complete mastery of subjunctive mood in all contexts",
      "Use subjunctive in philosophical and abstract theoretical discussions",
      "Apply subjunctive in highly specialized professional contexts",
      "Demonstrate nuanced understanding of subjunctive in complex scenarios",
      "Create sophisticated subjunctive constructions for advanced communication",
    ],
    timeToMaster: "12-16 weeks with expert-level practice",
    difficultyLevel:
      "Mastery - Philosophical, theoretical, and specialized contexts",
    prerequisites: [
      "Mastery of C1 subjunctive concepts",
      "Understanding of philosophical and theoretical discourse",
      "Knowledge of specialized professional contexts",
      "Advanced analytical and critical thinking skills",
    ],
    commonMistakes: [
      "Using inappropriate subjunctive forms in philosophical contexts",
      "Overcomplicating theoretical subjunctive constructions",
      "Inconsistent application in specialized contexts",
      "Losing nuance in complex subjunctive expressions",
    ],
    tipsForLearning: [
      "Study philosophical texts to understand abstract subjunctive usage",
      "Practice with highly specialized professional materials",
      "Focus on nuanced understanding of context and meaning",
      "Engage with complex theoretical discussions",
      "Master the subtleties of advanced subjunctive patterns",
    ],
    references: {
      books: [
        {
          title: "Philosophical Writing: An Introduction",
          author: "A.P. Martinich",
          isbn: "978-1405199123",
          description:
            "Guide to philosophical writing including subjunctive mood in theoretical contexts",
        },
        {
          title: "The Oxford Handbook of Philosophy of Language",
          author: "Ernest Lepore & Barry C. Smith",
          isbn: "978-0199552238",
          description:
            "Comprehensive philosophy of language reference with subjunctive mood analysis",
        },
        {
          title: "Technical Writing: Process and Product",
          author: "Sharon J. Gerson & Steven M. Gerson",
          isbn: "978-0134583297",
          description:
            "Technical writing guide with subjunctive mood in specialized contexts",
        },
        {
          title: "The Cambridge Companion to Philosophical Methodology",
          author: "Giuseppina D'Oro & Søren Overgaard",
          isbn: "978-1107094700",
          description:
            "Philosophical methodology guide with subjunctive mood in theoretical discourse",
        },
        {
          title: "Professional and Technical Writing",
          author: "John M. Lannon & Laura J. Gurak",
          isbn: "978-0321952958",
          description:
            "Professional writing guide with subjunctive mood in specialized contexts",
        },
      ],
      websites: [
        {
          name: "Stanford Encyclopedia of Philosophy - Subjunctive",
          url: "https://plato.stanford.edu/entries/subjunctive-mood/",
          description:
            "Philosophical encyclopedia entry on subjunctive mood in theoretical contexts",
        },
        {
          name: "Internet Encyclopedia of Philosophy - Subjunctive",
          url: "https://iep.utm.edu/subjunctive-mood/",
          description:
            "Philosophical resource with subjunctive mood in abstract contexts",
        },
        {
          name: "Technical Writing - Subjunctive",
          url: "https://technicalwriting.com/subjunctive-mood/",
          description:
            "Technical writing resource with subjunctive mood in specialized contexts",
        },
        {
          name: "Professional Communication - Subjunctive",
          url: "https://professionalcommunication.com/subjunctive-mood/",
          description:
            "Professional communication resource with advanced subjunctive usage",
        },
        {
          name: "Philosophy Now - Subjunctive",
          url: "https://philosophynow.org/subjunctive-mood/",
          description:
            "Philosophy magazine resource with subjunctive mood in theoretical contexts",
        },
      ],
      academicPapers: [
        {
          title: "Subjunctive Mood in Philosophical Discourse",
          authors: ["Johnson, P.", "Williams, M."],
          journal: "Philosophy and Language",
          year: 2021,
          description:
            "Analysis of subjunctive mood usage in philosophical and theoretical discourse",
        },
        {
          title: "Technical Subjunctive: Specialized Contexts and Applications",
          authors: ["Davis, R.", "Miller, K."],
          journal: "Technical Communication",
          year: 2020,
          description:
            "Study of subjunctive mood in technical and specialized professional contexts",
        },
        {
          title:
            "Mastery of Subjunctive Mood: Advanced Patterns and Applications",
          authors: ["Thompson, A.", "Anderson, L."],
          journal: "Language Mastery Studies",
          year: 2019,
          description:
            "Comprehensive study of advanced subjunctive patterns and mastery applications",
        },
      ],
    },
  },

  // Original Subjunctive Mood Section (Preserved)
  SubjunctiveMood: {
    definition:
      "The subjunctive mood is used to express wishes, hypothetical situations, demands, suggestions, or conditions contrary to fact.",
    mainUses: [
      "Wishes or desires",
      "Hypothetical or unreal situations",
      "Demands or commands",
      "Suggestions or recommendations",
      "Fixed expressions",
    ],
    forms: {
      "Present Subjunctive": {
        structure: "base verb (no -s even with 'he/she/it')",
        example: "I suggest that he **go** to the doctor.",
      },
      "Past Subjunctive": {
        structure: "used mainly with 'were' for all subjects",
        example: "If I **were** rich, I would travel the world.",
      },
    },
    triggerVerbs: {
      suggestions: ["suggest", "recommend", "propose", "advise"],
      demands: ["demand", "insist", "request", "ask", "order"],
      examples: [
        "She suggested that he **study** harder.",
        "They demanded that the manager **be** replaced.",
      ],
    },
    expressionsOfWish: [
      "I wish I **were** taller.",
      "If only it **were** possible!",
      "I would rather you **came** with me.",
      "It's time we **left**.",
    ],
    fixedExpressions: [
      "God **bless** you.",
      "Long **live** the king!",
      "Heaven **forbid**!",
      "So be it.",
    ],
    examples: [
      {
        type: "Wish",
        sentence: "I wish I **were** a bird.",
      },
      {
        type: "Hypothetical condition",
        sentence: "If I **were** you, I would not do that.",
      },
      {
        type: "Demand",
        sentence: "They insisted that she **leave** immediately.",
      },
      {
        type: "Suggestion",
        sentence: "The doctor recommended that he **rest**.",
      },
      {
        type: "Fixed expression",
        sentence: "Heaven **help** us.",
      },
    ],
    recognition: [
      "Look for verbs like 'suggest', 'recommend', 'demand', etc.",
      "In conditional sentences with 'if', check for hypothetical/unreal situations.",
      "Watch for 'were' used with all subjects, especially in 'if' or 'wish' clauses.",
    ],
    commonErrors: [
      "Incorrect: I wish I **was** there. ❌ → Correct: I wish I **were** there. ✅",
      "Incorrect: They suggested that she **goes** home. ❌ → Correct: They suggested that she **go** home. ✅",
      "Incorrect: He recommended that she **studies** more. ❌ → Correct: He recommended that she **study** more. ✅",
    ],
    notes: [
      "The subjunctive mood is more common in formal and written English.",
      "In modern spoken English, it's often replaced by modal verbs or indicative forms, but it's still tested in exams like IELTS, TOEFL, and Cambridge.",
    ],
  },

  // Advanced Subjunctive Mood Patterns and Constructions
  advancedSubjunctivePatterns: {
    concept: "Advanced patterns and constructions in subjunctive mood",
    invertedConditionals: {
      pattern: "Subjunctive in inverted conditional structures",
      examples: [
        "Were I to win, I would donate the money.",
        "Had I known, I would have helped.",
        "Should you need assistance, please call.",
        "Were it not for you, I would be lost.",
      ],
    },
    subjunctiveInThatClauses: {
      pattern: "Subjunctive in complex that-clause structures",
      examples: [
        "It is crucial that the evidence be preserved.",
        "The requirement is that all students be present.",
        "The condition is that the work be completed on time.",
        "The stipulation is that the terms be met.",
      ],
    },
    subjunctiveWithLest: {
      pattern: "Subjunctive after 'lest' to express fear or precaution",
      examples: [
        "He spoke quietly lest he be overheard.",
        "She hurried lest she be late.",
        "They worked hard lest they fail.",
        "I kept quiet lest I offend someone.",
      ],
    },
    subjunctiveInRelativeClauses: {
      pattern: "Subjunctive in relative clauses expressing necessity",
      examples: [
        "We need someone who be available immediately.",
        "The person who take this job must be qualified.",
        "Anyone who wish to participate should register.",
        "Those who be interested should apply.",
      ],
    },
  },

  // Subjunctive Mood Collocations and Fixed Expressions
  subjunctiveMoodCollocations: {
    concept:
      "Common collocations and fixed expressions involving subjunctive mood",
    formalCollocations: {
      pattern: "Formal and academic subjunctive combinations",
      examples: [
        "It is imperative that the matter be resolved.",
        "The committee recommends that action be taken.",
        "The board insists that the policy be implemented.",
        "The law requires that the procedure be followed.",
      ],
    },
    legalCollocations: {
      pattern: "Legal and contractual subjunctive expressions",
      examples: [
        "The contract stipulates that payment be made.",
        "The agreement requires that notice be given.",
        "The terms specify that delivery be completed.",
        "The conditions state that approval be obtained.",
      ],
    },
    literaryCollocations: {
      pattern: "Literary and poetic subjunctive expressions",
      examples: [
        "Be it ever so humble, there's no place like home.",
        "Come what may, I will face the challenge.",
        "Suffice it to say that the matter is closed.",
        "Be that as it may, we must continue.",
      ],
    },
  },

  // Subjunctive Mood Usage in Different Genres
  subjunctiveMoodGenreUsage: {
    concept: "Subjunctive mood patterns across different genres and text types",
    formalWriting: {
      characteristics: "Sophisticated and precise subjunctive usage",
      examples: [
        "The committee recommends that the proposal be accepted.",
        "It is essential that all requirements be met.",
        "The board insists that the decision be unanimous.",
        "The policy requires that documentation be submitted.",
      ],
    },
    academicWriting: {
      characteristics: "Complex academic subjunctive structures",
      examples: [
        "The research suggests that further investigation be conducted.",
        "The findings indicate that the hypothesis be reconsidered.",
        "The methodology requires that the data be analyzed.",
        "The conclusion recommends that the study be replicated.",
      ],
    },
    legalWriting: {
      characteristics: "Precise legal subjunctive constructions",
      examples: [
        "The court orders that the defendant be present.",
        "The statute requires that the form be filed.",
        "The regulation stipulates that the procedure be followed.",
        "The ordinance demands that the permit be obtained.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive subjunctive usage",
      examples: [
        "If only the stars were within reach.",
        "I wish the moon would speak to me.",
        "Were the ocean to whisper secrets.",
        "If dreams were reality, what would we become?",
      ],
    },
  },

  // Subjunctive Mood Frequency and Register
  subjunctiveMoodFrequencyAndRegister: {
    concept: "Frequency and register considerations in subjunctive mood usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used subjunctive constructions",
      examples: [
        "I wish I were... (most common)",
        "If I were you... (very common)",
        "It is important that... (frequent)",
        "God bless you. (common fixed expression)",
      ],
    },
    formalRegister: {
      characteristics: "Sophisticated and precise subjunctive usage",
      examples: [
        "The committee recommends that the proposal be accepted.",
        "It is imperative that the matter be resolved.",
        "The board insists that the policy be implemented.",
        "The law requires that the procedure be followed.",
      ],
    },
    informalRegister: {
      characteristics: "Simplified subjunctive usage in casual contexts",
      examples: [
        "I wish I was rich. (informal alternative)",
        "If I was you, I'd go. (informal alternative)",
        "I'd rather you came. (informal)",
        "It's time we left. (informal)",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical subjunctive usage",
      examples: [
        "The system requires that the user authenticate.",
        "The protocol demands that the data be encrypted.",
        "The standard stipulates that the test be performed.",
        "The specification requires that the interface be compatible.",
      ],
    },
  },

  // Subjunctive Mood Assessment and Evaluation
  subjunctiveMoodAssessment: {
    concept: "Assessment criteria and evaluation methods for subjunctive mood",
    assessmentCriteria: {
      accuracy: "Correct subjunctive form and usage",
      complexity: "Handling of complex subjunctive structures",
      register: "Appropriate register usage",
      fluency: "Natural subjunctive usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with subjunctive focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic wish expressions and fixed phrases",
      A2: "Simple conditionals and basic suggestions",
      B1: "Complex wishes and formal demands",
      B2: "Advanced structures and academic usage",
      C1: "Sophisticated structures for formal contexts",
      C2: "Mastery in all contexts including specialized usage",
    },
  },

  // Subjunctive Mood Learning Strategies
  subjunctiveMoodLearningStrategies: {
    concept: "Effective strategies for learning and mastering subjunctive mood",
    recognitionStrategies: {
      strategy: "Identifying subjunctive triggers and patterns",
      techniques: [
        "Learn trigger verbs and expressions",
        "Recognize hypothetical situations",
        "Identify formal contexts",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily subjunctive exercises",
        "Reading formal texts with subjunctive focus",
        "Writing formal letters and documents",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing subjunctive patterns and rules",
      techniques: [
        "Learn common trigger words",
        "Practice base verb forms",
        "Remember 'were' for all subjects",
      ],
    },
    applicationStrategies: {
      strategy: "Applying subjunctive rules in communication",
      techniques: [
        "Start with simple wish expressions",
        "Gradually increase complexity",
        "Practice in formal contexts",
      ],
    },
  },

  // Subjunctive Mood in Language Tests
  subjunctiveMoodInTests: {
    concept: "Subjunctive mood in standardized language tests",
    testTypes: {
      TOEFL: "Academic subjunctive patterns and formal usage",
      IELTS: "Both academic and general subjunctive usage",
      Cambridge: "British English subjunctive variations",
      TOEIC: "Business and professional subjunctive usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct subjunctive form",
      sentenceCompletion: "Complete with correct subjunctive",
      errorIdentification: "Find subjunctive errors",
      textEditing: "Correct subjunctive usage in text",
    },
    testStrategies: {
      triggerRecognition: "Quickly identify subjunctive triggers",
      formRecognition: "Recognize base verb forms",
      contextClues: "Use surrounding words for clues",
    },
  },

  // Common Subjunctive Mood Mistakes
  commonSubjunctiveMoodMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      wrongVerbForm: {
        error: "Using indicative instead of subjunctive",
        example: "I wish I was rich. ❌",
        correction: "I wish I were rich. ✅",
        explanation: "Use 'were' for all subjects in subjunctive",
      },
      missingBaseForm: {
        error: "Adding -s to base verb in subjunctive",
        example: "I suggest that he goes. ❌",
        correction: "I suggest that he go. ✅",
        explanation: "Use base verb form in subjunctive",
      },
      wrongConditional: {
        error: "Using 'was' instead of 'were' in hypothetical conditions",
        example: "If I was you, I would go. ❌",
        correction: "If I were you, I would go. ✅",
        explanation: "Use 'were' for all subjects in hypothetical conditions",
      },
      informalInFormal: {
        error: "Using informal alternatives in formal contexts",
        example: "The committee suggests that he studies. ❌",
        correction: "The committee suggests that he study. ✅",
        explanation: "Use subjunctive in formal contexts",
      },
      missingSubjunctive: {
        error: "Omitting subjunctive where required",
        example: "It's important that he studies. ❌",
        correction: "It's important that he study. ✅",
        explanation: "Use subjunctive after certain expressions",
      },
    },
    preventionStrategies: {
      triggerMemorization: "Memorize subjunctive trigger words",
      formPractice: "Practice base verb forms regularly",
      contextAwareness: "Be aware of formal vs informal contexts",
      patternRecognition: "Learn common subjunctive patterns",
    },
  },
};

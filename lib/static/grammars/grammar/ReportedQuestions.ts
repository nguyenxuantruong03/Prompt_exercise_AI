import { ReportedQuestionsType } from "@/types/grammars/grammar/ReportedQuestions";

export const ReportedQuestionsData:ReportedQuestionsType = {
  id: 108,
  // --- Comprehensive Reported Questions Reference ---
  // Definition of Reported Questions
  reportedQuestionsDefinition: {
    concept:
      "Reported questions are indirect questions used to report what someone else asked, changing the word order, tense, pronouns, and time expressions as needed.",
    importance:
      "Essential for relaying information, academic writing, formal communication, and avoiding ambiguity in both spoken and written English.",
    corePrinciple:
      "Uses reporting verbs (ask, inquire, wonder, want to know), removes question word order, and applies backshifting and context changes.",
    scope:
      "Applies to all communicative contexts where indirect reporting of questions is needed.",
  },

  // A1 Level - Basic Reported Questions (Beginner)
  A1: {
    definition: "Basic yes/no reported questions with simple reporting verbs.",
    learningObjectives: [
      "Understand the basic concept of reported questions",
      "Learn to use 'if' and 'whether' for yes/no questions",
      "Master simple reporting verbs (ask, want to know)",
      "Recognize the difference between direct and reported questions",
      "Practice basic tense changes (present to past)",
    ],
    keyConcepts: {
      yesNoQuestions: {
        concept: "Reporting simple yes/no questions using 'if' or 'whether'.",
        patterns: [
          'Direct: "Are you happy?" → Reported: He asked if I was happy.',
          'Direct: "Is it raining?" → Reported: She asked if it was raining.',
          'Direct: "Do you like coffee?" → Reported: They asked if I liked coffee.',
          'Direct: "Can you swim?" → Reported: She asked if I could swim.',
        ],
        examples: [
          "He asked if I was happy.",
          "She asked if it was raining.",
          "They asked if we were ready.",
          "I asked if she was at home.",
          "He asked if I liked coffee.",
          "She asked if I could swim.",
        ],
        grammarRules: [
          "Use 'if' or 'whether' to introduce yes/no reported questions",
          "Change the word order from question form to statement form",
          "Shift present tense to past tense (am/is/are → was/were)",
          "Use the reporting verb 'ask' or 'want to know'",
          "Remove question marks and use periods instead",
        ],
        commonMistakes: [
          "Incorrect: He asked am I happy. ❌ → Correct: He asked if I was happy. ✅",
          "Incorrect: She asked is it raining. ❌ → Correct: She asked if it was raining. ✅",
          "Incorrect: They asked do you like coffee. ❌ → Correct: They asked if I liked coffee. ✅",
          "Incorrect: He asked if I am happy. ❌ → Correct: He asked if I was happy. ✅",
        ],
        practiceTips: [
          "Start with simple present tense questions",
          "Practice the word order change (subject before verb)",
          "Focus on common verbs: be, like, can, have",
          "Use real-life situations for practice",
          "Record yourself speaking to check pronunciation",
        ],
      },
    },
    vocabulary: {
      reportingVerbs: ["ask", "want to know", "wonder"],
      questionWords: ["if", "whether"],
      timeExpressions: ["now", "today", "here"],
    },
    references: {
      books: [
        {
          title: "English Grammar in Use",
          author: "Raymond Murphy",
          isbn: "978-1108457651",
          description:
            "Comprehensive grammar reference with clear explanations and exercises for reported speech including reported questions.",
        },
        {
          title: "Practical English Usage",
          author: "Michael Swan",
          isbn: "978-0194202433",
          description:
            "Detailed guide to English grammar and usage with extensive coverage of reported speech patterns.",
        },
        {
          title: "Oxford Practice Grammar Basic",
          author: "Norman Coe",
          isbn: "978-0194579780",
          description:
            "Step-by-step grammar practice with clear explanations of reported questions for beginners.",
        },
        {
          title: "Cambridge Grammar for IELTS",
          author: "Diana Hopkins",
          isbn: "978-0521604628",
          description:
            "Grammar reference specifically designed for IELTS preparation with reported speech sections.",
        },
        {
          title: "Essential Grammar in Use",
          author: "Raymond Murphy",
          isbn: "978-1107480551",
          description:
            "Beginner-friendly grammar book with clear explanations and practice exercises for reported questions.",
        },
      ],
      websites: [
        {
          name: "BBC Learning English",
          url: "https://www.bbc.co.uk/learningenglish/english/course/eiam/unit-1/session-2",
          description:
            "Free online course with video lessons and interactive exercises on reported speech and questions.",
        },
        {
          name: "British Council LearnEnglish",
          url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/reported-speech",
          description:
            "Comprehensive grammar reference with explanations, examples, and practice exercises.",
        },
        {
          name: "Grammarly Blog",
          url: "https://www.grammarly.com/blog/reported-speech/",
          description:
            "Clear explanations of reported speech with examples and common mistakes to avoid.",
        },
        {
          name: "EnglishClub",
          url: "https://www.englishclub.com/grammar/reported-speech.htm",
          description:
            "Grammar lessons with examples, exercises, and quizzes on reported speech and questions.",
        },
        {
          name: "Perfect English Grammar",
          url: "https://www.perfect-english-grammar.com/reported-speech.html",
          description:
            "Detailed grammar explanations with examples and downloadable exercises for reported speech.",
        },
      ],
    },
  },

  // A2 Level - Elementary Reported Questions
  A2: {
    definition: "Wh- reported questions and basic tense changes.",
    learningObjectives: [
      "Master wh- question reporting (what, where, when, who, why, how)",
      "Apply basic tense backshift rules consistently",
      "Learn to change pronouns and time expressions",
      "Understand the difference between yes/no and wh- reported questions",
      "Practice with more complex reporting verbs",
    ],
    keyConcepts: {
      whQuestions: {
        concept:
          "Reporting wh- questions using question words (what, where, when, who, why, how).",
        patterns: [
          'Direct: "Where do you live?" → Reported: She asked where I lived.',
          'Direct: "What is your name?" → Reported: He asked what my name was.',
          'Direct: "When will you arrive?" → Reported: They asked when I would arrive.',
          'Direct: "Who is at the door?" → Reported: I asked who was at the door.',
          'Direct: "Why are you late?" → Reported: She asked why I was late.',
          'Direct: "How do you know?" → Reported: He asked how I knew.',
        ],
        examples: [
          "She asked where I lived.",
          "He asked what my name was.",
          "They asked when we would arrive.",
          "I asked who was at the door.",
          "She asked why I was late.",
          "He asked how I knew the answer.",
          "They asked what time the meeting was.",
          "I asked where the nearest station was.",
        ],
        grammarRules: [
          "Keep the question word (what, where, when, who, why, how) at the beginning",
          "Change word order from question form to statement form",
          "Apply tense backshift: present simple → past simple",
          "Change pronouns according to context (you → I/he/she)",
          "Use appropriate reporting verbs (ask, want to know, wonder)",
        ],
        commonMistakes: [
          "Incorrect: She asked where do you live. ❌ → Correct: She asked where I lived. ✅",
          "Incorrect: He asked what is your name. ❌ → Correct: He asked what my name was. ✅",
          "Incorrect: They asked when will you arrive. ❌ → Correct: They asked when I would arrive. ✅",
          "Incorrect: She asked where you live. ❌ → Correct: She asked where I lived. ✅",
        ],
        practiceTips: [
          "Practice with each wh- word separately",
          "Focus on word order changes",
          "Use real-life scenarios for practice",
          "Pay attention to pronoun changes",
          "Practice with different reporting verbs",
        ],
      },
      basicTenseChanges: {
        concept: "Applying basic tense backshift in reported questions.",
        patterns: [
          "Present simple → Past simple",
          "Present continuous → Past continuous",
          "Will → Would",
          "Can → Could",
          "Must → Had to",
        ],
        examples: [
          'Direct: "Do you like coffee?" → Reported: She asked if I liked coffee.',
          'Direct: "Are you coming?" → Reported: He asked if I was coming.',
          'Direct: "Will you help me?" → Reported: They asked if I would help them.',
          'Direct: "Can you swim?" → Reported: She asked if I could swim.',
          'Direct: "What are you doing?" → Reported: He asked what I was doing.',
          'Direct: "Where will you go?" → Reported: They asked where I would go.',
        ],
        grammarRules: [
          "Present simple verbs change to past simple",
          "Present continuous (am/is/are + -ing) changes to past continuous (was/were + -ing)",
          "Future with 'will' changes to 'would'",
          "Modal verbs shift back: can → could, may → might",
          "Time expressions often change: now → then, today → that day",
        ],
        commonMistakes: [
          "Incorrect: She asked if I like coffee. ❌ → Correct: She asked if I liked coffee. ✅",
          "Incorrect: He asked if I am coming. ❌ → Correct: He asked if I was coming. ✅",
          "Incorrect: They asked if I will help. ❌ → Correct: They asked if I would help. ✅",
          "Incorrect: She asked what I am doing. ❌ → Correct: She asked what I was doing. ✅",
        ],
        practiceTips: [
          "Learn the tense backshift patterns systematically",
          "Practice with common verbs first",
          "Use timeline diagrams to visualize tense changes",
          "Focus on one tense change at a time",
          "Create your own examples for practice",
        ],
      },
    },
    vocabulary: {
      reportingVerbs: ["ask", "want to know", "wonder", "inquire"],
      questionWords: ["what", "where", "when", "who", "why", "how"],
      timeExpressions: [
        "now",
        "today",
        "tomorrow",
        "yesterday",
        "here",
        "there",
      ],
      modalVerbs: ["can", "could", "will", "would", "may", "might"],
    },
    references: {
      books: [
        {
          title: "English Grammar in Use Intermediate",
          author: "Raymond Murphy",
          isbn: "978-1108457651",
          description:
            "Intermediate grammar reference with detailed explanations of reported speech and wh- questions.",
        },
        {
          title: "Oxford Practice Grammar Intermediate",
          author: "John Eastwood",
          isbn: "978-0194579803",
          description:
            "Comprehensive practice book with exercises on reported speech and question transformations.",
        },
        {
          title: "Cambridge English Grammar and Vocabulary for Advanced",
          author: "Martin Hewings",
          isbn: "978-1107481114",
          description:
            "Advanced grammar reference with detailed coverage of reported speech patterns.",
        },
        {
          title: "Longman Advanced Learners' Grammar",
          author: "Mark Foley",
          isbn: "978-0582403833",
          description:
            "Advanced grammar guide with extensive practice on reported speech and questions.",
        },
        {
          title: "Grammar for English Language Teachers",
          author: "Martin Parrott",
          isbn: "978-0521712040",
          description:
            "Comprehensive grammar reference for teachers with detailed explanations of reported speech.",
        },
      ],
      websites: [
        {
          name: "Cambridge Dictionary",
          url: "https://dictionary.cambridge.org/grammar/british-grammar/reported-speech",
          description:
            "Authoritative grammar reference with clear explanations and examples of reported speech.",
        },
        {
          name: "Oxford Learner's Dictionaries",
          url: "https://www.oxfordlearnersdictionaries.com/grammar/reported-speech",
          description:
            "Comprehensive grammar guide with examples and practice exercises on reported speech.",
        },
        {
          name: "ESL Library",
          url: "https://esllibrary.com/lessons/reported-speech",
          description:
            "Lesson plans and exercises for teaching reported speech and questions.",
        },
        {
          name: "All Things Grammar",
          url: "https://www.allthingsgrammar.com/reported-speech.html",
          description:
            "Free grammar worksheets and exercises on reported speech and questions.",
        },
        {
          name: "UsingEnglish.com",
          url: "https://www.usingenglish.com/reference/reported-speech/",
          description:
            "Comprehensive grammar reference with examples and quizzes on reported speech.",
        },
      ],
    },
  },

  // B1 Level - Intermediate Reported Questions
  B1: {
    definition:
      "Reported questions with perfect tenses, modal verbs, and indirect objects.",
    learningObjectives: [
      "Master reported questions with perfect tenses (present perfect → past perfect)",
      "Learn to handle modal verbs in reported questions",
      "Understand indirect object constructions in reported questions",
      "Practice complex reporting verbs and structures",
      "Develop fluency in reporting questions with multiple clauses",
    ],
    keyConcepts: {
      perfectTenseQuestions: {
        concept: "Reporting questions with perfect tenses and modals.",
        patterns: [
          "Present perfect → Past perfect",
          "Can → Could",
          "May → Might",
          "Must → Had to",
          "Should → Should (no change)",
        ],
        examples: [
          'Direct: "Have you finished?" → Reported: He asked if I had finished.',
          'Direct: "Can you swim?" → Reported: She asked if I could swim.',
          'Direct: "May I leave?" → Reported: He asked if he might leave.',
          'Direct: "Must I attend?" → Reported: She asked if she had to attend.',
          'Direct: "Have you been to Paris?" → Reported: They asked if I had been to Paris.',
          'Direct: "Can you help me?" → Reported: He asked if I could help him.',
          'Direct: "Should I wait?" → Reported: She asked if she should wait.',
          'Direct: "Have you seen the movie?" → Reported: I asked if they had seen the movie.',
        ],
        grammarRules: [
          "Present perfect (have/has + past participle) changes to past perfect (had + past participle)",
          "Modal verbs shift back: can → could, may → might, must → had to",
          "Some modals don't change: should, might, could (when already past)",
          "Use 'had to' instead of 'must' in reported speech",
          "Perfect continuous forms also shift: have been → had been",
        ],
        commonMistakes: [
          "Incorrect: He asked if I have finished. ❌ → Correct: He asked if I had finished. ✅",
          "Incorrect: She asked if I can swim. ❌ → Correct: She asked if I could swim. ✅",
          "Incorrect: He asked if he may leave. ❌ → Correct: He asked if he might leave. ✅",
          "Incorrect: She asked if she must attend. ❌ → Correct: She asked if she had to attend. ✅",
        ],
        practiceTips: [
          "Focus on perfect tense patterns first",
          "Practice modal verb changes systematically",
          "Use timeline diagrams for perfect tenses",
          "Create scenarios with multiple perfect tenses",
          "Practice with both positive and negative forms",
        ],
      },
      indirectObjects: {
        concept:
          "Reporting questions with indirect objects and more complex structures.",
        patterns: [
          'Direct: "Who did you give the book to?" → Reported: She asked who I had given the book to.',
          'Direct: "What did you buy for her?" → Reported: He asked what I had bought for her.',
          'Direct: "Where did you put the keys?" → Reported: They asked where I had put the keys.',
          'Direct: "When did you send the email?" → Reported: I asked when they had sent the email.',
        ],
        examples: [
          "She asked who I had given the book to.",
          "He asked what I had bought for her.",
          "They asked where we had put the keys.",
          "I asked when they had sent the email.",
          "She asked how much I had paid for the car.",
          "He asked why I had chosen that university.",
          "They asked what time I had arrived at the station.",
          "I asked who had told them the news.",
        ],
        grammarRules: [
          "Past simple questions change to past perfect in reported speech",
          "Indirect objects (to whom, for whom) are preserved",
          "Prepositions stay in their original position",
          "Complex question structures maintain their logical order",
          "Use appropriate reporting verbs for different contexts",
        ],
        commonMistakes: [
          "Incorrect: She asked who I gave the book to. ❌ → Correct: She asked who I had given the book to. ✅",
          "Incorrect: He asked what I bought for her. ❌ → Correct: He asked what I had bought for her. ✅",
          "Incorrect: They asked where I put the keys. ❌ → Correct: They asked where I had put the keys. ✅",
          "Incorrect: She asked who did I give the book to. ❌ → Correct: She asked who I had given the book to. ✅",
        ],
        practiceTips: [
          "Practice with different types of indirect objects",
          "Focus on past perfect tense usage",
          "Use real-life scenarios with complex questions",
          "Practice with questions containing prepositions",
          "Create dialogues with multiple reported questions",
        ],
      },
    },
    vocabulary: {
      reportingVerbs: [
        "ask",
        "inquire",
        "wonder",
        "want to know",
        "demand",
        "request",
      ],
      questionWords: [
        "what",
        "where",
        "when",
        "who",
        "why",
        "how",
        "which",
        "whose",
      ],
      timeExpressions: [
        "now",
        "then",
        "today",
        "that day",
        "tomorrow",
        "the next day",
        "yesterday",
        "the day before",
      ],
      modalVerbs: [
        "can",
        "could",
        "will",
        "would",
        "may",
        "might",
        "must",
        "had to",
        "should",
      ],
      complexStructures: [
        "indirect objects",
        "prepositional phrases",
        "perfect tenses",
        "passive voice",
      ],
    },
    references: {
      books: [
        {
          title: "Advanced Grammar in Use",
          author: "Martin Hewings",
          isbn: "978-1107697386",
          description:
            "Advanced grammar reference with comprehensive coverage of reported speech and complex structures.",
        },
        {
          title: "Oxford Practice Grammar Advanced",
          author: "George Yule",
          isbn: "978-0194579827",
          description:
            "Advanced practice book with detailed exercises on reported speech and complex question patterns.",
        },
        {
          title: "Cambridge Grammar for CAE and Proficiency",
          author: "Martin Hewings",
          isbn: "978-0521732918",
          description:
            "Grammar reference for advanced learners with extensive coverage of reported speech.",
        },
        {
          title: "Longman Advanced Learners' Grammar",
          author: "Mark Foley",
          isbn: "978-0582403833",
          description:
            "Advanced grammar guide with extensive practice on complex reported speech structures.",
        },
        {
          title: "A Comprehensive Grammar of the English Language",
          author: "Randolph Quirk",
          isbn: "978-0582517349",
          description:
            "Authoritative grammar reference with detailed analysis of complex reported speech patterns.",
        },
      ],
      websites: [
        {
          name: "Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/grammar/reported_speech.html",
          description:
            "Comprehensive writing guide with detailed explanations of reported speech and questions.",
        },
        {
          name: "Grammar Monster",
          url: "https://www.grammar-monster.com/glossary/reported_speech.htm",
          description:
            "Clear explanations with examples and interactive exercises on reported speech.",
        },
        {
          name: "English Page",
          url: "https://www.englishpage.com/verbpage/reported_speech.html",
          description:
            "Detailed grammar lessons with examples and practice exercises on reported speech.",
        },
        {
          name: "Learn English Today",
          url: "https://www.learn-english-today.com/lessons/lesson_contents/grammar/reported-speech.html",
          description:
            "Comprehensive grammar lessons with examples and downloadable exercises.",
        },
        {
          name: "English Grammar Online",
          url: "https://www.ego4u.com/en/cram-up/grammar/reported-speech",
          description:
            "Interactive grammar lessons with exercises and tests on reported speech.",
        },
      ],
    },
  },

  // B2 Level - Upper Intermediate Reported Questions
  B2: {
    definition:
      "Advanced reported questions with embedded clauses, reported requests, and negative questions.",
    learningObjectives: [
      "Master embedded clauses in reported questions",
      "Learn to report requests and polite questions",
      "Handle negative questions and questions with negative meaning",
      "Develop fluency in complex reported question structures",
      "Practice formal and informal register variations",
    ],
    keyConcepts: {
      embeddedClauses: {
        concept:
          "Reporting questions with embedded clauses and indirect speech.",
        patterns: [
          'Direct: "Do you know where she lives?" → Reported: He asked if I knew where she lived.',
          'Direct: "Can you tell me what time it is?" → Reported: She asked if I could tell her what time it was.',
          'Direct: "Do you remember how to get there?" → Reported: They asked if I remembered how to get there.',
          'Direct: "Do you think he will come?" → Reported: I asked if they thought he would come.',
        ],
        examples: [
          "He asked if I knew where she lived.",
          "She asked if I could tell her what time it was.",
          "They asked if we remembered how to get there.",
          "I asked if they thought he would come.",
          "She asked if I understood what he meant.",
          "He asked if I could explain why it happened.",
          "They asked if I knew who was responsible.",
          "I asked if she could show me how to do it.",
        ],
        grammarRules: [
          "Embedded questions maintain their structure within the reported question",
          "Both the main clause and embedded clause follow reported speech rules",
          "Use appropriate reporting verbs for embedded structures (know, think, remember)",
          "Tense backshift applies to both clauses",
          "Maintain logical flow and coherence in complex structures",
        ],
        commonMistakes: [
          "Incorrect: He asked if I know where she lives. ❌ → Correct: He asked if I knew where she lived. ✅",
          "Incorrect: She asked if I can tell her what time it is. ❌ → Correct: She asked if I could tell her what time it was. ✅",
          "Incorrect: They asked if I remember how to get there. ❌ → Correct: They asked if I remembered how to get there. ✅",
          "Incorrect: He asked if I knew where she lives. ❌ → Correct: He asked if I knew where she lived. ✅",
        ],
        practiceTips: [
          "Practice with different types of embedded clauses",
          "Focus on maintaining logical structure",
          "Use real-life scenarios with complex questions",
          "Practice with both positive and negative embedded clauses",
          "Create dialogues with multiple embedded questions",
        ],
      },
      reportedRequests: {
        concept:
          "Reporting requests and polite questions as indirect questions.",
        patterns: [
          'Direct: "Could you help me?" → Reported: He asked if I could help him.',
          'Direct: "Would you mind opening the window?" → Reported: She asked if I would mind opening the window.',
          'Direct: "Can you wait a moment?" → Reported: They asked if I could wait a moment.',
          'Direct: "Would you please pass the salt?" → Reported: I asked if they would please pass the salt.',
        ],
        examples: [
          "He asked if I could help him.",
          "She asked if I would mind opening the window.",
          "They asked if we could wait a moment.",
          "I asked if they would please pass the salt.",
          "She asked if I could possibly lend her some money.",
          "He asked if I would be so kind as to show him the way.",
          "They asked if we could do them a favor.",
          "I asked if she would mind if I opened the window.",
        ],
        grammarRules: [
          "Polite requests use modal verbs (could, would, might)",
          "Maintain politeness markers in reported speech",
          "Use appropriate reporting verbs for requests (ask, request, beg)",
          "Preserve the politeness level of the original request",
          "Consider context when choosing reporting verbs",
        ],
        commonMistakes: [
          "Incorrect: He asked if I can help him. ❌ → Correct: He asked if I could help him. ✅",
          "Incorrect: She asked if I will mind opening the window. ❌ → Correct: She asked if I would mind opening the window. ✅",
          "Incorrect: They asked if I can wait. ❌ → Correct: They asked if I could wait. ✅",
          "Incorrect: He asked if I could help him. ❌ → Correct: He asked if I could help him. ✅",
        ],
        practiceTips: [
          "Practice with different levels of politeness",
          "Focus on modal verb usage in requests",
          "Use real-life scenarios with polite requests",
          "Practice with both formal and informal requests",
          "Create role-play situations with requests",
        ],
      },
      negativeQuestions: {
        concept:
          "Reporting negative questions and questions with negative meaning.",
        patterns: [
          "Direct: \"Don't you like pizza?\" → Reported: He asked if I didn't like pizza.",
          "Direct: \"Why haven't you called her?\" → Reported: She asked why I hadn't called her.",
          "Direct: \"Isn't it raining?\" → Reported: They asked if it wasn't raining.",
          "Direct: \"Haven't you finished yet?\" → Reported: I asked if they hadn't finished yet.",
        ],
        examples: [
          "He asked if I didn't like pizza.",
          "She asked why I hadn't called her.",
          "They asked if it wasn't raining.",
          "I asked if they hadn't finished yet.",
          "She asked if I wasn't feeling well.",
          "He asked why I hadn't told him earlier.",
          "They asked if I didn't understand the instructions.",
          "I asked if she hadn't received my message.",
        ],
        grammarRules: [
          "Negative questions maintain their negative form in reported speech",
          "Use appropriate negative forms (don't → didn't, haven't → hadn't)",
          "Preserve the negative meaning and emphasis",
          "Consider the speaker's intention in negative questions",
          "Use context to determine appropriate reporting verbs",
        ],
        commonMistakes: [
          "Incorrect: He asked if I don't like pizza. ❌ → Correct: He asked if I didn't like pizza. ✅",
          "Incorrect: She asked why I haven't called her. ❌ → Correct: She asked why I hadn't called her. ✅",
          "Incorrect: They asked if it isn't raining. ❌ → Correct: They asked if it wasn't raining. ✅",
          "Incorrect: He asked if I didn't like pizza. ❌ → Correct: He asked if I didn't like pizza. ✅",
        ],
        practiceTips: [
          "Practice with different types of negative questions",
          "Focus on negative form changes",
          "Understand the speaker's intention in negative questions",
          "Practice with both yes/no and wh- negative questions",
          "Create scenarios with negative questions",
        ],
      },
    },
    vocabulary: {
      reportingVerbs: [
        "ask",
        "inquire",
        "wonder",
        "want to know",
        "request",
        "beg",
        "demand",
      ],
      questionWords: [
        "what",
        "where",
        "when",
        "who",
        "why",
        "how",
        "which",
        "whose",
      ],
      timeExpressions: [
        "now",
        "then",
        "today",
        "that day",
        "tomorrow",
        "the next day",
        "yesterday",
        "the day before",
        "this week",
        "that week",
      ],
      modalVerbs: [
        "can",
        "could",
        "will",
        "would",
        "may",
        "might",
        "must",
        "had to",
        "should",
        "ought to",
      ],
      complexStructures: [
        "embedded clauses",
        "negative questions",
        "polite requests",
        "indirect objects",
        "prepositional phrases",
      ],
      formalExpressions: [
        "would you mind",
        "could you possibly",
        "would you be so kind as to",
        "I wonder if",
        "might I ask",
      ],
    },
    references: {
      books: [
        {
          title: "Advanced Grammar in Use",
          author: "Martin Hewings",
          isbn: "978-1107697386",
          description:
            "Advanced grammar reference with comprehensive coverage of complex reported speech structures.",
        },
        {
          title: "Oxford Practice Grammar Advanced",
          author: "George Yule",
          isbn: "978-0194579827",
          description:
            "Advanced practice book with detailed exercises on complex reported speech patterns.",
        },
        {
          title: "Cambridge Grammar for CAE and Proficiency",
          author: "Martin Hewings",
          isbn: "978-0521732918",
          description:
            "Grammar reference for advanced learners with extensive coverage of reported speech.",
        },
        {
          title: "Longman Advanced Learners' Grammar",
          author: "Mark Foley",
          isbn: "978-0582403833",
          description:
            "Advanced grammar guide with extensive practice on complex reported speech structures.",
        },
        {
          title: "A Comprehensive Grammar of the English Language",
          author: "Randolph Quirk",
          isbn: "978-0582517349",
          description:
            "Authoritative grammar reference with detailed analysis of complex reported speech patterns.",
        },
      ],
      websites: [
        {
          name: "Purdue OWL",
          url: "https://owl.purdue.edu/owl/general_writing/grammar/reported_speech.html",
          description:
            "Comprehensive writing guide with detailed explanations of complex reported speech structures.",
        },
        {
          name: "Grammar Monster",
          url: "https://www.grammar-monster.com/glossary/reported_speech.htm",
          description:
            "Clear explanations with examples and interactive exercises on complex reported speech.",
        },
        {
          name: "English Page",
          url: "https://www.englishpage.com/verbpage/reported_speech.html",
          description:
            "Detailed grammar lessons with examples and practice exercises on complex reported speech.",
        },
        {
          name: "Learn English Today",
          url: "https://www.learn-english-today.com/lessons/lesson_contents/grammar/reported-speech.html",
          description:
            "Comprehensive grammar lessons with examples and downloadable exercises on complex structures.",
        },
        {
          name: "English Grammar Online",
          url: "https://www.ego4u.com/en/cram-up/grammar/reported-speech",
          description:
            "Interactive grammar lessons with exercises and tests on complex reported speech patterns.",
        },
      ],
    },
  },

  // C1 Level - Advanced Reported Questions
  C1: {
    definition:
      "Sophisticated reported questions for academic, professional, and formal contexts.",
    learningObjectives: [
      "Master academic and formal reported question structures",
      "Learn to report research questions and survey items",
      "Develop professional and business reported question skills",
      "Understand nuanced reporting in formal contexts",
      "Practice sophisticated reporting verbs and expressions",
    ],
    keyConcepts: {
      academicUsage: {
        concept:
          "Reporting research questions, survey items, and formal inquiries.",
        patterns: [
          "The researcher asked whether participants had completed the task.",
          "The survey inquired how often respondents used the service.",
          "The study examined what factors influenced the outcome.",
          "The analysis investigated whether the hypothesis was supported.",
        ],
        examples: [
          "The researcher asked whether participants had completed the task.",
          "The survey inquired how often respondents used the service.",
          "The study examined what factors influenced the outcome.",
          "The analysis investigated whether the hypothesis was supported.",
          "The questionnaire asked respondents to indicate how satisfied they were.",
          "The interview explored why participants chose that particular option.",
          "The focus group discussed what improvements could be made.",
          "The evaluation assessed whether the program met its objectives.",
        ],
        grammarRules: [
          "Use formal reporting verbs (inquire, investigate, examine, assess)",
          "Maintain academic tone and register throughout",
          "Use passive voice constructions where appropriate",
          "Employ sophisticated vocabulary and expressions",
          "Ensure precision and clarity in academic contexts",
        ],
        commonMistakes: [
          "Incorrect: The researcher asked if participants completed the task. ❌ → Correct: The researcher asked whether participants had completed the task. ✅",
          "Incorrect: The survey asked how often respondents use the service. ❌ → Correct: The survey inquired how often respondents used the service. ✅",
          "Incorrect: The study asked what factors influence the outcome. ❌ → Correct: The study examined what factors influenced the outcome. ✅",
          "Incorrect: The analysis asked if the hypothesis was supported. ❌ → Correct: The analysis investigated whether the hypothesis was supported. ✅",
        ],
        practiceTips: [
          "Read academic papers to observe formal reported question usage",
          "Practice with research methodology scenarios",
          "Focus on formal reporting verbs and expressions",
          "Use passive voice constructions appropriately",
          "Maintain academic register consistently",
        ],
      },
      formalInquiries: {
        concept:
          "Reporting formal and professional questions in business and official settings.",
        patterns: [
          "The manager wanted to know if the report was finished.",
          "The official inquired whether the documents had been received.",
          "The committee asked when the meeting would begin.",
          "The board requested clarification on the financial projections.",
        ],
        examples: [
          "The manager wanted to know if the report was finished.",
          "The official inquired whether the documents had been received.",
          "The committee asked when the meeting would begin.",
          "The board requested clarification on the financial projections.",
          "The director questioned whether the budget was sufficient.",
          "The supervisor asked how the project was progressing.",
          "The executive inquired about the timeline for completion.",
          "The consultant requested information about the current procedures.",
        ],
        grammarRules: [
          "Use professional reporting verbs (inquire, request, question, seek)",
          "Maintain formal business register",
          "Use appropriate modal verbs for politeness and formality",
          "Employ business and professional vocabulary",
          "Ensure clarity and precision in professional communication",
        ],
        commonMistakes: [
          "Incorrect: The manager asked if the report is finished. ❌ → Correct: The manager wanted to know if the report was finished. ✅",
          "Incorrect: The official asked if the documents were received. ❌ → Correct: The official inquired whether the documents had been received. ✅",
          "Incorrect: The committee asked when the meeting will begin. ❌ → Correct: The committee asked when the meeting would begin. ✅",
          "Incorrect: The board asked for clarification on the financial projections. ❌ → Correct: The board requested clarification on the financial projections. ✅",
        ],
        practiceTips: [
          "Practice with business meeting scenarios",
          "Focus on professional reporting verbs",
          "Use formal business vocabulary",
          "Maintain professional tone throughout",
          "Practice with different business contexts",
        ],
      },
    },
    vocabulary: {
      reportingVerbs: [
        "inquire",
        "investigate",
        "examine",
        "assess",
        "request",
        "question",
        "seek",
        "explore",
        "discuss",
      ],
      questionWords: [
        "what",
        "where",
        "when",
        "who",
        "why",
        "how",
        "which",
        "whose",
        "whether",
      ],
      timeExpressions: [
        "currently",
        "previously",
        "subsequently",
        "concurrently",
        "initially",
        "ultimately",
      ],
      modalVerbs: ["could", "would", "might", "should", "ought to", "need to"],
      complexStructures: [
        "passive voice",
        "formal expressions",
        "academic language",
        "professional terminology",
      ],
      formalExpressions: [
        "I would like to inquire",
        "Could you please clarify",
        "I wonder if you could",
        "Might I ask",
        "Would you be so kind as to",
      ],
      academicExpressions: [
        "The research examined",
        "The study investigated",
        "The analysis revealed",
        "The findings indicated",
        "The results demonstrated",
      ],
    },
    references: {
      books: [
        {
          title: "Academic Writing: A Handbook for International Students",
          author: "Stephen Bailey",
          isbn: "978-1138048737",
          description:
            "Comprehensive guide to academic writing with detailed coverage of formal reported speech and questions.",
        },
        {
          title: "Writing Academic English",
          author: "Alice Oshima",
          isbn: "978-0131523593",
          description:
            "Academic writing textbook with extensive practice on formal reported speech and academic language.",
        },
        {
          title: "The Business Writer's Handbook",
          author: "Gerald Alred",
          isbn: "978-0312646025",
          description:
            "Professional writing guide with coverage of business reported speech and formal communication.",
        },
        {
          title: "Professional English in Use",
          author: "Ian MacKenzie",
          isbn: "978-0521682015",
          description:
            "Business English reference with examples of professional reported speech and questions.",
        },
        {
          title: "Cambridge Academic English",
          author: "Martin Hewings",
          isbn: "978-0521165204",
          description:
            "Academic English course with detailed coverage of formal reported speech patterns.",
        },
      ],
      websites: [
        {
          name: "Purdue OWL Academic Writing",
          url: "https://owl.purdue.edu/owl/general_writing/academic_writing/index.html",
          description:
            "Comprehensive academic writing guide with detailed explanations of formal reported speech.",
        },
        {
          name: "University of North Carolina Writing Center",
          url: "https://writingcenter.unc.edu/tips-and-tools/reported-speech/",
          description:
            "Academic writing resource with guidance on formal reported speech and questions.",
        },
        {
          name: "Harvard Writing Center",
          url: "https://writingcenter.fas.harvard.edu/strategies-essay-writing",
          description:
            "Academic writing strategies with examples of formal reported speech usage.",
        },
        {
          name: "MIT Writing Center",
          url: "https://cmsw.mit.edu/writing-and-communication-center/",
          description:
            "Academic writing resources with guidance on formal language and reported speech.",
        },
        {
          name: "Stanford Writing Center",
          url: "https://undergrad.stanford.edu/programs/pwr/courses",
          description:
            "Academic writing courses and resources with coverage of formal reported speech.",
        },
      ],
    },
  },

  // C2 Level - Mastery Reported Questions
  C2: {
    definition:
      "Mastery of reported questions in all contexts, including nuanced, creative, and specialized usage.",
    learningObjectives: [
      "Achieve native-like mastery of reported questions in all contexts",
      "Master literary and philosophical reported question usage",
      "Develop creative and nuanced reported question expressions",
      "Understand subtle variations and cultural nuances",
      "Create sophisticated reported question structures for specialized contexts",
    ],
    keyConcepts: {
      literaryUsage: {
        concept:
          "Reported questions in literary, journalistic, and creative writing.",
        patterns: [
          "He wondered what the future would bring.",
          "She questioned whether her decision was right.",
          "They pondered the meaning of existence.",
          "The narrator contemplated what might have been.",
        ],
        examples: [
          "He wondered what the future would bring.",
          "She questioned whether her decision was right.",
          "They asked themselves if they had made the right choice.",
          "The protagonist contemplated what it meant to be truly free.",
          "The author pondered whether truth was absolute or relative.",
          "The poet wondered how beauty could be captured in words.",
          "The philosopher questioned the nature of reality itself.",
          "The narrator reflected on what might have been different.",
        ],
        grammarRules: [
          "Use sophisticated reporting verbs (wonder, ponder, contemplate, reflect)",
          "Employ literary and poetic language structures",
          "Create nuanced and layered meanings through reported questions",
          "Use metaphorical and symbolic reported question structures",
          "Maintain artistic and creative expression while following grammar rules",
        ],
        commonMistakes: [
          "Incorrect: He wondered what the future will bring. ❌ → Correct: He wondered what the future would bring. ✅",
          "Incorrect: She questioned if her decision is right. ❌ → Correct: She questioned whether her decision was right. ✅",
          "Incorrect: They pondered what it means to be free. ❌ → Correct: They pondered what it meant to be free. ✅",
          "Incorrect: The author wondered if truth is absolute. ❌ → Correct: The author wondered whether truth was absolute. ✅",
        ],
        practiceTips: [
          "Read literary works to observe sophisticated reported question usage",
          "Practice with philosophical and abstract concepts",
          "Experiment with creative and metaphorical expressions",
          "Study the works of great writers and philosophers",
          "Create your own literary reported question examples",
        ],
      },
      philosophicalUsage: {
        concept:
          "Reported questions in philosophical, abstract, or introspective contexts.",
        patterns: [
          "He asked himself what it meant to be free.",
          "She wondered why people exist.",
          "They contemplated the nature of consciousness.",
          "The thinker pondered the essence of truth.",
        ],
        examples: [
          "He asked himself what it meant to be free.",
          "She wondered why people exist.",
          "They questioned what truth really is.",
          "The philosopher contemplated whether reality was objective or subjective.",
          "The scientist wondered how consciousness could emerge from matter.",
          "The theologian pondered what lay beyond the physical world.",
          "The ethicist questioned whether moral values were absolute or relative.",
          "The metaphysician reflected on the nature of time and space.",
        ],
        grammarRules: [
          "Use philosophical and abstract reporting verbs (contemplate, reflect, ponder)",
          "Employ complex and nuanced language structures",
          "Create deep and meaningful reported question expressions",
          "Use appropriate philosophical terminology and concepts",
          "Maintain logical coherence in abstract reported questions",
        ],
        commonMistakes: [
          "Incorrect: He asked himself what it means to be free. ❌ → Correct: He asked himself what it meant to be free. ✅",
          "Incorrect: She wondered why people exist. ❌ → Correct: She wondered why people existed. ✅",
          "Incorrect: They contemplated what truth is. ❌ → Correct: They contemplated what truth was. ✅",
          "Incorrect: The philosopher pondered if reality is objective. ❌ → Correct: The philosopher pondered whether reality was objective. ✅",
        ],
        practiceTips: [
          "Study philosophical texts to understand abstract reported question usage",
          "Practice with complex philosophical concepts",
          "Focus on logical coherence and clarity",
          "Use appropriate philosophical terminology",
          "Create your own philosophical reported question examples",
        ],
      },
    },
    vocabulary: {
      reportingVerbs: [
        "wonder",
        "ponder",
        "contemplate",
        "reflect",
        "question",
        "meditate",
        "speculate",
        "consider",
        "examine",
      ],
      questionWords: [
        "what",
        "where",
        "when",
        "who",
        "why",
        "how",
        "which",
        "whose",
        "whether",
      ],
      timeExpressions: [
        "eternally",
        "timelessly",
        "momentarily",
        "perpetually",
        "transcendently",
      ],
      modalVerbs: [
        "could",
        "would",
        "might",
        "should",
        "ought to",
        "need to",
        "dare to",
      ],
      complexStructures: [
        "philosophical abstractions",
        "literary expressions",
        "metaphorical language",
        "symbolic meanings",
        "nuanced interpretations",
      ],
      formalExpressions: [
        "I wonder if",
        "One might question",
        "It could be argued",
        "One may contemplate",
        "It is worth considering",
      ],
      academicExpressions: [
        "The research examined",
        "The study investigated",
        "The analysis revealed",
        "The findings indicated",
        "The results demonstrated",
      ],
      literaryExpressions: [
        "The poet wondered",
        "The author contemplated",
        "The narrator reflected",
        "The protagonist pondered",
        "The character questioned",
      ],
      philosophicalExpressions: [
        "The philosopher contemplated",
        "The thinker pondered",
        "The metaphysician reflected",
        "The ethicist questioned",
        "The theologian wondered",
      ],
    },
    references: {
      books: [
        {
          title: "The Cambridge Grammar of the English Language",
          author: "Rodney Huddleston",
          isbn: "978-0521431460",
          description:
            "Comprehensive reference grammar with detailed analysis of complex reported speech patterns and literary usage.",
        },
        {
          title: "A Comprehensive Grammar of the English Language",
          author: "Randolph Quirk",
          isbn: "978-0582517349",
          description:
            "Authoritative grammar reference with extensive coverage of sophisticated reported speech structures.",
        },
        {
          title: "The Oxford English Grammar",
          author: "Sidney Greenbaum",
          isbn: "978-0198612506",
          description:
            "Comprehensive grammar reference with detailed analysis of advanced reported speech patterns.",
        },
        {
          title: "Longman Grammar of Spoken and Written English",
          author: "Douglas Biber",
          isbn: "978-0582237254",
          description:
            "Corpus-based grammar reference with analysis of real English usage including sophisticated reported speech.",
        },
        {
          title: "The Cambridge Guide to English Usage",
          author: "Pam Peters",
          isbn: "978-0521621816",
          description:
            "Comprehensive usage guide with detailed coverage of advanced reported speech and literary language.",
        },
      ],
      websites: [
        {
          name: "Cambridge Dictionary Advanced",
          url: "https://dictionary.cambridge.org/grammar/british-grammar/reported-speech",
          description:
            "Advanced grammar reference with comprehensive coverage of sophisticated reported speech patterns.",
        },
        {
          name: "Oxford Learner's Dictionaries Advanced",
          url: "https://www.oxfordlearnersdictionaries.com/grammar/reported-speech",
          description:
            "Advanced grammar guide with examples and practice exercises on sophisticated reported speech.",
        },
        {
          name: "Merriam-Webster Advanced",
          url: "https://www.merriam-webster.com/words-at-play/reported-speech",
          description:
            "Advanced language reference with detailed explanations of complex reported speech structures.",
        },
        {
          name: "Collins Dictionary Advanced",
          url: "https://www.collinsdictionary.com/grammar/reported-speech",
          description:
            "Comprehensive grammar reference with advanced coverage of reported speech and literary usage.",
        },
        {
          name: "Macmillan Dictionary Advanced",
          url: "https://www.macmillandictionary.com/grammar/reported-speech",
          description:
            "Advanced dictionary and grammar reference with sophisticated reported speech examples.",
        },
      ],
    },
  },

  // Original ReportedQuestions Section (Preserved)
  ReportedQuestions: {
    definition:
      "Reported questions are used to report what someone else asked without quoting their exact words. They usually follow a reporting verb and change word order and tense.",
    types: {
      yesNoQuestions: {
        structure: "Reporting verb + if/whether + subject + verb",
        example: {
          direct: '"Are you coming?"',
          reported: "He asked if I was coming.",
        },
      },
      whQuestions: {
        structure: "Reporting verb + question word + subject + verb",
        example: {
          direct: '"Where do you live?"',
          reported: "She asked where I lived.",
        },
      },
    },
    tenseChanges: {
      rule: "Usually, tense shifts back one step (present → past, past → past perfect, etc.)",
      examples: [
        {
          direct: '"What are you doing?"',
          reported: "He asked what I was doing.",
        },
        {
          direct: '"Did you see her?"',
          reported: "She asked if I had seen her.",
        },
      ],
    },
    pronounAndTimeChanges: {
      rule: "Pronouns and time expressions often change according to the context.",
      examples: [
        {
          direct: '"When will you come?"',
          reported: "He asked when I would come.",
        },
        {
          direct: '"Where is the meeting?"',
          reported: "She asked where the meeting was.",
        },
      ],
    },
    commonReportingVerbs: ["ask", "inquire", "wonder", "want to know"],
    recognitionTips: [
      "Remove question word order (subject before verb).",
      "Use 'if' or 'whether' for yes/no questions.",
      "Use question word for wh- questions.",
      "Change tense, pronouns, and time markers accordingly.",
    ],
    commonErrors: [
      "Incorrect: She asked where do you live. ❌ → Correct: She asked where you live. ✅",
      "Incorrect: He asked if am I coming. ❌ → Correct: He asked if I was coming. ✅",
      "Incorrect: She asked did you see him. ❌ → Correct: She asked if I had seen him. ✅",
    ],
  },

  // Advanced Reported Question Patterns and Constructions
  advancedReportedQuestionPatterns: {
    concept: "Advanced patterns and constructions involving reported questions",
    embeddedQuestions: {
      pattern: "Reporting questions with embedded clauses and indirect speech",
      examples: [
        "He asked if I knew where she lived.",
        "She asked if I could tell her what time it was.",
        "They asked if we remembered how to get there.",
      ],
    },
    politeRequests: {
      pattern: "Reporting requests and polite questions as indirect questions",
      examples: [
        "He asked if I could help him.",
        "She asked if I would mind opening the window.",
        "They asked if we could wait a moment.",
      ],
    },
    negativeQuestions: {
      pattern:
        "Reporting negative questions and questions with negative meaning",
      examples: [
        "He asked if I didn’t like pizza.",
        "She asked why I hadn’t called her.",
      ],
    },
    formalInquiries: {
      pattern:
        "Reporting formal and professional questions in business and official settings",
      examples: [
        "The manager wanted to know if the report was finished.",
        "The official inquired whether the documents had been received.",
        "The committee asked when the meeting would begin.",
      ],
    },
  },

  // Reported Question Collocations and Fixed Expressions
  reportedQuestionCollocations: {
    concept:
      "Common collocations and fixed expressions involving reported questions",
    reportingVerbs: {
      pattern: "Common reporting verbs for reported questions",
      examples: [
        "ask, inquire, wonder, want to know, demand, request, question, query",
      ],
    },
    timeExpressions: {
      pattern: "Time expressions that change in reported questions",
      examples: [
        "now → then",
        "today → that day",
        "tomorrow → the next day",
        "yesterday → the day before",
        "here → there",
      ],
    },
    modalVerbs: {
      pattern: "Modal verbs that change in reported questions",
      examples: [
        "can → could",
        "will → would",
        "may → might",
        "shall → should",
      ],
    },
  },

  // Reported Question Usage in Different Genres
  reportedQuestionGenreUsage: {
    concept:
      "Reported question patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and precise reported question usage",
      examples: [
        "The manager wanted to know if the report was finished.",
        "The official inquired whether the documents had been received.",
        "The committee asked when the meeting would begin.",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational reported question usage",
      examples: [
        "He asked if I was coming.",
        "She asked where I lived.",
        "They asked if we were ready.",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic reported question structures",
      examples: [
        "The researcher asked whether participants had completed the task.",
        "The survey inquired how often respondents used the service.",
        "The manager wanted to know if the report was finished.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive reported question usage",
      examples: [
        "He wondered what the future would bring.",
        "She questioned whether her decision was right.",
        "They asked themselves if they had made the right choice.",
      ],
    },
  },

  // Reported Question Frequency and Register
  reportedQuestionFrequencyAndRegister: {
    concept: "Frequency and register considerations in reported question usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used reported question combinations",
      examples: [
        "He asked if I was coming. (very common)",
        "She asked where I lived. (very common)",
        "They asked if we were ready. (common)",
        "I asked who was at the door. (common)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise reported question usage",
      examples: [
        "The manager wanted to know if the report was finished.",
        "The official inquired whether the documents had been received.",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed reported question usage",
      examples: [
        "He asked if I was coming.",
        "She asked where I lived.",
        "They asked if we were ready.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical reported question usage",
      examples: [
        "The system asked whether the user had entered the correct password.",
        "The application inquired if the data was valid.",
      ],
    },
  },

  // Reported Question Assessment and Evaluation
  reportedQuestionAssessment: {
    concept:
      "Assessment criteria and evaluation methods for reported question usage",
    assessmentCriteria: {
      accuracy: "Correct reported question structure and form",
      appropriateness: "Appropriate reported question choice for context",
      register: "Appropriate register usage",
      fluency: "Natural reported question usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with reported question focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic yes/no reported questions",
      A2: "Wh- reported questions, basic tense changes",
      B1: "Perfect tenses, modals, indirect objects",
      B2: "Embedded clauses, reported requests, negative questions",
      C1: "Academic and formal reported questions",
      C2: "Mastery in all contexts including literary and philosophical usage",
    },
  },

  // Reported Question Learning Strategies
  reportedQuestionLearningStrategies: {
    concept:
      "Effective strategies for learning and mastering reported questions",
    recognitionStrategies: {
      strategy: "Identifying reported question patterns and structures",
      techniques: [
        "Learn basic reported question forms",
        "Recognize tense and pronoun changes",
        "Identify reporting verbs and indirect structures",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily reported question exercises",
        "Reading with reported question focus",
        "Writing sentences with different patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing reported question patterns and rules",
      techniques: [
        "Learn reported questions by category",
        "Remember tense and pronoun change rules",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying reported question rules in communication",
      techniques: [
        "Start with basic yes/no and wh- questions",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Reported Questions in Language Tests
  reportedQuestionsInTests: {
    concept: "Reported questions in standardized language tests",
    testTypes: {
      TOEFL: "Academic reported questions and formal usage",
      IELTS: "Both academic and general reported question usage",
      Cambridge: "British English reported question variations",
      TOEIC: "Business and professional reported question usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct reported question",
      sentenceCompletion: "Complete with correct reported question",
      errorIdentification: "Find reported question errors",
      textEditing: "Correct reported question usage in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify reported question patterns",
      contextAnalysis: "Analyze context for appropriate usage",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Reported Question Mistakes
  commonReportedQuestionMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      wrongWordOrder: {
        error: "Using question word order instead of statement word order",
        example: "She asked where do you live. ❌",
        correction: "She asked where you live. ✅",
        explanation: "Use statement word order in reported questions.",
      },
      missingIfWhether: {
        error: "Omitting 'if' or 'whether' in yes/no reported questions",
        example: "He asked am I coming. ❌",
        correction: "He asked if I was coming. ✅",
        explanation: "Use 'if' or 'whether' for yes/no questions.",
      },
      wrongTense: {
        error: "Not shifting tense back in reported questions",
        example: "She asked did you see him. ❌",
        correction: "She asked if I had seen him. ✅",
        explanation: "Shift tense back one step in reported questions.",
      },
      wrongPronoun: {
        error: "Not changing pronouns/time expressions as needed",
        example: "She asked where was the meeting. ❌",
        correction: "She asked where the meeting was. ✅",
        explanation: "Change pronouns and time expressions for context.",
      },
    },
    preventionStrategies: {
      wordOrderPractice: "Practice statement word order in reported questions",
      ifWhetherPractice: "Learn to use 'if' or 'whether' for yes/no questions",
      tensePractice: "Practice tense backshift in reported questions",
      pronounPractice: "Practice changing pronouns and time expressions",
    },
  },
};

const ReportedQuestionsData = {
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
      yesNoQuestions: {
        concept: "Reporting simple yes/no questions using 'if' or 'whether'.",
        patterns: [
          'Direct: "Are you happy?" → Reported: He asked if I was happy.',
          'Direct: "Is it raining?" → Reported: She asked if it was raining.',
        ],
        examples: [
          "He asked if I was happy.",
          "She asked if it was raining.",
          "They asked if we were ready.",
          "I asked if she was at home.",
        ],
        exercises: [
          'Convert: "Are you tired?" → He asked if ___',
          'Convert: "Is it cold?" → She asked if ___',
          'Convert: "Are they here?" → I asked if ___',
        ],
      },
    },
  
    // A2 Level - Elementary Reported Questions
    A2: {
      definition: "Wh- reported questions and basic tense changes.",
      whQuestions: {
        concept:
          "Reporting wh- questions using question words (what, where, when, who, why, how).",
        patterns: [
          'Direct: "Where do you live?" → Reported: She asked where I lived.',
          'Direct: "What is your name?" → Reported: He asked what my name was.',
        ],
        examples: [
          "She asked where I lived.",
          "He asked what my name was.",
          "They asked when we would arrive.",
          "I asked who was at the door.",
        ],
      },
      basicTenseChanges: {
        concept: "Applying basic tense backshift in reported questions.",
        patterns: [
          "Present simple → Past simple",
          "Present continuous → Past continuous",
          "Will → Would",
        ],
        examples: [
          'Direct: "Do you like coffee?" → Reported: She asked if I liked coffee.',
          'Direct: "Are you coming?" → Reported: He asked if I was coming.',
          'Direct: "Will you help me?" → Reported: They asked if I would help them.',
        ],
      },
      exercises: [
        'Convert: "Where do you live?" → She asked where ___',
        'Convert: "Do you like coffee?" → She asked if ___',
        'Convert: "Will you help me?" → They asked if ___',
      ],
    },
  
    // B1 Level - Intermediate Reported Questions
    B1: {
      definition:
        "Reported questions with perfect tenses, modal verbs, and indirect objects.",
      perfectTenseQuestions: {
        concept: "Reporting questions with perfect tenses and modals.",
        patterns: [
          "Present perfect → Past perfect",
          "Can → Could",
          "May → Might",
        ],
        examples: [
          'Direct: "Have you finished?" → Reported: He asked if I had finished.',
          'Direct: "Can you swim?" → Reported: She asked if I could swim.',
          'Direct: "May I leave?" → Reported: He asked if he might leave.',
        ],
      },
      indirectObjects: {
        concept:
          "Reporting questions with indirect objects and more complex structures.",
        patterns: [
          'Direct: "Who did you give the book to?" → Reported: She asked who I had given the book to.',
          'Direct: "What did you buy for her?" → Reported: He asked what I had bought for her.',
        ],
        examples: [
          "She asked who I had given the book to.",
          "He asked what I had bought for her.",
          "They asked where we had put the keys.",
        ],
      },
      exercises: [
        'Convert: "Have you finished?" → He asked if ___',
        'Convert: "Can you swim?" → She asked if ___',
        'Convert: "Who did you give the book to?" → She asked who ___',
      ],
    },
  
    // B2 Level - Upper Intermediate Reported Questions
    B2: {
      definition:
        "Advanced reported questions with embedded clauses, reported requests, and negative questions.",
      embeddedClauses: {
        concept: "Reporting questions with embedded clauses and indirect speech.",
        patterns: [
          'Direct: "Do you know where she lives?" → Reported: He asked if I knew where she lived.',
          'Direct: "Can you tell me what time it is?" → Reported: She asked if I could tell her what time it was.',
        ],
        examples: [
          "He asked if I knew where she lived.",
          "She asked if I could tell her what time it was.",
          "They asked if we remembered how to get there.",
        ],
      },
      reportedRequests: {
        concept: "Reporting requests and polite questions as indirect questions.",
        patterns: [
          'Direct: "Could you help me?" → Reported: He asked if I could help him.',
          'Direct: "Would you mind opening the window?" → Reported: She asked if I would mind opening the window.',
        ],
        examples: [
          "He asked if I could help him.",
          "She asked if I would mind opening the window.",
          "They asked if we could wait a moment.",
        ],
      },
      negativeQuestions: {
        concept:
          "Reporting negative questions and questions with negative meaning.",
        patterns: [
          'Direct: "Don’t you like pizza?" → Reported: He asked if I didn’t like pizza.',
        ],
        examples: [
          "He asked if I didn’t like pizza.",
          "She asked why I hadn’t called her.",
        ],
      },
      exercises: [
        'Convert: "Do you know where she lives?" → He asked if ___',
        'Convert: "Could you help me?" → He asked if ___',
        'Convert: "Don’t you like pizza?" → He asked if ___',
      ],
    },
  
    // C1 Level - Advanced Reported Questions
    C1: {
      definition:
        "Sophisticated reported questions for academic, professional, and formal contexts.",
      academicUsage: {
        concept:
          "Reporting research questions, survey items, and formal inquiries.",
        patterns: [
          "The researcher asked whether participants had completed the task.",
          "The survey inquired how often respondents used the service.",
        ],
        examples: [
          "The researcher asked whether participants had completed the task.",
          "The survey inquired how often respondents used the service.",
          "The manager wanted to know if the report was finished.",
        ],
      },
      formalInquiries: {
        concept:
          "Reporting formal and professional questions in business and official settings.",
        patterns: [
          "The manager wanted to know if the report was finished.",
          "The official inquired whether the documents had been received.",
        ],
        examples: [
          "The manager wanted to know if the report was finished.",
          "The official inquired whether the documents had been received.",
          "The committee asked when the meeting would begin.",
        ],
      },
      exercises: [
        'Convert: "Have you completed the task?" → The researcher asked whether ___',
        'Convert: "When will the meeting begin?" → The committee asked when ___',
        'Convert: "Was the report finished?" → The manager wanted to know if ___',
      ],
    },
  
    // C2 Level - Mastery Reported Questions
    C2: {
      definition:
        "Mastery of reported questions in all contexts, including nuanced, creative, and specialized usage.",
      literaryUsage: {
        concept:
          "Reported questions in literary, journalistic, and creative writing.",
        patterns: [
          "He wondered what the future would bring.",
          "She questioned whether her decision was right.",
        ],
        examples: [
          "He wondered what the future would bring.",
          "She questioned whether her decision was right.",
          "They asked themselves if they had made the right choice.",
        ],
      },
      philosophicalUsage: {
        concept:
          "Reported questions in philosophical, abstract, or introspective contexts.",
        patterns: [
          "He asked himself what it meant to be free.",
          "She wondered why people exist.",
        ],
        examples: [
          "He asked himself what it meant to be free.",
          "She wondered why people exist.",
          "They questioned what truth really is.",
        ],
      },
      exercises: [
        'Convert: "What will the future bring?" → He wondered what ___',
        'Convert: "Why do people exist?" → She wondered why ___',
        'Convert: "Did they make the right choice?" → They asked themselves if ___',
      ],
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
  
    // Reported Question Exercises and Practice Activities
    reportedQuestionExercises: {
      concept: "Comprehensive exercises for practicing reported questions",
      basicExercises: {
        type: "Simple reported question usage",
        exercises: [
          'Convert: "Are you tired?" → He asked if ___',
          'Convert: "Where do you live?" → She asked where ___',
          'Convert: "Have you finished?" → He asked if ___',
          'Convert: "Can you swim?" → She asked if ___',
        ],
      },
      intermediateExercises: {
        type: "Complex reported question usage",
        exercises: [
          'Convert: "Who did you give the book to?" → She asked who ___',
          'Convert: "Do you know where she lives?" → He asked if ___',
          'Convert: "Could you help me?" → He asked if ___',
          'Convert: "Don’t you like pizza?" → He asked if ___',
        ],
      },
      advancedExercises: {
        type: "Advanced reported question patterns",
        exercises: [
          'Convert: "Have you completed the task?" → The researcher asked whether ___',
          'Convert: "When will the meeting begin?" → The committee asked when ___',
          'Convert: "What will the future bring?" → He wondered what ___',
          'Convert: "Why do people exist?" → She wondered why ___',
        ],
      },
      errorCorrection: {
        type: "Identify and correct reported question errors",
        exercises: [
          "Incorrect: She asked where do you live. → ___",
          "Incorrect: He asked if am I coming. → ___",
          "Incorrect: She asked did you see him. → ___",
          "Incorrect: She asked where was the meeting. → ___",
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
  
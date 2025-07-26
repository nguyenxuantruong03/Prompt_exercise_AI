const tenseTenseShiftInReportedSpeechData = {
  // --- Comprehensive Tense Shift in Reported Speech Reference ---
  // Definition of Tense Shift in Reported Speech
  tenseShiftInReportedSpeechDefinition: {
    concept:
      "Tense shift in reported speech occurs when the reporting verb is in the past tense, causing a systematic backshift of the original tense in the direct speech.",
    importance:
      "Essential for accurate reporting, maintaining temporal relationships, and avoiding confusion in both spoken and written English.",
    corePrinciple:
      "Uses systematic backshifting of tenses when reporting past speech, with exceptions for universal truths and current relevance.",
    scope:
      "Applies to all communicative contexts where indirect reporting of speech is needed.",
  },

  // A1 Level - Basic Tense Shift in Reported Speech (Beginner)
  A1: {
    definition:
      "Basic understanding of tense shift with simple present and past tenses.",
    presentSimpleShift: {
      concept: "Present simple shifts to past simple in reported speech.",
      patterns: [
        "Direct: 'I am happy.' → Reported: He said that he was happy.",
        "Direct: 'I like coffee.' → Reported: She said that she liked coffee.",
      ],
      examples: [
        "Direct: 'I am a student.' → Reported: He said that he was a student.",
        "Direct: 'I live here.' → Reported: She said that she lived there.",
        "Direct: 'I work in a bank.' → Reported: They said that they worked in a bank.",
      ],
      exercises: [
        "Convert: 'I am tired.' → He said that ___",
        "Convert: 'I like pizza.' → She said that ___",
        "Convert: 'I study English.' → They said that ___",
      ],
    },
    basicReportingVerbs: {
      concept: "Using basic reporting verbs like 'said' and 'told'.",
      patterns: [
        "Subject + said + (that) + reported clause",
        "Subject + told + object + (that) + reported clause",
      ],
      examples: [
        "He said that he was tired.",
        "She told me that she liked coffee.",
        "They said that they were students.",
      ],
      exercises: [
        "Report this: 'I am happy.' → He said that ___",
        "Report this: 'I like music.' → She told me that ___",
      ],
    },
  },

  // A2 Level - Elementary Tense Shift in Reported Speech
  A2: {
    definition:
      "Present continuous and future tense shifts, and basic exceptions.",
    presentContinuousShift: {
      concept:
        "Present continuous shifts to past continuous in reported speech.",
      patterns: [
        "Direct: 'I am reading.' → Reported: He said that he was reading.",
        "Direct: 'I am working.' → Reported: She said that she was working.",
      ],
      examples: [
        "Direct: 'I am studying.' → Reported: He said that he was studying.",
        "Direct: 'I am cooking dinner.' → Reported: She said that she was cooking dinner.",
        "Direct: 'I am waiting for you.' → Reported: They said that they were waiting for me.",
      ],
      exercises: [
        "Convert: 'I am reading a book.' → He said that ___",
        "Convert: 'I am working late.' → She said that ___",
        "Convert: 'I am studying English.' → They said that ___",
      ],
    },
    futureWillShift: {
      concept: "Future with 'will' shifts to 'would' in reported speech.",
      patterns: [
        "Direct: 'I will help you.' → Reported: He said that he would help me.",
        "Direct: 'I will come tomorrow.' → Reported: She said that she would come the next day.",
      ],
      examples: [
        "Direct: 'I will call you.' → Reported: He said that he would call me.",
        "Direct: 'I will finish the work.' → Reported: She said that she would finish the work.",
        "Direct: 'I will be there.' → Reported: They said that they would be there.",
      ],
      exercises: [
        "Convert: 'I will help you.' → He said that ___",
        "Convert: 'I will come tomorrow.' → She said that ___",
        "Convert: 'I will finish soon.' → They said that ___",
      ],
    },
    basicExceptions: {
      concept: "Basic exceptions when tense shift is not needed.",
      patterns: [
        "Universal truths remain in present tense",
        "When the situation is still true or relevant",
      ],
      examples: [
        "Direct: 'The Earth is round.' → Reported: He said that the Earth is round.",
        "Direct: 'I live in London.' → Reported: She said that she lives in London. (if still true)",
      ],
      exercises: [
        "Convert: 'The sun rises in the east.' → He said that ___",
        "Convert: 'I work here.' → She said that ___ (if still working there)",
      ],
    },
  },

  // B1 Level - Intermediate Tense Shift in Reported Speech
  B1: {
    definition:
      "Perfect tenses, modal verbs, and more complex reporting structures.",
    presentPerfectShift: {
      concept: "Present perfect shifts to past perfect in reported speech.",
      patterns: [
        "Direct: 'I have finished.' → Reported: He said that he had finished.",
        "Direct: 'I have been to Paris.' → Reported: She said that she had been to Paris.",
      ],
      examples: [
        "Direct: 'I have completed the work.' → Reported: He said that he had completed the work.",
        "Direct: 'I have never seen this movie.' → Reported: She said that she had never seen that movie.",
        "Direct: 'I have lived here for 5 years.' → Reported: They said that they had lived there for 5 years.",
      ],
      exercises: [
        "Convert: 'I have finished my homework.' → He said that ___",
        "Convert: 'I have been to Italy.' → She said that ___",
        "Convert: 'I have never eaten sushi.' → They said that ___",
      ],
    },
    modalVerbShifts: {
      concept: "Modal verbs shift in reported speech.",
      patterns: [
        "can → could",
        "will → would",
        "may → might",
        "shall → should",
      ],
      examples: [
        "Direct: 'I can swim.' → Reported: He said that he could swim.",
        "Direct: 'I may come late.' → Reported: She said that she might come late.",
        "Direct: 'I shall help you.' → Reported: They said that they should help me.",
      ],
      exercises: [
        "Convert: 'I can speak French.' → He said that ___",
        "Convert: 'I may be late.' → She said that ___",
        "Convert: 'I shall return.' → They said that ___",
      ],
    },
    pastSimpleShift: {
      concept: "Past simple shifts to past perfect in reported speech.",
      patterns: [
        "Direct: 'I saw her yesterday.' → Reported: He said that he had seen her the day before.",
        "Direct: 'I went to the party.' → Reported: She said that she had gone to the party.",
      ],
      examples: [
        "Direct: 'I met him last week.' → Reported: He said that he had met him the week before.",
        "Direct: 'I bought a new car.' → Reported: She said that she had bought a new car.",
        "Direct: 'I visited my parents.' → Reported: They said that they had visited their parents.",
      ],
      exercises: [
        "Convert: 'I saw the movie yesterday.' → He said that ___",
        "Convert: 'I went to Paris last year.' → She said that ___",
        "Convert: 'I met her last month.' → They said that ___",
      ],
    },
  },

  // B2 Level - Upper Intermediate Tense Shift in Reported Speech
  B2: {
    definition:
      "Complex tense shifts, conditional sentences, and advanced reporting structures.",
    pastContinuousShift: {
      concept:
        "Past continuous shifts to past perfect continuous in reported speech.",
      patterns: [
        "Direct: 'I was sleeping.' → Reported: He said that he had been sleeping.",
        "Direct: 'I was working.' → Reported: She said that she had been working.",
      ],
      examples: [
        "Direct: 'I was studying when you called.' → Reported: He said that he had been studying when I called.",
        "Direct: 'I was cooking dinner.' → Reported: She said that she had been cooking dinner.",
        "Direct: 'I was waiting for you.' → Reported: They said that they had been waiting for me.",
      ],
      exercises: [
        "Convert: 'I was reading when you arrived.' → He said that ___",
        "Convert: 'I was working late.' → She said that ___",
        "Convert: 'I was thinking about you.' → They said that ___",
      ],
    },
    conditionalSentences: {
      concept: "Conditional sentences in reported speech.",
      patterns: [
        "First conditional: 'If it rains, I will stay home.' → He said that if it rained, he would stay home.",
        "Second conditional: 'If I had money, I would travel.' → She said that if she had money, she would travel.",
      ],
      examples: [
        "Direct: 'If you study hard, you will pass.' → Reported: He said that if I studied hard, I would pass.",
        "Direct: 'If I were rich, I would buy a house.' → Reported: She said that if she were rich, she would buy a house.",
        "Direct: 'If it rains tomorrow, I won't go.' → Reported: They said that if it rained the next day, they wouldn't go.",
      ],
      exercises: [
        "Convert: 'If you help me, I will help you.' → He said that ___",
        "Convert: 'If I had time, I would visit you.' → She said that ___",
        "Convert: 'If it's sunny, we'll go to the beach.' → They said that ___",
      ],
    },
    advancedReportingVerbs: {
      concept: "Using advanced reporting verbs and structures.",
      patterns: [
        "Subject + explained + (that) + reported clause",
        "Subject + mentioned + (that) + reported clause",
        "Subject + suggested + (that) + reported clause",
      ],
      examples: [
        "He explained that he had been working late.",
        "She mentioned that she had visited Paris.",
        "They suggested that we should meet tomorrow.",
      ],
      exercises: [
        "Report using 'explained': 'I was busy.' → He explained that ___",
        "Report using 'mentioned': 'I like this place.' → She mentioned that ___",
        "Report using 'suggested': 'We should go early.' → They suggested that ___",
      ],
    },
  },

  // C1 Level - Advanced Tense Shift in Reported Speech
  C1: {
    definition:
      "Sophisticated tense shifts for academic, professional, and formal contexts.",
    academicReporting: {
      concept: "Academic and formal reporting with precise tense shifts.",
      patterns: [
        "Research findings and academic statements",
        "Professional reports and formal documentation",
      ],
      examples: [
        "The researcher stated that the results had indicated a significant correlation.",
        "The report mentioned that the company had achieved its targets.",
        "The study found that participants had responded positively to the treatment.",
      ],
      exercises: [
        "Report this academic statement: 'The study shows positive results.' → The researcher stated that ___",
        "Report this finding: 'The data indicates a trend.' → The report mentioned that ___",
        "Report this conclusion: 'The experiment proves the theory.' → The study found that ___",
      ],
    },
    complexTimeExpressions: {
      concept: "Complex time expressions and their shifts in reported speech.",
      patterns: [
        "now → then",
        "today → that day",
        "tomorrow → the next day",
        "yesterday → the day before",
        "this week → that week",
        "next month → the following month",
      ],
      examples: [
        "Direct: 'I will finish this today.' → Reported: He said that he would finish that that day.",
        "Direct: 'I saw her yesterday.' → Reported: She said that she had seen her the day before.",
        "Direct: 'I am busy this week.' → Reported: They said that they were busy that week.",
      ],
      exercises: [
        "Convert: 'I will call you tomorrow.' → He said that ___",
        "Convert: 'I was there yesterday.' → She said that ___",
        "Convert: 'I am working this week.' → They said that ___",
      ],
    },
    mixedTenseReporting: {
      concept: "Reporting mixed tenses and complex temporal relationships.",
      patterns: [
        "Combining different tenses in one reported statement",
        "Maintaining temporal relationships in complex narratives",
      ],
      examples: [
        "He said that he had been working there for five years and that he would continue for another two.",
        "She mentioned that she had studied French in college and that she still spoke it occasionally.",
        "They explained that they had moved to the city last year and that they were planning to stay.",
      ],
      exercises: [
        "Report this mixed statement: 'I have lived here for 10 years and I will stay for 5 more.' → He said that ___",
        "Report this: 'I studied medicine and I am now a doctor.' → She said that ___",
        "Report this: 'I worked there before and I am working there again.' → They said that ___",
      ],
    },
  },

  // C2 Level - Mastery Tense Shift in Reported Speech
  C2: {
    definition:
      "Mastery of tense shifts in all contexts, including nuanced, creative, and specialized usage.",
    literaryReporting: {
      concept: "Tense shifts in literary, journalistic, and creative contexts.",
      patterns: [
        "Narrative reporting with stylistic considerations",
        "Creative manipulation of tense shifts for effect",
      ],
      examples: [
        "The narrator recounted that the protagonist had wandered through the labyrinthine streets, searching for meaning in a world that seemed to have forgotten him.",
        "The journalist reported that the witness had described the scene as 'surreal,' adding that nothing could have prepared them for what they had seen.",
        "The biographer noted that the artist had struggled with his demons throughout his life, yet had managed to create works of extraordinary beauty.",
      ],
      exercises: [
        "Write a literary report: 'The hero faced many challenges.' → The narrator recounted that ___",
        "Create a journalistic report: 'The event was unforgettable.' → The journalist reported that ___",
        "Compose a biographical note: 'The writer overcame difficulties.' → The biographer noted that ___",
      ],
    },
    philosophicalReporting: {
      concept:
        "Reporting philosophical, abstract, or introspective statements.",
      patterns: [
        "Abstract concepts and philosophical ideas",
        "Introspective and reflective statements",
      ],
      examples: [
        "The philosopher argued that human consciousness had evolved through millennia of adaptation and that it continued to develop in ways we barely understood.",
        "The poet reflected that beauty had always existed in the eye of the beholder and that it would continue to do so as long as humans could perceive it.",
        "The mystic claimed that the soul had journeyed through countless lifetimes and that it would continue its eternal quest for enlightenment.",
      ],
      exercises: [
        "Report this philosophical statement: 'Truth is relative.' → The philosopher argued that ___",
        "Report this reflection: 'Love transcends time.' → The poet reflected that ___",
        "Report this claim: 'The spirit is eternal.' → The mystic claimed that ___",
      ],
    },
  },

  // Original TenseShiftInReportedSpeech Section (Preserved)
  TenseShiftInReportedSpeech: {
    definition:
      "Tense shift happens in reported speech when the reporting verb is in the past tense, causing a backshift of the original tense in the direct speech.",
    rules: {
      presentSimple: {
        shiftTo: "pastSimple",
        example: {
          direct: '"I live here."',
          reported: "He said that he lived there.",
        },
      },
      presentContinuous: {
        shiftTo: "pastContinuous",
        example: {
          direct: '"I am reading."',
          reported: "She said that she was reading.",
        },
      },
      presentPerfect: {
        shiftTo: "pastPerfect",
        example: {
          direct: '"I have finished."',
          reported: "He said that he had finished.",
        },
      },
      pastSimple: {
        shiftTo: "pastPerfect",
        example: {
          direct: '"I saw her yesterday."',
          reported: "She said that she had seen her the day before.",
        },
      },
      pastContinuous: {
        shiftTo: "pastPerfectContinuous",
        example: {
          direct: '"I was sleeping."',
          reported: "He said that he had been sleeping.",
        },
      },
      modalVerbs: {
        will: "would",
        can: "could",
        shall: "should",
        may: "might",
      },
      noShiftNeeded: [
        "When the reported statement is still true or always true.",
        "When the reporting verb is in the present or future tense.",
      ],
    },
    notes: [
      "Backshift is optional when reporting something that is still true.",
      "Some verbs and expressions do not require tense shift (e.g., universal truths).",
    ],
    commonErrors: [
      "Incorrect: He said that he is tired. ❌ → Correct: He said that he was tired. ✅",
      "Incorrect: She told me that has finished. ❌ → Correct: She told me that she had finished. ✅",
      "Incorrect: He said that he will come. ❌ → Correct: He said that he would come. ✅",
    ],
  },

  // Advanced Tense Shift Patterns and Constructions
  advancedTenseShiftPatterns: {
    concept:
      "Advanced patterns and constructions involving tense shifts in reported speech",
    conditionalShifts: {
      pattern: "Conditional sentences in reported speech",
      examples: [
        "Direct: 'If it rains, I will stay home.' → He said that if it rained, he would stay home.",
        "Direct: 'If I had money, I would travel.' → She said that if she had money, she would travel.",
        "Direct: 'If you had told me, I would have helped.' → They said that if I had told them, they would have helped.",
      ],
    },
    mixedTenseReporting: {
      pattern: "Reporting statements with multiple tenses",
      examples: [
        "He said that he had been working there for five years and that he would continue for another two.",
        "She mentioned that she had studied French in college and that she still spoke it occasionally.",
        "They explained that they had moved to the city last year and that they were planning to stay.",
      ],
    },
    complexTimeExpressions: {
      pattern: "Complex time expressions and their shifts",
      examples: [
        "now → then",
        "today → that day",
        "tomorrow → the next day",
        "yesterday → the day before",
        "this week → that week",
        "next month → the following month",
      ],
    },
    academicReporting: {
      pattern: "Academic and formal reporting with precise tense shifts",
      examples: [
        "The researcher stated that the results had indicated a significant correlation.",
        "The report mentioned that the company had achieved its targets.",
        "The study found that participants had responded positively to the treatment.",
      ],
    },
  },

  // Tense Shift Collocations and Fixed Expressions
  tenseShiftCollocations: {
    concept:
      "Common collocations and fixed expressions involving tense shifts in reported speech",
    reportingVerbs: {
      pattern: "Common reporting verbs for tense shifts",
      examples: [
        "said, told, explained, mentioned, suggested, claimed, argued, noted, reported, stated",
      ],
    },
    timeExpressions: {
      pattern: "Time expressions that change in reported speech",
      examples: [
        "now → then",
        "today → that day",
        "tomorrow → the next day",
        "yesterday → the day before",
        "here → there",
        "this → that",
      ],
    },
    modalVerbs: {
      pattern: "Modal verbs that change in reported speech",
      examples: [
        "can → could",
        "will → would",
        "may → might",
        "shall → should",
        "must → had to",
      ],
    },
  },

  // Tense Shift Usage in Different Genres
  tenseShiftGenreUsage: {
    concept: "Tense shift patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and precise tense shift usage",
      examples: [
        "The manager stated that the project had been completed on time.",
        "The report mentioned that the company had achieved its objectives.",
        "The committee noted that the proposal had been approved.",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational tense shift usage",
      examples: [
        "He said that he was tired.",
        "She told me that she liked the movie.",
        "They mentioned that they were going to the party.",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic tense shift structures",
      examples: [
        "The researcher stated that the results had indicated a significant correlation.",
        "The study found that participants had responded positively to the treatment.",
        "The analysis showed that the data had supported the hypothesis.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive tense shift usage",
      examples: [
        "The narrator recounted that the protagonist had wandered through the labyrinthine streets.",
        "The poet reflected that beauty had always existed in the eye of the beholder.",
        "The mystic claimed that the soul had journeyed through countless lifetimes.",
      ],
    },
  },

  // Tense Shift Frequency and Register
  tenseShiftFrequencyAndRegister: {
    concept: "Frequency and register considerations in tense shift usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used tense shift combinations",
      examples: [
        "He said that he was tired. (very common)",
        "She told me that she liked coffee. (very common)",
        "They mentioned that they were busy. (common)",
        "He explained that he had finished. (common)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise tense shift usage",
      examples: [
        "The manager stated that the project had been completed.",
        "The report mentioned that the company had achieved its targets.",
        "The committee noted that the proposal had been approved.",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed tense shift usage",
      examples: [
        "He said that he was tired.",
        "She told me that she liked the movie.",
        "They mentioned that they were going to the party.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical tense shift usage",
      examples: [
        "The system reported that the process had completed successfully.",
        "The application indicated that the data had been saved.",
        "The device showed that the operation had finished.",
      ],
    },
  },

  // Tense Shift Exercises and Practice Activities
  tenseShiftExercises: {
    concept:
      "Comprehensive exercises for practicing tense shifts in reported speech",
    basicExercises: {
      type: "Simple tense shift usage",
      exercises: [
        "Convert: 'I am tired.' → He said that ___",
        "Convert: 'I like coffee.' → She said that ___",
        "Convert: 'I will help you.' → He said that ___",
        "Convert: 'I can swim.' → She said that ___",
      ],
    },
    intermediateExercises: {
      type: "Complex tense shift usage",
      exercises: [
        "Convert: 'I have finished my work.' → He said that ___",
        "Convert: 'I was studying when you called.' → She said that ___",
        "Convert: 'I saw her yesterday.' → They said that ___",
        "Convert: 'If it rains, I will stay home.' → He said that ___",
      ],
    },
    advancedExercises: {
      type: "Advanced tense shift patterns",
      exercises: [
        "Convert: 'I have been working here for 5 years and I will stay for 2 more.' → He said that ___",
        "Convert: 'I studied medicine and I am now a doctor.' → She said that ___",
        "Convert: 'The Earth is round.' → He said that ___",
        "Convert: 'I will call you tomorrow.' → She said that ___",
      ],
    },
    errorCorrection: {
      type: "Identify and correct tense shift errors",
      exercises: [
        "Incorrect: He said that he is tired. → ___",
        "Incorrect: She told me that has finished. → ___",
        "Incorrect: He said that he will come. → ___",
        "Incorrect: They said that they are working. → ___",
      ],
    },
  },

  // Tense Shift Assessment and Evaluation
  tenseShiftAssessment: {
    concept: "Assessment criteria and evaluation methods for tense shift usage",
    assessmentCriteria: {
      accuracy: "Correct tense shift application",
      appropriateness: "Appropriate tense shift choice for context",
      register: "Appropriate register usage",
      fluency: "Natural tense shift usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with tense shift focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic present simple to past simple shifts",
      A2: "Present continuous, future will, basic exceptions",
      B1: "Perfect tenses, modal verbs, past simple",
      B2: "Past continuous, conditionals, advanced reporting verbs",
      C1: "Academic reporting, complex time expressions, mixed tenses",
      C2: "Literary and philosophical reporting, creative usage",
    },
  },

  // Tense Shift Learning Strategies
  tenseShiftLearningStrategies: {
    concept:
      "Effective strategies for learning and mastering tense shifts in reported speech",
    recognitionStrategies: {
      strategy: "Identifying tense shift patterns and rules",
      techniques: [
        "Learn basic tense shift rules",
        "Recognize reporting verbs and structures",
        "Identify exceptions and special cases",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily tense shift exercises",
        "Reading with tense shift focus",
        "Writing sentences with different patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing tense shift patterns and rules",
      techniques: [
        "Learn tense shifts by category",
        "Remember time expression changes",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying tense shift rules in communication",
      techniques: [
        "Start with basic present to past shifts",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Tense Shifts in Language Tests
  tenseShiftsInTests: {
    concept: "Tense shifts in standardized language tests",
    testTypes: {
      TOEFL: "Academic tense shifts and formal usage",
      IELTS: "Both academic and general tense shift usage",
      Cambridge: "British English tense shift variations",
      TOEIC: "Business and professional tense shift usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct tense shift",
      sentenceCompletion: "Complete with correct tense shift",
      errorIdentification: "Find tense shift errors",
      textEditing: "Correct tense shift usage in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify tense shift patterns",
      contextAnalysis: "Analyze context for appropriate usage",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Tense Shift Mistakes
  commonTenseShiftMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      noTenseShift: {
        error: "Not shifting tense when reporting past speech",
        example: "He said that he is tired. ❌",
        correction: "He said that he was tired. ✅",
        explanation:
          "Shift present tense to past tense when reporting past speech.",
      },
      missingSubject: {
        error: "Omitting subject in reported clause",
        example: "She told me that has finished. ❌",
        correction: "She told me that she had finished. ✅",
        explanation: "Include the subject in the reported clause.",
      },
      wrongModalShift: {
        error: "Incorrect modal verb shifts",
        example: "He said that he will come. ❌",
        correction: "He said that he would come. ✅",
        explanation: "Shift 'will' to 'would' in reported speech.",
      },
      unnecessaryShift: {
        error: "Shifting tense when not needed",
        example: "He said that the Earth was round. ❌",
        correction: "He said that the Earth is round. ✅",
        explanation: "Don't shift universal truths or still-true statements.",
      },
    },
    preventionStrategies: {
      tenseShiftPractice: "Practice systematic tense shifts",
      subjectPractice: "Always include subjects in reported clauses",
      modalPractice: "Learn modal verb shift patterns",
      exceptionPractice: "Learn when not to shift tenses",
    },
  },
};

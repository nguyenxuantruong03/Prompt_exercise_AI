const SubjectVerbAgreementData = {
  // --- Comprehensive Subject-Verb Agreement Reference ---
  // Definition of Subject-Verb Agreement
  subjectVerbAgreementDefinition: {
    concept:
      "Subject-verb agreement is a grammatical rule that ensures the verb in a sentence matches the number and person of its subject.",
    importance:
      "Essential for clear, grammatically correct communication in English",
    corePrinciple:
      "The verb must agree with the subject in number (singular/plural) and person (first/second/third)",
    scope: "Applies to all tenses, moods, and aspects in English grammar",
  },

  // A1 Level - Basic Subject-Verb Agreement (Beginner)
  A1: {
    definition:
      "Basic subject-verb agreement with simple singular and plural subjects",
    basicSingularPluralAgreement: {
      concept:
        "Simple agreement between singular subjects and singular verbs, plural subjects and plural verbs",
      patterns: [
        "Singular subject + singular verb (he/she/it + -s)",
        "Plural subject + plural verb (they/we/you + base form)",
      ],
      examples: [
        "He works. / They work.",
        "She plays. / We play.",
        "It runs. / You run.",
      ],
      exercises: [
        "Complete: The cat ___ (sleep/sleeps)",
        "Complete: The dogs ___ (bark/barks)",
        "Complete: I ___ (like/likes) pizza",
      ],
    },
    simplePresentAgreement: {
      concept: "Basic present tense agreement patterns",
      rules: [
        "Third person singular adds -s to base verb",
        "All other persons use base form",
      ],
      examples: [
        "I speak English.",
        "You speak English.",
        "He speaks English.",
        "We speak English.",
        "They speak English.",
      ],
    },
    exercises: [
      "Choose the correct verb: The boy (play/plays) football.",
      "Choose the correct verb: The girls (sing/sings) beautifully.",
      "Choose the correct verb: My mother (cook/cooks) dinner.",
    ],
  },

  // A2 Level - Elementary Subject-Verb Agreement
  A2: {
    definition:
      "Subject-verb agreement with compound subjects and basic exceptions",
    compoundSubjectAgreement: {
      concept: "Agreement with subjects joined by 'and', 'or', 'nor'",
      patterns: [
        "Subjects joined by 'and' → plural verb",
        "Subjects joined by 'or'/'nor' → verb agrees with closer subject",
      ],
      examples: [
        "Tom and Jerry are friends.",
        "Neither the teacher nor the students have arrived.",
        "Either the cat or the dog is making noise.",
      ],
    },
    indefinitePronounAgreement: {
      concept: "Agreement with indefinite pronouns",
      rules: [
        "Everyone, someone, anyone, no one → singular",
        "Both, few, many, several → plural",
      ],
      examples: [
        "Everyone is here.",
        "Someone has left.",
        "Both are correct.",
        "Many have tried.",
      ],
    },
    exercises: [
      "Complete: Neither John nor Mary ___ (like/likes) coffee.",
      "Complete: Everyone ___ (want/wants) to go home.",
      "Complete: Both students ___ (study/studies) hard.",
    ],
  },

  // B1 Level - Intermediate Subject-Verb Agreement
  B1: {
    definition:
      "Subject-verb agreement with complex subjects and intermediate patterns",
    collectiveNounAgreement: {
      concept: "Agreement with collective nouns and group words",
      patterns: [
        "American English: collective nouns usually singular",
        "British English: collective nouns can be plural",
        "Context determines singular vs plural usage",
      ],
      examples: [
        "The team is winning. (AmE) / The team are winning. (BrE)",
        "The family has decided.",
        "The committee meets tomorrow.",
        "The audience were clapping. (BrE)",
      ],
    },
    uncountableNounAgreement: {
      concept: "Agreement with uncountable and abstract nouns",
      rules: [
        "Uncountable nouns always take singular verbs",
        "Abstract concepts are singular",
        "News, mathematics, physics are singular",
      ],
      examples: [
        "Water is essential for life.",
        "The news is good.",
        "Mathematics is difficult.",
        "Happiness comes from within.",
      ],
    },
    invertedSentenceAgreement: {
      concept: "Agreement in inverted sentences and questions",
      patterns: [
        "Here/there + be → verb agrees with following noun",
        "Questions: verb agrees with subject after inversion",
      ],
      examples: [
        "Here is the book. / Here are the books.",
        "There was a problem. / There were problems.",
        "Is the teacher here? / Are the students here?",
      ],
    },
    exercises: [
      "Complete: The committee ___ (meet/meets) every Monday.",
      "Complete: Here ___ (is/are) your keys.",
      "Complete: The news ___ (is/are) surprising.",
    ],
  },

  // B2 Level - Upper Intermediate Subject-Verb Agreement
  B2: {
    definition:
      "Advanced subject-verb agreement with complex structures and exceptions",
    amountExpressionAgreement: {
      concept: "Agreement with expressions of amount, time, money, distance",
      rules: [
        "Amounts of money/time/distance → singular verb",
        "Fractions → verb agrees with noun after 'of'",
        "Percentages → verb agrees with noun after 'of'",
      ],
      examples: [
        "Ten dollars is enough.",
        "Five years is a long time.",
        "Twenty kilometers is far.",
        "Half of the students are absent.",
        "One-third of the cake is gone.",
        "50% of the population lives in cities.",
      ],
    },
    titleAgreement: {
      concept: "Agreement with titles, names, and quoted material",
      rules: [
        "Titles of books, movies, songs → singular",
        "Names of companies, organizations → singular",
        "Quoted words → singular",
      ],
      examples: [
        "'The Lord of the Rings' is a great book.",
        "Microsoft is a technology company.",
        "'Hello' is a greeting.",
      ],
    },
    relativeClauseAgreement: {
      concept: "Agreement in relative clauses and complex sentences",
      patterns: [
        "Relative pronoun refers to antecedent",
        "Verb in relative clause agrees with antecedent",
        "Intervening phrases don't affect agreement",
      ],
      examples: [
        "The man who lives next door is a doctor.",
        "The books that are on the table belong to me.",
        "The list of items is on the desk.",
      ],
    },
    exercises: [
      "Complete: Three hours ___ (is/are) too long to wait.",
      "Complete: The book that ___ (contain/contains) the answers is here.",
      "Complete: 75% of the students ___ (pass/passes) the exam.",
    ],
  },

  // C1 Level - Advanced Subject-Verb Agreement
  C1: {
    definition:
      "Sophisticated subject-verb agreement with academic and formal contexts",
    academicWritingAgreement: {
      concept: "Subject-verb agreement in academic and formal writing",
      patterns: [
        "Data can be singular or plural (datum/data)",
        "Research is usually singular",
        "Statistics can be singular or plural",
        "Media is plural (medium/media)",
      ],
      examples: [
        "The data shows a clear trend. / The data show clear trends.",
        "Research indicates that...",
        "Statistics prove the point. / Statistics are misleading.",
        "The media are reporting the story.",
      ],
    },
    complexSubjectAgreement: {
      concept: "Agreement with complex subjects and intervening phrases",
      patterns: [
        "Subject separated from verb by long phrases",
        "Prepositional phrases don't affect agreement",
        "Parenthetical expressions don't affect agreement",
      ],
      examples: [
        "The author, along with his editors, is reviewing the manuscript.",
        "The quality of the products, not the quantity, matters most.",
        "The teacher, as well as the students, was surprised.",
      ],
    },
    subjunctiveAgreement: {
      concept: "Subject-verb agreement in subjunctive mood",
      patterns: [
        "Subjunctive uses base form regardless of subject",
        "Common in formal requests and hypothetical situations",
        "That-clauses after certain verbs",
      ],
      examples: [
        "I suggest that he go to the doctor.",
        "It's important that she be on time.",
        "The committee recommended that the proposal be accepted.",
      ],
    },
    exercises: [
      "Complete: The research ___ (indicate/indicates) a correlation.",
      "Complete: I recommend that he ___ (attend/attends) the meeting.",
      "Complete: The professor, together with his assistants, ___ (conduct/conducts) the study.",
    ],
  },

  // C2 Level - Mastery Subject-Verb Agreement
  C2: {
    definition:
      "Mastery of subject-verb agreement in all contexts including literary and specialized usage",
    literaryAgreement: {
      concept: "Subject-verb agreement in literary and creative writing",
      patterns: [
        "Poetic license allows creative agreement",
        "Historical present tense usage",
        "Stylistic choices in agreement",
      ],
      examples: [
        "The crowd roar their approval. (poetic)",
        "Shakespeare writes in iambic pentameter. (historical present)",
        "The mountains speak to me. (personification)",
      ],
    },
    specializedFieldAgreement: {
      concept:
        "Subject-verb agreement in specialized fields and technical writing",
      patterns: [
        "Legal documents: specific agreement patterns",
        "Scientific writing: precise agreement rules",
        "Technical manuals: consistent agreement",
      ],
      examples: [
        "The party of the first part agrees to... (legal)",
        "The specimen exhibits the following characteristics... (scientific)",
        "The system requires regular maintenance. (technical)",
      ],
    },
    dialectalVariationAgreement: {
      concept: "Subject-verb agreement variations across English dialects",
      patterns: [
        "African American English: different agreement patterns",
        "British vs American English differences",
        "Regional variations in agreement",
      ],
      examples: [
        "They was there. (AAE)",
        "The government are... (BrE)",
        "The data are... (BrE scientific)",
      ],
    },
    exercises: [
      "Complete: The committee ___ (consist/consists) of experts from various fields.",
      "Complete: I move that the meeting ___ (be/is) adjourned.",
      "Complete: The evidence ___ (suggest/suggests) multiple interpretations.",
    ],
  },

  // Original Subject-Verb Agreement Section (Preserved)
  SubjectVerbAgreement: {
    definition:
      "Subject-verb agreement means that the subject and verb in a sentence must agree in number (singular or plural).",
    rules: [
      {
        rule: "Singular subject → singular verb",
        example: "She **works** hard every day.",
      },
      {
        rule: "Plural subject → plural verb",
        example: "They **work** at a hospital.",
      },
      {
        rule: "Two subjects joined by 'and' → plural verb",
        example: "Tom and Jerry **are** friends.",
      },
      {
        rule: "Subjects joined by 'or'/'nor' → verb agrees with the **closer** subject",
        example: "Neither the teacher nor the students **have** arrived.",
      },
      {
        rule: "Indefinite pronouns (e.g., everyone, someone) → singular verb",
        example: "**Everyone** **is** here.",
      },
      {
        rule: "Collective nouns (e.g., team, family) → usually singular in American English",
        example: "The team **is** winning.",
      },
      {
        rule: "Uncountable nouns → singular verb",
        example: "**Milk** **is** good for your health.",
      },
      {
        rule: "Titles of books/movies → singular verb",
        example: "**'The Avengers'** **is** a great movie.",
      },
      {
        rule: "Amounts of time/money/distance → singular verb",
        example: "**Ten dollars** **is** enough.",
      },
    ],
    recognition: [
      "Identify whether the subject is singular or plural.",
      "Watch out for words that look plural but are singular (e.g., news, mathematics).",
      "With 'or/nor', look at the subject closest to the verb.",
      "Watch out for inverted sentences (e.g., 'Here is the book').",
    ],
    examples: [
      "My dog **barks** loudly.",
      "The children **play** in the garden.",
      "Neither the manager nor the workers **are** available.",
      "**Physics** **is** difficult.",
      "Ten kilometers **is** a long distance to run.",
    ],
    commonErrors: [
      "Incorrect: She **go** to school. ❌ → Correct: She **goes** to school. ✅",
      "Incorrect: The list of items **are** on the desk. ❌ → Correct: The list of items **is** on the desk. ✅",
      "Incorrect: Everyone **have** arrived. ❌ → Correct: Everyone **has** arrived. ✅",
    ],
    notes: [
      "Be careful with phrases between subject and verb that may confuse number agreement.",
      "In British English, collective nouns can take plural verbs (e.g., 'The team **are** winning.').",
    ],
  },

  // Advanced Subject-Verb Agreement Patterns and Constructions
  advancedSubjectVerbAgreementPatterns: {
    concept: "Advanced patterns and constructions in subject-verb agreement",
    existentialConstructions: {
      pattern: "There + be + subject agreement",
      examples: [
        "There is a problem. / There are problems.",
        "There was an accident. / There were accidents.",
        "There has been a change. / There have been changes.",
      ],
    },
    cleftSentences: {
      pattern: "It + be + subject agreement in cleft constructions",
      examples: [
        "It is the students who are responsible.",
        "It was the teacher who was late.",
        "It is the books that are missing.",
      ],
    },
    pseudoCleftSentences: {
      pattern: "What + subject + verb agreement",
      examples: [
        "What I need is more time.",
        "What the students want are better facilities.",
        "What matters most is your attitude.",
      ],
    },
    tagQuestions: {
      pattern: "Subject-verb agreement in tag questions",
      examples: [
        "He is coming, isn't he?",
        "They are ready, aren't they?",
        "She works here, doesn't she?",
      ],
    },
  },

  // Subject-Verb Agreement Collocations and Fixed Expressions
  subjectVerbAgreementCollocations: {
    concept:
      "Common collocations and fixed expressions involving subject-verb agreement",
    academicCollocations: {
      pattern: "Academic writing collocations",
      examples: [
        "Research suggests that...",
        "Studies indicate that...",
        "Evidence shows that...",
        "Data reveal that...",
      ],
    },
    businessCollocations: {
      pattern: "Business and professional collocations",
      examples: [
        "The company announces that...",
        "The board decides that...",
        "The team agrees that...",
        "Management requires that...",
      ],
    },
    mediaCollocations: {
      pattern: "Media and journalism collocations",
      examples: [
        "Sources say that...",
        "Officials confirm that...",
        "Witnesses report that...",
        "Authorities state that...",
      ],
    },
  },

  // Subject-Verb Agreement Usage in Different Genres
  subjectVerbAgreementGenreUsage: {
    concept:
      "Subject-verb agreement patterns across different genres and text types",
    formalWriting: {
      characteristics: "Strict adherence to standard agreement rules",
      examples: [
        "The committee has reached its decision.",
        "Neither the president nor the vice president is available.",
        "The data support the hypothesis.",
      ],
    },
    informalWriting: {
      characteristics: "More flexible agreement, especially in dialogue",
      examples: [
        "Me and my friend are going to the movies.",
        "There's lots of people here.",
        "The team are playing well.",
      ],
    },
    academicWriting: {
      characteristics: "Precise agreement with complex subjects",
      examples: [
        "The research demonstrates that...",
        "A number of studies have shown...",
        "The majority of participants were...",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic license with agreement for effect",
      examples: [
        "The mountains speak to my soul.",
        "Time and tide wait for no man.",
        "The crowd roar their approval.",
      ],
    },
  },

  // Subject-Verb Agreement Frequency and Register
  subjectVerbAgreementFrequencyAndRegister: {
    concept: "Frequency and register considerations in subject-verb agreement",
    highFrequencyPatterns: {
      pattern: "Most commonly used agreement patterns",
      examples: [
        "Third person singular -s (he/she/it works)",
        "Plural subjects with plural verbs (they work)",
        "Compound subjects with 'and' (Tom and Jerry are)",
      ],
    },
    formalRegister: {
      characteristics: "Strict adherence to standard rules",
      examples: [
        "The committee has decided.",
        "Neither option is acceptable.",
        "The data indicate a trend.",
      ],
    },
    informalRegister: {
      characteristics: "More relaxed agreement rules",
      examples: [
        "The team are winning.",
        "There's lots of people here.",
        "Me and him are friends.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise agreement in technical contexts",
      examples: [
        "The system requires maintenance.",
        "The parameters are set correctly.",
        "The algorithm processes the data.",
      ],
    },
  },

  // Subject-Verb Agreement Exercises and Practice Activities
  subjectVerbAgreementExercises: {
    concept: "Comprehensive exercises for practicing subject-verb agreement",
    basicExercises: {
      type: "Simple singular/plural agreement",
      exercises: [
        "The cat ___ (sleep/sleeps) on the sofa.",
        "The children ___ (play/plays) in the garden.",
        "My mother ___ (cook/cooks) dinner every day.",
      ],
    },
    intermediateExercises: {
      type: "Compound subjects and exceptions",
      exercises: [
        "Neither John nor Mary ___ (like/likes) coffee.",
        "Everyone ___ (want/wants) to go home.",
        "The news ___ (is/are) good today.",
      ],
    },
    advancedExercises: {
      type: "Complex subjects and academic contexts",
      exercises: [
        "The research ___ (indicate/indicates) a clear trend.",
        "A number of students ___ (have/has) completed the assignment.",
        "The committee, along with the board, ___ (meet/meets) tomorrow.",
      ],
    },
    errorCorrection: {
      type: "Identify and correct agreement errors",
      exercises: [
        "The list of items are on the desk. → ___",
        "Everyone have arrived. → ___",
        "The team are winning. → ___",
      ],
    },
  },

  // Subject-Verb Agreement Assessment and Evaluation
  subjectVerbAgreementAssessment: {
    concept:
      "Assessment criteria and evaluation methods for subject-verb agreement",
    assessmentCriteria: {
      accuracy: "Correct agreement in all contexts",
      consistency: "Consistent application of rules",
      complexity: "Handling of complex subjects",
      register: "Appropriate register usage",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, fill-in-the-blank, error correction",
      speakingTests: "Oral production with agreement focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic singular/plural agreement",
      A2: "Compound subjects and basic exceptions",
      B1: "Complex subjects and intermediate patterns",
      B2: "Advanced structures and academic contexts",
      C1: "Sophisticated patterns and formal writing",
      C2: "Mastery in all contexts including literary usage",
    },
  },

  // Subject-Verb Agreement Learning Strategies
  subjectVerbAgreementLearningStrategies: {
    concept:
      "Effective strategies for learning and mastering subject-verb agreement",
    identificationStrategies: {
      strategy: "Identify the subject before choosing the verb",
      techniques: [
        "Find the main subject of the sentence",
        "Ignore intervening phrases",
        "Check for compound subjects",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily sentence construction",
        "Reading with agreement focus",
        "Writing exercises with feedback",
      ],
    },
    memoryStrategies: {
      strategy: "Mnemonic devices and rules",
      techniques: [
        "Singular subject = singular verb",
        "Plural subject = plural verb",
        "Compound 'and' = plural verb",
      ],
    },
    errorAnalysis: {
      strategy: "Analyze and learn from mistakes",
      techniques: [
        "Keep an error log",
        "Identify patterns in mistakes",
        "Practice problematic patterns",
      ],
    },
  },

  // Subject-Verb Agreement in Language Tests
  subjectVerbAgreementInTests: {
    concept: "Subject-verb agreement in standardized language tests",
    testTypes: {
      TOEFL: "Academic English agreement patterns",
      IELTS: "Both academic and general agreement",
      Cambridge: "British English agreement variations",
      TOEIC: "Business and professional agreement",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct verb form",
      errorIdentification: "Find the agreement error",
      sentenceCompletion: "Complete with correct verb",
      textEditing: "Correct agreement errors in text",
    },
    testStrategies: {
      timeManagement: "Quick subject identification",
      elimination: "Eliminate obviously wrong options",
      contextClues: "Use surrounding words for clues",
    },
  },

  // Common Subject-Verb Agreement Mistakes
  commonSubjectVerbAgreementMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      interveningPhrases: {
        error: "Agreeing verb with nearest noun instead of subject",
        example: "The list of items are on the desk. ❌",
        correction: "The list of items is on the desk. ✅",
        explanation: "The subject is 'list' (singular), not 'items' (plural)",
      },
      compoundSubjects: {
        error: "Incorrect agreement with 'or'/'nor' compounds",
        example: "Neither the teacher nor the students has arrived. ❌",
        correction: "Neither the teacher nor the students have arrived. ✅",
        explanation: "With 'or'/'nor', verb agrees with the closer subject",
      },
      indefinitePronouns: {
        error: "Treating singular indefinite pronouns as plural",
        example: "Everyone have arrived. ❌",
        correction: "Everyone has arrived. ✅",
        explanation: "Everyone is singular and takes singular verb",
      },
      collectiveNouns: {
        error: "Inconsistent agreement with collective nouns",
        example: "The team are winning. (AmE context) ❌",
        correction: "The team is winning. ✅",
        explanation:
          "In American English, collective nouns are usually singular",
      },
      uncountableNouns: {
        error: "Treating uncountable nouns as plural",
        example: "The news are good. ❌",
        correction: "The news is good. ✅",
        explanation: "News is uncountable and always singular",
      },
    },
    preventionStrategies: {
      subjectIdentification: "Always identify the main subject first",
      ruleMemorization: "Memorize key agreement rules",
      practice: "Regular practice with varied examples",
      proofreading: "Careful proofreading focusing on agreement",
    },
  },
};

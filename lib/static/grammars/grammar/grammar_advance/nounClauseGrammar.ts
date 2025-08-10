import { nounClauseGrammarType } from "@/types/grammars/grammar/grammar_advance/nounClauseGrammar";

export const nounClauseGrammarData: nounClauseGrammarType = {
  id: 30,
  topic: "Mệnh đề danh ngữ (Noun Clauses)",
  level: "A1-C2",
  definition:
    "A noun clause is a dependent clause that functions as a noun in a sentence. It can act as a subject, object, or complement.",
  detailedDefinition: {
    comprehensive:
      "A noun clause is a subordinate clause that performs the grammatical function of a noun within a larger sentence structure. It contains a subject and predicate but cannot stand alone as a complete sentence. Noun clauses are introduced by subordinating conjunctions and can replace any noun phrase in a sentence while maintaining grammatical correctness.",
    linguistic:
      "From a syntactic perspective, noun clauses are embedded clauses that occupy nominal positions in sentence structure. They demonstrate the recursive property of human language, allowing infinite expansion of sentence complexity through embedding. Semantically, they express propositions, questions, or abstract concepts that function as arguments or complements to predicates.",
    functional:
      "Functionally, noun clauses serve as building blocks for complex discourse, enabling speakers to embed one complete thought within another. They are essential for reported speech, expressing beliefs and knowledge states, asking indirect questions, and creating sophisticated academic and professional communication.",
  },
  functions: [
    "Subject of a sentence",
    "Object of a verb",
    "Object of a preposition",
    "Subject complement",
    "Appositive to a noun",
    "Extraposed subject with 'it'",
    "Complement of adjectives",
    "Content of abstract nouns",
  ],
  structure: {
    general: "Connector + Subject + Verb (S + V)",
    notes: [
      "The connector may act as a subject or object in the clause.",
      "In some clauses, the subject is omitted (especially in informal speech).",
      "Word order in noun clauses is statement order, not question order.",
      "Tense in noun clauses can be independent of main clause tense in some contexts.",
    ],
    syntacticRoles: [
      {
        role: "Subject Position",
        description:
          "Noun clause functions as the grammatical subject of the main clause",
        example: "What he said surprised everyone.",
      },
      {
        role: "Direct Object Position",
        description:
          "Noun clause serves as the direct object of a transitive verb",
        example: "I know that she is coming.",
      },
      {
        role: "Object of Preposition",
        description: "Noun clause follows a preposition as its object",
        example: "I'm worried about what might happen.",
      },
      {
        role: "Subject Complement",
        description:
          "Noun clause provides information about the subject after linking verbs",
        example: "The problem is that we're late.",
      },
      {
        role: "Appositive",
        description: "Noun clause renames or explains a preceding noun",
        example: "The fact that he lied bothers me.",
      },
    ],
  },
  connectors: {
    thatClause: ["that"],
    whClause: [
      "what",
      "who",
      "which",
      "where",
      "when",
      "why",
      "how",
      "whom",
      "whose",
      "whether",
    ],
    ifClause: ["if (for indirect yes-no questions)"],
    zeroConnector: ["(sometimes implied, especially in spoken English)"],
    detailedConnectors: [
      {
        type: "Declarative Connectors",
        connectors: ["that"],
        usage: "Introduces factual statements and reports",
        examples: [
          "I know that she is here.",
          "The fact that he came surprised me.",
          "It's obvious that we need help.",
        ],
      },
      {
        type: "Interrogative Connectors",
        connectors: ["what", "who", "which", "where", "when", "why", "how"],
        usage: "Introduces embedded questions and information requests",
        examples: [
          "I wonder what time it is.",
          "Tell me who called you.",
          "I don't know where she lives.",
        ],
      },
      {
        type: "Choice Connectors",
        connectors: ["whether", "if"],
        usage: "Introduces indirect yes/no questions and alternatives",
        examples: [
          "I don't know whether she'll come.",
          "He asked if I was ready.",
          "The question is whether we should wait.",
        ],
      },
      {
        type: "Possessive Connectors",
        connectors: ["whose"],
        usage: "Shows possession in embedded structures",
        examples: [
          "I know whose car that is.",
          "Tell me whose idea this was.",
          "She wondered whose turn it was.",
        ],
      },
    ],
  },
  usageTypes: [
    {
      type: "Subject",
      example: "What she said surprised everyone.",
      form: "Wh/That clause + verb",
      note: "Common in formal English; 'It' as a dummy subject is also used.",
      levelAppropriate: "B1-C2",
      additionalExamples: [
        "That he arrived late disappointed us.",
        "Whether she comes doesn't matter.",
        "How he solved it amazed everyone.",
      ],
    },
    {
      type: "Object of a verb",
      example: "I know that she is right.",
      form: "Verb + noun clause",
      note: "Very common with reporting and mental state verbs.",
      levelAppropriate: "A2-C2",
      additionalExamples: [
        "She believes what he told her.",
        "I wonder if they're coming.",
        "He explained why he was late.",
      ],
    },
    {
      type: "Object of a preposition",
      example: "We are concerned about what he did.",
      form: "Preposition + noun clause",
      note: "The noun clause follows a preposition.",
      levelAppropriate: "B2-C2",
      additionalExamples: [
        "I'm interested in what you're saying.",
        "She's worried about whether she'll pass.",
        "He depends on what others think.",
      ],
    },
    {
      type: "Subject complement",
      example: "The problem is that he lied.",
      form: "Linking verb + noun clause",
      note: "Gives more information about the subject.",
      levelAppropriate: "B1-C2",
      additionalExamples: [
        "The question is whether we should go.",
        "My concern is what might happen.",
        "The issue is how we'll manage.",
      ],
    },
    {
      type: "Appositive",
      example: "The idea that we should leave early is good.",
      form: "Noun + that-clause",
      note: "The clause gives more information about the noun.",
      levelAppropriate: "B2-C2",
      additionalExamples: [
        "The fact that she won surprised us.",
        "His claim that he saw a UFO was ridiculous.",
        "The news that they're getting married is wonderful.",
      ],
    },
  ],
  verbPatterns: {
    reportingVerbs: [
      "say",
      "tell",
      "ask",
      "explain",
      "suggest",
      "advise",
      "recommend",
      "admit",
      "announce",
      "claim",
      "confess",
      "declare",
      "deny",
      "insist",
      "promise",
      "report",
      "state",
      "warn",
      "mention",
      "note",
      "observe",
    ],
    mentalVerbs: [
      "know",
      "believe",
      "think",
      "remember",
      "forget",
      "understand",
      "assume",
      "suspect",
      "imagine",
      "hope",
      "expect",
      "doubt",
      "realize",
      "recognize",
      "suppose",
      "consider",
      "feel",
      "sense",
    ],
    emotionalVerbs: [
      "love",
      "hate",
      "like",
      "dislike",
      "enjoy",
      "prefer",
      "appreciate",
      "regret",
      "fear",
      "worry",
      "hope",
      "wish",
      "desire",
      "dread",
    ],
    causativeVerbs: [
      "make",
      "let",
      "have",
      "get",
      "help",
      "force",
      "allow",
      "permit",
      "enable",
      "cause",
      "require",
      "demand",
    ],
    perceptionVerbs: [
      "see",
      "hear",
      "watch",
      "notice",
      "observe",
      "feel",
      "smell",
      "taste",
      "perceive",
      "detect",
      "sense",
    ],
    verbCategorization: [
      {
        category: "Reporting Verbs",
        verbs: ["say", "tell", "report", "announce", "declare"],
        structure: "Verb + (that) + noun clause",
        examples: [
          "She said (that) she was tired.",
          "He told me (that) he would come.",
          "They reported (that) the meeting was cancelled.",
        ],
        level: "A2-B1",
      },
      {
        category: "Mental State Verbs",
        verbs: ["know", "believe", "think", "understand", "realize"],
        structure: "Verb + (that/wh-) + noun clause",
        examples: [
          "I know that she's right.",
          "He believes what you told him.",
          "We understand why you're upset.",
        ],
        level: "A2-B2",
      },
      {
        category: "Emotional Response Verbs",
        verbs: ["hope", "wish", "fear", "worry", "regret"],
        structure: "Verb + (that/if/whether) + noun clause",
        examples: [
          "I hope that you succeed.",
          "She fears that she'll fail.",
          "He regrets that he didn't study harder.",
        ],
        level: "B1-B2",
      },
    ],
  },
  tenseAndVoice: {
    tenseShiftInIndirectSpeech: true,
    voiceSupport: true,
    passiveExample: "It is believed that he is innocent.",
    sequenceOfTenses: {
      rule: "When the main verb is past, the noun clause verb usually shifts to past form",
      examples: [
        {
          direct: "He said, 'I am tired.'",
          indirect: "He said that he was tired.",
        },
        {
          direct: "She told me, 'I will come tomorrow.'",
          indirect: "She told me that she would come the next day.",
        },
        {
          direct: "They announced, 'We have finished the project.'",
          indirect: "They announced that they had finished the project.",
        },
      ],
    },
    modalShifts: [
      {
        modal: "Present Modals",
        shifts: [
          {
            from: "can",
            to: "could",
            example: "He said he could help. (from 'I can help')",
          },
          {
            from: "will",
            to: "would",
            example: "She said she would come. (from 'I will come')",
          },
          {
            from: "may",
            to: "might",
            example: "He said it might rain. (from 'It may rain')",
          },
        ],
      },
    ],
  },
  recognitionPatterns: [
    "Starts with 'that', 'what', 'if', 'whether', 'how', etc.",
    "Can be replaced by 'something' or 'it' and still be grammatical.",
    "Cannot stand alone as a sentence.",
    "Uses statement word order, not question word order.",
    "Can be moved to different positions in the sentence.",
    "Often follows specific verb types (reporting, mental, emotional).",
  ],
  examples: {
    subject: "That she passed the exam was surprising.",
    object: "He didn't know what time it was.",
    objectOfPrep: "I'm not sure about what he meant.",
    subjectComplement: "The fact is that he cheated.",
    appositive: "His claim that he won is false.",
    levelSpecific: [
      {
        level: "A1-A2",
        examples: [
          {
            type: "Simple that-clauses",
            sentence: "I think that it's good.",
            explanation:
              "Basic that-clause as object with simple present/past tense",
          },
          {
            type: "Basic wh-clauses",
            sentence: "I know what his name is.",
            explanation: "Simple embedded question with 'what'",
          },
        ],
      },
      {
        level: "B1-B2",
        examples: [
          {
            type: "Subject noun clauses",
            sentence: "What she said surprised me.",
            explanation: "Noun clause functioning as subject of the sentence",
          },
          {
            type: "Indirect questions",
            sentence: "I wonder if he'll come to the party.",
            explanation: "Embedded yes/no question using 'if'",
          },
        ],
      },
      {
        level: "C1-C2",
        examples: [
          {
            type: "Complex embedding",
            sentence: "It's surprising that he said that he wouldn't come.",
            explanation: "Multiple levels of embedding with extraposition",
          },
          {
            type: "Subjunctive noun clauses",
            sentence: "I recommend that she be promoted immediately.",
            explanation: "Subjunctive mood in formal recommendation",
          },
        ],
      },
    ],
  },
  advancedStructures: [
    {
      name: "Extraposed Subject",
      structure: "It + be + adj/noun + noun clause",
      example: "It is important that you be on time.",
      note: "Used to shift long subjects to the end.",
      level: "B2-C2",
      additionalExamples: [
        "It's obvious that she's lying.",
        "It was surprising that he came.",
        "It's essential that we finish today.",
      ],
    },
    {
      name: "Subjunctive in noun clauses",
      structure: "Verb (demand/suggest/etc.) + that + subject + base verb",
      example: "I suggest that he study harder.",
      note: "Used after verbs expressing necessity, urgency, or recommendation.",
      level: "C1-C2",
      additionalExamples: [
        "She insisted that he be present.",
        "The law requires that all citizens vote.",
        "I recommend that she apply immediately.",
      ],
    },
    {
      name: "Whether vs. If",
      structure: "Whether/if + subject + verb",
      example: "I don't know whether he'll come or not.",
      note: "Whether is more formal and used with 'or not'; if is more common in speech.",
      level: "B1-C1",
      additionalExamples: [
        "She asked if I was ready.",
        "The question is whether we should wait.",
        "I'm unsure whether to go or not.",
      ],
    },
    {
      name: "Omitted 'that'",
      structure: "Verb + (that) + clause",
      example: "I think she's right.",
      note: "'That' is often omitted in speech or informal writing.",
      level: "A2-B2",
      additionalExamples: [
        "He said he was coming.",
        "I believe you're correct.",
        "She knows I'm here.",
      ],
    },
  ],
  academicUsage: {
    recommendationVerbs: [
      "recommend",
      "suggest",
      "insist",
      "demand",
      "propose",
      "require",
      "request",
      "urge",
      "advise",
      "mandate",
    ],
    academicExample: "The committee recommended that he be expelled.",
    note: "Subjunctive mood is common in formal academic writing.",
    formalStructures: [
      {
        structure: "It + passive verb + that-clause",
        purpose: "Objective reporting and distancing",
        examples: [
          "It has been established that climate change is real.",
          "It is widely believed that education improves society.",
          "It was determined that further research is needed.",
        ],
      },
      {
        structure: "The fact that + clause",
        purpose: "Emphasizing factual information",
        examples: [
          "The fact that unemployment is rising concerns economists.",
          "The fact that she graduated summa cum laude is impressive.",
          "The fact that technology evolves rapidly challenges educators.",
        ],
      },
    ],
    academicWritingPatterns: [
      {
        pattern: "Research indicates that...",
        usage: "Introducing research findings",
        examples: [
          "Research indicates that students learn better with feedback.",
          "Studies show that exercise improves mental health.",
          "Evidence suggests that early intervention is crucial.",
        ],
      },
      {
        pattern: "It is argued that...",
        usage: "Presenting arguments or viewpoints",
        examples: [
          "It is argued that globalization benefits developing countries.",
          "Scholars contend that literature reflects society.",
          "Critics maintain that the policy is ineffective.",
        ],
      },
    ],
  },
  commonMistakes: [
    {
      mistake: "Incorrect: I don't know that does he like me.",
      correction: "Correct: I don't know if he likes me.",
      note: "Avoid inversion in noun clauses.",
      level: "A2-B1",
      explanation:
        "Noun clauses use statement word order, not question word order.",
    },
    {
      mistake: "Incorrect: What did he say surprised me.",
      correction: "Correct: What he said surprised me.",
      note: "Use normal statement word order inside noun clauses.",
      level: "B1-B2",
      explanation:
        "Even when the noun clause begins with a question word, maintain statement order.",
    },
    {
      mistake: "Incorrect: He said me that he was late.",
      correction: "Correct: He told me that he was late.",
      note: "Use 'tell someone' not 'say someone'.",
      level: "A2-B1",
      explanation: "'Say' doesn't take an indirect object; 'tell' does.",
    },
    {
      mistake: "Incorrect: I'm not sure about if he's coming.",
      correction: "Correct: I'm not sure whether he's coming.",
      note: "Use 'whether' after prepositions, not 'if'.",
      level: "B2-C1",
      explanation: "Prepositions are followed by 'whether', not 'if'.",
    },
  ],
  relatedTopics: [
    "Reported Speech",
    "Relative Clauses",
    "Adjective Clauses",
    "Question Formation",
    "Subjunctive Mood",
    "Cleft Sentences (It is ... that ...)",
    "Conditionals",
    "Modal Verbs",
    "Passive Voice",
    "Sequence of Tenses",
  ],
  timeMarkers: [
    "when",
    "whenever",
    "while",
    "as soon as",
    "until",
    "after",
    "before",
    "since",
    "once",
    "as long as",
    "by the time",
    "the moment",
  ],
  learningTips: [
    "Practice identifying noun clauses by replacing them with 'something'.",
    "Learn reporting verbs and which structures they take.",
    "Avoid using question word order in noun clauses.",
    "Read academic texts to recognize complex noun clause usage.",
    "Practice sequence of tenses in reported speech.",
    "Learn the difference between 'whether' and 'if'.",
    "Study extraposition patterns for formal writing.",
    "Master subjunctive forms for advanced proficiency.",
  ],
  spellingNotes: [
    "No specific spelling changes in noun clauses.",
    "Ensure correct punctuation when embedding clauses in longer sentences.",
    "Be careful with apostrophes in contractions within noun clauses.",
    "Maintain consistent spelling in formal academic writing.",
  ],
  advancedExamples: [
    "That he failed the exam despite studying so hard shows how difficult it was.",
    "The question of whether he should resign is still under discussion.",
    "It seems that he is hiding something important from us.",
    "It is essential that she arrive early for the interview.",
    "What we need is more time and financial support.",
    "The possibility that they might cancel the project worries everyone.",
    "Whether or not she agrees with the decision remains to be seen.",
  ],
  formCheck: {
    nounClauseActsAs: [
      "subject",
      "object",
      "complement",
      "object of preposition",
      "appositive",
    ],
    beginsWith: ["that", "what", "why", "how", "whether", "if", "wh- word"],
    testMethods: [
      "Replace with 'something' or 'it'",
      "Check if it can stand alone (it shouldn't)",
      "Verify statement word order within clause",
      "Confirm it functions as a noun in the sentence",
    ],
  },
  CEFRLevels: {
    A1_A2: {
      structures: [
        "Simple that-clauses as object: I think that it's good.",
        "Basic wh-clauses: I know what he said.",
        "Simple reported speech with 'that'",
      ],
      vocabulary: [
        "Basic reporting verbs: say, tell, think, know",
        "Simple connectors: that, what, where, when",
        "Common mental verbs: believe, understand, remember",
      ],
      learningObjectives: [
        "Recognize simple noun clauses",
        "Use basic that-clauses correctly",
        "Form simple embedded questions",
        "Apply basic reported speech patterns",
      ],
      keyPoints: [
        "Statement word order in noun clauses",
        "Optional 'that' in informal speech",
        "Basic tense consistency",
        "Simple embedding after common verbs",
      ],
      practiceAreas: [
        "Identifying noun clauses in simple sentences",
        "Converting direct speech to indirect speech",
        "Using basic wh-clauses",
        "Practicing with high-frequency verbs",
      ],
    },
    B1_B2: {
      structures: [
        "That-clauses as subject: That she left was unexpected.",
        "Indirect yes-no questions: I wonder if he'll come.",
        "Subjunctive noun clauses: He suggested that we go now.",
        "Object of preposition: I'm worried about what he said.",
      ],
      vocabulary: [
        "Extended reporting verbs: suggest, recommend, insist",
        "Mental state verbs: assume, suspect, doubt, realize",
        "Emotional verbs: hope, fear, regret, wish",
        "Academic connectors: whether, how, why",
      ],
      learningObjectives: [
        "Use noun clauses in all positions",
        "Master whether vs. if distinction",
        "Apply sequence of tenses correctly",
        "Use noun clauses with prepositions",
      ],
      keyPoints: [
        "Noun clauses as subjects and complements",
        "Formal vs. informal usage patterns",
        "Tense shifts in reported speech",
        "Subjunctive with recommendation verbs",
      ],
      practiceAreas: [
        "Complex reported speech",
        "Academic writing with noun clauses",
        "Formal recommendation structures",
        "Embedded questions in context",
      ],
    },
    C1_C2: {
      structures: [
        "Complex extraposition: It is surprising that he said that.",
        "Embedded noun clauses in legal or academic contexts.",
        "Subjunctive with modals: It is vital that she be informed.",
        "Multiple levels of embedding and sophisticated structures",
      ],
      vocabulary: [
        "Advanced academic verbs: contend, maintain, assert",
        "Formal connectors and structures",
        "Sophisticated modal expressions",
        "Complex preposition + noun clause patterns",
      ],
      learningObjectives: [
        "Master all advanced noun clause structures",
        "Use sophisticated embedding techniques",
        "Apply formal academic writing patterns",
        "Demonstrate native-like usage flexibility",
      ],
      keyPoints: [
        "Stylistic variation and register awareness",
        "Complex tense and modal relationships",
        "Advanced subjunctive usage",
        "Sophisticated discourse functions",
      ],
      practiceAreas: [
        "Academic and professional writing",
        "Complex argumentative structures",
        "Formal presentations and reports",
        "Advanced literary and analytical texts",
      ],
    },
  },
  levelProgression: [
    {
      level: "A1-A2",
      prerequisites: [
        "Basic sentence structure understanding",
        "Simple present and past tenses",
        "Common verbs and their conjugations",
        "Basic question formation",
      ],
      coreContent: [
        "Simple that-clauses after 'think', 'know', 'say'",
        "Basic wh-clauses with 'what', 'where', 'when'",
        "Simple reported speech conversion",
        "Recognition of embedded structures",
      ],
      skillDevelopment: [
        "Identifying noun clauses in context",
        "Using correct word order",
        "Basic embedding after common verbs",
        "Simple tense consistency",
      ],
      assessmentCriteria: [
        "Correct identification of noun clauses",
        "Proper word order within clauses",
        "Appropriate use of basic connectors",
        "Simple reported speech accuracy",
      ],
    },
    {
      level: "B1-B2",
      prerequisites: [
        "Solid A2 noun clause foundation",
        "Good command of tense system",
        "Understanding of formal vs. informal language",
        "Familiarity with academic vocabulary",
      ],
      coreContent: [
        "Noun clauses in all syntactic positions",
        "Whether vs. if distinction",
        "Sequence of tenses in reported speech",
        "Subjunctive with recommendation verbs",
      ],
      skillDevelopment: [
        "Using noun clauses as subjects and complements",
        "Applying correct tense shifts",
        "Formal academic writing structures",
        "Complex embedding techniques",
      ],
      assessmentCriteria: [
        "Accurate use in all positions",
        "Correct tense sequence application",
        "Appropriate formal/informal register",
        "Complex structure manipulation",
      ],
    },
    {
      level: "C1-C2",
      prerequisites: [
        "Advanced B2 proficiency",
        "Strong academic writing skills",
        "Sophisticated vocabulary range",
        "Deep understanding of English syntax",
      ],
      coreContent: [
        "Advanced extraposition structures",
        "Complex subjunctive patterns",
        "Multiple embedding levels",
        "Sophisticated discourse functions",
      ],
      skillDevelopment: [
        "Native-like usage flexibility",
        "Advanced stylistic variation",
        "Professional and academic mastery",
        "Creative and analytical applications",
      ],
      assessmentCriteria: [
        "Near-native accuracy and fluency",
        "Sophisticated stylistic choices",
        "Professional communication competence",
        "Advanced analytical writing ability",
      ],
    },
  ],
  culturalUsage: {
    formalVsInformal: [
      {
        context: "Academic Writing",
        structures: [
          "It is argued that...",
          "Research indicates that...",
          "It has been established that...",
        ],
        examples: [
          "It is widely acknowledged that climate change poses serious threats.",
          "Studies demonstrate that early intervention improves outcomes.",
          "It has been proven that exercise benefits mental health.",
        ],
      },
      {
        context: "Informal Conversation",
        structures: [
          "I think (that)...",
          "You know what...",
          "I guess (that)...",
        ],
        examples: [
          "I think we should go now.",
          "You know what bothers me?",
          "I guess he's not coming.",
        ],
      },
    ],
    regionalVariations: [
      {
        region: "American English",
        preferences: [
          "More frequent omission of 'that'",
          "Preference for 'if' over 'whether' in speech",
          "Less formal subjunctive usage",
        ],
        examples: [
          "I think he's right. (that omitted)",
          "I don't know if he's coming.",
          "I suggest he goes early.",
        ],
      },
      {
        region: "British English",
        preferences: [
          "More retention of 'that'",
          "Formal 'whether' usage maintained",
          "Traditional subjunctive patterns",
        ],
        examples: [
          "I think that he's right.",
          "I don't know whether he's coming.",
          "I suggest that he go early.",
        ],
      },
    ],
  },
  practicalApplications: [
    {
      context: "Business Communication",
      structures: [
        "I believe that our proposal...",
        "It is essential that we...",
        "The fact that sales have increased...",
      ],
      examples: [
        "I believe that our proposal offers the best solution.",
        "It is essential that we meet the deadline.",
        "The fact that sales have increased shows our strategy works.",
      ],
      level: "B2-C1",
    },
    {
      context: "Academic Writing",
      structures: [
        "Research suggests that...",
        "It has been demonstrated that...",
        "The hypothesis that...",
      ],
      examples: [
        "Research suggests that bilingual education benefits students.",
        "It has been demonstrated that exercise improves cognitive function.",
        "The hypothesis that technology enhances learning needs testing.",
      ],
      level: "C1-C2",
    },
    {
      context: "Daily Conversation",
      structures: [
        "I hope that...",
        "Do you know if...",
        "I'm not sure whether...",
      ],
      examples: [
        "I hope that you feel better soon.",
        "Do you know if the store is open?",
        "I'm not sure whether I can come.",
      ],
      level: "A2-B1",
    },
  ],
  cognitiveLinguistics: {
    mentalModels: [
      "Proposition embedding - treating ideas as objects",
      "Perspective taking - embedding others' viewpoints",
      "Temporal deixis - relating time across clause boundaries",
      "Epistemic modality - expressing degrees of certainty",
    ],
    conceptualFrameworks: [
      "Container metaphor - ideas 'contain' other ideas",
      "Journey metaphor - thoughts 'lead to' conclusions",
      "Building metaphor - arguments 'support' claims",
      "Network metaphor - ideas 'connect' to other ideas",
    ],
    processingStrategies: [
      "Incremental processing of embedded structures",
      "Working memory management for complex embedding",
      "Syntactic prediction and expectation",
      "Semantic integration across clause boundaries",
    ],
  },
  crossLinguisticComparison: [
    {
      language: "Spanish",
      similarities: [
        "Subjunctive mood in noun clauses",
        "That-clause equivalents with 'que'",
        "Similar embedding patterns",
      ],
      differences: [
        "Obligatory subjunctive in certain contexts",
        "Different complementizer usage",
        "More flexible word order options",
      ],
      learningChallenges: [
        "Overuse of subjunctive",
        "Incorrect complementizer choice",
        "Word order interference",
      ],
    },
    {
      language: "Mandarin Chinese",
      similarities: [
        "Basic embedding concepts",
        "Reported speech patterns",
        "Question embedding",
      ],
      differences: [
        "No morphological tense marking",
        "Different complementizer system",
        "Topic-prominent structure",
      ],
      learningChallenges: [
        "Tense sequence difficulties",
        "Complementizer confusion",
        "Word order adjustment",
      ],
    },
  ],
  teachingStrategies: [
    {
      level: "A1-A2",
      approaches: [
        "Pattern recognition and repetition",
        "Visual sentence mapping",
        "Controlled practice activities",
        "Error correction focus",
      ],
      activities: [
        "Sentence completion exercises",
        "Direct to indirect speech conversion",
        "Picture-based noun clause formation",
        "Guided discovery activities",
      ],
      assessmentMethods: [
        "Gap-fill exercises",
        "Multiple choice identification",
        "Simple transformation tasks",
        "Oral repetition drills",
      ],
    },
    {
      level: "B1-B2",
      approaches: [
        "Communicative language teaching",
        "Task-based learning",
        "Consciousness-raising activities",
        "Error analysis and correction",
      ],
      activities: [
        "Information gap tasks",
        "Role-play with reported speech",
        "Academic writing practice",
        "Corpus-based discovery",
      ],
      assessmentMethods: [
        "Essay writing assessment",
        "Oral presentation evaluation",
        "Error correction tasks",
        "Peer review activities",
      ],
    },
    {
      level: "C1-C2",
      approaches: [
        "Content-based instruction",
        "Process writing approach",
        "Critical thinking integration",
        "Autonomous learning support",
      ],
      activities: [
        "Research paper writing",
        "Debate and discussion",
        "Literature analysis",
        "Professional communication tasks",
      ],
      assessmentMethods: [
        "Portfolio assessment",
        "Peer evaluation",
        "Self-assessment rubrics",
        "Professional task performance",
      ],
    },
  ],
  citations: [
    "Cambridge Grammar of the English Language",
    "Practical English Usage – Michael Swan",
    "English Grammar in Use – Raymond Murphy",
    "Longman Grammar of Spoken and Written English",
  ],
  recommendedReading: {
    books: [
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2013,
        isbn: "978-1107539303",
        relevantChapters: ["Units 23-26: Noun clauses and complement clauses"],
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        isbn: "978-0521431460",
        relevantChapters: ["Chapter 11: Content clauses and reported speech"],
      },
      {
        title: "Understanding and Using English Grammar",
        author: "Betty Schrampfer Azar and Stacy A. Hagen",
        publisher: "Pearson",
        year: 2016,
        isbn: "978-0134268824",
        relevantChapters: ["Chapters 12-14: Noun clauses"],
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: 2016,
        isbn: "978-0194202411",
        relevantChapters: ["Sections on reported speech and noun clauses"],
      },
      {
        title: "English Syntax: A Grammar for English Language Professionals",
        author: "Roderick A. Jacobs",
        publisher: "Oxford University Press",
        year: 1995,
        isbn: "978-0195091755",
        relevantChapters: ["Chapter 8: Complement clauses"],
      },
    ],
    websites: [
      {
        title: "British Council Grammar Reference",
        url: "https://learnenglish.britishcouncil.org/grammar",
        description:
          "Comprehensive grammar explanations with examples and exercises",
        accessDate: "2024-12-01",
      },
      {
        title: "Purdue OWL (Online Writing Lab)",
        url: "https://owl.purdue.edu/owl/general_writing/grammar/",
        description:
          "Academic writing guidance including complex sentence structures",
        accessDate: "2024-12-01",
      },
      {
        title: "English Grammar Online",
        url: "https://www.ego4u.com/en/cram-up/grammar",
        description: "Detailed grammar explanations with practice exercises",
        accessDate: "2024-12-01",
      },
      {
        title: "Cambridge Dictionary Grammar",
        url: "https://dictionary.cambridge.org/grammar/",
        description:
          "Authoritative grammar reference with corpus-based examples",
        accessDate: "2024-12-01",
      },
      {
        title: "Grammarly Blog",
        url: "https://www.grammarly.com/blog/grammar/",
        description: "Practical grammar tips and explanations for writers",
        accessDate: "2024-12-01",
      },
    ],
    academicPapers: [
      {
        title: "The acquisition of complement clauses",
        author: "Jill G. de Villiers",
        journal: "Journal of Child Language",
        year: 2007,
        doi: "10.1017/S0305000906007896",
      },
      {
        title: "Cross-linguistic variation in complement clause structure",
        author: "Alexandra Y. Aikhenvald",
        journal: "Studies in Language",
        year: 2006,
        doi: "10.1075/sl.30.3.02aik",
      },
      {
        title: "The syntax of reported speech in English",
        author: "Peter Collins",
        journal: "English Language and Linguistics",
        year: 2001,
        doi: "10.1017/S1360674301000235",
      },
      {
        title: "Complement clauses and complementation strategies",
        author: "R.M.W. Dixon",
        journal: "Language",
        year: 2006,
        doi: "10.1353/lan.2006.0247",
      },
      {
        title: "The processing of syntactically complex sentences",
        author: "Edward Gibson",
        journal: "Cognitive Science",
        year: 1998,
        doi: "10.1207/s15516709cog2201_1",
      },
    ],
  },
};

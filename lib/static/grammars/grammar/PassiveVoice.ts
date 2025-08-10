import { PassiveVoiceType } from "@/types/grammars/grammar/PassiveVoice";

export const PassiveVoiceData:PassiveVoiceType = {
  id: 97,
  // --- Comprehensive Passive Voice Reference ---
  // Definition of Passive Voice
  passiveVoiceDefinition: {
    concept:
      "Passive voice is a grammatical construction where the subject receives the action rather than performing it, shifting focus from the doer to the action or result.",
    importance:
      "Essential for formal writing, academic discourse, and situations where the agent is unknown, unimportant, or obvious",
    corePrinciple:
      "The object of an active sentence becomes the subject of the passive sentence, using 'be' + past participle structure",
    scope:
      "Applies to all communicative contexts where emphasis on action or result is preferred over agent focus",
  },

  // A1 Level - Basic Passive Voice (Beginner)
  A1: {
    definition: "Basic passive voice usage with simple present and past forms",
    basicPresentPassive: {
      concept: "Simple present passive with common verbs",
      patterns: [
        "am/is/are + past participle (present passive)",
        "Subject + is/are + past participle",
        "Simple passive without agent",
      ],
      examples: [
        "The book is written by John.",
        "Coffee is grown in Brazil.",
        "English is spoken here.",
        "The letter is sent today.",
      ],
    },
    basicPastPassive: {
      concept: "Simple past passive with common verbs",
      patterns: [
        "was/were + past participle (past passive)",
        "Subject + was/were + past participle",
        "Past passive for completed actions",
      ],
      examples: [
        "The house was built in 1990.",
        "The letter was sent yesterday.",
        "The car was repaired last week.",
        "The book was written by Shakespeare.",
      ],
    },
    learningObjectives: [
      "Recognize basic passive voice structures",
      "Use simple present and past passive forms",
      "Understand when to use passive voice",
      "Identify common passive verbs",
      "Form basic passive sentences with 'be' + past participle",
    ],
    commonMistakes: [
      "Using present participle instead of past participle (The house is building → The house is built)",
      "Forgetting the 'be' verb (The letter written → The letter was written)",
      "Using active voice when passive is required",
      "Confusing 'is' and 'are' in passive constructions",
    ],
    practiceActivities: [
      "Convert simple active sentences to passive",
      "Complete passive sentences with correct verb forms",
      "Identify passive voice in simple texts",
      "Practice with common everyday passive expressions",
    ],
    resources: {
      websites: [
        "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/passive-voice",
        "https://www.grammarly.com/blog/passive-voice/",
        "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/index.html",
        "https://www.ef.com/wwen/english-resources/english-grammar/passive-voice/",
        "https://www.perfect-english-grammar.com/passive.html",
      ],
      books: [
        "English Grammar in Use (Basic) by Raymond Murphy",
        "Essential Grammar in Use by Raymond Murphy",
        "Oxford Practice Grammar Basic by Norman Coe",
        "Cambridge Grammar for IELTS by Louise Hashemi",
        "Practical English Usage by Michael Swan",
      ],
      videos: [
        "BBC Learning English - Passive Voice Basics",
        "English with Jennifer - Passive Voice for Beginners",
        "EngVid - Passive Voice Made Simple",
      ],
    },
  },

  // A2 Level - Elementary Passive Voice
  A2: {
    definition: "Passive voice with more tenses and basic agent usage",
    expandedTenses: {
      concept: "Passive voice in different tenses and forms",
      patterns: [
        "will be + past participle (future passive)",
        "has/have been + past participle (present perfect passive)",
        "can be + past participle (modal passive)",
        "should be + past participle (modal passive)",
      ],
      examples: [
        "The meeting will be held tomorrow.",
        "The work has been completed.",
        "The problem can be solved.",
        "The report should be finished soon.",
      ],
    },
    agentUsage: {
      concept: "Using 'by' to introduce the agent",
      patterns: [
        "Subject + passive verb + by + agent",
        "Agent introduction when important",
        "Omission of obvious agents",
      ],
      examples: [
        "The book was written by Shakespeare.",
        "The painting was created by Van Gogh.",
        "The letter was sent by the manager.",
        "The house was built by workers.",
      ],
    },
    learningObjectives: [
      "Use passive voice in multiple tenses",
      "Understand when to include or omit the agent",
      "Master modal passive constructions",
      "Recognize passive voice in different contexts",
      "Apply passive voice in everyday situations",
    ],
    commonMistakes: [
      "Using wrong modal form (The work can done → The work can be done)",
      "Incorrect agent placement (The book was written Shakespeare → The book was written by Shakespeare)",
      "Confusing perfect passive with simple passive",
      "Using active voice when passive is more appropriate",
    ],
    practiceActivities: [
      "Practice passive voice in different tenses",
      "Include and omit agents appropriately",
      "Use modal passive in various contexts",
      "Convert complex active sentences to passive",
    ],
    resources: {
      websites: [
        "https://www.englishpage.com/verbpage/passive.html",
        "https://www.ego4u.com/en/cram-up/grammar/passive",
        "https://www.englisch-hilfen.de/en/grammar/passive.htm",
        "https://www.grammar-monster.com/glossary/passive_voice.htm",
        "https://www.englishclub.com/grammar/verbs-voice-passive.htm",
      ],
      books: [
        "English Grammar in Use (Intermediate) by Raymond Murphy",
        "Oxford Practice Grammar Intermediate by John Eastwood",
        "Advanced Grammar in Use by Martin Hewings",
        "Longman Grammar Practice for Intermediate Students by L.G. Alexander",
        "Cambridge Grammar for First Certificate by Louise Hashemi",
      ],
      videos: [
        "English with Lucy - Passive Voice Intermediate",
        "mmmEnglish - Passive Voice Tenses",
        "Crown Academy of English - Passive Voice with Modals",
      ],
    },
  },

  // B1 Level - Intermediate Passive Voice
  B1: {
    definition:
      "Complex passive voice with continuous forms and advanced usage",
    continuousPassive: {
      concept: "Passive voice in continuous tenses",
      patterns: [
        "am/is/are being + past participle (present continuous passive)",
        "was/were being + past participle (past continuous passive)",
        "Continuous passive for ongoing actions",
      ],
      examples: [
        "The house is being painted.",
        "The road is being repaired.",
        "The book was being written.",
        "The car was being fixed.",
      ],
    },
    complexPassive: {
      concept: "Passive voice with complex structures",
      patterns: [
        "Passive with two objects",
        "Passive with phrasal verbs",
        "Passive with prepositions",
        "Passive with infinitives",
      ],
      examples: [
        "I was given a book. (passive with two objects)",
        "The meeting was called off. (phrasal verb)",
        "The problem was dealt with. (preposition)",
        "The work needs to be done. (infinitive)",
      ],
    },
    learningObjectives: [
      "Master continuous passive voice forms",
      "Handle passive voice with complex structures",
      "Use passive voice with phrasal verbs",
      "Understand passive voice with prepositions",
      "Apply passive voice in professional contexts",
    ],
    commonMistakes: [
      "Confusing continuous passive with simple passive (The house is painted → The house is being painted)",
      "Incorrect phrasal verb passive (The meeting was called → The meeting was called off)",
      "Wrong preposition usage in passive",
      "Using active voice when continuous passive is needed",
    ],
    practiceActivities: [
      "Practice continuous passive in various contexts",
      "Work with passive phrasal verbs",
      "Use passive voice with complex prepositions",
      "Convert active sentences with two objects to passive",
    ],
    resources: {
      websites: [
        "https://www.bbc.co.uk/learningenglish/english/course/eiam/unit-1/session-1",
        "https://www.englishgrammar.org/passive-voice/",
        "https://www.grammarbank.com/passive-voice-exercises.html",
        "https://www.perfect-english-grammar.com/passive-voice-exercises.html",
        "https://www.english-grammar.at/online_exercises/passive_voice/passive_voice_index.htm",
      ],
      books: [
        "Advanced Grammar in Use by Martin Hewings",
        "Oxford Practice Grammar Advanced by George Yule",
        "Cambridge Grammar for CAE and Proficiency by Martin Hewings",
        "Longman Advanced Learners Grammar by Mark Foley",
        "Practical English Usage by Michael Swan",
      ],
      videos: [
        "BBC Learning English - Advanced Passive Voice",
        "English with Jennifer - Complex Passive Structures",
        "EngVid - Passive Voice with Phrasal Verbs",
      ],
    },
  },

  // B2 Level - Upper Intermediate Passive Voice
  B2: {
    definition: "Advanced passive voice with perfect forms and formal contexts",
    perfectPassive: {
      concept: "Passive voice in perfect tenses",
      patterns: [
        "has/have been + past participle (present perfect passive)",
        "had been + past participle (past perfect passive)",
        "will have been + past participle (future perfect passive)",
      ],
      examples: [
        "The documents have been sent.",
        "The work had been finished before noon.",
        "The project will have been completed by next month.",
        "The book had been written before the war.",
      ],
    },
    formalPassive: {
      concept: "Passive voice in formal and academic contexts",
      patterns: [
        "It is believed that... (impersonal passive)",
        "It is said that... (impersonal passive)",
        "It is known that... (impersonal passive)",
        "It is thought that... (impersonal passive)",
      ],
      examples: [
        "It is believed that the Earth is round.",
        "It is said that he is very rich.",
        "It is known that smoking is harmful.",
        "It is thought that the weather will improve.",
      ],
    },
    learningObjectives: [
      "Master perfect passive voice forms",
      "Use impersonal passive constructions",
      "Apply passive voice in formal writing",
      "Understand passive voice in academic contexts",
      "Recognize and use sophisticated passive patterns",
    ],
    commonMistakes: [
      "Confusing perfect passive with simple passive",
      "Incorrect impersonal passive structure",
      "Using active voice in formal contexts where passive is preferred",
      "Wrong tense sequence in perfect passive",
    ],
    practiceActivities: [
      "Practice perfect passive in various contexts",
      "Write formal documents using passive voice",
      "Use impersonal passive in academic writing",
      "Convert complex active sentences to perfect passive",
    ],
    resources: {
      websites: [
        "https://www.cambridge.org/core/books/advanced-grammar-in-use/",
        "https://www.oxfordlearnersdictionaries.com/grammar/passive-voice",
        "https://www.grammarly.com/blog/passive-voice-writing/",
        "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/index.html",
        "https://www.ef.com/wwen/english-resources/english-grammar/passive-voice/",
      ],
      books: [
        "Cambridge Grammar for CAE and Proficiency by Martin Hewings",
        "Oxford Practice Grammar Advanced by George Yule",
        "Advanced Grammar in Use by Martin Hewings",
        "Academic Writing: A Handbook for International Students by Stephen Bailey",
        "Writing Academic English by Alice Oshima",
      ],
      videos: [
        "Cambridge English - Advanced Passive Voice",
        "Oxford Online English - Academic Writing Passive Voice",
        "BBC Learning English - Formal Passive Voice",
      ],
    },
  },

  // C1 Level - Advanced Passive Voice
  C1: {
    definition:
      "Sophisticated passive voice for academic and professional contexts",
    academicPassive: {
      concept: "Passive voice in academic writing and research",
      patterns: [
        "The research was conducted by...",
        "The data was analyzed using...",
        "The findings were interpreted as...",
        "The methodology was developed by...",
      ],
      examples: [
        "The research was conducted by a team of experts.",
        "The data was analyzed using statistical methods.",
        "The findings were interpreted as significant.",
        "The methodology was developed by the research team.",
      ],
    },
    complexStructures: {
      concept: "Complex passive constructions and variations",
      patterns: [
        "Passive with causative verbs",
        "Passive with reporting verbs",
        "Passive with complex prepositions",
        "Passive with gerunds",
      ],
      examples: [
        "The house needs to be painted. (causative)",
        "It was reported that the accident occurred. (reporting)",
        "The issue was dealt with by the committee. (complex preposition)",
        "Being seen is important for actors. (gerund)",
      ],
    },
    learningObjectives: [
      "Master sophisticated passive voice in academic writing",
      "Use complex passive constructions with precision",
      "Apply passive voice in professional and research contexts",
      "Understand nuanced passive voice usage",
      "Create sophisticated passive voice for various purposes",
    ],
    commonMistakes: [
      "Overusing passive voice in academic writing",
      "Incorrect causative passive structure",
      "Wrong reporting verb passive usage",
      "Inappropriate passive voice in certain contexts",
    ],
    practiceActivities: [
      "Write academic papers using appropriate passive voice",
      "Practice complex passive constructions",
      "Analyze passive voice in professional texts",
      "Create sophisticated passive voice for different purposes",
    ],
    resources: {
      websites: [
        "https://www.cambridge.org/core/books/advanced-grammar-in-use/",
        "https://www.oxfordlearnersdictionaries.com/grammar/passive-voice",
        "https://www.grammarly.com/blog/passive-voice-writing/",
        "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/index.html",
        "https://www.ef.com/wwen/english-resources/english-grammar/passive-voice/",
      ],
      books: [
        "Cambridge Grammar for CAE and Proficiency by Martin Hewings",
        "Oxford Practice Grammar Advanced by George Yule",
        "Advanced Grammar in Use by Martin Hewings",
        "Academic Writing: A Handbook for International Students by Stephen Bailey",
        "Writing Academic English by Alice Oshima",
      ],
      videos: [
        "Cambridge English - Advanced Passive Voice",
        "Oxford Online English - Academic Writing Passive Voice",
        "BBC Learning English - Formal Passive Voice",
      ],
    },
  },

  // C2 Level - Mastery Passive Voice
  C2: {
    definition:
      "Mastery of passive voice in all contexts including nuanced and specialized usage",
    literaryPassive: {
      concept: "Passive voice in literary and creative contexts",
      patterns: [
        "Passive for dramatic effect",
        "Passive for emphasis and focus",
        "Passive for stylistic variation",
        "Passive in poetic expressions",
      ],
      examples: [
        "The city was destroyed by the earthquake. (dramatic effect)",
        "The truth was finally revealed. (emphasis)",
        "The story was told by many voices. (stylistic)",
        "The night was filled with stars. (poetic)",
      ],
    },
    specializedPassive: {
      concept: "Passive voice in specialized professional contexts",
      patterns: [
        "Legal passive constructions",
        "Technical passive expressions",
        "Scientific passive usage",
        "Philosophical passive structures",
      ],
      examples: [
        "The defendant was found guilty by the jury. (legal)",
        "The system was designed to handle errors. (technical)",
        "The hypothesis was tested under controlled conditions. (scientific)",
        "The concept was understood differently by various philosophers. (philosophical)",
      ],
    },
    learningObjectives: [
      "Achieve mastery of passive voice in all contexts",
      "Use passive voice for sophisticated literary effects",
      "Apply passive voice in specialized professional fields",
      "Create nuanced passive voice for specific purposes",
      "Demonstrate complete control over passive voice usage",
    ],
    commonMistakes: [
      "Overusing passive voice in creative writing",
      "Inappropriate passive voice in certain specialized contexts",
      "Lack of stylistic awareness in passive usage",
      "Incorrect specialized passive constructions",
    ],
    practiceActivities: [
      "Write creative pieces using sophisticated passive voice",
      "Practice specialized passive voice in professional contexts",
      "Analyze passive voice in literary and technical texts",
      "Create nuanced passive voice for specific purposes",
    ],
    resources: {
      websites: [
        "https://www.cambridge.org/core/books/advanced-grammar-in-use/",
        "https://www.oxfordlearnersdictionaries.com/grammar/passive-voice",
        "https://www.grammarly.com/blog/passive-voice-writing/",
        "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/index.html",
        "https://www.ef.com/wwen/english-resources/english-grammar/passive-voice/",
      ],
      books: [
        "Cambridge Grammar for CAE and Proficiency by Martin Hewings",
        "Oxford Practice Grammar Advanced by George Yule",
        "Advanced Grammar in Use by Martin Hewings",
        "Academic Writing: A Handbook for International Students by Stephen Bailey",
        "Writing Academic English by Alice Oshima",
      ],
      videos: [
        "Cambridge English - Advanced Passive Voice",
        "Oxford Online English - Academic Writing Passive Voice",
        "BBC Learning English - Formal Passive Voice",
      ],
    },
  },

  // Original Passive Voice Section (Preserved)
  PassiveVoice: {
    definition:
      "Passive voice is used when the focus is on the action or the recipient of the action, not the doer (agent). The object of an active sentence becomes the subject of the passive sentence.",
    structure: {
      general:
        "Subject + form of 'to be' + past participle (V3) [+ by + agent (optional)]",
      example: "The cake **was made** (by Mary).",
    },
    tenseForms: {
      "Simple Present":
        "am/is/are + past participle → The book **is read** by many people.",
      "Present Continuous":
        "am/is/are being + past participle → The room **is being cleaned**.",
      "Simple Past":
        "was/were + past participle → The letter **was written** yesterday.",
      "Past Continuous":
        "was/were being + past participle → The house **was being painted**.",
      "Present Perfect":
        "has/have been + past participle → The documents **have been sent**.",
      "Past Perfect":
        "had been + past participle → The work **had been finished** before noon.",
      "Simple Future":
        "will be + past participle → The meeting **will be held** tomorrow.",
      "Future Perfect":
        "will have been + past participle → The project **will have been completed**.",
      "Modal Verbs":
        "modal + be + past participle → The report **must be submitted** today.",
    },
    whenToUse: [
      "When the doer is unknown, unimportant, or obvious",
      "When we want to emphasize the action or the receiver",
      "When the agent is general (e.g., people, someone, they)",
    ],
    examples: [
      {
        active: "They built the bridge in 2010.",
        passive: "The bridge **was built** in 2010.",
      },
      {
        active: "Someone is cleaning the office.",
        passive: "The office **is being cleaned**.",
      },
      {
        active: "People speak English worldwide.",
        passive: "English **is spoken** worldwide.",
      },
      {
        active: "They will announce the results tomorrow.",
        passive: "The results **will be announced** tomorrow.",
      },
    ],
    recognitionTips: [
      "Look for a form of 'to be' + past participle.",
      "Check if the subject is receiving the action.",
      "Passive sentences often omit the agent (doer).",
    ],
    commonErrors: [
      "Incorrect: The house was painting. ❌ → Correct: The house **was painted**. ✅",
      "Incorrect: The letter was write. ❌ → Correct: The letter **was written**. ✅",
      "Incorrect: The room is cleaned now. (if still in progress) ❌ → Correct: The room **is being cleaned**. ✅",
    ],
    notes: [
      "Passive voice is more common in formal writing (e.g., academic or news).",
      "Not all active sentences can be changed into passive (only transitive verbs with objects).",
      "The agent is often omitted unless it's important to mention.",
    ],
  },

  // Advanced Passive Voice Patterns and Constructions
  advancedPassivePatterns: {
    concept: "Advanced patterns and constructions involving passive voice",
    impersonalPassive: {
      pattern: "Impersonal passive constructions",
      examples: [
        "It is said that he is very rich.",
        "It is believed that the Earth is round.",
        "It is known that smoking is harmful.",
        "It is thought that the weather will improve.",
      ],
    },
    passiveWithPrepositions: {
      pattern: "Passive voice with prepositions",
      examples: [
        "The problem was dealt with by the committee.",
        "The issue was talked about at the meeting.",
        "The proposal was agreed upon by all members.",
        "The decision was arrived at after much discussion.",
      ],
    },
    passiveWithInfinitives: {
      pattern: "Passive voice with infinitives",
      examples: [
        "The work needs to be done by Friday.",
        "The house wants to be painted.",
        "The book is going to be published next month.",
        "The project is supposed to be completed soon.",
      ],
    },
    passiveWithGerunds: {
      pattern: "Passive voice with gerunds",
      examples: [
        "Being seen is important for actors.",
        "Being understood is crucial for communication.",
        "Being recognized for your work is satisfying.",
        "Being chosen for the team was an honor.",
      ],
    },
  },

  // Passive Voice Collocations and Fixed Expressions
  passiveVoiceCollocations: {
    concept:
      "Common collocations and fixed expressions involving passive voice",
    academicCollocations: {
      pattern: "Academic writing passive combinations",
      examples: [
        "The research was conducted by...",
        "The data was analyzed using...",
        "The findings were interpreted as...",
        "The methodology was developed by...",
      ],
    },
    businessCollocations: {
      pattern: "Business and professional passive combinations",
      examples: [
        "The meeting was held to discuss...",
        "The decision was made by the board.",
        "The proposal was approved by management.",
        "The contract was signed by both parties.",
      ],
    },
    everydayCollocations: {
      pattern: "Common everyday passive expressions",
      examples: [
        "The work was done by...",
        "The house was built in...",
        "The book was written by...",
        "The car was repaired by...",
      ],
    },
  },

  // Passive Voice Usage in Different Genres
  passiveVoiceGenreUsage: {
    concept: "Passive voice patterns across different genres and text types",
    formalWriting: {
      characteristics: "Frequent and sophisticated passive usage",
      examples: [
        "The committee was established to address the issue.",
        "The policy was implemented across all departments.",
        "The findings were published in a peer-reviewed journal.",
        "The procedure was followed according to protocol.",
      ],
    },
    informalWriting: {
      characteristics: "Less frequent passive usage",
      examples: [
        "The party was organized by Sarah.",
        "The food was cooked by my mom.",
        "The movie was directed by Spielberg.",
        "The song was written by John Lennon.",
      ],
    },
    academicWriting: {
      characteristics: "Extensive passive usage for objectivity",
      examples: [
        "The experiment was conducted under controlled conditions.",
        "The results were analyzed using statistical software.",
        "The hypothesis was tested through multiple trials.",
        "The conclusions were drawn based on the evidence.",
      ],
    },
    creativeWriting: {
      characteristics: "Selective passive usage for effect",
      examples: [
        "The city was destroyed by the earthquake.",
        "The truth was finally revealed.",
        "The story was told by many voices.",
        "The night was filled with stars.",
      ],
    },
  },

  // Passive Voice Frequency and Register
  passiveVoiceFrequencyAndRegister: {
    concept: "Frequency and register considerations in passive voice usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used passive constructions",
      examples: [
        "is/are + past participle (present passive)",
        "was/were + past participle (past passive)",
        "has/have been + past participle (perfect passive)",
        "will be + past participle (future passive)",
      ],
    },
    formalRegister: {
      characteristics: "High frequency and sophisticated passive usage",
      examples: [
        "The proposal was approved by the committee.",
        "The research was conducted by experts.",
        "The findings were published in journals.",
        "The methodology was developed by researchers.",
      ],
    },
    informalRegister: {
      characteristics: "Lower frequency and simple passive usage",
      examples: [
        "The food was cooked by my mom.",
        "The movie was directed by Spielberg.",
        "The book was written by a famous author.",
        "The song was sung by a great singer.",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical passive usage",
      examples: [
        "The system was designed to handle errors.",
        "The algorithm was implemented in the software.",
        "The protocol was followed during testing.",
        "The interface was developed by the team.",
      ],
    },
  },

  // Passive Voice Assessment and Evaluation
  passiveVoiceAssessment: {
    concept:
      "Assessment criteria and evaluation methods for passive voice usage",
    assessmentCriteria: {
      accuracy: "Correct passive form and structure",
      appropriateness: "Appropriate passive usage for context",
      register: "Appropriate register usage",
      fluency: "Natural passive usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with passive focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic present and past passive with simple verbs",
      A2: "Future and perfect passive, basic agent usage",
      B1: "Continuous passive, complex structures, phrasal verbs",
      B2: "Perfect passive, formal usage, impersonal passive",
      C1: "Academic passive, complex constructions, sophisticated usage",
      C2: "Mastery in all contexts including literary and specialized usage",
    },
  },

  // Passive Voice Learning Strategies
  passiveVoiceLearningStrategies: {
    concept: "Effective strategies for learning and mastering passive voice",
    recognitionStrategies: {
      strategy: "Identifying passive structures and patterns",
      techniques: [
        "Learn 'be' + past participle pattern",
        "Recognize when agent is omitted",
        "Identify passive vs active voice",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily passive exercises",
        "Reading with passive focus",
        "Converting active to passive sentences",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing passive patterns and forms",
      techniques: [
        "Learn passive tense forms",
        "Remember common passive verbs",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying passive rules in communication",
      techniques: [
        "Start with simple patterns",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Passive Voice in Language Tests
  passiveVoiceInTests: {
    concept: "Passive voice in standardized language tests",
    testTypes: {
      TOEFL: "Academic passive patterns and formal usage",
      IELTS: "Both academic and general passive usage",
      Cambridge: "British English passive variations",
      TOEIC: "Business and professional passive usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct passive form",
      sentenceCompletion: "Complete with correct passive",
      errorIdentification: "Find passive errors",
      textEditing: "Correct passive usage in text",
    },
    testStrategies: {
      formRecognition: "Quickly identify 'be' + past participle",
      contextAnalysis: "Analyze context for appropriate passive usage",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Passive Voice Mistakes
  commonPassiveVoiceMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      wrongVerbForm: {
        error: "Using wrong verb form in passive",
        example: "The house was painting. ❌",
        correction: "The house was painted. ✅",
        explanation: "Use past participle, not present participle in passive",
      },
      missingBe: {
        error: "Omitting 'be' verb in passive",
        example: "The letter written yesterday. ❌",
        correction: "The letter was written yesterday. ✅",
        explanation: "Always include appropriate form of 'be' in passive",
      },
      wrongTense: {
        error: "Using wrong tense in passive",
        example: "The room is cleaned now. (if still in progress) ❌",
        correction: "The room is being cleaned. ✅",
        explanation: "Use continuous passive for ongoing actions",
      },
      unnecessaryPassive: {
        error: "Using passive when active is better",
        example: "The book was written by me. ❌",
        correction: "I wrote the book. ✅",
        explanation: "Use active voice when agent is important and known",
      },
      missingAgent: {
        error: "Omitting agent when it's important",
        example: "The Mona Lisa was painted. ❌",
        correction: "The Mona Lisa was painted by Leonardo da Vinci. ✅",
        explanation: "Include agent when it adds important information",
      },
    },
    preventionStrategies: {
      formPractice: "Practice 'be' + past participle pattern",
      contextAwareness: "Always consider whether passive is appropriate",
      agentConsideration: "Think about whether agent should be mentioned",
      tenseAccuracy: "Ensure correct tense usage in passive constructions",
    },
  },
};

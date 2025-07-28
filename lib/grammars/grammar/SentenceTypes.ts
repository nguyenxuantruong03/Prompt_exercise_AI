import { SentenceTypesType } from "@/types/grammars/grammar/SentenceTypes";

export const SentenceTypesData: SentenceTypesType = {
  // --- Comprehensive Sentence Types Reference ---
  // Definition of Sentence Types
  sentenceTypesDefinition: {
    concept:
      "Sentence types classify sentences based on their structure and communicative purpose, including declarative, interrogative, imperative, and exclamatory forms.",
    importance:
      "Essential for effective communication, clear writing, and understanding the function of sentences in both spoken and written English.",
    corePrinciple:
      "Uses sentence structure and punctuation to convey statements, questions, commands, and emotions.",
    scope:
      "Applies to all communicative contexts where clarity, intent, and variety in sentence construction are needed.",
    references: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457651",
        url: "https://www.cambridge.org/grammarandbeyond/english-grammar-in-use",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: "2016",
        isbn: "978-0194202411",
        url: "https://elt.oup.com/catalogue/items/global/grammar_vocabulary/practical_english_usage/",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston & Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: "2002",
        isbn: "978-0521431460",
        url: "https://www.cambridge.org/core/books/cambridge-grammar-of-the-english-language/",
      },
      {
        title: "Understanding English Grammar",
        author: "Martha Kolln & Robert Funk",
        publisher: "Pearson",
        year: "2018",
        isbn: "978-0134014180",
        url: "https://www.pearson.com/us/higher-education/program/Kolln-Understanding-English-Grammar-10th-Edition/PGM334154.html",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, & Jan Svartvik",
        publisher: "Longman",
        year: "1985",
        isbn: "978-0582517349",
        url: "https://www.routledge.com/A-Comprehensive-Grammar-of-the-English-Language/Quirk-Greenbaum-Leech-Svartvik/p/book/9780582517349",
      },
    ],
  },

  // A1 Level - Basic Sentence Types (Beginner)
  A1: {
    definition:
      "Basic identification and use of declarative and interrogative sentences.",
    learningObjectives: [
      "Recognize and produce basic declarative sentences",
      "Form simple yes/no questions",
      "Use correct punctuation (periods and question marks)",
      "Understand basic sentence word order",
    ],
    declarative: {
      concept: "Declarative sentences make statements or express facts.",
      patterns: ["Subject + verb + object", "End with a period (.)"],
      examples: [
        "I am a student.",
        "She likes apples.",
        "The cat is black.",
        "We have a car.",
      ],
      exercises: [
        "Write a declarative sentence about your family.",
        "Change this question to a statement: Are you tired? → ___",
      ],
      learningNotes:
        "Focus on basic subject-verb-object structure. Emphasize the importance of the period at the end.",
      commonMistakes: [
        "Missing periods at the end of declarative sentences",
        "Incorrect word order (verb before subject)",
        "Missing articles (a, an, the)",
      ],
    },
    interrogative: {
      concept: "Interrogative sentences ask questions.",
      patterns: [
        "Auxiliary/modal verb + subject + main verb",
        "End with a question mark (?)",
      ],
      examples: [
        "Are you happy?",
        "Do you like pizza?",
        "Is it raining?",
        "Can you swim?",
      ],
      exercises: [
        "Write an interrogative sentence about your school.",
        "Change this statement to a question: You are ready. → ___",
      ],
      learningNotes:
        "Teach the inversion rule: auxiliary verb comes before subject in questions.",
      commonMistakes: [
        "Missing question marks",
        "Incorrect word order in questions",
        "Using declarative word order for questions",
      ],
    },
    assessmentCriteria: {
      accuracy:
        "Can form basic declarative and interrogative sentences with correct punctuation",
      fluency: "Can use simple sentence types in basic conversations",
      comprehension: "Can understand basic statements and questions",
    },
  },

  // A2 Level - Elementary Sentence Types
  A2: {
    definition:
      "Imperative and exclamatory sentences, and more complex questions.",
    learningObjectives: [
      "Use imperative sentences for commands and requests",
      "Express emotions with exclamatory sentences",
      "Form wh-questions (what, where, when, who, why, how)",
      "Understand the difference between formal and informal imperatives",
    ],
    imperative: {
      concept: "Imperative sentences give commands, requests, or advice.",
      patterns: [
        "Base verb (you understood as subject)",
        "End with a period or exclamation mark",
      ],
      examples: [
        "Close the door.",
        "Please sit down.",
        "Be quiet!",
        "Don't touch that.",
      ],
      exercises: [
        "Write an imperative sentence to give advice.",
        "Change this statement to a command: You should listen. → ___",
      ],
      learningNotes:
        "The subject 'you' is understood but not stated. 'Please' makes imperatives more polite.",
      commonMistakes: [
        "Adding 'you' as subject in imperatives",
        "Using wrong verb form (not base form)",
        "Missing 'please' for polite requests",
      ],
    },
    exclamatory: {
      concept: "Exclamatory sentences express strong feelings or emotions.",
      patterns: [
        "What/How + adjective + subject + verb",
        "End with an exclamation mark (!)",
      ],
      examples: [
        "What a beautiful day!",
        "How amazing this is!",
        "What a surprise!",
        "How fast he runs!",
      ],
      exercises: [
        "Write an exclamatory sentence about your favorite food.",
        "Change this statement to an exclamation: The cake is delicious. → ___",
      ],
      learningNotes:
        "Exclamatory sentences often start with 'What' or 'How' and always end with an exclamation mark.",
      commonMistakes: [
        "Missing exclamation marks",
        "Using declarative structure for exclamations",
        "Incorrect word order in exclamatory sentences",
      ],
    },
    whQuestions: {
      concept:
        "Questions that begin with wh-words to ask for specific information.",
      patterns: [
        "Wh-word + auxiliary verb + subject + main verb",
        "End with a question mark (?)",
      ],
      examples: [
        "What is your name?",
        "Where do you live?",
        "When does the movie start?",
        "Who is your teacher?",
        "Why are you late?",
        "How do you spell that?",
      ],
      learningNotes:
        "Each wh-word asks for different information: what (thing), where (place), when (time), who (person), why (reason), how (manner).",
    },
    assessmentCriteria: {
      accuracy:
        "Can use all four basic sentence types with correct punctuation and structure",
      fluency: "Can express commands, requests, and emotions appropriately",
      comprehension: "Can understand and respond to wh-questions",
    },
  },

  // B1 Level - Intermediate Sentence Types
  B1: {
    definition: "Complex sentence types, negative forms, and mixed structures.",
    learningObjectives: [
      "Form negative sentences correctly",
      "Use tag questions for confirmation",
      "Combine different sentence types in conversation",
      "Understand indirect questions",
    ],
    negativeSentences: {
      concept: "Negative sentences express negation or denial.",
      patterns: [
        "Subject + auxiliary verb + not + main verb",
        "Use 'do/does/did not', 'cannot', 'will not', etc.",
      ],
      examples: [
        "I do not like coffee.",
        "She does not play tennis.",
        "They cannot come today.",
        "He will not go to the party.",
      ],
      exercises: [
        "Write a negative sentence about your hobbies.",
        "Change this statement to a negative: She likes apples. → ___",
      ],
      learningNotes:
        "Use 'do/does/did not' for simple present/past tense. 'Cannot' is one word, not 'can not'.",
      commonMistakes: [
        "Using 'no' instead of 'not'",
        "Incorrect placement of 'not'",
        "Using 'can not' instead of 'cannot'",
      ],
    },
    tagQuestions: {
      concept:
        "Tag questions combine a statement and a short question for confirmation.",
      patterns: [
        "Statement + comma + tag (auxiliary verb + pronoun) + question mark",
        "If statement is positive, tag is negative, and vice versa.",
      ],
      examples: [
        "You are coming, aren't you?",
        "She can swim, can't she?",
        "They didn't call, did they?",
        "It's cold, isn't it?",
      ],
      exercises: [
        "Write a tag question about your city.",
        "Change this statement to a tag question: You like music. → ___",
      ],
      learningNotes:
        "The tag uses the same auxiliary verb as the main statement. If the statement is positive, the tag is negative.",
      commonMistakes: [
        "Using wrong auxiliary verb in tag",
        "Incorrect positive/negative pattern",
        "Missing comma before tag",
      ],
    },
    indirectQuestions: {
      concept:
        "Questions embedded within statements, often more polite than direct questions.",
      patterns: [
        "Statement + wh-word + subject + verb",
        "No inversion in indirect questions",
      ],
      examples: [
        "I wonder what time it is.",
        "Could you tell me where the station is?",
        "Do you know how much it costs?",
        "I'd like to know when the meeting starts.",
      ],
      learningNotes:
        "Indirect questions are more polite and formal than direct questions. No inversion is used.",
    },
    assessmentCriteria: {
      accuracy: "Can form negative sentences and tag questions correctly",
      fluency: "Can use complex sentence types in natural conversation",
      comprehension:
        "Can understand indirect questions and respond appropriately",
    },
  },

  // B2 Level - Upper Intermediate Sentence Types
  B2: {
    definition: "Compound, complex, and compound-complex sentences.",
    learningObjectives: [
      "Create compound sentences with coordinating conjunctions",
      "Form complex sentences with subordinating conjunctions",
      "Combine multiple clauses effectively",
      "Use appropriate punctuation for complex sentences",
    ],
    compoundSentences: {
      concept:
        "Compound sentences join two independent clauses with a coordinating conjunction.",
      patterns: [
        "Independent clause + , + coordinating conjunction + independent clause",
        "Use: and, but, or, nor, for, so, yet",
      ],
      examples: [
        "I wanted to go for a walk, but it was raining.",
        "She likes tea, and he prefers coffee.",
        "You can come with us, or you can stay here.",
      ],
      exercises: [
        "Write a compound sentence about your weekend.",
        "Combine these two sentences: I was tired. I finished my homework. → ___",
      ],
      learningNotes:
        "Use a comma before coordinating conjunctions. Each clause can stand alone as a complete sentence.",
      commonMistakes: [
        "Missing comma before coordinating conjunction",
        "Using wrong coordinating conjunction",
        "Creating run-on sentences without proper punctuation",
      ],
    },
    complexSentences: {
      concept:
        "Complex sentences join an independent clause with one or more dependent clauses.",
      patterns: [
        "Independent clause + subordinating conjunction + dependent clause",
        "Use: because, although, since, when, if, after, before, etc.",
      ],
      examples: [
        "I went to bed because I was tired.",
        "She will call you when she arrives.",
        "Although it was raining, we went out.",
        "If you study hard, you will pass the exam.",
      ],
      exercises: [
        "Write a complex sentence about your studies.",
        "Combine these two sentences: She was late. She missed the bus. → ___",
      ],
      learningNotes:
        "Dependent clauses cannot stand alone. They add information to the main clause.",
      commonMistakes: [
        "Using dependent clause as complete sentence",
        "Incorrect placement of dependent clause",
        "Missing subordinating conjunction",
      ],
    },
    compoundComplexSentences: {
      concept:
        "Compound-complex sentences have at least two independent clauses and one or more dependent clauses.",
      patterns: [
        "(Independent clause + , + coordinating conjunction + independent clause) + subordinating conjunction + dependent clause",
      ],
      examples: [
        "I finished my homework, and I went to bed because I was tired.",
        "She likes tea, but he prefers coffee because it wakes him up.",
      ],
      exercises: [
        "Write a compound-complex sentence about your family.",
        "Combine these sentences: I was tired. I finished my homework. I went to bed. → ___",
      ],
      learningNotes:
        "These are the most complex sentence structures. Practice with simpler sentences first.",
      commonMistakes: [
        "Creating overly complex sentences",
        "Incorrect punctuation in compound-complex sentences",
        "Losing clarity in complex structures",
      ],
    },
    assessmentCriteria: {
      accuracy:
        "Can create compound, complex, and compound-complex sentences correctly",
      fluency: "Can vary sentence structure for better writing and speaking",
      comprehension:
        "Can understand complex sentence structures in reading and listening",
    },
  },

  // C1 Level - Advanced Sentence Types
  C1: {
    definition:
      "Sophisticated sentence types for academic, professional, and creative contexts.",
    learningObjectives: [
      "Use inversion for emphasis and style",
      "Apply ellipsis for conciseness",
      "Create sophisticated sentence structures",
      "Use advanced punctuation effectively",
    ],
    inversion: {
      concept:
        "Inversion changes the normal word order for emphasis or style, often in questions or after negative adverbials.",
      patterns: [
        "Auxiliary/modal verb + subject + main verb",
        "After: never, rarely, hardly, not only, etc.",
      ],
      examples: [
        "Never have I seen such a beautiful view.",
        "Rarely does he arrive on time.",
        "Not only did she win, but she also broke the record.",
        "Hardly had I left when it started to rain.",
      ],
      exercises: [
        "Write a sentence with inversion about your experiences.",
        "Change this statement to use inversion: I have never eaten sushi. → ___",
      ],
      learningNotes:
        "Inversion is used for emphasis and formal style. It's common in academic and literary writing.",
      commonMistakes: [
        "Using inversion unnecessarily",
        "Incorrect word order in inverted sentences",
        "Overusing inversion in informal contexts",
      ],
    },
    ellipsis: {
      concept:
        "Ellipsis omits words that are understood from context, making sentences more concise.",
      patterns: [
        "Omit repeated words in compound/complex sentences",
        "Use: and, but, or, so, too, either",
      ],
      examples: [
        "She likes coffee, and I do too. (instead of: and I like coffee too)",
        "He can play the guitar, and so can I.",
        "I went to the party, but didn't stay long. (omit: I)",
        "You can have tea or coffee. (omit: You can have)",
      ],
      exercises: [
        "Write a sentence using ellipsis about your hobbies.",
        "Shorten this sentence using ellipsis: She likes apples, and I like apples too. → ___",
      ],
      learningNotes:
        "Ellipsis makes writing more concise and natural. The omitted words must be clear from context.",
      commonMistakes: [
        "Omitting words that are not clear from context",
        "Creating unclear sentences through ellipsis",
        "Overusing ellipsis",
      ],
    },
    cleftSentences: {
      concept:
        "Sentences that emphasize specific information by splitting the sentence structure.",
      patterns: [
        "It + be + emphasized element + that/who + rest of sentence",
        "What + subject + verb + be + emphasized element",
      ],
      examples: [
        "It was John who won the race.",
        "It is in London that I want to live.",
        "What I need is more time.",
        "What happened was that the car broke down.",
      ],
      learningNotes:
        "Cleft sentences are used to emphasize specific information. They're common in formal writing and speaking.",
    },
    assessmentCriteria: {
      accuracy:
        "Can use advanced sentence structures like inversion and ellipsis correctly",
      fluency: "Can create sophisticated and varied sentence structures",
      comprehension:
        "Can understand complex sentence patterns in academic and professional texts",
    },
  },

  // C2 Level - Mastery Sentence Types
  C2: {
    definition:
      "Mastery of all sentence types, including nuanced, creative, and specialized usage.",
    learningObjectives: [
      "Create stylistic variation in writing",
      "Use sentence types for rhetorical effect",
      "Master specialized sentence structures",
      "Apply sentence types in creative and academic contexts",
    ],
    stylisticVariation: {
      concept:
        "Using a variety of sentence types for style, emphasis, and effect in advanced writing.",
      patterns: [
        "Mixing declarative, interrogative, imperative, and exclamatory sentences",
        "Varying sentence length and structure for rhythm and emphasis",
      ],
      examples: [
        "The sun rose. What a day! Get up! Will you join me? (variety in a paragraph)",
        "He worked hard, but did he succeed? Yes! (mixing types)",
        "Write, revise, repeat. (imperative series)",
        "How quickly time passes! (exclamatory)",
      ],
      exercises: [
        "Write a short paragraph using all four sentence types.",
        "Rewrite this text to include stylistic variation: The weather is nice. I am happy. → ___",
      ],
      learningNotes:
        "Stylistic variation creates rhythm and interest in writing. Vary sentence length and type for better flow.",
      commonMistakes: [
        "Using only one sentence type",
        "Creating monotonous writing patterns",
        "Inappropriate mixing of formal and informal styles",
      ],
    },
    creativeUsage: {
      concept:
        "Creative manipulation of sentence types for literary, persuasive, or rhetorical effect.",
      patterns: [
        "Rhetorical questions, fragments, parallelism, repetition, etc.",
      ],
      examples: [
        "Why try? Why fail? Why succeed? (rhetorical questions)",
        "To be or not to be. (fragment)",
        "He came, he saw, he conquered. (parallelism)",
        "Never, never, never give up. (repetition)",
      ],
      exercises: [
        "Write a creative paragraph using rhetorical questions and repetition.",
        "Transform this sentence for literary effect: She left the room. → ___",
      ],
      learningNotes:
        "Creative usage breaks conventional rules for artistic effect. Use purposefully and sparingly.",
      commonMistakes: [
        "Using creative structures inappropriately",
        "Breaking rules without purpose",
        "Overusing creative techniques",
      ],
    },
    specializedStructures: {
      concept:
        "Advanced sentence structures used in specific contexts and genres.",
      patterns: [
        "Conditional sentences (mixed conditionals)",
        "Passive voice variations",
        "Reported speech transformations",
        "Nominalization and abstraction",
      ],
      examples: [
        "If I had studied harder, I would be working now. (mixed conditional)",
        "The book was being written when the author died. (passive continuous)",
        "She said she would come if she could. (reported speech)",
        "The implementation of the policy requires careful consideration. (nominalization)",
      ],
      learningNotes:
        "These structures are common in academic, professional, and literary contexts.",
    },
    assessmentCriteria: {
      accuracy: "Can use all sentence types with mastery and creativity",
      fluency:
        "Can create sophisticated and varied text with appropriate style",
      comprehension:
        "Can understand and analyze complex sentence structures in any context",
    },
  },

  // Original SentenceTypes Section (Preserved)
  SentenceTypes: {
    definition:
      "Sentence types classify sentences based on their structure and purpose.",
    types: {
      declarative: {
        definition:
          "A sentence that makes a statement or expresses an opinion.",
        structure: "Subject + verb + object",
        examples: ["She is a teacher.", "I like chocolate."],
        purpose: "To state facts or ideas.",
      },
      interrogative: {
        definition: "A sentence that asks a question.",
        structure: "Auxiliary/modal verb + subject + main verb",
        examples: ["Are you coming?", "What is your name?"],
        purpose: "To ask questions.",
      },
      imperative: {
        definition: "A sentence that gives a command or request.",
        structure: "Base verb (you understood as subject)",
        examples: ["Close the door.", "Please sit down."],
        purpose: "To give orders, advice, or requests.",
      },
      exclamatory: {
        definition: "A sentence that expresses strong feeling or emotion.",
        structure:
          "Usually starts with What/How + subject + verb or other forms",
        examples: ["What a beautiful day!", "How amazing this is!"],
        purpose: "To show surprise, excitement, or other emotions.",
      },
    },
    recognitionTips: [
      "Declarative sentences end with a period (.).",
      "Interrogative sentences end with a question mark (?).",
      "Imperative sentences often have an implied subject 'you' and end with a period or exclamation mark.",
      "Exclamatory sentences end with an exclamation mark (!).",
    ],
    commonErrors: [
      "Incorrect: Are you coming. ❌ (missing question mark)",
      "Incorrect: Please you sit down. ❌ (wrong word order)",
      "Incorrect: What a day. ❌ (missing exclamation mark)",
    ],
  },

  // Advanced Sentence Type Patterns and Constructions
  advancedSentenceTypePatterns: {
    concept: "Advanced patterns and constructions involving sentence types",
    inversion: {
      pattern: "Inversion for emphasis or style",
      examples: [
        "Never have I seen such a beautiful view.",
        "Rarely does he arrive on time.",
        "Not only did she win, but she also broke the record.",
        "Hardly had I left when it started to rain.",
      ],
    },
    ellipsis: {
      pattern: "Ellipsis for conciseness and style",
      examples: [
        "She likes coffee, and I do too.",
        "He can play the guitar, and so can I.",
        "I went to the party, but didn’t stay long.",
        "You can have tea or coffee.",
      ],
    },
    stylisticVariation: {
      pattern: "Mixing sentence types for effect",
      examples: [
        "The sun rose. What a day! Get up! Will you join me?",
        "He worked hard, but did he succeed? Yes!",
        "Write, revise, repeat.",
        "How quickly time passes!",
      ],
    },
    creativeUsage: {
      pattern: "Creative manipulation of sentence types",
      examples: [
        "Why try? Why fail? Why succeed?",
        "To be or not to be.",
        "He came, he saw, he conquered.",
        "Never, never, never give up.",
      ],
    },
  },

  // Sentence Type Collocations and Fixed Expressions
  sentenceTypeCollocations: {
    concept:
      "Common collocations and fixed expressions involving sentence types",
    declarativeCollocations: {
      pattern: "Declarative sentence collocations",
      examples: [
        "It is important to note that...",
        "Research shows that...",
        "The results indicate that...",
        "This suggests that...",
      ],
    },
    interrogativeCollocations: {
      pattern: "Interrogative sentence collocations",
      examples: [
        "What do you think?",
        "How does it work?",
        "Why is that important?",
        "Where can I find...?",
      ],
    },
    imperativeCollocations: {
      pattern: "Imperative sentence collocations",
      examples: [
        "Please be careful.",
        "Take a seat.",
        "Listen carefully.",
        "Don’t forget to...",
      ],
    },
    exclamatoryCollocations: {
      pattern: "Exclamatory sentence collocations",
      examples: [
        "What a surprise!",
        "How wonderful!",
        "What a mess!",
        "How beautiful!",
      ],
    },
  },

  // Sentence Type Usage in Different Genres
  sentenceTypeGenreUsage: {
    concept: "Sentence type patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and precise sentence type usage",
      examples: [
        "It is important to note that... (declarative)",
        "What are the implications of this finding? (interrogative)",
        "Please refer to the appendix. (imperative)",
        "How significant these results are! (exclamatory)",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational sentence type usage",
      examples: [
        "I love pizza. (declarative)",
        "Are you coming? (interrogative)",
        "Sit down! (imperative)",
        "What a day! (exclamatory)",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic sentence type structures",
      examples: [
        "The results indicate that... (declarative)",
        "How does this process work? (interrogative)",
        "Consider the following example. (imperative)",
        "How important is this discovery! (exclamatory)",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive sentence type usage",
      examples: [
        "The sun rose. (declarative)",
        "Will you join me? (interrogative)",
        "Get up! (imperative)",
        "What a beautiful morning! (exclamatory)",
      ],
    },
  },

  // Sentence Type Frequency and Register
  sentenceTypeFrequencyAndRegister: {
    concept: "Frequency and register considerations in sentence type usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used sentence type combinations",
      examples: [
        "I am a student. (declarative)",
        "Are you ready? (interrogative)",
        "Please sit down. (imperative)",
        "What a surprise! (exclamatory)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise sentence type usage",
      examples: [
        "It is important to note that... (declarative)",
        "What are the implications of this finding? (interrogative)",
        "Please refer to the appendix. (imperative)",
        "How significant these results are! (exclamatory)",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed sentence type usage",
      examples: [
        "I love pizza. (declarative)",
        "Are you coming? (interrogative)",
        "Sit down! (imperative)",
        "What a day! (exclamatory)",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical sentence type usage",
      examples: [
        "The device is working properly. (declarative)",
        "How does the system operate? (interrogative)",
        "Press the button to start. (imperative)",
        "What a powerful engine! (exclamatory)",
      ],
    },
  },

  // Sentence Type Exercises and Practice Activities
  sentenceTypeExercises: {
    concept: "Comprehensive exercises for practicing sentence types",
    basicExercises: {
      type: "Simple sentence type usage",
      exercises: [
        "Write a declarative sentence about your family.",
        "Write an interrogative sentence about your school.",
        "Write an imperative sentence to give advice.",
        "Write an exclamatory sentence about your favorite food.",
      ],
    },
    intermediateExercises: {
      type: "Complex sentence type usage",
      exercises: [
        "Change this question to a statement: Are you tired? → ___",
        "Change this statement to a question: You are ready. → ___",
        "Change this statement to a command: You should listen. → ___",
        "Change this statement to an exclamation: The cake is delicious. → ___",
      ],
    },
    advancedExercises: {
      type: "Advanced sentence type patterns",
      exercises: [
        "Write a compound sentence about your weekend.",
        "Write a complex sentence about your studies.",
        "Write a compound-complex sentence about your family.",
        "Write a sentence with inversion about your experiences.",
        "Write a sentence using ellipsis about your hobbies.",
        "Write a short paragraph using all four sentence types.",
      ],
    },
    errorCorrection: {
      type: "Identify and correct sentence type errors",
      exercises: [
        "Incorrect: Are you coming. → ___",
        "Incorrect: Please you sit down. → ___",
        "Incorrect: What a day. → ___",
      ],
    },
  },

  // Sentence Type Assessment and Evaluation
  sentenceTypeAssessment: {
    concept:
      "Assessment criteria and evaluation methods for sentence type usage",
    assessmentCriteria: {
      accuracy: "Correct sentence type structure and form",
      appropriateness: "Appropriate sentence type choice for context",
      register: "Appropriate register usage",
      fluency: "Natural sentence type usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with sentence type focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic declarative and interrogative sentences",
      A2: "Imperative and exclamatory sentences",
      B1: "Negative sentences, tag questions",
      B2: "Compound, complex, compound-complex sentences",
      C1: "Inversion, ellipsis, advanced structures",
      C2: "Stylistic variation, creative usage",
    },
  },

  // Sentence Type Learning Strategies
  sentenceTypeLearningStrategies: {
    concept: "Effective strategies for learning and mastering sentence types",
    recognitionStrategies: {
      strategy: "Identifying sentence type patterns and structures",
      techniques: [
        "Learn basic sentence type forms",
        "Recognize punctuation and word order",
        "Identify stylistic and creative variations",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily sentence type exercises",
        "Reading with sentence type focus",
        "Writing sentences with different patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing sentence type patterns and rules",
      techniques: [
        "Learn sentence types by category",
        "Remember punctuation and structure rules",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying sentence type rules in communication",
      techniques: [
        "Start with basic declarative/interrogative sentences",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Sentence Types in Language Tests
  sentenceTypesInTests: {
    concept: "Sentence types in standardized language tests",
    testTypes: {
      TOEFL: "Academic sentence types and formal usage",
      IELTS: "Both academic and general sentence type usage",
      Cambridge: "British English sentence type variations",
      TOEIC: "Business and professional sentence type usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct sentence type",
      sentenceCompletion: "Complete with correct sentence type",
      errorIdentification: "Find sentence type errors",
      textEditing: "Correct sentence type usage in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify sentence type patterns",
      contextAnalysis: "Analyze context for appropriate usage",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Sentence Type Mistakes
  commonSentenceTypeMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      missingPunctuation: {
        error: "Missing punctuation for sentence type",
        example: "Are you coming. ❌",
        correction: "Are you coming? ✅",
        explanation: "Use a question mark for interrogative sentences.",
      },
      wrongWordOrder: {
        error: "Incorrect word order for sentence type",
        example: "Please you sit down. ❌",
        correction: "Please sit down. ✅",
        explanation: "Imperative sentences use base verb, not subject + verb.",
      },
      missingExclamation: {
        error: "Missing exclamation mark for exclamatory sentence",
        example: "What a day. ❌",
        correction: "What a day! ✅",
        explanation: "Use an exclamation mark for exclamatory sentences.",
      },
    },
    preventionStrategies: {
      punctuationPractice:
        "Practice correct punctuation for each sentence type",
      wordOrderPractice: "Learn correct word order for each sentence type",
      varietyPractice: "Practice using a variety of sentence types in writing",
    },
  },
};

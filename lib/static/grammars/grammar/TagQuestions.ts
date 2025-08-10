import { TagQuestionsType } from "@/types/grammars/grammar/TagQuestions";

export const TagQuestionsData:TagQuestionsType = {
  id: 113,
  // --- Comprehensive Tag Questions Reference ---
  // Definition of Tag Questions
  tagQuestionsDefinition: {
    concept:
      "Tag questions are interrogative structures consisting of a declarative statement followed by a short question tag, used to seek confirmation, agreement, or clarification while maintaining conversational flow.",
    importance:
      "Essential for interactive communication, seeking agreement, confirmation, and maintaining engagement in both formal and informal contexts",
    corePrinciple:
      "Uses auxiliary verb agreement and pronoun matching to create cohesive question tags that maintain grammatical consistency with the main statement",
    scope:
      "Applies to all communicative contexts where confirmation, agreement, or interactive engagement is needed",
    references: [
      "Murphy, R. (2019). English Grammar in Use. Cambridge University Press.",
      "Swan, M. (2016). Practical English Usage. Oxford University Press.",
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/question-tags",
      "https://www.grammarly.com/blog/question-tags/",
      "https://www.ef.com/wwen/english-resources/english-grammar/question-tags/",
    ],
  },

  // A1 Level - Basic Tag Questions (Beginner)
  A1: {
    definition:
      "Basic tag questions with simple 'be' verb structures and fundamental auxiliary verbs",
    learningObjectives: [
      "Understand basic positive/negative tag question patterns",
      "Master 'be' verb tag questions (am/is/are)",
      "Learn 'do/does' tag questions with simple present tense",
      "Recognize pronoun matching in tag questions",
      "Practice basic confirmation seeking in conversations",
    ],
    coreConcepts: {
      positiveStatementNegativeTag: "Statement + negative auxiliary + pronoun",
      negativeStatementPositiveTag: "Statement + positive auxiliary + pronoun",
      auxiliaryAgreement: "Tag auxiliary must match main verb tense and form",
      pronounMatching: "Tag pronoun must match the subject of the statement",
    },
    basicBeTagQuestions: {
      concept: "Simple tag questions with 'be' verb",
      patterns: [
        "Subject + am/is/are + adjective + aren't/isn't + pronoun",
        "Subject + am/is/are + not + adjective + am/is/are + pronoun",
      ],
      examples: [
        "You are happy, aren't you?",
        "She is tall, isn't she?",
        "They are students, aren't they?",
        "He is not here, is he?",
        "I am early, aren't I?",
      ],
      specialCases: {
        "I am": "Always uses 'aren't I' in tag questions",
        explanation:
          "This is the only exception to the auxiliary agreement rule",
      },
    },
    basicDoTagQuestions: {
      concept: "Simple tag questions with 'do/does'",
      patterns: [
        "Subject + do/does + verb + don't/doesn't + pronoun",
        "Subject + don't/doesn't + verb + do/does + pronoun",
      ],
      examples: [
        "You like coffee, don't you?",
        "She works here, doesn't she?",
        "They don't speak French, do they?",
        "He doesn't live here, does he?",
      ],
      verbAgreement: {
        singularSubjects: "Use 'does/doesn't' with he/she/it",
        pluralSubjects: "Use 'do/don't' with I/you/we/they",
      },
    },
    commonMistakes: [
      "Incorrect: You is coming, isn't you? → Correct: You are coming, aren't you?",
      "Incorrect: She don't like it, doesn't she? → Correct: She doesn't like it, does she?",
      "Incorrect: I'm late, isn't I? → Correct: I'm late, aren't I?",
    ],
    references: [
      "Murphy, R. (2019). English Grammar in Use. Cambridge University Press. (Units 52-53)",
      "https://learnenglish.britishcouncil.org/grammar/beginner-to-pre-intermediate/question-tags",
      "https://www.englishclub.com/grammar/tag-questions.htm",
    ],
  },

  // A2 Level - Elementary Tag Questions
  A2: {
    definition:
      "Tag questions with more verb forms, basic modal verbs, and expanded tense usage",
    learningObjectives: [
      "Master tag questions with modal verbs (can, will, should)",
      "Learn tag questions with 'have/has' for possession",
      "Understand tag questions with future tense (will)",
      "Practice tag questions in different contexts",
      "Develop confidence in using tag questions for confirmation",
    ],
    coreConcepts: {
      modalVerbTags: "Modal verbs maintain their form in tag questions",
      possessionTags: "Have/has for possession use haven't/hasn't in tags",
      futureTags: "Will + verb uses won't in negative tags",
      contextAwareness:
        "Choose appropriate tag questions for different situations",
    },
    expandedVerbTagQuestions: {
      concept: "Tag questions with different verb forms",
      patterns: [
        "Subject + can + verb + can't + pronoun",
        "Subject + will + verb + won't + pronoun",
        "Subject + have/has + noun + haven't/hasn't + pronoun",
      ],
      examples: [
        "You can swim, can't you?",
        "She will come, won't she?",
        "They have a car, haven't they?",
        "He has finished, hasn't he?",
        "We can't go, can we?",
      ],
      usageNotes: {
        can: "Used for ability and possibility",
        will: "Used for future predictions and intentions",
        have: "Used for possession and ownership",
      },
    },
    modalTagQuestions: {
      concept: "Tag questions with basic modal verbs",
      patterns: [
        "Subject + can + verb + can't + pronoun",
        "Subject + will + verb + won't + pronoun",
        "Subject + should + verb + shouldn't + pronoun",
      ],
      examples: [
        "You can help, can't you?",
        "She will arrive soon, won't she?",
        "They should study, shouldn't they?",
        "He can't drive, can he?",
      ],
      modalMeanings: {
        can: "Ability, permission, possibility",
        will: "Future, willingness, prediction",
        should: "Advice, obligation, expectation",
      },
    },
    commonMistakes: [
      "Incorrect: You can swim, don't you? → Correct: You can swim, can't you?",
      "Incorrect: She will come, doesn't she? → Correct: She will come, won't she?",
      "Incorrect: They have a car, don't they? → Correct: They have a car, haven't they?",
    ],
    references: [
      "Swan, M. (2016). Practical English Usage. Oxford University Press. (Section 487)",
      "https://www.perfect-english-grammar.com/question-tags.html",
      "https://www.grammar-monster.com/glossary/question_tags.htm",
    ],
  },

  // B1 Level - Intermediate Tag Questions
  B1: {
    definition:
      "Complex tag questions with perfect tenses, continuous tenses, and nuanced expressions",
    learningObjectives: [
      "Master tag questions with perfect tenses (have/has/had + past participle)",
      "Learn tag questions with continuous tenses (be + verb-ing)",
      "Understand tag questions with past tense forms",
      "Practice tag questions in complex sentence structures",
      "Develop ability to use tag questions for emphasis and clarification",
    ],
    coreConcepts: {
      perfectTenseTags:
        "Have/has/had + past participle use haven't/hasn't/hadn't in tags",
      continuousTenseTags:
        "Be + verb-ing uses aren't/isn't/wasn't/weren't in tags",
      pastTenseTags: "Past tense verbs use did/didn't in tags",
      complexStructures: "Tag questions can be used with embedded clauses",
    },
    perfectTenseTagQuestions: {
      concept: "Tag questions with perfect tenses",
      patterns: [
        "Subject + have/has + past participle + haven't/hasn't + pronoun",
        "Subject + had + past participle + hadn't + pronoun",
        "Subject + have/has + been + verb-ing + haven't/hasn't + pronoun",
      ],
      examples: [
        "You have finished, haven't you?",
        "She has been working, hasn't she?",
        "They had left, hadn't they?",
        "He hasn't arrived, has he?",
        "We have been waiting, haven't we?",
      ],
      tenseUsage: {
        presentPerfect: "For completed actions with present relevance",
        pastPerfect: "For actions completed before another past action",
        presentPerfectContinuous:
          "For ongoing actions that started in the past",
      },
    },
    continuousTenseTagQuestions: {
      concept: "Tag questions with continuous tenses",
      patterns: [
        "Subject + am/is/are + verb-ing + aren't/isn't + pronoun",
        "Subject + was/were + verb-ing + wasn't/weren't + pronoun",
      ],
      examples: [
        "You are working, aren't you?",
        "She is studying, isn't she?",
        "They were sleeping, weren't they?",
        "He isn't listening, is he?",
      ],
      aspectUsage: {
        presentContinuous: "For actions happening now or around now",
        pastContinuous: "For actions in progress at a specific past time",
      },
    },
    complexStructures: {
      concept: "Tag questions in complex sentence structures",
      patterns: [
        "I think + clause + tag question",
        "She said + clause + tag question",
        "The report shows + clause + tag question",
      ],
      examples: [
        "I think you're right, aren't you?",
        "She said she would come, didn't she?",
        "The report shows improvement, doesn't it?",
      ],
    },
    commonMistakes: [
      "Incorrect: You have finished, don't you? → Correct: You have finished, haven't you?",
      "Incorrect: She is working, doesn't she? → Correct: She is working, isn't she?",
      "Incorrect: They had left, didn't they? → Correct: They had left, hadn't they?",
    ],
    references: [
      "Murphy, R. (2019). English Grammar in Use. Cambridge University Press. (Units 54-55)",
      "https://www.englishpage.com/verbpage/presentperfect.html",
      "https://www.ef.com/wwen/english-resources/english-grammar/present-perfect/",
    ],
  },

  // B2 Level - Upper Intermediate Tag Questions
  B2: {
    definition:
      "Advanced tag questions with complex structures, formal expressions, and sophisticated modal usage",
    learningObjectives: [
      "Master complex modal verb tag questions (would, could, might, must)",
      "Learn formal and academic tag question patterns",
      "Understand tag questions with passive voice",
      "Practice tag questions in professional contexts",
      "Develop nuanced understanding of tag question intonation and meaning",
    ],
    coreConcepts: {
      complexModalTags:
        "Advanced modal verbs require sophisticated tag formation",
      formalExpressions:
        "Academic and professional contexts require formal tag patterns",
      passiveVoiceTags: "Passive voice structures maintain their form in tags",
      registerAwareness:
        "Choose appropriate formality level for different contexts",
    },
    complexModalTagQuestions: {
      concept: "Tag questions with complex modal verbs and expressions",
      patterns: [
        "Subject + would + verb + wouldn't + pronoun",
        "Subject + could + verb + couldn't + pronoun",
        "Subject + might + verb + mightn't + pronoun",
        "Subject + must + verb + mustn't + pronoun",
      ],
      examples: [
        "You would help, wouldn't you?",
        "She could come, couldn't she?",
        "They might agree, mightn't they?",
        "He must know, mustn't he?",
        "We wouldn't mind, would we?",
      ],
      modalMeanings: {
        would: "Hypothetical situations, polite requests, past habits",
        could: "Ability, possibility, polite requests",
        might: "Possibility, uncertainty, polite suggestions",
        must: "Certainty, logical deduction, strong obligation",
      },
    },
    formalTagQuestions: {
      concept: "Formal and academic tag question patterns",
      patterns: [
        "Subject + appear/seem + to + verb + don't/doesn't + pronoun",
        "Subject + be + likely + to + verb + isn't/aren't + pronoun",
        "It + be + the case + that + clause + isn't + it",
      ],
      examples: [
        "The results appear significant, don't they?",
        "The study seems conclusive, doesn't it?",
        "It is likely to succeed, isn't it?",
        "It is the case that..., isn't it?",
      ],
      usageContexts: {
        academic: "Research papers, scholarly articles, formal presentations",
        professional:
          "Business meetings, official documents, formal correspondence",
      },
    },
    passiveVoiceTagQuestions: {
      concept: "Tag questions with passive voice structures",
      patterns: [
        "Subject + be + past participle + aren't/isn't + pronoun",
        "Subject + have/has + been + past participle + haven't/hasn't + pronoun",
      ],
      examples: [
        "The work was completed, wasn't it?",
        "The decision has been made, hasn't it?",
        "The book was written by him, wasn't it?",
        "The meeting is being held, isn't it?",
      ],
    },
    intonationAndMeaning: {
      concept: "How intonation affects tag question meaning",
      risingIntonation: "Genuine question seeking information",
      fallingIntonation: "Expecting agreement or confirmation",
      examples: [
        "You're coming, aren't you? (falling - expecting yes)",
        "You're coming, aren't you? (rising - genuine question)",
      ],
    },
    commonMistakes: [
      "Incorrect: You would help, don't you? → Correct: You would help, wouldn't you?",
      "Incorrect: The results appear significant, aren't they? → Correct: The results appear significant, don't they?",
      "Incorrect: It is likely to succeed, doesn't it? → Correct: It is likely to succeed, isn't it?",
    ],
    references: [
      "Swan, M. (2016). Practical English Usage. Oxford University Press. (Sections 488-490)",
      "https://www.cambridge.org/core/books/advanced-grammar-in-use/question-tags",
      "https://www.oxfordlearnersdictionaries.com/grammar/question-tags",
    ],
  },

  // C1 Level - Advanced Tag Questions
  C1: {
    definition:
      "Sophisticated tag questions for academic and professional contexts with nuanced expressions and complex structures",
    learningObjectives: [
      "Master academic tag question patterns and research language",
      "Learn sophisticated tag question expressions and structures",
      "Understand tag questions in complex argumentative contexts",
      "Practice tag questions in specialized professional fields",
      "Develop mastery of tag questions in formal discourse",
    ],
    coreConcepts: {
      academicLanguage: "Research and scholarly tag question patterns",
      sophisticatedExpressions:
        "Advanced vocabulary and complex structures in tags",
      argumentativeContexts: "Tag questions in debates and complex discussions",
      specializedUsage: "Field-specific tag question patterns and terminology",
    },
    academicTagQuestions: {
      concept: "Tag questions in academic and research contexts",
      patterns: [
        "The findings + verb + that + clause + don't/doesn't + they",
        "The research + demonstrate/indicate + noun + don't/doesn't + it",
        "The evidence + suggest + noun + don't/doesn't + it",
      ],
      examples: [
        "The findings indicate improvement, don't they?",
        "The research demonstrates success, doesn't it?",
        "The evidence suggests progress, doesn't it?",
        "The study shows results, doesn't it?",
      ],
      academicVerbs: {
        indicate: "Shows or points to something",
        demonstrate: "Proves or shows clearly",
        suggest: "Implies or hints at something",
        reveal: "Makes something known",
        establish: "Proves or confirms something",
      },
    },
    sophisticatedTagQuestions: {
      concept: "Sophisticated tag question expressions and structures",
      patterns: [
        "Subject + fail + to + verb + don't/doesn't + pronoun",
        "Subject + lack + noun + don't/doesn't + pronoun",
        "Subject + be + devoid + of + noun + isn't/aren't + pronoun",
      ],
      examples: [
        "The study fails to address limitations, doesn't it?",
        "The approach lacks methodology, doesn't it?",
        "The argument is devoid of logic, isn't it?",
        "The proposal lacks evidence, doesn't it?",
      ],
      sophisticatedVocabulary: {
        fail: "Not succeed in doing something",
        lack: "Not have enough of something",
        devoid: "Completely without something",
        deficient: "Not having enough of something",
        inadequate: "Not sufficient or suitable",
      },
    },
    argumentativeTagQuestions: {
      concept: "Tag questions in complex argumentative contexts",
      patterns: [
        "The argument + withstand + scrutiny + don't/doesn't + it",
        "The position + be + tenable + isn't/aren't + pronoun",
        "The conclusion + follow + logically + don't/doesn't + it",
      ],
      examples: [
        "The argument withstands scrutiny, doesn't it?",
        "The position is tenable, isn't it?",
        "The conclusion follows logically, doesn't it?",
        "The reasoning is sound, isn't it?",
      ],
    },
    specializedProfessionalTags: {
      concept: "Tag questions in specialized professional contexts",
      patterns: [
        "Legal: The defendant + be + guilty + isn't/aren't + pronoun",
        "Technical: The system + meet + requirements + don't/doesn't + it",
        "Scientific: The hypothesis + be + supported + isn't/aren't + it",
      ],
      examples: [
        "The defendant is guilty beyond reasonable doubt, isn't he?",
        "The system meets all requirements, doesn't it?",
        "The hypothesis is supported by evidence, isn't it?",
        "The methodology is rigorous, isn't it?",
      ],
    },
    commonMistakes: [
      "Incorrect: The findings indicate improvement, aren't they? → Correct: The findings indicate improvement, don't they?",
      "Incorrect: The study fails to address limitations, isn't it? → Correct: The study fails to address limitations, doesn't it?",
      "Incorrect: The argument is devoid of logic, doesn't it? → Correct: The argument is devoid of logic, isn't it?",
    ],
    references: [
      "Hewings, M. (2013). Advanced Grammar in Use. Cambridge University Press. (Unit 50)",
      "https://www.cambridge.org/core/books/advanced-grammar-in-use/question-tags",
      "https://www.oxfordlearnersdictionaries.com/grammar/question-tags",
    ],
  },

  // C2 Level - Mastery Tag Questions
  C2: {
    definition:
      "Mastery of tag questions in all contexts including nuanced and specialized usage across all registers and genres",
    learningObjectives: [
      "Achieve complete mastery of tag questions in all contexts",
      "Master literary and creative tag question usage",
      "Understand tag questions in specialized professional fields",
      "Develop nuanced understanding of tag question pragmatics",
      "Create sophisticated tag question patterns for specific purposes",
    ],
    coreConcepts: {
      completeMastery:
        "Ability to use tag questions appropriately in any context",
      literaryUsage: "Creative and artistic tag question expressions",
      specializedFields: "Expert-level tag questions in professional domains",
      pragmaticUnderstanding:
        "Deep understanding of tag question function and effect",
    },
    literaryTagQuestions: {
      concept: "Tag questions in literary and creative contexts",
      patterns: [
        "Tag questions for dramatic effect",
        "Tag questions for emphasis and focus",
        "Tag questions for stylistic variation",
        "Tag questions in poetic expressions",
      ],
      examples: [
        "The beauty of truth is eternal, isn't it? (dramatic effect)",
        "We all seek meaning in life, don't we? (emphasis)",
        "The human spirit endures, doesn't it? (stylistic)",
        "Love conquers all, doesn't it? (poetic)",
      ],
      literaryDevices: {
        dramaticEffect: "Creating tension or emphasis through tag questions",
        rhetoricalDevice: "Using tag questions to engage readers",
        stylisticVariation: "Adding variety to writing through tag questions",
        emotionalAppeal: "Creating emotional connection through tag questions",
      },
    },
    specializedTagQuestions: {
      concept: "Tag questions in specialized professional contexts",
      patterns: [
        "Legal tag question expressions",
        "Technical tag question patterns",
        "Scientific tag question usage",
        "Philosophical tag question structures",
      ],
      examples: [
        "The defendant is guilty beyond reasonable doubt, isn't he? (legal)",
        "The system meets all requirements, doesn't it? (technical)",
        "The hypothesis is supported by evidence, isn't it? (scientific)",
        "The argument withstands logical scrutiny, doesn't it? (philosophical)",
      ],
      specializedFields: {
        legal: "Courtroom language, legal documents, judicial proceedings",
        technical: "Engineering, computer science, technical documentation",
        scientific: "Research papers, laboratory reports, scientific discourse",
        philosophical:
          "Academic philosophy, theoretical discussions, abstract reasoning",
      },
    },
    pragmaticMastery: {
      concept: "Complete understanding of tag question pragmatics and usage",
      functions: {
        confirmation: "Seeking agreement or confirmation",
        clarification: "Requesting clarification or explanation",
        emphasis: "Emphasizing a point or statement",
        engagement: "Maintaining conversational engagement",
        politeness: "Using tag questions for polite interaction",
      },
      contextualFactors: {
        relationship: "Speaker-listener relationship affects tag choice",
        formality: "Formal vs informal contexts require different patterns",
        purpose: "Different purposes require different tag question types",
        culture: "Cultural factors influence tag question usage",
      },
    },
    advancedPatterns: {
      concept: "Advanced and creative tag question patterns",
      patterns: [
        "Embedded tag questions in complex sentences",
        "Multiple tag questions in sequence",
        "Tag questions with ellipsis and omission",
        "Creative tag question formations",
      ],
      examples: [
        "I think, and you probably agree, that this is important, don't you?",
        "You're coming, aren't you? And bringing the documents, won't you?",
        "The truth is... well, you know what I mean, don't you?",
        "Life, as they say, is what happens while you're making plans, isn't it?",
      ],
    },
    commonMistakes: [
      "Incorrect: The beauty of truth is eternal, doesn't it? → Correct: The beauty of truth is eternal, isn't it?",
      "Incorrect: The defendant is guilty beyond reasonable doubt, doesn't he? → Correct: The defendant is guilty beyond reasonable doubt, isn't he?",
      "Incorrect: The system meets all requirements, isn't it? → Correct: The system meets all requirements, doesn't it?",
    ],
    references: [
      "Carter, R. & McCarthy, M. (2006). Cambridge Grammar of English. Cambridge University Press.",
      "https://www.cambridge.org/core/books/cambridge-grammar-of-english/question-tags",
      "https://www.oxfordlearnersdictionaries.com/grammar/question-tags",
    ],
  },

  // Original Tag Questions Section (Preserved)
  TagQuestions: {
    definition:
      "Tag questions are short questions added to the end of a statement, used to confirm or check information.",
    structure: {
      positiveStatement: {
        rule: "Statement + negative auxiliary/modal verb + pronoun",
        example: "You are coming, aren't you?",
      },
      negativeStatement: {
        rule: "Statement + positive auxiliary/modal verb + pronoun",
        example: "She isn't here, is she?",
      },
    },
    auxiliaryVerbs: [
      "am",
      "is",
      "are",
      "was",
      "were",
      "have",
      "has",
      "had",
      "do",
      "does",
      "did",
      "will",
      "would",
      "can",
      "could",
      "should",
      "must",
      "might",
      "shall",
    ],
    examples: [
      "He is tall, isn't he?",
      "They don't like pizza, do they?",
      "You've finished your homework, haven't you?",
      "She can swim, can't she?",
      "We will leave soon, won't we?",
    ],
    specialCases: {
      imperative: {
        rule: "Imperative sentence + will you / won't you / can you / could you?",
        example: "Close the door, will you?",
      },
      "let's": {
        rule: "Let's + verb + shall we?",
        example: "Let's go to the park, shall we?",
      },
      "I am": {
        rule: "I am + aren't I?",
        example: "I'm early, aren't I?",
      },
    },
    recognitionTips: [
      "If statement is positive → tag is negative.",
      "If statement is negative → tag is positive.",
      "Use correct auxiliary/modal verb matching the main verb tense.",
      "Use correct pronoun matching the subject.",
    ],
    commonErrors: [
      "Incorrect: You is coming, isn't you? ❌ → Correct: You are coming, aren't you? ✅",
      "Incorrect: She don't like it, doesn't she? ❌ → Correct: She doesn't like it, does she? ✅",
      "Incorrect: I'm late, isn't I? ❌ → Correct: I'm late, aren't I? ✅",
    ],
    notes: [
      "Tag questions are used to seek agreement or confirmation.",
      "They are common in spoken English to keep conversations interactive.",
      "The intonation can change the meaning (rising intonation = genuine question; falling intonation = expecting agreement).",
    ],
  },

  // Advanced Tag Question Patterns and Constructions
  advancedTagQuestionPatterns: {
    concept: "Advanced patterns and constructions involving tag questions",
    embeddedTagQuestions: {
      pattern: "Tag questions embedded in complex sentences",
      examples: [
        "I think you're right, aren't you?",
        "She said she would come, didn't she?",
        "The report shows improvement, doesn't it?",
        "We all know the truth, don't we?",
      ],
    },
    rhetoricalTagQuestions: {
      pattern: "Rhetorical tag questions for emphasis",
      examples: [
        "We all want peace, don't we?",
        "The truth is obvious, isn't it?",
        "Everyone deserves respect, don't they?",
        "Life is precious, isn't it?",
      ],
    },
    conditionalTagQuestions: {
      pattern: "Tag questions in conditional structures",
      examples: [
        "If you go, I'll go too, won't I?",
        "If it rains, we'll stay home, won't we?",
        "If she calls, you'll answer, won't you?",
        "If they agree, we can proceed, can't we?",
      ],
    },
    passiveTagQuestions: {
      pattern: "Tag questions with passive voice",
      examples: [
        "The work was completed, wasn't it?",
        "The decision has been made, hasn't it?",
        "The book was written by him, wasn't it?",
        "The meeting is being held, isn't it?",
      ],
    },
  },

  // Tag Question Collocations and Fixed Expressions
  tagQuestionCollocations: {
    concept:
      "Common collocations and fixed expressions involving tag questions",
    verbCollocations: {
      pattern: "Common verb tag question combinations",
      examples: [
        "think/believe + so/not + don't/doesn't + pronoun",
        "hope/expect + to + verb + don't/doesn't + pronoun",
        "seem/appear + to + verb + don't/doesn't + pronoun",
        "want/need + to + verb + don't/doesn't + pronoun",
      ],
    },
    adjectiveCollocations: {
      pattern: "Common adjective tag question combinations",
      examples: [
        "be + sure/certain + aren't/isn't + pronoun",
        "be + likely + to + verb + isn't/aren't + pronoun",
        "be + supposed + to + verb + isn't/aren't + pronoun",
        "be + going + to + verb + isn't/aren't + pronoun",
      ],
    },
    formalCollocations: {
      pattern: "Formal tag question expressions",
      examples: [
        "it + be + the case + that + clause + isn't + it",
        "the + noun + appear/seem + to + verb + don't/doesn't + pronoun",
        "subject + be + likely + to + verb + isn't/aren't + pronoun",
        "subject + fail + to + verb + don't/doesn't + pronoun",
      ],
    },
  },

  // Tag Question Usage in Different Genres
  tagQuestionGenreUsage: {
    concept: "Tag question patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and precise tag question usage",
      examples: [
        "The findings indicate improvement, don't they?",
        "The research demonstrates success, doesn't it?",
        "The evidence suggests progress, doesn't it?",
        "The study shows results, doesn't it?",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational tag question usage",
      examples: [
        "You're coming, aren't you?",
        "She likes coffee, doesn't she?",
        "They can swim, can't they?",
        "We should go, shouldn't we?",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic tag question structures",
      examples: [
        "The study fails to address limitations, doesn't it?",
        "The approach lacks methodology, doesn't it?",
        "The argument is devoid of logic, isn't it?",
        "The proposal lacks evidence, doesn't it?",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive tag question usage",
      examples: [
        "The beauty of truth is eternal, isn't it?",
        "We all seek meaning in life, don't we?",
        "The human spirit endures, doesn't it?",
        "Love conquers all, doesn't it?",
      ],
    },
  },

  // Tag Question Frequency and Register
  tagQuestionFrequencyAndRegister: {
    concept: "Frequency and register considerations in tag question usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used tag question combinations",
      examples: [
        "be + adjective + aren't/isn't + pronoun (very common)",
        "do/does + verb + don't/doesn't + pronoun (frequent)",
        "can + verb + can't + pronoun (common)",
        "will + verb + won't + pronoun (common)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise tag question usage",
      examples: [
        "The findings indicate..., don't they?",
        "The research demonstrates..., doesn't it?",
        "The evidence suggests..., doesn't it?",
        "The study shows..., doesn't it?",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed tag question usage",
      examples: [
        "You're coming, aren't you?",
        "She likes..., doesn't she?",
        "They can..., can't they?",
        "We should..., shouldn't we?",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical tag question usage",
      examples: [
        "The system meets requirements, doesn't it?",
        "The process achieves objectives, doesn't it?",
        "The method produces results, doesn't it?",
        "The approach solves problems, doesn't it?",
      ],
    },
  },

  // Tag Question Assessment and Evaluation
  tagQuestionAssessment: {
    concept:
      "Assessment criteria and evaluation methods for tag question usage",
    assessmentCriteria: {
      accuracy: "Correct tag question structure and form",
      appropriateness: "Appropriate tag question choice for context",
      register: "Appropriate register usage",
      fluency: "Natural tag question usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with tag question focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic tag questions with 'be' and 'do' verbs",
      A2: "Expanded tag questions, basic modal verbs",
      B1: "Perfect and continuous tag questions, complex structures",
      B2: "Complex modal tag questions, formal expressions",
      C1: "Academic tag questions, sophisticated expressions, research usage",
      C2: "Mastery in all contexts including literary and specialized usage",
    },
  },

  // Tag Question Learning Strategies
  tagQuestionLearningStrategies: {
    concept: "Effective strategies for learning and mastering tag questions",
    recognitionStrategies: {
      strategy: "Identifying tag question patterns and structures",
      techniques: [
        "Learn basic positive/negative tag patterns",
        "Recognize auxiliary verb agreement",
        "Identify pronoun matching rules",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily tag question exercises",
        "Reading with tag question focus",
        "Writing sentences with different patterns",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing tag question patterns and rules",
      techniques: [
        "Learn tag question structures by verb type",
        "Remember special cases (I am → aren't I)",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying tag question rules in communication",
      techniques: [
        "Start with basic 'be' and 'do' tag questions",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Tag Questions in Language Tests
  tagQuestionsInTests: {
    concept: "Tag questions in standardized language tests",
    testTypes: {
      TOEFL: "Academic tag question patterns and formal usage",
      IELTS: "Both academic and general tag question usage",
      Cambridge: "British English tag question variations",
      TOEIC: "Business and professional tag question usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct tag question",
      sentenceCompletion: "Complete with correct tag question",
      errorIdentification: "Find tag question errors",
      textEditing: "Correct tag question usage in text",
    },
    testStrategies: {
      patternRecognition: "Quickly identify positive/negative tag patterns",
      contextAnalysis: "Analyze context for appropriate tag question",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Tag Question Mistakes
  commonTagQuestionMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      wrongAuxiliary: {
        error: "Using wrong auxiliary verb in tag",
        example: "You is coming, isn't you? ❌",
        correction: "You are coming, aren't you? ✅",
        explanation: "Use correct auxiliary verb matching the main verb",
      },
      wrongPronoun: {
        error: "Using wrong pronoun in tag",
        example: "She likes coffee, doesn't he? ❌",
        correction: "She likes coffee, doesn't she? ✅",
        explanation: "Use pronoun matching the subject",
      },
      wrongPolarity: {
        error: "Using wrong positive/negative pattern",
        example: "She doesn't like it, doesn't she? ❌",
        correction: "She doesn't like it, does she? ✅",
        explanation: "Use opposite polarity in tag",
      },
      specialCaseError: {
        error: "Incorrect special case handling",
        example: "I'm late, isn't I? ❌",
        correction: "I'm late, aren't I? ✅",
        explanation: "I am always takes 'aren't I' in tag questions",
      },
      missingAuxiliary: {
        error: "Omitting auxiliary verb in tag",
        example: "You like coffee, you? ❌",
        correction: "You like coffee, don't you? ✅",
        explanation: "Always include auxiliary verb in tag",
      },
    },
    preventionStrategies: {
      auxiliaryPractice: "Practice auxiliary verb agreement",
      pronounPractice: "Practice pronoun matching",
      polarityPractice: "Practice positive/negative patterns",
      specialCasePractice: "Learn special cases like 'I am → aren't I'",
    },
  },
};

import { QuestionFormsType } from "@/types/grammars/grammar/QuestionForms";

export const QuestionFormsData: QuestionFormsType = {
  id: 103,
  // --- Comprehensive Question Forms Reference ---
  // Definition of Question Forms
  questionFormsDefinition: {
    concept:
      "Question forms are grammatical structures used to request information, seek confirmation, express doubt, or engage in conversation through various interrogative patterns.",
    importance:
      "Essential for effective communication, information gathering, and interactive discourse in all contexts",
    corePrinciple:
      "Uses specific word order patterns, auxiliary verbs, and question words to transform statements into interrogative forms",
    scope:
      "Applies to all communicative contexts and affects the tone, formality, and effectiveness of information exchange",
  },

  // A1 Level - Basic Question Forms (Beginner)
  A1: {
    definition: "Basic question forms with simple yes/no and WH-questions",
    learningObjectives: [
      "Form basic yes/no questions using 'be' and 'do'",
      "Ask simple WH-questions with what, where, who",
      "Understand basic question word order",
      "Recognize and respond to simple questions",
    ],
    proficiencyDescription:
      "Can ask and answer basic questions about personal information, daily activities, and immediate surroundings using simple present tense structures.",
    detailedContent: {
      basicYesNoQuestions: {
        concept: "Simple yes/no questions with 'be' and 'do'",
        patterns: [
          "Am/Is/Are + subject + complement?",
          "Do/Does + subject + base verb?",
          "Can + subject + base verb?",
        ],
        examples: [
          "Are you a student?",
          "Do you like coffee?",
          "Can you speak English?",
          "Is she your sister?",
        ],
        exercises: [
          "Complete: ___ (Are) you a student?",
          "Complete: ___ (Do) you like coffee?",
          "Complete: ___ (Can) you speak English?",
        ],
        commonMistakes: [
          "Incorrect: You are student? → Correct: Are you a student?",
          "Incorrect: You like coffee? → Correct: Do you like coffee?",
          "Incorrect: You can speak English? → Correct: Can you speak English?",
        ],
        learningTips: [
          "Always invert subject and verb in yes/no questions",
          "Use 'do/does' for questions with regular verbs",
          "Use 'can' for ability questions",
        ],
      },
      basicWHQuestions: {
        concept: "Simple WH-questions with basic question words",
        patterns: [
          "What + is/are + subject?",
          "Where + do/does + subject + base verb?",
          "Who + is/are + subject?",
        ],
        examples: [
          "What is your name?",
          "Where do you live?",
          "Who is that?",
          "What time is it?",
        ],
        questionWords: {
          what: "Used for things, objects, activities",
          where: "Used for places and locations",
          who: "Used for people",
        },
        commonMistakes: [
          "Incorrect: What your name? → Correct: What is your name?",
          "Incorrect: Where you live? → Correct: Where do you live?",
          "Incorrect: Who that? → Correct: Who is that?",
        ],
      },
    },
    exercises: [
      "Complete: ___ (Are) you a student?",
      "Complete: ___ (What) is your name?",
      "Complete: ___ (Where) do you live?",
    ],
    references: [
      {
        title: "English Grammar in Use (Basic)",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457686",
        relevance:
          "Comprehensive coverage of basic question forms with clear explanations and exercises",
      },
      {
        title: "Essential Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2015",
        isbn: "978-1107480551",
        relevance: "Step-by-step approach to basic question formation",
      },
      {
        title: "Oxford Practice Grammar Basic",
        author: "Norman Coe",
        publisher: "Oxford University Press",
        year: "2020",
        isbn: "978-0194214728",
        relevance: "Clear explanations of A1 level question structures",
      },
      {
        title: "Grammar for English Language Teachers",
        author: "Martin Parrott",
        publisher: "Cambridge University Press",
        year: "2010",
        isbn: "978-0521712040",
        relevance: "Theoretical background for teaching basic question forms",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: "2016",
        isbn: "978-0194202411",
        relevance: "Practical guide to basic question usage and common errors",
      },
    ],
    onlineResources: [
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/questions",
      "https://www.grammarly.com/blog/questions/",
      "https://www.ef.com/wwen/english-resources/english-grammar/asking-questions/",
      "https://www.perfect-english-grammar.com/questions.html",
      "https://www.englishclub.com/grammar/sentence/question.htm",
    ],
  },

  // A2 Level - Elementary Question Forms
  A2: {
    definition: "Question forms with past tense and more WH-words",
    learningObjectives: [
      "Form questions in past tense using 'was/were' and 'did'",
      "Ask questions with when, why, how",
      "Use past tense question forms correctly",
      "Understand expanded WH-question patterns",
    ],
    proficiencyDescription:
      "Can ask and answer questions about past events, reasons, and methods using past tense structures and expanded question words.",
    detailedContent: {
      pastTenseQuestions: {
        concept: "Questions in past tense with 'was/were' and 'did'",
        patterns: [
          "Was/Were + subject + complement?",
          "Did + subject + base verb?",
          "Could + subject + base verb?",
        ],
        examples: [
          "Were you at home yesterday?",
          "Did you go to school?",
          "Could you help me?",
          "Was she happy?",
        ],
        commonMistakes: [
          "Incorrect: You were at home yesterday? → Correct: Were you at home yesterday?",
          "Incorrect: You went to school? → Correct: Did you go to school?",
          "Incorrect: You could help me? → Correct: Could you help me?",
        ],
        learningTips: [
          "Use 'was/were' for questions with 'be' in past tense",
          "Use 'did' for questions with regular verbs in past tense",
          "Use 'could' for polite requests and past ability",
        ],
      },
      expandedWHQuestions: {
        concept: "More WH-questions with additional question words",
        patterns: [
          "When + did + subject + base verb?",
          "Why + do/does + subject + base verb?",
          "How + do/does + subject + base verb?",
        ],
        examples: [
          "When did you arrive?",
          "Why do you study English?",
          "How do you go to work?",
          "What did you do yesterday?",
        ],
        questionWords: {
          when: "Used for time and dates",
          why: "Used for reasons and causes",
          how: "Used for methods and ways",
          what: "Used for things, activities, and objects",
        },
        commonMistakes: [
          "Incorrect: When you arrive? → Correct: When did you arrive?",
          "Incorrect: Why you study English? → Correct: Why do you study English?",
          "Incorrect: How you go to work? → Correct: How do you go to work?",
        ],
      },
    },
    exercises: [
      "Complete: ___ (Were) you at home yesterday?",
      "Complete: ___ (When) did you arrive?",
      "Complete: ___ (Why) do you study English?",
    ],
    references: [
      {
        title: "English Grammar in Use (Elementary)",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457686",
        relevance: "Comprehensive coverage of past tense question forms",
      },
      {
        title: "Oxford Practice Grammar Elementary",
        author: "Norman Coe",
        publisher: "Oxford University Press",
        year: "2020",
        isbn: "978-0194214728",
        relevance: "Clear explanations of A2 level question structures",
      },
      {
        title: "Grammar Friends 2",
        author: "Tim Ward",
        publisher: "Oxford University Press",
        year: "2009",
        isbn: "978-0194780015",
        relevance: "Child-friendly approach to past tense questions",
      },
      {
        title: "English File Elementary",
        author: "Christina Latham-Koenig",
        publisher: "Oxford University Press",
        year: "2019",
        isbn: "978-0194031596",
        relevance: "Integrated approach to question forms in context",
      },
      {
        title: "New Headway Elementary",
        author: "Liz and John Soars",
        publisher: "Oxford University Press",
        year: "2011",
        isbn: "978-0194768983",
        relevance: "Traditional approach to question form teaching",
      },
    ],
    onlineResources: [
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-simple",
      "https://www.grammarly.com/blog/past-tense/",
      "https://www.ef.com/wwen/english-resources/english-grammar/past-simple/",
      "https://www.perfect-english-grammar.com/past-simple.html",
      "https://www.englishclub.com/grammar/verb-tenses_past-simple.htm",
    ],
  },

  // B1 Level - Intermediate Question Forms
  B1: {
    definition: "Complex question forms with perfect tenses and tag questions",
    learningObjectives: [
      "Form questions in present and past perfect tenses",
      "Use tag questions for confirmation and agreement",
      "Understand perfect tense question structures",
      "Master tag question formation rules",
    ],
    proficiencyDescription:
      "Can ask and answer questions about experiences, completed actions, and seek confirmation using perfect tenses and tag questions.",
    detailedContent: {
      perfectTenseQuestions: {
        concept: "Questions in present and past perfect tenses",
        patterns: [
          "Have/Has + subject + past participle?",
          "Had + subject + past participle?",
          "Will + subject + have + past participle?",
        ],
        examples: [
          "Have you been to Paris?",
          "Has she finished her work?",
          "Had you seen the movie before?",
          "Will you have completed it by Friday?",
        ],
        commonMistakes: [
          "Incorrect: You have been to Paris? → Correct: Have you been to Paris?",
          "Incorrect: She has finished her work? → Correct: Has she finished her work?",
          "Incorrect: You had seen the movie? → Correct: Had you seen the movie?",
        ],
        learningTips: [
          "Use 'have/has' for present perfect questions",
          "Use 'had' for past perfect questions",
          "Use 'will have' for future perfect questions",
        ],
      },
      tagQuestions: {
        concept: "Tag questions for confirmation and agreement",
        patterns: [
          "Positive statement + negative tag",
          "Negative statement + positive tag",
          "Tag matches the auxiliary and subject",
        ],
        examples: [
          "You like coffee, don't you?",
          "She isn't coming, is she?",
          "We can go now, can't we?",
          "He has finished, hasn't he?",
        ],
        formationRules: [
          "If main clause is positive, tag is negative",
          "If main clause is negative, tag is positive",
          "Tag must match the auxiliary verb of main clause",
          "Tag must match the subject of main clause",
        ],
        commonMistakes: [
          "Incorrect: You like coffee, isn't it? → Correct: You like coffee, don't you?",
          "Incorrect: She isn't coming, doesn't she? → Correct: She isn't coming, is she?",
          "Incorrect: We can go, can we? → Correct: We can go, can't we?",
        ],
      },
    },
    exercises: [
      "Complete: ___ (Have) you been to Paris?",
      "Complete: You like coffee, ___ (don't) you?",
      "Complete: She isn't coming, ___ (is) she?",
    ],
    references: [
      {
        title: "English Grammar in Use (Intermediate)",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457686",
        relevance: "Comprehensive coverage of perfect tenses and tag questions",
      },
      {
        title: "Oxford Practice Grammar Intermediate",
        author: "John Eastwood",
        publisher: "Oxford University Press",
        year: "2019",
        isbn: "978-0194214742",
        relevance: "Detailed explanations of B1 level question structures",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: "2013",
        isbn: "978-1107697386",
        relevance: "Advanced treatment of perfect tense questions",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: "2016",
        isbn: "978-0194202411",
        relevance: "Practical guide to tag questions and perfect tenses",
      },
      {
        title: "Grammar for English Language Teachers",
        author: "Martin Parrott",
        publisher: "Cambridge University Press",
        year: "2010",
        isbn: "978-0521712040",
        relevance: "Theoretical background for teaching complex question forms",
      },
    ],
    onlineResources: [
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect",
      "https://www.grammarly.com/blog/present-perfect/",
      "https://www.ef.com/wwen/english-resources/english-grammar/present-perfect/",
      "https://www.perfect-english-grammar.com/present-perfect.html",
      "https://www.englishclub.com/grammar/verb-tenses_present-perfect.htm",
    ],
  },

  // B2 Level - Upper Intermediate Question Forms
  B2: {
    definition:
      "Advanced question forms with indirect questions and complex structures",
    learningObjectives: [
      "Form indirect questions for polite and formal contexts",
      "Use subject questions correctly",
      "Understand complex question structures",
      "Master formal question patterns",
    ],
    proficiencyDescription:
      "Can ask questions politely and formally, use subject questions, and handle complex question structures in professional and academic contexts.",
    detailedContent: {
      indirectQuestions: {
        concept: "Polite and formal question forms",
        patterns: [
          "Can/Could you tell me + WH-word + subject + verb?",
          "Do you know + if/whether + subject + verb?",
          "I wonder + WH-word + subject + verb?",
        ],
        examples: [
          "Can you tell me where the station is?",
          "Do you know if he's at home?",
          "I wonder what time the meeting starts.",
          "Could you tell me how much it costs?",
        ],
        usageContexts: [
          "Formal situations",
          "Polite requests",
          "Professional communication",
          "Academic writing",
        ],
        commonMistakes: [
          "Incorrect: Can you tell me where is the station? → Correct: Can you tell me where the station is?",
          "Incorrect: Do you know if is he at home? → Correct: Do you know if he's at home?",
          "Incorrect: I wonder what time does the meeting start? → Correct: I wonder what time the meeting starts.",
        ],
      },
      subjectQuestions: {
        concept: "Questions where the WH-word is the subject",
        patterns: [
          "Who + verb + object?",
          "What + verb + object?",
          "Which + noun + verb + object?",
        ],
        examples: [
          "Who called you yesterday?",
          "What happened at the meeting?",
          "Which student won the prize?",
          "Who knows the answer?",
        ],
        keyRule: "No auxiliary verb inversion when WH-word is the subject",
        commonMistakes: [
          "Incorrect: Who did call you yesterday? → Correct: Who called you yesterday?",
          "Incorrect: What did happen at the meeting? → Correct: What happened at the meeting?",
          "Incorrect: Which student did win the prize? → Correct: Which student won the prize?",
        ],
      },
    },
    exercises: [
      "Complete: Can you tell me ___ (where) the station is?",
      "Complete: Do you know ___ (if) he's at home?",
      "Complete: ___ (Who) called you yesterday?",
    ],
    references: [
      {
        title: "English Grammar in Use (Upper-Intermediate)",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457686",
        relevance: "Comprehensive coverage of indirect and subject questions",
      },
      {
        title: "Oxford Practice Grammar Upper-Intermediate",
        author: "George Yule",
        publisher: "Oxford University Press",
        year: "2020",
        isbn: "978-0194214766",
        relevance: "Advanced question form structures and usage",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: "2013",
        isbn: "978-1107697386",
        relevance: "Sophisticated treatment of complex question forms",
      },
      {
        title: "Cambridge Grammar of English",
        author: "Ronald Carter and Michael McCarthy",
        publisher: "Cambridge University Press",
        year: "2006",
        isbn: "978-0521581661",
        relevance: "Comprehensive reference for advanced question structures",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author: "Douglas Biber",
        publisher: "Pearson Education",
        year: "1999",
        isbn: "978-0582237254",
        relevance: "Corpus-based analysis of question form usage",
      },
    ],
    onlineResources: [
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/indirect-questions",
      "https://www.grammarly.com/blog/indirect-questions/",
      "https://www.ef.com/wwen/english-resources/english-grammar/indirect-questions/",
      "https://www.perfect-english-grammar.com/indirect-questions.html",
      "https://www.englishclub.com/grammar/sentence/indirect-question.htm",
    ],
  },

  // C1 Level - Advanced Question Forms
  C1: {
    definition:
      "Sophisticated question forms for academic and professional contexts",
    learningObjectives: [
      "Use rhetorical questions for effect and persuasion",
      "Form complex questions with multiple clauses",
      "Understand sophisticated question patterns",
      "Master academic and professional question usage",
    ],
    proficiencyDescription:
      "Can use sophisticated question forms including rhetorical questions, complex structures, and advanced patterns for academic, professional, and creative purposes.",
    detailedContent: {
      rhetoricalQuestions: {
        concept: "Questions asked for effect rather than information",
        patterns: [
          "Questions that don't expect answers",
          "Questions for emphasis and persuasion",
          "Questions for dramatic effect",
        ],
        examples: [
          "Who doesn't want to be successful?",
          "How could anyone disagree with that?",
          "What more could you ask for?",
          "Isn't it obvious what needs to be done?",
        ],
        usageContexts: [
          "Persuasive writing",
          "Public speaking",
          "Academic discourse",
          "Creative writing",
        ],
        effects: [
          "Emphasizes a point",
          "Engages the audience",
          "Creates dramatic impact",
          "Strengthens arguments",
        ],
      },
      complexQuestions: {
        concept: "Questions with multiple clauses and complex structures",
        patterns: [
          "Questions with conditional clauses",
          "Questions with relative clauses",
          "Questions with multiple auxiliaries",
        ],
        examples: [
          "What would you do if you won the lottery?",
          "Who do you think will be the next president?",
          "How long have you been working on this project?",
          "What should we have done differently?",
        ],
        structuralFeatures: [
          "Multiple clauses",
          "Complex verb forms",
          "Embedded questions",
          "Conditional structures",
        ],
        commonMistakes: [
          "Incorrect: What you would do if you won the lottery? → Correct: What would you do if you won the lottery?",
          "Incorrect: Who you think will be the next president? → Correct: Who do you think will be the next president?",
          "Incorrect: How long you have been working? → Correct: How long have you been working?",
        ],
      },
    },
    exercises: [
      "Complete: Who ___ (doesn't) want to be successful?",
      "Complete: What ___ (would) you do if you won the lottery?",
      "Complete: Who do you think ___ (will) be the next president?",
    ],
    references: [
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: "2013",
        isbn: "978-1107697386",
        relevance: "Comprehensive coverage of advanced question forms",
      },
      {
        title: "Oxford Practice Grammar Advanced",
        author: "George Yule",
        publisher: "Oxford University Press",
        year: "2020",
        isbn: "978-0194214780",
        relevance: "Advanced question structures and sophisticated usage",
      },
      {
        title: "Cambridge Grammar of English",
        author: "Ronald Carter and Michael McCarthy",
        publisher: "Cambridge University Press",
        year: "2006",
        isbn: "978-0521581661",
        relevance: "Comprehensive reference for C1 level question forms",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author: "Douglas Biber",
        publisher: "Pearson Education",
        year: "1999",
        isbn: "978-0582237254",
        relevance: "Corpus-based analysis of advanced question usage",
      },
      {
        title: "The Cambridge Encyclopedia of the English Language",
        author: "David Crystal",
        publisher: "Cambridge University Press",
        year: "2018",
        isbn: "978-1108423590",
        relevance: "Comprehensive overview of English question forms",
      },
    ],
    onlineResources: [
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/rhetorical-questions",
      "https://www.grammarly.com/blog/rhetorical-questions/",
      "https://www.ef.com/wwen/english-resources/english-grammar/complex-questions/",
      "https://www.perfect-english-grammar.com/complex-questions.html",
      "https://www.englishclub.com/grammar/sentence/rhetorical-question.htm",
    ],
  },

  // C2 Level - Mastery Question Forms
  C2: {
    definition:
      "Mastery of question forms in all contexts including nuanced and specialized usage",
    learningObjectives: [
      "Use philosophical and abstract questions effectively",
      "Master specialized professional question forms",
      "Understand nuanced question usage",
      "Achieve native-like question form mastery",
    ],
    proficiencyDescription:
      "Can use question forms with native-like proficiency in all contexts, including philosophical discourse, specialized professional communication, and nuanced social interactions.",
    detailedContent: {
      philosophicalQuestions: {
        concept: "Questions in philosophical and abstract contexts",
        patterns: [
          "Questions about existence and meaning",
          "Questions about knowledge and truth",
          "Questions about morality and ethics",
          "Questions about consciousness and reality",
        ],
        examples: [
          "What is the meaning of life?",
          "How do we know what we know?",
          "Why does evil exist in the world?",
          "What makes us human?",
        ],
        characteristics: [
          "Abstract and conceptual",
          "Open-ended and complex",
          "Multi-layered meanings",
          "Philosophical depth",
        ],
        usageContexts: [
          "Academic philosophy",
          "Intellectual discourse",
          "Creative writing",
          "Deep conversations",
        ],
      },
      specializedQuestions: {
        concept: "Questions in specialized professional contexts",
        patterns: [
          "Legal questioning techniques",
          "Scientific research questions",
          "Technical troubleshooting questions",
          "Academic inquiry questions",
        ],
        examples: [
          "What evidence supports this hypothesis?",
          "How would you cross-examine this witness?",
          "What parameters need to be configured?",
          "What implications does this theory have?",
        ],
        professionalDomains: [
          "Legal profession",
          "Scientific research",
          "Technical fields",
          "Academic research",
        ],
        characteristics: [
          "Domain-specific terminology",
          "Precise and technical",
          "Methodologically sound",
          "Professionally appropriate",
        ],
      },
    },
    exercises: [
      "Complete: What ___ (is) the meaning of life?",
      "Complete: How ___ (do) we know what we know?",
      "Complete: What evidence ___ (supports) this hypothesis?",
    ],
    references: [
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: "2002",
        isbn: "978-0521431460",
        relevance: "Comprehensive reference grammar for C2 level mastery",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author: "Douglas Biber",
        publisher: "Pearson Education",
        year: "1999",
        isbn: "978-0582237254",
        relevance: "Corpus-based analysis of native speaker question usage",
      },
      {
        title: "The Oxford English Grammar",
        author: "Sidney Greenbaum",
        publisher: "Oxford University Press",
        year: "1996",
        isbn: "978-0198612506",
        relevance: "Comprehensive grammar reference for advanced learners",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author: "Randolph Quirk",
        publisher: "Longman",
        year: "1985",
        isbn: "978-0582517349",
        relevance: "Classic comprehensive grammar reference",
      },
      {
        title: "The Cambridge Encyclopedia of the English Language",
        author: "David Crystal",
        publisher: "Cambridge University Press",
        year: "2018",
        isbn: "978-1108423590",
        relevance:
          "Comprehensive overview of English language including question forms",
      },
    ],
    onlineResources: [
      "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/mastery-level",
      "https://www.grammarly.com/blog/advanced-grammar/",
      "https://www.ef.com/wwen/english-resources/english-grammar/mastery/",
      "https://www.perfect-english-grammar.com/mastery.html",
      "https://www.englishclub.com/grammar/mastery/",
    ],
  },

  // Original Question Forms Section (Preserved)
  QuestionForms: {
    definition:
      "Question forms are structures used to ask for information, confirmation, or clarification. They include yes/no questions, WH-questions, tag questions, and choice questions.",
    types: {
      YesNoQuestions: {
        structure: "Auxiliary/Modal + Subject + Main Verb?",
        examples: [
          "Do you like coffee?",
          "Can she drive?",
          "Did they go to school?",
        ],
      },
      WHQuestions: {
        structure: "WH-word + Auxiliary/Modal + Subject + Main Verb?",
        commonWH: [
          "What",
          "Where",
          "When",
          "Why",
          "Who",
          "Which",
          "Whose",
          "How",
        ],
        examples: [
          "Where do you live?",
          "What did he say?",
          "How does it work?",
        ],
      },
      TagQuestions: {
        structure: "Statement + Tag (auxiliary/modal + pronoun)?",
        rule: "If the sentence is positive, the tag is negative, and vice versa.",
        examples: [
          "She is a teacher, isn't she?",
          "You don't like it, do you?",
          "We can go now, can't we?",
        ],
      },
      ChoiceQuestions: {
        structure: "Question + Option A or Option B?",
        examples: [
          "Do you want tea or coffee?",
          "Is she coming today or tomorrow?",
          "Would you prefer books or movies?",
        ],
      },
      SubjectQuestions: {
        structure: "WH-word (as subject) + verb + object?",
        note: "No auxiliary needed if WH-word is subject.",
        examples: [
          "Who called you?",
          "What happened yesterday?",
          "Which student passed the test?",
        ],
      },
      NegativeQuestions: {
        structure: "Negative auxiliary + subject + main verb?",
        usage: "Used to express surprise, confirmation, or emphasis.",
        examples: [
          "Don't you like pizza?",
          "Isn't it beautiful?",
          "Haven't they arrived yet?",
        ],
      },
      IndirectQuestions: {
        structure: "Intro phrase + WH/if/whether + subject + verb",
        usage: "More polite or formal way to ask questions.",
        examples: [
          "Can you tell me where she lives?",
          "Do you know if he's at home?",
          "I wonder what time it is.",
        ],
      },
    },
    recognitionTips: [
      "Look for auxiliary/modal verb inversion (e.g., 'Do you…?').",
      "WH-questions begin with question words like 'what', 'where', etc.",
      "Tag questions often reflect the verb tense and subject.",
      "Subject questions do not invert the subject and verb.",
    ],
    commonErrors: [
      "Incorrect: Where you live? ❌ → Correct: Where **do** you live? ✅",
      "Incorrect: She is a doctor, isn't it? ❌ → Correct: She is a doctor, **isn't she**? ✅",
      "Incorrect: Do you know where does he live? ❌ → Correct: Do you know **where he lives**? ✅",
    ],
    notes: [
      "Question forms vary based on tense, subject, and intended meaning.",
      "Polite questions often use indirect form.",
      "Tag questions are commonly used in conversational English.",
    ],
  },

  // Advanced Question Patterns and Constructions
  advancedQuestionPatterns: {
    concept: "Advanced patterns and constructions involving question forms",
    embeddedQuestions: {
      pattern: "Questions within other sentences",
      examples: [
        "I don't know what he wants.",
        "Tell me where you went.",
        "She asked if I was coming.",
        "The question is whether we should proceed.",
      ],
    },
    questionWithPrepositions: {
      pattern: "Questions ending with prepositions",
      examples: [
        "What are you looking for?",
        "Who are you talking to?",
        "What is this made of?",
        "Where are you going to?",
      ],
    },
    questionWithGerunds: {
      pattern: "Questions using gerunds and infinitives",
      examples: [
        "What do you enjoy doing?",
        "How do you like working here?",
        "What would you prefer to do?",
        "Why do you want to study abroad?",
      ],
    },
    questionWithConditionals: {
      pattern: "Questions with conditional structures",
      examples: [
        "What would you do if you had a million dollars?",
        "How would you react if someone criticized you?",
        "Where would you go if you could travel anywhere?",
        "What might happen if we don't act now?",
      ],
    },
  },

  // Question Form Collocations and Fixed Expressions
  questionFormCollocations: {
    concept:
      "Common collocations and fixed expressions involving question forms",
    politeCollocations: {
      pattern: "Polite question combinations",
      examples: [
        "Would you mind if...?",
        "I was wondering if...",
        "Do you happen to know...?",
        "Could I possibly ask...?",
      ],
    },
    businessCollocations: {
      pattern: "Business and professional question combinations",
      examples: [
        "What are your thoughts on...?",
        "How do you feel about...?",
        "What's your take on...?",
        "Could you elaborate on...?",
      ],
    },
    everydayCollocations: {
      pattern: "Common everyday question expressions",
      examples: [
        "What's up?",
        "How's it going?",
        "What's new?",
        "How are things?",
      ],
    },
  },

  // Question Form Usage in Different Genres
  questionFormGenreUsage: {
    concept: "Question form patterns across different genres and text types",
    formalWriting: {
      characteristics: "Sophisticated and precise question usage",
      examples: [
        "What implications does this have for future research?",
        "How might this affect our understanding of the issue?",
        "What conclusions can we draw from these findings?",
        "To what extent does this theory apply?",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational question usage",
      examples: [
        "What's up with that?",
        "How's it going?",
        "What do you think?",
        "Isn't that crazy?",
      ],
    },
    academicWriting: {
      characteristics: "Complex academic question structures",
      examples: [
        "To what extent can these findings be generalized?",
        "What methodological limitations should be considered?",
        "How do these results compare to previous studies?",
        "What future research directions are suggested?",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive question usage",
      examples: [
        "What if the stars could speak?",
        "How does one measure the weight of a dream?",
        "Where do memories go when we forget them?",
        "What color is silence?",
      ],
    },
  },

  // Question Form Frequency and Register
  questionFormFrequencyAndRegister: {
    concept: "Frequency and register considerations in question form usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used question combinations",
      examples: [
        "What is...? (very common)",
        "How are you? (frequent)",
        "Where is...? (common)",
        "Do you...? (very common)",
      ],
    },
    formalRegister: {
      characteristics: "Sophisticated and precise question usage",
      examples: [
        "Could you please clarify...?",
        "I was wondering if you might...",
        "Would you be so kind as to...?",
        "Might I inquire about...?",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed question usage",
      examples: [
        "What's up?",
        "How's it going?",
        "What do you think?",
        "Isn't that cool?",
      ],
    },
    technicalRegister: {
      characteristics: "Precise technical question usage",
      examples: [
        "What parameters need to be configured?",
        "How does the system handle errors?",
        "What are the system requirements?",
        "Which protocol should be used?",
      ],
    },
  },

  // Question Form Exercises and Practice Activities
  questionFormExercises: {
    concept: "Comprehensive exercises for practicing question forms",
    basicExercises: {
      type: "Simple question formation",
      exercises: [
        "___ (Are) you a student?",
        "___ (What) is your name?",
        "___ (Where) do you live?",
        "___ (Do) you like coffee?",
      ],
    },
    intermediateExercises: {
      type: "Complex question usage",
      exercises: [
        "___ (Have) you been to Paris?",
        "You like coffee, ___ (don't) you?",
        "Can you tell me ___ (where) the station is?",
        "___ (Who) called you yesterday?",
      ],
    },
    advancedExercises: {
      type: "Advanced question patterns",
      exercises: [
        "Who ___ (doesn't) want to be successful?",
        "What ___ (would) you do if you won the lottery?",
        "What ___ (is) the meaning of life?",
        "What evidence ___ (supports) this hypothesis?",
      ],
    },
    errorCorrection: {
      type: "Identify and correct question errors",
      exercises: [
        "Where you live? → ___",
        "She is a doctor, isn't it? → ___",
        "Do you know where does he live? → ___",
        "What you doing? → ___",
      ],
    },
  },

  // Question Form Assessment and Evaluation
  questionFormAssessment: {
    concept:
      "Assessment criteria and evaluation methods for question form usage",
    assessmentCriteria: {
      accuracy: "Correct question form and structure",
      appropriateness: "Appropriate question choice for context",
      register: "Appropriate register usage",
      fluency: "Natural question usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with question focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic yes/no and WH-questions with simple verbs",
      A2: "Past tense questions, expanded WH-words",
      B1: "Perfect tense questions, tag questions, basic indirect questions",
      B2: "Indirect questions, subject questions, complex structures",
      C1: "Rhetorical questions, complex structures, sophisticated usage",
      C2: "Mastery in all contexts including philosophical and specialized usage",
    },
  },

  // Question Form Learning Strategies
  questionFormLearningStrategies: {
    concept: "Effective strategies for learning and mastering question forms",
    recognitionStrategies: {
      strategy: "Identifying question structures and patterns",
      techniques: [
        "Learn auxiliary verb inversion patterns",
        "Recognize WH-word functions",
        "Identify question types and purposes",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily question formation exercises",
        "Reading with question focus",
        "Writing different types of questions",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing question patterns and forms",
      techniques: [
        "Learn question word categories",
        "Remember auxiliary verb patterns",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying question rules in communication",
      techniques: [
        "Start with simple question types",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Question Forms in Language Tests
  questionFormsInTests: {
    concept: "Question forms in standardized language tests",
    testTypes: {
      TOEFL: "Academic question patterns and formal usage",
      IELTS: "Both academic and general question usage",
      Cambridge: "British English question variations",
      TOEIC: "Business and professional question usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct question form",
      sentenceCompletion: "Complete with correct question",
      errorIdentification: "Find question errors",
      textEditing: "Correct question usage in text",
    },
    testStrategies: {
      structureRecognition: "Quickly identify question patterns",
      contextAnalysis: "Analyze context for appropriate question type",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Question Form Mistakes
  commonQuestionFormMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      missingAuxiliary: {
        error: "Omitting auxiliary verb in questions",
        example: "Where you live? ❌",
        correction: "Where do you live? ✅",
        explanation:
          "Always include appropriate auxiliary verb in WH-questions",
      },
      wrongTag: {
        error: "Using wrong tag in tag questions",
        example: "She is a doctor, isn't it? ❌",
        correction: "She is a doctor, isn't she? ✅",
        explanation:
          "Tag must match the subject and auxiliary of the main clause",
      },
      doubleAuxiliary: {
        error: "Using auxiliary twice in indirect questions",
        example: "Do you know where does he live? ❌",
        correction: "Do you know where he lives? ✅",
        explanation: "Don't use auxiliary inversion in indirect questions",
      },
      wrongWordOrder: {
        error: "Incorrect word order in questions",
        example: "What you doing? ❌",
        correction: "What are you doing? ✅",
        explanation: "Use correct auxiliary + subject + main verb order",
      },
      unnecessaryInversion: {
        error: "Using inversion when not needed",
        example: "Who did call you? ❌",
        correction: "Who called you? ✅",
        explanation:
          "Don't use auxiliary inversion when WH-word is the subject",
      },
    },
    preventionStrategies: {
      auxiliaryPractice: "Practice auxiliary verb patterns regularly",
      tagPractice: "Practice tag question formation",
      contextAwareness:
        "Always consider whether question is direct or indirect",
      wordOrderPractice: "Practice correct question word order",
    },
  },
};

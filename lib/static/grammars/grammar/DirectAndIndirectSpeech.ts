import { DirectAndIndirectSpeechType } from "@/types/grammars/grammar/DirectAndIndirectSpeech";

export const DirectAndIndirectSpeechData: DirectAndIndirectSpeechType = {
  id: 78,
  directAndIndirectSpeechDefinition: {
    concept:
      "Direct and indirect speech are fundamental grammatical structures for reporting what someone has said, with direct speech preserving exact words in quotation marks and indirect speech conveying meaning through grammatical transformations.",
    importance:
      "Essential for effective communication, narrative writing, academic reporting, and conveying information accurately while maintaining grammatical coherence and contextual appropriateness",
    corePrinciple:
      "Uses systematic transformations including tense backshift, pronoun changes, time/place adjustments, and structural modifications to convert direct quotations into grammatically appropriate reported speech",
    scope:
      "Applies to all communicative contexts where reporting speech, writing narratives, academic discourse, and conveying information from other sources is needed",
    technicalDefinition:
      "Direct speech (oratio recta) reproduces the exact words of a speaker within quotation marks, while indirect speech (oratio obliqua) reports the substance of what was said using subordinate clauses with systematic grammatical adjustments for tense, person, deixis, and modality.",
    linguisticBackground:
      "Rooted in classical rhetoric and modern discourse analysis, direct and indirect speech represent different levels of narrative distance and epistemic stance in language representation.",
    crossLinguisticComparison:
      "While English uses specific tense backshift patterns, other languages like German use subjunctive mood, and some languages like Chinese rely more on context markers for reported speech distinctions.",
  },

  references: {
    books: [
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2013,
        isbn: "978-1107539303",
        relevantChapters: [
          "Chapter 47: Reporting with that-clauses",
          "Chapter 48: Reporting with to-infinitive clauses",
          "Chapter 49: Reporting questions and imperatives",
        ],
      },
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: 2019,
        isbn: "978-1108457682",
        relevantChapters: [
          "Unit 47: Reported speech 1",
          "Unit 48: Reported speech 2",
          "Unit 49: Questions and auxiliary verbs",
        ],
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: 1985,
        isbn: "978-0582517349",
        relevantChapters: [
          "Chapter 14: The complex sentence",
          "Section 14.29-14.35: Reported speech",
        ],
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        author: "Marianne Celce-Murcia, Diane Larsen-Freeman",
        publisher: "Heinle & Heinle",
        year: 2015,
        isbn: "978-1111351861",
        relevantChapters: [
          "Chapter 21: Reported Speech and Sequence of Tenses",
        ],
      },
      {
        title: "Oxford English Grammar Course: Advanced",
        author: "Michael Swan, Catherine Walter",
        publisher: "Oxford University Press",
        year: 2019,
        isbn: "978-0194420822",
        relevantChapters: [
          "Unit 8: Reporting",
          "Unit 9: Indirect speech transformations",
        ],
      },
    ],
    websites: [
      {
        title: "Cambridge Grammar - Reported Speech",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/reported-speech",
        description:
          "Comprehensive guide to reported speech with examples and exercises",
        reliability: "High - Academic institution",
      },
      {
        title: "British Council - Reported Speech",
        url: "https://learnenglish.britishcouncil.org/grammar/intermediate-to-upper-intermediate/reported-speech",
        description:
          "Detailed explanations with interactive exercises for different levels",
        reliability: "High - Educational authority",
      },
      {
        title: "Oxford Learner's Dictionaries - Reported Speech",
        url: "https://www.oxfordlearnersdictionaries.com/definition/english/reported-speech",
        description: "Clear definitions with pronunciation and usage examples",
        reliability: "High - Academic publisher",
      },
      {
        title: "Grammarly Blog - Direct and Indirect Speech",
        url: "https://www.grammarly.com/blog/direct-and-indirect-speech/",
        description: "Practical guide with examples and common mistakes",
        reliability: "Medium-High - Educational technology",
      },
      {
        title: "EnglishClub - Reported Speech",
        url: "https://www.englishclub.com/grammar/reported-speech.htm",
        description:
          "Comprehensive resource with rules, examples, and practice exercises",
        reliability: "Medium - Educational website",
      },
    ],
    academicSources: [
      {
        title: "The Pragmatics of Reported Speech in English",
        author: "Tom Güldemann and Manfred von Roncador",
        journal: "Studies in Language",
        year: 2002,
        doi: "10.1075/sl.26.2",
      },
      {
        title: "Discourse Representation and Reported Speech",
        author: "Elena Anagnostopoulou and Martin Everaert",
        journal: "Linguistic Inquiry",
        year: 2018,
        doi: "10.1162/ling_a_00267",
      },
    ],
  },

  A1: {
    definition:
      "Basic introduction to direct speech using simple present and past tenses with fundamental reporting verbs 'say' and 'tell'",
    keyFeatures: [
      "Simple direct speech with quotation marks",
      "Basic reporting verbs: say, tell",
      "Present and past simple tenses only",
      "Clear speaker identification",
    ],
    grammarRules: [
      {
        rule: "Direct speech structure with 'say'",
        explanation: "Use 'say' + comma + quoted speech in quotation marks",
        examples: [
          'She says, "I am happy."',
          'He said, "I like coffee."',
          'They say, "We are students."',
        ],
      },
      {
        rule: "Direct speech structure with 'tell'",
        explanation: "Use 'tell' + object + comma + quoted speech",
        examples: [
          'She tells me, "I am happy."',
          'He told her, "I like coffee."',
          'They tell us, "We are students."',
        ],
      },
    ],
    commonPatterns: [
      {
        pattern: "Subject + say + comma + quoted speech",
        structure: 'Name/Pronoun + say/says/said + , + "statement"',
        examples: [
          'Tom says, "I work here."',
          'She said, "I am tired."',
          'They say, "We like music."',
        ],
        usage:
          "For reporting what someone says without specifying the listener",
      },
      {
        pattern: "Subject + tell + object + comma + quoted speech",
        structure: 'Name/Pronoun + tell/tells/told + object + , + "statement"',
        examples: [
          'Mary tells John, "I work here."',
          'She told me, "I am tired."',
          'They tell us, "We like music."',
        ],
        usage: "For reporting what someone says to a specific person",
      },
    ],
    reportingVerbs: [
      {
        verb: "say",
        usage: "General reporting without object",
        examples: [
          'He says, "I am fine."',
          'She said, "Good morning."',
          'They say, "Hello."',
        ],
      },
      {
        verb: "tell",
        usage: "Reporting with specific object/listener",
        examples: [
          'He tells me, "I am fine."',
          'She told him, "Good morning."',
          'They tell her, "Hello."',
        ],
      },
    ],
    transformationRules: [
      {
        directForm: 'She says, "I am happy."',
        indirectForm: "She says that she is happy.",
        explanation:
          "Basic transformation maintaining present tense when reporting verb is present",
      },
      {
        directForm: 'He said, "I like coffee."',
        indirectForm: "He said that he liked coffee.",
        explanation: "Past tense changes to past when reporting verb is past",
      },
    ],
    practicalApplications: [
      "Reporting simple daily conversations",
      "Basic storytelling with dialogue",
      "Sharing simple messages",
      "Elementary classroom communication",
    ],
    commonMistakes: [
      {
        mistake: 'She say, "I am happy."',
        correction: 'She says, "I am happy."',
        explanation:
          "Remember to use correct verb form - 'says' for third person singular",
      },
      {
        mistake: 'He told, "I like coffee."',
        correction: 'He told me, "I like coffee."',
        explanation: "'Tell' requires an object - specify who was told",
      },
    ],
  },

  A2: {
    definition:
      "Expanded direct speech with more reporting verbs and introduction to basic indirect speech with simple tense changes",
    keyFeatures: [
      "Additional reporting verbs: ask, reply, answer",
      "Basic indirect speech introduction",
      "Simple tense backshift (present to past)",
      "Basic pronoun changes (I → he/she)",
    ],
    grammarRules: [
      {
        rule: "Questions in direct speech",
        explanation: "Use reporting verb + comma + question in quotation marks",
        examples: [
          'She asks, "Do you like coffee?"',
          'He asked, "Where do you live?"',
          'They ask, "What time is it?"',
        ],
      },
      {
        rule: "Basic indirect speech transformation",
        explanation:
          "Remove quotation marks, add 'that', change pronouns and tense",
        examples: [
          'Direct: "I am happy." → Indirect: He said that he was happy.',
          'Direct: "I like coffee." → Indirect: She said that she liked coffee.',
          'Direct: "We are students." → Indirect: They said that they were students.',
        ],
      },
    ],
    commonPatterns: [
      {
        pattern: "Questions with 'ask'",
        structure: 'Subject + ask + comma + "question"',
        examples: [
          'She asks, "Are you ready?"',
          'He asked, "Do you understand?"',
          'They ask, "Can you help?"',
        ],
        usage: "For reporting questions",
      },
      {
        pattern: "Answers with 'reply' or 'answer'",
        structure: 'Subject + reply/answer + comma + "response"',
        examples: [
          'She replies, "Yes, I am."',
          'He answered, "No, I don\'t."',
          'They reply, "Of course."',
        ],
        usage: "For reporting responses to questions",
      },
    ],
    reportingVerbs: [
      {
        verb: "ask",
        usage: "For reporting questions",
        examples: [
          'She asks, "Where are you going?"',
          'He asked, "Do you like pizza?"',
          'They ask, "What\'s your name?"',
        ],
      },
      {
        verb: "reply/answer",
        usage: "For reporting responses",
        examples: [
          'She replies, "I\'m going home."',
          'He answered, "Yes, I do."',
          'They reply, "My name is John."',
        ],
      },
    ],
    transformationRules: [
      {
        directForm: 'She says, "I am working."',
        indirectForm: "She says that she is working.",
        explanation:
          "Present continuous stays the same when reporting verb is present",
      },
      {
        directForm: 'He said, "I am working."',
        indirectForm: "He said that he was working.",
        explanation:
          "Present continuous changes to past continuous when reporting verb is past",
      },
    ],
    practicalApplications: [
      "Reporting conversations with questions and answers",
      "Basic interview reporting",
      "Sharing information from phone calls",
      "Elementary news reporting",
    ],
    commonMistakes: [
      {
        mistake: 'She said that "I am happy."',
        correction: "She said that she was happy.",
        explanation: "Don't use quotation marks in indirect speech",
      },
      {
        mistake: "He said that I am happy.",
        correction: "He said that he was happy.",
        explanation: "Change pronouns correctly - 'I' becomes 'he/she'",
      },
    ],
  },

  B1: {
    definition:
      "Complex indirect speech with perfect tenses, modal verbs, and question transformations",
    keyFeatures: [
      "Perfect tense transformations",
      "Modal verb changes (can→could, will→would)",
      "Question transformation to indirect speech",
      "Time and place expression changes",
    ],
    grammarRules: [
      {
        rule: "Perfect tense backshift",
        explanation:
          "Present perfect → past perfect, past simple → past perfect",
        examples: [
          'Direct: "I have finished." → Indirect: He said he had finished.',
          'Direct: "I saw the movie." → Indirect: She said she had seen the movie.',
          'Direct: "I have been working." → Indirect: He said he had been working.',
        ],
      },
      {
        rule: "Modal verb changes",
        explanation:
          "Modals change in indirect speech: can→could, will→would, may→might",
        examples: [
          'Direct: "I can swim." → Indirect: She said she could swim.',
          'Direct: "I will come." → Indirect: He said he would come.',
          'Direct: "I may be late." → Indirect: She said she might be late.',
        ],
      },
    ],
    commonPatterns: [
      {
        pattern: "Yes/No questions in indirect speech",
        structure: "Subject + asked + if/whether + subject + verb",
        examples: [
          'Direct: "Are you coming?" → Indirect: He asked if I was coming.',
          'Direct: "Do you like coffee?" → Indirect: She asked whether I liked coffee.',
          'Direct: "Can you help?" → Indirect: They asked if I could help.',
        ],
        usage: "For converting yes/no questions to indirect speech",
      },
      {
        pattern: "Wh-questions in indirect speech",
        structure: "Subject + asked + question word + subject + verb",
        examples: [
          'Direct: "Where do you live?" → Indirect: He asked where I lived.',
          'Direct: "What time is it?" → Indirect: She asked what time it was.',
          'Direct: "How are you?" → Indirect: They asked how I was.',
        ],
        usage: "For converting wh-questions to indirect speech",
      },
    ],
    reportingVerbs: [
      {
        verb: "wonder",
        usage: "For expressing curiosity or uncertainty",
        examples: [
          "She wondered if he was coming.",
          "He wondered what time it was.",
          "They wondered whether it would rain.",
        ],
      },
      {
        verb: "explain",
        usage: "For giving detailed information",
        examples: [
          "She explained that the process was complex.",
          "He explained how the machine worked.",
          "They explained why they were late.",
        ],
      },
    ],
    transformationRules: [
      {
        directForm: "Today → that day",
        indirectForm: "Tomorrow → the next day",
        explanation: "Time expressions change to maintain temporal reference",
      },
      {
        directForm: "Here → there",
        indirectForm: "This → that",
        explanation:
          "Place and demonstrative expressions change to maintain spatial reference",
      },
    ],
    practicalApplications: [
      "Reporting interviews and surveys",
      "Academic writing with sources",
      "Professional meeting summaries",
      "Detailed conversation reporting",
    ],
    commonMistakes: [
      {
        mistake: "He asked where do you live?",
        correction: "He asked where I lived.",
        explanation:
          "Use statement word order in indirect questions, not question order",
      },
      {
        mistake: "She said she can swim.",
        correction: "She said she could swim.",
        explanation: "Remember to change modal verbs: can → could",
      },
    ],
  },

  B2: {
    definition:
      "Advanced indirect speech including commands, suggestions, and complex reporting verbs",
    keyFeatures: [
      "Commands and requests in indirect speech",
      "Reporting verbs with specific meanings",
      "Suggestions and advice reporting",
      "Complex sentence structures with multiple clauses",
    ],
    grammarRules: [
      {
        rule: "Commands in indirect speech",
        explanation: "Use tell/ask + object + (not) to + infinitive",
        examples: [
          'Direct: "Open the door." → Indirect: He told me to open the door.',
          'Direct: "Don\'t be late." → Indirect: She told us not to be late.',
          'Direct: "Please help me." → Indirect: He asked me to help him.',
        ],
      },
      {
        rule: "Suggestions in indirect speech",
        explanation:
          "Use suggest + that + subject + should + base verb OR suggest + -ing",
        examples: [
          'Direct: "You should study harder." → Indirect: He suggested that I should study harder.',
          'Direct: "Let\'s go to the cinema." → Indirect: She suggested going to the cinema.',
          'Direct: "Why don\'t we meet tomorrow?" → Indirect: He suggested meeting tomorrow.',
        ],
      },
    ],
    commonPatterns: [
      {
        pattern: "Advice and recommendations",
        structure: "Subject + advised/recommended + that + clause",
        examples: [
          "The doctor advised that I should rest.",
          "She recommended that we take the train.",
          "He advised taking an umbrella.",
        ],
        usage: "For reporting professional or personal advice",
      },
      {
        pattern: "Promises and threats",
        structure: "Subject + promised/threatened + to + infinitive",
        examples: [
          "She promised to help with the project.",
          "He threatened to call the police.",
          "They promised not to be late.",
        ],
        usage: "For reporting commitments and warnings",
      },
    ],
    reportingVerbs: [
      {
        verb: "insist",
        usage: "For strong demands or requirements",
        examples: [
          "She insisted that he should apologize.",
          "He insisted on paying the bill.",
          "They insisted that the meeting continue.",
        ],
      },
      {
        verb: "deny",
        usage: "For refusing or contradicting accusations",
        examples: [
          "She denied taking the money.",
          "He denied that he had been there.",
          "They denied any involvement.",
        ],
      },
      {
        verb: "admit",
        usage: "For acknowledging or confessing",
        examples: [
          "She admitted making a mistake.",
          "He admitted that he was wrong.",
          "They admitted being nervous.",
        ],
      },
    ],
    transformationRules: [
      {
        directForm:
          'Direct: "You must come." → Indirect: She insisted that I come.',
        indirectForm:
          'Direct: "I won\'t help." → Indirect: He refused to help.',
        explanation:
          "Strong modals and refusals require specific reporting verbs",
      },
    ],
    practicalApplications: [
      "Business communication reporting",
      "Legal and formal document writing",
      "Academic citation and referencing",
      "Professional correspondence",
    ],
    commonMistakes: [
      {
        mistake: "He told me that open the door.",
        correction: "He told me to open the door.",
        explanation:
          "Use infinitive structure for commands: told + object + to + verb",
      },
      {
        mistake: "She suggested that I go.",
        correction: "She suggested that I should go.",
        explanation: "Use 'should' in suggestions with 'that' clauses",
      },
    ],
  },

  C1: {
    definition:
      "Sophisticated indirect speech for academic and professional contexts with nuanced reporting verbs",
    keyFeatures: [
      "Academic and research reporting verbs",
      "Complex sentence structures with embedded clauses",
      "Formal and technical language reporting",
      "Nuanced meaning through verb choice",
    ],
    grammarRules: [
      {
        rule: "Academic reporting verbs",
        explanation:
          "Use precise verbs to convey the writer's stance and the strength of claims",
        examples: [
          "The study demonstrates that the treatment is effective.",
          "Research indicates that climate change is accelerating.",
          "The author argues that traditional methods are outdated.",
        ],
      },
      {
        rule: "Hedging in reported speech",
        explanation:
          "Use cautious language to report uncertain or disputed information",
        examples: [
          "The report suggests that there may be a connection.",
          "Studies seem to indicate that the effect is minimal.",
          "Researchers appear to have found evidence of improvement.",
        ],
      },
    ],
    commonPatterns: [
      {
        pattern: "Research and study reporting",
        structure: "The study/research + verb + that + findings",
        examples: [
          "The research reveals that participants showed improvement.",
          "The study confirms that the hypothesis was correct.",
          "Research suggests that further investigation is needed.",
        ],
        usage: "For academic and scientific writing",
      },
      {
        pattern: "Expert opinion reporting",
        structure: "Expert + verb + that + professional opinion",
        examples: [
          "The economist predicts that inflation will rise.",
          "Analysts forecast that the market will recover.",
          "Specialists warn that delays are likely.",
        ],
        usage: "For professional and technical reporting",
      },
    ],
    reportingVerbs: [
      {
        verb: "demonstrate",
        usage: "For showing clear evidence or proof",
        examples: [
          "The experiment demonstrated that the theory was correct.",
          "Results demonstrate significant improvement.",
          "The study demonstrates a clear correlation.",
        ],
      },
      {
        verb: "indicate",
        usage: "For showing or pointing to something as probable",
        examples: [
          "Data indicates that the trend is continuing.",
          "Research indicates potential benefits.",
          "Findings indicate a need for further study.",
        ],
      },
      {
        verb: "maintain",
        usage: "For stating a position consistently",
        examples: [
          "The author maintains that the approach is valid.",
          "Experts maintain that caution is necessary.",
          "The theory maintains that behavior is learned.",
        ],
      },
    ],
    transformationRules: [
      {
        directForm: "Direct research statement → Formal academic reporting",
        indirectForm: "Careful attribution with appropriate hedging",
        explanation:
          "Transform direct statements into academically appropriate reported speech",
      },
    ],
    practicalApplications: [
      "Academic paper writing and citations",
      "Research proposal development",
      "Professional report writing",
      "Policy document preparation",
    ],
    commonMistakes: [
      {
        mistake: "The study says that results are good.",
        correction:
          "The study demonstrates that results show significant improvement.",
        explanation: "Use precise academic verbs rather than general 'say'",
      },
      {
        mistake: "Research proves that the treatment works.",
        correction:
          "Research indicates that the treatment appears to be effective.",
        explanation: "Use hedging language to avoid overstating claims",
      },
    ],
  },

  C2: {
    definition:
      "Mastery of indirect speech across all registers including literary, legal, and specialized professional contexts",
    keyFeatures: [
      "Literary and creative indirect speech techniques",
      "Legal and formal document language",
      "Specialized professional terminology",
      "Stylistic variation for rhetorical effect",
    ],
    grammarRules: [
      {
        rule: "Literary indirect speech",
        explanation:
          "Use sophisticated structures for narrative and artistic effect",
        examples: [
          "He vowed that he would never forget that moment.",
          "She protested her innocence with tears streaming down her face.",
          "The words he had longed to hear finally escaped her lips.",
        ],
      },
      {
        rule: "Legal indirect speech",
        explanation:
          "Use precise legal terminology for accurate reporting in legal contexts",
        examples: [
          "The witness testified that he had observed the defendant at the scene.",
          "The contract stipulates that payment must be made within 30 days.",
          "The law requires that all participants provide informed consent.",
        ],
      },
    ],
    commonPatterns: [
      {
        pattern: "Free indirect speech",
        structure: "Narrative voice blends with character thoughts",
        examples: [
          "She looked at the letter. How could he have written such things?",
          "He stared at the door. Should he knock or simply walk away?",
          "The decision weighed heavily. What would her mother have done?",
        ],
        usage: "For literary and creative writing",
      },
      {
        pattern: "Formal institutional reporting",
        structure: "Institution + formal verb + that + official statement",
        examples: [
          "The committee resolved that immediate action was necessary.",
          "The board determined that restructuring was unavoidable.",
          "The court ruled that the evidence was inadmissible.",
        ],
        usage: "For official and institutional communications",
      },
    ],
    reportingVerbs: [
      {
        verb: "testify",
        usage: "For legal and formal evidence giving",
        examples: [
          "The witness testified that she had seen the accident.",
          "He testified under oath that the information was accurate.",
          "Experts testified that the damage was extensive.",
        ],
      },
      {
        verb: "stipulate",
        usage: "For formal requirements and conditions",
        examples: [
          "The contract stipulates that delivery must be completed by Friday.",
          "Regulations stipulate that safety equipment must be worn.",
          "The agreement stipulates that both parties share costs equally.",
        ],
      },
      {
        verb: "postulate",
        usage: "For theoretical or philosophical propositions",
        examples: [
          "The theory postulates that consciousness is fundamental.",
          "Einstein postulated that space and time are interconnected.",
          "The model postulates three distinct phases of development.",
        ],
      },
    ],
    transformationRules: [
      {
        directForm: "Stylistic adaptation for different contexts and purposes",
        indirectForm:
          "Sophisticated integration of reported speech into complex discourse",
        explanation:
          "Master-level ability to adapt form and style to context and audience",
      },
    ],
    practicalApplications: [
      "Creative and literary writing",
      "Legal document preparation",
      "High-level academic and research writing",
      "Professional editing and publishing",
    ],
    commonMistakes: [
      {
        mistake: "Using overly complex structures inappropriately",
        correction: "Match complexity to context and audience needs",
        explanation:
          "Advanced users should know when to use simple vs. complex structures",
      },
      {
        mistake: "Inconsistent register within documents",
        correction: "Maintain appropriate register throughout",
        explanation:
          "Master level requires consistent and appropriate register choice",
      },
    ],
  },
};

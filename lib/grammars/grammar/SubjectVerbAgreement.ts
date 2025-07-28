import { SubjectVerbAgreementType } from "@/types/grammars/grammar/SubjectVerbAgreement";

export const SubjectVerbAgreementData:SubjectVerbAgreementType = {
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
    learningObjectives: [
      "Understand the basic concept of subject-verb agreement",
      "Recognize singular and plural subjects",
      "Apply -s ending for third person singular in present tense",
      "Use base form for all other persons and plural subjects",
      "Identify common subject-verb agreement patterns in simple sentences",
    ],
    keyConcepts: [
      "Subject-verb agreement is about matching number (singular/plural)",
      "Third person singular (he/she/it) requires -s ending",
      "First person (I/we) and second person (you) use base form",
      "Plural subjects always use base form of verb",
      "This rule applies to all regular verbs in present tense",
    ],
    commonMistakes: [
      "Adding -s to verbs with plural subjects: 'The dogs barks' ❌",
      "Omitting -s with third person singular: 'He work' ❌",
      "Confusing 'I' and 'he/she/it' verb forms: 'I works' ❌",
      "Using wrong form with 'you': 'You speaks' ❌",
    ],
    practiceTips: [
      "Practice with simple sentences first",
      "Focus on third person singular (-s ending)",
      "Use substitution drills (I work, you work, he works)",
      "Read simple texts and identify subject-verb patterns",
      "Create your own sentences with different subjects",
    ],
    references: {
      websites: [
        {
          title: "Purdue OWL - Subject-Verb Agreement",
          url: "https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html",
          description:
            "Comprehensive guide to subject-verb agreement with examples and exercises",
        },
        {
          title: "Grammarly - Subject-Verb Agreement",
          url: "https://www.grammarly.com/blog/subject-verb-agreement/",
          description:
            "Clear explanation with common mistakes and how to avoid them",
        },
        {
          title: "English Grammar 101 - Subject-Verb Agreement",
          url: "https://www.englishgrammar101.com/module-3/verbs/lesson-1/subject-verb-agreement",
          description:
            "Interactive lessons and exercises for basic subject-verb agreement",
        },
        {
          title: "BBC Learning English - Subject-Verb Agreement",
          url: "https://www.bbc.co.uk/learningenglish/english/course/eiam/unit-1/session-1",
          description: "Video lessons and practice exercises for beginners",
        },
        {
          title: "Khan Academy - Subject-Verb Agreement",
          url: "https://www.khanacademy.org/humanities/grammar/syntax-conventions-of-standard-english/subject-verb-agreement-and-pronoun-antecedent-agreement/e/subject-verb-agreement",
          description: "Interactive exercises and detailed explanations",
        },
      ],
      books: [
        {
          title: "English Grammar in Use",
          author: "Raymond Murphy",
          isbn: "978-0521189064",
          description:
            "Essential grammar reference with clear explanations and exercises for A1 level",
        },
        {
          title: "Basic English Grammar",
          author: "Betty Schrampfer Azar",
          isbn: "978-0133684247",
          description:
            "Comprehensive beginner's guide to English grammar including subject-verb agreement",
        },
        {
          title: "Oxford Practice Grammar Basic",
          author: "Norman Coe",
          isbn: "978-0194579780",
          description:
            "Practice book with clear explanations and exercises for elementary learners",
        },
        {
          title: "Cambridge Grammar for IELTS",
          author: "Diana Hopkins",
          isbn: "978-0521604628",
          description:
            "Grammar reference with focus on common patterns and mistakes",
        },
        {
          title: "Practical English Usage",
          author: "Michael Swan",
          isbn: "978-0194202435",
          description:
            "Comprehensive reference guide covering all aspects of English grammar",
        },
      ],
    },
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
    learningObjectives: [
      "Master compound subject agreement with 'and', 'or', 'nor'",
      "Understand indefinite pronoun agreement patterns",
      "Apply proximity rule for 'or'/'nor' compound subjects",
      "Recognize singular vs plural indefinite pronouns",
      "Use correct agreement in more complex sentence structures",
    ],
    keyConcepts: [
      "Compound subjects with 'and' are always plural",
      "With 'or'/'nor', verb agrees with the subject closest to it",
      "Indefinite pronouns ending in -one, -body, -thing are singular",
      "Indefinite pronouns like 'both', 'few', 'many' are plural",
      "Some indefinite pronouns can be singular or plural depending on context",
    ],
    commonMistakes: [
      "Using singular verb with 'and' compound: 'Tom and Jerry is friends' ❌",
      "Ignoring proximity rule: 'Neither the teacher nor the students has arrived' ❌",
      "Treating singular indefinite pronouns as plural: 'Everyone are here' ❌",
      "Using plural verb with singular indefinite pronouns: 'Someone have left' ❌",
    ],
    practiceTips: [
      "Practice identifying compound subjects",
      "Learn lists of singular and plural indefinite pronouns",
      "Use the proximity rule consistently with 'or'/'nor'",
      "Create sentences with different compound subject patterns",
      "Read texts and identify compound subject agreement",
    ],
    references: {
      websites: [
        {
          title: "Grammar Monster - Compound Subjects",
          url: "https://www.grammar-monster.com/glossary/compound_subject.htm",
          description:
            "Detailed explanation of compound subject agreement with examples",
        },
        {
          title: "YourDictionary - Indefinite Pronouns",
          url: "https://grammar.yourdictionary.com/parts-of-speech/pronouns/indefinite-pronoun.html",
          description:
            "Comprehensive guide to indefinite pronouns and their agreement",
        },
        {
          title: "English Club - Subject-Verb Agreement",
          url: "https://www.englishclub.com/grammar/subject-verb-agreement.htm",
          description:
            "Clear rules and examples for A2 level agreement patterns",
        },
        {
          title: "ESL Library - Subject-Verb Agreement",
          url: "https://esllibrary.com/courses/88/lessons/2112",
          description:
            "Interactive lessons focusing on compound subjects and exceptions",
        },
        {
          title: "Grammar Bytes - Subject-Verb Agreement",
          url: "http://www.chompchomp.com/rules/svagr01.htm",
          description:
            "Comprehensive rules with practice exercises for intermediate learners",
        },
      ],
      books: [
        {
          title: "English Grammar in Use Intermediate",
          author: "Raymond Murphy",
          isbn: "978-0521189064",
          description:
            "Intermediate grammar reference with focus on compound subjects and exceptions",
        },
        {
          title: "Understanding and Using English Grammar",
          author: "Betty Schrampfer Azar",
          isbn: "978-0133994599",
          description:
            "Detailed explanations of subject-verb agreement patterns and rules",
        },
        {
          title: "Oxford Practice Grammar Intermediate",
          author: "John Eastwood",
          isbn: "978-0194579803",
          description:
            "Practice book with exercises on compound subjects and indefinite pronouns",
        },
        {
          title: "Advanced Grammar in Use",
          author: "Martin Hewings",
          isbn: "978-1107697386",
          description: "Advanced reference covering complex agreement patterns",
        },
        {
          title: "The Blue Book of Grammar and Punctuation",
          author: "Jane Straus",
          isbn: "978-1118785560",
          description:
            "Comprehensive grammar guide with clear rules and examples",
        },
      ],
    },
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
    learningObjectives: [
      "Understand collective noun agreement variations between AmE and BrE",
      "Master uncountable noun agreement patterns",
      "Apply correct agreement in inverted sentences and questions",
      "Recognize context-dependent agreement choices",
      "Use appropriate agreement in formal and informal contexts",
    ],
    keyConcepts: [
      "Collective nouns can be singular or plural depending on dialect and context",
      "Uncountable nouns are always grammatically singular",
      "Abstract concepts and academic subjects are singular",
      "In inverted sentences, verb agrees with the subject that follows",
      "Context and meaning determine collective noun agreement",
    ],
    commonMistakes: [
      "Using plural verb with uncountable nouns: 'The news are good' ❌",
      "Ignoring dialect differences: 'The team are winning' (AmE context) ❌",
      "Wrong agreement in inverted sentences: 'Here are the book' ❌",
      "Treating abstract concepts as plural: 'Mathematics are difficult' ❌",
    ],
    practiceTips: [
      "Learn lists of common uncountable nouns",
      "Practice with both American and British English examples",
      "Focus on context when choosing collective noun agreement",
      "Practice inverted sentence patterns",
      "Read texts from different English-speaking countries",
    ],
    references: {
      websites: [
        {
          title: "Cambridge Dictionary - Collective Nouns",
          url: "https://dictionary.cambridge.org/grammar/british-grammar/collective-nouns",
          description:
            "Detailed explanation of collective nouns and their agreement patterns",
        },
        {
          title: "Oxford Learner's Dictionaries - Uncountable Nouns",
          url: "https://www.oxfordlearnersdictionaries.com/about/uncountable-nouns",
          description:
            "Comprehensive list and explanation of uncountable nouns",
        },
        {
          title: "British Council - Subject-Verb Agreement",
          url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/subject-verb-agreement",
          description:
            "Interactive lessons with focus on British English patterns",
        },
        {
          title: "Grammar Girl - Collective Nouns",
          url: "https://www.quickanddirtytips.com/education/grammar/collective-nouns",
          description:
            "Clear explanation of collective noun agreement with examples",
        },
        {
          title: "Merriam-Webster - Subject-Verb Agreement",
          url: "https://www.merriam-webster.com/words-at-play/subject-verb-agreement",
          description:
            "American English perspective on subject-verb agreement rules",
        },
      ],
      books: [
        {
          title: "English Grammar in Use Upper-Intermediate",
          author: "Raymond Murphy",
          isbn: "978-0521189064",
          description:
            "Upper-intermediate reference covering complex agreement patterns",
        },
        {
          title: "Advanced Grammar in Use",
          author: "Martin Hewings",
          isbn: "978-1107697386",
          description:
            "Advanced grammar reference with focus on complex subjects",
        },
        {
          title: "Oxford Practice Grammar Advanced",
          author: "George Yule",
          isbn: "978-0194579827",
          description:
            "Advanced practice book with exercises on complex agreement",
        },
        {
          title: "Longman Advanced Learners' Grammar",
          author: "Mark Foley",
          isbn: "978-0582403833",
          description: "Comprehensive grammar reference for advanced learners",
        },
        {
          title: "The Cambridge Grammar of the English Language",
          author: "Rodney Huddleston",
          isbn: "978-0521431460",
          description:
            "Academic reference covering all aspects of English grammar",
        },
      ],
    },
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
    learningObjectives: [
      "Master agreement with expressions of amount, time, money, and distance",
      "Understand title and name agreement patterns",
      "Apply correct agreement in relative clauses and complex sentences",
      "Recognize when intervening phrases affect agreement",
      "Use appropriate agreement in academic and professional writing",
    ],
    keyConcepts: [
      "Amounts of money, time, and distance are treated as singular units",
      "Fractions and percentages agree with the noun after 'of'",
      "Titles and names of entities are always singular",
      "Relative pronouns refer to their antecedents for agreement",
      "Intervening phrases between subject and verb don't change agreement",
    ],
    commonMistakes: [
      "Using plural verb with amounts: 'Ten dollars are enough' ❌",
      "Wrong agreement with fractions: 'Half of the cake are gone' ❌",
      "Treating titles as plural: 'The Lord of the Rings are great' ❌",
      "Agreeing verb with intervening noun: 'The list of items are on the desk' ❌",
    ],
    practiceTips: [
      "Practice with various expressions of amount and quantity",
      "Learn to identify the true subject in complex sentences",
      "Focus on relative clause agreement patterns",
      "Practice with titles and names from different contexts",
      "Read academic texts and identify complex agreement patterns",
    ],
    references: {
      websites: [
        {
          title: "Purdue OWL - Subject-Verb Agreement",
          url: "https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html",
          description:
            "Comprehensive guide covering complex agreement patterns and exceptions",
        },
        {
          title: "Grammarly - Subject-Verb Agreement",
          url: "https://www.grammarly.com/blog/subject-verb-agreement/",
          description:
            "Advanced rules and examples for complex subject-verb agreement",
        },
        {
          title: "University of Toronto - Subject-Verb Agreement",
          url: "https://advice.writing.utoronto.ca/revising/subject-verb-agreement/",
          description:
            "Academic writing perspective on complex agreement patterns",
        },
        {
          title: "Grammar Monster - Subject-Verb Agreement",
          url: "https://www.grammar-monster.com/lessons/subject_verb_agreement.htm",
          description:
            "Detailed rules with examples for advanced agreement patterns",
        },
        {
          title: "English Grammar 101 - Subject-Verb Agreement",
          url: "https://www.englishgrammar101.com/module-3/verbs/lesson-1/subject-verb-agreement",
          description:
            "Comprehensive lessons covering all levels of subject-verb agreement",
        },
      ],
      books: [
        {
          title: "Advanced Grammar in Use",
          author: "Martin Hewings",
          isbn: "978-1107697386",
          description:
            "Advanced grammar reference with focus on complex agreement patterns",
        },
        {
          title: "The Cambridge Grammar of the English Language",
          author: "Rodney Huddleston",
          isbn: "978-0521431460",
          description:
            "Comprehensive academic reference covering all grammar aspects",
        },
        {
          title: "Longman Advanced Learners' Grammar",
          author: "Mark Foley",
          isbn: "978-0582403833",
          description:
            "Advanced grammar reference for upper-intermediate to advanced learners",
        },
        {
          title: "Oxford Practice Grammar Advanced",
          author: "George Yule",
          isbn: "978-0194579827",
          description:
            "Advanced practice book with exercises on complex agreement",
        },
        {
          title: "A Comprehensive Grammar of the English Language",
          author: "Randolph Quirk",
          isbn: "978-0582517349",
          description:
            "Extensive grammar reference covering all aspects of English grammar",
        },
      ],
    },
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
    learningObjectives: [
      "Master academic writing agreement patterns and conventions",
      "Understand complex subject agreement with intervening phrases",
      "Apply subjunctive mood agreement in formal contexts",
      "Recognize context-dependent agreement choices in academic writing",
      "Use sophisticated agreement patterns in professional communication",
    ],
    keyConcepts: [
      "Academic nouns like 'data' and 'statistics' can be singular or plural",
      "Intervening phrases don't change subject-verb agreement",
      "Subjunctive mood uses base form regardless of subject",
      "Formal writing requires precise agreement choices",
      "Context determines whether academic nouns are singular or plural",
    ],
    commonMistakes: [
      "Inconsistent agreement with academic nouns: 'The data shows' vs 'The data show' ❌",
      "Agreeing verb with intervening phrase: 'The author, along with editors, are reviewing' ❌",
      "Using indicative instead of subjunctive: 'I suggest that he goes' ❌",
      "Wrong agreement in complex subjects: 'The quality, not the quantity, matter' ❌",
    ],
    practiceTips: [
      "Study academic writing conventions and style guides",
      "Practice identifying the true subject in complex sentences",
      "Learn subjunctive mood patterns and triggers",
      "Read academic texts and analyze agreement patterns",
      "Practice formal writing with complex subject structures",
    ],
    references: {
      websites: [
        {
          title: "University of North Carolina - Subject-Verb Agreement",
          url: "https://writingcenter.unc.edu/tips-and-tools/subject-verb-agreement/",
          description:
            "Academic writing perspective on complex subject-verb agreement",
        },
        {
          title: "MIT Writing Center - Subject-Verb Agreement",
          url: "https://cmsw.mit.edu/writing-and-communication-center/online-resources/grammar/",
          description:
            "Technical writing guidelines for subject-verb agreement",
        },
        {
          title: "Harvard Writing Center - Grammar",
          url: "https://writingproject.fas.harvard.edu/pages/grammar",
          description:
            "Academic grammar resources including complex agreement patterns",
        },
        {
          title: "Stanford Writing Center - Subject-Verb Agreement",
          url: "https://undergrad.stanford.edu/programs/pwr/explore/notation/grammar",
          description: "Advanced grammar guidelines for academic writing",
        },
        {
          title: "University of Chicago - Subject-Verb Agreement",
          url: "https://writing-program.uchicago.edu/resources/grammar",
          description:
            "Comprehensive grammar guide for advanced academic writing",
        },
      ],
      books: [
        {
          title: "The Elements of Style",
          author: "William Strunk Jr. and E.B. White",
          isbn: "978-0205309023",
          description: "Classic guide to English writing style and grammar",
        },
        {
          title: "A Writer's Reference",
          author: "Diana Hacker",
          isbn: "978-1319057442",
          description:
            "Comprehensive writing reference with grammar guidelines",
        },
        {
          title: "The Chicago Manual of Style",
          author: "University of Chicago Press",
          isbn: "978-0226287058",
          description:
            "Authoritative style guide for academic and professional writing",
        },
        {
          title: "Academic Writing: A Handbook for International Students",
          author: "Stephen Bailey",
          isbn: "978-1138048737",
          description:
            "Comprehensive guide to academic writing including grammar",
        },
        {
          title: "The Oxford Guide to English Grammar",
          author: "John Eastwood",
          isbn: "978-0194313513",
          description: "Comprehensive grammar reference for advanced learners",
        },
      ],
    },
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
    learningObjectives: [
      "Master subject-verb agreement in literary and creative contexts",
      "Understand specialized field agreement conventions",
      "Recognize and use dialectal variations appropriately",
      "Apply agreement patterns in professional and artistic contexts",
      "Demonstrate mastery of agreement in all English varieties",
    ],
    keyConcepts: [
      "Literary writing allows creative license with agreement for effect",
      "Different fields have specific agreement conventions",
      "Dialectal variations reflect cultural and regional differences",
      "Mastery involves understanding context-appropriate choices",
      "Professional writing requires consistent agreement within conventions",
    ],
    commonMistakes: [
      "Using dialectal patterns in inappropriate contexts: 'They was there' (formal writing) ❌",
      "Ignoring field-specific conventions: 'The data is' (scientific context) ❌",
      "Overusing creative license: 'The mountains speaks' (inappropriate context) ❌",
      "Inconsistent agreement within specialized fields ❌",
    ],
    practiceTips: [
      "Study literary texts and analyze creative agreement usage",
      "Learn field-specific conventions and style guides",
      "Practice with different English dialects and varieties",
      "Read professional texts from various fields",
      "Develop sensitivity to context-appropriate agreement choices",
    ],
    references: {
      websites: [
        {
          title: "Literary Devices - Subject-Verb Agreement",
          url: "https://literarydevices.net/subject-verb-agreement/",
          description:
            "Analysis of subject-verb agreement in literary contexts",
        },
        {
          title: "The Writing Center - Dialectal Variation",
          url: "https://writing.wisc.edu/handbook/grammarpunct/",
          description:
            "Guidelines for handling dialectal variations in writing",
        },
        {
          title: "Scientific Writing Resources",
          url: "https://www.nature.com/scitable/topicpage/effective-writing-13815989/",
          description:
            "Scientific writing guidelines including grammar conventions",
        },
        {
          title: "Legal Writing Institute",
          url: "https://www.lwionline.org/resources",
          description:
            "Resources for legal writing including grammar guidelines",
        },
        {
          title: "Technical Writing Resources",
          url: "https://www.stc.org/technical-writing/",
          description:
            "Professional technical writing guidelines and resources",
        },
      ],
      books: [
        {
          title: "The Art of Styling Sentences",
          author: "Ann Longknife",
          isbn: "978-0764120073",
          description:
            "Advanced guide to sentence structure and stylistic choices",
        },
        {
          title: "Style: Toward Clarity and Grace",
          author: "Joseph M. Williams",
          isbn: "978-0226899152",
          description: "Comprehensive guide to writing style including grammar",
        },
        {
          title: "The Sense of Style",
          author: "Steven Pinker",
          isbn: "978-0143127796",
          description: "Modern guide to writing style and grammar usage",
        },
        {
          title: "Writing with Style",
          author: "John R. Trimble",
          isbn: "978-0130258726",
          description:
            "Guide to writing style and grammar for advanced writers",
        },
        {
          title: "The Oxford Dictionary of English Grammar",
          author: "Bas Aarts",
          isbn: "978-0199658237",
          description:
            "Comprehensive reference covering all aspects of English grammar",
        },
      ],
    },
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

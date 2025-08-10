import { parallelStructuresDataType } from "@/types/grammars/grammar/grammar_advance/parallelStructures";

export const parallelStructuresData: parallelStructuresDataType = {
  id: 31,
  topic: "Parallel Structures",
  level: "A1-C2",
  definition:
    "Parallel structure (also known as parallelism) refers to the repetition of a chosen grammatical form within a sentence. Using the same pattern of words shows that two or more ideas have the same level of importance. It creates balance, rhythm, and clarity in writing by ensuring that words, phrases, or clauses in a series have the same grammatical form.",
  importance: [
    "Makes writing clearer and more readable",
    "Improves rhythm and balance in writing",
    "Avoids awkwardness and ambiguity",
    "Used in formal, academic, and professional contexts",
    "Essential for standardized tests (TOEFL, IELTS, SAT, GRE)",
    "Creates memorable and persuasive speeches",
    "Demonstrates advanced writing proficiency",
  ],
  basicRules: {
    explanation:
      "Words or phrases in a list or series should have the same grammatical form. This applies to nouns with nouns, verbs with verbs, adjectives with adjectives, and so on.",
    structure:
      "Noun + Noun + Noun / Verb + Verb + Verb / Adjective + Adjective + Adjective / Phrase + Phrase + Phrase",
    example:
      "✔️ She likes reading, writing, and drawing. ✖️ She likes reading, to write, and drawing.",
  },
  commonParallelForms: {
    nouns: {
      example: "They enjoy music, movies, and games.",
      explanation:
        "Use nouns in series to list things, people, or concepts of equal importance.",
    },
    verbs: {
      example:
        "He washed the dishes, cleaned the floor, and watered the plants.",
      explanation:
        "Use verbs in the same tense and form when describing sequential or related actions.",
    },
    infinitives: {
      example: "She wants to read, to sleep, and to relax.",
      explanation:
        "Use infinitives (to + base verb) consistently when expressing desires, plans, or purposes.",
    },
    gerunds: {
      example: "Swimming, hiking, and running are his hobbies.",
      explanation:
        "Use gerunds (-ing forms) when the actions function as nouns in the sentence.",
    },
    adjectives: {
      example: "The room is clean, bright, and spacious.",
      explanation:
        "Use adjectives of similar types to describe characteristics or qualities.",
    },
    adverbs: {
      example: "She danced gracefully, smoothly, and energetically.",
      explanation:
        "Use adverbs in the same form to modify verbs, adjectives, or other adverbs.",
    },
    clauses: {
      example:
        "I believe that he is honest, that he is kind, and that he is hardworking.",
      explanation:
        "Use dependent clauses with the same structure and conjunction patterns.",
    },
    prepositionalPhrases: {
      example: "We traveled by car, by train, and by bus.",
      explanation:
        "Use prepositional phrases with the same preposition and structure.",
    },
    correlativeConjunctions: {
      both_and: "She is both smart and hardworking.",
      not_only_but_also: "He is not only funny but also generous.",
      either_or: "You can either stay here or go home.",
      neither_nor: "She is neither angry nor upset.",
      whether_or: "Whether you agree or disagree, please listen.",
      not_but: "The issue is not money but time.",
      rather_than: "I prefer walking rather than driving.",
      as_as: "She is as talented as she is dedicated.",
    },
  },
  A1_A2: {
    focus: "Simple parallel items in lists and basic correlative conjunctions.",
    detailedExplanation:
      "At beginner levels, learners focus on creating simple lists with the same grammatical forms. The emphasis is on recognizing and using basic parallel structures in everyday communication, particularly with common nouns, simple verbs, and basic adjectives.",
    keyLearningPoints: [
      "Understanding that items in a list must have the same grammatical form",
      "Using simple nouns, verbs, and adjectives in parallel",
      "Recognizing parallel structure in everyday speech",
      "Avoiding mixing different grammatical forms in simple lists",
      "Using basic coordinating conjunctions (and, or, but) correctly",
    ],
    examples: [
      "I like apples, oranges, and bananas.",
      "She can dance, sing, and act.",
      "He is tall, thin, and strong.",
      "We are going to the store, the bank, and the park.",
      "My hobbies are reading, cooking, and gardening.",
      "The dog is friendly, playful, and loyal.",
    ],
    errors: [
      "❌ I like swimming, to run, and biking. → ✔️ I like swimming, running, and biking.",
      "❌ He is kind, generously, and smart. → ✔️ He is kind, generous, and smart.",
      "❌ She wants eating, to sleep, and rest. → ✔️ She wants to eat, to sleep, and to rest.",
      "❌ The room is big, clean, and beautifully. → ✔️ The room is big, clean, and beautiful.",
    ],
    practiceTypes: [
      "Fill-in-the-blank exercises with simple lists",
      "Matching parallel and non-parallel sentences",
      "Correcting basic parallel structure errors",
      "Creating simple lists using the same word types",
    ],
    vocabularyLevel:
      "High-frequency, everyday vocabulary (family, food, hobbies, colors, basic adjectives)",
    sentenceComplexity:
      "Simple sentences with basic coordination, typically 5-10 words per clause",
  },
  B1_B2: {
    focus:
      "Advanced correlative structures, balance in comparison and contrast.",
    detailedExplanation:
      "At intermediate levels, learners master more complex parallel structures including correlative conjunctions and begin to use parallelism in longer, more sophisticated sentences. They learn to balance not just simple words but also phrases and clauses while maintaining grammatical consistency.",
    keyLearningPoints: [
      "Mastering correlative conjunctions (not only...but also, either...or, neither...nor)",
      "Creating parallel structures with phrases and clauses",
      "Understanding the placement of correlative conjunctions",
      "Using parallelism in comparisons and contrasts",
      "Maintaining parallel structure in complex sentences",
      "Recognizing and correcting faulty parallelism in longer texts",
    ],
    examples: [
      "She wanted not only to win the race but also to break the record.",
      "The new policy affects students, teachers, and administrators alike.",
      "Learning to speak, read, and write English takes time.",
      "Either you finish your homework or you cannot watch TV.",
      "The presentation was both informative and engaging.",
    ],
    structures: [
      "Not only... but also",
      "Both... and",
      "Either... or / Neither... nor",
      "Prefer... to / Rather... than",
      "Whether... or",
      "As much... as",
    ],
    commonMistakes: [
      "❌ He not only speaks French but also German. → ✔️ He speaks not only French but also German.",
      "❌ Either you study hard or fail. → ✔️ Either you study hard or you will fail.",
      "❌ She is both intelligent and works hard. → ✔️ She is both intelligent and hardworking.",
      "❌ Neither the teacher nor the students was happy. → ✔️ Neither the teacher nor the students were happy.",
    ],
    advancedPatterns: [
      {
        pattern: "Parallel infinitive phrases",
        explanation:
          "Using multiple infinitive phrases with the same structure",
        example:
          "His goals are to graduate with honors, to find a good job, and to start a family.",
      },
      {
        pattern: "Parallel gerund phrases",
        explanation: "Using gerund phrases that follow the same pattern",
        example:
          "She enjoys reading mystery novels, watching documentaries, and discussing philosophy.",
      },
      {
        pattern: "Parallel that-clauses",
        explanation: "Using multiple that-clauses in parallel structure",
        example:
          "I believe that education is important, that hard work pays off, and that persistence leads to success.",
      },
    ],
    contextualUsage: [
      "Academic writing for expressing multiple ideas",
      "Professional presentations and reports",
      "Persuasive writing and argumentative essays",
      "Formal speech and public speaking",
      "Business communication and proposals",
    ],
  },
  C1_C2: {
    focus:
      "Complex parallel structures in formal, academic, and persuasive writing.",
    detailedExplanation:
      "At advanced levels, learners use parallelism as a sophisticated rhetorical device in academic, professional, and literary contexts. They understand how parallel structure creates emphasis, rhythm, and memorability in complex texts, and can manipulate these structures for stylistic effect.",
    keyLearningPoints: [
      "Using parallelism for rhetorical effect and emphasis",
      "Creating sophisticated parallel structures in academic writing",
      "Understanding parallelism in literary and political discourse",
      "Manipulating parallel structure for stylistic purposes",
      "Recognizing and analyzing parallelism in complex texts",
      "Using parallelism in thesis statements and argument development",
    ],
    advancedStructures: [
      {
        structure: "Parallelism in thesis statements",
        example:
          "This study will explore the causes of inflation, the effects on the economy, and the potential solutions for future growth.",
        explanation:
          "Using parallel structure in academic thesis statements to present multiple research objectives clearly and memorably.",
        context: "Academic writing, research papers, dissertations",
      },
      {
        structure: "Parallelism with modifiers",
        example:
          "He approached the problem cautiously, strategically, and methodically.",
        explanation:
          "Using parallel adverbs to create rhythm and emphasize the systematic nature of an action.",
        context: "Professional reports, analytical writing",
      },
      {
        structure: "Parallelism in rhetorical writing",
        example:
          "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields.",
        explanation:
          "Repetitive parallel structure used for emotional impact and memorability in speeches.",
        context: "Political speeches, persuasive writing, oratory",
      },
      {
        structure: "Parallel structure in job descriptions or resumes",
        example:
          "Responsibilities include managing inventory, supervising staff, and preparing reports.",
        explanation:
          "Using parallel gerunds to list professional duties in a clear, professional manner.",
        context: "Business writing, HR documents, professional profiles",
      },
      {
        structure: "Anaphoric parallelism",
        example:
          "We believe in justice. We believe in equality. We believe in freedom.",
        explanation:
          "Repeating the same words at the beginning of parallel clauses for emphasis.",
        context: "Speeches, manifestos, persuasive essays",
      },
      {
        structure: "Chiasmus (inverted parallelism)",
        example:
          "Ask not what your country can do for you; ask what you can do for your country.",
        explanation:
          "Advanced rhetorical device where parallel elements are reversed for impact.",
        context: "Literary writing, famous speeches, sophisticated rhetoric",
      },
    ],
    stylisticEffects: [
      "Creates rhythm and emphasis in persuasive and literary writing",
      "Supports clarity in complex ideas and long sentences",
      "Shows mastery of style in academic essays, speeches, and reports",
      "Enhances memorability of key messages",
      "Demonstrates sophisticated command of English syntax",
      "Creates aesthetic pleasure and artistic effect in writing",
    ],
    rhetoricalDevices: [
      {
        device: "Isocolon",
        explanation: "Parallel clauses of equal length and similar structure",
        example: "Veni, vidi, vici (I came, I saw, I conquered)",
      },
      {
        device: "Tricolon",
        explanation: "Three parallel elements for emphasis and rhythm",
        example: "Government of the people, by the people, for the people",
      },
      {
        device: "Epistrophe",
        explanation: "Repetition of words at the end of parallel clauses",
        example:
          "When I was a child, I spoke as a child, I understood as a child, I thought as a child",
      },
    ],
    academicWriting: {
      usage:
        "Essential for creating clear, sophisticated arguments in academic texts",
      examples: [
        "The research examines three factors: economic conditions, social attitudes, and political influences.",
        "Students who participate show improved grades, better attendance, and increased motivation.",
        "The theory suggests that learning involves processing information, storing knowledge, and applying concepts.",
      ],
    },
    literaryAnalysis: {
      purpose:
        "Tool for analyzing how authors create rhythm, emphasis, and meaning through structure",
      examples: [
        "Analysis of parallel structure in Martin Luther King Jr.'s 'I Have a Dream' speech",
        "Examination of parallelism in Dickens' 'It was the best of times, it was the worst of times'",
        "Study of biblical parallelism in poetry and religious texts",
      ],
    },
    famousQuotes: [
      "Government of the people, by the people, for the people... – Abraham Lincoln",
      "To strive, to seek, to find, and not to yield. – Alfred Lord Tennyson",
      "Ask not what your country can do for you; ask what you can do for your country. – John F. Kennedy",
      "I have a dream that one day this nation will rise up, live out the true meaning of its creed... – Martin Luther King Jr.",
    ],
  },
  diagnostic: {
    identify:
      "Look for lists or comparisons. Check that each part has the same grammatical form.",
    test: "Split the sentence and check each part independently.",
    example: {
      faulty: "She enjoys cooking, to swim, and biking.",
      corrected: "She enjoys cooking, swimming, and biking.",
    },
    checklistSteps: [
      "Identify all items in the series or list",
      "Check the grammatical form of each item",
      "Ensure all items follow the same pattern",
      "Look for coordinating or correlative conjunctions",
      "Verify that each element can stand alone with the main verb",
      "Check for consistency in tense, voice, and structure",
    ],
  },
  exceptionsAndNotes: {
    exceptions: [
      "In informal speech, people may mix structures, but it's not recommended in writing.",
      "In poetry or stylistic writing, parallelism may be intentionally broken for effect.",
    ],
    warning: "Inconsistent structure weakens writing and may confuse readers.",
    note: "Parallelism is essential for writing resumes, cover letters, academic writing, and standardized tests like IELTS, TOEFL, and SAT.",
    specialCases: [
      {
        case: "Mixed structures in informal speech",
        explanation:
          "Native speakers may mix parallel structures in casual conversation, but this should be avoided in writing.",
        example:
          "I like running, to swim, and biking. (acceptable in speech, not in writing)",
      },
      {
        case: "Intentional breaking for effect",
        explanation:
          "Writers may deliberately break parallelism for stylistic purposes or emphasis.",
        example:
          "He came, he saw, he conquered everything. (breaking pattern for emphasis)",
      },
      {
        case: "Length variation for emphasis",
        explanation:
          "Sometimes varying the length of parallel elements can create dramatic effect.",
        example:
          "I came to work. I came to succeed. I came to change everything about this company.",
      },
    ],
  },
  practice: {
    rewrite: [
      {
        faulty: "He likes to jog, running, and to swim.",
        correct: "He likes to jog, to run, and to swim.",
        explanation:
          "Mixed infinitives and gerunds - all should be infinitives for parallel structure.",
      },
      {
        faulty: "The new manager is effective, works hard, and friendliness.",
        correct: "The new manager is effective, hardworking, and friendly.",
        explanation:
          "Mixed adjectives and verbs/nouns - all should be adjectives for parallel structure.",
      },
    ],
    complete: [
      "She not only speaks Spanish __ French.",
      "I prefer reading books __ watching movies.",
      "You can either join us now __ stay behind.",
    ],
  },
  teachingTips: {
    visualAids: "Use tables to compare parallel and non-parallel sentences.",
    colorCoding: "Highlight each grammatical form in a different color.",
    realLifeUse: "Find examples in speeches, ads, and political slogans.",
    collaborative: "Group activities rewriting faulty parallel sentences.",
    progressionStrategy: [
      "Start with simple word lists before moving to phrases",
      "Practice identifying parallel structures before creating them",
      "Use visual aids and color coding for different grammatical forms",
      "Progress from basic conjunctions to correlative conjunctions",
      "Apply to real-world writing tasks like resumes and essays",
    ],
  },
  references: {
    books: [
      "Cambridge English Grammar in Use – Intermediate & Advanced",
      "The Elements of Style by Strunk & White",
      "Oxford Advanced Learner's Dictionary – Parallelism",
      "Academic Writing for Graduate Students by John M. Swales",
      "They Say / I Say: The Moves That Matter in Academic Writing by Gerald Graff",
    ],
    websites: [
      "https://owl.purdue.edu/owl/general_writing/grammar/parallel_structure.html",
      "https://www.grammarly.com/blog/parallelism/",
      "https://writingcenter.unc.edu/tips-and-tools/parallel-structure/",
      "https://grammar.ccc.commnet.edu/grammar/parallelism.htm",
      "https://www.englishgrammar.org/parallel-structure/",
    ],
    academicSources: [
      "Merriam-Webster Dictionary – Grammar Guide: Parallel Construction",
      "The Chicago Manual of Style - Parallel Structure Guidelines",
      "MLA Handbook - Guidelines for Parallel Structure in Academic Writing",
      "APA Style Manual - Parallel Construction in Research Writing",
      "Harvard Writing Center - Parallelism in Academic Essays",
    ],
  },
};

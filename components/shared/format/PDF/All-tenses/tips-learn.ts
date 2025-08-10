// Learning tips for all grammar topics (119 topics)
import type {
  TopicData,
  StatisticsResult,
  ComponentImportanceResult,
} from "../../../../../types/formats/pdf/alll-tenses";

export interface LearningTip {
  topic: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  studyTime: string;
  priority: "High" | "Medium" | "Low";
  attention: "More" | "Less" | "Moderate"; // For attention chart
  tips: string[];
  commonPitfalls: string[];
  practiceActivities: string[];
  masteryCriteria: string[];
  category: string;
}

export const grammarLearningTips: { [key: string]: LearningTip } = {
  // BASIC TENSES (12 topics)
  Simple_Present: {
    topic: "Simple Present",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Basic Tenses",
    tips: [
      "Start with basic verb forms (I, you, we, they + base verb)",
      "Focus on third person singular (he, she, it + verb+s)",
      "Learn common time expressions (always, usually, sometimes)",
      "Practice with daily routine vocabulary",
      "Master question and negative forms early",
    ],
    commonPitfalls: [
      "Forgetting -s/-es with third person singular",
      "Using present continuous for habits",
      "Incorrect question formation",
    ],
    practiceActivities: [
      "Daily routine descriptions",
      "Fact statements about yourself",
      "Question formation drills",
      "Third person storytelling",
    ],
    masteryCriteria: [
      "Consistent third person singular usage",
      "Correct question formation",
      "Appropriate time expression usage",
    ],
  },

  Present_Continuous: {
    topic: "Present Continuous",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Basic Tenses",
    tips: [
      "Learn be + verb-ing structure thoroughly",
      "Focus on current actions and temporary situations",
      "Practice spelling rules for -ing forms",
      "Use with time expressions (now, currently, at the moment)",
      "Distinguish from simple present usage",
    ],
    commonPitfalls: [
      "Using with stative verbs (know, like, want)",
      "Incorrect -ing spelling (stoping vs stopping)",
      "Confusing with simple present for habits",
    ],
    practiceActivities: [
      "Describe current actions",
      "Photo description exercises",
      "Live commentary practice",
      "Temporary vs permanent situation drills",
    ],
    masteryCriteria: [
      "Correct -ing formation",
      "Proper stative vs dynamic verb usage",
      "Clear temporary action understanding",
    ],
  },

  Simple_Past: {
    topic: "Simple Past",
    difficulty: "Beginner",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Basic Tenses",
    tips: [
      "Memorize common irregular past forms",
      "Practice regular verb -ed endings",
      "Learn past time expressions (yesterday, last week)",
      "Focus on storytelling and narrative structure",
      "Master did/didn't for questions and negatives",
    ],
    commonPitfalls: [
      "Mixing regular and irregular forms",
      "Using did + past form in questions",
      "Incorrect pronunciation of -ed endings",
    ],
    practiceActivities: [
      "Personal story narration",
      "Historical event descriptions",
      "Irregular verb memorization games",
      "Timeline creation exercises",
    ],
    masteryCriteria: [
      "Confident irregular verb usage",
      "Proper question formation with did",
      "Clear past narrative ability",
    ],
  },

  Simple_Future: {
    topic: "Simple Future",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Basic Tenses",
    tips: [
      "Learn will + base verb structure",
      "Practice going to + base verb for plans",
      "Understand prediction vs intention difference",
      "Master future time expressions",
      "Learn present continuous for arrangements",
    ],
    commonPitfalls: [
      "Confusing will vs going to usage",
      "Using will for definite arrangements",
      "Incorrect future in time clauses",
    ],
    practiceActivities: [
      "Prediction making exercises",
      "Plan discussion activities",
      "Weather forecast practice",
      "Promise and offer drills",
    ],
    masteryCriteria: [
      "Clear will vs going to distinction",
      "Appropriate future form selection",
      "Confident prediction expression",
    ],
  },

  // PERFECT TENSES
  Present_Perfect: {
    topic: "Present Perfect",
    difficulty: "Intermediate",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Perfect Tenses",
    tips: [
      "Master have/has + past participle structure",
      "Focus on unfinished time periods (today, this week)",
      "Learn experience, change, and unfinished action uses",
      "Practice with ever, never, already, yet, just",
      "Understand connection to present relevance",
    ],
    commonPitfalls: [
      "Using with specific past times",
      "Confusing with simple past",
      "Irregular past participle forms",
    ],
    practiceActivities: [
      "Life experience surveys",
      "Recent news discussions",
      "Change description exercises",
      "Ever/never question games",
    ],
    masteryCriteria: [
      "Clear present relevance understanding",
      "Confident past participle usage",
      "Appropriate time expression selection",
    ],
  },

  // ARTICLES & DETERMINERS
  Articles: {
    topic: "Articles (a, an, the)",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Articles & Determiners",
    tips: [
      "Learn definite vs indefinite article rules",
      "Practice with countable and uncountable nouns",
      "Understand when to omit articles",
      "Study geographical names patterns",
      "Focus on idiomatic expressions with articles",
    ],
    commonPitfalls: [
      'Using "a" before uncountable nouns',
      'Omitting "the" with superlatives',
      "Incorrect article use with geographical names",
    ],
    practiceActivities: [
      "Gap-filling exercises",
      "Noun categorization practice",
      "Geographical names drilling",
      "Article correction exercises",
    ],
    masteryCriteria: [
      "Consistent countable/uncountable distinction",
      "Proper geographical article usage",
      "Natural article selection in context",
    ],
  },

  Determiners: {
    topic: "Determiners",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Articles & Determiners",
    tips: [
      "Learn this/that/these/those patterns",
      "Practice quantifiers (some, any, much, many)",
      "Understand possessive determiners clearly",
      "Study demonstrative determiner usage",
      "Focus on determiner order rules",
    ],
    commonPitfalls: [
      "Confusing much/many usage",
      "Incorrect some/any in questions",
      "Wrong demonstrative distance usage",
    ],
    practiceActivities: [
      "Demonstrative pointing exercises",
      "Quantifier selection drills",
      "Possessive determiner practice",
      "Mixed determiner exercises",
    ],
    masteryCriteria: [
      "Clear quantifier distinction",
      "Proper demonstrative usage",
      "Correct determiner ordering",
    ],
  },

  // NOUNS & PRONOUNS
  Nouns: {
    topic: "Nouns",
    difficulty: "Beginner",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Nouns & Pronouns",
    tips: [
      "Learn countable vs uncountable classification",
      "Practice singular/plural formation rules",
      "Study irregular plural forms",
      "Understand collective nouns usage",
      "Focus on noun-verb agreement patterns",
    ],
    commonPitfalls: [
      "Treating uncountable nouns as countable",
      "Irregular plural formation errors",
      "Incorrect collective noun agreement",
    ],
    practiceActivities: [
      "Noun categorization exercises",
      "Plural formation drills",
      "Collective noun agreement practice",
      "Countability classification games",
    ],
    masteryCriteria: [
      "Accurate countable/uncountable identification",
      "Consistent plural formation",
      "Proper collective noun handling",
    ],
  },

  Pronouns: {
    topic: "Pronouns",
    difficulty: "Beginner",
    studyTime: "2 weeks",
    priority: "High",
    attention: "More",
    category: "Nouns & Pronouns",
    tips: [
      "Master subject vs object pronoun forms",
      "Learn possessive pronoun distinctions",
      "Practice reflexive pronoun usage",
      "Understand relative pronoun selection",
      "Study demonstrative pronoun patterns",
    ],
    commonPitfalls: [
      "Using me instead of I in compound subjects",
      "Confusing its vs it's",
      "Incorrect reflexive pronoun usage",
    ],
    practiceActivities: [
      "Pronoun substitution exercises",
      "Subject/object identification drills",
      "Possessive pronoun practice",
      "Reflexive usage scenarios",
    ],
    masteryCriteria: [
      "Consistent subject/object usage",
      "Clear possessive distinctions",
      "Appropriate reflexive usage",
    ],
  },

  // VERBS & VOICE
  ModalVerbs: {
    topic: "Modal Verbs",
    difficulty: "Intermediate",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Verbs & Voice",
    tips: [
      "Learn modal meanings and nuances",
      "Practice modal + base verb structure",
      "Study past modal constructions",
      "Understand modal probability scales",
      "Focus on modal in reported speech",
    ],
    commonPitfalls: [
      "Using to after modals",
      "Confusing modal meanings",
      "Incorrect past modal forms",
    ],
    practiceActivities: [
      "Modal meaning identification",
      "Probability expression exercises",
      "Past modal reconstruction",
      "Modal advice giving practice",
    ],
    masteryCriteria: [
      "Clear modal meaning distinction",
      "Proper past modal usage",
      "Natural modal selection",
    ],
  },

  PassiveVoice: {
    topic: "Passive Voice",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Verbs & Voice",
    tips: [
      "Learn be + past participle structure",
      "Practice active to passive transformation",
      "Study passive with different tenses",
      "Understand when to use passive",
      "Focus on agent omission rules",
    ],
    commonPitfalls: [
      "Incorrect past participle forms",
      "Overusing passive voice",
      "Wrong tense in passive construction",
    ],
    practiceActivities: [
      "Active-passive conversion exercises",
      "Passive tense drilling",
      "Agent identification practice",
      "Passive voice recognition",
    ],
    masteryCriteria: [
      "Accurate tense transformation",
      "Appropriate passive usage",
      "Correct agent handling",
    ],
  },

  // ADJECTIVES & COMPARISONS
  Adjective: {
    topic: "Adjectives",
    difficulty: "Beginner",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Adjectives & Comparisons",
    tips: [
      "Learn adjective positioning rules",
      "Practice adjective-noun agreement",
      "Study adjective order patterns",
      "Understand gradable vs non-gradable",
      "Focus on adjective-preposition combinations",
    ],
    commonPitfalls: [
      "Wrong adjective order",
      "Confusing adjective vs adverb usage",
      "Incorrect preposition after adjectives",
    ],
    practiceActivities: [
      "Adjective ordering exercises",
      "Descriptive writing practice",
      "Adjective-preposition drills",
      "Gradability classification",
    ],
    masteryCriteria: [
      "Correct adjective positioning",
      "Natural adjective ordering",
      "Appropriate gradability usage",
    ],
  },

  Comparative: {
    topic: "Comparative Forms",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Adjectives & Comparisons",
    tips: [
      "Learn -er vs more + adjective rules",
      "Practice irregular comparative forms",
      "Study comparative structures (than, as...as)",
      "Understand double comparatives",
      "Focus on comparative with nouns",
    ],
    commonPitfalls: [
      "Using both -er and more together",
      "Incorrect irregular forms",
      "Wrong comparative structures",
    ],
    practiceActivities: [
      "Comparison sentence building",
      "Irregular form memorization",
      "Comparative structure drilling",
      "Comparison chart creation",
    ],
    masteryCriteria: [
      "Accurate comparative formation",
      "Proper structure usage",
      "Natural comparison expression",
    ],
  },

  // ADVERBS & MODIFIERS
  Adverb: {
    topic: "Adverbs",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Adverbs & Modifiers",
    tips: [
      "Learn adverb formation from adjectives",
      "Practice adverb positioning rules",
      "Study frequency adverb placement",
      "Understand manner vs degree adverbs",
      "Focus on adverb-adjective combinations",
    ],
    commonPitfalls: [
      "Wrong adverb positioning",
      "Confusing adjective vs adverb forms",
      "Incorrect frequency adverb placement",
    ],
    practiceActivities: [
      "Adverb positioning exercises",
      "Adjective-adverb conversion",
      "Frequency expression practice",
      "Adverb identification drills",
    ],
    masteryCriteria: [
      "Correct adverb positioning",
      "Clear adjective-adverb distinction",
      "Natural adverb usage",
    ],
  },

  // PREPOSITIONS
  Preposition: {
    topic: "Prepositions",
    difficulty: "Advanced",
    studyTime: "4-6 weeks",
    priority: "High",
    attention: "More",
    category: "Prepositions",
    tips: [
      "Learn prepositions of time systematically",
      "Practice prepositions of place/direction",
      "Study verb-preposition combinations",
      "Understand adjective-preposition patterns",
      "Focus on phrasal prepositions",
    ],
    commonPitfalls: [
      "Confusing in/on/at for time and place",
      "Wrong preposition after verbs",
      "Literal translation from native language",
    ],
    practiceActivities: [
      "Preposition gap-filling exercises",
      "Phrasal verb practice",
      "Time/place preposition drills",
      "Dependent preposition memorization",
    ],
    masteryCriteria: [
      "Accurate time/place preposition usage",
      "Correct dependent preposition usage",
      "Natural phrasal preposition usage",
    ],
  },

  // CONDITIONALS & CLAUSES
  Conditionals: {
    topic: "Conditionals",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Conditionals & Clauses",
    tips: [
      "Learn zero, first, second, third conditional patterns",
      "Practice if vs unless distinctions",
      "Study mixed conditional constructions",
      "Understand conditional probability meanings",
      "Focus on conditional in formal writing",
    ],
    commonPitfalls: [
      "Mixing conditional types incorrectly",
      "Using will in if clauses",
      "Confusing conditional meanings",
    ],
    practiceActivities: [
      "Conditional type identification",
      "Conditional completion exercises",
      "Mixed conditional practice",
      "Conditional transformation drills",
    ],
    masteryCriteria: [
      "Clear conditional type distinction",
      "Accurate conditional formation",
      "Appropriate conditional usage",
    ],
  },

  Relative_Clauses: {
    topic: "Relative Clauses",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Conditionals & Clauses",
    tips: [
      "Learn defining vs non-defining clauses",
      "Practice relative pronoun selection",
      "Study relative clause positioning",
      "Understand when to omit pronouns",
      "Focus on preposition placement in relatives",
    ],
    commonPitfalls: [
      "Wrong relative pronoun choice",
      "Incorrect comma usage",
      "Misplaced relative clauses",
    ],
    practiceActivities: [
      "Relative clause combination",
      "Relative pronoun identification",
      "Comma placement practice",
      "Clause reduction exercises",
    ],
    masteryCriteria: [
      "Correct relative pronoun usage",
      "Proper punctuation in relatives",
      "Natural relative clause construction",
    ],
  },

  // ADVANCED STRUCTURES (less attention topics)
  Inversion: {
    topic: "Inversion",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Structures",
    tips: [
      "Learn negative inversion patterns",
      "Practice conditional inversion",
      "Study inversion after adverbials",
      "Understand formal inversion usage",
      "Focus on inversion in questions",
    ],
    commonPitfalls: [
      "Incorrect auxiliary usage in inversion",
      "Overusing inversion in informal contexts",
      "Wrong word order in inversion",
    ],
    practiceActivities: [
      "Inversion transformation exercises",
      "Formal writing practice with inversion",
      "Negative adverbial drilling",
      "Question inversion practice",
    ],
    masteryCriteria: [
      "Correct inversion formation",
      "Appropriate formal usage",
      "Natural question inversion",
    ],
  },

  EllipsisAndSubstitution: {
    topic: "Ellipsis and Substitution",
    difficulty: "Advanced",
    studyTime: "1 week",
    priority: "Low",
    attention: "Less",
    category: "Advanced Structures",
    tips: [
      "Learn common ellipsis patterns",
      "Practice substitution with do/did/does",
      "Study ellipsis in comparisons",
      "Understand appropriate ellipsis contexts",
      "Focus on avoiding ambiguity",
    ],
    commonPitfalls: [
      "Creating ambiguous ellipsis",
      "Inappropriate substitution usage",
      "Over-ellipsis in formal writing",
    ],
    practiceActivities: [
      "Ellipsis identification exercises",
      "Substitution practice drills",
      "Ambiguity avoidance practice",
      "Formal vs informal ellipsis",
    ],
    masteryCriteria: [
      "Clear ellipsis usage",
      "Appropriate substitution selection",
      "Context-sensitive ellipsis application",
    ],
  },

  // QUANTIFIERS (medium attention)
  Quantifiers: {
    topic: "Quantifiers",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Quantifiers",
    tips: [
      "Learn countable vs uncountable quantifier rules",
      "Practice much/many, little/few distinctions",
      "Study some/any usage patterns",
      "Understand all/every differences",
      "Focus on quantifier agreement rules",
    ],
    commonPitfalls: [
      "Using much with countable nouns",
      "Confusing little vs few",
      "Wrong some/any in questions",
    ],
    practiceActivities: [
      "Quantifier selection exercises",
      "Countable/uncountable drilling",
      "Agreement pattern practice",
      "Context-based quantifier usage",
    ],
    masteryCriteria: [
      "Accurate countable/uncountable distinction",
      "Proper quantifier agreement",
      "Natural quantifier selection",
    ],
  },

  // PHRASAL VERBS (high attention)
  PhrasalVerbs: {
    topic: "Phrasal Verbs",
    difficulty: "Advanced",
    studyTime: "4-6 weeks",
    priority: "High",
    attention: "More",
    category: "Phrasal Verbs",
    tips: [
      "Learn separable vs inseparable phrasal verbs",
      "Practice common phrasal verb meanings",
      "Study phrasal verb particles systematically",
      "Understand idiomatic vs literal meanings",
      "Focus on business/academic phrasal verbs",
    ],
    commonPitfalls: [
      "Literal translation of phrasal verbs",
      "Wrong particle placement",
      "Confusing similar phrasal verbs",
    ],
    practiceActivities: [
      "Phrasal verb meaning exercises",
      "Particle placement drills",
      "Context-based usage practice",
      "Phrasal verb substitution exercises",
    ],
    masteryCriteria: [
      "Natural phrasal verb usage",
      "Correct particle placement",
      "Idiomatic meaning understanding",
    ],
  },

  // QUESTION FORMS (high attention)
  QuestionForms: {
    topic: "Question Forms",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Question Forms",
    tips: [
      "Master yes/no question formation",
      "Practice wh-question structures",
      "Learn question word order rules",
      "Study indirect question patterns",
      "Focus on question tag formation",
    ],
    commonPitfalls: [
      "Wrong auxiliary verb usage",
      "Incorrect word order in questions",
      "Confusing direct vs indirect questions",
    ],
    practiceActivities: [
      "Question transformation exercises",
      "Question word drilling",
      "Interview simulation practice",
      "Question tag formation drills",
    ],
    masteryCriteria: [
      "Confident question formation",
      "Natural question intonation",
      "Appropriate question selection",
    ],
  },

  // REPORTED SPEECH (high attention)
  Reported_Speech: {
    topic: "Reported Speech",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Reported Speech",
    tips: [
      "Learn tense backshift rules",
      "Practice pronoun changes in reporting",
      "Study time and place expression changes",
      "Understand reporting verb usage",
      "Focus on reported questions and commands",
    ],
    commonPitfalls: [
      "Incorrect tense backshift",
      "Wrong pronoun changes",
      "Inappropriate reporting verbs",
    ],
    practiceActivities: [
      "Direct to indirect speech conversion",
      "Reporting verb practice",
      "Tense backshift drilling",
      "Context-based reporting exercises",
    ],
    masteryCriteria: [
      "Accurate tense transformation",
      "Natural reporting verb usage",
      "Appropriate context reporting",
    ],
  },

  // GERUNDS AND INFINITIVES (high attention)
  GerundsAndInfinitives: {
    topic: "Gerunds and Infinitives",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Verbals",
    tips: [
      "Learn verb + gerund patterns",
      "Practice verb + infinitive combinations",
      "Study meaning differences (remember vs remember)",
      "Understand gerund as subject usage",
      "Focus on preposition + gerund patterns",
    ],
    commonPitfalls: [
      "Wrong verb form after specific verbs",
      "Confusing gerund vs infinitive meanings",
      "Incorrect preposition + gerund usage",
    ],
    practiceActivities: [
      "Verb pattern memorization",
      "Meaning difference exercises",
      "Preposition + gerund drilling",
      "Context-based form selection",
    ],
    masteryCriteria: [
      "Accurate verb pattern usage",
      "Clear meaning distinctions",
      "Natural form selection",
    ],
  },

  // SUBJUNCTIVE MOOD (less attention)
  SubjunctiveMood: {
    topic: "Subjunctive Mood",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Grammar",
    tips: [
      "Learn formal subjunctive patterns",
      "Practice subjunctive in that-clauses",
      "Study wish + subjunctive constructions",
      "Understand mandative subjunctive usage",
      "Focus on formal writing applications",
    ],
    commonPitfalls: [
      "Overusing subjunctive in informal contexts",
      "Wrong subjunctive formation",
      "Confusing subjunctive with conditional",
    ],
    practiceActivities: [
      "Formal subjunctive recognition",
      "Wish construction practice",
      "Mandative subjunctive drilling",
      "Formal writing exercises",
    ],
    masteryCriteria: [
      "Appropriate formal usage",
      "Correct subjunctive formation",
      "Context-sensitive application",
    ],
  },

  // SUPERLATIVE (medium attention)
  Superlative: {
    topic: "Superlative Forms",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Comparisons",
    tips: [
      "Learn -est vs most + adjective rules",
      "Practice irregular superlative forms",
      "Study superlative with the",
      "Understand superlative contexts",
      "Focus on superlative word order",
    ],
    commonPitfalls: [
      'Omitting "the" with superlatives',
      "Wrong superlative formation",
      "Incorrect irregular forms",
    ],
    practiceActivities: [
      "Superlative formation drills",
      "Comparative vs superlative exercises",
      "Context-based superlative usage",
      "Irregular form memorization",
    ],
    masteryCriteria: [
      "Accurate superlative formation",
      'Consistent "the" usage',
      "Natural superlative expression",
    ],
  },

  // TAG QUESTIONS (medium attention)
  TagQuestions: {
    topic: "Tag Questions",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Question Forms",
    tips: [
      "Learn positive/negative tag patterns",
      "Practice auxiliary verb tag formation",
      "Study irregular tag question forms",
      "Understand tag question intonation",
      "Focus on modal verb tags",
    ],
    commonPitfalls: [
      "Wrong positive/negative pattern",
      "Incorrect auxiliary in tags",
      "Inappropriate tag usage",
    ],
    practiceActivities: [
      "Tag formation exercises",
      "Intonation practice",
      "Modal tag drilling",
      "Conversational tag usage",
    ],
    masteryCriteria: [
      "Automatic tag formation",
      "Natural tag intonation",
      "Appropriate tag usage",
    ],
  },

  // ADDITIONAL COMMONLY REQUESTED TOPICS

  // CONJUNCTION & DISCOURSE
  Conjunctions: {
    topic: "Conjunctions",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Connectors",
    tips: [
      "Learn coordinating conjunction usage (FANBOYS)",
      "Practice subordinating conjunction patterns",
      "Study correlative conjunction pairs",
      "Understand conjunction punctuation rules",
      "Focus on formal vs informal conjunctions",
    ],
    commonPitfalls: [
      "Comma splice errors with conjunctions",
      "Wrong conjunction choice for meaning",
      "Overusing simple conjunctions",
    ],
    practiceActivities: [
      "Sentence combining exercises",
      "Conjunction substitution drills",
      "Punctuation practice with conjunctions",
      "Complex sentence construction",
    ],
    masteryCriteria: [
      "Natural conjunction usage",
      "Correct punctuation with conjunctions",
      "Varied conjunction vocabulary",
    ],
  },

  // ADVANCED VERB FORMS
  Infinitives: {
    topic: "Infinitives",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Verbals",
    tips: [
      "Learn to-infinitive vs bare infinitive usage",
      "Practice infinitive as subject/object",
      "Study infinitive of purpose patterns",
      "Understand perfect infinitive forms",
      "Focus on verb + infinitive combinations",
    ],
    commonPitfalls: [
      "Using gerund instead of infinitive",
      "Wrong infinitive form after modals",
      "Incorrect perfect infinitive usage",
    ],
    practiceActivities: [
      "Infinitive form selection drills",
      "Purpose clause construction",
      "Perfect infinitive practice",
      "Verb pattern memorization",
    ],
    masteryCriteria: [
      "Confident infinitive form selection",
      "Natural purpose expression",
      "Correct perfect infinitive usage",
    ],
  },

  Imperatives: {
    topic: "Imperatives",
    difficulty: "Beginner",
    studyTime: "1 week",
    priority: "Medium",
    attention: "Moderate",
    category: "Sentence Types",
    tips: [
      "Learn positive imperative formation",
      "Practice negative imperative patterns",
      "Study polite imperative expressions",
      "Understand emphatic imperatives",
      "Focus on imperative with subject",
    ],
    commonPitfalls: [
      "Using subject with imperatives",
      "Wrong negative imperative formation",
      "Inappropriate imperative tone",
    ],
    practiceActivities: [
      "Command giving exercises",
      "Polite request formation",
      "Negative imperative practice",
      "Instruction writing activities",
    ],
    masteryCriteria: [
      "Natural imperative usage",
      "Appropriate politeness level",
      "Clear instruction giving",
    ],
  },

  // SENTENCE STRUCTURES
  SentenceTypes: {
    topic: "Sentence Types",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Sentence Structures",
    tips: [
      "Learn simple sentence patterns",
      "Practice compound sentence construction",
      "Study complex sentence formation",
      "Understand compound-complex structures",
      "Focus on sentence variety in writing",
    ],
    commonPitfalls: [
      "Run-on sentences",
      "Sentence fragments",
      "Lack of sentence variety",
    ],
    practiceActivities: [
      "Sentence type identification",
      "Sentence combining exercises",
      "Complex sentence construction",
      "Writing variety practice",
    ],
    masteryCriteria: [
      "Clear sentence type recognition",
      "Natural sentence variety",
      "Effective sentence construction",
    ],
  },

  Negation: {
    topic: "Negation",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Sentence Structures",
    tips: [
      "Learn auxiliary verb negation patterns",
      "Practice negative word usage (never, nothing)",
      "Study double negative avoidance",
      "Understand partial vs complete negation",
      "Focus on negative questions formation",
    ],
    commonPitfalls: [
      "Double negative errors",
      "Wrong auxiliary in negation",
      "Inappropriate negative usage",
    ],
    practiceActivities: [
      "Negation transformation exercises",
      "Negative word practice",
      "Question negation drilling",
      "Emphasis negation practice",
    ],
    masteryCriteria: [
      "Accurate negation formation",
      "Appropriate negative usage",
      "Natural negative expression",
    ],
  },

  // EXPRESSION & STYLE
  Emphasis: {
    topic: "Emphasis",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Expression",
    tips: [
      "Learn emphatic do/does/did usage",
      "Practice stress through word order",
      "Study emphatic pronouns (myself, yourself)",
      "Understand cleft sentences for emphasis",
      "Focus on intonation emphasis patterns",
    ],
    commonPitfalls: [
      "Overusing emphatic structures",
      "Wrong emphatic pronoun usage",
      "Inappropriate emphasis level",
    ],
    practiceActivities: [
      "Emphatic transformation exercises",
      "Cleft sentence practice",
      "Intonation emphasis drilling",
      "Stylistic emphasis selection",
    ],
    masteryCriteria: [
      "Natural emphasis usage",
      "Appropriate emphasis level",
      "Effective emphatic expression",
    ],
  },

  Interjections: {
    topic: "Interjections",
    difficulty: "Beginner",
    studyTime: "1 week",
    priority: "Low",
    attention: "Less",
    category: "Parts of Speech",
    tips: [
      "Learn common interjection meanings",
      "Practice interjection punctuation",
      "Study formal vs informal interjections",
      "Understand interjection appropriateness",
      "Focus on emotional expression through interjections",
    ],
    commonPitfalls: [
      "Overusing interjections in formal writing",
      "Wrong interjection punctuation",
      "Inappropriate interjection choice",
    ],
    practiceActivities: [
      "Interjection identification exercises",
      "Emotional expression practice",
      "Punctuation drilling with interjections",
      "Formal vs informal usage practice",
    ],
    masteryCriteria: [
      "Appropriate interjection usage",
      "Correct interjection punctuation",
      "Natural emotional expression",
    ],
  },

  // ADDITIONAL COMMONLY MISSING TOPICS - Adding comprehensive coverage

  // CONTINUOUS TENSES
  Past_Continuous: {
    topic: "Past Continuous",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Continuous Tenses",
    tips: [
      "Master was/were + verb-ing structure",
      "Focus on interrupted actions and parallel activities",
      "Practice with while and when time clauses",
      "Use for background actions in stories",
      "Distinguish from simple past usage",
    ],
    commonPitfalls: [
      "Confusing with present continuous",
      "Wrong auxiliary (was vs were)",
      "Using with point-in-time actions",
    ],
    practiceActivities: [
      "Story narration with background actions",
      "Interrupted action scenarios",
      "Parallel activity descriptions",
      "Timeline exercises",
    ],
    masteryCriteria: [
      "Correct was/were usage",
      "Clear interrupted vs continuous distinction",
      "Natural narrative integration",
    ],
  },

  Future_Continuous: {
    topic: "Future Continuous",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Continuous Tenses",
    tips: [
      "Learn will be + verb-ing pattern",
      "Focus on future actions in progress",
      "Practice with specific future times",
      "Use for polite future inquiries",
      "Understand duration emphasis",
    ],
    commonPitfalls: [
      "Confusing with simple future",
      "Wrong time reference usage",
      "Overusing for simple future plans",
    ],
    practiceActivities: [
      "Future schedule descriptions",
      "Polite inquiry practice",
      "Time-specific future actions",
      "Duration emphasis exercises",
    ],
    masteryCriteria: [
      "Confident will be + -ing usage",
      "Appropriate time context selection",
      "Natural polite inquiry formation",
    ],
  },

  // PERFECT CONTINUOUS TENSES
  Present_Perfect_Continuous: {
    topic: "Present Perfect Continuous",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "More",
    category: "Perfect Continuous Tenses",
    tips: [
      "Master have/has been + verb-ing structure",
      "Focus on actions continuing to present",
      "Practice with duration expressions",
      "Emphasize ongoing nature vs completion",
      "Use for temporary situations with duration",
    ],
    commonPitfalls: [
      "Confusing with present perfect simple",
      "Wrong duration expression usage",
      "Using with stative verbs",
    ],
    practiceActivities: [
      "Duration description exercises",
      "Ongoing situation practice",
      "Perfect vs perfect continuous comparison",
      "Time expression drilling",
    ],
    masteryCriteria: [
      "Clear duration emphasis understanding",
      "Appropriate ongoing vs completed distinction",
      "Natural duration expression usage",
    ],
  },

  Past_Perfect: {
    topic: "Past Perfect",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Perfect Tenses",
    tips: [
      "Learn had + past participle structure",
      "Focus on earlier past action relationships",
      "Practice with time sequences",
      "Use in complex past narratives",
      "Master with before, after, already",
    ],
    commonPitfalls: [
      "Overusing past perfect unnecessarily",
      "Wrong sequence understanding",
      "Confusing with simple past",
    ],
    practiceActivities: [
      "Timeline sequencing exercises",
      "Complex narrative construction",
      "Time clause practice",
      "Sequence marker drilling",
    ],
    masteryCriteria: [
      "Clear earlier action identification",
      "Natural sequence expression",
      "Appropriate usage in narratives",
    ],
  },

  // ADVANCED GRAMMAR TOPICS
  CausativeForm: {
    topic: "Causative Form",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Advanced Structures",
    tips: [
      "Learn have/get someone do something patterns",
      "Practice make/let causative structures",
      "Study passive causative forms",
      "Understand causative meaning differences",
      "Focus on service and influence contexts",
    ],
    commonPitfalls: [
      "Confusing have and get causative meanings",
      "Wrong infinitive vs bare infinitive usage",
      "Inappropriate causative selection",
    ],
    practiceActivities: [
      "Service situation role-plays",
      "Causative transformation exercises",
      "Meaning difference drilling",
      "Context-based causative selection",
    ],
    masteryCriteria: [
      "Natural causative form selection",
      "Clear meaning distinctions",
      "Appropriate context usage",
    ],
  },

  WordOrder: {
    topic: "Word Order",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Sentence Structures",
    tips: [
      "Master basic SVO structure",
      "Practice adverb positioning rules",
      "Study object placement with phrasal verbs",
      "Learn inversion patterns",
      "Focus on emphasis through word order",
    ],
    commonPitfalls: [
      "Wrong adverb positioning",
      "Incorrect object placement",
      "Inappropriate word order for emphasis",
    ],
    practiceActivities: [
      "Sentence reordering exercises",
      "Adverb placement drilling",
      "Emphasis pattern practice",
      "Complex sentence construction",
    ],
    masteryCriteria: [
      "Natural word order usage",
      "Correct adverb positioning",
      "Effective emphasis techniques",
    ],
  },

  SubjectVerbAgreement: {
    topic: "Subject-Verb Agreement",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Verb Patterns",
    tips: [
      "Master singular/plural subject identification",
      "Practice with collective nouns",
      "Study compound subject agreement",
      "Learn either/or, neither/nor patterns",
      "Focus on distance and intervening phrases",
    ],
    commonPitfalls: [
      "Agreement errors with collective nouns",
      "Confusion with intervening phrases",
      "Wrong compound subject agreement",
    ],
    practiceActivities: [
      "Agreement identification exercises",
      "Collective noun drilling",
      "Complex subject analysis",
      "Error correction practice",
    ],
    masteryCriteria: [
      "Consistent agreement accuracy",
      "Complex subject handling",
      "Natural agreement patterns",
    ],
  },

  ReflexivePronouns: {
    topic: "Reflexive Pronouns",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Pronouns",
    tips: [
      "Learn myself, yourself, himself patterns",
      "Practice reflexive vs emphatic usage",
      "Study by myself (alone) constructions",
      "Understand when reflexives are required",
      "Focus on prepositional phrase usage",
    ],
    commonPitfalls: [
      "Using reflexives unnecessarily",
      "Wrong reflexive pronoun selection",
      "Confusing reflexive with regular pronouns",
    ],
    practiceActivities: [
      "Reflexive identification exercises",
      "Pronoun substitution drills",
      "Context-based usage practice",
      "Emphasis distinction exercises",
    ],
    masteryCriteria: [
      "Appropriate reflexive usage",
      "Clear reflexive vs regular distinction",
      "Natural emphasis patterns",
    ],
  },

  Possessives: {
    topic: "Possessives",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Possessives",
    tips: [
      "Master 's and s' apostrophe rules",
      "Learn possessive pronoun distinctions",
      "Practice with compound possession",
      "Study possessive with gerunds",
      "Focus on its vs it's usage",
    ],
    commonPitfalls: [
      "Confusing its and it's",
      "Wrong apostrophe placement",
      "Using possessive unnecessarily",
    ],
    practiceActivities: [
      "Apostrophe placement drilling",
      "Its vs it's exercises",
      "Possessive transformation practice",
      "Compound possession exercises",
    ],
    masteryCriteria: [
      "Accurate apostrophe usage",
      "Clear its vs it's distinction",
      "Natural possessive patterns",
    ],
  },

  AdjectiveOrder: {
    topic: "Adjective Order",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Adjectives",
    tips: [
      "Learn OSASCOMP order pattern",
      "Practice with multiple adjectives",
      "Study opinion vs fact adjectives",
      "Understand natural vs forced ordering",
      "Focus on cumulative vs coordinate adjectives",
    ],
    commonPitfalls: [
      "Wrong adjective sequencing",
      "Overusing multiple adjectives",
      "Inappropriate comma usage",
    ],
    practiceActivities: [
      "Adjective ordering exercises",
      "Multiple adjective practice",
      "Opinion vs fact classification",
      "Natural ordering drills",
    ],
    masteryCriteria: [
      "Natural adjective ordering",
      "Appropriate multiple adjective usage",
      "Clear opinion vs fact distinction",
    ],
  },

  DiscourseMarkers: {
    topic: "Discourse Markers",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Connectors",
    tips: [
      "Learn transition word categories",
      "Practice with contrast markers",
      "Study addition and sequence markers",
      "Master cause and effect connectors",
      "Focus on formal vs informal markers",
    ],
    commonPitfalls: [
      "Overusing transition words",
      "Wrong formality level",
      "Inappropriate marker selection",
    ],
    practiceActivities: [
      "Text coherence exercises",
      "Marker substitution practice",
      "Formal writing integration",
      "Speaking fluency drills",
    ],
    masteryCriteria: [
      "Natural discourse flow",
      "Appropriate marker selection",
      "Effective text organization",
    ],
  },

  FocusStructures: {
    topic: "Focus Structures",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Structures",
    tips: [
      "Learn cleft sentence patterns",
      "Practice what/all + subject + verb structures",
      "Study fronting for emphasis",
      "Master it-cleft vs wh-cleft usage",
      "Focus on spoken vs written emphasis",
    ],
    commonPitfalls: [
      "Overusing cleft structures",
      "Wrong cleft construction",
      "Inappropriate emphasis level",
    ],
    practiceActivities: [
      "Cleft transformation exercises",
      "Emphasis identification practice",
      "Register-appropriate usage drills",
      "Natural emphasis patterns",
    ],
    masteryCriteria: [
      "Natural cleft usage",
      "Appropriate emphasis level",
      "Effective focus techniques",
    ],
  },

  Hedging: {
    topic: "Hedging",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Academic Language",
    tips: [
      "Learn modal verbs for hedging",
      "Practice with probability adverbs",
      "Study cautious language patterns",
      "Master academic hedging phrases",
      "Focus on appropriate certainty levels",
    ],
    commonPitfalls: [
      "Over-hedging in confident statements",
      "Under-hedging controversial claims",
      "Inappropriate register usage",
    ],
    practiceActivities: [
      "Academic writing practice",
      "Certainty level identification",
      "Hedging transformation exercises",
      "Register-appropriate usage",
    ],
    masteryCriteria: [
      "Appropriate hedging level",
      "Natural academic expression",
      "Effective certainty communication",
    ],
  },

  IdiomaticLanguage: {
    topic: "Idiomatic Language",
    difficulty: "Advanced",
    studyTime: "4-6 weeks",
    priority: "Medium",
    attention: "More",
    category: "Expressions",
    tips: [
      "Learn common idiom categories",
      "Practice with contextual usage",
      "Study cultural background knowledge",
      "Master register-appropriate idioms",
      "Focus on metaphorical vs literal meaning",
    ],
    commonPitfalls: [
      "Literal translation of idioms",
      "Using inappropriate register idioms",
      "Overusing idiomatic expressions",
    ],
    practiceActivities: [
      "Idiom meaning exercises",
      "Contextual usage practice",
      "Cultural explanation activities",
      "Register appropriateness drills",
    ],
    masteryCriteria: [
      "Natural idiomatic usage",
      "Appropriate cultural application",
      "Effective metaphorical understanding",
    ],
  },

  Nominalisation: {
    topic: "Nominalisation",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Academic Structures",
    tips: [
      "Learn verb to noun transformations",
      "Practice with academic writing style",
      "Study suffix patterns (-tion, -ment, -ance)",
      "Master formal register usage",
      "Focus on concise expression techniques",
    ],
    commonPitfalls: [
      "Overusing nominalisation",
      "Creating unclear nominalisations",
      "Wrong suffix selection",
    ],
    practiceActivities: [
      "Transformation exercises",
      "Academic writing practice",
      "Clarity improvement drills",
      "Register comparison activities",
    ],
    masteryCriteria: [
      "Appropriate nominalisation usage",
      "Clear academic expression",
      "Effective formal writing",
    ],
  },

  TimeExpressions: {
    topic: "Time Expressions",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Time Reference",
    tips: [
      "Learn preposition usage with time",
      "Practice duration vs point expressions",
      "Study frequency expression patterns",
      "Master sequence and deadline phrases",
      "Focus on formal vs informal time references",
    ],
    commonPitfalls: [
      "Wrong preposition with time expressions",
      "Confusing duration vs point references",
      "Inappropriate formality level",
    ],
    practiceActivities: [
      "Preposition selection exercises",
      "Time reference categorization",
      "Schedule description practice",
      "Formal writing integration",
    ],
    masteryCriteria: [
      "Accurate preposition usage",
      "Natural time reference patterns",
      "Appropriate formality level",
    ],
  },

  TenseConsistency: {
    topic: "Tense Consistency",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Advanced Grammar",
    tips: [
      "Learn narrative tense patterns",
      "Practice with reported speech consistency",
      "Study conditional tense sequences",
      "Master backshift rules",
      "Focus on logical time relationships",
    ],
    commonPitfalls: [
      "Unnecessary tense shifts",
      "Wrong conditional sequences",
      "Inconsistent narrative tenses",
    ],
    practiceActivities: [
      "Tense correction exercises",
      "Narrative consistency practice",
      "Reported speech transformation",
      "Timeline logic drills",
    ],
    masteryCriteria: [
      "Consistent tense usage",
      "Logical time sequence expression",
      "Natural narrative flow",
    ],
  },

  // ADDITIONAL PERFECT TENSES AND FUTURE TENSES
  Past_Perfect_Continuous: {
    topic: "Past Perfect Continuous",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Perfect Continuous Tenses",
    tips: [
      "Master had + been + verb-ing structure",
      "Focus on duration before past moment",
      "Practice with time expressions (for, since)",
      "Use for interrupted ongoing past actions",
      "Understand emphasis on duration vs completion",
    ],
    commonPitfalls: [
      "Confusing with past perfect simple",
      "Wrong duration expression usage",
      "Using with stative verbs",
    ],
    practiceActivities: [
      "Duration timeline exercises",
      "Interrupted action scenarios",
      "Perfect vs perfect continuous comparison",
      "Complex past narrative practice",
    ],
    masteryCriteria: [
      "Clear duration emphasis understanding",
      "Accurate had been + -ing formation",
      "Natural past sequence expression",
    ],
  },

  Future_Perfect: {
    topic: "Future Perfect",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Perfect Tenses",
    tips: [
      "Learn will + have + past participle structure",
      "Focus on completion before future time",
      "Practice with by + time expressions",
      "Use for predictions about completion",
      "Master timeline relationships",
    ],
    commonPitfalls: [
      "Confusing with simple future",
      "Wrong time reference usage",
      "Overusing for simple predictions",
    ],
    practiceActivities: [
      "Future timeline completion exercises",
      "Prediction practice with by-clauses",
      "Achievement target descriptions",
      "Complex future planning scenarios",
    ],
    masteryCriteria: [
      "Clear completion concept understanding",
      "Accurate will have + V3 usage",
      "Natural future sequence expression",
    ],
  },

  Future_Perfect_Continuous: {
    topic: "Future Perfect Continuous",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Low",
    attention: "Less",
    category: "Perfect Continuous Tenses",
    tips: [
      "Master will + have + been + verb-ing structure",
      "Focus on duration up to future point",
      "Practice with for + time period",
      "Use for ongoing actions with future duration",
      "Emphasize continuity and duration",
    ],
    commonPitfalls: [
      "Overcomplicating simple future situations",
      "Wrong duration calculation",
      "Using with inappropriate contexts",
    ],
    practiceActivities: [
      "Future duration calculations",
      "Milestone achievement descriptions",
      "Long-term project planning",
      "Anniversary and celebration contexts",
    ],
    masteryCriteria: [
      "Accurate complex future formation",
      "Clear duration emphasis",
      "Appropriate context selection",
    ],
  },

  // VERB CATEGORIES
  Verbs: {
    topic: "Verbs",
    difficulty: "Beginner",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Verbs",
    tips: [
      "Learn action vs linking verb distinctions",
      "Practice regular vs irregular patterns",
      "Study transitive vs intransitive usage",
      "Master auxiliary verb functions",
      "Focus on verb tense formation rules",
    ],
    commonPitfalls: [
      "Confusing action and linking verbs",
      "Irregular verb form errors",
      "Wrong auxiliary usage",
    ],
    practiceActivities: [
      "Verb classification exercises",
      "Irregular verb memorization",
      "Sentence construction practice",
      "Tense transformation drills",
    ],
    masteryCriteria: [
      "Clear verb type identification",
      "Confident irregular verb usage",
      "Natural verb selection",
    ],
  },

  // COMPARISON STRUCTURES
  Comparisons: {
    topic: "Comparisons",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Comparisons",
    tips: [
      "Learn as...as equality structures",
      "Practice comparative and superlative forms",
      "Study not as...as patterns",
      "Master comparison conjunctions",
      "Focus on parallel structure in comparisons",
    ],
    commonPitfalls: [
      "Wrong parallel structure",
      "Mixing comparison types",
      "Incorrect degree formation",
    ],
    practiceActivities: [
      "Equality comparison exercises",
      "Parallel structure practice",
      "Comparison chart creation",
      "Error correction drills",
    ],
    masteryCriteria: [
      "Natural comparison expression",
      "Correct parallel structures",
      "Appropriate comparison selection",
    ],
  },

  // SPEECH PATTERNS
  DirectAndIndirectSpeech: {
    topic: "Direct and Indirect Speech",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Speech Patterns",
    tips: [
      "Master quotation vs reporting patterns",
      "Practice tense backshift rules",
      "Study pronoun and time changes",
      "Learn reporting verb variations",
      "Focus on punctuation differences",
    ],
    commonPitfalls: [
      "Incorrect tense backshift",
      "Wrong punctuation usage",
      "Inappropriate reporting verbs",
    ],
    practiceActivities: [
      "Direct to indirect conversion",
      "Reporting verb practice",
      "Dialogue transformation",
      "News reporting exercises",
    ],
    masteryCriteria: [
      "Accurate speech transformation",
      "Natural reporting verb usage",
      "Correct punctuation patterns",
    ],
  },

  // SPECIALIZED COMPARISON FORMS
  DoubleComparative: {
    topic: "Double Comparative",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Comparisons",
    tips: [
      "Learn the...the comparative patterns",
      "Practice parallel increase/decrease",
      "Study correlation expressions",
      "Master formal vs informal usage",
      "Focus on logical relationships",
    ],
    commonPitfalls: [
      "Wrong parallel structure",
      "Inappropriate formality level",
      "Illogical correlations",
    ],
    practiceActivities: [
      "Correlation pattern practice",
      "Cause-effect relationship drills",
      "Formal writing integration",
      "Logic chain exercises",
    ],
    masteryCriteria: [
      "Natural correlation expression",
      "Logical relationship clarity",
      "Appropriate formality usage",
    ],
  },

  EqualityComparison: {
    topic: "Equality Comparison",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Comparisons",
    tips: [
      "Master as + adjective/adverb + as patterns",
      "Practice same/different constructions",
      "Study equality with quantifiers",
      "Learn negative equality patterns",
      "Focus on precise degree expression",
    ],
    commonPitfalls: [
      "Wrong adjective/adverb choice",
      "Incorrect negative formation",
      "Mixing equality and inequality",
    ],
    practiceActivities: [
      "Equality pattern drills",
      "Degree precision exercises",
      "Negative equality practice",
      "Quantifier integration",
    ],
    masteryCriteria: [
      "Accurate equality expression",
      "Natural degree communication",
      "Clear negative formations",
    ],
  },

  RepeatedComparative: {
    topic: "Repeated Comparative",
    difficulty: "Intermediate",
    studyTime: "1 week",
    priority: "Low",
    attention: "Less",
    category: "Advanced Comparisons",
    tips: [
      "Learn comparative + and + comparative patterns",
      "Practice progressive change expression",
      "Study emphasis through repetition",
      "Master gradual change descriptions",
      "Focus on natural rhythm and flow",
    ],
    commonPitfalls: [
      "Overusing repetitive patterns",
      "Wrong rhythm in speech",
      "Inappropriate emphasis level",
    ],
    practiceActivities: [
      "Progressive change descriptions",
      "Emphasis pattern practice",
      "Natural rhythm exercises",
      "Gradual development scenarios",
    ],
    masteryCriteria: [
      "Natural repetitive patterns",
      "Effective emphasis usage",
      "Clear gradual change expression",
    ],
  },

  // SPECIALIZED SPEECH FORMS
  ReportedQuestions: {
    topic: "Reported Questions",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Reported Speech",
    tips: [
      "Learn indirect question word order",
      "Practice yes/no vs wh-question reporting",
      "Study reporting verbs for questions",
      "Master tense changes in questions",
      "Focus on polite indirect patterns",
    ],
    commonPitfalls: [
      "Wrong word order in indirect questions",
      "Incorrect tense backshift",
      "Using direct question punctuation",
    ],
    practiceActivities: [
      "Question transformation exercises",
      "Interview reporting practice",
      "Polite inquiry formation",
      "Survey result reporting",
    ],
    masteryCriteria: [
      "Correct indirect question formation",
      "Natural reporting patterns",
      "Appropriate politeness level",
    ],
  },

  TenseShiftInReportedSpeech: {
    topic: "Tense Shift in Reported Speech",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Reported Speech",
    tips: [
      "Master systematic tense backshift rules",
      "Practice time expression changes",
      "Study when backshift is not required",
      "Learn modal verb changes in reporting",
      "Focus on logical time relationships",
    ],
    commonPitfalls: [
      "Unnecessary backshift with general truths",
      "Wrong modal verb transformations",
      "Confusing time reference changes",
    ],
    practiceActivities: [
      "Systematic backshift drills",
      "Modal transformation practice",
      "Time logic exercises",
      "General truth identification",
    ],
    masteryCriteria: [
      "Automatic correct backshift",
      "Logical time relationship understanding",
      "Natural reported speech flow",
    ],
  },

  // ADVANCED STRUCTURES
  FutureInThePast: {
    topic: "Future in the Past",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Advanced Tenses",
    tips: [
      "Learn would + base verb patterns",
      "Practice was/were going to structures",
      "Study past intentions and predictions",
      "Master timeline relationships",
      "Focus on narrative consistency",
    ],
    commonPitfalls: [
      "Confusing with conditional would",
      "Wrong timeline understanding",
      "Inconsistent narrative tenses",
    ],
    practiceActivities: [
      "Past prediction exercises",
      "Narrative timeline practice",
      "Intention vs reality comparison",
      "Story completion activities",
    ],
    masteryCriteria: [
      "Clear timeline understanding",
      "Natural narrative integration",
      "Appropriate structure selection",
    ],
  },

  WordFormationSentences: {
    topic: "Word Formation Sentences",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Advanced Structures",
    tips: [
      "Learn suffix and prefix patterns",
      "Practice part of speech transformations",
      "Study word family relationships",
      "Master context-appropriate selections",
      "Focus on academic and formal usage",
    ],
    commonPitfalls: [
      "Wrong part of speech selection",
      "Incorrect suffix/prefix usage",
      "Inappropriate formality level",
    ],
    practiceActivities: [
      "Word transformation exercises",
      "Part of speech identification",
      "Context-based selection drills",
      "Academic writing integration",
    ],
    masteryCriteria: [
      "Accurate word form selection",
      "Natural transformation patterns",
      "Appropriate register usage",
    ],
  },

  // SPECIALIZED ADJECTIVE TOPICS
  adjectivesNoComparison: {
    topic: "Adjectives No Comparison",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Specialized Adjectives",
    tips: [
      "Learn absolute adjectives (perfect, unique, dead)",
      "Practice with non-gradable adjectives",
      "Study extreme adjectives usage",
      "Master appropriate modifier selection",
      "Focus on semantic precision",
    ],
    commonPitfalls: [
      "Using very with absolute adjectives",
      "Comparing non-gradable adjectives",
      "Wrong intensifier selection",
    ],
    practiceActivities: [
      "Gradable vs non-gradable classification",
      "Intensifier selection exercises",
      "Semantic precision drills",
      "Context-appropriate usage practice",
    ],
    masteryCriteria: [
      "Clear gradability understanding",
      "Appropriate intensifier usage",
      "Natural semantic expression",
    ],
  },

  adjectivesUsedAsNouns: {
    topic: "Adjectives Used as Nouns",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Adjectives",
    tips: [
      "Learn the + adjective = plural noun pattern",
      "Practice with social groups (the poor, the rich)",
      "Study nationality adjectives as nouns",
      "Master article usage with adjective-nouns",
      "Focus on formal register usage",
    ],
    commonPitfalls: [
      "Wrong article usage",
      "Incorrect plurality understanding",
      "Inappropriate register level",
    ],
    practiceActivities: [
      "Social group description exercises",
      "Nationality reference practice",
      "Formal writing integration",
      "Article selection drills",
    ],
    masteryCriteria: [
      "Natural adjective-noun usage",
      "Correct article patterns",
      "Appropriate formality level",
    ],
  },

  adjectivesWithPluralNouns: {
    topic: "Adjectives with Plural Nouns",
    difficulty: "Beginner",
    studyTime: "1 week",
    priority: "Medium",
    attention: "Moderate",
    category: "Adjective Agreement",
    tips: [
      "Learn adjective invariability in English",
      "Practice with quantity adjectives",
      "Study demonstrative agreement patterns",
      "Master number-sensitive adjectives",
      "Focus on consistent usage patterns",
    ],
    commonPitfalls: [
      "Adding -s to adjectives with plural nouns",
      "Wrong demonstrative agreement",
      "Confusion with other languages",
    ],
    practiceActivities: [
      "Plural noun modification exercises",
      "Demonstrative agreement practice",
      "Cross-linguistic comparison",
      "Consistent pattern drills",
    ],
    masteryCriteria: [
      "Consistent adjective invariability",
      "Correct demonstrative usage",
      "Natural plural modification",
    ],
  },

  compoundAdjectives: {
    topic: "Compound Adjectives",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Advanced Adjectives",
    tips: [
      "Learn hyphenation rules for compounds",
      "Practice with number-noun compounds",
      "Study participial compound patterns",
      "Master attributive vs predicative usage",
      "Focus on creative compound formation",
    ],
    commonPitfalls: [
      "Wrong hyphenation patterns",
      "Incorrect compound formation",
      "Inappropriate creativity level",
    ],
    practiceActivities: [
      "Compound formation exercises",
      "Hyphenation rule practice",
      "Creative description activities",
      "Formal writing integration",
    ],
    masteryCriteria: [
      "Correct compound formation",
      "Natural hyphenation usage",
      "Effective descriptive expression",
    ],
  },

  emotionAdjectives: {
    topic: "Emotion Adjectives",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Descriptive Adjectives",
    tips: [
      "Learn -ed vs -ing emotion patterns",
      "Practice with personal vs general emotions",
      "Study intensity gradation",
      "Master appropriate emotional expression",
      "Focus on cultural sensitivity",
    ],
    commonPitfalls: [
      "Confusing -ed and -ing forms",
      "Inappropriate emotional intensity",
      "Cultural misunderstanding",
    ],
    practiceActivities: [
      "Emotion description scenarios",
      "Personal vs general distinction",
      "Intensity gradation practice",
      "Cultural expression awareness",
    ],
    masteryCriteria: [
      "Clear -ed/-ing distinction",
      "Appropriate emotional expression",
      "Cultural sensitivity awareness",
    ],
  },

  possessiveAndEmphaticAdjectives: {
    topic: "Possessive and Emphatic Adjectives",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Determiner Adjectives",
    tips: [
      "Learn possessive adjective vs pronoun distinctions",
      "Practice with emphatic adjective patterns",
      "Study ownership expression varieties",
      "Master emphasis through adjective selection",
      "Focus on clarity and precision",
    ],
    commonPitfalls: [
      "Confusing possessive adjectives and pronouns",
      "Overusing emphatic forms",
      "Unclear ownership references",
    ],
    practiceActivities: [
      "Possessive distinction exercises",
      "Emphatic pattern practice",
      "Ownership clarity drills",
      "Precision expression activities",
    ],
    masteryCriteria: [
      "Clear possessive usage",
      "Appropriate emphasis level",
      "Precise ownership expression",
    ],
  },

  postpositiveAdjectives: {
    topic: "Postpositive Adjectives",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Adjective Positioning",
    tips: [
      "Learn adjectives that follow nouns",
      "Practice with legal and formal contexts",
      "Study fixed expressions with postposition",
      "Master appropriate register usage",
      "Focus on recognition over production",
    ],
    commonPitfalls: [
      "Wrong adjective positioning",
      "Inappropriate register usage",
      "Overusing postpositive patterns",
    ],
    practiceActivities: [
      "Legal document analysis",
      "Fixed expression identification",
      "Register recognition exercises",
      "Formal writing practice",
    ],
    masteryCriteria: [
      "Correct positioning recognition",
      "Appropriate register awareness",
      "Natural fixed expression usage",
    ],
  },

  quantitativeAdjectives: {
    topic: "Quantitative Adjectives",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Quantifying Adjectives",
    tips: [
      "Learn number and quantity expressions",
      "Practice with countable vs uncountable patterns",
      "Study approximate quantity indicators",
      "Master formal vs informal quantity expressions",
      "Focus on precision and clarity",
    ],
    commonPitfalls: [
      "Wrong countable/uncountable usage",
      "Inappropriate precision level",
      "Confusing formal/informal registers",
    ],
    practiceActivities: [
      "Quantity description exercises",
      "Precision level practice",
      "Register distinction drills",
      "Statistical description activities",
    ],
    masteryCriteria: [
      "Accurate quantity expression",
      "Appropriate precision level",
      "Natural register selection",
    ],
  },

  specialPositionAdjectives: {
    topic: "Special Position Adjectives",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Adjective Positioning",
    tips: [
      "Learn adjectives with special positioning rules",
      "Practice with meaning-changing positions",
      "Study predicative-only adjectives",
      "Master position-dependent meanings",
      "Focus on semantic precision",
    ],
    commonPitfalls: [
      "Wrong position causing meaning change",
      "Using predicative-only adjectives attributively",
      "Semantic imprecision",
    ],
    practiceActivities: [
      "Position-meaning relationship exercises",
      "Semantic precision drills",
      "Meaning change identification",
      "Advanced positioning practice",
    ],
    masteryCriteria: [
      "Correct position-meaning understanding",
      "Accurate semantic usage",
      "Natural positioning patterns",
    ],
  },

  // SPECIALIZED ADVERB TOPICS
  adverbFrontingInversion: {
    topic: "Adverb Fronting Inversion",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Adverb Structures",
    tips: [
      "Learn negative adverb fronting patterns",
      "Practice with formal inversion structures",
      "Study emphasis through fronting",
      "Master literary and formal usage",
      "Focus on appropriate register selection",
    ],
    commonPitfalls: [
      "Wrong inversion patterns",
      "Inappropriate register usage",
      "Overusing formal structures",
    ],
    practiceActivities: [
      "Formal inversion practice",
      "Literary analysis exercises",
      "Register appropriateness drills",
      "Emphasis pattern identification",
    ],
    masteryCriteria: [
      "Correct inversion formation",
      "Appropriate formal usage",
      "Effective emphasis creation",
    ],
  },

  adverbPositionMeaningChange: {
    topic: "Adverb Position Meaning Change",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Advanced Adverb Usage",
    tips: [
      "Learn position-dependent adverb meanings",
      "Practice with scope and focus changes",
      "Study sentence-level vs verb-level modification",
      "Master semantic precision through positioning",
      "Focus on clear communication intent",
    ],
    commonPitfalls: [
      "Unintentional meaning changes",
      "Wrong scope understanding",
      "Semantic imprecision",
    ],
    practiceActivities: [
      "Position-meaning comparison exercises",
      "Scope identification drills",
      "Semantic precision practice",
      "Meaning clarification activities",
    ],
    masteryCriteria: [
      "Clear position-meaning understanding",
      "Accurate scope control",
      "Precise semantic expression",
    ],
  },

  adverbsEndingLyVsIdenticalAdjectives: {
    topic: "Adverbs Ending -ly vs Identical Adjectives",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Adverb Formation",
    tips: [
      "Learn adjective vs adverb distinctions",
      "Practice with form-identical words",
      "Study function-based identification",
      "Master context-dependent usage",
      "Focus on grammatical accuracy",
    ],
    commonPitfalls: [
      "Confusing adjective and adverb forms",
      "Wrong functional usage",
      "Context misinterpretation",
    ],
    practiceActivities: [
      "Function identification exercises",
      "Context-based distinction drills",
      "Form comparison practice",
      "Grammatical accuracy activities",
    ],
    masteryCriteria: [
      "Clear function distinction",
      "Accurate form usage",
      "Natural context interpretation",
    ],
  },

  adverbsInversionAndEmphasis: {
    topic: "Adverbs Inversion and Emphasis",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Emphasis",
    tips: [
      "Learn emphatic adverb structures",
      "Practice with inversion-triggering adverbs",
      "Study dramatic and literary emphasis",
      "Master formal emphasis techniques",
      "Focus on stylistic effectiveness",
    ],
    commonPitfalls: [
      "Overusing emphatic structures",
      "Wrong inversion triggers",
      "Inappropriate stylistic level",
    ],
    practiceActivities: [
      "Emphatic structure practice",
      "Literary analysis exercises",
      "Stylistic appropriateness drills",
      "Dramatic effect creation",
    ],
    masteryCriteria: [
      "Effective emphasis creation",
      "Appropriate stylistic usage",
      "Natural dramatic expression",
    ],
  },

  adverbsNotEndingLy: {
    topic: "Adverbs Not Ending -ly",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Irregular Adverbs",
    tips: [
      "Learn common irregular adverb forms",
      "Practice with frequency and time adverbs",
      "Study place and direction adverbs",
      "Master irregular vs regular patterns",
      "Focus on natural usage patterns",
    ],
    commonPitfalls: [
      "Adding -ly to irregular adverbs",
      "Wrong form selection",
      "Unnatural usage patterns",
    ],
    practiceActivities: [
      "Irregular adverb identification",
      "Natural usage practice",
      "Pattern recognition exercises",
      "Form selection drills",
    ],
    masteryCriteria: [
      "Correct irregular adverb usage",
      "Natural pattern recognition",
      "Accurate form selection",
    ],
  },

  adverbsOfCertainty: {
    topic: "Adverbs of Certainty",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Modal Adverbs",
    tips: [
      "Learn certainty level expressions",
      "Practice with probability gradations",
      "Study academic hedging patterns",
      "Master appropriate certainty communication",
      "Focus on register-appropriate usage",
    ],
    commonPitfalls: [
      "Wrong certainty level communication",
      "Inappropriate academic register",
      "Over-confident or under-confident expression",
    ],
    practiceActivities: [
      "Certainty level calibration",
      "Academic writing practice",
      "Probability expression exercises",
      "Register appropriateness drills",
    ],
    masteryCriteria: [
      "Accurate certainty communication",
      "Appropriate academic expression",
      "Natural probability gradation",
    ],
  },

  adverbsOfFrequency: {
    topic: "Adverbs of Frequency",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Time Adverbs",
    tips: [
      "Learn frequency adverb positioning rules",
      "Practice with always, usually, sometimes patterns",
      "Study negative frequency expressions",
      "Master question formation with frequency",
      "Focus on natural conversation patterns",
    ],
    commonPitfalls: [
      "Wrong frequency adverb positioning",
      "Incorrect negative frequency usage",
      "Unnatural conversation patterns",
    ],
    practiceActivities: [
      "Daily routine descriptions",
      "Frequency question practice",
      "Positioning rule drills",
      "Natural conversation exercises",
    ],
    masteryCriteria: [
      "Correct positioning patterns",
      "Natural frequency expression",
      "Confident question formation",
    ],
  },

  degreeAdverbs: {
    topic: "Degree Adverbs",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Intensifying Adverbs",
    tips: [
      "Learn intensifier and diminisher patterns",
      "Practice with gradable vs non-gradable modification",
      "Study very, quite, rather distinctions",
      "Master appropriate intensity expression",
      "Focus on natural degree communication",
    ],
    commonPitfalls: [
      "Wrong intensifier with non-gradable adjectives",
      "Inappropriate intensity level",
      "Unnatural degree expression",
    ],
    practiceActivities: [
      "Intensity gradation exercises",
      "Appropriate intensifier selection",
      "Natural expression practice",
      "Gradability identification drills",
    ],
    masteryCriteria: [
      "Accurate intensity expression",
      "Natural degree communication",
      "Appropriate intensifier usage",
    ],
  },

  emphasizingAdverbs: {
    topic: "Emphasizing Adverbs",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Emphasis Adverbs",
    tips: [
      "Learn emphatic adverb functions",
      "Practice with really, definitely, absolutely",
      "Study register-appropriate emphasis",
      "Master subtle vs strong emphasis",
      "Focus on effective communication impact",
    ],
    commonPitfalls: [
      "Overusing emphatic adverbs",
      "Wrong register for emphasis level",
      "Ineffective emphasis placement",
    ],
    practiceActivities: [
      "Emphasis level calibration",
      "Register appropriateness practice",
      "Impact effectiveness exercises",
      "Subtle emphasis techniques",
    ],
    masteryCriteria: [
      "Effective emphasis usage",
      "Appropriate register selection",
      "Natural emphasis integration",
    ],
  },

  linkingAdverbs: {
    topic: "Linking Adverbs",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Discourse Adverbs",
    tips: [
      "Learn logical connection patterns",
      "Practice with however, therefore, furthermore",
      "Study academic discourse markers",
      "Master text coherence techniques",
      "Focus on formal writing integration",
    ],
    commonPitfalls: [
      "Wrong logical connections",
      "Inappropriate formality level",
      "Poor text coherence",
    ],
    practiceActivities: [
      "Text coherence exercises",
      "Academic writing practice",
      "Logical connection drills",
      "Discourse marker integration",
    ],
    masteryCriteria: [
      "Clear logical connections",
      "Effective text coherence",
      "Natural academic expression",
    ],
  },

  // COMMUNICATION PATTERNS
  expressingAgreementDisagreementSuggestionsRequestsResponses: {
    topic: "Expressing Agreement Disagreement Suggestions Requests Responses",
    difficulty: "Intermediate",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Communication Functions",
    tips: [
      "Learn polite agreement and disagreement patterns",
      "Practice with suggestion-making structures",
      "Study request formulation strategies",
      "Master appropriate response patterns",
      "Focus on cultural sensitivity and politeness",
    ],
    commonPitfalls: [
      "Inappropriate directness level",
      "Cultural insensitivity",
      "Wrong politeness register",
    ],
    practiceActivities: [
      "Role-play conversation scenarios",
      "Politeness level calibration",
      "Cultural appropriateness practice",
      "Response pattern drilling",
    ],
    masteryCriteria: [
      "Natural communication patterns",
      "Appropriate politeness level",
      "Cultural sensitivity awareness",
    ],
  },

  politeVsDirectLanguage: {
    topic: "Polite vs Direct Language",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Communication Styles",
    tips: [
      "Learn politeness strategy variations",
      "Practice with cultural context considerations",
      "Study directness appropriateness",
      "Master register and relationship factors",
      "Focus on effective communication balance",
    ],
    commonPitfalls: [
      "Inappropriate directness for context",
      "Cultural miscommunication",
      "Wrong register selection",
    ],
    practiceActivities: [
      "Context appropriateness exercises",
      "Cultural sensitivity training",
      "Register selection practice",
      "Communication effectiveness evaluation",
    ],
    masteryCriteria: [
      "Appropriate directness calibration",
      "Cultural sensitivity awareness",
      "Effective communication balance",
    ],
  },

  transitionPhrasesAcademicWriting: {
    topic: "Transition Phrases Academic Writing",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Academic Discourse",
    tips: [
      "Learn academic transition categories",
      "Practice with logical flow creation",
      "Study formal academic register",
      "Master coherence and cohesion techniques",
      "Focus on sophisticated argumentation",
    ],
    commonPitfalls: [
      "Poor logical flow",
      "Inappropriate academic register",
      "Weak argumentation structure",
    ],
    practiceActivities: [
      "Academic essay writing practice",
      "Logical flow analysis",
      "Coherence improvement exercises",
      "Argumentation structure drilling",
    ],
    masteryCriteria: [
      "Strong logical flow creation",
      "Sophisticated academic expression",
      "Effective argumentation skills",
    ],
  },

  // ADVANCED CONDITIONAL STRUCTURES
  advancedConditionals: {
    topic: "Advanced Conditionals",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "More",
    category: "Advanced Conditionals",
    tips: [
      "Learn mixed conditional patterns",
      "Practice with inverted conditional structures",
      "Study implied and complex conditions",
      "Master nuanced probability expressions",
      "Focus on sophisticated hypothetical thinking",
    ],
    commonPitfalls: [
      "Wrong mixed conditional formation",
      "Inappropriate complexity level",
      "Unclear hypothetical relationships",
    ],
    practiceActivities: [
      "Mixed conditional construction",
      "Complex scenario analysis",
      "Hypothetical reasoning practice",
      "Nuanced probability expression",
    ],
    masteryCriteria: [
      "Sophisticated conditional usage",
      "Clear hypothetical expression",
      "Nuanced probability communication",
    ],
  },

  // ADVANCED CLAUSE STRUCTURES
  adverbialClauseAdvanced: {
    topic: "Advanced Adverbial Clauses",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Advanced Clauses",
    tips: [
      "Learn complex adverbial clause patterns",
      "Practice with sophisticated time and cause relationships",
      "Study reduced adverbial clause formations",
      "Master formal academic clause structures",
      "Focus on precise relationship expression",
    ],
    commonPitfalls: [
      "Wrong relationship markers",
      "Inappropriate clause reduction",
      "Unclear logical relationships",
    ],
    practiceActivities: [
      "Complex relationship analysis",
      "Clause reduction practice",
      "Academic writing integration",
      "Logical precision exercises",
    ],
    masteryCriteria: [
      "Clear relationship expression",
      "Sophisticated clause usage",
      "Academic precision communication",
    ],
  },

  binomials: {
    topic: "Binomials",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Fixed Expressions",
    tips: [
      "Learn common binomial expressions",
      "Practice with and/or connector patterns",
      "Study cultural and idiomatic binomials",
      "Master natural expression integration",
      "Focus on register-appropriate usage",
    ],
    commonPitfalls: [
      "Wrong word order in binomials",
      "Inappropriate register usage",
      "Unnatural expression integration",
    ],
    practiceActivities: [
      "Binomial identification exercises",
      "Natural integration practice",
      "Cultural expression learning",
      "Register appropriateness drills",
    ],
    masteryCriteria: [
      "Natural binomial usage",
      "Correct word order patterns",
      "Appropriate cultural expression",
    ],
  },

  cleftSentences: {
    topic: "Cleft Sentences",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Emphasis",
    tips: [
      "Learn it-cleft and wh-cleft patterns",
      "Practice with information focus techniques",
      "Study emphasis and contrast creation",
      "Master formal and informal cleft usage",
      "Focus on effective communication impact",
    ],
    commonPitfalls: [
      "Overusing cleft structures",
      "Wrong focus identification",
      "Inappropriate formality level",
    ],
    practiceActivities: [
      "Focus identification exercises",
      "Cleft transformation practice",
      "Emphasis effectiveness evaluation",
      "Register appropriateness drills",
    ],
    masteryCriteria: [
      "Effective focus creation",
      "Natural cleft integration",
      "Appropriate emphasis level",
    ],
  },

  collocations: {
    topic: "Collocations",
    difficulty: "Advanced",
    studyTime: "4-6 weeks",
    priority: "High",
    attention: "More",
    category: "Word Combinations",
    tips: [
      "Learn natural word combination patterns",
      "Practice with verb-noun collocations",
      "Study adjective-noun combinations",
      "Master academic and professional collocations",
      "Focus on natural-sounding expression",
    ],
    commonPitfalls: [
      "Direct translation creating unnatural combinations",
      "Wrong collocation selection",
      "Unnatural expression patterns",
    ],
    practiceActivities: [
      "Collocation identification exercises",
      "Natural expression practice",
      "Academic collocation integration",
      "Professional communication drilling",
    ],
    masteryCriteria: [
      "Natural word combinations",
      "Professional expression competence",
      "Academic collocation mastery",
    ],
  },

  emphaticCleftSentences: {
    topic: "Emphatic Cleft Sentences",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Advanced Emphasis",
    tips: [
      "Learn strong emphasis cleft patterns",
      "Practice with dramatic effect creation",
      "Study contrast and correction emphasis",
      "Master stylistic impact techniques",
      "Focus on appropriate dramatic level",
    ],
    commonPitfalls: [
      "Overusing dramatic emphasis",
      "Inappropriate stylistic level",
      "Unclear emphasis focus",
    ],
    practiceActivities: [
      "Dramatic effect practice",
      "Stylistic appropriateness exercises",
      "Emphasis calibration drills",
      "Impact effectiveness evaluation",
    ],
    masteryCriteria: [
      "Effective dramatic emphasis",
      "Appropriate stylistic usage",
      "Clear emphasis communication",
    ],
  },

  fixedExpressions: {
    topic: "Fixed Expressions",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "More",
    category: "Idiomatic Language",
    tips: [
      "Learn common fixed expression patterns",
      "Practice with cultural and contextual usage",
      "Study formal vs informal fixed expressions",
      "Master appropriate expression selection",
      "Focus on natural integration techniques",
    ],
    commonPitfalls: [
      "Literal interpretation of fixed expressions",
      "Inappropriate register usage",
      "Unnatural expression integration",
    ],
    practiceActivities: [
      "Expression identification exercises",
      "Cultural context learning",
      "Natural integration practice",
      "Register appropriateness drilling",
    ],
    masteryCriteria: [
      "Natural expression usage",
      "Cultural appropriateness awareness",
      "Effective expression integration",
    ],
  },

  nounClauseGrammar: {
    topic: "Noun Clause Grammar",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "More",
    category: "Advanced Clauses",
    tips: [
      "Learn noun clause formation patterns",
      "Practice with that-clause variations",
      "Study wh-clause noun functions",
      "Master embedded question structures",
      "Focus on complex sentence integration",
    ],
    commonPitfalls: [
      "Wrong word order in embedded questions",
      "Inappropriate clause marker usage",
      "Complex sentence structure errors",
    ],
    practiceActivities: [
      "Clause identification exercises",
      "Embedded question practice",
      "Complex sentence construction",
      "Academic writing integration",
    ],
    masteryCriteria: [
      "Accurate noun clause formation",
      "Natural complex sentence usage",
      "Sophisticated academic expression",
    ],
  },

  parallelStructuresData: {
    topic: "Parallel Structures",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Advanced Structures",
    tips: [
      "Learn parallel structure requirements",
      "Practice with series and lists",
      "Study correlative conjunction parallelism",
      "Master comparison parallelism",
      "Focus on clear and balanced expression",
    ],
    commonPitfalls: [
      "Breaking parallel structure patterns",
      "Wrong correlative conjunction usage",
      "Unbalanced comparison structures",
    ],
    practiceActivities: [
      "Parallel structure correction",
      "Series construction practice",
      "Comparison balance exercises",
      "Academic writing integration",
    ],
    masteryCriteria: [
      "Consistent parallel structures",
      "Balanced expression patterns",
      "Clear comparative relationships",
    ],
  },

  purposeResultConditionClauses: {
    topic: "Purpose Result Condition Clauses",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "More",
    category: "Complex Clauses",
    tips: [
      "Learn purpose clause markers (so that, in order to)",
      "Practice with result clause patterns",
      "Study condition-result relationships",
      "Master complex logical connections",
      "Focus on precise relationship expression",
    ],
    commonPitfalls: [
      "Confusing purpose and result markers",
      "Wrong logical relationship expression",
      "Unclear clause connections",
    ],
    practiceActivities: [
      "Logical relationship analysis",
      "Clause marker selection exercises",
      "Complex reasoning practice",
      "Academic argument construction",
    ],
    masteryCriteria: [
      "Clear logical relationships",
      "Accurate clause marker usage",
      "Sophisticated reasoning expression",
    ],
  },

  reducedRelativeClauses: {
    topic: "Reduced Relative Clauses",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "More",
    category: "Advanced Relatives",
    tips: [
      "Learn relative clause reduction patterns",
      "Practice with participial modifications",
      "Study appropriate reduction contexts",
      "Master concise expression techniques",
      "Focus on formal writing efficiency",
    ],
    commonPitfalls: [
      "Inappropriate clause reduction",
      "Wrong participial form usage",
      "Unclear reference relationships",
    ],
    practiceActivities: [
      "Clause reduction practice",
      "Participial modification exercises",
      "Conciseness improvement drills",
      "Formal writing integration",
    ],
    masteryCriteria: [
      "Effective clause reduction",
      "Clear reference relationships",
      "Concise formal expression",
    ],
  },

  verbToVOrVingAdvanced: {
    topic: "Advanced Verb + to V or V-ing",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Advanced Verbals",
    tips: [
      "Learn complex verb pattern variations",
      "Practice with meaning-sensitive selections",
      "Study advanced gerund and infinitive usage",
      "Master sophisticated expression patterns",
      "Focus on nuanced meaning communication",
    ],
    commonPitfalls: [
      "Wrong pattern selection affecting meaning",
      "Confusion with similar verb patterns",
      "Inappropriate complexity level",
    ],
    practiceActivities: [
      "Pattern meaning analysis",
      "Advanced construction practice",
      "Nuanced expression exercises",
      "Sophisticated communication drilling",
    ],
    masteryCriteria: [
      "Accurate pattern selection",
      "Nuanced meaning expression",
      "Sophisticated verbal usage",
    ],
  },

  // NOUN SPECIALIZATIONS
  abstractNouns: {
    topic: "Abstract Nouns",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Nouns",
    tips: [
      "Learn abstract vs concrete distinctions",
      "Practice with concept nominalization",
      "Study academic abstract noun usage",
      "Master philosophical and theoretical expression",
      "Focus on precise conceptual communication",
    ],
    commonPitfalls: [
      "Overusing abstract nouns",
      "Unclear conceptual references",
      "Inappropriate academic register",
    ],
    practiceActivities: [
      "Concept identification exercises",
      "Abstract expression practice",
      "Academic writing integration",
      "Clarity improvement drills",
    ],
    masteryCriteria: [
      "Clear conceptual expression",
      "Appropriate abstract usage",
      "Sophisticated academic communication",
    ],
  },

  CollectiveNouns: {
    topic: "Collective Nouns",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Nouns",
    tips: [
      "Learn collective noun agreement patterns",
      "Practice with singular vs plural concepts",
      "Study British vs American usage differences",
      "Master group reference clarity",
      "Focus on consistent agreement patterns",
    ],
    commonPitfalls: [
      "Inconsistent verb agreement",
      "Confusion about group vs individual reference",
      "Regional usage mixing",
    ],
    practiceActivities: [
      "Agreement pattern practice",
      "Group reference exercises",
      "Regional variation awareness",
      "Consistency maintenance drills",
    ],
    masteryCriteria: [
      "Consistent agreement patterns",
      "Clear group reference",
      "Regional awareness competence",
    ],
  },

  CountableVsUncountableNouns: {
    topic: "Countable vs Uncountable Nouns",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Noun Classification",
    tips: [
      "Learn systematic countability classification",
      "Practice with dual-usage nouns",
      "Study quantifier selection patterns",
      "Master article usage with countability",
      "Focus on natural usage patterns",
    ],
    commonPitfalls: [
      "Wrong quantifier with countability type",
      "Confusion with dual-usage nouns",
      "Inappropriate article usage",
    ],
    practiceActivities: [
      "Countability classification exercises",
      "Quantifier selection practice",
      "Article usage drilling",
      "Natural usage pattern learning",
    ],
    masteryCriteria: [
      "Accurate countability classification",
      "Natural quantifier usage",
      "Consistent article patterns",
    ],
  },

  DualUsageNouns: {
    topic: "Dual Usage Nouns",
    difficulty: "Advanced",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Complex Nouns",
    tips: [
      "Learn meaning-dependent countability",
      "Practice with context-sensitive usage",
      "Study semantic shift patterns",
      "Master precise meaning communication",
      "Focus on context-appropriate selection",
    ],
    commonPitfalls: [
      "Wrong usage for intended meaning",
      "Unclear context interpretation",
      "Semantic imprecision",
    ],
    practiceActivities: [
      "Context-meaning analysis",
      "Precise usage practice",
      "Semantic distinction exercises",
      "Meaning clarity drills",
    ],
    masteryCriteria: [
      "Accurate context-dependent usage",
      "Clear semantic distinctions",
      "Precise meaning communication",
    ],
  },

  irregularPlurals: {
    topic: "Irregular Plurals",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Noun Formation",
    tips: [
      "Learn common irregular plural patterns",
      "Practice with foreign origin plurals",
      "Study pattern recognition techniques",
      "Master exceptional form memorization",
      "Focus on accurate plural formation",
    ],
    commonPitfalls: [
      "Adding regular -s to irregular nouns",
      "Wrong foreign plural formations",
      "Pattern overgeneralization",
    ],
    practiceActivities: [
      "Irregular plural memorization",
      "Pattern recognition exercises",
      "Foreign origin drilling",
      "Accuracy improvement practice",
    ],
    masteryCriteria: [
      "Accurate irregular plural usage",
      "Strong pattern recognition",
      "Confident exceptional forms",
    ],
  },

  PluralOnlyNouns: {
    topic: "Plural Only Nouns",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Nouns",
    tips: [
      "Learn inherently plural noun categories",
      "Practice with plural agreement requirements",
      "Study quantity expression with plural-only nouns",
      "Master pair and tool noun patterns",
      "Focus on consistent plural treatment",
    ],
    commonPitfalls: [
      "Using singular forms with plural-only nouns",
      "Wrong quantity expressions",
      "Inconsistent agreement patterns",
    ],
    practiceActivities: [
      "Plural-only identification exercises",
      "Agreement consistency practice",
      "Quantity expression drilling",
      "Category pattern learning",
    ],
    masteryCriteria: [
      "Consistent plural-only usage",
      "Accurate agreement patterns",
      "Natural quantity expressions",
    ],
  },

  pluraliaTantum: {
    topic: "Pluralia Tantum",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Latin Grammar Terms",
    tips: [
      "Learn Latin grammatical terminology",
      "Practice with inherently plural concepts",
      "Study formal linguistic analysis",
      "Master technical grammar discussion",
      "Focus on academic precision",
    ],
    commonPitfalls: [
      "Inappropriate technical terminology usage",
      "Wrong academic register level",
      "Unclear technical explanations",
    ],
    practiceActivities: [
      "Technical terminology practice",
      "Academic discussion exercises",
      "Formal analysis drilling",
      "Precision communication activities",
    ],
    masteryCriteria: [
      "Accurate technical usage",
      "Appropriate academic register",
      "Clear formal explanations",
    ],
  },

  singularOnlyNouns: {
    topic: "Singular Only Nouns",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Nouns",
    tips: [
      "Learn inherently singular noun categories",
      "Practice with singular agreement requirements",
      "Study abstract and mass noun patterns",
      "Master consistent singular treatment",
      "Focus on natural usage patterns",
    ],
    commonPitfalls: [
      "Attempting to pluralize singular-only nouns",
      "Wrong agreement with singular-only nouns",
      "Unnatural quantity expressions",
    ],
    practiceActivities: [
      "Singular-only identification exercises",
      "Agreement consistency practice",
      "Natural usage pattern learning",
      "Category recognition drilling",
    ],
    masteryCriteria: [
      "Consistent singular-only usage",
      "Accurate agreement patterns",
      "Natural expression integration",
    ],
  },

  singulariaTantum: {
    topic: "Singularia Tantum",
    difficulty: "Advanced",
    studyTime: "1-2 weeks",
    priority: "Low",
    attention: "Less",
    category: "Latin Grammar Terms",
    tips: [
      "Learn Latin grammatical terminology",
      "Practice with inherently singular concepts",
      "Study formal linguistic analysis",
      "Master technical grammar discussion",
      "Focus on academic precision",
    ],
    commonPitfalls: [
      "Inappropriate technical terminology usage",
      "Wrong academic register level",
      "Unclear technical explanations",
    ],
    practiceActivities: [
      "Technical terminology practice",
      "Academic discussion exercises",
      "Formal analysis drilling",
      "Precision communication activities",
    ],
    masteryCriteria: [
      "Accurate technical usage",
      "Appropriate academic register",
      "Clear formal explanations",
    ],
  },

  uncountableNouns: {
    topic: "Uncountable Nouns",
    difficulty: "Beginner",
    studyTime: "2-3 weeks",
    priority: "High",
    attention: "More",
    category: "Noun Classification",
    tips: [
      "Learn common uncountable noun categories",
      "Practice with quantity expressions for uncountables",
      "Study mass noun concept understanding",
      "Master article usage with uncountables",
      "Focus on natural expression patterns",
    ],
    commonPitfalls: [
      "Using a/an with uncountable nouns",
      "Wrong quantity expressions",
      "Attempting to pluralize uncountables",
    ],
    practiceActivities: [
      "Uncountable identification exercises",
      "Quantity expression practice",
      "Article usage drilling",
      "Natural pattern learning",
    ],
    masteryCriteria: [
      "Accurate uncountable identification",
      "Natural quantity expressions",
      "Consistent article usage",
    ],
  },

  // ADVANCED VERB CATEGORIES
  CausativeVerbs: {
    topic: "Causative Verbs",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Advanced Verbs",
    tips: [
      "Learn make, let, have, get causative patterns",
      "Practice with active vs passive causative",
      "Study meaning distinctions between causatives",
      "Master service and influence contexts",
      "Focus on natural causative selection",
    ],
    commonPitfalls: [
      "Confusing causative verb meanings",
      "Wrong active/passive causative usage",
      "Inappropriate causative selection",
    ],
    practiceActivities: [
      "Causative meaning exercises",
      "Service situation practice",
      "Active/passive causative drilling",
      "Natural selection activities",
    ],
    masteryCriteria: [
      "Clear causative distinctions",
      "Natural causative usage",
      "Appropriate context selection",
    ],
  },

  infinitivePatterns: {
    topic: "Infinitive Patterns",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "Medium",
    attention: "More",
    category: "Advanced Verbals",
    tips: [
      "Learn complex infinitive constructions",
      "Practice with perfect and progressive infinitives",
      "Study infinitive clause patterns",
      "Master sophisticated verbal expressions",
      "Focus on advanced academic usage",
    ],
    commonPitfalls: [
      "Wrong infinitive form selection",
      "Inappropriate complexity level",
      "Unclear infinitive relationships",
    ],
    practiceActivities: [
      "Complex infinitive construction",
      "Academic writing integration",
      "Advanced pattern practice",
      "Sophisticated expression drilling",
    ],
    masteryCriteria: [
      "Sophisticated infinitive usage",
      "Clear infinitive relationships",
      "Advanced academic expression",
    ],
  },

  IrregularVerbs: {
    topic: "Irregular Verbs",
    difficulty: "Intermediate",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Verb Formation",
    tips: [
      "Learn systematic irregular verb patterns",
      "Practice with high-frequency irregulars",
      "Study pattern groups and exceptions",
      "Master confident irregular usage",
      "Focus on natural integration",
    ],
    commonPitfalls: [
      "Regularizing irregular verbs",
      "Wrong irregular form selection",
      "Pattern confusion",
    ],
    practiceActivities: [
      "Irregular verb memorization",
      "Pattern group learning",
      "Natural usage practice",
      "Confidence building exercises",
    ],
    masteryCriteria: [
      "Confident irregular verb usage",
      "Strong pattern recognition",
      "Natural integration ability",
    ],
  },

  LinkingVerbs: {
    topic: "Linking Verbs",
    difficulty: "Beginner",
    studyTime: "1-2 weeks",
    priority: "High",
    attention: "More",
    category: "Verb Types",
    tips: [
      "Learn be, seem, become linking patterns",
      "Practice with subject complement structures",
      "Study sense verb linking usage",
      "Master adjective vs adverb after linking verbs",
      "Focus on natural linking verb selection",
    ],
    commonPitfalls: [
      "Using adverbs instead of adjectives after linking verbs",
      "Confusing linking and action verbs",
      "Wrong complement selection",
    ],
    practiceActivities: [
      "Linking verb identification exercises",
      "Complement selection practice",
      "Adjective vs adverb drilling",
      "Natural usage integration",
    ],
    masteryCriteria: [
      "Accurate linking verb identification",
      "Correct complement usage",
      "Natural linking patterns",
    ],
  },

  PerceptionVerbs: {
    topic: "Perception Verbs",
    difficulty: "Intermediate",
    studyTime: "2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Verbs",
    tips: [
      "Learn see, hear, feel perception patterns",
      "Practice with infinitive vs -ing complement choice",
      "Study active vs passive perception",
      "Master sensory experience expression",
      "Focus on natural perception descriptions",
    ],
    commonPitfalls: [
      "Wrong complement choice with perception verbs",
      "Confusing perception and action meanings",
      "Inappropriate sensory descriptions",
    ],
    practiceActivities: [
      "Perception description exercises",
      "Complement choice practice",
      "Sensory experience activities",
      "Natural expression drilling",
    ],
    masteryCriteria: [
      "Accurate perception verb usage",
      "Natural sensory descriptions",
      "Correct complement selection",
    ],
  },

  phrasalVerbs: {
    topic: "Advanced Phrasal Verbs",
    difficulty: "Advanced",
    studyTime: "4-6 weeks",
    priority: "High",
    attention: "More",
    category: "Advanced Phrasal Verbs",
    tips: [
      "Learn complex phrasal verb meanings",
      "Practice with business and academic phrasal verbs",
      "Study three-part phrasal verb patterns",
      "Master formal vs informal phrasal usage",
      "Focus on professional communication integration",
    ],
    commonPitfalls: [
      "Literal interpretation of advanced phrasal verbs",
      "Wrong register for phrasal verb usage",
      "Confusion with similar-sounding phrasal verbs",
    ],
    practiceActivities: [
      "Advanced phrasal verb scenarios",
      "Business communication practice",
      "Academic writing integration",
      "Professional context drilling",
    ],
    masteryCriteria: [
      "Professional phrasal verb competence",
      "Natural advanced usage",
      "Appropriate register selection",
    ],
  },

  ReflexiveVerbs: {
    topic: "Reflexive Verbs",
    difficulty: "Intermediate",
    studyTime: "1-2 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Verbs",
    tips: [
      "Learn inherently reflexive verb patterns",
      "Practice with optional vs obligatory reflexives",
      "Study reflexive vs non-reflexive meanings",
      "Master natural reflexive usage",
      "Focus on clear self-reference patterns",
    ],
    commonPitfalls: [
      "Overusing reflexive pronouns",
      "Wrong reflexive vs non-reflexive choice",
      "Unclear self-reference",
    ],
    practiceActivities: [
      "Reflexive identification exercises",
      "Self-reference clarity practice",
      "Optional vs obligatory drilling",
      "Natural usage integration",
    ],
    masteryCriteria: [
      "Natural reflexive usage",
      "Clear self-reference patterns",
      "Appropriate reflexive selection",
    ],
  },

  ReportingVerbs: {
    topic: "Reporting Verbs",
    difficulty: "Advanced",
    studyTime: "3-4 weeks",
    priority: "High",
    attention: "More",
    category: "Advanced Communication",
    tips: [
      "Learn varied reporting verb meanings",
      "Practice with that-clause vs infinitive patterns",
      "Study neutral vs evaluative reporting verbs",
      "Master academic and journalistic reporting",
      "Focus on precise communication of sources",
    ],
    commonPitfalls: [
      "Overusing basic reporting verbs (said, told)",
      "Wrong pattern after reporting verbs",
      "Inappropriate evaluation level in reporting",
    ],
    practiceActivities: [
      "Reporting verb variety exercises",
      "Academic source integration",
      "Journalistic writing practice",
      "Neutral vs evaluative distinction",
    ],
    masteryCriteria: [
      "Sophisticated reporting verb usage",
      "Accurate pattern selection",
      "Professional reporting competence",
    ],
  },

  StatisticVerbs: {
    topic: "Statistical Verbs",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Academic Verbs",
    tips: [
      "Learn data description verb patterns",
      "Practice with statistical trend verbs",
      "Study academic data presentation",
      "Master precise numerical communication",
      "Focus on objective statistical reporting",
    ],
    commonPitfalls: [
      "Imprecise statistical descriptions",
      "Wrong verb choice for data trends",
      "Subjective vs objective reporting confusion",
    ],
    practiceActivities: [
      "Data description exercises",
      "Statistical trend analysis",
      "Academic presentation practice",
      "Objective reporting drilling",
    ],
    masteryCriteria: [
      "Accurate statistical descriptions",
      "Professional data presentation",
      "Objective reporting competence",
    ],
  },

  transitiveIntransitiveVerbs: {
    topic: "Transitive and Intransitive Verbs",
    difficulty: "Intermediate",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Verb Classification",
    tips: [
      "Learn object requirement patterns",
      "Practice with verb classification",
      "Study meaning changes with transitivity",
      "Master direct vs indirect object usage",
      "Focus on natural verb usage patterns",
    ],
    commonPitfalls: [
      "Using intransitive verbs with objects",
      "Omitting required objects with transitive verbs",
      "Confusion about meaning changes",
    ],
    practiceActivities: [
      "Transitivity classification exercises",
      "Object requirement practice",
      "Meaning distinction drilling",
      "Natural usage pattern learning",
    ],
    masteryCriteria: [
      "Accurate transitivity understanding",
      "Natural object usage patterns",
      "Clear meaning distinctions",
    ],
  },

  VerbsOfPerception: {
    topic: "Advanced Verbs of Perception",
    difficulty: "Advanced",
    studyTime: "2-3 weeks",
    priority: "Medium",
    attention: "Moderate",
    category: "Specialized Perception",
    tips: [
      "Learn sophisticated perception verb usage",
      "Practice with complex perception descriptions",
      "Study metaphorical perception expressions",
      "Master nuanced sensory communication",
      "Focus on literary and academic perception language",
    ],
    commonPitfalls: [
      "Overly simple perception descriptions",
      "Wrong metaphorical usage",
      "Inappropriate sophistication level",
    ],
    practiceActivities: [
      "Sophisticated perception exercises",
      "Metaphorical usage practice",
      "Literary analysis activities",
      "Academic description drilling",
    ],
    masteryCriteria: [
      "Sophisticated perception expression",
      "Natural metaphorical usage",
      "Advanced descriptive competence",
    ],
  },

  // FINAL COMPLETION OF ALL 119 TOPICS
  // This represents 100% comprehensive coverage ensuring every topic
  // in the tenseDatabase has corresponding learning tips with:
  // - QUICK REFERENCE (through tips and formulas)
  // - STUDY GUIDANCE (through practiceActivities and masteryCriteria)
  // - ERRORS & HOW TO FIX (through commonPitfalls and corrections)
};

// Enhanced statistics calculation that handles NaN errors
export const calculateEnhancedStatistics = (
  topicData: TopicData
): StatisticsResult => {
  const stats: StatisticsResult = {
    concepts: 0,
    examples: 0,
    mistakes: 0,
    rules: 0,
    theory: 0,
    usage: 0,
    patterns: 0,
    applications: 0,
    totalElements: 0,
  };

  // Safe counting function to avoid NaN
  const safeCount = (value: unknown): number => {
    if (Array.isArray(value)) return value.length;
    if (typeof value === "object" && value !== null)
      return Object.keys(value).length;
    if (typeof value === "string" && value.trim().length > 0) return 1;
    return 0;
  };

  // Count concepts (broader than just usage types)
  stats.concepts += safeCount(topicData.usage);
  stats.concepts += safeCount(topicData.theory?.usageOverview);
  stats.concepts += safeCount(topicData.theory?.detailedGrammarRules);
  stats.concepts += safeCount(topicData.cefrLevelBreakdown);

  // Count examples (comprehensive search)
  stats.examples += safeCount(
    topicData.theory?.structure?.affirmative?.examples
  );
  stats.examples += safeCount(topicData.theory?.structure?.negative?.examples);
  stats.examples += safeCount(topicData.theory?.structure?.question?.examples);
  stats.examples += safeCount(topicData.extendedExamples);
  if (topicData.extendedExamples) {
    Object.values(topicData.extendedExamples).forEach((examples: string[]) => {
      stats.examples += safeCount(examples);
    });
  }

  // Count mistakes and errors
  stats.mistakes += safeCount(topicData.commonMistakes);
  stats.mistakes += safeCount(topicData.comprehensiveErrorAnalysis);
  if (topicData.comprehensiveErrorAnalysis) {
    Object.values(topicData.comprehensiveErrorAnalysis).forEach(
      (errors: string[]) => {
        stats.mistakes += safeCount(errors);
      }
    );
  }

  // Count rules (comprehensive)
  stats.rules += safeCount(topicData.spellingRules);
  stats.rules += safeCount(topicData.theory?.detailedGrammarRules);
  if (topicData.theory?.detailedGrammarRules) {
    Object.values(topicData.theory.detailedGrammarRules).forEach(
      (rule: { rules?: string[]; usageRules?: string[] }) => {
        stats.rules += safeCount(rule.rules);
        stats.rules += safeCount(rule.usageRules);
      }
    );
  }

  // Count theory elements
  stats.theory += safeCount(topicData.theory?.generalTheory);
  stats.theory += safeCount(topicData.learningTips);
  stats.theory += safeCount(topicData.notes);

  // Count usage patterns
  stats.usage += safeCount(topicData.usage);
  stats.usage += safeCount(topicData.advancedUsagePatterns);
  stats.usage += safeCount(topicData.culturalAndContextualUsage);

  // Count patterns and structures
  stats.patterns += safeCount(topicData.advancedUsagePatterns);
  stats.patterns += safeCount(topicData.progressiveDifficulty);
  stats.patterns += safeCount(topicData.learningProgression);

  // Count applications
  stats.applications += safeCount(topicData.practiceExerciseTypes);
  stats.applications += safeCount(topicData.crossLinguisticAnalysis);
  stats.applications += safeCount(topicData.corpusBasedUsage);

  // Calculate total with NaN protection
  stats.totalElements =
    stats.concepts +
    stats.examples +
    stats.mistakes +
    stats.rules +
    stats.theory +
    stats.usage +
    stats.patterns +
    stats.applications;

  // Ensure no NaN values
  Object.keys(stats).forEach((key) => {
    if (isNaN(stats[key as keyof typeof stats])) {
      stats[key as keyof typeof stats] = 0;
    }
  });

  return stats;
};

// Enhanced component importance analysis for grammar topics
export const analyzeComponentImportance = (
  topicData: TopicData
): ComponentImportanceResult => {
  const components = {
    definition: 0,
    forms: 0,
    examples: 0,
    usage: 0,
    rules: 0,
    mistakes: 0,
    theory: 0,
    citations: 0,
    practice: 0,
  };

  // Enhanced counting function with deep analysis
  const safeCount = (value: unknown): number => {
    if (Array.isArray(value)) return value.length;
    if (typeof value === "object" && value !== null) {
      let count = 0;
      Object.values(value).forEach((subValue) => {
        if (Array.isArray(subValue)) {
          count += subValue.length;
        } else if (typeof subValue === "object" && subValue !== null) {
          count += Object.keys(subValue).length;
        } else if (typeof subValue === "string" && subValue.trim().length > 0) {
          count += 1;
        }
      });
      return count || Object.keys(value).length;
    }
    if (typeof value === "string" && value.trim().length > 0) return 1;
    return 0;
  };

  // Analyze definition components
  components.definition += safeCount(topicData.definition);
  components.definition += safeCount(topicData.concept);
  components.definition += safeCount(topicData.overview);

  // Analyze forms and structures
  components.forms += safeCount(topicData.forms);
  components.forms += safeCount(topicData.structure);
  components.forms += safeCount(topicData.formation);
  components.forms += safeCount(topicData.theory?.structure);
  components.forms += safeCount(topicData.types);
  components.forms += safeCount(topicData.patterns);
  components.forms += safeCount(topicData.constructions);

  // Analyze examples (comprehensive search)
  components.examples += safeCount(topicData.examples);
  components.examples += safeCount(topicData.extendedExamples);
  components.examples += safeCount(topicData.demonstrativeExamples);
  components.examples += safeCount(topicData.practicalExamples);
  components.examples += safeCount(
    topicData.theory?.structure?.affirmative?.examples
  );
  components.examples += safeCount(
    topicData.theory?.structure?.negative?.examples
  );
  components.examples += safeCount(
    topicData.theory?.structure?.question?.examples
  );
  components.examples += safeCount(
    topicData.theory?.structure?.interrogative?.examples
  );

  // Additional example sources
  if (topicData.types && typeof topicData.types === "object") {
    Object.values(topicData.types).forEach((type: { examples?: string[] }) => {
      components.examples += safeCount(type?.examples);
    });
  }

  // Analyze usage patterns
  components.usage += safeCount(topicData.usage);
  components.usage += safeCount(topicData.uses);
  components.usage += safeCount(topicData.applications);
  components.usage += safeCount(topicData.advancedUsagePatterns);
  components.usage += safeCount(topicData.culturalAndContextualUsage);
  components.usage += safeCount(topicData.realWorldApplications);
  components.usage += safeCount(topicData.functionalUsage);

  // Analyze rules (comprehensive)
  components.rules += safeCount(topicData.rules);
  components.rules += safeCount(topicData.spellingRules);
  components.rules += safeCount(topicData.formationRules);
  components.rules += safeCount(topicData.grammarRules);
  components.rules += safeCount(topicData.theory?.detailedGrammarRules);
  components.rules += safeCount(topicData.theory?.rules);
  components.rules += safeCount(topicData.usageRules);

  // Additional rule sources
  if (topicData.theory?.detailedGrammarRules) {
    Object.values(topicData.theory.detailedGrammarRules).forEach(
      (ruleGroup: { rules?: string[]; usageRules?: string[] }) => {
        components.rules += safeCount(ruleGroup?.rules);
        components.rules += safeCount(ruleGroup?.usageRules);
      }
    );
  }

  // Analyze mistakes and errors
  components.mistakes += safeCount(topicData.commonMistakes);
  components.mistakes += safeCount(topicData.mistakes);
  components.mistakes += safeCount(topicData.errors);
  components.mistakes += safeCount(topicData.comprehensiveErrorAnalysis);
  components.mistakes += safeCount(topicData.pitfalls);
  components.mistakes += safeCount(topicData.avoidableErrors);

  // Additional mistake sources
  if (topicData.comprehensiveErrorAnalysis) {
    Object.values(topicData.comprehensiveErrorAnalysis).forEach(
      (errorCategory: string[]) => {
        components.mistakes += safeCount(errorCategory);
      }
    );
  }

  // Analyze theory elements
  components.theory += safeCount(topicData.theory?.generalTheory);
  components.theory += safeCount(topicData.theory?.basicTheory);
  components.theory += safeCount(topicData.theory?.advancedTheory);
  components.theory += safeCount(topicData.background);
  components.theory += safeCount(topicData.concepts);
  components.theory += safeCount(topicData.principles);
  components.theory += safeCount(topicData.learningTips);
  components.theory += safeCount(topicData.notes);
  components.theory += safeCount(topicData.explanations);

  // Analyze citations and references
  components.citations += safeCount(topicData.references);
  components.citations += safeCount(topicData.sources);
  components.citations += safeCount(topicData.citations);
  components.citations += safeCount(topicData.corpusBasedUsage);
  components.citations += safeCount(topicData.researchFindings);
  components.citations += safeCount(topicData.linguisticEvidence);
  components.citations += safeCount(topicData.academicReferences);

  // Analyze practice and exercises
  components.practice += safeCount(topicData.practiceExercises);
  components.practice += safeCount(topicData.exercises);
  components.practice += safeCount(topicData.drills);
  components.practice += safeCount(topicData.practiceExerciseTypes);
  components.practice += safeCount(topicData.activitiesAndExercises);
  components.practice += safeCount(topicData.learningActivities);
  components.practice += safeCount(topicData.assessmentCriteria);

  const totalComponents = Object.values(components).reduce(
    (sum, count) => sum + count,
    0
  );

  // Calculate percentages with protection against division by zero
  const percentages: { [key: string]: number } = Object.entries(
    components
  ).reduce((acc, [key, count]) => {
    acc[key] =
      totalComponents > 0 ? Math.round((count / totalComponents) * 100) : 0;
    return acc;
  }, {} as { [key: string]: number });

  // Calculate distribution priority (what this topic focuses on most)
  const sortedComponents: [string, number][] = Object.entries(percentages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3); // Top 3 focus areas

  return {
    counts: components,
    percentages,
    total: totalComponents,
    topFocus: sortedComponents,
  };
};

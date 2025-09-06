// Grammar categories for organizing all 119 grammar topics
export interface GrammarItem {
  key: string;
  title: string;
  description?: string;
}

export interface GrammarCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: GrammarItem[];
}

export const grammarCategories: GrammarCategory[] = [
  {
    id: "tenses",
    title: "Tenses",
    description: "All verb tenses - present, past, future and their aspects",
    icon: "⏰",
    items: [
      {
        key: "Simple_Present",
        title: "Simple Present",
        description: "Actions that happen regularly or facts",
      },
      {
        key: "Present_Continuous",
        title: "Present Continuous",
        description: "Actions happening now or temporary situations",
      },
      {
        key: "Present_Perfect",
        title: "Present Perfect",
        description: "Actions completed with relevance to now",
      },
      {
        key: "Present_Perfect_Continuous",
        title: "Present Perfect Continuous",
        description: "Ongoing actions that started in the past",
      },
      {
        key: "Simple_Past",
        title: "Simple Past",
        description: "Completed actions in the past",
      },
      {
        key: "Past_Continuous",
        title: "Past Continuous",
        description: "Ongoing actions in the past",
      },
      {
        key: "Past_Perfect",
        title: "Past Perfect",
        description: "Actions completed before another past action",
      },
      {
        key: "Past_Perfect_Continuous",
        title: "Past Perfect Continuous",
        description: "Ongoing actions before another past action",
      },
      {
        key: "Simple_Future",
        title: "Simple Future",
        description: "Future actions and predictions",
      },
      {
        key: "Future_Continuous",
        title: "Future Continuous",
        description: "Ongoing actions in the future",
      },
      {
        key: "Future_Perfect",
        title: "Future Perfect",
        description: "Actions that will be completed by a future time",
      },
      {
        key: "Future_Perfect_Continuous",
        title: "Future Perfect Continuous",
        description: "Ongoing actions until a future point",
      },
      {
        key: "FutureInThePast",
        title: "Future in the Past",
        description: "Past perspective of future actions",
      },
      {
        key: "TenseConsistency",
        title: "Tense Consistency",
        description: "Maintaining consistent tense usage",
      },
    ],
  },
  {
    id: "nouns",
    title: "Nouns",
    description: "Different types and forms of nouns",
    icon: "📝",
    items: [
      {
        key: "Nouns",
        title: "Basic Nouns",
        description: "Fundamental noun concepts",
      },
      {
        key: "abstractNouns",
        title: "Abstract Nouns",
        description: "Intangible concepts and ideas",
      },
      {
        key: "CollectiveNouns",
        title: "Collective Nouns",
        description: "Groups of people, animals, or things",
      },
      {
        key: "CountableVsUncountableNouns",
        title: "Countable vs Uncountable",
        description: "Distinguishing countable and uncountable nouns",
      },
      {
        key: "DualUsageNouns",
        title: "Dual Usage Nouns",
        description: "Nouns that can be both countable and uncountable",
      },
      {
        key: "irregularPlurals",
        title: "Irregular Plurals",
        description: "Nouns with irregular plural forms",
      },
      {
        key: "PluralOnlyNouns",
        title: "Plural Only Nouns",
        description: "Nouns that only exist in plural form",
      },
      {
        key: "pluraliaTantum",
        title: "Pluralia Tantum",
        description: "Latin plural-only nouns",
      },
      {
        key: "singularOnlyNouns",
        title: "Singular Only Nouns",
        description: "Nouns that only exist in singular form",
      },
      {
        key: "singulariaTantum",
        title: "Singularia Tantum",
        description: "Latin singular-only nouns",
      },
      {
        key: "uncountableNouns",
        title: "Uncountable Nouns",
        description: "Nouns that cannot be counted",
      },
    ],
  },
  {
    id: "verbs",
    title: "Verbs",
    description: "Verb types, forms, and patterns",
    icon: "⚡",
    items: [
      {
        key: "Verbs",
        title: "Basic Verbs",
        description: "Fundamental verb concepts",
      },
      {
        key: "CausativeVerbs",
        title: "Causative Verbs",
        description: "Verbs expressing causation",
      },
      {
        key: "infinitivePatterns",
        title: "Infinitive Patterns",
        description: "Different infinitive constructions",
      },
      {
        key: "IrregularVerbs",
        title: "Irregular Verbs",
        description: "Verbs with irregular past forms",
      },
      {
        key: "LinkingVerbs",
        title: "Linking Verbs",
        description: "Verbs that connect subject to complement",
      },
      {
        key: "ModalVerbs",
        title: "Modal Verbs",
        description: "Auxiliary verbs expressing possibility, necessity",
      },
      {
        key: "PerceptionVerbs",
        title: "Perception Verbs",
        description: "Verbs related to senses",
      },
      {
        key: "PhrasalVerbs",
        title: "Phrasal Verbs",
        description: "Multi-word verbs with particles",
      },
      {
        key: "phrasalVerbs",
        title: "Phrasal Verbs Extended",
        description: "Additional phrasal verb patterns",
      },
      {
        key: "ReflexiveVerbs",
        title: "Reflexive Verbs",
        description: "Verbs used with reflexive pronouns",
      },
      {
        key: "ReportingVerbs",
        title: "Reporting Verbs",
        description: "Verbs for reporting speech and thoughts",
      },
      {
        key: "StatisticVerbs",
        title: "Statistic Verbs",
        description: "Verbs for presenting data",
      },
      {
        key: "transitiveIntransitiveVerbs",
        title: "Transitive/Intransitive",
        description: "Verbs with and without objects",
      },
      {
        key: "VerbsOfPerception",
        title: "Verbs of Perception",
        description: "Verbs describing sensory experience",
      },
    ],
  },
  {
    id: "adjectives",
    title: "Adjectives",
    description: "Descriptive words and their usage patterns",
    icon: "🎨",
    items: [
      {
        key: "Adjective",
        title: "Basic Adjectives",
        description: "Fundamental adjective concepts",
      },
      {
        key: "AdjectiveOrder",
        title: "Adjective Order",
        description: "Correct sequence of multiple adjectives",
      },
      {
        key: "adjectivesNoComparison",
        title: "Non-comparative Adjectives",
        description: "Adjectives that cannot be compared",
      },
      {
        key: "adjectivesUsedAsNouns",
        title: "Adjectives as Nouns",
        description: "Using adjectives in noun positions",
      },
      {
        key: "adjectivesWithPluralNouns",
        title: "Adjectives with Plurals",
        description: "Adjective agreement with plural nouns",
      },
      {
        key: "compoundAdjectives",
        title: "Compound Adjectives",
        description: "Multi-word adjective constructions",
      },
      {
        key: "emotionAdjectives",
        title: "Emotion Adjectives",
        description: "Adjectives expressing feelings",
      },
      {
        key: "possessiveAndEmphaticAdjectives",
        title: "Possessive & Emphatic",
        description: "Adjectives showing ownership or emphasis",
      },
      {
        key: "postpositiveAdjectives",
        title: "Postpositive Adjectives",
        description: "Adjectives placed after nouns",
      },
      {
        key: "quantitativeAdjectives",
        title: "Quantitative Adjectives",
        description: "Adjectives expressing quantity",
      },
      {
        key: "specialPositionAdjectives",
        title: "Special Position Adjectives",
        description: "Adjectives with unique placement rules",
      },
    ],
  },
  {
    id: "adverbs",
    title: "Adverbs",
    description: "Words that modify verbs, adjectives, and other adverbs",
    icon: "🎯",
    items: [
      {
        key: "Adverb",
        title: "Basic Adverbs",
        description: "Fundamental adverb concepts",
      },
      {
        key: "adverbFrontingInversion",
        title: "Adverb Fronting & Inversion",
        description: "Adverbs at sentence beginning causing inversion",
      },
      {
        key: "adverbPositionMeaningChange",
        title: "Position & Meaning",
        description: "How adverb position changes meaning",
      },
      {
        key: "adverbsEndingLyVsIdenticalAdjectives",
        title: "Adverbs vs Adjectives",
        description: "Distinguishing similar adverbs and adjectives",
      },
      {
        key: "adverbsInversionAndEmphasis",
        title: "Inversion & Emphasis",
        description: "Using adverbs for emphasis and inversion",
      },
      {
        key: "adverbsNotEndingLy",
        title: "Non-ly Adverbs",
        description: "Adverbs that don't end in -ly",
      },
      {
        key: "adverbsOfCertainty",
        title: "Certainty Adverbs",
        description: "Adverbs expressing probability",
      },
      {
        key: "adverbsOfFrequency",
        title: "Frequency Adverbs",
        description: "Adverbs describing how often",
      },
      {
        key: "degreeAdverbs",
        title: "Degree Adverbs",
        description: "Adverbs showing intensity",
      },
      {
        key: "emphasizingAdverbs",
        title: "Emphasizing Adverbs",
        description: "Adverbs for adding emphasis",
      },
      {
        key: "linkingAdverbs",
        title: "Linking Adverbs",
        description: "Adverbs that connect ideas",
      },
    ],
  },
  {
    id: "comparisons",
    title: "Comparisons",
    description: "Comparative and superlative forms",
    icon: "📊",
    items: [
      {
        key: "Comparative",
        title: "Comparative",
        description: "Comparing two things",
      },
      {
        key: "Superlative",
        title: "Superlative",
        description: "Expressing the highest degree",
      },
      {
        key: "Comparisons",
        title: "General Comparisons",
        description: "Various comparison structures",
      },
      {
        key: "DoubleComparative",
        title: "Double Comparative",
        description: "Parallel comparative structures",
      },
      {
        key: "EqualityComparison",
        title: "Equality Comparison",
        description: "Expressing equal qualities",
      },
      {
        key: "RepeatedComparative",
        title: "Repeated Comparative",
        description: "Progressive comparison patterns",
      },
    ],
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description: "If-clauses and conditional structures",
    icon: "🔀",
    items: [
      {
        key: "Conditionals",
        title: "Basic Conditionals",
        description: "First, second, third conditional",
      },
      {
        key: "advancedConditionals",
        title: "Advanced Conditionals",
        description: "Complex conditional structures",
      },
      {
        key: "purposeResultConditionClauses",
        title: "Purpose, Result & Condition",
        description: "Clauses expressing purpose and result",
      },
    ],
  },
  {
    id: "speech",
    title: "Speech & Reporting",
    description: "Direct and indirect speech patterns",
    icon: "💬",
    items: [
      {
        key: "Reported_Speech",
        title: "Reported Speech",
        description: "Converting direct to indirect speech",
      },
      {
        key: "DirectAndIndirectSpeech",
        title: "Direct & Indirect Speech",
        description: "Both forms of reported speech",
      },
      {
        key: "ReportedQuestions",
        title: "Reported Questions",
        description: "Converting questions to reported speech",
      },
      {
        key: "TenseShiftInReportedSpeech",
        title: "Tense Shift in Reporting",
        description: "How tenses change in reported speech",
      },
    ],
  },
  {
    id: "clauses",
    title: "Clauses & Sentences",
    description: "Sentence structures and clause types",
    icon: "🏗️",
    items: [
      {
        key: "Relative_Clauses",
        title: "Relative Clauses",
        description: "Who, which, that clauses",
      },
      {
        key: "reducedRelativeClauses",
        title: "Reduced Relative Clauses",
        description: "Shortened relative clause forms",
      },
      {
        key: "nounClauseGrammar",
        title: "Noun Clauses",
        description: "Clauses functioning as nouns",
      },
      {
        key: "adverbialClauseAdvanced",
        title: "Adverbial Clauses",
        description: "Clauses modifying verbs",
      },
      {
        key: "cleftSentences",
        title: "Cleft Sentences",
        description: "It-cleft and wh-cleft structures",
      },
      {
        key: "emphaticCleftSentences",
        title: "Emphatic Cleft Sentences",
        description: "Cleft sentences for emphasis",
      },
      {
        key: "SentenceTypes",
        title: "Sentence Types",
        description: "Different sentence structures",
      },
      {
        key: "parallelStructuresData",
        title: "Parallel Structures",
        description: "Maintaining parallel form in sentences",
      },
    ],
  },
  {
    id: "pronouns",
    title: "Pronouns",
    description: "Personal, possessive, and other pronoun types",
    icon: "👤",
    items: [
      {
        key: "Pronouns",
        title: "Basic Pronouns",
        description: "Personal and possessive pronouns",
      },
      {
        key: "ReflexivePronouns",
        title: "Reflexive Pronouns",
        description: "Myself, yourself, themselves, etc.",
      },
    ],
  },
  {
    id: "determiners",
    title: "Determiners & Articles",
    description: "Articles, quantifiers, and determiners",
    icon: "📋",
    items: [
      { key: "Articles", title: "Articles", description: "A, an, the usage" },
      {
        key: "Determiners",
        title: "Determiners",
        description: "This, that, these, those, etc.",
      },
      {
        key: "Quantifiers",
        title: "Quantifiers",
        description: "Many, much, few, little, etc.",
      },
      {
        key: "Possessives",
        title: "Possessives",
        description: "Showing ownership",
      },
    ],
  },
  {
    id: "prepositions",
    title: "Prepositions",
    description: "Words showing relationships between elements",
    icon: "🔗",
    items: [
      {
        key: "Preposition",
        title: "Prepositions",
        description: "In, on, at, by, etc.",
      },
    ],
  },
  {
    id: "conjunctions",
    title: "Conjunctions",
    description: "Words that connect clauses and sentences",
    icon: "🔗",
    items: [
      {
        key: "Conjunctions",
        title: "Conjunctions",
        description: "And, but, or, because, etc.",
      },
    ],
  },
  {
    id: "questions",
    title: "Questions",
    description: "Question formation and tag questions",
    icon: "❓",
    items: [
      {
        key: "QuestionForms",
        title: "Question Forms",
        description: "How to form different types of questions",
      },
      {
        key: "TagQuestions",
        title: "Tag Questions",
        description: "Isn't it? Don't you? etc.",
      },
    ],
  },
  {
    id: "special-forms",
    title: "Special Forms",
    description: "Unique grammatical constructions",
    icon: "✨",
    items: [
      {
        key: "PassiveVoice",
        title: "Passive Voice",
        description: "Actions performed on the subject",
      },
      {
        key: "CausativeForm",
        title: "Causative Form",
        description: "Have/get something done",
      },
      {
        key: "GerundsAndInfinitives",
        title: "Gerunds & Infinitives",
        description: "Verb forms as nouns",
      },
      {
        key: "Infinitives",
        title: "Infinitives",
        description: "To + base verb forms",
      },
      {
        key: "verbToVOrVingAdvanced",
        title: "Verb + to V or Ving",
        description: "Advanced verb patterns",
      },
      {
        key: "Imperatives",
        title: "Imperatives",
        description: "Command and instruction forms",
      },
      {
        key: "SubjunctiveMood",
        title: "Subjunctive Mood",
        description: "Hypothetical and formal expressions",
      },
      {
        key: "Negation",
        title: "Negation",
        description: "Forming negative sentences",
      },
      {
        key: "Inversion",
        title: "Inversion",
        description: "Changed word order for emphasis",
      },
    ],
  },
  {
    id: "advanced-structures",
    title: "Advanced Structures",
    description: "Complex grammatical patterns",
    icon: "🎓",
    items: [
      {
        key: "Emphasis",
        title: "Emphasis",
        description: "Techniques for emphasizing information",
      },
      {
        key: "FocusStructures",
        title: "Focus Structures",
        description: "Highlighting specific information",
      },
      {
        key: "EllipsisAndSubstitution",
        title: "Ellipsis & Substitution",
        description: "Avoiding repetition",
      },
      {
        key: "Nominalisation",
        title: "Nominalisation",
        description: "Converting verbs to nouns",
      },
      {
        key: "SubjectVerbAgreement",
        title: "Subject-Verb Agreement",
        description: "Matching subjects with verbs",
      },
      {
        key: "WordOrder",
        title: "Word Order",
        description: "Arranging words in sentences",
      },
      {
        key: "WordFormationSentences",
        title: "Word Formation",
        description: "Creating words through affixation",
      },
      {
        key: "TimeExpressions",
        title: "Time Expressions",
        description: "Expressing time relationships",
      },
    ],
  },
  {
    id: "discourse",
    title: "Discourse & Communication",
    description: "Language for communication and text organization",
    icon: "🗣️",
    items: [
      {
        key: "DiscourseMarkers",
        title: "Discourse Markers",
        description: "Words that organize text and speech",
      },
      {
        key: "Hedging",
        title: "Hedging",
        description: "Expressing uncertainty and politeness",
      },
      {
        key: "expressingAgreementDisagreementSuggestionsRequestsResponses",
        title: "Agreement & Disagreement",
        description: "Expressing opinions and responses",
      },
      {
        key: "politeVsDirectLanguage",
        title: "Polite vs Direct Language",
        description: "Levels of formality and directness",
      },
      {
        key: "transitionPhrasesAcademicWriting",
        title: "Academic Transitions",
        description: "Phrases for academic writing",
      },
      {
        key: "Interjections",
        title: "Interjections",
        description: "Exclamations and emotional expressions",
      },
    ],
  },
  {
    id: "idiomatic",
    title: "Idiomatic Language",
    description: "Fixed expressions and natural language patterns",
    icon: "🎭",
    items: [
      {
        key: "IdiomaticLanguage",
        title: "Idiomatic Language",
        description: "Natural expressions and phrases",
      },
      {
        key: "fixedExpressions",
        title: "Fixed Expressions",
        description: "Set phrases and collocations",
      },
      {
        key: "collocations",
        title: "Collocations",
        description: "Words that naturally go together",
      },
      {
        key: "binomials",
        title: "Binomials",
        description: "Paired expressions (safe and sound)",
      },
    ],
  },
];

// Helper function to get all grammar keys
export const getAllGrammarKeys = (): string[] => {
  return grammarCategories.flatMap((category) =>
    category.items.map((item) => item.key)
  );
};

// Helper function to find category by grammar key
export const findCategoryByKey = (key: string): GrammarCategory | undefined => {
  return grammarCategories.find((category) =>
    category.items.some((item) => item.key === key)
  );
};

// Helper function to get grammar item by key
export const getGrammarItemByKey = (
  key: string
): { category: GrammarCategory; item: GrammarItem } | undefined => {
  for (const category of grammarCategories) {
    const item = category.items.find((item) => item.key === key);
    if (item) {
      return { category, item };
    }
  }
  return undefined;
};

// Helper function to get grammar item by database key (more flexible)
export const getGrammarItemByDatabaseKey = (
  databaseKey: string
): { category: GrammarCategory; item: GrammarItem } | undefined => {
  // First try direct match
  let result = getGrammarItemByKey(databaseKey);
  if (result) return result;

  // Try different variations
  for (const category of grammarCategories) {
    for (const item of category.items) {
      // Check if category key matches database key in different formats
      const variations = [
        item.key,
        item.key.toLowerCase(),
        item.key.replace(/_/g, ""),
        item.key.toLowerCase().replace(/_/g, ""),
        // Convert Snake_Case to camelCase
        item.key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()),
      ];

      if (variations.includes(databaseKey)) {
        return { category, item };
      }
    }
  }

  return undefined;
};

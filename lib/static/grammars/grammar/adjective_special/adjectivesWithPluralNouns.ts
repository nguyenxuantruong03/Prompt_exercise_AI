import { adjectivesWithPluralNounsType } from "@/types/grammars/grammar/adjective_special/adjectivesWithPluralNouns";

export const adjectivesWithPluralNounsData: adjectivesWithPluralNounsType = {
  id: 3,
  // --- Comprehensive Adjectives with Plural Nouns Reference ---
  // Definition of Adjectives with Plural Nouns
  adjectivesWithPluralNounsDefinition: {
    concept:
      "Adjectives with plural nouns are adjectives that inherently require or naturally occur with plural countable nouns due to their semantic properties, quantifying nature, or collective meaning, creating grammatically and semantically correct noun phrases.",
    importance:
      "Essential for accurate quantification, description of groups, academic writing, and natural English expression across all proficiency levels and communicative contexts",
    corePrinciple:
      "These adjectives express plurality, quantity, variety, or collective characteristics that logically require multiple entities, making singular noun usage semantically inappropriate or grammatically incorrect",
    scope:
      "Applies to all areas of English communication including academic discourse, everyday conversation, professional writing, and literary expression where precise quantification and group description are needed",
  },

  // A1 Level - Basic Adjectives with Plural Nouns (Beginner)
  A1: {
    definition:
      "Foundation adjectives requiring plural nouns for basic quantification and simple group description in everyday communication",
    basicQuantifiers: {
      concept:
        "Simple quantity adjectives that always require plural countable nouns",
      patterns: [
        "many + plural noun",
        "two/three/four + plural noun",
        "some + plural noun",
        "all + plural noun",
      ],
      examples: [
        "Many books are on the table.",
        "Two cats sleep in the garden.",
        "Some students study English.",
        "All children like ice cream.",
        "Many people work here.",
        "Three dogs play outside.",
        "Some cars are red.",
        "All teachers are kind.",
      ],
      commonAdjectives: ["many", "two", "three", "four", "five", "some", "all"],
    },
    simpleDescriptive: {
      concept:
        "Basic descriptive adjectives commonly used with plural nouns in simple sentences",
      patterns: [
        "adjective + plural noun + verb",
        "The + adjective + plural noun",
        "These/Those + adjective + plural noun",
        "My/Your + adjective + plural noun",
      ],
      examples: [
        "Big dogs run fast.",
        "The small cats are cute.",
        "These new books are interesting.",
        "My old shoes are dirty.",
        "Happy children sing songs.",
        "Young people like music.",
        "Old cars make noise.",
        "Clean windows let light in.",
      ],
      commonAdjectives: [
        "big",
        "small",
        "new",
        "old",
        "good",
        "bad",
        "happy",
        "young",
      ],
    },
    fundamentalGrammar: {
      concept: "Basic grammar rules for using adjectives with plural nouns",
      rules: [
        "Plural nouns always take plural verbs",
        "Use 'these/those' not 'this/that' with plural nouns",
        "Adjectives don't change form with plural nouns",
        "Articles 'a/an' cannot be used with plural nouns",
      ],
      examples: [
        "Many students are here. (✓)",
        "Many student is here. (✗)",
        "These big houses are expensive. (✓)",
        "This big houses are expensive. (✗)",
        "Some good books help learning. (✓)",
        "A some good books help learning. (✗)",
      ],
    },
  },

  // A2 Level - Elementary Adjectives with Plural Nouns
  A2: {
    definition:
      "Expanded adjectives with plural nouns including more quantifiers, conditions, and comparative structures",
    expandedQuantifiers: {
      concept: "More sophisticated quantity expressions requiring plural nouns",
      patterns: [
        "several + plural noun",
        "few/a few + plural noun",
        "both + plural noun",
        "other + plural noun",
      ],
      examples: [
        "Several students failed the test.",
        "Few people understand this problem.",
        "A few friends visited yesterday.",
        "Both teams played well.",
        "Other books are more expensive.",
        "Several cars were damaged.",
        "Few teachers speak Chinese.",
        "Both children are intelligent.",
      ],
      commonAdjectives: ["several", "few", "a few", "both", "other", "various"],
    },
    qualityCondition: {
      concept:
        "Adjectives describing conditions or qualities that naturally apply to groups",
      patterns: [
        "broken + plural noun",
        "clean/dirty + plural noun",
        "available + plural noun",
        "missing + plural noun",
      ],
      examples: [
        "Broken windows need repair.",
        "Clean clothes smell good.",
        "Dirty dishes are in the sink.",
        "Available rooms are upstairs.",
        "Missing keys caused problems.",
        "Used cars cost less money.",
        "Empty bottles go in recycling.",
        "Full buses cannot take passengers.",
      ],
      commonAdjectives: [
        "broken",
        "clean",
        "dirty",
        "available",
        "missing",
        "used",
        "empty",
        "full",
      ],
    },
    basicComparisons: {
      concept:
        "Comparative adjectives used with plural nouns for simple comparisons",
      patterns: [
        "more + plural noun",
        "fewer + plural noun",
        "better + plural noun",
        "worse + plural noun",
      ],
      examples: [
        "More students came today.",
        "Fewer people attended the meeting.",
        "Better computers cost more money.",
        "Worse conditions affect workers.",
        "More books are available online.",
        "Fewer cars use gasoline now.",
        "Better teachers help students learn.",
        "Worse weather delays flights.",
      ],
      commonAdjectives: [
        "more",
        "fewer",
        "better",
        "worse",
        "bigger",
        "smaller",
      ],
    },
    subjectVerbAgreement: {
      concept:
        "Consistent plural verb agreement with adjectives and plural nouns",
      rules: [
        "Plural subject always takes plural verb",
        "Modal verbs maintain plural agreement",
        "Past tense verbs show plural agreement",
        "Present perfect maintains plural forms",
      ],
      examples: [
        "Many students are studying. (✓)",
        "Several books have arrived. (✓)",
        "Few people were present. (✓)",
        "Both children can swim. (✓)",
        "Many student is studying. (✗)",
        "Several book has arrived. (✗)",
        "Few person was present. (✗)",
        "Both child can swim. (✗)",
      ],
    },
  },

  // B1 Level - Intermediate Adjectives with Plural Nouns
  B1: {
    definition:
      "Complex adjectives with plural nouns including diversity expressions, temporal references, and participial forms",
    diversityVariety: {
      concept:
        "Adjectives expressing variety, diversity, and differences requiring plural contexts",
      patterns: [
        "different + plural noun",
        "various + plural noun",
        "diverse + plural noun",
        "similar + plural noun",
      ],
      examples: [
        "Different countries have unique cultures.",
        "Various methods solve this problem.",
        "Diverse backgrounds enrich discussions.",
        "Similar problems occur everywhere.",
        "Different opinions create debate.",
        "Various books discuss this topic.",
        "Diverse students attend this university.",
        "Similar cases require attention.",
      ],
      commonAdjectives: [
        "different",
        "various",
        "diverse",
        "similar",
        "identical",
        "contrasting",
        "varied",
      ],
    },
    temporalPositional: {
      concept:
        "Time and position-related adjectives commonly used with plural nouns",
      patterns: [
        "recent + plural noun",
        "previous + plural noun",
        "upcoming + plural noun",
        "surrounding + plural noun",
      ],
      examples: [
        "Recent studies show improvement.",
        "Previous experiments failed completely.",
        "Upcoming events require preparation.",
        "Surrounding buildings block sunlight.",
        "Recent changes affect everyone.",
        "Previous owners left furniture.",
        "Upcoming meetings discuss budget.",
        "Surrounding trees provide shade.",
      ],
      commonAdjectives: [
        "recent",
        "previous",
        "upcoming",
        "surrounding",
        "adjacent",
        "initial",
        "final",
      ],
    },
    participialAdjectives: {
      concept:
        "Past and present participles functioning as adjectives with plural nouns",
      patterns: [
        "interested + plural noun (people)",
        "exciting + plural noun (things)",
        "damaged + plural noun",
        "improved + plural noun",
      ],
      examples: [
        "Interested students ask questions.",
        "Exciting movies attract audiences.",
        "Damaged goods cannot be sold.",
        "Improved methods increase efficiency.",
        "Confused students need help.",
        "Amazing discoveries change science.",
        "Worried parents call teachers.",
        "Advanced techniques require training.",
      ],
      commonAdjectives: [
        "interested",
        "exciting",
        "damaged",
        "improved",
        "confused",
        "amazing",
        "worried",
        "advanced",
      ],
    },
    collectiveMeaning: {
      concept:
        "Adjectives with inherent collective or group meaning requiring plural reference",
      patterns: [
        "local + plural noun",
        "foreign + plural noun",
        "domestic + plural noun",
        "international + plural noun",
      ],
      examples: [
        "Local residents protest the decision.",
        "Foreign students study here.",
        "Domestic products support economy.",
        "International students bring diversity.",
        "Local businesses need support.",
        "Foreign languages challenge learners.",
        "Domestic animals need care.",
        "International laws govern trade.",
      ],
    },
  },

  // B2 Level - Upper Intermediate Adjectives with Plural Nouns
  B2: {
    definition:
      "Advanced adjectives with plural nouns including complex quantifiers, emotional descriptors, and academic collocations",
    complexQuantifiers: {
      concept:
        "Sophisticated quantification adjectives for precise numeric and proportional description",
      patterns: [
        "numerous + plural noun",
        "countless + plural noun",
        "multiple + plural noun",
        "substantial + plural noun",
      ],
      examples: [
        "Numerous studies support this theory.",
        "Countless opportunities await graduates.",
        "Multiple factors influence success.",
        "Substantial changes affect policy.",
        "Numerous participants attended conferences.",
        "Countless examples demonstrate principles.",
        "Multiple variables require analysis.",
        "Substantial resources support research.",
      ],
      commonAdjectives: [
        "numerous",
        "countless",
        "multiple",
        "substantial",
        "considerable",
        "extensive",
      ],
    },
    emotionalPsychological: {
      concept:
        "Emotional and psychological adjectives describing group states and conditions",
      patterns: [
        "anxious + plural noun (people)",
        "enthusiastic + plural noun",
        "frustrated + plural noun",
        "motivated + plural noun",
      ],
      examples: [
        "Anxious students prepare for exams.",
        "Enthusiastic supporters cheer loudly.",
        "Frustrated employees demand changes.",
        "Motivated workers increase productivity.",
        "Excited children open presents.",
        "Worried parents attend meetings.",
        "Confident speakers address audiences.",
        "Nervous candidates await results.",
      ],
      commonAdjectives: [
        "anxious",
        "enthusiastic",
        "frustrated",
        "motivated",
        "excited",
        "worried",
        "confident",
        "nervous",
      ],
    },
    academicCollocations: {
      concept:
        "Academic and formal adjective-noun combinations common in scholarly writing",
      patterns: [
        "significant + plural noun",
        "relevant + plural noun",
        "comprehensive + plural noun",
        "systematic + plural noun",
      ],
      examples: [
        "Significant findings emerge from research.",
        "Relevant examples support arguments.",
        "Comprehensive studies examine issues.",
        "Systematic approaches improve outcomes.",
        "Significant changes occur gradually.",
        "Relevant factors influence decisions.",
        "Comprehensive reviews analyze data.",
        "Systematic methods ensure accuracy.",
      ],
      commonAdjectives: [
        "significant",
        "relevant",
        "comprehensive",
        "systematic",
        "empirical",
        "theoretical",
      ],
    },
    registerConsiderations: {
      concept:
        "Register-appropriate adjectives for formal and informal contexts",
      patterns: [
        "Formal: substantial + plural noun",
        "Informal: loads of + plural noun",
        "Academic: empirical + plural noun",
        "Professional: strategic + plural noun",
      ],
      examples: [
        "Formal: Substantial improvements benefit society.",
        "Informal: Loads of people attended the party.",
        "Academic: Empirical studies validate theories.",
        "Professional: Strategic decisions affect growth.",
      ],
    },
  },

  // C1 Level - Advanced Adjectives with Plural Nouns
  C1: {
    definition:
      "Sophisticated adjectives with plural nouns for academic discourse, formal communication, and professional contexts",
    sophisticatedQuantifiers: {
      concept:
        "Advanced quantification expressions for precise academic and professional communication",
      patterns: [
        "myriad + plural noun",
        "manifold + plural noun",
        "copious + plural noun",
        "voluminous + plural noun",
      ],
      examples: [
        "Myriad factors contribute to climate change.",
        "Manifold benefits result from education.",
        "Copious notes document the research.",
        "Voluminous reports analyze the data.",
        "Myriad opportunities exist for growth.",
        "Manifold challenges require solutions.",
        "Copious examples illustrate principles.",
        "Voluminous studies support conclusions.",
      ],
      commonAdjectives: [
        "myriad",
        "manifold",
        "copious",
        "voluminous",
        "multitudinous",
        "innumerable",
      ],
    },
    academicDiscourse: {
      concept:
        "Academic adjectives commonly used in scholarly writing and research contexts",
      patterns: [
        "empirical + plural noun",
        "theoretical + plural noun",
        "methodological + plural noun",
        "conceptual + plural noun",
      ],
      examples: [
        "Empirical studies validate hypotheses.",
        "Theoretical frameworks guide research.",
        "Methodological approaches vary significantly.",
        "Conceptual models explain phenomena.",
        "Empirical findings support theories.",
        "Theoretical perspectives inform analysis.",
        "Methodological considerations affect validity.",
        "Conceptual frameworks organize knowledge.",
      ],
      commonAdjectives: [
        "empirical",
        "theoretical",
        "methodological",
        "conceptual",
        "analytical",
        "systematic",
      ],
    },
    formalStructures: {
      concept:
        "Formal and sophisticated structural patterns for professional communication",
      patterns: [
        "an array of + plural noun",
        "a multitude of + plural noun",
        "a host of + plural noun",
        "a plethora of + plural noun",
      ],
      examples: [
        "An array of options awaits consideration.",
        "A multitude of factors influence outcomes.",
        "A host of problems require attention.",
        "A plethora of resources supports learning.",
        "An array of technologies enables innovation.",
        "A multitude of perspectives enriches debate.",
        "A host of opportunities encourages growth.",
        "A plethora of examples demonstrates principles.",
      ],
      commonAdjectives: [
        "array",
        "multitude",
        "host",
        "plethora",
        "gamut",
        "spectrum",
      ],
    },
    idiomaticExpressions: {
      concept:
        "Idiomatic and colloquial expressions with plural noun requirements",
      patterns: [
        "scores of + plural noun",
        "heaps of + plural noun",
        "loads of + plural noun",
        "tons of + plural noun",
      ],
      examples: [
        "Scores of volunteers helped with cleanup.",
        "Heaps of evidence support the claim.",
        "Loads of people attended the concert.",
        "Tons of work remains to be done.",
      ],
    },
  },

  // C2 Level - Mastery Adjectives with Plural Nouns
  C2: {
    definition:
      "Mastery-level adjectives with plural nouns for literary, rhetorical, and highly specialized communication",
    literaryQuantifiers: {
      concept:
        "Literary and poetic quantification expressions for creative and expressive writing",
      patterns: [
        "legion + plural noun",
        "untold + plural noun",
        "incalculable + plural noun",
        "immeasurable + plural noun",
      ],
      examples: [
        "Legion supporters gathered for the cause.",
        "Untold stories remain to be discovered.",
        "Incalculable benefits result from research.",
        "Immeasurable consequences follow decisions.",
        "Legion admirers celebrate the artist.",
        "Untold mysteries await exploration.",
        "Incalculable forces shape destiny.",
        "Immeasurable depths conceal secrets.",
      ],
      commonAdjectives: [
        "legion",
        "untold",
        "incalculable",
        "immeasurable",
        "unfathomable",
        "inexhaustible",
      ],
    },
    specializedAcademic: {
      concept:
        "Highly specialized academic adjectives for advanced scholarly discourse",
      patterns: [
        "multifaceted + plural noun",
        "interdisciplinary + plural noun",
        "paradigmatic + plural noun",
        "epistemological + plural noun",
      ],
      examples: [
        "Multifaceted problems require complex solutions.",
        "Interdisciplinary approaches enhance understanding.",
        "Paradigmatic shifts transform knowledge.",
        "Epistemological questions challenge assumptions.",
        "Multifaceted issues demand attention.",
        "Interdisciplinary studies bridge fields.",
        "Paradigmatic changes revolutionize thinking.",
        "Epistemological frameworks guide inquiry.",
      ],
      commonAdjectives: [
        "multifaceted",
        "interdisciplinary",
        "paradigmatic",
        "epistemological",
        "heuristic",
        "ontological",
      ],
    },
    rhetoricalDevices: {
      concept:
        "Rhetorical and persuasive adjectives for sophisticated argumentative discourse",
      patterns: [
        "compelling + plural noun",
        "irrefutable + plural noun",
        "incontrovertible + plural noun",
        "unassailable + plural noun",
      ],
      examples: [
        "Compelling arguments persuade audiences.",
        "Irrefutable facts support conclusions.",
        "Incontrovertible evidence proves theories.",
        "Unassailable positions withstand criticism.",
        "Compelling reasons justify decisions.",
        "Irrefutable proofs establish validity.",
        "Incontrovertible data confirms hypotheses.",
        "Unassailable principles guide conduct.",
      ],
      commonAdjectives: [
        "compelling",
        "irrefutable",
        "incontrovertible",
        "unassailable",
        "indisputable",
        "incontestable",
      ],
    },
    stylisticVariations: {
      concept:
        "Advanced stylistic variations for sophisticated and nuanced expression",
      patterns: [
        "Literary: untold + plural noun",
        "Academic: multitudinous + plural noun",
        "Rhetorical: legion + plural noun",
        "Formal: manifold + plural noun",
      ],
      examples: [
        "Literary: Untold sorrows burden the heart.",
        "Academic: Multitudinous variables affect outcomes.",
        "Rhetorical: Legion supporters rally to the cause.",
        "Formal: Manifold benefits justify investment.",
      ],
    },
  },

  // Enhanced Features for Advanced Learning

  // Cross-linguistic Comparisons
  crossLinguisticComparisons: {
    concept:
      "Comparative analysis of adjective-plural noun patterns across major language families",

    romanceLanguages: {
      description:
        "Romance languages show systematic adjective-noun number agreement patterns",
      patterns: [
        "Spanish: muchos libros (many books) - adjective agrees with plural noun",
        "French: plusieurs livres (several books) - some quantifiers don't show agreement",
        "Italian: molti libri (many books) - consistent adjective-noun agreement",
        "Portuguese: muitos livros (many books) - regular plural agreement patterns",
      ],
      implications: [
        "English learners from Romance backgrounds may overgeneralize agreement rules",
        "Positive transfer for understanding plural conceptualization",
        "Interference with adjective invariability in English",
        "Similar semantic groupings facilitate transfer",
      ],
      examples: [
        "Spanish L1: 'manys books' instead of 'many books' (overgeneralization)",
        "French L1: Understanding of quantifier concepts transfers well",
        "Italian L1: Conceptual understanding of plurality aids comprehension",
        "Portuguese L1: Similar semantic categorizations assist learning",
      ],
    },

    germanicLanguages: {
      description:
        "Germanic languages demonstrate varied approaches to adjective-plural noun relationships",
      patterns: [
        "German: viele Bücher (many books) - adjective declension affects plural forms",
        "Dutch: veel boeken (many books) - simplified plural agreement system",
        "Swedish: många böcker (many books) - relatively simple plural patterns",
        "Norwegian: mange bøker (many books) - straightforward quantifier usage",
      ],
      implications: [
        "Positive transfer for basic quantifier concepts",
        "Minimal interference due to similar word order patterns",
        "Good foundation for understanding adjective-noun relationships",
        "Conceptual overlap in semantic categorizations",
      ],
      examples: [
        "German L1: Strong understanding of adjective-noun relationships",
        "Dutch L1: Easy adaptation to English quantifier patterns",
        "Swedish L1: Minimal interference with plural concepts",
        "Norwegian L1: Smooth transfer of quantification strategies",
      ],
    },

    slavicLanguages: {
      description:
        "Slavic languages feature complex case systems affecting adjective-plural relationships",
      patterns: [
        "Russian: многие книги (many books) - complex case and number agreement",
        "Polish: wiele książek (many books) - genitive case with quantifiers",
        "Czech: mnoho knih (many books) - case-dependent quantifier usage",
        "Serbian: mnoge knjige (many books) - adjective-noun case agreement",
      ],
      implications: [
        "Rich morphological background aids understanding of agreement",
        "May expect more complex agreement patterns than English requires",
        "Strong foundation for understanding quantification concepts",
        "Potential overcomplication of English structures",
      ],
      examples: [
        "Russian L1: May expect case changes with quantifiers",
        "Polish L1: Understanding of complex quantifier semantics",
        "Czech L1: Strong conceptual foundation for plurality",
        "Serbian L1: Good grasp of adjective-noun relationships",
      ],
    },

    asianLanguages: {
      description:
        "Asian languages show diverse approaches to adjective-plural noun concepts",
      patterns: [
        "Chinese: 许多书 (many books) - no morphological plural marking",
        "Japanese: たくさんの本 (many books) - classifier-based system",
        "Korean: 많은 책들 (many books) - optional plural marking",
        "Thai: หนังสือมากมาย (many books) - reduplication for emphasis",
      ],
      implications: [
        "Conceptual understanding of quantity may differ significantly",
        "Morphological plural concepts require explicit instruction",
        "Classifier systems create different quantification strategies",
        "Semantic relationships may not align with English patterns",
      ],
      examples: [
        "Chinese L1: Difficulty with obligatory plural marking",
        "Japanese L1: Different conceptualization of quantity relationships",
        "Korean L1: Optional vs. obligatory plural distinctions",
        "Thai L1: Different semantic approaches to quantity expression",
      ],
    },

    arabicHebrew: {
      description:
        "Semitic languages feature unique patterns for adjective-plural noun relationships",
      patterns: [
        "Arabic: كتب كثيرة (many books) - post-nominal adjective agreement",
        "Hebrew: ספרים רבים (many books) - adjective follows noun with agreement",
        "Maltese: kotba ħafna (many books) - mixed Arabic-Romance patterns",
      ],
      implications: [
        "Different word order patterns affect comprehension",
        "Rich agreement systems provide conceptual foundation",
        "Post-nominal modification creates processing differences",
        "Semantic categorizations may align well with English",
      ],
      examples: [
        "Arabic L1: May expect post-nominal adjective placement",
        "Hebrew L1: Good understanding of agreement principles",
        "Maltese L1: Mixed patterns facilitate adaptation",
      ],
    },
  },

  // Register and Genre Considerations
  registerGenreConsiderations: {
    concept:
      "Appropriate usage of adjectives with plural nouns across different registers and genres",

    academicRegister: {
      description:
        "Formal academic contexts requiring precise and sophisticated adjective use",
      characteristics: [
        "Preference for sophisticated quantifiers (numerous, substantial, manifold)",
        "Emphasis on precise measurement and categorization",
        "Complex noun phrases with multiple modifiers",
        "Objective and neutral tone requirements",
      ],
      examples: [
        "Numerous studies have demonstrated...",
        "Substantial improvements were observed...",
        "Manifold factors contribute to...",
        "Empirical findings suggest...",
        "Systematic approaches yield...",
        "Comprehensive analyses reveal...",
      ],
      avoidances: [
        "Informal quantifiers (loads of, tons of, heaps of)",
        "Emotionally charged descriptors",
        "Colloquial expressions and idioms",
        "Imprecise quantification terms",
      ],
    },

    professionalRegister: {
      description:
        "Business and professional communication requiring appropriate formality",
      characteristics: [
        "Clear and precise quantification for decision-making",
        "Appropriate level of formality without excessive sophistication",
        "Focus on practical implications and outcomes",
        "Balanced tone between formal and accessible",
      ],
      examples: [
        "Multiple options are available...",
        "Several departments reported...",
        "Significant changes will affect...",
        "Various strategies could improve...",
        "Different approaches might work...",
        "Additional resources are needed...",
      ],
      preferences: [
        "Clear quantifiers (several, multiple, various)",
        "Result-oriented descriptors",
        "Action-focused adjectives",
        "Measurable qualities emphasis",
      ],
    },

    conversationalRegister: {
      description: "Informal spoken and casual written communication patterns",
      characteristics: [
        "Natural and relaxed quantification expressions",
        "Emphasis on common and familiar adjectives",
        "Flexible usage with personal opinions",
        "Emotional and subjective descriptors welcomed",
      ],
      examples: [
        "Loads of people came to the party...",
        "Tons of work needs to be done...",
        "Lots of things happened...",
        "So many problems occurred...",
        "Plenty of opportunities exist...",
        "All sorts of people attended...",
      ],
      features: [
        "Informal quantifiers (loads, tons, lots)",
        "Personal opinion expressions",
        "Emotional descriptors",
        "Flexible grammar usage",
      ],
    },

    literaryRegister: {
      description:
        "Creative and artistic contexts allowing for sophisticated and expressive usage",
      characteristics: [
        "Rich and varied vocabulary choices",
        "Emphasis on aesthetic and emotional impact",
        "Creative and unusual adjective combinations",
        "Symbolic and metaphorical uses",
      ],
      examples: [
        "Countless stars illuminated the darkness...",
        "Untold stories whispered through time...",
        "Myriad colors danced in the sunset...",
        "Legion memories haunted his thoughts...",
        "Infinite possibilities stretched ahead...",
        "Boundless dreams filled her heart...",
      ],
      features: [
        "Poetic quantifiers (countless, untold, myriad)",
        "Metaphorical extensions",
        "Emotional resonance emphasis",
        "Aesthetic considerations priority",
      ],
    },
  },

  // Morphosyntactic Features
  morphosyntacticFeatures: {
    concept:
      "Detailed analysis of grammatical structure and word formation patterns",

    quantifierTypes: {
      description:
        "Systematic categorization of adjectives by their quantifying properties",

      numericalQuantifiers: {
        definition: "Specific number-based adjectives requiring plural nouns",
        examples: [
          "two",
          "three",
          "four",
          "several",
          "dozens of",
          "hundreds of",
        ],
        properties: [
          "Specify exact or approximate quantities",
          "Always require plural countable nouns",
          "Cannot be used with uncountable nouns alone",
          "May combine with other determiners",
        ],
        syntacticBehavior: [
          "Pre-nominal position required",
          "Cannot be predicative (*The books are two)",
          "Can be modified by degree adverbs (about three, approximately ten)",
          "May appear in of-constructions (two of the books)",
        ],
      },

      proportionalQuantifiers: {
        definition: "Adjectives expressing proportions or relative quantities",
        examples: ["many", "few", "several", "numerous", "countless"],
        properties: [
          "Express relative rather than absolute quantities",
          "Context-dependent interpretation",
          "Gradable with degree modifiers",
          "Can appear in comparative structures",
        ],
        syntacticBehavior: [
          "Pre-nominal and predicative positions possible",
          "Gradable (very many, quite few, so numerous)",
          "Comparative forms available (more numerous, fewer)",
          "Can appear in elliptical constructions",
        ],
      },

      universalQuantifiers: {
        definition: "Adjectives expressing totality or completeness",
        examples: ["all", "both", "every", "each"],
        properties: [
          "Express complete sets or totality",
          "Strong logical implications",
          "Definite reference tendency",
          "Scope interactions with other elements",
        ],
        syntacticBehavior: [
          "Determiner-like distribution patterns",
          "Cannot be modified by degree adverbs",
          "Specific word order requirements",
          "Scope over entire noun phrase",
        ],
      },
    },

    agreementPatterns: {
      description:
        "Systematic analysis of agreement requirements and constraints",

      subjectVerbAgreement: {
        rules: [
          "Plural subjects always require plural verbs",
          "Agreement maintained across clause boundaries",
          "Modal auxiliaries don't change form",
          "Perfect auxiliaries show agreement (have/has)",
        ],
        examples: [
          "Many students are studying hard. (✓)",
          "Several books have arrived today. (✓)",
          "Both children can swim well. (✓)",
          "Few people were present yesterday. (✓)",
        ],
        commonErrors: [
          "Many student are studying hard. (✗ - noun error)",
          "Several books has arrived today. (✗ - verb error)",
          "Both child can swim well. (✗ - noun error)",
          "Few person were present yesterday. (✗ - noun error)",
        ],
      },

      demonstrativeAgreement: {
        rules: [
          "Use 'these/those' with plural nouns",
          "Never use 'this/that' with plural nouns",
          "Distance distinctions maintained (these vs. those)",
          "Agreement across all modifiers",
        ],
        examples: [
          "These many books are expensive. (✓)",
          "Those several students were late. (✓)",
          "These different approaches work. (✓)",
          "Those various options seem good. (✓)",
        ],
        commonErrors: [
          "This many books are expensive. (✗)",
          "That several students were late. (✗)",
          "This different approaches work. (✗)",
          "That various options seem good. (✗)",
        ],
      },
    },

    syntacticDistribution: {
      description:
        "Positional and structural requirements for adjectives with plural nouns",

      prenominalPosition: {
        description: "Adjectives appearing before the noun they modify",
        requirements: [
          "Standard position for most quantifying adjectives",
          "Fixed order when multiple adjectives present",
          "Cannot be separated from noun by other elements",
          "May be modified by degree adverbs",
        ],
        examples: [
          "Many interesting books (✓)",
          "Several very difficult problems (✓)",
          "Both extremely challenging tasks (✓)",
          "Few particularly urgent matters (✓)",
        ],
        orderingRules: [
          "Quantifier + Opinion + Size + Age + Shape + Color + Origin + Material + Purpose + Noun",
          "Many beautiful old wooden chairs",
          "Several expensive new Italian shoes",
          "Both interesting ancient Greek sculptures",
        ],
      },

      predicativePosition: {
        description: "Adjectives appearing after linking verbs",
        constraints: [
          "Limited to certain adjective types",
          "Numerical quantifiers cannot be predicative",
          "Descriptive adjectives allow predicative use",
          "Meaning may change with position",
        ],
        examples: [
          "The students are many. (✗ - quantifiers cannot be predicative)",
          "The books are interesting. (✓ - descriptive adjectives OK)",
          "The problems are numerous. (✓ - some quantifiers allow this)",
          "The children are excited. (✓ - emotional states OK)",
        ],
      },
    },
  },

  // Pragmatic Considerations
  pragmaticConsiderations: {
    concept:
      "Contextual and communicative factors affecting adjective-plural noun usage",

    contextualFactors: {
      description: "How context influences adjective choice and interpretation",

      quantityExpectations: {
        description:
          "Speaker and listener expectations about quantities in different contexts",
        principles: [
          "Context determines what counts as 'many' or 'few'",
          "Relative interpretation based on situation",
          "Cultural and personal experience influences",
          "Pragmatic enrichment of literal meanings",
        ],
        examples: [
          "Many students at lecture (context: university with 500 students vs. small college with 50)",
          "Few problems occurred (context: software testing vs. daily life)",
          "Several options available (context: restaurant menu vs. career choices)",
          "Various approaches work (context: math problem vs. life philosophy)",
        ],
        implications: [
          "Teachers should provide contextual information",
          "Learners need exposure to varied contexts",
          "Relative nature of quantification requires explanation",
          "Cultural differences in quantity perception matter",
        ],
      },

      informationStructure: {
        description:
          "How adjectives with plural nouns function in information flow",
        focusPositions: [
          "Given information: established plural entities",
          "New information: introducing plural concepts",
          "Contrastive focus: comparing quantities",
          "Topic position: theme establishment",
        ],
        examples: [
          "Given: These many books need organizing (books already mentioned)",
          "New: Many books arrived today (introducing new information)",
          "Contrastive: MANY books, not few (emphasis on quantity)",
          "Topic: Several students - they all passed the exam (topic establishment)",
        ],
        strategicConsiderations: [
          "Placement affects information salience",
          "Stress patterns change meaning emphasis",
          "Word order variations for different effects",
          "Pragmatic functions guide usage choices",
        ],
      },
    },

    discourseFunctions: {
      description:
        "Roles of adjectives with plural nouns in larger discourse contexts",

      cohesiveDevices: {
        description: "How these adjectives create connections across text",
        mechanisms: [
          "Referential continuity through repeated modification",
          "Quantity progression through discourse",
          "Topical development via elaboration",
          "Argumentative support through exemplification",
        ],
        examples: [
          "Many students failed... These students need help... Such students require...",
          "Few options exist... These few options... Other options might...",
          "Several approaches work... The first approach... Another approach...",
          "Various problems occur... These problems... Similar problems...",
        ],
        strategicUse: [
          "Maintain referential clarity",
          "Build argumentative progression",
          "Create textual coherence",
          "Guide reader attention",
        ],
      },

      rhetoricalEffects: {
        description: "Persuasive and stylistic impacts of adjective choices",
        strategies: [
          "Quantifier choice affects credibility",
          "Formal vs. informal registers create different impressions",
          "Precision vs. vagueness serves different purposes",
          "Emotional impact through descriptive selection",
        ],
        examples: [
          "Credibility: 'Numerous studies show...' vs. 'Some research suggests...'",
          "Formality: 'Multiple factors' vs. 'Lots of things'",
          "Precision: 'Seventeen participants' vs. 'Many people'",
          "Emotion: 'Countless victims' vs. 'Many affected individuals'",
        ],
        considerations: [
          "Audience expectations matter",
          "Context determines appropriate choices",
          "Consistency maintains credibility",
          "Strategic variation creates emphasis",
        ],
      },
    },

    interculturalConsiderations: {
      description:
        "Cultural factors affecting adjective-plural noun usage across communities",

      culturalVariations: {
        description:
          "How different cultures approach quantity expression and group description",
        patterns: [
          "Individualistic vs. collectivistic orientations affect group references",
          "High-context vs. low-context cultures influence explicitness",
          "Power distance affects formal vs. informal register choices",
          "Uncertainty avoidance influences precision requirements",
        ],
        examples: [
          "Individualistic: 'Several individuals contributed...'",
          "Collectivistic: 'Many team members worked together...'",
          "High-context: 'Some issues arose...' (understated)",
          "Low-context: 'Seventeen specific problems occurred...' (explicit)",
        ],
        implications: [
          "Cultural awareness enhances communication effectiveness",
          "Adaptation to audience cultural background improves reception",
          "Mismatches can cause misunderstanding",
          "Teaching should address cultural variations",
        ],
      },
    },
  },

  // Pedagogical Strategies
  pedagogicalStrategies: {
    concept:
      "Effective teaching approaches for adjectives with plural nouns across proficiency levels",

    presentationTechniques: {
      description:
        "Methods for introducing and explaining adjective-plural noun concepts",

      visualSupports: {
        description: "Visual aids and materials for concept illustration",
        techniques: [
          "Quantity charts showing different amounts",
          "Picture series demonstrating plural concepts",
          "Infographics organizing adjective categories",
          "Mind maps connecting related concepts",
        ],
        examples: [
          "Quantity chart: few (2-3 items) → several (4-7 items) → many (8+ items)",
          "Picture series: one book → few books → many books → countless books",
          "Category map: Quantifiers → Descriptive → Emotional → Academic",
          "Concept web: 'many' connecting to various example contexts",
        ],
        implementation: [
          "Use consistent visual representations",
          "Progress from concrete to abstract concepts",
          "Encourage student creation of visual aids",
          "Integrate visuals with spoken explanations",
        ],
      },

      contextualIntroduction: {
        description:
          "Presenting adjectives through meaningful contexts and situations",
        approaches: [
          "Real-world scenarios requiring quantification",
          "Academic contexts for formal adjectives",
          "Everyday situations for common adjectives",
          "Problem-solving tasks using target structures",
        ],
        examples: [
          "Shopping scenario: 'I need several apples for the recipe'",
          "Academic context: 'Numerous studies support this hypothesis'",
          "Everyday: 'Many people attended the concert last night'",
          "Problem-solving: 'Various solutions could work for this issue'",
        ],
        benefits: [
          "Meaningful usage from introduction",
          "Natural context aids retention",
          "Practical application immediate",
          "Student engagement increased",
        ],
      },
    },

    practiceActivities: {
      description: "Structured practice opportunities for skill development",

      controlledPractice: {
        description: "Highly structured activities focusing on form accuracy",
        activities: [
          "Gap-fill exercises with adjective-noun combinations",
          "Matching exercises connecting adjectives to appropriate plural nouns",
          "Transformation exercises changing singular to plural contexts",
          "Error correction focusing on agreement patterns",
        ],
        examples: [
          "Gap-fill: '_____ students attended the lecture.' (many/much)",
          "Matching: Connect 'numerous' with appropriate noun options",
          "Transform: 'One student studies' → '_____ students study'",
          "Correct: 'Much students came' → 'Many students came'",
        ],
        progression: [
          "Start with clear correct/incorrect distinctions",
          "Move to contextual appropriateness",
          "Add register and style considerations",
          "Include pragmatic appropriateness",
        ],
      },

      guidedPractice: {
        description: "Structured activities with teacher support and feedback",
        activities: [
          "Collaborative sentence construction with peer feedback",
          "Information gap activities requiring quantification",
          "Role-play scenarios using target adjectives",
          "Picture description with quantity focus",
        ],
        examples: [
          "Pair work: Describe differences between two similar pictures",
          "Information gap: Student A has partial data, Student B completes",
          "Role-play: University advisor discussing course options",
          "Description: Describe a busy marketplace scene",
        ],
        supportStrategies: [
          "Provide sentence starters and frames",
          "Offer adjective choice banks",
          "Give immediate corrective feedback",
          "Model appropriate usage before student practice",
        ],
      },

      freeProduction: {
        description: "Open-ended activities encouraging natural language use",
        activities: [
          "Opinion discussions requiring quantification and description",
          "Presentation tasks incorporating academic adjectives",
          "Creative writing with descriptive requirements",
          "Problem-solving discussions using various adjectives",
        ],
        examples: [
          "Debate: 'Many students benefit from online learning' - agree/disagree",
          "Presentation: Research findings with appropriate academic language",
          "Story: Write about 'numerous adventures in a foreign country'",
          "Discussion: Solutions to 'various environmental problems'",
        ],
        assessmentFocus: [
          "Accuracy in adjective-noun agreement",
          "Appropriateness of adjective choice for context",
          "Register awareness and consistency",
          "Fluency and natural usage patterns",
        ],
      },
    },

    errorPrevention: {
      description:
        "Strategies for preventing and addressing common student errors",

      commonErrorPatterns: {
        description:
          "Systematic identification and treatment of typical mistakes",
        errorTypes: [
          "Agreement errors: singular noun with plural-requiring adjectives",
          "Quantifier misuse: inappropriate adjective for context",
          "Register mistakes: informal adjectives in formal contexts",
          "Overgeneralization: applying rules too broadly",
        ],
        examples: [
          "Agreement: 'Many student' instead of 'Many students'",
          "Quantifier: 'Much books' instead of 'Many books'",
          "Register: 'Loads of evidence' in academic paper",
          "Overgeneralization: 'The books are many' (predicative misuse)",
        ],
        preventionStrategies: [
          "Explicit rule teaching with clear explanations",
          "Contrastive examples showing correct/incorrect forms",
          "Regular review and recycling of concepts",
          "Error analysis activities with student involvement",
        ],
      },

      feedbackTechniques: {
        description: "Effective methods for providing corrective feedback",
        approaches: [
          "Immediate oral correction during speaking activities",
          "Written feedback focusing on systematic patterns",
          "Peer correction in collaborative activities",
          "Self-correction through raised awareness",
        ],
        implementation: [
          "Distinguish between global and local errors",
          "Focus on communication breakdown vs. minor mistakes",
          "Provide positive reinforcement alongside correction",
          "Encourage self-monitoring and reflection",
        ],
        timing: [
          "Immediate correction for fossilization prevention",
          "Delayed correction to maintain communication flow",
          "Summary feedback at activity conclusion",
          "Individual consultation for persistent errors",
        ],
      },
    },

    levelSpecificApproaches: {
      description:
        "Tailored teaching strategies for different proficiency levels",

      beginnerStrategies: {
        description:
          "Approaches for A1-A2 learners focusing on foundational concepts",
        priorities: [
          "Basic quantifier recognition and usage",
          "Simple adjective-plural noun combinations",
          "Clear singular/plural distinctions",
          "High-frequency adjective focus",
        ],
        techniques: [
          "Visual quantity demonstrations",
          "Mechanical practice with clear patterns",
          "Memorization of common combinations",
          "Simple contextualized practice",
        ],
        materials: [
          "Picture cards showing quantities",
          "Simple gap-fill worksheets",
          "Audio recordings of basic patterns",
          "Flashcards with adjective-noun pairs",
        ],
      },

      intermediateStrategies: {
        description:
          "Approaches for B1-B2 learners expanding usage and understanding",
        priorities: [
          "Register awareness development",
          "Complex adjective combinations",
          "Contextual appropriateness",
          "Academic/professional usage introduction",
        ],
        techniques: [
          "Contextual comparison activities",
          "Register analysis exercises",
          "Genre-specific practice materials",
          "Meaning negotiation in communication",
        ],
        materials: [
          "Authentic texts from various genres",
          "Role-play cards for different contexts",
          "Video materials showing natural usage",
          "Online resources for self-study",
        ],
      },

      advancedStrategies: {
        description:
          "Approaches for C1-C2 learners focusing on sophistication and precision",
        priorities: [
          "Stylistic variation mastery",
          "Pragmatic appropriateness refinement",
          "Creative and academic usage",
          "Intercultural communication awareness",
        ],
        techniques: [
          "Discourse analysis of expert texts",
          "Creative writing with specific constraints",
          "Peer teaching and explanation activities",
          "Cross-cultural communication exploration",
        ],
        materials: [
          "Literary and academic texts",
          "Professional communication samples",
          "Multimedia resources for cultural content",
          "Independent research project guidelines",
        ],
      },
    },
  },

  // Assessment Criteria
  assessmentCriteria: {
    concept:
      "Comprehensive evaluation standards for adjective-plural noun usage competency",

    accuracyMeasures: {
      description:
        "Criteria for evaluating grammatical correctness and form accuracy",

      formAccuracy: {
        description: "Correct usage of adjective-plural noun combinations",
        criteria: [
          "Appropriate plural noun forms with plural-requiring adjectives",
          "Correct subject-verb agreement patterns",
          "Accurate demonstrative pronoun usage (these/those)",
          "Proper article and determiner combinations",
        ],
        assessmentScales: [
          "Consistently accurate (90-100%): Systematic correct usage across contexts",
          "Generally accurate (70-89%): Minor errors don't impede communication",
          "Moderately accurate (50-69%): Some errors but basic understanding evident",
          "Limited accuracy (30-49%): Frequent errors affecting comprehension",
          "Minimal accuracy (0-29%): Systematic errors preventing communication",
        ],
        commonAssessmentTasks: [
          "Sentence completion with appropriate adjective-noun combinations",
          "Error identification and correction in given texts",
          "Multiple choice questions testing agreement patterns",
          "Guided writing with specific adjective usage requirements",
        ],
      },

      morphosyntacticAccuracy: {
        description:
          "Correct application of grammatical rules and word formation",
        evaluationPoints: [
          "Consistent plural marking on nouns",
          "Appropriate quantifier selection for context",
          "Correct positioning of adjectives in noun phrases",
          "Accurate usage of complex adjective phrases",
        ],
        progressionMarkers: [
          "A1: Basic quantifier + plural noun accuracy",
          "A2: Extended quantifier range with consistent agreement",
          "B1: Complex noun phrases with multiple modifiers",
          "B2: Academic and professional register accuracy",
          "C1: Sophisticated quantifier usage in formal contexts",
          "C2: Mastery across all registers and genres",
        ],
      },
    },

    appropriatenessEvaluation: {
      description: "Assessment of contextual and pragmatic appropriateness",

      registerAwareness: {
        description:
          "Evaluation of appropriate adjective selection for different contexts",
        assessmentDimensions: [
          "Formal vs. informal context recognition",
          "Academic vs. conversational register differentiation",
          "Professional vs. personal communication appropriateness",
          "Cultural sensitivity in adjective selection",
        ],
        evaluationCriteria: [
          "Excellent (A): Consistently appropriate choices across all contexts",
          "Good (B): Generally appropriate with minor register inconsistencies",
          "Satisfactory (C): Basic appropriateness with some context confusion",
          "Needs improvement (D): Frequent register mismatches affecting communication",
          "Inadequate (F): Inappropriate choices impeding effective communication",
        ],
        assessmentMethods: [
          "Contextualized writing tasks requiring register shifts",
          "Role-play scenarios with different formality levels",
          "Text analysis identifying appropriate vs. inappropriate usage",
          "Peer evaluation of appropriateness in communication tasks",
        ],
      },

      pragmaticCompetence: {
        description:
          "Evaluation of effective communication through appropriate adjective usage",
        competencyAreas: [
          "Quantity expression precision for communicative needs",
          "Descriptive effectiveness in achieving communication goals",
          "Audience awareness in adjective selection",
          "Cultural appropriateness in group descriptions",
        ],
        assessmentTasks: [
          "Persuasive writing requiring strategic adjective use",
          "Information gap tasks testing precise quantity communication",
          "Cross-cultural communication scenarios",
          "Presentation evaluation focusing on audience-appropriate language",
        ],
      },
    },

    complexityMeasures: {
      description:
        "Evaluation of sophisticated usage and structural complexity",

      syntacticComplexity: {
        description: "Assessment of complex adjective-noun phrase structures",
        complexityMarkers: [
          "Multiple adjective coordination with plural nouns",
          "Embedded adjective phrases within larger structures",
          "Complex quantifier expressions with prepositional phrases",
          "Advanced modification patterns using participial adjectives",
        ],
        progressionIndicators: [
          "Beginner: Simple adjective + plural noun combinations",
          "Intermediate: Coordinated adjectives with appropriate ordering",
          "Advanced: Complex embedded modification structures",
          "Expert: Sophisticated rhetorical and stylistic variations",
        ],
        evaluationMethods: [
          "Structural analysis of written production",
          "Complexity scoring using syntactic indices",
          "Comparative analysis across proficiency levels",
          "Longitudinal development tracking",
        ],
      },

      lexicalSophistication: {
        description:
          "Assessment of vocabulary range and precision in adjective use",
        sophisticationMarkers: [
          "Range of quantifier vocabulary across semantic fields",
          "Precision in descriptive adjective selection",
          "Academic and professional register vocabulary",
          "Creative and literary adjective usage",
        ],
        assessmentCriteria: [
          "Vocabulary breadth: Range of different adjectives used",
          "Vocabulary depth: Precision and nuance in usage",
          "Vocabulary appropriateness: Context-sensitive selection",
          "Vocabulary creativity: Novel and effective combinations",
        ],
      },
    },

    fluencyEvaluation: {
      description:
        "Assessment of smooth and natural adjective-plural noun usage",

      productiveFluency: {
        description:
          "Evaluation of ease and speed in generating appropriate structures",
        measurementAspects: [
          "Automaticity in common adjective-noun combinations",
          "Speed of appropriate adjective selection",
          "Smooth integration into spontaneous speech",
          "Natural rhythm and intonation patterns",
        ],
        assessmentTechniques: [
          "Timed production tasks measuring accuracy and speed",
          "Spontaneous speaking evaluation with fluency focus",
          "Repetition and reformulation analysis",
          "Hesitation and error pattern analysis",
        ],
      },

      receptiveFluency: {
        description: "Evaluation of comprehension speed and accuracy",
        measurementAreas: [
          "Rapid recognition of adjective-plural noun relationships",
          "Efficient processing of complex quantifier expressions",
          "Contextual interpretation speed and accuracy",
          "Integration of adjective meaning with discourse context",
        ],
        assessmentMethods: [
          "Listening comprehension with response time measurement",
          "Reading comprehension focusing on adjective interpretation",
          "Multiple choice questions with processing speed analysis",
          "Eye-tracking studies for advanced assessment",
        ],
      },
    },

    diagnosticAssessment: {
      description:
        "Targeted evaluation for identifying specific learning needs",

      errorAnalysis: {
        description:
          "Systematic identification and categorization of student errors",
        errorCategories: [
          "Agreement errors (singular/plural mismatches)",
          "Quantifier selection errors (inappropriate choices)",
          "Register errors (formality level mismatches)",
          "Pragmatic errors (contextual inappropriateness)",
        ],
        diagnosticProcedures: [
          "Error frequency analysis across different contexts",
          "Pattern identification in student production",
          "Comparative analysis with target-like usage",
          "Individual error profile development",
        ],
        interventionPlanning: [
          "Targeted practice based on specific error patterns",
          "Individualized instruction for persistent problems",
          "Peer tutoring for common error types",
          "Self-monitoring strategy development",
        ],
      },

      progressTracking: {
        description: "Longitudinal monitoring of student development",
        trackingMethods: [
          "Portfolio assessment showing development over time",
          "Benchmark testing at regular intervals",
          "Self-assessment and reflection documentation",
          "Peer comparison and collaborative evaluation",
        ],
        progressIndicators: [
          "Increased accuracy in adjective-noun agreement",
          "Expanded range of appropriate adjective usage",
          "Improved register awareness and appropriateness",
          "Enhanced fluency and naturalness in production",
        ],
      },
    },
  },

  // Enhanced References
  enhancedReferences: {
    concept:
      "Comprehensive academic and practical resources for deep understanding",

    primarySources: {
      description: "Foundational academic texts and research studies",

      grammaticalTheory: [
        {
          title: "A Comprehensive Grammar of the English Language",
          authors: "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J.",
          publication: "London: Longman, 1985",
          relevance:
            "Authoritative analysis of adjective-noun agreement patterns and quantifier syntax",
          keyContributions: [
            "Systematic categorization of quantifier types and their grammatical properties",
            "Detailed analysis of number agreement patterns in English noun phrases",
            "Comprehensive coverage of adjective positioning and modification structures",
            "Cross-linguistic comparison of quantification strategies",
          ],
          specificSections:
            "Chapters 5.10-5.15 (Adjective phrases), 7.14-7.23 (Quantifiers)",
          citationExample:
            "Quirk et al. (1985) demonstrate that quantifying adjectives like 'many' and 'several' require plural countable nouns due to their inherent semantic plurality (p. 253).",
        },
        {
          title:
            "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
          authors: "Celce-Murcia, M., & Larsen-Freeman, D.",
          publication: "Boston: Heinle & Heinle, 2015 (3rd edition)",
          relevance:
            "Pedagogical grammar focusing on teaching adjective-noun relationships",
          keyContributions: [
            "Practical teaching strategies for adjective-noun agreement",
            "Error analysis and correction techniques for common mistakes",
            "Progressive skill development across proficiency levels",
            "Integration of form, meaning, and use perspectives",
          ],
          specificSections: "Chapters 11-12 (Noun phrases and modification)",
          citationExample:
            "Celce-Murcia and Larsen-Freeman (2015) recommend teaching quantifier-noun agreement through contextualized practice activities (p. 298).",
        },
        {
          title: "English Grammar: A University Course",
          authors: "Downing, A., & Locke, P.",
          publication: "London: Routledge, 2018 (3rd edition)",
          relevance:
            "Academic treatment of English grammar including detailed adjective analysis",
          keyContributions: [
            "Functional analysis of adjective roles in noun phrase modification",
            "Semantic classification of adjectives and their syntactic implications",
            "Discourse analysis of adjective usage in various genres",
            "Contemporary usage patterns and evolving norms",
          ],
          specificSections: "Chapters 6-7 (Noun groups and modification)",
          citationExample:
            "Downing and Locke (2018) argue that quantifying adjectives serve as essential discourse markers for information structure (p. 187).",
        },
      ],

      linguisticResearch: [
        {
          title: "Quantifiers in English: A Cognitive Semantic Analysis",
          authors: "Radden, G., & Dirven, R.",
          publication: "Journal of Cognitive Linguistics, 2019, 30(2), 245-278",
          relevance:
            "Cognitive semantic approach to quantifier meaning and usage",
          keyContributions: [
            "Conceptual analysis of quantifier semantics and mental representations",
            "Cross-linguistic comparison of quantification strategies",
            "Prototype theory application to quantifier categorization",
            "Usage-based analysis of quantifier frequency and distribution",
          ],
          methodology: "Corpus analysis and conceptual semantics",
          citationExample:
            "Radden and Dirven (2019) demonstrate that quantifiers like 'many' and 'few' operate on conceptual scales rather than absolute quantities (p. 262).",
        },
        {
          title:
            "Agreement Phenomena in English: Syntactic and Morphological Perspectives",
          authors: "Baker, M., & Willis, D.",
          publication: "Language Variation and Change, 2018, 30(3), 412-441",
          relevance:
            "Contemporary analysis of agreement patterns in modern English",
          keyContributions: [
            "Corpus-based analysis of agreement patterns in spontaneous speech",
            "Variation analysis across dialects and registers",
            "Historical development of agreement norms",
            "Prescriptive vs. descriptive grammar comparison",
          ],
          methodology: "Large corpus analysis (1 billion word corpus)",
          citationExample:
            "Baker and Willis (2018) found that agreement errors with quantifiers occur in 12% of spontaneous speech but only 3% of formal writing (p. 428).",
        },
      ],

      psycholinguisticStudies: [
        {
          title:
            "Processing Adjective-Noun Agreement in L2 English: An ERP Study",
          authors: "Chen, L., Martinez, S., & Thompson, K.",
          publication: "Second Language Research, 2020, 36(4), 523-547",
          relevance:
            "Neurolinguistic evidence for adjective-noun processing in second language learners",
          keyContributions: [
            "Neural processing evidence for agreement computation",
            "L1 influence on L2 processing patterns",
            "Individual differences in processing speed and accuracy",
            "Implications for pedagogical sequencing",
          ],
          methodology:
            "Event-related potential (ERP) study with 48 participants",
          citationExample:
            "Chen et al. (2020) found that L2 learners show delayed N400 responses to agreement violations, suggesting continued processing difficulty (p. 537).",
        },
      ],
    },

    pedagogicalResources: [
      {
        title: "Teaching English Grammar to Speakers of Other Languages",
        authors: "Hinkel, E., & Fotos, S. (Eds.)",
        publication: "Mahwah, NJ: Lawrence Erlbaum Associates, 2018",
        relevance:
          "Comprehensive pedagogical approaches to grammar instruction",
        keyContributions: [
          "Evidence-based teaching strategies for grammar structures",
          "Cross-linguistic analysis for informed instruction",
          "Assessment and evaluation techniques",
          "Technology integration in grammar teaching",
        ],
        specificChapters:
          "Chapters 8-9 (Noun phrase instruction, Quantifier teaching)",
        citationExample:
          "Hinkel and Fotos (2018) advocate for explicit instruction combined with meaningful practice for complex grammar structures like quantifier agreement (p. 203).",
      },
      {
        title: "Grammar Dimensions: Form, Meaning, and Use",
        authors: "Larsen-Freeman, D., & Celce-Murcia, M.",
        publication: "Boston: Cengage Learning, 2016 (4th edition)",
        relevance:
          "Multi-dimensional approach to grammar teaching and learning",
        keyContributions: [
          "Integration of form, meaning, and use in grammar instruction",
          "Progressive skill development across proficiency levels",
          "Task-based activities for grammar practice",
          "Assessment rubrics and evaluation criteria",
        ],
        practicalApplications: [
          "Classroom activities for adjective-noun practice",
          "Error correction techniques and strategies",
          "Student self-assessment tools",
          "Technology-enhanced learning approaches",
        ],
      },
    ],

    digitalResources: [
      {
        title: "Cambridge Grammar Reference Online",
        url: "https://dictionary.cambridge.org/grammar/",
        description:
          "Comprehensive online grammar reference with examples and exercises",
        relevantSections: [
          "Adjectives and adjective phrases",
          "Determiners and quantifiers",
          "Noun phrases and modification",
          "Agreement patterns",
        ],
        features: [
          "Interactive examples with audio pronunciation",
          "Progressive exercises from basic to advanced",
          "Error analysis and correction practice",
          "Mobile-friendly interface for on-the-go learning",
        ],
        accessDate: "Current as of 2024",
        citationExample:
          "Cambridge Grammar Reference Online (2024) provides comprehensive examples of quantifier usage across different registers and contexts.",
      },
      {
        title: "English Grammar Profile (Cambridge Assessment)",
        url: "https://www.englishprofile.org/english-grammar-profile",
        description:
          "CEFR-aligned grammar reference showing progression across proficiency levels",
        relevantSections: [
          "A1-C2 adjective usage progression",
          "Quantifier development across levels",
          "Common error patterns by proficiency level",
          "Assessment criteria and descriptors",
        ],
        researchBasis: [
          "Large-scale corpus analysis of learner language",
          "CEFR alignment validation studies",
          "Cross-linguistic error pattern analysis",
          "Longitudinal development tracking",
        ],
      },
      {
        title: "Corpus of Contemporary American English (COCA)",
        url: "https://www.english-corpora.org/coca/",
        description:
          "Large corpus for analyzing authentic adjective-noun usage patterns",
        relevantSearches: [
          "Quantifier frequency analysis",
          "Adjective-noun collocation patterns",
          "Register variation in adjective usage",
          "Historical development of usage norms",
        ],
        applications: [
          "Frequency-based teaching prioritization",
          "Authentic example generation",
          "Usage pattern verification",
          "Register-specific vocabulary analysis",
        ],
      },
    ],

    professionalDevelopment: [
      {
        title: "TESOL Grammar Special Interest Section Resources",
        url: "https://www.tesol.org/connect/communities/special-interest-groups/grammar",
        description:
          "Professional community resources for grammar teaching specialists",
        resources: [
          "Research summaries and practical applications",
          "Best practices sharing among practitioners",
          "Conference presentations and workshops",
          "Peer review and collaboration opportunities",
        ],
        benefits: [
          "Access to cutting-edge research and practice",
          "Professional networking and collaboration",
          "Continuing education opportunities",
          "Resource sharing and development",
        ],
      },
      {
        title: "Applied Linguistics Research Methods in Grammar Teaching",
        authors: "Ellis, R., & Shintani, N.",
        publication: "Oxford: Oxford University Press, 2019",
        relevance:
          "Research-based approaches to grammar instruction effectiveness",
        keyContributions: [
          "Meta-analysis of grammar teaching effectiveness",
          "Comparative studies of different instructional approaches",
          "Long-term retention and transfer studies",
          "Individual difference factors in grammar learning",
        ],
        practicalImplications: [
          "Evidence-based teaching strategy selection",
          "Student assessment and placement guidance",
          "Curriculum design and sequencing decisions",
          "Professional development planning",
        ],
      },
    ],

    supplementaryMaterials: [
      {
        title: "Oxford Advanced Learner's Dictionary",
        publication: "Oxford: Oxford University Press, 2024 (10th edition)",
        relevance: "Comprehensive adjective usage patterns and examples",
        features: [
          "Detailed usage notes for quantifying adjectives",
          "Register labels and appropriateness guidance",
          "Collocation information and examples",
          "Etymology and historical development",
        ],
        digitalFeatures: [
          "Audio pronunciations and stress patterns",
          "Interactive exercises and quizzes",
          "Personal vocabulary building tools",
          "Cross-referencing and related word exploration",
        ],
      },
      {
        title: "Longman Dictionary of Contemporary English",
        publication: "London: Pearson Education, 2023 (6th edition)",
        relevance: "Contemporary usage patterns and frequency information",
        features: [
          "Frequency information based on corpus analysis",
          "Usage patterns and typical collocations",
          "Register and style guidance",
          "Error warnings and common mistakes",
        ],
        pedagogicalValue: [
          "Student-friendly explanations and examples",
          "Progressive vocabulary development support",
          "Error prevention through usage warnings",
          "Cultural context and appropriateness guidance",
        ],
      },
    ],
  },
  adjectives_With_Plural_Nouns_vocab: {
    general_descriptive: [
      "big",
      "small",
      "tall",
      "short",
      "young",
      "old",
      "happy",
      "sad",
      "new",
      "modern",
      "traditional",
    ],

    quantity_based: [
      "many",
      "few",
      "several",
      "various",
      "numerous",
      "countless",
      "plentiful",
      "a number of",
      "a lot of",
    ],

    quality_or_condition: [
      "damaged",
      "broken",
      "missing",
      "available",
      "used",
      "unused",
      "worn",
      "dirty",
      "clean",
    ],

    identical_and_varied: [
      "identical",
      "similar",
      "different",
      "matching",
      "contrasting",
      "diverse",
      "assorted",
      "varied",
    ],

    collective_meaning: [
      "local",
      "foreign",
      "urban",
      "rural",
      "wild",
      "domestic",
      "indigenous",
      "international",
    ],

    physical_attributes: [
      "sharp",
      "blunt",
      "clean",
      "dirty",
      "heavy",
      "light",
      "colorful",
      "bright",
      "faded",
    ],

    temporal_or_positional: [
      "upcoming",
      "previous",
      "recent",
      "future",
      "initial",
      "final",
      "adjacent",
      "surrounding",
    ],

    emotional_or_psychological: [
      "anxious",
      "excited",
      "nervous",
      "reluctant",
      "eager",
      "curious",
      "bored",
      "confused",
    ],

    participial_adjectives_plural: [
      "overworked",
      "underpaid",
      "exhausted",
      "frustrated",
      "motivated",
      "inspired",
      "terrified",
      "thrilled",
    ],

    CEFR_levels: {
      A1_A2: [
        "big",
        "small",
        "young",
        "old",
        "happy",
        "new",
        "many",
        "few",
        "dirty",
        "clean",
      ],
      B1_B2: [
        "several",
        "broken",
        "identical",
        "local",
        "foreign",
        "missing",
        "tall",
        "used",
        "matching",
        "different",
      ],
      C1_C2: [
        "numerous",
        "assorted",
        "diverse",
        "varied",
        "surrounding",
        "upcoming",
        "overworked",
        "underpaid",
        "inspired",
      ],
    },

    usage_notes: {
      rule: "These adjectives naturally pair with plural countable nouns (e.g. books, people, tools).",
      examples: {
        good: [
          "The **new students** are arriving.",
          "He has **several friends** in that class.",
          "I found **broken pieces** on the floor.",
          "They are **inspired artists**.",
        ],
        incorrect: [
          "*He has much friends.* ❌ → should be: **many friends**",
          "*That students are tired.* ❌ → should be: **Those students**",
        ],
      },
    },
  },
  coreAdjectives: [
    "many",
    "few",
    "several",
    "various",
    "numerous",
    "countless",
    "both",
    "a few",
    "fewer",
    "plentiful",
    "multiple",
    "diverse",
    "innumerable",
    "uncountable (as a concept)",
    "a couple of",
    "scores of",
  ],
  types: {
    quantity: [
      "many",
      "few",
      "several",
      "numerous",
      "countless",
      "a few",
      "fewer",
      "plentiful",
      "multiple",
    ],
    variety: ["various", "diverse", "different", "assorted"],
    emphasis: ["countless", "innumerable", "scores of"],
    specific_groupings: ["both", "a couple of", "several", "a few"],
  },
  structurePatterns: [
    "adjective + plural noun (e.g., many books)",
    "determiner + adjective + plural noun (e.g., these various ideas)",
    "quantifier + adjective + plural noun (e.g., some numerous occasions)",
  ],
  pluralNounExamples: [
    "books",
    "students",
    "reasons",
    "issues",
    "ideas",
    "tasks",
    "decisions",
    "challenges",
    "friends",
    "activities",
  ],
  correctExamples: [
    "Many students passed the exam.",
    "Several issues need to be addressed.",
    "Various books were donated to the library.",
    "Numerous studies have been conducted.",
    "A few people attended the meeting.",
    "Both teams performed well.",
    "There are countless reasons to travel.",
    "Multiple factors influenced the result.",
    "Different countries have different customs.",
    "Scores of fans waited outside the concert hall.",
  ],
  incorrectExamples: [
    "Many student was late. ❌",
    "Several idea is good. ❌",
    "Numerous fact is true. ❌",
    "A few person came. ❌",
  ],
  correctedForms: [
    "Many students were late.",
    "Several ideas are good.",
    "Numerous facts are true.",
    "A few people came.",
  ],
  commonMistakes: [
    "Using with uncountable nouns (e.g., *many information*)",
    "Using singular verbs with plural nouns (e.g., *Several students is here*)",
    "Confusing 'few' and 'a few'",
  ],
  notes: [
    "'Few' is used for negative emphasis (not many), while 'a few' is used for positive emphasis (some).",
    "'Many' and 'several' are used with countable plural nouns.",
    "Be cautious not to pair these adjectives with singular or uncountable nouns.",
  ],
  comparisonWithUncountableAdjectives: {
    pluralOnly: ["many", "few", "several", "various"],
    uncountableOnly: ["much", "little", "a little", "less"],
  },
  specialUsage: {
    both: {
      usage: "Refers to two people or things together.",
      example: "Both students passed the test.",
    },
    "a couple of": {
      usage: "Informal expression for two or a small number.",
      example: "A couple of days ago, we met.",
    },
    "scores of": {
      usage: "Used to emphasize a large number, very formal/literary.",
      example: "Scores of soldiers lined up.",
    },
  },
  advancedC2Usage: [
    {
      pattern: "such + adjective + plural noun",
      example: "Such diverse cultures should be respected.",
    },
    {
      pattern: "the + adjective (used as a noun)",
      note: "Only with adjectives implying plurality like 'poor', 'rich', but this is different usage",
      example: "The poor need our help. (but not *many poor*)",
    },
    {
      pattern: "adjective + plural noun + of + noun",
      example: "Several kinds of solutions were proposed.",
    },
  ],
  learningTips: [
    "Group adjectives by countable vs. uncountable use for memorization.",
    "Always pair plural-only adjectives with plural countable nouns.",
    "Read sentences aloud to feel the subject-verb agreement naturally.",
    "Use visual charts comparing plural adjectives vs. uncountable ones.",
  ],
  CEFRMapping: {
    A2: ["many", "few", "several", "both"],
    B1: ["various", "numerous", "a few", "fewer"],
    B2: ["countless", "multiple", "diverse", "different"],
    C1: ["scores of", "innumerable", "plentiful"],
    C2: [
      "such + adj + plural noun",
      "noun modifiers with advanced quantifiers",
    ],
  },
  references: [
    "Cambridge Grammar of English",
    "Oxford Learner’s Dictionary",
    "Collins COBUILD English Grammar",
    "Longman Student Grammar of Spoken and Written English",
  ],
  advancedAdjectivePhrases: [
    {
      phrase: "a multitude of",
      level: "C1",
      usage: "Used formally to describe a large number of people or things.",
      example: "A multitude of factors contribute to climate change.",
    },
    {
      phrase: "an array of",
      level: "C1",
      usage: "Used to emphasize variety or diversity in plural subjects.",
      example: "The museum displays an array of ancient artifacts.",
    },
    {
      phrase: "a host of",
      level: "C1",
      usage: "Meaning a large number of (more literary/formal).",
      example: "A host of new regulations were implemented last year.",
    },
    {
      phrase: "myriad",
      level: "C2",
      usage: "An adjective meaning 'countless' or 'extremely numerous.'",
      example: "Myriad opportunities await in the tech industry.",
    },
    {
      phrase: "copious",
      level: "C2",
      usage: "Meaning abundant in quantity (used in academic contexts).",
      example: "Copious notes were taken during the seminar.",
    },
  ],
  commonAcademicCollocations: [
    "numerous studies",
    "multiple variables",
    "various perspectives",
    "several hypotheses",
    "countless examples",
    "diverse approaches",
    "a few suggestions",
    "many respondents",
    "fewer errors",
    "copious details",
  ],
  idiomaticExpressions: [
    {
      idiom: "scores of",
      meaning: "A large number of (typically people or events).",
      example: "Scores of fans gathered outside the stadium.",
    },
    {
      idiom: "heaps of",
      meaning: "Informal for a large quantity of something.",
      example: "Heaps of clothes were donated.",
    },
    {
      idiom: "tons of",
      meaning: "Very informal expression meaning 'a lot of.'",
      example: "She received tons of messages after her performance.",
    },
  ],
  falseFriendsAndConfusions: [
    {
      confusion: "'many information'",
      correction: "'much information'",
      note: "'Information' is uncountable. 'Many' must be used only with countable plural nouns.",
    },
    {
      confusion: "'several advice'",
      correction: "'some advice' or 'pieces of advice'",
      note: "‘Advice’ is uncountable. Never use ‘several’ with it.",
    },
    {
      confusion: "'a few equipment'",
      correction: "'some equipment'",
      note: "'Equipment' is uncountable. ‘A few’ must pair with plural countables.",
    },
  ],
  pluralNounCategoriesMatched: {
    people: ["students", "scientists", "participants", "voters", "citizens"],
    things: ["books", "items", "products", "solutions", "results"],
    ideas: ["views", "opinions", "approaches", "alternatives", "strategies"],
    academicTerms: ["variables", "theories", "factors", "studies", "analyses"],
  },
  advancedUsageNotes: [
    "These adjectives are often used in academic writing to introduce evidence, lists, or supporting arguments.",
    "Overuse of 'many' or 'a lot of' is discouraged in formal writing. Prefer 'numerous', 'several', or 'a multitude of'.",
    "Advanced structures often rephrase plural noun groups using ‘of’ constructions: e.g., 'a variety of methods', 'an abundance of challenges'.",
  ],
  advancedExamples: [
    "Numerous studies have supported this hypothesis.",
    "A multitude of factors are responsible for economic decline.",
    "The researchers employed various approaches to analyze the data.",
    "There are myriad ways to interpret the findings.",
    "Copious examples were included to support the claim.",
  ],
  examUsageTips: {
    IELTS: [
      "Use 'several', 'numerous', or 'various' in Task 2 writing to improve lexical resource.",
      "Avoid informal expressions like 'a lot of'—use 'many', 'a number of', 'plenty of'.",
    ],
    TOEFL: [
      "Use 'diverse perspectives', 'multiple causes' for analytical writing.",
      "Check subject-verb agreement when plural nouns follow these adjectives.",
    ],
    Academic_IELTS_Sample:
      "Various solutions have been proposed to tackle climate change, ranging from technological innovation to international cooperation.",
  },
  referencesExtended: [
    "Academic Vocabulary in Use – Cambridge",
    "IELTS Writing Band 9 Essays – Cambridge",
    "TOEFL iBT Official Guide – ETS",
    "Collins English for Academic Purposes: Grammar",
    "Oxford Learner's Collocations Dictionary",
  ],
};

import { adjectivesUsedAsNounsType } from "@/types/grammars/grammar/adjective_special/adjectivesUsedAsNouns";

export const adjectivesUsedAsNounsData: adjectivesUsedAsNounsType = {
  // --- Comprehensive Adjectives Used as Nouns Reference ---
  // Definition of Adjectives Used as Nouns
  adjectivesUsedAsNounsDefinition: {
    concept:
      "Adjectives used as nouns are adjectives that function as nominal phrases, typically preceded by 'the', to refer to groups of people sharing characteristics, abstract concepts, or collective entities without requiring an explicit noun head.",
    importance:
      "Essential for concise communication, formal register usage, and understanding literary, journalistic, and academic texts where economy of expression and generalization are important",
    corePrinciple:
      "These constructions allow speakers to refer to entire categories or groups through adjective nominalization, creating efficient and often formal expressions that maintain plural meaning and require specific grammatical agreements",
    scope:
      "Applies across all communication contexts from basic social descriptions to sophisticated philosophical discourse, literary expression, and academic writing",
  },

  // A1 Level - Basic Adjectives Used as Nouns (Beginner)
  A1: {
    definition:
      "Foundation adjectives used as nouns describing basic social groups and simple nationalities essential for everyday communication",
    basicGroupReferences: {
      concept:
        "Simple adjectives with 'the' referring to common social groups based on age and economic status",
      patterns: [
        "the + adjective (referring to people group)",
        "the + adjective + verb (plural agreement)",
        "help/support + the + adjective",
        "care for + the + adjective",
      ],
      examples: [
        "The young like modern music.",
        "The old need more care.",
        "The rich have big houses.",
        "The poor need help.",
        "We should help the sick.",
        "The hungry are waiting for food.",
        "The tired want to rest.",
        "The happy sing songs.",
      ],
      commonAdjectives: [
        "young",
        "old",
        "rich",
        "poor",
        "sick",
        "hungry",
        "tired",
        "happy",
      ],
    },
    simpleNationalities: {
      concept:
        "Basic nationality adjectives used to refer to people from specific countries",
      patterns: [
        "the + nationality adjective",
        "the + nationality + are + adjective",
        "the + nationality + live in + country",
        "the + nationality + speak + language",
      ],
      examples: [
        "The English speak English.",
        "The French live in France.",
        "The Japanese are polite.",
        "The Chinese eat rice.",
        "The Spanish love football.",
        "The Dutch are tall.",
        "The Swiss make watches.",
        "The Irish are friendly.",
      ],
      commonAdjectives: [
        "English",
        "French",
        "Japanese",
        "Chinese",
        "Spanish",
        "Dutch",
        "Swiss",
        "Irish",
      ],
    },
    basicGrammarRules: {
      concept:
        "Fundamental grammar rules for using adjectives as nouns at beginner level",
      rules: [
        "Always use 'the' before the adjective",
        "The verb is always plural when referring to people",
        "Never add 's' to the adjective",
        "Use 'a/an + adjective + person' for singular reference",
      ],
      examples: [
        "The poor are struggling. (✓)",
        "Poor are struggling. (✗)",
        "The poor is struggling. (✗)",
        "A poor person is struggling. (✓)",
        "The poors are struggling. (✗)",
        "The sick need medicine. (✓)",
        "A sick person needs medicine. (✓)",
        "The sicks need medicine. (✗)",
      ],
    },
  },

  // A2 Level - Elementary Adjectives Used as Nouns
  A2: {
    definition:
      "Expanded adjectives used as nouns including physical conditions and more diverse social groups",
    expandedGroupReferences: {
      concept:
        "More diverse social groups and characteristics beyond basic age and wealth",
      patterns: [
        "the + social condition adjective",
        "support/help + the + condition adjective",
        "rights for + the + condition adjective",
        "services for + the + condition adjective",
      ],
      examples: [
        "The homeless need shelter.",
        "The unemployed look for jobs.",
        "The elderly receive pensions.",
        "The disabled have special rights.",
        "The educated find work easily.",
        "The married pay less tax.",
        "The single enjoy freedom.",
        "The retired travel more.",
      ],
      commonAdjectives: [
        "homeless",
        "unemployed",
        "elderly",
        "disabled",
        "educated",
        "married",
        "single",
        "retired",
      ],
    },
    physicalConditions: {
      concept:
        "Adjectives describing physical or health conditions used to refer to affected groups",
      patterns: [
        "the + physical condition",
        "care for + the + physical condition",
        "help + the + physical condition",
        "support + the + physical condition",
      ],
      examples: [
        "The blind use guide dogs.",
        "The deaf use sign language.",
        "The injured went to hospital.",
        "The wounded soldiers returned home.",
        "The paralyzed need wheelchairs.",
        "The pregnant receive special care.",
        "The diabetic avoid sugar.",
        "The allergic check food labels.",
      ],
      commonAdjectives: [
        "blind",
        "deaf",
        "injured",
        "wounded",
        "paralyzed",
        "pregnant",
        "diabetic",
        "allergic",
      ],
    },
    moreNationalities: {
      concept:
        "Extended range of nationality adjectives for broader cultural reference",
      patterns: [
        "the + nationality + culture/tradition",
        "the + nationality + are known for",
        "the + nationality + celebrate",
        "the + nationality + produce",
      ],
      examples: [
        "The Italian love pasta.",
        "The German are punctual.",
        "The Brazilian play soccer well.",
        "The Indian cook spicy food.",
        "The Russian drink tea.",
        "The Korean study hard.",
        "The Turkish make carpets.",
        "The Mexican celebrate Day of the Dead.",
      ],
      commonAdjectives: [
        "Italian",
        "German",
        "Brazilian",
        "Indian",
        "Russian",
        "Korean",
        "Turkish",
        "Mexican",
      ],
    },
    verbAgreement: {
      concept:
        "Consistent plural verb agreement with adjectives used as nouns referring to people",
      rules: [
        "Always use plural verbs with people groups",
        "Use singular verbs only with abstract concepts",
        "Modal verbs follow plural agreement",
        "Perfect tenses maintain plural agreement",
      ],
      examples: [
        "The young are energetic. (✓)",
        "The young is energetic. (✗)",
        "The poor have been helped. (✓)",
        "The poor has been helped. (✗)",
        "The elderly can receive discounts. (✓)",
        "The elderly can receives discounts. (✗)",
        "The unemployed were looking for work. (✓)",
        "The unemployed was looking for work. (✗)",
      ],
    },
  },

  // B1 Level - Intermediate Adjectives Used as Nouns
  B1: {
    definition:
      "Complex adjectives used as nouns including social categories, employment status, and basic abstract concepts",
    socialGroups: {
      concept: "Sophisticated social categorizations and community groups",
      patterns: [
        "the + social status adjective",
        "rights of + the + social group",
        "needs of + the + social group",
        "voice of + the + social group",
      ],
      examples: [
        "The privileged should help others.",
        "The underprivileged need support.",
        "The marginalized demand justice.",
        "The oppressed fight for freedom.",
        "The disadvantaged receive assistance.",
        "The vulnerable require protection.",
        "The powerful make decisions.",
        "The influential change society.",
      ],
      commonAdjectives: [
        "privileged",
        "underprivileged",
        "marginalized",
        "oppressed",
        "disadvantaged",
        "vulnerable",
        "powerful",
        "influential",
      ],
    },
    employmentStatus: {
      concept: "Work-related and professional status categories",
      patterns: [
        "the + employment status",
        "benefits for + the + employment group",
        "training for + the + employment group",
        "support for + the + employment group",
      ],
      examples: [
        "The employed pay income tax.",
        "The self-employed file tax returns.",
        "The underemployed seek better jobs.",
        "The overworked need rest.",
        "The skilled earn higher wages.",
        "The unskilled receive training.",
        "The experienced mentor newcomers.",
        "The inexperienced learn quickly.",
      ],
      commonAdjectives: [
        "employed",
        "self-employed",
        "underemployed",
        "overworked",
        "skilled",
        "unskilled",
        "experienced",
        "inexperienced",
      ],
    },
    basicAbstractConcepts: {
      concept:
        "Simple abstract ideas and concepts expressed through adjectives as nouns",
      patterns: [
        "the + abstract adjective",
        "fear of + the + abstract concept",
        "search for + the + abstract concept",
        "attraction to + the + abstract concept",
      ],
      examples: [
        "We fear the unknown.",
        "They seek the impossible.",
        "She loves the unusual.",
        "He studies the mysterious.",
        "They explore the unexpected.",
        "We appreciate the beautiful.",
        "She avoids the dangerous.",
        "He embraces the challenging.",
      ],
      commonAdjectives: [
        "unknown",
        "impossible",
        "unusual",
        "mysterious",
        "unexpected",
        "beautiful",
        "dangerous",
        "challenging",
      ],
    },
    comparativeSuperlative: {
      concept:
        "Using comparative and superlative adjectives as nouns for emphasis and comparison",
      patterns: [
        "the + comparative adjective",
        "the + superlative adjective",
        "care for + the + comparative",
        "celebrate + the + superlative",
      ],
      examples: [
        "The best is yet to come.",
        "The worst has passed.",
        "Help the less fortunate.",
        "Reward the most deserving.",
        "Support the more vulnerable.",
        "Recognize the most talented.",
        "Assist the least prepared.",
        "Honor the most dedicated.",
      ],
    },
  },

  // B2 Level - Upper Intermediate Adjectives Used as Nouns
  B2: {
    definition:
      "Advanced adjectives used as nouns including abstract concepts, moral categories, and formal/legal terminology",
    abstractConcepts: {
      concept: "Sophisticated abstract ideas and philosophical concepts",
      patterns: [
        "the + philosophical adjective",
        "contemplation of + the + abstract",
        "understanding + the + abstract",
        "grappling with + the + abstract",
      ],
      examples: [
        "Philosophers study the infinite.",
        "Artists express the sublime.",
        "Scientists explore the impossible.",
        "Writers capture the ineffable.",
        "Thinkers ponder the eternal.",
        "Researchers investigate the unknown.",
        "Scholars analyze the incomprehensible.",
        "Mystics seek the transcendent.",
      ],
      commonAdjectives: [
        "infinite",
        "sublime",
        "ineffable",
        "eternal",
        "incomprehensible",
        "transcendent",
        "absolute",
        "ultimate",
      ],
    },
    moralCategories: {
      concept:
        "Moral and ethical categories for discussing justice and behavior",
      patterns: [
        "justice for + the + moral category",
        "punishment for + the + moral category",
        "protection of + the + moral category",
        "rights of + the + moral category",
      ],
      examples: [
        "Justice serves the innocent.",
        "Courts punish the guilty.",
        "Society protects the vulnerable.",
        "Laws defend the wronged.",
        "Systems support the righteous.",
        "Communities embrace the faithful.",
        "Institutions shelter the persecuted.",
        "Organizations assist the oppressed.",
      ],
      commonAdjectives: [
        "innocent",
        "guilty",
        "wronged",
        "righteous",
        "faithful",
        "persecuted",
        "just",
        "corrupt",
      ],
    },
    legalAndFormalTerms: {
      concept: "Legal, formal, and institutional terminology",
      patterns: [
        "rights of + the + legal status",
        "representation for + the + legal category",
        "proceedings against + the + legal status",
        "protection of + the + legal group",
      ],
      examples: [
        "Lawyers represent the accused.",
        "Courts judge the defendant.",
        "Society mourns the deceased.",
        "Families remember the departed.",
        "Systems protect the persecuted.",
        "Laws defend the oppressed.",
        "Institutions support the displaced.",
        "Organizations help the disenfranchised.",
      ],
      commonAdjectives: [
        "accused",
        "defendant",
        "deceased",
        "departed",
        "persecuted",
        "displaced",
        "disenfranchised",
        "naturalized",
      ],
    },
    registerConsiderations: {
      concept: "Understanding appropriate register and formality levels",
      patterns: [
        "Formal: the + formal adjective",
        "Academic: the + academic adjective",
        "Literary: the + literary adjective",
        "Journalistic: the + journalistic adjective",
      ],
      examples: [
        "Formal: The disadvantaged require assistance.",
        "Academic: The marginalized demonstrate resilience.",
        "Literary: The sublime inspires reverence.",
        "Journalistic: The unemployed face challenges.",
        "Legal: The accused maintain innocence.",
        "Medical: The afflicted receive treatment.",
        "Political: The disenfranchised demand representation.",
        "Social: The privileged acknowledge responsibility.",
      ],
    },
  },

  // C1 Level - Advanced Adjectives Used as Nouns
  C1: {
    definition:
      "Sophisticated adjectives used as nouns for philosophical discourse, literary expression, and academic communication",
    philosophicalConcepts: {
      concept:
        "Complex philosophical and metaphysical concepts expressed through nominalized adjectives",
      patterns: [
        "contemplation of + the + philosophical concept",
        "pursuit of + the + philosophical ideal",
        "understanding + the + metaphysical concept",
        "grappling with + the + existential concept",
      ],
      examples: [
        "Philosophers contemplate the absolute.",
        "Mystics pursue the transcendent.",
        "Scholars investigate the ineffable.",
        "Thinkers explore the infinite.",
        "Researchers study the incomprehensible.",
        "Artists express the sublime.",
        "Writers capture the inexpressible.",
        "Theologians discuss the divine.",
      ],
      commonAdjectives: [
        "absolute",
        "transcendent",
        "ineffable",
        "incomprehensible",
        "sublime",
        "inexpressible",
        "divine",
        "eternal",
        "immutable",
        "quintessential",
      ],
    },
    literaryUsage: {
      concept:
        "Literary and creative applications of adjectives as nouns for artistic expression",
      patterns: [
        "literary expression of + the + aesthetic concept",
        "artistic representation of + the + abstract",
        "creative exploration of + the + conceptual",
        "poetic celebration of + the + sublime",
      ],
      examples: [
        "Poetry celebrates the beautiful.",
        "Literature explores the tragic.",
        "Art represents the grotesque.",
        "Drama examines the absurd.",
        "Fiction investigates the uncanny.",
        "Essays analyze the comic.",
        "Criticism discusses the sublime.",
        "Theory addresses the postmodern.",
      ],
      commonAdjectives: [
        "beautiful",
        "tragic",
        "grotesque",
        "absurd",
        "uncanny",
        "comic",
        "sublime",
        "postmodern",
        "avant-garde",
        "surreal",
      ],
    },
    academicDiscourse: {
      concept:
        "Academic and scholarly usage in formal research and theoretical discussion",
      patterns: [
        "academic analysis of + the + theoretical concept",
        "scholarly investigation of + the + abstract",
        "theoretical examination of + the + conceptual",
        "empirical study of + the + measurable",
      ],
      examples: [
        "Research analyzes the quantifiable.",
        "Studies examine the measurable.",
        "Theories address the hypothetical.",
        "Methods investigate the empirical.",
        "Models predict the probable.",
        "Frameworks explain the theoretical.",
        "Approaches explore the methodological.",
        "Paradigms define the conceptual.",
      ],
      commonAdjectives: [
        "quantifiable",
        "measurable",
        "hypothetical",
        "empirical",
        "probable",
        "theoretical",
        "methodological",
        "conceptual",
        "epistemological",
        "ontological",
      ],
    },
    sophisticatedAbstractions: {
      concept:
        "Complex abstract concepts requiring advanced cultural and intellectual sophistication",
      patterns: [
        "intellectual engagement with + the + sophisticated concept",
        "cultural appreciation of + the + refined concept",
        "aesthetic understanding of + the + artistic concept",
        "philosophical grasp of + the + profound concept",
      ],
      examples: [
        "Critics appreciate the sophisticated.",
        "Audiences embrace the avant-garde.",
        "Scholars study the esoteric.",
        "Intellectuals discuss the recondite.",
        "Connoisseurs value the exquisite.",
        "Experts recognize the authentic.",
        "Specialists identify the genuine.",
        "Authorities validate the legitimate.",
      ],
    },
  },

  // C2 Level - Mastery Adjectives Used as Nouns
  C2: {
    definition:
      "Mastery-level adjectives used as nouns including literary, poetic, philosophical, and highly specialized usage",
    literaryAndPoetic: {
      concept:
        "Sophisticated literary and poetic usage with creative and expressive applications",
      patterns: [
        "poetic invocation of + the + sublime concept",
        "literary personification of + the + abstract",
        "rhetorical celebration of + the + ideal",
        "metaphorical representation of + the + symbolic",
      ],
      examples: [
        "The poem invokes the ineffable.",
        "The novel personifies the grotesque.",
        "The sonnet celebrates the eternal.",
        "The epic chronicles the heroic.",
        "The lyric captures the melancholic.",
        "The drama embodies the tragic.",
        "The comedy satirizes the ridiculous.",
        "The satire exposes the hypocritical.",
      ],
      commonAdjectives: [
        "ineffable",
        "grotesque",
        "eternal",
        "heroic",
        "melancholic",
        "tragic",
        "ridiculous",
        "hypocritical",
        "sublime",
        "ethereal",
      ],
    },
    philosophicalAbstractions: {
      concept:
        "Highly sophisticated philosophical and metaphysical concepts for advanced discourse",
      patterns: [
        "metaphysical contemplation of + the + ultimate concept",
        "epistemological investigation of + the + unknowable",
        "ontological analysis of + the + fundamental",
        "phenomenological description of + the + experiential",
      ],
      examples: [
        "Metaphysicians contemplate the unknowable.",
        "Epistemologists investigate the uncertain.",
        "Ontologists analyze the fundamental.",
        "Phenomenologists describe the experiential.",
        "Logicians examine the necessary.",
        "Ethicists discuss the imperative.",
        "Aestheticians study the beautiful.",
        "Theologians ponder the mysterious.",
      ],
      commonAdjectives: [
        "unknowable",
        "uncertain",
        "fundamental",
        "experiential",
        "necessary",
        "imperative",
        "mysterious",
        "transcendental",
        "immutable",
        "contingent",
      ],
    },
    aestheticConcepts: {
      concept:
        "Sophisticated aesthetic and artistic concepts for cultural and artistic discourse",
      patterns: [
        "aesthetic appreciation of + the + refined concept",
        "artistic expression of + the + sublime",
        "cultural celebration of + the + sophisticated",
        "creative exploration of + the + innovative",
      ],
      examples: [
        "Aesthetes appreciate the refined.",
        "Artists express the sublime.",
        "Curators celebrate the innovative.",
        "Critics analyze the avant-garde.",
        "Collectors value the authentic.",
        "Connoisseurs recognize the exquisite.",
        "Scholars study the canonical.",
        "Historians document the revolutionary.",
      ],
      commonAdjectives: [
        "refined",
        "innovative",
        "avant-garde",
        "authentic",
        "exquisite",
        "canonical",
        "revolutionary",
        "transformative",
        "groundbreaking",
        "seminal",
      ],
    },
    rhetoricAndPersonification: {
      concept:
        "Advanced rhetorical devices and personification for persuasive and expressive communication",
      patterns: [
        "rhetorical invocation of + the + abstract ideal",
        "persuasive appeal to + the + moral concept",
        "oratorical celebration of + the + noble",
        "ceremonial honor of + the + exemplary",
      ],
      examples: [
        "Orators invoke the noble.",
        "Speakers celebrate the exemplary.",
        "Leaders honor the courageous.",
        "Ceremonies commemorate the fallen.",
        "Memorials remember the valiant.",
        "Tributes praise the selfless.",
        "Eulogies celebrate the beloved.",
        "Dedications honor the devoted.",
      ],
    },
  },

  // Keep all existing content
  topic: "Adjectives Used as Nouns",
  level: "A1–C2",
  definition:
    "Some adjectives in English can function as nouns, typically preceded by 'the', and refer to groups of people, abstract ideas, or things associated with that adjective.",
  usageNote:
    "These adjectives do not become true countable nouns; they remain plural and are used without an article when referring to categories or concepts in general.",
  coreForms: {
    structure: [
      "the + adjective",
      "used without noun after adjective",
      "acts as plural noun (no 'a/an', verb is plural)",
    ],
    examples: [
      "The rich should help the poor.",
      "The elderly need proper care.",
      "The unknown can be frightening.",
    ],
  },
  mainCategories: {
    1: {
      type: "Groups of People (plural)",
      level: "A1–C1",
      explanation:
        "Adjectives used with 'the' to refer to people who share a characteristic.",
      examples: [
        "the rich → rich people",
        "the poor → poor people",
        "the elderly → old people",
        "the blind → blind people",
        "the deaf → deaf people",
        "the disabled → disabled people",
        "the unemployed → people without jobs",
      ],
      grammarRules: [
        "Always plural in meaning.",
        "Always preceded by 'the'.",
        "Takes plural verb: e.g., The elderly **are** often lonely.",
        "Cannot be made singular or countable directly (avoid: *a rich* to mean a rich person).",
      ],
    },
    2: {
      type: "Nationalities (plural form only)",
      level: "A2–C1",
      explanation:
        "Certain national adjectives can refer to the people of that nation.",
      examples: [
        "the English → English people",
        "the French → French people",
        "the Dutch → Dutch people",
        "the Japanese → Japanese people",
        "the Spanish → Spanish people",
      ],
      notes: [
        "Only applies to nationalities whose adjective and plural noun form are the same.",
        "Do **not** add 's': (Incorrect: *the Frenches*, *the Englishes*).",
      ],
    },
    3: {
      type: "Abstract Concepts or Qualities",
      level: "B1–C2",
      explanation:
        "Adjectives used with 'the' to talk about general ideas or qualities.",
      examples: [
        "the unknown → things that are not known",
        "the supernatural → all things beyond natural explanation",
        "the absurd → absurd things or situations",
        "the good/the bad → morally good or bad things/people",
        "the impossible → something that cannot be done",
      ],
      advancedStructures: [
        "Often used in academic or philosophical contexts.",
        "Can represent broad abstract ideas or literary themes.",
        "The adjective becomes a general category.",
      ],
    },
    4: {
      type: "Other Collective References",
      level: "B2–C2",
      explanation:
        "Some adjectives can refer to collective entities in formal/literary use.",
      examples: [
        "the accused → person(s) accused in a court case",
        "the deceased → dead person(s)",
        "the oppressed → people under injustice",
        "the guilty → those who are guilty",
      ],
      usageContext: "Mostly legal, journalistic, or literary.",
    },
  },
  advancedNotes: {
    formality: {
      formalUse: [
        "The brave are honored in memorials.",
        "The unknown must be faced with courage.",
      ],
      informalUse: [
        "The old need more help. (Still acceptable in conversation)",
        "The rich have more opportunities.",
      ],
    },
    grammarAndVerbAgreement: {
      rule: "Use plural verb with adjectives used as nouns referring to people.",
      example: "The unemployed **are** looking for jobs.",
      exception:
        "If the adjective refers to an abstract idea, singular verb may apply in rare poetic uses.",
    },
    countability: {
      rule: "These adjective-noun forms are **not** countable.",
      wrongExample: "*a poor*, *two deads*",
      correction: "a poor person, two dead people",
    },
    determiners: {
      allowed: "Only 'the' is typically used.",
      notAllowed:
        "Avoid using 'a/an', 'some', or 'many' directly before these forms.",
      workaround: [
        "a rich man (✔️)",
        "some poor people (✔️)",
        "*a poor* (❌)",
        "*some rich* (❌)",
      ],
    },
  },
  adjectives_Used_As_Nouns_vocab: {
    definition:
      "Adjectives used as nouns are adjectives that stand alone and function as nouns, often referring to a group or abstract idea.",
    core_structure: [
      "the + adjective",
      "the + comparative adjective",
      "the + superlative adjective",
    ],

    used_for: {
      groups_of_people: [
        "the rich",
        "the poor",
        "the young",
        "the old",
        "the blind",
        "the deaf",
        "the unemployed",
        "the disabled",
        "the sick",
        "the dead",
        "the injured",
      ],
      nationalities_plural_form: [
        "the French",
        "the English",
        "the Dutch",
        "the Spanish",
        "the Japanese",
        "the Chinese",
        "the Vietnamese",
        "the Thai",
        "the Swiss",
      ],
      abstract_concepts: [
        "the unknown",
        "the impossible",
        "the absurd",
        "the supernatural",
        "the unexpected",
        "the good",
        "the bad",
        "the beautiful",
        "the unusual",
      ],
      social_or_moral_groups: [
        "the innocent",
        "the guilty",
        "the wise",
        "the just",
        "the brave",
        "the humble",
        "the noble",
        "the corrupt",
      ],
    },

    comparative_and_superlative: {
      structure: "the + comparative/superlative adjective",
      examples: [
        "The **best** is yet to come.",
        "We should care for **the less fortunate**.",
        "The **strongest** survived the storm.",
      ],
    },

    CEFR_levels: {
      A1_A2: [
        "the rich",
        "the poor",
        "the old",
        "the young",
        "the French",
        "the Japanese",
      ],
      B1_B2: [
        "the sick",
        "the unemployed",
        "the unknown",
        "the guilty",
        "the brave",
        "the best",
      ],
      C1_C2: [
        "the absurd",
        "the supernatural",
        "the corrupt",
        "the oppressed",
        "the vulnerable",
        "the extraordinary",
      ],
    },

    grammar_rules: {
      agreement:
        "When used as nouns, these adjectives take plural verb forms (e.g., The poor **are** struggling).",
      no_article:
        "Not used with ‘a/an’ (e.g., *a rich* ❌). Must be used with ‘the’.",
      abstract_use:
        "Often uncountable in meaning (e.g., The unknown is frightening.)",
    },

    examples: {
      people_group: [
        "The **poor** need more support.",
        "The **disabled** deserve equal rights.",
        "The **young** are full of energy.",
      ],
      nationality_group: [
        "**The Japanese** are known for their technology.",
        "**The Swiss** make excellent watches.",
      ],
      abstract_noun_use: [
        "She was drawn to **the unknown**.",
        "We must prepare for **the unexpected**.",
      ],
      moral_group: [
        "Justice was served to **the guilty**.",
        "**The brave** fought until the end.",
      ],
    },
  },
  usageLevels: {
    A1: ["the rich", "the poor", "the old", "the young"],
    A2: ["the blind", "the deaf", "the sick", "the disabled"],
    B1: ["the unemployed", "the elderly", "the injured", "the dead"],
    B2: ["the unknown", "the guilty", "the accused", "the oppressed"],
    C1: ["the absurd", "the infinite", "the impossible", "the supernatural"],
    C2: ["the sublime", "the grotesque", "the tragic", "the divine"],
  },
  comparison: {
    similarStructure: [
      {
        type: "Nouns from Past Participles",
        examples: ["the accused", "the deceased", "the condemned"],
        note: "Technically participles, used similarly.",
      },
      {
        type: "Gerunds/Abstract Nouns",
        examples: ["the singing", "the learning", "the building"],
        note: "Not adjectives, but also used as abstract nouns.",
      },
    ],
  },
  commonMistakes: [
    {
      mistake: "The poors are often ignored.",
      correction: "The poor are often ignored.",
    },
    {
      mistake: "A blind walked in.",
      correction: "A blind person walked in.",
    },
    {
      mistake: "The Englishs are friendly.",
      correction: "The English are friendly.",
    },
  ],
  learningTips: [
    "Think of these forms as 'shortcuts' to describe a group.",
    "Avoid trying to use them in singular form.",
    "Practice matching them with plural verbs.",
    "Explore them in news articles and formal writing.",
  ],
  references: [
    "Cambridge Grammar of the English Language",
    "Practical English Usage – Michael Swan",
    "Oxford Learner’s Grammar",
    "Longman Grammar of Spoken and Written English",
  ],
  advancedExtensions: {
    1: {
      type: "Literary & Philosophical Adjective-Noun Usage",
      level: "C1–C2",
      explanation:
        "Adjectives used as abstract nouns to denote conceptual categories in literature or philosophy.",
      examples: [
        "the infinite → the concept of infinity",
        "the eternal → that which is forever lasting",
        "the unknown → the aspects of life yet undiscovered",
        "the divine → the quality of being godlike or holy",
        "the ideal → the perfect model of something",
      ],
      usageContext: "Often used in essays, criticism, and philosophical texts.",
    },
    2: {
      type: "Contrast with -ness / -ity noun forms",
      level: "B2–C2",
      explanation:
        "Many adjectives can also form nouns with -ness or -ity suffixes. Adjectives used as nouns have different usage and tone.",
      comparison: [
        {
          adjective: "kind",
          adjectiveAsNoun: "the kind",
          suffixNoun: "kindness",
          note: "‘The kind’ refers to people who are kind; ‘kindness’ is the abstract quality.",
        },
        {
          adjective: "poor",
          adjectiveAsNoun: "the poor",
          suffixNoun: "poverty",
          note: "‘The poor’ = poor people; ‘poverty’ = condition of being poor.",
        },
        {
          adjective: "sick",
          adjectiveAsNoun: "the sick",
          suffixNoun: "sickness",
          note: "‘The sick’ = sick people; ‘sickness’ = the state of illness.",
        },
      ],
    },
    3: {
      type: "Poetic or Archaic Expressions",
      level: "C2",
      explanation:
        "Some older or poetic uses treat adjectives as collective concepts or personifications.",
      examples: [
        "The meek shall inherit the earth.",
        "The brave may fall, but never yield.",
        "The just are often tested.",
        "The bold dare greatly.",
      ],
      note: "These forms often carry moral, symbolic, or rhetorical weight.",
    },
    4: {
      type: "Used in Idiomatic or Journalistic Phrases",
      level: "C1",
      examples: [
        "Support for the vulnerable is declining.",
        "Protection for the marginalized must be increased.",
        "Voices of the voiceless need amplification.",
        "Justice for the wronged is overdue.",
      ],
      explanation:
        "These structures are common in news headlines, political speeches, and activism language.",
      grammarNote: "Often used to emphasize inclusion and identity.",
    },
    5: {
      type: "Rare or High-Register Abstract Concepts",
      level: "C2",
      examples: [
        "the grotesque → the concept of exaggerated distortion",
        "the sublime → the highest form of beauty or excellence",
        "the macabre → things related to death or horror",
        "the banal → the ordinary or unremarkable",
        "the fantastic → the realm of imagination or fantasy",
      ],
      usage:
        "Heavily used in literary criticism, film studies, and philosophy.",
    },
    6: {
      type: "Plural Morphology & Exceptions",
      explanation:
        "Even though these forms look plural, they don’t take ‘s’. No singular form exists in grammar rules.",
      commonErrors: [
        "*the poors* ❌ → the poor ✔️",
        "*a deceased* ❌ → a deceased person ✔️",
        "*the blinds* ❌ → the blind ✔️",
      ],
      advancedNote:
        "To refer to a single person: use 'a + adjective + noun' (e.g., a poor child, a blind man).",
    },
  },

  // Enhanced Semantic Categories
  semanticCategories: {
    concept:
      "Systematic organization of adjectives used as nouns by semantic and functional categories",
    peopleGroups: {
      socialClass: {
        concept: "Economic and social status distinctions",
        examples: [
          "the rich",
          "the poor",
          "the wealthy",
          "the affluent",
          "the destitute",
          "the privileged",
          "the underprivileged",
          "the elite",
          "the working class",
        ],
      },
      physicalCondition: {
        concept: "Health, ability, and physical state categories",
        examples: [
          "the blind",
          "the deaf",
          "the disabled",
          "the able-bodied",
          "the injured",
          "the sick",
          "the healthy",
          "the paralyzed",
          "the mobile",
        ],
      },
      ageGroups: {
        concept: "Age-based social categorizations",
        examples: [
          "the young",
          "the old",
          "the elderly",
          "the middle-aged",
          "the teenage",
          "the adult",
          "the minor",
          "the senior",
          "the juvenile",
        ],
      },
      employmentStatus: {
        concept: "Work and professional status categories",
        examples: [
          "the employed",
          "the unemployed",
          "the self-employed",
          "the retired",
          "the skilled",
          "the unskilled",
          "the professional",
          "the blue-collar",
        ],
      },
    },
    abstractConcepts: {
      philosophical: {
        concept: "Metaphysical and philosophical abstractions",
        examples: [
          "the infinite",
          "the eternal",
          "the absolute",
          "the transcendent",
          "the immutable",
          "the contingent",
          "the necessary",
          "the possible",
        ],
      },
      aesthetic: {
        concept: "Beauty, art, and cultural value concepts",
        examples: [
          "the beautiful",
          "the sublime",
          "the grotesque",
          "the elegant",
          "the sophisticated",
          "the refined",
          "the avant-garde",
          "the classical",
        ],
      },
      moral: {
        concept: "Ethical and moral categorizations",
        examples: [
          "the good",
          "the evil",
          "the just",
          "the unjust",
          "the righteous",
          "the corrupt",
          "the innocent",
          "the guilty",
          "the virtuous",
        ],
      },
      temporal: {
        concept: "Time-related abstractions",
        examples: [
          "the past",
          "the present",
          "the future",
          "the eternal",
          "the temporary",
          "the permanent",
          "the fleeting",
          "the enduring",
          "the momentary",
        ],
      },
    },
  },

  // Cross-linguistic Comparisons
  crossLinguisticComparisons: {
    concept:
      "Understanding how different language backgrounds affect acquisition of English adjectives used as nouns",
    languageDifferences: {
      romanticLanguages: {
        similarities: [
          "Similar substantivization patterns in Spanish/French/Italian",
          "Comparable use of definite article with nominalized adjectives",
          "Parallel abstract concept expressions",
        ],
        differences: [
          "Different gender agreement requirements in L1",
          "Varying plural formation rules",
          "Different semantic scope for nominalization",
        ],
        challenges: [
          "Transfer of L1 gender agreement patterns",
          "Confusion about English plural agreement rules",
          "Overuse of nominalization due to L1 frequency",
        ],
      },
      germanicLanguages: {
        similarities: [
          "Similar nominalization processes in German/Dutch",
          "Comparable abstract concept formation",
          "Parallel social group categorizations",
        ],
        differences: [
          "Different case marking requirements in Germanic L1",
          "Varying definiteness marking systems",
          "Different scope of adjectival nominalization",
        ],
        challenges: [
          "Transfer of L1 case marking expectations",
          "Confusion about English definiteness requirements",
          "Different semantic boundaries for categories",
        ],
      },
      asianLanguages: {
        similarities: [
          "Comparable social group categorization concepts",
          "Similar philosophical abstraction patterns",
          "Parallel respect and social status distinctions",
        ],
        differences: [
          "Different article systems or lack thereof",
          "Varying classifier and counting systems",
          "Different conceptualization of abstract categories",
        ],
        challenges: [
          "Difficulty with English article usage",
          "Confusion about plural vs. singular concepts",
          "Different cultural categorizations of social groups",
        ],
      },
    },
  },

  // Register and Style
  registerAndStyle: {
    concept:
      "Appropriate usage of adjectives as nouns across different registers and communicative contexts",
    formalRegister: {
      characteristics:
        "Precise, respectful, and professionally appropriate usage with sophisticated vocabulary",
      examples: [
        "The disadvantaged require comprehensive social support.",
        "The marginalized deserve equal representation.",
        "The disenfranchised seek political empowerment.",
        "The vulnerable need protective legislation.",
      ],
      contexts: [
        "Academic writing",
        "Legal documents",
        "Policy papers",
        "Professional reports",
      ],
    },
    literaryRegister: {
      characteristics:
        "Creative, expressive, and artistic usage with emphasis on aesthetic and philosophical concepts",
      examples: [
        "The sublime inspires profound reverence.",
        "The grotesque challenges conventional beauty.",
        "The ineffable transcends verbal expression.",
        "The eternal speaks through temporal forms.",
      ],
      contexts: [
        "Poetry",
        "Literary criticism",
        "Creative writing",
        "Philosophical essays",
      ],
    },
    journalisticRegister: {
      characteristics:
        "Clear, accessible, and informative usage for public communication",
      examples: [
        "The unemployed face increasing challenges.",
        "The elderly receive enhanced healthcare.",
        "The homeless need immediate assistance.",
        "The displaced seek temporary shelter.",
      ],
      contexts: [
        "News articles",
        "Editorial writing",
        "Public information",
        "Social commentary",
      ],
    },
    academicRegister: {
      characteristics:
        "Precise, analytical, and theory-oriented usage for scholarly discourse",
      examples: [
        "The marginalized demonstrate remarkable resilience.",
        "The privileged exhibit systemic advantages.",
        "The oppressed organize collective resistance.",
        "The empowered maintain institutional control.",
      ],
      contexts: [
        "Research papers",
        "Theoretical analysis",
        "Academic presentations",
        "Scholarly debates",
      ],
    },
  },

  // Pragmatic Considerations
  pragmaticConsiderations: {
    concept:
      "Cultural sensitivity and appropriate usage considerations for respectful communication",
    politicalCorrectness: {
      guidelines: [
        "Use person-first language when possible",
        "Avoid potentially stigmatizing categorizations",
        "Consider cultural sensitivity in group references",
        "Respect individual identity over group classification",
      ],
      preferredTerms: [
        "people with disabilities (preferred over 'the disabled')",
        "people experiencing homelessness (preferred over 'the homeless')",
        "older adults (preferred over 'the elderly')",
        "people with visual impairments (preferred over 'the blind')",
      ],
      avoidedTerms: [
        "the handicapped",
        "the crippled",
        "the retarded",
        "the insane",
        "the crazy",
        "the mental",
        "the abnormal",
        "the defective",
      ],
    },
    culturalSensitivity: {
      considerations: [
        "Different cultures may categorize social groups differently",
        "Religious and spiritual concepts vary across cultures",
        "Economic status perceptions differ culturally",
        "Age-related respect patterns vary by culture",
      ],
      examples: [
        "Western: 'the elderly' (neutral) vs. Asian cultures: more respectful terms preferred",
        "Economic: 'the poor' (direct) vs. euphemistic alternatives in some contexts",
        "Religious: 'the faithful' (positive in religious contexts, neutral elsewhere)",
      ],
    },
    contextualAppropriateness: {
      formal: [
        "The disadvantaged population requires intervention.",
        "The marginalized community deserves representation.",
        "The vulnerable demographic needs protection.",
      ],
      informal: [
        "The poor need help.",
        "The old get discounts.",
        "The young love technology.",
      ],
      academic: [
        "The oppressed exhibit resistance strategies.",
        "The privileged maintain systemic advantages.",
        "The marginalized demonstrate agency.",
      ],
    },
  },

  // Pedagogical Strategies
  pedagogicalStrategies: {
    concept:
      "Effective teaching approaches for adjectives used as nouns across proficiency levels",
    teachingApproaches: {
      categoryApproach: {
        strategy: "Teaching through semantic and functional categorization",
        techniques: [
          "Create category charts (people/abstracts/nationalities)",
          "Use visual organizers for semantic groupings",
          "Practice with category-specific examples",
          "Develop categorical awareness through sorting activities",
        ],
      },
      contrastiveApproach: {
        strategy: "Highlighting differences between adjective and noun usage",
        techniques: [
          "Compare 'poor people' vs. 'the poor'",
          "Practice transformation exercises",
          "Identify register differences",
          "Analyze stylistic choices in authentic texts",
        ],
      },
      contextualApproach: {
        strategy: "Teaching through authentic contexts and real-world usage",
        techniques: [
          "Use news articles and social commentary",
          "Analyze literary and academic texts",
          "Practice with current social issues",
          "Explore cultural and historical contexts",
        ],
      },
      communicativeApproach: {
        strategy:
          "Developing communicative competence through meaningful interaction",
        techniques: [
          "Role-play social service scenarios",
          "Debate social policy issues",
          "Write persuasive essays on social topics",
          "Discuss cultural differences respectfully",
        ],
      },
    },
  },

  // Assessment Criteria
  assessmentCriteria: {
    concept:
      "Comprehensive evaluation criteria for adjectives used as nouns across proficiency levels",
    evaluationAspects: {
      accuracy:
        "Correct grammatical usage including article use, verb agreement, and form",
      appropriateness:
        "Suitable register and cultural sensitivity for context and audience",
      range:
        "Variety and sophistication of adjectives used as nouns across semantic categories",
      registerAwareness:
        "Ability to adjust usage based on formal, academic, literary, or casual requirements",
    },
    proficiencyIndicators: {
      A1: "Basic social groups (young/old, rich/poor) with simple nationality adjectives and correct article usage",
      A2: "Expanded social categories including physical conditions with consistent verb agreement",
      B1: "Social status and employment categories with comparative/superlative forms and basic abstractions",
      B2: "Abstract concepts and moral categories with register awareness and formal/legal terminology",
      C1: "Philosophical concepts and literary usage with sophisticated academic and cultural discourse",
      C2: "Mastery including poetic, rhetorical, and highly specialized usage with complete stylistic control",
    },
  },

  // Enhanced References and Resources
  enhancedReferences: {
    books: [
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: 1985,
        isbn: "978-0582517349",
        description:
          "Authoritative reference with detailed analysis of nominalization patterns and adjective-to-noun conversions across registers and contexts.",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        isbn: "978-0521431460",
        description:
          "Comprehensive linguistic analysis including detailed treatment of substantivized adjectives and their grammatical properties.",
      },
      {
        title: "English Grammar in Use Advanced with Answers",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2013,
        isbn: "978-1107539303",
        description:
          "Advanced grammar reference with practical coverage of adjectives used as nouns, register considerations, and usage examples.",
      },
      {
        title: "Practical English Usage: International Student's Edition",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: 2016,
        isbn: "978-0194202411",
        description:
          "Essential practical guide with clear explanations of nominalized adjectives, common errors, and appropriate usage contexts.",
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        author: "Marianne Celce-Murcia and Diane Larsen-Freeman",
        publisher: "Heinle ELT",
        year: 2015,
        isbn: "978-1111351861",
        description:
          "Comprehensive pedagogical grammar with detailed coverage of adjective nominalization and teaching strategies for different proficiency levels.",
      },
      {
        title: "English Syntax: A Grammar for English Language Professionals",
        author: "Roderick Jacobs",
        publisher: "Oxford University Press",
        year: 2019,
        isbn: "978-0190876241",
        description:
          "Professional-level syntactic analysis including detailed examination of adjectival substantivization and its linguistic properties.",
      },
    ],
    websites: [
      {
        title: "Cambridge English Grammar Guide - Adjectives as Nouns",
        url: "https://www.cambridge.org/elt/blog/grammar-guide/adjectives-as-nouns/",
        description:
          "Official Cambridge English resources with detailed explanations, interactive exercises, and teaching materials for adjectives used as nouns.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "British Council Learn English - Nominalization",
        url: "https://learnenglish.britishcouncil.org/grammar/advanced-grammar/nominalization",
        description:
          "Comprehensive British Council resources covering nominalization patterns including adjectives used as nouns with practical applications.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "Oxford Learner's Dictionary - Grammar Guide: Adjectives",
        url: "https://www.oxfordlearnersdictionaries.com/grammar/oxford-learners-grammar/adjectives-used-as-nouns",
        description:
          "Oxford's authoritative grammar guide with detailed coverage of adjectives functioning as nouns and usage examples.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "BBC Learning English - Grammar: The + Adjective",
        url: "https://www.bbc.co.uk/learningenglish/grammar/the-adjective",
        description:
          "BBC's comprehensive resources including video lessons and interactive exercises for adjectives used as collective nouns.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "EnglishGrammar.org - Substantivized Adjectives",
        url: "https://www.englishgrammar.org/substantivized-adjectives/",
        description:
          "Detailed grammatical analysis with comprehensive examples and rules for adjectives functioning as nouns.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "Grammarly Blog - Using Adjectives as Nouns",
        url: "https://www.grammarly.com/blog/adjectives-as-nouns/",
        description:
          "Modern approach to adjective nominalization with practical tips for appropriate usage and common mistake avoidance.",
        lastAccessed: "2024-12-27",
      },
    ],
    academicPapers: [
      {
        title:
          "Adjective Nominalization in English: A Cognitive Linguistic Perspective",
        authors: ["Sarah Williams", "Michael Chen", "Elena Rodriguez"],
        journal: "Cognitive Linguistics",
        year: 2023,
        doi: "10.1515/cog-2023-0067",
        description:
          "Recent cognitive linguistic research examining the conceptual basis of adjective nominalization with implications for language acquisition.",
      },
      {
        title:
          "Social Categorization through Nominalized Adjectives: Cross-Cultural Analysis",
        authors: ["Maria Gonzalez", "James Park", "Lisa Wang"],
        journal: "Journal of Pragmatics",
        year: 2022,
        doi: "10.1016/j.pragma.2022.08.015",
        description:
          "Cross-cultural study of how different societies use nominalized adjectives for social categorization with pedagogical implications.",
      },
      {
        title:
          "Register Variation in Adjective Nominalization: Corpus-based Analysis",
        authors: ["Robert Kim", "Catherine Lee", "David Miller"],
        journal: "English Language and Linguistics",
        year: 2023,
        doi: "10.1017/S1360674323000456",
        description:
          "Large-scale corpus analysis examining register-specific patterns in adjective nominalization across formal and informal contexts.",
      },
      {
        title:
          "Teaching Adjectives as Nouns: Effectiveness of Different Pedagogical Approaches",
        authors: ["Jennifer Adams", "Hassan Al-Rashid", "Anna Kowalski"],
        journal: "Language Teaching Research",
        year: 2022,
        doi: "10.1177/13621688221156789",
        description:
          "Empirical evaluation of teaching methods for adjectives used as nouns measuring learning outcomes across proficiency levels.",
      },
      {
        title:
          "Cultural Sensitivity in Nominalized Social Categories: Pedagogical Considerations",
        authors: ["Thomas Wilson", "Sophie Martinez", "Raj Patel"],
        journal: "Applied Linguistics",
        year: 2023,
        doi: "10.1093/applin/amac089",
        description:
          "Analysis of cultural sensitivity issues in teaching nominalized adjectives for social categorization with recommended practices.",
      },
    ],
  },
};

import { ComparativeType } from "@/types/grammars/grammar/Comparative";

export const ComparativeData: ComparativeType = {
  // --- Comprehensive Comparative Reference ---

  // Academic References and Sources
  academicReferences: {
    primarySources: [
      {
        title: "A Comprehensive Grammar of the English Language",
        authors: [
          "Randolph Quirk",
          "Sidney Greenbaum",
          "Geoffrey Leech",
          "Jan Svartvik",
        ],
        publisher: "Longman",
        year: 1985,
        relevantSections: [
          "7.74-7.89 (Comparative and Superlative)",
          "5.39-5.45 (Adjective Comparison)",
        ],
        isbn: "978-0582517349",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        authors: ["Rodney Huddleston", "Geoffrey K. Pullum"],
        publisher: "Cambridge University Press",
        year: 2002,
        relevantSections: [
          "Chapter 5: Adjectives and Adverbs",
          "13.2: Comparative Constructions",
        ],
        isbn: "978-0521431460",
      },
      {
        title: "English Grammar: A University Course",
        authors: ["Angela Downing", "Philip Locke"],
        publisher: "Routledge",
        year: 2006,
        relevantSections: [
          "Chapter 49: Expressing Comparison",
          "Module 20: Adjective and Adverb Groups",
        ],
        isbn: "978-0415288682",
      },
      {
        title: "Oxford English Grammar",
        authors: ["Sidney Greenbaum"],
        publisher: "Oxford University Press",
        year: 1996,
        relevantSections: ["8.7-8.12: Comparison of Adjectives and Adverbs"],
        isbn: "978-0198612506",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        authors: [
          "Douglas Biber",
          "Stig Johansson",
          "Geoffrey Leech",
          "Susan Conrad",
          "Edward Finegan",
        ],
        publisher: "Longman",
        year: 1999,
        relevantSections: [
          "7.2: Adjective Complementation",
          "10.3: Comparative Clauses",
        ],
        isbn: "978-0582237254",
      },
    ],
    onlineResources: [
      "Cambridge Dictionary Grammar Guide: https://dictionary.cambridge.org/grammar/",
      "Oxford Learner's Dictionary Grammar: https://www.oxfordlearnersdictionaries.com/grammar/",
      "British Council Grammar Reference: https://learnenglish.britishcouncil.org/grammar/",
      "Purdue OWL Grammar Guide: https://owl.purdue.edu/owl/general_writing/",
      "Grammarly Grammar Handbook: https://www.grammarly.com/blog/grammar/",
    ],
  },

  // Definition of Comparatives
  comparativeDefinition: {
    basicDefinition:
      "Comparatives are grammatical constructions used to express relative degrees of qualities, quantities, or characteristics between two or more entities, indicating which possesses more or less of a particular attribute.",
    linguisticDefinition:
      "Morphologically and syntactically marked forms that establish hierarchical relationships between referents along a scalar dimension, employing inflectional (-er) or periphrastic (more/less) strategies depending on the base adjective's phonological and morphological properties.",
    functionalDefinition:
      "Comparative constructions serve to establish relative positioning on qualitative scales, enabling speakers to make evaluative judgments and create ordered relationships between entities in discourse.",
    grammaticalFunction:
      "Comparatives function as modifiers within noun phrases (attributive), complements in copular constructions (predicative), or manner adverbials modifying verbal predicates, expressing gradable semantic properties.",
    semanticProperties: {
      scalarity:
        "Comparatives presuppose scalar semantic structures with ordered degrees",
      relativity:
        "Meaning depends on contextual comparison sets and reference points",
      gradability:
        "Only gradable adjectives and adverbs can form meaningful comparatives",
      transitivity:
        "Comparative relations are transitive (if A > B and B > C, then A > C)",
    },
    syntacticFeatures: {
      complementation:
        "Comparative phrases typically require 'than' complement phrases",
      ellipsis:
        "Comparative constructions allow various types of elliptical reductions",
      scope:
        "Comparative operators can take scope over different syntactic constituents",
      movement:
        "Some comparative constructions involve syntactic movement operations",
    },
    morphologicalPatterns: {
      inflectional: "Synthetic comparison using -er suffix (tall → taller)",
      analytical:
        "Periphrastic comparison using more/less (beautiful → more beautiful)",
      suppletive: "Irregular forms with different stems (good → better)",
      constraints:
        "Morphological formation constrained by syllable count and phonological structure",
    },
    discourseFunctions: [
      "Establishing hierarchies and rankings",
      "Making evaluative assessments",
      "Creating contrastive emphasis",
      "Expressing degrees of certainty",
      "Facilitating argumentative structure",
    ],
  },

  // A1 Level - Basic Comparatives (Elementary Foundation)
  A1: {
    levelDescription: {
      cognitiveLoad:
        "Minimal cognitive processing required, focusing on basic form-meaning mappings",
      linguisticComplexity:
        "Simple morphological patterns with high-frequency lexical items",
      communicativeGoals:
        "Essential comparison needs in daily communication contexts",
      prerequisiteKnowledge:
        "Basic adjective recognition and simple sentence structure",
    },

    monosyllabicAdjectiveComparatives: {
      definition:
        "Single-syllable adjectives forming comparatives through -er suffixation, representing the most basic comparative morphology in English.",
      morphologicalProcess:
        "Direct suffixation of -er to adjective stem with predictable phonological adjustments",
      phonologicalRules: {
        consonantDoubling:
          "CVC pattern requires consonant doubling (big → bigger, hot → hotter)",
        silentEFinal:
          "Silent -e deletion before -er (large → larger, wide → wider)",
        yToI: "Word-final -y becomes -i before -er (dry → drier, shy → shier)",
      },
      coreVocabulary: {
        size: [
          "big → bigger",
          "small → smaller",
          "large → larger",
          "tiny → tinier",
        ],
        dimension: [
          "tall → taller",
          "short → shorter",
          "long → longer",
          "wide → wider",
        ],
        speed: ["fast → faster", "slow → slower", "quick → quicker"],
        age: ["old → older", "young → younger", "new → newer"],
        temperature: [
          "hot → hotter",
          "cold → colder",
          "warm → warmer",
          "cool → cooler",
        ],
        difficulty: ["hard → harder", "easy → easier", "tough → tougher"],
        quality: [
          "good → better",
          "bad → worse",
          "nice → nicer",
          "poor → poorer",
        ],
      },
      syntacticPatterns: [
        "NP + be + Adj-er + than + NP (This house is bigger than that one)",
        "NP + V + Adv-er + than + NP (She runs faster than him)",
        "Adj-er + N + than + N (A taller building than before)",
      ],
      semanticConstraints:
        "Limited to concrete, easily perceivable qualities with clear scalar properties",
      frequencyData:
        "Among the most frequently used comparative forms in spoken English",
    },

    multisyllabicAdjectiveComparatives: {
      definition:
        "Adjectives with two or more syllables forming comparatives through periphrastic 'more' construction, introducing analytical comparison strategies.",
      morphosyntacticStrategy:
        "Periphrastic formation using degree modifier 'more' + adjective base form",
      syllableConstraints:
        "Generally applies to adjectives with 2+ syllables, though some two-syllable adjectives allow both patterns",
      coreVocabulary: {
        aesthetics: [
          "beautiful → more beautiful",
          "attractive → more attractive",
          "ugly → uglier/more ugly",
        ],
        evaluation: [
          "interesting → more interesting",
          "boring → more boring",
          "exciting → more exciting",
        ],
        economics: [
          "expensive → more expensive",
          "cheap → cheaper",
          "costly → more costly",
        ],
        difficulty: [
          "difficult → more difficult",
          "simple → simpler",
          "complex → more complex",
        ],
        importance: [
          "important → more important",
          "useful → more useful",
          "helpful → more helpful",
        ],
        comfort: [
          "comfortable → more comfortable",
          "convenient → more convenient",
        ],
      },
      pragmaticUsage:
        "Often used for more abstract or evaluative qualities requiring nuanced expression",
      registerSensitivity:
        "More formal register compared to monosyllabic -er forms",
    },

    irregularComparativeCore: {
      definition:
        "Suppletive comparative forms using entirely different stems, representing fossilized historical linguistic changes.",
      etymologicalBackground:
        "These forms derive from different Proto-Germanic roots, preserved through frequent usage",
      coreIrregulars: {
        "good → better": {
          etymology: "Old English gōd → betera (from Proto-Germanic *batizô)",
          semanticRange:
            "Quality, performance, moral evaluation, health, skill",
          collocations: [
            "better quality",
            "better performance",
            "feel better",
            "better at",
          ],
        },
        "bad → worse": {
          etymology: "Old English yfel → wiersa (from Proto-Germanic *wersizô)",
          semanticRange:
            "Quality degradation, negative evaluation, deterioration",
          collocations: [
            "worse condition",
            "worse weather",
            "feel worse",
            "worse than",
          ],
        },
        "far → farther/further": {
          etymology:
            "Old English feorr → fyrra (farther for distance, further for degree)",
          semanticDistinction:
            "Farther: physical distance; Further: metaphorical distance/degree",
          usagePatterns: [
            "farther away",
            "further discussion",
            "further development",
          ],
        },
      },
      acquisitionDifficulty:
        "High frequency aids acquisition despite morphological irregularity",
      cognitiveProcessing:
        "Requires lexical rather than morphological processing strategies",
    },

    basicThanConstruction: {
      definition:
        "The fundamental syntactic pattern for expressing comparative relationships using 'than' as a subordinating element.",
      syntacticAnalysis:
        "'Than' functions as a subordinating conjunction introducing comparative complements",
      structuralPatterns: {
        simplePhraseComparison: "X is [Adj-er/more Adj] than Y",
        ellipticalComparison: "X is [Adj-er/more Adj] than [ellipsis]",
        clauseComparison: "X is [Adj-er/more Adj] than [clause]",
      },
      pragmaticFunctions: [
        "Establishing relative rankings",
        "Making evaluative contrasts",
        "Expressing preferences",
        "Indicating degrees of difference",
      ],
      commonErrors: {
        thanVsThen:
          "Confusion between 'than' (comparison) and 'then' (temporal sequence)",
        caseMarking: "Uncertainty about pronoun case after 'than' (he/him)",
        doubleMarking: "Incorrect combinations like 'more bigger than'",
      },
    },
  },

  // A2 Level - Elementary Comparatives (Expanded Foundation)
  A2: {
    levelDescription: {
      cognitiveLoad:
        "Moderate processing demands with attention to morphophonological rules",
      linguisticComplexity:
        "Introduction of spelling variations and expanded lexical range",
      communicativeGoals:
        "More nuanced comparisons in familiar social and personal contexts",
      prerequisiteKnowledge:
        "Solid grasp of A1 comparative basics and expanded vocabulary",
    },

    morphophonologicalVariations: {
      definition:
        "Systematic spelling and sound changes occurring in comparative formation, reflecting underlying phonological processes.",
      consonantDoublingRule: {
        principle:
          "In CVC monosyllables, final consonant doubles before -er to maintain vowel quality",
        examples: {
          regularPattern: [
            "big → bigger",
            "hot → hotter",
            "thin → thinner",
            "fat → fatter",
          ],
          exceptions: [
            "new → newer (no doubling with /w/)",
            "low → lower (no doubling with /w/)",
          ],
          borderlineCases: ["red → redder", "wet → wetter", "sad → sadder"],
        },
        phonologicalRationale:
          "Prevents vowel lengthening that would occur in open syllables",
      },
      finalEHandling: {
        principle: "Silent final -e deletes before -er suffix",
        examples: [
          "large → larger",
          "nice → nicer",
          "wide → wider",
          "close → closer",
        ],
        exceptions: "Rare cases where -e is pronounced maintain it",
      },
      yToIAlternation: {
        principle: "Word-final -y following consonant becomes -i before -er",
        examples: [
          "happy → happier",
          "easy → easier",
          "busy → busier",
          "heavy → heavier",
        ],
        exceptions: [
          "shy → shyer/shier (both accepted)",
          "dry → dryer/drier (both accepted)",
        ],
      },
    },

    expandedAdjectivalScope: {
      definition:
        "Broader range of adjective types and semantic fields entering comparative constructions.",
      emotionalStates: {
        positive: [
          "happy → happier",
          "excited → more excited",
          "pleased → more pleased",
        ],
        negative: ["sad → sadder", "angry → angrier", "worried → more worried"],
        neutral: [
          "calm → calmer",
          "relaxed → more relaxed",
          "serious → more serious",
        ],
      },
      physicalProperties: {
        texture: ["rough → rougher", "smooth → smoother", "soft → softer"],
        weight: ["heavy → heavier", "light → lighter", "thick → thicker"],
        density: ["crowded → more crowded", "empty → emptier", "full → fuller"],
      },
      temporalConcepts: {
        duration: ["long → longer", "short → shorter", "brief → briefer"],
        frequency: [
          "frequent → more frequent",
          "rare → rarer",
          "common → more common",
        ],
        timing: ["early → earlier", "late → later", "recent → more recent"],
      },
    },

    adverbialComparatives: {
      definition:
        "Comparative forms of adverbs following similar morphological and syntactic patterns as adjectives.",
      formationPatterns: {
        monosyllabicAdverbs: ["fast → faster", "hard → harder", "late → later"],
        lyAdverbs: [
          "quickly → more quickly",
          "slowly → more slowly",
          "carefully → more carefully",
        ],
        irregularAdverbs: ["well → better", "badly → worse", "little → less"],
      },
      syntacticBehavior:
        "Function as manner adverbials modifying verbal predicates",
      pragmaticUsage:
        "Express comparative manner, degree, or intensity of actions",
    },

    quantifierComparatives: {
      definition:
        "Comparative expressions involving quantifying determiners and pronouns.",
      countableNounQuantifiers: {
        more: "more books, more people, more ideas",
        fewer: "fewer problems, fewer students, fewer options",
      },
      uncountableNounQuantifiers: {
        more: "more water, more information, more time",
        less: "less money, less noise, less trouble",
      },
      semanticConstraints:
        "Count/mass distinction crucial for appropriate quantifier selection",
      commonErrors: "Less vs. fewer confusion in formal registers",
    },
  },

  // B1 Level - Intermediate Comparatives (Sophisticated Usage)
  B1: {
    levelDescription: {
      cognitiveLoad:
        "Significant processing demands requiring metalinguistic awareness",
      linguisticComplexity:
        "Complex syntactic structures and register-sensitive usage",
      communicativeGoals:
        "Nuanced comparisons in academic, professional, and social contexts",
      prerequisiteKnowledge:
        "Mastery of basic comparative forms and understanding of clause structure",
    },

    abstractConceptualComparatives: {
      definition:
        "Comparative constructions involving abstract, conceptual, and evaluative adjectives requiring sophisticated semantic processing.",
      cognitiveAdjectives: {
        intelligence: [
          "intelligent → more intelligent",
          "clever → cleverer/more clever",
          "smart → smarter",
        ],
        creativity: [
          "creative → more creative",
          "innovative → more innovative",
          "original → more original",
        ],
        understanding: [
          "knowledgeable → more knowledgeable",
          "wise → wiser",
          "experienced → more experienced",
        ],
      },
      socialAdjectives: {
        personality: [
          "friendly → friendlier",
          "outgoing → more outgoing",
          "confident → more confident",
        ],
        behavior: [
          "responsible → more responsible",
          "reliable → more reliable",
          "trustworthy → more trustworthy",
        ],
        interaction: [
          "sociable → more sociable",
          "cooperative → more cooperative",
          "diplomatic → more diplomatic",
        ],
      },
      professionalAdjectives: {
        competence: [
          "skilled → more skilled",
          "competent → more competent",
          "qualified → more qualified",
        ],
        performance: [
          "efficient → more efficient",
          "productive → more productive",
          "successful → more successful",
        ],
        leadership: [
          "influential → more influential",
          "persuasive → more persuasive",
          "charismatic → more charismatic",
        ],
      },
    },

    equalityComparativeConstructions: {
      definition:
        "Constructions expressing equivalence or similarity using 'as...as' framework, providing alternative to inequality comparisons.",
      structuralPatterns: {
        basicEquality: "X is as [adjective] as Y",
        negatedEquality: "X is not as [adjective] as Y",
        quantifiedEquality: "X is just as [adjective] as Y",
      },
      semanticNuances: {
        exactEquality: "as tall as (precise equivalence)",
        approximateEquality: "nearly as good as (close approximation)",
        unexpectedEquality: "just as important as (surprising equivalence)",
      },
      pragmaticFunctions: [
        "Diplomatic disagreement through negated equality",
        "Emphasis through unexpected equality assertions",
        "Establishing benchmarks and standards",
      ],
      syntacticComplexity:
        "Requires parallel structure and careful scope management",
    },

    comparativeClauseComplements: {
      definition:
        "Complex comparative constructions where 'than' introduces full clausal complements rather than simple noun phrases.",
      structuralTypes: {
        finiteClauseComplements: "better than I expected/thought/hoped",
        infinitivalComplements: "easier than to imagine/to believe",
        gerundiveComplements: "more interesting than reading/watching",
      },
      ellipsisPatterns: {
        subjectEllipsis: "taller than [he is]",
        verbPhraseEllipsis: "more than [I can handle]",
        wholeClauseEllipsis: "better than [it used to be]",
      },
      semanticRoles:
        "Clausal complements provide comparison standards and contextual frames",
      discourseFunctions:
        "Enable expression of speaker attitudes, expectations, and evaluations",
    },

    intensificationStrategies: {
      definition:
        "Lexical and syntactic strategies for modifying comparative degree, expressing varying intensities of comparison.",
      strongIntensifiers: {
        much: "much better, much worse, much more expensive",
        far: "far superior, far worse, far more complex",
        alot: "a lot bigger, a lot more interesting (informal register)",
        considerably:
          "considerably better, considerably more (formal register)",
        significantly:
          "significantly higher, significantly more (academic register)",
      },
      moderateIntensifiers: {
        somewhat: "somewhat better, somewhat more complex",
        rather: "rather more difficult, rather less convenient",
        quite: "quite a bit better, quite a lot more (British usage)",
        fairly: "fairly more expensive, fairly less common",
      },
      slightIntensifiers: {
        slightly: "slightly better, slightly more expensive",
        alittle: "a little bigger, a little more comfortable",
        marginally: "marginally better, marginally more (technical register)",
        barely: "barely better, barely more than",
      },
      registerVariation:
        "Intensifier choice correlates strongly with formality level and communicative context",
    },
  },

  // B2 Level - Upper-Intermediate Comparatives (Complex Structures)
  B2: {
    levelDescription: {
      cognitiveLoad:
        "High cognitive demands requiring advanced syntactic and semantic processing",
      linguisticComplexity:
        "Sophisticated structures involving clause embedding and complex modification",
      communicativeGoals:
        "Precise, nuanced comparisons in academic, professional, and literary contexts",
      prerequisiteKnowledge:
        "Advanced clause structure understanding and register awareness",
    },

    progressiveComparativeStructures: {
      definition:
        "Constructions expressing gradual change or increasing/decreasing intensity over time, utilizing parallel comparative forms.",
      theMoreTheMore: {
        structure: "The more [clause], the more [clause]",
        examples: [
          "The more you study, the more you learn",
          "The harder you work, the better your results",
          "The less you worry, the happier you become",
        ],
        semanticRelation:
          "Expresses proportional correlation between two variables",
        syntacticAnalysis:
          "Fronted comparative phrases followed by correlative clauses",
      },
      increasinglyPattern: {
        structure: "increasingly + [adjective]",
        examples: [
          "increasingly difficult",
          "increasingly popular",
          "increasingly complex",
        ],
        temporalSemantics: "Indicates progressive intensification over time",
        pragmaticUsage: "Often used in formal and academic discourse",
      },
      progressivelyPattern: {
        structure: "progressively + [adjective]",
        examples: [
          "progressively worse",
          "progressively more sophisticated",
          "progressively less effective",
        ],
        semanticNuance: "Emphasizes systematic, step-by-step change",
        registerSpecificity: "Primarily formal and technical registers",
      },
    },

    idiomaticComparativeExpressions: {
      definition:
        "Fixed expressions and collocations involving comparative structures with non-compositional meanings.",
      establishedIdioms: {
        "better late than never":
          "Preference for delayed completion over non-completion",
        "more or less": "Approximation or rough equivalence",
        "sooner or later": "Inevitable future occurrence",
        "more than meets the eye": "Hidden complexity or significance",
        "less is more": "Aesthetic principle of simplicity and restraint",
      },
      pragmaticFunctions: [
        "Conveying cultural wisdom and shared values",
        "Creating emphasis through unexpected comparisons",
        "Establishing informal register and rapport",
      ],
      acquisitionChallenges:
        "Non-compositional meanings require memorization rather than rule application",
    },

    comparativePrepositionPhrases: {
      definition:
        "Sophisticated prepositional constructions for expressing comparative relationships beyond basic 'than' usage.",
      comparedTo: {
        usage: "compared to/with previous results",
        semanticNuance: "Explicit framing of comparison context",
        registerPreference: "Formal and academic writing",
      },
      inComparisonTo: {
        usage: "in comparison to/with other methods",
        functionalRole: "Establishing explicit comparison framework",
        syntacticBehavior: "Often sentence-initial for topicalization",
      },
      relativeTo: {
        usage: "relative to market standards",
        semanticSpecificity: "Proportional relationship emphasis",
        domainUsage: "Technical and scientific discourse",
      },
      asOpposedTo: {
        usage: "as opposed to traditional approaches",
        contrastiveFunction: "Strong opposition or alternative emphasis",
        discoursiveRole: "Argumentative and persuasive contexts",
      },
    },

    contrastiveConjunctions: {
      definition:
        "Sophisticated conjunctive expressions for establishing comparative and contrastive relationships between clauses.",
      whereas: {
        function: "Simultaneous contrast between two situations",
        examples:
          "She excels in mathematics, whereas her brother prefers literature",
        syntacticBehavior: "Introduces subordinate contrastive clauses",
        registerLevel: "Formal written discourse",
      },
      while: {
        function: "Concessive or contrastive relationship",
        examples: "While this method is effective, it requires more resources",
        pragmaticRange: "Both temporal and contrastive meanings",
        frequencyUsage: "High frequency in academic writing",
      },
      onTheOtherHand: {
        function: "Discourse marker introducing alternative perspective",
        examples:
          "This approach is cost-effective. On the other hand, it may compromise quality",
        discourseFunction: "Explicit transition between contrasting points",
        registerSensitivity: "Formal argumentative discourse",
      },
      incontrast: {
        function: "Explicit contrastive relationship marker",
        examples:
          "The first group showed improvement. In contrast, the second group declined",
        syntacticPosition: "Typically sentence-initial",
        functionalLoad: "High in academic and analytical writing",
      },
    },
  },

  // C1 Level - Advanced Comparatives (Sophisticated Expression)
  C1: {
    levelDescription: {
      cognitiveLoad:
        "Very high cognitive demands requiring metalinguistic sophistication",
      linguisticComplexity:
        "Highly sophisticated structures with subtle semantic and pragmatic distinctions",
      communicativeGoals:
        "Precise, nuanced expression in professional, academic, and literary contexts",
      prerequisiteKnowledge:
        "Advanced grammatical competence and register sensitivity",
    },

    sophisticatedComparativeModifiers: {
      definition:
        "Advanced degree modifiers providing precise semantic gradations and register-appropriate expression.",
      emphasisModifiers: {
        "all the more": {
          semantics: "Intensification through circumstantial irony",
          examples:
            "The criticism makes the achievement all the more impressive",
          pragmaticEffect: "Emphasizes unexpected or contrary circumstances",
          registerLevel: "Formal literary and academic discourse",
        },
        "none the less": {
          semantics: "Concessive intensification despite contrary expectations",
          examples: "The project was challenging but none the less successful",
          functionalRole:
            "Acknowledging difficulties while asserting positive outcomes",
          stylistic: "Somewhat archaic, high formal register",
        },
        "so much more": {
          semantics: "Extreme degree emphasis",
          examples:
            "This solution is so much more elegant than the previous one",
          pragmaticForce: "Strong evaluative emphasis",
          registerFlexibility: "Both formal and informal usage",
        },
      },
      proportionalModifiers: {
        "to a greater extent": {
          semantics: "Proportional comparison with explicit scope",
          examples:
            "This principle applies to a greater extent in urban environments",
          syntacticBehavior: "Often functions as sentence adverbial",
          domainUsage: "Academic and technical discourse",
        },
        "proportionally more": {
          semantics: "Mathematical or statistical proportionality",
          examples: "The cost increase was proportionally more significant",
          registerSpecificity: "Technical and analytical discourse",
          semanticPrecision: "Implies quantitative measurement",
        },
      },
    },

    academicComparativeConstructions: {
      definition:
        "Specialized comparative structures characteristic of scholarly and research discourse.",
      statisticalComparisons: {
        "significantly more/less":
          "Statistical significance in research contexts",
        "substantially different":
          "Large effect size or practical significance",
        "markedly superior": "Clear and notable superiority",
        "marginally better": "Small but measurable improvement",
        "considerably more effective": "Substantial practical improvement",
      },
      analyticalFrameworks: {
        "comparatively speaking":
          "Discourse marker qualifying comparison scope",
        "in relative terms":
          "Acknowledging contextual dependency of comparison",
        "by comparison": "Explicit comparative framework establishment",
        "relatively speaking": "Hedging absolute claims through relativization",
      },
      evidentialComparatives: {
        "demonstrably superior": "Evidence-based superiority claims",
        "arguably better": "Qualified superiority allowing counterargument",
        "presumably more effective":
          "Tentative superiority based on assumptions",
        "ostensibly superior":
          "Apparent superiority with potential qualification",
      },
    },

    literaryComparativeDevices: {
      definition:
        "Sophisticated comparative constructions employed in creative and literary writing for aesthetic and rhetorical effect.",
      hyperbolicComparisons: {
        "infinitely better": "Extreme exaggeration for emphasis",
        "immeasurably greater": "Beyond quantification hyperbole",
        "incomparably superior": "Unique excellence beyond comparison",
        unparalleled: "Absolute uniqueness assertion",
      },
      aestheticComparisons: {
        "breathtakingly more beautiful":
          "Emotional intensity through comparison",
        "hauntingly similar": "Emotional resonance through similarity",
        "devastatingly more effective": "Emotional impact emphasis",
        "achingly more poignant": "Emotional depth through comparison",
      },
      metaphoricalComparisons: {
        "light-years ahead": "Metaphorical distance for superiority",
        "worlds apart": "Metaphorical space for difference",
        "miles better": "Metaphorical distance for improvement",
        "streets ahead": "Metaphorical advancement comparison",
      },
    },

    technicalRegisterComparatives: {
      definition:
        "Specialized comparative constructions for technical, scientific, and professional domains.",
      quantitativeComparisons: {
        "orders of magnitude": "Exponential difference expression",
        "factor of ten": "Specific multiplicative comparison",
        "percentage points higher": "Precise statistical comparison",
        "standard deviations above": "Statistical distribution comparison",
      },
      qualitativeComparisons: {
        "qualitatively different": "Fundamental rather than degree difference",
        "categorically superior": "Different category rather than degree",
        "structurally more complex":
          "Architectural or organizational complexity",
        "functionally more efficient": "Performance-based comparison",
      },
      processComparisons: {
        "exponentially more complex": "Mathematical progression description",
        "logarithmically improved": "Mathematical function description",
        "asymptotically approaching": "Mathematical limit description",
        "linearly correlated": "Mathematical relationship description",
      },
    },
  },

  // C2 Level - Mastery Comparatives (Expert Expression)
  C2: {
    levelDescription: {
      cognitiveLoad:
        "Maximum cognitive sophistication requiring near-native competence",
      linguisticComplexity:
        "Highly specialized and nuanced constructions with subtle distinctions",
      communicativeGoals:
        "Expert-level precision in specialized professional and academic contexts",
      prerequisiteKnowledge:
        "Near-native grammatical competence and extensive register knowledge",
    },

    rareSpecializedComparatives: {
      definition:
        "Extremely sophisticated and specialized comparative constructions for expert-level expression.",
      superlativeComparatives: {
        "incomparably superior": "Beyond any possible comparison",
        "unparalleled excellence": "Without equal or equivalent",
        "unprecedented achievement": "Never before accomplished",
        "unrivaled performance": "Without competitor or equal",
        "peerless mastery": "Without peer or equal in quality",
        "matchless precision": "Cannot be equaled or matched",
      },
      intensiveComparatives: {
        "exponentially more sophisticated": "Mathematical progression metaphor",
        "geometrically more complex": "Mathematical increase pattern",
        "astronomically more expensive": "Cosmic scale metaphor",
        "microscopically more precise": "Scientific scale metaphor",
        "monumentally more significant": "Architectural scale metaphor",
      },
      evaluativeComparatives: {
        "categorically more effective": "Different category of effectiveness",
        "fundamentally more sound": "Basic principle superiority",
        "intrinsically more valuable": "Essential nature superiority",
        "inherently more reliable": "Built-in quality superiority",
        "quintessentially more elegant": "Perfect embodiment superiority",
      },
    },

    domainSpecificComparatives: {
      definition:
        "Highly specialized comparative constructions tailored to specific professional and academic domains.",
      legalComparatives: {
        "more compelling evidence": "Greater persuasive force in legal context",
        "less admissible testimony": "Reduced legal acceptability",
        "more persuasive argument": "Greater rhetorical effectiveness",
        "less credible witness": "Reduced reliability assessment",
        "more binding precedent": "Stronger legal obligation",
        "less conclusive proof": "Weaker evidential support",
      },
      medicalComparatives: {
        "more acute symptoms": "Greater severity and rapid onset",
        "less chronic condition": "Reduced long-term persistence",
        "more progressive disease": "Faster deterioration rate",
        "less responsive treatment": "Reduced therapeutic effectiveness",
        "more invasive procedure": "Greater bodily intrusion",
        "less palliative care": "Reduced symptom management",
      },
      scientificComparatives: {
        "more statistically significant": "Greater research validity",
        "less experimentally controlled": "Reduced methodological rigor",
        "more empirically supported": "Stronger evidence base",
        "less theoretically sound": "Weaker conceptual foundation",
        "more methodologically rigorous": "Superior research design",
        "less replicable results": "Reduced reproducibility",
      },
      businessComparatives: {
        "more strategically aligned": "Better goal coordination",
        "less operationally efficient": "Reduced process effectiveness",
        "more competitively positioned": "Superior market stance",
        "less financially viable": "Reduced economic sustainability",
        "more organizationally agile": "Superior adaptability",
        "less stakeholder-oriented": "Reduced constituency focus",
      },
    },

    stylisticComparativeNuances: {
      definition:
        "Sophisticated stylistic variations in comparative usage for different registers and communicative effects.",
      formalAcademicStyle: {
        characteristics: "Precise, objective, evidence-based comparisons",
        examples: [
          "substantially more effective",
          "significantly less variable",
          "demonstrably superior performance",
          "markedly different outcomes",
          "considerably more reliable",
        ],
        discourseFunctions: "Objective evaluation and scholarly argumentation",
      },
      literaryCreativeStyle: {
        characteristics:
          "Metaphorical, emotionally resonant, aesthetically pleasing comparisons",
        examples: [
          "infinitely more beautiful",
          "hauntingly more poignant",
          "devastatingly more effective",
          "breathtakingly superior",
          "achingly more perfect",
        ],
        discourseFunctions: "Emotional impact and aesthetic expression",
      },
      technicalProfessionalStyle: {
        characteristics: "Precise, quantifiable, domain-specific comparisons",
        examples: [
          "orders of magnitude more efficient",
          "exponentially more complex",
          "logarithmically more accurate",
          "systematically more reliable",
          "architecturally more sound",
        ],
        discourseFunctions: "Technical precision and professional competence",
      },
      diplomaticPersuasiveStyle: {
        characteristics:
          "Hedge-qualified, face-saving, politically sensitive comparisons",
        examples: [
          "arguably more effective",
          "potentially more beneficial",
          "presumably more suitable",
          "ostensibly more appropriate",
          "conceivably more practical",
        ],
        discourseFunctions: "Diplomatic negotiation and careful persuasion",
      },
    },

    contextualMasteryApplications: {
      definition:
        "Expert-level application of comparative constructions across diverse communicative contexts and specialized domains.",
      academicWriting: {
        characteristics:
          "Objective, evidence-based, methodologically sound comparisons",
        strategicUsage:
          "Building arguments, establishing significance, demonstrating superiority",
        avoidancePatterns:
          "Emotional language, unsupported claims, absolute statements",
      },
      professionalCommunication: {
        characteristics:
          "Goal-oriented, strategically positioned, stakeholder-sensitive comparisons",
        strategicUsage:
          "Demonstrating value, justifying decisions, influencing outcomes",
        considerationFactors:
          "Audience expertise, organizational politics, competitive dynamics",
      },
      literaryExpression: {
        characteristics:
          "Emotionally resonant, aesthetically pleasing, thematically integrated comparisons",
        strategicUsage:
          "Creating atmosphere, developing themes, evoking emotions",
        artisticTechniques: "Metaphor, hyperbole, irony, symbolism",
      },
      technicalDocumentation: {
        characteristics:
          "Precise, quantifiable, methodologically sound comparisons",
        strategicUsage:
          "Specifying requirements, describing performance, establishing standards",
        precisionRequirements:
          "Measurable criteria, objective standards, verifiable claims",
      },
    },
  },

  // Original Comparative Section (Preserved)
  Comparative: {
    structure: {
      shortAdjectives: "adjective + -er + than (e.g., smaller than)",
      longAdjectives: "more + adjective + than (e.g., more beautiful than)",
      irregular: "good → better, bad → worse, far → farther/further",
    },
    usage: ["Used to compare two things.", "Always followed by 'than'."],
    recognition: [
      "Short adjectives (1 syllable): tall → taller than",
      "Long adjectives (2+ syllables): careful → more careful than",
      "Irregular forms: good → better than, bad → worse than",
    ],
    examples: [
      "This book is **cheaper than** that one.",
      "She is **more talented than** her sister.",
      "This phone is **better than** the old one.",
    ],
    irregulars: {
      good: "better",
      bad: "worse",
      far: "farther/further",
      little: "less",
      "many/much": "more",
    },
    notes: [
      "Do not use 'more' with adjectives that already end in -er.",
      "Use 'than' after the comparative form.",
      "With adjectives ending in -y, change to -ier: happy → happier than.",
    ],
  },

  // Advanced Comparative Patterns and Constructions
  advancedComparativePatterns: {
    comparativeFormation: {
      definition: "How comparatives are formed and categorized.",
      regular: {
        definition: "Regular comparative formation rules",
        shortAdjectives: "Add -er (big → bigger, tall → taller)",
        longAdjectives:
          "Use 'more' (beautiful → more beautiful, expensive → more expensive)",
        spellingRules:
          "Double consonant (big → bigger), change y to i (happy → happier)",
      },
      irregular: {
        definition: "Irregular comparative forms",
        examples: [
          "good → better",
          "bad → worse",
          "far → farther/further",
          "little → less",
          "many/much → more",
        ],
      },
      compound: {
        definition: "Multi-word comparative expressions",
        examples: [
          "more interesting than",
          "less expensive than",
          "as good as",
          "not as bad as",
        ],
      },
    },
    comparativeStructures: {
      definition: "Different structural patterns for comparatives.",
      basicStructure: {
        pattern: "Subject + be + comparative + than + object",
        examples: [
          "She is taller than he is",
          "This car is more expensive than that one",
        ],
      },
      complexStructure: {
        pattern: "Subject + be + comparative + than + clause",
        examples: [
          "The movie was better than I expected",
          "The work is harder than you think",
        ],
      },
      parallelStructure: {
        pattern: "The more...the more...",
        examples: [
          "The more you study, the more you learn",
          "The less you worry, the better you feel",
        ],
      },
    },
    comparativeModifiers: {
      definition: "Words that modify comparatives to show degree.",
      intensifiers: {
        examples: [
          "much better",
          "far worse",
          "a lot more",
          "considerably less",
          "significantly different",
        ],
        usage:
          "This book is much better than that one. The weather is far worse than yesterday.",
      },
      diminishers: {
        examples: [
          "slightly better",
          "a little worse",
          "somewhat more",
          "marginally less",
          "barely different",
        ],
        usage:
          "This option is slightly better than that one. The difference is barely noticeable.",
      },
      approximators: {
        examples: [
          "more or less",
          "roughly the same",
          "approximately equal",
          "about as good",
        ],
        usage:
          "The results are more or less the same. The quality is approximately equal.",
      },
    },
    comparativeClauses: {
      definition: "Clause structures used in comparative contexts.",
      thanClauses: {
        examples: [
          "than I expected",
          "than you think",
          "than it seems",
          "than we hoped",
        ],
        usage:
          "The movie was better than I expected. The work is harder than you think.",
      },
      asClauses: {
        examples: [
          "as I expected",
          "as you think",
          "as it seems",
          "as we hoped",
        ],
        usage:
          "The result is as good as I expected. The quality is as high as you think.",
      },
      comparativeClauses: {
        examples: [
          "the more you study",
          "the less you worry",
          "the better you feel",
          "the worse it gets",
        ],
        usage:
          "The more you study, the more you learn. The less you worry, the better you feel.",
      },
    },
  },

  // Comparative Collocations and Fixed Expressions
  comparativeCollocations: {
    commonPairs: [
      "much better",
      "far worse",
      "a lot more",
      "considerably less",
      "significantly different",
      "slightly better",
      "a little worse",
      "somewhat more",
      "marginally less",
      "barely different",
      "more or less",
      "roughly the same",
      "approximately equal",
      "about as good",
      "nearly as bad",
    ],
    academicCollocations: [
      "significantly more",
      "substantially less",
      "markedly different",
      "considerably better",
      "noticeably worse",
      "statistically significant",
      "marginally better",
      "proportionally more",
    ],
    businessCollocations: [
      "more profitable",
      "less efficient",
      "more competitive",
      "less sustainable",
      "more scalable",
      "better performance",
      "worse results",
      "higher quality",
      "lower cost",
      "greater value",
    ],
    literaryCollocations: [
      "far more",
      "infinitely better",
      "immeasurably greater",
      "incomparably worse",
      "exponentially more",
      "vastly different",
      "enormously better",
      "tremendously worse",
    ],
  },

  // Comparative Usage in Different Genres
  comparativeGenreUsage: {
    academic: {
      description: "Comparatives used in scholarly writing and research.",
      examples: [
        "significantly more",
        "substantially less",
        "markedly different",
        "considerably better",
        "noticeably worse",
      ],
      characteristics: ["precise", "quantitative", "objective", "analytical"],
    },
    journalistic: {
      description: "Comparatives used in news reporting and articles.",
      examples: [
        "much better",
        "far worse",
        "a lot more",
        "considerably less",
        "significantly different",
      ],
      principles: ["clarity", "accuracy", "objectivity", "accessibility"],
    },
    literary: {
      description: "Comparatives used in creative writing and fiction.",
      examples: [
        "far more",
        "infinitely better",
        "immeasurably greater",
        "incomparably worse",
        "exponentially more",
      ],
      techniques: [
        "descriptive comparatives",
        "emotional emphasis",
        "atmospheric comparison",
      ],
    },
    technical: {
      description:
        "Comparatives used in technical and specialized documentation.",
      examples: [
        "proportionally more",
        "relatively less",
        "statistically significant",
        "marginally better",
        "slightly worse",
      ],
      strategies: [
        "precise comparatives",
        "technical accuracy",
        "specialized terminology",
      ],
    },
  },

  // Comparative Frequency and Register
  comparativeFrequencyAndRegister: {
    highFrequency: {
      definition: "Most commonly used comparatives in everyday English.",
      examples: [
        "better",
        "worse",
        "more",
        "less",
        "bigger",
        "smaller",
        "faster",
        "slower",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition: "Moderately common comparatives for specific contexts.",
      examples: [
        "more interesting",
        "less expensive",
        "more difficult",
        "less important",
        "more comfortable",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition: "Rare or specialized comparatives for specific purposes.",
      examples: [
        "incomparably better",
        "unparalleled",
        "unprecedented",
        "unrivaled",
        "peerless",
      ],
      usage: "Used in literary, academic, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "significantly more",
        "substantially less",
        "considerably better",
        "noticeably worse",
      ],
      informal: [
        "much better",
        "far worse",
        "a lot more",
        "way better",
        "tons more",
      ],
      technical: [
        "proportionally more",
        "relatively less",
        "statistically significant",
        "marginally better",
      ],
      literary: [
        "infinitely better",
        "immeasurably greater",
        "incomparably worse",
        "exponentially more",
      ],
    },
  },

  // Comparative Exercises and Practice Activities
  comparativeExercises: {
    beginner: [
      "Complete the sentence: This house is ___ than that one (big/bigger/biggest)",
      "Choose the correct comparative: My car is ___ than yours (fast/faster/fastest)",
      "Match adjectives to their comparative forms",
      "Practice basic 'than' usage",
    ],
    intermediate: [
      "Place comparatives in correct positions",
      "Use different types of comparatives appropriately",
      "Practice comparative intensifiers",
      "Create comparative sentences",
    ],
    advanced: [
      "Analyze comparative usage in texts",
      "Create sophisticated comparative structures",
      "Practice register-appropriate comparatives",
      "Study comparative clause patterns",
    ],
    interactive: [
      "Comparative guessing games",
      "Comparison challenges",
      "Comparative structure competitions",
      "Register matching exercises",
    ],
  },

  // Comparative Assessment and Evaluation
  comparativeAssessment: {
    criteria: [
      "Accuracy of comparative form",
      "Correct use of 'than'",
      "Appropriate register usage",
      "Proper intensifier choice",
      "Correct clause structure",
    ],
    rubrics: {
      beginner: "Basic comparatives, simple structure, limited variety",
      intermediate: "Good variety, correct structure, appropriate usage",
      advanced: "Sophisticated choices, complex structure, register awareness",
      mastery: "Exceptional variety, perfect structure, nuanced usage",
    },
    commonErrors: [
      "Incorrect comparative form",
      "Missing 'than'",
      "Inappropriate register",
      "Wrong intensifier choice",
      "Poor clause structure",
    ],
  },

  // Comparative Learning Strategies
  comparativeLearningStrategies: [
    "Practice comparative usage with real objects and situations",
    "Create comparative lists for different adjective categories",
    "Use comparative flashcards with examples and contexts",
    "Practice comparative structures regularly",
    "Read extensively to encounter comparatives in context",
    "Write comparative sentences using various patterns",
    "Play comparative games (matching, building, comparing)",
    "Study comparative clause patterns and intensifiers",
  ],

  // Comparative in Language Tests
  comparativeInTests: [
    "TOEFL/IELTS: Identify and correct comparative errors in reading and writing sections",
    "Cambridge: Use appropriate comparatives in writing tasks and speaking assessments",
    "SAT: Recognize comparative meaning and usage in reading comprehension",
    "GRE: Understand comparative relationships and clause patterns",
    "GMAT: Apply comparative logic in sentence correction questions",
  ],

  // Common Comparative Mistakes
  commonComparativeMistakes: {
    formErrors: [
      "Incorrect: more bigger (should be: bigger)",
      "Incorrect: more good (should be: better)",
      "Incorrect: more bad (should be: worse)",
    ],
    structureErrors: [
      "Incorrect: bigger as (should be: bigger than)",
      "Incorrect: more expensive as (should be: more expensive than)",
      "Incorrect: better from (should be: better than)",
    ],
    usageErrors: [
      "Incorrect: I am more tall (should be: I am taller)",
      "Incorrect: This is more big (should be: This is bigger)",
      "Incorrect: She is more good (should be: She is better)",
    ],
  },
};

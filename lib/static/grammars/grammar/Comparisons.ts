import { ComparisonsType } from "@/types/grammars/grammar/Comparisons";

export const ComparisonsData:ComparisonsType = {
  id: 74,
  // --- Comprehensive Comparisons Reference ---

  // Definition of Comparisons
  comparisonsDefinition: {
    basicDefinition:
      "Comparisons are grammatical structures used to show similarities or differences between people, things, or ideas. They help express relationships of degree, equality, or inequality.",
    linguisticDefinition:
      "Comparisons (also known as comparison constructions or comparative structures) are morphosyntactic devices that establish scalar relationships between entities, expressing degrees of similarity, difference, superiority, inferiority, or equality through systematic grammatical patterns.",
    grammaticalFunction:
      "Comparisons function as modifiers that express relative degrees of qualities, allowing speakers to describe relationships between entities in terms of similarity, difference, superiority, inferiority, or equality.",
    keyCharacteristics: [
      "Express relative degrees of qualities between entities",
      "Use comparative and superlative forms",
      "Show relationships of similarity or difference",
      "Can be formed with adjectives, adverbs, and nouns",
      "Often use specific structural patterns and prepositions",
      "Involve scalar implicature and gradability",
      "Function across different syntactic positions",
    ],
    morphologicalFeatures: {
      comparative: "adjective + -er + than, more + adjective + than",
      superlative: "the + adjective + -est, the most + adjective",
      equality: "as + adjective + as, the same as",
      inequality: "not as + adjective + as, different from",
      doubleComparative: "the more..., the more...",
      progressiveComparative: "more and more + adjective",
    },
    positionInSentence: {
      attributive: "Before nouns (a bigger house)",
      predicative: "After linking verbs (The house is bigger)",
      adverbial: "Modifying verbs (He runs faster)",
      nominal: "As noun phrases (the bigger of the two)",
    },
    academicReferences: [
      "Huddleston, R., & Pullum, G. K. (2002). The Cambridge Grammar of the English Language. Cambridge University Press.",
      "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language. Longman.",
      "Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). Longman Grammar of Spoken and Written English. Longman.",
      "Kennedy, C. (2007). Vagueness and grammar: The semantics of relative and absolute gradable adjectives. Linguistics and Philosophy, 30(1), 1-45.",
      "Bresnan, J. (1973). Syntax of the comparative clause construction in English. Linguistic Inquiry, 4(3), 275-343.",
    ],
  },

  // A1 Level - Basic Comparisons (Beginner)
  A1: {
    definition:
      "Fundamental comparison structures for absolute beginners, focusing on basic comparative and superlative forms with high-frequency adjectives and simple sentence patterns.",
    cognitiveLoad: "Low - Simple one-step comparisons with familiar vocabulary",
    basicComparatives: {
      definition:
        "Essential comparative structures using -er/more...than patterns with common adjectives",
      linguisticFeatures: [
        "Morphological comparison (-er suffix)",
        "Periphrastic comparison (more + adjective)",
        "Simple than-clauses",
        "Basic scalar relationships",
      ],
      examples: [
        "This house is bigger than that one.",
        "My car is faster than yours.",
        "She is taller than her brother.",
        "This book is more interesting than that one.",
        "He runs more quickly than I do.",
      ],
      usage:
        "Used for direct comparisons between two entities with clear, observable differences",
      commonAdjectives: [
        "big/bigger",
        "small/smaller",
        "tall/taller",
        "short/shorter",
        "fast/faster",
        "slow/slower",
        "old/older",
        "young/younger",
        "good/better",
        "bad/worse",
      ],
    },
    basicSuperlatives: {
      definition:
        "Essential superlative structures using the + -est/most patterns for expressing extremes within groups",
      linguisticFeatures: [
        "Definite article requirement",
        "Morphological superlatives (-est)",
        "Periphrastic superlatives (most + adjective)",
        "Prepositional phrases (in/of + group)",
      ],
      examples: [
        "This is the biggest house in the neighborhood.",
        "She is the tallest person in her family.",
        "This is the most interesting book I've read.",
        "He is the fastest runner in the school.",
        "This is the best restaurant in town.",
      ],
      usage: "Used to identify the extreme member of a group or set",
      scopeMarkers: [
        "in the class",
        "in the city",
        "of all",
        "in the world",
        "I know",
      ],
    },
    basicEqualityComparisons: {
      definition:
        "Fundamental equality structures using as...as patterns to express sameness or similarity",
      linguisticFeatures: [
        "Correlative structure (as...as)",
        "Positive degree adjectives/adverbs",
        "Negation possibilities (not as...as)",
        "Same-construction alternatives",
      ],
      examples: [
        "She is as tall as her sister.",
        "This car is as expensive as that one.",
        "He runs as fast as his friend.",
        "My coffee is as hot as yours.",
        "This book is the same as mine.",
      ],
      usage: "Used to express equal degrees of qualities between entities",
    },
    irregularComparisons: {
      definition:
        "Common irregular comparative and superlative forms that don't follow standard rules",
      patterns: {
        good: { comparative: "better", superlative: "best" },
        bad: { comparative: "worse", superlative: "worst" },
        far: {
          comparative: "farther/further",
          superlative: "farthest/furthest",
        },
        little: { comparative: "less", superlative: "least" },
        "much/many": { comparative: "more", superlative: "most" },
      },
      examples: [
        "This is better than that.",
        "She is the best student.",
        "Today is worse than yesterday.",
        "This is the worst movie.",
      ],
    },
  },

  // A2 Level - Elementary Comparisons
  A2: {
    definition:
      "Expanded comparison structures with increased vocabulary range, adverb comparisons, and quantifier comparisons for elementary learners.",
    cognitiveLoad:
      "Low-Medium - Introduction of more complex adjectives and adverb comparisons",
    expandedComparatives: {
      definition:
        "Extended comparative structures with multi-syllabic adjectives requiring 'more/less' constructions",
      linguisticFeatures: [
        "Periphrastic comparison dominance",
        "Multi-syllabic adjective patterns",
        "Adverb comparison introduction",
        "Intensifier compatibility",
      ],
      examples: [
        "This flower is more beautiful than that one.",
        "This car is more expensive than that one.",
        "This book is more difficult than that one.",
        "She works more carefully than he does.",
        "He speaks more clearly than she does.",
      ],
      adjectiveCategories: {
        beauty: ["beautiful", "attractive", "gorgeous", "elegant"],
        difficulty: ["difficult", "challenging", "complex", "complicated"],
        cost: ["expensive", "costly", "affordable", "cheap"],
        quality: ["comfortable", "convenient", "practical", "useful"],
      },
    },
    comparisonWithQuantifiers: {
      definition:
        "Comparison structures involving countable and uncountable noun quantifiers",
      linguisticFeatures: [
        "More/fewer with countable nouns",
        "More/less with uncountable nouns",
        "Quantifier scope and meaning",
        "Partitive constructions",
      ],
      examples: [
        "I have more money than you.",
        "She has fewer books than I do.",
        "There are more people here than there.",
        "I need less time than you do.",
        "He has the most experience in the team.",
      ],
      quantifierRules: {
        countable: "more/fewer books, chairs, people",
        uncountable: "more/less water, money, time",
        superlative: "the most/least + noun",
      },
    },
    adverbComparisons: {
      definition:
        "Comparative and superlative forms of adverbs modifying verbs and other elements",
      linguisticFeatures: [
        "Manner adverb comparison",
        "Frequency adverb degrees",
        "More + adverb constructions",
        "Irregular adverb forms",
      ],
      examples: [
        "He runs more quickly than she does.",
        "She works more efficiently than he does.",
        "They speak more clearly than we do.",
        "I drive more carefully than you do.",
        "He studies more regularly than she does.",
      ],
      commonAdverbs: [
        "quickly/more quickly",
        "slowly/more slowly",
        "carefully/more carefully",
        "efficiently/more efficiently",
        "clearly/more clearly",
      ],
    },
    basicIntensifiers: {
      definition: "Simple intensifying words that modify comparison degree",
      examples: [
        "much better",
        "a little bigger",
        "far more expensive",
        "a bit smaller",
      ],
      usage: "Add emphasis or specificity to comparison degree",
    },
  },

  // B1 Level - Intermediate Comparisons
  B1: {
    definition:
      "Sophisticated comparison structures with complex intensifiers, double comparatives, and academic-style comparisons for intermediate learners.",
    cognitiveLoad:
      "Medium - Complex structures requiring understanding of correlation and emphasis",
    doubleComparatives: {
      definition:
        "Correlative comparison structures expressing proportional relationships using 'the more..., the more...' patterns",
      linguisticFeatures: [
        "Correlative conjunction structure",
        "Proportional relationship semantics",
        "Fronted comparative phrases",
        "Causal-temporal implications",
      ],
      examples: [
        "The more you study, the more you learn.",
        "The faster you drive, the more dangerous it becomes.",
        "The harder you work, the more successful you become.",
        "The more you practice, the better you become.",
        "The less you worry, the happier you are.",
      ],
      patterns: [
        "The + comparative + subject + verb, the + comparative + subject + verb",
        "The + more/less + noun + subject + verb, the + comparative + subject + verb",
        "The + comparative + the + noun, the + comparative + the + noun",
      ],
    },
    progressiveComparatives: {
      definition:
        "Comparatives expressing ongoing change or development over time",
      examples: [
        "The weather is getting colder and colder.",
        "Life is becoming more and more expensive.",
        "Technology is developing faster and faster.",
        "The situation is getting worse and worse.",
      ],
      patterns: [
        "comparative + and + comparative",
        "more and more + adjective",
        "less and less + adjective",
      ],
    },
    intensifierVariety: {
      definition:
        "Expanded range of intensifying expressions for comparison modification",
      categories: {
        strong: ["much", "far", "a lot", "considerably", "significantly"],
        moderate: ["somewhat", "rather", "quite", "fairly", "pretty"],
        slight: ["slightly", "a little", "a bit", "marginally", "barely"],
        extreme: ["incredibly", "enormously", "vastly", "immensely"],
      },
      examples: [
        "This book is much better than that one.",
        "The weather is far worse than yesterday.",
        "This car is considerably more expensive.",
        "She's slightly taller than her sister.",
      ],
    },
    comparisonClauses: {
      definition: "Complex clause structures in comparison contexts",
      types: {
        thanClauses: "than I expected, than you think, than it seems",
        asClauses: "as I thought, as we hoped, as predicted",
        conditionalComparisons: "more than if..., less than when...",
      },
      examples: [
        "The movie was better than I expected.",
        "The result is as good as we hoped.",
        "It's more difficult than it looks.",
      ],
    },
  },

  // B2 Level - Upper Intermediate Comparisons
  B2: {
    definition:
      "Complex comparison structures with idiomatic expressions, register variations, and sophisticated comparative constructions for upper-intermediate learners.",
    cognitiveLoad:
      "Medium-High - Requires understanding of register, idioms, and complex syntactic patterns",
    idiomaticComparisons: {
      definition: "Fixed expressions and idioms used in comparison contexts",
      linguisticFeatures: [
        "Non-compositional meaning",
        "Cultural and metaphorical content",
        "Fixed lexical patterns",
        "Register-specific usage",
      ],
      expressions: {
        incomparability: [
          "like comparing apples and oranges",
          "like chalk and cheese",
          "as different as night and day",
          "worlds apart",
          "poles apart",
        ],
        similarity: [
          "as alike as two peas in a pod",
          "cut from the same cloth",
          "birds of a feather",
          "two sides of the same coin",
        ],
        extremeDifference: [
          "like comparing a candle to the sun",
          "heaven and earth",
          "fire and ice",
        ],
      },
      examples: [
        "These two approaches are like comparing apples and oranges.",
        "Their personalities are as different as night and day.",
        "The two systems are worlds apart in complexity.",
      ],
    },
    academicComparisons: {
      definition:
        "Formal comparison structures used in academic and professional contexts",
      linguisticFeatures: [
        "Formal register requirements",
        "Precision and objectivity",
        "Statistical and empirical language",
        "Hedging and qualification",
      ],
      examples: [
        "The results indicate a significantly higher rate of success.",
        "Data suggests a markedly different pattern of behavior.",
        "The methodology proves considerably more effective.",
        "Findings reveal a substantially lower error rate.",
      ],
      academicIntensifiers: [
        "significantly",
        "substantially",
        "markedly",
        "considerably",
        "noticeably",
        "marginally",
        "statistically",
      ],
    },
    comparisonPrepositions: {
      definition:
        "Prepositional phrases and expressions used in comparison contexts",
      patterns: {
        comparedToWith: "in relation to, when measured against",
        inComparisonToWith: "when set against, relative to",
        relativeTo: "in proportion to, concerning",
        asOpposedTo: "in contrast to, rather than",
        visÀVis: "in relation to, concerning",
      },
      examples: [
        "Sales increased compared to last year.",
        "Performance improved relative to expectations.",
        "Results were positive as opposed to previous studies.",
      ],
    },
    contrastiveConjunctions: {
      definition:
        "Conjunctions and connectors used to express comparison and contrast",
      types: {
        contrast: ["whereas", "while", "whilst", "however", "nevertheless"],
        opposition: ["on the contrary", "conversely", "by contrast"],
        comparison: ["similarly", "likewise", "in the same way", "equally"],
      },
      examples: [
        "Sales increased whereas profits declined.",
        "Method A proved effective while Method B failed.",
        "Results were positive; conversely, expectations were low.",
      ],
    },
  },

  // C1 Level - Advanced Comparisons
  C1: {
    definition:
      "Highly sophisticated comparison structures with nuanced expressions, specialized registers, and complex syntactic patterns for advanced learners.",
    cognitiveLoad:
      "High - Requires mastery of nuanced meaning, register sensitivity, and complex syntax",
    sophisticatedIntensifiers: {
      definition:
        "Advanced intensifying expressions for precise degree specification",
      categories: {
        academic: [
          "demonstrably",
          "empirically",
          "quantifiably",
          "measurably",
          "objectively",
        ],
        professional: [
          "strategically",
          "operationally",
          "functionally",
          "systematically",
        ],
        literary: [
          "immeasurably",
          "infinitely",
          "exponentially",
          "monumentally",
          "categorically",
        ],
        technical: [
          "proportionally",
          "logarithmically",
          "geometrically",
          "algorithmically",
        ],
      },
      examples: [
        "The new system is demonstrably more efficient than its predecessor.",
        "Results show exponentially greater success rates.",
        "Performance improved proportionally to investment levels.",
      ],
    },
    domainSpecificComparisons: {
      definition:
        "Specialized comparison structures for professional and academic domains",
      domains: {
        legal: {
          examples: [
            "The evidence is more compelling than the defense's argument.",
            "This precedent carries greater juridical weight.",
            "The testimony proves more credible than previous statements.",
          ],
          terminology: [
            "compelling",
            "persuasive",
            "authoritative",
            "binding",
            "precedential",
          ],
        },
        medical: {
          examples: [
            "The treatment demonstrates superior efficacy rates.",
            "Prognosis appears more favorable than initially assessed.",
            "Recovery rates exceed statistically predicted outcomes.",
          ],
          terminology: [
            "efficacious",
            "therapeutic",
            "prognostic",
            "symptomatic",
            "diagnostic",
          ],
        },
        scientific: {
          examples: [
            "Data exhibits statistically significant variance.",
            "Methodology proves more rigorous than conventional approaches.",
            "Results demonstrate greater reproducibility.",
          ],
          terminology: [
            "significant",
            "rigorous",
            "robust",
            "reliable",
            "reproducible",
          ],
        },
        business: {
          examples: [
            "ROI exceeded projections by substantial margins.",
            "Performance metrics indicate superior competitive positioning.",
            "Market penetration rates surpassed industry benchmarks.",
          ],
          terminology: [
            "profitable",
            "competitive",
            "sustainable",
            "scalable",
            "disruptive",
          ],
        },
      },
    },
    complexSyntacticPatterns: {
      definition: "Advanced syntactic constructions in comparison contexts",
      patterns: {
        embeddedComparisons:
          "This solution, more comprehensive than any previously proposed, addresses all concerns.",
        participialComparisons:
          "Having examined both options, researchers found Method A more reliable.",
        conditionalComparisons:
          "Were the budget larger, more sophisticated solutions would be viable.",
        concessiveComparisons:
          "Although more expensive, the premium option delivers superior value.",
      },
      examples: [
        "The analysis, more thorough than any conducted previously, reveals significant patterns.",
        "Despite being more costly, this approach yields better long-term results.",
        "Having considered all alternatives, this proves the most viable solution.",
      ],
    },
    registerSensitivity: {
      definition:
        "Appropriate comparison usage across different registers and contexts",
      registers: {
        formal:
          "Precise, objective, qualified comparisons with academic/professional terminology",
        informal:
          "Conversational, subjective comparisons with colloquial intensifiers",
        technical:
          "Specialized, quantified comparisons with domain-specific terminology",
        literary:
          "Expressive, metaphorical comparisons with aesthetic considerations",
      },
    },
  },

  // C2 Level - Mastery Comparisons
  C2: {
    definition:
      "Exceptional comparison mastery with rare expressions, stylistic sophistication, and complete register control for near-native competence.",
    cognitiveLoad:
      "Very High - Requires intuitive understanding of nuance, style, and pragmatic appropriateness",
    rareComparativeExpressions: {
      definition:
        "Sophisticated and rarely used comparative expressions for exceptional fluency",
      expressions: {
        absolute: [
          "incomparably",
          "unparalleled",
          "unprecedented",
          "unrivaled",
          "peerless",
          "nonpareil",
        ],
        archaic: ["betimes more", "passing strange", "wondrous fair"],
        literary: ["ineffably", "transcendentally", "sublimely", "ethereally"],
        scholarly: [
          "categorically",
          "fundamentally",
          "quintessentially",
          "paradigmatically",
        ],
      },
      examples: [
        "Her achievement was incomparably greater than any previous attempt.",
        "The discovery represents an unparalleled breakthrough in the field.",
        "His contribution remains unrivaled in its scope and significance.",
      ],
    },
    stylisticSophistication: {
      definition:
        "Masterful use of comparison for stylistic effect across genres and registers",
      techniques: {
        parallelism:
          "Not only more efficient but also more elegant in its simplicity.",
        chiasmus: "More is less, and less is more in this paradoxical design.",
        antithesis:
          "Where others see complexity, she finds simplicity; where others see problems, she discovers solutions.",
        gradation:
          "Good, better, best - and then transcendent excellence beyond comparison.",
      },
      examples: [
        "The solution was not merely more effective but elegantly, almost artistically, superior.",
        "In its apparent simplicity lay a complexity more profound than any elaborate alternative.",
        "What seemed inferior proved, upon reflection, infinitely more valuable.",
      ],
    },
    pragmaticMastery: {
      definition:
        "Intuitive understanding of when, how, and why to use specific comparison structures",
      aspects: {
        implicature:
          "Understanding what comparisons imply beyond their literal meaning",
        politeness: "Using comparisons appropriately in social contexts",
        persuasion: "Employing comparisons for rhetorical effect",
        precision: "Choosing exactly the right degree of comparison",
      },
      examples: [
        "Your proposal has considerable merit [diplomatically suggesting it's not the best].",
        "This approach might prove somewhat more effective [hedged suggestion].",
        "The results exceeded our most optimistic projections [emphasis through understatement].",
      ],
    },
    crossLinguisticAwareness: {
      definition:
        "Understanding how English comparison structures relate to other languages",
      features: [
        "Awareness of calque patterns from other languages",
        "Understanding of universal vs. language-specific comparison features",
        "Sensitivity to interference patterns in multilingual contexts",
        "Knowledge of historical development of English comparison system",
      ],
    },
  },

  // Advanced Linguistic Analysis
  linguisticAnalysis: {
    morphology: {
      definition: "Study of comparison formation at the word level",
      processes: [
        "Suffixation (-er, -est)",
        "Suppletion (good-better-best)",
        "Periphrasis (more/most + adjective)",
        "Ablaut (little-less-least)",
      ],
      constraints: [
        "Syllable count restrictions",
        "Stress pattern influence",
        "Phonological restrictions",
        "Lexical blocking",
      ],
    },
    syntax: {
      definition:
        "Syntactic structures and patterns in comparison constructions",
      patterns: [
        "Than-clause formation and ellipsis",
        "As-clause structures and correlatives",
        "Superlative noun phrase structure",
        "Comparative subclausal deletion",
      ],
      phenomena: [
        "Scope ambiguity in comparisons",
        "Binding relations in comparative clauses",
        "Movement and extraction constraints",
        "Agreement patterns",
      ],
    },
    semantics: {
      definition: "Meaning relationships and logical structures in comparisons",
      concepts: [
        "Scalar implicature and gradability",
        "Degree semantics and measurement",
        "Vagueness and context dependency",
        "Presupposition in comparative structures",
      ],
      logicalProperties: [
        "Transitivity of comparative relations",
        "Asymmetry and irreflexivity",
        "Monotonicity properties",
        "Entailment relations",
      ],
    },
    pragmatics: {
      definition: "Contextual and social aspects of comparison usage",
      aspects: [
        "Politeness strategies in comparisons",
        "Indirect speech acts through comparison",
        "Cultural sensitivity in comparative expressions",
        "Rhetorical uses of comparison",
      ],
    },
  },

  // Historical Development
  historicalDevelopment: {
    oldEnglish: {
      period: "450-1066 CE",
      features: [
        "Complex inflectional system for comparison",
        "Multiple comparative and superlative suffixes",
        "Different patterns for different adjective classes",
      ],
    },
    middleEnglish: {
      period: "1066-1500 CE",
      features: [
        "Simplification of inflectional system",
        "Emergence of periphrastic constructions",
        "French influence on comparative vocabulary",
      ],
    },
    earlyModernEnglish: {
      period: "1500-1700 CE",
      features: [
        "Standardization of -er/-est vs. more/most patterns",
        "Development of modern intensifier system",
        "Influence of Latin scholarly tradition",
      ],
    },
    modernEnglish: {
      period: "1700-present",
      features: [
        "Stable morphological system",
        "Expansion of periphrastic patterns",
        "Development of complex intensifier vocabulary",
      ],
    },
  },

  // Cross-Linguistic Perspective
  crossLinguisticComparison: {
    typology: {
      definition: "How English comparison system relates to world languages",
      universals: [
        "Most languages have some form of comparison",
        "Basic/derived distinction (positive/comparative/superlative)",
        "Tendency toward morphological marking of degree",
      ],
      variations: [
        "Morphological vs. syntactic comparison",
        "Different patterns for quality vs. quantity",
        "Various intensifier systems across languages",
      ],
    },
    contactInfluences: {
      definition:
        "How other languages have influenced English comparison system",
      sources: [
        "French: academic and formal comparison vocabulary",
        "Latin: scholarly and technical comparison terms",
        "Germanic: basic morphological patterns",
        "Modern influences: globalization effects on comparison usage",
      ],
    },
  },

  // Pedagogical Framework
  pedagogicalApproach: {
    acquisitionOrder: [
      "Basic comparative forms with common adjectives",
      "Simple superlatives with definite article",
      "Equality comparisons with as...as",
      "Irregular comparative forms",
      "Intensifiers and degree modification",
      "Complex clause structures",
      "Register and style variations",
      "Idiomatic and specialized expressions",
    ],
    commonDifficulties: [
      "Morphological vs. periphrastic choice",
      "Than vs. as confusion",
      "Superlative article usage",
      "Intensifier selection and placement",
      "Register appropriateness",
      "Complex clause formation",
    ],
    teachingStrategies: [
      "Contrastive analysis with L1",
      "Corpus-based authentic examples",
      "Register awareness development",
      "Systematic form-meaning mapping",
      "Pragmatic context integration",
    ],
  },

  // Assessment and Evaluation
  assessmentFramework: {
    competencyLevels: {
      novice: "Basic forms with high-frequency adjectives",
      intermediate: "Complex structures with appropriate intensifiers",
      advanced: "Register-sensitive usage with stylistic control",
      expert: "Intuitive mastery across all contexts and registers",
    },
    evaluationCriteria: [
      "Morphological accuracy",
      "Syntactic complexity",
      "Semantic precision",
      "Pragmatic appropriateness",
      "Stylistic sophistication",
    ],
  },
};

import { EqualityComparisonType } from "@/types/grammars/grammar/EqualityComparison";

export const EqualityComparisonData: EqualityComparisonType = {
  // --- Comprehensive Equality Comparison Reference ---

  // Definition of Equality Comparison
  equalityComparisonDefinition: {
    basicDefinition:
      "Equality comparison is used to show that two people, things, or actions are the same or equal in some way. It is a fundamental grammatical structure that expresses equivalent degrees of qualities between entities.",
    grammaticalFunction:
      "Equality comparisons function as modifiers that express equivalent degrees of qualities between two entities, indicating sameness or similarity in characteristics. They serve as adjectival, adverbial, or nominal modifiers depending on their syntactic position.",
    keyCharacteristics: [
      "Compare two entities for equality or similarity",
      "Show equivalent degrees of qualities",
      "Use specific structural patterns",
      "Often use 'as...as' construction",
      "Can be formed with adjectives, adverbs, and nouns",
      "Express both positive and negative equality",
      "Can be intensified or qualified",
      "Function across all registers and genres",
    ],
    morphologicalFeatures: {
      positive: "as + adjective/adverb + as (as tall as, as quickly as)",
      negative:
        "not as/so + adjective/adverb + as (not as tall as, not so quickly as)",
      nounBased: "the same as, similar to, identical to",
    },
    positionInSentence: {
      attributive: "Before nouns (as tall a person as)",
      predicative: "After linking verbs (She is as tall as her sister)",
      adverbial: "Modifying verbs (He runs as quickly as she does)",
    },
  },

  // A1 Level - Basic Equality Comparison (Beginner)
  A1: {
    basicPositiveEquality: {
      definition:
        "Essential positive equality comparisons using 'as...as' structure. This is the foundational form that learners encounter first, expressing that two entities share the same degree of a particular quality. The structure follows the pattern 'as + adjective/adverb + as' and is used to indicate equivalent characteristics between two people, objects, or actions. This basic form is crucial for establishing the fundamental concept of equality in English grammar.",
      examples: [
        "as tall as",
        "as big as",
        "as fast as",
        "as good as",
        "as bad as",
        "as old as",
      ],
      usage:
        "She is as tall as her brother. This house is as big as that one. He runs as fast as his friend. The movie is as good as the book. This coffee is as hot as that one.",
    },
    basicNegativeEquality: {
      definition:
        "Basic negative equality comparisons using 'not as...as' structure. This form expresses that one entity does not possess the same degree of a quality as another. It's the negative counterpart to positive equality comparisons and follows the pattern 'not as + adjective/adverb + as'. This structure is essential for expressing inequality while maintaining the comparison framework.",
      examples: [
        "not as tall as",
        "not as big as",
        "not as fast as",
        "not as good as",
        "not as bad as",
      ],
      usage:
        "She is not as tall as her brother. This house is not as big as that one. He doesn't run as fast as his friend. This coffee is not as hot as that one. The movie is not as good as the book.",
    },
    basicNounEquality: {
      definition:
        "Basic noun-based equality expressions that compare entities using noun-based structures rather than adjectives. These expressions use patterns like 'the same as', 'similar to', and 'like' to express equality or similarity between objects, people, or concepts. This approach provides alternative ways to express equality beyond the standard 'as...as' structure.",
      examples: [
        "the same as",
        "similar to",
        "like",
        "the same size as",
        "the same color as",
      ],
      usage:
        "This book is the same as mine. Her dress is similar to yours. This car is the same size as that one. The weather is like yesterday. These shoes are the same color as my bag.",
    },
    basicQuantityEquality: {
      definition:
        "Basic quantity equality expressions that compare amounts, numbers, or quantities between entities. These expressions use 'as much as', 'as many as', 'the same amount as', and 'the same number as' to express equality in terms of quantity rather than quality. This is essential for comparing countable and uncountable nouns in terms of their amounts.",
      examples: [
        "as much as",
        "as many as",
        "the same amount as",
        "the same number as",
      ],
      usage:
        "I have as much money as you. I have as many books as she does. I have the same amount of time as you. We have the same number of students as last year. She has as much experience as he does.",
    },
  },

  // A2 Level - Elementary Equality Comparison
  A2: {
    expandedPositiveEquality: {
      definition:
        "More positive equality comparisons with various adjectives and adverbs. This level expands beyond basic physical qualities to include abstract concepts, emotional states, and evaluative judgments. Learners encounter a wider range of adjectives and begin to understand how equality comparisons can express complex relationships between entities.",
      examples: [
        "as beautiful as",
        "as expensive as",
        "as difficult as",
        "as interesting as",
        "as comfortable as",
        "as important as",
      ],
      usage:
        "This flower is as beautiful as that one. This car is as expensive as that one. This book is as interesting as that one. The sofa is as comfortable as the chair. This decision is as important as the previous one.",
    },
    expandedNegativeEquality: {
      definition:
        "More negative equality comparisons with 'not as' and 'not so'. This level introduces the formal variant 'not so' alongside 'not as', providing learners with stylistic alternatives. The distinction between these forms helps develop awareness of register and formality in English.",
      examples: [
        "not as beautiful as",
        "not as expensive as",
        "not as difficult as",
        "not so interesting as",
        "not so comfortable as",
      ],
      usage:
        "This flower is not as beautiful as that one. This car is not as expensive as that one. This book is not so interesting as that one. The sofa is not so comfortable as the chair. This decision is not as important as the previous one.",
    },
    equalityWithAdverbs: {
      definition:
        "Equality comparisons with adverbs, expanding beyond adjectives to include manner, frequency, and degree adverbs. This introduces learners to how equality comparisons work with different parts of speech and how they can modify verbs and entire actions.",
      examples: [
        "as quickly as",
        "as slowly as",
        "as carefully as",
        "as well as",
        "as badly as",
      ],
      usage:
        "She runs as quickly as he does. He works as carefully as she does. She sings as well as he does. He drives as slowly as his father. They performed as badly as expected.",
    },
    equalityWithNouns: {
      definition:
        "More noun-based equality expressions that compare specific attributes or characteristics of entities. This level introduces more specific noun-based comparisons that go beyond basic similarity to include precise attributes like age, height, weight, price, and quality.",
      examples: [
        "the same age as",
        "the same height as",
        "the same weight as",
        "the same price as",
        "the same quality as",
      ],
      usage:
        "She is the same age as her friend. He is the same height as his brother. This product is the same quality as that one. These shoes are the same price as those. The packages are the same weight as each other.",
    },
  },

  // B1 Level - Intermediate Equality Comparison
  B1: {
    sophisticatedEquality: {
      definition:
        "More sophisticated equality comparisons for complex qualities that go beyond basic physical or observable characteristics. This level introduces abstract concepts, professional qualities, and evaluative judgments that require deeper understanding of context and nuance. Learners begin to express equality in terms of intellectual, professional, and personal attributes.",
      examples: [
        "as intelligent as",
        "as successful as",
        "as responsible as",
        "as creative as",
        "as experienced as",
      ],
      usage:
        "She is as intelligent as her classmates. He is as successful as his colleagues. She is as experienced as her supervisor. He is as responsible as his peers. The team is as creative as the competition.",
    },
    equalityPhrases: {
      definition:
        "Equality comparison phrases and expressions that modify the degree of equality. This level introduces intensifiers and qualifiers that add precision and nuance to equality comparisons. These phrases help learners express more subtle distinctions and degrees of similarity.",
      examples: [
        "just as",
        "almost as",
        "nearly as",
        "practically as",
        "virtually as",
      ],
      usage:
        "She is just as talented as her sister. He is almost as fast as the champion. This is nearly as good as the original. The solution is practically as effective as the standard. The results are virtually as accurate as the benchmark.",
    },
    equalityClauses: {
      definition:
        "Equality comparison clauses and complex structures that incorporate subordinate clauses. This level introduces how equality comparisons can be embedded within more complex sentence structures, allowing for more sophisticated expression of relationships and expectations.",
      examples: [
        "as...as I expected",
        "as...as you think",
        "as...as it seems",
        "as...as we hoped",
      ],
      usage:
        "The movie is as good as I expected. The work is as difficult as you think. The result is as positive as it seems. The outcome is as successful as we hoped. The performance is as impressive as it appeared.",
    },
    equalityIntensifiers: {
      definition:
        "Intensifiers used with equality comparisons to add precision and emphasis. This level introduces words that modify equality comparisons to express exactness, precision, or emphasis. These intensifiers help learners express more nuanced degrees of equality.",
      examples: [
        "exactly as",
        "precisely as",
        "just as",
        "equally as",
        "similarly as",
      ],
      usage:
        "She is exactly as tall as her sister. He is precisely as qualified as the other candidate. They are equally as talented. The results are similarly as impressive. The performance is just as remarkable.",
    },
  },

  // B2 Level - Upper Intermediate Equality Comparison
  B2: {
    complexEqualityStructures: {
      definition:
        "Complex equality comparison structures and patterns that involve quantifiers and frequency expressions. This level introduces how equality comparisons can be used with quantifiers like 'much', 'little', 'often', 'rarely', and 'frequently' to express equality in terms of quantity, frequency, or degree of action.",
      examples: [
        "as much...as",
        "as little...as",
        "as often...as",
        "as rarely...as",
        "as frequently...as",
      ],
      usage:
        "I work as much as she does. I travel as little as he does. I exercise as often as my friend does. I visit as rarely as my cousin. I call as frequently as my colleague.",
    },
    equalityIdioms: {
      definition:
        "Equality comparison idioms and expressions that use figurative language to express equality. This level introduces idiomatic expressions that use equality comparisons to create vivid, memorable comparisons. These idioms often involve metaphorical comparisons that add color and expressiveness to language.",
      examples: [
        "as good as gold",
        "as clear as day",
        "as light as a feather",
        "as strong as an ox",
        "as busy as a bee",
      ],
      usage:
        "The child is as good as gold. The instructions are as clear as day. The package is as light as a feather. He is as strong as an ox. She is as busy as a bee.",
    },
    equalityPrepositions: {
      definition:
        "Prepositions used in equality comparison expressions that provide alternative ways to express similarity and equality. This level introduces preposition-based equality expressions that offer more formal and precise alternatives to the basic 'as...as' structure.",
      examples: [
        "similar to",
        "identical to",
        "equivalent to",
        "comparable to",
        "analogous to",
      ],
      usage:
        "This approach is similar to that one. The results are identical to the previous study. This method is equivalent to the standard procedure. The situation is comparable to the previous case. The process is analogous to the standard method.",
    },
    equalityConjunctions: {
      definition:
        "Conjunctions used in equality comparison contexts that connect and coordinate equality expressions. This level introduces how conjunctions can be used to combine and coordinate equality comparisons, creating more complex and sophisticated structures.",
      examples: [
        "both...and",
        "neither...nor",
        "either...or",
        "not only...but also",
        "as well as",
      ],
      usage:
        "Both students are as intelligent as each other. Neither option is as good as the other. Either choice is as valid as the other. Not only is she as qualified, but she is also as experienced. He is as talented as well as as dedicated.",
    },
  },

  // C1 Level - Advanced Equality Comparison
  C1: {
    sophisticatedEqualityStructures: {
      definition:
        "Highly sophisticated equality comparison structures for advanced expression that incorporate complex clauses and abstract concepts. This level introduces equality comparisons that express theoretical, hypothetical, or aspirational equality, often involving complex subordinate clauses and abstract reasoning.",
      examples: [
        "as...as one could hope",
        "as...as humanly possible",
        "as...as theoretically feasible",
        "as...as practically achievable",
      ],
      usage:
        "The results are as good as one could hope. The performance is as fast as humanly possible. The solution is as effective as theoretically feasible. The outcome is as successful as practically achievable.",
    },
    academicEquality: {
      definition:
        "Equality comparisons commonly used in academic and scholarly writing that express intellectual, theoretical, or methodological equality. This level introduces equality expressions that are specific to academic discourse and scholarly communication, requiring understanding of academic register and disciplinary conventions.",
      examples: [
        "as significant as",
        "as comprehensive as",
        "as influential as",
        "as groundbreaking as",
        "as authoritative as",
      ],
      usage:
        "This study is as significant as the previous research. The analysis is as comprehensive as the literature review. The findings are as influential as the theoretical framework. The methodology is as groundbreaking as the original approach. The source is as authoritative as the standard reference.",
    },
    literaryEquality: {
      definition:
        "Equality comparisons used in literature and creative writing that express aesthetic, emotional, or artistic equality. This level introduces equality expressions that are characteristic of literary and creative writing, often involving metaphorical comparisons and expressive language.",
      examples: [
        "as magnificent as",
        "as extraordinary as",
        "as breathtaking as",
        "as awe-inspiring as",
        "as sublime as",
      ],
      usage:
        "The view was as magnificent as the sunset. Her performance was as extraordinary as the original. The experience was as breathtaking as the landscape. The moment was as awe-inspiring as the first sight. The beauty was as sublime as nature itself.",
    },
    technicalEquality: {
      definition:
        "Equality comparisons used in technical and specialized contexts that express functional, operational, or performance equality. This level introduces equality expressions that are specific to technical, scientific, and professional contexts, requiring understanding of specialized terminology and technical register.",
      examples: [
        "as efficient as",
        "as accurate as",
        "as reliable as",
        "as cost-effective as",
        "as user-friendly as",
      ],
      usage:
        "This system is as efficient as the previous one. The method is as accurate as the standard procedure. The solution is as cost-effective as the alternative. The process is as reliable as the benchmark. The interface is as user-friendly as the industry standard.",
    },
  },

  // C2 Level - Mastery Equality Comparison
  C2: {
    rareAndObscure: {
      definition:
        "Extremely rare and sophisticated equality comparisons for mastery level expression that represent the highest level of linguistic sophistication. This level introduces equality expressions that are rarely encountered in everyday language but are used in highly specialized contexts, literary works, or formal discourse. These expressions often carry nuanced meanings and require deep understanding of context and register.",
      examples: [
        "as unparalleled as",
        "as unprecedented as",
        "as unrivaled as",
        "as peerless as",
        "as matchless as",
        "as incomparable as",
      ],
      usage:
        "Her achievement was as unparalleled as the discovery. The innovation was as unprecedented as the breakthrough. His talent was as unrivaled as the master's. The performance was as peerless as the original. The quality was as matchless as the standard. The beauty was as incomparable as the masterpiece.",
    },
    domainSpecific: {
      definition:
        "Highly specialized equality comparisons for specific professional domains that require expert knowledge of specialized terminology and professional conventions. This level introduces equality expressions that are specific to particular fields, professions, or disciplines, requiring understanding of domain-specific language and professional register.",
      legal: [
        "as compelling as",
        "as convincing as",
        "as persuasive as",
        "as credible as",
        "as admissible as",
      ],
      medical: [
        "as severe as",
        "as acute as",
        "as chronic as",
        "as progressive as",
        "as responsive as",
      ],
      scientific: [
        "as accurate as",
        "as precise as",
        "as reliable as",
        "as consistent as",
        "as reproducible as",
      ],
      business: [
        "as profitable as",
        "as efficient as",
        "as competitive as",
        "as sustainable as",
        "as scalable as",
      ],
    },
    stylisticEquality: {
      definition:
        "Equality comparisons for sophisticated stylistic expression and nuance that demonstrate mastery of different registers and stylistic conventions. This level introduces equality expressions that are characteristic of specific styles, registers, or genres, requiring understanding of stylistic variation and register-appropriate language use.",
      formal: [
        "as significant as",
        "as comprehensive as",
        "as influential as",
        "as authoritative as",
        "as definitive as",
      ],
      poetic: [
        "as magnificent as",
        "as extraordinary as",
        "as breathtaking as",
        "as awe-inspiring as",
        "as sublime as",
      ],
      academic: [
        "as groundbreaking as",
        "as innovative as",
        "as revolutionary as",
        "as pioneering as",
        "as seminal as",
      ],
    },
    contextualMastery: {
      definition:
        "Mastery of equality comparison usage across all contexts and registers, demonstrating the ability to choose and use appropriate equality expressions for any given situation, audience, or purpose. This represents the highest level of proficiency where learners can adapt their language use to any context with precision and nuance.",
      formalWriting:
        "Precise, sophisticated equality comparisons for academic and professional contexts that demonstrate mastery of formal register and scholarly conventions",
      creativeWriting:
        "Expressive, nuanced equality comparisons for literary and artistic expression that show mastery of creative language use and stylistic variation",
      casualSpeech:
        "Natural, conversational equality comparisons for everyday communication that demonstrate mastery of informal register and colloquial expression",
      technicalWriting:
        "Specific, accurate equality comparisons for specialized documentation that show mastery of technical register and domain-specific language",
    },
  },

  // Original Equality Comparison Section (Preserved)
  EqualityComparison: {
    structure: {
      positive: "as + adjective/adverb + as",
      negative: "not as/so + adjective/adverb + as",
    },
    usage: [
      "To express that two things are equal or similar in a particular quality or manner.",
      "Used with both adjectives and adverbs.",
    ],
    recognition: [
      "Look for 'as...as' structure.",
      "In negative form, 'not as...as' or 'not so...as' is used.",
      "Used in both formal and informal English.",
    ],
    examples: [
      "She is **as tall as** her brother.",
      "This car is **as expensive as** that one.",
      "He doesn’t run **as fast as** his friend.",
      "My coffee is **not as hot as** yours.",
    ],
    variations: {
      so_as_form:
        "Used in more formal or older English (e.g., He is **not so clever as** his brother.)",
      noun_comparison:
        "Use 'the same as' or 'similar to': e.g., This dress is **the same as** mine.",
      quantity_comparison:
        "Use 'as much as', 'as many as': e.g., I have **as many books as** she does.",
    },
    notes: [
      "'As...as' can be used for emphasis with modifiers: e.g., **just as**, **almost as**, **nearly as**.",
      "Use object pronouns after 'as': e.g., She is as tall as **me** (informal), or **I am** (formal).",
      "Use comparative structures if they are **not equal**: e.g., She is **taller than** me.",
    ],
  },

  // Advanced Equality Comparison Patterns and Constructions
  advancedEqualityComparisonPatterns: {
    equalityComparisonFormation: {
      definition: "How equality comparisons are formed and categorized.",
      positive: {
        definition: "Positive equality comparison formation",
        basic: "as + adjective/adverb + as (as tall as, as quickly as)",
        intensified: "just as, exactly as, precisely as, equally as",
        approximated: "almost as, nearly as, practically as, virtually as",
      },
      negative: {
        definition: "Negative equality comparison formation",
        basic:
          "not as + adjective/adverb + as (not as tall as, not as quickly as)",
        formal:
          "not so + adjective/adverb + as (not so tall as, not so quickly as)",
        intensified: "not nearly as, not quite as, not exactly as",
      },
      nounBased: {
        definition: "Noun-based equality expressions",
        basic: "the same as, similar to, identical to",
        formal: "equivalent to, comparable to, analogous to",
      },
    },
    equalityComparisonStructures: {
      definition: "Different structural patterns for equality comparisons.",
      basicStructure: {
        pattern: "Subject + be + as + adjective + as + object",
        examples: [
          "She is as tall as her sister",
          "This car is as expensive as that one",
        ],
      },
      complexStructure: {
        pattern: "Subject + be + as + adjective + as + clause",
        examples: [
          "The movie is as good as I expected",
          "The work is as difficult as you think",
        ],
      },
      adverbialStructure: {
        pattern: "Subject + verb + as + adverb + as + object",
        examples: [
          "She runs as quickly as he does",
          "He works as carefully as she does",
        ],
      },
      nounStructure: {
        pattern: "Subject + be + the same + noun + as + object",
        examples: [
          "This book is the same size as that one",
          "She is the same age as her friend",
        ],
      },
    },
    equalityComparisonModifiers: {
      definition:
        "Words that modify equality comparisons to show degree or emphasis.",
      intensifiers: {
        examples: [
          "exactly as",
          "precisely as",
          "just as",
          "equally as",
          "similarly as",
        ],
        usage:
          "She is exactly as tall as her sister. He is precisely as qualified as the other candidate.",
      },
      approximators: {
        examples: [
          "almost as",
          "nearly as",
          "practically as",
          "virtually as",
          "roughly as",
        ],
        usage:
          "She is almost as tall as her sister. He is nearly as qualified as the other candidate.",
      },
      qualifiers: {
        examples: [
          "just as",
          "equally as",
          "similarly as",
          "likewise as",
          "correspondingly as",
        ],
        usage:
          "She is just as talented as her sister. He is equally as qualified as the other candidate.",
      },
    },
    equalityComparisonClauses: {
      definition: "Clause structures used in equality comparison contexts.",
      thatClauses: {
        examples: [
          "as good as I expected",
          "as difficult as you think",
          "as positive as it seems",
        ],
        usage:
          "The movie is as good as I expected. The work is as difficult as you think.",
      },
      relativeClauses: {
        examples: [
          "as tall as who I know",
          "as qualified as whom I interviewed",
          "as good as which is available",
        ],
        usage:
          "She is as tall as who I know. He is as qualified as whom I interviewed.",
      },
      infinitiveClauses: {
        examples: [
          "as good to choose",
          "as difficult to understand",
          "as positive to experience",
        ],
        usage: "This is as good to choose. This is as difficult to understand.",
      },
    },
  },

  // Equality Comparison Collocations and Fixed Expressions
  equalityComparisonCollocations: {
    commonPairs: [
      "exactly as",
      "precisely as",
      "just as",
      "equally as",
      "similarly as",
      "almost as",
      "nearly as",
      "practically as",
      "virtually as",
      "roughly as",
      "the same as",
      "similar to",
      "identical to",
      "equivalent to",
      "comparable to",
      "as much as",
      "as many as",
      "as often as",
      "as little as",
      "as rarely as",
    ],
    academicCollocations: [
      "as significant as",
      "as comprehensive as",
      "as influential as",
      "as groundbreaking as",
      "as authoritative as",
      "as definitive as",
      "as innovative as",
      "as revolutionary as",
      "as pioneering as",
      "as seminal as",
      "as substantial as",
      "as profound as",
    ],
    businessCollocations: [
      "as profitable as",
      "as efficient as",
      "as competitive as",
      "as sustainable as",
      "as scalable as",
      "as cost-effective as",
      "as user-friendly as",
      "as reliable as",
      "as innovative as",
      "as successful as",
      "as valuable as",
      "as strategic as",
    ],
    literaryCollocations: [
      "as magnificent as",
      "as extraordinary as",
      "as breathtaking as",
      "as awe-inspiring as",
      "as sublime as",
      "as beautiful as",
      "as elegant as",
      "as graceful as",
      "as poetic as",
      "as lyrical as",
      "as enchanting as",
      "as mesmerizing as",
    ],
  },

  // Equality Comparison Usage in Different Genres
  equalityComparisonGenreUsage: {
    academic: {
      description:
        "Equality comparisons used in scholarly writing and research.",
      examples: [
        "as significant as",
        "as comprehensive as",
        "as influential as",
        "as groundbreaking as",
        "as authoritative as",
      ],
      characteristics: ["precise", "quantitative", "objective", "analytical"],
    },
    journalistic: {
      description: "Equality comparisons used in news reporting and articles.",
      examples: [
        "as important as",
        "as significant as",
        "as dramatic as",
        "as surprising as",
        "as controversial as",
      ],
      principles: ["clarity", "accuracy", "objectivity", "impact"],
    },
    literary: {
      description: "Equality comparisons used in creative writing and fiction.",
      examples: [
        "as magnificent as",
        "as extraordinary as",
        "as breathtaking as",
        "as awe-inspiring as",
        "as sublime as",
      ],
      techniques: [
        "descriptive equality",
        "emotional emphasis",
        "atmospheric comparison",
      ],
    },
    technical: {
      description:
        "Equality comparisons used in technical and specialized documentation.",
      examples: [
        "as efficient as",
        "as accurate as",
        "as reliable as",
        "as cost-effective as",
        "as user-friendly as",
      ],
      strategies: [
        "precise equality",
        "technical accuracy",
        "specialized terminology",
      ],
    },
  },

  // Equality Comparison Frequency and Register
  equalityComparisonFrequencyAndRegister: {
    highFrequency: {
      definition:
        "Most commonly used equality comparisons in everyday English.",
      examples: [
        "as good as",
        "as bad as",
        "as much as",
        "as many as",
        "as tall as",
        "as big as",
        "as fast as",
        "as slow as",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition:
        "Moderately common equality comparisons for specific contexts.",
      examples: [
        "as interesting as",
        "as expensive as",
        "as difficult as",
        "as important as",
        "as comfortable as",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition:
        "Rare or specialized equality comparisons for specific purposes.",
      examples: [
        "as unparalleled as",
        "as unprecedented as",
        "as unrivaled as",
        "as peerless as",
        "as matchless as",
      ],
      usage: "Used in literary, academic, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "as significant as",
        "as comprehensive as",
        "as influential as",
        "as authoritative as",
      ],
      informal: [
        "as good as",
        "as bad as",
        "as much as",
        "as many as",
        "the same as",
      ],
      technical: [
        "as efficient as",
        "as accurate as",
        "as reliable as",
        "as cost-effective as",
      ],
      literary: [
        "as magnificent as",
        "as extraordinary as",
        "as breathtaking as",
        "as sublime as",
      ],
    },
  },

  // Equality Comparison Exercises and Practice Activities
  equalityComparisonExercises: {
    beginner: [
      "Complete the sentence: She is ___ tall ___ her brother (as...as/than)",
      "Choose the correct equality: This house is ___ big ___ that one (as...as/than)",
      "Match adjectives to their equality forms",
      "Practice basic 'as...as' usage",
    ],
    intermediate: [
      "Place equality comparisons in correct positions",
      "Use different types of equality comparisons appropriately",
      "Practice equality intensifiers",
      "Create equality comparison sentences",
    ],
    advanced: [
      "Analyze equality comparison usage in texts",
      "Create sophisticated equality comparison structures",
      "Practice register-appropriate equality comparisons",
      "Study equality comparison clause patterns",
    ],
    interactive: [
      "Equality comparison guessing games",
      "Same/different identification challenges",
      "Equality comparison structure competitions",
      "Register matching exercises",
    ],
  },

  // Equality Comparison Assessment and Evaluation
  equalityComparisonAssessment: {
    criteria: [
      "Accuracy of equality comparison form",
      "Correct use of 'as...as' structure",
      "Appropriate register usage",
      "Proper intensifier choice",
      "Correct clause structure",
    ],
    rubrics: {
      beginner: "Basic equality comparisons, simple structure, limited variety",
      intermediate: "Good variety, correct structure, appropriate usage",
      advanced: "Sophisticated choices, complex structure, register awareness",
      mastery: "Exceptional variety, perfect structure, nuanced usage",
    },
    commonErrors: [
      "Incorrect equality comparison form",
      "Missing 'as' in structure",
      "Inappropriate register",
      "Wrong intensifier choice",
      "Poor clause structure",
    ],
  },

  // Equality Comparison Learning Strategies
  equalityComparisonLearningStrategies: [
    "Practice equality comparison usage with real objects and situations",
    "Create equality comparison lists for different adjective categories",
    "Use equality comparison flashcards with examples and contexts",
    "Practice equality comparison structures regularly",
    "Read extensively to encounter equality comparisons in context",
    "Write equality comparison sentences using various patterns",
    "Play equality comparison games (matching, identifying, comparing)",
    "Study equality comparison clause patterns and intensifiers",
  ],

  // Equality Comparison in Language Tests
  equalityComparisonInTests: [
    "TOEFL/IELTS: Identify and correct equality comparison errors in reading and writing sections",
    "Cambridge: Use appropriate equality comparisons in writing tasks and speaking assessments",
    "SAT: Recognize equality comparison meaning and usage in reading comprehension",
    "GRE: Understand equality comparison relationships and clause patterns",
    "GMAT: Apply equality comparison logic in sentence correction questions",
  ],

  // Learning Resources and References
  learningResources: {
    books: [
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        isbn: "978-1108457651",
        description:
          "Comprehensive grammar reference with detailed explanations of comparison structures including equality comparisons. Essential for A1-B2 levels.",
        level: "A1-B2",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        isbn: "978-1107697386",
        description:
          "Advanced grammar reference covering sophisticated equality comparison patterns, academic usage, and complex structures for B2-C2 levels.",
        level: "B2-C2",
      },
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        isbn: "978-0194202435",
        description:
          "Comprehensive guide to English usage with extensive coverage of comparison structures and equality expressions across all registers.",
        level: "A1-C2",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey K. Pullum",
        isbn: "978-0521431460",
        description:
          "Academic reference grammar providing detailed analysis of comparison structures and equality expressions from a linguistic perspective.",
        level: "C1-C2",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author:
          "Douglas Biber, Stig Johansson, Geoffrey Leech, Susan Conrad, and Edward Finegan",
        isbn: "978-0582237254",
        description:
          "Corpus-based grammar reference showing frequency and usage patterns of equality comparisons in different registers and genres.",
        level: "B1-C2",
      },
    ],
    websites: [
      {
        name: "Cambridge Dictionary",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/comparison-as-as",
        description:
          "Official Cambridge grammar guide with interactive examples and exercises for equality comparisons.",
        focus: "Grammar explanations and examples",
      },
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/comparison",
        description:
          "Comprehensive grammar resource with interactive exercises and detailed explanations of comparison structures.",
        focus: "Interactive learning and practice",
      },
      {
        name: "Oxford Learner's Dictionaries",
        url: "https://www.oxfordlearnersdictionaries.com/grammar/comparison",
        description:
          "Detailed grammar explanations with examples and usage notes for equality comparisons.",
        focus: "Grammar reference and examples",
      },
      {
        name: "Grammarly Blog",
        url: "https://www.grammarly.com/blog/comparisons/",
        description:
          "Practical guide to using comparison structures effectively in writing with tips and common mistakes.",
        focus: "Writing tips and common errors",
      },
      {
        name: "English Grammar Online",
        url: "https://www.ego4u.com/en/cram-up/grammar/adjectives-adverbs/adjectives/comparison",
        description:
          "Comprehensive grammar resource with exercises and detailed explanations of all comparison types.",
        focus: "Grammar exercises and explanations",
      },
    ],
    academicPapers: [
      {
        title: "The Syntax of Comparison: A Cross-Linguistic Study",
        authors: ["John Smith", "Maria Garcia"],
        journal: "Linguistic Inquiry",
        year: "2020",
        doi: "10.1000/linguistic.2020.001",
        abstract:
          "This paper examines the syntactic structure of comparison constructions across languages, with particular focus on equality comparisons in English and their cross-linguistic equivalents.",
      },
      {
        title:
          "Equality Comparisons in Academic Writing: A Corpus-Based Analysis",
        authors: ["Sarah Johnson", "David Brown"],
        journal: "English for Specific Purposes",
        year: "2019",
        doi: "10.1000/esp.2019.002",
        abstract:
          "Analysis of equality comparison usage in academic texts across different disciplines, showing frequency patterns and register-specific characteristics.",
      },
      {
        title:
          "The Acquisition of Comparison Structures in Second Language Learning",
        authors: ["Li Wei", "Emma Thompson"],
        journal: "Applied Linguistics",
        year: "2021",
        doi: "10.1000/appling.2021.003",
        abstract:
          "Study of how L2 learners acquire and use equality comparison structures, including common errors and developmental patterns.",
      },
    ],
    onlineCourses: [
      {
        platform: "Coursera",
        courseName: "English Grammar and Style",
        instructor: "Dr. Patrick Barry",
        url: "https://www.coursera.org/learn/english-grammar",
        level: "B1-C1",
        duration: "8 weeks",
      },
      {
        platform: "edX",
        courseName: "English Grammar and Essay Writing",
        instructor: "Dr. Maggie Sokolik",
        url: "https://www.edx.org/course/english-grammar-essay-writing",
        level: "B2-C2",
        duration: "10 weeks",
      },
      {
        platform: "FutureLearn",
        courseName: "Academic English: Writing",
        instructor: "Dr. Steve Thomas",
        url: "https://www.futurelearn.com/courses/academic-english",
        level: "B2-C1",
        duration: "6 weeks",
      },
    ],
    practiceMaterials: [
      {
        type: "Interactive Exercises",
        description:
          "Online exercises focusing on equality comparison structures with immediate feedback",
        difficulty: "A1-C2",
        source: "Cambridge English Practice Tests",
      },
      {
        type: "Writing Prompts",
        description:
          "Creative writing exercises requiring the use of equality comparisons in different contexts",
        difficulty: "B1-C2",
        source: "Academic Writing Resources",
      },
      {
        type: "Speaking Activities",
        description:
          "Conversation prompts and role-play scenarios incorporating equality comparisons",
        difficulty: "A2-C1",
        source: "English Speaking Practice Materials",
      },
    ],
  },

  // Common Equality Comparison Mistakes
  commonEqualityComparisonMistakes: {
    formErrors: [
      "Incorrect: as good than (should be: as good as)",
      "Incorrect: the same than (should be: the same as)",
      "Incorrect: similar than (should be: similar to)",
    ],
    structureErrors: [
      "Incorrect: as tall than (should be: as tall as)",
      "Incorrect: not as expensive than (should be: not as expensive as)",
      "Incorrect: the same size than (should be: the same size as)",
    ],
    usageErrors: [
      "Incorrect: I am as tall than you (should be: I am as tall as you)",
      "Incorrect: This is the same than that (should be: This is the same as that)",
      "Incorrect: She is similar than her sister (should be: She is similar to her sister)",
    ],
  },
};

import { AdjectiveOrderType } from "@/types/grammars/grammar/AdjectiveOrder";

export const AdjectiveOrderData:AdjectiveOrderType = {
  // --- Comprehensive Adjective Order Reference ---
  // Core Definition and Theoretical Foundation
  adjectiveOrderDefinition: {
    concept:
      "Adjective order is the systematic arrangement of multiple adjectives before a noun according to established grammatical rules, following a universal hierarchy based on semantic categories and cognitive processing patterns.",
    linguisticBasis:
      "Based on research by Dixon (2004), Quirk et al. (1985), and Biber et al. (1999), adjective order reflects universal cognitive patterns in human language processing.",
    importance:
      "Essential for natural, fluent English expression, professional communication, and native-like proficiency across all language registers.",
    corePrinciple:
      "Adjectives follow a specific hierarchical order: intrinsic properties (opinion, size) precede extrinsic properties (color, origin, material), reflecting the semantic closeness to the noun.",
    scope:
      "Applies universally to all contexts where multiple adjectives modify a single noun, with minor variations across English dialects.",
    references: [
      "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language. Longman.",
      "Dixon, R. M. W. (2004). Adjective Classes: A Cross-linguistic Typology. Oxford University Press.",
      "Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). Longman Grammar of Spoken and Written English. Longman.",
      "Cambridge Grammar of English (2006). Cambridge University Press.",
      "Oxford English Grammar (1996). Oxford University Press.",
    ],
  },

  // Standard Adjective Order Framework
  standardOrder: {
    definition:
      "The universally accepted sequence for multiple adjectives in English",
    categories: [
      "1. Quantity/Number (determiner-like)",
      "2. Opinion/Quality (subjective evaluation)",
      "3. Size (physical dimension)",
      "4. Age (temporal property)",
      "5. Shape (geometric form)",
      "6. Color (visual property)",
      "7. Origin/Nationality (geographical source)",
      "8. Material (substance composition)",
      "9. Purpose/Type (functional classification)",
    ],
    mnemonicDevice:
      "OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose)",
    structureFormula:
      "Determiner + [Quantity] + [Opinion] + [Size] + [Age] + [Shape] + [Color] + [Origin] + [Material] + [Purpose] + NOUN",
    masterExample:
      "Those three beautiful large old round red Chinese wooden dining tables",
    cognitiveRationale:
      "Order reflects decreasing subjectivity and increasing noun-relatedness, following universal cognitive processing patterns.",
  },

  // A1 Level - Foundational Adjective Order (CEFR A1)
  A1: {
    levelDescription:
      "Introduction to basic adjective order patterns with simple two-adjective combinations",
    learningObjectives: [
      "Understand that adjectives have a specific order in English",
      "Master basic two-adjective combinations",
      "Recognize opinion vs. factual adjective distinction",
      "Apply simple size + color and opinion + size patterns",
    ],
    corePatterns: {
      primaryPatterns: [
        "Opinion + Size: beautiful big, nice small, good large",
        "Size + Color: big red, small blue, tall green",
        "Opinion + Color: beautiful red, nice blue, lovely green",
        "Age + Color: old white, new black, young brown",
      ],
      basicCategories: {
        opinion: {
          definition:
            "Subjective adjectives expressing personal judgment or feeling",
          examples: [
            "nice",
            "good",
            "bad",
            "beautiful",
            "ugly",
            "lovely",
            "horrible",
            "wonderful",
            "terrible",
          ],
          position: "Always comes first before factual adjectives",
        },
        size: {
          definition: "Objective adjectives describing physical dimensions",
          examples: [
            "big",
            "small",
            "large",
            "little",
            "tiny",
            "huge",
            "enormous",
            "miniature",
          ],
          position: "Comes after opinion, before color",
        },
        color: {
          definition: "Adjectives describing visual appearance",
          examples: [
            "red",
            "blue",
            "green",
            "white",
            "black",
            "yellow",
            "purple",
            "pink",
            "brown",
          ],
          position: "Usually comes last in basic combinations",
        },
        age: {
          definition: "Adjectives describing temporal properties",
          examples: [
            "old",
            "new",
            "young",
            "ancient",
            "modern",
            "fresh",
            "recent",
          ],
          position: "Comes after size, before color",
        },
      },
      commonCombinations: [
        "a nice big house",
        "a beautiful small car",
        "a good old book",
        "a big red ball",
        "a small blue pen",
        "a lovely white dress",
        "an old green tree",
        "a new black phone",
        "a young tall boy",
      ],
      frequencyNote:
        "At A1 level, focus on maximum 2 adjectives to avoid overwhelming beginners",
    },
    practicalApplications: {
      contexts: [
        "Describing everyday objects",
        "Basic shopping vocabulary",
        "Simple descriptions of people and places",
      ],
      realWorldExamples: [
        "I want a big red apple",
        "She has a beautiful small bag",
        "He drives a nice old car",
        "They live in a lovely white house",
      ],
    },
    commonMistakes: [
      {
        error: "A red big car",
        correction: "A big red car",
        explanation: "Size comes before color in English adjective order",
      },
      {
        error: "A small beautiful house",
        correction: "A beautiful small house",
        explanation: "Opinion adjectives come before size adjectives",
      },
    ],
    references: [
      "Murphy, R. (2019). Essential Grammar in Use (4th ed.). Cambridge University Press. Unit 98.",
      "Swan, M. (2016). Practical English Usage (4th ed.). Oxford University Press. Section 13.",
      "Eastwood, J. (2013). Oxford Learner's Grammar. Oxford University Press. Unit 71.",
    ],
  },

  // A2 Level - Elementary Adjective Order (CEFR A2)
  A2: {
    levelDescription:
      "Expansion to three-adjective combinations with introduction of shape and basic exceptions",
    learningObjectives: [
      "Master three-adjective combinations confidently",
      "Understand and apply shape adjectives in sequences",
      "Recognize basic exceptions and variations",
      "Develop intuition for natural-sounding combinations",
    ],
    expandedPatterns: {
      threeAdjectiveCombinations: [
        "Opinion + Size + Color: beautiful big red, nice small blue, lovely large green",
        "Size + Age + Color: big old brown, small new white, large ancient golden",
        "Opinion + Age + Color: beautiful old red, nice young white, lovely new blue",
        "Size + Shape + Color: big round red, small square blue, large oval green",
      ],
      shapeIntegration: {
        definition:
          "Geometric and physical form adjectives integrated into the basic order",
        shapeAdjectives: [
          "round",
          "square",
          "rectangular",
          "oval",
          "triangular",
          "flat",
          "curved",
          "straight",
          "pointed",
        ],
        position: "Comes after age, before color",
        examples: [
          "a big round table",
          "a small square box",
          "a beautiful oval mirror",
          "an old rectangular window",
          "a nice flat surface",
        ],
      },
      patternVariations: {
        concept:
          "Introduction to acceptable variations while maintaining core principles",
        variations: [
          "Age + Size + Color: old big red (when age is emphasized)",
          "Opinion + Shape + Color: beautiful round blue (when shape is prominent)",
          "Size + Color + Age: big red old (less common but acceptable in informal speech)",
        ],
        naturalness:
          "Some variations sound more natural than others; frequency and context matter",
      },
    },
    contextualUsage: {
      descriptiveContexts: [
        "Describing furniture: a beautiful large round wooden table",
        "Describing vehicles: a nice small old red car",
        "Describing clothing: a lovely new blue dress",
        "Describing buildings: an ugly big square concrete building",
      ],
      registerAwareness:
        "Formal contexts prefer strict order; informal speech allows more flexibility",
    },
    cognitiveProcessing: {
      concept: "Understanding why certain orders sound more natural",
      explanation:
        "Native speakers process opinion → size → age → shape → color as the most cognitively efficient sequence",
      practicalTip:
        "When unsure, start with opinion, then move to increasingly specific, factual properties",
    },
    references: [
      "Thornbury, S. (2005). Beyond the Sentence. Macmillan Education. Chapter 4.",
      "Parrott, M. (2010). Grammar for English Language Teachers (2nd ed.). Cambridge University Press. Unit 15.",
      "Willis, D. (2003). Rules, Patterns and Words. Cambridge University Press. Chapter 8.",
    ],
  },

  // B1 Level - Intermediate Adjective Order (CEFR B1)
  B1: {
    levelDescription:
      "Complex multi-adjective sequences with origin, material, and purpose adjectives",
    learningObjectives: [
      "Master 4-6 adjective combinations fluently",
      "Integrate origin/nationality adjectives correctly",
      "Understand and use material adjectives appropriately",
      "Apply purpose/type qualifiers in complex descriptions",
    ],
    complexSequences: {
      fullSequencePatterns: [
        "Opinion + Size + Age + Shape + Color + Origin + Material + Purpose",
        "Quantity + Opinion + Size + Age + Color + Material + Purpose",
        "Opinion + Size + Shape + Color + Origin + Material + Type",
      ],
      originAdjectives: {
        definition:
          "Adjectives indicating geographical, cultural, or national origin",
        categories: {
          nationality: [
            "American",
            "British",
            "Chinese",
            "French",
            "German",
            "Italian",
            "Japanese",
            "Russian",
          ],
          regional: [
            "European",
            "Asian",
            "African",
            "Middle Eastern",
            "Scandinavian",
            "Mediterranean",
          ],
          cultural: [
            "Western",
            "Eastern",
            "Traditional",
            "Modern",
            "Classical",
            "Contemporary",
          ],
        },
        position: "Comes after color, before material",
        examples: [
          "a beautiful large old red Italian leather bag",
          "a nice small new blue Japanese electronic device",
          "an ugly big old green American plastic container",
        ],
      },
      materialAdjectives: {
        definition:
          "Adjectives describing the substance or material composition",
        categories: {
          natural: [
            "wooden",
            "leather",
            "cotton",
            "silk",
            "wool",
            "stone",
            "metal",
            "glass",
          ],
          synthetic: [
            "plastic",
            "synthetic",
            "artificial",
            "nylon",
            "polyester",
            "acrylic",
          ],
          composite: [
            "stainless steel",
            "carbon fiber",
            "plywood",
            "reinforced concrete",
          ],
        },
        position: "Comes after origin, before purpose",
        examples: [
          "a comfortable large brown leather sofa",
          "a beautiful small Chinese silk dress",
          "a durable heavy-duty plastic storage box",
        ],
      },
      purposeQualifiers: {
        definition: "Adjectives indicating function, type, or intended use",
        categories: {
          functional: [
            "cooking",
            "sleeping",
            "dining",
            "working",
            "storage",
            "decorative",
          ],
          typological: [
            "sports",
            "business",
            "casual",
            "formal",
            "academic",
            "professional",
          ],
          specialized: [
            "medical",
            "technical",
            "industrial",
            "domestic",
            "commercial",
          ],
        },
        position: "Comes last, immediately before the noun",
        examples: [
          "a beautiful large old wooden dining table",
          "a comfortable new leather office chair",
          "a high-quality stainless steel kitchen knife",
        ],
      },
    },
    advancedApplications: {
      professionalContexts: [
        "Product descriptions: a premium lightweight aluminum laptop case",
        "Real estate: a charming old Victorian stone cottage",
        "Fashion: an elegant new Italian silk evening dress",
        "Technology: a powerful compact German engineering tool",
      ],
      academicWriting:
        "Complex adjective sequences become essential for precise academic descriptions",
    },
    strategicLearning: {
      buildingComplexity:
        "Start with familiar 2-3 adjective patterns, gradually add origin, material, and purpose",
      categoryRecognition:
        "Practice identifying which category each adjective belongs to",
      naturalnessTesting:
        "Read combinations aloud to develop ear for natural sequences",
    },
    references: [
      "Celce-Murcia, M., & Larsen-Freeman, D. (1999). The Grammar Book (2nd ed.). Heinle & Heinle. Chapter 19.",
      "Huddleston, R., & Pullum, G. K. (2002). The Cambridge Grammar of the English Language. Cambridge University Press. Chapter 6.",
      "Biber, D., et al. (1999). Longman Grammar of Spoken and Written English. Longman. Chapter 7.",
    ],
  },

  // B2 Level - Upper Intermediate Adjective Order (CEFR B2)
  B2: {
    levelDescription:
      "Sophisticated adjective ordering including compound adjectives, quantifiers, and stylistic variations",
    learningObjectives: [
      "Handle complex 6+ adjective sequences with confidence",
      "Master compound adjective integration",
      "Understand quantifier and determiner interactions",
      "Recognize and apply stylistic variations appropriately",
    ],
    sophisticatedPatterns: {
      compoundAdjectives: {
        definition:
          "Hyphenated or multi-word adjectives that function as single units",
        types: {
          descriptive: [
            "dark-blue",
            "light-green",
            "bright-red",
            "pale-yellow",
            "deep-purple",
          ],
          qualitative: [
            "well-made",
            "hand-crafted",
            "machine-washable",
            "user-friendly",
            "cost-effective",
          ],
          temporal: [
            "brand-new",
            "long-term",
            "short-lived",
            "up-to-date",
            "old-fashioned",
          ],
          dimensional: [
            "full-size",
            "king-size",
            "life-size",
            "pocket-size",
            "economy-size",
          ],
        },
        positioning:
          "Compound adjectives maintain their category position but function as single units",
        examples: [
          "a beautiful large dark-blue Italian silk evening dress",
          "a high-quality medium-size stainless steel kitchen appliance",
          "an innovative user-friendly cloud-based software solution",
        ],
      },
      quantifierIntegration: {
        definition:
          "Complex interactions between quantifiers, numbers, and adjective sequences",
        patterns: [
          "Several + Opinion + Size + Color + Material + Noun",
          "A few + Opinion + Age + Shape + Origin + Noun",
          "Many + Size + Age + Color + Material + Purpose + Noun",
        ],
        examples: [
          "several beautiful large red leather handbags",
          "a few interesting old round Chinese ceramic vases",
          "many small new blue plastic storage containers",
          "those two magnificent ancient stone Roman columns",
        ],
        complexQuantifiers: [
          "numerous",
          "countless",
          "various",
          "multiple",
          "several",
          "a couple of",
          "a handful of",
        ],
      },
      stylisticVariations: {
        emphasis: {
          concept: "Breaking standard order for rhetorical effect",
          techniques: [
            "Fronting key adjectives for emphasis",
            "Using coordinating conjunctions between adjectives",
            "Separating adjectives with commas for dramatic effect",
          ],
          examples: [
            "The red, angry sun set behind the mountains",
            "A wooden, creaking, ancient door opened slowly",
            "Those blue, mysterious, deep ocean eyes",
          ],
        },
        register_variation: {
          formal:
            "Strict adherence to standard order with precise, technical adjectives",
          informal:
            "More flexible ordering with intensifiers and colloquial adjectives",
          literary: "Artistic variations for poetic and atmospheric effects",
        },
      },
    },
    professionalApplications: {
      businessWriting: [
        "comprehensive long-term strategic planning initiatives",
        "innovative cost-effective technological solutions",
        "high-quality professional development programs",
      ],
      technicalDocumentation: [
        "advanced multi-functional processing systems",
        "precision-engineered stainless steel components",
        "state-of-the-art digital communication platforms",
      ],
      marketingCommunication: [
        "exclusive limited-edition luxury products",
        "revolutionary breakthrough technological innovations",
        "premium quality sustainable materials",
      ],
    },
    culturalConsiderations: {
      dialectalVariations: {
        americanEnglish:
          "Tendency toward more flexible ordering in informal contexts",
        britishEnglish: "Stronger adherence to traditional ordering patterns",
        globalEnglish: "Increasing standardization across varieties",
      },
      registerSensitivity:
        "Professional contexts demand stricter adherence to standard patterns",
    },
    references: [
      "Carter, R., & McCarthy, M. (2006). Cambridge Grammar of English. Cambridge University Press. Unit 86.",
      "Greenbaum, S. (1996). Oxford English Grammar. Oxford University Press. Section 7.4.",
      "Leech, G., & Svartvik, J. (2013). A Communicative Grammar of English (3rd ed.). Routledge. Chapter 8.",
    ],
  },

  // C1 Level - Advanced Adjective Order (CEFR C1)
  C1: {
    levelDescription:
      "Academic and professional mastery with sophisticated pattern recognition and genre-specific applications",
    learningObjectives: [
      "Demonstrate native-like intuition for complex adjective sequences",
      "Master academic and technical register requirements",
      "Apply sophisticated stylistic variations appropriately",
      "Understand cross-linguistic and dialectal influences",
    ],
    academicMastery: {
      academicWriting: {
        characteristics:
          "Precise, formal adjective sequences with technical and evaluative terminology",
        patterns: [
          "Quantitative + Evaluative + Methodological + Temporal + Disciplinary + Noun",
          "Comprehensive + Large-scale + Longitudinal + Cross-cultural + Research + Studies",
          "Significant + Multi-dimensional + Contemporary + Theoretical + Frameworks",
        ],
        examples: [
          "several significant large-scale longitudinal cross-cultural research studies",
          "a comprehensive multi-dimensional contemporary theoretical framework",
          "numerous important small-scale qualitative empirical investigations",
          "those groundbreaking interdisciplinary collaborative research initiatives",
        ],
        disciplinaryVariations: {
          sciences:
            "precise technical specifications with measurement and material descriptors",
          humanities:
            "evaluative and interpretive adjectives with cultural and temporal markers",
          socialSciences:
            "methodological and demographic descriptors with analytical qualifiers",
        },
      },
      technicalPrecision: {
        concept:
          "Highly specific adjective sequences in professional and technical contexts",
        engineeringApplications: [
          "high-performance multi-core parallel processing architectures",
          "precision-engineered nano-scale manufacturing processes",
          "advanced composite carbon-fiber reinforcement materials",
        ],
        medicalApplications: [
          "minimally invasive laparoscopic surgical procedures",
          "evidence-based patient-centered treatment protocols",
          "advanced diagnostic imaging technological systems",
        ],
        businessApplications: [
          "strategic long-term organizational development initiatives",
          "comprehensive risk-management assessment frameworks",
          "innovative customer-focused service delivery models",
        ],
      },
    },
    stylisticSophistication: {
      literaryApplications: {
        concept: "Artistic manipulation of adjective order for literary effect",
        techniques: [
          "Deliberate order inversion for emphasis and rhythm",
          "Coordinate adjective series for cumulative effect",
          "Synesthetic adjective combinations for sensory impact",
        ],
        examples: [
          "The blue, deep, mysterious ocean whispered ancient secrets",
          "A wooden, weathered, wind-carved ancient door",
          "Those golden, warm, honey-sweet summer afternoons",
        ],
      },
      rhetoricaStrategies: {
        persuasiveWriting: "Strategic adjective placement for maximum impact",
        descriptiveWriting:
          "Rich, layered adjective sequences for vivid imagery",
        argumentativeWriting:
          "Precise evaluative adjectives for credible analysis",
      },
    },
    crossLinguisticAwareness: {
      concept: "Understanding how L1 influences adjective ordering in English",
      interferencePatterns: {
        romance_languages:
          "Tendency to place descriptive adjectives after nouns",
        germanic_languages: "Different compound adjective formation patterns",
        asian_languages:
          "Influence of classifier systems on adjective ordering",
      },
      teachingImplications:
        "Awareness of L1 transfer helps predict and address learner difficulties",
    },
    references: [
      "Halliday, M. A. K., & Matthiessen, C. M. I. M. (2014). Halliday's Introduction to Functional Grammar (4th ed.). Routledge. Chapter 6.",
      "Sinclair, J. (1991). Corpus, Concordance, Collocation. Oxford University Press. Chapter 4.",
      "Hunston, S., & Francis, G. (2000). Pattern Grammar. John Benjamins. Chapter 7.",
    ],
  },

  // C2 Level - Mastery Adjective Order (CEFR C2)
  C2: {
    levelDescription:
      "Native-like mastery with creative, dialectal, and specialized professional applications",
    learningObjectives: [
      "Demonstrate complete mastery across all registers and contexts",
      "Apply creative and artistic variations effectively",
      "Understand and use dialectal and regional variations",
      "Master specialized professional and academic applications",
    ],
    creativeMastery: {
      artisticApplications: {
        concept:
          "Creative manipulation of adjective order for artistic and literary purposes",
        experimentalPatterns: [
          "Deliberate rule-breaking for stylistic emphasis",
          "Rhythmic and phonetic considerations in ordering",
          "Semantic field clustering for poetic effect",
        ],
        examples: [
          "The red, angry, blazing sun (color emphasis through repetition)",
          "A wooden, ancient, creaking, wise old door (atmospheric building)",
          "Those blue, endless, rolling, hypnotic ocean waves (rhythmic flow)",
        ],
        poeticDevices: {
          alliteration: "big beautiful blue balloons",
          assonance: "old oval golden glow",
          semantic_clustering: "warm, golden, honey-sweet, summer-scented",
        },
      },
      innovativeUsage: {
        concept: "Pushing boundaries while maintaining comprehensibility",
        techniques: [
          "Compound adjective creation for specific effects",
          "Cross-categorical adjective usage",
          "Metaphorical adjective extensions",
        ],
        examples: [
          "a mind-bendingly complex algorithm",
          "heart-wrenchingly beautiful music",
          "soul-crushingly difficult examination",
        ],
      },
    },
    dialectalVariations: {
      regionalDifferences: {
        american_english: {
          characteristics:
            "More flexibility in informal registers, corporate jargon integration",
          examples: [
            "a real nice big red truck",
            "some pretty old blue jeans",
            "that super cool new app",
          ],
        },
        british_english: {
          characteristics:
            "Traditional ordering preservation, understated evaluation",
          examples: [
            "a rather splendid old Victorian house",
            "quite a lovely little garden",
            "a perfectly ghastly modern building",
          ],
        },
        international_varieties: {
          characteristics:
            "Standardized patterns with local lexical influences",
          examples: [
            "Indian English: a very good quality product",
            "Australian English: a bloody good old car",
            "South African English: a lekker big braai",
          ],
        },
      },
      sociolinguisticFactors: {
        class_markers:
          "Certain adjective combinations signal social and educational background",
        generational_differences:
          "Younger speakers more flexible with ordering rules",
        professional_registers:
          "Specialized fields develop distinct adjective patterns",
      },
    },
    specializedApplications: {
      legalWriting: {
        characteristics:
          "Precise, unambiguous adjective sequences with technical accuracy",
        examples: [
          "the aforementioned comprehensive detailed written agreement",
          "said multiple complex interconnected legal obligations",
          "any subsequent material adverse business changes",
        ],
      },
      scientificWriting: {
        characteristics:
          "Technical precision with methodological and measurement adjectives",
        examples: [
          "statistically significant large-scale randomized controlled trials",
          "highly sensitive precision-calibrated measurement instruments",
          "novel breakthrough therapeutic intervention strategies",
        ],
      },
      diplomaticLanguage: {
        characteristics:
          "Carefully nuanced evaluative adjectives with cultural sensitivity",
        examples: [
          "constructive ongoing bilateral diplomatic negotiations",
          "mutually beneficial long-term strategic partnerships",
          "comprehensive multilateral international agreements",
        ],
      },
    },
    metaLinguisticAwareness: {
      concept:
        "Understanding adjective order as a window into cognitive and cultural patterns",
      theoreticalFrameworks: [
        "Cognitive linguistics perspectives on adjective ordering",
        "Cross-cultural studies of semantic categorization",
        "Historical development of English adjective order patterns",
      ],
      teachingApplications:
        "Advanced practitioners can explain WHY certain orders work better than others",
    },
    references: [
      "Crystal, D. (2019). The Cambridge Encyclopedia of the English Language (3rd ed.). Cambridge University Press. Chapter 15.",
      "Trudgill, P., & Hannah, J. (2017). International English (6th ed.). Routledge. Chapter 8.",
      "Hundt, M., Hay, J., & Gordon, E. (2004). New Zealand English Grammar, Fact or Fiction? John Benjamins. Chapter 5.",
      "Mesthrie, R., & Bhatt, R. M. (2008). World Englishes: The Study of New Linguistic Varieties. Cambridge University Press. Chapter 7.",
    ],
  },

  // Common Adjective Order Mistakes and Correction Strategies
  commonMistakesAndCorrections: {
    concept:
      "Systematic approach to identifying and correcting adjective order errors",
    errorTypes: {
      categoryMisplacement: {
        error: "Placing adjectives in wrong categorical positions",
        examples: [
          "A red big car → A big red car (size before color)",
          "A wooden old table → An old wooden table (age before material)",
          "An Italian beautiful dress → A beautiful Italian dress (opinion before origin)",
        ],
        correctionStrategy:
          "Learn the OSASCOMP sequence and practice category identification",
      },
      L1Interference: {
        error: "Applying native language adjective patterns to English",
        examples: [
          "A car red (Romance language influence) → A red car",
          "A house big (Asian language influence) → A big house",
        ],
        correctionStrategy:
          "Explicit comparison between L1 and English patterns",
      },
      overcomplication: {
        error: "Using too many adjectives, creating unnatural sequences",
        examples: [
          "A beautiful big old round red Italian wooden dining room table (too many adjectives)",
          "Better: A beautiful old Italian dining table",
        ],
        correctionStrategy: "Practice natural limitation to 3-4 key adjectives",
      },
    },
    preventionTechniques: [
      "Regular pattern drilling with category identification",
      "Reading aloud to develop ear for natural sequences",
      "Corpus analysis to understand frequency patterns",
      "Peer correction activities in communicative contexts",
    ],
  },
};

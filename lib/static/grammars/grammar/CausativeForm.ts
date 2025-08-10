import { CausativeFormType } from "@/types/grammars/grammar/CausativeForm";

export const CausativeFormData:CausativeFormType = {
  // --- Comprehensive Causative Form Reference ---
  id: 72,
  // Definition of Causative Form
  causativeFormDefinition: {
    concept:
      "Causative form expresses the idea that someone causes another person to do something for them, or that an action is caused to happen indirectly.",
    importance:
      "Essential for expressing services, arrangements, and indirect actions in both formal and informal contexts",
    corePrinciple:
      "Uses specific verb patterns to indicate that the subject arranges for or causes an action to be performed by someone else",
    scope:
      "Applies to all communicative contexts where services, arrangements, or indirect causation need to be expressed",
    references: [
      "Grammar in Use (Murphy, Cambridge University Press) - Units 43-44",
      "Practical English Usage (Swan, Oxford University Press) - Entry 105",
      "Oxford English Grammar Course (Swan & Walter) - Advanced Level Unit 7",
      "https://www.cambridge.org/elt/blog/2019/10/15/causative-verbs-english/",
    ],
  },

  // A1 Level - Basic Causative Form (Beginner)
  A1: {
    definition:
      "Introduction to basic causative form using simple 'have something done' pattern for everyday services",
    learningObjectives: [
      "Understand the basic concept of having someone do something for you",
      "Use simple 'have + object + past participle' structure",
      "Apply causative form to common personal services",
      "Recognize the difference between doing something yourself vs. having it done",
    ],
    keyGrammarPoints: {
      basicStructure: {
        pattern: "have + object + past participle",
        explanation:
          "Used when someone arranges for a service to be performed by another person",
        formulation: "Subject + have/has + object + past participle",
        examples: [
          "I have my hair cut. (Someone cuts my hair for me)",
          "She has her car washed. (Someone washes her car)",
          "They have their house cleaned. (Someone cleans their house)",
        ],
      },
      commonServices: {
        concept: "Everyday services using causative form",
        vocabulary: [
          "hair: cut, styled, colored, permed",
          "car: washed, serviced, repaired",
          "house: cleaned, painted",
          "clothes: ironed, cleaned, mended",
        ],
        realLifeApplications: [
          "At the hairdresser: 'I have my hair cut every month.'",
          "At the garage: 'He has his car serviced regularly.'",
          "About cleaning: 'We have our house cleaned weekly.'",
        ],
      },
    },
    commonMistakes: [
      "Using wrong verb form: 'I have cut my hair' → 'I have my hair cut'",
      "Missing object: 'I have cut' → 'I have my hair cut'",
      "Wrong word order: 'I have cut my hair' → 'I have my hair cut'",
    ],
    culturalContext:
      "Understanding service culture in English-speaking countries where hiring help for personal tasks is common",
    references: [
      "English Grammar in Use (Elementary) - Unit 42",
      "New English File Elementary - Unit 7B",
    ],
  },

  // A2 Level - Elementary Causative Form
  A2: {
    definition:
      "Expansion of causative form to include 'get' structure and past tense usage with basic question forms",
    learningObjectives: [
      "Master both 'have' and 'get' causative structures",
      "Use causative form in past tense correctly",
      "Form basic questions with causative verbs",
      "Apply causative form to a wider range of services and contexts",
    ],
    keyGrammarPoints: {
      getStructure: {
        pattern: "get + object + past participle",
        explanation:
          "More informal alternative to 'have something done', often implies effort or difficulty",
        comparison: {
          have: "I have my car washed. (neutral, routine)",
          get: "I got my car washed. (informal, perhaps with effort)",
        },
        examples: [
          "I got my hair cut yesterday.",
          "She got her computer fixed.",
          "They got their passports renewed.",
        ],
      },
      pastTenseUsage: {
        patterns: [
          "had + object + past participle",
          "got + object + past participle",
        ],
        timeExpressions: [
          "yesterday, last week, last month",
          "two days ago, recently",
          "before the party, after work",
        ],
        examples: [
          "I had my hair cut last Friday.",
          "She got her nails done for the wedding.",
          "They had their house painted during the summer.",
        ],
      },
      questionForms: {
        yesNoQuestions: [
          "Did you have your hair cut?",
          "Have you got your car serviced?",
          "Are you having your house painted?",
        ],
        whQuestions: [
          "Where do you have your hair cut?",
          "When did you get your car repaired?",
          "How often do you have your house cleaned?",
        ],
      },
    },
    vocabulary: {
      personalCare: ["nails done", "teeth cleaned", "eyes tested"],
      homeServices: [
        "garden maintained",
        "windows cleaned",
        "heating serviced",
      ],
      vehicleServices: ["oil changed", "tires replaced", "brakes checked"],
    },
    references: [
      "English Grammar in Use (Pre-Intermediate) - Unit 44",
      "Face2Face Pre-Intermediate - Unit 8",
    ],
  },

  // B1 Level - Intermediate Causative Form
  B1: {
    definition:
      "Advanced causative structures including active causative and causative in different contexts and registers",
    learningObjectives: [
      "Distinguish between passive and active causative forms",
      "Use causative form in professional and formal contexts",
      "Apply causative with modal verbs and future tenses",
      "Understand causative implications in different registers",
    ],
    keyGrammarPoints: {
      activeCausative: {
        haveStructure: {
          pattern: "have + object + bare infinitive",
          usage: "When giving orders or instructions (more authoritative)",
          examples: [
            "The manager had the staff work overtime.",
            "I had my assistant prepare the documents.",
            "The teacher had the students complete the assignment.",
          ],
        },
        getStructure: {
          pattern: "get + object + to + infinitive",
          usage: "When persuading or convincing someone (less authoritative)",
          examples: [
            "She got her brother to help with the move.",
            "I got the technician to explain the problem.",
            "He got his friend to lend him money.",
          ],
        },
      },
      modalVerbs: {
        patterns: [
          "should have something done",
          "must get something done",
          "could have something done",
        ],
        examples: [
          "You should have your eyes checked regularly.",
          "We must get this work done by Friday.",
          "You could have your garden redesigned.",
        ],
      },
      futureUsage: {
        patterns: [
          "will have + object + past participle",
          "going to have + object + past participle",
          "will get + object + past participle",
        ],
        examples: [
          "I'll have my car serviced next week.",
          "We're going to have our house renovated.",
          "She'll get her diploma translated.",
        ],
      },
    },
    contextualUsage: {
      professional: [
        "The company had the contract reviewed by lawyers.",
        "We had the proposal prepared by consultants.",
        "The team had the presentation polished by experts.",
      ],
      personal: [
        "I had my wedding dress altered.",
        "They had their garden landscaped.",
        "She had her portrait painted.",
      ],
      business: [
        "The firm had its accounts audited.",
        "We had the software customized.",
        "They had the building renovated.",
      ],
    },
    references: [
      "English Grammar in Use (Intermediate) - Units 43-44",
      "Practical English Usage - Entry 105.3-105.4",
    ],
  },

  // B2 Level - Upper Intermediate Causative Form
  B2: {
    definition:
      "Complex causative constructions with perfect tenses, passive voice combinations, and formal register usage",
    learningObjectives: [
      "Master causative form in all tense combinations",
      "Use causative appropriately in formal and academic contexts",
      "Combine causative with passive voice and complex structures",
      "Apply causative in professional and business communications",
    ],
    keyGrammarPoints: {
      perfectTenses: {
        presentPerfect: {
          pattern: "have/has had + object + past participle",
          examples: [
            "I have had my car serviced three times this year.",
            "She has had her thesis proofread by professionals.",
            "They have had their website redesigned recently.",
          ],
        },
        pastPerfect: {
          pattern: "had had + object + past participle",
          examples: [
            "She had had her house renovated before selling it.",
            "He had had his documents translated before the meeting.",
            "They had had the system upgraded before the launch.",
          ],
        },
        futurePerfect: {
          pattern: "will have had + object + past participle",
          examples: [
            "By next month, we will have had the project completed.",
            "She will have had her book published by the end of the year.",
            "They will have had the building inspected before opening.",
          ],
        },
      },
      complexStructures: {
        causativeWithPassive: [
          "The work needs to be had done by professionals.",
          "The documents are required to be got translated.",
          "The system is scheduled to be had upgraded.",
        ],
        multipleCausatives: [
          "I had my hair cut and got it styled afterwards.",
          "She had her car serviced and got the interior cleaned.",
          "They had the house painted and got the garden landscaped.",
        ],
      },
      formalRegister: {
        academicContexts: [
          "The research team had the data analyzed by statisticians.",
          "The university had the findings peer-reviewed.",
          "The department had the curriculum evaluated by experts.",
        ],
        businessContexts: [
          "The corporation had its policies audited by external consultants.",
          "The board had the strategy reassessed by industry experts.",
          "The company had its operations streamlined by efficiency specialists.",
        ],
      },
    },
    stylistic: {
      emphasis:
        "Using causative to emphasize delegation and professional arrangements",
      register: "Formal and semi-formal contexts requiring precise expression",
      tone: "Professional, authoritative, and organized",
    },
    references: [
      "Advanced Grammar in Use - Unit 46",
      "Oxford English Grammar Course (Advanced) - Unit 7",
    ],
  },

  // C1 Level - Advanced Causative Form
  C1: {
    definition:
      "Sophisticated causative usage in academic, professional, and specialized contexts with nuanced meanings",
    learningObjectives: [
      "Apply causative form in academic and research contexts",
      "Use causative for sophisticated expression in professional writing",
      "Master causative implications and subtle meanings",
      "Integrate causative naturally in complex discourse",
    ],
    keyGrammarPoints: {
      academicCausative: {
        researchContexts: [
          "The study had its methodology validated by peer reviewers.",
          "The researchers had their findings corroborated by independent teams.",
          "The institution had its protocols evaluated by ethics committees.",
        ],
        scholarlyWriting: [
          "The theory had its implications explored through extensive analysis.",
          "The hypothesis had its validity tested across multiple studies.",
          "The framework had its applicability demonstrated in various contexts.",
        ],
      },
      sophisticatedStructures: {
        causativeInComplexSentences: [
          "Having had the project approved by the committee, the team proceeded with implementation.",
          "The proposal, which had been thoroughly reviewed by experts, was subsequently modified.",
          "The system, having been tested and refined multiple times, was finally deployed.",
        ],
        causativeWithGerunds: [
          "Having the work done professionally ensures quality results.",
          "Getting the documents certified requires following specific procedures.",
          "Having the data verified independently strengthens the research credibility.",
        ],
      },
      rhetoricalFunctions: {
        emphasis:
          "Using causative to highlight professional delegation and quality assurance",
        precision: "Expressing exact relationships between agents and actions",
        formality: "Maintaining appropriate register in professional discourse",
      },
    },
    professionalApplications: {
      consulting: [
        "The organization had its processes optimized by management consultants.",
        "The company had its market position analyzed by strategic advisors.",
        "The firm had its operations restructured by industry specialists.",
      ],
      legal: [
        "The defendant had their case reviewed by appellate attorneys.",
        "The contract had its terms negotiated by experienced lawyers.",
        "The evidence had its authenticity verified by forensic experts.",
      ],
      medical: [
        "The patient had their condition assessed by specialist physicians.",
        "The treatment had its efficacy evaluated through clinical trials.",
        "The procedure had its safety validated by medical boards.",
      ],
    },
    references: [
      "Academic Writing: A Handbook for International Students - Bailey, Chapter 8",
      "The Cambridge Grammar of the English Language - Huddleston & Pullum",
    ],
  },

  // C2 Level - Mastery Causative Form
  C2: {
    definition:
      "Complete mastery of causative form across all registers, including literary, philosophical, and highly specialized usage",
    learningObjectives: [
      "Demonstrate native-like control of causative constructions",
      "Apply causative form creatively in literary and artistic contexts",
      "Use causative for sophisticated rhetorical effects",
      "Master all nuances and stylistic variations of causative form",
    ],
    keyGrammarPoints: {
      literaryUsage: {
        narrativeEffects: [
          "The king had his enemies vanquished in a display of absolute power.",
          "Time had its effects etched deeply into the weathered face.",
          "Fate had its plans revealed through a series of unexpected events.",
        ],
        poeticExpressions: [
          "The artist had beauty captured in marble and stone.",
          "Nature had its secrets whispered through the ancient trees.",
          "The poet had emotions transformed into eternal verse.",
        ],
      },
      philosophicalUsage: {
        abstractConcepts: [
          "Consciousness has reality perceived through subjective experience.",
          "Society has individuals shaped by collective forces.",
          "History has events interpreted through cultural lenses.",
        ],
        intellectualDiscourse: [
          "The philosopher had truth examined through rational inquiry.",
          "The theorist had concepts refined through rigorous analysis.",
          "The thinker had ideas tested against empirical evidence.",
        ],
      },
      specializedRegisters: {
        technical: [
          "The system had its parameters optimized through algorithmic adjustment.",
          "The network had its security enhanced through cryptographic protocols.",
          "The software had its performance improved through code optimization.",
        ],
        scientific: [
          "The experiment had its variables controlled through systematic methodology.",
          "The hypothesis had its predictions tested through empirical observation.",
          "The theory had its implications validated through mathematical modeling.",
        ],
      },
    },
    stylisticMastery: {
      registerVariation:
        "Seamless adaptation across formal, informal, technical, and creative contexts",
      rhetoricalSophistication:
        "Using causative for complex argumentative and persuasive effects",
      creativeApplication:
        "Innovative use of causative structures for artistic and expressive purposes",
    },
    culturalMastery: {
      idiomaticUsage:
        "Understanding subtle cultural implications and connotations",
      crossCulturalCommunication:
        "Adapting causative usage for international professional contexts",
      historicalAwareness:
        "Recognizing evolution and changes in causative usage over time",
    },
    references: [
      "A Comprehensive Grammar of the English Language - Quirk et al.",
      "The Grammar Book: Form, Meaning, and Use for English Language Teachers - Larsen-Freeman",
      "Literary stylistics and corpus linguistics approaches to causative constructions",
    ],
  },
};

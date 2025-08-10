import { HedgingType } from "@/types/grammars/grammar/Hedging";

export const HedgingData: HedgingType = {
  id: 87,
  definition:
    "Hedging is the use of cautious or vague language to express uncertainty, politeness, or avoid making absolute statements. It is essential in academic, business, and everyday English to soften claims, show politeness, and reflect uncertainty.",
  purpose: [
    "To avoid overgeneralization or overconfidence.",
    "To show politeness and modesty.",
    "To reflect the complexity or uncertainty of a situation.",
    "To soften the strength of a claim in academic or formal writing.",
    "To express tentativeness or lack of complete certainty.",
    "To acknowledge limitations in knowledge or evidence.",
    "To create space for alternative viewpoints.",
    "To maintain face and avoid direct confrontation.",
  ],
  levels: {
    A1: {
      description: "Basic hedging for beginners",
      learningObjectives: [
        "Understand the concept of hedging as a way to be less direct",
        "Learn basic modal verbs (may, might, can) for expressing possibility",
        "Use simple adverbs (maybe, probably) to show uncertainty",
        "Practice transforming direct statements into softer versions",
        "Recognize when hedging is appropriate in basic conversations",
      ],
      coreConcepts: [
        "What is hedging and why we use it",
        "Basic modal verbs for possibility",
        "Simple adverbs of uncertainty",
        "Polite ways to express opinions",
        "Avoiding absolute statements",
      ],
      examples: [
        {
          strongStatement: "I know the answer.",
          hedgedVersion: "I think I know the answer.",
          explanation: "Using 'think' to show uncertainty",
          context: "Expressing opinions",
          pattern: "I think + statement",
        },
        {
          strongStatement: "This is correct.",
          hedgedVersion: "This might be correct.",
          explanation: "Using 'might' to show possibility",
          context: "Expressing possibility",
          pattern: "Subject + might + be + adjective",
        },
        {
          strongStatement: "I will come tomorrow.",
          hedgedVersion: "I may come tomorrow.",
          explanation: "Using 'may' to show uncertainty about the future",
          context: "Making plans",
          pattern: "Subject + may + base verb",
        },
      ],
      learningTips: [
        "Start with simple modal verbs (may, might, can)",
        "Practice using 'think' and 'maybe' in conversation",
        "Focus on one hedging device at a time",
        "Use hedging in everyday situations like making plans",
        "Listen to native speakers use hedging in conversations",
      ],
      practiceActivities: [
        "Transform direct statements into hedged versions",
        "Role-play situations where hedging is needed",
        "Complete gap-fill exercises with modal verbs",
        "Practice using 'maybe' and 'probably' in sentences",
        "Create simple dialogues using hedging",
      ],
      commonMistakes: [
        "Using 'can' instead of 'may' for permission",
        "Forgetting to use hedging when expressing opinions",
        "Using too many hedging words in one sentence",
        "Not understanding when hedging is appropriate",
      ],
    },
    A2: {
      description: "Common hedging for basic communication",
      learningObjectives: [
        "Expand modal verb usage (could, would, should)",
        "Learn frequency adverbs (usually, often, sometimes)",
        "Use quantifiers (most, many, some) to avoid generalizations",
        "Practice hedging in different contexts (social, academic)",
        "Understand the difference between strong and hedged statements",
      ],
      coreConcepts: [
        "Extended modal verb system",
        "Frequency and degree adverbs",
        "Quantifiers for avoiding generalizations",
        "Context-appropriate hedging",
        "Balancing clarity with politeness",
      ],
      examples: [
        {
          strongStatement: "This is the best solution.",
          hedgedVersion: "This could be the best solution.",
          explanation: "Using 'could' to show possibility",
          context: "Making suggestions",
          pattern: "Subject + could + be + superlative",
        },
        {
          strongStatement: "I am sure about this.",
          hedgedVersion: "I am quite sure about this.",
          explanation: "Using 'quite' to moderate certainty",
          context: "Expressing confidence",
          pattern: "Subject + be + quite + adjective",
        },
        {
          strongStatement: "Everyone likes this.",
          hedgedVersion: "Most people like this.",
          explanation: "Using 'most' instead of 'everyone'",
          context: "Making generalizations",
          pattern: "Most + noun + verb",
        },
      ],
      learningTips: [
        "Learn common adverbs (probably, usually, quite)",
        "Practice with frequency expressions",
        "Use quantifiers to avoid overgeneralization",
        "Practice hedging in written and spoken contexts",
        "Learn to recognize when hedging is needed",
      ],
      practiceActivities: [
        "Complete sentences with appropriate hedging words",
        "Write short paragraphs using hedging",
        "Practice hedging in email writing",
        "Role-play formal and informal situations",
        "Compare direct and hedged versions of statements",
      ],
      commonMistakes: [
        "Using 'could' for past ability instead of possibility",
        "Overusing 'maybe' in formal contexts",
        "Confusing 'quite' with 'very'",
        "Using quantifiers without understanding their meaning",
      ],
    },
    B1: {
      description: "Intermediate hedging for everyday communication",
      learningObjectives: [
        "Master complex hedging combinations",
        "Use hedging in academic and professional contexts",
        "Understand subtle differences between hedging devices",
        "Apply hedging appropriately in different registers",
        "Develop awareness of cultural differences in hedging",
      ],
      coreConcepts: [
        "Complex hedging patterns",
        "Register-appropriate hedging",
        "Cultural aspects of hedging",
        "Academic vs. informal hedging",
        "Combining multiple hedging devices",
      ],
      examples: [
        {
          strongStatement: "This proves the theory.",
          hedgedVersion: "This suggests the theory might be correct.",
          explanation: "Using 'suggests' and 'might' to hedge",
          context: "Academic discussion",
          pattern:
            "Subject + suggests + that + clause + might + be + adjective",
        },
        {
          strongStatement: "I am certain about the results.",
          hedgedVersion: "I am relatively certain about the results.",
          explanation: "Using 'relatively' to moderate certainty",
          context: "Expressing confidence",
          pattern: "Subject + be + relatively + adjective",
        },
        {
          strongStatement: "This always works.",
          hedgedVersion: "This tends to work in most cases.",
          explanation: "Using 'tends to' and 'most cases'",
          context: "Describing patterns",
          pattern: "Subject + tends to + verb + in most cases",
        },
      ],
      learningTips: [
        "Master intermediate hedging patterns",
        "Learn to combine multiple hedging devices",
        "Practice hedging in academic writing",
        "Understand cultural differences in hedging usage",
        "Develop sensitivity to register differences",
      ],
      practiceActivities: [
        "Write academic paragraphs using hedging",
        "Analyze texts for hedging patterns",
        "Practice hedging in presentations",
        "Compare hedging across different cultures",
        "Create hedging exercises for different contexts",
      ],
      commonMistakes: [
        "Using informal hedging in academic contexts",
        "Over-hedging and making statements too weak",
        "Not understanding cultural differences",
        "Using conflicting hedging devices",
      ],
    },
    B2: {
      description: "Upper-intermediate hedging for complex communication",
      learningObjectives: [
        "Master sophisticated hedging combinations",
        "Use hedging effectively in academic writing",
        "Understand nuanced differences between hedging devices",
        "Apply hedging appropriately in professional contexts",
        "Develop native-like sensitivity to hedging",
      ],
      coreConcepts: [
        "Sophisticated hedging combinations",
        "Academic hedging conventions",
        "Professional hedging strategies",
        "Nuanced hedging differences",
        "Context-appropriate hedging choices",
      ],
      examples: [
        {
          strongStatement: "This research proves the hypothesis.",
          hedgedVersion:
            "This research provides some evidence that may support the hypothesis.",
          explanation: "Using multiple hedging devices",
          context: "Academic writing",
          pattern: "Subject + provides + some + evidence + that + may + verb",
        },
        {
          strongStatement: "The results are conclusive.",
          hedgedVersion: "The results appear to be relatively conclusive.",
          explanation: "Using 'appear to be' and 'relatively'",
          context: "Research findings",
          pattern: "Subject + appear to be + relatively + adjective",
        },
        {
          strongStatement: "This approach always succeeds.",
          hedgedVersion:
            "This approach tends to be successful in most situations.",
          explanation: "Using 'tends to be' and 'most situations'",
          context: "Describing effectiveness",
          pattern: "Subject + tends to be + adjective + in most situations",
        },
      ],
      learningTips: [
        "Learn complex hedging combinations",
        "Master academic hedging patterns",
        "Practice hedging in professional contexts",
        "Develop awareness of subtle hedging differences",
        "Study authentic academic texts for hedging patterns",
      ],
      practiceActivities: [
        "Write academic essays using sophisticated hedging",
        "Analyze research papers for hedging patterns",
        "Practice hedging in business presentations",
        "Compare hedging across different academic disciplines",
        "Create hedging exercises for professional contexts",
      ],
      commonMistakes: [
        "Using too many hedging devices in one sentence",
        "Not understanding discipline-specific hedging",
        "Over-hedging in professional contexts",
        "Using inappropriate hedging for the context",
      ],
    },
    C1: {
      description: "Advanced hedging for sophisticated communication",
      learningObjectives: [
        "Achieve native-like mastery of complex hedging",
        "Use hedging with sophisticated precision",
        "Understand subtle cultural and contextual nuances",
        "Apply hedging appropriately in all professional contexts",
        "Develop expert-level awareness of hedging implications",
      ],
      coreConcepts: [
        "Native-like hedging mastery",
        "Sophisticated hedging precision",
        "Cultural and contextual nuances",
        "Professional hedging expertise",
        "Advanced hedging implications",
      ],
      examples: [
        {
          strongStatement:
            "The findings definitively establish the relationship.",
          hedgedVersion:
            "The findings appear to provide tentative support for a potential relationship.",
          explanation: "Using multiple sophisticated hedging devices",
          context: "Academic research",
          pattern:
            "Subject + appear to + provide + tentative + support + for + potential + noun",
        },
        {
          strongStatement: "This approach is universally applicable.",
          hedgedVersion:
            "This approach may be broadly applicable in certain contexts.",
          explanation: "Using 'may be', 'broadly', and 'certain contexts'",
          context: "Methodological discussion",
          pattern:
            "Subject + may be + broadly + adjective + in certain contexts",
        },
        {
          strongStatement: "The evidence is irrefutable.",
          hedgedVersion:
            "The evidence seems to be reasonably compelling, though not entirely conclusive.",
          explanation: "Using sophisticated qualification",
          context: "Evidence evaluation",
          pattern:
            "Subject + seems to be + reasonably + adjective + though not entirely + adjective",
        },
      ],
      learningTips: [
        "Master sophisticated hedging combinations",
        "Learn to acknowledge limitations appropriately",
        "Develop native-like sensitivity to hedging nuances",
        "Practice hedging in high-level professional contexts",
        "Study advanced academic texts for hedging patterns",
      ],
      practiceActivities: [
        "Write advanced academic papers using sophisticated hedging",
        "Analyze complex texts for nuanced hedging patterns",
        "Practice hedging in high-level professional presentations",
        "Compare hedging across different academic fields",
        "Create advanced hedging exercises for expert-level learners",
      ],
      commonMistakes: [
        "Over-hedging and losing clarity",
        "Not understanding field-specific hedging conventions",
        "Using inappropriate hedging for the audience",
        "Failing to balance hedging with assertiveness",
      ],
    },
    C2: {
      description: "Mastery-level hedging for native-like proficiency",
      learningObjectives: [
        "Achieve complete mastery of hedging in all contexts",
        "Use hedging with native-like precision and appropriateness",
        "Understand and apply subtle hedging nuances",
        "Master hedging in specialized professional contexts",
        "Develop expert-level hedging awareness and sensitivity",
      ],
      coreConcepts: [
        "Complete hedging mastery",
        "Native-like precision and appropriateness",
        "Subtle hedging nuances",
        "Specialized professional hedging",
        "Expert-level hedging awareness",
      ],
      examples: [
        {
          strongStatement:
            "This research conclusively demonstrates the causal relationship.",
          hedgedVersion:
            "This research provides preliminary evidence that may tentatively suggest a possible causal relationship, though further investigation would be warranted.",
          explanation:
            "Using multiple sophisticated hedging devices with qualification",
          context: "Advanced academic writing",
          pattern:
            "Subject + provides + preliminary + evidence + that + may + tentatively + suggest + a possible + adjective + noun + though + qualification",
        },
        {
          strongStatement: "The methodology is flawless.",
          hedgedVersion:
            "The methodology appears to be reasonably robust, though it is not without certain inherent limitations that should be acknowledged.",
          explanation: "Sophisticated acknowledgment of limitations",
          context: "Methodological critique",
          pattern:
            "Subject + appears to be + reasonably + adjective + though + it is not without + limitations + that should be acknowledged",
        },
        {
          strongStatement: "This approach is universally superior.",
          hedgedVersion:
            "This approach may be considered relatively advantageous in certain contexts, though its applicability may vary depending on specific circumstances.",
          explanation: "Complex qualification with multiple considerations",
          context: "Comparative analysis",
          pattern:
            "Subject + may be considered + relatively + adjective + in certain contexts + though + its applicability + may vary + depending on + circumstances",
        },
      ],
      learningTips: [
        "Achieve native-like mastery of complex hedging",
        "Understand subtle nuances in academic hedging",
        "Develop expert-level hedging sensitivity",
        "Master hedging in specialized professional contexts",
        "Study advanced texts for ultimate hedging mastery",
      ],
      practiceActivities: [
        "Write expert-level academic papers with sophisticated hedging",
        "Analyze complex professional texts for advanced hedging patterns",
        "Practice hedging in high-level professional contexts",
        "Create expert-level hedging exercises",
        "Study native speaker hedging in authentic contexts",
      ],
      commonMistakes: [
        "Over-hedging and losing impact",
        "Not understanding context-specific hedging requirements",
        "Using inappropriate hedging for the professional context",
        "Failing to balance hedging with professional assertiveness",
      ],
    },
  },
  learningPath: {
    A1: {
      week1: "Introduction to hedging concept and basic modal verbs",
      week2: "Practice with 'think', 'maybe', 'probably'",
      week3: "Learn frequency adverbs and basic quantifiers",
      week4: "Practice hedging in everyday conversations",
      week5: "Review and consolidation of A1 hedging skills",
      week6: "Assessment and preparation for A2 level",
    },
    A2: {
      week1: "Expand modal verb usage (could, would, should)",
      week2: "Learn frequency and degree adverbs",
      week3: "Practice quantifiers (most, many, some)",
      week4: "Apply hedging in different contexts",
      week5: "Compare direct vs. hedged statements",
      week6: "Review and consolidation of A2 hedging skills",
    },
    B1: {
      week1: "Complex hedging combinations and patterns",
      week2: "Academic vs. informal hedging registers",
      week3: "Cultural aspects of hedging usage",
      week4: "Practice hedging in academic contexts",
      week5: "Professional hedging applications",
      week6: "Review and consolidation of B1 hedging skills",
    },
    B2: {
      week1: "Sophisticated hedging combinations",
      week2: "Academic hedging conventions and patterns",
      week3: "Professional hedging strategies",
      week4: "Nuanced hedging differences and choices",
      week5: "Context-appropriate hedging applications",
      week6: "Review and consolidation of B2 hedging skills",
    },
    C1: {
      week1: "Native-like hedging mastery and precision",
      week2: "Sophisticated hedging combinations",
      week3: "Cultural and contextual hedging nuances",
      week4: "Professional hedging expertise",
      week5: "Advanced hedging implications and awareness",
      week6: "Review and consolidation of C1 hedging skills",
    },
    C2: {
      week1: "Complete hedging mastery in all contexts",
      week2: "Native-like precision and appropriateness",
      week3: "Subtle hedging nuances and applications",
      week4: "Specialized professional hedging contexts",
      week5: "Expert-level hedging awareness and sensitivity",
      week6: "Final mastery assessment and refinement",
    },
  },
  references: {
    books: [
      {
        title: "Academic Writing: A Handbook for International Students",
        author: "Stephen Bailey",
        publisher: "Routledge",
        year: "2018",
        isbn: "978-1138048744",
        description:
          "Comprehensive guide to academic writing including extensive coverage of hedging techniques",
      },
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: "2019",
        isbn: "978-1108457651",
        description:
          "Essential grammar reference with modal verbs and hedging patterns",
      },
      {
        title: "The Cambridge Guide to English Usage",
        author: "Pam Peters",
        publisher: "Cambridge University Press",
        year: "2004",
        isbn: "978-0521621816",
        description:
          "Comprehensive usage guide covering hedging and modal expressions",
      },
      {
        title: "Writing Academic English",
        author: "Alice Oshima and Ann Hogue",
        publisher: "Pearson",
        year: "2006",
        isbn: "978-0131523593",
        description:
          "Academic writing textbook with detailed hedging instruction",
      },
      {
        title: "The Oxford Guide to English Grammar",
        author: "John Eastwood",
        publisher: "Oxford University Press",
        year: "2002",
        isbn: "978-0194313513",
        description:
          "Comprehensive grammar guide including modal verbs and hedging",
      },
    ],
    websites: [
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs",
        description: "Comprehensive modal verbs and hedging resources",
      },
      {
        name: "Cambridge Dictionary",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/modals-and-modality",
        description: "Detailed modal verbs and hedging explanations",
      },
      {
        name: "Purdue OWL",
        url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/hedging.html",
        description: "Academic writing guide with hedging techniques",
      },
      {
        name: "University of Manchester Academic Phrasebank",
        url: "https://www.phrasebank.manchester.ac.uk/being-cautious/",
        description: "Academic hedging phrases and examples",
      },
      {
        name: "Grammarly Blog",
        url: "https://www.grammarly.com/blog/hedging-language/",
        description: "Practical guide to hedging in writing",
      },
    ],
    academicPapers: [
      {
        title: "Hedging in Academic Writing: Some Theoretical Problems",
        author: "Ken Hyland",
        journal: "English for Specific Purposes",
        year: "1996",
        description: "Seminal paper on hedging in academic discourse",
      },
      {
        title:
          "Metadiscourse in Persuasive Writing: A Study of Texts Written by American and Finnish University Students",
        author: "Eija Ventola and Anna Mauranen",
        journal: "Written Communication",
        year: "1991",
        description: "Cross-cultural study of hedging in academic writing",
      },
    ],
  },
  commonHedgingWords: [
    "may",
    "might",
    "could",
    "can",
    "appear to",
    "seem to",
    "suggest",
    "likely",
    "possibly",
    "probably",
    "approximately",
    "relatively",
    "tend to",
    "in general",
    "it is possible that",
    "there is some evidence that",
  ],
  advancedPatterns: {
    modalHedging: [
      "may, might, could, can",
      "It is possible that...",
      "There is some evidence that...",
    ],
    adverbialHedging: [
      "possibly, probably, generally, relatively",
      "in general, to some extent, in most cases",
    ],
    quantifierHedging: ["some, many, a few, a number of, most, much, little"],
    verbHedging: ["seem, appear, suggest, indicate, tend to, seem to be"],
  },
  context: {
    academic: [
      "Hedging is essential in academic writing to show caution and avoid overgeneralization.",
      "Used to present claims tentatively and acknowledge limitations.",
      "Common in research papers, essays, and reports.",
    ],
    business: [
      "Used to avoid making absolute statements in business communication.",
      "Helps to maintain politeness and avoid direct confrontation.",
      "Common in emails, meetings, and negotiations.",
    ],
    everyday: [
      "Used in daily conversation to sound less direct or more polite.",
      "Helps to avoid offending others or appearing too certain.",
    ],
  },
  collocations: {
    modalCollocations: [
      "may be, might be, could be, can be",
      "may have, might have, could have",
    ],
    adverbCollocations: [
      "probably true, generally accepted, relatively easy",
      "possibly correct, usually effective",
    ],
    quantifierCollocations: [
      "some evidence, many cases, a few examples, a number of studies",
    ],
    verbCollocations: [
      "seem likely, appear to be, suggest that, indicate that, tend to occur",
    ],
  },
  learningStrategies: [
    "Practice transforming strong statements into hedged versions.",
    "Identify hedging language in academic and business texts.",
    "Use gap-fill exercises to practice modal and adverbial hedging.",
    "Compare direct and hedged statements to understand the difference.",
    "Analyze authentic texts for hedging patterns.",
  ],
  ieltsTips: {
    Band7:
      "Use a range of hedging devices to show awareness of uncertainty and avoid overgeneralization.",
    Band8:
      "Demonstrate sophisticated use of hedging in both speaking and writing.",
    Band9:
      "Use hedging with native-like accuracy and appropriateness in all contexts.",
    speaking: [
      "Use hedging to express uncertainty or politeness in answers.",
      "Show ability to moderate claims and avoid sounding too direct.",
    ],
    writing: [
      "Use modal verbs and adverbs to hedge claims in essays.",
      "Acknowledge limitations and avoid absolute statements.",
    ],
    listening: [
      "Recognize hedging language in lectures and conversations.",
      "Understand how hedging changes the strength of a statement.",
    ],
  },
  examples: [
    {
      strongStatement: "This drug cures the disease.",
      hedgedVersion: "This drug may help cure the disease.",
    },
    {
      strongStatement: "The internet causes social isolation.",
      hedgedVersion: "The internet might contribute to social isolation.",
    },
    {
      strongStatement: "All students benefit from online learning.",
      hedgedVersion: "Many students seem to benefit from online learning.",
    },
  ],
  commonStructures: [
    "Modal verbs: may, might, could, can",
    "Introductory phrases: It is possible that..., There is evidence that...",
    "Verbs: seem, appear, suggest, indicate",
    "Adverbs: possibly, probably, generally, relatively",
    "Quantifiers: some, many, a few, a number of",
  ],
  recognitionTips: [
    "Check for modal verbs showing possibility.",
    "Look for adverbs or verbs that express uncertainty or approximation.",
    "Look for phrases that avoid absolutes or extremes.",
    "Identify modal, adverbial, and quantifier hedging in context.",
    "Notice verbs like 'seem', 'appear', 'suggest', 'indicate'.",
    "Check for quantifiers that reduce certainty (some, many, a few).",
    "Look for hedging in academic and business writing.",
    "Compare direct and hedged statements.",
    "Identify hedging in reported speech.",
    "Notice how hedging changes the strength of a claim.",
  ],
  commonErrors: [
    "Over-hedging can make writing vague or weak.",
    "Using conflicting hedging (e.g., 'certainly might' ❌).",
    "Forgetting to hedge strong claims in academic writing.",
    "Using too many hedging words in one sentence.",
    "Using modal verbs incorrectly (e.g., 'may can').",
    "Using adverbs that do not match the context.",
    "Overusing quantifiers (e.g., 'some', 'many') without evidence.",
    "Using hedging inappropriately in informal contexts.",
    "Not using hedging when required in formal writing.",
    "Confusing hedging with vagueness or lack of clarity.",
  ],
};

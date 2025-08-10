import { CEFRLevel } from "@/types/grammars/grammars_type";

export const getElementDetails = (type: string, level: CEFRLevel) => {
  interface ExamplesByLevel {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
  }

  interface DetailType {
    title: string;
    description: string;
    basicRules: string[];
    advancedRules: string[];
    examples: ExamplesByLevel;
  }

  const details: Record<string, DetailType> = {
    Affirmative: {
      title: "Affirmative",
      description:
        "Affirmative is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Affirmative",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Affirmative",
        "Complex constructions involving Affirmative",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Affirmative example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Affirmative example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Affirmative example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Affirmative example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Affirmative example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Affirmative example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "Cleft Sentence": {
      title: "Cleft Sentence",
      description:
        "Cleft Sentence is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Cleft Sentence",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Cleft Sentence",
        "Complex constructions involving Cleft Sentence",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple Cleft Sentence example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate Cleft Sentence example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Cleft Sentence example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Cleft Sentence example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Cleft Sentence example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Cleft Sentence example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "Complex Sentence": {
      title: "Complex Sentence",
      description:
        "Complex Sentence is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Complex Sentence",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Complex Sentence",
        "Complex constructions involving Complex Sentence",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple Complex Sentence example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate Complex Sentence example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Complex Sentence example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Complex Sentence example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Complex Sentence example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Complex Sentence example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "Compound Sentence": {
      title: "Compound Sentence",
      description:
        "Compound Sentence is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Compound Sentence",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Compound Sentence",
        "Complex constructions involving Compound Sentence",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple Compound Sentence example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate Compound Sentence example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Compound Sentence example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Compound Sentence example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Compound Sentence example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Compound Sentence example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "Compound-Complex Sentence": {
      title: "Compound Complex Sentence",
      description:
        "Compound Complex Sentence is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Compound-Complex Sentence",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Compound-Complex Sentence",
        "Complex constructions involving Compound-Complex Sentence",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple Compound-Complex Sentence example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate Compound-Complex Sentence example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Compound-Complex Sentence example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Compound-Complex Sentence example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Compound-Complex Sentence example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Compound-Complex Sentence example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    Emphasis: {
      title: "Emphasis",
      description:
        "Emphasis is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Emphasis",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Emphasis",
        "Complex constructions involving Emphasis",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Emphasis example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Emphasis example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Emphasis example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Emphasis example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Emphasis example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Emphasis example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    Exclamatory: {
      title: "Exclamatory",
      description:
        "Exclamatory is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Exclamatory",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Exclamatory",
        "Complex constructions involving Exclamatory",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Exclamatory example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Exclamatory example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Exclamatory example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Exclamatory example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Exclamatory example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Exclamatory example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    Fronting: {
      title: "Fronting",
      description:
        "Fronting is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Fronting",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Fronting",
        "Complex constructions involving Fronting",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Fronting example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Fronting example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Fronting example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Fronting example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Fronting example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Fronting example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    Imperative: {
      title: "Imperative",
      description:
        "Imperative is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Imperative",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Imperative",
        "Complex constructions involving Imperative",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Imperative example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Imperative example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Imperative example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Imperative example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Imperative example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Imperative example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    Inversion: {
      title: "Inversion",
      description:
        "Inversion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Inversion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Inversion",
        "Complex constructions involving Inversion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Inversion example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Inversion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Inversion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Inversion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Inversion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Inversion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    Negation: {
      title: "Negation",
      description:
        "Negation is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Negation",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Negation",
        "Complex constructions involving Negation",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple Negation example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate Negation example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Negation example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Negation example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Negation example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Negation example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "Question Formation": {
      title: "Question Formation",
      description:
        "Question Formation is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for Question Formation",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for Question Formation",
        "Complex constructions involving Question Formation",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple Question Formation example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate Question Formation example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate Question Formation example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate Question Formation example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced Question Formation example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency Question Formation example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    abbreviation: {
      title: "Abbreviation",
      description:
        "Abbreviation is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for abbreviation",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for abbreviation",
        "Complex constructions involving abbreviation",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple abbreviation example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate abbreviation example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate abbreviation example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate abbreviation example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced abbreviation example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency abbreviation example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    abstractNoun: {
      title: "AbstractNoun",
      description:
        "AbstractNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for abstractNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for abstractNoun",
        "Complex constructions involving abstractNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple abstractNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate abstractNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate abstractNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate abstractNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced abstractNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency abstractNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    academic_register: {
      title: "Academic Register",
      description:
        "Academic Register is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for academic_register",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for academic_register",
        "Complex constructions involving academic_register",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple academic_register example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate academic_register example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate academic_register example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate academic_register example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced academic_register example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency academic_register example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    acronym: {
      title: "Acronym",
      description: "Acronym is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for acronym",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for acronym",
        "Complex constructions involving acronym",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple acronym example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate acronym example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate acronym example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate acronym example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced acronym example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency acronym example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    adjective: {
      title: "Adjective",
      description:
        "Adjective is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for adjective",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for adjective",
        "Complex constructions involving adjective",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple adjective example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate adjective example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate adjective example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate adjective example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced adjective example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency adjective example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    adjectivePhrase: {
      title: "AdjectivePhrase",
      description:
        "AdjectivePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for adjectivePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for adjectivePhrase",
        "Complex constructions involving adjectivePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple adjectivePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate adjectivePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate adjectivePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate adjectivePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced adjectivePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency adjectivePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    adverb: {
      title: "Adverb",
      description: "Adverb is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for adverb",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for adverb",
        "Complex constructions involving adverb",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple adverb example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate adverb example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate adverb example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate adverb example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced adverb example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency adverb example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    adverbPhrase: {
      title: "AdverbPhrase",
      description:
        "AdverbPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for adverbPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for adverbPhrase",
        "Complex constructions involving adverbPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple adverbPhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate adverbPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate adverbPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate adverbPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced adverbPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency adverbPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    adverbialPhrase: {
      title: "AdverbialPhrase",
      description:
        "AdverbialPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for adverbialPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for adverbialPhrase",
        "Complex constructions involving adverbialPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple adverbialPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate adverbialPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate adverbialPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate adverbialPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced adverbialPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency adverbialPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    appositivePhrase: {
      title: "AppositivePhrase",
      description:
        "AppositivePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for appositivePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for appositivePhrase",
        "Complex constructions involving appositivePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple appositivePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate appositivePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate appositivePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate appositivePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced appositivePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency appositivePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    article: {
      title: "Article",
      description: "Article is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for article",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for article",
        "Complex constructions involving article",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple article example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate article example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate article example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate article example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced article example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency article example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    auxiliary: {
      title: "Auxiliary",
      description:
        "Auxiliary is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for auxiliary",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for auxiliary",
        "Complex constructions involving auxiliary",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple auxiliary example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate auxiliary example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate auxiliary example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate auxiliary example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced auxiliary example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency auxiliary example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    cardinalNumber: {
      title: "CardinalNumber",
      description:
        "CardinalNumber is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for cardinalNumber",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for cardinalNumber",
        "Complex constructions involving cardinalNumber",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple cardinalNumber example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate cardinalNumber example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate cardinalNumber example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate cardinalNumber example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced cardinalNumber example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency cardinalNumber example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    causativeVerbPhrase: {
      title: "CausativeVerbPhrase",
      description:
        "CausativeVerbPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for causativeVerbPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for causativeVerbPhrase",
        "Complex constructions involving causativeVerbPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple causativeVerbPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate causativeVerbPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate causativeVerbPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate causativeVerbPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced causativeVerbPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency causativeVerbPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    causative_form: {
      title: "Causative Form",
      description:
        "Causative Form is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for causative_form",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for causative_form",
        "Complex constructions involving causative_form",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple causative_form example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate causative_form example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate causative_form example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate causative_form example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced causative_form example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency causative_form example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    choiceQuestion: {
      title: "ChoiceQuestion",
      description:
        "ChoiceQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for choiceQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for choiceQuestion",
        "Complex constructions involving choiceQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple choiceQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate choiceQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate choiceQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate choiceQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced choiceQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency choiceQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    clause: {
      title: "Clause",
      description: "Clause is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for clause",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for clause",
        "Complex constructions involving clause",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple clause example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate clause example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate clause example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate clause example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced clause example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency clause example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    cleftPhrase: {
      title: "CleftPhrase",
      description:
        "CleftPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for cleftPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for cleftPhrase",
        "Complex constructions involving cleftPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple cleftPhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate cleftPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate cleftPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate cleftPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced cleftPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency cleftPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    cleftSentencePhrase: {
      title: "CleftSentencePhrase",
      description:
        "CleftSentencePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for cleftSentencePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for cleftSentencePhrase",
        "Complex constructions involving cleftSentencePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple cleftSentencePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate cleftSentencePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate cleftSentencePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate cleftSentencePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced cleftSentencePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency cleftSentencePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    collectiveNoun: {
      title: "CollectiveNoun",
      description:
        "CollectiveNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for collectiveNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for collectiveNoun",
        "Complex constructions involving collectiveNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple collectiveNoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate collectiveNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate collectiveNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate collectiveNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced collectiveNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency collectiveNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    collocationalPhrase: {
      title: "CollocationalPhrase",
      description:
        "CollocationalPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for collocationalPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for collocationalPhrase",
        "Complex constructions involving collocationalPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple collocationalPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate collocationalPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate collocationalPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate collocationalPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced collocationalPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency collocationalPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    commonNounGeneral: {
      title: "CommonNounGeneral",
      description:
        "CommonNounGeneral is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for commonNounGeneral",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for commonNounGeneral",
        "Complex constructions involving commonNounGeneral",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple commonNounGeneral example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate commonNounGeneral example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate commonNounGeneral example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate commonNounGeneral example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced commonNounGeneral example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency commonNounGeneral example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    comparativePhrase: {
      title: "ComparativePhrase",
      description:
        "ComparativePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for comparativePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for comparativePhrase",
        "Complex constructions involving comparativePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple comparativePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate comparativePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate comparativePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate comparativePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced comparativePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency comparativePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    comparative_structure: {
      title: "Comparative Structure",
      description:
        "Comparative Structure is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for comparative_structure",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for comparative_structure",
        "Complex constructions involving comparative_structure",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple comparative_structure example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate comparative_structure example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate comparative_structure example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate comparative_structure example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced comparative_structure example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency comparative_structure example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    compound: {
      title: "Compound",
      description:
        "Compound is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for compound",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for compound",
        "Complex constructions involving compound",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple compound example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate compound example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate compound example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate compound example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced compound example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency compound example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    compoundAdjective: {
      title: "CompoundAdjective",
      description:
        "CompoundAdjective is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for compoundAdjective",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for compoundAdjective",
        "Complex constructions involving compoundAdjective",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple compoundAdjective example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate compoundAdjective example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate compoundAdjective example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate compoundAdjective example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced compoundAdjective example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency compoundAdjective example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    compoundNoun: {
      title: "CompoundNoun",
      description:
        "CompoundNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for compoundNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for compoundNoun",
        "Complex constructions involving compoundNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple compoundNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate compoundNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate compoundNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate compoundNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced compoundNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency compoundNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    concreteNoun: {
      title: "ConcreteNoun",
      description:
        "ConcreteNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for concreteNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for concreteNoun",
        "Complex constructions involving concreteNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple concreteNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate concreteNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate concreteNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate concreteNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced concreteNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency concreteNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    conditional: {
      title: "Conditional",
      description:
        "Conditional is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for conditional",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for conditional",
        "Complex constructions involving conditional",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple conditional example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate conditional example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate conditional example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate conditional example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced conditional example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency conditional example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    conditionalClause: {
      title: "ConditionalClause",
      description:
        "ConditionalClause is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for conditionalClause",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for conditionalClause",
        "Complex constructions involving conditionalClause",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple conditionalClause example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate conditionalClause example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate conditionalClause example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate conditionalClause example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced conditionalClause example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency conditionalClause example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    conditionalPhrase: {
      title: "ConditionalPhrase",
      description:
        "ConditionalPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for conditionalPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for conditionalPhrase",
        "Complex constructions involving conditionalPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple conditionalPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate conditionalPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate conditionalPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate conditionalPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced conditionalPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency conditionalPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    conjunction: {
      title: "Conjunction",
      description:
        "Conjunction is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for conjunction",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for conjunction",
        "Complex constructions involving conjunction",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple conjunction example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate conjunction example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate conjunction example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate conjunction example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced conjunction example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency conjunction example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    countableNoun: {
      title: "CountableNoun",
      description:
        "CountableNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for countableNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for countableNoun",
        "Complex constructions involving countableNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple countableNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate countableNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate countableNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate countableNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced countableNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency countableNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    danglingParticiplePhrase: {
      title: "DanglingParticiplePhrase",
      description:
        "DanglingParticiplePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for danglingParticiplePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for danglingParticiplePhrase",
        "Complex constructions involving danglingParticiplePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple danglingParticiplePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate danglingParticiplePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate danglingParticiplePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate danglingParticiplePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced danglingParticiplePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency danglingParticiplePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    dateExpression: {
      title: "DateExpression",
      description:
        "DateExpression is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for dateExpression",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for dateExpression",
        "Complex constructions involving dateExpression",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple dateExpression example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate dateExpression example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate dateExpression example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate dateExpression example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced dateExpression example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency dateExpression example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    dayExpression: {
      title: "DayExpression",
      description:
        "DayExpression is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for dayExpression",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for dayExpression",
        "Complex constructions involving dayExpression",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple dayExpression example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate dayExpression example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate dayExpression example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate dayExpression example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced dayExpression example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency dayExpression example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    demonstrativePronoun: {
      title: "DemonstrativePronoun",
      description:
        "DemonstrativePronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for demonstrativePronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for demonstrativePronoun",
        "Complex constructions involving demonstrativePronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple demonstrativePronoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate demonstrativePronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate demonstrativePronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate demonstrativePronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced demonstrativePronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency demonstrativePronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    determiner: {
      title: "Determiner",
      description:
        "Determiner is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for determiner",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for determiner",
        "Complex constructions involving determiner",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple determiner example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate determiner example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate determiner example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate determiner example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced determiner example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency determiner example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    determinerPhrase: {
      title: "DeterminerPhrase",
      description:
        "DeterminerPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for determinerPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for determinerPhrase",
        "Complex constructions involving determinerPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple determinerPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate determinerPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate determinerPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate determinerPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced determinerPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency determinerPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    direct: {
      title: "Direct",
      description: "Direct is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for direct",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for direct",
        "Complex constructions involving direct",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple direct example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate direct example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate direct example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate direct example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced direct example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency direct example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    directSpeech: {
      title: "DirectSpeech",
      description:
        "DirectSpeech is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for directSpeech",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for directSpeech",
        "Complex constructions involving directSpeech",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple directSpeech example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate directSpeech example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate directSpeech example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate directSpeech example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced directSpeech example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency directSpeech example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    discourse_marker: {
      title: "Discourse Marker",
      description:
        "Discourse Marker is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for discourse_marker",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for discourse_marker",
        "Complex constructions involving discourse_marker",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple discourse_marker example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate discourse_marker example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate discourse_marker example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate discourse_marker example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced discourse_marker example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency discourse_marker example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    dualUsageNoun: {
      title: "DualUsageNoun",
      description:
        "DualUsageNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for dualUsageNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for dualUsageNoun",
        "Complex constructions involving dualUsageNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple dualUsageNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate dualUsageNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate dualUsageNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate dualUsageNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced dualUsageNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency dualUsageNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    dummyPronoun: {
      title: "DummyPronoun",
      description:
        "DummyPronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for dummyPronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for dummyPronoun",
        "Complex constructions involving dummyPronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple dummyPronoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate dummyPronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate dummyPronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate dummyPronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced dummyPronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency dummyPronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    embeddedQuestion: {
      title: "EmbeddedQuestion",
      description:
        "EmbeddedQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for embeddedQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for embeddedQuestion",
        "Complex constructions involving embeddedQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple embeddedQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate embeddedQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate embeddedQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate embeddedQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced embeddedQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency embeddedQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    emotivePhrase: {
      title: "EmotivePhrase",
      description:
        "EmotivePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for emotivePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for emotivePhrase",
        "Complex constructions involving emotivePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple emotivePhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate emotivePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate emotivePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate emotivePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced emotivePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency emotivePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    emphaticPhrase: {
      title: "EmphaticPhrase",
      description:
        "EmphaticPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for emphaticPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for emphaticPhrase",
        "Complex constructions involving emphaticPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple emphaticPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate emphaticPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate emphaticPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate emphaticPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced emphaticPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency emphaticPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    emphatic_structure: {
      title: "Emphatic Structure",
      description:
        "Emphatic Structure is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for emphatic_structure",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for emphatic_structure",
        "Complex constructions involving emphatic_structure",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple emphatic_structure example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate emphatic_structure example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate emphatic_structure example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate emphatic_structure example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced emphatic_structure example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency emphatic_structure example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    exclamatoryPhrase: {
      title: "ExclamatoryPhrase",
      description:
        "ExclamatoryPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for exclamatoryPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for exclamatoryPhrase",
        "Complex constructions involving exclamatoryPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple exclamatoryPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate exclamatoryPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate exclamatoryPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate exclamatoryPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced exclamatoryPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency exclamatoryPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    fixedCollocation: {
      title: "FixedCollocation",
      description:
        "FixedCollocation is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for fixedCollocation",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for fixedCollocation",
        "Complex constructions involving fixedCollocation",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple fixedCollocation example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate fixedCollocation example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate fixedCollocation example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate fixedCollocation example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced fixedCollocation example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency fixedCollocation example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    focus_structure: {
      title: "Focus Structure",
      description:
        "Focus Structure is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for focus_structure",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for focus_structure",
        "Complex constructions involving focus_structure",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple focus_structure example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate focus_structure example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate focus_structure example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate focus_structure example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced focus_structure example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency focus_structure example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    formal_register: {
      title: "Formal Register",
      description:
        "Formal Register is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for formal_register",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for formal_register",
        "Complex constructions involving formal_register",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple formal_register example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate formal_register example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate formal_register example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate formal_register example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced formal_register example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency formal_register example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    fronting: {
      title: "Fronting",
      description:
        "Fronting is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for fronting",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for fronting",
        "Complex constructions involving fronting",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple fronting example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate fronting example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate fronting example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate fronting example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced fronting example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency fronting example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    futureSimple: {
      title: "FutureSimple",
      description:
        "FutureSimple is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for futureSimple",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for futureSimple",
        "Complex constructions involving futureSimple",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple futureSimple example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate futureSimple example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate futureSimple example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate futureSimple example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced futureSimple example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency futureSimple example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    gerund: {
      title: "Gerund",
      description: "Gerund is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for gerund",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for gerund",
        "Complex constructions involving gerund",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple gerund example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate gerund example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate gerund example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate gerund example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced gerund example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency gerund example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    gerundPhrase: {
      title: "GerundPhrase",
      description:
        "GerundPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for gerundPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for gerundPhrase",
        "Complex constructions involving gerundPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple gerundPhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate gerundPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate gerundPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate gerundPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced gerundPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency gerundPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    hedging: {
      title: "Hedging",
      description: "Hedging is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for hedging",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for hedging",
        "Complex constructions involving hedging",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple hedging example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate hedging example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate hedging example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate hedging example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced hedging example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency hedging example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    idiomaticPhrase: {
      title: "IdiomaticPhrase",
      description:
        "IdiomaticPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for idiomaticPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for idiomaticPhrase",
        "Complex constructions involving idiomaticPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple idiomaticPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate idiomaticPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate idiomaticPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate idiomaticPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced idiomaticPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency idiomaticPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    imperativeMood: {
      title: "ImperativeMood",
      description:
        "ImperativeMood is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for imperativeMood",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for imperativeMood",
        "Complex constructions involving imperativeMood",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple imperativeMood example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate imperativeMood example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate imperativeMood example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate imperativeMood example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced imperativeMood example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency imperativeMood example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    imperativePhrase: {
      title: "ImperativePhrase",
      description:
        "ImperativePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for imperativePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for imperativePhrase",
        "Complex constructions involving imperativePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple imperativePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate imperativePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate imperativePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate imperativePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced imperativePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency imperativePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    indefinitePronoun: {
      title: "IndefinitePronoun",
      description:
        "IndefinitePronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for indefinitePronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for indefinitePronoun",
        "Complex constructions involving indefinitePronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple indefinitePronoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate indefinitePronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate indefinitePronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate indefinitePronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced indefinitePronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency indefinitePronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    indirectQuestion: {
      title: "IndirectQuestion",
      description:
        "IndirectQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for indirectQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for indirectQuestion",
        "Complex constructions involving indirectQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple indirectQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate indirectQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate indirectQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate indirectQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced indirectQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency indirectQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    infinitivePhrase: {
      title: "InfinitivePhrase",
      description:
        "InfinitivePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for infinitivePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for infinitivePhrase",
        "Complex constructions involving infinitivePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple infinitivePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate infinitivePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate infinitivePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate infinitivePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced infinitivePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency infinitivePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    informal_register: {
      title: "Informal Register",
      description:
        "Informal Register is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for informal_register",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for informal_register",
        "Complex constructions involving informal_register",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple informal_register example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate informal_register example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate informal_register example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate informal_register example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced informal_register example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency informal_register example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    information_structure: {
      title: "Information Structure",
      description:
        "Information Structure is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for information_structure",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for information_structure",
        "Complex constructions involving information_structure",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple information_structure example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate information_structure example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate information_structure example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate information_structure example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced information_structure example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency information_structure example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    intensifier: {
      title: "Intensifier",
      description:
        "Intensifier is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for intensifier",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for intensifier",
        "Complex constructions involving intensifier",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple intensifier example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate intensifier example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate intensifier example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate intensifier example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced intensifier example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency intensifier example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    interjection: {
      title: "Interjection",
      description:
        "Interjection is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for interjection",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for interjection",
        "Complex constructions involving interjection",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple interjection example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate interjection example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate interjection example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate interjection example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced interjection example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency interjection example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    interrogativeAdjective: {
      title: "InterrogativeAdjective",
      description:
        "InterrogativeAdjective is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for interrogativeAdjective",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for interrogativeAdjective",
        "Complex constructions involving interrogativeAdjective",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple interrogativeAdjective example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate interrogativeAdjective example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate interrogativeAdjective example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate interrogativeAdjective example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced interrogativeAdjective example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency interrogativeAdjective example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    interrogativePronoun: {
      title: "InterrogativePronoun",
      description:
        "InterrogativePronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for interrogativePronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for interrogativePronoun",
        "Complex constructions involving interrogativePronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple interrogativePronoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate interrogativePronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate interrogativePronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate interrogativePronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced interrogativePronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency interrogativePronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    introductoryPhrase: {
      title: "IntroductoryPhrase",
      description:
        "IntroductoryPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for introductoryPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for introductoryPhrase",
        "Complex constructions involving introductoryPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple introductoryPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate introductoryPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate introductoryPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate introductoryPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced introductoryPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency introductoryPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    inversion: {
      title: "Inversion",
      description:
        "Inversion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for inversion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for inversion",
        "Complex constructions involving inversion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple inversion example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate inversion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate inversion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate inversion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced inversion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency inversion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    irregularPlural: {
      title: "IrregularPlural",
      description:
        "IrregularPlural is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for irregularPlural",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for irregularPlural",
        "Complex constructions involving irregularPlural",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple irregularPlural example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate irregularPlural example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate irregularPlural example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate irregularPlural example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced irregularPlural example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency irregularPlural example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    leadingQuestion: {
      title: "LeadingQuestion",
      description:
        "LeadingQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for leadingQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for leadingQuestion",
        "Complex constructions involving leadingQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple leadingQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate leadingQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate leadingQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate leadingQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced leadingQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency leadingQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    linkingPhrase: {
      title: "LinkingPhrase",
      description:
        "LinkingPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for linkingPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for linkingPhrase",
        "Complex constructions involving linkingPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple linkingPhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate linkingPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate linkingPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate linkingPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced linkingPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency linkingPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    modal: {
      title: "Modal",
      description: "Modal is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for modal",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for modal",
        "Complex constructions involving modal",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple modal example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate modal example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate modal example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate modal example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced modal example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency modal example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    modalVerbPhrase: {
      title: "ModalVerbPhrase",
      description:
        "ModalVerbPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for modalVerbPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for modalVerbPhrase",
        "Complex constructions involving modalVerbPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple modalVerbPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate modalVerbPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate modalVerbPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate modalVerbPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced modalVerbPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency modalVerbPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    monthExpression: {
      title: "MonthExpression",
      description:
        "MonthExpression is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for monthExpression",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for monthExpression",
        "Complex constructions involving monthExpression",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple monthExpression example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate monthExpression example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate monthExpression example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate monthExpression example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced monthExpression example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency monthExpression example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    negation: {
      title: "Negation",
      description:
        "Negation is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for negation",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for negation",
        "Complex constructions involving negation",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple negation example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate negation example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate negation example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate negation example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced negation example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency negation example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    negativeQuestion: {
      title: "NegativeQuestion",
      description:
        "NegativeQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for negativeQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for negativeQuestion",
        "Complex constructions involving negativeQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple negativeQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate negativeQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate negativeQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate negativeQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced negativeQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency negativeQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    nonComparableAdjective: {
      title: "NonComparableAdjective",
      description:
        "NonComparableAdjective is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for nonComparableAdjective",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for nonComparableAdjective",
        "Complex constructions involving nonComparableAdjective",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple nonComparableAdjective example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate nonComparableAdjective example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate nonComparableAdjective example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate nonComparableAdjective example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced nonComparableAdjective example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency nonComparableAdjective example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    nonFiniteClause: {
      title: "NonFiniteClause",
      description:
        "NonFiniteClause is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for nonFiniteClause",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for nonFiniteClause",
        "Complex constructions involving nonFiniteClause",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple nonFiniteClause example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate nonFiniteClause example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate nonFiniteClause example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate nonFiniteClause example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced nonFiniteClause example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency nonFiniteClause example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    noun: {
      title: "Noun",
      description: "Noun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for noun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for noun",
        "Complex constructions involving noun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple noun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate noun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate noun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate noun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced noun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: ["Proficiency noun example", "Nuanced usage", "Expert application"],
      } as ExamplesByLevel,
    },
    nounPhrase: {
      title: "NounPhrase",
      description:
        "NounPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for nounPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for nounPhrase",
        "Complex constructions involving nounPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple nounPhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate nounPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate nounPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate nounPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced nounPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency nounPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    object: {
      title: "Object",
      description: "Object is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for object",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for object",
        "Complex constructions involving object",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple object example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate object example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate object example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate object example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced object example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency object example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    ordinalNumber: {
      title: "OrdinalNumber",
      description:
        "OrdinalNumber is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for ordinalNumber",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for ordinalNumber",
        "Complex constructions involving ordinalNumber",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple ordinalNumber example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate ordinalNumber example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate ordinalNumber example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate ordinalNumber example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced ordinalNumber example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency ordinalNumber example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    participialPhrase: {
      title: "ParticipialPhrase",
      description:
        "ParticipialPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for participialPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for participialPhrase",
        "Complex constructions involving participialPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple participialPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate participialPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate participialPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate participialPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced participialPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency participialPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    participle: {
      title: "Participle",
      description:
        "Participle is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for participle",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for participle",
        "Complex constructions involving participle",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple participle example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate participle example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate participle example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate participle example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced participle example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency participle example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passive: {
      title: "Passive",
      description: "Passive is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passive",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passive",
        "Complex constructions involving passive",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple passive example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate passive example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passive example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passive example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passive example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passive example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passiveModal: {
      title: "PassiveModal",
      description:
        "PassiveModal is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passiveModal",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passiveModal",
        "Complex constructions involving passiveModal",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple passiveModal example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate passiveModal example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passiveModal example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passiveModal example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passiveModal example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passiveModal example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passiveReporting: {
      title: "PassiveReporting",
      description:
        "PassiveReporting is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passiveReporting",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passiveReporting",
        "Complex constructions involving passiveReporting",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple passiveReporting example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate passiveReporting example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passiveReporting example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passiveReporting example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passiveReporting example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passiveReporting example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passiveVoice: {
      title: "PassiveVoice",
      description:
        "PassiveVoice is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passiveVoice",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passiveVoice",
        "Complex constructions involving passiveVoice",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple passiveVoice example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate passiveVoice example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passiveVoice example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passiveVoice example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passiveVoice example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passiveVoice example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passiveVoicePhrase: {
      title: "PassiveVoicePhrase",
      description:
        "PassiveVoicePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passiveVoicePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passiveVoicePhrase",
        "Complex constructions involving passiveVoicePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple passiveVoicePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate passiveVoicePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passiveVoicePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passiveVoicePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passiveVoicePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passiveVoicePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passiveWithModal: {
      title: "PassiveWithModal",
      description:
        "PassiveWithModal is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passiveWithModal",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passiveWithModal",
        "Complex constructions involving passiveWithModal",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple passiveWithModal example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate passiveWithModal example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passiveWithModal example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passiveWithModal example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passiveWithModal example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passiveWithModal example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    passiveWithReportingVerb: {
      title: "PassiveWithReportingVerb",
      description:
        "PassiveWithReportingVerb is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for passiveWithReportingVerb",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for passiveWithReportingVerb",
        "Complex constructions involving passiveWithReportingVerb",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple passiveWithReportingVerb example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate passiveWithReportingVerb example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate passiveWithReportingVerb example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate passiveWithReportingVerb example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced passiveWithReportingVerb example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency passiveWithReportingVerb example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    pastParticiple: {
      title: "PastParticiple",
      description:
        "PastParticiple is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for pastParticiple",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for pastParticiple",
        "Complex constructions involving pastParticiple",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple pastParticiple example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate pastParticiple example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate pastParticiple example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate pastParticiple example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced pastParticiple example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency pastParticiple example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    pastPerfect: {
      title: "PastPerfect",
      description:
        "PastPerfect is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for pastPerfect",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for pastPerfect",
        "Complex constructions involving pastPerfect",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple pastPerfect example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate pastPerfect example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate pastPerfect example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate pastPerfect example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced pastPerfect example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency pastPerfect example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    pastSimple: {
      title: "PastSimple",
      description:
        "PastSimple is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for pastSimple",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for pastSimple",
        "Complex constructions involving pastSimple",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple pastSimple example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate pastSimple example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate pastSimple example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate pastSimple example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced pastSimple example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency pastSimple example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    perceptionVerb: {
      title: "PerceptionVerb",
      description:
        "PerceptionVerb is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for perceptionVerb",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for perceptionVerb",
        "Complex constructions involving perceptionVerb",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple perceptionVerb example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate perceptionVerb example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate perceptionVerb example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate perceptionVerb example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced perceptionVerb example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency perceptionVerb example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    phrasalVerb: {
      title: "PhrasalVerb",
      description:
        "PhrasalVerb is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for phrasalVerb",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for phrasalVerb",
        "Complex constructions involving phrasalVerb",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple phrasalVerb example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate phrasalVerb example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate phrasalVerb example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate phrasalVerb example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced phrasalVerb example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency phrasalVerb example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    phrase: {
      title: "Phrase",
      description: "Phrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for phrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for phrase",
        "Complex constructions involving phrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple phrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate phrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate phrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate phrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced phrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency phrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "plural/far": {
      title: "Plural/far",
      description:
        "Plural/far is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for plural/far",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for plural/far",
        "Complex constructions involving plural/far",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple plural/far example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate plural/far example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate plural/far example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate plural/far example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced plural/far example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency plural/far example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "plural/near": {
      title: "Plural/near",
      description:
        "Plural/near is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for plural/near",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for plural/near",
        "Complex constructions involving plural/near",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple plural/near example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate plural/near example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate plural/near example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate plural/near example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced plural/near example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency plural/near example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    pluralNoun: {
      title: "PluralNoun",
      description:
        "PluralNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for pluralNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for pluralNoun",
        "Complex constructions involving pluralNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple pluralNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate pluralNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate pluralNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate pluralNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced pluralNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency pluralNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    pluralOnlyNoun: {
      title: "PluralOnlyNoun",
      description:
        "PluralOnlyNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for pluralOnlyNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for pluralOnlyNoun",
        "Complex constructions involving pluralOnlyNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple pluralOnlyNoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate pluralOnlyNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate pluralOnlyNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate pluralOnlyNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced pluralOnlyNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency pluralOnlyNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    positionAdjective: {
      title: "PositionAdjective",
      description:
        "PositionAdjective is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for positionAdjective",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for positionAdjective",
        "Complex constructions involving positionAdjective",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple positionAdjective example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate positionAdjective example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate positionAdjective example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate positionAdjective example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced positionAdjective example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency positionAdjective example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    possessivePhrase: {
      title: "PossessivePhrase",
      description:
        "PossessivePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for possessivePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for possessivePhrase",
        "Complex constructions involving possessivePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple possessivePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate possessivePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate possessivePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate possessivePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced possessivePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency possessivePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    preposition: {
      title: "Preposition",
      description:
        "Preposition is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for preposition",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for preposition",
        "Complex constructions involving preposition",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple preposition example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate preposition example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate preposition example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate preposition example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced preposition example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency preposition example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    prepositionalPhrase: {
      title: "PrepositionalPhrase",
      description:
        "PrepositionalPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for prepositionalPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for prepositionalPhrase",
        "Complex constructions involving prepositionalPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple prepositionalPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate prepositionalPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate prepositionalPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate prepositionalPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced prepositionalPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency prepositionalPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    presentContinuous: {
      title: "PresentContinuous",
      description:
        "PresentContinuous is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for presentContinuous",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for presentContinuous",
        "Complex constructions involving presentContinuous",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple presentContinuous example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate presentContinuous example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate presentContinuous example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate presentContinuous example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced presentContinuous example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency presentContinuous example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    presentParticiple: {
      title: "PresentParticiple",
      description:
        "PresentParticiple is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for presentParticiple",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for presentParticiple",
        "Complex constructions involving presentParticiple",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple presentParticiple example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate presentParticiple example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate presentParticiple example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate presentParticiple example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced presentParticiple example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency presentParticiple example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    presentPerfect: {
      title: "PresentPerfect",
      description:
        "PresentPerfect is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for presentPerfect",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for presentPerfect",
        "Complex constructions involving presentPerfect",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple presentPerfect example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate presentPerfect example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate presentPerfect example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate presentPerfect example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced presentPerfect example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency presentPerfect example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    presentSimple: {
      title: "PresentSimple",
      description:
        "PresentSimple is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for presentSimple",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for presentSimple",
        "Complex constructions involving presentSimple",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple presentSimple example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate presentSimple example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate presentSimple example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate presentSimple example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced presentSimple example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency presentSimple example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    pronoun: {
      title: "Pronoun",
      description: "Pronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for pronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for pronoun",
        "Complex constructions involving pronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple pronoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate pronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate pronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate pronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced pronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency pronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    properNoun: {
      title: "ProperNoun",
      description:
        "ProperNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for properNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for properNoun",
        "Complex constructions involving properNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple properNoun example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate properNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate properNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate properNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced properNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency properNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    properNounSpecific: {
      title: "ProperNounSpecific",
      description:
        "ProperNounSpecific is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for properNounSpecific",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for properNounSpecific",
        "Complex constructions involving properNounSpecific",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple properNounSpecific example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate properNounSpecific example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate properNounSpecific example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate properNounSpecific example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced properNounSpecific example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency properNounSpecific example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    quantifier: {
      title: "Quantifier",
      description:
        "Quantifier is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for quantifier",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for quantifier",
        "Complex constructions involving quantifier",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple quantifier example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate quantifier example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate quantifier example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate quantifier example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced quantifier example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency quantifier example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    quantifierPhrase: {
      title: "QuantifierPhrase",
      description:
        "QuantifierPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for quantifierPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for quantifierPhrase",
        "Complex constructions involving quantifierPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple quantifierPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate quantifierPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate quantifierPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate quantifierPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced quantifierPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency quantifierPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reciprocalPronoun: {
      title: "ReciprocalPronoun",
      description:
        "ReciprocalPronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reciprocalPronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reciprocalPronoun",
        "Complex constructions involving reciprocalPronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reciprocalPronoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reciprocalPronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reciprocalPronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reciprocalPronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reciprocalPronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reciprocalPronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reducedRelativeClause: {
      title: "ReducedRelativeClause",
      description:
        "ReducedRelativeClause is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reducedRelativeClause",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reducedRelativeClause",
        "Complex constructions involving reducedRelativeClause",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reducedRelativeClause example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reducedRelativeClause example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reducedRelativeClause example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reducedRelativeClause example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reducedRelativeClause example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reducedRelativeClause example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reflexivePronoun: {
      title: "ReflexivePronoun",
      description:
        "ReflexivePronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reflexivePronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reflexivePronoun",
        "Complex constructions involving reflexivePronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reflexivePronoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reflexivePronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reflexivePronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reflexivePronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reflexivePronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reflexivePronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    relativeClause: {
      title: "RelativeClause",
      description:
        "RelativeClause is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for relativeClause",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for relativeClause",
        "Complex constructions involving relativeClause",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple relativeClause example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate relativeClause example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate relativeClause example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate relativeClause example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced relativeClause example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency relativeClause example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    relativePronoun: {
      title: "RelativePronoun",
      description:
        "RelativePronoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for relativePronoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for relativePronoun",
        "Complex constructions involving relativePronoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple relativePronoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate relativePronoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate relativePronoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate relativePronoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced relativePronoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency relativePronoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reported: {
      title: "Reported",
      description:
        "Reported is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reported",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reported",
        "Complex constructions involving reported",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple reported example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate reported example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reported example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reported example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reported example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reported example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reportedCommand: {
      title: "ReportedCommand",
      description:
        "ReportedCommand is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reportedCommand",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reportedCommand",
        "Complex constructions involving reportedCommand",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reportedCommand example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reportedCommand example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reportedCommand example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reportedCommand example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reportedCommand example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reportedCommand example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reportedQuestion: {
      title: "ReportedQuestion",
      description:
        "ReportedQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reportedQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reportedQuestion",
        "Complex constructions involving reportedQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reportedQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reportedQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reportedQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reportedQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reportedQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reportedQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reportedSpeech: {
      title: "ReportedSpeech",
      description:
        "ReportedSpeech is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reportedSpeech",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reportedSpeech",
        "Complex constructions involving reportedSpeech",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reportedSpeech example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reportedSpeech example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reportedSpeech example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reportedSpeech example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reportedSpeech example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reportedSpeech example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    reported_speech: {
      title: "Reported Speech",
      description:
        "Reported Speech is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for reported_speech",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for reported_speech",
        "Complex constructions involving reported_speech",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple reported_speech example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate reported_speech example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate reported_speech example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate reported_speech example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced reported_speech example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency reported_speech example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    rhetoricalQuestion: {
      title: "RhetoricalQuestion",
      description:
        "RhetoricalQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for rhetoricalQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for rhetoricalQuestion",
        "Complex constructions involving rhetoricalQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple rhetoricalQuestion example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate rhetoricalQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate rhetoricalQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate rhetoricalQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced rhetoricalQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency rhetoricalQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "singular/far": {
      title: "Singular/far",
      description:
        "Singular/far is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for singular/far",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for singular/far",
        "Complex constructions involving singular/far",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple singular/far example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate singular/far example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate singular/far example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate singular/far example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced singular/far example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency singular/far example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    "singular/near": {
      title: "Singular/near",
      description:
        "Singular/near is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for singular/near",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for singular/near",
        "Complex constructions involving singular/near",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple singular/near example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate singular/near example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate singular/near example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate singular/near example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced singular/near example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency singular/near example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    singularOnlyNoun: {
      title: "SingularOnlyNoun",
      description:
        "SingularOnlyNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for singularOnlyNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for singularOnlyNoun",
        "Complex constructions involving singularOnlyNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple singularOnlyNoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate singularOnlyNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate singularOnlyNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate singularOnlyNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced singularOnlyNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency singularOnlyNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    subject: {
      title: "Subject",
      description: "Subject is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for subject",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for subject",
        "Complex constructions involving subject",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple subject example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate subject example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate subject example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate subject example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced subject example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency subject example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    subjectVerbInversionPhrase: {
      title: "SubjectVerbInversionPhrase",
      description:
        "SubjectVerbInversionPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for subjectVerbInversionPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for subjectVerbInversionPhrase",
        "Complex constructions involving subjectVerbInversionPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple subjectVerbInversionPhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate subjectVerbInversionPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate subjectVerbInversionPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate subjectVerbInversionPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced subjectVerbInversionPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency subjectVerbInversionPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    subjunctivePhrase: {
      title: "SubjunctivePhrase",
      description:
        "SubjunctivePhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for subjunctivePhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for subjunctivePhrase",
        "Complex constructions involving subjunctivePhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple subjunctivePhrase example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate subjunctivePhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate subjunctivePhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate subjunctivePhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced subjunctivePhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency subjunctivePhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    subjunctive_mood: {
      title: "Subjunctive Mood",
      description:
        "Subjunctive Mood is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for subjunctive_mood",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for subjunctive_mood",
        "Complex constructions involving subjunctive_mood",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple subjunctive_mood example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate subjunctive_mood example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate subjunctive_mood example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate subjunctive_mood example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced subjunctive_mood example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency subjunctive_mood example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    superlative: {
      title: "Superlative",
      description:
        "Superlative is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for superlative",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for superlative",
        "Complex constructions involving superlative",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple superlative example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate superlative example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate superlative example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate superlative example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced superlative example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency superlative example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    tag_question: {
      title: "Tag Question",
      description:
        "Tag Question is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for tag_question",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for tag_question",
        "Complex constructions involving tag_question",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple tag_question example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate tag_question example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate tag_question example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate tag_question example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced tag_question example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency tag_question example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    thirdPersonSingular: {
      title: "ThirdPersonSingular",
      description:
        "ThirdPersonSingular is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for thirdPersonSingular",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for thirdPersonSingular",
        "Complex constructions involving thirdPersonSingular",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple thirdPersonSingular example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate thirdPersonSingular example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate thirdPersonSingular example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate thirdPersonSingular example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced thirdPersonSingular example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency thirdPersonSingular example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    timeExpression: {
      title: "TimeExpression",
      description:
        "TimeExpression is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for timeExpression",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for timeExpression",
        "Complex constructions involving timeExpression",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple timeExpression example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate timeExpression example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate timeExpression example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate timeExpression example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced timeExpression example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency timeExpression example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    tooStructure: {
      title: "TooStructure",
      description:
        "TooStructure is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for tooStructure",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for tooStructure",
        "Complex constructions involving tooStructure",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple tooStructure example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate tooStructure example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate tooStructure example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate tooStructure example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced tooStructure example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency tooStructure example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    uncountableNoun: {
      title: "UncountableNoun",
      description:
        "UncountableNoun is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for uncountableNoun",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for uncountableNoun",
        "Complex constructions involving uncountableNoun",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple uncountableNoun example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate uncountableNoun example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate uncountableNoun example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate uncountableNoun example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced uncountableNoun example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency uncountableNoun example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    unknown: {
      title: "Unknown",
      description: "Unknown is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for unknown",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for unknown",
        "Complex constructions involving unknown",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple unknown example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate unknown example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate unknown example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate unknown example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced unknown example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency unknown example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    verb: {
      title: "Verb",
      description: "Verb is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for verb",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for verb",
        "Complex constructions involving verb",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple verb example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate verb example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate verb example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate verb example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced verb example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: ["Proficiency verb example", "Nuanced usage", "Expert application"],
      } as ExamplesByLevel,
    },
    verbPhrase: {
      title: "VerbPhrase",
      description:
        "VerbPhrase is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for verbPhrase",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for verbPhrase",
        "Complex constructions involving verbPhrase",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple verbPhrase example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate verbPhrase example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate verbPhrase example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate verbPhrase example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced verbPhrase example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency verbPhrase example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    vocabulary_A1: {
      title: "Vocabulary A1",
      description:
        "Vocabulary A1 is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for vocabulary_A1",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for vocabulary_A1",
        "Complex constructions involving vocabulary_A1",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple vocabulary_A1 example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate vocabulary_A1 example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate vocabulary_A1 example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate vocabulary_A1 example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced vocabulary_A1 example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency vocabulary_A1 example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    whQuestion: {
      title: "WhQuestion",
      description:
        "WhQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for whQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for whQuestion",
        "Complex constructions involving whQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple whQuestion example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate whQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate whQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate whQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced whQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency whQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    yearExpression: {
      title: "YearExpression",
      description:
        "YearExpression is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for yearExpression",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for yearExpression",
        "Complex constructions involving yearExpression",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: [
          "Simple yearExpression example",
          "Basic usage",
          "Elementary level",
        ],
        A2: [
          "Pre-intermediate yearExpression example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate yearExpression example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate yearExpression example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced yearExpression example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency yearExpression example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    yesNoQuestion: {
      title: "YesNoQuestion",
      description:
        "YesNoQuestion is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for yesNoQuestion",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for yesNoQuestion",
        "Complex constructions involving yesNoQuestion",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple yesNoQuestion example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate yesNoQuestion example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate yesNoQuestion example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate yesNoQuestion example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced yesNoQuestion example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency yesNoQuestion example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    presentPerfectContinuous: {
      title: "PresentPerfectContinuous",
      description:
        "Present Perfect Continuous tense shows actions that started in the past and continue to the present or have recently finished.",
      basicRules: [
        "Formed with 'have/has been + verb-ing'",
        "Shows ongoing actions from past to present",
        "Used with time expressions like 'for' and 'since'",
      ],
      advancedRules: [
        "Emphasizes duration of ongoing actions",
        "Can show cause and effect relationships",
        "Used in formal and informal contexts",
      ],
      examples: {
        A1: [
          "I have been studying English",
          "She has been working here",
          "We have been waiting",
        ],
        A2: [
          "He has been playing football for two hours",
          "They have been living here since 2020",
          "I have been reading this book",
        ],
        B1: [
          "She has been teaching at this school for five years",
          "We have been discussing this issue all morning",
          "He has been traveling around Europe",
        ],
        B2: [
          "The company has been expanding its operations internationally",
          "Scientists have been researching this phenomenon for decades",
          "The team has been collaborating on this project",
        ],
        C1: [
          "The government has been implementing comprehensive reforms",
          "Researchers have been investigating the correlation between these variables",
          "The organization has been advocating for policy changes",
        ],
        C2: [
          "The institution has been perpetuating systemic inequalities",
          "Scholars have been scrutinizing the theoretical underpinnings",
          "The committee has been deliberating on the implications",
        ],
      } as ExamplesByLevel,
    },
    pastContinuous: {
      title: "PastContinuous",
      description:
        "Past Continuous tense describes actions that were ongoing at a specific time in the past.",
      basicRules: [
        "Formed with 'was/were + verb-ing'",
        "Shows actions in progress in the past",
        "Often used with time expressions",
      ],
      advancedRules: [
        "Used for interrupted actions in the past",
        "Sets background for past events",
        "Can show parallel past actions",
      ],
      examples: {
        A1: [
          "I was eating breakfast",
          "She was sleeping",
          "We were watching TV",
        ],
        A2: [
          "He was studying when I called",
          "They were playing in the park",
          "It was raining yesterday",
        ],
        B1: [
          "While I was working, she was cooking dinner",
          "The children were laughing during the show",
          "We were discussing the project",
        ],
        B2: [
          "The team was analyzing the data when the system crashed",
          "She was contemplating her future while walking",
          "The audience was applauding enthusiastically",
        ],
        C1: [
          "The committee was deliberating the proposal when the new information arrived",
          "Scientists were conducting experiments throughout the decade",
          "The economy was recovering gradually",
        ],
        C2: [
          "The philosopher was elucidating complex metaphysical concepts",
          "Historians were reconstructing the narrative of events",
          "The organization was orchestrating a comprehensive transformation",
        ],
      } as ExamplesByLevel,
    },
    can: {
      title: "Can",
      description:
        "Modal verb 'can' expresses ability, possibility, and permission.",
      basicRules: [
        "Expresses present ability",
        "Shows possibility",
        "Asks for permission informally",
      ],
      advancedRules: [
        "Used in conditional sentences",
        "Can express theoretical possibility",
        "Sometimes used for polite requests",
      ],
      examples: {
        A1: ["I can swim", "She can speak English", "We can help you"],
        A2: [
          "He can play the piano well",
          "Can you open the window?",
          "They can come tomorrow",
        ],
        B1: [
          "You can achieve anything with effort",
          "Can we discuss this later?",
          "The solution can be implemented easily",
        ],
        B2: [
          "This approach can yield significant improvements",
          "Can the system handle increased demand?",
          "The strategy can be adapted to various contexts",
        ],
        C1: [
          "The methodology can accommodate diverse perspectives",
          "Can we reconcile these opposing viewpoints?",
          "The framework can facilitate comprehensive analysis",
        ],
        C2: [
          "This paradigm can elucidate complex phenomena",
          "Can such theoretical constructs encompass empirical realities?",
          "The approach can synthesize multifaceted considerations",
        ],
      } as ExamplesByLevel,
    },
    could: {
      title: "Could",
      description:
        "Modal verb 'could' expresses past ability, polite requests, and possibility.",
      basicRules: [
        "Past form of 'can'",
        "Used for polite requests",
        "Shows possibility",
      ],
      advancedRules: [
        "Used in second conditional sentences",
        "Expresses suggestions politely",
        "Can show reproach or criticism",
      ],
      examples: {
        A1: [
          "I could swim when I was young",
          "Could you help me?",
          "She could be right",
        ],
        A2: [
          "He could play football well in school",
          "Could we meet tomorrow?",
          "It could rain today",
        ],
        B1: [
          "You could try a different approach",
          "Could this solution work?",
          "The project could be completed on time",
        ],
        B2: [
          "The results could indicate a significant trend",
          "Could we consider alternative methodologies?",
          "This strategy could optimize performance",
        ],
        C1: [
          "The findings could revolutionize our understanding",
          "Could this framework accommodate diverse perspectives?",
          "The approach could facilitate interdisciplinary collaboration",
        ],
        C2: [
          "Such theoretical constructs could elucidate complex phenomena",
          "Could this paradigm reconcile opposing viewpoints?",
          "The methodology could synthesize multifaceted considerations",
        ],
      } as ExamplesByLevel,
    },
    actionVerb: {
      title: "ActionVerb",
      description:
        "Action verbs express physical or mental activities performed by subjects.",
      basicRules: [
        "Expresses actions",
        "Can be physical or mental",
        "Shows what subject does",
      ],
      advancedRules: [
        "Can be transitive or intransitive",
        "May have multiple meanings",
        "Essential for dynamic writing",
      ],
      examples: {
        A1: ["run", "jump", "eat", "read", "write"],
        A2: ["study", "travel", "cook", "play", "work"],
        B1: ["analyze", "implement", "collaborate", "develop", "present"],
        B2: [
          "investigate",
          "synthesize",
          "optimize",
          "facilitate",
          "coordinate",
        ],
        C1: [
          "elucidate",
          "accommodate",
          "reconcile",
          "synthesize",
          "paradigmatically shift",
        ],
        C2: [
          "phenomenologically investigate",
          "epistemologically elucidate",
          "ontologically accommodate",
          "hermeneutically interpret",
          "dialectically synthesize",
        ],
      } as ExamplesByLevel,
    },
    simpleSentence: {
      title: "SimpleSentence",
      description:
        "Simple sentences contain one independent clause with a subject and predicate.",
      basicRules: [
        "Contains one main clause",
        "Has subject and predicate",
        "Expresses one complete thought",
      ],
      advancedRules: [
        "Can have compound subjects or predicates",
        "May include modifiers",
        "Forms basis for complex constructions",
      ],
      examples: {
        A1: ["The cat sleeps.", "She reads books.", "We play football."],
        A2: [
          "The students study hard.",
          "My family travels every summer.",
          "The teacher explains the lesson.",
        ],
        B1: [
          "The project requires careful planning.",
          "Our team collaborates effectively.",
          "The results indicate significant progress.",
        ],
        B2: [
          "The methodology demonstrates clear advantages.",
          "This approach optimizes performance efficiently.",
          "The research contributes valuable insights.",
        ],
        C1: [
          "The framework facilitates comprehensive analysis.",
          "This paradigm elucidates complex phenomena.",
          "The methodology accommodates diverse perspectives.",
        ],
        C2: [
          "Such theoretical constructs reconcile opposing viewpoints.",
          "The approach synthesizes multifaceted considerations.",
          "These paradigms elucidate sophisticated epistemological questions.",
        ],
      } as ExamplesByLevel,
    },
    personalPronoun: {
      title: "PersonalPronoun",
      description:
        "Personal pronouns refer to specific people or things and change form based on case.",
      basicRules: [
        "Refers to specific people or things",
        "Changes form for subject/object",
        "Includes I, you, he, she, it, we, they",
      ],
      advancedRules: [
        "Has subject, object, and possessive forms",
        "Agreement with antecedents",
        "Varies by person and number",
      ],
      examples: {
        A1: [
          "I am happy",
          "She likes books",
          "We play games",
          "They study English",
          "It is red",
        ],
        A2: [
          "He gave it to me",
          "She told us the story",
          "They invited him to the party",
          "I saw her yesterday",
          "We helped them",
        ],
        B1: [
          "I presented the findings to them",
          "She collaborated with us on the project",
          "We provided him with the resources",
          "They supported her initiative",
          "It enabled us to succeed",
        ],
        B2: [
          "I shared the methodology with them",
          "She presented her research to us",
          "We offered him our expertise",
          "They provided her with feedback",
          "It facilitated our understanding",
        ],
        C1: [
          "I elucidated the paradigm for them",
          "She shared her theoretical framework with us",
          "We offered him our epistemological perspective",
          "They provided her with ontological insights",
          "It facilitated our comprehension",
        ],
        C2: [
          "I explicated the phenomenological approach to them",
          "She shared her hermeneutical framework with us",
          "We offered him our dialectical perspective",
          "They provided her with epistemological insights",
          "It facilitated our theoretical understanding",
        ],
      } as ExamplesByLevel,
    },
    stativeVerb: {
      title: "StativeVerb",
      description:
        "Stative verbs express states, conditions, emotions, or mental processes rather than actions.",
      basicRules: [
        "Describes states rather than actions",
        "Not typically used in continuous tenses",
        "Includes verbs of emotion, cognition, and possession",
      ],
      advancedRules: [
        "Can have different meanings in different contexts",
        "Some can be used in continuous form with changed meaning",
        "Essential for describing mental and emotional states",
      ],
      examples: {
        A1: [
          "I know English",
          "She likes cats",
          "It belongs to me",
          "We have a car",
          "They seem happy",
        ],
        A2: [
          "I understand the problem",
          "She believes the story",
          "We own this house",
          "They appear tired",
          "It sounds good",
        ],
        B1: [
          "I realize the importance",
          "She appreciates your help",
          "We recognize the pattern",
          "They deserve recognition",
          "It resembles the original",
        ],
        B2: [
          "I comprehend the implications",
          "She acknowledges the complexity",
          "We perceive the nuances",
          "They comprehend the methodology",
          "It signifies progress",
        ],
        C1: [
          "I apprehend the theoretical framework",
          "She discerns the epistemological implications",
          "We perceive the paradigmatic shift",
          "They comprehend the ontological foundations",
          "It exemplifies the conceptual framework",
        ],
        C2: [
          "I apprehend the phenomenological dimensions",
          "She discerns the hermeneutical implications",
          "We perceive the dialectical tension",
          "They comprehend the epistemological premises",
          "It exemplifies the theoretical paradigm",
        ],
      } as ExamplesByLevel,
    },
    complexSentence: {
      title: "ComplexSentence",
      description:
        "Complex sentences contain one independent clause and one or more dependent clauses.",
      basicRules: [
        "Has one main clause and one or more subordinate clauses",
        "Uses subordinating conjunctions",
        "Expresses complex relationships between ideas",
      ],
      advancedRules: [
        "Can have multiple levels of embedding",
        "Allows for sophisticated idea development",
        "Essential for academic and formal writing",
      ],
      examples: {
        A1: [
          "I stay home when it rains.",
          "She is happy because she passed.",
          "We eat after we work.",
        ],
        A2: [
          "I will call you when I arrive home.",
          "She studies hard because she wants to succeed.",
          "We can go if the weather improves.",
        ],
        B1: [
          "Although the task was challenging, we completed it successfully.",
          "Since the research indicated positive results, we decided to proceed.",
          "While technology advances rapidly, human skills remain essential.",
        ],
        B2: [
          "Despite the fact that resources were limited, the project achieved significant outcomes.",
          "Given that the methodology proved effective, subsequent studies adopted similar approaches.",
          "Whereas traditional methods showed limitations, innovative techniques demonstrated superior results.",
        ],
        C1: [
          "Notwithstanding the theoretical complexities inherent in the paradigm, researchers successfully operationalized the framework.",
          "Insofar as the empirical evidence corroborates the hypothetical constructs, the theoretical model maintains epistemological validity.",
          "Although the phenomenological approach elucidates subjective experiences, objective measurement remains methodologically challenging.",
        ],
        C2: [
          "Albeit the hermeneutical framework presupposes interpretive subjectivity, systematic analytical procedures ensure epistemological rigor.",
          "Whereas positivistic methodologies privilege empirical verification, phenomenological approaches elucidate experiential dimensions.",
          "Notwithstanding ontological presuppositions underlying theoretical constructs, empirical validation substantiates conceptual frameworks.",
        ],
      } as ExamplesByLevel,
    },
    compoundSentence: {
      title: "CompoundSentence",
      description:
        "Compound sentences contain two or more independent clauses connected by coordinating conjunctions.",
      basicRules: [
        "Has two or more independent clauses",
        "Connected by coordinating conjunctions (and, but, or, nor, for, so, yet)",
        "Each clause can stand alone as a sentence",
      ],
      advancedRules: [
        "Can use semicolons to connect clauses",
        "May include conjunctive adverbs",
        "Effective for showing relationships between equal ideas",
      ],
      examples: {
        A1: [
          "I like cats, and she likes dogs.",
          "We can walk, or we can drive.",
          "It is cold, but I am warm.",
        ],
        A2: [
          "She studied hard, so she passed the exam.",
          "The movie was long, yet it was interesting.",
          "We wanted to go, but the weather was bad.",
        ],
        B1: [
          "The research was extensive, and the results were conclusive.",
          "The project faced challenges, yet the team persevered successfully.",
          "The methodology was sound, so the findings gained widespread acceptance.",
        ],
        B2: [
          "The theoretical framework provided comprehensive guidance, and the empirical results validated its effectiveness.",
          "The approach demonstrated significant advantages, yet implementation required substantial resources.",
          "The analysis revealed important patterns, so subsequent research focused on these areas.",
        ],
        C1: [
          "The paradigm elucidates complex phenomena, and researchers continue developing its applications.",
          "The methodology facilitates sophisticated analysis, yet it requires considerable theoretical expertise.",
          "The framework synthesizes diverse perspectives, so it accommodates multifaceted research questions.",
        ],
        C2: [
          "The theoretical construct reconciles seemingly contradictory perspectives, and its epistemological implications continue generating scholarly discourse.",
          "The phenomenological approach elucidates experiential dimensions, yet its ontological presuppositions require careful consideration.",
          "The hermeneutical framework facilitates interpretive understanding, so researchers increasingly adopt its methodological principles.",
        ],
      } as ExamplesByLevel,
    },
    affirmative: {
      title: "Affirmative",
      description:
        "Affirmative sentences make positive statements without negation.",
      basicRules: [
        "Makes positive statements",
        "Does not contain negative words",
        "States facts or opinions positively",
      ],
      advancedRules: [
        "Can be strengthened with emphatic structures",
        "May use positive intensifiers",
        "Essential for clear, direct communication",
      ],
      examples: {
        A1: [
          "I like ice cream.",
          "She is happy.",
          "We have a car.",
          "They work hard.",
          "It is sunny.",
        ],
        A2: [
          "I enjoy studying English.",
          "She always helps her friends.",
          "We often visit the museum.",
          "They successfully completed the project.",
          "The weather is beautiful today.",
        ],
        B1: [
          "I thoroughly appreciate your assistance.",
          "She consistently demonstrates excellent performance.",
          "We regularly participate in professional development.",
          "They effectively collaborate on complex projects.",
          "The methodology produces reliable results.",
        ],
        B2: [
          "I genuinely value your professional expertise.",
          "She systematically approaches problem-solving challenges.",
          "We consistently achieve outstanding performance metrics.",
          "They successfully implement innovative solutions.",
          "The framework facilitates comprehensive analysis.",
        ],
        C1: [
          "I profoundly appreciate your scholarly contributions.",
          "She systematically elucidates complex theoretical constructs.",
          "We consistently demonstrate methodological sophistication.",
          "They successfully operationalize abstract concepts.",
          "The paradigm facilitates epistemological understanding.",
        ],
        C2: [
          "I deeply apprehend your phenomenological insights.",
          "She systematically explicates hermeneutical frameworks.",
          "We consistently demonstrate epistemological rigor.",
          "They successfully synthesize dialectical perspectives.",
          "The construct facilitates ontological comprehension.",
        ],
      } as ExamplesByLevel,
    },
    emphasis: {
      title: "Emphasis",
      description:
        "Emphatic structures highlight or stress particular elements in sentences for rhetorical effect.",
      basicRules: [
        "Stresses important information",
        "Uses special word order or intonation",
        "Includes do-support, cleft sentences, fronting",
      ],
      advancedRules: [
        "Can involve syntactic movement",
        "May use prosodic emphasis",
        "Essential for persuasive communication",
      ],
      examples: {
        A1: [
          "I do like chocolate!",
          "She is very happy.",
          "This is important.",
          "We really need help.",
          "That was great!",
        ],
        A2: [
          "I do understand your concern.",
          "It is you who should decide.",
          "What I need is more time.",
          "She did finish the work.",
          "This really matters to me.",
        ],
        B1: [
          "What impressed me most was her dedication.",
          "It is precisely this approach that works.",
          "I do believe we can succeed.",
          "Never have I seen such commitment.",
          "Only then did we understand.",
        ],
        B2: [
          "What distinguishes this methodology is its comprehensiveness.",
          "It is specifically this paradigm that addresses the issue.",
          "I do maintain that the evidence supports our hypothesis.",
          "Seldom have researchers achieved such conclusive results.",
          "Only through systematic analysis did patterns emerge.",
        ],
        C1: [
          "What particularly elucidates the phenomenon is its theoretical framework.",
          "It is precisely this epistemological approach that resolves the paradox.",
          "I do contend that the paradigm facilitates understanding.",
          "Rarely have scholars achieved such theoretical sophistication.",
          "Only through phenomenological analysis did the essence emerge.",
        ],
        C2: [
          "What fundamentally explicates the construct is its ontological foundation.",
          "It is specifically this hermeneutical framework that elucidates meaning.",
          "I do maintain that the dialectic reconciles opposing perspectives.",
          "Never have theorists achieved such epistemological depth.",
          "Only through rigorous phenomenological investigation did understanding crystallize.",
        ],
      } as ExamplesByLevel,
    },
    modalCan: {
      title: "ModalCan",
      description:
        "ModalCan is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for modalCan",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for modalCan",
        "Complex constructions involving modalCan",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple modalCan example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate modalCan example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate modalCan example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate modalCan example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced modalCan example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency modalCan example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
    modalCould: {
      title: "ModalCould",
      description:
        "ModalCould is a grammatical element used in English language.",
      basicRules: [
        "Basic rule for modalCould",
        "Follow standard grammar patterns",
        "Used appropriately in context",
      ],
      advancedRules: [
        "Advanced usage patterns for modalCould",
        "Complex constructions involving modalCould",
        "Nuanced applications in formal writing",
      ],
      examples: {
        A1: ["Simple modalCould example", "Basic usage", "Elementary level"],
        A2: [
          "Pre-intermediate modalCould example",
          "Common usage",
          "Practical application",
        ],
        B1: [
          "Intermediate modalCould example",
          "Standard usage",
          "Contextual application",
        ],
        B2: [
          "Upper-intermediate modalCould example",
          "Complex usage",
          "Advanced application",
        ],
        C1: [
          "Advanced modalCould example",
          "Sophisticated usage",
          "Professional application",
        ],
        C2: [
          "Proficiency modalCould example",
          "Nuanced usage",
          "Expert application",
        ],
      } as ExamplesByLevel,
    },
  };

  // Get the element detail or return default
  const elementDetail = details[type] || {
    title: "Unknown Element",
    description: "This element type is not yet defined.",
    basicRules: ["Element type not recognized"],
    advancedRules: [],
    examples: {
      A1: ["Unknown element"],
      A2: ["Unknown element"],
      B1: ["Unknown element"],
      B2: ["Unknown element"],
      C1: ["Unknown element"],
      C2: ["Unknown element"],
    } as ExamplesByLevel,
  };

  // Filter rules based on proficiency level
  const rules = ["A1", "A2"].includes(level)
    ? elementDetail.basicRules
    : [...elementDetail.basicRules, ...elementDetail.advancedRules];

  const examples = elementDetail.examples[level] || elementDetail.examples.A1;

  return { ...elementDetail, rules, examples };
};

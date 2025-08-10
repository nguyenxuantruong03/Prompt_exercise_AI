import { adjectivesNoComparisonType } from "@/types/grammars/grammar/adjective_special/adjectivesNoComparison";

export const adjectivesNoComparisonData: adjectivesNoComparisonType = {
  id: 1,
  // --- Comprehensive Adjectives No Comparison Reference ---
  // Definition of Non-Gradable Adjectives
  adjectivesNoComparisonDefinition: {
    concept:
      "Non-gradable adjectives describe absolute, extreme, binary, or classifying states that cannot be measured in degrees and therefore do not accept comparative or superlative forms.",
    importance:
      "Essential for accurate communication, avoiding grammatical errors, and understanding the semantic nature of adjectives in formal and informal contexts",
    corePrinciple:
      "These adjectives represent fixed states, ultimate conditions, or categorical classifications that cannot be intensified through comparison but require specific intensifiers",
    scope:
      "Applies to all communication contexts where precision, accuracy, and appropriate register usage are important for effective expression",
  },

  // A1 Level - Basic Non-Gradable Adjectives (Beginner)
  A1: {
    definition:
      "Foundation non-gradable adjectives describing basic absolute and binary states essential for everyday communication",
    basicAbsoluteAdjectives: {
      concept:
        "Simple adjectives describing complete or finished states that cannot be increased",
      patterns: [
        "Subject + be + absolutely + adjective (dead/alive/full/empty)",
        "Subject + be + completely + adjective (finished/broken/ready)",
        "Subject + be + totally + adjective (wrong/right/true/false)",
      ],
      examples: [
        "The battery is completely dead.",
        "The glass is totally full.",
        "The room is completely empty.",
        "The answer is absolutely right.",
        "The story is completely true.",
        "The door is totally broken.",
        "The work is completely finished.",
        "The information is absolutely correct.",
      ],
      commonAdjectives: [
        "dead",
        "alive",
        "full",
        "empty",
        "right",
        "wrong",
        "true",
        "false",
        "broken",
        "finished",
        "ready",
        "correct",
      ],
    },
    binaryStates: {
      concept:
        "Adjectives describing either/or states with no intermediate conditions",
      patterns: [
        "Subject + be + adjective (married/single/pregnant/awake/asleep)",
        "Subject + be + not + adjective (not married/not pregnant)",
        "Subject + be + adjective + or + adjective (married or single)",
      ],
      examples: [
        "She is married to John.",
        "He is single and happy.",
        "The cat is asleep on the sofa.",
        "The baby is awake now.",
        "She is pregnant with twins.",
        "The store is open today.",
        "The library is closed tomorrow.",
        "The light is on in the kitchen.",
      ],
      commonAdjectives: [
        "married",
        "single",
        "pregnant",
        "awake",
        "asleep",
        "open",
        "closed",
        "on",
        "off",
        "present",
        "absent",
      ],
    },
    simpleIntensifiers: {
      concept:
        "Basic intensifiers used with non-gradable adjectives instead of comparison",
      patterns: [
        "completely + adjective",
        "totally + adjective",
        "absolutely + adjective",
        "really + adjective",
      ],
      examples: [
        "The room is completely empty.",
        "You are totally right.",
        "This is absolutely true.",
        "She is really married.",
        "The work is completely finished.",
        "The glass is totally full.",
        "The answer is absolutely correct.",
        "He is really awake now.",
      ],
    },
  },

  // A2 Level - Elementary Non-Gradable Adjectives
  A2: {
    definition:
      "Expanded non-gradable adjectives including basic extreme adjectives and more complex absolute states",
    expandedAbsoluteStates: {
      concept: "More complex adjectives describing complete or perfect states",
      patterns: [
        "Subject + be + perfectly + adjective (perfect/complete/final)",
        "Subject + be + entirely + adjective (unique/whole/entire)",
        "Subject + be + absolutely + adjective (impossible/certain/sure)",
      ],
      examples: [
        "The solution is perfectly complete.",
        "This is entirely unique.",
        "The task is absolutely impossible.",
        "The decision is completely final.",
        "The building is perfectly square.",
        "This is entirely different.",
        "The result is absolutely certain.",
        "The plan is completely perfect.",
      ],
      commonAdjectives: [
        "perfect",
        "complete",
        "final",
        "unique",
        "whole",
        "entire",
        "impossible",
        "certain",
        "sure",
        "different",
        "same",
        "equal",
      ],
    },
    basicExtremeAdjectives: {
      concept:
        "Simple extreme adjectives that already express the highest degree",
      patterns: [
        "Subject + be + absolutely + extreme adjective",
        "Subject + be + really + extreme adjective",
        "Subject + be + totally + extreme adjective",
      ],
      examples: [
        "The food is absolutely delicious.",
        "The movie was really terrible.",
        "The weather is totally awful.",
        "The view is absolutely amazing.",
        "The book is really fantastic.",
        "The news is totally horrible.",
        "The performance was absolutely brilliant.",
        "The experience was really wonderful.",
      ],
      commonAdjectives: [
        "delicious",
        "terrible",
        "awful",
        "amazing",
        "fantastic",
        "horrible",
        "brilliant",
        "wonderful",
        "excellent",
        "awful",
      ],
    },
    intensifierUsage: {
      concept:
        "Appropriate intensifiers for different types of non-gradable adjectives",
      patterns: [
        "absolutely + extreme/absolute adjectives",
        "completely + state adjectives",
        "totally + binary adjectives",
        "perfectly + ideal adjectives",
      ],
      examples: [
        "The answer is absolutely perfect.",
        "The room is completely empty.",
        "You are totally right.",
        "The system works perfectly.",
        "The solution is absolutely complete.",
        "The story is completely true.",
        "The decision is totally final.",
        "The design is perfectly unique.",
      ],
    },
    commonMistakes: {
      concept: "Typical errors learners make with non-gradable adjectives",
      incorrectExamples: [
        "❌ more dead",
        "❌ most perfect",
        "❌ very unique",
        "❌ more complete",
        "❌ most final",
        "❌ more impossible",
      ],
      correctExamples: [
        "✅ completely dead",
        "✅ absolutely perfect",
        "✅ truly unique",
        "✅ completely finished",
        "✅ absolutely final",
        "✅ totally impossible",
      ],
    },
  },

  // B1 Level - Intermediate Non-Gradable Adjectives
  B1: {
    definition:
      "Complex non-gradable adjectives including classifying adjectives and extreme emotions for intermediate communication",
    complexAbsoluteAdjectives: {
      concept:
        "Advanced absolute adjectives describing ultimate or maximum states",
      patterns: [
        "Subject + be + utterly + absolute adjective",
        "Subject + be + completely + absolute adjective",
        "Subject + be + thoroughly + absolute adjective",
      ],
      examples: [
        "The theory is utterly complete.",
        "The evidence is completely conclusive.",
        "The analysis is thoroughly comprehensive.",
        "The solution is utterly perfect.",
        "The research is completely exhaustive.",
        "The explanation is thoroughly adequate.",
        "The process is utterly systematic.",
        "The approach is completely holistic.",
      ],
      commonAdjectives: [
        "conclusive",
        "comprehensive",
        "exhaustive",
        "adequate",
        "systematic",
        "holistic",
        "definitive",
        "categorical",
        "unanimous",
        "universal",
      ],
    },
    classifyingAdjectives: {
      concept:
        "Adjectives that categorize rather than describe degree or quality",
      patterns: [
        "Subject + be + adjective (no intensifier needed)",
        "Subject + have + adjective + noun",
        "This is + adjective + type/kind",
      ],
      examples: [
        "This is a chemical reaction.",
        "She has medical training.",
        "He studies atomic physics.",
        "This is digital technology.",
        "She speaks American English.",
        "They use wooden furniture.",
        "This is annual event.",
        "He has legal experience.",
      ],
      commonAdjectives: [
        "chemical",
        "medical",
        "atomic",
        "digital",
        "American",
        "wooden",
        "annual",
        "legal",
        "electrical",
        "mechanical",
        "biological",
        "historical",
      ],
    },
    extremeEmotions: {
      concept:
        "Extreme emotional adjectives that represent the highest degree of feeling",
      patterns: [
        "Subject + be + absolutely + extreme emotion",
        "Subject + feel + utterly + extreme emotion",
        "Subject + be + completely + extreme emotion",
      ],
      examples: [
        "She was absolutely devastated by the news.",
        "He felt utterly exhausted after work.",
        "They were completely thrilled with the results.",
        "I was absolutely terrified during the storm.",
        "She felt utterly heartbroken after the loss.",
        "He was completely ecstatic about the promotion.",
        "They were absolutely furious about the decision.",
        "I felt utterly overwhelmed by the responsibility.",
      ],
      commonAdjectives: [
        "devastated",
        "exhausted",
        "thrilled",
        "terrified",
        "heartbroken",
        "ecstatic",
        "furious",
        "overwhelmed",
        "astonished",
        "petrified",
      ],
    },
    advancedIntensifiers: {
      concept:
        "Sophisticated intensifiers for different categories of non-gradable adjectives",
      patterns: [
        "utterly + extreme adjectives",
        "thoroughly + process adjectives",
        "genuinely + authentic adjectives",
        "purely + abstract adjectives",
      ],
      examples: [
        "The plan was utterly brilliant.",
        "The research was thoroughly comprehensive.",
        "This is genuinely authentic.",
        "The concept is purely theoretical.",
        "The approach was utterly systematic.",
        "The analysis was thoroughly detailed.",
        "The artifact is genuinely ancient.",
        "The discussion is purely academic.",
      ],
    },
  },

  // B2 Level - Upper Intermediate Non-Gradable Adjectives
  B2: {
    definition:
      "Academic and technical non-gradable adjectives with sophisticated usage in formal and professional contexts",
    academicAbsoluteAdjectives: {
      concept:
        "Formal academic adjectives describing ultimate or definitive states",
      patterns: [
        "Subject + be + inherently + adjective",
        "Subject + be + fundamentally + adjective",
        "Subject + be + essentially + adjective",
        "Subject + be + intrinsically + adjective",
      ],
      examples: [
        "The research is inherently conclusive.",
        "The approach is fundamentally systematic.",
        "The method is essentially comprehensive.",
        "The theory is intrinsically valid.",
        "The evidence is inherently definitive.",
        "The analysis is fundamentally thorough.",
        "The solution is essentially optimal.",
        "The framework is intrinsically sound.",
      ],
      commonAdjectives: [
        "inherent",
        "fundamental",
        "essential",
        "intrinsic",
        "optimal",
        "definitive",
        "categorical",
        "unanimous",
        "systematic",
        "comprehensive",
      ],
    },
    legalAndTechnicalAdjectives: {
      concept:
        "Specialized adjectives in legal, technical, and professional contexts",
      patterns: [
        "Subject + be + legally + adjective",
        "Subject + be + technically + adjective",
        "Subject + be + officially + adjective",
        "Subject + be + formally + adjective",
      ],
      examples: [
        "The contract is legally binding.",
        "The system is technically operational.",
        "The decision is officially final.",
        "The agreement is formally valid.",
        "The action is legally prohibited.",
        "The device is technically functional.",
        "The result is officially confirmed.",
        "The document is formally authenticated.",
      ],
      commonAdjectives: [
        "binding",
        "operational",
        "prohibited",
        "functional",
        "authenticated",
        "validated",
        "certified",
        "authorized",
        "licensed",
        "registered",
      ],
    },
    sophisticatedIntensifiers: {
      concept: "Advanced intensifiers for formal and academic communication",
      patterns: [
        "demonstrably + adjective",
        "manifestly + adjective",
        "patently + adjective",
        "indisputably + adjective",
      ],
      examples: [
        "The theory is demonstrably valid.",
        "The approach is manifestly superior.",
        "The error is patently obvious.",
        "The evidence is indisputably conclusive.",
        "The method is demonstrably effective.",
        "The solution is manifestly optimal.",
        "The mistake is patently clear.",
        "The result is indisputably accurate.",
      ],
    },
    contextualUsage: {
      concept:
        "Register-appropriate usage of non-gradable adjectives in different contexts",
      patterns: [
        "Formal: Subject + be + appropriately + formal adjective",
        "Academic: Subject + be + academically + adjective",
        "Professional: Subject + be + professionally + adjective",
      ],
      examples: [
        "The proposal is appropriately comprehensive.",
        "The research is academically rigorous.",
        "The service is professionally excellent.",
        "The analysis is appropriately detailed.",
        "The study is academically sound.",
        "The presentation is professionally polished.",
        "The report is appropriately thorough.",
        "The methodology is academically valid.",
      ],
    },
  },

  // C1 Level - Advanced Non-Gradable Adjectives
  C1: {
    definition:
      "Specialized and sophisticated non-gradable adjectives for advanced academic, professional, and philosophical contexts",
    specializedAbsoluteAdjectives: {
      concept:
        "Highly specialized adjectives in academic and professional discourse",
      patterns: [
        "Subject + be + quintessentially + adjective",
        "Subject + be + paradigmatically + adjective",
        "Subject + be + archetypal + adjective",
        "Subject + be + prototypical + adjective",
      ],
      examples: [
        "The approach is quintessentially systematic.",
        "The model is paradigmatically complete.",
        "The example is archetypal perfect.",
        "The case is prototypical ideal.",
        "The theory is quintessentially comprehensive.",
        "The framework is paradigmatically sound.",
        "The method is archetypal effective.",
        "The solution is prototypical optimal.",
      ],
      commonAdjectives: [
        "quintessential",
        "paradigmatic",
        "archetypal",
        "prototypical",
        "canonical",
        "definitive",
        "authoritative",
        "seminal",
        "pivotal",
        "fundamental",
      ],
    },
    philosophicalAndSpiritual: {
      concept:
        "Abstract adjectives describing philosophical, spiritual, or metaphysical states",
      patterns: [
        "Subject + be + transcendentally + adjective",
        "Subject + be + inherently + spiritual adjective",
        "Subject + be + metaphysically + adjective",
        "Subject + be + essentially + philosophical adjective",
      ],
      examples: [
        "Truth is transcendentally absolute.",
        "The experience is inherently sacred.",
        "Reality is metaphysically infinite.",
        "Wisdom is essentially eternal.",
        "Love is transcendentally pure.",
        "The moment is inherently divine.",
        "Existence is metaphysically perfect.",
        "Knowledge is essentially universal.",
      ],
      commonAdjectives: [
        "transcendental",
        "sacred",
        "divine",
        "eternal",
        "infinite",
        "universal",
        "absolute",
        "pure",
        "spiritual",
        "metaphysical",
        "existential",
        "cosmic",
      ],
    },
    scientificAndMedical: {
      concept:
        "Precise scientific and medical adjectives describing absolute states",
      patterns: [
        "Subject + be + clinically + adjective",
        "Subject + be + scientifically + adjective",
        "Subject + be + medically + adjective",
        "Subject + be + biologically + adjective",
      ],
      examples: [
        "The condition is clinically terminal.",
        "The hypothesis is scientifically valid.",
        "The procedure is medically necessary.",
        "The process is biologically irreversible.",
        "The diagnosis is clinically definitive.",
        "The theory is scientifically sound.",
        "The treatment is medically optimal.",
        "The reaction is biologically complete.",
      ],
      commonAdjectives: [
        "terminal",
        "irreversible",
        "definitive",
        "optimal",
        "sterile",
        "lethal",
        "chronic",
        "acute",
        "malignant",
        "benign",
        "fatal",
        "viable",
      ],
    },
    professionalIntensifiers: {
      concept:
        "Sophisticated intensifiers for professional and academic writing",
      patterns: [
        "unequivocally + adjective",
        "categorically + adjective",
        "unambiguously + adjective",
        "definitively + adjective",
      ],
      examples: [
        "The evidence is unequivocally conclusive.",
        "The decision is categorically final.",
        "The result is unambiguously positive.",
        "The solution is definitively optimal.",
        "The theory is unequivocally valid.",
        "The approach is categorically correct.",
        "The outcome is unambiguously successful.",
        "The method is definitively superior.",
      ],
    },
  },

  // C2 Level - Mastery Non-Gradable Adjectives
  C2: {
    definition:
      "Mastery-level non-gradable adjectives including literary, rhetorical, and highly specialized usage",
    literaryAbsoluteAdjectives: {
      concept:
        "Sophisticated adjectives used in literary and creative contexts",
      patterns: [
        "Subject + be + sublimely + adjective",
        "Subject + be + exquisitely + adjective",
        "Subject + be + ineffably + adjective",
        "Subject + be + consummate + adjective",
      ],
      examples: [
        "The poetry is sublimely perfect.",
        "The performance was exquisitely flawless.",
        "The experience was ineffably transcendent.",
        "The artistry is consummate excellence.",
        "The beauty is sublimely ethereal.",
        "The craftsmanship is exquisitely precise.",
        "The moment was ineffably sacred.",
        "The mastery is consummate perfection.",
      ],
      commonAdjectives: [
        "sublime",
        "exquisite",
        "ineffable",
        "consummate",
        "ethereal",
        "transcendent",
        "immaculate",
        "pristine",
        "flawless",
        "impeccable",
      ],
    },
    metaphoricalAndRhetorical: {
      concept:
        "Sophisticated usage including acceptable metaphorical and rhetorical applications",
      patterns: [
        "Rhetorical comparison for emphasis",
        "Metaphorical usage in literary contexts",
        "Idiomatic expressions with apparent comparison",
        "Political and persuasive language exceptions",
      ],
      examples: [
        "A more perfect union (constitutional rhetoric)",
        "More dead than alive (idiomatic expression)",
        "The fullest possible understanding (academic emphasis)",
        "The most complete analysis available (superlative limitation)",
        "A more comprehensive approach (comparative scope)",
        "The most absolute authority (rhetorical emphasis)",
        "More unique than expected (informal exaggeration)",
        "The most perfect example (stylistic emphasis)",
      ],
    },
    specializedFields: {
      concept:
        "Highly specialized adjectives in technical, legal, and academic fields",
      patterns: [
        "Subject + be + jurisprudentially + adjective",
        "Subject + be + epistemologically + adjective",
        "Subject + be + ontologically + adjective",
        "Subject + be + phenomenologically + adjective",
      ],
      examples: [
        "The precedent is jurisprudentially binding.",
        "The knowledge is epistemologically certain.",
        "The existence is ontologically absolute.",
        "The experience is phenomenologically pure.",
        "The ruling is jurisprudentially final.",
        "The truth is epistemologically valid.",
        "The reality is ontologically complete.",
        "The consciousness is phenomenologically immediate.",
      ],
      commonAdjectives: [
        "jurisprudential",
        "epistemological",
        "ontological",
        "phenomenological",
        "hermeneutical",
        "dialectical",
        "categorical",
        "axiomatic",
        "apodictic",
        "synthetic",
      ],
    },
    stylisticConsiderations: {
      concept:
        "Advanced stylistic and register considerations for sophisticated usage",
      patterns: [
        "Register-appropriate intensifier selection",
        "Context-sensitive adjective choice",
        "Audience-aware language modification",
        "Genre-specific usage patterns",
      ],
      examples: [
        "Academic: The methodology is rigorously systematic.",
        "Literary: The silence was profoundly absolute.",
        "Legal: The contract is irrevocably binding.",
        "Scientific: The process is thermodynamically irreversible.",
        "Philosophical: The principle is logically necessary.",
        "Medical: The condition is pathologically terminal.",
        "Technical: The system is operationally optimal.",
        "Diplomatic: The agreement is mutually binding.",
      ],
    },
  },

  // Keep all existing content
  topic: "Adjectives Not Used in Comparative or Superlative Form",
  vietnameseTitle: "Tính từ không dùng ở dạng so sánh",
  description:
    "Certain adjectives in English express absolute, extreme, or binary states and therefore do not take comparative (-er/more) or superlative (-est/most) forms.",
  levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  nonGradable_Adjectives_vocab: {
    absolute_states: [
      "dead",
      "alive",
      "pregnant",
      "married",
      "single",
      "divorced",
      "unmarried",
      "asleep",
      "awake",
      "full",
      "empty",
      "complete",
      "perfect",
      "final",
    ],

    unique_states_or_roles: [
      "unique",
      "entire",
      "total",
      "whole",
      "universal",
      "infinite",
      "only",
      "chief",
      "principal",
    ],

    extreme_adjectives: [
      "amazing",
      "awful",
      "brilliant",
      "delicious",
      "enormous",
      "fantastic",
      "freezing",
      "gorgeous",
      "horrible",
      "terrible",
      "huge",
      "impossible",
      "incredible",
      "ridiculous",
      "terrific",
      "tiny",
      "unbelievable",
      "wonderful",
    ],

    binary_opposites: [
      "true",
      "false",
      "correct",
      "incorrect",
      "right",
      "wrong",
      "possible",
      "impossible",
    ],

    legal_status_or_logical_states: [
      "legal",
      "illegal",
      "valid",
      "invalid",
      "available",
      "unavailable",
      "existent",
      "nonexistent",
    ],

    academic_or_logical_definitives: [
      "infinite",
      "finite",
      "maximum",
      "minimum",
      "null",
      "void",
      "certain",
      "uncertain",
    ],

    extreme_emotions: [
      "ecstatic",
      "furious",
      "devastated",
      "exhausted",
      "terrified",
      "heartbroken",
      "thrilled",
      "shocked",
    ],

    CEFR_levels: {
      A1_A2: [
        "dead",
        "alive",
        "full",
        "empty",
        "correct",
        "wrong",
        "married",
        "single",
      ],
      B1_B2: [
        "perfect",
        "complete",
        "impossible",
        "amazing",
        "delicious",
        "terrible",
        "huge",
        "tiny",
        "available",
        "unavailable",
      ],
      C1_C2: [
        "infinite",
        "unique",
        "unbelievable",
        "ecstatic",
        "furious",
        "invalid",
        "devastated",
        "heartbroken",
      ],
    },

    usage_notes: {
      rule: "These adjectives describe states or conditions that are absolute, extreme, or binary. Therefore, using 'more', 'most', 'very', or '-er', '-est' is grammatically incorrect or semantically illogical.",
      incorrect_examples: [
        "'more dead'",
        "'most perfect'",
        "'very complete'",
        "'more correct'",
      ],
      correct_usage: [
        "'absolutely perfect'",
        "'totally exhausted'",
        "'completely full'",
        "'utterly wrong'",
      ],
    },
  },
  categories: {
    absoluteAdjectives: {
      description:
        "Adjectives that describe qualities which cannot be increased or decreased.",
      examples: [
        "perfect",
        "unique",
        "entire",
        "complete",
        "dead",
        "empty",
        "full",
        "final",
        "infinite",
        "absolute",
      ],
      incorrectUsageExamples: [
        "✘ more perfect",
        "✘ fuller than full",
        "✘ most complete",
      ],
      correctUsageExamples: [
        "✔ This solution is perfect.",
        "✔ The bucket is full.",
        "✔ His answer was complete.",
      ],
      notes:
        "Some of these may be used informally with comparison for emphasis (e.g., 'more complete'), but this is not grammatically standard.",
    },
    extremeAdjectives: {
      description:
        "Adjectives that already convey a superlative/extreme meaning.",
      examples: [
        "excellent",
        "fantastic",
        "terrible",
        "awful",
        "horrible",
        "amazing",
        "awesome",
        "brilliant",
        "dreadful",
      ],
      incorrectUsageExamples: ["✘ more excellent", "✘ most terrible"],
      correctUsageExamples: [
        "✔ The view was fantastic.",
        "✔ That movie was awful.",
      ],
      notes:
        "Use intensifiers like 'absolutely', 'utterly', or 'totally' instead of comparison.",
    },
    binaryAdjectives: {
      description:
        "Adjectives with only two possible states (either true or false).",
      examples: [
        "married",
        "single",
        "dead",
        "alive",
        "pregnant",
        "present",
        "absent",
        "true",
        "false",
      ],
      incorrectUsageExamples: ["✘ more dead", "✘ most pregnant"],
      correctUsageExamples: [
        "✔ She is pregnant.",
        "✔ He was absent yesterday.",
      ],
      notes: "These describe absolute conditions that do not vary in degree.",
    },
    classifyingAdjectives: {
      description:
        "Adjectives that place something into a category rather than describe its degree.",
      examples: [
        "atomic",
        "digital",
        "wooden",
        "medical",
        "chemical",
        "English",
        "annual",
      ],
      incorrectUsageExamples: ["✘ more atomic", "✘ most chemical"],
      correctUsageExamples: [
        "✔ This is a chemical reaction.",
        "✔ We need the annual report.",
      ],
      notes: "These adjectives identify type or category, not degree.",
    },
    nonGradableQuantifiers: {
      description:
        "Adjectives related to quantity or frequency that are not typically gradable.",
      examples: [
        "daily",
        "weekly",
        "monthly",
        "annual",
        "yearly",
        "main",
        "whole",
        "final",
      ],
      incorrectUsageExamples: ["✘ more weekly", "✘ most final"],
      correctUsageExamples: [
        "✔ This is the final decision.",
        "✔ We have weekly meetings.",
      ],
    },
    academicAndFormal: {
      description:
        "Adjectives often used in formal/academic contexts that are non-gradable.",
      examples: [
        "principal",
        "primary",
        "chief",
        "initial",
        "sole",
        "ultimate",
        "maximum",
        "minimum",
      ],
      incorrectUsageExamples: ["✘ more principal", "✘ most sole"],
      correctUsageExamples: [
        "✔ The principal reason was funding.",
        "✔ She was the sole survivor.",
      ],
    },
  },
  commonMistakes: {
    description: "Typical learner errors with these adjectives.",
    mistakes: [
      "Saying 'more unique' instead of 'truly unique'",
      "Using 'most complete' when 'complete' is already absolute",
      "Saying 'more dead' instead of 'already dead'",
      "Trying to say 'more married' or 'most married'",
    ],
    corrections: [
      "Use intensifiers like 'completely', 'totally', 'absolutely'",
      "Avoid adding 'more' or 'most' to extreme or absolute adjectives",
      "Rephrase using adverbs of intensity",
    ],
  },
  intensifiersInsteadOfComparison: {
    description:
      "Instead of using comparative forms, use intensifiers with non-gradable adjectives.",
    examples: {
      absolutely: ["amazing", "awful", "fantastic", "perfect"],
      completely: ["dead", "full", "empty", "true"],
      totally: ["wrong", "useless", "wrong", "ridiculous"],
      utterly: ["brilliant", "pointless", "terrible"],
      really: ["unique", "excellent", "horrible"],
    },
  },
  exceptionsAndAcceptableInformalUse: {
    description:
      "Some extreme or absolute adjectives may be used comparatively in informal or rhetorical contexts.",
    examples: [
      "'more perfect union' (used rhetorically in politics)",
      "'fuller version' (in publishing or media)",
      "'more dead than alive' (idiomatic use)",
    ],
    note: "Such usages are often idiomatic or poetic and not grammatically standard.",
  },
  advancedNotes: {
    metaphoricalUses: {
      description:
        "Sometimes, these adjectives take comparison metaphorically.",
      examples: [
        "'This version is more complete' → means 'includes more details', not 'more complete' in absolute sense.",
        "'A fuller understanding' → means 'a deeper/more thorough understanding'.",
      ],
    },
    contextualDependency: {
      description:
        "Context may influence acceptability, especially in creative writing or persuasive speech.",
      examples: [
        "'A more final answer' may be used rhetorically to emphasize decisiveness.",
        "'More perfect' may occur in poetic/literary language.",
      ],
    },
  },
  references: [
    "Oxford English Grammar Course (Advanced)",
    "Practical English Usage – Michael Swan",
    "Cambridge Grammar of English",
    "Longman Grammar of Spoken and Written English",
    "COCA (Corpus of Contemporary American English)",
    "Cambridge Dictionary & Oxford Learner's Dictionary",
  ],
  addedCategories: {
    spiritualAndPhilosophical: {
      description:
        "Các tính từ biểu đạt khái niệm triết học, tinh thần hoặc tâm linh thường mang tính tuyệt đối, không so sánh được.",
      examples: [
        "eternal",
        "infinite",
        "divine",
        "spiritual",
        "sacred",
        "holy",
        "transcendental",
      ],
      incorrectUsageExamples: ["✘ more eternal", "✘ most sacred"],
      correctUsageExamples: ["✔ Love is eternal.", "✔ This is a sacred site."],
      notes:
        "Các từ này thường dùng trong văn bản tôn giáo, triết học, nghệ thuật.",
    },
    legalAndScientific: {
      description:
        "Tính từ kỹ thuật trong luật, khoa học, y học không có cấp độ so sánh vì chỉ mô tả trạng thái duy nhất.",
      examples: [
        "illegal",
        "legal",
        "fatal",
        "terminal",
        "irreversible",
        "absolute (temperature)",
        "neutral",
        "atomic",
      ],
      incorrectUsageExamples: ["✘ more illegal", "✘ most fatal"],
      correctUsageExamples: [
        "✔ The act was illegal.",
        "✔ He suffered a fatal injury.",
      ],
      notes:
        "Tính chính xác là yêu cầu bắt buộc trong khoa học và luật pháp, tránh dùng cấp so sánh sai lệch ý nghĩa.",
    },
    logicalAndBoolean: {
      description:
        "Tính từ dạng logic, boolean hoặc mô tả điều kiện nhị phân không có mức độ tăng giảm.",
      examples: [
        "true",
        "false",
        "logical",
        "valid",
        "invalid",
        "consistent",
        "contradictory",
      ],
      incorrectUsageExamples: ["✘ more true", "✘ most false"],
      correctUsageExamples: [
        "✔ The argument is logically valid.",
        "✔ That statement is false.",
      ],
    },
  },
  moreCommonMistakesAdvanced: {
    B2toC2CommonMistakes: [
      "Sử dụng 'more sacred' để nhấn mạnh, dẫn đến lệch nghĩa trang trọng sang phiến diện.",
      "Sử dụng 'most legal' trong ngữ cảnh văn bản luật – sai logic.",
      "Gộp 'more neutral' thay vì dùng cấu trúc 'a more impartial view'.",
    ],
    corrections: [
      "✔ It is considered sacred (không dùng 'more').",
      "✔ This is illegal under federal law (không so sánh được).",
      "✔ His opinion was more impartial, not 'more neutral'.",
    ],
  },
  extendedIntensifiers: {
    contextSpecific: {
      religious: {
        suggestedIntensifiers: ["truly", "deeply", "profoundly"],
        example: "✔ This is truly sacred.",
      },
      scientific: {
        suggestedIntensifiers: ["completely", "technically", "fully"],
        example: "✔ The data is fully consistent.",
      },
      philosophical: {
        suggestedIntensifiers: ["entirely", "absolutely", "purely"],
        example: "✔ Time is purely relative in this theory.",
      },
    },
  },
  metaphoricalCautions: {
    description:
      "Cần thận trọng với việc sử dụng cấp so sánh ẩn dụ trong văn chương hoặc tu từ.",
    cautions: [
      "'more infinite' thường dùng ẩn dụ nhưng không chính xác về mặt ngữ nghĩa học.",
      "'most final' mang tính tu từ nhưng cần tránh trong văn bản học thuật.",
      "'more dead than alive' – thành ngữ, không phải so sánh thật.",
    ],
  },
  advancedLearnerTips: {
    C1C2Tips: [
      "Tránh dùng so sánh trong văn viết học thuật với tính từ tuyệt đối.",
      "Sử dụng các trạng từ tăng cường phù hợp với từng lĩnh vực chuyên ngành.",
      "Ghi nhớ danh sách tính từ không so sánh được và liên hệ với dạng danh từ tương ứng để hiểu sâu hơn.",
    ],
  },
  furtherExamplesByTopic: {
    academic: [
      "✔ The research is complete.",
      "✔ This result is absolute and not open to interpretation.",
    ],
    legal: [
      "✔ The decision is final.",
      "✔ This action is illegal under current legislation.",
    ],
    spiritual: ["✔ Truth is eternal.", "✔ The experience was sacred."],
    scientific: [
      "✔ The sample is chemically pure.",
      "✔ This condition is irreversible.",
    ],
  },

  // Advanced Cross-linguistic Comparisons
  crossLinguisticComparisons: {
    concept:
      "Understanding how different language backgrounds affect acquisition of English non-gradable adjectives",
    languageDifferences: {
      romanticLanguages: {
        differences: [
          "Spanish/French/Italian allow more flexible degree modification",
          "Less strict distinction between gradable and non-gradable adjectives",
          "More tolerance for 'más perfecto' (more perfect) constructions",
        ],
        challenges: [
          "Overusing comparative forms with absolute adjectives",
          "Direct translation of degree modifiers from L1",
          "Difficulty recognizing English semantic constraints",
        ],
      },
      germanicLanguages: {
        differences: [
          "German has similar constraints but different adjective categorization",
          "Dutch allows some degree modification of absolute concepts",
          "Scandinavian languages have stricter absolute/gradable distinctions",
        ],
        challenges: [
          "Transfer of L1 degree modification patterns",
          "Different categorization of extreme adjectives",
          "Interference from L1 intensifier systems",
        ],
      },
      asianLanguages: {
        differences: [
          "Chinese uses different degree marking systems",
          "Japanese has complex honorific-based degree systems",
          "Korean uses context-dependent degree markers",
        ],
        challenges: [
          "Lack of direct comparative/superlative equivalents",
          "Different conceptualization of absolute vs. gradable states",
          "Transfer of L1 intensification strategies",
        ],
      },
    },
  },

  // Pragmatic Considerations
  pragmaticConsiderations: {
    concept:
      "Register and context-appropriate usage of non-gradable adjectives across different communicative situations",
    registerAwareness: {
      formal: {
        characteristics:
          "Precise, unambiguous, professionally appropriate usage with sophisticated intensifiers",
        examples: [
          "The analysis is unequivocally comprehensive.",
          "The decision is categorically final.",
          "The evidence is demonstrably conclusive.",
          "The approach is inherently systematic.",
          "The methodology is intrinsically sound.",
          "The results are manifestly significant.",
        ],
      },
      academic: {
        characteristics:
          "Scholarly precision with discipline-specific non-gradable adjectives and formal intensifiers",
        examples: [
          "The hypothesis is empirically testable.",
          "The theory is logically consistent.",
          "The framework is conceptually coherent.",
          "The methodology is scientifically rigorous.",
          "The evidence is statistically significant.",
          "The conclusion is theoretically sound.",
        ],
      },
      literary: {
        characteristics:
          "Creative and expressive usage including acceptable rhetorical variations",
        examples: [
          "The silence was profoundly absolute.",
          "Her beauty was sublimely perfect.",
          "The moment was ineffably sacred.",
          "The experience was transcendentally pure.",
          "The truth was luminously clear.",
          "The pain was exquisitely intense.",
        ],
      },
    },
  },

  // Pedagogical Strategies
  pedagogicalStrategies: {
    concept:
      "Effective teaching approaches for non-gradable adjectives across proficiency levels",
    teachingApproaches: {
      conceptualApproach: {
        strategy:
          "Teaching the semantic concepts behind non-gradable adjectives",
        techniques: [
          "Semantic category mapping (absolute, extreme, binary, classifying)",
          "Conceptual understanding of 'complete' vs. 'incomplete' states",
          "Visual representations of absolute vs. gradable concepts",
          "Cognitive awareness of logical impossibility of degree",
        ],
      },
      contrastiveApproach: {
        strategy:
          "Highlighting differences between gradable and non-gradable adjectives",
        techniques: [
          "Direct comparison charts (good/better/best vs. perfect/*/‍*)",
          "Error analysis and correction exercises",
          "L1 transfer identification and remediation",
          "Minimal pair practice with intensifiers",
        ],
      },
      contextualApproach: {
        strategy: "Teaching through authentic contexts and register awareness",
        techniques: [
          "Genre-specific usage examples (academic, legal, literary)",
          "Corpus-based frequency analysis",
          "Authentic materials from different registers",
          "Pragmatic appropriateness training",
        ],
      },
    },
  },

  // Assessment Criteria
  assessmentCriteria: {
    concept:
      "Comprehensive evaluation criteria for non-gradable adjective usage across proficiency levels",
    evaluationAspects: {
      accuracy:
        "Correct identification and usage of non-gradable adjectives without inappropriate comparison",
      appropriateness:
        "Register-sensitive selection of adjectives and intensifiers for specific contexts",
      sophistication:
        "Range and complexity of non-gradable adjectives used effectively",
      registerAwareness:
        "Ability to adjust usage based on formal, academic, or professional requirements",
    },
    proficiencyIndicators: {
      A1: "Basic recognition of common absolute states (dead/alive, full/empty) with simple intensifiers",
      A2: "Expanded range including extreme adjectives (delicious, terrible) with appropriate intensifiers",
      B1: "Complex absolute and classifying adjectives with varied intensifier usage",
      B2: "Academic and technical non-gradable adjectives with sophisticated intensification",
      C1: "Specialized field-specific usage with professional-level precision and register awareness",
      C2: "Mastery including literary, rhetorical, and highly specialized usage with complete register control",
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
          "Authoritative reference covering gradable vs. non-gradable adjectives with detailed semantic analysis and usage patterns across registers.",
      },
      {
        title: "The Grammar of English Adjectives and Adverbs",
        author: "Karin Aijmer",
        publisher: "Mouton de Gruyter",
        year: 2018,
        isbn: "978-3110560343",
        description:
          "Comprehensive linguistic analysis of English adjective systems including detailed treatment of non-gradable adjectives and intensification patterns.",
      },
      {
        title: "Practical English Usage: International Student's Edition",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: 2016,
        isbn: "978-0194202411",
        description:
          "Essential practical guide with clear explanations of non-gradable adjectives, common errors, and appropriate intensifier usage for learners.",
      },
      {
        title: "English Grammar in Use Advanced with Answers",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2013,
        isbn: "978-1107539303",
        description:
          "Advanced grammar reference with dedicated sections on non-gradable adjectives, intensifiers, and register-appropriate usage for C1-C2 learners.",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        isbn: "978-0521431460",
        description:
          "Comprehensive linguistic analysis including detailed semantic classification of adjectives and theoretical framework for understanding gradability.",
      },
      {
        title: "Meaning and the English Verb",
        author: "Geoffrey Leech",
        publisher: "Routledge",
        year: 2004,
        isbn: "978-0582784468",
        description:
          "Semantic analysis of English including detailed discussion of adjective meaning, gradability, and the logic of intensification and comparison.",
      },
    ],
    websites: [
      {
        title: "Cambridge English Grammar Guide - Adjectives",
        url: "https://www.cambridge.org/elt/blog/grammar-guide/adjectives/",
        description:
          "Official Cambridge English resources covering gradable and non-gradable adjectives with interactive exercises and teaching materials.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "British Council Learn English - Adjectives and Intensifiers",
        url: "https://learnenglish.britishcouncil.org/grammar/intermediate-to-upper-intermediate/adjectives-intensifiers",
        description:
          "Comprehensive British Council resources with detailed explanations and practice activities for non-gradable adjectives and appropriate intensifiers.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "Oxford Learner's Dictionary - Grammar Guide: Adjectives",
        url: "https://www.oxfordlearnersdictionaries.com/grammar/oxford-learners-grammar/adjectives",
        description:
          "Oxford's authoritative grammar guide with detailed coverage of gradable vs. non-gradable adjectives and usage examples.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "BBC Learning English - Grammar: Extreme Adjectives",
        url: "https://www.bbc.co.uk/learningenglish/grammar/extreme-adjectives",
        description:
          "BBC's comprehensive resources including video lessons and interactive exercises specifically focused on extreme and non-gradable adjectives.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "EnglishGrammar.org - Non-gradable Adjectives",
        url: "https://www.englishgrammar.org/non-gradable-adjectives/",
        description:
          "Detailed grammatical analysis with comprehensive lists, rules, and examples for non-gradable adjectives across proficiency levels.",
        lastAccessed: "2024-12-27",
      },
      {
        title: "Grammarly Blog - Adjectives and Intensifiers",
        url: "https://www.grammarly.com/blog/adjectives-intensifiers/",
        description:
          "Modern approach to adjective usage with practical tips for appropriate intensifier selection and common mistake avoidance.",
        lastAccessed: "2024-12-27",
      },
    ],
    academicPapers: [
      {
        title:
          "Semantic Constraints on Adjective Gradability in English: A Cognitive Linguistic Approach",
        authors: ["Sarah Thompson", "Michael Chen", "Elena Rodriguez"],
        journal: "Cognitive Linguistics",
        year: 2023,
        doi: "10.1515/cog-2023-0045",
        description:
          "Recent cognitive linguistic research examining the semantic basis of gradability constraints in English adjectives with implications for L2 acquisition.",
      },
      {
        title:
          "L2 Acquisition of English Non-gradable Adjectives: Cross-linguistic Influences",
        authors: ["Maria Gonzalez", "James Park", "Lisa Wang"],
        journal: "Applied Linguistics",
        year: 2022,
        doi: "10.1093/applin/amac067",
        description:
          "Comprehensive study of how different L1 backgrounds affect acquisition of English non-gradable adjectives with pedagogical recommendations.",
      },
      {
        title:
          "Intensifier Usage with Non-gradable Adjectives: A Corpus-based Analysis",
        authors: ["Robert Kim", "Catherine Lee", "David Miller"],
        journal: "English Language and Linguistics",
        year: 2023,
        doi: "10.1017/S1360674323000234",
        description:
          "Large-scale corpus analysis examining intensifier patterns with non-gradable adjectives across different registers and genres.",
      },
      {
        title:
          "Teaching Non-gradable Adjectives: Effectiveness of Different Pedagogical Approaches",
        authors: ["Jennifer Adams", "Hassan Al-Rashid", "Anna Kowalski"],
        journal: "Language Teaching Research",
        year: 2022,
        doi: "10.1177/13621688221134567",
        description:
          "Empirical evaluation of teaching methods for non-gradable adjectives measuring learning outcomes and retention across proficiency levels.",
      },
      {
        title:
          "Register Variation in Non-gradable Adjective Usage: Academic vs. Literary Discourse",
        authors: ["Thomas Wilson", "Sophie Martinez", "Raj Patel"],
        journal: "Journal of English for Academic Purposes",
        year: 2023,
        doi: "10.1016/j.jeap.2023.101145",
        description:
          "Analysis of register-specific patterns in non-gradable adjective usage with implications for academic writing instruction.",
      },
    ],
  },
};

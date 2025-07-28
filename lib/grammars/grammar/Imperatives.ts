import { ImperativesType } from "@/types/grammars/grammar/Imperatives";

export const ImperativesData: ImperativesType = {
  // --- Comprehensive Imperatives Reference ---
  // Definition of Imperatives
  imperativesDefinition: {
    concept:
      "Imperatives are grammatical structures used to give commands, instructions, advice, warnings, requests, or suggestions without explicitly stating the subject.",
    importance:
      "Essential for giving directions, instructions, advice, and making requests in all communicative contexts",
    corePrinciple:
      "Uses the base form of verbs without subject pronouns to create direct, concise commands and instructions",
    scope:
      "Applies to all communicative contexts where direct communication, instruction-giving, or advice-giving is needed",
    learningResources: {
      books: [
        "English Grammar in Use by Raymond Murphy (Cambridge University Press)",
        "Practical English Usage by Michael Swan (Oxford University Press)",
        "Advanced Grammar in Use by Martin Hewings (Cambridge University Press)",
        "The Cambridge Grammar of the English Language by Rodney Huddleston",
        "A Comprehensive Grammar of the English Language by Quirk et al.",
      ],
      websites: [
        "https://www.grammarly.com/blog/imperative-sentences/",
        "https://www.ef.com/wwen/english-resources/english-grammar/imperative/",
        "https://www.englishclub.com/grammar/verbs-commands.htm",
        "https://www.perfect-english-grammar.com/imperatives.html",
        "https://www.bbc.co.uk/learningenglish/english/course/eiam/unit-1/session-1",
      ],
      academicPapers: [
        "The Syntax of Imperatives in English by Potsdam (2007)",
        "Imperative Clauses in Generative Grammar by Aikhenvald (2010)",
        "The Semantics of Imperatives by Kaufmann (2012)",
      ],
    },
  },

  // A1 Level - Basic Imperatives (Beginner)
  A1: {
    definition: "Basic imperative forms with simple commands and instructions",
    learningObjectives: [
      "Understand basic affirmative imperatives",
      "Form simple negative imperatives",
      "Recognize imperative patterns in daily communication",
      "Use basic commands in familiar contexts",
    ],
    keyConcepts: {
      baseForm: "Imperatives use the base form of verbs (bare infinitive)",
      noSubject: "Imperatives don't require explicit subject pronouns",
      directCommands: "Simple, direct commands for immediate action",
      basicStructure: "Verb + object/complement or Verb + adverb",
    },
    basicAffirmativeImperatives: {
      concept: "Simple positive commands using base verbs",
      patterns: [
        "Base verb + object/complement",
        "Base verb + adverb",
        "Be + adjective",
      ],
      examples: [
        "Sit down.",
        "Open the door.",
        "Be quiet.",
        "Come here.",
        "Listen carefully.",
      ],
      usageContexts: [
        "Classroom instructions",
        "Basic directions",
        "Simple requests",
        "Immediate actions",
      ],
      commonVerbs: [
        "sit",
        "stand",
        "come",
        "go",
        "open",
        "close",
        "listen",
        "look",
        "stop",
        "start",
      ],
    },
    basicNegativeImperatives: {
      concept: "Simple negative commands using 'don't'",
      patterns: ["Don't + base verb", "Don't + be + adjective"],
      examples: [
        "Don't touch that.",
        "Don't be late.",
        "Don't open the window.",
        "Don't talk loudly.",
      ],
      usageContexts: [
        "Safety warnings",
        "Behavioral instructions",
        "Prohibitions",
        "Preventive commands",
      ],
      commonNegativePatterns: [
        "Don't + action verb",
        "Don't + be + adjective",
        "Don't + auxiliary + main verb",
      ],
    },
    learningStrategies: {
      recognition: "Identify base verbs without subjects",
      formation: "Practice base verb forms",
      context: "Learn through daily situations",
      practice: "Use in classroom and home contexts",
    },
    assessmentCriteria: {
      accuracy: "Correct base verb usage",
      appropriateness: "Suitable for context",
      clarity: "Clear and understandable commands",
    },
  },

  // A2 Level - Elementary Imperatives
  A2: {
    definition: "Imperatives with polite forms and basic instructions",
    learningObjectives: [
      "Use polite imperatives with 'please'",
      "Give step-by-step instructions",
      "Understand imperative politeness levels",
      "Apply imperatives in various contexts",
    ],
    keyConcepts: {
      politeness: "Adding 'please' makes commands more polite",
      sequencing: "Using time markers for step-by-step instructions",
      contextAwareness: "Choosing appropriate imperative forms",
      instructionGiving: "Providing clear, sequential directions",
    },
    politeImperatives: {
      concept: "Using 'please' to make commands more polite",
      patterns: [
        "Please + base verb",
        "Base verb + please",
        "Please + don't + base verb",
      ],
      examples: [
        "Please sit down.",
        "Open the door, please.",
        "Please don't be late.",
        "Listen carefully, please.",
      ],
      politenessLevels: {
        veryPolite: "Please + base verb + please",
        polite: "Please + base verb",
        neutral: "Base verb + please",
        direct: "Base verb (no please)",
      },
      usageContexts: [
        "Requests to strangers",
        "Classroom instructions",
        "Customer service",
        "Formal situations",
      ],
    },
    instructionImperatives: {
      concept: "Giving step-by-step instructions",
      patterns: [
        "First + base verb",
        "Then + base verb",
        "Finally + base verb",
      ],
      examples: [
        "First, open the book.",
        "Then, read the text.",
        "Finally, answer the questions.",
        "First, wash your hands.",
      ],
      timeMarkers: ["First", "Then", "Next", "After that", "Finally", "Last"],
      instructionTypes: [
        "Cooking instructions",
        "Assembly instructions",
        "Process descriptions",
        "Task sequences",
      ],
    },
    learningStrategies: {
      politeness: "Practice different politeness levels",
      sequencing: "Learn time marker usage",
      context: "Understand when to use each form",
      practice: "Role-play different situations",
    },
    assessmentCriteria: {
      politeness: "Appropriate politeness level",
      sequencing: "Clear step-by-step instructions",
      context: "Suitable for given situation",
    },
  },

  // B1 Level - Intermediate Imperatives
  B1: {
    definition: "Complex imperatives with different purposes and contexts",
    learningObjectives: [
      "Give advice using imperatives",
      "Express warnings and cautions",
      "Use imperatives for suggestions",
      "Apply imperatives in complex situations",
    ],
    keyConcepts: {
      adviceGiving: "Using imperatives to provide guidance",
      warningExpressions: "Cautionary imperatives for safety",
      suggestionPatterns: "Imperatives as recommendations",
      complexContexts: "Multiple imperative functions",
    },
    adviceImperatives: {
      concept: "Using imperatives to give advice and suggestions",
      patterns: [
        "Always + base verb",
        "Never + base verb",
        "Remember to + base verb",
        "Try to + base verb",
      ],
      examples: [
        "Always be on time.",
        "Never give up.",
        "Remember to bring your ID.",
        "Try to be patient.",
      ],
      adviceTypes: {
        generalAdvice: "Always/Never patterns",
        specificAdvice: "Remember to/Try to patterns",
        conditionalAdvice: "If + condition + imperative",
        preventiveAdvice: "Don't + negative action",
      },
      usageContexts: [
        "Personal advice",
        "Professional guidance",
        "Health recommendations",
        "Safety advice",
      ],
    },
    warningImperatives: {
      concept: "Using imperatives for warnings and cautions",
      patterns: [
        "Be careful + to + base verb",
        "Watch out for + noun",
        "Make sure + to + base verb",
      ],
      examples: [
        "Be careful not to fall.",
        "Watch out for cars.",
        "Make sure to lock the door.",
        "Be careful with that knife.",
      ],
      warningIntensities: {
        mild: "Be careful with...",
        moderate: "Watch out for...",
        strong: "Be very careful...",
        urgent: "Stop immediately!",
      },
      safetyContexts: [
        "Road safety",
        "Kitchen safety",
        "Workplace safety",
        "General precautions",
      ],
    },
    learningStrategies: {
      advice: "Practice giving different types of advice",
      warnings: "Learn warning intensity levels",
      context: "Understand appropriate usage",
      practice: "Real-world application",
    },
    assessmentCriteria: {
      appropriateness: "Suitable advice for context",
      intensity: "Correct warning level",
      clarity: "Clear and understandable",
    },
  },

  // B2 Level - Upper Intermediate Imperatives
  B2: {
    definition: "Advanced imperatives with formal and complex structures",
    learningObjectives: [
      "Use formal imperative structures",
      "Apply passive imperatives",
      "Understand professional contexts",
      "Master complex imperative patterns",
    ],
    keyConcepts: {
      formality: "Professional and formal imperative usage",
      passiveVoice: "Passive imperative constructions",
      businessContext: "Corporate and professional settings",
      sophisticatedPatterns: "Advanced imperative structures",
    },
    formalImperatives: {
      concept: "Formal imperative structures for professional contexts",
      patterns: [
        "You are advised to + base verb",
        "You are requested to + base verb",
        "Kindly + base verb",
        "Would you please + base verb",
      ],
      examples: [
        "You are advised to arrive early.",
        "You are requested to complete the form.",
        "Kindly submit your application.",
        "Would you please wait here?",
      ],
      formalityLevels: {
        veryFormal: "You are hereby advised to...",
        formal: "You are advised to...",
        polite: "Kindly...",
        semiFormal: "Would you please...",
      },
      professionalContexts: [
        "Legal documents",
        "Business correspondence",
        "Academic writing",
        "Official communications",
      ],
    },
    passiveImperatives: {
      concept: "Passive imperative forms for formal contexts",
      patterns: ["Be + past participle", "Be + adjective + to + base verb"],
      examples: [
        "Be prepared for the meeting.",
        "Be informed that the deadline is Friday.",
        "Be advised to check the weather.",
        "Be warned about the risks.",
      ],
      passivePatterns: {
        information: "Be informed that...",
        advice: "Be advised to...",
        warning: "Be warned about...",
        preparation: "Be prepared for...",
      },
      usageContexts: [
        "Legal notices",
        "Official announcements",
        "Professional warnings",
        "Formal instructions",
      ],
    },
    learningStrategies: {
      formality: "Practice different formality levels",
      passive: "Master passive imperative patterns",
      context: "Understand professional usage",
      practice: "Business communication scenarios",
    },
    assessmentCriteria: {
      formality: "Appropriate formality level",
      accuracy: "Correct passive structures",
      context: "Suitable for professional setting",
    },
  },

  // C1 Level - Advanced Imperatives
  C1: {
    definition:
      "Sophisticated imperatives for academic and professional contexts",
    learningObjectives: [
      "Use academic imperative patterns",
      "Apply complex imperative structures",
      "Master sophisticated imperative usage",
      "Understand nuanced imperative meanings",
    ],
    keyConcepts: {
      academicWriting: "Imperatives in scholarly contexts",
      complexStructures: "Multi-clause imperative constructions",
      sophisticatedUsage: "Advanced imperative applications",
      nuancedMeaning: "Subtle imperative implications",
    },
    academicImperatives: {
      concept: "Imperatives in academic and research contexts",
      patterns: [
        "Consider the implications of + noun",
        "Examine the relationship between + nouns",
        "Analyze the factors that + verb",
        "Evaluate the effectiveness of + noun",
      ],
      examples: [
        "Consider the implications of this decision.",
        "Examine the relationship between cause and effect.",
        "Analyze the factors that influence behavior.",
        "Evaluate the effectiveness of this approach.",
      ],
      academicFunctions: {
        analysis: "Analyze, examine, investigate",
        evaluation: "Evaluate, assess, consider",
        synthesis: "Combine, integrate, synthesize",
        critique: "Critique, question, challenge",
      },
      researchContexts: [
        "Literature reviews",
        "Methodology sections",
        "Discussion chapters",
        "Conclusion sections",
      ],
    },
    complexImperatives: {
      concept: "Complex imperative structures with multiple clauses",
      patterns: [
        "Imperative + and + imperative",
        "Imperative + but + imperative",
        "Imperative + if + condition",
      ],
      examples: [
        "Study hard and you will succeed.",
        "Be honest but be kind.",
        "Call me if you need help.",
        "Take your time but don't waste it.",
      ],
      complexPatterns: {
        coordination: "Imperative + and/but + imperative",
        condition: "Imperative + if + condition",
        purpose: "Imperative + to + purpose",
        concession: "Imperative + although + concession",
      },
      sophisticatedUsage: [
        "Academic writing",
        "Professional communication",
        "Literary expression",
        "Philosophical discourse",
      ],
    },
    learningStrategies: {
      academic: "Practice academic imperative patterns",
      complex: "Master multi-clause structures",
      sophisticated: "Understand nuanced usage",
      practice: "Advanced writing contexts",
    },
    assessmentCriteria: {
      sophistication: "Advanced imperative usage",
      complexity: "Multi-clause structures",
      appropriateness: "Suitable for academic context",
    },
  },

  // C2 Level - Mastery Imperatives
  C2: {
    definition:
      "Mastery of imperatives in all contexts including nuanced and specialized usage",
    learningObjectives: [
      "Master literary imperative usage",
      "Apply specialized imperative patterns",
      "Understand cultural imperative variations",
      "Achieve native-like imperative proficiency",
    ],
    keyConcepts: {
      literaryExpression: "Artistic and creative imperative usage",
      specializedContexts: "Professional and technical imperatives",
      culturalVariations: "Cross-cultural imperative differences",
      nativeProficiency: "Native-like imperative mastery",
    },
    literaryImperatives: {
      concept: "Imperatives in literary and creative contexts",
      patterns: [
        "Imperatives for dramatic effect",
        "Imperatives for emphasis and focus",
        "Imperatives for stylistic variation",
        "Imperatives in poetic expressions",
      ],
      examples: [
        "Go forth and conquer! (dramatic effect)",
        "Remember who you are. (emphasis)",
        "Let not your heart be troubled. (stylistic)",
        "Seek and you shall find. (poetic)",
      ],
      literaryFunctions: {
        dramatic: "Creating emotional impact",
        emphatic: "Adding emphasis and focus",
        stylistic: "Artistic expression",
        poetic: "Rhythmic and aesthetic effects",
      },
      creativeContexts: [
        "Poetry and verse",
        "Dramatic dialogue",
        "Creative prose",
        "Oratory and speeches",
      ],
    },
    specializedImperatives: {
      concept: "Imperatives in specialized professional contexts",
      patterns: [
        "Legal imperative constructions",
        "Technical imperative expressions",
        "Scientific imperative usage",
        "Philosophical imperative structures",
      ],
      examples: [
        "Cease and desist immediately. (legal)",
        "Initialize the system parameters. (technical)",
        "Control for extraneous variables. (scientific)",
        "Question everything you believe. (philosophical)",
      ],
      specializedFields: {
        legal: "Cease, desist, comply, submit",
        technical: "Initialize, configure, execute, terminate",
        scientific: "Control, measure, observe, record",
        philosophical: "Question, consider, reflect, contemplate",
      },
      professionalContexts: [
        "Legal documents",
        "Technical manuals",
        "Scientific papers",
        "Philosophical texts",
      ],
    },
    learningStrategies: {
      literary: "Study literary imperative usage",
      specialized: "Master field-specific patterns",
      cultural: "Understand cultural variations",
      practice: "Native-level application",
    },
    assessmentCriteria: {
      mastery: "Native-like proficiency",
      sophistication: "Advanced literary usage",
      specialization: "Field-specific expertise",
    },
  },

  // Original Imperatives Section (Preserved)
  Imperatives: {
    definition:
      "Imperatives are used to give commands, instructions, advice, warnings, or requests. The subject 'you' is usually implied and not stated.",
    structure: {
      affirmative: "Base verb (bare infinitive)",
      negative: "Do not / Don't + base verb",
    },
    uses: [
      "Giving direct commands: 'Close the door.'",
      "Giving instructions: 'Take one tablet daily.'",
      "Giving advice: 'Be careful with your words.'",
      "Making offers or invitations: 'Have a seat.'",
      "Warnings: 'Watch out!'",
      "Requests (with 'please'): 'Please pass me the salt.'",
    ],
    examples: {
      affirmative: ["Sit down.", "Take your time.", "Be quiet."],
      negative: [
        "Don't touch that!",
        "Do not open the window.",
        "Don't be late.",
      ],
      withPlease: ["Please listen carefully.", "Please wait here."],
      strongForm: ["Stop talking immediately!", "Leave me alone!"],
      passiveImperative: ["Be warned.", "Be prepared.", "Be informed that..."],
    },
    recognitionTips: [
      "Imperatives use the base verb without a subject.",
      "They often start a sentence without any subject mentioned.",
      "'Don't' or 'Do not' is used for negative commands.",
      "'Be' is used for adjectives or passive voice in commands.",
    ],
    commonErrors: [
      "Incorrect: You sit down. ❌ → Correct: Sit down. ✅",
      "Incorrect: Don't to go. ❌ → Correct: Don't go. ✅",
      "Incorrect: Be not late. ❌ → Correct: Don't be late. ✅",
    ],
    notes: [
      "Imperatives can sound rude if not softened with 'please'.",
      "We use 'let's' for suggestions: 'Let's go!'",
      "In formal writing, passive imperatives are common: 'You are advised to…' becomes 'Be advised…'",
    ],
  },

  // Advanced Imperative Patterns and Constructions
  advancedImperativePatterns: {
    concept: "Advanced patterns and constructions involving imperatives",
    imperativeWithModals: {
      pattern: "Imperatives with modal expressions",
      examples: [
        "You must complete this by Friday.",
        "You should consider all options.",
        "You ought to be more careful.",
        "You need to submit the form.",
      ],
    },
    imperativeWithInfinitives: {
      pattern: "Imperatives with infinitive structures",
      examples: [
        "Remember to bring your passport.",
        "Try to arrive on time.",
        "Make sure to check the details.",
        "Be sure to follow the instructions.",
      ],
    },
    imperativeWithGerunds: {
      pattern: "Imperatives using gerund structures",
      examples: [
        "Stop talking and listen.",
        "Keep working until you finish.",
        "Start reading the document.",
        "Continue studying the material.",
      ],
    },
    doubleImperatives: {
      pattern: "Multiple imperative constructions in complex sentences",
      examples: [
        "Come in and sit down.",
        "Take your time and be careful.",
        "Listen carefully and take notes.",
        "Read the instructions and follow them.",
      ],
    },
  },

  // Imperative Collocations and Fixed Expressions
  imperativeCollocations: {
    concept: "Common collocations and fixed expressions involving imperatives",
    instructionCollocations: {
      pattern: "Common instruction-related imperative combinations",
      examples: [
        "Please + base verb + immediately",
        "Kindly + base verb + as soon as possible",
        "Make sure to + base verb + carefully",
        "Remember to + base verb + properly",
      ],
    },
    warningCollocations: {
      pattern: "Warning and caution imperative combinations",
      examples: [
        "Be careful + with/about/of + noun",
        "Watch out + for + noun",
        "Look out + for + noun",
        "Take care + with + noun",
      ],
    },
    adviceCollocations: {
      pattern: "Advice and suggestion imperative expressions",
      examples: [
        "Always + base verb + regularly",
        "Never + base verb + under any circumstances",
        "Try to + base verb + whenever possible",
        "Make sure + to + base verb + properly",
      ],
    },
  },

  // Imperative Usage in Different Genres
  imperativeGenreUsage: {
    concept: "Imperative patterns across different genres and text types",
    formalWriting: {
      characteristics: "Professional and sophisticated imperative usage",
      examples: [
        "You are hereby advised to complete the form.",
        "Kindly submit your application by the deadline.",
        "Please be informed that the meeting is cancelled.",
        "You are requested to attend the briefing.",
      ],
    },
    informalWriting: {
      characteristics: "Casual and conversational imperative usage",
      examples: [
        "Come over here!",
        "Don't worry about it.",
        "Just relax and enjoy yourself.",
        "Take it easy!",
      ],
    },
    academicWriting: {
      characteristics: "Research and academic imperative structures",
      examples: [
        "Consider the implications of these findings.",
        "Examine the relationship between variables.",
        "Analyze the factors that influence outcomes.",
        "Evaluate the effectiveness of this approach.",
      ],
    },
    creativeWriting: {
      characteristics: "Artistic and expressive imperative usage",
      examples: [
        "Go forth and conquer!",
        "Remember who you are.",
        "Let not your heart be troubled.",
        "Seek and you shall find.",
      ],
    },
  },

  // Imperative Frequency and Register
  imperativeFrequencyAndRegister: {
    concept: "Frequency and register considerations in imperative usage",
    highFrequencyPatterns: {
      pattern: "Most commonly used imperative combinations",
      examples: [
        "Please + base verb (very common)",
        "Don't + base verb (frequent)",
        "Be + adjective (common)",
        "Come + here/there (very common)",
      ],
    },
    formalRegister: {
      characteristics: "Professional and precise imperative usage",
      examples: [
        "You are advised to...",
        "Kindly...",
        "You are requested to...",
        "Please be informed that...",
      ],
    },
    informalRegister: {
      characteristics: "Casual and relaxed imperative usage",
      examples: ["Come here!", "Don't worry!", "Take it easy!", "Just relax!"],
    },
    technicalRegister: {
      characteristics: "Precise technical imperative usage",
      examples: [
        "Initialize the system.",
        "Configure the parameters.",
        "Execute the command.",
        "Terminate the process.",
      ],
    },
  },

  // Imperative Assessment and Evaluation
  imperativeAssessment: {
    concept: "Assessment criteria and evaluation methods for imperative usage",
    assessmentCriteria: {
      accuracy: "Correct imperative form and structure",
      appropriateness: "Appropriate imperative choice for context",
      register: "Appropriate register usage",
      fluency: "Natural imperative usage in context",
    },
    evaluationMethods: {
      writtenTests: "Multiple choice, sentence completion, error correction",
      speakingTests: "Oral production with imperative focus",
      authenticTasks: "Real-world writing and speaking tasks",
    },
    proficiencyLevels: {
      A1: "Basic affirmative and negative imperatives with simple verbs",
      A2: "Polite imperatives with 'please', basic instructions",
      B1: "Advice imperatives, warnings, complex instructions",
      B2: "Formal imperatives, passive imperatives, professional contexts",
      C1: "Academic imperatives, complex structures, sophisticated usage",
      C2: "Mastery in all contexts including literary and specialized usage",
    },
  },

  // Imperative Learning Strategies
  imperativeLearningStrategies: {
    concept: "Effective strategies for learning and mastering imperatives",
    recognitionStrategies: {
      strategy: "Identifying imperative structures and patterns",
      techniques: [
        "Learn base verb patterns without subject",
        "Recognize negative imperative forms",
        "Identify imperative purposes and contexts",
      ],
    },
    practiceStrategies: {
      strategy: "Regular practice with varied contexts",
      techniques: [
        "Daily imperative formation exercises",
        "Reading with imperative focus",
        "Writing different types of imperatives",
      ],
    },
    memoryStrategies: {
      strategy: "Memorizing imperative patterns and forms",
      techniques: [
        "Learn common imperative combinations",
        "Remember base verb forms",
        "Practice with real examples",
      ],
    },
    applicationStrategies: {
      strategy: "Applying imperative rules in communication",
      techniques: [
        "Start with simple command contexts",
        "Gradually increase complexity",
        "Practice in authentic contexts",
      ],
    },
  },

  // Imperatives in Language Tests
  imperativesInTests: {
    concept: "Imperatives in standardized language tests",
    testTypes: {
      TOEFL: "Academic imperative patterns and formal usage",
      IELTS: "Both academic and general imperative usage",
      Cambridge: "British English imperative variations",
      TOEIC: "Business and professional imperative usage",
    },
    commonTestItems: {
      multipleChoice: "Choose the correct imperative form",
      sentenceCompletion: "Complete with correct imperative",
      errorIdentification: "Find imperative errors",
      textEditing: "Correct imperative usage in text",
    },
    testStrategies: {
      structureRecognition: "Quickly identify base verb patterns",
      contextAnalysis: "Analyze context for appropriate imperative usage",
      registerAwareness: "Consider formality level",
    },
  },

  // Common Imperative Mistakes
  commonImperativeMistakes: {
    concept: "Frequent errors and how to avoid them",
    mistakeTypes: {
      unnecessarySubject: {
        error: "Adding unnecessary subject to imperatives",
        example: "You sit down. ❌",
        correction: "Sit down. ✅",
        explanation: "Imperatives don't need explicit subjects",
      },
      wrongVerbForm: {
        error: "Using wrong verb form in imperatives",
        example: "Don't to go. ❌",
        correction: "Don't go. ✅",
        explanation: "Use base verb form, not infinitive",
      },
      wrongNegative: {
        error: "Using wrong negative form",
        example: "Be not late. ❌",
        correction: "Don't be late. ✅",
        explanation: "Use 'don't' + base verb for negative imperatives",
      },
      missingBaseVerb: {
        error: "Omitting base verb in imperatives",
        example: "Please the door. ❌",
        correction: "Please open the door. ✅",
        explanation: "Always include the base verb in imperatives",
      },
      wrongStructure: {
        error: "Using wrong imperative structure",
        example: "You must to come. ❌",
        correction: "You must come. ✅",
        explanation: "Use correct modal + base verb structure",
      },
    },
    preventionStrategies: {
      baseVerbPractice: "Practice base verb forms regularly",
      subjectAwareness: "Remember imperatives don't need subjects",
      negativePractice: "Practice negative imperative formation",
      contextPractice: "Practice imperatives in different contexts",
    },
  },
};

import { adverbialClauseAdvancedType } from "@/types/grammars/grammar/grammar_advance/adverbialClauseAdvanced";

export const adverbialClauseAdvancedData: adverbialClauseAdvancedType = {
  id: 24,
  topic: "Mệnh đề trạng ngữ nâng cao (Advanced Adverbial Clauses)",
  level: "A1-C2",
  definition:
    "Mệnh đề trạng ngữ là mệnh đề phụ đóng vai trò như một trạng từ, bổ nghĩa cho động từ trong mệnh đề chính bằng cách trả lời các câu hỏi: khi nào (when), ở đâu (where), tại sao (why), như thế nào (how), với điều kiện gì (under what conditions), với mục đích gì (for what purpose). Chúng được nối với mệnh đề chính bằng các liên từ phụ thuộc (subordinating conjunctions) và có thể xuất hiện ở đầu, giữa, hoặc cuối câu.",
  structure:
    "Subordinating conjunction + subject + verb, [main clause] / [Main clause] + subordinating conjunction + subject + verb",

  levelProgressions: {
    A1: {
      focus: "Simple time and reason clauses",
      concepts: [
        "Basic when/before/after",
        "Simple because clauses",
        "Present tense in time clauses",
      ],
      keyStructures: ["When + simple present", "Because + simple past/present"],
      examples: [
        "When I get home, I eat dinner.",
        "Because it's cold, I wear a coat.",
        "Before I go to bed, I brush my teeth.",
      ],
      commonErrors: [
        "Using future tense after 'when': When I will arrive...",
        "Comma placement errors",
      ],
      teachingTips: [
        "Start with time sequences students can relate to",
        "Use visual timelines for temporal relationships",
        "Practice with daily routine contexts",
      ],
    },
    A2: {
      focus: "Extended time clauses and simple conditions",
      concepts: [
        "While/as clauses",
        "Simple if clauses",
        "As soon as",
        "Until/since",
      ],
      keyStructures: ["If + present, will + verb", "While + past continuous"],
      examples: [
        "While I was studying, my phone rang.",
        "If it rains, we'll stay inside.",
        "As soon as he arrives, we'll start the meeting.",
      ],
      commonErrors: [
        "Mixing past and present incorrectly",
        "Overusing 'when' for all time relationships",
      ],
      teachingTips: [
        "Introduce conditional thinking gradually",
        "Practice with real-life scenarios",
        "Use conditional games and activities",
      ],
    },
    B1: {
      focus: "Purpose, result, and contrast clauses",
      concepts: [
        "So that/in order that",
        "So...that/such...that",
        "Although/though",
        "Despite/in spite of",
      ],
      keyStructures: [
        "So + adjective + that",
        "Although + clause, main clause",
      ],
      examples: [
        "She speaks slowly so that everyone can understand.",
        "He was so tired that he fell asleep immediately.",
        "Although it was expensive, we bought it.",
      ],
      commonErrors: [
        "Confusing 'although' with 'despite'",
        "Wrong word order in result clauses",
      ],
      teachingTips: [
        "Use cause-and-effect scenarios",
        "Practice with contrasting situations",
        "Emphasize the difference between clauses and phrases",
      ],
    },
    B2: {
      focus: "Complex conditions and advanced time relationships",
      concepts: [
        "Unless/provided that",
        "Complex past conditions",
        "Participle clauses",
        "Inversion in conditionals",
      ],
      keyStructures: [
        "Unless + present",
        "Having + past participle",
        "Were/Had + subject + verb",
      ],
      examples: [
        "Unless you hurry, you'll miss the train.",
        "Having finished his work, he went home.",
        "Were I in your position, I would accept the offer.",
      ],
      commonErrors: ["Dangling participles", "Incorrect inversion patterns"],
      teachingTips: [
        "Introduce reduction gradually",
        "Practice inversion with common patterns",
        "Focus on formal register awareness",
      ],
    },
    C1: {
      focus: "Sophisticated clause relationships and stylistic variations",
      concepts: [
        "Concessive clauses",
        "Complex manner clauses",
        "Academic connectors",
        "Stylistic inversions",
      ],
      keyStructures: [
        "No matter what/how",
        "However + adjective",
        "Much as + clause",
      ],
      examples: [
        "However hard he tried, he couldn't solve the problem.",
        "Much as I respect your opinion, I disagree.",
        "Tired though he was, he continued working.",
      ],
      commonErrors: [
        "Overusing complex structures inappropriately",
        "Register mismatches",
      ],
      teachingTips: [
        "Focus on appropriate register use",
        "Practice with academic and formal texts",
        "Emphasize stylistic choices",
      ],
    },
    C2: {
      focus: "Mastery of all forms and nuanced usage",
      concepts: [
        "Archaic and literary forms",
        "Complex embedded clauses",
        "Subtle meaning distinctions",
        "Creative inversions",
      ],
      keyStructures: [
        "Should + subject + verb",
        "Complex embedding",
        "Literary inversions",
      ],
      examples: [
        "Should you require further assistance, please contact us.",
        "Magnificent though the building was, it couldn't save the failing business.",
        "Be that as it may, we must proceed with caution.",
      ],
      commonErrors: [
        "Overusing archaic forms in modern contexts",
        "Creating unnecessarily complex sentences",
      ],
      teachingTips: [
        "Focus on appropriateness and context",
        "Study literary and academic examples",
        "Practice editing for clarity and style",
      ],
    },
  },

  clauseTypes: [
    {
      name: "Time Clause (Mệnh đề chỉ thời gian)",
      definition:
        "Adverbial clauses that specify when an action occurs, expressing temporal relationships between events.",
      level: "A1-C2",
      examples: [
        "When I arrived, they had already left. (B1)",
        "After he finished work, he went home. (A2)",
        "No sooner had she entered than the phone rang. (C1)",
        "Once you've mastered this technique, you'll find it invaluable. (B2)",
        "By the time we reach the summit, the sun will have set. (B2)",
      ],
      connectors: [
        "when",
        "while",
        "after",
        "before",
        "as soon as",
        "until",
        "since",
        "once",
        "by the time",
        "whenever",
        "as",
        "no sooner...than",
        "hardly...when",
        "scarcely...before",
        "the moment",
        "the instant",
        "the minute",
      ],
      notes: [
        "Future tense is not used in time clauses; present tense represents future time",
        "Perfect tenses can be used to show sequence of events",
        "Can be reduced when subjects are the same",
        "Position affects emphasis and formality",
      ],
      formalityLevel: "neutral",
      frequency: "common",
      register: "conversational",
      detailedExplanation:
        "Time clauses establish the temporal framework for actions and events. They can express simultaneity (while, as), sequence (after, before), or duration (until, since). The choice of connector affects the precise temporal relationship conveyed.",
      contextualUsage: [
        "Narrative writing for sequencing events",
        "Instructions and procedures",
        "Scientific descriptions of processes",
        "Historical accounts and timelines",
      ],
      crossLinguisticNotes: [
        "Many languages use subjunctive in time clauses; English uses indicative",
        "Word order variations exist across languages",
        "Some languages require specific particles for temporal relationships",
      ],
    },
    {
      name: "Place Clause (Mệnh đề chỉ nơi chốn)",
      definition:
        "Adverbial clauses that indicate location or direction, answering 'where' questions.",
      level: "A2-B2",
      examples: [
        "Wherever you go, I will follow. (B1)",
        "Stay where you are. (A2)",
        "Anywhere you look, you'll see evidence of climate change. (B2)",
        "She found the book where she had left it. (A2)",
      ],
      connectors: ["where", "wherever", "anywhere", "everywhere"],
      notes: [
        "Reduction is rare but possible with participle forms",
        "Often used in relative clause constructions",
        "Can express both specific and general locations",
      ],
      formalityLevel: "neutral",
      frequency: "frequent",
      register: "conversational",
      detailedExplanation:
        "Place clauses specify spatial relationships and locations. They can be definite (where) or indefinite (wherever, anywhere). These clauses often overlap with relative clauses when 'where' introduces a noun.",
      contextualUsage: [
        "Travel writing and directions",
        "Descriptive writing about locations",
        "General statements about universal conditions",
        "Geographic and spatial descriptions",
      ],
    },
    {
      name: "Reason Clause (Mệnh đề chỉ nguyên nhân)",
      definition:
        "Adverbial clauses that explain the cause or reason for the main clause action.",
      level: "A1-C1",
      examples: [
        "Because it was raining, we stayed inside. (A1)",
        "Since you're here, help me carry this. (A2)",
        "Seeing that the weather was improving, we decided to leave. (B2)",
        "Given that resources are limited, we must prioritize carefully. (C1)",
        "Inasmuch as the evidence supports this theory, we should accept it. (C1)",
      ],
      connectors: [
        "because",
        "since",
        "as",
        "seeing that",
        "now that",
        "due to the fact that",
        "given that",
        "considering that",
        "inasmuch as",
        "insofar as",
        "on account of the fact that",
      ],
      notes: [
        "Can be positioned at the beginning or end of sentences",
        "'Because of', 'due to' are followed by noun phrases, not clauses",
        "Different connectors carry different levels of formality",
        "Some connectors imply shared knowledge or obviousness",
      ],
      formalityLevel: "neutral",
      frequency: "common",
      register: "conversational",
      detailedExplanation:
        "Reason clauses establish causal relationships between events or states. The choice of connector can indicate the strength of the causal relationship and the speaker's attitude toward the information.",
      contextualUsage: [
        "Explanatory writing and essays",
        "Scientific and academic discourse",
        "Justifying decisions and actions",
        "Cause-and-effect analysis",
      ],
    },
    {
      name: "Purpose Clause (Mệnh đề chỉ mục đích)",
      definition:
        "Adverbial clauses that express the intention or goal behind an action.",
      level: "A2-C1",
      examples: [
        "She studies hard so that she can pass the exam. (A2)",
        "He left early in order that he might catch the train. (B2)",
        "They whispered lest they should wake the baby. (C1)",
        "I'm calling to ensure that you received the message. (B2)",
      ],
      connectors: [
        "so that",
        "in order that",
        "so",
        "lest",
        "for fear that",
        "in case",
      ],
      notes: [
        "Modal verbs (can, could, may, might, will, would) often appear in purpose clauses",
        "'To + infinitive' can often replace purpose clauses when subjects are the same",
        "'Lest' is formal and somewhat archaic",
        "Negative purpose uses 'in case' or 'for fear that'",
      ],
      formalityLevel: "formal",
      frequency: "frequent",
      register: "academic",
      detailedExplanation:
        "Purpose clauses indicate the intended outcome or goal of an action. They often contain modal verbs to express possibility or potential. The formality level varies significantly among different connectors.",
      contextualUsage: [
        "Academic and formal writing",
        "Instructions and procedures",
        "Planning and strategy documents",
        "Legal and official communications",
      ],
    },
    {
      name: "Result Clause (Mệnh đề chỉ kết quả)",
      definition:
        "Adverbial clauses that show the consequence or outcome of the main clause action.",
      level: "A2-B2",
      examples: [
        "It rained so hard that the streets were flooded. (A2)",
        "He was so tired that he couldn't walk. (A2)",
        "Such was his anger that he couldn't speak. (C1)",
        "The noise was so loud that we couldn't hear ourselves think. (B1)",
      ],
      connectors: [
        "so...that",
        "such...that",
        "so much that",
        "to such an extent that",
      ],
      notes: [
        "'So + adjective/adverb + that'",
        "'Such + (a/an) + adjective + noun + that'",
        "Inversion possible with 'such': 'Such was the noise that...'",
        "Result clauses often use past tense or modal verbs",
      ],
      formalityLevel: "neutral",
      frequency: "common",
      register: "conversational",
      detailedExplanation:
        "Result clauses express consequences that follow logically from the intensity or degree described in the main clause. The construction emphasizes the extreme nature of the cause.",
      contextualUsage: [
        "Descriptive writing emphasizing extremes",
        "Narrative writing showing consequences",
        "Persuasive writing for dramatic effect",
        "Scientific writing describing effects",
      ],
    },
    {
      name: "Condition Clause (Mệnh đề điều kiện)",
      definition:
        "Adverbial clauses that express a condition that must be met for the main clause to be true.",
      level: "A2-C2",
      examples: [
        "If you study hard, you will pass. (A2)",
        "Unless it rains, we'll go hiking. (B1)",
        "Provided that you arrive on time, we can start immediately. (B2)",
        "Had I known earlier, I would have helped. (C1)",
        "Should you need assistance, please contact us. (C1)",
      ],
      connectors: [
        "if",
        "unless",
        "provided that",
        "providing that",
        "as long as",
        "even if",
        "in case",
        "on condition that",
        "supposing that",
        "assuming that",
        "granted that",
      ],
      notes: [
        "Inversion possible in formal conditionals: 'Had/Were/Should + subject'",
        "Can be reduced with participles when subjects are the same",
        "Different types express varying degrees of probability",
        "Mixed conditionals combine different time references",
      ],
      formalityLevel: "neutral",
      frequency: "common",
      register: "conversational",
      detailedExplanation:
        "Conditional clauses establish hypothetical scenarios and their potential outcomes. They range from likely future events to impossible past situations, with varying degrees of formality and probability.",
      contextualUsage: [
        "Hypothetical discussions and planning",
        "Legal and contractual language",
        "Scientific hypotheses and predictions",
        "Advice and recommendation contexts",
      ],
    },
    {
      name: "Contrast Clause (Mệnh đề tương phản)",
      definition:
        "Adverbial clauses that express opposition or unexpected relationships between ideas.",
      level: "A2-C1",
      examples: [
        "Although he was tired, he kept working. (A2)",
        "Even though it was raining, we went out. (B1)",
        "While I understand your point, I disagree. (B1)",
        "Whereas some prefer coffee, others choose tea. (B2)",
        "Much as I admire his work, I question his methods. (C1)",
      ],
      connectors: [
        "although",
        "though",
        "even though",
        "whereas",
        "while",
        "whilst",
        "in spite of the fact that",
        "despite the fact that",
        "much as",
        "even as",
      ],
      notes: [
        "'Though' can appear at the end of sentences in informal speech",
        "Can be reduced to participial phrases",
        "Some connectors emphasize comparison rather than simple contrast",
        "Inversion possible with 'though': 'Tired though he was'",
      ],
      formalityLevel: "neutral",
      frequency: "common",
      register: "conversational",
      detailedExplanation:
        "Contrast clauses highlight unexpected relationships or opposition between ideas. They can express simple opposition, concession, or comparative contrast depending on the connector used.",
      contextualUsage: [
        "Argumentative and persuasive writing",
        "Comparative analysis and evaluation",
        "Balanced discussions of complex issues",
        "Academic discourse and debate",
      ],
    },
    {
      name: "Concession Clause (Mệnh đề nhượng bộ)",
      definition:
        "Adverbial clauses that acknowledge an opposing point while maintaining the main argument.",
      level: "B2-C2",
      examples: [
        "No matter how hard he tries, he can't win. (B2)",
        "Whatever you say, I won't change my mind. (B1)",
        "However intelligent she may be, she lacks experience. (C1)",
        "Be that as it may, we must proceed. (C2)",
      ],
      connectors: [
        "no matter how/what/when/where",
        "however",
        "whenever",
        "whatever",
        "whoever",
        "whichever",
        "however much",
        "be that as it may",
      ],
      notes: [
        "Often emphasize the speaker's determination or certainty",
        "Some forms are quite formal or literary",
        "Can express universal conditions or extreme scenarios",
        "May use subjunctive forms in very formal contexts",
      ],
      formalityLevel: "formal",
      frequency: "frequent",
      register: "academic",
      detailedExplanation:
        "Concession clauses acknowledge potential counterarguments while maintaining the validity of the main statement. They often express the speaker's resolve despite obstacles or opposition.",
      contextualUsage: [
        "Formal argumentation and debate",
        "Academic writing and research",
        "Legal reasoning and judgment",
        "Diplomatic and political discourse",
      ],
    },
    {
      name: "Manner Clause (Mệnh đề chỉ cách thức)",
      definition:
        "Adverbial clauses that describe how an action is performed or the way something appears.",
      level: "B1-C1",
      examples: [
        "He talks as if he knew everything. (B1)",
        "She danced as though she were a professional. (B1)",
        "The way you explained it made everything clear. (B2)",
        "He behaved exactly as we had expected. (B2)",
      ],
      connectors: ["as if", "as though", "just as", "the way", "like", "as"],
      notes: [
        "'As if/as though' often use subjunctive mood for unreal situations",
        "'Like' is informal and sometimes considered incorrect by prescriptivists",
        "Can express both real and hypothetical manner",
        "Often used with verbs of appearance and behavior",
      ],
      formalityLevel: "neutral",
      frequency: "frequent",
      register: "conversational",
      detailedExplanation:
        "Manner clauses describe the method, style, or appearance of actions. They can indicate both real ways of doing things and hypothetical or comparative manners.",
      contextualUsage: [
        "Descriptive writing and characterization",
        "Comparisons and analogies",
        "Instructions and demonstrations",
        "Creative writing and storytelling",
      ],
    },
    {
      name: "Comparison Clause (Mệnh đề so sánh)",
      definition:
        "Adverbial clauses that establish comparative relationships between elements.",
      level: "A2-B2",
      examples: [
        "She runs faster than I do. (A2)",
        "He is as tall as his brother is. (A2)",
        "The more you practice, the better you become. (B2)",
        "She works harder than anyone else in the office. (B1)",
      ],
      connectors: [
        "as...as",
        "than",
        "the more...the more",
        "the less...the less",
      ],
      notes: [
        "Comparative and superlative forms often trigger these clauses",
        "Ellipsis common in comparison clauses",
        "Double comparatives create proportional relationships",
        "Can be reduced when elements are repeated",
      ],
      formalityLevel: "neutral",
      frequency: "common",
      register: "conversational",
      detailedExplanation:
        "Comparison clauses establish relationships of equality, inequality, or proportionality between different elements. They are essential for expressing relative qualities and quantities.",
      contextualUsage: [
        "Evaluative and analytical writing",
        "Statistical and quantitative descriptions",
        "Performance assessments and reviews",
        "Scientific comparisons and measurements",
      ],
    },
  ],

  reductions: {
    description:
      "Reduction of adverbial clauses involves removing the subject and auxiliary verb when the subjects of both clauses are identical, creating more concise and sophisticated sentences.",
    prerequisiteLevel: "B1",
    forms: [
      {
        form: "Present Participle (-ing)",
        structure: "[V-ing] + [main clause] / [Main clause] + [V-ing]",
        example:
          "Walking along the street, I saw an accident. / I saw an accident walking along the street.",
        usage: "For simultaneous or immediately sequential actions",
        level: "B1",
        restrictions: [
          "Subjects must be identical",
          "Active voice in the reduced clause",
          "Clear temporal relationship",
        ],
        commonErrors: [
          "Dangling participles with different subjects",
          "Ambiguous reference in participial phrases",
        ],
      },
      {
        form: "Past Participle (-ed)",
        structure: "[V3] + [main clause] / [Main clause] + [V3]",
        example:
          "Left alone, he started crying. / Surprised by the news, she couldn't speak.",
        usage: "For passive actions or completed states",
        level: "B1",
        restrictions: [
          "Passive meaning in the reduced clause",
          "Clear causal or temporal relationship",
          "Subjects must be identical",
        ],
        commonErrors: [
          "Using past participle for active meanings",
          "Unclear passive relationships",
        ],
      },
      {
        form: "Perfect Participle",
        structure: "Having + V3, [main clause]",
        example:
          "Having finished dinner, they went to bed. / Having been told the news, she started crying.",
        usage: "For actions completed before the main clause action",
        level: "B2",
        restrictions: [
          "Clear sequence of events",
          "Subjects must be identical",
          "Significant time gap between actions",
        ],
        commonErrors: [
          "Using when simultaneous action is intended",
          "Overusing in inappropriate contexts",
        ],
      },
      {
        form: "Being + adjective/noun",
        structure: "Being + [adjective/noun], [main clause]",
        example:
          "Being tired, he went to bed early. / Being a doctor, she knew what to do.",
        level: "B2",
        restrictions: [
          "Causal relationship between clauses",
          "Subjects must be identical",
        ],
        commonErrors: [
          "Using when no causal relationship exists",
          "Overuse in formal writing",
        ],
      },
      {
        form: "Without + V-ing",
        structure: "Without + [V-ing], [main clause]",
        example:
          "Without saying a word, he left the room. / Without looking back, she walked away.",
        level: "B2",
        restrictions: ["Negative implication", "Subjects must be identical"],
        commonErrors: [
          "Using for positive actions",
          "Unclear negative relationship",
        ],
      },
    ],
    advancedReductions: [
      {
        type: "Elliptical clauses",
        structure: "Conjunction + [reduced clause]",
        examples: [
          "When in Rome, do as the Romans do.",
          "If possible, please arrive early.",
          "Though tired, he continued working.",
        ],
        conditions: [
          "Fixed expressions or idioms",
          "Clear contextual meaning",
          "Formal or literary register",
        ],
        level: "C1",
      },
      {
        type: "Absolute constructions",
        structure: "[Noun + participle], [main clause]",
        examples: [
          "Weather permitting, we'll have the picnic outside.",
          "All things considered, the project was successful.",
          "The meeting over, everyone returned to work.",
        ],
        conditions: [
          "Different subjects allowed",
          "Formal register",
          "Clear logical relationship",
        ],
        level: "C1",
      },
    ],
  },

  inversion: {
    description:
      "Inversion in adverbial clauses involves changing the normal subject-verb order for emphasis, formality, or stylistic effect.",
    level: "B2-C2",
    types: [
      {
        type: "Conditional inversion",
        condition: "Formal conditionals without 'if'",
        structure: "Had/Were/Should + subject + verb",
        examples: [
          {
            original: "If I had known, I would have helped.",
            inverted: "Had I known, I would have helped.",
            level: "B2",
            register: "formal",
          },
          {
            original: "If you should need help, call me.",
            inverted: "Should you need help, call me.",
            level: "B2",
            register: "formal",
          },
          {
            original: "If he were here, he would agree.",
            inverted: "Were he here, he would agree.",
            level: "B2",
            register: "formal",
          },
        ],
      },
      {
        type: "Concessive inversion",
        condition: "Emphasis in contrast clauses",
        structure: "Adjective/Adverb + though + subject + verb",
        examples: [
          {
            original: "Even though she was tired, she worked late.",
            inverted: "Tired though she was, she worked late.",
            level: "C1",
            register: "literary",
          },
          {
            original: "Although he tried hard, he failed.",
            inverted: "Hard though he tried, he failed.",
            level: "C1",
            register: "literary",
          },
        ],
      },
      {
        type: "Negative inversion",
        condition: "Negative adverbials at sentence beginning",
        structure: "Negative adverbial + auxiliary + subject + verb",
        examples: [
          {
            original: "He had scarcely arrived when the phone rang.",
            inverted: "Scarcely had he arrived when the phone rang.",
            level: "C1",
            register: "formal",
          },
          {
            original: "She has never seen such beauty.",
            inverted: "Never has she seen such beauty.",
            level: "C1",
            register: "formal",
          },
        ],
      },
    ],
  },

  punctuationRules: {
    commaUsage: [
      {
        rule: "Use comma after introductory adverbial clauses",
        examples: [
          "When the meeting ends, we'll go for lunch.",
          "Because it was raining, we stayed inside.",
        ],
        exceptions: [
          "Short clauses may omit comma in informal writing",
          "Some style guides vary on this rule",
        ],
      },
      {
        rule: "Comma usually optional when adverbial clause follows main clause",
        examples: [
          "We stayed inside because it was raining.",
          "Call me when you arrive.",
        ],
        exceptions: [
          "Use comma for emphasis or clarity",
          "Always use comma with 'although', 'though', 'whereas'",
        ],
      },
    ],
    advancedPunctuation: [
      {
        rule: "Semicolon can replace comma in complex sentences",
        examples: [
          "Although the weather was terrible; the event continued as planned.",
        ],
        level: "C1",
      },
      {
        rule: "Dash can emphasize adverbial clause relationship",
        examples: ["The project failed—because funding was insufficient."],
        level: "C1",
      },
    ],
  },

  stylisticVariations: {
    formal: {
      connectors: [
        "inasmuch as",
        "insofar as",
        "notwithstanding that",
        "granted that",
        "provided that",
        "on condition that",
        "in order that",
      ],
      examples: [
        "Inasmuch as the evidence supports this conclusion, we should accept it.",
        "Provided that all conditions are met, the contract will be signed.",
        "In order that future generations might benefit, we must act now.",
      ],
      contexts: [
        "Academic writing",
        "Legal documents",
        "Official communications",
        "Diplomatic correspondence",
        "Scientific papers",
      ],
    },
    informal: {
      connectors: ["'cause", "like", "seeing as", "what with", "the way"],
      examples: [
        "I can't come 'cause I'm busy.",
        "The way you talk, anyone would think you're an expert.",
        "What with all the traffic, I'll be late.",
      ],
      contexts: [
        "Casual conversation",
        "Text messages",
        "Informal emails",
        "Social media",
        "Dialogue in creative writing",
      ],
    },
    academic: {
      connectors: [
        "given that",
        "considering that",
        "in light of the fact that",
        "to the extent that",
        "insofar as",
        "on the grounds that",
      ],
      examples: [
        "Given that previous studies have shown mixed results, further research is needed.",
        "Insofar as the data permits conclusions, we can state that...",
        "On the grounds that methodology was flawed, these results should be questioned.",
      ],
      contexts: [
        "Research papers",
        "Dissertations",
        "Academic conferences",
        "Scholarly articles",
        "Thesis statements",
      ],
    },
  },

  commonMistakes: [
    {
      error: "Using future tense in time clauses",
      correction: "Use present tense to express future time in time clauses",
      level: "A1-A2",
      explanation:
        "When I will arrive → When I arrive. English uses present tense in time clauses even when referring to future events.",
    },
    {
      error: "Confusing 'although' (clause) with 'despite' (phrase)",
      correction: "Although + clause vs. Despite + noun phrase",
      level: "B1",
      explanation:
        "Although it rained (clause) vs. Despite the rain (noun phrase). 'Although' requires a complete clause with subject and verb.",
    },
    {
      error: "Creating dangling participles",
      correction: "Ensure participial phrases clearly refer to the subject",
      level: "B2",
      explanation:
        "Walking down the street, the building collapsed. → While I was walking down the street, the building collapsed.",
    },
    {
      error: "Misusing conditional inversions",
      correction: "Use correct forms for conditional inversion",
      level: "C1",
      explanation:
        "If I would have known → Had I known. Don't use 'would' in the if-clause of conditionals.",
    },
    {
      error: "Overusing complex structures inappropriately",
      correction: "Match complexity to context and audience",
      level: "C1-C2",
      explanation:
        "Using highly formal structures in casual conversation can sound pretentious or unclear.",
    },
  ],

  usageTips: [
    {
      tip: "Start with the main message, then add adverbial clauses",
      level: "A1-A2",
      examples: [
        "I eat breakfast. → When I wake up, I eat breakfast.",
        "We stayed home. → Because it was raining, we stayed home.",
      ],
    },
    {
      tip: "Vary the position of adverbial clauses for emphasis",
      level: "B1-B2",
      examples: [
        "Although he was tired, he continued working. (emphasis on contrast)",
        "He continued working although he was tired. (emphasis on action)",
      ],
    },
    {
      tip: "Use reduction to create more sophisticated writing",
      level: "B2-C1",
      examples: [
        "After he finished his homework, he went out. → Having finished his homework, he went out.",
        "Because she was tired, she went to bed early. → Being tired, she went to bed early.",
      ],
    },
    {
      tip: "Match formality level to context",
      level: "C1-C2",
      examples: [
        "Informal: 'Cause I was busy, I couldn't come.",
        "Formal: Inasmuch as I was occupied with other commitments, I was unable to attend.",
      ],
    },
  ],

  advancedExamples: [
    {
      sentence:
        "No matter what obstacles arise, we shall persevere in our mission.",
      level: "C1",
      analysis:
        "Concessive clause with formal register using 'shall' for determination",
      clauseType: "Concession",
    },
    {
      sentence:
        "Hard though the journey may be, the destination justifies every step.",
      level: "C1",
      analysis:
        "Inverted concessive clause with literary style and metaphorical language",
      clauseType: "Concession with inversion",
    },
    {
      sentence:
        "Were circumstances different, I might have chosen another path entirely.",
      level: "C1",
      analysis:
        "Conditional inversion expressing hypothetical past with present relevance",
      clauseType: "Conditional",
    },
    {
      sentence:
        "Having been apprised of the situation, the committee voted unanimously for immediate action.",
      level: "C2",
      analysis:
        "Perfect passive participle showing completed information transfer before decision",
      clauseType: "Time (reduced)",
    },
    {
      sentence:
        "Be that as it may, the fundamental principles remain unchanged.",
      level: "C2",
      analysis:
        "Archaic concessive formula used in formal discourse for acknowledging objections",
      clauseType: "Concession",
    },
  ],

  crossReferences: {
    relatedTopics: [
      "Relative clauses",
      "Conditional sentences",
      "Participle constructions",
      "Reported speech",
      "Passive voice",
      "Modal verbs",
      "Subjunctive mood",
    ],
    prerequisites: [
      "Basic sentence structure",
      "Present and past tenses",
      "Future forms",
      "Question formation",
      "Negation",
      "Modal auxiliaries",
    ],
    nextSteps: [
      "Complex sentence combining",
      "Academic writing styles",
      "Literary analysis",
      "Advanced punctuation",
      "Discourse markers",
      "Cohesion and coherence",
    ],
  },

  culturalNotes: [
    {
      note: "Conditional politeness varies across cultures",
      examples: [
        "If you could help me... (indirect request)",
        "Should you require assistance... (formal offer)",
      ],
      context:
        "English uses conditionals for politeness more than many languages",
    },
    {
      note: "Time perception affects clause usage",
      examples: [
        "When the time is right... (flexible timing)",
        "As soon as possible... (urgency)",
      ],
      context:
        "Different cultures have varying relationships with time and urgency",
    },
    {
      note: "Formality levels in academic discourse",
      examples: [
        "Given that research indicates... (academic)",
        "Since studies show... (general)",
      ],
      context:
        "Academic writing conventions vary by field and cultural background",
    },
  ],

  assessmentCriteria: [
    {
      level: "A2",
      criteria: [
        "Can use basic time and reason clauses",
        "Can form simple conditional sentences",
        "Uses present tense correctly in time clauses",
      ],
      canDoStatements: [
        "I can say when things happen using 'when', 'before', 'after'",
        "I can explain simple reasons using 'because'",
        "I can make simple predictions using 'if'",
      ],
    },
    {
      level: "B1",
      criteria: [
        "Can use purpose and result clauses appropriately",
        "Can express contrast using 'although', 'though'",
        "Can combine multiple clause types in complex sentences",
      ],
      canDoStatements: [
        "I can explain purposes and results clearly",
        "I can express contrasting ideas effectively",
        "I can write complex sentences with multiple clauses",
      ],
    },
    {
      level: "B2",
      criteria: [
        "Can reduce adverbial clauses appropriately",
        "Can use conditional inversion in formal contexts",
        "Can vary clause position for emphasis",
      ],
      canDoStatements: [
        "I can make my writing more concise using reductions",
        "I can use formal conditional structures",
        "I can emphasize different parts of my message",
      ],
    },
    {
      level: "C1",
      criteria: [
        "Can use sophisticated concessive clauses",
        "Can employ inversion for stylistic effect",
        "Can match register to context appropriately",
      ],
      canDoStatements: [
        "I can acknowledge opposing views while maintaining my argument",
        "I can use advanced structures for emphasis",
        "I can adjust my language style to suit different contexts",
      ],
    },
    {
      level: "C2",
      criteria: [
        "Can use archaic and literary forms appropriately",
        "Can create nuanced meaning through clause choice",
        "Can edit for optimal stylistic effect",
      ],
      canDoStatements: [
        "I can use sophisticated language for special effects",
        "I can create subtle shades of meaning",
        "I can refine my writing for maximum impact",
      ],
    },
  ],

  references: [
    {
      title: "A Comprehensive Grammar of the English Language",
      author: "Quirk, Randolph, et al.",
      type: "grammar",
      description:
        "The most comprehensive reference grammar of English, with detailed analysis of adverbial clauses and their functions.",
      relevance:
        "Authoritative source for complex grammatical structures and advanced usage patterns.",
    },
    {
      title: "Advanced Grammar in Use",
      author: "Martin Hewings",
      type: "book",
      description:
        "Cambridge advanced grammar course with extensive coverage of complex adverbial structures.",
      relevance:
        "Practical exercises and explanations for B2-C2 level adverbial clause usage.",
    },
    {
      title: "The Cambridge Grammar of the English Language",
      author: "Huddleston, Rodney & Geoffrey K. Pullum",
      type: "grammar",
      description:
        "Modern descriptive grammar with contemporary analysis of subordinate clauses.",
      relevance:
        "Up-to-date linguistic analysis of how adverbial clauses function in modern English.",
    },
    {
      title: "Oxford English Grammar Course",
      author: "Michael Swan & Catherine Walter",
      type: "book",
      description:
        "Multi-level grammar course with progressive introduction of adverbial clauses.",
      relevance:
        "Level-appropriate progression from basic to advanced adverbial clause usage.",
    },
    {
      title: "Longman Grammar of Spoken and Written English",
      author: "Biber, Douglas, et al.",
      type: "corpus",
      description:
        "Corpus-based analysis of how adverbial clauses are actually used in different registers.",
      relevance:
        "Evidence-based information about frequency and distribution of different clause types.",
    },
    {
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      type: "book",
      description:
        "Popular intermediate grammar reference with clear explanations of adverbial clauses.",
      relevance:
        "Accessible explanations and practice for B1-B2 level students.",
    },
    {
      title: "The Grammar Book: An ESL/EFL Teacher's Course",
      author: "Celce-Murcia, Marianne & Diane Larsen-Freeman",
      type: "book",
      description:
        "Pedagogical grammar focusing on teaching complex structures to language learners.",
      relevance:
        "Teaching methodologies and learning progressions for adverbial clauses.",
    },
    {
      title: "Cambridge English Grammar Today",
      type: "website",
      url: "https://dictionary.cambridge.org/grammar/",
      description:
        "Online grammar reference with contemporary usage examples and explanations.",
      relevance:
        "Current usage patterns and modern examples of adverbial clause constructions.",
    },
    {
      title: "Oxford Learner's Dictionaries Grammar",
      type: "website",
      url: "https://www.oxfordlearnersdictionaries.com/grammar/",
      description:
        "Comprehensive online grammar resource with level-appropriate explanations.",
      relevance:
        "Learner-focused explanations with audio examples and interactive exercises.",
    },
    {
      title: "Practical English Usage",
      author: "Michael Swan",
      type: "book",
      description:
        "Problem-solving approach to English grammar usage, including complex sentence structures.",
      relevance:
        "Addresses common errors and provides clear solutions for adverbial clause problems.",
    },
  ],
};

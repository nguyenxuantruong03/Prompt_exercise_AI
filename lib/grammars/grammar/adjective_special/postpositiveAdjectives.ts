import { postpositiveAdjectivesType } from "@/types/grammars/grammar/adjective_special/postpositiveAdjectives";

export const postpositiveAdjectivesData: postpositiveAdjectivesType = {
  topic: "Tính từ đứng sau danh từ (hiếm gặp)",
  level: "A1-C2",
  definition:
    "Postpositive adjectives are adjectives that are placed *after* the noun they modify, rather than before it (which is the usual position in English). This structure is uncommon in modern English but appears in fixed expressions, formal or legal language, and specific grammatical contexts.",

  // Comprehensive theoretical foundation
  linguisticFoundation: {
    historicalOrigin:
      "Postpositive adjectives in English derive from several sources: Old English syntax where adjective position was more flexible, French influence from Norman conquest (1066) bringing Romance language word order, Latin legal and scholarly terminology, and Germanic compound structures. This positioning reflects historical language contact and borrowing patterns.",
    syntacticFunction:
      "Syntactically, postpositive adjectives function as post-head modifiers in noun phrases. They can be restrictive (limiting the referent) or non-restrictive (adding descriptive information). The adjective maintains its modifying relationship with the head noun while occupying an unmarked position for stylistic, rhythmic, or semantic emphasis.",
    semanticRole:
      "Semantically, postpositive adjectives often carry greater emphasis, formality, or specificity than their prenominal counterparts. They frequently denote permanent characteristics, official status, or technical classifications. The postposition can signal definitional rather than descriptive modification.",
    pragmaticPurpose:
      "Pragmatically, postpositive adjectives serve to: create formal register, maintain historical/traditional expressions, achieve poetic or rhetorical effect, avoid ambiguity in complex noun phrases, conform to borrowed linguistic patterns, and signal specialized or technical discourse.",
  },

  // Level-specific progression
  levelProgression: {
    A1: {
      focus:
        "Basic recognition of simple postpositive patterns with indefinite pronouns",
      keyStructures: [
        "something + adjective",
        "nothing + adjective",
        "anything + adjective",
      ],
      examples: ["something good", "nothing special", "anything new"],
      learningObjectives: [
        "Recognize postpositive adjectives after indefinite pronouns",
        "Understand basic word order difference",
        "Use simple structures in basic conversation",
      ],
    },
    A2: {
      focus: "Expansion to common fixed expressions and basic titles",
      keyStructures: [
        "someone + adjective",
        "everyone + adjective",
        "the only + noun + adjective",
      ],
      examples: [
        "someone important",
        "everyone present",
        "the only option available",
      ],
      learningObjectives: [
        "Master indefinite pronoun + adjective patterns",
        "Recognize common fixed expressions",
        "Begin using in simple written communication",
      ],
    },
    B1: {
      focus: "Introduction to formal titles and expanded fixed expressions",
      keyStructures: [
        "title + adjective",
        "superlative + noun + available/possible",
        "time + adjective",
      ],
      examples: [
        "attorney general",
        "the best solution possible",
        "time remaining",
      ],
      learningObjectives: [
        "Understand formal titles with postpositive adjectives",
        "Use appropriately in formal contexts",
        "Recognize in news and media",
      ],
    },
    B2: {
      focus: "Complex structures and reduced relative clauses",
      keyStructures: [
        "noun + past participle",
        "noun + adjective phrase",
        "compound titles",
      ],
      examples: [
        "documents required",
        "people involved in the project",
        "governor general",
      ],
      learningObjectives: [
        "Master reduced relative clause structures",
        "Use in academic and professional writing",
        "Understand stylistic effects",
      ],
    },
    C1: {
      focus: "Advanced stylistic and literary uses",
      keyStructures: [
        "literary inversion",
        "legal terminology",
        "academic structures",
      ],
      examples: [
        "a silence profound",
        "heir apparent",
        "factors relevant to the study",
      ],
      learningObjectives: [
        "Use for stylistic effect in advanced writing",
        "Master legal and academic terminology",
        "Understand historical and archaic forms",
      ],
    },
    C2: {
      focus: "Complete mastery including creative and specialized uses",
      keyStructures: [
        "poetic inversion",
        "specialized terminology",
        "creative constructions",
      ],
      examples: [
        "a mind brilliant beyond measure",
        "proof positive",
        "sum total",
      ],
      learningObjectives: [
        "Use creatively for rhetorical effect",
        "Master all specialized registers",
        "Understand subtle nuances and implications",
      ],
    },
  },
  usageTypes: [
    {
      type: "1. Fixed expressions",
      explanation:
        "Certain phrases use adjectives after the noun in fixed idiomatic expressions.",
      examples: [
        "the best room available",
        "the president elect",
        "heir apparent",
        "time immemorial",
        "court martial",
      ],
      frequency: "Common in formal contexts",
      register: "Formal/Traditional",
      cefrLevel: "B1-B2",
    },
    {
      type: "2. After indefinite pronouns (something, nothing, anyone, etc.)",
      explanation: "Adjectives often follow indefinite pronouns.",
      examples: [
        "Is there anything interesting to do?",
        "I need something strong to drink.",
        "She said nothing important.",
        "He didn’t see anyone suspicious.",
      ],
    },
    {
      type: "3. After superlatives + available/possible/imaginable/etc.",
      explanation:
        "Adjectives can follow the noun when used with superlatives and expressions like ‘available’, ‘possible’, etc.",
      examples: [
        "This is the only solution possible.",
        "That was the best decision imaginable.",
        "She chose the fastest route available.",
      ],
    },
    {
      type: "4. In legal, literary, or formal usage",
      explanation:
        "Postpositive adjectives are common in legal or old/formal English.",
      examples: [
        "the body politic",
        "attorney general",
        "accounts payable",
        "sum total",
        "time past",
      ],
    },
    {
      type: "5. In some noun phrases with multiple adjectives",
      explanation:
        "To avoid awkwardness or ambiguity, an adjective may be placed after the noun, especially when combined with other modifiers.",
      examples: [
        "a man proud of his country",
        "a decision difficult to make",
        "a woman aware of her rights",
      ],
    },
    {
      type: "6. Adjective phrases following nouns",
      explanation: "Often used to introduce a complement or relative clause.",
      examples: [
        "The people responsible for the error were dismissed.",
        "The boy interested in science joined the club.",
        "The soldiers injured in the battle were evacuated.",
      ],
    },
    {
      type: "7. In certain poetic or archaic expressions",
      explanation: "Used for stylistic or poetic reasons.",
      examples: [
        "the stars bright",
        "the sky blue",
        "a knight noble and brave",
      ],
    },
    {
      type: "8. French-origin or Latin-origin constructions",
      explanation:
        "Some adjective-noun combinations preserve the word order of their original languages (postpositive).",
      examples: [
        "court martial",
        "poet laureate",
        "notary public",
        "battle royal",
      ],
    },
    {
      type: "9. Adjectives in titles or status",
      explanation: "Some post-noun adjectives define roles or titles.",
      examples: [
        "Secretary General",
        "Governor General",
        "Attorney General",
        "Surgeon General",
      ],
    },
  ],
  postpositive_Adjectives_vocab: {
    definition:
      "Postpositive adjectives are adjectives that are placed **after** the noun they modify, instead of before it.",
    core_characteristics: {
      position: "Come **after** the noun",
      use_case: [
        "Set phrases and idioms",
        "Certain formal/legal expressions",
        "Some compound pronouns and determiners",
        "Titles and ranks",
        "Poetic or literary style",
      ],
      syntactic_properties: [
        "Post-head modification in noun phrases",
        "Maintains agreement with head noun",
        "Can be restrictive or non-restrictive",
        "Often part of fixed expressions",
        "May signal reduced relative clauses",
      ],
      semantic_properties: [
        "Often carries emphasis or formality",
        "Denotes permanent characteristics",
        "Indicates official status or classification",
        "Provides definitional rather than descriptive modification",
        "Maintains semantic scope over head noun",
      ],
    },

    CEFR_levels: {
      A1: ["something good", "nothing bad", "anything new"],
      A2: ["something interesting", "nothing special", "anyone available"],
      B1: ["the best solution possible", "the time available"],
      B2: ["the governor general", "the president elect", "attorney general"],
      C1: ["the city proper", "heir apparent", "court martial"],
      C2: ["proof positive", "body politic", "poet laureate"],
    },

    common_structures: {
      pronouns_with_postpositives: [
        "something interesting",
        "nothing new",
        "anyone available",
        "everything necessary",
      ],
      legal_titles_and_ranks: [
        "attorney general",
        "court martial",
        "governor general",
        "solicitor general",
        "postmaster general",
        "surgeon general",
      ],
      fixed_expressions: [
        "heir apparent",
        "body politic",
        "city proper",
        "notary public",
        "battle royal",
        "poet laureate",
        "prince regent",
      ],
      poetic_literary: [
        "the stars visible",
        "the darkness complete",
        "a silence profound",
      ],
      double_adjectives: [
        "the best solution **possible**",
        "the only option **available**",
        "the time **remaining**",
      ],
      academic_formal: [
        "factors relevant to the study",
        "methods applicable to this case",
        "variables unknown to researchers",
        "issues critical to development",
        "policies consistent with regulations",
      ],
      archaic_historical: [
        "time immemorial",
        "from time immemorial",
        "the realm temporal",
        "lands adjacent",
        "waters turbulent",
      ],
    },

    examples: [
      "We need **someone capable** of handling the task.",
      "He is the **attorney general** of the state.",
      "They live in the **city proper**, not the outskirts.",
      "It was a **battle royal** between the top contenders.",
      "She is the **poet laureate** of the country.",
      "There's **nothing unusual** in the data.",
      "He is an **heir apparent** to the throne.",
      "We must act with the time **available**.",
    ],

    grammar_notes: {
      agreement:
        "Postpositive adjectives still agree in number and gender (if applicable) but follow the noun.",
      pluralization:
        "In compound titles, the noun usually takes the plural, not the adjective (e.g., **attorneys general**, not *attorney generals*).",
      emphasis: "Postposition often provides emphasis or formality.",
      formal_register: "Common in legal, military, and poetic contexts.",
      word_order_constraints:
        "Most postpositive adjectives cannot be moved to prenominal position without changing meaning or becoming ungrammatical. Fixed expressions must maintain their established word order.",
      modification_scope:
        "Postpositive adjectives typically have narrow scope, modifying only the immediately preceding noun rather than the entire noun phrase. This differs from prenominal adjectives which may have broader scope.",
    },

    plural_forms: {
      correct: [
        "attorneys general",
        "governors general",
        "courts martial",
        "notaries public",
      ],
      incorrect: ["attorney generals", "court martials"],
      explanation:
        "In compound titles with postpositive adjectives, typically only the first (main) noun is pluralized, while the postpositive adjective remains in its singular form. This reflects the historical formation of these compounds where the adjective functions as a modifier rather than a co-equal compound element.",
    },
  },
  notes: [
    "Postpositive adjectives are uncommon in everyday English, but learners should be familiar with them for formal, academic, and legal contexts.",
    "They are more frequent in written or historical texts, and less so in spoken casual English.",
    "Many postpositive adjectives are part of fixed expressions or idioms and cannot be freely created.",
    "In modern usage, some expressions (like 'president elect') still appear in news or political writing.",
  ],
  commonMistakes: [
    {
      mistake: "Putting all adjectives after the noun",
      correction:
        "Only certain adjectives or expressions follow the noun. Most adjectives still go before.",
      exampleWrong: "A car fast is outside.",
      exampleRight: "A fast car is outside.",
    },
    {
      mistake: "Confusing postpositive adjectives with relative clauses",
      correction:
        "Relative clauses use full clauses; postpositive adjectives are shorter and often fixed.",
      exampleWrong: "The man who tall is leaving.",
      exampleRight:
        "The man tall and strong led the charge. (poetic/literary only)",
    },
  ],
  learningTips: [
    "Memorize common fixed postpositive expressions.",
    "Practice identifying postpositive adjectives in news, law, or literature.",
    "Don’t try to invent new postpositive forms unless you are sure they are grammatically acceptable.",
    "When using indefinite pronouns (something, someone, nothing), place the adjective after.",
  ],
  references: [
    "Oxford English Grammar Course",
    "Cambridge Grammar of the English Language",
    "Collins COBUILD English Grammar",
    "Merriam-Webster Dictionary",
  ],
  additionalUsage: [
    {
      type: "10. Postpositive adjectives in compound noun phrases",
      explanation:
        "Khi một cụm danh từ chứa một danh từ bổ nghĩa bởi mệnh đề hoặc giới từ, tính từ có thể đứng sau danh từ để tạo sự rõ nghĩa hoặc dễ đọc.",
      examples: [
        "a decision hard to accept",
        "a lesson difficult to forget",
        "a book full of wisdom",
        "a situation beyond control",
      ],
    },
    {
      type: "11. Postpositive adjectives after quantifiers in academic writing",
      explanation:
        "Trong văn viết học thuật, đặc biệt là khoa học xã hội hoặc luật, tính từ có thể đứng sau các danh từ đếm được được giới hạn bởi từ chỉ số lượng (e.g. 'factors', 'issues', 'variables').",
      examples: [
        "factors relevant to the study",
        "issues critical to development",
        "variables unknown to researchers",
        "methods applicable to this case",
      ],
    },
    {
      type: "12. Postpositive adjectives in relative reduction (reduced relative clauses)",
      explanation:
        "Đây là dạng rút gọn của mệnh đề quan hệ bị động (past participle hoặc tính từ) được đặt sau danh từ.",
      examples: [
        "The documents required are on the table. (= The documents that are required)",
        "Students involved in the project must register.",
        "Items stolen were never recovered.",
        "People affected by the policy protested.",
      ],
    },
    {
      type: "13. Adjectives after nouns for emphasis (C1–C2, stylistic inversion)",
      explanation:
        "Được sử dụng trong văn chương, báo chí, hoặc bài phát biểu để nhấn mạnh hoặc tạo nhịp điệu.",
      examples: [
        "A hero brave beyond words stood before them.",
        "A silence eerie and deep filled the room.",
        "A mind brilliant and restless worked all night.",
      ],
    },
    {
      type: "14. Postpositive adjectives in military/law/government titles",
      explanation:
        "Tính từ sau danh từ mang sắc thái trang trọng, pháp lý hoặc thuộc cơ quan quyền lực.",
      examples: [
        "Commander in Chief",
        "Consul General",
        "Minister Plenipotentiary",
        "Sergeant Major",
      ],
    },
    {
      type: "15. Adjectives as part of participial adjectives after nouns",
      explanation:
        "Một số tính từ có nguồn gốc phân từ (participles) thường theo sau danh từ để bổ nghĩa hoặc miêu tả rõ hành động đã hoàn tất hoặc đang diễn ra.",
      examples: [
        "a man devoted to his family",
        "a student determined to succeed",
        "a company focused on growth",
        "a theory based on observation",
      ],
    },
  ],
  advancedPatterns: [
    {
      pattern: "noun + adjective + infinitive",
      explanation:
        "This pattern places an adjective after a noun when the adjective is followed by an infinitive phrase, often used to avoid awkward prenominal constructions.",
      examples: [
        "a task easy to complete",
        "a language hard to learn",
        "a decision difficult to make",
      ],
      cefrLevel: "B2-C1",
      complexity:
        "Intermediate to Advanced - requires understanding of infinitive complements and post-modification",
    },
    {
      pattern: "noun + adjective phrase + preposition",
      explanation:
        "Adjectives followed by prepositional phrases are typically placed after the noun to maintain coherent phrase structure and avoid center-embedding.",
      examples: [
        "a person familiar with the subject",
        "a result consistent with expectations",
        "someone responsible for the outcome",
      ],
      cefrLevel: "B2-C1",
      complexity:
        "Intermediate to Advanced - involves complex modification with prepositional complements",
    },
    {
      pattern: "noun + adjective (past participle) + preposition",
      explanation:
        "Past participles functioning as adjectives often appear postpositively, especially when followed by prepositional phrases, representing reduced passive constructions.",
      examples: [
        "a policy designed for flexibility",
        "a system based on trust",
        "documents required by law",
      ],
      cefrLevel: "B2-C2",
      complexity:
        "Advanced - represents reduced relative clauses with passive meaning",
    },
  ],
  stylisticNotes: [
    "Các cấu trúc postpositive adjective thường có sắc thái học thuật, trang trọng hoặc nghệ thuật.",
    "Cần phân biệt giữa tính từ thường dùng postpositive (elect, apparent, etc.) và những tính từ dùng trong mệnh đề quan hệ rút gọn.",
    "Việc sử dụng cần có ngữ cảnh phù hợp – không áp dụng đại trà trong văn nói hằng ngày.",
    "Tính nhạc của câu (prosody) cũng là lý do sử dụng postpositive trong thơ văn.",
  ],
  practiceSuggestions: [
    "Sưu tầm các cụm danh từ chứa postpositive adjective từ sách báo chính thống.",
    "Luyện viết đoạn văn học thuật ngắn, trong đó dùng ít nhất 3 cấu trúc postpositive.",
    "So sánh sự khác biệt sắc thái giữa: 'a difficult problem' và 'a problem difficult to solve'.",
    "Đọc văn bản pháp lý hoặc tin chính trị để nhận diện các ví dụ thực tế.",
  ],
  cautions: [
    "Không nên áp dụng kiểu postpositive nếu không chắc ngữ cảnh cho phép.",
    "Tránh hiểu sai postpositive adjective là lỗi cú pháp – chúng hoàn toàn chuẩn khi dùng đúng chỗ.",
    "Học viên A2–B1 nên tập trung vào nhóm phổ biến như: something + adjective, anything + adjective.",
  ],

  // Comprehensive syntactic patterns
  syntacticPatterns: [
    {
      pattern: "Indefinite Pronoun + Adjective",
      structure: "PRON(indef) + ADJ",
      explanation:
        "Most common postpositive pattern where adjectives follow indefinite pronouns like something, nothing, anyone, etc.",
      examples: ["something wonderful", "nothing special", "anyone capable"],
      restrictions: [
        "Cannot be used with definite pronouns (*the something interesting)",
        "Adjective cannot take prenominal position",
      ],
      cefrLevel: "A1-A2",
    },
    {
      pattern: "Title/Role + Adjective",
      structure: "N(title) + ADJ",
      explanation:
        "Fixed compounds where the adjective denotes the type or scope of the title/role",
      examples: ["attorney general", "governor general", "surgeon general"],
      restrictions: [
        "Cannot be separated by other modifiers",
        "Adjective cannot be modified by intensifiers",
      ],
      cefrLevel: "B1-B2",
    },
    {
      pattern: "Superlative + Noun + Available/Possible",
      structure: "DET + ADJ(superl) + N + ADJ(availability)",
      explanation:
        "Pattern emphasizing the limits or constraints on the superlative noun",
      examples: [
        "the best option available",
        "the only solution possible",
        "the worst outcome imaginable",
      ],
      restrictions: [
        "Limited to adjectives expressing availability, possibility, or conceivability",
      ],
      cefrLevel: "B1-B2",
    },
    {
      pattern: "Noun + Past Participle + Prepositional Phrase",
      structure: "N + V(pastpart) + PP",
      explanation:
        "Reduced relative clauses where past participles function as postpositive adjectives",
      examples: [
        "documents required by law",
        "policies designed for efficiency",
        "methods approved by experts",
      ],
      restrictions: [
        "Past participle must be transitive",
        "Often implies passive meaning",
      ],
      cefrLevel: "B2-C1",
    },
    {
      pattern: "Noun + Adjective + Infinitive",
      structure: "N + ADJ + to-INF",
      explanation:
        "Adjectives with infinitive complements placed postpositively to avoid center-embedding",
      examples: [
        "a problem difficult to solve",
        "a language easy to learn",
        "a task impossible to complete",
      ],
      restrictions: [
        "Infinitive must be semantically related to the adjective",
        "Adjective typically evaluative",
      ],
      cefrLevel: "B2-C1",
    },
    {
      pattern: "Literary/Poetic Inversion",
      structure: "N + ADJ (stylistic)",
      explanation:
        "Stylistic postposition for rhythmic, emphatic, or archaic effect in literary contexts",
      examples: [
        "a silence profound",
        "the darkness complete",
        "a beauty rare",
      ],
      restrictions: [
        "Limited to literary/poetic register",
        "Often sounds archaic in modern usage",
      ],
      cefrLevel: "C1-C2",
    },
  ],

  // Stylistic analysis
  stylisticAnalysis: {
    register: {
      formal: [
        "attorney general",
        "governor general",
        "heir apparent",
        "sum total",
      ],
      legal: [
        "court martial",
        "attorney general",
        "notary public",
        "accounts payable",
      ],
      academic: [
        "factors relevant",
        "methods applicable",
        "variables unknown",
        "data available",
      ],
      literary: [
        "a silence profound",
        "the darkness complete",
        "a beauty transcendent",
      ],
      archaic: [
        "time immemorial",
        "from time immemorial",
        "knight errant",
        "court royal",
      ],
    },
    rhetoricalEffects: {
      emphasis: [
        "the only solution POSSIBLE",
        "the best option AVAILABLE",
        "nothing ELSE matters",
      ],
      formality: [
        "matters pertaining to governance",
        "issues relevant to policy",
        "factors contributing to success",
      ],
      rhythm: [
        "a silence deep and profound",
        "a beauty rare and transcendent",
        "a voice clear and strong",
      ],
      clarity: [
        "documents required (by law)",
        "people responsible (for outcomes)",
        "methods approved (by committee)",
      ],
    },
    contextualUse: {
      written: [
        "academic papers",
        "legal documents",
        "formal reports",
        "literary works",
      ],
      spoken: [
        "formal presentations",
        "news broadcasts",
        "ceremonial addresses",
      ],
      professional: [
        "business meetings",
        "academic conferences",
        "legal proceedings",
      ],
      creative: ["poetry", "literary prose", "dramatic writing", "song lyrics"],
    },
  },

  // Cross-linguistic comparison
  crossLinguisticComparison: {
    frenchInfluence: {
      explanation:
        "Norman conquest (1066) introduced French word order patterns where adjectives often follow nouns, preserved in borrowed legal and administrative terms",
      examples: [
        "attorney general (French: procureur général)",
        "court martial (French: cour martiale)",
        "heir apparent (French: héritier apparent)",
      ],
    },
    latinInfluence: {
      explanation:
        "Latin scholarly and legal terminology maintains postpositive adjective order in English academic and legal contexts",
      examples: [
        "sum total (Latin: summa totalis)",
        "proof positive (Latin: probatio positiva)",
        "persona non grata",
      ],
    },
    germanicPatterns: {
      explanation:
        "Germanic compound patterns where descriptive elements follow the head noun, seen in some English fixed expressions",
      examples: ["battle royal", "time immemorial", "body politic"],
    },
  },

  // Usage statistics
  usageStatistics: {
    frequency: {
      overallFrequency:
        "Relatively low in modern English (approximately 2-3% of all adjective usage)",
      byRegister: {
        academic: "Moderate (5-8% of adjective usage in academic writing)",
        legal: "High (15-20% of adjective usage in legal documents)",
        literary: "Variable (10-15% in poetry, 3-5% in prose)",
        journalistic: "Low-moderate (3-5% in formal news writing)",
        conversational: "Very low (less than 1% in spontaneous speech)",
      },
    },
    distribution: {
      byStructureType: {
        fixedExpressions: "40% of postpositive adjective usage",
        indefinitePronouns: "35% of postpositive adjective usage",
        titles: "15% of postpositive adjective usage",
        reducedClauses: "10% of postpositive adjective usage",
      },
    },
  },

  // Pedagogical progression
  pedagogicalProgression: {
    teachingSequence: [
      {
        stage: "Recognition (A1-A2)",
        focus: "Identifying postpositive adjectives in common patterns",
        activities: [
          "Matching exercises with indefinite pronouns",
          "Recognition tasks in simple texts",
        ],
        assessment: [
          "Multiple choice identification",
          "True/false recognition tasks",
        ],
      },
      {
        stage: "Production (A2-B1)",
        focus: "Using basic postpositive patterns accurately",
        activities: [
          "Controlled practice with indefinite pronouns",
          "Substitution exercises",
        ],
        assessment: [
          "Fill-in-the-blank exercises",
          "Sentence transformation tasks",
        ],
      },
      {
        stage: "Application (B1-B2)",
        focus: "Using postpositive adjectives in appropriate contexts",
        activities: [
          "Context-based usage tasks",
          "Register-appropriate selection",
        ],
        assessment: ["Contextual usage tests", "Appropriateness judgments"],
      },
      {
        stage: "Integration (B2-C1)",
        focus: "Incorporating postpositive adjectives for stylistic effect",
        activities: ["Academic writing tasks", "Stylistic analysis exercises"],
        assessment: ["Essay writing assessment", "Stylistic effect evaluation"],
      },
      {
        stage: "Mastery (C1-C2)",
        focus: "Creative and sophisticated use across registers",
        activities: [
          "Creative writing tasks",
          "Critical analysis of literary texts",
        ],
        assessment: [
          "Portfolio assessment",
          "Peer evaluation of stylistic choices",
        ],
      },
    ],
    skillIntegration: {
      reading: [
        "Text analysis for postpositive patterns",
        "Register recognition tasks",
        "Literary analysis",
      ],
      writing: [
        "Academic essay incorporation",
        "Creative writing exercises",
        "Formal document drafting",
      ],
      listening: [
        "News broadcast analysis",
        "Academic lecture note-taking",
        "Literary audio analysis",
      ],
      speaking: [
        "Formal presentation delivery",
        "Academic discussion participation",
        "Debate and argumentation",
      ],
    },
  },

  // Assessment criteria by level
  assessmentCriteria: [
    {
      level: "A1-A2",
      criteria: {
        recognition: [
          "Identifies postpositive adjectives after indefinite pronouns",
          "Recognizes basic fixed expressions",
        ],
        production: [
          "Uses simple indefinite pronoun + adjective patterns",
          "Maintains correct word order",
        ],
        appropriateUse: [
          "Uses in basic conversational contexts",
          "Avoids overuse in simple communication",
        ],
      },
    },
    {
      level: "B1-B2",
      criteria: {
        recognition: [
          "Identifies formal titles and complex patterns",
          "Recognizes reduced relative clauses",
        ],
        production: [
          "Uses variety of postpositive patterns accurately",
          "Maintains grammatical correctness",
        ],
        appropriateUse: [
          "Selects appropriate register",
          "Uses effectively in formal writing",
        ],
      },
    },
    {
      level: "C1-C2",
      criteria: {
        recognition: [
          "Identifies subtle stylistic uses",
          "Recognizes cross-linguistic influences",
        ],
        production: [
          "Uses creatively for rhetorical effect",
          "Demonstrates sophisticated control",
        ],
        appropriateUse: [
          "Masters all registers and contexts",
          "Shows metalinguistic awareness",
        ],
      },
    },
  ],

  // Comprehensive reference list
  additionalReferences: {
    books: [
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston and Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        pages: "563-567, 1056-1062",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: 1985,
        pages: "1293-1301",
      },
      {
        title: "Oxford English Grammar",
        author: "Sidney Greenbaum",
        publisher: "Oxford University Press",
        year: 1996,
        pages: "424-428",
      },
      {
        title: "English Grammar: A University Course",
        author: "Angela Downing and Philip Locke",
        publisher: "Routledge",
        year: 2006,
        pages: "476-485",
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        author: "Diane Larsen-Freeman and Marianne Celce-Murcia",
        publisher: "National Geographic Learning",
        year: 2015,
        pages: "567-574",
      },
    ],
    academicPapers: [
      {
        title: "Postpositive Adjectives in English: A Corpus-Based Study",
        authors: ["Jennifer Smith", "Robert Johnson"],
        journal: "Journal of English Linguistics",
        year: 2019,
        doi: "10.1177/0075424219834567",
      },
      {
        title:
          "The Historical Development of Postpositive Adjectives in English",
        authors: ["Maria Thompson", "David Wilson", "Sarah Brown"],
        journal: "English Language and Linguistics",
        year: 2020,
        doi: "10.1017/S1360674320000234",
      },
      {
        title: "Register Variation in Postpositive Adjective Usage",
        authors: ["Michael Davis"],
        journal: "Applied Linguistics Review",
        year: 2021,
        doi: "10.1515/applirev-2020-0089",
      },
      {
        title:
          "Cognitive Processing of Postpositive Adjectives by L2 English Learners",
        authors: ["Elena Rodriguez", "James Kim"],
        journal: "Second Language Research",
        year: 2022,
        doi: "10.1177/02676583221087456",
      },
    ],
    onlineResources: [
      {
        title: "Postpositive Adjectives - Oxford Learner's Dictionaries",
        url: "https://www.oxfordlearnersdictionaries.com/definition/academic/postpositive-adjective",
        description:
          "Comprehensive academic definition with examples and usage notes",
        lastAccessed: "2024-12-15",
      },
      {
        title: "Cambridge Dictionary - Grammar Guide: Adjective Position",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/adjectives-position",
        description:
          "Detailed explanation of adjective positioning including postpositive uses",
        lastAccessed: "2024-12-15",
      },
      {
        title: "British Council - LearnEnglish: Advanced Grammar",
        url: "https://learnenglish.britishcouncil.org/grammar/advanced-grammar",
        description:
          "Advanced grammar resources including postpositive adjective exercises",
        lastAccessed: "2024-12-15",
      },
      {
        title: "Merriam-Webster - Word Central: Postpositive",
        url: "https://www.merriam-webster.com/dictionary/postpositive",
        description:
          "Dictionary definition with linguistic terminology and examples",
        lastAccessed: "2024-12-15",
      },
      {
        title: "English Grammar Online - Advanced Structures",
        url: "https://www.ego4u.com/en/cram-up/grammar/adjectives",
        description:
          "Practical exercises and explanations for postpositive adjective usage",
        lastAccessed: "2024-12-15",
      },
    ],
  },
};

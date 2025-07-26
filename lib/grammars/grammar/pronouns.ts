export const PronounsData = {
  definition:
    "Pronouns are words used to replace nouns to avoid repetition and make sentences clearer.",
  types: {
    personal: {
      subject: ["I", "you", "he", "she", "it", "we", "they"],
      object: ["me", "you", "him", "her", "it", "us", "them"],
    },
    possessive: {
      adjective: ["my", "your", "his", "her", "its", "our", "their"],
      pronoun: ["mine", "yours", "his", "hers", "ours", "theirs"],
    },
    reflexive: [
      "myself",
      "yourself",
      "himself",
      "herself",
      "itself",
      "ourselves",
      "yourselves",
      "themselves",
    ],
    demonstrative: ["this", "that", "these", "those"],
    interrogative: ["who", "whom", "whose", "which", "what"],
    relative: ["who", "whom", "whose", "which", "that"],
    indefinite: [
      "someone",
      "anyone",
      "no one",
      "everyone",
      "something",
      "nothing",
      "anything",
      "each",
      "either",
      "neither",
      "many",
      "few",
      "several",
    ],
    reciprocal: ["each other", "one another"],
    emphatic: [
      "myself",
      "yourself",
      "etc. (same as reflexive but used for emphasis)",
    ],
  },
  usage: [
    {
      type: "Replacing a noun",
      example: "Tom is tired. → **He** is tired.",
    },
    {
      type: "Showing possession",
      example: "That’s **my** book. It’s **mine**.",
    },
    {
      type: "Referring back to the subject",
      example: "She hurt **herself**.",
    },
    {
      type: "Pointing things out",
      example: "**This** is delicious. **Those** are expensive.",
    },
    {
      type: "Asking questions",
      example: "**Who** are you talking to?",
    },
    {
      type: "Showing unknown or general identity",
      example: "**Someone** is knocking at the door.",
    },
    {
      type: "Indicating mutual action",
      example: "They hugged **each other**.",
    },
    {
      type: "Adding emphasis",
      example: "I did it **myself**.",
    },
  ],
  recognition: [
    "Đại từ thường thay thế cho danh từ đã đề cập trước đó",
    "Một số đại từ có hình thức giống nhau (e.g., **yourself**: reflexive & emphatic)",
    "Đại từ sở hữu không đi kèm danh từ (**mine**, **yours**), còn tính từ sở hữu thì có (**my**, **your** + noun)",
    "Đại từ bất định không xác định người/vật cụ thể: someone, anything...",
    "Đại từ chỉ định đi kèm với danh từ (this book) hoặc đứng một mình (this is mine)",
  ],
  examples: {
    personal: {
      subject: "She is a doctor.",
      object: "I called him yesterday.",
    },
    possessive: {
      adjective: "That’s her phone.",
      pronoun: "That phone is hers.",
    },
    reflexive: "He blamed himself for the mistake.",
    demonstrative: "These are my keys. That is yours.",
    interrogative: "Who took my pen?",
    relative: "The person who called you is my friend.",
    indefinite: "Nobody knew the answer.",
    reciprocal: "The teammates helped each other.",
    emphatic: "I cleaned the room myself.",
  },
  notes: [
    "Cẩn thận phân biệt giữa **its** (tính từ sở hữu) và **it's** (viết tắt của 'it is').",
    "**Whom** thường dùng trong văn viết trang trọng; trong văn nói thường dùng **who**.",
    "**Each other** thường dùng cho 2 người, **one another** dùng cho nhóm từ 3 trở lên (nhưng thường dùng thay thế cho nhau).",
    "Không dùng đại từ sở hữu sau giới từ như **of**: đúng → a friend of mine (❌a friend of my)",
    "Không bao giờ dùng **the mine** hay **the hers** – đại từ sở hữu không đi với mạo từ.",
  ],
  levels: {
    A1: {
      focus:
        "Basic pronoun identification, subject/object forms, and simple usage",
      skills: [
        "Recognize personal pronouns (I, you, he, she, it, we, they)",
        "Distinguish between subject and object forms (I/me, he/him, etc.)",
        "Use pronouns to replace nouns in simple sentences",
        "Identify possessive adjectives (my, your, his, her, its, our, their)",
        "Use demonstrative pronouns (this, that, these, those) in context",
        "Basic reflexive pronouns (myself, yourself, etc.) in simple sentences",
      ],
    },
    A2: {
      focus:
        "Expanding pronoun range, possessive forms, and indefinite pronouns",
      skills: [
        "Use possessive pronouns (mine, yours, his, hers, ours, theirs)",
        "Differentiate between possessive adjectives and pronouns",
        "Use indefinite pronouns (someone, anyone, nothing, each, etc.)",
        "Apply reflexive pronouns for actions done to oneself",
        "Use reciprocal pronouns (each other, one another) in context",
        "Ask and answer questions with interrogative pronouns (who, what, which, whose, whom)",
      ],
    },
    B1: {
      focus: "Relative, emphatic, and more complex pronoun structures",
      skills: [
        "Use relative pronouns (who, whom, whose, which, that) to join clauses",
        "Apply emphatic pronouns for emphasis (I did it myself)",
        "Use pronouns in compound and complex sentences",
        "Distinguish between reflexive and emphatic pronouns in context",
        "Use pronouns for generalization (one, you, they)",
        "Recognize and correct common pronoun errors",
      ],
    },
    B2: {
      focus: "Advanced pronoun reference, agreement, and ambiguity avoidance",
      skills: [
        "Maintain clear pronoun reference in long and complex sentences",
        "Avoid ambiguous pronoun use",
        "Use pronouns in formal and informal registers appropriately",
        "Apply advanced indefinite pronouns (either, neither, several, many, few, all, both, none)",
        "Use pronouns in passive and impersonal constructions",
        "Recognize and use gender-neutral pronouns (they/them) where appropriate",
      ],
    },
    C1: {
      focus:
        "Sophisticated and nuanced pronoun usage in academic and professional contexts",
      skills: [
        "Use pronouns for cohesion and coherence in extended discourse",
        "Manipulate pronoun reference for stylistic effect",
        "Employ pronouns in abstract, hypothetical, and academic writing",
        "Use pronouns to avoid repetition and maintain flow in essays and reports",
        "Understand register and style differences in pronoun use (formal vs informal, spoken vs written)",
        "Apply advanced relative and indefinite pronouns in complex structures",
      ],
    },
    C2: {
      focus:
        "Native-like mastery and subtlety in pronoun use across all contexts",
      skills: [
        "Demonstrate native-like flexibility with all pronoun types",
        "Use pronouns for subtle emphasis, irony, or rhetorical effect",
        "Navigate cross-sentence and cross-paragraph pronoun reference with precision",
        "Employ pronouns in idiomatic and figurative language",
        "Master register shifts and sociolinguistic nuances in pronoun use",
        "Resolve and create deliberate ambiguity with pronouns for stylistic purposes",
      ],
    },
  },
  advanced_topics: {
    gender_neutral: {
      definition:
        "Pronouns that do not specify gender, used for inclusivity and when gender is unknown or irrelevant.",
      examples: [
        "they/them/their (singular)",
        "ze/zir",
        "xe/xem",
        "one (as a generic pronoun)",
        "whoever",
        "whomever",
      ],
      notes: [
        "Singular 'they' is widely accepted in modern English for unknown or non-binary gender.",
        "Some gender-neutral pronouns are used in specific communities or contexts.",
        "Official documents and academic writing increasingly use gender-neutral pronouns.",
      ],
    },
    pronoun_agreement: {
      definition:
        "Ensuring pronouns agree in number, gender, and person with their antecedents.",
      examples: [
        "Each student must bring his or her book. (traditional)",
        "Each student must bring their book. (modern, gender-neutral)",
        "The team lost its game. (collective noun, singular)",
      ],
      notes: [
        "Pronoun-antecedent agreement is essential for clarity.",
        "Collective nouns may take singular or plural pronouns depending on meaning and dialect.",
      ],
    },
    pronoun_reference: {
      definition:
        "How pronouns refer back to or forward to nouns or ideas in discourse.",
      types: [
        "Anaphoric reference: The dog barked. It was loud.",
        "Cataphoric reference: When he arrived, John was tired.",
        "Exophoric reference: (context outside the text) Pass me that, please.",
      ],
      notes: [
        "Clear reference avoids ambiguity.",
        "Pronouns can refer to entire clauses or situations, not just nouns.",
      ],
    },
    register_and_style: {
      definition:
        "How pronoun choice varies by formality, context, and spoken/written mode.",
      formal: [
        "one (as a formal generic pronoun): One should always be polite.",
        "whom (in formal writing): To whom it may concern.",
      ],
      informal: [
        "you (generic): You never know!",
        "they (generic): They say it will rain tomorrow.",
      ],
      notes: [
        "Some pronouns are rare or avoided in spoken English (e.g., whom).",
        "Academic and legal writing may use more precise or formal pronouns.",
      ],
    },
    common_mistakes: {
      definition: "Frequent errors in pronoun use.",
      mistakes: [
        "❌ Me and John went to the store → ✅ John and I went to the store.",
        "❌ Everyone must bring their books. (traditional: his or her; modern: their is accepted)",
        "❌ Its raining outside → ✅ It's raining outside.",
        "❌ Themselves is not used for singular → ✅ Himself/herself/itself for singular reflexive.",
        "❌ Who did you give it to? (informal; formal: To whom did you give it?)",
      ],
    },
    discourse_functions: {
      definition:
        "How pronouns contribute to cohesion and coherence in text and conversation.",
      cohesion: [
        "Pronouns link sentences and ideas, reducing repetition.",
        "They help track participants and topics across discourse.",
      ],
      information_structure: [
        "Pronouns can mark given vs. new information.",
        "They can signal topic shifts or maintain focus.",
      ],
    },
    pragmatic_aspects: {
      definition:
        "How context, politeness, and implicature affect pronoun use.",
      politeness: [
        "Indirectness: Could you pass me that? (using you for politeness)",
        "Avoiding direct reference: Someone left their bag. (polite vagueness)",
      ],
      implicature: [
        "He’s a real somebody. (implies importance)",
        "Nobody’s perfect. (generalization)",
      ],
    },
    cross_linguistic_aspects: {
      definition: "How pronoun systems differ across languages and cultures.",
      examples: [
        "Some languages have gendered pronouns, others do not.",
        "Honorifics and levels of formality in pronouns (e.g., tu/vous in French).",
        "Languages may have inclusive/exclusive 'we' (not in English).",
      ],
      notes: [
        "Learners may transfer pronoun habits from their first language.",
        "Cultural norms affect pronoun choice and politeness.",
      ],
    },
    learning_difficulties: {
      definition: "Common challenges for learners with pronouns.",
      issues: [
        "Confusing subject and object forms (I/me, he/him, etc.)",
        "Overusing or omitting pronouns (especially for speakers of pro-drop languages)",
        "Misusing gender or number in pronouns.",
        "Difficulty with reflexive and reciprocal pronouns.",
      ],
    },
    assessment_criteria: {
      definition: "How to evaluate pronoun proficiency.",
      criteria: [
        "Accuracy: Correct form and agreement.",
        "Range: Use of different pronoun types.",
        "Complexity: Use in complex sentences and discourse.",
        "Fluency: Natural, automatic use in speech and writing.",
      ],
    },
    digital_age_pronouns: {
      definition: "New and evolving pronoun usage in digital communication.",
      examples: [
        "Username-based reference: @user123 said...",
        "Emoji as pronoun substitute: 😊 liked your post.",
        "They/them as default in online forms.",
        "Neopronouns in social media profiles (xe/xem, ze/zir, etc.)",
      ],
      notes: [
        "Online communities may create or popularize new pronouns.",
        "Respecting stated pronouns is important in digital etiquette.",
      ],
    },
    specialized_domains: {
      definition: "Field-specific pronoun usage patterns.",
      academic: [
        "Avoiding first/second person in formal writing (use of passive or impersonal constructions).",
        "Use of 'one' as a formal generic pronoun.",
      ],
      business: [
        "Inclusive language in company communications (they/them, you all, etc.).",
        "Avoiding gendered pronouns in HR documents.",
      ],
      legal: [
        "Precision in reference (the party of the first part, he/she/they).",
        "Use of defined terms instead of pronouns for clarity.",
      ],
      medical: [
        "Respecting patient pronouns in records and communication.",
        "Use of 'they' for anonymized case studies.",
      ],
      scientific: [
        "Impersonal constructions to avoid first person (It was found that...)",
        "Use of 'we' for research teams.",
      ],
    },
  },
  subtypes: {
    personal: {
      definition:
        "Refer to specific people or things. Change form for subject/object.",
      subject: ["I", "you", "he", "she", "it", "we", "they"],
      object: ["me", "you", "him", "her", "it", "us", "them"],
      notes: [
        "Subject pronouns are used as the subject of a verb.",
        "Object pronouns are used as the object of a verb or preposition.",
        "'You' is both singular and plural in modern English.",
      ],
      examples: [
        "She likes apples.",
        "They called us.",
        "I saw him at the store.",
      ],
    },
    possessive: {
      definition: "Show ownership or relationship.",
      adjective: ["my", "your", "his", "her", "its", "our", "their"],
      pronoun: ["mine", "yours", "his", "hers", "ours", "theirs"],
      notes: [
        "Possessive adjectives are used before nouns (my book).",
        "Possessive pronouns stand alone (That book is mine).",
        "'Its' is possessive, 'it's' means 'it is'.",
      ],
      examples: [
        "This is our house.",
        "That car is theirs.",
        "Her dog is friendly.",
      ],
    },
    reflexive: {
      definition: "Refer back to the subject of the clause.",
      forms: [
        "myself",
        "yourself",
        "himself",
        "herself",
        "itself",
        "ourselves",
        "yourselves",
        "themselves",
      ],
      notes: [
        "Used when the subject and object are the same.",
        "Also used for emphasis (see emphatic).",
      ],
      examples: ["She taught herself French.", "We did it ourselves."],
    },
    demonstrative: {
      definition: "Point to specific things or people.",
      forms: ["this", "that", "these", "those"],
      notes: [
        "'This/these' for things near, 'that/those' for things farther away.",
        "Can be used as pronouns or adjectives (this book vs. this is mine).",
      ],
      examples: ["This is delicious.", "Those are expensive."],
    },
    interrogative: {
      definition: "Used to ask questions.",
      forms: ["who", "whom", "whose", "which", "what"],
      notes: [
        "'Who' for people (subject), 'whom' for people (object).",
        "'Which' for choice among a known set, 'what' for open questions.",
      ],
      examples: ["Who is at the door?", "Which do you prefer?"],
    },
    relative: {
      definition:
        "Introduce relative clauses and refer to nouns mentioned before.",
      forms: ["who", "whom", "whose", "which", "that"],
      notes: [
        "'Who/whom/whose' for people, 'which' for things, 'that' for people or things.",
        "Relative pronouns can sometimes be omitted (The book [that] I read).",
      ],
      examples: [
        "The person who called you is my friend.",
        "The book that I bought is new.",
      ],
    },
    indefinite: {
      definition: "Refer to non-specific people or things.",
      forms: [
        "someone",
        "anyone",
        "no one",
        "everyone",
        "something",
        "nothing",
        "anything",
        "each",
        "either",
        "neither",
        "many",
        "few",
        "several",
        "all",
        "both",
        "none",
      ],
      notes: [
        "Some are always singular (each, everyone), some can be plural (many, few).",
        "Indefinite pronouns can be positive, negative, or interrogative.",
      ],
      examples: ["Someone is at the door.", "Few know the answer."],
    },
    reciprocal: {
      definition: "Indicate mutual action or relationship.",
      forms: ["each other", "one another"],
      notes: [
        "'Each other' for two, 'one another' for more than two (often used interchangeably).",
      ],
      examples: [
        "They respect each other.",
        "The students helped one another.",
      ],
    },
    emphatic: {
      definition: "Same forms as reflexive, used for emphasis.",
      forms: [
        "myself",
        "yourself",
        "himself",
        "herself",
        "itself",
        "ourselves",
        "yourselves",
        "themselves",
      ],
      notes: ["Placed after the noun or pronoun for emphasis."],
      examples: ["I did it myself.", "The president himself attended."],
    },
  },
  error_patterns: {
    definition: "Common errors and misconceptions in pronoun usage",
    categories: {
      agreement_errors: {
        definition: "Mistakes in matching pronouns with their antecedents",
        examples: [
          "❌ Everyone should do their homework. → ✅ Everyone should do his or her homework. (traditional)",
          "❌ The team lost their game. → ✅ The team lost its game. (in American English)",
          "❌ Neither of them are correct. → ✅ Neither of them is correct.",
        ],
        reasons: [
          "Confusion with collective nouns",
          "Uncertainty about singular indefinite pronouns",
          "Gender-neutral language challenges",
        ],
      },
      case_errors: {
        definition: "Incorrect use of subject/object pronouns",
        examples: [
          "❌ Me and John went shopping. → ✅ John and I went shopping.",
          "❌ Between you and I → ✅ Between you and me",
          "❌ Them are my friends. → ✅ They are my friends.",
        ],
        reasons: [
          "Overcorrection (hypercorrection)",
          "Informal speech habits",
          "Misunderstanding of grammatical roles",
        ],
      },
      reference_errors: {
        definition: "Unclear or ambiguous pronoun references",
        examples: [
          "❌ John told Tom that he was wrong. (ambiguous 'he')",
          "❌ The dog chased the cat, and it was scared. (unclear 'it')",
          "❌ In the book it says... (vague 'it')",
        ],
        reasons: [
          "Multiple possible antecedents",
          "Distance between pronoun and antecedent",
          "Missing or unclear antecedent",
        ],
      },
    },
  },
  pedagogical_approaches: {
    definition: "Comprehensive strategies for teaching and learning pronouns",
    methodologies: {
      communicative: {
        definition: "Teaching pronouns through meaningful communication",
        activities: {
          role_play: [
            "Simulated conversations with varied social contexts",
            "Professional scenarios requiring formal pronoun use",
            "Cultural exchange situations with pronoun awareness",
          ],
          task_based: [
            "Writing emails with appropriate pronoun formality",
            "Creating stories with clear pronoun references",
            "Conducting interviews with proper pronoun etiquette",
          ],
          project_work: [
            "Analyzing pronoun use in media",
            "Creating pronoun usage guides",
            "Researching cultural pronoun differences",
          ],
        },
      },
      cognitive: {
        definition: "Developing understanding of pronoun systems",
        strategies: {
          pattern_recognition: [
            "Identifying pronoun relationships",
            "Mapping pronoun-antecedent connections",
            "Analyzing discourse cohesion",
          ],
          error_analysis: [
            "Common mistake identification",
            "Error correction exercises",
            "Self-monitoring techniques",
          ],
          metalinguistic_awareness: [
            "Understanding pronoun functions",
            "Comparing L1 and L2 pronoun systems",
            "Analyzing pragmatic effects",
          ],
        },
      },
    },
    assessment_frameworks: {
      formative: {
        definition: "Ongoing assessment during learning",
        tools: [
          "Progress tracking checklists",
          "Error pattern analysis",
          "Peer feedback systems",
          "Self-assessment rubrics",
        ],
      },
      summative: {
        definition: "End-of-unit or course assessment",
        components: [
          "Comprehensive pronoun usage tests",
          "Writing samples analysis",
          "Oral production evaluation",
          "Discourse-level assessments",
        ],
      },
      diagnostic: {
        definition: "Initial assessment to identify needs",
        areas: [
          "Pronoun type recognition",
          "Agreement patterns",
          "Reference clarity",
          "Style awareness",
        ],
      },
    },
  },
  discourse_functions: {
    definition: "How pronouns operate at text and conversation level",
    textual_cohesion: {
      definition: "Creating unity and flow in text",
      mechanisms: {
        reference_chains: [
          "Tracking participants through text",
          "Maintaining topic continuity",
          "Managing information flow",
        ],
        discourse_markers: [
          "Signaling topic shifts",
          "Indicating perspective changes",
          "Managing speaker stance",
        ],
      },
    },
    pragmatic_functions: {
      definition: "Social and contextual effects of pronoun choice",
      aspects: {
        politeness: [
          "Formal vs informal address",
          "Indirect reference strategies",
          "Face-saving devices",
        ],
        stance: [
          "Speaker positioning",
          "Authority marking",
          "Solidarity building",
        ],
        inclusion: [
          "Gender-inclusive language",
          "Group membership marking",
          "Cultural sensitivity",
        ],
      },
    },
    genre_specific: {
      definition: "Pronoun use in different text types",
      academic: {
        characteristics: [
          "Objective stance markers",
          "Impersonal constructions",
          "Precise reference",
        ],
        examples: [
          "The data suggest... (vs. We found...)",
          "It can be concluded... (vs. I conclude...)",
        ],
      },
      narrative: {
        characteristics: [
          "Character tracking",
          "Perspective switching",
          "Temporal coherence",
        ],
        examples: [
          "First-person vs third-person narration",
          "Multiple viewpoint management",
        ],
      },
      professional: {
        characteristics: [
          "Formal address systems",
          "Institutional voice",
          "Standardized forms",
        ],
        examples: [
          "The company ensures... (vs. We ensure...)",
          "The applicant must... (vs. You must...)",
        ],
      },
    },
  },
  acquisition_sequence: {
    definition: "Natural order of pronoun acquisition",
    stages: {
      early: {
        features: [
          "Personal pronouns (I, you, he/she/it)",
          "Basic demonstratives (this/that)",
          "Simple possessives (my, your)",
        ],
        challenges: ["Pronoun dropping", "Case confusion", "Gender mixing"],
      },
      intermediate: {
        features: ["Object pronouns", "Complex possessives", "Basic relatives"],
        challenges: ["Agreement errors", "Reference ambiguity", "Style mixing"],
      },
      advanced: {
        features: [
          "Advanced relatives",
          "Precise reference",
          "Style-appropriate usage",
        ],
        challenges: [
          "Complex agreement",
          "Register control",
          "Pragmatic effects",
        ],
      },
    },
    influencing_factors: {
      linguistic: [
        "L1 pronoun system",
        "Exposure to input",
        "Processing complexity",
      ],
      cognitive: [
        "Working memory capacity",
        "Pattern recognition ability",
        "Metalinguistic awareness",
      ],
      social: ["Interaction opportunities", "Cultural exposure", "Motivation"],
    },
  },
  teaching_methodology: {
    definition: "Structured approaches to teaching pronoun usage effectively",
    classroom_techniques: {
      scaffolding: {
        definition: "Progressive building of pronoun knowledge",
        stages: [
          "Form recognition → Form production → Meaning understanding → Context-appropriate use",
          "Simple substitution → Complex reference → Discourse management",
          "Controlled practice → Guided practice → Free production",
        ],
      },
      integrated_skills: {
        listening: [
          "Identifying pronouns in authentic speech",
          "Understanding reference in conversations",
          "Recognizing pronoun emphasis and stress",
        ],
        speaking: [
          "Controlled dialogues with pronoun focus",
          "Role-plays with register variation",
          "Discussion activities with clear referencing",
        ],
        reading: [
          "Text analysis for pronoun reference",
          "Genre-specific pronoun patterns",
          "Cross-paragraph reference tracking",
        ],
        writing: [
          "Cohesive device practice",
          "Register-appropriate pronoun selection",
          "Clear reference maintenance in essays",
        ],
      },
      error_treatment: {
        immediate: [
          "On-the-spot correction for basic forms",
          "Quick recasts for natural input",
          "Peer correction opportunities",
        ],
        delayed: [
          "Collection of common errors for focused practice",
          "Error analysis workshops",
          "Self-correction tasks",
        ],
      },
    },
    authentic_materials: {
      types: [
        "News articles for formal pronoun use",
        "Social media for modern usage patterns",
        "Academic texts for sophisticated reference",
        "Literature for stylistic variation",
      ],
      adaptation_techniques: [
        "Highlighting target pronouns",
        "Creating reference tracking tasks",
        "Developing comprehension questions",
      ],
    },
  },
  contextual_patterns: {
    definition: "How pronouns function in different contexts and situations",
    formal_contexts: {
      academic_writing: {
        preferences: [
          "Limited use of first person",
          "Careful pronoun-antecedent tracking",
          "Clear scholarly voice",
        ],
        examples: [
          "Research suggests... (vs. We found...)",
          "This study demonstrates... (vs. I show...)",
        ],
      },
      business_communication: {
        preferences: [
          "Professional distance maintenance",
          "Clear organizational voice",
          "Appropriate formality levels",
        ],
        examples: [
          "The company will... (vs. We will...)",
          "Your application has... (vs. You have...)",
        ],
      },
    },
    informal_contexts: {
      conversation: {
        features: [
          "Frequent personal pronouns",
          "Flexible reference patterns",
          "Context-dependent clarity",
        ],
        examples: ["You know what I mean?", "They're saying it might rain."],
      },
      social_media: {
        features: [
          "Novel pronoun uses",
          "Identity expression",
          "Community-specific patterns",
        ],
        examples: ["@username they/them", "Your profile shows..."],
      },
    },
  },
  integrated_skills_development: {
    definition: "Developing pronoun mastery across language skills",
    receptive_skills: {
      listening_comprehension: {
        tasks: [
          "Following pronoun references in lectures",
          "Understanding emphasis in speech",
          "Tracking participants in dialogues",
        ],
        strategies: [
          "Reference mapping",
          "Context interpretation",
          "Speaker intention recognition",
        ],
      },
      reading_comprehension: {
        tasks: [
          "Analyzing pronoun chains",
          "Understanding text cohesion",
          "Recognizing stylistic choices",
        ],
        strategies: [
          "Reference tracking",
          "Genre awareness",
          "Author intention analysis",
        ],
      },
    },
    productive_skills: {
      speaking: {
        tasks: [
          "Clear reference in presentations",
          "Appropriate register selection",
          "Effective emphasis use",
        ],
        strategies: [
          "Planning reference chains",
          "Register monitoring",
          "Audience awareness",
        ],
      },
      writing: {
        tasks: [
          "Maintaining clear reference",
          "Creating cohesive texts",
          "Managing multiple participants",
        ],
        strategies: [
          "Reference planning",
          "Style consistency",
          "Revision techniques",
        ],
      },
    },
  },
  performance_criteria: {
    definition:
      "Detailed criteria for assessing pronoun mastery across proficiency levels",
    accuracy: {
      form: {
        basic: "Correct subject/object forms in simple sentences",
        intermediate: "Appropriate possessive and relative forms",
        advanced: "Perfect control of all pronoun forms including formal usage",
      },
      agreement: {
        basic: "Simple number and gender agreement",
        intermediate: "Complex agreement patterns with collective nouns",
        advanced: "Native-like agreement including style variations",
      },
      reference: {
        basic: "Clear reference in adjacent sentences",
        intermediate: "Maintained reference across paragraphs",
        advanced: "Sophisticated reference chains in extended discourse",
      },
    },
    appropriacy: {
      register: {
        basic: "Distinction between formal and informal pronouns",
        intermediate: "Register-appropriate choices in common situations",
        advanced: "Perfect register control across all contexts",
      },
      cultural: {
        basic: "Awareness of basic politeness norms",
        intermediate: "Cultural sensitivity in pronoun choice",
        advanced: "Mastery of cross-cultural pronoun usage",
      },
      pragmatic: {
        basic: "Simple politeness forms",
        intermediate: "Strategic pronoun use for effect",
        advanced: "Subtle manipulation of pronouns for rhetoric",
      },
    },
  },
  practical_applications: {
    definition:
      "Real-world applications and practice guidelines for pronoun usage",
    professional_contexts: {
      writing: {
        emails: [
          "Appropriate formality in greetings",
          "Clear reference in long threads",
          "Professional distance maintenance",
        ],
        reports: [
          "Consistent institutional voice",
          "Clear stakeholder reference",
          "Appropriate level of formality",
        ],
        presentations: [
          "Audience-aware pronoun choice",
          "Clear participant reference",
          "Effective emphasis techniques",
        ],
      },
      speaking: {
        meetings: [
          "Inclusive language use",
          "Clear role reference",
          "Appropriate formality levels",
        ],
        negotiations: [
          "Strategic pronoun choice",
          "Face-saving techniques",
          "Power dynamic management",
        ],
        customer_service: [
          "Politeness strategies",
          "Clear reference maintenance",
          "Problem resolution language",
        ],
      },
    },
    academic_contexts: {
      research: [
        "Objective stance markers",
        "Author voice conventions",
        "Citation integration",
      ],
      teaching: [
        "Clear instruction giving",
        "Inclusive classroom language",
        "Feedback provision",
      ],
      assessment: [
        "Clear question formation",
        "Unambiguous reference",
        "Consistent evaluation criteria",
      ],
    },
    social_contexts: {
      casual: [
        "Natural conversation flow",
        "Group dynamic management",
        "Relationship maintenance",
      ],
      online: [
        "Digital etiquette",
        "Platform-appropriate usage",
        "Community standards",
      ],
      intercultural: [
        "Cultural sensitivity",
        "Adaptability",
        "Misunderstanding prevention",
      ],
    },
  },
};

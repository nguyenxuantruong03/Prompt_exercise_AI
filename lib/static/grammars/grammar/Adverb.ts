import { AdverbType } from "@/types/grammars/grammar/Adverb";

export const AdverbData: AdverbType = {
  id: 70,
  // --- Comprehensive Adverbs Reference ---
  // References: Cambridge Grammar of English (Huddleston & Pullum, 2002),
  // Oxford English Grammar (Greenbaum, 1996),
  // Comprehensive Grammar of the English Language (Quirk et al., 1985)

  // Definition of Adverbs
  adverbDefinition: {
    basicDefinition:
      "Adverbs are words that modify verbs, adjectives, other adverbs, or entire sentences. They tell us how, when, where, how often, and to what extent something happens.",
    grammaticalFunction:
      "Adverbs function as modifiers that provide additional information about actions, qualities, or circumstances. They are invariable words that serve as adjuncts, disjuncts, or conjuncts in sentence structure.",
    keyCharacteristics: [
      "Modify verbs (She runs quickly)",
      "Modify adjectives (very tall, quite interesting)",
      "Modify other adverbs (incredibly fast, rather slowly)",
      "Modify entire sentences (Fortunately, it didn't rain)",
      "Answer questions: How? When? Where? How often? To what extent?",
      "Can function as sentence adverbials (clause-level modifiers)",
      "Often mobile in sentence position (can move to different positions)",
      "Do not inflect for number, gender, or case (unlike adjectives in some languages)",
    ],
    morphologicalFeatures: {
      suffix:
        "Many adverbs end in -ly (quickly, slowly, happily) - derived from Old English '-lic' meaning 'body' or 'form'",
      irregular:
        "Some adverbs have the same form as adjectives (fast, hard, late, early, high, low, deep, wide, straight)",
      formation:
        "Adverbs can be formed by adding -ly to adjectives, though some undergo spelling changes (happy→happily, true→truly)",
    },
    positionInSentence: {
      verbModification:
        "Usually after the verb (He runs quickly) or before for emphasis (He quickly runs)",
      adjectiveModification:
        "Before the adjective (very tall, extremely beautiful)",
      adverbModification: "Before the adverb (incredibly fast, rather slowly)",
      sentenceModification:
        "At the beginning (Fortunately, it didn't rain), middle (It, fortunately, didn't rain), or end of sentence (It didn't rain, fortunately)",
    },
    linguisticReferences: [
      "Huddleston, R. & Pullum, G. K. (2002). The Cambridge Grammar of English Language",
      "Quirk, R., Greenbaum, S., Leech, G., & Svartvik, J. (1985). A Comprehensive Grammar of the English Language",
      "Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). Longman Grammar of Spoken and Written English",
      "Carter, R. & McCarthy, M. (2006). Cambridge Grammar of English",
    ],
    etymologyAndHistory:
      "The term 'adverb' comes from Latin 'adverbium' meaning 'added to the verb'. Historically, many English adverbs developed from Old English and Middle English forms, with the '-ly' suffix evolving from the Old English '-lic' (meaning 'like' or 'having the form of').",
  },

  // A1 Level - Basic Adverbs (Beginner)
  // Reference: Common European Framework A1 descriptors
  A1: {
    basicAdverbs: {
      definition:
        "Essential adverbs for basic communication and daily activities. These are the most frequently used adverbs in English, appearing in elementary textbooks and basic conversation.",
      examples: [
        "now",
        "here",
        "there",
        "very",
        "too",
        "well",
        "badly",
        "fast",
        "good",
        "bad",
        "yes",
        "no",
      ],
      usage:
        "I am here now. The food is very good. He runs fast. She sings well.",
      learningObjectives: [
        "Recognize basic adverbs in simple sentences",
        "Use time adverbs (now, today, yesterday) correctly",
        "Apply degree adverbs (very, too) with adjectives",
        "Distinguish between good/well usage",
      ],
      commonMistakes: [
        "Using 'good' instead of 'well' (He sings good ❌ → He sings well ✅)",
        "Incorrect position of 'very' (Very he is tall ❌ → He is very tall ✅)",
      ],
      references: [
        "English File Elementary (Oxford University Press)",
        "New Headway Elementary (Oxford University Press)",
      ],
      cefrLevel: "A1",
      frequency: "high",
      register: "neutral",
    },
    timeAdverbs: {
      definition:
        "Basic time adverbs for simple time expressions, essential for indicating when actions occur in basic communication.",
      examples: [
        "now",
        "today",
        "yesterday",
        "tomorrow",
        "soon",
        "late",
        "early",
        "then",
        "first",
        "last",
      ],
      usage:
        "I am busy now. I will come tomorrow. Don't be late. Yesterday was fun.",
      learningObjectives: [
        "Express basic time relationships",
        "Sequence simple events",
        "Use present time markers correctly",
      ],
      commonMistakes: [
        "Confusing 'yesterday' and 'tomorrow'",
        "Using wrong tense with time adverbs",
      ],
      references: ["Interchange Intro (Cambridge University Press)"],
      cefrLevel: "A1",
      frequency: "high",
      register: "neutral",
    },
    placeAdverbs: {
      definition:
        "Basic place adverbs for location and direction, fundamental for describing position and movement in space.",
      examples: [
        "here",
        "there",
        "inside",
        "outside",
        "up",
        "down",
        "home",
        "away",
        "near",
        "far",
      ],
      usage: "Come here. Go outside. I am going home. The cat is inside.",
      learningObjectives: [
        "Indicate basic locations",
        "Give simple directions",
        "Describe position relative to speaker",
      ],
      commonMistakes: [
        "Confusing 'here' and 'there' from speaker's perspective",
        "Using 'to home' instead of 'home' (going to home ❌ → going home ✅)",
      ],
      references: ["Straightforward Elementary (Macmillan)"],
      cefrLevel: "A1",
      frequency: "high",
      register: "neutral",
    },
    mannerAdverbs: {
      definition:
        "Basic manner adverbs for simple descriptions of how actions are performed.",
      examples: [
        "well",
        "badly",
        "fast",
        "slowly",
        "hard",
        "easily",
        "carefully",
        "quickly",
      ],
      usage: "He speaks well. She runs fast. Work hard. Drive carefully.",
      learningObjectives: [
        "Describe basic actions",
        "Use well/badly correctly",
        "Form simple -ly adverbs",
      ],
      commonMistakes: [
        "Using adjective form instead of adverb (She sings beautiful ❌ → She sings beautifully ✅)",
        "Confusing 'good' and 'well'",
      ],
      references: ["Elementary Language Practice (Macmillan)"],
      cefrLevel: "A1",
      frequency: "high",
      register: "neutral",
    },
  },

  // A2 Level - Elementary Adverbs
  // Reference: CEFR A2 descriptors for grammatical accuracy
  A2: {
    frequencyAdverbs: {
      definition:
        "Adverbs that express how often something happens, crucial for describing habits and routines. These follow specific position rules in English sentence structure.",
      examples: [
        "always",
        "usually",
        "often",
        "sometimes",
        "rarely",
        "never",
        "hardly ever",
        "occasionally",
        "frequently",
        "seldom",
      ],
      usage:
        "I always eat breakfast. She sometimes visits us. We never smoke. He usually arrives on time.",
      learningObjectives: [
        "Express frequency and habits accurately",
        "Position frequency adverbs correctly in sentences",
        "Use frequency adverbs with different tenses",
        "Understand the frequency scale from always to never",
      ],
      commonMistakes: [
        "Wrong position: 'I always am late' ❌ → 'I am always late' ✅",
        "Double negatives: 'I don't never go' ❌ → 'I never go' ✅",
      ],
      references: [
        "Murphy, R. (2019). English Grammar in Use (Elementary)",
        "Swan, M. (2016). Practical English Usage",
      ],
      cefrLevel: "A2",
      frequency: "high",
      register: "neutral",
    },
    degreeAdverbs: {
      definition:
        "Adverbs that modify the intensity or degree of adjectives and other adverbs, essential for expressing precise meanings and emphasis.",
      examples: [
        "very",
        "quite",
        "too",
        "so",
        "really",
        "pretty",
        "a little",
        "a bit",
        "rather",
        "fairly",
        "enough",
      ],
      usage:
        "The food is very good. It's quite expensive. It's too hot. She's really nice. It's pretty difficult.",
      learningObjectives: [
        "Modify adjectives for precise meaning",
        "Express different degrees of intensity",
        "Use 'too' vs 'very' correctly",
        "Position degree adverbs accurately",
      ],
      commonMistakes: [
        "Using 'too' when meaning 'very': 'The book is too good' (when not expressing excess)",
        "Wrong position: 'She quite is tall' ❌ → 'She is quite tall' ✅",
      ],
      references: [
        "Cambridge English Grammar (Carter & McCarthy)",
        "Oxford Learner's Grammar (Eastwood)",
      ],
      cefrLevel: "A2",
      frequency: "high",
      register: "neutral",
    },
    expandedTimeAdverbs: {
      definition:
        "More sophisticated time adverbs for detailed time expressions, including perfect tense markers and sequence indicators.",
      examples: [
        "already",
        "yet",
        "still",
        "just",
        "recently",
        "soon",
        "later",
        "before",
        "after",
        "ago",
        "since",
        "for",
      ],
      usage:
        "I have already eaten. She hasn't arrived yet. I just finished. We met recently. Call me later.",
      learningObjectives: [
        "Use perfect tense time markers correctly",
        "Express recent past and immediate future",
        "Sequence events in time",
        "Understand 'yet' in questions and negatives",
      ],
      commonMistakes: [
        "Using 'yet' in positive statements: 'I have yet finished' ❌ → 'I have already finished' ✅",
        "Wrong tense with 'just': 'I just eat' ❌ → 'I have just eaten' ✅",
      ],
      references: [
        "Practical English Usage (Swan)",
        "Grammar and Vocabulary for First Certificate (Norris)",
      ],
      cefrLevel: "A2",
      frequency: "high",
      register: "neutral",
    },
    expandedPlaceAdverbs: {
      definition:
        "More detailed place adverbs for comprehensive location and direction descriptions, including indefinite place markers.",
      examples: [
        "everywhere",
        "somewhere",
        "nowhere",
        "anywhere",
        "away",
        "back",
        "forward",
        "backward",
        "upstairs",
        "downstairs",
        "abroad",
        "overseas",
      ],
      usage:
        "I looked everywhere. Go away. Come back. He lives abroad. She went upstairs.",
      learningObjectives: [
        "Use indefinite place adverbs correctly",
        "Express movement and direction",
        "Understand some/any/no + where patterns",
        "Describe location changes",
      ],
      commonMistakes: [
        "Using 'anywhere' in positive statements: 'I can go anywhere' (should be 'somewhere' for positive)",
        "Confusing 'abroad' and 'aboard'",
      ],
      references: [
        "English Collocations in Use (O'Dell & McCarthy)",
        "Cambridge Essential Grammar in Use",
      ],
      cefrLevel: "A2",
      frequency: "medium",
      register: "neutral",
    },
  },

  // B1 Level - Intermediate Adverbs
  // Reference: CEFR B1 descriptors for range and control
  B1: {
    sophisticatedMannerAdverbs: {
      definition:
        "More sophisticated manner adverbs for detailed descriptions of actions, emotions, and behaviors. These adverbs allow for more precise and nuanced communication.",
      examples: [
        "carefully",
        "quickly",
        "slowly",
        "happily",
        "sadly",
        "angrily",
        "quietly",
        "loudly",
        "gently",
        "roughly",
        "politely",
        "rudely",
        "clearly",
        "obviously",
        "suddenly",
      ],
      usage:
        "She walked carefully down the stairs. He spoke angrily to his colleague. They laughed happily together. Please speak more quietly.",
      learningObjectives: [
        "Express detailed manner of actions",
        "Use -ly formation rules correctly",
        "Modify verbs with precision",
        "Compare different manners of action",
      ],
      commonMistakes: [
        "Spelling errors in formation: 'happyly' ❌ → 'happily' ✅",
        "Using adjective instead of adverb: 'She speaks clear' ❌ → 'She speaks clearly' ✅",
      ],
      references: [
        "Intermediate Language Practice (Vince)",
        "Oxford Word Skills Intermediate",
      ],
      cefrLevel: "B1",
      frequency: "medium",
      register: "neutral",
    },
    focusingAdverbs: {
      definition:
        "Adverbs that focus attention on specific parts of the sentence, used to emphasize, limit, or add information. These are crucial for sophisticated communication.",
      examples: [
        "only",
        "just",
        "even",
        "also",
        "too",
        "as well",
        "especially",
        "particularly",
        "mainly",
        "mostly",
        "simply",
        "merely",
        "exclusively",
      ],
      usage:
        "I only ate the salad. He even cleaned the garage. She also speaks French. This is particularly important.",
      learningObjectives: [
        "Emphasize specific sentence elements",
        "Use restrictive and additive focusing",
        "Position focusing adverbs correctly",
        "Understand scope of focus",
      ],
      commonMistakes: [
        "Wrong position affecting meaning: 'Only I called John' vs 'I only called John' vs 'I called only John'",
        "Using 'also' at sentence end: 'I like it also' ❌ → 'I also like it' ✅",
      ],
      references: [
        "Advanced Grammar in Use (Hewings)",
        "Focus on Advanced English Grammar (Fuchs & Bonner)",
      ],
      cefrLevel: "B1",
      frequency: "medium",
      register: "neutral",
    },
    commentAdverbs: {
      definition:
        "Adverbs that express the speaker's attitude, opinion, or evaluation about the content of the sentence. These are essential for expressing stance and perspective.",
      examples: [
        "fortunately",
        "unfortunately",
        "honestly",
        "frankly",
        "obviously",
        "clearly",
        "naturally",
        "surprisingly",
        "apparently",
        "evidently",
        "presumably",
        "arguably",
      ],
      usage:
        "Fortunately, it didn't rain. Honestly, I don't like it. Obviously, he was wrong. Surprisingly, she agreed.",
      learningObjectives: [
        "Express speaker attitude and stance",
        "Use sentence-level modification",
        "Convey probability and certainty",
        "Add evaluative comments to statements",
      ],
      commonMistakes: [
        "Overusing in formal writing",
        "Wrong comma usage: 'Obviously he was wrong' ❌ → 'Obviously, he was wrong' ✅",
      ],
      references: [
        "Academic Writing for Graduate Students (Swales & Feak)",
        "Grammar for Academic Writers (Morley)",
      ],
      cefrLevel: "B1",
      frequency: "medium",
      register: "neutral",
    },
    linkingAdverbs: {
      definition:
        "Adverbs that connect ideas and show logical relationships between sentences or clauses, essential for coherent discourse and argumentation.",
      examples: [
        "however",
        "therefore",
        "moreover",
        "furthermore",
        "nevertheless",
        "consequently",
        "meanwhile",
        "otherwise",
        "thus",
        "hence",
        "accordingly",
        "similarly",
      ],
      usage:
        "However, I disagree with your proposal. Therefore, we must take action. Moreover, it's too expensive for our budget.",
      learningObjectives: [
        "Connect ideas logically",
        "Show contrast, addition, and result",
        "Structure coherent arguments",
        "Use appropriate punctuation with linking adverbs",
      ],
      commonMistakes: [
        "Using as coordinators: 'I was tired however I continued' ❌ → 'I was tired; however, I continued' ✅",
        "Wrong punctuation patterns",
      ],
      references: [
        "Academic Writing Skills (Whitaker)",
        "Writing Academic English (Oshima & Hogue)",
      ],
      cefrLevel: "B1",
      frequency: "medium",
      register: "formal",
    },
  },

  // B2 Level - Upper Intermediate Adverbs
  // Reference: CEFR B2 descriptors for accuracy and range
  B2: {
    advancedDegreeAdverbs: {
      definition:
        "Sophisticated degree adverbs for precise expression of intensity, allowing for nuanced gradation and emphasis in both spoken and written discourse.",
      examples: [
        "extremely",
        "incredibly",
        "exceptionally",
        "remarkably",
        "particularly",
        "unusually",
        "absolutely",
        "completely",
        "totally",
        "utterly",
        "thoroughly",
        "considerably",
        "substantially",
        "moderately",
      ],
      usage:
        "The performance was extremely impressive. She is incredibly talented. It's absolutely essential. The results were remarkably consistent.",
      learningObjectives: [
        "Express precise degrees of intensity",
        "Use gradable vs non-gradable adjective combinations",
        "Employ sophisticated vocabulary for emphasis",
        "Understand register implications of degree adverbs",
      ],
      commonMistakes: [
        "Using degree adverbs with non-gradable adjectives: 'very unique' ❌ → 'absolutely unique' ✅",
        "Overuse leading to weak writing style",
      ],
      references: [
        "English Vocabulary in Use Upper-Intermediate (McCarthy & O'Dell)",
        "Cambridge Grammar for PET",
      ],
      cefrLevel: "B2",
      frequency: "medium",
      register: "formal",
    },
    timeSequenceAdverbs: {
      definition:
        "Adverbs that show sequence and timing relationships in complex narratives and explanations, crucial for academic and professional communication.",
      examples: [
        "previously",
        "subsequently",
        "meanwhile",
        "simultaneously",
        "concurrently",
        "eventually",
        "ultimately",
        "finally",
        "initially",
        "originally",
        "formerly",
        "thereafter",
        "beforehand",
        "afterwards",
      ],
      usage:
        "Previously, I worked in marketing. Subsequently, he moved to London. Meanwhile, the team continued working. Eventually, we found a solution.",
      learningObjectives: [
        "Sequence complex events and ideas",
        "Show temporal relationships clearly",
        "Structure coherent narratives",
        "Use formal time expressions appropriately",
      ],
      commonMistakes: [
        "Confusing 'eventually' with 'possibly'",
        "Wrong register: using 'then' instead of 'subsequently' in formal writing",
      ],
      references: [
        "Academic Vocabulary in Use (McCarthy & O'Dell)",
        "Skills for First Certificate Reading",
      ],
      cefrLevel: "B2",
      frequency: "medium",
      register: "formal",
    },
    evaluativeAdverbs: {
      definition:
        "Adverbs that express evaluation, judgment, or assessment of actions, processes, or outcomes, essential for critical thinking and professional communication.",
      examples: [
        "appropriately",
        "adequately",
        "satisfactorily",
        "unsatisfactorily",
        "effectively",
        "ineffectively",
        "efficiently",
        "inefficiently",
        "successfully",
        "unsuccessfully",
        "properly",
        "improperly",
        "correctly",
        "incorrectly",
      ],
      usage:
        "He responded appropriately to the crisis. The system operates efficiently. She performed the task satisfactorily.",
      learningObjectives: [
        "Evaluate performance and outcomes",
        "Express professional judgments",
        "Use comparative evaluation",
        "Understand positive/negative evaluation pairs",
      ],
      commonMistakes: [
        "Forming negatives incorrectly: 'uneffectively' ❌ → 'ineffectively' ✅",
        "Register mismatch in evaluation contexts",
      ],
      references: [
        "Business Vocabulary in Use (Mascull)",
        "Professional English in Use",
      ],
      cefrLevel: "B2",
      frequency: "medium",
      register: "formal",
    },
    modalAdverbs: {
      definition:
        "Adverbs that express modality, possibility, probability, or certainty, allowing speakers to hedge, express doubt, or show confidence in their statements.",
      examples: [
        "probably",
        "possibly",
        "certainly",
        "definitely",
        "maybe",
        "perhaps",
        "surely",
        "undoubtedly",
        "presumably",
        "allegedly",
        "supposedly",
        "apparently",
        "conceivably",
        "inevitably",
      ],
      usage:
        "He will probably arrive late. It's certainly possible to complete this project. Maybe she's right about the deadline.",
      learningObjectives: [
        "Express degrees of certainty and probability",
        "Hedge statements appropriately",
        "Show epistemic stance in communication",
        "Use modal adverbs in academic writing",
      ],
      commonMistakes: [
        "Position errors with 'maybe': 'He maybe will come' ❌ → 'Maybe he will come' ✅",
        "Overuse of tentative language",
      ],
      references: [
        "Grammar and Vocabulary for Advanced (Hewings)",
        "Academic Writing Skills 3 (Trzeciak & Mackenzie)",
      ],
      cefrLevel: "B2",
      frequency: "medium",
      register: "neutral",
    },
  },

  // C1 Level - Advanced Adverbs
  // Reference: CEFR C1 descriptors for flexibility and precision
  C1: {
    literaryAdverbs: {
      definition:
        "Sophisticated adverbs used in literature, creative writing, and formal discourse to create vivid descriptions and convey complex meanings with stylistic flair.",
      examples: [
        "eloquently",
        "profoundly",
        "subtly",
        "delicately",
        "meticulously",
        "arduously",
        "tenaciously",
        "resiliently",
        "gracefully",
        "majestically",
        "mysteriously",
        "hauntingly",
        "poignantly",
        "wistfully",
      ],
      usage:
        "She spoke eloquently about human rights. He examined the evidence meticulously. They persevered tenaciously despite numerous obstacles.",
      learningObjectives: [
        "Employ sophisticated descriptive language",
        "Understand connotative meanings and register",
        "Create stylistic effects in writing",
        "Recognize literary and formal register markers",
      ],
      commonMistakes: [
        "Overuse in inappropriate contexts",
        "Wrong collocations with sophisticated adverbs",
      ],
      references: [
        "Advanced English Grammar (Hewings)",
        "The Elements of Style (Strunk & White)",
        "Oxford Guide to Effective Writing & Speaking",
      ],
      cefrLevel: "C1",
      frequency: "low",
      register: "literary",
    },
    academicAdverbs: {
      definition:
        "Adverbs commonly used in academic and scholarly writing to discuss research methodology, theoretical frameworks, and analytical processes with precision and objectivity.",
      examples: [
        "methodologically",
        "theoretically",
        "empirically",
        "systematically",
        "analytically",
        "conceptually",
        "critically",
        "objectively",
        "rigorously",
        "comprehensively",
        "extensively",
        "explicitly",
        "implicitly",
        "fundamentally",
      ],
      usage:
        "The study was conducted methodologically. The data was analyzed systematically. The research approaches the problem critically and comprehensively.",
      learningObjectives: [
        "Use academic register appropriately",
        "Express research and analytical processes",
        "Demonstrate scholarly objectivity",
        "Structure academic arguments effectively",
      ],
      commonMistakes: [
        "Overuse creating pompous style",
        "Using in inappropriate informal contexts",
      ],
      references: [
        "Academic Writing for Graduate Students (Swales & Feak)",
        "They Say/I Say: Academic Writing (Graff & Birkenstein)",
        "The Academic Writer's Handbook (Rosen & Behrens)",
      ],
      cefrLevel: "C1",
      frequency: "low",
      register: "academic",
    },
    discourseAdverbs: {
      definition:
        "Adverbs that organize and structure discourse, arguments, and complex explanations, essential for sophisticated written and spoken communication.",
      examples: [
        "conversely",
        "alternatively",
        "additionally",
        "consequently",
        "subsequently",
        "preliminarily",
        "tentatively",
        "provisionally",
        "incidentally",
        "coincidentally",
        "correspondingly",
        "respectively",
        "simultaneously",
        "notwithstanding",
      ],
      usage:
        "Conversely, the results showed opposite trends. Additionally, we discovered unexpected correlations. The findings must be interpreted tentatively pending further research.",
      learningObjectives: [
        "Structure complex arguments and explanations",
        "Show sophisticated logical relationships",
        "Organize discourse coherently",
        "Use appropriate academic and formal markers",
      ],
      commonMistakes: [
        "Confusing similar discourse markers",
        "Inappropriate register mixing",
      ],
      references: [
        "Coherence in Written English (Johns)",
        "Academic Writing: A Handbook (Rosen & Behrens)",
      ],
      cefrLevel: "C1",
      frequency: "low",
      register: "formal",
    },
    intensifyingAdverbs: {
      definition:
        "Advanced intensifying adverbs for sophisticated emphasis and precision, allowing for nuanced expression of degree and impact in professional and academic contexts.",
      examples: [
        "exceptionally",
        "extraordinarily",
        "phenomenally",
        "astoundingly",
        "staggeringly",
        "overwhelmingly",
        "devastatingly",
        "breathtakingly",
        "remarkably",
        "conspicuously",
        "dramatically",
        "markedly",
        "substantially",
        "considerably",
      ],
      usage:
        "The performance was exceptionally outstanding. The results were extraordinarily significant. The impact was devastatingly negative on local communities.",
      learningObjectives: [
        "Express sophisticated degrees of intensity",
        "Create dramatic and emphatic effects",
        "Use appropriate collocations with intensifiers",
        "Understand register and context appropriateness",
      ],
      commonMistakes: [
        "Overuse leading to hyperbolic style",
        "Wrong collocations with non-gradable adjectives",
      ],
      references: [
        "Advanced Grammar in Use (Hewings)",
        "English Vocabulary in Use Advanced (McCarthy & O'Dell)",
      ],
      cefrLevel: "C1",
      frequency: "low",
      register: "formal",
    },
  },

  // C2 Level - Mastery Adverbs
  // Reference: CEFR C2 descriptors for mastery and native-like control
  C2: {
    rareAndObscure: {
      definition:
        "Extremely rare and sophisticated adverbs for mastery-level expression, demonstrating native-like command of English vocabulary and stylistic nuance.",
      examples: [
        "serendipitously",
        "lugubriously",
        "effervescently",
        "obstreperously",
        "pulchritudinously",
        "perspicaciously",
        "pusillanimously",
        "magnanimously",
        "mellifluously",
        "surreptitiously",
        "ubiquitously",
        "vicariously",
        "inexorably",
        "ineffably",
      ],
      usage:
        "The breakthrough was discovered serendipitously during routine experiments. He spoke lugubriously about the lost opportunities. She moved effervescently through the social gathering.",
      learningObjectives: [
        "Demonstrate exceptional vocabulary range",
        "Use sophisticated stylistic devices",
        "Show mastery of register and connotation",
        "Create powerful rhetorical effects",
      ],
      commonMistakes: [
        "Using in inappropriate contexts for effect",
        "Mispronunciation of complex forms",
      ],
      references: [
        "The Oxford English Dictionary",
        "Fowler's Modern English Usage",
        "The King's English (Fowler)",
      ],
      cefrLevel: "C2",
      frequency: "low",
      register: "literary",
    },
    domainSpecific: {
      definition:
        "Highly specialized adverbs for specific professional domains, demonstrating expertise and precision in technical and professional communication.",
      legal: [
        "jurisprudentially",
        "constitutionally",
        "legislatively",
        "judicially",
        "statutorily",
        "procedurally",
        "substantively",
        "administratively",
      ],
      medical: [
        "pathologically",
        "physiologically",
        "neurologically",
        "cardiologically",
        "dermatologically",
        "psychiatrically",
        "diagnostically",
        "therapeutically",
      ],
      scientific: [
        "molecularly",
        "atomically",
        "cellularly",
        "genetically",
        "biochemically",
        "thermodynamically",
        "quantitatively",
        "qualitatively",
      ],
      artistic: [
        "aesthetically",
        "artistically",
        "creatively",
        "expressively",
        "innovatively",
        "compositionally",
        "harmonically",
        "rhythmically",
      ],
      learningObjectives: [
        "Use precise technical vocabulary",
        "Demonstrate domain expertise through language",
        "Communicate effectively with specialists",
        "Understand field-specific conventions",
      ],
      references: [
        "Professional English in Use series (Cambridge)",
        "Domain-specific dictionaries and glossaries",
      ],
      cefrLevel: "C2",
      frequency: "low",
      register: "technical",
    },
    stylisticAdverbs: {
      definition:
        "Adverbs for sophisticated stylistic expression and nuanced communication, allowing for masterful control of tone, register, and rhetorical effect.",
      formal: [
        "distinguishedly",
        "illustriously",
        "prestigiously",
        "ceremoniously",
        "solemnly",
        "diplomatically",
        "officially",
        "authoritatively",
      ],
      poetic: [
        "ethereally",
        "transcendently",
        "sublimely",
        "mystically",
        "enigmatically",
        "lyrically",
        "melodiously",
        "harmoniously",
      ],
      ironic: [
        "ostensibly",
        "supposedly",
        "allegedly",
        "purportedly",
        "seemingly",
        "apparently",
        "presumably",
        "evidently",
      ],
      learningObjectives: [
        "Master stylistic variation and effect",
        "Control tone and register precisely",
        "Use irony and subtle meaning effectively",
        "Demonstrate native-like stylistic competence",
      ],
      references: [
        "Style: Ten Lessons in Clarity and Grace (Williams)",
        "The Sense of Style (Pinker)",
      ],
      cefrLevel: "C2",
      frequency: "low",
      register: "literary",
    },
    contextualMastery: {
      definition:
        "Mastery of adverb usage across all contexts and registers, demonstrating complete command of English adverbial system and its stylistic possibilities.",
      formalWriting:
        "Precise, sophisticated adverbs for academic and professional contexts requiring objectivity and precision",
      creativeWriting:
        "Expressive, nuanced adverbs for literary and artistic expression creating vivid imagery and emotional impact",
      casualSpeech:
        "Natural, conversational adverbs for everyday communication showing native-like fluency",
      technicalWriting:
        "Specific, accurate adverbs for specialized documentation requiring absolute precision",
      learningObjectives: [
        "Adapt register and style to any context",
        "Show complete control of adverbial system",
        "Use adverbs for specific rhetorical purposes",
        "Demonstrate native-like intuition about appropriateness",
      ],
      references: [
        "The Cambridge Encyclopedia of the English Language (Crystal)",
        "Usage guides by leading authorities",
      ],
      cefrLevel: "C2",
      frequency: "variable",
      register: "all",
    },
  },

  // Original Adverbs Section (Preserved)
  Adverbs: {
    types: {
      manner: {
        description: "Chỉ cách thức hành động xảy ra – thường trả lời 'How?'",
        examples: ["quickly", "slowly", "carefully", "happily", "well"],
      },
      time: {
        description: "Chỉ thời gian xảy ra hành động",
        examples: ["now", "soon", "yesterday", "already", "recently"],
      },
      place: {
        description: "Chỉ nơi chốn xảy ra hành động",
        examples: ["here", "there", "everywhere", "outside", "above"],
      },
      frequency: {
        description: "Chỉ tần suất",
        examples: [
          "always",
          "usually",
          "often",
          "sometimes",
          "rarely",
          "never",
        ],
      },
      degree: {
        description: "Chỉ mức độ, cường độ",
        examples: ["very", "quite", "too", "almost", "completely", "enough"],
      },
      focusing: {
        description: "Dùng để nhấn mạnh một phần cụ thể của câu",
        examples: ["only", "even", "also", "mainly", "just"],
      },
      interrogative: {
        description: "Dùng để hỏi – thường đứng đầu câu",
        examples: ["how", "when", "where", "why"],
      },
      relative: {
        description:
          "Liên kết mệnh đề – giống interrogative adverbs nhưng không dùng để hỏi",
        examples: ["where", "when", "why (in relative clauses)"],
      },
      comment: {
        description: "Cho biết quan điểm, thái độ của người nói",
        examples: ["fortunately", "honestly", "surprisingly", "sadly"],
      },
    },
    usage: [
      {
        type: "Bổ nghĩa cho động từ",
        example: "She sings **beautifully**.",
      },
      {
        type: "Bổ nghĩa cho tính từ",
        example: "He is **very** tall.",
      },
      {
        type: "Bổ nghĩa cho trạng từ khác",
        example: "She works **incredibly quickly**.",
      },
      {
        type: "Bổ nghĩa cho cả câu",
        example: "**Fortunately**, no one was hurt.",
      },
    ],
    recognition: [
      "Thường kết thúc bằng **-ly**: quickly, slowly, happily (nhưng có ngoại lệ: well, fast, hard)",
      "Đứng sau động từ thường: He ran **fast**.",
      "Đứng trước tính từ hoặc trạng từ khác: **very** happy, **too** late",
      "Đứng đầu hoặc cuối câu với comment/degree adverbs: **Sadly**, he left.",
      "Vị trí của trạng từ có thể thay đổi tùy loại (trạng từ chỉ tần suất thường đứng trước động từ thường): She **always** arrives early.",
    ],
    examples: {
      manner: ["She danced **gracefully**.", "He speaks **loudly**."],
      time: ["I saw her **yesterday**.", "They will arrive **soon**."],
      place: ["Wait **here**.", "The kids are playing **outside**."],
      frequency: ["He **always** forgets his keys.", "We **rarely** go out."],
      degree: ["I'm **completely** exhausted.", "It's **too** hot today."],
      focusing: [
        "I **only** ate the salad.",
        "He **even** cleaned the garage.",
      ],
      interrogative: ["**When** did you arrive?", "**Why** are you late?"],
      comment: [
        "**Honestly**, I don't like the idea.",
        "**Luckily**, it didn't rain.",
      ],
    },
    notes: [
      "Một số trạng từ giống với tính từ (fast, hard, late): He runs **fast** (adv), it's a **fast** car (adj).",
      "Trạng từ thường không chia thì, không có số nhiều.",
      "Không nhầm 'good' (adj) và 'well' (adv): She is a **good** student. She sings **well**.",
      "Một số trạng từ có vị trí đặc biệt: **never** đứng trước động từ chính: I **never** smoke.",
      "Tránh lỗi: ❌ He runs quick → ✅ He runs **quickly** (nếu muốn dùng adv)",
    ],
  },

  // Advanced Adverb Patterns and Constructions
  advancedAdverbPatterns: {
    adverbFormation: {
      definition: "How adverbs are formed from other parts of speech.",
      fromAdjectives: {
        rule: "Add -ly to most adjectives",
        examples: [
          "quick → quickly",
          "happy → happily",
          "careful → carefully",
          "beautiful → beautifully",
        ],
        exceptions: [
          "good → well",
          "fast → fast",
          "hard → hard",
          "late → late",
        ],
      },
      fromNouns: {
        rule: "Add -ly to some nouns",
        examples: [
          "day → daily",
          "week → weekly",
          "month → monthly",
          "year → yearly",
        ],
      },
      irregular: {
        definition: "Adverbs that don't follow the -ly pattern",
        examples: [
          "well",
          "fast",
          "hard",
          "late",
          "early",
          "high",
          "low",
          "deep",
          "wide",
        ],
      },
    },
    adverbPhrases: {
      definition: "Groups of words that function as adverbs.",
      prepositionalPhrases: {
        examples: [
          "in the morning",
          "at home",
          "by car",
          "with care",
          "without hesitation",
        ],
        usage: "I work in the morning. She drives by car.",
      },
      infinitivePhrases: {
        examples: [
          "to be honest",
          "to tell the truth",
          "to be fair",
          "to be sure",
        ],
        usage: "To be honest, I don't like it. To tell the truth, I was late.",
      },
      participlePhrases: {
        examples: [
          "speaking frankly",
          "generally speaking",
          "strictly speaking",
        ],
        usage: "Speaking frankly, I disagree. Generally speaking, it's true.",
      },
    },
    adverbClauses: {
      definition: "Dependent clauses that function as adverbs.",
      time: {
        examples: [
          "when I arrived",
          "before you leave",
          "after she finished",
          "while he was working",
        ],
        usage:
          "When I arrived, the meeting had started. I'll call you before you leave.",
      },
      manner: {
        examples: ["as if he knew", "as though she cared", "the way you want"],
        usage: "He acted as if he knew everything. Do it the way you want.",
      },
      reason: {
        examples: ["because I was tired", "since you asked", "as it was late"],
        usage:
          "I left early because I was tired. Since you asked, I'll tell you.",
      },
      condition: {
        examples: [
          "if you want",
          "unless you object",
          "provided that you agree",
        ],
        usage: "I'll help you if you want. Unless you object, we'll proceed.",
      },
    },
  },

  // Adverb Collocations and Fixed Expressions
  adverbCollocations: {
    commonPairs: [
      "speak clearly",
      "listen carefully",
      "work hard",
      "think deeply",
      "run fast",
      "walk slowly",
      "drive safely",
      "eat quickly",
      "sleep soundly",
      "live happily",
      "die peacefully",
      "grow naturally",
      "learn quickly",
      "remember easily",
      "forget completely",
      "understand fully",
    ],
    businessCollocations: [
      "work efficiently",
      "communicate effectively",
      "respond promptly",
      "act professionally",
      "think strategically",
      "plan carefully",
      "execute perfectly",
      "perform excellently",
      "manage effectively",
    ],
    academicCollocations: [
      "analyze critically",
      "think logically",
      "reason clearly",
      "argue persuasively",
      "write clearly",
      "research thoroughly",
      "study systematically",
      "examine carefully",
      "evaluate objectively",
    ],
    emotionalCollocations: [
      "love deeply",
      "care genuinely",
      "feel strongly",
      "react emotionally",
      "respond warmly",
      "speak kindly",
      "act generously",
      "live passionately",
      "dream big",
    ],
  },

  // Adverb Usage in Different Genres
  adverbGenreUsage: {
    fiction: {
      description: "Adverbs used in creative writing and storytelling.",
      examples: [
        "mysteriously",
        "enchantingly",
        "hauntingly",
        "whimsically",
        "melancholically",
        "ethereally",
        "sinisterly",
        "magically",
      ],
      techniques: [
        "sensory adverbs",
        "emotional adverbs",
        "atmospheric adverbs",
      ],
    },
    journalism: {
      description: "Adverbs used in news reporting and articles.",
      examples: [
        "reportedly",
        "allegedly",
        "officially",
        "unofficially",
        "recently",
        "previously",
        "currently",
        "formerly",
      ],
      principles: ["objectivity", "accuracy", "clarity", "neutrality"],
    },
    academic: {
      description: "Adverbs used in scholarly writing and research.",
      examples: [
        "methodologically",
        "theoretically",
        "empirically",
        "systematically",
        "analytically",
        "conceptually",
        "critically",
        "objectively",
      ],
      characteristics: ["precise", "objective", "technical", "formal"],
    },
    advertising: {
      description: "Adverbs used in marketing and promotional content.",
      examples: [
        "amazingly",
        "incredibly",
        "fantastically",
        "wonderfully",
        "perfectly",
        "excellently",
        "superiorly",
        "premiumly",
      ],
      strategies: [
        "positive adverbs",
        "comparative adverbs",
        "superlative adverbs",
      ],
    },
  },

  // Adverb Frequency and Register
  adverbFrequencyAndRegister: {
    highFrequency: {
      definition: "Most commonly used adverbs in everyday English.",
      examples: [
        "very",
        "really",
        "quite",
        "too",
        "so",
        "well",
        "now",
        "here",
        "there",
        "always",
      ],
      usage: "Used in all registers and contexts",
    },
    mediumFrequency: {
      definition: "Moderately common adverbs for specific contexts.",
      examples: [
        "carefully",
        "quickly",
        "slowly",
        "happily",
        "sadly",
        "angrily",
        "quietly",
        "loudly",
      ],
      usage: "Common in formal and informal contexts",
    },
    lowFrequency: {
      definition: "Rare or specialized adverbs for specific purposes.",
      examples: [
        "serendipitously",
        "lugubriously",
        "effervescently",
        "obstreperously",
        "pulchritudinously",
      ],
      usage: "Used in academic, literary, or specialized contexts",
    },
    registerSpecific: {
      formal: [
        "distinguishedly",
        "esteemedly",
        "renownedly",
        "prestigiously",
        "illustriously",
      ],
      informal: [
        "coolly",
        "awesomely",
        "amazingly",
        "fantastically",
        "terrifically",
      ],
      technical: [
        "algorithmically",
        "biochemically",
        "cybernetically",
        "demographically",
        "epidemiologically",
      ],
      literary: [
        "ethereally",
        "transcendently",
        "sublimely",
        "mystically",
        "enigmatially",
      ],
    },
  },

  // Adverb Exercises and Practice Activities
  adverbExercises: {
    beginner: [
      "Complete the sentence: He runs ___ (fast/slow)",
      "Choose the correct adverb: She sings ___ (good/well)",
      "Match adverbs to actions",
      "Describe daily activities with adverbs",
    ],
    intermediate: [
      "Place adverbs in correct positions",
      "Use frequency adverbs correctly",
      "Create adverb clauses",
      "Practice adverb-adjective combinations",
    ],
    advanced: [
      "Analyze adverb usage in texts",
      "Create sophisticated descriptions",
      "Practice adverb reduction",
      "Study register-appropriate adverbs",
    ],
    interactive: [
      "Adverb guessing games",
      "Action description challenges",
      "Adverb position competitions",
      "Collocation matching exercises",
    ],
  },

  // Adverb Assessment and Evaluation
  adverbAssessment: {
    criteria: [
      "Accuracy of adverb choice",
      "Correct adverb position",
      "Appropriate register usage",
      "Variety and sophistication",
      "Collocation accuracy",
    ],
    rubrics: {
      beginner: "Basic adverbs, simple position, limited variety",
      intermediate: "Good variety, correct position, appropriate usage",
      advanced: "Sophisticated choices, complex position, register awareness",
      mastery: "Exceptional variety, perfect position, nuanced usage",
    },
    commonErrors: [
      "Incorrect adverb position",
      "Overuse of common adverbs",
      "Inappropriate register",
      "Poor collocation choices",
      "Missing intensifiers or modifiers",
    ],
  },

  // Adverb Learning Strategies
  adverbLearningStrategies: [
    "Practice adverb position with real actions and descriptions",
    "Create adverb lists for different categories (manner, time, place, frequency)",
    "Use adverb flashcards with pictures and examples",
    "Practice adverb formation from adjectives regularly",
    "Read extensively to encounter adverbs in context",
    "Write descriptive paragraphs using various adverb types",
    "Play adverb games (describing actions, people, places)",
    "Study adverb collocations and common combinations",
  ],

  // Adverb in Language Tests
  adverbInTests: [
    "TOEFL/IELTS: Identify and correct adverb position errors in reading and writing sections",
    "Cambridge: Use advanced adverbs in writing tasks and speaking assessments",
    "SAT: Recognize subtle differences in adverb meaning and usage",
    "GRE: Understand complex adverb relationships and connotations",
    "GMAT: Apply adverb logic in sentence correction questions",
  ],
};

export default AdverbData;

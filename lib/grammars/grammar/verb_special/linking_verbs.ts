import { LinkingVerbsType } from "@/types/grammars/grammar/verb_special/linking_verbs";

export const LinkingVerbsData: LinkingVerbsType = {
  definition: {
    core_concept:
      "Linking verbs are verbs that connect the subject of a sentence to a subject complement — a word or phrase that describes or identifies the subject.",
    grammatical_status:
      "They do not express action but rather a state or condition. Commonly followed by adjectives or nouns.",
    linguistic_significance:
      "They serve to equate or describe the subject rather than depict an action.",
    historical_development:
      "Derived from Old and Middle English copula and stative verb roots, with be as the oldest linking verb in English.",
    semantic_function:
      "Linking verbs establish relationships between entities and their properties, creating predicate-argument structures that form the foundation of descriptive and identificational statements.",
    syntactic_properties:
      "Syntactically, linking verbs take obligatory complements that are co-referential with the subject, forming predicative constructions essential to sentence completeness and semantic coherence.",
  },

  linking_verbs_vocab: {
    be_verbs: ["am", "is", "are", "was", "were", "be", "been", "being"],
    sensory_linking_verbs: ["look", "sound", "smell", "taste", "feel"],
    change_of_state_verbs: [
      "become",
      "get",
      "grow",
      "turn",
      "go",
      "come",
      "fall",
    ],
    verbs_of_appearance: ["seem", "appear", "prove", "remain", "stay", "keep"],
    emotional_state_verbs: ["feel", "seem", "appear", "look"],
    judgement_or_value_verbs: ["turn out", "prove", "come across as"],
    linking_phrasal_verbs: [
      "come off as",
      "end up",
      "wind up",
      "turn out",
      "make someone out to be",
    ],
    rare_or_formal_linking_verbs: [
      "constitute",
      "amount to",
      "represent",
      "signify",
    ],
    academic_linking_verbs: [
      "constitute",
      "represent",
      "signify",
      "denote",
      "exemplify",
      "embody",
      "manifest",
      "characterize",
      "typify",
      "epitomize",
    ],
    literary_linking_verbs: [
      "loom",
      "emerge",
      "materialize",
      "crystallize",
      "transform",
      "evolve",
      "metamorphose",
      "transcend",
    ],
  },

  foundational_characteristics: {
    non_action_nature:
      "They do not describe actions but states, conditions, or relationships.",
    subject_complement_requirement:
      "They require a subject complement (adjective, noun, or pronoun).",
    syntactic_position: "Appear after the subject and before the complement.",
    verb_forms:
      "Can change tense, aspect, or voice like normal verbs (e.g., *He has been tired*).",
    grammatical_constraints:
      "Do not take direct objects; what follows describes the subject.",
    copular_function:
      "Function as copulas connecting subject and predicate in equational or attributive constructions.",
    semantic_restrictions:
      "Limited to stative, resultative, and equational meanings; cannot express dynamic or agentive actions.",
  },

  theoretical_principles: {
    subject_link_complement:
      "Linking verbs link the subject to a complement that renames or describes it.",
    copular_verb_typology:
      "'Be' is the primary copula, but others like 'seem', 'become', 'appear', etc., function similarly.",
    semantic_roles:
      "They express identity (X is Y), condition (X becomes Y), or perception (X seems Y).",
    transformational_grammar_notes:
      "Linking verbs resist passive voice transformations and question inversion rules differ.",
    predicate_logic:
      "In logical terms, linking verbs establish relationships between arguments, forming predicative propositions of the form Predicate(Subject, Complement).",
    thematic_roles:
      "Assign Theme role to subject and Property/Identity role to complement, lacking Agent-Patient relations typical of transitive verbs.",
  },

  categories: {
    primary_linking_verbs: [
      "be",
      "am",
      "is",
      "are",
      "was",
      "were",
      "being",
      "been",
    ],
    verbs_of_change_or_transformation: [
      "become",
      "get",
      "grow",
      "turn",
      "go",
      "come",
      "fall (into)",
    ],
    verbs_of_perception: [
      "seem",
      "appear",
      "look",
      "sound",
      "feel",
      "smell",
      "taste",
    ],
    verbs_of_state_or_continuity: [
      "remain",
      "stay",
      "keep",
      "prove",
      "continue",
      "stand (as)",
    ],
    borderline_verbs: {
      dual_use_verbs: ["look", "feel", "smell", "taste", "grow", "get"],
      explanation:
        "Các động từ này vừa có thể là hành động (action) vừa có thể là liên kết (linking), tùy vào ngữ cảnh.",
      contextual_differences: [
        "Linking context requires complement describing subject",
        "Action context requires object receiving action",
        "Syntactic test: Can you substitute 'be'? If yes, it's linking",
        "Semantic test: Does it express sensory perception or state? If yes, likely linking",
      ],
    },
    specialized_categories: {
      epistemic_verbs: ["seem", "appear", "look", "sound"],
      evaluative_verbs: ["prove", "turn out", "end up"],
      resultative_verbs: ["become", "get", "grow", "turn"],
    },
  },

  usage: [
    {
      type: "Identity and classification",
      example: "She is a doctor.",
      advanced_examples: ["The winner was he.", "That seems a strange choice."],
      level: "A1-A2",
      function: "Establishing identity or classification",
      common_patterns: [
        "Subject + be + noun",
        "Subject + seem + adjective",
        "Subject + appear + to be + noun",
      ],
    },
    {
      type: "Condition or appearance",
      example: "He looks tired.",
      advanced_examples: [
        "The soup smells delicious.",
        "She became anxious during the meeting.",
      ],
      level: "A2-B1",
      function: "Describing physical or emotional states",
      common_patterns: [
        "Subject + look/sound/feel + adjective",
        "Subject + smell/taste + adjective",
      ],
    },
    {
      type: "Transformation or change",
      example: "The leaves turned yellow.",
      advanced_examples: [
        "He grew angry over time.",
        "The situation got worse overnight.",
      ],
      level: "B1-B2",
      function: "Expressing gradual or sudden changes",
      common_patterns: [
        "Subject + become/get/grow + adjective",
        "Subject + turn + color/state",
      ],
    },
    {
      type: "Continuing state",
      example: "They stayed calm.",
      advanced_examples: [
        "The room remained silent.",
        "He kept quiet despite the noise.",
      ],
      level: "B2-C1",
      function: "Expressing maintained states or conditions",
      common_patterns: [
        "Subject + remain/stay/keep + adjective",
        "Subject + continue + adjective",
      ],
    },
  ],

  levels: {
    A1: {
      focus: "Basic recognition of 'be' as a linking verb.",
      skills: [
        "Use simple sentences: 'She is happy.', 'They are students.'",
        "Differentiate between action and state: 'He is tall' vs. 'He runs fast'.",
      ],
      core_verbs: ["be", "am", "is", "are"],
      basic_patterns: [
        "I am + adjective",
        "She/He is + noun/adjective",
        "They are + adjective/noun",
      ],
      essential_knowledge: [
        "Understanding that 'be' connects subject to description",
        "Basic subject-verb agreement with 'be'",
        "Simple present tense forms of 'be'",
      ],
      common_mistakes: [
        "Confusion between 'is' and 'are'",
        "Omitting 'be' verb in sentences",
        "Using wrong form of 'be' with pronouns",
      ],
      practice_areas: [
        "Self-introduction using 'be'",
        "Describing family and friends",
        "Basic classroom language",
      ],
    },
    A2: {
      focus: "Expanded use of 'be' and basic perception verbs.",
      skills: [
        "Use 'look', 'feel', 'seem' in everyday contexts.",
        "Link subjects with adjectives or simple nouns: 'It looks nice.'",
      ],
      core_verbs: ["be", "look", "feel", "seem", "sound"],
      new_patterns: [
        "It looks + adjective",
        "I feel + adjective",
        "That seems + adjective",
      ],
      expanded_knowledge: [
        "Past tense forms: was/were",
        "Basic sensory linking verbs",
        "Simple descriptions using linking verbs",
      ],
      common_mistakes: [
        "Using adverbs instead of adjectives after linking verbs",
        "Confusion between 'look at' and 'look' (linking)",
        "Wrong past tense forms of 'be'",
      ],
      practice_areas: [
        "Describing weather and feelings",
        "Basic opinion expressions",
        "Simple narrative past tense",
      ],
    },
    B1: {
      focus: "Introduction to transformation and verbs of change.",
      skills: [
        "Use 'become', 'get', 'turn' to describe changes.",
        "Write simple descriptions with linking verbs in past tense.",
      ],
      core_verbs: ["become", "get", "turn", "grow", "stay", "remain"],
      complex_patterns: [
        "Subject + become + adjective/noun",
        "Subject + get + comparative",
        "Subject + turn + color",
      ],
      intermediate_knowledge: [
        "Change of state verbs",
        "Linking verbs in different tenses",
        "Comparative forms with linking verbs",
      ],
      common_mistakes: [
        "Using 'become' incorrectly with direct objects",
        "Confusion between 'get' (linking) and 'get' (receive)",
        "Incorrect usage of 'turn' with non-color adjectives",
      ],
      practice_areas: [
        "Describing personal development",
        "Narrating changes over time",
        "Expressing opinions about changes",
      ],
    },
    B2: {
      focus: "Mastery of linking verbs across tenses and voice.",
      skills: [
        "Avoid confusing linking and action verbs.",
        "Use linking verbs to vary sentence structure in essays.",
      ],
      core_verbs: ["appear", "prove", "end up", "come across as", "turn out"],
      advanced_patterns: [
        "Subject + appear + to be + noun",
        "Subject + prove + adjective",
        "Subject + end up + adjective/gerund",
      ],
      sophisticated_knowledge: [
        "Linking verbs in passive constructions",
        "Complex complement structures",
        "Register variations in linking verb usage",
      ],
      common_mistakes: [
        "Attempting to passivize linking verbs incorrectly",
        "Overusing simple linking verbs in formal writing",
        "Confusion between action and linking uses of verbs",
      ],
      practice_areas: [
        "Academic writing and essays",
        "Formal presentations",
        "Complex descriptive writing",
      ],
    },
    C1: {
      focus: "Stylistic and rhetorical use in formal writing.",
      skills: [
        "Control linking verbs for tone and nuance.",
        "Evaluate linking verb constructions in argumentation and narratives.",
      ],
      core_verbs: [
        "constitute",
        "represent",
        "signify",
        "epitomize",
        "embody",
        "manifest",
      ],
      expert_patterns: [
        "Subject + constitute + abstract noun",
        "Subject + represent + complex concept",
        "What this means is...",
      ],
      advanced_knowledge: [
        "Metaphorical and abstract uses",
        "Linking verbs in academic discourse",
        "Stylistic effects and register sensitivity",
      ],
      subtle_mistakes: [
        "Inappropriate register choices",
        "Overuse of formal linking verbs",
        "Subtle meaning differences between synonymous linking verbs",
      ],
      practice_areas: [
        "Academic research writing",
        "Professional presentations",
        "Critical analysis and evaluation",
      ],
    },
    C2: {
      focus: "Advanced grammar manipulation and recognition.",
      skills: [
        "Reformulate passive and active structures involving linking verbs.",
        "Use in persuasive and academic writing for precision and style.",
      ],
      core_verbs: [
        "crystallize",
        "materialize",
        "transcend",
        "epitomize",
        "exemplify",
      ],
      mastery_patterns: [
        "Inversion with linking verbs",
        "Cleft sentences with linking verbs",
        "Complex metaphorical usage",
      ],
      expert_knowledge: [
        "Literary and poetic applications",
        "Philosophical and abstract discourse",
        "Cross-linguistic awareness of copular systems",
      ],
      rare_mistakes: [
        "Inappropriate stylistic choices in literary contexts",
        "Subtle semantic distinctions in formal writing",
        "Complex syntactic manipulations",
      ],
      practice_areas: [
        "Creative writing and literature",
        "Philosophical discourse",
        "Advanced academic research",
      ],
    },
  },

  recognition_patterns: {
    form_clues: [
      "Often followed by adjectives: *She is tall*, *He became upset*.",
      "Never takes a direct object — only complements.",
      "Can be followed by noun phrases, prepositional phrases, or clauses",
    ],
    collocational_clues: [
      "Typical adjectives: happy, sick, tired, red, strange.",
      "Typical nouns: student, engineer, problem, issue.",
      "Common patterns: seem like, appear to be, become aware",
    ],
    semantic_clues: [
      "Express states rather than actions",
      "Describe properties or identities",
      "Show relationships between subject and complement",
    ],
    contextual_markers: [
      "Questions: 'What is he like?' vs 'What does he do?'",
      "Negation patterns: 'He doesn't seem happy' vs 'He doesn't work hard'",
      "Substitution test: Can you replace with 'be'?",
    ],
    discourse_markers: [
      "In descriptions and characterizations",
      "In definitions and explanations",
      "In evaluation and opinion expressions",
    ],
  },

  exceptions_and_irregularities: {
    action_verb_overlap: {
      description:
        "Some verbs like 'look' or 'feel' can be linking or action verbs depending on context.",
      examples: [
        "Linking: 'She looks tired.' (describes subject)",
        "Action: 'She looked at him.' (describes action)",
        "Linking: 'I feel happy.' (describes state)",
        "Action: 'I feel the fabric.' (describes action)",
      ],
      disambiguation_strategies: [
        "Check if verb can be replaced with 'be'",
        "Look for direct object (suggests action verb)",
        "Consider whether meaning is stative or dynamic",
        "Apply question test: 'How does she look?' vs 'Where does she look?'",
      ],
    },
    tense_shift_behavior: {
      description: "'Be' forms shift with tense and may confuse learners.",
      examples: [
        "Present: 'He is tired.' / Past: 'He was tired.'",
        "Present perfect: 'He has been tired all week.'",
        "Future: 'He will be tired after work.'",
      ],
      learning_difficulties: [
        "Irregular past tense forms (was/were)",
        "Agreement patterns across tenses",
        "Perfect tenses with 'been'",
        "Modal combinations: 'might be', 'could become'",
      ],
    },
    idiomatic_usages: {
      description: "Used in fixed expressions.",
      examples: [
        "The sky is the limit.",
        "He got cold feet before the speech.",
        "She became the talk of the town.",
        "It turned out to be a blessing in disguise.",
      ],
      cultural_significance: [
        "Metaphorical expressions vary across cultures",
        "Idiomatic linking verb phrases often culturally specific",
        "Some expressions untranslatable directly",
        "Regional variations in linking verb idioms",
      ],
    },
    register_variations: {
      formal_alternatives: ["constitute", "represent", "signify", "exemplify"],
      informal_alternatives: ["get", "turn out", "end up", "come across as"],
      academic_preferences: [
        "appear",
        "seem",
        "prove",
        "demonstrate",
        "manifest",
      ],
    },
  },

  advanced_usage_notes: {
    stylistic_guidance: [
      "Dùng linking verbs trong viết học thuật để định nghĩa: 'Democracy is the system of government by the people.'",
      "Tránh lạm dụng trong văn miêu tả, vì làm văn bản thiếu sinh động: thay vì 'He was angry', hãy viết 'He slammed the door'.",
      "Use varied linking verbs to avoid repetition in formal writing",
      "Choose register-appropriate linking verbs for context",
    ],
    metaphorical_extension: [
      "She became the storm. → diễn đạt cảm xúc hoặc biến đổi mạnh.",
      "His mind turned into a battlefield. → mô tả nội tâm sâu sắc.",
      "The city emerged as a symbol of hope.",
      "Her voice crystallized into pure melody.",
    ],
    discourse_functions: [
      "Linking verbs giúp chuyển ý nhẹ nhàng: 'This seems important.'",
      "Tạo lập luận khách quan trong tranh luận: 'The problem remains unsolved.'",
      "Signal evaluation and judgment in academic writing",
      "Create cohesion through state descriptions",
    ],
    nominalization_use: [
      "Chuyển đổi trạng thái bằng danh từ: 'Her dream became a reality.'",
      "Sử dụng bổ ngữ danh từ thay cho tính từ để tăng độ trang trọng.",
      "Academic writing prefers noun complements for abstraction",
      "Professional discourse uses nominalized complements",
    ],
    rhetorical_effects: [
      "Emphasis through linking verb choice: 'prove' vs 'seem'",
      "Certainty gradation: 'is' > 'appears' > 'seems'",
      "Literary effects through unexpected linking verbs",
      "Persuasive impact through evaluative linking verbs",
    ],
    literary_applications: [
      "Character development through state changes",
      "Symbolic linking in metaphorical contexts",
      "Stream of consciousness with being verbs",
      "Poetic effects through sensory linking verbs",
    ],
  },

  spelling_rules_and_notes: {
    verb_agreement: "'Be' changes form based on subject: am/is/are/was/were.",
    adjective_form:
      "Follow linking verbs with adjectives, not adverbs: ✅ 'She looks tired.' ❌ 'She looks tiredly.'",
    noun_complement:
      "Can be followed by noun phrases without articles in some expressions: 'He is president.'",
    phonological_variations:
      "Weak forms in connected speech: 'He's tired' [hɪz], 'They're happy' [ðeə]",
    morphological_patterns:
      "Regular verbs follow standard patterns: seem-seemed, appear-appeared; irregular: be-was/were-been",
  },

  common_mistakes: [
    {
      mistake: "Dùng trạng từ sau linking verbs thay vì tính từ.",
      corrected: "❌ She looks beautifully. ✅ She looks beautiful.",
      explanation: "Linking verbs require adjective complements, not adverbs",
      level: "A2-B1",
      frequency: "Very High",
    },
    {
      mistake: "Sử dụng trực tiếp tân ngữ thay vì bổ ngữ.",
      corrected: "❌ She became the job. ✅ She became a manager.",
      explanation: "Linking verbs take complements that describe the subject",
      level: "A2-B1",
      frequency: "High",
    },
    {
      mistake: "Không chia đúng động từ 'be' theo thì và chủ ngữ.",
      corrected: "❌ They is happy. ✅ They are happy.",
      explanation: "Subject-verb agreement essential with 'be' forms",
      level: "A1-A2",
      frequency: "Very High",
    },
    {
      mistake: "Dùng sai thì trong câu mô tả trạng thái kéo dài.",
      corrected: "❌ He was being hungry. ✅ He was hungry.",
      explanation: "Stative meanings don't typically take progressive aspect",
      level: "B1-B2",
      frequency: "Medium",
    },
    {
      mistake: "Nhầm lẫn giữa action và linking verb.",
      corrected: "❌ She feels the pillow soft. ✅ The pillow feels soft.",
      explanation: "Different syntactic patterns for action vs linking uses",
      level: "B1-B2",
      frequency: "High",
    },
  ],

  learning_tips: [
    "Ghi nhớ nhóm động từ qua sơ đồ mindmap chia theo chức năng: cảm giác, biến đổi, trạng thái.",
    "Phân biệt rõ linking và action verbs qua cặp ví dụ đối chiếu.",
    "Luyện viết câu mô tả cảm xúc, trạng thái nội tâm nhân vật.",
    "Tạo bài tập chọn đúng/sai với câu có look, feel, seem, become...",
    "Ghi âm giọng nói tự miêu tả bản thân bằng linking verbs (ví dụ: I am tired. I feel calm. I seem nervous.)",
    "Use substitution test: replace with 'be' to check if verb is linking",
    "Practice complement types: adjectives, nouns, prepositional phrases",
    "Learn collocations: seem like, appear to be, become aware of",
  ],

  specialized_domains: {
    academic_writing: [
      "is",
      "constitutes",
      "represents",
      "stands as",
      "serves as",
    ],
    literature_and_narration: ["grew", "turned", "became", "remained"],
    psychology_and_emotion: ["felt", "seemed", "appeared", "became"],
    legal_and_formal_language: [
      "is",
      "was",
      "stands as",
      "remains",
      "constitutes",
    ],
    scientific_description: ["is", "remains", "appears", "seems", "proves"],
    business_communication: [
      "appears",
      "seems",
      "proves",
      "turns out",
      "becomes",
    ],
    medical_terminology: [
      "presents as",
      "appears",
      "becomes",
      "remains",
      "proves",
    ],
    philosophical_discourse: [
      "constitutes",
      "represents",
      "embodies",
      "exemplifies",
      "transcends",
    ],
  },

  professional_terminology: {
    linguistic_label: "Copular Verbs",
    description:
      "A class of verbs used to link the subject with a complement that identifies or describes it.",
    corpus_usage_trend:
      "Highly frequent across all genres; 'be' is the most common verb in English.",
    academic_notes:
      "Studied in syntax, semantics, and morphology; pivotal in sentence diagramming and grammar analysis.",
    cross_linguistic_comparison:
      "All languages have some form of copular system, but structures vary significantly",
    historical_linguistics:
      "Evolution from Proto-Indo-European roots, with 'be' showing suppletion patterns",
  },

  citations: [
    {
      title: "Cambridge Grammar of the English Language",
      url: "https://www.cambridge.org/",
      description:
        "In-depth discussion of copular verbs, functions, and syntactic behavior.",
      source: "Cambridge University Press",
      type: "Academic",
      relevance_level: "High",
      access_level: "University Library",
    },
    {
      title: "Practical English Usage by Michael Swan",
      url: "https://www.oxfordlearnersdictionaries.com/",
      description: "Clear explanations and learner-focused examples.",
      source: "Oxford University Press",
      type: "Reference",
      relevance_level: "High",
      access_level: "Public Purchase",
    },
    {
      title: "Collins COBUILD Grammar Patterns",
      url: "https://www.collinsdictionary.com/",
      description:
        "Patterns and collocations with linking verbs in real-life English.",
      source: "HarperCollins",
      type: "Corpus-based",
      relevance_level: "Medium",
      access_level: "Online Free",
    },
    {
      title: "A Comprehensive Grammar of the English Language by Quirk et al.",
      url: "https://www.pearson.com/",
      description:
        "Authoritative reference on English grammar including detailed copular verb analysis.",
      source: "Longman",
      type: "Academic Reference",
      relevance_level: "Very High",
      access_level: "University Library",
    },
    {
      title: "English Grammar: A University Course by Downing & Locke",
      url: "https://www.routledge.com/",
      description:
        "Comprehensive treatment of linking verbs in systemic functional grammar framework.",
      source: "Routledge",
      type: "Textbook",
      relevance_level: "High",
      access_level: "University Purchase",
    },
  ],

  ielts_usage: {
    writing_task_1:
      "Dùng linking verbs để mô tả xu hướng: 'The figure remained steady.'",
    writing_task_2:
      "Phân tích luận điểm: 'Education is the key to social mobility.'",
    speaking_part_1:
      "Tự giới thiệu: 'I am a student. I feel nervous sometimes.'",
    speaking_part_2:
      "Describe experiences: 'The situation became challenging but rewarding.'",
    speaking_part_3:
      "Trình bày quan điểm: 'It seems that people are more isolated now.'",
    listening_recognition:
      "Identify state descriptions and changes in listening passages",
    reading_comprehension:
      "Understand nuanced meanings in academic texts using formal linking verbs",
  },

  cefr_mastery_guide: {
    A1: "Nhận biết 'be' và dùng trong giới thiệu bản thân.",
    A2: "Sử dụng 'seem', 'look' để miêu tả đơn giản.",
    B1: "Dùng nhóm 'become', 'get', 'feel' mô tả sự thay đổi.",
    B2: "Phân biệt linking và action verbs; viết luận có cấu trúc.",
    C1: "Linh hoạt dùng để tăng sắc thái trong viết học thuật và tranh luận.",
    C2: "Dùng linking verbs cho hiệu ứng tu từ, phân tích ý niệm trừu tượng.",
  },

  functional_transformation: {
    adjective_to_noun: {
      example: "He became angry. → He became a source of anger.",
      usage:
        "Thay đổi tính từ sang danh từ để tăng độ trang trọng hoặc làm rõ chủ thể.",
      advanced_applications: [
        "Academic writing prefers nominalization",
        "Professional contexts use abstract noun complements",
        "Literary writing employs metaphorical noun substitutions",
      ],
    },
    adjective_to_verb: {
      example: "He is calm → He calmed down.",
      usage:
        "Biến linking verb thành động từ hành động khi cần diễn đạt sự thay đổi rõ ràng hơn.",
      stylistic_considerations: [
        "Action verbs create more dynamic narratives",
        "Process focus vs state focus",
        "Agency and causation implications",
      ],
    },
    inversion_structures: {
      example: "So calm was he that no one noticed his pain.",
      usage:
        "Dùng cấu trúc đảo ngữ với linking verbs để tăng hiệu ứng văn phong, đặc biệt trong viết nâng cao (C1–C2).",
      literary_effects: [
        "Emphasis and dramatic impact",
        "Formal register and style",
        "Poetic and rhetorical applications",
      ],
    },
    passive_like_construction: {
      example: "She was seen as the leader.",
      usage:
        "Dù không phải bị động thật, linking verb + past participle giúp thể hiện nhận định khách quan.",
      formal_registers: [
        "Academic evaluation language",
        "Professional assessment contexts",
        "Objective reporting styles",
      ],
    },
  },

  semantic_gradient: {
    low_certainty: ["seem", "appear"],
    neutral_state: ["be", "remain", "stay"],
    transformation: ["become", "turn", "get"],
    emotional_perceptual_shade: ["look", "feel", "sound", "smell", "taste"],
    application:
      "Hiểu mức độ 'chắc chắn' và 'thay đổi' giúp bạn chọn đúng linking verb theo sắc thái muốn truyền tải. Ví dụ: 'He seems tired' ≠ 'He is tired'.",
    nuanced_distinctions: [
      "Epistemic modality: seem < appear < prove",
      "Evidentiality: look/sound (visual/auditory evidence)",
      "Temporal aspects: become (process) vs be (state)",
      "Volition: get (possibly intentional) vs become (natural process)",
    ],
  },

  stylistic_effects: {
    poetic_extension: {
      example: "She became the silence.",
      usage:
        "Dùng trong thơ ca, truyện ngắn – khi linking verb tạo ẩn dụ sâu sắc.",
      literary_tradition: [
        "Metaphysical poetry traditions",
        "Romantic symbolism",
        "Modernist abstraction techniques",
      ],
    },
    minimalistic_expression: {
      example: "He is.",
      usage:
        "Thể hiện triết lý, bản chất tồn tại – dùng trong triết học, nghệ thuật, hoặc lập luận mang tính biểu tượng.",
      philosophical_implications: [
        "Existential philosophy expressions",
        "Being vs becoming distinctions",
        "Essential vs accidental properties",
      ],
    },
    echo_repetition: {
      example: "He is who he is.",
      usage:
        "Cấu trúc lập lại với linking verbs để nhấn mạnh, thể hiện niềm tin, lập luận logic hoặc ẩn dụ.",
      rhetorical_power: [
        "Emphasis and definiteness",
        "Identity statements",
        "Philosophical tautologies",
      ],
    },
  },

  pragmatic_functions: {
    hedging:
      "It seems that you're right. → Giảm mức độ khẳng định, giữ phép lịch sự trong tranh luận.",
    clarification:
      "What he became was something else entirely. → Làm rõ sự phát triển hoặc bản chất.",
    evaluation:
      "The food tastes amazing! → Linking verbs giúp thể hiện đánh giá cảm xúc tự nhiên.",
    indirectness:
      "He appears a bit tired. → Dùng để nói nhẹ nhàng, giảm mức độ phán đoán.",
    politeness_strategies: [
      "Softening statements with 'seem'/'appear'",
      "Avoiding direct criticism through state descriptions",
      "Creating social distance through formal linking verbs",
    ],
    social_functions: [
      "Identity construction in discourse",
      "Status and role descriptions",
      "Community membership expressions",
    ],
  },

  comparative_insight: {
    linking_vs_action: {
      look: [
        "She looks happy (linking).",
        "She looks at the painting (action).",
      ],
      feel: ["I feel great (linking).", "I feel the fabric (action)."],
      sound: [
        "That sounds interesting (linking).",
        "The bell sounds every hour (action).",
      ],
      taste: [
        "The soup tastes delicious (linking).",
        "I taste the spices (action).",
      ],
      smell: [
        "The flowers smell sweet (linking).",
        "I smell something burning (action).",
      ],
      appear: [
        "He appears confident (linking).",
        "The actor appears on stage (action).",
      ],
    },
    linking_vs_auxiliary_be: {
      be_linking: "She is tired. (linking)",
      be_auxiliary: "She is working. (auxiliary)",
      usage_tip:
        "Cần phân biệt chức năng của 'be' trong việc nối thông tin (linking) hoặc hỗ trợ thì (auxiliary).",
      advanced_distinctions: [
        "Complement vs complement-object patterns",
        "Stative vs progressive implications",
        "Predication vs auxiliary functions",
        "Semantic roles and theta-marking",
      ],
    },
  },

  mnemonic_strategies: {
    acronym_method: "SALT – Sound, Appear, Look, Taste → dễ nhớ nhóm cảm giác.",
    transformation_diagrams:
      "Tạo sơ đồ tư duy về các trạng thái, với linking verb là trục trung tâm.",
    role_play:
      "Miêu tả cảm xúc bản thân mỗi ngày bằng linking verbs trong speaking.",
    timeline_exercises:
      "Viết nhật ký ngắn mỗi ngày với thì khác nhau bằng linking verbs: 'Yesterday I was... Today I feel...'",
    visual_associations: [
      "Color-code different types of linking verbs",
      "Mental imagery for state vs change verbs",
      "Flowcharts for verb categorization",
    ],
    memory_techniques: [
      "Spaced repetition for irregular forms",
      "Story-based learning for verb meanings",
      "Contrastive analysis exercises",
    ],
  },

  idiomatic_structures: [
    "What matters is…",
    "All that remains is…",
    "It seems as though…",
    "The result is that…",
    "The truth is revealed.",
    "It proves (to be)…",
    "He stood as a symbol of hope.",
    "She turned out to be a genius.",
    "This remains to be seen.",
    "It goes without saying that...",
    "What this amounts to is...",
    "The fact remains that...",
  ],

  syntactic_patterns: {
    basic_pattern: "Subject + Linking Verb + Subject Complement",
    subject_complement_types: {
      adjective: "She is tired.",
      noun_phrase: "He became a teacher.",
      prepositional_phrase: "The wallet was under the bed.",
      infinitive_phrase: "Her goal is to succeed.",
      clause: "The problem is that no one knows.",
      participial_phrase: "The food smells burnt.",
      gerund_phrase: "His hobby is collecting stamps.",
      absolute_construction: "The weather being fine, we went out.",
    },
    pattern_variations: {
      fronting: "Tired is how she always feels.",
      cleft: "What he became was a legend.",
      existential: "There is a problem here. (Be as a dummy verb.)",
      extraposition: "It seems that he is coming.",
      tough_movement: "She is easy to please.",
    },
    extended_examples: [
      "What they seem is honest and hardworking.",
      "The main issue remains unresolved.",
      "His personality proves to be complex.",
      "Whatever becomes of us, we'll remember this.",
    ],
  },

  complex_usage: {
    conditional_clauses: "If he becomes angry, stay calm.",
    relative_clauses: "The man who is responsible will apologize.",
    noun_clauses: "What matters is how you feel.",
    contrast_clauses: "She seems tired, although she says she's fine.",
    temporal_clauses: "After he got sick, he remained weak.",
    causal_clauses: "Because she appeared confident, they trusted her.",
    concessive_clauses: "Though he seems young, he is very experienced.",
  },

  paraphrase_comparisons: [
    {
      original: "She became angry.",
      alternative: "Anger overcame her. (figurative action form)",
      register_difference: "Literary vs standard",
      semantic_nuance: "Process vs event focus",
    },
    {
      original: "He was a leader.",
      alternative: "He led the group. (active verb)",
      register_difference: "Descriptive vs action-oriented",
      semantic_nuance: "Identity vs function",
    },
    {
      original: "The result seemed fair.",
      alternative: "The result was perceived as fair. (passive construction)",
      register_difference: "Simple vs formal",
      semantic_nuance: "Appearance vs perception",
    },
  ],

  creative_usage: {
    metaphorical_identity: "She became the light in his life.",
    thematic_symbol: "His silence was a weapon.",
    symbolic_role: "The city stood as a beacon of hope.",
    literary_description: "The air smelled of war and old metal.",
    personification: "The sky became a painting at dusk.",
    abstract_concepts: [
      "Time becomes memory",
      "Words transform into music",
      "Ideas crystallize into action",
      "Dreams materialize as reality",
    ],
  },

  acquisition_notes: {
    learner_difficulty:
      "Người học thường nhầm lẫn giữa linking và action verbs vì một số từ giống nhau (feel, look...).",
    acquisition_order:
      "'be' là linking verb đầu tiên được tiếp thu (từ A1); các động từ như 'seem', 'remain', 'prove' xuất hiện từ B1 trở lên.",
    processing_speed:
      "Linking verbs dễ xử lý hơn trong nhận thức vì không cần tân ngữ – giúp trẻ học nhanh hơn.",
    cross_linguistic_interference:
      "L1 influence varies: languages without copulas cause different difficulties than those with rich copular systems",
    developmental_stages: [
      "Stage 1: Basic 'be' forms and agreement",
      "Stage 2: Sensory linking verbs emerge",
      "Stage 3: Change-of-state verbs develop",
      "Stage 4: Abstract and formal linking verbs",
      "Stage 5: Stylistic and metaphorical mastery",
    ],
  },

  curriculum_references: {
    cambridge_english: {
      A1: "Identify and use 'be', 'look', and 'feel' correctly in descriptive sentences.",
      A2: "Contrast 'become' with action verbs in writing and speaking.",
      B1: "Analyze metaphorical uses of linking verbs in narratives.",
      B2: "Produce discursive essays with precise use of stative linking forms.",
      C1: "Demonstrate stylistic control of formal and informal linking constructions.",
      C2: "Manipulate copular structures for rhetorical and literary effects.",
    },
    CEFR_descriptors: {
      A1: "Can use basic forms of 'be' to describe self and immediate environment.",
      A2: "Can describe feelings and appearances using simple linking verbs.",
      B1: "Can describe changes of state or condition with appropriate linking verbs.",
      B2: "Can use linking verbs effectively in structured discourse and writing.",
      C1: "Can employ sophisticated linking constructions for nuanced expression.",
      C2: "Can interpret complex figurative meanings using copular structures in literary texts.",
    },
    oxford_criteria: {
      elementary: "Master basic 'be' forms and simple adjective complements",
      intermediate: "Control sensory and change verbs with varied complements",
      upper_intermediate: "Use formal linking verbs in academic contexts",
      advanced: "Manipulate linking structures for stylistic effects",
      proficiency: "Demonstrate native-like control of all copular patterns",
    },
  },

  assessment_criteria: {
    accuracy_indicators: [
      "Correct subject-verb agreement with 'be'",
      "Appropriate complement types (adj/noun/clause)",
      "Accurate tense and aspect marking",
      "Proper linking vs action verb distinction",
    ],
    fluency_markers: [
      "Natural rhythm and stress patterns",
      "Smooth integration in connected speech",
      "Automatic retrieval of common patterns",
      "Effortless code-switching between registers",
    ],
    complexity_measures: [
      "Variety of linking verb types used",
      "Sophistication of complement structures",
      "Integration with other grammatical features",
      "Abstract and metaphorical applications",
    ],
    appropriateness_factors: [
      "Register-sensitive verb selection",
      "Context-appropriate formality level",
      "Cultural sensitivity in usage",
      "Audience-aware stylistic choices",
    ],
  },

  research_findings: {
    corpus_analysis:
      "Contemporary corpora show increasing use of 'get' as linking verb in informal registers, while 'become' remains preferred in formal contexts.",
    frequency_data:
      "'Be' accounts for approximately 12% of all verb tokens in English; sensory linking verbs show high frequency in descriptive genres.",
    acquisition_studies:
      "L2 learners acquire 'be' forms before other linking verbs, with sensory verbs emerging before change-of-state verbs in developmental sequence.",
    cross_linguistic_research:
      "Languages with richer copular distinctions (e.g., Spanish ser/estar) may facilitate more nuanced linking verb acquisition in English.",
    pedagogical_implications: [
      "Contrastive analysis helps identify L1 interference patterns",
      "Corpus-informed teaching prioritizes high-frequency patterns",
      "Multimodal input enhances sensory linking verb acquisition",
      "Task-based learning promotes natural linking verb development",
    ],
  },

  technological_applications: {
    nlp_processing:
      "Linking verb identification crucial for semantic role labeling and relation extraction in computational linguistics.",
    machine_translation:
      "Copular constructions pose challenges due to cross-linguistic structural variations and semantic nuances.",
    grammar_checkers:
      "Automated systems must distinguish linking from action uses to provide accurate style and grammar suggestions.",
    language_learning_apps:
      "Adaptive systems can provide personalized feedback on linking verb accuracy and appropriateness.",
  },

  cultural_considerations: {
    register_sensitivity:
      "Linking verb choice signals social relationships and educational background in English-speaking communities.",
    cross_cultural_variations:
      "Directness in evaluation varies culturally, affecting linking verb usage in international communication.",
    social_implications:
      "Certain linking constructions carry prestige markers and class associations in sociolinguistic contexts.",
    educational_contexts: [
      "Academic writing conventions privilege formal linking verbs",
      "Spoken interaction norms vary by regional and social factors",
      "Professional communication requires register-appropriate choices",
      "Literary appreciation demands understanding of stylistic effects",
    ],
  },
};

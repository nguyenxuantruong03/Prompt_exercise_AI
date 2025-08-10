import { DualUsageNounsType } from "@/types/grammars/grammar/noun_special/dual_usage_nouns";

export const DualUsageNounsData: DualUsageNounsType = {
  id: 38,
  definition: {
    core_concept:
      "Dual usage nouns are nouns that can be used both as countable and uncountable depending on their context or meaning.",
    grammatical_status:
      "They shift between count and non-count status based on interpretation or situation.",
    linguistic_significance:
      "Understanding dual usage helps with article usage (a/an, the), quantifiers (many, much), and subject-verb agreement.",
    cross_linguistic_notes:
      "Learners from non-English backgrounds often struggle because their native languages may not mark this distinction.",
  },
  dual_usage_nouns_vocab: {
    dual_usage_nouns: [
      {
        noun: "hair",
        countable: "a hair = một sợi tóc",
        uncountable: "hair = mái tóc nói chung",
      },
      {
        noun: "experience",
        countable: "an experience = một trải nghiệm cụ thể",
        uncountable: "experience = kinh nghiệm nói chung",
      },
      {
        noun: "chicken",
        countable: "a chicken = con gà",
        uncountable: "chicken = thịt gà",
      },
      {
        noun: "paper",
        countable: "a paper = tờ giấy, bài báo, bài viết",
        uncountable: "paper = chất liệu giấy",
      },
      {
        noun: "light",
        countable: "a light = bóng đèn, nguồn sáng",
        uncountable: "light = ánh sáng",
      },
      {
        noun: "glass",
        countable: "a glass = một cái ly",
        uncountable: "glass = chất liệu thủy tinh",
      },
      {
        noun: "coffee",
        countable: "a coffee = một cốc cà phê",
        uncountable: "coffee = cà phê nói chung (chất lỏng)",
      },
      {
        noun: "iron",
        countable: "an iron = bàn ủi",
        uncountable: "iron = sắt (nguyên tố kim loại)",
      },
      {
        noun: "business",
        countable: "a business = một công ty, doanh nghiệp",
        uncountable: "business = hoạt động kinh doanh",
      },
      {
        noun: "work",
        countable: "a work = tác phẩm nghệ thuật",
        uncountable: "work = công việc nói chung",
      },
      {
        noun: "time",
        countable: "a time = một dịp, lần",
        uncountable: "time = thời gian nói chung",
      },
      {
        noun: "fruit",
        countable: "a fruit = một loại quả",
        uncountable: "fruit = trái cây nói chung",
      },
      {
        noun: "speech",
        countable: "a speech = một bài phát biểu",
        uncountable: "speech = khả năng nói, lời nói",
      },
      {
        noun: "language",
        countable: "a language = một ngôn ngữ cụ thể (English)",
        uncountable: "language = khả năng dùng ngôn ngữ",
      },
      {
        noun: "stone",
        countable: "a stone = viên đá",
        uncountable: "stone = chất liệu đá",
      },
      {
        noun: "noise",
        countable: "a noise = một âm thanh cụ thể",
        uncountable: "noise = tiếng ồn nói chung",
      },
      {
        noun: "truth",
        countable: "a truth = một sự thật cụ thể",
        uncountable: "truth = chân lý, sự thật nói chung",
      },
      {
        noun: "help",
        countable: "a help = một người giúp đỡ",
        uncountable: "help = sự giúp đỡ",
      },
      {
        noun: "fire",
        countable: "a fire = một đám cháy",
        uncountable: "fire = lửa nói chung",
      },
      {
        noun: "salt",
        countable: "a salt = một loại muối",
        uncountable: "salt = muối nói chung",
      },
      {
        noun: "success",
        countable: "a success = một việc thành công",
        uncountable: "success = sự thành công",
      },
      {
        noun: "life",
        countable: "a life = một sinh mạng cụ thể",
        uncountable: "life = sự sống",
      },
      {
        noun: "death",
        countable: "a death = một cái chết cụ thể",
        uncountable: "death = cái chết nói chung",
      },
      {
        noun: "change",
        countable: "a change = một sự thay đổi cụ thể",
        uncountable: "change = sự thay đổi nói chung",
      },
      {
        noun: "pain",
        countable: "a pain = một cơn đau",
        uncountable: "pain = đau đớn nói chung",
      },
      {
        noun: "snow",
        countable: "a snow = một trận tuyết",
        uncountable: "snow = tuyết nói chung",
      },
      {
        noun: "water",
        countable: "a water = một loại nước đóng chai",
        uncountable: "water = nước nói chung",
      },
      {
        noun: "education",
        countable: "an education = một nền giáo dục cụ thể",
        uncountable: "education = giáo dục nói chung",
      },
      {
        noun: "research",
        countable: "a research = một nghiên cứu cụ thể",
        uncountable: "research = nghiên cứu nói chung",
      },
      {
        noun: "art",
        countable: "an art = một loại hình nghệ thuật",
        uncountable: "art = nghệ thuật nói chung",
      },
      {
        noun: "music",
        countable: "a music = một bản nhạc (ít dùng)",
        uncountable: "music = âm nhạc nói chung",
      },
      {
        noun: "food",
        countable: "a food = một loại thức ăn",
        uncountable: "food = thức ăn nói chung",
      },
      {
        noun: "knowledge",
        countable: "a knowledge = một kiến thức cụ thể (hiếm)",
        uncountable: "knowledge = kiến thức nói chung",
      },
      {
        noun: "information",
        countable: "an information = ❌ (không đúng)",
        uncountable: "information = thông tin (luôn không đếm được)",
      },
    ],
    pattern_categories: {
      container_substance: [
        "glass (container) vs. glass (material)",
        "cup (container) vs. coffee (substance)",
        "bottle (container) vs. water (substance)",
        "bowl (container) vs. soup (substance)",
      ],
      animal_meat: [
        "chicken (animal) vs. chicken (meat)",
        "fish (animal) vs. fish (meat)",
        "lamb (animal) vs. lamb (meat)",
        "turkey (animal) vs. turkey (meat)",
      ],
      object_material: [
        "iron (appliance) vs. iron (metal)",
        "paper (document) vs. paper (material)",
        "stone (rock) vs. stone (material)",
        "wood (object) vs. wood (material)",
      ],
      abstract_concrete: [
        "experience (knowledge) vs. experience (event)",
        "work (activity) vs. work (product)",
        "art (concept) vs. art (piece)",
        "language (ability) vs. language (system)",
      ],
      general_specific: [
        "time (concept) vs. time (occasion)",
        "room (space) vs. room (chamber)",
        "light (illumination) vs. light (lamp)",
        "business (activity) vs. business (company)",
      ],
    },
  },

  foundational_levels: {
    A1: {
      concept_intro:
        "Some nouns can be used both as countable and uncountable depending on the meaning.",
      examples: [
        {
          countable: "I had a chicken for lunch.",
          meaning: "a whole animal (dish)",
        },
        { uncountable: "I like chicken.", meaning: "the meat (uncountable)" },
        {
          countable: "Can I have a coffee?",
          meaning: "a cup of coffee (specific)",
        },
        {
          uncountable: "I don’t drink coffee.",
          meaning: "the substance in general",
        },
      ],
      usage_tips: [
        "Use 'a/an' with the countable form.",
        "Use 'some' or no article with the uncountable form.",
        "Learn through examples – don’t rely on translation.",
      ],
      essential_vocabulary_focus: [
        "coffee (drink vs. cup)",
        "hair (mass vs. individual strands)",
        "paper (material vs. newspaper)",
        "glass (material vs. container)",
        "water (liquid vs. bottles)",
        "chicken (meat vs. animal)",
        "cake (substance vs. whole cake)",
        "time (concept vs. occasions)",
      ],
      basic_practice_activities: [
        "Look at pictures and choose 'a' or 'some'",
        "Complete sentences with correct articles",
        "Match sentences to situations",
        "Role-play ordering in a cafe or restaurant",
        "Describe daily routines using dual usage nouns",
      ],
    },
    A2: {
      expanded_list: [
        "paper",
        "glass",
        "time",
        "hair",
        "light",
        "room",
        "iron",
        "chicken",
        "cake",
        "experience",
      ],
      examples: [
        { countable: "Can I borrow a paper?", explanation: "a newspaper" },
        {
          uncountable: "I need some paper.",
          explanation: "material to write on",
        },
        {
          countable: "We had a great time!",
          explanation: "an event or occasion",
        },
        { uncountable: "Time goes by fast.", explanation: "general concept" },
      ],
      learning_strategies: [
        "Visualize situations.",
        "Learn collocations.",
        "Associate meaning with context.",
      ],
      extended_pattern_recognition: [
        "Container pattern: a glass/glass, a cup/coffee, a bottle/water",
        "Animal/meat pattern: a chicken/chicken, a fish/fish, a lamb/lamb",
        "Material/object pattern: iron (metal)/an iron (appliance), paper/a paper",
        "Abstract/concrete pattern: experience/an experience, work/a work of art",
        "General/specific pattern: time/a time, light/a light, room/a room",
      ],
      common_contexts: [
        "Shopping and restaurants: ordering food and drinks",
        "Home and daily life: describing needs and activities",
        "School and work: talking about materials and tasks",
        "Travel and experiences: sharing stories and memories",
      ],
    },
  },

  intermediate_levels: {
    B1: {
      common_confusion: [
        "hair (one hair vs. hair in general)",
        "light (a light = lamp, light = brightness)",
        "glass (a glass = a cup, glass = the material)",
        "paper (a paper = document/newspaper, paper = material)",
        "room (a room = space in building, room = available space)",
        "work (a work = piece of art/literature, work = general activity)",
        "experience (an experience = specific event, experience = general knowledge)",
        "business (a business = company, business = commercial activity)",
      ],
      grammatical_effects: [
        "Verb agreement: 'The experience was amazing.' vs. 'His experiences were varied.'",
        "Quantifiers: 'much hair' vs. 'many hairs'",
        "Modifiers: 'a piece of information' vs. 'an information ❌'",
        "Articles: 'the coffee is hot' (specific) vs. 'coffee is popular' (general)",
        "Plural forms: 'works of art' (countable) vs. 'work is hard' (uncountable)",
        "Question formation: 'How much time?' vs. 'How many times?'",
      ],
      classroom_focus: [
        "Article use and omission",
        "Contextual guessing from meaning",
        "Rewriting from uncountable to countable and vice versa",
        "Register awareness (formal vs. informal contexts)",
        "Error identification and correction strategies",
        "Collocation patterns with dual usage nouns",
      ],
      advanced_examples: [
        {
          context: "Academic writing",
          countable: "The research presents several important findings.",
          uncountable:
            "Research shows that language learning requires practice.",
        },
        {
          context: "Professional communication",
          countable: "We need to schedule a meeting for next week.",
          uncountable: "Meeting people from different cultures is enriching.",
        },
        {
          context: "Creative expression",
          countable: "This painting is a beautiful work of art.",
          uncountable: "Creative work requires both skill and inspiration.",
        },
      ],
    },

    B2: {
      list_with_contrasts: [
        {
          noun: "experience",
          countable: "She had many interesting experiences during her trip.",
          uncountable: "She has a lot of experience in teaching.",
        },
        {
          noun: "paper",
          countable: "He wrote a paper on climate change.",
          uncountable: "I need some paper to print the document.",
        },
        {
          noun: "chicken",
          countable: "We bought a chicken for Sunday dinner.",
          uncountable: "Do you want chicken or beef for lunch?",
        },
        {
          noun: "business",
          countable: "She started a successful online business.",
          uncountable: "Business has been slow this quarter.",
        },
        {
          noun: "work",
          countable: "Shakespeare's works are studied worldwide.",
          uncountable: "Work-life balance is important for well-being.",
        },
        {
          noun: "language",
          countable: "English is one of the most spoken languages.",
          uncountable: "Language is a fundamental human ability.",
        },
      ],
      functional_usage: [
        "Academic vs casual distinctions",
        "Specific vs general ideas",
        "Pluralization rules with countable form only",
        "Register-sensitive choices in professional contexts",
        "Stylistic effects in creative writing",
        "Cross-cultural communication considerations",
      ],
      sophisticated_applications: [
        "Metaphorical extensions: 'shedding light on the problem'",
        "Idiomatic expressions: 'making room for improvement'",
        "Academic discourse: 'the body of work in this field'",
        "Business communication: 'conducting business efficiently'",
      ],
      discourse_patterns: [
        "Topic introduction with uncountable, development with countable examples",
        "Generalizations using uncountable, specifics using countable",
        "Abstract concepts (uncountable) supported by concrete instances (countable)",
        "Formal register preference for uncountable abstractions",
      ],
    },
  },

  advanced_levels: {
    C1: {
      subtle_differences: [
        {
          noun: "business",
          uncountable:
            "Business is slow today - refers to commercial activity in general",
          countable:
            "She runs a successful business - refers to a specific company or enterprise",
        },
        {
          noun: "life",
          uncountable:
            "Life is unpredictable - refers to existence as an abstract concept",
          countable:
            "The lives of people in war zones are at risk - refers to individual existences",
        },
        {
          noun: "language",
          uncountable:
            "Language is a powerful tool - refers to human communication ability",
          countable:
            "He speaks six languages - refers to specific linguistic systems",
        },
        {
          noun: "society",
          uncountable:
            "Society influences individual behavior - refers to social organization as concept",
          countable:
            "Different societies have different values - refers to specific social groups",
        },
        {
          noun: "culture",
          uncountable:
            "Culture shapes our worldview - refers to shared knowledge and practices",
          countable:
            "Ancient cultures fascinate historians - refers to specific civilizations",
        },
        {
          noun: "education",
          uncountable:
            "Education is the key to progress - refers to the learning process",
          countable:
            "She has multiple educations in different fields - refers to formal qualifications",
        },
      ],
      collocational_patterns: [
        "make progress (uncountable) - 'We made significant progress.'",
        "a progress ❌ - This is never correct in English",
        "a beauty (person) vs. beauty (abstract concept)",
        "gain experience (uncountable) vs. have experiences (countable)",
        "do work (uncountable) vs. create works (countable)",
        "enjoy life (uncountable) vs. save lives (countable)",
        "appreciate art (uncountable) vs. buy arts and crafts (countable)",
        "study history (uncountable) vs. read histories (countable accounts)",
      ],
      advanced_examples: [
        "The iron was hot. (countable = appliance for pressing clothes)",
        "Iron is a strong metal. (uncountable = chemical element)",
        "She has a good education. (countable = formal schooling received)",
        "Education transforms societies. (uncountable = process of learning)",
        "His work is impressive. (uncountable = general output or effort)",
        "This museum displays works by Picasso. (countable = individual pieces)",
      ],
      lexical_precision:
        "C1 learners must master nuanced distinctions to avoid ambiguity in formal writing. Understanding when to use countable vs uncountable forms affects not only grammatical accuracy but also semantic precision and stylistic appropriateness in academic and professional contexts.",
      register_sensitivity: [
        "Academic writing favors uncountable abstractions for theoretical discussions",
        "Creative writing exploits dual usage for metaphorical and stylistic effects",
        "Professional communication requires precision in business-related dual usage",
        "Cross-cultural contexts may require explanation of dual usage concepts",
      ],
      error_avoidance: [
        "Avoid 'informations' - always use 'information' (uncountable) or 'pieces of information'",
        "Don't say 'advices' - use 'advice' (uncountable) or 'pieces of advice'",
        "Never use 'furnitures' - furniture is always uncountable",
        "Avoid 'researches' in academic writing - use 'research' or 'research studies'",
      ],
    },

    C2: {
      idiomatic_usage: [
        "a glass of wine (countable container) vs. wine (uncountable substance)",
        "a work of art (countable product) vs. work (uncountable effort/labor)",
        "shed light on (idiomatic - illuminate understanding)",
        "make room for (idiomatic - create space/opportunity)",
        "take time (idiomatic - require duration) vs. have a good time (idiomatic - enjoy)",
        "save face (idiomatic - preserve dignity) vs. show faces (countable - appear)",
        "break new ground (idiomatic - innovate) vs. cover ground (uncountable area)",
      ],
      discourse_awareness: [
        "Strategic switching: 'He gained extensive experience in law. Those experiences in international courts shaped his expertise.'",
        "Cohesive progression: 'Research in this field is advancing. Recent researches have shown...' (Note: 'researches' acceptable in formal academic discourse)",
        "Tone modulation: Countable forms often add vivid imagery; uncountable forms provide abstraction and formality",
        "Rhetorical emphasis: 'Knowledge is power' (general maxim) vs. 'His knowledges of multiple disciplines made him unique' (specific competencies)",
      ],
      style_and_register: [
        "Academic writing: Prefers uncountable abstractions for theoretical constructs",
        "Creative writing: Exploits countable specificity for concrete imagery",
        "Journalism: Balances both forms for clarity and engagement",
        "Legal writing: Requires precision in countable/uncountable distinctions for clarity",
        "Literary criticism: Uses sophisticated interplay between abstract and concrete forms",
      ],
      transformation_tasks: [
        "Abstract to specific: 'Beauty is eternal.' → 'She is a beauty.' (Person embodying beauty)",
        "General to particular: 'Music enriches life.' → 'He composed beautiful musics.' (Archaic/poetic plural)",
        "Substance to unit: 'Coffee keeps me awake.' → 'Three coffees, please.' (Servings)",
        "Concept to instance: 'Time heals wounds.' → 'We had wonderful times together.' (Occasions)",
      ],
      philosophical_discourse: [
        "Ontological distinctions between being and existence in dual usage",
        "Epistemological implications of countable knowledge vs. uncountable wisdom",
        "Aesthetic theory applications in art/arts, beauty/beauties distinctions",
        "Linguistic relativity effects on conceptualization through count/mass grammar",
      ],
      creative_applications: [
        "Poetic license allows innovative dual usage: 'gathering darknesses', 'scattered lights'",
        "Literary techniques exploit semantic ambiguity: 'business of living' vs. 'businesses of life'",
        "Metaphorical extensions: 'landscapes of memory', 'architectures of thought'",
        "Stylistic experimentation: 'he collected silences like others collect stamps'",
      ],
      metalinguistic_awareness: [
        "Understanding historical development of count/mass distinctions in English",
        "Recognizing cross-linguistic influences on dual usage patterns",
        "Analyzing semantic bleaching and grammaticalization processes",
        "Teaching dual usage to non-native speakers with pedagogical sophistication",
      ],
    },
  },

  recognition_and_clues: {
    countable_clues: ["a/an", "one", "several", "many", "each", "these"],
    uncountable_clues: ["much", "little", "some", "a lot of", "how much"],
    context_signals: [
      "Abstract vs. concrete meaning",
      "Material vs. object",
      "Quantity vs. type",
    ],
    diagnostic_questions: [
      "Can I count it?",
      "Is it a container or unit?",
      "Is it general or specific?",
    ],
  },

  typical_errors: {
    errors: [
      "'an advice' ❌ (should be 'some advice' or 'a piece of advice')",
      "'two informations' ❌ (should be 'two pieces of information')",
      "'a news' ❌ (news is uncountable)",
      "'many furniture' ❌ (should be 'much furniture' or 'pieces of furniture')",
    ],
    fixes: [
      "Use 'piece of' for many uncountable nouns when making them countable.",
      "Memorize common uncountables.",
      "Check article/quantifier pairing.",
    ],
  },

  full_list_common_dual_usage_nouns: [
    // Food and beverages
    "chicken",
    "coffee",
    "cake",
    "tea",
    "beer",
    "wine",
    "water",
    "juice",
    "milk",
    "bread",
    "cheese",
    "meat",
    "fish",
    "fruit",
    "sugar",
    "salt",
    "rice",
    "pasta",
    "chocolate",
    "ice cream",

    // Materials and substances
    "glass",
    "paper",
    "iron",
    "wood",
    "stone",
    "plastic",
    "metal",
    "cloth",
    "leather",
    "rubber",
    "oil",
    "paint",
    "gold",
    "silver",
    "copper",
    "steel",
    "concrete",
    "sand",
    "dirt",
    "mud",

    // Abstract concepts
    "hair",
    "light",
    "time",
    "experience",
    "business",
    "life",
    "language",
    "work",
    "art",
    "music",
    "education",
    "knowledge",
    "information",
    "research",
    "study",
    "analysis",
    "thought",
    "idea",
    "beauty",
    "love",
    "happiness",
    "freedom",
    "justice",
    "truth",
    "peace",
    "war",
    "success",
    "failure",

    // Spaces and areas
    "room",
    "space",
    "place",
    "area",
    "land",
    "ground",
    "field",
    "garden",
    "park",
    "forest",

    // Communication and media
    "news",
    "speech",
    "talk",
    "conversation",
    "discussion",
    "report",
    "story",
    "book",
    "magazine",
    "newspaper",
    "television",
    "radio",
    "internet",
    "email",
    "message",
    "letter",
    "note",

    // Sounds and noises
    "noise",
    "sound",
    "music",
    "song",
    "voice",
    "silence",
    "echo",
    "whisper",
    "shout",
    "scream",

    // Help and support
    "help",
    "support",
    "assistance",
    "aid",
    "service",
    "care",
    "attention",
    "advice",
    "guidance",

    // Change and development
    "change",
    "development",
    "progress",
    "improvement",
    "growth",
    "evolution",
    "revolution",
    "reform",

    // Emotions and feelings
    "pain",
    "pleasure",
    "joy",
    "sadness",
    "anger",
    "fear",
    "surprise",
    "love",
    "hate",
    "hope",

    // Academic and professional
    "data",
    "evidence",
    "proof",
    "theory",
    "practice",
    "method",
    "technique",
    "skill",
    "ability",
    "talent",
    "gift",
    "intelligence",
    "wisdom",
    "understanding",
    "comprehension",
    "knowledge",
  ],

  learning_notes: {
    memorization_tip:
      "Group nouns by usage patterns and memorize their dual meanings through contextual associations. Create mental images linking countable and uncountable uses.",
    test_yourself: [
      "Give two sentences using 'paper' countably and uncountably.",
      "Differentiate 'light' as an object vs an element.",
      "Explain when 'experience' is countable vs uncountable.",
      "Create sentences showing 'business' in both forms.",
      "Show the difference between 'work' as countable and uncountable.",
      "Use 'time' in both countable and uncountable contexts.",
      "Demonstrate 'room' as countable space vs uncountable space.",
      "Apply 'language' as both countable and uncountable concept.",
    ],
    classroom_activities: [
      "Context-matching games with picture cards",
      "Fill-in-the-blank with correct article/quantifier choices",
      "Sentence rewriting: transforming general to specific meaning",
      "Role-play scenarios in restaurants, shops, and offices",
      "Error correction exercises with peer feedback",
      "Corpus analysis of authentic texts",
      "Creative writing with intentional dual usage",
      "Academic writing practice with formal register",
      "Cross-cultural comparison discussions",
      "Collaborative learning through explanation to others",
    ],
    learner_reminder:
      "One noun, two roles — always look at context, meaning, and intended communication purpose.",
    study_strategies: [
      "Keep a dual usage journal with daily examples",
      "Practice with authentic materials (news, academic texts, conversations)",
      "Use spaced repetition for pattern internalization",
      "Record yourself using dual usage nouns in different contexts",
      "Create semantic maps showing relationships between meanings",
      "Practice transforming between countable and uncountable in writing",
      "Engage in focused listening for dual usage in media",
      "Use technology tools for pattern recognition and practice",
    ],
    common_learning_stages: [
      "Recognition: Identifying dual usage in context",
      "Understanding: Grasping meaning differences",
      "Controlled practice: Using with guidance and feedback",
      "Free practice: Applying in spontaneous communication",
      "Automatization: Natural, unconscious use",
      "Teaching others: Explaining and correcting dual usage",
    ],
    progress_indicators: [
      "Consistent article choice in familiar contexts",
      "Successful meaning disambiguation in reading",
      "Appropriate usage in both formal and informal writing",
      "Natural switching between forms in discourse",
      "Ability to explain differences to other learners",
      "Creative and stylistic manipulation of dual usage",
    ],
  },

  references: {
    cambridge: "https://dictionary.cambridge.org",
    oxford: "https://www.oxfordlearnersdictionaries.com",
    longman: "https://www.ldoceonline.com",
    grammar_books: [
      "English Grammar in Use by Raymond Murphy",
      "Practical English Usage by Michael Swan",
      "Advanced Grammar in Use by Martin Hewings",
    ],
    academic_sources: [
      "The Cambridge Grammar of the English Language by Huddleston & Pullum",
      "A Comprehensive Grammar of the English Language by Quirk et al.",
      "Understanding English Grammar by Martha Kolln",
      "English Grammar: A University Course by Angela Downing",
      "The Grammar Book by Marianne Celce-Murcia",
    ],
    research_papers: [
      "Count/Mass Distinctions Across Languages by Susan Rothstein (2010)",
      "The Syntax and Semantics of Mass and Count Nouns by Peter Lasersohn",
      "Cognitive Grammar and the Count/Mass Distinction by Ronald Langacker",
      "Cross-linguistic Variation in Count/Mass Distinctions by Doetjes (2012)",
      "Acquisition of Count/Mass Syntax in L2 English by White & Genesee",
    ],
    online_resources: [
      "British Council LearnEnglish Grammar",
      "Grammarly Grammar Guide",
      "Perfect English Grammar",
      "English Grammar Online",
      "Cambridge English Grammar Reference",
    ],
    dictionaries: [
      "Merriam-Webster Dictionary",
      "Collins COBUILD Advanced Dictionary",
      "Macmillan English Dictionary",
      "American Heritage Dictionary",
      "Wordnet Princeton University",
    ],
  },
  linguistic_theory: {
    historical_development:
      "In Middle English, distinctions between countable and uncountable were less rigid. Over time, semantic shift and metaphorical extensions led to certain nouns acquiring dual status.",
    cognitive_linguistics:
      "Dual usage arises from human conceptualization: concrete vs. abstract, specific vs. general, unit vs. mass. For example, 'chicken' as a living animal (individual unit) vs. 'chicken' as edible meat (mass).",
    metaphorical_mapping:
      "Concepts like 'light', 'time', or 'paper' evolved via metaphor to acquire abstract or countable counterparts, e.g., 'a light' = a lamp (instrument metaphor).",
  },

  conceptual_layering: {
    level_1: "Concrete object (a paper = an article)",
    level_2: "Abstract substance (paper = writing material)",
    level_3: "Symbolic or idiomatic layer ('He made time for her.')",
    level_4: "Metonymic usage (coffee = cup of coffee)",
  },

  advanced_diagnostic_toolkit: {
    transformation_strategy:
      "Switch from countable to uncountable by abstracting: 'an idea' → 'knowledge'. Reverse by specifying: 'information' → 'a fact'.",
    interrogative_testing: [
      "Can I pluralize it?",
      "Can I say 'a/an' before it?",
      "Does it refer to a unit or a concept?",
    ],
    charting_examples: [
      {
        noun: "sound",
        countable: "That was a strange sound.",
        uncountable: "Sound travels faster in water.",
      },
      {
        noun: "room",
        countable: "This hotel has 100 rooms.",
        uncountable: "There’s not enough room in the car.",
      },
      {
        noun: "cake",
        countable: "I baked a cake for you.",
        uncountable: "Would you like some cake?",
      },
    ],
  },

  grammatical_interactions: {
    tense_variation: [
      "Uncountable: 'Water evaporates quickly.' → Present simple for general truth",
      "Countable: 'The waters were calm.' → Plural used metaphorically for poetic/literary tone",
    ],
    syntactic_shifts: [
      "Relative clause with countable: 'The paper that he wrote is amazing.'",
      "Reduced clause with uncountable: 'Paper used for printing is recyclable.'",
    ],
    conjunction_effects: [
      "Uncountable parallelism: 'Information and knowledge are vital.'",
      "Countable coordination: 'Two cakes and three coffees were ordered.'",
    ],
  },

  grammar_traps: {
    trap_1: "'a news' ❌ — news is always uncountable",
    trap_2:
      "'many equipment' ❌ — equipment is uncountable; use 'much equipment' or 'pieces of equipment'",
    trap_3: "'informations' ❌ — incorrect pluralization of uncountable nouns",
    trap_4: "'advices' ❌ — say 'pieces of advice'",
    advanced_fix:
      "Use partitive structures: 'a piece of', 'an item of', 'a bit of'",
  },

  comparison_with_other_languages: {
    vietnamese: {
      note: "Nhiều danh từ như 'chicken', 'paper', 'glass' trong tiếng Anh có thể đếm được hoặc không tùy vào ngữ cảnh. Trong tiếng Việt, điều này thường không có sự phân biệt rõ ràng.",
      example:
        "Tiếng Việt: 'Tôi ăn gà' → có thể hiểu là ăn thịt hoặc con gà; tiếng Anh thì phải phân biệt rõ 'I ate chicken' vs. 'I ate a chicken'.",
    },
    japanese: {
      note: "Japanese treats most mass nouns without article distinction, causing confusion for learners using 'a/an' or plural 's'.",
      learner_challenges: [
        "lack of article system",
        "semantic overload in count/uncount transition",
      ],
    },
  },

  dual_usage_mastery_tasks: {
    rewrite_tasks: [
      {
        instruction: "Rewrite using uncountable form:",
        original: "He drank a glass of water.",
        rewritten: "He drank water.",
      },
      {
        instruction: "Rewrite using countable form:",
        original: "I need paper for the printer.",
        rewritten: "I need a sheet of paper for the printer.",
      },
    ],
    transformation_chain: [
      "Substance → Specific item → Container → Quantity",
      "'coffee' → 'some coffee' → 'a coffee' → 'three coffees'",
    ],
  },

  extended_vocabulary_set: {
    academic_terms: [
      "research",
      "evidence",
      "data",
      "knowledge",
      "learning",
      "work",
    ],
    colloquial_forms: ["a beer", "a coke", "a noise", "a fun", "a joy"],
    false_friends: [
      {
        noun: "advice",
        trap: "countable in some languages, always uncountable in English",
      },
      { noun: "information", trap: "cannot say 'an information'" },
      {
        noun: "furniture",
        trap: "do not pluralize; use 'pieces of furniture'",
      },
    ],
  },
  philosophical_dimensions: {
    ontological_insight:
      "Dual usage nouns reflect the philosophical dualism between substance and identity. For example, 'chicken' (meat) is essence; 'a chicken' (being) is existence.",
    SapirWhorf_effect:
      "Languages shape how reality is perceived. English forces a mass/count distinction, influencing how learners perceive quantity, individuality, and mass.",
    epistemological_relation:
      "Uncountable nouns reflect abstract or collective knowledge (e.g., 'knowledge', 'information') which cannot be atomized without altering meaning.",
  },

  stylistic_variation: {
    literary_usage: {
      metaphorical_switching:
        "'The room of her heart had no space left.' → 'room' used abstractly.",
      poetic_density:
        "Countable/uncountable duality increases metaphor richness, e.g., 'Time stood still' vs. 'A time to mourn.'",
    },
    journalistic_choice: {
      objectification:
        "'a coffee' for brevity and personification in casual journalism.",
      abstraction:
        "'coffee prices' refers to uncountable 'coffee' as economic commodity.",
    },
    academic_precision: {
      disambiguation_required:
        "Writers must clarify whether terms like 'experience', 'work', or 'language' are meant as general fields or specific instances.",
    },
  },

  dialectal_shifts: {
    British_vs_American: {
      example:
        "'a cake' in UK may refer to a full cake; in US, can be used casually for 'a piece of cake'.",
      observation:
        "Americans use 'a coffee' more freely in spoken language; Brits prefer 'some coffee'.",
    },
    World_Englishes: {
      Indian_English:
        "'furnitures' and 'informations' may occur due to L1 transfer.",
      African_English:
        "Frequent usage of 'advices' due to French-language influence.",
    },
  },

  corpus_analysis: {
    COCA_insights: {
      top_dual_nouns_by_frequency: [
        "coffee",
        "paper",
        "experience",
        "light",
        "room",
        "hair",
        "chicken",
      ],
      shift_patterns: [
        "Increasing countable metaphorical use in casual contexts",
        "Decline of traditional uncountable use in Gen Z speech",
      ],
    },
    learner_errors_from_corpus: [
      "80% of A2–B1 learners overuse countable form for 'information'.",
      "'advices' occurs in 1 in every 50 non-native essays.",
    ],
  },

  semantic_precision: {
    polysemy_handling: {
      glass: {
        meanings: {
          countable: "a drinking container",
          uncountable: "material substance",
        },
        semantic_field: "Material vs. Object",
        NLP_tagging:
          "glass [NN] → 'a glass' = countable; 'glass is fragile' = uncountable",
      },
      light: {
        meanings: {
          countable: "lamp, source of light",
          uncountable: "the abstract illumination",
        },
        gradability:
          "Only uncountable is gradable: 'so much light', not 'so many lights' (unless discrete sources)",
      },
    },
  },

  register_analysis: {
    formality_mapping: {
      informal: [
        "a coffee",
        "some cake",
        "a fun (incorrect but common)",
        "a noise",
      ],
      formal: ["furniture", "information", "knowledge", "evidence"],
      ultra_formal: ["body of knowledge", "a dataset", "body of evidence"],
    },
    tone_control:
      "Shifting from 'work' (uncountable) to 'a work of art' changes tone from general to refined or artistic.",
    rhetoric_usage:
      "Dual usage allows rhetorical repetition: 'His life was life itself.'",
  },

  NLP_AI_application: {
    POS_tagging_challenge: [
      "'glass' → [NN|count|material|container] depending on context",
      "'paper' → 'academic article' vs. 'material'",
    ],
    deep_learning_note:
      "State-of-the-art models like BERT, GPT classify dual usage through semantic embeddings contextualized per sentence. Meaning derived via attention-weighted clues.",
    grammar_checking_models: [
      "Use treebank data to detect article misuse with dual nouns.",
      "Fine-tune models on dual usage patterns to reduce false positives.",
    ],
  },

  cultural_connotations: {
    food_metaphors: {
      example: [
        "a chicken",
        "often humorous",
        "connoting cowardice",
        "some chicken",
        "neutral as food",
        "a piece of cake",
        "idiomatic = easy",
      ],
    },
    gendered_usage: [
      "'a beauty' often refers to women in poetic/literary texts, while 'beauty' as abstract applies universally.",
      "Shift toward gender-neutral abstract forms in modern academic writing.",
    ],
    societal_registers: [
      "Formal = uncountable abstraction → 'I value experience.'",
      "Casual = countable social object → 'What an experience!'",
    ],
  },

  // Enhanced comprehensive A1-C2 breakdown
  comprehensive_level_breakdown: {
    A1_beginner: {
      core_vocabulary: [
        "coffee",
        "water",
        "hair",
        "paper",
        "glass",
        "chicken",
        "cake",
        "time",
      ],
      basic_rules: [
        "Some nouns can be both countable and uncountable",
        "Use 'a/an' with countable form",
        "Use 'some' with uncountable form",
        "Meaning changes with usage",
        "Look at context to understand meaning",
      ],
      essential_examples: [
        {
          noun: "coffee",
          countable_example: "I want a coffee. (= one cup)",
          uncountable_example: "I like coffee. (= the drink in general)",
          simple_explanation: "a coffee = one cup, coffee = the drink",
        },
        {
          noun: "hair",
          countable_example: "There's a hair in my soup. (= one strand)",
          uncountable_example: "She has beautiful hair. (= all hair)",
          simple_explanation: "a hair = one strand, hair = all hair on head",
        },
        {
          noun: "paper",
          countable_example: "I need a paper. (= newspaper)",
          uncountable_example: "I need paper. (= writing material)",
          simple_explanation: "a paper = newspaper, paper = material",
        },
        {
          noun: "glass",
          countable_example: "Bring me a glass. (= container)",
          uncountable_example: "Glass is fragile. (= material)",
          simple_explanation: "a glass = cup/container, glass = material",
        },
      ],
      common_mistakes: [
        "Using 'a' with uncountable form: 'a coffee' when meaning the substance",
        "Forgetting articles with countable form",
        "Confusing meanings in context",
        "Direct translation from native language",
      ],
      practice_focus: [
        "Memorize basic dual usage pairs",
        "Practice with pictures and real objects",
        "Simple sentence completion",
        "Matching exercises",
        "Basic context recognition",
      ],
    },
    A2_elementary: {
      expanded_vocabulary: [
        "light",
        "room",
        "iron",
        "cake",
        "business",
        "work",
        "experience",
        "sound",
        "noise",
        "food",
        "fruit",
        "stone",
        "wood",
      ],
      pattern_recognition: [
        "Container vs. content pattern (glass, cup, bottle)",
        "Animal vs. meat pattern (chicken, fish, lamb)",
        "Material vs. object pattern (paper, iron, stone)",
        "Abstract vs. concrete pattern (experience, work, business)",
      ],
      context_clues: [
        "Articles (a/an) indicate countable use",
        "Quantifiers (much/many) show count status",
        "Surrounding words give meaning hints",
        "Situations determine interpretation",
      ],
      functional_phrases: [
        "Can I have a...? (countable request)",
        "I need some... (uncountable request)",
        "There's too much... (uncountable complaint)",
        "How many...? (countable question)",
      ],
      error_correction: [
        "Identify wrong article usage",
        "Correct quantifier choice",
        "Fix meaning mismatches",
        "Adjust verb agreement",
      ],
    },
    B1_intermediate: {
      nuanced_understanding: [
        "Same noun, different meanings in different contexts",
        "Subtle semantic shifts affect grammar",
        "Cultural and regional variations exist",
        "Metaphorical extensions of basic meanings",
      ],
      register_awareness: [
        "Formal vs. informal preferences",
        "Academic writing tends toward uncountable abstractions",
        "Spoken language allows more countable flexibility",
        "Professional contexts have specific patterns",
      ],
      collocation_patterns: [
        "make + uncountable nouns (make progress, make noise)",
        "piece of + uncountable (piece of advice, piece of information)",
        "type/kind of + uncountable (type of music, kind of food)",
        "amount/quantity with uncountables vs. number with countables",
      ],
      discourse_markers: [
        "In general... (introducing uncountable concepts)",
        "Specifically... (moving to countable instances)",
        "For example... (giving concrete countable examples)",
        "Overall... (returning to abstract uncountable)",
      ],
      academic_introduction: [
        "Research shows that...",
        "Evidence suggests...",
        "Studies indicate...",
        "Data reveals...",
      ],
    },
    B2_upper_intermediate: {
      sophisticated_usage: [
        "Stylistic choices between count/uncount affect tone",
        "Academic precision requires careful selection",
        "Creative writing exploits dual possibilities",
        "Professional communication demands accuracy",
      ],
      stylistic_choices: [
        "Uncountable for general, philosophical tone",
        "Countable for specific, vivid imagery",
        "Mixed usage for rhetorical effect",
        "Register-appropriate selection",
      ],
      metaphorical_extensions: [
        "Physical objects become abstract concepts",
        "Concrete experiences become general wisdom",
        "Material substances become symbolic meanings",
        "Individual instances become universal truths",
      ],
      formal_writing: [
        "Consistency in academic papers",
        "Precision in technical documentation",
        "Clarity in business communication",
        "Appropriateness in professional contexts",
      ],
      critical_analysis: [
        "Analyzing author's choice of count/uncount",
        "Understanding implications of usage",
        "Recognizing stylistic effects",
        "Evaluating appropriateness",
      ],
    },
    C1_advanced: {
      native_like_competence: [
        "Intuitive feel for appropriate usage",
        "Subtle distinctions in meaning and tone",
        "Cultural and regional awareness",
        "Creative and flexible application",
      ],
      idiomatic_mastery: [
        "Fixed expressions and collocations",
        "Metaphorical and figurative usage",
        "Cultural references and allusions",
        "Humor and wordplay possibilities",
      ],
      register_flexibility: [
        "Adapting to audience and purpose",
        "Switching between formal and informal",
        "Academic, professional, creative registers",
        "Cross-cultural communication awareness",
      ],
      discourse_competence: [
        "Cohesive use across texts",
        "Strategic choice for emphasis",
        "Maintaining consistency",
        "Creating stylistic effects",
      ],
      metalinguistic_awareness: [
        "Understanding linguistic principles",
        "Explaining usage to others",
        "Recognizing cross-linguistic patterns",
        "Teaching and correction abilities",
      ],
    },
    C2_proficiency: {
      expert_level_usage: [
        "Effortless, automatic selection",
        "Creative manipulation for effect",
        "Deep cultural understanding",
        "Scholarly and theoretical knowledge",
      ],
      creative_applications: [
        "Literary and artistic expression",
        "Innovative metaphorical usage",
        "Experimental language play",
        "Genre-specific adaptations",
      ],
      theoretical_understanding: [
        "Linguistic principles and theories",
        "Historical development patterns",
        "Cross-linguistic comparisons",
        "Cognitive and semantic foundations",
      ],
      cross_linguistic_analysis: [
        "Contrastive analysis capabilities",
        "Translation challenges and solutions",
        "L2 acquisition insights",
        "Pedagogical implications",
      ],
      pedagogical_insights: [
        "Teaching methodology development",
        "Error analysis and correction",
        "Curriculum design principles",
        "Assessment criteria creation",
      ],
    },
  },

  detailed_learning_progression: {
    skill_development: {
      recognition_skills: [
        {
          level: "A1",
          description: "Recognize basic dual usage in familiar contexts",
          examples: [
            "coffee shop situations",
            "basic daily routines",
            "simple descriptions",
          ],
        },
        {
          level: "A2",
          description: "Identify patterns and predict usage in new contexts",
          examples: [
            "extended vocabulary",
            "new situations",
            "pattern recognition",
          ],
        },
        {
          level: "B1",
          description: "Understand nuanced differences in meaning and register",
          examples: [
            "formal vs informal",
            "abstract vs concrete",
            "cultural contexts",
          ],
        },
        {
          level: "B2",
          description: "Analyze stylistic choices and their effects",
          examples: [
            "literary analysis",
            "academic writing",
            "professional communication",
          ],
        },
        {
          level: "C1",
          description:
            "Intuitive recognition with cultural and regional awareness",
          examples: [
            "dialectal variations",
            "historical usage",
            "creative applications",
          ],
        },
        {
          level: "C2",
          description:
            "Expert-level recognition with theoretical understanding",
          examples: [
            "linguistic analysis",
            "pedagogical applications",
            "research contexts",
          ],
        },
      ],
      production_skills: [
        {
          level: "A1",
          description: "Use basic dual usage nouns in simple sentences",
          examples: ["I want a coffee", "I like coffee", "basic requests"],
        },
        {
          level: "A2",
          description: "Apply patterns to new vocabulary with guidance",
          examples: [
            "extended contexts",
            "new situations",
            "pattern application",
          ],
        },
        {
          level: "B1",
          description: "Choose appropriate form based on intended meaning",
          examples: [
            "context-sensitive choice",
            "register awareness",
            "meaning precision",
          ],
        },
        {
          level: "B2",
          description: "Use strategically for stylistic and rhetorical effects",
          examples: [
            "academic writing",
            "creative expression",
            "professional communication",
          ],
        },
        {
          level: "C1",
          description: "Natural, native-like production with flexibility",
          examples: [
            "automatic selection",
            "creative usage",
            "cultural appropriateness",
          ],
        },
        {
          level: "C2",
          description:
            "Expert production with innovative and creative applications",
          examples: [
            "literary creation",
            "theoretical discussion",
            "pedagogical explanation",
          ],
        },
      ],
      error_correction_skills: [
        {
          level: "A1",
          description: "Recognize and correct basic article errors",
          examples: ["a/an vs some", "simple mistakes", "guided correction"],
        },
        {
          level: "A2",
          description: "Self-correct common patterns with feedback",
          examples: [
            "pattern-based errors",
            "self-monitoring",
            "peer correction",
          ],
        },
        {
          level: "B1",
          description: "Identify register and context inappropriateness",
          examples: [
            "formal vs informal",
            "context mismatches",
            "meaning errors",
          ],
        },
        {
          level: "B2",
          description: "Refine usage for precision and appropriateness",
          examples: [
            "stylistic refinement",
            "academic precision",
            "professional accuracy",
          ],
        },
        {
          level: "C1",
          description: "Help others with complex usage issues",
          examples: ["teaching others", "explaining rules", "mentoring"],
        },
        {
          level: "C2",
          description: "Provide expert analysis and pedagogical guidance",
          examples: [
            "error analysis",
            "teaching methodology",
            "research applications",
          ],
        },
      ],
    },
  },

  assessment_criteria: {
    by_level: {
      A1: {
        can_do_statements: [
          "I can use basic dual usage nouns in simple contexts",
          "I can distinguish between 'a coffee' and 'coffee' in familiar situations",
          "I can ask for things using correct articles",
          "I can understand basic meaning differences",
        ],
        assessment_tasks: [
          "Multiple choice with pictures",
          "Fill in the blank with a/an or some",
          "Match sentences to pictures",
          "Simple gap-fill exercises",
        ],
        error_tolerance: "High tolerance for errors, focus on communication",
        expected_competencies: [
          "Basic recognition",
          "Simple production",
          "Contextual understanding",
          "Guided correction",
        ],
      },
      A2: {
        can_do_statements: [
          "I can use dual usage nouns in various everyday contexts",
          "I can recognize patterns and apply them to new vocabulary",
          "I can explain basic differences to others",
          "I can self-correct simple mistakes",
        ],
        assessment_tasks: [
          "Context-based selection",
          "Pattern recognition tasks",
          "Error correction exercises",
          "Short paragraph writing",
        ],
        error_tolerance: "Moderate tolerance, some consistency expected",
        expected_competencies: [
          "Pattern recognition",
          "Extended application",
          "Basic explanation",
          "Self-monitoring",
        ],
      },
      B1: {
        can_do_statements: [
          "I can choose appropriate forms based on intended meaning",
          "I can use dual usage nouns in formal and informal contexts",
          "I can explain differences to language learners",
          "I can recognize and correct most errors",
        ],
        assessment_tasks: [
          "Register-appropriate selection",
          "Meaning-based choices",
          "Essay writing with accuracy",
          "Error analysis tasks",
        ],
        error_tolerance: "Lower tolerance, consistency important",
        expected_competencies: [
          "Meaning precision",
          "Register awareness",
          "Teaching ability",
          "Error analysis",
        ],
      },
      B2: {
        can_do_statements: [
          "I can use dual usage nouns for stylistic and rhetorical effects",
          "I can write academically with precision",
          "I can analyze others' usage choices",
          "I can help intermediate learners",
        ],
        assessment_tasks: [
          "Academic writing tasks",
          "Stylistic analysis",
          "Creative writing with precision",
          "Peer teaching activities",
        ],
        error_tolerance: "Low tolerance, near-native accuracy expected",
        expected_competencies: [
          "Stylistic control",
          "Academic precision",
          "Analytical ability",
          "Mentoring skills",
        ],
      },
      C1: {
        can_do_statements: [
          "I can use dual usage nouns naturally and flexibly",
          "I can adapt usage to any context or audience",
          "I can provide detailed explanations of usage",
          "I can help advanced learners with subtle distinctions",
        ],
        assessment_tasks: [
          "Professional writing tasks",
          "Cross-cultural communication",
          "Teaching methodology design",
          "Linguistic analysis projects",
        ],
        error_tolerance: "Very low tolerance, native-like accuracy",
        expected_competencies: [
          "Native-like intuition",
          "Cultural awareness",
          "Pedagogical expertise",
          "Linguistic sophistication",
        ],
      },
      C2: {
        can_do_statements: [
          "I can use dual usage nouns with expert-level precision",
          "I can create innovative and creative applications",
          "I can conduct linguistic research on the topic",
          "I can train teachers and develop curricula",
        ],
        assessment_tasks: [
          "Research projects",
          "Curriculum development",
          "Teacher training presentations",
          "Scholarly writing and analysis",
        ],
        error_tolerance: "No tolerance for errors, expert precision",
        expected_competencies: [
          "Expert knowledge",
          "Research ability",
          "Curriculum design",
          "Teacher training",
        ],
      },
    },
  },

  pedagogical_approaches: {
    teaching_strategies: {
      A1_A2: {
        methodology: "Visual and contextual introduction with lots of practice",
        activities: [
          "Picture-based discrimination tasks",
          "Real object demonstrations",
          "Role-play scenarios",
          "Guided discovery activities",
          "Pattern recognition games",
        ],
        materials: [
          "Visual aids and realia",
          "Context-rich pictures",
          "Simple texts with clear examples",
          "Audio recordings of natural usage",
          "Interactive digital exercises",
        ],
        assessment: [
          "Observation checklists",
          "Simple production tasks",
          "Peer assessment activities",
          "Portfolio collection",
          "Progress tracking charts",
        ],
      },
      B1_B2: {
        methodology: "Meaning-focused instruction with register awareness",
        activities: [
          "Corpus-based discovery",
          "Register comparison tasks",
          "Academic writing practice",
          "Error analysis workshops",
          "Peer teaching sessions",
        ],
        materials: [
          "Authentic texts from various registers",
          "Corpus examples and concordances",
          "Academic writing samples",
          "Professional communication models",
          "Error correction databases",
        ],
        assessment: [
          "Writing portfolio assessment",
          "Oral presentation evaluation",
          "Error analysis reports",
          "Peer feedback sessions",
          "Self-assessment reflections",
        ],
      },
      C1_C2: {
        methodology:
          "Research-based and theoretical approach with practical application",
        activities: [
          "Linguistic research projects",
          "Cross-linguistic analysis",
          "Teaching methodology development",
          "Curriculum design workshops",
          "Professional development sessions",
        ],
        materials: [
          "Academic research papers",
          "Linguistic theory texts",
          "Cross-cultural communication studies",
          "Teacher training resources",
          "Assessment development guides",
        ],
        assessment: [
          "Research project evaluation",
          "Teaching demonstration assessment",
          "Curriculum design review",
          "Professional portfolio development",
          "Scholarly presentation evaluation",
        ],
      },
    },
  },

  extended_references: {
    authoritative_grammar_books: [
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston & Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        isbn: "978-0521431460",
        relevance: "Definitive reference for count/mass distinction in English",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: 1985,
        isbn: "978-0582517349",
        relevance:
          "Classic comprehensive treatment of English grammar including dual usage",
      },
      {
        title: "Understanding English Grammar",
        author: "Martha Kolln & Robert Funk",
        publisher: "Pearson",
        year: 2017,
        isbn: "978-0134014272",
        relevance: "Pedagogical approach to complex grammatical concepts",
      },
      {
        title: "English Grammar: A University Course",
        author: "Angela Downing & Philip Locke",
        publisher: "Routledge",
        year: 2006,
        isbn: "978-0415286398",
        relevance:
          "University-level treatment with cognitive linguistic insights",
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        author: "Marianne Celce-Murcia & Diane Larsen-Freeman",
        publisher: "Heinle ELT",
        year: 2015,
        isbn: "978-1111351861",
        relevance: "Pedagogically-oriented grammar reference for teachers",
      },
    ],
    academic_journals: [
      {
        title: "Count/Mass Distinctions Across Languages",
        journal: "Language and Linguistics Compass",
        authors: ["Susan Rothstein"],
        year: 2010,
        doi: "10.1111/j.1749-818X.2010.00200.x",
        relevance: "Cross-linguistic perspective on count/mass phenomena",
      },
      {
        title: "The Syntax and Semantics of Mass and Count Nouns",
        journal: "Linguistic Inquiry",
        authors: ["Peter Lasersohn"],
        year: 1995,
        doi: "10.1162/ling.1995.26.4.755",
        relevance: "Theoretical foundation for understanding dual usage",
      },
      {
        title: "Cognitive Grammar and the Count/Mass Distinction",
        journal: "Cognitive Linguistics",
        authors: ["Ronald Langacker"],
        year: 1991,
        relevance: "Cognitive linguistic approach to noun classification",
      },
      {
        title: "Cross-linguistic Variation in Count/Mass Distinctions",
        journal: "Lingua",
        authors: ["Jenny Doetjes"],
        year: 2012,
        doi: "10.1016/j.lingua.2012.02.016",
        relevance: "Typological study of count/mass across languages",
      },
      {
        title: "Acquisition of Count/Mass Syntax in L2 English",
        journal: "Second Language Research",
        authors: ["Lydia White", "Fred Genesee"],
        year: 1996,
        relevance: "L2 acquisition research on dual usage learning",
      },
    ],
    online_databases: [
      {
        name: "Corpus of Contemporary American English (COCA)",
        url: "https://www.english-corpora.org/coca/",
        description: "Large corpus for studying actual usage patterns",
        access_type: "Free with registration",
      },
      {
        name: "British National Corpus (BNC)",
        url: "https://www.english-corpora.org/bnc/",
        description: "British English corpus for UK usage patterns",
        access_type: "Free with registration",
      },
      {
        name: "Google Books Ngram Viewer",
        url: "https://books.google.com/ngrams",
        description: "Historical usage trends in published books",
        access_type: "Free",
      },
      {
        name: "LINGUIST List",
        url: "https://linguistlist.org/",
        description: "Academic linguistics resource database",
        access_type: "Free",
      },
      {
        name: "Oxford English Dictionary Online",
        url: "https://www.oed.com/",
        description: "Comprehensive historical dictionary",
        access_type: "Subscription required",
      },
    ],
    corpus_resources: [
      {
        name: "International Corpus of English (ICE)",
        url: "http://ice-corpora.net/ice/",
        description: "World Englishes corpus collection",
        data_type: "Spoken and written English varieties",
      },
      {
        name: "Cambridge Learner Corpus",
        url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/corpus-and-research/cambridge-learner-corpus",
        description: "Learner error database",
        data_type: "L2 learner production data",
      },
      {
        name: "CHILDES Database",
        url: "https://childes.talkbank.org/",
        description: "Child language acquisition data",
        data_type: "L1 acquisition transcripts",
      },
      {
        name: "English-Corpora.org",
        url: "https://www.english-corpora.org/",
        description: "Multiple English corpus collection",
        data_type: "Various genres and time periods",
      },
    ],
    educational_websites: [
      {
        name: "British Council LearnEnglish Grammar",
        url: "https://learnenglish.britishcouncil.org/grammar",
        description: "Comprehensive grammar learning resource",
        target_level: "A1-C2",
      },
      {
        name: "Perfect English Grammar",
        url: "https://www.perfect-english-grammar.com/",
        description: "Detailed grammar explanations and exercises",
        target_level: "A2-C1",
      },
      {
        name: "English Grammar Online (EGO4U)",
        url: "https://www.ego4u.com/",
        description: "Grammar reference with exercises",
        target_level: "A1-B2",
      },
      {
        name: "Grammarly Grammar Guide",
        url: "https://www.grammarly.com/blog/grammar/",
        description: "Modern usage guide with examples",
        target_level: "B1-C2",
      },
      {
        name: "Cambridge English Grammar Reference",
        url: "https://www.cambridge.org/grammar/",
        description: "Academic grammar reference",
        target_level: "B2-C2",
      },
    ],
  },
};

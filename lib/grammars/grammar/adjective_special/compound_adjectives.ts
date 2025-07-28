import { compoundAdjectivesType } from "@/types/grammars/grammar/adjective_special/compound_adjectives";

export const compoundAdjectivesData: compoundAdjectivesType = {
  // --- Comprehensive Compound Adjectives Reference ---
  // Definition of Compound Adjectives
  compoundAdjectivesDefinition: {
    concept:
      "Compound adjectives are multi-word descriptive units formed by combining two or more words (typically connected by hyphens) that function as a single adjective to modify a noun, creating precise and vivid descriptions that cannot be achieved through single adjectives alone.",
    importance:
      "Essential for advanced English communication, enabling precise description, creative expression, and professional communication across academic, literary, and technical contexts from basic to sophisticated levels.",
    corePrinciple:
      "These adjectives combine semantic elements from different word classes to create unified descriptive meanings, following systematic morphological and syntactic patterns while maintaining internal cohesion through hyphenation or spacing conventions.",
    scope:
      "Applies across all registers of English from casual conversation to academic discourse, encompassing physical descriptions, temporal references, professional terminology, literary devices, and specialized technical vocabulary.",
  },

  // A1 Level - Basic Compound Adjectives (Beginner)
  A1: {
    definition:
      "Foundation compound adjectives for basic description using simple, high-frequency combinations in everyday contexts",
    basicPatterns: {
      concept:
        "Simple two-word combinations using basic vocabulary for essential descriptions",
      patterns: [
        "Color + physical feature: blue-eyed, red-faced",
        "Number + body part: two-legged, one-armed",
        "Basic adjective + noun: cold-hearted, hard-working",
        "Simple age references: ten-year-old, five-minute",
      ],
      examples: [
        "She has blue-eyed children who love playing outside.",
        "The two-legged stool is perfect for the kitchen.",
        "My cold-hearted boss never smiles at work.",
        "We waited for a five-minute break between classes.",
        "He bought a red-faced doll for his daughter.",
        "The one-armed bandit was broken in the casino.",
        "She's a hard-working student who studies every day.",
        "They live in a ten-year-old house near the park.",
      ],
      commonAdjectives: [
        "blue-eyed",
        "brown-eyed",
        "green-eyed",
        "two-legged",
        "cold-hearted",
        "hard-working",
        "five-minute",
        "ten-year-old",
        "red-faced",
        "one-armed",
      ],
    },
    physicalDescriptions: {
      concept:
        "Basic compound adjectives for describing appearance and physical characteristics",
      patterns: [
        "Color + body part: blue-eyed, red-haired",
        "Size + body part: big-headed, long-legged",
        "Age + appearance: young-looking, old-fashioned",
        "Simple physical states: well-dressed, tired-looking",
      ],
      examples: [
        "The blue-eyed baby slept peacefully in the crib.",
        "She has beautiful red-haired sisters who live nearby.",
        "The big-headed statue stands in the town square.",
        "Those long-legged birds fly south every winter.",
        "He looks young-looking for his actual age.",
        "She wears old-fashioned clothes to school.",
        "The well-dressed man walked into the restaurant.",
        "The tired-looking woman needs more sleep tonight.",
      ],
      commonAdjectives: [
        "blue-eyed",
        "red-haired",
        "big-headed",
        "long-legged",
        "young-looking",
        "old-fashioned",
        "well-dressed",
        "tired-looking",
        "short-haired",
        "good-looking",
      ],
    },
    fundamentalRules: {
      concept: "Basic hyphenation and placement rules for compound adjectives",
      rules: [
        "Always use hyphens when compound adjective comes before noun",
        "Compound adjectives describe the noun they precede",
        "Do not use plural forms in compound adjectives",
        "Simple two-word combinations are most common at this level",
      ],
      examples: [
        "Blue-eyed girl (✓) vs Blue eyed girl (✗)",
        "Five-minute break (✓) vs Five-minutes break (✗)",
        "Hard-working student (✓) vs Hard working student (✗)",
        "Well-dressed man (✓) vs Well dressed man (✗)",
      ],
    },
  },

  // A2 Level - Elementary Compound Adjectives
  A2: {
    definition:
      "Expanded compound adjectives including measurement, time, and quality descriptions for daily communication",
    expandedPatterns: {
      concept:
        "More complex patterns including adverbs, measurements, and quality descriptions",
      patterns: [
        "Adverb + past participle: well-known, well-behaved",
        "Number + time unit: three-hour, two-week",
        "Quality + condition: brand-new, second-hand",
        "Manner + participle: fast-moving, slow-cooking",
      ],
      examples: [
        "She's a well-known singer in our town.",
        "The well-behaved children sat quietly during class.",
        "We took a three-hour flight to London.",
        "He attended a two-week training course.",
        "They bought a brand-new car last month.",
        "She found a second-hand book at the market.",
        "The fast-moving train arrived on time.",
        "We enjoyed a slow-cooking meal at home.",
      ],
      commonAdjectives: [
        "well-known",
        "well-behaved",
        "three-hour",
        "two-week",
        "brand-new",
        "second-hand",
        "fast-moving",
        "slow-cooking",
        "full-time",
        "part-time",
      ],
    },
    measurementCompounds: {
      concept:
        "Compound adjectives expressing measurements, quantities, and dimensions",
      patterns: [
        "Number + unit + adjective: five-meter-long, ten-kilogram-heavy",
        "Number + time + old: three-year-old, twenty-minute-long",
        "Quantity + container: two-liter-bottle, five-page-report",
        "Distance + measurement: hundred-meter-dash, mile-long-walk",
      ],
      examples: [
        "We need a five-meter-long rope for climbing.",
        "The ten-kilogram-heavy bag was difficult to carry.",
        "My three-year-old nephew loves playing games.",
        "We watched a twenty-minute-long video.",
        "She bought a two-liter-bottle of water.",
        "He wrote a five-page-report for school.",
        "The athletes ran the hundred-meter-dash quickly.",
        "They enjoyed a mile-long-walk through the park.",
      ],
      commonAdjectives: [
        "five-meter-long",
        "ten-kilogram-heavy",
        "three-year-old",
        "twenty-minute-long",
        "two-liter-bottle",
        "five-page-report",
        "hundred-meter-dash",
        "mile-long-walk",
      ],
    },
    temporalDescriptions: {
      concept: "Time-related compound adjectives for scheduling and duration",
      patterns: [
        "Time period + adjective: long-term, short-term",
        "Frequency + based: daily-based, weekly-scheduled",
        "Duration + activity: all-day, half-time",
        "Timing + reference: last-minute, first-time",
      ],
      examples: [
        "We made long-term plans for our future.",
        "The short-term project will finish next week.",
        "She has a daily-based exercise routine.",
        "The weekly-scheduled meetings help our team.",
        "They organized an all-day conference downtown.",
        "The player was substituted at half-time.",
        "He made a last-minute decision to travel.",
        "This is my first-time experience with skiing.",
      ],
      commonAdjectives: [
        "long-term",
        "short-term",
        "daily-based",
        "weekly-scheduled",
        "all-day",
        "half-time",
        "last-minute",
        "first-time",
        "full-time",
        "part-time",
      ],
    },
    hyphenationRules: {
      concept:
        "Systematic hyphenation rules for different compound adjective types",
      rules: [
        "Always hyphenate before nouns: 'well-known singer'",
        "Do not hyphenate after linking verbs: 'The singer is well known'",
        "No plural in measurement compounds: 'five-year-old' not 'five-years-old'",
        "Hyphenate adverb + participle combinations: 'well-behaved', 'fast-moving'",
      ],
      examples: [
        "Before noun: 'The well-known actor' vs After verb: 'The actor is well known'",
        "Measurement: 'three-year-old child' (✓) vs 'three-years-old child' (✗)",
        "Adverb + participle: 'fast-moving car' (✓) vs 'fast moving car' (✗)",
        "Brand + adjective: 'brand-new house' (✓) vs 'brand new house' (✗)",
      ],
    },
  },

  // B1 Level - Intermediate Compound Adjectives
  B1: {
    definition:
      "Complex compound adjectives for personality, professional contexts, and varied descriptive purposes",
    participialCompounds: {
      concept:
        "Advanced combinations using present and past participles for dynamic descriptions",
      patterns: [
        "Adjective + present participle: good-looking, fast-growing",
        "Adjective + past participle: old-fashioned, well-educated",
        "Noun + present participle: record-breaking, eye-catching",
        "Adverb + past participle: newly-built, recently-discovered",
      ],
      examples: [
        "She's a good-looking actress in Hollywood movies.",
        "The fast-growing company hired many employees.",
        "He prefers old-fashioned music from the 1960s.",
        "The well-educated professor teaches at university.",
        "They achieved a record-breaking sales performance.",
        "The eye-catching advertisement attracted many customers.",
        "We moved into a newly-built apartment building.",
        "Scientists studied the recently-discovered species carefully.",
      ],
      commonAdjectives: [
        "good-looking",
        "fast-growing",
        "old-fashioned",
        "well-educated",
        "record-breaking",
        "eye-catching",
        "newly-built",
        "recently-discovered",
      ],
    },
    personalityTraits: {
      concept:
        "Compound adjectives describing character, behavior, and psychological characteristics",
      patterns: [
        "Character + hearted: kind-hearted, cold-hearted, warm-hearted",
        "Behavior + minded: open-minded, narrow-minded, like-minded",
        "Attitude + tempered: good-tempered, bad-tempered, quick-tempered",
        "Social + oriented: self-centered, family-oriented, goal-oriented",
      ],
      examples: [
        "She's a kind-hearted person who helps everyone.",
        "The cold-hearted manager fired many workers.",
        "We need warm-hearted volunteers for charity work.",
        "He's very open-minded about different cultures.",
        "Don't be narrow-minded about new technologies.",
        "Like-minded people often become good friends.",
        "The good-tempered teacher never gets angry.",
        "Avoid bad-tempered customers when possible.",
        "Quick-tempered people make decisions too fast.",
        "Self-centered individuals only think about themselves.",
      ],
      commonAdjectives: [
        "kind-hearted",
        "cold-hearted",
        "warm-hearted",
        "open-minded",
        "narrow-minded",
        "like-minded",
        "good-tempered",
        "bad-tempered",
        "quick-tempered",
        "self-centered",
      ],
    },
    idiomaticExpressions: {
      concept: "Fixed compound adjective expressions with established meanings",
      patterns: [
        "Body + based idioms: bare-handed, empty-handed",
        "Time + related idioms: last-minute, first-class",
        "Quality + state idioms: top-secret, high-quality",
        "Action + result idioms: hand-made, home-grown",
      ],
      examples: [
        "He climbed the mountain bare-handed without gloves.",
        "The thief left empty-handed after the robbery.",
        "She made a last-minute reservation at the restaurant.",
        "They traveled in first-class seats on the airplane.",
        "The government kept the information top-secret.",
        "We only buy high-quality products for our store.",
        "She sells beautiful hand-made jewelry at markets.",
        "They grow home-grown vegetables in their garden.",
      ],
      commonAdjectives: [
        "bare-handed",
        "empty-handed",
        "last-minute",
        "first-class",
        "top-secret",
        "high-quality",
        "hand-made",
        "home-grown",
        "user-friendly",
        "world-famous",
      ],
    },
    contextualUsage: {
      concept: "Appropriate usage across different contexts and registers",
      contexts: [
        "Casual conversation: everyday descriptive compounds",
        "Professional settings: work-related compound adjectives",
        "Academic writing: formal compound descriptions",
        "Creative writing: expressive and imaginative compounds",
      ],
      examples: [
        "Casual: 'She's really good-looking and easy-going.'",
        "Professional: 'We need a full-time, well-qualified candidate.'",
        "Academic: 'The long-term, data-driven approach proved effective.'",
        "Creative: 'The moonlit, shadow-filled garden looked mysterious.'",
      ],
    },
  },

  // B2 Level - Upper Intermediate Compound Adjectives
  B2: {
    definition:
      "Sophisticated compound adjectives for professional, academic, and technical communication",
    professionalCompounds: {
      concept:
        "Business and professional terminology using compound adjectives",
      patterns: [
        "Quality + performance: high-performance, low-maintenance",
        "Market + oriented: customer-oriented, profit-driven",
        "Time + sensitive: time-sensitive, deadline-driven",
        "Risk + related: high-risk, low-risk, risk-free",
      ],
      examples: [
        "The company needs high-performance computers for design work.",
        "These low-maintenance plants are perfect for busy offices.",
        "Our customer-oriented approach increases client satisfaction significantly.",
        "The profit-driven strategy focuses on revenue growth.",
        "This time-sensitive project requires immediate attention.",
        "Deadline-driven employees often experience work stress.",
        "High-risk investments can provide greater returns.",
        "Conservative investors prefer low-risk financial products.",
        "The bank offers risk-free savings accounts.",
      ],
      commonAdjectives: [
        "high-performance",
        "low-maintenance",
        "customer-oriented",
        "profit-driven",
        "time-sensitive",
        "deadline-driven",
        "high-risk",
        "low-risk",
        "risk-free",
      ],
    },
    technicalDescriptions: {
      concept:
        "Technical and scientific compound adjectives for specialized contexts",
      patterns: [
        "Process + based: computer-based, water-based, oil-based",
        "Technology + driven: data-driven, AI-powered, tech-savvy",
        "Material + specific: steel-reinforced, carbon-neutral, eco-friendly",
        "Method + oriented: research-oriented, evidence-based, results-focused",
      ],
      examples: [
        "The computer-based training program is very effective.",
        "Use water-based paints for children's rooms.",
        "Oil-based products last longer in harsh weather.",
        "The data-driven decision improved company performance.",
        "AI-powered systems can predict customer behavior.",
        "Tech-savvy employees adapt quickly to new software.",
        "Steel-reinforced buildings withstand earthquakes better.",
        "The company aims to become carbon-neutral by 2030.",
        "Eco-friendly products reduce environmental impact significantly.",
        "Research-oriented universities focus on academic discovery.",
      ],
      commonAdjectives: [
        "computer-based",
        "water-based",
        "oil-based",
        "data-driven",
        "AI-powered",
        "tech-savvy",
        "steel-reinforced",
        "carbon-neutral",
        "eco-friendly",
        "research-oriented",
      ],
    },
    intensityModifiers: {
      concept:
        "Compound adjectives expressing degrees of intensity and measurement",
      patterns: [
        "Degree + adjective: ultra-modern, super-efficient, mega-popular",
        "Comparison + based: world-class, top-tier, first-rate",
        "Scale + related: large-scale, small-scale, full-scale",
        "Level + specific: high-level, mid-level, entry-level",
      ],
      examples: [
        "The ultra-modern building features sustainable technology.",
        "Our super-efficient team completed the project early.",
        "The mega-popular restaurant requires reservations weeks ahead.",
        "She attended a world-class university for her degree.",
        "The company provides top-tier customer service.",
        "He received first-rate medical treatment at the hospital.",
        "The large-scale construction project will take years.",
        "Small-scale businesses often focus on local markets.",
        "The full-scale investigation revealed important evidence.",
        "High-level executives make strategic company decisions.",
      ],
      commonAdjectives: [
        "ultra-modern",
        "super-efficient",
        "mega-popular",
        "world-class",
        "top-tier",
        "first-rate",
        "large-scale",
        "small-scale",
        "full-scale",
        "high-level",
      ],
    },
    registerConsiderations: {
      concept:
        "Appropriate register usage for different communication contexts",
      registers: [
        "Formal academic: research-based, evidence-driven, theory-oriented",
        "Business professional: market-leading, client-focused, results-oriented",
        "Technical specialized: system-wide, network-based, protocol-specific",
        "Casual professional: user-friendly, hassle-free, budget-conscious",
      ],
      examples: [
        "Academic: 'The research-based methodology provided evidence-driven results.'",
        "Business: 'Our market-leading, client-focused approach ensures results-oriented outcomes.'",
        "Technical: 'The system-wide, network-based solution uses protocol-specific configurations.'",
        "Casual: 'This user-friendly, hassle-free software is perfect for budget-conscious buyers.'",
      ],
    },
  },

  // C1 Level - Advanced Compound Adjectives
  C1: {
    definition:
      "Advanced compound adjectives for sophisticated discourse, academic writing, and professional communication",
    sophisticatedCompounds: {
      concept:
        "Complex multi-element compound adjectives for nuanced description",
      patterns: [
        "Multiple-word compounds: state-of-the-art, run-of-the-mill",
        "Abstract + concrete: thought-provoking, mind-boggling",
        "Process + outcome: self-fulfilling, self-defeating",
        "Temporal + impact: long-lasting, far-reaching",
      ],
      examples: [
        "The state-of-the-art laboratory has the latest equipment.",
        "This run-of-the-mill performance disappointed the critics.",
        "The documentary presented thought-provoking questions about society.",
        "The complexity of quantum physics is mind-boggling.",
        "Her pessimistic attitude became a self-fulfilling prophecy.",
        "His perfectionism proved self-defeating in team projects.",
        "The economic crisis had long-lasting effects on employment.",
        "The new policy will have far-reaching consequences for education.",
      ],
      commonAdjectives: [
        "state-of-the-art",
        "run-of-the-mill",
        "thought-provoking",
        "mind-boggling",
        "self-fulfilling",
        "self-defeating",
        "long-lasting",
        "far-reaching",
      ],
    },
    metaphoricalUsage: {
      concept:
        "Figurative and metaphorical compound adjectives for expressive communication",
      patterns: [
        "Body + emotion metaphors: heart-wrenching, spine-chilling",
        "Movement + emotion: soul-stirring, nerve-wracking",
        "Time + impact: epoch-making, ground-breaking",
        "Space + quality: world-renowned, earth-shattering",
      ],
      examples: [
        "The heart-wrenching documentary moved audiences to tears.",
        "The spine-chilling horror movie kept viewers awake.",
        "The orchestra delivered a soul-stirring performance.",
        "Public speaking remains nerve-wracking for many people.",
        "Einstein's theories were epoch-making scientific discoveries.",
        "The ground-breaking research revolutionized medical treatment.",
        "The world-renowned chef opened a restaurant downtown.",
        "The earthquake was an earth-shattering natural disaster.",
      ],
      commonAdjectives: [
        "heart-wrenching",
        "spine-chilling",
        "soul-stirring",
        "nerve-wracking",
        "epoch-making",
        "ground-breaking",
        "world-renowned",
        "earth-shattering",
      ],
    },
    academicWriting: {
      concept:
        "Scholarly compound adjectives for academic and research contexts",
      patterns: [
        "Research + methodology: cross-sectional, longitudinal-based",
        "Analysis + approach: multi-faceted, interdisciplinary",
        "Evidence + quality: peer-reviewed, empirically-based",
        "Theory + application: hypothesis-driven, model-based",
      ],
      examples: [
        "The cross-sectional study examined different age groups.",
        "Longitudinal-based research tracks changes over time.",
        "The multi-faceted problem requires various solutions.",
        "Interdisciplinary approaches combine multiple academic fields.",
        "Peer-reviewed articles undergo rigorous academic scrutiny.",
        "The empirically-based conclusions support the hypothesis.",
        "Hypothesis-driven research tests specific predictions.",
        "Model-based simulations predict future outcomes accurately.",
      ],
      commonAdjectives: [
        "cross-sectional",
        "longitudinal-based",
        "multi-faceted",
        "interdisciplinary",
        "peer-reviewed",
        "empirically-based",
        "hypothesis-driven",
        "model-based",
      ],
    },
    stylisticEffects: {
      concept:
        "Rhetorical and stylistic functions of advanced compound adjectives",
      techniques: [
        "Emphasis through intensification: jaw-dropping, mind-blowing",
        "Precision through specification: laser-focused, pinpoint-accurate",
        "Evaluation through judgment: award-winning, critically-acclaimed",
        "Temporal through sequencing: cutting-edge, bleeding-edge",
      ],
      examples: [
        "Emphasis: 'The jaw-dropping performance left audiences speechless.'",
        "Precision: 'The laser-focused strategy achieved pinpoint-accurate results.'",
        "Evaluation: 'The award-winning film received critically-acclaimed reviews.'",
        "Temporal: 'The cutting-edge technology represents bleeding-edge innovation.'",
      ],
    },
  },

  // C2 Level - Mastery Compound Adjectives
  C2: {
    definition:
      "Mastery-level compound adjectives for literary, rhetorical, and highly specialized communication",
    literaryCompounds: {
      concept:
        "Sophisticated compound adjectives for creative and literary expression",
      patterns: [
        "Poetic combinations: moon-kissed, wind-swept, sun-drenched",
        "Synesthetic descriptions: velvet-smooth, crystal-clear, silk-soft",
        "Temporal + atmospheric: twilight-tinged, dawn-broken, storm-lashed",
        "Emotional + physical: tear-stained, joy-filled, sorrow-laden",
      ],
      examples: [
        "The moon-kissed garden sparkled with ethereal beauty.",
        "Wind-swept plains stretched endlessly toward the horizon.",
        "Sun-drenched vineyards produced exceptional wine varieties.",
        "Her velvet-smooth voice captivated the entire audience.",
        "The crystal-clear water revealed colorful fish below.",
        "Silk-soft petals fell gently from the cherry tree.",
        "The twilight-tinged sky painted purple hues overhead.",
        "Dawn-broken silence welcomed the first birdsong.",
        "Storm-lashed shores bore evidence of nature's power.",
        "Tear-stained letters revealed her deepest emotions.",
      ],
      commonAdjectives: [
        "moon-kissed",
        "wind-swept",
        "sun-drenched",
        "velvet-smooth",
        "crystal-clear",
        "silk-soft",
        "twilight-tinged",
        "dawn-broken",
        "storm-lashed",
        "tear-stained",
      ],
    },
    poeticDevices: {
      concept:
        "Alliterative and rhythmic compound adjectives for artistic effect",
      patterns: [
        "Alliterative pairs: silver-streaked, golden-glowing",
        "Rhythmic compounds: tip-top, tick-tock-timed",
        "Onomatopoeic elements: crash-landing, whisper-quiet",
        "Rhyming compounds: super-duper, handy-dandy",
      ],
      examples: [
        "Silver-streaked hair framed her distinguished face elegantly.",
        "Golden-glowing sunset painted the sky magnificently.",
        "The tip-top performance earned standing ovations.",
        "Tick-tock-timed precision characterized his work ethic.",
        "The crash-landing emergency required immediate response.",
        "Whisper-quiet engines powered the luxury vehicle.",
        "His super-duper enthusiasm motivated the entire team.",
        "The handy-dandy tool solved multiple problems efficiently.",
      ],
      commonAdjectives: [
        "silver-streaked",
        "golden-glowing",
        "tip-top",
        "tick-tock-timed",
        "crash-landing",
        "whisper-quiet",
        "super-duper",
        "handy-dandy",
      ],
    },
    neologisms: {
      concept: "Newly coined compound adjectives for contemporary contexts",
      patterns: [
        "Technology + human: AI-enhanced, digitally-native",
        "Environment + conscious: carbon-aware, sustainability-focused",
        "Social + media: influencer-driven, viral-worthy",
        "Future + oriented: next-generation, forward-thinking",
      ],
      examples: [
        "AI-enhanced applications personalize user experiences automatically.",
        "Digitally-native students adapt quickly to online learning.",
        "Carbon-aware companies reduce their environmental footprint.",
        "Sustainability-focused policies guide corporate decisions.",
        "Influencer-driven marketing reaches younger demographics effectively.",
        "Viral-worthy content spreads rapidly across social platforms.",
        "Next-generation technology revolutionizes communication methods.",
        "Forward-thinking leaders anticipate future challenges proactively.",
      ],
      techniques: [
        "Combining contemporary concepts with traditional structures",
        "Creating compounds that reflect current social trends",
        "Adapting existing patterns to new technological contexts",
        "Developing specialized vocabulary for emerging fields",
      ],
    },
    rhetoricalApplications: {
      concept:
        "Strategic use of compound adjectives for persuasive and argumentative discourse",
      applications: [
        "Political rhetoric: freedom-loving, peace-seeking, democracy-defending",
        "Commercial persuasion: life-changing, money-saving, time-tested",
        "Academic argumentation: evidence-based, peer-validated, research-supported",
        "Social commentary: culture-defining, society-shaping, generation-spanning",
      ],
      examples: [
        "Political: 'Freedom-loving citizens support democracy-defending policies.'",
        "Commercial: 'This life-changing, money-saving solution is time-tested.'",
        "Academic: 'Evidence-based, peer-validated research provides research-supported conclusions.'",
        "Social: 'Culture-defining moments create society-shaping, generation-spanning impacts.'",
      ],
    },
  },
  topic: "Compound Adjectives",
  definition:
    "Compound adjectives are adjectives made up of two or more words (usually connected by hyphens) that together describe a noun.",
  levels: {
    A1: {
      description:
        "Introduction to very basic compound adjectives used in daily conversations.",
      usageTypes: [
        "Color + noun: 'blue-eyed'",
        "Number + noun: 'two-legged'",
        "Adjective + noun: 'cold-hearted'",
      ],
      examples: [
        "She has **blue-eyed** children.",
        "It's a **two-legged** stool.",
        "He's a **cold-hearted** man.",
      ],
      notes: [
        "Hyphens are commonly used in compound adjectives before nouns.",
        "These are used to make speech more descriptive.",
      ],
      recognitionPatterns: [
        "Look for hyphenated phrases before a noun.",
        "Often used to describe physical traits or simple qualities.",
      ],
      commonMistakes: [
        "Forgetting the hyphen: 'blue eyed child' ❌ → 'blue-eyed child' ✅",
      ],
      timeMarkers: ["always used before a noun"],
    },

    A2: {
      description:
        "Expanded use in describing people, objects, and everyday contexts.",
      usageTypes: [
        "Adverb + past participle: 'well-known'",
        "Number + measure unit + noun: 'three-year-old boy'",
      ],
      examples: [
        "She is a **well-known** singer.",
        "I bought a **three-year-old** car.",
        "He’s a **soft-spoken** teacher.",
      ],
      notes: [
        "The adjective still precedes the noun and is hyphenated.",
        "Measurements and time are frequently expressed using compound adjectives.",
      ],
      recognitionPatterns: [
        "Often includes measurement, age, or popularity.",
        "Becomes part of a fixed descriptive phrase.",
      ],
      commonMistakes: [
        "Adding 's' to units in compound adjectives: 'three-years-old boy' ❌ → 'three-year-old boy' ✅",
      ],
      timeMarkers: ["usually placed directly before the noun"],
    },

    B1: {
      description:
        "Greater flexibility with compound structures and creative descriptions.",
      usageTypes: [
        "Adjective + past participle: 'old-fashioned'",
        "Adjective + present participle: 'good-looking'",
        "Noun + past participle: 'sun-dried'",
      ],
      examples: [
        "He wears **old-fashioned** clothes.",
        "She’s a **good-looking** actress.",
        "We used **sun-dried** tomatoes.",
      ],
      notes: [
        "Compound adjectives can express personality, appearance, time, or even cooking styles.",
        "Many are idiomatic or fixed expressions.",
      ],
      recognitionPatterns: [
        "May appear in both literal and figurative senses.",
        "Common in casual and formal contexts.",
      ],
      commonMistakes: [
        "Separating words without hyphen: 'sun dried tomatoes' ❌ → 'sun-dried tomatoes' ✅",
      ],
      timeMarkers: ["used in descriptive writing, ads, or stories"],
    },

    B2: {
      description:
        "Use of compound adjectives in writing and professional communication.",
      usageTypes: [
        "Quantifier + noun + past participle: 'high-risk', 'low-paid'",
        "Noun + adjective: 'snow-white'",
      ],
      examples: [
        "He has a **high-risk** job.",
        "Many workers are **low-paid**.",
        "She wore a **snow-white** dress.",
      ],
      notes: [
        "Useful in academic or professional writing, especially in technical or statistical contexts.",
        "These compounds add precision and sophistication.",
      ],
      recognitionPatterns: [
        "Often used in news, reports, and journalistic writing.",
        "Adds nuance and detail to the sentence.",
      ],
      commonMistakes: [
        "Using compound adjectives after the noun incorrectly: 'The job is high-risked' ❌ → 'high-risk' ✅",
      ],
      timeMarkers: ["in reports, analysis, narratives"],
    },

    C1: {
      description:
        "Advanced compound adjectives for abstract, figurative, and metaphorical use.",
      usageTypes: [
        "Adjective + noun + ed: 'open-minded'",
        "Adverb + adjective: 'deep-blue'",
        "Noun + noun + ed: 'bullet-proof'",
      ],
      examples: [
        "She’s very **open-minded** about new ideas.",
        "He painted a **deep-blue** sky.",
        "They wear **bullet-proof** vests.",
      ],
      notes: [
        "Used in persuasive, academic, or creative writing.",
        "Useful for argumentation and stylistic emphasis.",
      ],
      recognitionPatterns: [
        "Creative or metaphorical combinations to express personality, safety, or complexity.",
        "Often crafted to fit tone and mood.",
      ],
      commonMistakes: [
        "Misplacement: placing after the noun when it should be before: 'The vest is bullet-proofed' ❌",
      ],
      timeMarkers: ["common in formal essays, business writing, fiction"],
    },

    C2: {
      description:
        "Highly nuanced, idiomatic, and specialized compound adjectives for scholarly, poetic, and rhetorical use.",
      usageTypes: [
        "Multiple-word compounds: 'middle-of-the-road'",
        "Alliterative or poetic compounds: 'stone-cold', 'razor-sharp'",
        "Compound adjective as metaphor: 'heart-stopping', 'life-changing'",
      ],
      examples: [
        "She’s a **middle-of-the-road** politician.",
        "He gave me a **stone-cold** stare.",
        "It was a **life-changing** experience.",
      ],
      notes: [
        "Use in idiomatic expression, creative writing, literature, and high-level academic essays.",
        "Can be coined for stylistic effects.",
      ],
      recognitionPatterns: [
        "Often found in metaphors, slogans, branding, or advanced fiction.",
        "Recognizable by poetic rhythm or alliteration.",
      ],
      commonMistakes: [
        "Overusing or coining inappropriate compounds that don’t fit the context.",
      ],
      timeMarkers: ["advanced-level fiction, rhetoric, branding, journalism"],
    },
  },

  compound_Adjectives_vocab: {
    number_based: [
      "two-year-old",
      "three-hour-long",
      "five-minute",
      "ten-dollar",
      "one-way",
      "twenty-page",
    ],

    personality_description: [
      "open-minded",
      "narrow-minded",
      "strong-willed",
      "kind-hearted",
      "cold-hearted",
      "level-headed",
      "quick-tempered",
      "easy-going",
      "bad-tempered",
      "well-mannered",
      "ill-mannered",
      "hard-working",
      "self-centered",
      "soft-spoken",
    ],

    appearance_description: [
      "blue-eyed",
      "long-haired",
      "short-haired",
      "red-faced",
      "good-looking",
      "well-dressed",
      "broad-shouldered",
      "left-handed",
      "right-handed",
      "middle-aged",
    ],

    compound_colors: [
      "blue-green",
      "red-orange",
      "yellow-brown",
      "black-and-white",
      "gray-blue",
    ],

    time_related: [
      "last-minute",
      "full-time",
      "part-time",
      "long-term",
      "short-term",
      "old-fashioned",
      "brand-new",
      "well-timed",
    ],

    adverb_adjective: [
      "well-known",
      "well-behaved",
      "badly-written",
      "highly-respected",
      "poorly-educated",
      "deeply-rooted",
      "closely-knit",
      "fully-formed",
      "widely-recognized",
    ],

    adjective_noun_ed: [
      "old-fashioned",
      "open-minded",
      "kind-hearted",
      "cold-blooded",
      "high-spirited",
      "low-paid",
      "short-sighted",
      "high-class",
    ],

    noun_verb_ed: [
      "sun-dried",
      "wind-blown",
      "hand-made",
      "home-cooked",
      "factory-produced",
      "machine-operated",
      "computer-generated",
      "mass-produced",
    ],

    participle_based: [
      "bored-looking",
      "tired-sounding",
      "well-spoken",
      "fast-growing",
      "slow-moving",
      "fast-paced",
      "record-breaking",
    ],

    negative_prefixes: [
      "ill-informed",
      "ill-mannered",
      "ill-treated",
      "misinformed",
      "under-reported",
    ],

    idiomatic_or_metaphoric: [
      "once-in-a-lifetime",
      "run-of-the-mill",
      "matter-of-fact",
      "up-to-date",
      "out-of-date",
      "out-of-this-world",
      "over-the-top",
      "down-to-earth",
    ],

    CEFR_levels: {
      A1_A2: [
        "blue-eyed",
        "short-haired",
        "well-known",
        "hard-working",
        "good-looking",
        "two-year-old",
      ],
      B1_B2: [
        "open-minded",
        "brand-new",
        "hand-made",
        "old-fashioned",
        "easy-going",
        "full-time",
        "high-spirited",
        "last-minute",
      ],
      C1_C2: [
        "once-in-a-lifetime",
        "matter-of-fact",
        "self-centered",
        "computer-generated",
        "closely-knit",
        "record-breaking",
        "deeply-rooted",
        "cold-blooded",
        "fast-paced",
      ],
    },
  },

  structurePatterns: [
    "Adjective + Noun: cold-hearted",
    "Adverb + Past Participle: well-behaved",
    "Number + Unit + Noun: five-minute walk",
    "Adjective + Present Participle: good-looking",
    "Noun + Past Participle: sun-dried",
    "Noun + Noun: bullet-proof",
    "Adverb + Adjective: deeply-rooted",
  ],

  spellingRules: [
    "Use hyphens when the compound adjective comes before the noun.",
    "Do not use a hyphen if the compound adjective comes after the noun and the meaning is clear (e.g., 'The boy is well behaved.').",
    "Avoid pluralizing units in compound adjectives: 'five-year-old boy' not 'five-years-old boy'.",
  ],

  commonMistakesGlobal: [
    "Missing hyphens: 'fast growing company' ❌ → 'fast-growing company' ✅",
    "Using plural in measurements: 'three-years-old child' ❌",
    "Wrong placement: using compound adjective after noun inappropriately.",
  ],

  learningTips: [
    "Practice identifying compound adjectives in news headlines and ads.",
    "Create your own compound adjectives using hyphenated forms.",
    "Avoid overusing them in one sentence for clarity.",
  ],

  advancedUsageExamples: [
    "She had a **never-before-seen** technique in performance art.",
    "That’s a **one-in-a-million** opportunity.",
    "He was stuck in a **catch-22** situation.",
  ],

  relatedGrammarTopics: [
    "Hyphenated modifiers",
    "Adjective order",
    "Descriptive writing",
    "Collocations",
    "Fixed expressions",
  ],

  references: [
    "Cambridge Grammar of the English Language",
    "Oxford Learner's Dictionary",
    "Merriam-Webster Dictionary",
    "British Council Grammar Guide",
    "Longman English Grammar",
  ],
};

import { Question } from "@/types/grammars/grammars_type";

/* Helper function to extract grammar focus from question */
const grammarPatterns: { [key: string]: string[] } = {
  "Present Simple": ["do", "does", "don’t", "doesn’t"],
  "Present Continuous": ["am", "is", "are", "verb+ing"],
  "Past Simple": ["did", "was", "were"],
  "Past Continuous": ["was + verb+ing", "were + verb+ing"],
  "Present Perfect": ["have", "has", "have been", "has been"],
  "Past Perfect": ["had", "had been"],
  "Future Simple": ["will", "shall"],
  "Future Continuous": ["will be"],
  "Future Perfect": ["will have"],
  "Present Perfect Continuous": ["have been", "has been"],
  "Past Perfect Continuous": ["had been"],
  "Passive Voice": [
    "be + past participle",
    "was made",
    "is known",
    "being done",
  ],
  "Modal Verbs": [
    "can",
    "could",
    "may",
    "might",
    "must",
    "shall",
    "should",
    "would",
    "ought to",
  ],
  Conditionals: ["if", "unless", "would", "could", "might", "should"],
  "Relative Clauses": [
    "who",
    "whom",
    "whose",
    "which",
    "that",
    "where",
    "when",
  ],
  Articles: ["a", "an", "the"],
  Prepositions: ["in", "on", "at", "under", "over", "into", "from"],
  "Gerunds and Infinitives": ["to + verb", "verb + ing"],
  Causative: ["have something done", "get something done"],
  "Phrasal Verbs": ["get up", "turn on", "look into", "give in"],
  "Reported Speech": ["said", "told", "reported", "asked", "wondered"],
  "Comparatives and Superlatives": ["more", "most", "er", "est"],
  "Linking Verbs": ["seem", "become", "appear", "feel", "look", "sound"],
  Subjunctive: ["if I were", "that he be"],
  Inversion: ["seldom", "never", "no sooner", "rarely", "not only"],
  "Reflexive Pronouns": ["myself", "yourself", "himself", "ourselves"],
  Quantifiers: ["some", "any", "much", "many", "few", "little", "a lot of"],
  Determiners: ["this", "that", "these", "those", "each", "every"],
  Pronouns: ["he", "she", "it", "they", "them", "us", "we"],
  Conjunctions: ["and", "but", "although", "however", "because"],
  "Used to / Would": ["used to", "would often"],
  "Future in the Past": ["was going to", "would have"],
  "Mixed Conditionals": ["had + past participle + would", "would have + verb"],
  "Emphatic Structures": ["do", "does", "did + verb"],
  "Introductory It/There": ["it is important", "there is", "there are"],
  Nominalisation: ["tion", "ment", "ance", "ity", "al"],
  "Participle Clauses": ["having + past participle", "verb+ing"],
  "Discourse Markers": ["however", "moreover", "therefore", "nevertheless"],
  "Noun Clauses": ["that", "whether", "if", "what", "how", "who"],
  "Adjective Order": ["opinion", "size", "age", "color", "origin", "material"],
  "Reduced Relative Clauses": ["the man seen", "a book written"],
  Ellipsis: ["want some?", "going?"],
  "Exclamatory Sentences": ["what a", "how amazing"],
  "Question Tags": ["isn’t it?", "don’t you?"],
  Substitution: ["so do I", "neither did I", "one", "do so"],
  "Referring Words": ["this", "that", "these", "those"],
  "Verb Patterns": ["make + object + verb", "let + object + verb"],
  "Non-finite Clauses": ["to", "verb+ing", "verb+ed"],
  "Double Negatives": ["don't have no", "can't hardly"],
  Hedging: ["seems", "apparently", "might", "perhaps"],
  "Emotive Emphasis": ["what a day!", "how wonderful!"],
  "Echo Questions": ["Did he?", "Is she?"],
  Fronting: ["Only then did", "Rarely had"],
  "Modal Adverb": ["can", "could", "may", "might", "must", "shall", "should"],
  "Modal Adjective": [
    "can",
    "could",
    "may",
    "might",
    "must",
    "shall",
    "should",
  ],
  "Modal Noun": ["can", "could", "may", "might", "must", "shall", "should"],
  "Modal Verb": ["can", "could", "may", "might", "must", "shall", "should"],
  "To be": ["am", "is", "are", "was", "were"],

  Imperatives: ["Sit down!", "Be quiet!"],

  "Possessive 's": ["John’s book", "the dog’s tail"],

  Demonstratives: ["this", "that", "these", "those"],

  "Object Pronouns": ["me", "you", "him", "her", "us", "them"],

  "Adverbs of Frequency": ["always", "usually", "never", "often"],

  "Possessive Adjectives": ["my", "your", "his", "her", "our", "their"],

  "Like + ing": ["like doing", "love going"],
  "Each / Every": ["each", "every"],

  "Either / Neither / Both": ["either", "neither", "both"],

  "Wish / If only": ["wish I had", "if only I were"],
  "Cleft Sentences": ["It was John who...", "What I need is..."],

  "Complex Noun Phrases": [
    "the man sitting by the window",
    "the idea that he proposed",
  ],

  "Advanced Connectors": [
    "in spite of",
    "even though",
    "as long as",
    "provided that",
  ],

  "Impersonal Passive": ["It is believed that...", "It was said that..."],

  "Verb Patterns with Perception": ["see someone do", "hear someone doing"],
  "Modal Verbs (Usage Patterns)": [
    "can for ability",
    "could for past ability",
    "should for advice",
    "must for obligation",
    "would for polite requests or conditionals",
    "ought to for moral duty",
  ],

  Countability: [
    "countable nouns",
    "uncountable nouns",
    "some / any",
    "much / many",
    "a few / a little",
  ],

  "Future Tenses": [
    "will for future",
    "going to for plans",
    "present continuous for future",
    "future continuous",
    "future perfect",
  ],

  "Existence and Location": [
    "there is / there are",
    "there was / there were",
    "there has been / there have been",
  ],

  "Prepositions of Place": [
    "in",
    "on",
    "under",
    "next to",
    "between",
    "in front of",
    "behind",
  ],
  "Too / Enough": ["too … to", "enough … to"],
  "Should Advice": ["should", "had better"],
  "Would Like": ["would like to", "I'd like to"],
  "Zero Conditional": ["if …, …", "if …, will"],
  "Third Conditional": ["had + past participle + would have"],
  "Must/Could/Might Deduction": ["must have", "might have", "couldn't have"],
  "Cleft Sentences (Emphatic)": ["it was … who", "what I did was …"],
  "Noun Clause (Question forms)": [
    "what",
    "where",
    "when",
    "why",
    "how + clause",
  ],
  "Negative Fronting": ["only after", "hardly ever had", "not only but also"],
  "Formal Connectors": [
    "provided that",
    "insofar as",
    "albeit",
    "notwithstanding",
  ],
  "Parallelism / Cohesion": ["on the one hand", "she came, she saw"],
  "Rare Modal Nuance": ["might ought to have", "may ought to"],
  "Complex Nominalisation": [
    "the fact that",
    "the decision to",
    "the refusal to",
  ],
  "Idiomatic / Stylistic Nuance": ["ironically", "as if", "as though"],
  "There is / There are": [
    "there is",
    "there are",
    "there isn’t",
    "there aren’t",
  ],
  "Some / Any": ["some", "any", "somebody", "anybody", "something", "anything"],
  "Much / Many": ["much", "many", "not much", "not many"],
  "Can for Ability": ["can", "can’t"],
  "Countable and Uncountable Nouns": [
    "a piece of",
    "a bottle of",
    "some",
    "much",
    "many",
  ],
  "Going to (Future Plans)": [
    "going to",
    "I’m going to",
    "he’s going to",
    "they’re going to",
  ],
  "Comparative and Superlative Adjectives": [
    "taller",
    "the tallest",
    "more beautiful",
    "the most beautiful",
  ],
  "Present Continuous for Future": [
    "I’m meeting",
    "we’re leaving",
    "he’s coming",
  ],
  "Should for Advice": ["should", "shouldn’t"],
  "Second Conditional": ["If I were", "If she had", "would", "wouldn’t"],
  "Used to": ["used to", "didn’t use to"],
  "So / Such": [
    "so tall",
    "so quickly",
    "such a good movie",
    "such beautiful flowers",
  ],
  "Relative Clauses (Defining)": ["who", "that", "which", "where"],
  "Modals for Deduction": ["must be", "might be", "can’t be", "could be"],
  "Wish + Past Simple": ["I wish I had", "I wish I knew", "He wishes he could"],
  "Would Rather / Had Better": ["would rather", "had better"],
  "First Conditional": [
    "If + present simple, will",
    "If it rains, we will stay home",
  ],
  "Modals in the Past": [
    "should have",
    "might have",
    "could have",
    "must have",
  ],
  "Passive Voice in All Tenses": [
    "is made",
    "was given",
    "has been done",
    "will be sent",
    "was being repaired",
  ],
  "Advanced Passive Forms": ["get married", "get fired", "got injured"],
  "Advanced Conditionals": [
    "provided that",
    "as long as",
    "in case",
    "even if",
  ],
  "Ellipsis and Substitution": [
    "so do I",
    "neither do I",
    "I think so",
    "He can’t, can he?",
  ],
  "Fronting for Emphasis": [
    "What he said was shocking",
    "Happy as he was, he didn’t smile",
  ],
  "Verbs of Perception": [
    "I saw him run",
    "I heard her singing",
    "We watched them leave",
  ],
  "Complex Inversion": [
    "No sooner had I",
    "Not until she arrived",
    "Only when I saw her",
  ],
  "Embedded Questions": [
    "I wonder what he thinks",
    "Can you tell me where she lives?",
  ],
  "Cleft Sentences (Advanced)": ["All I want is...", "The thing I love is..."],
  "Advanced Reported Speech": [
    "She asked what I was doing",
    "He wondered whether I had seen it",
  ],
  "Double Comparatives": [
    "The more you study, the better you do",
    "The less you eat, the healthier you become",
  ],
  "Bare Infinitive vs. To-infinitive": [
    "let him go",
    "make me cry",
    "want to go",
    "hope to win",
  ],

  // A1 Level - Missing patterns
  "Cardinal Numbers": ["one", "two", "three", "first", "second", "third"],
  "Ordinal Numbers": ["first", "second", "third", "fourth", "fifth"],
  "Days of the Week": ["Monday", "Tuesday", "on Monday", "every Tuesday"],
  "Months and Years": ["January", "February", "in January", "in 2024"],
  "Time Expressions": ["at 3 o'clock", "in the morning", "at night", "o'clock"],
  "Simple Questions": ["What", "Where", "When", "How", "Who", "Why"],
  "Yes/No Questions": ["Do you", "Are you", "Is it", "Can you"],
  "Age and Personal Information": [
    "How old",
    "I'm ... years old",
    "My name is",
  ],
  "Family Members": ["father", "mother", "brother", "sister", "parents"],
  Colors: ["red", "blue", "green", "yellow", "black", "white"],
  "Basic Adjectives": ["big", "small", "good", "bad", "hot", "cold"],
  Plurals: ["cat/cats", "child/children", "man/men", "woman/women"],
  "Basic Conjunctions": ["and", "but", "or"],

  // A2 Level - Missing patterns
  "Past Time Expressions": ["yesterday", "last week", "ago", "in 1990"],
  "Future Time Expressions": ["tomorrow", "next week", "in an hour", "later"],
  "Degree Adverbs": ["very", "quite", "really", "extremely", "fairly"],
  "Frequency Adverbs Extended": [
    "sometimes",
    "rarely",
    "hardly ever",
    "twice a day",
  ],
  "Basic Conjunctions Extended": ["so", "because", "when", "before", "after"],
  Suggestions: ["Let's", "Why don't we", "How about", "What about"],
  "Offers and Requests": ["Would you like", "Could you", "Can I", "May I"],
  "Polite Language": ["please", "thank you", "excuse me", "I'm sorry"],
  Weather: [
    "It's sunny",
    "It's raining",
    "It's cold",
    "What's the weather like",
  ],
  Shopping: ["How much", "How many", "I'd like", "Can I have"],
  "Restaurant Language": [
    "I'd like to order",
    "The bill, please",
    "Can I have the menu",
  ],

  // B1 Level - Missing patterns
  "Present Perfect vs Past Simple": ["I have been", "I went", "since", "for"],
  "Narrative Past": ["while", "as", "when", "suddenly", "then"],
  "Opinion Language": ["I think", "I believe", "In my opinion", "I agree"],
  "Linking Words": [
    "however",
    "therefore",
    "although",
    "despite",
    "in addition",
  ],
  Purpose: ["to", "in order to", "so as to", "for"],
  Result: ["so", "such", "as a result", "consequently"],
  Contrast: ["but", "however", "although", "despite", "whereas"],
  "Giving Examples": ["for example", "such as", "like", "for instance"],
  Sequencing: ["first", "then", "next", "finally", "after that"],
  "Advantages and Disadvantages": [
    "on one hand",
    "on the other hand",
    "pros and cons",
  ],

  // B2 Level - Missing patterns
  "Abstract Nouns": [
    "happiness",
    "freedom",
    "knowledge",
    "information",
    "advice",
  ],
  "Complex Prepositions": ["due to", "owing to", "in spite of", "according to"],
  "Verb Patterns Extended": [
    "avoid doing",
    "suggest doing",
    "refuse to do",
    "manage to do",
  ],
  "Expressing Certainty": ["definitely", "certainly", "obviously", "clearly"],
  "Expressing Uncertainty": ["probably", "possibly", "perhaps", "maybe"],
  "Formal Language": [
    "furthermore",
    "moreover",
    "nevertheless",
    "consequently",
  ],
  "Academic Language": ["analyze", "evaluate", "demonstrate", "investigate"],
  "Reporting Verbs Extended": [
    "claim",
    "argue",
    "suggest",
    "imply",
    "conclude",
  ],
  "Complex Sentence Structures": [
    "not only...but also",
    "either...or",
    "neither...nor",
  ],
  "Emphasis Patterns": ["It is...that", "What...is", "The thing that"],

  // C1 Level - Missing patterns
  "Sophisticated Connectors": [
    "inasmuch as",
    "insofar as",
    "notwithstanding",
    "albeit",
  ],
  "Register Variation": ["informal", "formal", "academic", "colloquial"],
  "Subtle Modal Meanings": [
    "may well",
    "might as well",
    "could well",
    "would rather",
  ],
  "Complex Participles": [
    "having done",
    "being done",
    "to have done",
    "to be doing",
  ],
  "Sophisticated Passive": [
    "is said to be",
    "is thought to have",
    "is believed to",
  ],
  "Academic Hedging": ["tend to", "appear to", "seem to", "allegedly"],
  "Concessive Clauses": ["much as", "even though", "albeit", "notwithstanding"],
  "Substitution Advanced": ["so", "not", "do so", "such"],
  "Inversion Advanced": ["Had I known", "Were I to go", "Should you need"],
  "Complex Nominalizations": [
    "the likelihood of",
    "the extent to which",
    "the degree to which",
  ],

  // C2 Level - Missing patterns
  "Archaic/Literary Forms": ["thou", "thee", "thy", "whence", "whither"],
  "Rare Subjunctive": [
    "be that as it may",
    "suffice it to say",
    "lest",
    "would that",
  ],
  "Legal/Formal Language": ["herewith", "thereof", "whereby", "pursuant to"],
  "Academic Discourse": ["vis-à-vis", "inter alia", "prima facie", "per se"],
  "Sophisticated Irony": ["as it were", "so to speak", "if you will"],
  "Complex Metaphorical Language": [
    "metaphorically speaking",
    "in a manner of speaking",
  ],
  "Nuanced Modality": [
    "be bound to",
    "be liable to",
    "be apt to",
    "be prone to",
  ],
  "Advanced Stylistic Devices": [
    "chiasmus",
    "zeugma",
    "oxymoron",
    "synecdoche",
  ],
  "Register Mixing": [
    "code-switching",
    "stylistic variation",
    "pragmatic markers",
  ],
  "Implicit Grammar": [
    "elliptical constructions",
    "understood elements",
    "zero articles",
  ],

  // Additional specific patterns that might be missing
  "Collective Nouns": ["team", "family", "staff", "police", "cattle"],
  "Uncountable Noun Patterns": [
    "information",
    "advice",
    "furniture",
    "equipment",
  ],
  "Stative vs Dynamic Verbs": ["know vs learn", "have vs take", "be vs become"],
  "Aspect vs Tense": ["perfect aspect", "progressive aspect", "simple aspect"],
  "Voice Distinctions": ["active voice", "passive voice", "middle voice"],
  "Mood Indicators": ["indicative", "imperative", "subjunctive", "conditional"],
  "Register Markers": [
    "formal register",
    "informal register",
    "neutral register",
  ],
  "Pragmatic Markers": [
    "discourse markers",
    "conversation fillers",
    "turn-taking",
  ],
  "Cohesion Devices": [
    "reference",
    "substitution",
    "ellipsis",
    "conjunction",
    "lexical cohesion",
  ],
  "Coherence Patterns": [
    "topic sentences",
    "supporting details",
    "transitions",
  ],

  // Specific grammar constructions
  "Existential There": ["there exists", "there remains", "there appears to be"],
  Extraposition: ["It is clear that", "It seems that", "It appears that"],
  "Tough Movement": [
    "easy to do",
    "difficult to understand",
    "impossible to solve",
  ],
  "Raising Constructions": ["seem to", "appear to", "happen to", "tend to"],
  "Control Constructions": ["want to", "try to", "promise to", "force to"],
  "Small Clauses": [
    "consider him foolish",
    "find it interesting",
    "make it clear",
  ],
  "Absolute Constructions": ["weather permitting", "all things considered"],
  "Free Relatives": ["whoever", "whatever", "wherever", "whenever"],
  "Correlative Constructions": ["the more...the more", "no sooner...than"],
  "Tag Questions Extended": [
    "You will, won't you?",
    "He can't, can he?",
    "Let's go, shall we?",
  ],

  // Additional A1 Level patterns for 100% coverage
  "Basic Greetings": [
    "Hello",
    "Hi",
    "Good morning",
    "Good afternoon",
    "Good evening",
    "Goodbye",
  ],
  "Basic Introductions": ["My name is", "I am", "This is", "Nice to meet you"],
  "Countries and Nationalities": [
    "America",
    "American",
    "England",
    "English",
    "France",
    "French",
  ],
  "Jobs and Occupations": [
    "teacher",
    "doctor",
    "student",
    "engineer",
    "nurse",
    "driver",
  ],
  "Basic Verbs": [
    "go",
    "come",
    "see",
    "look",
    "listen",
    "hear",
    "eat",
    "drink",
  ],
  "Basic Nouns": ["house", "car", "book", "table", "chair", "water", "food"],
  "Body Parts": ["head", "hand", "foot", "eye", "ear", "nose", "mouth"],
  Clothing: ["shirt", "pants", "dress", "shoes", "hat", "jacket"],
  "Food and Drink": ["bread", "milk", "coffee", "tea", "apple", "banana"],
  "Basic Prepositions of Time": ["at", "in", "on", "before", "after"],
  "Basic Conjunctions Simple": ["and", "but", "or", "so"],
  "Basic Sentence Patterns": ["Subject + Verb", "Subject + Verb + Object"],
  "Alphabet and Spelling": [
    "How do you spell",
    "A, B, C",
    "capital letter",
    "small letter",
  ],
  "Numbers 0-100": ["zero", "ten", "twenty", "thirty", "hundred"],
  "Basic Directions": ["left", "right", "straight", "here", "there"],

  // Additional A2 Level patterns for 100% coverage
  "Past Time Markers": [
    "yesterday",
    "last night",
    "last year",
    "two days ago",
    "in the past",
  ],
  "Future Time Markers": [
    "tomorrow",
    "next month",
    "next year",
    "in the future",
    "soon",
  ],
  "Feelings and Emotions": [
    "happy",
    "sad",
    "angry",
    "excited",
    "tired",
    "worried",
  ],
  "Health and Body": ["sick", "healthy", "headache", "fever", "cold", "doctor"],
  "Travel and Transportation": [
    "plane",
    "train",
    "bus",
    "taxi",
    "ticket",
    "passport",
  ],
  "House and Home": ["bedroom", "kitchen", "bathroom", "living room", "garden"],
  "Education and School": [
    "school",
    "university",
    "subject",
    "exam",
    "homework",
  ],
  "Work and Career": ["job", "work", "office", "meeting", "salary", "boss"],
  "Leisure and Hobbies": [
    "hobby",
    "sport",
    "music",
    "movie",
    "reading",
    "swimming",
  ],
  Technology: ["computer", "phone", "internet", "email", "website"],
  "Money and Shopping": ["money", "price", "expensive", "cheap", "buy", "sell"],
  "Comparative Structures Basic": ["bigger than", "smaller than", "as...as"],
  "Basic Conditionals": ["If it rains", "If you want", "If I have time"],
  "Simple Past Irregular Verbs": [
    "went",
    "came",
    "saw",
    "ate",
    "drank",
    "bought",
  ],
  "Present Perfect with Life Experience": [
    "Have you ever",
    "I have been to",
    "She has never",
  ],

  // Additional B1 Level patterns for 100% coverage
  "Environment and Nature": [
    "pollution",
    "climate",
    "recycling",
    "environment",
    "nature",
  ],
  "Media and Communication": [
    "newspaper",
    "television",
    "radio",
    "social media",
    "news",
  ],
  "Culture and Society": [
    "culture",
    "tradition",
    "custom",
    "society",
    "community",
  ],
  "Crime and Law": ["police", "crime", "law", "legal", "illegal", "court"],
  "Politics and Government": [
    "government",
    "politics",
    "election",
    "vote",
    "president",
  ],
  "Economy and Business": ["business", "economy", "company", "profit", "loss"],
  "Science and Technology Advanced": [
    "science",
    "research",
    "experiment",
    "technology",
    "innovation",
  ],
  "Art and Literature": [
    "art",
    "artist",
    "painting",
    "music",
    "literature",
    "poetry",
  ],
  "Sports and Fitness": [
    "football",
    "basketball",
    "tennis",
    "gym",
    "exercise",
    "fitness",
  ],
  "Food and Cooking": ["recipe", "ingredient", "cook", "delicious", "tasty"],
  Relationships: [
    "friend",
    "friendship",
    "relationship",
    "marriage",
    "divorce",
  ],
  "Personal Development": [
    "goal",
    "achievement",
    "success",
    "failure",
    "improvement",
  ],
  "Time Management": [
    "schedule",
    "appointment",
    "deadline",
    "punctual",
    "late",
  ],
  "Problem Solving": [
    "problem",
    "solution",
    "solve",
    "difficulty",
    "challenge",
  ],
  "Opinion and Argument": [
    "opinion",
    "argument",
    "agree",
    "disagree",
    "point of view",
  ],

  // Additional B2 Level patterns for 100% coverage
  "Complex Tense Usage": [
    "Future Perfect Continuous",
    "Past Perfect Continuous usage",
  ],
  "Advanced Modal Usage": [
    "Modal verbs for speculation",
    "Modal verbs for criticism",
  ],
  "Discourse Management": [
    "Turn-taking",
    "Topic change",
    "Clarification requests",
  ],
  "Register Awareness": ["Formal vs informal language", "Appropriate register"],
  "Cultural References": [
    "Cultural implications",
    "Cross-cultural communication",
  ],
  "Idiomatic Expressions": [
    "Common idioms",
    "Phrasal expressions",
    "Colloquialisms",
  ],
  "Stylistic Variation": [
    "Variation in style",
    "Tone adjustment",
    "Audience awareness",
  ],
  "Complex Text Organization": [
    "Paragraph structure",
    "Text cohesion",
    "Logical flow",
  ],
  "Advanced Vocabulary": [
    "Synonyms",
    "Antonyms",
    "Word formation",
    "Collocations",
  ],
  "Critical Thinking Language": [
    "Analysis",
    "Evaluation",
    "Synthesis",
    "Argumentation",
  ],
  "Research Language": ["Hypothesis", "Evidence", "Conclusion", "Bibliography"],
  "Presentation Language": [
    "Introduction",
    "Main points",
    "Conclusion",
    "Visual aids",
  ],
  "Negotiation Language": [
    "Compromise",
    "Agreement",
    "Disagreement",
    "Persuasion",
  ],
  "Abstract Concepts": [
    "Democracy",
    "Justice",
    "Freedom",
    "Equality",
    "Progress",
  ],
  "Professional Communication": [
    "Meeting language",
    "Email etiquette",
    "Report writing",
  ],

  // Additional C1 Level patterns for 100% coverage
  "Metalinguistic Awareness": [
    "Language about language",
    "Linguistic terminology",
  ],
  "Pragmatic Competence": ["Implied meaning", "Conversational implicature"],
  "Sociolinguistic Variation": ["Regional dialects", "Social varieties"],
  "Complex Argumentation": [
    "Counter-arguments",
    "Refutation",
    "Logical fallacies",
  ],
  "Academic Writing": [
    "Literature review",
    "Methodology",
    "Discussion",
    "Abstract",
  ],
  "Legal Language": [
    "Contract language",
    "Legal terminology",
    "Rights and obligations",
  ],
  "Technical Communication": [
    "Specifications",
    "Procedures",
    "Technical reports",
  ],
  "Diplomatic Language": ["Diplomatic courtesy", "International relations"],
  "Philosophical Language": ["Metaphysics", "Ethics", "Epistemology", "Logic"],
  "Literary Analysis": [
    "Literary devices",
    "Narrative techniques",
    "Symbolism",
  ],
  "Advanced Syntax": ["Complex embedding", "Multiple subordination"],
  "Semantic Relations": ["Synonymy", "Polysemy", "Homonymy", "Semantic fields"],
  "Pragmatic Discourse Markers": [
    "Discourse particles",
    "Hedging devices",
    "Intensifiers",
  ],
  Intertextuality: ["References", "Allusions", "Quotations", "Paraphrasing"],
  "Genre Awareness": ["Text types", "Genre conventions", "Style requirements"],

  // Additional C2 Level patterns for 100% coverage
  "Linguistic Theories": [
    "Generative grammar",
    "Functional linguistics",
    "Cognitive linguistics",
  ],
  "Historical Language": ["Language change", "Etymology", "Historical syntax"],
  "Comparative Linguistics": ["Language families", "Typological features"],
  "Phonological Awareness": ["Phonemes", "Stress patterns", "Intonation"],
  "Morphological Complexity": [
    "Derivational morphology",
    "Inflectional systems",
  ],
  "Semantic Theory": ["Truth conditions", "Compositional semantics"],
  "Pragmatic Theory": ["Speech acts", "Gricean maxims", "Relevance theory"],
  "Sociolinguistic Theory": [
    "Language variation",
    "Language change",
    "Multilingualism",
  ],
  Psycholinguistics: ["Language acquisition", "Language processing"],
  Neurolinguistics: ["Brain and language", "Language disorders"],
  "Computational Linguistics": [
    "Natural language processing",
    "Machine translation",
  ],
  "Translation Studies": ["Translation strategies", "Cultural adaptation"],
  "Corpus Linguistics": ["Frequency analysis", "Collocation patterns"],
  "Critical Discourse Analysis": ["Power relations", "Ideology in language"],
  "Multimodal Communication": ["Text and image", "Digital communication"],

  // Specialized Grammar Constructions for completeness
  Apposition: ["My friend John", "The city London", "appositive clauses"],
  "Extraposition Advanced": ["It struck me that", "It occurred to me that"],
  "Pseudo-clefts": ["What I want is", "Where I live is"],
  "Left Dislocation": ["John, I like him", "That book, I've read it"],
  "Right Dislocation": ["I like him, John", "I've read it, that book"],
  Gapping: ["John likes apples and Mary oranges"],
  "VP Ellipsis": ["John will come and Mary will too"],
  Sluicing: ["Someone called, but I don't know who"],
  Pseudogapping: ["John has read more books than Mary has magazines"],
  Stripping: ["John is tall, and Bill too"],
  "Answer Fragments": ["Who came? John.", "What did you buy? A book."],
  "Comparatives Advanced": ["The sooner the better", "More and more difficult"],
  "Quantifier Float": ["The students all came", "They both arrived"],
  "Expletive Constructions": ["There being no time", "It being late"],
  Absolutes: ["All things considered", "Weather permitting"],
  "Participial Absolutes": [
    "Having finished the work",
    "The work being finished",
  ],
  "Nominative Absolute": [
    "The weather being fine",
    "All preparations complete",
  ],
  "Accusative and Infinitive": ["I believe him to be honest"],
  "Raising to Object": ["I expect him to come"],
  "Exceptional Case Marking": ["I want him to go"],
  "Secondary Predication": ["I painted the house red", "She arrived tired"],

  // Phonological and Orthographic Patterns
  "Silent Letters": ["knife", "lamb", "castle", "island"],
  Homophones: ["there/their/they're", "to/too/two", "hear/here"],
  Homographs: ["lead (metal/guide)", "tear (cry/rip)", "wind (air/turn)"],
  "Minimal Pairs": ["bit/bet", "ship/sheep", "cat/cut"],
  "Word Stress Patterns": ["photograph/photography", "economic/economy"],
  "Sentence Stress": ["Content words", "Function words", "Contrastive stress"],
  "Weak Forms": ["can/can't", "was/were", "of/have"],
  "Connected Speech": ["Linking", "Assimilation", "Elision"],
  "Intonation Patterns": [
    "Rising intonation",
    "Falling intonation",
    "Fall-rise",
  ],
  Rhythm: ["Stress-timed rhythm", "Word stress", "Sentence rhythm"],

  // Lexical and Semantic Patterns
  "Collocations Strong": ["make a decision", "take a photo", "do homework"],
  "Collocations Weak": ["big house", "strong tea", "heavy rain"],
  "Fixed Expressions": [
    "by and large",
    "first and foremost",
    "last but not least",
  ],
  Binomials: ["knife and fork", "black and white", "ups and downs"],
  Trinomials: ["stop, look and listen", "ready, willing and able"],
  Euphemisms: ["pass away", "let go", "economically disadvantaged"],
  Dysphemisms: ["kick the bucket", "croak", "snuff it"],
  "Metaphorical Language": ["Time is money", "Life is a journey"],
  Metonymy: ["The White House said", "Wall Street is worried"],
  Synecdoche: ["All hands on deck", "Nice wheels"],
  Hyperbole: ["I've told you a million times", "It weighs a ton"],
  Litotes: ["Not bad", "Not uncommon", "Not unpleasant"],
  Irony: ["What a lovely day (in rain)", "Great job (sarcastic)"],
  Oxymoron: ["Deafening silence", "Jumbo shrimp", "Act naturally"],

  // Pragmatic and Discourse Patterns
  "Speech Acts Direct": ["Close the door", "I promise", "I apologize"],
  "Speech Acts Indirect": ["Can you pass the salt?", "Would you mind...?"],
  "Politeness Strategies": ["Positive politeness", "Negative politeness"],
  "Face-Threatening Acts": ["Requests", "Complaints", "Criticisms"],
  "Turn-Taking Signals": ["Well...", "Actually...", "By the way..."],
  Backchanneling: ["Uh-huh", "Right", "I see", "Mm-hmm"],
  "Repair Strategies": ["Self-correction", "Other-correction", "Clarification"],
  "Hesitation Phenomena": ["Um", "Er", "You know", "Like"],
  "Discourse Deixis": ["This", "That", "Here", "There", "Now", "Then"],
  "Anaphoric Reference": ["He", "She", "It", "They", "One"],
  "Cataphoric Reference": ["It was clear that...", "This is what happened..."],
  "Substitution Pro-forms": ["One", "Do", "So", "Not"],
  "Lexical Cohesion": ["Repetition", "Synonymy", "Hyponymy", "Meronymy"],

  // Final A1 Level completions
  "Basic Question Words": [
    "what",
    "where",
    "when",
    "who",
    "why",
    "how",
    "which",
  ],
  "Basic Negative Forms": [
    "not",
    "no",
    "don't",
    "doesn't",
    "can't",
    "isn't",
    "aren't",
  ],
  "Basic Affirmative": ["yes", "okay", "sure", "of course", "certainly"],
  "Personal Possessions": ["mine", "yours", "his", "hers", "ours", "theirs"],
  "Basic Locations": ["home", "school", "work", "hospital", "shop", "park"],
  "Transport Basics": ["by car", "by bus", "on foot", "by bike", "by train"],
  "Weather Basics": [
    "sunny",
    "rainy",
    "cloudy",
    "windy",
    "hot",
    "cold",
    "warm",
  ],
  "Daily Routines": ["get up", "go to bed", "have breakfast", "go to work"],
  "Simple Past Questions": ["Did you...?", "Was it...?", "Were they...?"],
  "Simple Responses": [
    "Yes, I did",
    "No, I didn't",
    "Yes, it was",
    "No, it wasn't",
  ],

  // Final A2 Level completions
  "Making Plans": ["I'm going to", "I plan to", "I intend to", "I hope to"],
  "Expressing Preferences": [
    "I prefer",
    "I'd rather",
    "I like better",
    "I choose",
  ],
  "Giving Directions": [
    "turn left",
    "turn right",
    "go straight",
    "take the first",
  ],
  "Describing People": [
    "tall",
    "short",
    "thin",
    "fat",
    "young",
    "old",
    "beautiful",
  ],
  "Describing Places": [
    "big",
    "small",
    "quiet",
    "noisy",
    "clean",
    "dirty",
    "modern",
  ],
  "Making Appointments": [
    "Are you free?",
    "What time?",
    "How about?",
    "See you at",
  ],
  "Telephone Language": [
    "Hello",
    "Speaking",
    "Hold on",
    "Can I take a message?",
  ],
  "Basic Complaints": ["I'm not happy", "There's a problem", "It doesn't work"],
  "Simple Comparisons": [
    "better than",
    "worse than",
    "the same as",
    "different from",
  ],
  "Quantity Expressions": [
    "a lot of",
    "lots of",
    "plenty of",
    "a bit of",
    "a little bit",
  ],

  // Final B1 Level completions
  "Hypothetical Situations": ["What if", "Suppose", "Imagine", "Let's say"],
  "Cause and Effect": [
    "because of",
    "due to",
    "as a result of",
    "leads to",
    "causes",
  ],
  "Expressing Probability": [
    "It's likely",
    "It's unlikely",
    "There's a chance",
    "Probably",
  ],
  "Making Predictions": [
    "I think will",
    "I expect",
    "I predict",
    "It's going to",
  ],
  "Expressing Regret": [
    "I wish I had",
    "I should have",
    "If only I had",
    "I regret",
  ],
  "Giving Advice": [
    "You should",
    "You ought to",
    "Why don't you",
    "Have you tried",
  ],
  "Narrative Connectors": [
    "At first",
    "In the beginning",
    "Meanwhile",
    "In the end",
  ],
  "Adding Information": [
    "What's more",
    "Furthermore",
    "In addition",
    "Also",
    "Besides",
  ],
  "Expressing Concern": [
    "I'm worried about",
    "I'm concerned about",
    "I'm afraid that",
  ],
  "Making Suggestions": [
    "How about",
    "What about",
    "Why don't we",
    "Let's",
    "Shall we",
  ],

  // Final B2 Level completions
  "Complex Reasoning": [
    "Given that",
    "Considering",
    "Taking into account",
    "In view of",
  ],
  "Evaluating Arguments": [
    "On balance",
    "All things considered",
    "Weighing up",
    "Overall",
  ],
  "Expressing Skepticism": [
    "I doubt whether",
    "I question whether",
    "I'm not convinced",
  ],
  "Acknowledging Points": [
    "I take your point",
    "That's a fair point",
    "I see what you mean",
  ],
  "Qualifying Statements": [
    "To some extent",
    "Up to a point",
    "In some ways",
    "Partly",
  ],
  "Emphasizing Points": [
    "Above all",
    "Most importantly",
    "The main thing is",
    "Crucially",
  ],
  "Contrasting Ideas": [
    "On the contrary",
    "Conversely",
    "In contrast",
    "By comparison",
  ],
  "Drawing Conclusions": [
    "It follows that",
    "We can conclude",
    "This suggests",
    "Therefore",
  ],
  Speculating: ["It could be that", "Perhaps", "It's possible that", "Maybe"],
  "Academic Referencing": [
    "According to",
    "As stated by",
    "Research shows",
    "Studies indicate",
  ],

  // Final C1 Level completions
  "Nuanced Agreement": [
    "I couldn't agree more",
    "Absolutely",
    "Precisely",
    "Exactly my point",
  ],
  "Diplomatic Disagreement": [
    "I'm afraid I can't agree",
    "I beg to differ",
    "With respect",
  ],
  "Sophisticated Analysis": [
    "This implies",
    "This presupposes",
    "The underlying assumption",
  ],
  "Critical Evaluation": [
    "The evidence suggests",
    "Data indicates",
    "Research demonstrates",
  ],
  "Theoretical Discussion": [
    "In theory",
    "Theoretically speaking",
    "From a theoretical perspective",
  ],
  "Methodological Language": [
    "The approach involves",
    "The methodology consists of",
    "The framework",
  ],
  "Interpretive Language": [
    "This can be interpreted as",
    "One interpretation is",
    "This suggests",
  ],
  "Conceptual Language": [
    "The concept of",
    "The notion of",
    "The principle of",
    "The theory of",
  ],
  "Analytical Discourse": [
    "Analysis reveals",
    "Examination shows",
    "Investigation indicates",
  ],
  "Synthesis Language": [
    "Bringing together",
    "Combining",
    "Integrating",
    "Synthesizing",
  ],

  // Final C2 Level completions
  "Philosophical Discourse": [
    "Existentially speaking",
    "Ontologically",
    "Epistemologically",
  ],
  "Theoretical Linguistics": [
    "Morphophonology",
    "Syntax-semantics interface",
    "Pragmatics",
  ],
  "Advanced Rhetoric": [
    "Rhetorically speaking",
    "From a rhetorical perspective",
    "Stylistically",
  ],
  "Meta-discourse": [
    "Discursively",
    "Textually",
    "Linguistically",
    "Communicatively",
  ],
  "Cognitive Processes": [
    "Conceptualization",
    "Categorization",
    "Mental representation",
  ],
  "Academic Genres": [
    "Dissertation",
    "Thesis",
    "Monograph",
    "Treatise",
    "Scholarly article",
  ],
  "Research Methodology": [
    "Qualitative",
    "Quantitative",
    "Mixed methods",
    "Longitudinal",
  ],
  "Statistical Language": [
    "Correlation",
    "Causation",
    "Significance",
    "Variables",
    "Hypothesis",
  ],
  "Critical Theory": [
    "Deconstruction",
    "Postmodernism",
    "Structuralism",
    "Hermeneutics",
  ],
  "Interdisciplinary Terms": [
    "Cross-disciplinary",
    "Multidisciplinary",
    "Transdisciplinary",
  ],

  // Specialized Academic and Professional Registers
  "Medical Terminology": [
    "diagnosis",
    "prognosis",
    "etiology",
    "pathology",
    "therapeutic",
  ],
  "Legal Terminology": [
    "litigation",
    "jurisdiction",
    "precedent",
    "statute",
    "jurisprudence",
  ],
  "Business Terminology": [
    "stakeholder",
    "synergy",
    "paradigm",
    "leverage",
    "optimization",
  ],
  "Scientific Terminology": [
    "hypothesis",
    "methodology",
    "empirical",
    "quantitative",
    "qualitative",
  ],
  "Technical Writing": [
    "specifications",
    "parameters",
    "algorithms",
    "protocols",
    "interfaces",
  ],
  "Literary Criticism": [
    "metaphor",
    "symbolism",
    "allegory",
    "irony",
    "characterization",
  ],
  "Historical Discourse": [
    "chronology",
    "periodization",
    "historiography",
    "primary sources",
  ],
  "Philosophical Terms": [
    "ontology",
    "epistemology",
    "phenomenology",
    "dialectic",
    "hermeneutic",
  ],

  // Complete Tense System Coverage
  "Future Perfect Continuous Complete": [
    "will have been + verb+ing",
    "shall have been + verb+ing",
  ],
  "Past Perfect Continuous Complete": [
    "had been + verb+ing",
    "continuous past perfect",
  ],
  "Present Perfect Continuous Complete": [
    "have/has been + verb+ing",
    "continuous present perfect",
  ],
  "Future Continuous Complete": ["will be + verb+ing", "shall be + verb+ing"],
  "Conditional Perfect Continuous": [
    "would have been + verb+ing",
    "could have been + verb+ing",
  ],
  "Modal Perfect Continuous": [
    "must have been + verb+ing",
    "might have been + verb+ing",
  ],

  // Complete Mood System
  "Indicative Mood Complete": [
    "statements of fact",
    "declarations",
    "assertions",
  ],
  "Imperative Mood Complete": [
    "commands",
    "requests",
    "instructions",
    "prohibitions",
  ],
  "Subjunctive Mood Complete": [
    "hypothetical",
    "contrary to fact",
    "formal recommendations",
  ],
  "Conditional Mood Complete": [
    "hypothetical situations",
    "polite requests",
    "unreal conditions",
  ],

  // Complete Aspect System
  "Perfective Aspect": [
    "completed actions",
    "finished events",
    "accomplished states",
  ],
  "Imperfective Aspect": [
    "ongoing actions",
    "habitual events",
    "continuous states",
  ],
  "Iterative Aspect": [
    "repeated actions",
    "habitual patterns",
    "cyclical events",
  ],
  "Inchoative Aspect": [
    "beginning actions",
    "starting processes",
    "initial states",
  ],
  "Terminative Aspect": [
    "ending actions",
    "concluding processes",
    "final states",
  ],

  // Complete Voice System
  "Active Voice Complete": [
    "subject performs action",
    "agent-focused",
    "direct action",
  ],
  "Passive Voice Complete": [
    "subject receives action",
    "patient-focused",
    "indirect action",
  ],
  "Middle Voice": ["subject affects self", "reflexive action", "self-directed"],
  "Causative Voice": [
    "causing someone to do",
    "having something done",
    "making happen",
  ],

  // Complete Sentence Types
  "Declarative Sentences Complete": [
    "statements",
    "assertions",
    "declarations",
    "facts",
  ],
  "Interrogative Sentences Complete": [
    "questions",
    "inquiries",
    "requests for information",
  ],
  "Exclamatory Sentences Complete": [
    "exclamations",
    "expressions of emotion",
    "strong feelings",
  ],
  "Imperative Sentences Complete": [
    "commands",
    "requests",
    "instructions",
    "directions",
  ],

  // Pragmatic Functions Complete
  Commissives: ["promises", "commitments", "pledges", "vows", "guarantees"],
  Directives: ["commands", "requests", "suggestions", "invitations", "advice"],
  Expressives: [
    "apologies",
    "thanks",
    "congratulations",
    "condolences",
    "complaints",
  ],
  Representatives: [
    "assertions",
    "claims",
    "reports",
    "descriptions",
    "explanations",
  ],
  Declarations: ["pronouncements", "verdicts", "christenings", "appointments"],

  // Complete Linguistic Competencies
  "Phonetic Competence": [
    "pronunciation",
    "articulation",
    "phonemes",
    "allophones",
  ],
  "Phonological Competence": [
    "sound patterns",
    "syllable structure",
    "stress",
    "intonation",
  ],
  "Morphological Competence": [
    "word formation",
    "inflection",
    "derivation",
    "compounding",
  ],
  "Syntactic Competence": [
    "sentence structure",
    "phrase structure",
    "word order",
    "agreement",
  ],
  "Semantic Competence": [
    "meaning",
    "reference",
    "sense relations",
    "lexical relations",
  ],
  "Pragmatic Competence Complete": [
    "context use",
    "implicature",
    "speech acts",
    "politeness",
  ],
  "Sociolinguistic Competence": [
    "register",
    "dialect",
    "style",
    "appropriateness",
  ],
  "Strategic Competence": [
    "communication strategies",
    "repair",
    "circumlocution",
    "approximation",
  ],
  "Discourse Competence": [
    "cohesion",
    "coherence",
    "organization",
    "genre knowledge",
  ],
  "Intercultural Competence": [
    "cultural awareness",
    "cross-cultural communication",
    "cultural sensitivity",
  ],

  // Final Missing Patterns for 100% A1-C2 Coverage

  // A1 - Ultra-Basic Survival English
  "Basic Survival Phrases": [
    "Help!",
    "Emergency",
    "Call police",
    "Where is bathroom?",
  ],
  "Numbers in Context": [
    "phone numbers",
    "addresses",
    "prices",
    "room numbers",
  ],
  "Basic Spelling": [
    "How do you spell your name?",
    "letter by letter",
    "A as in Apple",
  ],
  "Clock Time": [
    "What time is it?",
    "It's 3 o'clock",
    "half past",
    "quarter to",
  ],
  "Basic Emotions": ["I'm happy", "I'm sad", "I'm angry", "I'm tired"],
  "Essential Needs": ["I need", "I want", "I'm hungry", "I'm thirsty"],
  "Basic Responses": ["I don't know", "I don't understand", "Can you repeat?"],
  "Classroom Language": ["Listen", "Repeat", "Open your books", "Page 10"],

  // A2 - Expanded Daily Communication
  "Making Excuses": [
    "I'm sorry, but",
    "I can't because",
    "I have to",
    "Something came up",
  ],
  "Expressing Ability": ["I can do it", "I'm good at", "I'm not very good at"],
  "Physical Descriptions": [
    "He has brown hair",
    "She's wearing",
    "tall and thin",
  ],
  "Booking Services": [
    "I'd like to book",
    "Is there availability?",
    "How much does it cost?",
  ],
  "Past Experiences": [
    "I have never",
    "I have already",
    "I have just",
    "I haven't yet",
  ],
  "Future Arrangements": [
    "I'm meeting",
    "We're having",
    "Are you doing anything?",
  ],
  "Expressing Likes/Dislikes": [
    "I love",
    "I hate",
    "I don't mind",
    "I can't stand",
  ],
  "Basic Complaints Extended": [
    "There's something wrong",
    "It's not working",
    "I'm not satisfied",
  ],

  // B1 - Intermediate Communication Functions
  "Expressing Opinions": [
    "In my view",
    "From my perspective",
    "As far as I'm concerned",
  ],
  "Making Recommendations": [
    "I'd recommend",
    "You might want to try",
    "Have you considered?",
  ],
  "Expressing Doubt": [
    "I'm not sure about",
    "I have my doubts",
    "I'm skeptical about",
  ],
  "Talking About Changes": [
    "Things have changed",
    "There's been a shift",
    "It's different now",
  ],
  "Expressing Importance": [
    "It's crucial that",
    "What matters most is",
    "The key thing is",
  ],
  "Making Comparisons": [
    "Compared to",
    "In comparison with",
    "Similar to",
    "Different from",
  ],
  "Cause and Consequence": [
    "This results in",
    "This leads to",
    "The consequence is",
  ],
  "Agreeing and Disagreeing": [
    "I totally agree",
    "I'm not so sure",
    "That's not necessarily true",
  ],

  // B2 - Advanced Discourse Functions
  "Sophisticated Opinions": [
    "I'm inclined to think",
    "I tend to believe",
    "My impression is",
  ],
  "Nuanced Agreements": [
    "That's partly true",
    "I agree to some extent",
    "You have a point, but",
  ],
  "Complex Explanations": [
    "The reason behind this",
    "This can be attributed to",
    "This stems from",
  ],
  "Evaluating Information": [
    "The data suggests",
    "Evidence indicates",
    "Research has shown",
  ],
  "Expressing Reservations": [
    "I have some reservations",
    "I'm somewhat concerned",
    "There are drawbacks",
  ],
  "Academic Discussion": [
    "The literature suggests",
    "Studies have demonstrated",
    "Scholars argue",
  ],
  "Problem-Solution": [
    "One solution might be",
    "This could be addressed by",
    "A possible approach",
  ],
  "Trend Analysis": [
    "There's been an increase in",
    "We've seen a decline",
    "The trend shows",
  ],

  // C1 - Sophisticated Academic/Professional
  "Critical Analysis": [
    "A critical examination reveals",
    "Upon closer inspection",
    "This warrants scrutiny",
  ],
  "Theoretical Framework": [
    "Within this framework",
    "From a theoretical standpoint",
    "This paradigm suggests",
  ],
  "Methodological Discussion": [
    "The methodology employed",
    "Data collection involved",
    "Analysis procedures",
  ],
  "Synthesizing Information": [
    "Drawing these threads together",
    "Integrating these findings",
    "The overall picture",
  ],
  "Qualifying Statements Advanced": [
    "With certain caveats",
    "Subject to limitations",
    "Within certain parameters",
  ],
  "Scholarly Discourse": [
    "The scholarly consensus",
    "Academic discourse",
    "Intellectual inquiry",
  ],
  "Research Terminology": [
    "Variables",
    "Controls",
    "Methodology",
    "Findings",
    "Implications",
  ],
  "Advanced Rhetorical Strategies": [
    "Persuasive discourse",
    "Argumentative structure",
    "Rhetorical strategies",
  ],

  // C2 - Expert-Level Linguistic Sophistication
  "Philosophical Inquiry": [
    "Ontological questions",
    "Epistemological concerns",
    "Metaphysical implications",
  ],
  "Linguistic Metalanguage": [
    "Morphological analysis",
    "Syntactic structures",
    "Semantic interpretation",
  ],
  "Advanced Critical Theory": [
    "Deconstructionist approach",
    "Post-structuralist perspective",
    "Hermeneutic analysis",
  ],
  "Interdisciplinary Discourse": [
    "Cross-paradigmatic analysis",
    "Transdisciplinary synthesis",
    "Multifaceted approach",
  ],
  "Expert Nuanced Modality": [
    "Epistemic possibility",
    "Deontic necessity",
    "Alethic contingency",
  ],
  "Sophisticated Register": [
    "Elevated discourse",
    "Formal register",
    "Academic prose style",
  ],
  "Meta-cognitive Language": [
    "Cognitive processes",
    "Mental representations",
    "Conceptual frameworks",
  ],
  "Expert Communication": [
    "Professional discourse",
    "Specialized terminology",
    "Technical precision",
  ],

  // Additional Micro-Skills for Complete Coverage
  "Word Formation Processes": [
    "prefixes",
    "suffixes",
    "compounds",
    "blends",
    "acronyms",
  ],
  "Semantic Fields": [
    "hyponymy",
    "meronymy",
    "synonymy",
    "antonymy",
    "polysemy",
  ],
  "Pragmatic Inference": [
    "implicature",
    "presupposition",
    "entailment",
    "speech act theory",
  ],
  "Discourse Analysis": [
    "cohesion",
    "coherence",
    "topic-comment",
    "theme-rheme",
  ],
  "Sociolinguistic Variables": [
    "age",
    "gender",
    "class",
    "ethnicity",
    "region",
  ],
  "Language Variation": [
    "formal/informal",
    "spoken/written",
    "dialectal",
    "stylistic",
  ],
  "Communicative Strategies": [
    "clarification",
    "confirmation",
    "comprehension check",
  ],
  "Error Types": [
    "fossilization",
    "interference",
    "overgeneralization",
    "simplification",
  ],

  // Technical Grammar Terminology
  "Grammatical Categories": [
    "person",
    "number",
    "gender",
    "case",
    "tense",
    "aspect",
    "mood",
  ],
  "Phrase Structure": [
    "noun phrase",
    "verb phrase",
    "prepositional phrase",
    "adjectival phrase",
  ],
  "Clause Types": [
    "main clause",
    "subordinate clause",
    "relative clause",
    "complement clause",
  ],
  "Sentence Functions": [
    "subject",
    "predicate",
    "object",
    "complement",
    "adjunct",
  ],
  "Morphological Types": [
    "inflectional",
    "derivational",
    "compounding",
    "conversion",
  ],
  "Phonological Processes": [
    "assimilation",
    "dissimilation",
    "epenthesis",
    "deletion",
  ],
  "Semantic Roles": ["agent", "patient", "theme", "experiencer", "beneficiary"],
  "Information Structure": ["given-new", "focus-background", "topic-comment"],

  // Language Learning and Teaching
  "Learning Strategies": ["cognitive", "metacognitive", "social", "affective"],
  "Assessment Types": ["formative", "summative", "diagnostic", "placement"],
  "Skill Integration": [
    "listening-speaking",
    "reading-writing",
    "integrated skills",
  ],
  "Language Functions": [
    "transactional",
    "interactional",
    "textual",
    "ideational",
  ],
  "Competency Areas": [
    "linguistic",
    "sociolinguistic",
    "pragmatic",
    "strategic",
  ],
  "Proficiency Levels": [
    "threshold",
    "vantage",
    "effective operational",
    "mastery",
  ],
  "Error Analysis": [
    "interlingual",
    "intralingual",
    "developmental",
    "individual",
  ],
  "Feedback Types": ["corrective", "positive", "metalinguistic", "elicitation"],
};

export const extractGrammarFocus = (question: Question): string => {
  const text = `${question.question ?? ""} ${
    question.explanation ?? ""
  }`.toLowerCase();

  for (const [grammarPoint, keywords] of Object.entries(grammarPatterns)) {
    if (keywords.some((keyword) => text.includes(keyword))) {
      return grammarPoint;
    }
  }

  return (
    question.tense || question.type?.replace(/-/g, " ") || "General Grammar"
  );
};

/* Helper function to create detailed suggestions */
export const createDetailedSuggestion = (question: Question): string => {
  const questionType = question.type || "grammar";
  const questionText = question.question?.toLowerCase() || "";
  const explanation = question.explanation?.toLowerCase() || "";
  const tense = question.tense;

  let grammarFocus = "";

  // ======= Detect grammar pattern ==========
  if (questionText.includes("has") || questionText.includes("have been")) {
    grammarFocus = "Present Perfect or Present Perfect Continuous";
  } else if (questionText.includes("had been")) {
    grammarFocus = "Past Perfect Continuous";
  } else if (questionText.includes("had")) {
    grammarFocus = "Past Perfect";
  } else if (questionText.includes("will have")) {
    grammarFocus = "Future Perfect";
  } else if (questionText.includes("will be")) {
    grammarFocus = "Future Continuous";
  } else if (questionText.includes("will") || questionText.includes("going to")) {
    grammarFocus = "Future Simple";
  } else if (
    questionText.includes("would have") ||
    questionText.includes("could have") ||
    explanation.includes("third conditional")
  ) {
    grammarFocus = "Third Conditional";
  } else if (questionText.includes("would") || questionText.includes("could")) {
    grammarFocus = "Modal Verbs and Second Conditional";
  } else if (questionText.includes("did") || questionText.includes("was") || questionText.includes("were")) {
    grammarFocus = "Past Simple or Past Continuous";
  } else if (questionText.includes("am") || questionText.includes("is") || questionText.includes("are")) {
    if (questionText.includes("ing")) {
      grammarFocus = "Present Continuous";
    } else {
      grammarFocus = "Present Simple";
    }
  } else if (
    questionText.includes("must") ||
    questionText.includes("should") ||
    questionText.includes("might") ||
    questionText.includes("may") ||
    questionText.includes("can")
  ) {
    grammarFocus = "Modal Verbs";
  } else if (questionText.includes("if") || questionText.includes("unless")) {
    grammarFocus = "Conditional Sentences";
  } else if (questionText.includes("who") || questionText.includes("which") || questionText.includes("that")) {
    grammarFocus = "Relative Clauses";
  } else if (questionText.includes("by") && questionText.includes("be")) {
    grammarFocus = "Passive Voice";
  } else if (questionText.match(/\b(a|an|the)\b/)) {
    grammarFocus = "Articles (a, an, the)";
  } else if (questionText.match(/\b(in|on|at|under|over|into|from|to)\b/)) {
    grammarFocus = "Prepositions";
  } else if (questionText.includes("too") || questionText.includes("enough")) {
    grammarFocus = "Too and Enough";
  } else if (questionText.match(/\b(so|such)\b/)) {
    grammarFocus = "So and Such";
  } else if (questionText.match(/\b(never|seldom|rarely|hardly|no sooner)\b/)) {
    grammarFocus = "Inversion";
  } else if (questionText.match(/\b(would rather|had better)\b/)) {
    grammarFocus = "Would Rather / Had Better";
  } else if (questionText.includes("because") || questionText.includes("although")) {
    grammarFocus = "Conjunctions";
  } else if (questionText.match(/\b(who|what|where|when|why|how)\b/)) {
    grammarFocus = "Wh- Questions";
  } else if (questionText.includes("get") && questionText.includes("done")) {
    grammarFocus = "Causative Structure";
  } else if (questionText.match(/\b(never have I|no sooner had|rarely do)\b/)) {
    grammarFocus = "Advanced Inversion";
  } else if (questionText.match(/\b(this|that|these|those)\b/)) {
    grammarFocus = "Demonstratives";
  } else if (questionText.match(/\b(one|ones|do so|that)\b/)) {
    grammarFocus = "Substitution";
  } else if (questionText.match(/\b(so do I|neither do I)\b/)) {
    grammarFocus = "Agreement and Disagreement";
  } else if (tense) {
    grammarFocus = tense;
  } else {
    grammarFocus = questionType.replace(/-/g, " ");
  }

  // ========== Generate suggestions ==============
  const typeSpecificSuggestions: Record<string, string[]> = {
    "multiple-choice": [
      `${grammarFocus} multiple choice exercises`,
      `Practice identifying ${grammarFocus.toLowerCase()} forms`,
      `Choose correct answers in ${grammarFocus.toLowerCase()}`,
    ],
    "fill-in-blank": [
      `Fill the blanks with correct ${grammarFocus.toLowerCase()} form`,
      `Gap fill exercises using ${grammarFocus.toLowerCase()}`,
      `Practice ${grammarFocus.toLowerCase()} with blank sentences`,
    ],
    "error-correction": [
      `Correct errors involving ${grammarFocus.toLowerCase()}`,
      `Spot and fix mistakes in ${grammarFocus.toLowerCase()} grammar`,
      `${grammarFocus} error correction tasks`,
    ],
    "sentence-completion": [
      `Complete the sentence with correct ${grammarFocus.toLowerCase()}`,
      `Build full sentences using ${grammarFocus.toLowerCase()}`,
      `Sentence construction using ${grammarFocus}`,
    ],
    "word-order": [
      `Reorder words to form correct ${grammarFocus.toLowerCase()} sentences`,
      `${grammarFocus} sentence structure practice`,
      `Fix the word order in ${grammarFocus.toLowerCase()} examples`,
    ],
    transformation: [
      `Transform sentences using ${grammarFocus.toLowerCase()}`,
      `${grammarFocus} rewriting exercises`,
      `Change the sentence form but keep the same meaning using ${grammarFocus}`,
    ],
    "reading-comprehension": [
      `Read texts containing ${grammarFocus.toLowerCase()} examples`,
      `Identify ${grammarFocus.toLowerCase()} usage in context`,
      `Practice ${grammarFocus.toLowerCase()} through reading`,
    ],
    "cloze-test": [
      `Cloze test: Fill gaps with ${grammarFocus.toLowerCase()} structures`,
      `Context-based ${grammarFocus} completion`,
      `Use ${grammarFocus} grammar to complete the text`,
    ],
  };

  const suggestions = typeSpecificSuggestions[questionType] || [
    `${grammarFocus} grammar practice`,
    `Exercises focusing on ${grammarFocus.toLowerCase()}`,
    `More ${grammarFocus.toLowerCase()} usage drills`,
  ];

  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];

  return randomSuggestion;
};


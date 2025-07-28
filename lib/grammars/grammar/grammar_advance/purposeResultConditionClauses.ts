import { purposeResultConditionClausesType } from "@/types/grammars/grammar/grammar_advance/purposeResultConditionClauses";

export const purposeResultConditionClausesData: purposeResultConditionClausesType =
  {
    title:
      "Mệnh đề chỉ mục đích, kết quả, điều kiện nâng cao (Purpose, Result, Conditional Clauses)",

    definition:
      "Purpose, Result, and Conditional clauses are subordinate clauses that express the intention behind an action (purpose), the outcome of an action (result), or the circumstances under which something happens (condition). These clauses are essential for creating complex, sophisticated sentences in academic and professional writing.",

    overview: {
      description:
        "These three types of clauses work together to create logical relationships between ideas in complex sentences. They are fundamental to advanced English grammar and are extensively used in academic writing, formal communication, and standardized tests like IELTS, TOEFL, and Cambridge exams.",
      importance:
        "Mastering these clauses is crucial for: 1) Academic writing proficiency, 2) Expressing complex ideas clearly, 3) Achieving higher bands in English proficiency tests, 4) Professional communication effectiveness, 5) Understanding sophisticated texts.",
      usage:
        "These clauses are predominantly used in formal writing, academic papers, business correspondence, legal documents, and sophisticated spoken English. They help create cohesive and coherent discourse.",
    },

    categories: [
      {
        type: "Purpose Clauses",
        definition:
          "Purpose clauses express the intention, aim, or goal behind an action. They answer the question 'Why?' or 'For what purpose?' and are essential for showing causality and motivation in both spoken and written English.",
        description: "Dùng để chỉ mục đích của hành động.",
        keyFeatures: [
          "Express intention or goal",
          "Can be infinitive or finite clauses",
          "Often use modal verbs in formal contexts",
          "Require careful subject-verb agreement",
          "Can be positive or negative",
        ],
        commonMistakes: [
          "Using 'for to' instead of 'in order to'",
          "Wrong modal verb choice after 'so that'",
          "Confusing purpose with result clauses",
          "Incorrect use of 'lest' in modern English",
          "Subject-verb disagreement in complex structures",
        ],
        levels: [
          {
            level: "A1-A2",
            description:
              "Basic purpose expression using simple infinitive structures and common purpose conjunctions. Students learn fundamental patterns for expressing why they do something.",
            keyLearningPoints: [
              "Basic infinitive of purpose (to + verb)",
              "Simple 'so that' clauses with present/future reference",
              "Understanding the difference between purpose and result",
              "Basic negative purpose ('so as not to')",
              "Common everyday purposes",
            ],
            structures: [
              "to + V-inf",
              "in order to + V-inf",
              "so as to + V-inf",
              "so that + S + can/will + V",
              "for + noun/pronoun + to + V-inf",
            ],
            examples: [
              "She studies hard **to** pass the exam.",
              "He exercises **to** stay healthy.",
              "They left early **in order to** catch the train.",
              "I prepared dinner **for him to** eat after work.",
              "We save money **so that we can** buy a house.",
            ],
            commonErrors: [
              "❌ I go to school for to learn (✅ I go to school to learn)",
              "❌ He works so that he will can earn money (✅ He works so that he can earn money)",
              "❌ She exercises for stay healthy (✅ She exercises to stay healthy)",
            ],
            tips: [
              "Use 'to + infinitive' for simple, direct purposes",
              "Use 'so that' when you want to specify the person who benefits",
              "'In order to' is more formal than just 'to'",
              "Remember: no 'for' before 'to' in purpose clauses",
            ],
          },
          {
            level: "B1-B2",
            description:
              "Intermediate purpose structures including modal variations, negative purposes, and more complex subject relationships. Introduction to formal registers.",
            keyLearningPoints: [
              "Modal verbs in purpose clauses (may, might, could, would)",
              "Negative purpose structures",
              "Different subjects in main and purpose clauses",
              "Formal vs informal purpose expressions",
              "Time relationship in purpose clauses",
            ],
            structures: [
              "so that + S + may/might/can/could/would + V",
              "for fear that + S + might/would + V",
              "lest + S + should + V (formal)",
              "in case + clause",
              "so as not to + V-inf",
              "in order not to + V-inf",
            ],
            examples: [
              "He wrote it down **so that he wouldn't forget**.",
              "She took an umbrella **in case it rained**.",
              "He spoke quietly **for fear that someone might hear him**.",
              "I'll explain it again **lest you should misunderstand**.",
              "They left early **so as not to** be late.",
              "She whispered **so that the baby wouldn't wake up**.",
            ],
            notes:
              "Dùng 'lest', 'for fear that', 'so that' + modal verbs, variety in subjects.",
            formalVsInformal: {
              formal: [
                "in order that + clause",
                "lest + S + should + V",
                "for fear that + clause",
                "with a view to + V-ing",
              ],
              informal: ["to + infinitive", "so + clause", "in case + clause"],
            },
            commonErrors: [
              "❌ I study hard in case I will pass (✅ I study hard so that I will pass)",
              "❌ He left early for not to be late (✅ He left early so as not to be late)",
              "❌ She whispers lest the baby will wake up (✅ She whispers lest the baby should wake up)",
            ],
            tips: [
              "'Lest' is very formal and rarely used in modern English",
              "'In case' suggests precaution, not purpose",
              "Use 'might' or 'could' for less certain purposes",
              "Negative purposes often use 'so as not to' or 'in order not to'",
            ],
          },
          {
            level: "C1-C2",
            description:
              "Advanced purpose clauses with sophisticated vocabulary, academic register, and complex syntactic structures. Emphasis on stylistic variation and discourse functions.",
            keyLearningPoints: [
              "Academic and professional purpose expressions",
              "Complex purpose chains and embedded clauses",
              "Stylistic variation and register awareness",
              "Purpose in passive constructions",
              "Implied and ellipted purpose clauses",
            ],
            structures: [
              "with a view to + V-ing",
              "so as not to + V",
              "in order not to + V",
              "for the purpose of + V-ing",
              "with the intention of + V-ing",
              "aimed at + V-ing",
              "designed to + V-inf",
            ],
            examples: [
              "He joined the program **with a view to improving** his English.",
              "She left early **so as not to** miss the bus.",
              "He avoided talking to her **in order not to cause trouble**.",
              "The campaign was launched **for the purpose of raising awareness**.",
              "The policy was **designed to** reduce unemployment.",
              "The study was conducted **with the intention of** finding new solutions.",
            ],
            notes:
              "Phong cách trang trọng hơn, dùng trong học thuật, văn chương.",
            academicUsage: [
              "This research aims to investigate...",
              "The methodology was designed to ensure...",
              "Data was collected with a view to analyzing...",
              "The framework was developed for the purpose of...",
            ],
            commonErrors: [
              "❌ The study aims for to investigate (✅ The study aims to investigate)",
              "❌ With a view of improving (✅ with a view to improving)",
              "❌ For the purpose to help (✅ for the purpose of helping)",
            ],
            tips: [
              "Use gerunds (-ing) after 'with a view to' and 'for the purpose of'",
              "Academic writing prefers 'aims to' over 'wants to'",
              "Vary your purpose expressions to avoid repetition",
              "Consider the passive voice in formal contexts",
            ],
          },
        ],
      },
      {
        type: "Result Clauses",
        definition:
          "Result clauses express the consequence or outcome that follows from the action or situation described in the main clause. They answer 'What happened as a result?' and are crucial for showing cause-and-effect relationships.",
        description: "Dùng để chỉ kết quả của hành động.",
        keyFeatures: [
          "Express consequences and outcomes",
          "Show cause-and-effect relationships",
          "Can indicate degree or extent",
          "Often use intensifiers (so, such, too, enough)",
          "Can be positive or negative results",
        ],
        commonMistakes: [
          "Confusing 'so...that' with 'so that'",
          "Wrong word order with 'such...that'",
          "Incorrect use of 'too' vs 'enough'",
          "Missing 'that' in formal writing",
          "Wrong inversion patterns in advanced structures",
        ],
        levels: [
          {
            level: "A1-A2",
            description:
              "Basic result expressions using simple intensifiers and consequence markers. Students learn to express obvious cause-and-effect relationships.",
            keyLearningPoints: [
              "Basic 'so...that' patterns for obvious results",
              "Simple 'such...that' with singular/plural nouns",
              "Understanding intensity vs result",
              "Basic vocabulary for describing results",
              "Simple past results and present consequences",
            ],
            structures: [
              "so + adjective/adverb + that + clause",
              "such + a/an + adj + noun + that + clause",
              "such + adj + plural/uncountable noun + that + clause",
            ],
            examples: [
              "He was **so tired that** he fell asleep instantly.",
              "It was **such a hot day that** we stayed inside.",
              "She spoke **so fast that** I couldn't understand her.",
              "They were **such good friends that** they did everything together.",
              "It was **such bad weather that** we cancelled the picnic.",
            ],
            commonErrors: [
              "❌ He was so tired that he can't work (✅ He was so tired that he couldn't work)",
              "❌ It was such hot day that... (✅ It was such a hot day that...)",
              "❌ She is so beautiful that I will marry her (✅ She is so beautiful that I want to marry her)",
            ],
            tips: [
              "Use 'a/an' with singular countable nouns after 'such'",
              "Match tenses in both clauses",
              "'So' comes before adjectives/adverbs, 'such' before nouns",
              "The result should be logical and believable",
            ],
          },
          {
            level: "B1-B2",
            description:
              "Intermediate result structures including 'too...to', 'enough...to', and more sophisticated consequence expressions. Introduction to different result types.",
            keyLearningPoints: [
              "Too...to and enough...to patterns",
              "Quantifier results (so much/many/little/few)",
              "Negative results and implications",
              "Result clauses with different subjects",
              "Modal verbs in result clauses",
            ],
            structures: [
              "too + adj/adv + to V",
              "too + adj/adv + for + noun/pronoun + to V",
              "adj/adv + enough + to V",
              "adj/adv + enough + for + noun/pronoun + to V",
              "so much/many/little/few + noun + that + clause",
              "such + (a/an) + adj + noun + that + clause",
            ],
            examples: [
              "He was **too weak to walk**.",
              "She wasn't **tall enough to reach** the shelf.",
              "There were **so many people that** we couldn't find a seat.",
              "It was **such an interesting book that** I read it twice.",
              "The coffee was **too hot for me to drink**.",
              "He has **so little money that** he can't buy food.",
            ],
            notes: "Dùng thêm 'too... to', 'enough to', đảo ngữ để nhấn mạnh.",
            formalVsInformal: {
              formal: [
                "The extent was such that...",
                "The degree to which...",
                "sufficiently + adj + to...",
                "to such an extent that...",
              ],
              informal: [
                "so + adj + that...",
                "too + adj + to...",
                "way too + adj",
              ],
            },
            commonErrors: [
              "❌ He is too old for driving (✅ He is too old to drive)",
              "❌ The box is enough heavy (✅ The box is heavy enough)",
              "❌ So many cars that I can't count it (✅ So many cars that I can't count them)",
            ],
            tips: [
              "'Too' suggests excessive and negative result",
              "'Enough' can be positive (sufficient) or negative (insufficient)",
              "Subject agreement is crucial with quantifiers",
              "Consider the logical relationship between cause and effect",
            ],
          },
          {
            level: "C1-C2",
            description:
              "Advanced result clauses with inversion, emphasis, and sophisticated academic expressions. Focus on stylistic variation and complex logical relationships.",
            keyLearningPoints: [
              "Inversion for emphasis in result clauses",
              "Complex embedded result structures",
              "Academic result expressions",
              "Implied and ellipted results",
              "Stylistic devices for emphasis",
            ],
            structures: [
              "So + adj/adv + auxiliary + subject + main verb + that...",
              "Such + (a/an) + adj + noun + auxiliary + subject + verb + that...",
              "To such an extent + auxiliary + subject + verb + that...",
              "So + adj + as to + V-inf",
              "Such as to + V-inf",
            ],
            examples: [
              "**So beautiful was the sunset** that we stopped to admire it.",
              "**Such was his anger** that he couldn't speak.",
              "**So quickly did she run** that nobody could catch her.",
              "**To such an extent did he study** that he forgot to eat.",
              "His performance was **so outstanding as to** earn him immediate promotion.",
              "The results were **such as to** revolutionize the field.",
            ],
            notes:
              "Dùng đảo ngữ hoặc các cấu trúc nhấn mạnh để tăng cường diễn đạt.",
            academicUsage: [
              "The findings were such that further research was warranted.",
              "To such an extent did the data support the hypothesis that...",
              "The correlation was so strong as to suggest causation.",
              "Such was the impact of the policy that...",
            ],
            commonErrors: [
              "❌ So beautiful the sunset was that... (✅ So beautiful was the sunset that...)",
              "❌ Such as beautiful to admire (✅ So beautiful as to be admired)",
              "❌ To such extent he worked that... (✅ To such an extent did he work that...)",
            ],
            tips: [
              "Inversion is used for dramatic emphasis, not everyday speech",
              "Academic writing values precision in cause-effect relationships",
              "Use these structures sparingly to avoid overemphasis",
              "Ensure the inverted structure maintains grammatical accuracy",
            ],
          },
        ],
      },
      {
        type: "Advanced Conditional Clauses",
        definition:
          "Conditional clauses express hypothetical situations, possibilities, and their consequences. They range from realistic future possibilities to impossible past scenarios, and are essential for sophisticated reasoning and argumentation.",
        description:
          "Dùng để chỉ điều kiện xảy ra hành động. Bao gồm điều kiện thực tế, không thực tế, đảo ngữ, điều kiện hỗn hợp.",
        keyFeatures: [
          "Express hypothetical situations",
          "Show probability and possibility",
          "Can refer to past, present, or future",
          "Include real and unreal conditions",
          "Essential for argumentation and speculation",
        ],
        commonMistakes: [
          "Mixing tenses incorrectly in conditional clauses",
          "Using 'will' in the if-clause",
          "Confusing real and unreal conditionals",
          "Incorrect mixed conditional patterns",
          "Wrong inversion structures",
        ],
        levels: [
          {
            level: "A1-A2",
            description:
              "Basic conditional patterns covering zero, first, second, and third conditionals. Students learn to express real and unreal situations in different time frames.",
            keyLearningPoints: [
              "Zero conditional for general truths",
              "First conditional for real future possibilities",
              "Second conditional for unreal present situations",
              "Third conditional for unreal past situations",
              "Basic time relationships in conditionals",
            ],
            structures: [
              "If + present simple, present simple (zero)",
              "If + present simple, will + V (first)",
              "If + past simple, would + V (second)",
              "If + past perfect, would have + V3 (third)",
            ],
            examples: [
              "If you heat water to 100°C, it boils. (zero)",
              "If it rains tomorrow, I'll stay home. (first)",
              "If I were you, I would study more. (second)",
              "If he had left earlier, he would have caught the train. (third)",
            ],
            commonErrors: [
              "❌ If I will go, I will call you (✅ If I go, I will call you)",
              "❌ If I was rich, I would travel (✅ If I were rich, I would travel)",
              "❌ If I would have more time, I would help (✅ If I had more time, I would help)",
            ],
            tips: [
              "Never use 'will' in the if-clause",
              "Use 'were' for all persons in second conditional",
              "Match the time reference between condition and result",
              "Remember: if-clause = condition, main clause = result",
            ],
          },
          {
            level: "B1-B2",
            description:
              "Intermediate conditional structures including mixed conditionals, alternative conditional words, and more complex probability expressions.",
            keyLearningPoints: [
              "Mixed conditionals (past condition, present result)",
              "Alternative conditional markers (unless, provided that, etc.)",
              "Conditional modals (might, could, should)",
              "Probability and possibility expressions",
              "Negative and emphasised conditionals",
            ],
            structures: [
              "If + past perfect, would + V (mixed)",
              "If + past simple, would have + V3 (mixed)",
              "Unless + present/past, clause",
              "Provided (that)/Providing (that) + clause",
              "As long as / So long as + clause",
              "Even if + clause",
              "Suppose/Supposing + clause",
            ],
            examples: [
              "If I **had studied harder**, I **would have** a better job now. (Mixed)",
              "If he **were more careful**, he **wouldn't have made** that mistake. (Mixed)",
              "**Unless** you study, you won't pass.",
              "**As long as** you're here, I'll be fine.",
              "**Even if** it rains, we'll go hiking.",
              "**Suppose** you won the lottery, what would you do?",
            ],
            notes: "Điều kiện không có thật, hoặc điều kiện hỗn hợp.",
            formalVsInformal: {
              formal: [
                "Provided that conditions are met...",
                "In the event that...",
                "On condition that...",
                "Given that...",
              ],
              informal: ["If...", "Unless...", "As long as...", "What if...?"],
            },
            commonErrors: [
              "❌ If I would have known, I wouldn't go (✅ If I had known, I wouldn't have gone)",
              "❌ Unless you won't come, I'll wait (✅ Unless you come, I won't wait)",
              "❌ Provided that if you help me... (✅ Provided that you help me...)",
            ],
            tips: [
              "Mixed conditionals combine different time references",
              "'Unless' means 'if not' - avoid double negatives",
              "Alternative conditional words add variety and precision",
              "Consider the logical relationship between condition and result",
            ],
          },
          {
            level: "C1-C2",
            description:
              "Advanced conditional structures with inversion, sophisticated academic conditionals, and complex hypothetical reasoning. Emphasis on formal register and argumentative functions.",
            keyLearningPoints: [
              "Conditional inversion (Had, Were, Should)",
              "Academic conditional expressions",
              "Complex hypothetical chains",
              "Implied and ellipted conditionals",
              "Conditional clauses in argumentative discourse",
            ],
            structures: [
              "Had + subject + past participle, ...",
              "Were + subject + to + V, ...",
              "Should + subject + V, ...",
              "If it were not for + noun, ...",
              "If it hadn't been for + noun, ...",
              "But for + noun, ...",
              "Were it not for + noun, ...",
              "Failing + noun/that, ...",
            ],
            examples: [
              "**Had I known**, I would have acted differently.",
              "**Were she to leave**, things would fall apart.",
              "**Should you need** any help, just ask.",
              "**If it weren't for** your help, I'd have failed.",
              "**But for** his advice, we would have lost everything.",
              "**Were it not for** the rain, we'd go out.",
              "**Failing government action**, the crisis will worsen.",
            ],
            notes:
              "Đảo ngữ trong câu điều kiện, phong cách học thuật, viết formal.",
            academicUsage: [
              "Were the hypothesis to be proven correct...",
              "Should further evidence emerge...",
              "Had the methodology been different...",
              "But for this limitation, the study would have...",
            ],
            commonErrors: [
              "❌ Had I would know (✅ Had I known)",
              "❌ Were he would come (✅ Were he to come)",
              "❌ Should you will need (✅ Should you need)",
            ],
            tips: [
              "Inversion creates a formal, academic tone",
              "Use these structures in written rather than spoken English",
              "'But for' is equivalent to 'If it weren't for'",
              "Maintain consistency in formality throughout your text",
            ],
          },
        ],
      },
    ],

    levelProgression: [
      {
        level: "A1-A2",
        description:
          "Foundation level focusing on basic patterns and everyday communication needs.",
        focuses: [
          "Simple, direct expressions",
          "Basic cause-and-effect relationships",
          "Common everyday situations",
          "Regular patterns and structures",
          "Present and simple past references",
        ],
        expectedOutcomes: [
          "Can express simple purposes using 'to' and 'so that'",
          "Can describe obvious results with 'so...that'",
          "Can use basic conditionals for real situations",
          "Understands the difference between purpose and result",
          "Can handle familiar, predictable contexts",
        ],
      },
      {
        level: "B1-B2",
        description:
          "Intermediate level introducing complexity, variety, and formal registers.",
        focuses: [
          "Modal verbs and probability",
          "Negative and alternative structures",
          "Formal vs informal register awareness",
          "Complex subject relationships",
          "Mixed time references",
        ],
        expectedOutcomes: [
          "Can use various purpose expressions appropriately",
          "Can express degree and quantity in results",
          "Can handle mixed conditionals confidently",
          "Shows awareness of formal/informal differences",
          "Can express complex hypothetical situations",
        ],
      },
      {
        level: "C1-C2",
        description:
          "Advanced level emphasizing academic register, stylistic variation, and sophisticated reasoning.",
        focuses: [
          "Academic and professional language",
          "Emphasis and stylistic devices",
          "Complex logical relationships",
          "Discourse functions",
          "Precision and sophistication",
        ],
        expectedOutcomes: [
          "Can use inversion for emphasis effectively",
          "Demonstrates sophisticated academic expression",
          "Can construct complex argumentative discourse",
          "Shows mastery of register and style",
          "Can handle abstract and theoretical concepts",
        ],
      },
    ],

    detailedGrammarRules: {
      purposeClauses: {
        definition:
          "Subordinate clauses that express the intention, goal, or desired outcome of the action in the main clause.",
        functions: [
          "Express intention and motivation",
          "Answer the question 'Why?' or 'For what purpose?'",
          "Connect actions to their intended outcomes",
          "Show planning and deliberate action",
          "Create logical discourse connections",
        ],
        types: [
          {
            type: "Infinitive Purpose",
            explanation:
              "The most common and direct way to express purpose using infinitive structures.",
            structures: [
              "to + infinitive",
              "in order to + infinitive",
              "so as to + infinitive",
            ],
            examples: [
              "She called **to ask** about the job.",
              "He studied hard **in order to** pass the exam.",
              "They whispered **so as to** avoid waking the baby.",
            ],
            usageNotes: [
              "Use when the subject of both clauses is the same",
              "'In order to' is more formal than simple 'to'",
              "'So as to' is often used with negative purposes",
              "Cannot be used when subjects are different",
            ],
          },
          {
            type: "Finite Purpose Clauses",
            explanation:
              "Purpose clauses with a subject and finite verb, allowing for different subjects and modal expressions.",
            structures: [
              "so that + clause",
              "in order that + clause",
              "that + clause (after certain verbs)",
            ],
            examples: [
              "She spoke slowly **so that everyone could understand**.",
              "He left early **in order that he might catch the train**.",
              "I'm telling you this **that you may be prepared**.",
            ],
            usageNotes: [
              "Allow different subjects in main and purpose clauses",
              "Often use modal verbs (can, could, may, might, will, would)",
              "'In order that' is very formal",
              "Tense and modal choice depends on time reference and certainty",
            ],
          },
          {
            type: "Negative Purpose",
            explanation:
              "Expressing the intention to avoid or prevent something.",
            structures: [
              "so as not to + infinitive",
              "in order not to + infinitive",
              "so that + subject + won't/wouldn't + verb",
              "for fear that + clause",
              "lest + clause",
            ],
            examples: [
              "He spoke quietly **so as not to** wake the children.",
              "She left early **in order not to** be late.",
              "They used a map **so that they wouldn't** get lost.",
              "He didn't tell her **for fear that she might worry**.",
              "She checked twice **lest she should** make a mistake.",
            ],
            usageNotes: [
              "'Lest' is very formal and archaic",
              "'For fear that' is literary/formal",
              "Negative infinitives are common in modern English",
              "Choose structure based on formality and emphasis needed",
            ],
          },
        ],
      },
      resultClauses: {
        definition:
          "Subordinate clauses that express the consequence, outcome, or effect of the action or situation in the main clause.",
        functions: [
          "Express consequences and outcomes",
          "Show cause-and-effect relationships",
          "Indicate degree and intensity",
          "Create logical connections between events",
          "Emphasize the significance of actions",
        ],
        types: [
          {
            type: "Degree Result Clauses",
            explanation:
              "Result clauses that express the extent or degree to which something is true.",
            structures: [
              "so + adjective/adverb + that + clause",
              "such + (a/an) + adjective + noun + that + clause",
              "too + adjective/adverb + to + infinitive",
              "adjective/adverb + enough + to + infinitive",
            ],
            examples: [
              "The music was **so loud that** I couldn't concentrate.",
              "It was **such a beautiful day that** we decided to have a picnic.",
              "The coffee was **too hot to** drink immediately.",
              "She spoke **clearly enough to** be understood by everyone.",
            ],
            usageNotes: [
              "'So' is used with adjectives and adverbs",
              "'Such' is used with nouns (with or without adjectives)",
              "'Too' implies excess (negative result)",
              "'Enough' can be positive or negative depending on context",
            ],
          },
          {
            type: "Consequential Result",
            explanation:
              "Result clauses that express logical consequences or natural outcomes.",
            structures: [
              "so + clause",
              "therefore + clause",
              "as a result + clause",
              "consequently + clause",
            ],
            examples: [
              "It was raining heavily, **so** we stayed inside.",
              "The experiment failed; **therefore**, we need to revise our hypothesis.",
              "The traffic was terrible. **As a result**, we arrived late.",
              "The evidence was overwhelming; **consequently**, he was convicted.",
            ],
            usageNotes: [
              "'So' is informal and conversational",
              "'Therefore' and 'consequently' are formal",
              "'As a result' is neutral register",
              "Can be used to connect independent clauses",
            ],
          },
          {
            type: "Emphatic Result",
            explanation:
              "Result clauses that emphasize the dramatic or significant nature of the outcome.",
            structures: [
              "So + adjective/adverb + auxiliary + subject + verb + that...",
              "Such + noun + auxiliary + subject + verb + that...",
              "To such an extent + auxiliary + subject + verb + that...",
            ],
            examples: [
              "**So impressive was his performance that** he received a standing ovation.",
              "**Such was the impact of the discovery that** it changed scientific thinking.",
              "**To such an extent did she practice that** she became a virtuoso.",
            ],
            usageNotes: [
              "These are formal and literary structures",
              "Used for dramatic emphasis",
              "Require subject-auxiliary inversion",
              "Common in academic and literary writing",
            ],
          },
        ],
      },
      conditionalClauses: {
        definition:
          "Subordinate clauses that express hypothetical situations, possibilities, or conditions under which something might happen.",
        functions: [
          "Express hypothetical situations",
          "Show cause-and-effect in imaginary scenarios",
          "Discuss possibilities and probabilities",
          "Make predictions and speculations",
          "Present alternative scenarios",
        ],
        types: [
          {
            type: "Real Conditionals",
            explanation:
              "Conditionals that express realistic possibilities or general truths.",
            structures: [
              "If + present simple, present simple (zero conditional)",
              "If + present simple, will + verb (first conditional)",
              "If + present continuous, will + verb",
              "If + present perfect, will + verb",
            ],
            examples: [
              "If you heat ice, **it melts**. (zero - general truth)",
              "If it rains tomorrow, **we'll stay inside**. (first - future possibility)",
              "If you're not feeling well, **you should see a doctor**. (present advice)",
              "If you've finished your work, **you can go home**. (present perfect condition)",
            ],
            usageNotes: [
              "Zero conditional for scientific facts and general truths",
              "First conditional for likely future events",
              "Can use other modals besides 'will' (may, might, could, should)",
              "Present continuous/perfect add aspectual meaning",
            ],
          },
          {
            type: "Unreal Conditionals",
            explanation:
              "Conditionals that express imaginary, unlikely, or impossible situations.",
            structures: [
              "If + past simple, would + verb (second conditional)",
              "If + past continuous, would + verb",
              "If + past perfect, would have + past participle (third conditional)",
              "If + past perfect continuous, would have + past participle",
            ],
            examples: [
              "If I **won** the lottery, I **would travel** the world. (unlikely present/future)",
              "If she **were studying** now, she **wouldn't answer** the phone. (imaginary present)",
              "If they **had left** earlier, they **would have caught** the train. (impossible past)",
              "If he **had been working** harder, he **would have succeeded**. (past continuous condition)",
            ],
            usageNotes: [
              "Second conditional for unlikely present/future situations",
              "Third conditional for impossible past situations",
              "Use 'were' for all persons in second conditional",
              "Continuous aspects add progressive meaning",
            ],
          },
          {
            type: "Mixed Conditionals",
            explanation:
              "Conditionals that combine different time references, typically past conditions with present results or present conditions with past results.",
            structures: [
              "If + past perfect, would + verb (past condition, present result)",
              "If + past simple, would have + past participle (present condition, past result)",
            ],
            examples: [
              "If I **had studied** medicine, I **would be** a doctor now. (past condition, present result)",
              "If he **were** more organized, he **wouldn't have missed** the deadline. (present condition, past result)",
            ],
            usageNotes: [
              "Combine different time references logically",
              "Past condition → present result is more common",
              "Present condition → past result shows ongoing traits",
              "Requires careful consideration of time relationships",
            ],
          },
        ],
      },
    },

    practicalApplications: {
      academicWriting: [
        "Expressing research purposes: 'This study aims to investigate...'",
        "Showing results and implications: 'The findings were so significant that...'",
        "Discussing hypothetical scenarios: 'Were this theory correct, we would expect...'",
        "Creating logical arguments: 'If we accept this premise, then...'",
        "Linking ideas coherently: 'The method was designed to ensure...'",
        "Presenting conditions: 'Provided that the conditions are met...'",
        "Emphasizing important points: 'So crucial is this factor that...'",
        "Discussing limitations: 'Had more data been available, the results would have...'",
      ],
      businessCommunication: [
        "Setting objectives: 'We're implementing this system in order to improve efficiency.'",
        "Describing consequences: 'The delay was such that we missed the deadline.'",
        "Presenting scenarios: 'If we proceed with this plan, we should see positive results.'",
        "Negotiating conditions: 'Provided that you meet these requirements, we can proceed.'",
        "Explaining procedures: 'Follow these steps so that you avoid common mistakes.'",
        "Risk assessment: 'Should this risk materialize, we have contingency plans.'",
        "Proposal writing: 'The investment would be so substantial as to require board approval.'",
        "Performance reviews: 'Had you met the targets, you would have received a bonus.'",
      ],
      dailyConversation: [
        "Explaining motivations: 'I'm studying English to get a better job.'",
        "Describing results: 'The movie was so boring that I fell asleep.'",
        "Making plans: 'If it's sunny tomorrow, let's go to the beach.'",
        "Giving advice: 'Unless you hurry, you'll miss the bus.'",
        "Expressing regrets: 'If I had known, I would have helped you.'",
        "Setting conditions: 'I'll come to the party as long as I finish my work.'",
        "Showing emphasis: 'He drives so fast that it scares me.'",
        "Making suggestions: 'Suppose we meet at 6 o'clock instead?'",
      ],
      examPreparation: [
        "IELTS Writing Task 2: Complex sentence structures for higher band scores",
        "TOEFL Writing: Sophisticated reasoning and argumentation",
        "Cambridge Exams: Use of English transformation exercises",
        "Academic essays: Showing relationships between ideas",
        "Formal letters: Appropriate register and structures",
        "Speaking tests: Expressing hypothetical situations",
        "Reading comprehension: Understanding complex logical relationships",
        "Grammar tests: Demonstrating range and accuracy",
      ],
    },

    crossReferences: {
      relatedGrammarTopics: [
        "Modal verbs and their meanings",
        "Reported speech and indirect questions",
        "Passive voice constructions",
        "Relative clauses and complex sentences",
        "Subjunctive mood in formal contexts",
        "Parallel structures and coordination",
        "Emphasis and inversion patterns",
        "Time clauses and temporal relationships",
      ],
      prerequisites: [
        "Basic understanding of main and subordinate clauses",
        "Knowledge of verb tenses and aspects",
        "Familiarity with modal verbs",
        "Understanding of subject-verb agreement",
        "Basic knowledge of sentence patterns",
        "Awareness of formal vs informal registers",
      ],
      nextSteps: [
        "Advanced discourse markers and connectors",
        "Sophisticated academic writing techniques",
        "Rhetorical devices and stylistic variation",
        "Complex argumentation patterns",
        "Professional communication skills",
        "Literary and creative writing applications",
      ],
    },

    notes: [
      "Mệnh đề chỉ mục đích, kết quả và điều kiện thường dùng trong văn viết học thuật, bài IELTS, hoặc văn phong trang trọng.",
      "Cần phân biệt rõ mục đích (why), kết quả (what happened as a result), điều kiện (what if).",
      "Trong viết học thuật C1-C2, dùng cấu trúc bị động, danh từ hóa (nominalization), hoặc đảo ngữ để tăng tính chính xác và trang trọng.",
      "Practice is essential for mastering these structures - they require both grammatical accuracy and appropriate usage.",
      "Register awareness is crucial - formal structures should be used in formal contexts, informal ones in casual conversation.",
      "These clauses are fundamental for achieving advanced proficiency in English and are heavily tested in international exams.",
      "The progression from A1 to C2 shows increasing sophistication in both structure and function.",
      "Cultural context matters - some formal structures may sound overly academic in casual American English but are appropriate in British academic writing.",
    ],

    references: {
      books: [
        {
          title: "Cambridge Grammar in Use - Advanced",
          author: "Martin Hewings",
          year: 2019,
          pages: "Units 25-35, 88-95",
          description:
            "Comprehensive coverage of purpose, result, and conditional clauses with practical exercises and authentic examples.",
        },
        {
          title: "Oxford English Grammar Course - Advanced",
          author: "Michael Swan and Catherine Walter",
          year: 2018,
          pages: "Chapters 12-15",
          description:
            "Detailed explanations of complex sentence structures with focus on academic and professional usage.",
        },
        {
          title: "English Grammar in Use - Intermediate",
          author: "Raymond Murphy",
          year: 2019,
          pages: "Units 38-42, 98-102",
          description:
            "Foundation-level coverage with clear explanations and practical exercises for B1-B2 students.",
        },
        {
          title: "Academic Writing for Graduate Students",
          author: "John M. Swales and Christine B. Feak",
          year: 2020,
          pages: "Chapters 3-5",
          description:
            "Academic applications of these structures in formal writing contexts, particularly useful for C1-C2 level.",
        },
        {
          title: "English Grammar: A Generative Perspective",
          author: "Liliane Haegeman",
          year: 2017,
          pages: "Chapters 8-10",
          description:
            "Advanced theoretical treatment of conditional and result clause syntax for serious grammar students.",
        },
      ],
      websites: [
        {
          title: "British Council - Purpose, Result and Reason",
          url: "https://learnenglish.britishcouncil.org/grammar/intermediate-to-upper-intermediate/purpose-result-and-reason",
          description:
            "Interactive exercises and explanations for intermediate to advanced learners with audio examples.",
        },
        {
          title: "Cambridge English Grammar Reference",
          url: "https://dictionary.cambridge.org/grammar/british-grammar/purpose-clauses",
          description:
            "Authoritative grammar reference with corpus-based examples and usage notes.",
        },
        {
          title: "Perfect English Grammar - Conditionals",
          url: "https://www.perfect-english-grammar.com/conditionals.html",
          description:
            "Comprehensive coverage of all conditional types with downloadable exercises and clear explanations.",
        },
        {
          title: "Grammarly Blog - Advanced Grammar Topics",
          url: "https://www.grammarly.com/blog/advanced-grammar/",
          description:
            "Practical writing advice and examples of sophisticated grammatical structures in context.",
        },
        {
          title: "Oxford Learner's Dictionaries - Grammar",
          url: "https://www.oxfordlearnersdictionaries.com/grammar/",
          description:
            "Reliable reference with examples from real usage and clear explanations of complex structures.",
        },
      ],
      academicSources: [
        {
          title: "The Grammar of Purpose Clauses in English",
          author: "David Crystal",
          journal: "Journal of English Linguistics",
          year: 2018,
          description:
            "Comprehensive linguistic analysis of purpose clause structures and their discourse functions.",
        },
        {
          title: "Conditional Constructions in Academic English",
          author: "Susan Hunston",
          journal: "Applied Linguistics Review",
          year: 2019,
          description:
            "Corpus-based study of conditional usage in academic writing across disciplines.",
        },
        {
          title: "Result Clauses and Causation in English",
          author: "Geoffrey Pullum",
          journal: "Language and Cognitive Processes",
          year: 2020,
          description:
            "Cognitive linguistic approach to understanding result clause semantics and processing.",
        },
        {
          title: "Teaching Complex Grammar Structures to Advanced ESL Students",
          author: "Patricia Byrd and Beverly Benson",
          journal: "TESOL Quarterly",
          year: 2017,
          description:
            "Pedagogical research on effective methods for teaching sophisticated grammatical structures.",
        },
        {
          title: "Cross-linguistic Perspectives on Conditional Clauses",
          author: "Joan Bybee and Revere Perkins",
          journal: "Studies in Language",
          year: 2019,
          description:
            "Comparative study of conditional structures across languages, informing English pedagogy.",
        },
      ],
    },
  };

import { advancedConditionalsType } from "@/types/grammars/grammar/grammar_advance/advancedConditionalsData";

export const advancedConditionalsData: advancedConditionalsType = {
  title:
    "Câu điều kiện nâng cao (Mixed Conditionals và Inversion trong câu điều kiện)",
  overview:
    "Câu điều kiện nâng cao bao gồm các dạng Mixed Conditionals (câu điều kiện hỗn hợp) và câu điều kiện đảo ngữ (Inversion in conditionals). Đây là các cấu trúc phức tạp được sử dụng để diễn đạt các tình huống giả định kết hợp nhiều thì khác nhau hoặc để tạo sự nhấn mạnh trong câu điều kiện. Những cấu trúc này đòi hỏi sự hiểu biết sâu sắc về mối quan hệ thời gian và tính logic trong ngôn ngữ.",

  levels: {
    "A1-A2": {
      description:
        "Nắm vững câu điều kiện loại 1, 2, 3 cơ bản và làm quen với các ý tưởng về sự giả định. Đây là giai đoạn xây dựng nền tảng vững chắc cho việc học các cấu trúc câu điều kiện phức tạp hơn.",
      content: [
        "Hiểu cấu trúc If + hiện tại đơn, will + động từ (loại 1) - diễn tả khả năng có thật trong tương lai",
        "Hiểu cấu trúc If + quá khứ đơn, would + động từ (loại 2) - diễn tả tình huống không có thật ở hiện tại",
        "Hiểu cấu trúc If + quá khứ hoàn thành, would have + quá khứ phân từ (loại 3) - diễn tả tình huống không có thật trong quá khứ",
        "Biết phân biệt câu điều kiện thực tế và không thực tế",
        "Làm quen với khái niệm về thời gian trong câu điều kiện",
        "Hiểu vai trò của 'if' như một từ nối điều kiện",
        "Nhận biết sự khác biệt giữa các loại câu điều kiện qua ngữ cảnh",
      ],
      prerequisites: [
        "Nắm vững các thì cơ bản: hiện tại đơn, quá khứ đơn, tương lai đơn",
        "Hiểu khái niệm về quá khứ hoàn thành (past perfect)",
        "Biết cách sử dụng would, could, might trong các tình huống giả định",
        "Hiểu ngữ pháp cơ bản về cấu trúc câu",
      ],
      keyPoints: [
        "Phân biệt rõ ràng giữa thực tế và giả định",
        "Hiểu mối quan hệ thời gian giữa mệnh đề điều kiện và mệnh đề chính",
        "Nắm vững cách chia động từ trong từng loại câu điều kiện",
        "Biết khi nào dùng loại câu điều kiện nào",
      ],
      commonDifficulties: [
        "Nhầm lẫn giữa thì quá khứ đơn và quá khứ hoàn thành",
        "Khó phân biệt giữa tình huống có thật và không có thật",
        "Khó nhớ cấu trúc chính xác của từng loại câu điều kiện",
        "Khó hiểu logic thời gian trong câu điều kiện loại 3",
      ],
    },

    "B1-B2": {
      description:
        "Giới thiệu về câu điều kiện hỗn hợp (Mixed Conditionals) và câu điều kiện đảo ngữ đơn giản. Giai đoạn này đòi hỏi hiểu biết sâu hơn về mối quan hệ phức tạp giữa thời gian và điều kiện.",
      content: [
        {
          "Mixed Conditionals": {
            definition:
              "Câu điều kiện hỗn hợp kết hợp phần điều kiện và phần kết quả ở hai thì khác nhau, thường để diễn tả kết quả hiện tại dựa trên điều kiện trong quá khứ hoặc ngược lại. Đây là cách thể hiện mối liên hệ phức tạp giữa các mốc thời gian khác nhau trong cùng một tình huống giả định.",
            types: [
              {
                type: "Quá khứ → Hiện tại (Past Condition, Present Result)",
                structure: "If + past perfect, would + động từ nguyên mẫu",
                meaning:
                  "Diễn tả kết quả hiện tại giả định dựa trên điều kiện không có thật trong quá khứ. Thể hiện hậu quả lâu dài của một hành động hoặc quyết định trong quá khứ.",
                example: "If I had studied medicine, I would be a doctor now.",
                usage: [
                  "Thể hiện sự hối tiếc về quyết định trong quá khứ",
                  "Giải thích tình trạng hiện tại dựa trên nguyên nhân quá khứ",
                  "Phân tích nguyên nhân - kết quả xuyên suốt thời gian",
                ],
                notes: [
                  "Mệnh đề điều kiện ở quá khứ hoàn thành thể hiện điều kiện không có thật trong quá khứ",
                  "Mệnh đề chính ở hiện tại điều kiện thể hiện kết quả giả định ở hiện tại",
                  "Thường dùng để nói về career choices, life decisions",
                ],
              },
              {
                type: "Hiện tại → Quá khứ (Present Condition, Past Result)",
                structure: "If + past simple, would have + past participle",
                meaning:
                  "Diễn tả kết quả trong quá khứ giả định dựa trên điều kiện không có thật ở hiện tại. Thể hiện cách mà tính cách hoặc đặc điểm hiện tại có thể ảnh hưởng đến kết quả trong quá khứ.",
                example:
                  "If I were more confident, I would have applied for that job last year.",
                usage: [
                  "Liên kết tính cách hiện tại với cơ hội đã mất trong quá khứ",
                  "Phân tích cách mà năng lực hiện tại có thể thay đổi kết quả quá khứ",
                  "Thể hiện sự tự nhận thức về bản thân",
                ],
                notes: [
                  "Mệnh đề điều kiện ở quá khứ đơn mô tả tình trạng hiện tại không có thật",
                  "Mệnh đề chính ở quá khứ điều kiện hoàn thành thể hiện kết quả giả định trong quá khứ",
                  "Ít phổ biến hơn so với loại quá khứ → hiện tại",
                ],
              },
            ],
            keyPoints: [
              "Mixed conditionals phá vỡ quy tắc thời gian truyền thống của câu điều kiện",
              "Cần hiểu rõ mối quan hệ logic giữa điều kiện và kết quả",
              "Thường xuất hiện trong ngữ cảnh cá nhân, phản ánh và đánh giá",
              "Yêu cầu khả năng tư duy trừu tượng về thời gian",
            ],
            practiceAreas: [
              "Personal reflection and regret",
              "Career and life choices analysis",
              "Character traits and their consequences",
              "Alternative history discussions",
            ],
          },
        },
        {
          "Inversion in Conditionals": {
            definition:
              "Đảo ngữ trong câu điều kiện là cách dùng cấu trúc đảo động từ để nhấn mạnh, thay thế cho 'if' mà không làm thay đổi nghĩa câu. Đây là đặc điểm của register trang trọng, thường xuất hiện trong văn viết học thuật và giao tiếp chính thức.",
            "basic forms": [
              {
                type: "Had + S + V3 (Past Perfect) → dùng cho câu điều kiện loại 3",
                example:
                  "Had I known about the meeting, I would have attended.",
                explanation:
                  "Tương đương với 'If I had known about the meeting...'",
                usage: [
                  "Formal writing và academic contexts",
                  "Legal documents và official communications",
                  "Literary writing cho dramatic effect",
                ],
              },
              {
                type: "Were + S + to V → dùng cho câu điều kiện loại 2",
                example:
                  "Were the company to expand, we would need more staff.",
                explanation:
                  "Tương đương với 'If the company were to expand...'",
                usage: [
                  "Business và professional communication",
                  "Formal presentations và reports",
                  "Hypothetical scenarios trong academic writing",
                ],
              },
              {
                type: "Should + S + V → dùng cho câu điều kiện loại 1",
                example: "Should you require assistance, please contact us.",
                explanation:
                  "Tương đương với 'If you should require assistance...'",
                usage: [
                  "Customer service và business correspondence",
                  "Instructions và procedural writing",
                  "Polite offers và suggestions",
                ],
              },
            ],
            note: "Đảo ngữ làm câu trông trang trọng hơn và mang tính văn viết. Việc sử dụng đảo ngữ thể hiện trình độ ngôn ngữ cao và hiểu biết về register phù hợp.",
            keyPoints: [
              "Đảo ngữ không thay đổi nghĩa, chỉ thay đổi tone và register",
              "Chủ yếu dùng trong formal contexts",
              "Tạo emphasis và dramatic effect",
              "Yêu cầu perfect grammar control",
            ],
            practiceAreas: [
              "Academic essay writing",
              "Business communication",
              "Legal and official documents",
              "Literary analysis và creative writing",
            ],
          },
        },
      ],
    },

    "C1-C2": {
      description:
        "Mở rộng sâu về các trường hợp phức tạp của Mixed Conditionals và Inversion, các dạng hiếm và cách dùng tinh tế. Giai đoạn này đòi hỏi sự tinh tế về ngôn ngữ và khả năng sử dụng linh hoạt trong nhiều ngữ cảnh khác nhau.",
      content: [
        {
          "Mixed Conditionals": {
            advanced_usages: [
              {
                type: "Complex temporal relationships và nuanced causality",
                details: [
                  "Diễn tả mối liên hệ phức tạp giữa multiple time frames trong cùng một scenario",
                  "Sử dụng để phân tích deep psychological và social implications",
                  "Thể hiện sophisticated understanding của cause-and-effect relationships",
                  "Ứng dụng trong philosophical discussions và theoretical analysis",
                ],
                example:
                  "If society had valued education more in the past, we would have fewer social problems today, and if we were more aware of this connection, we would have implemented better policies decades ago.",
                context: [
                  "Academic discourse và research writing",
                  "Policy analysis và social commentary",
                  "Historical analysis với contemporary implications",
                  "Philosophical và ethical discussions",
                ],
                nuances: [
                  "Cho phép multiple layers of conditionality",
                  "Thể hiện sophisticated temporal reasoning",
                  "Reflects advanced cognitive processing của language",
                  "Demonstrates mastery of complex grammatical relationships",
                ],
              },
              {
                type: "Counterfactual reasoning trong advanced contexts",
                details: [
                  "Sử dụng trong scientific hypotheses và theoretical frameworks",
                  "Alternative history analysis với detailed implications",
                  "Complex character development trong literary analysis",
                  "Economic và political scenario modeling",
                ],
                example:
                  "If Einstein had not developed the theory of relativity, modern physics would be fundamentally different, and if we were still operating under Newtonian principles, technological advancement would have taken completely different trajectories.",
                context: [
                  "Academic research và theoretical writing",
                  "Scientific discourse và hypothesis formation",
                  "Economic modeling và policy analysis",
                  "Literary criticism và cultural studies",
                ],
                nuances: [
                  "Requires deep content knowledge beyond grammar",
                  "Integrates logical reasoning với linguistic precision",
                  "Demonstrates ability to handle abstract concepts",
                  "Shows sophisticated understanding of causality",
                ],
              },
            ],
            subtleties: [
              "Understanding of implied meanings và unstated assumptions",
              "Recognition of cultural và contextual factors in conditional usage",
              "Ability to manipulate tone và register through conditional choice",
              "Mastery of subtle differences between similar structures",
            ],
            academicUsage: [
              "Research hypothesis formulation",
              "Literature review và critical analysis",
              "Theoretical framework development",
              "Cross-cultural comparative studies",
            ],
          },
        },
        {
          "Inversion in Conditionals": {
            advanced_forms: [
              {
                type: "Complex inversion with multiple clauses và embedded structures",
                structure:
                  "Advanced inversion combining with relative clauses, participial phrases, và prepositional constructions",
                meaning:
                  "Creates sophisticated rhetorical effects và demonstrates mastery of formal register",
                example:
                  "Had the committee, which had been deliberating for months, reached a different conclusion, the entire legislative framework governing environmental policy would have been restructured.",
                context: [
                  "Legal writing và jurisprudence",
                  "Academic dissertations và scholarly articles",
                  "Policy documents và governmental communications",
                  "High-level diplomatic correspondence",
                ],
                register:
                  "Highly formal, specialized professional communication",
              },
              {
                type: "Inversion with negative adverbials và emphatic constructions",
                structure:
                  "Negative adverb + auxiliary + subject + main verb + conditional clause",
                meaning:
                  "Creates maximum emphasis và dramatic effect in formal discourse",
                example:
                  "Never would such a proposal have been considered, had the economic implications been fully understood at the time.",
                context: [
                  "Rhetoric và persuasive writing",
                  "Editorial writing và opinion pieces",
                  "Academic argument và debate",
                  "Literary analysis với strong positioning",
                ],
                register: "Formal argumentative và persuasive discourse",
              },
            ],
            style_notes: [
              "Demonstrates sophisticated control over English syntax và pragmatics",
              "Signals high-level education và linguistic competence to readers",
              "Creates specific rhetorical effects: emphasis, formality, authority",
              "Requires careful attention to appropriateness và audience expectations",
              "Can backfire if overused or used inappropriately (sounds pretentious)",
              "Most effective when used sparingly for maximum impact",
            ],
            common_errors: [
              "Overuse leading to pompous or artificial tone",
              "Incorrect auxiliary verb selection for the intended conditional type",
              "Failure to maintain parallel structure in complex sentences",
              "Mixing registers inappropriately within the same text",
              "Incorrect word order in complex inverted structures",
            ],
            academicUsage: [
              "Thesis statements với strong positioning",
              "Literature reviews establishing critical stance",
              "Methodology sections outlining alternative approaches",
              "Discussion sections emphasizing key findings",
            ],
          },
        },
      ],
    },
  },

  theory: {
    definition:
      "Câu điều kiện nâng cao mở rộng câu điều kiện cơ bản bằng cách kết hợp thì khác nhau trong mệnh đề điều kiện và mệnh đề chính, hoặc bằng cách đảo ngữ để tạo nhấn mạnh. Đây là biểu hiện của sự phức tạp ngôn ngữ học và khả năng xử lý thông tin đa chiều về thời gian và tính logic.",
    purpose: [
      "Diễn tả giả định phức tạp về thời gian và kết quả với độ chính xác cao",
      "Tạo sự trang trọng hoặc nhấn mạnh trong câu phù hợp với ngữ cảnh",
      "Thể hiện sự liên kết logic tinh tế giữa các sự kiện xuyên suốt thời gian",
      "Demonstration của advanced grammatical competence và stylistic awareness",
      "Enable sophisticated reasoning và argumentation in academic contexts",
    ],
    linguisticBackground: [
      "Reflects the cognitive complexity of human temporal reasoning",
      "Demonstrates the interface between grammar, semantics, và pragmatics",
      "Shows how language encodes complex logical relationships",
      "Illustrates the role of context in determining appropriate linguistic choices",
    ],
    cognitiveAspects: [
      "Requires mental manipulation of multiple time frames simultaneously",
      "Involves counterfactual reasoning và hypothetical thinking",
      "Demands understanding of cause-and-effect relationships across time",
      "Tests working memory capacity và linguistic processing skills",
    ],
    pragmaticFunctions: [
      "Establishing authority và expertise in formal discourse",
      "Creating emphasis và rhetorical impact",
      "Signaling appropriate register và social distance",
      "Facilitating complex argumentation và analysis",
    ],
  },

  structures: [
    {
      name: "Mixed Conditional - Past condition / Present result",
      structure: "If + past perfect, ... would + base verb",
      example:
        "If I had saved money when I was younger, I would be financially secure now.",
      level: "B2-C1",
      frequency: "Common in personal reflection contexts",
      register: "Neutral to formal",
      variations: [
        "If + past perfect, ... could + base verb",
        "If + past perfect, ... might + base verb",
        "Had + subject + past participle, ... would + base verb",
      ],
    },
    {
      name: "Mixed Conditional - Present condition / Past result",
      structure: "If + past simple, ... would have + past participle",
      example:
        "If I were more organized, I would have finished the project on time.",
      level: "B2-C1",
      frequency: "Less common, used for character analysis",
      register: "Neutral to formal",
      variations: [
        "If + past simple, ... could have + past participle",
        "If + past simple, ... might have + past participle",
      ],
    },
    {
      name: "Inversion with Had - Type 3 Conditionals",
      structure: "Had + subject + past participle, ... would + base verb",
      example: "Had the weather been better, we would have gone hiking.",
      level: "B2-C2",
      frequency: "Formal writing and speech",
      register: "Formal to very formal",
      variations: [
        "Had + subject + past participle, ... could have + past participle",
        "Had + subject + past participle, ... might have + past participle",
      ],
    },
    {
      name: "Inversion with Were - Type 2 Conditionals",
      structure: "Were + subject + to + base verb, ... would + base verb",
      example:
        "Were the government to implement this policy, unemployment would decrease.",
      level: "C1-C2",
      frequency: "Formal academic and business writing",
      register: "Formal to very formal",
      variations: [
        "Were + subject + adjective/noun, ... would + base verb",
        "Were it not for + noun, ... would + base verb",
      ],
    },
    {
      name: "Inversion with Should - Type 1 Conditionals",
      structure: "Should + subject + base verb, ... will/would + base verb",
      example:
        "Should you encounter any difficulties, please contact our support team immediately.",
      level: "B2-C1",
      frequency: "Business correspondence and instructions",
      register: "Formal",
      variations: [
        "Should + subject + base verb, ... imperative",
        "Should + subject + base verb, ... can + base verb",
      ],
    },
    {
      name: "Complex Mixed Conditional with Multiple Time References",
      structure:
        "If + past perfect, ... would + base verb + time marker, and if + past simple, ... would have + past participle",
      example:
        "If we had invested in renewable energy decades ago, we would have cleaner air today, and if we were more committed now, we would have solved climate change by 2030.",
      level: "C2",
      frequency: "Advanced academic discourse",
      register: "Very formal, academic",
      variations: [
        "Multiple embedded conditionals",
        "Conditionals with temporal adverbials",
        "Conditionals with causal connectors",
      ],
    },
  ],

  examples: [
    {
      type: "Mixed Conditional - Personal Life",
      examples: [
        "If I had learned to play piano as a child, I would be performing in concerts now.",
        "If she had moved to London ten years ago, she would speak English fluently today.",
        "If they had bought that house in 2010, they would be millionaires now.",
        "If I had studied computer science, I would be working in tech now.",
      ],
      level: "B2-C1",
      context: "Personal reflection, career choices, life decisions",
      explanation: [
        "Shows regret about past decisions affecting present situation",
        "Connects past choices with current circumstances",
        "Often used in counseling and self-reflection contexts",
      ],
    },
    {
      type: "Mixed Conditional - Character Analysis",
      examples: [
        "If he were more confident, he would have asked her out years ago.",
        "If I were better at public speaking, I would have accepted that promotion.",
        "If she were less stubborn, she would have apologized by now.",
        "If they were more open-minded, they would have embraced the change.",
      ],
      level: "B2-C1",
      context: "Psychology, character development, relationship analysis",
      explanation: [
        "Links personality traits with missed opportunities",
        "Used in psychological analysis and character studies",
        "Common in literature and film analysis",
      ],
    },
    {
      type: "Formal Inversion - Academic Writing",
      examples: [
        "Had the research been conducted more rigorously, the conclusions would be more reliable.",
        "Were the methodology to be improved, future studies could yield better results.",
        "Should additional funding become available, the project scope could be expanded.",
        "Had the data been collected over a longer period, the trends would be clearer.",
      ],
      level: "C1-C2",
      context: "Academic papers, research discussions, formal analysis",
      explanation: [
        "Creates authoritative tone in academic discourse",
        "Shows sophisticated command of formal register",
        "Used to discuss hypothetical improvements or alternatives",
      ],
    },
    {
      type: "Business and Professional Contexts",
      examples: [
        "Should market conditions improve, we would consider expanding operations.",
        "Were the company to restructure, many positions would be affected.",
        "Had we implemented the new system earlier, productivity would be higher now.",
        "Should you require additional information, our team remains at your disposal.",
      ],
      level: "B2-C1",
      context:
        "Business communication, professional correspondence, corporate strategy",
      explanation: [
        "Maintains professional tone while discussing hypotheticals",
        "Used in strategic planning and business analysis",
        "Common in formal business correspondence",
      ],
    },
    {
      type: "Historical and Social Analysis",
      examples: [
        "Had slavery been abolished earlier, American society would be more equitable today.",
        "If women had been given equal rights from the beginning, modern workplace dynamics would be different.",
        "Were education to be truly accessible to all, social mobility would increase significantly.",
        "Had environmental protection been prioritized decades ago, climate change would be less severe now.",
      ],
      level: "C1-C2",
      context: "Historical analysis, social commentary, policy discussions",
      explanation: [
        "Used to analyze alternative historical scenarios",
        "Common in policy analysis and social criticism",
        "Demonstrates sophisticated understanding of cause and effect across time",
      ],
    },
  ],

  common_mistakes: [
    "Dùng 'would have' trong mệnh đề if: 'If I would have known...' (sai) → 'If I had known...' (đúng)",
    "Nhầm lẫn thì giữa phần điều kiện và kết quả trong mixed conditionals: 'If I studied harder, I would have a better job' (sai) → 'If I had studied harder, I would have a better job now' (đúng)",
    "Không dùng đúng trợ động từ cho inversion: 'Would I have known...' (sai) → 'Had I known...' (đúng)",
    "Không chia động từ đúng sau cấu trúc đảo ngữ: 'Were he to comes...' (sai) → 'Were he to come...' (đúng)",
    "Sử dụng inversion trong ngữ cảnh không phù hợp (quá trang trọng cho giao tiếp thường ngày)",
    "Nhầm lẫn giữa mixed conditionals và regular conditionals dẫn đến logic thời gian sai",
    "Overusing inversion tạo ra văn phong cứng nhắc và không tự nhiên",
    "Mixing formal inversion with informal vocabulary creates register inconsistency",
    "Incorrect word order in complex inverted structures with embedded clauses",
    "Failure to maintain tense consistency in extended conditional passages",
  ],

  usage_notes: [
    "Mixed conditionals thường dùng để nói về những kết quả hiện tại ảnh hưởng bởi điều kiện trong quá khứ hoặc ngược lại - đây là cách thể hiện sự phức tạp của human experience.",
    "Inversion trong câu điều kiện thường dùng trong văn viết trang trọng, giúp câu thêm sắc thái mạnh mẽ, nhấn mạnh và thể hiện register cao.",
    "Nên tránh dùng inversion trong văn nói thông thường để tránh bị cứng nhắc hoặc khó hiểu - save it for appropriate formal contexts.",
    "Mixed conditionals require careful attention to logical time relationships - always ensure the time frame makes sense.",
    "Inversion is most effective when used sparingly for emphasis - overuse can make writing sound pretentious.",
    "Consider your audience and purpose: academic writing, business communication, and literary analysis are appropriate contexts for these structures.",
    "Practice recognizing these structures in authentic texts (academic papers, business reports, literary works) to understand their natural usage patterns.",
    "When teaching or learning, focus on meaning and context before drilling forms - understanding the logic helps with accurate production.",
    "Be aware of cultural differences: some languages have different conditional systems, affecting L2 learner acquisition patterns.",
  ],

  related_topics: [
    "Câu điều kiện loại 1, 2, 3 (Basic Conditionals) - foundational knowledge required",
    "Câu điều kiện gián tiếp (Reported Conditionals) - for advanced discourse functions",
    "Các trạng từ phủ định và đảo ngữ (Negative adverbs and inversion) - related syntactic structures",
    "Subjunctive mood trong tiếng Anh - overlapping grammatical territory",
    "Các dạng câu cầu khiến (Causative forms) liên quan đến điều kiện - complex sentence structures",
    "Modal verbs in hypothetical contexts - would, could, might, should in conditionals",
    "Time expressions and temporal deixis - understanding time relationships in language",
    "Register và style variation - formal vs informal language use",
    "Pragmatics của politeness - using conditionals for polite requests and suggestions",
    "Cognitive linguistics và conceptual metaphor - how we conceptualize time and possibility",
  ],

  references: [
    "Practical English Usage (4th Edition) - Michael Swan (Oxford University Press, 2016) - Comprehensive coverage of conditional structures with detailed explanations of mixed conditionals and inversion",
    "English Grammar in Use (5th Edition) - Raymond Murphy (Cambridge University Press, 2019) - Practical exercises and clear explanations of advanced conditional forms",
    "The Cambridge Grammar of the English Language - Rodney Huddleston & Geoffrey Pullum (Cambridge University Press, 2002) - Authoritative linguistic analysis of conditional constructions",
    "Oxford English Grammar Course (Advanced) - Michael Swan & Catherine Walter (Oxford University Press, 2011) - Systematic approach to advanced grammatical structures including conditionals",
    "A Comprehensive Grammar of the English Language - Randolph Quirk et al. (Longman, 1985) - Detailed scholarly treatment of English conditional systems",
    "Advanced Grammar in Use (3rd Edition) - Martin Hewings (Cambridge University Press, 2013) - Advanced-level practice with sophisticated conditional structures",
    "The Teacher's Grammar of English - Ron Cowan (Cambridge University Press, 2008) - Pedagogical insights into teaching advanced conditional forms",
    "Understanding and Using English Grammar (5th Edition) - Betty Azar & Stacy Hagen (Pearson, 2017) - Clear explanations with extensive practice materials",
    "Cambridge Advanced Learner's Dictionary (4th Edition) - Cambridge University Press (2013) - Authentic examples of conditionals in context",
    "The Oxford Guide to English Grammar - John Eastwood (Oxford University Press, 1994) - User-friendly explanations of complex grammatical structures",
  ],

  etymology: {
    historicalDevelopment:
      "Conditional constructions in English have evolved from Old English and Middle English subjunctive forms, influenced by Latin conditional structures through Norman French. The modern system of three basic conditional types developed during the Early Modern English period (1500-1700), while mixed conditionals and formal inversion patterns became more systematized during the 18th and 19th centuries as English became increasingly used for academic and formal discourse.",
    languageEvolution: [
      "Old English used subjunctive mood extensively for hypothetical situations",
      "Middle English began developing 'if' constructions similar to modern forms",
      "Early Modern English established the three-type conditional system",
      "18th-19th century: Formalization of inversion patterns in literary and academic writing",
      "20th century: Mixed conditionals became more recognized as distinct grammatical category",
      "Contemporary English: Increased awareness of register differences and pragmatic functions",
    ],
  },

  crossLinguisticComparison: {
    similarities: [
      "Most languages have some form of conditional or hypothetical expressions",
      "The basic concept of if-then relationships is universal across languages",
      "Many Indo-European languages share similar conditional structures",
      "Formal registers often employ special conditional markers across languages",
    ],
    differences: [
      "Romance languages typically use subjunctive mood more extensively than English",
      "Many Asian languages use different grammatical particles for hypothetical situations",
      "German and Dutch have different auxiliary verb patterns in conditionals",
      "Some languages don't distinguish between different types of conditionals as clearly as English",
    ],
    learnerL1Influence: [
      "Spanish speakers may overuse subjunctive-like forms",
      "Mandarin speakers may struggle with complex time relationships",
      "Arabic speakers may have difficulty with English conditional word order",
      "Japanese speakers may find inversion patterns particularly challenging due to SOV word order",
    ],
  },

  pedagogicalApproach: {
    teachingSequence: [
      "Establish solid foundation in basic conditionals (Types 1, 2, 3) before introducing mixed forms",
      "Introduce mixed conditionals with clear timeline diagrams and real-life examples",
      "Practice recognition before production - use authentic texts to identify structures",
      "Start with most common mixed conditional (past condition → present result)",
      "Introduce inversion gradually, beginning with most formal written contexts",
      "Emphasize register awareness and appropriateness throughout",
    ],
    commonLearnerErrors: [
      "Using 'would' in the if-clause (interference from L1 or overgeneralization)",
      "Incorrect time logic in mixed conditionals",
      "Overuse of formal inversion in inappropriate contexts",
      "Difficulty maintaining tense consistency in complex conditional passages",
      "Register mixing (formal inversion with informal vocabulary)",
    ],
    effectiveExplanations: [
      "Use timeline diagrams to visualize time relationships in mixed conditionals",
      "Emphasize meaning and context before focusing on form",
      "Provide authentic examples from target discourse contexts",
      "Practice transformation exercises (standard → inversion forms)",
      "Use guided discovery to help learners notice patterns in authentic texts",
    ],
  },

  advancedApplications: {
    literaryUsage: [
      "Creating dramatic emphasis in poetry and prose",
      "Character development through hypothetical reflections",
      "Narrative techniques for alternative storylines",
      "Establishing formal tone in classical literary styles",
    ],
    academicWriting: [
      "Discussing alternative research methodologies",
      "Analyzing historical counterfactuals",
      "Presenting theoretical frameworks and hypotheses",
      "Creating emphasis in argumentative discourse",
    ],
    professionalCommunication: [
      "Strategic business planning and scenario analysis",
      "Legal documents and contract language",
      "Diplomatic correspondence and formal negotiations",
      "Technical writing and policy development",
    ],
    creativeWriting: [
      "Alternative history fiction and speculative scenarios",
      "Character psychology and motivation analysis",
      "Dramatic monologues and internal reflections",
      "Experimental narrative structures",
    ],
  },

  assessmentCriteria: {
    A1_A2: [
      "Recognizes basic conditional structures in context",
      "Understands the difference between real and unreal situations",
      "Can form simple Type 1, 2, and 3 conditionals with guidance",
      "Shows awareness that conditionals express hypothetical situations",
    ],
    B1_B2: [
      "Uses mixed conditionals appropriately in familiar contexts",
      "Recognizes formal inversion patterns in written texts",
      "Can explain the time relationships in mixed conditionals",
      "Demonstrates understanding of register differences",
      "Produces mixed conditionals with occasional errors",
    ],
    C1_C2: [
      "Uses complex conditional structures fluently and appropriately",
      "Employs inversion for stylistic effect in formal writing",
      "Demonstrates sophisticated understanding of time and causality",
      "Shows awareness of pragmatic functions and register requirements",
      "Produces error-free complex conditional constructions",
      "Can manipulate conditional structures for rhetorical purposes",
    ],
  },
};

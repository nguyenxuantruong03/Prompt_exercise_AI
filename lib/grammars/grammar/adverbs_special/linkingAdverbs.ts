import { linkingAdverbsType } from "@/types/grammars/grammar/adverbs_special/linkingAdverbs";

export const linkingAdverbsData: linkingAdverbsType = {
  topic: "Linking Adverbs (Conjunctive Adverbs)",
  definition:
    "Linking adverbs, also known as conjunctive adverbs, are words that connect ideas, sentences, or clauses by showing relationships such as addition, contrast, cause and effect, sequence, or comparison. They help create coherence and logical flow in writing and speech.",
  vietnameseDefinition:
    "Trạng từ liên kết, còn được gọi là trạng từ nối, là những từ kết nối các ý tưởng, câu hoặc mệnh đề bằng cách thể hiện các mối quan hệ như bổ sung, tương phản, nguyên nhân-kết quả, trình tự hoặc so sánh. Chúng giúp tạo ra sự gắn kết và luồng logic trong viết và nói.",
  levels: ["A1", "A2", "B1", "B2", "C1", "C2"],

  // Comprehensive vocabulary section
  linkingAdverbs_vocab: {
    definition:
      "Linking adverbs are adverbs that connect ideas, sentences, or clauses by showing relationships such as addition, contrast, cause and effect, sequence, or comparison.",

    categories: {
      addition: [
        "also",
        "besides",
        "furthermore",
        "moreover",
        "in addition",
        "likewise",
      ],
      contrast: [
        "however",
        "nevertheless",
        "nonetheless",
        "still",
        "yet",
        "on the other hand",
        "conversely",
      ],
      cause_and_effect: [
        "therefore",
        "thus",
        "consequently",
        "hence",
        "as a result",
        "accordingly",
      ],
      sequence: [
        "then",
        "next",
        "afterward(s)",
        "subsequently",
        "finally",
        "lastly",
      ],
      comparison: ["similarly", "likewise", "correspondingly", "equally"],
      emphasis: ["indeed", "in fact", "certainly", "undoubtedly"],
      concession: ["however", "nevertheless", "nonetheless", "still"],
      summary: [
        "in conclusion",
        "to sum up",
        "overall",
        "in brief",
        "all in all",
      ],
      clarification: [
        "in other words",
        "that is",
        "namely",
        "specifically",
        "more precisely",
        "to put it differently",
      ],
      condition: [
        "otherwise",
        "if not",
        "in that case",
        "under these circumstances",
      ],
      exemplification: [
        "for example",
        "for instance",
        "such as",
        "to illustrate",
        "case in point",
      ],
      reformulation: [
        "in other words",
        "to rephrase",
        "put simply",
        "to put it another way",
        "stated differently",
      ],
    },

    usage_examples: [
      "The weather was terrible. However, we enjoyed our vacation.",
      "She studied hard; therefore, she passed the exam.",
      "The project was challenging. Furthermore, it was educational.",
      "He's talented. Moreover, he's very dedicated.",
      "The plan failed. Nevertheless, we learned valuable lessons.",
      "First, we need to gather data. Then, we can analyze it.",
      "The results were promising. In addition, they were cost-effective.",
      "Some people prefer tea. Conversely, others choose coffee.",
      "The task was difficult. Nonetheless, the team completed it.",
      "Sales increased dramatically. Consequently, profits soared.",
    ],

    CEFR_levels: {
      A1: {
        adverbs: ["also", "then", "so", "and then"],
        definitions: {
          also: "used to add information",
          then: "used to show sequence or time",
          so: "used to show result (informal)",
        },
        vietnameseTranslations: {
          also: "cũng, cũng vậy",
          then: "sau đó, rồi",
          so: "vì vậy, do đó",
        },
        basicUsage: [
          "I like coffee. I also like tea.",
          "First, we eat. Then, we go home.",
          "It was late, so we left.",
        ],
        commonErrors: [
          "Using 'also' at the beginning without comma: 'Also I like tea.'",
          "Confusing 'then' with 'than': 'First we eat then we go.'",
        ],
      },
      A2: {
        adverbs: ["however", "therefore", "still", "anyway", "meanwhile"],
        definitions: {
          however: "used to show contrast or opposition",
          therefore: "used to show logical result",
          still: "used to show contrast or continuation",
          anyway: "used to change topic or dismiss",
          meanwhile: "used to show something happening at the same time",
        },
        vietnameseTranslations: {
          however: "tuy nhiên, nhưng",
          therefore: "do đó, vì vậy",
          still: "vẫn, tuy vậy",
          anyway: "dù sao đi nữa",
          meanwhile: "trong khi đó",
        },
        basicUsage: [
          "It was raining. However, we went out.",
          "He studied hard. Therefore, he passed.",
          "It's expensive. Still, I want it.",
          "I don't like it. Anyway, let's try.",
          "She cooked. Meanwhile, he cleaned.",
        ],
        commonErrors: [
          "Missing comma after 'however': 'However we went out.'",
          "Using 'therefore' without proper punctuation.",
        ],
      },
      B1: {
        adverbs: [
          "furthermore",
          "moreover",
          "nevertheless",
          "consequently",
          "in addition",
          "on the other hand",
          "as a result",
        ],
        definitions: {
          furthermore: "used to add more supporting information",
          moreover: "used to add emphasis to additional information",
          nevertheless: "used to show contrast despite previous information",
          consequently: "used to show logical result or consequence",
          "in addition": "used to add extra information",
          "on the other hand": "used to present contrasting viewpoint",
          "as a result": "used to show consequence or outcome",
        },
        vietnameseTranslations: {
          furthermore: "hơn nữa, thêm vào đó",
          moreover: "hơn thế nữa, quan trọng hơn",
          nevertheless: "tuy nhiên, dù vậy",
          consequently: "do đó, hậu quả là",
          "in addition": "thêm vào đó",
          "on the other hand": "mặt khác",
          "as a result": "kết quả là",
        },
        intermediateUsage: [
          "The plan is good. Furthermore, it's affordable.",
          "He's smart. Moreover, he's hardworking.",
          "It's difficult. Nevertheless, we must try.",
          "It rained heavily. Consequently, flights were delayed.",
          "She speaks English. In addition, she knows French.",
          "The job pays well. On the other hand, it's stressful.",
          "Sales increased. As a result, profits rose.",
        ],
        formalVsInformal: {
          furthermore: "formal - use in academic writing",
          moreover: "formal - emphasizes importance",
          nevertheless: "formal - shows strong contrast",
          consequently: "formal - shows clear result",
        },
        commonErrors: [
          "Using comma instead of semicolon before linking adverb between clauses.",
          "Forgetting comma after longer linking adverbs.",
        ],
      },
      B2: {
        adverbs: [
          "nonetheless",
          "accordingly",
          "hence",
          "subsequently",
          "alternatively",
          "conversely",
          "likewise",
        ],
        definitions: {
          nonetheless: "used to show contrast despite what was said before",
          accordingly: "used to show action taken as logical response",
          hence: "used to show logical conclusion (formal)",
          subsequently: "used to show what happened later in time",
          alternatively: "used to present different option or approach",
          conversely: "used to show opposite or contrasting situation",
          likewise: "used to show similarity or agreement",
        },
        vietnameseTranslations: {
          nonetheless: "tuy nhiên, dù vậy",
          accordingly: "do đó, theo đó",
          hence: "do đó, vì thế",
          subsequently: "sau đó, tiếp theo",
          alternatively: "hoặc là, thay vào đó",
          conversely: "ngược lại",
          likewise: "tương tự, cũng vậy",
        },
        advancedUsage: [
          "The task was difficult. Nonetheless, she completed it.",
          "The data showed problems. Accordingly, changes were made.",
          "The evidence is clear. Hence, we must act.",
          "The meeting ended. Subsequently, decisions were implemented.",
          "We could take the train. Alternatively, we could drive.",
          "Some people love change. Conversely, others fear it.",
          "He studied hard. Likewise, his sister was dedicated.",
        ],
        academicWriting: [
          "Use 'nonetheless' for strong contrast in formal arguments",
          "Apply 'accordingly' when describing responsive actions",
          "Employ 'hence' for logical conclusions in research",
          "Utilize 'subsequently' for chronological academic narratives",
        ],
        stylistic_variations: {
          nonetheless: ["nevertheless", "even so", "all the same"],
          accordingly: ["therefore", "consequently", "thus"],
          hence: ["therefore", "thus", "as a result"],
          conversely: ["on the contrary", "in contrast", "oppositely"],
        },
        commonErrors: [
          "Overusing formal linking adverbs in casual conversation.",
          "Confusing 'hence' with 'since' in temporal meaning.",
        ],
      },
      C1: {
        adverbs: [
          "indeed",
          "specifically",
          "particularly",
          "incidentally",
          "admittedly",
          "undoubtedly",
          "presumably",
        ],
        definitions: {
          indeed: "used to emphasize or confirm a statement",
          specifically: "used to give precise or exact information",
          particularly: "used to emphasize one thing among others",
          incidentally: "used to add related but not central information",
          admittedly: "used to acknowledge a potentially contrary point",
          undoubtedly: "used to express certainty or conviction",
          presumably: "used to indicate reasonable assumption",
        },
        vietnameseTranslations: {
          indeed: "thật vậy, quả thực",
          specifically: "cụ thể là, riêng biệt",
          particularly: "đặc biệt là, nhất là",
          incidentally: "ngẫu nhiên mà nói, tiện thể",
          admittedly: "phải thừa nhận rằng",
          undoubtedly: "không còn nghi ngờ gì",
          presumably: "có lẽ, được cho là",
        },
        sophisticatedUsage: [
          "The results were impressive. Indeed, they exceeded expectations.",
          "Many factors contributed. Specifically, funding was crucial.",
          "All students improved. Particularly, the weaker ones benefited.",
          "The project succeeded. Incidentally, it came in under budget.",
          "The plan has merit. Admittedly, there are some risks.",
          "This approach will work. Undoubtedly, it's the best option.",
          "The meeting will be postponed. Presumably, due to weather.",
        ],
        academicAndProfessional: [
          "Use 'indeed' for scholarly emphasis and confirmation",
          "Apply 'specifically' for precise academic clarification",
          "Employ 'particularly' for academic focus and emphasis",
          "Utilize 'admittedly' for balanced academic arguments",
        ],
        nuancedMeanings: {
          indeed: "confirms while adding emphasis - stronger than 'yes'",
          specifically:
            "narrows focus to exact details - more precise than 'particularly'",
          incidentally: "introduces tangential but relevant information",
          presumably:
            "indicates logical assumption based on available evidence",
        },
        collocations: {
          indeed: ["indeed true", "indeed possible", "indeed remarkable"],
          specifically: [
            "specifically designed",
            "specifically intended",
            "specifically mentioned",
          ],
          particularly: [
            "particularly important",
            "particularly relevant",
            "particularly striking",
          ],
          undoubtedly: [
            "undoubtedly correct",
            "undoubtedly successful",
            "undoubtedly beneficial",
          ],
        },
        commonErrors: [
          "Using 'indeed' too frequently as a filler word.",
          "Misplacing 'particularly' in sentence structure.",
        ],
      },
      C2: {
        adverbs: [
          "invariably",
          "notwithstanding",
          "albeit",
          "whereby",
          "henceforth",
          "heretofore",
          "vis-à-vis",
        ],
        definitions: {
          invariably:
            "used to indicate something always happens without exception",
          notwithstanding: "used to show contrast despite circumstances",
          albeit: "used to introduce limiting or contrasting factor",
          whereby: "used to indicate means or method by which",
          henceforth: "used to indicate from this point forward in time",
          heretofore: "used to indicate up to this point in time",
          "vis-à-vis": "used to indicate in relation to or compared with",
        },
        vietnameseTranslations: {
          invariably: "luôn luôn, không thay đổi",
          notwithstanding: "mặc dù, bất chấp",
          albeit: "mặc dù, dù rằng",
          whereby: "theo đó, bằng cách đó",
          henceforth: "từ nay về sau",
          heretofore: "cho đến nay",
          "vis-à-vis": "đối với, so với",
        },
        expertUsage: [
          "He was invariably punctual for all meetings.",
          "The plan proceeded, notwithstanding significant obstacles.",
          "The solution was effective, albeit temporary.",
          "A system whereby complaints are addressed promptly.",
          "Henceforth, all reports must be submitted digitally.",
          "The policy, heretofore successful, needed revision.",
          "Our performance vis-à-vis competitors was superior.",
        ],
        literaryAndRhetorical: [
          "Use 'invariably' for universal statements in formal discourse",
          "Apply 'notwithstanding' for sophisticated contrast in academic writing",
          "Employ 'albeit' for concessive clauses in complex arguments",
          "Utilize archaic forms sparingly for historical or legal contexts",
        ],
        subtleDistinctions: {
          invariably: "emphasizes absolute consistency without exception",
          notwithstanding:
            "formal alternative to 'despite' - more authoritative",
          albeit: "introduces concessions more elegantly than 'although'",
          whereby: "establishes systematic procedures or methods",
        },
        advancedCollocations: {
          invariably: [
            "invariably successful",
            "invariably leads to",
            "invariably results in",
          ],
          notwithstanding: [
            "notwithstanding the fact",
            "notwithstanding these concerns",
          ],
          whereby: ["system whereby", "process whereby", "mechanism whereby"],
          henceforth: ["henceforth be known", "henceforth referred to as"],
        },
        masterLevelErrors: [
          "Using archaic forms inappropriately in modern contexts.",
          "Overusing sophisticated linking adverbs unnecessarily.",
        ],
      },
    },

    position_rules: {
      sentence_initial: {
        description:
          "Linking adverbs commonly appear at the beginning of sentences for maximum emphasis and clarity.",
        examples: [
          "Furthermore, the research confirms our hypothesis.",
          "However, there are several limitations to consider.",
          "Therefore, we must reconsider our approach.",
        ],
        punctuation_rules: [
          "Always use a comma after the linking adverb.",
          "Capitalize the linking adverb when it starts a sentence.",
          "Ensure the following clause is grammatically complete.",
        ],
      },
      mid_sentence: {
        description:
          "Linking adverbs can appear in the middle of sentences, often between clauses or as parenthetical elements.",
        examples: [
          "The results, however, were inconclusive.",
          "We must, therefore, seek alternative solutions.",
          "The plan was successful; moreover, it was cost-effective.",
        ],
        punctuation_rules: [
          "Use commas on both sides when interrupting a clause.",
          "Use semicolon before and comma after when joining independent clauses.",
          "Ensure the adverb doesn't create ambiguity in meaning.",
        ],
      },
      sentence_end: {
        description:
          "Some linking adverbs can appear at the end of sentences for stylistic effect or as afterthoughts.",
        examples: [
          "The experiment failed, unfortunately.",
          "He was right, obviously.",
          "Things will improve, hopefully.",
        ],
        punctuation_rules: [
          "Use a comma before the linking adverb.",
          "This position is generally less formal.",
          "Not all linking adverbs work well in final position.",
        ],
      },
      between_clauses: {
        description:
          "Linking adverbs frequently connect independent clauses, showing relationships between ideas.",
        examples: [
          "The weather was terrible; nevertheless, we enjoyed the trip.",
          "He studied diligently; consequently, he passed with distinction.",
          "The plan seemed perfect; however, it had several flaws.",
        ],
        punctuation_rules: [
          "Use semicolon before the linking adverb.",
          "Use comma after the linking adverb.",
          "Both clauses must be grammatically independent.",
        ],
      },
    },

    comparison_with_conjunctions: {
      note: "Understanding the differences between linking adverbs and conjunctions is crucial for proper usage and punctuation.",
      examples: [
        {
          conjunction: "She was tired, but she continued working.",
          linking_adverb: "She was tired; however, she continued working.",
          explanation:
            "Coordinating conjunction 'but' uses simple comma, while linking adverb 'however' requires semicolon and comma.",
        },
        {
          conjunction: "He studied hard, so he passed the exam.",
          linking_adverb: "He studied hard; therefore, he passed the exam.",
          explanation:
            "Coordinating conjunction 'so' shows result with comma, linking adverb 'therefore' needs formal punctuation.",
        },
        {
          conjunction: "Although it was raining, we went hiking.",
          linking_adverb: "It was raining. Nevertheless, we went hiking.",
          explanation:
            "Subordinating conjunction creates dependent clause, linking adverb connects independent sentences.",
        },
        {
          conjunction: "We went hiking although it was raining.",
          linking_adverb: "It was raining; nevertheless, we went hiking.",
          explanation:
            "Subordinating conjunction can appear mid-sentence, linking adverb typically appears at clause boundaries.",
        },
      ],
    },

    common_mistakes: [
      {
        mistake: "However he was tired, he continued working.",
        correction: "However, he was tired, he continued working.",
        explanation:
          "Missing comma after 'however' and incorrect sentence structure.",
        level: "A2",
      },
      {
        mistake: "She worked hard, therefore she succeeded.",
        correction: "She worked hard; therefore, she succeeded.",
        explanation:
          "Need semicolon before 'therefore' when connecting independent clauses.",
        level: "B1",
      },
      {
        mistake: "The plan failed. Moreover, it was expensive.",
        correction: "The plan failed; moreover, it was expensive.",
        explanation:
          "When ideas are closely related, use semicolon instead of period.",
        level: "B2",
      },
    ],

    learning_tips: [
      "Start with basic linking adverbs like 'also', 'then', and 'so' for A1-A2 levels.",
      "Master punctuation rules early - they're crucial for correct usage.",
      "Practice formal vs informal register - choose appropriate adverbs for context.",
      "Learn linking adverbs in functional groups (addition, contrast, result, etc.).",
      "Use linking adverbs to improve essay coherence and logical flow.",
      "Read academic texts to see sophisticated linking adverbs in context.",
      "Practice transitioning between paragraphs using linking adverbs.",
      "Avoid overusing the same linking adverbs - develop variety in your repertoire.",
    ],
  },

  // Comprehensive types section with all required properties
  types: [
    {
      category: "Addition",
      vietnamese: "Bổ sung",
      examples: [
        "also",
        "besides",
        "furthermore",
        "moreover",
        "in addition",
        "what's more",
        "not only that",
        "additionally",
      ],
      sampleSentences: [
        "He is a great teacher. Moreover, he is very kind.",
        "She's smart. In addition, she works very hard.",
        "The weather was perfect. Furthermore, the location was beautiful.",
      ],
      formalityLevel: "neutral",
      frequency: "high",
      cefrLevel: ["A1", "A2", "B1"],
      detailedExplanation:
        "Addition linking adverbs are used to add information, support, or extra points to strengthen an argument or narrative. They help build cumulative meaning and create logical progression in discourse.",
      vietnameseExplanation:
        "Trạng từ liên kết bổ sung được dùng để thêm thông tin, hỗ trợ hoặc điểm phụ để củng cố lập luận hoặc tường thuật. Chúng giúp xây dựng ý nghĩa tích lũy và tạo sự tiến triển logic trong diễn ngôn.",
    },
    {
      category: "Contrast",
      vietnamese: "Tương phản",
      examples: [
        "however",
        "nevertheless",
        "nonetheless",
        "on the other hand",
        "still",
        "even so",
        "in contrast",
        "conversely",
        "alternatively",
      ],
      sampleSentences: [
        "It was raining. However, we still went hiking.",
        "He is rich. On the other hand, he is not happy.",
        "The plan seemed perfect. Nevertheless, it failed completely.",
      ],
      formalityLevel: "formal",
      frequency: "high",
      cefrLevel: ["A2", "B1", "B2"],
      detailedExplanation:
        "Contrast linking adverbs show opposition, unexpected results, or contradictory information. They are essential for presenting balanced arguments and showing complexity in ideas.",
      vietnameseExplanation:
        "Trạng từ liên kết tương phản thể hiện sự đối lập, kết quả bất ngờ hoặc thông tin mâu thuẫn. Chúng rất quan trọng để trình bày lập luận cân bằng và thể hiện sự phức tạp trong ý tưởng.",
    },
    {
      category: "Result / Consequence",
      vietnamese: "Kết quả / Hệ quả",
      examples: [
        "therefore",
        "thus",
        "hence",
        "consequently",
        "as a result",
        "accordingly",
        "for this reason",
      ],
      sampleSentences: [
        "He was tired. Therefore, he went to bed early.",
        "It rained heavily. As a result, the roads were flooded.",
        "The evidence was clear. Consequently, the verdict was unanimous.",
      ],
      formalityLevel: "formal",
      frequency: "high",
      cefrLevel: ["A2", "B1", "B2"],
      detailedExplanation:
        "Result linking adverbs establish cause-and-effect relationships, showing logical consequences of previous statements. They are crucial for argumentative and explanatory writing.",
      vietnameseExplanation:
        "Trạng từ liên kết kết quả thiết lập mối quan hệ nguyên nhân-kết quả, thể hiện hậu quả logic của các phát biểu trước đó. Chúng rất quan trọng cho văn viết tranh luận và giải thích.",
    },
    {
      category: "Sequence / Time",
      vietnamese: "Trình tự / Thời gian",
      examples: [
        "then",
        "next",
        "afterwards",
        "meanwhile",
        "subsequently",
        "eventually",
        "finally",
        "in the meantime",
        "simultaneously",
      ],
      sampleSentences: [
        "We ate dinner. Then, we watched a movie.",
        "He graduated from university. Afterwards, he moved abroad.",
        "Meanwhile, the situation was getting worse.",
      ],
      formalityLevel: "neutral",
      frequency: "high",
      cefrLevel: ["A1", "A2", "B1"],
      detailedExplanation:
        "Sequence linking adverbs organize events in chronological order or show temporal relationships. They are essential for narrative writing and process descriptions.",
      vietnameseExplanation:
        "Trạng từ liên kết trình tự sắp xếp các sự kiện theo thứ tự thời gian hoặc thể hiện mối quan hệ thời gian. Chúng rất quan trọng cho văn viết tường thuật và mô tả quy trình.",
    },
    {
      category: "Comparison",
      vietnamese: "So sánh",
      examples: [
        "similarly",
        "likewise",
        "in the same way",
        "correspondingly",
        "equally",
      ],
      sampleSentences: [
        "Tom loves tennis. Similarly, his brother is a fan of the sport.",
        "The results were consistent. Likewise, the methodology was reliable.",
      ],
      formalityLevel: "formal",
      frequency: "medium",
      cefrLevel: ["B1", "B2"],
      detailedExplanation:
        "Comparison linking adverbs show similarity or parallel relationships between ideas, events, or situations.",
      vietnameseExplanation:
        "Trạng từ liên kết so sánh thể hiện sự tương đồng hoặc mối quan hệ song song giữa các ý tưởng, sự kiện hoặc tình huống.",
    },
    {
      category: "Emphasis",
      vietnamese: "Nhấn mạnh",
      examples: [
        "indeed",
        "in fact",
        "above all",
        "clearly",
        "undoubtedly",
        "certainly",
        "obviously",
        "particularly",
      ],
      sampleSentences: [
        "He is a great leader. Indeed, he inspires everyone.",
        "This is clearly a mistake.",
        "The results were, indeed, surprising.",
      ],
      formalityLevel: "formal",
      frequency: "medium",
      cefrLevel: ["B1", "B2", "C1"],
      detailedExplanation:
        "Emphasis linking adverbs strengthen statements, highlight important points, or confirm information. They add persuasive power to arguments and clarify the speaker's stance.",
      vietnameseExplanation:
        "Trạng từ liên kết nhấn mạnh củng cố phát biểu, làm nổi bật điểm quan trọng hoặc xác nhận thông tin. Chúng tăng sức thuyết phục cho lập luận và làm rõ lập trường của người nói.",
    },
    {
      category: "Summary / Conclusion",
      vietnamese: "Tóm tắt / Kết luận",
      examples: [
        "in conclusion",
        "to sum up",
        "in summary",
        "all in all",
        "overall",
        "to conclude",
        "in short",
        "ultimately",
      ],
      sampleSentences: [
        "To sum up, we must act now to save the environment.",
        "All in all, the trip was a success.",
        "In conclusion, further research is needed.",
      ],
      formalityLevel: "formal",
      frequency: "medium",
      cefrLevel: ["B2", "C1", "C2"],
      detailedExplanation:
        "Summary linking adverbs signal the end of a discussion and present final thoughts or conclusions. They are essential for academic writing and formal presentations.",
      vietnameseExplanation:
        "Trạng từ liên kết tóm tắt báo hiệu kết thúc thảo luận và trình bày suy nghĩ cuối cùng hoặc kết luận. Chúng rất quan trọng cho văn viết học thuật và thuyết trình trang trọng.",
    },
    {
      category: "Clarification / Reformulation",
      vietnamese: "Làm rõ / Diễn đạt lại",
      examples: [
        "in other words",
        "that is",
        "to put it another way",
        "namely",
        "specifically",
        "more precisely",
      ],
      sampleSentences: [
        "She is a polyglot. In other words, she speaks many languages.",
        "The plan failed. That is, it didn't achieve its objectives.",
      ],
      formalityLevel: "formal",
      frequency: "medium",
      cefrLevel: ["B2", "C1", "C2"],
      detailedExplanation:
        "Clarification linking adverbs rephrase, explain, or make previous statements more precise. They help ensure understanding and avoid ambiguity in communication.",
      vietnameseExplanation:
        "Trạng từ liên kết làm rõ diễn đạt lại, giải thích hoặc làm cho các phát biểu trước đó chính xác hơn. Chúng giúp đảm bảo sự hiểu biết và tránh sự mơ hồ trong giao tiếp.",
    },
    {
      category: "Condition",
      vietnamese: "Điều kiện",
      examples: [
        "otherwise",
        "if not",
        "in that case",
        "under these circumstances",
      ],
      sampleSentences: [
        "You must study. Otherwise, you will fail the test.",
        "The weather must improve. If not, the event will be cancelled.",
      ],
      formalityLevel: "neutral",
      frequency: "medium",
      cefrLevel: ["B1", "B2"],
      detailedExplanation:
        "Condition linking adverbs present alternative scenarios or consequences. They show what will happen if certain conditions are not met.",
      vietnameseExplanation:
        "Trạng từ liên kết điều kiện trình bày các kịch bản thay thế hoặc hậu quả. Chúng thể hiện điều gì sẽ xảy ra nếu một số điều kiện nhất định không được đáp ứng.",
    },
  ],

  // Enhanced position rules with detailed information
  positionRules: {
    explanation:
      "Linking adverbs usually come at the beginning of a sentence or clause, followed by a comma. They can also appear mid- or end-position with commas. Position affects emphasis and formality.",
    examples: [
      "However, we decided to continue.",
      "We, however, decided to continue.",
      "We decided to continue, however.",
    ],
    detailedRules: [
      {
        position: "sentence-initial",
        rule: "Most common and emphatic position. Always followed by comma.",
        examples: [
          "Therefore, the project was cancelled.",
          "Meanwhile, the situation deteriorated.",
          "Consequently, new measures were introduced.",
        ],
        exceptions: [
          "Some short adverbs like 'so' and 'then' may not always require commas in informal speech.",
        ],
      },
      {
        position: "mid-sentence",
        rule: "Used between clauses with semicolon before and comma after.",
        examples: [
          "The plan failed; however, we learned valuable lessons.",
          "He worked hard; therefore, he succeeded.",
          "It was expensive; nevertheless, it was worth it.",
        ],
      },
      {
        position: "end-position",
        rule: "Less formal, often used for emphasis or afterthought.",
        examples: [
          "The plan worked out well, fortunately.",
          "He was right, obviously.",
          "Things improved, eventually.",
        ],
        exceptions: [
          "Not all linking adverbs can appear in end position naturally.",
        ],
      },
    ],
  },

  // Enhanced punctuation rules
  punctuationRules: {
    beginning:
      "Use a comma after a linking adverb at the beginning of a sentence.",
    midPosition:
      "Set off linking adverbs with commas when they appear in the middle.",
    endPosition:
      "Use a comma before a linking adverb at the end of a sentence.",
    betweenClauses:
      "Use semicolon before and comma after when connecting independent clauses.",
    detailedRules: [
      {
        context: "sentence-initial position",
        rule: "Comma is mandatory after linking adverb",
        examples: [
          "However, the weather improved.",
          "Therefore, we proceeded with the plan.",
          "Nevertheless, she continued working.",
        ],
        commonMistakes: [
          "Forgetting comma: 'However the weather improved.'",
          "Using semicolon: 'However; the weather improved.'",
        ],
      },
      {
        context: "between independent clauses",
        rule: "Semicolon before, comma after linking adverb",
        examples: [
          "The test was difficult; however, everyone passed.",
          "It rained heavily; consequently, the match was postponed.",
        ],
        commonMistakes: [
          "Using only comma: 'The test was difficult, however, everyone passed.'",
          "Missing comma after: 'The test was difficult; however everyone passed.'",
        ],
      },
      {
        context: "mid-sentence interruption",
        rule: "Commas on both sides when interrupting clause",
        examples: [
          "The plan, however, was not approved.",
          "She, therefore, decided to leave.",
        ],
        commonMistakes: [
          "Missing one comma: 'The plan however, was approved.'",
        ],
      },
    ],
  },

  // Extended formality levels
  formalityLevels: {
    formal: [
      "moreover",
      "nevertheless",
      "consequently",
      "thus",
      "hence",
      "accordingly",
      "furthermore",
      "nonetheless",
    ],
    neutral: ["however", "therefore", "then", "still", "also", "meanwhile"],
    informal: ["what's more", "in the meantime", "all in all", "anyway"],
    academic: [
      "furthermore",
      "nevertheless",
      "consequently",
      "accordingly",
      "specifically",
      "particularly",
      "undoubtedly",
    ],
    literary: [
      "moreover",
      "thus",
      "hence",
      "indeed",
      "nevertheless",
      "nonetheless",
    ],
    conversational: ["then", "so", "also", "anyway", "still", "though"],
  },

  // Register usage patterns
  registerUsage: {
    academic: {
      preferred_adverbs: [
        "furthermore",
        "moreover",
        "consequently",
        "specifically",
        "accordingly",
      ],
      usage_patterns: [
        "Use at paragraph beginnings to show logical progression",
        "Employ in argument development to show relationships",
        "Utilize for precise clarification of complex ideas",
      ],
      examples: [
        "Furthermore, the data suggests a strong correlation.",
        "Consequently, the hypothesis must be revised.",
        "Specifically, the results indicate three main trends.",
      ],
    },
    business: {
      preferred_adverbs: [
        "therefore",
        "however",
        "accordingly",
        "meanwhile",
        "consequently",
      ],
      usage_patterns: [
        "Use for clear cause-effect relationships",
        "Employ to present contrasting viewpoints professionally",
        "Utilize for timeline organization in reports",
      ],
      examples: [
        "Therefore, we recommend immediate action.",
        "However, budget constraints must be considered.",
        "Meanwhile, market conditions continue to improve.",
      ],
    },
    casual: {
      preferred_adverbs: ["then", "so", "also", "though", "anyway"],
      usage_patterns: [
        "Use shorter, simpler linking adverbs",
        "Employ in spoken English for natural flow",
        "Utilize end-position for emphasis",
      ],
      examples: [
        "I was tired, so I went home.",
        "The movie was good, though.",
        "We should go, then.",
      ],
    },
    literary: {
      preferred_adverbs: [
        "thus",
        "hence",
        "indeed",
        "moreover",
        "nevertheless",
      ],
      usage_patterns: [
        "Use for dramatic effect and rhythm",
        "Employ for sophisticated logical connections",
        "Utilize for elegant prose flow",
      ],
      examples: [
        "Thus ended the greatest adventure of his life.",
        "Indeed, the consequences were far-reaching.",
        "Moreover, the implications were profound.",
      ],
    },
  },

  // Enhanced common mistakes
  commonMistakes: [
    {
      error: "However he was tired, he continued working.",
      correction: "However, he was tired, he continued working.",
      note: "Missing comma and incorrect use as a conjunction instead of a linking adverb.",
      level: "A2",
      frequency: "very_common",
    },
    {
      error: "She worked hard. Therefore she succeeded.",
      correction: "She worked hard. Therefore, she succeeded.",
      note: "Comma needed after 'therefore'.",
      level: "A2",
      frequency: "very_common",
    },
    {
      error: "The plan failed, moreover, it was expensive.",
      correction: "The plan failed; moreover, it was expensive.",
      note: "Semicolon needed before linking adverb when connecting independent clauses.",
      level: "B1",
      frequency: "common",
    },
    {
      error: "He was late. Consequently the meeting started without him.",
      correction: "He was late. Consequently, the meeting started without him.",
      note: "Comma required after linking adverb at sentence beginning.",
      level: "B1",
      frequency: "common",
    },
    {
      error: "The weather was bad, nevertheless we enjoyed the trip.",
      correction: "The weather was bad; nevertheless, we enjoyed the trip.",
      note: "Semicolon before and comma after when connecting clauses.",
      level: "B2",
      frequency: "occasional",
    },
  ],

  // Comprehensive advanced usage
  advancedUsage: {
    linkingTwoIndependentClauses:
      "Use a semicolon before and a comma after the linking adverb when connecting two independent clauses.",
    example: "She was late; however, she still got the job.",
    linkingParagraphs: {
      description:
        "Linking adverbs can connect ideas between paragraphs for better coherence.",
      examples: [
        "Furthermore, the next chapter will explore...",
        "In contrast, the following section demonstrates...",
        "Consequently, we must now examine...",
      ],
    },
    emphatic_positioning: {
      description:
        "Position affects emphasis - sentence-initial is most emphatic, end-position adds afterthought effect.",
      examples: [
        "Clearly, this approach won't work. (strong emphasis)",
        "This approach, clearly, won't work. (moderate emphasis)",
        "This approach won't work, clearly. (afterthought)",
      ],
    },
    discourse_markers: {
      description:
        "Linking adverbs function as discourse markers to organize and structure extended speech or writing.",
      examples: [
        "First, we'll examine the causes. Then, we'll look at effects. Finally, we'll propose solutions.",
        "On one hand, there are benefits. On the other hand, there are risks. Nevertheless, the potential is enormous.",
      ],
    },
  },

  tips: [
    "Do not use linking adverbs as subordinating conjunctions (e.g., 'although', 'because').",
    "Always use punctuation correctly to avoid run-on sentences.",
    "Choose linking adverbs based on the logical relationship between ideas.",
    "Start with basic A1-A2 level adverbs before progressing to advanced ones.",
    "Pay attention to register - formal vs. informal contexts require different choices.",
    "Practice positioning for different emphatic effects.",
    "Use linking adverbs to signal argument structure in academic writing.",
    "Remember that some linking adverbs are more frequent in written than spoken English.",
  ],

  // Comprehensive references with proper structure
  references: [
    {
      title: "Cambridge Grammar in Use",
      author: "Raymond Murphy",
      publisher: "Cambridge University Press",
      year: 2019,
      type: "book",
      isbn: "978-1108457682",
      description:
        "Comprehensive grammar reference covering linking adverbs in intermediate to advanced contexts with practical exercises.",
    },
    {
      title: "Oxford Advanced Learner's Dictionary",
      publisher: "Oxford University Press",
      year: 2020,
      type: "dictionary",
      url: "https://www.oxfordlearnersdictionaries.com/",
      description:
        "Detailed definitions and usage examples of linking adverbs with pronunciation guides and collocations.",
    },
    {
      title: "Collins COBUILD English Grammar",
      author: "John Sinclair",
      publisher: "Collins",
      year: 2017,
      type: "book",
      isbn: "978-0008135997",
      description:
        "Corpus-based grammar covering real usage patterns of linking adverbs in contemporary English.",
    },
    {
      title: "The Longman Grammar of Spoken and Written English",
      author: "Douglas Biber",
      publisher: "Longman",
      year: 1999,
      type: "academic_paper",
      isbn: "978-0582237254",
      description:
        "Authoritative research on linking adverbs usage patterns in different registers and contexts.",
    },
    {
      title: "Grammarly Blog: Conjunctive Adverbs",
      type: "website",
      url: "https://www.grammarly.com/blog/conjunctive-adverbs/",
      description:
        "Practical guide to using linking adverbs correctly with common mistakes and examples.",
    },
    {
      title: "British Council LearnEnglish",
      type: "website",
      url: "https://learnenglish.britishcouncil.org/grammar/intermediate-to-upper-intermediate/linking-words",
      description:
        "Interactive lessons and exercises on linking adverbs for different proficiency levels.",
    },
    {
      title: "Merriam-Webster Guide to Grammar and Style",
      publisher: "Merriam-Webster",
      year: 2018,
      type: "book",
      description:
        "Style guide covering proper punctuation and usage of linking adverbs in formal writing.",
    },
  ],

  // Enhanced examples by category
  advancedExamples: {
    addition: [
      "Furthermore, recent studies have confirmed the hypothesis beyond doubt.",
      "Besides, the proposed method reduces computational cost significantly.",
      "Moreover, the implications extend far beyond the immediate context.",
      "Additionally, three supplementary factors must be considered.",
    ],
    contrast: [
      "Nevertheless, despite the heavy rain, the event continued as scheduled.",
      "Conversely, some experts argue that the policy might backfire in the long term.",
      "On the contrary, the evidence suggests an opposite conclusion.",
      "Alternatively, we could pursue a completely different approach.",
    ],
    result: [
      "Hence, we conclude that the new drug is effective against the disease.",
      "Accordingly, the board decided to increase the budget for research.",
      "Consequently, all previous assumptions must be reconsidered.",
      "As a result, the entire project timeline requires revision.",
    ],
    timeSequence: [
      "Subsequently, the data was analyzed using advanced statistical software.",
      "In the meantime, the team prepared the presentation for the conference.",
      "Eventually, all the pieces of the puzzle fell into place.",
      "Simultaneously, multiple processes were running in the background.",
    ],
    emphasis: [
      "Indeed, the breakthrough exceeded all expectations.",
      "Undoubtedly, this represents a major paradigm shift.",
      "Clearly, immediate action is required to address the crisis.",
      "Obviously, the current approach is no longer sustainable.",
    ],
    summary: [
      "In conclusion, the evidence overwhelmingly supports the hypothesis.",
      "To sum up, three key factors contribute to the success.",
      "Overall, the project achieved its primary objectives.",
      "Ultimately, the decision rests with the stakeholders.",
    ],
    clarification: [
      "In other words, the system operates on entirely different principles.",
      "That is to say, the methodology requires fundamental revision.",
      "More specifically, the error occurs in the third phase of processing.",
      "Put simply, the concept challenges conventional wisdom.",
    ],
    comparison: [
      "Similarly, other studies have reached comparable conclusions.",
      "Likewise, the second experiment yielded consistent results.",
      "In the same way, the pattern emerges across multiple datasets.",
      "Correspondingly, the theoretical framework must be adjusted.",
    ],
  },

  // Enhanced usage notes
  usageNotes: {
    formalVsInformal:
      "Trong văn viết học thuật và báo chí, linking adverbs thường dùng để đảm bảo tính logic và mạch lạc giữa các ý. Trong văn nói, đôi khi linking adverbs được lược bỏ hoặc thay thế bằng các cụm từ ngắn gọn hơn như 'but', 'so', 'then'.",
    punctuation:
      "Một số trạng từ liên kết khi dùng mid-position hoặc end-position cần dấu phẩy để phân tách rõ ràng, tránh nhầm lẫn giữa câu ghép và câu phức. Việc sử dụng dấu chấm phẩy trước linking adverb là bắt buộc khi nối hai mệnh đề độc lập.",
    nuance:
      "Một số linking adverbs như 'however' có thể mang sắc thái tương phản nhẹ hoặc mạnh tùy ngữ cảnh, cần chú ý ngữ điệu và ngữ cảnh khi sử dụng. 'Nevertheless' và 'nonetheless' thể hiện sự tương phản mạnh hơn 'however'.",
    culturalContext:
      "Trong văn hóa Anglo-Saxon, việc sử dụng linking adverbs thể hiện sự lịch sự và tôn trọng người nghe/đọc bằng cách tạo logic rõ ràng. Việc thiếu linking adverbs có thể khiến văn bản có vẻ đột ngột hoặc thiếu mạch lạc.",
    regionalVariations:
      "British English có xu hướng sử dụng linking adverbs trang trọng hơn American English. 'Whilst' phổ biến trong British English nhưng ít dùng trong American English. 'Therefore' được ưa chuộng hơn 'thus' trong English hiện đại.",
  },

  // Expanded common mistakes with solutions
  commonMistakesExpanded: [
    {
      error: "We wanted to come; however we had no time.",
      correction: "We wanted to come; however, we had no time.",
      note: "Thiếu dấu phẩy sau 'however' khi nối hai mệnh đề độc lập.",
      vietnamese_explanation:
        "Khi sử dụng linking adverb để nối hai mệnh đề độc lập, cần có dấu chấm phẩy trước và dấu phẩy sau linking adverb.",
      prevention_tip:
        "Nhớ công thức: mệnh đề 1 + ; + linking adverb + , + mệnh đề 2",
    },
    {
      error: "Moreover he did not apologize.",
      correction: "Moreover, he did not apologize.",
      note: "Cần dấu phẩy sau 'Moreover' khi nó đứng đầu câu.",
      vietnamese_explanation:
        "Tất cả linking adverbs đứng đầu câu đều cần dấu phẩy theo sau để tách biệt với mệnh đề chính.",
      prevention_tip: "Luôn kiểm tra dấu phẩy sau linking adverb ở đầu câu.",
    },
    {
      error: "The results were surprising, therefore, we need more research.",
      correction:
        "The results were surprising; therefore, we need more research.",
      note: "Sử dụng dấu chấm phẩy thay vì dấu phẩy trước 'therefore' khi nối hai mệnh đề độc lập.",
      vietnamese_explanation:
        "Linking adverbs không thể được đặt sau dấu phẩy đơn thuần khi nối hai mệnh đề độc lập. Phải dùng dấu chấm phẩy hoặc dấu chấm câu.",
      prevention_tip:
        "Kiểm tra xem hai bên linking adverb có phải là mệnh đề độc lập không. Nếu có, dùng dấu chấm phẩy.",
    },
    {
      error: "He studied hard therefore he passed the exam.",
      correction: "He studied hard; therefore, he passed the exam.",
      note: "Thiếu dấu chấm phẩy trước và dấu phẩy sau 'therefore'.",
      vietnamese_explanation:
        "Khi linking adverb nối hai mệnh đề trong cùng một câu, cần có dấu chấm phẩy trước và dấu phẩy sau.",
      prevention_tip:
        "Đọc to câu để nhận biết hai mệnh đề độc lập và thêm dấu chấm phẩy + phẩy.",
    },
    {
      error: "Nevertheless; the project was successful.",
      correction: "Nevertheless, the project was successful.",
      note: "Sử dụng dấu phẩy thay vì dấu chấm phẩy sau linking adverb ở đầu câu.",
      vietnamese_explanation:
        "Khi linking adverb đứng đầu câu (không nối mệnh đề), chỉ cần dấu phẩy theo sau.",
      prevention_tip:
        "Phân biệt linking adverb đầu câu mới vs nối mệnh đề trong cùng câu.",
    },
  ],

  // Related grammar concepts
  relatedGrammar: {
    conjunctiveAdverbsVsCoordinatingConjunctions:
      "Linking adverbs (conjunctive adverbs) nối hai câu độc lập và thường đi kèm dấu chấm phẩy hoặc dấu chấm câu. Coordinating conjunctions (and, but, or) nối các thành phần trong câu mà không cần dấu chấm phẩy. Linking adverbs mang tính trang trọng và rõ ràng hơn.",
    transitionalPhrases:
      "Ngoài linking adverbs đơn lẻ, còn có các cụm chuyển tiếp (transitional phrases) như 'as a matter of fact', 'on the contrary', 'in addition to that' cũng có chức năng tương tự nhưng thường dài hơn và trang trọng hơn.",
    coherenceAndCohesion:
      "Linking adverbs là công cụ quan trọng tạo coherence (tính mạch lạc) và cohesion (tính gắn kết) trong văn bản. Chúng giúp người đọc theo dõi luồng tư duy và hiểu mối quan hệ giữa các ý tưởng.",
    discourseMarkers:
      "Linking adverbs hoạt động như discourse markers, giúp tổ chức và cấu trúc diễn ngôn. Chúng báo hiệu cho người nghe/đọc về hướng phát triển của cuộc thảo luận hoặc lập luận.",
    textualMetafunctions:
      "Trong systemic functional linguistics, linking adverbs thực hiện textual metafunction, tạo texture cho văn bản và liên kết các phần của discourse thành một whole có ý nghĩa.",
  },

  // Enhanced collocations
  collocations: {
    frequentPhrases: [
      "linking adverbs + comma",
      "use linking adverbs at the beginning of a sentence",
      "linking adverbs showing contrast",
      "linking adverbs in formal writing",
      "appropriate linking adverb",
      "transitional linking adverbs",
    ],
    academicCollocations: [
      "furthermore demonstrate",
      "consequently suggest",
      "however indicate",
      "nevertheless reveal",
      "therefore conclude",
      "specifically examine",
    ],
    businessCollocations: [
      "accordingly recommend",
      "therefore propose",
      "however consider",
      "meanwhile monitor",
      "consequently implement",
      "specifically target",
    ],
    literaryCollocations: [
      "thus began",
      "indeed proved",
      "moreover revealed",
      "nevertheless persisted",
      "hence concluded",
      "subsequently discovered",
    ],
  },

  // Comprehensive synonyms and semantic relationships
  synonymsAndAntonyms: {
    however: {
      synonyms: ["nevertheless", "nonetheless", "still", "yet", "even so"],
      antonyms: ["therefore", "consequently", "thus"],
      near_synonyms: ["but", "although", "though"],
      semantic_field: "contrast and concession",
    },
    moreover: {
      synonyms: ["furthermore", "besides", "in addition", "what's more"],
      antonyms: ["however", "nevertheless", "conversely"],
      near_synonyms: ["also", "too", "as well"],
      semantic_field: "addition and continuation",
    },
    therefore: {
      synonyms: ["thus", "consequently", "hence", "accordingly"],
      antonyms: ["however", "nevertheless", "conversely"],
      near_synonyms: ["so", "as a result", "for this reason"],
      semantic_field: "logical consequence and causation",
    },
    meanwhile: {
      synonyms: ["at the same time", "simultaneously", "in the meantime"],
      antonyms: ["subsequently", "afterwards", "then"],
      near_synonyms: ["while", "during this time"],
      semantic_field: "temporal relationship and simultaneity",
    },
    consequently: {
      synonyms: ["therefore", "thus", "as a result", "accordingly"],
      antonyms: ["nevertheless", "however", "despite this"],
      near_synonyms: ["so", "hence", "for this reason"],
      semantic_field: "causation and logical result",
    },
  },

  // Enhanced style tips
  styleTips: {
    academicWriting:
      "Trong bài luận học thuật, linking adverbs giúp làm rõ lập luận, chuyển mạch logic giữa các luận điểm một cách mạch lạc và trang trọng. Sử dụng 'furthermore' để bổ sung bằng chứng, 'however' để thể hiện quan điểm đối lập, 'consequently' để kết luận logic.",
    spokenEnglish:
      "Trong giao tiếp thông thường, linking adverbs có thể được rút gọn hoặc dùng từ ngữ đơn giản hơn như 'but', 'so', 'then'. Tránh overuse formal linking adverbs trong conversation để không có vẻ cứng nhắc.",
    creativeWriting:
      "Trong văn sáng tác, linking adverbs tạo rhythm và flow cho narrative. 'Thus' và 'hence' mang tính dramatic, 'meanwhile' tạo suspense, 'nevertheless' thể hiện character determination.",
    businessCommunication:
      "Trong communication kinh doanh, sử dụng linking adverbs để thể hiện professional logic và clarity. 'Therefore' cho recommendations, 'however' cho concerns, 'accordingly' cho actions.",
    examWriting:
      "Trong bài thi viết, linking adverbs thể hiện language sophistication và logical thinking. Đa dạng hóa linking adverbs thay vì lặp lại 'and', 'but'. Chú ý punctuation để tránh mất điểm.",
  },

  // Cross-linguistic analysis
  crossLinguisticAnalysis: {
    vietnamese_equivalents: {
      however: "tuy nhiên, nhưng",
      therefore: "do đó, vì vậy",
      moreover: "hơn nữa, thêm vào đó",
      meanwhile: "trong khi đó",
      consequently: "do đó, hậu quả là",
      nevertheless: "tuy nhiên, dù sao đi nữa",
      furthermore: "hơn nữa, thêm nữa",
      specifically: "cụ thể, riêng biệt",
    },
    translation_challenges: [
      "Vietnamese often uses different sentence structures that don't require linking adverbs",
      "Some English linking adverbs have multiple Vietnamese equivalents depending on context",
      "Vietnamese speakers may overuse 'và' (and) instead of more specific linking adverbs",
      "Punctuation rules differ significantly between Vietnamese and English",
    ],
    false_friends: [
      {
        english: "actually",
        vietnamese_mistake: "thực tế là",
        correct_vietnamese: "thật ra, trên thực tế",
        explanation:
          "'Actually' often contradicts expectations, not just states facts",
      },
      {
        english: "eventually",
        vietnamese_mistake: "cuối cùng (immediate)",
        correct_vietnamese: "cuối cùng (after a long time)",
        explanation:
          "'Eventually' implies a long process, not immediate conclusion",
      },
    ],
  },

  // Assessment criteria by level
  assessmentCriteria: {
    A1_A2: [
      "Correct use of basic linking adverbs (also, then, so, but)",
      "Proper comma placement after sentence-initial linking adverbs",
      "Understanding of simple addition and sequence relationships",
      "Avoiding run-on sentences with basic punctuation",
    ],
    B1_B2: [
      "Accurate use of formal linking adverbs (however, therefore, furthermore)",
      "Correct semicolon and comma patterns with independent clauses",
      "Appropriate register choice (formal vs informal contexts)",
      "Variety in linking adverb selection to avoid repetition",
      "Understanding of contrast and causation relationships",
    ],
    C1_C2: [
      "Sophisticated use of advanced linking adverbs (nevertheless, consequently, accordingly)",
      "Flexible positioning for emphasis and style",
      "Nuanced understanding of semantic differences between synonyms",
      "Effective use in extended discourse and paragraph linking",
      "Mastery of punctuation in complex sentence structures",
      "Appropriate use in academic and professional contexts",
    ],
  },

  // Pedagogical notes for teachers
  pedagogicalNotes: {
    teaching_sequence: [
      "Start with high-frequency basic linking adverbs (A1: also, then, so)",
      "Introduce punctuation rules with sentence-initial position first",
      "Practice contrast adverbs (A2: but, however) with clear contexts",
      "Teach semicolon usage for clause connection (B1)",
      "Expand to formal academic adverbs (B2: furthermore, nevertheless)",
      "Focus on register appropriateness and sophisticated usage (C1-C2)",
    ],
    common_teaching_mistakes: [
      "Teaching all linking adverbs at once without level progression",
      "Focusing only on meaning without adequate punctuation practice",
      "Not providing enough context for register appropriateness",
      "Neglecting spoken vs written English differences",
      "Insufficient practice with authentic texts and contexts",
    ],
    effective_practice_activities: [
      "Gap-fill exercises with context clues for appropriate linking adverb choice",
      "Punctuation correction activities focusing on linking adverb errors",
      "Register matching exercises (formal academic vs casual conversation)",
      "Paragraph rewriting using different linking adverbs for variety",
      "Discourse analysis of authentic texts to identify linking patterns",
    ],
    assessment_methods: [
      "Discrete point tests for punctuation accuracy",
      "Cloze tests for appropriate linking adverb selection",
      "Writing samples analyzed for linking adverb usage and variety",
      "Oral presentation assessment for natural linking in speech",
      "Error correction tasks focusing on common mistakes",
    ],
  },
};

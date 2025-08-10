import { adverbPositionMeaningChangeType } from "@/types/grammars/grammar/adverbs_special/adverbPositionMeaningChange";

export const adverbPositionMeaningChangeData: adverbPositionMeaningChangeType =
  {
    id: 11,
    A1: {
      description:
        "Ở cấp độ cơ bản, học viên cần hiểu rằng trạng từ như 'only', 'just', 'always' khi thay đổi vị trí sẽ có nghĩa khác nhau. Đây là nền tảng quan trọng để hiểu tiếng Anh chính xác.",
      examples: [
        {
          adverb: "only",
          positions: {
            "trước chủ ngữ": {
              sentence: "Only John passed the exam.",
              meaning:
                "Chỉ có John là người duy nhất đỗ kỳ thi (không ai khác đỗ).",
            },
            "trước động từ": {
              sentence: "John only passed the exam.",
              meaning:
                "John chỉ đỗ kỳ thi thôi (không làm gì khác với kỳ thi).",
            },
            "trước tân ngữ": {
              sentence: "John passed only the exam.",
              meaning:
                "John chỉ đỗ cái kỳ thi này thôi (không đỗ kỳ thi nào khác).",
            },
          },
          notes:
            "Vị trí của 'only' quyết định phạm vi giới hạn: chủ ngữ, động từ, hay tân ngữ. Đây là trạng từ focus particle quan trọng nhất.",
        },
        {
          adverb: "just",
          positions: {
            "đầu câu": {
              sentence: "Just do it!",
              meaning: "Chỉ cần làm thôi! (nhấn mạnh sự đơn giản)",
            },
            "trước động từ": {
              sentence: "I just saw him.",
              meaning: "Tôi vừa mới nhìn thấy anh ấy (thời gian gần đây).",
            },
            "trước tính từ": {
              sentence: "It's just perfect.",
              meaning: "Nó hoàn hảo quá (nhấn mạnh mức độ).",
            },
          },
          notes:
            "'Just' có ba nghĩa chính: thời gian (recently), giới hạn (only), và nhấn mạnh (exactly).",
        },
        {
          adverb: "always",
          positions: {
            "trước động từ chính": {
              sentence: "She always comes early.",
              meaning: "Cô ấy luôn đến sớm (thói quen thường xuyên).",
            },
            "sau động từ 'to be'": {
              sentence: "She is always early.",
              meaning: "Cô ấy luôn trong trạng thái sớm (đặc điểm).",
            },
            "cuối câu": {
              sentence: "She comes early, always.",
              meaning: "Cô ấy đến sớm, luôn vậy (nhấn mạnh chắc chắn).",
            },
          },
          notes:
            "Vị trí 'always' ảnh hưởng đến việc miêu tả thói quen (habit) hay đặc điểm (characteristic).",
        },
      ],
    },
    A2: {
      description:
        "Trạng từ vị trí giữa câu bắt đầu ảnh hưởng rõ hơn đến nghĩa và nhấn mạnh. Học viên cần nắm được các trạng từ tần suất và cách chúng thay đổi nghĩa theo vị trí.",
      examples: [
        {
          adverb: "sometimes",
          positions: {
            "đầu câu": {
              sentence: "Sometimes I go to the park.",
              meaning: "Đôi khi tôi đi công viên (giới thiệu chủ đề).",
            },
            "giữa câu": {
              sentence: "I sometimes go to the park.",
              meaning: "Tôi đôi khi đi công viên (tần suất trung tính).",
            },
            "cuối câu": {
              sentence: "I go to the park sometimes.",
              meaning: "Tôi đi công viên, đôi khi (thông tin phụ).",
            },
          },
          notes:
            "Trạng từ tần suất thay đổi mức độ nhấn mạnh theo vị trí trong câu.",
        },
        {
          adverb: "usually",
          positions: {
            "trước động từ": {
              sentence: "I usually drink coffee.",
              meaning: "Tôi thường uống cà phê (thói quen chung).",
            },
            "sau to be": {
              sentence: "I am usually tired after work.",
              meaning: "Tôi thường mệt sau giờ làm (trạng thái thường xuyên).",
            },
          },
          notes:
            "Vị trí với 'to be' và động từ thường tạo sắc thái khác nhau về trạng thái và hành động.",
        },
        {
          adverb: "never",
          positions: {
            "trước động từ chính": {
              sentence: "He never arrives late.",
              meaning: "Anh ấy không bao giờ đến muộn (phủ định hoàn toàn).",
            },
            "sau động từ to be": {
              sentence: "He is never late.",
              meaning: "Anh ấy không bao giờ muộn (đặc điểm).",
            },
          },
          notes:
            "'Never' có nghĩa phủ định mạnh và vị trí ảnh hưởng đến nhấn mạnh.",
        },
      ],
    },
    B1: {
      description:
        "Trạng từ trong các vị trí khác nhau bắt đầu thay đổi sắc thái ý nghĩa và nhấn mạnh. Học viên cần hiểu được đảo ngữ và các cấu trúc phức tạp hơn.",
      examples: [
        {
          adverb: "hardly",
          positions: {
            "đầu câu với đảo ngữ": {
              sentence: "Hardly had I arrived when it started raining.",
              meaning:
                "Ngay khi tôi vừa đến thì trời bắt đầu mưa (đảo ngữ nhấn mạnh).",
            },
            "giữa câu": {
              sentence: "I could hardly hear him.",
              meaning: "Tôi gần như không nghe thấy anh ấy (nghĩa phủ định).",
            },
            "với động từ khuyết thiếu": {
              sentence: "I can hardly believe it.",
              meaning: "Tôi gần như không thể tin được (mức độ thấp).",
            },
          },
          notes:
            "'Hardly' có nghĩa phủ định mạnh. Khi đứng đầu câu, cần đảo ngữ và có nghĩa 'vừa mới...thì'.",
        },
        {
          adverb: "only",
          positions: {
            "đầu câu với đảo ngữ": {
              sentence: "Only then did I understand.",
              meaning: "Chỉ đến lúc đó tôi mới hiểu (nhấn mạnh thời điểm).",
            },
            "giữa câu": {
              sentence: "I only understood then.",
              meaning: "Tôi chỉ hiểu lúc đó (giới hạn hành động).",
            },
            "với if": {
              sentence: "Only if you try hard will you succeed.",
              meaning:
                "Chỉ khi bạn cố gắng thì bạn mới thành công (điều kiện duy nhất).",
            },
          },
          notes:
            "'Only' đầu câu tạo đảo ngữ và nhấn mạnh điều kiện hoặc thời gian duy nhất.",
        },
        {
          adverb: "already",
          positions: {
            "giữa auxiliary và main verb": {
              sentence: "I have already finished.",
              meaning: "Tôi đã hoàn thành rồi (trước thời điểm mong đợi).",
            },
            "cuối câu": {
              sentence: "I have finished already.",
              meaning: "Tôi đã hoàn thành rồi (nhấn mạnh sự bất ngờ).",
            },
          },
          notes:
            "Vị trí 'already' ảnh hưởng đến mức độ nhấn mạnh và sự bất ngờ.",
        },
      ],
    },
    B2: {
      description:
        "Trạng từ ở vị trí khác nhau có thể thay đổi nghĩa câu hoặc tạo ra các sắc thái khác nhau về mặt logic và ngữ pragmatics.",
      examples: [
        {
          adverb: "even",
          positions: {
            "trước chủ ngữ": {
              sentence: "Even John failed the test.",
              meaning:
                "Ngay cả John cũng trượt bài kiểm tra (bất ngờ về chủ ngữ).",
            },
            "trước động từ": {
              sentence: "John even failed the test.",
              meaning:
                "John đã làm điều bất ngờ là trượt (bất ngờ về hành động).",
            },
            "trước tân ngữ": {
              sentence: "John failed even the easiest test.",
              meaning:
                "John trượt cả bài kiểm tra dễ nhất (bất ngờ về đối tượng).",
            },
          },
          notes:
            "'Even' là additive focus particle, vị trí quyết định phạm vi bất ngờ.",
        },
        {
          adverb: "still",
          positions: {
            "đầu câu": {
              sentence: "Still, I believe he is honest.",
              meaning:
                "Tuy nhiên, tôi vẫn tin anh ấy thật thà (liên kết lập luận).",
            },
            "giữa câu": {
              sentence: "I still believe he is honest.",
              meaning: "Tôi vẫn tin anh ấy thật thà (tiếp tục trạng thái).",
            },
            "cuối câu": {
              sentence: "I believe he is honest still.",
              meaning: "Tôi tin anh ấy vẫn thật thà (nhấn mạnh tính liên tục).",
            },
          },
          notes:
            "Vị trí 'still' tạo sắc thái khác nhau: discourse marker vs temporal continuity.",
        },
        {
          adverb: "rather",
          positions: {
            "trước tính từ": {
              sentence: "It's rather difficult.",
              meaning: "Nó khá khó khăn (mức độ vừa phải).",
            },
            "đầu câu": {
              sentence: "Rather, I think we should wait.",
              meaning: "Thay vào đó, tôi nghĩ chúng ta nên đợi (sự sửa chữa).",
            },
          },
          notes:
            "'Rather' có thể là degree adverb hoặc discourse marker tùy vị trí.",
        },
      ],
    },
    C1: {
      description:
        "Ở cấp độ nâng cao, trạng từ thay đổi vị trí còn ảnh hưởng đến sắc thái ngữ nghĩa, độ trang trọng, và hiệu quả diễn đạt. Cần hiểu scope ambiguity và pragmatic effects.",
      examples: [
        {
          adverb: "apparently",
          positions: {
            "đầu câu": {
              sentence: "Apparently, he left early.",
              meaning:
                "Có vẻ như anh ấy đã về sớm (evidential marker - thông tin gián tiếp).",
            },
            "cuối câu": {
              sentence: "He left early, apparently.",
              meaning:
                "Anh ấy về sớm, có vẻ vậy (afterthought - bình luận sau).",
            },
          },
          notes:
            "Vị trí của evidential adverbs ảnh hưởng đến information structure và độ tin cậy.",
        },
        {
          adverb: "clearly",
          positions: {
            "đầu câu": {
              sentence: "Clearly, this approach won't work.",
              meaning:
                "Rõ ràng là cách tiếp cận này sẽ không hiệu quả (stance adverbial).",
            },
            "giữa câu": {
              sentence: "He clearly explained the problem.",
              meaning:
                "Anh ấy giải thích vấn đề một cách rõ ràng (manner adverbial).",
            },
          },
          notes:
            "Scope khác nhau tạo ra meaning: evaluative vs manner modification.",
        },
        {
          adverb: "fortunately",
          positions: {
            "đầu câu": {
              sentence: "Fortunately, no one was hurt.",
              meaning: "May mắn là không ai bị thương (speaker's evaluation).",
            },
            "cuối câu": {
              sentence: "No one was hurt, fortunately.",
              meaning:
                "Không ai bị thương, thật may mắn (afterthought comment).",
            },
          },
          notes: "Evaluative adverbs thay đổi discourse function theo vị trí.",
        },
      ],
    },
    C2: {
      description:
        "Trạng từ thay đổi vị trí để tạo các sắc thái ngữ nghĩa tinh tế, thậm chí có thể thay đổi chủ đề trọng tâm hoặc hàm ý trong câu. Cần nắm được fine-grained semantic distinctions.",
      examples: [
        {
          adverb: "precisely",
          positions: {
            "trước động từ": {
              sentence: "That's precisely what I mean.",
              meaning: "Đó chính xác là điều tôi muốn nói (exactness focus).",
            },
            "đầu câu": {
              sentence: "Precisely because of this, we must act.",
              meaning:
                "Chính vì lý do này, chúng ta phải hành động (causal precision).",
            },
            "sau tân ngữ": {
              sentence: "He said that precisely.",
              meaning: "Anh ấy nói chính xác như vậy (manner precision).",
            },
          },
          notes:
            "Precision adverbs có multiple semantic roles tùy theo syntactic position.",
        },
        {
          adverb: "obviously",
          positions: {
            "đầu câu": {
              sentence: "Obviously, he was lying.",
              meaning:
                "Rõ ràng là anh ấy đang nói dối (strong assertion of evidence).",
            },
            "giữa câu": {
              sentence: "He was obviously lying.",
              meaning: "Anh ấy rõ ràng đang nói dối (evidential modification).",
            },
            "sau động từ": {
              sentence: "He lied obviously.",
              meaning: "Anh ấy nói dối một cách rõ ràng (manner of lying).",
            },
          },
          notes: "Epistemic stance varies với syntactic integration level.",
        },
        {
          adverb: "literally",
          positions: {
            "trước động từ": {
              sentence: "I literally ran all the way.",
              meaning: "Tôi thực sự chạy suốt quãng đường (emphasis on truth).",
            },
            "trước tính từ": {
              sentence: "It's literally impossible.",
              meaning: "Điều đó thực sự không thể (intensifier).",
            },
            "đầu câu": {
              sentence: "Literally, the text says this.",
              meaning:
                "Theo đúng nghĩa đen, văn bản nói như vậy (interpretive frame).",
            },
          },
          notes:
            "Semantic bleaching và pragmaticalization của 'literally' qua vị trí khác nhau.",
        },
      ],
    },
    adverbPositionMeaningChange_vocab: {
      definition:
        "Adverb position-meaning change refers to the systematic variation in semantic interpretation and pragmatic function that occurs when adverbs are placed in different syntactic positions within a sentence. This phenomenon involves scope ambiguity, focus assignment, and information structure effects.",

      academicReferences: [
        {
          title: "A Comprehensive Grammar of the English Language",
          author:
            "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
          publisher: "Longman",
          year: 1985,
          isbn: "978-0582517349",
          description:
            "Comprehensive analysis of adverb positioning and semantic scope in English grammar, particularly Chapter 8 on adverbials and their syntactic-semantic interface.",
        },
        {
          title: "The Cambridge Grammar of the English Language",
          author: "Rodney Huddleston, Geoffrey K. Pullum",
          publisher: "Cambridge University Press",
          year: 2002,
          isbn: "978-0521431460",
          description:
            "Detailed examination of adverb placement rules and meaning variations, focusing on scope phenomena and focus particles in modern English syntax.",
        },
        {
          title: "Practical English Usage",
          author: "Michael Swan",
          publisher: "Oxford University Press",
          year: 2016,
          isbn: "978-0194202411",
          description:
            "Practical guide to adverb positioning with clear explanations of meaning changes, common errors, and usage patterns for language learners.",
        },
        {
          title: "The Syntax of English Adverbials",
          author: "Thomas Ernst",
          publisher: "Cambridge University Press",
          year: 2002,
          isbn: "978-0521774062",
          description:
            "Comprehensive syntactic analysis of adverbial placement and interpretation in English, covering scope, selection, and semantic composition.",
        },
        {
          title: "Focus and Natural Language Processing",
          author: "Eva Hajičová, Barbara H. Partee, Petr Sgall",
          publisher: "Springer",
          year: 1998,
          isbn: "978-0792351078",
          url: "https://link.springer.com/book/10.1007/978-94-017-1272-9",
          description:
            "Advanced linguistic analysis of focus particles and scope phenomena in natural language processing and theoretical linguistics.",
        },
        {
          title: "English Sentence Adverbials",
          author: "Susan Greenbaum",
          publisher: "Mouton",
          year: 1969,
          isbn: "978-9027931634",
          description:
            "Foundational study of adverbial functions and positional variations in English syntax, establishing key theoretical frameworks.",
        },
      ],

      categories: {
        always: {
          positions: {
            before_verb: {
              meaning: "Thường xuyên, đều đặn (mang tính thói quen)",
              example: "She always arrives early. (Cô ấy luôn đến sớm)",
              frequency: "common",
              formality: "neutral",
            },
            sentence_initial: {
              meaning: "Nhấn mạnh thói quen, hoặc sự thật hiển nhiên",
              example: "Always, she arrives early. (Luôn luôn, cô ấy đến sớm)",
              frequency: "uncommon",
              formality: "formal",
            },
            sentence_final: {
              meaning: "Cảm thán hoặc nhấn mạnh sự chắc chắn",
              example: "She arrives early, always! (Cô ấy đến sớm, luôn vậy!)",
              frequency: "rare",
              formality: "informal",
            },
          },
          semanticField: "frequency and habit",
          pragmaticFunction: "temporal quantification and emphasis",
        },
        just: {
          positions: {
            before_verb: {
              meaning: "Vừa mới làm gì đó (gần đây)",
              example: "I just saw him. (Tôi vừa mới gặp anh ấy)",
              frequency: "common",
              formality: "neutral",
            },
            sentence_final: {
              meaning: "Chỉ, đơn giản là (nhấn mạnh sự giới hạn)",
              example: "That's the point, just! (Đó chính là điểm đó thôi!)",
              frequency: "uncommon",
              formality: "informal",
            },
          },
          semanticField: "temporal proximity and limitation",
          pragmaticFunction: "recent past marking and restrictor",
        },
        only: {
          positions: {
            before_subject: {
              meaning: "Chỉ có (nhấn mạnh giới hạn chủ ngữ)",
              example: "Only John knows the truth. (Chỉ John biết sự thật)",
              frequency: "common",
              formality: "neutral",
            },
            before_verb: {
              meaning: "Chỉ làm một việc cụ thể",
              example: "John only knows the truth. (John chỉ biết sự thật)",
              frequency: "common",
              formality: "neutral",
            },
            sentence_final: {
              meaning: "Chỉ là, giới hạn ở đó thôi",
              example: "He can come, only. (Anh ấy chỉ có thể đến vậy thôi)",
              frequency: "rare",
              formality: "formal",
            },
          },
          semanticField: "exclusivity and limitation",
          pragmaticFunction: "focus particle and scope restriction",
        },
        even: {
          positions: {
            before_subject: {
              meaning: "Ngay cả, thể hiện sự bất ngờ hoặc nhấn mạnh",
              example:
                "Even John knows the truth. (Ngay cả John cũng biết sự thật)",
              frequency: "common",
              formality: "neutral",
            },
            before_verb: {
              meaning: "Ngay cả trong hành động",
              example:
                "John even knows the truth. (John thậm chí biết sự thật)",
              frequency: "common",
              formality: "neutral",
            },
            sentence_final: {
              meaning: "Nhấn mạnh, thêm vào cuối câu",
              example: "He can come, even. (Anh ấy có thể đến, thậm chí)",
              frequency: "rare",
              formality: "informal",
            },
          },
          semanticField: "scalarity and unexpectedness",
          pragmaticFunction: "additive focus particle",
        },
        quite: {
          positions: {
            before_adjective: {
              meaning: "Khá, tương đối (độ vừa phải)",
              example: "She is quite happy. (Cô ấy khá vui)",
              frequency: "common",
              formality: "neutral",
            },
            sentence_final: {
              meaning: "Hoàn toàn, chắc chắn (nhấn mạnh)",
              example: "She is happy, quite! (Cô ấy rất vui, chắc chắn vậy!)",
              frequency: "rare",
              formality: "formal",
            },
          },
          semanticField: "degree and certainty",
          pragmaticFunction: "degree modification and confirmation",
        },
      },

      CEFR_levels: {
        A1: ["only", "just", "always", "never", "sometimes"],
        A2: ["usually", "often", "hardly", "almost", "quite"],
        B1: ["already", "yet", "still", "even", "rather"],
        B2: ["apparently", "obviously", "certainly", "definitely", "probably"],
        C1: ["precisely", "exactly", "literally", "virtually", "essentially"],
        C2: [
          "presumably",
          "arguably",
          "undoubtedly",
          "conceivably",
          "invariably",
        ],
      },

      common_patterns: [
        {
          adverb: "only",
          positions: [
            "before subject",
            "before verb",
            "before object",
            "sentence final",
          ],
          meaning_changes: [
            "Giới hạn chủ ngữ",
            "Giới hạn hành động",
            "Giới hạn đối tượng",
            "Giới hạn toàn câu",
          ],
          syntacticRules: [
            "Focus particle requires stress on focused element",
            "Scope extends rightward from position",
            "Can trigger inversion when sentence-initial",
          ],
          examples: [
            "Only MARY came to the party.",
            "Mary only CAME to the party.",
            "Mary came only to the PARTY.",
            "Mary came to the party, only.",
          ],
        },
        {
          adverb: "even",
          positions: ["before subject", "before verb", "before object"],
          meaning_changes: [
            "Scalar surprise about agent",
            "Scalar surprise about action",
            "Scalar surprise about patient",
          ],
          syntacticRules: [
            "Associates with focused constituent",
            "Triggers scalar implicature",
            "Presupposes scale of likelihood",
          ],
          examples: [
            "Even JOHN failed the test.",
            "John even FAILED the test.",
            "John failed even the EASY test.",
          ],
        },
        {
          adverb: "just",
          positions: ["before verb", "before object", "sentence final"],
          meaning_changes: [
            "Recent completion",
            "Restrictive focus",
            "Minimizing emphasis",
          ],
          syntacticRules: [
            "Temporal reading with perfect aspect",
            "Focus reading with stress assignment",
            "Discourse marker reading sentence-finally",
          ],
          examples: [
            "I just finished my work.",
            "I want just this book.",
            "Leave it, just.",
          ],
        },
      ],

      usage_examples: [
        "She **always** drinks coffee in the morning. (habitual frequency)",
        "**Always**, he is punctual. (emphatic assertion)",
        "He finishes early, **always**. (confirmatory emphasis)",
        "I **just** saw the movie. (recent past)",
        "That's it, **just**! (restrictive focus)",
        "**Only** Mary can answer. (exclusive focus on subject)",
        "She **only** speaks French. (restrictive focus on action)",
        "He can come, **only**. (sentence-scope restriction)",
        "**Even** the teacher was surprised. (scalar focus)",
        "He **even** won the prize. (scalar addition)",
        "She is **quite** happy. (degree modification)",
        "She is happy, **quite**! (confirmatory emphasis)",
      ],

      common_mistakes: [
        {
          mistake: "She just is here.",
          correction: "She **is just** here.",
          explanation:
            "Trạng từ 'just' thường đứng sau auxiliary verb 'be', không đứng trước.",
          level: "A2",
        },
        {
          mistake: "Only he knows the answer.",
          correction:
            "He **only** knows the answer. (if meaning 'he doesn't do anything else with the answer')",
          explanation:
            "Vị trí 'only' thay đổi nghĩa: trước chủ ngữ = exclusive agent, trước động từ = restricted action.",
          level: "B1",
        },
        {
          mistake: "Even he is coming.",
          correction:
            "Correct, but note the meaning: 'Ngay cả anh ấy cũng đến' (scalar surprise).",
          explanation:
            "Position before subject creates scalar reading about the unexpectedness of the agent.",
          level: "B2",
        },
        {
          mistake: "I have finished already my work.",
          correction:
            "I have **already finished** my work OR I have finished my work **already**.",
          explanation:
            "Adverb position affects information structure and emphasis in perfect aspect.",
          level: "B1",
        },
        {
          mistake: "Clearly he explained the problem.",
          correction:
            "**Clearly**, he explained the problem. (evaluative) OR He **clearly** explained the problem. (manner)",
          explanation:
            "Position affects scope: sentence-initial = speaker evaluation, mid-sentence = manner modification.",
          level: "C1",
        },
      ],

      learning_tips: [
        "Học từng nhóm trạng từ: frequency adverbs, focus particles, evaluative adverbs với các vị trí đặc trưng.",
        "Thực hành đặt trạng từ vào các vị trí khác nhau và phân tích sự thay đổi nghĩa cụ thể.",
        "Đọc nhiều văn bản học thuật để nắm cách dùng evaluative adverbs ở đầu câu.",
        "Luyện tập stress patterns khi sử dụng focus particles như 'only', 'even'.",
        "Chú ý đến discourse functions của adverbs ở các vị trí khác nhau.",
        "Học cấu trúc đảo ngữ với negative và restrictive adverbs.",
      ],

      advancedConcepts: {
        scopeAmbiguity: {
          definition:
            "Scope ambiguity occurs when an adverb can semantically associate with different syntactic constituents, leading to multiple possible interpretations based on structural position.",
          examples: [
            {
              sentence: "John only introduced Bill to Sue.",
              interpretations: [
                "Only John (and nobody else) introduced Bill to Sue",
                "John only introduced (didn't do anything else with) Bill to Sue",
                "John introduced only Bill (and nobody else) to Sue",
                "John introduced Bill only to Sue (and nobody else)",
              ],
            },
            {
              sentence: "She probably will definitely come.",
              interpretations: [
                "It's probable that she will definitely come (epistemic > epistemic)",
                "She will probably come, and that's definite (temporal scope interaction)",
              ],
            },
          ],
        },
        focusParticles: {
          definition:
            "Focus particles like 'only', 'even', 'also' semantically associate with a focused constituent and affect the semantic computation through presuppositions and assertions.",
          examples: [
            {
              adverb: "only",
              sentences: [
                {
                  sentence: "Only [Mary]F came to the party.",
                  focus: "Mary",
                  meaning: "Mary came to the party and nobody else did",
                },
                {
                  sentence: "Mary only [came to the party]F.",
                  focus: "came to the party",
                  meaning:
                    "Mary came to the party and did nothing else related to it",
                },
              ],
            },
            {
              adverb: "even",
              sentences: [
                {
                  sentence: "Even [John]F passed the exam.",
                  focus: "John",
                  meaning:
                    "John passed (surprising given his position on likelihood scale)",
                },
                {
                  sentence: "John even [passed the hardest exam]F.",
                  focus: "passed the hardest exam",
                  meaning:
                    "John passed the hardest exam (surprising achievement)",
                },
              ],
            },
          ],
        },
        prosody: {
          definition:
            "Prosodic stress patterns interact with adverb placement to disambiguate meaning and assign focus, particularly with focus-sensitive operators.",
          stressPatterns: [
            {
              sentence: "I ONLY saw John yesterday.",
              stressedWord: "ONLY",
              meaning: "I saw John yesterday and did nothing else",
            },
            {
              sentence: "I only saw JOHN yesterday.",
              stressedWord: "JOHN",
              meaning: "I saw John yesterday and nobody else",
            },
            {
              sentence: "I only saw John YESTERDAY.",
              stressedWord: "YESTERDAY",
              meaning: "I saw John yesterday and at no other time",
            },
          ],
        },
      },
    },

    generalNotes: {
      importance:
        "Vị trí của trạng từ trong câu là một trong những khía cạnh phức tạp nhất của ngữ pháp tiếng Anh, ảnh hưởng trực tiếp đến ý nghĩa, độ trang trọng, và hiệu quả giao tiếp.",
      tips: [
        "Luôn chú ý trạng từ đi kèm với phần nào trong câu: chủ ngữ, động từ, tân ngữ hay cả câu để xác định scope.",
        "Một số trạng từ có thể đi nhiều vị trí nhưng nghĩa sẽ khác nhau rõ rệt, đặc biệt là focus particles.",
        "Trong tiếng Anh, đảo ngữ thường xuất hiện khi trạng từ phủ định hoặc hạn chế đứng đầu câu.",
        "Stress pattern và intonation tương tác với vị trí trạng từ để tạo ra nghĩa chính xác.",
        "Nên luyện tập với corpus linguistics để thấy patterns thực tế trong ngôn ngữ tự nhiên.",
        "Hiểu được information structure giúp dự đoán vị trí và nghĩa của adverbs.",
      ],
      linguisticPrinciples: [
        {
          principle: "Scope Principle",
          explanation:
            "Trạng từ có scope (phạm vi tác động) đối với các thành phần cú pháp trong domain của nó, thường mở rộng về phía phải từ vị trí của nó.",
          examples: [
            "Only [John came] - scope over entire VP",
            "John [only came] - scope over verb only",
            "John came [only yesterday] - scope over adverbial",
          ],
        },
        {
          principle: "Information Structure Mapping",
          explanation:
            "Vị trí trạng từ phản ánh cấu trúc thông tin của câu: given vs new, topic vs focus, background vs foreground.",
          examples: [
            "Obviously, he was wrong (topic: obviousness)",
            "He was obviously wrong (focus: manner of being wrong)",
            "He was wrong, obviously (afterthought comment)",
          ],
        },
        {
          principle: "Semantic Compositionality",
          explanation:
            "Nghĩa của câu được tính toán dựa trên vị trí cú pháp của trạng từ và cách nó kết hợp với các thành phần khác.",
          examples: [
            "Hardly + past perfect → immediate succession",
            "Only + focused constituent → exclusivity assertion",
            "Even + scalar item → surprise implicature",
          ],
        },
      ],
      crossLinguisticComparisons: [
        {
          language: "Vietnamese",
          comparison:
            "Tiếng Việt ít có hiện tượng thay đổi nghĩa theo vị trí trạng từ như tiếng Anh. Trạng từ thường có vị trí cố định.",
          example:
            "'Chỉ có John đến' vs 'John chỉ đến' - ít sự khác biệt nghĩa so với tiếng Anh",
        },
        {
          language: "German",
          comparison:
            "Tiếng Đức có hiện tượng tương tự nhưng phức tạp hơn do cú pháp V2 và scrambling. Trạng từ có thể di chuyển nhiều hơn.",
          example:
            "'Nur Hans kam' vs 'Hans kam nur' - tương tự tiếng Anh nhưng với word order flexibility",
        },
        {
          language: "Japanese",
          comparison:
            "Tiếng Nhật có focus particles (-wa, -ga, -sae) tương tự như 'only', 'even' nhưng là postpositions.",
          example:
            "'John-sae kita' (Even John came) - particle system thay vì positional variation",
        },
        {
          language: "French",
          comparison:
            "Tiếng Pháp có 'seulement', 'même' nhưng vị trí ít linh hoạt hơn tiếng Anh do cú pháp cứng nhắc hơn.",
          example:
            "'Seulement Jean est venu' vs 'Jean seulement est venu' - ít variation patterns",
        },
      ],
    },
  };

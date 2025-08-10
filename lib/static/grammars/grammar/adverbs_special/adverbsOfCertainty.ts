import { adverbsOfCertaintyType } from "@/types/grammars/grammar/adverbs_special/adverbsOfCertainty";

export const adverbsOfCertaintyData: adverbsOfCertaintyType = {
  id: 15,
  name: "Trạng từ chỉ khả năng xảy ra (Adverbs of certainty)",
  definition:
    "Trạng từ dùng để thể hiện mức độ chắc chắn, khả năng xảy ra của một sự việc, hành động hoặc trạng thái. Chúng biểu thị thái độ nhận thức (epistemic stance) của người nói đối với tính xác thực của mệnh đề.",

  comprehensive_overview: {
    description:
      "Adverbs of certainty are epistemic modality markers that express the speaker's degree of confidence or certainty about the truth value of a proposition. They form a crucial part of English modal system and are essential for expressing nuanced meanings in both spoken and written discourse.",
    importance:
      "These adverbs are fundamental for academic writing, professional communication, and everyday conversation. They allow speakers to hedge statements, express varying degrees of commitment to truth claims, and maintain face in social interactions.",
    scope:
      "Covers certainty levels from absolute certainty (definitely, certainly) to complete uncertainty (maybe, possibly), including epistemic and evidential markers that indicate source of information.",
    linguistic_background:
      "Derived from epistemic modal logic and grammaticalization theory, these adverbs represent the speaker's subjective assessment of probability and are closely related to modal auxiliaries in their semantic function.",
  },
  levels: {
    A1: {
      adverbs: [
        {
          word: "definitely",
          meaning: "Chắc chắn, không nghi ngờ",
          examples: [
            "I will definitely come to the party.",
            "She definitely likes chocolate.",
            "This is definitely the right answer.",
            "He definitely understands English.",
          ],
          usage:
            "Dùng để khẳng định điều gì đó chắc chắn xảy ra với mức độ tin cậy 100%.",
          notes:
            "Thường dùng ở thì hiện tại và tương lai. Đây là trạng từ mạnh nhất để thể hiện sự chắc chắn.",
          pronunciation: "/ˈdefɪnətli/",
          frequency: "very common",
          register: "neutral",
          collocations: [
            "definitely will",
            "definitely know",
            "definitely true",
          ],
          synonyms: ["certainly", "surely", "absolutely"],
          antonyms: ["maybe", "possibly", "perhaps"],
        },
        {
          word: "certainly",
          meaning: "Chắc chắn, nhất định",
          examples: [
            "He is certainly the best player.",
            "You can certainly trust her.",
            "This will certainly help you.",
            "She certainly knows what she's doing.",
          ],
          usage:
            "Thường dùng trong câu khẳng định, nhấn mạnh sự chắc chắn một cách lịch sự hơn 'definitely'.",
          notes:
            "Có thể dùng để trả lời câu hỏi: 'Certainly!' (Chắc chắn rồi!)",
          pronunciation: "/ˈsɜːtnli/",
          frequency: "very common",
          register: "neutral",
          collocations: ["certainly will", "certainly can", "most certainly"],
          synonyms: ["definitely", "surely", "absolutely"],
          antonyms: ["possibly", "maybe", "perhaps"],
        },
        {
          word: "surely",
          meaning: "Chắc chắn, hẳn là",
          examples: [
            "Surely you remember me?",
            "This will surely work.",
            "Surely he's not serious?",
            "You surely don't believe that.",
          ],
          usage:
            "Thường dùng để thể hiện sự ngạc nhiên hoặc kỳ vọng rằng điều gì đó hiển nhiên đúng.",
          notes: "Có thể dùng trong câu hỏi để thể hiện sự không tin tưởng.",
          pronunciation: "/ˈʃʊəli/",
          frequency: "common",
          register: "neutral",
          collocations: ["surely you", "surely not", "surely must"],
          synonyms: ["certainly", "definitely"],
          antonyms: ["possibly", "maybe"],
        },
      ],
      grammarPoints: [
        {
          rule: "Vị trí cơ bản của trạng từ chỉ độ chắc chắn",
          explanation:
            "Trạng từ chỉ khả năng xảy ra thường đứng trước động từ chính hoặc sau động từ 'to be'.",
          examples: [
            "She definitely knows the answer.",
            "They are certainly coming.",
            "I will surely help you.",
          ],
          notes: [
            "Trong câu có động từ 'to be', trạng từ đứng sau 'to be'",
            "Với động từ thường, trạng từ đứng trước động từ chính",
          ],
        },
      ],
      keyFeatures: [
        "Introduction to basic certainty concepts",
        "Simple sentence structures with certainty adverbs",
        "Present and future tense usage primarily",
        "High-frequency adverbs for daily communication",
      ],
      commonMistakes: [
        {
          mistake: "I definitely am coming.",
          correction: "I am definitely coming.",
          explanation: "Trạng từ đứng sau động từ 'to be', không đứng trước.",
        },
      ],
      practiceAreas: [
        "Basic sentence construction with certainty adverbs",
        "Simple present and future tense combinations",
        "Question and answer patterns with certainty",
      ],
    },

    A2: {
      adverbs: [
        {
          word: "probably",
          meaning: "Có lẽ, có khả năng",
          examples: [
            "He will probably come late.",
            "It is probably going to rain.",
            "She probably knows the answer.",
            "They probably went home.",
          ],
          usage:
            "Dùng để thể hiện một sự việc có khả năng xảy ra cao (khoảng 70-80%) nhưng không chắc chắn 100%.",
          notes:
            "Có thể dùng với tất cả các thì. Thể hiện mức độ chắc chắn vừa phải.",
          pronunciation: "/ˈprɒbəbli/",
          frequency: "very common",
          register: "neutral",
          collocations: ["probably will", "probably going to", "most probably"],
          synonyms: ["likely", "presumably"],
          antonyms: ["definitely", "certainly", "unlikely"],
        },
        {
          word: "maybe",
          meaning: "Có thể, có lẽ",
          examples: [
            "Maybe she is at home.",
            "Maybe we'll see him tomorrow.",
            "Maybe it's true.",
            "Maybe you should try again.",
          ],
          usage:
            "Dùng để thể hiện sự không chắc chắn hoặc khả năng xảy ra khoảng 50%.",
          notes:
            "Thông thường đứng ở đầu câu. Có thể dùng để đưa ra gợi ý một cách lịch sự.",
          pronunciation: "/ˈmeɪbi/",
          frequency: "very common",
          register: "informal",
          collocations: ["maybe not", "maybe so", "maybe later"],
          synonyms: ["perhaps", "possibly"],
          antonyms: ["definitely", "certainly"],
        },
        {
          word: "perhaps",
          meaning: "Có lẽ, có thể",
          examples: [
            "Perhaps we should wait.",
            "Perhaps you're right.",
            "It's perhaps the best solution.",
            "Perhaps he forgot.",
          ],
          usage:
            "Tương tự 'maybe' nhưng trang trọng hơn, thường dùng trong văn viết hoặc nói trang trọng.",
          notes: "Có thể đứng đầu câu hoặc giữa câu.",
          pronunciation: "/pəˈhæps/",
          frequency: "common",
          register: "formal",
          collocations: ["perhaps not", "perhaps so", "perhaps because"],
          synonyms: ["maybe", "possibly"],
          antonyms: ["definitely", "certainly"],
        },
      ],
      grammarPoints: [
        {
          rule: "Vị trí linh hoạt của trạng từ không chắc chắn",
          explanation:
            "Maybe và perhaps thường đứng ở đầu câu, trong khi probably có thể đứng ở nhiều vị trí khác nhau.",
          examples: [
            "Maybe she is at home.",
            "She is probably at home.",
            "Perhaps we should go.",
          ],
          notes: [
            "Maybe và perhaps ở đầu câu không cần dấu phẩy trong tiếng Anh hiện đại",
            "Probably có thể đứng trước hoặc sau động từ tùy ngữ cảnh",
          ],
        },
      ],
      keyFeatures: [
        "Introduction to probability and uncertainty",
        "Comparison between high and low certainty",
        "Formal vs informal registers",
        "Position flexibility in sentences",
      ],
      commonMistakes: [
        {
          mistake: "Perhaps, we should go.",
          correction: "Perhaps we should go.",
          explanation: "Không cần dấu phẩy sau 'perhaps' ở đầu câu.",
        },
      ],
      practiceAreas: [
        "Probability expressions in different contexts",
        "Formal and informal certainty expressions",
        "Past, present, and future probability",
      ],
    },

    B1: {
      adverbs: [
        {
          word: "apparently",
          meaning: "Rõ ràng là, hình như",
          examples: [
            "Apparently, they have already left.",
            "She apparently knows the answer.",
            "The plan apparently failed.",
            "Apparently, he's moving to London.",
          ],
          usage:
            "Dùng khi người nói tin rằng điều gì đó đúng dựa trên thông tin có được nhưng không chắc chắn hoàn toàn hoặc không có bằng chứng trực tiếp.",
          notes:
            "Thường đứng đầu câu hoặc trước động từ chính. Biểu thị thông tin gián tiếp.",
          pronunciation: "/əˈpærəntli/",
          frequency: "common",
          register: "neutral",
          collocations: ["apparently not", "apparently so", "quite apparently"],
          synonyms: ["seemingly", "evidently"],
          antonyms: ["clearly", "obviously"],
        },
        {
          word: "likely",
          meaning: "Có khả năng, có thể",
          examples: [
            "He is likely to win the game.",
            "It will likely rain tomorrow.",
            "She's likely at work now.",
            "This is likely the best option.",
          ],
          usage:
            "Thường dùng để dự đoán điều gì đó có khả năng xảy ra cao, tương tự 'probably' nhưng trang trọng hơn.",
          notes:
            "Có thể đứng trước động từ hoặc ở cuối câu. Có thể dùng như tính từ với 'to be likely to'.",
          pronunciation: "/ˈlaɪkli/",
          frequency: "common",
          register: "neutral",
          collocations: ["most likely", "quite likely", "very likely"],
          synonyms: ["probably", "presumably"],
          antonyms: ["unlikely", "improbable"],
        },
        {
          word: "obviously",
          meaning: "Rõ ràng, hiển nhiên",
          examples: [
            "Obviously, we need more time.",
            "She obviously didn't understand.",
            "This is obviously wrong.",
            "Obviously, he's very talented.",
          ],
          usage:
            "Dùng để chỉ điều gì đó hiển nhiên, dễ thấy, không cần bằng chứng thêm.",
          notes:
            "Có thể mang tính hơi bất lịch sự nếu dùng không đúng ngữ cảnh.",
          pronunciation: "/ˈɒbviəsli/",
          frequency: "very common",
          register: "neutral",
          collocations: ["quite obviously", "most obviously"],
          synonyms: ["clearly", "evidently"],
          antonyms: ["apparently", "seemingly"],
        },
      ],
      grammarPoints: [
        {
          rule: "Trạng từ dẫn nhập thông tin (Evidential adverbs)",
          explanation:
            "Apparently thường dùng khi người nói muốn báo hiệu rằng thông tin được biết không phải từ kinh nghiệm trực tiếp.",
          examples: [
            "Apparently, the meeting was cancelled.",
            "He apparently lives in Paris now.",
            "Apparently, she's getting married.",
          ],
          notes: [
            "Biểu thị nguồn thông tin gián tiếp",
            "Giúp người nói tránh chịu trách nhiệm hoàn toàn về tính chính xác của thông tin",
          ],
        },
        {
          rule: "Likely với cấu trúc 'to be likely to'",
          explanation:
            "Likely có thể dùng như tính từ trong cấu trúc 'to be likely to + infinitive'.",
          examples: [
            "He is likely to come.",
            "It's likely to rain.",
            "They are likely to succeed.",
          ],
          notes: [
            "Cấu trúc này trang trọng hơn 'probably'",
            "Thường dùng trong văn viết academic",
          ],
        },
      ],
      keyFeatures: [
        "Introduction to evidentiality (source of information)",
        "Distinction between direct and indirect knowledge",
        "More sophisticated sentence structures",
        "Academic and formal register awareness",
      ],
      commonMistakes: [
        {
          mistake: "Apparently, I think he's right.",
          correction: "Apparently, he's right. / I think he's right.",
          explanation:
            "'Apparently' không dùng với 'I think' vì chúng mâu thuẫn về nguồn thông tin.",
        },
      ],
      practiceAreas: [
        "Evidentiality and information source",
        "Academic writing with appropriate certainty markers",
        "Complex sentence structures with certainty adverbs",
      ],
    },

    B2: {
      adverbs: [
        {
          word: "undoubtedly",
          meaning: "Không nghi ngờ gì, chắc chắn",
          examples: [
            "She is undoubtedly the best candidate.",
            "The plan is undoubtedly risky.",
            "He undoubtedly has great potential.",
            "This is undoubtedly a significant achievement.",
          ],
          usage:
            "Dùng để nhấn mạnh sự chắc chắn tuyệt đối, loại bỏ mọi nghi ngờ. Mạnh hơn 'certainly'.",
          notes:
            "Có tính trang trọng cao, thường dùng trong văn viết academic hoặc formal speech.",
          pronunciation: "/ʌnˈdaʊtɪdli/",
          frequency: "moderate",
          register: "formal",
          collocations: [
            "undoubtedly true",
            "undoubtedly correct",
            "undoubtedly the best",
          ],
          synonyms: ["unquestionably", "indisputably"],
          antonyms: ["possibly", "questionably"],
        },
        {
          word: "presumably",
          meaning: "Có thể đoán được, giả sử",
          examples: [
            "He is presumably at work now.",
            "Presumably, they have already made a decision.",
            "The meeting will presumably start on time.",
            "Presumably, you've read the report.",
          ],
          usage:
            "Dùng để nói điều gì đó được giả định dựa trên thông tin có sẵn hoặc logic thông thường.",
          notes:
            "Thường đứng đầu câu hoặc trước động từ chính. Biểu thị suy luận hợp lý.",
          pronunciation: "/prɪˈzjuːməbli/",
          frequency: "moderate",
          register: "formal",
          collocations: [
            "presumably because",
            "presumably not",
            "presumably so",
          ],
          synonyms: ["probably", "supposedly"],
          antonyms: ["definitely", "certainly"],
        },
        {
          word: "evidently",
          meaning: "Rõ ràng, hiển nhiên (dựa trên bằng chứng)",
          examples: [
            "Evidently, he didn't receive the message.",
            "She evidently enjoys her job.",
            "The plan evidently worked.",
            "Evidently, something went wrong.",
          ],
          usage:
            "Dùng khi có bằng chứng rõ ràng cho một kết luận. Mạnh hơn 'apparently'.",
          notes: "Biểu thị sự tin tưởng cao dựa trên bằng chứng quan sát được.",
          pronunciation: "/ˈevɪdəntli/",
          frequency: "moderate",
          register: "formal",
          collocations: ["quite evidently", "evidently not"],
          synonyms: ["clearly", "obviously"],
          antonyms: ["apparently", "seemingly"],
        },
      ],
      grammarPoints: [
        {
          rule: "Phân biệt mức độ formal của các trạng từ",
          explanation:
            "Undoubtedly thường dùng trong văn viết và bài phát biểu trang trọng để thể hiện sự tin tưởng tuyệt đối.",
          examples: [
            "This is undoubtedly the best solution. (formal)",
            "This is definitely the best solution. (neutral)",
            "This is probably the best solution. (less certain)",
          ],
          notes: [
            "Undoubtedly mang tính academic cao",
            "Thường xuất hiện trong argumentative writing",
          ],
        },
        {
          rule: "Presumably và suy luận logic",
          explanation:
            "Presumably biểu thị sự giả định có cơ sở dựa trên thông tin hoặc logic, nhưng không chắc chắn tuyệt đối.",
          examples: [
            "Presumably, they've finished the project by now.",
            "The store is presumably closed at this hour.",
            "Presumably, you understand the risks.",
          ],
          notes: [
            "Thể hiện reasoning process",
            "Cho phép người nghe/đọc có thể không đồng ý",
          ],
        },
      ],
      keyFeatures: [
        "Advanced formal register usage",
        "Distinction between evidence-based and assumption-based certainty",
        "Academic writing conventions",
        "Sophisticated argumentation skills",
      ],
      commonMistakes: [
        {
          mistake: "Presumably, I know he's right.",
          correction: "Presumably, he's right. / I presume he's right.",
          explanation:
            "'Presumably' không dùng với 'I know' vì chúng thể hiện các mức độ certainty khác nhau.",
        },
      ],
      practiceAreas: [
        "Academic and professional writing",
        "Formal presentations and arguments",
        "Evidence-based reasoning and conclusions",
      ],
    },

    C1: {
      adverbs: [
        {
          word: "categorically",
          meaning: "Rõ ràng, dứt khoát, không thể bàn cãi",
          examples: [
            "He categorically denied the accusations.",
            "She categorically refused to cooperate.",
            "The government categorically rejected the proposal.",
            "I can categorically state that this is false.",
          ],
          usage:
            "Dùng để phủ nhận hoặc khẳng định một cách dứt khoát, mạnh mẽ, không có sự nghi ngờ hay thỏa hiệp.",
          notes:
            "Thường dùng trong ngữ cảnh trang trọng, pháp lý, hoặc khi cần thể hiện lập trường rất mạnh mẽ.",
          pronunciation: "/ˌkætɪˈɡɒrɪkli/",
          frequency: "uncommon",
          register: "very formal",
          collocations: [
            "categorically deny",
            "categorically refuse",
            "categorically reject",
          ],
          synonyms: ["absolutely", "unequivocally"],
          antonyms: ["tentatively", "provisionally"],
        },
        {
          word: "inevitably",
          meaning: "Chắc chắn xảy ra, không tránh khỏi",
          examples: [
            "Inevitably, mistakes will be made.",
            "The project will inevitably face challenges.",
            "Change will inevitably come.",
            "Inevitably, prices will rise.",
          ],
          usage:
            "Diễn tả điều gì đó không thể tránh khỏi sẽ xảy ra do tính chất tự nhiên của sự việc hoặc logic nhân quả.",
          notes:
            "Thể hiện tính tất yếu của sự việc, không phải do ý muốn của con người.",
          pronunciation: "/ɪnˈevɪtəbli/",
          frequency: "moderate",
          register: "formal",
          collocations: [
            "almost inevitably",
            "quite inevitably",
            "inevitably lead to",
          ],
          synonyms: ["unavoidably", "necessarily"],
          antonyms: ["possibly", "optionally"],
        },
        {
          word: "conceivably",
          meaning: "Có thể tưởng tượng được, có thể xảy ra",
          examples: [
            "This could conceivably be the solution.",
            "Conceivably, they might change their minds.",
            "The plan could conceivably work.",
            "Conceivably, we might finish early.",
          ],
          usage:
            "Thể hiện khả năng xảy ra thấp nhưng vẫn có thể tưởng tượng được trong những circumstances đặc biệt.",
          notes: "Thường dùng với modal verbs để thể hiện remote possibility.",
          pronunciation: "/kənˈsiːvəbli/",
          frequency: "uncommon",
          register: "formal",
          collocations: [
            "could conceivably",
            "might conceivably",
            "conceivably possible",
          ],
          synonyms: ["possibly", "potentially"],
          antonyms: ["inconceivably", "impossibly"],
        },
      ],
      grammarPoints: [
        {
          rule: "Trạng từ thể hiện tính tất yếu và phủ định mạnh mẽ",
          explanation:
            "Categorically thường đi kèm với các động từ phủ định mạnh mẽ như deny, refuse, reject.",
          examples: [
            "He categorically denied all charges.",
            "The committee categorically rejected the proposal.",
            "She categorically refused to comment.",
          ],
          notes: [
            "Dùng trong legal và official contexts",
            "Thể hiện absolute position không thể thay đổi",
          ],
        },
        {
          rule: "Inevitably và tính tất yếu",
          explanation:
            "Inevitably thường đứng đầu hoặc cuối câu, diễn tả kết quả logic không thể tránh khỏi.",
          examples: [
            "Inevitably, the truth will come out.",
            "The system will inevitably break down.",
            "Problems will arise, inevitably.",
          ],
          notes: [
            "Thể hiện causal necessity",
            "Không phụ thuộc vào human agency",
          ],
        },
      ],
      keyFeatures: [
        "Advanced formal and academic register",
        "Legal and professional discourse markers",
        "Sophisticated logical reasoning",
        "Absolute vs. conditional certainty distinctions",
      ],
      commonMistakes: [
        {
          mistake: "He categorically maybe denied it.",
          correction: "He categorically denied it.",
          explanation:
            "'Categorically' thể hiện sự chắc chắn tuyệt đối, không thể dùng với 'maybe'.",
        },
      ],
      practiceAreas: [
        "Legal and professional communications",
        "Academic argumentation and thesis writing",
        "Formal debate and discussion",
        "Policy and official statement writing",
      ],
    },

    C2: {
      adverbs: [
        {
          word: "unquestionably",
          meaning: "Không thể nghi ngờ, chắc chắn tuyệt đối",
          examples: [
            "She is unquestionably the most talented artist.",
            "This is unquestionably the best solution.",
            "He has unquestionably improved his performance.",
            "The evidence is unquestionably compelling.",
          ],
          usage:
            "Dùng để nhấn mạnh sự chắc chắn tuyệt đối, không có chỗ để nghi ngờ hay tranh cãi.",
          notes:
            "Dùng trong văn viết và nói trang trọng cao nhất, thường trong academic hoặc professional contexts.",
          pronunciation: "/ʌnˈkwestʃənəbli/",
          frequency: "rare",
          register: "very formal",
          collocations: [
            "unquestionably true",
            "unquestionably the best",
            "unquestionably superior",
          ],
          synonyms: ["indisputably", "undeniably"],
          antonyms: ["questionably", "doubtfully"],
        },
        {
          word: "indisputably",
          meaning: "Không thể tranh cãi, rõ ràng",
          examples: [
            "He is indisputably the leader of the team.",
            "The facts are indisputably clear.",
            "This is indisputably her greatest work.",
            "The results are indisputably significant.",
          ],
          usage:
            "Dùng để khẳng định điều gì đó là sự thật không thể bàn cãi, có bằng chứng rõ ràng.",
          notes:
            "Thường dùng trong academic writing, legal contexts, hoặc formal arguments.",
          pronunciation: "/ˌɪndɪˈspjuːtəbli/",
          frequency: "rare",
          register: "very formal",
          collocations: [
            "indisputably true",
            "indisputably the case",
            "indisputably evident",
          ],
          synonyms: ["unquestionably", "undeniably"],
          antonyms: ["arguably", "debatably"],
        },
        {
          word: "incontrovertibly",
          meaning: "Không thể chối cãi, chắc chắn không thể phủ nhận",
          examples: [
            "The evidence incontrovertibly proves his innocence.",
            "History has incontrovertibly shown the importance of education.",
            "The data incontrovertibly supports this conclusion.",
            "This incontrovertibly demonstrates the need for reform.",
          ],
          usage:
            "Dùng trong ngữ cảnh rất formal để thể hiện bằng chứng hoặc logic không thể bị phủ nhận.",
          notes:
            "Thuộc về register cao nhất, thường xuất hiện trong academic research, legal documents.",
          pronunciation: "/ˌɪnkɒntrəˈvɜːtəbli/",
          frequency: "very rare",
          register: "very formal",
          collocations: [
            "incontrovertibly prove",
            "incontrovertibly demonstrate",
            "incontrovertibly establish",
          ],
          synonyms: ["indisputably", "irrefutably"],
          antonyms: ["arguably", "supposedly"],
        },
      ],
      grammarPoints: [
        {
          rule: "Trạng từ thể hiện certainty tuyệt đối trong academic discourse",
          explanation:
            "Unquestionably và indisputably là những trạng từ dùng trong văn viết và ngôn ngữ trang trọng nhất để nhấn mạnh sự chắc chắn không thể bàn cãi.",
          examples: [
            "The research unquestionably demonstrates the correlation.",
            "This approach is indisputably more effective.",
            "The theorem incontrovertibly proves the hypothesis.",
          ],
          notes: [
            "Dùng để strengthen academic arguments",
            "Thể hiện highest level of confidence",
          ],
        },
        {
          rule: "Vị trí và cách nhấn trong formal discourse",
          explanation:
            "Những trạng từ này thường đứng trước động từ chính hoặc cuối câu để tạo emphasis tối đa.",
          examples: [
            "This is unquestionably correct.",
            "He unquestionably deserves recognition.",
            "The evidence proves this indisputably.",
          ],
          notes: [
            "Tạo rhetorical emphasis",
            "Thường dùng trong conclusion statements",
          ],
        },
      ],
      keyFeatures: [
        "Mastery of highest formal register",
        "Academic and scholarly discourse",
        "Absolute certainty in professional arguments",
        "Sophisticated rhetorical strategies",
      ],
      commonMistakes: [
        {
          mistake: "This is unquestionably maybe true.",
          correction: "This is unquestionably true.",
          explanation:
            "Không thể kết hợp trạng từ certainty tuyệt đối với uncertainty markers.",
        },
      ],
      practiceAreas: [
        "PhD-level academic writing",
        "Professional research presentations",
        "Legal and policy argumentation",
        "High-level diplomatic and business communication",
      ],
    },
  },
  adverbsOfCertainty_vocab: {
    categories: {
      absolute_certainty: [
        "definitely",
        "certainly",
        "undoubtedly",
        "surely",
        "clearly",
        "unquestionably",
        "beyond doubt",
      ],
      high_certainty: ["probably", "likely", "apparently", "evidently"],
      medium_certainty: ["presumably", "seemingly", "arguably"],
      low_certainty: [
        "possibly",
        "maybe",
        "perhaps",
        "conceivably",
        "perchance",
        "potentially",
      ],
      epistemic_modality: [
        "necessarily",
        "inevitably",
        "unavoidably",
        "invariably",
        "without doubt",
        "beyond question",
      ],
    },

    CEFR_levels: {
      A1: ["definitely", "surely", "probably", "maybe", "perhaps"],
      A2: ["certainly", "likely", "possibly", "apparently"],
      B1: ["evidently", "presumably", "arguably"],
      B2: ["undoubtedly", "unquestionably", "conceivably"],
      C1: ["beyond doubt", "seemingly", "perchance", "potentially"],
      C2: ["incontestably", "irrefutably", "indisputably", "unequivocally"],
    },

    detailed_analysis: [
      {
        adverb: "definitely",
        certainty_level: 10,
        formality: "neutral",
        frequency: "very common",
        semantic_field: ["absolute certainty", "commitment", "assurance"],
        pragmatic_functions: [
          "strengthening statements",
          "showing confidence",
          "making promises",
        ],
      },
      {
        adverb: "probably",
        certainty_level: 8,
        formality: "neutral",
        frequency: "very common",
        semantic_field: ["high probability", "likelihood", "expectation"],
        pragmatic_functions: ["hedging", "prediction", "cautious assertion"],
      },
      {
        adverb: "maybe",
        certainty_level: 5,
        formality: "informal",
        frequency: "very common",
        semantic_field: ["possibility", "uncertainty", "suggestion"],
        pragmatic_functions: ["hedging", "suggestion", "politeness"],
      },
      {
        adverb: "unquestionably",
        certainty_level: 10,
        formality: "very formal",
        frequency: "uncommon",
        semantic_field: ["absolute certainty", "authority", "finality"],
        pragmatic_functions: [
          "academic argument",
          "authoritative statement",
          "closing debate",
        ],
      },
    ],

    position_rules: {
      mid_position: {
        description:
          "Usually placed after auxiliary verbs or before main verbs in affirmative sentences.",
        examples: [
          "She **definitely** knows the answer.",
          "They have **probably** left.",
          "He will **possibly** come.",
        ],
      },
      sentence_initial: {
        description:
          "Sometimes placed at the beginning of a sentence for emphasis.",
        examples: [
          "**Certainly**, this is true.",
          "**Probably**, they won’t agree.",
        ],
      },
      sentence_final: {
        description: "Occasionally placed at the end for emphasis or style.",
        examples: [
          "She will come, **definitely**.",
          "They might stay, **possibly**.",
        ],
      },
      with_negation: {
        description: "Position changes with negative constructions.",
        examples: [
          "She definitely **won't** come.",
          "He probably **doesn't** know.",
          "They certainly **haven't** finished.",
        ],
        notes: [
          "Adverb typically precedes negative auxiliary",
          "Scope of negation affects meaning",
        ],
      },
      in_questions: {
        description: "Special considerations for interrogative sentences.",
        examples: [
          "Will she **definitely** come?",
          "Has he **probably** finished?",
          "**Surely** you don't believe that?",
        ],
        notes: [
          "Position depends on question type",
          "Some adverbs can introduce questions",
        ],
      },
    },

    usage_examples: [
      "I will **definitely** attend the meeting.",
      "They are **probably** on their way.",
      "**Certainly**, this is the best choice.",
      "He has **possibly** forgotten the keys.",
      "She is **undoubtedly** the best player.",
      "Maybe we should try again.",
    ],

    common_mistakes: [
      {
        mistake: "She definitely is coming.",
        correction: "She **is definitely** coming.",
        explanation:
          "Adverbs of certainty usually come after auxiliary or modal verbs.",
        level: "A2",
      },
      {
        mistake: "Probably he will come.",
        correction: "**Probably**, he will come.",
        explanation:
          "At the beginning of a sentence, adverbs of certainty need a comma.",
        level: "A2",
      },
    ],

    comparison_with_other_adverbs: {
      note: "Adverbs of certainty differ from adverbs of possibility or doubt by expressing the speaker's confidence level.",
      example: {
        certainty: "She will definitely succeed.",
        possibility: "She might possibly succeed.",
        probability: "She will probably succeed.",
        necessity: "She must necessarily succeed.",
      },
      detailed_comparisons: [
        {
          adverb_pair: ["definitely", "probably"],
          difference:
            "Definitely expresses 100% certainty while probably expresses high probability (80-90%)",
          examples: [
            "I will definitely be there. (certain commitment)",
            "I will probably be there. (likely but not guaranteed)",
          ],
        },
      ],
    },

    learning_tips: [
      "Practice placing these adverbs in correct sentence positions.",
      "Distinguish certainty adverbs from modal verbs expressing possibility.",
      "Use adverbs of certainty to strengthen arguments in writing.",
      "Listen to native speakers to hear natural placement and intonation.",
    ],
  },

  detailed_grammar_rules: {
    position_in_sentence: {
      mid_position: {
        description:
          "Adverbs of certainty typically occur in mid-position: after auxiliary verbs, before main verbs, and after 'be' verbs.",
        examples: [
          "She has definitely finished her work.",
          "They will probably arrive late.",
          "He is certainly qualified for the job.",
        ],
        notes: [
          "Most common position for certainty adverbs",
          "Follows auxiliary verbs",
          "Precedes main verbs in simple tenses",
        ],
      },
      initial_position: {
        description:
          "Some certainty adverbs can appear at the beginning of sentences for emphasis.",
        examples: [
          "Certainly, we can help you with that.",
          "Obviously, this is not the right solution.",
        ],
        notes: ["Creates emphasis", "Often followed by a comma"],
      },
      final_position: {
        description:
          "Certainty adverbs occasionally appear in final position for emphasis.",
        examples: ["She will come, definitely.", "They might agree, possibly."],
        notes: ["Less common than mid-position", "Often used for emphasis"],
      },
      with_auxiliaries: {
        description:
          "With auxiliary verbs, certainty adverbs follow the auxiliary and precede the main verb.",
        examples: [
          "He has definitely seen the movie.",
          "They will probably be late.",
        ],
        notes: ["Standard position with perfect tenses", "Follows modal verbs"],
      },
      with_modals: {
        description:
          "Certainty adverbs interact with modal verbs to create layered meanings.",
        examples: ["She will definitely come.", "He might possibly agree."],
        notes: [
          "Creates complex epistemic meanings",
          "Some combinations are redundant",
        ],
      },
    },
    certainty_scale: {
      absolute_certainty: {
        level: "100% certainty",
        description: "Expresses complete confidence with no room for doubt",
        adverbs: ["definitely", "certainly", "absolutely", "unquestionably"],
        examples: [
          "She definitely knows the answer.",
          "This is absolutely correct.",
        ],
        usage_context: [
          "Factual statements",
          "Strong commitments",
          "Legal declarations",
        ],
      },
      high_certainty: {
        level: "80-95% certainty",
        description: "Expresses strong confidence with minimal doubt",
        adverbs: ["probably", "likely", "presumably", "undoubtedly"],
        examples: [
          "She will probably arrive on time.",
          "This is likely the best solution.",
        ],
        usage_context: [
          "Predictions",
          "Educated guesses",
          "Evidence-based conclusions",
        ],
      },
      moderate_certainty: {
        level: "50-80% certainty",
        description: "Expresses moderate confidence with some room for doubt",
        adverbs: ["apparently", "seemingly", "presumably"],
        examples: [
          "Apparently, the meeting was successful.",
          "The plan seemingly worked well.",
        ],
        usage_context: [
          "Indirect information",
          "Initial impressions",
          "Tentative conclusions",
        ],
      },
      low_certainty: {
        level: "20-50% certainty",
        description: "Expresses limited confidence with significant doubt",
        adverbs: ["possibly", "maybe", "perhaps", "conceivably"],
        examples: ["Maybe we should reconsider.", "This could possibly work."],
        usage_context: [
          "Suggestions",
          "Hypothetical scenarios",
          "Uncertain situations",
        ],
      },
      uncertainty: {
        level: "0-20% certainty",
        description: "Expresses very limited confidence or speculation",
        adverbs: ["barely possibly", "hardly likely", "scarcely conceivable"],
        examples: [
          "It's barely possible they'll agree.",
          "This is hardly likely to succeed.",
        ],
        usage_context: [
          "Remote possibilities",
          "Speculation",
          "Diplomatic language",
        ],
      },
    },
    syntactic_patterns: [
      {
        pattern: "Subject + Auxiliary + Adverb + Main Verb",
        description: "Standard pattern with auxiliary verbs",
        examples: ["She has definitely finished.", "They will probably come."],
        constraints: [
          "Requires auxiliary or modal verb",
          "Adverb precedes main verb",
        ],
      },
    ],
  },

  advanced_usage: {
    academic_writing: {
      formal_adverbs: [
        "undoubtedly",
        "unquestionably",
        "indisputably",
        "presumably",
      ],
      examples: [
        "The data undoubtedly supports this hypothesis.",
        "This approach is unquestionably more effective.",
      ],
      guidelines: [
        "Use formal adverbs in academic arguments",
        "Avoid informal markers like 'maybe' in formal writing",
        "Balance certainty with appropriate hedging",
      ],
    },
    spoken_english: {
      common_adverbs: [
        "definitely",
        "probably",
        "maybe",
        "obviously",
        "certainly",
      ],
      examples: ["I'll definitely be there.", "She's probably running late."],
      intonation_notes: [
        "Rising intonation with 'maybe' indicates uncertainty",
        "Stress on certainty adverbs strengthens meaning",
      ],
    },
    comparative_structures: [
      {
        structure: "more/less + certainly/probably/likely",
        examples: [
          "This is more certainly correct than that.",
          "She's more likely to succeed.",
        ],
        usage: "Comparing degrees of certainty between options",
      },
    ],
  },

  cross_linguistic_comparison: {
    similarities_with_other_languages: [
      "Many languages have epistemic modality markers",
      "Position flexibility exists in most Indo-European languages",
      "Gradations of certainty are universal concepts",
    ],
    unique_english_features: [
      "Rich variety of certainty adverbs",
      "Complex interactions with modal verbs",
      "Specific evidentiality markers",
    ],
    common_l1_interference: [
      {
        l1_language: "Spanish",
        interference_type: "Position errors",
        examples: [
          "Incorrect: *Probably he will come",
          "Correct: He will probably come",
        ],
        remediation: [
          "Practice mid-position placement",
          "Focus on auxiliary + adverb + verb patterns",
        ],
      },
    ],
  },

  pedagogical_progression: {
    A1_A2_foundation: {
      focus_areas: [
        "Basic certainty concepts",
        "High-frequency adverbs",
        "Simple sentence positions",
      ],
      teaching_strategies: [
        "Use clear certainty scales",
        "Practice with daily situations",
        "Focus on pronunciation",
      ],
      common_challenges: [
        "L1 interference with position",
        "Overuse of 'maybe'",
        "Confusion with modal verbs",
      ],
    },
    B1_B2_development: {
      focus_areas: [
        "Evidentiality",
        "Formal vs informal register",
        "Complex sentence structures",
      ],
      teaching_strategies: [
        "Compare formal and informal alternatives",
        "Practice with authentic texts",
        "Focus on academic writing",
      ],
      common_challenges: [
        "Understanding evidentiality",
        "Choosing appropriate register",
        "Position in complex sentences",
      ],
    },
    C1_C2_mastery: {
      focus_areas: [
        "Sophisticated academic discourse",
        "Legal and professional language",
        "Stylistic variation",
      ],
      teaching_strategies: [
        "Analyze authentic professional texts",
        "Practice academic presentations",
        "Focus on pragmatic appropriateness",
      ],
      common_challenges: [
        "Overuse of absolute certainty",
        "Cultural appropriateness",
        "Maintaining academic objectivity",
      ],
    },
  },

  assessment_criteria: {
    A1: [
      "Can use 'definitely' and 'maybe' appropriately",
      "Understands basic certainty vs. uncertainty",
    ],
    A2: [
      "Can distinguish between levels of certainty",
      "Uses 'probably', 'certainly', 'perhaps' correctly",
    ],
    B1: [
      "Demonstrates understanding of evidentiality",
      "Shows awareness of formal vs informal register",
    ],
    B2: [
      "Uses advanced certainty markers effectively",
      "Shows sophisticated understanding of probability scales",
    ],
    C1: [
      "Masters formal and legal certainty expressions",
      "Uses certainty adverbs for rhetorical effect",
    ],
    C2: [
      "Demonstrates native-like sophistication",
      "Shows complete mastery of register and appropriateness",
    ],
  },

  references: [
    {
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      type: "book",
      isbn: "978-1316631737",
      publisher: "Cambridge University Press",
      year: 2019,
      description:
        "Comprehensive grammar reference covering adverbs of certainty with clear explanations and practice exercises.",
      relevance:
        "Excellent for A2-B2 learners, provides practical usage examples and common mistake corrections.",
    },
    {
      title: "Advanced Grammar in Use",
      author: "Martin Hewings",
      type: "book",
      isbn: "978-1316617267",
      publisher: "Cambridge University Press",
      year: 2013,
      description:
        "Advanced-level grammar reference focusing on sophisticated structures including epistemic modality.",
      relevance:
        "Essential for C1-C2 learners, covers formal and academic usage of certainty adverbs.",
    },
    {
      title: "A Comprehensive Grammar of the English Language",
      author: "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
      type: "book",
      isbn: "978-0582517349",
      publisher: "Longman",
      year: 1985,
      description:
        "Authoritative reference grammar covering all aspects of English including detailed treatment of epistemic modality.",
      relevance:
        "Academic reference for understanding theoretical foundations and comprehensive coverage.",
    },
    {
      title: "Cambridge Grammar of English",
      author: "Ronald Carter, Michael McCarthy",
      type: "book",
      isbn: "978-0521674393",
      publisher: "Cambridge University Press",
      year: 2006,
      description:
        "Modern descriptive grammar based on corpus research, covering spoken and written English.",
      relevance:
        "Excellent for understanding real-world usage patterns and frequency data.",
    },
    {
      title: "Practical English Usage",
      author: "Michael Swan",
      type: "book",
      isbn: "978-0194202411",
      publisher: "Oxford University Press",
      year: 2016,
      description:
        "Problem-solving reference addressing common difficulties faced by English language learners.",
      relevance:
        "Excellent for understanding and correcting common mistakes with certainty adverbs.",
    },
  ],

  cultural_context: {
    regional_variations: [
      {
        region: "British English",
        variations: [
          "More frequent use of 'rather' with certainty adverbs",
          "Preference for 'quite possibly'",
        ],
        examples: [
          "That's rather definitely the case. (BrE)",
          "She's quite certainly right. (BrE)",
        ],
      },
      {
        region: "American English",
        variations: [
          "More direct certainty expressions",
          "Frequent use of 'for sure'",
        ],
        examples: [
          "He's definitely gonna be there. (AmE)",
          "That's for sure the right answer. (AmE)",
        ],
      },
    ],
    register_awareness: {
      formal_contexts: [
        "Academic writing requires measured certainty",
        "Legal documents use absolute certainty",
      ],
      informal_contexts: [
        "Casual conversation allows frequent 'maybe' and 'probably'",
        "Social media favors emphatic certainty",
      ],
      academic_contexts: [
        "Avoid absolute certainty unless justified",
        "Use hedging appropriately",
        "Maintain objective stance",
      ],
    },
  },

  corpus_insights: {
    frequency_data: [
      {
        adverb: "probably",
        frequency_per_million: 89.3,
        common_contexts: ["predictions", "casual speech", "news reporting"],
      },
      {
        adverb: "definitely",
        frequency_per_million: 67.8,
        common_contexts: [
          "commitments",
          "strong assertions",
          "informal speech",
        ],
      },
      {
        adverb: "certainly",
        frequency_per_million: 45.2,
        common_contexts: [
          "formal speech",
          "polite responses",
          "academic writing",
        ],
      },
    ],
    collocation_patterns: [
      {
        adverb: "definitely",
        common_collocations: [
          "definitely will",
          "definitely not",
          "definitely going to",
        ],
        examples: [
          "I will definitely be there.",
          "This is definitely not right.",
        ],
      },
    ],
  },

  generalNotes: [
    "Adverbs of certainty giúp người nói/bài viết thể hiện mức độ chắc chắn hoặc khả năng xảy ra của sự việc từ 0% đến 100%.",
    "Chúng có thể được phân loại theo mức độ formality: informal (maybe), neutral (probably), formal (presumably), very formal (unquestionably).",
    "Vị trí của trạng từ trong câu ảnh hưởng đến nghĩa, sự nhấn mạnh và register của câu nói/viết.",
    "Một số trạng từ chỉ khả năng xảy ra có thể dùng kết hợp với modal verbs để thể hiện nhiều lớp nghĩa khác nhau.",
    "Trong academic writing, cần chọn trạng từ phù hợp với register và tránh overstatement hoặc understatement.",
    "Evidentiality (nguồn thông tin) là một khía cạnh quan trọng: apparently (nghe nói), obviously (thấy rõ), presumably (suy luận).",
    "Corpus research cho thấy 'probably' và 'definitely' là những trạng từ được sử dụng nhiều nhất trong cả văn nói và viết.",
    "Cross-linguistic research chỉ ra rằng position errors là lỗi phổ biến nhất của người học ESL/EFL.",
    "Pragmatic competence bao gồm việc hiểu khi nào nên dùng certainty adverbs để maintain face và avoid over-commitment.",
    "Register awareness là critical: 'maybe' phù hợp với casual conversation nhưng không appropriate cho academic writing.",
  ],

  commonMistakes: [
    "Dùng incorrectly position: '*Probably he is late' thay vì 'He is probably late' hoặc 'Probably, he is late'.",
    "Nhầm lẫn giữa 'definitely' (100% certain) và 'probably' (80-90% certain) về mức độ chắc chắn.",
    "Đặt trạng từ sai vị trí với auxiliary verbs: '*She definitely is coming' thay vì 'She is definitely coming'.",
    "Kết hợp redundant modal + certainty adverb: '*He must definitely come' thay vì 'He must come' hoặc 'He will definitely come'.",
    "Sử dụng inappropriate register: dùng 'maybe' trong academic writing thay vì 'possibly' hoặc 'conceivably'.",
    "Không hiểu evidentiality: dùng 'obviously' khi chỉ có indirect evidence, nên dùng 'apparently'.",
    "Overuse của 'maybe' cho tất cả situations of uncertainty thay vì distinguish different levels.",
    "Mixing contradictory adverbs: '*Maybe certainly he knows' - không thể combine opposing certainty levels.",
    "Wrong intonation in questions: không recognize rằng intonation affects meaning với certainty adverbs.",
    "Cultural inappropriateness: sử dụng absolute certainty ('definitely') khi cần diplomatic language ('possibly', 'perhaps').",
  ],
};

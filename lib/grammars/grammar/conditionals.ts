import { ConditionalsType } from "@/types/grammars/grammar/conditionals";

export const ConditionalsData: ConditionalsType = {
  "Zero Conditional": {
    level: "A2-B1",
    difficulty: "Beginner to Intermediate",
    frequency: "Very High",
    forms: {
      structure:
        "If + present simple, present simple • e.g., If you heat water, it boils",
      alternative:
        "When + present simple, present simple • e.g., When I eat too much, I feel sick",
      withModals:
        "If + present simple, can/may/must + base verb • e.g., If you need help, you can call me",
      negativeIf:
        "If + subject + don't/doesn't + base verb, present simple • e.g., If you don't water plants, they die",
      negativeMain:
        "If + present simple, subject + don't/doesn't + base verb • e.g., If it's sunny, I don't stay inside",
      questionForm:
        "What happens if + present simple? • e.g., What happens if you heat ice?",
      imperativeForm:
        "If + present simple, imperative • e.g., If you see fire, call 911",
    },
    usage: [
      {
        type: "General truths",
        description: "Sự thật hiển nhiên, quy luật tự nhiên",
        example: "If you mix red and blue, you get purple.",
        level: "A2",
        frequency: "Very common",
        situations: ["Physics laws", "Chemical reactions", "Natural phenomena"],
      },
      {
        type: "Scientific facts",
        description: "Sự kiện khoa học, công thức vật lý, hóa học",
        example: "If you heat ice, it melts.",
        level: "A2-B1",
        frequency: "Common",
        situations: ["Laboratory", "Science class", "Educational contexts"],
      },
      {
        type: "Routines and habits",
        description: "Hành động lặp đi lặp lại khi điều kiện xảy ra",
        example: "If it rains, I stay home.",
        level: "A2",
        frequency: "Very common",
        situations: ["Daily life", "Personal habits", "Regular activities"],
      },
      {
        type: "Instructions",
        description: "Câu hướng dẫn, chỉ dẫn (thay 'if' bằng 'when')",
        example: "When the light turns red, stop the car.",
        level: "A2-B1",
        frequency: "Common",
        situations: ["Manuals", "Rules", "Procedures", "Safety instructions"],
      },
      {
        type: "Automatic results",
        description: "Kết quả tự động xảy ra khi có điều kiện",
        example: "If you press this button, the computer turns on.",
        level: "A2",
        frequency: "Common",
        situations: ["Technology", "Machines", "Devices"],
      },
      {
        type: "Mathematical facts",
        description: "Sự thật toán học, công thức tính toán",
        example: "If you add 2 and 2, you get 4.",
        level: "A2",
        frequency: "Common",
        situations: ["Mathematics", "Calculations", "Logic"],
      },
      {
        type: "Biological processes",
        description: "Quá trình sinh học tự nhiên",
        example: "If plants don't get sunlight, they die.",
        level: "A2-B1",
        frequency: "Common",
        situations: ["Biology", "Nature", "Health"],
      },
    ],
    timeMarkers: [
      "if",
      "when",
      "whenever",
      "every time",
      "as soon as",
      "unless",
      "provided that",
      "as long as",
      "the moment",
      "once",
    ],
    commonMistakes: [
      {
        mistake: "Using 'will' in the if-clause",
        incorrect: "If it will rain, I stay home.",
        correct: "If it rains, I stay home.",
        explanation: "Zero conditional uses present simple in both clauses",
      },
      {
        mistake: "Mixing with future tense",
        incorrect: "If you heat water, it will boil.",
        correct: "If you heat water, it boils.",
        explanation:
          "Zero conditional expresses general truths, not future events",
      },
      {
        mistake: "Using past tense incorrectly",
        incorrect: "If you heated water, it boiled.",
        correct: "If you heat water, it boils.",
        explanation: "Zero conditional uses present simple for timeless facts",
      },
    ],
    practiceExercises: [
      {
        type: "Fill in the blanks",
        instruction: "Complete with the correct form of the verb",
        examples: [
          "If you _____ (mix) yellow and blue, you _____ (get) green.",
          "When people _____ (not eat) enough, they _____ (feel) hungry.",
        ],
      },
      {
        type: "Transformation",
        instruction: "Change 'when' to 'if' and vice versa",
        examples: [
          "When it's cold, water freezes. → If it's cold, water freezes.",
          "If you touch hot metal, it burns. → When you touch hot metal, it burns.",
        ],
      },
    ],
    notes: [
      "Không dùng **will** trong mệnh đề **if** (Zero Conditional)",
      "Có thể thay thế **if** bằng **when, whenever, as soon as**",
      "Dùng cho sự thật chung chung, không phụ thuộc vào thời gian cụ thể",
      "Modal verbs có thể xuất hiện trong mệnh đề chính để thể hiện khả năng, cho phép, bắt buộc",
      "**Unless** = **if not**: Unless you hurry, you'll be late.",
    ],
  },

  "First Conditional": {
    level: "A2-B2",
    difficulty: "Beginner to Upper-Intermediate",
    frequency: "Very High",
    forms: {
      affirmative:
        "If + present simple, will + base verb • e.g., If it rains, I will stay home",
      negative:
        "If + present simple, won't + base verb • e.g., If you don't hurry, you won't catch the bus",
      question:
        "If + present simple, will + subject + base verb? • e.g., If I call you, will you answer?",
      withModals:
        "If + present simple, can/may/might/should + base verb • e.g., If you practice, you might improve",
      withBeGoingTo:
        "If + present simple, be going to + base verb • e.g., If he arrives late, I'm going to be angry",
      withImperative:
        "If + present simple, imperative • e.g., If you see John, tell him to call me",
      negativeIf:
        "If + subject + don't/doesn't + base verb, will + base verb • e.g., If she doesn't study, she will fail",
      questionWord:
        "What/Where/When + will + subject + verb + if + present simple? • e.g., What will you do if it rains?",
    },
    usage: [
      {
        type: "Real future possibilities",
        description: "Tình huống có thể xảy ra trong tương lai (khả năng cao)",
        example: "If I save enough money, I will buy a car.",
        level: "A2",
        frequency: "Very common",
        probability: "High (50-90%)",
        situations: ["Future plans", "Realistic scenarios", "Probable events"],
      },
      {
        type: "Promises and threats",
        description: "Lời hứa, đe dọa, cảnh báo",
        example: "If you behave well, I'll give you a present.",
        level: "A2-B1",
        frequency: "Common",
        probability: "Dependent on behavior",
        situations: ["Parent-child", "Negotiations", "Agreements"],
      },
      {
        type: "Plans and intentions",
        description: "Kế hoạch và ý định trong tương lai",
        example: "If the weather is nice tomorrow, we'll go to the beach.",
        level: "A2-B1",
        frequency: "Very common",
        probability: "Medium to High",
        situations: ["Weekend plans", "Vacation", "Social activities"],
      },
      {
        type: "Predictions",
        description: "Dự đoán dựa trên điều kiện hiện tại",
        example: "If you keep eating junk food, you'll get sick.",
        level: "B1",
        frequency: "Common",
        probability: "Medium to High",
        situations: ["Health advice", "Consequences", "Logical outcomes"],
      },
      {
        type: "Offers and suggestions",
        description: "Đề nghị và gợi ý",
        example: "If you're hungry, I'll make you a sandwich.",
        level: "A2-B1",
        frequency: "Common",
        probability: "High (willing to do)",
        situations: ["Hospitality", "Help offering", "Social courtesy"],
      },
      {
        type: "Warnings and advice",
        description: "Cảnh báo và lời khuyên",
        example: "If you don't wear a helmet, you might get hurt.",
        level: "A2-B1",
        frequency: "Common",
        probability: "Variable",
        situations: ["Safety", "Health", "Precautions"],
      },
      {
        type: "Automatic responses",
        description: "Phản ứng tự động trong tương lai",
        example: "If the alarm goes off, I'll wake up immediately.",
        level: "B1",
        frequency: "Common",
        probability: "Very High",
        situations: ["Systems", "Procedures", "Scheduled events"],
      },
    ],
    timeMarkers: [
      "if",
      "when",
      "as soon as",
      "before",
      "after",
      "until",
      "unless",
      "in case",
      "provided that",
      "as long as",
      "the moment",
      "once",
      "while",
    ],
    modalVariations: {
      will: {
        certainty: "Very high",
        example: "If it rains, I will stay inside.",
      },
      might: {
        certainty: "Low to medium",
        example: "If I have time, I might visit you.",
      },
      may: {
        certainty: "Medium",
        example: "If you ask nicely, you may borrow my car.",
      },
      can: {
        certainty: "Ability/possibility",
        example: "If you practice, you can improve.",
      },
      should: {
        certainty: "Advice/expectation",
        example: "If you're sick, you should see a doctor.",
      },
      could: {
        certainty: "Possibility/ability",
        example: "If we hurry, we could catch the train.",
      },
    },
    commonMistakes: [
      {
        mistake: "Using 'will' in the if-clause",
        incorrect: "If it will rain, I will stay home.",
        correct: "If it rains, I will stay home.",
        explanation: "Never use 'will' after 'if' in conditional sentences",
      },
      {
        mistake: "Wrong modal choice",
        incorrect: "If you study hard, you will might pass.",
        correct: "If you study hard, you might pass.",
        explanation: "Don't combine 'will' with other modals",
      },
      {
        mistake: "Mixing conditionals",
        incorrect: "If I had money, I will buy a car.",
        correct: "If I have money, I will buy a car.",
        explanation: "First conditional uses present simple in if-clause",
      },
    ],
    usageExamples: {
      "Future plan": "If I get promoted, I will move to a bigger apartment.",
      Promise: "If you clean your room, I'll let you watch TV.",
      Threat: "If you don't stop talking, I'll tell the teacher.",
      Prediction: "If you continue like this, you'll succeed.",
    },
    notes: [
      "Không dùng **will** trong mệnh đề **if**",
      "Có thể thay **will** bằng **be going to** để thể hiện ý định mạnh hơn",
      "**May/might** thể hiện khả năng thấp hơn **will**",
      "**Should** thể hiện lời khuyên hoặc nghĩa vụ",
      "**Can** thể hiện khả năng hoặc cho phép",
      "Time clauses (when, as soon as, before, after, until) cũng dùng present simple cho tương lai",
    ],
  },

  "Second Conditional": {
    level: "B1-B2",
    difficulty: "Intermediate to Upper-Intermediate",
    frequency: "High",
    forms: {
      affirmative:
        "If + past simple, would + base verb • e.g., If I won the lottery, I would travel the world",
      negative:
        "If + past simple, wouldn't + base verb • e.g., If I weren't busy, I wouldn't miss the party",
      question:
        "If + past simple, would + subject + base verb? • e.g., If you had more time, would you learn a new language?",
      withModals:
        "If + past simple, could/might/should + base verb • e.g., If I were taller, I could play basketball",
      negativeIf:
        "If + subject + didn't + base verb, would + base verb • e.g., If he didn't work late, he would be happier",
      withWere:
        "If + subject + were + complement, would + base verb • e.g., If I were you, I would accept",
      questionWord:
        "What/Where/How + would + subject + verb + if + past simple? • e.g., What would you do if you won?",
    },
    usage: [
      {
        type: "Unreal present situations",
        description: "Tình huống không có thật ở hiện tại",
        example: "If I were rich, I would help the poor.",
        level: "B1",
        frequency: "Very common",
        reality: "Completely unreal",
        situations: ["Dreams", "Fantasies", "Imaginary scenarios"],
      },
      {
        type: "Unlikely future events",
        description: "Sự kiện khó có thể xảy ra trong tương lai",
        example: "If aliens visited Earth, people would be shocked.",
        level: "B1-B2",
        frequency: "Common",
        reality: "Highly unlikely",
        situations: [
          "Science fiction",
          "Remote possibilities",
          "Hypothetical events",
        ],
      },
      {
        type: "Hypothetical situations",
        description: "Tình huống giả định, mơ ước",
        example: "If I could fly, I would visit every country.",
        level: "B1",
        frequency: "Very common",
        reality: "Impossible",
        situations: ["Wishes", "Dreams", "Impossible scenarios"],
      },
      {
        type: "Polite requests and suggestions",
        description: "Yêu cầu và đề nghị lịch sự",
        example: "If you could help me, I would be grateful.",
        level: "B1-B2",
        frequency: "Common",
        reality: "Possible but polite",
        situations: ["Formal requests", "Business", "Diplomatic language"],
      },
      {
        type: "Giving advice",
        description: "Đưa ra lời khuyên",
        example: "If I were you, I would accept the offer.",
        level: "B1",
        frequency: "Very common",
        reality: "Hypothetical role reversal",
        situations: ["Advice giving", "Recommendations", "Suggestions"],
      },
      {
        type: "Expressing preferences",
        description: "Thể hiện sở thích trong tình huống giả định",
        example: "If I had a choice, I would live by the sea.",
        level: "B1-B2",
        frequency: "Common",
        reality: "Unreal preference",
        situations: ["Preferences", "Ideal situations", "Wishes"],
      },
      {
        type: "Criticizing gently",
        description: "Phê bình nhẹ nhàng, gián tiếp",
        example:
          "If you were more careful, you wouldn't make so many mistakes.",
        level: "B2",
        frequency: "Common",
        reality: "Indirect criticism",
        situations: [
          "Feedback",
          "Gentle criticism",
          "Suggestions for improvement",
        ],
      },
    ],
    timeMarkers: [
      "if",
      "even if",
      "suppose",
      "supposing",
      "imagine if",
      "what if",
      "if only",
      "in case",
    ],
    modalVariations: {
      would: {
        certainty: "Hypothetical result",
        example: "If I won, I would celebrate.",
      },
      could: {
        certainty: "Hypothetical ability",
        example: "If I were taller, I could reach the shelf.",
      },
      might: {
        certainty: "Hypothetical possibility",
        example: "If it were sunny, we might go out.",
      },
      should: {
        certainty: "Hypothetical advice",
        example: "If you were sick, you should rest.",
      },
    },
    specialStructures: {
      ifIWereYou: {
        structure: "If I were you, I would...",
        usage: "Giving advice",
        examples: [
          "If I were you, I would take that job.",
          "If I were you, I wouldn't worry about it.",
        ],
      },
      ifOnly: {
        structure: "If only + past simple",
        usage: "Expressing wishes about present",
        examples: ["If only I had more time!", "If only she were here!"],
      },
      supposeSupposing: {
        structure: "Suppose/Supposing + past simple",
        usage: "Introducing hypothetical scenarios",
        examples: [
          "Suppose you won the lottery, what would you do?",
          "Supposing he didn't come, what would we do?",
        ],
      },
    },
    commonMistakes: [
      {
        mistake: "Using 'was' instead of 'were'",
        incorrect: "If I was rich, I would help people.",
        correct: "If I were rich, I would help people.",
        explanation:
          "Use 'were' for all persons in Second Conditional (subjunctive mood)",
      },
      {
        mistake: "Using 'would' in if-clause",
        incorrect: "If I would have money, I would buy a car.",
        correct: "If I had money, I would buy a car.",
        explanation: "Never use 'would' in the if-clause of Second Conditional",
      },
      {
        mistake: "Mixing with other conditionals",
        incorrect: "If I win the lottery, I would travel.",
        correct: "If I won the lottery, I would travel.",
        explanation: "Second conditional uses past simple in if-clause",
      },
    ],
    usageExamples: {
      "Unreal present": "If I lived on Mars, I would build a space farm.",
      Advice: "If I were you, I would study harder.",
      "Polite request":
        "If you could send me the report, I would appreciate it.",
      Dream: "If I could speak every language, I would become a translator.",
    },
    notes: [
      "Không dùng **would** trong mệnh đề **if**.",
      "Dùng **were** thay cho **was** với **I/he/she/it** trong văn viết hoặc trang trọng.",
      "Diễn tả điều **không thật trong hiện tại** hoặc **rất khó xảy ra trong tương lai**.",
      "Thường dùng trong câu hỏi giả định, mơ ước hoặc lời khuyên.",
      "**Could/Should/Might** có thể thay **would** để thay đổi sắc thái (khả năng, gợi ý, v.v.).",
      "**If only** + past simple = ước gì: If only I had more time!",
    ],
  },

  "Third Conditional": {
    level: "B2-C1",
    difficulty: "Upper-Intermediate to Advanced",
    frequency: "High",
    forms: {
      affirmative:
        "If + past perfect, would have + past participle • e.g., If I had studied, I would have passed the exam",
      negative:
        "If + past perfect, would not have + past participle • e.g., If I had known, I would not have come",
      question:
        "If + past perfect, would + subject + have + past participle? • e.g., If I had seen you, would I have spoken?",
      withModals:
        "If + past perfect, could/might/should + have + past participle • e.g., If you had asked, I could have helped",
      negativeIf:
        "If + subject + hadn't + past participle, would have + past participle • e.g., If he hadn't left early, he would have met you",
      questionWord:
        "What/Where/How + would + subject + have + past participle + if + past perfect? • e.g., What would you have done if you had been there?",
      inversion:
        "Had + subject + past participle, would have + past participle • e.g., Had I known, I would have helped",
    },
    usage: [
      {
        type: "Unreal situations in the past",
        description:
          "Nói về tình huống không có thật đã xảy ra trong quá khứ (giả định quá khứ khác đi)",
        example: "If I had left earlier, I wouldn't have missed the train.",
        level: "B2",
        frequency: "Very common",
        reality: "Completely unreal past",
        situations: [
          "Alternative past scenarios",
          "Imaginary past events",
          "Counterfactual history",
        ],
      },
      {
        type: "Regret or criticism",
        description: "Thể hiện sự tiếc nuối hoặc phê bình điều gì đó đã xảy ra",
        example: "If you had told me, I could have helped you.",
        level: "B2-C1",
        frequency: "Very common",
        reality: "Past opportunity missed",
        situations: ["Regret", "Blame", "Missed opportunities"],
      },
      {
        type: "Lost opportunities",
        description: "Cơ hội đã mất, điều không thể thay đổi",
        example: "If she had applied earlier, she would have gotten the job.",
        level: "B2-C1",
        frequency: "Common",
        reality: "Irreversible past",
        situations: ["Job applications", "Investments", "Life decisions"],
      },
      {
        type: "Different past outcomes",
        description: "Kết quả khác có thể đã xảy ra trong quá khứ",
        example:
          "If we had taken the other route, we would have arrived sooner.",
        level: "B2",
        frequency: "Common",
        reality: "Alternative past result",
        situations: ["Travel", "Decisions", "Choices"],
      },
      {
        type: "Expressing relief",
        description: "Thể hiện sự nhẹ nhõm về điều đã không xảy ra",
        example:
          "If I hadn't worn my seatbelt, I could have been seriously injured.",
        level: "B2-C1",
        frequency: "Common",
        reality: "Fortunate past avoidance",
        situations: ["Accidents", "Near misses", "Lucky escapes"],
      },
      {
        type: "Hypothetical past advice",
        description: "Lời khuyên giả định cho tình huống quá khứ",
        example:
          "If I had been in your position, I would have done the same thing.",
        level: "C1",
        frequency: "Common",
        reality: "Retrospective advice",
        situations: ["Counseling", "Understanding", "Empathy"],
      },
    ],
    timeMarkers: [
      "if",
      "even if",
      "in case",
      "had (subject)",
      "by the time",
      "before",
      "after",
      "if only",
      "unless",
    ],
    modalVariations: {
      wouldHave: {
        certainty: "Hypothetical past result",
        example: "If I had known, I would have come.",
      },
      couldHave: {
        certainty: "Hypothetical past ability",
        example: "If you had asked, I could have helped.",
      },
      mightHave: {
        certainty: "Hypothetical past possibility",
        example: "If we had left earlier, we might have caught the train.",
      },
      shouldHave: {
        certainty: "Hypothetical past obligation",
        example: "If you had been more careful, you should have checked twice.",
      },
    },
    specialStructures: {
      inversion: {
        structure:
          "Had + subject + past participle, would have + past participle",
        usage: "Formal/literary style, omitting 'if'",
        examples: [
          "Had I known earlier, I would have prepared better.",
          "Had she studied harder, she would have passed the exam.",
        ],
      },
      ifOnlyPastPerfect: {
        structure: "If only + past perfect",
        usage: "Expressing strong regret about the past",
        examples: [
          "If only I had listened to your advice!",
          "If only we had left earlier!",
        ],
      },
      unlessClause: {
        structure: "Unless + past perfect, would have + past participle",
        usage: "Negative condition in the past",
        examples: [
          "Unless you had told me, I wouldn't have known.",
          "Unless they had invited us, we wouldn't have gone.",
        ],
      },
    },
    commonMistakes: [
      {
        mistake: "Using 'would have' in if-clause",
        incorrect: "If I would have known, I would have helped.",
        correct: "If I had known, I would have helped.",
        explanation:
          "Never use 'would have' in the if-clause of Third Conditional",
      },
      {
        mistake: "Wrong perfect form",
        incorrect: "If I have studied, I would have passed.",
        correct: "If I had studied, I would have passed.",
        explanation: "Third conditional requires past perfect in if-clause",
      },
      {
        mistake: "Mixing with other conditionals",
        incorrect: "If I had more time, I would have finished.",
        correct: "If I had had more time, I would have finished.",
        explanation:
          "Both clauses must refer to past time in Third Conditional",
      },
    ],
    usageExamples: {
      "Unreal past situation":
        "If I had known about the meeting, I would have come.",
      Regret: "If she had studied medicine, she could have become a doctor.",
      Criticism: "If you had been more careful, you wouldn't have broken it.",
      "Lost opportunity":
        "If I had invested then, I would have made a fortune.",
    },
    notes: [
      "**Không dùng 'would have' trong mệnh đề if**.",
      "Câu điều kiện loại 3 chỉ dùng để nói về **quá khứ** – không dùng cho hiện tại hoặc tương lai.",
      "Có thể thay **would have** bằng **could have**, **might have** tùy vào mức độ chắc chắn.",
      "Dùng để thể hiện **giá như**, **ước gì**, **lỗi lầm**, **sự tiếc nuối**.",
      "Cũng có thể viết dạng đảo ngữ: **Had I known, I would have helped.**",
      "**If only** + past perfect = tiếc nuối: If only I had studied harder!",
    ],
  },

  "Mixed Conditional": {
    level: "C1-C2",
    difficulty: "Advanced to Proficiency",
    frequency: "Medium",
    forms: {
      structure_1:
        "If + past perfect, would + base verb (past → present) • e.g., If I had studied medicine, I would be a doctor now",
      structure_2:
        "If + past simple, would have + past participle (present → past) • e.g., If I were more careful, I wouldn't have made that mistake",
      structure_3:
        "If + past perfect, could/might + base verb • e.g., If I had learned to drive, I could help you move",
      structure_4:
        "If + past simple, could/might have + past participle • e.g., If she were more confident, she might have spoken up",
      withTimeMarkers:
        "If + past perfect, would + base verb + time marker • e.g., If I had invested then, I would be rich now",
      negativeForm1:
        "If + past perfect negative, wouldn't + base verb • e.g., If I hadn't dropped out, I would be a graduate now",
      negativeForm2:
        "If + past simple negative, wouldn't have + past participle • e.g., If I weren't so stubborn, I wouldn't have lost friends",
    },
    usage: [
      {
        type: "Past condition affecting present",
        description:
          "Giả định một việc **không xảy ra trong quá khứ** dẫn đến kết quả khác ở hiện tại",
        example: "If he had taken the job, he would be rich now.",
        level: "C1",
        frequency: "Common",
        timeRelation: "Past cause → Present result",
        situations: [
          "Career decisions",
          "Life choices",
          "Educational paths",
          "Relationship decisions",
        ],
      },
      {
        type: "Present condition affecting past",
        description:
          "Giả định điều kiện hiện tại (không có thật) có thể đã thay đổi kết quả trong quá khứ",
        example: "If I were taller, I would have joined the basketball team.",
        level: "C1",
        frequency: "Common",
        timeRelation: "Present state → Past result",
        situations: [
          "Physical characteristics",
          "Personality traits",
          "Skills",
          "Circumstances",
        ],
      },
      {
        type: "Complex hypothetical scenarios",
        description: "Tình huống giả định phức tạp kết hợp nhiều mốc thời gian",
        example:
          "If I had been born in another country, I might speak a different language now.",
        level: "C1-C2",
        frequency: "Medium",
        timeRelation: "Past event → Present ability",
        situations: [
          "Alternative life scenarios",
          "Cultural differences",
          "Language acquisition",
        ],
      },
      {
        type: "Regret about permanent consequences",
        description: "Tiếc nuối về hậu quả lâu dài từ quyết định trong quá khứ",
        example:
          "If I had chosen a different career, I would be happier today.",
        level: "C1-C2",
        frequency: "Common",
        timeRelation: "Past decision → Present state",
        situations: [
          "Career regrets",
          "Life satisfaction",
          "Major life decisions",
        ],
      },
      {
        type: "Character-based past actions",
        description: "Tính cách hiện tại ảnh hưởng đến hành động quá khứ",
        example: "If I weren't so shy, I would have asked her out years ago.",
        level: "C1",
        frequency: "Common",
        timeRelation: "Present personality → Past action",
        situations: [
          "Personality traits",
          "Social interactions",
          "Missed opportunities",
        ],
      },
      {
        type: "Skill-based retrospection",
        description:
          "Kỹ năng hiện tại có thể đã tạo ra kết quả khác trong quá khứ",
        example:
          "If I were more organized, I wouldn't have missed that deadline last month.",
        level: "C1-C2",
        frequency: "Medium",
        timeRelation: "Present skill → Past performance",
        situations: [
          "Work performance",
          "Academic achievement",
          "Personal organization",
        ],
      },
    ],
    timeMarkers: [
      "if",
      "even if",
      "had (subject)",
      "were (subject)",
      "now",
      "then",
      "today",
      "currently",
      "at present",
      "these days",
      "nowadays",
      "back then",
      "at that time",
    ],
    complexStructures: {
      pastToPresentChain: {
        description: "Chain of past events affecting present",
        structure: "If + past perfect + past perfect, would + base verb + now",
        example:
          "If I had studied harder and had gotten into medical school, I would be a doctor now.",
      },
      presentToPastChain: {
        description: "Multiple present conditions affecting past",
        structure:
          "If + past simple + and + past simple, would have + past participle",
        example:
          "If I were more confident and more outgoing, I would have made more friends in college.",
      },
      timeContrastMarkers: {
        description: "Emphasizing time contrast",
        examples: [
          "If I had invested back then, I would be wealthy today.",
          "If I were more patient now, I wouldn't have lost my temper yesterday.",
        ],
      },
    },
    modalVariations: {
      wouldBe: {
        usage: "Present result from past condition",
        example: "If I had studied medicine, I would be a doctor.",
      },
      couldBe: {
        usage: "Present possibility from past condition",
        example: "If I had learned to code, I could be working in tech.",
      },
      mightBe: {
        usage: "Present uncertainty from past condition",
        example: "If I had moved abroad, I might be speaking fluent French.",
      },
      wouldHave: {
        usage: "Past result from present condition",
        example: "If I were braver, I would have taken that risk.",
      },
      couldHave: {
        usage: "Past possibility from present condition",
        example:
          "If I were more athletic, I could have played professional sports.",
      },
      mightHave: {
        usage: "Past uncertainty from present condition",
        example: "If I were more social, I might have met my soulmate earlier.",
      },
    },
    commonMistakes: [
      {
        mistake: "Wrong time reference in mixed conditionals",
        incorrect: "If I had more money, I would have bought a house.",
        correct: "If I had saved more money, I would have a house now.",
        explanation:
          "Mixed conditionals require different time references in each clause",
      },
      {
        mistake: "Confusing past perfect with past simple",
        incorrect: "If I was born rich, I would be successful now.",
        correct: "If I had been born rich, I would be successful now.",
        explanation: "Use past perfect for past conditions affecting present",
      },
      {
        mistake: "Using wrong modal in result clause",
        incorrect: "If I had studied medicine, I will be a doctor.",
        correct: "If I had studied medicine, I would be a doctor now.",
        explanation:
          "Use 'would' not 'will' in mixed conditional result clauses",
      },
    ],
    usageExamples: {
      "Past → Present": "If he had taken the right path, he would be safe now.",
      "Present → Past":
        "If she were more careful, she wouldn't have broken the vase.",
      "Complex scenario":
        "If I had been born wealthy, I might be less motivated to work hard now.",
      "Permanent consequence":
        "If I had learned a musical instrument, I could perform today.",
    },
    notes: [
      "Câu điều kiện hỗn hợp dùng khi **nguyên nhân và kết quả không xảy ra cùng một thời điểm**.",
      "Phân biệt rõ: điều kiện và kết quả thuộc **thì khác nhau**.",
      "Cần nắm vững câu điều kiện loại 2 và 3 để hiểu và sử dụng loại hỗn hợp chính xác.",
      "Cũng có thể viết đảo ngữ: **Had I known, I would be more prepared now.**",
      "Thường dùng ở trình độ cao để diễn tả suy nghĩ phức tạp về mối quan hệ thời gian.",
    ],
  },

  "Fourth Conditional (Unless)": {
    level: "B1-B2",
    difficulty: "Intermediate to Upper-Intermediate",
    frequency: "Medium",
    forms: {
      structure:
        "Unless + present simple, will + base verb • e.g., Unless it rains, we will go to the beach",
      negative:
        "Unless + present simple, won't + base verb • e.g., Unless you study, you won't pass",
      equivalent: "Unless = If not • Unless you hurry = If you don't hurry",
      withPastTense:
        "Unless + past simple, would + base verb • e.g., Unless I were rich, I wouldn't buy that car",
      withPastPerfect:
        "Unless + past perfect, would have + past participle • e.g., Unless you had told me, I wouldn't have known",
      questionForm:
        "What will happen unless...? • e.g., What will happen unless we leave now?",
      withModals:
        "Unless + present simple, might/could/should + base verb • e.g., Unless you practice, you might not improve",
    },
    usage: [
      {
        type: "Negative conditions",
        description: "Diễn tả điều kiện phủ định (trừ khi)",
        example: "Unless you apologize, she won't forgive you.",
        level: "B1",
        frequency: "Common",
        emphasis: "Necessity of condition",
        situations: ["Requirements", "Necessary actions", "Prerequisites"],
      },
      {
        type: "Warnings and threats",
        description: "Cảnh báo và đe dọa",
        example: "Unless you stop smoking, you'll get sick.",
        level: "B1",
        frequency: "Common",
        emphasis: "Urgency and consequence",
        situations: [
          "Health warnings",
          "Safety alerts",
          "Disciplinary actions",
        ],
      },
      {
        type: "Necessary conditions",
        description: "Điều kiện cần thiết phải có",
        example: "Unless we leave now, we'll miss the flight.",
        level: "B1-B2",
        frequency: "Common",
        emphasis: "Critical timing",
        situations: [
          "Deadlines",
          "Time-sensitive situations",
          "Critical decisions",
        ],
      },
      {
        type: "Ultimatums",
        description: "Tối hậu thư, điều kiện cuối cùng",
        example: "Unless you change your attitude, I'm leaving.",
        level: "B2",
        frequency: "Medium",
        emphasis: "Final chance",
        situations: [
          "Relationships",
          "Business negotiations",
          "Final warnings",
        ],
      },
      {
        type: "Exceptions to general rules",
        description: "Ngoại lệ của quy tắc chung",
        example: "Unless it's an emergency, don't call me after 10 PM.",
        level: "B1-B2",
        frequency: "Common",
        emphasis: "Special circumstances",
        situations: ["Rules and regulations", "Policies", "Guidelines"],
      },
    ],
    timeMarkers: [
      "unless",
      "except if",
      "if not",
      "only if",
      "except when",
      "save for",
      "but for",
    ],
    equivalentStructures: {
      ifNot: {
        description: "Direct equivalent using 'if not'",
        examples: [
          "Unless you hurry = If you don't hurry",
          "Unless it rains = If it doesn't rain",
          "Unless we act = If we don't act",
        ],
      },
      onlyIf: {
        description: "Positive condition using 'only if'",
        examples: [
          "I'll go unless it rains = I'll go only if it doesn't rain",
          "Unless you study, you'll fail = You'll pass only if you study",
        ],
      },
      exceptIf: {
        description: "Alternative form with 'except if'",
        examples: [
          "I work every day except if I'm sick = I work every day unless I'm sick",
        ],
      },
    },
    strengthLevels: {
      mild: {
        description: "Gentle condition",
        example: "Unless you mind, I'll open the window.",
        situations: ["Polite requests", "Consideration"],
      },
      moderate: {
        description: "Standard condition",
        example: "Unless you book early, you won't get tickets.",
        situations: ["Normal requirements", "Standard warnings"],
      },
      strong: {
        description: "Urgent condition",
        example: "Unless you leave now, you'll be arrested.",
        situations: ["Emergencies", "Serious threats"],
      },
      extreme: {
        description: "Critical condition",
        example: "Unless we act immediately, people will die.",
        situations: ["Life-or-death", "Crisis situations"],
      },
    },
    commonMistakes: [
      {
        mistake: "Using 'not' after 'unless'",
        incorrect: "Unless you don't study, you won't pass.",
        correct: "Unless you study, you won't pass.",
        explanation:
          "'Unless' already means 'if not', so don't add another negative",
      },
      {
        mistake: "Double negative confusion",
        incorrect: "Unless you don't come, I won't be happy.",
        correct: "Unless you come, I won't be happy.",
        explanation: "Avoid double negatives with 'unless'",
      },
      {
        mistake: "Wrong conditional type mixing",
        incorrect: "Unless I had money, I will buy it.",
        correct: "Unless I have money, I won't buy it.",
        explanation: "Match the conditional type consistently",
      },
    ],
    usageExamples: {
      Warning: "Unless you wear a seatbelt, you might get hurt.",
      Threat: "Unless you tell the truth, I'll call the police.",
      "Necessary condition": "Unless we get permission, we can't proceed.",
    },
    notes: [
      "**Unless** luôn mang nghĩa phủ định, không dùng **not** sau **unless**",
      "**Unless** = **If not**: Unless you come = If you don't come",
      "Có thể dùng với các conditional khác: Unless you had told me (past), I wouldn't have known",
      "Thường dùng để nhấn mạnh tính cấp thiết hoặc tầm quan trọng của điều kiện",
    ],
  },

  "Advanced Conditional Structures": {
    level: "C1-C2",
    difficulty: "Advanced to Proficiency",
    frequency: "Medium to Low",
    forms: {
      inversion:
        "Had I known, Should you need help, Were I to tell you • Đảo ngữ trong câu điều kiện",
      supposeSupposing:
        "Suppose/Supposing (that) + clause • e.g., Suppose you won the lottery...",
      ifOnly:
        "If only + past simple/past perfect • e.g., If only I were taller! If only I had studied!",
      otherwiseOrElse:
        "... otherwise/or else + clause • e.g., Study hard, otherwise you'll fail",
      providedThat:
        "Provided (that)/Providing (that)/As long as + clause • e.g., I'll help provided you pay me",
      inCase:
        "In case + present simple/should • e.g., Take an umbrella in case it rains",
      whatIf: "What if + clause • e.g., What if we're wrong?",
      imagineIf: "Imagine if + clause • e.g., Imagine if you could time travel",
      onConditionThat:
        "On condition that + clause • e.g., I'll lend you money on condition that you pay interest",
    },
    usage: [
      {
        type: "Formal inversions",
        description: "Đảo ngữ trang trọng trong văn viết",
        example:
          "Had I been informed earlier, I would have attended the meeting.",
        level: "C1-C2",
        frequency: "Low",
        register: "Very formal",
        situations: [
          "Academic writing",
          "Legal documents",
          "Literary texts",
          "Formal speeches",
        ],
      },
      {
        type: "Hypothetical introductions",
        description: "Giới thiệu tình huống giả định",
        example:
          "Supposing you could change one thing about your life, what would it be?",
        level: "C1",
        frequency: "Medium",
        register: "Neutral to formal",
        situations: [
          "Discussions",
          "Debates",
          "Thought experiments",
          "Interviews",
        ],
      },
      {
        type: "Wishes and regrets",
        description: "Điều ước và hối tiếc",
        example: "If only I had more time to spend with family!",
        level: "B2-C1",
        frequency: "Medium",
        register: "Emotional",
        situations: [
          "Personal reflection",
          "Regret expression",
          "Wishful thinking",
        ],
      },
      {
        type: "Alternative consequences",
        description: "Hậu quả thay thế",
        example: "You must leave now, otherwise you'll be late.",
        level: "B2-C1",
        frequency: "Common",
        register: "Neutral",
        situations: ["Warnings", "Instructions", "Logical consequences"],
      },
      {
        type: "Conditional provisions",
        description: "Điều kiện quy định, thỏa thuận",
        example:
          "I'll lend you money provided that you pay me back next month.",
        level: "B2-C1",
        frequency: "Medium",
        register: "Formal",
        situations: [
          "Contracts",
          "Agreements",
          "Negotiations",
          "Business deals",
        ],
      },
      {
        type: "Precautionary measures",
        description: "Biện pháp phòng ngừa",
        example: "I'll take my phone in case I need to call for help.",
        level: "B1-B2",
        frequency: "Common",
        register: "Neutral",
        situations: ["Planning", "Safety measures", "Backup plans"],
      },
      {
        type: "Speculative scenarios",
        description: "Tình huống suy đoán, giả thuyết",
        example: "What if we're completely wrong about this theory?",
        level: "C1",
        frequency: "Medium",
        register: "Analytical",
        situations: [
          "Scientific discussions",
          "Problem-solving",
          "Brainstorming",
        ],
      },
      {
        type: "Imaginative scenarios",
        description: "Tình huống tưởng tượng sáng tạo",
        example: "Imagine if humans could communicate telepathically.",
        level: "B2-C1",
        frequency: "Medium",
        register: "Creative",
        situations: [
          "Creative writing",
          "Philosophy",
          "Science fiction",
          "Thought experiments",
        ],
      },
    ],
    timeMarkers: [
      "had/should/were (inversion)",
      "suppose",
      "supposing",
      "if only",
      "otherwise",
      "or else",
      "provided that",
      "providing that",
      "as long as",
      "in case",
      "on condition that",
      "given that",
      "what if",
      "imagine if",
      "assuming that",
      "granted that",
      "seeing that",
    ],
    inversionTypes: {
      hadInversion: {
        structure:
          "Had + subject + past participle, would have + past participle",
        usage: "Third conditional without 'if'",
        examples: [
          "Had I known earlier, I would have prepared better.",
          "Had she studied medicine, she would have become a doctor.",
        ],
        register: "Very formal",
      },
      shouldInversion: {
        structure: "Should + subject + base verb, will/would + base verb",
        usage: "First conditional (polite/formal) or Second conditional",
        examples: [
          "Should you need assistance, please contact us.",
          "Should he arrive early, we would be surprised.",
        ],
        register: "Formal",
      },
      wereInversion: {
        structure: "Were + subject + to + base verb, would + base verb",
        usage: "Second conditional (formal style)",
        examples: [
          "Were I to win the lottery, I would donate half to charity.",
          "Were they to discover the truth, there would be consequences.",
        ],
        register: "Very formal",
      },
    },
    alternativeIntroducers: {
      suppose: {
        usage: "Introducing hypothetical scenarios (neutral)",
        structure: "Suppose + clause",
        examples: [
          "Suppose we miss the train, what then?",
          "Suppose you could travel anywhere, where would you go?",
        ],
      },
      supposing: {
        usage: "Introducing hypothetical scenarios (slightly more formal)",
        structure: "Supposing + clause",
        examples: [
          "Supposing the weather turns bad, we'll stay inside.",
          "Supposing you were offered the job, would you take it?",
        ],
      },
      whatIf: {
        usage: "Exploring possibilities or concerns",
        structure: "What if + clause",
        examples: [
          "What if we're making a mistake?",
          "What if nobody comes to the party?",
        ],
      },
      imagineIf: {
        usage: "Creative or fantastical scenarios",
        structure: "Imagine if + clause",
        examples: [
          "Imagine if we could read people's minds.",
          "Imagine if gravity suddenly stopped working.",
        ],
      },
    },
    conditionalProvisions: {
      providedThat: {
        meaning: "On the condition that (formal)",
        usage: "Setting strict conditions",
        examples: [
          "I'll invest in your company provided that you show me a detailed business plan.",
          "You can use my car provided that you return it with a full tank.",
        ],
      },
      asLongAs: {
        meaning: "On the condition that (less formal)",
        usage: "Setting ongoing conditions",
        examples: [
          "You can stay here as long as you help with the housework.",
          "I don't mind the noise as long as it stops by 10 PM.",
        ],
      },
      onConditionThat: {
        meaning: "With the specific requirement that (very formal)",
        usage: "Legal or business contexts",
        examples: [
          "The loan is approved on condition that you provide collateral.",
          "We'll proceed on condition that all parties agree to the terms.",
        ],
      },
    },
    commonMistakes: [
      {
        mistake: "Incorrect inversion structure",
        incorrect: "If I had known, I would have helped.",
        correct: "Had I known, I would have helped.",
        explanation:
          "In inversion, omit 'if' and move auxiliary verb to the beginning",
      },
      {
        mistake: "Wrong register mixing",
        incorrect: "Had you told me, I would've helped ya.",
        correct: "Had you told me, I would have assisted you.",
        explanation: "Inversion is formal, so use formal language throughout",
      },
      {
        mistake: "Confusing 'in case' with 'if'",
        incorrect: "I'll take an umbrella if it rains.",
        correct: "I'll take an umbrella in case it rains.",
        explanation: "'In case' is for precaution, 'if' is for condition",
      },
    ],
  },

  "Conditional Perfect and Future in the Past": {
    level: "C1-C2",
    difficulty: "Advanced to Proficiency",
    frequency: "Low",
    forms: {
      conditionalPerfect:
        "If + past perfect, would have been + -ing • e.g., If I had started earlier, I would have been working for hours by now",
      futureInPast:
        "He said he would call if he had time • Reported conditionals",
      modalPerfectConditional:
        "If + past perfect, could/might/should have been + -ing • e.g., If you had told me, I could have been helping you all day",
      timeSpecificConditional:
        "If + past perfect + time marker, would have + past participle + by + time • e.g., If I had left at 9, I would have arrived by noon",
    },
    usage: [
      {
        type: "Extended past hypothetical actions",
        description: "Hành động giả định kéo dài trong quá khứ",
        example:
          "If I had accepted that job, I would have been living in Tokyo for five years now.",
        level: "C1-C2",
        frequency: "Rare",
        complexity: "Very high",
        situations: [
          "Complex time relationships",
          "Extended hypothetical scenarios",
        ],
      },
      {
        type: "Reported conditionals",
        description: "Câu điều kiện được tường thuật",
        example: "She said she would help if she had time.",
        level: "C1",
        frequency: "Medium",
        complexity: "High",
        situations: ["Indirect speech", "Reporting", "Formal communication"],
      },
      {
        type: "Progressive hypothetical states",
        description: "Trạng thái giả định tiếp diễn",
        example:
          "If we hadn't moved, we would still be living in our old house.",
        level: "C1-C2",
        frequency: "Low",
        complexity: "Very high",
        situations: ["Complex alternative realities", "Life path analysis"],
      },
    ],
    timeMarkers: [
      "by now",
      "still",
      "already",
      "for + time period",
      "since",
      "by + specific time",
    ],
  },

  "Cultural and Contextual Conditionals": {
    level: "C1-C2",
    difficulty: "Advanced Cultural Understanding",
    frequency: "Context-dependent",
    culturalUsage: {
      britishEnglish: {
        preferences: [
          "Should you require assistance... (very formal)",
          "Were I you, I shouldn't worry (shouldn't = wouldn't in advice)",
          "If I were to suggest... (polite suggestion)",
        ],
        examples: [
          "Should you wish to proceed, please sign here.",
          "Were I in your position, I shouldn't hesitate.",
        ],
      },
      americanEnglish: {
        preferences: [
          "If I was you... (informal, though 'were' is still preferred in formal contexts)",
          "If you would like to... (polite requests)",
          "What if we were to... (collaborative suggestions)",
        ],
        examples: [
          "If I was in your shoes, I'd take the job.",
          "If you would like to join us, we'd be happy to have you.",
        ],
      },
      businessEnglish: {
        preferences: [
          "Provided that all conditions are met...",
          "In the event that...",
          "Should circumstances change...",
        ],
        examples: [
          "Provided that the contract is signed by Friday, we can begin immediately.",
          "In the event that the project is delayed, we will reassess our timeline.",
        ],
      },
      academicEnglish: {
        preferences: [
          "If one were to examine...",
          "Should further research indicate...",
          "Were this hypothesis correct...",
        ],
        examples: [
          "If one were to examine the data closely, certain patterns emerge.",
          "Were this theory to be proven, it would revolutionize our understanding.",
        ],
      },
    },
  },

  "Conditional Exercises and Practice": {
    level: "All levels A1-C2",
    exerciseTypes: {
      beginnerA1A2: {
        fillInBlanks: [
          "If you _____ (heat) water to 100°C, it _____ (boil).",
          "If I _____ (be) tired, I _____ (go) to bed early.",
        ],
        multipleChoice: [
          {
            question: "If it rains tomorrow, I _____ stay home.",
            options: ["will", "would", "had", "am"],
            correct: "will",
          },
        ],
        transformation: [
          "When → If: When you press this button, the light turns on.",
          "If → When: If people don't eat, they get hungry.",
        ],
      },
      intermediateB1B2: {
        sentenceCompletion: [
          "If I won the lottery, _____",
          "If I had studied harder, _____",
          "Unless you hurry, _____",
        ],
        errorCorrection: [
          "If I will have time, I will call you. → If I have time, I will call you.",
          "If I would be rich, I would help the poor. → If I were rich, I would help the poor.",
        ],
        combiningClauses: [
          "I don't have a car. I can't give you a ride. → If I had a car, I could give you a ride.",
        ],
      },
      advancedC1C2: {
        inversionPractice: [
          "If I had known → Had I known",
          "If you should need help → Should you need help",
        ],
        mixedConditionals: [
          "Complete: If I had learned to play piano as a child, I _____ (can) perform at concerts now.",
          "Transform: I'm not confident, so I didn't speak up in the meeting.",
        ],
        contextualUsage: [
          "Write a formal letter using conditional provisions",
          "Create a business proposal with multiple conditional scenarios",
        ],
      },
    },
    commonTestFormats: {
      IELTS: ["Error identification", "Sentence completion", "Paraphrasing"],
      TOEFL: [
        "Multiple choice grammar",
        "Sentence correction",
        "Essay writing",
      ],
      Cambridge: [
        "Key word transformation",
        "Multiple choice cloze",
        "Open cloze",
      ],
      Business: ["Formal proposals", "Contract clauses", "Meeting scenarios"],
    },
    practiceProgression: {
      week1: "Master Zero and First Conditionals",
      week2: "Practice Second Conditional and Unless",
      week3: "Learn Third Conditional and basic Mixed",
      week4: "Advanced structures and cultural usage",
      week5: "Exam practice and real-world application",
    },
  },
};

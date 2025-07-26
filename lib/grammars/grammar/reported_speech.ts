export const ReportedSpeechData = {
  level: "A2-C2",
  complexity: "Advanced",
  cefrLevels: {
    A2: "Basic indirect speech with simple statements",
    B1: "Questions and commands in reported speech",
    B2: "Advanced reporting verbs and complex structures",
    C1: "Nuanced reporting and academic citation",
    C2: "Sophisticated reporting with stylistic variation",
  },
  forms: {
    statement: "S + said (that) + clause • e.g., He said (that) he was tired.",
    question: {
      yesNo: "S + asked if/whether + clause • e.g., She asked if I was ready.",
      wh: "S + asked + wh-word + clause • e.g., He asked what I was doing.",
    },
    commandRequest:
      "S + told/asked + object + (not) to + base verb • e.g., He told me to sit down.",
    // Advanced forms for B2-C2
    suggestions:
      "S + suggested + that + clause / S + suggested + V-ing • e.g., He suggested (that) we should go / He suggested going",
    advice:
      "S + advised + object + (not) to + infinitive • e.g., She advised me not to invest",
    promises:
      "S + promised + (object) + to + infinitive • e.g., He promised to help us",
    threats:
      "S + threatened + to + infinitive • e.g., She threatened to call the police",
    offers: "S + offered + to + infinitive • e.g., He offered to drive me home",
    refusals: "S + refused + to + infinitive • e.g., She refused to answer",
    accusations:
      "S + accused + object + of + V-ing • e.g., He accused her of lying",
    compliments:
      "S + complimented + object + on + V-ing • e.g., She complimented him on winning",
    warnings:
      "S + warned + object + (not) to + infinitive / S + warned + object + about/against + N/V-ing • e.g., He warned me not to go / He warned me about the danger",
    reminders:
      "S + reminded + object + to + infinitive / S + reminded + object + that + clause • e.g., She reminded me to call / She reminded me that I had a meeting",
    invitations:
      "S + invited + object + to + infinitive • e.g., They invited us to join them",
    apologies:
      "S + apologized + for + V-ing / S + apologized + to + object + for + V-ing • e.g., He apologized for being late",
    congratulations:
      "S + congratulated + object + on + V-ing • e.g., She congratulated him on passing the exam",
    exclamations:
      "S + exclaimed + that + clause • e.g., He exclaimed that it was amazing",
    denials:
      "S + denied + V-ing / S + denied + that + clause • e.g., He denied stealing / He denied that he had stolen",
    confirmations:
      "S + confirmed + that + clause • e.g., She confirmed that the meeting was scheduled",
    clarifications:
      "S + clarified + that + clause • e.g., He clarified that he would attend",
    emphasizing:
      "S + emphasized + that + clause • e.g., She emphasized that punctuality was important",
    implications:
      "S + implied + that + clause • e.g., He implied that changes were necessary",
    specifications:
      "S + specified + that + clause • e.g., She specified that formal dress was required",
  },
  reportingVerbs: {
    basic: ["say", "tell", "ask"],
    intermediate: [
      "explain",
      "mention",
      "announce",
      "declare",
      "confirm",
      "deny",
      "admit",
      "claim",
      "insist",
      "repeat",
    ],
    advanced: [
      "acknowledge",
      "assert",
      "confess",
      "emphasize",
      "elaborate",
      "imply",
      "reveal",
      "specify",
      "swear",
      "testify",
      "whisper",
      "mumble",
      "shout",
      "scream",
    ],
    emotional: [
      "exclaim",
      "gasp",
      "sigh",
      "groan",
      "laugh",
      "cry",
      "sob",
      "giggle",
      "chuckle",
      "mutter",
    ],
    manner: [
      "whisper",
      "murmur",
      "shout",
      "yell",
      "scream",
      "announce",
      "declare",
      "proclaim",
      "state",
      "utter",
    ],
    academic: [
      "argue",
      "contend",
      "maintain",
      "propose",
      "suggest",
      "indicate",
      "demonstrate",
      "establish",
      "conclude",
      "hypothesize",
    ],
    withPrepositions: {
      "complain about": "He complained about the noise",
      "boast about": "She boasted about her achievements",
      "comment on": "They commented on the situation",
      "object to": "He objected to the proposal",
      "refer to": "She referred to the previous meeting",
      "point out": "He pointed out the mistake",
      "agree with": "She agreed with his opinion",
      "disagree with": "He disagreed with the decision",
      "approve of": "They approved of the changes",
      "disapprove of": "She disapproved of his behavior",
      "consist of": "The plan consisted of three phases",
      "insist on": "He insisted on paying the bill",
      "concentrate on": "She concentrated on the task",
      "depend on": "Success depends on preparation",
    },
  },
  tenseBackshifting: {
    basic: {
      "Present Simple → Past Simple":
        "He says 'I work here' → He said he worked there",
      "Present Continuous → Past Continuous":
        "She says 'I am studying' → She said she was studying",
      "Past Simple → Past Perfect":
        "He says 'I went home' → He said he had gone home",
      "Present Perfect → Past Perfect":
        "She says 'I have finished' → She said she had finished",
    },
    intermediate: {
      "Past Continuous → Past Perfect Continuous":
        "He says 'I was working' → He said he had been working",
      "Future Simple → Conditional":
        "She says 'I will go' → She said she would go",
      "Future Continuous → Conditional Continuous":
        "He says 'I will be working' → He said he would be working",
      "Future Perfect → Conditional Perfect":
        "She says 'I will have finished' → She said she would have finished",
    },
    advanced: {
      "Future Perfect Continuous → Conditional Perfect Continuous":
        "He says 'I will have been working' → He said he would have been working",
      "Modals → Past Modals": {
        "can → could": "She says 'I can swim' → She said she could swim",
        "may → might": "He says 'I may come' → He said he might come",
        "must → had to": "She says 'I must go' → She said she had to go",
        "will → would": "He says 'I will help' → He said he would help",
        "shall → should":
          "She says 'I shall return' → She said she should return",
      },
    },
    noBackshifting: [
      "Universal truths: 'The earth is round' → He said the earth is round",
      "Still true statements: 'I live in London' → She said she lives in London (if still true)",
      "Future arrangements: 'The meeting is tomorrow' → He said the meeting is tomorrow (if still future)",
      "Past modals: could, would, should, might, ought to (no change)",
      "Conditional sentences: 'If I were rich...' → He said if he were rich... (no change in conditional)",
    ],
    complexCases: {
      "Mixed tenses in one sentence":
        "He said, 'I was working when she called and now I'm tired' → He said he had been working when she had called and then he was tired",
      "Reported speech within reported speech":
        "She said, 'He told me he was busy' → She said that he had told her he had been busy",
      "Questions with embedded clauses":
        "He asked, 'Do you know where she works?' → He asked if I knew where she worked",
    },
  },
  usage: [
    {
      type: "To report what someone said",
      description:
        "Tường thuật lại lời nói gián tiếp mà không lặp lại nguyên văn",
      example: "She said (that) she didn't like coffee.",
      level: "A2-B1",
      contexts: ["Everyday conversation", "News reporting", "Storytelling"],
    },
    {
      type: "To report questions and commands",
      description: "Tường thuật lại câu hỏi hoặc mệnh lệnh một cách gián tiếp",
      example: "He asked me what time the train left.",
      level: "A2-B1",
      contexts: ["Instructions", "Interviews", "Police reports"],
    },
    {
      type: "To report suggestions and advice",
      description: "Tường thuật lời khuyên, đề xuất một cách chính thức",
      example: "The doctor advised him to quit smoking.",
      level: "B1-B2",
      contexts: [
        "Medical advice",
        "Professional consultation",
        "Recommendations",
      ],
    },
    {
      type: "To report promises and threats",
      description: "Tường thuật lời hứa hẹn hoặc đe dọa",
      example: "He promised to call me back. She threatened to resign.",
      level: "B2-C1",
      contexts: ["Legal documents", "Negotiations", "Contracts"],
    },
    {
      type: "To report complex speech acts",
      description:
        "Tường thuật các hành vi ngôn ngữ phức tạp như cáo buộc, xin lỗi, chúc mừng",
      example: "She accused him of cheating. He apologized for interrupting.",
      level: "C1-C2",
      contexts: [
        "Court proceedings",
        "Formal apologies",
        "Official accusations",
      ],
    },
    {
      type: "In academic and formal writing",
      description: "Sử dụng trong văn viết học thuật để trích dẫn nguồn",
      example:
        "Smith (2020) argues that climate change requires immediate action.",
      level: "C1-C2",
      contexts: ["Research papers", "Literature reviews", "Academic citations"],
    },
    {
      type: "In journalism and media",
      description: "Báo cáo tin tức và trích dẫn nguồn thông tin",
      example: "The spokesperson confirmed that negotiations would continue.",
      level: "B2-C1",
      contexts: ["News articles", "Press releases", "Media interviews"],
    },
    {
      type: "In creative writing",
      description: "Kể chuyện và mô tả đối thoại trong văn học",
      example: "The character whispered that she had discovered the secret.",
      level: "B2-C2",
      contexts: ["Novels", "Short stories", "Drama scripts"],
    },
  ],
  timeMarkers: [
    "today → that day",
    "tomorrow → the next/following day",
    "yesterday → the day before",
    "now → then",
    "this → that",
    "last week → the previous week",
    "next year → the following year",
    "here → there",
    "these → those",
    "ago → before/previously",
    "next Monday → the following Monday",
    "last night → the previous night/the night before",
    "this morning → that morning",
    "tonight → that night",
    "this week → that week",
    "next month → the following month",
    "last year → the previous year",
    "at the moment → at that moment",
    "currently → at that time",
    "recently → previously",
    "lately → before then",
    "soon → shortly after/later",
    "immediately → immediately",
    "right now → right then",
  ],
  pronounChanges: {
    basic: {
      "I → he/she": "He said, 'I am happy' → He said he was happy",
      "you → I/he/she":
        "She told me, 'You are wrong' → She told me I was wrong",
      "we → they": "They said, 'We are ready' → They said they were ready",
      "my → his/her":
        "He said, 'My car is broken' → He said his car was broken",
      "your → my/his/her":
        "She told him, 'Your work is good' → She told him his work was good",
      "our → their":
        "They said, 'Our plan is working' → They said their plan was working",
    },
    intermediate: {
      "mine → his/hers":
        "She said, 'The book is mine' → She said the book was hers",
      "yours → mine/his/hers":
        "He told her, 'This is yours' → He told her it was hers",
      "ours → theirs":
        "They said, 'The house is ours' → They said the house was theirs",
    },
    complex: {
      "Reflexive pronouns":
        "She said, 'I hurt myself' → She said she had hurt herself",
      "Demonstrative pronouns":
        "He said, 'This is mine' → He said that was his",
      "Possessive pronouns":
        "She said, 'The book is mine' → She said the book was hers",
    },
    contextualChanges: {
      "Speaker to third person":
        "John said, 'I will help' → John said he would help",
      "Addressee changes":
        "Mary told Tom, 'You should go' → Mary told Tom he should go",
      "Multiple speakers":
        "They said, 'We disagree with you' → They said they disagreed with me",
    },
  },
  stylistic_variations: {
    formal: {
      reportingPhrases: [
        "According to X, ...",
        "X stated that ...",
        "X indicated that ...",
        "X emphasized that ...",
        "As X pointed out, ...",
        "X made it clear that ...",
        "X went on to say that ...",
        "X concluded by saying that ...",
      ],
      academicStructures: [
        "The author argues that ...",
        "Research suggests that ...",
        "Studies indicate that ...",
        "Evidence shows that ...",
        "Findings reveal that ...",
        "The data demonstrates that ...",
      ],
    },
    informal: {
      conversationalReporting: [
        "She was like, ...",
        "He went, ...",
        "She's all, ...",
        "He was saying that ...",
        "Apparently, she said ...",
        "Word is that he said ...",
      ],
    },
    literary: {
      narrativeReporting: [
        "She whispered that ...",
        "He confided that ...",
        "She revealed that ...",
        "He confessed that ...",
        "She disclosed that ...",
        "He admitted that ...",
      ],
    },
  },
  recognition: [
    "Lùi thì: khi động từ tường thuật là thì quá khứ, các thì trong câu gốc thường lùi 1 thì",
    "Thay đổi đại từ (I → he/she, you → I/he, etc.)",
    "Thay đổi trạng từ chỉ thời gian và nơi chốn (now → then, here → there, etc.)",
    "Không dùng dấu ngoặc kép",
    "Không lùi thì nếu câu gốc vẫn đúng ở hiện tại (facts, timetables...)",
    "Sử dụng động từ tường thuật phù hợp với ngữ cảnh và mục đích",
    "Thay đổi cấu trúc câu hỏi thành câu trần thuật",
    "Sử dụng 'if/whether' cho câu hỏi Yes/No",
    "Giữ nguyên từ để hỏi (wh-words) nhưng thay đổi trật tự từ",
    "Với mệnh lệnh: chuyển thành to-infinitive hoặc not to-infinitive",
    "Nhận biết ngữ cảnh để chọn động từ tường thuật phù hợp",
    "Xử lý các trạng từ và cụm từ chỉ thời gian, địa điểm",
    "Đảm bảo tính nhất quán về thì trong toàn bộ câu tường thuật",
    "Sử dụng cấu trúc phù hợp với mức độ trang trọng của văn bản",
  ],
  examples: {
    statements: {
      direct: "She said, 'I am tired.'",
      reported: "She said (that) she was tired.",
      context: "Basic daily conversation",
    },
    yesNoQuestions: {
      direct: "He asked, 'Are you coming?'",
      reported: "He asked if I was coming.",
      context: "Making plans or arrangements",
    },
    whQuestions: {
      direct: "They asked, 'Where do you live?'",
      reported: "They asked where I lived.",
      context: "Getting to know someone",
    },
    commands: {
      direct: "She said, 'Close the door.'",
      reported: "She told me to close the door.",
      context: "Giving instructions",
    },
    requests: {
      direct: "He said, 'Please help me.'",
      reported: "He asked me to help him.",
      context: "Asking for assistance",
    },
    negativeCommands: {
      direct: "The teacher said, 'Don't be late.'",
      reported: "The teacher told us not to be late.",
      context: "Classroom rules",
    },
    // Advanced examples for B2-C2
    suggestions: {
      direct: "He said, 'Why don't we go to the cinema?'",
      reported:
        "He suggested going to the cinema / He suggested that we should go to the cinema.",
      context: "Making social plans",
    },
    advice: {
      direct: "She said, 'You should see a doctor.'",
      reported: "She advised me to see a doctor.",
      context: "Health recommendations",
    },
    promises: {
      direct: "He said, 'I will definitely help you.'",
      reported: "He promised to help me.",
      context: "Making commitments",
    },
    threats: {
      direct: "She said, 'I'll call the police if you don't leave.'",
      reported: "She threatened to call the police if he didn't leave.",
      context: "Conflict situations",
    },
    offers: {
      direct: "He said, 'Would you like me to drive you home?'",
      reported: "He offered to drive me home.",
      context: "Being helpful",
    },
    accusations: {
      direct: "She said, 'You stole my money!'",
      reported: "She accused him of stealing her money.",
      context: "Legal or conflict situations",
    },
    apologies: {
      direct: "He said, 'I'm sorry for breaking your vase.'",
      reported: "He apologized for breaking my vase.",
      context: "Taking responsibility",
    },
    compliments: {
      direct: "She said, 'Your presentation was excellent.'",
      reported: "She complimented him on his excellent presentation.",
      context: "Professional feedback",
    },
    warnings: {
      direct: "He said, 'Be careful! The floor is wet.'",
      reported: "He warned me to be careful because the floor was wet.",
      context: "Safety concerns",
    },
    exclamations: {
      direct: "She said, 'What a beautiful day!'",
      reported: "She exclaimed that it was a beautiful day.",
      context: "Expressing emotions",
    },
    mixedTenses: {
      direct: "He said, 'I was working when she called me yesterday.'",
      reported:
        "He said he had been working when she had called him the day before.",
      context: "Complex narratives",
    },
    conditionals: {
      direct: "She said, 'If I were you, I would accept the offer.'",
      reported: "She said that if she were me, she would accept the offer.",
      context: "Giving hypothetical advice",
    },
    academicCitation: {
      direct:
        "The researcher stated, 'Our findings indicate significant progress.'",
      reported:
        "The researcher stated that their findings indicated significant progress.",
      context: "Academic writing",
    },
    journalisticReporting: {
      direct: "The CEO announced, 'We will expand our operations globally.'",
      reported:
        "The CEO announced that the company would expand its operations globally.",
      context: "Business news",
    },
    legalTestimony: {
      direct: "The witness testified, 'I saw the defendant at the scene.'",
      reported:
        "The witness testified that he had seen the defendant at the scene.",
      context: "Court proceedings",
    },
  },
  specialCases: {
    exclamations: {
      description: "Câu cảm thán được chuyển thành 'that + clause'",
      examples: [
        "'How beautiful!' → He exclaimed that it was beautiful",
        "'What a surprise!' → She exclaimed that it was a surprise",
        "'How wonderful!' → They exclaimed that it was wonderful",
        "'What a disaster!' → He exclaimed that it was a disaster",
      ],
      patterns: [
        "How + adjective → that it was + adjective",
        "What + a/an + noun → that it was + a/an + noun",
        "How + adverb → that it was done + adverb",
      ],
    },
    greetings: {
      description: "Lời chào được tường thuật bằng động từ đặc biệt",
      examples: [
        "'Hello!' → He greeted me",
        "'Good morning!' → She wished me good morning",
        "'Goodbye!' → He said goodbye / He bade me farewell",
        "'Welcome!' → They welcomed us",
        "'Congratulations!' → She congratulated him",
      ],
    },
    interjections: {
      description: "Từ cảm thán được chuyển thành động từ mô tả",
      examples: [
        "'Oh!' → He gasped / He exclaimed in surprise",
        "'Ah!' → She sighed",
        "'Ouch!' → He cried out in pain",
        "'Wow!' → She exclaimed in amazement",
        "'Ugh!' → He groaned in disgust",
        "'Hmm!' → She pondered / She considered thoughtfully",
      ],
    },
    questions_within_questions: {
      description: "Câu hỏi lồng trong câu hỏi (C1-C2)",
      examples: [
        "'Do you know where he lives?' → She asked if I knew where he lived",
        "'Can you tell me what time it is?' → He asked if I could tell him what time it was",
        "'Would you mind explaining how this works?' → She asked if I would mind explaining how it worked",
      ],
    },
    imperatives_with_conditions: {
      description: "Mệnh lệnh có điều kiện (B2-C1)",
      examples: [
        "'Call me if you need help' → He told me to call him if I needed help",
        "'Don't go unless you're sure' → She warned me not to go unless I was sure",
      ],
    },
    reported_thoughts: {
      description: "Tường thuật suy nghĩ và cảm xúc nội tâm (C1-C2)",
      examples: [
        "I thought, 'This is impossible' → I thought that it was impossible",
        "She wondered, 'Will he come?' → She wondered if he would come",
        "He realized, 'I've made a mistake' → He realized that he had made a mistake",
      ],
    },
  },
  commonMistakes: {
    beginners: [
      "Forgetting to change pronouns: ❌ He said 'I am happy' → He said I was happy ✅ He said he was happy",
      "Not changing time markers: ❌ yesterday → yesterday ✅ yesterday → the day before",
      "Using quotation marks: ❌ He said 'he was tired' ✅ He said he was tired",
      "Wrong word order in questions: ❌ He asked where was I ✅ He asked where I was",
      "Using 'say' with indirect object: ❌ He said me to go ✅ He told me to go",
    ],
    intermediate: [
      "Incorrect tense backshifting: ❌ He said he will come ✅ He said he would come",
      "Wrong reporting verb: ❌ He said me to go ✅ He told me to go",
      "Mixing direct and indirect speech: ❌ He said that 'I am tired' ✅ He said that he was tired",
      "Forgetting to change possessive pronouns: ❌ She said my car was broken ✅ She said her car was broken",
    ],
    advanced: [
      "Unnecessary backshifting with universal truths: ❌ He said the earth was round ✅ He said the earth is round",
      "Wrong modal changes: ❌ She said she can swim → She said she could swim (if ability changed) ✅ She said she could swim",
      "Incorrect complex reporting structures: ❌ He accused to steal ✅ He accused him of stealing",
      "Inappropriate reporting verb choice: ❌ He said loudly ✅ He shouted/declared",
    ],
    stylistic: [
      "Overusing 'said': ❌ He said... She said... They said... ✅ He mentioned... She explained... They argued...",
      "Inconsistent formality: ❌ Mixing academic and informal reporting in formal writing",
      "Redundant reporting: ❌ He said that he said he was tired ✅ He said he was tired",
    ],
  },
  practiceTypes: {
    A2_B1: [
      "Convert direct statements to reported speech",
      "Change pronouns and time markers",
      "Report simple questions and commands",
      "Basic tense backshifting practice",
      "Identify direct vs indirect speech",
      "Simple gap-filling exercises",
    ],
    B1_B2: [
      "Report suggestions and advice",
      "Use various reporting verbs",
      "Handle mixed tenses",
      "Report conditional sentences",
      "Transform complex questions",
      "Practice with different time contexts",
    ],
    B2_C1: [
      "Report complex speech acts (accusations, apologies, etc.)",
      "Use advanced reporting verbs with prepositions",
      "Handle no-backshifting situations",
      "Report implied meanings",
      "Academic citation practice",
      "Journalistic reporting exercises",
    ],
    C1_C2: [
      "Academic reporting and citation",
      "Nuanced reporting verb selection",
      "Complex embedded questions",
      "Stylistic variation in reporting",
      "Literary and creative reporting",
      "Professional and legal reporting",
    ],
  },
  culturalContexts: {
    academic: {
      description: "Trích dẫn và tường thuật trong nghiên cứu học thuật",
      examples: [
        "Smith (2023) argues that...",
        "According to the research...",
        "The study demonstrates that...",
        "As Johnson suggests...",
      ],
    },
    journalism: {
      description: "Báo cáo tin tức và phỏng vấn",
      examples: [
        "The minister announced that...",
        "Sources close to the company revealed that...",
        "The spokesperson confirmed that...",
        "Witnesses reported that...",
      ],
    },
    legal: {
      description: "Lời khai và báo cáo pháp lý",
      examples: [
        "The defendant claimed that...",
        "The witness testified that...",
        "The lawyer argued that...",
        "The judge ruled that...",
      ],
    },
    business: {
      description: "Giao tiếp và báo cáo kinh doanh",
      examples: [
        "The CEO stated that...",
        "The report indicates that...",
        "The client requested that...",
        "The team proposed that...",
      ],
    },
  },
  exercises: {
    transformationDrills: {
      description: "Chuyển đổi từ câu trực tiếp sang gián tiếp",
      difficulty: "All levels",
      examples: [
        "Direct: 'I will call you tomorrow' → Reported: He said he would call me the next day",
        "Direct: 'Are you ready?' → Reported: She asked if I was ready",
        "Direct: 'Please sit down' → Reported: He asked me to sit down",
      ],
    },
    verbSelection: {
      description: "Chọn động từ tường thuật phù hợp",
      difficulty: "B2-C2",
      examples: [
        "'I'm sorry for being late' → He _____ for being late (apologized)",
        "'You should exercise more' → She _____ me to exercise more (advised)",
        "'I didn't do it' → He _____ doing it (denied)",
      ],
    },
    contextualReporting: {
      description: "Tường thuật trong các ngữ cảnh cụ thể",
      difficulty: "C1-C2",
      scenarios: [
        "Academic conference presentation",
        "Court testimony",
        "Business meeting",
        "Medical consultation",
      ],
    },
  },
  notes: [
    "Không cần dùng 'that' nhưng có thể thêm vào để rõ ràng.",
    "Lùi thì thường gặp: Present simple → Past simple, Present continuous → Past continuous, etc.",
    "Không lùi thì với: sự thật hiển nhiên, cảm xúc vẫn đúng ở hiện tại.",
    "Tránh dùng dấu ngoặc kép – đây là câu gián tiếp, không phải nguyên văn.",
    "Với mệnh lệnh: dùng to/not to + verb (infinitive).",
    "Động từ 'say' không được theo sau bởi tân ngữ trực tiếp (say someone), phải dùng 'tell'.",
    "Một số động từ tường thuật đòi hỏi cấu trúc đặc biệt (suggest + V-ing, accuse + of + V-ing).",
    "Trong văn viết trang trọng, tránh lặp lại động từ 'said' - sử dụng các từ đồng nghĩa.",
    "Khi tường thuật trong văn học hoặc báo chí, có thể sử dụng các động từ mô tả cách nói (whisper, shout, mumble).",
    "Đối với câu hỏi gián tiếp, không đảo ngữ và không dùng trợ động từ do/does/did.",
    "Với câu điều kiện, thường không cần lùi thì vì đây là tình huống giả định.",
    "Trong học thuật, sử dụng thì hiện tại để tường thuật nghiên cứu vẫn còn liên quan: 'Smith argues that...'.",
    "Chú ý đến ngữ cảnh văn hóa khi chọn động từ tường thuật - một số từ mang tính trang trọng cao.",
    "Trong các cuộc hội thoại không chính thức, có thể sử dụng các cách tường thuật đơn giản hơn.",
    "Khi tường thuật lời nói của nhiều người, cần phân biệt rõ ràng người nói để tránh nhầm lẫn.",
    "Đối với các câu có ý nghĩa ngụ ý, cần chọn động từ tường thuật phù hợp để truyền đạt đúng ý định.",
  ],
  etymology: {
    origin:
      "Reported speech xuất phát từ nhu cầu truyền đạt lại thông tin mà không cần lặp lại nguyên văn",
    development:
      "Phát triển từ các hình thức tường thuật đơn giản đến các cấu trúc phức tạp trong văn học và học thuật",
    modernUsage:
      "Ngày nay được sử dụng rộng rãi trong báo chí, học thuật, pháp lý và giao tiếp hàng ngày",
  },
  crossLinguistic: {
    similarities: "Hầu hết các ngôn ngữ đều có hình thức tường thuật gián tiếp",
    differences:
      "Các ngôn ngữ khác nhau có quy tắc lùi thì và thay đổi đại từ khác nhau",
    learnerChallenges:
      "Người học thường gặp khó khăn với việc lùi thì và thay đổi đại từ, đặc biệt khi ngôn ngữ mẹ đẻ có quy tắc khác",
  },
};

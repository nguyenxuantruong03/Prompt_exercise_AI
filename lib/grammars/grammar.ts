import { Exercise } from "@/types/grammars/grammars_type";

// CEFR Level equivalency data
export const levelEquivalencies = {
  A1: {
    description: "Beginner",
    ielts: "3.0-3.5",
    toefl: "0-31",
    toeic: "120-224",
    cambridge: "KET (Pass)",
    vstep: "3-3.5",
    aptis: "A1",
    details:
      "Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and others and can ask and give details about personal information.",
  },
  A2: {
    description: "Elementary",
    ielts: "4.0-4.5",
    toefl: "32-42",
    toeic: "225-549",
    cambridge: "KET (Good/Excellent) or PET (Pass)",
    vstep: "4.0-4.5",
    aptis: "A2",
    details:
      "Can understand sentences and frequently used expressions. Can communicate in simple and routine tasks requiring simple exchange of information.",
  },
  B1: {
    description: "Intermediate",
    ielts: "5.0-5.5",
    toefl: "43-61",
    toeic: "550-784",
    cambridge: "PET (Good/Excellent) or FCE (Pass)",
    vstep: "5.0-5.5",
    aptis: "B1",
    details:
      "Can understand the main points of clear standard input on familiar matters. Can deal with most situations likely to arise while traveling.",
  },
  B2: {
    description: "Upper Intermediate",
    ielts: "6.0-6.5",
    toefl: "62-78",
    toeic: "785-944",
    cambridge: "FCE (Good/Excellent) or CAE (Pass)",
    vstep: "6.0-6.5",
    aptis: "B2",
    details:
      "Can understand the main ideas of complex text. Can interact with fluency and spontaneity that makes regular interaction possible.",
  },
  C1: {
    description: "Advanced",
    ielts: "7.0-7.5",
    toefl: "79-93",
    toeic: "945-990",
    cambridge: "CAE (Good/Excellent) or CPE (Pass)",
    vstep: "7.0-7.5",
    aptis: "C1",
    details:
      "Can understand a wide range of demanding, longer texts. Can express ideas fluently and spontaneously without much obvious searching.",
  },
  C2: {
    description: "Proficient",
    ielts: "8.0-9.0",
    toefl: "94-120",
    toeic: "990",
    cambridge: "CPE (Good/Excellent)",
    vstep: "8.0-9.0",
    aptis: "C2",
    details:
      "Can understand virtually everything heard or read. Can summarize information and reconstruct arguments coherently.",
  },
};

// Exercise recommendations for each test and level
export const testExercises = {
  ielts: {
    A1: [
      "Practice basic listening with simple conversations",
      "Learn 500-1000 common vocabulary words",
      "Practice simple present and past tense",
      "Work on basic sentence structure",
      "Practice introducing yourself and giving personal information",
    ],
    A2: [
      "Expand vocabulary to 1500-2000 words",
      "Practice reading simple texts and advertisements",
      "Learn present perfect and future tenses",
      "Practice writing simple emails and letters",
      "Work on listening to everyday conversations",
    ],
    B1: [
      "Build vocabulary to 2500-3000 words",
      "Practice reading news articles and reports",
      "Master conditional sentences and passive voice",
      "Practice writing essays with clear structure",
      "Improve listening skills with longer conversations",
    ],
    B2: [
      "Expand vocabulary to 4000+ words",
      "Practice academic reading and complex texts",
      "Master advanced grammar structures",
      "Practice writing argumentative essays",
      "Work on listening to lectures and presentations",
    ],
    C1: [
      "Build vocabulary to 6000+ words including academic terms",
      "Practice reading complex academic and literary texts",
      "Master nuanced grammar and discourse markers",
      "Practice writing formal reports and proposals",
      "Develop listening skills for academic contexts",
    ],
    C2: [
      "Master 8000+ words including specialized vocabulary",
      "Practice reading highly complex and abstract texts",
      "Perfect all grammar structures and stylistic variations",
      "Practice writing sophisticated academic papers",
      "Develop native-like listening comprehension",
    ],
  },
  toefl: {
    A1: [
      "Focus on basic English sounds and pronunciation",
      "Practice simple reading comprehension",
      "Learn basic academic vocabulary (500-800 words)",
      "Practice simple note-taking",
      "Work on basic sentence formation",
    ],
    A2: [
      "Expand academic vocabulary to 1200-1500 words",
      "Practice reading simple academic texts",
      "Learn to write simple paragraphs",
      "Practice listening to short academic conversations",
      "Work on basic grammar for academic contexts",
    ],
    B1: [
      "Build academic vocabulary to 2000-2500 words",
      "Practice reading academic articles and textbooks",
      "Learn to write structured essays",
      "Practice listening to academic lectures",
      "Master intermediate grammar for academic writing",
    ],
    B2: [
      "Expand vocabulary to 3500+ academic words",
      "Practice reading complex academic materials",
      "Master essay writing with multiple paragraphs",
      "Practice listening to longer academic presentations",
      "Perfect advanced grammar for academic contexts",
    ],
    C1: [
      "Build vocabulary to 5000+ specialized academic terms",
      "Practice reading research papers and journals",
      "Master academic writing styles and formats",
      "Practice listening to complex academic discussions",
      "Perfect nuanced grammar and academic expressions",
    ],
    C2: [
      "Master 7000+ academic and specialized vocabulary",
      "Practice reading highly complex academic research",
      "Perfect all forms of academic writing",
      "Develop expert-level listening for academic content",
      "Master all advanced grammar and stylistic features",
    ],
  },
  toeic: {
    A1: [
      "Learn basic business and workplace vocabulary",
      "Practice listening to simple workplace conversations",
      "Focus on basic grammar for business contexts",
      "Practice reading simple business documents",
      "Learn common business phrases and expressions",
    ],
    A2: [
      "Expand business vocabulary to 1000-1500 words",
      "Practice listening to workplace announcements",
      "Learn to write simple business emails",
      "Practice reading basic business correspondence",
      "Master present and past tenses for business contexts",
    ],
    B1: [
      "Build business vocabulary to 2000-2500 words",
      "Practice listening to business meetings and calls",
      "Learn to write business reports and memos",
      "Practice reading business articles and reports",
      "Master intermediate business grammar",
    ],
    B2: [
      "Expand to 3000+ business and technical terms",
      "Practice listening to complex business presentations",
      "Master formal business writing styles",
      "Practice reading contracts and technical documents",
      "Perfect advanced business grammar",
    ],
    C1: [
      "Build vocabulary to 4500+ specialized business terms",
      "Practice listening to strategic business discussions",
      "Master all forms of business communication",
      "Practice reading complex financial and legal documents",
      "Perfect nuanced business language",
    ],
    C2: [
      "Master 6000+ business and professional vocabulary",
      "Develop expert listening for high-level business content",
      "Perfect all business writing and communication styles",
      "Master reading of highly complex business documents",
      "Achieve native-like business language proficiency",
    ],
  },
  cambridge: {
    A1: [
      "Practice basic vocabulary and everyday expressions",
      "Work on simple present and past tenses",
      "Practice listening to familiar topics",
      "Learn to write short personal messages",
      "Focus on basic reading comprehension",
    ],
    A2: [
      "Expand vocabulary for familiar situations",
      "Practice all basic tenses and common structures",
      "Work on listening to everyday conversations",
      "Practice writing simple letters and emails",
      "Improve reading of simple texts and notices",
    ],
    B1: [
      "Build vocabulary for general topics and interests",
      "Master intermediate grammar including conditionals",
      "Practice listening to longer conversations and talks",
      "Learn to write informal and semi-formal letters",
      "Improve reading of factual texts and articles",
    ],
    B2: [
      "Expand vocabulary for abstract and complex topics",
      "Master advanced grammar and sentence structures",
      "Practice listening to lectures and complex discussions",
      "Learn formal and academic writing styles",
      "Practice reading complex texts and literature",
    ],
    C1: [
      "Build sophisticated vocabulary and expressions",
      "Perfect all grammar structures and discourse markers",
      "Practice listening to complex academic content",
      "Master all forms of written communication",
      "Develop skills for reading complex literature and texts",
    ],
    C2: [
      "Master extensive vocabulary including idiomatic expressions",
      "Perfect all aspects of English grammar and usage",
      "Achieve native-like listening comprehension",
      "Master sophisticated writing in all contexts",
      "Develop expert reading skills for all text types",
    ],
  },
  vstep: {
    A1: [
      "Focus on basic Vietnamese-English language transfer skills",
      "Practice common Vietnamese-English pronunciation differences",
      "Learn basic vocabulary with Vietnamese context",
      "Work on simple grammar structures",
      "Practice basic conversation skills",
    ],
    A2: [
      "Expand vocabulary relevant to Vietnamese learners",
      "Practice intermediate grammar with local examples",
      "Work on listening with Vietnamese accent awareness",
      "Practice writing simple texts and messages",
      "Improve reading of everyday materials",
    ],
    B1: [
      "Build vocabulary for academic and professional contexts",
      "Master grammar structures challenging for Vietnamese speakers",
      "Practice listening to various English accents",
      "Learn to write structured paragraphs and essays",
      "Improve reading comprehension strategies",
    ],
    B2: [
      "Expand academic and professional vocabulary",
      "Perfect advanced grammar and complex structures",
      "Practice listening to academic and professional content",
      "Master formal writing and academic styles",
      "Develop critical reading skills",
    ],
    C1: [
      "Build sophisticated vocabulary for all contexts",
      "Perfect nuanced grammar and discourse features",
      "Practice listening to complex academic content",
      "Master advanced writing for academic and professional purposes",
      "Develop expert reading and analytical skills",
    ],
    C2: [
      "Master comprehensive vocabulary and expressions",
      "Achieve perfect grammar and stylistic control",
      "Develop native-like listening comprehension",
      "Perfect all forms of sophisticated writing",
      "Master reading of complex and abstract texts",
    ],
  },
  aptis: {
    A1: [
      "Practice basic vocabulary for everyday situations",
      "Work on fundamental grammar structures",
      "Develop basic speaking skills for familiar topics",
      "Practice simple writing tasks",
      "Focus on listening to short, simple texts",
    ],
    A2: [
      "Expand vocabulary for routine activities and interests",
      "Practice intermediate grammar and tenses",
      "Develop speaking skills for familiar situations",
      "Practice writing short texts and messages",
      "Improve listening to everyday conversations",
    ],
    B1: [
      "Build vocabulary for work, school, and leisure contexts",
      "Master intermediate to advanced grammar",
      "Practice speaking about experiences and plans",
      "Learn to write coherent texts on familiar topics",
      "Develop listening skills for longer texts",
    ],
    B2: [
      "Expand vocabulary for abstract and complex topics",
      "Perfect advanced grammar and discourse markers",
      "Practice fluent speaking on various topics",
      "Master writing of detailed texts and arguments",
      "Develop listening skills for complex content",
    ],
    C1: [
      "Build sophisticated vocabulary and expressions",
      "Perfect all grammar and discourse features",
      "Develop fluent and spontaneous speaking",
      "Master complex writing tasks and styles",
      "Perfect listening comprehension for all contexts",
    ],
    C2: [
      "Master comprehensive vocabulary and idiomatic language",
      "Achieve perfect grammatical and stylistic control",
      "Develop native-like speaking fluency",
      "Perfect all forms of sophisticated writing",
      "Achieve expert-level listening comprehension",
    ],
  },
};

// Grammar topic suggestions
export const grammarSuggestions = {
  "Basic Grammar (A1-A2)": [
    "Simple present tense",
    "Simple past tense",
    "Simple future tense",
    "Present continuous",
    "Past continuous",
    "Future continuous (will be + ing)",
    "Present tense with 'be' verbs",
    "Past tense irregular verbs",
    "Time expressions with tenses",
    "Articles (a, an, the)",
    "Plural nouns",
    "Basic pronouns",
    "Basic adjectives",
    "Basic prepositions",
  ],
  "Intermediate Grammar (B1-B2)": [
    "Present perfect tense",
    "Past perfect tense",
    "Future perfect tense",
    "Present perfect continuous",
    "Past perfect continuous",
    "Future perfect continuous",
    "Mixed conditionals with tenses",
    "Sequence of tenses",
    "Conditional sentences (if clauses)",
    "Passive voice",
    "Modal verbs (can, could, should, must)",
    "Comparative and superlative",
    "Relative clauses",
    "Reported speech",
    "Gerunds and infinitives",
  ],
  "Advanced Grammar (C1-C2)": [
    "Perfect aspect in all tenses",
    "Complex tense sequences",
    "Subjunctive mood with tenses",
    "Advanced time relationships",
    "Hypothetical situations across tenses",
    "Narrative tense shifts",
    "Subjunctive mood",
    "Complex conditional sentences",
    "Advanced passive constructions",
    "Inversion and emphasis",
    "Cleft sentences",
    "Advanced modal verbs",
    "Participle clauses",
    "Nominalization",
    "Discourse markers",
    "Advanced verb patterns",
  ],
  "All Tenses Practice": [
    "Simple present vs present continuous",
    "Past simple vs past continuous",
    "Present perfect vs past simple",
    "Present perfect vs present perfect continuous",
    "Past perfect vs past simple",
    "Future forms comparison (will, going to, present continuous)",
    "All past tenses in context",
    "All present tenses in context",
    "All future tenses in context",
    "Tense consistency in paragraphs",
    "Time markers and tense selection",
    "Tense usage in storytelling",
    "Mixed tense exercises",
    "Tense transformation exercises",
    "Progressive vs simple aspects",
    "Perfect vs simple aspects",
  ],
  "🎯 Exam-Specific Grammar": [
    "IELTS Academic Writing Task 1 grammar",
    "IELTS Academic Writing Task 2 grammar",
    "TOEFL iBT integrated writing grammar",
    "TOEIC business communication grammar",
    "Cambridge FCE grammar focus",
    "Cambridge CAE advanced structures",
    "VSTEP Vietnamese learner challenges",
    "SAT/ACT grammar and usage",
    "GRE verbal reasoning grammar",
    "Academic paper writing grammar",
    "Professional email grammar",
    "Presentation and speech grammar",
  ],
  "📚 Context-Based Learning": [
    "Grammar for storytelling and narratives",
    "Business meeting language patterns",
    "Academic lecture comprehension grammar",
    "News and media language structures",
    "Scientific writing grammar patterns",
    "Legal document language basics",
    "Medical terminology and grammar",
    "Technical manual writing grammar",
    "Social media and informal grammar",
    "Interview and conversation grammar",
    "Travel and tourism grammar",
    "Restaurant and service industry grammar",
  ],
  "🔥 Problem Areas": [
    "Common ESL student mistakes",
    "False friends and confusing words",
    "Pronunciation-grammar connections",
    "L1 interference patterns",
    "Homophones and grammar confusion",
    "Frequently misspelled grammar words",
    "Common preposition errors",
    "Subject-verb agreement challenges",
    "Article usage difficulties",
    "Verb form confusion patterns",
    "Sentence structure problems",
    "Punctuation and grammar intersection",
  ],
  "🌟 Creative & Fun Grammar": [
    "Grammar through song lyrics analysis",
    "Movie dialogue grammar patterns",
    "Poetry and literary device grammar",
    "Social media grammar trends",
    "Gaming and esports language",
    "Cooking recipe grammar structures",
    "Sports commentary grammar",
    "Travel blog writing grammar",
    "Product review grammar patterns",
    "Humor and joke structure grammar",
    "Storytelling grammar techniques",
    "Debate and argument grammar",
  ],
  "⚡ Quick Focus Areas": [
    "5-minute grammar drills",
    "One-rule focus exercises",
    "Common mistakes quick fix",
    "Daily usage grammar",
    "Grammar for texting and chat",
    "Essential workplace grammar",
    "Survival grammar for travelers",
    "Academic presentation basics",
    "Job interview grammar prep",
    "Small talk conversation grammar",
    "Emergency communication grammar",
    "Grammar for online learning",
  ],
  "🎨 Skill Integration": [
    "Grammar + Vocabulary building",
    "Grammar + Pronunciation patterns",
    "Grammar + Reading comprehension",
    "Grammar + Writing fluency",
    "Grammar + Listening skills",
    "Grammar + Speaking confidence",
    "Grammar + Cultural awareness",
    "Grammar + Critical thinking",
    "Grammar + Creative writing",
    "Grammar + Academic research",
    "Grammar + Professional communication",
    "Grammar + Digital literacy",
  ],
  "AI Random Tenses": [], // This will be populated dynamically
  "Common Topics": [
    "Question formation",
    "Negation",
    "Word order",
    "Subject-verb agreement",
    "Sentence fragments",
    "Run-on sentences",
    "Comma usage",
    "Apostrophes",
    "Capitalization",
    "Paragraph structure",
  ],
};

// Function to generate random AI tense suggestions
export const generateRandomTenseSuggestions = () => {
  const allTenses = [
    // Simple Tenses
    "Simple present tense",
    "Simple past tense",
    "Simple future tense",

    // Progressive/Continuous Tenses
    "Present continuous",
    "Past continuous",
    "Future continuous",

    // Perfect Tenses
    "Present perfect tense",
    "Past perfect tense",
    "Future perfect tense",

    // Perfect Continuous Tenses
    "Present perfect continuous",
    "Past perfect continuous",
    "Future perfect continuous",

    // Mixed and Complex Tenses
    "Mixed present and past tenses",
    "Mixed perfect tenses",
    "Sequential tense usage",
    "Narrative tense switching",
    "Reported speech tenses",
    "Conditional tense patterns",

    // Advanced Combinations
    "Past perfect vs simple past",
    "Present perfect vs present continuous",
    "Future perfect vs future simple",
    "Perfect progressive combinations",
    "Tense consistency in complex sentences",
    "Time clause tense sequences",

    // Creative AI Mixed Tense Combinations
    "Random mixed tenses: Simple Present + Past Perfect + Future Continuous",
    "Mixed tenses: Present Continuous + Present Perfect + Simple Past",
    "Complex mix: Past Continuous + Present Perfect + Future Simple",
    "Advanced mixing: Simple Present + Past Perfect Continuous + Future Perfect",
    "Narrative blend: Simple Past + Past Continuous + Past Perfect",
    "Time travel mix: All future tenses in one exercise",
    "Perfect tense cocktail: Present Perfect + Past Perfect + Future Perfect",
    "Progressive journey: Present Continuous + Past Continuous + Future Continuous",
    "Multi-tense storytelling: 6+ different tenses in context",
    "Tense chaos challenge: Random selection of 4-5 different tenses",
    "Real-world mixing: Conversation tenses (Present + Past + Perfect)",
    "Academic blend: Formal writing tenses mixed together",
    "Business communication: Professional tense combinations",
    "Daily life scenarios: Mixed tenses for everyday situations",
    "Movie script tenses: Dramatic tense combinations",
    "News report style: Journalistic tense mixing",
    "Everyday speech mix: Present Simple + Past Simple + Present Perfect",
    "Exam simulation: Cambridge-style mixed tense challenge",
    "Job interview grammar: Future Simple + Present Perfect + Conditional",
    "Travel scenario: Mixed future and present tenses",
    "Story rewrite: Convert past to reported speech tenses",
    "Grammar detective: Find the wrong tense",
    "Timeline challenge: Match actions to the correct tense",
    "Verb journey: One verb through all 12 main tenses",
    "Chat simulation: Natural dialogue with tense changes",
    "English diary task: Daily events in mixed tenses",
    "Comic strip narration: Mixed tenses for action scenes",
    "AI character storytelling: Each sentence changes tense",
    "School subject crossover: Science facts in different tenses",
    "Tense repair: Fix incorrect tense usage in paragraphs",
    "Phone call simulation: Switch tenses naturally",
    "Historical retelling: Combine Past Simple, Past Continuous & Past Perfect",
  ];

  // Shuffle and return a random selection
  const shuffled = allTenses.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 16); // Return 16 random tense suggestions (increased from 12)
};

// Get suggestions based on proficiency level
export const getRelevantSuggestions = (proficiencyLevel: string) => {
  // Generate fresh random tense suggestions each time
  const randomTenses = generateRandomTenseSuggestions();

  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    // Highlight basic grammar for beginners
    return {
      "Recommended for Your Level": grammarSuggestions["Basic Grammar (A1-A2)"],
      "🎲 AI Random Mixed Tenses": randomTenses,
      "🔀 Mix All Tenses": ["Mix all tenses"],
      "⚡ Quick Focus Areas": grammarSuggestions["⚡ Quick Focus Areas"],
      "🔥 Problem Areas": grammarSuggestions["🔥 Problem Areas"].slice(0, 8),
      "🌟 Creative & Fun Grammar": grammarSuggestions[
        "🌟 Creative & Fun Grammar"
      ].slice(0, 8),
      "📚 Context-Based Learning": grammarSuggestions[
        "📚 Context-Based Learning"
      ].slice(0, 6),
      "Common Topics": grammarSuggestions["Common Topics"],
      "Other Topics": [
        ...grammarSuggestions["Intermediate Grammar (B1-B2)"].slice(0, 4),
        ...grammarSuggestions["Advanced Grammar (C1-C2)"].slice(0, 2),
      ],
    };
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    // Highlight intermediate grammar
    return {
      "Recommended for Your Level":
        grammarSuggestions["Intermediate Grammar (B1-B2)"],
      "🎲 AI Random Mixed Tenses": randomTenses,
      "🔀 Mix All Tenses": ["Mix all tenses"],
      "🎯 Exam-Specific Grammar":
        grammarSuggestions["🎯 Exam-Specific Grammar"],
      "📚 Context-Based Learning":
        grammarSuggestions["📚 Context-Based Learning"],
      "🔥 Problem Areas": grammarSuggestions["🔥 Problem Areas"],
      "🎨 Skill Integration": grammarSuggestions["🎨 Skill Integration"].slice(
        0,
        8
      ),
      "⚡ Quick Focus Areas": grammarSuggestions["⚡ Quick Focus Areas"].slice(
        0,
        8
      ),
      "Review Basic": grammarSuggestions["Basic Grammar (A1-A2)"].slice(0, 6),
      "Challenge Yourself": grammarSuggestions[
        "Advanced Grammar (C1-C2)"
      ].slice(0, 6),
      "Common Topics": grammarSuggestions["Common Topics"],
    };
  } else {
    // Highlight advanced grammar for C1-C2
    return {
      "Recommended for Your Level":
        grammarSuggestions["Advanced Grammar (C1-C2)"],
      "🎲 AI Random Mixed Tenses": randomTenses,
      "🔀 Mix All Tenses": ["Mix all tenses"],
      "🎯 Exam-Specific Grammar":
        grammarSuggestions["🎯 Exam-Specific Grammar"],
      "📚 Context-Based Learning":
        grammarSuggestions["📚 Context-Based Learning"],
      "🎨 Skill Integration": grammarSuggestions["🎨 Skill Integration"],
      "🌟 Creative & Fun Grammar":
        grammarSuggestions["🌟 Creative & Fun Grammar"],
      "⚡ Quick Focus Areas": grammarSuggestions["⚡ Quick Focus Areas"],
      "🔥 Problem Areas": grammarSuggestions["🔥 Problem Areas"].slice(0, 8),
      "Review Intermediate": grammarSuggestions[
        "Intermediate Grammar (B1-B2)"
      ].slice(0, 6),
    };
  }
};

export const downloadAsPDF = (
  exercise: Exercise,
  selectedAnswers: { [key: number]: string | number },
  showResults: boolean
) => {
  if (!exercise) return;

  // Create PDF content
  let pdfContent = `${exercise.title}\n\n`;

  exercise.questions.forEach((question, index) => {
    pdfContent += `${question.id}. ${question.question}\n`;

    if (question.type === "multiple-choice" && question.options) {
      question.options.forEach((option, optIndex) => {
        pdfContent += `   ${String.fromCharCode(97 + optIndex)}) ${option}\n`;
      });
    } else if (question.type === "reading-comprehension" && question.passage) {
      pdfContent += `Reading Passage: ${question.passage}\n`;
      if (question.options) {
        question.options.forEach((option, optIndex: number) => {
          pdfContent += `   ${String.fromCharCode(97 + optIndex)}) ${option}\n`;
        });
      }
    } else if (question.type === "error-correction" && question.incorrectText) {
      pdfContent += `Text to correct: ${question.incorrectText}\n`;
    } else if (question.type === "word-order" && question.words) {
      pdfContent += `Words to arrange: ${question.words.join(", ")}\n`;
    } else if (question.type === "matching" && question.pairs) {
      pdfContent += "Column A:\n";
      question.pairs.forEach((pair, pairIndex: number) => {
        pdfContent += `   ${pairIndex + 1}. ${pair.left}\n`;
      });
      pdfContent += "Column B:\n";
      question.pairs.forEach((pair, pairIndex: number) => {
        pdfContent += `   ${String.fromCharCode(97 + pairIndex)}. ${
          pair.right
        }\n`;
      });
    } else if (question.type === "cloze-test" && question.options) {
      pdfContent += `Cloze Test: ${question.question}\n`;
      question.options.forEach((option, optIndex: number) => {
        pdfContent += `   ${String.fromCharCode(97 + optIndex)}) ${option}\n`;
      });
    }

    // Add user answer if available
    if (showResults && selectedAnswers[question.id] !== undefined) {
      pdfContent += `Your answer: ${selectedAnswers[question.id]}\n`;
    }

    pdfContent += "\n";
  });

  // Add answer key
  pdfContent += "\n--- ANSWER KEY ---\n\n";
  exercise.questions.forEach((question) => {
    pdfContent += `${question.id}. ${question.correct}\n`;
    pdfContent += `Explanation: ${question.explanation}\n`;

    // Add result if user has answered
    if (showResults && selectedAnswers[question.id] !== undefined) {
      const isCorrect = selectedAnswers[question.id] === question.correct;
      pdfContent += `Result: ${isCorrect ? "✓ Correct" : "✗ Incorrect"}\n`;
    }

    pdfContent += "\n";
  });

  // Create blob and download
  const blob = new Blob([pdfContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `grammar-exercise-${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadAsWord = (
  exercise: Exercise,
  selectedAnswers: { [key: number]: string | number },
  showResults: boolean
) => {
  if (!exercise) return;

  // Create Word document content (HTML format that Word can open)
  let wordContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${exercise.title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .title { font-size: 20px; font-weight: bold; margin-bottom: 30px; text-align: center; }
          .question { margin-bottom: 25px; }
          .question-text { font-weight: bold; margin-bottom: 10px; }
          .options { margin-left: 20px; }
          .option { margin-bottom: 5px; }
          .passage { background-color: #f5f5f5; padding: 15px; margin: 10px 0; border-left: 4px solid #007acc; }
          .user-answer { background-color: #e3f2fd; padding: 10px; margin: 10px 0; border-left: 4px solid #2196f3; }
          .answer-key { page-break-before: always; margin-top: 50px; }
          .answer-key h2 { border-bottom: 2px solid #000; padding-bottom: 10px; }
          .correct { color: #4caf50; font-weight: bold; }
          .incorrect { color: #f44336; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="title">${exercise.title}</div>
    `;

  exercise.questions.forEach((question) => {
    wordContent += `<div class="question">`;
    wordContent += `<div class="question-text">${question.id}. ${question.question}</div>`;

    if (question.type === "multiple-choice" && question.options) {
      wordContent += `<div class="options">`;
      question.options.forEach((option, optIndex: number) => {
        wordContent += `<div class="option">${String.fromCharCode(
          97 + optIndex
        )}) ${option}</div>`;
      });
      wordContent += `</div>`;
    } else if (question.type === "reading-comprehension" && question.passage) {
      wordContent += `<div class="passage"><strong>Reading Passage:</strong><br>${question.passage}</div>`;
      if (question.options) {
        wordContent += `<div class="options">`;
        question.options.forEach((option, optIndex: number) => {
          wordContent += `<div class="option">${String.fromCharCode(
            97 + optIndex
          )}) ${option}</div>`;
        });
        wordContent += `</div>`;
      }
    } else if (question.type === "error-correction" && question.incorrectText) {
      wordContent += `<div class="passage"><strong>Text to correct:</strong><br>${question.incorrectText}</div>`;
      if (!showResults) {
        wordContent += `<div style="margin-top: 10px;"><strong>Your correction:</strong> ___________________________</div>`;
      }
    } else if (question.type === "word-order" && question.words) {
      wordContent += `<div><strong>Words to arrange:</strong> ${question.words.join(
        ", "
      )}</div>`;
      if (!showResults) {
        wordContent += `<div style="margin-top: 10px;"><strong>Correct order:</strong> ___________________________</div>`;
      }
    } else if (question.type === "matching" && question.pairs) {
      wordContent += `<div style="display: flex; gap: 50px;">`;
      wordContent += `<div><strong>Column A:</strong><br>`;
      question.pairs.forEach((pair, pairIndex: number) => {
        wordContent += `${pairIndex + 1}. ${pair.left}<br>`;
      });
      wordContent += `</div><div><strong>Column B:</strong><br>`;
      question.pairs.forEach((pair, pairIndex: number) => {
        wordContent += `${String.fromCharCode(97 + pairIndex)}. ${
          pair.right
        }<br>`;
      });
      wordContent += `</div></div>`;
      if (!showResults) {
        wordContent += `<div style="margin-top: 10px;"><strong>Matches:</strong> ___________________________</div>`;
      }
    } else if (question.type === "cloze-test" && question.options) {
      wordContent += `<div><strong>Cloze Test:</strong> ${question.question}</div>`;
      if (question.options) {
        wordContent += `<div class="options">`;
        question.options.forEach((option, optIndex: number) => {
          wordContent += `<div class="option">${String.fromCharCode(
            97 + optIndex
          )}) ${option}</div>`;
        });
        wordContent += `</div>`;
      }
      if (!showResults) {
        wordContent += `<div style="margin-top: 10px;"><strong>Your answers:</strong> ___________________________</div>`;
      }
    } else {
      // For fill-in-blank and sentence-completion, just show the question
      wordContent += `<div>${question.question}</div>`;
      if (!showResults) {
        wordContent += `<div style="margin-top: 10px;"><strong>Your answer:</strong> ___________________________</div>`;
      }
    }

    // Add user answer if available
    if (showResults && selectedAnswers[question.id] !== undefined) {
      const isCorrect = selectedAnswers[question.id] === question.correct;
      wordContent += `<div class="user-answer">`;
      wordContent += `<strong>Your answer:</strong> ${
        selectedAnswers[question.id]
      }<br>`;
      wordContent += `<span class="${isCorrect ? "correct" : "incorrect"}">${
        isCorrect ? "✓ Correct" : "✗ Incorrect"
      }</span>`;
      wordContent += `</div>`;
    }

    wordContent += `</div>`;
  });

  // Add answer key
  wordContent += `<div class="answer-key">`;
  wordContent += `<h2>Answer Key</h2>`;
  exercise.questions.forEach((question) => {
    wordContent += `<div style="margin-bottom: 15px;">`;
    wordContent += `<strong>${question.id}.</strong> ${question.correct}<br>`;
    wordContent += `<em>Explanation:</em> ${question.explanation}`;
    wordContent += `</div>`;
  });
  wordContent += `</div>`;

  wordContent += `</body></html>`;

  // Create blob and download
  const blob = new Blob([wordContent], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `grammar-exercise-${Date.now()}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Define comprehensive tense patterns and their variations to match all tenseDatabase keys
export const tensePatterns = [
  // BASIC TENSES (12 main tenses)
  {
    canonical: "Simple Present",
    patterns: ["simple present", "present simple", "present tense simple"],
    keywords: ["simple", "present"],
  },
  {
    canonical: "Present Continuous",
    patterns: [
      "present continuous",
      "continuous present",
      "present progressive",
      "progressive present",
    ],
    keywords: ["present", "continuous", "progressive"],
  },
  {
    canonical: "Present Perfect",
    patterns: ["present perfect", "perfect present"],
    keywords: ["present", "perfect"],
  },
  {
    canonical: "Present Perfect Continuous",
    patterns: [
      "present perfect continuous",
      "present perfect progressive",
      "perfect continuous present",
    ],
    keywords: ["present", "perfect", "continuous", "progressive"],
  },
  {
    canonical: "Simple Past",
    patterns: ["simple past", "past simple", "past tense simple"],
    keywords: ["simple", "past"],
  },
  {
    canonical: "Past Continuous",
    patterns: [
      "past continuous",
      "continuous past",
      "past progressive",
      "progressive past",
    ],
    keywords: ["past", "continuous", "progressive"],
  },
  {
    canonical: "Past Perfect",
    patterns: ["past perfect", "perfect past"],
    keywords: ["past", "perfect"],
  },
  {
    canonical: "Past Perfect Continuous",
    patterns: [
      "past perfect continuous",
      "past perfect progressive",
      "perfect continuous past",
    ],
    keywords: ["past", "perfect", "continuous", "progressive"],
  },
  {
    canonical: "Simple Future",
    patterns: [
      "simple future",
      "future simple",
      "future tense simple",
      "will future",
    ],
    keywords: ["simple", "future", "will"],
  },
  {
    canonical: "Future Continuous",
    patterns: [
      "future continuous",
      "continuous future",
      "future progressive",
      "progressive future",
    ],
    keywords: ["future", "continuous", "progressive"],
  },
  {
    canonical: "Future Perfect",
    patterns: ["future perfect", "perfect future"],
    keywords: ["future", "perfect"],
  },
  {
    canonical: "Future Perfect Continuous",
    patterns: [
      "future perfect continuous",
      "future perfect progressive",
      "perfect continuous future",
    ],
    keywords: ["future", "perfect", "continuous", "progressive"],
  },

  // CONDITIONALS
  {
    canonical: "Conditional",
    patterns: [
      "conditionals",
      "one conditional",
      "two conditional",
      "third conditional",
    ],
    keywords: ["zero", "conditional", "type", "0"],
  },

  // ADVANCED GRAMMAR STRUCTURES
  {
    canonical: "Reported Speech",
    patterns: [
      "reported speech",
      "indirect speech",
      "speech reporting",
      "direct and indirect speech",
    ],
    keywords: ["reported", "speech", "indirect", "direct"],
  },
  {
    canonical: "Relative Clauses",
    patterns: [
      "relative clauses",
      "relative clause",
      "defining relative clauses",
      "non-defining relative clauses",
    ],
    keywords: ["relative", "clauses", "clause", "defining", "non-defining"],
  },

  // ADDITIONAL GRAMMAR PATTERNS that might appear in exercises
  {
    canonical: "Passive Voice",
    patterns: [
      "passive voice",
      "passive",
      "passive construction",
      "passive form",
    ],
    keywords: ["passive", "voice"],
  },
  {
    canonical: "Modal Verbs",
    patterns: ["modal verbs", "modals", "modal verb", "modal auxiliaries"],
    keywords: ["modal", "verbs", "auxiliaries"],
  },
  {
    canonical: "Gerunds and Infinitives",
    patterns: [
      "gerunds and infinitives",
      "gerund",
      "infinitive",
      "gerunds",
      "infinitives",
    ],
    keywords: ["gerund", "infinitive", "gerunds", "infinitives"],
  },
  {
    canonical: "Articles",
    patterns: [
      "articles",
      "definite article",
      "indefinite article",
      "article usage",
    ],
    keywords: ["article", "articles", "definite", "indefinite"],
  },
  {
    canonical: "Prepositions",
    patterns: ["prepositions", "preposition", "prepositional phrases"],
    keywords: ["preposition", "prepositions", "prepositional"],
  },
  {
    canonical: "Question Formation",
    patterns: [
      "question formation",
      "questions",
      "question forms",
      "wh-questions",
      "yes/no questions",
    ],
    keywords: ["question", "questions", "formation", "wh"],
  },
  {
    canonical: "Comparatives and Superlatives",
    patterns: [
      "comparatives and superlatives",
      "comparative",
      "superlative",
      "comparison",
    ],
    keywords: [
      "comparative",
      "superlative",
      "comparison",
      "comparatives",
      "superlatives",
    ],
  },
  {
    canonical: "Subjunctive",
    patterns: ["subjunctive", "subjunctive mood", "subjunctive form"],
    keywords: ["subjunctive", "mood"],
  },
  {
    canonical: "Imperative",
    patterns: ["imperative", "imperative mood", "commands", "imperatives"],
    keywords: ["imperative", "commands", "mood"],
  },
  {
    canonical: "Tag Questions",
    patterns: ["tag questions", "question tags", "tag question"],
    keywords: ["tag", "questions"],
  },
  {
    canonical: "Inversion",
    patterns: ["inversion", "subject-verb inversion", "inverted sentences"],
    keywords: ["inversion", "inverted"],
  },
  {
    canonical: "Ellipsis",
    patterns: ["ellipsis", "elliptical constructions", "omission"],
    keywords: ["ellipsis", "elliptical", "omission"],
  },
  {
    canonical: "Substitution",
    patterns: ["substitution", "pronoun substitution", "word substitution"],
    keywords: ["substitution", "substitute"],
  },
  {
    canonical: "Cleft Sentences",
    patterns: ["cleft sentences", "cleft sentence", "it-cleft", "wh-cleft"],
    keywords: ["cleft", "sentences"],
  },
  {
    canonical: "Causative",
    patterns: [
      "causative",
      "causative verbs",
      "causative construction",
      "have something done",
    ],
    keywords: ["causative", "have", "get", "make"],
  },
  {
    canonical: "Quantifiers",
    patterns: ["quantifiers", "quantifier", "quantity words"],
    keywords: ["quantifier", "quantifiers", "quantity"],
  },
  {
    canonical: "Countable and Uncountable Nouns",
    patterns: [
      "countable and uncountable nouns",
      "countable nouns",
      "uncountable nouns",
      "count nouns",
    ],
    keywords: ["countable", "uncountable", "count", "nouns"],
  },
  {
    canonical: "Possessives",
    patterns: ["possessives", "possessive", "possessive forms", "possession"],
    keywords: ["possessive", "possessives", "possession"],
  },
  {
    canonical: "Reflexive Pronouns",
    patterns: ["reflexive pronouns", "reflexive", "reflexive pronoun"],
    keywords: ["reflexive", "pronouns"],
  },
  {
    canonical: "Word Order",
    patterns: ["word order", "sentence order", "word arrangement"],
    keywords: ["word", "order", "arrangement"],
  },
  {
    canonical: "Negation",
    patterns: ["negation", "negative", "negative forms", "negative sentences"],
    keywords: ["negation", "negative"],
  },
  {
    canonical: "Time Expressions",
    patterns: [
      "time expressions",
      "time",
      "temporal expressions",
      "time phrases",
    ],
    keywords: ["time", "expressions", "temporal"],
  },
  {
    canonical: "Tense Consistency",
    patterns: ["tense consistency", "tense agreement", "tense sequence"],
    keywords: ["tense", "consistency", "agreement", "sequence"],
  },
];

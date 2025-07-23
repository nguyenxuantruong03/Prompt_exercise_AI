"use client";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options?: string[]; // For multiple choice
  correct: number | string | string[]; // Can be index, string, or array for multiple answers
  explanation: string;
  type:
    | "multiple-choice"
    | "fill-in-blank"
    | "sentence-completion"
    | "error-correction"
    | "reading-comprehension"
    | "word-order"
    | "matching";
  passage?: string; // For reading comprehension
  incorrectText?: string; // For error correction
  words?: string[]; // For word order exercises
  pairs?: { left: string; right: string }[]; // For matching exercises
}

interface Exercise {
  title: string;
  questions: Question[];
  type:
    | "multiple-choice"
    | "fill-in-blank"
    | "sentence-completion"
    | "error-correction"
    | "reading-comprehension"
    | "word-order"
    | "matching";
}

interface GrammarError {
  original: string;
  corrected: string;
  explanation: string;
}

interface FixResponse {
  corrected: string;
  errors: GrammarError[];
}

const ExerciseGrammar = () => {
  const [inputText, setInputText] = useState("");
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [fixResult, setFixResult] = useState<FixResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number | string;
  }>({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"generate" | "fix">("generate");
  const [exerciseType, setExerciseType] = useState<
    | "multiple-choice"
    | "fill-in-blank"
    | "sentence-completion"
    | "error-correction"
    | "reading-comprehension"
    | "word-order"
    | "matching"
    | "transformation"
    | "gap-fill-listening"
    | "cloze-test"
    | "sentence-building"
    | "grammar-correction"
    | "paraphrasing"
    | "verb-conjugation"
    | "punctuation"
    | "word-formation"
    | "sentence-combining"
    | "dialogue-completion"
  >("multiple-choice");
  const [proficiencyLevel, setProficiencyLevel] = useState<
    "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
  >("A1");
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [selectedLevelInfo, setSelectedLevelInfo] = useState<string | null>(
    null
  );

  // CEFR Level equivalency data
  const levelEquivalencies = {
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
  const testExercises = {
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

  const [numExercises, setNumExercises] = useState(5);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Grammar topic suggestions
  const grammarSuggestions = {
    "Basic Grammar (A1-A2)": [
      "Simple present tense",
      "Simple past tense",
      "Simple future tense",
      "Present continuous",
      "Past continuous",
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
      "Conditional sentences (if clauses)",
      "Passive voice",
      "Modal verbs (can, could, should, must)",
      "Comparative and superlative",
      "Relative clauses",
      "Reported speech",
      "Gerunds and infinitives",
    ],
    "Advanced Grammar (C1-C2)": [
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

  // Get suggestions based on proficiency level
  const getRelevantSuggestions = () => {
    const allSuggestions = { ...grammarSuggestions };

    if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
      // Highlight basic grammar for beginners
      return {
        "Recommended for Your Level":
          grammarSuggestions["Basic Grammar (A1-A2)"],
        "Common Topics": grammarSuggestions["Common Topics"],
        "Other Topics": [
          ...grammarSuggestions["Intermediate Grammar (B1-B2)"].slice(0, 5),
          ...grammarSuggestions["Advanced Grammar (C1-C2)"].slice(0, 3),
        ],
      };
    } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
      // Highlight intermediate grammar
      return {
        "Recommended for Your Level":
          grammarSuggestions["Intermediate Grammar (B1-B2)"],
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
        "Review Intermediate": grammarSuggestions[
          "Intermediate Grammar (B1-B2)"
        ].slice(0, 6),
        "Master the Basics": grammarSuggestions["Basic Grammar (A1-A2)"].slice(
          0,
          4
        ),
        "Common Topics": grammarSuggestions["Common Topics"],
      };
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    setShowSuggestions(false);
  };

  const handleLevelClick = (level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2") => {
    setProficiencyLevel(level);
    setSelectedLevelInfo(level);
    setShowLevelModal(true);
  };

  const generateExercise = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setExercise(null);
    setFixResult(null);

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          action: "generate",
          exerciseType: exerciseType,
          proficiencyLevel: proficiencyLevel,
          numExercises: numExercises,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate exercise");
      }

      const data = await response.json();
      if (data.exercise) {
        setExercise(data.exercise);
        setSelectedAnswers({});
        setShowResults(false);
      }
    } catch (error) {
      console.error("Error generating exercise:", error);
      alert("Failed to generate exercise. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fixGrammar = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setFixResult(null);
    setExercise(null);

    try {
      const response = await fetch("/api/grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputText,
          action: "fix",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fix grammar");
      }

      const data = await response.json();
      if (data.corrected) {
        setFixResult(data);
      }
    } catch (error) {
      console.error("Error fixing grammar:", error);
      alert("Failed to fix grammar. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleInputAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setExercise(null);
    setFixResult(null);
    setSelectedAnswers({});
    setShowResults(false);
    setInputText("");
    setShowDownloadOptions(false);
    setShowSuggestions(false);
    setNumExercises(5);
  };

  const downloadAsPDF = () => {
    if (!exercise) return;

    // Create PDF content
    let pdfContent = `${exercise.title}\n\n`;

    exercise.questions.forEach((question, index) => {
      pdfContent += `${question.id}. ${question.question}\n`;

      if (question.type === "multiple-choice" && question.options) {
        question.options.forEach((option, optIndex) => {
          pdfContent += `   ${String.fromCharCode(97 + optIndex)}) ${option}\n`;
        });
      } else if (
        question.type === "reading-comprehension" &&
        question.passage
      ) {
        pdfContent += `Reading Passage: ${question.passage}\n`;
        if (question.options) {
          question.options.forEach((option, optIndex) => {
            pdfContent += `   ${String.fromCharCode(
              97 + optIndex
            )}) ${option}\n`;
          });
        }
      } else if (
        question.type === "error-correction" &&
        question.incorrectText
      ) {
        pdfContent += `Text to correct: ${question.incorrectText}\n`;
      } else if (question.type === "word-order" && question.words) {
        pdfContent += `Words to arrange: ${question.words.join(", ")}\n`;
      } else if (question.type === "matching" && question.pairs) {
        pdfContent += "Column A:\n";
        question.pairs.forEach((pair, pairIndex) => {
          pdfContent += `   ${pairIndex + 1}. ${pair.left}\n`;
        });
        pdfContent += "Column B:\n";
        question.pairs.forEach((pair, pairIndex) => {
          pdfContent += `   ${String.fromCharCode(97 + pairIndex)}. ${
            pair.right
          }\n`;
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

  const downloadAsWord = () => {
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
        question.options.forEach((option, optIndex) => {
          wordContent += `<div class="option">${String.fromCharCode(
            97 + optIndex
          )}) ${option}</div>`;
        });
        wordContent += `</div>`;
      } else if (
        question.type === "reading-comprehension" &&
        question.passage
      ) {
        wordContent += `<div class="passage"><strong>Reading Passage:</strong><br>${question.passage}</div>`;
        if (question.options) {
          wordContent += `<div class="options">`;
          question.options.forEach((option, optIndex) => {
            wordContent += `<div class="option">${String.fromCharCode(
              97 + optIndex
            )}) ${option}</div>`;
          });
          wordContent += `</div>`;
        }
      } else if (
        question.type === "error-correction" &&
        question.incorrectText
      ) {
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
        question.pairs.forEach((pair, pairIndex) => {
          wordContent += `${pairIndex + 1}. ${pair.left}<br>`;
        });
        wordContent += `</div><div><strong>Column B:</strong><br>`;
        question.pairs.forEach((pair, pairIndex) => {
          wordContent += `${String.fromCharCode(97 + pairIndex)}. ${
            pair.right
          }<br>`;
        });
        wordContent += `</div></div>`;
        if (!showResults) {
          wordContent += `<div style="margin-top: 10px;"><strong>Matches:</strong> ___________________________</div>`;
        }
      } else if (!showResults) {
        wordContent += `<div style="margin-top: 10px;"><strong>Answer:</strong> ___________________________</div>`;
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        AI Grammar Exercise Generator
      </h1>

      {/* Tab Navigation */}
      <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("generate")}
          className={`px-6 py-3 font-medium ${
            activeTab === "generate"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          }`}
        >
          Generate Exercise
        </button>
        <button
          onClick={() => setActiveTab("fix")}
          className={`px-6 py-3 font-medium ${
            activeTab === "fix"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          }`}
        >
          Fix Grammar
        </button>
      </div>

      {/* Proficiency Level Selection - only show for generate tab */}
      {activeTab === "generate" && (
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            English Proficiency Level (CEFR):
          </label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {Object.entries(levelEquivalencies).map(([level, info]) => (
              <button
                key={level}
                onClick={() => handleLevelClick(level as any)}
                className={`p-3 border rounded-lg text-center transition-all hover:shadow-md ${
                  proficiencyLevel === level
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
              >
                <div className="font-bold text-lg">{level}</div>
                <div className="text-xs opacity-75">{info.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {activeTab === "generate"
            ? "Enter a topic or text to generate grammar exercises:"
            : "Enter text to fix grammar errors:"}
        </label>

        {/* Grammar Suggestions - only show for generate tab */}
        {activeTab === "generate" && (
          <div className="mb-3">
            <button
              onClick={() => setShowSuggestions(!showSuggestions)}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Grammar Topic Suggestions
              <svg
                className={`w-4 h-4 transition-transform ${
                  showSuggestions ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {showSuggestions && (
              <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Suggestions for {proficiencyLevel} Level
                    </span>
                    <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">
                      {levelEquivalencies[proficiencyLevel].description}
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(getRelevantSuggestions()).map(
                    ([category, suggestions]) => (
                      <div key={category} className="space-y-2">
                        <h4
                          className={`font-semibold text-sm border-b pb-1 ${
                            category.includes("Recommended")
                              ? "text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-600"
                              : "text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                          }`}
                        >
                          {category.includes("Recommended") && (
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                          )}
                          {category}
                        </h4>
                        <div className="space-y-1">
                          {suggestions.map(
                            (suggestion: string, index: number) => (
                              <button
                                key={index}
                                onClick={() =>
                                  handleSuggestionClick(suggestion)
                                }
                                className={`block w-full text-left text-xs px-2 py-1 rounded transition-colors ${
                                  category.includes("Recommended")
                                    ? "text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-200"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                                }`}
                              >
                                {suggestion}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    💡 <strong>Blue topics</strong> are recommended for your
                    current level ({proficiencyLevel}). Click any suggestion to
                    use it, or type your own custom topic.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            activeTab === "generate"
              ? 'e.g., "past tense verbs" or "conditional sentences" (or use suggestions above)'
              : 'e.g., "I have went to the store yesterday"'
          }
          className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />

        {/* Exercise Type Selection - only show for generate tab */}
        {activeTab === "generate" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Exercise Type:
            </label>

            {/* Basic Exercise Types */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Basic Types
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="multiple-choice"
                    checked={exerciseType === "multiple-choice"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Multiple Choice
                    </div>
                    <div className="text-xs text-gray-500">
                      Choose from options
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="fill-in-blank"
                    checked={exerciseType === "fill-in-blank"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Fill in Blanks
                    </div>
                    <div className="text-xs text-gray-500">
                      Type missing words
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="sentence-completion"
                    checked={exerciseType === "sentence-completion"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Complete Sentences
                    </div>
                    <div className="text-xs text-gray-500">
                      Finish the sentence
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="cloze-test"
                    checked={exerciseType === "cloze-test"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Cloze Test
                    </div>
                    <div className="text-xs text-gray-500">Fill text gaps</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Advanced Exercise Types */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Advanced Types
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="transformation"
                    checked={exerciseType === "transformation"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Transformation
                    </div>
                    <div className="text-xs text-gray-500">
                      Rewrite sentences
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="paraphrasing"
                    checked={exerciseType === "paraphrasing"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Paraphrasing
                    </div>
                    <div className="text-xs text-gray-500">
                      Rephrase meaning
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="sentence-combining"
                    checked={exerciseType === "sentence-combining"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sentence Combining
                    </div>
                    <div className="text-xs text-gray-500">Join sentences</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="sentence-building"
                    checked={exerciseType === "sentence-building"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sentence Building
                    </div>
                    <div className="text-xs text-gray-500">
                      Build from words
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Specialized Exercise Types */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Specialized Types
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="verb-conjugation"
                    checked={exerciseType === "verb-conjugation"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Verb Conjugation
                    </div>
                    <div className="text-xs text-gray-500">Conjugate verbs</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="word-formation"
                    checked={exerciseType === "word-formation"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Word Formation
                    </div>
                    <div className="text-xs text-gray-500">Form new words</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="punctuation"
                    checked={exerciseType === "punctuation"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Punctuation
                    </div>
                    <div className="text-xs text-gray-500">Add punctuation</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="dialogue-completion"
                    checked={exerciseType === "dialogue-completion"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Dialogue Completion
                    </div>
                    <div className="text-xs text-gray-500">
                      Complete dialogues
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Original Exercise Types */}
            <div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Other Types
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="error-correction"
                    checked={exerciseType === "error-correction"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Error Correction
                    </div>
                    <div className="text-xs text-gray-500">
                      Find and fix errors
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="reading-comprehension"
                    checked={exerciseType === "reading-comprehension"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Reading Comprehension
                    </div>
                    <div className="text-xs text-gray-500">Read and answer</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="word-order"
                    checked={exerciseType === "word-order"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Word Order
                    </div>
                    <div className="text-xs text-gray-500">
                      Arrange words correctly
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="exerciseType"
                    value="matching"
                    checked={exerciseType === "matching"}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Matching
                    </div>
                    <div className="text-xs text-gray-500">
                      Match items together
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Number of Exercises Selection - only show for generate tab */}
        {activeTab === "generate" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Exercises:
            </label>
            <div className="flex items-center gap-4">
              <select
                value={numExercises}
                onChange={(e) => setNumExercises(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                {Array.from({ length: 10 }, (_, i) => (i + 1) * 5).map(
                  (num) => (
                    <option key={num} value={num}>
                      {num} exercises
                    </option>
                  )
                )}
              </select>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                (5-50 exercises, default: 5)
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-4">
          {activeTab === "generate" ? (
            <button
              onClick={generateExercise}
              disabled={loading || !inputText.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Generating...
                </>
              ) : (
                "Generate Exercise"
              )}
            </button>
          ) : (
            <button
              onClick={fixGrammar}
              disabled={loading || !inputText.trim()}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Fixing...
                </>
              ) : (
                "Fix Grammar"
              )}
            </button>
          )}
          <button
            onClick={resetExercise}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Exercise Display */}
      {exercise && (
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            {exercise.title}
          </h2>
          {exercise.questions.map((question) => (
            <div
              key={question.id}
              className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                {question.id}. {question.question}
              </h3>

              {/* Render based on question type */}
              {question.type === "multiple-choice" && question.options ? (
                <div className="space-y-2">
                  {question.options.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={index}
                        checked={selectedAnswers[question.id] === index}
                        onChange={() => handleAnswerSelect(question.id, index)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span
                        className={`${
                          showResults
                            ? index === question.correct
                              ? "text-green-600 font-semibold"
                              : selectedAnswers[question.id] === index &&
                                index !== question.correct
                              ? "text-red-600"
                              : "text-gray-700 dark:text-gray-300"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              ) : question.type === "fill-in-blank" ||
                question.type === "sentence-completion" ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={(selectedAnswers[question.id] as string) || ""}
                    onChange={(e) =>
                      handleInputAnswer(question.id, e.target.value)
                    }
                    placeholder="Type your answer here..."
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      showResults
                        ? selectedAnswers[question.id] === question.correct
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                          : "border-red-500 bg-red-50 dark:bg-red-900/20"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    disabled={showResults}
                  />
                  {showResults && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your answer:{" "}
                        <span
                          className={
                            selectedAnswers[question.id] === question.correct
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {selectedAnswers[question.id] || "(no answer)"}
                        </span>
                      </p>
                      <p className="text-sm text-green-600">
                        Correct answer:{" "}
                        <span className="font-semibold">
                          {question.correct}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ) : question.type === "reading-comprehension" ? (
                <div className="space-y-4">
                  {question.passage && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold mb-2">Reading Passage:</h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        {question.passage}
                      </p>
                    </div>
                  )}
                  {question.options ? (
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <label
                          key={index}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={index}
                            checked={selectedAnswers[question.id] === index}
                            onChange={() =>
                              handleAnswerSelect(question.id, index)
                            }
                            className="w-4 h-4 text-blue-600"
                          />
                          <span
                            className={`${
                              showResults
                                ? index === question.correct
                                  ? "text-green-600 font-semibold"
                                  : selectedAnswers[question.id] === index &&
                                    index !== question.correct
                                  ? "text-red-600"
                                  : "text-gray-700 dark:text-gray-300"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={(selectedAnswers[question.id] as string) || ""}
                      onChange={(e) =>
                        handleInputAnswer(question.id, e.target.value)
                      }
                      placeholder="Type your answer here..."
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                        showResults
                          ? selectedAnswers[question.id] === question.correct
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      disabled={showResults}
                    />
                  )}
                </div>
              ) : question.type === "error-correction" ? (
                <div className="space-y-4">
                  {question.incorrectText && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">
                        Find and correct the error(s):
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        {question.incorrectText}
                      </p>
                    </div>
                  )}
                  <textarea
                    value={(selectedAnswers[question.id] as string) || ""}
                    onChange={(e) =>
                      handleInputAnswer(question.id, e.target.value)
                    }
                    placeholder="Write the corrected version here..."
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      showResults
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    rows={3}
                    disabled={showResults}
                  />
                  {showResults && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your correction:{" "}
                        <span className="text-blue-600">
                          {selectedAnswers[question.id] || "(no answer)"}
                        </span>
                      </p>
                      <p className="text-sm text-green-600">
                        Correct version:{" "}
                        <span className="font-semibold">
                          {question.correct}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ) : question.type === "word-order" ? (
                <div className="space-y-4">
                  {question.words && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                        Arrange these words in the correct order:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {question.words.map((word, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white dark:bg-gray-700 border rounded-lg text-sm"
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <input
                    type="text"
                    value={(selectedAnswers[question.id] as string) || ""}
                    onChange={(e) =>
                      handleInputAnswer(question.id, e.target.value)
                    }
                    placeholder="Write the sentence in correct order..."
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      showResults
                        ? selectedAnswers[question.id] === question.correct
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                          : "border-red-500 bg-red-50 dark:bg-red-900/20"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    disabled={showResults}
                  />
                  {showResults && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your answer:{" "}
                        <span
                          className={
                            selectedAnswers[question.id] === question.correct
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {selectedAnswers[question.id] || "(no answer)"}
                        </span>
                      </p>
                      <p className="text-sm text-green-600">
                        Correct order:{" "}
                        <span className="font-semibold">
                          {question.correct}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ) : question.type === "matching" ? (
                <div className="space-y-4">
                  {question.pairs && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Column A:</h4>
                        <div className="space-y-2">
                          {question.pairs.map((pair, index) => (
                            <div
                              key={index}
                              className="p-2 bg-gray-50 dark:bg-gray-700 rounded"
                            >
                              {index + 1}. {pair.left}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Column B:</h4>
                        <div className="space-y-2">
                          {question.pairs.map((pair, index) => (
                            <div
                              key={index}
                              className="p-2 bg-gray-50 dark:bg-gray-700 rounded"
                            >
                              {String.fromCharCode(97 + index)}. {pair.right}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <input
                    type="text"
                    value={(selectedAnswers[question.id] as string) || ""}
                    onChange={(e) =>
                      handleInputAnswer(question.id, e.target.value)
                    }
                    placeholder="Enter matches (e.g., 1a, 2c, 3b)..."
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                      showResults
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    disabled={showResults}
                  />
                  {showResults && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your matches:{" "}
                        <span className="text-blue-600">
                          {selectedAnswers[question.id] || "(no answer)"}
                        </span>
                      </p>
                      <p className="text-sm text-green-600">
                        Correct matches:{" "}
                        <span className="font-semibold">
                          {question.correct}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ) : null}
              {showResults && (
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
          {!showResults && (
            <div className="flex gap-3 items-center">
              <button
                onClick={checkAnswers}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Check Answers
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  or
                </span>
                <button
                  onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                >
                  Download Options
                </button>
              </div>
            </div>
          )}

          {/* Show download options after results as well */}
          {showResults && (
            <div className="mt-4 flex gap-3 items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Exercise completed! You can also:
              </div>
              <button
                onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
              >
                Download Exercise
              </button>
            </div>
          )}

          {/* Download Options */}
          {showDownloadOptions && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Download Exercise
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Download the exercise to work offline or print it out.{" "}
                {showResults
                  ? "Your answers and results are included."
                  : "Answer key and explanations are included."}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={downloadAsPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download as PDF/Text
                </button>
                <button
                  onClick={downloadAsWord}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm6 10a1 1 0 01-1-1V8a1 1 0 112 0v5a1 1 0 01-1 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download as Word
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Downloads include answer key and explanations
              </div>
            </div>
          )}
        </div>
      )}

      {/* Grammar Fix Results */}
      {fixResult && (
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Grammar Correction Results
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
              Corrected Text:
            </h3>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200">
                {fixResult.corrected}
              </p>
            </div>
          </div>

          {fixResult.errors && fixResult.errors.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Errors Found:
              </h3>
              <div className="space-y-3">
                {fixResult.errors.map((error, index) => (
                  <div
                    key={index}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <div className="mb-2">
                      <span className="text-red-600 dark:text-red-400 line-through">
                        {error.original}
                      </span>
                      <span className="mx-2">→</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">
                        {error.corrected}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Explanation:</strong> {error.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Level Equivalency Modal */}
      {showLevelModal && selectedLevelInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  CEFR Level {selectedLevelInfo} -{" "}
                  {
                    levelEquivalencies[
                      selectedLevelInfo as keyof typeof levelEquivalencies
                    ].description
                  }
                </h2>
                <button
                  onClick={() => setShowLevelModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Equivalency Information */}
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      IELTS Score
                    </h3>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-300">
                      {
                        levelEquivalencies[
                          selectedLevelInfo as keyof typeof levelEquivalencies
                        ].ielts
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      TOEFL Score
                    </h3>
                    <p className="text-xl font-bold text-green-600 dark:text-green-300">
                      {
                        levelEquivalencies[
                          selectedLevelInfo as keyof typeof levelEquivalencies
                        ].toefl
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      TOEIC Score
                    </h3>
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-300">
                      {
                        levelEquivalencies[
                          selectedLevelInfo as keyof typeof levelEquivalencies
                        ].toeic
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Cambridge
                    </h3>
                    <p className="text-sm font-bold text-orange-600 dark:text-orange-300">
                      {
                        levelEquivalencies[
                          selectedLevelInfo as keyof typeof levelEquivalencies
                        ].cambridge
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                      VSTEP Score
                    </h3>
                    <p className="text-xl font-bold text-red-600 dark:text-red-300">
                      {
                        levelEquivalencies[
                          selectedLevelInfo as keyof typeof levelEquivalencies
                        ].vstep
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                      APTIS Level
                    </h3>
                    <p className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
                      {
                        levelEquivalencies[
                          selectedLevelInfo as keyof typeof levelEquivalencies
                        ].aptis
                      }
                    </p>
                  </div>
                </div>

                {/* Level Description */}
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Level Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {
                      levelEquivalencies[
                        selectedLevelInfo as keyof typeof levelEquivalencies
                      ].details
                    }
                  </p>
                </div>

                {/* Additional Information */}
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    About CEFR Levels
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    The Common European Framework of Reference for Languages
                    (CEFR) is an international standard for describing language
                    ability. It describes language ability on a six-point scale,
                    from A1 for beginners, up to C2 for those who have mastered
                    the language.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowExerciseModal(true)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => setShowLevelModal(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setShowLevelModal(false);
                      // Level is already set by handleLevelClick
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Use {selectedLevelInfo} Level
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exercise Recommendations Modal */}
      {showExerciseModal && selectedLevelInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Exercise Recommendations for {selectedLevelInfo} Level
                </h2>
                <button
                  onClick={() => setShowExerciseModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Test-specific exercises */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* IELTS Exercises */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm mr-2">
                        IELTS
                      </span>
                      Level {selectedLevelInfo} Preparation
                    </h3>
                    <ul className="space-y-2">
                      {testExercises.ielts[
                        selectedLevelInfo as keyof typeof testExercises.ielts
                      ].map((exercise, index) => (
                        <li
                          key={index}
                          className="text-sm text-blue-700 dark:text-blue-300 flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TOEFL Exercises */}
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center">
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-sm mr-2">
                        TOEFL
                      </span>
                      Level {selectedLevelInfo} Preparation
                    </h3>
                    <ul className="space-y-2">
                      {testExercises.toefl[
                        selectedLevelInfo as keyof typeof testExercises.toefl
                      ].map((exercise, index) => (
                        <li
                          key={index}
                          className="text-sm text-green-700 dark:text-green-300 flex items-start"
                        >
                          <span className="text-green-500 mr-2">•</span>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TOEIC Exercises */}
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm mr-2">
                        TOEIC
                      </span>
                      Level {selectedLevelInfo} Preparation
                    </h3>
                    <ul className="space-y-2">
                      {testExercises.toeic[
                        selectedLevelInfo as keyof typeof testExercises.toeic
                      ].map((exercise, index) => (
                        <li
                          key={index}
                          className="text-sm text-purple-700 dark:text-purple-300 flex items-start"
                        >
                          <span className="text-purple-500 mr-2">•</span>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cambridge Exercises */}
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
                      <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm mr-2">
                        Cambridge
                      </span>
                      Level {selectedLevelInfo} Preparation
                    </h3>
                    <ul className="space-y-2">
                      {testExercises.cambridge[
                        selectedLevelInfo as keyof typeof testExercises.cambridge
                      ].map((exercise, index) => (
                        <li
                          key={index}
                          className="text-sm text-orange-700 dark:text-orange-300 flex items-start"
                        >
                          <span className="text-orange-500 mr-2">•</span>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* VSTEP Exercises */}
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-sm mr-2">
                        VSTEP
                      </span>
                      Level {selectedLevelInfo} Preparation
                    </h3>
                    <ul className="space-y-2">
                      {testExercises.vstep[
                        selectedLevelInfo as keyof typeof testExercises.vstep
                      ].map((exercise, index) => (
                        <li
                          key={index}
                          className="text-sm text-red-700 dark:text-red-300 flex items-start"
                        >
                          <span className="text-red-500 mr-2">•</span>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* APTIS Exercises */}
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center">
                      <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm mr-2">
                        APTIS
                      </span>
                      Level {selectedLevelInfo} Preparation
                    </h3>
                    <ul className="space-y-2">
                      {testExercises.aptis[
                        selectedLevelInfo as keyof typeof testExercises.aptis
                      ].map((exercise, index) => (
                        <li
                          key={index}
                          className="text-sm text-indigo-700 dark:text-indigo-300 flex items-start"
                        >
                          <span className="text-indigo-500 mr-2">•</span>
                          {exercise}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* General Tips */}
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    General Study Tips for {selectedLevelInfo} Level
                  </h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <p className="mb-2">
                      <strong>Study Schedule:</strong> Dedicate at least{" "}
                      {selectedLevelInfo === "A1" || selectedLevelInfo === "A2"
                        ? "1-2 hours daily"
                        : selectedLevelInfo === "B1" ||
                          selectedLevelInfo === "B2"
                        ? "2-3 hours daily"
                        : "3-4 hours daily"}{" "}
                      to reach this level effectively.
                    </p>
                    <p className="mb-2">
                      <strong>Focus Areas:</strong> Balance all four skills
                      (Reading, Writing, Listening, Speaking) with equal
                      attention.
                    </p>
                    <p>
                      <strong>Time Frame:</strong> Expect{" "}
                      {selectedLevelInfo === "A1"
                        ? "3-6 months"
                        : selectedLevelInfo === "A2"
                        ? "4-8 months"
                        : selectedLevelInfo === "B1"
                        ? "6-12 months"
                        : selectedLevelInfo === "B2"
                        ? "8-15 months"
                        : selectedLevelInfo === "C1"
                        ? "12-24 months"
                        : "18-36 months"}{" "}
                      of consistent study to achieve this level from the
                      previous one.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowExerciseModal(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setShowExerciseModal(false);
                      setShowLevelModal(false);
                      // Level is already set
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Start Practicing with {selectedLevelInfo}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseGrammar;

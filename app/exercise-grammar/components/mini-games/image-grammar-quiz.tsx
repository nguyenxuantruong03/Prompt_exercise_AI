"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Exercise, Question } from "@/types/grammars/grammars_type";
import {
  Image,
  Eye,
  Loader,
  Trophy,
  CheckCircle,
  XCircle,
  Type,
  Radio,
} from "lucide-react";
import { toast } from "react-hot-toast";

interface ImageGrammarQuizProps {
  exercise: Exercise;
  onComplete: (results: ImageQuizResults) => void;
  onQuestionAnswer: (questionId: number, answer: number | string) => void;
  selectedAnswers: { [key: number]: number | string };
  timeLimit?: number;
  pauseBetweenQuestions?: number;
}

interface ImageQuizResults {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  averageTimePerQuestion: number;
  visualComprehensionScore: number;
  finalScore: number;
}

interface GeneratedImage {
  url: string;
  prompt: string;
  description: string;
  isLoaded: boolean;
  hasError: boolean;
}

interface ImageContext {
  questionType: "multiple-choice" | "text-input" | "fill-blank";
  contextPrompt: string;
  imagePrompt: string;
  expectedAnswer: string | number;
  hints: string[];
}

const ImageGrammarQuizGame: React.FC<ImageGrammarQuizProps> = ({
  exercise,
  onComplete,
  onQuestionAnswer,
  selectedAnswers,
  timeLimit: userTimeLimit = 20, // Default 20 seconds for image quiz
  pauseBetweenQuestions = 3,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStartTime, setGameStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [generatedImages, setGeneratedImages] = useState<{
    [key: number]: GeneratedImage;
  }>({});
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [textInput, setTextInput] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = exercise.questions[currentQuestionIndex];

  useEffect(() => {
    if (gameStarted && currentQuestion) {
      // Generate imageGrammarData if it doesn't exist
      if (!currentQuestion.imageGrammarData) {
        const syntheticImageData = generateSyntheticImageData(currentQuestion);
        currentQuestion.imageGrammarData = syntheticImageData;
      }

      if (!generatedImages[currentQuestion.id]) {
        generateImageForQuestion(currentQuestion);
      }
    }
    // Reset input states when question changes
    setTextInput("");
    setSelectedOption(null);
  }, [currentQuestionIndex, gameStarted, currentQuestion]);

  // Generate synthetic image data for questions that don't have imageGrammarData
  const generateSyntheticImageData = (question: Question) => {
    // Extract grammar focus from question content and options
    const grammarFocus =
      extractGrammarFocus(question.question, question.options) ||
      "English grammar";

    // Create image prompt based on actual question content
    const imagePrompt = createImagePromptFromQuestion(question);

    // Create image description that matches the question context
    const imageDescription = createImageDescription(question, grammarFocus);

    return {
      imagePrompt,
      imageDescription,
      grammarFocus,
      alternatives: question.options || [],
    };
  };

  const extractGrammarFocus = (
    questionText: string,
    options?: string[]
  ): string => {
    // Combine question text with options for better context analysis
    const fullContext = questionText + " " + (options?.join(" ") || "");

    // Enhanced grammar patterns with context analysis
    const grammarPatterns = [
      {
        pattern:
          /present.*simple|do.*does|don't.*doesn't|every.*day|usually|always|often|sometimes/i,
        focus: "present simple tense",
      },
      {
        pattern:
          /past.*simple|yesterday|ago|last.*week|did.*not|didn't|was.*were/i,
        focus: "past simple tense",
      },
      {
        pattern:
          /present.*continuous|ing\b|now|currently|at.*moment|right.*now/i,
        focus: "present continuous tense",
      },
      {
        pattern: /past.*continuous|was.*ing|were.*ing|while|during/i,
        focus: "past continuous tense",
      },
      {
        pattern: /will|going.*to|future|tomorrow|next.*week|shall/i,
        focus: "future tense",
      },
      {
        pattern:
          /can|could|may|might|must|should|would|ought.*to|have.*to|need.*to/i,
        focus: "modal verbs",
      },
      {
        pattern: /\ba\b|\ban\b|\bthe\b|article|definite|indefinite/i,
        focus: "articles (a, an, the)",
      },
      {
        pattern:
          /in|on|at|under|over|between|behind|next.*to|in.*front.*of|preposition/i,
        focus: "prepositions",
      },
      {
        pattern:
          /more.*than|less.*than|-er\b|-est\b|better|best|worse|worst|comparative|superlative/i,
        focus: "comparative and superlative",
      },
      {
        pattern: /passive|by\b.*agent|was.*ed|were.*ed|been.*ed|being.*ed/i,
        focus: "passive voice",
      },
      {
        pattern:
          /if.*would|if.*will|conditional|unless|provided.*that|suppose/i,
        focus: "conditional sentences",
      },
      {
        pattern: /question.*tag|isn't.*it|aren't.*they|don't.*you|doesn't.*he/i,
        focus: "question tags",
      },
      {
        pattern:
          /reported.*speech|said.*that|told.*that|asked.*if|indirect.*speech/i,
        focus: "reported speech",
      },
      {
        pattern: /gerund|infinitive|to\s+\w+|ing\s+form/i,
        focus: "gerunds and infinitives",
      },
      {
        pattern:
          /present.*perfect|has.*ed|have.*ed|since|for.*time|already|yet|just/i,
        focus: "present perfect tense",
      },
    ];

    for (const { pattern, focus } of grammarPatterns) {
      if (pattern.test(fullContext)) {
        return focus;
      }
    }

    return "English grammar usage";
  };

  const createImageDescription = (
    question: Question,
    grammarFocus: string
  ): string => {
    // Analyze question content to create relevant description
    const questionLower = question.question.toLowerCase();
    const options = question.options || [];

    // Extract key nouns and context from the question
    const contextKeywords = extractContextKeywords(question.question, options);

    if (contextKeywords.length > 0) {
      return `A scene showing ${contextKeywords.join(
        ", "
      )} that demonstrates ${grammarFocus} usage`;
    }

    return `A visual scene demonstrating ${grammarFocus} in a practical, educational context`;
  };

  const extractContextKeywords = (
    questionText: string,
    options: string[]
  ): string[] => {
    const keywords: string[] = [];
    const allText = (questionText + " " + options.join(" ")).toLowerCase();

    // Common context indicators
    const contextPatterns = [
      {
        pattern: /school|classroom|teacher|student|lesson|homework/g,
        context: "educational environments",
      },
      {
        pattern: /home|house|family|kitchen|bedroom|living room/g,
        context: "home situations",
      },
      {
        pattern: /work|office|job|meeting|colleague|boss/g,
        context: "workplace scenarios",
      },
      {
        pattern: /restaurant|food|eat|drink|cook|meal/g,
        context: "dining and food",
      },
      {
        pattern: /travel|airport|hotel|vacation|trip|journey/g,
        context: "travel situations",
      },
      {
        pattern: /shop|shopping|buy|sell|store|market/g,
        context: "shopping scenarios",
      },
      {
        pattern: /park|street|city|town|bus|car|walk/g,
        context: "outdoor and transport",
      },
      {
        pattern: /friend|party|birthday|celebration|meet/g,
        context: "social interactions",
      },
      {
        pattern: /book|read|write|study|library|exam/g,
        context: "learning activities",
      },
      {
        pattern: /sports|play|game|exercise|gym|run/g,
        context: "sports and activities",
      },
    ];

    for (const { pattern, context } of contextPatterns) {
      if (pattern.test(allText)) {
        keywords.push(context);
        break; // Use first matching context to avoid overloading
      }
    }

    return keywords;
  };

  const createImagePromptFromQuestion = (question: Question): string => {
    const grammarFocus = extractGrammarFocus(
      question.question,
      question.options
    );
    const contextKeywords = extractContextKeywords(
      question.question,
      question.options || []
    );
    const questionContent = question.question.toLowerCase();

    // Get the correct answer to base the image on
    const correctAnswer = Array.isArray(question.correct)
      ? question.correct[0]
      : question.correct;
    let correctAnswerText = "";

    // If it's multiple choice, get the correct option text
    if (
      question.options &&
      typeof correctAnswer === "number" &&
      question.options[correctAnswer]
    ) {
      correctAnswerText = question.options[correctAnswer];
    } else {
      correctAnswerText = String(correctAnswer);
    }

    // Create image prompts that visually demonstrate the concept without showing the answer text
    let basePrompt = "";

    if (contextKeywords.includes("educational environments")) {
      basePrompt = `A classroom scene that naturally demonstrates the grammar concept through student activities and learning environment`;
    } else if (contextKeywords.includes("home situations")) {
      basePrompt = `A home environment showing family members in daily activities that illustrate the grammar concept`;
    } else if (contextKeywords.includes("workplace scenarios")) {
      basePrompt = `An office setting with professionals engaged in activities that demonstrate the grammar concept`;
    } else if (contextKeywords.includes("dining and food")) {
      basePrompt = `A dining scene with people and food that naturally illustrates the grammar concept through actions and objects`;
    } else if (contextKeywords.includes("travel situations")) {
      basePrompt = `A travel scene with tourists and activities that demonstrate the grammar concept through situational context`;
    } else if (contextKeywords.includes("shopping scenarios")) {
      basePrompt = `A shopping environment with customers and interactions that illustrate the grammar concept`;
    } else if (contextKeywords.includes("social interactions")) {
      basePrompt = `People socializing in a way that naturally demonstrates the grammar concept through their activities`;
    } else if (contextKeywords.includes("sports and activities")) {
      basePrompt = `An active scene with people engaged in sports or activities that illustrate the grammar concept`;
    } else {
      // Answer-focused prompts based on grammar type and correct answer context
      basePrompt = createAnswerFocusedPrompt(
        grammarFocus,
        correctAnswerText,
        question
      );
    }

    // Add instruction for visual-only demonstration without showing text
    const visualDetails = ` The image should naturally guide students toward the correct understanding through visual storytelling, environmental cues, and contextual details. No text, words, or grammar terms should be visible in the image.`;

    return basePrompt + visualDetails;
  };

  const createAnswerFocusedPrompt = (
    grammarFocus: string,
    correctAnswer: string,
    question: Question
  ): string => {
    const answerLower = correctAnswer.toLowerCase();

    // Extract key visual elements from the answer without showing text
    const extractVisualElements = (answer: string): string[] => {
      const elements: string[] = [];

      // Extract nouns and action words
      const words = answer.toLowerCase().split(/\s+/);
      const commonActions = [
        "study",
        "studies",
        "work",
        "works",
        "play",
        "plays",
        "eat",
        "eats",
        "sleep",
        "sleeps",
        "read",
        "reads",
        "write",
        "writes",
        "walk",
        "walks",
        "run",
        "runs",
        "sit",
        "sits",
        "stand",
        "stands",
      ];
      const commonObjects = [
        "book",
        "books",
        "table",
        "desk",
        "chair",
        "computer",
        "phone",
        "bag",
        "cup",
        "glass",
        "car",
        "bus",
        "house",
        "school",
        "park",
        "library",
      ];
      const timeWords = [
        "morning",
        "afternoon",
        "evening",
        "night",
        "day",
        "week",
        "today",
        "yesterday",
        "tomorrow",
      ];

      words.forEach((word) => {
        if (commonActions.includes(word))
          elements.push(`${word.replace(/s$/, "")}ing action`);
        if (commonObjects.includes(word)) elements.push(word);
        if (timeWords.includes(word)) elements.push(`${word} setting`);
      });

      return elements;
    };

    const visualElements = extractVisualElements(correctAnswer);

    // Create highly specific visual prompts without showing text or grammar terms
    switch (grammarFocus) {
      case "present simple tense":
        if (
          answerLower.includes("every day") ||
          answerLower.includes("usually") ||
          answerLower.includes("always")
        ) {
          const elements =
            visualElements.length > 0
              ? visualElements.join(", ")
              : "daily routine activities";
          return `A bright, organized scene showing ${elements} with visual cues like wall calendars, schedules, or routine patterns that suggest regularity and habit`;
        } else if (answerLower.includes("does") || answerLower.includes("do")) {
          const action =
            visualElements.find((e) => e.includes("action")) || "studying";
          return `A person actively ${action} in a well-lit environment with visible tools or materials that support this activity`;
        }
        const activity =
          visualElements.length > 0 ? visualElements[0] : "routine activity";
        return `A scene showing ${activity} with visual indicators of regularity like organized spaces, schedules, or habitual settings`;

      case "past simple tense":
        if (answerLower.includes("yesterday") || answerLower.includes("ago")) {
          const elements =
            visualElements.length > 0
              ? visualElements.join(", ")
              : "completed activities";
          return `A scene with ${elements} and visual past indicators like crossed-out calendar dates, finished projects, or completed tasks without any visible text`;
        } else if (
          answerLower.includes("was") ||
          answerLower.includes("were")
        ) {
          return `A scene showing the completed state or past condition with visual evidence like old photos, vintage items, or finished results`;
        }
        const pastActivity =
          visualElements.length > 0 ? visualElements[0] : "completed action";
        return `A scene showing ${pastActivity} with visual markers of completion like finished work, empty plates, or accomplished tasks`;

      case "present continuous tense":
        if (answerLower.includes("ing")) {
          const action =
            visualElements.find((e) => e.includes("action")) || "active work";
          return `People in the middle of ${action} with motion blur, active postures, and ongoing visual activity like papers being moved or tools being used`;
        }
        return `A dynamic scene with visible ongoing action, motion, and activity in progress with people actively engaged`;

      case "modal verbs":
        if (answerLower.includes("can")) {
          const ability =
            visualElements.find((e) => e.includes("action")) ||
            "skill demonstration";
          return `A scene showing successful ${ability} with visible tools, completed work, or demonstrations of capability and skill`;
        } else if (
          answerLower.includes("must") ||
          answerLower.includes("have to")
        ) {
          return `A scene with visual obligation markers like warning signs, required equipment, safety gear, or mandatory items without text`;
        } else if (answerLower.includes("should")) {
          return `A scene showing recommended or advisable actions with visual guidance like arrows, proper positioning, or ideal conditions`;
        }
        return `A situation with clear visual context that supports the modal concept through environmental cues and object positioning`;

      case "prepositions":
        const extractPreposition = (answer: string): string => {
          if (answer.includes(" on ")) return "on";
          if (answer.includes(" in ")) return "in";
          if (answer.includes(" at ")) return "at";
          if (answer.includes(" under ")) return "under";
          if (answer.includes(" over ")) return "over";
          if (answer.includes(" between ")) return "between";
          if (answer.includes(" behind ")) return "behind";
          if (answer.includes(" next to ")) return "next to";
          return "spatial";
        };

        const prep = extractPreposition(answerLower);
        const prepObjects =
          visualElements.filter((e) => !e.includes("action")).join(" and ") ||
          "objects";

        switch (prep) {
          case "on":
            return `${prepObjects} clearly positioned on top of surfaces like tables, desks, or shelves with obvious surface contact`;
          case "in":
            return `${prepObjects} clearly positioned inside containers, rooms, or enclosed spaces with visible boundaries`;
          case "at":
            return `${prepObjects} positioned at specific locations like doorways, corners, or designated spots with clear location markers`;
          case "under":
            return `${prepObjects} clearly positioned underneath other objects with visible overhead coverage`;
          case "over":
            return `${prepObjects} positioned above other items with clear vertical separation`;
          case "between":
            return `${prepObjects} positioned between two other items with clear middle placement`;
          default:
            return `${prepObjects} with clear spatial relationships that show precise positioning and location`;
        }

      case "articles (a, an, the)":
        const extractArticleContext = (
          answer: string
        ): "specific" | "general" => {
          return answer.toLowerCase().startsWith("the ")
            ? "specific"
            : "general";
        };

        const articleType = extractArticleContext(answerLower);
        const noun = visualElements[0] || "object";

        if (articleType === "specific") {
          return `A scene emphasizing one unique, distinctive ${noun} that stands out clearly from its surroundings, pointing or focusing elements, special lighting on the specific item`;
        } else {
          return `A scene with multiple similar ${noun}s where one represents a general example among many identical or similar items`;
        }

      case "comparative and superlative":
        const comparisonElements = visualElements.filter(
          (e) => !e.includes("action")
        );
        const comparisonObjects =
          comparisonElements.length > 0 ? comparisonElements : ["items"];

        if (
          answerLower.includes("er than") ||
          answerLower.includes("more than")
        ) {
          return `Two ${comparisonObjects.join(
            " and "
          )} side by side with visible size, height, or quality differences that make comparison obvious`;
        } else if (
          answerLower.includes("est") ||
          answerLower.includes("most")
        ) {
          return `Multiple ${comparisonObjects.join(
            ", "
          )} arranged where one clearly stands out as the most extreme example among the group`;
        }
        return `${comparisonObjects.join(
          " and "
        )} arranged for clear visual comparison with obvious differences in size, quality, or characteristics`;

      case "passive voice":
        const action =
          visualElements.find((e) => e.includes("action")) || "work";
        return `A scene focusing on the ${action} result or process rather than the person doing it, showing completed work, finished products, or results`;

      case "conditional sentences":
        return `A split scene or before-and-after comparison showing cause and effect relationships through visual storytelling`;

      case "future tense":
        const futureElements =
          visualElements.length > 0
            ? visualElements.join(", ")
            : "planned activities";
        return `A scene with ${futureElements} and visual future indicators like calendars with future dates circled, preparation materials, or planning documents`;

      default:
        const mainElements =
          visualElements.length > 0
            ? visualElements.join(", ")
            : "educational scene";
        return `A clear ${mainElements} scene that visually demonstrates the grammar concept through environmental details and object relationships`;
    }
  };

  const getQuestionType = (
    question: Question
  ): "multiple-choice" | "text-input" | "fill-blank" => {
    // Enhanced question type detection with visual context
    if (question.options && question.options.length > 0) {
      return "multiple-choice";
    } else if (
      question.question.includes("___") ||
      question.question.includes("blank") ||
      question.question.includes("fill")
    ) {
      return "fill-blank";
    } else {
      return "text-input";
    }
  };

  const enhanceQuestionForVisualContext = (question: Question): string => {
    // Make question more visual-context aware
    const originalQuestion = question.question;
    const grammarFocus = extractGrammarFocus(
      originalQuestion,
      question.options
    );

    // Add visual instruction prefix based on question type
    const questionType = getQuestionType(question);

    let visualInstruction = "";

    if (questionType === "multiple-choice") {
      visualInstruction = "Look at the image and choose the correct answer: ";
    } else if (questionType === "fill-blank") {
      visualInstruction =
        "Based on what you see in the image, fill in the blank: ";
    } else {
      visualInstruction = "Analyze the image and answer: ";
    }

    // If question doesn't already mention visual elements, enhance it
    if (
      !originalQuestion.toLowerCase().includes("image") &&
      !originalQuestion.toLowerCase().includes("picture") &&
      !originalQuestion.toLowerCase().includes("see") &&
      !originalQuestion.toLowerCase().includes("look")
    ) {
      return visualInstruction + originalQuestion;
    }

    return originalQuestion;
  };

  const generateVisuallyRelevantOptions = (
    question: Question,
    grammarFocus: string
  ): string[] => {
    // If question already has options, enhance them with visual context
    if (question.options && question.options.length > 0) {
      return question.options.map((option) => {
        // Keep original options but ensure they make sense in visual context
        return option;
      });
    }

    // Generate visual options based on grammar focus if none exist
    const visualOptions: { [key: string]: string[] } = {
      "present simple tense": [
        "He studies in the classroom every day",
        "He is studying in the classroom now",
        "He studied in the classroom yesterday",
        "He will study in the classroom tomorrow",
      ],
      "modal verbs": [
        "The students can see the board",
        "The students are seeing the board",
        "The students saw the board",
        "The students will see the board",
      ],
      prepositions: [
        "The book is on the desk",
        "The book is in the desk",
        "The book is at the desk",
        "The book is under the desk",
      ],
      "articles (a, an, the)": [
        "Look at the blackboard",
        "Look at a blackboard",
        "Look at an blackboard",
        "Look at blackboard",
      ],
    };

    return (
      visualOptions[grammarFocus] || [
        "Option A based on the image",
        "Option B based on the image",
        "Option C based on the image",
        "Option D based on the image",
      ]
    );
  };

  const getImageContext = (question: Question): ImageContext | null => {
    if (!question.imageGrammarData) return null;

    const expectedAnswer = Array.isArray(question.correct)
      ? question.correct[0]
      : question.correct;

    return {
      questionType: getQuestionType(question),
      contextPrompt: question.imageGrammarData.imageDescription,
      imagePrompt: question.imageGrammarData.imagePrompt,
      expectedAnswer,
      hints: question.tip ? [question.tip] : [],
    };
  };

  const generateImageForQuestion = async (question: Question) => {
    // Ensure imageGrammarData exists
    if (!question.imageGrammarData) {
      question.imageGrammarData = generateSyntheticImageData(question);
      console.log(
        "🔧 Generated synthetic imageGrammarData for question:",
        question.id
      );
    }

    setImageLoading(true);
    setImageError(null);

    try {
      // Get the correct answer for more targeted image generation
      const correctAnswer = Array.isArray(question.correct)
        ? question.correct[0]
        : question.correct;
      let correctAnswerText = "";

      if (
        question.options &&
        typeof correctAnswer === "number" &&
        question.options[correctAnswer]
      ) {
        correctAnswerText = question.options[correctAnswer];
      } else {
        correctAnswerText = String(correctAnswer);
      }

      // Enhanced image prompt that focuses on the correct answer
      const visualGrammarPrompt = `${question.imageGrammarData.imagePrompt}. The image must visually show why "${correctAnswerText}" is the correct answer. Make it obvious through clear visual elements that demonstrate ${question.imageGrammarData.grammarFocus}. Professional educational illustration style, high quality, well-lit, with visual elements that directly support the correct answer.`;

      console.log(
        "🎨 Generating answer-focused image for question:",
        question.id
      );
      console.log("📝 Enhanced prompt:", visualGrammarPrompt);
      console.log("🎯 Grammar focus:", question.imageGrammarData.grammarFocus);
      console.log("✅ Correct answer:", correctAnswerText);

      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: visualGrammarPrompt,
          grammarTopic: question.imageGrammarData.grammarFocus,
          correctAnswer: correctAnswerText,
          questionText: question.question,
          proficiencyLevel: "intermediate",
          aspectRatio: "square",
          style: "educational",
          answerFocused: true, // New flag to indicate answer-focused generation
        }),
      });

      const data = await response.json();
      console.log("🖼️ Answer-focused image response:", data);

      if (data.success && data.imageUrl) {
        setGeneratedImages((prev) => ({
          ...prev,
          [question.id]: {
            url: data.imageUrl,
            prompt: visualGrammarPrompt,
            description: `${
              question.imageGrammarData!.imageDescription
            } - Shows why "${correctAnswerText}" is correct`,
            isLoaded: false, // Will be set to true when image loads
            hasError: false,
          },
        }));
        toast.success(`Answer-focused image generated! � (${data.provider})`);
      } else {
        console.error("Image generation failed:", data.error);
        setImageError(data.error || "Failed to generate image");

        // Enhanced fallback with answer context
        const answerFocusedFallback = `https://via.placeholder.com/512x512/e8f5e8/2d5a2d?text=${encodeURIComponent(
          `📚 ${
            question.imageGrammarData!.grammarFocus
          }\n\n✅ Correct Answer:\n"${correctAnswerText}"\n\n${
            question.imageGrammarData!.imageDescription
          }\n\nLook for visual clues that support this answer!`
        )}`;

        setGeneratedImages((prev) => ({
          ...prev,
          [question.id]: {
            url: answerFocusedFallback,
            prompt: visualGrammarPrompt,
            description: `${
              question.imageGrammarData!.imageDescription
            } - Shows why "${correctAnswerText}" is correct`,
            isLoaded: true,
            hasError: true,
          },
        }));
        toast.success("Using answer-focused placeholder - Ready to analyze!");
      }
    } catch (error) {
      console.error("Error generating answer-focused image:", error);
      setImageError("Network error occurred");

      // Get correct answer for fallback
      const correctAnswer = Array.isArray(question.correct)
        ? question.correct[0]
        : question.correct;
      let correctAnswerText = "";

      if (
        question.options &&
        typeof correctAnswer === "number" &&
        question.options[correctAnswer]
      ) {
        correctAnswerText = question.options[correctAnswer];
      } else {
        correctAnswerText = String(correctAnswer);
      }

      // Better fallback with answer focus
      const contextualFallback = `https://via.placeholder.com/512x512/fff3cd/856404?text=${encodeURIComponent(
        `📚 ${
          question.imageGrammarData!.grammarFocus
        }\n\n✅ Look for evidence of:\n"${correctAnswerText}"\n\n${
          question.imageGrammarData!.imageDescription
        }\n\n⚠️ Image generation failed\nUse the context to identify the answer`
      )}`;

      setGeneratedImages((prev) => ({
        ...prev,
        [question.id]: {
          url: contextualFallback,
          prompt: question.imageGrammarData!.imagePrompt,
          description: `${
            question.imageGrammarData!.imageDescription
          } - Shows why "${correctAnswerText}" is correct`,
          isLoaded: true,
          hasError: true,
        },
      }));
      toast.success("Using answer-focused fallback - Ready to analyze!");
    } finally {
      setImageLoading(false);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameStartTime(Date.now());
    setQuestionStartTime(Date.now());

    // Ensure all questions have imageGrammarData and start generating image for first question
    exercise.questions.forEach((question, index) => {
      if (!question.imageGrammarData) {
        question.imageGrammarData = generateSyntheticImageData(question);
        console.log(
          `🔧 Generated synthetic imageGrammarData for question ${index + 1}`
        );
      }
    });

    // Immediately start generating image for first question
    if (currentQuestion) {
      console.log("🚀 Starting game and generating first image...");
      generateImageForQuestion(currentQuestion);
    }

    toast.success("Get ready to analyze images! 🖼️");
  };

  const handleAnswerSelect = (answer: number | string) => {
    if (showResult) return;

    const questionTime = Date.now() - questionStartTime;
    setQuestionTimes((prev) => [...prev, questionTime]);

    onQuestionAnswer(currentQuestion.id, answer);

    // Check if answer is correct based on question type
    let isAnswerCorrect = false;
    const questionType = getQuestionType(currentQuestion);

    if (questionType === "multiple-choice") {
      isAnswerCorrect = answer === currentQuestion.correct;
    } else {
      // For text input, compare strings (case-insensitive)
      const correctAnswer = Array.isArray(currentQuestion.correct)
        ? currentQuestion.correct[0]
        : currentQuestion.correct;
      isAnswerCorrect =
        String(answer).toLowerCase().trim() ===
        String(correctAnswer).toLowerCase().trim();
    }

    setIsCorrect(isAnswerCorrect);
    setShowResult(true);

    if (isAnswerCorrect) {
      // Visual comprehension bonus points
      let points = 100;

      // Quick analysis bonus
      const quickBonus =
        questionTime < 15000 ? 25 : questionTime < 30000 ? 10 : 0;

      // Image complexity bonus
      const complexityBonus =
        currentQuestion.imageGrammarData?.grammarFocus.includes("complex")
          ? 20
          : 10;

      // Question type bonus
      const typeBonus =
        questionType === "text-input"
          ? 15
          : questionType === "fill-blank"
          ? 10
          : 0;

      const totalPoints = points + quickBonus + complexityBonus + typeBonus;
      setScore((prev) => prev + totalPoints);

      toast.success(`Correct! +${totalPoints} points 🎯`);
    } else {
      toast.error("Look more carefully at the image 🔍");
    }

    setTimeout(() => {
      moveToNextQuestion();
    }, 3000);
  };

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      handleAnswerSelect(textInput.trim());
    }
  };

  const moveToNextQuestion = () => {
    setShowResult(false);
    setIsCorrect(null);
    setImageError(null);
    setTextInput("");
    setSelectedOption(null);

    if (currentQuestionIndex + 1 >= exercise.questions.length) {
      finishGame();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionStartTime(Date.now());
    }
  };

  const finishGame = () => {
    setGameFinished(true);

    const totalTime = Date.now() - gameStartTime;
    const correctCount = Object.entries(selectedAnswers).filter(
      ([questionId, answer]) => {
        const question = exercise.questions.find(
          (q) => q.id === parseInt(questionId)
        );
        return question && answer === question.correct;
      }
    ).length;

    const visualComprehensionScore = Math.round(
      (correctCount / exercise.questions.length) * 100
    );
    const averageTime =
      questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length;

    const results: ImageQuizResults = {
      totalQuestions: exercise.questions.length,
      correctAnswers: correctCount,
      totalTime,
      averageTimePerQuestion: averageTime,
      visualComprehensionScore,
      finalScore: score,
    };

    onComplete(results);
  };

  const getProgressPercentage = () => {
    return (
      ((currentQuestionIndex + (showResult ? 1 : 0)) /
        exercise.questions.length) *
      100
    );
  };

  if (!gameStarted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 text-center border border-green-200 dark:border-green-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
            <Image className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Image Grammar Quiz 🖼️
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Answer grammar questions based on AI-generated images!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <Image className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Visual Learning
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              AI images generated with Fal for each question
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <Eye className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Image Analysis
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Answer based on visual details you observe
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="font-semibold text-gray-800 dark:text-white">
              Visual Rewards
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Bonus points for accurate image analysis
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <div className="text-blue-800 dark:text-blue-400 font-medium mb-2">
            🎯 How It Works:
          </div>
          <div className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
            <div>• Each question comes with a unique AI-generated image</div>
            <div>• Look carefully at the image details to find the answer</div>
            <div>
              • Questions test your ability to identify grammar elements
              visually
            </div>
            <div>• Your score depends on how well you analyze the images</div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
          <div className="text-yellow-800 dark:text-yellow-400 font-medium mb-2">
            🎨 Powered by Fal AI
          </div>
          <div className="text-yellow-700 dark:text-yellow-300 text-sm">
            High-quality educational images are generated specifically for each
            grammar question. If generation fails, informative placeholders will
            help you understand the context.
          </div>
        </div>

        <Button
          onClick={startGame}
          size="lg"
          className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold px-8 py-4 text-xl"
        >
          Start Image Quiz! 🚀
        </Button>
      </div>
    );
  }

  if (gameFinished) {
    const results: ImageQuizResults = {
      totalQuestions: exercise.questions.length,
      correctAnswers: Object.keys(selectedAnswers).length,
      totalTime: Date.now() - gameStartTime,
      averageTimePerQuestion:
        questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length,
      visualComprehensionScore: Math.round(
        (Object.keys(selectedAnswers).length / exercise.questions.length) * 100
      ),
      finalScore: score,
    };

    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center border border-green-200 dark:border-green-700">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Image Quiz Complete! 🎉
          </h2>
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
            {score} Points
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-green-600">
              {results.correctAnswers}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Correct
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">
              {(results.totalTime / 1000).toFixed(1)}s
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Time
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">
              {results.visualComprehensionScore}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Visual Score
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">
              {(results.averageTimePerQuestion / 1000).toFixed(1)}s
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Avg Time
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentImage = generatedImages[currentQuestion.id];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      {/* Game Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-lg">
            <Image className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white">
              Image Grammar Quiz
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {exercise.questions.length}
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {score}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">points</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>

      {/* Grammar Focus */}
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
        <div className="text-sm font-medium text-blue-800 dark:text-blue-400">
          Grammar Focus: {currentQuestion.imageGrammarData?.grammarFocus}
        </div>
      </div>

      {/* Image Display - Primary Focus */}
      <div className="mb-6">
        <div className="text-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            🔍 Analyze this image to answer the question
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your answer should be based on what you see in the image below
          </p>
        </div>

        <div className="aspect-square max-w-lg mx-auto bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden border-4 border-blue-200 dark:border-blue-600 shadow-lg">
          {imageLoading ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="text-center">
                <Loader className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-6" />
                <div className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-2">
                  🎨 Creating your visual grammar challenge...
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Generating: {currentQuestion.imageGrammarData?.grammarFocus}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  Please wait while we create a detailed educational image
                </div>
              </div>
            </div>
          ) : currentImage ? (
            <div className="relative w-full h-full group">
              <img
                src={currentImage.url}
                alt={`Visual representation of ${currentQuestion.imageGrammarData?.grammarFocus}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onLoad={() => {
                  console.log(
                    "✅ Image loaded successfully for question:",
                    currentQuestion.id
                  );
                  setGeneratedImages((prev) => ({
                    ...prev,
                    [currentQuestion.id]: {
                      ...prev[currentQuestion.id],
                      isLoaded: true,
                      hasError: false,
                    },
                  }));
                }}
                onError={(e) => {
                  console.error(
                    "❌ Image failed to load for question:",
                    currentQuestion.id
                  );
                  setImageError("Image failed to load - please try refreshing");
                  setGeneratedImages((prev) => ({
                    ...prev,
                    [currentQuestion.id]: {
                      ...prev[currentQuestion.id],
                      hasError: true,
                    },
                  }));
                }}
              />

              {/* Question type indicator */}
              <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {getQuestionType(currentQuestion) === "multiple-choice" ? (
                  <div className="flex items-center space-x-1">
                    <Radio className="w-4 h-4" />
                    <span>Choose Option</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1">
                    <Type className="w-4 h-4" />
                    <span>Type Answer</span>
                  </div>
                )}
              </div>

              {/* Visual analysis reminder */}
              <div className="absolute bottom-3 left-3 right-3 bg-blue-600 bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm">
                👁️ Look carefully at details in this image to answer correctly
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <Image className="w-20 h-20 mx-auto mb-4 opacity-40" />
                <div className="text-lg font-medium mb-2">
                  Preparing visual content...
                </div>
                <div className="text-sm">
                  Grammar focus:{" "}
                  {currentQuestion.imageGrammarData?.grammarFocus}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image status and context */}
        <div className="mt-4 space-y-2">
          {imageError && (
            <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <div className="text-yellow-800 dark:text-yellow-400 font-medium">
                ⚠️ Image Display Issue
              </div>
              <div className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                {imageError} - If you see a placeholder, use the text context to
                understand the visual scenario.
              </div>
            </div>
          )}

          {currentImage && !currentImage.hasError && (
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
              <div className="text-sm text-green-800 dark:text-green-300">
                ✅ <strong>Image Context:</strong>{" "}
                {currentQuestion.imageGrammarData?.imageDescription}
              </div>
            </div>
          )}

          {!currentImage?.isLoaded && !imageLoading && (
            <div className="text-center">
              <Button
                onClick={() => generateImageForQuestion(currentQuestion)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
                size="sm"
              >
                🔄 Retry Image Generation
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Question Section - Enhanced with Visual Context */}
      <div className="mb-6">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700 mb-4">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
            📋 {enhanceQuestionForVisualContext(currentQuestion)}
          </h3>
          <div className="flex flex-wrap gap-2 text-sm text-indigo-700 dark:text-indigo-300 mb-2">
            <span className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">
              🎯 Grammar: {currentQuestion.imageGrammarData?.grammarFocus}
            </span>
            <span className="bg-indigo-100 dark:bg-indigo-800 px-2 py-1 rounded">
              👁️ Type:{" "}
              {getQuestionType(currentQuestion) === "multiple-choice"
                ? "Choose from options"
                : "Type your answer"}
            </span>
          </div>
          <p className="text-sm text-indigo-700 dark:text-indigo-300">
            {getQuestionType(currentQuestion) === "multiple-choice"
              ? "Select the option that best describes what you see in the image"
              : "Describe what you observe in the image that answers the grammar question"}
          </p>
        </div>

        {/* Enhanced Visual Context Reminder */}
        <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
          <div className="flex items-start space-x-2">
            <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-purple-800 dark:text-purple-400 mb-1">
                Visual Analysis Instructions:
              </div>
              <div className="text-sm text-purple-700 dark:text-purple-300">
                {getQuestionType(currentQuestion) === "multiple-choice"
                  ? "Each option represents something you should be able to identify in the image. Choose the one that matches what you see."
                  : "Your answer should describe specific visual elements from the image that demonstrate the grammar concept."}
              </div>
            </div>
          </div>
        </div>

        {/* Image Loading Warning */}
        {(imageLoading || !currentImage?.isLoaded) && (
          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
            <div className="text-amber-800 dark:text-amber-400 text-sm font-medium">
              ⏳ Please wait for the image to load before answering
            </div>
            <div className="text-amber-700 dark:text-amber-300 text-xs mt-1">
              The question requires visual analysis of the generated image that
              relates to: {currentQuestion.imageGrammarData?.grammarFocus}
            </div>
          </div>
        )}

        {/* Answer Interface - Enhanced Visual Context */}
        {getQuestionType(currentQuestion) === "multiple-choice" ? (
          /* Multiple Choice Options - Enhanced */
          <div className="space-y-3">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border">
              🔍 <strong>Visual Analysis:</strong> Look at the details in the
              image above. Which option best describes what you can see that
              demonstrates{" "}
              <strong>{currentQuestion.imageGrammarData?.grammarFocus}</strong>?
            </div>
            {(
              currentQuestion.options ||
              generateVisuallyRelevantOptions(
                currentQuestion,
                currentQuestion.imageGrammarData?.grammarFocus || ""
              )
            ).map((option, index) => (
              <Button
                key={index}
                variant={
                  showResult
                    ? index === currentQuestion.correct
                      ? "default"
                      : selectedAnswers[currentQuestion.id] === index
                      ? "destructive"
                      : "outline"
                    : selectedOption === index
                    ? "default"
                    : "outline"
                }
                className={`w-full text-left justify-start p-4 h-auto transition-all duration-200 ${
                  showResult
                    ? index === currentQuestion.correct
                      ? "bg-green-500 hover:bg-green-500 text-white border-green-500"
                      : selectedAnswers[currentQuestion.id] === index
                      ? "bg-red-500 hover:bg-red-500 text-white border-red-500"
                      : "opacity-50"
                    : selectedOption === index
                    ? "bg-blue-500 text-white border-blue-500"
                    : "hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300"
                }`}
                onClick={() => {
                  if (!showResult && currentImage?.isLoaded && !imageLoading) {
                    setSelectedOption(index);
                    handleAnswerSelect(index);
                  }
                }}
                disabled={showResult || imageLoading || !currentImage?.isLoaded}
              >
                <div className="flex items-start space-x-3 w-full">
                  <span className="font-bold text-lg flex-shrink-0 mt-1">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{option}</div>
                    {!showResult && (
                      <div className="text-xs opacity-70 mt-1">
                        Check if this matches what you see in the image
                      </div>
                    )}
                  </div>
                  {selectedOption === index && !showResult && (
                    <div className="text-blue-300">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </Button>
            ))}
          </div>
        ) : (
          /* Text Input - Enhanced */
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="text-sm text-blue-800 dark:text-blue-400 mb-3">
                🖼️ <strong>Visual Description Required:</strong> Look at the
                image carefully and describe what you see that relates to{" "}
                <strong>
                  {currentQuestion.imageGrammarData?.grammarFocus}
                </strong>
                .
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                💡 <strong>What to look for:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Actions or activities shown in the image</li>
                  <li>Objects and their positions or relationships</li>
                  <li>People and what they are doing</li>
                  <li>Time indicators or context clues</li>
                  <li>Any text or signs visible in the image</li>
                </ul>
              </div>
              {currentQuestion.tip && (
                <div className="text-sm text-blue-700 dark:text-blue-300 mt-2 p-2 bg-blue-100 dark:bg-blue-800 rounded">
                  💡 <strong>Hint:</strong> {currentQuestion.tip}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex space-x-3">
                <Input
                  type="text"
                  placeholder={`Describe what you see in the image that shows ${currentQuestion.imageGrammarData?.grammarFocus}...`}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (
                      e.key === "Enter" &&
                      !showResult &&
                      currentImage?.isLoaded &&
                      !imageLoading
                    ) {
                      handleTextSubmit();
                    }
                  }}
                  disabled={
                    showResult || imageLoading || !currentImage?.isLoaded
                  }
                  className="flex-1 p-3 text-base border-2 focus:border-blue-400"
                />
                <Button
                  onClick={handleTextSubmit}
                  disabled={
                    !textInput.trim() ||
                    showResult ||
                    imageLoading ||
                    !currentImage?.isLoaded
                  }
                  className="px-6 bg-green-500 hover:bg-green-600 text-white font-medium"
                >
                  Submit Answer
                </Button>
              </div>

              {/* Input guidance */}
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center bg-gray-50 dark:bg-gray-800 p-2 rounded border">
                {currentImage?.isLoaded
                  ? `💬 Example: "I can see..." or "The image shows..." (Press Enter or click Submit)`
                  : "⏳ Waiting for image to load before you can provide your visual description"}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Result Display */}
      {showResult && (
        <div
          className={`p-4 rounded-lg ${
            isCorrect
              ? "bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-700"
              : "bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-700"
          }`}
        >
          <div
            className={`flex items-center space-x-2 font-bold mb-2 ${
              isCorrect
                ? "text-green-800 dark:text-green-400"
                : "text-red-800 dark:text-red-400"
            }`}
          >
            {isCorrect ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Excellent visual analysis! 🎨</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5" />
                <span>Look more carefully at the image</span>
              </>
            )}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {currentQuestion.explanation}
          </div>
          {currentQuestion.tip && (
            <div className="text-sm text-blue-700 dark:text-blue-300 mt-2">
              💡 <strong>Tip:</strong> {currentQuestion.tip}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGrammarQuizGame;

// Comprehensive backup exercises for all major grammar topics and exercise types
import {
  Exercise,
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

// All Grammar Topics Backup Database
export const COMPREHENSIVE_BACKUPS = {
  // PRESENT TENSES
  "present simple": {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I _____ coffee every morning.",
          options: ["drink", "drinks", "drinking", "drank"],
          correct: 0,
          explanation: "Use base form with I/you/we/they",
          tip: "Present simple: I/you/we/they + base verb",
          tense: "present simple",
          type: "multiple-choice" as TypeExcercise,
        },
        {
          id: 2,
          question: "She _____ English at school.",
          options: ["study", "studies", "studying", "studied"],
          correct: 1,
          explanation: "Third person singular takes -s",
          tip: "He/she/it + verb + s",
          tense: "present simple",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "fill-in-blank": [
        {
          id: 1,
          question: "My brother _____ (work) in a hospital.",
          correct: "works",
          explanation: "Third person singular: work → works",
          tip: "Add -s with he/she/it",
          tense: "present simple",
          type: "fill-in-blank" as TypeExcercise,
        },
      ],
      "true-false-lightning": [
        {
          id: 1,
          question: "Is this correct?",
          lightningData: {
            sentence: "She go to school every day.",
            timeLimit: 10,
            correctness: false,
            errorType: "verb agreement",
            quickExplanation: "Should be 'goes'",
          },
          correct: 1,
          explanation: "Incorrect: needs 'goes'",
          tip: "He/she/it needs -s!",
          tense: "present simple",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "The train usually _____ at 8 AM.",
          options: ["arrive", "arrives", "arriving", "arrived"],
          correct: 1,
          explanation: "Third person singular with schedules",
          tip: "Timetables use present simple",
          tense: "present simple",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "Water _____ at 100 degrees Celsius.",
          options: ["boil", "boils", "boiling", "boiled"],
          correct: 1,
          explanation: "Scientific facts use present simple",
          tip: "General truths = present simple",
          tense: "present simple",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  "present continuous": {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I _____ TV right now.",
          options: ["watch", "watching", "am watching", "watched"],
          correct: 2,
          explanation: "Present continuous: am/is/are + -ing",
          tip: "Right now = present continuous",
          tense: "present continuous",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "fill-in-blank": [
        {
          id: 1,
          question: "She _____ (study) for her exam now.",
          correct: "is studying",
          explanation: "Present continuous for actions happening now",
          tip: "is/am/are + verb-ing",
          tense: "present continuous",
          type: "fill-in-blank" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "I _____ never _____ to Japan.",
          options: ["have / been", "has / been", "am / been", "was / been"],
          correct: 0,
          explanation: "Present perfect: have + past participle",
          tip: "Experience: have/has + past participle",
          tense: "present perfect",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "She _____ here for five years.",
          options: ["lives", "lived", "has lived", "is living"],
          correct: 2,
          explanation: "Duration from past to now",
          tip: "For/since = present perfect",
          tense: "present perfect",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  // PAST TENSES
  "past simple": {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I _____ to London yesterday.",
          options: ["go", "went", "going", "gone"],
          correct: 1,
          explanation: "Past form of irregular verb 'go'",
          tip: "go → went → gone",
          tense: "past simple",
          type: "multiple-choice" as TypeExcercise,
        },
        {
          id: 2,
          question: "She _____ her homework last night.",
          options: ["finish", "finished", "finishing", "finishes"],
          correct: 1,
          explanation: "Regular verbs add -ed",
          tip: "Regular: verb + -ed",
          tense: "past simple",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "error-correction": [
        {
          id: 1,
          question: "Find the error:",
          incorrectText: "I goed to the store.",
          correct: "I went to the store.",
          explanation: "Go is irregular: go → went",
          tip: "Irregular verbs must be memorized",
          tense: "past simple",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },

  "past continuous": {
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "I _____ TV when you called.",
          options: ["watched", "was watching", "am watching", "watch"],
          correct: 1,
          explanation: "Past continuous for interrupted action",
          tip: "was/were + -ing for interrupted actions",
          tense: "past continuous",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  // FUTURE TENSES
  "future simple": {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I _____ see you tomorrow.",
          options: ["will", "would", "am", "was"],
          correct: 0,
          explanation: "Will for future predictions",
          tip: "will + base verb",
          tense: "future simple",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  // MODALS
  modals: {
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "You _____ wear a helmet.",
          options: ["should", "must", "can", "might"],
          correct: 0,
          explanation: "Should for advice",
          tip: "should = advice",
          tense: "modals",
          type: "multiple-choice" as TypeExcercise,
        },
        {
          id: 2,
          question: "_____ I use your phone?",
          options: ["Should", "Must", "Can", "Will"],
          correct: 2,
          explanation: "Can for permission",
          tip: "Can/May = permission",
          tense: "modals",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "true-false-lightning": [
        {
          id: 1,
          question: "Is this correct?",
          lightningData: {
            sentence: "You must to wear a helmet.",
            timeLimit: 10,
            correctness: false,
            errorType: "modal + to",
            quickExplanation: "No 'to' after modals",
          },
          correct: 1,
          explanation: "No 'to' after modals",
          tip: "Modal + base verb",
          tense: "modals",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "He _____ have arrived by now.",
          options: ["should", "can", "may", "will"],
          correct: 0,
          explanation: "Should for logical deduction",
          tip: "should = logical expectation",
          tense: "modals",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  // PASSIVE VOICE
  "passive voice": {
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "The book _____ by millions.",
          options: ["reads", "is read", "reading", "read"],
          correct: 1,
          explanation: "Passive: be + past participle",
          tip: "Passive = be + past participle",
          tense: "passive voice",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      transformation: [
        {
          id: 1,
          question: "Change to passive: 'The chef prepares the meal.'",
          correct: "The meal is prepared by the chef.",
          explanation: "Active to passive transformation",
          tip: "Object becomes subject",
          tense: "passive voice",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  // CONDITIONALS
  conditionals: {
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "If it rains, I _____ stay home.",
          options: ["will", "would", "can", "should"],
          correct: 0,
          explanation: "First conditional: If + present, will + base",
          tip: "Type 1: If + present, will + infinitive",
          tense: "conditionals",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "sentence-completion": [
        {
          id: 1,
          question: "If I were rich, _____ travel the world.",
          options: ["I'll", "I'd", "I", "I'm"],
          correct: 1,
          explanation: "Second conditional: would + base verb",
          tip: "Type 2: If + past, would + infinitive",
          tense: "conditionals",
          type: "sentence-completion" as TypeExcercise,
        },
      ],
    },
  },

  // REPORTED SPEECH
  "reported speech": {
    B2: {
      transformation: [
        {
          id: 1,
          question: "Report: He said, 'I am tired.'",
          correct: "He said that he was tired.",
          explanation: "Backshift: am → was, I → he",
          tip: "Tense shifts back in reported speech",
          tense: "reported speech",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  // ARTICLES
  articles: {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I have _____ cat and _____ dog.",
          options: ["a / a", "the / the", "a / the", "the / a"],
          correct: 0,
          explanation: "First mention uses 'a'",
          tip: "First mention = a/an",
          tense: "articles",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "_____ sun rises in _____ east.",
          options: ["A / the", "The / the", "The / an", "A / an"],
          correct: 1,
          explanation: "Unique objects and directions use 'the'",
          tip: "Unique things = the",
          tense: "articles",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  // PREPOSITIONS
  prepositions: {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I go to school _____ bus.",
          options: ["by", "in", "on", "with"],
          correct: 0,
          explanation: "Transport: by bus/car/plane",
          tip: "Transport = by",
          tense: "prepositions",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "The meeting is _____ Monday _____ 9 AM.",
          options: ["on / at", "in / at", "at / on", "on / in"],
          correct: 0,
          explanation: "Days = on, specific times = at",
          tip: "on + days, at + times",
          tense: "prepositions",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },

  // COMPARATIVE AND SUPERLATIVE
  "comparative and superlative": {
    A2: {
      "multiple-choice": [
        {
          id: 1,
          question: "This book is _____ than that one.",
          options: ["good", "better", "best", "more good"],
          correct: 1,
          explanation: "Irregular comparative: good → better",
          tip: "good → better → best",
          tense: "comparative and superlative",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "comparison-exercise": [
        {
          id: 1,
          question: "Compare using superlative:",
          comparisonStructures: {
            structure1: "big",
            structure2: "biggest",
            examples: {
              structure1Example: "This is big.",
              structure2Example: "This is the biggest.",
            },
          },
          correct: "biggest",
          explanation: "Superlative for three or more",
          tip: "the + -est for superlative",
          tense: "comparative and superlative",
          type: "comparison-exercise" as TypeExcercise,
        },
      ],
    },
  },

  // QUESTION FORMS
  "question forms": {
    A1: {
      "multiple-choice": [
        {
          id: 1,
          question: "_____ do you live?",
          options: ["What", "Where", "When", "How"],
          correct: 1,
          explanation: "Where asks about place",
          tip: "Where = place",
          tense: "question forms",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "word-order": [
        {
          id: 1,
          question: "Make a question:",
          words: ["you", "do", "live", "where"],
          correct: "Where do you live?",
          explanation: "Wh-word + do + subject + verb",
          tip: "Wh- + auxiliary + subject + verb",
          tense: "question forms",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },

  // RELATIVE CLAUSES
  "relative clauses": {
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "The book _____ I read was interesting.",
          options: ["who", "which", "where", "when"],
          correct: 1,
          explanation: "Which/that for things",
          tip: "who = people, which = things",
          tense: "relative clauses",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
      "clause-combining": [
        {
          id: 1,
          question: "Combine with relative pronoun:",
          clauses: [
            {
              mainClause: "The man is my teacher",
              subordinateClause: "The man lives next door",
              connector: "who",
              combinedSentence: "The man who lives next door is my teacher.",
            },
          ],
          correct: "The man who lives next door is my teacher.",
          explanation: "Who for people in relative clauses",
          tip: "who = people in relative clauses",
          tense: "relative clauses",
          type: "clause-combining" as TypeExcercise,
        },
      ],
    },
  },

  // GERUNDS AND INFINITIVES
  "gerunds and infinitives": {
    B1: {
      "multiple-choice": [
        {
          id: 1,
          question: "I enjoy _____ books.",
          options: ["read", "reading", "to read", "reads"],
          correct: 1,
          explanation: "Enjoy + gerund (-ing)",
          tip: "enjoy/love/hate + -ing",
          tense: "gerunds and infinitives",
          type: "multiple-choice" as TypeExcercise,
        },
      ],
    },
  },
};

// Get comprehensive backup exercise
export function getComprehensiveBackup(
  grammarTopic: string,
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  numQuestions: number = 5,
  certificateType?: CertificateType
): Exercise | null {
  const normalizedTopic = grammarTopic.toLowerCase().trim();
  const topicData =
    COMPREHENSIVE_BACKUPS[
      normalizedTopic as keyof typeof COMPREHENSIVE_BACKUPS
    ];

  if (!topicData) {
    console.log(`❌ No backup found for topic: ${normalizedTopic}`);
    return null;
  }

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) {
    // Try to find closest level
    const availableLevels = Object.keys(topicData) as CEFRLevel[];
    const levelOrder: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const currentIndex = levelOrder.indexOf(proficiencyLevel);

    let closestLevel: CEFRLevel | null = null;
    for (let i = 1; i < levelOrder.length; i++) {
      const lowerIndex = currentIndex - i;
      const higherIndex = currentIndex + i;

      if (lowerIndex >= 0 && availableLevels.includes(levelOrder[lowerIndex])) {
        closestLevel = levelOrder[lowerIndex];
        break;
      }
      if (
        higherIndex < levelOrder.length &&
        availableLevels.includes(levelOrder[higherIndex])
      ) {
        closestLevel = levelOrder[higherIndex];
        break;
      }
    }

    if (!closestLevel) {
      console.log(`❌ No suitable level found for ${proficiencyLevel}`);
      return null;
    }

    console.log(
      `⚠️ Using closest level ${closestLevel} instead of ${proficiencyLevel}`
    );
    const fallbackLevelData = (topicData as any)[closestLevel];
    const exerciseQuestions = fallbackLevelData[exerciseType];

    if (!exerciseQuestions || !Array.isArray(exerciseQuestions)) {
      console.log(
        `❌ No questions found for ${exerciseType} at level ${closestLevel}`
      );
      return null;
    }

    return {
      title: `${
        grammarTopic.charAt(0).toUpperCase() + grammarTopic.slice(1)
      } - ${exerciseType.replace("-", " ").toUpperCase()} (${closestLevel}${
        certificateType ? ` - ${certificateType}` : ""
      })`,
      questions: exerciseQuestions.slice(0, numQuestions),
      type: exerciseType,
    };
  }

  const exerciseQuestions = levelData[exerciseType];
  if (!exerciseQuestions || !Array.isArray(exerciseQuestions)) {
    console.log(
      `❌ No questions found for ${exerciseType} at level ${proficiencyLevel}`
    );
    return null;
  }

  const title = certificateType
    ? `${
        grammarTopic.charAt(0).toUpperCase() + grammarTopic.slice(1)
      } - ${certificateType} ${exerciseType
        .replace("-", " ")
        .toUpperCase()} (${proficiencyLevel})`
    : `${
        grammarTopic.charAt(0).toUpperCase() + grammarTopic.slice(1)
      } - ${exerciseType
        .replace("-", " ")
        .toUpperCase()} (${proficiencyLevel})`;

  return {
    title,
    questions: exerciseQuestions.slice(0, numQuestions),
    type: exerciseType,
  };
}

export default {
  COMPREHENSIVE_BACKUPS,
  getComprehensiveBackup,
};

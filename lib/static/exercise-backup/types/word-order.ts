// Word Order Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const WORD_ORDER_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "every / goes / she / school / to / day",
            "She goes to school every day.",
            "Every day she goes to school.",
            "To school she goes every day.",
          ],
          correct: 1,
          explanation:
            "Correct word order: Subject + Verb + Object + Time = 'She goes to school every day.'",
          tip: "Basic word order: Subject + Verb + Object + Time/Place",
          tense: "present simple",
          type: "word-order" as TypeExcercise,
        },
        {
          id: 2,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "in / work / they / hospital / a",
            "They work in a hospital.",
            "In a hospital they work.",
            "Work they in a hospital.",
          ],
          correct: 1,
          explanation:
            "Correct structure: Subject + Verb + Preposition + Article + Noun",
          tip: "Place prepositions usually come after the verb",
          tense: "present simple",
          type: "word-order" as TypeExcercise,
        },
        {
          id: 3,
          question: "Put the words in the correct order to make a question:",
          options: [
            "you / do / live / where",
            "Where do you live?",
            "Do you where live?",
            "Where you do live?",
          ],
          correct: 1,
          explanation:
            "Question word order: Wh-word + auxiliary + subject + main verb",
          tip: "Questions: Wh-word + do/does + subject + verb",
          tense: "present simple",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "usually / breakfast / at / has / she / 7 o'clock",
            "She usually has breakfast at 7 o'clock.",
            "Usually she has breakfast at 7 o'clock.",
            "She has usually breakfast at 7 o'clock.",
          ],
          correct: 1,
          explanation:
            "Adverb of frequency position: Subject + adverb + main verb + object + time",
          tip: "Adverbs of frequency come before main verbs but after 'be'",
          tense: "present simple",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "yesterday / visited / we / museum / the",
            "We visited the museum yesterday.",
            "Yesterday we visited the museum.",
            "The museum we visited yesterday.",
          ],
          correct: 1,
          explanation:
            "Past simple word order: Subject + past verb + object + time",
          tip: "Time expressions can go at the beginning or end of sentences",
          tense: "past simple",
          type: "word-order" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Put the words in the correct order to make a negative sentence:",
          options: [
            "go / didn't / to / school / he / last week",
            "He didn't go to school last week.",
            "Last week he didn't go to school.",
            "Didn't he go to school last week?",
          ],
          correct: 1,
          explanation:
            "Negative past simple: Subject + didn't + base verb + object + time",
          tip: "Use base form after 'didn't', not past form",
          tense: "past simple",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },

  "present continuous": {
    A1: {
      default: [
        {
          id: 1,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "is / she / watching / TV / now",
            "She is watching TV now.",
            "Now she is watching TV.",
            "Watching TV she is now.",
          ],
          correct: 1,
          explanation:
            "Present continuous: Subject + be + verb-ing + object + time",
          tip: "Present continuous = be + verb-ing",
          tense: "present continuous",
          type: "word-order" as TypeExcercise,
        },
        {
          id: 2,
          question: "Put the words in the correct order to make a question:",
          options: [
            "are / what / doing / you",
            "What are you doing?",
            "You are doing what?",
            "What you are doing?",
          ],
          correct: 1,
          explanation:
            "Present continuous question: Wh-word + be + subject + verb-ing",
          tip: "Questions with 'be': Wh-word + be + subject + main verb",
          tense: "present continuous",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "can / English / speak / she / fluently",
            "She can speak English fluently.",
            "Can she speak English fluently?",
            "English she can speak fluently.",
          ],
          correct: 1,
          explanation:
            "Modal structure: Subject + modal + base verb + object + adverb",
          tip: "Modals + base verb (no 'to')",
          tense: "modals",
          type: "word-order" as TypeExcercise,
        },
        {
          id: 2,
          question: "Put the words in the correct order to make a sentence:",
          options: [
            "should / you / more / study / carefully",
            "You should study more carefully.",
            "Should you study more carefully?",
            "More carefully you should study.",
          ],
          correct: 1,
          explanation:
            "Modal advice: Subject + should + base verb + adverb phrase",
          tip: "Should gives advice: subject + should + base verb",
          tense: "modals",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },

  conditionals: {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Put the words in the correct order to make a conditional sentence:",
          options: [
            "if / rain / it / tomorrow / will / we / home / stay",
            "If it rains tomorrow, we will stay home.",
            "We will stay home if it rains tomorrow.",
            "If it will rain tomorrow, we stay home.",
          ],
          correct: 1,
          explanation:
            "First conditional: If + present simple, will + base verb",
          tip: "First conditional: If clause (present) + main clause (will + base)",
          tense: "conditionals",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },

  questions: {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Put the words in the correct order to make a yes/no question:",
          options: [
            "do / like / you / pizza",
            "Do you like pizza?",
            "You do like pizza?",
            "Like you do pizza?",
          ],
          correct: 1,
          explanation:
            "Yes/no question: Auxiliary + subject + main verb + object",
          tip: "Yes/no questions start with auxiliary verbs",
          tense: "questions",
          type: "word-order" as TypeExcercise,
        },
        {
          id: 2,
          question: "Put the words in the correct order to make a wh-question:",
          options: [
            "does / where / work / she",
            "Where does she work?",
            "Where she does work?",
            "Does she work where?",
          ],
          correct: 1,
          explanation: "Wh-question: Wh-word + auxiliary + subject + main verb",
          tip: "Wh-questions: Wh-word first, then auxiliary + subject + verb",
          tense: "questions",
          type: "word-order" as TypeExcercise,
        },
      ],
    },
  },
};

export function getWordOrderBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    WORD_ORDER_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof WORD_ORDER_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default WORD_ORDER_BACKUPS;

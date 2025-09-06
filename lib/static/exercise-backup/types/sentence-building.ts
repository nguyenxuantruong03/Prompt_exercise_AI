// Sentence Building Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const SENTENCE_BUILDING_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Build a sentence using these words: [she, every day, to work, goes]",
          options: [
            "She goes to work every day.",
            "Every day she goes to work.",
            "To work she goes every day.",
            "Goes she to work every day.",
          ],
          correct: 0,
          explanation: "Standard word order: Subject + Verb + Object + Time",
          tip: "Basic sentence structure: Subject + Verb + Object + Time/Place",
          tense: "present simple",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Build a sentence using: [I, coffee, drink, morning, in the]",
          options: [
            "I drink coffee in the morning.",
            "In the morning I drink coffee.",
            "Coffee I drink in the morning.",
            "Morning in the I drink coffee.",
          ],
          correct: 0,
          explanation:
            "Present simple with time phrase: Subject + Verb + Object + Time phrase",
          tip: "Time phrases can go at beginning or end, but end is more common",
          tense: "present simple",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 3,
          question:
            "Build a negative sentence using: [he, like, doesn't, vegetables]",
          options: [
            "He doesn't like vegetables.",
            "He like doesn't vegetables.",
            "Doesn't he like vegetables.",
            "He vegetables doesn't like.",
          ],
          correct: 0,
          explanation:
            "Present simple negative: Subject + doesn't + base verb + object",
          tip: "Negative: Subject + don't/doesn't + base verb",
          tense: "present simple",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question: "Build a question using: [where, work, does, she]",
          options: [
            "Where does she work?",
            "Does she where work?",
            "Where she does work?",
            "She does work where?",
          ],
          correct: 0,
          explanation:
            "Wh-question structure: Wh-word + auxiliary + subject + main verb",
          tip: "Question order: Wh-word + do/does + subject + base verb",
          tense: "present simple",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Build a sentence with frequency adverb: [usually, breakfast, has, she, at 8 AM]",
          options: [
            "She usually has breakfast at 8 AM.",
            "Usually she has breakfast at 8 AM.",
            "She has usually breakfast at 8 AM.",
            "At 8 AM she usually has breakfast.",
          ],
          correct: 0,
          explanation:
            "Frequency adverbs go before main verbs: Subject + adverb + verb + object + time",
          tip: "Frequency adverbs: Subject + usually/always/often + main verb",
          tense: "present simple",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Build a sentence using: [visited, yesterday, I, museum, the]",
          options: [
            "I visited the museum yesterday.",
            "Yesterday I visited the museum.",
            "The museum I visited yesterday.",
            "Visited I the museum yesterday.",
          ],
          correct: 0,
          explanation: "Past simple: Subject + past verb + object + time",
          tip: "Time expressions can go at beginning or end",
          tense: "past simple",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Build a negative sentence using: [didn't, to school, go, we, last week]",
          options: [
            "We didn't go to school last week.",
            "Last week we didn't go to school.",
            "We go didn't to school last week.",
            "Didn't we go to school last week.",
          ],
          correct: 0,
          explanation:
            "Past simple negative: Subject + didn't + base verb + object + time",
          tip: "Use base form after 'didn't', not past form",
          tense: "past simple",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
  },

  "present continuous": {
    A1: {
      default: [
        {
          id: 1,
          question: "Build a sentence using: [is, TV, watching, she, now]",
          options: [
            "She is watching TV now.",
            "Now she is watching TV.",
            "Is she watching TV now?",
            "TV she is watching now.",
          ],
          correct: 0,
          explanation:
            "Present continuous: Subject + be + verb-ing + object + time",
          tip: "Present continuous = am/is/are + verb-ing",
          tense: "present continuous",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question: "Build a question using: [what, doing, are, you]",
          options: [
            "What are you doing?",
            "You are doing what?",
            "Are you what doing?",
            "What you are doing?",
          ],
          correct: 0,
          explanation:
            "Present continuous question: Wh-word + be + subject + verb-ing",
          tip: "Questions with be: Wh-word + am/is/are + subject + verb-ing",
          tense: "present continuous",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question: "Build a sentence using: [have, Paris, visited, I, never]",
          options: [
            "I have never visited Paris.",
            "Never I have visited Paris.",
            "I never have visited Paris.",
            "Have I never visited Paris.",
          ],
          correct: 0,
          explanation:
            "Present perfect with never: Subject + have/has + never + past participle",
          tip: "Never goes between auxiliary and main verb",
          tense: "present perfect",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question: "Build a question using: [you, ever, been, have, to Japan]",
          options: [
            "Have you ever been to Japan?",
            "You have ever been to Japan?",
            "Ever you have been to Japan?",
            "Have ever you been to Japan?",
          ],
          correct: 0,
          explanation:
            "Present perfect question: Have/has + subject + ever + past participle",
          tip: "Ever questions: Have/has + subject + ever + past participle",
          tense: "present perfect",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Build a sentence using: [can, English, speak, she, fluently]",
          options: [
            "She can speak English fluently.",
            "Can she speak English fluently?",
            "She speak can English fluently.",
            "Fluently she can speak English.",
          ],
          correct: 0,
          explanation:
            "Modal sentence: Subject + modal + base verb + object + adverb",
          tip: "Modals + base verb form (no 'to')",
          tense: "modals",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question: "Build advice using: [should, more, study, you]",
          options: [
            "You should study more.",
            "Should you study more?",
            "You study should more.",
            "More you should study.",
          ],
          correct: 0,
          explanation: "Modal advice: Subject + should + base verb + adverb",
          tip: "Should gives advice: Subject + should + base verb",
          tense: "modals",
          type: "sentence-building" as TypeExcercise,
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
            "Build a first conditional sentence using: [if, rains, it, will stay, we, home]",
          options: [
            "If it rains, we will stay home.",
            "We will stay home if it rains.",
            "If it will rain, we stay home.",
            "It rains if we will stay home.",
          ],
          correct: 0,
          explanation:
            "First conditional: If + present simple, will + base verb",
          tip: "If clause uses present simple, main clause uses will + base",
          tense: "conditionals",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
  },

  questions: {
    A1: {
      default: [
        {
          id: 1,
          question: "Build a yes/no question using: [do, like, you, pizza]",
          options: [
            "Do you like pizza?",
            "You do like pizza?",
            "Like you do pizza?",
            "Do like you pizza?",
          ],
          correct: 0,
          explanation:
            "Yes/no question: Auxiliary + subject + main verb + object",
          tip: "Yes/no questions start with do/does/did/be/have",
          tense: "questions",
          type: "sentence-building" as TypeExcercise,
        },
        {
          id: 2,
          question: "Build a question using: [how old, are, you]",
          options: [
            "How old are you?",
            "You are how old?",
            "Are you how old?",
            "How are you old?",
          ],
          correct: 0,
          explanation: "Age question: How old + be + subject",
          tip: "'How old' asks about age",
          tense: "questions",
          type: "sentence-building" as TypeExcercise,
        },
      ],
    },
  },
};

export function getSentenceBuildingBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    SENTENCE_BUILDING_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof SENTENCE_BUILDING_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default SENTENCE_BUILDING_BACKUPS;

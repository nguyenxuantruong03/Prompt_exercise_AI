// Transformation Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const TRANSFORMATION_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Transform the sentence into negative form:",
          options: [
            "She works in a hospital.",
            "She doesn't work in a hospital.",
            "She not works in a hospital.",
            "She don't work in a hospital.",
          ],
          correct: 1,
          explanation:
            "Present simple negative: Subject + don't/doesn't + base verb",
          tip: "Third person singular uses 'doesn't', others use 'don't'",
          tense: "present simple",
          type: "transformation" as TypeExcercise,
        },
        {
          id: 2,
          question: "Transform the sentence into a question:",
          options: [
            "They live in London.",
            "Do they live in London?",
            "Are they live in London?",
            "They live in London?",
          ],
          correct: 1,
          explanation: "Present simple question: Do/Does + subject + base verb",
          tip: "Use 'do/does' to form questions in present simple",
          tense: "present simple",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question:
            "Transform into a Wh-question (asking about the underlined part): He works *at the hospital*.",
          options: [
            "Where does he work?",
            "What does he work?",
            "When does he work?",
            "How does he work?",
          ],
          correct: 0,
          explanation:
            "When asking about place, use 'Where + does + subject + base verb'",
          tip: "Where = place, What = thing, When = time, How = manner",
          tense: "present simple",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Transform the sentence into negative form:",
          options: [
            "I went to the cinema yesterday.",
            "I didn't go to the cinema yesterday.",
            "I not went to the cinema yesterday.",
            "I don't go to the cinema yesterday.",
          ],
          correct: 1,
          explanation:
            "Past simple negative: Subject + didn't + base verb (not past form)",
          tip: "Use 'didn't' + base verb for past simple negatives",
          tense: "past simple",
          type: "transformation" as TypeExcercise,
        },
        {
          id: 2,
          question: "Transform the sentence into a question:",
          options: [
            "She finished her homework.",
            "Did she finish her homework?",
            "Does she finished her homework?",
            "Did she finished her homework?",
          ],
          correct: 1,
          explanation: "Past simple question: Did + subject + base verb",
          tip: "Use 'did' + base verb for past simple questions",
          tense: "past simple",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  "present continuous": {
    A1: {
      default: [
        {
          id: 1,
          question: "Transform from present simple to present continuous:",
          options: [
            "She reads a book.",
            "She is reading a book.",
            "She reading a book.",
            "She are reading a book.",
          ],
          correct: 1,
          explanation: "Present continuous: be + verb-ing",
          tip: "Present continuous = am/is/are + verb-ing",
          tense: "present continuous",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question: "Transform from past simple to present perfect:",
          options: [
            "I visited Paris last year.",
            "I have visited Paris.",
            "I am visiting Paris.",
            "I had visited Paris.",
          ],
          correct: 1,
          explanation:
            "Present perfect focuses on experience without specific time",
          tip: "Present perfect = have/has + past participle",
          tense: "present perfect",
          type: "transformation" as TypeExcercise,
        },
        {
          id: 2,
          question: "Transform into negative form:",
          options: [
            "They have finished the project.",
            "They haven't finished the project.",
            "They have not finish the project.",
            "They don't have finished the project.",
          ],
          correct: 1,
          explanation:
            "Present perfect negative: have/has + not + past participle",
          tip: "Haven't/hasn't + past participle",
          tense: "present perfect",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  "passive voice": {
    B1: {
      default: [
        {
          id: 1,
          question: "Transform from active to passive voice:",
          options: [
            "The teacher explains the lesson.",
            "The lesson is explained by the teacher.",
            "The lesson explains by the teacher.",
            "The teacher is explained the lesson.",
          ],
          correct: 1,
          explanation: "Passive voice: be + past participle + by + agent",
          tip: "Active to passive: Object becomes subject, verb becomes be + past participle",
          tense: "passive voice",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question: "Transform using 'should' (giving advice):",
          options: [
            "You go to bed early.",
            "You should go to bed early.",
            "You should to go to bed early.",
            "You are should go to bed early.",
          ],
          correct: 1,
          explanation: "Modal advice: should + base verb",
          tip: "Should + base verb gives advice",
          tense: "modals",
          type: "transformation" as TypeExcercise,
        },
        {
          id: 2,
          question: "Transform from 'can' to negative form:",
          options: [
            "She can speak French.",
            "She cannot speak French.",
            "She can not to speak French.",
            "She don't can speak French.",
          ],
          correct: 1,
          explanation: "Modal negative: modal + not + base verb",
          tip: "Cannot (or can't) = negative form of can",
          tense: "modals",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },

  conditionals: {
    B1: {
      default: [
        {
          id: 1,
          question: "Transform into first conditional:",
          options: [
            "It rains tomorrow. We stay home.",
            "If it rains tomorrow, we will stay home.",
            "If it will rain tomorrow, we stay home.",
            "It will rain tomorrow, if we stay home.",
          ],
          correct: 1,
          explanation:
            "First conditional: If + present simple, will + base verb",
          tip: "First conditional: If clause (present) + main clause (will + base)",
          tense: "conditionals",
          type: "transformation" as TypeExcercise,
        },
      ],
    },
  },
};

export function getTransformationBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    TRANSFORMATION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof TRANSFORMATION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default TRANSFORMATION_BACKUPS;

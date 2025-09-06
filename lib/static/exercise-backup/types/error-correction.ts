// Error Correction Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const ERROR_CORRECTION_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "She go to work every day.",
            "She goes to work every day.",
            "She going to work every day.",
            "She gone to work every day.",
          ],
          correct: 1,
          explanation:
            "Incorrect verb form: 'She go' should be 'She goes' - third person singular needs -s ending in present simple.",
          tip: "Remember: he/she/it + verb-s in present simple",
          tense: "present simple",
          type: "error-correction" as TypeExcercise,
        },
        {
          id: 2,
          question: "Find and correct the error in this sentence:",
          options: [
            "They works in a hospital.",
            "They work in a hospital.",
            "They working in a hospital.",
            "They worked in a hospital.",
          ],
          correct: 1,
          explanation:
            "Incorrect verb form: 'They works' should be 'They work' - plural subjects use base form.",
          tip: "Plural subjects (they/we/you/I) use base verb form",
          tense: "present simple",
          type: "error-correction" as TypeExcercise,
        },
        {
          id: 3,
          question: "Find and correct the error in this sentence:",
          options: [
            "He don't like coffee.",
            "He doesn't like coffee.",
            "He not like coffee.",
            "He no like coffee.",
          ],
          correct: 1,
          explanation:
            "Incorrect auxiliary: 'He don't' should be 'He doesn't' - third person singular uses doesn't.",
          tip: "He/she/it = doesn't, others = don't",
          tense: "present simple",
          type: "error-correction" as TypeExcercise,
        },
      ],
      IELTS: [
        {
          id: 1,
          question: "Identify and correct the grammatical error:",
          options: [
            "The research indicate significant improvements.",
            "The research indicates significant improvements.",
            "The research indicating significant improvements.",
            "The research indicated significant improvements.",
          ],
          correct: 1,
          explanation:
            "Subject-verb agreement error: 'research' is uncountable and takes singular verb 'indicates'.",
          tip: "Uncountable nouns take singular verbs in academic writing",
          tense: "present simple",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "Does he likes pizza?",
            "Does he like pizza?",
            "Do he likes pizza?",
            "Do he like pizza?",
          ],
          correct: 1,
          explanation:
            "After auxiliary 'does', use base form: 'Does he like' not 'Does he likes'.",
          tip: "do/does + base verb form",
          tense: "present simple",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "I buyed a new car yesterday.",
            "I bought a new car yesterday.",
            "I buy a new car yesterday.",
            "I buying a new car yesterday.",
          ],
          correct: 1,
          explanation:
            "Irregular verb error: 'buy' becomes 'bought' in past simple, not 'buyed'.",
          tip: "Learn irregular verbs: buy-bought-bought",
          tense: "past simple",
          type: "error-correction" as TypeExcercise,
        },
        {
          id: 2,
          question: "Find and correct the error in this sentence:",
          options: [
            "She didn't went to school.",
            "She didn't go to school.",
            "She not went to school.",
            "She don't go to school.",
          ],
          correct: 1,
          explanation:
            "After 'didn't', use base form: 'didn't go' not 'didn't went'.",
          tip: "didn't + base verb form",
          tense: "past simple",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "I have saw that movie before.",
            "I have seen that movie before.",
            "I have see that movie before.",
            "I has seen that movie before.",
          ],
          correct: 1,
          explanation:
            "Incorrect past participle: 'have saw' should be 'have seen' - use past participle after have/has.",
          tip: "Present perfect = have/has + past participle",
          tense: "present perfect",
          type: "error-correction" as TypeExcercise,
        },
        {
          id: 2,
          question: "Find and correct the error in this sentence:",
          options: [
            "She has already finish her work.",
            "She has already finished her work.",
            "She have already finished her work.",
            "She already has finish her work.",
          ],
          correct: 1,
          explanation:
            "Missing past participle ending: 'has finish' should be 'has finished'.",
          tip: "Regular verbs: base + -ed for past participle",
          tense: "present perfect",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "You should to study more.",
            "You should study more.",
            "You should studying more.",
            "You should studied more.",
          ],
          correct: 1,
          explanation:
            "Modal error: 'should to' should be 'should' - modals are followed by base form without 'to'.",
          tip: "Modals + base verb (no 'to')",
          tense: "modals",
          type: "error-correction" as TypeExcercise,
        },
        {
          id: 2,
          question: "Find and correct the error in this sentence:",
          options: [
            "I can to speak English.",
            "I can speak English.",
            "I can speaking English.",
            "I can spoke English.",
          ],
          correct: 1,
          explanation:
            "Modal error: 'can to' should be 'can' - no 'to' after modal verbs.",
          tip: "Can + base verb form",
          tense: "modals",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },

  conditionals: {
    B1: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "If I will have time, I will call you.",
            "If I have time, I will call you.",
            "If I had time, I will call you.",
            "If I have time, I would call you.",
          ],
          correct: 1,
          explanation:
            "First conditional error: Use present simple in if-clause, not 'will'.",
          tip: "First conditional: If + present, will + base",
          tense: "conditionals",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },

  articles: {
    A1: {
      default: [
        {
          id: 1,
          question: "Find and correct the error in this sentence:",
          options: [
            "She is a teacher at the university.",
            "She is a teacher at a university.",
            "She is teacher at the university.",
            "She is the teacher at university.",
          ],
          correct: 0,
          explanation:
            "Article usage: Both options could be correct depending on context, but 'a teacher at the university' is more specific.",
          tip: "Use 'the' when referring to a specific university",
          tense: "articles",
          type: "error-correction" as TypeExcercise,
        },
        {
          id: 2,
          question: "Find and correct the error in this sentence:",
          options: [
            "I saw a elephant at zoo.",
            "I saw an elephant at the zoo.",
            "I saw elephant at the zoo.",
            "I saw the elephant at zoo.",
          ],
          correct: 1,
          explanation:
            "Article errors: 'a elephant' should be 'an elephant' (vowel sound), 'at zoo' should be 'at the zoo' (specific place).",
          tip: "Use 'an' before vowel sounds, 'the' with specific places",
          tense: "articles",
          type: "error-correction" as TypeExcercise,
        },
      ],
    },
  },
};

export function getErrorCorrectionBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    ERROR_CORRECTION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof ERROR_CORRECTION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default ERROR_CORRECTION_BACKUPS;

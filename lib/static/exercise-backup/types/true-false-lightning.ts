// True-False Lightning Game Backup Database (Mini Game)
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const TRUE_FALSE_LIGHTNING_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "She go to school every day.",
            timeLimit: 10,
            correctness: false,
            errorType: "verb agreement",
            quickExplanation:
              "Should be 'goes' - third person singular needs -s",
          },
          correct: 1, // False
          explanation:
            "Incorrect: 'She go' should be 'She goes' - third person singular needs -s.",
          tip: "Quick tip: he/she/it always takes -s in present simple!",
          tense: "present simple",
          type: "true-false-lightning" as TypeExcercise,
        },
        {
          id: 2,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "They work in an office.",
            timeLimit: 10,
            correctness: true,
            errorType: "",
            quickExplanation: "Correct - plural subject uses base verb form",
          },
          correct: 0, // True
          explanation:
            "Correct: 'They work' is right - plural subjects use base form.",
          tip: "Plural subjects (they/we/you) use base verb form.",
          tense: "present simple",
          type: "true-false-lightning" as TypeExcercise,
        },
        {
          id: 3,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "I likes pizza very much.",
            timeLimit: 10,
            correctness: false,
            errorType: "verb agreement",
            quickExplanation: "Should be 'like' - I uses base form",
          },
          correct: 1, // False
          explanation:
            "Incorrect: 'I likes' should be 'I like' - first person uses base form.",
          tip: "I/you/we/they use base verb form!",
          tense: "present simple",
          type: "true-false-lightning" as TypeExcercise,
        },
        {
          id: 4,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "He plays football every weekend.",
            timeLimit: 10,
            correctness: true,
            errorType: "",
            quickExplanation: "Correct - 'he' takes -s ending",
          },
          correct: 0, // True
          explanation: "Correct: 'He plays' follows present simple rules.",
          tip: "He/she/it + verb-s is correct!",
          tense: "present simple",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "Does she likes ice cream?",
            timeLimit: 10,
            correctness: false,
            errorType: "auxiliary + verb form",
            quickExplanation:
              "Should be 'Does she like' - base form after auxiliary",
          },
          correct: 1, // False
          explanation:
            "Incorrect: Use base form after 'does' - 'Does she like'",
          tip: "After do/does, always use base verb form!",
          tense: "present simple",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "I goed to the store yesterday.",
            timeLimit: 10,
            correctness: false,
            errorType: "irregular verb",
            quickExplanation: "Should be 'went' - go is irregular verb",
          },
          correct: 1, // False
          explanation:
            "Incorrect: 'goed' should be 'went' - go is an irregular verb.",
          tip: "Irregular verbs: go-went-gone (not goed!)",
          tense: "past simple",
          type: "true-false-lightning" as TypeExcercise,
        },
        {
          id: 2,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "She finished her homework last night.",
            timeLimit: 10,
            correctness: true,
            errorType: "",
            quickExplanation: "Correct - regular verb adds -ed",
          },
          correct: 0, // True
          explanation:
            "Correct: 'finished' is the correct past form of 'finish'.",
          tip: "Regular verbs add -ed for past simple!",
          tense: "past simple",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "You must to wear a helmet.",
            timeLimit: 10,
            correctness: false,
            errorType: "modal + to",
            quickExplanation: "Should be 'must wear' - no 'to' after modals",
          },
          correct: 1, // False
          explanation:
            "Incorrect: 'must to' should be 'must' - no 'to' after modal verbs.",
          tip: "Modals + base verb (no 'to'!)",
          tense: "modals",
          type: "true-false-lightning" as TypeExcercise,
        },
        {
          id: 2,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "She can swim very well.",
            timeLimit: 10,
            correctness: true,
            errorType: "",
            quickExplanation: "Correct - can + base verb",
          },
          correct: 0, // True
          explanation: "Correct: 'can swim' follows modal + base verb rule.",
          tip: "Modals are followed by base verbs!",
          tense: "modals",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
  },

  articles: {
    A1: {
      default: [
        {
          id: 1,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "I have a apple.",
            timeLimit: 10,
            correctness: false,
            errorType: "article choice",
            quickExplanation:
              "Should be 'an apple' - use 'an' before vowel sounds",
          },
          correct: 1, // False
          explanation:
            "Incorrect: Use 'an' before words starting with vowel sounds - 'an apple'.",
          tip: "A + consonant sounds, An + vowel sounds!",
          tense: "articles",
          type: "true-false-lightning" as TypeExcercise,
        },
        {
          id: 2,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "The sun is bright today.",
            timeLimit: 10,
            correctness: true,
            errorType: "",
            quickExplanation: "Correct - unique objects use 'the'",
          },
          correct: 0, // True
          explanation:
            "Correct: Unique objects like 'the sun' always use 'the'.",
          tip: "Unique things = the (sun, moon, earth)!",
          tense: "articles",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
  },

  prepositions: {
    A1: {
      default: [
        {
          id: 1,
          question: "Is this sentence correct?",
          lightningData: {
            sentence: "I go to school with bus.",
            timeLimit: 10,
            correctness: false,
            errorType: "preposition choice",
            quickExplanation: "Should be 'by bus' - use 'by' for transport",
          },
          correct: 1, // False
          explanation:
            "Incorrect: Use 'by bus', not 'with bus' for transportation.",
          tip: "Transport = BY (by bus, by car, by train)!",
          tense: "prepositions",
          type: "true-false-lightning" as TypeExcercise,
        },
      ],
    },
  },
};

export function getTrueFalseLightningBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    TRUE_FALSE_LIGHTNING_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof TRUE_FALSE_LIGHTNING_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default TRUE_FALSE_LIGHTNING_BACKUPS;

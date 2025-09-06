// Certificate-specific backup exercises for IELTS, TOEIC, TOEFL, etc.
import {
  Exercise,
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

// IELTS Academic Backup Exercises
export const IELTSBackups = {
  "present simple": {
    B1: {
      "multiple-choice": {
        title: "Present Simple - IELTS Academic Writing (B1)",
        questions: [
          {
            id: 1,
            question:
              "The graph _____ a significant increase in renewable energy usage.",
            options: ["show", "shows", "showing", "showed"],
            correct: 1,
            explanation:
              "In academic writing, 'graph' is singular so use 'shows'. Common IELTS Task 1 language.",
            tip: "IELTS Academic: The chart/graph/table shows/illustrates/demonstrates",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question:
              "Research _____ that students _____ better when they study in groups.",
            options: [
              "indicates / perform",
              "indicate / performs",
              "indicating / performing",
              "indicated / performed",
            ],
            correct: 0,
            explanation:
              "'Research' is uncountable (singular) and 'students' is plural.",
            tip: "Academic vocabulary: research indicates/suggests/shows",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 3,
            question:
              "Many universities _____ online courses to international students.",
            options: ["offer", "offers", "offering", "offered"],
            correct: 0,
            explanation: "'Universities' is plural, so use base form 'offer'.",
            tip: "IELTS Writing: Universities provide/offer/deliver education",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
      "fill-in-blank": {
        title: "Present Simple - IELTS Academic Gap Fill (B1)",
        questions: [
          {
            id: 1,
            question:
              "The data _____ (reveal) interesting patterns in consumer behavior.",
            correct: "reveals",
            explanation:
              "'Data' can be singular or plural, but in formal academic writing often treated as singular.",
            tip: "IELTS: data reveals/shows/indicates (formal academic style)",
            tense: "present simple",
            type: "fill-in-blank" as TypeExcercise,
          },
          {
            id: 2,
            question:
              "Governments _____ (implement) new policies to address climate change.",
            correct: "implement",
            explanation: "Plural 'governments' uses base form 'implement'.",
            tip: "IELTS Writing: governments implement/introduce/adopt policies",
            tense: "present simple",
            type: "fill-in-blank" as TypeExcercise,
          },
        ],
        type: "fill-in-blank" as TypeExcercise,
      },
    },
    B2: {
      "multiple-choice": {
        title: "Present Simple - IELTS Academic Advanced (B2)",
        questions: [
          {
            id: 1,
            question:
              "The proportion of elderly people _____ dramatically when birth rates _____.",
            options: [
              "rises / decline",
              "rise / declines",
              "rising / declining",
              "rose / declined",
            ],
            correct: 0,
            explanation:
              "'Proportion' is singular (rises) and 'rates' is plural (decline).",
            tip: "IELTS Task 1: proportions rise/fall, rates increase/decrease",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// TOEIC Business Backup Exercises
export const TOEICBackups = {
  "present simple": {
    A2: {
      "multiple-choice": {
        title: "Present Simple - TOEIC Business Context (A2)",
        questions: [
          {
            id: 1,
            question: "Our company _____ high-quality software solutions.",
            options: ["provide", "provides", "providing", "provided"],
            correct: 1,
            explanation: "'Company' is singular, so use 'provides'.",
            tip: "TOEIC Business: companies provide/offer/deliver services",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question: "Employees _____ training sessions every month.",
            options: ["attend", "attends", "attending", "attended"],
            correct: 0,
            explanation: "Plural 'employees' uses base form 'attend'.",
            tip: "Workplace routines: attend meetings/training/conferences",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 3,
            question: "The department _____ quarterly reports to management.",
            options: ["submit", "submits", "submitting", "submitted"],
            correct: 1,
            explanation: "'Department' is singular, so use 'submits'.",
            tip: "Business reporting: submit reports/proposals/documents",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
    B1: {
      "multiple-choice": {
        title: "Present Simple - TOEIC Professional Communication (B1)",
        questions: [
          {
            id: 1,
            question:
              "The CEO regularly _____ with international clients and _____ business strategies.",
            options: [
              "meet / discuss",
              "meets / discusses",
              "meeting / discussing",
              "met / discussed",
            ],
            correct: 1,
            explanation:
              "'CEO' is singular, so both verbs need -s: meets, discusses.",
            tip: "Professional context: CEOs meet clients, discuss strategies",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// TOEFL Academic Backup Exercises
export const TOEFLBackups = {
  "present simple": {
    B1: {
      "multiple-choice": {
        title: "Present Simple - TOEFL Academic Context (B1)",
        questions: [
          {
            id: 1,
            question:
              "Scientific evidence _____ that climate change _____ global weather patterns.",
            options: [
              "suggest / affect",
              "suggests / affects",
              "suggesting / affecting",
              "suggested / affected",
            ],
            correct: 1,
            explanation:
              "'Evidence' is uncountable (singular) and 'climate change' is singular.",
            tip: "Academic TOEFL: evidence suggests/indicates/demonstrates",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question:
              "University professors _____ extensive research in their specialized fields.",
            options: ["conduct", "conducts", "conducting", "conducted"],
            correct: 0,
            explanation: "Plural 'professors' uses base form 'conduct'.",
            tip: "Academic context: professors conduct/carry out research",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// Cambridge Backup Exercises
export const CambridgeBackups = {
  "present simple": {
    B2: {
      "multiple-choice": {
        title: "Present Simple - Cambridge FCE Level (B2)",
        questions: [
          {
            id: 1,
            question:
              "Neither of the proposals _____ the committee's requirements, although both _____ merit.",
            options: [
              "meet / have",
              "meets / has",
              "meeting / having",
              "met / had",
            ],
            correct: 0,
            explanation:
              "'Neither' is singular (meets) but 'both' is plural (have).",
            tip: "Cambridge grammar: Neither + singular verb, Both + plural verb",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// Function to get certificate-specific backup
export function getCertificateSpecificBackup(
  certificateType: CertificateType,
  grammarTopic: string,
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  numQuestions: number = 5
): Exercise | null {
  const certificateBackups: { [key in CertificateType]: any } = {
    IELTS: IELTSBackups,
    TOEIC: TOEICBackups,
    TOEFL: TOEFLBackups,
    Cambridge: CambridgeBackups,
    PTE: {}, // Could add PTE-specific backups
    SAT: {}, // Could add SAT-specific backups
    VSTEP: {}, // Could add VSTEP-specific backups
  };

  const backupData = certificateBackups[certificateType];
  if (!backupData) return null;

  const topicData = backupData[grammarTopic.toLowerCase()];
  if (!topicData) return null;

  const levelData = topicData[proficiencyLevel];
  if (!levelData) return null;

  const exerciseData = levelData[exerciseType];
  if (!exerciseData) return null;

  // Limit questions to requested number
  const limitedQuestions = exerciseData.questions.slice(0, numQuestions);

  return {
    ...exerciseData,
    questions: limitedQuestions,
  };
}

export default {
  IELTSBackups,
  TOEICBackups,
  TOEFLBackups,
  CambridgeBackups,
  getCertificateSpecificBackup,
};

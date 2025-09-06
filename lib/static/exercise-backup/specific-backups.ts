// Specific backup exercises organized by grammar topic, level, and certificate type
import {
  Exercise,
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

// Present Simple Backup Exercises
export const presentSimpleBackups = {
  // A1 Level Present Simple
  A1: {
    "multiple-choice": {
      default: {
        title: "Present Simple - Multiple Choice (A1)",
        questions: [
          {
            id: 1,
            question: "I _____ coffee every morning.",
            options: ["drink", "drinks", "drinking", "drank"],
            correct: 0,
            explanation:
              "Use base form 'drink' with I/you/we/they in present simple.",
            tip: "Present simple: I/you/we/they + base verb",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question: "She _____ English at university.",
            options: ["study", "studies", "studying", "studied"],
            correct: 1,
            explanation:
              "Third person singular (she) takes -s: study → studies",
            tip: "He/she/it + verb + s/es",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 3,
            question: "_____ you like pizza?",
            options: ["Do", "Does", "Are", "Is"],
            correct: 0,
            explanation: "Use 'Do' with you in present simple questions.",
            tip: "Questions: Do + I/you/we/they + base verb?",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 4,
            question: "We _____ TV in the evening.",
            options: ["watch", "watches", "watching", "watched"],
            correct: 0,
            explanation: "Use base form 'watch' with we in present simple.",
            tip: "We/they use base form of verb",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 5,
            question: "My brother _____ in London.",
            options: ["live", "lives", "living", "lived"],
            correct: 1,
            explanation: "Third person singular: live → lives",
            tip: "Add -s to verbs with he/she/it",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
      IELTS: {
        title: "Present Simple - IELTS Academic Style (A1)",
        questions: [
          {
            id: 1,
            question: "University students _____ in the library every day.",
            options: ["study", "studies", "studying", "studied"],
            correct: 0,
            explanation: "Plural subject 'students' uses base form 'study'.",
            tip: "IELTS tip: Plural subjects + base verb form",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question: "The research _____ interesting results.",
            options: ["show", "shows", "showing", "showed"],
            correct: 1,
            explanation: "'Research' is singular, so use 'shows'.",
            tip: "Academic writing: research shows, data indicates",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
      TOEIC: {
        title: "Present Simple - TOEIC Business Context (A1)",
        questions: [
          {
            id: 1,
            question: "The company _____ high-quality products.",
            options: ["make", "makes", "making", "made"],
            correct: 1,
            explanation: "'Company' is singular, so use 'makes'.",
            tip: "Business context: companies make/provide/offer",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question: "Employees _____ at 9 AM every day.",
            options: ["start", "starts", "starting", "started"],
            correct: 0,
            explanation: "Plural 'employees' uses base form 'start'.",
            tip: "Work routines use present simple",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },

  // B1 Level Present Simple
  B1: {
    "multiple-choice": {
      default: {
        title: "Present Simple - Multiple Choice (B1)",
        questions: [
          {
            id: 1,
            question:
              "The train usually _____ on time, but today it _____ late.",
            options: [
              "arrives / is",
              "arrive / are",
              "arriving / being",
              "arrived / was",
            ],
            correct: 0,
            explanation:
              "Present simple for routines 'arrives' and present continuous for temporary situations 'is'.",
            tip: "Present simple for habits vs present continuous for temporary states",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question:
              "Research _____ that people _____ happier when they exercise regularly.",
            options: [
              "shows / feel",
              "show / feels",
              "showing / feeling",
              "showed / felt",
            ],
            correct: 0,
            explanation:
              "'Research shows' (singular) and 'people feel' (plural).",
            tip: "Academic language: research shows, studies indicate",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },

  // C1 Level Present Simple
  C1: {
    "multiple-choice": {
      default: {
        title: "Present Simple - Advanced Usage (C1)",
        questions: [
          {
            id: 1,
            question:
              "The committee _____ annually to review policies, although individual members _____ informally throughout the year.",
            options: [
              "meets / communicate",
              "meet / communicates",
              "meeting / communicating",
              "met / communicated",
            ],
            correct: 0,
            explanation:
              "Collective noun 'committee' is singular (meets), but 'members' is plural (communicate).",
            tip: "Advanced: collective nouns can be singular or plural depending on context",
            tense: "present simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// Past Simple Backup Exercises
export const pastSimpleBackups = {
  A1: {
    "multiple-choice": {
      default: {
        title: "Past Simple - Multiple Choice (A1)",
        questions: [
          {
            id: 1,
            question: "I _____ to the cinema yesterday.",
            options: ["go", "went", "going", "gone"],
            correct: 1,
            explanation: "Past form of 'go' is 'went' (irregular verb).",
            tip: "Irregular verbs: go → went → gone",
            tense: "past simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question: "She _____ her homework last night.",
            options: ["finish", "finished", "finishing", "finishes"],
            correct: 1,
            explanation: "Regular verb: finish → finished (add -ed).",
            tip: "Regular verbs add -ed in past simple",
            tense: "past simple",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 3,
            question: "_____ you see the movie?",
            options: ["Do", "Did", "Are", "Were"],
            correct: 1,
            explanation: "Use 'Did' for past simple questions.",
            tip: "Past questions: Did + subject + base verb?",
            tense: "past simple",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// Modals Backup Exercises
export const modalsBackups = {
  A2: {
    "multiple-choice": {
      default: {
        title: "Modal Verbs - Multiple Choice (A2)",
        questions: [
          {
            id: 1,
            question: "You _____ eat healthy food.",
            options: ["should", "must", "can", "might"],
            correct: 0,
            explanation: "'Should' gives advice or recommendations.",
            tip: "Should = advice, must = obligation, can = ability",
            tense: "modals",
            type: "multiple-choice" as TypeExcercise,
          },
          {
            id: 2,
            question: "_____ I use your phone?",
            options: ["Should", "Must", "Can", "Will"],
            correct: 2,
            explanation: "'Can' is used to ask for permission politely.",
            tip: "Can/May = asking permission",
            tense: "modals",
            type: "multiple-choice" as TypeExcercise,
          },
        ],
        type: "multiple-choice" as TypeExcercise,
      },
    },
  },
};

// Function to get specific backup exercise
export function getSpecificBackupExercise(
  grammarTopic: string,
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Exercise | null {
  // Try certificate-specific backups first
  if (certificateType) {
    const { getCertificateSpecificBackup } = require("./certificate-backups");
    const certificateBackup = getCertificateSpecificBackup(
      certificateType,
      grammarTopic,
      exerciseType,
      proficiencyLevel,
      numQuestions
    );

    if (certificateBackup) {
      console.log(
        `📚 Using ${certificateType}-specific backup for ${grammarTopic}`
      );
      return certificateBackup;
    }
  }

  // Map grammar topics to backup objects
  const topicMappings: { [key: string]: any } = {
    "present simple": presentSimpleBackups,
    "past simple": pastSimpleBackups,
    modals: modalsBackups,
  };

  const backupData = topicMappings[grammarTopic.toLowerCase()];
  if (!backupData) return null;

  const levelData = backupData[proficiencyLevel];
  if (!levelData) return null;

  const exerciseData = levelData[exerciseType];
  if (!exerciseData) return null;

  // Get specific certificate version or default
  const certificateKey = certificateType || "default";
  const specificExercise =
    exerciseData[certificateKey] || exerciseData["default"];

  if (!specificExercise) return null;

  // Limit questions to requested number
  const limitedQuestions = specificExercise.questions.slice(0, numQuestions);

  return {
    ...specificExercise,
    questions: limitedQuestions,
  };
}

// Lightning Game Specific Backups
export const lightningGameBackups = {
  "present simple": {
    A1: [
      {
        id: 1,
        question: "Is this sentence correct?",
        lightningData: {
          sentence: "She go to school every day.",
          timeLimit: 10,
          correctness: false,
          errorType: "verb agreement",
          quickExplanation: "Should be 'goes' - third person singular needs -s",
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
    ],
  },
};

export default {
  presentSimpleBackups,
  pastSimpleBackups,
  modalsBackups,
  getSpecificBackupExercise,
  lightningGameBackups,
};

// Sentence Combining Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const SENTENCE_COMBINING_BACKUPS = {
  conjunctions: {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Combine these sentences using 'and': 'I like coffee.' + 'I like tea.'",
          options: [
            "I like coffee and tea.",
            "I like coffee and I like tea.",
            "I like coffee, and I like tea.",
            "I and like coffee and tea.",
          ],
          correct: 0,
          explanation:
            "When combining sentences with the same subject and verb, eliminate repetition: 'I like coffee and tea.'",
          tip: "Same subject + verb: eliminate repetition (I like A and B, not I like A and I like B)",
          tense: "conjunctions",
          type: "sentence-combining" as TypeExcercise,
        },
        {
          id: 2,
          question: "Combine using 'but': 'She is tired.' + 'She is working.'",
          options: [
            "She is tired but working.",
            "She is tired, but she is working.",
            "She tired but working.",
            "She is tired but she working.",
          ],
          correct: 1,
          explanation:
            "When subjects are the same but complete thoughts are different, use comma + but + complete clause.",
          tip: "Contrasting ideas: comma + but + complete clause (She is tired, but she is working)",
          tense: "conjunctions",
          type: "sentence-combining" as TypeExcercise,
        },
        {
          id: 3,
          question: "Combine using 'so': 'It was raining.' + 'We stayed home.'",
          options: [
            "It was raining so we stayed home.",
            "It was raining, so we stayed home.",
            "It raining, so we stayed home.",
            "It was raining so stayed home.",
          ],
          correct: 1,
          explanation:
            "Use comma before 'so' when showing cause and effect between complete clauses.",
          tip: "Cause and effect: comma + so + complete clause (cause, so result)",
          tense: "conjunctions",
          type: "sentence-combining" as TypeExcercise,
        },
      ],
    },
    B1: {
      default: [
        {
          id: 1,
          question:
            "Combine using 'although': 'He studied hard.' + 'He failed the test.'",
          options: [
            "Although he studied hard, he failed the test.",
            "He studied hard although he failed the test.",
            "Although he studied hard but he failed the test.",
            "He studied hard, although failed the test.",
          ],
          correct: 0,
          explanation:
            "Although introduces the contrasting idea first, followed by comma and main clause.",
          tip: "Although + contrasting idea, main result (Although A, B - not Although A but B)",
          tense: "conjunctions",
          type: "sentence-combining" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Combine using 'because': 'She was late.' + 'Traffic was heavy.'",
          options: [
            "She was late because traffic was heavy.",
            "Because traffic was heavy, she was late.",
            "She was late, because traffic was heavy.",
            "Traffic was heavy because she was late.",
          ],
          correct: 1,
          explanation:
            "Because clause can come first (with comma) or second (no comma). Option B shows correct cause-effect relationship.",
          tip: "Because: reason first = Because A, B. Reason second = B because A.",
          tense: "conjunctions",
          type: "sentence-combining" as TypeExcercise,
        },
      ],
    },
  },

  "relative clauses": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Combine using 'who': 'The woman is my teacher.' + 'She lives next door.'",
          options: [
            "The woman who lives next door is my teacher.",
            "The woman, who lives next door, is my teacher.",
            "The woman who she lives next door is my teacher.",
            "The woman lives next door who is my teacher.",
          ],
          correct: 0,
          explanation:
            "Defining relative clause with 'who' for people, no commas needed, 'who' replaces subject 'she'.",
          tip: "Who replaces the subject (she → who). No comma for essential information.",
          tense: "relative clauses",
          type: "sentence-combining" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Combine using 'which': 'The book is on the table.' + 'I bought it yesterday.'",
          options: [
            "The book which I bought yesterday is on the table.",
            "The book, which I bought yesterday, is on the table.",
            "The book which I bought it yesterday is on the table.",
            "The book is on the table which I bought yesterday.",
          ],
          correct: 0,
          explanation:
            "Defining relative clause with 'which' for things, 'which' replaces object 'it'.",
          tip: "Which replaces the object (it → which). Don't keep both 'which' and 'it'.",
          tense: "relative clauses",
          type: "sentence-combining" as TypeExcercise,
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
            "Combine into first conditional: 'It might rain tomorrow.' + 'We will cancel the picnic.'",
          options: [
            "If it rains tomorrow, we will cancel the picnic.",
            "If it will rain tomorrow, we will cancel the picnic.",
            "If it might rain tomorrow, we cancel the picnic.",
            "It rains tomorrow, we will cancel the picnic.",
          ],
          correct: 0,
          explanation:
            "First conditional: If + present simple, will + base verb. 'Might rain' becomes 'rains' in if-clause.",
          tip: "First conditional: If + present simple (not will), will + base verb",
          tense: "conditionals",
          type: "sentence-combining" as TypeExcercise,
        },
      ],
    },
  },

  "time clauses": {
    A2: {
      default: [
        {
          id: 1,
          question: "Combine using 'when': 'I arrived home.' + 'It was dark.'",
          options: [
            "When I arrived home, it was dark.",
            "I arrived home when it was dark.",
            "When I arrived home, and it was dark.",
            "I arrived home, when it was dark.",
          ],
          correct: 0,
          explanation:
            "Time clause with 'when' can come first (with comma) or second (no comma). Both actions happened at same time.",
          tip: "When clause first = When A, B (with comma). When clause second = B when A (no comma).",
          tense: "time clauses",
          type: "sentence-combining" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Combine using 'before': 'She studied English.' + 'She moved to Canada.'",
          options: [
            "Before she moved to Canada, she studied English.",
            "She studied English before she moved to Canada.",
            "She studied English, before she moved to Canada.",
            "Before she studied English, she moved to Canada.",
          ],
          correct: 1,
          explanation:
            "Sequence: first she studied, then she moved. 'Before' shows what happened later.",
          tip: "Before shows sequence: A happened before B = A before B (A first, B second)",
          tense: "time clauses",
          type: "sentence-combining" as TypeExcercise,
        },
      ],
    },
  },
};

export function getSentenceCombiningBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    SENTENCE_COMBINING_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof SENTENCE_COMBINING_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default SENTENCE_COMBINING_BACKUPS;

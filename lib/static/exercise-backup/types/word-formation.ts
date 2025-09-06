// Word Formation Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const WORD_FORMATION_BACKUPS = {
  "word families": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Form the correct word: 'She works as a ___ (TEACH) at the local school.'",
          options: ["teacher", "teaching", "teaches", "taught"],
          correct: 0,
          explanation:
            "TEACH → teacher (person who teaches). Use -er suffix for people who do jobs.",
          tip: "Person who does job: verb + -er (teach → teacher, work → worker)",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Form the correct word: 'The movie was very ___ (INTEREST).'",
          options: ["interesting", "interested", "interest", "interestingly"],
          correct: 0,
          explanation:
            "INTEREST → interesting (describes the movie). Things are interesting, people are interested.",
          tip: "Things are -ing (interesting, boring). People are -ed (interested, bored).",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 3,
          question:
            "Form the correct word: 'I was ___ (DISAPPOINT) with the results.'",
          options: [
            "disappointed",
            "disappointing",
            "disappointment",
            "disappoint",
          ],
          correct: 0,
          explanation:
            "DISAPPOINT → disappointed. Person feels disappointed by something disappointing.",
          tip: "Feelings: people are -ed (disappointed, excited, surprised)",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 4,
          question:
            "Form the correct word: 'She spoke very ___ (CLEAR) about the problem.'",
          options: ["clearly", "clear", "clarity", "clearing"],
          correct: 0,
          explanation:
            "CLEAR → clearly (adverb). Use -ly to form adverbs from adjectives.",
          tip: "Adverbs (how): adjective + -ly (clear → clearly, quick → quickly)",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 5,
          question:
            "Form the correct word: 'The ___ (SOLVE) to this problem is simple.'",
          options: ["solution", "solving", "solve", "solver"],
          correct: 0,
          explanation:
            "SOLVE → solution (noun). Use -tion suffix to form nouns from verbs.",
          tip: "Action nouns: verb + -tion (solve → solution, educate → education)",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
      ],
      IELTS: [
        {
          id: 1,
          question:
            "Academic word formation: 'The research provides valuable ___ (INFORM) about climate change.'",
          options: ["information", "informative", "informed", "informing"],
          correct: 0,
          explanation:
            "INFORM → information. Academic writing often uses abstract nouns.",
          tip: "Academic nouns: inform → information, analyze → analysis",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Academic context: 'The study ___ (EMPHASIS) the importance of early intervention.'",
          options: ["emphasizes", "emphasis", "emphatic", "emphatically"],
          correct: 0,
          explanation:
            "EMPHASIS → emphasizes (verb). The study (subject) emphasizes (verb).",
          tip: "Academic verbs: emphasis → emphasize, analysis → analyze",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
      ],
      TOEIC: [
        {
          id: 1,
          question:
            "Business context: 'We need to improve customer ___ (SATISFY).'",
          options: ["satisfaction", "satisfying", "satisfied", "satisfy"],
          correct: 0,
          explanation:
            "SATISFY → satisfaction. Business often uses abstract nouns for concepts.",
          tip: "Business nouns: satisfy → satisfaction, produce → production",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
      ],
    },
    B2: {
      default: [
        {
          id: 1,
          question:
            "Advanced word formation: 'The government's policy was highly ___ (CONTROVERSY).'",
          options: [
            "controversial",
            "controversy",
            "controversially",
            "controver",
          ],
          correct: 0,
          explanation:
            "CONTROVERSY → controversial (adjective). The policy was controversial.",
          tip: "Abstract concepts: controversy → controversial, mystery → mysterious",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Form the word: 'The ___ (SCIENCE) community supports this theory.'",
          options: ["scientific", "science", "scientist", "scientifically"],
          correct: 0,
          explanation: "SCIENCE → scientific (adjective describing community).",
          tip: "Describing groups: science → scientific community, medicine → medical profession",
          tense: "word families",
          type: "word-formation" as TypeExcercise,
        },
      ],
    },
  },

  "prefixes and suffixes": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Add prefix to make opposite: 'It's ___ possible to finish today.' (POSSIBLE)",
          options: ["impossible", "unpossible", "dispossible", "inpossible"],
          correct: 0,
          explanation:
            "POSSIBLE → impossible. Use 'im-' before words starting with 'p'.",
          tip: "Negative prefixes: im- before p/m (impossible, immature), un- before most others (unlikely)",
          tense: "prefixes and suffixes",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 2,
          question: "Add prefix: 'She ___ agrees with the decision.' (AGREE)",
          options: ["disagrees", "unarees", "misagrees", "reagrees"],
          correct: 0,
          explanation: "AGREE → disagrees. Use 'dis-' for opposite actions.",
          tip: "Opposite actions: dis- (disagree, disappear, disconnect)",
          tense: "prefixes and suffixes",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 3,
          question:
            "Add suffix to make noun: 'The ___ of this building is impressive.' (HIGH)",
          options: ["height", "highness", "highly", "higher"],
          correct: 0,
          explanation:
            "HIGH → height. Physical measurements often have irregular noun forms.",
          tip: "Measurement nouns: high → height, long → length, wide → width",
          tense: "prefixes and suffixes",
          type: "word-formation" as TypeExcercise,
        },
      ],
    },
    B2: {
      default: [
        {
          id: 1,
          question:
            "Advanced prefix: 'The company decided to ___ its workforce.' (SIZE)",
          options: ["downsize", "unsize", "desize", "resize"],
          correct: 0,
          explanation:
            "SIZE → downsize (reduce size). Business term for reducing staff.",
          tip: "Business prefixes: downsize (reduce), upgrade (improve), outsource (external)",
          tense: "prefixes and suffixes",
          type: "word-formation" as TypeExcercise,
        },
      ],
    },
  },

  "compound words": {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Form compound word: 'I need to buy some ___ for my headache.' (PAIN + KILL)",
          options: ["painkiller", "pain-killer", "killpain", "painkill"],
          correct: 0,
          explanation: "PAIN + KILL → painkiller. Medicine that kills pain.",
          tip: "Compound nouns: purpose + action = noun (painkiller, dishwasher)",
          tense: "compound words",
          type: "word-formation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Form compound: 'She works in a ___ during summer.' (SUN + FLOWER) field",
          options: ["sunflower", "sun-flower", "flowersun", "sunsflower"],
          correct: 0,
          explanation:
            "SUN + FLOWER → sunflower. Yellow flower that follows the sun.",
          tip: "Nature compounds: sunflower, rainbow, snowflake (first word describes)",
          tense: "compound words",
          type: "word-formation" as TypeExcercise,
        },
      ],
    },
  },
};

export function getWordFormationBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    WORD_FORMATION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof WORD_FORMATION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default WORD_FORMATION_BACKUPS;

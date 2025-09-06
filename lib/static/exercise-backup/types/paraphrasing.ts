// Paraphrasing Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const PARAPHRASING_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Rewrite this sentence with the same meaning: 'She works in a hospital.'",
          options: [
            "She is employed at a hospital.",
            "She works at a hospital.",
            "She has a job in a hospital.",
            "She goes to a hospital for work.",
          ],
          correct: 2,
          explanation:
            "Alternative way to express employment using 'has a job' instead of 'works'.",
          tip: "Different ways to express the same idea: work = be employed = have a job",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
        {
          id: 2,
          question: "Paraphrase: 'He doesn't like coffee.'",
          options: [
            "He hates coffee.",
            "He dislikes coffee.",
            "He never drinks coffee.",
            "He prefers tea to coffee.",
          ],
          correct: 1,
          explanation:
            "'Dislikes' is the most direct paraphrase of 'doesn't like'.",
          tip: "doesn't like = dislikes (negative preference)",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
        {
          id: 3,
          question: "Rewrite: 'They go to school every day.'",
          options: [
            "They attend school daily.",
            "They study every day.",
            "They walk to school daily.",
            "They visit school often.",
          ],
          correct: 0,
          explanation:
            "'Attend school daily' means the same as 'go to school every day'.",
          tip: "go to school = attend school, every day = daily",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
      IELTS: [
        {
          id: 1,
          question:
            "Paraphrase this academic sentence: 'Research shows that students perform better with regular study habits.'",
          options: [
            "Studies indicate that learners achieve superior results through consistent academic routines.",
            "Research proves students are better with study habits.",
            "Studies show good students study regularly.",
            "Research indicates student performance improves with routine.",
          ],
          correct: 0,
          explanation:
            "Academic paraphrasing requires synonyms: research→studies, shows→indicates, students→learners, perform better→achieve superior results, regular→consistent.",
          tip: "Academic paraphrasing: use sophisticated synonyms and complex sentence structures",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
      TOEIC: [
        {
          id: 1,
          question:
            "Paraphrase this business sentence: 'The company provides excellent customer service.'",
          options: [
            "The organization delivers outstanding client support.",
            "The business gives good customer service.",
            "The company helps customers well.",
            "The firm offers great service to clients.",
          ],
          correct: 0,
          explanation:
            "Business paraphrasing: company→organization, provides→delivers, excellent→outstanding, customer service→client support.",
          tip: "Business context: use formal synonyms like organization, delivers, outstanding, client support",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question: "Paraphrase: 'She usually has breakfast at 7 AM.'",
          options: [
            "She typically eats breakfast at 7 in the morning.",
            "She always has breakfast early.",
            "She sometimes eats at 7 AM.",
            "She likes breakfast at 7 AM.",
          ],
          correct: 0,
          explanation:
            "'Typically eats' and 'in the morning' are good paraphrases for 'usually has' and 'at 7 AM'.",
          tip: "usually = typically, has breakfast = eats breakfast, AM = in the morning",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
    B1: {
      default: [
        {
          id: 1,
          question: "Paraphrase: 'He finds math difficult to understand.'",
          options: [
            "He has trouble comprehending mathematics.",
            "He thinks math is hard.",
            "He doesn't like math problems.",
            "He struggles with mathematical concepts.",
          ],
          correct: 3,
          explanation:
            "'Struggles with mathematical concepts' best captures the meaning of finding something difficult to understand.",
          tip: "finds difficult = struggles with, math = mathematical, understand = comprehend",
          tense: "present simple",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Paraphrase: 'I went to the store yesterday.'",
          options: [
            "I visited the shop the day before.",
            "I traveled to the store yesterday.",
            "I was at the store yesterday.",
            "I walked to the shop yesterday.",
          ],
          correct: 0,
          explanation:
            "'Visited the shop the day before' paraphrases 'went to the store yesterday'.",
          tip: "went = visited, store = shop, yesterday = the day before",
          tense: "past simple",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question: "Paraphrase: 'She has lived in London for five years.'",
          options: [
            "She has been a London resident for five years.",
            "She moved to London five years ago.",
            "She is living in London for five years.",
            "She lived in London five years ago.",
          ],
          correct: 0,
          explanation:
            "'Has been a London resident' maintains the present perfect meaning of continued residence.",
          tip: "has lived = has been a resident, maintains the connection to present time",
          tense: "present perfect",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question: "Paraphrase: 'You should study more.'",
          options: [
            "You ought to study more.",
            "You must study more.",
            "You need to study more.",
            "You have to study more.",
          ],
          correct: 0,
          explanation:
            "'Ought to' is the closest paraphrase for 'should' - both give advice.",
          tip: "should = ought to (advice), must/have to = stronger obligation",
          tense: "modals",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
  },

  conditionals: {
    B1: {
      default: [
        {
          id: 1,
          question: "Paraphrase: 'If it rains, we will stay home.'",
          options: [
            "We will stay home provided that it rains.",
            "We will remain indoors should it rain.",
            "In case of rain, we will stay inside.",
            "We won't go out if it's raining.",
          ],
          correct: 1,
          explanation:
            "'Should it rain' is a formal way to paraphrase 'if it rains', and 'remain indoors' paraphrases 'stay home'.",
          tip: "if = should (formal), stay home = remain indoors",
          tense: "conditionals",
          type: "paraphrasing" as TypeExcercise,
        },
      ],
    },
  },
};

export function getParaphrasingBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    PARAPHRASING_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof PARAPHRASING_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default PARAPHRASING_BACKUPS;

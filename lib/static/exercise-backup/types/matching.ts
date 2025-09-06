// Matching Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const MATCHING_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Match the subjects with the correct verb forms:",
          options: [
            "Column A: I, You, He, She, We, They",
            "Column B: work, works, work, works, work, work",
            "Matches: I-work, You-work, He-works, She-works, We-work, They-work",
            "Alternative matches (incorrect)",
          ],
          correct: 2,
          explanation:
            "Present simple: I/you/we/they use base form, he/she/it uses -s form",
          tip: "Third person singular (he/she/it) takes -s, others take base form",
          tense: "present simple",
          type: "matching" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Match the time expressions with appropriate present simple sentences:",
          options: [
            "Time expressions: every day, usually, always, sometimes",
            "Sentences: She goes to work, He plays tennis, They eat breakfast, We watch TV",
            "Correct matches: every day-She goes to work, usually-He plays tennis, always-They eat breakfast, sometimes-We watch TV",
            "Random incorrect matches",
          ],
          correct: 2,
          explanation:
            "Time expressions indicate habitual actions in present simple",
          tip: "Present simple + frequency adverbs = habitual actions",
          tense: "present simple",
          type: "matching" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question:
            "Match the question words with appropriate present simple questions:",
          options: [
            "Question words: What, Where, When, How often",
            "Questions: do you work?, does she live?, do they exercise?, does he study?",
            "Matches: What-do you work?, Where-does she live?, How often-do they exercise?, When-does he study?",
            "Incorrect question-answer combinations",
          ],
          correct: 2,
          explanation:
            "Question words match with logical present simple questions",
          tip: "Match question words with their appropriate contexts",
          tense: "present simple",
          type: "matching" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question: "Match the base verbs with their past simple forms:",
          options: [
            "Base verbs: go, eat, play, study, take",
            "Past forms: went, ate, played, studied, took",
            "Correct matches: go-went, eat-ate, play-played, study-studied, take-took",
            "Incorrect verb-form pairs",
          ],
          correct: 2,
          explanation: "Mix of regular (-ed) and irregular past forms",
          tip: "Learn regular patterns and memorize irregular verbs",
          tense: "past simple",
          type: "matching" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Match the sentences with appropriate past time expressions:",
          options: [
            "Sentences: I visited Paris, She finished homework, They watched a movie",
            "Time expressions: last year, yesterday evening, two hours ago",
            "Matches: I visited Paris-last year, She finished homework-yesterday evening, They watched a movie-two hours ago",
            "Wrong time-sentence combinations",
          ],
          correct: 2,
          explanation: "Past simple sentences match with past time markers",
          tip: "Past simple always needs past time context",
          tense: "past simple",
          type: "matching" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question: "Match the base verbs with their past participles:",
          options: [
            "Base verbs: write, break, choose, finish, make",
            "Past participles: written, broken, chosen, finished, made",
            "Correct matches: write-written, break-broken, choose-chosen, finish-finished, make-made",
            "Incorrect participle forms",
          ],
          correct: 2,
          explanation:
            "Present perfect uses past participles: have/has + past participle",
          tip: "Learn past participle forms - regular (base + -ed) and irregular",
          tense: "present perfect",
          type: "matching" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question: "Match the modals with their meanings:",
          options: [
            "Modals: can, must, should, might, will",
            "Meanings: ability, obligation, advice, possibility, future",
            "Matches: can-ability, must-obligation, should-advice, might-possibility, will-future",
            "Incorrect modal-meaning pairs",
          ],
          correct: 2,
          explanation: "Each modal has specific meanings and uses",
          tip: "Learn modal meanings: can=ability, must=obligation, should=advice",
          tense: "modals",
          type: "matching" as TypeExcercise,
        },
        {
          id: 2,
          question: "Match the modal sentences with their functions:",
          options: [
            "Sentences: You can speak English, You must wear seatbelt, You should rest more, It might rain",
            "Functions: expressing ability, showing obligation, giving advice, expressing possibility",
            "Matches: You can speak-ability, You must wear-obligation, You should rest-advice, It might rain-possibility",
            "Wrong sentence-function pairs",
          ],
          correct: 2,
          explanation:
            "Modal sentences express different functions based on context",
          tip: "Context determines modal function",
          tense: "modals",
          type: "matching" as TypeExcercise,
        },
      ],
    },
  },

  prepositions: {
    A1: {
      default: [
        {
          id: 1,
          question: "Match the prepositions with their time expressions:",
          options: [
            "Prepositions: in, on, at",
            "Time expressions: morning/2023/summer, Monday/weekend/Christmas, 9 o'clock/night/noon",
            "Matches: in-morning/2023/summer, on-Monday/weekend/Christmas, at-9 o'clock/night/noon",
            "Incorrect preposition-time combinations",
          ],
          correct: 2,
          explanation:
            "Time prepositions: in (months/years/parts of day), on (days/dates), at (times/night)",
          tip: "IN = longer periods, ON = specific days, AT = specific times",
          tense: "prepositions",
          type: "matching" as TypeExcercise,
        },
        {
          id: 2,
          question: "Match the prepositions with place expressions:",
          options: [
            "Prepositions: in, on, at",
            "Place expressions: the city/room/box, the table/wall/floor, school/home/work",
            "Matches: in-the city/room/box, on-the table/wall/floor, at-school/home/work",
            "Wrong preposition-place pairs",
          ],
          correct: 2,
          explanation:
            "Place prepositions: in (enclosed spaces), on (surfaces), at (points/locations)",
          tip: "IN = inside something, ON = surface, AT = specific locations",
          tense: "prepositions",
          type: "matching" as TypeExcercise,
        },
      ],
    },
  },

  articles: {
    A1: {
      default: [
        {
          id: 1,
          question: "Match the articles with appropriate nouns:",
          options: [
            "Articles: a, an, the",
            "Nouns: apple/elephant/hour, book/car/student, sun/moon/president",
            "Matches: an-apple/elephant/hour, a-book/car/student, the-sun/moon/president",
            "Incorrect article-noun combinations",
          ],
          correct: 2,
          explanation:
            "Articles: 'an' before vowel sounds, 'a' before consonant sounds, 'the' for specific/unique items",
          tip: "A/AN = indefinite, THE = definite/specific",
          tense: "articles",
          type: "matching" as TypeExcercise,
        },
      ],
    },
  },
};

export function getMatchingBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 3
): Question[] {
  const topicData =
    MATCHING_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof MATCHING_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default MATCHING_BACKUPS;

// Multi-Topic Integration Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const MULTI_TOPIC_INTEGRATION_BACKUPS = {
  "mixed tenses": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Complete the text using appropriate tenses (present simple, past simple, present perfect):\n\nSarah ___ (work) as a nurse for five years. She ___ (start) her career in 2018 when she ___ (graduate) from university. Every day, she ___ (help) many patients and ___ (enjoy) her job very much. Last week, she ___ (receive) an award for her excellent work. She ___ (never/be) so happy in her professional life.",
          options: [
            "has worked, started, graduated, helps, enjoys, received, has never been",
            "works, started, graduated, helps, enjoys, received, was never",
            "worked, starts, graduates, helped, enjoyed, receives, never was",
            "is working, starts, graduates, is helping, is enjoying, receives, is never",
          ],
          correct: 0,
          explanation:
            "Mixed tenses: present perfect (duration), past simple (specific past), present simple (habits), present perfect (experience).",
          tip: "Choose tense based on time reference: for 5 years (present perfect), in 2018 (past), every day (present simple), never (present perfect).",
          tense: "mixed tenses",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: ["present perfect", "past simple", "present simple"],
          topicWeights: {
            "present perfect": 0.4,
            "past simple": 0.3,
            "present simple": 0.3,
          },
        },
        {
          id: 2,
          question:
            "Complete using present simple, present continuous, and future simple:\n\nTom usually ___ (take) the bus to work, but today he ___ (drive) his car because it ___ (rain). Tomorrow, he ___ (fly) to London for a business meeting. He ___ (not/like) flying, but he ___ (think) this trip ___ (be) very important for his career.",
          options: [
            "takes, is driving, is raining, will fly, doesn't like, thinks, will be",
            "takes, drives, rains, flies, doesn't like, thinks, is",
            "is taking, drives, rains, will fly, not likes, thinks, will be",
            "takes, is driving, rains, flies, doesn't like, is thinking, is",
          ],
          correct: 0,
          explanation:
            "Present simple (habits), present continuous (temporary actions), future simple (plans), present simple (opinions/states).",
          tip: "Usually = present simple, today = present continuous, tomorrow = future, opinions = present simple.",
          tense: "mixed tenses",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: [
            "present simple",
            "present continuous",
            "future simple",
          ],
          topicWeights: {
            "present simple": 0.4,
            "present continuous": 0.3,
            "future simple": 0.3,
          },
        },
      ],
      IELTS: [
        {
          id: 1,
          question:
            "Academic writing - Complete with appropriate tenses and passive voice:\n\nThe research ___ (conduct) over a period of two years and ___ (publish) last month. The results ___ (show) that students who ___ (receive) additional support ___ (perform) significantly better. Currently, similar studies ___ (carry out) in other universities. It ___ (expect) that the findings ___ (confirm) by future research.",
          options: [
            "was conducted, was published, show, received, performed, are being carried out, is expected, will be confirmed",
            "conducted, published, showed, received, performed, carry out, expects, confirm",
            "has been conducted, has been published, have shown, have received, have performed, are carrying out, expects, will confirm",
            "is conducted, is published, are showing, are receiving, are performing, carry out, is expecting, confirms",
          ],
          correct: 0,
          explanation:
            "Academic writing: passive voice (was conducted, was published), present simple (show facts), past simple (completed actions), present continuous passive (are being carried out), future passive (will be confirmed).",
          tip: "Academic writing uses passive voice for research processes and mixed tenses for different time references.",
          tense: "mixed tenses",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: [
            "passive voice",
            "past simple",
            "present simple",
            "present continuous",
            "future simple",
          ],
          topicWeights: {
            "passive voice": 0.4,
            "past simple": 0.2,
            "present simple": 0.2,
            "present continuous": 0.1,
            "future simple": 0.1,
          },
        },
      ],
    },
    B2: {
      default: [
        {
          id: 1,
          question:
            "Complete with mixed tenses, conditionals, and modals:\n\nIf climate change ___ (continue) at the current rate, sea levels ___ (rise) dramatically. Scientists ___ (warn) about this for decades, but governments ___ (not/take) sufficient action yet. We ___ (should/act) now, otherwise future generations ___ (face) serious consequences. Some countries ___ (already/implement) green policies, which ___ (prove) that change ___ (be) possible.",
          options: [
            "continues, will rise, have been warning, have not taken, should act, will face, have already implemented, proves, is",
            "continued, would rise, warned, did not take, should have acted, faced, already implemented, proved, was",
            "will continue, rise, are warning, don't take, should act, face, are already implementing, is proving, will be",
            "continues, rise, warn, are not taking, should act, will face, already implement, prove, is",
          ],
          correct: 0,
          explanation:
            "Complex grammar integration: first conditional (if...continues, will rise), present perfect (have been warning, have not taken), modals (should act), future (will face), present perfect (have implemented), present simple (proves, is).",
          tip: "Complex texts need careful tense selection: conditionals for predictions, present perfect for ongoing situations, modals for advice.",
          tense: "mixed tenses",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: [
            "conditionals",
            "present perfect",
            "modals",
            "future simple",
            "present simple",
          ],
          topicWeights: {
            conditionals: 0.3,
            "present perfect": 0.25,
            modals: 0.2,
            "future simple": 0.15,
            "present simple": 0.1,
          },
        },
      ],
    },
  },

  "articles and prepositions": {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Complete with correct articles (a, an, the) and prepositions (in, on, at, for, to):\n\n___ young woman works ___ ___ hospital ___ downtown area. She goes ___ work ___ 8 AM every morning. She takes ___ bus ___ work because her car is ___ ___ repair shop. ___ bus stop is right ___ front ___ her apartment building.",
          options: [
            "A, in, a, in, the, to, at, the, to, at, the, The, in, of",
            "The, at, a, in, the, to, on, a, to, in, a, A, in, of",
            "A, at, the, at, the, for, at, a, for, in, the, The, on, in",
            "The, in, the, of, the, at, at, the, for, at, a, A, at, to",
          ],
          correct: 0,
          explanation:
            "Articles: a (first mention), the (specific/mentioned before). Prepositions: in a hospital (location), at 8 AM (time), to work (direction), at the repair shop (specific place), in front of (position).",
          tip: "A/an for first mention, the for specific items. Time prepositions: at (specific times), in (general locations), to (direction).",
          tense: "articles and prepositions",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: ["articles", "prepositions"],
          topicWeights: { articles: 0.5, prepositions: 0.5 },
        },
      ],
    },
  },

  "present perfect and past simple": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Choose present perfect or past simple:\n\nJohn ___ (live) in Paris since 2019. He ___ (move) there after he ___ (finish) university. He ___ (never/regret) his decision. Last year, he ___ (meet) his girlfriend at a café. They ___ (be) together for eight months now. Yesterday, they ___ (decide) to get married next summer.",
          options: [
            "has lived, moved, finished, has never regretted, met, have been, decided",
            "lived, moved, finished, never regretted, met, are, decided",
            "has lived, has moved, has finished, never regretted, has met, have been, have decided",
            "lives, moved, finished, never regrets, met, are, decided",
          ],
          correct: 0,
          explanation:
            "Present perfect for duration (since 2019, never regretted, for eight months), past simple for specific completed actions (moved, finished, met, decided).",
          tip: "Since/for = present perfect. Specific past times (last year, yesterday) = past simple. Life experiences without time = present perfect.",
          tense: "present perfect vs past simple",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: ["present perfect", "past simple"],
          topicWeights: { "present perfect": 0.6, "past simple": 0.4 },
        },
      ],
      TOEIC: [
        {
          id: 1,
          question:
            "Business context - Present perfect vs past simple:\n\nOur company ___ (expand) significantly over the last five years. We ___ (open) three new offices in 2022 and ___ (hire) over 200 employees since then. Last quarter, we ___ (achieve) record profits. The CEO ___ (announce) these results at yesterday's meeting. We ___ (never/have) such success before.",
          options: [
            "has expanded, opened, have hired, achieved, announced, have never had",
            "expanded, opened, hired, achieved, announced, never had",
            "has expanded, has opened, hired, has achieved, has announced, never had",
            "expands, opened, hire, achieved, announced, never have",
          ],
          correct: 0,
          explanation:
            "Business timeline: present perfect for ongoing results (has expanded, have hired, have never had), past simple for specific completed events (opened in 2022, achieved last quarter, announced yesterday).",
          tip: "Business reporting: ongoing achievements = present perfect, specific dates/periods = past simple.",
          tense: "present perfect vs past simple",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: ["present perfect", "past simple"],
          topicWeights: { "present perfect": 0.6, "past simple": 0.4 },
        },
      ],
    },
  },

  "modals and conditionals": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Complete with appropriate modals and conditionals:\n\nIf you ___ (want) to improve your English, you ___ study every day. You ___ also practice speaking with native speakers. If you ___ enough time, you ___ join a conversation club. However, you ___ worry too much about making mistakes. Everyone ___ make errors when learning a language.",
          options: [
            "want, should, should, have, could, shouldn't, can",
            "will want, must, must, will have, must, mustn't, must",
            "want, must, can, had, would, don't have to, will",
            "wanted, would, would, had, could, wouldn't, could",
          ],
          correct: 0,
          explanation:
            "First conditional (if you want), advice modals (should study, should practice), conditional possibility (if you have time, you could join), advice (shouldn't worry), general ability (can make).",
          tip: "Advice: should/shouldn't. Possibility: could/might. Ability: can. First conditional: if + present, modal + base verb.",
          tense: "modals and conditionals",
          type: "multi-topic-integration" as TypeExcercise,
          grammarTopics: ["modals", "conditionals"],
          topicWeights: { modals: 0.7, conditionals: 0.3 },
        },
      ],
    },
  },
};

export function getMultiTopicIntegrationBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 3
): Question[] {
  const topicData =
    MULTI_TOPIC_INTEGRATION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof MULTI_TOPIC_INTEGRATION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default MULTI_TOPIC_INTEGRATION_BACKUPS;

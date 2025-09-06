// Cloze Test Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const CLOZE_TEST_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Complete the text with the correct words:\n\nMy Daily Routine\n\nI ____1____ (wake) up at 7:00 AM every morning. After I get up, I ____2____ (brush) my teeth and ____3____ (have) breakfast. My sister ____4____ (not like) breakfast, but I think it ____5____ (be) very important.\n\nI ____6____ (go) to work by bus. The bus ____7____ (come) at 8:30 AM. I ____8____ (work) in an office downtown. My colleagues ____9____ (be) very friendly and we ____10____ (help) each other.",
          options: [
            "1.wake 2.brush 3.have 4.doesn't like 5.is 6.go 7.comes 8.work 9.are 10.help",
            "1.wakes 2.brushes 3.has 4.don't like 5.are 6.goes 7.come 8.works 9.is 10.helps",
            "1.waking 2.brushing 3.having 4.not likes 5.being 6.going 7.coming 8.working 9.being 10.helping",
            "Mixed incorrect forms",
          ],
          correct: 0,
          explanation:
            "Present simple forms: I/you/we/they + base verb, he/she/it + verb-s, negative with don't/doesn't",
          tip: "Watch subject-verb agreement in present simple",
          tense: "present simple",
          type: "cloze-test" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Complete the text with the correct words:\n\nWeekend Activities\n\nOn weekends, my family and I ____1____ (do) many different activities. My father ____2____ (read) newspapers and ____3____ (watch) TV. My mother ____4____ (cook) special meals and ____5____ (clean) the house.\n\nMy brother and I ____6____ (play) video games or ____7____ (go) to the park. Sometimes we ____8____ (visit) our grandparents. They ____9____ (live) in a small town and ____10____ (grow) vegetables in their garden.",
          options: [
            "1.do 2.reads 3.watches 4.cooks 5.cleans 6.play 7.go 8.visit 9.live 10.grow",
            "1.does 2.read 3.watch 4.cook 5.clean 6.plays 7.goes 8.visits 9.lives 10.grows",
            "1.doing 2.reading 3.watching 4.cooking 5.cleaning 6.playing 7.going 8.visiting 9.living 10.growing",
            "All base forms regardless of subject",
          ],
          correct: 0,
          explanation:
            "Present simple: Third person singular (father, mother) takes -s, plurals (we, they) use base form",
          tip: "He/she/it adds -s, I/you/we/they use base form",
          tense: "present simple",
          type: "cloze-test" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question:
            "Complete the text with the correct words:\n\nJobhunting\n\nSarah ____1____ (look) for a new job these days. She ____2____ (not want) to work in her current company anymore because she ____3____ (not feel) happy there. Every day, she ____4____ (check) job websites and ____5____ (send) her resume to different companies.\n\nHer friends ____6____ (give) her advice and ____7____ (help) her prepare for interviews. Sarah ____8____ (hope) to find something soon. She ____9____ (believe) that patience ____10____ (be) important in job searching.",
          options: [
            "1.looks 2.doesn't want 3.doesn't feel 4.checks 5.sends 6.give 7.help 8.hopes 9.believes 10.is",
            "1.look 2.don't want 3.don't feel 4.check 5.send 6.gives 7.helps 8.hope 9.believe 10.are",
            "1.is looking 2.isn't wanting 3.isn't feeling 4.is checking 5.is sending 6.are giving 7.are helping 8.is hoping 9.is believing 10.is being",
            "Mixed tenses incorrectly",
          ],
          correct: 0,
          explanation:
            "Present simple for facts, habits, and general truths with correct subject-verb agreement",
          tip: "Present simple shows habits, general truths, and permanent situations",
          tense: "present simple",
          type: "cloze-test" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Complete the story with the correct past simple forms:\n\nA Great Vacation\n\nLast summer, I ____1____ (go) on vacation to Spain with my family. We ____2____ (fly) from London and ____3____ (arrive) in Madrid in the evening. The weather ____4____ (be) perfect - sunny and warm.\n\nWe ____5____ (stay) in a beautiful hotel near the city center. Every day, we ____6____ (visit) different places. I ____7____ (take) many photos and ____8____ (buy) souvenirs for my friends. My parents ____9____ (enjoy) the local food and we all ____10____ (have) a wonderful time.",
          options: [
            "1.went 2.flew 3.arrived 4.was 5.stayed 6.visited 7.took 8.bought 9.enjoyed 10.had",
            "1.go 2.fly 3.arrive 4.is 5.stay 6.visit 7.take 8.buy 9.enjoy 10.have",
            "1.goed 2.flyed 3.arriven 4.were 5.staid 6.visiten 7.taked 8.buyed 9.enjoied 10.haved",
            "1.going 2.flying 3.arriving 4.being 5.staying 6.visiting 7.taking 8.buying 9.enjoying 10.having",
          ],
          correct: 0,
          explanation:
            "Past simple forms: regular verbs add -ed, irregular verbs have special forms (go-went, fly-flew, etc.)",
          tip: "Learn irregular past forms: go-went, take-took, buy-bought, have-had",
          tense: "past simple",
          type: "cloze-test" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Complete the text with present perfect forms:\n\nLife Changes\n\nIn the last five years, my life ____1____ (change) completely. I ____2____ (move) to a new city, ____3____ (start) a new job, and ____4____ (make) many new friends.\n\nI ____5____ (never/live) in such a big city before, but I ____6____ (already/get) used to the busy lifestyle. My career ____7____ (improve) significantly and I ____8____ (receive) two promotions.\n\nHowever, I ____9____ (not/forget) my old friends and I ____10____ (keep) in touch with them regularly.",
          options: [
            "1.has changed 2.have moved 3.have started 4.have made 5.have never lived 6.have already gotten 7.has improved 8.have received 9.have not forgotten 10.have kept",
            "1.changed 2.moved 3.started 4.made 5.never lived 6.already got 7.improved 8.received 9.didn't forget 10.kept",
            "1.is changing 2.am moving 3.am starting 4.am making 5.never living 6.already getting 7.is improving 8.am receiving 9.am not forgetting 10.am keeping",
            "Mixed incorrect forms",
          ],
          correct: 0,
          explanation:
            "Present perfect: have/has + past participle, shows connection between past and present",
          tip: "Present perfect connects past actions to present situation",
          tense: "present perfect",
          type: "cloze-test" as TypeExcercise,
        },
      ],
    },
  },

  modals: {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Complete the text with the correct modals:\n\nSchool Rules and Advice\n\nAt our school, students ____1____ (must/can) wear uniforms every day. You ____2____ (should/might) arrive on time for all classes. Students ____3____ (can/must) use the library during break times, but they ____4____ (cannot/must not) eat or drink inside.\n\nIf you want to improve your grades, you ____5____ (should/can) study more and ____6____ (might/must) ask teachers for help. You ____7____ (will/could) also join study groups. \n\nStudents ____8____ (may/must) leave school early only with permission. If you're sick, you ____9____ (should/can) go to the nurse's office. Remember, you ____10____ (will/should) always respect your teachers and classmates.",
          options: [
            "1.must 2.should 3.can 4.cannot 5.should 6.could 7.could 8.may 9.should 10.should",
            "1.can 2.might 3.must 4.must not 5.can 6.must 7.will 8.must 9.can 10.will",
            "All must",
            "All can",
          ],
          correct: 0,
          explanation:
            "Different modals express different meanings: must=obligation, should=advice, can=ability/permission, may=formal permission",
          tip: "Choose modals based on meaning: obligation, advice, ability, or permission",
          tense: "modals",
          type: "cloze-test" as TypeExcercise,
        },
      ],
    },
  },

  "mixed tenses": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Complete the text with the correct tenses:\n\nA Busy Week\n\nThis week ____1____ (be) very busy for me. On Monday, I ____2____ (have) three important meetings. Yesterday, I ____3____ (work) until 9 PM because I ____4____ (need) to finish a report.\n\nI ____5____ (already/complete) most of my tasks for this week, but I ____6____ (still/have) a presentation to prepare. Tomorrow, I ____7____ (meet) with clients from Japan.\n\nI ____8____ (never/be) so busy before, but I ____9____ (enjoy) the challenge. Next week ____10____ (be) quieter, so I ____11____ (plan) to take a short vacation.",
          options: [
            "1.has been 2.had 3.worked 4.needed 5.have already completed 6.still have 7.am meeting 8.have never been 9.enjoy 10.will be 11.am planning",
            "1.is 2.have 3.work 4.need 5.already complete 6.still having 7.meet 8.never am 9.enjoying 10.is 11.plan",
            "All present simple",
            "All past simple",
          ],
          correct: 0,
          explanation:
            "Mixed tenses: present perfect (this week), past simple (specific past times), present simple (facts), future arrangements",
          tip: "Use appropriate tenses based on time markers and context",
          tense: "mixed tenses",
          type: "cloze-test" as TypeExcercise,
        },
      ],
    },
  },
};

export function getClozeTestBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 3
): Question[] {
  const topicData =
    CLOZE_TEST_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof CLOZE_TEST_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default CLOZE_TEST_BACKUPS;

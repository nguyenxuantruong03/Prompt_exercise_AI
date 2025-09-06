// Dialogue Completion Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const DIALOGUE_COMPLETION_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Complete the dialogue:\nA: What ___ you do for work?\nB: I ___ as a teacher. What about you?\nA: I ___ in a hospital.",
          options: [
            "do, work, work",
            "are, work, work",
            "do, am, work",
            "are, am, am",
          ],
          correct: 0,
          explanation:
            "Present simple questions use 'do' and statements use base verb form for 'I'.",
          tip: "Questions: What do you do? Answers: I work as..., I work in...",
          tense: "present simple",
          type: "dialogue-completion" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Complete the dialogue:\nA: ___ she like her job?\nB: Yes, she ___ it very much.\nA: That's good! She ___ very happy.",
          options: [
            "Does, likes, looks",
            "Do, likes, looks",
            "Does, like, looks",
            "Is, likes, is",
          ],
          correct: 0,
          explanation:
            "Does for third person questions, likes for third person statements, looks (appears) for observation.",
          tip: "Does she like...? Yes, she likes... She looks happy (appearance).",
          tense: "present simple",
          type: "dialogue-completion" as TypeExcercise,
        },
        {
          id: 3,
          question:
            "Complete the conversation:\nA: Where ___ you live?\nB: I ___ in Tokyo. How about you?\nA: I ___ near the city center.",
          options: [
            "do, live, live",
            "are, live, live",
            "do, am, live",
            "are, am, am",
          ],
          correct: 0,
          explanation:
            "Where do you live? I live in... (present simple for permanent situations).",
          tip: "Location questions: Where do you live/work/study? I live/work/study in...",
          tense: "present simple",
          type: "dialogue-completion" as TypeExcercise,
        },
      ],
      TOEIC: [
        {
          id: 1,
          question:
            "Business dialogue completion:\nA: What time ___ the meeting start?\nB: It ___ at 9 AM. ___ you need the agenda?\nA: Yes, please. I ___ to prepare.",
          options: [
            "does, starts, Do, need",
            "do, starts, Does, need",
            "does, start, Do, need",
            "is, starting, Are, needing",
          ],
          correct: 0,
          explanation:
            "Business context: Does the meeting start? It starts at... Do you need? I need to...",
          tip: "Business present simple: schedules, routines, needs (Does it start? It starts. Do you need? I need.)",
          tense: "present simple",
          type: "dialogue-completion" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question:
            "Complete the dialogue about daily routines:\nA: What time ___ you usually get up?\nB: I usually ___ up at 7 AM. What about you?\nA: I ___ an early riser. I get up at 6.",
          options: [
            "do, get, am",
            "are, get, am",
            "do, wake, am",
            "are, wake, is",
          ],
          correct: 0,
          explanation:
            "Routine questions with 'do', routine answers with base verb, 'am' for permanent characteristic.",
          tip: "Daily routines: What time do you...? I usually... I am/am not an early riser.",
          tense: "present simple",
          type: "dialogue-completion" as TypeExcercise,
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
            "Complete the dialogue about yesterday:\nA: What ___ you do yesterday?\nB: I ___ to the cinema. ___ you have a good day?\nA: Yes, I ___ a wonderful time!",
          options: [
            "did, went, Did, had",
            "do, went, Do, had",
            "did, go, Did, have",
            "were, went, Were, had",
          ],
          correct: 0,
          explanation:
            "Past simple questions use 'did', past answers use past forms (went, had).",
          tip: "Past questions: What did you do? Did you...? Past answers: I went, I had...",
          tense: "past simple",
          type: "dialogue-completion" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Complete the conversation:\nA: ___ was your weekend?\nB: It ___ great! I ___ my friends.\nA: That sounds nice. Where ___ you meet?",
          options: [
            "How, was, visited, did",
            "What, was, visited, did",
            "How, is, visit, do",
            "What, is, visited, were",
          ],
          correct: 0,
          explanation: "How was...? It was... I visited... Where did you meet?",
          tip: "Past experiences: How was...? It was... I visited/met/saw... Where/When did you...?",
          tense: "past simple",
          type: "dialogue-completion" as TypeExcercise,
        },
      ],
    },
  },

  "present continuous": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Complete the dialogue about current actions:\nA: What ___ you doing right now?\nB: I ___ TV. What about you?\nA: I ___ dinner.",
          options: [
            "are, am watching, am cooking",
            "do, watch, cook",
            "are, watch, cook",
            "is, am watching, am cooking",
          ],
          correct: 0,
          explanation:
            "Present continuous for current actions: are you doing, I am watching, I am cooking.",
          tip: "Current actions: What are you doing? I am verb-ing...",
          tense: "present continuous",
          type: "dialogue-completion" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Phone conversation:\nA: Hi! What ___ you doing?\nB: I ___ for the bus. It ___ raining here.\nA: Oh no! ___ you have an umbrella?",
          options: [
            "are, am waiting, is, Do",
            "do, wait, rains, Are",
            "are, wait, is raining, Are",
            "do, am waiting, rains, Do",
          ],
          correct: 0,
          explanation:
            "Present continuous for temporary actions and weather: are you doing, am waiting, is raining. Do for possession.",
          tip: "Temporary situations: I am waiting, it is raining. Possession: Do you have...?",
          tense: "present continuous",
          type: "dialogue-completion" as TypeExcercise,
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
            "Complete the advice dialogue:\nA: I have a headache. What ___ I do?\nB: You ___ take some medicine and rest.\nA: ___ I go to work tomorrow?\nB: You ___ stay home if you feel bad.",
          options: [
            "should, should, Should, should",
            "can, can, Can, can",
            "must, must, Must, must",
            "will, will, Will, will",
          ],
          correct: 0,
          explanation:
            "Should for advice: What should I do? You should... Should I...? You should...",
          tip: "Advice with should: What should I do? You should... Should I...? (asking for advice)",
          tense: "modals",
          type: "dialogue-completion" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Permission dialogue:\nA: ___ I borrow your pen?\nB: Of course! You ___ use it.\nA: Thanks! ___ I return it later?\nB: You ___ keep it. I have another one.",
          options: [
            "Can, can, Should, can",
            "Should, should, Can, should",
            "Must, must, Must, must",
            "Will, will, Will, will",
          ],
          correct: 0,
          explanation:
            "Can for permission and ability: Can I...? You can... Should for polite suggestions.",
          tip: "Permission: Can I...? You can... Polite offers: You can keep it.",
          tense: "modals",
          type: "dialogue-completion" as TypeExcercise,
        },
      ],
      TOEIC: [
        {
          id: 1,
          question:
            "Business modal dialogue:\nA: ___ you help me with this report?\nB: I ___ help you after the meeting.\nA: When ___ we meet?\nB: We ___ meet at 3 PM if that works for you.",
          options: [
            "Could, can, should, could",
            "Can, can, should, can",
            "Will, will, will, will",
            "Must, must, must, must",
          ],
          correct: 0,
          explanation:
            "Business modals: Could (polite request), can (ability), should (suggestion), could (conditional possibility).",
          tip: "Business politeness: Could you...? (request), I can... (ability), We could... (suggestion)",
          tense: "modals",
          type: "dialogue-completion" as TypeExcercise,
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
            "Experience dialogue:\nA: ___ you ever been to Japan?\nB: Yes, I ___ there twice. What about you?\nA: No, I ___ never been there, but I ___ always wanted to visit.",
          options: [
            "Have, have been, have, have",
            "Did, went, never went, always wanted",
            "Are, was, was never, always want",
            "Do, go, never go, always want",
          ],
          correct: 0,
          explanation:
            "Present perfect for experience: Have you ever...? I have been... I have never... I have always...",
          tip: "Life experiences: Have you ever...? Yes, I have... No, I have never...",
          tense: "present perfect",
          type: "dialogue-completion" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Recent actions dialogue:\nA: ___ you finished your homework?\nB: Not yet. I ___ been working on it for two hours.\nA: ___ you need help?\nB: Thanks, but I ___ almost finished it.",
          options: [
            "Have, have, Do, have",
            "Did, was, Do, am",
            "Are, am, Are, am",
            "Do, am, Do, am",
          ],
          correct: 0,
          explanation:
            "Present perfect for completion and duration: Have you finished? I have been working... Do for offers. I have almost finished.",
          tip: "Completion: Have you finished? Duration: I have been working for... Almost done: I have almost finished.",
          tense: "present perfect",
          type: "dialogue-completion" as TypeExcercise,
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
            "First conditional dialogue:\nA: What ___ you do if it rains tomorrow?\nB: If it ___, I will stay home. What about you?\nA: I ___ go to the gym if the weather is bad.",
          options: [
            "will, rains, will",
            "do, will rain, will",
            "will, will rain, go",
            "do, rains, go",
          ],
          correct: 0,
          explanation:
            "First conditional: What will you do if...? If it rains, I will... I will... if...",
          tip: "First conditional: What will you do if...? If + present, will + base verb.",
          tense: "conditionals",
          type: "dialogue-completion" as TypeExcercise,
        },
      ],
    },
  },

  "future plans": {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Future plans dialogue:\nA: What ___ you doing this weekend?\nB: I ___ visiting my parents. How about you?\nA: I ___ sure yet. Maybe I ___ go shopping.",
          options: [
            "are, am, am not, will",
            "do, visit, don't, go",
            "will, will visit, won't, go",
            "are, visit, not, will",
          ],
          correct: 0,
          explanation:
            "Present continuous for definite plans: are you doing, I am visiting. Will for uncertain plans: I am not sure, maybe I will...",
          tip: "Definite plans: What are you doing? I am visiting... Uncertain: Maybe I will...",
          tense: "future plans",
          type: "dialogue-completion" as TypeExcercise,
        },
      ],
    },
  },
};

export function getDialogueCompletionBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 3
): Question[] {
  const topicData =
    DIALOGUE_COMPLETION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof DIALOGUE_COMPLETION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default DIALOGUE_COMPLETION_BACKUPS;

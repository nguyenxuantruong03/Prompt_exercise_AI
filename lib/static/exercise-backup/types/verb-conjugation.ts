// Verb Conjugation Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const VERB_CONJUGATION_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Conjugate the verb 'to be' for all subjects: I ___, You ___, He/She/It ___, We ___, They ___",
          options: [
            "am, are, is, are, are",
            "is, are, am, are, are",
            "am, is, are, are, are",
            "are, am, is, are, are",
          ],
          correct: 0,
          explanation:
            "Present tense of 'be': I am, you are, he/she/it is, we are, they are",
          tip: "Remember: I am, you/we/they are, he/she/it is",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Conjugate 'work' in present simple: I ___, You ___, He ___, We ___, They ___",
          options: [
            "work, work, works, work, work",
            "works, work, work, work, work",
            "work, works, works, works, work",
            "work, work, work, work, work",
          ],
          correct: 0,
          explanation:
            "Present simple: I/you/we/they + base form, he/she/it + verb+s",
          tip: "Third person singular (he/she/it) takes -s, others use base form",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 3,
          question:
            "Conjugate 'have' in present simple: I ___, You ___, She ___, We ___, They ___",
          options: [
            "have, have, has, have, have",
            "has, have, have, have, have",
            "have, has, has, have, have",
            "have, have, have, have, have",
          ],
          correct: 0,
          explanation:
            "Present simple 'have': I/you/we/they have, he/she/it has",
          tip: "Irregular verb: have/has (not haves)",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 4,
          question:
            "Conjugate 'go' in present simple: I ___, You ___, He ___, We ___, They ___",
          options: [
            "go, go, goes, go, go",
            "goes, go, go, go, go",
            "go, goes, goes, go, go",
            "go, go, go, go, go",
          ],
          correct: 0,
          explanation:
            "Present simple: base form + -es for third person singular ending in -o",
          tip: "Verbs ending in -o add -es for he/she/it: go→goes, do→does",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
        },
      ],
      TOEIC: [
        {
          id: 1,
          question:
            "Business context: Conjugate 'manage' - The CEO ___ the company, Employees ___ their tasks, You ___ your time well.",
          options: [
            "manages, manage, manage",
            "manage, manages, manages",
            "manages, manages, manage",
            "manage, manage, manages",
          ],
          correct: 0,
          explanation:
            "Business conjugation: CEO (third person singular) manages, employees (plural) manage, you manage",
          tip: "Business subjects: CEO/manager/director (singular) + verb-s, employees/staff (plural) + base verb",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question:
            "Conjugate 'study' in present simple: I ___, You ___, She ___, We ___, They ___",
          options: [
            "study, study, studies, study, study",
            "studies, study, study, study, study",
            "study, studies, studies, study, study",
            "study, study, study, study, study",
          ],
          correct: 0,
          explanation:
            "Verbs ending in consonant+y: change y to i and add -es for third person singular",
          tip: "Consonant + y → ies: study→studies, try→tries, carry→carries",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Conjugate 'play' in present simple: I ___, You ___, He ___, We ___, They ___",
          options: [
            "play, play, plays, play, play",
            "plays, play, play, play, play",
            "play, plays, plays, play, play",
            "play, play, play, play, play",
          ],
          correct: 0,
          explanation:
            "Verbs ending in vowel+y: just add -s for third person singular",
          tip: "Vowel + y → ys: play→plays, say→says, buy→buys",
          tense: "present simple",
          type: "verb-conjugation" as TypeExcercise,
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
            "Conjugate 'work' in past simple: I ___, You ___, He ___, We ___, They ___",
          options: [
            "worked, worked, worked, worked, worked",
            "work, worked, worked, work, work",
            "worked, work, worked, worked, worked",
            "works, works, works, works, works",
          ],
          correct: 0,
          explanation:
            "Past simple is the same for all subjects with regular verbs: base + -ed",
          tip: "Past simple: same form for all subjects (I/you/he/she/it/we/they worked)",
          tense: "past simple",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Conjugate irregular verb 'go' in past simple: I ___, You ___, She ___, We ___, They ___",
          options: [
            "went, went, went, went, went",
            "go, went, went, go, go",
            "went, go, went, went, went",
            "goed, goed, goed, goed, goed",
          ],
          correct: 0,
          explanation:
            "Irregular verb 'go' becomes 'went' in past simple for all subjects",
          tip: "Irregular verbs: same form for all subjects (go→went, see→saw, have→had)",
          tense: "past simple",
          type: "verb-conjugation" as TypeExcercise,
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
            "Conjugate 'work' in present continuous: I ___, You ___, He ___, We ___, They ___",
          options: [
            "am working, are working, is working, are working, are working",
            "is working, are working, am working, are working, are working",
            "am working, is working, are working, are working, are working",
            "working, working, working, working, working",
          ],
          correct: 0,
          explanation:
            "Present continuous: am/is/are + verb-ing. I am, you/we/they are, he/she/it is",
          tip: "Present continuous = be + verb-ing (I am, you/we/they are, he/she/it is)",
          tense: "present continuous",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Conjugate 'run' in present continuous: I ___, You ___, She ___, We ___, They ___",
          options: [
            "am running, are running, is running, are running, are running",
            "is running, are running, am running, are running, are running",
            "am running, is running, are running, are running, are running",
            "running, running, running, running, running",
          ],
          correct: 0,
          explanation: "Double the final consonant before -ing: run→running",
          tip: "Short vowel + consonant: double the consonant (run→running, stop→stopping)",
          tense: "present continuous",
          type: "verb-conjugation" as TypeExcercise,
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
            "Conjugate 'work' in present perfect: I ___, You ___, He ___, We ___, They ___",
          options: [
            "have worked, have worked, has worked, have worked, have worked",
            "has worked, have worked, have worked, have worked, have worked",
            "have worked, has worked, has worked, have worked, have worked",
            "worked, worked, worked, worked, worked",
          ],
          correct: 0,
          explanation:
            "Present perfect: have/has + past participle. I/you/we/they have, he/she/it has",
          tip: "Present perfect = have/has + past participle",
          tense: "present perfect",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Conjugate irregular verb 'see' in present perfect: I ___, You ___, She ___, We ___, They ___",
          options: [
            "have seen, have seen, has seen, have seen, have seen",
            "has seen, have seen, have seen, have seen, have seen",
            "have seen, has seen, has seen, have seen, have seen",
            "have saw, have saw, has saw, have saw, have saw",
          ],
          correct: 0,
          explanation:
            "Irregular past participle: see→seen (not saw in present perfect)",
          tip: "Irregular past participles: see→seen, go→gone, do→done",
          tense: "present perfect",
          type: "verb-conjugation" as TypeExcercise,
        },
      ],
    },
  },

  "future simple": {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Conjugate 'work' in future simple: I ___, You ___, He ___, We ___, They ___",
          options: [
            "will work, will work, will work, will work, will work",
            "work, will work, will work, work, work",
            "will work, work, will work, will work, will work",
            "will works, will works, will works, will works, will works",
          ],
          correct: 0,
          explanation:
            "Future simple: will + base verb (same for all subjects)",
          tip: "Future simple: will + base verb (never will works, will worked, etc.)",
          tense: "future simple",
          type: "verb-conjugation" as TypeExcercise,
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
            "Conjugate with modal 'can': I ___, You ___, She ___, We ___, They ___",
          options: [
            "can work, can work, can work, can work, can work",
            "can work, can work, can works, can work, can work",
            "can works, can works, can works, can works, can works",
            "work, can work, can work, work, work",
          ],
          correct: 0,
          explanation:
            "Modals are the same for all subjects + base verb (never can works)",
          tip: "Modals: same form for all subjects + base verb (can/could/should/must + work)",
          tense: "modals",
          type: "verb-conjugation" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Conjugate with 'should': I ___, You ___, He ___, We ___, They ___",
          options: [
            "should study, should study, should study, should study, should study",
            "should study, should study, should studies, should study, should study",
            "should studies, should studies, should studies, should studies, should studies",
            "study, should study, should study, study, study",
          ],
          correct: 0,
          explanation: "Modal 'should' + base verb for all subjects",
          tip: "Should + base verb (never should studies, should to study)",
          tense: "modals",
          type: "verb-conjugation" as TypeExcercise,
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
            "First conditional conjugation: If I ___ (study), I ___ (pass). If he ___ (study), he ___ (pass).",
          options: [
            "study, will pass, studies, will pass",
            "will study, pass, will studies, pass",
            "study, pass, studies, will pass",
            "studies, will pass, study, will pass",
          ],
          correct: 0,
          explanation:
            "First conditional: if + present simple, will + base verb",
          tip: "First conditional: If clause (present simple) + main clause (will + base)",
          tense: "conditionals",
          type: "verb-conjugation" as TypeExcercise,
        },
      ],
    },
  },
};

export function getVerbConjugationBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 5
): Question[] {
  const topicData =
    VERB_CONJUGATION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof VERB_CONJUGATION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default VERB_CONJUGATION_BACKUPS;

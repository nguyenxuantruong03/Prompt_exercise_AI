// Comprehensive backup question data for all exercise types and grammar topics

// Multiple Choice Questions
export function getMultipleChoiceQuestions(
  grammarTopic: string,
  proficiencyLevel: string,
  context?: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "She _____ to work every day.",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        explanation:
          "Use 'goes' with third person singular (she) in present simple.",
        tip: "Remember: he/she/it takes -s or -es in present simple.",
      },
      {
        question: "They _____ English at school.",
        options: ["study", "studies", "studying", "studied"],
        correct: 0,
        explanation:
          "Use base form 'study' with plural subjects in present simple.",
        tip: "Plural subjects (they/we/you) use the base form of the verb.",
      },
      {
        question: "_____ you like coffee?",
        options: ["Do", "Does", "Are", "Is"],
        correct: 0,
        explanation: "Use 'Do' with you/we/they in present simple questions.",
        tip: "Questions: Do + I/you/we/they + base verb",
      },
    ],
    "past simple": [
      {
        question: "I _____ to London last year.",
        options: ["go", "went", "going", "gone"],
        correct: 1,
        explanation:
          "Use 'went' (past form of go) for completed actions in the past.",
        tip: "Past simple uses past form of verbs (regular verbs add -ed).",
      },
      {
        question: "She _____ her homework yesterday.",
        options: ["finish", "finished", "finishing", "finishes"],
        correct: 1,
        explanation: "Use 'finished' (past form) for completed past actions.",
        tip: "Regular verbs form past simple by adding -ed.",
      },
    ],
    "present perfect": [
      {
        question: "I _____ never _____ to Japan.",
        options: ["have / been", "has / been", "am / been", "was / been"],
        correct: 0,
        explanation: "Use 'have been' with I for present perfect experience.",
        tip: "Present perfect: have/has + past participle",
      },
      {
        question: "She _____ already _____ her lunch.",
        options: ["have / eaten", "has / ate", "has / eaten", "had / eaten"],
        correct: 2,
        explanation:
          "Use 'has eaten' with she for completed actions with present relevance.",
        tip: "Third person singular (he/she/it) uses 'has' + past participle.",
      },
    ],
    modals: [
      {
        question: "You _____ wear a helmet when riding a bike.",
        options: ["should", "can", "may", "will"],
        correct: 0,
        explanation: "'Should' expresses advice or recommendation for safety.",
        tip: "Should = advice, recommendation, or moral obligation.",
      },
      {
        question: "_____ I borrow your pen?",
        options: ["Should", "Must", "May", "Will"],
        correct: 2,
        explanation: "'May' is polite way to ask for permission.",
        tip: "May/Can = asking permission; Could = polite request.",
      },
    ],
    "passive voice": [
      {
        question: "The book _____ by millions of people.",
        options: ["reads", "is read", "reading", "read"],
        correct: 1,
        explanation:
          "Use 'is read' (passive present simple) when focus is on the action, not the doer.",
        tip: "Passive voice: be + past participle",
      },
      {
        question: "The house _____ last year.",
        options: ["built", "was built", "building", "builds"],
        correct: 1,
        explanation:
          "Use 'was built' (passive past simple) for completed past actions in passive.",
        tip: "Past passive: was/were + past participle",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

// Fill in the Blank Questions
export function getFillInBlankQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "My sister _____ (work) in a hospital.",
        correct: "works",
        explanation: "Third person singular takes -s: work → works",
        tip: "Add -s or -es to verbs with he/she/it in present simple.",
      },
      {
        question: "We _____ (not/like) spicy food.",
        correct: "don't like",
        explanation:
          "Negative present simple: subject + don't/doesn't + base verb",
        tip: "Use don't with I/you/we/they, doesn't with he/she/it.",
      },
    ],
    "past simple": [
      {
        question: "They _____ (arrive) at 8 PM yesterday.",
        correct: "arrived",
        explanation: "Regular verbs add -ed for past simple: arrive → arrived",
        tip: "Regular past simple: base verb + -ed",
      },
      {
        question: "I _____ (not/see) him last week.",
        correct: "didn't see",
        explanation: "Past simple negative: subject + didn't + base verb",
        tip: "Didn't is used for all subjects in past simple negative.",
      },
    ],
    "present perfect": [
      {
        question: "She _____ (live) here for five years.",
        correct: "has lived",
        explanation: "Present perfect for duration: has + past participle",
        tip: "Use present perfect with 'for' and 'since' for time periods.",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

// Sentence Completion Questions
export function getSentenceCompletionQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    conditionals: [
      {
        question: "If it rains tomorrow, _____ stay at home.",
        options: ["I'll", "I'd", "I", "I'm"],
        correct: 0,
        explanation: "First conditional: If + present simple, will + base verb",
        tip: "Type 1 conditional: If + present, will + infinitive",
      },
      {
        question: "If I were rich, _____ travel around the world.",
        options: ["I'll", "I'd", "I", "I'm"],
        correct: 1,
        explanation: "Second conditional: If + past simple, would + base verb",
        tip: "Type 2 conditional: If + past, would + infinitive",
      },
    ],
    "reported speech": [
      {
        question: "He said, 'I am tired.' → He said that _____ tired.",
        options: ["he is", "he was", "I am", "I was"],
        correct: 1,
        explanation: "In reported speech, present tense changes to past tense.",
        tip: "Backshift: am/is → was, are → were, will → would",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Error Correction Questions
export function getErrorCorrectionQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Find and correct the error:",
        incorrectText: "She go to school every day.",
        correct: "She goes to school every day.",
        explanation: "Third person singular needs -s: go → goes",
        tip: "Always add -s or -es with he/she/it in present simple.",
      },
      {
        question: "Find and correct the error:",
        incorrectText: "Do he like pizza?",
        correct: "Does he like pizza?",
        explanation: "Use 'does' with he/she/it in questions.",
        tip: "Questions: Does + he/she/it + base verb?",
      },
    ],
    "past simple": [
      {
        question: "Find and correct the error:",
        incorrectText: "I goed to the store yesterday.",
        correct: "I went to the store yesterday.",
        explanation: "'Go' is irregular: go → went (not goed)",
        tip: "Irregular verbs have special past forms that must be memorized.",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

// Reading Comprehension Questions
export function getReadingComprehensionQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "What does Maria do every morning?",
        passage:
          "Maria works as a teacher. She gets up at 6 AM every morning. She makes breakfast and drinks coffee. Then she goes to school by bus. She teaches English to young students. In the evening, she prepares lessons for the next day.",
        options: [
          "She teaches math",
          "She gets up at 7 AM",
          "She gets up at 6 AM",
          "She walks to school",
        ],
        correct: 2,
        explanation: "The passage states: 'She gets up at 6 AM every morning.'",
        tip: "Look for exact information in the text.",
      },
    ],
    "past simple": [
      {
        question: "When did Tom visit his grandmother?",
        passage:
          "Last weekend, Tom visited his grandmother in the countryside. He traveled by train on Saturday morning. They cooked together and shared old stories. On Sunday, he helped her in the garden before returning home.",
        options: ["On Friday", "Last weekend", "This weekend", "Next weekend"],
        correct: 1,
        explanation:
          "The passage begins with: 'Last weekend, Tom visited his grandmother...'",
        tip: "Pay attention to time expressions in past simple texts.",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

// Word Order Questions
export function getWordOrderQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Arrange these words to make a correct sentence:",
        words: ["every", "she", "day", "studies", "English"],
        correct: "She studies English every day.",
        explanation: "Word order: Subject + Verb + Object + Time",
        tip: "Basic English order: Subject-Verb-Object-Time/Place",
      },
    ],
    "question forms": [
      {
        question: "Arrange these words to make a question:",
        words: ["you", "do", "live", "where"],
        correct: "Where do you live?",
        explanation:
          "Question word order: Wh-word + auxiliary + subject + main verb?",
        tip: "Questions: Wh-word + do/does + subject + base verb?",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

// Matching Questions
export function getMatchingQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Match the subjects with correct verb forms:",
        pairs: [
          { left: "She", right: "goes" },
          { left: "They", right: "go" },
          { left: "I", right: "go" },
          { left: "He", right: "goes" },
        ],
        correct: "All pairs matched correctly",
        explanation: "He/she/it use singular forms, others use base forms.",
        tip: "Third person singular (he/she/it) adds -s, others use base form.",
      },
    ],
    modals: [
      {
        question: "Match the modal verbs with their meanings:",
        pairs: [
          { left: "must", right: "obligation" },
          { left: "can", right: "ability" },
          { left: "should", right: "advice" },
          { left: "might", right: "possibility" },
        ],
        correct: "All pairs matched correctly",
        explanation: "Each modal has specific meanings and uses.",
        tip: "Learn modal meanings: can=ability, must=obligation, should=advice.",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

// Cloze Test Questions
export function getClozeTestQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Complete the text with the correct words:",
        passage:
          "John _____ (1) a doctor. He _____ (2) at a hospital every day. He _____ (3) patients and _____ (4) them feel better.",
        options: [
          "is, works, helps, makes",
          "are, work, help, make",
          "be, working, helping, making",
          "was, worked, helped, made",
        ],
        correct: 0,
        explanation:
          "Present simple: is/works/helps/makes for routine actions and facts.",
        tip: "Present simple describes facts, habits, and routines.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Transformation Questions
export function getTransformationQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "passive voice": [
      {
        question:
          "Transform from active to passive: 'The chef prepares the meal.'",
        correct: "The meal is prepared by the chef.",
        explanation:
          "Passive transformation: Object becomes subject, verb becomes be + past participle.",
        tip: "Active to passive: Subject and object switch places, add 'be' + past participle.",
      },
    ],
    "reported speech": [
      {
        question: "Change to reported speech: He said, 'I will come tomorrow.'",
        correct: "He said that he would come the next day.",
        explanation: "Backshift: will → would, tomorrow → the next day, I → he",
        tip: "In reported speech, tense shifts back and pronouns/time expressions change.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Sentence Building Questions
export function getSentenceBuildingQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Build a sentence using: she / work / hospital",
        words: ["she", "work", "hospital"],
        correct: "She works in a hospital.",
        explanation:
          "Present simple: She works (third person singular + -s) + prepositional phrase.",
        tip: "Don't forget to add -s with he/she/it and include prepositions.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Paraphrasing Questions
export function getParaphrasingQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    modals: [
      {
        question:
          "Which sentence has the same meaning as 'You must wear a seatbelt'?",
        options: [
          "You should wear a seatbelt",
          "It's obligatory to wear a seatbelt",
          "You can wear a seatbelt",
          "You might wear a seatbelt",
        ],
        correct: 1,
        explanation: "'Must' expresses obligation, same as 'it's obligatory.'",
        tip: "Must = obligation = it's obligatory/necessary/required.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Verb Conjugation Questions
export function getVerbConjugationQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Conjugate 'study' for 'she':",
        correct: "studies",
        explanation:
          "Third person singular: study → studies (consonant + y → ies)",
        tip: "Verbs ending in consonant + y: change y to ies (study → studies).",
      },
    ],
    "past simple": [
      {
        question: "What is the past form of 'run'?",
        correct: "ran",
        explanation: "'Run' is irregular: run → ran → run",
        tip: "Irregular verbs must be memorized: run-ran-run.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Punctuation Questions
export function getPunctuationQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "question forms": [
      {
        question: "Add correct punctuation: 'What time is it'",
        options: [
          "What time is it.",
          "What time is it!",
          "What time is it?",
          "What time is it;",
        ],
        correct: 2,
        explanation: "Questions end with question marks (?)",
        tip: "Always end questions with question marks.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Word Formation Questions
export function getWordFormationQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "adjectives and adverbs": [
      {
        question: "Form the adverb from 'quick':",
        correct: "quickly",
        explanation:
          "Most adjectives form adverbs by adding -ly: quick → quickly",
        tip: "Adjective + -ly = adverb (quick → quickly, slow → slowly).",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Sentence Combining Questions
export function getSentenceCombiningQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    conjunctions: [
      {
        question: "Combine these sentences: 'It was raining. We stayed home.'",
        clauses: [
          {
            mainClause: "It was raining",
            subordinateClause: "we stayed home",
            connector: "so",
            combinedSentence: "It was raining, so we stayed home.",
          },
        ],
        correct: "It was raining, so we stayed home.",
        explanation: "'So' shows result/consequence.",
        tip: "Use 'so' to show cause and effect relationships.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Dialogue Completion Questions
export function getDialogueCompletionQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "question forms": [
      {
        question: "A: _____ do you live? B: I live in New York.",
        options: ["What", "Where", "When", "Why"],
        correct: 1,
        explanation: "'Where' asks about location/place.",
        tip: "Where = place, What = thing, When = time, Why = reason.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Comparison Exercise Questions
export function getComparisonExerciseQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "comparative and superlative": [
      {
        question: "Compare the structures:",
        comparisonStructures: {
          structure1: "bigger than",
          structure2: "the biggest",
          examples: {
            structure1Example: "This house is bigger than that one.",
            structure2Example: "This is the biggest house in the street.",
          },
        },
        correct: "Comparative vs Superlative",
        explanation:
          "Comparative compares two things, superlative compares three or more.",
        tip: "Comparative: -er/more + than. Superlative: the + -est/most.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Context Matching Questions
export function getContextMatchingQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    modals: [
      {
        question: "Which modal fits this context?",
        context: {
          situation: "Doctor giving medical advice",
          timeframe: "present",
          formality: "formal",
          purpose: "recommendation",
          grammarChoices: [
            {
              structure: "should",
              appropriateness: "perfect",
              reason: "Professional advice",
            },
            {
              structure: "must",
              appropriateness: "acceptable",
              reason: "Strong recommendation",
            },
            {
              structure: "can",
              appropriateness: "inappropriate",
              reason: "Not advice",
            },
          ],
        },
        correct: "should",
        explanation: "'Should' is perfect for professional medical advice.",
        tip: "Should = professional advice, must = strong obligation.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Passive Active Matching Questions
export function getPassiveActiveMatchingQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "passive voice": [
      {
        question: "Match active and passive sentences:",
        voicePairs: [
          {
            active: "The teacher explains the lesson",
            passive: "The lesson is explained by the teacher",
            tense: "present simple",
          },
          {
            active: "Students completed the project",
            passive: "The project was completed by students",
            tense: "past simple",
          },
        ],
        correct: "All pairs matched",
        explanation: "Passive voice moves focus from doer to action/receiver.",
        tip: "Active: subject does action. Passive: action is done to subject.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Clause Combining Questions
export function getClauseCombiningQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "relative clauses": [
      {
        question: "Combine using relative pronouns:",
        clauses: [
          {
            mainClause: "The book is interesting",
            subordinateClause: "I am reading the book",
            connector: "which/that",
            combinedSentence:
              "The book which/that I am reading is interesting.",
          },
        ],
        correct: "The book which/that I am reading is interesting.",
        explanation: "'Which/that' connects clauses about things.",
        tip: "Who = people, which/that = things, where = places.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Multi Topic Integration Questions
export function getMultiTopicIntegrationQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present perfect": [
      {
        question:
          "Choose the correct sentence combining present perfect and time expressions:",
        grammarTopics: ["present perfect", "prepositions", "adverbs"],
        topicWeights: {
          "present perfect": 0.6,
          prepositions: 0.2,
          adverbs: 0.2,
        },
        correct: 0,
        explanation:
          "Present perfect with 'for' duration and 'already' adverb.",
        tip: "Present perfect often combines with time prepositions and frequency adverbs.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Form Conversion Questions
export function getFormConversionQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "question forms": [
      {
        question: "Convert to question form:",
        originalSentence: "You like pizza.",
        targetForm: "question",
        conversionSteps: [
          "Add auxiliary 'do'",
          "Keep subject",
          "Use base verb",
          "Add question mark",
        ],
        correct: "Do you like pizza?",
        explanation: "Present simple questions: Do/Does + subject + base verb?",
        tip: "Questions need auxiliary verbs (do/does) in present simple.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Situational Grammar Questions
export function getSituationalGrammarQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    modals: [
      {
        question: "What should you say in a job interview?",
        situation: {
          context: "Job interview",
          scenario: "Expressing past experience professionally",
          appropriateGrammar: [
            "present perfect",
            "past simple with specific times",
          ],
          inappropriateGrammar: [
            "present continuous for past",
            "future in past",
          ],
          formalityLevel: "formal",
          tips: [
            "Use present perfect for experience",
            "Use past simple for specific examples",
          ],
        },
        correct: "I have worked in marketing for three years.",
        explanation: "Present perfect shows experience relevant to now.",
        tip: "Job interviews: present perfect for experience, past simple for specific examples.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Paragraph Tense Conversion Questions
export function getParagraphTenseConversionQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "past simple": [
      {
        question: "Convert this paragraph from present to past:",
        originalParagraph:
          "I wake up early. I eat breakfast and go to work. I work for eight hours and then return home.",
        sourceTense: "Present Simple",
        targetTense: "Past Simple",
        convertedParagraph:
          "I woke up early. I ate breakfast and went to work. I worked for eight hours and then returned home.",
        conversionRules: [
          "Regular verbs + -ed",
          "Irregular verbs use special forms",
          "No auxiliary in positive statements",
        ],
        correct:
          "I woke up early. I ate breakfast and went to work. I worked for eight hours and then returned home.",
        explanation: "Present simple converts to past simple using past forms.",
        tip: "Past simple: regular verbs + -ed, irregular verbs have special forms.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// Grammar Generator Questions
export function getGrammarGeneratorQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
        question: "Generate sentences using these words and present simple:",
        generatorData: {
          vocabulary: ["student", "study", "library", "book", "every day"],
          grammarRule: "Present Simple - third person singular",
          generatedSentences: [
            "The student studies in the library every day.",
            "She reads books every day.",
            "He studies hard every day.",
          ],
          task: "generate",
        },
        correct: "The student studies in the library every day.",
        explanation:
          "Present simple with third person: student studies (add -s).",
        tip: "Don't forget -s with he/she/it in present simple.",
      },
    ],
  };

  return questionSets[grammarTopic] || [];
}

// True False Lightning Questions
export function getTrueFalseLightningQuestions(
  grammarTopic: string,
  proficiencyLevel: string
) {
  const questionSets: { [key: string]: any[] } = {
    "present simple": [
      {
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
      },
      {
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
      },
    ],
    "past simple": [
      {
        question: "Is this sentence correct?",
        lightningData: {
          sentence: "I goed to the store yesterday.",
          timeLimit: 10,
          correctness: false,
          errorType: "irregular verb",
          quickExplanation: "Should be 'went' - go is irregular verb",
        },
        correct: 1, // False
        explanation:
          "Incorrect: 'goed' should be 'went' - go is an irregular verb.",
        tip: "Irregular verbs: go-went-gone (not goed!)",
      },
    ],
    modals: [
      {
        question: "Is this sentence correct?",
        lightningData: {
          sentence: "You must to wear a helmet.",
          timeLimit: 10,
          correctness: false,
          errorType: "modal + to",
          quickExplanation: "Should be 'must wear' - no 'to' after modals",
        },
        correct: 1, // False
        explanation:
          "Incorrect: 'must to' should be 'must' - no 'to' after modal verbs.",
        tip: "Modals + base verb (no 'to'!)",
      },
    ],
  };

  return questionSets[grammarTopic] || questionSets["present simple"];
}

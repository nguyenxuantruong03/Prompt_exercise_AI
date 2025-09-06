import { ExerciseType, ProficiencyLevel, AIQuestionResponse } from './types';
import { getGrammarForms, generateGenericOptions } from './grammar-forms';

// Helper functions to generate fallback options when AI fails to provide them
export const generateFallbackOptions = (
  exerciseType: string,
  grammarTopic: string,
  questionData: AIQuestionResponse,
  index: number,
  proficiencyLevel: ProficiencyLevel
): string[] => {
  console.log(
    `🔧 Generating level-appropriate fallback options for ${exerciseType} question ${
      index + 1
    } at ${proficiencyLevel} level`
  );

  switch (exerciseType) {
    case "multiple-choice":
      return generateMultipleChoiceOptions(grammarTopic, questionData, proficiencyLevel);
    case "cloze-test":
      return generateClozeOptions(grammarTopic, proficiencyLevel);
    case "transformation":
      return generateTransformationOptions(grammarTopic, proficiencyLevel);
    case "paraphrasing":
      return generateParaphrasingOptions(grammarTopic, proficiencyLevel);
    case "sentence-combining":
      return generateSentenceCombiningOptions(grammarTopic, proficiencyLevel);
    case "reading-comprehension":
      return generateReadingComprehensionOptions(grammarTopic, proficiencyLevel);
    case "verb-conjugation":
      return generateVerbConjugationOptions(proficiencyLevel);
    case "word-formation":
      return generateWordFormationOptions(proficiencyLevel);
    case "dialogue-completion":
      return generateDialogueOptions(grammarTopic, proficiencyLevel);
    case "punctuation":
      return generatePunctuationOptions(proficiencyLevel);
    case "sentence-building":
      return generateSentenceBuildingOptions(grammarTopic, proficiencyLevel);
    case "comparison-exercise":
      return generateComparisonOptions(grammarTopic, proficiencyLevel);
    case "context-matching":
      return generateContextMatchingOptions(grammarTopic, proficiencyLevel);
    default:
      return generateGenericOptions(grammarTopic, proficiencyLevel);
  }
};

const generateMultipleChoiceOptions = (
  topic: string,
  q: AIQuestionResponse,
  proficiencyLevel: ProficiencyLevel
): string[] => {
  const grammarForms = getGrammarForms(topic, proficiencyLevel);
  if (grammarForms.length >= 4) {
    return grammarForms.slice(0, 4);
  }

  // Generate level-appropriate contextual options based on proficiency level
  const questionText = (q.question || q.text || "") as string;

  // Level-specific option generation
  if (proficiencyLevel === "A1") {
    if (questionText.includes("past")) {
      return ["went", "go", "goes", "going"];
    } else if (questionText.includes("present")) {
      return ["go", "goes", "went", "going"];
    }
    return ["is", "go", "have", "like"];
  } else if (proficiencyLevel === "A2") {
    if (questionText.includes("past")) {
      return ["went", "was going", "have gone", "go"];
    } else if (questionText.includes("present")) {
      return ["go", "going", "will go", "went"];
    }
    return ["go", "going", "went", "will go"];
  } else if (proficiencyLevel === "B1") {
    if (questionText.includes("past")) {
      return ["had done", "was doing", "have done", "did"];
    } else if (questionText.includes("present")) {
      return ["have been doing", "am doing", "do", "will do"];
    }
    return ["have done", "am doing", "will do", "would do"];
  } else if (proficiencyLevel === "B2") {
    return [
      "would have done",
      "had been doing",
      "will have been doing",
      "might have done",
    ];
  } else {
    // C1/C2
    if (proficiencyLevel === "C2") {
      return [
        "would have been being done",
        "might have been being done",
        "should have been being done",
        "could have been being done",
      ];
    } else {
      return [
        "would have been done",
        "might have been done",
        "should have been done",
        "could have been done",
      ];
    }
  }
};

const generateClozeOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  const grammarForms = getGrammarForms(topic, proficiencyLevel);
  if (grammarForms.length >= 4) {
    return grammarForms.slice(0, 4);
  }

  // Level-appropriate cloze options
  if (proficiencyLevel === "A1") {
    return ["a", "an", "the", ""];
  } else if (proficiencyLevel === "A2") {
    return ["some", "any", "much", "many"];
  } else if (proficiencyLevel === "B1") {
    return ["although", "however", "therefore", "moreover"];
  } else {
    return ["nevertheless", "consequently", "furthermore", "conversely"];
  }
};

const generateTransformationOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Simple transformation using ${topic}`,
      `Basic incorrect form`,
      `Wrong simple structure`,
      `Another basic error`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Correctly transformed using ${topic}`,
      `Intermediate-level error`,
      `Wrong ${topic} structure`,
      `Complex but incorrect form`,
    ];
  } else {
    return [
      `Sophisticatedly transformed using ${topic}`,
      `Advanced structural error`,
      `Nuanced but wrong ${topic} usage`,
      `Complex incorrect transformation`,
    ];
  }
};

const generateParaphrasingOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Simple paraphrase with ${topic}`,
      `Basic incorrect version`,
      `Wrong simple paraphrase`,
      `Another basic error`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Well-paraphrased using ${topic}`,
      `Intermediate paraphrase error`,
      `Wrong ${topic} paraphrase`,
      `Complex but incorrect version`,
    ];
  } else {
    return [
      `Expertly paraphrased using ${topic}`,
      `Sophisticated but wrong version`,
      `Advanced paraphrase error`,
      `Nuanced but incorrect usage`,
    ];
  }
};

const generateSentenceCombiningOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Simply combined using ${topic}`,
      `Basic combination error`,
      `Wrong simple joining`,
      `Another basic mistake`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Correctly combined using ${topic}`,
      `Intermediate combination error`,
      `Wrong ${topic} combination`,
      `Complex but incorrect joining`,
    ];
  } else {
    return [
      `Expertly combined using ${topic}`,
      `Advanced combination error`,
      `Sophisticated but wrong joining`,
      `Complex incorrect structure`,
    ];
  }
};

const generateReadingComprehensionOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Basic understanding of ${topic}`,
      `Simple misunderstanding`,
      `Wrong basic interpretation`,
      `Another basic error`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Good interpretation of ${topic} usage`,
      `Intermediate misunderstanding`,
      `Wrong interpretation`,
      `Complex but incorrect understanding`,
    ];
  } else {
    return [
      `Sophisticated understanding of ${topic}`,
      `Advanced misinterpretation`,
      `Nuanced but wrong analysis`,
      `Complex incorrect interpretation`,
    ];
  }
};

const generateVerbConjugationOptions = (proficiencyLevel: ProficiencyLevel): string[] => {
  // Level-appropriate verb forms
  if (proficiencyLevel === "A1") {
    return ["is", "are", "was", "were"];
  } else if (proficiencyLevel === "A2") {
    return ["will be", "going to", "have", "has"];
  } else if (proficiencyLevel === "B1") {
    return ["have been", "had been", "will have", "would have"];
  } else if (proficiencyLevel === "B2") {
    return ["would have been", "might have", "should have", "could have"];
  } else {
    return [
      "would have been being",
      "might have been",
      "should have been being",
      "could have been",
    ];
  }
};

const generateWordFormationOptions = (proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      "correctly formed word",
      "wrong ending",
      "incorrect form",
      "basic error",
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      "appropriately formed word",
      "intermediate formation error",
      "wrong word structure",
      "complex but incorrect form",
    ];
  } else {
    return [
      "sophisticatedly formed word",
      "advanced formation error",
      "nuanced but wrong structure",
      "complex morphological error",
    ];
  }
};

const generateDialogueOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Simple ${topic} response`,
      `Basic incorrect choice`,
      `Wrong simple response`,
      `Another basic error`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Appropriate ${topic} response`,
      `Intermediate dialogue error`,
      `Wrong conversational choice`,
      `Complex but inappropriate response`,
    ];
  } else {
    return [
      `Sophisticated ${topic} response`,
      `Advanced dialogue error`,
      `Nuanced but wrong choice`,
      `Complex inappropriate response`,
    ];
  }
};

const generatePunctuationOptions = (proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      "Correctly punctuated",
      "Missing period",
      "Wrong comma",
      "No punctuation",
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      "Properly punctuated",
      "Missing semicolon",
      "Wrong punctuation placement",
      "Incorrect comma usage",
    ];
  } else {
    return [
      "Expertly punctuated",
      "Missing sophisticated punctuation",
      "Wrong advanced punctuation",
      "Incorrect complex punctuation",
    ];
  }
};

const generateSentenceBuildingOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Simply built using ${topic}`,
      `Basic construction error`,
      `Wrong simple structure`,
      `Another basic mistake`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Well-constructed using ${topic}`,
      `Intermediate building error`,
      `Wrong sentence structure`,
      `Complex but incorrect construction`,
    ];
  } else {
    return [
      `Expertly constructed using ${topic}`,
      `Advanced construction error`,
      `Sophisticated but wrong structure`,
      `Complex incorrect building`,
    ];
  }
};

const generateComparisonOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  // Generate options for comparison exercises based on common grammar structure pairs
  const commonComparisons: { [key: string]: string[] } = {
    "past tense": ["had finished (Past Perfect)", "finished (Past Simple)", "was finishing (Past Continuous)", "has finished (Present Perfect)"],
    "present perfect": ["have done (Present Perfect)", "did (Past Simple)", "was doing (Past Continuous)", "will do (Future Simple)"],
    "used to": ["used to go (Past habit)", "would go (Repeated past action)", "was going (Past Continuous)", "went (Past Simple)"],
    "conditionals": ["If I were (2nd Conditional)", "If I was (Past Simple)", "If I am (1st Conditional)", "If I will be (Future)"],
    "modal verbs": ["must (Strong obligation)", "have to (External obligation)", "should (Advice)", "might (Possibility)"],
    "articles": ["the (Definite)", "a (Indefinite)", "an (Before vowel)", "no article (Zero article)"],
    "future": ["will go (Future Simple)", "going to go (Planned future)", "am going (Present Continuous)", "go (Present Simple)"],
    "passive": ["was made (Past Passive)", "made (Active Past)", "is made (Present Passive)", "makes (Active Present)"]
  };

  const lowerTopic = topic.toLowerCase();
  
  // Find matching comparison set
  for (const [key, options] of Object.entries(commonComparisons)) {
    if (lowerTopic.includes(key) || lowerTopic.includes(key.replace(/\s+/g, ""))) {
      return options;
    }
  }

  // Level-based fallback options for comparison exercises
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Correct basic ${topic} form`,
      `Common beginner mistake`,
      `Wrong simple structure`,
      `Another basic error`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Proper ${topic} usage`,
      `Intermediate confusion`,
      `Wrong structure choice`,
      `Similar but incorrect form`,
    ];
  } else {
    return [
      `Advanced ${topic} distinction`,
      `Sophisticated but wrong choice`,
      `Nuanced incorrect usage`,
      `Complex structural confusion`,
    ];
  }
};

const generateContextMatchingOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  // Generate context-appropriate options based on common grammar structures for different situations
  const contextOptions: { [key: string]: string[] } = {
    "past tense": [
      "I used to play football when I was young (nostalgic past habit)",
      "I played football yesterday (completed past action)",
      "I was playing football when it rained (interrupted past action)",
      "I have played football since childhood (experience with present relevance)"
    ],
    "present perfect": [
      "I have lived here for 5 years (duration continuing to present)",
      "I lived here for 5 years (completed past period)",
      "I am living here for 5 years (incorrect progressive form)",
      "I was living here for 5 years (past duration without present connection)"
    ],
    "conditionals": [
      "If I were you, I would study more (hypothetical advice)",
      "If I was there yesterday, I would have helped (mixed conditional)",
      "If I am free tomorrow, I will help (real future possibility)",
      "If I will be free, I help you (incorrect future in if-clause)"
    ],
    "modal verbs": [
      "You must wear a seatbelt (legal obligation)",
      "You have to wear formal clothes (external requirement)",
      "You should wear a coat (advice/recommendation)",
      "You need to wear glasses (personal necessity)"
    ],
    "future": [
      "I'm going to visit my parents this weekend (planned intention)",
      "I'll visit my parents this weekend (spontaneous decision)",
      "I visit my parents this weekend (incorrect present for future)",
      "I'm visiting my parents this weekend (arranged future event)"
    ],
    "articles": [
      "I'm going to the hospital to visit a friend (specific hospital, general friend)",
      "I'm going to hospital as a patient (British usage - no article)",
      "I'm going to a hospital to see the doctor (indefinite hospital, specific doctor)",
      "I'm going to hospital to see doctor (missing articles)"
    ]
  };

  const lowerTopic = topic.toLowerCase();
  
  // Find matching context option set
  for (const [key, options] of Object.entries(contextOptions)) {
    if (lowerTopic.includes(key) || lowerTopic.includes(key.replace(/\s+/g, ""))) {
      return options;
    }
  }

  // Level-based fallback options for context matching
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Perfect choice for casual conversation about ${topic}`,
      `Acceptable but too formal for this context`,
      `Wrong grammar structure for this situation`,
      `Grammatically incorrect ${topic} usage`
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Most natural and appropriate for this business context`,
      `Grammatically correct but sounds awkward here`,
      `Too informal for this professional situation`,
      `Incorrect ${topic} structure for this purpose`
    ];
  } else {
    return [
      `Perfectly appropriate for this formal academic context`,
      `Correct grammar but wrong register for the situation`,
      `Too casual and inappropriate for this formal setting`,
      `Grammatically flawed ${topic} construction`
    ];
  }
};

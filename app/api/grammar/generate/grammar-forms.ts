import { ProficiencyLevel, ExerciseType, AIQuestionResponse } from './types';

// Enhanced grammar forms helper with level awareness
export const getGrammarForms = (text: string, level: ProficiencyLevel): string[] => {
  const grammarVariations: {
    [key: string]: { [key in ProficiencyLevel]: string[] };
  } = {
    "present simple": {
      A1: ["do", "does", "don't", "doesn't"],
      A2: ["do", "does", "don't", "doesn't"],
      B1: ["do", "does", "don't", "doesn't"],
      B2: ["do", "does", "don't", "doesn't"],
      C1: ["do", "does", "don't", "doesn't"],
      C2: ["do", "does", "don't", "doesn't"],
    },
    "past simple": {
      A1: ["was", "were", "did", "didn't"],
      A2: ["was", "were", "did", "didn't"],
      B1: ["was", "were", "did", "didn't"],
      B2: ["was", "were", "did", "didn't"],
      C1: ["was", "were", "did", "didn't"],
      C2: ["was", "were", "did", "didn't"],
    },
    "present perfect": {
      A1: ["have", "has", "haven't", "hasn't"],
      A2: ["have", "has", "haven't", "hasn't"],
      B1: ["have", "has", "haven't", "hasn't"],
      B2: ["have been", "has been", "haven't been", "hasn't been"],
      C1: ["have been", "has been", "haven't been", "hasn't been"],
      C2: ["have been", "has been", "haven't been", "hasn't been"],
    },
    future: {
      A1: ["will", "going to", "won't", "not going to"],
      A2: ["will", "going to", "shall", "won't"],
      B1: ["will", "going to", "shall", "won't"],
      B2: ["will have", "going to have", "shall have", "won't have"],
      C1: [
        "will have been",
        "going to have been",
        "shall have been",
        "won't have been",
      ],
      C2: [
        "will have been",
        "going to have been",
        "shall have been",
        "won't have been",
      ],
    },
    conditionals: {
      A1: ["if", "when", "would", "could"],
      A2: ["if", "unless", "would", "could"],
      B1: ["if", "unless", "would", "could"],
      B2: ["provided that", "supposing", "would have", "could have"],
      C1: [
        "were it not for",
        "but for",
        "would have been",
        "could have been",
      ],
      C2: [
        "were it not for",
        "but for",
        "would have been",
        "could have been",
      ],
    },
    articles: {
      A1: ["a", "an", "the", ""],
      A2: ["a", "an", "the", ""],
      B1: ["a", "an", "the", ""],
      B2: ["a", "an", "the", ""],
      C1: ["a", "an", "the", ""],
      C2: ["a", "an", "the", ""],
    },
  };

  const lowerText = text.toLowerCase();
  for (const [key, levelVariations] of Object.entries(grammarVariations)) {
    if (lowerText.includes(key) || lowerText.includes(key.replace(/\s+/g, ""))) {
      return levelVariations[level];
    }
  }

  // Level-appropriate fallback options
  if (level === "A1") {
    return ["is", "go", "have", "like"];
  } else if (level === "A2") {
    return ["went", "going", "will go", "have gone"];
  } else if (level === "B1") {
    return ["have done", "am doing", "will do", "would do"];
  } else if (level === "B2") {
    return [
      "would have done",
      "had been doing",
      "might have",
      "should have",
    ];
  } else {
    // C1/C2
    return [
      "would have been being",
      "might have been being",
      "should have been being",
      "could have been being",
    ];
  }
};

// Generic options generator
export const generateGenericOptions = (topic: string, proficiencyLevel: ProficiencyLevel): string[] => {
  if (proficiencyLevel === "A1" || proficiencyLevel === "A2") {
    return [
      `Basic ${topic} usage`,
      `Simple error`,
      `Wrong basic form`,
      `Another simple mistake`,
    ];
  } else if (proficiencyLevel === "B1" || proficiencyLevel === "B2") {
    return [
      `Correct ${topic} usage`,
      `Intermediate error`,
      `Wrong ${topic} application`,
      `Complex but incorrect option`,
    ];
  } else {
    return [
      `Sophisticated ${topic} usage`,
      `Advanced error`,
      `Nuanced but wrong application`,
      `Complex incorrect usage`,
    ];
  }
};

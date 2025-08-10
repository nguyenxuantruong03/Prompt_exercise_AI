import { GrammarElement } from "./types";

/**
 * Comprehensive Pronoun Analysis Function
 */
export const identifyPronounTypes = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;
  let currentId = elementId;

  // 1. PERSONAL PRONOUNS
  const personalPronounPatterns = [
    // Subject pronouns
    /\b(I|you|he|she|it|we|they)\b/gi,
    // Object pronouns
    /\b(me|you|him|her|it|us|them)\b/gi,
  ];

  const personalPronounTypes = ["Subject", "Object"];

  personalPronounPatterns.forEach((pattern, index) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const pronoun = match[0];
      const type = personalPronounTypes[index];

      elements.push({
        id: `pron-personal-${currentId++}`,
        text: pronoun,
        startPos: match.index!,
        endPos: match.index! + pronoun.length,
        type: "pronoun",
        description: `"${pronoun}" is a ${type.toLowerCase()} personal pronoun that ${
          type === "Subject"
            ? "performs the action in a sentence"
            : "receives the action in a sentence"
        }.`,
        examples: getPersonalPronounExamples(pronoun, type),
        rules: [
          `${type} personal pronouns ${
            type === "Subject"
              ? "act as the subject of a sentence"
              : "act as the object of a verb or preposition"
          }`,
          "Replace specific nouns to avoid repetition",
          "Must agree with their antecedent in person, number, and gender",
          `${type} pronouns ${
            type === "Subject"
              ? "come before the verb"
              : "come after the verb or preposition"
          }`,
        ],
      });
    }
  });

  // 2. POSSESSIVE PRONOUNS
  const possessivePronounPatterns = [
    // Possessive adjectives/determiners
    /\b(my|your|his|her|its|our|their)\b/gi,
    // Possessive pronouns
    /\b(mine|yours|his|hers|ours|theirs)\b/gi,
  ];

  const possessiveTypes = ["Possessive Determiner", "Possessive Pronoun"];

  possessivePronounPatterns.forEach((pattern, index) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const pronoun = match[0];
      const type = possessiveTypes[index];

      elements.push({
        id: `pron-poss-${currentId++}`,
        text: pronoun,
        startPos: match.index!,
        endPos: match.index! + pronoun.length,
        type: "pronoun",
        description: `"${pronoun}" is a ${type.toLowerCase()} that ${
          type === "Possessive Determiner"
            ? "shows ownership and modifies a noun"
            : "shows ownership and stands alone"
        }.`,
        examples: getPossessivePronounExamples(type),
        rules: [
          `${type}s indicate possession or ownership`,
          type === "Possessive Determiner"
            ? "Always followed by a noun"
            : "Stand alone without a following noun",
          "No apostrophe needed",
          "Must agree with the possessor, not the thing possessed",
        ],
      });
    }
  });

  // 3. REFLEXIVE PRONOUNS
  const reflexivePronounPattern =
    /\b(myself|yourself|himself|herself|itself|ourselves|yourselves|themselves)\b/gi;

  reflexivePronounPattern.lastIndex = 0;
  while ((match = reflexivePronounPattern.exec(sentence)) !== null) {
    const pronoun = match[0];

    elements.push({
      id: `pron-refl-${currentId++}`,
      text: pronoun,
      startPos: match.index!,
      endPos: match.index! + pronoun.length,
      type: "pronoun",
      description: `"${pronoun}" is a reflexive pronoun that refers back to the subject of the sentence.`,
      examples: [
        "I hurt myself",
        "She taught herself French",
        "They enjoyed themselves at the party",
      ],
      rules: [
        "Refers back to the subject of the sentence",
        "Used when the subject and object are the same person/thing",
        "Can be used for emphasis (intensive pronoun)",
        "Formed by adding -self (singular) or -selves (plural) to personal pronouns",
      ],
    });
  }

  // 4. DEMONSTRATIVE PRONOUNS
  const demonstrativePronounPattern = /\b(this|that|these|those)\b/gi;

  demonstrativePronounPattern.lastIndex = 0;
  while ((match = demonstrativePronounPattern.exec(sentence)) !== null) {
    const pronoun = match[0];
    const distance = ["this", "these"].includes(pronoun.toLowerCase())
      ? "near"
      : "far";
    const number = ["this", "that"].includes(pronoun.toLowerCase())
      ? "singular"
      : "plural";

    elements.push({
      id: `pron-dem-${currentId++}`,
      text: pronoun,
      startPos: match.index!,
      endPos: match.index! + pronoun.length,
      type: "pronoun",
      description: `"${pronoun}" is a demonstrative pronoun that points to specific ${number} things that are ${distance} in space or time.`,
      examples: [
        `${pronoun} is my favorite book`,
        `I don't like ${pronoun}`,
        `${pronoun} are beautiful flowers`,
      ],
      rules: [
        "Points to specific people, places, or things",
        `"This/these" refer to things nearby, "that/those" to things farther away`,
        "Can function as pronouns or determiners",
        `${pronoun} is ${number}`,
      ],
    });
  }

  // 5. RELATIVE PRONOUNS
  const relativePronounPattern = /\b(who|whom|whose|which|that)\b/gi;

  relativePronounPattern.lastIndex = 0;
  while ((match = relativePronounPattern.exec(sentence)) !== null) {
    const pronoun = match[0];

    elements.push({
      id: `pron-rel-${currentId++}`,
      text: pronoun,
      startPos: match.index!,
      endPos: match.index! + pronoun.length,
      type: "pronoun",
      description: `"${pronoun}" is a relative pronoun that introduces a relative clause and relates it to another word in the sentence.`,
      examples: getRelativePronounExamples(pronoun),
      rules: [
        "Introduces relative clauses",
        "Connects a dependent clause to the main clause",
        getRelativePronounRule(pronoun),
        "Can be the subject or object of the relative clause",
      ],
    });
  }

  // 6. INTERROGATIVE PRONOUNS
  const interrogativePronounPattern = /\b(who|whom|whose|what|which)\b/gi;

  interrogativePronounPattern.lastIndex = 0;
  while ((match = interrogativePronounPattern.exec(sentence)) !== null) {
    const pronoun = match[0];

    // Check if it's at the beginning of a sentence or after punctuation (likely interrogative)
    const isQuestion =
      match.index === 0 || /[.!?]\s*$/.test(sentence.substring(0, match.index));

    if (isQuestion || sentence.includes("?")) {
      elements.push({
        id: `pron-int-${currentId++}`,
        text: pronoun,
        startPos: match.index!,
        endPos: match.index! + pronoun.length,
        type: "pronoun",
        description: `"${pronoun}" is an interrogative pronoun used to ask questions about people, things, or possession.`,
        examples: [
          `${pronoun} is calling?`,
          `${pronoun} do you want?`,
          `${pronoun} book is this?`,
        ],
        rules: [
          "Used to ask questions",
          "Usually appears at the beginning of questions",
          getInterrogativePronounRule(pronoun),
          "Can function as subject or object in questions",
        ],
      });
    }
  }

  // 7. INDEFINITE PRONOUNS
  const indefinitePronounPattern =
    /\b(someone|somebody|something|anyone|anybody|anything|no one|nobody|nothing|everyone|everybody|everything|each|either|neither|one|other|another|some|any|all|both|few|many|several|most|much|little|less|more|none|such)\b/gi;

  indefinitePronounPattern.lastIndex = 0;
  while ((match = indefinitePronounPattern.exec(sentence)) !== null) {
    const pronoun = match[0];

    elements.push({
      id: `pron-indef-${currentId++}`,
      text: pronoun,
      startPos: match.index!,
      endPos: match.index! + pronoun.length,
      type: "pronoun",
      description: `"${pronoun}" is an indefinite pronoun that refers to non-specific people, places, or things.`,
      examples: [
        `${pronoun} is here`,
        `I saw ${pronoun} yesterday`,
        `${pronoun} will help you`,
      ],
      rules: [
        "Refers to non-specific people, places, or things",
        "Some are always singular, some always plural, some can be both",
        getIndefinitePronounRule(pronoun),
        "Used when the exact identity is unknown or unimportant",
      ],
    });
  }
};

const getPersonalPronounExamples = (
  pronoun: string,
  type: string
): string[] => {
  const subjectExamples = {
    i: ["I am going home", "I like pizza", "I can help you"],
    you: ["You are smart", "You should try this", "You look great"],
    he: ["He is my brother", "He plays guitar", "He works here"],
    she: ["She is a doctor", "She loves reading", "She can sing"],
    it: ["It is raining", "It looks good", "It works perfectly"],
    we: ["We are friends", "We study together", "We can do this"],
    they: ["They are coming", "They live nearby", "They help others"],
  };

  const objectExamples = {
    me: ["Call me later", "Give me the book", "Help me please"],
    you: ["I see you", "I'll call you", "This is for you"],
    him: ["I know him", "Give it to him", "Ask him about it"],
    her: ["I saw her", "Tell her the news", "This belongs to her"],
    it: ["I found it", "Look at it", "Take it with you"],
    us: ["Join us for dinner", "Help us move", "Visit us soon"],
    them: ["I like them", "Talk to them", "Give them a chance"],
  };

  if (type === "Subject") {
    return (
      subjectExamples[pronoun.toLowerCase() as keyof typeof subjectExamples] ||
      []
    );
  } else {
    return (
      objectExamples[pronoun.toLowerCase() as keyof typeof objectExamples] || []
    );
  }
};

const getPossessivePronounExamples = (type: string): string[] => {
  if (type === "Possessive Determiner") {
    return [
      "This is my car",
      "Your house is beautiful",
      "Their dog is friendly",
    ];
  } else {
    return ["This car is mine", "The choice is yours", "The victory is theirs"];
  }
};

const getRelativePronounExamples = (pronoun: string): string[] => {
  const examples = {
    who: ["The person who called", "Students who study hard"],
    whom: ["The person to whom I spoke", "The friend whom I met"],
    whose: ["The student whose book was lost", "The house whose roof is red"],
    which: ["The book which I read", "The car which is parked outside"],
    that: ["The movie that we watched", "The idea that you suggested"],
  };
  return examples[pronoun.toLowerCase() as keyof typeof examples] || [];
};

const getRelativePronounRule = (pronoun: string): string => {
  const rules = {
    who: "Used for people as subject of relative clause",
    whom: "Used for people as object of relative clause",
    whose: "Shows possession, used for people and things",
    which: "Used for things and animals",
    that: "Used for people, things, and animals (restrictive clauses)",
  };
  return (
    rules[pronoun.toLowerCase() as keyof typeof rules] ||
    "Introduces relative clauses"
  );
};

const getInterrogativePronounRule = (pronoun: string): string => {
  const rules = {
    who: "Asks about people (subject)",
    whom: "Asks about people (object)",
    whose: "Asks about possession",
    what: "Asks about things or actions",
    which: "Asks for choice among alternatives",
  };
  return (
    rules[pronoun.toLowerCase() as keyof typeof rules] || "Used in questions"
  );
};

const getIndefinitePronounRule = (pronoun: string): string => {
  const rules = {
    someone: "Singular, refers to an unknown person",
    somebody: "Singular, refers to an unknown person",
    something: "Singular, refers to an unknown thing",
    anyone: "Singular, any person",
    anybody: "Singular, any person",
    anything: "Singular, any thing",
    everyone: "Singular, all people",
    everybody: "Singular, all people",
    everything: "Singular, all things",
    "no one": "Singular, not any person",
    nobody: "Singular, not any person",
    nothing: "Singular, not any thing",
    all: "Can be singular or plural",
    some: "Can be singular or plural",
    most: "Can be singular or plural",
    few: "Always plural",
    many: "Always plural",
    several: "Always plural",
  };
  return (
    rules[pronoun.toLowerCase() as keyof typeof rules] ||
    "Refers to non-specific entities"
  );
};

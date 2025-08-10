import { GrammarElement } from "./types";

/**
 * Comprehensive Articles and Determiners Analysis Function
 */
export const identifyArticlesAndDeterminers = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;
  let currentId = elementId;

  // 1. DEFINITE ARTICLE
  const definiteArticlePattern = /\b(the)\b/gi;

  definiteArticlePattern.lastIndex = 0;
  while ((match = definiteArticlePattern.exec(sentence)) !== null) {
    const article = match[0];

    elements.push({
      id: `art-def-${currentId++}`,
      text: article,
      startPos: match.index!,
      endPos: match.index! + article.length,
      type: "article",
      description: `"${article}" is the definite article used before nouns when referring to something specific or previously mentioned.`,
      examples: [
        "The book on the table",
        "The sun is shining",
        "The first time I met her",
        "The United States",
        "The best solution",
      ],
      rules: [
        "Used when referring to something specific or unique",
        "Used when both speaker and listener know what is being referred to",
        "Used with superlatives (the best, the largest)",
        "Used with certain proper nouns (countries, oceans, mountain ranges)",
        "Used when something has been mentioned before",
      ],
    });
  }

  // 2. INDEFINITE ARTICLES
  const indefiniteArticlePattern = /\b(a|an)\b/gi;

  indefiniteArticlePattern.lastIndex = 0;
  while ((match = indefiniteArticlePattern.exec(sentence)) !== null) {
    const article = match[0];
    const isAn = article.toLowerCase() === "an";

    elements.push({
      id: `art-indef-${currentId++}`,
      text: article,
      startPos: match.index!,
      endPos: match.index! + article.length,
      type: "article",
      description: `"${article}" is an indefinite article used before singular countable nouns when referring to something non-specific.`,
      examples: isAn
        ? [
            "An apple a day",
            "An honest person",
            "An hour ago",
            "An umbrella",
            "An interesting story",
          ]
        : [
            "A book to read",
            "A university student",
            "A one-way ticket",
            "A beautiful day",
            "A unique opportunity",
          ],
      rules: [
        "Used with singular countable nouns",
        "Used when referring to something for the first time",
        isAn
          ? "Use 'an' before vowel sounds (not just vowel letters)"
          : "Use 'a' before consonant sounds (not just consonant letters)",
        "Cannot be used with plural nouns or uncountable nouns",
        "Used to mean 'one' or 'any'",
      ],
    });
  }

  // 3. DEMONSTRATIVE DETERMINERS
  const demonstrativeDeterminerPattern = /\b(this|that|these|those)\s+(?=\w)/gi;

  demonstrativeDeterminerPattern.lastIndex = 0;
  while ((match = demonstrativeDeterminerPattern.exec(sentence)) !== null) {
    const determiner = match[0].trim();
    const distance = ["this", "these"].includes(determiner.toLowerCase())
      ? "near"
      : "far";
    const number = ["this", "that"].includes(determiner.toLowerCase())
      ? "singular"
      : "plural";

    elements.push({
      id: `det-dem-${currentId++}`,
      text: determiner,
      startPos: match.index!,
      endPos: match.index! + determiner.length,
      type: "determiner",
      description: `"${determiner}" is a demonstrative determiner that points to specific ${number} nouns that are ${distance} in space or time.`,
      examples: [
        `${determiner} book is mine`,
        `I like ${determiner} idea`,
        `${determiner} flowers are beautiful`,
        `Remember ${determiner} time when...`,
      ],
      rules: [
        "Points to specific people, places, or things",
        `"This/these" for things nearby, "that/those" for things farther away`,
        `${determiner} is ${number}`,
        "Always followed by a noun when used as determiners",
        "Can indicate physical or temporal distance",
      ],
    });
  }

  // 4. POSSESSIVE DETERMINERS
  const possessiveDeterminerPattern =
    /\b(my|your|his|her|its|our|their)\s+(?=\w)/gi;

  possessiveDeterminerPattern.lastIndex = 0;
  while ((match = possessiveDeterminerPattern.exec(sentence)) !== null) {
    const determiner = match[0].trim();

    elements.push({
      id: `det-poss-${currentId++}`,
      text: determiner,
      startPos: match.index!,
      endPos: match.index! + determiner.length,
      type: "determiner",
      description: `"${determiner}" is a possessive determiner that shows ownership or relationship to the noun that follows.`,
      examples: [
        `${determiner} house is big`,
        `I found ${determiner} keys`,
        `${determiner} family is kind`,
        `Where is ${determiner} car?`,
      ],
      rules: [
        "Shows possession or relationship",
        "Always followed by a noun",
        "No apostrophe needed",
        "Must agree with the possessor, not the thing possessed",
        "Cannot be used alone (unlike possessive pronouns)",
      ],
    });
  }

  // 5. QUANTIFIER DETERMINERS
  const quantifierDeterminerPatterns = [
    // Numbers
    /\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)\s+(?=\w)/gi,

    // General quantifiers
    /\b(some|any|many|much|few|little|several|all|both|each|every|either|neither|enough|plenty|lots|most|more|less|fewer)\s+(?=\w)/gi,
  ];

  const quantifierTypes = ["Numeric", "General"];

  quantifierDeterminerPatterns.forEach((pattern, index) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const determiner = match[0].trim();
      const type = quantifierTypes[index];

      elements.push({
        id: `det-quant-${currentId++}`,
        text: determiner,
        startPos: match.index!,
        endPos: match.index! + determiner.length,
        type: "determiner",
        description: `"${determiner}" is a ${type.toLowerCase()} quantifier determiner that specifies the quantity or amount of the noun that follows.`,
        examples: getQuantifierExamples(determiner, type),
        rules: [
          `${type} quantifiers specify quantity or amount`,
          "Used before nouns to indicate how many or how much",
          getQuantifierRule(determiner),
          "Help make the meaning of nouns more precise",
        ],
      });
    }
  });

  // 6. INTERROGATIVE DETERMINERS
  const interrogativeDeterminerPattern = /\b(which|what|whose)\s+(?=\w)/gi;

  interrogativeDeterminerPattern.lastIndex = 0;
  while ((match = interrogativeDeterminerPattern.exec(sentence)) !== null) {
    const determiner = match[0].trim();

    // Check if it's likely in a question context
    const isQuestion =
      match.index === 0 ||
      /[.!?]\s*$/.test(sentence.substring(0, match.index)) ||
      sentence.includes("?");

    if (isQuestion) {
      elements.push({
        id: `det-int-${currentId++}`,
        text: determiner,
        startPos: match.index!,
        endPos: match.index! + determiner.length,
        type: "determiner",
        description: `"${determiner}" is an interrogative determiner used in questions to ask about specific nouns.`,
        examples: [
          `${determiner} book do you want?`,
          `${determiner} color do you prefer?`,
          `${determiner} car is parked outside?`,
        ],
        rules: [
          "Used in questions",
          "Always followed by a noun",
          getInterrogativeDeterminerRule(determiner),
          "Usually appears at the beginning of questions",
        ],
      });
    }
  }

  // 7. DISTRIBUTIVE DETERMINERS
  const distributiveDeterminerPattern =
    /\b(each|every|either|neither)\s+(?=\w)/gi;

  distributiveDeterminerPattern.lastIndex = 0;
  while ((match = distributiveDeterminerPattern.exec(sentence)) !== null) {
    const determiner = match[0].trim();

    elements.push({
      id: `det-dist-${currentId++}`,
      text: determiner,
      startPos: match.index!,
      endPos: match.index! + determiner.length,
      type: "determiner",
      description: `"${determiner}" is a distributive determiner that refers to individual members of a group.`,
      examples: [
        `${determiner} student received a book`,
        `${determiner} person has their own opinion`,
        `${determiner} day brings new challenges`,
      ],
      rules: [
        "Refers to individual members of a group",
        "Used with singular nouns and singular verbs",
        getDistributiveDeterminerRule(determiner),
        "Always followed by a singular noun",
      ],
    });
  }
};

const getQuantifierExamples = (determiner: string, type: string): string[] => {
  if (type === "Numeric") {
    return [
      `${determiner} books on the shelf`,
      `${determiner} people came to the party`,
      `I bought ${determiner} apples`,
    ];
  } else {
    return [
      `${determiner} students passed the exam`,
      `I need ${determiner} time to think`,
      `${determiner} information is helpful`,
    ];
  }
};

const getQuantifierRule = (determiner: string): string => {
  const rules: { [key: string]: string } = {
    some: "Used in positive statements and offers/requests",
    any: "Used in negative statements and questions",
    many: "Used with countable nouns",
    much: "Used with uncountable nouns",
    few: "Used with countable nouns (small amount)",
    little: "Used with uncountable nouns (small amount)",
    several: "Used with countable nouns (more than two but not many)",
    all: "Refers to the complete quantity",
    both: "Refers to two things together",
    each: "Refers to individual items in a group",
    every: "Refers to all items in a group individually",
    either: "Refers to one or the other of two",
    neither: "Refers to not one or the other of two",
  };
  return rules[determiner.toLowerCase()] || "Specifies quantity or amount";
};

const getInterrogativeDeterminerRule = (determiner: string): string => {
  const rules = {
    which: "Asks for choice among alternatives",
    what: "Asks for information about things",
    whose: "Asks about possession",
  };
  return (
    rules[determiner.toLowerCase() as keyof typeof rules] || "Used in questions"
  );
};

const getDistributiveDeterminerRule = (determiner: string): string => {
  const rules = {
    each: "Every individual one of two or more",
    every: "All individual ones without exception",
    either: "One or the other of two alternatives",
    neither: "Not one or the other of two",
  };
  return (
    rules[determiner.toLowerCase() as keyof typeof rules] ||
    "Refers to individuals in a group"
  );
};

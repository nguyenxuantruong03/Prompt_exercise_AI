import { GrammarElement } from "./types";

/**
 * Comprehensive Preposition Analysis Function
 */
export const identifyPrepositionsComprehensive = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;
  let currentId = elementId;

  // 1. SIMPLE PREPOSITIONS (Single word prepositions)
  const simplePrepositionPatterns = [
    // Location/Position prepositions
    /\b(in|on|at|under|over|above|below|beneath|behind|beside|between|among|amongst|within|inside|outside|near|by|next to|close to|far from|opposite|across|through|throughout|around|round|along|past|beyond|against|onto|into|out of|off)\b/gi,

    // Time prepositions
    /\b(at|on|in|during|for|since|until|till|by|before|after|from|to|within|throughout|over|past|beyond|around|about)\b/gi,

    // Direction/Movement prepositions
    /\b(to|from|into|onto|out of|off|through|across|over|under|up|down|along|around|past|beyond|toward|towards|away from)\b/gi,

    // Manner/Method prepositions
    /\b(by|with|without|through|via|per|according to|in accordance with|by means of|in spite of|despite|instead of|rather than)\b/gi,

    // Cause/Reason prepositions
    /\b(because of|due to|owing to|thanks to|on account of|as a result of|for the sake of|in view of|with regard to|with respect to)\b/gi,

    // Purpose prepositions
    /\b(for|to|in order to|so as to|with a view to|for the purpose of|with the intention of)\b/gi,
  ];

  const prepositionCategories = [
    "Location/Position",
    "Time",
    "Direction/Movement",
    "Manner/Method",
    "Cause/Reason",
    "Purpose",
  ];

  simplePrepositionPatterns.forEach((pattern, categoryIndex) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const preposition = match[0];
      const category = prepositionCategories[categoryIndex];

      elements.push({
        id: `prep-simple-${currentId++}`,
        text: preposition,
        startPos: match.index!,
        endPos: match.index! + preposition.length,
        type: "preposition",
        description: `"${preposition}" is a ${category.toLowerCase()} preposition that shows the relationship between words in terms of ${category.toLowerCase()}.`,
        examples: getSimplePrepositionExamples(preposition, category),
        rules: [
          `${category} prepositions indicate ${category.toLowerCase()} relationships`,
          "Always followed by a noun, pronoun, or noun phrase",
          "Form prepositional phrases with their objects",
          "Cannot stand alone in a sentence",
        ],
      });
    }
  });

  // 2. COMPOUND PREPOSITIONS (Multi-word prepositions)
  const compoundPrepositionPattern =
    /\b(according to|because of|due to|instead of|in spite of|on account of|with regard to|with respect to|in accordance with|by means of|for the sake of|in view of|as far as|as well as|apart from|aside from|along with|together with|in addition to|in front of|in back of|on top of|at the bottom of|in the middle of|on behalf of|in place of|in case of|in terms of|with reference to|by way of|for the purpose of|with the exception of|in comparison with|in contrast to|in relation to|with the help of|under the influence of|at the expense of|in the course of|in the event of|in the face of|in the light of|on the basis of|on the ground of|for the reason of|with the aim of|in the direction of|in the process of|in the absence of|in the presence of|at the mercy of|under the protection of|in the care of|in the charge of|in the custody of|in the company of|in the service of|at the service of|in the interest of|for the benefit of|to the advantage of|to the disadvantage of|at the cost of|at the risk of|in the hope of|in the expectation of|with the intention of|for the duration of|throughout the course of)\b/gi;

  compoundPrepositionPattern.lastIndex = 0;
  while ((match = compoundPrepositionPattern.exec(sentence)) !== null) {
    const preposition = match[0];

    elements.push({
      id: `prep-compound-${currentId++}`,
      text: preposition,
      startPos: match.index!,
      endPos: match.index! + preposition.length,
      type: "preposition",
      description: `"${preposition}" is a compound preposition (multi-word preposition) that expresses complex relationships between sentence elements.`,
      examples: getCompoundPrepositionExamples(preposition),
      rules: [
        "Compound prepositions consist of two or more words",
        "Often more formal than simple prepositions",
        "Express complex relationships between sentence elements",
        "Always followed by a noun, pronoun, or noun phrase",
      ],
    });
  }

  // 3. PHRASAL PREPOSITIONS (Prepositions that work with specific verbs)
  const phrasalPrepositionPattern =
    /\b(up to|down to|over to|back to|forward to|up with|down with|along with|away with|off with|out with|in with|on with|through with|over with|done with|finished with|fed up with|sick of|tired of|proud of|afraid of|ashamed of|capable of|fond of|full of|short of|sure of|aware of|conscious of|guilty of|innocent of|jealous of|envious of|suspicious of|typical of|characteristic of|reminiscent of|indicative of|suggestive of|composed of|made of|consist of|comprised of|based on|focused on|concentrated on|dependent on|reliant on|keen on|hooked on|engaged in|involved in|interested in|absorbed in|immersed in|lost in|wrapped up in|caught up in|tied up with|associated with|connected with|linked with|related to|compared to|opposed to|contrary to|similar to|identical to|equivalent to|equal to|close to|next to|adjacent to|prior to|subsequent to|according to|owing to|due to|thanks to|subject to|liable to|prone to|immune to|resistant to|sensitive to|allergic to|accustomed to|used to|addicted to|committed to|devoted to|dedicated to|attached to|loyal to|faithful to|true to|kind to|nice to|good to|bad to|cruel to|mean to|rude to|polite to)\b/gi;

  phrasalPrepositionPattern.lastIndex = 0;
  while ((match = phrasalPrepositionPattern.exec(sentence)) !== null) {
    const preposition = match[0];

    elements.push({
      id: `prep-phrasal-${currentId++}`,
      text: preposition,
      startPos: match.index!,
      endPos: match.index! + preposition.length,
      type: "preposition",
      description: `"${preposition}" is a phrasal preposition that often follows adjectives or verbs to complete their meaning.`,
      examples: getPhrasalPrepositionExamples(preposition),
      rules: [
        "Often follows specific adjectives or verbs",
        "Completes the meaning of the preceding word",
        "Forms fixed expressions with certain words",
        "Cannot be separated from the word they follow",
      ],
    });
  }

  // 4. PARTICIPIAL PREPOSITIONS (Prepositions derived from participles)
  const participialPrepositionPattern =
    /\b(considering|regarding|concerning|including|excluding|excepting|following|during|pending|barring|notwithstanding|given|granted|assuming|supposing|providing|provided|seeing|judging|speaking|talking|touching|respecting|saving)\b/gi;

  participialPrepositionPattern.lastIndex = 0;
  while ((match = participialPrepositionPattern.exec(sentence)) !== null) {
    const preposition = match[0];

    elements.push({
      id: `prep-participial-${currentId++}`,
      text: preposition,
      startPos: match.index!,
      endPos: match.index! + preposition.length,
      type: "preposition",
      description: `"${preposition}" is a participial preposition derived from a participle form that functions as a preposition.`,
      examples: getParticipialPrepositionExamples(preposition),
      rules: [
        "Derived from present or past participles",
        "Function as prepositions despite their verb origins",
        "Often introduce additional information or conditions",
        "More formal in tone than simple prepositions",
      ],
    });
  }

  // 5. PREPOSITIONS IN FIXED EXPRESSIONS
  const fixedExpressionPattern =
    /\b(in charge of|in favor of|in need of|in search of|in honor of|in memory of|in celebration of|in recognition of|in appreciation of|in acknowledgment of|in possession of|in control of|in command of|in pursuit of|in quest of|in danger of|in fear of|in hope of|in expectation of|in anticipation of|in preparation for|in exchange for|in return for|in payment for|in compensation for|in reward for|in punishment for|in response to|in reply to|in answer to|in reaction to|in addition to|in contrast to|in comparison to|in relation to|in reference to|in regard to|in respect to|in connection with|in association with|in collaboration with|in cooperation with|in partnership with|in alliance with|in conflict with|in disagreement with|in agreement with|in harmony with|in tune with|in line with|in keeping with|in accordance with|in compliance with|in conformity with|on the verge of|on the brink of|on the edge of|on the point of|on the eve of|on the occasion of|at the expense of|at the cost of|at the risk of|at the mercy of|at the hands of|by virtue of|by means of|by way of|by reason of|for the sake of|for the purpose of|for the benefit of|with the help of|with the aid of|with the assistance of|under the influence of|under the impression of|under the assumption of)\b/gi;

  fixedExpressionPattern.lastIndex = 0;
  while ((match = fixedExpressionPattern.exec(sentence)) !== null) {
    const expression = match[0];

    elements.push({
      id: `prep-fixed-${currentId++}`,
      text: expression,
      startPos: match.index!,
      endPos: match.index! + expression.length,
      type: "preposition",
      description: `"${expression}" is a fixed prepositional expression that has a specific, idiomatic meaning.`,
      examples: getFixedExpressionExamples(expression),
      rules: [
        "Fixed expressions with specific meanings",
        "Cannot be broken apart or modified",
        "Often idiomatic in nature",
        "Must be learned as complete units",
      ],
    });
  }
};

const getSimplePrepositionExamples = (
  preposition: string,
  category: string
): string[] => {
  const examples: { [key: string]: { [key: string]: string[] } } = {
    "Location/Position": {
      in: ["in the house", "in the park", "in London"],
      on: ["on the table", "on the wall", "on Monday"],
      at: ["at home", "at school", "at 3 o'clock"],
      under: ["under the bridge", "under the table"],
      over: ["over the rainbow", "over the bridge"],
    },
    Time: {
      at: ["at 3 o'clock", "at noon", "at midnight"],
      on: ["on Monday", "on Christmas Day"],
      in: ["in January", "in 2023", "in the morning"],
      during: ["during the meeting", "during summer"],
      for: ["for two hours", "for a week"],
    },
    "Direction/Movement": {
      to: ["go to school", "drive to work"],
      from: ["from home to work", "from London"],
      into: ["walk into the room", "jump into water"],
      through: ["through the tunnel", "through the park"],
    },
  };

  return (
    examples[category]?.[preposition.toLowerCase()] || [
      `with ${preposition}`,
      `${preposition} something`,
    ]
  );
};

const getCompoundPrepositionExamples = (preposition: string): string[] => {
  const examples: { [key: string]: string[] } = {
    "according to": [
      "According to the weather report",
      "According to my teacher",
    ],
    "because of": ["Because of the rain", "Because of his illness"],
    "due to": ["Due to technical problems", "Due to heavy traffic"],
    "instead of": ["Instead of going home", "Instead of pizza"],
    "in spite of": ["In spite of the weather", "In spite of difficulties"],
  };

  return (
    examples[preposition.toLowerCase()] || [
      `${preposition} something`,
      `We talked ${preposition} the issue`,
    ]
  );
};

const getPhrasalPrepositionExamples = (preposition: string): string[] => {
  const examples: { [key: string]: string[] } = {
    "up to": ["It's up to you", "Up to 50 people"],
    "fond of": ["She's fond of chocolate", "He's fond of reading"],
    "afraid of": ["I'm afraid of spiders", "Don't be afraid of failure"],
    "interested in": ["I'm interested in music", "She's interested in science"],
    "good to": ["Be good to your parents", "It's good to see you"],
  };

  return (
    examples[preposition.toLowerCase()] || [
      `I am ${preposition} this`,
      `She is ${preposition} learning`,
    ]
  );
};

const getParticipialPrepositionExamples = (preposition: string): string[] => {
  const examples: { [key: string]: string[] } = {
    considering: ["Considering the circumstances", "Considering his age"],
    regarding: ["Regarding your question", "Regarding the meeting"],
    including: [
      "Everyone came, including John",
      "The price is $50, including tax",
    ],
    following: ["Following the meeting", "Following his speech"],
    during: ["During the concert", "During winter"],
  };

  return (
    examples[preposition.toLowerCase()] || [
      `${preposition} the situation`,
      `${preposition} this matter`,
    ]
  );
};

const getFixedExpressionExamples = (expression: string): string[] => {
  const examples: { [key: string]: string[] } = {
    "in charge of": [
      "She's in charge of the project",
      "Who's in charge of this?",
    ],
    "in favor of": [
      "I'm in favor of the proposal",
      "The vote was in favor of change",
    ],
    "in need of": [
      "The building is in need of repair",
      "We're in need of help",
    ],
    "on the verge of": [
      "He's on the verge of tears",
      "On the verge of success",
    ],
    "at the expense of": [
      "He succeeded at the expense of others",
      "Growth at the expense of quality",
    ],
  };

  return (
    examples[expression.toLowerCase()] || [
      `This is ${expression} something`,
      `We are ${expression} progress`,
    ]
  );
};

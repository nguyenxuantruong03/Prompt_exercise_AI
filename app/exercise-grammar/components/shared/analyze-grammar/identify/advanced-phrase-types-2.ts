import { GrammarElement } from "./types";

/**
 * Identifies additional advanced phrase types including causative, dangling participle,
 * appositive, and inversion patterns (Part 2 of advanced phrase identification)
 */
export const identifyAdvancedPhraseTypes2 = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // 13. CAUSATIVE PHRASES
  const causativePhrasePatterns = [
    /\b(make|let|have|get)\s+\w+\s+\w+(?:\s+\w+)*\b/gi,
    /\b(cause|force|allow|enable|permit|help)\s+\w+\s+to\s+\w+\b/gi,
  ];

  causativePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `causative_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "causativeVerbPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a causative phrase expressing that someone causes someone else to do something.`,
        examples: [
          "make him go",
          "let her stay",
          "have it repaired",
          "get them working",
          "cause him to worry",
        ],
        rules: [
          "Make/let + object + bare infinitive",
          "Have/get + object + past participle (for services)",
          "Other causative verbs + object + to-infinitive",
          "Express causing or allowing actions",
        ],
      });
    }
  });

  // 14. DANGLING PARTICIPLE PHRASES
  const danglingParticiplePhrasePatterns = [
    /\b(?:walking|running|driving|sitting|standing|looking|thinking|considering|realizing|understanding)\s+\w+(?:\s+\w+)*,\s+\w+\s+\w+/gi,
    /\b(?:having|being|seen|heard|told|asked|given|taken|made|done)\s+\w+(?:\s+\w+)*,\s+\w+\s+\w+/gi,
  ];

  danglingParticiplePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `dangling_participle_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "danglingParticiplePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" may be a dangling participle phrase where the subject of the participle is unclear or incorrect.`,
        examples: [
          "Walking down the street, the house looked beautiful",
          "Having finished homework, the TV was turned on",
        ],
        rules: [
          "Participle phrase at beginning of sentence",
          "Subject of participle should match main clause subject",
          "When subjects don't match, it creates confusion",
          "Often considered a grammatical error",
        ],
      });
    }
  });

  // 15. APPOSITIVE PHRASES
  const appositivePhrasePatterns = [
    /\b\w+,\s+(?:a|an|the)\s+\w+(?:\s+\w+)*(?:\s+of\s+\w+)*,\s+\w+/gi,
    /\b\w+,\s+(?:who|which)\s+(?:is|was|are|were)\s+\w+(?:\s+\w+)*,\s+\w+/gi,
    /\b\w+,\s+\w+(?:\s+\w+)*\s+(?:and|or)\s+\w+(?:\s+\w+)*,\s+\w+/gi,
  ];

  appositivePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `appositive_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "appositivePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" contains an appositive phrase that renames or explains a noun.`,
        examples: [
          "John, my brother, arrived",
          "The book, a bestseller, was expensive",
          "Paris, the city of lights, is beautiful",
        ],
        rules: [
          "Provides additional information about a noun",
          "Usually set off by commas",
          "Can be essential or non-essential",
          "Renames, describes, or explains the noun",
        ],
      });
    }
  });

  // 16. INVERTED PHRASES
  const invertedPhrasePatterns = [
    /\b(never|rarely|seldom|hardly|scarcely|barely|little|not\s+only|not\s+until|no\s+sooner|only\s+(?:when|if|after|then)|here|there)\s+(?:am|is|are|was|were|do|does|did|have|has|had|will|would|can|could|may|might|must|should)\s+\w+/gi,
    /\b(?:should|were|had)\s+\w+(?:\s+\w+)*,?\s+\w+\s+(?:would|will|can|could)\s+\w+/gi,
  ];

  invertedPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `inverted_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "subjectVerbInversionPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an inverted phrase where normal word order is changed for emphasis or style.`,
        examples: [
          "Never have I seen",
          "Here comes the bus",
          "Should you need help",
          "Were I you",
          "Little did he know",
        ],
        rules: [
          "Auxiliary verb comes before subject",
          "Used after negative adverbs at sentence start",
          "Common in conditional sentences without 'if'",
          "Creates formal or emphatic tone",
        ],
      });
    }
  });

  return elements;
};

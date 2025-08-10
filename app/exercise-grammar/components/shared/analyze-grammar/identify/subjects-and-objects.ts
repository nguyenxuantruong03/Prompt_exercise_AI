import { GrammarElement } from "./types";

/**
 * Identifies subjects and objects in sentences based on their position relative to verbs
 * and grammatical patterns. Includes helper functions for word position analysis.
 */
export const identifySubjectsAndObjects = (
  sentence: string,
  elements: GrammarElement[]
) => {
  const words = sentence.toLowerCase().split(/\s+/);
  const originalWords = sentence.split(/\s+/);

  // Common subject indicators
  const subjectWords = ["i", "you", "he", "she", "it", "we", "they"];
  const subjectNouns =
    /\b(student|teacher|cat|dog|book|car|house|man|woman|child|children|people|person|family|friend|friends|company|government|school|university)\b/gi;

  // Find verbs to help identify subjects and objects
  const verbElements = elements.filter((el) => el.type === "verb");

  // Look for subjects before verbs
  words.forEach((word, index) => {
    if (subjectWords.includes(word) && index < words.length - 1) {
      // Check if next words contain a verb
      const hasVerbAfter = words
        .slice(index + 1, index + 4)
        .some((w) =>
          verbElements.some((ve) => ve.text.toLowerCase().includes(w))
        );

      if (hasVerbAfter) {
        const actualWord = originalWords[index];
        const wordStart = getWordPosition(sentence, actualWord, index);

        if (
          wordStart !== -1 &&
          !elements.some((el) => el.startPos === wordStart)
        ) {
          elements.push({
            id: `subject_${word}_${index}`,
            text: actualWord,
            type: "subject",
            startPos: wordStart,
            endPos: wordStart + actualWord.length,
            description: `"${actualWord}" functions as the subject of this clause.`,
            examples: ["I run", "She sings", "They work hard"],
            rules: [
              "Subjects perform the action or are described by the verb",
              "Subjects usually come before verbs in English",
              "Subjects determine verb agreement (singular/plural)",
            ],
          });
        }
      }
    }
  });

  // Look for noun subjects
  let match: RegExpExecArray | null;
  while ((match = subjectNouns.exec(sentence)) !== null) {
    const wordIndex = getWordIndex(sentence, match.index);
    const hasVerbAfter =
      wordIndex < words.length - 3 &&
      words
        .slice(wordIndex + 1, wordIndex + 4)
        .some((w) =>
          verbElements.some((ve) => ve.text.toLowerCase().includes(w))
        );

    if (
      hasVerbAfter &&
      !elements.some(
        (el) =>
          el.startPos <= match!.index &&
          el.endPos >= match!.index + match![0].length
      )
    ) {
      elements.push({
        id: `subject_noun_${match[0]}_${match.index}`,
        text: match[0],
        type: "subject",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" functions as the subject of this sentence.`,
        examples: ["The student studies", "A cat sleeps", "People work"],
        rules: [
          "Noun subjects can be preceded by articles or determiners",
          "Subjects determine verb agreement",
          "Can be simple nouns or complex noun phrases",
        ],
      });
    }
  }

  // Simple object detection - words that follow transitive verbs
  const transitiveVerbs = [
    "see",
    "have",
    "get",
    "make",
    "take",
    "give",
    "find",
    "know",
    "want",
    "like",
    "love",
    "hate",
    "buy",
    "sell",
    "read",
    "write",
    "eat",
    "drink",
  ];

  words.forEach((word, index) => {
    if (transitiveVerbs.includes(word) && index < words.length - 1) {
      const nextWord = words[index + 1];
      if (
        !["the", "a", "an", "this", "that", "these", "those"].includes(nextWord)
      ) {
        // Check if it's a potential object
        const actualNextWord = originalWords[index + 1];
        const wordStart = getWordPosition(sentence, actualNextWord, index + 1);

        if (
          wordStart !== -1 &&
          !elements.some(
            (el) =>
              el.startPos <= wordStart &&
              el.endPos >= wordStart + actualNextWord.length
          )
        ) {
          elements.push({
            id: `object_${nextWord}_${index}`,
            text: actualNextWord,
            type: "object",
            startPos: wordStart,
            endPos: wordStart + actualNextWord.length,
            description: `"${actualNextWord}" functions as the direct object.`,
            examples: ["see him", "have money", "read books", "eat apples"],
            rules: [
              "Direct objects receive the action of the verb",
              "Objects usually follow transitive verbs",
              "Can be nouns, pronouns, or noun phrases",
            ],
          });
        }
      }
    }
  });
};

// Helper function to get word position in sentence
export const getWordPosition = (
  sentence: string,
  word: string,
  wordIndex: number
): number => {
  const words = sentence.split(/\s+/);
  let position = 0;

  for (let i = 0; i < wordIndex && i < words.length; i++) {
    position = sentence.indexOf(words[i], position) + words[i].length;
    // Skip whitespace
    while (position < sentence.length && /\s/.test(sentence[position])) {
      position++;
    }
  }

  return sentence.indexOf(word, position);
};

// Helper function to get word index from character position
export const getWordIndex = (
  sentence: string,
  charPosition: number
): number => {
  const beforePosition = sentence.substring(0, charPosition);
  return beforePosition.split(/\s+/).length - 1;
};

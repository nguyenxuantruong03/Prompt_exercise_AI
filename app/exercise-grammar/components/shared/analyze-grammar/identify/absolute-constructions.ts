import { GrammarElement } from "./types";

/**
 * Identifies absolute constructions - independent phrases with their own subjects
 * that modify the entire sentence, such as weather permitting, all things considered, etc.
 */
export const identifyAbsoluteConstructions = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // ABSOLUTE CONSTRUCTIONS - Independent phrases with their own subjects
  const absoluteConstructionPatterns = [
    // Weather permitting type constructions
    /\b(weather\s+permitting|time\s+permitting|health\s+permitting|circumstances\s+permitting|conditions\s+permitting)\b/gi,

    // All things considered type constructions
    /\b(all\s+things\s+considered|everything\s+considered|all\s+factors\s+considered|all\s+aspects\s+considered)\b/gi,

    // Noun + participle constructions
    /\b(\w+\s+(?:being|having\s+been|gone|done|finished|completed|considered|taken|given|seen|heard|said|told))\s*,\s*\w+/gi,

    // With + noun + participle
    /\b(with\s+(?:the\s+|a\s+|an\s+|his\s+|her\s+|my\s+|your\s+|our\s+|their\s+)?\w+\s+(?:being|having|done|finished|completed|gone|taken|given|seen|heard|considered|examined|analyzed|studied|reviewed|discussed|mentioned|noted|observed))\b/gi,

    // Body parts and absolute constructions
    /\b((?:his|her|my|your|our|their)\s+(?:hands|arms|legs|feet|eyes|head|face|voice)\s+(?:shaking|trembling|raised|lowered|closed|open|broken|tired|strong|weak))\s*,\s*\w+/gi,
  ];

  absoluteConstructionPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `absolute_construction_${elementId++}`,
        text: match[1] || match[0],
        type: "participialPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${(
          match[1] || match[0]
        ).trim()}" is an absolute construction - an independent grammatical unit that modifies the whole sentence.`,
        examples: [
          "Weather permitting, we'll have a picnic",
          "All things considered, it was a success",
          "The work being finished, we went home",
          "With her homework done, she watched TV",
          "His hands shaking, he signed the paper",
        ],
        rules: [
          "Absolute constructions are independent phrases that modify entire sentences",
          "Often consist of a noun or pronoun + participle or adjective",
          "Usually set off by commas",
          "Add descriptive detail or provide context",
          "Can show time, cause, condition, or accompanying circumstances",
        ],
      });
    }
  });

  return elements;
};

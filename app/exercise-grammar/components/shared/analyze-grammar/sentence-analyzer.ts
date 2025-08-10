import { GrammarElement } from "@/types/grammar-analysis";
import {
  identifyPhraseClusters,
  identifyComplexStructures,
  identifyPhrases,
  identifySpecificVerbPhrases,
  identifyAdvancedPhraseTypes,
  identifyAdvancedPhraseTypes2,
  identifyAbsoluteConstructions,
  identifyAdvancedDiscourseElements,
  identifyBasicElements,
  identifySubjectsAndObjects,
  identifyAdjectiveTypes,
  identifyAdverbTypes,
  identifyPronounTypes,
  identifyArticlesAndDeterminers,
  identifyPrepositionsComprehensive,
  identifyConjunctionsAndLinkingWords,
} from "./identify";

export interface GrammarResult {
  originalText: string;
  elements: GrammarElement[];
}

/**
 * Remove duplicate elements based on position overlap and priority
 */
const removeDuplicateElements = (
  elements: GrammarElement[]
): GrammarElement[] => {
  const filtered: GrammarElement[] = [];

  // Sort elements by start position, then by specificity (longer elements first)
  const sorted = elements.sort((a, b) => {
    if (a.startPos !== b.startPos) {
      return a.startPos - b.startPos;
    }
    // If same start position, prioritize longer elements (more specific)
    return b.endPos - b.startPos - (a.endPos - a.startPos);
  });

  for (const element of sorted) {
    // Check if this element overlaps with any already accepted element
    const hasOverlap = filtered.some((existing) => {
      const elementStart = element.startPos || 0;
      const elementEnd = element.endPos || elementStart + element.text.length;
      const existingStart = existing.startPos || 0;
      const existingEnd =
        existing.endPos || existingStart + existing.text.length;

      // Check for overlap
      return elementStart < existingEnd && elementEnd > existingStart;
    });

    if (!hasOverlap) {
      filtered.push(element);
    }
  }

  return filtered.sort((a, b) => a.startPos - b.startPos);
};

/**
 * Main grammar analysis function that coordinates all identification functions
 */
export const grammarAnalysis = (sentence: string): GrammarResult => {
  if (!sentence || sentence.trim().length === 0) {
    return { originalText: sentence, elements: [] };
  }

  const elements: GrammarElement[] = [];
  let elementId = 0;

  // Apply all identify functions with proper parameter handling
  identifySubjectsAndObjects(sentence, elements);

  identifyPhraseClusters(sentence, elements, elementId);
  elementId += 1000;

  identifyComplexStructures(sentence, elements, elementId);
  elementId += 1000;

  identifyPhrases(sentence, elements, elementId);
  elementId += 1000;

  identifySpecificVerbPhrases(sentence, elements, elementId);
  elementId += 1000;

  identifyAdvancedPhraseTypes(sentence, elements, elementId);
  elementId += 1000;

  identifyAdvancedPhraseTypes2(sentence, elements, elementId);
  elementId += 1000;

  identifyAbsoluteConstructions(sentence, elements, elementId);
  elementId += 1000;

  identifyBasicElements(sentence, elements, elementId);
  elementId += 1000;

  identifyAdvancedDiscourseElements(sentence, elements, elementId);
  elementId += 1000;

  // Apply comprehensive identify functions
  identifyAdjectiveTypes(sentence, elements, elementId);
  elementId += 1000;

  identifyAdverbTypes(sentence, elements, elementId);
  elementId += 1000;

  identifyPronounTypes(sentence, elements, elementId);
  elementId += 1000;

  identifyArticlesAndDeterminers(sentence, elements, elementId);
  elementId += 1000;

  identifyPrepositionsComprehensive(sentence, elements, elementId);
  elementId += 1000;

  identifyConjunctionsAndLinkingWords(sentence, elements, elementId);
  elementId += 1000;


  // Remove duplicates and return
  const deduplicatedElements = removeDuplicateElements(elements);

  return { originalText: sentence, elements: deduplicatedElements };
};

/**
 * Backward compatibility alias
 */
export const analyzeSentenceGrammar = grammarAnalysis;

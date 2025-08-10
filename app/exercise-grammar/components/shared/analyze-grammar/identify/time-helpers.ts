import { GrammarElement } from "./types";

/**
 * Helper function to identify the type of time reference in text
 */
export const identifyTimeType = (text: string): string => {
  const lowerText = text.toLowerCase();

  if (
    lowerText.includes("last") ||
    lowerText.includes("yesterday") ||
    lowerText.includes("ago") ||
    lowerText.includes("previous") ||
    lowerText.includes("past") ||
    lowerText.includes("before")
  ) {
    return "past time";
  } else if (
    lowerText.includes("next") ||
    lowerText.includes("tomorrow") ||
    lowerText.includes("future") ||
    lowerText.includes("coming") ||
    lowerText.includes("upcoming") ||
    lowerText.includes("following")
  ) {
    return "future time";
  } else if (
    lowerText.includes("every") ||
    lowerText.includes("always") ||
    lowerText.includes("never") ||
    lowerText.includes("usually") ||
    lowerText.includes("often") ||
    lowerText.includes("sometimes") ||
    lowerText.includes("rarely") ||
    lowerText.includes("times") ||
    lowerText.includes("once") ||
    lowerText.includes("twice")
  ) {
    return "frequency";
  } else if (
    lowerText.includes("for") ||
    lowerText.includes("during") ||
    lowerText.includes("throughout") ||
    lowerText.includes("all") ||
    lowerText.includes("since") ||
    lowerText.includes("until")
  ) {
    return "duration";
  } else if (
    lowerText.includes("now") ||
    lowerText.includes("today") ||
    lowerText.includes("this") ||
    lowerText.includes("current") ||
    lowerText.includes("present")
  ) {
    return "present time";
  } else {
    return "time reference";
  }
};

/**
 * Helper function to identify conditional type based on text patterns
 */
export const identifyConditionalType = (
  text: string
): GrammarElement["type"] => {
  const lowerText = text.toLowerCase();

  if (lowerText.includes("if") && lowerText.includes("will")) {
    return "firstConditional";
  } else if (
    lowerText.includes("if") &&
    (lowerText.includes("would") ||
      lowerText.includes("could") ||
      lowerText.includes("might"))
  ) {
    return "secondConditional";
  } else if (
    lowerText.includes("if") &&
    (lowerText.includes("had") || lowerText.includes("would have"))
  ) {
    return "thirdConditional";
  } else if (
    lowerText.includes("if") &&
    !lowerText.includes("will") &&
    !lowerText.includes("would")
  ) {
    return "zeroConditional";
  }

  return "conditional";
};

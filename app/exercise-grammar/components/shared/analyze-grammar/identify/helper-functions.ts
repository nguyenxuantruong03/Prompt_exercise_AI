import type { GrammarElement } from "./types";

// Helper functions for determining grammatical and semantic roles

export const determineGrammaticalFunction = (
  type: string,
  position: string
): string => {
  const functionMap: { [key: string]: { [pos: string]: string } } = {
    nounPhrase: {
      sentence_start: "subject",
      after_verb: "direct object",
      prepositional_chain: "object of preposition",
      between_subject_verb: "modifier",
      default: "noun phrase function",
    },
    verbPhrase: {
      sentence_start: "main predicate",
      after_verb: "compound predicate",
      middle_position: "predicate",
      default: "verbal predicate",
    },
    prepositionalPhrase: {
      sentence_start: "fronted modifier",
      after_verb: "adverbial complement",
      middle_position: "adjectival/adverbial modifier",
      default: "prepositional modifier",
    },
    adverbialPhrase: {
      sentence_start: "sentence adverbial",
      middle_position: "modifier",
      sentence_end: "end-focus adverbial",
      default: "adverbial function",
    },
    timePhrase: {
      sentence_start: "temporal setting",
      sentence_end: "temporal frame",
      middle_position: "temporal modifier",
      default: "temporal expression",
    },
  };

  const typeMap = functionMap[type] || functionMap.default || {};
  return typeMap[position] || typeMap.default || `${type} function`;
};

export const determineSemanticRole = (
  text: string,
  beforeText: string,
  afterText: string
): string => {
  const textLower = text.toLowerCase();

  // Time-related semantic roles
  if (
    /\b(?:when|time|moment|day|week|month|year|morning|evening|yesterday|tomorrow|now|then|before|after|during|while)\b/.test(
      textLower
    )
  ) {
    return "temporal";
  }

  // Location-related semantic roles
  if (
    /\b(?:where|place|here|there|home|school|office|city|country|in|on|at|under|over|beside|near)\b/.test(
      textLower
    )
  ) {
    return "locative";
  }

  // Manner-related semantic roles
  if (
    /\b(?:how|way|manner|carefully|quickly|slowly|well|badly)\b/.test(textLower)
  ) {
    return "manner";
  }

  // Cause/reason semantic roles
  if (/\b(?:because|since|as|due to|owing to|reason|cause)\b/.test(textLower)) {
    return "causal";
  }

  // Purpose semantic roles
  if (/\b(?:to|in order to|so that|purpose|aim|goal)\b/.test(textLower)) {
    return "purposive";
  }

  // Agent/actor semantic roles
  if (
    beforeText.length === 0 &&
    /\b(?:I|he|she|we|they|the\s+\w+)\b/.test(textLower)
  ) {
    return "agent";
  }

  // Patient/theme semantic roles
  if (/\b(?:was|were|is|are|been)\s+\w+(?:ed|en)\b/.test(afterText)) {
    return "patient";
  }

  // Instrument semantic roles
  if (/\b(?:with|using|by means of|through)\b/.test(beforeText)) {
    return "instrument";
  }

  return "unspecified";
};

export const analyzeTenseInfo = (verbPhrase: string) => {
  const text = verbPhrase.toLowerCase();

  // Determine tense
  let tense = "present";
  if (/\b(?:was|were|had|did)\b/.test(text)) {
    tense = "past";
  } else if (/\b(?:will|shall)\b/.test(text)) {
    tense = "future";
  }

  // Determine aspect
  let aspect = "simple";
  if (/\b(?:have|has|had)\s+\w+(?:ed|en)\b/.test(text)) {
    aspect = "perfect";
  } else if (/\b(?:am|is|are|was|were)\s+\w+ing\b/.test(text)) {
    aspect = "continuous";
  } else if (/\b(?:have|has|had)\s+been\s+\w+ing\b/.test(text)) {
    aspect = "perfect continuous";
  }

  // Determine voice
  let voice = "active";
  if (/\b(?:am|is|are|was|were|be|been)\s+\w+(?:ed|en)\b/.test(text)) {
    voice = "passive";
  }

  // Determine mood
  let mood = "indicative";
  if (/\b(?:would|could|should|might|may|must)\b/.test(text)) {
    mood = "conditional/modal";
  } else if (text.startsWith("if") || /\bwere\b/.test(text)) {
    mood = "subjunctive";
  }

  return {
    tense,
    aspect,
    voice,
    mood,
    confidence: 0.8,
  };
};

export const removeOverlappingElements = (
  elements: GrammarElement[]
): GrammarElement[] => {
  // Sort by start position first
  const sorted = [...elements].sort((a, b) => a.startPos - b.startPos);
  const result: GrammarElement[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    let shouldAdd = true;

    // Check for overlaps with already added elements
    for (const existing of result) {
      // Check if current overlaps with existing
      if (
        (current.startPos >= existing.startPos &&
          current.startPos < existing.endPos) ||
        (current.endPos > existing.startPos &&
          current.endPos <= existing.endPos) ||
        (current.startPos <= existing.startPos &&
          current.endPos >= existing.endPos)
      ) {
        // Prioritize longer phrases over shorter ones
        if (current.text.length <= existing.text.length) {
          shouldAdd = false;
          break;
        } else {
          // Remove the existing shorter element
          const index = result.indexOf(existing);
          if (index > -1) {
            result.splice(index, 1);
          }
        }
      }
    }

    if (shouldAdd) {
      result.push(current);
    }
  }

  return result.sort((a, b) => a.startPos - b.startPos);
};

export const getAdverbialClauseType = (text: string): string => {
  const textLower = text.toLowerCase();

  if (
    /\b(?:when|while|before|after|since|until|as\s+soon\s+as|by\s+the\s+time)\b/.test(
      textLower
    )
  ) {
    return "timeClause";
  }
  if (/\b(?:where|wherever|anywhere|everywhere)\b/.test(textLower)) {
    return "placeClause";
  }
  if (/\b(?:because|since|as|given\s+that|seeing\s+that)\b/.test(textLower)) {
    return "reasonClause";
  }
  if (/\b(?:so\s+that|in\s+order\s+that|in\s+case)\b/.test(textLower)) {
    return "purposeClause";
  }
  if (/\b(?:although|though|even\s+though|while|whereas)\b/.test(textLower)) {
    return "contrastClause";
  }
  if (/\b(?:as|as\s+if|as\s+though|like|the\s+way)\b/.test(textLower)) {
    return "mannerClause";
  }
  if (/\b(?:if|unless|provided\s+that|as\s+long\s+as)\b/.test(textLower)) {
    return "conditionalClause";
  }

  return "adverbialClause";
};

export const getAdverbialClauseExamples = (type: string): string[] => {
  const examples: { [key: string]: string[] } = {
    timeClause: [
      "When I arrived, they had left",
      "Before you go, call me",
      "After we finish, we'll celebrate",
    ],
    placeClause: [
      "Where you go, I will follow",
      "Wherever she travels, she takes photos",
    ],
    reasonClause: [
      "Because it was raining, we stayed inside",
      "Since you asked, I'll tell you",
    ],
    purposeClause: [
      "I study hard so that I can pass",
      "In order that everyone understands, I'll explain",
    ],
    contrastClause: [
      "Although it's expensive, it's worth it",
      "While I like coffee, I prefer tea",
    ],
    mannerClause: ["Do it as I showed you", "She acted as if nothing happened"],
    conditionalClause: [
      "If it rains, we'll stay home",
      "Unless you hurry, you'll be late",
    ],
  };

  return examples[type] || ["Example not available"];
};

export const getAdverbialClauseRules = (type: string): string[] => {
  const rules: { [key: string]: string[] } = {
    timeClause: [
      "Shows when the main action occurs",
      "Introduced by time subordinators",
      "Contains subject and finite verb",
    ],
    placeClause: [
      "Shows where the main action occurs",
      "Introduced by 'where' or related words",
      "Functions as adverbial modifier",
    ],
    reasonClause: [
      "Explains why the main action occurs",
      "Introduced by causal subordinators",
      "Provides logical explanation",
    ],
    purposeClause: [
      "Shows the purpose or goal of main action",
      "Introduced by purpose subordinators",
      "Often uses subjunctive mood",
    ],
    contrastClause: [
      "Shows contrast or concession",
      "Introduced by contrastive subordinators",
      "Presents opposing information",
    ],
    mannerClause: [
      "Shows how the main action is performed",
      "Introduced by manner subordinators",
      "Describes method or style",
    ],
    conditionalClause: [
      "Shows condition for main action",
      "Introduced by conditional subordinators",
      "Creates if-then relationship",
    ],
  };

  return rules[type] || ["Rule not available"];
};

export const identifyConditionalType = (
  text: string
): GrammarElement["type"] => {
  const textLower = text.toLowerCase();

  // Zero conditional - general truths
  if (
    /\bif\s+[^,]*(?:am|is|are|do|does)\b.*,.*(?:am|is|are|do|does)\b/.test(
      textLower
    )
  ) {
    return "zeroConditional";
  }

  // First conditional - real future possibility
  if (
    /\bif\s+[^,]*(?:am|is|are|do|does)\b.*,.*\b(?:will|can|may)\b/.test(
      textLower
    )
  ) {
    return "firstConditional";
  }

  // Second conditional - unreal present/future
  if (
    /\bif\s+[^,]*(?:was|were|did)\b.*,.*\b(?:would|could|might)\b/.test(
      textLower
    )
  ) {
    return "secondConditional";
  }

  // Third conditional - unreal past
  if (
    /\bif\s+[^,]*\bhad\s+\w+(?:ed|en)\b.*,.*\b(?:would|could|might)\s+have\b/.test(
      textLower
    )
  ) {
    return "thirdConditional";
  }

  // Mixed conditional
  if (
    /\bif\s+[^,]*\bhad\s+\w+(?:ed|en)\b.*,.*\b(?:would|could|might)\s+(?!have)\b/.test(
      textLower
    )
  ) {
    return "mixedConditional";
  }

  return "conditionalClause";
};

export const getConditionalExamples = (type: string): string[] => {
  const examples: { [key: string]: string[] } = {
    zeroConditional: [
      "If you heat water to 100°C, it boils",
      "If it rains, the ground gets wet",
    ],
    firstConditional: [
      "If it rains tomorrow, we will cancel the picnic",
      "If you study hard, you can pass the exam",
    ],
    secondConditional: [
      "If I were rich, I would travel the world",
      "If she studied harder, she could pass",
    ],
    thirdConditional: [
      "If I had known, I would have helped",
      "If they had left earlier, they wouldn't have been late",
    ],
    mixedConditional: [
      "If I had studied medicine, I would be a doctor now",
      "If she were more careful, she wouldn't have had the accident",
    ],
  };

  return examples[type] || ["Conditional example not available"];
};

export const getConditionalRules = (type: string): string[] => {
  const rules: { [key: string]: string[] } = {
    zeroConditional: [
      "Used for general truths and scientific facts",
      "If + present simple, present simple",
      "Both clauses use present tense",
    ],
    firstConditional: [
      "Used for real future possibilities",
      "If + present simple, will/can/may + base verb",
      "Condition is possible and likely",
    ],
    secondConditional: [
      "Used for unreal present/future situations",
      "If + past simple, would/could/might + base verb",
      "Condition is unlikely or impossible",
    ],
    thirdConditional: [
      "Used for unreal past situations",
      "If + past perfect, would/could/might + have + past participle",
      "Condition is impossible (past)",
    ],
    mixedConditional: [
      "Combines different time periods",
      "Past condition with present result or vice versa",
      "Mixed time references",
    ],
  };

  return rules[type] || ["Rule not available"];
};

export const identifyTimeType = (text: string): string => {
  const textLower = text.toLowerCase();

  // Past time indicators
  if (
    /\b(?:last|yesterday|ago|before|previous|past|earlier)\b/.test(textLower)
  ) {
    return "past time";
  }

  // Future time indicators
  if (
    /\b(?:next|tomorrow|later|future|upcoming|coming|soon|eventually)\b/.test(
      textLower
    )
  ) {
    return "future time";
  }

  // Duration indicators
  if (/\b(?:for|during|throughout|all|since)\b/.test(textLower)) {
    return "duration";
  }

  // Frequency indicators
  if (
    /\b(?:always|never|usually|often|sometimes|rarely|every|once|twice|daily|weekly|monthly|yearly)\b/.test(
      textLower
    )
  ) {
    return "frequency";
  }

  // Point in time indicators
  if (/\b(?:at|on|in|when|while)\b/.test(textLower)) {
    return "point in time";
  }

  return "time reference";
};

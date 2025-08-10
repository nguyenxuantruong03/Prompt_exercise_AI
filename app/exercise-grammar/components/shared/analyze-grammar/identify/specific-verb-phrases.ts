import { GrammarElement } from "./types";

/**
 * Identifies specific verb phrase patterns including tenses, constructions, and verbal elements
 * Focuses on detailed verb phrase analysis with tense information and temporal patterns
 */
export const identifySpecificVerbPhrases = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // 1. ENHANCED PRESENT PERFECT patterns including duration expressions
  const presentPerfectPatterns = [
    // "It's been three months" type patterns
    /\b(?:it's|it\s+has)\s+been\s+(?:\d+|\w+)\s+(?:months?|years?|weeks?|days?|hours?|minutes?)\b/gi,
    // Standard present perfect patterns
    /\bhave\s+(?:already\s+|just\s+|never\s+|ever\s+|recently\s+|lately\s+)?\w+(?:ed|en|ne|d|t|gone|done|seen|been|come|run|sung|written|spoken|taken|given|made|known|shown|grown|thrown|flown|drawn|blown|worn|torn|born|chosen|frozen|stolen|broken|woken|forgotten|gotten|beaten|eaten|fallen|ridden|driven|hidden|forbidden|forgiven|shaken|mistaken)\b/gi,
    /\bhas\s+(?:already\s+|just\s+|never\s+|ever\s+|recently\s+|lately\s+)?\w+(?:ed|en|ne|d|t|gone|done|seen|been|come|run|sung|written|spoken|taken|given|made|known|shown|grown|thrown|flown|drawn|blown|worn|torn|born|chosen|frozen|stolen|broken|woken|forgotten|gotten|beaten|eaten|fallen|ridden|driven|hidden|forbidden|forgiven|shaken|mistaken)\b/gi,
  ];

  presentPerfectPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `present_perfect_${elementId++}`,
        text: match[0].trim(),
        type: "presentPerfect",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a present perfect verb phrase showing action completed at an unspecified time or continuing to the present.`,
        examples: [
          "has finished",
          "have never seen",
          "it's been three months",
          "have recently moved",
        ],
        rules: [
          "Formed with 'have/has' + past participle",
          "Shows completed action with present relevance",
          "Can include duration expressions (been three months)",
          "Often includes adverbs like 'already', 'just', 'never'",
        ],
      });
    }
  });

  // 2. PRESENT CONTINUOUS patterns
  const presentContinuousPatterns = [
    /\b(?:am|is|are)\s+(?:still\s+|currently\s+|now\s+)?\w+ing\b/gi,
  ];

  presentContinuousPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `present_continuous_${elementId++}`,
        text: match[0].trim(),
        type: "presentContinuous",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a present continuous verb phrase showing ongoing action.`,
        examples: [
          "am waiting",
          "is working",
          "are still playing",
          "is currently studying",
        ],
        rules: [
          "Formed with 'am/is/are' + verb+ing",
          "Shows action happening now or around now",
          "Can include time adverbs like 'still', 'currently'",
          "Indicates temporary or ongoing situations",
        ],
      });
    }
  });

  // 3. PAST PERFECT patterns (to prevent "had already departed" being lumped into noun phrases)
  const pastPerfectPatterns = [
    /\bhad\s+(?:already\s+|just\s+|never\s+|ever\s+|recently\s+|lately\s+)?\w+(?:ed|en|ne|d|t|gone|done|seen|been|come|run|sung|written|spoken|taken|given|made|known|shown|grown|thrown|flown|drawn|blown|worn|torn|born|chosen|frozen|stolen|broken|woken|forgotten|gotten|beaten|eaten|fallen|ridden|driven|hidden|forbidden|forgiven|shaken|mistaken)\b/gi,
  ];

  pastPerfectPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `past_perfect_${elementId++}`,
        text: match[0].trim(),
        type: "pastPerfect",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a past perfect verb phrase showing action completed before another past action.`,
        examples: [
          "had already finished",
          "had just arrived",
          "had never seen",
          "had recently moved",
        ],
        rules: [
          "Formed with 'had' + past participle",
          "Shows action completed before another past action or time",
          "Often includes adverbs like 'already', 'just', 'never'",
          "Used in narratives to show sequence of past events",
        ],
      });
    }
  });

  // 4. SIMPLE NOUN PHRASES (only determiner + noun to prevent over-capturing)
  const simpleNounPatterns = [
    /\b(the|a|an|this|that|my|your|his|her|its|our|their)\s+(?:big|small|large|little|beautiful|good|bad|new|old|young|important|interesting|difficult|easy|expensive|cheap|fast|slow|hot|cold|red|blue|green|black|white|tall|short|long|wide|heavy|light|strong|weak|smart|kind|nice|happy|sad|angry|excited|tired|busy|rich|poor|famous|special|normal|strange|serious|funny|quiet|loud|clean|dirty|safe|dangerous|healthy|fresh|sharp|smooth|soft|hard|sweet|flight|project|time|house|car|book|person|man|woman|child|student|teacher|doctor|work|job|idea|problem|solution|question|answer|story|movie|song|place|city|country|world|life|day|week|month|year|breakfast|lunch|dinner)s?\b(?!\s+(?:had|has|have|was|were|is|are|will|would|can|could|may|might|must|should|do|does|did))/gi,
  ];

  simpleNounPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `simple_noun_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "nounPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a simple noun phrase with a determiner and noun.`,
        examples: [
          "the flight",
          "a beautiful house",
          "my old car",
          "her new job",
        ],
        rules: [
          "Consists of determiner + (optional adjective) + noun",
          "Functions as subject, object, or complement",
          "Does not include verb phrases or clauses",
          "Core building block of sentences",
        ],
      });
    }
  });

  // 3. COMMON ADVERBS (to identify them separately)
  const adverbPatterns = [
    /\b(already|just|never|ever|recently|lately|often|always|sometimes|usually|rarely|seldom|frequently|occasionally|quickly|slowly|carefully|beautifully|loudly|quietly|happily|sadly|angrily|nervously|confidently|patiently|regularly|completely|entirely|partially|fully|properly|correctly|successfully|effectively|perfectly|well|badly|very|quite|rather|extremely|incredibly|remarkably)\b/gi,
  ];

  adverbPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `adverb_${elementId++}`,
        text: match[0].trim(),
        type: "adverb",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an adverb modifying verbs, adjectives, or other adverbs.`,
        examples: [
          "already (time adverb)",
          "quickly (manner adverb)",
          "very (degree adverb)",
          "often (frequency adverb)",
        ],
        rules: [
          "Modifies verbs, adjectives, or other adverbs",
          "Shows manner, time, place, degree, or frequency",
          "Can appear in different positions in sentences",
          "Often ends in -ly but not always",
        ],
      });
    }
  });

  return elements;
};

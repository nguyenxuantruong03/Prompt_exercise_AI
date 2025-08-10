import type { GrammarElement } from "./types";

// ============================================================================
// PRIORITY 0: POSITIONAL PHRASE CLUSTERING ANALYSIS
// ============================================================================
// This function identifies complete phrase units based on position and context
// before breaking them down into individual components
export const identifyPhraseClusters = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  // Multi-word phrase clusters that should be analyzed as units
  const phraseClusters = [
    // Time expression clusters - handle as complete units
    {
      patterns: [
        /\bby\s+the\s+time(?:\s+(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:am|is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did|\w+(?:s|ed|ing)))?/gi,
        /\bat\s+the\s+(?:same\s+)?time(?:\s+(?:when|that|as))?/gi,
        /\bfrom\s+time\s+to\s+time/gi,
        /\ball\s+the\s+time/gi,
        /\bfor\s+the\s+(?:first|last|next)\s+time/gi,
        /\bevery\s+time(?:\s+(?:I|you|he|she|it|we|they))?/gi,
        /\beach\s+time(?:\s+(?:I|you|he|she|it|we|they))?/gi,
        /\bsome\s+time(?:\s+(?:ago|later|before|after))?/gi,
        /\bnext\s+time(?:\s+(?:I|you|he|she|it|we|they))?/gi,
        /\blast\s+time(?:\s+(?:I|you|he|she|it|we|they))?/gi,
        /\bthe\s+(?:first|second|third|last)\s+time(?:\s+(?:I|you|he|she|it|we|they))?/gi,
        /\bas\s+soon\s+as(?:\s+(?:I|you|he|she|it|we|they))?/gi,
        /\bas\s+long\s+as(?:\s+(?:I|you|he|she|it|we|they))?/gi,
      ],
      getType: (text: string) => {
        if (/\bby\s+the\s+time/.test(text)) {
          return /\b(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:am|is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did|\w+(?:s|ed|ing))/.test(
            text
          )
            ? "timeClause"
            : "prepositionalPhrase";
        }
        if (/\bas\s+(?:soon|long)\s+as/.test(text)) {
          return /\b(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:am|is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did|\w+(?:s|ed|ing))/.test(
            text
          )
            ? "timeClause"
            : "prepositionalPhrase";
        }
        return "timePhrase";
      },
    },

    // Prepositional phrase clusters
    {
      patterns: [
        /\bin\s+(?:the\s+)?(?:morning|afternoon|evening|night|meantime|meanwhile|future|past|end|beginning|middle)/gi,
        /\bon\s+(?:the\s+)?(?:other\s+hand|the\s+contrary|purpose|account\s+of|behalf\s+of|top\s+of)/gi,
        /\bat\s+(?:the\s+)?(?:same\s+time|moment|present|last|least|most|first|end)/gi,
        /\bfor\s+(?:the\s+)?(?:sake\s+of|purpose\s+of|reason\s+of|time\s+being|most\s+part|first\s+time)/gi,
        /\bwith\s+(?:the\s+)?(?:help\s+of|exception\s+of|regard\s+to|respect\s+to|reference\s+to)/gi,
        /\bunder\s+(?:the\s+)?(?:circumstances|conditions|impression|assumption)/gi,
        /\bover\s+(?:the\s+)?(?:years|time|course\s+of|period\s+of)/gi,
      ],
      getType: () => "prepositionalPhrase",
    },

    // Modal verb phrase clusters
    {
      patterns: [
        /\b(?:would|could|should|might|may|must|can|will|shall)\s+have\s+(?:been\s+)?(?:\w+ing|\w+ed|\w+en|\w+)/gi,
        /\b(?:would|could|should|might|may|must|can|will|shall)\s+be\s+(?:\w+ing|\w+ed|\w+en)/gi,
        /\b(?:am|is|are|was|were)\s+(?:going\s+to|about\s+to|supposed\s+to|able\s+to)\s+\w+/gi,
        /\b(?:have|has|had)\s+(?:to|been\s+able\s+to|been\s+supposed\s+to)\s+\w+/gi,
      ],
      getType: (text: string) => {
        if (/\bhave\s+(?:been\s+)?\w+(?:ed|en|ing)/.test(text))
          return "perfectTense";
        if (/\bbe\s+\w+ing/.test(text)) return "continuousTense";
        if (/\bbe\s+\w+(?:ed|en)/.test(text)) return "passiveVoice";
        return "modalPhrase";
      },
    },

    // Adverbial phrase clusters
    {
      patterns: [
        /\bas\s+a\s+(?:result|matter\s+of\s+fact|consequence|rule|whole)/gi,
        /\bin\s+(?:addition|contrast|conclusion|summary|general|particular|fact|reality|other\s+words)/gi,
        /\bon\s+the\s+(?:other\s+hand|contrary|whole|average)/gi,
        /\bfor\s+(?:example|instance|the\s+most\s+part|a\s+while|a\s+long\s+time)/gi,
        /\bat\s+(?:first|last|least|the\s+same\s+time|any\s+rate)/gi,
      ],
      getType: () => "adverbialPhrase",
    },

    // Noun phrase clusters with determiners and adjectives (more precise)
    {
      patterns: [
        // Basic noun phrases - shorter, more precise patterns
        /\b(?:the|a|an|this|that|these|those|my|your|his|her|its|our|their|some|any|many|much|few|little|several|all|both|each|every|no)\s+(?:very\s+|quite\s+|rather\s+|extremely\s+|incredibly\s+)?(?:\w+ly\s+)*\w+(?=\s+(?:am|is|are|was|were|have|has|had|will|would|can|could|should|may|might|must|do|does|did|\w+s\b|\w+ed\b|\w+ing\b|[,.!?;]|$))/gi,
        // More specific noun phrases without capturing verb phrases
        /\b(?:the|a|an)\s+(?:very\s+|quite\s+)?(?:good|bad|big|small|old|new|long|short|high|low|fast|slow|hot|cold|young|beautiful|ugly|smart|stupid|rich|poor|happy|sad|angry|excited|tired|busy|free|ready|late|early|important|interesting|boring|difficult|easy|expensive|cheap|delicious|terrible|wonderful|amazing|awful|perfect|dangerous|safe|quiet|loud|bright|dark|clean|dirty|empty|full|open|closed|strong|weak|healthy|sick|fat|thin)\s+\w+(?=\s+(?:am|is|are|was|were|have|has|had|will|would|can|could|should|may|might|must|do|does|did|[,.!?;]|$))/gi,
      ],
      getType: () => "nounPhrase",
    },

    // Verb phrase clusters - identify complete verb constructions
    {
      patterns: [
        // Perfect tenses
        /\b(?:have|has)\s+(?:already\s+|just\s+|never\s+|ever\s+|recently\s+|always\s+)?\w+(?:ed|en|ne|d)\b(?:\s+(?:already|just|never|ever|recently|always|before|since|yet))?/gi,
        /\bhad\s+(?:already\s+|just\s+|never\s+|ever\s+|recently\s+|always\s+)?\w+(?:ed|en|ne|d)\b(?:\s+(?:already|just|never|ever|recently|always|before|since))?/gi,
        /\bwill\s+have\s+(?:already\s+|just\s+)?\w+(?:ed|en|ne|d)\b(?:\s+(?:by|before|already|just))?/gi,

        // Continuous tenses
        /\b(?:am|is|are)\s+(?:currently\s+|now\s+|still\s+|always\s+)?\w+ing\b(?:\s+(?:now|currently|still|always))?/gi,
        /\b(?:was|were)\s+(?:just\s+|still\s+|always\s+)?\w+ing\b(?:\s+(?:when|while|at that time))?/gi,
        /\bwill\s+be\s+\w+ing\b(?:\s+(?:when|while|at that time))?/gi,

        // Perfect continuous
        /\b(?:have|has)\s+been\s+\w+ing\b(?:\s+(?:for|since))?/gi,
        /\bhad\s+been\s+\w+ing\b(?:\s+(?:for|since|when|before))?/gi,
        /\bwill\s+have\s+been\s+\w+ing\b(?:\s+(?:for|by))?/gi,

        // Modal constructions
        /\b(?:would|could|should|might|may|must|can|will|shall)\s+(?:have\s+(?:been\s+)?)?\w+(?:ed|en|ne|d|ing)?\b/gi,
        /\b(?:would|could|should|might|may|must|can|will|shall)\s+be\s+(?:\w+ing|\w+ed|\w+en)\b/gi,

        // Passive voice
        /\b(?:am|is|are|was|were|been|be)\s+(?:being\s+)?\w+(?:ed|en|ne|d)\b(?:\s+by)?/gi,

        // Simple verb phrases with adverbs
        /\b(?:always|never|usually|often|sometimes|rarely|seldom|already|just|still|yet|soon|now|then|here|there|everywhere|somewhere|nowhere|anywhere)\s+(?:am|is|are|was|were|have|has|had|do|does|did|will|would|can|could|should|may|might|must)\s+\w+/gi,
      ],
      getType: (text: string) => {
        if (/\b(?:have|has|had)\s+(?:been\s+)?\w+(?:ed|en|ne|d)/.test(text)) {
          if (/\bhad\s+/.test(text)) return "pastPerfect";
          if (/\b(?:have|has)\s+/.test(text)) return "presentPerfect";
          return "perfectTense";
        }
        if (/\b(?:am|is|are|was|were|will\s+be)\s+\w+ing/.test(text))
          return "continuousTense";
        if (
          /\b(?:am|is|are|was|were|been|be)\s+(?:being\s+)?\w+(?:ed|en|ne|d)/.test(
            text
          )
        )
          return "passiveVoice";
        if (
          /\b(?:would|could|should|might|may|must|can|will|shall)\s+/.test(text)
        )
          return "modalPhrase";
        return "verbPhrase";
      },
    },
  ];

  // Process each phrase cluster type
  phraseClusters.forEach((cluster) => {
    cluster.patterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(sentence)) !== null) {
        const text = match[0].trim();
        const type = cluster.getType(text);

        // Determine position context for better analysis
        const beforeText = sentence.substring(0, match.index).trim();
        const afterText = sentence
          .substring(match.index + match[0].length)
          .trim();
        const position = determinePositionContext(beforeText, afterText, text);

        elements.push({
          id: `phrase_cluster_${elementId++}`,
          text: text,
          type: type as GrammarElement["type"],
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${text}" is a ${type
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()
            .trim()} identified as a complete unit. Position: ${position}. Context: "${beforeText
            .split(" ")
            .slice(-2)
            .join(" ")} [${text}] ${afterText
            .split(" ")
            .slice(0, 2)
            .join(" ")}"`,
          examples: getPhraseClusterExamples(type),
          rules: getPhraseClusterRules(type),
          // ENHANCED: Add context information for richer analysis
          contextualInfo: {
            position: position,
            precedingWords: beforeText.split(" ").slice(-3).join(" "),
            followingWords: afterText.split(" ").slice(0, 3).join(" "),
            grammaticalFunction: determineGrammaticalFunction(type, position),
            semanticRole: determineSemanticRole(text),
          },
        });
      }
    });
  });
};

// Helper function to determine position context
export const determinePositionContext = (
  beforeText: string,
  afterText: string,
  phraseText: string
): string => {
  const beforeWords = beforeText
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const afterWords = afterText
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 0);

  // Check if at sentence start
  if (beforeWords.length === 0) return "sentence_start";

  // Check if at sentence end
  if (afterWords.length === 0 || /^[.!?]/.test(afterText))
    return "sentence_end";

  // Check if after subject position (before main verb)
  const subjectIndicators = [
    "i",
    "you",
    "he",
    "she",
    "it",
    "we",
    "they",
    "there",
    "here",
  ];
  const verbIndicators = [
    "am",
    "is",
    "are",
    "was",
    "were",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "can",
    "could",
    "should",
    "may",
    "might",
    "must",
  ];

  if (
    beforeWords.some((w) => subjectIndicators.includes(w)) &&
    afterWords.some((w) => verbIndicators.includes(w))
  ) {
    return "between_subject_verb";
  }

  // Check if after verb (predicate position)
  if (beforeWords.some((w) => verbIndicators.includes(w))) {
    return "after_verb";
  }

  // Check if in prepositional phrase chain
  const prepWords = [
    "in",
    "on",
    "at",
    "by",
    "for",
    "with",
    "from",
    "to",
    "of",
    "about",
    "through",
    "during",
    "before",
    "after",
  ];
  if (
    beforeWords.some((w) => prepWords.includes(w)) ||
    phraseText.toLowerCase().match(/^(?:in|on|at|by|for|with)/)
  ) {
    return "prepositional_chain";
  }

  return "middle_position";
};

// Enhanced position-based part of speech determination
export const determinePartOfSpeechByPosition = (
  word: string,
  beforeText: string,
  afterText: string
): string => {
  const beforeWords = beforeText
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const afterWords = afterText
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const wordLower = word.toLowerCase();

  // Position indicators
  const linkingVerbs = [
    "am",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "seem",
    "appear",
    "become",
    "feel",
    "look",
    "sound",
    "taste",
    "smell",
    "grow",
    "turn",
    "remain",
    "stay",
  ];
  const auxiliaries = [
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "can",
    "could",
    "should",
    "may",
    "might",
    "must",
    "shall",
  ];
  const determiners = [
    "the",
    "a",
    "an",
    "this",
    "that",
    "these",
    "those",
    "my",
    "your",
    "his",
    "her",
    "its",
    "our",
    "their",
  ];
  const prepositions = [
    "in",
    "on",
    "at",
    "by",
    "for",
    "with",
    "from",
    "to",
    "of",
    "about",
    "through",
    "during",
    "before",
    "after",
    "under",
    "over",
    "between",
    "among",
  ];

  // VERB identification - check if in verb position
  if (
    beforeWords.some((w) => auxiliaries.includes(w)) ||
    (beforeWords.length > 0 &&
      ["i", "you", "he", "she", "it", "we", "they"].includes(
        beforeWords[beforeWords.length - 1]
      ))
  ) {
    if (/\w+(?:ing|ed|s)$/.test(wordLower) || auxiliaries.includes(wordLower)) {
      return "verb";
    }
  }

  // ADJECTIVE identification - after linking verbs or before nouns
  if (
    beforeWords.some((w) => linkingVerbs.includes(w)) ||
    (beforeWords.some((w) => determiners.includes(w)) && afterWords.length > 0)
  ) {
    if (
      /^(?:good|bad|big|small|old|new|long|short|high|low|fast|slow|hot|cold|young|beautiful|ugly|smart|stupid|rich|poor|happy|sad|angry|excited|tired|busy|free|ready|late|early|important|interesting|boring|difficult|easy|expensive|cheap|delicious|terrible|wonderful|amazing|awful|perfect|dangerous|safe|quiet|loud|bright|dark|clean|dirty|empty|full|open|closed|strong|weak|healthy|sick|fat|thin)$/.test(
        wordLower
      )
    ) {
      return "adjective";
    }
  }

  // ADVERB identification - modifies verbs, adjectives, or other adverbs
  if (
    /ly$/.test(wordLower) ||
    /^(?:very|quite|rather|extremely|incredibly|really|truly|completely|totally|absolutely|definitely|probably|possibly|maybe|perhaps|certainly|surely|clearly|obviously|apparently|fortunately|unfortunately|hopefully|carefully|quickly|slowly|suddenly|immediately|finally|eventually|already|still|yet|just|only|also|too|even|never|always|usually|often|sometimes|rarely|seldom)$/.test(
      wordLower
    )
  ) {
    // Check if modifying verb, adjective, or another adverb
    if (
      afterWords.some((w) => /\w+(?:ing|ed|s)$/.test(w)) || // before verb
      afterWords.some((w) => /^(?:good|bad|big|small)/.test(w)) || // before adjective
      afterWords.some((w) => /ly$/.test(w))
    ) {
      // before another adverb
      return "adverb";
    }
  }

  // NOUN identification - after determiners or in subject/object position
  if (
    beforeWords.some((w) => determiners.includes(w)) ||
    beforeWords.length === 0 || // sentence start - likely subject
    beforeWords.some((w) => prepositions.includes(w))
  ) {
    // after preposition
    return "noun";
  }

  // Default based on word patterns
  if (/\w+(?:ing|ed|s)$/.test(wordLower)) return "verb";
  if (/^(?:the|a|an|this|that|these|those)$/.test(wordLower))
    return "determiner";
  if (prepositions.includes(wordLower)) return "preposition";
  if (/^(?:and|but|or|so|yet|for|nor)$/.test(wordLower)) return "conjunction";

  return "unknown"; // Let other functions handle it
};

// Helper functions for phrase cluster examples and rules
export const getPhraseClusterExamples = (type: string): string[] => {
  const examples: { [key: string]: string[] } = {
    timeClause: [
      "By the time I arrived, the meeting had started",
      "As soon as she calls, we'll leave",
    ],
    prepositionalPhrase: [
      "By the time of departure",
      "At the same time",
      "For the first time",
    ],
    timePhrase: ["Every time", "Next time", "Last time", "Some time ago"],
    modalPhrase: [
      "Would have been going",
      "Could have done",
      "Should be working",
    ],
    perfectTense: ["Have been working", "Had completed", "Will have finished"],
    continuousTense: ["Am going", "Were running", "Will be studying"],
    passiveVoice: ["Was written", "Is being built", "Has been completed"],
    adverbialPhrase: ["As a result", "In addition", "On the other hand"],
    nounPhrase: [
      "The very tall building",
      "My old blue car",
      "Several important documents",
    ],
  };
  return examples[type] || ["Example not available"];
};

export const getPhraseClusterRules = (type: string): string[] => {
  const rules: { [key: string]: string[] } = {
    timeClause: [
      "Contains subject + finite verb",
      "Functions as adverbial clause",
      "Usually introduced by time conjunction",
    ],
    prepositionalPhrase: [
      "Begins with preposition",
      "Contains object of preposition",
      "Functions as modifier",
    ],
    timePhrase: [
      "Indicates time without finite verb",
      "Functions as adverbial",
      "No subject-verb structure",
    ],
    modalPhrase: [
      "Contains modal auxiliary",
      "Expresses possibility, necessity, etc.",
      "Followed by base form verb",
    ],
    perfectTense: [
      "Uses have/has/had + past participle",
      "Shows completed action",
      "Relates to time reference",
    ],
    continuousTense: [
      "Uses be + present participle (-ing)",
      "Shows ongoing action",
      "Emphasizes duration",
    ],
    passiveVoice: [
      "Uses be + past participle",
      "Subject receives action",
      "Agent may be omitted",
    ],
    adverbialPhrase: [
      "Modifies verb, adjective, or sentence",
      "Shows relationship between ideas",
      "Functions as connector",
    ],
    nounPhrase: [
      "Contains head noun",
      "May include determiners, adjectives",
      "Functions as subject, object, etc.",
    ],
  };
  return rules[type] || ["Rule not available"];
};

// Placeholder helper functions - these need to be implemented in helper-functions.ts
export const determineGrammaticalFunction = (
  type: string,
  position: string
): string => {
  return `${type} in ${position} position`;
};

export const determineSemanticRole = (text: string): string => {
  return `Semantic role of "${text}" based on context`;
};

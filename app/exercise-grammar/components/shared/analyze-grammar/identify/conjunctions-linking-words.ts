import { GrammarElement } from "./types";

/**
 * Comprehensive Conjunctions and Linking Words Analysis Function
 */
export const identifyConjunctionsAndLinkingWords = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;
  let currentId = elementId;

  // 1. COORDINATING CONJUNCTIONS (FANBOYS)
  const coordinatingConjunctionPattern = /\b(for|and|nor|but|or|yet|so)\b/gi;

  coordinatingConjunctionPattern.lastIndex = 0;
  while ((match = coordinatingConjunctionPattern.exec(sentence)) !== null) {
    const conjunction = match[0];

    elements.push({
      id: `conj-coord-${currentId++}`,
      text: conjunction,
      startPos: match.index!,
      endPos: match.index! + conjunction.length,
      type: "conjunction",
      description: `"${conjunction}" is a coordinating conjunction that joins words, phrases, or independent clauses of equal importance.`,
      examples: getCoordinatingConjunctionExamples(conjunction),
      rules: [
        "Joins words, phrases, or independent clauses of equal rank",
        "Remember FANBOYS: For, And, Nor, But, Or, Yet, So",
        "Usually preceded by a comma when joining independent clauses",
        getCoordinatingConjunctionRule(conjunction),
      ],
    });
  }

  // 2. SUBORDINATING CONJUNCTIONS
  const subordinatingConjunctionPatterns = [
    // Time-related
    /\b(when|whenever|while|as|before|after|since|until|till|once|as soon as|as long as|by the time|every time|the moment|the instant|no sooner|hardly|scarcely)\b/gi,

    // Cause and Effect
    /\b(because|since|as|so that|in order that|such that|now that|given that|seeing that|considering that|in that|for the reason that)\b/gi,

    // Condition
    /\b(if|unless|provided that|providing that|assuming that|suppose that|supposing that|in case|in the event that|on condition that|as long as|so long as)\b/gi,

    // Contrast/Concession
    /\b(although|though|even though|even if|while|whereas|despite the fact that|in spite of the fact that|much as|however|no matter|regardless of)\b/gi,

    // Comparison
    /\b(as|than|as if|as though|like|the way|just as|so as|such as|rather than|more than|less than)\b/gi,

    // Purpose
    /\b(so that|in order that|that|lest|for fear that|in case)\b/gi,

    // Place
    /\b(where|wherever|everywhere|anywhere|nowhere)\b/gi,
  ];

  const subordinatingCategories = [
    "Time",
    "Cause and Effect",
    "Condition",
    "Contrast/Concession",
    "Comparison",
    "Purpose",
    "Place",
  ];

  subordinatingConjunctionPatterns.forEach((pattern, categoryIndex) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const conjunction = match[0];
      const category = subordinatingCategories[categoryIndex];

      elements.push({
        id: `conj-sub-${currentId++}`,
        text: conjunction,
        startPos: match.index!,
        endPos: match.index! + conjunction.length,
        type: "conjunction",
        description: `"${conjunction}" is a subordinating conjunction that introduces a dependent clause expressing ${category.toLowerCase()}.`,
        examples: getSubordinatingConjunctionExamples(conjunction),
        rules: [
          `Introduces dependent clauses that express ${category.toLowerCase()}`,
          "Makes the clause dependent (cannot stand alone)",
          "The dependent clause can come before or after the main clause",
          "When dependent clause comes first, use a comma to separate",
        ],
      });
    }
  });

  // 3. CORRELATIVE CONJUNCTIONS
  const correlativeConjunctionPatterns = [
    /\b(both)\s+.*?\s+(and)\b/gi,
    /\b(either)\s+.*?\s+(or)\b/gi,
    /\b(neither)\s+.*?\s+(nor)\b/gi,
    /\b(not only)\s+.*?\s+(but also|but)\b/gi,
    /\b(whether)\s+.*?\s+(or)\b/gi,
    /\b(as)\s+.*?\s+(as)\b/gi,
    /\b(such)\s+.*?\s+(that)\b/gi,
    /\b(so)\s+.*?\s+(that)\b/gi,
    /\b(no sooner)\s+.*?\s+(than)\b/gi,
    /\b(rather)\s+.*?\s+(than)\b/gi,
  ];

  correlativeConjunctionPatterns.forEach((pattern) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const fullMatch = match[0];
      const parts = extractCorrelativeParts(fullMatch);

      elements.push({
        id: `conj-corr-${currentId++}`,
        text: fullMatch,
        startPos: match.index!,
        endPos: match.index! + fullMatch.length,
        type: "conjunction",
        description: `"${parts}" is a correlative conjunction pair that works together to join balanced sentence elements.`,
        examples: getCorrelativeConjunctionExamples(parts),
        rules: [
          "Work in pairs to join balanced elements",
          "Both parts are necessary for the meaning",
          "Elements joined should be parallel in structure",
          "Cannot be separated or used independently",
        ],
      });
    }
  });

  // 4. CONJUNCTIVE ADVERBS (Transitional words/phrases)
  const conjunctiveAdverbPattern =
    /\b(however|therefore|thus|hence|consequently|accordingly|furthermore|moreover|nevertheless|nonetheless|meanwhile|otherwise|likewise|similarly|instead|rather|indeed|certainly|undoubtedly|obviously|clearly|apparently|presumably|fortunately|unfortunately|surprisingly|interestingly|specifically|particularly|especially|notably|importantly|significantly|finally|lastly|first|second|third|next|then|subsequently|previously|earlier|later|afterwards|meanwhile|simultaneously|additionally|also|besides|furthermore|moreover|in addition|in fact|in other words|in contrast|on the other hand|on the contrary|in comparison|in summary|in conclusion|as a result|for example|for instance|that is|namely|in particular)\b/gi;

  conjunctiveAdverbPattern.lastIndex = 0;
  while ((match = conjunctiveAdverbPattern.exec(sentence)) !== null) {
    const adverb = match[0];

    elements.push({
      id: `conj-adv-${currentId++}`,
      text: adverb,
      startPos: match.index!,
      endPos: match.index! + adverb.length,
      type: "conjunction",
      description: `"${adverb}" is a conjunctive adverb that shows the relationship between ideas and provides transition between sentences or clauses.`,
      examples: getConjunctiveAdverbExamples(adverb),
      rules: [
        "Shows relationships between ideas and provides transitions",
        "Can move to different positions in the sentence",
        "Usually followed by a comma when at the beginning",
        "Can be used with semicolons to join independent clauses",
      ],
    });
  }

  // 5. DISCOURSE MARKERS (Additional linking expressions)
  const discourseMarkerPattern =
    /\b(in fact|as a matter of fact|actually|really|truly|honestly|frankly|obviously|clearly|certainly|definitely|surely|undoubtedly|presumably|apparently|seemingly|allegedly|supposedly|reportedly|admittedly|granted|to be sure|of course|naturally|predictably|surprisingly|interestingly|curiously|strangely|oddly|ironically|coincidentally|regrettably|sadly|happily|fortunately|unfortunately|thankfully|hopefully|presumably|possibly|probably|maybe|perhaps|conceivably|arguably|debatably|questionably|doubtfully|likely|unlikely|certainly|definitely|absolutely|positively|surely|undoubtedly|unquestionably|indubitably|without doubt|no doubt|for sure|for certain|beyond doubt|beyond question|in all likelihood|in all probability|more likely than not|as likely as not)\b/gi;

  discourseMarkerPattern.lastIndex = 0;
  while ((match = discourseMarkerPattern.exec(sentence)) !== null) {
    const marker = match[0];

    elements.push({
      id: `conj-disc-${currentId++}`,
      text: marker,
      startPos: match.index!,
      endPos: match.index! + marker.length,
      type: "conjunction",
      description: `"${marker}" is a discourse marker that expresses the speaker's attitude or provides commentary on the information being presented.`,
      examples: getDiscourseMarkerExamples(marker),
      rules: [
        "Expresses speaker's attitude or stance",
        "Provides commentary on the information",
        "Often set off by commas",
        "Can appear at various positions in the sentence",
      ],
    });
  }
};

const getCoordinatingConjunctionExamples = (conjunction: string): string[] => {
  const examples: { [key: string]: string[] } = {
    and: ["John and Mary", "I came and I saw", "He's tall and handsome"],
    but: [
      "I like coffee but not tea",
      "She's smart but lazy",
      "It's expensive but worth it",
    ],
    or: ["Coffee or tea?", "Come or go", "Red or blue?"],
    so: ["I was tired, so I went to bed", "It's raining, so take an umbrella"],
    for: ["I stayed home, for I was sick", "She left early, for she had work"],
    nor: [
      "I don't like coffee, nor do I like tea",
      "He can't swim, nor can he dive",
    ],
    yet: ["He's rich, yet unhappy", "It's small, yet powerful"],
  };
  return (
    examples[conjunction.toLowerCase()] || [
      `something ${conjunction} something else`,
    ]
  );
};

const getCoordinatingConjunctionRule = (conjunction: string): string => {
  const rules: { [key: string]: string } = {
    and: "Shows addition or continuation",
    but: "Shows contrast or exception",
    or: "Shows choice or alternative",
    so: "Shows result or consequence",
    for: "Shows reason or cause (formal)",
    nor: "Shows negative addition",
    yet: "Shows contrast (similar to but)",
  };
  return rules[conjunction.toLowerCase()] || "Joins equal elements";
};

const getSubordinatingConjunctionExamples = (conjunction: string): string[] => {
  const examples: { [key: string]: string[] } = {
    when: ["When I arrived, she was sleeping", "I'll call when I get home"],
    because: [
      "I stayed home because I was sick",
      "Because it's raining, we can't go",
    ],
    if: ["If it rains, we'll stay inside", "I'll help if you need me"],
    although: [
      "Although it's expensive, I'll buy it",
      "He came although he was tired",
    ],
    as: ["As I was leaving, he arrived", "She's as tall as her sister"],
    "so that": [
      "I studied hard so that I could pass",
      "She left early so that she wouldn't be late",
    ],
    where: ["I'll go where you go", "This is where we met"],
  };
  return (
    examples[conjunction.toLowerCase()] || [
      `${conjunction} clause, main clause`,
    ]
  );
};

const extractCorrelativeParts = (fullMatch: string): string => {
  // Extract the correlative conjunction parts from the full match
  if (fullMatch.includes("both") && fullMatch.includes("and"))
    return "both...and";
  if (fullMatch.includes("either") && fullMatch.includes("or"))
    return "either...or";
  if (fullMatch.includes("neither") && fullMatch.includes("nor"))
    return "neither...nor";
  if (fullMatch.includes("not only") && fullMatch.includes("but"))
    return "not only...but also";
  if (fullMatch.includes("whether") && fullMatch.includes("or"))
    return "whether...or";
  if (fullMatch.includes("as") && fullMatch.includes("as")) return "as...as";
  if (fullMatch.includes("such") && fullMatch.includes("that"))
    return "such...that";
  if (fullMatch.includes("so") && fullMatch.includes("that"))
    return "so...that";
  if (fullMatch.includes("no sooner") && fullMatch.includes("than"))
    return "no sooner...than";
  if (fullMatch.includes("rather") && fullMatch.includes("than"))
    return "rather...than";
  return fullMatch;
};

const getCorrelativeConjunctionExamples = (parts: string): string[] => {
  const examples: { [key: string]: string[] } = {
    "both...and": ["Both John and Mary came", "I like both coffee and tea"],
    "either...or": [
      "Either come with us or stay home",
      "You can have either cake or pie",
    ],
    "neither...nor": [
      "Neither John nor Mary came",
      "I like neither coffee nor tea",
    ],
    "not only...but also": [
      "She's not only smart but also kind",
      "He not only sings but also dances",
    ],
    "whether...or": [
      "I don't know whether to laugh or cry",
      "Whether rain or shine, we'll go",
    ],
    "as...as": ["She's as tall as her brother", "This is as good as it gets"],
    "such...that": ["It was such a good movie that I watched it twice"],
    "so...that": ["He ran so fast that he won the race"],
  };
  return examples[parts] || [`${parts} example sentence`];
};

const getConjunctiveAdverbExamples = (adverb: string): string[] => {
  const examples: { [key: string]: string[] } = {
    however: [
      "I wanted to go; however, it was raining",
      "However, we decided to stay",
    ],
    therefore: [
      "It was late; therefore, we left",
      "Therefore, we must act now",
    ],
    furthermore: ["I don't like it. Furthermore, it's expensive"],
    nevertheless: [
      "It's difficult; nevertheless, we'll try",
      "Nevertheless, he succeeded",
    ],
    meanwhile: ["I was cooking. Meanwhile, he was cleaning"],
    instead: ["I don't want coffee. Instead, I'll have tea"],
    finally: [
      "Finally, we reached our destination",
      "We waited and finally succeeded",
    ],
  };
  return examples[adverb.toLowerCase()] || [`${adverb}, this shows transition`];
};

const getDiscourseMarkerExamples = (marker: string): string[] => {
  const examples: { [key: string]: string[] } = {
    "in fact": [
      "In fact, I was right all along",
      "He's smart. In fact, he's brilliant",
    ],
    obviously: [
      "Obviously, we need more time",
      "This is obviously the right choice",
    ],
    certainly: ["Certainly, I'll help you", "This will certainly work"],
    apparently: ["Apparently, he's not coming", "The plan apparently failed"],
    fortunately: [
      "Fortunately, no one was hurt",
      "Fortunately, we arrived on time",
    ],
    surprisingly: [
      "Surprisingly, she agreed",
      "The test was surprisingly easy",
    ],
  };
  return (
    examples[marker.toLowerCase()] || [`${marker}, this expresses attitude`]
  );
};

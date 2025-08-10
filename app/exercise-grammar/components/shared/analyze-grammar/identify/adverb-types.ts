import { GrammarElement } from "./types";

/**
 * Comprehensive Adverb Analysis Function
 */
export const identifyAdverbTypes = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;
  let currentId = elementId;

  // 1. MANNER ADVERBS (How something is done)
  const mannerAdverbPatterns = [
    /\b(quickly|slowly|carefully|gently|roughly|smoothly|loudly|quietly|softly|harshly|beautifully|poorly|well|badly|perfectly|imperfectly|clearly|vaguely|directly|indirectly|honestly|dishonestly|politely|rudely|kindly|cruelly|bravely|cowardly|wisely|foolishly|skillfully|clumsily|gracefully|awkwardly|efficiently|inefficiently|accurately|inaccurately|properly|improperly|correctly|incorrectly|successfully|unsuccessfully)\b/gi,
  ];

  // 2. TIME ADVERBS (When something happens)
  const timeAdverbPatterns = [
    /\b(now|then|today|yesterday|tomorrow|soon|later|earlier|recently|formerly|currently|presently|immediately|eventually|finally|firstly|secondly|lastly|already|yet|still|always|never|sometimes|often|frequently|rarely|seldom|occasionally|usually|normally|typically|generally|constantly|continuously|regularly|irregularly|daily|weekly|monthly|yearly|annually|hourly|momentarily|temporarily|permanently|forever|eternally|instantly|gradually|suddenly|abruptly|simultaneously|meanwhile|afterwards|beforehand|previously)\b/gi,
  ];

  // 3. PLACE/DIRECTION ADVERBS (Where or in what direction)
  const placeDirectionAdverbPatterns = [
    /\b(here|there|everywhere|anywhere|nowhere|somewhere|upstairs|downstairs|inside|outside|indoors|outdoors|abroad|overseas|nearby|far|close|ahead|behind|forward|backward|upward|downward|sideways|north|south|east|west|left|right|above|below|underneath|overhead|around|through|across|along|beyond|within|without|home|away|back|forth)\b/gi,
  ];

  // 4. FREQUENCY ADVERBS (How often something happens)
  const frequencyAdverbPatterns = [
    /\b(always|never|usually|often|frequently|rarely|seldom|sometimes|occasionally|hardly|barely|scarcely|constantly|continually|repeatedly|regularly|irregularly|periodically|intermittently|sporadically|once|twice|thrice|daily|weekly|monthly|yearly|annually|hourly)\b/gi,
  ];

  // 5. DEGREE/INTENSITY ADVERBS (To what extent)
  const degreeAdverbPatterns = [
    /\b(very|quite|rather|extremely|incredibly|amazingly|absolutely|completely|totally|entirely|fully|partially|partly|somewhat|fairly|pretty|really|truly|genuinely|actually|definitely|certainly|surely|probably|possibly|maybe|perhaps|likely|unlikely|barely|hardly|scarcely|almost|nearly|just|only|merely|simply|exactly|precisely|approximately|roughly|about|around|too|enough|so|such|much|little|more|most|less|least|far|way|quite)\b/gi,
  ];

  // 6. AFFIRMATION/NEGATION ADVERBS
  const affirmationNegationAdverbPatterns = [
    /\b(yes|no|not|never|definitely|certainly|surely|absolutely|positively|undoubtedly|indeed|truly|really|actually|obviously|clearly|evidently|apparently|presumably|supposedly|allegedly|reportedly|admittedly|frankly|honestly|seriously|literally|virtually|practically|essentially|basically|fundamentally|theoretically|technically|officially|formally|informally|legally|illegally)\b/gi,
  ];

  // 7. MODAL ADVERBS (Expressing attitude/opinion)
  const modalAdverbPatterns = [
    /\b(fortunately|unfortunately|hopefully|thankfully|regrettably|surprisingly|amazingly|obviously|clearly|evidently|apparently|presumably|supposedly|allegedly|reportedly|admittedly|frankly|honestly|seriously|ironically|coincidentally|interestingly|curiously|strangely|oddly|naturally|predictably|unexpectedly|intentionally|accidentally|deliberately|voluntarily|involuntarily|willingly|unwillingly|gladly|reluctantly|eagerly|hesitantly)\b/gi,
  ];

  const adverbCategories = [
    {
      patterns: mannerAdverbPatterns,
      category: "Manner",
      description: "describes how an action is performed",
    },
    {
      patterns: timeAdverbPatterns,
      category: "Time",
      description: "indicates when an action occurs",
    },
    {
      patterns: placeDirectionAdverbPatterns,
      category: "Place/Direction",
      description: "indicates where or in what direction an action occurs",
    },
    {
      patterns: frequencyAdverbPatterns,
      category: "Frequency",
      description: "indicates how often an action occurs",
    },
    {
      patterns: degreeAdverbPatterns,
      category: "Degree/Intensity",
      description: "indicates the extent or intensity of an action or quality",
    },
    {
      patterns: affirmationNegationAdverbPatterns,
      category: "Affirmation/Negation",
      description: "expresses confirmation, denial, or certainty",
    },
    {
      patterns: modalAdverbPatterns,
      category: "Modal/Attitude",
      description: "expresses the speaker's attitude or viewpoint",
    },
  ];

  adverbCategories.forEach(({ patterns, category, description }) => {
    patterns.forEach((pattern) => {
      pattern.lastIndex = 0;
      while ((match = pattern.exec(sentence)) !== null) {
        const adverb = match[0];

        elements.push({
          id: `adv-${currentId++}`,
          text: adverb,
          startPos: match.index!,
          endPos: match.index! + adverb.length,
          type: "adverb",
          description: `"${adverb}" is a ${category.toLowerCase()} adverb that ${description}.`,
          examples: getAdverbExamples(category),
          rules: [
            `${category} adverbs modify verbs, adjectives, or other adverbs`,
            "Often end in -ly but not always",
            `${category} adverbs ${description}`,
            "Can be moved to different positions in the sentence",
          ],
        });
      }
    });
  });

  // 8. -LY ADVERBS (Most common adverb formation)
  const lyAdverbPattern = /\b(\w+ly)\b/gi;
  lyAdverbPattern.lastIndex = 0;
  while ((match = lyAdverbPattern.exec(sentence)) !== null) {
    const adverb = match[0];

    // Skip if already identified in above categories
    const alreadyIdentified = elements.some(
      (el) =>
        el.text.toLowerCase() === adverb.toLowerCase() && el.type === "adverb"
    );

    if (!alreadyIdentified && isValidLyAdverb(adverb)) {
      elements.push({
        id: `adv-ly-${currentId++}`,
        text: adverb,
        startPos: match.index!,
        endPos: match.index! + adverb.length,
        type: "adverb",
        description: `"${adverb}" is an adverb formed by adding -ly to an adjective, modifying verbs, adjectives, or other adverbs.`,
        examples: [
          "She sings beautifully",
          "He drives carefully",
          "They work efficiently",
        ],
        rules: [
          "Most adverbs are formed by adding -ly to adjectives",
          "Modifies verbs, adjectives, or other adverbs",
          "Usually answers questions like how, when, where, or to what extent",
          "Can often be moved to different positions in the sentence",
        ],
      });
    }
  }
};

const getAdverbExamples = (category: string): string[] => {
  const examples = {
    Manner: [
      "She sings beautifully",
      "He drives carefully",
      "They work efficiently",
    ],
    Time: ["I'll call you later", "She arrived early", "We met yesterday"],
    "Place/Direction": ["Come here", "Look everywhere", "Go upstairs"],
    Frequency: [
      "I always brush my teeth",
      "She rarely complains",
      "We usually have lunch at noon",
    ],
    "Degree/Intensity": [
      "It's very hot",
      "She's quite tall",
      "I'm extremely tired",
    ],
    "Affirmation/Negation": [
      "I definitely agree",
      "She certainly knows",
      "It's obviously true",
    ],
    "Modal/Attitude": [
      "Fortunately, it didn't rain",
      "Surprisingly, he won",
      "Clearly, we need help",
    ],
  };
  return examples[category as keyof typeof examples] || [];
};

const isValidLyAdverb = (word: string): boolean => {
  // Common non-adverb words ending in -ly
  const nonAdverbs = [
    "family",
    "early",
    "only",
    "likely",
    "lovely",
    "lonely",
    "friendly",
    "silly",
    "ugly",
    "holy",
    "lively",
    "elderly",
    "deadly",
    "supply",
    "apply",
    "reply",
    "multiply",
    "simply",
    "lily",
    "belly",
    "jelly",
    "folly",
    "jolly",
    "rally",
    "ally",
    "bully",
    "fully",
    "gully",
  ];

  return !nonAdverbs.includes(word.toLowerCase()) && word.length > 3;
};

import { GrammarElement } from "./types";

/**
 * Comprehensive Adjective Analysis Function
 */
export const identifyAdjectiveTypes = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;
  let currentId = elementId;

  // 1. DESCRIPTIVE ADJECTIVES - Color, size, shape, opinion, etc.
  const descriptiveAdjectivePatterns = [
    // Color adjectives
    /\b(red|blue|green|yellow|orange|purple|pink|black|white|gray|grey|brown|silver|gold|golden|dark|light|bright|pale|deep|vivid|colorful|colorless|transparent|opaque)\b/gi,

    // Size adjectives
    /\b(big|large|huge|enormous|gigantic|massive|vast|immense|tiny|small|little|minute|microscopic|miniature|compact|narrow|wide|broad|thick|thin|tall|short|high|low|long|brief)\b/gi,

    // Shape adjectives
    /\b(round|circular|square|rectangular|triangular|oval|spherical|cylindrical|flat|curved|straight|bent|twisted|angular|pointed|sharp|blunt|smooth|rough|bumpy|uneven)\b/gi,

    // Opinion adjectives
    /\b(good|bad|excellent|terrible|wonderful|awful|amazing|fantastic|brilliant|magnificent|horrible|disgusting|beautiful|ugly|pretty|handsome|attractive|plain|nice|pleasant|unpleasant|great|poor|perfect|imperfect|fantastic|marvelous|dreadful|lovely|charming|annoying|boring|interesting|exciting|thrilling|shocking)\b/gi,

    // Physical properties
    /\b(hot|cold|warm|cool|freezing|boiling|wet|dry|damp|moist|hard|soft|solid|liquid|heavy|light|dense|loose|tight|flexible|rigid|elastic|brittle|strong|weak|powerful|gentle)\b/gi,

    // Age adjectives
    /\b(new|old|young|ancient|modern|contemporary|recent|fresh|stale|mature|immature|elderly|youthful|vintage|antique|current|outdated|up-to-date)\b/gi,

    // Texture/Feel adjectives
    /\b(smooth|rough|silky|fuzzy|scratchy|slippery|sticky|slimy|greasy|oily|crispy|crunchy|chewy|tender|tough|delicate|coarse|fine|polished|weathered)\b/gi,

    // Sound adjectives
    /\b(loud|quiet|noisy|silent|soft|harsh|melodious|shrill|deep|high-pitched|low|resonant|muffled|clear|faint|deafening|whispered|thunderous)\b/gi,

    // Taste adjectives
    /\b(sweet|sour|bitter|salty|spicy|mild|hot|bland|tasty|delicious|disgusting|flavorful|tasteless|savory|tangy|rich|creamy|crispy|juicy|tender)\b/gi,

    // Smell adjectives
    /\b(fragrant|aromatic|stinky|smelly|fresh|musty|pungent|perfumed|scented|odorless|foul|pleasant|sweet-smelling|acrid)\b/gi,

    // Emotional/Personality adjectives
    /\b(happy|sad|angry|excited|calm|nervous|confident|shy|brave|cowardly|kind|cruel|generous|selfish|patient|impatient|honest|dishonest|loyal|disloyal|friendly|unfriendly|polite|rude|cheerful|gloomy)\b/gi,
  ];

  const categories = [
    "Color",
    "Size",
    "Shape",
    "Opinion",
    "Physical Properties",
    "Age",
    "Texture/Feel",
    "Sound",
    "Taste",
    "Smell",
    "Emotional/Personality",
  ];

  descriptiveAdjectivePatterns.forEach((pattern, patternIndex) => {
    pattern.lastIndex = 0;
    while ((match = pattern.exec(sentence)) !== null) {
      const adjective = match[0];
      const category = categories[patternIndex];

      elements.push({
        id: `adj-${currentId++}`,
        text: adjective,
        startPos: match.index!,
        endPos: match.index! + adjective.length,
        type: "adjective",
        description: `"${adjective}" is a ${category.toLowerCase()} adjective that describes or modifies nouns by providing specific information about their ${category.toLowerCase()}.`,
        examples: getDescriptiveAdjectiveExamples(category),
        rules: [
          `${category} adjectives provide specific descriptive information`,
          "Usually placed before the noun they modify",
          "Can be used in comparative and superlative forms",
          "Often used to create vivid imagery in writing",
        ],
      });
    }
  });
};

const getDescriptiveAdjectiveExamples = (category: string): string[] => {
  const examples = {
    Color: ["The red car", "Blue sky", "Golden sunset"],
    Size: ["Big house", "Tiny mouse", "Enormous building"],
    Shape: ["Round ball", "Square table", "Triangular roof"],
    Opinion: ["Beautiful flower", "Terrible weather", "Amazing performance"],
    "Physical Properties": ["Hot coffee", "Soft pillow", "Hard rock"],
    Age: ["New car", "Old house", "Ancient ruins"],
    "Texture/Feel": ["Smooth silk", "Rough surface", "Silky hair"],
    Sound: ["Loud music", "Quiet room", "Melodious voice"],
    Taste: ["Sweet cake", "Sour lemon", "Spicy food"],
    Smell: ["Fragrant flowers", "Fresh air", "Pleasant aroma"],
    "Emotional/Personality": ["Happy child", "Kind person", "Brave soldier"],
  };
  return examples[category as keyof typeof examples] || [];
};

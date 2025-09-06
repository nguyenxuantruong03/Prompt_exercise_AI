import { ProficiencyLevel } from './types';
import { levelDescriptions, getLevelRequirements } from './level-helpers';

export const generateBaseInstruction = (
  grammarText: string,
  exerciseType: string,
  proficiencyLevel: ProficiencyLevel,
  numExercises: number,
  levelContext: string,
  certificateContext: string,
  detailedAnalysis: boolean
): string => {
  // Add maximum randomization for truly unique content
  const timestamp = Date.now();
  const randomSeed = Math.floor(Math.random() * 1000000);
  const contextSeed = Math.floor(Math.random() * 10000);

  const levelRequirements = getLevelRequirements(proficiencyLevel);

  const baseInstruction = `SEARCH AND CREATE: You are an AI that searches your knowledge base for "${grammarText}" grammar and creates completely original exercises.

ABSOLUTE REQUIREMENTS:
- SEARCH your knowledge for diverse examples of "${grammarText}" grammar usage
- CREATE completely new, never-before-seen questions each time
- RANDOMIZE contexts, vocabulary, situations, and sentence structures
- GENERATE fresh content that tests different aspects of "${grammarText}"
- AVOID any predictable patterns or repetitive examples

GRAMMAR FOCUS: "${grammarText}"
EXERCISE FORMAT: ${exerciseType}
DIFFICULTY: ${proficiencyLevel} (${
    levelDescriptions[proficiencyLevel as keyof typeof levelDescriptions]
  })
QUESTIONS NEEDED: ${numExercises}
RANDOMIZATION ID: ${randomSeed}_${timestamp}_${contextSeed}

CRITICAL LEVEL-APPROPRIATE CONTENT REQUIREMENTS:
${levelContext}

${certificateContext}

STRICT PROFICIENCY LEVEL ENFORCEMENT FOR ${proficiencyLevel}:
${levelRequirements}

VOCABULARY AND COMPLEXITY CONTROL:
- Every word choice MUST be appropriate for ${proficiencyLevel} level
- Every grammar structure MUST match ${proficiencyLevel} complexity
- Every sentence length MUST suit ${proficiencyLevel} capabilities
- Context examples MUST be relevant to ${proficiencyLevel} learners

CREATIVITY MANDATE:
- Use your full knowledge of English grammar to create realistic examples
- Draw from various contexts: business, casual conversation, academic, travel, family, work, hobbies
- Make each question test a DIFFERENT grammatical aspect of "${grammarText}"
- Use diverse vocabulary and sentence structures appropriate for ${proficiencyLevel} level
- Create questions that could appear in real English exams or textbooks for ${proficiencyLevel} students
- Ensure every generation is completely unique

TIPS AND SUGGESTIONS REQUIREMENTS:
- For each question, provide detailed grammar tips explaining WHY the correct answer is used
- Explain the grammatical reasoning behind tense selection, word choice, or structure
- Include common mistakes students make with this grammar point
- Provide memory aids or rules that help students remember the correct usage
- Make tips educational and informative, not just simple explanations
- Ensure tips are appropriate for ${proficiencyLevel} level understanding

${getDetailedAnalysisSection(detailedAnalysis, proficiencyLevel, grammarText)}

OUTPUT: Valid JSON only, no other text.`;

  return baseInstruction;
};

const getDetailedAnalysisSection = (
  detailedAnalysis: boolean,
  proficiencyLevel: ProficiencyLevel,
  grammarText: string
): string => {
  if (!detailedAnalysis || !["A1", "A2", "B1", "B2"].includes(proficiencyLevel)) {
    return "";
  }

  return `DETAILED GRAMMAR ANALYSIS REQUIREMENT:
Since detailed analysis is enabled for this ${proficiencyLevel} student, you must ALSO generate 2-3 sample sentences that clearly demonstrate "${grammarText}" grammar with detailed word-by-word grammatical analysis.

For each sample sentence, identify and mark every significant grammatical element with precise positions:
- Subject: The person/thing performing the action
- Verb: Action words or state of being verbs
- Object: Person/thing receiving the action
- Article: a, an, the
- Quantifier: some, many, few, much, little, etc.
- Adjective: Descriptive words modifying nouns
- Adverb: Words that modify verbs, adjectives, or other adverbs
- Preposition: in, on, at, by, with, etc.
- Modal: can, could, should, must, will, would, etc.
- Auxiliary: helping verbs (do, does, did, have, has, had, be, am, is, are, was, were)
- Conjunction: and, but, or, because, although, etc.
- Pronoun: I, you, he, she, it, they, we, etc.

ANALYSIS FORMAT REQUIREMENT: Add this section to your JSON response alongside the questions:
"sentenceAnalyses": [
  {
    "sentence": "Complete example sentence clearly demonstrating ${grammarText} usage",
    "elements": [
      {
        "word": "exact word from sentence",
        "startIndex": 0,
        "endIndex": 4,
        "type": "subject|verb|object|article|quantifier|adjective|adverb|preposition|modal|auxiliary|conjunction|pronoun",
        "explanation": "Clear explanation of why this word serves this grammatical function in the context of ${grammarText}",
        "level": "${proficiencyLevel}",
        "additionalInfo": "Helpful learning tips specifically for ${proficiencyLevel} level students about this grammatical element"
      }
    ]
  }
]

CRITICAL: Make sure to:
- Generate 2-3 different sentences that showcase different aspects of "${grammarText}"
- Mark word positions accurately (startIndex/endIndex)
- Provide ${proficiencyLevel}-appropriate explanations
- Focus on elements most relevant to understanding "${grammarText}"
`;
};

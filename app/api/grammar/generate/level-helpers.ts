import { ProficiencyLevel } from './types';

// Level descriptions for AI context
export const levelDescriptions = {
  A1: "beginner level (simple present, basic vocabulary, short simple sentences)",
  A2: "elementary level (past tense, future tense, basic questions, everyday vocabulary)",
  B1: "intermediate level (present perfect, conditionals, complex sentences, wider vocabulary)",
  B2: "upper intermediate level (subjunctive, passive voice, advanced tenses, sophisticated vocabulary)",
  C1: "advanced level (complex grammar structures, nuanced vocabulary, advanced discourse)",
  C2: "proficient level (all grammar structures, extensive vocabulary, native-like complexity)",
};

export const getLevelContext = (proficiencyLevel: ProficiencyLevel): string => {
  return `Make sure the exercise is appropriate for ${proficiencyLevel} level students (${
    levelDescriptions[proficiencyLevel as keyof typeof levelDescriptions]
  }). Adjust vocabulary, grammar complexity, and sentence structure accordingly.`;
};

export const getLevelRequirements = (proficiencyLevel: ProficiencyLevel): string => {
  const requirements = {
    A1: `
- Use ONLY simple present, past, and future tenses
- Use basic vocabulary (most common 1000 words)
- Create SHORT, simple sentences (max 10-12 words)
- Focus on basic grammar: be/have, simple questions, basic adjectives
- Avoid complex grammar structures, phrasal verbs, or advanced vocabulary
`,
    A2: `
- Use present, past, future, and present continuous tenses
- Use everyday vocabulary (most common 2000 words)
- Create medium-length sentences (8-15 words)
- Include: basic questions, simple conditionals, basic comparatives
- Avoid: complex tenses, advanced vocabulary, sophisticated structures
`,
    B1: `
- Use present perfect, conditionals, and past continuous
- Use intermediate vocabulary with some less common words
- Create varied sentence structures (10-18 words)
- Include: complex questions, basic passive voice, relative clauses
- Avoid: advanced literary vocabulary, very complex grammar
`,
    B2: `
- Use advanced tenses including subjunctive and complex passives
- Use sophisticated vocabulary and idiomatic expressions
- Create complex sentences with multiple clauses (15-25 words)
- Include: advanced conditionals, reported speech, advanced connectors
- Challenge students with near-native level grammar structures
`,
    C1: `
- Use ALL grammar structures including the most complex forms
- Use advanced academic and professional vocabulary
- Create sophisticated, nuanced sentences (20-30 words)
- Include: complex discourse markers, advanced modal usage, stylistic variations
- Test mastery of subtle grammatical distinctions
`,
    C2: `
- Use NATIVE-LEVEL complexity with ALL advanced grammar structures
- Use extensive vocabulary: academic, technical, idiomatic, and archaic terms
- Create complex, sophisticated sentence structures (25-40+ words)
- Include: highly advanced structures (subjunctive mood, inversion, cleft sentences)
- Test: subtle grammatical nuances, stylistic variations, register awareness
- Require: perfect understanding of colloquialisms, formal discourse markers
- Challenge: implicit meanings, contextual appropriateness, cultural references
- Use: complex subordination, embedded clauses, advanced punctuation
- Test complete mastery equivalent to educated native speakers
- Include rare grammatical constructions and sophisticated discourse patterns
`
  };

  return requirements[proficiencyLevel];
};

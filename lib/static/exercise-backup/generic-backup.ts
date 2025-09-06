import {
  Exercise,
  Question,
  TypeExcercise,
  CEFRLevel,
  CertificateType,
} from "@/types/grammars/grammars_type";

// Generate generic backup exercise when specific backups aren't available
export function generateGenericExercise(
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  numQuestions: number,
  certificateType?: CertificateType
): Exercise {
  const questions: Question[] = [];

  for (let i = 1; i <= numQuestions; i++) {
    const question = generateQuestionByType(
      exerciseType,
      proficiencyLevel,
      grammarTopic,
      i,
      certificateType
    );
    questions.push(question);
  }

  return {
    title: `${
      grammarTopic.charAt(0).toUpperCase() + grammarTopic.slice(1)
    } - ${exerciseType.replace("-", " ").toUpperCase()} (${proficiencyLevel}${
      certificateType ? ` - ${certificateType}` : ""
    })`,
    questions,
    type: exerciseType,
  };
}

// Generate individual questions based on type
function generateQuestionByType(
  exerciseType: TypeExcercise,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  questionId: number,
  certificateType?: CertificateType
): Question {
  const baseQuestion: Partial<Question> = {
    id: questionId,
    type: exerciseType,
    tense: grammarTopic,
  };

  switch (exerciseType) {
    case "multiple-choice":
      return generateMultipleChoiceQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "fill-in-blank":
      return generateFillInBlankQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "sentence-completion":
      return generateSentenceCompletionQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "error-correction":
      return generateErrorCorrectionQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "reading-comprehension":
      return generateReadingComprehensionQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "word-order":
      return generateWordOrderQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "matching":
      return generateMatchingQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "cloze-test":
      return generateClozeTestQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "transformation":
      return generateTransformationQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "sentence-building":
      return generateSentenceBuildingQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "paraphrasing":
      return generateParaphrasingQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "verb-conjugation":
      return generateVerbConjugationQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "punctuation":
      return generatePunctuationQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "word-formation":
      return generateWordFormationQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "sentence-combining":
      return generateSentenceCombiningQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "dialogue-completion":
      return generateDialogueCompletionQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "comparison-exercise":
      return generateComparisonExerciseQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "context-matching":
      return generateContextMatchingQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "passive-active-matching":
      return generatePassiveActiveMatchingQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "clause-combining":
      return generateClauseCombiningQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "multi-topic-integration":
      return generateMultiTopicIntegrationQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "form-conversion":
      return generateFormConversionQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "situational-grammar":
      return generateSituationalGrammarQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "paragraph-tense-conversion":
      return generateParagraphTenseConversionQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "grammar-generator":
      return generateGrammarGeneratorQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    case "true-false-lightning":
      return generateTrueFalseLightningQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );

    default:
      return generateMultipleChoiceQuestion(
        baseQuestion,
        proficiencyLevel,
        grammarTopic,
        certificateType
      );
  }
}

// Helper function to get certificate-specific context
function getCertificateContext(certificateType?: CertificateType): string {
  if (!certificateType) return "";

  const contexts = {
    IELTS: "academic writing and formal communication",
    TOEIC: "business and workplace communication",
    PTE: "academic English and computer-based assessment",
    TOEFL: "academic English for university settings",
    Cambridge: "general English proficiency",
    SAT: "academic English for college admissions",
    VSTEP: "Vietnamese standardized English proficiency",
  };

  return contexts[certificateType] || "";
}

// Helper function to adjust difficulty based on CEFR level
function getLevelAdjustment(level: CEFRLevel) {
  const adjustments = {
    A1: { vocab: "basic", structure: "simple", context: "everyday" },
    A2: { vocab: "elementary", structure: "simple", context: "familiar" },
    B1: { vocab: "intermediate", structure: "varied", context: "practical" },
    B2: {
      vocab: "upper-intermediate",
      structure: "complex",
      context: "abstract",
    },
    C1: { vocab: "advanced", structure: "sophisticated", context: "nuanced" },
    C2: { vocab: "proficient", structure: "native-like", context: "complex" },
  };

  return adjustments[level];
}

// Multiple Choice Question Generator
function generateMultipleChoiceQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const level = getLevelAdjustment(proficiencyLevel);
  const context = getCertificateContext(certificateType);

  // Sample questions based on grammar topic and level
  const questions = getMultipleChoiceQuestions(
    grammarTopic,
    proficiencyLevel,
    context
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Fill in the Blank Question Generator
function generateFillInBlankQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getFillInBlankQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Sentence Completion Question Generator
function generateSentenceCompletionQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getSentenceCompletionQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Error Correction Question Generator
function generateErrorCorrectionQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getErrorCorrectionQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    incorrectText: selectedQuestion.incorrectText,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Reading Comprehension Question Generator
function generateReadingComprehensionQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getReadingComprehensionQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    passage: selectedQuestion.passage,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Word Order Question Generator
function generateWordOrderQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getWordOrderQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    words: selectedQuestion.words,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Matching Question Generator
function generateMatchingQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getMatchingQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    pairs: selectedQuestion.pairs,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Cloze Test Question Generator
function generateClozeTestQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getClozeTestQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    passage: selectedQuestion.passage,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Transformation Question Generator
function generateTransformationQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getTransformationQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Sentence Building Question Generator
function generateSentenceBuildingQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getSentenceBuildingQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    words: selectedQuestion.words,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Paraphrasing Question Generator
function generateParaphrasingQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getParaphrasingQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Verb Conjugation Question Generator
function generateVerbConjugationQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getVerbConjugationQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Punctuation Question Generator
function generatePunctuationQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getPunctuationQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Word Formation Question Generator
function generateWordFormationQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getWordFormationQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Sentence Combining Question Generator
function generateSentenceCombiningQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getSentenceCombiningQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    clauses: selectedQuestion.clauses,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Dialogue Completion Question Generator
function generateDialogueCompletionQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getDialogueCompletionQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    options: selectedQuestion.options,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Comparison Exercise Question Generator
function generateComparisonExerciseQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getComparisonExerciseQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    comparisonStructures: selectedQuestion.comparisonStructures,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Context Matching Question Generator
function generateContextMatchingQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getContextMatchingQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    context: selectedQuestion.context,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Passive Active Matching Question Generator
function generatePassiveActiveMatchingQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getPassiveActiveMatchingQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    voicePairs: selectedQuestion.voicePairs,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Clause Combining Question Generator
function generateClauseCombiningQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getClauseCombiningQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    clauses: selectedQuestion.clauses,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Multi Topic Integration Question Generator
function generateMultiTopicIntegrationQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getMultiTopicIntegrationQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    grammarTopics: selectedQuestion.grammarTopics,
    topicWeights: selectedQuestion.topicWeights,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Form Conversion Question Generator
function generateFormConversionQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getFormConversionQuestions(grammarTopic, proficiencyLevel);
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    originalSentence: selectedQuestion.originalSentence,
    targetForm: selectedQuestion.targetForm,
    conversionSteps: selectedQuestion.conversionSteps,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Situational Grammar Question Generator
function generateSituationalGrammarQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getSituationalGrammarQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    situation: selectedQuestion.situation,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Paragraph Tense Conversion Question Generator
function generateParagraphTenseConversionQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getParagraphTenseConversionQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    originalParagraph: selectedQuestion.originalParagraph,
    sourceTense: selectedQuestion.sourceTense,
    targetTense: selectedQuestion.targetTense,
    convertedParagraph: selectedQuestion.convertedParagraph,
    conversionRules: selectedQuestion.conversionRules,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Grammar Generator Question Generator
function generateGrammarGeneratorQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getGrammarGeneratorQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    generatorData: selectedQuestion.generatorData,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// True False Lightning Question Generator
function generateTrueFalseLightningQuestion(
  baseQuestion: Partial<Question>,
  proficiencyLevel: CEFRLevel,
  grammarTopic: string,
  certificateType?: CertificateType
): Question {
  const questions = getTrueFalseLightningQuestions(
    grammarTopic,
    proficiencyLevel
  );
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];

  return {
    ...baseQuestion,
    question: selectedQuestion.question,
    lightningData: selectedQuestion.lightningData,
    correct: selectedQuestion.correct,
    explanation: selectedQuestion.explanation,
    tip: selectedQuestion.tip,
  } as Question;
}

// Import question data files
const {
  getMultipleChoiceQuestions,
  getFillInBlankQuestions,
  getSentenceCompletionQuestions,
  getErrorCorrectionQuestions,
  getReadingComprehensionQuestions,
  getWordOrderQuestions,
  getMatchingQuestions,
  getClozeTestQuestions,
  getTransformationQuestions,
  getSentenceBuildingQuestions,
  getParaphrasingQuestions,
  getVerbConjugationQuestions,
  getPunctuationQuestions,
  getWordFormationQuestions,
  getSentenceCombiningQuestions,
  getDialogueCompletionQuestions,
  getComparisonExerciseQuestions,
  getContextMatchingQuestions,
  getPassiveActiveMatchingQuestions,
  getClauseCombiningQuestions,
  getMultiTopicIntegrationQuestions,
  getFormConversionQuestions,
  getSituationalGrammarQuestions,
  getParagraphTenseConversionQuestions,
  getGrammarGeneratorQuestions,
  getTrueFalseLightningQuestions,
} = require("./question-data");

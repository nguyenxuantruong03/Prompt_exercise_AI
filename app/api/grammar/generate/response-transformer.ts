import { AIQuestionResponse, ExerciseType, ProficiencyLevel } from "./types";
import { generateFallbackOptions } from "./fallback-options";

export const transformAIResponse = (
  parsedResponse: any,
  exerciseType: ExerciseType,
  grammarText: string,
  proficiencyLevel: ProficiencyLevel
) => {
  if (!parsedResponse.exercise) {
    return parsedResponse;
  }

  const transformedExercise = {
    ...parsedResponse.exercise,
    questions: parsedResponse.exercise.questions.map(
      (q: AIQuestionResponse, index: number) => {
        // Convert letter-based correct answers (a, b, c, d) to numbers (0, 1, 2, 3)
        // Also handle true/false string values for lightning games
        let correctAnswer = q.correct;
        if (typeof correctAnswer === "string") {
          const letterToNumber: { [key: string]: number } = {
            a: 0,
            A: 0,
            b: 1,
            B: 1,
            c: 2,
            C: 2,
            d: 3,
            D: 3,
            // Handle true/false for lightning games
            true: 0,
            TRUE: 0,
            false: 1,
            FALSE: 1,
          };
          correctAnswer =
            letterToNumber[correctAnswer] !== undefined
              ? letterToNumber[correctAnswer]
              : 0;
        }

        // Extract the actual question content
        let fullQuestion = extractQuestionContent(q, index);

        // Debug log
        console.log(
          `Question ${index + 1} raw data:`,
          JSON.stringify(q, null, 2)
        );
        console.log(`Final question text: "${fullQuestion}"`);

        // Extra debug for lightning games
        if (exerciseType === "true-false-lightning") {
          console.log(`⚡ Lightning Q${index + 1} lightningData check:`, {
            hasLightningData: !!q.lightningData,
            lightningDataKeys: q.lightningData
              ? Object.keys(q.lightningData)
              : "none",
            sentence: q.lightningData?.sentence || q.sentence || "missing",
            correctness: q.lightningData?.correctness,
            timeLimit: q.lightningData?.timeLimit,
          });
        } // Handle options validation and fallback generation
        let finalOptions = validateAndGenerateOptions(
          q.options,
          exerciseType,
          grammarText,
          q,
          index,
          proficiencyLevel
        );

        // Ensure correct answer is within valid range
        if (
          finalOptions.length > 0 &&
          (typeof correctAnswer !== "number" ||
            correctAnswer >= finalOptions.length ||
            correctAnswer < 0)
        ) {
          correctAnswer = 0;
          console.log(
            `🔧 Corrected answer index for question ${
              index + 1
            } to 0 (was invalid)`
          );
        }

        // Debug logging
        console.log(`Question ${index + 1} processed:`, {
          exerciseType,
          originalOptions: q.options,
          finalOptionsCount: finalOptions?.length || 0,
          correctAnswer,
        });

        return {
          id: index + 1,
          question: fullQuestion,
          options: finalOptions,
          correct: correctAnswer,
          explanation:
            (q.explanation as string) ||
            `This tests ${grammarText} grammar rules.`,
          tip:
            (q.tip as string) ||
            `Grammar tip: This question tests ${grammarText}. Review the rules for when and how to use ${grammarText} correctly.`,
          tense: (q.tense as string) || null,
          type: exerciseType,
          passage: q.passage as string,
          incorrectText: q.incorrectText as string,
          words: q.words as string[],
          pairs: q.pairs as Array<{ left: string; right: string }>,
          // Add context for context-matching exercises
          context: exerciseType === "context-matching" ? q.context : undefined,
          // Add new fields for new exercise types
          voicePairs:
            exerciseType === "passive-active-matching"
              ? q.voicePairs
              : undefined,
          clauses: exerciseType === "clause-combining" ? q.clauses : undefined,
          grammarTopics:
            exerciseType === "multi-topic-integration"
              ? q.grammarTopics
              : undefined,
          topicWeights:
            exerciseType === "multi-topic-integration"
              ? q.topicWeights
              : undefined,
          // Add grammar generator data
          generatorData:
            exerciseType === "grammar-generator"
              ? {
                  vocabulary: q.vocabulary || [],
                  grammarRule: q.grammarRule || grammarText,
                  generatedSentences: q.generatedSentences || [],
                  task: q.task || "generate",
                }
              : undefined,
          // Add lightning data for true-false lightning
          lightningData:
            exerciseType === "true-false-lightning"
              ? {
                  sentence:
                    q.lightningData?.sentence || q.sentence || fullQuestion,
                  timeLimit: q.lightningData?.timeLimit || q.timeLimit || 5,
                  correctness:
                    q.lightningData?.correctness !== undefined
                      ? Boolean(q.lightningData.correctness) // Ensure it's boolean
                      : correctAnswer === 0,
                  errorType: q.lightningData?.errorType || q.errorType,
                  quickExplanation:
                    q.lightningData?.quickExplanation ||
                    q.quickExplanation ||
                    q.explanation ||
                    "Check the grammar structure.",
                }
              : undefined,
          // Add word arrangement data for word-arrangement-race games
          wordArrangementData:
            exerciseType === "word-arrangement-race"
              ? {
                  scrambledWords: q.wordArrangementData?.scrambledWords || [],
                  correctOrder: q.wordArrangementData?.correctOrder || [],
                  timeLimit: q.wordArrangementData?.timeLimit || 30,
                  hints: q.wordArrangementData?.hints || [],
                }
              : undefined,
          // Add memory match data for grammar-memory-match games
          memoryMatchData:
            exerciseType === "grammar-memory-match"
              ? {
                  pairs: q.memoryMatchData?.pairs || [],
                  timeLimit: q.memoryMatchData?.timeLimit || 60,
                }
              : undefined,
        };
      }
    ),
  };

  return { exercise: transformedExercise };
};

const extractQuestionContent = (
  q: AIQuestionResponse,
  index: number
): string => {
  let fullQuestion = "";

  // Try different possible question field names from AI response
  if (q.question && q.question !== `Question ${index + 1}`) {
    fullQuestion = q.question;
  } else if (q.text && q.text !== `Question ${index + 1}`) {
    fullQuestion = q.text;
  } else if (q.prompt) {
    fullQuestion = q.prompt;
  } else if (q.sentence) {
    fullQuestion = q.sentence;
  } else {
    fullQuestion = `Question ${index + 1}`;
  }

  // Add additional content if available
  if (q.sentence && fullQuestion !== q.sentence) {
    fullQuestion += ` ${q.sentence}`;
  }

  // Add stem or base sentence if available
  if (q.stem) {
    fullQuestion += ` ${q.stem}`;
  }

  // Add multiple sentence options if they exist
  if (q.sentence1 && q.sentence2 && q.sentence3 && q.sentence4) {
    fullQuestion += ` Options: 1) ${q.sentence1} 2) ${q.sentence2} 3) ${q.sentence3} 4) ${q.sentence4}`;
  }

  // Add passage content if it exists
  if (q.passage) {
    fullQuestion = `Read the passage: "${q.passage}" ${fullQuestion}`;
  }

  // Add context or instructions if they exist
  if (q.context) {
    fullQuestion = `Context: ${q.context} ${fullQuestion}`;
  }

  if (q.instructions) {
    fullQuestion = `Instructions: ${q.instructions} ${fullQuestion}`;
  }

  return fullQuestion;
};

const validateAndGenerateOptions = (
  options: string[] | undefined,
  exerciseType: ExerciseType,
  grammarText: string,
  questionData: AIQuestionResponse,
  index: number,
  proficiencyLevel: ProficiencyLevel
): string[] => {
  let finalOptions = options || [];

  // Define exercise types that absolutely need options
  const exerciseTypesNeedingOptions = [
    "multiple-choice",
    "cloze-test",
    "transformation",
    "paraphrasing",
    "sentence-building",
    "verb-conjugation",
    "word-formation",
    "sentence-combining",
    "dialogue-completion",
    "punctuation",
    "reading-comprehension",
    "comparison-exercise",
    "context-matching",
  ];

  // Check if this exercise type needs options but doesn't have valid ones
  const needsOptions = exerciseTypesNeedingOptions.includes(exerciseType);
  const hasValidOptions =
    finalOptions && Array.isArray(finalOptions) && finalOptions.length >= 3;

  if (needsOptions && !hasValidOptions) {
    console.log(
      `⚠️  Question ${
        index + 1
      } needs options but has none. Generating fallback options for ${exerciseType}.`
    );
    finalOptions = generateFallbackOptions(
      exerciseType,
      grammarText,
      questionData,
      index,
      proficiencyLevel
    );
  }

  // Additional validation: ensure options are meaningful strings
  if (finalOptions && finalOptions.length > 0) {
    finalOptions = finalOptions.filter(
      (option) =>
        option && typeof option === "string" && option.trim().length > 0
    );

    // If after filtering we don't have enough options, generate fallbacks
    if (finalOptions.length < 3) {
      console.log(
        `⚠️  Question ${index + 1} has insufficient valid options (${
          finalOptions.length
        }). Generating fallback options.`
      );
      finalOptions = generateFallbackOptions(
        exerciseType,
        grammarText,
        questionData,
        index,
        proficiencyLevel
      );
    }
  }

  return finalOptions;
};

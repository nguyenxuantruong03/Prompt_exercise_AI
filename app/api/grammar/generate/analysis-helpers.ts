import { ScoreData, IncorrectQuestion } from './types';

export const generateAnalysisPrompt = (scoreData: ScoreData): string => {
  return `
TASK: Analyze user's grammar exercise performance and provide detailed feedback.

USER PERFORMANCE DATA:
- Score: ${scoreData.correct}/${scoreData.total} (${scoreData.percentage}%)
- Grammar Topic: "${scoreData.grammarTopic}"
- Exercise Type: ${scoreData.exerciseType}
- Proficiency Level: ${scoreData.proficiencyLevel}

INCORRECT QUESTIONS ANALYSIS:
${scoreData.incorrectQuestions
  .map(
    (item: IncorrectQuestion, index: number) => `
${index + 1}. Question: ${item.question}
   User Answer: ${item.userAnswer}
   Correct Answer: ${item.correctAnswer}
   Tense/Topic: ${item.tense || item.type}
   Explanation: ${item.explanation}
`
  )
  .join("\n")}

ANALYSIS REQUIREMENTS:
1. WEAK AREAS: Identify 3-5 specific grammar areas that need improvement based on incorrect answers
2. DETAILED FEEDBACK: Provide constructive, encouraging feedback (150-200 words)
3. LEARNING RECOMMENDATIONS: Give 5-7 actionable study recommendations

RESPONSE FORMAT (JSON):
{
  "weakAreas": ["Specific Area 1", "Specific Area 2", "Specific Area 3"],
  "feedback": "Detailed, encouraging analysis of performance with specific insights about what went wrong and what went right. Include patterns in mistakes and strengths demonstrated.",
  "recommendations": [
    "Specific recommendation 1 with actionable steps",
    "Specific recommendation 2 with actionable steps", 
    "Specific recommendation 3 with actionable steps",
    "Specific recommendation 4 with actionable steps",
    "Specific recommendation 5 with actionable steps"
  ]
}

Provide personalized, constructive analysis that helps the user improve their English grammar skills.`;
};

export const generateFallbackAnalysis = (scoreData: ScoreData) => {
  return {
    weakAreas: scoreData.incorrectQuestions
      .map((item: IncorrectQuestion) => item.tense || item.type || "")
      .filter(
        (area: string, index: number, arr: string[]) =>
          area && arr.indexOf(area) === index
      )
      .slice(0, 5),
    feedback: `You scored ${scoreData.correct}/${scoreData.total} (${
      scoreData.percentage
    }%). ${
      scoreData.percentage >= 80
        ? "Excellent work! You demonstrate strong understanding of " +
          scoreData.grammarTopic +
          "."
        : scoreData.percentage >= 60
        ? "Good job! You show good grasp of " +
          scoreData.grammarTopic +
          " but there's room for improvement."
        : "You need more practice with " +
          scoreData.grammarTopic +
          ". Focus on understanding the basic rules first."
    }`,
    recommendations: [
      "Review the questions you answered incorrectly",
      "Study the specific grammar rules for your weak areas",
      "Practice more exercises focusing on " + scoreData.grammarTopic,
      "Read example sentences to see correct usage patterns",
      "Take notes on grammar rules and review them regularly",
    ],
  };
};

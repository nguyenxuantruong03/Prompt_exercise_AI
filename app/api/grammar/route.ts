import { NextRequest, NextResponse } from "next/server";
import { callAI, AI_PROVIDERS, AIProviderType } from "@/lib/ai-providers";
import {
  // Types
  ExerciseType,
  ProficiencyLevel,
  RequestBody,

  // Helper functions
  getCertificateContext,
  getLevelContext,
  generateBaseInstruction,
  generatePromptForExerciseType,
  transformAIResponse,
  generateAnalysisPrompt,
  generateFallbackAnalysis,
  type PromptGeneratorOptions,
} from "./generate";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await request.json();
    const {
      text,
      action,
      exerciseType = "multiple-choice" as ExerciseType,
      proficiencyLevel = "A1" as ProficiencyLevel,
      certificateType,
      numExercises = 5,
      provider = AI_PROVIDERS.GROQ,
      scoreData,
      detailedAnalysis = false,
      lightningTimeLimit = 10,
    } = body;

    // Validate and convert provider string to AIProviderType
    const validProvider: AIProviderType = Object.values(AI_PROVIDERS).includes(
      provider as AIProviderType
    )
      ? (provider as AIProviderType)
      : AI_PROVIDERS.GROQ;

    // Remove the text requirement for analyze_performance action
    if (!text && action !== "analyze_performance") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Ensure text is defined for generate action
    const grammarText = text || "English Grammar";

    // Get context and requirements using helper functions
    const levelContext = getLevelContext(proficiencyLevel);
    const certificateContext = certificateType
      ? getCertificateContext(certificateType)
      : "";

    if (action === "generate") {
      // Generate base instruction
      const baseInstruction = generateBaseInstruction(
        grammarText,
        exerciseType,
        proficiencyLevel,
        numExercises,
        levelContext,
        certificateContext,
        detailedAnalysis
      );

      // Generate prompt based on exercise type
      const promptOptions: PromptGeneratorOptions = {
        grammarText,
        exerciseType,
        proficiencyLevel,
        certificateType,
        numExercises,
        levelContext,
        certificateContext,
        levelRequirements: "", // This will be filled by generateBaseInstruction
        detailedAnalysis,
        baseInstruction,
        lightningTimeLimit,
      };

      const prompt = generatePromptForExerciseType(promptOptions);

      let transformedResponse;

      try {
        // Call AI with generated prompt
        const aiResponse: string = await callAI(prompt, validProvider);
        console.log(
          "🤖 AI Raw Response:",
          aiResponse.substring(0, 500) + "..."
        );

        // Parse and transform response
        let parsedResponse;
        try {
          parsedResponse = JSON.parse(aiResponse);
          console.log(
            "📋 Parsed AI Response (questions):",
            parsedResponse.questions?.length || "no questions field"
          );
          if (
            exerciseType === "true-false-lightning" &&
            parsedResponse.questions
          ) {
            console.log(
              "⚡ Lightning questions lightningData:",
              parsedResponse.questions.map(
                (q: any, i: number) =>
                  `Q${i + 1}: ${
                    q.lightningData
                      ? "HAS lightningData"
                      : "MISSING lightningData"
                  } - sentence: "${q.lightningData?.sentence}"`
              )
            );
          }
        } catch (parseError) {
          console.log("error parsing AI response:", parseError);
          const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsedResponse = JSON.parse(jsonMatch[0]);
            } catch {
              parsedResponse = { response: aiResponse };
            }
          } else {
            parsedResponse = { response: aiResponse };
          }
        }

        // Transform AI response using helper function
        transformedResponse = transformAIResponse(
          parsedResponse,
          exerciseType,
          grammarText,
          proficiencyLevel
        );

        // Validate the response has valid questions
        if (
          !transformedResponse.exercise ||
          !transformedResponse.exercise.questions ||
          transformedResponse.exercise.questions.length === 0
        ) {
          throw new Error("AI response did not contain valid questions");
        }
      } catch (aiError) {
        console.log("🚨 AI API failed, using backup exercises:", aiError);

        // Import backup system
        const { getBackupExercise } = await import(
          "@/lib/static/exercise-backup"
        );

        // Get backup exercise
        const backupExercise = getBackupExercise(
          grammarText,
          exerciseType,
          proficiencyLevel,
          numExercises,
          certificateType
        );

        if (backupExercise) {
          transformedResponse = {
            exercise: backupExercise,
            success: true,
            source: "backup",
          };
          console.log("✅ Using backup exercise:", backupExercise.title);
        } else {
          // Final fallback - create minimal exercise
          transformedResponse = {
            exercise: {
              title: `${grammarText} - ${exerciseType} (${proficiencyLevel}) - Basic Exercise`,
              questions: [
                {
                  id: 1,
                  question: `Practice ${grammarText} with this basic exercise.`,
                  options: ["Option A", "Option B", "Option C", "Option D"],
                  correct: 0,
                  explanation: `This is a backup exercise for ${grammarText}.`,
                  tip: `Study ${grammarText} rules and practice more.`,
                  tense: grammarText,
                  type: exerciseType,
                },
              ],
              type: exerciseType,
            },
            success: true,
            source: "fallback",
          };
          console.log("⚠️ Using minimal fallback exercise");
        }
      }

      console.log(
        "🔄 Transformed Response (questions):",
        transformedResponse.questions?.length || "no questions"
      );
      if (
        exerciseType === "true-false-lightning" &&
        transformedResponse.questions
      ) {
        console.log(
          "⚡ Final lightning questions:",
          transformedResponse.questions.map(
            (q: any, i: number) =>
              `Q${i + 1}: ${
                q.lightningData ? "HAS lightningData" : "MISSING lightningData"
              } - sentence: "${q.lightningData?.sentence}"`
          )
        );
      }

      return NextResponse.json(transformedResponse);
    } else if (action === "analyze_performance") {
      // Ensure scoreData exists for analyze_performance action
      if (!scoreData) {
        return NextResponse.json(
          { error: "Score data is required for performance analysis" },
          { status: 400 }
        );
      }

      // Generate analysis prompt
      const analysisPrompt = generateAnalysisPrompt(scoreData);

      try {
        const analysisResult: string = await callAI(
          analysisPrompt,
          validProvider
        );

        // Try to parse as JSON, with fallback
        let parsedAnalysis;
        try {
          parsedAnalysis = JSON.parse(analysisResult);
        } catch (parseError) {
          console.log("error parsing analysis result:", parseError);
          parsedAnalysis = generateFallbackAnalysis(scoreData);
        }

        return NextResponse.json(parsedAnalysis);
      } catch (error) {
        console.error("Error in performance analysis:", error);
        return NextResponse.json(generateFallbackAnalysis(scoreData));
      }
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Grammar API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process request",
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { callFalAIWithFallback } from "@/lib/ai-providers";

interface ImageGenerationRequest {
  prompt: string;
  grammarTopic: string;
  proficiencyLevel: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  style?: "realistic" | "cartoon" | "illustration" | "educational";
  correctAnswer?: string;
  questionText?: string;
  answerFocused?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: ImageGenerationRequest = await request.json();
    const {
      prompt,
      grammarTopic,
      proficiencyLevel,
      aspectRatio = "square",
      style = "educational",
      correctAnswer,
      questionText,
      answerFocused = false,
    } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    console.log(
      "🎨 Generating answer-focused image with enhanced FAL AI integration..."
    );
    console.log(`📝 Prompt: ${prompt}`);
    console.log(`📚 Topic: ${grammarTopic}, Level: ${proficiencyLevel}`);
    if (answerFocused && correctAnswer) {
      console.log(`✅ Answer-focused generation for: "${correctAnswer}"`);
      console.log(`❓ Question: ${questionText}`);
    }

    // Enhance the prompt for answer-focused generation
    let enhancedPrompt = prompt;
    if (answerFocused && correctAnswer) {
      enhancedPrompt = `${prompt} IMPORTANT: The image must visually support the concept without showing any text, words, or grammar terms. Create visual evidence through environmental storytelling, object relationships, and contextual clues that make students naturally think of the correct choice. The scene should demonstrate the grammar concept purely through visual elements, spatial relationships, actions, and situational context. NO TEXT OR WRITTEN WORDS should appear anywhere in the image.`;
    }

    // Use the new FAL AI provider with fallback support
    const result = await callFalAIWithFallback(enhancedPrompt, {
      grammarTopic,
      proficiencyLevel,
      aspectRatio,
      style,
      correctAnswer,
      answerFocused,
    });

    if (result.success) {
      console.log(
        `✅ Answer-focused image generated successfully with ${result.provider}!`
      );
      if (correctAnswer) {
        console.log(
          `🎯 Image should visually support answer: "${correctAnswer}"`
        );
      }
      return NextResponse.json({
        success: true,
        imageUrl: result.imageUrl,
        prompt: result.prompt,
        apiKeyUsed: result.apiKeyUsed,
        provider: result.provider,
        answerFocused: answerFocused,
        correctAnswer: correctAnswer,
      });
    } else {
      console.log(`⚠️ Using answer-focused fallback image: ${result.error}`);
      return NextResponse.json(
        {
          success: false,
          imageUrl: result.imageUrl, // This will be the placeholder
          error: result.error,
          fallbackImage: result.imageUrl,
          provider: result.provider,
          answerFocused: answerFocused,
          correctAnswer: correctAnswer,
        },
        { status: 200 }
      ); // Still return 200 since we have a fallback
    }
  } catch (error) {
    console.error("Answer-focused image generation error:", error);

    // Generate a contextual fallback with answer context
    const { correctAnswer, grammarTopic } = await request
      .json()
      .catch(() => ({}));
    const fallbackText = correctAnswer
      ? `🎨 Image Generation Failed\n\n🎯 Look for: "${correctAnswer}"\n📚 Topic: ${grammarTopic}\n\nUse the context to identify visual clues`
      : `🎨 Image Generation Failed\n\nPlease try again or use the context description for visual learning`;

    const fallbackUrl = `https://via.placeholder.com/512x512/f8f9fa/495057?text=${encodeURIComponent(
      fallbackText
    )}`;

    return NextResponse.json(
      {
        success: false,
        imageUrl: fallbackUrl,
        error: "Failed to generate answer-focused image",
        details: error instanceof Error ? error.message : "Unknown error",
        fallbackImage: fallbackUrl,
        correctAnswer: correctAnswer,
      },
      { status: 200 } // Return 200 with fallback instead of error
    );
  }
}

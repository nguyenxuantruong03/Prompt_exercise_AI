import { NextRequest, NextResponse } from "next/server";
import { callGroqWithFallback } from "@/lib/ai-providers";

export async function POST(request: NextRequest) {
  try {
    const { vocabulary, grammarRule, count = 3 } = await request.json();

    if (!vocabulary || !Array.isArray(vocabulary) || vocabulary.length === 0) {
      return NextResponse.json(
        { error: "Vocabulary array is required" },
        { status: 400 }
      );
    }

    if (!grammarRule || typeof grammarRule !== "string") {
      return NextResponse.json(
        { error: "Grammar rule is required" },
        { status: 400 }
      );
    }

    const prompt = `Create ${count} example sentences using the grammar rule "${grammarRule}" and incorporating some of these vocabulary words: ${vocabulary.join(
      ", "
    )}.

Requirements:
- Each sentence should demonstrate the grammar rule clearly
- Use at least 2-3 vocabulary words per sentence when possible
- Make sentences realistic and contextually appropriate
- Vary the sentence structures
- Keep sentences between 8-15 words

Please return only the sentences, one per line, without numbering or bullets.`;

    const response = await callGroqWithFallback(prompt, {
      max_tokens: 500,
      temperature: 0.7,
    });

    if (!response) {
      throw new Error("No response from AI service");
    }

    // Parse the sentences from the response
    const sentences = response
      .split("\n")
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0 && !line.match(/^\d+\./)) // Remove numbered lines
      .slice(0, count);

    // Fallback sentences if AI doesn't provide enough
    while (sentences.length < count) {
      const fallbackSentences = [
        `The student learns ${grammarRule.toLowerCase()} rules at school.`,
        `We practice ${grammarRule.toLowerCase()} exercises every day.`,
        `Grammar helps us communicate effectively with others.`,
      ];
      const fallback =
        fallbackSentences[sentences.length % fallbackSentences.length];
      sentences.push(fallback);
    }

    return NextResponse.json({
      sentences,
      grammarRule,
      vocabulary,
      count: sentences.length,
    });
  } catch (error) {
    console.error("Grammar generator error:", error);

    // Provide fallback response
    const {
      vocabulary = [],
      grammarRule = "grammar",
      count = 3,
    } = await request.json().catch(() => ({}));

    const fallbackSentences = [
      `Students study ${grammarRule.toLowerCase()} rules carefully.`,
      `Teachers explain ${grammarRule.toLowerCase()} concepts clearly.`,
      `Practice makes perfect when learning ${grammarRule.toLowerCase()}.`,
    ].slice(0, count);

    return NextResponse.json({
      sentences: fallbackSentences,
      grammarRule,
      vocabulary,
      count: fallbackSentences.length,
    });
  }
}

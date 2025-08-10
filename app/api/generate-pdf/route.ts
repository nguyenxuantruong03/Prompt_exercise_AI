import { NextResponse } from "next/server";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";

export async function POST() {
  try {
    // For now, we'll return the grammar data structure
    // The actual PDF generation will happen client-side due to pdfmake requirements

    const grammarTopics = Object.keys(tenseDatabase).filter(
      (key) => key !== "createdAt" && key !== "updatedAt"
    );
    const totalTopics = grammarTopics.length;

    // Organize topics by categories for better structure
    const categorizedTopics = {
      VERB_TENSES: grammarTopics.filter(
        (topic) =>
          topic.includes("Present") ||
          topic.includes("Past") ||
          topic.includes("Future") ||
          topic.includes("Conditional") ||
          topic.includes("Perfect") ||
          topic.includes("Continuous")
      ),
      NOUNS_PRONOUNS: grammarTopics.filter(
        (topic) =>
          topic.includes("Noun") ||
          topic.includes("Pronoun") ||
          topic.includes("Collective") ||
          topic.includes("Countable") ||
          topic.includes("Uncountable") ||
          topic.includes("Plural") ||
          topic.includes("Singular")
      ),
      ADJECTIVES_ADVERBS: grammarTopics.filter(
        (topic) =>
          topic.includes("Adjective") ||
          topic.includes("Adverb") ||
          topic.includes("Comparative") ||
          topic.includes("Superlative")
      ),
      ADVANCED_GRAMMAR: grammarTopics.filter(
        (topic) =>
          topic.includes("advanced") ||
          topic.includes("Advanced") ||
          topic.includes("Cleft") ||
          topic.includes("Nominal") ||
          topic.includes("Parallel") ||
          topic.includes("Reduced")
      ),
      COMMUNICATION: grammarTopics.filter(
        (topic) =>
          topic.includes("expressing") ||
          topic.includes("polite") ||
          topic.includes("transition") ||
          topic.includes("Agreement") ||
          topic.includes("Discourse")
      ),
      VERBS_SPECIAL: grammarTopics.filter(
        (topic) =>
          topic.includes("Causative") ||
          topic.includes("Linking") ||
          topic.includes("Perception") ||
          topic.includes("Reporting") ||
          topic.includes("Reflexive") ||
          topic.includes("Irregular") ||
          topic.includes("phrasal") ||
          topic.includes("infinitive") ||
          topic.includes("transitive")
      ),
    };

    // Calculate remaining topics for "SPECIAL_CONSTRUCTIONS"
    const specialConstructions = grammarTopics.filter(
      (topic) => !Object.values(categorizedTopics).flat().includes(topic)
    );

    return NextResponse.json({
      success: true,
      message: "Grammar data retrieved successfully",
      data: {
        totalTopics,
        categorizedTopics: {
          ...categorizedTopics,
          SPECIAL_CONSTRUCTIONS: specialConstructions,
        },
        grammarData: tenseDatabase,
        metadata: {
          generatedAt: new Date().toISOString(),
          language: "English",
          supportedLanguages: ["English", "Vietnamese"],
          format: "PDF",
          categories: Object.keys(categorizedTopics).length + 1,
        },
      },
    });
  } catch (error) {
    console.error("Error generating PDF data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve grammar data",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const grammarTopics = Object.keys(tenseDatabase).filter(
      (key) => key !== "createdAt" && key !== "updatedAt"
    );

    return NextResponse.json({
      success: true,
      message: "Grammar topics list retrieved",
      data: {
        totalTopics: grammarTopics.length,
        topics: grammarTopics,
        availableEndpoints: {
          POST: "/api/generate-pdf - Generate complete PDF data",
          GET: "/api/generate-pdf - Get topics list",
        },
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve topics",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

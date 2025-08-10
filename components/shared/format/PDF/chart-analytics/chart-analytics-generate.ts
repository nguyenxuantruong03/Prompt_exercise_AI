import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions, Content } from "pdfmake/interfaces";
import { MistakeAnalytics } from "@/types/grammars/grammars_type";
import { mistakeTracker } from "@/lib/static/grammars/mistake-tracker";
import {
  PDFMakeStatic,
  PDFFontsInterface,
  MistakeData,
} from "@/types/formats/chart-analytics-generate";

// Initialize PDFMake with fonts (safer approach)
let pdfMakeInitialized = false;

const initializePDFMake = (): void => {
  if (typeof window !== "undefined" && !pdfMakeInitialized) {
    try {
      const pdfMakeTyped = pdfMake as unknown as PDFMakeStatic;
      const pdfFontsTyped = pdfFonts as PDFFontsInterface;

      // Try different approaches to set the VFS
      if (pdfFontsTyped.pdfMake && pdfFontsTyped.pdfMake.vfs) {
        pdfMakeTyped.vfs = pdfFontsTyped.pdfMake.vfs;
      } else if (pdfFontsTyped.vfs) {
        pdfMakeTyped.vfs = pdfFontsTyped.vfs;
      } else {
        // Fallback - use the imported fonts directly
        pdfMakeTyped.vfs = pdfFonts as unknown as {
          [filename: string]: string;
        };
      }
      pdfMakeInitialized = true;
    } catch (error) {
      console.warn("PDFMake VFS initialization warning:", error);
      // Continue without VFS - PDFMake will use default fonts
      pdfMakeInitialized = true;
    }
  }
};

/**
 * Generate and download a comprehensive PDF analytics report
 * @param analytics - The analytics data to include in the report
 * @returns boolean indicating success
 */
export const generateAnalyticsPDF = (analytics: MistakeAnalytics): boolean => {
  // Initialize PDFMake if not already done
  initializePDFMake();

  if (!analytics) {
    console.error("Analytics data is required to generate PDF");
    return false;
  }

  const data = mistakeTracker.exportMistakes();
  const mistakesData: MistakeData[] = JSON.parse(data);

  // Define document content
  const docDefinition: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [40, 60, 40, 60],

    // Document info
    info: {
      title: "Grammar Analytics Report",
      author: "Grammar Learning Platform",
      subject: "Learning Progress Analysis",
      creator: "AI Grammar Assistant",
      creationDate: new Date(),
    },

    // Header and Footer
    header: (): Content => {
      return {
        columns: [
          { text: "Grammar Analytics Report", style: "header" },
          {
            text: new Date().toLocaleDateString(),
            style: "headerDate",
            alignment: "right",
          },
        ],
        margin: [40, 20, 40, 20] as [number, number, number, number],
      };
    },

    footer: (currentPage: number, pageCount: number): Content => {
      return {
        text: `Page ${currentPage} of ${pageCount}`,
        alignment: "center",
        style: "footer",
        margin: [0, 10, 0, 0] as [number, number, number, number],
      };
    },

    content: [
      // Title Section
      {
        text: "Grammar Learning Analytics Report",
        style: "title",
        alignment: "center",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Executive Summary
      {
        text: "Executive Summary",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      {
        table: {
          widths: ["*", "*"],
          body: [
            [
              { text: "Total Learning Sessions", style: "summaryLabel" },
              {
                text: analytics.totalMistakes.toString(),
                style: "summaryValue",
              },
            ],
            [
              { text: "Average Accuracy Rate", style: "summaryLabel" },
              { text: `${analytics.averageAccuracy}%`, style: "summaryValue" },
            ],
            [
              { text: "Active Learning Period", style: "summaryLabel" },
              {
                text:
                  mistakesData.length > 0
                    ? `${Math.ceil(
                        (new Date().getTime() -
                          new Date(mistakesData[0].timestamp).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )} days`
                    : "N/A",
                style: "summaryValue",
              },
            ],
            [
              { text: "Areas for Improvement", style: "summaryLabel" },
              {
                text: analytics.weakestAreas.length.toString(),
                style: "summaryValue",
              },
            ],
            [
              { text: "Total Exercise Types Practiced", style: "summaryLabel" },
              {
                text: Object.keys(
                  analytics.mistakesByExerciseType
                ).length.toString(),
                style: "summaryValue",
              },
            ],
            [
              { text: "Grammar Topics Covered", style: "summaryLabel" },
              {
                text: Object.keys(analytics.mistakesByTopic).length.toString(),
                style: "summaryValue",
              },
            ],
            [
              { text: "CEFR Levels Attempted", style: "summaryLabel" },
              {
                text: Object.keys(analytics.mistakesByLevel).length.toString(),
                style: "summaryValue",
              },
            ],
          ],
        },
        layout: "lightHorizontalLines",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Performance by Grammar Tense
      {
        text: "Performance by Grammar Tense",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      {
        table: {
          widths: ["*", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Grammar Tense", style: "tableHeader" },
              { text: "Mistakes", style: "tableHeader" },
              { text: "Frequency", style: "tableHeader" },
            ],
            ...Object.entries(analytics.mistakesByTense)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 10)
              .map(([tense, count]) => [
                { text: tense || "General Grammar", style: "tableCell" },
                {
                  text: count.toString(),
                  style: "tableCell",
                  alignment: "center",
                },
                {
                  text: `${Math.round(
                    (count / analytics.totalMistakes) * 100
                  )}%`,
                  style:
                    count > analytics.totalMistakes * 0.15
                      ? "errorCell"
                      : "tableCell",
                  alignment: "center",
                },
              ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Exercise Type Performance
      {
        text: "Exercise Type Performance",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      {
        table: {
          widths: ["*", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Exercise Type", style: "tableHeader" },
              { text: "Attempts", style: "tableHeader" },
              { text: "Challenge Level", style: "tableHeader" },
            ],
            ...Object.entries(analytics.mistakesByExerciseType)
              .sort(([, a], [, b]) => b - a)
              .map(([type, count]) => [
                {
                  text: type
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                  style: "tableCell",
                },
                {
                  text: count.toString(),
                  style: "tableCell",
                  alignment: "center",
                },
                {
                  text: count > 5 ? "High" : count > 2 ? "Medium" : "Low",
                  style:
                    count > 5
                      ? "errorCell"
                      : count > 2
                      ? "warningCell"
                      : "successCell",
                  alignment: "center",
                },
              ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // CEFR Level Distribution
      {
        text: "CEFR Level Distribution",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "CEFR Level", style: "tableHeader" },
              { text: "Practice Sessions", style: "tableHeader" },
              { text: "Difficulty", style: "tableHeader" },
              { text: "Status", style: "tableHeader" },
            ],
            ...Object.entries(analytics.mistakesByLevel)
              .sort(([a], [b]) => {
                const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
                return levels.indexOf(a) - levels.indexOf(b);
              })
              .map(([level, count]) => [
                { text: level, style: "levelCell", alignment: "center" },
                {
                  text: count.toString(),
                  style: "tableCell",
                  alignment: "center",
                },
                {
                  text: ["A1", "A2"].includes(level)
                    ? "Beginner"
                    : ["B1", "B2"].includes(level)
                    ? "Intermediate"
                    : "Advanced",
                  style: "tableCell",
                  alignment: "center",
                },
                {
                  text:
                    count > 10
                      ? "Needs Focus"
                      : count > 5
                      ? "In Progress"
                      : "Good",
                  style:
                    count > 10
                      ? "errorCell"
                      : count > 5
                      ? "warningCell"
                      : "successCell",
                  alignment: "center",
                },
              ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Grammar Topics Analysis
      Object.keys(analytics.mistakesByTopic).length > 0 && {
        text: "Grammar Topics Analysis",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      Object.keys(analytics.mistakesByTopic).length > 0 && {
        table: {
          widths: ["*", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Grammar Topic", style: "tableHeader" },
              { text: "Mistake Count", style: "tableHeader" },
              { text: "Percentage", style: "tableHeader" },
            ],
            ...Object.entries(analytics.mistakesByTopic)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 12)
              .map(([topic, count]) => [
                { text: topic, style: "tableCell" },
                {
                  text: count.toString(),
                  style: "tableCell",
                  alignment: "center",
                },
                {
                  text: `${Math.round(
                    (count / analytics.totalMistakes) * 100
                  )}%`,
                  style:
                    count > analytics.totalMistakes * 0.1
                      ? "errorCell"
                      : "tableCell",
                  alignment: "center",
                },
              ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Difficulty Level Analysis
      Object.keys(analytics.mistakesByDifficulty).length > 0 && {
        text: "Difficulty Level Analysis",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      Object.keys(analytics.mistakesByDifficulty).length > 0 && {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Difficulty Level", style: "tableHeader" },
              { text: "Attempts", style: "tableHeader" },
              { text: "Percentage", style: "tableHeader" },
              { text: "Performance", style: "tableHeader" },
            ],
            ...Object.entries(analytics.mistakesByDifficulty)
              .sort(([a], [b]) => {
                const order = ["easy", "medium", "hard"];
                return order.indexOf(a) - order.indexOf(b);
              })
              .map(([difficulty, count]) => {
                const percentage = Math.round(
                  (count / analytics.totalMistakes) * 100
                );
                const performance =
                  difficulty === "easy"
                    ? count < analytics.totalMistakes * 0.3
                      ? "Good"
                      : "Needs Review"
                    : difficulty === "medium"
                    ? count < analytics.totalMistakes * 0.4
                      ? "Good"
                      : "Challenging"
                    : count < analytics.totalMistakes * 0.3
                    ? "Excellent"
                    : "Very Challenging";

                return [
                  {
                    text:
                      difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
                    style: "tableCell",
                  },
                  {
                    text: count.toString(),
                    style: "tableCell",
                    alignment: "center",
                  },
                  {
                    text: `${percentage}%`,
                    style: "tableCell",
                    alignment: "center",
                  },
                  {
                    text: performance,
                    style:
                      performance.includes("Good") ||
                      performance.includes("Excellent")
                        ? "successCell"
                        : performance.includes("Challenging")
                        ? "warningCell"
                        : "errorCell",
                    alignment: "center",
                  },
                ];
              }),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Improvement Trends Analysis
      analytics.improvementTrends.length > 0 && {
        text: "Learning Progress Trends",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      analytics.improvementTrends.length > 0 && {
        table: {
          widths: ["*", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Date", style: "tableHeader" },
              { text: "Accuracy Rate", style: "tableHeader" },
              { text: "Questions Attempted", style: "tableHeader" },
            ],
            ...analytics.improvementTrends.slice(-10).map((trend) => [
              {
                text: new Date(trend.date).toLocaleDateString(),
                style: "tableCell",
              },
              {
                text: `${trend.accuracy}%`,
                style:
                  trend.accuracy > 70
                    ? "successCell"
                    : trend.accuracy > 50
                    ? "warningCell"
                    : "errorCell",
                alignment: "center",
              },
              {
                text: trend.totalQuestions.toString(),
                style: "tableCell",
                alignment: "center",
              },
            ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Top Areas for Improvement
      analytics.weakestAreas.length > 0 && {
        text: "Top Areas for Improvement",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      analytics.weakestAreas.length > 0 && {
        table: {
          widths: ["*", "auto", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Grammar Area", style: "tableHeader" },
              { text: "Mistakes", style: "tableHeader" },
              { text: "Percentage", style: "tableHeader" },
              { text: "Last Occurrence", style: "tableHeader" },
            ],
            ...analytics.weakestAreas.slice(0, 8).map((area) => [
              { text: area.area, style: "tableCell" },
              {
                text: area.count.toString(),
                style: "errorCell",
                alignment: "center",
              },
              {
                text: `${area.percentage}%`,
                style: "errorCell",
                alignment: "center",
              },
              {
                text: area.lastOccurrence.toLocaleDateString(),
                style: "tableCell",
                alignment: "center",
              },
            ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Recent Learning Activity
      analytics.recentMistakes.length > 0 && {
        text: "Recent Learning Activity",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      analytics.recentMistakes.length > 0 && {
        table: {
          widths: ["*", "auto", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Question", style: "tableHeader" },
              { text: "Topic", style: "tableHeader" },
              { text: "Date", style: "tableHeader" },
            ],
            ...analytics.recentMistakes.slice(0, 10).map((mistake) => [
              {
                text:
                  mistake.question.length > 50
                    ? mistake.question.substring(0, 50) + "..."
                    : mistake.question,
                style: "tableCell",
              },
              {
                text: mistake.grammarTopic,
                style: "tableCell",
                alignment: "center",
              },
              {
                text: mistake.timestamp.toLocaleDateString(),
                style: "tableCell",
                alignment: "center",
              },
            ]),
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Detailed Mistake Analysis
      mistakesData.length > 0 && {
        text: "Detailed Mistake Analysis",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
        pageBreak: "before",
      },
      mistakesData.length > 0 && {
        text: `This section contains detailed information about your recent mistakes to help identify patterns and areas for focused improvement.`,
        style: "description",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },

      // Recent mistakes with full details
      ...mistakesData
        .slice(0, 15)
        .map((mistake: MistakeData, index: number) => [
          {
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: `${index + 1}. ${mistake.question}`,
                    style: "mistakeQuestion",
                    margin: [10, 10, 10, 5] as [number, number, number, number],
                  },
                ],
              ],
            },
            layout: "noBorders",
            margin: [0, 15, 0, 5] as [number, number, number, number],
          },
          {
            table: {
              widths: ["auto", "*", "auto", "*"],
              body: [
                [
                  { text: "Your Answer:", style: "detailLabel" },
                  {
                    text: Array.isArray(mistake.userAnswer)
                      ? mistake.userAnswer.join(", ")
                      : mistake.userAnswer.toString(),
                    style: "errorText",
                  },
                  { text: "Correct Answer:", style: "detailLabel" },
                  {
                    text: Array.isArray(mistake.correctAnswer)
                      ? mistake.correctAnswer.join(", ")
                      : mistake.correctAnswer.toString(),
                    style: "successText",
                  },
                ],
                [
                  { text: "Grammar Topic:", style: "detailLabel" },
                  { text: mistake.grammarTopic, style: "tableCell" },
                  { text: "Difficulty:", style: "detailLabel" },
                  {
                    text:
                      mistake.difficulty.charAt(0).toUpperCase() +
                      mistake.difficulty.slice(1),
                    style:
                      mistake.difficulty === "hard"
                        ? "errorText"
                        : mistake.difficulty === "medium"
                        ? "warningText"
                        : "successText",
                  },
                ],
                [
                  { text: "Exercise Type:", style: "detailLabel" },
                  {
                    text: mistake.exerciseType
                      .split("-")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" "),
                    style: "tableCell",
                  },
                  { text: "Date:", style: "detailLabel" },
                  {
                    text: new Date(mistake.timestamp).toLocaleDateString(),
                    style: "tableCell",
                  },
                ],
              ],
            },
            layout: "lightHorizontalLines",
            margin: [0, 0, 0, 10] as [number, number, number, number],
          },
          mistake.explanation && {
            text: [
              { text: "Explanation: ", style: "explanationLabel" },
              { text: mistake.explanation, style: "explanation" },
            ],
            margin: [0, 0, 0, 20] as [number, number, number, number],
          },
        ])
        .flat()
        .filter(Boolean),

      // Learning Recommendations
      {
        text: "Learning Recommendations",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
        pageBreak: "before",
      },
      {
        text: "Based on your learning pattern analysis, here are personalized recommendations to improve your grammar skills:",
        style: "description",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      {
        ul: [
          analytics.averageAccuracy < 70
            ? "Focus on fundamental grammar concepts before advancing to complex structures"
            : "Continue building on your solid foundation with intermediate challenges",

          analytics.weakestAreas.length > 0
            ? `Priority areas for improvement: ${analytics.weakestAreas
                .slice(0, 3)
                .map((a) => a.area)
                .join(", ")}`
            : "Maintain consistent practice across all grammar areas",

          Object.keys(analytics.mistakesByDifficulty).includes("hard") &&
          analytics.mistakesByDifficulty["hard"] > analytics.totalMistakes * 0.3
            ? "Consider reviewing easier concepts before attempting advanced exercises"
            : "You're ready for more challenging grammar exercises",

          "Practice regularly with a variety of exercise types to improve overall fluency",
          'Focus on understanding the "why" behind grammar rules, not just memorizing patterns',
          "Use real-world examples and contexts when practicing grammar concepts",
        ],
        style: "recommendations",
        margin: [0, 0, 0, 20] as [number, number, number, number],
      },

      // Study Plan Suggestions
      {
        text: "Suggested Study Plan",
        style: "sectionHeader",
        margin: [0, 0, 0, 15] as [number, number, number, number],
      },
      {
        table: {
          widths: ["auto", "*", "auto"],
          headerRows: 1,
          body: [
            [
              { text: "Time", style: "tableHeader" },
              { text: "Focus Area", style: "tableHeader" },
              { text: "Duration", style: "tableHeader" },
            ],
            [
              { text: "Week 1-2", style: "tableCell" },
              {
                text:
                  analytics.weakestAreas.length > 0
                    ? `Review fundamentals: ${analytics.weakestAreas[0]?.area}`
                    : "Continue current practice routine",
                style: "tableCell",
              },
              { text: "15-20 min/day", style: "tableCell" },
            ],
            [
              { text: "Week 3-4", style: "tableCell" },
              {
                text:
                  analytics.weakestAreas.length > 1
                    ? `Strengthen: ${analytics.weakestAreas[1]?.area}`
                    : "Expand to new grammar areas",
                style: "tableCell",
              },
              { text: "20-25 min/day", style: "tableCell" },
            ],
            [
              { text: "Week 5-6", style: "tableCell" },
              {
                text: "Integration practice with mixed exercises",
                style: "tableCell",
              },
              { text: "25-30 min/day", style: "tableCell" },
            ],
            [
              { text: "Ongoing", style: "tableCell" },
              {
                text: "Regular review and challenging new concepts",
                style: "tableCell",
              },
              { text: "20-30 min/day", style: "tableCell" },
            ],
          ],
        },
        layout: "headerLineOnly",
        margin: [0, 0, 0, 30] as [number, number, number, number],
      },

      // Report Footer
      {
        text: [
          "Generated on: ",
          { text: new Date().toLocaleString(), style: "bold" },
          "\nTotal Data Points Analyzed: ",
          { text: analytics.totalMistakes.toString(), style: "bold" },
          "\n\nKeep up the excellent work! Consistent practice leads to significant improvement.",
        ],
        style: "reportFooter",
        alignment: "center",
        margin: [0, 40, 0, 0] as [number, number, number, number],
      },
    ].filter(Boolean) as Content[],

    // Styles
    styles: getPDFStyles(),

    // Default style
    defaultStyle: {
      font: "Roboto",
      fontSize: 11,
      lineHeight: 1.2,
    },
  };

  // Generate and download PDF
  try {
    const pdfMakeTyped = pdfMake as unknown as PDFMakeStatic;
    const pdfDocGenerator = pdfMakeTyped.createPdf(docDefinition);
    const fileName = `Grammar_Analytics_Report_${
      new Date().toISOString().split("T")[0]
    }.pdf`;

    pdfDocGenerator.download(fileName);

    // Show success message
    console.log("📥 PDF report generated successfully!");
    return true;
  } catch (error) {
    console.error("Failed to generate PDF report:", error);
    return false;
  }
};

/**
 * Get the PDF styles configuration
 */
const getPDFStyles = () => ({
  title: {
    fontSize: 24,
    bold: true,
    color: "#1f2937",
    font: "Roboto",
  },
  header: {
    fontSize: 14,
    bold: true,
    color: "#374151",
  },
  headerDate: {
    fontSize: 10,
    color: "#6b7280",
  },
  footer: {
    fontSize: 10,
    color: "#6b7280",
  },
  sectionHeader: {
    fontSize: 16,
    bold: true,
    color: "#1f2937",
    margin: [0, 20, 0, 10] as [number, number, number, number],
  },
  tableHeader: {
    fontSize: 12,
    bold: true,
    color: "#374151",
    fillColor: "#f3f4f6",
    margin: [8, 8, 8, 8] as [number, number, number, number],
  },
  tableCell: {
    fontSize: 11,
    color: "#4b5563",
    margin: [8, 6, 8, 6] as [number, number, number, number],
  },
  levelCell: {
    fontSize: 11,
    bold: true,
    color: "#1f2937",
    margin: [8, 6, 8, 6] as [number, number, number, number],
  },
  errorCell: {
    fontSize: 11,
    color: "#dc2626",
    bold: true,
    margin: [8, 6, 8, 6] as [number, number, number, number],
  },
  warningCell: {
    fontSize: 11,
    color: "#d97706",
    bold: true,
    margin: [8, 6, 8, 6] as [number, number, number, number],
  },
  successCell: {
    fontSize: 11,
    color: "#059669",
    bold: true,
    margin: [8, 6, 8, 6] as [number, number, number, number],
  },
  summaryLabel: {
    fontSize: 12,
    bold: true,
    color: "#374151",
    margin: [10, 8, 10, 8] as [number, number, number, number],
  },
  summaryValue: {
    fontSize: 12,
    color: "#1f2937",
    alignment: "right" as const,
    margin: [10, 8, 10, 8] as [number, number, number, number],
  },
  mistakeQuestion: {
    fontSize: 12,
    bold: true,
    color: "#1f2937",
  },
  detailLabel: {
    fontSize: 10,
    bold: true,
    color: "#6b7280",
  },
  errorText: {
    fontSize: 10,
    color: "#dc2626",
    italics: true,
  },
  successText: {
    fontSize: 10,
    color: "#059669",
    bold: true,
  },
  warningText: {
    fontSize: 10,
    color: "#d97706",
    bold: true,
  },
  explanationLabel: {
    fontSize: 11,
    bold: true,
    color: "#7c3aed",
  },
  explanation: {
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.3,
  },
  description: {
    fontSize: 11,
    color: "#6b7280",
    lineHeight: 1.4,
  },
  recommendations: {
    fontSize: 11,
    color: "#374151",
    lineHeight: 1.4,
  },
  reportFooter: {
    fontSize: 10,
    color: "#6b7280",
    lineHeight: 1.3,
  },
  bold: {
    bold: true,
  },
});

/**
 * Check if PDFMake is properly initialized
 */
export const isPDFMakeReady = (): boolean => {
  return pdfMakeInitialized && typeof window !== "undefined";
};

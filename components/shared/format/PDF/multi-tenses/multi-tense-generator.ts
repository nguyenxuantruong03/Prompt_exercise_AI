import pdfMake from "pdfmake/build/pdfmake";
import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from "pdfmake/interfaces";
import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  FlexibleObject,
  ComprehensiveTenseData,
  MultiTensePDFData,
  PDFTableNode,
} from "@/types/formats/pdf/multi-tense-generator";
import { TenseData } from "../../json_to_html/toggle-tenses";

type ContentWithId = Content & { id?: string };

// Professional color palette - colors only for main ideas, backgrounds for important content
export const colors = {
  // Core colors - for main ideas and truly important elements only
  primary: "#1e40af", // Deep blue for main headers and key content
  secondary: "#374151", // Dark gray for important section headers

  // Accent colors - reserved for critical highlights only
  accent: "#059669", // Green for formulas and key concepts ONLY
  success: "#16a34a", // Green for correct examples ONLY
  error: "#dc2626", // Red for wrong examples ONLY
  warning: "#d97706", // Orange for important tips ONLY

  // Main content backgrounds - for important content sections
  mainContentBg: "#f8fafc", // Very light blue-gray for main content areas
  formulaBg: "#ecfdf5", // Light green for formulas and structures
  headerBg: "#374151", // Dark background for major section headers
  importantBg: "#fef3c7", // Light yellow for key concepts

  // Text colors - high contrast for readability
  text: "#111827", // Deep black for main text
  lightText: "#6b7280", // Medium gray for secondary text
  white: "#ffffff",

  // Borders - consistent and minimal
  border: "#e5e7eb",
  borderLight: "#f3f4f6",
  borderMedium: "#d1d5db",

  // Aliases for consistency
  tenseName: "#1e40af",
  info: "#1e40af",
  mediumSection: "#374151",
  minorSection: "#6b7280",

  // All minor elements - clean white backgrounds (no distracting colors)
  sectionBg: "#ffffff", // Minor sections get no background
  exampleBg: "#ffffff", // Regular examples get no background
  noteBg: "#ffffff", // Notes get no background
  usageBg: "#ffffff", // Usage items get no background
  lightBg: "#ffffff", // Navigation links get no background
  gradientStart: "#ffffff", // Clean white for minor elements
  gradientEnd: "#ffffff", // Clean white for minor elements
};

// Configure pdfMake fonts for Vietnamese and English support
if (typeof window !== "undefined") {
  pdfMake.vfs = pdfFonts.vfs;

  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Medium.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-MediumItalic.ttf",
    },
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
  };
}

// Helper function to safely format any data type for display
const safeStringify = (value: unknown): string => {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => safeStringify(item)).join(", ");
  }

  if (typeof value === "object") {
    // Handle objects by creating a readable format
    const entries = Object.entries(value)
      .filter(([key]) => key !== "id") // Skip id fields
      .map(([key, val]) => {
        const formattedKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        return `${formattedKey}: ${safeStringify(val)}`;
      });
    return entries.join(" | ");
  }

  return String(value);
};

// Enhanced function to validate and clean data
const validateAndCleanData = (data: unknown): FlexibleObject => {
  if (!data || typeof data !== "object") {
    return data as FlexibleObject;
  }

  const cleaned: FlexibleObject = {};

  Object.entries(data).forEach(([key, value]) => {
    if (key === "id") return; // Skip id fields

    if (value === null || value === undefined) {
      return; // Skip null/undefined values
    }

    if (Array.isArray(value)) {
      // Clean arrays and ensure they have content
      const cleanedArray = value
        .filter((item) => item !== null && item !== undefined && item !== "")
        .map((item) => validateAndCleanData(item));
      if (cleanedArray.length > 0) {
        cleaned[key] = cleanedArray;
      }
    } else if (typeof value === "object") {
      // Recursively clean objects
      const cleanedObject = validateAndCleanData(value);
      if (Object.keys(cleanedObject).length > 0) {
        cleaned[key] = cleanedObject;
      }
    } else if (typeof value === "string" && value.trim() !== "") {
      // Keep non-empty strings
      cleaned[key] = value.trim();
    } else if (typeof value === "number" || typeof value === "boolean") {
      // Keep numbers and booleans
      cleaned[key] = value;
    }
  });

  return cleaned;
};

// Enhanced data validation function specifically for usage and mistakes
const validateUsageData = (usage: unknown): unknown[] => {
  if (!usage) return [];

  if (Array.isArray(usage)) {
    return usage.filter((item) => {
      if (typeof item === "string" && item.trim()) return true;
      if (typeof item === "object" && item !== null) {
        return (
          item.type ||
          item.description ||
          item.example ||
          Object.keys(item).some((key) => key !== "id" && item[key])
        );
      }
      return false;
    });
  }

  if (typeof usage === "object" && usage !== null) {
    const values = Object.values(usage).filter(
      (item) => item !== null && item !== undefined
    );
    return validateUsageData(values);
  }

  return [];
};

const validateMistakesData = (mistakes: unknown): unknown[] => {
  if (!mistakes) return [];

  if (Array.isArray(mistakes)) {
    return mistakes.filter((item) => {
      if (typeof item === "string" && item.trim()) return true;
      if (typeof item === "object" && item !== null) {
        return (
          item.mistake ||
          item.wrong ||
          item.correct ||
          item.explanation ||
          Object.keys(item).some((key) => key !== "id" && item[key])
        );
      }
      return false;
    });
  }

  if (typeof mistakes === "object" && mistakes !== null) {
    const values = Object.values(mistakes).filter(
      (item) => item !== null && item !== undefined
    );
    return validateMistakesData(values);
  }

  return [];
};

// Enhanced data extraction function to ensure we get all important data
const extractComprehensiveData = (tenseData: unknown): FlexibleObject => {
  const extracted: FlexibleObject =
    tenseData && typeof tenseData === "object"
      ? { ...(tenseData as FlexibleObject) }
      : {};

  // Prioritize important sections
  const prioritySections = [
    "theory",
    "usage",
    "commonMistakes",
    "learningTips",
    "forms",
    "spellingRules",
    "notes",
    "advancedUsagePatterns",
    "examples",
    "extendedExamples",
    "practiceExerciseTypes",
    "culturalAndContextualUsage",
    "pronunciationGuide",
    "cefrLevelBreakdown",
    "learningProgression",
    "comprehensiveErrorAnalysis",
    "progressiveDifficulty",
  ];

  // Ensure all priority sections are included if they exist
  prioritySections.forEach((section) => {
    const tenseDataObj = tenseData as FlexibleObject;
    if (tenseDataObj && tenseDataObj[section] && !extracted[section]) {
      extracted[section] = tenseDataObj[section];
    }
  });

  // Add debugging information for problematic sections
  if (extracted.usage) {
    console.log(
      `Usage data for tense: ${typeof extracted.usage}, isArray: ${Array.isArray(
        extracted.usage
      )}`
    );
  }
  if (extracted.commonMistakes) {
    console.log(
      `Common mistakes data for tense: ${typeof extracted.commonMistakes}, isArray: ${Array.isArray(
        extracted.commonMistakes
      )}`
    );
  }

  return validateAndCleanData(extracted);
};

// Helper function to capitalize and format tense names
const formatTenseName = (key: string): string => {
  return key
    .split(/[_-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Create clean and professional cover page for multiple tenses
const createMultiTenseCoverPage = (
  tenseNames: string[],
  tenseData?: MultiTensePDFData
): Content[] => {
  // Use creation date from the first tense data, or fallback to current date display
  const firstTenseData =
    tenseData && Object.keys(tenseData).length > 0
      ? (Object.values(tenseData)[0] as ComprehensiveTenseData)
      : null;

  const creationDate = firstTenseData?.created || "Date not available";
  const lastUpdated = firstTenseData?.updated || "Not updated";

  // Find the most recent update date across all tenses
  const mostRecentUpdate =
    tenseData && Object.keys(tenseData).length > 0
      ? Object.values(tenseData).reduce(
          (latest: string, tense: ComprehensiveTenseData) => {
            const tenseUpdated = (tense as FlexibleObject)?.updated as string;
            if (!tenseUpdated) return latest;
            if (!latest) return tenseUpdated;
            // Simple string comparison for DD-MM-YYYY format
            return tenseUpdated > latest ? tenseUpdated : latest;
          },
          ""
        )
      : lastUpdated;

  return [
    {
      stack: [
        // Clean title section with proper spacing
        {
          text: "ENGLISH GRAMMAR GUIDE",
          style: "multiCoverMainTitle",
          alignment: "center",
          margin: [0, 40, 0, 8],
        },
        {
          text: "Hướng Dẫn Ngữ Pháp Tiếng Anh",
          style: "multiCoverSubtitleVi",
          alignment: "center",
          margin: [0, 0, 0, 30],
        },

        // Clean separator line
        {
          canvas: [
            {
              type: "line",
              x1: 150,
              y1: 0,
              x2: 350,
              y2: 0,
              lineWidth: 2,
              lineColor: colors.primary,
            },
          ],
          margin: [0, 0, 0, 30],
        },

        // Clean tenses count section - no background color for simplicity
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  text: `${tenseNames.length} Grammar Points Covered`,
                  style: "tensesCountHeader",
                  alignment: "center",
                  margin: [20, 15, 20, 15],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.border,
            vLineColor: () => colors.border,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [80, 0, 80, 30],
        },

        // Clean features list
        {
          text: "What You'll Learn:",
          style: "featuresHeader",
          alignment: "center",
          margin: [0, 0, 0, 20],
        },

        {
          table: {
            widths: ["*", "*"],
            body: [
              [
                {
                  stack: [
                    "- Comprehensive theory explanations",
                    "- Clear usage guidelines",
                    "- Practical examples",
                  ].map((text) => ({
                    text,
                    style: "multiCoverFeatures",
                    margin: [0, 3, 0, 3],
                  })),
                  margin: [20, 10, 10, 10],
                },
                {
                  stack: [
                    "- Common mistakes to avoid",
                    "- Learning tips and strategies",
                    "- Progressive difficulty levels",
                  ].map((text) => ({
                    text,
                    style: "multiCoverFeatures",
                    margin: [0, 3, 0, 3],
                  })),
                  margin: [10, 10, 20, 10],
                },
              ],
            ],
          },
          layout: "noBorders",
          margin: [40, 0, 40, 40],
        },

        // Simple author and date section
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  stack: [
                    {
                      text: "Created by",
                      style: "coverDate",
                      alignment: "center",
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: "Nguyễn Xuân Trường",
                      style: "coverAuthor",
                      alignment: "center",
                      margin: [0, 0, 0, 10],
                    },
                    {
                      text: `Created: ${creationDate}`,
                      style: "coverDate",
                      alignment: "center",
                      margin: [0, 0, 0, 3],
                    },
                    {
                      text: `Last Updated: ${mostRecentUpdate}`,
                      style: "coverDate",
                      alignment: "center",
                    },
                  ],
                  fillColor: colors.formulaBg,
                  margin: [20, 20, 20, 20],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.accent,
            vLineColor: () => colors.accent,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [100, 40, 100, 0],
        },
      ],
    },
  ];
};

// Create clean and professional table of contents for multiple tenses
const createMultiTenseTableOfContents = (tenseNames: string[]): Content[] => {
  return [
    // Clean title
    {
      text: "TABLE OF CONTENTS",
      style: "multiTocHeader",
      alignment: "center",
      margin: [0, 20, 0, 30],
      id: "table-of-contents",
    },

    // Clean contents table
    {
      table: {
        widths: ["auto", "*"],
        headerRows: 1,
        body: [
          // Header row
          [
            {
              text: "#",
              style: "multiTocTableHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              alignment: "center",
              margin: [8, 10, 8, 10],
            },
            {
              text: "Grammar Point",
              style: "multiTocTableHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              margin: [15, 10, 15, 10],
            },
          ],
          // Content rows - clean without alternating backgrounds
          ...tenseNames.map((tenseName, index) => [
            {
              text: `${index + 1}`,
              style: "multiTocTenseItem",
              alignment: "center",
              margin: [8, 8, 8, 8],
            },
            {
              text: {
                text: tenseName,
                linkToDestination: `tense-${index + 1}`,
              },
              style: "multiTocTenseItem",
              color: colors.primary,
              decoration: "underline",
              margin: [15, 8, 15, 8],
            },
          ]),
        ],
      },
      layout: {
        hLineWidth: (i: number, node: PDFTableNode) => {
          if (i === 0 || i === 1) return 2; // Header lines
          if (i === node.table.body.length) return 2; // Bottom line
          return 1; // Regular lines
        },
        vLineWidth: () => 1,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [40, 0, 40, 30],
    },

    // Simple navigation note
    {
      text: "Click on any grammar point to navigate directly to that section.",
      style: "multiTocNote",
      alignment: "center",
      margin: [40, 10, 40, 0],
    },
  ];
};

// Create clean and professional thank you footer page
const createThankYouFooter = (): Content[] => {
  return [
    {
      stack: [
        // Clean thank you message
        {
          text: "THANK YOU",
          style: "thankYouTitle",
          alignment: "center",
          margin: [0, 60, 0, 20],
        },

        {
          text: "Thank you for studying with this English grammar guide!",
          style: "thankYouMessage",
          alignment: "center",
          margin: [0, 0, 0, 15],
        },

        {
          text: "Cảm ơn bạn đã học với hướng dẫn ngữ pháp tiếng Anh này!",
          style: "thankYouMessageVi",
          alignment: "center",
          margin: [0, 0, 0, 40],
        },

        // Clean separator line
        {
          canvas: [
            {
              type: "line",
              x1: 100,
              y1: 0,
              x2: 400,
              y2: 0,
              lineWidth: 1,
              lineColor: colors.border,
            },
          ],
          margin: [0, 0, 0, 40],
        },

        // Simple author section
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  stack: [
                    {
                      text: "Created by",
                      style: "signatureIntro",
                      alignment: "center",
                      margin: [0, 0, 0, 8],
                    },
                    {
                      text: "Nguyễn Xuân Trường",
                      style: "signatureName",
                      alignment: "center",
                    },
                  ],
                  fillColor: colors.formulaBg,
                  margin: [40, 20, 40, 20],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.accent,
            vLineColor: () => colors.accent,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [120, 0, 120, 0],
        },
      ],
    },
  ];
};

// Import formatting functions from single tense generator
// We'll reuse the formatting functions but with multi-tense IDs
const formatTheorySection = (
  theory: unknown,
  tenseIndex: number
): Content[] => {
  if (!theory || typeof theory !== "object") return [];

  const theoryObj = theory as FlexibleObject;

  const content: ContentWithId[] = [
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "THEORY / LÝ THUYẾT",
              style: "majorSectionHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              alignment: "center",
              margin: [15, 12, 15, 12],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 8, 0, 5],
      id: `tense-${tenseIndex}-section-1`,
    },
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: {
                text: "Back to Table of Contents",
                linkToDestination: "table-of-contents",
              },
              style: "backLink",
              color: colors.info,
              alignment: "right",
              margin: [0, 4, 8, 4],
              fillColor: colors.gradientStart,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.borderLight,
        vLineColor: () => colors.borderLight,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 3, 0, 5],
    },
  ];

  // Usage Overview
  const usageOverview = theoryObj.usageOverview as string[] | undefined;
  if (
    usageOverview &&
    Array.isArray(usageOverview) &&
    usageOverview.length > 0
  ) {
    content.push({
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "Usage Overview / Tổng quan cách sử dụng:",
              style: "mediumSectionHeader",
              color: colors.mediumSection,
              margin: [20, 12, 20, 8],
              fillColor: colors.mainContentBg,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 3,
        vLineWidth: () => 3,
        hLineColor: () => colors.borderMedium,
        vLineColor: () => colors.borderMedium,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 5, 0, 5],
    });

    usageOverview.forEach((usage: string) => {
      content.push({
        table: {
          widths: ["auto", "*"],
          body: [
            [
              {
                text: "v",
                style: "usageItem",
                color: colors.success,
                bold: true,
                margin: [8, 6, 8, 6],
                fillColor: colors.mainContentBg,
                alignment: "center",
                fontSize: 14,
              },
              {
                text: safeStringify(usage),
                style: "usageItem",
                margin: [8, 6, 8, 6],
                fillColor: colors.mainContentBg,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => colors.border,
          vLineColor: () => colors.border,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [15, 1, 15, 1],
      });
    });
  }

  // Structure
  const structure = theoryObj.structure as FlexibleObject | undefined;
  if (structure) {
    content.push({
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "Structure / Cấu trúc:",
              style: "mediumSectionHeader",
              color: colors.mediumSection,
              margin: [20, 12, 20, 8],
              fillColor: colors.mainContentBg,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 3,
        vLineWidth: () => 3,
        hLineColor: () => colors.borderMedium,
        vLineColor: () => colors.borderMedium,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 10, 0, 8],
    });

    ["affirmative", "negative", "question"].forEach((type) => {
      const structureType = structure[type] as FlexibleObject | undefined;
      if (structureType) {
        const struct = structureType;
        content.push({
          table: {
            widths: ["*"],
            body: [
              [
                {
                  text: `${type.charAt(0).toUpperCase() + type.slice(1)} / ${
                    type === "affirmative"
                      ? "Khẳng định"
                      : type === "negative"
                      ? "Phủ định"
                      : "Nghi vấn"
                  }:`,
                  style: "minorSectionHeader",
                  color: colors.minorSection,
                  margin: [15, 8, 15, 6],
                  fillColor: colors.gradientStart,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 2,
            vLineWidth: () => 2,
            hLineColor: () => colors.borderLight,
            vLineColor: () => colors.borderLight,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [15, 4, 15, 4],
        });

        if (struct.form) {
          content.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    stack: [
                      {
                        text: "FORMULA / CÔNG THỨC:",
                        style: "formulaLabel",
                        alignment: "center",
                        margin: [0, 0, 0, 4],
                        color: colors.text,
                        bold: true,
                      },
                      {
                        text: safeStringify(struct.form),
                        style: "formContent",
                        alignment: "center",
                        margin: [12, 6, 12, 6],
                        color: colors.primary,
                      },
                    ],
                    fillColor: colors.formulaBg,
                    margin: [0, 0, 0, 0],
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 2,
              vLineWidth: () => 2,
              hLineColor: () => colors.accent,
              vLineColor: () => colors.accent,
              paddingLeft: () => 8,
              paddingRight: () => 8,
              paddingTop: () => 6,
              paddingBottom: () => 6,
            },
            margin: [20, 5, 20, 8],
          });
        }

        if (struct.description) {
          content.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: safeStringify(struct.description),
                    style: "description",
                    margin: [15, 8, 15, 8],
                    fillColor: colors.sectionBg,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 2,
              vLineWidth: () => 2,
              hLineColor: () => colors.borderLight,
              vLineColor: () => colors.borderLight,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [30, 3, 30, 5],
          });
        }

        const examples = struct.examples as string[] | undefined;
        if (examples && Array.isArray(examples) && examples.length > 0) {
          content.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: "Examples / Ví dụ:",
                    style: "exampleLabel",
                    margin: [12, 8, 12, 6],
                    fillColor: colors.lightBg,
                    color: colors.text,
                    alignment: "center",
                    bold: true,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => colors.border,
              vLineColor: () => colors.border,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [35, 8, 35, 3],
          });

          // Create clean table for examples without alternating colors
          const exampleRows = examples.map((example: string, idx: number) => [
            {
              text: `${idx + 1}.`,
              style: "example",
              margin: [6, 8, 6, 8],
              alignment: "center",
              color: colors.primary,
              bold: true,
            },
            {
              text: safeStringify(example),
              style: "example",
              margin: [12, 8, 12, 8],
            },
          ]);

          content.push({
            table: {
              widths: ["auto", "*"],
              body: exampleRows,
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => colors.borderMedium,
              vLineColor: () => colors.borderMedium,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [30, 2, 30, 6],
          });
        }
      }
    });
  }

  return content;
};

// Format usage section for multi-tense
const formatUsageSection = (usage: unknown, tenseIndex: number): Content[] => {
  // Use the enhanced validation function
  const validUsageArray = validateUsageData(usage);

  if (validUsageArray.length === 0) return [];

  const content: ContentWithId[] = [
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "USAGE / CÁCH SỬ DỤNG",
              style: "majorSectionHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              alignment: "center",
              margin: [15, 12, 15, 12],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 8, 0, 5],
      id: `tense-${tenseIndex}-section-2`,
    },
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: {
                text: "Back to Table of Contents",
                linkToDestination: "table-of-contents",
              },
              style: "backLink",
              color: colors.primary,
              alignment: "right",
              margin: [0, 6, 10, 6],
              fillColor: colors.lightBg,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.borderLight,
        vLineColor: () => colors.borderLight,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 3, 0, 8],
    },
  ];

  validUsageArray.forEach((item: unknown, index: number) => {
    // Handle different item types
    if (typeof item === "string") {
      // Simple string usage item
      content.push({
        table: {
          widths: ["auto", "*"],
          body: [
            [
              {
                text: `${index + 1}.`,
                style: "usageItem",
                color: colors.primary,
                bold: true,
                margin: [4, 4, 4, 4],
                alignment: "center",
                fillColor: colors.gradientStart,
              },
              {
                text: safeStringify(item),
                style: "usageItem",
                margin: [8, 4, 8, 4],
                fillColor: index % 2 === 0 ? colors.white : colors.sectionBg,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => colors.borderLight,
          vLineColor: () => colors.borderLight,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [15, 1, 15, 1],
      });
    } else if (typeof item === "object" && item !== null) {
      // Object with properties - handle both structured and unstructured objects
      const itemObj = item as FlexibleObject;
      const itemType =
        itemObj.type || itemObj.title || itemObj.name || `Usage ${index + 1}`;
      const itemDescription =
        itemObj.description || itemObj.desc || itemObj.text || itemObj.content;
      const itemExample = itemObj.example || itemObj.examples || itemObj.sample;

      // Usage type header
      content.push({
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: `${index + 1}. ${safeStringify(itemType)}:`,
                style: "mediumSectionHeader",
                color: colors.mediumSection,
                margin: [15, 8, 15, 6],
                fillColor: colors.mainContentBg,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 2,
          vLineWidth: () => 2,
          hLineColor: () => colors.borderMedium,
          vLineColor: () => colors.borderMedium,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 8, 0, 5],
      });

      // Description
      if (itemDescription) {
        content.push({
          table: {
            widths: ["*"],
            body: [
              [
                {
                  text: safeStringify(itemDescription),
                  style: "description",
                  margin: [15, 8, 15, 8],
                  fillColor: colors.mainContentBg,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.borderLight,
            vLineColor: () => colors.borderLight,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [20, 3, 20, 5],
        });
      }

      // Example
      if (itemExample) {
        content.push({
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  text: "Example:",
                  style: "exampleLabel",
                  margin: [8, 6, 8, 6],
                  fillColor: colors.accent,
                  color: colors.white,
                  alignment: "center",
                },
                {
                  text: safeStringify(itemExample),
                  style: "example",
                  margin: [12, 6, 12, 6],
                  fillColor: colors.exampleBg,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 2,
            vLineWidth: () => 2,
            hLineColor: () => colors.accent,
            vLineColor: () => colors.accent,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [25, 3, 25, 10],
        });
      }

      // Handle any other properties in the object
      Object.entries(item).forEach(([key, value]) => {
        if (
          key !== "type" &&
          key !== "title" &&
          key !== "name" &&
          key !== "description" &&
          key !== "desc" &&
          key !== "text" &&
          key !== "content" &&
          key !== "example" &&
          key !== "examples" &&
          key !== "sample" &&
          key !== "id" &&
          value !== null &&
          value !== undefined
        ) {
          const formattedKey = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());

          content.push({
            table: {
              widths: ["auto", "*"],
              body: [
                [
                  {
                    text: `${formattedKey}:`,
                    style: "minorSectionHeader",
                    color: colors.minorSection,
                    margin: [8, 6, 8, 6],
                    fillColor: colors.gradientStart,
                    alignment: "center",
                  },
                  {
                    text: safeStringify(value),
                    style: "description",
                    margin: [12, 6, 12, 6],
                    fillColor: colors.lightBg,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => colors.borderLight,
              vLineColor: () => colors.borderLight,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [25, 3, 25, 3],
          });
        }
      });
    }
  });

  return content;
};

// Format common mistakes section for multi-tense
const formatCommonMistakesSection = (
  mistakes: unknown,
  tenseIndex: number
): Content[] => {
  // Use the enhanced validation function
  const validMistakesArray = validateMistakesData(mistakes);

  if (validMistakesArray.length === 0) return [];

  const content: ContentWithId[] = [
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "COMMON MISTAKES / LỖI THƯỜNG GẶP",
              style: "majorSectionHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              alignment: "center",
              margin: [15, 12, 15, 12],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 8, 0, 5],
      id: `tense-${tenseIndex}-section-3`,
    },
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: {
                text: "Back to Table of Contents",
                linkToDestination: "table-of-contents",
              },
              style: "backLink",
              color: colors.primary,
              alignment: "right",
              margin: [0, 6, 10, 6],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.borderLight,
        vLineColor: () => colors.borderLight,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 3, 0, 8],
    },
  ];

  validMistakesArray.forEach((mistake: unknown, index: number) => {
    // Handle different mistake types
    if (typeof mistake === "string") {
      // Simple string mistake item
      content.push({
        table: {
          widths: ["auto", "*"],
          body: [
            [
              {
                text: `${index + 1}.`,
                style: "errorText",
                color: colors.white,
                margin: [8, 8, 8, 8],
                fillColor: colors.error,
                alignment: "center",
                bold: true,
              },
              {
                text: safeStringify(mistake),
                style: "description",
                margin: [12, 8, 12, 8],
                fillColor: colors.lightBg,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => colors.border,
          vLineColor: () => colors.border,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [15, 5, 15, 5],
      });
    } else if (typeof mistake === "object" && mistake !== null) {
      // Object with properties - handle both structured and unstructured objects
      const mistakeObj = mistake as FlexibleObject;
      const mistakeTitle =
        mistakeObj.mistake ||
        mistakeObj.title ||
        mistakeObj.name ||
        mistakeObj.error ||
        `Common Mistake ${index + 1}`;
      const wrongExample =
        mistakeObj.wrong ||
        mistakeObj.incorrect ||
        mistakeObj.bad ||
        mistakeObj.wrongExample;
      const correctExample =
        mistakeObj.correct ||
        mistakeObj.right ||
        mistakeObj.good ||
        mistakeObj.correctExample;
      const explanation =
        mistakeObj.explanation ||
        mistakeObj.note ||
        mistakeObj.description ||
        mistakeObj.reason;

      // Mistake header
      content.push({
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: `${index + 1}. ${safeStringify(mistakeTitle)}:`,
                style: "mediumSectionHeader",
                color: colors.mediumSection,
                margin: [15, 8, 15, 6],
                fillColor: colors.mainContentBg,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 2,
          vLineWidth: () => 2,
          hLineColor: () => colors.borderMedium,
          vLineColor: () => colors.borderMedium,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 8, 0, 5],
      });

      // Wrong example
      if (wrongExample) {
        content.push({
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  text: "Wrong:",
                  style: "errorText",
                  color: colors.white,
                  margin: [8, 6, 8, 6],
                  fillColor: colors.error,
                  alignment: "center",
                },
                {
                  text: safeStringify(wrongExample),
                  style: "errorText",
                  color: colors.error,
                  margin: [12, 6, 12, 6],
                  fillColor: colors.lightBg,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.error,
            vLineColor: () => colors.error,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [20, 3, 20, 3],
        });
      }

      // Correct example
      if (correctExample) {
        content.push({
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  text: "Correct:",
                  style: "correctText",
                  color: colors.white,
                  margin: [8, 6, 8, 6],
                  fillColor: colors.success,
                  alignment: "center",
                },
                {
                  text: safeStringify(correctExample),
                  style: "correctText",
                  color: colors.success,
                  margin: [12, 6, 12, 6],
                  fillColor: colors.lightBg,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.success,
            vLineColor: () => colors.success,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [20, 3, 20, 5],
        });
      }

      // Explanation
      if (explanation) {
        content.push({
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  text: "!",
                  style: "description",
                  margin: [8, 8, 8, 8],
                  fillColor: colors.importantBg,
                  alignment: "center",
                  fontSize: 14,
                  bold: true,
                  color: colors.warning,
                },
                {
                  text: `Explanation / Giải thích: ${safeStringify(
                    explanation
                  )}`,
                  style: "description",
                  margin: [15, 8, 15, 8],
                  fillColor: colors.importantBg,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => colors.warning,
            vLineColor: () => colors.warning,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [20, 5, 20, 10],
        });
      }

      // Handle any other properties in the mistake object
      Object.entries(mistake).forEach(([key, value]) => {
        if (
          key !== "mistake" &&
          key !== "title" &&
          key !== "name" &&
          key !== "error" &&
          key !== "wrong" &&
          key !== "incorrect" &&
          key !== "bad" &&
          key !== "wrongExample" &&
          key !== "correct" &&
          key !== "right" &&
          key !== "good" &&
          key !== "correctExample" &&
          key !== "explanation" &&
          key !== "note" &&
          key !== "description" &&
          key !== "reason" &&
          key !== "id" &&
          value !== null &&
          value !== undefined
        ) {
          const formattedKey = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());

          content.push({
            table: {
              widths: ["auto", "*"],
              body: [
                [
                  {
                    text: `${formattedKey}:`,
                    style: "minorSectionHeader",
                    color: colors.minorSection,
                    margin: [8, 6, 8, 6],
                    fillColor: colors.gradientStart,
                    alignment: "center",
                  },
                  {
                    text: safeStringify(value),
                    style: "description",
                    margin: [12, 6, 12, 6],
                    fillColor: colors.lightBg,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => colors.borderLight,
              vLineColor: () => colors.borderLight,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [25, 3, 25, 3],
          });
        }
      });
    }
  });

  return content;
};

// Format learning tips section for multi-tense
const formatLearningTipsSection = (
  tips: unknown,
  tenseIndex: number
): Content[] => {
  // Ensure tips is an array and has content
  if (!tips) return [];

  // If tips is not an array, convert it to an array or return empty
  let tipsArray: unknown[] = [];
  if (Array.isArray(tips)) {
    tipsArray = tips;
  } else if (typeof tips === "object") {
    // If it's an object, try to extract array values or convert to array
    tipsArray = Object.values(tips).filter((item) => item != null);
  } else {
    return []; // If it's neither array nor object, return empty
  }

  if (tipsArray.length === 0) return [];

  const content: ContentWithId[] = [
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "LEARNING TIPS / MẸO HỌC TẬP",
              style: "majorSectionHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              alignment: "center",
              margin: [15, 12, 15, 12],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 8, 0, 5],
      id: `tense-${tenseIndex}-section-4`,
    },
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: {
                text: "Back to Table of Contents",
                linkToDestination: "table-of-contents",
              },
              style: "backLink",
              color: colors.primary,
              alignment: "right",
              margin: [0, 6, 10, 6],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.borderLight,
        vLineColor: () => colors.borderLight,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 3, 0, 8],
    },
  ];

  tipsArray.forEach((tip: unknown, index: number) => {
    content.push({
      table: {
        widths: ["auto", "*"],
        body: [
          [
            {
              text: `${index + 1}`,
              style: "tipText",
              color: colors.white,
              margin: [8, 8, 8, 8],
              fillColor: colors.warning,
              alignment: "center",
              bold: true,
            },
            {
              text: safeStringify(tip),
              style: "tipText",
              color: colors.text,
              margin: [12, 8, 12, 8],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [20, 5, 20, 5],
    });
  });

  return content;
};

// Format dynamic section with back to contents link for multi-tense
const formatDynamicSection = (
  sectionName: string,
  sectionData: unknown,
  tenseIndex: number,
  sectionIndex: number = 5
): Content[] => {
  if (!sectionData) return [];

  const content: ContentWithId[] = [
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: sectionName.toUpperCase().replace(/_/g, " "),
              style: "majorSectionHeader",
              fillColor: colors.headerBg,
              color: colors.white,
              alignment: "center",
              margin: [15, 10, 15, 10],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.border,
        vLineColor: () => colors.border,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 5, 0, 3],
      id: `tense-${tenseIndex}-section-${sectionIndex}`,
    },
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: {
                text: "Back to Table of Contents",
                linkToDestination: "table-of-contents",
              },
              style: "backLink",
              color: colors.primary,
              alignment: "right",
              margin: [0, 4, 8, 4],
              fillColor: colors.lightBg,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderLight,
        vLineColor: () => colors.borderLight,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [0, 3, 0, 8],
    },
  ];

  if (Array.isArray(sectionData)) {
    sectionData.forEach((item) => {
      if (typeof item === "string") {
        content.push({
          table: {
            widths: ["auto", "*"],
            body: [
              [
                {
                  text: "+",
                  style: "usageItem",
                  color: colors.accent,
                  margin: [8, 4, 8, 4],
                  fillColor: colors.mainContentBg,
                  alignment: "center",
                  fontSize: 12,
                  bold: true,
                },
                {
                  text: safeStringify(item),
                  style: "usageItem",
                  margin: [8, 4, 8, 4],
                  fillColor: colors.mainContentBg,
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 0.5,
            vLineWidth: () => 0.5,
            hLineColor: () => colors.borderLight,
            vLineColor: () => colors.borderLight,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
          margin: [15, 1, 15, 1],
        });
      } else if (typeof item === "object") {
        content.push(...formatObjectContent(item, 1));
      }
    });
  } else if (typeof sectionData === "object") {
    content.push(...formatObjectContent(sectionData as FlexibleObject, 0));
  } else if (typeof sectionData === "string") {
    content.push({
      table: {
        widths: ["auto", "*"],
        body: [
          [
            {
              text: "|",
              style: "description",
              margin: [8, 6, 8, 6],
              fillColor: colors.mainContentBg,
              alignment: "center",
              fontSize: 14,
              bold: true,
              color: colors.primary,
            },
            {
              text: safeStringify(sectionData),
              style: "description",
              margin: [8, 6, 12, 6],
              fillColor: colors.mainContentBg,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderMedium,
        vLineColor: () => colors.borderMedium,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [15, 5, 15, 5],
    });
  }

  return content;
};

// Helper function to format object content recursively
const formatObjectContent = (
  obj: FlexibleObject,
  indentLevel: number = 0
): Content[] => {
  const content: Content[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (key === "id") return; // Skip id fields

    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    // Key header with bullet point styling
    content.push({
      table: {
        widths: ["auto", "*"],
        body: [
          [
            {
              text: ">",
              style: "minorSectionHeader",
              color: colors.primary,
              margin: [8, 6, 8, 6],
              fillColor: colors.mainContentBg,
              alignment: "center",
              fontSize: 12,
              bold: true,
            },
            {
              text: `${formattedKey}:`,
              style: "minorSectionHeader",
              color: colors.minorSection,
              margin: [4, 6, 8, 6],
              fillColor: colors.mainContentBg,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderLight,
        vLineColor: () => colors.borderLight,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0,
      },
      margin: [Math.min(indentLevel, 20), 3, 0, 2],
    });

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (typeof item === "string") {
          content.push({
            table: {
              widths: ["auto", "*"],
              body: [
                [
                  {
                    text: "*",
                    style: "usageItem",
                    color: colors.accent,
                    margin: [8, 3, 8, 3],
                    fillColor: colors.white,
                    alignment: "center",
                    bold: true,
                    fontSize: 14,
                  },
                  {
                    text: safeStringify(item),
                    style: "usageItem",
                    margin: [6, 3, 6, 3],
                    fillColor: colors.white,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 0.5,
              vLineWidth: () => 0.5,
              hLineColor: () => colors.borderLight,
              vLineColor: () => colors.borderLight,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [Math.min(indentLevel + 12, 30), 1, 0, 1],
          });
        } else if (typeof item === "object") {
          content.push(
            ...formatObjectContent(item, Math.min(indentLevel + 15, 40))
          );
        }
      });
    } else if (typeof value === "object" && value !== null) {
      content.push(
        ...formatObjectContent(
          value as FlexibleObject,
          Math.min(indentLevel + 15, 40)
        )
      );
    } else if (typeof value === "string") {
      content.push({
        table: {
          widths: ["auto", "*"],
          body: [
            [
              {
                text: "-",
                style: "description",
                margin: [8, 4, 8, 4],
                fillColor: colors.white,
                alignment: "center",
                fontSize: 12,
                bold: true,
                color: colors.secondary,
              },
              {
                text: safeStringify(value),
                style: "description",
                margin: [6, 4, 8, 4],
                fillColor: colors.white,
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => colors.borderLight,
          vLineColor: () => colors.borderLight,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [Math.min(indentLevel + 8, 25), 2, 0, 3],
      });
    }
  });

  return content;
};

// Professional and clean styles for beautiful, readable multi-tense PDFs
const multiTenseStyles: StyleDictionary = {
  metaText: {
    fontSize: 10,
    color: colors.lightText,
    italics: true,
  },
  // Cover page styles - clean and professional
  multiCoverMainTitle: {
    fontSize: 32,
    bold: true,
    color: colors.primary,

    characterSpacing: 1.5,
    lineHeight: 1.2,
  },
  multiCoverSubtitleVi: {
    fontSize: 18,
    color: colors.secondary,

    italics: true,
    lineHeight: 1.3,
  },
  tensesCountHeader: {
    fontSize: 16,
    bold: true,
    color: colors.text,

    lineHeight: 1.4,
  },
  featuresHeader: {
    fontSize: 18,
    bold: true,
    color: colors.secondary,

    lineHeight: 1.3,
  },
  multiCoverFeatures: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 1.6,
  },
  coverDate: {
    fontSize: 12,
    color: colors.lightText,
    italics: true,

    lineHeight: 1.3,
  },
  coverAuthor: {
    fontSize: 16,
    bold: true,
    color: colors.primary,

    lineHeight: 1.3,
  },

  // Table of contents styles - clean hierarchy
  multiTocHeader: {
    fontSize: 24,
    bold: true,
    color: colors.primary,

    characterSpacing: 1.0,
    lineHeight: 1.2,
  },
  multiTocTableHeader: {
    fontSize: 14,
    bold: true,

    lineHeight: 1.3,
  },
  multiTocTenseItem: {
    fontSize: 13,
    bold: true,

    lineHeight: 1.4,
  },
  multiTocPage: {
    fontSize: 13,
    bold: true,
    color: colors.primary,

    lineHeight: 1.3,
  },
  multiTocNote: {
    fontSize: 11,
    color: colors.lightText,
    italics: true,

    lineHeight: 1.4,
  },

  // Thank you page styles - elegant and simple
  thankYouTitle: {
    fontSize: 28,
    bold: true,
    color: colors.primary,

    characterSpacing: 2.0,
    lineHeight: 1.2,
  },
  thankYouMessage: {
    fontSize: 15,
    color: colors.text,

    lineHeight: 1.5,
  },
  thankYouMessageVi: {
    fontSize: 14,
    color: colors.text,

    italics: true,
    lineHeight: 1.5,
  },
  signatureIntro: {
    fontSize: 12,
    color: colors.lightText,

    lineHeight: 1.3,
  },
  signatureName: {
    fontSize: 18,
    bold: true,
    color: colors.primary,

    characterSpacing: 0.5,
    lineHeight: 1.2,
  },

  // Content styles - professional and readable
  majorSectionHeader: {
    fontSize: 16,
    bold: true,
    color: colors.white,

    characterSpacing: 0.8,
    lineHeight: 1.2,
  },
  mediumSectionHeader: {
    fontSize: 14,
    bold: true,
    color: colors.secondary,

    lineHeight: 1.3,
  },
  minorSectionHeader: {
    fontSize: 12,
    bold: true,
    color: colors.secondary,

    lineHeight: 1.3,
  },
  backLink: {
    fontSize: 10,
    color: colors.primary,
    italics: true,

    decoration: "underline",
  },
  description: {
    fontSize: 12,
    color: colors.text,
    lineHeight: 1.6,
  },
  usageItem: {
    fontSize: 12,
    color: colors.text,

    lineHeight: 1.5,
  },

  // Formula and example styles - highlighted for importance
  formContent: {
    fontSize: 14,
    bold: true,
    color: colors.accent,

    characterSpacing: 0.5,
    lineHeight: 1.4,
  },
  formulaLabel: {
    fontSize: 12,
    bold: true,
    color: colors.text,
  },
  exampleLabel: {
    fontSize: 11,
    bold: true,
    color: colors.white,
  },
  example: {
    fontSize: 11,
    italics: true,
    lineHeight: 1.5,
    color: colors.text,
  },

  // Error and success styles - clear visual distinction
  errorText: {
    fontSize: 12,
    color: colors.error,

    bold: true,
    lineHeight: 1.4,
  },
  correctText: {
    fontSize: 12,
    color: colors.success,

    bold: true,
    lineHeight: 1.4,
  },
  tipText: {
    fontSize: 12,
    lineHeight: 1.6,
    color: colors.text,
  },
};

// Main function to generate PDF for multiple tenses
export const generateMultiTensePDF = (tenseKeys: string[]) => {
  if (!tenseKeys || tenseKeys.length === 0) {
    alert("Please select at least one tense to generate the PDF.");
    return;
  }

  // Validate all tense keys exist
  const invalidKeys: string[] = [];
  const validTenseData: {
    key: string;
    name: string;
    data: ComprehensiveTenseData;
  }[] = [];

  tenseKeys.forEach((key) => {
    const tenseData = tenseDatabase[key as keyof typeof tenseDatabase];
    if (!tenseData) {
      invalidKeys.push(key);
    } else {
      validTenseData.push({
        key,
        name: formatTenseName(key),
        data: extractComprehensiveData(tenseData),
      });
    }
  });

  if (invalidKeys.length > 0) {
    alert(
      `The following tense keys were not found: ${invalidKeys.join(
        ", "
      )}. Please check the tense keys.`
    );
    return;
  }

  const allContent: Content[] = [];
  const tenseNames = validTenseData.map((t) => t.name);

  // Create tense data object for dates
  const tenseDataForDates = validTenseData.reduce(
    (acc: MultiTensePDFData, tense) => {
      acc[tense.key] = tense.data;
      return acc;
    },
    {} as MultiTensePDFData
  );

  // Add cover page
  allContent.push(...createMultiTenseCoverPage(tenseNames, tenseDataForDates));
  allContent.push({ text: "", pageBreak: "after" });

  // Add table of contents
  allContent.push(...createMultiTenseTableOfContents(tenseNames));
  allContent.push({ text: "", pageBreak: "after" });

  // Add content for each tense
  validTenseData.forEach((tenseInfo, index) => {
    // Get individual tense dates
    const originalTenseData = tenseDatabase[
      tenseInfo.key as keyof typeof tenseDatabase
    ] as TenseData | undefined;
    const tenseCreated = originalTenseData?.created || "Date not available";
    const tenseUpdated = originalTenseData?.updated || "Not updated";

    // Tense title page
    allContent.push({
      stack: [
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 500,
              y2: 0,
              lineWidth: 4,
              lineColor: colors.tenseName,
            },
          ],
          margin: [0, 0, 0, 20],
        },
        {
          text: tenseInfo.name,
          style: "multiCoverMainTitle",
          alignment: "center",
          margin: [0, 30, 0, 15],
          id: `tense-${index + 1}`,
        },
        {
          canvas: [
            {
              type: "line",
              x1: 100,
              y1: 0,
              x2: 400,
              y2: 0,
              lineWidth: 2,
              lineColor: colors.primary,
            },
          ],
          margin: [0, 0, 0, 20],
        },
        // Add creation and update dates for individual tense
        {
          text: `Created: ${tenseCreated}`,
          style: "metaText",
          margin: [0, 5, 0, 0],
        },
        {
          text: `Updated: ${tenseUpdated}`,
          style: "metaText",
          margin: [0, 5, 0, 0],
        },
      ],
      margin: [0, 60, 0, 0],
    });

    allContent.push({ text: "", pageBreak: "after" });

    // Add tense sections with proper indexing
    const tenseData = tenseInfo.data;

    // Theory section
    if (tenseData.theory) {
      const theoryContent = formatTheorySection(tenseData.theory, index + 1);
      allContent.push(...theoryContent);
      allContent.push({ text: "", pageBreak: "after" });
    }

    // Usage section - with enhanced error handling
    if (tenseData.usage) {
      try {
        const usageContent = formatUsageSection(tenseData.usage, index + 1);
        if (usageContent.length > 0) {
          allContent.push(...usageContent);
          allContent.push({ text: "", pageBreak: "after" });
        } else {
          // Add fallback content if no valid usage data
          allContent.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: "USAGE / CÁCH SỬ DỤNG",
                    style: "majorSectionHeader",
                    fillColor: colors.headerBg,
                    color: colors.white,
                    alignment: "center",
                    margin: [15, 12, 15, 12],
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 2,
              vLineWidth: () => 2,
              hLineColor: () => colors.border,
              vLineColor: () => colors.border,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [0, 8, 0, 5],
          });
          allContent.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: "No specific usage information available for this grammar point.",
                    style: "description",
                    margin: [15, 20, 15, 20],
                    fillColor: colors.lightBg,
                    alignment: "center",
                    italics: true,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => colors.borderLight,
              vLineColor: () => colors.borderLight,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [20, 10, 20, 0],
          });
          allContent.push({ text: "", pageBreak: "after" });
        }
      } catch (error) {
        console.error(
          `Error formatting usage section for ${tenseInfo.name}:`,
          error
        );
      }
    }

    // Common mistakes section - with enhanced error handling
    if (tenseData.commonMistakes) {
      try {
        const mistakesContent = formatCommonMistakesSection(
          tenseData.commonMistakes,
          index + 1
        );
        if (mistakesContent.length > 0) {
          allContent.push(...mistakesContent);
          allContent.push({ text: "", pageBreak: "after" });
        } else {
          // Add fallback content if no valid mistakes data
          allContent.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: "COMMON MISTAKES / LỖI THƯỜNG GẶP",
                    style: "majorSectionHeader",
                    fillColor: colors.headerBg,
                    color: colors.white,
                    alignment: "center",
                    margin: [15, 12, 15, 12],
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 2,
              vLineWidth: () => 2,
              hLineColor: () => colors.border,
              vLineColor: () => colors.border,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [0, 8, 0, 5],
          });
          allContent.push({
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    text: "No specific common mistakes information available for this grammar point.",
                    style: "description",
                    margin: [15, 20, 15, 20],
                    fillColor: colors.lightBg,
                    alignment: "center",
                    italics: true,
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => colors.borderLight,
              vLineColor: () => colors.borderLight,
              paddingLeft: () => 0,
              paddingRight: () => 0,
              paddingTop: () => 0,
              paddingBottom: () => 0,
            },
            margin: [20, 10, 20, 0],
          });
          allContent.push({ text: "", pageBreak: "after" });
        }
      } catch (error) {
        console.error(
          `Error formatting common mistakes section for ${tenseInfo.name}:`,
          error
        );
      }
    }

    // Learning tips section
    if (tenseData.learningTips) {
      const tipsContent = formatLearningTipsSection(
        tenseData.learningTips,
        index + 1
      );
      allContent.push(...tipsContent);
      allContent.push({ text: "", pageBreak: "after" });
    }

    // Dynamic sections for other properties
    let dynamicSectionIndex = 5; // Start from section 5 for dynamic sections
    Object.entries(tenseData).forEach(([key, value]) => {
      if (
        ![
          "theory",
          "usage",
          "commonMistakes",
          "learningTips",
          "created",
          "updated",
          "id",
        ].includes(key) &&
        value
      ) {
        const sectionName = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        const dynamicContent = formatDynamicSection(
          sectionName,
          value,
          index + 1,
          dynamicSectionIndex
        );
        allContent.push(...dynamicContent);
        allContent.push({ text: "", pageBreak: "after" });
        dynamicSectionIndex++; // Increment for next dynamic section
      }
    });
  });

  // Add thank you footer
  allContent.push(...createThankYouFooter());

  const documentDefinition: TDocumentDefinitions = {
    content: allContent,
    styles: multiTenseStyles,
    defaultStyle: {
      fontSize: 12,
      lineHeight: 1.4,

      color: colors.text,
    },
    pageSize: "A4",
    pageMargins: [35, 45, 35, 45], // Optimized margins for better space utilization
    header: (currentPage: number) => {
      if (currentPage <= 2) return null; // No header on cover and TOC pages
      return {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: `English Grammar Guide - ${tenseKeys.length} Grammar Points`,
                alignment: "center",
                fontSize: 8,
                color: colors.lightText,
                margin: [0, 6, 0, 3],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0,
          hLineColor: () => colors.border,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 0, 0, 0],
      };
    },
    footer: (currentPage: number, pageCount: number) => {
      return {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: `Page ${currentPage} of ${pageCount}`,
                alignment: "center",
                fontSize: 8,
                color: colors.lightText,
                margin: [0, 3, 0, 6],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0,
          hLineColor: () => colors.border,
          paddingLeft: () => 0,
          paddingRight: () => 0,
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        margin: [0, 0, 0, 0],
      };
    },
  };

  // Generate and download PDF
  try {
    const fileName = `English_Grammar_Guide_${tenseKeys.length}_Points.pdf`;
    pdfMake.createPdf(documentDefinition).download(fileName);

    console.log(
      `Generated PDF with ${tenseKeys.length} grammar points:`,
      tenseNames
    );
  } catch (error) {
    console.error("Error generating multi-tense PDF:", error);
    alert("Error generating PDF. Please try again.");
  }
};

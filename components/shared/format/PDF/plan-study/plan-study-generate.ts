import pdfMake from "pdfmake/build/pdfmake";
import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from "pdfmake/interfaces";
import { planStudyEnglishBasic } from "@/lib/static/grammars/study-plan/plan-study-English-basic";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  LevelData,
  WeekData,
  TopicDetail,
  SafeStringifyInput,
  PDFTableNode,
  CertificateData,
} from "@/types/formats/pdf/study-plan";

// Professional color palette for the study plan PDF
export const studyPlanColors = {
  // Primary colors for main content
  primary: "#1e40af", // Deep blue for headers and important elements
  secondary: "#374151", // Dark gray for section headers
  accent: "#059669", // Green for highlights and progress indicators

  // Status colors
  success: "#16a34a", // Green for completed/positive items
  warning: "#d97706", // Orange for important notes
  error: "#dc2626", // Red for warnings or critical points
  info: "#0ea5e9", // Blue for informational content

  // Background colors
  headerBg: "#1e40af", // Primary blue for main headers
  sectionBg: "#f8fafc", // Light blue-gray for section backgrounds
  weekBg: "#ecfdf5", // Light green for week sections
  assessmentBg: "#fef3c7", // Light yellow for assessments
  tipsBg: "#f0f9ff", // Light blue for tips and notes
  certificateBg: "#fdf4ff", // Light purple for certificate sections

  // Text colors
  text: "#111827", // Dark text
  lightText: "#6b7280", // Light gray text
  white: "#ffffff",

  // Borders
  border: "#e5e7eb",
  borderLight: "#f3f4f6",
  borderMedium: "#d1d5db",
};

// Configure pdfMake fonts
if (typeof window !== "undefined") {
  pdfMake.vfs = pdfFonts.vfs;
  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Medium.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-MediumItalic.ttf",
    },
  };
}

// Helper functions
const safeStringify = (value: SafeStringifyInput): string => {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  if (Array.isArray(value))
    return value.map((item) => safeStringify(item)).join(", ");
  if (typeof value === "object") {
    const entries = Object.entries(value)
      .filter(([key]) => key !== "id")
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

// Create cover page
const createCoverPage = (): Content[] => {
  const creationDate = planStudyEnglishBasic.createdAt
    ? new Date(planStudyEnglishBasic.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  const lastUpdated = planStudyEnglishBasic.updatedAt
    ? new Date(planStudyEnglishBasic.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not updated";

  return [
    {
      stack: [
        // Main title
        {
          text: planStudyEnglishBasic.title,
          style: "coverTitle",
          alignment: "center",
          margin: [0, 60, 0, 10],
        },
        {
          text: planStudyEnglishBasic.subtitle,
          style: "coverSubtitle",
          alignment: "center",
          margin: [0, 0, 0, 30],
        },

        // Decorative line
        {
          canvas: [
            {
              type: "line",
              x1: 100,
              y1: 0,
              x2: 400,
              y2: 0,
              lineWidth: 3,
              lineColor: studyPlanColors.primary,
            },
          ],
          margin: [0, 0, 0, 40],
        },

        // Overview box
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  stack: [
                    {
                      text: "STUDY PLAN OVERVIEW",
                      style: "overviewHeader",
                      alignment: "center",
                      margin: [0, 0, 0, 15],
                    },
                    {
                      text: `Duration: ${planStudyEnglishBasic.overview.totalDuration}`,
                      style: "overviewItem",
                      alignment: "center",
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: `Daily Study: ${planStudyEnglishBasic.overview.dailyStudyTime}`,
                      style: "overviewItem",
                      alignment: "center",
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: `Progress: ${planStudyEnglishBasic.overview.weeklyProgress}`,
                      style: "overviewItem",
                      alignment: "center",
                      margin: [0, 0, 0, 5],
                    },
                  ],
                  fillColor: studyPlanColors.sectionBg,
                  margin: [20, 20, 20, 20],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 2,
            vLineWidth: () => 2,
            hLineColor: () => studyPlanColors.primary,
            vLineColor: () => studyPlanColors.primary,
          },
          margin: [60, 0, 60, 40],
        },

        // Study structure info
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
                    "• A1-A2: Foundation Grammar",
                    "• B1-B2: Intermediate Structures",
                    "• C1-C2: Advanced Mastery",
                  ].map((text) => ({
                    text,
                    style: "featureItem",
                    margin: [0, 3, 0, 3],
                  })),
                  margin: [20, 10, 10, 10],
                },
                {
                  stack: [
                    "• Weekly assessments",
                    "• Certificate preparation",
                    "• Progressive difficulty",
                  ].map((text) => ({
                    text,
                    style: "featureItem",
                    margin: [0, 3, 0, 3],
                  })),
                  margin: [10, 10, 20, 10],
                },
              ],
            ],
          },
          layout: "noBorders",
          margin: [40, 0, 40, 50],
        },

        // Author and date
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  stack: [
                    {
                      text: "Created by",
                      style: "authorIntro",
                      alignment: "center",
                      margin: [0, 0, 0, 5],
                    },
                    {
                      text: "English Learning Team",
                      style: "authorName",
                      alignment: "center",
                      margin: [0, 0, 0, 10],
                    },
                    {
                      text: `Created: ${creationDate}`,
                      style: "creationDate",
                      alignment: "center",
                      margin: [0, 0, 0, 3],
                    },
                    {
                      text: `Last Updated: ${lastUpdated}`,
                      style: "updateDate",
                      alignment: "center",
                    },
                  ],
                  fillColor: studyPlanColors.weekBg,
                  margin: [20, 20, 20, 20],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => studyPlanColors.accent,
            vLineColor: () => studyPlanColors.accent,
          },
          margin: [120, 0, 120, 0],
        },
      ],
    },
  ];
};

// Create table of contents
const createTableOfContents = (): Content[] => {
  const tocItems = [
    { title: "Study Overview", destination: "study-overview" },
    {
      title: "Daily Schedule Structure",
      destination: "daily-schedule",
    },
    {
      title: "A1 Level - Foundation (Weeks 1-16)",
      destination: "a1-level",
    },
    {
      title: "A2 Level - Elementary (Weeks 17-32)",
      destination: "a2-level",
    },
    {
      title: "B1 Level - Intermediate (Weeks 33-48)",
      destination: "b1-level",
    },
    {
      title: "B2 Level - Upper Intermediate (Weeks 49-64)",
      destination: "b2-level",
    },
    {
      title: "C1 Level - Advanced (Weeks 65-80)",
      destination: "c1-level",
    },
    {
      title: "C2 Level - Mastery (Weeks 81-96)",
      destination: "c2-level",
    },
    {
      title: "Learning Methodologies",
      destination: "learning-methodologies",
    },
    {
      title: "Comprehensive Assessment",
      destination: "comprehensive-assessment",
    },
    {
      title: "Teacher Development",
      destination: "teacher-development",
    },
    {
      title: "Cultural Integration",
      destination: "cultural-integration",
    },
    {
      title: "Technology Integration",
      destination: "technology-integration",
    },
    {
      title: "Research & Innovation",
      destination: "research-innovation",
    },
    {
      title: "Assessment Framework",
      destination: "assessment-framework",
    },
    {
      title: "Certificate Preparation",
      destination: "certificate-preparation",
    },
    { title: "Study Resources", destination: "study-resources" },
    { title: "Appendices", destination: "appendices" },
    {
      title: "Extended Resource Library",
      destination: "extended-resource-library",
    },
    {
      title: "Innovative Pedagogical Approaches",
      destination: "innovative-pedagogical-approaches",
    },
    {
      title: "Quality Assurance Framework",
      destination: "quality-assurance-framework",
    },
    {
      title: "Diversity and Inclusion Framework",
      destination: "diversity-and-inclusion-framework",
    },
    {
      title: "Research and Development Programs",
      destination: "research-and-development-programs",
    },
    {
      title: "Sustainability Framework",
      destination: "sustainability-framework",
    },
    {
      title: "Graduation Pathways Framework",
      destination: "graduation-pathways-framework",
    },
    {
      title: "Community Engagement Initiatives",
      destination: "community-engagement-initiatives",
    },
    {
      title: "Research Methodology Framework",
      destination: "research-methodology-framework",
    },
    {
      title: "Future Innovation Roadmap",
      destination: "future-innovation-roadmap",
    },
    {
      title: "Implementation Case Studies",
      destination: "implementation-case-studies",
    },
    { title: "Study Tips & Resources", destination: "study-tips" },
  ];

  return [
    {
      text: "TABLE OF CONTENTS",
      style: "tocHeader",
      alignment: "center",
      margin: [0, 30, 0, 30],
      id: "table-of-contents",
    },

    {
      table: {
        widths: ["auto", "*"],
        headerRows: 1,
        body: [
          // Header
          [
            {
              text: "#",
              style: "tocTableHeader",
              fillColor: studyPlanColors.headerBg,
              color: studyPlanColors.white,
              alignment: "center",
              margin: [8, 10, 8, 10],
            },
            {
              text: "Section",
              style: "tocTableHeader",
              fillColor: studyPlanColors.headerBg,
              color: studyPlanColors.white,
              margin: [15, 10, 15, 10],
            },
          ],
          // Content rows
          ...tocItems.map((item, index) => [
            {
              text: `${index + 1}`,
              style: "tocItem",
              alignment: "center",
              margin: [8, 8, 8, 8],
            },
            {
              text: {
                text: item.title,
                linkToDestination: item.destination,
              },
              style: "tocLink",
              color: studyPlanColors.primary,
              decoration: "underline",
              margin: [15, 8, 15, 8],
            },
          ]),
        ],
      },
      layout: {
        hLineWidth: (i: number, node: PDFTableNode) => {
          if (i === 0 || i === 1) return 2;
          if (i === node.table.body.length) return 2;
          return 1;
        },
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [40, 0, 40, 30],
    },

    {
      text: "Click on any section title to navigate directly to that section.",
      style: "tocNote",
      alignment: "center",
      margin: [40, 10, 40, 0],
    },
  ];
};

// Create study overview section
const createStudyOverview = (): Content[] => {
  return [
    {
      text: "STUDY OVERVIEW",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "study-overview",
    },

    // Back to contents link
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },

    // Overview details
    {
      table: {
        widths: ["30%", "*"],
        body: [
          [
            {
              text: "Total Duration:",
              style: "overviewLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [10, 8, 10, 8],
            },
            {
              text: planStudyEnglishBasic.overview.totalDuration,
              style: "overviewValue",
              margin: [10, 8, 10, 8],
            },
          ],
          [
            {
              text: "Daily Study Time:",
              style: "overviewLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [10, 8, 10, 8],
            },
            {
              text: planStudyEnglishBasic.overview.dailyStudyTime,
              style: "overviewValue",
              margin: [10, 8, 10, 8],
            },
          ],
          [
            {
              text: "Weekly Progress:",
              style: "overviewLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [10, 8, 10, 8],
            },
            {
              text: planStudyEnglishBasic.overview.weeklyProgress,
              style: "overviewValue",
              margin: [10, 8, 10, 8],
            },
          ],
          [
            {
              text: "Methodology:",
              style: "overviewLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [10, 8, 10, 8],
            },
            {
              text: planStudyEnglishBasic.overview.methodology,
              style: "overviewValue",
              margin: [10, 8, 10, 8],
            },
          ],
          [
            {
              text: "Assessment:",
              style: "overviewLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [10, 8, 10, 8],
            },
            {
              text: planStudyEnglishBasic.overview.assessmentSchedule,
              style: "overviewValue",
              margin: [10, 8, 10, 8],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 20],
    },
  ];
};

// Create daily schedule section
const createDailySchedule = (): Content[] => {
  const schedule = planStudyEnglishBasic.studyStructure;

  return [
    {
      text: "DAILY SCHEDULE STRUCTURE",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "daily-schedule",
    },

    // Back to contents link
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },

    // Daily schedule
    {
      text: "Daily Schedule (45-60 minutes)",
      style: "subsectionHeader",
      margin: [0, 0, 0, 10],
    },

    {
      table: {
        widths: ["25%", "15%", "*"],
        headerRows: 1,
        body: [
          [
            {
              text: "Activity",
              style: "tableHeader",
              fillColor: studyPlanColors.headerBg,
              color: studyPlanColors.white,
              margin: [8, 8, 8, 8],
            },
            {
              text: "Time",
              style: "tableHeader",
              fillColor: studyPlanColors.headerBg,
              color: studyPlanColors.white,
              margin: [8, 8, 8, 8],
            },
            {
              text: "Description",
              style: "tableHeader",
              fillColor: studyPlanColors.headerBg,
              color: studyPlanColors.white,
              margin: [8, 8, 8, 8],
            },
          ],
          [
            { text: "Warm Up", style: "tableCell", margin: [8, 6, 8, 6] },
            { text: "5 min", style: "tableCell", margin: [8, 6, 8, 6] },
            {
              text: schedule.dailySchedule.warmUp,
              style: "tableCell",
              margin: [8, 6, 8, 6],
            },
          ],
          [
            { text: "New Content", style: "tableCell", margin: [8, 6, 8, 6] },
            { text: "20 min", style: "tableCell", margin: [8, 6, 8, 6] },
            {
              text: schedule.dailySchedule.newContent,
              style: "tableCell",
              margin: [8, 6, 8, 6],
            },
          ],
          [
            { text: "Practice", style: "tableCell", margin: [8, 6, 8, 6] },
            { text: "15 min", style: "tableCell", margin: [8, 6, 8, 6] },
            {
              text: schedule.dailySchedule.practice,
              style: "tableCell",
              margin: [8, 6, 8, 6],
            },
          ],
          [
            { text: "Application", style: "tableCell", margin: [8, 6, 8, 6] },
            { text: "10 min", style: "tableCell", margin: [8, 6, 8, 6] },
            {
              text: schedule.dailySchedule.application,
              style: "tableCell",
              margin: [8, 6, 8, 6],
            },
          ],
          [
            { text: "Review", style: "tableCell", margin: [8, 6, 8, 6] },
            { text: "5 min", style: "tableCell", margin: [8, 6, 8, 6] },
            {
              text: schedule.dailySchedule.review,
              style: "tableCell",
              margin: [8, 6, 8, 6],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 20],
    },

    // Weekly structure
    {
      text: "Weekly Structure",
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    },

    {
      table: {
        widths: ["20%", "*"],
        body: Object.entries(schedule.weeklyStructure).map(
          ([day, activity]) => [
            {
              text: day.charAt(0).toUpperCase() + day.slice(1),
              style: "dayLabel",
              fillColor: studyPlanColors.weekBg,
              margin: [8, 6, 8, 6],
            },
            {
              text: activity as string,
              style: "dayActivity",
              margin: [8, 6, 8, 6],
            },
          ]
        ),
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 20],
    },
  ];
};

// Create level section (A1, A2, B1, B2, C1, C2)
const createLevelSection = (
  levelKey: string,
  levelData: LevelData
): Content[] => {
  const content: Content[] = [
    {
      text: levelData.level.toUpperCase(),
      style: "levelHeader",
      alignment: "center",
      margin: [0, 20, 0, 15],
      id: levelKey.toLowerCase() + "-level",
    },

    // Back to contents link
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },

    // Level overview
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: `Duration: ${levelData.duration}`,
                  style: "levelInfo",
                  margin: [0, 0, 0, 5],
                },
                {
                  text: levelData.description,
                  style: "levelDescription",
                },
              ],
              fillColor: studyPlanColors.sectionBg,
              margin: [15, 15, 15, 15],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => studyPlanColors.primary,
        vLineColor: () => studyPlanColors.primary,
      },
      margin: [0, 0, 0, 20],
    },
  ];

  // Add weeks
  if (levelData.weeks) {
    Object.entries(levelData.weeks).forEach(
      ([weekKey, weekData]: [string, WeekData]) => {
        content.push(...createWeekSection(weekKey, weekData, levelKey));
      }
    );
  }

  return content;
};

// Create individual week section with comprehensive details
const createWeekSection = (
  weekKey: string,
  weekData: WeekData,
  levelKey: string
): Content[] => {
  const weekNumber = weekKey.replace("week", "");
  const content: Content[] = [];

  // Week title and header
  content.push({
    text: `Week ${weekNumber}: ${weekData.title}`,
    style: "weekHeader",
    margin: [0, 15, 0, 10],
    id: `${levelKey}-${weekKey}`,
  });

  // Prerequisites (if available)
  if (weekData.prerequisiteKnowledge || weekData.prerequisiteCheck) {
    content.push({
      text: "Prerequisites:",
      style: "subsectionHeader",
      margin: [0, 8, 0, 5],
    });

    const prerequisites =
      weekData.prerequisiteKnowledge || weekData.prerequisiteCheck;
    if (Array.isArray(prerequisites)) {
      content.push({
        ul: prerequisites.map((item: string) => ({
          text: item,
          style: "goalItem",
        })),
        margin: [10, 0, 0, 10],
      });
    }
  }

  // Learning Objectives (if available)
  if (weekData.learningObjectives) {
    content.push({
      text: "Learning Objectives:",
      style: "subsectionHeader",
      margin: [0, 8, 0, 5],
    });

    Object.entries(weekData.learningObjectives).forEach(([key, value]) => {
      content.push({
        table: {
          widths: ["25%", "*"],
          body: [
            [
              {
                text:
                  key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1"),
                style: "assessmentLabel",
                fillColor: studyPlanColors.tipsBg,
                margin: [8, 6, 8, 6],
              },
              {
                text: value as string,
                style: "assessmentDescription",
                margin: [8, 6, 8, 6],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => studyPlanColors.border,
          vLineColor: () => studyPlanColors.border,
        },
        margin: [0, 0, 0, 5],
      });
    });
  }

  // Goals
  content.push({
    text: "Learning Goals:",
    style: "subsectionHeader",
    margin: [0, 8, 0, 5],
  });

  content.push({
    ul: weekData.goals.map((goal: string) => ({
      text: goal,
      style: "goalItem",
    })),
    margin: [10, 0, 0, 10],
  });

  // Daily Topics with comprehensive details
  content.push({
    text: "Daily Topics & Detailed Explanations:",
    style: "subsectionHeader",
    margin: [0, 8, 0, 5],
  });

  // Process each topic with full detail
  weekData.topics.forEach((topic: TopicDetail) => {
    // Topic header
    content.push({
      text: `${topic.day}: ${topic.topic}`,
      style: "certHeader",
      margin: [0, 10, 0, 5],
    });

    // Basic topic information table
    content.push({
      table: {
        widths: ["20%", "*"],
        body: [
          [
            {
              text: "Content:",
              style: "assessmentLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [8, 6, 8, 6],
            },
            {
              text: topic.content,
              style: "assessmentDescription",
              margin: [8, 6, 8, 6],
            },
          ],
          [
            {
              text: "Practice:",
              style: "assessmentLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [8, 6, 8, 6],
            },
            {
              text: topic.practice,
              style: "assessmentDescription",
              margin: [8, 6, 8, 6],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 8],
    });

    // Detailed Explanation (if available)
    if (topic.detailedExplanation) {
      content.push({
        text: "Detailed Explanation:",
        style: "certHeader",
        margin: [5, 8, 0, 5],
      });

      const explanation = topic.detailedExplanation;

      // Process all fields in detailed explanation
      Object.entries(explanation).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          const displayKey = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());

          if (typeof value === "string") {
            content.push({
              table: {
                widths: ["25%", "*"],
                body: [
                  [
                    {
                      text: displayKey + ":",
                      style: "assessmentLabel",
                      fillColor: studyPlanColors.tipsBg,
                      margin: [8, 6, 8, 6],
                    },
                    {
                      text: value,
                      style: "assessmentDescription",
                      margin: [8, 6, 8, 6],
                    },
                  ],
                ],
              },
              layout: {
                hLineWidth: () => 1,
                vLineWidth: () => 1,
                hLineColor: () => studyPlanColors.border,
                vLineColor: () => studyPlanColors.border,
              },
              margin: [10, 0, 0, 3],
            });
          } else if (Array.isArray(value)) {
            content.push({
              text: displayKey + ":",
              style: "assessmentLabel",
              margin: [10, 5, 0, 3],
            });
            content.push({
              ul: value.map((item: unknown) => ({
                text: typeof item === "string" ? item : safeStringify(item),
                style: "goalItem",
              })),
              margin: [20, 0, 0, 5],
            });
          } else if (typeof value === "object") {
            content.push({
              text: displayKey + ":",
              style: "assessmentLabel",
              margin: [10, 5, 0, 3],
            });

            Object.entries(value).forEach(([subKey, subValue]) => {
              const subDisplayKey = subKey
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());

              if (typeof subValue === "string") {
                content.push({
                  table: {
                    widths: ["30%", "*"],
                    body: [
                      [
                        {
                          text: subDisplayKey + ":",
                          style: "assessmentLabel",
                          fillColor: studyPlanColors.borderLight,
                          margin: [6, 4, 6, 4],
                        },
                        {
                          text: subValue,
                          style: "assessmentDescription",
                          margin: [6, 4, 6, 4],
                        },
                      ],
                    ],
                  },
                  layout: {
                    hLineWidth: () => 0.5,
                    vLineWidth: () => 0.5,
                    hLineColor: () => studyPlanColors.borderMedium,
                    vLineColor: () => studyPlanColors.borderMedium,
                  },
                  margin: [20, 0, 0, 2],
                });
              } else if (Array.isArray(subValue)) {
                content.push({
                  text: subDisplayKey + ":",
                  style: "certValue",
                  margin: [20, 3, 0, 2],
                });
                content.push({
                  ul: subValue.map((item: unknown) => ({
                    text: typeof item === "string" ? item : safeStringify(item),
                    style: "goalItem",
                  })),
                  margin: [30, 0, 0, 3],
                });
              } else if (typeof subValue === "object") {
                content.push({
                  text: subDisplayKey + ":",
                  style: "certValue",
                  margin: [20, 3, 0, 2],
                });

                Object.entries(subValue).forEach(([deepKey, deepValue]) => {
                  content.push({
                    table: {
                      widths: ["35%", "*"],
                      body: [
                        [
                          {
                            text:
                              deepKey
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase()) +
                              ":",
                            style: "goalItem",
                            fillColor: studyPlanColors.white,
                            margin: [4, 3, 4, 3],
                          },
                          {
                            text:
                              typeof deepValue === "string"
                                ? deepValue
                                : safeStringify(deepValue),
                            style: "goalItem",
                            margin: [4, 3, 4, 3],
                          },
                        ],
                      ],
                    },
                    layout: {
                      hLineWidth: () => 0.3,
                      vLineWidth: () => 0.3,
                      hLineColor: () => studyPlanColors.borderLight,
                      vLineColor: () => studyPlanColors.borderLight,
                    },
                    margin: [30, 0, 0, 1],
                  });
                });
              }
            });
          }
        }
      });
    }

    // Assessment Criteria (if available)
    if (topic.assessmentCriteria) {
      content.push({
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  {
                    text: "Assessment Criteria:",
                    style: "assessmentHeader",
                    margin: [0, 0, 0, 3],
                  },
                  {
                    text: topic.assessmentCriteria,
                    style: "assessmentText",
                  },
                ],
                fillColor: studyPlanColors.assessmentBg,
                margin: [8, 8, 8, 8],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => studyPlanColors.warning,
          vLineColor: () => studyPlanColors.warning,
        },
        margin: [10, 5, 0, 8],
      });
    }

    // Cultural Notes (if available)
    if (topic.culturalNotes) {
      const notes = Array.isArray(topic.culturalNotes)
        ? topic.culturalNotes
        : [topic.culturalNotes];
      content.push({
        text: "Cultural Notes:",
        style: "certValue",
        margin: [10, 5, 0, 3],
      });
      content.push({
        ul: notes.map((note: string) => ({
          text: note,
          style: "goalItem",
        })),
        margin: [20, 0, 0, 8],
      });
    }

    // Common Errors (if available)
    if (topic.commonErrors || topic.commonMistakes) {
      const errors = topic.commonErrors || topic.commonMistakes;
      content.push({
        text: "Common Errors to Avoid:",
        style: "certValue",
        margin: [10, 5, 0, 3],
      });

      if (errors) {
        const errorArray = Array.isArray(errors) ? errors : [errors];
        content.push({
          ul: errorArray.map((error: string) => ({
            text: error,
            style: "goalItem",
          })),
          margin: [20, 0, 0, 8],
        });
      }
    }
  });

  // Weekly Review (if available)
  if (weekData.weeklyReview) {
    content.push({
      text: "Weekly Review & Integration:",
      style: "subsectionHeader",
      margin: [0, 15, 0, 8],
    });

    Object.entries(weekData.weeklyReview).forEach(([key, value]) => {
      const displayKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

      if (Array.isArray(value)) {
        content.push({
          text: displayKey + ":",
          style: "certValue",
          margin: [0, 5, 0, 3],
        });
        content.push({
          ul: value.map((item: string) => ({
            text: item,
            style: "goalItem",
          })),
          margin: [10, 0, 0, 8],
        });
      } else {
        content.push({
          table: {
            widths: ["25%", "*"],
            body: [
              [
                {
                  text: displayKey + ":",
                  style: "assessmentLabel",
                  fillColor: studyPlanColors.certificateBg,
                  margin: [8, 6, 8, 6],
                },
                {
                  text: value as string,
                  style: "assessmentDescription",
                  margin: [8, 6, 8, 6],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => studyPlanColors.border,
            vLineColor: () => studyPlanColors.border,
          },
          margin: [0, 0, 0, 5],
        });
      }
    });
  }

  // Extension Activities (if available)
  if (weekData.extensionActivities) {
    content.push({
      text: "Extension Activities:",
      style: "subsectionHeader",
      margin: [0, 10, 0, 5],
    });

    if (Array.isArray(weekData.extensionActivities)) {
      content.push({
        ul: weekData.extensionActivities.map((activity: string) => ({
          text: activity,
          style: "goalItem",
        })),
        margin: [10, 0, 0, 10],
      });
    } else {
      content.push({
        text: safeStringify(weekData.extensionActivities),
        style: "goalItem",
        margin: [10, 0, 0, 10],
      });
    }
  }

  // Troubleshooting Guide (if available)
  if (weekData.troubleshootingGuide) {
    content.push({
      text: "Troubleshooting Guide:",
      style: "subsectionHeader",
      margin: [0, 10, 0, 5],
    });

    Object.entries(weekData.troubleshootingGuide).forEach(([key, value]) => {
      const displayKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

      if (Array.isArray(value)) {
        content.push({
          text: displayKey + ":",
          style: "certValue",
          margin: [0, 5, 0, 3],
        });
        content.push({
          ul: value.map((item: string) => ({
            text: item,
            style: "goalItem",
          })),
          margin: [10, 0, 0, 8],
        });
      }
    });
  }

  // Cultural Integration (if available)
  if (weekData.culturalIntegration) {
    content.push({
      text: "Cultural Integration:",
      style: "subsectionHeader",
      margin: [0, 10, 0, 5],
    });

    if (Array.isArray(weekData.culturalIntegration)) {
      content.push({
        ul: weekData.culturalIntegration.map((item: string) => ({
          text: item,
          style: "goalItem",
        })),
        margin: [10, 0, 0, 10],
      });
    } else {
      content.push({
        text: safeStringify(weekData.culturalIntegration),
        style: "goalItem",
        margin: [10, 0, 0, 10],
      });
    }
  }

  // Week Assessment
  content.push({
    table: {
      widths: ["*"],
      body: [
        [
          {
            stack: [
              {
                text: "Week Assessment:",
                style: "assessmentHeader",
                margin: [0, 0, 0, 5],
              },
              {
                text: weekData.assessment,
                style: "assessmentText",
              },
            ],
            fillColor: studyPlanColors.assessmentBg,
            margin: [12, 12, 12, 12],
          },
        ],
      ],
    },
    layout: {
      hLineWidth: () => 1,
      vLineWidth: () => 1,
      hLineColor: () => studyPlanColors.warning,
      vLineColor: () => studyPlanColors.warning,
    },
    margin: [0, 5, 0, 15],
  });

  return content;
};

// Create learning methodologies section
const createLearningMethodologies = (): Content[] => {
  const methodologies = planStudyEnglishBasic.learningMethodologies;

  const content: Content[] = [
    {
      text: "LEARNING METHODOLOGIES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "learning-methodologies",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  // Add all methodology sections
  Object.entries(methodologies).forEach(([sectionKey, sectionData]) => {
    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    content.push({
      text: sectionTitle,
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    });

    if (typeof sectionData === "object" && sectionData !== null) {
      Object.entries(sectionData).forEach(([key, value]) => {
        const displayKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());

        if (typeof value === "string") {
          content.push({
            table: {
              widths: ["25%", "*"],
              body: [
                [
                  {
                    text: displayKey + ":",
                    style: "assessmentLabel",
                    fillColor: studyPlanColors.tipsBg,
                    margin: [8, 6, 8, 6],
                  },
                  {
                    text: value,
                    style: "assessmentDescription",
                    margin: [8, 6, 8, 6],
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => studyPlanColors.border,
              vLineColor: () => studyPlanColors.border,
            },
            margin: [0, 0, 0, 5],
          });
        } else if (Array.isArray(value)) {
          content.push({
            text: displayKey + ":",
            style: "certValue",
            margin: [0, 5, 0, 3],
          });
          content.push({
            ul: value.map((item: unknown) => ({
              text: typeof item === "string" ? item : safeStringify(item),
              style: "goalItem",
            })),
            margin: [10, 0, 0, 8],
          });
        } else if (typeof value === "object") {
          content.push({
            text: displayKey + ":",
            style: "certHeader",
            margin: [0, 8, 0, 5],
          });

          Object.entries(value).forEach(([subKey, subValue]) => {
            const subDisplayKey = subKey
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase());

            if (typeof subValue === "string") {
              content.push({
                table: {
                  widths: ["30%", "*"],
                  body: [
                    [
                      {
                        text: subDisplayKey + ":",
                        style: "assessmentLabel",
                        fillColor: studyPlanColors.borderLight,
                        margin: [6, 4, 6, 4],
                      },
                      {
                        text: subValue,
                        style: "assessmentDescription",
                        margin: [6, 4, 6, 4],
                      },
                    ],
                  ],
                },
                layout: {
                  hLineWidth: () => 0.5,
                  vLineWidth: () => 0.5,
                  hLineColor: () => studyPlanColors.borderMedium,
                  vLineColor: () => studyPlanColors.borderMedium,
                },
                margin: [15, 0, 0, 3],
              });
            } else if (Array.isArray(subValue)) {
              content.push({
                text: subDisplayKey + ":",
                style: "certValue",
                margin: [15, 3, 0, 2],
              });
              content.push({
                ul: subValue.map((item: unknown) => ({
                  text: typeof item === "string" ? item : safeStringify(item),
                  style: "goalItem",
                })),
                margin: [25, 0, 0, 5],
              });
            } else if (typeof subValue === "object" && subValue !== null) {
              content.push({
                text: subDisplayKey + ":",
                style: "certValue",
                margin: [15, 3, 0, 2],
              });

              Object.entries(subValue).forEach(([deepKey, deepValue]) => {
                content.push({
                  table: {
                    widths: ["35%", "*"],
                    body: [
                      [
                        {
                          text:
                            deepKey
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase()) + ":",
                          style: "goalItem",
                          fillColor: studyPlanColors.white,
                          margin: [4, 3, 4, 3],
                        },
                        {
                          text:
                            typeof deepValue === "string"
                              ? deepValue
                              : safeStringify(deepValue),
                          style: "goalItem",
                          margin: [4, 3, 4, 3],
                        },
                      ],
                    ],
                  },
                  layout: {
                    hLineWidth: () => 0.3,
                    vLineWidth: () => 0.3,
                    hLineColor: () => studyPlanColors.borderLight,
                    vLineColor: () => studyPlanColors.borderLight,
                  },
                  margin: [25, 0, 0, 2],
                });
              });
            }
          });
        }
      });
    }
  });

  return content;
};

// Create comprehensive assessment section
const createComprehensiveAssessmentSection = (): Content[] => {
  const assessment = planStudyEnglishBasic.comprehensiveAssessment;

  const content: Content[] = [
    {
      text: "COMPREHENSIVE ASSESSMENT",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "comprehensive-assessment",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  // Process all assessment sections
  Object.entries(assessment).forEach(([sectionKey, sectionData]) => {
    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    content.push({
      text: sectionTitle,
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    });

    // Recursively process nested data
    if (typeof sectionData === "object" && sectionData !== null) {
      processNestedObject(sectionData, content, 0);
    }
  });

  return content;
};

// Create teacher development section
const createTeacherDevelopment = (): Content[] => {
  const teacherDev = planStudyEnglishBasic.teacherDevelopment;

  const content: Content[] = [
    {
      text: "TEACHER DEVELOPMENT",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "teacher-development",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  Object.entries(teacherDev).forEach(([sectionKey, sectionData]) => {
    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    content.push({
      text: sectionTitle,
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    });

    if (typeof sectionData === "object" && sectionData !== null) {
      processNestedObject(sectionData, content, 0);
    }
  });

  return content;
};

// Create cultural integration section
const createCulturalIntegration = (): Content[] => {
  const cultural = planStudyEnglishBasic.culturalIntegration;

  const content: Content[] = [
    {
      text: "CULTURAL INTEGRATION",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "cultural-integration",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  Object.entries(cultural).forEach(([sectionKey, sectionData]) => {
    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    content.push({
      text: sectionTitle,
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    });

    if (typeof sectionData === "object" && sectionData !== null) {
      processNestedObject(sectionData, content, 0);
    }
  });

  return content;
};

// Create technology integration section
const createTechnologyIntegration = (): Content[] => {
  const technology = planStudyEnglishBasic.technologyIntegration;

  const content: Content[] = [
    {
      text: "TECHNOLOGY INTEGRATION",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "technology-integration",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  Object.entries(technology).forEach(([sectionKey, sectionData]) => {
    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    content.push({
      text: sectionTitle,
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    });

    if (typeof sectionData === "object" && sectionData !== null) {
      processNestedObject(sectionData, content, 0);
    }
  });

  return content;
};

// Create research and innovation section
const createResearchInnovation = (): Content[] => {
  const research = planStudyEnglishBasic.researchInnovation;

  const content: Content[] = [
    {
      text: "RESEARCH & INNOVATION",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "research-innovation",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  Object.entries(research).forEach(([sectionKey, sectionData]) => {
    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    content.push({
      text: sectionTitle,
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    });

    if (typeof sectionData === "object" && sectionData !== null) {
      processNestedObject(sectionData, content, 0);
    }
  });

  return content;
};

// Helper function to process nested objects recursively
const processNestedObject = (
  obj: Record<string, unknown>,
  content: Content[],
  depth: number
) => {
  const maxDepth = 4; // Prevent infinite recursion
  if (depth > maxDepth) return;

  Object.entries(obj).forEach(([key, value]) => {
    const displayKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    const leftMargin = 10 + depth * 10;

    if (typeof value === "string") {
      content.push({
        table: {
          widths: ["30%", "*"],
          body: [
            [
              {
                text: displayKey + ":",
                style: "assessmentLabel",
                fillColor:
                  depth % 2 === 0
                    ? studyPlanColors.tipsBg
                    : studyPlanColors.borderLight,
                margin: [6, 4, 6, 4],
              },
              {
                text: value,
                style: "assessmentDescription",
                margin: [6, 4, 6, 4],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 0.5,
          vLineWidth: () => 0.5,
          hLineColor: () => studyPlanColors.borderMedium,
          vLineColor: () => studyPlanColors.borderMedium,
        },
        margin: [leftMargin, 0, 0, 3],
      });
    } else if (Array.isArray(value)) {
      content.push({
        text: displayKey + ":",
        style: depth === 0 ? "certValue" : "goalItem",
        margin: [leftMargin, 5, 0, 3],
      });
      content.push({
        ul: value.map((item: unknown) => ({
          text: typeof item === "string" ? item : safeStringify(item),
          style: "goalItem",
        })),
        margin: [leftMargin + 10, 0, 0, 5],
      });
    } else if (typeof value === "object" && value !== null) {
      content.push({
        text: displayKey + ":",
        style: depth === 0 ? "certHeader" : "certValue",
        margin: [leftMargin, 8, 0, 5],
      });

      processNestedObject(value as Record<string, unknown>, content, depth + 1);
    }
  });
};

// Create resources section
const createResources = (): Content[] => {
  const resources = planStudyEnglishBasic.resources;

  const content: Content[] = [
    {
      text: "STUDY RESOURCES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "study-resources",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof resources === "object" && resources !== null) {
    processNestedObject(resources, content, 0);
  }

  return content;
};

// Create study tips section
const createStudyTips = (): Content[] => {
  const tips = planStudyEnglishBasic.studyTips;

  const content: Content[] = [
    {
      text: "STUDY TIPS & RESOURCES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "study-tips",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof tips === "object" && tips !== null) {
    processNestedObject(tips, content, 0);
  }

  return content;
};

// Create appendices section
const createAppendices = (): Content[] => {
  const appendices = planStudyEnglishBasic.appendices;

  const content: Content[] = [
    {
      text: "APPENDICES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "appendices",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof appendices === "object" && appendices !== null) {
    processNestedObject(appendices, content, 0);
  }

  return content;
};

// Create extended resource library section
const createExtendedResourceLibrary = (): Content[] => {
  const library = planStudyEnglishBasic.extendedResourceLibrary;

  const content: Content[] = [
    {
      text: "EXTENDED RESOURCE LIBRARY",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "extended-resource-library",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof library === "object" && library !== null) {
    processNestedObject(library, content, 0);
  }

  return content;
};

// Create all remaining sections using the same pattern
const createInnovativePedagogicalApproaches = (): Content[] => {
  const approaches = planStudyEnglishBasic.innovativePedagogicalApproaches;

  const content: Content[] = [
    {
      text: "INNOVATIVE PEDAGOGICAL APPROACHES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "innovative-pedagogical-approaches",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof approaches === "object" && approaches !== null) {
    processNestedObject(approaches, content, 0);
  }

  return content;
};

const createQualityAssuranceFramework = (): Content[] => {
  const quality = planStudyEnglishBasic.qualityAssuranceFramework;

  const content: Content[] = [
    {
      text: "QUALITY ASSURANCE FRAMEWORK",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "quality-assurance-framework",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof quality === "object" && quality !== null) {
    processNestedObject(quality, content, 0);
  }

  return content;
};

const createDiversityAndInclusionFramework = (): Content[] => {
  const diversity = planStudyEnglishBasic.diversityAndInclusionFramework;

  const content: Content[] = [
    {
      text: "DIVERSITY AND INCLUSION FRAMEWORK",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "diversity-and-inclusion-framework",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof diversity === "object" && diversity !== null) {
    processNestedObject(diversity, content, 0);
  }

  return content;
};

const createResearchAndDevelopmentPrograms = (): Content[] => {
  const research = planStudyEnglishBasic.researchAndDevelopmentPrograms;

  const content: Content[] = [
    {
      text: "RESEARCH AND DEVELOPMENT PROGRAMS",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "research-and-development-programs",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof research === "object" && research !== null) {
    processNestedObject(research, content, 0);
  }

  return content;
};

const createSustainabilityFramework = (): Content[] => {
  const sustainability = planStudyEnglishBasic.sustainabilityFramework;

  const content: Content[] = [
    {
      text: "SUSTAINABILITY FRAMEWORK",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "sustainability-framework",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof sustainability === "object" && sustainability !== null) {
    processNestedObject(sustainability, content, 0);
  }

  return content;
};

const createGraduationPathwaysFramework = (): Content[] => {
  const graduation = planStudyEnglishBasic.graduationPathwaysFramework;

  const content: Content[] = [
    {
      text: "GRADUATION PATHWAYS FRAMEWORK",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "graduation-pathways-framework",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof graduation === "object" && graduation !== null) {
    processNestedObject(graduation, content, 0);
  }

  return content;
};

const createCommunityEngagementInitiatives = (): Content[] => {
  const community = planStudyEnglishBasic.communityEngagementInitiatives;

  const content: Content[] = [
    {
      text: "COMMUNITY ENGAGEMENT INITIATIVES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "community-engagement-initiatives",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof community === "object" && community !== null) {
    processNestedObject(community, content, 0);
  }

  return content;
};

const createResearchMethodologyFramework = (): Content[] => {
  const methodology = planStudyEnglishBasic.researchMethodologyFramework;

  const content: Content[] = [
    {
      text: "RESEARCH METHODOLOGY FRAMEWORK",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "research-methodology-framework",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof methodology === "object" && methodology !== null) {
    processNestedObject(methodology, content, 0);
  }

  return content;
};

const createFutureInnovationRoadmap = (): Content[] => {
  const roadmap = planStudyEnglishBasic.futureInnovationRoadmap;

  const content: Content[] = [
    {
      text: "FUTURE INNOVATION ROADMAP",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "future-innovation-roadmap",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof roadmap === "object" && roadmap !== null) {
    processNestedObject(roadmap, content, 0);
  }

  return content;
};

const createImplementationCaseStudies = (): Content[] => {
  const caseStudies = planStudyEnglishBasic.implementationCaseStudies;

  const content: Content[] = [
    {
      text: "IMPLEMENTATION CASE STUDIES",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "implementation-case-studies",
    },
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },
  ];

  if (typeof caseStudies === "object" && caseStudies !== null) {
    processNestedObject(caseStudies, content, 0);
  }

  return content;
};

// Create assessment framework section
const createAssessmentFramework = (): Content[] => {
  const framework = planStudyEnglishBasic.assessmentFramework;

  return [
    {
      text: "ASSESSMENT FRAMEWORK",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "assessment-framework",
    },

    // Back to contents link
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },

    // Weekly assessments
    {
      text: "Weekly Assessments",
      style: "subsectionHeader",
      margin: [0, 10, 0, 8],
    },

    {
      table: {
        widths: ["30%", "*"],
        body: Object.entries(framework.weeklyAssessments).map(
          ([key, value]) => [
            {
              text: key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase()),
              style: "assessmentLabel",
              fillColor: studyPlanColors.assessmentBg,
              margin: [8, 6, 8, 6],
            },
            {
              text: value as string,
              style: "assessmentDescription",
              margin: [8, 6, 8, 6],
            },
          ]
        ),
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 15],
    },

    // Monthly reviews
    {
      text: "Monthly Reviews",
      style: "subsectionHeader",
      margin: [0, 10, 0, 8],
    },

    {
      table: {
        widths: ["30%", "*"],
        body: Object.entries(framework.monthlyReviews).map(([key, value]) => [
          {
            text: key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase()),
            style: "assessmentLabel",
            fillColor: studyPlanColors.assessmentBg,
            margin: [8, 6, 8, 6],
          },
          {
            text: value as string,
            style: "assessmentDescription",
            margin: [8, 6, 8, 6],
          },
        ]),
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 15],
    },

    // Level assessments
    {
      text: "Level Assessments",
      style: "subsectionHeader",
      margin: [0, 10, 0, 8],
    },

    {
      table: {
        widths: ["15%", "*"],
        body: Object.entries(framework.levelAssessments).map(
          ([level, description]) => [
            {
              text: level,
              style: "levelLabel",
              fillColor: studyPlanColors.sectionBg,
              margin: [8, 6, 8, 6],
              alignment: "center",
            },
            {
              text: description as string,
              style: "assessmentDescription",
              margin: [8, 6, 8, 6],
            },
          ]
        ),
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 20],
    },
  ];
};

// Create certificate preparation section
const createCertificatePreparation = (): Content[] => {
  const certPrep = planStudyEnglishBasic.certificatePreparation;

  return [
    {
      text: "CERTIFICATE PREPARATION",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "certificate-preparation",
    },

    // Back to contents link
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },

    // Overview
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: "Overview",
                  style: "subsectionHeader",
                  margin: [0, 0, 0, 8],
                },
                {
                  text: `Integration: ${certPrep.overview.integration}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
                {
                  text: `Strategy: ${certPrep.overview.strategy}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
                {
                  text: `Focus: ${certPrep.overview.focus}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
                {
                  text: `Timing: ${certPrep.overview.timing}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
              ],
              fillColor: studyPlanColors.certificateBg,
              margin: [15, 15, 15, 15],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 20],
    },

    // Certificate types
    {
      text: "Certificate Types",
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    },

    ...Object.entries(certPrep)
      .filter(([key]) =>
        [
          "IELTS",
          "TOEIC",
          "PTE",
          "TOEFL",
          "Cambridge",
          "SAT",
          "VSTEP",
        ].includes(key)
      )
      .map(([certName, certData]: [string, CertificateData]) => {
        const certContent: Content[] = [
          {
            text: certName,
            style: "certHeader",
            margin: [0, 15, 0, 8],
          },
          {
            table: {
              widths: ["25%", "*"],
              body: [
                [
                  {
                    text: "Target Levels:",
                    style: "certLabel",
                    fillColor: studyPlanColors.certificateBg,
                    margin: [8, 6, 8, 6],
                  },
                  {
                    text: certData.targetLevels,
                    style: "certValue",
                    margin: [8, 6, 8, 6],
                  },
                ],
                ...(certData.integrationPlan
                  ? Object.entries(certData.integrationPlan).map(
                      ([level, plan]) => [
                        {
                          text: level.replace(/_/g, " "),
                          style: "certLabel",
                          fillColor: studyPlanColors.sectionBg,
                          margin: [8, 6, 8, 6],
                        },
                        {
                          text: plan as string,
                          style: "certValue",
                          margin: [8, 6, 8, 6],
                        },
                      ]
                    )
                  : []),
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => studyPlanColors.border,
              vLineColor: () => studyPlanColors.border,
            },
            margin: [10, 0, 10, 15],
          },
        ];
        return certContent;
      })
      .flat(),
  ];

  return [
    {
      text: "CERTIFICATE PREPARATION",
      style: "sectionHeader",
      alignment: "center",
      margin: [0, 20, 0, 20],
      id: "certificate-preparation",
    },

    // Back to contents link
    {
      text: {
        text: "<- Back to Table of Contents",
        linkToDestination: "table-of-contents",
      },
      style: "backLink",
      color: studyPlanColors.info,
      margin: [0, 0, 0, 15],
    },

    // Overview
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: "Overview",
                  style: "subsectionHeader",
                  margin: [0, 0, 0, 8],
                },
                {
                  text: `Integration: ${certPrep.overview.integration}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
                {
                  text: `Strategy: ${certPrep.overview.strategy}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
                {
                  text: `Focus: ${certPrep.overview.focus}`,
                  style: "certOverview",
                  margin: [0, 0, 0, 4],
                },
              ],
              fillColor: studyPlanColors.certificateBg,
              margin: [15, 15, 15, 15],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => studyPlanColors.border,
        vLineColor: () => studyPlanColors.border,
      },
      margin: [0, 0, 0, 20],
    },

    // Certificate types
    {
      text: "Certificate Types",
      style: "subsectionHeader",
      margin: [0, 15, 0, 10],
    },

    ...Object.entries(certPrep)
      .filter(([key]) =>
        [
          "IELTS",
          "TOEIC",
          "PTE",
          "TOEFL",
          "Cambridge",
          "SAT",
          "VSTEP",
        ].includes(key)
      )
      .map(([certName, certData]: [string, CertificateData]) => {
        const certContent: Content[] = [
          {
            text: certName,
            style: "certHeader",
            margin: [0, 15, 0, 8],
          },
          {
            table: {
              widths: ["25%", "*"],
              body: [
                [
                  {
                    text: "Target Levels:",
                    style: "certLabel",
                    fillColor: studyPlanColors.certificateBg,
                    margin: [8, 6, 8, 6],
                  },
                  {
                    text: certData.targetLevels,
                    style: "certValue",
                    margin: [8, 6, 8, 6],
                  },
                ],
              ],
            },
            layout: {
              hLineWidth: () => 1,
              vLineWidth: () => 1,
              hLineColor: () => studyPlanColors.border,
              vLineColor: () => studyPlanColors.border,
            },
            margin: [10, 0, 10, 10],
          },
        ];
        return certContent;
      })
      .flat(),
  ];
};

// Create thank you page
const createThankYouPage = (): Content[] => {
  return [
    {
      text: "Thank You for Using Our Study Plan!",
      style: {
        fontSize: 24,
        bold: true,
        color: studyPlanColors.primary,
        font: "Roboto",
      },
      alignment: "center",
      margin: [0, 50, 0, 20],
    },
    {
      text: "We hope this comprehensive English study plan helps you achieve your language learning goals. Remember, consistency is key to success!",
      style: {
        fontSize: 14,
        color: studyPlanColors.text,
        font: "Roboto",
      },
      alignment: "center",
      margin: [40, 0, 40, 20],
    },
    {
      text: "Best wishes for your English learning journey!",
      style: {
        fontSize: 16,
        bold: true,
        color: studyPlanColors.secondary,
        font: "Roboto",
      },
      alignment: "center",
      margin: [0, 0, 0, 40],
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
          lineColor: studyPlanColors.primary,
        },
      ],
      margin: [0, 0, 0, 40],
    },
    {
      text: "Good luck with your studies!",
      style: {
        fontSize: 12,
        color: studyPlanColors.lightText,
        font: "Roboto",
      },
      alignment: "center",
    },
  ];
};

// Define styles
const studyPlanStyles: StyleDictionary = {
  header: {
    fontSize: 24,
    bold: true,
    alignment: "center",
    margin: [0, 0, 0, 20],
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  coverTitle: {
    fontSize: 28,
    bold: true,
    alignment: "center",
    margin: [0, 50, 0, 20],
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  coverSubtitle: {
    fontSize: 16,
    alignment: "center",
    margin: [0, 0, 0, 40],
    color: studyPlanColors.secondary,
    font: "Roboto",
  },
  creationDate: {
    fontSize: 11,
    color: studyPlanColors.text,
    font: "Roboto",
  },
  updateDate: {
    fontSize: 10,
    color: studyPlanColors.lightText,
    font: "Roboto",
  },
  sectionHeader: {
    fontSize: 20,
    bold: true,
    margin: [0, 20, 0, 15],
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  subsectionHeader: {
    fontSize: 16,
    bold: true,
    margin: [0, 15, 0, 10],
    color: studyPlanColors.secondary,
    font: "Roboto",
  },
  weekHeader: {
    fontSize: 14,
    bold: true,
    margin: [0, 10, 0, 8],
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  goalItem: {
    fontSize: 11,
    margin: [5, 2, 0, 2],
    color: studyPlanColors.text,
    font: "Roboto",
  },
  tipItem: {
    fontSize: 10,
    margin: [5, 2, 0, 2],
    color: studyPlanColors.text,
    font: "Roboto",
  },
  assessmentHeader: {
    fontSize: 12,
    bold: true,
    margin: [0, 5, 0, 3],
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  assessmentText: {
    fontSize: 11,
    margin: [5, 2, 0, 2],
    color: studyPlanColors.text,
    font: "Roboto",
  },
  assessmentLabel: {
    fontSize: 11,
    bold: true,
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  assessmentDescription: {
    fontSize: 11,
    color: studyPlanColors.text,
    font: "Roboto",
  },
  certHeader: {
    fontSize: 13,
    bold: true,
    margin: [0, 8, 0, 5],
    color: studyPlanColors.primary,
    font: "Roboto",
  },
  certValue: {
    fontSize: 11,
    margin: [10, 2, 0, 2],
    color: studyPlanColors.text,
    font: "Roboto",
  },
  tocItem: {
    fontSize: 12,
    margin: [0, 3, 0, 3],
    color: studyPlanColors.text,
    font: "Roboto",
  },
  tocLink: {
    fontSize: 12,
    margin: [0, 3, 0, 3],
    color: studyPlanColors.info,
    decoration: "underline",
    font: "Roboto",
  },
  backLink: {
    fontSize: 10,
    decoration: "underline",
    font: "Roboto",
  },
  normal: {
    fontSize: 11,
    color: studyPlanColors.text,
    font: "Roboto",
  },
};

// Main function to generate the complete study plan PDF
export const generateStudyPlanPDF = (): void => {
  try {
    const content: Content[] = [
      // Cover page
      ...createCoverPage(),
      { text: "", pageBreak: "after" },

      // Table of contents
      ...createTableOfContents(),
      { text: "", pageBreak: "after" },

      // Study overview
      ...createStudyOverview(),
      { text: "", pageBreak: "after" },

      // Daily schedule
      ...createDailySchedule(),
      { text: "", pageBreak: "after" },

      // Level sections
      ...createLevelSection("A1", planStudyEnglishBasic.A1),
      { text: "", pageBreak: "after" },

      ...createLevelSection("A2", planStudyEnglishBasic.A2),
      { text: "", pageBreak: "after" },

      ...createLevelSection("B1", planStudyEnglishBasic.B1),
      { text: "", pageBreak: "after" },

      ...createLevelSection("B2", planStudyEnglishBasic.B2),
      { text: "", pageBreak: "after" },

      ...createLevelSection("C1", planStudyEnglishBasic.C1),
      { text: "", pageBreak: "after" },

      ...createLevelSection("C2", planStudyEnglishBasic.C2),
      { text: "", pageBreak: "after" },

      // Assessment framework
      ...createAssessmentFramework(),
      { text: "", pageBreak: "after" },

      // Certificate preparation
      ...createCertificatePreparation(),
      { text: "", pageBreak: "after" },

      // Learning methodologies
      ...createLearningMethodologies(),
      { text: "", pageBreak: "after" },

      // Comprehensive assessment
      ...createComprehensiveAssessmentSection(),
      { text: "", pageBreak: "after" },

      // Teacher development
      ...createTeacherDevelopment(),
      { text: "", pageBreak: "after" },

      // Cultural integration
      ...createCulturalIntegration(),
      { text: "", pageBreak: "after" },

      // Technology integration
      ...createTechnologyIntegration(),
      { text: "", pageBreak: "after" },

      // Research & innovation
      ...createResearchInnovation(),
      { text: "", pageBreak: "after" },

      // Study resources
      ...createResources(),
      { text: "", pageBreak: "after" },

      // Appendices
      ...createAppendices(),
      { text: "", pageBreak: "after" },

      // Extended resource library
      ...createExtendedResourceLibrary(),
      { text: "", pageBreak: "after" },

      // Quality assurance framework
      ...createQualityAssuranceFramework(),
      { text: "", pageBreak: "after" },

      // Diversity and inclusion framework
      ...createDiversityAndInclusionFramework(),
      { text: "", pageBreak: "after" },

      // Research and development programs
      ...createResearchAndDevelopmentPrograms(),
      { text: "", pageBreak: "after" },

      // Sustainability framework
      ...createSustainabilityFramework(),
      { text: "", pageBreak: "after" },

      // Graduation pathways framework
      ...createGraduationPathwaysFramework(),
      { text: "", pageBreak: "after" },

      // Community engagement initiatives
      ...createCommunityEngagementInitiatives(),
      { text: "", pageBreak: "after" },

      // Research methodology framework
      ...createResearchMethodologyFramework(),
      { text: "", pageBreak: "after" },

      // Future innovation roadmap
      ...createFutureInnovationRoadmap(),
      { text: "", pageBreak: "after" },

      // Implementation case studies
      ...createImplementationCaseStudies(),
      { text: "", pageBreak: "after" },

      // Innovative pedagogical approaches
      ...createInnovativePedagogicalApproaches(),
      { text: "", pageBreak: "after" },

      // Study tips
      ...createStudyTips(),
      { text: "", pageBreak: "after" },

      // Thank you page
      ...createThankYouPage(),
    ];

    const documentDefinition: TDocumentDefinitions = {
      content,
      styles: studyPlanStyles,
      pageSize: "A4",
      pageMargins: [40, 60, 40, 60],
      defaultStyle: {
        font: "Roboto",
        fontSize: 11,
        color: studyPlanColors.text,
      },
    };

    pdfMake.createPdf(documentDefinition).download("English_Study_Plan.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("There was an error generating the PDF. Please try again.");
  }
};

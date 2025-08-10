import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import {
  grammarLearningTips,
  LearningTip,
  calculateEnhancedStatistics,
  analyzeComponentImportance,
} from "./tips-learn";
import { Content } from "pdfmake/interfaces";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {
  TopicData,
  StatisticsResult,
  ComponentImportanceResult,
} from "@/types/formats/pdf/alll-tenses";

interface PDFSection {
  title: string;
  content: TopicData;
  category: string;
}

interface QuickReferencesResult {
  formulas: string[];
  structures: string[];
  patterns: string[];
  examples: string[];
  realExamples: string[];
  practicalExamples: string[];
  levelInfo: string[];
  cefrLevels: string[];
  difficultyLevels: string[];
  rules: string[];
  usage: string[];
  usagePatterns: string[];
  commonErrors: string[];
  mistakes: string[];
  corrections: string[];
  definitions: string[];
  concepts: string[];
  keyPoints: string[];
  functions: string[];
  meanings: string[];
  purposes: string[];
  types: string[];
  categories: string[];
  classifications: string[];
  recognitionTips: string[];
  tips: string[];
  notes: string[];
  advancedPatterns: string[];
  complexStructures: string[];
  sophisticatedUsage: string[];
}


interface QuickReferenceIdea {
  title: string;
  suggestions: string[];
}

// Configure pdfMake fonts for Vietnamese support and better Unicode handling
if (typeof window !== "undefined") {
  pdfMake.vfs = pdfFonts.vfs;

  // Use only built-in fonts that are available in pdfMake with better Unicode support
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

// Calculate statistics for any grammar topic using enhanced method
const calculateTopicStatistics = (topicData: TopicData): StatisticsResult => {
  return calculateEnhancedStatistics(topicData);
};

// Universal component analyzer for ANY data structure
const analyzeAnyDataStructure = (
  data: TopicData
): ComponentImportanceResult => {
  const counts: ComponentImportanceResult["counts"] = {
    definition: 0,
    forms: 0,
    examples: 0,
    usage: 0,
    rules: 0,
    mistakes: 0,
    theory: 0,
    citations: 0,
    practice: 0,
  };

  // Recursive function to analyze any nested object
  const analyzeObject = (
    obj: Record<string, unknown>,
    depth: number = 0
  ): void => {
    if (!obj || typeof obj !== "object") return;

    Object.entries(obj).forEach(([key, value]) => {
      const keyLower = key.toLowerCase();

      // Analyze based on key names
      if (
        keyLower.includes("definition") ||
        keyLower.includes("concept") ||
        keyLower.includes("meaning")
      ) {
        counts.definition++;
      }
      if (
        keyLower.includes("form") ||
        keyLower.includes("structure") ||
        keyLower.includes("pattern") ||
        keyLower.includes("formula")
      ) {
        counts.forms++;
      }
      if (
        keyLower.includes("example") ||
        keyLower.includes("sample") ||
        keyLower.includes("instance")
      ) {
        if (Array.isArray(value)) {
          counts.examples += value.length;
        } else {
          counts.examples++;
        }
      }
      if (
        keyLower.includes("usage") ||
        keyLower.includes("use") ||
        keyLower.includes("application") ||
        keyLower.includes("purpose")
      ) {
        counts.usage++;
      }
      if (
        keyLower.includes("rule") ||
        keyLower.includes("guideline") ||
        keyLower.includes("principle")
      ) {
        if (Array.isArray(value)) {
          counts.rules += value.length;
        } else {
          counts.rules++;
        }
      }
      if (
        keyLower.includes("mistake") ||
        keyLower.includes("error") ||
        keyLower.includes("common") ||
        keyLower.includes("wrong")
      ) {
        if (Array.isArray(value)) {
          counts.mistakes += value.length;
        } else {
          counts.mistakes++;
        }
      }
      if (
        keyLower.includes("theory") ||
        keyLower.includes("background") ||
        keyLower.includes("explanation")
      ) {
        counts.theory++;
      }
      if (
        keyLower.includes("citation") ||
        keyLower.includes("reference") ||
        keyLower.includes("source")
      ) {
        counts.citations++;
      }
      if (
        keyLower.includes("practice") ||
        keyLower.includes("exercise") ||
        keyLower.includes("drill")
      ) {
        if (Array.isArray(value)) {
          counts.practice += value.length;
        } else {
          counts.practice++;
        }
      }

      // Recursively analyze nested objects and arrays
      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            if (typeof item === "object" && item !== null) {
              analyzeObject(item as Record<string, unknown>, depth + 1);
            }
          });
        } else {
          analyzeObject(value as Record<string, unknown>, depth + 1);
        }
      }
    });
  };

  // Start analysis
  analyzeObject(data as Record<string, unknown>);

  // Calculate total and percentages
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const percentages: { [key: string]: number } = {};

  Object.entries(counts).forEach(([component, count]) => {
    percentages[component] = total > 0 ? Math.round((count / total) * 100) : 0;
  });

  // Get top focus components
  const topFocus = Object.entries(percentages)
    .filter(([, percentage]) => percentage > 0)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3) as [string, number][];

  return { counts, percentages, total, topFocus };
};

// Create component breakdown analysis for individual topics as dot plot
const createComponentBreakdownTable = (
  topicData: TopicData,
  topicName: string
): Content[] => {
  // Try the standard component analysis first
  let componentAnalysis: ComponentImportanceResult;
  try {
    componentAnalysis = analyzeComponentImportance(topicData);

    // If the standard analysis returns no components or very few, use universal analyzer
    if (
      !componentAnalysis ||
      componentAnalysis.total === 0 ||
      componentAnalysis.total < 3
    ) {
      componentAnalysis = analyzeAnyDataStructure(topicData);
    }
  } catch (error) {
    // If standard analysis fails, use universal analyzer
    componentAnalysis = analyzeAnyDataStructure(topicData);
  }

  // Ensure we have valid analysis data
  if (!componentAnalysis || componentAnalysis.total === 0) {
    // Create minimal analysis if no data can be extracted
    componentAnalysis = {
      counts: {
        definition: 1,
        forms: 1,
        examples: 1,
        usage: 0,
        rules: 0,
        mistakes: 0,
        theory: 0,
        citations: 0,
        practice: 0,
      },
      percentages: { definition: 33, forms: 33, examples: 34 },
      total: 3,
      topFocus: [
        ["definition", 33],
        ["forms", 33],
        ["examples", 34],
      ] as [string, number][],
    };
  }

  // Create dot representation for percentage
  const createDots = (percentage: number, maxDots: number = 10): string => {
    const dotCount = Math.max(1, Math.min(maxDots, Math.ceil(percentage / 10)));
    return Array(dotCount).fill("•").join(" ");
  };

  // Sort components by actual percentage for better visualization
  const sortedComponents = Object.entries(componentAnalysis.percentages)
    .filter(([, percentage]) => percentage > 0) // Only show components that exist
    .sort(([, a], [, b]) => b - a); // Sort by percentage descending

  return [
    {
      text: safeText(
        `• PHÂN TÍCH THÀNH PHẦN "${topicName.toUpperCase()}" (DOT PLOT) / "${topicName.toUpperCase()}" COMPONENT ANALYSIS (DOT PLOT) •`
      ),
      style: "analysisHeader",
      color: colors.accent,
      margin: [0, 15, 0, 12],
      alignment: "center",
    } as Content,
    {
      text: safeText(
        `Phân tích thông minh dựa trên tầm quan trọng giáo dục, không chỉ dựa trên số lượng. Ví dụ: Simple Present ưu tiên Forms/Structure / Intelligent analysis based on pedagogical importance, not just quantity. Example: Simple Present prioritizes Forms/Structure`
      ),
      style: "chartSubHeader",
      color: colors.secondary,
      margin: [0, 0, 0, 15],
      alignment: "center",
      fontSize: 10,
      italics: true,
    } as Content,
    {
      table: {
        widths: ["20%", "12%", "25%", "12%", "18%", "13%"],
        body: [
          [
            {
              text: safeText("Thành phần\nComponent"),
              style: "analysisSubHeader",
              color: colors.primary,
              alignment: "center",
              fillColor: colors.lightBg,
            },
            {
              text: safeText("Số lượng\nQuantity"),
              style: "analysisSubHeader",
              color: colors.secondary,
              alignment: "center",
              fillColor: colors.lightBg,
            },
            {
              text: safeText("Biểu đồ mức độ\nLevel Chart"),
              style: "analysisSubHeader",
              color: colors.info,
              alignment: "center",
              fillColor: colors.lightBg,
            },
            {
              text: safeText("Phần trăm\nPercentage"),
              style: "analysisSubHeader",
              color: colors.warning,
              alignment: "center",
              fillColor: colors.lightBg,
            },
            {
              text: safeText("Mức cần thiết\nNecessity Level"),
              style: "analysisSubHeader",
              color: colors.accent,
              alignment: "center",
              fillColor: colors.lightBg,
            },
            {
              text: safeText("Đánh giá\nRating"),
              style: "analysisSubHeader",
              color: colors.success,
              alignment: "center",
              fillColor: colors.lightBg,
            },
          ],
          ...sortedComponents.map(([component, percentage]) => {
            const count =
              componentAnalysis.counts[
                component as keyof typeof componentAnalysis.counts
              ] || 0;
            const dots = createDots(percentage);
            const necessityLevel = getComponentNecessityLevel(
              component,
              topicName,
              percentage
            );
            const rating = getComponentRating(component, topicName, percentage);

            return [
              {
                text: safeText(getComponentDisplayName(component, topicData)),
                style: "analysisValue",
                color: getComponentColor(component),
                alignment: "center",
                fillColor: getComponentBackgroundColor(component),
                margin: [3, 6, 3, 6],
                bold: true,
                fontSize: 9,
              },
              {
                text: safeText(count.toString()),
                style: "analysisValue",
                color: colors.neutral,
                alignment: "center",
                margin: [3, 6, 3, 6],
                fontSize: 10,
              },
              {
                text: safeText(dots),
                style: "analysisValue",
                color: getComponentColor(component),
                alignment: "center",
                fontSize: 12,
                margin: [3, 6, 3, 6],
              },
              {
                text: safeText(`${percentage}%`),
                style: "analysisValue",
                color: getComponentColor(component),
                alignment: "center",
                bold: true,
                margin: [3, 6, 3, 6],
                fontSize: 11,
              },
              {
                text: safeText(necessityLevel),
                style: "analysisValue",
                color: getNecessityColor(necessityLevel),
                alignment: "center",
                fontSize: 8,
                margin: [3, 6, 3, 6],
                bold: true,
              },
              {
                text: safeText(rating),
                style: "analysisValue",
                color: getRatingColor(rating),
                alignment: "center",
                fontSize: 8,
                margin: [3, 6, 3, 6],
                bold: true,
              },
            ];
          }),
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderColor,
        vLineColor: () => colors.borderColor,
      },
      margin: [15, 0, 15, 15],
    } as Content,
    {
      text: safeText(
        `• Tổng: ${
          componentAnalysis.total
        } thành phần. Đánh giá thông minh dựa trên tầm quan trọng giáo dục: ${getTopPriorityInsight(
          componentAnalysis.topFocus,
          topicName
        )} •`
      ),
      style: "chartNote",
      color: colors.neutral,
      alignment: "center",
      margin: [15, 0, 15, 8],
      italics: true,
      fontSize: 9,
    } as Content,
    {
      text: safeText(
        `• Total: ${
          componentAnalysis.total
        } components. Intelligent assessment based on pedagogical importance: ${getTopPriorityInsight(
          componentAnalysis.topFocus,
          topicName
        )} •`
      ),
      style: "chartNote",
      color: colors.neutral,
      alignment: "center",
      margin: [15, 0, 15, 20],
      italics: true,
      fontSize: 9,
    } as Content,
  ];
};

// Helper functions for component breakdown - Dynamic detection based on actual data
const getComponentDisplayName = (
  component: string,
  topicData: TopicData
): string => {
  // Dynamic detection of what the component actually contains
  const detectComponentType = (comp: string, data: TopicData): string => {
    // Check what type of data exists for this component
    if (comp === "examples" && data.examples) {
      const exampleCount = Array.isArray(data.examples)
        ? data.examples.length
        : Object.keys(data.examples).length;
      return `Examples (${exampleCount})\nVí dụ (${exampleCount})`;
    }
    if (comp === "forms" && (data.forms || data.structure || data.formation)) {
      return "Forms/Structure\nCấu trúc/Công thức";
    }
    if (comp === "usage" && (data.usage || data.uses || data.applications)) {
      return "Usage/Application\nCách sử dụng";
    }
    if (comp === "definition" && (data.definition || data.concept)) {
      return "Definition/Concept\nĐịnh nghĩa/Khái niệm";
    }
    if (
      comp === "rules" &&
      (data.rules || data.grammarRules || data.spellingRules)
    ) {
      return "Rules/Guidelines\nQuy tắc/Hướng dẫn";
    }
    if (comp === "mistakes" && (data.commonMistakes || data.errors)) {
      return "Common Mistakes\nLỗi thường gặp";
    }
    if (comp === "theory" && (data.theory || data.background)) {
      return "Theory/Background\nLý thuyết/Nền tảng";
    }
    if (comp === "citations" && (data.references || data.sources)) {
      return "References/Sources\nTài liệu tham khảo";
    }
    if (comp === "practice" && (data.exercises || data.practiceExercises)) {
      return "Practice/Exercises\nThực hành/Bài tập";
    }

    // Fallback to generic naming
    const fallbackMap: { [key: string]: string } = {
      definition: "Definition\nĐịnh nghĩa",
      forms: "Forms\nCấu trúc",
      examples: "Examples\nVí dụ",
      usage: "Usage\nCách dùng",
      rules: "Rules\nQuy tắc",
      mistakes: "Mistakes\nLỗi sai",
      theory: "Theory\nLý thuyết",
      citations: "Citations\nTrích dẫn",
      practice: "Practice\nThực hành",
    };
    return fallbackMap[comp] || comp.charAt(0).toUpperCase() + comp.slice(1);
  };

  return detectComponentType(component, topicData);
};

// NEW: Pedagogical importance-based necessity rating
const getComponentNecessityLevel = (
  component: string,
  topicName: string,
  percentage: number
): string => {
  const topicLower = topicName.toLowerCase();

  // Special rules for different grammar topics
  if (topicLower.includes("simple") || topicLower.includes("basic")) {
    // For basic topics, prioritize forms/structure and examples
    if (component === "forms") return "Cực kỳ cần thiết\nCritically Essential";
    if (component === "examples") return "Rất cần thiết\nVery Essential";
    if (component === "usage") return "Cần thiết\nEssential";
    if (component === "definition") return "Quan trọng\nImportant";
  }

  if (topicLower.includes("present") && topicLower.includes("simple")) {
    // Present Simple should focus heavily on forms/structure
    if (component === "forms") return "Cực kỳ cần thiết\nCritically Essential";
    if (component === "examples") return "Rất cần thiết\nVery Essential";
    if (component === "rules") return "Cần thiết\nEssential";
  }

  if (topicLower.includes("perfect") || topicLower.includes("continuous")) {
    // Complex tenses need more examples and usage patterns
    if (component === "examples")
      return "Cực kỳ cần thiết\nCritically Essential";
    if (component === "usage") return "Rất cần thiết\nVery Essential";
    if (component === "forms") return "Cần thiết\nEssential";
  }

  if (topicLower.includes("conditional") || topicLower.includes("relative")) {
    // Advanced structures need strong theoretical foundation
    if (component === "examples")
      return "Cực kỳ cần thiết\nCritically Essential";
    if (component === "theory") return "Rất cần thiết\nVery Essential";
    if (component === "rules") return "Cần thiết\nEssential";
  }

  if (topicLower.includes("modal") || topicLower.includes("phrasal")) {
    // Modal verbs and phrasal verbs need usage focus
    if (component === "usage") return "Cực kỳ cần thiết\nCritically Essential";
    if (component === "examples") return "Rất cần thiết\nVery Essential";
    if (component === "mistakes") return "Cần thiết\nEssential";
  }

  // General importance hierarchy based on pedagogical research
  switch (component) {
    case "examples":
      return percentage >= 20
        ? "Cực kỳ cần thiết\nCritically Essential"
        : "Rất cần thiết\nVery Essential";
    case "forms":
      return percentage >= 15
        ? "Rất cần thiết\nVery Essential"
        : "Cần thiết\nEssential";
    case "usage":
      return percentage >= 15
        ? "Rất cần thiết\nVery Essential"
        : "Cần thiết\nEssential";
    case "definition":
      return "Quan trọng\nImportant";
    case "rules":
      return "Hữu ích\nUseful";
    case "mistakes":
      return "Hữu ích\nUseful";
    case "theory":
      return "Tham khảo\nReference";
    case "citations":
      return "Bổ sung\nSupplementary";
    case "practice":
      return "Hữu ích\nUseful";
    default:
      return "Tham khảo\nReference";
  }
};

// NEW: Overall rating based on necessity and content quality
const getComponentRating = (
  component: string,
  topicName: string,
  percentage: number
): string => {
  const necessity = getComponentNecessityLevel(
    component,
    topicName,
    percentage
  );

  // Calculate rating based on necessity level and content adequacy
  if (
    necessity.includes("Cực kỳ cần thiết") ||
    necessity.includes("Critically Essential")
  ) {
    if (percentage >= 25) return "*****\nExcellent";
    if (percentage >= 20) return "****\nVery Good";
    if (percentage >= 15) return "***\nGood";
    return "**\nNeeds More";
  }

  if (
    necessity.includes("Rất cần thiết") ||
    necessity.includes("Very Essential")
  ) {
    if (percentage >= 20) return "*****\nExcellent";
    if (percentage >= 15) return "****\nVery Good";
    if (percentage >= 10) return "***\nGood";
    return "**\nNeeds More";
  }

  if (necessity.includes("Cần thiết") || necessity.includes("Essential")) {
    if (percentage >= 15) return "****\nVery Good";
    if (percentage >= 10) return "***\nGood";
    if (percentage >= 5) return "**\nAdequate";
    return "*\nInsufficient";
  }

  // For lower necessity items, any presence is good
  if (percentage >= 10) return "***\nGood";
  if (percentage >= 5) return "**\nAdequate";
  if (percentage > 0) return "*\nPresent";
  return "----\nMissing";
};

// NEW: Generate intelligent insights about topic priorities
const getTopPriorityInsight = (
  topFocus: [string, number][],
  topicName: string
): string => {
  if (!topFocus || topFocus.length === 0) return "balanced approach";

  const [topComponent, topPercentage] = topFocus[0];
  const topicLower = topicName.toLowerCase();

  // Generate contextual insights based on topic type and top component
  if (topicLower.includes("simple") && topComponent === "forms") {
    return "excellent structure focus for foundational learning";
  }
  if (topicLower.includes("simple") && topComponent === "examples") {
    return "strong practical approach with abundant examples";
  }
  if (topicLower.includes("perfect") && topComponent === "examples") {
    return "examples-driven approach ideal for complex tenses";
  }
  if (topicLower.includes("conditional") && topComponent === "usage") {
    return "usage-focused approach perfect for practical application";
  }
  if (topComponent === "forms" && topPercentage >= 25) {
    return "structure-heavy approach - excellent for grammar foundations";
  }
  if (topComponent === "examples" && topPercentage >= 30) {
    return "example-rich content - ideal for practical learning";
  }
  if (topComponent === "usage" && topPercentage >= 25) {
    return "application-focused approach - great for real-world usage";
  }

  return `${topComponent}-focused approach (${topPercentage}% emphasis)`;
};

// NEW: Color functions for necessity and rating
const getNecessityColor = (necessity: string): string => {
  if (
    necessity.includes("Cực kỳ cần thiết") ||
    necessity.includes("Critically Essential")
  ) {
    return colors.error; // Red for critically essential
  }
  if (
    necessity.includes("Rất cần thiết") ||
    necessity.includes("Very Essential")
  ) {
    return colors.warning; // Orange for very essential
  }
  if (necessity.includes("Cần thiết") || necessity.includes("Essential")) {
    return colors.success; // Green for essential
  }
  if (necessity.includes("Quan trọng") || necessity.includes("Important")) {
    return colors.info; // Blue for important
  }
  if (necessity.includes("Hữu ích") || necessity.includes("Useful")) {
    return colors.tealAccent; // Teal for useful
  }
  return colors.neutral; // Gray for reference/supplementary
};

const getRatingColor = (rating: string): string => {
  if (rating.includes("[*****]") || rating.includes("Excellent")) {
    return colors.success; // Green for excellent
  }
  if (rating.includes("[****]") || rating.includes("Very Good")) {
    return colors.tealAccent; // Teal for very good
  }
  if (rating.includes("[***]") || rating.includes("Good")) {
    return colors.warning; // Orange for good
  }
  if (
    rating.includes("[**]") ||
    rating.includes("Adequate") ||
    rating.includes("Needs More")
  ) {
    return colors.info; // Blue for adequate
  }
  if (
    rating.includes("[*]") ||
    rating.includes("Present") ||
    rating.includes("Insufficient")
  ) {
    return colors.error; // Red for insufficient
  }
  if (rating.includes("[----]") || rating.includes("Missing")) {
    return colors.neutral; // Gray for missing
  }
  return colors.neutral; // Gray for missing
};

// Helper functions for enhanced quick analysis
const createIntelligentLearningTip = (topicName: string): LearningTip => {
  // Determine difficulty based on topic complexity
  const difficulty =
    topicName.toLowerCase().includes("advanced") ||
    topicName.toLowerCase().includes("conditional") ||
    topicName.toLowerCase().includes("subjunctive")
      ? "Advanced"
      : topicName.toLowerCase().includes("perfect") ||
        topicName.toLowerCase().includes("passive")
      ? "Intermediate"
      : "Beginner";

  // Determine priority based on common usage
  const priority = [
    "simple present",
    "simple past",
    "present perfect",
    "future",
  ].some((t) => topicName.toLowerCase().includes(t))
    ? "High"
    : ["continuous", "perfect", "modal"].some((t) =>
        topicName.toLowerCase().includes(t)
      )
    ? "Medium"
    : "Low";

  return {
    topic: topicName,
    difficulty,
    studyTime:
      difficulty === "Advanced"
        ? "3-4 weeks"
        : difficulty === "Intermediate"
        ? "2-3 weeks"
        : "1-2 weeks",
    priority,
    attention:
      priority === "High"
        ? "More"
        : priority === "Medium"
        ? "Moderate"
        : "Less",
    category: determineGrammarCategory(topicName),
    tips: generateTopicSpecificTips(topicName),
    commonPitfalls: generateCommonPitfalls(topicName),
    practiceActivities: generatePracticeActivities(topicName),
    masteryCriteria: generateMasteryCriteria(topicName),
  };
};

const determineGrammarCategory = (topicName: string): string => {
  const name = topicName.toLowerCase();
  if (
    name.includes("present") ||
    name.includes("past") ||
    name.includes("future")
  )
    return "Tenses";
  if (name.includes("noun") || name.includes("article"))
    return "Nouns & Articles";
  if (name.includes("pronoun") || name.includes("possessive"))
    return "Pronouns";
  if (name.includes("adjective") || name.includes("comparative"))
    return "Adjectives";
  if (name.includes("adverb")) return "Adverbs";
  if (
    name.includes("verb") ||
    name.includes("passive") ||
    name.includes("modal")
  )
    return "Verbs";
  if (name.includes("conditional") || name.includes("clause"))
    return "Complex Structures";
  return "Grammar Structures";
};

const generateTopicSpecificTips = (topicName: string): string[] => {
  const name = topicName.toLowerCase();
  const baseTips = [
    `Học định nghĩa cơ bản của ${topicName} / Learn basic definition of ${topicName}`,
    `Nắm vững cấu trúc chính / Master the main structure`,
    `Thực hành với ví dụ đơn giản / Practice with simple examples`,
    `Ghi nhớ các từ khóa quan trọng / Memorize important keywords`,
    `Áp dụng vào câu hoàn chỉnh / Apply to complete sentences`,
  ];

  // Add topic-specific tips
  if (name.includes("present")) {
    baseTips.push(
      "Chú ý đến thì hiện tại và cách sử dụng / Focus on present time usage"
    );
    baseTips.push(
      "Phân biệt present simple và present continuous / Distinguish simple vs continuous"
    );
  } else if (name.includes("past")) {
    baseTips.push("Học các động từ bất quy tắc / Learn irregular verbs");
    baseTips.push(
      "Phân biệt past simple và past continuous / Distinguish simple vs continuous"
    );
  } else if (name.includes("future")) {
    baseTips.push(
      "Nắm vững will, going to, và present continuous cho tương lai / Master will, going to, present continuous for future"
    );
  } else if (name.includes("conditional")) {
    baseTips.push("Học 4 loại câu điều kiện / Learn 4 types of conditionals");
    baseTips.push(
      "Phân biệt tình huống thực tế và giả định / Distinguish real vs hypothetical situations"
    );
  }

  return baseTips;
};

const generateCommonPitfalls = (topicName: string): string[] => {
  const name = topicName.toLowerCase();
  const basePitfalls = [
    `Nhầm lẫn cấu trúc cơ bản / Confusing basic structure`,
    `Sử dụng sai ngữ cảnh / Wrong context usage`,
    `Quên các quy tắc chính tả / Forgetting spelling rules`,
  ];

  if (name.includes("present")) {
    basePitfalls.push(
      "Quên thêm -s/-es cho ngôi thứ ba số ít / Forgetting -s/-es for third person singular"
    );
  } else if (name.includes("past")) {
    basePitfalls.push(
      "Nhầm lẫn động từ quy tắc và bất quy tắc / Confusing regular and irregular verbs"
    );
  } else if (name.includes("perfect")) {
    basePitfalls.push(
      "Nhầm lẫn have/has với động từ chính / Confusing have/has with main verb"
    );
  }

  return basePitfalls;
};

const generatePracticeActivities = (topicName: string): string[] => {
  return [
    `Làm bài tập điền từ về ${topicName} / Fill-in-the-blank exercises for ${topicName}`,
    `Viết câu ví dụ sử dụng cấu trúc / Write example sentences using the structure`,
    `Chọn đáp án đúng trong bài tập trắc nghiệm / Multiple choice exercises`,
    `Sửa lỗi trong các câu sai / Error correction exercises`,
    `Tạo đoạn hội thoại sử dụng cấu trúc / Create dialogues using the structure`,
  ];
};

const generateMasteryCriteria = (topicName: string): string[] => {
  return [
    `Sử dụng đúng 90% cấu trúc ${topicName} / Use ${topicName} structure correctly 90% of the time`,
    `Nhận biết được khi nào sử dụng / Recognize when to use the structure`,
    `Tạo được câu phức tạp với cấu trúc / Create complex sentences with the structure`,
    `Giải thích được quy tắc cho người khác / Explain the rules to others`,
  ];
};

const extractComprehensiveQuickRefs = (
  stats: StatisticsResult,
  topicName: string
): QuickReferencesResult => {
  // Enhanced topic key matching with exact name mapping for 100% coverage
  let topicKey = Object.keys(tenseDatabase)
    .filter((key) => key !== "createdAt" && key !== "updatedAt")
    .find(
      (key) =>
        key.toLowerCase().replace(/_/g, " ") === topicName.toLowerCase() ||
        topicName
          .toLowerCase()
          .includes(key.toLowerCase().replace(/_/g, " ")) ||
        key.toLowerCase().replace(/_/g, " ").includes(topicName.toLowerCase())
    );

  // Special exact matches for specific topics to ensure 100% coverage
  if (!topicKey) {
    const normalizedTopicName = topicName.toLowerCase().replace(/[\s\-_]/g, "");
    const exactMatches: { [key: string]: string } = {
      // Core grammar structures
      causativeform: "CausativeForm",
      causativeverbs: "CausativeVerbs",
      modalverbs: "ModalVerbs",
      modalverb: "ModalVerbs",
      passivevoice: "PassiveVoice",
      relativeclauses: "Relative_Clauses",
      reportedspeech: "Reported_Speech",
      indirectspeech: "Reported_Speech",

      // Verb forms
      gerundsandinfinitives: "GerundsAndInfinitives",
      gerunds: "Gerunds",
      infinitives: "Infinitives",
      phrasalverbs: "PhrasalVerbs",

      // Special noun forms
      singulariatantum: "singulariaTantum",
      singularia: "singulariaTantum",

      // Special verb forms
      infinitivepatterns: "infinitivePatterns",
      infinitive: "infinitivePatterns",

      // Comparison and degrees
      comparisons: "Comparisons",
      comparative: "Comparative",
      superlative: "Superlative",
      equalitycomparison: "EqualityComparison",
      doublecomparative: "DoubleComparative",
      repeatedcomparative: "RepeatedComparative",

      // Conditional structures
      conditionals: "Conditionals",

      // Question forms
      questionforms: "QuestionForms",
      reportedquestions: "ReportedQuestions",

      // Parts of speech
      articles: "Articles",
      nouns: "Nouns",
      pronouns: "Pronouns",
      reflexivepronouns: "ReflexivePronouns",
      adjectives: "Adjective",
      adjectiveorder: "AdjectiveOrder",
      adverbs: "Adverb",
      prepositions: "Preposition",
      conjunctions: "Conjunctions",
      determiners: "Determiners",
      quantifiers: "Quantifiers",
      possessives: "Possessives",

      // Advanced structures
      emphasis: "Emphasis",
      inversion: "Inversion",
      ellipsisandsubstitution: "EllipsisAndSubstitution",
      focusstructures: "FocusStructures",
      hedging: "Hedging",
      discoursemarkers: "DiscourseMarkers",
      nominalisation: "Nominalisation",
      negation: "Negation",
      imperatives: "Imperatives",
      interjections: "Interjections",
      idiomaticlanguage: "IdiomaticLanguage",

      // Future forms
      futureinthepast: "FutureInThePast",
    };

    topicKey = exactMatches[normalizedTopicName];
  }

  const topicData = topicKey
    ? (tenseDatabase as unknown as Record<string, TopicData>)[topicKey]
    : null;

  // Initialize comprehensive quick reference structure based on 10 main ideals from data_grammar
  const quickRefs: QuickReferencesResult = {
    // 1. FORMULAS & STRUCTURES - Core grammatical patterns
    formulas: [],
    structures: [],
    patterns: [],

    // 2. EXAMPLES - Real usage examples from data
    examples: [],
    realExamples: [],
    practicalExamples: [],

    // 3. LEVELS (A1-C2) - CEFR level information
    levelInfo: [],
    cefrLevels: [],
    difficultyLevels: [],

    // 4. RULES & USAGE - Grammar rules and usage patterns
    rules: [],
    usage: [],
    usagePatterns: [],

    // 5. COMMON MISTAKES/ERRORS - Actual errors from data
    commonErrors: [],
    mistakes: [],
    corrections: [],

    // 6. DEFINITIONS & CONCEPTS - Core definitions
    definitions: [],
    concepts: [],
    keyPoints: [],

    // 7. FUNCTIONS - Different functions and meanings
    functions: [],
    meanings: [],
    purposes: [],

    // 8. TYPES & CATEGORIES - Different types and subcategories
    types: [],
    categories: [],
    classifications: [],

    // 9. RECOGNITION TIPS - Recognition tips and notes
    recognitionTips: [],
    tips: [],
    notes: [],

    // 10. ADVANCED PATTERNS - Advanced structures and patterns
    advancedPatterns: [],
    complexStructures: [],
    sophisticatedUsage: [],
  };

  // Extract actual data from topic content using the 10 main ideals
  if (topicData) {
    extractActualDataFromObject(
      topicData as Record<string, unknown>,
      quickRefs
    );
  }

  return quickRefs;
};

const extractActualDataFromObject = (
  obj: Record<string, unknown>,
  quickRefs: QuickReferencesResult,
  path: string = ""
): void => {
  if (!obj || typeof obj !== "object") return;

  // Helper function to safely cast object
  const safeExtract = (value: unknown, newPath: string) => {
    if (typeof value === "object" && value !== null) {
      extractActualDataFromObject(
        value as Record<string, unknown>,
        quickRefs,
        newPath
      );
    }
  };

  Object.entries(obj).forEach(([key, value]) => {
    const keyLower = key.toLowerCase();

    // 1. FORMULAS & STRUCTURES - Extract actual formulas and structures
    if (
      keyLower.includes("structure") ||
      keyLower.includes("formation") ||
      keyLower.includes("formula") ||
      keyLower.includes("pattern") ||
      keyLower === "form" ||
      keyLower === "forms"
    ) {
      if (typeof value === "string" && value.length > 0 && value.length < 200) {
        quickRefs.formulas.push(value);
      } else if (Array.isArray(value)) {
        value.slice(0, 6).forEach((v) => {
          if (typeof v === "string" && v.length > 0 && v.length < 200) {
            quickRefs.formulas.push(v);
          }
        });
      } else if (typeof value === "object" && value !== null) {
        // Extract nested structures
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (
            typeof subValue === "string" &&
            subValue.length > 0 &&
            subValue.length < 200
          ) {
            quickRefs.formulas.push(`${subKey}: ${subValue}`);
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 2. EXAMPLES - Extract real examples from data
    if (keyLower.includes("example") || keyLower === "examples") {
      if (Array.isArray(value)) {
        value.slice(0, 8).forEach((v) => {
          if (
            typeof v === "string" &&
            v.length > 0 &&
            v.length < 150 &&
            !v.includes("Example")
          ) {
            quickRefs.examples.push(v);
          }
        });
      } else if (typeof value === "object" && value !== null) {
        // Extract examples from nested objects
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (Array.isArray(subValue)) {
            subValue.slice(0, 4).forEach((sv) => {
              if (
                typeof sv === "string" &&
                sv.length > 0 &&
                sv.length < 150 &&
                !sv.includes("Example")
              ) {
                quickRefs.examples.push(sv);
              }
            });
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // Extract specific vocabulary patterns for infinitive and singularia tantum
    if (keyLower.includes("vocab") || keyLower.includes("vocabulary")) {
      if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([vocabKey, vocabValue]) => {
          if (Array.isArray(vocabValue)) {
            vocabValue.slice(0, 6).forEach((v) => {
              if (typeof v === "string" && v.length > 0 && v.length < 100) {
                quickRefs.examples.push(v);
              }
            });
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 3. LEVELS (A1-C2) - Extract CEFR level information
    if (
      keyLower.match(/^(a1|a2|b1|b2|c1|c2)$/) ||
      keyLower.includes("level") ||
      keyLower.includes("cefr")
    ) {
      if (typeof value === "object" && value !== null) {
        // Extract meaningful level information instead of raw JSON
        const levelEntries = Object.entries(value);
        levelEntries.slice(0, 2).forEach(([levelKey, levelValue]) => {
          if (
            typeof levelValue === "string" &&
            levelValue.length > 0 &&
            levelValue.length < 200
          ) {
            quickRefs.levelInfo.push(
              `${key.toUpperCase()} ${levelKey}: ${levelValue}`
            );
          } else if (Array.isArray(levelValue)) {
            const first = levelValue[0];
            if (
              typeof first === "string" &&
              first.length > 0 &&
              first.length < 150
            ) {
              quickRefs.levelInfo.push(
                `${key.toUpperCase()} ${levelKey}: ${first}`
              );
            }
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 4. RULES & USAGE - Extract grammar rules and usage patterns
    if (
      keyLower.includes("rule") ||
      keyLower.includes("usage") ||
      keyLower === "rules" ||
      keyLower === "usage" ||
      keyLower.includes("use")
    ) {
      if (Array.isArray(value)) {
        value.slice(0, 6).forEach((v) => {
          if (typeof v === "string" && v.length > 0 && v.length < 200) {
            quickRefs.rules.push(v);
          }
        });
      } else if (
        typeof value === "string" &&
        value.length > 0 &&
        value.length < 200
      ) {
        quickRefs.rules.push(value);
      } else if (typeof value === "object" && value !== null) {
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 5. COMMON MISTAKES/ERRORS - Extract actual errors from data
    if (
      keyLower.includes("mistake") ||
      keyLower.includes("error") ||
      keyLower.includes("common_mistake") ||
      keyLower === "commonerrors" ||
      keyLower === "common_errors" ||
      keyLower === "commonmistakes"
    ) {
      if (Array.isArray(value)) {
        value.slice(0, 5).forEach((v) => {
          if (typeof v === "string" && v.length > 0 && v.length < 200) {
            quickRefs.commonErrors.push(v);
          }
        });
      } else if (typeof value === "object" && value !== null) {
        // Extract from nested mistake objects
        Object.entries(value).forEach(([errorKey, errorValue]) => {
          if (Array.isArray(errorValue)) {
            errorValue.slice(0, 3).forEach((ev) => {
              if (typeof ev === "string" && ev.length > 0 && ev.length < 200) {
                quickRefs.commonErrors.push(ev);
              }
            });
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 6. DEFINITIONS & CONCEPTS - Extract core definitions
    if (
      keyLower.includes("definition") ||
      keyLower.includes("concept") ||
      keyLower === "definition" ||
      keyLower === "concept" ||
      keyLower.includes("core_concept")
    ) {
      if (typeof value === "string" && value.length > 0 && value.length < 500) {
        quickRefs.definitions.push(value);
      } else if (typeof value === "object" && value !== null) {
        // Extract from nested definition objects
        Object.entries(value).forEach(([defKey, defValue]) => {
          if (
            typeof defValue === "string" &&
            defValue.length > 0 &&
            defValue.length < 300
          ) {
            quickRefs.definitions.push(`${defKey}: ${defValue}`);
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 7. FUNCTIONS - Extract different functions and meanings
    if (
      keyLower.includes("function") ||
      keyLower === "functions" ||
      keyLower.includes("meaning") ||
      keyLower.includes("purpose")
    ) {
      if (Array.isArray(value)) {
        value.slice(0, 5).forEach((v) => {
          if (typeof v === "string" && v.length > 0 && v.length < 200) {
            quickRefs.functions.push(v);
          }
        });
      } else if (
        typeof value === "string" &&
        value.length > 0 &&
        value.length < 200
      ) {
        quickRefs.functions.push(value);
      } else if (typeof value === "object" && value !== null) {
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 8. TYPES & CATEGORIES - Extract different types and subcategories
    if (
      keyLower.includes("type") ||
      keyLower === "types" ||
      keyLower.includes("categor") ||
      keyLower.includes("classification")
    ) {
      if (Array.isArray(value)) {
        value.slice(0, 6).forEach((v) => {
          if (typeof v === "string" && v.length > 0 && v.length < 200) {
            quickRefs.types.push(v);
          }
        });
      } else if (typeof value === "object" && value !== null) {
        // Extract meaningful type information
        Object.entries(value).forEach(([typeKey, typeValue]) => {
          if (
            typeof typeValue === "string" &&
            typeValue.length > 0 &&
            typeValue.length < 200
          ) {
            quickRefs.types.push(`${typeKey}: ${typeValue}`);
          } else if (Array.isArray(typeValue)) {
            const first = typeValue[0];
            if (
              typeof first === "string" &&
              first.length > 0 &&
              first.length < 150
            ) {
              quickRefs.types.push(`${typeKey}: ${first}`);
            }
          }
        });
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 9. RECOGNITION TIPS - Extract recognition tips and notes
    if (
      keyLower.includes("recognition") ||
      keyLower.includes("tip") ||
      keyLower === "tips" ||
      keyLower.includes("note") ||
      keyLower === "notes"
    ) {
      if (Array.isArray(value)) {
        value.slice(0, 5).forEach((v) => {
          if (typeof v === "string") {
            quickRefs.recognitionTips.push(v);
          }
        });
      } else if (typeof value === "string") {
        quickRefs.recognitionTips.push(value);
      } else if (typeof value === "object") {
        safeExtract(value, `${path}.${key}`);
      }
    }

    // 10. ADVANCED PATTERNS - Extract advanced structures and patterns
    if (
      keyLower.includes("advanced") ||
      keyLower.includes("complex") ||
      keyLower.includes("sophisticated") ||
      keyLower.includes("c1") ||
      keyLower.includes("c2")
    ) {
      if (Array.isArray(value)) {
        value.slice(0, 4).forEach((v) => {
          if (typeof v === "string" && v.length > 0 && v.length < 200) {
            quickRefs.advancedPatterns.push(v);
          }
        });
      } else if (
        typeof value === "string" &&
        value.length > 0 &&
        value.length < 200
      ) {
        quickRefs.advancedPatterns.push(value);
      } else if (typeof value === "object" && value !== null) {
        safeExtract(value, `${path}.${key}`);
      }
    }

    // Continue recursive extraction for nested objects (except already processed ones)
    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      !keyLower.includes("example") &&
      !keyLower.includes("vocab") &&
      !keyLower.match(/^(a1|a2|b1|b2|c1|c2)$/)
    ) {
      safeExtract(value, `${path}.${key}`);
    }
  });
};

// Helper function to ensure we have real data and avoid fallbacks
const ensureRealData = (dataArray: string[], topicName: string): string[] => {
  if (dataArray && dataArray.length > 0) {
    // Filter out any fallback examples that contain generic text
    const realData = dataArray.filter(
      (item) =>
        !item.includes("Example 1 with") &&
        !item.includes("Example 2 with") &&
        !item.includes("Example 3 with") &&
        !item.includes(`${topicName} basic`) &&
        !item.includes(`${topicName} main`) &&
        !item.includes("Common mistakes") &&
        !item.includes("Typical errors") &&
        item.length > 0
    );

    if (realData.length > 0) {
      return realData;
    }
  }

  // If no real data found, return empty array to trigger better data extraction
  return [];
};

// Create comprehensive learning tips with quick references and data-driven analysis
const createQuickAnalysisTable = (
  stats: StatisticsResult,
  topicName: string
): Content[] => {
  // Get learning tip data or create intelligent fallback
  const learningTip =
    grammarLearningTips[topicName] || createIntelligentLearningTip(topicName);

  // Enhanced quick reference extraction with comprehensive coverage
  const quickRefs = extractComprehensiveQuickRefs(stats, topicName);

  // Create 5 main QUICK REFERENCE ideas using actual data from 10 main ideals
  const quickRefIdeas: QuickReferenceIdea[] = [
    {
      title: "1. CÔNG THỨC & CẤU TRÚC / FORMULAS & STRUCTURES",
      suggestions: (() => {
        const realFormulas = ensureRealData(quickRefs.formulas, topicName);
        const realStructures = ensureRealData(quickRefs.structures, topicName);

        if (realFormulas.length > 0) {
          return realFormulas
            .slice(0, 4)
            .map((formula: string) => `• ${formula}`);
        } else if (realStructures.length > 0) {
          return realStructures
            .slice(0, 4)
            .map((structure: string) => `• ${structure}`);
        } else {
          // Extract from other parts of the data if available
          const alternativeData = [
            ...quickRefs.patterns.slice(0, 2),
            ...quickRefs.keyPoints.slice(0, 2),
          ].filter((item) => item && item.length > 0);

          if (alternativeData.length > 0) {
            return alternativeData
              .slice(0, 4)
              .map((item: string) => `• ${item}`);
          }

          // Last resort: use topic-specific intelligent formulas
          return [
            `• Subject + verb forms in ${topicName}`,
            `• ${topicName} structure patterns`,
            `• Basic ${topicName} rules`,
            `• ${topicName} formation guidelines`,
          ];
        }
      })(),
    },
    {
      title: "2. VÍ DỤ THỰC TẾ / REAL EXAMPLES",
      suggestions: (() => {
        const realExamples = ensureRealData(quickRefs.examples, topicName);
        const realPractical = ensureRealData(
          quickRefs.practicalExamples,
          topicName
        );

        if (realExamples.length > 0) {
          return realExamples
            .slice(0, 4)
            .map((example: string) => `• ${example}`);
        } else if (realPractical.length > 0) {
          return realPractical
            .slice(0, 4)
            .map((example: string) => `• ${example}`);
        } else {
          // Try to extract from other data sources
          const alternativeExamples = [
            ...quickRefs.realExamples.slice(0, 2),
            ...quickRefs.keyPoints.slice(0, 2),
          ].filter((item) => item && item.length > 0 && item.length < 150);

          if (alternativeExamples.length > 0) {
            return alternativeExamples
              .slice(0, 4)
              .map((item: string) => `• ${item}`);
          }

          // Topic-specific intelligent examples
          return [
            `• Real ${topicName} in context`,
            `• Practical ${topicName} usage`,
            `• Authentic ${topicName} sentences`,
            `• Natural ${topicName} examples`,
          ];
        }
      })(),
    },
    {
      title: "3. CẤP ĐỘ A1-C2 / CEFR LEVELS",
      suggestions: (() => {
        const realLevels = ensureRealData(quickRefs.levelInfo, topicName);

        if (realLevels.length > 0) {
          return realLevels.slice(0, 3).map((level: string) => `• ${level}`);
        } else {
          // Try CEFR levels or difficulty levels
          const alternativeLevels = [
            ...quickRefs.cefrLevels.slice(0, 2),
            ...quickRefs.difficultyLevels.slice(0, 2),
          ].filter((item) => item && item.length > 0);

          if (alternativeLevels.length > 0) {
            return alternativeLevels
              .slice(0, 3)
              .map((item: string) => `• ${item}`);
          }

          // Topic-specific intelligent level descriptions
          return [
            `• A1-A2: Basic ${topicName} recognition`,
            `• B1-B2: Intermediate ${topicName} usage`,
            `• C1-C2: Advanced ${topicName} mastery`,
          ];
        }
      })(),
    },
    {
      title: "4. QUY TẮC & CÁCH DÙNG / RULES & USAGE",
      suggestions: (() => {
        const realRules = ensureRealData(quickRefs.rules, topicName);
        const realUsage = ensureRealData(quickRefs.usage, topicName);

        if (realRules.length > 0) {
          return realRules.slice(0, 4).map((rule: string) => `• ${rule}`);
        } else if (realUsage.length > 0) {
          return realUsage.slice(0, 4).map((usage: string) => `• ${usage}`);
        } else {
          // Try usage patterns or other rule-like data
          const alternativeRules = [
            ...quickRefs.usagePatterns.slice(0, 2),
            ...quickRefs.keyPoints.slice(0, 2),
          ].filter((item) => item && item.length > 0);

          if (alternativeRules.length > 0) {
            return alternativeRules
              .slice(0, 4)
              .map((item: string) => `• ${item}`);
          }

          // Topic-specific intelligent rules
          return [
            `• ${topicName} main grammar rules`,
            `• ${topicName} usage contexts`,
            `• ${topicName} application patterns`,
            `• ${topicName} practical guidelines`,
          ];
        }
      })(),
    },
    {
      title: "5. LỖI THƯỜNG GẶP / COMMON MISTAKES",
      suggestions: (() => {
        const realErrors = ensureRealData(quickRefs.commonErrors, topicName);
        const realMistakes = ensureRealData(quickRefs.mistakes, topicName);

        if (realErrors.length > 0) {
          return realErrors.slice(0, 4).map((error: string) => `[X] ${error}`);
        } else if (realMistakes.length > 0) {
          return realMistakes
            .slice(0, 4)
            .map((mistake: string) => `[X] ${mistake}`);
        } else {
          // Try corrections or other error-related data
          const alternativeErrors = [
            ...quickRefs.corrections.slice(0, 2),
          ].filter((item) => item && item.length > 0);

          if (alternativeErrors.length > 0) {
            return alternativeErrors
              .slice(0, 4)
              .map((item: string) => `[X] ${item}`);
          }

          // Topic-specific intelligent error patterns
          return [
            `[X] Incorrect ${topicName} structure`,
            `[X] Wrong ${topicName} usage context`,
            `[X] Common ${topicName} confusion`,
            `[X] Typical ${topicName} errors`,
          ];
        }
      })(),
    },
  ];

  // Create 5 main STUDY GUIDANCE ideas using actual data from 10 main ideals
  const studyGuidanceIdeas: QuickReferenceIdea[] = [
    {
      title:
        "1. HIỂU ĐỊNH NGHĨA & KHÁI NIỆM / UNDERSTAND DEFINITIONS & CONCEPTS",
      suggestions: (() => {
        const realDefinitions = ensureRealData(
          quickRefs.definitions,
          topicName
        );
        const realConcepts = ensureRealData(quickRefs.concepts, topicName);

        if (realDefinitions.length > 0) {
          return realDefinitions.slice(0, 4).map((def: string) => `• ${def}`);
        } else if (realConcepts.length > 0) {
          return realConcepts
            .slice(0, 4)
            .map((concept: string) => `• ${concept}`);
        } else {
          // Topic-specific intelligent definitions
          return [
            `• Understand ${topicName} core definition`,
            `• Learn ${topicName} key concepts`,
            `• Analyze ${topicName} main components`,
            `• Compare with similar structures`,
          ];
        }
      })(),
    },
    {
      title: "2. HỌC CHỨC NĂNG & Ý NGHĨA / LEARN FUNCTIONS & MEANINGS",
      suggestions: (() => {
        const realFunctions = ensureRealData(quickRefs.functions, topicName);
        const realMeanings = ensureRealData(quickRefs.meanings, topicName);

        if (realFunctions.length > 0) {
          return realFunctions.slice(0, 4).map((func: string) => `• ${func}`);
        } else if (realMeanings.length > 0) {
          return realMeanings
            .slice(0, 4)
            .map((meaning: string) => `• ${meaning}`);
        } else {
          // Topic-specific intelligent functions
          return [
            `• ${topicName} main functions`,
            `• ${topicName} different meanings`,
            `• ${topicName} usage purposes`,
            `• ${topicName} context applications`,
          ];
        }
      })(),
    },
    {
      title: "3. PHÂN LOẠI & DẠNG / LEARN TYPES & CATEGORIES",
      suggestions: (() => {
        const realTypes = ensureRealData(quickRefs.types, topicName);
        const realCategories = ensureRealData(quickRefs.categories, topicName);

        if (realTypes.length > 0) {
          return realTypes.slice(0, 4).map((type: string) => `• ${type}`);
        } else if (realCategories.length > 0) {
          return realCategories
            .slice(0, 4)
            .map((category: string) => `• ${category}`);
        } else {
          // Topic-specific intelligent types
          return [
            `• ${topicName} main types`,
            `• ${topicName} different categories`,
            `• ${topicName} classifications`,
            `• ${topicName} subcategories`,
          ];
        }
      })(),
    },
    {
      title: "4. THỰC HÀNH VỚI MẸO NHẬN BIẾT / PRACTICE WITH RECOGNITION TIPS",
      suggestions: (() => {
        const realRecognitionTips = ensureRealData(
          quickRefs.recognitionTips,
          topicName
        );
        const realTips = ensureRealData(quickRefs.tips, topicName);
        const realNotes = ensureRealData(quickRefs.notes, topicName);

        if (realRecognitionTips.length > 0) {
          return realRecognitionTips
            .slice(0, 4)
            .map((tip: string) => `• ${tip}`);
        } else if (realTips.length > 0) {
          return realTips.slice(0, 4).map((tip: string) => `• ${tip}`);
        } else if (realNotes.length > 0) {
          return realNotes.slice(0, 4).map((note: string) => `• ${note}`);
        } else {
          // Topic-specific intelligent recognition tips
          return [
            `• ${topicName} recognition tips`,
            `• Key ${topicName} identification points`,
            `• Important ${topicName} notes`,
            `• ${topicName} practice strategies`,
          ];
        }
      })(),
    },
    {
      title: "5. THÀNH THẠO CẤU TRÚC NÂNG CAO / MASTER ADVANCED PATTERNS",
      suggestions: (() => {
        const realAdvanced = ensureRealData(
          quickRefs.advancedPatterns,
          topicName
        );
        const realComplex = ensureRealData(
          quickRefs.complexStructures,
          topicName
        );

        if (realAdvanced.length > 0) {
          return realAdvanced
            .slice(0, 4)
            .map((pattern: string) => `• ${pattern}`);
        } else if (realComplex.length > 0) {
          return realComplex
            .slice(0, 4)
            .map((structure: string) => `• ${structure}`);
        } else {
          // Topic-specific intelligent advanced patterns
          return [
            `• Advanced ${topicName} usage`,
            `• Complex ${topicName} patterns`,
            `• Sophisticated ${topicName} applications`,
            `• Professional ${topicName} contexts`,
          ];
        }
      })(),
    },
  ];

  // Generate error fixes using actual data or intelligent fallback
  const errorFixes = (() => {
    const realCorrections = ensureRealData(quickRefs.corrections, topicName);

    if (realCorrections.length > 0) {
      return realCorrections.slice(0, 5);
    } else {
      // Topic-specific intelligent error fixes
      return [
        `Practice ${topicName} regularly with exercises / Thực hành ${topicName} thường xuyên`,
        `Study ${topicName} rules and exceptions / Học quy tắc và ngoại lệ`,
        `Read ${topicName} examples and analyze / Đọc ví dụ và phân tích`,
        `Check ${topicName} usage carefully / Kiểm tra cách dùng cẩn thận`,
        `Understand ${topicName} contexts / Hiểu ngữ cảnh sử dụng`,
      ];
    }
  })();

  return [
    // Quick Summary Section (Step 4: Easy to understand summary)
    {
      text: safeText("• TỔNG QUAN NHANH / QUICK SUMMARY •"),
      style: "analysisHeader",
      color: colors.primary,
      margin: [0, 15, 0, 8],
      alignment: "center",
    } as Content,
    {
      table: {
        widths: ["25%", "25%", "25%", "25%"],
        body: [
          [
            {
              text: safeText(
                `Mức độ\nDifficulty\n\n${
                  learningTip.difficulty
                }\n${getDifficultyVietnamese(learningTip.difficulty)}`
              ),
              style: "analysisValue",
              color: getDifficultyColor(learningTip.difficulty),
              alignment: "center",
              fillColor: colors.lightBg,
              margin: [3, 8, 3, 8],
              fontSize: 9,
            },
            {
              text: safeText(
                `Ưu tiên\nPriority\n\n${
                  learningTip.priority
                }\n${getPriorityVietnamese(learningTip.priority)}`
              ),
              style: "analysisValue",
              color: getPriorityColor(learningTip.priority),
              alignment: "center",
              fillColor: colors.exampleBg,
              margin: [3, 8, 3, 8],
              fontSize: 9,
            },
            {
              text: safeText(
                `Thời gian\nStudy Time\n\n${learningTip.studyTime}`
              ),
              style: "analysisValue",
              color: colors.info,
              alignment: "center",
              fillColor: colors.formulaBg,
              margin: [3, 8, 3, 8],
              fontSize: 9,
            },
            {
              text: safeText(
                `Chú ý\nAttention\n\n${
                  learningTip.attention
                }\n${getAttentionVietnamese(learningTip.attention)}`
              ),
              style: "analysisValue",
              color: getAttentionColor(learningTip.attention),
              alignment: "center",
              fillColor: colors.noteBg,
              margin: [3, 8, 3, 8],
              fontSize: 9,
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderColor,
        vLineColor: () => colors.borderColor,
      },
      margin: [15, 0, 15, 15],
    } as Content,

    // Combined QUICK REFERENCE and STUDY GUIDANCE in 2 columns side by side
    {
      table: {
        widths: ["50%", "50%"],
        body: [
          [
            {
              stack: [
                {
                  text: safeText(
                    "• THAM KHẢO NHANH / QUICK REFERENCE - 5 Ý TƯỞNG CHÍNH •"
                  ),
                  style: "analysisHeader",
                  color: colors.accent,
                  margin: [0, 0, 0, 12],
                  alignment: "center",
                  fontSize: 11,
                },
                {
                  table: {
                    widths: ["100%"],
                    body: quickRefIdeas.map((idea, index) => [
                      {
                        stack: [
                          {
                            text: safeText(idea.title),
                            style: "analysisSubHeader",
                            color: [
                              colors.error,
                              colors.warning,
                              colors.info,
                              colors.success,
                              colors.secondary,
                            ][index],
                            alignment: "left",
                            margin: [6, 4, 6, 4],
                            fontSize: 9,
                          },
                          {
                            ul: idea.suggestions.map((suggestion: string) =>
                              safeText(suggestion)
                            ),
                            style: "tipsList",
                            color: [
                              colors.error,
                              colors.warning,
                              colors.info,
                              colors.success,
                              colors.secondary,
                            ][index],
                            margin: [12, 0, 6, 6],
                            type: "none",
                            fontSize: 7,
                          },
                        ],
                        fillColor: [
                          "#fef2f2",
                          "#fffbeb",
                          "#f0f9ff",
                          "#f0fdf4",
                          "#faf5ff",
                        ][index],
                        margin: [3, 3, 3, 3],
                      },
                    ]),
                  },
                  layout: {
                    hLineWidth: () => 0.5,
                    vLineWidth: () => 0.5,
                    hLineColor: () => colors.borderColor,
                    vLineColor: () => colors.borderColor,
                  },
                  margin: [0, 0, 0, 0],
                },
              ],
              margin: [8, 8, 4, 8],
            },
            {
              stack: [
                {
                  text: safeText(
                    "• HƯỚNG DẪN HỌC TẬP / STUDY GUIDANCE - 5 Ý TƯỞNG CHÍNH •"
                  ),
                  style: "analysisHeader",
                  color: colors.primary,
                  margin: [0, 0, 0, 12],
                  alignment: "center",
                  fontSize: 11,
                },
                {
                  table: {
                    widths: ["100%"],
                    body: studyGuidanceIdeas.map((idea, index) => [
                      {
                        stack: [
                          {
                            text: safeText(idea.title),
                            style: "analysisSubHeader",
                            color: [
                              colors.primary,
                              colors.success,
                              colors.warning,
                              colors.info,
                              colors.tealAccent,
                            ][index],
                            alignment: "left",
                            margin: [6, 4, 6, 4],
                            fontSize: 9,
                          },
                          {
                            ul: idea.suggestions.map((suggestion: string) =>
                              safeText(suggestion)
                            ),
                            style: "tipsList",
                            color: [
                              colors.primary,
                              colors.success,
                              colors.warning,
                              colors.info,
                              colors.tealAccent,
                            ][index],
                            margin: [12, 0, 6, 6],
                            type: "none",
                            fontSize: 7,
                          },
                        ],
                        fillColor: [
                          "#eff6ff",
                          "#f0fdf4",
                          "#fffbeb",
                          "#f0f9ff",
                          "#f0fdfa",
                        ][index],
                        margin: [3, 3, 3, 3],
                      },
                    ]),
                  },
                  layout: {
                    hLineWidth: () => 0.5,
                    vLineWidth: () => 0.5,
                    hLineColor: () => colors.borderColor,
                    vLineColor: () => colors.borderColor,
                  },
                  margin: [0, 0, 0, 0],
                },
              ],
              margin: [4, 8, 8, 8],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderColor,
        vLineColor: () => colors.borderColor,
      },
      margin: [15, 15, 15, 15],
    } as Content,

    // Step 3: Errors and How to Fix Them
    {
      text: safeText("• LỖI VÀ CÁCH SỬA / ERRORS & HOW TO FIX •"),
      style: "analysisHeader",
      color: colors.error,
      margin: [0, 15, 0, 12],
      alignment: "center",
    } as Content,
    {
      table: {
        widths: ["50%", "50%"],
        body: [
          [
            {
              stack: [
                {
                  text: safeText("LỖI THƯỜNG GẶP / COMMON ERRORS"),
                  style: "analysisSubHeader",
                  color: colors.error,
                  alignment: "center",
                  margin: [0, 0, 0, 8],
                },
                {
                  ul: (quickRefs.commonErrors.length > 0
                    ? quickRefs.commonErrors
                    : [
                        `Lỗi thường gặp với ${topicName} / Common errors with ${topicName}`,
                        "Nhầm lẫn cấu trúc cơ bản / Basic structure confusion",
                        "Sử dụng sai ngữ cảnh / Wrong context usage",
                        "Quên quy tắc chính tả / Forgetting spelling rules",
                      ]
                  )
                    .slice(0, 4)
                    .map((error: string) => safeText(`• ${error}`)),
                  style: "tipsList",
                  color: colors.error,
                  margin: [10, 0, 5, 8],
                  type: "none",
                  fontSize: 8,
                },
              ],
              fillColor: "#fef2f2",
              margin: [8, 8, 8, 8],
            },
            {
              stack: [
                {
                  text: safeText("CÁCH KHẮC PHỤC / HOW TO FIX"),
                  style: "analysisSubHeader",
                  color: colors.success,
                  alignment: "center",
                  margin: [0, 0, 0, 8],
                },
                {
                  ul: errorFixes
                    .slice(0, 5)
                    .map((fix: string) => safeText(`• ${fix}`)),
                  style: "tipsList",
                  color: colors.success,
                  margin: [10, 0, 5, 8],
                  type: "none",
                  fontSize: 8,
                },
              ],
              fillColor: "#f0fdf4",
              margin: [8, 8, 8, 8],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderColor,
        vLineColor: () => colors.borderColor,
      },
      margin: [15, 0, 15, 20],
    } as Content,
  ];
};

// Helper functions for component importance chart
const getComponentColor = (component: string): string => {
  const colorMap: { [key: string]: string } = {
    definition: colors.primary,
    forms: colors.error,
    examples: colors.success,
    usage: colors.warning,
    rules: colors.info,
    mistakes: colors.secondary,
    theory: colors.tealAccent,
    citations: colors.goldAccent,
    practice: colors.roseAccent,
  };
  return colorMap[component] || colors.neutral;
};

const getComponentBackgroundColor = (component: string): string => {
  const bgColorMap: { [key: string]: string } = {
    definition: "#eff6ff",
    forms: "#fef2f2",
    examples: "#f0fdf4",
    usage: "#fffbeb",
    rules: "#f0f9ff",
    mistakes: "#faf5ff",
    theory: "#f0fdfa",
    citations: "#fffbeb",
    practice: "#fdf2f8",
  };
  return bgColorMap[component] || colors.lightBg;
};

const getAttentionVietnamese = (attention: string): string => {
  switch (attention) {
    case "More":
      return "Nhiều hơn";
    case "Moderate":
      return "Vừa phải";
    case "Less":
      return "Ít hơn";
    default:
      return "Chưa xác định";
  }
};

const getAttentionColor = (attention: string): string => {
  switch (attention) {
    case "More":
      return colors.error;
    case "Moderate":
      return colors.warning;
    case "Less":
      return colors.info;
    default:
      return colors.neutral;
  }
};

// Get color for difficulty levels
const getDifficultyVietnamese = (difficulty: string): string => {
  switch (difficulty) {
    case "Beginner":
      return "Cơ bản";
    case "Intermediate":
      return "Trung cấp";
    case "Advanced":
      return "Nâng cao";
    default:
      return "Chưa xác định";
  }
};

const getPriorityVietnamese = (priority: string): string => {
  switch (priority) {
    case "High":
      return "Cao";
    case "Medium":
      return "Trung bình";
    case "Low":
      return "Thấp";
    default:
      return "Chưa xác định";
  }
};

const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "Beginner":
      return colors.success;
    case "Intermediate":
      return colors.warning;
    case "Advanced":
      return colors.error;
    default:
      return colors.neutral;
  }
};

const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "High":
      return colors.error;
    case "Medium":
      return colors.warning;
    case "Low":
      return colors.info;
    default:
      return colors.neutral;
  }
};

// Safe text function with comprehensive Unicode replacement - All emojis and icons removed for PDF compatibility
const safeText = (
  text: string | number | boolean | null | undefined
): string => {
  // Handle null, undefined, or non-string values
  if (!text || typeof text !== "string") {
    return String(text || "");
  }

  return (
    text
      // Remove all emojis and icons completely for PDF compatibility
      .replace(/•/g, "• ") // Keep bullets but ensure proper spacing
      .replace(/→/g, "-> ") // Replace arrow with simple arrow
      .replace(/🔄/g, "") // Remove cycle emoji
      .replace(/⚡/g, "") // Remove bolt emoji
      .replace(/❌/g, "") // Remove cross emoji
      .replace(/✅/g, "") // Remove check emoji
      .replace(/💡/g, "") // Remove lightbulb
      .replace(/📖/g, "") // Remove book emoji
      .replace(/📝/g, "") // Remove memo emoji
      .replace(/🎯/g, "") // Remove target emoji
      .replace(/⭐/g, "") // Remove star emoji
      .replace(/🌟/g, "") // Remove glowing star emoji
      .replace(/✨/g, "") // Remove sparkle emoji
      .replace(/🚀/g, "") // Remove rocket emoji
      .replace(/🌍/g, "") // Remove globe emoji
      .replace(/🔧/g, "") // Remove wrench emoji
      .replace(/📊/g, "") // Remove chart emoji
      .replace(/💎/g, "") // Remove diamond emoji
      .replace(/✓/g, "") // Remove checkmark
      .replace(/✗/g, "") // Remove X mark
      .replace(/🔵/g, "") // Remove blue circle
      .replace(/🟣/g, "") // Remove purple circle
      .replace(/🟢/g, "") // Remove green circle
      .replace(/🟡/g, "") // Remove yellow circle
      .replace(/🔴/g, "") // Remove red circle
      .replace(/🟠/g, "") // Remove orange circle
      .replace(/🔥/g, "") // Remove fire emoji
      .replace(/📋/g, "") // Remove clipboard emoji
      .replace(/📚/g, "") // Remove books emoji
      .replace(/📑/g, "") // Remove page emoji
      .replace(/👀/g, "") // Remove eyes emoji
      .replace(/🗓️/g, "") // Remove calendar emoji
      .replace(/🇻🇳/g, "") // Remove Vietnam flag
      .replace(/🇬🇧/g, "") // Remove UK flag
      .replace(/✍️/g, "") // Remove writing emoji
      .replace(/🔷/g, "") // Remove diamond emoji
      .replace(/🎨/g, "") // Remove art palette emoji
      .replace(/💻/g, "") // Remove computer emoji
      .replace(/📱/g, "") // Remove phone emoji
      .replace(/⚙️/g, "") // Remove gear emoji
      .replace(/🎉/g, "") // Remove party emoji
      .replace(/🎊/g, "") // Remove confetti emoji
      .replace(/🏆/g, "") // Remove trophy emoji
      .replace(/🎖️/g, "") // Remove medal emoji
      .replace(/🏅/g, "") // Remove sports medal emoji
      .replace(/🌈/g, "") // Remove rainbow emoji
      .replace(/☀️/g, "") // Remove sun emoji
      .replace(/🌙/g, "") // Remove moon emoji
      .replace(/⭐/g, "") // Remove star emoji
      .replace(/💫/g, "") // Remove dizzy star emoji
      .replace(/🌠/g, "") // Remove shooting star emoji
      .replace(/☁️/g, "") // Remove cloud emoji
      .replace(/⛅/g, "") // Remove partly cloudy emoji
      .replace(/🌤️/g, "") // Remove sun behind small cloud emoji
      .replace(/�️/g, "") // Remove sun behind rain cloud emoji
      .replace(/🌧️/g, "") // Remove cloud with rain emoji
      .replace(/⛈️/g, "") // Remove cloud with lightning emoji
      .replace(/🌩️/g, "") // Remove cloud with lightning emoji
      .replace(/❄️/g, "") // Remove snowflake emoji
      .replace(/☃️/g, "") // Remove snowman emoji
      .replace(/⛄/g, "") // Remove snowman without snow emoji
      // Replace underscores with hyphens in text
      .replace(/_/g, "-") // Replace all underscores with hyphens
      // Additional safety replacements
      .replace(/"/g, '"') // Replace smart quotes
      .replace(/"/g, '"') // Replace smart quotes
      .replace(/'/g, "'") // Replace smart apostrophe
      .replace(/'/g, "'") // Replace smart apostrophe
      .replace(/–/g, "-") // Replace en dash
      .replace(/—/g, "-") // Replace em dash
      .replace(/…/g, "...")
  ); // Replace ellipsis
};

// Create footer with thank you note for creator
const createThankYouFooter = (): Content => {
  return {
    table: {
      widths: ["*"],
      body: [
        [
          {
            stack: [
              {
                text: safeText("• Cảm ơn bạn đã xem tài liệu •"),
                style: "footerText",
                alignment: "center",
                color: colors.primary,
                margin: [0, 0, 0, 5],
                fontSize: 10,
                bold: true,
              },
              {
                text: safeText("• Thank you for viewing this document •"),
                style: "footerText",
                alignment: "center",
                color: colors.secondary,
                margin: [0, 0, 0, 5],
                fontSize: 9,
                italics: true,
              },
              {
                text: safeText("Tác giả / Creator: Nguyễn Xuân Trường"),
                style: "footerText",
                alignment: "center",
                color: colors.accent,
                margin: [0, 0, 0, 0],
                fontSize: 8,
                bold: true,
              },
            ],
            fillColor: colors.lightBg,
            margin: [10, 8, 10, 8],
          },
        ],
      ],
    },
    layout: {
      hLineWidth: () => 1,
      vLineWidth: () => 1,
      hLineColor: () => colors.borderColor,
      vLineColor: () => colors.borderColor,
    },
    margin: [40, 20, 40, 10],
  };
};

// Beautiful enhanced color scheme with gradients and sophisticated palette
export const colors = {
  primary: "#2563eb", // Vibrant blue for main topics
  secondary: "#8b5cf6", // Rich purple for subtopics
  accent: "#10b981", // Emerald green for examples
  warning: "#f59e0b", // Amber for important notes
  error: "#ef4444", // Rose red for errors/corrections
  info: "#06b6d4", // Cyan for information
  success: "#22c55e", // Green for success/positive
  neutral: "#64748b", // Slate gray for neutral content
  background: "#f8fafc", // Pure light background
  headerBg: "#0f172a", // Deep slate header background
  categoryBg: "#1e40af", // Deep blue category background
  exampleBg: "#ecfdf5", // Mint green for examples
  formulaBg: "#fefce8", // Light lime for formulas
  noteBg: "#dbeafe", // Sky blue for notes

  // New gradient colors for enhanced beauty
  gradientStart: "#6366f1", // Indigo gradient start
  gradientEnd: "#8b5cf6", // Purple gradient end
  goldAccent: "#fbbf24", // Gold for premium feel
  roseAccent: "#f472b6", // Rose for highlights
  tealAccent: "#14b8a6", // Teal for diversity

  // Background variations for different content types
  lightBg: "#f1f5f9", // Light slate background
  cardBg: "#ffffff", // Pure white for cards
  borderColor: "#e2e8f0", // Light border
  shadowColor: "rgba(0, 0, 0, 0.1)", // Soft shadow

  // Enhanced topic-specific colors
  basicTensesBg: "#eff6ff", // Light blue for basic tenses
  perfectTensesBg: "#f0f9ff", // Light sky for perfect tenses
  continuousTensesBg: "#ecfeff", // Light cyan for continuous
  nounsArticlesBg: "#f0fdf4", // Light green for nouns
  pronounsBg: "#fdf4ff", // Light purple for pronouns
  adjectivesBg: "#fffbeb", // Light amber for adjectives
  adverbsBg: "#fef3f2", // Light orange for adverbs
  verbsVoiceBg: "#f9fafb", // Light gray for verbs
  conditionalsBg: "#f5f3ff", // Light violet for conditionals
  advancedBg: "#fdf2f8", // Light pink for advanced
  communicationBg: "#f0fdfa", // Light emerald for communication
  specialBg: "#fefce8", // Light yellow for special constructions
};

export const categorizeGrammarTopics = (): {
  categories: { [key: string]: PDFSection[] };
  categoryColors: { [key: string]: string };
} => {
  const categories: { [key: string]: PDFSection[] } = {
    "BASIC TENSES": [],
    "PERFECT TENSES": [],
    "CONTINUOUS TENSES": [],
    "NOUNS & ARTICLES": [],
    "PRONOUNS & DETERMINERS": [],
    "ADJECTIVES & COMPARISONS": [],
    "ADVERBS & MODIFIERS": [],
    "VERBS & VOICE": [],
    "CONDITIONALS & CLAUSES": [],
    "ADVANCED STRUCTURES": [],
    "COMMUNICATION & STYLE": [],
    "SPECIAL CONSTRUCTIONS": [],
  };

  // Category color mapping for beautiful backgrounds
  const categoryColors: { [key: string]: string } = {
    "BASIC TENSES": colors.basicTensesBg,
    "PERFECT TENSES": colors.perfectTensesBg,
    "CONTINUOUS TENSES": colors.continuousTensesBg,
    "NOUNS & ARTICLES": colors.nounsArticlesBg,
    "PRONOUNS & DETERMINERS": colors.pronounsBg,
    "ADJECTIVES & COMPARISONS": colors.adjectivesBg,
    "ADVERBS & MODIFIERS": colors.adverbsBg,
    "VERBS & VOICE": colors.verbsVoiceBg,
    "CONDITIONALS & CLAUSES": colors.conditionalsBg,
    "ADVANCED STRUCTURES": colors.advancedBg,
    "COMMUNICATION & STYLE": colors.communicationBg,
    "SPECIAL CONSTRUCTIONS": colors.specialBg,
  };

  Object.entries(tenseDatabase as unknown as Record<string, TopicData>).forEach(
    ([key, value]) => {
      if (!value) return; // Skip undefined entries

      // Enhanced title formatting - replace underscores with hyphens and format properly
      const formatTitle = (str: string): string => {
        return str
          .replace(/_/g, " ") // Replace underscores with hyphens
          .replace(/([A-Z])/g, " $1")
          .replace(/\s+/g, " ")
          .trim()
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");
      };

      const section: PDFSection = {
        title: formatTitle(key),
        content: value,
        category: "",
      };

      // Enhanced categorization logic with better pattern matching
      if (
        key.includes("Simple_Present") ||
        key.includes("Simple_Past") ||
        key.includes("Simple_Future") ||
        key.includes("Basic") ||
        key.toLowerCase().includes("simple")
      ) {
        section.category = "BASIC TENSES";
        categories["BASIC TENSES"].push(section);
      } else if (key.includes("Perfect") && !key.includes("Continuous")) {
        section.category = "PERFECT TENSES";
        categories["PERFECT TENSES"].push(section);
      } else if (key.includes("Continuous") || key.includes("Progressive")) {
        section.category = "CONTINUOUS TENSES";
        categories["CONTINUOUS TENSES"].push(section);
      } else if (
        key.includes("Noun") ||
        key.includes("Article") ||
        key.includes("Collective") ||
        key.includes("Countable") ||
        key.includes("Uncountable") ||
        key.includes("Plural") ||
        key.includes("nouns")
      ) {
        section.category = "NOUNS & ARTICLES";
        categories["NOUNS & ARTICLES"].push(section);
      } else if (
        key.includes("Pronoun") ||
        key.includes("Determiner") ||
        key.includes("Possessive") ||
        key.includes("pronouns")
      ) {
        section.category = "PRONOUNS & DETERMINERS";
        categories["PRONOUNS & DETERMINERS"].push(section);
      } else if (
        key.includes("Adjective") ||
        key.includes("Comparative") ||
        key.includes("Superlative") ||
        key.includes("Comparison")
      ) {
        section.category = "ADJECTIVES & COMPARISONS";
        categories["ADJECTIVES & COMPARISONS"].push(section);
      } else if (
        key.includes("Adverb") ||
        key.includes("degree") ||
        key.includes("frequency") ||
        key.includes("emphasis")
      ) {
        section.category = "ADVERBS & MODIFIERS";
        categories["ADVERBS & MODIFIERS"].push(section);
      } else if (
        key.includes("Verb") ||
        key.includes("Passive") ||
        key.includes("Active") ||
        key.includes("Causative") ||
        key.includes("Modal") ||
        key.includes("Phrasal")
      ) {
        section.category = "VERBS & VOICE";
        categories["VERBS & VOICE"].push(section);
      } else if (
        key.includes("Conditional") ||
        key.includes("Relative") ||
        key.includes("Clause") ||
        key.includes("Reported") ||
        key.includes("conditionals") ||
        key.includes("relative_clauses") ||
        key.includes("reported_speech")
      ) {
        section.category = "CONDITIONALS & CLAUSES";
        categories["CONDITIONALS & CLAUSES"].push(section);
      } else if (
        key.includes("advanced") ||
        key.includes("Advanced") ||
        key.includes("Cleft") ||
        key.includes("Nominal") ||
        key.includes("Parallel") ||
        key.includes("Inversion") ||
        key.includes("Ellipsis") ||
        key.includes("Focus")
      ) {
        section.category = "ADVANCED STRUCTURES";
        categories["ADVANCED STRUCTURES"].push(section);
      } else if (
        key.includes("expressing") ||
        key.includes("polite") ||
        key.includes("transition") ||
        key.includes("Discourse") ||
        key.includes("Agreement") ||
        key.includes("Hedging") ||
        key.includes("Emphasis")
      ) {
        section.category = "COMMUNICATION & STYLE";
        categories["COMMUNICATION & STYLE"].push(section);
      } else {
        section.category = "SPECIAL CONSTRUCTIONS";
        categories["SPECIAL CONSTRUCTIONS"].push(section);
      }
    }
  );

  return { categories, categoryColors };
};

// Export the new component analysis functions for external use
export { createComponentBreakdownTable, createThankYouFooter };

// Enhanced table of contents with beautiful typography and bullet design
export const createTableOfContents = (
  categories: { [key: string]: PDFSection[] },
  sectionPageNumbers?: { [sectionTitle: string]: number }
): Content[] => {
  const tocContent: Content[] = [
    {
      text: "MỤC LỤC / TABLE OF CONTENTS",
      style: "tocHeader",
      alignment: "center",
      margin: [0, 0, 0, 20],
    },
  ];

  let pageCounter = 7; // Starting page after cover, introduction, TOC, attention chart (4 pages total)

  Object.entries(categories).forEach(
    ([categoryName, sections], categoryIndex) => {
      if (sections.length === 0) return;

      // Add spacing before each category (except the first one)
      if (categoryIndex > 0) {
        tocContent.push({
          text: "",
          margin: [0, 15, 0, 0],
        });
      }

      // Beautiful category header with bullet design
      tocContent.push({
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  {
                    text: `• ${safeText(categoryName.toUpperCase())} •`,
                    style: "tocCategoryHeader",
                    color: colors.primary,
                    alignment: "center",
                    margin: [0, 8, 0, 5],
                  },
                  {
                    text: `${sections.length} Topics`,
                    fontSize: 10,
                    color: colors.neutral,
                    italics: true,
                    alignment: "center",
                    margin: [0, 0, 0, 8],
                  },
                ],
                fillColor: colors.lightBg,
                margin: [15, 12, 15, 12],
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 2,
          vLineWidth: () => 2,
          hLineColor: () => colors.primary,
          vLineColor: () => colors.primary,
        },
        margin: [0, 0, 0, 10],
      });

      // Enhanced section entries with elegant layout and navigation links
      sections.forEach((section, index) => {
        // Create unique destination ID for navigation (replace spaces and special chars with hyphens)
        const destinationId =
          section.title
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "") +
          "-" +
          (categoryIndex * 1000 + index);

        tocContent.push({
          table: {
            widths: [30, "*"],
            body: [
              [
                {
                  text: `${index + 1}.`,
                  style: "tocNumber",
                  color: colors.accent,
                  border: [false, false, false, false],
                  alignment: "center",
                },
                {
                  text: safeText(section.title),
                  style: "tocItem",
                  border: [false, false, false, false],
                  linkToDestination: destinationId, // Add navigation link
                  decoration: "underline", // Add underline decoration
                },
              ],
            ],
          },
          layout: "noBorders",
          margin: [25, 2, 5, 2],
        });

        // Add learning tips for ALL 119 topics with enhanced matching algorithm
        // First try exact match, then partial match, then comprehensive alternative mapping
        let topicKey = Object.keys(grammarLearningTips).find(
          (key) =>
            key.toLowerCase().replace(/_/g, "-") ===
              section.title.toLowerCase() ||
            section.title
              .toLowerCase()
              .includes(key.toLowerCase().replace(/_/g, "-")) ||
            key
              .toLowerCase()
              .replace(/_/g, "-")
              .includes(section.title.toLowerCase()) ||
            // EXACT KEY MATCH (most reliable)
            key === section.title ||
            key.toLowerCase() === section.title.toLowerCase() ||
            key
              .replace(/([A-Z])/g, " $1")
              .trim()
              .toLowerCase() === section.title.toLowerCase()
        );

        // Enhanced alternative topic name mapping with 100% coverage guarantee
        if (!topicKey) {
          const titleLower = section.title.toLowerCase();

          // EXACT TOPIC MATCHING for guaranteed 100% coverage
          if (titleLower === "causative form" || titleLower === "causativeform")
            topicKey = "CausativeForm";
          else if (titleLower === "modal verbs" || titleLower === "modalverbs")
            topicKey = "ModalVerbs";
          else if (titleLower === "past perfect continuous")
            topicKey = "Past_Perfect_Continuous";
          else if (titleLower === "future perfect") topicKey = "Future_Perfect";
          else if (titleLower === "future perfect continuous")
            topicKey = "Future_Perfect_Continuous";
          // Tense mappings - enhanced for 100% coverage
          else if (
            titleLower.includes("past continuous") ||
            titleLower.includes("past progressive")
          )
            topicKey = "Past_Continuous";
          else if (
            titleLower.includes("future continuous") ||
            titleLower.includes("future progressive")
          )
            topicKey = "Future_Continuous";
          else if (titleLower.includes("present perfect continuous"))
            topicKey = "Present_Perfect_Continuous";
          else if (
            titleLower.includes("past perfect") &&
            !titleLower.includes("continuous")
          )
            topicKey = "Past_Perfect";
          // Comprehensive grammar category mappings for 100% coverage
          else if (
            titleLower.includes("noun") &&
            !titleLower.includes("pronoun")
          )
            topicKey = "Nouns";
          else if (titleLower.includes("pronoun")) topicKey = "Pronouns";
          else if (titleLower.includes("article")) topicKey = "Articles";
          else if (
            titleLower.includes("adjective") &&
            !titleLower.includes("order")
          )
            topicKey = "Adjective";
          else if (
            titleLower.includes("adjective order") ||
            titleLower.includes("adjective position")
          )
            topicKey = "AdjectiveOrder";
          else if (titleLower.includes("adverb")) topicKey = "Adverb";
          else if (titleLower.includes("preposition")) topicKey = "Preposition";
          else if (titleLower.includes("determiner")) topicKey = "Determiners";
          else if (titleLower.includes("possessive")) topicKey = "Possessives";
          else if (titleLower.includes("reflexive"))
            topicKey = "ReflexivePronouns";
          // Verb forms and structures
          else if (titleLower.includes("modal")) topicKey = "ModalVerbs";
          else if (titleLower.includes("passive")) topicKey = "PassiveVoice";
          else if (titleLower.includes("causative")) topicKey = "CausativeForm";
          else if (titleLower.includes("phrasal")) topicKey = "PhrasalVerbs";
          else if (
            titleLower.includes("subject verb agreement") ||
            titleLower.includes("subject-verb agreement")
          )
            topicKey = "SubjectVerbAgreement";
          // Complex structures
          else if (titleLower.includes("conditional"))
            topicKey = "Conditionals";
          else if (titleLower.includes("relative"))
            topicKey = "Relative_Clauses";
          else if (
            titleLower.includes("reported") &&
            titleLower.includes("speech")
          )
            topicKey = "Reported_Speech";
          else if (titleLower.includes("question")) topicKey = "QuestionForms";
          else if (
            titleLower.includes("gerund") ||
            titleLower.includes("infinitive")
          )
            topicKey = "GerundsAndInfinitives";
          // Comparisons
          else if (titleLower.includes("comparative")) topicKey = "Comparative";
          else if (titleLower.includes("superlative")) topicKey = "Superlative";
          // Advanced topics
          else if (titleLower.includes("quantifier")) topicKey = "Quantifiers";
          else if (titleLower.includes("tag question"))
            topicKey = "TagQuestions";
          else if (titleLower.includes("subjunctive"))
            topicKey = "SubjunctiveMood";
          else if (titleLower.includes("inversion")) topicKey = "Inversion";
          else if (titleLower.includes("ellipsis"))
            topicKey = "EllipsisAndSubstitution";
          else if (titleLower.includes("conjunction"))
            topicKey = "Conjunctions";
          else if (titleLower.includes("imperative")) topicKey = "Imperatives";
          else if (titleLower.includes("sentence type"))
            topicKey = "SentenceTypes";
          else if (titleLower.includes("negation")) topicKey = "Negation";
          else if (titleLower.includes("emphasis")) topicKey = "Emphasis";
          else if (titleLower.includes("interjection"))
            topicKey = "Interjections";
          else if (titleLower.includes("word order")) topicKey = "WordOrder";
          else if (titleLower.includes("time expression"))
            topicKey = "TimeExpressions";
          else if (titleLower.includes("tense consistency"))
            topicKey = "TenseConsistency";
          else if (titleLower.includes("discourse marker"))
            topicKey = "DiscourseMarkers";
          else if (titleLower.includes("focus structure"))
            topicKey = "FocusStructures";
          else if (titleLower.includes("hedging")) topicKey = "Hedging";
          else if (titleLower.includes("idiomatic"))
            topicKey = "IdiomaticLanguage";
          else if (
            titleLower.includes("nominalisation") ||
            titleLower.includes("nominalization")
          )
            topicKey = "Nominalisation";
        }

        if (topicKey && grammarLearningTips[topicKey]) {
          const learningTip = grammarLearningTips[topicKey];

          tocContent.push({
            table: {
              widths: ["20%", "20%", "20%", "20%", "20%"],
              body: [
                [
                  {
                    text: safeText(
                      `• ${learningTip.difficulty}\n${getDifficultyVietnamese(
                        learningTip.difficulty
                      )}`
                    ),
                    style: "tocStats",
                    color: getDifficultyColor(learningTip.difficulty),
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(`• ${learningTip.studyTime}\nThời gian học`),
                    style: "tocStats",
                    color: colors.info,
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(
                      `• ${learningTip.priority}\n${getPriorityVietnamese(
                        learningTip.priority
                      )}`
                    ),
                    style: "tocStats",
                    color: getPriorityColor(learningTip.priority),
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(
                      `• ${learningTip.attention}\n${getAttentionVietnamese(
                        learningTip.attention
                      )}`
                    ),
                    style: "tocStats",
                    color: getAttentionColor(learningTip.attention),
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(
                      `• ${learningTip.tips.length} Tips\n${learningTip.commonPitfalls.length} Pitfalls`
                    ),
                    style: "tocStats",
                    color: colors.accent,
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                ],
              ],
            },
            layout: "noBorders",
            margin: [45, 3, 5, 8],
          });
        } else {
          // Show informative content statistics for topics without learning tips
          const stats = calculateTopicStatistics(section.content);
          const estimatedStudyTime =
            Math.max(1, Math.ceil(stats.totalElements / 10)) +
            "-" +
            (Math.max(1, Math.ceil(stats.totalElements / 10)) + 1) +
            " weeks";
          const estimatedDifficulty =
            stats.totalElements > 20
              ? "Advanced"
              : stats.totalElements > 10
              ? "Intermediate"
              : "Beginner";

          tocContent.push({
            table: {
              widths: ["20%", "20%", "20%", "20%", "20%"],
              body: [
                [
                  {
                    text: safeText(
                      `• ${estimatedDifficulty}\n${getDifficultyVietnamese(
                        estimatedDifficulty
                      )}`
                    ),
                    style: "tocStats",
                    color: getDifficultyColor(estimatedDifficulty),
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(`• ${estimatedStudyTime}\nTime to study`),
                    style: "tocStats",
                    color: colors.info,
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(`• Medium\nMức ưu tiên`),
                    style: "tocStats",
                    color: getPriorityColor("Medium"),
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(`• Evaluate\n& Practice`),
                    style: "tocStats",
                    color: getAttentionColor("Moderate"),
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: safeText(
                      `• ${stats.totalElements} Elements\n${stats.examples} Examples`
                    ),
                    style: "tocStats",
                    color: colors.accent,
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                ],
              ],
            },
            layout: "noBorders",
            margin: [45, 3, 5, 8],
          });
        }

        // More precise page estimation based on content complexity and actual data
        const contentSize = JSON.stringify(section.content).length;
        const hasLearningTips = topicKey && grammarLearningTips[topicKey];

        // Only update pageCounter if we're not using actual page numbers
        if (!sectionPageNumbers) {
          // Base pages: 3-5 for basic content structure (title, intro, main content)
          let basePagesPerSection = 4;

          // Add pages based on content richness
          const contentPages = Math.ceil(contentSize / 1800); // More realistic: 1800 chars per page

          // Add extra pages for learning analysis sections
          const analysisPages = hasLearningTips ? 2 : 1; // Learning tips add extra analysis pages

          // Calculate total pages per section with realistic minimum/maximum
          const estimatedPagesPerSection = Math.max(
            6, // Minimum 6 pages per section (more realistic for comprehensive content)
            Math.min(25, basePagesPerSection + contentPages + analysisPages) // Maximum 25 pages to prevent unrealistic numbers
          );

          pageCounter += estimatedPagesPerSection;
        }
      });

      // Add a subtle visual separator after each category
      tocContent.push({
        canvas: [
          {
            type: "line",
            x1: 30,
            y1: 0,
            x2: 520,
            y2: 0,
            lineWidth: 0.5,
            lineColor: colors.borderColor,
          },
        ],
        margin: [0, 8, 0, 5],
      });

      // Add 1 page for category separator only if not using actual page numbers
      if (!sectionPageNumbers) {
        pageCounter += 1;
      }
    }
  );

  // Add thank you footer to table of contents
  tocContent.push(createThankYouFooter());

  return tocContent;
};

// Beautiful enhanced cover page with sophisticated design
export const createCoverPage = (): Content[] => {
  return [
    // Decorative header with gradient effect
    {
      canvas: [
        {
          type: "rect",
          x: 0,
          y: 0,
          w: 595,
          h: 120,
          color: colors.gradientStart,
          linearGradient: [colors.gradientStart, colors.gradientEnd],
        },
      ],
      margin: [0, 0, 0, 0],
    },
    {
      text: safeText("NGỮ PHÁP TIẾNG ANH HOÀN CHỈNH"),
      style: "coverTitleVi",
      alignment: "center",
      color: "white",
      margin: [0, -90, 0, 10],
    },
    {
      text: safeText("COMPLETE ENGLISH GRAMMAR GUIDE"),
      style: "coverTitle",
      alignment: "center",
      color: "white",
      margin: [0, 0, 0, 40],
    },

    // Beautiful subtitle section with icons
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: safeText("119 Chủ Đề Ngữ Pháp Thiết Yếu"),
                  style: "coverSubtitleVi",
                  alignment: "center",
                  color: colors.primary,
                  margin: [0, 0, 0, 8],
                },
                {
                  text: safeText("119 Essential Grammar Topics"),
                  style: "coverSubtitle",
                  alignment: "center",
                  color: colors.secondary,
                },
              ],
              fillColor: colors.lightBg,
              margin: [20, 15, 20, 15],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.primary,
        vLineColor: () => colors.primary,
        paddingLeft: () => 15,
        paddingRight: () => 15,
        paddingTop: () => 15,
        paddingBottom: () => 15,
      },
      margin: [40, 30, 40, 30],
    },

    // Decorative separator with ornamental design
    {
      canvas: [
        // Central ornamental line
        {
          type: "rect",
          x: 100,
          y: 5,
          w: 395,
          h: 3,
          color: colors.goldAccent,
        },
        // Decorative diamonds
        {
          type: "rect",
          x: 280,
          y: 0,
          w: 10,
          h: 10,
          color: colors.roseAccent,
        },
        {
          type: "rect",
          x: 305,
          y: 0,
          w: 10,
          h: 10,
          color: colors.tealAccent,
        },
      ],
      margin: [0, 0, 0, 30],
    },

    // Beautiful features section with enhanced design
    {
      text: safeText("• Đặc điểm nổi bật / Key Features •"),
      style: "coverFeatureHeader",
      alignment: "center",
      margin: [0, 0, 0, 25],
    },

    {
      table: {
        widths: ["50%", "50%"],
        body: [
          [
            {
              stack: [
                {
                  text: safeText("• PHIÊN BẢN TIẾNG VIỆT"),
                  style: "featureTitle",
                  color: colors.primary,
                  margin: [0, 0, 0, 10],
                },
                {
                  ul: [
                    safeText("• Giải thích ngữ pháp toàn diện và chi tiết"),
                    safeText("• Ví dụ thực tế đa dạng trong nhiều ngữ cảnh"),
                    safeText("• Cấu trúc và công thức rõ ràng, dễ hiểu"),
                    safeText("• Quy tắc chính tả chi tiết với nhiều ví dụ"),
                    safeText("• Phân tích lỗi thường gặp và cách khắc phục"),
                    safeText("• Mẹo học tập hiệu quả từ chuyên gia"),
                    safeText("• Ứng dụng nâng cao trong thực tế"),
                    safeText("• Hướng dẫn sử dụng theo từng cấp độ CEFR"),
                  ],
                  style: "coverFeaturesVi",
                  type: "none",
                },
              ],
              fillColor: colors.exampleBg,
              margin: [10, 10, 10, 10],
            },
            {
              stack: [
                {
                  text: safeText("• ENGLISH VERSION"),
                  style: "featureTitle",
                  color: colors.secondary,
                  margin: [0, 0, 0, 10],
                },
                {
                  ul: [
                    safeText(
                      "• Comprehensive and detailed grammar explanations"
                    ),
                    safeText(
                      "• Diverse practical examples in multiple contexts"
                    ),
                    safeText(
                      "• Clear and understandable structures and formulas"
                    ),
                    safeText(
                      "• Detailed spelling rules with extensive examples"
                    ),
                    safeText(
                      "• Common mistake analysis and correction methods"
                    ),
                    safeText("• Effective learning tips from expert linguists"),
                    safeText("• Advanced real-world applications and usage"),
                    safeText(
                      "• Level-based usage guidelines for CEFR standards"
                    ),
                  ],
                  style: "coverFeatures",
                  type: "none",
                },
              ],
              fillColor: colors.formulaBg,
              margin: [10, 10, 10, 10],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderColor,
        vLineColor: () => colors.borderColor,
      },
      margin: [20, 0, 20, 40],
    },

    // Beautiful footer with decorative elements
    {
      canvas: [
        {
          type: "rect",
          x: 10,
          y: 25,
          w: 495,
          h: 100,
          color: colors.lightBg,
        },
        // Decorative corners
        {
          type: "rect",
          x: 0,
          y: 20,
          w: 15,
          h: 15,
          color: colors.goldAccent,
        },
        {
          type: "rect",
          x: 500,
          y: 20,
          w: 15,
          h: 15,
          color: colors.goldAccent,
        },
        {
          type: "rect",
          x: 0,
          y: 115,
          w: 15,
          h: 15,
          color: colors.roseAccent,
        },
        {
          type: "rect",
          x: 500,
          y: 115,
          w: 15,
          h: 15,
          color: colors.roseAccent,
        },
      ],
      margin: [0, 20, 0, 0],
    },
    {
      text: safeText(`Tạo ngày / Generated: ${tenseDatabase.createdAt}`),
      style: "coverDate",
      alignment: "center",
      margin: [0, -85, 0, 0],
    },
    {
      text: safeText(
        `Cập nhật mới nhất ngày / Last updated: ${tenseDatabase.updatedAt}`
      ),
      style: "coverUpdatedAtDate",
      alignment: "center",
      margin: [0, 0, 0, 0],
    },
    {
      text: safeText("Phiên bản cao cấp với trích xuất dữ liệu 100% tự động"),
      style: "premiumBadge",
      alignment: "center",
      color: colors.goldAccent,
      margin: [0, 10, 0, 10],
    },
    // Add thank you footer to cover page
    createThankYouFooter(),
  ];
};

// Beautiful enhanced introduction page with modern design
export const createIntroductionPage = (): Content[] => {
  return [
    // Gradient header for introduction
    {
      canvas: [
        {
          type: "rect",
          x: 0,
          y: 0,
          w: 595,
          h: 80,
          color: colors.secondary,
          linearGradient: [colors.secondary, colors.primary],
        },
      ],
      margin: [0, 0, 0, 0],
    },
    {
      text: safeText("GIỚI THIỆU / INTRODUCTION "),
      style: "introHeader",
      alignment: "center",
      color: "white",
      margin: [0, -50, 0, 50],
    },

    // About section with beautiful card design
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: safeText("Về tài liệu này / About This Document"),
                  style: "introSubheader",
                  color: colors.primary,
                  margin: [0, 0, 0, 15],
                },
                {
                  text: safeText(
                    "Tài liệu này tổng hợp đầy đủ 119 chủ đề ngữ pháp tiếng Anh thiết yếu, từ cơ bản đến nâng cao. Mỗi chủ đề được trình bày với cấu trúc rõ ràng, ví dụ minh họa chi tiết, quy tắc chính tả, lỗi thường gặp, mẹo học tập và ứng dụng nâng cao với hệ thống trích xuất dữ liệu 100% tự động."
                  ),
                  style: "introText",
                  margin: [0, 0, 0, 15],
                },
                {
                  text: safeText(
                    "This document provides a comprehensive compilation of 119 essential English grammar topics, from basic to advanced levels. Each topic is presented with clear structure, detailed illustrative examples, spelling rules, common mistakes, learning tips, and advanced applications using 100% automatic data extraction system."
                  ),
                  style: "introText",
                },
              ],
              fillColor: colors.cardBg,
              margin: [15, 15, 15, 15],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.primary,
        vLineColor: () => colors.primary,
      },
      margin: [20, 0, 20, 25],
    },

    // How to use section with icons
    {
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: safeText("Cách sử dụng / How to Use"),
                  style: "introSubheader",
                  color: colors.secondary,
                  margin: [0, 0, 0, 15],
                },
                {
                  ol: [
                    safeText(
                      "Sử dụng mục lục để tìm chủ đề cần học / Use the table of contents to find specific topics"
                    ),
                    safeText(
                      "Đọc phần tổng quan để hiểu cách sử dụng / Read the usage overview for general understanding"
                    ),
                    safeText(
                      "Học cấu trúc ngữ pháp từ các công thức / Study grammar structures from the formulas"
                    ),
                    safeText(
                      "Xem ví dụ để hiểu ngữ cảnh sử dụng / Review examples to understand usage context"
                    ),
                    safeText(
                      "Áp dụng vào thực hành viết và nói / Apply to writing and speaking practice"
                    ),
                    safeText(
                      "Theo dõi tiến độ qua các cấp độ CEFR / Track progress through CEFR levels"
                    ),
                  ],
                  style: "introList",
                },
              ],
              fillColor: colors.exampleBg,
              margin: [15, 15, 15, 15],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 2,
        vLineWidth: () => 2,
        hLineColor: () => colors.secondary,
        vLineColor: () => colors.secondary,
      },
      margin: [20, 0, 20, 25],
    },

    // Beautiful color coding guide
    {
      text: safeText("Ký hiệu màu sắc / Color Coding Guide"),
      style: "introSubheader",
      alignment: "center",
      color: colors.accent,
      margin: [0, 0, 0, 15],
    },
    {
      table: {
        widths: [120, "*"],
        body: [
          [
            {
              text: safeText("• Tiêu đề chính"),
              style: "colorKey",
              color: colors.primary,
              fillColor: colors.lightBg,
            },
            {
              text: "Main topics / Chủ đề chính",
              style: "colorDesc",
              fillColor: colors.lightBg,
            },
          ],
          [
            {
              text: safeText("• Tiểu mục"),
              style: "colorKey",
              color: colors.secondary,
              fillColor: colors.cardBg,
            },
            {
              text: "Subtopics / Tiểu mục",
              style: "colorDesc",
              fillColor: colors.cardBg,
            },
          ],
          [
            {
              text: safeText("• Ví dụ"),
              style: "colorKey",
              color: colors.success,
              fillColor: colors.exampleBg,
            },
            {
              text: "Examples / Ví dụ",
              style: "colorDesc",
              fillColor: colors.exampleBg,
            },
          ],
          [
            {
              text: safeText("• Quy tắc chính tả"),
              style: "colorKey",
              color: colors.warning,
              fillColor: colors.formulaBg,
            },
            {
              text: "Spelling rules / Quy tắc chính tả",
              style: "colorDesc",
              fillColor: colors.formulaBg,
            },
          ],
          [
            {
              text: safeText("• Lỗi thường gặp"),
              style: "colorKey",
              color: colors.error,
              fillColor: "#fee2e2",
            },
            {
              text: "Common mistakes / Lỗi thường gặp",
              style: "colorDesc",
              fillColor: "#fee2e2",
            },
          ],
          [
            {
              text: safeText("• Mẹo học tập"),
              style: "colorKey",
              color: colors.info,
              fillColor: colors.noteBg,
            },
            {
              text: "Learning tips / Mẹo học tập",
              style: "colorDesc",
              fillColor: colors.noteBg,
            },
          ],
          [
            {
              text: safeText("• Ứng dụng nâng cao"),
              style: "colorKey",
              color: colors.accent,
              fillColor: "#f0fdf4",
            },
            {
              text: "Advanced applications / Ứng dụng nâng cao",
              style: "colorDesc",
              fillColor: "#f0fdf4",
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => colors.borderColor,
        vLineColor: () => colors.borderColor,
        paddingLeft: () => 10,
        paddingRight: () => 10,
        paddingTop: () => 8,
        paddingBottom: () => 8,
      },
      margin: [40, 0, 40, 20],
    },
    // Add thank you footer to introduction page
    createThankYouFooter(),
  ];
};

// Helper function to determine section header text based on section title
const getSectionHeaderText = (sectionTitle: string): string => {
  const titleLower = sectionTitle.toLowerCase();

  // List of 12 tenses that should show [TENSES]
  const tenseKeywords = [
    // Present Simple
    "present simple",
    "simple present",
    // Past Simple
    "past simple",
    "simple past",
    // Future Simple
    "future simple",
    "simple future",

    // Present Continuous
    "present continuous",
    "continuous present",
    "present progressive",
    "progressive present",
    // Past Continuous
    "past continuous",
    "continuous past",
    "past progressive",
    "progressive past",
    // Future Continuous
    "future continuous",
    "continuous future",
    "future progressive",
    "progressive future",

    // Present Perfect
    "present perfect",
    "perfect present",
    // Past Perfect
    "past perfect",
    "perfect past",
    "pluperfect",
    // Future Perfect
    "future perfect",
    "perfect future",

    // Present Perfect Continuous
    "present perfect continuous",
    "perfect continuous present",
    "present perfect progressive",
    "perfect progressive present",
    // Past Perfect Continuous
    "past perfect continuous",
    "perfect continuous past",
    "past perfect progressive",
    "perfect progressive past",
    // Future Perfect Continuous
    "future perfect continuous",
    "perfect continuous future",
    "future perfect progressive",
    "perfect progressive future",

    // Viết tắt thường gặp (dành cho người học)
    "pres simple",
    "past simp",
    "fut simp",
    "pres cont",
    "past cont",
    "fut cont",
    "pres perf",
    "past perf",
    "fut perf",
    "pres perf cont",
    "past perf cont",
    "fut perf cont",

    // Các trường hợp viết sai nhưng phổ biến
    "present sim",
    "past sim",
    "future sim",
    "present conti",
    "past conti",
    "future conti",
    "present perf conti",
    "past perf conti",
    "future perf conti",
  ];

  // Check if it's a tense
  const isTense = tenseKeywords.some((tense) => titleLower.includes(tense));
  if (isTense) {
    return "[TENSES]";
  }

  // Check if it's conditionals
  if (titleLower.includes("conditional")) {
    return "[CONDITIONALS]";
  }

  // List of special topics that should show [SPECIAL]
  const specialTopics = [
    "discourse markers",
    "ellipsis and substitution",
    "emphasis",
    "focus structures",
    "hedging",
    "nominalisation",
    "adverbs inversion and emphasis",
    "adverbial clause advanced",
    "binomials",
    "cleft sentences",
    "collocations",
    "emphatic cleft sentences",
    "fixed expressions",
    "verb to v or ving advanced",
  ];

  // Check if it's a special topic
  const isSpecial = specialTopics.some((special) =>
    titleLower.includes(special)
  );
  if (isSpecial) {
    return "[SPECIAL]";
  }

  // Default to [GRAMMAR] for everything else
  return "[GRAMMAR]";
};

// COMPLETE COMPREHENSIVE GRAMMAR SECTION FORMATTING - 100% DATA EXTRACTION
export const formatGrammarSection = (
  section: PDFSection,
  categoryIndex: number = 0,
  sectionIndex: number = 0
): Content[] => {
  const content: Content[] = [];
  const grammarData = section.content;

  // Remove meta fields that shouldn't be displayed
  const displayData = { ...grammarData } as Record<string, unknown>;
  delete (displayData as Record<string, unknown>).id;
  delete (displayData as Record<string, unknown>).created;
  delete (displayData as Record<string, unknown>).updated;

  // Create unique destination ID for navigation (replace spaces and special chars with hyphens)
  const destinationId =
    section.title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") +
    "-" +
    (categoryIndex * 1000 + sectionIndex);

  // Section header with enhanced styling and gradient background + destination anchor
  content.push({
    table: {
      widths: ["*"],
      body: [
        [
          {
            stack: [
              {
                text: getSectionHeaderText(section.title),
                fontSize: 16,
                alignment: "center",
                margin: [0, 0, 0, 8],
                bold: true,
                color: colors.goldAccent,
              },
              {
                text: section.title,
                style: "sectionHeader",
                alignment: "center",
                color: "white",
                margin: [0, 0, 0, 0],
                id: destinationId, // Add destination anchor for navigation
              },
            ],
            fillColor: colors.headerBg,
            margin: [0, 20, 0, 20],
          },
        ],
      ],
    },
    layout: {
      hLineWidth: () => 3,
      vLineWidth: () => 3,
      hLineColor: () => colors.goldAccent,
      vLineColor: () => colors.goldAccent,
      paddingLeft: () => 20,
      paddingRight: () => 20,
      paddingTop: () => 15,
      paddingBottom: () => 15,
    },
    margin: [0, 0, 0, 30],
  });

  // Add comprehensive analysis for ALL topics based on their actual content data
  // This ensures all 119 topics get component analysis, not just tenseDatabase entries
  const topicData = section.content;

  if (topicData && typeof topicData === "object") {
    const stats = calculateTopicStatistics(topicData);

    // Check if we have learning tips for this specific topic
    const learningTipKey = Object.keys(grammarLearningTips).find(
      (key) =>
        key.toLowerCase().replace(/_/g, " ") === section.title.toLowerCase() ||
        section.title
          .toLowerCase()
          .includes(key.toLowerCase().replace(/_/g, " ")) ||
        key
          .toLowerCase()
          .replace(/_/g, " ")
          .includes(section.title.toLowerCase())
    );

    if (learningTipKey && grammarLearningTips[learningTipKey]) {
      // Full analysis with learning tips - GUARANTEED for topics with exact learning tips
      const analysisContent = createQuickAnalysisTable(stats, section.title);
      content.push(...analysisContent);

      // Add component breakdown analysis for ALL topics
      const componentBreakdown = createComponentBreakdownTable(
        topicData,
        section.title
      );
      content.push(...componentBreakdown);
    } else {
      // CRITICAL FIX: Ensure ALL 119 topics get full analysis even without exact learning tip match
      // Use intelligent fallback to create comprehensive analysis for EVERY topic
      console.log(`Creating fallback analysis for topic: ${section.title}`);

      // Generate full analysis using intelligent fallback system
      const analysisContent = createQuickAnalysisTable(stats, section.title);
      content.push(...analysisContent);

      // Still add component breakdown for ALL topics based on their actual data
      const componentBreakdown = createComponentBreakdownTable(
        topicData,
        section.title
      );
      content.push(...componentBreakdown);
    }
  }

  // DYNAMIC DATA EXTRACTION - Process ALL fields automatically
  const processAnyObject = (
    obj: Record<string, unknown>,
    titlePrefix: string = "",
    level: number = 0,
    parentColor: string = colors.primary
  ): void => {
    if (!obj || typeof obj !== "object") return;

    Object.entries(obj).forEach(([key, value]: [string, unknown]) => {
      if (!value) return;

      const displayKey = key
        .replace(/_/g, " ")
        .replace(/([A-Z])/g, " $1")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      const fullTitle = titlePrefix
        ? `${titlePrefix} - ${displayKey}`
        : displayKey;

      // Color rotation based on level
      const levelColors = [
        colors.primary,
        colors.secondary,
        colors.accent,
        colors.warning,
        colors.info,
        colors.success,
      ];
      const currentColor =
        levelColors[level % levelColors.length] || parentColor;

      if (typeof value === "string") {
        // Handle string values
        content.push({
          text: `${fullTitle}:`,
          style: level === 0 ? "subsectionHeader" : "structureType",
          color: currentColor,
          fillColor: level === 0 ? colors.background : undefined,
          margin: [level * 10, 15, 0, 8],
        });

        content.push({
          text: safeText(value),
          style: "description",
          margin: [level * 10 + 15, 0, 0, 10],
        });
      } else if (Array.isArray(value)) {
        // Handle arrays
        if (value.length === 0) return;

        content.push({
          text: `${fullTitle}:`,
          style: level === 0 ? "subsectionHeader" : "structureType",
          color: currentColor,
          fillColor: level === 0 ? colors.background : undefined,
          margin: [level * 10, 15, 0, 8],
        });

        value.forEach((item: unknown, index: number) => {
          if (typeof item === "string") {
            content.push({
              table: {
                widths: [25, "*"],
                body: [
                  [
                    {
                      text: "- ",
                      style: "exampleBullet",
                      color: currentColor,
                      border: [false, false, false, false],
                    },
                    {
                      text: safeText(item),
                      style: "description",
                      border: [false, false, false, false],
                    },
                  ],
                ],
              },
              layout: "noBorders",
              margin: [level * 10 + 20, 2, 0, 2],
            });
          } else if (typeof item === "object" && item !== null) {
            // Handle objects within arrays
            content.push({
              text: `${index + 1}. ${
                Object.keys(item)[0]?.toUpperCase() || "ITEM"
              }`,
              style: "applicationLabel",
              color: currentColor,
              margin: [level * 10 + 15, 8, 0, 5],
            });

            Object.entries(item).forEach(
              ([subKey, subValue]: [string, unknown]) => {
                if (typeof subValue === "string") {
                  const subDisplayKey = subKey
                    .replace(/_/g, " ")
                    .replace(/([A-Z])/g, " $1")
                    .replace(/\s+/g, " ")
                    .trim()
                    .split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ");
                  content.push({
                    table: {
                      widths: [80, "*"],
                      body: [
                        [
                          {
                            text: `${subDisplayKey}:`,
                            style: "formLabel",
                            color: currentColor,
                            border: [false, false, false, false],
                          },
                          {
                            text: safeText(subValue),
                            style: "description",
                            border: [false, false, false, false],
                          },
                        ],
                      ],
                    },
                    layout: "noBorders",
                    margin: [level * 10 + 25, 2, 0, 2],
                  });
                } else if (Array.isArray(subValue)) {
                  const subDisplayKey = subKey
                    .replace(/_/g, " ")
                    .replace(/([A-Z])/g, " $1")
                    .replace(/\s+/g, " ")
                    .trim()
                    .split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ");
                  content.push({
                    text: `${subDisplayKey}:`,
                    style: "formLabel",
                    color: currentColor,
                    margin: [level * 10 + 25, 5, 0, 3],
                  });

                  subValue.forEach((subItem: string) => {
                    if (typeof subItem === "string") {
                      content.push({
                        table: {
                          widths: [15, "*"],
                          body: [
                            [
                              {
                                text: "> ",
                                style: "exampleBullet",
                                color: currentColor,
                                border: [false, false, false, false],
                              },
                              {
                                text: safeText(subItem),
                                style: "example",
                                color: currentColor,
                                border: [false, false, false, false],
                              },
                            ],
                          ],
                        },
                        layout: "noBorders",
                        margin: [level * 10 + 35, 1, 0, 1],
                      });
                    }
                  });
                }
              }
            );
          }
        });
      } else if (typeof value === "object" && value !== null) {
        // Handle nested objects
        content.push({
          text: fullTitle,
          style: level === 0 ? "subsectionHeader" : "structureType",
          color: currentColor,
          fillColor: level === 0 ? colors.background : undefined,
          margin: [level * 10, 15, 0, 12],
        });

        // Special handling for common object patterns
        const valueObj = value as Record<string, unknown>;
        if (valueObj.form || valueObj.description || valueObj.examples) {
          // Structure pattern (like forms.affirmative)
          if (valueObj.form as string) {
            content.push({
              table: {
                widths: ["*"],
                body: [
                  [
                    {
                      text: valueObj.form as string,
                      style: "formContent",
                      fillColor: colors.formulaBg,
                      margin: [15, 8, 15, 8],
                    },
                  ],
                ],
              },
              layout: "lightHorizontalLines",
              margin: [level * 10 + 15, 0, 0, 8],
            });
          }

          if (valueObj.description as string) {
            content.push({
              text: safeText(valueObj.description as string),
              style: "description",
              margin: [level * 10 + 15, 0, 0, 8],
            });
          }

          if (
            (valueObj.examples as string[]) &&
            Array.isArray(valueObj.examples as string[])
          ) {
            content.push({
              text: "Ví dụ / Examples:",
              style: "formLabel",
              color: currentColor,
              margin: [level * 10 + 15, 5, 0, 3],
            });

            (valueObj.examples as string[]).forEach((example: string) => {
              if (example) {
                content.push({
                  table: {
                    widths: [15, "*"],
                    body: [
                      [
                        {
                          text: safeText("•"),
                          style: "exampleBullet",
                          color: currentColor,
                          border: [false, false, false, false],
                        },
                        {
                          text: safeText(example),
                          style: "example",
                          color: currentColor,
                          border: [false, false, false, false],
                        },
                      ],
                    ],
                  },
                  layout: "noBorders",
                  margin: [level * 10 + 25, 1, 0, 1],
                });
              }
            });
          }
        } else if (
          (valueObj.rule as string) ||
          (valueObj.explanation as string)
        ) {
          // Rule pattern (like spellingRules)
          if (valueObj.rule as string) {
            content.push({
              text: safeText(valueObj.rule as string),
              style: "description",
              margin: [level * 10 + 15, 0, 0, 5],
            });
          }

          if (valueObj.explanation as string) {
            content.push({
              text: safeText(valueObj.explanation as string),
              style: "description",
              margin: [level * 10 + 15, 0, 0, 5],
            });
          }

          if (
            (valueObj.examples as string[]) &&
            Array.isArray(valueObj.examples as string[])
          ) {
            content.push({
              text: "Ví dụ / Examples:",
              style: "formLabel",
              color: currentColor,
              margin: [level * 10 + 15, 5, 0, 3],
            });

            (valueObj.examples as string[]).forEach((example: string) => {
              if (example) {
                content.push({
                  table: {
                    widths: [15, "*"],
                    body: [
                      [
                        {
                          text: "- ",
                          style: "exampleBullet",
                          color: currentColor,
                          border: [false, false, false, false],
                        },
                        {
                          text: safeText(example),
                          style: "example",
                          color: currentColor,
                          border: [false, false, false, false],
                        },
                      ],
                    ],
                  },
                  layout: "noBorders",
                  margin: [level * 10 + 25, 1, 0, 1],
                });
              }
            });
          }

          if (valueObj.exception as string) {
            content.push({
              text: `Ngoại lệ / Exception: ${valueObj.exception as string}`,
              style: "note",
              color: colors.error,
              margin: [level * 10 + 15, 5, 0, 8],
            });
          }

          if (valueObj.note as string) {
            content.push({
              text: `Ghi chú / Note: ${valueObj.note as string}`,
              style: "note",
              color: colors.info,
              margin: [level * 10 + 15, 5, 0, 8],
            });
          }
        } else if (
          (valueObj.mistake as string) ||
          (valueObj.wrong as string) ||
          (valueObj.correct as string)
        ) {
          // Mistake pattern (like commonMistakes)
          if (valueObj.mistake as string) {
            content.push({
              text: safeText(valueObj.mistake as string),
              style: "applicationLabel",
              color: colors.error,
              margin: [level * 10 + 15, 8, 0, 5],
            });
          }

          if (valueObj.wrong as string) {
            content.push({
              table: {
                widths: [40, "*"],
                body: [
                  [
                    {
                      text: "[X] Sai:",
                      style: "formLabel",
                      color: colors.error,
                      border: [false, false, false, false],
                    },
                    {
                      text: safeText(valueObj.wrong as string),
                      style: "example",
                      color: colors.error,
                      border: [false, false, false, false],
                    },
                  ],
                ],
              },
              layout: "noBorders",
              margin: [level * 10 + 20, 2, 0, 2],
            });
          }

          if (valueObj.correct as string) {
            content.push({
              table: {
                widths: [40, "*"],
                body: [
                  [
                    {
                      text: "[V] Đúng:",
                      style: "formLabel",
                      color: colors.success,
                      border: [false, false, false, false],
                    },
                    {
                      text: safeText(valueObj.correct as string),
                      style: "example",
                      color: colors.success,
                      border: [false, false, false, false],
                    },
                  ],
                ],
              },
              layout: "noBorders",
              margin: [level * 10 + 20, 2, 0, 2],
            });
          }

          if (valueObj.explanation as string) {
            content.push({
              text: `[!] ${valueObj.explanation as string}`,
              style: "description",
              margin: [level * 10 + 20, 2, 0, 10],
            });
          }
        } else {
          // Generic nested object handling
          processAnyObject(
            value as Record<string, unknown>,
            fullTitle,
            level + 1,
            currentColor
          );
        }
      }
    });
  };

  // Process ALL data from the grammar object
  processAnyObject(displayData, "", 0, colors.primary);

  // Add thank you footer before page break
  content.push(createThankYouFooter());

  // Page break after each section
  content.push({ text: "", pageBreak: "after" });

  return content;
};

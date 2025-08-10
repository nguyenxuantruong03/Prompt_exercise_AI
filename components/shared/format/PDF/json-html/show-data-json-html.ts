import { tenseDatabase } from "@/lib/static/grammars/grammar/main/data_grammar";
import {
  FormattableValue,
  FormatterOptions,
} from "@/types/formats/show-data-json-html";
/**
 * Interface for grammar topic comparison
 */
export interface GrammarTopicKey {
  key: keyof typeof tenseDatabase;
  displayName?: string;
}

/**
 * Default formatting options
 */
const DEFAULT_OPTIONS: Required<FormatterOptions> = {
  includeTheory: true,
  includeExamples: true,
  includeCitations: false,
  includeStructure: true,
  includeCommonMistakes: true,
  includeTips: true,
  includeTimeMarkers: true,
  includeUsage: true,
  comparisonMode: false,
  theme: "light",
  maxExamples: 10,
  truncateLongText: true,
  maxTextLength: 500,
};

/**
 * Enhanced color schemes with gradients and hover effects
 */
const CATEGORY_COLORS = {
  tenses: {
    primary: "#3b82f6",
    secondary: "#dbeafe",
    accent: "#1e40af",
    border: "#93c5fd",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    lightGradient: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
    shadow: "rgba(59, 130, 246, 0.15)",
  },
  grammar: {
    primary: "#16a34a",
    secondary: "#dcfce7",
    accent: "#166534",
    border: "#86efac",
    gradient: "linear-gradient(135deg, #16a34a, #15803d)",
    lightGradient: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
    shadow: "rgba(22, 163, 74, 0.15)",
  },
  conditionals: {
    primary: "#ea580c",
    secondary: "#fed7aa",
    accent: "#c2410c",
    border: "#fdba74",
    gradient: "linear-gradient(135deg, #ea580c, #dc2626)",
    lightGradient: "linear-gradient(135deg, #fed7aa, #fde68a)",
    shadow: "rgba(234, 88, 12, 0.15)",
  },
  special: {
    primary: "#dc2626",
    secondary: "#fecaca",
    accent: "#b91c1c",
    border: "#fca5a5",
    gradient: "linear-gradient(135deg, #dc2626, #991b1b)",
    lightGradient: "linear-gradient(135deg, #fecaca, #fca5a5)",
    shadow: "rgba(220, 38, 38, 0.15)",
  },
  advanced: {
    primary: "#7c3aed",
    secondary: "#e9d5ff",
    accent: "#6d28d9",
    border: "#c4b5fd",
    gradient: "linear-gradient(135deg, #7c3aed, #5b21b6)",
    lightGradient: "linear-gradient(135deg, #e9d5ff, #ddd6fe)",
    shadow: "rgba(124, 58, 237, 0.15)",
  },
  default: {
    primary: "#6b7280",
    secondary: "#f3f4f6",
    accent: "#4b5563",
    border: "#d1d5db",
    gradient: "linear-gradient(135deg, #6b7280, #4b5563)",
    lightGradient: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
    shadow: "rgba(107, 114, 128, 0.15)",
  },
};

/**
 * Determine category from grammar key
 */
function determineCategory(key: string): keyof typeof CATEGORY_COLORS {
  const lowerKey = key.toLowerCase();

  if (
    lowerKey.includes("present") ||
    lowerKey.includes("past") ||
    lowerKey.includes("future") ||
    lowerKey.includes("perfect") ||
    lowerKey.includes("continuous")
  ) {
    return "tenses";
  }
  if (lowerKey.includes("conditional")) {
    return "conditionals";
  }
  if (
    lowerKey.includes("advanced") ||
    lowerKey.includes("cleft") ||
    lowerKey.includes("inversion") ||
    lowerKey.includes("hedging")
  ) {
    return "advanced";
  }
  if (
    lowerKey.includes("noun") ||
    lowerKey.includes("verb") ||
    lowerKey.includes("adjective") ||
    lowerKey.includes("adverb") ||
    lowerKey.includes("article")
  ) {
    return "grammar";
  }
  if (
    lowerKey.includes("special") ||
    lowerKey.includes("emphasis") ||
    lowerKey.includes("focus")
  ) {
    return "special";
  }

  return "default";
}

/**
 * Safely truncate text while preserving word boundaries
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + "..."
    : truncated + "...";
}

/**
 * Convert any value to clean, readable HTML string with proper line breaks
 */
function valueToHtml(
  value: FormattableValue,
  options: Required<FormatterOptions>,
  depth = 0
): string {
  if (value === null || value === undefined) {
    return '<span class="text-gray-400 italic">📭 Not available</span>';
  }

  if (typeof value === "string") {
    return formatStringContent(value, options);
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return `<span class="text-blue-600 font-medium" style="background: rgba(59, 130, 246, 0.1); padding: 2px 8px; border-radius: 6px; font-family: 'JetBrains Mono', monospace;">${value}</span>`;
  }

  if (Array.isArray(value)) {
    return formatArrayContent(value, options, depth);
  }

  if (typeof value === "object") {
    return formatObjectContent(value, options, depth);
  }

  return `<span class="text-gray-600" style="font-family: 'JetBrains Mono', monospace; background: rgba(107, 114, 128, 0.1); padding: 4px 8px; border-radius: 4px;">${String(
    value
  )}</span>`;
}

/**
 * Format string content with proper line breaks and structure
 */
function formatStringContent(
  text: string,
  options: Required<FormatterOptions>
): string {
  if (!text || text.trim() === "") {
    return '<span class="text-gray-400 italic">📝 No content</span>';
  }

  // Truncate if needed
  const processed =
    options.truncateLongText && text.length > options.maxTextLength
      ? truncateText(text, options.maxTextLength)
      : text;

  // Clean and prepare text
  processed
    .trim()
    // Normalize line breaks
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    // Add space between words that are stuck together
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // Add space after punctuation if missing
    .replace(/([.!?])([A-Z])/g, "$1 $2")
    .replace(/([,;:])([A-Za-z])/g, "$1 $2")
    // Add space before parentheses if missing
    .replace(/([a-zA-Z])\(/g, "$1 (")
    .replace(/\)([a-zA-Z])/g, ") $1")
    // Clean up multiple spaces
    .replace(/\s+/g, " ")
    .trim();

  // Split into logical sections based on common patterns
  const sections = parseTextSections(processed);

  // Format each section appropriately
  const formattedSections = sections
    .map((section) => formatTextSection(section))
    .join("");

  return `<div class="formatted-text-content" style="line-height: 1.8; word-break: break-word;">${formattedSections}</div>`;
}

/**
 * Parse text into logical sections for better formatting
 */
function parseTextSections(
  text: string
): Array<{ type: string; content: string }> {
  const sections: Array<{ type: string; content: string }> = [];

  // Split by double line breaks first (major sections)
  const majorSections = text.split(/\n\s*\n/);

  for (const majorSection of majorSections) {
    if (!majorSection.trim()) continue;

    // Check if this is a heading (starts with a label followed by colon)
    if (/^[A-Z][a-zA-Z\s]*:/.test(majorSection.trim())) {
      const [heading, ...contentParts] = majorSection.split(":");
      sections.push({
        type: "heading",
        content: heading.trim(),
      });

      const remainingContent = contentParts.join(":").trim();
      if (remainingContent) {
        sections.push(...parseContentSection(remainingContent));
      }
    } else {
      sections.push(...parseContentSection(majorSection));
    }
  }

  return sections;
}

/**
 * Parse content section into appropriate types
 */
function parseContentSection(
  content: string
): Array<{ type: string; content: string }> {
  const sections: Array<{ type: string; content: string }> = [];

  // Split by single line breaks
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);

  let currentBlock = "";
  let currentType = "paragraph";

  for (const line of lines) {
    // Check for numbered lists
    if (/^\d+\.\s/.test(line)) {
      if (currentBlock && currentType !== "numbered-list") {
        sections.push({ type: currentType, content: currentBlock.trim() });
        currentBlock = "";
      }
      currentType = "numbered-list";
      currentBlock += (currentBlock ? "\n" : "") + line;
    }
    // Check for bullet points
    else if (/^[•·▪▫-]\s/.test(line)) {
      if (currentBlock && currentType !== "bullet-list") {
        sections.push({ type: currentType, content: currentBlock.trim() });
        currentBlock = "";
      }
      currentType = "bullet-list";
      currentBlock += (currentBlock ? "\n" : "") + line;
    }
    // Check for examples (lines starting with *)
    else if (/^\*[^*]/.test(line)) {
      if (currentBlock && currentType !== "examples") {
        sections.push({ type: currentType, content: currentBlock.trim() });
        currentBlock = "";
      }
      currentType = "examples";
      currentBlock += (currentBlock ? "\n" : "") + line;
    }
    // Regular paragraph
    else {
      if (currentType !== "paragraph") {
        if (currentBlock) {
          sections.push({ type: currentType, content: currentBlock.trim() });
        }
        currentBlock = "";
        currentType = "paragraph";
      }
      currentBlock += (currentBlock ? " " : "") + line;
    }
  }

  if (currentBlock) {
    sections.push({ type: currentType, content: currentBlock.trim() });
  }

  return sections;
}

/**
 * Format a text section based on its type
 */
function formatTextSection(section: { type: string; content: string }): string {
  switch (section.type) {
    case "heading":
      return `
        <div class="section-heading" style="
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          color: white;
          padding: 12px 18px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 18px;
          margin: 16px 0 12px 0;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
        ">
          📋 ${escapeHtml(section.content)}
        </div>
      `;

    case "numbered-list":
      const numberedItems = section.content
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => {
          const match = line.match(/^(\d+\.\s*)(.+)$/);
          if (match) {
            return `
              <li style="
                display: flex;
                align-items: flex-start;
                margin: 8px 0;
                padding: 12px;
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.1));
                border-left: 4px solid #10b981;
                border-radius: 6px;
              ">
                <span style="
                  background: #10b981;
                  color: white;
                  padding: 4px 8px;
                  border-radius: 4px;
                  font-weight: 600;
                  font-size: 14px;
                  margin-right: 12px;
                  flex-shrink: 0;
                  min-width: 32px;
                  text-align: center;
                ">${match[1].replace(/\.\s*$/, "")}</span>
                <span style="flex: 1; line-height: 1.6;">${escapeHtml(
                  match[2].trim()
                )}</span>
              </li>
            `;
          }
          return `<li style="margin: 8px 0; padding: 8px 12px;">${escapeHtml(
            line
          )}</li>`;
        })
        .join("");

      return `
        <ul style="list-style: none; padding: 0; margin: 12px 0;">
          ${numberedItems}
        </ul>
      `;

    case "bullet-list":
      const bulletItems = section.content
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => {
          const cleanLine = line.replace(/^[•·▪▫-]\s*/, "").trim();
          return `
            <li style="
              display: flex;
              align-items: flex-start;
              margin: 6px 0;
              padding: 10px 14px;
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.1));
              border-left: 4px solid #3b82f6;
              border-radius: 6px;
              line-height: 1.6;
            ">
              <span style="
                color: #3b82f6;
                font-weight: 700;
                margin-right: 10px;
                margin-top: 2px;
                flex-shrink: 0;
              ">•</span>
              <span style="flex: 1;">${escapeHtml(cleanLine)}</span>
            </li>
          `;
        })
        .join("");

      return `
        <ul style="list-style: none; padding: 0; margin: 12px 0;">
          ${bulletItems}
        </ul>
      `;

    case "examples":
      const exampleItems = section.content
        .split("\n")
        .filter((line) => line.trim())
        .map((line) => {
          const cleanLine = line.replace(/^\*/, "").trim();
          return `
            <div style="
              margin: 8px 0;
              padding: 12px 16px;
              background: linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(239, 68, 68, 0.1));
              border-left: 4px solid #ef4444;
              border-radius: 6px;
              font-style: italic;
              position: relative;
            ">
              <span style="
                position: absolute;
                left: -2px;
                top: -2px;
                background: #ef4444;
                color: white;
                padding: 2px 6px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
              ">✗</span>
              <span style="margin-left: 20px; color: #dc2626; font-weight: 500;">
                ${escapeHtml(cleanLine)}
              </span>
            </div>
          `;
        })
        .join("");

      return `<div style="margin: 12px 0;">${exampleItems}</div>`;

    case "paragraph":
    default:
      // Handle inline formatting
      let formatted = escapeHtml(section.content);

      // Bold text
      formatted = formatted.replace(
        /\*\*(.*?)\*\*/g,
        '<strong style="color: #1f2937; font-weight: 700;">$1</strong>'
      );

      // Italic text
      formatted = formatted.replace(
        /\*(.*?)\*/g,
        '<em style="color: #4b5563; font-style: italic;">$1</em>'
      );

      // Code snippets
      formatted = formatted.replace(
        /`(.*?)`/g,
        '<code style="background: rgba(59, 130, 246, 0.1); color: #1e40af; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 14px;">$1</code>'
      );

      // Grammar formulas (Subject + verb + object)
      formatted = formatted.replace(
        /([A-Z][a-z]+)\s*\+\s*([a-z\s]+)\s*\+\s*([a-z\s]+)/gi,
        '<span style="background: linear-gradient(135deg, #f0f9ff, #dbeafe); border: 1px solid #3b82f6; border-radius: 6px; padding: 6px 12px; font-family: monospace; color: #1e40af; font-weight: 600; white-space: nowrap;">$1 + $2 + $3</span>'
      );

      return `
        <div style="
          margin: 12px 0;
          padding: 14px;
          background: rgba(248, 250, 252, 0.5);
          border-radius: 8px;
          line-height: 1.7;
          color: #374151;
        ">
          ${formatted}
        </div>
      `;
  }
}

/**
 * Format array content with clean structure
 */
function formatArrayContent(
  value: Array<
    string | number | boolean | Record<string, unknown> | null | undefined
  >,
  options: Required<FormatterOptions>,
  depth: number
): string {
  if (value.length === 0) {
    return '<span class="text-gray-400 italic">📝 No items available</span>';
  }

  const items = value
    .slice(0, options.maxExamples)
    .map((item, index) => {
      const itemHtml = valueToHtml(item, options, depth + 1);
      return `
        <li style="
          display: flex;
          align-items: flex-start;
          margin: 8px 0;
          padding: 12px 16px;
          background: linear-gradient(135deg, rgba(248, 250, 252, 0.8), rgba(255, 255, 255, 0.9));
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        ">
          <span style="
            background: #3b82f6;
            color: white;
            padding: 4px 8px;
            border-radius: 50%;
            font-weight: 600;
            font-size: 14px;
            margin-right: 12px;
            flex-shrink: 0;
            min-width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">${index + 1}</span>
          <div style="flex: 1; min-width: 0;">
            ${itemHtml}
          </div>
        </li>
      `;
    })
    .join("");

  const remaining = value.length - options.maxExamples;
  const remainingText =
    remaining > 0
      ? `<li style="
          padding: 12px 16px;
          margin: 8px 0;
          text-align: center;
          color: #6b7280;
          font-style: italic;
          background: linear-gradient(135deg, rgba(156, 163, 175, 0.1), rgba(209, 213, 219, 0.1));
          border: 1px dashed #d1d5db;
          border-radius: 8px;
        ">
          📋 ... and ${remaining} more item${remaining > 1 ? "s" : ""}
        </li>`
      : "";

  return `
    <ul style="
      list-style: none;
      padding: 0;
      margin: 0;
      background: rgba(248, 250, 252, 0.3);
      border-radius: 12px;
      padding: 16px;
      border: 1px solid rgba(229, 231, 235, 0.6);
    ">
      ${items}
      ${remainingText}
    </ul>
  `;
}

/**
 * Format object content with clear structure
 */
function formatObjectContent(
  value: Record<string, unknown>,
  options: Required<FormatterOptions>,
  depth: number
): string {
  const entries = Object.entries(value);
  if (entries.length === 0) {
    return '<span class="text-gray-400 italic">📊 No data available</span>';
  }

  const content = entries
    .map(([key, val], index) => {
      const formattedKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
      const valHtml = valueToHtml(val as FormattableValue, options, depth + 1);

      return `
        <div style="
          margin: 12px 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
          border: 1px solid rgba(229, 231, 235, 0.6);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        ">
          <div style="
            background: linear-gradient(135deg, #6b7280, #4b5563);
            color: white;
            padding: 12px 16px;
            font-weight: 600;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
          ">
            <span style="
              background: rgba(255, 255, 255, 0.2);
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 14px;
            ">${index + 1}</span>
            <span>${formattedKey}</span>
          </div>
          <div style="padding: 16px;">
            ${valHtml}
          </div>
        </div>
      `;
    })
    .join("");

  return `<div style="margin: 12px 0;">${content}</div>`;
}

/**
 * Field type metadata for enhanced styling
 */
interface FieldMetadata {
  type:
    | "core"
    | "advanced"
    | "cultural"
    | "learning"
    | "research"
    | "digital"
    | "structure"
    | "examples"
    | "usage"
    | "theory"
    | "tips"
    | "timing"
    | "mistakes"
    | "comparison"
    | "reference";
  icon: string;
  color: {
    primary: string;
    secondary: string;
    accent: string;
    border: string;
  };
}

/**
 * Field type detection and metadata mapping
 */
function getFieldMetadata(fieldName: string): FieldMetadata {
  const lowerField = fieldName.toLowerCase();

  // Core grammar fields
  if (
    lowerField.includes("structure") ||
    lowerField.includes("form") ||
    lowerField.includes("rule") ||
    lowerField.includes("pattern") ||
    lowerField.includes("formula") ||
    lowerField.includes("syntax")
  ) {
    return {
      type: "structure",
      icon: "🏗️",
      color: {
        primary: "#3b82f6",
        secondary: "#dbeafe",
        accent: "#1e40af",
        border: "#93c5fd",
      },
    };
  }

  // Examples and demonstrations
  if (
    lowerField.includes("example") ||
    lowerField.includes("sample") ||
    lowerField.includes("demonstration") ||
    lowerField.includes("instance") ||
    lowerField.includes("illustration")
  ) {
    return {
      type: "examples",
      icon: "💡",
      color: {
        primary: "#10b981",
        secondary: "#d1fae5",
        accent: "#047857",
        border: "#6ee7b7",
      },
    };
  }

  // Usage and application
  if (
    lowerField.includes("usage") ||
    lowerField.includes("use") ||
    lowerField.includes("application") ||
    lowerField.includes("when") ||
    lowerField.includes("context") ||
    lowerField.includes("situation")
  ) {
    return {
      type: "usage",
      icon: "🎯",
      color: {
        primary: "#f59e0b",
        secondary: "#fef3c7",
        accent: "#d97706",
        border: "#fcd34d",
      },
    };
  }

  // Theory and concepts
  if (
    lowerField.includes("theory") ||
    lowerField.includes("concept") ||
    lowerField.includes("definition") ||
    lowerField.includes("explanation") ||
    lowerField.includes("description") ||
    lowerField.includes("overview")
  ) {
    return {
      type: "theory",
      icon: "📚",
      color: {
        primary: "#7c3aed",
        secondary: "#e9d5ff",
        accent: "#5b21b6",
        border: "#c4b5fd",
      },
    };
  }

  // Tips and advice
  if (
    lowerField.includes("tip") ||
    lowerField.includes("advice") ||
    lowerField.includes("hint") ||
    lowerField.includes("suggestion") ||
    lowerField.includes("recommendation") ||
    lowerField.includes("note")
  ) {
    return {
      type: "tips",
      icon: "💭",
      color: {
        primary: "#06b6d4",
        secondary: "#cffafe",
        accent: "#0891b2",
        border: "#67e8f9",
      },
    };
  }

  // Timing and markers
  if (
    lowerField.includes("time") ||
    lowerField.includes("marker") ||
    lowerField.includes("signal") ||
    lowerField.includes("when") ||
    lowerField.includes("duration") ||
    lowerField.includes("temporal")
  ) {
    return {
      type: "timing",
      icon: "⏰",
      color: {
        primary: "#ec4899",
        secondary: "#fce7f3",
        accent: "#be185d",
        border: "#f9a8d4",
      },
    };
  }

  // Mistakes and corrections
  if (
    lowerField.includes("mistake") ||
    lowerField.includes("error") ||
    lowerField.includes("common") ||
    lowerField.includes("wrong") ||
    lowerField.includes("incorrect") ||
    lowerField.includes("avoid")
  ) {
    return {
      type: "mistakes",
      icon: "⚠️",
      color: {
        primary: "#ef4444",
        secondary: "#fee2e2",
        accent: "#dc2626",
        border: "#fca5a5",
      },
    };
  }

  // Comparison fields
  if (
    lowerField.includes("comparison") ||
    lowerField.includes("compare") ||
    lowerField.includes("vs") ||
    lowerField.includes("versus") ||
    lowerField.includes("difference") ||
    lowerField.includes("distinguish")
  ) {
    return {
      type: "comparison",
      icon: "⚖️",
      color: {
        primary: "#8b5cf6",
        secondary: "#ede9fe",
        accent: "#7c3aed",
        border: "#c4b5fd",
      },
    };
  }

  // Reference and citation
  if (
    lowerField.includes("reference") ||
    lowerField.includes("citation") ||
    lowerField.includes("source") ||
    lowerField.includes("bibliography") ||
    lowerField.includes("credit") ||
    lowerField.includes("authority")
  ) {
    return {
      type: "reference",
      icon: "📖",
      color: {
        primary: "#6b7280",
        secondary: "#f3f4f6",
        accent: "#4b5563",
        border: "#d1d5db",
      },
    };
  }

  // Advanced grammar topics
  if (
    lowerField.includes("advanced") ||
    lowerField.includes("complex") ||
    lowerField.includes("sophisticated") ||
    lowerField.includes("formal") ||
    lowerField.includes("academic") ||
    lowerField.includes("professional")
  ) {
    return {
      type: "advanced",
      icon: "🎓",
      color: {
        primary: "#7c3aed",
        secondary: "#e9d5ff",
        accent: "#6d28d9",
        border: "#c4b5fd",
      },
    };
  }

  // Cultural context
  if (
    lowerField.includes("cultural") ||
    lowerField.includes("culture") ||
    lowerField.includes("social") ||
    lowerField.includes("context") ||
    lowerField.includes("etiquette") ||
    lowerField.includes("custom")
  ) {
    return {
      type: "cultural",
      icon: "🌍",
      color: {
        primary: "#059669",
        secondary: "#d1fae5",
        accent: "#047857",
        border: "#6ee7b7",
      },
    };
  }

  // Learning and pedagogy
  if (
    lowerField.includes("learning") ||
    lowerField.includes("pedagogy") ||
    lowerField.includes("teaching") ||
    lowerField.includes("study") ||
    lowerField.includes("practice") ||
    lowerField.includes("exercise")
  ) {
    return {
      type: "learning",
      icon: "📝",
      color: {
        primary: "#f59e0b",
        secondary: "#fef3c7",
        accent: "#d97706",
        border: "#fcd34d",
      },
    };
  }

  // Research and academic
  if (
    lowerField.includes("research") ||
    lowerField.includes("study") ||
    lowerField.includes("analysis") ||
    lowerField.includes("investigation") ||
    lowerField.includes("findings") ||
    lowerField.includes("data")
  ) {
    return {
      type: "research",
      icon: "🔬",
      color: {
        primary: "#6366f1",
        secondary: "#e0e7ff",
        accent: "#4f46e5",
        border: "#a5b4fc",
      },
    };
  }

  // Digital and technology
  if (
    lowerField.includes("digital") ||
    lowerField.includes("technology") ||
    lowerField.includes("online") ||
    lowerField.includes("virtual") ||
    lowerField.includes("ai") ||
    lowerField.includes("algorithm")
  ) {
    return {
      type: "digital",
      icon: "💻",
      color: {
        primary: "#06b6d4",
        secondary: "#cffafe",
        accent: "#0891b2",
        border: "#67e8f9",
      },
    };
  }

  // Default/core fields
  return {
    type: "core",
    icon: "📌",
    color: {
      primary: "#3b82f6",
      secondary: "#dbeafe",
      accent: "#1e40af",
      border: "#93c5fd",
    },
  };
}

/**
 * Enhanced function to format field data with field-type-specific styling
 */
export function formatFieldDataToHtml(
  fieldData: FormattableValue,
  fieldName?: string
): string {
  if (!fieldData) {
    return '<span class="text-gray-400 italic">📭 Not available</span>';
  }

  const options: Required<FormatterOptions> = {
    ...DEFAULT_OPTIONS,
    truncateLongText: false,
    maxTextLength: 1000,
    maxExamples: 20,
    comparisonMode: true,
  };

  // Get field metadata if field name is provided
  const metadata = fieldName ? getFieldMetadata(fieldName) : null;

  if (metadata) {
    // Wrap content with field-type-specific styling
    const styledContent = `
      <div class="field-container" style="
        background: linear-gradient(135deg, ${
          metadata.color.secondary
        } 0%, rgba(255, 255, 255, 0.9) 100%);
        border: 2px solid ${metadata.color.border};
        border-radius: 12px;
        padding: 16px;
        margin: 8px 0;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      ">
        <div class="field-header" style="
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-weight: 600;
          color: ${metadata.color.accent};
        ">
          <span style="font-size: 18px;">${metadata.icon}</span>
          <span style="
            background: ${metadata.color.primary};
            color: white;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">${metadata.type}</span>
        </div>
        <div class="field-content" style="
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 14px;
          border-left: 4px solid ${metadata.color.primary};
        ">
          ${valueToHtml(fieldData, options)}
        </div>
      </div>
    `;
    return styledContent;
  }

  return valueToHtml(fieldData, options);
}

/**
 * Simple function to format field data for display in modals/components (backward compatibility)
 */
export function formatFieldDataToHtmlSimple(
  fieldData: FormattableValue
): string {
  return formatFieldDataToHtml(fieldData);
}

/**
 * Escape HTML characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const div = document?.createElement("div");
  if (div) {
    div.textContent = text;
    return div.innerHTML;
  }

  // Fallback for server-side
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Generate enhanced CSS styles with modern design and animations
 */
function generateStyles() {
  const baseStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --primary-blue: #3b82f6;
      --secondary-blue: #dbeafe;
      --accent-blue: #1e40af;
      --success-green: #16a34a;
      --warning-orange: #ea580c;
      --danger-red: #dc2626;
      --purple-primary: #7c3aed;
      --gray-50: #f9fafb;
      --gray-100: #f3f4f6;
      --gray-200: #e5e7eb;
      --gray-300: #d1d5db;
      --gray-400: #9ca3af;
      --gray-500: #6b7280;
      --gray-600: #4b5563;
      --gray-700: #374151;
      --gray-800: #1f2937;
      --gray-900: #111827;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --gradient-success: linear-gradient(135deg, #16a34a 0%, #059669 100%);
      --gradient-warning: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
      --gradient-purple: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      line-height: 1.7;
      color: var(--gray-800);
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: 100vh;
      padding: 20px;
      font-size: 16px;
      letter-spacing: -0.01em;
    }
    
    .main-container {
      max-width: 1400px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      box-shadow: var(--shadow-xl);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }
    
    .topic-container {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
      border-radius: 16px;
      border: 1px solid rgba(229, 231, 235, 0.8);
      margin-bottom: 32px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
      position: relative;
    }
    
    .topic-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
      opacity: 0.8;
    }
    
    .topic-container:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
      border-color: rgba(59, 130, 246, 0.3);
    }
    
    .topic-header {
      padding: 28px 32px;
      color: white;
      font-size: 28px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 16px;
      position: relative;
      overflow: hidden;
      letter-spacing: -0.02em;
    }
    
    .topic-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    .topic-header:hover::before {
      left: 100%;
    }
    
    .topic-icon {
      font-size: 32px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    
    .topic-content {
      padding: 32px;
      background: linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%);
    }
    
    .section {
      margin-bottom: 28px;
      padding: 24px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 12px;
      border-left: 5px solid var(--primary-blue);
      box-shadow: var(--shadow-md);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    
    .section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(59, 130, 246, 0.05) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .section:hover {
      transform: translateX(4px);
      box-shadow: var(--shadow-lg);
    }
    
    .section:hover::before {
      opacity: 1;
    }
    
    .section-title {
      font-size: 20px;
      font-weight: 600;
      color: var(--accent-blue);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      letter-spacing: -0.01em;
    }
    
    .section-title .icon {
      font-size: 24px;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .subsection {
      margin-bottom: 20px;
      padding: 18px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
      border-radius: 8px;
      border: 1px solid rgba(229, 231, 235, 0.6);
      transition: all 0.3s ease;
      box-shadow: var(--shadow-sm);
    }
    
    .subsection:hover {
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow: var(--shadow-md);
    }
    
    .subsection-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--gray-700);
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    
    .comparison-grid {
      display: grid;
      gap: 24px;
      margin-bottom: 28px;
    }
    
    .comparison-item {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
      border-radius: 12px;
      border: 2px solid rgba(229, 231, 235, 0.6);
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: var(--shadow-md);
      position: relative;
    }
    
    .comparison-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.05) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .comparison-item:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: var(--shadow-xl);
      border-color: rgba(59, 130, 246, 0.4);
    }
    
    .comparison-item:hover::before {
      opacity: 1;
    }
    
    .comparison-header {
      padding: 16px 20px;
      color: white;
      font-weight: 600;
      text-align: center;
      font-size: 18px;
      position: relative;
      overflow: hidden;
      letter-spacing: -0.01em;
    }
    
    .comparison-header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    .comparison-header:hover::after {
      width: 80%;
    }
    
    .comparison-content {
      padding: 20px;
      position: relative;
      z-index: 1;
    }
    
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 6px 16px;
      border-radius: 25px;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      margin: 3px 6px;
      transition: all 0.3s ease;
      letter-spacing: 0.05em;
      box-shadow: var(--shadow-sm);
      position: relative;
      overflow: hidden;
    }
    
    .badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s;
    }
    
    .badge:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
    
    .badge:hover::before {
      left: 100%;
    }
    
    .enhanced-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .enhanced-list li {
      padding: 12px 16px;
      margin-bottom: 8px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.8) 100%);
      border-radius: 8px;
      border-left: 4px solid var(--primary-blue);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .enhanced-list li::before {
      content: '▶';
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--primary-blue);
      font-size: 12px;
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .enhanced-list li:hover {
      transform: translateX(8px);
      box-shadow: var(--shadow-md);
      padding-left: 24px;
    }
    
    .enhanced-list li:hover::before {
      opacity: 1;
    }
    
    .text-gradient {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .glassmorphism {
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    
    .loading-shimmer {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    /* Enhanced utility classes */
    .text-gray-400 { color: var(--gray-400); }
    .text-gray-500 { color: var(--gray-500); }
    .text-gray-600 { color: var(--gray-600); }
    .text-gray-700 { color: var(--gray-700); }
    .text-gray-800 { color: var(--gray-800); }
    .text-blue-600 { color: var(--primary-blue); font-weight: 500; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .font-bold { font-weight: 700; }
    .italic { font-style: italic; }
    .list-none { list-style: none; }
    .space-y-1 > * + * { margin-top: 0.25rem; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    .space-y-3 > * + * { margin-top: 0.75rem; }
    .pl-3 { padding-left: 0.75rem; }
    .pl-4 { padding-left: 1rem; }
    .pl-6 { padding-left: 1.5rem; }
    .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .mb-1 { margin-bottom: 0.25rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .border-l-2 { border-left-width: 2px; }
    .border-l-4 { border-left-width: 4px; }
    .border-gray-200 { border-color: var(--gray-200); }
    .border-gray-100 { border-color: var(--gray-100); }
    .border-b { border-bottom-width: 1px; }
    .last\\:border-b-0:last-child { border-bottom-width: 0; }
    
    /* Responsive design */
    @media (max-width: 768px) {
      body { padding: 10px; font-size: 14px; }
      .topic-header { font-size: 24px; padding: 20px 16px; }
      .topic-content { padding: 20px 16px; }
      .section { padding: 16px; margin-bottom: 20px; }
      .section-title { font-size: 18px; }
      .comparison-grid { grid-template-columns: 1fr !important; gap: 16px; }
    }
    
    @media (max-width: 480px) {
      .topic-header { font-size: 20px; padding: 16px 12px; }
      .topic-content { padding: 16px 12px; }
      .section { padding: 12px; }
    }
    
    /* Print styles */
    @media print {
      body { 
        padding: 10px; 
        background: white !important;
      }
      .topic-container { 
        break-inside: avoid; 
        box-shadow: none !important;
        border: 1px solid #ccc !important;
      }
      .section { 
        break-inside: avoid; 
        box-shadow: none !important;
      }
      .comparison-item {
        break-inside: avoid;
        box-shadow: none !important;
      }
    }
    
    /* Dark theme support */
    @media (prefers-color-scheme: dark) {
      :root {
        --gray-50: #1f2937;
        --gray-100: #374151;
        --gray-800: #f9fafb;
        --gray-700: #f3f4f6;
      }
      
      body {
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        color: #f9fafb;
      }
      
      .topic-container,
      .section,
      .comparison-item {
        background: rgba(31, 41, 55, 0.9) !important;
        border-color: rgba(75, 85, 99, 0.6) !important;
      }
    }
    
    /* Accessibility improvements */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
    
    /* Focus styles for accessibility */
    .topic-container:focus-within,
    .section:focus-within,
    .comparison-item:focus-within {
      outline: 2px solid var(--primary-blue);
      outline-offset: 2px;
    }
  `;

  return baseStyles;
}

/**
 * Generate section icons based on section name
 */
function getSectionIcon(sectionName: string): string {
  const icons: Record<string, string> = {
    theory: "📚",
    structure: "🏗️",
    examples: "💡",
    usage: "🎯",
    timeMarkers: "⏰",
    commonMistakes: "⚠️",
    tips: "💭",
    citations: "📖",
    grammarTips: "💡",
    detailedGrammarRules: "📋",
    usageOverview: "🔍",
    stativeVerbs: "🔒",
    dynamicVerbs: "⚡",
    definition: "📝",
    description: "📄",
    concept: "💭",
    forms: "📐",
    rules: "📏",
    patterns: "🔄",
    default: "📌",
  };

  const lowerSection = sectionName.toLowerCase();
  for (const [key, icon] of Object.entries(icons)) {
    if (lowerSection.includes(key.toLowerCase())) {
      return icon;
    }
  }

  return icons.default;
}

/**
 * Format a single grammar topic to beautiful HTML
 */
function formatSingleTopic(
  topicKey: keyof typeof tenseDatabase,
  displayName: string,
  options: Required<FormatterOptions>
): string {
  const data = tenseDatabase[topicKey];
  if (!data) {
    return `
      <div class="error" style="color: #dc2626; padding: 24px; background: linear-gradient(135deg, #fef2f2, #fecaca); border: 2px solid #fca5a5; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);">
        <h3 style="font-size: 20px; margin-bottom: 8px;">❌ Topic Not Found</h3>
        <p>Topic "${topicKey}" was not found in the grammar database.</p>
      </div>
    `;
  }

  const category = determineCategory(topicKey);
  const colors = CATEGORY_COLORS[category];

  const headerStyle = `background: ${colors.gradient}; box-shadow: 0 4px 20px ${colors.shadow};`;
  const sectionBorderColor = colors.primary;

  let content = `
    <div class="main-container">
      <div class="topic-container">
        <div class="topic-header" style="${headerStyle}">
          <span class="topic-icon">📖</span>
          <span style="flex: 1;">${displayName}</span>
          <div class="badge" style="background: ${colors.secondary}; color: ${
    colors.accent
  }; border: 1px solid ${colors.border}; font-size: 14px; padding: 8px 16px;">
            <span style="margin-right: 6px;">🏷️</span>
            ${category.toUpperCase()}
          </div>
        </div>
        <div class="topic-content">
  `;

  // Process each section of the data
  const sections = Object.entries(data).filter(
    ([key]) => !["id", "created", "updated"].includes(key)
  );

  sections.forEach(([sectionKey, sectionValue], index) => {
    if (!shouldIncludeSection(sectionKey, options)) return;

    const sectionTitle = sectionKey
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    const icon = getSectionIcon(sectionKey);

    content += `
      <div class="section" style="border-left-color: ${sectionBorderColor}; background: ${
      colors.lightGradient
    }; border: 1px solid ${colors.border}; animation: fadeInUp 0.6s ease-out ${
      index * 0.1
    }s both;">
        <div class="section-title" style="color: ${colors.accent};">
          <span class="icon">${icon}</span>
          <span>${sectionTitle}</span>
          <div style="margin-left: auto; background: ${
            colors.primary
          }; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
            ${
              typeof sectionValue === "object" && sectionValue !== null
                ? Array.isArray(sectionValue)
                  ? `${sectionValue.length} items`
                  : `${Object.keys(sectionValue).length} sections`
                : "Data"
            }
          </div>
        </div>
        <div class="section-content" style="background: rgba(255, 255, 255, 0.7); border-radius: 8px; padding: 20px; margin-top: 12px; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);">
          ${valueToHtml(sectionValue, options)}
        </div>
      </div>
    `;
  });

  content += `
        </div>
      </div>
    </div>
    
    <style>
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `;

  return content;
}

/**
 * Check if a section should be included based on options
 */
function shouldIncludeSection(
  sectionKey: string,
  options: Required<FormatterOptions>
): boolean {
  const sectionMap: Record<string, keyof FormatterOptions> = {
    theory: "includeTheory",
    structure: "includeStructure",
    examples: "includeExamples",
    citations: "includeCitations",
    commonMistakes: "includeCommonMistakes",
    tips: "includeTips",
    grammarTips: "includeTips",
    timeMarkers: "includeTimeMarkers",
    usage: "includeUsage",
    usageOverview: "includeUsage",
  };

  const lowerKey = sectionKey.toLowerCase();
  for (const [key, option] of Object.entries(sectionMap)) {
    if (lowerKey.includes(key.toLowerCase())) {
      return options[option] as boolean;
    }
  }

  return true; // Include by default if no specific rule
}

/**
 * Format multiple topics for beautiful comparison
 */
function formatComparisonTopics(
  topics: GrammarTopicKey[],
  options: Required<FormatterOptions>
): string {
  const topicsData = topics.map((topic) => ({
    key: topic.key,
    displayName: topic.displayName || topic.key.replace(/_/g, " "),
    data: tenseDatabase[topic.key],
    category: determineCategory(topic.key),
  }));

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const topicNames = topicsData.map((t) => t.displayName).join(" vs ");

  let content = `
    <div class="main-container">
      <div class="comparison-container">
        <div class="comparison-header-main" style="text-align: center; margin-bottom: 40px; padding: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 16px; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"10\" cy=\"50\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"90\" cy=\"30\" r=\"0.5\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>'); opacity: 0.3;"></div>
          <div style="position: relative; z-index: 1;">
            <h1 style="font-size: 32px; margin-bottom: 12px; font-weight: 800; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
              📊 Grammar Topics Comparison
            </h1>
            <div style="font-size: 18px; margin-bottom: 8px; opacity: 0.95;">${topicNames}</div>
            <div style="font-size: 14px; opacity: 0.8; font-weight: 500;">📅 Generated on ${currentDate}</div>
            <div style="margin-top: 16px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
              ${topicsData
                .map((topic) => {
                  return `<span style="background: rgba(255, 255, 255, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.3);">${topic.category}</span>`;
                })
                .join("")}
            </div>
          </div>
        </div>

        <div class="comparison-overview" style="background: linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%); border: 2px solid #e2e8f0; border-radius: 16px; padding: 28px; margin-bottom: 32px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); backdrop-filter: blur(10px);">
          <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 24px; font-weight: 700; display: flex; align-items: center; gap: 12px;">
            <span style="background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;">📋</span>
            Quick Overview
          </h2>
          <div class="comparison-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
  `;

  // Enhanced overview cards for each topic
  topicsData.forEach((topic, index) => {
    const colors = CATEGORY_COLORS[topic.category];
    content += `
      <div class="comparison-item" style="animation: slideInUp 0.6s ease-out ${
        index * 0.15
      }s both;">
        <div class="comparison-header" style="background: ${
          colors.gradient
        }; position: relative;">
          <div style="position: absolute; top: 0; right: 0; width: 20px; height: 20px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; margin: 8px;"></div>
          ${topic.displayName}
        </div>
        <div class="comparison-content" style="background: ${
          colors.lightGradient
        };">
          <div class="badge" style="background: ${colors.secondary}; color: ${
      colors.accent
    }; border: 1px solid ${colors.border};">
            <span style="margin-right: 6px;">🏷️</span>
            ${topic.category.toUpperCase()}
          </div>
          <div style="margin-top: 12px; font-size: 14px; color: #6b7280; display: flex; align-items: center; gap: 8px;">
            <span style="color: ${colors.primary};">●</span>
            ${
              topic.data
                ? `<span style="color: #059669; font-weight: 600;">✅ Data Available</span>`
                : `<span style="color: #dc2626; font-weight: 600;">❌ No Data</span>`
            }
          </div>
          ${
            topic.data
              ? `
            <div style="margin-top: 12px; padding: 12px; background: rgba(255, 255, 255, 0.7); border-radius: 8px; border: 1px solid ${
              colors.border
            };">
              <div style="font-size: 12px; color: ${
                colors.accent
              }; font-weight: 600; margin-bottom: 4px;">SECTIONS</div>
              <div style="font-size: 20px; font-weight: 700; color: ${
                colors.primary
              };">
                ${
                  Object.keys(topic.data).filter(
                    (key) => !["id", "created", "updated"].includes(key)
                  ).length
                }
              </div>
            </div>
          `
              : ""
          }
        </div>
      </div>
    `;
  });

  content += `
          </div>
        </div>
  `;

  // Enhanced detailed comparison sections
  if (topicsData.every((topic) => topic.data)) {
    const allSections = new Set<string>();
    topicsData.forEach((topic) => {
      if (topic.data) {
        Object.keys(topic.data).forEach((key) => {
          if (!["id", "created", "updated"].includes(key)) {
            allSections.add(key);
          }
        });
      }
    });

    Array.from(allSections).forEach((sectionKey, sectionIndex) => {
      if (!shouldIncludeSection(sectionKey, options)) return;

      const sectionTitle = sectionKey
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
      const icon = getSectionIcon(sectionKey);

      content += `
        <div class="comparison-section" style="margin-bottom: 32px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%); border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); transition: all 0.4s ease; animation: fadeInUp 0.8s ease-out ${
          sectionIndex * 0.1
        }s both;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px 24px; font-size: 20px; font-weight: 700; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; right: 0; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; transform: translate(20px, -20px);"></div>
            <div style="position: relative; z-index: 1; display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 24px;">${icon}</span>
              <span>${sectionTitle}</span>
              <div style="margin-left: auto; background: rgba(255, 255, 255, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                ${
                  topicsData.filter(
                    (topic) =>
                      topic.data &&
                      (topic.data as unknown as Record<string, unknown>)[
                        sectionKey
                      ]
                  ).length
                }/${topicsData.length} topics
              </div>
            </div>
          </div>
          <div style="padding: 24px;">
            <div class="comparison-grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px;">
      `;

      topicsData.forEach((topic, topicIndex) => {
        if (!topic.data) return;

        const sectionData = (topic.data as unknown as Record<string, unknown>)[
          sectionKey
        ];
        const colors = CATEGORY_COLORS[topic.category];

        content += `
          <div style="background: ${colors.lightGradient}; border: 2px solid ${
          colors.border
        }; border-radius: 12px; padding: 20px; transition: all 0.4s ease; box-shadow: 0 4px 15px ${
          colors.shadow
        }; position: relative; overflow: hidden; animation: slideInUp 0.6s ease-out ${
          topicIndex * 0.1
        }s both;">
            <div style="position: absolute; top: 0; right: 0; width: 40px; height: 40px; background: ${
              colors.primary
            }; opacity: 0.1; border-radius: 50%; transform: translate(15px, -15px);"></div>
            <div style="font-size: 18px; font-weight: 700; color: ${
              colors.accent
            }; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; position: relative; z-index: 1;">
              <span style="background: ${
                colors.gradient
              }; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; box-shadow: 0 2px 8px ${
          colors.shadow
        };">${topicIndex + 1}</span>
              <span>${topic.displayName}</span>
            </div>
            <div style="color: #374151; line-height: 1.8; position: relative; z-index: 1;">
              ${
                sectionData
                  ? valueToHtml(sectionData as FormattableValue, options)
                  : '<div style="text-align: center; padding: 20px; color: #9ca3af; font-style: italic; background: rgba(156, 163, 175, 0.1); border-radius: 8px; border: 2px dashed #d1d5db;">📭 Not available for this topic</div>'
              }
            </div>
          </div>
        `;
      });

      content += `
            </div>
          </div>
        </div>
      `;
    });
  }

  content += `
      </div>
    </div>
    
    <style>
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `;

  return content;
}

/**
 * Main function to format grammar topics to HTML
 */
export function formatGrammarToHtml(
  topics: string | string[] | GrammarTopicKey | GrammarTopicKey[],
  options: Partial<FormatterOptions> = {}
): string {
  const finalOptions: Required<FormatterOptions> = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  // Normalize input to array of GrammarTopicKey
  let normalizedTopics: GrammarTopicKey[];

  if (typeof topics === "string") {
    normalizedTopics = [
      {
        key: topics as keyof typeof tenseDatabase,
        displayName: topics.replace(/_/g, " "),
      },
    ];
  } else if (Array.isArray(topics)) {
    normalizedTopics = topics.map((topic) =>
      typeof topic === "string"
        ? {
            key: topic as keyof typeof tenseDatabase,
            displayName: topic.replace(/_/g, " "),
          }
        : topic
    );
  } else {
    normalizedTopics = [topics];
  }

  // Validate topics exist in database
  const validTopics = normalizedTopics.filter(
    (topic) => topic.key in tenseDatabase
  );
  if (validTopics.length === 0) {
    return `
      <div style="color: #dc2626; padding: 20px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px;">
        <h3>❌ Error: No valid topics found</h3>
        <p>Please check that the topic keys exist in the grammar database.</p>
        <p><strong>Available topics:</strong> ${Object.keys(tenseDatabase)
          .filter((key) => key !== "createdAt" && key !== "updatedAt")
          .slice(0, 10)
          .join(", ")}...</p>
      </div>
    `;
  }

  // Generate styles
  const styles = generateStyles();

  // Generate content
  let htmlContent: string;

  if (validTopics.length === 1 && !finalOptions.comparisonMode) {
    htmlContent = formatSingleTopic(
      validTopics[0].key,
      validTopics[0].displayName || validTopics[0].key.replace(/_/g, " "),
      finalOptions
    );
  } else {
    htmlContent = formatComparisonTopics(validTopics, finalOptions);
  }

  // Return complete HTML document with enhanced styling
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Grammar Topics - ${validTopics
        .map((t) => t.displayName)
        .join(" vs ")}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <style>${styles}</style>
    </head>
    <body>
      ${htmlContent}
      <div style="margin-top: 50px; text-align: center; padding: 24px; background: linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%); border-radius: 16px; border-top: 3px solid #3b82f6; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
        <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 18px; font-weight: 700; margin-bottom: 8px;">
          📚 Grammar Analysis Report
        </div>
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">
          Generated by <span style="font-weight: 600; color: #3b82f6;">Advanced Grammar Learning System</span>
        </p>
        <p style="color: #9ca3af; font-size: 12px;">
          ✨ Powered by intelligent data formatting • 🎨 Beautiful & responsive design
        </p>
      </div>
    </body>
    </html>
  `;
}

/**
 * Export specific topic data as JSON
 */
export function getTopicData(topicKey: keyof typeof tenseDatabase) {
  return tenseDatabase[topicKey];
}

/**
 * Get all available topic keys
 */
export function getAvailableTopics(): string[] {
  return Object.keys(tenseDatabase).filter(
    (key) => key !== "createdAt" && key !== "updatedAt"
  );
}

/**
 * Search topics by name or category
 */
export function searchTopics(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  return Object.keys(tenseDatabase)
    .filter((key) => key !== "createdAt" && key !== "updatedAt")
    .filter(
      (key) =>
        key.toLowerCase().includes(lowerQuery) ||
        determineCategory(key).includes(lowerQuery)
    );
}

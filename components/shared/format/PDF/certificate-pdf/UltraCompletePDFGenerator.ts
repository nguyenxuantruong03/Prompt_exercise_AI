import {
  TDocumentDefinitions,
  Content,
  StyleDictionary,
  TableCell,
} from "pdfmake/interfaces";

// Import ALL certificate data files
import { cambridgeData } from "@/lib/static/grammars/certificate/cambridge";
import { ieltsData } from "@/lib/static/grammars/certificate/ielts";
import { pteData } from "@/lib/static/grammars/certificate/pte";
import { satData } from "@/lib/static/grammars/certificate/sat";
import { toeflData } from "@/lib/static/grammars/certificate/toefl";
import { toeicData } from "@/lib/static/grammars/certificate/toeic";
import { vstepData } from "@/lib/static/grammars/certificate/vstep";
import { skillAllData } from "@/lib/static/grammars/certificate/skill-all-cetificate";

// Type definitions
interface PdfMakeInstance {
  vfs?: Record<string, string>;
  createPdf: (documentDefinition: TDocumentDefinitions) => {
    download: (filename: string) => void;
    getBlob: (callback: (blob: Blob) => void) => void;
    open: () => void;
  };
}

interface PdfMakeModule {
  default?: PdfMakeInstance;
  createPdf?: PdfMakeInstance["createPdf"];
  vfs?: Record<string, string>;
}

interface VfsFontsModule {
  default?: { vfs: Record<string, string> };
  vfs?: Record<string, string>;
  pdfMake?: { vfs: Record<string, string> };
}

interface TocItem {
  text: string;
  style: string;
  margin: number[];
  color: string;
  linkToDestination: string;
  fontSize: number;
  bold: boolean;
}

interface TableRow extends Array<TableCell> {}

interface LayoutFunction {
  (i: number, node: { table: { body: TableRow[] } }): number;
}

interface CustomTableLayout {
  hLineWidth?: LayoutFunction;
  vLineWidth?: () => number;
  hLineColor?: () => string;
  vLineColor?: () => string;
  paddingLeft?: () => number;
  paddingRight?: () => number;
  paddingTop?: () => number;
  paddingBottom?: () => number;
}

// Type definition for certificate types
type CertificateType =
  | "Cambridge"
  | "IELTS"
  | "PTE"
  | "SAT"
  | "TOEFL"
  | "TOEIC"
  | "VSTEP"
  | "All Skills"
  | "ALL";

type CertificateDataValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | CertificateDataValue[]
  | { [key: string]: CertificateDataValue };

// Type guards
const isRecord = (
  value: CertificateDataValue
): value is Record<string, CertificateDataValue> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const isArray = (
  value: CertificateDataValue
): value is CertificateDataValue[] => {
  return Array.isArray(value);
};

const isString = (value: CertificateDataValue): value is string => {
  return typeof value === "string";
};

const isNumber = (value: CertificateDataValue): value is number => {
  return typeof value === "number";
};

const isBoolean = (value: CertificateDataValue): value is boolean => {
  return typeof value === "boolean";
};

// Dynamic imports for pdfMake to avoid SSR issues
const loadPdfMake = async (): Promise<PdfMakeInstance | null> => {
  try {
    const [pdfMakeModule, pdfFontsModule] = await Promise.all([
      import("pdfmake/build/pdfmake") as Promise<PdfMakeModule>,
      import("pdfmake/build/vfs_fonts") as Promise<VfsFontsModule>,
    ]);

    const pdfMake =
      (pdfMakeModule as PdfMakeModule).default ||
      (pdfMakeModule as PdfMakeInstance);
    const pdfFonts =
      (pdfFontsModule as VfsFontsModule).default || pdfFontsModule;

    if (
      pdfMake &&
      typeof pdfMake === "object" &&
      "createPdf" in pdfMake &&
      !pdfMake.vfs
    ) {
      const vfs =
        (pdfFonts && "vfs" in pdfFonts ? pdfFonts.vfs : undefined) ||
        (pdfFonts && "pdfMake" in pdfFonts && pdfFonts.pdfMake
          ? pdfFonts.pdfMake.vfs
          : undefined) ||
        (pdfFontsModule as VfsFontsModule)?.vfs ||
        (pdfFontsModule as VfsFontsModule)?.default?.vfs;

      if (vfs) {
        pdfMake.vfs = vfs;
      } else {
        console.warn("Could not load pdfMake fonts, PDF generation may fail");
      }
    }

    return pdfMake as PdfMakeInstance;
  } catch (error) {
    console.error("Error loading pdfMake:", error);
    throw new Error("Failed to load PDF library");
  }
};

// ULTRA-COMPLETE data mapping - ALL 68,000+ lines of data
const ultraCompleteDataMapping = {
  Cambridge: cambridgeData,
  IELTS: ieltsData,
  PTE: pteData,
  SAT: satData,
  TOEFL: toeflData,
  TOEIC: toeicData,
  VSTEP: vstepData,
  "All Skills": skillAllData,
};

// Helper function to check if a field should be displayed - Show complete data
const shouldDisplayField = (
  key: string,
  value: CertificateDataValue,
  forTOC: boolean = false
): boolean => {
  const lowercaseKey = key.toLowerCase();

  // For table of contents, hide timestamp fields and STT
  if (forTOC) {
    if (
      lowercaseKey.includes("createdat") ||
      lowercaseKey.includes("updatedat") ||
      lowercaseKey.includes("created_at") ||
      lowercaseKey.includes("updated_at") ||
      lowercaseKey.includes("timestamp") ||
      lowercaseKey.includes("date") ||
      lowercaseKey === "stt" // Hide STT (serial number) from table of contents
    ) {
      return false;
    }
  }

  // Hide only meaningless ID fields (but keep important ones)
  if (
    lowercaseKey.includes("id") &&
    !lowercaseKey.includes("created") &&
    !lowercaseKey.includes("updated") &&
    !lowercaseKey.includes("valid") &&
    !lowercaseKey.includes("guide") &&
    !lowercaseKey.includes("topic") &&
    !lowercaseKey.includes("skill") &&
    !lowercaseKey.includes("level") &&
    !lowercaseKey.includes("category")
  ) {
    // Only hide if it's a simple numeric or very short string ID
    if (
      typeof value === "number" ||
      (typeof value === "string" && value.length < 3)
    ) {
      return false;
    }
  }

  // Always show timestamp fields in content (not TOC)
  if (
    !forTOC &&
    (lowercaseKey.includes("createdat") ||
      lowercaseKey.includes("updatedat") ||
      lowercaseKey.includes("created_at") ||
      lowercaseKey.includes("updated_at"))
  ) {
    return true;
  }

  // Hide only truly empty values
  if (value === null || value === undefined) {
    return false;
  }

  // Show empty strings as they might be meaningful placeholders
  if (typeof value === "string" && value === "") {
    return true; // Changed to show empty strings
  }

  // Show all arrays, even empty ones (they indicate structure)
  if (Array.isArray(value)) {
    return true;
  }

  // Show all objects (they contain structure information)
  if (typeof value === "object" && value !== null) {
    return true;
  }

  return true; // Show everything else for complete data
};

// Helper function to format property names
const formatPropertyName = (key: string): string => {
  return key
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize each word
};

// Helper function to format values beautifully
const formatValue = (value: CertificateDataValue, key: string = ""): string => {
  if (value === null) return "~ Not specified";
  if (value === undefined) return "~ Not available";
  if (typeof value === "boolean") return value ? "+ Yes" : "- No";

  // Special handling for years and similar fields - no comma formatting
  if (typeof value === "number") {
    const lowercaseKey = key.toLowerCase();
    if (
      lowercaseKey.includes("year") ||
      lowercaseKey.includes("founded") ||
      lowercaseKey.includes("established") ||
      lowercaseKey.includes("origin") ||
      lowercaseKey.includes("created") ||
      lowercaseKey.includes("start") ||
      lowercaseKey.includes("end") ||
      // Also check if the value looks like a year (4-digit number between 1800-2100)
      (value >= 1800 && value <= 2100 && Number.isInteger(value))
    ) {
      return value.toString(); // Return as plain number without comma formatting
    }
    return value.toLocaleString(); // Use comma formatting for other numbers
  }

  // Special formatting for dates
  const lowercaseKey = key.toLowerCase();
  if (
    typeof value === "string" &&
    (lowercaseKey.includes("date") ||
      lowercaseKey.includes("createdat") ||
      lowercaseKey.includes("updatedat"))
  ) {
    try {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return `Date: ${date.toLocaleDateString()} • ${date.toLocaleTimeString()}`;
      }
    } catch (e) {
      console.log("error parsing date:", e);
    }
  }

  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    // Display actual array content instead of just count
    if (value.length === 0) return "~ Empty list";
    if (value.length <= 3) {
      // Show all items for small arrays
      return value
        .map((item) => (typeof item === "string" ? item : String(item)))
        .join(", ");
    } else {
      // Show first few items for larger arrays
      const preview = value
        .slice(0, 3)
        .map((item) => (typeof item === "string" ? item : String(item)))
        .join(", ");
      return `${preview} + ${value.length - 3} more items`;
    }
  }
  if (typeof value === "object") {
    // Display actual object properties instead of just count
    const keys = Object.keys(value);
    if (keys.length === 0) return "~ Empty object";
    if (keys.length <= 3) {
      return `Properties: ${keys.join(", ")}`;
    } else {
      return `Properties: ${keys.slice(0, 3).join(", ")} + ${
        keys.length - 3
      } more`;
    }
  }
  return String(value);
};

// PROFESSIONAL DOCUMENT STYLES for beautiful, readable formatting
const getUltraDataStyles = (): StyleDictionary => ({
  title: {
    fontSize: 24,
    bold: true,
    alignment: "center",
    color: "#1a365d",
    margin: [0, 0, 0, 25],
    decoration: "underline",
    decorationStyle: "solid",
  },
  sectionHeader: {
    fontSize: 18,
    bold: true,
    color: "#2d3748",
    margin: [0, 25, 0, 12],
    decoration: "underline",
    background: "#f7fafc",
  },
  subsectionHeader: {
    fontSize: 15,
    bold: true,
    color: "#4a5568",
    margin: [0, 18, 0, 10],
    italics: true,
  },
  propertyLabel: {
    fontSize: 12,
    bold: true,
    color: "#2b6cb0",
    margin: [0, 8, 0, 3],
  },
  propertyValue: {
    fontSize: 11,
    margin: [20, 3, 0, 8],
    lineHeight: 1.4,
    alignment: "justify",
    color: "#2d3748",
  },
  paragraph: {
    fontSize: 11,
    margin: [0, 5, 0, 12],
    lineHeight: 1.5,
    alignment: "justify",
    color: "#2d3748",
  },
  listNumber: {
    fontSize: 12,
    bold: true,
    color: "#1a365d",
  },
  listItem: {
    fontSize: 11,
    margin: [20, 3, 0, 6],
    lineHeight: 1.4,
    color: "#2d3748",
  },
  dataValue: {
    fontSize: 11,
    margin: [15, 5, 0, 8],
    lineHeight: 1.4,
    color: "#2d3748",
  },
  tableHeader: {
    fontSize: 12,
    bold: true,
    color: "white",
    fillColor: "#1a365d",
    alignment: "center",
    margin: [5, 8, 5, 8],
  },
  tableCell: {
    fontSize: 10,
    margin: [5, 6, 5, 6],
    lineHeight: 1.3,
    color: "#2d3748",
  },
  tocTableCell: {
    fontSize: 11,
    margin: [8, 6, 8, 6],
    lineHeight: 1.4,
    color: "#6b7280", // Light gray color for TOC items
    decoration: "underline", // Underlined text
  },
  tocTitle: {
    fontSize: 20,
    bold: true,
    color: "#1a365d",
    margin: [0, 15, 0, 15],
    alignment: "center",
    decoration: "underline",
  },
  highlightBox: {
    fontSize: 11,
    background: "#ebf8ff",
    margin: [10, 8, 10, 8],
    color: "#1a365d",
  },
  updatedText: {
    fontSize: 8,
    margin: [10, 8, 10, 8],
    color: "#6b7280",
  },
  importantNote: {
    fontSize: 10,
    background: "#fef5e7",
    margin: [15, 6, 15, 6],
    color: "#744210",
    italics: true,
  },
});

// Helper function to build simplified table of contents - Main topics only (no timestamps)
const buildSimplifiedTOC = (
  data: CertificateDataValue,
  prefix: string = ""
): TocItem[] => {
  const tocItems: TocItem[] = [];

  if (isRecord(data)) {
    Object.entries(data).forEach(([key, value]) => {
      if (!shouldDisplayField(key, value, true)) return; // Use forTOC=true to exclude timestamps

      const formattedKey = formatPropertyName(key);
      const uniqueId = prefix
        ? `${prefix}section_${key.replace(/\s+/g, "_").toLowerCase()}`
        : `section_${key.replace(/\s+/g, "_").toLowerCase()}`;

      // Only show main sections - simplified TOC
      tocItems.push({
        text: `- ${formattedKey}`,
        style: "propertyValue",
        margin: [20, 4, 0, 4],
        color: "#1a365d",
        linkToDestination: uniqueId,
        fontSize: 13,
        bold: true,
      });
    });
  }

  return tocItems;
};

// STRUCTURED DOCUMENT CONVERTER - Creates beautifully formatted document sections
const convertToStructuredDocument = (
  data: CertificateDataValue,
  level: number = 0,
  parentPath: string = "",
  currentKey: string = ""
): Content[] => {
  const content: Content[] = [];

  if (!data) {
    content.push({
      text: "! No data available",
      style: "importantNote",
    });
    return content;
  }

  if (isString(data)) {
    // Format string content with proper paragraphs and beautiful styling
    const paragraphs = data.split(/\n\s*\n/).filter((p) => p.trim());
    if (paragraphs.length > 1) {
      paragraphs.forEach((paragraph, index) => {
        content.push({
          text: paragraph.trim(),
          style: "paragraph",
          margin: index === 0 ? [0, 0, 0, 8] : [0, 5, 0, 8],
        });
      });
    } else {
      content.push({
        text: data,
        style: level === 0 ? "dataValue" : "paragraph",
      });
    }
    return content;
  }

  if (isNumber(data) || isBoolean(data)) {
    content.push({
      text: formatValue(data, currentKey),
      style: "highlightBox",
    });
    return content;
  }

  if (isArray(data)) {
    if (data.length === 0) {
      content.push({
        text: "! No items available",
        style: "importantNote",
      });
      return content;
    }

    // Display all items immediately without summary - show complete content
    data.forEach((item, index) => {
      if (isRecord(item)) {
        // Try to find a meaningful name/title for the item instead of generic "Item X"
        let itemTitle = `Entry ${index + 1}`;

        // Look for common title/name fields
        const titleFields = [
          "title",
          "name",
          "topic",
          "subject",
          "category",
          "type",
          "section",
          "level",
        ];
        for (const field of titleFields) {
          const fieldValue = item[field];
          if (fieldValue && isString(fieldValue) && fieldValue.trim()) {
            itemTitle = fieldValue.trim();
            break;
          }
        }

        // If no title found, use the first meaningful string value
        if (itemTitle === `Entry ${index + 1}`) {
          const firstMeaningfulValue = Object.values(item).find(
            (val) =>
              isString(val) && val.trim() && val.length > 2 && val.length < 100
          );
          if (firstMeaningfulValue && isString(firstMeaningfulValue)) {
            itemTitle = firstMeaningfulValue.trim();
          }
        }

        content.push({
          text: `${index + 1}. ${itemTitle}`,
          style: "listNumber",
          margin: [0, 12, 0, 4],
        });

        // Process object properties with enhanced data display
        Object.entries(item).forEach(([key, value]) => {
          if (!shouldDisplayField(key, value, false)) return; // Use forTOC=false for content

          const formattedKey = formatPropertyName(key);
          content.push({
            text: `- ${formattedKey}:`,
            style: "propertyLabel",
            margin: [20, 6, 0, 2],
          });

          if (isString(value) && value.length > 150) {
            // Split very long text into readable paragraphs
            const paragraphs = value.split(/\n\s*\n/).filter((p) => p.trim());
            paragraphs.forEach((paragraph) => {
              content.push({
                text: paragraph.trim(),
                style: "propertyValue",
                margin: [30, 2, 0, 4],
              });
            });
          } else if (isArray(value)) {
            // Display all array items instead of summary
            if (value.length > 0) {
              value.forEach((arrayItem, arrayIndex) => {
                if (isRecord(arrayItem)) {
                  // Create sub-content for object items in arrays
                  const arrayPath = parentPath
                    ? `${parentPath}_${key}_${arrayIndex}`
                    : `${key}_${arrayIndex}`;
                  const subContent = convertToStructuredDocument(
                    arrayItem,
                    level + 2,
                    arrayPath,
                    key
                  );
                  content.push({
                    text: `[${arrayIndex + 1}]`,
                    style: "propertyLabel",
                    margin: [35, 4, 0, 2],
                  });
                  content.push(...subContent);
                } else {
                  content.push({
                    text: `[${arrayIndex + 1}] ${formatValue(arrayItem, key)}`,
                    style: "propertyValue",
                    margin: [35, 2, 0, 3],
                  });
                }
              });
            } else {
              content.push({
                text: "~ Empty array",
                style: "importantNote",
                margin: [30, 2, 0, 4],
              });
            }
          } else if (isRecord(value)) {
            // Display all object properties instead of summary
            const objectPath = parentPath ? `${parentPath}_${key}` : key;
            const subContent = convertToStructuredDocument(
              value,
              level + 2,
              objectPath,
              key
            );
            content.push(...subContent);
          } else {
            content.push({
              text: formatValue(value, key),
              style: "propertyValue",
              margin: [30, 2, 0, 4],
            });
          }
        });
      } else {
        content.push({
          text: `${index + 1}. ${formatValue(item)}`,
          style: "listItem",
          margin: [15, 3, 0, 3],
        });
      }
    });

    return content;
  }

  if (isRecord(data)) {
    const entries = Object.entries(data).filter(
      ([key, value]) => shouldDisplayField(key, value, false) // Use forTOC=false for content
    );

    if (entries.length === 0) {
      content.push({
        text: "! No displayable content available",
        style: "importantNote",
      });
      return content;
    }

    entries.forEach(([key, value], index) => {
      const formattedKey = formatPropertyName(key);
      const currentPath = parentPath ? `${parentPath}_${key}` : key;

      // Add beautiful section headers based on level - simplified for main topics
      if (level === 0) {
        // Generate the same ID format as in buildSimplifiedTOC with unique prefix
        const sectionId = parentPath
          ? `${parentPath}section_${key.replace(/\s+/g, "_").toLowerCase()}`
          : `section_${key.replace(/\s+/g, "_").toLowerCase()}`;
        content.push({
          text: `${formattedKey}`,
          style: "sectionHeader",
          id: sectionId,
        });
      } else if (level === 1) {
        content.push({
          text: `${formattedKey}`,
          style: "subsectionHeader",
          margin: [0, 20, 0, 8],
        });
      } else {
        content.push({
          text: `${formattedKey}`,
          style: "propertyLabel",
          margin: [level * 10, 10, 0, 4],
        });
      }

      // Process the value recursively with updated path
      const subContent = convertToStructuredDocument(
        value,
        level + 1,
        currentPath,
        key
      );
      content.push(...subContent);

      // Add clean spacing between major sections
      if (level === 0 && index < entries.length - 1) {
        content.push({
          text: "---",
          style: "dataValue",
          alignment: "center",
          color: "#e2e8f0",
          margin: [0, 20, 0, 20],
        });
      }
    });
  }

  return content;
};

// MAIN ULTRA-COMPLETE PDF GENERATOR - Creates professional structured documents
export const generateUltraCompletePDF = async (
  certificateType: CertificateType
): Promise<void> => {
  try {
    const pdfMake = await loadPdfMake();
    if (!pdfMake) {
      throw new Error("Failed to load PDF library");
    }

    const styles = getUltraDataStyles();
    let documentContent: Content[] = [];

    if (certificateType === "ALL") {
      // Generate beautiful PDF for ALL certificates with table of contents
      documentContent = [
        {
          text: "*** Complete Certificate Guide Collection ***",
          style: "title",
        },
        {
          text: "Your Comprehensive Guide to English Language Certifications",
          style: "subsectionHeader",
          alignment: "center",
          margin: [0, 0, 0, 15],
        },
        {
          text: `Generated on ${ultraCompleteDataMapping["All Skills"].createdAt}`,
          style: "highlightBox",
          alignment: "center",
          margin: [0, 0, 0, 2],
        },

        {
          text: `Lastly updated on ${ultraCompleteDataMapping["All Skills"].updatedAt}`,
          style: "updatedText",
          alignment: "center",
          margin: [0, 0, 0, 25],
        },

        {
          text: "MAIN TOPICS",
          style: "tocTitle",
          margin: [0, 25, 0, 20],
        },
      ];

      // Add beautiful table of contents with navigation links in table format
      const certificateSymbols: Record<string, string> = {
        Cambridge: "[CAMBRIDGE]",
        IELTS: "[IELTS]",
        PTE: "[PTE]",
        SAT: "[SAT]",
        TOEFL: "[TOEFL]",
        TOEIC: "[TOEIC]",
        VSTEP: "[VSTEP]",
        "All Skills": "[ALL-SKILLS]",
      };

      // Create table rows for main topics
      const tableRows: TableRow[] = [
        // Table header
        [
          {
            text: "#",
            style: "tableHeader",
            alignment: "center",
            margin: [5, 8, 5, 8],
          },
          {
            text: "Certificate Topic",
            style: "tableHeader",
            alignment: "left",
            margin: [10, 8, 10, 8],
          },
        ],
      ];

      // Add certificate topics to table
      Object.entries(ultraCompleteDataMapping).forEach(([certName], index) => {
        const symbol =
          certificateSymbols[certName as keyof typeof certificateSymbols] ||
          "[CERT]";
        const linkId = `cert_${certName.replace(/\s+/g, "_").toLowerCase()}`;

        tableRows.push([
          {
            text: (index + 1).toString(),
            style: "tableCell",
            alignment: "center",
            margin: [5, 8, 5, 8],
            bold: true,
            color: "#1a365d",
          },
          {
            text: {
              text: `${symbol} ${certName} Certificate`,
              linkToDestination: linkId,
            },
            style: "tocTableCell",
            alignment: "left",
            margin: [10, 8, 10, 8],
            bold: true,
            fontSize: 12,
          },
        ]);
      });

      // Add the table to document content
      documentContent.push({
        table: {
          widths: ["auto", "*"],
          headerRows: 1,
          body: tableRows,
        },
        layout: {
          hLineWidth: (i: number, node: { table: { body: TableRow[] } }) => {
            if (i === 0 || i === 1) return 2; // Header lines
            if (i === node.table.body.length) return 2; // Bottom line
            return 1; // Regular lines
          },
          vLineWidth: () => 1,
          hLineColor: () => "#e2e8f0",
          vLineColor: () => "#e2e8f0",
          paddingLeft: () => 8,
          paddingRight: () => 8,
          paddingTop: () => 6,
          paddingBottom: () => 6,
        } as CustomTableLayout,
        margin: [40, 0, 40, 30],
      });

      // Add detailed sub-topics for each certificate in separate table
      Object.entries(ultraCompleteDataMapping).forEach(
        ([certName], certIndex) => {
          const certData =
            ultraCompleteDataMapping[
              certName as keyof typeof ultraCompleteDataMapping
            ];
          const simplifiedTOC = buildSimplifiedTOC(
            certData,
            `${certName.toLowerCase()}_`
          );

          if (simplifiedTOC.length > 0) {
            // Create sub-topics table
            const subTopicRows: TableRow[] = [
              [
                {
                  text: `${certName} - Detailed Topics`,
                  style: "subsectionHeader",
                  colSpan: 2,
                  alignment: "center",
                  margin: [5, 8, 5, 8],
                  fillColor: "#f8fafc",
                },
                {},
              ],
            ];

            simplifiedTOC.slice(0, 10).forEach((tocItem, subIndex) => {
              subTopicRows.push([
                {
                  text: `${certIndex + 1}.${subIndex + 1}`,
                  style: "tableCell",
                  alignment: "center",
                  margin: [5, 6, 5, 6],
                  fontSize: 10,
                  color: "#4a5568",
                },
                {
                  text: tocItem.text.replace("- ", ""), // Remove the dash prefix
                  style: "tocTableCell",
                  alignment: "left",
                  margin: [10, 6, 10, 6],
                  fontSize: 10,
                  linkToDestination: tocItem.linkToDestination,
                },
              ]);
            });

            documentContent.push({
              table: {
                widths: ["auto", "*"],
                headerRows: 1,
                body: subTopicRows,
              },
              layout: {
                hLineWidth: (
                  i: number,
                  node: { table: { body: TableRow[] } }
                ) => {
                  if (i === 0 || i === 1) return 1; // Header lines
                  if (i === node.table.body.length) return 1; // Bottom line
                  return 0.5; // Regular lines
                },
                vLineWidth: () => 0.5,
                hLineColor: () => "#e2e8f0",
                vLineColor: () => "#e2e8f0",
                paddingLeft: () => 6,
                paddingRight: () => 6,
                paddingTop: () => 4,
                paddingBottom: () => 4,
              } as CustomTableLayout,
              margin: [60, 10, 60, 20],
            });
          }
        }
      );

      // Add page break after TOC
      documentContent.push({ text: "", pageBreak: "after" } as Content);

      // Process each certificate dataset with beautiful structured formatting
      Object.entries(ultraCompleteDataMapping).forEach(
        ([certName, certData], index) => {
          console.log(
            `Creating beautiful structured document for ${certName}...`
          );

          const symbol =
            certificateSymbols[certName as keyof typeof certificateSymbols] ||
            "[CERT]";
          const linkId = `cert_${certName.replace(/\s+/g, "_").toLowerCase()}`;

          documentContent.push(
            {
              text: `${symbol} ${certName} Certificate Guide`,
              style: "title",
              margin: [0, 0, 0, 20],
              id: linkId,
            },
            {
              text: `Complete Information and Guidelines`,
              style: "subsectionHeader",
              alignment: "center",
              margin: [0, 0, 0, 30],
            }
          );

          // Convert data to beautifully structured document format
          const structuredContent = convertToStructuredDocument(
            certData,
            0,
            certName.toLowerCase() + "_",
            ""
          );
          documentContent.push(...structuredContent);

          // Add elegant page break between certificates (except for the last one)
          if (index < Object.keys(ultraCompleteDataMapping).length - 1) {
            documentContent.push({ text: "", pageBreak: "after" } as Content);
          }
        }
      );
    } else {
      // Generate beautiful PDF for single certificate
      const certData = ultraCompleteDataMapping[certificateType];
      if (!certData) {
        throw new Error(
          `No data found for certificate type: ${certificateType}`
        );
      }

      console.log(
        `Creating beautiful structured document for ${certificateType}...`
      );

      const certificateSymbols: Record<string, string> = {
        Cambridge: "[CAMBRIDGE]",
        IELTS: "[IELTS]",
        PTE: "[PTE]",
        SAT: "[SAT]",
        TOEFL: "[TOEFL]",
        TOEIC: "[TOEIC]",
        VSTEP: "[VSTEP]",
        "All Skills": "[ALL-SKILLS]",
      };

      const symbol =
        certificateSymbols[
          certificateType as keyof typeof certificateSymbols
        ] || "[CERT]";

      documentContent = [
        {
          text: `${symbol} ${certificateType} Certificate Guide`,
          style: "title",
        },
        {
          text: `Complete Information and Guidelines`,
          style: "subsectionHeader",
          alignment: "center",
          margin: [0, 5, 0, 20],
        },
        {
          text: `Generated on ${certData.createdAt}`,
          style: "highlightBox",
          alignment: "center",
          margin: [0, 0, 0, 2],
        },
        {
          text: `Last updated on ${certData.updatedAt}`,
          style: "updatedText",
          alignment: "center",
          margin: [0, 0, 0, 25],
        },
        {
          text: "MAIN TOPICS",
          style: "tocTitle",
          margin: [0, 20, 0, 15],
        },
      ];

      // Add simplified table of contents for single certificate in table format
      const simplifiedTOC = buildSimplifiedTOC(
        certData,
        certificateType.toLowerCase() + "_"
      );

      if (simplifiedTOC.length > 0) {
        // Create table rows for single certificate topics
        const tableRows: TableRow[] = [
          // Table header
          [
            {
              text: "#",
              style: "tableHeader",
              alignment: "center",
              margin: [5, 8, 5, 8],
            },
            {
              text: "Topic Name",
              style: "tableHeader",
              alignment: "left",
              margin: [10, 8, 10, 8],
            },
          ],
        ];

        // Add topics to table
        simplifiedTOC.forEach((tocItem, index) => {
          tableRows.push([
            {
              text: (index + 1).toString(),
              style: "tableCell",
              alignment: "center",
              margin: [5, 8, 5, 8],
              bold: true,
              color: "#1a365d",
            },
            {
              text: {
                text: tocItem.text.replace("- ", ""), // Remove the dash prefix
                linkToDestination: tocItem.linkToDestination,
              },
              style: "tocTableCell",
              alignment: "left",
              margin: [10, 8, 10, 8],
              bold: true,
              fontSize: 12,
            },
          ]);
        });

        // Add the table to document content
        documentContent.push({
          table: {
            widths: ["auto", "*"],
            headerRows: 1,
            body: tableRows,
          },
          layout: {
            hLineWidth: (i: number, node: { table: { body: TableRow[] } }) => {
              if (i === 0 || i === 1) return 2; // Header lines
              if (i === node.table.body.length) return 2; // Bottom line
              return 1; // Regular lines
            },
            vLineWidth: () => 1,
            hLineColor: () => "#e2e8f0",
            vLineColor: () => "#e2e8f0",
            paddingLeft: () => 8,
            paddingRight: () => 8,
            paddingTop: () => 6,
            paddingBottom: () => 6,
          } as CustomTableLayout,
          margin: [40, 0, 40, 30],
        });
      }

      // Add page break after TOC
      documentContent.push({ text: "", pageBreak: "after" } as Content);

      // Convert data to beautifully structured document format
      const structuredContent = convertToStructuredDocument(
        certData,
        0,
        certificateType.toLowerCase() + "_",
        ""
      );
      documentContent.push(...structuredContent);
    }

    const documentDefinition: TDocumentDefinitions = {
      content: documentContent,
      styles: styles,
      pageSize: "A4",
      pageMargins: [45, 60, 45, 70], // Enhanced professional margins
      defaultStyle: {
        fontSize: 11,
        lineHeight: 1.4,
        font: "Roboto",
      },
      footer: (currentPage: number, pageCount: number) => ({
        text: `*** Page ${currentPage} of ${pageCount} - Professional Certificate Guide ***`,
        style: "dataValue",
        alignment: "center",
        margin: [0, 15, 0, 0],
        fontSize: 9,
        color: "#666666",
      }),
      header: (currentPage: number) => {
        if (currentPage === 1) return null;
        return {
          text: `${
            certificateType === "ALL"
              ? "*** Complete Certificate Collection ***"
              : `*** ${certificateType} Certificate Guide ***`
          }`,
          style: "dataValue",
          alignment: "center",
          margin: [0, 20, 0, 0],
          fontSize: 9,
          color: "#666666",
        };
      },
      info: {
        title: `${certificateType} Beautiful Certificate Guide`,
        author: "Professional Certificate Documentation System",
        subject: `Complete beautiful guide for ${certificateType} certificate preparation`,
        keywords:
          "Certificate, Beautiful Guide, Professional Documentation, Study Material, No IDs",
        creator: "Beautiful Document Generator v5.0",
        producer: "Professional Certificate Guide System",
        creationDate: new Date(),
        modDate: new Date(),
      },
      compress: true,
    };

    // Generate and download the PDF
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    const fileName =
      certificateType === "ALL"
        ? "Beautiful_Certificate_Collection_Guide.pdf"
        : `${certificateType}_Beautiful_Certificate_Guide.pdf`;

    console.log(`Generating beautiful PDF: ${fileName}`);
    pdfDoc.download(fileName);

    console.log(
      `Beautiful certificate guide generated successfully for ${certificateType}`
    );
    console.log(
      `Professional document with filtered content (no IDs) and enhanced formatting`
    );
  } catch (error) {
    console.error("Error generating beautiful certificate guide:", error);
    throw new Error(
      `Failed to generate beautiful certificate guide: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// Export data analysis function for verification
export const analyzeUltraDataCompleteness = () => {
  let totalSize = 0;
  let totalProperties = 0;

  Object.entries(ultraCompleteDataMapping).forEach(([_, certData]) => {
    const dataSize = JSON.stringify(certData).length;
    const propertyCount = Object.keys(certData).length;

    totalSize += dataSize;
    totalProperties += propertyCount;
  });
};

// Type definitions for various grammar data structures
export interface GrammarStructure {
  form?: string;
  description?: string;
  examples?: string | string[];
}

export interface WeeklyScheduleItem {
  week?: string;
  description?: string;
  dailySchedule?: Record<string, string>;
  topics?: string;
  studyTips?: string[];
  assessmentCriteria?: string[];
}

export interface LevelBreakdownItem {
  focus?: string;
  duration?: string;
  description?: string;
  objectives?: string[];
  practiceActivities?: string[];
  topics?: string;
}

export interface TopicItem {
  name?: string;
  displayName?: string;
  title?: string;
  key?: string;
  [key: string]: unknown;
}

export interface ExampleItem {
  example?: string;
  text?: string;
  [key: string]: unknown;
}

// Base primitive types
type PrimitiveType = string | number | boolean | null | undefined;

// Object types
type ObjectType =
  | GrammarStructure
  | WeeklyScheduleItem
  | LevelBreakdownItem
  | TopicItem
  | ExampleItem
  | Record<string, unknown>;

// Array types
type ArrayType = PrimitiveType[] | ObjectType[];

// Union type for all possible grammar content types
export type GrammarContent = PrimitiveType | ObjectType | ArrayType;

// Type guard functions
export const isWeeklyScheduleItem = (
  obj: unknown
): obj is WeeklyScheduleItem => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    ("week" in obj || "dailySchedule" in obj)
  );
};

export const isLevelBreakdownItem = (
  obj: unknown
): obj is LevelBreakdownItem => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "focus" in obj &&
    "duration" in obj
  );
};

export const isGrammarStructure = (obj: unknown): obj is GrammarStructure => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    ("form" in obj || "description" in obj || "examples" in obj)
  );
};

export const isTopicItem = (obj: unknown): obj is TopicItem => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    ("name" in obj || "displayName" in obj || "title" in obj)
  );
};

export const isExampleItem = (obj: unknown): obj is ExampleItem => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    ("example" in obj || "text" in obj)
  );
};

export interface ExportData {
  tenseName: string;
  tenseKey: string;
  data: GrammarContent;
  exportFormat: "pdf" | "word" | "json";
}

// Helper function to improve text readability by adding proper spacing
const improveTextSpacing = (text: string): string => {
  if (!text || typeof text !== "string") return text;

  return (
    text
      // Handle CamelCase by adding spaces before capital letters
      .replace(/([a-z])([A-Z])/g, "$1 $2")

      // Handle grammar terms that might be stuck together
      .replace(
        /([a-z]+)(Form|Structure|Pattern|Examples|Usage|Description|Rules|Notes|Tips)/g,
        "$1 $2"
      )
      .replace(
        /(Form|Structure|Pattern|Examples|Usage|Description|Rules|Notes|Tips)([a-z]+)/g,
        "$1 $2"
      )

      // Handle specific grammar patterns
      .replace(
        /([a-z]+)(Subject|Object|Verb|Adjective|Adverb|Clause|Infinitive|Participle|Auxiliary|Modal|Complement|Predicate)/g,
        "$1 $2"
      )
      .replace(
        /(Subject|Object|Verb|Adjective|Adverb|Clause|Infinitive|Participle|Auxiliary|Modal|Complement|Predicate)([a-z]+)/g,
        "$1 $2"
      )

      // Handle tense and aspect terms
      .replace(
        /([a-z]+)(Present|Past|Future|Perfect|Continuous|Progressive|Simple|Conditional)/g,
        "$1 $2"
      )
      .replace(
        /(Present|Past|Future|Perfect|Continuous|Progressive|Simple|Conditional)([a-z]+)/g,
        "$1 $2"
      )

      // Handle punctuation spacing
      .replace(/([a-zA-Z])([.!?,:;])([A-Z][a-zA-Z]+)/g, "$1$2 $3")
      .replace(/([a-zA-Z]):([a-zA-Z])/g, "$1: $2")
      .replace(/([a-zA-Z]),([a-zA-Z])/g, "$1, $2")
      .replace(/([a-zA-Z]);([a-zA-Z])/g, "$1; $2")

      // Handle parentheses
      .replace(/([a-zA-Z])\(/g, "$1 (")
      .replace(/\)([a-zA-Z])/g, ") $1")

      // Handle common grammar auxiliaries
      .replace(
        /([a-z]+)(am\/is\/are|was\/were|will\/shall|have\/has|had|would|could|should|might|may)/g,
        "$1 $2"
      )
      .replace(
        /(am\/is\/are|was\/were|will\/shall|have\/has|had|would|could|should|might|may)([a-z]+)/g,
        "$1 $2"
      )

      // Handle verb endings
      .replace(/([a-z]+)(-ing)([A-Z][a-z])/g, "$1$2 $3")
      .replace(/([a-z]+)(-ed)([A-Z][a-z])/g, "$1$2 $3")

      // Clean up multiple spaces
      .replace(/\s+/g, " ")
      .trim()
  );
};

// Helper function to format grammar content with proper structure
const formatGrammarContent = (content: string): string => {
  if (!content || typeof content !== "string") return content;

  // Apply spacing improvements first
  let formatted = improveTextSpacing(content);

  // Enhanced formatting for grammar structures
  formatted = formatted
    // Format main section headers
    .replace(
      /\b(Affirmative|Negative|Question|Interrogative):\s*/g,
      "\n\n📝 $1:\n"
    )
    .replace(/\b(Form|Structure):\s*/g, "\n🏗️ $1: ")
    .replace(/\b(Description|Definition):\s*/g, "\n📖 $1: ")
    .replace(/\b(Examples?):\s*/g, "\n💡 Examples:\n")
    .replace(/\b(Usage|Uses?):\s*/g, "\n🎯 Usage: ")
    .replace(/\b(Rules?):\s*/g, "\n📋 Rules:\n")
    .replace(/\b(Notes?|Tips?):\s*/g, "\n💭 Notes:\n")

    // Format numbered lists
    .replace(/(\d+\.\s*)/g, "\n  $1")

    // Format bullet points
    .replace(/•\s*/g, "\n  • ")

    // Clean up extra newlines
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return formatted;
};

// Helper function to safely render object content with improved formatting and clean display
export const renderObjectContent = (
  content: GrammarContent,
  level: number = 0,
  hideKeys: boolean = false
): string => {
  if (content === null || content === undefined) {
    return "No data available";
  }

  if (typeof content === "string") {
    return formatGrammarContent(content);
  }

  if (typeof content === "number" || typeof content === "boolean") {
    return String(content);
  }

  if (Array.isArray(content)) {
    if (content.length === 0) return "No information available";

    return content
      .map((item, index) => {
        if (typeof item === "object" && item !== null) {
          // Check if this is a simple object that should just show its values
          const values = Object.values(item);
          const hasOnlyPrimitives = values.every(
            (val) =>
              typeof val === "string" ||
              typeof val === "number" ||
              typeof val === "boolean"
          );

          if (hasOnlyPrimitives && values.length <= 3) {
            // For simple objects, just show the values without keys
            return values
              .filter((val) => val !== null && val !== undefined)
              .map((val) => improveTextSpacing(String(val)))
              .join(" - ");
          }

          // Special handling for weekly structure objects
          if (isWeeklyScheduleItem(item)) {
            let weekContent = `━━━ ${item.week || "Week"} ━━━\n`;

            if (item.description) {
              weekContent += `📖 Description: ${formatGrammarContent(
                item.description
              )}\n\n`;
            }

            if (item.dailySchedule) {
              weekContent += `📅 Daily Schedule:\n`;
              Object.entries(item.dailySchedule).forEach(([day, activity]) => {
                weekContent += `  • ${day}: ${improveTextSpacing(
                  String(activity)
                )}\n`;
              });
              weekContent += `\n`;
            }

            if (item.topics) {
              weekContent += `📚 Grammar Topics: ${improveTextSpacing(
                String(item.topics)
              )}\n\n`;
            }

            if (item.studyTips && Array.isArray(item.studyTips)) {
              weekContent += `💡 Study Tips:\n`;
              item.studyTips.forEach((tip: string, tipIndex: number) => {
                weekContent += `  ${tipIndex + 1}. ${formatGrammarContent(
                  tip
                )}\n`;
              });
              weekContent += `\n`;
            }

            if (
              item.assessmentCriteria &&
              Array.isArray(item.assessmentCriteria)
            ) {
              weekContent += `✅ Assessment Criteria:\n`;
              item.assessmentCriteria.forEach(
                (criteria: string, criteriaIndex: number) => {
                  weekContent += `  ${
                    criteriaIndex + 1
                  }. ${formatGrammarContent(criteria)}\n`;
                }
              );
            }

            return weekContent;
          }

          // Special handling for level breakdown objects
          if (isLevelBreakdownItem(item)) {
            let levelContent = `━━━ ${item.focus || "Focus"} (${
              item.duration || "Duration"
            }) ━━━\n`;

            if (item.description) {
              levelContent += `📖 Description: ${formatGrammarContent(
                item.description
              )}\n\n`;
            }

            if (item.objectives && Array.isArray(item.objectives)) {
              levelContent += `🎯 Learning Objectives:\n`;
              item.objectives.forEach((objective: string, objIndex: number) => {
                levelContent += `  ${objIndex + 1}. ${formatGrammarContent(
                  objective
                )}\n`;
              });
              levelContent += `\n`;
            }

            if (
              item.practiceActivities &&
              Array.isArray(item.practiceActivities)
            ) {
              levelContent += `📝 Practice Activities:\n`;
              item.practiceActivities.forEach(
                (activity: string, actIndex: number) => {
                  levelContent += `  ${actIndex + 1}. ${formatGrammarContent(
                    activity
                  )}\n`;
                }
              );
              levelContent += `\n`;
            }

            if (item.topics) {
              levelContent += `📚 Grammar Topics Covered: ${improveTextSpacing(
                String(item.topics)
              )}\n`;
            }

            return levelContent;
          }

          // Special handling for grammar structure objects (form, description, examples)
          if (isGrammarStructure(item)) {
            let structureContent = "";

            if (item.form) {
              structureContent += `🏗️ Form: ${formatGrammarContent(
                item.form
              )}\n\n`;
            }

            if (item.description) {
              structureContent += `📖 Description: ${formatGrammarContent(
                item.description
              )}\n\n`;
            }

            if (item.examples) {
              structureContent += `💡 Examples:\n`;
              if (Array.isArray(item.examples)) {
                item.examples.forEach((example: string, exIndex: number) => {
                  structureContent += `  ${exIndex + 1}. ${formatGrammarContent(
                    example
                  )}\n`;
                });
              } else {
                structureContent += `  ${formatGrammarContent(
                  String(item.examples)
                )}\n`;
              }
            }

            return structureContent.trim();
          }

          if (isTopicItem(item)) {
            const topicName = improveTextSpacing(
              item.name ||
                item.displayName ||
                item.title ||
                `Topic ${index + 1}`
            );

            if (hideKeys) {
              // Just show the name/title without other details
              return String(topicName);
            }

            const otherContent = Object.entries(item)
              .filter(
                ([key]) =>
                  !["name", "displayName", "title", "key"].includes(key)
              )
              .map(([_, value]) => {
                if (Array.isArray(value) && value.length > 0) {
                  return value
                    .map((v) => improveTextSpacing(String(v)))
                    .join(", ");
                } else if (typeof value === "object" && value !== null) {
                  return renderObjectContent(value, level + 2, true);
                }
                return improveTextSpacing(String(value));
              })
              .filter((content) => content && content !== "")
              .join(" | ");

            return otherContent
              ? `${topicName}: ${otherContent}`
              : String(topicName);
          } else {
            // For regular objects without special naming - improve formatting
            let formattedContent = "";
            const entries = Object.entries(item);

            // Check if this looks like an example object
            if (isExampleItem(item)) {
              formattedContent = entries
                .map(([key, value]) => {
                  const formattedKey = formatKey(key);
                  if (Array.isArray(value)) {
                    return `${formattedKey}:\n  ${value
                      .map((v) => `• ${formatGrammarContent(String(v))}`)
                      .join("\n  ")}`;
                  }
                  return `${formattedKey}: ${formatGrammarContent(
                    String(value)
                  )}`;
                })
                .join("\n");
            } else {
              // For other complex objects, use better separation
              const contentValues = Object.entries(item)
                .map(([key, value]) => {
                  const formattedKey = formatKey(key);
                  if (Array.isArray(value)) {
                    return `${formattedKey}: ${value
                      .map((v) => improveTextSpacing(String(v)))
                      .join(", ")}`;
                  } else if (typeof value === "object" && value !== null) {
                    return `${formattedKey}: ${renderObjectContent(
                      value,
                      level + 2,
                      true
                    )}`;
                  }
                  return `${formattedKey}: ${improveTextSpacing(
                    String(value)
                  )}`;
                })
                .filter((content) => content && content !== "")
                .join(" | ");
              formattedContent = contentValues || "No content available";
            }

            return formattedContent;
          }
        }
        return improveTextSpacing(String(item));
      })
      .join("\n\n"); // Add extra spacing between array items for better readability
  }

  if (typeof content === "object") {
    if (hideKeys) {
      // When hiding keys, just show the values in a clean format
      return Object.values(content)
        .map((value) => {
          if (Array.isArray(value)) {
            return value.map((v) => improveTextSpacing(String(v))).join(", ");
          } else if (typeof value === "object" && value !== null) {
            return renderObjectContent(value, level + 1, true);
          }
          return improveTextSpacing(String(value));
        })
        .filter((content) => content && content !== "")
        .join(" | ");
    }

    return Object.entries(content)
      .map(([key, value]) => {
        const formattedKey = formatKey(key);

        if (Array.isArray(value)) {
          if (value.length === 0) return `${formattedKey}: No entries`;

          // Special formatting for examples, rules, and other lists
          let arrayContent;
          if (
            key.toLowerCase().includes("example") ||
            key.toLowerCase().includes("rule") ||
            key.toLowerCase().includes("usage") ||
            key.toLowerCase().includes("pattern") ||
            key.toLowerCase().includes("tip") ||
            key.toLowerCase().includes("step")
          ) {
            // Format as numbered or bulleted list
            arrayContent = value
              .map((item, index) => {
                if (typeof item === "string") {
                  return `${index + 1}. ${formatGrammarContent(item)}`;
                }
                return `${index + 1}. ${renderObjectContent(
                  item,
                  level + 2,
                  true
                )}`;
              })
              .join("\n");
          } else {
            // For other arrays, use bullet points
            arrayContent = value
              .map((item) => {
                if (typeof item === "string") {
                  return `• ${formatGrammarContent(item)}`;
                }
                return `• ${renderObjectContent(item, level + 2, true)}`;
              })
              .join("\n");
          }

          return `${formattedKey}:\n${arrayContent}`;
        } else if (typeof value === "object" && value !== null) {
          // Clean nested object rendering without excessive nesting
          const nestedString = renderObjectContent(value, level + 1, level > 2);
          return `${formattedKey}:\n${nestedString}`;
        }

        const stringValue =
          typeof value === "string"
            ? formatGrammarContent(value)
            : improveTextSpacing(String(value));
        return `${formattedKey}: ${stringValue}`;
      })
      .join("\n\n"); // Add extra spacing between sections for better readability
  }

  return String(content);
};

// Helper function to format keys
const formatKey = (key: string): string => {
  // Ensure the input is a string
  if (typeof key !== "string") {
    key = String(key);
  }

  return (
    key
      // Add spaces before capital letters (camelCase to normal text)
      .replace(/([A-Z])/g, " $1")
      // Capitalize first letter
      .replace(/^./, (str) => str.toUpperCase())
      // Replace underscores with spaces
      .replace(/_/g, " ")
      // Handle specific grammar terms for better readability
      .replace(/\b(Cefr|Api|Pdf|Html|Json|Url)\b/gi, (match) =>
        match.toUpperCase()
      )
      .replace(/\bCefr\b/gi, "CEFR")
      // Clean up extra spaces
      .replace(/\s+/g, " ")
      .trim()
  );
};

// Comprehensive icon mapping for different grammar concepts
export const getGrammarIcon = (conceptName: string): string => {
  const iconMap: { [key: string]: string } = {
    // Learning and Education
    "Digital Learning Integration": "💻",
    "Research Based Insights": "🔬",
    "Cognitive Development": "🧠",
    "Language Acquisition": "🗣️",
    "Pedagogical Approaches": "👨‍🏫",
    "Assessment Methods": "📊",
    "Interactive Learning": "🎮",
    "Multimedia Resources": "🎬",
    "Adaptive Learning": "🔄",
    "Personalized Education": "👤",

    // Grammar Structure
    "Syntactic Analysis": "🏗️",
    "Morphological Patterns": "🧬",
    "Semantic Relations": "🔗",
    "Pragmatic Context": "🌍",
    "Discourse Markers": "➡️",
    "Text Cohesion": "🔗",
    "Register Variation": "🎭",
    "Style Guidelines": "📝",

    // Verb Systems
    "Tense Systems": "⏰",
    "Aspect Marking": "🎯",
    "Modal Systems": "🛡️",
    "Voice Alternation": "🔄",
    "Auxiliary Verbs": "🤝",
    "Phrasal Constructions": "🧩",
    "Verbal Complements": "🔗",
    "Clause Structure": "🏗️",

    // Noun Systems
    "Nominal Morphology": "📦",
    "Case Systems": "📋",
    "Number Marking": "🔢",
    "Gender Systems": "⚧️",
    Definiteness: "🎯",
    Quantification: "📊",
    "Reference Tracking": "👁️",
    "Anaphoric Relations": "🔄",

    // Phonology and Pronunciation
    "Sound Systems": "🔊",
    "Stress Patterns": "⚡",
    Intonation: "🎵",
    Rhythm: "🥁",
    "Connected Speech": "🔗",
    "Pronunciation Rules": "📋",
    "Phonetic Variation": "🔄",
    "Accent Features": "🗣️",

    // Writing Systems
    "Orthographic Rules": "✍️",
    Punctuation: "📍",
    Capitalization: "🔤",
    "Spelling Patterns": "📝",
    "Text Formatting": "📄",
    "Academic Writing": "🎓",
    "Creative Writing": "🎨",
    "Technical Writing": "⚙️",

    // Communication Functions
    "Speech Acts": "💬",
    "Politeness Strategies": "🎩",
    "Turn Taking": "🔄",
    "Conversation Management": "👥",
    "Nonverbal Communication": "👋",
    "Cultural Context": "🌍",
    "Social Interaction": "🤝",
    "Interpersonal Skills": "👫",

    // Error Analysis
    "Common Errors": "❌",
    "Error Patterns": "📊",
    "Corrective Feedback": "✅",
    "Self Correction": "🔄",
    "Peer Review": "👥",
    "Error Prevention": "🛡️",
    "Accuracy Development": "🎯",
    "Fluency Building": "⚡",

    // Assessment and Testing
    "Formative Assessment": "📝",
    "Summative Evaluation": "📊",
    "Portfolio Assessment": "📁",
    "Performance Tasks": "🎭",
    "Rubric Development": "📏",
    "Self Assessment": "🪞",
    "Peer Evaluation": "👥",
    "Progress Tracking": "📈",

    // Technology Integration
    "Language Apps": "📱",
    "Online Resources": "🌐",
    "Virtual Reality": "🥽",
    "Artificial Intelligence": "🤖",
    "Machine Learning": "🧠",
    "Natural Language Processing": "🗣️",
    "Corpus Linguistics": "📚",
    "Data Analytics": "📊",

    // Specific Grammar Topics
    "Compact View": "📋",
    "Detailed View": "🔍",
    "Summary View": "📊",
    "Analysis View": "🔬",
    "Practice Mode": "🏋️",
    "Study Guide": "📖",
    "Reference Material": "📚",
    "Quick Access": "⚡",
  };

  // Try exact match first
  if (iconMap[conceptName]) {
    return iconMap[conceptName];
  }

  // Try partial matches
  for (const [key, icon] of Object.entries(iconMap)) {
    if (
      conceptName.toLowerCase().includes(key.toLowerCase()) ||
      key.toLowerCase().includes(conceptName.toLowerCase())
    ) {
      return icon;
    }
  }

  // Pattern-based matching
  const lowerName = conceptName.toLowerCase();
  if (lowerName.includes("learn") || lowerName.includes("teach")) return "🎓";
  if (lowerName.includes("digital") || lowerName.includes("tech")) return "💻";
  if (lowerName.includes("research") || lowerName.includes("study"))
    return "🔬";
  if (lowerName.includes("cognitive") || lowerName.includes("brain"))
    return "🧠";
  if (lowerName.includes("language") || lowerName.includes("linguistic"))
    return "🗣️";
  if (lowerName.includes("interactive") || lowerName.includes("engage"))
    return "🎮";
  if (lowerName.includes("assessment") || lowerName.includes("test"))
    return "📊";
  if (lowerName.includes("error") || lowerName.includes("mistake")) return "❌";
  if (lowerName.includes("communication") || lowerName.includes("social"))
    return "💬";
  if (lowerName.includes("writing") || lowerName.includes("text")) return "✍️";
  if (lowerName.includes("sound") || lowerName.includes("pronunciation"))
    return "🔊";

  // Default fallback
  return "📄";
};
